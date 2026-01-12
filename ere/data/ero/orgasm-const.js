const param2jewel = 10;

module.exports = {
  /** 母马一生能生多少 */
  baby_limit: 8,
  // 无任何加减成时的快感上限
  base_limit: 1000,
  /** 一次高潮奖励的基本宝珠数（*palam2juel） */
  base_orgasm_juel_reward: 50 * param2jewel,
  /** 从36周开始的生产概率 */
  birth_percent: [0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1],
  /** 多重高潮的额外体力精力消耗系数，从二重高潮开始计算 */
  damage_buff: 0.1,
  /** 寸止带来的额外体力精力消耗 */
  damage_from_stop: 0.1,
  /** 阴茎的勃起阈值 */
  erect_border: 0.4,
  /** 高潮时的宝珠奖励系数，从二重高潮开始计算，部位高潮为指数，整体高潮为加法 */
  juel_reward: 0.2,
  lust_border: {
    // 不安
    itch: 5000,
    // 情动
    absent_mind: 7500,
    // 焦躁
    want_sex: 9000,
    limit: 10001,
    max: 10000,
  },
  lust_from_palam: 1000,
  /** 增加性欲的阈值 */
  lust_palam_border: 0.8,
  /** 最大失神时间，单位是调教回合 */
  max_absent_mind_time: 5,
  orgasm_cost: {
    body: {
      /** 肉体高潮时的体力伤害 */
      stamina: 160,
      /** 肉体高潮时的精力伤害 */
      time: 40,
    },
    spirit: {
      /** 精神高潮时的体力伤害 */
      stamina: 20,
      /** 精神高潮时的精力伤害 */
      time: 240,
    },
  },
  /** 多少累积快感能换一个宝珠 */
  palam2juel: param2jewel,
  /** 部位产生润滑液的快感阈值 */
  palam_border: {
    anal: 0.6,
    breast: 0.3,
    virgin: 0.5,
  },
  /** 从次要部位高潮获得的快感 */
  palam_from_orgasm: 300,
  /** 中毒系快感增加 */
  palam_from_semen_on_part: 0.15,
  /** 高潮时液体分泌量，单位ml，第一个值是基础值，第二个值是动态变化量 */
  secretion_amount: {
    /** 肠液量：5-15ml */
    anal: [5, 15],
    /** 泌乳量：15-25ml */
    breast: [15, 25],
    // 一般多重高潮时的体液分泌量加成
    orgasm_times: [1, 1.6, 2, 2.2, 2.4, 2.5],
    /** 射精量：2-6ml */
    penis: [2, 6],
    // 阴茎多重高潮时的射精量加成
    penis_times: [1, 1.4, 1.6, 1.7, 1.8, 1.9],
    /** 爱液量：10-30ml */
    virgin: [10, 30],
  },
  // 爱液分泌量的部位尺寸系数
  secretion_coefficient: { breast: [0, 1, 1.5, 1.2] },
  // 失神结束后恢复多少精力
  time_resume_ratio: 0.15,
  /** 根性降低体力精力消耗的最大比率 */
  wp_coefficient: 0.4,
};
