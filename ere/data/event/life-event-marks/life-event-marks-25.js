const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class CoffeeLifeMarks extends LifeEventMarks {
  // 请求释放失败次数
  ask_release_reject;

  constructor() {
    super(25);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = CoffeeLifeMarks;
