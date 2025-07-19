const era = require('#/era-electron');

const CharaTitles = require('#/data/chara-titles');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {number} chara_id
 * @param {{c:string,n:string}} title_obj
 */
function sys_add_titles(chara_id, ...title_obj) {
  if (CharaTitles.get(chara_id).push(...title_obj)) {
    era.print([get_chara_talk(chara_id).get_colored_name(), ' 获得了新称号！']);
    return true;
  }
  return false;
}

module.exports = sys_add_titles;
