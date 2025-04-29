const ExtraFlagsParams = require('#/data/event/extra-flag/common');

class RaceEventParams extends ExtraFlagsParams {
  /** @type {number[]} */
  attr_change;
  /** @type {number} */
  pt_change;
  /** @type {number[]} */
  skill_change;
  /** @type {number} */
  motivation_change;
  /** @type {number} */
  relation_change;
  /** @type {number} */
  love_change;
  /** @type {Record<string,number>} */
  base_change;
  /** @type {number} */
  race;

  /** @param {number} race */
  constructor(race) {
    super();
    this.race = race;
  }
}

module.exports = RaceEventParams;
