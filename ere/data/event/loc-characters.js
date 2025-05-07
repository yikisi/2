const { get, set } = require('#/era-electron');

class LocCharacters {
  /** @returns {Record<string,number[]>} */
  get #obj() {
    return get('flag:NPC位置') || set('flag:NPC位置', {});
  }

  /**
   * @param {number} loc
   * @returns {number[]}
   */
  get(loc) {
    return (this.#obj[loc] ||= []);
  }

  /**
   * @param {number} loc
   * @param {number[]} _visitors
   */
  set(loc, _visitors) {
    this.#obj[loc] = _visitors.filter((e) => e);
  }
}

const loc_characters = new LocCharacters();

module.exports = loc_characters;
