const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class MaEduMarks extends EduEventMarks {
  //丸善斯基初次登场
  after_recruit;
  beginning;
  // 街头的潮流推手
  current_trend;
  // 丸善斯基，畅谈「喜欢」
  favourite_things;
  // 开超跑兜风
  feel_speed;
  // 又酷又炫的必胜法！
  beautiful_winner;
  // 丸善斯基的一天
  memory;
  // 姐姐的烦恼
  sister_annoyance;
  //少女的忧郁
  girls_blue;
  // 与丸善斯基于黄昏之时在海边观看日落
  find_love;
  // 焦鹿梦
  dream;
  //木
  wind;
  // BAD END 1 木旺土溃
  Self_contempt;
  // BAD END 2 丸善斯基的信
  broken_tears;
  // NORMAL END 1 平淡的每一天
  happiness_day;
  // NORMAL END 2 梦的远方
  girls_dream;
  //TURE END 温柔的世界
  gentle_wind;
  // GOOD END 误入乐园的旅人
  fall_heaven;
  // TE导航
  true_end_notify;
  // GE导航
  good_end_notify;
  // 迷茫
  mygo;
  // 丸善斯基老师，请指导我！
  teacher_sister;

  constructor() {
    super(4);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MaEduMarks;
