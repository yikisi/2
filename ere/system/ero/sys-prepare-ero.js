const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const sys_count_juels = require('#/system/chara/sys-count-juels');
const get_ex_result_in_the_end = require('#/system/ero/sub-begin-and-end/get-ex-result-in-the-end');
const get_juel_result = require('#/system/ero/sub-begin-and-end/get-juel-result');
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
  part_enum,
  part_names,
  part_talents,
  pleasure_list,
} = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { gene_juel_names } = require('#/data/other-const');
const { attr_enum, attr_names } = require('#/data/train-const');

let jewel_names;

/** @param {number} ids */
function update_ero_status(...ids) {
  for (const cid of ids) {
    const iron_will = era.get(`talent:${cid}:钢之意志`);
    const penis_size = get_penis_size(cid);
    let base_buff = 5 * iron_will; // 钢之意志全上限+50%
    if (era.get(`status:${cid}:超马跳Z`)) {
      base_buff -= 3;
    } else if (
      era.get(`status:${cid}:马跳Z`) ||
      era.get(`status:${cid}:马跳S`)
    ) {
      base_buff -= 2;
    } else if (
      era.get(`status:${cid}:弗隆K`) ||
      era.get(`status:${cid}:弗隆P`) ||
      era.get(`status:${cid}:经期`)
    ) {
      base_buff -= 1;
    }
    const chara_mec = get_custom_mec(cid);
    pleasure_list.forEach((part) => {
      let limit = base_buff;
      const talent_name = part_talents[part];
      if (
        part === part_enum.penis &&
        !era.get(`cflag:${cid}:性别`) &&
        penis_size
      ) {
        limit -= Math.max(Math.floor(2.5 * era.get(`talent:${cid}:淫核`)), 1);
      } else if (talent_name) {
        limit -= Math.floor(2.5 * era.get(`talent:${cid}:${talent_name}`));
      }
      limit = (base_limit * (10 + limit)) / 10;
      const random_range = Math.min(limit / 10, 100);
      limit += get_random_value(-random_range, random_range);
      limit = Math.max(limit + chara_mec.get_palam_limit_buff(part), 100);
      era.set(`tcvar:${cid}:${part_names[part]}快感上限`, limit);
    });
    if (!era.get(`status:${cid}:沉睡`) && !era.get(`base:${cid}:精力`)) {
      era.set(`tcvar:${cid}:失神`, get_random_value(1, 5));
      era.set(`tcvar:${cid}:精力不济`, 1);
    }
    const estrus = era.set(
      `tcvar:${cid}:发情`,
      era.get(`tcvar:${cid}:发情`) ||
        !era.get('flag:强奸抵抗') ||
        era.get(`base:${cid}:性欲`) >= lust_border.absent_mind ||
        era.get(`status:${cid}:发情`) ||
        era.get(`status:${cid}:马跳Z`) ||
        era.get(`status:${cid}:超马跳Z`) ||
        era.get(`status:${cid}:马跳S`) ||
        era.get(`status:${cid}:弗隆K`) ||
        era.get(`status:${cid}:弗隆P`),
    );
    if (estrus && era.get(`talent:${cid}:淫口`)) {
      set_stain(cid, part_enum.mouth, stain_enum.saliva);
    }
    if (
      estrus &&
      era.get(`talent:${cid}:淫乳`) &&
      era.get(`talent:${cid}:泌乳`)
    ) {
      set_stain(cid, part_enum.breast, stain_enum.milk);
    }
    if (
      era.get(`talent:${cid}:乳头类型`) === 2 &&
      (estrus || era.get(`talent:${cid}:淫乳`))
    ) {
      era.set(`tcvar:${cid}:乳突`, 1);
    }
    if (
      penis_size &&
      (estrus ||
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
      era.get(`cflag:${cid}:阴道尺寸`) &&
      (estrus ||
        era.get(`talent:${cid}:淫壶`) ||
        era.get(`status:${cid}:反避孕套`))
    ) {
      set_stain(cid, part_enum.virgin, stain_enum.secretion);
    }
    if (estrus || era.get(`talent:${cid}:淫臀`) === 2) {
      set_stain(cid, part_enum.anal, stain_enum.anal);
    }
    if (era.get(`cflag:${cid}:腋毛`) >= 3) {
      set_stain(cid, part_enum.body, stain_enum.dirt);
    }
    if (era.get(`cflag:${cid}:阴毛`) >= 3) {
      set_stain(
        cid,
        penis_size ? part_enum.penis : part_enum.clitoris,
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
 * @param {string} juel_name
 * @param {number} val
 */
function set_juel_buff(cid, juel_name, val) {
  era.set(
    `tcvar:${cid}:${juel_name}因子加成`,
    Math.min(Math.max(val, -0.99), 1),
  );
}

/** @param {number} ids */
function update_juel_buff(...ids) {
  for (const cid of ids) {
    const hate_level = era.get(`mark:${cid}:反抗`);
    const is_raping = era.get('tflag:强奸') === 0 && cid > 0;
    const lust = era.get(`base:${cid}:性欲`);
    const lust_buff =
      era.get(`talent:${cid}:淫乱`) / 5 +
      (lust >= lust_border.itch) / 10 +
      ((lust >= lust_border.absent_mind) * 3) / 20 +
      (lust >= lust_border.want_sex) / 4;
    const meek_level = era.get(`mark:${cid}:同心`);
    const pain_level = era.get(`mark:${cid}:苦痛`);
    const pleasure_level = era.get(`mark:${cid}:欢愉`);
    const shame_level = era.get(`mark:${cid}:羞耻`);
    const slave_level = era.get(`mark:${cid}:淫纹`);
    let love_buff = 0;
    if (cid) {
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
    set_juel_buff(
      cid,
      '顺从',
      ((era.get(`talent:${cid}:自信程度`) +
        era.get(`talent:${cid}:坦率程度`) +
        era.get(`talent:${cid}:工口好奇`) +
        era.get(`talent:${cid}:情感活动`)) *
        3) /
        10 +
        (slave_level === 0
          ? lust_buff / 2 +
            pleasure_level / 10 +
            Math.max(pain_level, shame_level) / 20 +
            hate_level / 20 -
            is_raping
          : slave_level / 10 - 0.1) +
        !cid / 2,
    );
    set_juel_buff(
      cid,
      '痛苦',
      ((era.get(`talent:${cid}:痛苦感受`) +
        era.get(`talent:${cid}:未来期望`) +
        era.get(`talent:${cid}:情感活动`)) *
        3) /
        10 +
        (slave_level * -0.16 ||
          is_raping / 2 +
            pain_level / 10 -
            (meek_level * 3) / 20 -
            hate_level / 20 -
            love_buff / 2 -
            lust_buff / 2),
    );
    set_juel_buff(
      cid,
      '恐惧',
      ((era.get(`talent:${cid}:恐惧感受`) +
        era.get(`talent:${cid}:未来期望`) +
        era.get(`talent:${cid}:社交态度`) +
        era.get(`talent:${cid}:情感活动`)) *
        3) /
        10 +
        (slave_level * -0.33 ||
          is_raping / 2 +
            (era.get(`tequip:${cid}:眼罩`) === item_enum.blindfold) / 2 +
            pain_level / 10 -
            (meek_level * 3) / 20 -
            hate_level / 20 -
            love_buff / 2 -
            lust_buff / 2),
    );
    set_juel_buff(
      cid,
      '羞耻',
      ((era.get(`talent:${cid}:羞耻忍耐`) +
        era.get(`talent:${cid}:贞洁看法`) +
        era.get(`talent:${cid}:社交态度`) +
        era.get(`talent:${cid}:情感活动`)) *
        3) /
        10 +
        is_raping / 2 +
        (slave_level * -0.33 ||
          era.get('tflag:全身镜') / 2 +
            shame_level / 10 -
            (meek_level * 3) / 20 -
            hate_level / 20 -
            (love_buff * 4) / 5 -
            lust_buff / 2),
    );
    set_juel_buff(
      cid,
      '反感',
      0.3 *
        (era.get(`talent:${cid}:反感获取`) +
          era.get(`talent:${cid}:贞洁看法`) +
          era.get(`talent:${cid}:坦率程度`) +
          era.get(`talent:${cid}:工口好奇`) +
          era.get(`talent:${cid}:情感活动`)) +
        (slave_level * -0.33 ||
          is_raping +
            hate_level / 10 +
            pain_level / 20 +
            shame_level / 20 -
            meek_level / 4 -
            love_buff -
            lust_buff / 2),
    );
    set_juel_buff(
      cid,
      '施虐',
      lust_buff +
        (era.get(`talent:${cid}:小恶魔`) + era.get(`talent:${cid}:变态`)) / 2,
    );
    set_juel_buff(
      cid,
      '受虐',
      lust_buff +
        (era.get(`talent:${cid}:圣母`) + era.get(`talent:${cid}:变态`)) / 2,
    );
    set_juel_buff(cid, '口腔', lust_buff);
    set_juel_buff(
      cid,
      '胸部',
      lust_buff + era.get(`talent:${cid}:乳房尺寸`) / 5,
    );
    set_juel_buff(cid, '身体', lust_buff);
    set_juel_buff(cid, '外阴', lust_buff);
    set_juel_buff(cid, '阴道', lust_buff);
    set_juel_buff(cid, '肛门', lust_buff);
    set_juel_buff(cid, '阴茎', lust_buff);
  }
}

/** @param {number} ids */
function init_ero(...ids) {
  era.addCharacterForTrain(...ids);
  update_ero_status(...ids);
  update_juel_buff(...ids);
  init_palams(...ids);
  init_juels(...ids);
  reset_parts(...ids);
  sys_calc_ero_items.init_items(...ids);
  for (const cid of ids) {
    era.set(
      `tcvar:${cid}:体重`,
      20 * (era.get(`cflag:${cid}:身高`) / 100) ** 2 +
        (era.get(`base:${cid}:体重偏差`) * 10) / 2000,
    );
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
    if (cid > 0 && era.get(`cflag:${cid}:种族`) > 0) {
      let edu_phase = era.get(`cflag:${cid}:育成回合计时`);
      if (edu_phase < 3 * 48) {
        edu_phase = Math.floor(edu_phase / 48) / 3;
        const juels = sys_count_juels(cid);
        era.set(`tcvar:${cid}:粉因子`, Math.floor(juels.pink * edu_phase));
        era.set(`tcvar:${cid}:蓝因子`, Math.floor(juels.blue * edu_phase));
        era.set(`tcvar:${cid}:白因子`, Math.floor(juels.white * edu_phase));
      } else {
        gene_juel_names.forEach((e) =>
          era.set(`tcvar:${cid}:${e}因子`, era.get(`jewel:${cid}:${e}`)),
        );
      }
    }
    if (
      cid > 0 &&
      era.get(`love:${cid}`) >= 90 &&
      era.get(`cflag:${cid}:性别`) !== 1 &&
      era.get(`status:${cid}:经期`) === 0 &&
      era.get(`cflag:${cid}:妊娠阶段`) === 1 << pregnant_stage_enum.no &&
      sys_check_yandere(cid, (y) => y > 0)
    ) {
      const yandere = era.get(`talent:${cid}:病娇`);
      if (Math.random() < yandere * 0.4) {
        era.set(`status:${cid}:反避孕套`, 1);
      }
    }
  }
}

/** @param {number} ids */
function begin_and_init_ero(...ids) {
  if (jewel_names === undefined) {
    jewel_names = era.get('jewelnames').slice(0, 13);
  }
  era.beginTrain();
  era.set('tflag:回合', 1);
  era.set('tflag:前回行动', -1);
  era.set('tflag:对手行动', -1);
  era.set('tflag:强奸', -1);
  init_ero(...ids);
}

/**
 * @param {boolean} skip_juels
 * @param {boolean} log_juels
 * @param {number[]} ids
 * @returns {{attr:Record<string,(PrintedSpan|string)[][]>,[jewel]:Record<string,Record<string,number>>}}
 */
function end_ero(skip_juels, log_juels, ids) {
  let ret = { attr: {}, jewel: {} };
  sys_calc_ero_items.remove_all_items(...ids);
  clean_all_parts(...ids);
  const is_slave = ids.indexOf(0) !== -1 && era.get('flag:惩戒力度') >= 2;
  const is_sex = ids.length > 1;
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
      const part_name = part_names[part];
      if (
        era.get(`param:${cid}:${part_name}快感`) >
        era.get(`tcvar:${cid}:${part_name}快感上限`) * lust_palam_border
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
    const got = new Array(13).fill(0),
      un_got = new Array(13).fill(0);
    ret.jewel[cid] = {};
    for (let i = 12; i >= 0; --i) {
      got[i] = Math.floor(
        era.get(`gotjewel:${cid}:${jewel_names[i]}`) / palam2juel,
      );
      if (!skip_juels && i < 12) {
        un_got[i] = got[i + 1] + un_got[i + 1];
      }
    }
    const got_self_protect = Math.floor(
      era.get(`gotjewel:${cid}:自卫`) / palam2juel,
    );
    let self_protect =
      skip_juels || !cid
        ? 0
        : Math.min(
            era.get(`jewel:${cid}:自卫`) + got_self_protect,
            un_got[0] + got[0],
          );
    era.add(`jewel:${cid}:自卫`, got_self_protect - self_protect);
    if (log_juels) {
      ret.jewel[cid]['自卫'] = got_self_protect;
      ret.jewel[cid]['-自卫'] = self_protect;
    }
    jewel_names.forEach((j_name, i) => {
      const lost = get_random_value(
        Math.max(self_protect - un_got[i], 0),
        Math.min(got[i], self_protect),
      );
      got[i] -= lost;
      self_protect -= lost;
      era.add(`jewel:${cid}:${j_name}`, got[i]);
      if (log_juels) {
        ret.jewel[cid][j_name] = got[i];
        ret.jewel[cid][`-${j_name}`] = lost;
      }
    });
    const s_orgasm_count = era.get(`ex:${cid}:施虐高潮`),
      m_orgasm_count = era.get(`ex:${cid}:受虐高潮`);
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
    ret.attr[cid] = Object.values(attr_enum).map((e) =>
      sys_change_attr_and_print(
        cid,
        e,
        era.get(`ex:${cid}:${attr_names[e]}获取`) / get_random_value(4, 6),
      ),
    );
    let pt = era.get(`ex:${cid}:技能点获取`);
    if (pt > 0) {
      pt = Math.floor(pt / get_random_value(8, 12));
      ret.attr[cid].push(`获得了 ${pt.toLocaleString()} 点技能点数`);
      era.add(`exp:${cid}:技能点数`, pt);
    }
  }
  for (const cid of ids) {
    if (cid > 0 && era.get(`cflag:${cid}:种族`) > 0) {
      let got = Math.floor(era.get(`tcvar:${cid}:获得因子`) / palam2juel),
        juels = gene_juel_names.map((e) => era.get(`tcvar:${cid}:${e}因子`));
      if (got > 0) {
        if (got < juels.reduce((p, c) => p + c, 0)) {
          juels = juels.map((e, i, l) => {
            const val = get_random_value(
              Math.max(got - l.slice(i + 1).reduce((p, c) => p + c, 0), 0),
              got,
            );
            got -= val;
            return val;
          });
        }
        juels.forEach((e, i) => era.add(`gotjewel:0:${gene_juel_names[i]}`, e));
        if (era.get(`cflag:${cid}:殿堂`) > 0) {
          CharaAvailableGenes.merge_into_player(new CharaAvailableGenes(cid));
        }
      }
    }
  }
  gene_juel_names.forEach((e) =>
    era.add(`jewel:0:${e}`, era.get(`gotjewel:0:${e}`)),
  );
  if (!log_juels) {
    ret.jewel = undefined;
  }
  era
    .get('paramkeys')
    .forEach((v) => ids.forEach((cid) => era.set(`gotjewel:${cid}:${v}`, 0)));
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
    if (era.get('flag:马跳结果显示简报') > 0) {
      for (const chara_id of chara_list) {
        const buffer = get_juel_result(
          chara_id,
          jewel_names,
          info.jewel[chara_id],
          info.attr[chara_id],
        );
        era.printMultiColumns(buffer, { width: 18 });
        await era.waitAnyKey();
      }
    } else {
      let result_flag = true,
        page = 0,
        chara_index = 0;
      era.println();
      get_chara_talk(302).say_as_unknown('发 表！高潮播报～♫');
      get_chara_talk(301).say_as_unknown('以下报上这次马儿跳的结果简报～');
      const reporter = get_chara_talk(306);
      if (Math.random() < 0.01) {
        await reporter.say_as_unknown_and_wait('不……不喜欢……的话……');
        await get_chara_talk(203).say_as_unknown_and_wait('训练员～');
        await get_chara_talk(202).say_as_unknown_and_wait(
          '加油！训练员～加油！',
        );
        await reporter.say_as_unknown_and_wait(
          '……请在下次马儿跳过程中在界面的设置里开启【马跳结果显示简报】……',
        );
        await reporter.say_as_unknown_and_wait('……哦～');
      } else {
        await reporter.say_as_unknown_and_wait(
          '不喜欢的话请在下次马儿跳过程中在界面的设置里开启【马跳结果显示简报】哦～',
        );
      }

      while (result_flag) {
        await era.clear();
        era.setToBottom();
        era.drawLine({ content: '马跳结果', position: 'left' });
        switch (page) {
          case 0:
            era.printMultiColumns(
              get_juel_result(
                chara_list[chara_index],
                jewel_names,
                info.jewel[chara_list[chara_index]],
                info.attr[chara_list[chara_index]],
              ),
              {
                width: 18,
              },
            );
            break;
          case 1:
            era.printMultiColumns(
              get_ex_result_in_the_end(chara_list[chara_index]),
              {
                width: 18,
              },
            );
        }
        era.setVerticalAlign('middle');
        era.printInColRows(
          [{ type: 'divider' }],
          {
            columns: [{ accelerator: 4, content: '上一页', type: 'button' }],
            config: { width: 6 },
          },
          {
            columns: [
              {
                accelerator: 8,
                config: { disabled: chara_list[chara_index - 1] === undefined },
                content: `上一位 - ${era.get(
                  `callname:${chara_list[chara_index - 1]}:-2`,
                )}`,
                type: 'button',
              },
              {
                accelerator: 2,
                config: { disabled: chara_list[chara_index + 1] === undefined },
                content: `下一位 - ${era.get(
                  `callname:${chara_list[chara_index + 1]}:-2`,
                )}`,
                type: 'button',
              },
            ],
            config: { width: 6 },
          },
          {
            columns: [{ accelerator: 6, content: '下一页', type: 'button' }],
            config: { width: 6 },
          },
          {
            columns: [
              {
                accelerator: 999,
                config: { align: 'right' },
                content: '结束',
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
      if (
        part_names[part] &&
        era.get(`tcvar:${cid}:${part_names[part]}快感上限`)
      ) {
        era.set(
          `param:${cid}:${part_names[part]}快感`,
          Math.max(
            era.get(`param:${cid}:${part_names[part]}快感`),
            era.get(`tcvar:${cid}:${part_names[part]}快感上限`),
          ),
        );
      }
    });
  },
  update_ero_status,
  update_juel_buff,
  update_temp_base,
};
