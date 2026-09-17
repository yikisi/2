const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class SweepLifeMarks extends LifeEventMarks {
  // 未互动回合计数，互动时重置为2，每回合-1，到0时触发事件并重置为2
  no_action;

  constructor() {
    super(44);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = SweepLifeMarks;
