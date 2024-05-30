const { get, set } = require('#/era-electron');

class CharaAvailableSkills {
  constructor(chara_id) {
    this.id = chara_id;
    this.obj =
      get(`skill:${this.id}:可习得技能`) ||
      set(`skill:${this.id}:可习得技能`, []);
  }

  /**
   * @param {number} skill_id
   * @returns {number[]}
   */
  add(...skill_id) {
    this.obj.push(...skill_id);
    set(
      `skill:${this.id}:可习得技能`,
      this.obj.filter((v, i, a) => i === a.indexOf(v)),
    );
    return this.obj;
  }

  /** @returns {number[]} */
  get() {
    return this.obj;
  }
}

module.exports = CharaAvailableSkills;
