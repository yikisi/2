const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SuzukaEduMarks extends EduEventMarks {
  // 最大逃马连胜
  max_wins;
  // 逃马连胜
  wins;

  constructor() {
    super(2);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SuzukaEduMarks;
