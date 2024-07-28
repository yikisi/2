const era = require('#/era-electron');

const { race_enum } = require('#/data/race/race-const');
const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get('cflag:6:育成回合计时') > 96
    ) {
      return [
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！高举右手的胜者，正是超级赛马娘 ',
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
      era.set('callname:6:0', '训练员');
    }
  }
};
