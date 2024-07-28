const { set } = require('#/era-electron');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 大树快车 - 招募
 */
module.exports = {
  async run() {
    new TokinoLifeMarks().shadow = 0;
    set('cflag:10:招募状态', recruit_flags.yes);
  },
};
