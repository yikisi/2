const { add, get, set } = require('#/era-electron');

const { skills_dict } = require('#/data/race/skill/skill-const');

const dict = {};

class CharaSkills {
  /**
   * @param {number} cid
   * @returns {CharaSkills}
   */
  static get(cid) {
    return dict[cid] || (dict[cid] = new CharaSkills(cid));
  }

  /** @type {number} */
  #id;

  /** @param {number} cid */
  constructor(cid) {
    this.#id = cid;
  }

  /**
   * @param {number} skill_id
   * @returns {number[]}
   */
  add(...skill_id) {
    let list = this.get();
    const count = list.length;
    list.push(...skill_id);
    list = set(
      `skill:${this.#id}:习得技能`,
      list.filter((v, i, a) => i === a.indexOf(v)),
    );
    add(
      `exp:${this.#id}:技能评价分`,
      list.slice(count).reduce((p, c) => p + skills_dict[c].grade_value, 0),
    );
    const ret = list.slice(count);
    list.sort();
    return ret;
  }

  clear() {
    set(`skill:${this.#id}:习得技能`, []);
    set(`exp:${this.#id}:技能评价分`, 0);
    return this;
  }

  /** @returns {number[]} */
  get() {
    return (
      get(`skill:${this.#id}:习得技能`) || set(`skill:${this.#id}:习得技能`, [])
    );
  }

  /**
   * @param {number} skill_id
   * @returns {number[]}
   */
  remove(...skill_id) {
    const removed = [];
    set(
      `skill:${this.#id}:习得技能`,
      this.get().filter((e) => {
        if (skill_id.indexOf(e) > -1) {
          removed.push(e);
          return false;
        }
        return true;
      }),
    );
    add(
      `exp:${this.#id}:技能评价分`,
      -removed.reduce((p, c) => p + skills_dict[c].grade_value, 0),
    );
    return removed;
  }
}

module.exports = CharaSkills;
