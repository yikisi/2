const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_talents() {
    let { buff } = new EtsukoLifeMarks();
    buff += 1;
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'reporter', 10 * buff),
        color: get_chara_color(this.id),
        fontWeight: buff > 1 ? 'bold' : void 0,
      },
    ];
  }
};
