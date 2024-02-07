const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class RiceEduMarks extends EduEventMarks {
  //米浴初次登场
  beginning;
  // 名指导
  famous_educate;
  // 舞蹈训练
  dance_study;
  // 粉丝来信
  fans_letter;
  // 称号检查 - 重赏23战以上
  g3_count;

  constructor() {
    super(30);
    EduEventMarks.register_marks(this);
  }
}

module.exports = RiceEduMarks;
