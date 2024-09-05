const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (
      get('cflag:68:育成回合计时') > 96 &&
      get('flag:当前赛事') === race_enum.takz_kin
    ) {
      return [{ id: 108, buff: 1.2 }];
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.arim_kin && get('cflag:68:育成回合计时') > 96) {
      return [{ color: uma.color, content: '但是！这就是！巨星的谢幕之际！' }];
    }
    return super.get_race_finish_report(uma, race_id);
  }
};
