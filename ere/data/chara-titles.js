const era = require('#/era-electron');

const { distinct_list } = require('#/utils/list-utils');

const title_desc = require('#/data/desc/titles.json');

const dict = {};

class CharaTitles {
  /** @returns {CharaTitles} */
  static get(cid) {
    return dict[cid] || (dict[cid] = new CharaTitles(cid));
  }

  /** @type {number} */
  #id;

  /** @param {number} cid */
  constructor(cid) {
    this.#id = cid;
  }

  count() {
    return this.get().length;
  }

  /** @param {{c:string,n:string,[s]:boolean}} t */
  push(...t) {
    const list = this.get();
    const o_len = list.length;
    list.push(...t);
    return (
      era.set(
        `cstr:${this.#id}:称号`,
        distinct_list(list, (e) => e.n),
      ).length > o_len
    );
  }

  /** @returns {{c:string,n:string,[s]:boolean}[]} */
  get() {
    let ret = era.get(`cstr:${this.#id}:称号`);
    if (!Array.isArray(ret)) {
      ret = era.set(`cstr:${this.#id}:称号`, []);
    }
    return ret;
  }

  /** @returns {{c:string,n:string}|undefined} */
  get_curr_title() {
    return this.get().filter((e) => e.s)[0];
  }

  /**
   * @param {boolean} [has_desc=false]
   * @returns {{color:string,[title]:string,content:string}|string}
   */
  get_colored_curr_title(has_desc = false) {
    const curr = this.get_curr_title();
    return curr
      ? {
          color: curr.c,
          content: `[${curr.n}]`,
          title:
            has_desc && title_desc[curr.n]
              ? `[${curr.n}]：${title_desc[curr.n]}`
              : undefined,
        }
      : '';
  }
}

module.exports = CharaTitles;
