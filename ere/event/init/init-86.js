const { set } = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    require('#/system/sys-init-chara').init_chara(17);
    set('callname:86:17', ['鲁铎', '露娜']);
  }
};
