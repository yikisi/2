const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class ArdanEduMarks extends EduEventMarks {
  // 成就判定 - 未以极佳干劲完赛的次数
  motivation_count;
  // 成就判定 - 训练失败次数
  train_fail;
  // 路线分歧 - 第二年天秋or菊花赏
  kiku_sho;

  // 生病
  sick;

  constructor() {
    super(71);
    EduEventMarks.register_marks(this);
  }
}

module.exports = ArdanEduMarks;
