const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '针炙名师',
        fontWeight: new SasamiLifeMarks().buff > 0 ? 'bold' : undefined,
        title: '加快队伍成员偏头痛、伤病和疲惫恢复，且更不容易偏头痛。',
      },
    ];
  }
};
