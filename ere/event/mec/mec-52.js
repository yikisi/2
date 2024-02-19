const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');

const handlers = {};

handlers[check_stages.mec_callname_customize] = () => {
  era.set('callname:52:0', '训练员');
};

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
