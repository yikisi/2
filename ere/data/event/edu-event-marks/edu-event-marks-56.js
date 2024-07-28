const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FukukitaruEduMarks extends EduEventMarks {
  // 记录一下出道战
  begin_race_end;
  // 记录开运道具是否收容
  lock_luck_item;

  // 夏季合宿的触发事件

  // 加入属性点 ?

  // 记录招募的时间
  RECTIME;
  // 记录本周占卜
  fortune_week;

  // 结局的标记
  good_end;
  be_end_1; // 1 and only one

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
  // 和占卜师的游戏对决
  GAME_TIMES;
  fortune_game_duel; // 这里是按次数算的 +5
  fortune_game_duel1;
  // 待兼福来被刻上淫纹后的赛前事件
  tattoo;
  // 待兼福来的训练事件
  fortune_train_fail;
  // 有关切换发型的事件
  haircut;
  // 记录粉丝感谢祭后的事件
  fans_thank;

  // 这里记录是否触发过橱窗里的既视感
  window;

  // 神社的特殊服务 ？
  shrine_server;

  // 开运训练
  luck_train;
  last_edu;

  // 暧昧的事件
  love25;

  // 记录圣诞节的次数
  christmas;
  // 待兼福来第一次学习的事件 // 可能会在近期补上。
  study_times; //

  //有思路的可有可无的事件
  // 占卜环节， 参考赛马娘游戏里的待兼福来让训练员抽卡
  // 藏宝图。补充，关于福来的姐姐。 连续事件
  // 过山车
  // 涂防晒霜
  // 庙会

  // 称号判断相关
  best_g2_count;

  constructor() {
    super(56);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FukukitaruEduMarks;
