const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');

module.exports = {
  /**
   * 依存心
   * @returns {boolean}
   */
  i_pama_yandere() {
    return era.get('love:64') >= 80 && sys_check_yandere(64, (y) => y > 0);
  },
};
