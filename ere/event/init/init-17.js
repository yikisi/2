const era = require('#/era-electron');

const { init_chara } = require('#/system/sys-init-chara');

module.exports = (is_reset) => {
  if (!is_reset) {
    init_chara(9017);
    era.set('relation:17:0', 152);
    era.set('love:17', 40);
    era.set('relation:9017:0', -95);
  }
};
