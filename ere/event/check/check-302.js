const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    const life_marks = new TasteLifeMarks();
    if (
      get('flag:回合爱慕惩罚') > 0 &&
      get('love:302') >= 50 &&
      life_marks.who_am_i < 2
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(302, cb_enum.love, true).set_arg(49),
      );
    }
    if (life_marks.annoyance > 0) {
      if (--life_marks.annoyance === 0) {
        new EventMarks(0).add(event_hooks.school_chairman);
        add_event(
          event_hooks.school_chairman,
          new EventObject(302, cb_enum.edu).set_arg('annoyance1'),
        );
      }
    } else if (life_marks.annoyance < 0) {
      if (++life_marks.annoyance === 0) {
        new EventMarks(0).add(event_hooks.school_chairman);
        add_event(
          event_hooks.school_chairman,
          new EventObject(302, cb_enum.edu).set_arg('annoyance2'),
        );
      }
    }
    super.check_next_week();
  }
};
