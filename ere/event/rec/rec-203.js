/**
 * @file 小小蚕茧 - 招募
 *
 * @author 无名黑奴（临时）
 */
const { set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  // eslint-disable-next-line no-unused-vars
  async recruit(stage, event_object) {
    set('cflag:203:招募状态', recruit_flags.yes);
    await this.recruit_end();
  }
};
