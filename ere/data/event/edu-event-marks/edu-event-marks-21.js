const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TamaEduMarks extends EduEventMarks {
  // 经典年3月1周前OP以上胜场
  op_count;
  // 资深年前G3以上胜场
  g3_count;
  // 状态标记
  lightning;
  // 斯巴达式 or 马娘优先
  heal;
  // 紧缚的心
  chained_heart;

  constructor() {
    super(21);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TamaEduMarks;
