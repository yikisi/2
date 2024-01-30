const EduEventMarks = require('#/data/event/edu-event-marks');

class MayaEventMarks extends EduEventMarks {
  // 逃马G1胜利次数
  st_check0;
  // 先马G1胜利次数
  st_check1;
  // 差马G1胜利次数
  st_check2;
  // 追马G1胜利次数
  st_check3;

  constructor() {
    super(24);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MayaEventMarks;
