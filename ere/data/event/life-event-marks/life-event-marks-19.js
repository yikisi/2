const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class AgLifeMarks extends LifeEventMarks {
  // 闪现，应援活动！
  shine;
  // 在宇宙中互相理解
  univ;
  // 推
  oshi;
  // 二次热恋升级
  again_74;
  // 二次佳偶升级
  again_89;

  constructor() {
    super(19);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = AgLifeMarks;
