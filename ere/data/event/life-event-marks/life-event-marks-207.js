const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class ElfieLifeMarks extends LifeEventMarks {
  constructor() {
    super(207);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = ElfieLifeMarks;
