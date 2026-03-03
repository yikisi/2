const { get, set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const get_display_name = require('#/utils/calc-display-name');

const { get_chara_color } = require('#/data/chara-colors');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends MecGod {
  get_talents() {
    let { buff } = new GodolphinLifeMarks();
    buff += 1;
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'buff', 50 * buff, 25 * buff),
        color: get_chara_color(this.id),
        fontWeight: buff > 1 ? 'bold' : void 0,
      },
    ];
  }

  set_callname() {
    set(
      `callname:${this.id}:0`,
      i18n().name.kun_template.replace(
        '%NAME%',
        get_display_name(get('callname:0:-1')),
      ),
    );
  }
};
