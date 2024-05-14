const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  is_able_to_be_selected() {
    return get(`cflag:${this.id}:育成回合计时`) < 3 * 48;
  }

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
