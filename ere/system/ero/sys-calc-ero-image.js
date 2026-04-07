const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_hair_color } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

const dict = {};

function check_chara_ero_image(cid) {
  return dict[cid];
}

/**
 * @param {number} cid
 * @param {number} recent_s
 * @param {number} recent_m
 * @param {number} m_abused
 * @param {number} m_hit
 * @returns {boolean}
 */
function check_excited(cid, recent_s, recent_m, m_abused, m_hit) {
  return (
    era.get(`tcvar:${cid}:发情`) ||
    era.get(`tcvar:${cid}:接近高潮`) ||
    era.get(`tcvar:${cid}:余韵`) ||
    era.get(`mark:${cid}:欢愉`) ||
    era.get(`mark:${cid}:淫纹`) ||
    era.get(`base:${cid}:性欲`) >= lust_border.itch ||
    recent_s ||
    (recent_m === part_enum.abuse && m_abused) ||
    (recent_m === part_enum.hit && m_hit)
  );
}

/**
 * @param {string} img
 * @param {string} base
 * @param {string} suffixes
 * @return {string}
 */
function get_image_name(img, base, ...suffixes) {
  if (img === base) {
    return suffixes.map((s) => `${img}${s}`).join('\t');
  }
  return [img, base]
    .map((n) => suffixes.map((s) => `${n}${s}`).join('\t'))
    .join('\t');
}

function sys_get_ero_image(
  cid,
  img_name = era.get(`cstr:${cid}:头像T`) ?? era.get(`cstr:${cid}:头像`),
  in_train = true,
) {
  const base_name = era.get(`cstr:${cid}:头像`);
  const ret = [];
  let recent_s, recent_m, m_abused, m_hit;
  if (in_train) {
    recent_s =
      era.get(`tcvar:${cid}:刚刚施虐`) &&
      (era.get(`talent:${cid}:抖S`) || era.get(`talent:${cid}:小恶魔`));
    recent_m = era.get(`tcvar:${cid}:刚刚受虐`);
    m_abused =
      era.get(`talent:${cid}:喜欢责骂`) || era.get(`talent:${cid}:变态`);
    m_hit = era.get(`talent:${cid}:喜欢痛苦`) || era.get(`talent:${cid}:变态`);
  }
  ret.push({
    borderRadius: 20,
    names: in_train
      ? `位置_${i18n('zh-CN').location[location_enum.keys[era.get('flag:当前位置')]]}\t位置_酒店`
      : '位置_自宅',
  });
  if (dict[cid] && img_name) {
    if (in_train && era.get(`tcvar:${cid}:刚刚高潮`)) {
      ret.push(get_image_name(img_name, base_name, '_裸_高潮', '_裸'));
    } else {
      ret.push(get_image_name(img_name, base_name, '_裸'));
    }
    if (era.get(`cflag:${cid}:腋毛`) >= 2) {
      ret.push(get_image_name(img_name, base_name, '_裸_腋毛'));
    }
    if (era.get(`cflag:${cid}:妊娠阶段`) >> pregnant_stage_enum.late > 0) {
      ret.push(get_image_name(img_name, base_name, '_裸_孕'));
    }
    if (era.get(`cflag:${cid}:阴毛`) >= 2) {
      ret.push(get_image_name(img_name, base_name, '_裸_阴毛'));
    }
    if (
      in_train &&
      (era.get(`ex:${cid}:寸止`) ||
        era.get(`tcvar:${cid}:接近高潮`) ||
        era.get(`tcvar:${cid}:余韵`))
    ) {
      ret.push(get_image_name(img_name, base_name, '_裸_汗'));
    }
    ret.push(get_image_name(img_name, base_name, '_头'));
    if (in_train) {
      if (check_excited(cid, recent_s, recent_m, m_abused, m_hit)) {
        ret.push(get_image_name(img_name, base_name, '_头_腮红'));
      }
      if (era.get(`ex:${cid}:寸止`) || era.get(`tcvar:${cid}:接近高潮`)) {
        ret.push(get_image_name(img_name, base_name, '_头_汗'));
      }
      if (!sys_check_awake(cid) || era.get(`tcvar:${cid}:脱力`)) {
        ret.push(get_image_name(img_name, base_name, '_脸_睡'));
      } else if (
        era.get(`tcvar:${cid}:刚刚高潮`) ||
        era.get(`tcvar:${cid}:失神`)
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_高潮'));
      } else if (
        era.get(`mark:${cid}:反抗`) ||
        (recent_m === part_enum.abuse && !m_abused) ||
        era.get('tflag:强奸') === 0
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_嫌恶'));
      } else if (
        era.get(`mark:${cid}:苦痛`) ||
        (recent_m === part_enum.hit && !m_hit && !era.get(`talent:${cid}:圣母`))
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_痛苦'));
      } else if (
        (recent_m && !era.get(`talent:${cid}:圣母`)) ||
        era.get('tflag:强奸') === cid ||
        (recent_s && era.get(`talent:${cid}:抖S`))
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_兴奋'));
      } else if (era.get(`mark:${cid}:羞耻`) || recent_s) {
        ret.push(get_image_name(img_name, base_name, '_脸_害羞'));
      } else {
        ret.push(get_image_name(img_name, base_name, '_脸_一般'));
      }
    } else {
      ret.push(get_image_name(img_name, base_name, '_脸_一般'));
    }
    if (era.get(`cflag:${cid}:种族`) > 0) {
      ret.push(get_image_name(img_name, base_name, '_头_马耳'));
    }
    ret.push(get_image_name(img_name, base_name, '_头_发'));
    if (in_train) {
      if (
        era.get(`tcvar:${cid}:刚刚高潮`) ||
        era.get(`mark:${cid}:苦痛`) >= 2 ||
        (recent_m === part_enum.abuse && !m_abused) ||
        recent_m === part_enum.hit ||
        era.get(`ex:${cid}:破处`)
      ) {
        ret.push(get_image_name(img_name, base_name, '_头_泪'));
      }
      if (era.get(`ex:${cid}:TotalEX`)) {
        ret.push(get_image_name(img_name, base_name, '_裸_雾气'));
      }
    }
  } else {
    let body_hair_css_filter =
      era.get(`cflag:${cid}:种族`) > 0
        ? get_hair_color(era.get(`cstr:${cid}:毛色`), true) ||
          get_hair_color(era.get(`cstr:${cid}:发色`), true) ||
          ''
        : get_hair_color('black', true);
    let hair_css_filter =
      get_hair_color(era.get(`cstr:${cid}:发色`), true) || '';
    let temp;
    if (body_hair_css_filter) {
      body_hair_css_filter = `hue-rotate(${body_hair_css_filter[0]}deg) saturate(${body_hair_css_filter[1]}%) brightness(${body_hair_css_filter[2]}%)`;
    }
    if (hair_css_filter) {
      hair_css_filter = `hue-rotate(${hair_css_filter[0]}deg) saturate(${hair_css_filter[1]}%) brightness(${hair_css_filter[2]}%)`;
    }
    if (era.get(`cflag:${cid}:种族`) > 0) {
      ret.push({
        filter: body_hair_css_filter,
        names: '通用_裸_马尾',
      });
    }
    if ((temp = era.get(`cstr:${cid}:后发`))) {
      temp.split('+').forEach((e) =>
        ret.push({
          filter: hair_css_filter,
          names: `通用_后发_${i18n('zh-CN').feature[`bh_${e}`]}\t通用_后发_长直发`,
        }),
      );
    }
    ret.push('通用_裸');
    if (era.get(`cflag:${cid}:腋毛`) >= 2) {
      ret.push({
        filter: body_hair_css_filter,
        names: '通用_裸_腋毛',
      });
    }
    let added = '';
    if (era.get(`talent:${cid}:乳房尺寸`) >= 1) {
      added += '巨';
    }
    if (era.get(`cflag:${cid}:妊娠阶段`) >> pregnant_stage_enum.late > 0) {
      added += '孕';
    }
    if (added) {
      ret.push(`通用_裸_${added}`);
    }
    if (era.get(`cflag:${cid}:阴毛`) >= 2) {
      ret.push({
        filter: body_hair_css_filter,
        names: '通用_裸_阴毛',
      });
    }
    if (
      in_train &&
      (era.get(`ex:${cid}:寸止`) ||
        era.get(`tcvar:${cid}:接近高潮`) ||
        era.get(`tcvar:${cid}:余韵`))
    ) {
      ret.push(`通用_裸_汗`);
    }
    if ((temp = era.get(`cstr:${cid}:中发`))) {
      temp = i18n('zh-CN').feature[`bh_${temp}`];
      ret.push({
        filter: hair_css_filter,
        names: `通用_中发_${temp}\t通用_后发_${temp}\t通用_后发_双马尾`,
      });
    }
    ret.push('通用_头');
    if (in_train) {
      if (check_excited(cid, recent_s, recent_m, m_abused, m_hit)) {
        ret.push('通用_头_腮红');
      }
      if (
        era.get(`mark:${cid}:反抗`) ||
        era.get('tflag:强奸') >= 0 ||
        era.get(`mark:${cid}:苦痛`) ||
        recent_m ||
        (recent_s && era.get(`talent:${cid}:抖S`))
      ) {
        ret.push('通用_头_阴影');
      }
      if (
        era.get(`ex:${cid}:寸止`) ||
        era.get(`tcvar:${cid}:接近高潮`) ||
        era.get(`ex:${cid}:破处`)
      ) {
        ret.push('通用_头_汗');
      }
      if (!sys_check_awake(cid) || era.get(`tcvar:${cid}:脱力`)) {
        ret.push('通用_脸_微笑');
      } else if (
        era.get(`tcvar:${cid}:刚刚高潮`) ||
        era.get(`tcvar:${cid}:失神`)
      ) {
        ret.push('通用_脸_高潮');
      } else if (
        era.get(`mark:${cid}:反抗`) ||
        (recent_m === part_enum.abuse && !m_abused) ||
        era.get('tflag:强奸') === 0 ||
        era.get(`mark:${cid}:苦痛`) ||
        (recent_m === part_enum.hit && !m_hit && !era.get(`talent:${cid}:圣母`))
      ) {
        ret.push('通用_脸_咬牙');
      } else if (
        recent_m ||
        era.get('tflag:强奸') === cid ||
        (recent_s && era.get(`talent:${cid}:抖S`))
      ) {
        ret.push('通用_脸_舔嘴');
      } else {
        ret.push('通用_脸_微笑');
      }
    } else {
      ret.push('通用_脸_微笑');
    }
    const suffix = era.get(`cflag:${cid}:种族`) > 0 ? '_马' : '';
    temp = era.get(`cstr:${cid}:前发`);
    ret.push({
      filter: hair_css_filter,
      names: `通用_前发_${i18n('zh-CN').feature[`fh_${temp}`]}${suffix}\t通用_前发_厚刘海${suffix}`,
    });
    if ((temp = era.get(`cstr:${cid}:呆毛`))) {
      temp = i18n('zh-CN').feature[`th_${temp}`];
      ret.push({
        filter: hair_css_filter,
        names: `通用_呆毛_${temp}\t通用_呆毛_短`,
      });
    }
  }
  return ret;
}

module.exports = {
  check_chara_ero_image,
  set_chara_ero_image() {
    const image_names = era.get('chara').map((e) => ({
      id: e,
      name: `${era.get(`staticcstr:${e}:头像`)}_裸`,
    }));
    const checks = era.checkImage(...image_names.map((e) => e.name));
    image_names.forEach((e, i) => {
      if (checks[i]) {
        dict[e.id] = true;
      }
    });
  },
  sys_get_ero_image,
};
