const { logger, printInColRows, replaceInColRows } = require('#/era-electron');

const sub_simulate_skill = require('#/system/race/sub-simulate-skill');

const { sort_list } = require('#/utils/list-utils');

const RaceInfo = require('#/data/race/model/race-info');
const { ability_type_enum } = require('#/data/race/model/uma-skill');
const {
  frame_rate,
  loc_mind_multiply_velocity_ideal,
  mod_stamina_cost_mess_dirt,
  mod_stamina_cost_mess_grass,
  race_de_acc,
  race_event_enum,
  start_acc,
  start_velocity,
} = require('#/data/race/race-sim-const');
const { attr_enum } = require('#/data/train-const');

const add_time = sub_simulate_skill.add_time;
const get_lane_name = sub_simulate_skill.get_lane_name;

/**
 * @param {PseudoUma} uma
 * @param {number} i
 * @param {PseudoUma[]} l
 * @returns {boolean}
 */
function check_nige_loc_mind_speed_up_mode(uma, i, l) {
  let temp;
  return (
    i === 0 &&
    (((temp = l.slice(1).find((e) => e.style === 0)) &&
      uma.race.location - temp.race.location <=
        uma.base.loc_mind_nige_diff_speed_up_nige) ||
      ((temp = l.slice(1).find((e) => e.style > 0)) &&
        uma.race.location - temp.race.location <=
          uma.base.loc_mind_nige_diff_speed_up_other))
  );
}

/**
 * @param {PseudoUma} uma
 * @param {number} i
 * @returns {boolean}
 */
function check_nige_loc_mind_over_take_mode(uma, i) {
  return (
    i > 0 &&
    uma.race.conditionParams.distance_diff_top <
      uma.base.loc_mind_nige_diff_over_take
  );
}

/**
 * @param {PseudoUma} uma
 * @param {number} i
 * @param {PseudoUma[]} l
 * @returns {boolean}
 */
function check_nige_loc_mind_ex_mode(uma, i, l) {
  return (
    l
      .slice(0, i)
      .findIndex(
        (e) =>
          e.style - e.race.conditionParams.is_used_skill_id >
          -uma.race.conditionParams.is_used_skill_id,
      ) !== -1
  );
}

/**
 * @param {PseudoUma[]} list_chara
 * @param {RaceInfo} race_info
 */
function sys_sim_race(list_chara, race_info) {
  const current = new Date().getTime(),
    count_uma = list_chara.length,
    mod_stamina_cost_mess =
      race_info.ground === RaceInfo.ground_enum.grass
        ? mod_stamina_cost_mess_grass[race_info.mess]
        : mod_stamina_cost_mess_dirt[race_info.mess],
    has_final_corner = race_info.lanes.find((e) => e.is_curve && e.is_last);
  let flag_race_phase = 0;
  printInColRows([
    { type: 'divider' },
    { content: '选手检查蹄铁……', type: 'text' },
  ]);

  const record_events_list = [
      new Array(count_uma).fill(undefined).map(() => []),
    ],
    record_location_list = [new Array(count_uma)],
    record_skill_list = [new Array(count_uma).fill(undefined).map(() => [])],
    record_speed_list = [new Array(count_uma).fill(0)],
    record_stamina_list = [new Array(count_uma)],
    start_delay = new Array(count_uma).fill(0);

  const lane = get_lane_name(race_info.lanes[0]),
    slope = race_info.slopes[0]?.start === 0 ? race_info.slopes[0].slope : 0,
    loc_mind_end = (race_info.span * 10) / 24;

  // 出闸
  list_chara.forEach((uma) => {
    record_stamina_list[0][uma.index_race] = uma.race.stamina;
    record_location_list[0][uma.index_race] = [0, lane, slope];

    start_delay[uma.index_race] =
      (Math.random() - 0.01 * (uma.chara === -2)) * 0.1;
    uma.list_skill = uma.list_skill.filter((s) => {
      if (s.data.ability_types[0][0] !== ability_type_enum.StartDash) {
        return true;
      }
      start_delay[uma.index_race] *= s.data.ability_values[0];
      record_skill_list[0][uma.index_race].push(s.data.id);
      uma.race.conditionParams.activate_count_all++;
      uma.race.conditionParams.activate_count_start++;
    });
    if (start_delay[uma.index_race] < 1 / frame_rate) {
      uma.race.acceleration = start_acc;
      record_speed_list[0][uma.index_race] = uma.race.velocityReal =
        start_velocity;
    }
    if (start_delay[uma.index_race] >= 0.08) {
      uma.race.conditionParams.is_badstart = 1;
      record_events_list[0][uma.index_race].push(race_event_enum.bad_start);
    } else {
      uma.race.conditionParams.is_badstart = 0;
    }
  });

  const list_finished = [];
  let flag_race = true,
    list_in_race = list_chara,
    timer = 0;

  while (flag_race) {
    timer = add_time(timer);
    record_events_list.push(new Array(count_uma).fill(undefined).map(() => []));
    record_location_list.push(new Array(count_uma));
    record_skill_list.push(new Array(count_uma).fill(undefined).map(() => []));
    record_speed_list.push(new Array(count_uma));
    record_stamina_list.push(new Array(count_uma));

    // 位置和速度结算
    list_in_race.forEach((uma) => {
      if (start_delay[uma.index_race] > 0) {
        if (start_delay[uma.index_race] < 1 / frame_rate) {
          uma.race.location +=
            start_velocity +
            uma.race.acceleration *
              (1 / frame_rate - start_delay[uma.index_race]);
          uma.race.staminaCost =
            ((20 / 144) *
              Math.pow(uma.race.location - uma.base.velocityIdeal + 12, 2) *
              mod_stamina_cost_mess) /
            frame_rate;
          uma.race.location /= frame_rate;
        }
        uma.race.velocityReal = uma.base.velocityMin;
        start_delay[uma.index_race] = 0;
      } else {
        const temp = uma.race.velocityReal;
        uma.race.velocityReal = Math.max(
          uma.race.velocityReal + uma.race.acceleration / frame_rate,
          uma.base.velocityMin,
        );
        uma.race.location += (uma.race.velocityReal + temp) / 30;
        uma.race.staminaCost =
          ((20 / 144) *
            Math.pow(uma.race.velocityReal - uma.base.velocityIdeal + 12, 2) *
            mod_stamina_cost_mess) /
          frame_rate;
      }
      const stamina_ratio = uma.race.stamina / uma.base.stamina;
      uma.race.strength = uma.attrs[attr_enum.strength];
      if (stamina_ratio < 0.2) {
        uma.race.strength /= 2;
      } else if (stamina_ratio < 0.5) {
        uma.race.strength *= 3 / 4;
      }

      record_speed_list.at(-1)[uma.index_race] = uma.race.velocityReal;
      record_stamina_list.at(-1)[uma.index_race] = uma.race.stamina;
    });

    list_in_race = sort_list(list_in_race, (uma) => uma.race.location).filter(
      (uma, i, l) => {
        uma.rank.last = uma.rank.curr;
        uma.rank.curr = list_finished.length + i + 1;
        uma.race.conditionParams.bashin_diff_infront =
          (i === 0 ? 50 : l[i - 1].race.location - uma.race.location) / 2.5;
        uma.race.conditionParams.blocked_front = Number(
          uma.race.conditionParams.bashin_diff_infront < 0.8,
        );
        if (i === 0 && uma.race.conditionParams.blocked_front) {
          throw new Error();
        }
        uma.race.conditionParams.bashin_diff_behind =
          (i === l.length - 1
            ? 50
            : uma.race.location - l[i + 1].race.location) / 2.5;
        uma.race.conditionParams.change_order_onetime =
          uma.rank.curr - uma.rank.last;
        if (uma.race.overtakeAim) {
          uma.race.overtakeAim.to_be_overtaken = false;
        }
        uma.race.overtakeAim = undefined;
        let j = i - 1;
        if (uma.race.conditionParams.bashin_diff_infront <= 0.8) {
          uma.race.overtakeAim = l[j];
        } else {
          while (
            j >= 0 &&
            l[j].race.location - uma.race.location < uma.race.visible_dis
          ) {
            if (
              l[j].race.velocityIdeal < uma.race.velocityIdeal &&
              l[j].race.velocityReal < uma.race.velocityReal &&
              (l[j].race.location - uma.race.location) /
                (l[j].race.velocityReal < uma.race.velocityReal) <
                15
            ) {
              uma.race.overtakeAim = l[j];
              break;
            }
            --j;
          }
        }
        if (uma.race.overtakeAim) {
          uma.race.overtakeAim.to_be_overtaken = true;
        }
        uma.race.overtakeAim = l[j];
        if (uma.race.location >= race_info.span) {
          list_finished.push(uma);
          record_events_list
            .at(-1)
            [uma.index_race].push(race_event_enum.finish);
          return false;
        }
        return true;
      },
    );

    list_finished.forEach((uma, i) => {
      record_location_list.at(-1)[uma.index_race] = [
        race_info.span + 1000 * (race_info.gates - i),
      ];
      record_speed_list.at(-1)[uma.index_race] = 0;
      record_stamina_list.at(-1)[uma.index_race] = uma.race.stamina;
    });

    if (!list_in_race.length) {
      flag_race = false;
      continue;
    }

    sub_simulate_skill(
      list_chara,
      list_in_race,
      list_finished,
      race_info,
      timer,
      has_final_corner,
      mod_stamina_cost_mess,
      record_events_list,
      record_location_list,
      record_skill_list,
    );

    if (
      list_in_race[0].race.conditionParams.distance_diff_rate >=
      20 * flag_race_phase
    ) {
      switch (flag_race_phase++) {
        case 0:
          replaceInColRows([
            { type: 'divider' },
            {
              content: '选手检查蹄铁……正在检查跑道……',
              type: 'text',
            },
          ]);
          break;
        case 1:
          replaceInColRows([
            { type: 'divider' },
            {
              content: '选手检查蹄铁……正在检查跑道……正在检查马闸……',
              type: 'text',
            },
          ]);
          break;
        case 2:
          replaceInColRows([
            { type: 'divider' },
            {
              content:
                '选手检查蹄铁……正在检查跑道……正在检查马闸……正在检查令枪……',
              type: 'text',
            },
          ]);
          break;
        case 3:
          replaceInColRows([
            { type: 'divider' },
            {
              content:
                '选手检查蹄铁……正在检查跑道……正在检查马闸……正在检查令枪……选手入闸……',
              type: 'text',
            },
          ]);
      }
    }

    list_in_race.forEach((uma, i, l) => {
      // 位置意识
      if (timer % 2 === 0 && uma.race.location < loc_mind_end) {
        const prob_check = Math.random() < uma.probs.loc_mind;
        if (uma.style === 0) {
          if (uma.race.loc_mind < 3 && check_nige_loc_mind_ex_mode(uma, i, l)) {
            uma.race.loc_mind = 3;
            record_events_list
              .at(-1)
              [uma.index_race].push(race_event_enum.loc_mind_nige_ex);
          } else {
            switch (uma.race.loc_mind) {
              case 0:
                if (prob_check) {
                  if (check_nige_loc_mind_speed_up_mode(uma, i, l)) {
                    uma.race.loc_mind = 1;
                    record_events_list
                      .at(-1)
                      [
                        uma.index_race
                      ].push(race_event_enum.loc_mind_nige_speed_up);
                  } else if (check_nige_loc_mind_over_take_mode(uma, i)) {
                    uma.race.loc_mind = 2;
                    record_events_list
                      .at(-1)
                      [
                        uma.index_race
                      ].push(race_event_enum.loc_mind_nige_over_take);
                  }
                }
                break;
              case 1:
                if (check_nige_loc_mind_over_take_mode(uma, i)) {
                  uma.race.loc_mind = 2;
                  record_events_list
                    .at(-1)
                    [
                      uma.index_race
                    ].push(race_event_enum.loc_mind_nige_over_take);
                } else if (!check_nige_loc_mind_speed_up_mode(uma, i, l)) {
                  uma.race.loc_mind = 0;
                }
                break;
              case 2:
                if (check_nige_loc_mind_speed_up_mode(uma, i, l)) {
                  uma.race.loc_mind = 1;
                  record_events_list
                    .at(-1)
                    [
                      uma.index_race
                    ].push(race_event_enum.loc_mind_nige_speed_up);
                } else if (!check_nige_loc_mind_over_take_mode(uma, i)) {
                  uma.race.loc_mind = 0;
                }
                break;
              case 3:
                if (!check_nige_loc_mind_ex_mode(uma, i, l)) {
                  uma.race.loc_mind = 0;
                }
            }
          }
        } else if (uma.race.loc_mind < 3 && l[0].style > uma.style) {
          uma.race.loc_mind = 3;
          record_events_list
            .at(-1)
            [uma.index_race].push(race_event_enum.loc_mind_other_ex);
        } else {
          switch (uma.race.loc_mind) {
            case 0:
              if (prob_check) {
                if (
                  uma.race.conditionParams.distance_diff_top >=
                  uma.base.loc_mind_other_diff_upper
                ) {
                  uma.race.loc_mind = 1;
                  record_events_list
                    .at(-1)
                    [uma.index_race].push(race_event_enum.loc_mind_other_quick);
                } else if (
                  uma.race.conditionParams.distance_diff_top <=
                    uma.base.loc_mind_other_diff_lower &&
                  uma.race.velocityIdealBuff === 0
                ) {
                  uma.race.loc_mind = 2;
                  record_events_list
                    .at(-1)
                    [uma.index_race].push(race_event_enum.loc_mind_other_relax);
                }
              }
              break;
            case 1:
              if (
                uma.race.conditionParams.distance_diff_top <=
                  uma.base.loc_mind_other_diff_lower &&
                uma.race.velocityIdealBuff === 0
              ) {
                uma.race.loc_mind = 2;
                record_events_list
                  .at(-1)
                  [uma.index_race].push(race_event_enum.loc_mind_other_relax);
              } else if (
                uma.race.conditionParams.distance_diff_top <=
                uma.base.loc_mind_other_diff_random[
                  uma.race.conditionParams.phase
                ]
              ) {
                uma.race.loc_mind = 0;
              }
              break;
            case 2:
              if (
                uma.race.conditionParams.distance_diff_top >=
                uma.base.loc_mind_other_diff_upper
              ) {
                uma.race.loc_mind = 1;
                record_events_list
                  .at(-1)
                  [uma.index_race].push(race_event_enum.loc_mind_other_quick);
              } else if (
                uma.race.velocityIdealBuff > 0 ||
                uma.race.conditionParams.distance_diff_top >=
                  uma.base.loc_mind_other_diff_random[
                    uma.race.conditionParams.phase
                  ]
              ) {
                uma.race.loc_mind = 0;
              }
              break;
            case 3:
              if (l[0].style <= uma.style) {
                uma.race.loc_mind = 0;
              }
          }
        }
        if (uma.race.temptation > 0) {
          uma.race.loc_mind = 1;
          uma.race.staminaCost *= 1.6;
        }
        if (uma.race.loc_mind === 2 && uma.style > 0) {
          uma.race.staminaCost *= 0.6;
        }
      } else {
        uma.race.loc_mind = 0;
      }
      // 阻挡
      if (
        uma.race.phase >= 1 &&
        uma.race.conditionParams.blocked_front &&
        Math.random() >=
          uma.race.strength / l[i - 1].race.strength + uma.race.lane_move_buff
      ) {
        uma.race.velocityReal = Math.max(
          Math.min(
            l[i - 1].race.velocityReal *
              (0.988 +
                (0.012 * uma.race.conditionParams.bashin_diff_infront) / 0.8),
            uma.race.velocityReal,
            30,
          ),
          uma.base.velocityMin,
        );
        record_events_list.at(-1)[uma.index_race].push(race_event_enum.blocked);
        uma.race.staminaCost *= 1.1;
      }
      uma.race.stamina = Math.min(
        Math.max(uma.race.stamina - uma.race.staminaCost, 0),
        uma.base.stamina,
      );
      if (uma.race.stamina === 0) {
        uma.race.velocityIdeal =
          uma.base.velocityMin + uma.race.velocityIdealBuff;
        uma.race.acceleration = race_de_acc[4];
      } else {
        uma.race.velocityIdeal += uma.race.velocityIdealBuff;
        if (uma.race.loc_mind > 0) {
          uma.race.velocityIdeal *=
            loc_mind_multiply_velocity_ideal[
              (uma.style > 0) * 3 + uma.race.loc_mind
            ];
        }
        uma.race.velocityIdeal = Math.max(
          Math.min(uma.race.velocityIdeal, 30),
          uma.base.velocityMin,
        );
        if (uma.race.velocityReal > uma.race.velocityIdeal) {
          if (uma.race.loc_mind === 2 && uma.style > 0) {
            uma.race.acceleration = race_de_acc[3];
          } else {
            uma.race.acceleration =
              race_de_acc[Math.min(uma.race.conditionParams.phase, 2)];
          }
        }
      }
      uma.race.acceleration += uma.race.accelerationBuff;
    });
  }
  list_finished.forEach((e, i) => {
    e.rank.last = e.rank.curr;
    e.rank.curr = i + 1;
  });
  const duration = new Date().getTime() - current;
  logger.debug(
    `比赛模拟：${duration} ms / ${Math.ceil(timer * frame_rate)} 帧，平均 ${(duration / (timer * frame_rate)).toFixed(4)} ms/帧`,
  );
  replaceInColRows([
    { type: 'divider' },
    {
      content:
        '选手检查蹄铁……正在检查跑道……正在检查马闸……正在检查令枪……选手入闸……开赛！',
      type: 'text',
    },
  ]);
  return {
    events: record_events_list,
    loc: record_location_list,
    skill: record_skill_list,
    speed: record_speed_list,
    stamina: record_stamina_list,
  };
}

module.exports = sys_sim_race;
