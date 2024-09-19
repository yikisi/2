const { get, set } = require('#/era-electron');

class LocCharacters {
  /** @type {Record<string,number[]>} */
  obj;

  constructor() {
    this.obj = get('flag:NPC位置') || set('flag:NPC位置', {});
  }

  clean() {
    Object.keys(this.obj).forEach((e) => {
      if (this.obj[e] instanceof Array) {
        this.obj[e] = this.obj[e].filter((v) => v);
      } else {
        delete this.obj[e];
      }
    });
  }

  /**
   * @param {number} loc
   * @returns {number[]}
   */
  get(loc) {
    return (this.obj[loc] = this.obj[loc] || []);
  }

  /**
   * @param {number} loc
   * @param {number[]} _visitors
   */
  set(loc, _visitors) {
    this.obj[loc] = _visitors.filter((e) => e);
  }
}

module.exports = LocCharacters;
