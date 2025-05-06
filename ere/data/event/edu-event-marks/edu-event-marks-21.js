const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TamaEduMarks extends EduEventMarks {
  // 资深年3月前重赏4回3着以内
  aim_check;
  // 状态标记
  status;

  constructor() {
    super(21);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TamaEduMarks;
