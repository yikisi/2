const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class UraraLifeMarks extends LifeEventMarks {
  // 是否是招募过后的二次招募
  rec;
  // 爱欲事件
  fuck_buddy;
  // 是否是暂拒之后的主动表白
  active_74;
  // 热恋事件
  girl_friend;
  // 是否是暂拒之后的主动求婚
  active_89;
  // 佳偶事件
  infidelity;
  // 独占力
  want_you;

  constructor() {
    super(52);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = UraraLifeMarks;
