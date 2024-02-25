const PersonalEventMarks = require('#/data/event/personal-event-marks');

class LifeEventMarks extends PersonalEventMarks {
  // 孩子父亲
  sperm;
  // 意外之子
  unexpected_child;
  // 意外怀孕
  unexpected_pregnant;
  // 拖回家强奸
  marital_rape;

  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id, '扩展变量');
    if (this.constructor.toString().startsWith('class LifeEventMarks'))
      PersonalEventMarks.register_marks(this);
  }
}

module.exports = LifeEventMarks;
