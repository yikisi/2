const era = require('#/era-electron');

const { clean_part } = require('#/system/ero/sys-calc-ero-part');

const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const base_dict = require('#/data/ero/motion-const');
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
  const base =
    base_dict[motions.a][motions.d][towards.a][towards.d][
      era.get(`tcvar:${cid}:上下`)
    ];
  const is_up = era.get(`tcvar:${cid}:上下`);
  let a_loc;
  let d_loc;
  switch (base) {
    case base_enum.same:
      // 坐标系相同
      if (aim_parts.a === part_enum.hand) {
        a_loc =
          era.get(`tcvar:${cid}:肩膀位置`) - get_part_len(cid, main_parts.a);
        d_loc =
          get_part_len(oid, aim_parts.d) - get_part_len(oid, main_parts.d);
        const arm_len = era.get(`tcvar:${cid}:臂长`);
        return d_loc >= a_loc - arm_len && d_loc <= a_loc + arm_len;
      } else if (aim_parts.d === part_enum.hand) {
        a_loc =
          get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
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
        return d_loc <= f_loc - m_a_loc && d_loc >= v_loc - m_a_loc;
      } else if (aim_parts.d === part_enum.foot) {
        a_loc =
          get_part_len(cid, aim_parts.a) - get_part_len(cid, main_parts.a);
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
    case base_enum.diff:
      // 坐标系相反，攻方目标位置反向相减
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
    case base_enum.s_tri:
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
      return aim_parts.a === part_enum.foot;
  }
  return false;
}

module.exports = {
  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {{a:number,d:number}|0} main_parts
   */
  clean_oor_parts(
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
      if (touch.owner !== defender || !c_t_p_dict[touch.part]) {
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
  },
  sys_check_distance: check_distance,
  /**
   * @param {number} cid
   * @param {number} oid
   */
  sys_check_main_touch(cid, oid) {
    era.set(`tcvar:${cid}:前回接触`, 0);
    find_main_parts(cid, oid);
  },
};
