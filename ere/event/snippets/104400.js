const era = require('#/era-electron');

const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {Record} dict
   * @param {0|1|10} sex_code
   * @returns {Record}
   */
  fill_moho_in_dict(dict, sex_code = era.get('cflag:44:性别')) {
    if (sex_code === 1) {
      dict.MOHOSHOJO = i18n().name.moho_shojo;
      dict.MAJO = i18n().name.majo;
    } else {
      dict.MOHOSHOJO = dict.MAJO = i18n().name.majutsushi;
    }
    return dict;
  },
};
