const era = require('#/era-electron');

const get_param_list = require('#/system/ero/ero-act-handler/get-param-list');
const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const { sys_get_ero_image } = require('#/system/ero/sys-calc-ero-image');
const { check_satisfied } = require('#/system/ero/sys-calc-ero-status');
const check_ero_enabled = require('#/system/ero/sys-check-ero-action');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  get_characters_in_train,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const get_progress_bar = require('#/page/components/get-progress-bar');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero, run_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number, get_random_value } = require('#/utils/value-utils');

const {
  buff_colors,
  love_colors,
  palam_colors,
  relation_colors,
} = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const { mark_colors, mark_enum } = require('#/data/ero/mark-const');
const { lust_border, lust_from_palam } = require('#/data/ero/orgasm-const');
const { motion_enum, up_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_derive_check, ero_hooks } = require('#/data/event/ero-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_ero_status,
  get_love_info,
  get_relation_info,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

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
  for (let i = 0; i < 6; ++i) {
    const lv = era.get(`mark:${cid}:${i}`);
    if (lv > 0) {
      status_list.push({
        color: get_color(void 0, mark_colors[i], lv / 3),
        content: i18n()
          .tb_mark.abbr_template.replace('%MARK%', di18n.tb_mark.abbr[i])
          .replace('%LEVEL%', lv.toString()),
      });
    }
  }
  // TALENTNAME:57 = 钢之意志
  if (era.get(`talent:${cid}:57`) > 0) {
    status_list.push({
      color: mark_colors.iron,
      content: i18n()
        .tb_mark.abbr_template.replace('%MARK%', i18n().tb_mark.a_iron)
        .replace('%LEVEL%', ''),
    });
  }
  return status_list.map((s) => {
    s.display = 'inline-block';
    return s;
  });
}

/**
 * @param {number} cid
 * @param {number} pid
 * @param {number} offset
 * @returns {[TextObject,ProgressObject]}
 */
function get_palam_progress(cid, pid, offset = 0) {
  const part_name = i18n('zh-CN').tb_param[pid];
  const param = Math.floor(era.get(`param:${cid}:${part_name}快感`));
  const limit = era.get(`tcvar:${cid}:${part_name}快感上限`);
  return [
    {
      config: { offset, width: 1 },
      content: __(`tb_param.abbr${pid}`),
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
      content: get_ero_status(cid, 32),
      type: 'text',
    },
    ...get_progress_bar(cid, {
      get_key: (b) => `abbr_${b}`,
      prog_width: 3,
      tag_width: 1,
      use_empty_line: false,
    }),
  ];
  const l_param = get_param_list(cid);
  l_param.splice(0, 4).forEach((e) => ret.push(...get_palam_progress(cid, e)));
  ret.push({
    config: { width: 1 },
    content: i18n().sex.n_lust,
    type: 'text',
  });
  if (era.get('flag:当前位置') === location_enum.mejiro) {
    ret.push({
      config: { color: palam_colors.progress[1], height: 22, width: 3 },
      inContent: i18n().sex.l_mejiro,
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
      inContent: i18n().ui_unknown_value,
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
  ret.push(...get_palam_progress(cid, l_param.shift(), 4));
  l_param.forEach((e) => ret.push(...get_palam_progress(cid, e)));
  return ret;
}

/**
 * @param {number} iid
 * @param {number} size
 * @param {{count:number}} counter
 * @returns {boolean}
 */
function print_milking(iid, size, counter) {
  const type = i18n('zh-CN').tb_item[iid];
  const my_milk = era.get(`tflag:${type}可卖`);
  const milk = era.get(`tflag:${type}产量`) + my_milk;
  if (milk > 0) {
    const got = Math.floor(milk / size);
    const got_me = Math.floor(my_milk / size);
    const buffer = [];
    buffer.push(
      ...i18n().timon.ero_sys.get_milk_ml(
        {
          ...get_abbr_number(milk),
          color: palam_colors.notifications[1],
          fontWeight: 'bold',
        },
        __(`tb_item.${iid}`),
      ),
    );
    if (got > 0) {
      buffer.push(
        ...i18n().timon.ero_sys.get_milk_item(
          {
            ...get_abbr_number(got),
            color: palam_colors.notifications[1],
            fontWeight: 'bold',
          },
          di18n.tb_item.get_name(iid),
        ),
      );
    }
    if (got_me > 0) {
      buffer.push(
        ...i18n().timon.ero_sys.get_your_milk_info(
          {
            ...get_abbr_number(got_me),
            color: palam_colors.notifications[1],
            fontWeight: 'bold',
          },
          get_chara_talk(0),
        ),
      );
      counter.count += got_me;
    }
    era.print([{ isBr: true }, ...buffer]);
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
  const loc = era.get('flag:当前位置');
  const in_base = loc === location_enum.basement;
  const rape = era.get('tflag:强奸');
  lover ||= era.get('tflag:当前对手') || era.get('flag:当前互动角色');
  let ero_flag = true;
  const assist = era.get('flag:助手');
  era.set('tflag:当前对手', lover);
  if (
    !in_base &&
    loc !== location_enum.mejiro &&
    assist !== lover &&
    era.getCharactersInTrain().length === 2 &&
    assist > 0 &&
    sys_check_awake(assist) &&
    !sys_check_remote(assist) &&
    rape <= 0 &&
    (await select_yes_or_no(
      i18n().sex.get_call_assistant_confirm(
        {
          content: i18n().tb_mark.s_o_assistant,
          color: mark_colors[mark_enum.ero],
        },
        get_chara_talk(assist).get_colored_name(),
      ),
    ))
  ) {
    init_ero(assist);
    era.set('tflag:当前助手', assist);
    const my_marks = new MyEduMarks();
    if (!global_achievement.slav_ass && ++my_marks.a_s_ass >= 100) {
      global_achievement.slav_ass = 1;
    }
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
    era.set(`tcvar:${cid}:上下`, up_enum.down);
  });
  era.set(`tcvar:${master}:上下`, up_enum.up);
  era.set('status:0:沉睡', era.set('status:0:马跳S', 0));
  while (ero_flag) {
    await era.clear();

    lover = era.get('tflag:当前对手');
    let curr_supporter = era.get('tflag:当前助手');

    const filters = new Array(7)
      .fill(0)
      .map((_, i) => era.get(`flag:${70 + i}`));
    const l_cols = [];
    const lost_mind = era.get('tcvar:0:失神');
    const love = get_love_info(lover);
    const marks = get_ero_marks(lover);
    const relation = get_relation_info(lover);
    if (!in_base) {
      l_cols.push({
        config: { width: 8 },
        content: date_indicator(),
        type: 'text',
      });
    }
    l_cols.push(
      {
        config: { align: in_base ? 'left' : 'right', width: 16 },
        content: (era.get('tflag:全身镜') > 0
          ? i18n().sex.get_hd_location
          : i18n().get_ui_hd_location)(
          i18n().location[location_enum.keys[era.get('flag:当前位置')]],
          {
            content: i18n().tb_item[81],
            color: buff_colors[2],
          },
        ),
        type: 'text',
      },
      { type: 'divider' },
      ...get_chara_info(0),
      {
        content: [{ isBr: 1 }],
        type: 'text',
      },
      ...get_chara_info(lover),
    );
    l_cols.push({
      config: { width: 12 },
      content: [
        i18n().sex.hd_turn_template.replace(
          '%TURN%',
          era.get('tflag:回合').toString(),
        ),
      ],
      type: 'text',
    });
    if (rape >= 0) {
      l_cols.at(-1).content.push(' ', {
        color: buff_colors[2],
        content:
          rape === 0
            ? i18n().sex.rape_notification
            : i18n().sex.raped_notification,
        fontWeight: 'bold',
      });
    }
    l_cols.push({
      config: { align: 'right', width: 12 },
      content: [
        ...i18n().sex.get_lover_relation(
          {
            color: relation_colors[relation.level],
            content: relation.mark(),
            title: i18n().ui_relation_template.replace(
              '%RELATIONINFO%',
              relation.full(),
            ),
          },
          {
            color: love_colors[love.level],
            content: love.mark(),
            title: i18n().ui_love_template.replace('%LOVEINFO%', love.full()),
          },
        ),
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
        l_cols.push(
          { type: 'divider' },
          {
            config: { width: 6 },
            content: i18n().sex.n_select_lover,
            type: 'text',
          },
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
                content: get_display_name(era.get(`callname:${id}:-2`)),
                type: 'button',
              };
            }),
        );
        if ((characters_in_train.length - 1) % 3) {
          l_cols.push({
            config: { width: 18 - ((characters_in_train.length - 1) % 3) * 6 },
            content: '',
            type: 'text',
          });
        }
        l_cols.push(
          {
            config: { width: 6 },
            content: i18n().sex.n_select_assistant,
            type: 'text',
          },
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
                content: get_display_name(era.get(`callname:${id}:-2`)),
                type: 'button',
              };
            }),
        );
      }
    } else if (curr_supporter) {
      l_cols.push(
        { type: 'divider' },
        {
          content: i18n().sex.get_assistant_info(
            get_chara_talk(curr_supporter).get_colored_name(),
          ),
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
    let a_disabled = true;
    const action_bar = [];
    action_bar.push({
      content:
        last_action >= 0
          ? i18n().sex.get_action_info(
              get_chara_talk(0).get_colored_name(),
              i18n().train_action[ero_hooks.keys[last_action]],
            )
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
        content: i18n().sex.redo_action_template.replace(
          '%ACTION%',
          i18n().train_action[ero_hooks.keys[last_action]],
        ),
        type: 'button',
      });
    }
    action_bar.push({
      content:
        lover_action >= 0
          ? i18n().sex.get_action_info(
              get_chara_talk(lover).get_colored_name(),
              i18n().train_action[ero_hooks.keys[lover_action]],
            )
          : '',
      type: 'text',
    });
    const setting_bar = [
      i18n().ui_sex_bt_setting,
      i18n().ui_sex_bt_touch,
      i18n().ui_sex_bt_stain,
      i18n().ui_bt_self_info,
      i18n().ui_bt_chara_info,
    ].map((e, i) => ({ a: 901 + i, n: e }));
    if (!master) {
      setting_bar.unshift({ a: 900, n: i18n().ui_sex_bt_turn_around });
    }
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: l_cols,
        config: { width: 16, gutter: 10 },
      },
      {
        columns:
          curr_supporter > 0
            ? [
                {
                  config: { offset: 1, width: 18 },
                  names: sys_get_ero_image(lover),
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
                  names: sys_get_ero_image(lover),
                  type: 'image.whole',
                },
              ],
        config: { verticalAlign: 'bottom', width: 8 },
      },
      [{ type: 'divider' }],
      filtered_ero_actions.map((a) => {
        const check_val = check_ero_enabled(lover, curr_supporter, a);
        if (isNaN(check_val)) {
          console.error(
            '对角色',
            lover,
            '调教指令实行值计算错误！',
            ero_hooks.keys[a],
            check_val,
          );
        }
        const action_disabled = lost_mind > 0 || (base_check && check_val < 0);
        a_disabled &&= action_disabled;
        return {
          accelerator: a,
          config: {
            buttonType: ero_derive_check[a] ? 'danger' : 'warning',
            disabled: action_disabled,
            width: 4,
          },
          content: i18n().train_action[ero_hooks.keys[a]],
          type: 'button',
        };
      }),
      action_bar.map((e) => {
        (e.config ||= {}).width = 8;
        return e;
      }),
      [{ type: 'divider' }],
      setting_bar.map((e) => ({
        accelerator: e.a,
        config: { disabled: lost_mind > 0, width: 4 },
        content: e.n,
        type: 'button',
      })),
      [
        {
          accelerator: 999,
          config: { disabled: master > 0 || lost_mind > 0 },
          content: i18n().sex.try_end,
          type: 'button',
        },
      ],
    );

    era.logger.debug(
      `调教指令列表计算完成！${(
        new Date().getTime() - current
      ).toLocaleString()}ms`,
    );
    let ret;
    if (a_disabled) {
      ret = ero_hooks.relax;
    } else {
      ret = await era.input();
    }
    ero_flag =
      (await sys_handle_ero_act(ret, filters)) &&
      get_characters_in_train().length > 1;
    if (era.get('tflag:投降') > 0) {
      era.set('tflag:投降', 0);
      do {
        await sys_handle_ero_act(ero_hooks.relax, filters);
        master = era.get('tflag:主导权');
        ero_flag &&=
          sys_check_awake(master) &&
          !era.get(`tcvar:${master}:脱力`) &&
          !era.get(`tcvar:${master}:逃跑`);
      } while (master > 0 && ero_flag);
    } else {
      master = era.get('tflag:主导权');
      ero_flag &&=
        sys_check_awake(master) &&
        !era.get(`tcvar:${master}:脱力`) &&
        !era.get(`tcvar:${master}:逃跑`);
    }
  }
  era.drawLine();
  await era.printAndWait(i18n().sex.end_info);
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
  if (!in_base) {
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
  const achieve = { count: 0 };
  wait_flag = print_milking(46, size, achieve) || wait_flag;
  wait_flag = print_milking(45, size, achieve) || wait_flag;
  if (achieve.count >= 1) {
    global_achievement.play_mil1 = 1;
  }
  if (achieve.count >= 4) {
    global_achievement.play_mil3 = 1;
  }
  if (wait_flag) {
    await era.waitAnyKey();
  }
}

module.exports = page_ero;
