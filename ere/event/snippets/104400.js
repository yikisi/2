const era = require('#/era-electron');

const SweepLifeMarks = require('#/data/event/life-event-marks/life-event-marks-44');

const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {Record} dict
   * @param {0|1|10} sex_code
   * @returns {Record}
   */
  fill_moho_in_dict(dict, sex_code = era.get('cflag:44:性别')) {
    if (sex_code === 1) {
      dict.MOHOSHOJO = dict.MAJO = i18n().name.majutsushi;
    } else {
      dict.MOHOSHOJO = i18n().name.moho_shojo;
      dict.MAJO = i18n().name.majo;
    }
    return dict;
  },
  /**
   * 重置未互动标记，值越大允许的最长无互动时间越长
   * 未互动标记每周-1，到0时触发无互动口上
   * @param {SweepLifeMarks} life_marks
   */
  reset_no_action(life_marks = new SweepLifeMarks()) {
    life_marks.no_action = 2;
  },
};
