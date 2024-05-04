const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class AcuteEduMarks extends EduEventMarks {
  // 日常
  // 中庭 - 约会 - 接吻
  kiss;
  // 商店街 - 街机厅 - 打拳机
  boxing;

  constructor() {
    super(100);
    EduEventMarks.register_marks(this);
  }
}

module.exports = AcuteEduMarks;
