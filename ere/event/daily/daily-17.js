const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const { i_emperor } = require('#/event/snippets/101700');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (sys_check_awake(17)) {
      (new LunaEduMarks().emperor > 0
        ? this.#kojo.select_emperor
        : this.#kojo.select_luna)(get_chara_talk(this.id), get_chara_talk(0));
    } else {
      this.#kojo.select_sleep(get_chara_talk(this.id));
    }
  }

  good_morning() {
    (new LunaEduMarks().emperor > 0
      ? this.#kojo.good_morning_emperor
      : this.#kojo.good_morning_luna)(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async talk() {
    if (!sys_check_awake(17)) {
      return await super.talk();
    }
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.talk_emperor
        : this.#kojo.talk_luna
    )(get_chara_talk(this.id));
  }

  async office_gift() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.office_gift_emperor
        : this.#kojo.office_gift_luna
    )(get_chara_talk(this.id));
  }

  async office_cook() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.office_cook_emperor
        : this.#kojo.office_cook_luna
    )(get_chara_talk(this.id));
  }

  async office_study() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.office_study_emperor
        : this.#kojo.office_study_luna
    )(get_chara_talk(this.id));
  }

  async office_rest() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.office_rest_emperor
        : this.#kojo.office_rest_luna
    )(get_chara_talk(this.id));
  }

  async office_prepare() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.office_prepare_emperor
        : this.#kojo.office_prepare_luna
    )(get_chara_talk(this.id));
  }

  async office_game() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.office_game_emperor
        : this.#kojo.office_game_luna
    )(get_chara_talk(this.id));
  }

  async s_a_tree_hollow(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.s_a_tree_hollow_emperor
        : this.#kojo.s_a_tree_hollow_luna
    )(chara);
  }

  async s_a_dating(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.s_a_dating_emperor
        : this.#kojo.s_a_dating_luna
    )(chara);
  }

  async school_rooftop() {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.school_rooftop_emperor
        : this.#kojo.school_rooftop_luna
    )(get_chara_talk(this.id));
  }

  async o_r_fishing(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_r_fishing_emperor
        : this.#kojo.o_r_fishing_luna
    )(chara);
  }

  async o_r_walking(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_r_walking_emperor
        : this.#kojo.o_r_walking_luna
    )(chara);
  }

  async o_s_arcade(chara, me) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_arcade_emperor
        : this.#kojo.o_s_arcade_luna
    )(chara, me);
  }

  async o_s_drawing(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_drawing_emperor
        : this.#kojo.o_s_drawing_luna
    )(chara);
  }

  async o_s_ktv(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_ktv_emperor
        : this.#kojo.o_s_ktv_luna
    )(chara);
  }

  async o_s_movie(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_movie_emperor
        : this.#kojo.o_s_movie_luna
    )(chara);
  }

  async o_c_pray(chara, me, dice) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_c_pray_emperor
        : this.#kojo.o_c_pray_luna
    )(chara, me, dice);
  }

  async o_s_restaurant(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_restaurant_emperor
        : this.#kojo.o_s_restaurant_luna
    )(chara);
  }

  async o_s_dating(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_dating_emperor
        : this.#kojo.o_s_dating_luna
    )(chara);
  }

  async o_s_shopping(chara) {
    await (
      new LunaEduMarks().emperor > 0
        ? this.#kojo.o_s_shopping_emperor
        : this.#kojo.o_s_shopping_luna
    )(chara);
  }

  async load_talk() {
    const edu_marks = new LunaEduMarks();
    await this.#kojo.load_talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      edu_marks.good_end > 0,
      i_emperor(),
    );
  }
};
