const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class NNEduMarks extends EduEventMarks {
  // 内恰小姐与辛苦的训练员
  hard_work_trainer;
  // 用草地棒球声援！
  grass_baseball;
  // 去看鱼吧
  see_fish;
  // 称号检查 - G1三着以内
  g1_count;

  constructor() {
    super(60);
    EduEventMarks.register_marks(this);
  }
}

module.exports = NNEduMarks;
