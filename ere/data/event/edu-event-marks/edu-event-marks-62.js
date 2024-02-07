const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TanhuizaEduMarks extends EduEventMarks {
  // 育成目标 - 新秀年十二月第四周G1以上比赛入着
  aim_goal;
  // 成就判定 - G1比赛
  g1_goal;
  // 成就判定 - 长度2500以上G3比赛
  long_count;
  // 路线分歧 - 第三年日本杯避战
  abandon_japa_cup;

  constructor() {
    super(62);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TanhuizaEduMarks;
