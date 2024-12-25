const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class MyEduMarks extends EduEventMarks {
  // 三女神雕像下的许愿池
  god;
  // 废旧理科教室探险
  experiment;
  // 习惯成自然
  custom;
  // 随风飘扬的海报
  trainer_race;
  // 破产
  bankruptcy;
  // 拒绝求爱
  reject;
  // 加班
  work_over;
  // 生病
  sick;
  // 钓鱼的心得
  fishing;
  // 可笑しい日（奇怪的一天）
  strange_day;
  // 卖奶
  sell_milk;
  // 卖奶的买家
  milk_buyer;

  constructor() {
    super(0);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MyEduMarks;
