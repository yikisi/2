const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_change_tired = require('#/system/chara/sys-change-tired');
const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const get_status = require('#/system/chara/sys-get-status');
const sys_get_grand_lives = require('#/system/flag/sys-get-grand-lives');
const sys_check_titles_after_race = require('#/system/race/sys-check-titles-after-race');
const sys_parse_for_race = require('#/system/race/sys-parse-race-uma');
const sys_prepare_race = require('#/system/race/sys-prepare-race');
const sys_sim_race = require('#/system/race/sys-simulate-race');
const sys_call_edu_event = require('#/system/script/sys-call-edu-script');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_change_pressure,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const { get_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const date_indicator = require('#/page/components/date-indicator');
const check_race_events = require('#/page/race/check-race-events');
const page_race_result = require('#/page/race/page-race-result');
const print_race_track_chart = require('#/page/race/race-track-chart');
const select_contestants = require('#/page/race/select-contestants');

const { get_custom_check } = require('#/event/check/check-factory');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const {
  adaptability_colors,
  el_danger_color,
  el_success_color,
  el_warning_color,
  money_color,
  motivation_colors,
} = require('#/data/color-const');
const { attr_background_colors, attr_colors } = require('#/data/const.json');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const AfterRaceParams = require('#/data/event/after-race-params');
const event_hooks = require('#/data/event/event-hooks');
const RaceEndParams = require('#/data/event/extra-flag/race-end-params');
const RaceStartParams = require('#/data/event/extra-flag/race-start-params');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_adaptability_rank,
  get_attr_rank,
  get_rank_level,
  get_trainer_level,
} = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const {
  race_enum,
  race_infos,
  race_rewards,
} = require('#/data/race/race-const');
const {
  adaptability_names,
  attr_names,
  motivation_names,
} = require('#/data/train-const');

const adaptability2race = [
  race_enum.aoi_sta,
  race_enum.shin_kin,
  race_enum.toky_sta,
  race_enum.kyot_sta,
  race_enum.negi_sta,
  race_enum.unic_sta,
  race_enum.miya_sta,
  race_enum.heia_sta,
];

const pop_mark = ['➖', '◎', '◯', '▲', '△', '△'];

/** @param {PseudoUma} chara */
function generate_attribute_info(chara) {
  const ret = [];
  chara.attrs.forEach((value, index) => {
    const attr_buff_list = chara.attr_buffs[index],
      rank = get_attr_rank(value),
      rank_color = adaptability_colors[get_rank_level(rank)];
    ret.push(
      {
        config: {
          align: 'center',
          color: attr_colors[attr_names[index]],
          fontWeight: 'bold',
          width: 8,
        },
        content: attr_names[index],
        type: 'text',
      },
      {
        config: {
          align: 'center',
          color: rank_color,
          fontWeight: 'bold',
          width: 8,
        },
        content: rank,
        type: 'text',
      },
      {
        config: {
          width: 8,
          align: 'center',
          color: rank_color,
        },
        content: [
          {
            content: value.toString(),
            title: attr_buff_list.length
              ? `${value.toString()}=${era.get(
                  `base:${chara.index_chara}:${attr_names[index]}`,
                )}(基础)${attr_buff_list.join('')}`
              : undefined,
          },
        ],
        type: 'text',
      },
    );
  });
  return ret;
}

/**
 * @param {RaceInfo} _info
 * @param {number} is_grand_live
 */
function page_race_header(_info, is_grand_live) {
  era.printInColRows(
    {
      columns: [
        {
          type: 'divider',
        },
        {
          config: {
            align: 'right',
            width: 8,
          },
          content: date_indicator(),
          type: 'text',
        },
        {
          config: {
            align: 'center',
            fontSize: '1.5rem',
            width: 8,
          },
          content: [
            _info.get_colored_name_with_class(),
            is_grand_live ? ' 🎤' : '',
          ],
          type: 'text',
        },
        {
          config: {
            fontWeight: 'bold',
            width: 8,
          },
          content: `${RaceInfo.track_names[_info.track]}竞马场`,
          type: 'text',
        },
      ],
      config: { verticalAlign: 'middle' },
    },
    {
      columns: [
        {
          config: { align: 'center', width: 4 },
          content: [get_chara_talk(0).get_colored_name(), ' 的精力'],
          type: 'text',
        },
        {
          config: {
            color: attr_background_colors['精力'],
            height: 22,
            width: 8,
          },
          inContent: `${era.get('base:0:精力')}/${era.get('maxbase:0:精力')}`,
          percentage:
            (era.get('base:0:精力') * 100) / era.get('maxbase:0:精力'),
          type: 'progress',
        },
        {
          config: { align: 'center', width: 12 },
          content: get_status(0),
          type: 'text',
        },
      ],
      config: { offset: 4, width: 16 },
    },
  );
}

/** @param {number} race */
async function race_page(race) {
  era.set('flag:当前赛事', race);
  const aim_race_dict = {};
  const team_list = (await select_contestants(race)).map(sys_get_chara_pseudo),
    is_grand_live = sys_get_grand_lives()[0][race];
  let wait_flag = false,
    /** @type {RaceInfo} */
    info;
  if (race === race_enum.begin_race) {
    const chara = team_list[0],
      max_ground = Math.max(...chara.adapt_ground_list),
      max_span = Math.max(...chara.adapt_distance_list),
      tmp = [];
    chara.adapt_ground_list.forEach(
      (eg, ig) =>
        eg === max_ground &&
        chara.adapt_distance_list.forEach((es, is) => {
          es === max_span && tmp.push(adaptability2race[(ig << 2) + is]);
        }),
    );
    const race_id = get_random_entry(tmp),
      aim_info = race_infos[race_id];
    info = new RaceInfo(
      race_infos[race_enum.begin_race].name_en,
      race_infos[race_enum.begin_race].name_zh,
      race_infos[race_enum.begin_race].race_class,
      aim_info.track,
      aim_info.ground,
      aim_info.span,
      adaptability2race.indexOf(race_id) % 4,
      aim_info.rotation,
      aim_info.gates,
      0,
      race_infos[race_enum.begin_race].limit,
      0,
      race_infos[race_enum.begin_race].prize,
      aim_info.param_id,
    );
    info.attr_bonus = aim_info.attr_bonus;
    info.lanes = aim_info.lanes;
    info.slopes = aim_info.slopes;
    info.phases = aim_info.phases;
  } else {
    info = race_infos[race];
  }
  info.mess = get_random_entry(Object.values(RaceInfo.mess_enum));
  const contestants = sys_parse_for_race(team_list, race, info);
  team_list.forEach((uma) => {
    const id = uma.index_chara;
    const tired = era.get(`status:${id}:疲惫`);
    if (tired >= 5) {
      era.print([get_chara_talk(id).get_colored_name(), ' 深陷疲惫……']);
      wait_flag =
        sys_change_motivation(
          id,
          -get_random_value(0, Math.min(1 + Math.floor((tired - 5) / 2), 4)),
        ) || wait_flag;
      uma.motivation = era.get(`cflag:${id}:干劲`);
    }
    if (
      id > 0 &&
      era.get(`cstr:${id}:决胜服`) === -1 &&
      race_infos[race].race_class <= RaceInfo.class_enum.G1 &&
      team_list.indexOf(uma) !== -1
    ) {
      era.set(`cstr:${id}:决胜服`, 0);
    }
  });
  wait_flag && (await era.waitAnyKey());
  await era.clear();
  era.drawLine();
  const race_header = [
    {
      config: { align: 'center' },
      content: date_indicator(),
      type: 'text',
    },
    {
      config: { align: 'center' },
      content: `${RaceInfo.track_names[info.track]} ${adaptability_names[
        info.ground
      ].substring(0, 1)} ${info.span}m (${adaptability_names[
        info.distance + 2
      ].substring(0, 1)}) ${RaceInfo.rotation_names[info.rotation]} · 晴 ${
        info.gates
      }人`,
      type: 'text',
    },
    {
      config: {
        align: 'center',
        fontSize: '1.5rem',
      },
      content: [info.get_colored_name_with_class(), is_grand_live ? ' 🎤' : ''],
      type: 'text',
    },
  ];
  for (const header_line of race_header) {
    await era.printAndWait(header_line.content, header_line.config);
  }
  let flag_prepare_race = true,
    cur_chara = team_list[0],
    uma_index = contestants.indexOf(cur_chara),
    attribute_info = generate_attribute_info(cur_chara),
    strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
  while (flag_prepare_race) {
    era.setVerticalAlign('middle');
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            accelerator:
              ((uma_index + contestants.length - 1) % contestants.length) + 1,
            config: { align: 'center' },
            content: `上一位\n${contestants.at(uma_index - 1).name}`,
            type: 'button',
          },
        ],
        config: { width: 4 },
      },
      {
        columns: [
          {
            names: get_image(cur_chara.index_chara)
              .map((_i) => `${_i}_半身`)
              .join('\t'),
            type: 'image.whole',
          },
          {
            config: {
              align: 'center',
              color:
                era.get(`cflag:${cur_chara.index_chara}:招募状态`) ===
                recruit_flags.yes
                  ? get_chara_color(cur_chara.index_chara)
                  : get_chara_talk(cur_chara.index_chara).color,
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
            content: [
              '干劲：',
              {
                color: motivation_colors[cur_chara.motivation + 2],
                content: motivation_names[cur_chara.motivation + 2],
              },
              { isBr: true },
              ' 第 ',
              cur_chara.pop[0],
              ' 人气 ',
              cur_chara.pop
                .slice(1)
                .map((e) => pop_mark[e])
                .join(' '),
            ],
            type: 'text',
          },
          { config: { content: '基础能力' }, type: 'divider' },
          ...attribute_info,
          { config: { content: '比赛能力' }, type: 'divider' },
          {
            config: { align: 'center', width: 12 },
            content: [
              `${adaptability_names[info.ground]}适性：`,
              {
                color: adaptability_colors[cur_chara.adapts.ground],
                content: get_adaptability_rank(cur_chara.adapts.ground),
                fontWeight: 'bold',
                title:
                  cur_chara.ground_buffs.length > 0
                    ? `${get_adaptability_rank(cur_chara.adapts.ground)}=${get_adaptability_rank(
                        era.get(
                          `cflag:${cur_chara.index_chara}:${adaptability_names[info.ground]}适性`,
                        ),
                      )}(基础)${cur_chara.ground_buffs.join('')}`
                    : undefined,
              },
            ],
            type: 'text',
          },
          {
            config: { align: 'center', width: 12 },
            content: [
              `${adaptability_names[info.distance + 2]}适性：`,
              {
                color: adaptability_colors[cur_chara.adapts.distance],
                content: get_adaptability_rank(cur_chara.adapts.distance),
                fontWeight: 'bold',
                title:
                  cur_chara.dis_buffs.length > 0
                    ? `${get_adaptability_rank(cur_chara.adapts.distance)}=${get_adaptability_rank(
                        era.get(
                          `cflag:${cur_chara.index_chara}:${adaptability_names[2 + info.distance]}适性`,
                        ),
                      )}(基础)${cur_chara.dis_buffs.join('')}`
                    : undefined,
              },
            ],
            type: 'text',
          },
          { config: { content: '出走策略' }, type: 'divider' },
          ...new Array(4).fill(0).map((_, i) => {
            return team_list.indexOf(cur_chara) !== -1
              ? {
                  accelerator: 21 + i,
                  config: {
                    align: 'center',
                    buttonType: cur_chara.style === i ? 'warning' : 'info',
                    width: 6,
                  },
                  content: `${adaptability_names[6 + i].substring(0, 1)} ${strategy_ability[i]}`,
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
                  content: `${adaptability_names[6 + i].substring(0, 1)} ${strategy_ability[i]}`,
                  type: 'text',
                };
          }),
        ],
        config: { width: 8 },
      },
      {
        columns: [
          {
            accelerator: ((uma_index + 1) % contestants.length) + 1,
            config: { align: 'center' },
            content: `下一位\n${contestants[(uma_index + 1) % contestants.length].name}`,
            type: 'button',
          },
        ],
        config: { width: 4 },
      },
      {
        columns: [
          { type: 'divider' },
          ...contestants.map((uma, i) => {
            const id = uma.index_chara;
            return {
              accelerator: i + 1,
              config: {
                align: 'center',
                buttonType: uma.legend
                  ? 'danger'
                  : team_list.indexOf(uma) !== -1
                    ? 'success'
                    : 'warning',
                disabled: id === cur_chara.index_chara,
                disableWarning: true,
                width: 6,
              },
              content: `${uma.name} ${adaptability_names[
                6 + uma.style
              ].substring(0, 1)}`,
              type: 'button',
            };
          }),
          {
            config: { align: 'center' },
            content: [
              '* 参赛选手按跑道号从低到高显示，队伍成员显示为 ',
              { color: el_success_color, content: '绿名' },
              '，强敌显示为 ',
              { color: el_danger_color, content: '红名' },
            ],
            type: 'text',
          },
          { type: 'divider' },
          {
            accelerator: 100,
            config: {
              width: 12,
              align: 'center',
            },
            content: '出走！',
            type: 'button',
          },
          {
            accelerator: 110,
            config: {
              width: 12,
              align: 'center',
            },
            content: '赛场数据',
            type: 'button',
          },
        ],
        config: { horizontalAlign: 'center' },
      },
    );
    era.setVerticalAlign('top');
    const ret = await era.input();
    if (ret === 100) {
      await era.clear();
      flag_prepare_race = false;
    } else {
      if (ret === 110) {
        print_race_track_chart(info);
        await era.waitAnyKey();
      } else if (ret >= 21) {
        cur_chara.style = era.set(
          `cflag:${cur_chara.index_chara}:跑法`,
          ret - 21,
        );
      } else if (ret <= 20) {
        cur_chara = contestants[(uma_index = ret - 1)];
        attribute_info = generate_attribute_info(cur_chara);
        strategy_ability = cur_chara.adapt_style_list.map(
          get_adaptability_rank,
        );
      }
      await era.clear();
      era.printMultiColumns([{ type: 'divider' }, ...race_header]);
    }
  }
  await era.clear();
  const race_start = {},
    race_end = {};
  team_list.forEach((chara) => {
    const id = chara.index_chara;
    if (id) {
      race_start[id] = race_end[id] = false;
    }
    aim_race_dict[id] = get_custom_check(id).is_aim_race(
      race,
      era.get(`cflag:${id}:育成回合计时`),
    );
    chara.adapts.style = chara.adapt_style_list[chara.style];
  });
  let start_count = team_list.filter((e) => e.index_chara > 0).length,
    end_count = start_count,
    time_cost = 0;
  while (start_count) {
    await era.clear();
    page_race_header(info, is_grand_live);
    const player_time = era.get('base:0:精力');
    era.setHorizontalAlign('space-around');
    era.printInColRows(
      [{ type: 'divider' }, { content: '要给谁赛前打气？\n\n', type: 'text' }],
      ...team_list
        .filter((e) => e.index_chara > 0)
        .map((uma) => {
          const id = uma.index_chara;
          return {
            columns: [
              {
                type: 'image.whole',
                names: get_image(id)
                  .map((_i) => `${_i}_半身`)
                  .join('\t'),
              },
              {
                accelerator: id,
                config: {
                  align: 'center',
                  buttonType:
                    (aim_race_dict[id] & 0x1) > 0 ? 'danger' : 'warning',
                  disabled: race_start[id] || player_time < time_cost,
                },
                content: era.get(`callname:${id}:-2`),
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
      [
        {
          content: [
            '* 互动按钮显示为',
            { color: el_danger_color, content: '红色' },
            '的角色有专属剧情事件',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        },
        { content: '结束', accelerator: 999, type: 'button' },
      ],
    );
    era.setHorizontalAlign('start');
    const ret = await era.input();
    if (ret === 999) {
      start_count = 0;
    } else {
      era.drawLine();
      await sys_call_edu_event(
        ret,
        event_hooks.race_start,
        new RaceStartParams(race),
      );
      start_count--;
      race_start[ret] = true;
      sys_change_attr_and_print(0, '精力', -time_cost);
      time_cost += 100;
    }
  }
  sys_prepare_race(contestants, info);
  const records = sys_sim_race(contestants, info);
  await page_race_result(contestants, records, info);
  team_list.forEach((uma) => {
    aim_race_dict[uma.index_chara] = get_custom_check(
      uma.index_chara,
    ).is_aim_race(
      race,
      era.get(`cflag:${uma.index_chara}:育成回合计时`),
      uma.rank.curr,
    );
  });
  const cur_year = era.get('flag:当前年');
  era.drawLine();
  sort_list(team_list, (e) => e.rank.curr, true).forEach((uma) => {
    const id = uma.index_chara;
    era.print([
      get_chara_talk(id).get_colored_name(),
      ' 取得了 ',
      info.get_colored_name(),
      ` 的 ${uma.rank.curr} 着！`,
    ]);
    let rewards;
    let attr_change = new Array(5).fill(0);
    if (uma.rank.curr) {
      rewards = race_rewards[info.race_class][1];
      if (race === race_enum.begin_race) {
        attr_change = new Array(5).fill(3);
      }
    } else if (uma.rank.curr <= 5) {
      rewards = race_rewards[info.race_class][5];
    } else if (uma.rank.curr <= 10) {
      rewards = race_rewards[info.race_class][10];
    }
    const base_change = {};
    base_change['体力'] = -get_random_value(150, 250, true);
    base_change['精力'] = -get_random_value(150, 250, true);
    if (rewards) {
      attr_change[get_random_value(0, 4)] += get_random_value(...rewards.attr);
      get_attr_and_print_in_event(
        id,
        attr_change,
        get_random_value(...rewards.pt),
        base_change,
      );
    } else {
      get_attr_and_print_in_event(id, undefined, 10);
      // TODO 伏兵+1 随机负面技能
    }
    era.println();
    const edu_weeks = era.get(`cflag:${id}:育成回合计时`);
    if (uma.rank.curr === 1 || race !== race_enum.begin_race) {
      new RaceHistory(id).add_result(
        edu_weeks,
        new RaceHistory.RaceResult(
          uma.pop[0],
          race,
          uma.rank.curr,
          uma.style,
          cur_year,
        ),
      );
    }
    sys_change_tired(id, 3);
    get_custom_check(id).check_after_race(
      new AfterRaceParams(
        aim_race_dict[id] > 0,
        contestants,
        edu_weeks,
        uma.pop[0],
        race,
        uma.rank.curr,
        uma.style,
      ),
    );
  });
  await era.waitAnyKey();
  time_cost = 0;
  while (end_count) {
    await era.clear();
    page_race_header(info, is_grand_live);
    const player_time = era.get('base:0:精力');
    era.setHorizontalAlign('space-around');
    era.printInColRows(
      [{ type: 'divider' }, { content: '要祝贺/安慰谁？\n\n', type: 'text' }],
      ...team_list
        .filter((uma) => uma.index_chara > 0)
        .map((uma) => {
          const id = uma.index_chara;
          return {
            columns: [
              {
                type: 'image.whole',
                names: get_image(id)
                  .map((_i) => `${_i}_半身`)
                  .join('\t'),
              },
              {
                accelerator: Number(id),
                config: {
                  align: 'center',
                  buttonType:
                    (aim_race_dict[id] & 0x2) > 0 ? 'danger' : 'warning',
                  disabled: race_end[id] || player_time < time_cost,
                },
                content: `${era.get(`callname:${id}:-2`)} (${uma.rank.curr}着)`,
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
      [
        {
          content: [
            '* 互动按钮显示为',
            { color: el_danger_color, content: '红色' },
            '的角色有专属剧情事件',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        },
        { content: '结束', accelerator: 999, type: 'button' },
      ],
    );
    era.setHorizontalAlign('start');
    const ret = await era.input();
    if (ret === 999) {
      end_count = 0;
    } else {
      era.drawLine();
      await sys_call_edu_event(
        ret,
        event_hooks.race_end,
        new RaceEndParams(
          contestants,
          race,
          team_list.find((e) => e.index_chara === ret).rank.curr,
        ),
      );
      end_count--;
      race_end[ret] = true;
      sys_change_attr_and_print(0, '精力', -time_cost);
      time_cost += 100;
    }
  }
  await check_race_events(info, team_list);
  era.drawLine();
  const best_rank = Math.min(...team_list.map((e) => e.rank.curr)),
    mvp_id = team_list.find((e) => e.rank.curr === best_rank).index_chara,
    is_pregnant_slave = era.get('flag:惩戒力度') === 3;
  let fame_reward;
  if (best_rank === 1) {
    fame_reward = race_rewards[info.race_class][1].fame;
  } else if (best_rank <= 5) {
    fame_reward = race_rewards[info.race_class][5].fame;
  } else if (best_rank <= 10) {
    fame_reward = race_rewards[info.race_class][10].fame;
  } else {
    fame_reward = race_rewards[info.race_class][20].fame;
  }
  if (is_grand_live) {
    if (
      mvp_id === 308 ||
      (era.get(`cflag:${mvp_id}:父方角色`) ||
        era.get(`cflag:${mvp_id}:母方角色`)) === 308
    ) {
      fame_reward = Math.max(fame_reward, 10) * 3;
    } else if (fame_reward > 0) {
      fame_reward *= 2;
    }
  }
  if (
    !mvp_id ||
    (is_pregnant_slave &&
      (!era.get(`cflag:${mvp_id}:父方角色`) ||
        !era.get(`cflag:${mvp_id}:母方角色`)))
  ) {
    fame_reward *= 2;
  }
  const { hentai_flag, new_title_dict } = sys_check_titles_after_race(
    team_list,
    race,
    best_rank,
    mvp_id,
  );
  fame_reward -= hentai_flag * 150;
  let race_title_reward = 0;
  wait_flag = false;
  for (const { index_chara: id } of team_list) {
    const titles = new CharaTitles(id),
      cur_count = titles.count();
    wait_flag = sys_add_titles(id, ...new_title_dict[id]) || wait_flag;
    if (titles.count() > cur_count) {
      titles
        .get()
        .slice(cur_count)
        .forEach((e) => {
          switch (e.c) {
            case adaptability_colors.at(-1):
            case adaptability_colors.at(-2):
              race_title_reward += 2;
              break;
            case adaptability_colors.at(-3):
              race_title_reward++;
          }
        });
    }
  }
  fame_reward += race_title_reward * 40;
  if (
    era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.fetal > 0 &&
    team_list.findIndex((uma) => uma.index_chara === 0) === -1
  ) {
    fame_reward -= 50;
  }
  if (fame_reward !== 0 && (fame_reward > 0 || !is_pregnant_slave)) {
    sys_change_fame(fame_reward);
    if (fame_reward > 0) {
      await era.printAndWait([
        '因为队伍成员的',
        '出色表现',
        '，社会对 ',
        get_chara_talk(0).get_colored_name(),
        ' 的评价上升了！',
      ]);
    } else {
      await era.printAndWait([
        '因为队伍成员的',
        hentai_flag ? '变态行为' : '比赛失利',
        '，社会对 ',
        get_chara_talk(0).get_colored_name(),
        ' 的评价降低了！',
      ]);
    }
  }
  if (fame_reward > 0) {
    wait_flag =
      sys_like_chara(302, 0, fame_reward / 5 + race_title_reward * 12) ||
      wait_flag;
  }
  if (best_rank <= 5) {
    wait_flag =
      sys_like_chara(
        301,
        0,
        (6 - best_rank) * (5 - info.race_class) + race_title_reward * 25,
      ) || wait_flag;
    if (info.race_class <= RaceInfo.class_enum.G3) {
      wait_flag =
        sys_like_chara(
          303,
          0,
          (6 - best_rank) * (3 - info.race_class) + race_title_reward * 30,
        ) || wait_flag;
    }
    if (info.track >= RaceInfo.track_enum.longchamp) {
      wait_flag =
        sys_like_chara(
          343,
          0,
          (race === race_enum.prix_lat ? 20 * (6 - best_rank) : 0) +
            fame_reward / 5 +
            race_title_reward * 5,
        ) || wait_flag;
    }
  }
  if (is_grand_live) {
    wait_flag =
      sys_like_chara(308, 0, 20 + (best_rank <= 5 ? fame_reward / 5 : 0)) ||
      wait_flag;
  }
  const prize_ratio = 0.04 * get_trainer_level() + 0.04,
    total_prize = sys_change_money(
      team_list
        .map((uma) => {
          if (uma.rank.curr <= 5) {
            let prize = info.prize * RaceInfo.prize_ratios[uma.rank.curr - 1];
            era.add(`cflag:${uma.index_chara}:总赏金`, prize);
            uma.index_chara && (prize *= prize_ratio);
            return prize;
          }
          return 0;
        })
        .reduce((p, c) => p + c),
    );
  if (total_prize) {
    await era.printAndWait([
      '收到了比赛赏金分成 ',
      {
        content: total_prize.toLocaleString(),
        color: money_color,
      },
      ' 马币',
    ]);
  }
  for (const uma of team_list) {
    const id = uma.index_chara;
    const tmp = sys_reg_race(id);
    tmp.curr.race = tmp.last.race = -1;
    tmp.curr.week = tmp.last.week = -1;
    if (uma.rank.curr === 1) {
      sys_change_lust(id, lust_from_palam);
      sys_change_pressure(id, -2000);
    } else if (uma.rank.curr <= 5) {
      sys_change_lust(id, lust_from_palam / 2);
      sys_change_pressure(id, -200 * (6 - uma.rank.curr));
    } else if (uma.rank.curr <= 10) {
      sys_change_pressure(id, 300 * uma.rank.curr);
    }
    if (!id) {
      continue;
    }
    let relation_punish = 0;
    if (!race_start[id]) {
      relation_punish += RaceInfo.relation_rewards[1];
    }
    if (!race_end[id]) {
      if (uma.rank.curr === 1) {
        relation_punish += RaceInfo.relation_rewards[0];
      } else if (uma.rank.curr <= 5) {
        relation_punish += RaceInfo.relation_rewards[1];
      } else if (uma.rank.curr <= 10) {
        relation_punish += RaceInfo.relation_rewards[2];
      } else {
        relation_punish += RaceInfo.relation_rewards[3];
      }
    }
    if (relation_punish) {
      era.print([
        '因为 ',
        get_chara_talk(0).get_colored_name(),
        ' 的忽视，',
        get_chara_talk(id).get_colored_name(),
        ` ${
          relation_punish > RaceInfo.relation_rewards[2] ? '无比' : '有些'
        }失望……`,
      ]);
      sys_like_chara(id, 0, -relation_punish);
      wait_flag = true;
    }
  }
  wait_flag && (await era.waitAnyKey());
  if (best_rank === 1) {
    if (race === race_enum.prix_lat) {
      era.get('cflag:204:随机招募') <= 0 && era.add('cflag:204:随机招募', -1);
    }
    if (race === race_enum.prix_lat || race === race_enum.prix_dia) {
      [205, 206].forEach(
        (e) =>
          !era.get(`cflag:${e}:随机招募`) && era.add(`cflag:${e}:随机招募`, -1),
      );
    }
  }
  era.drawLine();
  await era.printAndWait('回去了……');
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    race: event_hooks.race,
  });
  era.set('flag:当前赛事', 0);
}

module.exports = race_page;
