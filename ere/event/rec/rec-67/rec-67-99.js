const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const me = get_chara_talk(0);
    const daiya = get_chara_talk(this.id);
    const kita = get_chara_talk(68);
    const event_marks = EventMarks.get(0);
    const kojo = i18n().kojo[this.id][99].recruit;
    if (stage === event_hooks.recruit) {
      if (await this.check_before_rec()) {
        return false;
      }
      const ret = await kojo.rec_playground(daiya, kita, me);
      if (ret[0] === 1 || ret[1] === 1) {
        era.set('cflag:67:招募状态', recruit_flags.yes);
        return true;
      } else if (ret[1] === 2) {
        era.set('cflag:67:随机招募', 0);
        era.set('flag:物色对象', 67);
        event_marks.add(event_hooks.out_start);
        add_event(event_hooks.out_start, new EventObject(67, cb_enum.recruit));
      }
    } else if (stage === event_hooks.out_start) {
      if (era.get('flag:当前互动角色') > 0) {
        await kojo.try_out(daiya, me);
        add_event(event_hooks.out_start, ebj);
        return false;
      }
      const ret = await print_title_with_kojo(
        kojo,
        'rec_out',
        daiya,
        get_chara_talk(13),
        kita,
        me,
      );
      if (ret[0] === 1) {
        era.set('cflag:67:招募状态', recruit_flags.yes);
        era.set('flag:物色对象', 0);
        event_marks.sub(event_hooks.out_start);
      } else {
        add_event(event_hooks.out_start, ebj);
      }
      return true;
    }
    return false;
  }
};
