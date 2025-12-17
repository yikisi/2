const { get, set } = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

class CharaGenes {
  // SKILLNAME:2 = 继承因子

  /** @type {number} */
  #id;
  /** @type {Record<string,number>} */
  obj;
  /** @type {{count:number,id:number}[]} */
  values_cache;
  /** @type {number} */
  all_count;

  constructor(cid) {
    this.#id = cid;
    this.obj = get(`skill:${cid}:2`) || set(`skill:${cid}:2`, {});
    this.all_count = Object.values(this.obj).reduce((p, c) => p + c, 0);
  }

  /** @param {number|string} gene */
  add(gene) {
    if (gene === 300000) {
      return;
    }
    this.obj[gene] || (this.obj[gene] = 0);
    this.obj[gene]++;
    this.clean_cache();
    this.all_count++;
  }

  clean_cache() {
    this.values_cache = undefined;
  }

  clear() {
    this.obj = set(`skill:${this.#id}:2`, {});
    this.all_count = 0;
    this.clean_cache();
  }

  count() {
    return this.all_count;
  }

  get_count(id) {
    return this.obj[id] || 0;
  }

  get_values() {
    if (!this.values_cache) {
      this.values_cache = sort_list(
        Object.entries(this.obj).map((e) => ({
          count: e[1],
          id: Number(e[0]),
        })),
        (e) => e.id,
        true,
      );
    }
    return this.values_cache;
  }

  /** @type {number|string} gene */
  sub(gene) {
    if (this.obj[gene]) {
      this.obj[gene]--;
      if (this.obj[gene] === 0) {
        delete this.obj[gene];
      }
      this.clean_cache();
      this.all_count--;
    }
  }
}

module.exports = CharaGenes;
