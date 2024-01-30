const EduEventMarks = require('#/data/event/edu-event-marks');

class BourbonEventMarks extends EduEventMarks {
  // 称号检查 - 无败到日本德比
  goal_check;

  constructor() {
    super(26);
    EduEventMarks.register_marks(this);
  }
}

module.exports = BourbonEventMarks;
