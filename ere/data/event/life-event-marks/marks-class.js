const PersonalEventMarks = require('#/data/event/personal-event-marks');

class LifeEventMarks extends PersonalEventMarks {
  // 孩子父亲
  sperm;
  // 怀孕播报
  report;
  // 意外之子
  unexpected_child;
  // 意外怀孕
  unexpected_pregnant;
  // 拖回家强奸
  marital_rape;
  // 临时胸围
  breast_buff;
  // 临时腰围
  waist_buff;

  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id, '扩展变量');
    if (this.constructor.toString().startsWith('class LifeEventMarks'))
      PersonalEventMarks.register_marks(this);
  }
}

module.exports = LifeEventMarks;
