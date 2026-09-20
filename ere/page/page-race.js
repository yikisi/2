const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_change_tired = require('#/system/chara/sys-change-tired');
const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const get_status = require('#/system/chara/sys-get-status');
const global_achievement = require('#/system/global/sys-calc-achievement');
const sys_check_titles_after_race = require('#/system/race/sys-check-titles-after-race');
const sys_parse_for_race = require('#/system/race/sys-parse-race-uma');
const sys_prepare_race = require('#/system/race/sys-prepare-race');
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

const check_race_events = require('#/page/race/check-race-events');
const fill_race_weather_and_mess = require('#/page/race/fill-race-weather-and-mess');
const { get_track_full_name } = require('#/page/race/get-track-name');
const page_race_result = require('#/page/race/page-race-result');
const preview_race = require('#/page/race/preview-race');
const select_contestants = require('#/page/race/select-contestants');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_edu } = require('#/event/edu/edu-factory');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const {
  adaptability_colors,
  attr_bg_colors,
  money_color,
} = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const event_hooks = require('#/data/event/event-hooks');
const AfterRaceParams = require('#/data/event/extra-flag/after-race-params');
const RaceEndParams = require('#/data/event/extra-flag/race-end-params');
const RaceStartParams = require('#/data/event/extra-flag/race-start-params');
const grand_lives = require('#/data/event/grand-lives');
const HelloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-308');
const { get_trainer_level } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const {
  race_enum,
  race_infos,
  race_rewards,
} = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {RaceInfo} _info
 * @param {boolean} is_grand_live
 */
function page_race_header(_info, is_grand_live) {
  const tp = era.get('base:0:1');
  const maxtp = era.get('maxbase:0:1');
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
            is_grand_live ? ' ' + i18n().ui_grand_live_mark : '',
          ],
          type: 'text',
        },
        {
          config: {
            fontWeight: 'bold',
            width: 8,
          },
          content: get_track_full_name(_info.track),
          type: 'text',
        },
      ],
      config: { verticalAlign: 'middle' },
    },
    {
      columns: [
        {
          config: { align: 'center', width: 4 },
          content: i18n().get_ui_race_your_tp(
            get_chara_talk(0).get_colored_name(),
          ),
          type: 'text',
        },
        {
          config: {
            color: attr_bg_colors.tp,
            height: 22,
            width: 8,
          },
          inContent: `${Math.floor(tp)}/${maxtp}`,
          percentage: (tp * 100) / maxtp,
          type: 'progress',
        },
        {
          config: { align: 'center', width: 12 },
          content: get_status(0, 19),
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
  const aim_dict = {};
  const team_list = (await select_contestants(race)).map(sys_get_chara_pseudo);
  const i_grand_live = grand_lives.check(race);
  let w_flag = false;
  const info = fill_race_weather_and_mess(race, team_list[0]);
  const contestants = sys_parse_for_race(team_list, race, info);
  team_list.forEach((uma) => {
    const id = uma.index_chara;
    const tired = era.get(`status:${id}:疲惫`);
    if (tired >= 5) {
      era.print(i18n().get_ui_too_tired(get_chara_talk(id).get_colored_name()));
      w_flag =
        sys_change_motivation(
          id,
          -get_random_value(0, Math.min(1 + Math.floor((tired - 5) / 2), 4)),
        ) || w_flag;
      uma.motivation = era.get(`cflag:${id}:干劲`);
    }
    if (
      id > 0 &&
      era.get(`cstr:${id}:决胜服`) === -1 &&
      race_infos[race].race_class <= RaceInfo.class_enum.G1 &&
      team_list.indexOf(uma) !== -1
    ) {
      era.set(`cstr:${id}:决胜服`, 0);
      uma.set_image(
        get_image(uma.index_chara)
          .map((_i) =>
            era.get('flag:立绘类型') === 2
              ? `${_i}_gif\t${_i}_半身`
              : `${_i}_半身`,
          )
          .join('\t'),
      );
    }
  });
  if (w_flag) {
    await era.waitAnyKey();
  }
  era.playMusic(
    [
      `音效_亮相圈_${i18n('zh-CN').race[info.id]}`,
      `音效_亮相圈_${
        info.race_class === RaceInfo.class_enum.G1
          ? 'g1'
          : info.race_class >= RaceInfo.class_enum['Pre-OP']
            ? '出道战'
            : '非g1'
      }`,
    ],
    { loop: true },
  );
  await preview_race(info, team_list, contestants, i_grand_live);
  const rs_dict = {};
  const re_dict = {};
  team_list.forEach((u) => {
    const cid = u.index_chara;
    if (cid) {
      rs_dict[cid] = re_dict[cid] = false;
    }
    aim_dict[cid] = get_custom_check(cid).is_aim_race(
      race,
      era.get(`cflag:${cid}:育成回合计时`),
    );
    u.adapts.style = u.adapt_style_list[u.style];
  });
  let rs_count = team_list.filter((e) => e.index_chara > 0).length;
  let re_count = rs_count;
  let t_cost = 0;
  if (rs_count === 0) {
    await era.clear();
  }
  while (rs_count > 0) {
    await era.clear();
    page_race_header(info, i_grand_live);
    const t_time = era.get('base:0:精力');
    era.setHorizontalAlign('space-around');
    era.printInColRows(
      [
        { type: 'divider' },
        { content: [i18n().ui_race_start_event, { isBr: 2 }], type: 'text' },
      ],
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
                  buttonType: (aim_dict[id] & 0b1) > 0 ? 'danger' : 'warning',
                  disabled: rs_dict[id] || t_time < t_cost,
                },
                content: uma.name,
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
      [
        {
          content: [i18n().ui_race_event_tip, { isBr: 2 }],
          type: 'text',
        },
        { content: i18n().ui_race_event_end, accelerator: 999, type: 'button' },
      ],
    );
    era.setHorizontalAlign('start');
    const ret = await era.input();
    if (ret === 999) {
      rs_count = 0;
    } else {
      era.drawLine();
      const uma = team_list.find((e) => e.index_chara === ret);
      await run_custom_edu(
        ret,
        event_hooks.race_start,
        new RaceStartParams(uma, contestants, race),
      );
      uma.motivation = era.get(`cflag:${ret}:干劲`);
      uma.race.conditionParams.motivation = uma.motivation + 3;
      rs_count--;
      rs_dict[ret] = true;
      sys_change_attr_and_print(0, attr_enum.tp, -(t_cost += 50));
    }
  }
  sys_prepare_race(contestants, team_list, info);
  era.stopMusic();
  await page_race_result(contestants, info, race);
  team_list.forEach(
    (uma) =>
      (aim_dict[uma.index_chara] = get_custom_check(
        uma.index_chara,
      ).is_aim_race(
        race,
        era.get(`cflag:${uma.index_chara}:育成回合计时`),
        uma.rank.curr,
      )),
  );
  const cur_year = era.get('flag:当前年');
  era.drawLine();
  sort_list(team_list, (e) => e.rank.curr, true).forEach((uma) => {
    const id = uma.index_chara;
    era.print(
      i18n().get_ui_race_result(
        get_chara_talk(id).get_colored_name(),
        info.get_colored_name(),
        i18n().race.result_template.replace('%RANK%', uma.rank.curr.toString()),
      ),
    );
    let rewards;
    let attr_change = new Array(5).fill(0);
    if (uma.rank.curr === 1) {
      rewards = race_rewards[info.race_class].r01;
      if (race === race_enum.begin_race) {
        attr_change = new Array(5).fill(3);
      }
    } else if (uma.rank.curr <= 5) {
      rewards = race_rewards[info.race_class].r05;
    } else if (uma.rank.curr <= 10) {
      rewards = race_rewards[info.race_class].r10;
    }
    if (rewards) {
      attr_change[get_random_value(0, 4)] += get_random_value(...rewards.attr);
      get_attr_and_print_in_event(
        id,
        attr_change,
        get_random_value(...rewards.pt),
        [-get_random_value(150, 250, true), -get_random_value(150, 250, true)],
      );
    } else {
      get_attr_and_print_in_event(id, void 0, 10);
      get_skills_and_print_in_event(id, [200302]) ||
        get_skills_and_print_in_event(id, [200301]);
    }
    era.println();
    const edu_weeks = era.get(`cflag:${id}:育成回合计时`);
    if (uma.rank.curr === 1 || race !== race_enum.begin_race) {
      RaceHistory.get(id).add_result(
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
        aim_dict[id] > 0,
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
  t_cost = 0;
  while (re_count > 0) {
    await era.clear();
    page_race_header(info, i_grand_live);
    const player_time = era.get('base:0:精力');
    era.setHorizontalAlign('space-around');
    era.printInColRows(
      [
        { type: 'divider' },
        { content: [i18n().ui_race_end_event, { isBr: 2 }], type: 'text' },
      ],
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
                  buttonType: (aim_dict[id] & 0b10) > 0 ? 'danger' : 'warning',
                  disabled: re_dict[id] || player_time < t_cost,
                },
                content: i18n()
                  .ui_race_event_chara_template.replace('%NAME%', uma.name)
                  .replace(
                    '%RANK%',
                    i18n().race.result_template.replace(
                      '%RANK%',
                      uma.rank.curr.toString(),
                    ),
                  ),
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
      [
        {
          content: [i18n().ui_race_event_tip, { isBr: 2 }],
          type: 'text',
        },
        { content: i18n().ui_race_event_end, accelerator: 999, type: 'button' },
      ],
    );
    era.setHorizontalAlign('start');
    const ret = await era.input();
    if (ret === 999) {
      re_count = 0;
    } else {
      era.drawLine();
      const uma = team_list.find((e) => e.index_chara === ret);
      await run_custom_edu(
        ret,
        event_hooks.race_end,
        new RaceEndParams(uma, contestants, race, uma.rank.curr),
      );
      re_count--;
      re_dict[ret] = true;
      sys_change_attr_and_print(0, attr_enum.tp, -(t_cost += 25));
    }
  }
  const best_rank = Math.min(...team_list.map((e) => e.rank.curr));
  const mvp_id = team_list.find((e) => e.rank.curr === best_rank).index_chara;
  const i_p_slave = era.get('flag:惩戒力度') === 3;
  const { hentai_count, new_title_dict } = sys_check_titles_after_race(
    team_list,
    race,
    best_rank,
    mvp_id,
  );
  await check_race_events(race, info, team_list);
  era.drawLine();
  let fame_reward;
  if (best_rank === 1) {
    fame_reward = race_rewards[info.race_class].r01.fame;
    if (contestants.some((e) => e.legend === 2)) {
      // PARAMNAME:20 - 22 = 粉 - 白
      for (let jid = 20; jid <= 22; ++jid) {
        era.add(`juel:0:${jid}`, 300 + 200 * (mvp_id === 0));
      }
    }
  } else if (best_rank <= 5) {
    fame_reward = race_rewards[info.race_class].r05.fame;
  } else if (best_rank <= 10) {
    fame_reward = race_rewards[info.race_class].r10.fame;
  } else {
    fame_reward = race_rewards[info.race_class].r20.fame;
  }
  if (i_grand_live > 0) {
    if (fame_reward > 0) {
      let times = 2;
      if (
        mvp_id === 308 ||
        era.get(`cflag:${mvp_id}:父方角色`) === 308 ||
        era.get(`cflag:${mvp_id}:母方角色`) === 308
      ) {
        times++;
      }
      if (new HelloLifeMarks().buff > 0) {
        times++;
      }
      fame_reward = Math.max(fame_reward) * times;
    } else {
      fame_reward = 0;
    }
  }
  if (
    !mvp_id ||
    (i_p_slave &&
      (!era.get(`cflag:${mvp_id}:父方角色`) ||
        !era.get(`cflag:${mvp_id}:母方角色`)))
  ) {
    fame_reward *= 2;
  }
  if (hentai_count > 0) {
    fame_reward -= hentai_count * 50 + 50;
  }
  let r_title_reward = 0;
  w_flag = false;
  for (const { index_chara: cid } of team_list) {
    const titles = CharaTitles.get(cid);
    const t_count = titles.count();
    w_flag = sys_add_titles(cid, ...new_title_dict[cid]) || w_flag;
    if (titles.count() > t_count) {
      titles
        .get()
        .slice(t_count)
        .forEach(({ c }) => {
          switch (c) {
            case adaptability_colors.at(-1):
            case adaptability_colors.at(-2):
              r_title_reward += 2;
              break;
            case adaptability_colors.at(-3):
              r_title_reward++;
          }
        });
    }
  }
  fame_reward += r_title_reward * 40;
  let t_hentai_flag = false;
  if (
    era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.late > 0 &&
    team_list.every((uma) => uma.index_chara > 0)
  ) {
    t_hentai_flag = true;
    fame_reward -= 50;
  }
  if (fame_reward !== 0 && (fame_reward > 0 || !i_p_slave)) {
    const delta = sys_change_fame(fame_reward);
    const you = get_chara_talk(0);
    if (fame_reward > 0) {
      await era.printAndWait(
        i18n().get_ui_race_honour_reward(you.get_colored_name(), {
          content: i18n().ui_increase,
          title: `+${delta.toString()}`,
        }),
      );
    } else if (!hentai_count && t_hentai_flag) {
      await era.printAndWait(
        i18n().get_ui_race_honour_pregnant_punish(you.get_colored_name(), {
          content: i18n().ui_decrease,
          title: delta.toString(),
        }),
      );
    } else if (hentai_count > 0) {
      await era.printAndWait(
        i18n().get_ui_race_honour_hentai_punish(you.get_colored_name(), {
          content: i18n().ui_decrease,
          title: delta.toString(),
        }),
      );
    } else {
      await era.printAndWait(
        i18n().get_ui_race_honour_lose_punish(you.get_colored_name(), {
          content: i18n().ui_decrease,
          title: delta.toString(),
        }),
      );
    }
  }
  fame_reward -= r_title_reward * 40;
  if (fame_reward > 0 || r_title_reward > 0) {
    w_flag =
      sys_like_chara(302, 0, fame_reward / 5 + r_title_reward * 12) || w_flag;
  }
  if (best_rank <= 5) {
    w_flag =
      sys_like_chara(
        301,
        0,
        (6 - best_rank) * (5 - info.race_class) + r_title_reward * 25,
      ) || w_flag;
    if (info.race_class <= RaceInfo.class_enum.G3) {
      w_flag =
        sys_like_chara(
          303,
          0,
          (6 - best_rank) * (3 - info.race_class) + r_title_reward * 30,
        ) || w_flag;
    }
    if (info.track >= RaceInfo.track_enum.longchamp) {
      w_flag =
        sys_like_chara(
          343,
          0,
          (race === race_enum.prix_lat ? 20 * (6 - best_rank) : 0) +
            fame_reward / 5 +
            r_title_reward * 5,
        ) || w_flag;
    }
  }
  if (i_grand_live) {
    w_flag =
      sys_like_chara(308, 0, 20 + (best_rank <= 5 ? fame_reward : 0)) || w_flag;
  }
  const prize_ratio = 0.04 * get_trainer_level() + 0.04 || 0.04;
  const total_prize = sys_change_money(
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
  if (total_prize > 0) {
    await era.printAndWait(
      i18n().get_ui_race_money_reward({
        content: total_prize.toLocaleString(),
        color: money_color,
      }),
    );
  }
  let b_flag = true;
  for (const uma of team_list) {
    const cid = uma.index_chara;
    const tmp = sys_reg_race(cid);
    tmp.curr.race = tmp.last.race = -1;
    tmp.curr.week = tmp.last.week = -1;
    let pressure_change;
    if (uma.rank.curr === 1) {
      sys_change_lust(cid, lust_from_palam);
      pressure_change = -2000;
    } else if (uma.rank.curr <= 5) {
      sys_change_lust(cid, lust_from_palam / 2);
      pressure_change = -200 * (6 - uma.rank.curr);
    } else {
      pressure_change = 300 * uma.rank.curr * (1 + 0.01 * (uma.chara === 1));
    }
    sys_change_pressure(cid, pressure_change);
    if (!cid) {
      continue;
    }
    let r_punish = 0;
    if (!rs_dict[cid]) {
      r_punish += RaceInfo.relation_rewards[1];
    }
    if (!re_dict[cid]) {
      if (uma.rank.curr === 1) {
        r_punish += RaceInfo.relation_rewards[0];
      } else if (uma.rank.curr <= 5) {
        r_punish += RaceInfo.relation_rewards[1];
      } else if (uma.rank.curr <= 10) {
        r_punish += RaceInfo.relation_rewards[2];
      } else {
        r_punish += RaceInfo.relation_rewards[3];
      }
    }
    if (r_punish > 0) {
      b_flag = false;
      era.print(
        (r_punish > RaceInfo.relation_rewards[2]
          ? i18n().get_ui_ignore_event_punish2
          : i18n().get_ui_ignore_event_punish)(
          get_chara_talk(cid).get_colored_name(),
          get_chara_talk(0).get_colored_name(),
        ),
      );
      sys_like_chara(cid, 0, -r_punish);
      w_flag = true;
    }
  }
  if (team_list.filter((u) => u.index_chara > 0).length >= 6 && b_flag) {
    global_achievement.blnc_rac = 1;
  }
  if (w_flag) {
    await era.waitAnyKey();
  }
  era.drawLine();
  await era.printAndWait(i18n().timon.it_back_office);
  era.println();
  await sys_get_random_event(event_hooks.back_school)();
  era.set('flag:当前赛事', 0);
}

module.exports = race_page;
