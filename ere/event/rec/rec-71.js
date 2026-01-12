/**
 * @file 目白阿尔丹 - 招募
 * @author 洛洛
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-71.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const dict = {};
    dict['代表色'] = get_chara_color(this.id);
    dict['你'] = era.get('callname:0:-2');
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['她'] = '他';
      dict['马娘'] = '马郎';
    } else {
      dict['她'] = '她';
      dict['马娘'] = '马娘';
    }
    dict['称呼'] = sys_get_callname(this.id, 0);
    const event_marks = new EventMarks(0);
    switch (era.get(`cflag:${this.id}:招募状态`)) {
      case recruit_flags.no:
        if ((await kojo['recruit_1'](dict))[2] === 1) {
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:招募状态`, -2);
          event_marks.add(event_hooks.recruit);
        } else {
          era.set(`cflag:${this.id}:招募状态`, -1);
        }
        break;
      case -1:
        if ((await kojo['recruit_2'](dict))[0] === 1) {
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:招募状态`, -2);
          event_marks.add(event_hooks.recruit);
        }
        break;
      case -2:
        await kojo['recruit_3'](dict);
        event_marks.sub(event_hooks.recruit);
        era.set('flag:物色对象', 0);
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        await this.recruit_end();
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
        );
    }
    return true;
  }
};
