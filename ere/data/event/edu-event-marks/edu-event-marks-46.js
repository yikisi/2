const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class FalconEduMarks extends EduEventMarks {
  //日常部分
  //喜欢甜食的飞鹰子
  idol_ice_cream;
  //期末大作战
  deadline_fight;
  // 河岸边的偶像
  loneliness_girl;
  // 车站宣传
  shine_girl;
  // 偶像探访！
  curiosity_girl;
  //天台上的偶像
  rooftop_idol;
  //带着青草气息的马娘们
  petrichor_girl;

  //育成部分
  // //训练开始
  // start;

  // //偶像之路
  // fight_idol;
  // //幸运四叶草
  // lucky_girl;
  // // GE 飞鹰子大冒险
  // sweet_dream;
  // // NE 偶像之路
  // idol_road;
  // //目标达成
  // target_finish;
  // 招募标记
  after_recruit;
  // // TE 顶级马娘偶像
  // top_idol;
  // // GE 安可曲
  // encore;
  idol;

  constructor() {
    super(46);
    EduEventMarks.register_marks(this);
  }
}

module.exports = FalconEduMarks;
