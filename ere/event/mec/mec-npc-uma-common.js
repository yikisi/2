const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

module.exports = class extends CustomizedMec {
  get_train_buff() {
    const debuff = new EduEventMarks(this.id).get('debuff');
    if (debuff) {
      return Math.floor(
        -debuff *
          Math.max(
            Math.min((675 - get(`relation:${this.id}:0`)) / 600, 1),
            0.5,
          ),
      );
    }
    return 0;
  }

  get_status(show_train_buff) {
    if (show_train_buff) {
      const debuff = new EduEventMarks(this.id).get('debuff');
      if (debuff) {
        const val = Math.floor(
          -debuff *
            Math.max(
              Math.min((675 - get(`relation:${this.id}:0`)) / 600, 1),
              0.5,
            ),
        );
        if (val < 0) {
          return [
            {
              color: buff_colors[0],
              content: '陌生',
              fontWeight: 'bold',
              title: `[陌生]：彼此还很不熟悉……训练效果${val}%；改善关系或与担当训练员谈论此事可改善该状态`,
            },
          ];
        }
      }
    }
    return [];
  }
};
