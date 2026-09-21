const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  good_morning() {
    this.#kojo['good_morning'](generate_dictionary(this.id));
  }

  select() {
    this.#kojo['select'](generate_dictionary(this.id));
  }

  async talk() {
    await this.#kojo['talk'](generate_dictionary(this.id));
  }

  async office_cook() {
    await this.#kojo['office_cook'](generate_dictionary(this.id));
  }

  async office_game() {
    await this.#kojo['office_game'](generate_dictionary(this.id));
  }

  async office_gift() {
    await this.#kojo['office_gift'](generate_dictionary(this.id));
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](generate_dictionary(this.id));
  }

  async office_rest() {
    await this.#kojo['office_rest'](generate_dictionary(this.id));
  }

  async office_study() {
    await this.#kojo['office_study'](generate_dictionary(this.id));
  }

  async o_r_fishing(oguri, me) {
    await this.#kojo['o_r_fishing'](generate_dictionary(this.id));
  }

  async o_r_walking(oguri, me) {
    await this.#kojo['o_r_walking'](generate_dictionary(this.id));
  }

  async o_c_pray(oguri, me, dice) {
    await this.#kojo['out_church']({
      ...generate_dictionary(this.id, { your_name: !0 }),
      dice: dice < 0.5,
    });
  }

  async o_s_arcade(oguri, me) {
    await this.#kojo['o_s_arcade'](generate_dictionary(this.id));
  }

  async o_s_drawing(oguri, me) {
    await this.#kojo['o_s_drawing'](generate_dictionary(this.id));
  }

  async o_s_ktv(oguri, me) {
    await this.#kojo['o_s_ktv'](generate_dictionary(this.id));
  }

  async o_s_movie(oguri, me) {
    await this.#kojo['o_s_movie'](generate_dictionary(this.id));
  }

  async o_s_restaurant(oguri, me) {
    await this.#kojo['o_s_restaurant'](generate_dictionary(this.id));
  }

  async o_s_dating(oguri, me) {
    await this.#kojo['o_s_dating'](generate_dictionary(this.id));
  }

  async o_s_shopping(oguri, me) {
    await this.#kojo['o_s_shopping'](generate_dictionary(this.id));
  }

  async s_a_tree_hollow(oguri, me) {
    await this.#kojo['s_a_tree_hollow'](generate_dictionary(this.id));
  }

  async s_a_dating(oguri, me) {
    await this.#kojo['s_a_dating'](generate_dictionary(this.id));
  }

  async s_r_lunch(hook) {
    await this.#kojo['s_r_lunch'](generate_dictionary(this.id));
  }
};
