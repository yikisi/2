const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[彻底取材]',
        title: '[彻底取材]：声望获取+20%，声望下降-20%',
      },
    ];
  }
};
