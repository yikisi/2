const { get, set } = require('#/era-electron');

class GrandLives {
  /** @returns  {[Record<string,1>,Record<string,1>]} */
  get #obj() {
    return get('flag:大舞台') || set('flag:大舞台', [{}]);
  }

  /** @type {number[]} l */
  add(l) {
    const obj = this.#obj;
    if (obj.length === 0) {
      obj.push({});
    }
    obj.push(
      l.reduce((p, c) => {
        p[c] = 1;
        return p;
      }, {}),
    );
  }

  /**
   * @param {number} race
   * @param {0|1} [year]
   */
  check(race, year = 0) {
    const obj = this.#obj;
    if (year >= obj.length) {
      return false;
    }
    return obj[year][race] > 0;
  }

  shift() {
    const obj = this.#obj;
    if (obj.length === 2) {
      obj.shift();
    }
  }
}

const grand_lives = new GrandLives();

module.exports = grand_lives;
