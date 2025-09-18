/**
 * @file 目白光明 - 招募
 * @author KUN
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-74.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const dict = {};
    const bright = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    dict['代表色'] = bright.color;
    dict['你'] = me.name;
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['她'] = bright.sex;
    dict['马娘'] = bright.uma_sex_title;
    switch (stage) {
      case event_hooks.recruit:
        await kojo['招募0']();
        era.set(`cflag:${this.id}:随机招募`, 0);
        era.set('flag:物色对象', this.id);
        add_event(
          event_hooks.out_start,
          new EventObject(this.id, cb_enum.recruit),
        );
        EventMarks.get(0).add(event_hooks.out_start);
        break;
      case event_hooks.out_start:
        dict['多伯色'] = get_chara_talk(59).color;
        dict['先生'] = me.adult_sex_title;
        if ((await kojo['招募1'](dict))[3] === 0) {
          add_event(event_hooks.school_atrium, ebj);
          EventMarks.get(0).add(event_hooks.school_atrium);
        } else {
          era.set(`cflag:${this.id}:随机招募`, 1);
          era.set('flag:物色对象', 0);
        }
        EventMarks.get(0).sub(event_hooks.out_start);
        break;
      case event_hooks.school_atrium:
        dict['训练员头衔'] = get_trainer_title();
        dict['先生'] = me.adult_sex_title;
        if ((await kojo['招募2'](dict))[1] === 1) {
          era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        }
        era.set(`cflag:${this.id}:随机招募`, 1);
        era.set('flag:物色对象', 0);
        EventMarks.get(0).sub(event_hooks.school_atrium);
    }
    return true;
  }
};
