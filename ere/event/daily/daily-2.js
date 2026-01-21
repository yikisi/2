const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

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
    get_chara_talk(1);
    get_chara_talk(10);
    get_chara_talk(18);
    get_chara_talk(56);
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

  async school_rooftop(hook) {
    await this.#kojo['school_rooftop'](this.#dict);
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
    await this.#kojo['cl_halloween'](
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }
};
