const { set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends MecNpc {
  init_love() {
    set('love:303', sys_personal_achievement.get(303) * 20);
  }

  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[彻底取材]',
        title: '声望获取+10%，声望下降-10%',
      },
    ];
  }
};
