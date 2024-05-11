const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class AgEduMarks extends EduEventMarks {
  // 钓上大鱼了，不过鱼看起来不太友善
  catch_fish;
  // 勇者的战斗
  yuusha_fight;

  constructor() {
    super(19);
    EduEventMarks.register_marks(this);
  }
}

module.exports = AgEduMarks;
