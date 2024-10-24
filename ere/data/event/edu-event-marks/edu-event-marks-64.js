const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class PamaEduMarks extends EduEventMarks {
  // 依存心
  half_life;

  // 全育成第一次调教指令
  kiss;
  lure;
  pet_breast;
  prepare_anal;
  cunnilingus;
  ask_blow_job;
  sixty_nine;
  ask_foot_job;
  missionary;
  doggy_style;
  sitting;
  hug_standing;
  ask_cowgirl;
  hit_anal;

  constructor() {
    super(64);
    EduEventMarks.register_marks(this);
  }
}

module.exports = PamaEduMarks;
