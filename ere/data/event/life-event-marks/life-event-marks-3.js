const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TeioLifeMarks extends LifeEventMarks {
  // 请求释放时和帝王一起离开，此后不会地下室
  release_agree;

  constructor() {
    super(3);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TeioLifeMarks;
