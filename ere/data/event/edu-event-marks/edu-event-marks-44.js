const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SweepEduMarks extends EduEventMarks {
  // 约定
  agreement;

  constructor() {
    super(44);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SweepEduMarks;
