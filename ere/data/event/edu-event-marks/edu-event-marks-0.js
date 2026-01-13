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
  // 「」心「」体
  we_are_one;
  // 欢乐周末开始啦！
  nice_weekend;
  // 假面（？）骑士！
  kamen_rider;
  // 孕袋未怀孕时间
  not_pregnant;
  // 孕袋惩戒次数
  p_slave_punish;
  // 樱花的遗憾
  pity;
  // 孕袋父子丼
  orgy;
  // 商店街大甩卖
  big_sale;
  // 路见不平
  justice;
  // 成就：调教大师系列
  a_s_prg;
  a_s_mon;
  a_s_frn;
  a_s_ass;

  constructor() {
    super(0);
    EduEventMarks.register_marks(this);
  }
}

module.exports = MyEduMarks;
