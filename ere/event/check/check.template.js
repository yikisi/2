const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');

const check_stages = require('#/data/event/check-stages');

const handlers = {};

/**
 * @param {number} stage_id
 */
module.exports = (stage_id) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  handlers[stage_id]();
};
