const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class MayLifeMarks extends LifeEventMarks {
  // 知道佐岳的身份
  who_am_i;

  constructor() {
    super(343);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = MayLifeMarks;
