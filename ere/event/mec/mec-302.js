const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  init_love() {
    set(
      'love:302',
      Math.min(
        get('flag:马娘初始爱慕') + 30 * sys_personal_achievement.get(343) * 30,
        30,
      ),
    );
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '[我系你上司]',
        title: '作为理事长的权利是无限的；通过学园指名招募马娘的声望消耗-25%',
      },
    ];
  }

  set_callname() {
    set('callname:302:0', `${get('callname:0:-1')}君`);
  }
};
