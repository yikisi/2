const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SundayEduMarks extends EduEventMarks {
  // 成就判定 - 未以极佳干劲完赛的次数
  mot_check;

  constructor() {
    super(55);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SundayEduMarks;
