const get_gradient_color = require('#/utils/gradient-color');

const base_color = require('#/data/const.json').mark_colors['淫纹'];

class InmonPlugin {
  id;
  name;
  group;
  level;
  size;
  description;
  condition;
  price;

  /**
   *
   * @param {number} id
   * @param {string} name
   * @param {number} group
   * @param {number} level
   * @param {number} size
   * @param {string} description
   * @param {function({chara:number,sex:number}):boolean} condition
   * @param {number} price
   */
  constructor(id, name, group, level, size, description, condition, price) {
    this.id = id;
    this.name = name;
    this.group = group;
    this.level = level;
    this.size = size;
    this.description = description;
    this.condition = condition;
    this.price = price;
  }

  get title() {
    return `【${this.name}】（等级 ${this.level} · ${this.size} 插槽）\n${this.description}`;
  }

  get colored_name() {
    return {
      color: get_gradient_color('', base_color, this.level / 3),
      content: this.name,
      title: this.title,
    };
  }
}

module.exports = InmonPlugin;
