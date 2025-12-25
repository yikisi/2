const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && era.get('cflag:0:模版角色') !== 56) {
      era.set('callname:0:56', '105614');
    }
    era.set('status:56:运势依赖', 1);
    era.set('status:56:大吉', 0);
    era.set('status:56:中吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:凶', 0);
    era.set('status:56:PTSD', 0);
    era.set('status:56:稳定', 0);
  }
};
