const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @returns {number}
 */
function get_chara(cid) {
  const inmon = CharaInmon.get(cid);
  for (let i = 0; i < 7; ++i) {
    if (inmon.on(plugin_enum[`cha_${i}`])) {
      return i - 3;
    }
  }
  return era.get(`cflag:${cid}:2`);
}

module.exports = {
  sys_get_chara: get_chara,
  /**
   * @param {number} cid
   * @returns {PrintedSpan|string}
   */
  sys_get_full_chara(cid) {
    if (!era.get(`cflag:${cid}:成长阶段`)) {
      return i18n().feature.baby_uma_adjective;
    }
    const chara = get_chara(cid);
    const cflag = era.get(`cflag:${cid}:气性`);
    const info = di18n.feature.get_chara_info(chara);
    if (cflag !== chara) {
      info.fontStyle = 'italic';
      info.title += '\n' + i18n().feature.chara_twisted;
    }
    return info;
  },
};
