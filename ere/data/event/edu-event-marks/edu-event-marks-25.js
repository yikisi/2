const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class CoffeeEduMarks extends EduEventMarks {
  // 只属于我们的口味
  our_taste;

  constructor() {
    super(25);
    EduEventMarks.register_marks(this);
  }
}

module.exports = CoffeeEduMarks;
