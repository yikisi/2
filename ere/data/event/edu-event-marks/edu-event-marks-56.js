const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FukukitaruEduMarks extends EduEventMarks {
  // 记录一下出道战
  begin_race_end;

  // 结局的标记
  good_end;

  // 宝冢纪念后的事件
  kink_shoKISS;
  // 热线电话
  hot_line;
  // 神学研讨
  god_study;
  // 好运的名字
  luck_name;
  // 味增占卜！
  miso_fortune;
  // 和占卜师的游戏对决 - 游戏次数
  game_times;
  // 和占卜师的游戏对决 I
  fortune_game_duel_1;
  // 和占卜师的游戏对决 II
  fortune_game_duel_2;
  // 待兼福来被刻上淫纹后的赛前事件
  tattoo;
  // 待兼福来的训练事件
  fortune_train_fail;
  // 有关切换发型的事件
  haircut;

  // 开运训练
  luck_train;

  // 暧昧的事件
  love25;
  // 称号判断相关
  best_g2_count;

  constructor() {
    super(56);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FukukitaruEduMarks;
