const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class GlasseEduMarks extends EduEventMarks {
  // 未招募时的debuff
  debuff;

  constructor() {
    super(202);
    EduEventMarks.register_marks(this);
  }
}

module.exports = GlasseEduMarks;
