const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const RyokaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-344');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new RyokaLifeMarks();
    let title = '队伍成员消耗精力减压效果提高';
    if (buff > 0) {
      title += '，压力值获取-20%';
    }
    title += '。';
    return [
      {
        color: get_chara_color(this.id),
        content: '光影捕手',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title,
      },
    ];
  }
};
