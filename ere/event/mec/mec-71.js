const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const CharaTalk = require('#/utils/chara-talk');

const { buff_colors } = require('#/data/color-const');
const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');

module.exports = class extends CustomizedMec {
  get_status(show_train_buff) {
    if (show_train_buff && new ArdanEduMarks().sick > 0) {
      return [
        {
          color: buff_colors[3],
          content: '生病',
          fontWeight: 'bold',
          title: '不能训练与参赛',
        },
      ];
    }
    return [];
  }

  is_race_register_enabled() {
    return new ArdanEduMarks().sick === 0;
  }

  is_train_enabled() {
    return new ArdanEduMarks().sick === 0;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get(`love:${this.id}`) >= 75) {
        era.set(`callname:${this.id}:0`, '亲爱的');
      } else {
        era.set(
          `callname:${this.id}:0`,
          '训练员' + CharaTalk.me.get_adult_sex_title(),
        );
      }
    }
  }
};
