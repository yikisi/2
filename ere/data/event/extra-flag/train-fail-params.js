const ExtraFlagsParams = require('#/data/event/extra-flag/common');

class TrainFailParams extends ExtraFlagsParams {
  /** @type {Record<string,any>} */
  args;

  /**
   * @param {boolean} fumble
   * @param {number} stamina_ratio
   * @param {number} train
   */
  constructor(fumble, stamina_ratio, train) {
    super();
    this.fumble = fumble;
    this.stamina_ratio = stamina_ratio;
    this.train = train;
  }
}

module.exports = TrainFailParams;
