const era = require('#/era-electron');

const {
  orgasm_check_list,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const {
  palam_from_semen_on_part,
  lust_border,
  palam_from_orgasm,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  pleasure_list,
} = require('#/data/ero/part-const');
const { palam_colors } = require('#/data/color-const');

let tmp = {};

/**
 * @param {number} chara_id
 * @param {number} part
 * @param {number} _attack hurt value
 */
function add_palam(chara_id, part, _attack) {
  let attack = _attack;
  if (part === part_enum.breast) {
    attack /= 1 + 0.2 * era.get(`talent:${chara_id}:乳房尺寸`);
  }
  attack *= 1 - 0.2 * era.get(`talent:${chara_id}:贞洁看法`);
  const key = part_names[part];
  if (!key) {
    return;
  }
  // 欲求不满+25%快感累积
  // 发情+25%快感累积
  // 余韵+20%快感累积
  let coff =
    1 +
    0.25 * (era.get(`base:${chara_id}:性欲`) >= lust_border.want_sex) +
    0.25 * era.get(`tcvar:${chara_id}:发情`) +
    0.2 * (era.get(`tcvar:${chara_id}:余韵`) > 0);
  if (part === part_enum.penis) {
    // 不应期内阴茎快感提升-90%
    if (era.get(`tcvar:${chara_id}:不应期`)) {
      coff -= 0.9;
    } else if (era.get(`tcvar:${chara_id}:避孕套`)) {
      // 避孕套-10%快感
      coff -= 0.1;
    }
  }
  attack *= coff;
  tmp[chara_id][key] += attack;
  // 自己拿自己的宝珠
  add_juel(chara_id, `${key}快感`, attack);
}

/**
 * 结算部位快感
 * @param {number} chara_id
 * @param {number} part
 * @param {number} attack hurt value
 * @param {boolean} [pass_transfer]
 */
function calc_pleasure(chara_id, part, attack, pass_transfer) {
  add_palam(chara_id, part, attack);
  if (!pass_transfer) {
    // 有阴茎未攻击，联动增加阴茎快感
    if (get_penis_size(chara_id) && part !== part_enum.penis) {
      // 除肛门和阴道快感，其他折半增加
      add_palam(
        chara_id,
        part_enum.penis,
        (attack * era.get(`tcvar:${chara_id}:阴茎快感上限`)) /
          ((2 - (part === part_enum.anal || part === part_enum.virgin)) *
            era.get(`tcvar:${chara_id}:${part_names[part]}快感上限`)),
      );
    }
    // 有阴道未攻击，联动增加阴道快感
    if (era.get(`cflag:${chara_id}:阴道尺寸`) && part !== part_enum.virgin) {
      // 除外阴和牛子快感，其他折半增加
      add_palam(
        chara_id,
        part_enum.virgin,
        (attack * era.get(`tcvar:${chara_id}:阴道快感上限`)) /
          ((2 - (part === part_enum.clitoris || part === part_enum.penis)) *
            era.get(`tcvar:${chara_id}:${part_names[part]}快感上限`)),
      );
    }
  }
}

/**
 * @param {number} chara_id
 * @param {number} part
 * @param {boolean} shown
 * @returns {{max: number, old: number, curr: number}}
 */
function update_palam(chara_id, part, shown) {
  const key = part_names[part];
  const palam_name = key + '快感';
  // 快感加成已在sys-calc-ero.js中计算，因子加成在sys-calc-juel.js中计算，不重复计算
  let attack = Math.ceil(
    tmp[chara_id][key] * (1 + 0.1 * (era.get(`cflag:${chara_id}:气性`) === -3)),
  );
  switch (part) {
    case part_enum.sadism:
      add_juel(chara_id, '羞耻', attack / 2);
      break;
    case part_enum.masochism:
      add_juel(chara_id, '反感', attack / 2);
      break;
    case part_enum.body:
    case part_enum.anal:
    case part_enum.clitoris:
      add_juel(chara_id, '顺从', attack / 2);
      add_juel(chara_id, '恐惧', attack / 2);
      break;
    case part_enum.penis:
    case part_enum.virgin:
      add_juel(chara_id, '顺从', attack / 2);
      add_juel(chara_id, '羞耻', attack / 2);
      break;
    default:
      add_juel(chara_id, '顺从', attack / 2);
  }
  tmp[chara_id][key] = 0;
  const new_val = era.add(`palam:${chara_id}:${palam_name}`, attack),
    limit = era.get(`tcvar:${chara_id}:${palam_name}上限`);
  shown &&
    attack &&
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ` 的 ${palam_name} `,
      {
        content: `+${attack}`,
        color: palam_colors.notifications[1],
      },
      '！现在是 ',
      {
        content: `${new_val}`,
        color: get_color(...palam_colors.notifications, new_val / limit),
      },
      `/${limit}`,
    ]);
  return { curr: new_val, max: limit, old: new_val - attack };
}

module.exports = {
  add_palam,
  calc_pleasure,
  clean_palams: () => (tmp = {}),
  /** @param {number} ids */
  init_palams: (...ids) =>
    ids.forEach((chara_id) => {
      tmp[chara_id] = {};
      pleasure_list.forEach((part) => (tmp[chara_id][part_names[part]] = 0));
    }),
  update_palam,
  /**
   * @param {number} chara_id
   * @param {number} orgasm_times
   */
  update_palam_from_main_orgasm(chara_id, orgasm_times) {
    const times = orgasm_times <= 6 ? orgasm_times : 6;
    // 次要部位高潮会增加主要部位快感，无任何加减成
    // 只有本人能获得次要部位高潮获取的快感宝珠
    if (get_penis_size(chara_id)) {
      // 男性和扶她加牛子快感
      add_palam(chara_id, part_enum.penis, palam_from_orgasm * times);
    }
    if (era.get(`cflag:${chara_id}:阴道尺寸`)) {
      // 女性和扶她加浦西快感
      add_palam(chara_id, part_enum.virgin, palam_from_orgasm * times);
    }
  },
  /**
   * @param {number} chara_id
   * @param {string} talent
   * @param {number} parts
   */
  update_palam_from_talent(chara_id, talent, ...parts) {
    if (era.get(`talent:${chara_id}:${talent}`)) {
      parts.forEach((part) =>
        add_palam(
          chara_id,
          part,
          (era.get(`tcvar:${chara_id}:${part_names[part]}快感上限`) *
            palam_from_semen_on_part) /
            parts.length,
        ),
      );
    }
  },
  /**
   * @param {boolean} shown
   * @param {number} ids
   */
  update_palams(shown, ...ids) {
    ids.forEach((chara_id) =>
      orgasm_check_list.forEach((part) => update_palam(chara_id, part, shown)),
    );
  },
};
