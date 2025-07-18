const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class PamaEduMarks extends EduEventMarks {
  // 育成目标检查 - 经典年6月2周前重赏优胜次数
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

  constructor() {
    super(64);
    EduEventMarks.register_marks(this);
  }
}

module.exports = PamaEduMarks;
