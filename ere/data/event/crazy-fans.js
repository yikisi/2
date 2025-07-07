const { get, set } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

class CrazyFans {
  /** @returns {number[]} */
  get #obj() {
    return get('flag:极端粉丝') || set('flag:极端粉丝', []);
  }

  push(cid) {
    this.#obj.push(cid);
  }

  get() {
    const val = get_random_entry(this.#obj);
    set('flag:极端粉丝', []);
    return val;
  }
}

const crazy_fans = new CrazyFans();

module.exports = crazy_fans;
