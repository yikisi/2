const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class LaurelEduMarks extends EduEventMarks {
  // 育成目标 - 经典年五月前G3以上前三
  goal_1;
  // 育成目标 - 经典年5-11 G3以上前三
  goal_2;

  constructor() {
    super(76);
    EduEventMarks.register_marks(this);
  }
}

module.exports = LaurelEduMarks;
