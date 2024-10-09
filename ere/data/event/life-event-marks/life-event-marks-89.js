const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class GrandLifeMarks extends LifeEventMarks {
  // 触发过撬锁失败/成功后被发现的事件
  b_find_escape;
  // 虚与委蛇次数
  b_flatter;
  // 请求释放
  b_ask_release;
  // 反抗次数
  b_battle;
  // 偷袭失败
  b_strike;
  // 虚与委蛇5
  b_battle_fail;

  constructor() {
    super(89);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = GrandLifeMarks;
