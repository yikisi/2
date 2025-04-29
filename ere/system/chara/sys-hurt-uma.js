const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} id
 * @param {number} num
 * @param {boolean} [shown=true]
 */
function sys_hurt_uma(id, num, shown = true) {
  const inmon = CharaInmon.get(id);
  if (
    !inmon.on(plugin_enum.no_pain) &&
    !inmon.on(plugin_enum.no_tired) &&
    !inmon.on(plugin_enum.no_preg) &&
    era.get('flag:可能伤病') > 0 &&
    num > 0
  ) {
    const a = era.add(`status:${id}:伤病`, num),
      tired = era.get(`status:${id}:疲惫`);
    if (tired > 0) {
      era.add(`status:${id}:伤病`, 2 * tired);
      era.set(`status:${id}:疲惫`, 0);
    }

    if (shown) {
      if (a > num) {
        era.print([
          get_chara_talk(id).get_colored_name(),
          ' 的受伤程度加深了！',
        ]);
      } else if (tired > 0) {
        era.print([
          get_chara_talk(id).get_colored_name(),
          ' 在疲惫之下受了更加严重的伤！',
        ]);
      } else {
        era.print([get_chara_talk(id).get_colored_name(), ' 受伤了！']);
      }
    }
  }
}

module.exports = sys_hurt_uma;
