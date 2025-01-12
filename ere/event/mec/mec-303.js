const { set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  init_love() {
    set('love:303', sys_personal_achievement.get(303) * 20);
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '彻底取材',
        title: '声望获取+10%，声望下降-10%',
      },
    ];
  }
};
