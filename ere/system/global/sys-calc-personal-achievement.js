const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');
const title_desc = require('#/data/desc/title-desc.json');

class SysPersonalAchievement {
  /** @returns {Record<string,number>} */
  get #obj() {
    return era.get('global:角色成就') || era.set('global:角色成就', {});
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
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  }

  /**
   * @param {number} cid
   * @param {string} [title]
   * @returns {string}
   */
  describe(cid, title = era.get(`staticcstr:${cid}:称号`)) {
    return `在一次育成周期内完成了所有育成目标；同时，${(
      title_desc[title] || '在一次育成周期内赢取了六次以上的G1比赛胜利。'
    ).substring(8)}`;
  }

  /**
   * @param {number} cid
   * @param {number} _val
   */
  set(cid, _val) {
    if (!this.#obj[cid] && _val) {
      const color = get_chara_color(cid);
      const title = era.get(`staticcstr:${cid}:称号`);
      era.notify(
        [
          {
            color,
            content: `[${title}] `,
            fontSize: '1.25rem',
          },
          {
            color,
            content: era.get(`static:${cid}:name`),
            fontSize: '1.25rem',
            fontWeight: 'bold',
          },
          { isBr: true },
          this.describe(cid, title),
        ],
        '获得新成就！',
        'success',
        50000,
      );
    }
    return (this.#obj[cid] = _val);
  }
}

const sys_personal_achievement = new SysPersonalAchievement();

module.exports = sys_personal_achievement;
