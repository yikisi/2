const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CoffeeLifeMarks = require('#/data/event/life-event-marks/life-event-marks-25');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    const life_marks = new CoffeeLifeMarks();
    this.#kojo.select(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      sys_check_awake(this.id),
      life_marks.b_escape,
    );
    life_marks.b_escape = 0;
  }

  good_morning() {
    const life_marks = new CoffeeLifeMarks();
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      life_marks.b_escape,
    );
    life_marks.b_escape = 0;
  }

  good_night_normal(coffee, me, c_awake, m_awake) {
    this.#kojo.good_night_normal(
      coffee,
      me,
      sys_get_colored_callname(this.id, 0),
      m_awake,
      c_awake,
    );
  }

  async good_night_sex(coffee, me, check) {
    return (
      (await this.#kojo.good_night_sex(
        coffee,
        me,
        sys_get_colored_callname(this.id, 0),
        check,
      )) === 1
    );
  }

  async talk() {
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      sys_check_awake(this.id),
    );
  }

  async office_gift() {
    await this.#kojo.office_gift(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_study() {
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_rest() {
    await this.#kojo.office_rest(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_prepare() {
    await this.#kojo.office_prepare(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(coffee, me) {
    await this.#kojo.s_a_tree_hollow(coffee);
  }

  async s_a_dating(coffee, me) {
    await this.#kojo.s_a_dating(
      coffee,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_r_fishing(coffee, me) {
    await this.#kojo.o_r_fishing(
      coffee,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_r_walking(coffee) {
    await this.#kojo.o_r_walking(coffee);
  }

  async o_c_pray(coffee, me, dice) {
    await this.#kojo.o_c_pray(
      coffee,
      me,
      sys_get_colored_callname(this.id, 0),
      dice,
    );
  }

  async o_s_arcade(coffee, me) {
    await this.#kojo.o_s_arcade(
      coffee,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_drawing(coffee) {
    await this.#kojo.o_s_drawing(coffee);
  }

  async o_s_ktv(coffee, me) {
    await this.#kojo.o_s_ktv(coffee);
  }

  async o_s_movie(coffee, me) {
    await this.#kojo.o_s_movie(coffee);
  }

  async o_s_restaurant(coffee) {
    await this.#kojo.o_s_restaurant(
      coffee,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_dating(coffee, me) {
    await this.#kojo.o_s_dating(
      coffee,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_shopping(coffee, me) {
    await this.#kojo.o_s_shopping(coffee, sys_get_colored_callname(this.id, 0));
  }

  async basement_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'basement_end',
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async cl_fans(coffee, me, hook) {
    if (era.get('cflag:25:育成回合计时') >= 96) {
      await print_title_with_kojo(
        this.#kojo,
        'cl_fans',
        coffee,
        me,
        sys_get_colored_callname(this.id, 0),
      );
      era.set('cflag:25:节日事件标记', 0);
      sys_change_money(100, this.id);
      hook.override = true;
      if (
        all_reward_in_event(this.id, { attr: [0, 10, 0, 10, 0], relation: 100 })
      ) {
        await era.waitAnyKey();
      }
    }
    return await super.cl_fans(coffee, me, hook);
  }

  async end_talk() {
    await this.#kojo.end_talk(get_chara_talk(this.id));
  }
};
