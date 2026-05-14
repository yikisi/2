const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  good_morning() {
    const life_marks = LifeEventMarks.get_marks(7);
    this.#kojo.good_morning(get_chara_talk(this.id), life_marks.b_escape);
    life_marks.b_escape = 0;
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(this.id));
  }

  async office_game() {
    await this.#kojo.office_game(get_chara_talk(this.id));
  }

  async office_gift() {
    await this.#kojo.office_gift(get_chara_talk(this.id));
  }

  async office_prepare() {
    await this.#kojo.office_prepare(get_chara_talk(this.id));
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(this.id));
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id));
  }

  async s_a_tree_hollow(gold_ship) {
    await this.#kojo.s_a_tree_hollow(gold_ship);
  }

  async s_a_dating(gold_ship) {
    await this.#kojo.s_a_dating(gold_ship);
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(get_chara_talk(this.id));
  }

  select() {
    const life_marks = LifeEventMarks.get_marks(7);
    if (sys_check_awake(7)) {
      const im_awake = sys_check_awake(0);
      this.#kojo.select_awake(
        get_chara_talk(this.id),
        sys_get_colored_callname(this.id, 0),
        im_awake && life_marks.b_escape,
      );
      if (im_awake) {
        life_marks.b_escape = 0;
      }
    } else {
      return super.select();
    }
  }

  async talk() {
    if (!sys_check_awake(7)) {
      return super.talk();
    }
    await this.#kojo.talk(get_chara_talk(this.id));
  }

  async o_c_pray(gold_ship, me, dice) {
    await this.#kojo.o_c_pray(gold_ship, me, dice);
  }

  async o_r_fishing(gold_ship) {
    await this.#kojo.o_r_fishing(gold_ship);
  }

  async o_r_walking(gold_ship) {
    await this.#kojo.o_r_walking(gold_ship);
  }

  async o_s_arcade(gold_ship) {
    await this.#kojo.o_s_arcade(
      gold_ship,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_drawing(gold_ship) {
    await this.#kojo.o_s_drawing(
      gold_ship,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_ktv(gold_ship) {
    await this.#kojo.o_s_ktv(gold_ship, sys_get_colored_callname(this.id, 0));
  }

  async o_s_movie(gold_ship) {
    await this.#kojo.o_s_movie(gold_ship, sys_get_colored_callname(this.id, 0));
  }

  async o_s_restaurant(gold_ship) {
    await this.#kojo.o_s_restaurant(gold_ship);
  }

  async o_s_dating(gold_ship) {
    await this.#kojo.o_s_dating(gold_ship);
  }

  async o_s_shopping(gold_ship) {
    await this.#kojo.o_s_shopping(
      gold_ship,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async load_talk() {
    await this.#kojo.load_talk(get_chara_talk(this.id));
  }

  async basement_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'basement_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async slave_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'slave_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }
};
