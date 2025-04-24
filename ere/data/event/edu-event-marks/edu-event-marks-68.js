const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class KitaEduMarks extends EduEventMarks {
  // 北部玄驹登场
  beginning;
  // 紧急开店 · 小北按摩！
  kitasan_touch;
  // 没有恶意的小小恶作剧
  classical_valentine;
  // 奖励
  senior_valentine;
  // 归乡的北部玄驹
  crazy_fan;
  // 成就检查 - G1胜利次数
  g1_count;

  constructor() {
    super(68);
    EduEventMarks.register_marks(this);
  }
}

module.exports = KitaEduMarks;
