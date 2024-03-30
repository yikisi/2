const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

class LunaEduMarks extends EduEventMarks {
  // 形态标记，1-皇帝，0-露娜
  emperor;
  // 下周待转形态，1-皇帝，0-露娜
  want_emperor;
  // 限制形态转换
  just_luna;
  // 皇帝形态计数
  break_down;
  // 信念崩塌
  faith_collapse;
  // 不协调音
  dissonance;
  // 堕入深渊
  fall_into_hell;
  // 阴晴圆缺
  wax_and_wane;
  // 一步之遥
  a_stones_throw;
  // 结局标记：1/0-NE，2-GE
  good_end;
  // 成就检查 - 菊花赏前无败
  title_check;

  constructor() {
    super(17);
    EduEventMarks.register_marks(this);
  }
}

module.exports = LunaEduMarks;
