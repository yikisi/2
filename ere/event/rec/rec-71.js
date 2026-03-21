const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const kojo = i18n().kojo[this.id].recruit;
    const dict = generate_dictionary(this.id, { call: !0, uma: !0 });
    const event_marks = new EventMarks(0);
    switch (era.get(`cflag:${this.id}:招募状态`)) {
      case recruit_flags.no:
        if ((await kojo['recruit_1'](dict))[2] === 1) {
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:招募状态`, -2);
          event_marks.add(event_hooks.recruit);
        } else {
          era.set(`cflag:${this.id}:招募状态`, -1);
        }
        break;
      case -1:
        if ((await kojo['recruit_2'](dict))[0] === 1) {
          era.set('flag:物色对象', this.id);
          era.set(`cflag:${this.id}:招募状态`, -2);
          event_marks.add(event_hooks.recruit);
        }
        break;
      case -2:
        await kojo['recruit_3'](dict);
        event_marks.sub(event_hooks.recruit);
        era.set('flag:物色对象', 0);
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        await this.recruit_end();
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
        );
    }
    return true;
  }
};
