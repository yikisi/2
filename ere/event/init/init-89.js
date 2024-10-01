const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    if (era.get('flag:角色性别') === 1) {
      require('#/system/sys-init-chara').init_chara(90);
      era.set('callname:0:90', '哥哥');
    }
  }
};
