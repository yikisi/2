const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class HaiseikoEduMarks extends EduEventMarks {
  // 称号检查 - 获得声望
  fame;

  constructor() {
    super(348);
    EduEventMarks.register_marks(this);
  }
}

module.exports = HaiseikoEduMarks;
