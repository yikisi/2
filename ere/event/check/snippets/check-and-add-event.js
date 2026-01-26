const { add_event } = require('#/event/queue');

const { log_edu_weeks } = require('#/utils/value-utils');

/**
 * @param {EduEventMarks} edu_marks
 * @param {number} weeks
 * @param {string} param_name
 * @param {number} hook
 * @param {EventObject} event_obj
 * @param {function} [cb]
 */
function check_and_add_event(
  edu_marks,
  weeks,
  param_name,
  hook,
  event_obj,
  cb,
) {
  if (
    !edu_marks.get(param_name) &&
    (weeks >= 143 ||
      (edu_marks._r_e_check > 0 &&
        Math.random() < Math.log(weeks) / log_edu_weeks))
  ) {
    edu_marks._r_e_check--;
    edu_marks.add(param_name);
    add_event(hook, event_obj.copy().set_arg(param_name));
    typeof cb === 'function' && cb();
  }
}

module.exports = check_and_add_event;
