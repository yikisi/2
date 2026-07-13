const era = require('#/era-electron');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, uma: !0 });
  }

  good_morning() {
    this.#kojo['good_morning'](this.#dict);
  }

  select() {
    this.#kojo['select'](this.#dict);
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
  }

  async talk() {
    get_chara_talk(1);
    get_chara_talk(39);
    await this.#kojo['talk'](this.#dict);
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async office_cook() {
    await this.#kojo['office_cook'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](this.#dict);
  }

  async office_game() {
    await this.#kojo['office_game'](this.#dict);
  }

  async school_rooftop(hook) {
    await this.#kojo['school_rooftop'](this.#dict);
  }

  async s_a_tree_hollow(halo, me, callname) {
    await this.#kojo['s_a_tree_hollow'](this.#dict);
  }

  async s_a_dating(halo, me, callname) {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async o_r_fishing(halo, me, hook, extra) {
    await this.#kojo['o_r_fishing'](this.#dict);
  }

  async o_r_walking(halo, me) {
    await this.#kojo['o_r_walking'](this.#dict);
  }

  async o_s_arcade(halo, me, hook) {
    await this.#kojo['o_s_arcade'](this.#dict);
  }

  async o_s_drawing(halo, me, hook) {
    await this.#kojo['o_s_drawing'](this.#dict);
  }

  async o_s_ktv(halo, me, hook) {
    await this.#kojo['o_s_ktv'](this.#dict);
  }

  async o_s_movie(halo, me, hook) {
    await this.#kojo['o_s_movie'](this.#dict);
  }

  async o_c_pray(halo, me, dice, hook) {
    await this.#kojo['o_c_pray']({ ...this.#dict, dice });
  }

  async o_s_restaurant(halo, me, hook) {
    await this.#kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating(halo, me, hook) {
    await this.#kojo['o_s_dating'](this.#dict);
  }

  async o_s_shopping(halo, me, hook) {
    await this.#kojo['o_s_shopping'](this.#dict);
  }

  good_night_normal(halo, me, c_awake, m_awake) {
    this.#kojo['good_night_normal']({ ...this.#dict, awake: c_awake });
  }

  async good_night_sex(halo, me, check) {
    return (
      (await this.#kojo['good_night_sex']({ ...this.#dict, check }))['sex'] ===
      1
    );
  }

  async cl_valentine(halo, me, hook) {
    hook.override = true;
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    if (
      all_reward_in_event(
        this.id,
        (
          await print_title_with_kojo(
            this.#kojo,
            'cl_valentine',
            halo,
            this.#dict,
          )
        )['select'] === 1
          ? { relation: 20 }
          : { love: 3 },
      )
    ) {
      await era.waitAnyKey();
    }
  }

  async cl_halloween(halo, me, hook) {
    await print_title_with_kojo(this.#kojo, 'cl_halloween', halo, this.#dict);
  }

  async cl_christmas(halo, me, hook) {
    hook.override = true;
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    if (
      all_reward_in_event(
        this.id,
        (
          await print_title_with_kojo(
            this.#kojo,
            'cl_christmas_in_edu',
            halo,
            this.#dict,
          )
        )['select'] === 1
          ? { relation: 20, love: 3 }
          : { attr: { [get_random_value(0, 3)]: 20 } },
      )
    ) {
      await era.waitAnyKey();
    }
  }
};
