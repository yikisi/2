const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TaishinLifeMarks extends LifeEventMarks {
  // 波光粼粼的水底
  aquarium;

  constructor() {
    super(50);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TaishinLifeMarks;
