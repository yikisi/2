class RaceEventParams {
  /** @type {number[]} */
  attr_change;
  /** @type {number} */
  pt_change;
  /** @type {*[]} */
  skill_change;
  /** @type {number} */
  motivation_change;
  /** @type {number} */
  relation_change;
  /** @type {number} */
  love_change;
  /** @type {Record<string,number>} */
  base_change;
}

module.exports = RaceEventParams;
