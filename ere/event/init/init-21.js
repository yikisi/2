const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set('cstr:21:头像', '玉藻');
    }
  }
};
