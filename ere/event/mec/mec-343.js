const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '梦之追逐者',
        title: '队伍成员海外远征的负面影响降低。',
      },
    ];
  }
};
