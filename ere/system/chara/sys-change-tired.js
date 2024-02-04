const era = require('#/era-electron');

/**
 * @param {number} chara_id
 * @param {number} num
 */
function sys_change_tired(chara_id, num) {
  era.add(
    `status:${chara_id}:疲惫`,
    num - era.get(`talent:${chara_id}:身体素质`),
  );
}

module.exports = sys_change_tired;
