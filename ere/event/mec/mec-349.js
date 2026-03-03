const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new BryneLifeMarks();
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'buff', buff > 0),
        color: get_chara_color(this.id),
        fontWeight: buff > 0 ? 'bold' : void 0,
      },
    ];
  }
};
