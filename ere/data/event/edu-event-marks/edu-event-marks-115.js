const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class OrfevreEduMarks extends EduEventMarks {
  // 称号检查 - 资深年有马8马身大胜
  title_check;

  constructor() {
    super(115);
    EduEventMarks.register_marks(this);
  }
}

module.exports = OrfevreEduMarks;
