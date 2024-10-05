const era = require('#/era-electron');

const { log_7 } = require('#/utils/value-utils');

/**
 * @param {number} attacker
 * @param {number} defender
 */
function check_lure_success(attacker, defender) {
  return (
    (!defender || era.get(`love:${defender}`) >= 50) &&
    !era.get(`tcvar:${defender}:发情`) &&
    Math.random() < Math.log(era.get(`abl:${attacker}:甜言蜜语`) + 2) / log_7
  );
}

module.exports = check_lure_success;
