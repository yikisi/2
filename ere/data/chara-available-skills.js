const { get, set } = require('#/era-electron');

class CharaAvailableSkills {
  /** @type {number[]} */
  obj;

  constructor(chara_id) {
    this.id = chara_id;
    this.obj = (
      get(`skill:${this.id}:可习得技能`) ||
      set(`skill:${this.id}:可习得技能`, [])
    ).filter((e) => e);
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

  clear() {
    this.obj = set(`skill:${this.id}:可习得技能`, []);
    return this;
  }

  remove(...skill_id) {
    this.obj = set(
      `skill:${this.id}:可习得技能`,
      this.obj.filter((e) => e && skill_id.indexOf(e) === -1),
    );
  }

  /** @returns {number[]} */
  get() {
    return (this.obj = set(
      `skill:${this.id}:可习得技能`,
      this.obj.filter((e) => e),
    ));
  }
}

module.exports = CharaAvailableSkills;
