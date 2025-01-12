const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  init_love() {
    set(
      'love:308',
      Math.min(
        get('flag:马娘初始爱慕') + sys_personal_achievement.get(308) * 20,
        20,
      ),
    );
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '梦之开拓者',
        title: '参加大舞台赛事时声望奖励+100%',
      },
    ];
  }
};
