const era = require('#/era-electron');

const { base_skill_price, mark_prices } = require('#/data/ero/juel-const');
const { skill2juel, talent2juel } = require('#/data/ero/price.json');

/**
 * @param {number} cid
 * @param {{[is_emotion]:boolean,[is_auto_update]:boolean}} [config]
 * @returns {number}
 */
function get_base_price(cid, config = {}) {
  return (
    (base_skill_price *
      (100 +
        era.get('flag:宝珠消耗量') * !config.is_auto_update +
        era.get(`talent:${cid}:工口好奇`) * 10 * !config.is_emotion)) /
    100
  );
}

module.exports = {
  /**
   * @param {number} cid
   * @param {number} aim_level
   * @param {number} mark_level
   * @returns {number}
   */
  get_mark_price(cid, aim_level, mark_level) {
    return Math.ceil(
      (mark_prices[aim_level] *
        (100 + era.get('flag:宝珠消耗量')) *
        (5 - mark_level)) /
        400,
    );
  },
  /**
   * @param {number} cid
   * @param {string} skill_name
   * @param {number} level
   * @param {boolean} [is_auto_update]
   * @returns {Record<string,number>}
   */
  get_skill_price(cid, skill_name, level, is_auto_update) {
    const base_price = get_base_price(cid, { is_auto_update });
    const len = skill2juel[skill_name].length;
    return skill2juel[skill_name].reduce((p, c) => {
      p[c] = Math.floor((base_price * level) / len);
      return p;
    }, {});
  },
  /**
   * @param {number} cid
   * @param {string} talent_name
   * @param {number} delta
   * @returns {Record<string,number>}
   */
  get_talent_price(cid, talent_name, delta) {
    const base_price = get_base_price(cid);
    const emotion_base_price = get_base_price(cid, { is_emotion: true });
    const len = talent2juel[talent_name].length;
    return talent2juel[talent_name].reduce((p, c) => {
      p[c] = Math.floor(
        (4 *
          ((c === '顺从' ? emotion_base_price : base_price) *
            Math.abs(delta))) /
          len,
      );
      return p;
    }, {});
  },
};
