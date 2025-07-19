const era = require('#/era-electron');

const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const {
  check_satisfied,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const check_ero_enabled = require('#/system/ero/sys-check-ero-action');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  get_characters_in_train,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero, run_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors, palam_colors } = require('#/data/color-const');
const {
  attr_background_colors,
  hair_colors,
  love_colors,
  mark_colors,
  relation_colors,
} = require('#/data/const.json');
const { mark_abbr, part_abbr } = require('#/data/ero/ero-alias.json');
const { lust_border, lust_from_palam } = require('#/data/ero/orgasm-const');
const {
  motion_enum,
  part_enum,
  part_names,
  up_enum,
} = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const {
  ero_action_names,
  ero_derive_check,
  ero_hooks,
} = require('#/data/event/ero-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_ero_status,
  get_love_info,
  get_relation_info,
} = require('#/data/info-generator');
const { location_enum, location_name } = require('#/data/locations');
const { check_chara_ero_image } = require('#/data/other-const');

/**
 * @param {number} cid
 * @returns {string}
 */
function get_chr(cid) {
  if (!cid) {
    return 'default';
  }
  const img = era.get(`cstr:${cid}:头像`);
  const ret = [];
  switch (era.get('flag:当前位置')) {
    case location_enum.summer_home:
      ret.push(`${img}_夏私`, `${img}_泳`, `${img}_私`, `${img}`, `${img}_夏`);
      break;
    default:
      ret.push(
        `${img}_私`,
        `${img}`,
        `${img}_${era.get('flag:季节') > 0 ? '夏' : '冬'}`,
      );
  }
  ret.push('\tdefault');
  return ret.join('\t');
}

/**
 * @param cid
 * @returns {PrintedSpan[]}
 */
function get_ero_marks(cid) {
  const status_list = [];
  new Array(6).fill(0).forEach((_, i) => {
    const mark_name = era.get(`markname:${i}`);
    const mark = era.get(`mark:${cid}:${i}`);
    if (mark) {
      status_list.push({
        color: get_color(undefined, mark_colors[mark_name], mark / 3),
        content: `[${mark_abbr[mark_name]}${mark}]`,
      });
    }
  });
  if (era.get(`talent:${cid}:钢之意志`) > 0) {
    status_list.push({ color: mark_colors['钢'], content: '[钢]' });
  }
  return status_list.map((e) => {
    e.display = 'inline-block';
    return e;
  });
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
 * @param {number} cid
 * @returns {({filter:string,names:string}|string)[]}
 */
function get_image(cid) {
  const img_list = [];
  const recent_s =
    era.get(`tcvar:${cid}:刚刚施虐`) &&
    (era.get(`talent:${cid}:抖S`) || era.get(`talent:${cid}:小恶魔`));
  const recent_m = era.get(`tcvar:${cid}:刚刚受虐`);
  const m_abused =
    era.get(`talent:${cid}:喜欢责骂`) || era.get(`talent:${cid}:变态`);
  const m_hit =
    era.get(`talent:${cid}:喜欢痛苦`) || era.get(`talent:${cid}:变态`);
  img_list.push({
    borderRadius: 20,
    names: `位置_${location_name[era.get('flag:当前位置')]}`,
  });
  if (check_chara_ero_image(cid)) {
    const img_name = era.get(`cstr:${cid}:头像`);
    if (era.get(`tcvar:${cid}:刚刚高潮`)) {
      img_list.push(`${img_name}_裸_V\t${img_name}_裸`);
    } else {
      img_list.push(`${img_name}_裸`);
    }
    if (era.get(`cflag:${cid}:腋毛`) >= 2) {
      img_list.push(`${img_name}_裸_腋毛`);
    }
    if (era.get(`cflag:${cid}:妊娠阶段`) >> pregnant_stage_enum.late > 0) {
      img_list.push(`${img_name}_裸_孕`);
    }
    if (era.get(`cflag:${cid}:阴毛`) >= 2) {
      img_list.push(`${img_name}_裸_阴毛`);
    }
    if (
      era.get(`ex:${cid}:寸止`) ||
      era.get(`tcvar:${cid}:接近高潮`) ||
      era.get(`tcvar:${cid}:余韵`)
    ) {
      img_list.push(`${img_name}_裸_汗`);
    }
    img_list.push(`${img_name}_头`);
    if (check_excited(cid, recent_s, recent_m, m_abused, m_hit)) {
      img_list.push(`${img_name}_头_腮红`);
    }
    if (era.get(`ex:${cid}:寸止`) || era.get(`tcvar:${cid}:接近高潮`)) {
      img_list.push(`${img_name}_头_汗`);
    }
    if (!sys_check_awake(cid) || era.get(`tcvar:${cid}:脱力`)) {
      img_list.push(`${img_name}_脸_睡`);
    } else if (
      era.get(`tcvar:${cid}:刚刚高潮`) ||
      era.get(`tcvar:${cid}:失神`)
    ) {
      img_list.push(`${img_name}_脸_高潮`);
    } else if (
      era.get(`mark:${cid}:反抗`) ||
      (recent_m === part_enum.abuse && !m_abused) ||
      era.get('tflag:强奸') === 0
    ) {
      img_list.push(`${img_name}_脸_嫌恶`);
    } else if (
      era.get(`mark:${cid}:苦痛`) ||
      (recent_m === part_enum.hit && !m_hit && !era.get(`talent:${cid}:圣母`))
    ) {
      img_list.push(`${img_name}_脸_痛苦`);
    } else if (
      (recent_m && !era.get(`talent:${cid}:圣母`)) ||
      era.get('tflag:强奸') === cid ||
      (recent_s && era.get(`talent:${cid}:抖S`))
    ) {
      img_list.push(`${img_name}_脸_兴奋`);
    } else if (era.get(`mark:${cid}:羞耻`) || recent_s) {
      img_list.push(`${img_name}_脸_害羞`);
    } else {
      img_list.push(`${img_name}_脸_一般`);
    }
    img_list.push(`${img_name}_头_发`);
    if (
      era.get(`tcvar:${cid}:刚刚高潮`) ||
      era.get(`mark:${cid}:苦痛`) >= 2 ||
      (recent_m === part_enum.abuse && !m_abused) ||
      recent_m === part_enum.hit ||
      era.get(`ex:${cid}:破处`)
    ) {
      img_list.push(`${img_name}_头_泪`);
    }
    if (era.get(`ex:${cid}:TotalEX`)) {
      img_list.push(`${img_name}_裸_雾气`);
    }
  } else {
    let body_hair_css_filter =
      era.get(`cflag:${cid}:种族`) > 0
        ? hair_colors[era.get(`cstr:${cid}:毛色`)] ||
          hair_colors[era.get(`cstr:${cid}:发色`)] ||
          ''
        : '黑';
    let hair_css_filter = hair_colors[era.get(`cstr:${cid}:发色`)] || '';
    let temp;
    if (body_hair_css_filter) {
      body_hair_css_filter = `hue-rotate(${body_hair_css_filter[0]}deg) saturate(${body_hair_css_filter[1]}%) brightness(${body_hair_css_filter[2]}%)`;
    }
    if (hair_css_filter) {
      hair_css_filter = `hue-rotate(${hair_css_filter[0]}deg) saturate(${hair_css_filter[1]}%) brightness(${hair_css_filter[2]}%)`;
    }
    if (era.get(`cflag:${cid}:种族`) > 0) {
      img_list.push({
        filter: body_hair_css_filter,
        names: '通用_裸_马尾',
      });
    }
    era
      .get(`cstr:${cid}:后发`)
      .split('+')
      .forEach((e) =>
        img_list.push({
          filter: hair_css_filter,
          names: `通用_后发_${e}\t通用_后发_长直发`,
        }),
      );
    img_list.push('通用_裸');
    if (era.get(`cflag:${cid}:腋毛`) >= 2) {
      img_list.push({
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
      img_list.push(`通用_裸_${added}`);
    }
    if (era.get(`cflag:${cid}:阴毛`) >= 2) {
      img_list.push({
        filter: body_hair_css_filter,
        names: '通用_裸_阴毛',
      });
    }
    if (
      era.get(`ex:${cid}:寸止`) ||
      era.get(`tcvar:${cid}:接近高潮`) ||
      era.get(`tcvar:${cid}:余韵`)
    ) {
      img_list.push(`通用_裸_汗`);
    }
    if ((temp = era.get(`cstr:${cid}:中发`))) {
      img_list.push({
        filter: hair_css_filter,
        names: `通用_中发_${temp}\t通用_后发_${temp}\t通用_后发_双马尾`,
      });
    }
    img_list.push('通用_头');
    if (check_excited(cid, recent_s, recent_m, m_abused, m_hit)) {
      img_list.push('通用_头_腮红');
    }
    if (
      era.get(`mark:${cid}:反抗`) ||
      era.get('tflag:强奸') >= 0 ||
      era.get(`mark:${cid}:苦痛`) ||
      recent_m ||
      (recent_s && era.get(`talent:${cid}:抖S`))
    ) {
      img_list.push('通用_头_阴影');
    }
    if (
      era.get(`ex:${cid}:寸止`) ||
      era.get(`tcvar:${cid}:接近高潮`) ||
      era.get(`ex:${cid}:破处`)
    ) {
      img_list.push('通用_头_汗');
    }
    if (!sys_check_awake(cid) || era.get(`tcvar:${cid}:脱力`)) {
      img_list.push('通用_脸_微笑');
    } else if (
      era.get(`tcvar:${cid}:刚刚高潮`) ||
      era.get(`tcvar:${cid}:失神`)
    ) {
      img_list.push('通用_脸_高潮');
    } else if (
      era.get(`mark:${cid}:反抗`) ||
      (recent_m === part_enum.abuse && !m_abused) ||
      era.get('tflag:强奸') === 0 ||
      era.get(`mark:${cid}:苦痛`) ||
      (recent_m === part_enum.hit && !m_hit && !era.get(`talent:${cid}:圣母`))
    ) {
      img_list.push('通用_脸_咬牙');
    } else if (
      recent_m ||
      era.get('tflag:强奸') === cid ||
      (recent_s && era.get(`talent:${cid}:抖S`))
    ) {
      img_list.push('通用_脸_舔嘴');
    } else {
      img_list.push('通用_脸_微笑');
    }
    const suffix = era.get(`cflag:${cid}:种族`) > 0 ? '_马' : '';
    img_list.push({
      filter: hair_css_filter,
      names: `通用_前发_${era.get(`cstr:${cid}:前发`)}${suffix}\t通用_前发_厚刘海${suffix}`,
    });
    if ((temp = era.get(`cstr:${cid}:呆毛`))) {
      img_list.push({
        filter: hair_css_filter,
        names: `通用_呆毛_${temp}\t通用_呆毛_短`,
      });
    }
  }
  return img_list;
}

/**
 * @param {number} cid
 * @param {number} part
 * @param {number} offset
 * @returns {[TextObject,ProgressObject]}
 */
function get_palam_progress(cid, part, offset = 0) {
  const part_name = part_names[part];
  const param = Math.floor(era.get(`param:${cid}:${part_name}快感`));
  const limit = era.get(`tcvar:${cid}:${part_name}快感上限`);
  return [
    {
      config: { offset, width: 1 },
      content: part_abbr[part_name],
      type: 'text',
    },
    {
      config: {
        color: get_color(...palam_colors.progress, param / limit),
        height: 22,
        width: 3,
      },
      inContent: `${param}/${limit}`,
      outContent: '',
      percentage: (param * 100) / limit,
      type: 'progress',
    },
  ];
}

/** @returns {ColumnObject[]} */
function get_chara_info(cid) {
  /** @type {*[]} */
  const ret = [
    {
      config: { width: 4 },
      content: [get_chara_talk(cid).get_colored_name()],
      type: 'text',
    },
    {
      config: { width: 20 },
      content: get_ero_status(cid),
      type: 'text',
    },
  ];
  ['体力', '精力'].forEach((e) => {
    const val = era.get(`base:${cid}:${e}`),
      limit = era.get(`maxbase:${cid}:${e}`);
    ret.push(
      { config: { width: 1 }, content: e.substring(0, 1), type: 'text' },
      {
        config: { color: attr_background_colors[e], height: 22, width: 3 },
        inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
        percentage: (val * 100) / limit,
        type: 'progress',
      },
    );
  });
  const penis_size = get_penis_size(cid);
  const virgin_size = era.get(`cflag:${cid}:阴道尺寸`);
  const palam_list = [part_enum.mouth, part_enum.breast, part_enum.body];
  if (penis_size > 0) {
    palam_list.push(part_enum.penis);
  }
  if (virgin_size > 0) {
    if (!penis_size) {
      palam_list.push(part_enum.clitoris);
    }
    palam_list.push(part_enum.virgin);
  }
  palam_list.push(part_enum.anal, part_enum.sadism, part_enum.masochism);
  palam_list
    .splice(0, 4)
    .forEach((e) => ret.push(...get_palam_progress(cid, e)));
  ret.push({
    config: { width: 1 },
    content: '欲',
    type: 'text',
  });
  if (era.get('flag:当前位置') === location_enum.mejiro) {
    ret.push({
      config: { color: palam_colors.progress[1], height: 22, width: 3 },
      inContent: '一心同体',
      percentage: 100,
      type: 'progress',
    });
  } else if (
    (sys_check_hide_relation_and_love(cid) & 0b1) > 0 ||
    sys_check_limit_relation_and_love(cid)
  ) {
    const random_lust = get_random_value(0, lust_border.max) / lust_border.max;
    ret.push({
      config: {
        color: get_color(...palam_colors.progress, random_lust),
        height: 22,
        width: 3,
      },
      inContent: '？',
      percentage: random_lust * 100,
      type: 'progress',
    });
  } else {
    const lust = era.get(`base:${cid}:性欲`);
    const l_percent = Math.min(lust / lust_border.max, 1);
    ret.push({
      config: {
        color: get_color(...palam_colors.progress, l_percent),
        height: 22,
        width: 3,
      },
      inContent:
        lust === lust_border.limit ? '！' : `${(l_percent * 100).toFixed(2)}%`,
      percentage: l_percent * 100,
      type: 'progress',
    });
  }
  ret.push(...get_palam_progress(cid, palam_list.shift(), 4));
  palam_list.forEach((e) => ret.push(...get_palam_progress(cid, e)));
  ret.push({
    config: { width: 9 * (10 - palam_list) },
    content: '',
    type: 'text',
  });
  return ret;
}

/**
 * @param {string} type
 * @param {number} size
 * @returns {boolean}
 */
function print_milking(type, size) {
  const my_milk = era.get(`tflag:${type}可卖`);
  const milk = era.get(`tflag:${type}产量`) + my_milk;
  if (milk > 0) {
    const got = Math.floor(milk / size);
    const got_me = Math.floor(my_milk / size);
    const buffer = [];
    buffer.push(
      '用榨乳器收集到了 ',
      {
        color: palam_colors.notifications[1],
        content: `${milk.toLocaleString()}ml`,
        fontWeight: 'bold',
      },
      ' ',
      type,
    );
    if (got > 0) {
      buffer.push(
        '，灌装处理后获得了 ',
        {
          color: palam_colors.notifications[1],
          content: got.toString(),
          fontWeight: 'bold',
        },
        ' 瓶【',
        type,
        '】',
      );
    }
    if (got_me > 0) {
      buffer.push(
        '（其中 ',
        {
          color: palam_colors.notifications[1],
          content: got_me.toString(),
          fontWeight: 'bold',
        },
        ' 瓶来自于 ',
        get_chara_talk(0).get_colored_name(),
        '）',
      );
    }
    buffer.push('！');
    era.println();
    era.print(buffer);
    era.add(`item:${type}`, got - got_me);
    era.add(`item:鲜榨${type}`, got_me);
    return true;
  }
}

/**
 * @param {number} [lover]
 * @param {boolean} [skip_start_end=false]
 */
async function page_ero(lover, skip_start_end = false) {
  const in_basement = era.get('flag:当前位置') === location_enum.basement;
  const rape = era.get('tflag:强奸');
  lover ||= era.get('tflag:当前对手') || era.get('flag:当前互动角色');
  let ero_flag = true;
  let assistant = era.get('flag:助手');
  assistant =
    sys_check_awake(assistant) && !sys_check_remote(assistant) && assistant;
  era.set('tflag:当前对手', lover);
  if (era.getCharactersInTrain().length === 2 && assistant > 0) {
    init_ero(assistant);
    era.set('tflag:当前助手', assistant);
  }
  if (!skip_start_end) {
    era.drawLine();
    await get_custom_ero(lover).ero_start(sys_handle_ero_act);
  }

  let master = era.get('tflag:主导权');
  get_characters_in_train().forEach((cid) => {
    era.set(
      `tcvar:${cid}:体位`,
      get_random_entry([motion_enum.lie, motion_enum.sit, motion_enum.rev]),
    );
    era.set(`tcvar:${cid}:朝向`, get_random_value(0, 1));
  });
  era.set(`tcvar:${master}:上下`, up_enum.up);
  while (ero_flag) {
    await era.clear();

    lover = era.get('tflag:当前对手');
    let curr_supporter = era.get('tflag:当前助手');

    const filters = new Array(7)
      .fill(0)
      .map((_, i) => era.get(`flag:${70 + i}`));
    const left_columns = [];
    const lost_mind = era.get('tcvar:0:失神');
    const love = get_love_info(lover);
    const marks = get_ero_marks(lover);
    const relation = get_relation_info(lover);
    if (!in_basement) {
      left_columns.push({
        config: { width: 8 },
        content: `${era.get('flag:当前年')} 年 ${era.get(
          'flag:当前月',
        )} 月 第 ${era.get('flag:当前周')} 周`,
        type: 'text',
      });
    }
    left_columns.push(
      {
        config: { align: in_basement ? 'left' : 'right', width: 16 },
        content: [
          `位于 ${location_name[era.get('flag:当前位置')]} `,
          {
            content: era.get('tflag:全身镜') > 0 ? '全身镜前' : '',
            color: buff_colors[2],
          },
        ],
        type: 'text',
      },
      { type: 'divider' },
      ...get_chara_info(0),
      {
        content: [{ isBr: true }],
        type: 'text',
      },
      ...get_chara_info(lover),
    );
    left_columns.push({
      config: { width: 12 },
      content: [`第 ${era.get('tflag:回合')} 回合 `],
      type: 'text',
    });
    if (rape === 0) {
      left_columns.at(-1).content.push({
        color: buff_colors[2],
        content: '强奸事件发生！',
        fontWeight: 'bold',
      });
    } else if (rape > 0) {
      left_columns.at(-1).content.push({
        color: buff_colors[2],
        content: '逆强奸事件发生！',
        fontWeight: 'bold',
      });
    }
    left_columns.push({
      config: { align: 'right', width: 12 },
      content: [
        '🤝 ',
        {
          color: relation_colors[relation[0]],
          content: relation[0],
          title: `好感：${relation.join(' ')}`,
        },
        ' · ❤️ ',
        {
          color: love_colors[love[0]],
          content: love[0],
          title: `爱慕：${love.join(' ')}`,
        },
        ' ',
        ...marks,
      ],
      type: 'text',
    });

    /** @type {number[]} */
    const characters_in_train = get_characters_in_train();
    master = era.get('tflag:主导权');
    if (master === 0) {
      if (characters_in_train.length > 2) {
        left_columns.push(
          { type: 'divider' },
          { config: { width: 6 }, content: '对手', type: 'text' },
          ...characters_in_train
            .filter((v) => v)
            .map((id, i) => {
              return {
                accelerator: id + 1000,
                config: {
                  disabled: lost_mind > 0,
                  buttonType: id !== lover ? 'info' : 'warning',
                  offset: !i || i % 3 ? 0 : 6,
                  width: 6,
                },
                content: era.get(`callname:${id}:-2`),
                type: 'button',
              };
            }),
        );
        if ((characters_in_train.length - 1) % 3) {
          left_columns.push({
            config: { width: 18 - ((characters_in_train.length - 1) % 3) * 6 },
            content: '',
            type: 'text',
          });
        }
        left_columns.push(
          { config: { width: 6 }, content: '协助者', type: 'text' },
          ...characters_in_train
            .filter((v) => v)
            .map((id, i) => {
              return {
                accelerator: id + 2000,
                config: {
                  disabled: id === lover || lost_mind > 0,
                  buttonType: id === curr_supporter ? 'warning' : 'info',
                  offset: !i || i % 3 ? 0 : 6,
                  width: 6,
                },
                content: era.get(`callname:${id}:-2`),
                type: 'button',
              };
            }),
        );
      }
    } else if (curr_supporter) {
      left_columns.push(
        { type: 'divider' },
        {
          content: [
            '助手：',
            get_chara_talk(curr_supporter).get_colored_name(),
          ],
          type: 'text',
        },
      );
    }

    const base_check =
      rape === -1 &&
      sys_check_awake(lover) &&
      !era.get(`tcvar:${lover}:脱力`) &&
      !era.get(`tcvar:${lover}:失神`) &&
      !era.get(`status:${lover}:超马跳Z`) &&
      era.get(`mark:${lover}:同心`) < 3 &&
      era.get(`mark:${lover}:欢愉`) < 3;
    const current = new Date().getTime();
    const filtered_ero_actions = sys_filter_ero_act(0, lover, filters);
    const { last_action, lover_action } =
      master > 0
        ? {
            last_action: era.get('tflag:对手行动'),
            lover_action: era.get('tflag:前回行动'),
          }
        : {
            last_action: era.get('tflag:前回行动'),
            lover_action: era.get('tflag:对手行动'),
          };
    let all_action_disabled = lost_mind > 0;
    const action_bar = [];
    action_bar.push({
      content:
        last_action >= 0
          ? [
              get_chara_talk(0).get_colored_name(),
              ' 的行动：',
              ero_action_names[last_action],
            ]
          : [],
      type: 'text',
    });
    if (filtered_ero_actions.indexOf(last_action) !== -1 && !master) {
      action_bar.push({
        accelerator: last_action,
        config: {
          disabled:
            lost_mind > 0 ||
            (base_check &&
              check_ero_enabled(lover, curr_supporter, last_action) < 0),
          disableWarning: true,
        },
        content: `再次 ${ero_action_names[last_action]}`,
        type: 'button',
      });
    }
    action_bar.push({
      content:
        lover_action >= 0
          ? [
              get_chara_talk(lover).get_colored_name(),
              ' 的行动：',
              ero_action_names[lover_action],
            ]
          : '',
      type: 'text',
    });
    const setting_bar = [
      '设置',
      '身体接触',
      '脏污检查',
      '个人情报',
      '目标情报',
    ];
    if (!master) {
      setting_bar.unshift('转身');
    }
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: left_columns,
        config: { width: 16, gutter: 10 },
      },
      {
        columns:
          curr_supporter > 0
            ? [
                {
                  config: { offset: 1, width: 18 },
                  names: get_image(lover),
                  type: 'image.whole',
                },
                {
                  config: { width: 5 },
                  names: get_chr(curr_supporter),
                  type: 'image.whole',
                },
              ]
            : [
                {
                  config: {
                    offset: 1,
                    width: !master && characters_in_train.length > 2 ? 22 : 19,
                  },
                  names: get_image(lover),
                  type: 'image.whole',
                },
              ],
        config: { verticalAlign: 'bottom', width: 8 },
      },
      [{ type: 'divider' }],
      filtered_ero_actions.map((e) => {
        const check_val = check_ero_enabled(lover, curr_supporter, e);
        if (isNaN(check_val)) {
          era.logger.error(`${ero_hooks.keys[e]} ${check_val}`);
        }
        const action_disabled = base_check && check_val < 0;
        all_action_disabled &&= action_disabled;
        return {
          accelerator: e,
          config: {
            buttonType: ero_derive_check[e] ? 'danger' : 'warning',
            disabled: action_disabled,
            width: 4,
          },
          content: ero_action_names[e],
          type: 'button',
        };
      }),
      action_bar.map((e) => {
        (e.config ||= {}).width = 8;
        return e;
      }),
      [{ type: 'divider' }],
      setting_bar.map((e, i) => ({
        accelerator: 900 + i + (master > 0),
        config: { disabled: lost_mind > 0, width: 4 },
        content: e,
        type: 'button',
      })),
      [
        {
          accelerator: 999,
          config: { disabled: master > 0 || lost_mind > 0 },
          content: '返回',
          type: 'button',
        },
      ],
    );

    era.logger.debug(
      `ero actions listed done! ${(
        new Date().getTime() - current
      ).toLocaleString()}ms`,
    );
    let ret;
    if (all_action_disabled) {
      ret = ero_hooks.relax;
    } else {
      ret = await era.input();
    }
    ero_flag =
      (await sys_handle_ero_act(ret, filters)) &&
      get_characters_in_train().length > 1;
    if (era.get('tflag:投降') > 0) {
      era.set('tflag:投降', 0);
      while (era.get('tflag:主导权') > 0 && ero_flag) {
        await sys_handle_ero_act(ero_hooks.relax, filters);
        master = era.get('tflag:主导权');
        ero_flag &&=
          !era.get(`tcvar:${master}:脱力`) && !era.get(`tcvar:${master}:逃跑`);
      }
    } else {
      master = era.get('tflag:主导权');
      ero_flag &&=
        !era.get(`tcvar:${master}:脱力`) && !era.get(`tcvar:${master}:逃跑`);
    }
  }
  era.drawLine();
  await era.printAndWait('【性事结束了】');
  if (!skip_start_end) {
    await get_custom_ero(lover).ero_end(sys_handle_ero_act);
  }
  era.println();
  let wait_flag = false;
  const partner_list = get_characters_in_train().filter((e) => e > 0);
  for (const cid of partner_list) {
    if (sys_check_awake(cid)) {
      let temp;
      if (!check_satisfied(cid)) {
        sys_change_lust(cid, lust_from_palam / 2);
        wait_flag =
          sys_like_chara(cid, 0, -get_random_value(50, 100)) || wait_flag;
      } else if ((temp = era.get(`talent:${cid}:病娇`)) > 0) {
        wait_flag =
          sys_like_chara(cid, 0, get_random_value(25, 50) * temp, temp === 2) ||
          wait_flag;
      }
    }
  }
  if (!in_basement) {
    let temp_chara_list = era.getCharactersInTrain();
    const punish_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        temp_chara_list.indexOf(cid) === -1 && era.get(`love:${cid}`) >= 75,
    );
    for (const cid of punish_list) {
      const is_aware =
        get_custom_mec(cid).is_anger_for_unfaithful(partner_list) &&
        get_custom_check(cid).is_aware_unfaithful(partner_list);
      get_custom_check(cid).check_after_betrayed(partner_list, is_aware);
      if (is_aware) {
        wait_flag =
          (await run_custom_ero(cid, ero_hooks.after_betrayed, {
            partners: partner_list,
          })) || wait_flag;
      }
    }
  }
  const size = 200 + 300 * !era.get('item:乳汁处理器');
  wait_flag = print_milking('人奶', size) || wait_flag;
  wait_flag = print_milking('马奶', size) || wait_flag;
  if (wait_flag) {
    await era.waitAnyKey();
  }
}

module.exports = page_ero;
