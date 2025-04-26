const era = require('#/era-electron');

const { distinct_list } = require('#/utils/list-utils');

const title_desc = require('#/data/desc/title-desc.json');

class CharaTitles {
  /** @param {number} chara_id */
  constructor(chara_id) {
    this.chara_id = chara_id;
    this.obj = era.get(`cstr:${chara_id}:称号`);
    if (!(this.obj instanceof Array)) {
      this.obj = era.set(`cstr:${chara_id}:称号`, []);
    }
  }

  count() {
    return this.get().length;
  }

  /** @param {{c:string,n:string,[s]:boolean}} t */
  push(...t) {
    const origin_length = this.obj.length;
    this.obj.push(...t);
    return (
      (this.obj = era.set(
        `cstr:${this.chara_id}:称号`,
        distinct_list(this.obj, (e) => e.n),
      )).length > origin_length
    );
  }

  /** @returns {{c:string,n:string,[s]:boolean}[]} */
  get() {
    return this.obj;
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
