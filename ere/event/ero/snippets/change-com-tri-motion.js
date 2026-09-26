const era = require('#/era-electron');

const {
  sys_check_distance,
  sys_cm_b_and_cop,
  sys_find_main_parts,
} = require('#/system/ero/sys-calc-distance');

const {
  base_enum,
  motion_enum,
  part_enum,
  towards_enum,
} = require('#/data/ero/part-const');

/**
 * @param {number} cid
 * @param {number} oid
 * @param {number} cpart
 * @param {number} opart
 * @param {boolean} is_ask
 */
function change_com_tri_motion(cid, oid, cpart, opart, is_ask = false) {
  if (era.get('tflag:主导权') !== cid) {
    return;
  }
  const compatible_motions = [base_enum.same];
  const main_parts = sys_find_main_parts(cid, oid);
  if (is_ask) {
    if (
      main_parts.a !== part_enum.hand &&
      main_parts.a !== part_enum.foot &&
      main_parts.d >= part_enum.clitoris &&
      main_parts.d <= part_enum.penis &&
      sys_check_distance(
        cid,
        oid,
        { a: cpart, d: opart },
        { a: motion_enum.lie, d: motion_enum.sit },
        { a: towards_enum.right, d: towards_enum.left },
        main_parts,
        0,
      )
    ) {
      compatible_motions.push(base_enum.s_tri, base_enum.d_tri);
    }
  } else {
    compatible_motions.push(base_enum.b_same);
    if (
      main_parts.a >= part_enum.clitoris &&
      main_parts.a <= part_enum.penis &&
      main_parts.d >= part_enum.clitoris &&
      main_parts.d <= part_enum.penis &&
      sys_check_distance(
        cid,
        oid,
        { a: cpart, d: opart },
        { a: motion_enum.sit, d: motion_enum.lie },
        { a: towards_enum.left, d: towards_enum.right },
        main_parts,
        1,
      )
    ) {
      compatible_motions.push(base_enum.s_tri, base_enum.b_tri);
    }
  }
  sys_cm_b_and_cop(cid, oid, compatible_motions, { a: cpart, d: opart });
}

module.exports = change_com_tri_motion;
