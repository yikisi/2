const era = require('#/era-electron');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    if (era.get('flag:角色性别') === 1) {
      init_chara(90);
      era.set('callname:0:90', '哥哥');
    }
  }
};
