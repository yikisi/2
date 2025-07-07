const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');
const title_desc = require('#/data/desc/title-desc.json');

/** @type {Record<string,number>} */
let global_object = {};

const sys_personal_achievement = {
  /**
   * @param {number} chara_id
   * @returns {number}
   */
  get(chara_id) {
    return global_object[chara_id] || 0;
  },
  init() {
    return (global_object =
      era.get('global:角色成就') || era.set('global:角色成就', {}));
  },
  list() {
    return Object.entries(global_object)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  },
  /**
   * @param {number} chara_id
   * @param {number} _val
   */
  set(chara_id, _val) {
    if (!global_object[chara_id] && _val) {
      const color = get_chara_color(chara_id),
        title = era.get(`staticcstr:${chara_id}:称号`);
      era.notify(
        [
          {
            color,
            content: `[${title}] `,
            fontSize: '1rem',
          },
          {
            color,
            content: era.get(`static:${chara_id}:name`),
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          '：',
          { isBr: true },
          title_desc[title] || '在一次育成周期内赢取了六次以上的G1比赛胜利',
        ],
        '获得新成就！',
        'success',
        50000,
      );
    }
    return (global_object[chara_id] = _val);
  },
};

module.exports = sys_personal_achievement;
