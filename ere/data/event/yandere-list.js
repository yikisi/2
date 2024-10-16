const { get, set } = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

class YandereList {
  obj;

  constructor() {
    this.obj = get('flag:病娇列表') || set('flag:病娇列表', []);
  }

  /**
   * @param {number} chara_id
   * @param {boolean} [in_init]
   */
  push(chara_id, in_init) {
    if (in_init || !get(`talent:${chara_id}:病娇`)) {
      this.obj.push(chara_id);
      this.obj = set(
        'flag:病娇列表',
        sort_list(this.obj, (e) => e),
      );
    }
  }

  /** @returns {number[]} */
  get() {
    return this.obj;
  }
}

module.exports = YandereList;
