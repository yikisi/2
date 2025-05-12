/**
 * @file 目白善信 - 招募
 * @author KUN
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-64.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const dict = {};
    const pama = get_chara_talk(this.id);
    dict['代表色'] = pama.color;
    dict['她'] = pama.sex;
    dict['马娘'] = pama.uma_sex_title;
    dict['你'] = era.get('callname:0:-2');
    dict['善信称呼骏川'] = sys_get_callname(this.id, 301);
    dict['称呼'] = sys_get_callname(this.id, 0);
    if (era.get(`cflag:${this.id}:招募状态`) === 0) {
      let ret;
      switch (stage) {
        case event_hooks.recruit:
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:随机招募`, 0);
          await kojo['前置']();
          EventMarks.get(0).add(event_hooks.school_rooftop);
          add_event(
            event_hooks.school_rooftop,
            new EventObject(this.id, cb_enum.recruit),
          );
          return true;
        case event_hooks.school_rooftop:
          EventMarks.get(0).sub(event_hooks.school_rooftop);
          EventMarks.get(0).add(event_hooks.school_atrium);
          ret = await kojo['招募1'](dict);
          if (ret[0] === 2) {
            era.println();
            ret = sys_like_chara(this.id, 0, -15);
          } else if (ret[0] === 3) {
            era.println();
            ret = sys_like_chara(this.id, 0, 10);
          } else {
            ret = false;
          }
          if (ret) {
            await era.waitAnyKey();
          }
          add_event(event_hooks.school_atrium, event_object);
          return true;
        case event_hooks.school_atrium:
          EventMarks.get(0).sub(event_hooks.school_atrium);
          if ((await kojo['招募2'](dict))[0] === 3) {
            era.println();
            if (sys_like_chara(this.id, 0, 10)) {
              await era.waitAnyKey();
            }
          }
          era.set('flag:物色对象', 0);
          era.set(`cflag:${this.id}:随机招募`, 1);
          era.set(`cflag:${this.id}:招募状态`, -1);
          return true;
      }
    } else {
      const ret = await kojo['招募3'](dict);
      if (ret[0] === 2) {
        era.set(`cflag:${this.id}:招募状态`, 1);
        era.println();
        let wait_flag;
        if (ret[1] === 1) {
          wait_flag = sys_love_uma(this.id, 2);
        } else {
          wait_flag = sys_like_chara(this.id, 0, 15);
        }
        if (wait_flag) {
          await era.waitAnyKey();
        }
      }
    }
  }
};
