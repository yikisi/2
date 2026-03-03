const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'doctor'),
        color: get_chara_color(this.id),
        fontWeight: new SasamiLifeMarks().buff > 0 ? 'bold' : void 0,
      },
    ];
  }
};
