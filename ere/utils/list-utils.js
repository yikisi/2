const { get_random_value } = require('#/utils/value-utils');

/**
 * @param {*[]} list
 * @returns {*}
 */
function get_random_entry(list) {
  if (!list.length) {
    return undefined;
  }
  if (list.length === 1) {
    return list[0];
  }
  return list[Math.floor(list.length * Math.random())];
}

/**
 * @param {*[]} list
 * @param {(any)=>number} order_by
 * @param {boolean} [is_asc]
 * @returns {*[]}
 */
function sort_list(list, order_by, is_asc) {
  if (typeof order_by !== 'function') {
    return list;
  }
  return list
    .map((v) => {
      return {
        val: v,
        orderBy: order_by(v),
      };
    })
    .sort((a, b) => (is_asc ? a.orderBy - b.orderBy : b.orderBy - a.orderBy))
    .map((v) => v.val);
}

module.exports = {
  /**
   * @param {*[]} list
   * @param {number} max
   * @returns {*[]}
   */
  gacha(list, max) {
    if (max <= 0) {
      return [];
    }
    if (list.length <= max) {
      return list;
    }
    if (max === 1) {
      return [get_random_entry(list)];
    }
    const ret = [];
    for (let i = 0; i < list.length; ++i) {
      if (i < max) {
        ret.push(i);
      } else {
        const rand = get_random_value(0, i);
        if (rand < max) {
          ret[rand] = i;
        }
      }
    }
    return sort_list(ret, (x) => x, true).map((i) => list[i]);
  },
  get_random_entry,
  /**
   * @param {*[]} list
   * @param {function(*):string} key_cb
   */
  distinct_list(list, key_cb) {
    /** @type {Record<string,{entry:*,index:number}>} */
    const dict = {};
    list.forEach((e, i) => (dict[key_cb(e)] = { entry: e, index: i }));
    return Object.values(dict)
      .sort((a, b) => a.index - b.index)
      .map((e) => e.entry);
  },
  /**
   * @param {*[]} list
   * @param {string} separator
   * @returns {string}
   */
  join_list(list, separator) {
    return list.filter((e) => e).join(separator);
  },
  sort_list,
};
