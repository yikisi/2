const era = require('#/era-electron');

//返回以table:index:key 的值等同于 value 的角色index array

/**
 * @param {string} table
 * @param {string|number} key
 * @param value
 * @returns {number[]}
 */
function sys_filter_chara(table, key, value) {
  let list_cur = era.getAddedCharacters();

  if (value !== undefined) {
    return list_cur.filter(
      (item) => era.get(`${table}:${item}:${key}`) === value,
    );
  } else {
    return list_cur.filter((item) => !era.get(`${table}:${item}:${key}`));
  }
}

module.exports = sys_filter_chara;
