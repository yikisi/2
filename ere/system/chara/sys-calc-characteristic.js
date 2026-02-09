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
   * @returns {{content:string,title:string,[fontStyle]:string}}
   */
  sys_get_full_chara(cid) {
    const chara = get_chara(cid);
    const chara_flag = era.get(`cflag:${cid}:气性`);
    const info = di18n.feature.get_chara_info(chara);
    if (chara_flag !== chara) {
      info.fontStyle = 'italic';
      info.title += '\n' + i18n().feature.chara_twisted;
    }
    return info;
  },
};
