const { get, set } = require('#/era-electron');

class GrandLive {
  /** @type {Record<string,number>[]} */
  obj;

  constructor() {
    this.obj = get('flag:大舞台') || set('flag:大舞台', []);
  }
}

module.exports = GrandLive;
