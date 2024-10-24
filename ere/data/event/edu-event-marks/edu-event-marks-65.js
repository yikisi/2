const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class HeliosEduMarks extends EduEventMarks {
  // 成就检查 - 绝好调干劲完赛
  mot_check;

  constructor() {
    super(65);
    EduEventMarks.register_marks(this);
  }
}

module.exports = HeliosEduMarks;
