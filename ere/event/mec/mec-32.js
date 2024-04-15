const { set } = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');

const handlers = {};

handlers[check_stages.mec_callname_customize] = () => {
  set('callname:32:0', '豚鼠君');
};

/**
 * @param {number} stage
 * @param {Record<string,*>} extra_flag
 */
module.exports = (stage, extra_flag) => {
  if (!handlers[stage]) {
    throw new Error();
  }
  return handlers[stage](extra_flag);
};
