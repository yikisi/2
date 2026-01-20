const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class RikoLifeMarks extends LifeEventMarks {
  constructor() {
    super(306);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = RikoLifeMarks;
