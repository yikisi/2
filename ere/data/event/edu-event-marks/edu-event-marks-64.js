const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class PamaEduMarks extends EduEventMarks {
  // 育成目标检查 - 经典年 6 月 2 周前重赏优胜次数
  aim_check;

  // 蜗牛
  snails;
  // 电影院口交
  movie_job;

  // 和你一同逃去天涯海角
  escape;
  // 依存心事件触发数
  only_you;

  // 全育成第一次调教指令
  kiss;
  lure;
  pet_breast;
  prepare_anal;
  cunnilingus;
  ask_blow_job;
  sixty_nine;
  ask_foot_job;
  missionary;
  doggy_style;
  sitting;
  hug_standing;
  ask_cowgirl;
  hit_anal;

  // 跑车奖励
  sports_car;

  // 触发事件
  // 即使被大雨淋湿
  rain;
  // 午睡
  nap;
  // 休闲时光
  leisure;
  // 电影院怪谈
  cinema;
  // 美食时间
  delicious;
  // 休息……？
  rest;
  // 短暂旅程
  travel;
  // 一场小故事的开始
  joke;
  // 过度关心啦！
  concern;
  // 甜品……好像不对？
  dessert;
  // 派对时间
  party;

  // 随机事件
  // 错过午休时间
  lunch_break;
  // 距离感的天才
  dis_talent;
  // 终极选择！
  choice;
  // 向前迈出的一步
  a_step;

  constructor() {
    super(64);
    EduEventMarks.register_marks(this);
  }
}

module.exports = PamaEduMarks;
