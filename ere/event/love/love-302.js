const era = require('#/era-electron');

const CustomizedLove = require('#/event/love/love-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id);
  }

  async 49(taste, me) {
    const life_marks = new TasteLifeMarks();
    era.set('callname:302:-1', '900202');
    await print_title_with_kojo(this.#kojo, '49', taste, {
      ...generate_dictionary(this.id, { uma: !0 }),
      CHARA_ACTUAL: taste.actual_name,
      who_am_i: life_marks.who_am_i,
    });
    life_marks.who_am_i = 2;
    await this.common_result();
  }

  async 74(taste) {
    await print_title_with_kojo(this.#kojo, '74', taste, this.#dict);
    await this.common_result();
  }

  async 89(taste) {
    await print_title_with_kojo(this.#kojo, '89', taste, this.#dict);
    await this.common_result();
  }

  async 99(taste) {
    await print_title_with_kojo(this.#kojo, '99', taste, this.#dict);
    await this.common_result();
  }
};
