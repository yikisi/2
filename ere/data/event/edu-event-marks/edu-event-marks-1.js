const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SpeEduMarks extends EduEventMarks {
  // 日本德比第一人气五马身大胜
  title_check;

  constructor() {
    super(1);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SpeEduMarks;
