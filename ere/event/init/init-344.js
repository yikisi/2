const era = require('#/era-electron');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    era.set(
      'callname:344:-2',
      `都留歧${era.get('cflag:344:性别') === 1 ? '先生' : '小姐'}`,
    );
  }
};
