const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      // CFLAGNAME:0 = 性别
      era.set('callname:60:60', `${106002 + (era.get('cflag:60:0') === 1)}`);
      era.set('callname:0:60', '106011');
    }
  }
};
