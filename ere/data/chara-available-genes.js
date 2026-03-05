const { get, set } = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

const { gene_type_colors } = require('#/data/race/model/uma-gene');

const { __, i18n } = require('#/i18n/selector');

class CharaAvailableGenes {
  // SKILLNAME:3 = 可继承因子

  /** @param {CharaAvailableGenes} c */
  static merge_into_player(c) {
    const player_genes = new CharaAvailableGenes(0);
    if (!player_genes.obj[`c${c.#id}`]) {
      player_genes.obj[`c${c.#id}`] = 1;
      Object.entries(c.get()).forEach((e) => {
        player_genes.obj[e[0]] || (player_genes.obj[e[0]] = 0);
        player_genes.obj[e[0]] += e[1];
      });
    } else {
      Object.entries(c.get()).forEach((e) => {
        if (!player_genes.obj[e[0]]) {
          player_genes.obj[e[0]] = e[1];
        }
      });
    }
  }

  /** @type {number} */
  #id;
  /** @type {Record<string,number>} */
  obj;
  /** @type {{count:number,id:number}[]} */
  values_cache;
  /** @type {({content:string,color:string}|string)[]} */
  summary_cache;

  constructor(cid) {
    this.#id = cid;
    this.obj = get(`skill:${cid}:3`) || set(`skill:${cid}:3`, {});
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
    this.clean_cache();
  }

  clean_cache() {
    this.summary_cache = undefined;
    this.values_cache = undefined;
  }

  clear() {
    this.obj = set(`skill:${this.#id}:3`, {});
    this.clean_cache();
  }

  get() {
    return this.obj;
  }

  get_count(id) {
    return this.obj[id] || 0;
  }

  get_summary() {
    if (!this.summary_cache) {
      const summary = [0, 0, 0];
      Object.entries(this.obj).map(
        (e) =>
          (summary[Math.min(e[0].charCodeAt(0) - '1'.charCodeAt(0), 2)] +=
            e[1]),
      );
      this.summary_cache = i18n().inherit_shop.get_jewel_list(
        ...summary.map((j, i) => ({
          color: gene_type_colors[i],
          content: i18n()
            .tb_param.jewel_with_count.replace(
              '%JEWEL%',
              __(`tb_param.${20 + i}`),
            )
            .replace('%COUNT%', j.toString()),
        })),
      );
    }
    return this.summary_cache;
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

  /**
   * @param {CharaAvailableGenes} a
   * @param {CharaAvailableGenes} b
   */
  merge(a, b) {
    this.obj = set(`skill:${this.#id}:3`, { ...a.get() });
    Object.entries(b.get()).forEach((e) => {
      this.obj[e[0]] || (this.obj[e[0]] = 0);
      this.obj[e[0]] += e[1];
    });
    this.clean_cache();
  }

  /** @type {number|string} gene */
  sub(gene) {
    if (this.obj[gene]) {
      this.obj[gene]--;
      if (this.obj[gene] === 0) {
        delete this.obj[gene];
      }
      this.clean_cache();
    }
  }
}

module.exports = CharaAvailableGenes;
