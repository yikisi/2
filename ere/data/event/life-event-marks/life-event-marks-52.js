const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class UraraLifeMarks extends LifeEventMarks {
  // 是否是招募过后的二次招募
  rec;
  // 是否是暂拒之后的主动表白
  active_74;

  constructor() {
    super(52);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = UraraLifeMarks;
