const { get, set } = require('#/era-electron');

class YandereList {
  obj;

  constructor() {
    this.obj = get('flag:病娇列表') || set('flag:病娇列表', []);
  }

  /** @param {number} chara_id */
  push(chara_id) {
    const yandere = get(`talent:${chara_id}:病娇`);
    if (!yandere && get(`love:${chara_id}`) >= 50) {
      set(`status:${chara_id}:爱意克制`, 1);
    }
    set(`talent:${chara_id}:病娇`, yandere || 1);
    this.obj.push(chara_id);
    this.obj = set(
      'flag:病娇列表',
      this.obj.filter((e, i, l) => i === l.indexOf(e)),
    );
  }

  /** @returns {number[]} */
  get() {
    return this.obj;
  }

  /** @param {number[]} arr */
  set(arr) {
    this.obj = set('flag:病娇列表', arr);
  }
}

module.exports = YandereList;
