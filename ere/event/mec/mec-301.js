const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  is_able_to_be_selected() {
    return (
      get(`cflag:${this.id}:位置`) ||
      get(`cflag:${this.id}:育成回合计时`) < 3 * 48
    );
  }

  is_able_to_show_growth() {
    return false;
  }

  get_talents() {
    return [
      {
        color: buff_colors[1],
        content: '[私人助理]',
        title: `[私人助理]：${get('callname:0:-1')} 的体力与精力消耗-10%`,
      },
    ];
  }
};
