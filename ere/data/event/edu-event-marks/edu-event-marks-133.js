const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class GenesisEduMarks extends EduEventMarks {
  title_check;

  constructor() {
    super(133);
    EduEventMarks.register_marks(this);
  }
}

module.exports = GenesisEduMarks;
