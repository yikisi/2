const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants() {
    switch (era.get('flag:当前赛事')) {
      case race_enum.oka_sho:
      case race_enum.yush_him:
      case race_enum.shuk_sho:
      case race_enum.sank_hai:
        return [new LegendUmaSelector(116, 1.1)];
      case race_enum.japa_cup:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
          return [new LegendUmaSelector(116, 1.1)];
        }
    }
    return [];
  }
};
