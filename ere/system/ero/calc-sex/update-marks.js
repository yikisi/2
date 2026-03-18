const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const { mark_colors, mark_enum } = require('#/data/ero/mark-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const relation_by_mark = [40, 0, 60, -200, -200, -400];

/** @type {function(number):CustomizedEro} */
let get_custom_ero;

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function update_marks(shown, ...ids) {
  let count = 0;
  const me_in_sex = ids.indexOf(0) !== -1;
  for (const cid of ids) {
    let relation_change = 0;
    for (const mid of Object.values(mark_enum)) {
      const m_level = era.get(`mark:${cid}:${mid}`);
      // EXNAME:65 - 70 = 欢愉获取 - 反抗获取
      const n_level = Math.min(
        era.get(`nowex:${cid}:${65 + mid}`) + m_level,
        3,
      );
      if (n_level > m_level) {
        count++;
        relation_change += relation_by_mark[mid] * (n_level - m_level);
        era.set(`mark:${cid}:${mid}`, n_level);
        if (shown) {
          era.println();
          await get_custom_ero(cid).get_mark(n_level, mid, false);
          await era.printAndWait(
            i18n().sex.get_got_mark_info(
              get_chara_talk(cid).get_colored_name(),
              {
                content: di18n.tb_mark.get_mark_full_name_with_level(
                  mid,
                  n_level,
                ),
                color: get_color(void 0, mark_colors[mid], n_level / 3),
              },
            ),
          );
        }
      }
      // EXNAME:65 - 70 = 欢愉获取 - 反抗获取
      era.add(`ex:${cid}:${65 + mid}`, era.get(`nowex:${cid}:${65 + mid}`));
      era.set(`nowex:${cid}:${65 + mid}`, 0);
    }
    if (
      me_in_sex &&
      cid > 0 &&
      sys_like_chara(cid, 0, relation_change, shown, -1)
    ) {
      await era.waitAnyKey();
    }
  }
  return count;
}

update_marks.init = (_handler) => (get_custom_ero = _handler);

module.exports = update_marks;
