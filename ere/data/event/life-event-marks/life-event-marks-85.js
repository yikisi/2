const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class RubyLifeMarks extends LifeEventMarks {
  love_75;
  love_90;
  love_100;
  foot_job;
  sex_mark;

  constructor() {
    super(85);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = RubyLifeMarks;
