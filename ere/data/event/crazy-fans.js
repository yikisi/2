const { get, set } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

class CrazyFans {
  /** @type {number[]} */
  obj;

  constructor() {
    this.obj = get('flag:极端粉丝') || set('flag:极端粉丝', []);
  }

  clean() {
    this.obj = set(
      'flag:极端粉丝',
      get('flag:极端粉丝').filter((e) => e),
    );
  }

  push(chara_id) {
    this.obj.push(chara_id);
  }

  get() {
    const val = get_random_entry(this.obj);
    this.obj = set('flag:极端粉丝', []);
    return val;
  }
}

module.exports = CrazyFans;
