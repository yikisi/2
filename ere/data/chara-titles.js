const era = require('#/era-electron');

const { distinct_list } = require('#/utils/list-utils');

const { __, i18n } = require('#/i18n/selector');

const dict = {};

class CharaTitles {
  /** @returns {CharaTitles} */
  static get(cid) {
    return dict[cid] || (dict[cid] = new CharaTitles(cid));
  }

  /**
   * @param {string} n
   * @returns {string}
   */
  static get_desc(n) {
    const desc = __(`title_desc.${n}`, '');
    if (desc && (n === 'undef' || +n > 1000)) {
      return i18n().title_desc.personal_template.replace('%DESC%', desc);
    }
    return desc;
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
        // CSTRNAME:11 = 称号
        `cstr:${this.#id}:11`,
        distinct_list(list, (e) => e.n),
      ).length > o_len
    );
  }

  /** @returns {{c:string,n:string,[s]:boolean}[]} */
  get() {
    let ret = era.get(`cstr:${this.#id}:11`);
    if (!Array.isArray(ret)) {
      ret = era.set(`cstr:${this.#id}:11`, []);
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
    if (curr) {
      const name = __(`title.${curr.n}`, curr.n);
      const desc = CharaTitles.get_desc(curr.n);
      return {
        color: curr.c,
        content: i18n().title.template_in_game.replace('%NAME%', name),
        title:
          has_desc && desc
            ? i18n()
                .title_desc.tip_template.replace('%NAME%', name)
                .replace('%DESC%', desc)
            : void 0,
      };
    } else {
      return '';
    }
  }
}

module.exports = CharaTitles;
