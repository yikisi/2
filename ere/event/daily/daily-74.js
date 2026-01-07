const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
/** @type {KojoFile} */
const kojo = require('#/event/daily/daily-74.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends CustomizedDaily {
  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  good_morning() {
    this.select();
  }

  select() {
    if (sys_check_awake(this.id)) {
      kojo.select(this.#dict);
    } else {
      super.select();
    }
  }

  async office_study() {
    await kojo['office_study'](this.#dict);
  }

  async office_cook() {
    await kojo['office_cook'](this.#dict);
  }

  async office_prepare() {
    await kojo['office_prepare'](this.#dict);
  }

  async office_rest() {
    await kojo['office_rest'](this.#dict);
  }

  async talk() {
    if (sys_check_awake(this.id)) {
      await kojo['talk'](this.#dict);
    } else {
      await super.talk();
    }
  }

  async office_game() {
    await kojo['office_game'](this.#dict);
  }

  async office_gift() {
    await kojo['office_gift'](this.#dict);
  }

  async school_atrium(hook) {
    if ((hook.arg = (await select_action_in_atrium()) === 0)) {
      await kojo['s_a_tree_hollow'](generate_dictionary(this.id));
    } else {
      await kojo['s_a_dating'](this.#dict);
    }
  }

  async school_rooftop() {
    await kojo['school_rooftop'](this.#dict);
  }

  async out_river(hook, extra) {
    if ((hook.arg = await select_action_around_river()) > 0) {
      await kojo['o_r_walk'](generate_dictionary(this.id));
    } else {
      await kojo['o_r_fishing'](this.#dict);
      extra.jpg = get_random_value(0, 5);
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await kojo['o_s_arcade'](this.#dict);
        break;
      case 1:
        await kojo['o_s_drawing'](this.#dict);
        break;
      case 2:
        await kojo['o_s_ktv'](this.#dict);
        break;
      case 3:
        await kojo['o_s_cinema'](generate_dictionary(this.id));
    }
  }

  async out_church() {
    await kojo['out_church']({ ...this.#dict, dice: +(Math.random() < 0.5) });
  }

  async out_station(hook) {
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await kojo['o_s_restaurant'](this.#dict);
        break;
      case 1:
        await kojo['o_s_dating'](this.#dict);
        break;
      case 2:
        await kojo['o_s_shopping'](this.#dict);
    }
  }

  async good_night(hook) {
    const check = get_custom_check(this.id).is_want_make_love();
    if (!check) {
      kojo.good_night(this.#dict);
    } else {
      const ret = (await kojo['good_night_sex']({ ...this.#dict, check }))[
        'select'
      ];
      if (ret === 1) {
        hook.arg = 1;
      } else {
        hook.arg = check === 2 ? 2 : 0;
      }
    }
  }
};
