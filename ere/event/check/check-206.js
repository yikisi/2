const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');
const recruit_flags = require('#/data/event/recruit-flags');

const handlers = {};

handlers[check_stages.prison] = handlers[check_stages.rape_in_sleeping] =
  () => {
    if (era.get('cflag:206:招募状态') !== recruit_flags.yes) {
      return false;
    }
    throw new Error();
  };

handlers[check_stages.next_week] = () => {
  if (era.get('cflag:206:随机招募') < 0 && era.get('flag:当前声望') >= 1000) {
    era.set('cflag:206:随机招募', 1);
    era.print(
      '据说有一名优秀的法国幼驹已经准备来到中央交流，也许可以在训练场遇到……',
    );
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
