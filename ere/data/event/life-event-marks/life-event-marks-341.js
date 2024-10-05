const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class GodolphinLifeMarks extends LifeEventMarks {
  // 光环效果
  buff;
  // 爱慕事件标记
  love;

  constructor() {
    super(341);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = GodolphinLifeMarks;
