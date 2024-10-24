const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class CityEduMarks extends EduEventMarks {
  // 成就检查 - 绝好调干劲完赛
  title_check;

  constructor() {
    super(40);
    EduEventMarks.register_marks(this);
  }
}

module.exports = CityEduMarks;
