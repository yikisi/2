const { get_random_value } = require('#/utils/value-utils');

/**
 * @param {number} origin_val
 * @param {number} love
 * @returns {number}
 */
function get_random_delta(origin_val, love) {
  const random_val = Math.random();
  let ret;
  let up = (love - 50) / 5,
    down = (love - 50) / 5;
  if (random_val < 0.05) {
    ret = get_random_value(down - 20, up, true);
  } else if (random_val > 0.95) {
    ret = get_random_value(down, up + 20, true);
  } else {
    ret = get_random_value(down - 10, up + 10, true);
  }
  const max_delta = origin_val * 0.1;
  if (Math.abs(ret) > max_delta) {
    ret = ret > 0 ? max_delta : -max_delta;
  }
  return ret;
}

module.exports = get_random_delta;
