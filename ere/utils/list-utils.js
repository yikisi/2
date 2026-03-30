const { get_random_value } = require('#/utils/value-utils');

/**
 * @template T
 * @param {T[]} list
 * @returns {T}
 */
function get_random_entry(list) {
  if (!list.length) {
    return void 0;
  }
  if (list.length === 1) {
    return list[0];
  }
  return list[Math.floor(list.length * Math.random())];
}

/**
 * @template T
 * @param {T[]} list
 * @param {function(T,number):number} order_by
 * @param {boolean=false} is_asc
 * @returns {T[]}
 */
function sort_list(list, order_by, is_asc = false) {
  if (typeof order_by !== 'function') {
    return list;
  }
  return list
    .map((v, i) => {
      return {
        val: v,
        orderBy: order_by(v, i),
      };
    })
    .sort((a, b) => (is_asc ? a.orderBy - b.orderBy : b.orderBy - a.orderBy))
    .map((v) => v.val);
}

module.exports = {
  /**
   * @template T
   * @param {T[]} list
   * @param {function(T):string} key_cb
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
   * @Template T1
   * @Template T2
   * @param {T1[]} list
   * @param {T2} separator
   * @returns {(T1|T2)[]}
   */
  flat_join_list(list, separator) {
    list = list.filter((e) => e);
    if (list.length === 0) {
      return [];
    }
    const ret = [...list[0]];
    for (let i = 1; i < list.length; ++i) {
      ret.push(separator, ...list[i]);
    }
    return ret;
  },
  /**
   * @template T
   * @param {T[]} list
   * @param {number} max
   * @returns {T[]}
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
  /**
   * @template T
   * @param {T[]} list
   * @param {(T)=>number} order_by
   * @returns {{max:T,min:T}}
   */
  get_extremum_entry(list, order_by) {
    if (list.length <= 1) {
      return { max: list[0], min: list[0] };
    }
    const _list = list.map((v) => ({
      val: v,
      orderBy: order_by(v),
    }));
    let max_entry = _list[0];
    let min_entry = _list[0];
    let max_val = max_entry.orderBy;
    let min_val = min_entry.orderBy;
    _list.forEach((e) => {
      if (e.orderBy > max_val) {
        max_entry = e;
        max_val = max_entry.orderBy;
      } else if (e.orderBy < min_val) {
        min_entry = e;
        min_val = min_entry.orderBy;
      }
    });
    return { max: max_entry.val, min: min_entry.val };
  },
  get_random_entry,
  /**
   * @template T
   * @param {T[]} list
   * @param {function(T,number):number} weight_cb
   * @returns {T}
   */
  get_random_entry_with_weight(list, weight_cb) {
    if (list.length <= 1) {
      return list[0];
    }
    let dice = Math.random() * list.reduce((p, c, i) => p + weight_cb(c, i), 0);
    for (let i = 0; i < list.length; ++i) {
      const entry = list[i];
      if ((dice -= weight_cb(entry, i)) <= 0) {
        return entry;
      }
    }
    return list[0];
  },
  /**
   * @Template T1
   * @Template T2
   * @param {T1[]} list
   * @param {T2} separator
   * @returns {(T1|T2)[]}
   */
  join_list(list, separator) {
    if (list.length === 0) {
      return [];
    }
    const ret = [list[0]];
    for (let i = 1; i < list.length; ++i) {
      ret.push(separator, list[i]);
    }
    return ret;
  },
  /**
   * @param {*[]} list
   * @param {string} separator
   * @returns {string}
   */
  join_to_string: (list, separator) => list.filter((e) => e).join(separator),
  /**
   * @param {number[]} list
   * @returns {number}
   */
  median(list) {
    if (list.length === 0) {
      return void 0;
    }
    const sorted = sort_list(list, (e) => e);
    if (sorted.length % 2) {
      return sorted[Math.floor(sorted.length / 2)];
    } else {
      return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    }
  },
  sort_list,
};
