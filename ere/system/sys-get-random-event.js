const { cb_enum, get_random_event_object } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');

const cb_dict = {};
cb_dict[cb_enum.recruit] = require('#/system/script/sys-call-recruit');
cb_dict[cb_enum.daily] = require('#/system/script/sys-call-daily-script');
cb_dict[cb_enum.edu] = require('#/system/script/sys-call-edu-script');
cb_dict[cb_enum.love] = require('#/system/script/sys-call-love-script');

/**
 * get a random event from stage's queue
 * @param {number} stage
 * @param {boolean} [random]
 * @returns {undefined|function(*?):Promise<*>}
 */
function sys_get_random_event(stage, random) {
  const event_object = get_random_event_object(stage, random);
  if (event_object && cb_dict[event_object.type]) {
    return async (extra_flag) =>
      await cb_dict[event_object.type](
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
