const { skills_dict } = require('#/data/race/skill/skill-const');

const gene_type_enum = { adapt: 0, base: 0, skill: 0 };
Object.keys(gene_type_enum).forEach((e, i) => (gene_type_enum[e] = i));

const gene_type_colors = ['#ffd0d0', '#a0f0f6', '#ffffff'];

const gene_types = [];
gene_types[gene_type_enum.adapt] = '适性';
gene_types[gene_type_enum.base] = '属性';
gene_types[gene_type_enum.skill] = '技巧';

const gene_rarity_enum = { n: 0, r: 0, sr: 0, ssr: 0 };
Object.keys(gene_rarity_enum).forEach((e, i) => (gene_rarity_enum[e] = i));

const gene_rarity_colors = ['#c6c5c5', '#83d86a', '#ff82a8', '#eeb93f'];

const gene_rarities = [];
gene_rarities[gene_rarity_enum.n] = '普通';
gene_rarities[gene_rarity_enum.r] = '稀有';
gene_rarities[gene_rarity_enum.sr] = '史诗';
gene_rarities[gene_rarity_enum.ssr] = '传奇';

class UmaGene {
  static gene_type_enum = gene_type_enum;
  static gene_rarity_enum = gene_rarity_enum;
  static gene_type_colors = gene_type_colors;

  /** @type {number} */
  id;
  /** @type {number} */
  rarity;
  /** @type {string} */
  name;
  /** @type {string} */
  desc;
  /** @type {number} */
  type;
  /** @type {number|string} */
  type_value;
  /** @type {number} */
  cost;
  /** @type {number} */
  value;

  /**
   * @param {number} id
   * @param {number} rarity
   * @param {string} name
   * @param {string} desc
   * @param {number} type
   * @param {number|string} type_value
   * @param {number} cost
   * @param {number} value
   */
  constructor(id, rarity, name, desc, type, type_value, cost, value) {
    this.id = id;
    this.rarity = rarity;
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.type_value = type_value;
    this.cost = cost;
    this.value = value;
  }

  get_colored_name() {
    const border_color = gene_rarity_colors[this.rarity];
    let title = `【${this.name}】（${gene_types[this.type]} · ${gene_rarities[this.rarity]}）\n${this.desc}`;
    if (skills_dict[this.id] !== undefined) {
      const { desc, tags } = skills_dict[this.id];
      title += `\n${desc}`;
      if (tags.length > 0) {
        title += `\n${tags}`;
      }
    }
    return [
      { content: '【', color: border_color },
      {
        color: gene_type_colors[this.type],
        content: this.name,
        fontWeight: 'bold',
        title,
      },
      { content: '】', color: border_color },
    ];
  }
}

module.exports = UmaGene;
