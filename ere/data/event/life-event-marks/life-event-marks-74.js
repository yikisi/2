const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class BrightLifeMarks extends LifeEventMarks {
  know_us;

  constructor() {
    super(74);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = BrightLifeMarks;
