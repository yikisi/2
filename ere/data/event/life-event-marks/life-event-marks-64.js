const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class PamaLifeMarks extends LifeEventMarks {
  love_24;
  love_39;
  love_rooftop;

  constructor() {
    super(64);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = PamaLifeMarks;
