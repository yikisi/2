const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');
const CustomizedMec = require('#/event/mec/mec-common');

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
    if (
      era.get(`cflag:${this.id}:父方角色`) === 308 ||
      era.get(`cflag:${this.id}:母方角色`) === 308
    ) {
      return [
        {
          color: get_chara_color(308),
          content: '梦之继承者',
          title: '参加大舞台赛事时声望奖励+100%。',
        },
      ];
    }
    return [];
  }
}

module.exports = MecChild;
