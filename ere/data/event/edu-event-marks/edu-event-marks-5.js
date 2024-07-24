const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FujikiEduMarks extends EduEventMarks {
  // 出道战8马身大胜
  title_check;
  // 路线
  program;

  constructor() {
    super(5);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FujikiEduMarks;
