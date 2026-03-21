const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

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
  async recruit(stage, event_object) {
    const rice = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    const chara_self_name = sys_get_callname(this.id, this.id);
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        await kojo.rec_start(rice, me);
        EventMarks.get(0).add(event_hooks.out_station);
        add_event(
          event_hooks.out_station,
          new EventObject(30, cb_enum.recruit),
        );
        era.set('flag:物色对象', 30);
        era.set('cflag:30:随机招募', 0);
        break;
      case event_hooks.out_station:
        if (era.get('flag:当前互动角色') > 0) {
          add_event(event_hooks.out_station, event_object);
          return false;
        }
        await kojo.rec_station(rice, me, chara_self_name);
        EventMarks.get(0)
          .sub(event_hooks.out_station)
          .add(event_hooks.recruit_start);
        add_event(event_hooks.recruit_start, event_object);
        return true;
      case event_hooks.recruit_start:
        await kojo.rec_race(rice);
        EventMarks.get(0)
          .add(event_hooks.school_atrium)
          .sub(event_hooks.recruit_start);
        add_event(event_hooks.school_atrium, event_object);
        return true;
      case event_hooks.school_atrium:
        // 招募事件
        await kojo.rec_final(rice, me, chara_self_name);
        era.set('flag:物色对象', 0);
        era.set('cflag:30:招募状态', recruit_flags.yes);
        get_custom_mec(30).set_callname();
        EventMarks.get(0).sub(event_hooks.school_atrium);
        add_event(
          event_hooks.week_start,
          new EventObject(30, cb_enum.edu).set_arg('beginning'),
        );
        await this.recruit_end();
        return true;
    }
  }
};
