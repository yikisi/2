const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id);
  }

  async 49(may, me, callname, stage, extra, ebj) {
    const life_marks = new MayLifeMarks();
    era.set('callname:343:-1', '904302');
    await print_title_with_kojo(this.#kojo, '49', may, {
      ...this.#dict,
      CHARA_ACTUAL: may.actual_name,
      who_am_i: life_marks.who_am_i,
    });
    // FLAGNAME:113 = 回合爱慕惩罚
    if (!era.get('flag:113')) {
      await sys_love_uma_in_event(343);
    }
    life_marks.who_am_i = 3;
  }
};
