const { set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    // CFLAGNAME:66 = 招募状态
    set('cflag:203:66', recruit_flags.yes);
    await this.recruit_end();
  }
};
