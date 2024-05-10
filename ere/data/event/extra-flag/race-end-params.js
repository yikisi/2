const RaceEventParams = require('#/data/event/extra-flag/race-event-params');

class RaceEndParams extends RaceEventParams {
  /**
   * @param {PseudoUma[]} contestants
   * @param {number} race
   * @param {number} rank
   */
  constructor(contestants, race, rank) {
    super();
    this.contestants = contestants;
    this.race = race;
    this.rank = rank;
  }
}

module.exports = RaceEndParams;
