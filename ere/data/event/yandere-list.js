const { get, set } = require('#/era-electron');

class YandereList {
  /** @returns {number[]} */
  get #obj() {
    return get('flag:病娇列表') || set('flag:病娇列表', []);
  }

  /** @param {number} chara_id */
  push(chara_id) {
    const yandere = get(`talent:${chara_id}:病娇`);
    if (!yandere && get(`love:${chara_id}`) >= 50) {
      set(`status:${chara_id}:爱意克制`, 1);
    }
    set(`talent:${chara_id}:病娇`, yandere || 1);
    const obj = this.#obj;
    obj.push(chara_id);
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
