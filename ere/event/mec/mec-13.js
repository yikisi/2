const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.kiku_sho:
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(27, 1.05)];
      case race_enum.takz_kin:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
          return [new LegendUmaSelector(27, 1.05)];
        }
    }
    return super.get_race_contestants(info);
  }
};
