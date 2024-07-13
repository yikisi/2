const { get, set } = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

class CharaAvailableGenes {
  /**
   * @param {CharaAvailableGenes} c
   */
  static merge_into_player(c) {
    const player_genes = new CharaAvailableGenes(0);
    if (!player_genes.obj[`c${c.id}`]) {
      player_genes.obj[`c${c.id}`] = 1;
      Object.entries(c.get()).forEach((e) => {
        player_genes.obj[e[0]] || (player_genes.obj[e[0]] = 0);
        player_genes.obj[e[0]] += e[1];
      });
    }
  }

  /** @type {number} */
  id;
  /** @type {Record<string,number>} */
  obj;

  constructor(chara_id) {
    this.id = chara_id;
    this.obj =
      get(`skill:${chara_id}:可继承因子`) ||
      set(`skill:${chara_id}:可继承因子`, {});
  }

  /**
   * @param {number|string} gene
   * @param {number} [val]*/
  add(gene, val) {
    this.obj[gene] || (this.obj[gene] = 0);
    if (!val || isNaN(Number(val))) {
      this.obj[gene]++;
    } else {
      this.obj[gene] += val;
    }
  }

  clear() {
    this.obj = set(`skill:${this.id}:可继承因子`, {});
  }

  get() {
    return this.obj;
  }

  get_values() {
    return sort_list(
      Object.entries(this.obj).map((e) => ({ count: e[1], id: e[0] })),
      (e) => Number(e.id),
    );
  }

  /**
   * @param {CharaAvailableGenes} a
   * @param {CharaAvailableGenes} b
   */
  merge(a, b) {
    this.obj = set(`skill:${this.id}:可继承因子`, { ...a.get() });
    Object.entries(b.get()).forEach((e) => {
      this.obj[e[0]] || (this.obj[e[0]] = 0);
      this.obj[e[0]] += e[1];
    });
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

module.exports = CharaAvailableGenes;
