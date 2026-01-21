const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const bright = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const dict = generate_dictionary(this.id, {
      call: true,
      uma: true,
      title: true,
    });
    const kojo = i18n().kojo[this.id].recruit;
    let r_flag;
    switch (stage) {
      case event_hooks.recruit:
        await kojo['rec0'](dict);
        // CFLAGNAME:67 = 随机招募
        era.set(`cflag:${this.id}:67`, 0);
        // FLAGNAME:33 = 物色对象
        era.set('flag:33', this.id);
        // CFLAGNAME:66 = 招募状态
        if (era.get(`cflag:${this.id}:66`) === recruit_flags.no) {
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.recruit),
          );
          EventMarks.get(0).add(event_hooks.out_start);
        } else {
          add_event(
            event_hooks.school_atrium,
            new EventObject(this.id, cb_enum.recruit),
          );
          EventMarks.get(0).add(event_hooks.school_atrium);
        }
        break;
      case event_hooks.out_start:
        if (era.get('flag:5') > 0) {
          add_event(stage, ebj);
          return;
        }
        dict.mejiro =
          era.get('cflag:13:66') === recruit_flags.yes ||
          era.get('cflag:27:66') === recruit_flags.yes ||
          era.get('cflag:59:66') === recruit_flags.yes ||
          era.get('cflag:64:66') === recruit_flags.yes ||
          era.get('cflag:71:66') === recruit_flags.yes ||
          era.get('cflag:86:66') === recruit_flags.yes;
        dict.COLOR59 = get_chara_talk(59).color;
        dict.SIR = me.adult_sex_title;
        if (
          (await print_title_with_kojo(kojo, 'rec1', bright, dict))['rec'] === 1
        ) {
          add_event(event_hooks.school_atrium, ebj);
          EventMarks.get(0).add(event_hooks.school_atrium);
        } else {
          era.set(`cflag:${this.id}:67`, 1);
          era.set('flag:33', 0);
          era.set(`cflag:${this.id}:66`, -1);
        }
        EventMarks.get(0).sub(event_hooks.out_start);
        break;
      case event_hooks.school_atrium:
        if (era.get('flag:5') > 0) {
          add_event(stage, ebj);
          return;
        }
        dict.SIR = me.adult_sex_title;
        if (era.get(`cflag:${this.id}:66`) === recruit_flags.no) {
          r_flag =
            (await print_title_with_kojo(kojo, 'rec2', bright, dict))['rec'] ===
            2;
        } else {
          r_flag =
            (await print_title_with_kojo(kojo, 'rec3', bright, dict))['rec'] ===
            1;
        }
        if (r_flag) {
          era.set(`cflag:${this.id}:66`, recruit_flags.yes);
        } else {
          era.set(`cflag:${this.id}:66`, -1);
        }
        era.set(`cflag:${this.id}:67`, 1);
        era.set('flag:33', 0);
        EventMarks.get(0).sub(event_hooks.school_atrium);
    }
    if (era.get(`cflag:${this.id}:66`) === recruit_flags.yes) {
      add_event(
        event_hooks.school_atrium,
        new EventObject(this.id, cb_enum.edu).set_arg('at_my_side'),
      );
      await this.recruit_end();
    }
    return true;
  }
};
