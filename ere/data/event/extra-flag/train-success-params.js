const ExtraFlagsParams = require('#/data/event/extra-flag/common');

class TrainSuccessParams extends ExtraFlagsParams {
  /** @type {number} */
  train;
  /** @type {number} */
  stamina;
  /** @type {number} */
  relation_change;
  /** @type {number} */
  pt_change;

  /**
   * @param {number} stamina_ratio
   * @param {number} train
   */
  constructor(stamina_ratio, train) {
    super();
    this.stamina_ratio = stamina_ratio;
    this.train = train;
  }
}

module.exports = TrainSuccessParams;
