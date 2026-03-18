const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const {
  get_penis_size,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const { palam_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  lust_border,
  palam_from_orgasm,
  palam_from_semen_on_part,
} = require('#/data/ero/orgasm-const');
const { part2jid, part_enum, pleasure_list } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

const { __, i18n } = require('#/i18n/selector');

const temp = [
  part_enum.mouth,
  part_enum.breast,
  part_enum.body,
  part_enum.anal,
  part_enum.sadism,
  part_enum.masochism,
];

const a_p_list = [
  void 0,
  [...temp, part_enum.penis],
  [...temp, part_enum.clitoris, part_enum.virgin],
  [...temp, part_enum.penis, part_enum.virgin],
];

let tmp = {};

/**
 * @param {number} cid
 * @param {number} part
 * @param {number} _attack hurt value
 */
function add_palam(cid, part, _attack) {
  let attack = _attack;
  if (part === part_enum.breast) {
    attack /= 1 + 0.2 * era.get(`talent:${cid}:乳房尺寸`);
  }
  attack *= 1 - 0.2 * era.get(`talent:${cid}:贞洁看法`);
  const key = i18n('zh-CN').tb_param[part2jid[part]];
  if (!key) {
    return;
  }
  // 欲求不满+25%快感累积
  // 发情+25%快感累积
  // 余韵+20%快感累积
  // 高潮抑制-10%快感累积
  let coff =
    1 +
    0.25 * (era.get(`base:${cid}:性欲`) >= lust_border.want_sex) +
    0.25 * era.get(`tcvar:${cid}:发情`) +
    0.2 * (era.get(`tcvar:${cid}:余韵`) > 0) -
    0.1 * (era.get(`tcvar:${cid}:高潮抑制`) > 0);
  if (part === part_enum.penis) {
    // 不应期内阴茎快感提升-90%
    if (era.get(`tcvar:${cid}:不应期`)) {
      coff -= 0.9;
    } else if (era.get(`tcvar:${cid}:避孕套`)) {
      // 避孕套-10%快感
      coff -= 0.1;
    }
  }
  // 自己拿自己的宝珠
  // 淫纹不会加成宝珠获取
  add_juel(cid, part2jid[part], attack * coff);
  const inmon = CharaInmon.get(cid);
  if (inmon.on(plugin_enum.al_u1)) {
    coff += 0.5;
  } else if (inmon.on(plugin_enum.al_u2)) {
    coff += 1;
  } else if (inmon.on(plugin_enum.al_u3)) {
    coff += 2;
  } else if (inmon.on(plugin_enum.al_d1)) {
    coff -= 0.1;
  } else if (inmon.on(plugin_enum.al_d2)) {
    coff -= 0.3;
  } else if (inmon.on(plugin_enum.al_d3)) {
    coff -= 0.7;
  }
  const plug_key = part_enum.keys[part].substring(0, 2);
  if (inmon.on(plugin_enum[`${plug_key}_u1`])) {
    coff += 1;
  } else if (inmon.on(plugin_enum[`${plug_key}_u2`])) {
    coff += 2;
  } else if (inmon.on(plugin_enum[`${plug_key}_u3`])) {
    coff += 4;
  } else if (inmon.on(plugin_enum[`${plug_key}_d1`])) {
    coff -= 0.2;
  } else if (inmon.on(plugin_enum[`${plug_key}_d2`])) {
    coff -= 0.4;
  } else if (inmon.on(plugin_enum[`${plug_key}_d3`])) {
    coff -= 0.8;
  }
  attack *= coff;
  if (inmon.on(plugin_enum.tzt)) {
    a_p_list[
      (get_penis_size(cid) > 0) + (era.get(`cflag:${cid}:性别`) !== 1) * 2
    ].forEach(
      (p, _, l) =>
        (tmp[cid][i18n('zh-CN').tb_param[part2jid[p]]] += attack / l.length),
    );
  } else {
    tmp[cid][key] += attack;
  }
}

/**
 * 结算部位快感
 * @param {number} cid
 * @param {number} part
 * @param {number} attack hurt value
 * @param {boolean} [pass_transfer]
 */
function calc_pleasure(cid, part, attack, pass_transfer) {
  attack = Math.max(attack, 0);
  add_palam(cid, part, attack);
  const pname = i18n('zh-CN').tb_param[part2jid[part]];
  if (!pass_transfer) {
    // 有阴茎未攻击，联动增加阴茎快感
    if (get_penis_size(cid) > 0 && part !== part_enum.penis) {
      // 除肛门和阴道快感，其他折半增加
      switch (part) {
        case part_enum.anal:
        case part_enum.virgin:
          add_palam(
            cid,
            part_enum.penis,
            (attack * era.get(`tcvar:${cid}:阴茎快感上限`) * 0.7) /
              era.get(`tcvar:${cid}:${pname}快感上限`),
          );
          break;
        default:
          add_palam(
            cid,
            part_enum.penis,
            (attack * era.get(`tcvar:${cid}:阴茎快感上限`) * 0.2) /
              era.get(`tcvar:${cid}:${pname}快感上限`),
          );
      }
    }
    // 有阴道未攻击，联动增加阴道快感
    if (era.get(`cflag:${cid}:阴道尺寸`) > 0 && part !== part_enum.virgin) {
      // 除外阴和牛子快感，其他折半增加
      switch (part_enum) {
        case part_enum.clitoris:
        case part_enum.penis:
          add_palam(
            cid,
            part_enum.virgin,
            (attack * era.get(`tcvar:${cid}:阴道快感上限`) * 0.7) /
              era.get(`tcvar:${cid}:${pname}快感上限`),
          );
          break;
        default:
          add_palam(
            cid,
            part_enum.virgin,
            (attack * era.get(`tcvar:${cid}:阴道快感上限`) * 0.2) /
              era.get(`tcvar:${cid}:${pname}快感上限`),
          );
      }
    }
  }
}

/**
 * @param {number} cid
 * @param {number} part
 * @param {boolean} shown
 * @returns {{max: number, old: number, curr: number}}
 */
function update_palam(cid, part, shown) {
  const key = i18n('zh-CN').tb_param[part2jid[part]];
  const param_name = key + '快感';
  // 快感加成已在 sys-calc-ero.js 中计算，因子加成在 sys-calc-juel.js 中计算，不重复计算
  let attack = tmp[cid][key] * (1 + 0.1 * (sys_get_chara(cid) === -3));
  switch (part) {
    case part_enum.sadism:
      add_juel(cid, 13, attack / 2);
      break;
    case part_enum.masochism:
      add_juel(cid, 14, attack / 2);
      break;
    case part_enum.body:
    case part_enum.anal:
    case part_enum.clitoris:
      add_juel(cid, 10, attack / 2);
      add_juel(cid, 12, attack / 2);
      break;
    case part_enum.penis:
    case part_enum.virgin:
      add_juel(cid, 10, attack / 2);
      add_juel(cid, 13, attack / 2);
      break;
    default:
      add_juel(cid, 10, attack / 2);
  }
  tmp[cid][key] = 0;
  const old_val = era.get(`param:${cid}:${param_name}`);
  const new_val = era.add(`param:${cid}:${param_name}`, attack);
  const _new = Math.floor(new_val);
  const _old = Math.floor(old_val);
  const limit = era.get(`tcvar:${cid}:${param_name}上限`);
  if (shown && _new !== _old) {
    era.print(
      i18n().sex.get_got_param_info(
        get_chara_talk(cid).get_colored_name(),
        __(`tb_param.param${part2jid[part]}`),
        get_abbr_number(_old),
        {
          ...get_abbr_number(_new - _old),
          color: palam_colors.notifications[0],
        },
        {
          ...get_abbr_number(_new),
          color: get_color(...palam_colors.notifications, new_val / limit),
        },
        {
          ...get_abbr_number(limit),
          color: new_val > limit ? palam_colors.notifications[1] : void 0,
        },
      ),
    );
  }
  return { curr: new_val, max: limit, old: old_val };
}

module.exports = {
  add_palam,
  calc_pleasure,
  clean_palams: () => (tmp = {}),
  /** @param {number} ids */
  init_palams: (...ids) =>
    ids.forEach((cid) => {
      tmp[cid] = {};
      pleasure_list.forEach(
        (part) => (tmp[cid][i18n('zh-CN').tb_param[part2jid[part]]] = 0),
      );
    }),
  update_palam,
  /**
   * @param {number} cid
   * @param {number} part
   * @param {number} orgasm
   * @param {CharaInmon} inmon
   */
  update_palam_from_main_orgasm(
    cid,
    part,
    orgasm,
    inmon = CharaInmon.get(cid),
  ) {
    let add = Math.min(orgasm, 6) * palam_from_orgasm;
    const penis = get_penis_size(cid) > 0;
    const virgin = era.get(`cflag:${cid}:阴道尺寸`) > 0;
    if (inmon.on(plugin_enum.nrg)) {
      if (
        part !== part_enum.penis &&
        part !== part_enum.virgin &&
        penis &&
        virgin
      ) {
        add *= 2;
      }
      a_p_list[penis + virgin * 2].forEach((p, _, l) => {
        if (part !== p) {
          tmp[cid][i18n('zh-CN').tb_param[part2jid[p]]] += add / (l.length - 1);
        }
      });
    } else if (part !== part_enum.penis && part !== part_enum.virgin) {
      // 次要部位高潮会增加主要部位快感，无任何加减成
      // 只有本人能获得次要部位高潮获取的快感宝珠
      if (penis > 0) {
        // 男性和扶她加牛子快感
        add_palam(cid, part_enum.penis, add);
      }
      if (virgin > 0) {
        // 女性和扶她加浦西快感
        add_palam(cid, part_enum.virgin, add);
      }
    }
  },
  /**
   * @param {number} cid
   * @param {string} talent
   * @param {number} parts
   */
  update_palam_from_talent(cid, talent, ...parts) {
    if (era.get(`talent:${cid}:${talent}`)) {
      parts.forEach((part) =>
        add_palam(
          cid,
          part,
          (era.get(
            `tcvar:${cid}:${i18n('zh-CN').tb_param[part2jid[part]]}快感上限`,
          ) *
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
