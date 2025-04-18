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
}

module.exports = InmonPlugin;
