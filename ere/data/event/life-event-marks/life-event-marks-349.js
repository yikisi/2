const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class BryneLifeMarks extends LifeEventMarks {
  funds;

  constructor() {
    super(349);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = BryneLifeMarks;
