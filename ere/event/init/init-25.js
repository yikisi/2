const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    require('#/system/sys-init-chara').init_chara(400);
    if (era.get('flag:角色性别') === 1) {
      era.set('callname:25:400', '宁静哥');
    } else {
      era.set('callname:25:400', '宁静姐');
    }
  }
};
