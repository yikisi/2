const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SweepEduMarks extends EduEventMarks {
  // 状态：大魔法师的约定
  agreement;

  // 一起玩游戏的次数
  game;
  // 借钱次数
  borrow;
  // 枯树洞次数
  tree_hollow;
  // 抽奖次数
  drawing;
  // 使魔的意外小憩
  slave_rest;

  // 绿帽癖获得事件
  betrayed;
  // 强奸 Play 次数
  rape;
  // 马跳S迷奸的次数
  uma_s;
  // 超马跳Z迷奸的次数
  super_z;

  constructor() {
    super(44);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SweepEduMarks;
