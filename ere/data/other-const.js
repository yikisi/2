const t_colors = ['#ffffff', '#83d86a', '#ff82a8', '#ff9548', '#eeb93f'];
const t_salaries = [120, 150, 180, 210, 240];

module.exports = {
  back_hairs: [
    '短发',
    '长直发',
    '双马尾',
    '高马尾',
    '发髻',
    '侧马尾',
    '蓬松双马尾',
    '外翼式',
    '单辫',
    '双辫',
    '双重丸子头',
    '高马尾+长直发',
  ],
  first_child_id: 500,
  front_hairs: ['厚刘海', '齐刘海', '侧分', '排气口', '中分'],
  gene_juel_names: ['粉', '蓝', '白'],
  /**
   * @param {number} growth
   * @returns {string}
   */
  get_growth_color(growth) {
    switch (growth) {
      case 0:
        return '#ff69b4';
      case 1:
        return undefined;
      default:
        return '#f9a048';
    }
  },
  /**
   * @param {number} level
   * @returns {string}
   */
  get_trainer_color(level) {
    if (level < 0) {
      return '#ff0000';
    }
    return t_colors[level];
  },
  /**
   * @param {number} level
   * @returns {number}
   */
  get_trainer_salary(level) {
    if (level < 0) {
      return 0;
    }
    return t_salaries[level];
  },
  max_chara_id: 1000,
  top_hairs: ['无', '短', '中', '长', '白'],
};
