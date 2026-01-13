const RaceEventParams = require('#/data/event/extra-flag/race-event-params');

class RaceStartParams extends RaceEventParams {
  /**
   * @param {PseudoUma} pseudo
   * @param {PseudoUma[]} contestants
   * @param {number} race
   */
  constructor(pseudo, contestants, race) {
    super(pseudo, contestants, race);
  }
}

module.exports = RaceStartParams;
