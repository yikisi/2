const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');

const handlers = {};

/** @param {{chara_id}} extra_flag */
handlers[check_stages.mec_callname_customize] = (extra_flag) => {
  era.set(
    `callname:${extra_flag.chara_id}:33`,
    era.get('cflag:33:性别') - 1 ? '姐姐' : '哥哥',
  );
  if (!era.get(`cflag:${extra_flag.chara_id}:父方角色`)) {
    era.set(`callname:${extra_flag.chara_id}:0`, '哥哥');
  } else if (!era.get(`cflag:${extra_flag.chara_id}:母方角色`)) {
    era.set(`callname:${extra_flag.chara_id}:0`, '姐姐');
  } else {
    throw new Error();
  }
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
