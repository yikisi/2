const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SuzukaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-2');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_motivation_limit() {
    const { debuff } = new SuzukaEduMarks();
    if (debuff === 1 || debuff === 2) {
      return -debuff;
    }
    return 0;
  }

  is_train_enabled() {
    return new SuzukaEduMarks().debuff < 3;
  }

  get_race_contestants(info) {
    // CFLAGNAME:48 = 育成回合计时
    if (info.id === race_enum.takz_kin && era.get(`cflag:${this.id}:48`) > 96) {
      return [new LegendUmaSelector(11, 1.05), new LegendUmaSelector(18, 1.05)];
    }
    return [];
  }

  get_race_finish_report(uma, rid) {
    if (rid === race_enum.begin_race) {
      return i18n().kojo[this.id].report_begin_race(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, rid);
  }

  get_status(show_train_buff) {
    const { debuff } = new SuzukaEduMarks();
    if (show_train_buff && debuff > 0) {
      return [
        {
          ...di18n.kojo.get_titled_content(this.id, `debuff${debuff}`),
          color: get_chara_color(this.id),
        },
      ];
    }
    return super.get_status(show_train_buff);
  }
};
