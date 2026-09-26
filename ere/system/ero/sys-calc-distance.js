const era = require('#/era-electron');

const { clean_part } = require('#/system/ero/sys-calc-ero-part');

const { get_extremum_entry, sort_list } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const {
  base2motion,
  base_dict,
  get_motion_code,
} = require('#/data/ero/motion-const');
const { base_enum, part_enum, part_touch } = require('#/data/ero/part-const');

const part_head = 99;

const part_shoulder = 98;

const clean_touch_parts = [
  part_head,
  part_shoulder,
  part_enum.mouth,
  part_enum.breast,
  part_enum.hand,
  part_enum.penis,
  part_enum.clitoris,
  part_enum.virgin,
  part_enum.anal,
  part_enum.foot,
];

/** @type {Record<string,1>} */
const touch_part_order = clean_touch_parts.reduce((p, c, i) => {
  p[c] = i + 1;
  return p;
}, {});

// 可作为「主要接触（锚点）」的候选部位
const main_part_candidates = [
  part_enum.mouth,
  part_enum.breast,
  part_enum.penis,
  part_enum.clitoris,
  part_enum.virgin,
  part_enum.anal,
];

/** @type {Record<string,1>} */
const main_part_order = main_part_candidates.reduce((p, c, i) => {
  p[c] = i + 1;
  return p;
}, {});

/**
 * @param {number} cid
 * @param {number} part
 * @returns {[number]|[number,number]}
 */
function get_part_len(cid, part) {
  switch (part) {
    case part_enum.mouth:
      return [era.get(`tcvar:${cid}:嘴唇位置`)];
    case part_shoulder:
      return [era.get(`tcvar:${cid}:肩膀位置`)];
    case part_enum.breast:
      return [era.get(`tcvar:${cid}:乳房位置`)];
    case part_enum.hand:
      return [
        era.get(`tcvar:${cid}:肩膀位置`) - era.get(`tcvar:${cid}:臂长`),
        era.get(`tcvar:${cid}:肩膀位置`) + era.get(`tcvar:${cid}:臂长`),
      ];
    case part_enum.penis:
    case part_enum.clitoris:
    case part_enum.virgin:
    case part_enum.anal:
      return [era.get(`tcvar:${cid}:会阴位置`)];
    case part_enum.foot:
      return [
        era.get(`tcvar:${cid}:会阴位置`) + 1,
        era.get(`cflag:${cid}:身高`),
      ];
  }
  return [0];
}

/**
 * 以主要部位为零点，以身体方向为方向，目标部位的坐标轴范围
 * 注意当主要部位也是可动部位时零点是可动的
 * @param {number} cid
 * @param {number} aim
 * @param {number} main
 * @returns {[number]|[number,number]}
 */
function get_part_dis(cid, aim, main) {
  const aim_len = get_part_len(cid, aim);
  const main_len = get_part_len(cid, main);
  if (aim_len.length === 1 && main_len.length === 1) {
    return [aim_len[0] - main_len[0]];
  } else if (aim_len.length === 2 && main_len.length === 2) {
    return [aim_len[0] - main_len[1], aim_len[1] - main_len[0]];
  } else if (aim_len.length === 2) {
    return aim_len.map((e) => e - main_len[0]);
  } else {
    return [aim_len[0] - main_len[1], aim_len[0] - main_len[0]];
  }
}

/**
 * 找出 cid 与 oid 之间的「主要接触」（锚点）。
 *
 * 距离判定是把「锚点重合」当作两具身体坐标系的原点，再看其它部位相对锚点的偏移；
 * 所以必须先确定一个当前成立的接触对作为锚点。返回值 {a,d}：
 * - a：cid 身上参与该接触的部位
 * - d：oid 身上与之接触的部位
 * 两者当前确实互相接触（由接触部位记录保证）。若 cid 与 oid 当前没有任何
 * 主要接触，返回 0，此时 check_distance 一律判 false。
 *
 * 注意：每一对角色同一时刻只取「一个」锚点。即使同时存在多个主要接触，
 * 也只按下面的优先级挑一个作为坐标系原点，其余接触都要相对它来判定。
 * 优先级：cid 的插入类部位（阴茎 > 外阴/阴道）优先，否则取候选表末位。
 *
 * 结果缓存在 tcvar:cid:前回接触；读取时会校验缓存是否仍是 cid 与 oid 之间
 * 成立的接触，否则重新查找，避免换体位/换对手/接触被清理后用到过期锚点。
 *
 * @param {number} cid
 * @param {number} oid
 * @returns {{a:number,d:number}|0}
 */
function find_main_parts(cid, oid) {
  // 校验缓存：cid 的 a 部位此刻是否仍正接触 oid 的 d 部位
  const cached = era.get(`tcvar:${cid}:前回接触`);
  if (cached) {
    const cached_touch = new EroTouch(cid, cached.a);
    if (cached_touch.owner === oid && cached_touch.part === cached.d) {
      return cached;
    }
  }
  // 扫描 cid 的主要部位，收集「接触对象是 oid、且 oid 那侧也是主要部位」的接触
  const f_parts = main_part_candidates
    .map((p) => [p, new EroTouch(cid, p)])
    .filter((e) => e[1].owner === oid && main_part_order[e[1].part] > 0);
  if (f_parts.length === 0) {
    return 0;
  }
  // 优先取 cid 的插入相关部位（阴茎/外阴/阴道）作为锚点，否则退到最后一个
  let ret = f_parts.find(
    (e) =>
      e[0] === part_enum.penis ||
      e[0] === part_enum.clitoris ||
      e[0] === part_enum.virgin,
  );
  if (ret === undefined) {
    ret = f_parts.at(-1);
  }
  return era.set(`tcvar:${cid}:前回接触`, { a: ret[0], d: ret[1].part });
}

/**
 * @param {number} cid the operator of the action
 * @param {number} oid the target of the action
 * @param {{a:number,d:number}} aim_parts
 * @param {{a:number,d:number}} main_parts
 */
function common_same(cid, oid, aim_parts, main_parts) {
  // 如果是两个范围，检查两个范围有没有交集
  // 如果是一个值和一个范围，检查值是不是能落到范围里
  // 如果是两个值，要求正负号相同，主动方距离更长点
  const a_loc = get_part_dis(cid, aim_parts.a, main_parts.a);
  const d_loc = get_part_dis(oid, aim_parts.d, main_parts.d);
  era.logger.debug(
    `主动方 ${cid} vs 被动方 ${oid}\n主动方部位相对距离=[${a_loc
      .map((d) => d.toFixed(2))
      .join(',')}]，被动方部位相对距离=[${d_loc
      .map((d) => d.toFixed(2))
      .join(
        ',',
      )}]\n主动方目标部位=${part_touch[aim_parts.a]}，主动方主要接触部位=${
      part_touch[main_parts.a]
    }\n被动方目标部位=${part_touch[aim_parts.d]}，被动方主要接触部位=${
      part_touch[main_parts.d]
    }`,
  );
  if (a_loc.length === 1 && d_loc.length === 1) {
    // 两个点都相对锚点有偏移：先用部位序判断两侧是否在锚点同侧，
    // 再要求 |主动方偏移| >= |被动方偏移|——这是有意的不对称放宽：
    // 允许主动方把目标部位伸得比被动方更远，被动方则不允许反向超过。
    return (
      touch_part_order[aim_parts.a] > touch_part_order[main_parts.a] ===
        touch_part_order[aim_parts.d] > touch_part_order[main_parts.d] &&
      Math.abs(a_loc[0]) >= Math.abs(d_loc[0])
    );
  } else if (a_loc.length === 1) {
    return a_loc[0] >= d_loc[0] && a_loc[0] <= d_loc[1];
  } else if (d_loc.length === 1) {
    return d_loc[0] >= a_loc[0] && d_loc[0] <= a_loc[1];
  }
  return a_loc[0] <= d_loc[1] && a_loc[1] >= d_loc[0];
}

/**
 * @param {number} cid the operator of the action
 * @param {number} oid the target of the action
 * @param aim_parts aim body parts
 * @param {number} aim_parts.a the aim body part of the operator
 * @param {number} aim_parts.d the aim body part of the target
 * @param motions motions
 * @param {number} motions.a the motion of the operator
 * @param {number} motions.d the motion of the target
 * @param {{a:number,d:number}} towards directions
 * @param {number} towards.a the direction of the operator
 * @param {number} towards.d the direction of the target
 * @param {{a:number,d:number}|0} main_parts main body parts
 * @param {0|1} is_up
 * @returns {boolean}
 */
function check_distance(
  cid,
  oid,
  aim_parts = { a: part_enum.mouth, d: part_enum.mouth },
  motions = {
    a: era.get(`tcvar:${cid}:体位`),
    d: era.get(`tcvar:${oid}:体位`),
  },
  towards = {
    a: era.get(`tcvar:${cid}:朝向`),
    d: era.get(`tcvar:${oid}:朝向`),
  },
  main_parts = find_main_parts(cid, oid),
  is_up = +(era.get(`tcvar:${cid}:上下`) > era.get(`tcvar:${oid}:上下`)),
) {
  if (!main_parts) {
    return false;
  }
  if (aim_parts.a === main_parts.a && aim_parts.d === main_parts.d) {
    return true;
  }
  const base = base_dict[motions.a][motions.d][towards.a][towards.d][is_up];
  let a_loc;
  let d_loc;
  switch (base) {
    // 坐标系相同
    case base_enum.b_same:
      // 后方同向：主动方会阴不能攻击被动方阴茎
      if (
        get_part_dis(cid, aim_parts.a, part_enum.penis)[0] === 0 &&
        aim_parts.d === part_enum.penis
      ) {
        return false;
      }
    // eslint-disable-next-line no-fallthrough
    case base_enum.same:
      // 同向
      return common_same(cid, oid, aim_parts, main_parts);
    case base_enum.b_con:
      // 背向火车便当后方同向
      if (
        get_part_dis(cid, aim_parts.a, part_enum.penis)[0] === 0 &&
        aim_parts.d === part_enum.penis
      ) {
        return false;
      }
    // eslint-disable-next-line no-fallthrough
    case base_enum.s_con:
      // 火车便当主动方不能用手（在被动方腿上呢）
      if (aim_parts.a === part_enum.hand) {
        return false;
      }
      return common_same(cid, oid, aim_parts, main_parts);
    // 坐标系相反，攻方目标位置反向相减
    case base_enum.diff:
      // 反向
      a_loc = get_part_dis(cid, aim_parts.a, main_parts.a);
      d_loc = get_part_dis(oid, aim_parts.d, main_parts.d);
      era.logger.debug(
        `主动方 ${cid} vs 被动方 ${oid}\n主动方部位相对距离=[${a_loc
          .map((d) => d.toFixed(2))
          .join(',')}]，被动方部位相对距离=[${d_loc
          .map((d) => d.toFixed(2))
          .join(
            ',',
          )}]\n主动方目标部位=${part_touch[aim_parts.a]}，主动方主要接触部位=${
          part_touch[main_parts.a]
        }\n被动方目标部位=${part_touch[aim_parts.d]}，被动方主要接触部位=${
          part_touch[main_parts.d]
        }`,
      );
      // 六九式
      if (
        a_loc[0] ===
          get_part_dis(cid, part_enum.mouth, part_enum.clitoris)[0] &&
        d_loc[0] === get_part_dis(oid, part_enum.mouth, part_enum.clitoris)[0]
      ) {
        return true;
      }
      if (a_loc.length === 1 && d_loc.length === 1) {
        // 反向体位：要求两侧相对锚点分处异侧（!==），其余同 same，
        // 仍是「主动方偏移不小于被动方」的单向放宽。
        return (
          touch_part_order[aim_parts.a] > touch_part_order[main_parts.a] !==
            touch_part_order[aim_parts.d] > touch_part_order[main_parts.d] &&
          Math.abs(a_loc[0]) >= Math.abs(d_loc[0])
        );
      } else if (a_loc.length === 1) {
        return -a_loc[0] >= d_loc[0] && -a_loc[0] <= d_loc[1];
      } else if (d_loc.length === 1) {
        return -d_loc[0] >= a_loc[0] && -d_loc[0] <= a_loc[1];
      }
      return -a_loc[0] >= d_loc[0] && -a_loc[1] <= d_loc[1];
    case base_enum.b_tri:
      // 后方同向直角：主动方会阴不能攻击被动方阴茎
      if (
        get_part_dis(cid, aim_parts.a, part_enum.penis)[0] === 0 &&
        aim_parts.d === part_enum.penis
      ) {
        return false;
      }
    // eslint-disable-next-line no-fallthrough
    case base_enum.s_tri:
      // 同向直角
      if (
        get_part_dis(cid, aim_parts.a, main_parts.a)[0] !== 0 &&
        touch_part_order[aim_parts.d] <= touch_part_order[main_parts.d]
      ) {
        if (aim_parts.a === part_enum.hand) {
          return (
            era.get(`tcvar:${cid}:臂长`) ** 2 >=
            (era.get(`tcvar:${cid}:肩膀位置`) -
              get_part_len(cid, main_parts.a)[0]) **
              2 +
              get_part_dis(oid, aim_parts.d, main_parts.d)[0] ** 2
          );
        } else if (aim_parts.a === part_enum.foot && is_up > 0) {
          a_loc = get_part_dis(cid, aim_parts.a, main_parts.a);
          d_loc = get_part_dis(oid, aim_parts.d, main_parts.d);
          return -d_loc[0] >= a_loc[0] && -d_loc[0] <= a_loc[1];
        }
      }
      return false;
    case base_enum.d_tri:
      // 反向直角
      if (
        get_part_dis(cid, aim_parts.a, main_parts.a)[0] !== 0 &&
        touch_part_order[aim_parts.d] >= touch_part_order[main_parts.d]
      ) {
        if (aim_parts.a === part_enum.hand) {
          return (
            era.get(`tcvar:${cid}:臂长`) ** 2 >=
            (era.get(`tcvar:${cid}:肩膀位置`) -
              get_part_len(cid, main_parts.a)[0]) **
              2 +
              get_part_dis(oid, aim_parts.d, main_parts.d)[0] ** 2
          );
        } else if (aim_parts.a === part_enum.foot && is_up > 0) {
          a_loc = get_part_dis(cid, aim_parts.a, main_parts.a);
          d_loc = get_part_dis(oid, aim_parts.d, main_parts.d);
          return d_loc[0] >= a_loc[0] && d_loc[0] <= a_loc[1];
        }
      }
      return false;
    case base_enum.foot:
      // 只能踩
      return aim_parts.a === part_enum.foot;
    case base_enum.b_foot:
      // 只能被踩
      return aim_parts.d === part_enum.foot;
  }
  return false;
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} motion
 */
function change_motion_by_code(attacker, defender, motion) {
  const result = new Array(5)
    .fill(void 0)
    .map((_, i) => Math.floor(motion / 10 ** i) % 10);
  era.set(`tcvar:${attacker}:上下`, result[4]);
  era.set(`tcvar:${defender}:上下`, 1 - result[4]);
  era.set(`tcvar:${defender}:朝向`, result[3]);
  era.set(`tcvar:${defender}:体位`, result[2]);
  era.set(`tcvar:${attacker}:朝向`, result[1]);
  era.set(`tcvar:${attacker}:体位`, result[0]);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {{a:number,d:number}|0} main_parts
 */
function clean_oor_parts(
  attacker,
  defender,
  main_parts = find_main_parts(attacker, defender),
) {
  if (attacker !== era.get('tflag:主导权')) {
    return false;
  }
  const motions = {
    a: era.get(`tcvar:${attacker}:体位`),
    d: era.get(`tcvar:${defender}:体位`),
  };
  const towards = {
    a: era.get(`tcvar:${attacker}:朝向`),
    d: era.get(`tcvar:${defender}:朝向`),
  };
  for (let i = 2; i < clean_touch_parts.length; ++i) {
    const p = clean_touch_parts[i];
    if (p === main_parts.a) {
      continue;
    }
    const touch = new EroTouch(attacker, p);
    if (
      touch.owner !== defender ||
      !touch_part_order[touch.part] ||
      touch.part === main_parts.d
    ) {
      continue;
    }
    if (
      !check_distance(
        attacker,
        defender,
        { a: p, d: touch.part },
        motions,
        towards,
        main_parts,
      )
    ) {
      clean_part(new EroParticipant(attacker, p));
    }
  }
}

/**
 * 从候选 motion code 里挑与当前状态最接近的一个。
 *
 * 直接用 code 的数值差 |e - curr|：code 的字段位权天然表达了优先级
 * （上下 10⁴ > 守朝向 10³ > 守体位 10² > 攻朝向 10 > 攻体位 1），
 * 即尽量保持上下，其次被动方，主动方最先迁就。若候选全在另一侧上下，
 * 则先把 curr 对齐过去（忽略上下）再比较。
 *
 * @param {number} curr
 * @param {number[]} motion_list
 * @returns {number}
 */
function get_nearest_motion(curr, motion_list) {
  const { max, min } = get_extremum_entry(motion_list, (e) => e);
  let near = curr;
  if (min >= 10000 && near < 10000) {
    near += 10000;
  } else if (max < 10000 && near >= 10000) {
    near -= 10000;
  }
  return get_extremum_entry(motion_list, (e) => Math.abs(e - near)).min;
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number} aim_motions
 */
function change_motion(attacker, defender, ...aim_motions) {
  if (aim_motions.length === 0) {
    return false;
  }
  const curr = get_motion_code(
    era.get(`tcvar:${attacker}:体位`),
    era.get(`tcvar:${defender}:体位`),
    era.get(`tcvar:${attacker}:朝向`),
    era.get(`tcvar:${defender}:朝向`),
    +(era.get(`tcvar:${attacker}:上下`) > era.get(`tcvar:${defender}:上下`)),
  );
  if (aim_motions.indexOf(curr) !== -1) {
    return false;
  }
  const aim = get_nearest_motion(curr, aim_motions);
  era.logger.debug(
    `主动方 ${attacker} vs 被动方 ${defender}\n目标体位列表：[${aim_motions
      .filter((e) => e !== undefined)
      .map((e) => e.toString().padStart(5, '0'))
      .join(
        ',',
      )}]\n当前体位：${curr.toString().padStart(5, '0')}\n最终选择体位：${aim
      .toString()
      .padStart(5, '0')}`,
  );
  change_motion_by_code(attacker, defender, aim);
  return true;
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number[]} compat_bases 可接受的体位关系（base_enum）列表
 * @param {number} is_up -1 表示沿用当前上下；否则按该值（0/1）过滤
 * @returns {boolean} 是否实际改变了体位
 */
function change_motion_by_base(attacker, defender, compat_bases, is_up = -1) {
  if (compat_bases.length === 0) {
    return false;
  }
  const param = [
    era.get(`tcvar:${attacker}:体位`),
    era.get(`tcvar:${defender}:体位`),
    era.get(`tcvar:${attacker}:朝向`),
    era.get(`tcvar:${defender}:朝向`),
    +(era.get(`tcvar:${attacker}:上下`) > era.get(`tcvar:${defender}:上下`)),
  ];
  if (is_up === -1) {
    is_up = param[4];
  }
  if (
    param[4] === is_up &&
    compat_bases.indexOf(
      base_dict[param[0]][param[1]][param[2]][param[3]][param[4]],
    ) !== -1
  ) {
    return false;
  }
  const curr = get_motion_code(...param);
  /** @type {number[]} */
  let motion_list = compat_bases.reduce((p, c) => p.concat(base2motion[c]), []);
  const filtered = motion_list.filter((e) => Math.floor(e / 10000) === is_up);
  if (filtered.length > 0) {
    motion_list = filtered;
  }
  motion_list = sort_list(motion_list, (e) => e, true);
  if (motion_list.length === 0) {
    return false;
  }
  const aim = get_nearest_motion(curr, motion_list);
  if (aim === curr) {
    return false;
  }
  era.logger.debug(
    `主动方 ${attacker} vs 被动方 ${defender}\n目标体位列表：[${motion_list
      .filter((e) => e !== undefined)
      .map((e) => e.toString().padStart(5, '0'))
      .join(
        ',',
      )}]\n当前体位：${curr.toString().padStart(5, '0')}\n最终选择体位：${aim
      .toString()
      .padStart(5, '0')}`,
  );
  change_motion_by_code(attacker, defender, aim);
  return true;
}

module.exports = {
  part_head,
  part_shoulder,
  sys_change_motion: change_motion,
  sys_change_motion_by_base: change_motion_by_base,
  sys_check_distance: check_distance,
  /**
   * 取 a、d 两人当前的体位关系分类（base_enum），不是 motion code。
   * @param {number} a
   * @param {number} d
   * @returns {number}
   */
  sys_get_base(a, d) {
    return base_dict[era.get(`tcvar:${a}:体位`)][era.get(`tcvar:${d}:体位`)][
      era.get(`tcvar:${a}:朝向`)
    ][era.get(`tcvar:${d}:朝向`)][
      +(era.get(`tcvar:${a}:上下`) > era.get(`tcvar:${d}:上下`))
    ];
  },
  /**
   * @param {number} cid
   * @param {number} oid
   */
  sys_check_main_touch(cid, oid) {
    era.set(`tcvar:${cid}:前回接触`, 0);
    find_main_parts(cid, oid);
  },
  /**
   * 检查授乳手交距离，攻击方的乳手距离必须要不小于防御方的口棒距离
   * @param {number} attacker
   * @param {number} defender
   */
  sys_check_mh_dis(attacker, defender) {
    return (
      era.get(`tcvar:${attacker}:肩膀位置`) -
        get_part_len(attacker, part_enum.breast) +
        era.get(`tcvar:${attacker}:臂长`) >=
      get_part_len(defender, part_enum.penis) -
        get_part_len(defender, part_enum.mouth)
    );
  },
  sys_clean_oor_parts: clean_oor_parts,
  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {{a:number,d:number}|0} main_parts
   * @param {number[]} aim_motions
   */
  sys_cm_and_cop(attacker, defender, main_parts, aim_motions) {
    if (attacker === era.get('tflag:主导权')) {
      change_motion(attacker, defender, ...aim_motions);
      clean_oor_parts(attacker, defender, main_parts);
    }
  },
  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {number[]} compat_bases 可接受的体位关系（base_enum）列表
   * @param {{a:number,d:number}|0} main_parts 锚点
   * @param {number} is_up -2 表示不限制上下；-1 表示沿用当前上下
   */
  sys_cm_b_and_cop(attacker, defender, compat_bases, main_parts, is_up = -2) {
    if (attacker === era.get('tflag:主导权')) {
      change_motion_by_base(attacker, defender, compat_bases, is_up);
      clean_oor_parts(attacker, defender, main_parts);
    }
  },
  sys_find_main_parts: find_main_parts,
};
