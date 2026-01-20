const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class DarleyLifeMarks extends LifeEventMarks {
  // 爱慕事件标记
  love;

  constructor() {
    super(340);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = DarleyLifeMarks;
