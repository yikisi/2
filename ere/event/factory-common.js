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
  }

  check(id) {
    return this.#cons[id] !== undefined;
  }

  clean() {
    const keys = Object.keys(this.#dict).filter((e) => e >= first_child_id);
    for (const k of keys) {
      delete this.#dict[k];
    }
  }

  get(id) {
    if (!this.#dict[id]) {
      const { c: con, n: script_name } =
        id >= first_child_id
          ? { c: this.#child, n: get(`callname:${id}:-2`) }
          : { c: this.#common, n: id };
      this.#dict[id] = new (this.#cons[
        script_dict[script_name] || script_name
      ] || con)(id);
    }
    return this.#dict[id].get_this();
  }
}

module.exports = CommonKojoFactory;
