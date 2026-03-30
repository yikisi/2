const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number} num
 * @param {boolean} [shown=true]
 */
function sys_hurt_uma(cid, num, shown = true) {
  const inmon = CharaInmon.get(cid);
  if (
    !inmon.on(plugin_enum.no_pain) &&
    !inmon.on(plugin_enum.no_tired) &&
    !inmon.on(plugin_enum.no_preg) &&
    era.get('flag:可能伤病') > 0 &&
    num > 0
  ) {
    const a = era.add(`status:${cid}:伤病`, num),
      tired = era.get(`status:${cid}:疲惫`);
    if (tired > 0) {
      era.add(`status:${cid}:伤病`, 2 * tired);
      era.set(`status:${cid}:疲惫`, 0);
    }

    if (shown) {
      if (a > num) {
        era.print(
          i18n().get_ui_hurt_uma_plus(get_chara_talk(cid).get_colored_name()),
        );
      } else if (tired > 0) {
        era.print(
          i18n().get_ui_hurt_tired_uma(get_chara_talk(cid).get_colored_name()),
        );
      } else {
        era.print(
          i18n().get_ui_hurt_uma(get_chara_talk(cid).get_colored_name()),
        );
      }
    }
  }
}

module.exports = sys_hurt_uma;
