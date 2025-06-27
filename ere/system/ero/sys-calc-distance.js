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

const clean_touch_parts = [
  part_head,
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
const c_t_p_dict = clean_touch_parts.reduce((p, c, i) => {
  p[c] = i + 1;
  return p;
}, {});

const main_parts = [
  part_enum.mouth,
  part_enum.breast,
  part_enum.penis,
  part_enum.clitoris,
  part_enum.virgin,
  part_enum.anal,
];

/** @type {Record<string,1>} */
const m_p_dict = main_parts.reduce((p, c, i) => {
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
  const aim_len = get_part_len(cid, aim),
    main_len = get_part_len(cid, main);
  if (aim_len.length === 1 && main_len.length === 1) {
    return [aim_len[0] - main_len[0]];
  } else if (aim_len.length === 2 && main_len.length === 2) {
    return [aim_len[0] - main_len[1], aim_len[1] - main_len[0]];
  } else if (aim_len.length === 2) {
    return aim_len.map((e) => e - main_len[0]);
  } else {
    return main_len.map((e) => aim_len[0] - e);
  }
}

/**
 * @param {number} cid
 * @param {number} oid
 * @returns {{a:number,d:number}|0}
 */
function find_main_parts(cid, oid) {
  const ret = era.get(`tcvar:${cid}:前回接触`);
  if (!ret) {
    const f_parts = main_parts
      .map((p) => [p, new EroTouch(cid, p)])
      .filter((e) => e[1].owner === oid && m_p_dict[e[1].part] > 0);
    if (f_parts.length === 0) {
      return 0;
    }
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
  return ret;
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
  // 如果是两个值，要求正负号相同，攻击者距离更长点
  const a_loc = get_part_dis(cid, aim_parts.a, main_parts.a);
  const d_loc = get_part_dis(oid, aim_parts.d, main_parts.d);
  era.logger.debug(
    `a_loc=[${a_loc.join(',')}],d_loc=[${d_loc.join(',')}]\naim_part.a=${part_touch[aim_parts.a]},main_part.a=${
      part_touch[main_parts.a]
    }\naim_part.d=${part_touch[aim_parts.d]},main_part.d=${
      part_touch[main_parts.d]
    }`,
  );
  if (a_loc.length === 1 && d_loc.length === 1) {
    return (
      c_t_p_dict[aim_parts.a] > c_t_p_dict[main_parts.a] ===
        c_t_p_dict[aim_parts.d] > c_t_p_dict[main_parts.d] &&
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
        `a_loc=[${a_loc.join(',')}],d_loc=[${d_loc.join(',')}]\naim_part.a=${part_touch[aim_parts.a]},main_part.a=${
          part_touch[main_parts.a]
        }\naim_part.d=${part_touch[aim_parts.d]},main_part.d=${
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
        return (
          c_t_p_dict[aim_parts.a] > c_t_p_dict[main_parts.a] !==
            c_t_p_dict[aim_parts.d] > c_t_p_dict[main_parts.d] &&
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
        c_t_p_dict[aim_parts.d] <= c_t_p_dict[main_parts.d]
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
        c_t_p_dict[aim_parts.d] >= c_t_p_dict[main_parts.d]
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
  for (const p of clean_touch_parts) {
    if (p === main_parts.a) {
      continue;
    }
    const touch = new EroTouch(attacker, p);
    if (
      touch.owner !== defender ||
      !c_t_p_dict[touch.part] ||
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
 * @param {number} attacker
 * @param {number} defender
 * @param {number} aim_motions
 */
function change_motion(attacker, defender, ...aim_motions) {
  if (aim_motions.length === 0) {
    return;
  }
  let curr = get_motion_code(
    era.get(`tcvar:${attacker}:体位`),
    era.get(`tcvar:${defender}:体位`),
    era.get(`tcvar:${attacker}:朝向`),
    era.get(`tcvar:${defender}:朝向`),
    +(era.get(`tcvar:${attacker}:上下`) > era.get(`tcvar:${defender}:上下`)),
  );
  if (aim_motions.indexOf(curr) !== -1) {
    return false;
  }
  const { max, min } = get_extremum_entry(aim_motions, (e) => e);
  if (min >= 10000 && curr < 10000) {
    curr += 10000;
  } else if (max < 10000 && curr >= 10000) {
    curr -= 10000;
  }
  const aim = get_extremum_entry(aim_motions, (e) => Math.abs(e - curr)).min;
  era.logger.debug(
    `[closet motion] atk=${attacker}, def=${defender},\naim motion list=[${aim_motions
      .map((e) => e.toString().padStart(5, '0'))
      .join(',')}]\ncurrent=${curr.toString().padStart(5, '0')}\nselected=${aim
      .toString()
      .padStart(5, '0')}`,
  );
  change_motion_by_code(attacker, defender, aim);
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number[]} compat_motions
 * @param {number} is_up
 */
function change_motion_by_base(attacker, defender, compat_motions, is_up = -1) {
  if (compat_motions.length === 0) {
    return;
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
    compat_motions.indexOf(
      base_dict[param[0]][param[1]][param[2]][param[3]][param[4]],
    ) !== -1
  ) {
    return;
  }
  let curr = get_motion_code(...param);
  /** @type {number[]} */
  let motion_list = compat_motions.reduce(
    (p, c) => p.concat(base2motion[c]),
    [],
  );
  const filtered = motion_list.filter((e) => Math.floor(e / 10000) === is_up);
  if (filtered.length > 0) {
    motion_list = filtered;
  }
  motion_list = sort_list(motion_list, (e) => e, true);
  const { max, min } = get_extremum_entry(motion_list, (e) => e);
  if (min >= 10000 && curr < 10000) {
    curr += 10000;
  } else if (max < 10000 && curr >= 10000) {
    curr -= 10000;
  }
  const aim = get_extremum_entry(motion_list, (e) => Math.abs(e - curr)).min;
  era.logger.debug(
    `[closet motion] atk=${attacker}, def=${defender},\naim motion list=[${motion_list
      .map((e) => e.toString().padStart(5, '0'))
      .join(',')}]\ncurrent=${curr.toString().padStart(5, '0')}\nselected=${aim
      .toString()
      .padStart(5, '0')}`,
  );
  change_motion_by_code(attacker, defender, aim);
}

module.exports = {
  part_head,
  sys_change_motion: change_motion,
  sys_change_motion_by_base: change_motion_by_base,
  sys_check_distance: check_distance,
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
    if (attacker !== era.get('tflag:主导权')) {
      change_motion(attacker, defender, ...aim_motions);
      clean_oor_parts(attacker, defender, main_parts);
    }
  },
  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {number[]} compat_motions
   * @param {{a:number,d:number}|0} main_parts
   * @param {number} is_up
   */
  sys_cm_b_and_cop(attacker, defender, compat_motions, main_parts, is_up = -2) {
    if (attacker !== era.get('tflag:主导权')) {
      change_motion_by_base(attacker, defender, compat_motions, is_up);
      clean_oor_parts(attacker, defender, main_parts);
    }
  },
  sys_find_main_parts: find_main_parts,
};
