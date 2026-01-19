const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class ByerleyLifeMarks extends LifeEventMarks {
  // 爱慕事件标记
  love;

  constructor() {
    super(342);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = ByerleyLifeMarks;
