const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class HelloLifeMarks extends LifeEventMarks {
  constructor() {
    super(308);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = HelloLifeMarks;
