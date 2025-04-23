const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class SasamiLifeMarks extends LifeEventMarks {
  buff;

  constructor() {
    super(305);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = SasamiLifeMarks;
