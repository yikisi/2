const { get, set } = require('#/era-electron');

class LocCharacters {
  /** @type {Record<string,number[]>} */
  obj;

  constructor() {
    // TODO v0.7存档临时修复措施
    if (typeof get('flag:NPC位置') === 'number') {
      set('flag:NPC位置', {});
    }
    this.obj = get('flag:NPC位置') || set('flag:NPC位置', {});
  }

  /**
   * @param {number} loc
   * @returns {number[]}
   */
  get(loc) {
    return (this.obj[loc] = (this.obj[loc] || []).filter((e) => e));
  }

  /**
   * @param {number} loc
   * @param {number[]} _visitors
   */
  set(loc, _visitors) {
    this.obj[loc] = _visitors;
  }
}

module.exports = LocCharacters;
