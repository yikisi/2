const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FlashEduMarks extends EduEventMarks {
  // 和中山的追加训练
  train_with_festa;
  // 漆黑珍宝
  black_treasure;
  // 专属表白事件开关 - 完成所有育成分支
  finish;

  constructor() {
    super(37);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FlashEduMarks;
