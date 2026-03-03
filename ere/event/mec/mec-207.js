const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const get_display_name = require('#/utils/calc-display-name');

const { get_chara_color } = require('#/data/chara-colors');
const ElfieLifeMarks = require('#/data/event/life-event-marks/life-event-marks-207');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new ElfieLifeMarks();
    return [
      {
        ...di18n.kojo.get_titled_content(
          this.id,
          'uaf_star',
          buff > 0,
          get_display_name(get('callname:0:-1')),
        ),
        color: get_chara_color(this.id),
        fontWeight: buff > 0 ? 'bold' : void 0,
      },
    ];
  }
};
