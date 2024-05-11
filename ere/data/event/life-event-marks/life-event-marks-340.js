const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class DarleyLifeMarks extends LifeEventMarks {
  // 光环效果
  buff;

  constructor() {
    super(340);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = DarleyLifeMarks;
