const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class BelieveEduMarks extends EduEventMarks {
  // 成就检查 - 经典年人马纪念4马身大胜
  goal;

  constructor() {
    super(91);
    EduEventMarks.register_marks(this);
  }
}

module.exports = BelieveEduMarks;
