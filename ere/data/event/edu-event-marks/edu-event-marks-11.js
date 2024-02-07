const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class GrassWonderEduMarks extends EduEventMarks {
  // 成就判定 - 在较佳干劲以下获胜的目标赛事
  aim_count;

  constructor() {
    super(11);
    EduEventMarks.register_marks(this);
  }
}

module.exports = GrassWonderEduMarks;
