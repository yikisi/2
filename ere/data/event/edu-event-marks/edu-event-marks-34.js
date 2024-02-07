const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class InariEduMarks extends EduEventMarks {
  // 称号检查 - 草地G1胜利
  title_check0;
  // 称号检查 - 泥地G1胜利
  title_check1;

  constructor() {
    super(34);
    EduEventMarks.register_marks(this);
  }
}

module.exports = InariEduMarks;
