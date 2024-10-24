const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FestaEduMarks extends EduEventMarks {
  // 成就判定 - 训练失败次数
  train_fail;

  constructor() {
    super(49);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FestaEduMarks;
