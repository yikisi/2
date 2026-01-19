const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class RyokaLifeMarks extends LifeEventMarks {
  constructor() {
    super(344);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = RyokaLifeMarks;
