/**
 * @file 中山庆典 - 育成
 * 只进行成就判定，无文本
 */
const CustomizedEdu = require('#/event/edu/edu-common');

const FestaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-49');

module.exports = class extends CustomizedEdu {
  static CHECK = false;

  async train_fail(festa, me, callname, hook, extra) {
    new FestaEduMarks().train_fail++;
    return await super.train_fail(festa, me, callname, hook, extra);
  }
};
