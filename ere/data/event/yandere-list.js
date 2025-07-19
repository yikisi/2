const { get, set } = require('#/era-electron');

class YandereList {
  /** @returns {number[]} */
  get #obj() {
    return get('flag:病娇列表') || set('flag:病娇列表', []);
  }

  /** @param {number} cid */
  push(cid) {
    const yandere = get(`talent:${cid}:病娇`);
    if (!yandere && get(`love:${cid}`) >= 50) {
      set(`status:${cid}:爱意克制`, 1);
    }
    set(`talent:${cid}:病娇`, yandere || 1);
    const obj = this.#obj;
    obj.push(cid);
    set(
      'flag:病娇列表',
      obj.filter((e, i, l) => i === l.indexOf(e)),
    );
  }

  /** @returns {number[]} */
  get() {
    return this.#obj;
  }

  /** @param {number[]} arr */
  set(arr) {
    set('flag:病娇列表', arr);
  }
}

const yandere_list = new YandereList();

module.exports = yandere_list;
