const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:308:-2',
        `光辉${era.get('cflag:308:性别') === 1 ? '先生' : '小姐'}`,
      );

      new Array(10).fill(0).forEach((_, i) =>
        // CFLAGNAME:30-39 = 草地适性 - 追马适性
        era.set(`cflag:308:${30 + i}`, get_random_value(0, 5)),
      );
    }
  }
};
