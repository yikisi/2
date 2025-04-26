const { get, set } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
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
