const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class VodkaEduMarks extends EduEventMarks {
  // 称号检查 - G1胜利次数
  title_check;

  constructor() {
    super(8);
    EduEventMarks.register_marks(this);
  }
}

module.exports = VodkaEduMarks;
