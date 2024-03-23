const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class UraraEduMarks extends EduEventMarks {
  // 粉丝数
  fans;
  // 神社 - 塞翁失马
  church;
  // 商店街 - 游戏厅 - 角落中的奇怪机器
  spe_mach;
  // 商店街 - 抽奖 - 特殊奖品
  spe_item;
  // 商店街 - 看电影 - 角落中的游戏？
  cor_game;
  // 车站 - 吃饭 - 隐藏菜单真美味呢！
  hid_menu;
  // 车站 - 逛商场 - 要试穿舞台装了哦！
  try_dress;
  // 中庭 - 枯树洞 - 是时光胶囊哦？
  time_cap;
  // 天台 - 朦胧的天台时间
  rof_time;
  // 训练室 - 休息 - 来睡觉吧！
  lets_slp;

  constructor() {
    super(52);
    EduEventMarks.register_marks(this);
  }
}

module.exports = UraraEduMarks;
