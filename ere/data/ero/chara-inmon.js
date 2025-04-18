const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');
const era = require('#/era-electron');

/** @type {Record<string,CharaInmon>} */
const plugins = {};

class CharaInmon {
  /** @type {Record<string,any>} */
  obj;

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
    this.obj =
      era.get(`equip:${id}:淫纹插件`) || era.set(`equip:${id}:淫纹插件`, {});
  }

  get count() {
    return Object.keys(this.obj).length;
  }

  get size() {
    return Object.keys(this.obj)
      .filter((e) => e[1] > 0)
      .reduce((p, c) => p + inmon_plugin_dict[c].size, 0);
  }

  /** @returns {number} */
  get slave() {
    return era.get(`equip:${this.id}:淫纹奴役`);
  }

  /** @param {number} v */
  set slave(v) {
    era.set(`equip:${this.id}:淫纹奴役`, v);
  }

  /**
   * @param {number} plugin_id
   * @returns {boolean}
   */
  check(plugin_id) {
    return this.obj[plugin_id] !== undefined;
  }

  /**
   * @param {number} plugin_id
   * @returns {boolean}
   */
  has(plugin_id) {
    return this.obj[plugin_id] > 0;
  }

  /**
   * @param {number} plugin_id
   * @param {0|1} v
   */
  set(plugin_id, v) {
    this.obj[plugin_id] = v;
  }
}

module.exports = CharaInmon;
