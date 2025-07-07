const RaceEventParams = require('#/data/event/extra-flag/race-event-params');

class RaceStartParams extends RaceEventParams {
  /**
   * @param {PseudoUma} pseudo
   * @param {number} race
   */
  constructor(pseudo, race) {
    super(pseudo, race);
  }
}

module.exports = RaceStartParams;
