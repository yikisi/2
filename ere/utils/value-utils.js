module.exports = {
  /**
   * @param {number} min
   * @param {number} max
   * @param {boolean} [not_int]
   */
  get_random_value(min, max, not_int) {
    if (min >= max) {
      return min;
    }
    const value = min + (max - min + 1) * Math.random();
    if (not_int) {
      return value;
    }
    return Math.floor(value);
  },
  // ln601的两倍
  log_600m2: Math.log(600 + 1) * 2,
  log_600m4: Math.log(600 + 1) * 4,
  log_7: Math.log(7),
  // 最大育成回合数的自然对数
  log_edu_weeks: Math.log(3 * 48 - 1),
  // ln1200，根性最大值的自然对数
  log_max_wp: Math.log(1200),
};
