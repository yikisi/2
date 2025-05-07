const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class ArdanLifeMarks extends LifeEventMarks {
  // 朦胧
  love_1;
  // 暧昧
  love_25;
  // 特殊生日剧情
  birthday;
  // 育成结束后旅游
  travel;

  constructor() {
    super(71);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = ArdanLifeMarks;
