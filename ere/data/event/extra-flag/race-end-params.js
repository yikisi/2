const RaceEventParams = require('#/data/event/extra-flag/race-event-params');

class RaceEndParams extends RaceEventParams {
  /** @type {number} */
  rank;

  /**
   * @param {PseudoUma} pseudo
   * @param {PseudoUma[]} contestants
   * @param {number} race
   * @param {number} rank
   */
  constructor(pseudo, contestants, race, rank) {
    super(pseudo, contestants, race);
    this.rank = rank;
  }
}

module.exports = RaceEndParams;
