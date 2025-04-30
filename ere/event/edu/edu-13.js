/**
 * @file 目白麦昆 - 育成
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const lines = require('#/event/edu/edu-13.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedEdu {
  get dict() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['训练员'] = '你';
    dict['麦昆'] = era.get(`callname:${this.id}:-2`);
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['马娘'] = '马郎';
      dict['大小姐'] = '大少爷';
      dict['她'] = '他';
      dict['姐妹'] = '兄弟';
    } else {
      dict['马娘'] = '马娘';
      dict['大小姐'] = '大小姐';
      dict['她'] = '她';
      dict['姐妹'] = '姐妹';
    }
    const ryan = get_chara_talk(27);
    dict['称呼'] = '训练员' + (era.get('cflag:0:性别') === 1 ? '先生' : '小姐');
    dict['莱恩代表色'] = ryan.color;
    dict['莱恩'] = ryan.name;
    dict['麦昆称呼莱恩'] = sys_get_callname(this.id, 27);
    dict['莱恩称呼麦昆'] = sys_get_callname(27, this.id);
    return dict;
  }

  async race_start(mcqueen, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let name;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (edu_weeks === 23) {
          name = '出道战前';
        }
        break;
      case race_enum.kiku_sho:
        name = '切磋';
        break;
      case race_enum.tenn_spr:
        name = '制霸前夕';
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          name = '沉稳迎战';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          name = '闪光至最后一刻';
        }
    }
    if (name !== undefined) {
      await print_event_name(name, mcqueen);
      await lines[name](this.dict);
    } else {
      return await super.race_start(mcqueen, me, callname, hook, extra_flag);
    }
  }

  /**
   * @param {CharaTalk} mcqueen
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async mejiro_family(mcqueen, me, callname, hook, extra_flag, event_object) {
    const name = '来自目白家的邀请';
    await print_event_name(name, mcqueen);
    await lines[name](this.dict);
    add_event(event_hooks.out_start, event_object.set_arg('mejiro_party'));
  }

  /**
   * @param {CharaTalk} mcqueen
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async mejiro_party(mcqueen, me, callname, hook, extra_flag, event_object) {
    const curr = era.get('flag:当前互动角色');
    if (curr > 0 && curr !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    const name = '目白家的宴会';
    await print_event_name(name, mcqueen);
    await lines[name](this.dict);
    new McqueenEduMarks().love_89 = 1;
    return true;
  }

  async race_end(mcqueen, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let name;
    if (extra_flag.rank === 1) {
      switch (extra_flag.race) {
        case race_enum.begin_race:
          name = '向着目标迈进';
          break;
        case race_enum.kiku_sho:
          name = '精彩的对局';
          break;
        case race_enum.tenn_spr:
          name = '继承目白家者';
          add_event(
            event_hooks.back_school,
            new EventObject(this.id, cb_enum.edu).set_arg('mejiro_family'),
          );
          break;
        case race_enum.takz_kin:
          if (edu_weeks > 96) {
            name = '目白家的强大';
          }
          break;
        case race_enum.tenn_sho:
          if (edu_weeks > 96) {
            name = '谢幕';
          }
      }
    }
    if (name !== undefined) {
      await print_event_name(name, mcqueen);
      await lines[name](this.dict);
    } else {
      return await super.race_end(mcqueen, me, callname, hook, extra_flag);
    }
  }

  async week_start(mcqueen, me, callname, hook, extra_flag, event_object) {
    if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait_flag = false;
    switch (event_object.arg) {
      case 47 + 1:
        await print_event_name('新年', mcqueen);
        await lines['新年'](this.dict);
        break;
      case 47 + 6:
        await print_event_name('情人节', mcqueen);
        if ((await lines['情人节'](this.dict))[1] === 1) {
          era.println();
          era.print('获得了【情人节巧克力】！');
          era.add('item:情人节巧克力', 1);
          wait_flag = true;
        } else {
          sys_change_attr_and_print(0, '体力', 200);
        }
        break;
      case 47 + 40:
        await print_event_name('万圣节', mcqueen);
        await lines['万圣节'](this.dict);
        break;
      case 'palace':
        return await super.week_start(
          mcqueen,
          me,
          callname,
          hook,
          extra_flag,
          event_object,
        );
    }
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    era.println();
    wait_flag =
      sys_like_chara(this.id, 0, get_random_value(0, 25)) || wait_flag;
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }
};
