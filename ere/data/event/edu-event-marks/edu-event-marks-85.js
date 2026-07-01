const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class RubyEduMarks extends EduEventMarks {
  // 车站 - 逛商场
  station;

  rest_day;
  wait_station;
  shopping_together;

  constructor() {
    super(85);
    EduEventMarks.register_marks(this);
  }
}

module.exports = RubyEduMarks;
