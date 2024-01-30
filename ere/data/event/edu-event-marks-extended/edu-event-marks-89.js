const EduEventMarks = require('#/data/event/edu-event-marks');

class GrandEventMarks extends EduEventMarks {
  // 育成目标 - 经典年十二月第三周G3以上三着以内次数
  goal;

  constructor() {
    super(89);
    EduEventMarks.register_marks(this);
  }
}

module.exports = GrandEventMarks;
