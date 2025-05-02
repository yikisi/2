/**
 * @file 目白善信 - 日常
 * @author KUN
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/daily/daily-64.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const { get_custom_check } = require('#/event/check/check-factory');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const dict = {};
    dict['善信'] = era.get(`callname:${this.id}:-2`);
    dict['称呼'] = sys_get_callname(this.id, 0);
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['小姐'] = '先生';
      dict['她'] = '他';
      dict['姐妹'] = '兄弟';
    } else {
      dict['小姐'] = '小姐';
      dict['她'] = '她';
      dict['姐妹'] = '姐妹';
    }
    dict['T'] = era.get('callname:0:-2');
    dict['T称呼善信'] = sys_get_callname(0, this.id);
    dict.half_life = new PamaEduMarks().half_life;
    return dict;
  }

  good_morning() {
    this.select();
  }

  select() {
    const life_marks = new PamaEduMarks();
    const dict = this.#dict;
    if (life_marks.b_escape > 0) {
      life_marks.b_escape = 0;
      kojo['地下室逃脱'](dict);
    } else {
      get_chara_talk(65);
      dict['善信称呼太阳神'] = sys_get_callname(this.id, 65);
      kojo['主界面'](dict);
    }
  }

  async office_study() {
    await kojo['指导学习'](this.#dict);
  }

  async office_cook() {
    await kojo['加餐'](this.#dict);
  }

  async office_prepare() {
    await kojo['赛前准备'](this.#dict);
  }

  async office_rest() {
    await kojo['小憩'](this.#dict);
  }

  async talk() {
    const dict = this.#dict;
    get_chara_talk(59);
    dict['善信称呼多伯'] = sys_get_callname(this.id, 59);
    get_chara_talk(65);
    dict['善信称呼太阳神'] = sys_get_callname(this.id, 65);
    get_chara_talk(71);
    dict['善信称呼阿尔丹'] = sys_get_callname(this.id, 71);
    get_chara_talk(74);
    dict['善信称呼光明'] = sys_get_callname(this.id, 74);
    get_chara_talk(86);
    dict['善信称呼高峰'] = sys_get_callname(this.id, 86);
    await kojo['聊天'](dict);
  }

  async office_game() {
    const dict = this.#dict;
    get_chara_talk(27);
    dict['善信称呼莱恩'] = sys_get_callname(this.id, 27);
    await kojo['玩游戏'](dict);
  }

  async office_gift() {
    await kojo['送礼物'](this.#dict);
  }

  async school_atrium(hook) {
    if ((hook.arg = !(await select_action_in_atrium()))) {
      await kojo['枯树洞'](this.#dict);
    } else {
      await kojo['中庭约会'](this.#dict);
    }
  }

  async school_rooftop() {
    if ((await kojo['天台'](this.#dict))[0] === 2 && sys_love_uma(this.id, 1)) {
      await era.waitAnyKey();
    }
  }

  async out_river(hook) {
    if ((hook.arg = await select_action_around_river()) > 0) {
      await kojo['散步'](this.#dict);
    } else {
      await kojo['钓鱼'](this.#dict);
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
        await kojo['电影'](this.#dict);
    }
  }

  async out_church() {
    const dict = this.#dict;
    dict.dice = Math.random() < 0.5;
    await kojo['神社'](dict);
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
        await kojo['商店'](this.#dict);
    }
  }

  async good_night(hook) {
    const dict = {
      ...this.#dict,
      check: get_custom_check(this.id).is_want_make_love(),
    };
    const ret = await kojo['晚安'](dict);
    if (ret[0] === 1) {
      hook.arg = 1;
    } else if (ret[0] === 2) {
      if (dict.check === 2) {
        hook.arg = 2;
      } else {
        hook.arg = 0;
      }
    }
  }

  async load_talk() {
    await kojo['读档对话'](this.#dict);
  }
};
