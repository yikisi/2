const check_stages = require('#/data/event/check-stages');

const handlers = {};

handlers[check_stages.prison] = () => false;

handlers[check_stages.rape_in_sleeping] = () => false;

handlers[check_stages.want_make_love] = () => false;

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
