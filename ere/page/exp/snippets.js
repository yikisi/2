const {
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const { no_info } = require('#/data/exp-const');

function check_line_break(e) {
  return Array.isArray(e) && e.length && e[0].isBr;
}

module.exports = {
  /**
   * @param arr
   * @param {number} cid
   */
  get_filled_exp_str(arr, cid) {
    if (Array.isArray(arr)) {
      return arr.map((e) => {
        if (e.c !== undefined) {
          return sys_get_colored_full_callname(cid, e.c);
        }
        return e;
      });
    }
    return arr;
  },
  /** @param {array} list */
  push_link_break(list) {
    if (list.length && !check_line_break(list[list.length - 1])) {
      list.push([{ isBr: true }]);
    }
  },
  /** @param {(string|array)[]} list */
  remove_end_line_breaks(list) {
    let temp;
    if (list.length) {
      do {
        temp = list.pop();
      } while (check_line_break(temp));
      if (temp) {
        list.push(temp);
      }
    }
    if (!list.length) {
      list.push(no_info);
    }
  },
};
