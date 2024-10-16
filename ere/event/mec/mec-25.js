const era = require('#/era-electron');

const { race_enum } = require('#/data/race/race-const');
const CustomizedMec = require('#/event/mec/mec-common');

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
      era.get('cflag:25:育成回合计时') < 96
    ) {
      return [
        {
          color: uma.color,
          content: '获胜的是 ',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: '！世代交替，由此证明！',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }
};
