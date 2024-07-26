const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class MeekEduMarks extends EduEventMarks {
  // 未招募时的debuff
  debuff;
  // 全能
  all_round;

  constructor() {
    super(201);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MeekEduMarks;
