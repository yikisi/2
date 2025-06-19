const era = require('#/era-electron');

const { clean_part } = require('#/system/ero/sys-calc-ero-part');

const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const { part_enum } = require('#/data/ero/part-const');

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
const c_t_p_dict = clean_touch_parts.reduce((p, c) => {
  p[c] = 1;
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
const m_p_dict = main_parts.reduce((p, c) => {
  p[c] = 1;
  return p;
}, {});

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
    return { a: ret[0], d: ret[1].part };
  }
  return era.get(`tcvar:${cid}:前回接触`);
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
  const master = era.get('tflag:主导权');
  const up = era.get(`tcvar:${cid}:上下`);
  console.debug(aim_parts, motions, towards, master, up);
  return false;
}

module.exports = {
  /**
   * @param {number} attacker
   * @param {number} defender
   * @param {{a:number,d:number}} main_parts
   */
  clean_parts_oor(attacker, defender, main_parts) {
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
};
