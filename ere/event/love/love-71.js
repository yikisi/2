/**
 * @file 目白阿尔丹 - 爱慕
 * @author 洛洛
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/love/love-71.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event } = require('#/event/queue');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends CustomizedLove {
  get #dict() {
    const o = {};
    o['代表色'] = get_chara_color(this.id);
    o['你'] = era.get('callname:0:-2');
    o['称呼'] = sys_get_callname(this.id, 0);
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      o['她'] = '他';
      o['小姐'] = '少爷';
      o['马娘'] = '马郎';
    } else {
      o['她'] = '她';
      o['小姐'] = '小姐';
      o['马娘'] = '马娘';
    }
    return o;
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async bearing(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '追求的是风度';
    await print_event_name(name, ardan);
    await kojo[name](this.#dict);
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async theater(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '薄暮中的一幕';
    await print_event_name(name, ardan);
    const dict = this.#dict;
    get_chara_talk(86);
    dict['阿尔丹称呼高峰'] = sys_get_callname(this.id, 86);
    await kojo[name](dict);
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async travel(ardan, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    const name = '旅行';
    await print_event_name(name, ardan);
    await kojo[name](this.#dict);
    era.println();
    await add_juel_out_of_train(this.id, '顺从', 500);
    return true;
  }

  async 49(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '逐渐贴近的彼此';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[2] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 49);
      await punish_rejecting_love(this.id);
    }
  }

  async 74(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '于慌乱中确认彼此的心意';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[3] === 1) {
      await sys_love_uma_in_event(this.id);
      get_custom_mec(this.id).set_callname();
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const name = '属于彼此的画作';
    await print_event_name(name, ardan);
    const ret = await kojo[name](this.#dict);
    if (ret[3] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
      await punish_rejecting_love(this.id);
    }
  }

  async 99(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    await print_event_name(`坎坷的琉璃鸟找到了${ardan.sex}的归宿`, ardan);
    const ret = await kojo['坎坷的琉璃鸟找到了她的归宿'](this.#dict);
    if (ret[2] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 99);
      await punish_rejecting_love(this.id);
    }
  }
};
