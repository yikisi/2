const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class LightLifeMarks extends LifeEventMarks {
  constructor() {
    super(345);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = LightLifeMarks;
