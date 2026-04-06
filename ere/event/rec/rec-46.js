const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const callname = sys_get_callname(this.id, 0);
    const falcon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        await kojo.rec_start(falcon, me, get_chara_talk(301), callname);
        add_event(event_hooks.out_river, new EventObject(46, cb_enum.recruit));
        new EventMarks(0).add(event_hooks.out_river);
        era.set('cflag:46:随机招募', 0);
        return true;
      case event_hooks.out_river:
        if (era.get('flag:当前互动角色')) {
          add_event(event_hooks.out_river, event_object);
          return false;
        }
        await kojo.rec_final(falcon, me, callname);
        new EventMarks(0).sub(event_hooks.out_river);
        new FalconEduMarks().after_recruit = 1;
        era.set('cflag:46:招募状态', recruit_flags.yes);
        add_event(
          event_hooks.week_end,
          new EventObject(46, cb_enum.edu).set_arg('beginning'),
        );
        era.set('flag:物色对象', 0);
        return true;
    }
  }
};
