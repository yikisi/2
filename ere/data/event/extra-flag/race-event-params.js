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
  /** @type {number[]} */
  base_change;
  /** @type {PseudoUma} */
  pseudo;
  /** @type {PseudoUma[]} */
  contestants;
  /** @type {number} */
  race;

  /**
   * @param {PseudoUma[]} contestants
   * @param {PseudoUma} pseudo
   * @param {number} race
   */
  constructor(pseudo, contestants, race) {
    super();
    this.pseudo = pseudo;
    this.contestants = contestants;
    this.race = race;
  }
}

module.exports = RaceEventParams;
