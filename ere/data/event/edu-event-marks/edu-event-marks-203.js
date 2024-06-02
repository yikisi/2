const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class CoconEduMarks extends EduEventMarks {
  // 未招募时的debuff
  debuff;

  constructor() {
    super(203);
    EduEventMarks.register_marks(this);
  }
}

module.exports = CoconEduMarks;
