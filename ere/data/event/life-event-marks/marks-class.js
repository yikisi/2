const PersonalEventMarks = require('#/data/event/personal-event-marks');

class LifeEventMarks extends PersonalEventMarks {
  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id, '扩展变量');
  }
}

module.exports = LifeEventMarks;
