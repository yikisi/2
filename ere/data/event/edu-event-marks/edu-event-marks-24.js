const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class MayaEduMarks extends EduEventMarks {
  st_check;

  constructor() {
    super(24);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MayaEduMarks;
