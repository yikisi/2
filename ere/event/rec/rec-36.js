const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { add_event, cb_enum } = require('#/event/queue');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const kojo = i18n().kojo[this.id].recruit;
    const shakur = get_chara_talk(this.id);
    const dict = generate_dictionary(this.id, {
      sir: !0,
      teen: !0,
      your_sex: !0,
      uma: !0,
    });
    switch (stage) {
      case event_hooks.recruit:
        // CFLAGNAME:66 = 招募状态
        if (era.get(`cflag:${this.id}:66`) === recruit_flags.no) {
          if (
            (await print_title_with_kojo(kojo, 'rec0', shakur, dict))[
              'recruit'
            ] === 1
          ) {
            return;
          }
          // CFLAGNAME:67 = 随机招募
          era.set(`cflag:${this.id}:67`, 0);
          EventMarks.get(0).add(event_hooks.recruit_start);
          // FLAGNAME:33 = 物色对象
          era.set('flag:33', this.id);
          add_event(
            event_hooks.recruit_start,
            new EventObject(this.id, cb_enum.recruit),
          );
        } else {
          await print_title_with_kojo(kojo, 'rec3', shakur, dict);
          era.set('flag:33', 0);
          era.set(`cflag:${this.id}:66`, recruit_flags.yes);
        }
        break;
      case event_hooks.recruit_start:
        await print_title_with_kojo(kojo, 'rec1', shakur, dict);
        EventMarks.get(0)
          .sub(event_hooks.recruit_start)
          .add(event_hooks.school_atrium);
        add_event(event_hooks.school_atrium, event_object);
        break;
      case event_hooks.school_atrium:
        // FLAGNAME:5 = 当前互动角色
        if (era.get('flag:5') > 0) {
          add_event(stage, event_object);
          return false;
        }
        await print_title_with_kojo(kojo, 'rec2', shakur, dict);
        EventMarks.get(0).sub(event_hooks.school_atrium);
        era.set(`cflag:${this.id}:66`, -1);
    }
    return true;
  }
};
