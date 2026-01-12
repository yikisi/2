const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class McqueenLifeMarks extends LifeEventMarks {
  love_20;
  love_40;
  reject_74;

  // 存档首次性爱
  prepare_virgin;
  finger_fuck;

  constructor() {
    super(13);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = McqueenLifeMarks;
