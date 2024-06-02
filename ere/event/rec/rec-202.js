const { set } = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 苦涩糖衣 - 招募
 *
 * @author 黑奴队长（临时）
 */
module.exports = {
  async run() {
    set('cflag:202:招募状态', recruit_flags.yes);
  },
};
