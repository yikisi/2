const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TurboEduMarks extends EduEventMarks {
  // 目标检查 - 经典年10月到资深年5月2周三次重赏三着以内
  title_check;

  constructor() {
    super(66);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TurboEduMarks;
