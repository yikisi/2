/**
 * @file 成田大进 - 招募
 * @author 卡特曼
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-50.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const me = get_chara_talk(0);
    const tye_sine = get_chara_talk(this.id);
    const dict = {
      COLOR: tye_sine.color,
      SHE: tye_sine.sex,
      UMA: tye_sine.get_uma_sex_title(),
      YOU: me.name,
    };
    if (stage === event_hooks.recruit) {
      dict.MIS = tye_sine.get_adult_sex_title();
      if (
        (
          await print_name_and_show_kojo('不服输的小个子', tye_sine, kojo, dict)
        )[0] === 1
      ) {
        era.set('flag:物色对象', this.id);
        era.set(`cflag:${this.id}:随机招募`, 0);
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.recruit),
        );
        EventMarks.get(0).add(event_hooks.week_end);
      }
    } else {
      dict.YOUR_NAME = me.actual_name;
      era.set('flag:物色对象', 0);
      era.set(`cflag:${this.id}:随机招募`, 1);
      EventMarks.get(0).sub(event_hooks.week_end);
      if (
        (
          await print_name_and_show_kojo('注定的巧合', tye_sine, kojo, dict)
        )[0] === 1
      ) {
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        era.set('callname:0:50', '大进');
      }
    }
  }
};
