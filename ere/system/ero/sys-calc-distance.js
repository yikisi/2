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
const { base_enum, part_enum } = require('#/data/ero/part-const');

const clean_touch_parts = [
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
 */
function get_part_len(cid, part) {
  switch (part) {
    case part_enum.mouth:
      return era.get(`tcvar:${cid}:嘴唇位置`);
    case part_enum.breast:
      return era.get(`tcvar:${cid}:乳房位置`);
    case part_enum.penis:
    case part_enum.clitoris:
    case part_enum.virgin:
    case part_enum.anal:
      return era.get(`tcvar:${cid}:会阴位置`);
    case part_enum.foot:
      return era.get(`cflag:${cid}:身高`);
  }
  return 0;
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
  let a_loc;
  let d_loc;
  if (aim_parts.a === part_enum.hand) {
    a_loc = era.get(`tcvar:${cid}:肩膀位置`) - get_part_len(cid, main_parts.a);
    d_loc = get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
    const arm_len = era.get(`tcvar:${cid}:臂长`);
    return d_loc >= a_loc - arm_len && d_loc <= a_loc + arm_len;
  } else if (aim_parts.d === part_enum.hand) {
    a_loc = get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
    d_loc = era.get(`tcvar:${oid}:肩膀位置`) - get_part_len(oid, main_parts.d);
    const arm_len = era.get(`tcvar:${oid}:臂长`);
    return a_loc >= d_loc - arm_len && a_loc <= d_loc + arm_len;
  } else if (aim_parts.a === part_enum.foot) {
    d_loc = get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
    const m_a_loc = get_part_len(cid, main_parts.a);
    const v_loc = get_part_len(cid, part_enum.virgin) + 1;
    const f_loc = get_part_len(cid, part_enum.foot);
    return d_loc <= f_loc - m_a_loc && d_loc >= v_loc - m_a_loc;
  } else if (aim_parts.d === part_enum.foot) {
    a_loc = get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
    const m_d_loc = get_part_len(oid, main_parts.d);
    const v_loc = get_part_len(oid, part_enum.virgin) + 1;
    const f_loc = get_part_len(oid, part_enum.foot);
    return a_loc <= f_loc - m_d_loc && a_loc >= v_loc - m_d_loc;
  }
  a_loc = get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
  d_loc = get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
  return (
    a_loc !== 0 && a_loc * d_loc >= 0 && Math.abs(a_loc) >= Math.abs(d_loc)
  );
}

/**
 * @param {number} cid the operator of the action
 * @param {number} oid the target of the action
 * @param {{a:number,d:number}} aim_parts
 * @param {{a:number,d:number}} motions
 * @param {{a:number,d:number}} towards directions
 * @param {{a:number,d:number}|0} main_parts
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
) {
  if (!main_parts) {
    return false;
  }
  if (aim_parts.a === main_parts.a && aim_parts.d === main_parts.d) {
    return true;
  }
  const is_up = +(era.get(`tcvar:${cid}:上下`) > era.get(`tcvar:${oid}:上下`));
  const base = base_dict[motions.a][motions.d][towards.a][towards.d][is_up];
  let a_loc;
  let d_loc;
  switch (base) {
    // 坐标系相同
    case base_enum.b_same:
      // 后方同向：主动方会阴不能攻击被动方阴茎
      if (
        get_part_len(cid, part_enum.penis) === get_part_len(cid, aim_parts.a) &&
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
        get_part_len(cid, part_enum.penis) === get_part_len(cid, aim_parts.a) &&
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
      if (aim_parts.a === part_enum.hand) {
        a_loc =
          get_part_len(cid, main_parts.a) - era.get(`tcvar:${cid}:肩膀位置`);
        d_loc =
          get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
        const arm_len = era.get(`tcvar:${cid}:臂长`);
        return d_loc >= a_loc - arm_len && d_loc <= a_loc + arm_len;
      } else if (aim_parts.d === part_enum.hand) {
        a_loc =
          get_part_len(cid, main_parts.a) - get_part_len(cid, aim_parts.a);
        d_loc =
          era.get(`tcvar:${oid}:肩膀位置`) - get_part_len(oid, main_parts.d);
        const arm_len = era.get(`tcvar:${oid}:臂长`);
        return a_loc >= d_loc - arm_len && a_loc <= d_loc + arm_len;
      } else if (aim_parts.a === part_enum.foot) {
        d_loc =
          get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
        const m_a_loc = get_part_len(cid, main_parts.a);
        const v_loc = get_part_len(cid, part_enum.virgin) + 1;
        const f_loc = get_part_len(cid, part_enum.foot);
        return d_loc <= m_a_loc - v_loc && d_loc >= m_a_loc - f_loc;
      } else if (aim_parts.d === part_enum.foot) {
        a_loc =
          get_part_len(cid, main_parts.a) - get_part_len(cid, aim_parts.a);
        const m_d_loc = get_part_len(oid, main_parts.d);
        const v_loc = get_part_len(oid, part_enum.virgin) + 1;
        const f_loc = get_part_len(oid, part_enum.foot);
        return a_loc <= f_loc - m_d_loc && a_loc >= v_loc - m_d_loc;
      }
      a_loc = get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
      d_loc = get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
      return (
        a_loc !== 0 && a_loc * d_loc <= 0 && Math.abs(a_loc) >= Math.abs(d_loc)
      );
    case base_enum.b_tri:
      // 后方同向直角：主动方会阴不能攻击被动方阴茎
      if (
        get_part_len(cid, part_enum.penis) === get_part_len(cid, aim_parts.a) &&
        aim_parts.d === part_enum.penis
      ) {
        return false;
      }
    // eslint-disable-next-line no-fallthrough
    case base_enum.s_tri:
      // 同向直角
      if (
        get_part_len(cid, aim_parts.a) !== get_part_len(cid, main_parts.a) &&
        c_t_p_dict[aim_parts.d] <= c_t_p_dict[main_parts.d]
      ) {
        if (aim_parts.a === part_enum.hand) {
          return (
            era.get(`tcvar:${cid}:臂长`) ** 2 >=
            (era.get(`tcvar:${cid}:肩膀位置`) -
              get_part_len(cid, main_parts.a)) **
              2 +
              (get_part_len(oid, aim_parts.d) -
                get_part_len(oid, main_parts.d)) **
                2
          );
        } else if (aim_parts.a === part_enum.foot && is_up > 0) {
          a_loc =
            get_part_len(cid, main_parts.a) - get_part_len(cid, aim_parts.a);
          const m_d_loc = get_part_len(oid, main_parts.d);
          return (
            a_loc <= get_part_len(oid, part_enum.foot) - m_d_loc &&
            a_loc >= get_part_len(oid, part_enum.virgin) + 1 - m_d_loc
          );
        }
      }
      return false;
    case base_enum.d_tri:
      // 反向直角
      if (
        get_part_len(cid, aim_parts.a) !== get_part_len(cid, main_parts.a) &&
        c_t_p_dict[aim_parts.d] >= c_t_p_dict[main_parts.d]
      ) {
        if (aim_parts.a === part_enum.hand) {
          return (
            era.get(`tcvar:${cid}:臂长`) ** 2 >=
            (era.get(`tcvar:${cid}:肩膀位置`) -
              get_part_len(cid, main_parts.a)) **
              2 +
              (get_part_len(oid, aim_parts.d) -
                get_part_len(oid, main_parts.d)) **
                2
          );
        } else if (aim_parts.a === part_enum.foot && is_up > 0) {
          a_loc =
            get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
          const m_d_loc = get_part_len(oid, main_parts.d);
          return (
            a_loc <= get_part_len(oid, part_enum.foot) - m_d_loc &&
            a_loc >= get_part_len(oid, part_enum.virgin) + 1 - m_d_loc
          );
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
  if (attacker !== era.get('tflag:主导权') || aim_motions.length === 0) {
    return false;
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
  return true;
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {number[]} compat_motions
 * @param {number} is_up
 */
function change_motion_by_base(attacker, defender, compat_motions, is_up = -1) {
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
    return false;
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
  return true;
}

module.exports = {
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
    if (change_motion(attacker, defender, ...aim_motions)) {
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
    if (change_motion_by_base(attacker, defender, compat_motions, is_up)) {
      clean_oor_parts(attacker, defender, main_parts);
    }
  },
};
