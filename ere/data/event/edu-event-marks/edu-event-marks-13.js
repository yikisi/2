const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class McqueenEduMarks extends EduEventMarks {
  // 爱慕锁
  love_89;
  dessert;

  // 育成首次性爱
  pet_breast;
  pet_nipple;
  pet_clitoris;
  cunnilingus;
  ask_tit_job;

  constructor() {
    super(13);
    EduEventMarks.register_marks(this);
  }
}

module.exports = McqueenEduMarks;
