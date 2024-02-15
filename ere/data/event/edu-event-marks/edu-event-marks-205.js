const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TreveEduMarks extends EduEventMarks {
  // 买茶叶
  tea;
  // 目标：资深年日本杯
  japa_cup;

  constructor() {
    super(205);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TreveEduMarks;
