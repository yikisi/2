const { get, set } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      if (get(`love:${this.id}`) >= 50 || get('flag:回合爱慕惩罚') > 0) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '我系你上司',
        title: '作为理事长的权利是无限的；通过学园指名招募马娘的声望消耗-25%。',
      },
    ];
  }

  set_callname() {
    set('callname:302:0', `${get('callname:0:-1')}君`);
  }
};
