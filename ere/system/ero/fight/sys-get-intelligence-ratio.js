const era = require('#/era-electron');

/**
 * @param {number} attacker
 * @param {number} defender
 * @returns {number}
 */
function sys_get_intelligence_ratio_in_fight(attacker, defender) {
  return (
    (Math.max(
      era.get(`base:${attacker}:精力`) *
        era.get(`base:${attacker}:智力`) *
        (1 +
          0.1 * era.get(`mark:${attacker}:反抗`) -
          0.25 * era.get(`mark:${attacker}:羞耻`) -
          era.get(`base:${attacker}:压力`) / 100000 -
          0.3 * (era.get(`tcvar:${attacker}:刚刚高潮`) || 0) -
          0.5 * !!era.get(`tcvar:${attacker}:接近高潮`) -
          0.1 * era.get(`status:${attacker}:偏头痛`) -
          0.1 * era.get(`status:${attacker}:发情`)),
      1,
    ) *
      era.get(`maxbase:${defender}:精力`)) /
    (Math.max(
      era.get(`base:${defender}:精力`) *
        era.get(`base:${defender}:智力`) *
        (1 +
          0.1 * era.get(`mark:${defender}:反抗`) -
          0.25 * era.get(`mark:${defender}:羞耻`) -
          era.get(`base:${defender}:压力`) / 100000 -
          0.3 * (era.get(`tcvar:${defender}:刚刚高潮`) || 0) -
          0.5 * !!era.get(`tcvar:${defender}:接近高潮`) -
          0.1 * era.get(`status:${defender}:偏头痛`) -
          0.1 * era.get(`status:${attacker}:发情`)),
      1,
    ) *
      era.get(`maxbase:${attacker}:精力`))
  );
}

module.exports = sys_get_intelligence_ratio_in_fight;
