const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class RiceEduMarks extends EduEventMarks {
  // 熬夜
  stay;
  // 赛后热恋事件
  love;

  // 育成 - 随机事件
  // 名指导
  teach;
  // 舞蹈训练
  dance;
  // 粉丝来信
  letter;

  // 称号检查 - 重赏23战以上
  g3_count;

  constructor() {
    super(30);
    EduEventMarks.register_marks(this);
  }
}

module.exports = RiceEduMarks;
