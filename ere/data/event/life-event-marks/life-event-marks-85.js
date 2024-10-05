const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class RubyLifeMarks extends LifeEventMarks {
  // 初招募
  after_recruit;

  love_75;
  love_90;
  love_100;
  shame;
  foot_job;
  sex_mark;

  constructor() {
    super(85);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = RubyLifeMarks;
