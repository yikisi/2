const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:308:-2',
        // CFLAGNAME:0 = 性别
        `${900811 + (era.get('cflag:308:0') === 1)}`,
      );
      new Array(10).fill(0).forEach((_, i) =>
        // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
        era.set(`cflag:308:${30 + i}`, get_random_value(0, 5)),
      );
      // BASENAME:5 - 7 = 速度 - 力量
      era.set('maxbase:308:5', 800);
      era.set('maxbase:308:6', 800);
      era.set('maxbase:308:7', 800);
    }
  }
};
