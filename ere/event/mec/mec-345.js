const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new LightLifeMarks();
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'dr', 25 * (buff + 1)),
        color: get_chara_color(this.id),
        fontWeight: buff > 0 ? 'bold' : void 0,
      },
    ];
  }
};
