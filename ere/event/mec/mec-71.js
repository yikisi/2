const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');

module.exports = class extends CustomizedMec {
  get_status(show_train_buff) {
    if (show_train_buff && new ArdanEduMarks().sick > 0) {
      return [
        {
          ...di18n.kojo.get_titled_content(this.id, 'sick'),
          color: buff_colors[3],
          fontWeight: 'bold',
        },
      ];
    }
    return [];
  }

  get_race_contestants() {
    switch (era.get('flag:当前赛事')) {
      case race_enum.toky_yus:
      case race_enum.sank_hai:
        return [
          new LegendUmaSelector(69, 1.05),
          new LegendUmaSelector(72, 1.05),
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
        era.set(`callname:${this.id}:0`, 'dear');
      } else {
        era.set(
          `callname:${this.id}:0`,
          era.get('cflag:0:0') === 1 ? 'trainer_m' : 'trainer_f',
        );
      }
    }
  }
};
