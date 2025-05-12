const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, '训练员');
    }
  }

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
