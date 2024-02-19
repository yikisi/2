const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class DuraEduMarks extends EduEventMarks {
  // 称号检查 - G1胜利数
  title_check;

  constructor() {
    super(108);
    EduEventMarks.register_marks(this);
  }
}

module.exports = DuraEduMarks;
