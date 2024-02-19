const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TasteLifeMarks extends LifeEventMarks {
  who_am_i;

  constructor() {
    super(302);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TasteLifeMarks;
