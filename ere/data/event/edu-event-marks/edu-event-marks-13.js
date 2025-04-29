const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class McqueenEduMarks extends EduEventMarks {
  // 爱慕锁
  love_89;

  constructor() {
    super(13);
    EduEventMarks.register_marks(this);
  }
}

module.exports = McqueenEduMarks;
