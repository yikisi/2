const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class GoldShipEduMarks extends EduEventMarks {
  // 主角的红色！
  heroine_red;
  // 阿船流约会
  golden_ship_date;
  // 阿船的突然追忆过去篇！
  sudden_look_back;
  // 来认真一决胜负！
  shoubu;
  // 关键词
  keywords;
  // 称号检查 - 两次凯旋门参战
  title_check;
  // 拔萝卜之鬼
  carrot;

  // 小金船号
  hoverboard;

  constructor() {
    super(7);
    EduEventMarks.register_marks(this);
  }
}

module.exports = GoldShipEduMarks;
