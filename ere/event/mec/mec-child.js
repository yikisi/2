const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const HelloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-308');

class MecChild extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    let func = super.get_race_finish_report;
    const src_chara = era.get(`cflag:${this.id}:模版角色`);
    switch (src_chara) {
      case 3:
      case 6:
      case 17:
      case 21:
      case 25:
      case 33:
      case 34:
      case 52:
        func = CustomizedMec.get_custom_mec(src_chara).get_race_finish_report;
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

  init_love() {
    if (
      (era.get(`cflag:${this.id}:父方角色`) !== 0 &&
        era.get(`cflag:${this.id}:母方角色`) !== 0) ||
      era.get('flag:后代爱慕限制') > 0
    ) {
      return super.init_love();
    }
    era.set(`love:${this.id}`, 0);
  }
}

module.exports = MecChild;
