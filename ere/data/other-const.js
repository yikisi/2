const t_colors = ['#ffffff', '#83d86a', '#ff82a8', '#ff9548', '#eeb93f'];
const t_salaries = [120, 150, 180, 210, 240];

module.exports = {
  back_hairs: [
    'shor_hair',
    'long_straight',
    'twin_tails',
    'high_ponytail',
    'hair_bun',
    'side_ponytail',
    'puf_twintails',
    'wing_style',
    'single_braid',
    'twin_braids',
    'doub_odango',
  ],
  creditors: { annul_bonus: -1, invest: -2, salary: 0 },
  first_child_id: 500,
  front_hairs: [
    'thic_bangs',
    'even_bangs',
    'side_part',
    'exha_ports',
    'midd_part',
  ],
  /**
   * @param {number} growth
   * @returns {string}
   */
  get_growth_color(growth) {
    switch (growth) {
      case 0:
        return '#ff69b4';
      case 1:
        return void 0;
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
  top_hairs: ['none', 'short', 'middle', 'long', 'white'],
  year_index: [-1, 47, 95],
};
