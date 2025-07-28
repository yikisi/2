const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class PandoraEduMarks extends EduEventMarks {
  // 所有比赛极佳干劲完赛
  title_check;

  constructor() {
    super(113);
    EduEventMarks.register_marks(this);
  }
}

module.exports = PandoraEduMarks;
