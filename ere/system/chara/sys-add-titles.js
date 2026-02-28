const era = require('#/era-electron');

const CharaTitles = require('#/data/chara-titles');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {{c:string,n:string}} titles
 */
function sys_add_titles(cid, ...titles) {
  if (CharaTitles.get(cid).push(...titles)) {
    era.print(i18n().get_ui_add_titles(get_chara_talk(cid).get_colored_name()));
    return true;
  }
  return false;
}

module.exports = sys_add_titles;
