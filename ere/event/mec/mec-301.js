const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends MecNpc {
  init_love() {
    set(
      'love:301',
      Math.min(
        get('flag:马娘初始爱慕') + 30 * sys_personal_achievement.get(343) * 30,
        30,
      ),
    );
  }

  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[私人助理]',
        title: `${get('callname:0:-1')} 的体力与精力消耗-10%`,
      },
    ];
  }
};
