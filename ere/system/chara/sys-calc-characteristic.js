const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { __, i18n } = require('#/i18n/selector');

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

/** @param {number} chara */
function get_chara_info(chara) {
  const name = __(`feature.chara_${chara}`);
  return {
    content: name,
    title: i18n()
      .feature.chara_template.replace('%NAME%', name)
      .replace('%DESC%', __(`feature.chara_${chara}_desc`)),
  };
}

module.exports = {
  sys_get_chara: get_chara,
  sys_get_chara_info: get_chara_info,
  /**
   * @param {number} cid
   * @returns {{content:string,title:string,[fontStyle]:string}}
   */
  sys_get_full_chara(cid) {
    const chara = get_chara(cid);
    // CFLAGNAME:2 = 气性
    const chara_flag = era.get(`cflag:${cid}:2`);
    const info = get_chara_info(chara);
    if (chara_flag !== chara) {
      info.fontStyle = 'italic';
      info.title += '\n（淫纹 · 气性转换发动中）';
    }
    return info;
  },
};
