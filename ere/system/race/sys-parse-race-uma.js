const era = require('#/era-electron');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');
const named_list = require('#/data/race/contestants/named.json');
const passer_by_list = require('#/data/race/contestants/unnamed.json');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');
const {
  max_extra_attr,
  mod_motivation_coefficients,
} = require('#/data/race/race-sim-const');
const {
  mod_acceleration_adapt_ground,
} = require('#/data/race/race-sim-const.js');
const { skill_sets, skills_dict } = require('#/data/race/skill/skill-const');
const { attr_enum } = require('#/data/train-const');

const passer_by_names = require('#/data/race/contestants/uma-mob.json').map(
  (e) => e['ChineseName'],
);

const named_level = [
    Math.min(...named_list.map((e) => e.level)),
    Math.max(...named_list.map((e) => e.level)),
  ],
  passer_by_level = [
    Math.min(...passer_by_list.map((e) => e.level)),
    Math.max(...passer_by_list.map((e) => e.level)),
  ];

/**
 * @param {number[]} adapts
 * @returns {number}
 */
function random_style(adapts) {
  const max_adapt = Math.max(...adapts);
  return Number(
    get_random_entry(
      Object.entries(adapts).filter((e) => e[1] === max_adapt),
    )[0],
  );
}

/**
 * @param {PseudoUma[]} team_chara
 * @param {number} race
 * @param {RaceInfo} info
 * @param {PseudoUma[]} [contestants]
 * @returns {PseudoUma[]}
 */
function sys_parse_for_race(team_chara, race, info, contestants) {
  const current = new Date().getTime();
  let ret = [...team_chara];
  info.has_legend = false;
  if (contestants) {
    ret.push(...contestants);
  } else {
    const legends = info.legends,
      edu_phase = Math.max(
        ...team_chara.map((e) =>
          e.index_chara === 0
            ? 144
            : era.get(`cflag:${e.index_chara}:育成回合计时`),
        ),
      ),
      named_difficulty = [
        named_level[0] +
          ((named_level[1] - named_level[0]) * (edu_phase - 24)) / (144 - 24) -
          1,
        0,
      ],
      passer_by_difficulty = [
        passer_by_level[0] +
          ((passer_by_level[1] - passer_by_level[0]) * (edu_phase - 24)) /
            (144 - 24) -
          1,
        0,
      ];
    info.extra_attr = Math.floor(
      (max_extra_attr * (144 - edu_phase)) / (144 - 24),
    );
    const contestant_dict = {};
    team_chara.forEach((e) => (contestant_dict[e.index_chara] = 1));
    contestant_dict[era.get('cflag:0:模版角色')] = 1;
    let legend_count = ((edu_phase - 24) * info.gates) / (144 - 24);
    switch (info.race_class) {
      case RaceInfo.class_enum.G1:
        legend_count = get_random_value(
          Math.floor(legend_count / 2),
          Math.floor(legend_count),
        );
        break;
      case RaceInfo.class_enum.G2:
        legend_count = get_random_value(
          Math.floor(legend_count / 4),
          Math.floor(legend_count / 2),
        );
        break;
      case RaceInfo.class_enum.G3:
        legend_count = get_random_value(
          Math.floor(legend_count / 8),
          Math.floor(legend_count / 4),
        );
        break;
      default:
        legend_count = 0;
    }

    team_chara.forEach(({ index_chara: id }) =>
      get_custom_mec(id)
        .get_race_contestants(info)
        .forEach((c) => {
          if (
            !contestant_dict[c.id] &&
            era.get(`cflag:${c.id}:招募状态`) !== recruit_flags.yes
          ) {
            const difficulty = named_difficulty[0] * c.buff,
              legends = named_list.filter((e) => e.id === c.id);
            if (legends.length > 0) {
              let i = 0,
                j = legends.length - 2;
              if (legends[0].level >= difficulty) {
                i = 0;
              } else if (legends[j + 1].level <= difficulty) {
                i = j + 1;
              } else {
                while (i < j - 1) {
                  const m = Math.floor((i + j) / 2);
                  if (
                    legends[m]?.level <= difficulty &&
                    legends[m + 1]?.level > difficulty
                  ) {
                    i = m;
                    break;
                  }
                  if (legends[m + 1]?.level <= difficulty) {
                    i = m;
                  } else {
                    j = m;
                  }
                }
              }
              contestant_dict[c.id] = 1;
              const uma = legends[i];
              ret.push(
                new PseudoUma(
                  uma.id,
                  era.get(`static:${uma.id}:name`),
                  get_chara_color(uma.id),
                  get_random_value(...uma.motivation),
                  uma.attrs,
                  random_style(uma.adapt_style),
                  uma.adapt_style,
                  uma.adapt_distance,
                  uma.adapt_ground,
                  skill_sets[uma.skills].map((s) => skills_dict[s]),
                ).set_legend(),
              );
              legend_count--;
            }
          }
        }),
    );

    if (legend_count > 0) {
      //接着填过往冠军幻影
      //当然排除掉玩家自己出赛的
      let legends_history;
      try {
        legends_history = require(
          `#/data/race/${Object.keys(RaceInfo.class_enum)[
            info.race_class
          ].toLowerCase()}/legends/${Object.keys(race_enum)[race].replace('_', '-')}`,
        );
      } catch (_) {
        legends_history = [];
      }
      const list_history = legends.filter(
        (e) =>
          !contestant_dict[e] &&
          era.get(`cflag:${e}:招募状态`) !== recruit_flags.yes,
      );
      // 先填史实冠军,史实冠军保证干劲非负
      gacha(
        list_history,
        Math.min(legend_count, info.gates - ret.length),
      ).forEach((id) => {
        //对应json中存在幻影数据则优先读取
        let uma = legends_history[id];
        if (uma) {
          ret.push(
            new PseudoUma(
              uma.id,
              uma.name,
              get_chara_color(uma.id),
              get_random_value(0, 2),
              uma.attrs,
              random_style(uma.adapt_style),
              uma.adapt_style,
              uma.adapt_distance,
              uma.adapt_ground,
              uma.skills.map((e) => skills_dict[e]),
            ).set_legend(),
          );
        } else {
          //对应json中不存在该幻影数据则从default读取
          uma = get_random_entry(
            named_list.filter(
              (e) =>
                e.id === id &&
                e.level >= named_difficulty - 200 &&
                e.level <= named_difficulty + 400,
            ),
          );
          if (uma) {
            ret.push(
              new PseudoUma(
                uma.id,
                era.get(`static:${uma.id}:name`),
                get_chara_color(uma.id),
                get_random_value(...uma.motivation),
                uma.attrs,
                random_style(uma.adapt_style),
                uma.adapt_style,
                uma.adapt_distance,
                uma.adapt_ground,
                skill_sets[uma.skills].map((s) => skills_dict[s]),
              ).set_legend(),
            );
          }
        }
        if (uma) {
          contestant_dict[id] = 1;
          legend_count--;
        }
      });
    }

    if (legend_count > 0) {
      // 史实冠军不够数那再从default里随机抽人
      for (let i = 0; i < named_list.length; ++i) {
        if (named_list[i].level > named_difficulty[0]) {
          named_difficulty[1] = named_list[i].level;
          named_difficulty[0] = named_list[i - 1]?.level || named_difficulty[1];
          break;
        }
      }
      gacha(
        Object.values(
          named_list
            .filter(
              (e) =>
                !contestant_dict[e.id] &&
                era.get(`cflag:${e.id}:招募状态`) !== recruit_flags.yes &&
                e.adapt_ground[info.ground] >= 5 &&
                e.adapt_distance[info.distance] >= 5 &&
                e.level >= named_difficulty[0] - 400 &&
                e.level <= named_difficulty[1] + 200,
            )
            .reduce((p, c) => {
              (p[c.id] || (p[c.id] = [])).push(c);
              return p;
            }, {}),
        ),
        Math.min(legend_count, info.gates - ret.length),
      ).forEach((e) => {
        const uma = get_random_entry(e);
        contestant_dict[uma.id] = 1;
        ret.push(
          new PseudoUma(
            uma.id,
            era.get(`static:${uma.id}:name`),
            get_chara_color(uma.id),
            get_random_value(...uma.motivation),
            uma.attrs,
            random_style(uma.adapt_style),
            uma.adapt_style,
            uma.adapt_distance,
            uma.adapt_ground,
            skill_sets[uma.skills].map((s) => skills_dict[s]),
          ).set_legend(),
        );
      });
    }

    if (ret.length < info.gates) {
      // 最后填路人幻影
      const names = sort_list(
        gacha(passer_by_names, info.gates - ret.length),
        Math.random,
      );
      for (let i = 0; i < passer_by_list.length; ++i) {
        if (passer_by_list[i].level > passer_by_difficulty[0]) {
          passer_by_difficulty[1] = passer_by_list[i].level;
          passer_by_difficulty[0] =
            passer_by_list[i - 1]?.level || passer_by_difficulty[1];
          break;
        }
      }
      let back_up_list = passer_by_list.filter(
        (e) =>
          e.adapt_ground[info.ground] >= 4 &&
          e.adapt_distance[info.distance] >= 4 &&
          e.level >= passer_by_difficulty[0] - 400 &&
          e.level <= passer_by_difficulty[1] + 200,
      );
      if (back_up_list.length < info.gates - ret.length) {
        back_up_list = [];
        for (
          let i = passer_by_list.length - 1;
          i >= 0 && back_up_list.length < info.gates - ret.length;
          --i
        ) {
          if (passer_by_list[i].level > passer_by_difficulty[1] + 200) {
            continue;
          }
          back_up_list.push(passer_by_list[i]);
        }
      }
      gacha(back_up_list, info.gates - ret.length).forEach((e, i) =>
        ret.push(
          new PseudoUma(
            -1 - i,
            names[i],
            get_chara_color(undefined),
            get_random_value(...e.motivation),
            e.attrs,
            random_style(e.adapt_style),
            e.adapt_style,
            e.adapt_distance,
            e.adapt_ground,
            skill_sets[e.skills].map((s) => skills_dict[s]),
          ),
        ),
      );
    }
  }

  if (ret.findIndex((e) => e.legend) !== -1) {
    info.has_legend = true;
  }
  const from_setting = era.get('flag:比赛难度');
  ret.slice(team_chara.length).forEach((uma) => {
    uma.index_chara > 0 &&
      (uma.chara = era.get(`staticcflag:${uma.index_chara}:气性`));
    from_setting &&
      (uma.attrs = uma.attrs.map((e) => (e * (100 + from_setting)) / 100));
  });

  let season;
  switch (era.get('flag:当前月')) {
    case 3:
      season = 1 + 4 * (era.get('flag:当前周') >= 3);
      break;
    case 4:
      season = 1 + 4 * (era.get('flag:当前周') <= 2);
      break;
    case 5:
      season = 1;
      break;
    case 6:
    case 7:
    case 8:
      season = 2;
      break;
    case 9:
    case 10:
    case 11:
      season = 3;
      break;
    case 12:
    case 1:
    case 2:
      season = 4;
      break;
  }
  const running_style_counts = [0, 0, 0, 0];
  ret.forEach((uma) => running_style_counts[uma.style]++);
  const is_dirt_grade = Number(
    info.ground === RaceInfo.ground_enum.dirt &&
      (info.track === RaceInfo.track_enum.ohi ||
        info.track === RaceInfo.track_enum.kawasaki ||
        info.track === RaceInfo.track_enum.funabashi ||
        info.track === RaceInfo.track_enum.morioka),
  );

  // 看台砍掉了：随机对面或者同侧
  // 比赛时间：随机白天或晚上
  const straight_front_type = (Math.random() < 0.5) + 1,
    day_time = 4 * (Math.random() < 0.5);
  ret.forEach((uma) => {
    uma.attrs = uma.attrs.map(Math.ceil);
    let motivation_coefficient = (mod_motivation_coefficients[uma.chara] ||
      mod_motivation_coefficients.default)[uma.motivation + 2];
    switch (uma.chara) {
      case -2:
        motivation_coefficient -= 0.01 * (info.gates >= 15);
        break;
      case 1:
        motivation_coefficient += 0.01;
        break;
      case 2:
        motivation_coefficient += info.has_legend * 0.01;
        break;
      case 3:
        motivation_coefficient +=
          info.has_legend * 0.02 - !info.has_legend * 0.01;
    }

    uma.race.conditionParams.always = 1;
    uma.race.conditionParams.base_speed =
      uma.attrs[attr_enum.speed] * motivation_coefficient;
    uma.race.conditionParams.base_stamina =
      uma.attrs[attr_enum.endurance] * motivation_coefficient;
    uma.race.conditionParams.base_power =
      uma.attrs[attr_enum.strength] * motivation_coefficient;
    uma.race.conditionParams.base_wiz =
      uma.attrs[attr_enum.intelligence] * motivation_coefficient;
    uma.race.conditionParams.course_distance = info.span;
    uma.race.conditionParams.distance_type = info.distance + 1;
    uma.race.conditionParams.grade =
      (info.race_class === RaceInfo.class_enum.G1) * 100;
    uma.race.conditionParams.ground_condition = info.mess + 1;
    uma.race.conditionParams.ground_type = info.ground + 1;
    uma.race.conditionParams.is_basis_distance = info.span400;
    // 横向距离砍掉了：固定外道超人
    uma.race.conditionParams.is_behind_in = 1;
    uma.race.conditionParams.is_dirtgrade = is_dirt_grade;
    // 横向距离砍掉了：移动方向随机
    uma.race.conditionParams.is_move_lane = get_random_value(0, 2);
    // 横向距离砍掉了：固定内道
    uma.race.conditionParams.lane_type = 0;
    uma.race.conditionParams.motivation = uma.motivation + 3;
    uma.race.conditionParams.random_lot = get_random_value(0, 99);
    uma.race.conditionParams.rotation = info.rotation + 1;
    uma.race.conditionParams.running_style = uma.style + 1;
    uma.race.conditionParams.running_style_count_nige_otherself =
      running_style_counts[0] - (uma.style === 0);
    uma.race.conditionParams.running_style_count_senko_otherself =
      running_style_counts[1] - (uma.style === 1);
    uma.race.conditionParams.running_style_count_sashi_otherself =
      running_style_counts[2] - (uma.style === 2);
    uma.race.conditionParams.running_style_count_oikomi_otherself =
      running_style_counts[3] - (uma.style === 3);
    uma.race.conditionParams.running_style_count_same =
      running_style_counts[uma.style];
    uma.race.conditionParams.running_style_count_same_rate =
      (uma.race.conditionParams.running_style_count_same * 100) / ret.length;
    uma.race.conditionParams.straight_front_type = straight_front_type;
    uma.race.conditionParams.season = season;
    uma.race.conditionParams.time = day_time;
    uma.race.conditionParams.track_id = info.track;
    uma.race.conditionParams.weather = info.weather + 1;
  });

  ret = sort_list(ret, Math.random);
  const average_intelligence =
      ret.reduce((p, c) => p + c.attrs[attr_enum.intelligence], 0) / ret.length,
    average_toughness =
      ret.reduce((p, c) => p + c.attrs[attr_enum.toughness], 0) / ret.length,
    err_intelligence =
      Math.sqrt(
        ret.reduce(
          (p, c) =>
            p +
            (c.attrs[attr_enum.intelligence] - average_intelligence) *
              (c.attrs[attr_enum.intelligence] - average_intelligence),
          0,
        ) / ret.length,
      ) + 0.0000000001,
    err_toughness =
      Math.sqrt(
        ret.reduce(
          (p, c) =>
            p +
            (c.attrs[attr_enum.toughness] - average_toughness) *
              (c.attrs[attr_enum.toughness] - average_toughness),
          0,
        ) / ret.length,
      ) + 0.0000000001;
  ret.forEach((uma, i) => {
    uma.index_race = i;
    uma.race.conditionParams.post_number = i + 1;
    uma.adapts.ground = uma.adapt_ground_list[info.ground];
    uma.adapts.distance = uma.adapt_distance_list[info.distance];
    const cof_dis = mod_acceleration_adapt_ground[uma.adapts.distance],
      cof_ground = mod_acceleration_adapt_ground[uma.adapts.ground],
      cof_motivation = (mod_motivation_coefficients[uma.chara] ||
        mod_motivation_coefficients.default)[uma.motivation + 2],
      delta_intelligence =
        ((uma.attrs[attr_enum.intelligence] - average_intelligence) * 10) /
          err_intelligence +
        50,
      delta_toughness =
        ((uma.attrs[attr_enum.toughness] - average_toughness) * 10) /
          err_toughness +
        50;
    uma.tempPop = [
      uma.attrs[attr_enum.speed],
      uma.attrs[attr_enum.endurance],
      uma.attrs[attr_enum.strength],
    ];
    uma.list_skill
      .filter(
        (skill) =>
          (skill.data.ability_times[0] >= 0 &&
            skill.data.ability_times[1] >= 0) ||
          (skill.data.ability_times[0] <= 0 &&
            skill.data.preconditions[0](uma.race.conditionParams) &&
            skill.data.conditions[0](uma.race.conditionParams)) ||
          (skill.data.ability_times[1] <= 0 &&
            skill.data.preconditions[1](uma.race.conditionParams) &&
            skill.data.conditions[1](uma.race.conditionParams)),
      )
      .forEach((skill) => {
        for (let i = 0; i < skill.data.pop_types.length; ++i) {
          if (skill.data.pop_types[i]) {
            if (skill.data.is_random) {
              uma.tempPop[skill.data.pop_types[i] - 1] +=
                uma.attrs[attr_enum.intelligence] < 56.25
                  ? 0.2
                  : skill.data.pop_values[i] *
                    (1 - 45 / uma.attrs[attr_enum.intelligence]);
            } else {
              uma.tempPop[skill.data.pop_types[i] - 1] +=
                skill.data.pop_values[i];
            }
          }
        }
      });
    uma.tempPop[0] *= cof_dis * cof_motivation * Math.sqrt(delta_toughness);
    uma.tempPop[1] *=
      cof_motivation *
      Math.pow(delta_toughness, 0.8) *
      Math.pow(delta_intelligence, 0.6);
    uma.tempPop[2] *=
      cof_dis * cof_ground * cof_motivation * Math.sqrt(delta_intelligence);
  });
  const average_pop = new Array(3)
      .fill(0)
      .map((_, i) => ret.reduce((p, c) => p + c.tempPop[i], 0) / ret.length),
    err_pop = new Array(3)
      .fill(0)
      .map((_, i) =>
        Math.sqrt(
          ret.reduce(
            (p, c) =>
              p +
              (c.tempPop[i] - average_pop[i]) * (c.tempPop[i] - average_pop[i]),
            0,
          ) /
            ret.length +
            0.0000000001,
        ),
      );
  ret.forEach((uma) => {
    new Array(3).fill(0).forEach((_, i) => {
      uma.tempPop[i] =
        ((uma.tempPop[i] - average_pop[i]) * 10) / err_pop[i] + 50;
    });
    uma.pop[0] = 0;
  });
  new Array(3).fill(0).forEach((_, i) => {
    sort_list(ret, (uma) => uma.tempPop[i]).forEach((uma, rank) => {
      uma.pop[i + 1] = rank < 5 ? rank + 1 : 0;
      if (rank < 5) {
        uma.tempPop[i] =
          uma.tempPop[i] < 54
            ? Math.min(uma.tempPop[i] + 4, 54)
            : uma.tempPop[i];
      }
      if (uma.tempPop[i] > 70) {
        uma.tempPop[i] =
          55 + (uma.tempPop[i] - 55) / 1000 + (uma.tempPop[i] - 55) * 1.5;
      } else if (uma.tempPop[i] > 55) {
        uma.tempPop[i] = 55 + (uma.tempPop[i] - 55) / 1000;
      }
      if (uma.tempPop[i] > 19.53) {
        uma.pop[0] +=
          (uma.tempPop[i] - 15) * (Math.log(uma.tempPop[i] - 15) - 1.938) +
          1.938;
      }
    });
  });
  sort_list(ret, (uma) => uma.pop[0]).forEach((uma, rank, list) => {
    uma.pop[0] = rank + 1;
    uma.race.conditionParams.popularity = rank + 1;
    uma.race.conditionParams.running_style_equal_popularity_one = Number(
      uma.style === list[0].style,
    );
    delete uma.tempPop;
  });
  era.logger.debug(
    `解析选手数据并生成人气数据：${new Date().getTime() - current} ms`,
  );
  return ret;
}

module.exports = sys_parse_for_race;
