const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
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
    await this.#kojo['office_prepare'](generate_dictionary(this.id));
  }

  async office_study() {
    await this.#kojo['office_study'](generate_dictionary(this.id));
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    await this.#kojo['out_church']({
      ...generate_dictionary(this.id, { your_name: !0 }),
      dice: hook.arg,
    });
  }

  async out_river(hook) {
    const dict = generate_dictionary(this.id);
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await this.#kojo['o_r_walking'](dict);
    } else {
      await this.#kojo['o_r_fishing'](dict);
    }
  }

  async out_shopping(hook) {
    const dict = generate_dictionary(this.id);
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await this.#kojo['o_s_arcade'](dict);
        break;
      case 1:
        await this.#kojo['o_s_drawing'](dict);
        break;
      case 2:
        await this.#kojo['o_s_ktv'](dict);
        break;
      case 3:
        await this.#kojo['o_s_movie'](dict);
    }
  }

  async out_station(hook) {
    const dict = generate_dictionary(this.id);
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await this.#kojo['o_s_restaurant'](dict);
        break;
      case 1:
        await this.#kojo['o_s_dating'](dict);
        break;
      case 2:
        await this.#kojo['o_s_shopping'](dict);
    }
  }

  async school_atrium(hook) {
    const dict = generate_dictionary(this.id);
    if ((hook.arg = !(await select_action_in_atrium()))) {
      await this.#kojo['s_a_tree_hollow'](dict);
    } else {
      await this.#kojo['s_a_dating'](dict);
    }
  }

  async school_rooftop() {
    await this.#kojo['school_rooftop'](generate_dictionary(this.id));
  }
};
