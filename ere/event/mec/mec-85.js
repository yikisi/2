const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (
      era.get('flag:当前赛事') === race_enum.sprt_sta &&
      era.get('cflag:85:育成回合计时') > 96
    ) {
      return [new LegendUmaSelector(93, 1.05)];
    }
    return super.get_race_contestants(info);
  }

  get_sex_acceptable() {
    if (era.get('love:85') <= 75) {
      return -25;
    }
    return 10;
  }

  get_ero_check() {
    return this.get_sex_acceptable();
  }
};
