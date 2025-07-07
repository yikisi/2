const RaceEventParams = require('#/data/event/extra-flag/race-event-params');

class RaceEndParams extends RaceEventParams {
  /** @type {number} */
  rank;
  /** @type {PseudoUma[]} */
  contestants;

  /**
   * @param {PseudoUma} pseudo
   * @param {PseudoUma[]} contestants
   * @param {number} race
   * @param {number} rank
   */
  constructor(pseudo, contestants, race, rank) {
    super(pseudo, race);
    this.contestants = contestants;
    this.rank = rank;
  }
}

module.exports = RaceEndParams;
