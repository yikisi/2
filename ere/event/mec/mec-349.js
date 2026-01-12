const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new BryneLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '投资顾问',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `使用提供的资金进行投资，每周获得${buff > 0 ? '更多' : '一定'}收益。`,
      },
    ];
  }
};
