const EduEventMarks = require('#/data/event/edu-event-marks');

class UraraEventMarks extends EduEventMarks {
  // 循环
  loop;
  // 粉丝数
  fans;

  constructor() {
    super(52);
    EduEventMarks.register_marks(this);
  }
}

module.exports = UraraEventMarks;
