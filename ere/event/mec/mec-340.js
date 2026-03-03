const { set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const { get_chara_color } = require('#/data/chara-colors');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecGod {
  get_talents() {
    const { buff } = new DarleyLifeMarks();
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'buff', 50 * (buff + 1)),
        color: get_chara_color(this.id),
        fontWeight: buff > 0 ? 'bold' : void 0,
      },
    ];
  }

  set_callname() {
    set(`callname:${this.id}:0`, 'trainer340');
  }
};
