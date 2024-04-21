const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TachyonEduMarks extends EduEventMarks {
  // 日常部分
  // 闲聊 - 喊着玩
  talk;
  // 什么药·红茶？
  black_tea;
  // 什么饮料
  drink;
  // 中庭 - 枯树洞 - 黑影
  evil;
  // 天台 - PlanA
  roof_a;
  // 天台 - PlanB
  roof_b;
  // 河边 - -智+速
  river;
  // 车站 - 约会 - 拆台
  station;

  // 育成部分
  // 实验的开始（第一天）
  beginning;
  // Plan B
  plan_b;
  //神明捕捉行动
  deities_possible;
  // 实验的报酬
  explore_reward;
  // 实验的报酬(后背位)
  explore_reward1;
  // 实验的报酬(后背位肛交)
  explore_reward2;
  // 温泉旅行券
  hot_spring;
  // 温泉旅行
  hot_spring_event;
  //重新开始育成
  restart;
  //重新开始育成
  reforger;
  //BE 魔女之药
  witch;

  // 成就检查 - 无败希望锦标、弥生赏、皋月赏
  title_check;

  constructor() {
    super(32);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TachyonEduMarks;
