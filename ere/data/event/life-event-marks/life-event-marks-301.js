const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TokinoLifeMarks extends LifeEventMarks {
  who_am_i;
  shadow;

  constructor() {
    super(301);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TokinoLifeMarks;
