/**
 * @file 荒漠英雄 - 招募
 * @author 某不思议的大嘴鸥
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-47.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const dict = {};
    const rob = get_chara_talk(this.id);
    dict['代表色'] = rob.color;
    dict['她'] = rob.sex;
    dict['马娘'] = rob.get_uma_sex_title();
    dict['少女'] = rob.get_teen_sex_title();
    const me = get_chara_talk(0);
    dict['你'] = me.name;
    dict['称呼'] = sys_get_callname(this.id, 0);
    let temp;
    switch (era.get(`cflag:${this.id}:招募状态`)) {
      case recruit_flags.no:
        dict['骏川'] = sys_get_callname(0, 301);
        temp = await kojo['招募1'](dict);
        era.println();
        if (temp[3] === 1) {
          if (sys_like_chara(this.id, 0, 5)) {
            await era.waitAnyKey();
          }
        } else if (sys_love_uma(this.id, 1)) {
          await era.waitAnyKey();
        }
        era.set(`cflag:${this.id}:随机招募`, 0);
        era.set(`cflag:${this.id}:招募状态`, -1);
        EventMarks.get(0).add(event_hooks.school_atrium);
        add_event(
          event_hooks.school_atrium,
          new EventObject(this.id, cb_enum.recruit),
        );
        era.set('flag:物色对象', this.id);
        return true;
      case -1:
        if (era.get('flag:当前互动角色') > 0) {
          add_event(stage, event_object);
          return false;
        }
        await kojo['招募2'](dict);
        era.set(`cflag:${this.id}:招募状态`, -2);
        add_event(stage, event_object);
        return true;
      case -2:
        if (era.get('flag:当前互动角色') > 0) {
          add_event(stage, event_object);
          return false;
        }
        await kojo['招募3'](dict);
        era.set(`cflag:${this.id}:随机招募`, 1);
        era.set(`cflag:${this.id}:招募状态`, -3);
        EventMarks.get(0).sub(event_hooks.school_atrium);
        era.set('flag:物色对象', 0);
        return true;
      case -3:
        if (await this.check_before_rec()) {
          return false;
        }
        dict['他'] = me.sex;
        dict['吉兆色'] = get_chara_color(83);
        temp = await kojo['招募4'](dict);
        if (temp[3] === 1) {
          if (sys_like_chara(this.id, 0, 5, true, 1)) {
            await era.waitAnyKey();
          }
        } else {
          sys_change_fame(-5);
          if (sys_love_uma(this.id, 2)) {
            await era.waitAnyKey();
          }
        }
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    }
  }
};
