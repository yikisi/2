const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class MayaLifeMarks extends LifeEventMarks {
  // 爱慕24
  _24;

  constructor() {
    super(24);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = MayaLifeMarks;
