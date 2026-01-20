const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class EtsukoLifeMarks extends LifeEventMarks {
  rape;

  constructor() {
    super(303);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = EtsukoLifeMarks;
