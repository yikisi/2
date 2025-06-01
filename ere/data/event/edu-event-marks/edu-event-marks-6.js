const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class OguriEduMarks extends EduEventMarks {
  // 资深级1月-6月两次以上G1前三名
  aim_check;
  // 5回合100%训练加成
  train_buff;
  // 三冠
  god;

  constructor() {
    super(6);
    EduEventMarks.register_marks(this);
  }
}

module.exports = OguriEduMarks;
