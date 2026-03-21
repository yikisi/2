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
  async recruit(stage) {
    const luna = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    if (stage === event_hooks.recruit) {
      if (await this.check_before_rec()) {
        return false;
      }
      era.set('callname:17:-1', era.set('callname:17:-2', '101702'));
      await kojo.rec_start(luna, me);
      EventMarks.get(0).add(event_hooks.recruit_start);
      add_event(
        event_hooks.recruit_start,
        new EventObject(17, cb_enum.recruit),
      );
    } else if (stage === event_hooks.recruit_start) {
      await kojo.rec_end(luna, me);
      era.set('cflag:17:招募状态', recruit_flags.yes);
      EventMarks.get(0).sub(event_hooks.recruit_start);
    }
    return true;
  }
};
