const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class DonnaEduMarks extends EduEventMarks {
  // 称号检查 - 橡树赛5马身
  title_check;

  constructor() {
    super(116);
    EduEventMarks.register_marks(this);
  }
}

module.exports = DonnaEduMarks;
