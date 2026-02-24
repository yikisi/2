const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const gene_type_enum = { adapt: 0, base: 0, skill: 0 };
Object.keys(gene_type_enum).forEach((e, i) => (gene_type_enum[e] = i));

const gene_type_colors = ['#ffd0d0', '#a0f0f6', '#ffffff'];

const gene_rarity_enum = { n: 0, r: 0, sr: 0, ssr: 0 };
Object.keys(gene_rarity_enum).forEach((e, i) => (gene_rarity_enum[e] = i));

const gene_rarity_colors = ['#c6c5c5', '#83d86a', '#ff82a8', '#eeb93f'];

class UmaGene {
  static gene_type_enum = gene_type_enum;
  static gene_rarity_enum = gene_rarity_enum;
  static gene_type_colors = gene_type_colors;

  /** @type {number} */
  id;
  /** @type {number} */
  rarity;
  /** @type {number} */
  type;
  /** @type {number|string} */
  type_value;
  /** @type {number} */
  cost;
  /** @type {number} */
  value;

  /** @returns {string} */
  get name() {
    return i18n().gene[this.id];
  }

  /** @returns {string} */
  get desc() {
    return i18n().gene_desc[this.id];
  }

  /**
   * @param {number} id
   * @param {number} rarity
   * @param {number} type
   * @param {number|string} type_value
   * @param {number} cost
   * @param {number} value
   */
  constructor(id, rarity, type, type_value, cost, value) {
    this.id = id;
    this.rarity = rarity;
    this.type = type;
    this.type_value = type_value;
    this.cost = cost;
    this.value = value;
  }

  get_colored_name() {
    const border_color = gene_rarity_colors[this.rarity];
    return [
      { content: '【', color: border_color },
      {
        color: gene_type_colors[this.type],
        content: this.name,
        fontWeight: 'bold',
        title: i18n()
          .gene.gn_tip_template.replace('%NAME%', this.name)
          .replace('%TYPE%', di18n.gene.gn_types[this.type])
          .replace('%RARITY%', di18n.gene.gn_rarities[this.rarity])
          .replace('%DESC%', this.desc),
      },
      { content: '】', color: border_color },
    ];
  }
}

module.exports = UmaGene;
