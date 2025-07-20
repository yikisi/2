const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const { mark_colors } = require('#/data/const.json');
const { mark_enum } = require('#/data/ero/mark-const');

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
    for (const i of Object.values(mark_enum)) {
      const m_name = era.get(`markname:${i}`);
      const m_level = era.get(`mark:${cid}:${i}`);
      const n_level = Math.min(
        era.get(`nowex:${cid}:${m_name}获取`) + m_level,
        3,
      );
      if (n_level > m_level) {
        count++;
        relation_change += relation_by_mark[i] * (n_level - m_level);
        era.set(`mark:${cid}:${i}`, n_level);
        if (shown) {
          era.println();
          await get_custom_ero(cid).get_mark(n_level, i, false);
          await era.printAndWait([
            get_chara_talk(cid).get_colored_name(),
            ' 获得了 ',
            {
              content: `${m_name}刻印 Lv.${n_level}`,
              color: get_color(undefined, mark_colors[m_name], n_level / 3),
            },
            '！',
          ]);
        }
      }
      era.add(`ex:${cid}:${m_name}获取`, era.get(`nowex:${cid}:${m_name}获取`));
      era.set(`nowex:${cid}:${m_name}获取`, 0);
    }
    if (
      me_in_sex &&
      cid > 0 &&
      sys_like_chara(cid, 0, relation_change, shown)
    ) {
      await era.waitAnyKey();
    }
  }
  return count;
}

update_marks.init = (_handler) => (get_custom_ero = _handler);

module.exports = update_marks;
