const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  init_love() {
    set(
      'love:343',
      Math.min(
        get('flag:马娘初始爱慕') + sys_personal_achievement.get(343) * 30,
        30,
      ),
    );
  }

  is_able_to_be_selected() {
    return (
      get(`cflag:${this.id}:位置`) ||
      get(`cflag:${this.id}:育成回合计时`) < 3 * 48
    );
  }

  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[梦之追逐者]',
        title: '队伍成员海外远征的负面影响降低',
      },
    ];
  }
};
