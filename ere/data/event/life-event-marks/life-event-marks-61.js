const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class HaloLifeMarks extends LifeEventMarks {
  // 一流的博爱
  fraternity;

  constructor() {
    super(61);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = HaloLifeMarks;
