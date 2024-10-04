const era = require('#/era-electron');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    if (era.get('flag:角色性别') === 1) {
      era.set('callname:65:85', '小少爷');
    } else {
      era.set('callname:65:85', '大小姐');
    }
  }
};
