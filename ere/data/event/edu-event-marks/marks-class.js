const PersonalEventMarks = require('#/data/event/personal-event-marks');

/** 用于育成事件标记的工具类 */
class EduEventMarks extends PersonalEventMarks {
  // 随机事件检查
  _r_e_check;
  // 温泉指示器
  hot_spring;

  /**
   * @param {number} cid
   * @returns {EduEventMarks}
   */
  static get_marks(cid) {
    const ret = new EduEventMarks(cid);
    PersonalEventMarks.register_marks(ret);
    return ret;
  }

  /**
   * @protected
   * @param {number} cid
   */
  constructor(cid) {
    // CFLAGNAME:52 = 育成用变量
    super(cid, 52);
  }
}

module.exports = EduEventMarks;
