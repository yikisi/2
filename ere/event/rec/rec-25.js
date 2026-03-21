const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const coffee = get_chara_talk(this.id);
    const event_marks = EventMarks.get(0);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    switch (stage) {
      case event_hooks.recruit:
        if (era.get('cflag:25:招募状态') === recruit_flags.no) {
          await kojo.rec_start(coffee, me);
          add_event(
            event_hooks.recruit_start,
            new EventObject(25, cb_enum.recruit),
          );
          event_marks.add(event_hooks.recruit_start);
          return true;
        } else if ((await kojo.rec_again(coffee, me)) === 1) {
          era.set('cflag:25:随机招募', 0);
          era.set('flag:物色对象', 25);
          add_event(event_hooks.week_end, new EventObject(25, cb_enum.recruit));
          event_marks.add(event_hooks.week_end);
          return true;
        }
        break;
      case event_hooks.recruit_start:
        event_marks.sub(event_hooks.recruit_start);
        await kojo.goto_playground(coffee, me);
        era.add('cflag:25:招募状态', -1);
        return true;
      case event_hooks.week_end:
        get_custom_mec(this.id).set_callname();
        await kojo.rec_final(coffee, me, sys_get_colored_callname(this.id, 0));
        era.set('cflag:25:招募状态', recruit_flags.yes);
        era.set('flag:物色对象', 0);
        event_marks.sub(event_hooks.week_end);
        add_event(
          event_hooks.week_start,
          new EventObject(25, cb_enum.edu).set_arg('beginning'),
        );
    }
  }
};
