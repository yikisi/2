const { set } = require('#/era-electron');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    init_chara(17);
    set('callname:86:17', ['鲁铎', '露娜']);
  }
};
