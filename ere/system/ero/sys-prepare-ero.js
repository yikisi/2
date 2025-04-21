const era = require('#/era-electron');

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
const { gene_juel_names } = require('#/data/other-const');
const { attr_enum } = require('#/data/train-const');

let juel_names;

/** @param {number} ids */
function update_ero_status(...ids) {
  ids.forEach((chara_id) => {
    const iron_will = era.get(`talent:${chara_id}:钢之意志`),
      penis_size = get_penis_size(chara_id);
    let base_buff = 5 * iron_will; // 钢之意志全上限+50%
    if (era.get(`status:${chara_id}:超马跳Z`)) {
      base_buff -= 3;
    } else if (
      era.get(`status:${chara_id}:马跳Z`) ||
      era.get(`status:${chara_id}:马跳S`)
    ) {
      base_buff -= 2;
    } else if (
      era.get(`status:${chara_id}:弗隆K`) ||
      era.get(`status:${chara_id}:弗隆P`) ||
      era.get(`status:${chara_id}:经期`)
    ) {
      base_buff -= 1;
    }
    const chara_mec = get_custom_mec(chara_id);
    pleasure_list.forEach((part) => {
      let limit = base_buff;
      const talent_name = part_talents[part];
      if (
        part === part_enum.penis &&
        !era.get(`cflag:${chara_id}:性别`) &&
        penis_size
      ) {
        limit -= Math.max(
          Math.floor(2.5 * era.get(`talent:${chara_id}:淫核`)),
          1,
        );
      } else if (talent_name) {
        limit -= Math.floor(2.5 * era.get(`talent:${chara_id}:${talent_name}`));
      }
      limit = (base_limit * (10 + limit)) / 10;
      const random_range = Math.min(limit / 10, 100);
      limit += get_random_value(-random_range, random_range);
      limit = Math.max(limit + chara_mec.get_palam_limit_buff(part), 100);
      era.set(`tcvar:${chara_id}:${part_names[part]}快感上限`, limit);
    });
    if (
      !era.get(`status:${chara_id}:沉睡`) &&
      !era.get(`base:${chara_id}:精力`)
    ) {
      era.set(`tcvar:${chara_id}:失神`, get_random_value(1, 5));
      era.set(`tcvar:${chara_id}:精力不济`, 1);
    }
    const estrus = era.set(
      `tcvar:${chara_id}:发情`,
      era.get(`tcvar:${chara_id}:发情`) ||
        !era.get('flag:强奸抵抗') ||
        era.get(`base:${chara_id}:性欲`) >= lust_border.absent_mind ||
        era.get(`status:${chara_id}:发情`) ||
        era.get(`status:${chara_id}:马跳Z`) ||
        era.get(`status:${chara_id}:超马跳Z`) ||
        era.get(`status:${chara_id}:马跳S`) ||
        era.get(`status:${chara_id}:弗隆K`) ||
        era.get(`status:${chara_id}:弗隆P`),
    );
    if (estrus && era.get(`talent:${chara_id}:淫口`)) {
      set_stain(chara_id, part_enum.mouth, stain_enum.saliva);
    }
    if (
      estrus &&
      era.get(`talent:${chara_id}:淫乳`) &&
      era.get(`talent:${chara_id}:泌乳`)
    ) {
      set_stain(chara_id, part_enum.breast, stain_enum.milk);
    }
    if (
      era.get(`talent:${chara_id}:乳头类型`) === 2 &&
      (estrus || era.get(`talent:${chara_id}:淫乳`))
    ) {
      era.set(`tcvar:${chara_id}:乳突`, 1);
    }
    if (
      penis_size &&
      (estrus ||
        era.get(`status:${chara_id}:弗隆K`) ||
        era.get(`status:${chara_id}:弗隆P`))
    ) {
      era.set(
        `palam:${chara_id}:阴茎快感`,
        Math.max(
          Math.ceil(
            (era.get(`tcvar:${chara_id}:阴茎快感上限`) * erect_border) / 2 +
              0.9,
          ),
          era.get(`palam:${chara_id}:阴茎快感`),
        ),
      );
      set_stain(chara_id, part_enum.penis, stain_enum.semen);
    }
    if (
      era.get(`cflag:${chara_id}:阴道尺寸`) &&
      (estrus ||
        era.get(`talent:${chara_id}:淫壶`) ||
        era.get(`status:${chara_id}:反避孕套`))
    ) {
      set_stain(chara_id, part_enum.virgin, stain_enum.secretion);
    }
    if (estrus || era.get(`talent:${chara_id}:淫臀`) === 2) {
      set_stain(chara_id, part_enum.anal, stain_enum.anal);
    }
    if (era.get(`cflag:${chara_id}:腋毛`) >= 3) {
      set_stain(chara_id, part_enum.body, stain_enum.dirt);
    }
    if (era.get(`cflag:${chara_id}:阴毛`) >= 3) {
      set_stain(
        chara_id,
        penis_size ? part_enum.penis : part_enum.clitoris,
        stain_enum.dirt,
      );
    }
  });
}

/**
 * @param {number} chara_id
 * @param {number} ratio
 */
function update_temp_base(chara_id, ratio) {
  let temp = era.set(
    `tcvar:${chara_id}:临时体力`,
    Math.floor(era.get(`maxbase:${chara_id}:体力`) * ratio * 0.8),
  );
  era.add(`maxbase:${chara_id}:体力`, temp);
  era.add(`base:${chara_id}:体力`, temp);
  temp = era.set(
    `tcvar:${chara_id}:临时精力`,
    Math.floor(era.get(`maxbase:${chara_id}:精力`) * ratio),
  );
  era.add(`maxbase:${chara_id}:精力`, temp);
  era.add(`base:${chara_id}:精力`, temp);
}

/**
 * @param {number} chara_id
 * @param {string} juel_name
 * @param {number} val
 */
function set_juel_buff(chara_id, juel_name, val) {
  era.set(
    `tcvar:${chara_id}:${juel_name}因子加成`,
    Math.min(Math.max(val, -0.99), 1),
  );
}

/** @param {number} ids */
function update_juel_buff(...ids) {
  ids.forEach((chara_id) => {
    const hate_level = era.get(`mark:${chara_id}:反抗`),
      is_raping = era.get('tflag:强奸') === 0 && chara_id > 0,
      lust = era.get(`base:${chara_id}:性欲`),
      lust_buff =
        era.get(`talent:${chara_id}:淫乱`) / 5 +
        (lust >= lust_border.itch) / 10 +
        ((lust >= lust_border.absent_mind) * 3) / 20 +
        (lust >= lust_border.want_sex) / 4,
      meek_level = era.get(`mark:${chara_id}:同心`),
      pain_level = era.get(`mark:${chara_id}:苦痛`),
      pleasure_level = era.get(`mark:${chara_id}:欢愉`),
      shame_level = era.get(`mark:${chara_id}:羞耻`),
      slave_level = era.get(`mark:${chara_id}:淫纹`);
    let love_buff = 0;
    if (chara_id) {
      love_buff = era.get(`love:${chara_id}`);
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
      chara_id,
      '顺从',
      lust_buff / 2 +
        ((era.get(`talent:${chara_id}:自信程度`) +
          era.get(`talent:${chara_id}:坦率程度`) +
          era.get(`talent:${chara_id}:工口好奇`) +
          era.get(`talent:${chara_id}:情感活动`)) *
          3) /
          10 +
        (slave_level === 0
          ? pleasure_level / 10 +
            Math.max(pain_level, shame_level) / 20 +
            hate_level / 20 -
            is_raping
          : 0) +
        !chara_id / 2,
    );
    set_juel_buff(
      chara_id,
      '痛苦',
      ((era.get(`talent:${chara_id}:痛苦感受`) +
        era.get(`talent:${chara_id}:未来期望`) +
        era.get(`talent:${chara_id}:情感活动`)) *
        3) /
        10 +
        is_raping / 2 +
        pain_level / 10 -
        (meek_level * 3) / 20 -
        hate_level / 20 -
        love_buff / 2 -
        lust_buff / 2,
    );
    set_juel_buff(
      chara_id,
      '恐惧',
      ((era.get(`talent:${chara_id}:恐惧感受`) +
        era.get(`talent:${chara_id}:未来期望`) +
        era.get(`talent:${chara_id}:社交态度`) +
        era.get(`talent:${chara_id}:情感活动`)) *
        3) /
        10 +
        is_raping / 2 +
        (era.get(`tequip:${chara_id}:眼罩`) === item_enum.blindfold) / 2 +
        pain_level / 10 -
        (meek_level * 3) / 20 -
        hate_level / 20 -
        love_buff / 2 -
        lust_buff / 2,
    );
    set_juel_buff(
      chara_id,
      '羞耻',
      ((era.get(`talent:${chara_id}:羞耻忍耐`) +
        era.get(`talent:${chara_id}:贞洁看法`) +
        era.get(`talent:${chara_id}:社交态度`) +
        era.get(`talent:${chara_id}:情感活动`)) *
        3) /
        10 +
        is_raping / 2 +
        era.get('tflag:全身镜') / 2 +
        shame_level / 10 -
        (meek_level * 3) / 20 -
        hate_level / 20 -
        (love_buff * 4) / 5 -
        lust_buff / 2,
    );
    set_juel_buff(
      chara_id,
      '反感',
      0.3 *
        (era.get(`talent:${chara_id}:反感获取`) +
          era.get(`talent:${chara_id}:贞洁看法`) +
          era.get(`talent:${chara_id}:坦率程度`) +
          era.get(`talent:${chara_id}:工口好奇`) +
          era.get(`talent:${chara_id}:情感活动`)) +
        (slave_level < 3
          ? is_raping +
            hate_level / 10 +
            pain_level / 20 +
            shame_level / 20 -
            meek_level / 4 -
            love_buff -
            lust_buff / 2
          : 0),
    );
    set_juel_buff(
      chara_id,
      '施虐',
      lust_buff +
        (era.get(`talent:${chara_id}:小恶魔`) +
          era.get(`talent:${chara_id}:变态`)) /
          2,
    );
    set_juel_buff(
      chara_id,
      '受虐',
      lust_buff +
        (era.get(`talent:${chara_id}:圣母`) +
          era.get(`talent:${chara_id}:变态`)) /
          2,
    );
    set_juel_buff(chara_id, '口腔', lust_buff);
    set_juel_buff(
      chara_id,
      '胸部',
      lust_buff + era.get(`talent:${chara_id}:乳房尺寸`) / 5,
    );
    set_juel_buff(chara_id, '身体', lust_buff);
    set_juel_buff(chara_id, '外阴', lust_buff);
    set_juel_buff(chara_id, '阴道', lust_buff);
    set_juel_buff(chara_id, '肛门', lust_buff);
    set_juel_buff(chara_id, '阴茎', lust_buff);
  });
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
  const is_sex = era.getCharactersInTrain().length > 1;
  const is_raping_in_sleep = is_sex && !sys_check_awake(0);
  ids.forEach((chara_id) => {
    era.set(
      `tcvar:${chara_id}:体重`,
      20 * (era.get(`cflag:${chara_id}:身高`) / 100) ** 2 +
        (era.get(`base:${chara_id}:体重偏差`) * 10) / 2000,
    );
    is_sex && era.add(`exp:${chara_id}:性爱次数`, 1);
    is_raping_in_sleep && era.add(`exp:${chara_id}:睡奸次数`, 1);
    era.set(`tcvar:${chara_id}:性欲缓存`, era.get(`base:${chara_id}:性欲`));
    era.set(`tcvar:${chara_id}:压力缓存`, era.get(`base:${chara_id}:压力`));
    let temp;
    era.set(
      `tcvar:${chara_id}:体力缓存`,
      Math.max(
        Math.min(
          (temp = era.set(
            `base:${chara_id}:体力`,
            Math.floor(era.get(`base:${chara_id}:体力`)),
          )) * get_random_value(0.6, 0.8, true),
          temp - 100,
        ),
        1,
      ),
    );
    era.set(
      `tcvar:${chara_id}:精力缓存`,
      Math.max(
        Math.min(
          (temp = era.set(
            `base:${chara_id}:精力`,
            era.get(`base:${chara_id}:精力`),
          )) * get_random_value(0.6, 0.8, true),
          temp - 100,
        ),
        1,
      ),
    );
    if (era.get(`status:${chara_id}:超马跳Z`)) {
      update_temp_base(chara_id, 0.4);
    }
    if (chara_id && is_sex && !era.get(`love:${chara_id}`)) {
      era.set(`love:${chara_id}`, 1);
    }
    if (chara_id && era.get(`cflag:${chara_id}:种族`)) {
      let edu_phase = era.get(`cflag:${chara_id}:育成回合计时`);
      if (edu_phase < 3 * 48) {
        edu_phase = Math.floor(edu_phase / 48) / 3;
        const juels = sys_count_juels(chara_id);
        era.set(`tcvar:${chara_id}:粉因子`, Math.floor(juels.pink * edu_phase));
        era.set(`tcvar:${chara_id}:蓝因子`, Math.floor(juels.blue * edu_phase));
        era.set(
          `tcvar:${chara_id}:白因子`,
          Math.floor(juels.white * edu_phase),
        );
      } else {
        gene_juel_names.forEach((e) =>
          era.set(
            `tcvar:${chara_id}:${e}因子`,
            era.get(`juel:${chara_id}:${e}`),
          ),
        );
      }
    }
  });
}

/** @param {number} ids */
function begin_and_init_ero(...ids) {
  if (juel_names === undefined) {
    juel_names = era.get('juelnames').slice(0, 13);
  }
  era.beginTrain();
  era.set('tflag:回合', 1);
  era.set('tflag:前回行动', -1);
  era.set('tflag:对手行动', -1);
  era.set('tflag:强奸', -1);
  init_ero(...ids);
}

let tmp;

/**
 * @param {boolean} skip_juels
 * @param {boolean} log_juels
 * @param {number[]} ids
 */
function end_ero(skip_juels, log_juels, ids) {
  tmp = {};
  sys_calc_ero_items.remove_all_items(...ids);
  clean_all_parts(...ids);
  const is_slave = ids.indexOf(0) !== -1 && era.get('flag:惩戒力度') >= 2;
  ids.forEach((chara_id) => {
    pleasure_list.forEach((part) => {
      const part_name = part_names[part];
      if (
        era.get(`palam:${chara_id}:${part_name}快感`) >
        era.get(`tcvar:${chara_id}:${part_name}快感上限`) * lust_palam_border
      ) {
        let times = 1;
        const talent_name = part_talents[part];
        if (talent_name) {
          switch (era.get(`talent:${chara_id}:${talent_name}`)) {
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
        sys_change_lust(chara_id, lust_from_palam * times);
      }
    });
    const got = new Array(13).fill(0),
      un_got = new Array(13).fill(0);
    tmp[chara_id] = {};
    for (let i = 12; i >= 0; --i) {
      got[i] = Math.floor(
        era.get(`gotjuel:${chara_id}:${juel_names[i]}`) / palam2juel,
      );
      if (!skip_juels && i < 12) {
        un_got[i] = got[i + 1] + un_got[i + 1];
      }
    }
    const got_self_protect = Math.floor(
      era.get(`gotjuel:${chara_id}:自卫`) / palam2juel,
    );
    let self_protect =
      skip_juels || !chara_id
        ? 0
        : Math.min(
            era.get(`juel:${chara_id}:自卫`) + got_self_protect,
            un_got[0] + got[0],
          );
    era.add(`juel:${chara_id}:自卫`, got_self_protect - self_protect);
    if (log_juels) {
      tmp[chara_id]['自卫'] = got_self_protect;
      tmp[chara_id]['-自卫'] = self_protect;
    }
    juel_names.forEach((j_name, i) => {
      const lost = get_random_value(
        Math.max(self_protect - un_got[i], 0),
        Math.min(got[i], self_protect),
      );
      got[i] -= lost;
      self_protect -= lost;
      era.add(`juel:${chara_id}:${j_name}`, got[i]);
      if (log_juels) {
        tmp[chara_id][j_name] = got[i];
        tmp[chara_id][`-${j_name}`] = lost;
      }
    });
    const s_orgasm_count = era.get(`ex:${chara_id}:施虐高潮`),
      m_orgasm_count = era.get(`ex:${chara_id}:受虐高潮`);
    if (s_orgasm_count) {
      sys_change_pressure(
        chara_id,
        -100 * (1 + 3 * era.get(`talent:${chara_id}:抖S`)) * s_orgasm_count,
      );
    }
    if (m_orgasm_count) {
      sys_change_pressure(
        chara_id,
        -100 *
          (1 +
            3 *
              (era.get(`talent:${chara_id}:喜欢责骂`) ||
                era.get(`talent:${chara_id}:喜欢痛苦`))) *
          m_orgasm_count,
      );
    }
    sys_change_pressure(
      chara_id,
      -200 *
        (era.get(`ex:${chara_id}:TotalEX`) - s_orgasm_count - m_orgasm_count),
    );
    let temp;
    if ((temp = era.get(`tcvar:${chara_id}:临时体力`))) {
      era.add(`base:${chara_id}:体力`, -temp);
      era.add(`maxbase:${chara_id}:体力`, -temp);
    }
    if ((temp = era.get(`tcvar:${chara_id}:临时精力`))) {
      era.add(`base:${chara_id}:精力`, -temp);
      era.add(`maxbase:${chara_id}:精力`, -temp);
    }
    era.get(`tcvar:${chara_id}:精力不济`) &&
      era.set(`base:${chara_id}:精力`, 0);
    era.set(
      `base:${chara_id}:体力`,
      Math.floor(
        Math.min(
          era.get(`base:${chara_id}:体力`),
          era.get(`tcvar:${chara_id}:体力缓存`),
        ),
      ),
    );
    era.set(
      `base:${chara_id}:精力`,
      Math.floor(
        Math.min(
          era.get(`base:${chara_id}:精力`),
          era.get(`tcvar:${chara_id}:精力缓存`),
        ),
      ),
    );
    if (chara_id && is_slave) {
      sys_change_fame(
        Math.max(
          era.get(`tcvar:${chara_id}:性欲缓存`) -
            era.get(`base:${chara_id}:性欲`),
          0,
        ) /
          200 +
          Math.max(
            era.get(`tcvar:${chara_id}:压力缓存`) -
              era.get(`base:${chara_id}:压力`),
            0,
          ) /
            100,
      );
    }
    sys_change_attr_and_print(
      chara_id,
      attr_enum.speed,
      era.get(`ex:${chara_id}:速度获取`) / get_random_value(4, 6),
    );
    sys_change_attr_and_print(
      chara_id,
      attr_enum.strength,
      era.get(`ex:${chara_id}:力量获取`) / get_random_value(4, 6),
    );
    sys_change_attr_and_print(
      chara_id,
      attr_enum.toughness,
      era.get(`ex:${chara_id}:根性获取`) / get_random_value(4, 6),
    );
  });
  ids.forEach((chara_id) => {
    if (chara_id && era.get(`cflag:${chara_id}:种族`)) {
      let got = Math.floor(era.get(`tcvar:${chara_id}:获得因子`) / palam2juel),
        juels = gene_juel_names.map((e) =>
          era.get(`tcvar:${chara_id}:${e}因子`),
        );
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
        juels.forEach((e, i) => era.add(`gotjuel:0:${gene_juel_names[i]}`, e));
        if (era.get(`cflag:${chara_id}:殿堂`) > 0) {
          CharaAvailableGenes.merge_into_player(
            new CharaAvailableGenes(chara_id),
          );
        }
      }
    }
  });
  gene_juel_names.forEach((e) =>
    era.add(`juel:0:${e}`, era.get(`gotjuel:0:${e}`)),
  );
  if (!log_juels) {
    tmp = undefined;
  }
  era
    .get('paramkeys')
    .forEach((v) => ids.forEach((id) => era.set(`gotjewel:${id}:${v}`, 0)));
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
  end_ero(false, shown, chara_list);
  if (shown !== false) {
    if (era.get('flag:马跳结果显示简报')) {
      for (const chara_id of chara_list) {
        const buffer = get_juel_result(chara_id, juel_names, tmp);
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
              get_juel_result(chara_list[chara_index], juel_names, tmp),
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
    tmp = undefined;
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
  set_palam_to_max(chara_id, ...parts) {
    parts.forEach((part) => {
      if (
        part_names[part] &&
        era.get(`tcvar:${chara_id}:${part_names[part]}快感上限`)
      ) {
        era.set(
          `palam:${chara_id}:${part_names[part]}快感`,
          Math.max(
            era.get(`palam:${chara_id}:${part_names[part]}快感`),
            era.get(`tcvar:${chara_id}:${part_names[part]}快感上限`),
          ),
        );
      }
    });
  },
  update_ero_status,
  update_juel_buff,
  update_temp_base,
};
