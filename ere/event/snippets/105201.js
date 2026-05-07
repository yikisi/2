const { get } = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

module.exports = {
  get_inner_urara() {
    return get_chara_talk(52, chara_colors[52][1]);
  },
  /**
   * 高好感：融洽及以上
   * 低好感：冷淡及以下
   * 三周循环期间视为低好感
   * @returns {boolean}
   */
  check_high_relation() {
    const edu_marks = new UraraEduMarks();
    return get('relation:52:0') > 75 && !edu_marks.loop;
  },
};
