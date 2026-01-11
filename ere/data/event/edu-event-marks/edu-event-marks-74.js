const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class BrightEduMarks extends EduEventMarks {
  // 主线计数
  main;
  small_party;
  all_along;
  miss_tram;
  dear_sister;
  the_fruit;
  where_is_time;
  sleep;
  dear_elder_sister;

  constructor() {
    super(74);
    EduEventMarks.register_marks(this);
  }
}

module.exports = BrightEduMarks;
