const { set } = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 小小蚕茧 - 招募
 *
 * @author 黑奴零号（临时）
 */
module.exports = {
  async run() {
    set('cflag:203:招募状态', recruit_flags.yes);
  },
};
