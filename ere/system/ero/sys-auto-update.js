const era = require('#/era-electron');

const { get_skill_price } = require('#/system/ero/sys-get-juel-price');

const { get_random_entry } = require('#/utils/list-utils');

const skill_names = require('#/data/ero/shop-desc.json').skill_desc.map((e) =>
  e.substring(0, 4),
);
const { part_names, pleasure_list } = require('#/data/ero/part-const');

/** @param {number} cid */
function sys_auto_update(cid) {
  if (!cid) {
    return;
  }
  const sex = era.get(`cflag:${cid}:性别`);
  const my_sex = era.get('cflag:0:性别');
  let cand_list;
  /** @type {Record<string,Record<string,number>>} */
  const s_p_dict = {};
  skill_names.forEach((skill) => {
    const level = era.get(`abl:${cid}:${skill}`);
    if (level === 5) {
      s_p_dict[skill] = undefined;
    } else {
      s_p_dict[skill] = get_skill_price(cid, skill, level + 1, true);
    }
  });
  const pref_dict = {};
  if (
    era.get(`talent:${cid}:工口意愿`) === 1 ||
    era.get(`talent:${cid}:淫乱`) ||
    era.get(`talent:${cid}:羞耻忍耐`) === -1 ||
    era.get(`talent:${cid}:社交态度`) === -1 ||
    era.get(`love:${cid}`) >= 75
  ) {
    pref_dict['甜言蜜语'] = true;
  }
  if (era.get(`talent:${cid}:荡唇`)) {
    pref_dict['接吻技巧'] = true;
    pref_dict['口交技巧'] = true;
  }
  if (era.get(`talent:${cid}:饮精成瘾`)) {
    pref_dict['口交技巧'] = true;
    pref_dict['阴茎掌握'] = true;
  }
  era.get('talent:0:淫口') > 0 && (pref_dict['口腔掌握'] = true);
  if (era.get(`talent:${cid}:淫口`) > 0 || era.get(`talent:${cid}:喉咙敏感`)) {
    pref_dict['口腔耐性'] = true;
  }
  era.get(`talent:${cid}:妖乳`) && (pref_dict['乳交技巧'] = true);
  era.get('talent:0:淫乳') > 0 && (pref_dict['胸部掌握'] = true);
  era.get(`talent:${cid}:淫乳`) > 0 && (pref_dict['胸部耐性'] = true);
  era.get(`talent:${cid}:神之手`) && (pref_dict['手交技巧'] = true);
  era.get(`talent:${cid}:神之足`) && (pref_dict['足交技巧'] = true);
  era.get('talent:0:淫身') > 0 && (pref_dict['身体掌握'] = true);
  era.get(`talent:${cid}:淫身`) > 0 && (pref_dict['身体耐性'] = true);
  if (era.get(`talent:${cid}:浴精成瘾`)) {
    pref_dict['乳交技巧'] = true;
    pref_dict['手交技巧'] = true;
    pref_dict['足交技巧'] = true;
    pref_dict['身体技巧'] = true;
  }
  if (era.get(`talent:${cid}:气味敏感`)) {
    pref_dict['胸部耐性'] = true;
    pref_dict['身体耐性'] = true;
    !sex && (pref_dict['外阴耐性'] = true);
  }
  if (sex) {
    era.get(`talent:${cid}:凶器`) && (pref_dict['插入技巧'] = true);
    era.get(`talent:${cid}:早泄`) > 0 && (pref_dict['阴茎耐性'] = true);
  }
  my_sex && era.get('talent:0:早泄') > 0 && (pref_dict['阴茎掌握'] = true);
  if (sex - 1) {
    if (era.get(`talent:${cid}:名穴`)) {
      pref_dict['性交技巧'] = true;
    }
    if (era.get(`talent:${cid}:榨精成瘾`)) {
      pref_dict['性交技巧'] = true;
      pref_dict['阴茎掌握'] = true;
    }
  }
  !my_sex && era.get('talent:0:淫核') > 0 && (pref_dict['外阴掌握'] = true);
  my_sex - 1 && era.get('talent:0:淫壶') > 0 && (pref_dict['阴道掌握'] = true);
  !sex && era.get(`talent:${cid}:淫核`) > 0 && (pref_dict['外阴耐性'] = true);
  if (
    sex - 1 &&
    (era.get(`talent:${cid}:淫壶`) > 0 || era.get(`talent:${cid}:子宫敏感`))
  ) {
    pref_dict['阴道耐性'] = true;
  }
  era.get(`talent:${cid}:魔尻`) && (pref_dict['肛交技巧'] = true);
  if (era.get(`talent:${cid}:精液灌肠`)) {
    pref_dict['肛交技巧'] = true;
    pref_dict['阴茎掌握'] = true;
  }
  era.get('talent:0:淫臀') > 0 && (pref_dict['肛门掌握'] = true);
  if (era.get(`talent:${cid}:淫臀`) > 0 || era.get(`talent:${cid}:肠道敏感`)) {
    pref_dict['肛门耐性'] = true;
  }
  if (
    era.get(`talent:${cid}:抖S`) ||
    era.get(`talent:${cid}:小恶魔`) ||
    era.get(`talent:${cid}:变态`)
  ) {
    pref_dict['施虐技巧'] = true;
    pref_dict['受虐掌握'] = true;
  }
  if (
    era.get(`talent:${cid}:喜欢责骂`) > 0 ||
    era.get(`talent:${cid}:喜欢痛苦`) > 0
  ) {
    pref_dict['受虐耐性'] = true;
  }
  const u_rec = {};
  do {
    /** @type {Record<string,number>} */
    const j_dict = {};
    pleasure_list.forEach((part) => {
      const key = `${part_names[part]}快感`;
      j_dict[key] = era.get(`jewel:${cid}:${key}`);
    });

    cand_list = [];
    cand_list = Object.keys(pref_dict);

    if (!cand_list.length) {
      cand_list.push(
        '甜言蜜语',
        '接吻技巧',
        '口交技巧',
        '口腔掌握',
        '口腔耐性',
        '乳交技巧',
        '胸部掌握',
        '胸部耐性',
        '手交技巧',
        '足交技巧',
        '身体技巧',
        '身体掌握',
        '身体耐性',
        '阴茎掌握',
        '外阴掌握',
        '阴道掌握',
        '肛交技巧',
        '肛门掌握',
        '肛门耐性',
        '施虐技巧',
        '受虐掌握',
        '受虐耐性',
      );
      if (sex) {
        cand_list.push('插入技巧', '阴茎耐性');
      }
      if (!sex) {
        cand_list.push('外阴耐性');
      }
      if (sex !== 1) {
        cand_list.push('性交技巧', '阴道耐性');
      }
    }
    cand_list = cand_list.filter(
      (skill) =>
        s_p_dict[skill] instanceof Object &&
        Object.entries(s_p_dict[skill]).filter(([j, p]) => p > j_dict[j])
          .length === 0,
    );
    const u_skill = get_random_entry(cand_list);
    if (u_skill) {
      u_rec[u_skill] = (u_rec[u_skill] || 0) + 1;
      Object.entries(s_p_dict[u_skill]).forEach((e) =>
        era.add(`juel:${cid}:${e[0]}`, -e[1]),
      );
      const level = era.add(`abl:${cid}:${u_skill}`, 1);
      if (level === 5) {
        delete s_p_dict[u_skill];
      } else {
        s_p_dict[u_skill] = get_skill_price(cid, u_skill, level + 1, true);
      }
    }
  } while (cand_list.length > 0);
  era.logger.debug(
    `角色 ${cid} 性技学习完毕！\n${Object.entries(u_rec)
      .map(([s, l]) => `${s}+${l}`)
      .join('，')}`,
  );
}

module.exports = sys_auto_update;
