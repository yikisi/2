const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SkyEduMarks extends EduEventMarks {
  // 容光焕发
  radiant;
  // 自由散漫
  easy_go;
  // 无形的枷锁
  jess;

  // 前回行动
  action;

  // 商店街 - 抽奖 - 特等奖
  o_s_reward;
  // 车站 - 约会
  o_s_dating;

  // 软坏 - 永恒的自由
  soft_be;

  ws_next_time;
  ws_hidden_menu;
  ws_punish;
  ws_party;
  ws_ramen;
  sword_vs_shield;

  constructor() {
    super(20);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SkyEduMarks;
