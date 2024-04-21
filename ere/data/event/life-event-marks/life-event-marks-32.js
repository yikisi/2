const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TachyonLifeMarks extends LifeEventMarks {
  // 初次踏入小卖部
  first;
  // 做饭次数
  cook;
  // 上次做饭时间
  l_cook;
  // 闲聊次数
  talk;
  // 反抗3
  hate;
  // 暧昧
  ambiguous;
  // 情人节事件标记 - 表白用
  choco;

  constructor() {
    super(32);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TachyonLifeMarks;
