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
  for (const chara_id of ids) {
    let relation_change = 0;
    for (let i of Object.values(mark_enum)) {
      const mark_name = era.get(`markname:${i}`),
        mark_level = era.get(`mark:${chara_id}:${i}`),
        new_level = Math.min(
          era.get(`nowex:${chara_id}:${mark_name}获取`) + mark_level,
          3,
        );
      if (new_level > mark_level) {
        count++;
        relation_change += relation_by_mark[i] * (new_level - mark_level);
        era.set(`mark:${chara_id}:${i}`, new_level);
        if (shown) {
          era.println();
          await get_custom_ero(chara_id).get_mark(new_level, i, false);
          await era.printAndWait([
            get_chara_talk(chara_id).get_colored_name(),
            ' 获得了 ',
            {
              content: `${mark_name}刻印 Lv.${new_level}`,
              color: get_color(
                undefined,
                mark_colors[mark_name],
                new_level / 3,
              ),
            },
            '！',
          ]);
        }
      }
      era.add(
        `ex:${chara_id}:${mark_name}获取`,
        era.get(`nowex:${chara_id}:${mark_name}获取`),
      );
      era.set(`nowex:${chara_id}:${mark_name}获取`, 0);
    }
    if (
      me_in_sex &&
      chara_id > 0 &&
      sys_like_chara(chara_id, 0, relation_change, shown)
    ) {
      await era.waitAnyKey();
    }
  }
  return count;
}

update_marks.init = (_handler) => (get_custom_ero = _handler);

module.exports = update_marks;
