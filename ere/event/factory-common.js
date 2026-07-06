const { get } = require('#/era-electron');

const script_dict = require('#/event/script-dict.json');

const { first_child_id } = require('#/data/other-const');

class CommonKojoFactory {
  #dict = {};
  /** @type {Record<string,any>} */
  #cons;
  #common;
  #child;

  constructor(cons, common, child = common) {
    this.#cons = cons;
    this.#common = common;
    this.#child = child;
    this.check = this.check.bind(this);
  }

  /**
   * @param {number} cid
   * @returns {boolean}
   */
  check(cid) {
    return this.#cons[cid] !== void 0 && this.#cons[cid]['CHECK'] === true;
  }

  clean() {
    const keys = Object.keys(this.#dict).filter(
      (cid) => Number(cid) >= first_child_id,
    );
    for (const cid of keys) {
      delete this.#dict[cid];
    }
  }

  get(cid) {
    if (!this.#dict[cid]) {
      const { c: con, n: script_name } =
        cid >= first_child_id
          ? { c: this.#child, n: get(`callname:${cid}:-2`) }
          : { c: this.#common, n: cid };
      this.#dict[cid] = new (
        this.#cons[script_dict[script_name] || script_name] || con
      )(cid);
    }
    return this.#dict[cid].this;
  }
}

module.exports = CommonKojoFactory;
