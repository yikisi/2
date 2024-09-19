const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    if (era.get('flag:角色性别') === 1) {
      era.set('callname:25:400', '宁静哥');
    } else {
      era.set('callname:25:400', '宁静姐');
    }
  }
};
