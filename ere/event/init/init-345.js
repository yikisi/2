const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:345:-2',
        // CFLAGNAME:0 = 性别
        `${904511 + (era.get('cflag:345:0') === 1)}`,
      );
    }
  }
};
