const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const era = require('#/era-electron');
const { set } = require('#/era-electron');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return 0.2 * new MaEduMarks().mygo;
  }

  get_motivation_limit() {
    return -2 * new MaEduMarks().mygo;
  }

  get_status() {
    if (new MaEduMarks().mygo) {
      return [
        {
          color: buff_colors[3],
          content: '迷茫',
          fontWeight: 'bold',
        },
      ];
    }
    return [];
  }

  get_train_buff() {
    return -15 * new MaEduMarks().mygo;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      set(
        'callname:4:0',
        era.get('cflag:0:性别') === 1 ? '训练员君' : '训练员酱',
      );
    }
  }
};
