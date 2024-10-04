const era = require('#/era-electron');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    if (era.get('cflag:60:性别') - 1) {
      era.set('callname:60:60', '内恰小姐');
    } else {
      era.set('callname:60:60', '内恰我');
    }
    era.set('callname:0:60', '内恰');
  }
};
