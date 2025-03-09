const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class CoffeeEduMarks extends EduEventMarks {
  // 只属于我们的口味
  our_taste;
  // 出走日本德比
  toky_yus;
  // 其他结局
  horse;
  // 怕黑
  scared;

  constructor() {
    super(25);
    EduEventMarks.register_marks(this);
  }
}

module.exports = CoffeeEduMarks;
