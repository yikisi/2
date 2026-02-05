const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class SuzukaEduMarks extends EduEventMarks {
  // 最大逃马连胜
  max_wins;
  // 逃马连胜
  wins;
  // 2-失意，1-难过，4-严重腿伤，3-陈旧腿伤
  debuff;

  run_together;
  forbid_running;

  race_wear;
  choice;

  constructor() {
    super(2);
    EduEventMarks.register_marks(this);
  }
}

module.exports = SuzukaEduMarks;
