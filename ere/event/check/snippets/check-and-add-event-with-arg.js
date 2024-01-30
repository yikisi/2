const { add_event } = require('#/event/queue');

const { log_edu_weeks } = require('#/utils/value-utils');

const EventObject = require('#/data/event/event-object');

/**
 * @param {EduEventMarks} edu_marks
 * @param {number} weeks
 * @param {string} param_name
 * @param {number} hook
 * @param {EventObject} event_obj
 */
function check_and_add_event(edu_marks, weeks, param_name, hook, event_obj) {
  if (
    !edu_marks.get(param_name) &&
    Math.random() < Math.log(weeks) / log_edu_weeks
  ) {
    edu_marks[param_name]++;
    add_event(
      hook,
      new EventObject(
        event_obj.chara_id,
        event_obj.type,
        event_obj.special,
      ).set_arg(param_name),
    );
  }
}

module.exports = check_and_add_event;
