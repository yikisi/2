const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const get_display_name = require('#/utils/calc-display-name');

const { get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceHistory = require('#/data/race/model/race-history');
const { race_infos } = require('#/data/race/race-const');
const { track2location } = require('#/data/race/race-location');
const { skills_dict } = require('#/data/race/skill/skill-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @returns {PseudoUma}
 */
function sys_get_chara_pseudo(cid) {
  // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
  const adapt_list = new Array(10)
    .fill(0)
    .map((_, i) => era.get(`cflag:${cid}:${30 + i}`));
  const uma = new PseudoUma(
    cid,
    get_display_name(era.get(`callname:${cid}:-1`)),
    cid === 0
      ? get_chara_color(Math.max(era.get(`cflag:0:模版角色`), 0))
      : get_chara_color(cid),
    era.get(`cflag:${cid}:干劲`),
    // BASENAME:5 - 9 = 速度 - 智力
    new Array(5).fill(0).map((_, i) => era.get(`base:${cid}:${5 + i}`)),
    era.get(`cflag:${cid}:跑法`),
    adapt_list.slice(6, 10),
    adapt_list.slice(2, 6),
    adapt_list.slice(0, 2),
    CharaSkills.get(cid)
      .get()
      .map((e) => skills_dict[e]),
  );
  uma.chara = sys_get_chara(cid);
  uma.base.winCount = RaceHistory.get(cid)
    .get_values()
    .filter((e) => e.rank === 1).length;
  const debuff = era.get(`status:${cid}:客场作战`);
  if (debuff > 0) {
    uma.ground_buffs.push([
      (-debuff).toString(),
      i18n().tb_status.r_away_race(debuff),
    ]);
    uma.dis_buffs.push([
      (-debuff).toString(),
      i18n().tb_status.r_away_race(debuff),
    ]);
  }
  let temp;
  if ((temp = era.get(`status:${cid}:疲惫`))) {
    uma.attr_buffs.forEach((l) =>
      l.push([`-${5 * temp}%`, i18n().tb_status.r_tired(temp)]),
    );
  }
  if (era.get(`status:${cid}:领域`)) {
    uma.attr_buffs.forEach((l) => l.push(['+5%', i18n().tb_status.r_field]));
  }
  if ((temp = era.get(`status:${cid}:水土不服`))) {
    uma.attr_buffs
      .slice(0, 3)
      .forEach((l) =>
        l.push([`-${5 * temp}%`, i18n().tb_status.r_body_off(temp)]),
      );
  }
  if ((temp = era.get(`status:${cid}:语言不通`))) {
    uma.attr_buffs
      .slice(3)
      .forEach((l) =>
        l.push([`-${5 * temp}%`, i18n().tb_status.r_tong_tie(temp)]),
      );
  }
  const stamina_ratio =
      era.get(`base:${cid}:体力`) / era.get(`maxbase:${cid}:体力`),
    time_ratio = era.get(`base:${cid}:精力`) / era.get(`maxbase:${cid}:精力`);
  if (stamina_ratio < 0.3) {
    uma.attr_buffs
      .slice(0, 3)
      .forEach((l) => l.push(['-50%', i18n().tb_status.r_hp_low]));
  } else if (stamina_ratio < 0.5) {
    uma.attr_buffs
      .slice(0, 3)
      .forEach((l) => l.push(['-20%', i18n().tb_status.r_hp_ins]));
  }
  if (time_ratio < 0.3) {
    uma.attr_buffs
      .slice(3)
      .forEach((l) => l.push(['-50%', i18n().tb_status.r_tp_low]));
  } else if (time_ratio < 0.5) {
    uma.attr_buffs
      .slice(3)
      .forEach((l) => l.push(['-20%', i18n().tb_status.r_tp_ins]));
  }
  switch (era.get(`cflag:${cid}:妊娠阶段`)) {
    // 早期
    case 1 << pregnant_stage_enum.embryo:
      uma.attr_buffs.forEach((l) =>
        l.push(['-5%', i18n().tb_status.r_p_embryo]),
      );
      break;
    // 安定
    case 1 << pregnant_stage_enum.fetal:
      uma.attr_buffs.forEach((l) =>
        l.push(['+5%', i18n().tb_status.r_p_fetal]),
      );
      break;
    // 晚期
    case 1 << pregnant_stage_enum.late:
      uma.attr_buffs.forEach((l) =>
        l.push(['-10%', i18n().tb_status.r_p_late]),
      );
  }
  get_custom_mec(uma.index_chara).set_pseudo_uma(uma);
  const info = race_infos[era.get('flag:当前赛事')];
  uma.calc_attrs(info.ground, info.distance);
  // FLAGNAME:7 = 当前赛事
  temp = track2location[race_infos[era.get('flag:7')].track];
  if (temp) {
    uma.base.language = era.get(`abl:${cid}:${temp.lan}`);
  }
  temp = uma.attrs.reduce((p, c) => p + c, 0) / 5;
  uma.base.attr_err = uma.attrs.reduce((p, c) => p + (c - temp) ** 2, 0) / 5;
  uma.base.research_lv = new Array(5)
    .fill(0)
    // ABLNAME:0-4 = 速度训练等级 - 智力训练等级
    .reduce((p, _, i) => p + era.get(`abl:${cid}:${i}`), 0);

  // 带玩具比赛
  uma.ero.main = [];
  if (era.get(`talent:${cid}:钢之意志`) > 0) {
    uma.ero.buff.sex = -0.5;
  }
  if (
    era.get(`status:${cid}:马跳Z`) > 0 ||
    era.get(`base:${cid}:性欲`) >= lust_border.absent_mind ||
    era.get(`status:${cid}:发情`) > 0
  ) {
    uma.ero.buff.sex += 0.25;
  } else if (
    era.get(`status:${cid}:弗隆K`) > 0 ||
    era.get(`status:${cid}:弗隆P`) > 0 ||
    era.get(`status:${cid}:经期`) > 0
  ) {
    uma.ero.buff.sex += 0.1;
  }
  const inmon = CharaInmon.get(cid);
  if (inmon.on(plugin_enum.al_u1)) {
    uma.ero.buff.sex += 0.5;
  } else if (inmon.on(plugin_enum.al_u2)) {
    uma.ero.buff.sex += 1;
  } else if (inmon.on(plugin_enum.al_u3)) {
    uma.ero.buff.sex += 2;
  } else if (inmon.on(plugin_enum.al_d1)) {
    uma.ero.buff.sex -= 0.1;
  } else if (inmon.on(plugin_enum.al_d2)) {
    uma.ero.buff.sex -= 0.3;
  } else if (inmon.on(plugin_enum.al_d3)) {
    uma.ero.buff.sex -= 0.7;
  }
  uma.ero.buff.penis =
    uma.ero.buff.clitoris =
    uma.ero.buff.anal =
      uma.ero.buff.sex;
  const a_talent = era.get(`talent:${cid}:淫臀`);
  if (a_talent >= 0) {
    uma.ero.buff.anal += a_talent / 2;
  } else {
    uma.ero.buff.anal -= 0.5;
  }
  if (inmon.on(plugin_enum.an_u1)) {
    uma.ero.buff.anal += 1;
  } else if (inmon.on(plugin_enum.an_u2)) {
    uma.ero.buff.anal += 2;
  } else if (inmon.on(plugin_enum.an_u3)) {
    uma.ero.buff.anal += 4;
  } else if (inmon.on(plugin_enum.an_d1)) {
    uma.ero.buff.anal -= 0.2;
  } else if (inmon.on(plugin_enum.an_d2)) {
    uma.ero.buff.anal -= 0.4;
  } else if (inmon.on(plugin_enum.an_d3)) {
    uma.ero.buff.anal -= 0.8;
  }
  uma.ero.cost.anal = -0.1 * era.get(`abl:${cid}:肛门耐性`);
  const sex = era.get(`cflag:${cid}:性别`);
  if (sex !== 1) {
    uma.ero.buff.breast = uma.ero.buff.virgin = uma.ero.buff.sex;
    const b_talent = era.get(`talent:${cid}:淫乳`);
    if (b_talent >= 0) {
      uma.ero.buff.breast += b_talent / 2;
    } else {
      uma.ero.buff.breast -= 0.5;
    }
    if (inmon.on(plugin_enum.br_u1)) {
      uma.ero.buff.breast += 1;
    } else if (inmon.on(plugin_enum.br_u2)) {
      uma.ero.buff.breast += 2;
    } else if (inmon.on(plugin_enum.br_u3)) {
      uma.ero.buff.breast += 4;
    } else if (inmon.on(plugin_enum.br_d1)) {
      uma.ero.buff.breast -= 0.2;
    } else if (inmon.on(plugin_enum.br_d2)) {
      uma.ero.buff.breast -= 0.4;
    } else if (inmon.on(plugin_enum.br_d3)) {
      uma.ero.buff.breast -= 0.8;
    }
    uma.ero.cost.breast = -0.1 * era.get(`abl:${cid}:胸部耐性`);
    const v_talent = era.get(`talent:${cid}:淫壶`);
    if (v_talent >= 0) {
      uma.ero.buff.virgin += v_talent / 2;
    } else {
      uma.ero.buff.virgin -= 0.5;
    }
    if (inmon.on(plugin_enum.vi_u1)) {
      uma.ero.buff.virgin += 1;
    } else if (inmon.on(plugin_enum.vi_u2)) {
      uma.ero.buff.virgin += 2;
    } else if (inmon.on(plugin_enum.vi_u3)) {
      uma.ero.buff.virgin += 4;
    } else if (inmon.on(plugin_enum.vi_d1)) {
      uma.ero.buff.virgin -= 0.2;
    } else if (inmon.on(plugin_enum.vi_d2)) {
      uma.ero.buff.virgin -= 0.4;
    } else if (inmon.on(plugin_enum.vi_d3)) {
      uma.ero.buff.virgin -= 0.8;
    }
    uma.ero.cost.virgin = -0.1 * era.get(`abl:${cid}:阴道耐性`);
    uma.ero.main.push('virgin');
  }
  const is_drug_penis =
    era.get(`status:${cid}:弗隆K`) > 0 || era.get(`status:${cid}:弗隆P`) > 0;
  if (sex > 0 || is_drug_penis) {
    uma.ero.buff.penis = uma.ero.buff.sex;
    const p_talent =
      sex === 0 ? era.get(`talent:${cid}:淫核`) : era.get(`talent:${cid}:早泄`);
    if (p_talent >= 0) {
      uma.ero.buff.penis += p_talent / 2;
    } else {
      uma.ero.buff.penis -= 0.5;
    }
    if (inmon.on(plugin_enum.pe_u1)) {
      uma.ero.buff.penis += 1;
    } else if (inmon.on(plugin_enum.pe_u2)) {
      uma.ero.buff.penis += 2;
    } else if (inmon.on(plugin_enum.pe_u3)) {
      uma.ero.buff.penis += 4;
    } else if (inmon.on(plugin_enum.pe_d1)) {
      uma.ero.buff.penis -= 0.2;
    } else if (inmon.on(plugin_enum.pe_d2)) {
      uma.ero.buff.penis -= 0.4;
    } else if (inmon.on(plugin_enum.pe_d3)) {
      uma.ero.buff.penis -= 0.8;
    }
    uma.ero.cost.penis = -0.1 * era.get(`abl:${cid}:阴茎耐性`);
    uma.ero.main.push('penis');
  } else {
    uma.ero.buff.clitoris = uma.ero.buff.sex;
    const c_talent = era.get(`talent:${cid}:淫核`);
    if (c_talent >= 0) {
      uma.ero.buff.clitoris += c_talent / 2;
    } else {
      uma.ero.buff.clitoris -= 0.5;
    }
    if (inmon.on(plugin_enum.cl_u1)) {
      uma.ero.buff.clitoris += 1;
    } else if (inmon.on(plugin_enum.cl_u2)) {
      uma.ero.buff.clitoris += 2;
    } else if (inmon.on(plugin_enum.cl_u3)) {
      uma.ero.buff.clitoris += 4;
    } else if (inmon.on(plugin_enum.cl_d1)) {
      uma.ero.buff.clitoris -= 0.2;
    } else if (inmon.on(plugin_enum.cl_d2)) {
      uma.ero.buff.clitoris -= 0.4;
    } else if (inmon.on(plugin_enum.cl_d3)) {
      uma.ero.buff.clitoris -= 0.8;
    }
    uma.ero.cost.clitoris = -0.1 * era.get(`abl:${cid}:外阴耐性`);
  }
  Object.keys(uma.ero.buff).forEach(
    (k) => (uma.ero.buff[k] = Math.max(uma.ero.buff[k], -0.99)),
  );
  return uma;
}

module.exports = sys_get_chara_pseudo;
