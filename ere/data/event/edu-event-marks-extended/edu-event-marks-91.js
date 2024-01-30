const EduEventMarks = require('#/data/event/edu-event-marks');

class ViblosEventMarks extends EduEventMarks {
  // 成就检查 - 第一人气G3以上6胜以上
  goal;

  constructor() {
    super(91);
    EduEventMarks.register_marks(this);
  }
}

module.exports = ViblosEventMarks;
