const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class VistaEduMarks extends EduEventMarks {
  // 所有比赛第一人气完赛
  t_check;

  constructor() {
    super(114);
    EduEventMarks.register_marks(this);
  }
}

module.exports = VistaEduMarks;
