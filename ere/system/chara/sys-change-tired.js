const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} cid
 * @param {number} num
 */
function sys_change_tired(cid, num) {
  const inmon = CharaInmon.get(cid);
  if (inmon.on(plugin_enum.no_tired) || inmon.on(plugin_enum.no_preg)) {
    return;
  }
  const val = era.add(
    `status:${cid}:疲惫`,
    num - era.get(`talent:${cid}:身体素质`),
  );
  if (val < 0) {
    era.set(`status:${cid}:疲惫`, 0);
  }
}

module.exports = sys_change_tired;
