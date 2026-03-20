const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

const { __, i18n } = require('#/i18n/selector');

class SysPersonalAchievement {
  /** @returns {Record<string,number>} */
  get #obj() {
    // GLOBALNAME:0 = 角色成就
    return era.get('global:0') || era.set('global:0', {});
  }

  /**
   * @param {number} cid
   * @returns {number}
   */
  get(cid) {
    return this.#obj[cid] || 0;
  }

  list() {
    return Object.entries(this.#obj)
      .filter((e) => e[1] > 0)
      .map((e) => Number(e[0]));
  }

  /**
   * @param {number} cid
   * @param {string} [tid]
   * @returns {string}
   */
  describe(cid, tid = era.get(`staticcstr:${cid}:11`)) {
    return i18n().title_desc.achieve_template.replace(
      '%DESC%',
      __(`title_desc.${tid}`, i18n().title_desc.undef),
    );
  }

  /**
   * @param {number} cid
   * @param {number} _val
   */
  set(cid, _val) {
    if (!this.#obj[cid] && _val) {
      const name = era.get(`static:${cid}:name`);
      const color = get_chara_color(cid);
      // CSTRNAME:11 = 称号
      const title = era.get(`staticcstr:${cid}:11`);
      era.notify(
        [
          {
            color,
            content: __(`name.${name}`, name),
            fontSize: '1.25rem',
            fontWeight: 'bold',
          },
          ' ',
          {
            color,
            content: `[${__(`title.${title}`, title)}]`,
            fontSize: '1.25rem',
          },
          { isBr: true },
          this.describe(cid, title),
        ],
        i18n().ui_achieve_title,
        'success',
        50000,
      );
    }
    return (this.#obj[cid] = new Date().getTime());
  }
}

const sys_personal_achievement = new SysPersonalAchievement();

module.exports = sys_personal_achievement;
