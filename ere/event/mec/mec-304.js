const MecNpc = require('#/event/mec/mec-npc');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[同舟共济]',
        title: '训练员头衔训练效果加成上升一级',
      },
    ];
  }
};
