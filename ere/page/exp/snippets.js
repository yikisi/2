const era = require('#/era-electron');

const {
  sys_get_full_chara,
} = require('#/system/chara/sys-calc-characteristic');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const { join_to_string } = require('#/utils/list-utils');

const { no_info } = require('#/data/exp-const');
const {
  get_breast_cup,
  get_colored_body_hair,
  get_colored_hair,
  get_skin,
  get_skin_color,
} = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

function check_line_break(e) {
  return Array.isArray(e) && e.length > 0 && e[0].isBr > 0;
}

module.exports = {
  /**
   * @param arr
   * @param {number} cid
   */
  get_filled_exp_str(arr, cid) {
    if (Array.isArray(arr)) {
      return arr.map((e) => {
        if (e.c !== undefined) {
          return sys_get_colored_full_callname(cid, e.c);
        }
        return e;
      });
    }
    return arr;
  },
  /** @param {number} cid */
  get_shared_com_base_birthday(cid) {
    const birth_cstr = era.get(`cstr:${cid}:出生经历`);
    if (birth_cstr.startsWith('出生于')) {
      return birth_cstr;
    }
    return (
      birth_cstr.length > 0
        ? i18n().detail.base_birthday_info_template
        : i18n().detail.base_birthday_info_no_year_template
    )
      .replace('%YEAR%', birth_cstr)
      .replace('%MONTH%', era.get(`cflag:${cid}:出生月份`).toString())
      .replace('%DATE%', era.get(`cflag:${cid}:出生日期`).toString());
  },
  /** @param {number} cid */
  get_shared_com_base_body: (cid) =>
    i18n().detail.get_base_body_info(
      era.get(`cflag:${cid}:身高`).toString(),
      era.get(`status:${cid}:发胖`) > 0
        ? i18n().detail.base_body_weight_fat
        : era.get(`base:${cid}:体重偏差`) >= 2000
          ? i18n().detail.base_body_weight_heavy
          : i18n().detail.base_body_weight_normal,
    ),
  /**
   * @param {number} cid
   * @param {boolean} show_all_body
   */
  get_shared_com_base_female: (cid, show_all_body) =>
    i18n().detail.get_base_female_info(
      get_bust_size(cid, show_all_body).toString(),
      get_breast_cup(cid, show_all_body),
      get_waist_size(cid).toString(),
      get_hip_size(cid).toString(),
    ),
  /** @param {number} cid */
  get_shared_com_base_hair(cid) {
    const hair = join_to_string(
      [
        di18n.feature.get_ahoge_hair(era.get(`cstr:${cid}:呆毛`)),
        __(`feature.fh_${era.get(`cstr:${cid}:前发`)}`),
        __(`feature.bh_${era.get(`cstr:${cid}:中发`)}`, ''),
        era
          .get(`cstr:${cid}:后发`)
          .split('+')
          .map((h) => __(`feature.bh_${h}`, ''))
          .filter((h) => h)
          .join(i18n().feature.hair_splitter),
      ],
      i18n().feature.hair_splitter,
    );
    if (hair) {
      return i18n().detail.base_hair_info_template.replace('%HAIR%', hair);
    }
    return '';
  },
  /** @param {number} cid */
  get_shared_com_base_summary(cid) {
    const race = era.get(`cflag:${cid}:种族`);
    return i18n().detail.get_base_summary_info(
      {
        color: get_skin_color(cid),
        content: get_skin(cid),
      },
      get_colored_hair(cid),
      ...(race > 0
        ? [get_colored_body_hair(cid), sys_get_full_chara(cid)]
        : ['', '']),
      di18n.feature.get_sex_title(era.get(`cflag:${cid}:性别`), race),
    );
  },
  /** @param {array} list */
  push_link_break(list) {
    if (list.length && !check_line_break(list[list.length - 1])) {
      list.push([{ isBr: true }]);
    }
  },
  /** @param {(string|array)[]} list */
  remove_end_line_breaks(list) {
    let temp;
    if (list.length) {
      do {
        temp = list.pop();
      } while (check_line_break(temp));
      if (temp) {
        list.push(temp);
      }
    }
    if (!list.length) {
      list.push(no_info);
    }
  },
};
