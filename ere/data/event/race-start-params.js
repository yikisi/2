const RaceEventParams = require('#/data/event/race-event-params');

class RaceStartParams extends RaceEventParams {
  /** @param {number} race */
  constructor(race) {
    super();
    this.race = race;
  }
}

module.exports = RaceStartParams;
