const {
  ability_tag_enum,
  ability_time_usage_enum,
  ability_type_enum,
  ability_usage_enum,
  get_skill_color,
  skill_border_enum,
  skill_name_enum,
  target_type_enum,
} = require('#/data/race/model/skill-enum');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const skill_name_colors = [
  '#a7fe9e',
  '#98ccfa',
  '#ffe361',
  '#ff9e9d',
  '#ce7cff',
];

const skill_border_colors = [
  '#c6c5c5',
  '#eeb93f',
  '#71c2fe',
  '#f6aacb',
  '#ff7373',
  '#ee82ee',
  '#cf00cf',
];

class UmaSkill {
  static skill_name_enum = skill_name_enum;
  static skill_border_enum = skill_border_enum;
  static ability_time_usage_enum = ability_time_usage_enum;
  static ability_type_enum = ability_type_enum;
  static ability_usage_enum = ability_usage_enum;
  static target_type_enum = target_type_enum;
  static ability_tag_enum = ability_tag_enum;

  static get_skill_color = get_skill_color;

  /** @type {number} */
  id;
  /**
   * 技能分组（同组技能最高者生效）
   * @type {number}
   */
  group_id;
  /**
   * 技能级别（同组内技能级别）
   * @type {number}
   */
  group_level;
  /**
   * 稀有度
   * @type {number}
   */
  rarity;
  /**
   * 类别
   * @type {number}
   */
  category;
  /**
   * 技能评分
   * @type {number}
   */
  grade_value;
  /**
   * 前置条件
   * @type {(function(ConditionParams):boolean)[]}
   */
  preconditions;
  /**
   * 触发条件
   * @type {(function(ConditionParams):boolean)[]}
   */
  conditions;
  /**
   * 技能时间
   * @type {number[]}
   */
  ability_times;
  /**
   * 冷却时间
   * @type {number[]}
   */
  cooldown_times;
  /**
   * 延长技能时间方式
   * @type {number[]}
   */
  ability_time_usages;
  /**
   * 作用类型
   * @type {number[][]}
   */
  ability_types;
  /**
   * 数值换算方式
   * @type {number[][]}
   */
  ability_value_usages;
  /**
   * 效果数值
   * @type {number[][]}
   */
  ability_values;
  /**
   * 目标类型
   * @type {number[][]}
   */
  target_types;
  /**
   * 目标数值
   * @type {number[][]}
   */
  target_values;
  /**
   * 人气计算加成属性
   * @type {number[]}
   */
  pop_types;
  /**
   * 人气计算加成值
   * @type {number[]}
   */
  pop_values;
  /**
   * 随机发动
   * @type {number}
   */
  is_random;
  /**
   * PT价格
   * @type {number}
   */
  price;
  /**
   * 适应性类型标签
   * @type {number[]}
   */
  adapt_tags;
  /**
   * 技能效果标签
   * @type {number[]}
   */
  ability_tags;

  /** @returns {string} */
  get name() {
    return i18n().skill[this.id];
  }
  /** @returns {string} */
  get desc() {
    return i18n().skill_desc[this.id];
  }

  /**
   * @param {number} id
   * @param {number} group_id
   * @param {number} group_level
   * @param {number} category
   * @param {number} grade_value
   * @param {function[]} preconditions
   * @param {function[]} conditions
   * @param {number[]} ability_times
   * @param {number[]} cooldown_times
   * @param {number[]} ability_time_usages
   * @param {number[][]} ability_types
   * @param {number[][]} ability_value_usages
   * @param {number[][]} ability_values
   * @param {number[][]} target_types
   * @param {number[][]} target_values
   * @param {number[]} pop_types
   * @param {number[]} pop_values
   * @param {number} is_random
   * @param {number} price
   * @param {boolean} is_two_phase
   * @param {boolean} is_generated
   * @param {number[]} adapt_tags
   * @param {number[]} ability_tags
   */
  constructor(
    id,
    group_id,
    group_level,
    category,
    grade_value,
    preconditions,
    conditions,
    ability_times,
    cooldown_times,
    ability_time_usages,
    ability_types,
    ability_value_usages,
    ability_values,
    target_types,
    target_values,
    pop_types,
    pop_values,
    is_random,
    price,
    is_two_phase,
    is_generated,
    adapt_tags,
    ability_tags,
  ) {
    this.id = id;
    this.group_id = group_id;
    this.group_level = group_level;
    this.category = category;
    this.grade_value = grade_value;
    this.preconditions = preconditions;
    this.conditions = conditions;
    this.ability_times = ability_times;
    this.cooldown_times = cooldown_times;
    this.ability_time_usages = ability_time_usages;
    this.ability_types = ability_types;
    this.ability_value_usages = ability_value_usages;
    this.ability_values = ability_values;
    this.target_types = target_types;
    this.target_values = target_values;
    this.pop_types = pop_types;
    this.pop_values = pop_values;
    this.is_random = is_random;
    this.price = price;
    this.is_two_phase = is_two_phase;
    this.is_generated = is_generated;
    this.adapt_tags = adapt_tags;
    this.ability_tags = ability_tags;
  }

  /** @returns {string[]} */
  get tags() {
    return [
      this.adapt_tags
        .map((t) =>
          i18n().skill.tag_template.replace('%TAG%', di18n.n_adapt[t]),
        )
        .join(''),
      this.ability_tags
        .map((t) =>
          i18n().skill.tag_template.replace('%TAG%', di18n.skill.n_tag[t]),
        )
        .join(''),
    ].filter((t) => t !== '');
  }

  /** @param {PseudoUma} [owner] */
  get_colored_name(owner) {
    const tags = this.tags;
    const border_color = skill_border_colors[this.category & 0b111];
    const name_color = skill_name_colors[this.category >> 3];
    let title =
      i18n()
        .skill.title_template.replace('%NAME%', this.name)
        .replace('%TYPE%', di18n.skill.n_type[this.category >> 3])
        .replace('%RARITY%', di18n.skill.n_rarity[this.category & 0b111]) +
      `\n${this.desc}`;
    if (tags.length > 0) {
      title += `\n${tags.join('\n')}`;
    }
    return [
      { content: i18n().skill.borders[0], color: border_color },
      {
        color: name_color,
        content: this.name,
        fontWeight: 'bold',
        title,
      },
      { content: i18n().skill.borders[1], color: border_color },
    ];
  }
}

module.exports = UmaSkill;
