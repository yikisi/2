const EduEventMarks = require('#/data/event/edu-event-marks');

class GoldShipEventMarks extends EduEventMarks {
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
  // 称号检查 - 六次G1胜利（包括皋月赏、菊花赏和宝冢纪念）
  title_check;
  // 称号检查 - 两次凯旋门参战
  title_check2;

  constructor() {
    super(7);
    EduEventMarks.register_marks(this);
  }
}

module.exports = GoldShipEventMarks;
