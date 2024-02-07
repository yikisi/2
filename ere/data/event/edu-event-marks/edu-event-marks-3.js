const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TeioEduMarks extends EduEventMarks {
  // 一起走吧！
  lets_go_together;
  // 蜂蜜的力量
  honey_power;
  // 舞蹈……武道？这样能训练帝王舞步吗？
  dance_or_kongfu;
  // 身负双翼，触及青天
  wing_and_sky;
  // 康复训练
  rehabilitation;
  // 与你一同前行的日子
  the_days_together;
  // uma的……血拼！
  uma_shopping;
  // 避战
  give_up;
  // 发生关系，无法抛弃
  abandon_disabled;
  // 春之帝王
  spring_teio;
  // 名人中的名人
  famous_in_famous;
  // 好结局
  good_end;
  // 成就检查 - 无败二冠
  normal_check;
  // 成就检查 - 生涯无败
  perfect_check;

  constructor() {
    super(3);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TeioEduMarks;
