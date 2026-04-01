const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');

const { get_track_name } = require('#/page/race/get-track-name');
const print_race_track_chart = require('#/page/race/race-track-chart');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const {
  adaptability_colors,
  attr_colors,
  el_warning_color,
  motivation_colors,
} = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const { item_enum } = require('#/data/ero/item-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const {
  get_adaptability_rank,
  get_attr_rank,
  get_rank_level,
} = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

const item_buff_key = 'slaanesh';
const item_debuff_key = 'item';

const pop_mark = ['➖', '◎', '◯', '▲', '△', '△'];

/** @param {PseudoUma} chara */
function generate_attribute_info(chara) {
  const _lan = lan();
  const _ = i18n();
  const ret = [];
  chara.attrs.forEach((_val, index) => {
    const value = Math.floor(_val);
    const attr_buff_list = chara.attr_buffs[index];
    const rank = get_attr_rank(value);
    const rank_color = adaptability_colors[get_rank_level(rank)];
    ret.push(
      {
        config: {
          color: attr_colors[index],
          fontWeight: 'bold',
          offset: 1,
          width: 5,
        },
        content: di18n.n_attr[index],
        type: 'text',
      },
      {
        config: {
          color: rank_color,
          fontWeight: 'bold',
          width: 6,
        },
        content: [
          {
            content: _.ui_race_preview_contestant_attr
              .replace('%ATTR%', value.toLocaleString(_lan))
              .replace('%RANK%', rank),
            title: attr_buff_list.length
              ? `${value.toLocaleString(_lan)}=${_.tb_status.race_buff_template
                  .replace(
                    '%BUFF%',
                    Math.floor(
                      era.get(`base:${chara.index_chara}:${5 + index}`),
                    ).toLocaleString(_lan),
                  )
                  .replace(
                    '%NAME%',
                    _.tb_status.r_base,
                  )}${attr_buff_list.map(([buff, desc]) => _.tb_status.race_buff_template.replace('%BUFF%', buff).replace('%NAME%', desc)).join('')}`
              : void 0,
          },
        ],
        type: 'text',
      },
    );
  });
  return ret;
}

/**
 * @param {RaceInfo} info
 * @param {PseudoUma[]} team_list
 * @param {PseudoUma[]} contestants
 * @param {boolean} [is_grand_live=false]
 */
async function preview_race(
  info,
  team_list,
  contestants,
  is_grand_live = false,
) {
  const _lan = lan();
  const buff_template = i18n().tb_status.race_buff_template;
  const item_inf = era.get('flag:道具影响');
  await era.clear();
  era.drawLine();
  const race_header = [
    {
      config: { align: 'center' },
      content: i18n().race.get_preview_header_env(
        date_indicator(),
        info.daytime ? i18n().race.d_night : i18n().race.d_day,
      ),
      type: 'text',
    },
    {
      config: { align: 'center' },
      content: i18n()
        .race.preview_header_race_template.replace(
          '%TRACK%',
          info.track >= 0
            ? get_track_name(info.track)
            : i18n().race.t_playground,
        )
        .replace('%GROUND%', di18n.race.a_ground[info.ground])
        .replace('%SPAN%', info.span.toLocaleString(lan()))
        .replace('%DISTANCE%', di18n.race.a_distance[info.distance])
        .replace('%ROTATION%', di18n.race.n_rotation[info.rotation + 1])
        .replace('%WEATHER%', di18n.race.n_weather[info.weather])
        .replace('%MESS%', di18n.race.n_mess[info.mess]),
      type: 'text',
    },
    {
      config: {
        align: 'center',
        fontSize: '1.5rem',
      },
      content: [
        info.get_colored_name_with_class(),
        ' ',
        is_grand_live ? i18n().ui_grand_live_mark : '',
      ],
      type: 'text',
    },
  ];
  for (const header_line of race_header) {
    await era.printAndWait(header_line.content, header_line.config);
  }
  await era.clear();
  let skill_buffer = [];
  const item_chara = team_list.filter((e) => {
    const { index_chara: cid } = e;
    if (!cid) {
      return true;
    }
    if (
      cid > 0 &&
      !e.legend &&
      // EXPNAME:25 - 26 = 性爱次数 - 睡奸次数
      era.get(`exp:${cid}:25`) > era.get(`exp:${cid}:26`)
    ) {
      if (era.get(`love:${cid}`) >= 50 && get_sex_acceptable(cid) > 0) {
        return true;
      }
      const mark_check = Math.max(
        era.get(`mark:${cid}:${mark_enum.ero}`) ||
          era.get(`mark:${cid}:${mark_enum.pleasure}`) -
            Math.max(
              era.get(`mark:${cid}:${mark_enum.pain}`),
              era.get(`mark:${cid}:${mark_enum.shame}`),
            ),
        era.get(`mark:${cid}:${mark_enum.meek}`) -
          era.get(`mark:${cid}:${mark_enum.hate}`),
      );
      if (
        mark_check === 3 ||
        (mark_check > 0 && mark_check / 3 > Math.random())
      ) {
        return true;
      }
    }
    return false;
  });
  let flag_prepare_race = true;
  let cur_chara = team_list[0];
  let uma_index = contestants.indexOf(cur_chara);
  let attribute_info = generate_attribute_info(cur_chara);
  let strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
  let flag_print = true;
  cur_chara.list_skill.forEach((s) =>
    skill_buffer.push(...s.data.get_colored_name(cur_chara)),
  );
  let temp;

  /**
   * @param {PseudoUma} uma
   * @returns {string}
   */
  function get_button_type(uma) {
    if (uma.legend > 0) {
      return 'danger';
    }
    return team_list.includes(uma) ? 'success' : 'warning';
  }

  while (flag_prepare_race) {
    era.setVerticalAlign('middle');
    const line_num = (flag_print ? era.printInColRows : era.replaceInColRows)(
      [{ type: 'divider' }, ...race_header, { type: 'divider' }],
      {
        columns: [
          {
            accelerator:
              ((uma_index + contestants.length - 1) % contestants.length) + 1,
            config: {
              align: 'center',
              buttonType: get_button_type(
                (temp = contestants.at(uma_index - 1)),
              ),
            },
            content: i18n().ui_race_prev_template.replace('%NAME%', temp.name),
            type: 'button',
          },
        ],
        config: { width: 3 },
      },
      {
        columns: [
          {
            names: cur_chara.image,
            type: 'image.whole',
          },
          {
            config: {
              align: 'center',
              color: cur_chara.color,
              fontSize: '1.25rem',
            },
            content: cur_chara.name,
            type: 'text',
          },
        ],
        config: { width: 8 },
      },
      {
        columns: [
          {
            config: { align: 'center' },
            content: i18n().get_ui_race_preview_contestant_entry(
              {
                color:
                  adaptability_colors[get_rank_level(cur_chara.score_rank)],
                content: cur_chara.score_rank,
                fontWeight: 'bold',
              },
              i18n().get_ui_motivation({
                color: motivation_colors[cur_chara.motivation + 2],
                content: di18n.n_mot[cur_chara.motivation + 2],
              }),
              cur_chara.pop[0].toString(),
              cur_chara.pop
                .slice(1)
                .map((e) => pop_mark[e])
                .join(' '),
            ),
            type: 'text',
          },
          { config: { content: i18n().ui_train_base }, type: 'divider' },
          ...attribute_info,
          { config: { content: i18n().ui_train_race }, type: 'divider' },
          {
            config: { align: 'center', width: 12 },
            content: i18n().get_ui_race_preview_contestant_adapt(
              di18n.n_ground[info.ground],
              {
                color: adaptability_colors[cur_chara.adapts.ground],
                content: get_adaptability_rank(cur_chara.adapts.ground),
                fontWeight: 'bold',
                title:
                  cur_chara.ground_buffs.length > 0
                    ? `${get_adaptability_rank(cur_chara.adapts.ground)}=${buff_template
                        .replace(
                          '%BUFF%',
                          get_adaptability_rank(
                            cur_chara.o_a_ground_list[info.ground],
                          ),
                        )
                        .replace(
                          '%NAME%',
                          i18n().tb_status.r_base,
                        )}${cur_chara.ground_buffs.map(([buff, desc]) => buff_template.replace('%BUFF%', buff).replace('%NAME%', desc)).join('')}`
                    : void 0,
              },
            ),
            type: 'text',
          },
          {
            config: { align: 'center', width: 12 },
            content: i18n().get_ui_race_preview_contestant_adapt(
              di18n.n_dis[info.distance],
              {
                color: adaptability_colors[cur_chara.adapts.distance],
                content: get_adaptability_rank(cur_chara.adapts.distance),
                fontWeight: 'bold',
                title:
                  cur_chara.dis_buffs.length > 0
                    ? `${get_adaptability_rank(cur_chara.adapts.distance)}=${buff_template
                        .replace(
                          '%BUFF%',
                          get_adaptability_rank(
                            cur_chara.o_a_dis_list[info.distance],
                          ),
                        )
                        .replace(
                          '%NAME%',
                          i18n().tb_status.r_base,
                        )}${cur_chara.dis_buffs.map(([buff, desc]) => buff_template.replace('%BUFF%', buff).replace('%NAME%', desc)).join('')}`
                    : void 0,
              },
            ),
            type: 'text',
          },
          {
            config: { content: i18n().ui_race_preview_contestant_style },
            type: 'divider',
          },
          ...new Array(4).fill(0).map((_, i) => ({
            ...(team_list.includes(cur_chara)
              ? {
                  accelerator: 21 + i,
                  config: {
                    align: 'center',
                    buttonType: cur_chara.style === i ? 'warning' : 'info',
                    width: 6,
                  },
                  type: 'button',
                }
              : {
                  config: {
                    align: 'center',
                    width: 6,
                    ...(cur_chara.style === i
                      ? { color: el_warning_color, fontWeight: 'bold' }
                      : {}),
                  },
                  type: 'text',
                }),
            content: i18n()
              .get_ui_race_preview_contestant_adapt(
                di18n.race.a_style[i],
                strategy_ability[i],
              )
              .join(''),
          })),
          {
            config: { content: i18n().ui_train_learnt_skills },
            type: 'divider',
          },
          {
            config: { align: 'center' },
            content: skill_buffer,
            type: 'text',
          },
        ],
        config: { width: 10 },
      },
      {
        columns: [
          {
            accelerator: ((uma_index + 1) % contestants.length) + 1,
            config: {
              align: 'center',
              buttonType: get_button_type(
                (temp = contestants[(uma_index + 1) % contestants.length]),
              ),
              disableWarning: true,
            },
            content: i18n().ui_race_next_template.replace('%NAME%', temp.name),
            type: 'button',
          },
        ],
        config: { width: 3 },
      },
      {
        columns: [
          { type: 'divider' },
          ...contestants.map((uma, i) => ({
            accelerator: i + 1,
            config: {
              align: 'center',
              buttonType: get_button_type(uma),
              disabled: uma.index_chara === cur_chara.index_chara,
              disableWarning: true,
              width: 4,
            },
            content: `${uma.name} ${di18n.race.a_style[uma.style]}`,
            type: 'button',
          })),
          {
            config: { align: 'center' },
            content: i18n().ui_race_preview_contestant_tip,
            type: 'text',
          },
          { type: 'divider' },
          {
            accelerator: 100,
            config: { width: 8, align: 'center' },
            content: i18n().ui_race_bt_go,
            type: 'button',
          },
          {
            accelerator: 110,
            config: { width: 8, align: 'center' },
            content: i18n().ui_race_bt_chart,
            type: 'button',
          },
          {
            accelerator: 120,
            config: {
              align: 'center',
              disabled: item_chara.length === 0,
              width: 8,
            },
            content: i18n().ui_race_bt_item,
            type: 'button',
          },
        ],
        config: { horizontalAlign: 'center' },
      },
    );
    flag_print = false;
    era.setVerticalAlign('top');
    const ret = await era.input({ hideInput: true });
    if (ret === 100) {
      await era.clear();
      flag_prepare_race = false;
    } else if (ret === 110) {
      await era.clear((await print_race_track_chart(info)) - line_num);
    } else if (ret === 120) {
      const curr = era.getLineCount();
      era.drawLine();
      let flag = true;
      let index = team_list.indexOf(cur_chara);
      if (index === -1) {
        index = 0;
      }
      let chara = get_chara_talk(item_chara[index].index_chara);
      const ui_equip_template =
        i18n().ui_race_preview_equip_item_part_template.replace(
          '%NAME%',
          chara.full_name,
        );
      while (flag) {
        await era.clear(era.getLineCount() - curr - 1);
        era.print(
          i18n().get_ui_race_preview_equip_item(chara.get_colored_full_name()),
        );
        // EQUIPNAME:5 = 胸部
        const b_item = era.get(`equip:${chara.id}:5`);
        if (chara.sex_code !== 1) {
          era.printMultiColumns([
            {
              config: { width: 2 },
              content: i18n().body_part.s_nipple,
              type: 'text',
            },
            {
              accelerator: 1,
              config: {
                disabled: !b_item && era.get('item:跳蛋') < 2,
                width: 22,
              },
              content: b_item > 0 ? i18n().tb_item[b_item] : i18n().ui_nothing,
              type: 'button',
            },
          ]);
        }
        // EQUIPNAME:6 - 7 = 阴茎 - 阴蒂
        const p_item = era.get(`equip:${chara.id}:6`);
        const c_item = era.get(`equip:${chara.id}:7`);
        if (
          chara.sex_code > 0 ||
          item_chara[index].ero.main.at(-1) === 'penis'
        ) {
          era.printMultiColumns([
            {
              config: { width: 2 },
              content: i18n().body_part.s_penis,
              type: 'text',
            },
            {
              accelerator: 2,
              config: {
                disabled: !p_item && era.get('item:飞机杯') < 1,
                width: 22,
              },
              content: p_item > 0 ? i18n().tb_item[p_item] : i18n().ui_nothing,
              type: 'button',
            },
          ]);
        } else {
          era.printMultiColumns([
            {
              config: { width: 2 },
              content: i18n().body_part.s_clitoris,
              type: 'text',
            },
            {
              accelerator: 3,
              config: {
                disabled:
                  // ITEMNAME:74 - 75 = 夹子 - 跳蛋
                  !c_item && era.get('item:75') < 1 && era.get('item:74') < 1,
                width: 22,
              },
              content: c_item > 0 ? i18n().tb_item[c_item] : i18n().ui_nothing,
              type: 'button',
            },
          ]);
        }
        // EQUIPNAME:8 = 阴道
        const v_item = era.get(`equip:${chara.id}:8`);
        if (chara.sex_code !== 1) {
          era.printMultiColumns([
            {
              config: { width: 2 },
              content: i18n().body_part.s_virgin,
              type: 'text',
            },
            {
              accelerator: 4,
              config: {
                disabled:
                  // ITEMNAME:75 = 跳蛋
                  // ITEMNAME:77 = 伪器
                  !v_item && era.get('item:75') < 1 && era.get('item:77') < 1,
                width: 22,
              },
              content: v_item > 0 ? i18n().tb_item[v_item] : i18n().ui_nothing,
              type: 'button',
            },
          ]);
        }
        // EQUIPNAME:9 = 肛门
        const a_item = era.get(`equip:${chara.id}:9`);
        era.printMultiColumns([
          {
            config: { width: 2 },
            content: i18n().body_part.s_anal,
            type: 'text',
          },
          {
            accelerator: 5,
            config: {
              disabled:
                !a_item &&
                // ITEMNAME:77 = 伪器
                era.get('item:77') < 1 &&
                // ITEMNAME:79 - 80 = 肛塞 - 拉珠
                era.get('item:79') < 1 &&
                era.get('item:80') < 1,
              width: 22,
            },
            content: a_item > 0 ? i18n().tb_item[a_item] : i18n().ui_nothing,
            type: 'button',
          },
        ]);
        if (item_chara.length > 1) {
          era.printButton(
            i18n().ui_race_item_prev_template.replace(
              '%NAME%',
              item_chara[index - 1]?.name ?? '-',
            ),
            10,
            {
              disabled: index === 0,
            },
          );
          era.printButton(
            i18n().ui_race_item_next_template.replace(
              '%NAME%',
              item_chara[index + 1]?.name ?? '-',
            ),
            11,
            {
              disabled: index === item_chara.length - 1,
            },
          );
        }
        era.printButton(i18n().ui_end, 99);
        let ret = await era.input();
        /** @type {number[]} */
        const item_list = [];
        switch (ret) {
          case 1:
            era.printMultiColumns([
              {
                config: {
                  content: ui_equip_template.replace(
                    '%PART%',
                    i18n().body_part.s_nipple,
                  ),
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              // ITEMNAME:75 = 跳蛋
              {
                config: { width: 2 },
                content: i18n().tb_item[75],
                type: 'text',
              },
              {
                accelerator: 1,
                config: { width: 4 },
                content:
                  b_item === item_enum.love_eggs
                    ? i18n().body_part.r_v_drop
                    : i18n().body_part.r_v_equip,
                type: 'button',
              },
              {
                config: { width: 18 },
                content: i18n().get_ui_race_preview_item_stg_template.replace(
                  '%COUNT%',
                  era.get('item:75').toLocaleString(_lan),
                ),
                type: 'text',
              },
              { accelerator: 9, content: i18n().ui_back, type: 'button' },
            ]);
            if ((await era.input()) !== 9) {
              if (b_item === item_enum.love_eggs) {
                // EQUIPNAME:5 = 胸部
                era.set(`equip:${chara.id}:5`, 0);
                era.add('item:75', 2);
              } else {
                era.set(`equip:${chara.id}:5`, item_enum.love_eggs);
                era.add('item:75', -2);
              }
            }
            break;
          case 2:
            era.printMultiColumns([
              {
                config: {
                  content: ui_equip_template.replace(
                    '%PART%',
                    i18n().body_part.s_penis,
                  ),
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              // ITEMNAME:76 = 飞机杯
              {
                config: { width: 2 },
                content: i18n().tb_item[76],
                type: 'text',
              },
              {
                accelerator: 1,
                config: { width: 4 },
                content:
                  p_item === item_enum.artificial_virgin
                    ? i18n().body_part.r_v_drop
                    : i18n().body_part.r_v_equip,
                type: 'button',
              },
              {
                config: { width: 18 },
                content: i18n().get_ui_race_preview_item_stg_template.replace(
                  '%COUNT%',
                  era.get('item:76').toLocaleString(_lan),
                ),
                type: 'text',
              },
              { accelerator: 9, content: i18n().ui_back, type: 'button' },
            ]);
            if ((await era.input()) !== 9) {
              if (p_item === item_enum.artificial_virgin) {
                // EQUIPNAME:6 = 阴茎
                era.set(`equip:${chara.id}:6`, 0);
                era.add('item:76', 1);
              } else {
                era.set(`equip:${chara.id}:6`, item_enum.artificial_virgin);
                era.add('item:76', -1);
              }
            }
            break;
          case 3:
            item_list.push(item_enum.clamps, item_enum.love_eggs);
            era.printMultiColumns([
              {
                config: {
                  content: ui_equip_template.replace(
                    '%PART%',
                    i18n().body_part.s_clitoris,
                  ),
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              ...item_list.reduce((p, c, i) => {
                const count = era.get(`item:${c}`);
                p.push(
                  {
                    config: { width: 2 },
                    content: i18n().tb_item[c],
                    type: 'text',
                  },
                  {
                    accelerator: i + 1,
                    config: {
                      disabled: c_item !== c && count < 1,
                      width: 4,
                    },
                    content:
                      c_item === c
                        ? i18n().body_part.r_v_drop
                        : i18n().body_part.r_v_equip,
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content:
                      i18n().get_ui_race_preview_item_stg_template.replace(
                        '%COUNT%',
                        Object(count).toLocaleString(_lan),
                      ),
                    type: 'text',
                  },
                );
                return p;
              }, []),
              { accelerator: 9, content: i18n().ui_back, type: 'button' },
            ]);
            ret = await era.input();
            if (ret !== 9) {
              const selected = item_list[ret - 1];
              if (c_item === selected) {
                // EQUIPNAME:7 = 阴蒂
                era.set(`equip:${chara.id}:7`, 0);
                era.add(`item:${selected}`, 1);
              } else {
                era.set(`equip:${chara.id}:7`, selected);
                if (c_item > 0) {
                  era.add(`item:${c_item}`, 1);
                }
                era.add(`item:${selected}`, -1);
              }
            }
            break;
          case 4:
            item_list.push(item_enum.love_eggs, item_enum.dildo);
            era.printMultiColumns([
              {
                config: {
                  content: ui_equip_template.replace(
                    '%PART%',
                    i18n().body_part.s_virgin,
                  ),
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              ...item_list.reduce((p, c, i) => {
                const check =
                  c === item_enum.dildo &&
                  // TALENTNAME:31 = 处女
                  era.get(`talent:${chara.id}:31`) !== vp_status_enum.no;
                const count = era.get(`item:${c}`);
                p.push(
                  {
                    config: { width: 2 },
                    content: i18n().tb_item[c],
                    type: 'text',
                  },
                  {
                    accelerator: i + 1,
                    config: {
                      disabled: check || (v_item !== c && count < 1),
                      title: check
                        ? i18n().ui_race_preview_equip_item_v_tip
                        : void 0,
                      width: 4,
                    },
                    content:
                      v_item === c
                        ? i18n().body_part.r_v_pop
                        : i18n().body_part.r_v_push,
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content:
                      i18n().get_ui_race_preview_item_stg_template.replace(
                        '%COUNT%',
                        Object(count).toLocaleString(_lan),
                      ),
                    type: 'text',
                  },
                );
                return p;
              }, []),
              { accelerator: 9, content: i18n().ui_back, type: 'button' },
            ]);
            ret = await era.input();
            if (ret !== 9) {
              const selected = item_list[ret - 1];
              if (v_item === selected) {
                // EQUIPNAME:8 = 阴道
                era.set(`equip:${chara.id}:8`, 0);
                era.add(`item:${selected}`, 1);
              } else {
                era.set(`equip:${chara.id}:8`, selected);
                if (v_item > 0) {
                  era.add(`item:${v_item}`, 1);
                }
                era.add(`item:${selected}`, -1);
              }
            }
            break;
          case 5:
            item_list.push(
              item_enum.dildo,
              item_enum.butt_plug,
              item_enum.anal_beads,
            );
            era.printMultiColumns([
              {
                config: {
                  content: ui_equip_template.replace(
                    '%PART%',
                    i18n().body_part.s_anal,
                  ),
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              ...item_list.reduce((p, c, i) => {
                const check = 10 - i * 5;
                const count = era.get(`item:${c}`);
                p.push(
                  {
                    config: { width: 2 },
                    content: i18n().tb_item[c],
                    type: 'text',
                  },
                  {
                    accelerator: i + 1,
                    config: {
                      disabled:
                        era.get(`exp:${chara.id}:肛交次数`) < check ||
                        (a_item !== c && count < 1),
                      title:
                        era.get(`exp:${chara.id}:肛交次数`) < check
                          ? i18n()
                              .ui_race_preview_equip_item_a_cond.replace(
                                '%REQUIRE%',
                                check.toString(),
                              )
                              .replace(
                                '%CURRENT%',
                                Object(
                                  era.get(`exp:${chara.id}:肛交次数`),
                                ).toLocaleString(_lan),
                              )
                          : void 0,
                      width: 4,
                    },
                    content:
                      a_item === c
                        ? i18n().body_part.r_v_pop
                        : i18n().body_part.r_v_push,
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content:
                      i18n().get_ui_race_preview_item_stg_template.replace(
                        '%COUNT%',
                        Object(count).toLocaleString(_lan),
                      ),
                    type: 'text',
                  },
                );
                return p;
              }, []),
              { accelerator: 9, content: i18n().ui_back, type: 'button' },
            ]);
            ret = await era.input();
            if (ret !== 9) {
              const selected = item_list[ret - 1];
              if (a_item === ret) {
                // EQUIPNAME:9 = 肛门
                era.set(`equip:${chara.id}:9`, 0);
                era.add(`item:${selected}`, 1);
              } else {
                era.set(`equip:${chara.id}:9`, selected);
                if (a_item > 0) {
                  era.add(`item:${a_item}`, 1);
                }
                era.add(`item:${selected}`, -1);
              }
            }
            break;
          case 10:
            chara = get_chara_talk(item_chara[--index].index_chara);
            break;
          case 11:
            chara = get_chara_talk(item_chara[++index].index_chara);
            break;
          case 99:
            flag = false;
        }
      }
      await era.clear(era.getLineCount() - curr);
      item_chara.forEach((u) => {
        const { index_chara: cid } = u;
        const o_has_item = u.race.conditionParams.item;
        // EQUIPNAME:5 - 9 = 胸部 - 肛门
        u.ero.item.breast = era.get(`equip:${cid}:5`);
        u.ero.item.penis = era.get(`equip:${cid}:6`);
        u.ero.item.clitoris = era.get(`equip:${cid}:7`);
        u.ero.item.virgin = era.get(`equip:${cid}:8`);
        u.ero.item.anal = era.get(`equip:${cid}:9`);
        u.race.conditionParams.item = +Object.values(u.ero.item).reduce(
          (p, c) => p || c > 0,
          false,
        );
        if (o_has_item === u.race.conditionParams.item) {
          return;
        }
        const ero_skill_level = u.list_skill.find(
          (s) => s.data.group_id === 66005,
        )?.data?.group_level;
        const buff_length = u.attr_buffs[0].length;
        if (ero_skill_level === 2) {
          const has_buff = u.attr_buffs[0].some((b) => b[2] !== item_buff_key);
          if (u.race.conditionParams.item === 1 && !has_buff) {
            u.attr_buffs.forEach((l) =>
              l.push(['+10%', i18n().tb_status.r_item_buff, item_buff_key]),
            );
          } else if (!u.race.conditionParams.item && has_buff) {
            u.attr_buffs = u.attr_buffs.map((l) =>
              l.filter((b) => b[2] !== item_buff_key),
            );
          }
        } else if (item_inf !== 0 && ero_skill_level !== 1) {
          const has_debuff = u.attr_buffs[0].some(
            (b) => b[2] === item_debuff_key,
          );
          if (u.race.conditionParams.item === 1 && !has_debuff) {
            u.attr_buffs.forEach((l) =>
              l.push([
                `${item_inf}%`,
                i18n().tb_status.r_item_debuff,
                item_debuff_key,
              ]),
            );
          } else if (!u.race.conditionParams.item && has_debuff) {
            u.attr_buffs = u.attr_buffs.map((l) =>
              l.filter((b) => b[2] !== item_debuff_key),
            );
          }
        }
        if (u === cur_chara && o_has_item !== u.race.conditionParams.item) {
          skill_buffer = [];
          cur_chara.list_skill.forEach((s) =>
            skill_buffer.push(...s.data.get_colored_name(cur_chara)),
          );
        }
        if (buff_length !== u.attr_buffs[0].length) {
          u.calc_attrs(info.ground, info.distance);
          if (u === cur_chara) {
            attribute_info = generate_attribute_info(cur_chara);
          }
        }
      });
    } else if (ret >= 21) {
      // CFLAGNAME:42 = 跑法
      cur_chara.style = era.set(`cflag:${cur_chara.index_chara}:42`, ret - 21);
    } else if (ret <= 20) {
      cur_chara = contestants[(uma_index = ret - 1)];
      attribute_info = generate_attribute_info(cur_chara);
      strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
      skill_buffer = [];
      cur_chara.list_skill.forEach((s) =>
        skill_buffer.push(...s.data.get_colored_name(cur_chara)),
      );
    }
  }
}

module.exports = preview_race;
