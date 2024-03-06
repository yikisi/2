const era = require('#/era-electron');

const sys_call_ero_event = require('#/system/script/sys-call-ero-script');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const { mark_colors } = require('#/data/const.json');
const { ero_hooks } = require('#/data/event/ero-hooks');

const relation_by_mark = [100, 0, 200, -200, -200, -400];

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function update_marks(shown, ...ids) {
  let count = 0;
  const me_in_sex = ids.indexOf(0) !== -1;
  for (const chara_id of ids) {
    let relation_change = 0;
    for (let i = 0; i <= 5; ++i) {
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
        await sys_call_ero_event(chara_id, ero_hooks.get_mark, {
          level: new_level,
          name: mark_name,
          shown,
        });
        shown &&
          (await era.printAndWait([
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
          ]));
      }
      era.add(
        `ex:${chara_id}:${mark_name}获取`,
        era.get(`nowex:${chara_id}:${mark_name}获取`),
      );
      era.set(`nowex:${chara_id}:${mark_name}获取`, 0);
    }
    if (
      me_in_sex &&
      chara_id &&
      sys_like_chara(chara_id, 0, relation_change, shown)
    ) {
      await era.waitAnyKey();
    }
  }
  return count;
}

module.exports = update_marks;
