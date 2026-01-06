/**
 * @file 无声铃鹿 - 日常
 * @author 牛蛙煲
 */

const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

/** @type {KojoFile} */
const kojo = require('#/event/daily/daily-2.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
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

  async good_night() {
    await kojo['good_night'](this.#dict);
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
    era.printInColRows(
      { columns: [{ content: '前往商店街做什么呢？', type: 'text' }] },
      {
        columns: ['街机厅', '卡拉OK', '看电影']
          .filter((e) => e)
          .map((action, i, l) => ({
            accelerator: i,
            config: { align: 'center', width: Math.floor(24 / l.length) },
            content: `去${action}吧`,
            type: 'button',
          })),
        config: { horizontalAlign: 'space-evenly' },
      },
    );
    const temp = await era.input();
    hook.arg = temp < 1;
    switch (temp) {
      case 0:
        await kojo['o_s_arcade'](this.#dict);
        break;
      case 1:
        await kojo['o_s_ktv'](this.#dict);
        break;
      case 2:
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

  async office_rest() {
    await kojo['office_rest'](this.#dict);
  }

  async office_game() {
    await kojo['office_game'](this.#dict);
  }
};
