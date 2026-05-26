const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (
      get('cflag:68:育成回合计时') > 96 &&
      get('flag:当前赛事') === race_enum.takz_kin
    ) {
      return [new LegendUmaSelector(108, 1.1)];
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      get(`cflag:${this.id}:育成回合计时`) > 96
    ) {
      return i18n().kojo[this.id].report_arim_kin(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }
};
