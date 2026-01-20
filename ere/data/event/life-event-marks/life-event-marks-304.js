const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class AoiLifeMarks extends LifeEventMarks {
  constructor() {
    super(304);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = AoiLifeMarks;
