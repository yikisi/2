const era = require('#/era-electron');

const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SuzukaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-2');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  select() {
    this.#kojo['select'](this.#dict);
  }

  good_morning() {
    get_chara_talk(1);
    this.#kojo['good_morning']({
      ...this.#dict,
      CALL_1: sys_get_callname(this.id, 1),
    });
  }

  async good_night(hook) {
    const edu_marks = new SuzukaEduMarks();
    if (
      !edu_marks.forbid_running &&
      era.get(`love:${this.id}`) >= 90 &&
      check_pregnant_unprotect(0) &&
      check_pregnant_unprotect(2)
    ) {
      begin_and_init_ero(0, this.id);
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'forbid_running',
            get_chara_talk(this.id),
            this.#dict,
          )
        )['sex'] === 1
      ) {
        era.set('tflag:主导权', 0);
      } else {
        era.set('tflag:主导权', this.id);
      }
      await print_ero_page(this.id, true);
      await end_ero_and_show_result();
      return;
    }
    return await super.good_night(hook);
  }

  async good_night_sex(suzuka, me, check) {
    return (
      (await this.#kojo['good_night_sex']({ ...this.#dict, check }))['sex'] ===
      1
    );
  }

  good_night_normal(suzuka, me, c_awake, m_awake) {
    this.#kojo['good_night'](this.#dict);
  }

  async talk() {
    await this.#kojo['talk']({
      ...this.#dict,
      CALL_1: sys_get_callname(this.id, 1),
      CALL_10: sys_get_callname(this.id, 10),
      CALL_18: sys_get_callname(this.id, 18),
      CALL_56: sys_get_callname(this.id, 56),
    });
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async o_c_pray(suzuka, me, dice) {
    await this.#kojo['out_church'](this.#dict);
  }

  async o_r_fishing(suzuka, me) {
    await this.#kojo['o_r_fishing'](this.#dict);
  }

  async o_r_walking(suzuka, me) {
    await this.#kojo['o_r_walk'](this.#dict);
  }

  async o_s_arcade(suzuka, me) {
    await this.#kojo['o_s_arcade'](this.#dict);
  }

  async o_s_drawing(suzuka, me) {
    await this.#kojo['o_s_drawing'](this.#dict);
  }

  async o_s_ktv(suzuka, me) {
    await this.#kojo['o_s_ktv'](this.#dict);
  }

  async o_s_movie(suzuka, me) {
    await this.#kojo['o_s_movie'](this.#dict);
  }

  async o_s_restaurant(suzuka, me) {
    await this.#kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating(suzuka, me) {
    await this.#kojo['o_s_dating'](this.#dict);
  }

  async o_s_shopping(suzuka, me) {
    await this.#kojo['o_s_shopping'](this.#dict);
  }

  async s_a_tree_hollow(suzuka, me) {
    await this.#kojo['s_a_tree_hollow'](this.#dict);
  }

  async s_a_dating(suzuka, me) {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async s_r_lunch(suzuka, me) {
    await this.#kojo['s_r_lunch'](this.#dict);
  }

  async office_cook() {
    await this.#kojo['office_cook'](this.#dict);
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](this.#dict);
  }

  async office_game() {
    await this.#kojo['office_game'](this.#dict);
  }

  async cl_valentine(suzuka, me, hook) {
    await this.#kojo['valentine'](
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { relation: 60 })) {
      await era.waitAnyKey();
    }
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    hook.override = true;
  }

  async cl_halloween(chara, me) {
    await this.#kojo['halloween'](
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }
};
