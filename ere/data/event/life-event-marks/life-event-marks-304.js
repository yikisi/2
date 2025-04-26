const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class AoiLifeMarks extends LifeEventMarks {
  buff;

  constructor() {
    super(304);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = AoiLifeMarks;
