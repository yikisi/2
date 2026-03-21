const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const event_marks = EventMarks.get(0);
    const flash = get_chara_talk(this.id);
    const kojo = i18n().kojo[this.id].recruit;
    const me = get_chara_talk(0);
    if (stage === event_hooks.recruit) {
      if (era.get('cflag:37:招募状态') === recruit_flags.no) {
        await kojo.rec_start(flash, me);
        era.set('cflag:37:随机招募', 0);
        era.set('flag:物色对象', 37);
        event_marks.add(event_hooks.office_rest);
        add_event(
          event_hooks.office_rest,
          new EventObject(37, cb_enum.recruit),
        );
      } else {
        event_marks.sub(event_hooks.recruit);
        era.set('flag:物色对象', 0);
        if (await kojo.rec_final(flash, me)) {
          era.set('cflag:37:招募状态', recruit_flags.yes);
          await this.recruit_end();
        } else {
          era.set('cflag:37:随机招募', 1);
          era.set('cflag:37:招募状态', recruit_flags.no);
        }
      }
    } else if (stage === event_hooks.office_rest) {
      if (era.get('flag:当前互动角色')) {
        add_event(stage, event_object);
        return false;
      }
      await kojo.rec_rest(flash, me);
      event_marks.sub(event_hooks.office_rest);
      event_marks.add(event_hooks.recruit);
      era.set('cflag:37:随机招募', 1);
      era.set('cflag:37:招募状态', -2);
      return true;
    }
  }
};
