const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SkyEduMarks extends EduEventMarks {
  // 容光焕发
  radiant;
  // 自由散漫
  easy_go;
  // 无形的枷锁
  jess;

  // 前回行动
  action;

  constructor() {
    super(20);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SkyEduMarks;
