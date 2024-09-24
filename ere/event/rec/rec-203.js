/**
 * @file 小小蚕茧 - 招募
 *
 * @author 无名黑奴（临时）
 */
const { set } = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  async run() {
    set('cflag:203:招募状态', recruit_flags.yes);
  },
};
