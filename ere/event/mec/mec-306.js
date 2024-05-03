const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[彻底管理主义]',
        title: '[彻底管理主义]：训练员头衔训练效果加成上升一级',
      },
    ];
  }
};
