const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, uma: !0 });
  }

  good_morning() {
    this.#kojo.good_morning(this.#dict);
  }

  good_night() {
    this.#kojo.good_night(this.#dict);
  }

  async office_cook() {
    await this.#kojo.office_cook(this.#dict);
  }

  async office_game() {
    await this.#kojo.office_game(this.#dict);
  }

  async office_gift() {
    await this.#kojo.office_gift(this.#dict);
  }

  async office_rest() {
    await this.#kojo.office_rest(this.#dict);
  }

  async office_study() {
    await this.#kojo.office_study(this.#dict);
  }

  async o_c_pray() {
    await this.#kojo.o_c_pray(this.#dict);
  }

  async o_r_fishing() {
    await this.#kojo.o_r_fishing(this.#dict);
  }

  async o_r_walking() {
    await this.#kojo.o_r_walking(this.#dict);
  }

  async o_s_arcade() {
    await this.#kojo.o_s_arcade(this.#dict);
  }

  async o_s_drawing() {
    const edu_marks = EduEventMarks.get_marks(this.id);
    const dict = this.#dict;
    dict.hot_spring =
      !edu_marks.hot_spring &&
      era.get(`cflag:${this.id}:育成回合计时`) >= 96 &&
      Math.random() < 0.25;
    if (dict.hot_spring) {
      edu_marks.hot_spring = 1;
    }
    await this.#kojo.o_s_drawing(dict);
  }

  async o_s_ktv() {
    await this.#kojo.o_s_ktv(this.#dict);
  }

  async o_s_movie(mcqueen) {
    await this.#kojo.o_s_movie({
      ...this.#dict,
      YOUNG_LADY:
        mcqueen.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    });
  }

  async o_s_restaurant() {
    await this.#kojo.o_s_restaurant(this.#dict);
  }

  async o_s_dating() {
    await this.#kojo.o_s_dating(this.#dict);
  }

  async o_s_shopping() {
    await this.#kojo.o_s_shopping(this.#dict);
  }

  async s_a_tree_hollow() {
    await this.#kojo.s_a_tree_hollow(this.#dict);
  }

  async s_a_dating() {
    await this.#kojo.s_a_dating(this.#dict);
  }

  async s_r_lunch(mcqueen, me) {
    await this.#kojo.s_r_lunch(this.#dict);
  }

  select() {
    this.#kojo.select(this.#dict);
  }

  async talk() {
    await this.#kojo.talk({
      ...this.#dict,
      CALL_63: sys_get_callname(this.id, 63),
      CALL_7: sys_get_callname(this.id, 7),
      check: new McqueenLifeMarks().love_40,
    });
  }

  async birthday(hook) {
    const mcqueen = get_chara_talk(this.id);
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 48) {
      const ramonu = get_chara_talk(86);
      await print_title_with_kojo(this.#kojo, 'birthday1', mcqueen, {
        ...this.#dict,
        COLOR_86: ramonu.color,
        RAMONU: ramonu.name,
      });
    } else if (edu_weeks < 96) {
      await print_title_with_kojo(this.#kojo, 'birthday2', mcqueen, this.#dict);
    } else if (edu_weeks <= 144) {
      await print_title_with_kojo(this.#kojo, 'birthday3', mcqueen, this.#dict);
    } else {
      await super.birthday(hook);
    }
  }
};
