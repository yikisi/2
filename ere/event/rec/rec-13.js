/**
 * @file 目白麦昆 - 招募
 * @author 伊兰
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const lines = require('#/event/rec/rec-13.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_obj) {
    const mcqueen = get_chara_talk(13);
    const dict = {};
    dict['你'] = era.get('callname:0:-2');
    dict['马娘'] = mcqueen.uma_sex_title;
    dict['她'] = mcqueen.sex;
    dict['玩家敬称'] = sys_get_callname(this.id, 0);
    dict['代表色'] = mcqueen.color;
    dict['角色敬称'] = mcqueen.sex_code === 1 ? '少爷' : '小姐';
    const event_arg = event_obj?.arg;
    switch (event_arg) {
      default:
        if ((await lines['recruit_1'](dict))[2] === 1) {
          era.set('flag:物色对象', 13);
          era.set(`cflag:${this.id}:随机招募`, 0);
          era.set(`cflag:${this.id}:招募状态`, -2);
          EventMarks.get(0).add(event_hooks.recruit_start);
          add_event(
            event_hooks.recruit_start,
            new EventObject(13, cb_enum.recruit).set_arg(2),
          );
        } else {
          era.set(`cflag:${this.id}:随机招募`, 1);
          era.set(`cflag:${this.id}:招募状态`, recruit_flags.no);
          era.set('flag:物色对象', 0);
          return false;
        }
        break;
      case 2:
        await lines['recruit_2'](dict);
        add_event(stage, event_obj.set_arg(3));
        break;
      case 3:
        await lines['recruit_3'](dict);
        add_event(stage, event_obj.set_arg(4));
        break;
      case 4:
        await lines['recruit_4'](dict);
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        era.set('flag:物色对象', 0);
        EventMarks.get(0).sub(event_hooks.recruit_start);
    }
    return true;
  }
};
