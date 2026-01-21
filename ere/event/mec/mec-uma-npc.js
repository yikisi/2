const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_train_buff() {
    const debuff = EduEventMarks.get_marks(this.id).get('debuff');
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
      const debuff = this.get_train_buff();
      if (debuff !== 0) {
        return [
          {
            color: buff_colors[0],
            content: i18n().timon.strange,
            fontWeight: 'bold',
            title: i18n().timon.strange_desc(-debuff),
          },
        ];
      }
    }
    return [];
  }
};
