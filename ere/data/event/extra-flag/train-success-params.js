const ExtraFlagsParams = require('#/data/event/extra-flag/common');

class TrainSuccessParams extends ExtraFlagsParams {
  /**
   * 训练属性
   * @type {number}
   */
  train;
  /**
   * 额外属性变化
   * @type {number}
   */
  attr = 0;
  /**
   * 体力消耗变化
   * @type {number}
   */
  stamina = 0;
  /**
   * 好感度变化
   * @type {number}
   */
  relation_change = 0;
  /**
   * 技能点变化
   * @type {number}
   */
  pt_change = 0;

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
