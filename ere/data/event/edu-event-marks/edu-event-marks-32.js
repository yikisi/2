const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TachyonEduMarks extends EduEventMarks {
  // 日常部分
  // 闲聊 - 喊着玩
  talk;
  // 什么药 · 红茶？
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
  // 神社 - 神明捕捉行动
  church;
  // 车站 - 约会 - 拆台
  station;

  // 育成部分
  // 暂停训练
  train_stop;
  // 助纣为虐
  help_tyr;
  // 失败次数
  train_fail;
  // 实验的开始（第一天）
  beginning;
  // Plan B
  plan_b;
  // 临时训练锁
  glass_leg;
  // 聊聊天春
  tenn_spr;
  // 战胜茶座
  beat_c;
  // 赛后sex
  race_sex;
  // 圣诞节
  chris;

  // 马娘的极限
  uma_limit;
  // 训练加成
  limited;

  // 成就检查 - 无败希望锦标、弥生赏、皋月赏
  title_check;

  constructor() {
    super(32);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TachyonEduMarks;
