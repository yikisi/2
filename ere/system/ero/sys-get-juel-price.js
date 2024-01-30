const era = require('#/era-electron');

const { base_skill_price, mark_prices } = require('#/data/ero/juel-const');
const { skill2juel, talent2juel } = require('#/data/ero/price.json');

/**
 * @param {number} chara_id
 * @param {{[is_emotion]:boolean,[is_auto_update]:boolean}} [_config]
 * @returns {number}
 */
function get_base_price(chara_id, _config) {
  const config = _config || {};
  return (
    (base_skill_price *
      (100 +
        era.get('flag:宝珠消耗量') * !config.is_auto_update +
        era.get(`talent:${chara_id}:工口好奇`) * 10 * !config.is_emotion)) /
    100
  );
}

module.exports = {
  /**
   * @param {number} chara_id
   * @param {number} aim_level
   * @param {number} mark_level
   * @returns {number}
   */
  get_mark_price(chara_id, aim_level, mark_level) {
    return Math.ceil(
      (mark_prices[aim_level] *
        (100 + era.get('flag:宝珠消耗量')) *
        (5 - mark_level)) /
        400,
    );
  },
  /**
   * @param {number} chara_id
   * @param {string} skill_name
   * @param {number} level
   * @param {boolean} [is_auto_update]
   * @returns {Record<string,number>}
   */
  get_skill_price(chara_id, skill_name, level, is_auto_update) {
    const base_price = get_base_price(chara_id, { is_auto_update });
    const ret_dict = {};
    skill2juel[skill_name].forEach(
      (e, _, l) => (ret_dict[e] = Math.floor((base_price * level) / l.length)),
    );
    return ret_dict;
  },
  /**
   * @param {number} chara_id
   * @param {string} talent_name
   * @param {number} delta
   * @returns {Record<string,number>}
   */
  get_talent_price(chara_id, talent_name, delta) {
    const base_price = get_base_price(chara_id);
    const emotion_base_price = get_base_price(chara_id, { is_emotion: true });
    const ret_dict = {};
    talent2juel[talent_name].forEach(
      (e, _, l) =>
        (ret_dict[e] = Math.floor(
          (4 *
            ((e === '顺从' ? emotion_base_price : base_price) *
              Math.abs(delta))) /
            l.length,
        )),
    );
    return ret_dict;
  },
};
