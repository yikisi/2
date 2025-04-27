const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const HelloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-308');

class MecChild extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    let func = super.get_race_finish_report;
    switch (era.get(`cflag:${this.id}:模版角色`)) {
      case 3:
      case 6:
      case 17:
      case 21:
      case 25:
      case 33:
      case 34:
      case 52:
        func = CustomizedMec.get_custom_mec(3).get_race_finish_report;
    }
    return func.call(this, uma, race_id);
  }

  get_talents() {
    const ret = [];
    if (era.get(`cflag:${this.id}:模版角色`) === 308) {
      const { buff } = new HelloLifeMarks();
      ret.push({
        color: get_chara_color(308),
        content: '梦之继承者',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `参加大舞台赛事时声望奖励+${100 * (buff + 1)}%。`,
      });
    }
    return ret;
  }
}

module.exports = MecChild;
