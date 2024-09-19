const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  init_love() {
    set(
      'love:302',
      Math.min(
        get('flag:马娘初始爱慕') + 30 * sys_personal_achievement.get(343) * 30,
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

  is_able_to_show_growth() {
    return false;
  }

  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[我系你上司]',
        title:
          '[我系你上司]：作为理事长的权利是无限的；通过学园指名招募马娘的声望消耗-25%',
      },
    ];
  }
};
