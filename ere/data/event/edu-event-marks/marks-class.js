const PersonalEventMarks = require('#/data/event/personal-event-marks');

/** 用于育成事件标记的工具类 */
class EduEventMarks extends PersonalEventMarks {
  // 随机事件检查
  _r_e_check;
  // 温泉指示器
  hot_spring;

  /**
   * @param {number} chara_id
   * @returns {EduEventMarks}
   */
  static get_marks(chara_id) {
    const ret = new EduEventMarks(chara_id);
    PersonalEventMarks.register_marks(ret);
    return ret;
  }

  /**
   * @protected
   * @param {number} chara_id
   */
  constructor(chara_id) {
    super(chara_id, '育成用变量');
  }
}

module.exports = EduEventMarks;
