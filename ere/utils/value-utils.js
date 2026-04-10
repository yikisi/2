let lan = 'zh-CN';

/**
 * @param {string} str
 * @returns {number}
 */
function get_display_width(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  let width = 0;
  for (const char of str) {
    if (char.charCodeAt(0) <= 0x80) {
      width += 0.5;
    } else {
      width += 1;
    }
  }
  return width;
}

module.exports = {
  /**
   * @param {{content:string}[]} _list
   * @param {number} collapse_limit
   * @returns {[]}
   */
  collapse_list(_list, collapse_limit) {
    if (collapse_limit <= 0) {
      return _list;
    }
    let ret = _list;
    if (collapse_limit > 0) {
      let collapse_index = 0;
      let len = 0;
      for (let i = 0; i < _list.length; i++) {
        const c = _list[i];
        const ret = len + get_display_width(c.content);
        if (
          len + 2 + (_list.length - i).toString().length <= collapse_limit &&
          ret + 2 + (_list.length - i + 1).toString().length > collapse_limit
        ) {
          collapse_index = i;
          break;
        }
        len = ret;
      }
      if (collapse_index > 0) {
        ret = [
          ..._list.slice(0, collapse_index),
          ' ',
          {
            content: `+${_list.length - collapse_index}`,
            title: _list
              .slice(collapse_index)
              .map((s) => s.title ?? s.content)
              .join('\n'),
          },
        ];
      }
    }
    return ret;
  },
  /**
   * @param {number} _num
   * @param {function(number):number} roundCb
   * @returns {{content:string,[title]:string}}
   */
  get_abbr_number(_num, roundCb = Math.floor) {
    if (typeof _num !== 'number') {
      return void 0;
    }
    if (_num < 10000) {
      return { content: _num.toLocaleString(lan) };
    }
    if (_num < 10000000) {
      return {
        content: `${roundCb(_num / 1000).toLocaleString(lan)}K`,
        title: _num.toLocaleString(lan),
      };
    }
    if (_num < 10000000000) {
      return {
        content: `${roundCb(_num / 1000000).toLocaleString(lan)}M`,
        title: _num.toLocaleString(lan),
      };
    }
    return {
      content: `${roundCb(_num / 1000000000).toLocaleString(lan)}B`,
      title: _num.toLocaleString(lan),
    };
  },
  get_display_width,
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
  set_lan(_lan) {
    lan = _lan;
  },
};
