const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return 0.1 * era.get('status:3:腿伤');
  }

  get_maxbase_buff() {
    return -200 * era.get('status:3:腿伤');
  }

  get_race_cloth() {
    if (
      !era.get('status:3:腿伤') ||
      era.get('cflag:3:育成回合计时') !==
        race_infos[race_enum.arim_kin].date + 95 ||
      era.get('flag:当前赛事') !== race_enum.arim_kin
    ) {
      return super.get_race_cloth();
    }
    return ['帝王2'];
  }

  get_pressure_buff() {
    return 0.1 * era.get('status:3:腿伤');
  }

  get_status() {
    if (era.get('status:3:腿伤')) {
      return [
        {
          color: buff_colors[3],
          content: '腿伤！',
          fontWeight: 'bold',
          key: '腿伤',
        },
      ];
    }
    return [];
  }

  get_train_buff() {
    return -20 * era.get('status:3:腿伤');
  }

  set_callname() {
    if (era.get('relation:3:0') > 375) {
      era.set('callname:3:0', '训\\练/员');
    } else {
      era.set('callname:3:0', '训练员');
    }
  }
};
