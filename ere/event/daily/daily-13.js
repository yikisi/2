/**
 * @file 目白麦昆 - 日常
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const lines = require('#/event/daily/daily-13.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['训练员'] = era.get('callname:0:-2');
    if (era.get('flag:角色性别') === 1) {
      dict['她'] = '他';
      dict['马娘'] = '马郎';
      dict['大小姐'] = '大少爷';
    } else {
      dict['她'] = '她';
      dict['马娘'] = '马娘';
      dict['大小姐'] = '大小姐';
    }
    return dict;
  }

  good_morning() {
    lines['回合开始互动对话'](this.#dict);
  }

  good_night() {
    lines['回合结束互动对话'](this.#dict);
  }

  async office_cook() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    await lines['一起做饭'](dict);
  }

  async office_game() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['你'] = era.get('callname:0:-2');
    await lines['一起打游戏机'](dict);
  }

  async office_gift() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    await lines['送礼'](dict);
  }

  async office_rest() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['你'] = era.get('callname:0:-2');
    dict['她'] = era.get('flag:角色性别') === 1 ? '他' : '她';
    await lines['一起休息'](dict);
  }

  async office_study() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['马娘'] = era.get('flag:角色性别') === 1 ? '马郎' : '马娘';
    await lines['指导学习'](dict);
  }

  async out_church(hook) {
    hook.arg = Math.random() < 0.5;
    const dict = { dice: hook.arg };
    dict['代表色'] = get_chara_color(this.id);
    dict['你'] = era.get('callname:0:-2');
    dict['玩家名'] = era.get('callname:0:-1');
    dict['她'] = era.get(`cflag:${this.id}:性别`) === 1 ? '他' : '她';
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
    const edu_marks = EduEventMarks.get_marks(this.id);
    dict['代表色'] = get_chara_color(this.id);
    dict['你'] = era.get('callname:0:-2');
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['父亲'] = era.get('cflag:0:性别') === 1 ? '父亲' : '母亲';
    dict['她'] = era.get('flag:角色性别') === 1 ? '他' : '她';
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await lines['街机厅'](dict);
        break;
      case 1:
        dict.hot_spring =
          !edu_marks.hot_spring &&
          era.get(`cflag:${this.id}:育成回合计时`) >= 96 &&
          Math.random() < 0.25;
        if (dict.hot_spring) {
          edu_marks.hot_spring = 1;
        }
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
    dict['你'] = era.get('callname:0:-2');
    dict['称呼'] = sys_get_callname(this.id, 0);
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
    dict['你'] = era.get('callname:0:-2');
    dict['称呼'] = sys_get_callname(this.id, 0);
    await lines['吃便当'](dict);
  }

  select() {
    const dict = {};
    dict['你'] = era.get('callname:0:-2');
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    lines['选中互动对象'](dict);
  }

  async talk() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['马娘'] = era.get('flag:角色性别') === 1 ? '马郎' : '马娘';
    get_chara_talk(7);
    get_chara_talk(63);
    dict['麦昆称呼船'] = sys_get_callname(this.id, 7);
    dict['麦昆称呼狄杜斯'] = sys_get_callname(this.id, 63);
    dict.check = new McqueenLifeMarks().love_40;
    await lines['闲聊'](dict);
  }

  async birthday(hook) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 48) {
      const dict = this.#dict;
      dict['高峰色'] = get_chara_talk(86).color;
      await print_name_and_show_kojo(
        '初见时的生日',
        get_chara_talk(this.id),
        lines,
        dict,
      );
    } else if (edu_weeks < 96) {
      await print_name_and_show_kojo(
        '第二年生日',
        get_chara_talk(this.id),
        lines,
        this.#dict,
      );
    } else if (edu_weeks <= 144) {
      await print_name_and_show_kojo(
        '第三年生日',
        get_chara_talk(this.id),
        lines,
        this.#dict,
      );
    } else {
      await super.birthday(hook);
    }
  }
};
