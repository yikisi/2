const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:207:-2',
        // CFLAGNAME:0 = 性别
        `${200711 + (era.get('cflag:207:0') === 1)}`,
      );
    }
  }
};
