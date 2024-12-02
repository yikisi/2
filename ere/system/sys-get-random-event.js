const { run_custom_daily } = require('#/event/daily/daily-factory');
const { run_custom_edu } = require('#/event/edu/edu-factory');
const { run_custom_love } = require('#/event/love/love-factory');
const {
  cb_enum,
  get_chara_event_object,
  get_random_event_object,
} = require('#/event/queue');
const { run_custom_rec } = require('#/event/rec/rec-factory');

const event_hooks = require('#/data/event/event-hooks');

const cb_dict = {};
cb_dict[cb_enum.recruit] = run_custom_rec;
cb_dict[cb_enum.daily] = run_custom_daily;
cb_dict[cb_enum.edu] = run_custom_edu;
cb_dict[cb_enum.love] = run_custom_love;

/**
 * get a random or character's specified event from stage's queue
 * @param {number} stage
 * @param {boolean|number} [random_or_chara_id]
 * @returns {undefined|function(*?):Promise}
 */
function sys_get_random_event(stage, random_or_chara_id) {
  const event_object = (
    typeof random_or_chara_id === 'number'
      ? get_chara_event_object
      : get_random_event_object
  )(stage, random_or_chara_id);
  if (event_object && cb_dict[event_object.type]) {
    return (extra_flag) =>
      cb_dict[event_object.type](
        event_object.chara_id,
        stage,
        extra_flag,
        event_object,
      );
  }
  return stage === event_hooks.week_start || stage === event_hooks.week_end
    ? undefined
    : async () => false;
}

module.exports = sys_get_random_event;
