/**
 * @file 目白阿尔丹 - 日常
 * @author 洛洛
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/daily/daily-71.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const o = {};
    o['代表色'] = get_chara_color(this.id);
    o['你'] = era.get('callname:0:-2');
    o['称呼'] = sys_get_callname(this.id, 0);
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      o['她'] = '他';
    } else {
      o['她'] = '她';
    }
    return o;
  }

  #get_callname(id) {
    get_chara_talk(id);
    return sys_get_callname(this.id, id);
  }

  select() {
    if (era.get('status:0:生日') > 0) {
      kojo['生日选中互动'](this.#dict);
    } else {
      kojo['回合开始'](this.#dict);
    }
  }

  good_morning() {
    if (era.get('status:0:生日') > 0) {
      kojo['生日选中互动'](this.#dict);
    } else {
      kojo['回合开始'](this.#dict);
    }
  }

  async good_night() {
    await kojo['回合结束'](this.#dict);
  }

  async talk() {
    const dict = this.#dict;
    dict['阿尔丹称呼小栗帽'] = this.#get_callname(6);
    dict['阿尔丹称呼玉藻十字'] = this.#get_callname(21);
    dict['阿尔丹称呼速子'] = this.#get_callname(32);
    dict['阿尔丹称呼善信'] = this.#get_callname(64);
    dict['阿尔丹称呼千代王'] = this.#get_callname(69);
    dict['阿尔丹称呼八重无敌'] = this.#get_callname(72);
    dict['阿尔丹称呼高峰'] = this.#get_callname(86);
    await kojo['闲聊'](dict);
  }

  async office_gift() {
    await kojo['送礼'](this.#dict);
  }

  async out_church() {
    await kojo['外出神社祈福'](this.#dict);
  }

  async out_river(hook) {
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await kojo['散步'](this.#dict);
    } else {
      await kojo['河边钓鱼'](this.#dict);
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await kojo['街机厅'](this.#dict);
        break;
      case 1:
        await kojo['抽奖'](this.#dict);
        break;
      case 2:
        await kojo['卡拉OK'](this.#dict);
        break;
      case 3:
        await kojo['看电影'](this.#dict);
    }
  }

  async out_station(hook) {
    switch ((hook.arg = await select_action_in_station(3))) {
      case 0:
        await kojo['吃饭'](this.#dict);
        break;
      case 1:
        await kojo['约会'](this.#dict);
        break;
      case 2:
        await kojo['逛商场'](this.#dict);
    }
  }

  async school_atrium(hook) {
    if (!(hook.arg = await select_action_in_atrium())) {
      await kojo['枯树洞'](this.#dict);
    } else {
      await kojo['中庭约会'](this.#dict);
    }
  }

  async school_rooftop() {
    await kojo['吃便当'](this.#dict);
  }

  async office_cook() {
    await kojo['一起做饭'](this.#dict);
  }

  async office_study() {
    await kojo['指导学习'](this.#dict);
  }

  async office_rest() {
    await kojo['一起休息'](this.#dict);
  }

  async office_game() {
    await kojo['一起打游戏机'](this.#dict);
  }
};
