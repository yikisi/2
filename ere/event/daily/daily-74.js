const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  good_morning() {
    this.select();
  }

  select() {
    if (sys_check_awake(this.id)) {
      this.#kojo['select'](this.#dict);
    } else {
      super.select();
    }
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_cook() {
    await this.#kojo['office_cook'](this.#dict);
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](this.#dict);
  }

  async talk() {
    if (sys_check_awake(this.id)) {
      await this.#kojo['talk'](this.#dict);
    } else {
      await super.talk();
    }
  }

  async office_game() {
    await this.#kojo['office_game'](this.#dict);
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async s_a_tree_hollow(bright, me) {
    await this.#kojo['s_a_tree_hollow'](generate_dictionary(this.id));
  }

  async s_a_dating(bright, me) {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async s_r_lunch(hook) {
    await this.#kojo['s_r_lunch'](this.#dict);
  }

  async o_r_fishing(bright, me) {
    await this.#kojo['o_r_fishing'](this.#dict);
  }

  async o_r_walking(bright, me) {
    await this.#kojo['o_r_walk'](generate_dictionary(this.id));
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
    await this.#kojo['o_s_cinema'](generate_dictionary(this.id));
  }

  async o_c_pray(suzuka, me, dice) {
    await this.#kojo['out_church']({
      ...this.#dict,
      dice: dice < 0.5,
    });
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

  async good_night_sex(bright, me, check) {
    return (
      (await this.#kojo['good_night_sex']({ ...this.#dict, check }))[
        'select'
      ] === 1
    );
  }

  good_night_normal(bright, me, c_awake, m_awake) {
    this.#kojo['good_night'](this.#dict);
  }
};
