const era = require('#/era-electron');

const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');

/** @type {Record<string,CharaInmon>} */
const plugins = {};

class CharaInmon {
  /**
   * @param {number} id
   * return {CharaInmon}
   */
  static get(id) {
    if (!plugins[id]) {
      plugins[id] = new CharaInmon(id);
    }
    return plugins[id];
  }

  static clean() {
    Object.keys(plugins).forEach((e) => delete plugins[e]);
  }

  /** @param {number} id */
  constructor(id) {
    this.id = id;
  }

  get count() {
    return Object.keys(this.#obj).length;
  }

  /** @type {Record<string,0|1>} */
  get #obj() {
    // EQUIPNAME:0 = 淫纹插件
    return era.get(`equip:${this.id}:0`) || era.set(`equip:${this.id}:0`, {});
  }

  get raw() {
    return this.#obj;
  }

  get size() {
    return Object.entries(this.#obj)
      .filter((e) => e[1] > 0)
      .reduce((p, c) => p + inmon_plugin_dict[c[0]].size, 0);
  }

  /** @returns {number} */
  get slave() {
    // EQUIPNAME:1 = 淫纹奴役
    return era.get(`equip:${this.id}:1`);
  }

  /** @param {number} v */
  set slave(v) {
    era.set(`equip:${this.id}:1`, v);
  }

  get list() {
    return Object.entries(this.#obj)
      .filter((e) => e[1] > 0)
      .map(([p]) => Number(p))
      .sort();
  }

  /**
   * @param {number} plugin_id
   * @returns {boolean}
   */
  has(plugin_id) {
    return this.#obj[plugin_id] !== undefined;
  }

  /**
   * @param {number} plugin_id
   * @returns {boolean}
   */
  on(plugin_id) {
    return this.#obj[plugin_id] > 0;
  }

  /**
   * @param {number} plugin_id
   * @param {0|1} v
   */
  set(plugin_id, v) {
    this.#obj[plugin_id] = v;
  }
}

module.exports = CharaInmon;
