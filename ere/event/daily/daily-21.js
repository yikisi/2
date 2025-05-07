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

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const dict = {};
    const tama = get_chara_talk(this.id);
    dict['代表色'] = tama.color;
    dict['她'] = tama.sex;
    dict['称呼'] = sys_get_callname(this.id, 0);
    const me = get_chara_talk(0);
    dict['玩家名'] = me.name;
    dict['他'] = me.sex;
    return dict;
  }

  select() {
    kojo['选中互动对象'](this.#dict);
  }

  good_morning() {
    kojo['回合开始互动对话'](this.#dict);
  }

  async talk() {
    get_chara_talk(45);
    const dict = this.#dict;
    dict['小玉称呼小海湾'] = sys_get_callname(this.id, 45);
    await kojo['闲聊'](dict);
  }

  async office_gift() {
    await kojo['送礼'](this.#dict);
  }

  async out_river(hook) {
    if ((hook.arg = await select_action_around_river()) > 0) {
      const dict = this.#dict;
      get_chara_talk(20);
      dict['小玉称呼Sky'] = sys_get_callname(this.id, 20);
      await kojo['散步'](this.#dict);
    } else {
      await kojo['钓鱼'](this.#dict);
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    const dict = this.#dict;
    switch (temp) {
      case 0:
        get_chara_talk(6);
        dict['小玉称呼小栗'] = sys_get_callname(this.id, 6);
        await kojo['街机厅'](dict);
        break;
      case 1:
        await kojo['抽奖'](dict);
        break;
      case 2:
        await kojo['卡拉OK'](dict);
        break;
      case 3:
        await kojo['看电影'](dict);
    }
  }

  async out_station(hook) {
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await kojo['车站吃饭'](this.#dict);
        break;
      case 1:
        await kojo['车站约会'](this.#dict);
        break;
      case 2:
        await kojo['逛商场'](this.#dict);
    }
  }

  async school_atrium(hook) {
    if ((hook.arg = !(await select_action_in_atrium()))) {
      await kojo['枯树洞'](this.#dict);
    } else {
      await kojo['中庭约会'](this.#dict);
    }
  }

  async school_rooftop() {
    await kojo['天台便当'](this.#dict);
  }

  async office_cook() {
    await kojo['加餐'](this.#dict);
  }

  async office_study() {
    await kojo['指导学习'](this.#dict);
  }

  async office_rest() {
    await kojo['小憩'](this.#dict);
  }

  async office_prepare() {
    await kojo['赛前准备'](this.#dict);
  }

  async office_game() {
    await kojo['游戏'](this.#dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = this.#dict;
    dict.dice = +hook.arg;
    await kojo['神社'](dict);
  }
};
