const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(init_chara, is_reset) {
    if (!is_reset) {
      era.set(
        'callname:207:-2',
        `索侬${era.get('cflag:207:性别') === 1 ? '先生' : '小姐'}`,
      );
    }
  }
};
