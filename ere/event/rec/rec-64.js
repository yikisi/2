const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const dict = {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      CALL_301: sys_get_callname(this.id, 301),
    };
    const kojo = i18n().kojo[this.id].recruit;
    if (era.get(`cflag:${this.id}:招募状态`) === 0) {
      let ret;
      switch (stage) {
        case event_hooks.recruit:
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:随机招募`, 0);
          await kojo['pre']();
          EventMarks.get(0).add(event_hooks.school_rooftop);
          add_event(
            event_hooks.school_rooftop,
            new EventObject(this.id, cb_enum.recruit),
          );
          return true;
        case event_hooks.school_rooftop:
          if (era.get('flag:5') > 0) {
            add_event(stage, event_object);
            return;
          }
          EventMarks.get(0).sub(event_hooks.school_rooftop);
          EventMarks.get(0).add(event_hooks.school_atrium);
          ret = await kojo['rec1'](dict);
          switch (ret['reward']) {
            case 2:
              era.println();
              sys_like_chara(this.id, 0, -15) && (await era.waitAnyKey());
              break;
            case 3:
              era.println();
              sys_like_chara(this.id, 0, 10) && (await era.waitAnyKey());
          }
          add_event(event_hooks.school_atrium, event_object);
          return true;
        case event_hooks.school_atrium:
          if (era.get('flag:5') > 0) {
            add_event(stage, event_object);
            return;
          }
          EventMarks.get(0).sub(event_hooks.school_atrium);
          if ((await kojo['rec2'](dict))['reward'] === 3) {
            era.println();
            sys_like_chara(this.id, 0, 10) && (await era.waitAnyKey());
          }
          era.set('flag:物色对象', 0);
          era.set(`cflag:${this.id}:随机招募`, 1);
          era.set(`cflag:${this.id}:招募状态`, -1);
          return true;
      }
    } else {
      const ret = await kojo['rec3'](dict);
      if (ret['select'] === 2) {
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
        );
        era.println();
        if (
          ret['reward'] === 1
            ? sys_love_uma(this.id, 2)
            : sys_like_chara(this.id, 0, 15)
        ) {
          await era.waitAnyKey();
        }
      }
    }
  }
};
