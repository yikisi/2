const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class DaiwaEduMarks extends EduEventMarks {
  // 称号检查 - 有比赛二着以外
  rank_check;
  // 称号检查 - 重赏比赛次数
  goal_check;

  constructor() {
    super(9);
    EduEventMarks.register_marks(this);
  }
}

module.exports = DaiwaEduMarks;
