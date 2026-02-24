const era = require('#/era-electron');

const {
  base_skill_price,
  mark_prices,
  skill2jewel,
  talent2jewel,
} = require('#/data/ero/juel-const');

/**
 * @param {number} cid
 * @param {{[is_emotion]:boolean,[is_auto_update]:boolean,[base_price]:number}} [config]
 * @returns {number}
 */
function get_base_price(
  cid,
  {
    is_emotion = false,
    is_auto_update = false,
    base_price = base_skill_price,
  } = {},
) {
  return (
    (base_price *
      (100 +
        era.get('flag:宝珠消耗量') * !is_auto_update +
        era.get(`talent:${cid}:工口好奇`) * 10 * !is_emotion)) /
    100
  );
}

module.exports = {
  get_base_price,
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
   * @param {number} aid
   * @param {number} level
   * @param {boolean} [is_auto_update]
   * @returns {Record<string,number>}
   */
  get_skill_price(cid, aid, level, is_auto_update = false) {
    const base_price = get_base_price(cid, { is_auto_update });
    const len = skill2jewel[aid].length;
    return skill2jewel[aid].reduce((p, c) => {
      p[c] = Math.floor((base_price * level) / len);
      return p;
    }, {});
  },
  /**
   * @param {number} cid
   * @param {number} tid
   * @param {number} delta
   * @returns {Record<string,number>}
   */
  get_talent_price(cid, tid, delta) {
    const base_price = get_base_price(cid);
    const emotion_base_price = get_base_price(cid, { is_emotion: true });
    const len = talent2jewel[tid].length;
    return talent2jewel[tid].reduce((p, jid) => {
      p[jid] = Math.floor(
        (4 *
          // JEWELNAME:10 = 顺从
          ((jid === 10 ? emotion_base_price : base_price) * Math.abs(delta))) /
          len,
      );
      return p;
    }, {});
  },
};
