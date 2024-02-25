const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TreveLifeMarks extends LifeEventMarks {
  slavery;

  constructor() {
    super(205);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TreveLifeMarks;
