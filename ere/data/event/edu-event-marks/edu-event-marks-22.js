const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FineEduMarks extends EduEventMarks {
  // 第一人气无败秋华赏、伊丽莎白女王杯、有马纪念，且秋华赏3.5马身以上获胜
  title_check;

  constructor() {
    super(22);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FineEduMarks;
