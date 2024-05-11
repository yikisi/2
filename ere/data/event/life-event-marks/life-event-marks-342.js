const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class ByerleyLifeMarks extends LifeEventMarks {
  // 光环效果
  buff;

  constructor() {
    super(342);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = ByerleyLifeMarks;
