const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class GrandLifeMarks extends LifeEventMarks {
  // 触发过撬锁失败/成功后被发现的事件
  b_find_escape;
  // 触发过虚与委蛇4
  b_flatter_4;

  constructor() {
    super(89);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = GrandLifeMarks;
