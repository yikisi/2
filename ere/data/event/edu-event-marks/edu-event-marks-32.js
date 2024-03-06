const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
class SuEduMarks extends EduEventMarks {
  //实验的开始（第一天）
  beginning;
  //拆台
  different_opinion;
  // Plan B(重要)
  PlanB;
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
  constructor() {
    super(32);
    EduEventMarks.register_marks(this);
    console.log(this.beginning);
  }
}

module.exports = SuEduMarks;
