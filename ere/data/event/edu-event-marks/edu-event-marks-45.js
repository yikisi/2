const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class CreekEduMarks extends EduEventMarks {
  // 称号检查 - 2400m以上重赏获胜次数
  title_check;

  constructor() {
    super(45);
    EduEventMarks.register_marks(this);
  }
}

module.exports = CreekEduMarks;
