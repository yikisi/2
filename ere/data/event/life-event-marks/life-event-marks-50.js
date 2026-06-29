const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TaishinLifeMarks extends LifeEventMarks {
  after_recruit;

  constructor() {
    super(50);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TaishinLifeMarks;
