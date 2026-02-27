const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:351:-2',
        // CFLAGNAME:0 = 性别
        `${905111 + (era.get('cflag:351:0') === 1)}`,
      );
    }
  }
};
