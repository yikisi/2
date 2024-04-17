const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TachyonLifeMarks extends LifeEventMarks {
  // 初次踏入小卖部
  first;

  constructor() {
    super(32);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TachyonLifeMarks;
