const { get, set } = require('#/era-electron');

const dict = {};

class CharaAvailableSkills {
  /**
   * @param {number} cid
   * @returns {CharaAvailableSkills}
   */
  static get(cid) {
    return dict[cid] || (dict[cid] = new CharaAvailableSkills(cid));
  }

  /** @type {number} */
  #id;

  constructor(cid) {
    this.#id = cid;
  }

  /**
   * @param {number} skill_id
   * @returns {number[]}
   */
  add(...skill_id) {
    const list = this.get();
    list.push(...skill_id);
    set(
      `skill:${this.#id}:可习得技能`,
      list.filter((v, i, a) => i === a.indexOf(v)),
    );
    return list;
  }

  clear() {
    set(`skill:${this.#id}:可习得技能`, []);
    return this;
  }

  /** @returns {number[]} */
  get() {
    return (
      get(`skill:${this.#id}:可习得技能`) ||
      set(`skill:${this.#id}:可习得技能`, [])
    );
  }

  remove(...skill_id) {
    set(
      `skill:${this.#id}:可习得技能`,
      this.get().filter((e) => e && skill_id.indexOf(e) === -1),
    );
  }
}

module.exports = CharaAvailableSkills;
