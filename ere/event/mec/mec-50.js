const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.sats_sho:
      case race_enum.toky_yus:
      case race_enum.kiku_sho:
        return [35, 23].map((e) => new LegendUmaSelector(e, 1.2));
      case race_enum.tenn_spr:
      case race_enum.arim_kin:
        if (era.get('cflag:50:育成回合计时') > 96) {
          return [new LegendUmaSelector(23, 1.2)];
        }
    }
    return super.get_race_contestants(info);
  }
};
