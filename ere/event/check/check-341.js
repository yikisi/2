const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');
const recruit_flags = require('#/data/event/recruit-flags');

const handlers = {};

handlers[check_stages.prison] = handlers[check_stages.rape_in_sleeping] =
  () => {
    if (era.get('cflag:341:招募状态') !== recruit_flags.yes) {
      return false;
    }
    throw new Error();
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
