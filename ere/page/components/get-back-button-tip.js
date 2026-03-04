const { get } = require('#/era-electron');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

const { i18n } = require('#/i18n/selector');

function get_back_button_tip() {
  return EventMarks.get(get('flag:当前互动角色')).check(
    event_hooks.back_school,
  ) || EventMarks.get(0).check(event_hooks.back_school)
    ? { buttonType: 'danger', title: i18n().ui_loc_back_tip }
    : {};
}

module.exports = get_back_button_tip;
