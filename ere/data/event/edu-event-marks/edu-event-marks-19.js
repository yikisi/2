const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class AgEduMarks extends EduEventMarks {
  // 钓上大鱼了，不过鱼看起来不太友善
  catch_fish;
  // 在宇宙中互相理解
  understand_universe;
  // 推
  oshi;
  // 勇者
  yuusha;
  // 勇者的战斗
  yuusha_fight;
  //闪现，应援活动
  shine_girl;
  constructor() {
    super(19);
    EduEventMarks.register_marks(this);
  }
}

module.exports = AgEduMarks;
