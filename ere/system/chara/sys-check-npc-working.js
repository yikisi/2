const { get } = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { pregnant_stage_enum } = require('#/data/ero/status-const');

const maternity_leave =
  (1 << pregnant_stage_enum.resume) + (1 << pregnant_stage_enum.pre_birth);

function sys_check_npc_working(chara_id) {
  return (
    !(get(`cflag:${chara_id}:育成回合计时`) < 3 * 48) &&
    sys_check_awake(chara_id) &&
    (get(`cflag:${chara_id}:妊娠阶段`) & maternity_leave) === 0
  );
}

module.exports = sys_check_npc_working;
