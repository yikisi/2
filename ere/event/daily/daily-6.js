/**
 * @file 小栗帽 - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const lines = require('#/event/daily/daily-6.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends CustomizedDaily {
  good_morning() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    lines['回合开始互动对话'](dict);
  }

  async office_cook() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['一起做饭'](dict);
  }

  async office_game() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['一起打游戏机'](dict);
  }

  async office_gift() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['送礼'](dict);
  }

  async office_prepare() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['赛前准备'](dict);
  }

  async office_rest() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['一起休息'](dict);
  }

  async office_study() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['指导学习'](dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = { dice: hook.arg };
    dict['代表色'] = get_chara_color(this.id);
    dict['你'] = era.get('callname:0:-2');
    dict['玩家名'] = era.get('callname:0:-1');
    dict['她'] = era.get(`cflag:${this.id}:性别`) === 1 ? '他' : '她';
    dict['你们'] =
      dict['你'] === '你' || dict['你'] === '您'
        ? '你们'
        : era.get('cflag:0:性别') === 1 || dict['她'] === '他'
          ? '他们'
          : '她们';
    await lines['外出神社祈福'](dict);
  }

  async out_river(hook) {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await lines['散步'](dict);
    } else {
      await lines['河边钓鱼'](dict);
    }
  }

  async out_shopping(hook) {
    const dict = {};
    const temp = await select_action_in_shopping_street();
    dict['代表色'] = get_chara_color(this.id);
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await lines['街机厅'](dict);
        break;
      case 1:
        await lines['抽奖'](dict);
        break;
      case 2:
        await lines['卡拉OK'](dict);
        break;
      case 3:
        await lines['看电影'](dict);
    }
  }

  async out_station(hook) {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await lines['吃饭'](dict);
        break;
      case 1:
        await lines['约会'](dict);
        break;
      case 2:
        await lines['逛商场'](dict);
    }
  }

  async school_atrium(hook) {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['她'] = era.get(`cflag:${this.id}:性别`) === 1 ? '他' : '她';
    if ((hook.arg = !(await select_action_in_atrium()))) {
      dict['你'] = era.get('callname:0:-2');
      await lines['枯树洞'](dict);
    } else {
      await lines['中庭约会'](dict);
    }
  }

  async school_rooftop() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['吃便当'](dict);
  }

  select() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    lines['选中互动对象'](dict);
  }

  async talk() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    await lines['闲聊'](dict);
  }
};
