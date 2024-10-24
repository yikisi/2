const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SakuraEduMarks extends EduEventMarks {
  // 路线分歧 - 英里（安田）中距离（宝冢）
  yasu_route;

  constructor() {
    super(69);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SakuraEduMarks;
