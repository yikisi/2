const { get, set } = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

class CharaGenes {
  /** @type {number} */
  id;
  /** @type {Record<string,number>} */
  obj;

  constructor(chara_id) {
    this.id = chara_id;
    this.obj =
      get(`skill:${chara_id}:继承因子`) ||
      set(`skill:${chara_id}:继承因子`, {});
  }

  /** @type {number|string} gene */
  add(gene) {
    this.obj[gene] || (this.obj[gene] = 0);
    this.obj[gene]++;
  }

  clear() {
    this.obj = set(`skill:${this.id}:继承因子`, {});
  }

  get_values() {
    return sort_list(
      Object.entries(this.obj).map((e) => ({ count: e[1], id: e[0] })),
      (e) => Number(e.id),
    );
  }

  /** @type {number|string} gene */
  sub(gene) {
    if (this.obj[gene]) {
      this.obj[gene]--;
      if (this.obj[gene] === 0) {
        delete this.obj[gene];
      }
    }
  }
}

module.exports = CharaGenes;
