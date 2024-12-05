const MecNpc = require('#/event/mec/mec-npc');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[针炙名师]',
        title: '加快队伍成员偏头痛、伤病和疲惫恢复，且更不容易偏头痛',
      },
    ];
  }
};
