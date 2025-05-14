const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class McqueenLifeMarks extends LifeEventMarks {
  love_20;
  love_40;

  constructor() {
    super(13);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = McqueenLifeMarks;
