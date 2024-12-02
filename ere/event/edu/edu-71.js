/**
 * @file 目白阿尔丹 - 育成
 * 只进行成就判定，无文本
 */
const CustomizedEdu = require('#/event/edu/edu-common');

const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');

module.exports = class extends CustomizedEdu {
  async train_fail(ardan, me, callname, hook, extra_flag) {
    const event_marks = new ArdanEduMarks();
    event_marks.train_fail++;
    return await super.train_fail(ardan, me, callname, hook, extra_flag);
  }
};
