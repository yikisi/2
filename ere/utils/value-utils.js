module.exports = {
  /**
   * @param {number} _num
   * @returns {{content:string,[title]:string}}
   */
  get_abbr_number(_num) {
    if (_num < 10000) {
      return { content: _num.toLocaleString() };
    }
    if (_num < 10000000) {
      return {
        content: `${Math.round(_num / 1000).toLocaleString()}K`,
        title: _num.toLocaleString(),
      };
    }
    if (_num < 10000000000) {
      return {
        content: `${Math.round(_num / 1000000).toLocaleString()}M`,
        title: _num.toLocaleString(),
      };
    }
    return {
      content: `${Math.round(_num / 1000000000).toLocaleString()}B`,
      title: _num.toLocaleString(),
    };
  },
  /**
   * @param {number} min
   * @param {number} max
   * @param {boolean} [is_float=false]
   */
  get_random_value(min, max, is_float = false) {
    if (min >= max) {
      return min;
    }
    const dice = Math.random();
    if (is_float) {
      return min + (max - min) * dice;
    }
    return Math.floor(min + (max - min + 1) * dice);
  },
  // ln601的两倍
  log_600m2: Math.log(600 + 1) * 2,
  log_600m4: Math.log(600 + 1) * 4,
  log_7: Math.log(7),
  // 最大育成回合数的自然对数
  log_edu_weeks: Math.log(3 * 48 - 1),
  // ln1200，根性最大值的自然对数
  log_max_wp: Math.log(1200),
  minutes_in_a_day: 24 * 60,
};
