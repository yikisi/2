const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class PamaLifeMarks extends LifeEventMarks {
  // 依存心
  half_life;

  constructor() {
    super(64);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = PamaLifeMarks;
