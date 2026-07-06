const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  static CHECK = false;

  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  good_morning() {
    const life_marks = LifeEventMarks.get_marks(35);
    if (!life_marks.b_escape) {
      return super.good_morning();
    }
    this.#kojo['good_morning_after_basement'](this.#dict);
    life_marks.b_escape = 0;
  }

  select() {
    const life_marks = LifeEventMarks.get_marks(35);
    if (!sys_check_awake(35) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    this.#kojo['select_after_basement'](this.#dict);
    life_marks.b_escape = 0;
  }
};
