const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new LightLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: get(`staticcstr:${this.id}:称号`),
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `队伍成员训练经验获取量+${25 * (buff + 1)}%。`,
      },
    ];
  }
};
