const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class LoveEduMarks extends EduEventMarks {
  // 称号检查 - 50爱慕以上赢橡树赛和伊丽莎白赏
  title_check;

  constructor() {
    super(132);
    EduEventMarks.register_marks(this);
  }
}

module.exports = LoveEduMarks;
