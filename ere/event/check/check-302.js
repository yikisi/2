const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (
      get('flag:回合爱慕惩罚') &&
      get('love:302') >= 50 &&
      new TasteLifeMarks().who_am_i < 2
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(302, cb_enum.love).set_arg(49),
      );
    }
    super.check_next_week();
  }
};
