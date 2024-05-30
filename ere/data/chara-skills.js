const { add, get, set } = require('#/era-electron');

const { skills_dict } = require('#/data/race/skill/skill-const');

class CharaSkills {
  constructor(chara_id) {
    this.id = chara_id;
    this.obj =
      get(`skill:${this.id}:习得技能`) || set(`skill:${this.id}:习得技能`, []);
  }

  /**
   * @param {number} skill_id
   * @returns {number[]}
   */
  add(...skill_id) {
    const count = this.obj.length;
    this.obj.push(...skill_id);
    set(
      `skill:${this.id}:习得技能`,
      this.obj.filter((v, i, a) => i === a.indexOf(v)),
    );
    add(
      `exp:${this.id}:技能评价分`,
      this.obj.slice(count).reduce((p, c) => p + skills_dict[c].grade_value, 0),
    );
    const ret = this.obj.slice(count);
    this.obj.sort();
    return ret;
  }

  /** @returns {number[]} */
  get() {
    return this.obj;
  }

  /**
   * @param {number} skill_id
   * @returns {number[]}
   */
  remove(...skill_id) {
    const removed = [];
    this.obj = this.obj.filter((e) => {
      if (skill_id.indexOf(e) > -1) {
        removed.push(e);
        return false;
      }
      return true;
    });
    add(
      `exp:${this.id}:技能评价分`,
      -removed.reduce((p, c) => p + skills_dict[c].grade_value, 0),
    );
    return removed;
  }
}

module.exports = CharaSkills;
