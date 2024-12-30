const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  init_love() {
    set(
      'love:343',
      Math.min(
        get('flag:马娘初始爱慕') + sys_personal_achievement.get(343) * 30,
        30,
      ),
    );
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '[梦之追逐者]',
        title: '队伍成员海外远征的负面影响降低',
      },
    ];
  }
};
