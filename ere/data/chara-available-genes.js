const { get, set } = require('#/era-electron');

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
    this.obj =
      get(`skill:${chara_id}:可继承因子`) ||
      set(`skill:${chara_id}:可继承因子`, {});
  }

  /** @type {number|string} gene */
  add(gene) {
    this.obj[gene] || (this.obj[gene] = 0);
    this.obj[gene]++;
  }

  clear() {
    this.obj = set(`skill:${this.id}:可继承因子`, {});
  }

  get() {
    return this.obj;
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
