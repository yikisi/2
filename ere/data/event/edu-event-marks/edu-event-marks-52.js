const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class UraraEduMarks extends EduEventMarks {
  // 循环
  loop;
  // 粉丝数
  fans;

  constructor() {
    super(52);
    EduEventMarks.register_marks(this);
  }
}

module.exports = UraraEduMarks;
