const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_change_tired = require('#/system/chara/sys-change-tired');
const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const sys_call_check = require('#/system/script/sys-call-check');
const sys_call_edu_event = require('#/system/script/sys-call-edu-script');
const {
  sys_reg_race,
  sys_change_attr_and_print,
  sys_change_motivation,
  sys_change_lust,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_get_random_event = require('#/system/sys-get-random-event');

const date_indicator = require('#/page/components/date-indicator');
const print_race_track_chart = require('#/page/components/race-track-chart');
const select_contestants = require('#/page/components/select-contestants');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_image } = require('#/system/sys-calc-image');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const {
  adaptability_colors,
  motivation_colors,
  money_color,
  el_danger_color,
  buff_colors,
} = require('#/data/color-const');
const { attr_background_colors, attr_colors } = require('#/data/const.json');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const {
  get_adaptability_rank,
  get_attr_rank,
  get_status,
  get_trainer_level,
  get_rank_level,
} = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const {
  race_enum,
  race_infos,
  race_rewards,
} = require('#/data/race/race-const');
const {
  motivation_names,
  attr_names,
  adaptability_names,
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

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date,
  edu_weeks_shuk_sho = 48 + race_infos[race_enum.shuk_sho].date,
  edu_weeks_japa_dir = 48 + race_infos[race_enum.japa_dir].date;

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
              ? `${value.toString()}=${era.get(`base:${chara.index_chara}:${attr_names[index]}`)}(基础)${attr_buff_list.join('')}`
              : undefined,
          },
        ],
        type: 'text',
      },
    );
  });
  return ret;
}

/** @param {RaceInfo} _info */
function page_race_header(_info) {
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
            fontSize: '24px',
            width: 8,
          },
          content: [_info.get_colored_name_with_class()],
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

/**
 * @param {number} race
 */
async function race_page(race) {
  era.set('flag:当前赛事', race);
  /** @type {PseudoUma[]} */
  const contestants = (await select_contestants(race))?.map(
    sys_get_chara_pseudo,
  );
  const aim_race_dict = {},
    pop_dict = {},
    new_title_dict = {};
  let wait_flag = false,
    /** @type {RaceInfo} */
    info;
  if (race === race_enum.begin_race) {
    const chara = contestants[0],
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
  contestants.forEach((uma) => {
    const id = uma.index_chara;
    uma.adapt_ground_list = uma.adapt_ground_list.map((e) =>
      Math.min(Math.max(e, 0), 7),
    );
    uma.adapt_distance_list = uma.adapt_distance_list.map((e) =>
      Math.min(Math.max(e, 0), 7),
    );
    uma.adapts.ground = uma.adapt_ground_list[info.ground];
    uma.adapts.distance = uma.adapt_distance_list[info.distance];
    // TODO 人气
    pop_dict[id] = 1;
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
      era.get(`cstr:${id}:决胜服`) === -1 &&
      race_infos[race].race_class === RaceInfo.class_enum.G1
    ) {
      era.set(`cstr:${id}:决胜服`, '');
    }
    new_title_dict[id] = [];
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
        fontSize: '24px',
      },
      content: [info.get_colored_name_with_class()],
      type: 'text',
    },
  ];
  for (const header_line of race_header) {
    await era.printAndWait(header_line.content, header_line.config);
  }
  let flag_prepare_race = true,
    cur_chara = contestants[0],
    attribute_info = generate_attribute_info(cur_chara),
    strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
  while (flag_prepare_race) {
    era.setVerticalAlign('middle');
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            names: get_image(cur_chara.index_chara)
              .map((_i) => `${_i}_半身`)
              .join('\t'),
            type: 'image.whole',
          },
          {
            config: { align: 'center', fontSize: '20px' },
            content: [get_chara_talk(cur_chara.index_chara).get_colored_name()],
            type: 'text',
          },
        ],
        config: { offset: 4, width: 8 },
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
                    ? `${get_adaptability_rank(cur_chara.adapts.ground)}=${get_adaptability_rank(era.get(`cflag:${cur_chara.index_chara}:${adaptability_names[info.ground]}适性`))}(基础)${cur_chara.ground_buffs.join('')}`
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
                    ? `${get_adaptability_rank(cur_chara.adapts.distance)}=${get_adaptability_rank(era.get(`cflag:${cur_chara.index_chara}:${adaptability_names[2 + info.distance]}适性`))}(基础)${cur_chara.dis_buffs.join('')}`
                    : undefined,
              },
            ],
            type: 'text',
          },
          { config: { content: '出走策略' }, type: 'divider' },
          {
            config: { align: 'center', width: 12 },
            accelerator: 1010,
            content: `逃 ${strategy_ability[0]}${cur_chara.style === 0 ? ' ✓' : ''}`,
            type: 'button',
          },
          {
            config: { align: 'center', width: 12 },
            accelerator: 1011,
            content: `先 ${strategy_ability[1]}${cur_chara.style === 1 ? ' ✓' : ''}`,
            type: 'button',
          },
          {
            config: { align: 'center', width: 12 },
            accelerator: 1012,
            content: `差 ${strategy_ability[2]}${cur_chara.style === 2 ? ' ✓' : ''}`,
            type: 'button',
          },
          {
            config: { align: 'center', width: 12 },
            accelerator: 1013,
            content: `追 ${strategy_ability[3]}${cur_chara.style === 3 ? ' ✓' : ''}`,
            type: 'button',
          },
        ],
        config: { width: 8 },
      },
      {
        columns: [
          { type: 'divider' },
          ...(contestants.length > 1
            ? [
                ...contestants.map((uma) => {
                  const id = uma.index_chara;
                  return {
                    accelerator: id,
                    config: {
                      align: 'center',
                      disabled: id === cur_chara.index_chara,
                      width: 6,
                    },
                    content: `${era.get(
                      `callname:${id}:-1`,
                    )} ${adaptability_names[6 + cur_chara.style].substring(
                      0,
                      1,
                    )}`,
                    type: 'button',
                  };
                }),
                { type: 'divider' },
              ]
            : []),
          {
            accelerator: 1000,
            config: {
              width: 12,
              align: 'center',
            },
            content: '出走！',
            type: 'button',
          },
          {
            accelerator: 1020,
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
    if (ret === 1020) {
      print_race_track_chart(info);
      await era.waitAnyKey();
    } else if (ret >= 1010) {
      cur_chara.style = era.set(
        `cflag:${cur_chara.index_chara}:跑法`,
        ret - 1010,
      );
    } else if (ret < 1000) {
      cur_chara = contestants[ret - 1000];
      attribute_info = generate_attribute_info(cur_chara);
      strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
    }
    await era.clear();
    if (ret === 1000) {
      flag_prepare_race = false;
    } else {
      era.printMultiColumns([{ type: 'divider' }, ...race_header]);
    }
  }
  await era.clear();
  const race_rank = {},
    race_start = {},
    race_end = {};
  contestants.forEach((chara) => {
    const id = chara.index_chara;
    if (id) {
      race_start[id] = race_end[id] = false;
    }
    aim_race_dict[id] = sys_call_check(id, check_stages.aim_race, {
      edu_weeks: era.get(`cflag:${id}:育成回合计时`),
      race,
    });
    chara.adapts.style = chara.adapt_style_list[chara.style];
  });
  let start_count = contestants.filter((e) => e.index_chara > 0).length,
    end_count = start_count,
    time_cost = 0;
  while (start_count) {
    await era.clear();
    page_race_header(info);
    const player_time = era.get('base:0:精力');
    era.setHorizontalAlign('space-around');
    era.printInColRows(
      [{ type: 'divider' }, { content: '要给谁赛前打气？\n\n', type: 'text' }],
      ...contestants
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
      await sys_call_edu_event(ret, event_hooks.race_start, {
        race,
      });
      start_count--;
      race_start[ret] = true;
      sys_change_attr_and_print(0, '精力', -time_cost);
      time_cost += 100;
    }
  }
  // TODO 换成真实的比赛系统
  era.printMultiColumns([
    { type: 'divider' },
    { content: 'TEST 选择成绩', type: 'text' },
    ...[1, 5, 10, 20].map((e) => {
      return {
        accelerator: e,
        config: { align: 'center', width: 6 },
        content: `${e}着`,
        type: 'button',
      };
    }),
  ]);
  let tmp = await era.input();
  contestants.forEach(({ index_chara: id }) => {
    race_rank[id] = tmp;
    aim_race_dict[id] = sys_call_check(id, check_stages.aim_race, {
      edu_weeks: era.get(`cflag:${id}:育成回合计时`),
      race,
      rank: tmp,
    });
  });
  const cur_year = era.get('flag:当前年');
  era.drawLine();
  contestants.forEach(({ index_chara: id }) => {
    era.print([
      get_chara_talk(id).get_colored_name(),
      ' 取得了 ',
      info.get_colored_name(),
      ` 的 ${race_rank[id]} 着！`,
    ]);
    let rewards;
    let attr_change = new Array(5).fill(0);
    if (race_rank[id] === 1) {
      rewards = race_rewards[info.race_class][1];
      if (race === race_enum.begin_race) {
        attr_change = new Array(5).fill(3);
      }
    } else if (race_rank[id] <= 5) {
      rewards = race_rewards[info.race_class][5];
    } else if (race_rank[id] <= 10) {
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
    const tmp = sys_reg_race(id);
    tmp.curr.race = tmp.last.race = -1;
    tmp.curr.week = tmp.last.week = -1;
    const edu_weeks = era.get(`cflag:${id}:育成回合计时`);
    if (race_rank[id] === 1 || race !== race_enum.begin_race) {
      new RaceHistory(id).add_result(
        edu_weeks,
        new RaceHistory.RaceResult(
          pop_dict[id],
          race,
          race_rank[id],
          cur_chara.style,
          cur_year,
        ),
      );
    }
    sys_change_tired(id, 3);
    sys_call_check(id, check_stages.after_race, {
      aim_race: aim_race_dict[id] > 0,
      edu_weeks,
      pop: pop_dict[id],
      race,
      rank: race_rank[id],
      st: cur_chara.style,
    });
  });
  await era.waitAnyKey();
  time_cost = 0;
  while (end_count) {
    await era.clear();
    page_race_header(info);
    const player_time = era.get('base:0:精力');
    era.setHorizontalAlign('space-around');
    era.printInColRows(
      [{ type: 'divider' }, { content: '要祝贺/安慰谁？\n\n', type: 'text' }],
      ...contestants
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
                content: `${era.get(`callname:${id}:-2`)} (${race_rank[id]}着)`,
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
      await sys_call_edu_event(ret, event_hooks.race_end, {
        race,
        rank: race_rank[ret],
      });
      end_count--;
      race_end[ret] = true;
      sys_change_attr_and_print(0, '精力', -time_cost);
      time_cost += 100;
    }
  }
  era.drawLine();
  const best_rank = Math.min(...Object.values(race_rank)),
    mvp_id = Number(
      Object.entries(race_rank).filter((e) => e[1] === best_rank)[0][0],
    ),
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
  if (
    !mvp_id ||
    (is_pregnant_slave &&
      (!era.get(`cflag:${mvp_id}:父方角色`) ||
        !era.get(`cflag:${mvp_id}:母方角色`)))
  ) {
    fame_reward *= 2;
  }
  let hentai_flag = false;
  const pregnant_check =
    era.get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.embryo &&
    era.get('cflag:0:妊娠回合计时') === 0 &&
    new LifeEventMarks(0).sperm;
  contestants.forEach(({ index_chara: id }) => {
    const pregnant_stage = era.get(`cflag:${id}:妊娠阶段`);
    if (pregnant_stage >> pregnant_stage_enum.fetal > 0) {
      hentai_flag = true;
      fame_reward -= 150;
    }
    if (pregnant_stage >> pregnant_stage_enum.embryo > 0) {
      new_title_dict[id].push({ n: '亲子关系紧张', c: buff_colors[2] });
    }
    if (
      era.get(`cflag:${id}:腹中精液`) &&
      era.get(`cflag:${id}:子宫内精液`) &&
      era.get(`cflag:${id}:肠道内精液`)
    ) {
      new_title_dict[id].push({ n: '白浊浸染', c: buff_colors[2] });
    }
    if (Number(pregnant_check) === id) {
      new_title_dict[id].push({ n: '父亲力量', c: buff_colors[2] });
    }
  });
  if (
    (race === race_enum.kiku_sho ||
      race === race_enum.shuk_sho ||
      race === race_enum.japa_dir) &&
    best_rank === 1
  ) {
    let invincible_1 = true,
      invincible_2 = true,
      invincible_4 = true,
      cup_1 = 0,
      cup_2 = 0,
      cup_3 = 0;
    new RaceHistory(mvp_id).get_entries().forEach((e) => {
      if (e.rank === 1) {
        switch (e.race) {
          case race_enum.sats_sho:
            cup_1++;
            break;
          case race_enum.oka_sho:
            cup_1 += 2;
            break;
          case race_enum.hane_hai:
            cup_1 += 4;
            break;
          case race_enum.toky_yus:
            cup_2++;
            break;
          case race_enum.yush_him:
            cup_2 += 2;
            break;
          case race_enum.toky_der:
            cup_2 += 4;
            break;
          case race_enum.kiku_sho:
            cup_3++;
            break;
          case race_enum.shuk_sho:
            cup_3 += 2;
            break;
          case race_enum.japa_dir:
            cup_3 += 4;
        }
      } else {
        if (e.weeks < edu_weeks_kiku_sho) {
          invincible_1 = false;
        }
        if (e.weeks < edu_weeks_shuk_sho) {
          invincible_2 = false;
        }
        if (e.weeks < edu_weeks_japa_dir) {
          invincible_4 = false;
        }
      }
    });
    if (cup_1 & cup_2 & cup_3 & 0b1) {
      new_title_dict[mvp_id].push({ n: '三冠', c: buff_colors[1] });
      invincible_1 &&
        new_title_dict[mvp_id].push({ n: '无败三冠', c: buff_colors[1] });
    }
    if (cup_1 & cup_2 & cup_3 & 0b10) {
      new_title_dict[mvp_id].push({ n: '三宝冠', c: buff_colors[1] });
      invincible_2 &&
        new_title_dict[mvp_id].push({ n: '无败三宝冠', c: buff_colors[1] });
    }
    if (cup_1 & cup_2 & cup_3 & 0b100) {
      new_title_dict[mvp_id].push({ n: '泥地三冠', c: buff_colors[1] });
      invincible_4 &&
        new_title_dict[mvp_id].push({ n: '无败泥地三冠', c: buff_colors[1] });
    }
    if (
      (cup_1 & 0b11) > 0 &&
      (cup_2 & 0b11) > 0 &&
      (cup_3 & 0b11) > 0 &&
      (cup_1 & cup_2 & cup_3 & 0b11) === 0
    ) {
      new_title_dict[mvp_id].push({ n: '变则三冠', c: buff_colors[1] });
      if ((cup_3 & 1 && invincible_1) || (cup_3 & 2 && invincible_2)) {
        new_title_dict[mvp_id].push({ n: '无败变则三冠', c: buff_colors[1] });
      }
    }
    if ((cup_1 & cup_2 & cup_3 & 0b11) === 0b11) {
      new_title_dict[mvp_id].push({ n: '极限六冠', c: buff_colors[1] });
      if (invincible_1 && invincible_2) {
        new_title_dict[mvp_id].push({ n: '无败六冠', c: buff_colors[1] });
      }
    }
  }
  if (hentai_flag) {
    era.set('flag:变态行为', 1);
  }
  if (
    era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.fetal > 0 &&
    contestants.findIndex((uma) => uma.index_chara === 0) === -1
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
  const prize_ratio = 0.04 * get_trainer_level() + 0.04,
    total_prize = sys_change_money(
      contestants
        .map(({ index_chara: id }) => {
          if (race_rank[id] <= 5) {
            let prize = info.prize * RaceInfo.prize_ratios[race_rank[id] - 1];
            era.add(`cflag:${id}:总赏金`, prize);
            id && (prize *= prize_ratio);
            return prize;
          }
          return 0;
        })
        .reduce((p, c) => p + c),
    );
  if (fame_reward > 0) {
    sys_like_chara(302, 0, fame_reward / 5) && (await era.waitAnyKey());
  }
  if (best_rank <= 5) {
    sys_like_chara(301, 0, (6 - best_rank) * (5 - info.race_class)) &&
      (await era.waitAnyKey());
  }
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
  for (const { index_chara: id } of contestants) {
    if (race_rank[id] === 1) {
      sys_change_lust(id, lust_from_palam);
      sys_change_pressure(id, -2000);
    } else if (race_rank[id] <= 5) {
      sys_change_lust(id, lust_from_palam / 2);
      sys_change_pressure(id, -200 * (6 - race_rank[id]));
    } else if (race_rank[id] <= 10) {
      sys_change_pressure(id, 300 * race_rank[id]);
    }
    if (!id) {
      continue;
    }
    let relation_punish = 0;
    if (!race_start[id]) {
      relation_punish += RaceInfo.relation_rewards[1];
    }
    if (!race_end[id]) {
      if (race_rank[id] === 1) {
        relation_punish += RaceInfo.relation_rewards[0];
      } else if (race_rank[id] <= 5) {
        relation_punish += RaceInfo.relation_rewards[1];
      } else if (race_rank[id] <= 10) {
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
      await era.waitAnyKey();
    }
  }
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
  for (const { index_chara: id } of contestants) {
    sys_add_titles(id, ...new_title_dict[id]) && (await era.waitAnyKey());
  }
  era.drawLine();
  await era.printAndWait('回去了……');
  era.println();
  await sys_get_random_event(event_hooks.back_school)(event_hooks.race);
  era.set('flag:当前赛事', 0);
}

module.exports = race_page;
