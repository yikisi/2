const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class MaEduMarks extends EduEventMarks {
  //丸善斯基初次登场
  beginning;
  // 街头的潮流推手
  current_trend;
  // 丸善斯基，畅谈「喜欢」
  favourite_things;
  // 开超跑兜风
  feel_speed;
  // 又酷又炫的必胜法！
  beautiful_winner;
  // 姐姐的烦恼
  sister_annoyance;
  //少女的忧郁
  girls_blue;
  // 与丸善斯基于黄昏之时在海边观看日落
  find_love;
  //离别(粉丝袭击)
  crazy_fan;
  //金
  golden;
  //木
  wood;
  //水
  water;
  //火
  fire;
  //土
  soil;
  //GOOD END 温柔的世界
  gentle_wind;
  //NORMAL END 梦的远方
  girls_dream;

  // 迷茫
  mygo;

  constructor() {
    super(4);
    EduEventMarks.register_marks(this);
    console.log(this.beginning);
  }
}

module.exports = MaEduMarks;
