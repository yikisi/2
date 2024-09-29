class LegendUmaFilter {
  /**
   * 自定义立绘
   * @type {string}
   */
  image;
  /**
   * 自定义技能组
   * @type {number}
   */
  skills;

  /**
   * @param {string} name
   * @param {number} buff
   * @param {function({adapt_ground:number[],adapt_distance:number[],adapt_style:number[]}):boolean} filter
   */
  constructor(name, buff, filter) {
    this.name = name;
    this.buff = buff;
    this.filter = filter;
  }

  /**
   * @param {string} image
   * @returns {LegendUmaFilter}
   */
  set_image(image) {
    this.image = image;
    return this;
  }

  /**
   * @param {number} skills
   * @returns {LegendUmaFilter}
   */
  set_skills(skills) {
    this.skills = skills;
    return this;
  }
}

module.exports = LegendUmaFilter;
