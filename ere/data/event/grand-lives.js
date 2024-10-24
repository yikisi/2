const { get, set } = require('#/era-electron');

class GrandLives {
  /** @type {Record<string,1>[]} */
  obj;

  constructor() {
    this.obj = get('flag:大舞台') || set('flag:大舞台', [{}]);
  }

  /** @type {number[]} l */
  add(l) {
    if (this.obj.length === 0) {
      this.obj.push({});
    }
    const new_dict = {};
    l.forEach((race) => (new_dict[race] = 1));
    this.obj.push(new_dict);
  }

  /**
   * @param {number} race
   * @param {0|1} [year]
   */
  check(race, year) {
    const _year = year || 0;
    if (_year >= this.obj.length) {
      return 0;
    }
    return this.obj[_year][race];
  }

  shift() {
    if (this.obj.length === 2) {
      this.obj.shift();
    }
  }
}

module.exports = GrandLives;
