const PersonalEventMarks = require('#/data/event/personal-event-marks');

/** 用于育成事件标记的工具类 */
class EduEventMarks extends PersonalEventMarks {
  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id, '育成用变量');
  }
}

module.exports = EduEventMarks;
