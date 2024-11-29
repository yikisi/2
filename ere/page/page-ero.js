const era = require('#/era-electron');

const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const {
  check_satisfied,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const check_ero_enabled = require('#/system/ero/sys-check-ero-action');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const { get_characters_in_train } = require('#/system/ero/sys-prepare-ero');
const sys_call_ero_event = require('#/system/script/sys-call-ero-script');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');
const { get_random_value } = require('#/utils/value-utils');

const {
  buff_colors,
  palam_colors,
  skill_colors,
} = require('#/data/color-const');
const {
  attr_background_colors,
  hair_colors,
  love_colors,
  mark_colors,
  relation_colors,
} = require('#/data/const.json');
const { mark_abbr, part_abbr } = require('#/data/ero/ero-alias.json');
const { lust_border, lust_from_palam } = require('#/data/ero/orgasm-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
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
 * @param {string} img_name
 * @returns {string}
 */
function get_chr(img_name) {
  if (!img_name) {
    return '';
  }
  let ret;
  switch (era.get('flag:当前位置')) {
    case location_enum.summer_home:
      ret = [
        `${img_name}_夏私`,
        `${img_name}_泳`,
        `${img_name}_私`,
        `${img_name}`,
        `${img_name}_夏`,
      ];
      break;
    default:
      ret = [
        `${img_name}_私`,
        `${img_name}`,
        `${img_name}_${era.get('flag:季节') ? '夏' : '冬'}`,
      ];
  }
  return ret.join('\t');
}

/**
 * @param chara_id
 * @returns {{color:string,content:string,display:'inline-block'}[]}
 */
function get_ero_marks(chara_id) {
  const status_list = [];
  new Array(6).fill(0).forEach((_, i) => {
    const mark_name = era.get(`markname:${i}`);
    const mark = era.get(`mark:${chara_id}:${i}`);
    if (mark) {
      status_list.push({
        color: get_color(undefined, mark_colors[mark_name], mark / 3),
        content: `[${mark_abbr[mark_name]}${mark}]`,
      });
    }
  });
  if (era.get(`talent:${chara_id}:钢之意志`)) {
    status_list.push({ color: skill_colors[1], content: '[钢]' });
  }
  return status_list.map((e) => {
    e.display = 'inline-block';
    return e;
  });
}

/**
 * @param {number} chara_id
 * @param {number} recent_s
 * @param {number} recent_m
 * @param {number} m_abused
 * @param {number} m_hit
 * @returns {boolean}
 */
function check_excited(chara_id, recent_s, recent_m, m_abused, m_hit) {
  return (
    era.get(`tcvar:${chara_id}:发情`) ||
    era.get(`tcvar:${chara_id}:接近高潮`) ||
    era.get(`tcvar:${chara_id}:余韵`) ||
    era.get(`mark:${chara_id}:欢愉`) ||
    era.get(`mark:${chara_id}:淫纹`) ||
    era.get(`base:${chara_id}:性欲`) >= lust_border.itch ||
    recent_s ||
    (recent_m === part_enum.abuse && m_abused) ||
    (recent_m === part_enum.hit && m_hit)
  );
}

/**
 * @param {number} chara_id
 * @returns {({filter:string,names:string}|string)[]}
 */
function get_image(chara_id) {
  const img_list = [],
    recent_s =
      era.get(`tcvar:${chara_id}:刚刚施虐`) &&
      (era.get(`talent:${chara_id}:抖S`) ||
        era.get(`talent:${chara_id}:小恶魔`)),
    recent_m = era.get(`tcvar:${chara_id}:刚刚受虐`),
    m_abused =
      era.get(`talent:${chara_id}:喜欢责骂`) ||
      era.get(`talent:${chara_id}:变态`),
    m_hit =
      era.get(`talent:${chara_id}:喜欢痛苦`) ||
      era.get(`talent:${chara_id}:变态`);
  img_list.push({
    borderRadius: 20,
    names: `位置_${location_name[era.get('flag:当前位置')]}`,
  });
  if (check_chara_ero_image(chara_id)) {
    const img_name = era.get(`cstr:${chara_id}:头像`);
    if (era.get(`tcvar:${chara_id}:刚刚高潮`)) {
      img_list.push(`${img_name}_裸_V\t${img_name}_裸`);
    } else {
      img_list.push(`${img_name}_裸`);
    }
    if (era.get(`cflag:${chara_id}:腋毛`) >= 2) {
      img_list.push(`${img_name}_裸_腋毛`);
    }
    if (era.get(`cflag:${chara_id}:妊娠阶段`) >> pregnant_stage_enum.late > 0) {
      img_list.push(`${img_name}_裸_孕`);
    }
    if (era.get(`cflag:${chara_id}:阴毛`) >= 2) {
      img_list.push(`${img_name}_裸_阴毛`);
    }
    if (
      era.get(`ex:${chara_id}:寸止`) ||
      era.get(`tcvar:${chara_id}:接近高潮`) ||
      era.get(`tcvar:${chara_id}:余韵`)
    ) {
      img_list.push(`${img_name}_裸_汗`);
    }
    img_list.push(`${img_name}_头`);
    if (check_excited(chara_id, recent_s, recent_m, m_abused, m_hit)) {
      img_list.push(`${img_name}_头_腮红`);
    }
    if (
      era.get(`ex:${chara_id}:寸止`) ||
      era.get(`tcvar:${chara_id}:接近高潮`)
    ) {
      img_list.push(`${img_name}_头_汗`);
    }
    if (!sys_check_awake(chara_id) || era.get(`tcvar:${chara_id}:脱力`)) {
      img_list.push(`${img_name}_脸_睡`);
    } else if (
      era.get(`tcvar:${chara_id}:刚刚高潮`) ||
      era.get(`tcvar:${chara_id}:失神`)
    ) {
      img_list.push(`${img_name}_脸_高潮`);
    } else if (
      era.get(`mark:${chara_id}:反抗`) ||
      (recent_m === part_enum.abuse && !m_abused) ||
      era.get('tflag:强奸') === 0
    ) {
      img_list.push(`${img_name}_脸_嫌恶`);
    } else if (
      era.get(`mark:${chara_id}:苦痛`) ||
      (recent_m === part_enum.hit &&
        !m_hit &&
        !era.get(`talent:${chara_id}:圣母`))
    ) {
      img_list.push(`${img_name}_脸_痛苦`);
    } else if (
      (recent_m && !era.get(`talent:${chara_id}:圣母`)) ||
      era.get('tflag:强奸') === chara_id ||
      (recent_s && era.get(`talent:${chara_id}:抖S`))
    ) {
      img_list.push(`${img_name}_脸_兴奋`);
    } else if (era.get(`mark:${chara_id}:羞耻`) || recent_s) {
      img_list.push(`${img_name}_脸_害羞`);
    } else {
      img_list.push(`${img_name}_脸_一般`);
    }
    img_list.push(`${img_name}_头_发`);
    if (
      era.get(`tcvar:${chara_id}:刚刚高潮`) ||
      era.get(`mark:${chara_id}:苦痛`) >= 2 ||
      (recent_m === part_enum.abuse && !m_abused) ||
      recent_m === part_enum.hit ||
      era.get(`ex:${chara_id}:破处标记`)
    ) {
      img_list.push(`${img_name}_头_泪`);
    }
    if (era.get(`ex:${chara_id}:TotalEX`)) {
      img_list.push(`${img_name}_裸_雾气`);
    }
  } else {
    let body_hair_css_filter = era.get(`cflag:${chara_id}:种族`)
        ? hair_colors[era.get(`cstr:${chara_id}:毛色`)] ||
          hair_colors[era.get(`cstr:${chara_id}:发色`)] ||
          ''
        : '黑',
      hair_css_filter = hair_colors[era.get(`cstr:${chara_id}:发色`)] || '',
      temp;
    if (body_hair_css_filter) {
      body_hair_css_filter = `hue-rotate(${body_hair_css_filter[0]}deg) saturate(${body_hair_css_filter[1]}%) brightness(${body_hair_css_filter[2]}%)`;
    }
    if (hair_css_filter) {
      hair_css_filter = `hue-rotate(${hair_css_filter[0]}deg) saturate(${hair_css_filter[1]}%) brightness(${hair_css_filter[2]}%)`;
    }
    if (era.get(`cflag:${chara_id}:种族`)) {
      img_list.push({
        filter: body_hair_css_filter,
        names: '通用_裸_马尾',
      });
    }
    era
      .get(`cstr:${chara_id}:后发`)
      .split('+')
      .forEach((e) =>
        img_list.push({
          filter: hair_css_filter,
          names: `通用_后发_${e}\t通用_后发_长直发`,
        }),
      );
    img_list.push('通用_裸');
    if (era.get(`cflag:${chara_id}:腋毛`) >= 2) {
      img_list.push({
        filter: body_hair_css_filter,
        names: '通用_裸_腋毛',
      });
    }
    let added = '';
    if (era.get(`talent:${chara_id}:乳房尺寸`) >= 1) {
      added += '巨';
    }
    if (era.get(`cflag:${chara_id}:妊娠阶段`) >> pregnant_stage_enum.late > 0) {
      added += '孕';
    }
    if (added) {
      img_list.push(`通用_裸_${added}`);
    }
    if (era.get(`cflag:${chara_id}:阴毛`) >= 2) {
      img_list.push({
        filter: body_hair_css_filter,
        names: '通用_裸_阴毛',
      });
    }
    if (
      era.get(`ex:${chara_id}:寸止`) ||
      era.get(`tcvar:${chara_id}:接近高潮`) ||
      era.get(`tcvar:${chara_id}:余韵`)
    ) {
      img_list.push(`通用_裸_汗`);
    }
    if ((temp = era.get(`cstr:${chara_id}:中发`))) {
      img_list.push({
        filter: hair_css_filter,
        names: `通用_中发_${temp}\t通用_后发_${temp}\t通用_后发_双马尾`,
      });
    }
    img_list.push('通用_头');
    if (check_excited(chara_id, recent_s, recent_m, m_abused, m_hit)) {
      img_list.push('通用_头_腮红');
    }
    if (
      era.get(`mark:${chara_id}:反抗`) ||
      era.get('tflag:强奸') >= 0 ||
      era.get(`mark:${chara_id}:苦痛`) ||
      recent_m ||
      (recent_s && era.get(`talent:${chara_id}:抖S`))
    ) {
      img_list.push('通用_头_阴影');
    }
    if (
      era.get(`ex:${chara_id}:寸止`) ||
      era.get(`tcvar:${chara_id}:接近高潮`) ||
      era.get(`ex:${chara_id}:破处标记`)
    ) {
      img_list.push('通用_头_汗');
    }
    if (!sys_check_awake(chara_id) || era.get(`tcvar:${chara_id}:脱力`)) {
      img_list.push('通用_脸_微笑');
    } else if (
      era.get(`tcvar:${chara_id}:刚刚高潮`) ||
      era.get(`tcvar:${chara_id}:失神`)
    ) {
      img_list.push('通用_脸_高潮');
    } else if (
      era.get(`mark:${chara_id}:反抗`) ||
      (recent_m === part_enum.abuse && !m_abused) ||
      era.get('tflag:强奸') === 0 ||
      era.get(`mark:${chara_id}:苦痛`) ||
      (recent_m === part_enum.hit &&
        !m_hit &&
        !era.get(`talent:${chara_id}:圣母`))
    ) {
      img_list.push('通用_脸_咬牙');
    } else if (
      recent_m ||
      era.get('tflag:强奸') === chara_id ||
      (recent_s && era.get(`talent:${chara_id}:抖S`))
    ) {
      img_list.push('通用_脸_舔嘴');
    } else {
      img_list.push('通用_脸_微笑');
    }
    const suffix = era.get(`cflag:${chara_id}:种族`) ? '_马' : '';
    img_list.push({
      filter: hair_css_filter,
      names: `通用_前发_${era.get(`cstr:${chara_id}:前发`)}${suffix}\t通用_前发_厚刘海${suffix}`,
    });
    if ((temp = era.get(`cstr:${chara_id}:呆毛`))) {
      img_list.push({
        filter: hair_css_filter,
        names: `通用_呆毛_${temp}\t通用_呆毛_短`,
      });
    }
  }
  return img_list;
}

function get_palam_progress(chara_id, part, offset) {
  const part_name = part_names[part];
  const palam = era.get(`palam:${chara_id}:${part_name}快感`),
    limit = era.get(`tcvar:${chara_id}:${part_name}快感上限`);
  return [
    {
      config: { offset: offset || 0, width: 1 },
      content: part_abbr[part_name],
      type: 'text',
    },
    {
      config: {
        color: get_color(...palam_colors.progress, palam / limit),
        height: 22,
        width: 3,
      },
      inContent: `${palam}/${limit}`,
      percentage: (palam * 100) / limit,
      type: 'progress',
    },
  ];
}

function get_chara_info(chara_id) {
  /** @type {*[]} */
  const ret = [
    {
      config: { width: 4 },
      content: [get_chara_talk(chara_id).get_colored_name()],
      type: 'text',
    },
    {
      config: { width: 20 },
      content: get_ero_status(chara_id),
      type: 'text',
    },
  ];
  ['体力', '精力'].forEach((e) => {
    const val = era.get(`base:${chara_id}:${e}`),
      limit = era.get(`maxbase:${chara_id}:${e}`);
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
  const penis_size = get_penis_size(chara_id),
    virgin_size = era.get(`cflag:${chara_id}:阴道尺寸`);
  const palam_list = [part_enum.mouth, part_enum.breast, part_enum.body];
  if (penis_size) {
    palam_list.push(part_enum.penis);
  }
  if (virgin_size) {
    if (!penis_size) {
      palam_list.push(part_enum.clitoris);
    }
    palam_list.push(part_enum.virgin);
  }
  palam_list.push(part_enum.anal, part_enum.sadism, part_enum.masochism);
  palam_list
    .splice(0, 4)
    .forEach((e) => ret.push(...get_palam_progress(chara_id, e)));
  if (
    (sys_check_hide_relation_and_love(chara_id) & 0b1) > 0 ||
    sys_check_limit_relation_and_love(chara_id)
  ) {
    const random_lust = get_random_value(0, lust_border.max) / lust_border.max;
    ret.push(
      {
        config: { width: 1 },
        content: '欲',
        type: 'text',
      },
      {
        config: {
          color: get_color(...palam_colors.progress, random_lust),
          height: 22,
          width: 3,
        },
        inContent: '？',
        percentage: random_lust * 100,
        type: 'progress',
      },
    );
  } else {
    const lust = era.get(`base:${chara_id}:性欲`);
    const lust_percentage = Math.min(lust / lust_border.max, 1);
    ret.push(
      {
        config: { width: 1 },
        content: '欲',
        type: 'text',
      },
      {
        config: {
          color: get_color(...palam_colors.progress, lust_percentage),
          height: 22,
          width: 3,
        },
        inContent:
          lust === lust_border.limit
            ? '！'
            : `${(lust_percentage * 100).toFixed(2)}%`,
        percentage: lust_percentage * 100,
        type: 'progress',
      },
    );
  }
  ret.push(...get_palam_progress(chara_id, palam_list.shift(), 4));
  palam_list.forEach((e) => ret.push(...get_palam_progress(chara_id, e)));
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
  const milk = era.get(`tflag:${type}产量`);
  if (milk > 0) {
    const got = Math.floor(milk / size);
    era.print([
      '用榨乳器收集到了 ',
      {
        color: palam_colors.notifications[1],
        content: `${milk}ml`,
        fontWeight: 'bold',
      },
      ' ',
      type,
      ...(got > 0
        ? [
            '，灌装处理后获得了 ',
            {
              color: palam_colors.notifications[1],
              content: got.toString(),
              fontWeight: 'bold',
            },
            ` 瓶【${type}】`,
          ]
        : []),
      '！',
    ]);
    era.add(`item:${type}`, got);
    return true;
  }
}

/**
 * @param {number} [lover]
 * @param {boolean} [skip_start_end]
 */
async function page_ero(lover, skip_start_end) {
  const in_basement = era.get('flag:当前位置') === location_enum.basement,
    rape = era.get('tflag:强奸');
  let curr_lover =
      lover || era.get('tflag:当前对手') || era.get('flag:当前互动角色'),
    ero_flag = true;
  era.set('tflag:当前对手', curr_lover);
  if (!skip_start_end) {
    era.drawLine();
    await sys_call_ero_event(curr_lover, ero_hooks.ero_start);
  }

  while (ero_flag) {
    await era.clear();

    curr_lover = era.get('tflag:当前对手');
    let curr_supporter = era.get('tflag:当前助手');

    const filters = new Array(7)
        .fill(0)
        .map((_, i) => era.get(`flag:${70 + i}`)),
      left_columns = [],
      lost_mind = era.get('tcvar:0:失神'),
      love = get_love_info(curr_lover),
      marks = get_ero_marks(curr_lover),
      relation = get_relation_info(curr_lover);
    left_columns.push(
      ...(era.get('flag:当前位置') === location_enum.basement
        ? []
        : [
            {
              config: { width: 8 },
              content: `${era.get('flag:当前年')} 年 ${era.get(
                'flag:当前月',
              )} 月 第 ${era.get('flag:当前周')} 周`,
              type: 'text',
            },
          ]),
      {
        config: { align: in_basement ? undefined : 'right', width: 16 },
        content: [
          `位于 ${location_name[era.get('flag:当前位置')]} `,
          {
            content: era.get('tflag:全身镜') ? '全身镜前' : '',
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
      ...get_chara_info(curr_lover),
      {
        config: { width: 12 },
        content: [
          `第 ${era.get('tflag:回合')} 回合 `,
          rape === 0
            ? {
                color: buff_colors[2],
                content: '强奸事件发生！',
                fontWeight: 'bold',
              }
            : undefined,
          rape > 0
            ? {
                color: buff_colors[2],
                content: '逆强奸事件发生！',
                fontWeight: 'bold',
              }
            : undefined,
        ].filter((e) => e),
        type: 'text',
      },
      {
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
      },
    );

    /** @type {number[]} */
    const characters_in_train = get_characters_in_train();
    let master = era.get('tflag:主导权');
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
                  buttonType: id !== curr_lover ? 'info' : 'warning',
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
                  disabled: id === curr_lover || lost_mind > 0,
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
        sys_check_awake(curr_lover) &&
        !era.get(`tcvar:${curr_lover}:脱力`) &&
        !era.get(`tcvar:${curr_lover}:失神`) &&
        !era.get(`status:${curr_lover}:超马跳Z`) &&
        era.get(`mark:${curr_lover}:同心`) < 3 &&
        era.get(`mark:${curr_lover}:欢愉`) < 3,
      current = new Date().getTime(),
      filtered_ero_actions = sys_filter_ero_act(0, curr_lover, filters),
      { last_action, lover_action } = master
        ? {
            last_action: era.get('tflag:对手行动'),
            lover_action: era.get('tflag:前回行动'),
          }
        : {
            last_action: era.get('tflag:前回行动'),
            lover_action: era.get('tflag:对手行动'),
          };
    let all_action_disabled = true;
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: left_columns,
        config: { width: 16, gutter: 10 },
      },
      {
        columns: curr_supporter
          ? [
              {
                config: { offset: 1, width: 18 },
                names: get_image(curr_lover),
                type: 'image.whole',
              },
              {
                config: { width: 5 },
                names: `${get_chr(
                  era.get(`cstr:${curr_supporter}:头像`),
                )}\tdefault`,
                type: 'image.whole',
              },
            ]
          : [
              {
                config: {
                  offset: 1,
                  width: !master && characters_in_train.length > 2 ? 22 : 19,
                },
                names: get_image(curr_lover),
                type: 'image.whole',
              },
            ],
        config: { verticalAlign: 'bottom', width: 8 },
      },
      [{ type: 'divider' }],
      filtered_ero_actions.map((e) => {
        const check_val = check_ero_enabled(curr_lover, curr_supporter, e);
        if (isNaN(check_val)) {
          era.logger.debug(`${ero_hooks.keys[e]} ${check_val}`);
        }
        const action_disabled =
          lost_mind > 0 ||
          (base_check && check_ero_enabled(curr_lover, curr_supporter, e) < 0);
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
      [
        {
          config: { width: 8 },
          content:
            last_action >= 0
              ? [
                  get_chara_talk(0).get_colored_name(),
                  ' 的行动：',
                  ero_action_names[last_action],
                ]
              : '',
          type: 'text',
        },
        filtered_ero_actions.indexOf(last_action) !== -1 && !master
          ? {
              accelerator: last_action,
              config: {
                disabled:
                  lost_mind > 0 ||
                  (base_check &&
                    check_ero_enabled(curr_lover, curr_supporter, last_action) <
                      0),
                disableWarning: true,
                width: 8,
              },
              content: `再次 ${ero_action_names[last_action]}`,
              type: 'button',
            }
          : undefined,
        {
          config: { width: 8 },
          content:
            lover_action >= 0
              ? [
                  get_chara_talk(curr_lover).get_colored_name(),
                  ' 的行动：',
                  ero_action_names[lover_action],
                ]
              : '',
          type: 'text',
        },
      ].filter((e) => e),
      [{ type: 'divider' }],
      ['设置', '身体接触', '脏污检查', '个人情报', '目标情报'].map((e, i) => {
        return {
          accelerator: 900 + i,
          config: { disabled: lost_mind > 0, width: 4 },
          content: e,
          type: 'button',
        };
      }),
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
    if (era.get('tflag:投降')) {
      era.set('tflag:投降', 0);
      while (era.get('tflag:主导权') && ero_flag) {
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
  await era.printAndWait('性事结束了……');
  if (!skip_start_end) {
    era.println();
    await sys_call_ero_event(curr_lover, ero_hooks.ero_end);
  }
  era.drawLine();
  let wait_flag = false;
  const partner_list = get_characters_in_train().filter((e) => e);
  for (const chara_id of partner_list) {
    if (sys_check_awake(chara_id)) {
      let temp;
      if (!check_satisfied(chara_id)) {
        sys_change_lust(chara_id, lust_from_palam / 2);
        wait_flag =
          sys_like_chara(chara_id, 0, -get_random_value(50, 100)) || wait_flag;
      } else if ((temp = era.get(`talent:${chara_id}:病娇`)) > 0) {
        wait_flag =
          sys_like_chara(
            chara_id,
            0,
            get_random_value(25, 50) * temp,
            temp === 2,
          ) || wait_flag;
      }
    }
  }
  if (!in_basement) {
    const punish_option = era.get('flag:不忠惩罚');
    let temp_chara_list = era.getCharactersInTrain();
    const punish_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (e) =>
        temp_chara_list.indexOf(e) === -1 &&
        era.get(`love:${e}`) >= 75 &&
        sys_check_awake(e) &&
        era.get(`cflag:${e}:位置`) === era.get('cflag:0:位置') &&
        get_custom_mec(e).is_anger_for_unfaithful() &&
        (punish_option || era.get(`talent:${e}:病娇`)),
    );
    for (const chara_id of punish_list) {
      get_custom_check(chara_id).check_after_betrayed(partner_list);
      wait_flag =
        (await sys_call_ero_event(chara_id, ero_hooks.after_betrayed, {
          partners: partner_list,
        })) || wait_flag;
    }
  }
  const size = 200 + 300 * !era.get('item:乳汁处理装置');
  wait_flag = print_milking('人奶', size) || wait_flag;
  wait_flag = print_milking('马奶', size) || wait_flag;
  wait_flag && (await era.waitAnyKey());
}

module.exports = page_ero;
