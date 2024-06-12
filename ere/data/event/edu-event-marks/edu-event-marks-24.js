const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class MayaEduMarks extends EduEventMarks {
  st_check;
  dokidoki_live;
  excited_live;

  constructor() {
    super(24);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MayaEduMarks;
