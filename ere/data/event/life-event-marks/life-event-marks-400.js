const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class SSLifeMarks extends LifeEventMarks {
  love_74;

  constructor() {
    super(400);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = SSLifeMarks;
