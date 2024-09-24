const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set('callname:0:56', '阿福');
  }
  era.set('status:56:运势依赖', 1);
  era.set('status:56:大吉', 0);
  era.set('status:56:中吉', 0);
  era.set('status:56:小吉', 0);
  era.set('status:56:凶', 0);
  era.set('status:56:PTSD', 0);
  era.set('status:56:稳定', 0);
};
