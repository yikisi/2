const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

/** @type {KojoFile} */
const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/daily/daily-2.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedDaily {
  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  select() {
    kojo['select'](this.#dict);
  }

  good_morning() {
    get_chara_talk(1);
    kojo['good_morning']({
      ...this.#dict,
      CALL_1: sys_get_callname(this.id, 1),
    });
  }

  async good_night(hook) {
    const dict = this.#dict;
    if (sys_check_awake(this.id) && sys_check_awake(0)) {
      dict.check = get_custom_check(this.id).is_want_make_love();
      if (dict.check > 0) {
        if ((await kojo['good_night_sex'](dict))['sex'] === 1) {
          hook.arg = 1;
        } else if (dict.check === 2) {
          hook.arg = 2;
        } else {
          hook.arg = 0;
        }
        return;
      }
    }
    await kojo['good_night'](dict);
  }

  async talk() {
    get_chara_talk(1);
    get_chara_talk(10);
    get_chara_talk(18);
    get_chara_talk(56);
    await kojo['talk']({
      ...this.#dict,
      CALL_1: sys_get_callname(this.id, 1),
      CALL_10: sys_get_callname(this.id, 10),
      CALL_18: sys_get_callname(this.id, 18),
      CALL_56: sys_get_callname(this.id, 56),
    });
  }

  async office_gift() {
    await kojo['office_gift'](this.#dict);
  }

  async out_church() {
    await kojo['out_church'](this.#dict);
  }

  async out_river(hook) {
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await kojo['o_r_walk'](this.#dict);
    } else {
      await kojo['o_r_fishing'](this.#dict);
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
        await kojo['o_s_movie'](this.#dict);
    }
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(this.id);
    switch (hook.arg) {
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

  async school_atrium(hook) {
    if ((hook.arg = (await select_action_in_atrium()) === 0)) {
      await kojo['s_a_tree_hollow'](this.#dict);
    } else {
      await kojo['s_a_dating'](this.#dict);
    }
  }

  async school_rooftop() {
    await kojo['school_rooftop'](this.#dict);
  }

  async office_cook() {
    await kojo['office_cook'](this.#dict);
  }

  async office_study() {
    await kojo['office_study'](this.#dict);
  }

  async office_prepare() {
    await kojo['office_prepare'](this.#dict);
  }

  async office_rest() {
    await kojo['office_rest'](this.#dict);
  }

  async office_game() {
    await kojo['office_game'](this.#dict);
  }

  async celebration(hook) {
    let key;
    // FLAGNAME:0 = 当前回合数
    switch (era.get('flag:0') % 48) {
      case 6:
        await kojo['valentine'](
          generate_dictionary(this.id, { call: !0, uma: !0 }),
        );
        if (all_reward_in_event(this.id, { relation: 60 })) {
          await era.waitAnyKey();
        }
        // CFLAGNAME:56 = 节日事件标记
        era.set(`cflag:${this.id}:56`, 0);
        hook.override = true;
        return;
      case 40:
        key = 'halloween';
    }
    if (key) {
      await kojo[key](generate_dictionary(this.id, { call: !0, uma: !0 }));
    } else {
      await super.celebration(hook);
    }
  }
};
