const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_obj) {
    const mcqueen = get_chara_talk(13);
    const kojo = i18n().kojo[this.id].recruit;
    const dict = {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      YOUNG_LADY:
        mcqueen.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    };
    const event_arg = event_obj?.arg;
    switch (event_arg) {
      default:
        if ((await kojo['recruit_1'](dict))[2] === 1) {
          era.set('flag:物色对象', 13);
          era.set(`cflag:${this.id}:随机招募`, 0);
          era.set(`cflag:${this.id}:招募状态`, -2);
          EventMarks.get(0).add(event_hooks.recruit_start);
          add_event(
            event_hooks.recruit_start,
            new EventObject(13, cb_enum.recruit).set_arg(2),
          );
        } else {
          era.set(`cflag:${this.id}:随机招募`, 1);
          era.set(`cflag:${this.id}:招募状态`, recruit_flags.no);
          era.set('flag:物色对象', 0);
          return false;
        }
        break;
      case 2:
        await kojo['recruit_2'](dict);
        add_event(stage, event_obj.set_arg(3));
        break;
      case 3:
        await kojo['recruit_3'](dict);
        add_event(stage, event_obj.set_arg(4));
        break;
      case 4:
        await kojo['recruit_4'](dict);
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        era.set('flag:物色对象', 0);
        EventMarks.get(0).sub(event_hooks.recruit_start);
    }
    return true;
  }
};
