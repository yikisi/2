const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const sys_count_juels = require('#/system/chara/sys-count-juels');
const get_ex_result_in_the_end = require('#/system/ero/sub-begin-and-end/get-ex-result-in-the-end');
const get_jewel_result = require('#/system/ero/sub-begin-and-end/get-jewel-result');
const sys_calc_ero_items = require('#/system/ero/sys-calc-ero-item');
const {
  clean_all_parts,
  reset_parts,
} = require('#/system/ero/sys-calc-ero-part');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { clean_juels, init_juels } = require('#/system/ero/sys-calc-juel');
const { clean_palams, init_palams } = require('#/system/ero/sys-calc-palam');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const { item_enum } = require('#/data/ero/item-const');
const {
  base_limit,
  erect_border,
  lust_border,
  lust_from_palam,
  lust_palam_border,
  palam2juel,
} = require('#/data/ero/orgasm-const');
const {
  part2jid,
  part_enum,
  part_talents,
  pleasure_list,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');
const get_display_name = require('#/utils/calc-display-name');

let jewel_keys;

/** @param {number} ids */
function update_ero_status(...ids) {
  for (const cid of ids) {
    const iron_will = era.get(`talent:${cid}:钢之意志`);
    const p_size = get_penis_size(cid);
    let base_buf = 5 * iron_will; // 钢之意志全上限+50%
    if (era.get(`status:${cid}:超马跳Z`)) {
      base_buf -= 3;
    } else if (
      era.get(`status:${cid}:马跳Z`) ||
      era.get(`status:${cid}:马跳S`)
    ) {
      base_buf -= 2;
    } else if (
      era.get(`status:${cid}:弗隆K`) ||
      era.get(`status:${cid}:弗隆P`) ||
      era.get(`status:${cid}:经期`)
    ) {
      base_buf -= 1;
    }
    const c_mec = get_custom_mec(cid);
    pleasure_list.forEach((part) => {
      let limit = base_buf;
      const t_name = part_talents[part];
      if (
        part === part_enum.penis &&
        !era.get(`cflag:${cid}:性别`) &&
        p_size > 0
      ) {
        limit -= Math.max(Math.floor(2.5 * era.get(`talent:${cid}:淫核`)), 1);
      } else if (t_name) {
        limit -= Math.floor(2.5 * era.get(`talent:${cid}:${t_name}`));
      }
      limit = (base_limit * (10 + limit)) / 10;
      const rand_range = Math.min(limit / 10, 100);
      limit += get_random_value(-rand_range, rand_range);
      limit = Math.max(limit + c_mec.get_param_limit_buff(part), 100);
      era.set(
        `tcvar:${cid}:${i18n('zh-CN').tb_param[part2jid[part]]}快感上限`,
        limit,
      );
    });
    if (!era.get(`status:${cid}:沉睡`) && !era.get(`base:${cid}:精力`)) {
      era.set(`tcvar:${cid}:失神`, get_random_value(1, 5));
      era.set(`tcvar:${cid}:精力不济`, 1);
    }
    const i_estrus = era.set(
      `tcvar:${cid}:发情`,
      era.get(`tcvar:${cid}:发情`) ||
        (!era.get('flag:强奸抵抗') && cid > 0) ||
        era.get(`base:${cid}:性欲`) >= lust_border.absent_mind ||
        era.get(`status:${cid}:发情`) ||
        era.get(`status:${cid}:马跳Z`) ||
        era.get(`status:${cid}:超马跳Z`) ||
        era.get(`status:${cid}:马跳S`) ||
        era.get(`status:${cid}:弗隆K`) ||
        era.get(`status:${cid}:弗隆P`),
    );
    if (i_estrus && era.get(`talent:${cid}:淫口`) > 0) {
      set_stain(cid, part_enum.mouth, stain_enum.saliva);
    }
    if (
      i_estrus &&
      era.get(`talent:${cid}:淫乳`) > 0 &&
      era.get(`talent:${cid}:泌乳`) > 0
    ) {
      set_stain(cid, part_enum.breast, stain_enum.milk);
    }
    if (
      era.get(`talent:${cid}:乳头类型`) === 2 &&
      (i_estrus || era.get(`talent:${cid}:淫乳`) === 2)
    ) {
      era.set(`tcvar:${cid}:乳突`, 1);
    }
    if (
      p_size > 0 &&
      (i_estrus ||
        era.get(`status:${cid}:弗隆K`) ||
        era.get(`status:${cid}:弗隆P`))
    ) {
      era.set(
        `param:${cid}:阴茎快感`,
        Math.max(
          Math.ceil(
            (era.get(`tcvar:${cid}:阴茎快感上限`) * erect_border) / 2 + 0.9,
          ),
          era.get(`param:${cid}:阴茎快感`),
        ),
      );
      set_stain(cid, part_enum.penis, stain_enum.semen);
    }
    if (
      era.get(`cflag:${cid}:阴道尺寸`) > 0 &&
      (i_estrus ||
        era.get(`talent:${cid}:淫壶`) > 0 ||
        era.get(`status:${cid}:反避孕套`) > 0)
    ) {
      set_stain(cid, part_enum.virgin, stain_enum.secretion);
    }
    if (
      (i_estrus && era.get(`exp:${cid}:肛交次数`) > get_random_value(5, 15)) ||
      era.get(`talent:${cid}:淫臀`) === 2
    ) {
      set_stain(cid, part_enum.anal, stain_enum.anal);
    }
    if (era.get(`cflag:${cid}:腋毛`) >= 3) {
      set_stain(cid, part_enum.body, stain_enum.dirt);
    }
    if (era.get(`cflag:${cid}:阴毛`) >= 3) {
      set_stain(
        cid,
        p_size ? part_enum.penis : part_enum.clitoris,
        stain_enum.dirt,
      );
    }
  }
}

/**
 * @param {number} cid
 * @param {number} ratio
 */
function update_temp_base(cid, ratio) {
  let temp = era.set(
    `tcvar:${cid}:临时体力`,
    Math.floor(era.get(`maxbase:${cid}:体力`) * ratio * 0.8),
  );
  era.add(`maxbase:${cid}:体力`, temp);
  era.add(`base:${cid}:体力`, temp);
  temp = era.set(
    `tcvar:${cid}:临时精力`,
    Math.floor(era.get(`maxbase:${cid}:精力`) * ratio),
  );
  era.add(`maxbase:${cid}:精力`, temp);
  era.add(`base:${cid}:精力`, temp);
}

/**
 * @param {number} cid
 * @param {string} jname
 * @param {number} val
 * @param {Record<string,number>} dict
 */
function set_jewel_buff(cid, jname, val, dict) {
  const final = Math.min(Math.max(val, -0.99), 1);
  if (dict !== void 0) {
    dict[jname] = final;
  } else {
    era.set(`tcvar:${cid}:${jname}因子加成`, final);
  }
}

/**
 * @param {number} cid
 * @param {Record<string,any>} [dict]
 */
function update_c_j_buff(cid, dict) {
  const l_hate = era.get(`mark:${cid}:反抗`);
  const in_train = era.getCharactersInTrain().length > 0;
  const i_rape = in_train && era.get('tflag:强奸') === 0 && cid > 0;
  const lust = era.get(`base:${cid}:性欲`);
  const lust_buf =
    era.get(`talent:${cid}:淫乱`) / 5 +
    (lust >= lust_border.itch) / 10 +
    ((lust >= lust_border.absent_mind) * 3) / 20 +
    (lust >= lust_border.want_sex) / 4;
  const l_meek = era.get(`mark:${cid}:同心`);
  const l_pain = era.get(`mark:${cid}:苦痛`);
  const l_pleasure = era.get(`mark:${cid}:欢愉`);
  const l_shame = era.get(`mark:${cid}:羞耻`);
  const l_slave = era.get(`mark:${cid}:淫纹`);
  let love_buff = 0;
  if (cid > 0) {
    love_buff = era.get(`love:${cid}`);
    if (love_buff === 100) {
      love_buff = 0.9;
    } else if (love_buff >= 90) {
      love_buff = 0.5;
    } else if (love_buff >= 75) {
      love_buff = 0.2;
    } else {
      love_buff = 0;
    }
  }
  set_jewel_buff(
    cid,
    '顺从',
    ((era.get(`talent:${cid}:自信程度`) +
      era.get(`talent:${cid}:坦率程度`) +
      era.get(`talent:${cid}:工口好奇`) +
      era.get(`talent:${cid}:情感活动`)) *
      3) /
      10 +
      (l_slave === 0
        ? lust_buf / 2 +
          l_pleasure / 10 +
          Math.max(l_pain, l_shame) / 20 +
          l_hate / 20 -
          i_rape
        : l_slave / 10 - 0.1) +
      !cid / 2,
    dict,
  );
  set_jewel_buff(
    cid,
    '痛苦',
    ((era.get(`talent:${cid}:痛苦感受`) +
      era.get(`talent:${cid}:未来期望`) +
      era.get(`talent:${cid}:情感活动`)) *
      3) /
      10 +
      (l_slave * -0.16 ||
        i_rape / 2 +
          l_pain / 10 -
          (l_meek * 3) / 20 -
          l_hate / 20 -
          love_buff / 2 -
          lust_buf / 2),
    dict,
  );
  set_jewel_buff(
    cid,
    '恐惧',
    ((era.get(`talent:${cid}:恐惧感受`) +
      era.get(`talent:${cid}:未来期望`) +
      era.get(`talent:${cid}:社交态度`) +
      era.get(`talent:${cid}:情感活动`)) *
      3) /
      10 +
      (l_slave * -0.33 ||
        i_rape / 2 +
          (era.get(`tequip:${cid}:眼罩`) === item_enum.blindfold) / 2 +
          l_pain / 10 -
          (l_meek * 3) / 20 -
          l_hate / 20 -
          love_buff / 2 -
          lust_buf / 2),
    dict,
  );
  set_jewel_buff(
    cid,
    '羞耻',
    ((era.get(`talent:${cid}:羞耻忍耐`) +
      era.get(`talent:${cid}:贞洁看法`) +
      era.get(`talent:${cid}:社交态度`) +
      era.get(`talent:${cid}:情感活动`)) *
      3) /
      10 +
      i_rape / 2 +
      (l_slave * -0.33 ||
        (in_train && era.get('tflag:全身镜') > 0) / 2 +
          l_shame / 10 -
          (l_meek * 3) / 20 -
          l_hate / 20 -
          (love_buff * 4) / 5 -
          lust_buf / 2),
    dict,
  );
  set_jewel_buff(
    cid,
    '反感',
    0.3 *
      (era.get(`talent:${cid}:反感获取`) +
        era.get(`talent:${cid}:贞洁看法`) +
        era.get(`talent:${cid}:坦率程度`) +
        era.get(`talent:${cid}:工口好奇`) +
        era.get(`talent:${cid}:情感活动`)) +
      (l_slave * -0.33 ||
        i_rape +
          l_hate / 10 +
          l_pain / 20 +
          l_shame / 20 -
          l_meek / 4 -
          love_buff -
          lust_buf / 2),
    dict,
  );
  set_jewel_buff(
    cid,
    '施虐',
    lust_buf +
      (era.get(`talent:${cid}:小恶魔`) + era.get(`talent:${cid}:变态`)) / 2,
    dict,
  );
  set_jewel_buff(
    cid,
    '受虐',
    lust_buf +
      (era.get(`talent:${cid}:圣母`) + era.get(`talent:${cid}:变态`)) / 2,
    dict,
  );
  set_jewel_buff(cid, '口腔', lust_buf, dict);
  set_jewel_buff(
    cid,
    '胸部',
    lust_buf + era.get(`talent:${cid}:乳房尺寸`) / 5,
    dict,
  );
  set_jewel_buff(cid, '身体', lust_buf, dict);
  set_jewel_buff(cid, '外阴', lust_buf, dict);
  set_jewel_buff(cid, '阴道', lust_buf, dict);
  set_jewel_buff(cid, '肛门', lust_buf, dict);
  set_jewel_buff(cid, '阴茎', lust_buf, dict);
}

/** @param {number} ids */
function update_juel_buff(...ids) {
  ids.forEach((cid) => update_c_j_buff(cid));
}

/** @param {number} ids */
function init_ero(...ids) {
  ids = ids.filter((cid) => era.get(`tcvar:${cid}`) === undefined);
  era.addCharacterForTrain(...ids);
  update_ero_status(...ids);
  update_juel_buff(...ids);
  init_palams(...ids);
  init_juels(...ids);
  reset_parts(...ids);
  sys_calc_ero_items.init_items(...ids);
  for (const cid of ids) {
    const height = era.get(`cflag:${cid}:身高`);
    era.set(
      `tcvar:${cid}:体重`,
      20 * (height / 100) ** 2 + (era.get(`base:${cid}:体重偏差`) * 10) / 2000,
    );
    era.set(`tcvar:${cid}:嘴唇位置`, height * 0.12);
    era.set(`tcvar:${cid}:肩膀位置`, height * 0.2);
    era.set(`tcvar:${cid}:乳房位置`, height * 0.28);
    era.set(`tcvar:${cid}:会阴位置`, height * 0.5);
    era.set(`tcvar:${cid}:臂长`, height * 0.4);
    era.set(`tcvar:${cid}:性欲缓存`, era.get(`base:${cid}:性欲`));
    era.set(`tcvar:${cid}:压力缓存`, era.get(`base:${cid}:压力`));
    let temp;
    era.set(
      `tcvar:${cid}:体力缓存`,
      Math.max(
        Math.min(
          (temp = era.set(
            `base:${cid}:体力`,
            Math.floor(era.get(`base:${cid}:体力`)),
          )) * get_random_value(0.6, 0.8, true),
          temp - 100,
        ),
        1,
      ),
    );
    era.set(
      `tcvar:${cid}:精力缓存`,
      Math.max(
        Math.min(
          (temp = era.set(`base:${cid}:精力`, era.get(`base:${cid}:精力`))) *
            get_random_value(0.6, 0.8, true),
          temp - 100,
        ),
        1,
      ),
    );
    if (era.get(`status:${cid}:超马跳Z`)) {
      update_temp_base(cid, 0.4);
    }
    // CFLAGNAME:1 = 种族
    if (cid > 0 && era.get(`cflag:${cid}:1`) > 0) {
      // CFLAGNAME:48 = 育成回合计时
      let edu_phase = era.get(`cflag:${cid}:48`);
      if (edu_phase < 3 * 48) {
        const juels = sys_count_juels(cid, Math.floor(edu_phase / 48) / 3);
        // TCVARNAME:70 - 72 = 粉因子 - 白因子
        era.set(`tcvar:${cid}:70`, Math.floor(juels.pink));
        era.set(`tcvar:${cid}:71`, Math.floor(juels.blue));
        era.set(`tcvar:${cid}:72`, Math.floor(juels.white));
      } else {
        for (let i = 0; i < 3; ++i) {
          // TCVARNAME:70 - 72 = 粉因子 - 白因子
          // JEWELNAME:20 - 22 = 粉 - 白
          era.set(`tcvar:${cid}:${70 + i}`, era.get(`jewel:${cid}:${20 + i}`));
        }
      }
    }
    if (
      cid > 0 &&
      era.get(`love:${cid}`) >= 90 &&
      era.get(`cflag:${cid}:性别`) !== 1 &&
      era.get(`status:${cid}:经期`) === 0 &&
      era.get(`cflag:${cid}:妊娠阶段`) === 1 << pregnant_stage_enum.no &&
      (sys_check_yandere(cid, (y) => y > 0) ||
        era.get(`status:${cid}:爱意克制`) > 0)
    ) {
      if (
        Math.random() <
        era.get(`talent:${cid}:病娇`) * 0.4 +
          (era.get(`status:${cid}:爱意克制`) > 0) * 0.2
      ) {
        era.set(`status:${cid}:反避孕套`, 1);
      }
    }
    if (
      era.get(`status:${cid}:爱意克制`) > 0 &&
      era.getCharactersInTrain().some((e) => !e) &&
      sys_check_awake(0)
    ) {
      era.set(`status:${cid}:爱意克制`, 0);
    }
  }
}

/** @param {number} ids */
function begin_and_init_ero(...ids) {
  if (jewel_keys === void 0) {
    jewel_keys = era.get('jewelkeys').slice(0, 13);
  }
  era.beginTrain();
  era.set('tflag:回合', 1);
  era.set('tflag:前回行动', -1);
  era.set('tflag:对手行动', -1);
  era.set('tflag:强奸', -1);
  init_ero(...ids);
}

/**
 * @param {boolean} skip_jewels
 * @param {boolean} log_jewels
 * @param {number[]} ids
 * @returns {{attr:Record<string,(PrintedSpan|string)[][]>,[jewel]:Record<string,Record<string,number>>}}
 */
function end_ero(skip_jewels, log_jewels, ids) {
  let ret = { attr: {}, jewel: {} };
  sys_calc_ero_items.remove_all_items(...ids);
  clean_all_parts(...ids);
  const includes_me = ids.includes(0);
  const is_slave = includes_me && era.get('flag:惩戒力度') >= 2;
  const is_sex = includes_me && ids.length > 1;
  const is_sleeping = is_sex && !sys_check_awake(0);
  for (const cid of ids) {
    if (is_sex) {
      era.add(`exp:${cid}:性爱次数`, 1);
    }
    if (is_sleeping) {
      era.add(`exp:${cid}:睡奸次数`, 1);
    }
    era.add(`love:${cid}`, !era.get(`love:${cid}`));
    pleasure_list.forEach((part) => {
      const pname = i18n('zh-CN').tb_param[part2jid[part]];
      if (
        era.get(`param:${cid}:${pname}快感`) >
        era.get(`tcvar:${cid}:${pname}快感上限`) * lust_palam_border
      ) {
        let times = 1;
        const talent_name = part_talents[part];
        if (talent_name) {
          switch (era.get(`talent:${cid}:${talent_name}`)) {
            case -4:
              times += 1;
              break;
            case 1:
              times += 0.2;
              break;
            case 2:
              times += 0.5;
          }
        }
        sys_change_lust(cid, lust_from_palam * times);
      }
    });
    const got = new Array(13).fill(0);
    const un_got = new Array(13).fill(0);
    ret.jewel[cid] = {};
    for (let i = 12; i >= 0; --i) {
      got[i] = Math.floor(
        era.get(`gotjewel:${cid}:${jewel_keys[i]}`) / palam2juel,
      );
      if (!skip_jewels && i < 12) {
        un_got[i] = got[i + 1] + un_got[i + 1];
      }
    }
    const got_self_protect = Math.floor(
      era.get(`gotjewel:${cid}:自卫`) / palam2juel,
    );
    let self_protect =
      skip_jewels || !cid
        ? 0
        : Math.min(
            era.get(`jewel:${cid}:自卫`) + got_self_protect,
            un_got[0] + got[0],
          );
    era.add(`jewel:${cid}:自卫`, got_self_protect - self_protect);
    if (log_jewels) {
      // JEWELNAME:15 = 自卫
      ret.jewel[cid][15] = got_self_protect;
      ret.jewel[cid][-15] = self_protect;
    }
    jewel_keys.forEach((jid, i) => {
      const lost = get_random_value(
        Math.max(self_protect - un_got[i], 0),
        Math.min(got[i], self_protect),
      );
      got[i] -= lost;
      self_protect -= lost;
      era.add(`jewel:${cid}:${jid}`, got[i]);
      if (log_jewels) {
        ret.jewel[cid][jid] = got[i];
        ret.jewel[cid][`-${jid}`] = lost;
      }
    });
    const s_orgasm_count = era.get(`ex:${cid}:施虐高潮`);
    const m_orgasm_count = era.get(`ex:${cid}:受虐高潮`);
    if (s_orgasm_count) {
      sys_change_pressure(
        cid,
        -100 * (1 + 3 * era.get(`talent:${cid}:抖S`)) * s_orgasm_count,
      );
    }
    if (m_orgasm_count) {
      sys_change_pressure(
        cid,
        -100 *
          (1 +
            3 *
              (era.get(`talent:${cid}:喜欢责骂`) ||
                era.get(`talent:${cid}:喜欢痛苦`))) *
          m_orgasm_count,
      );
    }
    sys_change_pressure(
      cid,
      -200 * (era.get(`ex:${cid}:TotalEX`) - s_orgasm_count - m_orgasm_count),
    );
    let temp;
    if ((temp = era.get(`tcvar:${cid}:临时体力`))) {
      era.add(`base:${cid}:体力`, -temp);
      era.add(`maxbase:${cid}:体力`, -temp);
    }
    if ((temp = era.get(`tcvar:${cid}:临时精力`))) {
      era.add(`base:${cid}:精力`, -temp);
      era.add(`maxbase:${cid}:精力`, -temp);
    }
    era.get(`tcvar:${cid}:精力不济`) && era.set(`base:${cid}:精力`, 0);
    era.set(
      `base:${cid}:体力`,
      Math.floor(
        Math.min(era.get(`base:${cid}:体力`), era.get(`tcvar:${cid}:体力缓存`)),
      ),
    );
    era.set(
      `base:${cid}:精力`,
      Math.floor(
        Math.min(era.get(`base:${cid}:精力`), era.get(`tcvar:${cid}:精力缓存`)),
      ),
    );
    if (cid > 0 && is_slave) {
      sys_change_fame(
        Math.max(
          era.get(`tcvar:${cid}:性欲缓存`) - era.get(`base:${cid}:性欲`),
          0,
        ) /
          200 +
          Math.max(
            era.get(`tcvar:${cid}:压力缓存`) - era.get(`base:${cid}:压力`),
            0,
          ) /
            100,
      );
    }
    ret.attr[cid] = base_attr_list.map((a, i) =>
      sys_change_attr_and_print(
        cid,
        a,
        // EXNAME:27 - 31 = 速度获取 - 智力获取
        era.get(`ex:${cid}:${27 + i}`) / get_random_value(4, 6),
      ),
    );
    let pt = era.get(`ex:${cid}:技能点获取`);
    if (pt > 0) {
      pt = Math.floor(pt / get_random_value(8, 12));
      ret.attr[cid].push(
        i18n().ui_get_pt_template.replace('%PT%', pt.toLocaleString()),
      );
      era.add(`exp:${cid}:技能点数`, pt);
    }
  }
  if (includes_me) {
    for (const cid of ids) {
      // CFLAGNAME:1 = 种族
      if (cid > 0 && era.get(`cflag:${cid}:1`) > 0) {
        // TCVARNAME:73 = 获得因子
        let got = Math.floor(era.get(`tcvar:${cid}:73`) / palam2juel);
        // TCVARNAME:70 - 72 = 粉因子 - 白因子
        let jewels = new Array(3)
          .fill(0)
          .map((_, i) => era.get(`tcvar:${cid}:${70 + i}`));
        if (got > 0) {
          if (got < jewels.reduce((p, c) => p + c, 0)) {
            jewels = jewels.map((e, i, l) => {
              const val = get_random_value(
                Math.max(got - l.slice(i + 1).reduce((p, c) => p + c, 0), 0),
                got,
              );
              got -= val;
              return val;
            });
          }
          // JEWELNAME:20 - 22 = 粉 - 白
          jewels.forEach((e, i) => era.add(`gotjewel:0:${20 + i}`, e));
          if (era.get(`cflag:${cid}:殿堂`) > 0) {
            CharaAvailableGenes.merge_into_player(new CharaAvailableGenes(cid));
          }
        }
      }
    }
    // JEWELNAME:20 - 22 = 粉 - 白
    for (let jid = 20; jid <= 22; ++jid) {
      era.add(
        `jewel:0:${jid}`,
        (ret.jewel[0][jid] = era.get(`gotjewel:0:${jid}`)),
      );
    }
  }
  if (!log_jewels) {
    ret.jewel = void 0;
  }
  era
    .get('jewelkeys')
    .forEach((jid) =>
      ids.forEach((cid) => era.set(`gotjewel:${cid}:${jid}`, 0)),
    );
  return ret;
}

/** @param {boolean} [skip_juels=false] */
function end_ero_and_train(skip_juels = false) {
  clean_juels();
  clean_palams();
  end_ero(skip_juels, false, era.getCharactersInTrain());
  era.endTrain();
}

/** @param {boolean} [shown=true] */
async function end_ero_and_show_result(shown = true) {
  clean_juels();
  clean_palams();
  const chara_list = era.getCharactersInTrain();
  const info = end_ero(false, shown, chara_list);
  if (shown) {
    if (era.get('flag:马跳结果显示简报') > 0 || era.get('tflag:装睡') > 0) {
      for (const cid of chara_list) {
        const buffer = get_jewel_result(
          cid,
          jewel_keys,
          info.jewel[cid],
          info.attr[cid],
        );
        era.printMultiColumns(buffer, { width: 18 });
        await era.waitAnyKey();
      }
    } else {
      let result_flag = true;
      let page = 0;
      let chara_index = 0;
      era.println();
      await i18n().timon.ero_sys.ero_report(
        get_chara_talk(302),
        get_chara_talk(301),
        get_chara_talk(306),
        get_chara_talk(202),
        get_chara_talk(203),
      );
      while (result_flag) {
        await era.clear();
        era.setToBottom();
        era.drawLine({ content: i18n().sex.result_title, position: 'left' });
        switch (page) {
          case 0:
            era.printMultiColumns(
              get_jewel_result(
                chara_list[chara_index],
                jewel_keys,
                info.jewel[chara_list[chara_index]],
                info.attr[chara_list[chara_index]],
              ),
              { width: 18 },
            );
            break;
          case 1:
            era.printMultiColumns(
              get_ex_result_in_the_end(chara_list[chara_index]),
              { width: 18 },
            );
        }
        era.setVerticalAlign('middle');
        era.printInColRows(
          [{ type: 'divider' }],
          {
            columns: [
              { accelerator: 4, content: i18n().ui_pg_prev, type: 'button' },
            ],
            config: { width: 6 },
          },
          {
            columns: [
              {
                accelerator: 8,
                config: { disabled: chara_list[chara_index - 1] === undefined },
                content: i18n().detail.prev_template.replace(
                  '%NAME%',
                  get_display_name(
                    era.get(`callname:${chara_list[chara_index - 1]}:-2`),
                  ),
                ),
                type: 'button',
              },
              {
                accelerator: 2,
                config: { disabled: chara_list[chara_index + 1] === undefined },
                content: i18n().detail.next_template.replace(
                  '%NAME%',
                  get_display_name(
                    era.get(`callname:${chara_list[chara_index + 1]}:-2`),
                  ),
                ),
                type: 'button',
              },
            ],
            config: { width: 6 },
          },
          {
            columns: [
              { accelerator: 6, content: i18n().ui_pg_next, type: 'button' },
            ],
            config: { width: 6 },
          },
          {
            columns: [
              {
                accelerator: 999,
                config: { align: 'right' },
                content: i18n().ui_end,
                type: 'button',
              },
            ],
            config: { width: 6 },
          },
        );
        era.setVerticalAlign('top');
        const ret = await era.input();
        switch (ret) {
          case 2:
            chara_index++;
            break;
          case 4:
            page = (page + 1) % 2;
            break;
          case 6:
            page = (page + 1) % 2;
            break;
          case 8:
            chara_index--;
            break;
          case 999:
          default:
            result_flag = false;
        }
      }
    }
    era.drawLine();
  }
  era.endTrain();
}

module.exports = {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  get_characters_in_train() {
    return era
      .getCharactersInTrain()
      .filter((e) => !era.get(`tcvar:${e}:逃跑`));
  },
  init_ero,
  set_palam_to_max(cid, ...parts) {
    parts.forEach((part) => {
      const pkey = i18n('zh-CN').tb_param[part2jid[part]];
      if (pkey && era.get(`tcvar:${cid}:${pkey}快感上限`)) {
        era.set(
          `param:${cid}:${pkey}快感`,
          Math.max(
            era.get(`param:${cid}:${pkey}快感`),
            era.get(`tcvar:${cid}:${pkey}快感上限`),
          ),
        );
      }
    });
  },
  update_c_j_buff,
  update_ero_status,
  update_juel_buff,
  update_temp_base,
};
