const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TaishinEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-50');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const tye_sine = get_chara_talk(this.id);
    const dict = generate_dictionary(this.id, { uma: !0, your_name: !0 });
    const kojo = i18n().kojo[this.id].recruit;
    if (stage === event_hooks.recruit) {
      if (
        (await print_title_with_kojo(kojo, 'rec0', tye_sine, dict))['rec'] === 1
      ) {
        // FLAGNAME:33 = 物色对象
        era.set('flag:33', this.id);
        // CFLAGNAME:67 = 随机招募
        era.set(`cflag:${this.id}:67`, 0);
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.recruit),
        );
        EventMarks.get(0).add(event_hooks.week_end);
      }
    } else {
      era.set('flag:33', 0);
      era.set(`cflag:${this.id}:67`, 1);
      EventMarks.get(0).sub(event_hooks.week_end);
      if (
        (await print_title_with_kojo(kojo, 'rec1', tye_sine, dict))['rec'] === 1
      ) {
        // CFLAGNAME:66 = 招募状态
        era.set(`cflag:${this.id}:66`, recruit_flags.yes);
        era.set('callname:0:50', '105011');
        new TaishinEduMarks().after_recruit = 1;
      }
    }
  }
};
