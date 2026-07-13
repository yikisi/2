const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class HaloEduMarks extends EduEventMarks {
  give_up;

  // 圣王光环与拉面
  ramen;
  // 专为King准备的菜单
  for_king;
  // 一流的训练项目
  fc_train;
  // 圣王的签名会？
  auto_graph;
  // 放声大笑
  laugh;
  // 一流的美术展
  art_exhibit;

  constructor() {
    super(61);
    EduEventMarks.register_marks(this);
  }
}

module.exports = HaloEduMarks;
