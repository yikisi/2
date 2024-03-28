const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const recruit_flags = require('#/data/event/recruit-flags');

const handlers = {};

handlers[check_stages.mec_callname_customize] = () => {
  if (era.get('cflag:30:招募状态') !== recruit_flags.yes) {
    throw new Error();
  }
  era.set(
    'callname:30:0',
    get_chara_talk(0).sex_code - 1 ? '姐姐大人' : '哥哥大人',
  );
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
