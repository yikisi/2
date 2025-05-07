const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends CustomizedMec {
  get_status(show_train_buff) {
    if (new PamaEduMarks().half_life > 0) {
      return [
        {
          color: get_chara_color(this.id),
          content: '依存心',
          title: '唯有你……',
        },
      ];
    }
    return super.get_status(show_train_buff);
  }
};
