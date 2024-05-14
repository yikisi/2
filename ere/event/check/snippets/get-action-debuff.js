const { get } = require('#/era-electron');

const { pregnant_stage_enum } = require('#/data/ero/status-const');

/** @param {number} chara_id */
function get_action_debuff(chara_id) {
  return (
    get(`status:${chara_id}:头风`) ||
    get(`status:${chara_id}:疲惫`) > 0 ||
    get(`status:${chara_id}:伤病`) > 0 ||
    (!get(`cflag:${chara_id}:种族`) &&
      get(`cflag:${chara_id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no)
  );
}

module.exports = get_action_debuff;
