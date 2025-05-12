const get_gradient_color = require('#/utils/gradient-color');

const base_color = require('#/data/const.json').mark_colors['淫纹'];

const level_colors = new Array(3)
  .fill(0)
  .map((_, i) => get_gradient_color('', base_color, (i + 1) / 3));

const group_names = {
  101: '口腔调教',
  102: '胸部调教',
  103: '身体调教',
  104: '肛门调教',
  105: '阴茎调教',
  106: '阴核调教',
  107: '阴道调教',
  201: '施虐调教',
  202: '受虐调教',
  301: '快感控制',
  401: '信赖控制',
  402: '爱意控制',
  403: '性格控制',
  501: '高潮控制',
  502: '身体控制',
  503: '体液分泌',
  601: '气性转换',
  602: '训练方式',
  701: '行为限制',
  702: '常识转换',
};

class InmonPlugin {
  static group_names = group_names;

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

  get color() {
    return level_colors[this.level - 1];
  }

  get title() {
    return `【${this.name}】（${group_names[this.group]} · 等级 ${this.level} · ${this.size} 插槽）\n${this.description}`;
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
