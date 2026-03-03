const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = LifeEventMarks.get_marks(this.id);
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'buff', buff > 0),
        color: get_chara_color(this.id),
        fontWeight: buff > 0 ? 'bold' : void 0,
      },
    ];
  }
};
