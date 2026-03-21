const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const me = get_chara_talk(0);
    const tachyon = get_chara_talk(this.id);
    const kojo = i18n().kojo[this.id].recruit;

    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return false;
        }
        await kojo.rec_start(tachyon, me);
        era.set('cflag:32:随机招募', 0);
        era.set('flag:物色对象', 32);
        {
          const life_marks = new TachyonLifeMarks();
          if (life_marks.first > 0) {
            life_marks.first = 1;
          }
        }
        EventMarks.get(0).add(event_hooks.recruit_start);
        add_event(
          event_hooks.recruit_start,
          new EventObject(32, cb_enum.recruit),
        );
        break;
      case event_hooks.recruit_start:
        await kojo.rec_final(tachyon, me);
        EventMarks.get(0).sub(event_hooks.recruit_start);
        era.set('cflag:32:招募状态', recruit_flags.yes);
        era.set(
          'callname:32:0',
          i18n().name.kun_template.replace('%NAME%', i18n().name.trainer),
        );
        add_event(
          event_hooks.week_end,
          new EventObject(32, cb_enum.edu).set_arg('beginning'),
        );
        era.set('flag:物色对象', 0);
        return true;
    }
    return false;
  }
};
