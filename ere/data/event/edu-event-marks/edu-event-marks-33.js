const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class VegaEduMarks extends EduEventMarks {
  // 观测彗星
  meteor;

  constructor() {
    super(33);
    EduEventMarks.register_marks(this);
  }
}

module.exports = VegaEduMarks;
