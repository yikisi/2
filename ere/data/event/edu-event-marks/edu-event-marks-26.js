const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class BourbonEduMarks extends EduEventMarks {
  // 称号检查 - 无败到日本德比
  goal_check;

  constructor() {
    super(26);
    EduEventMarks.register_marks(this);
  }
}

module.exports = BourbonEduMarks;
