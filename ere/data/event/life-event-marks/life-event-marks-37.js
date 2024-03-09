const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class FlashLifeMarks extends LifeEventMarks {
  // 和醒目飞鹰关于抽奖的对话
  gacha_talk;
  // 再次触发表白事件
  love_again;

  constructor() {
    super(37);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = FlashLifeMarks;
