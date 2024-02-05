const check_stages = require('#/data/event/check-stages');

const handlers = {};

handlers[check_stages.mec_foreign_debuff] = () => {};

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
