const era = require('#/era-electron');

const CustomizedLove = require('#/event/love/love-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id);
  }

  async 49(minoru, me) {
    const life_marks = new TokinoLifeMarks();
    if (life_marks.who_am_i === 0) {
      era.set('callname:301:-1', '900102');
    }
    await print_title_with_kojo(this.#kojo, '49', minoru, {
      ...generate_dictionary(this.id, { uma: !0 }),
      CHARA_ACTUAL: minoru.actual_name,
    });
    life_marks.who_am_i = 2;
    await this.common_result();
  }

  async 74(minoru) {
    await print_title_with_kojo(this.#kojo, '74', minoru, this.#dict);
    await this.common_result();
  }

  async 89(minoru) {
    await print_title_with_kojo(this.#kojo, '89', minoru, this.#dict);
    await this.common_result();
  }

  async 99(minoru) {
    await print_title_with_kojo(this.#kojo, '99', minoru, this.#dict);
    await this.common_result();
  }
};
