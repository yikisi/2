const get_gradient_color = require('#/utils/gradient-color');

const { mark_colors, mark_enum } = require('#/data/ero/mark-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const base_color = mark_colors[mark_enum.ero];

const level_colors = new Array(3)
  .fill(0)
  .map((_, i) => get_gradient_color('', base_color, (i + 1) / 3));

class InmonPlugin {
  id;
  group;
  level;
  size;
  condition;
  price;

  get name() {
    return i18n().inmon[this.id];
  }

  /**
   *
   * @param {number} id
   * @param {number} group
   * @param {number} level
   * @param {number} size
   * @param {function({chara:number,edu:boolean,id:number,love:number,pregnant:boolean,sex:number}):boolean} condition
   * @param {number} price
   */
  constructor(id, group, level, size, condition, price) {
    this.id = id;
    this.group = group;
    this.level = level;
    this.size = size;
    this.condition = condition;
    this.price = price;
  }

  get color() {
    return level_colors[this.level - 1];
  }

  get title() {
    return di18n.inmon.get_tip(this.id, this.group, this.level, this.size);
  }

  get colored_name() {
    return {
      color: this.color,
      content: this.name,
      title: this.title,
    };
  }
}

module.exports = InmonPlugin;
