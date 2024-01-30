const EduEventMarks = require('#/data/event/edu-event-marks');

class CrownEventMarks extends EduEventMarks {
  // 称号检查 - 弥生赏前落败
  title_check;

  constructor() {
    super(88);
    EduEventMarks.register_marks(this);
  }
}

module.exports = CrownEventMarks;
