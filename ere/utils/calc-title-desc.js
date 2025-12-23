const title_desc = require('#/data/desc/titles.json');

const { __, i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {string} tid
   * @param {string } tname
   * @returns {string}
   */
  get_title_desc(tid, tname) {
    if (title_desc[tname]) {
      return title_desc[tname];
    }
    return i18n().title_desc.template.replace(
      '%DESC%',
      __(`title_desc.${tid}`, i18n().title_desc.undef),
    );
  },
};
