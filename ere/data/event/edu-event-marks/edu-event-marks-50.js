const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class TaishinEduMarks extends EduEventMarks {
  // 是否避战菊花赏
  choice;
  // 肺出血
  debuff;
  // 恍惚
  frog;
  // 再起
  new_goal;
  // 与你相伴
  together;

  // 特大双份盖浇饭
  dinner;
  // 大进摸摸头
  pet_head;
  // 名人的烦恼
  famous;
  // 雨后天晴
  rainy;

  // 是否触发【青翠】事件链
  find_taishin;

  // 被大进踢的次数
  hit;

  constructor() {
    super(50);
    EduEventMarks.register_marks(this);
  }
}

module.exports = TaishinEduMarks;
