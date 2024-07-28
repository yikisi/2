const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class TasteLifeMarks extends LifeEventMarks {
  who_am_i;
  // 少女理事长的烦恼之一
  annoyance;

  constructor() {
    super(302);
    LifeEventMarks.register_marks(this);
  }
}

module.exports = TasteLifeMarks;
