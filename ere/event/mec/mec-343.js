const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[梦之追逐者]',
        title: '[梦之追逐者]：队伍成员海外远征的负面影响降低',
      },
    ];
  }
};
