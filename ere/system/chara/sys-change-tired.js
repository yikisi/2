const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} chara_id
 * @param {number} num
 */
function sys_change_tired(chara_id, num) {
  const inmon = CharaInmon.get(chara_id);
  if (inmon.on(plugin_enum.no_tired) || inmon.on(plugin_enum.no_preg)) {
    return;
  }
  era.add(
    `status:${chara_id}:疲惫`,
    num - era.get(`talent:${chara_id}:身体素质`),
  );
}

module.exports = sys_change_tired;
