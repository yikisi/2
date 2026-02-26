const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class EyeEduMarks extends EduEventMarks {
  // 称号检查 - 极佳干劲出赛
  title_check;

  constructor() {
    super(129);
    EduEventMarks.register_marks(this);
  }
}

module.exports = EyeEduMarks;
