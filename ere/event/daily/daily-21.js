const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #dict() {
    return generate_dictionary(this.id);
  }

  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    this.#kojo['select'](this.#dict);
  }

  good_morning() {
    get_chara_talk(45);
    this.#kojo['good_morning']({
      ...this.#dict,
      CALL_45: sys_get_callname(this.id, 45),
    });
  }

  async talk() {
    await this.#kojo['talk'](this.#dict);
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async o_r_walking(tama, me) {
    await this.#kojo['o_r_walk'](this.#dict);
  }

  async o_r_fishing(tama, me) {
    get_chara_talk(20);
    await this.#kojo['o_r_fishing']({
      ...this.#dict,
      CALL_20: sys_get_callname(this.id, 20),
    });
  }

  async o_s_arcade(tama, me) {
    get_chara_talk(6);
    await this.#kojo['o_s_arcade']({
      ...this.#dict,
      CALL_6: sys_get_callname(this.id, 6),
    });
  }

  async o_s_drawing(tama, me) {
    await this.#kojo['o_s_drawing'](this.#dict);
  }

  async o_s_ktv(tama, me) {
    await this.#kojo['o_s_ktv'](this.#dict);
  }

  async o_s_movie(tama, me) {
    await this.#kojo['o_s_movie'](this.#dict);
  }

  async o_s_restaurant(tama, me) {
    await this.#kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating(tama, me) {
    await this.#kojo['o_s_dating'](this.#dict);
  }

  async o_s_shopping(tama, me) {
    await this.#kojo['o_s_shopping'](this.#dict);
  }

  async s_a_tree_hollow(tama, me) {
    await this.#kojo['s_a_tree_hollow'](
      generate_dictionary(this.id, { uma: !0 }),
    );
  }

  async s_a_dating(tama, me) {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async s_r_lunch(tama, me) {
    await this.#kojo['s_r_lunch'](generate_dictionary(this.id, { call: !0 }));
  }

  async office_cook() {
    await this.#kojo['office_cook'](generate_dictionary(this.id, { call: !0 }));
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](
      generate_dictionary(this.id, { your_sex: !0 }),
    );
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
  }

  async office_game() {
    await this.#kojo['office_game'](this.#dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = this.#dict;
    dict.dice = +hook.arg;
    await this.#kojo['out_church'](dict);
  }
};
