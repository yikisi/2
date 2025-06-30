const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:349:-2',
        '百炼' + (era.get('cflag:349:性别') === 1 ? '先生' : '小姐'),
      );
    }
  }
};
