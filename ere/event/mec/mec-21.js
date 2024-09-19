const era = require('#/era-electron');

const { race_enum } = require('#/data/race/race-const');
const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.tenn_spr) {
      return [
        {
          color: uma.color,
          content: '名副其实的白色闪电照亮全场，谁还敢瞧不起我！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: '！',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:21:0', '训练员');
    }
  }
};
