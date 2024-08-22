const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class AcuteLifeMarks extends LifeEventMarks {
  // 膝枕
  leg;

  constructor() {
    super(100);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = AcuteLifeMarks;
