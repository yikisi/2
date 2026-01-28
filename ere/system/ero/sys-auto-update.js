const era = require('#/era-electron');

const { get_skill_price } = require('#/system/ero/sys-get-juel-price');

const { get_random_entry } = require('#/utils/list-utils');

const { get_skill_list } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

/** @param {number} cid */
function sys_auto_update(cid) {
  if (!cid) {
    return;
  }
  const sex = era.get(`cflag:${cid}:性别`);
  const my_sex = era.get('cflag:0:性别');
  /** @type {array} */
  let cand_list;
  /** @type {Record<string,Record<string,number>>} */
  const s_p_dict = {};
  const available_skill_list = get_skill_list(sex).filter((aid) => {
    const lv = era.get(`abl:${cid}:${aid}`);
    if (lv < 5) {
      s_p_dict[aid] = get_skill_price(cid, aid, lv + 1, true);
      return true;
    }
  });
  const pref_dict = {};
  if (
    era.get(`talent:${cid}:工口意愿`) === 1 ||
    era.get(`talent:${cid}:淫乱`) > 0 ||
    era.get(`talent:${cid}:羞耻忍耐`) === -1 ||
    era.get(`talent:${cid}:社交态度`) === -1 ||
    era.get(`love:${cid}`) >= 75
  ) {
    // ABLNAME:40 = 甜言蜜语
    pref_dict[40] = true;
  }
  if (era.get(`talent:${cid}:荡唇`) > 0) {
    // ABLNAME:10/11 = 接吻/口交技巧
    pref_dict[10] = pref_dict[11] = true;
  }
  if (era.get(`talent:${cid}:饮精成瘾`) > 0) {
    // ABLNAME:11/26 = 口交技巧/阴茎掌握
    pref_dict[11] = pref_dict[26] = true;
  }
  if (era.get('talent:0:淫口') > 0) {
    // ABLNAME:20 = 口腔掌握
    pref_dict[20] = true;
  }
  if (
    era.get(`talent:${cid}:淫口`) > 0 ||
    era.get(`talent:${cid}:喉咙敏感`) > 0
  ) {
    // ABLNAME:30 = 口腔耐性
    pref_dict[30] = true;
  }
  // ABLNAME:12 = 乳交技巧
  era.get(`talent:${cid}:妖乳`) > 0 && (pref_dict[12] = true);
  // ABLNAME:21 = 胸部掌握
  era.get('talent:0:淫乳') > 0 && (pref_dict[21] = true);
  // ABLNAME:31 = 胸部耐性
  era.get(`talent:${cid}:淫乳`) > 0 && (pref_dict[31] = true);
  // ABLNAME:13 = 手交技巧
  era.get(`talent:${cid}:神之手`) > 0 && (pref_dict[13] = true);
  // ABLNAME:14 = 足交技巧
  era.get(`talent:${cid}:神之足`) > 0 && (pref_dict[14] = true);
  // ABLNAME:22 = 身体掌握
  era.get('talent:0:淫身') > 0 && (pref_dict[22] = true);
  // ABLNAME:32 = 身体耐性
  era.get(`talent:${cid}:淫身`) > 0 && (pref_dict[32] = true);
  if (era.get(`talent:${cid}:浴精成瘾`) > 0) {
    // ABLNAME:12 - 15 = 乳交技巧 - 身体技巧
    pref_dict[12] = pref_dict[13] = pref_dict[14] = pref_dict[15] = true;
  }
  if (era.get(`talent:${cid}:气味敏感`) > 0) {
    // ABLNAME:31/32/33 = 胸部/身体/外阴耐性
    pref_dict[31] = pref_dict[32] = true;
    !sex && (pref_dict[33] = true);
  }
  if (sex) {
    // ABLNAME:18 = 插入技巧
    era.get(`talent:${cid}:凶器`) > 0 && (pref_dict[18] = true);
    // ABLNAME:36 = 阴茎耐性
    era.get(`talent:${cid}:早泄`) > 0 && (pref_dict[36] = true);
  }
  // ABLNAME:26 = 阴茎掌握
  my_sex > 0 && era.get('talent:0:早泄') > 0 && (pref_dict[26] = true);
  if (sex !== 1) {
    if (era.get(`talent:${cid}:名穴`) > 0) {
      // ABLNAME:16 = 性交技巧
      pref_dict[16] = true;
    }
    if (era.get(`talent:${cid}:榨精成瘾`) > 0) {
      pref_dict[16] = pref_dict[26] = true;
    }
  }
  // ABLNAME:23/24 = 外阴/阴道掌握
  !my_sex && era.get('talent:0:淫核') > 0 && (pref_dict[23] = true);
  my_sex !== 1 && era.get('talent:0:淫壶') > 0 && (pref_dict[24] = true);
  // ABLNAME:33 = 外阴耐性
  !sex && era.get(`talent:${cid}:淫核`) > 0 && (pref_dict[33] = true);
  if (
    sex !== 1 &&
    (era.get(`talent:${cid}:淫壶`) > 0 || era.get(`talent:${cid}:子宫敏感`) > 0)
  ) {
    // ABLNAME:34 = 阴道耐性
    pref_dict[34] = true;
  }
  // ABLNAME:17 = 肛交技巧
  era.get(`talent:${cid}:魔尻`) > 0 && (pref_dict[17] = true);
  if (era.get(`talent:${cid}:精液灌肠`)) {
    pref_dict[17] = pref_dict[26] = true;
  }
  // ABLNAME:25 = 肛门掌握
  era.get('talent:0:淫臀') > 0 && (pref_dict[25] = true);
  if (
    era.get(`talent:${cid}:淫臀`) > 0 ||
    era.get(`talent:${cid}:肠道敏感`) > 0
  ) {
    // ABLNAME:35 = 肛门耐性
    pref_dict[35] = true;
  }
  if (
    era.get(`talent:${cid}:抖S`) > 0 ||
    era.get(`talent:${cid}:小恶魔`) > 0 ||
    era.get(`talent:${cid}:变态`) > 0
  ) {
    // ABLNAME:19/27 = 施虐技巧/受虐掌握
    pref_dict[19] = pref_dict[27] = true;
  }
  if (
    era.get(`talent:${cid}:喜欢责骂`) > 0 ||
    era.get(`talent:${cid}:喜欢痛苦`) > 0
  ) {
    // ABLNAME:37 = 受虐耐性
    pref_dict[37] = true;
  }
  cand_list = Object.keys(pref_dict);
  for (const k of Object.keys(pref_dict)) {
    if (s_p_dict[k] === void 0) {
      delete pref_dict[k];
    }
  }

  /** @type {Record<string,number>} */
  const j_dict = new Array(9).fill(0).reduce((p, _, jid) => {
    p[jid] = era.get(`jewel:${cid}:${jid}`);
    return p;
  }, {});
  const u_rec = {};
  do {
    cand_list = Object.keys(pref_dict);
    cand_list = cand_list.filter(
      (aid) =>
        s_p_dict[aid] !== void 0 &&
        Object.entries(s_p_dict[aid]).filter(
          ([jid, cost]) => cost > j_dict[jid],
        ).length === 0,
    );
    if (!cand_list.length) {
      cand_list = available_skill_list.filter(
        (aid) =>
          !pref_dict[aid] &&
          s_p_dict[aid] !== void 0 &&
          Object.entries(s_p_dict[aid]).filter(
            ([jid, cost]) => cost > j_dict[jid],
          ).length === 0,
      );
    }
    const u_skill = get_random_entry(cand_list);
    if (u_skill >= 0) {
      u_rec[u_skill] = (u_rec[u_skill] || 0) + 1;
      Object.entries(s_p_dict[u_skill]).forEach(
        ([jid, cost]) => (j_dict[jid] = era.add(`jewel:${cid}:${jid}`, -cost)),
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
      .map(([aid, add_level]) => `${i18n().tb_abl[aid]}+${add_level}`)
      .join('，')}`,
  );
}

module.exports = sys_auto_update;
