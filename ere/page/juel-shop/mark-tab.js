const era = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const {
  get_base_price,
  get_mark_price,
} = require('#/system/ero/sys-get-juel-price');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const {
  default_handler,
  get_mark_cols,
  print_footer,
  print_price_and_confirm,
} = require('#/page/juel-shop/snippets');

const { get_custom_ero } = require('#/event/ero/ero-factory');

const get_gradient_color = require('#/utils/gradient-color');

const { attr_change_colors, buff_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  inmon_limit,
  mark_colors,
  mark_enum,
  slavery_enum,
} = require('#/data/ero/mark-const');
const {
  inmon_plugin_dict,
  plugin_enum,
} = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { get_trainer_level } = require('#/data/info-generator');
const LoveLimitStatus = require('#/data/love-limit-status');
const { max_chara_id } = require('#/data/other-const');
const { get_trainer_salary } = require('#/data/other-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n, lan } = require('#/i18n/selector');

/**
 * @param {{a:number,m:number,p:InmonPlugin}} plugin_with_acc
 * @param {CharaInmon} inmon
 * @param {number} money
 * @param {number} size
 * @param {number} limit
 * @param {Record<string,1>} group_dict
 */
function plugin_to_button(
  plugin_with_acc,
  inmon,
  money,
  size,
  limit,
  group_dict,
) {
  return [
    {
      accelerator: plugin_with_acc.a,
      config: {
        color: plugin_with_acc.p.color,
        disabled:
          (!inmon.on(plugin_with_acc.p.id) &&
            (plugin_with_acc.p.size + size > limit ||
              group_dict[plugin_with_acc.p.group] > 0)) ||
          (!inmon.has(plugin_with_acc.p.id) && money < plugin_with_acc.m),
        disableWarning: true,
        title: plugin_with_acc.p.title,
        width: 4,
      },
      content: plugin_with_acc.p.name,
      type: 'button',
    },
    {
      type: 'text',
      content: i18n().inmon.level_template.replace(
        '%LEVEL%',
        plugin_with_acc.p.level.toString(),
      ),
      config: { width: 2 },
    },
    {
      type: 'text',
      content: i18n().inmon.slot_cost_template.replace(
        '%SLOT%',
        plugin_with_acc.p.size.toString(),
      ),
      config: { align: 'right', width: 2 },
    },
    {
      type: 'text',
      ...(inmon.has(plugin_with_acc.p.id)
        ? {
            config: {
              align: 'right',
              color: attr_change_colors.up,
              width: 3,
            },
            content: i18n().inmon.unlocked,
          }
        : {
            config: { align: 'right', color: buff_colors[2], width: 3 },
            content: i18n()
              .tb_param.jewel_with_count.replace(
                '%JEWEL%',
                // JEWELNAME:10 = 顺从
                __('tb_param.abbr10'),
              )
              .replace('%COUNT%', plugin_with_acc.m.toLocaleString(lan())),
          }),
    },
  ];
}

/**
 * @param {CharaTalk} chara
 * @param {Record<string,number>} juel_dict
 * @param {Record<string,number>} total_delta
 * @param {{tab:number,flag:boolean,sub:number}} pointer
 */
module.exports = async (chara, juel_dict, total_delta, pointer) => {
  let buffer = [];
  let l_sex =
    era.get(`status:${chara.id}:淫纹贴纸`) > 0
      ? 3
      : era.get(`mark:${chara.id}:淫纹`);
  const l_pleasure = era.get(`mark:${chara.id}:欢愉`);
  const l_meek = era.get(`mark:${chara.id}:同心`);
  const l_pain = era.get(`mark:${chara.id}:苦痛`);
  const l_shame = era.get(`mark:${chara.id}:羞耻`);
  const l_hate = era.get(`mark:${chara.id}:反抗`);
  let sex_mark_price = 0;
  const j_meek = juel_dict[10];
  const price_dict = [];
  if (chara.id > 0) {
    era.drawLine({
      content: i18n().jewel_shop.mark_header_template.replace(
        '%NAME%',
        chara.full_name,
      ),
    });
    if (!l_sex) {
      buffer.push(get_mark_cols(chara.id, mark_enum.pleasure, l_pleasure));
    }
    buffer.push(get_mark_cols(chara.id, mark_enum.meek, l_meek));
    buffer.push(get_mark_cols(chara.id, mark_enum.pain, l_pain));
    buffer.push(get_mark_cols(chara.id, mark_enum.shame, l_shame));
    buffer.push(get_mark_cols(chara.id, mark_enum.hate, l_hate));
    buffer.push({ content: [], type: 'text' });
    if (l_hate) {
      price_dict[0] = get_mark_price(chara.id, l_hate, l_meek / 2);
      price_dict[1] = price_dict[2] = get_mark_price(
        chara.id,
        l_hate,
        l_pain + 0.75,
      );
      price_dict[3] = get_mark_price(chara.id, l_hate, l_shame + 0.75);
      // PARAMNAME:11 - 13 = 痛苦 - 羞耻
      buffer.push(
        ...[
          {
            config: { disabled: j_meek < price_dict[0] || !l_meek },
            content: i18n().jewel_shop.ch_cost_meek,
          },
          {
            config: { disabled: juel_dict[11] < price_dict[1] || !l_pain },
            content: i18n().jewel_shop.ch_cost_pain,
          },
          {
            config: { disabled: juel_dict[12] < price_dict[2] || !l_pain },
            content: i18n().jewel_shop.ch_cost_fear,
          },
          {
            config: { disabled: juel_dict[13] < price_dict[3] || !l_shame },
            content: i18n().jewel_shop.ch_cost_shame,
          },
        ].map((b, i) => {
          b.type = 'button';
          b.config.width = 6;
          b.accelerator = i;
          return b;
        }),
        {
          content: i18n().jewel_shop.clean_hate_tooltip,
          type: 'text',
        },
      );
    }
    if (l_pain) {
      buffer.push({
        accelerator: 4,
        config: {
          disabled:
            j_meek < (price_dict[4] = get_mark_price(chara.id, l_pain, l_meek)),
          width: 6,
        },
        content: i18n().jewel_shop.bt_clean_pain,
        type: 'button',
      });
    }
    if (l_shame) {
      buffer.push({
        accelerator: 5,
        config: {
          disabled:
            j_meek <
            (price_dict[5] = get_mark_price(chara.id, l_shame, l_meek)),
          width: 6,
        },
        content: i18n().jewel_shop.bt_clean_shame,
        type: 'button',
      });
    }
    if (l_pain + l_shame) {
      buffer.push({
        content: i18n().jewel_shop.clean_other_tooltip,
        type: 'text',
      });
    }
  }
  era.printMultiColumns(buffer);

  const inmon = CharaInmon.get(chara.id);
  const p_f_params = {
    chara:
      era.get(`cflag:${chara.id}:种族`) > 0
        ? era.get(`cflag:${chara.id}:气性`)
        : undefined,
    edu:
      era.get(`cflag:${chara.id}:种族`) > 0 &&
      (!chara.id || era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48),
    id: chara.id,
    love:
      chara.id > 0
        ? LoveLimitStatus.get(chara.id).is_empty()
          ? era.get(`love:${chara.id}`)
          : 100
        : 0,
    pregnant:
      inmon.slave === slavery_enum.pregnant ||
      era.get(`cflag:${chara.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no,
    sex: chara.sex_code,
  };
  const plugins = Object.values(inmon_plugin_dict)
    .filter((p) => {
      if ((!l_sex || p.level <= l_sex) && p.condition(p_f_params)) {
        return true;
      }
      if (inmon.on(p.id)) {
        inmon.set(p.id, 0);
      }
      return false;
    })
    .map((p, i) => ({
      a: i + 10,
      m: Math.floor(get_base_price(chara.id, { base_price: p.price })),
      p: p,
    }));
  const groups = plugins.reduce((p, c) => {
    (p[c.p.group] ||= []).push(c);
    return p;
  }, {});
  const slave = inmon.slave;
  if (l_sex > 0 || (l_pleasure > 0 && l_meek > 0)) {
    era.drawLine({
      content: i18n().jewel_shop.inmon_header_template.replace(
        '%NAME%',
        chara.full_name,
      ),
    });
    if (l_sex > 0) {
      const limit = inmon_limit[l_sex];
      const group_dict = {};
      sex_mark_price = get_mark_price(chara.id, l_sex + 1, l_meek);
      const sex_mark_col = get_mark_cols(chara.id, mark_enum.ero, l_sex);
      delete sex_mark_col.config.width;
      sex_mark_col.content.unshift({ isBr: true });
      const p_buffer = plugins
        .filter((plug) => inmon.on(plug.p.id))
        .map((plug) => {
          group_dict[plug.p.group] = 1;
          const name = plug.p.colored_name;
          name.content = i18n()
            .inmon.name_with_cost_template.replace('%NAME%', name.content)
            .replace('%SLOT%', plug.p.size.toString());
          return {
            accelerator: plug.a,
            config: {
              align: 'center',
              color: name.color,
              title: name.title,
            },
            content: name.content,
            type: 'button',
          };
        });
      const size = inmon.size;
      const buffer = [];
      const keys = Object.keys(groups).slice(pointer.sub, pointer.sub + 2);
      buffer.push({
        config: {
          content: i18n().inmon[keys[0]],
          position: 'left',
          width: 11,
        },
        type: 'divider',
      });
      if (keys[1] !== void 0) {
        buffer.push({
          config: {
            content: i18n().inmon[keys[1]],
            offset: 1,
            position: 'left',
            width: 11,
          },
          type: 'divider',
        });
      } else {
        buffer.push({ content: [], type: 'text' });
      }
      const p_buttons = keys.map((e) => groups[e]);
      if (p_buttons.length < 2) {
        p_buttons.push([]);
      }
      for (let i = 0; i < Math.max(...p_buttons.map((e) => e.length)); ++i) {
        const left = p_buttons[0][i];
        const right = p_buttons[1][i];
        if (left === undefined) {
          const temp = plugin_to_button(
            right,
            inmon,
            j_meek,
            size,
            limit,
            group_dict,
          );
          temp[0].config.offset = 12;
          buffer.push(...temp);
        } else if (right === undefined) {
          buffer.push(
            ...plugin_to_button(left, inmon, j_meek, size, limit, group_dict),
            { content: [], type: 'text' },
          );
        } else {
          buffer.push(
            ...plugin_to_button(left, inmon, j_meek, size, limit, group_dict),
          );
          const temp = plugin_to_button(
            right,
            inmon,
            j_meek,
            size,
            limit,
            group_dict,
          );
          temp[0].config.offset = 1;
          buffer.push(...temp);
        }
      }
      era.printInColRows(
        {
          columns: [
            ...p_buffer,
            { content: size > 0 ? [{ isBr: true }] : [], type: 'text' },
            {
              config: {
                align: 'center',
                color: mark_colors[mark_enum.ero],
              },
              content: [
                ...new Array(size).fill('[·]'),
                ...new Array(Math.max(limit - size, 0)).fill('[ ]'),
              ].reduce((p, c, i) => {
                p.push({ content: c, display: 'inline-block' });
                if (i % 6 === 5) {
                  p.push({ isBr: true });
                }
                return p;
              }, []),
              type: 'text',
            },
            sex_mark_col,
            {
              config: {
                align: 'center',
                color: mark_colors[mark_enum.ero],
              },
              content: i18n()
                .inmon.all_slot_template.replace('%SLOT%', size.toString())
                .replace('%ALL%', limit.toString()),
              type: 'text',
            },
          ],
          config: { width: 5 },
        },
        {
          columns: [
            ...(l_sex < 3
              ? [
                  {
                    accelerator: 7,
                    config: {
                      disabled: !l_meek || j_meek < sex_mark_price,
                      width: 6,
                    },
                    content: i18n().jewel_shop.bt_upgrade_inmon,
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content: i18n().jewel_shop.unlock_inmon_tooltip,
                    type: 'text',
                  },
                ]
              : [
                  {
                    config: {
                      width: 6,
                      ...(era.get(`status:${chara.id}:淫纹贴纸`) > 0
                        ? {
                            disabled: true,
                            title: i18n().jewel_shop.sticker_tooltip,
                          }
                        : {}),
                    },
                    content: di18n.jewel_shop.get_inmon_slave(slave),
                    ...(chara.id > 0
                      ? { accelerator: 9, type: 'button' }
                      : { type: 'text' }),
                  },
                  {
                    config: { width: 18 },
                    content: di18n.jewel_shop.get_inmon_slave_desc(slave),
                    type: 'text',
                  },
                ]),
            {
              config: {
                content: i18n().jewel_shop.inmon_plugin_header,
                width: 15,
              },
              type: 'divider',
            },
            {
              accelerator: 200,
              config: {
                align: 'right',
                width: 4,
                disabled: pointer.sub === 0,
              },
              content: i18n().ui_pg_prev,
              type: 'button',
            },
            {
              accelerator: 201,
              config: {
                align: 'right',
                width: 4,
                disabled: pointer.sub + 2 >= Object.keys(groups).length,
              },
              content: i18n().ui_pg_next,
              type: 'button',
            },
            ...buffer,
            {
              content: '\n' + i18n().jewel_shop.inmon_plugin_tooltip,
              type: 'text',
            },
          ],
          config: { verticalAlign: 'middle', width: 19 },
        },
      );
    } else {
      sex_mark_price = get_mark_price(chara.id, l_pleasure, l_meek);
      era.printButton(i18n().jewel_shop.bt_get_inmon, 6, {
        disabled: j_meek < sex_mark_price,
      });
      era.print(i18n().jewel_shop.unlock_inmon_tooltip);
    }
  }

  print_footer(chara.id, pointer.tab);
  const ret = await era.input();
  if (ret < 4) {
    const jid = ret + 10;
    era.print(
      i18n().jewel_shop.get_clean_hate_confirm(
        chara.get_colored_name(),
        __(`tb_param.jewel${jid}`),
        {
          content: di18n.tb_mark.get_mark_full_name(mark_enum.hate),
          color: mark_colors[mark_enum.hate],
        },
      ),
    );
    const is_confirmed = await print_price_and_confirm(
      chara,
      { [ret + 10]: price_dict[ret] },
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.hate_clear = (total_delta.hate_clear || 0) + 1;
      era.add(`mark:${chara.id}:反抗`, -1);
      era.add(`juel:${chara.id}:${jid}`, -price_dict[ret]);
      begin_and_init_ero(chara.id);
      if (
        (ret === 1 || ret === 2) &&
        l_pain < 3 &&
        Math.random() < 1 - 0.15 * (3 - l_hate) - 0.2 * (l_pain - 1)
      ) {
        era.set(`nowex:${chara.id}:苦痛获取`, 1);
      } else if (
        ret === 3 &&
        l_shame < 3 &&
        Math.random() < 1 - 0.15 * (3 - l_hate) - 0.2 * (l_shame - 1)
      ) {
        era.set(`nowex:${chara.id}:羞耻获取`, 1);
      }
      (await update_marks(true, chara.id)) && (await era.waitAnyKey());
      end_ero_and_train();
    }
  } else if (ret <= 5) {
    const mid = ret - 1;
    // PARAMNAME:10 =顺从
    era.print(
      i18n().jewel_shop.get_clean_other_confirm(
        chara.get_colored_name(),
        __('tb_param.jewel10'),
        {
          content: di18n.tb_mark.get_mark_full_name(mid),
          color: mark_colors[mid],
        },
      ),
    );
    const is_confirmed = await print_price_and_confirm(
      chara,
      { 10: price_dict[ret] },
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.mark_clear = (total_delta.mark_clear || 0) + 1;
      era.add(`mark:${chara.id}:${mid}`, -1);
      era.add(`juel:${chara.id}:顺从`, -price_dict[ret]);
    }
  } else if (ret <= 7) {
    if (ret === 6) {
      era.print(
        i18n().jewel_shop.get_get_inmon_confirm(
          chara.get_colored_name(),
          {
            content: di18n.tb_mark.get_mark_full_name_with_level(
              mark_enum.pleasure,
              l_pleasure,
            ),
            color: get_gradient_color(
              void 0,
              mark_colors[mark_enum.pleasure],
              l_pleasure / 3,
            ),
          },
          {
            content: i18n()
              .tb_mark.mark_with_level.replace(
                '%MARK%',
                di18n.tb_mark.names[mark_enum.ero],
              )
              .replace('%LEVEL%', l_pleasure.toString()),
            color: get_gradient_color(
              void 0,
              mark_colors[mark_enum.ero],
              l_pleasure / 3,
            ),
          },
        ),
      );
    } else {
      era.print(
        i18n().jewel_shop.get_upgrade_inmon_confirm(
          chara.get_colored_name(),
          {
            content: i18n()
              .tb_mark.mark_with_level.replace(
                '%MARK%',
                di18n.tb_mark.names[mark_enum.ero],
              )
              .replace('%LEVEL%', l_sex.toString()),
            color: get_gradient_color(
              void 0,
              mark_colors[mark_enum.ero],
              l_sex / 3,
            ),
          },
          {
            content: i18n().tb_mark.lv_template.replace(
              '%LEVEL%',
              (l_sex + 1).toString(),
            ),
            color: get_gradient_color(
              void 0,
              mark_colors[mark_enum.ero],
              (l_sex + 1) / 3,
            ),
          },
        ),
      );
    }
    const is_confirmed = await print_price_and_confirm(
      chara,
      { 10: sex_mark_price },
      juel_dict,
    );
    if (is_confirmed) {
      if (await select_yes_or_no(i18n().jewel_shop.get_inmon_warning)) {
        if (ret === 6) {
          era.set(`mark:${chara.id}:欢愉`, 0);
          l_sex = era.set(`mark:${chara.id}:淫纹`, l_pleasure);
          total_delta.pleasure_delta = l_pleasure;
          total_delta.sex_delta = l_pleasure;
          sys_change_fame(
            -50 * new Array(l_sex).fill(0).reduce((p, _, i) => p + i + 1, 0),
          );
        } else {
          l_sex = era.add(`mark:${chara.id}:淫纹`, 1);
          total_delta.sex_delta = (total_delta.sex_delta || 0) + 1;
          sys_change_fame(-50 * l_sex);
        }
        await get_custom_ero(chara.id).get_mark(
          l_sex,
          mark_enum.ero,
          ret === 6,
        );
        era.add(`juel:${chara.id}:顺从`, -sex_mark_price);
        const inmon_count = sys_filter_chara('mark', mark_enum.ero, 3).filter(
          (cid) => cid > 0 && cid < max_chara_id,
        ).length;
        if (inmon_count >= 1) {
          global_achievement.inmn_one = 1;
        }
        if (inmon_count >= 3) {
          global_achievement.inmn_thr = 1;
        }
        if (inmon_count >= 6) {
          global_achievement.inmn_six = 1;
        }
      }
    }
  } else if (ret === 9) {
    era.drawLine({ content: i18n().jewel_shop.new_option_header });
    era.printMultiColumns([
      {
        config: { width: 3 },
        content: i18n().tb_mark.s_option_name,
        type: 'text',
      },
      {
        config: { width: 3 },
        content: i18n().tb_mark.s_title_name,
        type: 'text',
      },
      {
        config: { width: 18 },
        content: i18n().tb_mark.s_description_name,
        type: 'text',
      },
    ]);
    const disabled = j_meek < 1000;
    const columns = di18n.tb_mark.s_titles.map((t, i) => [
      {
        accelerator: i,
        config: { disabled: slave === i || (i > 0 && disabled), width: 3 },
        content: di18n.tb_mark.s_options[i],
        type: 'button',
      },
      {
        config: { width: 3 },
        content: t,
        type: 'text',
      },
      {
        config: { width: 18 },
        content: di18n.tb_mark.s_descriptions[i],
        type: 'text',
      },
    ]);
    if (chara.sex_code === 1) {
      columns[slavery_enum.milk][0].config.disabled = true;
      columns[slavery_enum.milk][0].config.title =
        i18n().jewel_shop.s_milk_warning_man;
      columns[slavery_enum.pregnant][0].config.disabled = true;
      columns[slavery_enum.pregnant][0].config.title =
        i18n().jewel_shop.s_preg_warning_man;
    } else if (era.get(`talent:${chara.id}:泌乳`) !== 3) {
      columns[slavery_enum.milk][0].config.disabled = true;
      columns[slavery_enum.milk][0].config.title =
        i18n().jewel_shop.s_milk_warning_milk;
    }
    if (inmon.on(plugin_enum.no_preg)) {
      columns[slavery_enum.pregnant][0].config.disabled = true;
      columns[slavery_enum.pregnant][0].config.title =
        i18n().jewel_shop.s_preg_warning_plugin;
    }
    if (era.get(`cflag:${chara.id}:种族`) === 0) {
      columns[slavery_enum.inherit][0].config.disabled = true;
      columns[slavery_enum.inherit][0].config.title =
        i18n().jewel_shop.s_inherit_warning_race.replace(
          '%UMA%',
          chara.uma_sex_title,
        );
    }
    if (era.get('flag:助手') > 0) {
      columns[slavery_enum.assistant][0].config.disabled = true;
      columns[slavery_enum.assistant][0].config.title =
        i18n().jewel_shop.s_assi_warning_dup;
    }
    columns.forEach((e) => era.printMultiColumns(e));
    era.printButton(i18n().ui_back, 99);
    era.print(i18n().jewel_shop.change_option_tooltip);
    let ret = await era.input();
    if (ret < 99) {
      if (ret === 0) {
        if (
          !(await select_yes_or_no(
            i18n().jewel_shop.clean_slave_option_confirm,
          ))
        ) {
          ret = -1;
        }
      } else {
        era.print(
          i18n().jewel_shop.get_change_option_confirm(
            chara.get_colored_name(),
            {
              color: buff_colors[2],
              content: di18n.tb_mark.s_options[ret],
            },
          ),
        );
        if (await print_price_and_confirm(chara, { 10: 1000 }, juel_dict)) {
          era.add(`juel:${chara.id}:顺从`, -1000);
        } else {
          ret = -1;
        }
      }
      if (ret >= 0) {
        switch (slave) {
          case slavery_enum.worker:
            era.set(
              'flag:账单',
              sys_get_billings().filter(
                (e) => !(e.creditor === chara.id && e.timer === -1),
              ),
            );
            break;
          case slavery_enum.assistant:
            era.set('flag:助手', 0);
        }
        switch (ret) {
          case slavery_enum.worker:
            sys_get_billings().push({
              creditor: chara.id,
              repay: get_trainer_salary(get_trainer_level()) / 4,
              timer: -1,
            });
            break;
          case slavery_enum.assistant:
            era.set('flag:助手', chara.id);
        }
        inmon.slave = ret;
      }
    }
  } else if (ret < 200) {
    const { p, m: cost } = plugins[ret - 10];
    if (!inmon.has(p.id)) {
      era.print(
        i18n().jewel_shop.get_load_plugin_confirm(
          chara.get_colored_name(),
          p.colored_name,
        ),
      );
      if (await print_price_and_confirm(chara, { 10: cost }, juel_dict)) {
        era.add(`juel:${chara.id}:顺从`, -cost);
        inmon.set(p.id, 1 - inmon.on(p.id));
      }
    } else {
      inmon.set(p.id, 1 - inmon.on(p.id));
      if (p.id === plugin_enum.sex_2) {
        era.set(`cflag:${chara.id}:自主训练`, 0);
      }
    }
  } else if (ret === 200) {
    pointer.sub -= 2;
  } else if (ret === 201) {
    pointer.sub += 2;
  } else {
    default_handler(ret, pointer);
  }
};
