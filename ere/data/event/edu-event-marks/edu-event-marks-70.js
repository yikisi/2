const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SiriusEduMarks extends EduEventMarks {
  // 成就检查 - 3马身赢得日本德比
  title_check;

  constructor() {
    super(70);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SiriusEduMarks;
