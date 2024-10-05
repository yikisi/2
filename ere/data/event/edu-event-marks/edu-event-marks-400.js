const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SSEduMarks extends EduEventMarks {
  // 初次磨合
  beginning;
  // 要来试试运气吗
  play_dice;
  // 茶座与猫
  enjoy_cat;
  // 咖啡的味道要怎么样比较好呢?
  sugar_or_milk;
  // 胜利的承诺 buff
  wins;

  constructor() {
    super(400);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SSEduMarks;
