const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_pregnant_ratio() {
    if (era.get('item:「嫁衣」')) {
      era.set('item:「嫁衣」', 0);
      era.set('item:空试管', 1);
      return 1;
    }
    return 0;
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:育成回合计时`) < 96
    ) {
      return i18n().kojo[this.id].report_arim_kin(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }
};
