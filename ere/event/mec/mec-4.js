const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return 0.2 * new MaEduMarks().mygo;
  }

  get_motivation_limit() {
    return -2 * new MaEduMarks().mygo;
  }

  get_race_contestants(info) {
    // CFLAGNAME:48 = 育成回合计时
    if (era.get(`cflag:${this.id}:48`) > 96) {
      // FLAGNAME:7 = 当前赛事
      switch (era.get('flag:7')) {
        case race_enum.sank_hai:
        case race_enum.tenn_sho:
          return [new LegendUmaSelector(17, 1.1)];
      }
    }
    return super.get_race_contestants(info);
  }

  get_status() {
    if (new MaEduMarks().mygo) {
      return [
        {
          color: buff_colors[3],
          content: i18n().kojo[this.id].mygo,
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
      era.set(
        'callname:4:0',
        era.get('cflag:0:性别') === 1 ? 'trainer_k' : 'trainer_c',
      );
    }
  }
};
