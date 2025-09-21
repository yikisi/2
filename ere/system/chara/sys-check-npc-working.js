const { get } = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { pregnant_stage_enum } = require('#/data/ero/status-const');

const maternity_leave =
  (1 << pregnant_stage_enum.resume) + (1 << pregnant_stage_enum.pre_birth);

/**
 * @param {number} cid
 * @returns {boolean}
 */
function sys_check_npc_working(cid) {
  return (
    !(get(`cflag:${cid}:育成回合计时`) < 3 * 48) &&
    sys_check_awake(cid) &&
    (get(`cflag:${cid}:妊娠阶段`) & maternity_leave) === 0
  );
}

module.exports = sys_check_npc_working;
