/**
 * @file 玉藻十字 - 日常
 * @author 雞雞
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/daily/daily-21.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedDaily {
  get #dict() {
    return generate_dictionary(this.id);
  }

  select() {
    kojo['select'](this.#dict);
  }

  good_morning() {
    get_chara_talk(45);
    kojo['good_morning']({
      ...this.#dict,
      CALL_45: sys_get_callname(this.id, 45),
    });
  }

  async talk() {
    await kojo['talk'](this.#dict);
  }

  async office_gift() {
    await kojo['office_gift'](this.#dict);
  }

  async out_river(hook) {
    if ((hook.arg = await select_action_around_river()) > 0) {
      await kojo['o_r_walk'](this.#dict);
    } else {
      get_chara_talk(20);
      await kojo['o_r_fishing']({
        ...this.#dict,
        CALL_20: sys_get_callname(this.id, 20),
      });
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    const dict = this.#dict;
    switch (temp) {
      case 0:
        get_chara_talk(6);
        dict.CALL_6 = sys_get_callname(this.id, 6);
        await kojo['o_s_arcade'](dict);
        break;
      case 1:
        await kojo['o_s_drawing'](dict);
        break;
      case 2:
        await kojo['o_s_ktv'](dict);
        break;
      case 3:
        await kojo['o_s_movie'](dict);
    }
  }

  async out_station(hook) {
    const dict = generate_dictionary(this.id, { call: !0 });
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await kojo['o_s_restaurant'](dict);
        break;
      case 1:
        await kojo['o_s_dating'](dict);
        break;
      case 2:
        await kojo['o_s_shopping'](dict);
    }
  }

  async school_atrium(hook) {
    if ((hook.arg = !(await select_action_in_atrium()))) {
      await kojo['s_a_tree_hollow'](generate_dictionary(this.id, { uma: !0 }));
    } else {
      await kojo['s_a_dating'](this.#dict);
    }
  }

  async school_rooftop() {
    await kojo['school_rooftop'](generate_dictionary(this.id, { call: !0 }));
  }

  async office_cook() {
    await kojo['office_cook'](generate_dictionary(this.id, { call: !0 }));
  }

  async office_study() {
    await kojo['office_study'](this.#dict);
  }

  async office_rest() {
    await kojo['office_rest'](generate_dictionary(this.id, { your_sex: !0 }));
  }

  async office_prepare() {
    await kojo['office_prepare'](this.#dict);
  }

  async office_game() {
    await kojo['office_game'](this.#dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = this.#dict;
    dict.dice = +hook.arg;
    await kojo['out_church'](dict);
  }
};
