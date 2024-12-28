const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '[彻底管理主义]',
        title: '训练员头衔训练效果加成上升一级',
      },
    ];
  }
};
