const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class NTREduMarks extends EduEventMarks {
  // 称号检查 - 2500m以上G1胜利次数
  title_check;

  constructor() {
    super(77);
    EduEventMarks.register_marks(this);
  }
}

module.exports = NTREduMarks;
