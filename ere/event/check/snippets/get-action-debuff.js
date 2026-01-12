const { get } = require('#/era-electron');

const { pregnant_stage_enum } = require('#/data/ero/status-const');

/** @param {number} cid */
function get_action_debuff(cid) {
  return (
    get(`status:${cid}:偏头痛`) ||
    get(`status:${cid}:疲惫`) > 0 ||
    get(`status:${cid}:伤病`) > 0 ||
    (!get(`cflag:${cid}:种族`) &&
      get(`cflag:${cid}:妊娠阶段`) !== 1 << pregnant_stage_enum.no)
  );
}

module.exports = get_action_debuff;
