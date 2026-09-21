const era = require('#/era-electron');

const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  get #kojo() {
    return i18n().kojo[this.id].ero;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async ero_start(h) {
    const edu_marks = new TamaEduMarks();
    if (
      !edu_marks.chained_heart &&
      era.get(`love:${this.id}`) >= 50 &&
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      era.get('tflag:强奸') !== this.id
    ) {
      edu_marks.chained_heart = 1;
      await print_title_with_kojo(
        this.#kojo,
        'tied_heart',
        get_chara_talk(this.id),
        generate_dictionary(this.id, { teen: !0, uma: !0 }),
      );
    }
  }

  async get_mark(level, type, _new) {
    if (type === mark_enum.ero || (type === mark_enum.shame && type > 1)) {
      return await super.get_mark(level, type, _new);
    }
    await this.#kojo[`mark_${Object.keys(mark_enum)[type]}`]({
      ...this.#dict,
      level,
    });
  }
};
