const era = require('#/era-electron');

const { reset_running_style } = require('#/system/race/snippets');
const { get_image } = require('#/system/sys-calc-image');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { calc_attr_score } = require('#/data/calc-attr-score');
const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_chara_rank } = require('#/data/info-generator');
const race2legends = require('#/data/race/contestants/legends');
/** @type {UmaTemplate[]} */
const legends_list = require('#/data/race/contestants/legends.json');
/** @type {UmaTemplate[]} */
const named_list = require('#/data/race/contestants/named.json');
/** @type {UmaTemplate[]} */
const passer_by_list = require('#/data/race/contestants/unnamed.json');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceInfo = require('#/data/race/model/race-info');
const { race_difficulty } = require('#/data/race/race-const');
const {
  max_extra_attr,
  mod_acceleration_adapt_distance,
  mod_motivation_coefficients,
} = require('#/data/race/race-sim-const');
const { mod_acceleration_adapt_ground } = require('#/data/race/race-sim-const');
const { skill_sets, skills_dict } = require('#/data/race/skill/skill-const');
const { attr_enum } = require('#/data/train-const');

const { __, i18n } = require('#/i18n/selector');

const named_level = [named_list[0].level, named_list.at(-1).level];
const passer_by_level = [passer_by_list[0].level, passer_by_list.at(-1).level];

/**
 * @typedef UmaTemplate
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} level
 * @property {[number,number,number,number,number]} attrs
 * @property {[number,number]} adapt_ground
 * @property {[number,number,number,number]} adapt_distance
 * @property {[number,number,number,number]} adapt_style
 * @property {[number,number]} motivation
 * @property {number} skills
 * @property {string} [dress]
 * @property {string} [image]
 */

/**
 * @param {UmaTemplate} t
 * @param {number} difficulty
 * @param {number} cid
 * @param {string} cname
 * @param {number} set
 * @param {boolean} random
 * @returns {PseudoUma}
 */
function get_pseudo_from_template(
  t,
  difficulty,
  cid = t.id,
  cname = t.name,
  set = t.skills,
  random = false,
) {
  const ret = new PseudoUma(
    cid,
    cname,
    get_chara_color(cid > 0 ? cid : void 0),
    get_random_value(...t.motivation),
    t.attrs,
    random_style(t.adapt_style, random),
    t.adapt_style,
    t.adapt_distance,
    t.adapt_ground,
    skill_sets[set].map((s) => skills_dict[s]),
  );
  if (!random) {
    ret.set_legend(t.level, difficulty);
  }
  if (t.dress !== void 0) {
    // CSTRNAME:10 = 头像
    ret.set_image(`${era.get(`staticcstr:${t.id}:10`)}${t.dress}_半身`);
  }
  return ret;
}

/**
 * @param {UmaTemplate[]} legends
 * @param {number} difficulty
 * @returns {UmaTemplate}
 */
function select_data_from_contestants(legends, difficulty) {
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
          i = m + 1;
          break;
        }
        if (legends[m + 1]?.level <= difficulty) {
          i = m;
        } else {
          j = m;
        }
      }
    }
    return legends[i];
  }
  return undefined;
}

/**
 * @param {number[]} adapts
 * @param {boolean} random
 * @returns {number}
 */
function random_style(adapts, random = false) {
  if (Math.random() < 0.2 && random) {
    return get_random_value(0, 3);
  }
  const max_adapt = Math.max(...adapts);
  return +get_random_entry(
    adapts.map((e, i) => [e, i]).filter((e) => e[0] === max_adapt),
  )[1];
}

/**
 * @param {PseudoUma[]} team_chara
 * @param {number} race
 * @param {RaceInfo} info
 * @param {(PseudoUma|LegendUmaSelector|LegendUmaFilter)[]} [contestants]
 * @returns {PseudoUma[]}
 */
function sys_parse_for_race(team_chara, race, info, contestants) {
  const current = new Date().getTime();
  let ret = [...team_chara];
  let unnamed_index = -1;
  info.has_legend = false;
  const edu_phase = Math.max(
    ...team_chara.map(({ index_chara: cid }) =>
      // CFLAGNAME:48 = 育成回合计时
      cid === 0 ? 144 : era.get(`cflag:${cid}:48`) + 1,
    ),
  );
  // FLAGNAME:102 = 比赛难度
  const race_setting = era.get('flag:102');
  const passer_by_upper = Math.max(
    (passer_by_level[1] * (100 + race_setting)) / (100 + race_difficulty.hard),
    passer_by_level[0],
  );
  const passer_by_difficulty =
    passer_by_level[0] +
    ((passer_by_upper - passer_by_level[0]) * (edu_phase - 24)) / (144 - 24);
  const named_upper = Math.max(
    (named_level[1] * (100 + race_setting)) / (100 + race_difficulty.hard),
    named_level[0],
  );
  const named_difficulty =
    named_level[0] +
    ((named_upper - named_level[0]) * (edu_phase - 24)) / (144 - 24);
  if (Array.isArray(contestants)) {
    contestants.forEach((c) => {
      if (c instanceof PseudoUma) {
        ret.push(c);
      } else {
        const difficulty = named_difficulty * c.buff;
        if (c instanceof LegendUmaSelector) {
          const uma = select_data_from_contestants(
            named_list.filter((e) => e.id === c.id),
            difficulty,
          );
          if (uma) {
            ret.push(
              get_pseudo_from_template(
                uma,
                difficulty,
                uma.id,
                i18n().name[era.get(`static:${uma.id}:name`)],
              ),
            );
          }
        } else if (c instanceof LegendUmaFilter) {
          const uma = select_data_from_contestants(
            passer_by_list.filter(c.filter),
            difficulty,
          );
          if (uma) {
            ret.push(
              get_pseudo_from_template(
                uma,
                difficulty,
                unnamed_index--,
                c.name,
                c.skills || uma.skills,
              ).set_image(c.image),
            );
          }
        }
      }
    });
  } else {
    const legends = info.legends;
    info.extra_attr = (max_extra_attr * (144 - edu_phase)) / (144 - 24);
    const contestant_dict = {};
    team_chara.forEach((e) => (contestant_dict[e.index_chara] = 1));
    // CFLAGNAME:90 = 模版角色
    contestant_dict[era.get('cflag:0:90')] = 1;
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

    team_chara.forEach(({ index_chara: cid }) =>
      get_custom_mec(cid)
        .get_race_contestants(info)
        .forEach((c) => {
          const difficulty = named_difficulty * c.buff;
          if (c instanceof LegendUmaSelector) {
            if (
              !contestant_dict[c.id] &&
              // CFLAGNAME:66 = 招募状态
              era.get(`cflag:${c.id}:66`) !== recruit_flags.yes
            ) {
              const uma = select_data_from_contestants(
                named_list.filter((e) => e.id === c.id),
                difficulty,
              );
              if (uma) {
                contestant_dict[c.id] = 1;
                ret.push(
                  get_pseudo_from_template(
                    uma,
                    difficulty,
                    uma.id,
                    i18n().name[era.get(`static:${uma.id}:name`)],
                  ).set_legend(uma.level, difficulty),
                );
                legend_count--;
              }
            }
          } else if (c instanceof LegendUmaFilter) {
            const uma = select_data_from_contestants(
              passer_by_list.filter(c.filter),
              difficulty,
            );
            if (uma) {
              ret.push(
                get_pseudo_from_template(
                  uma,
                  difficulty,
                  unnamed_index--,
                  c.name,
                  c.skills || uma.skills,
                ).set_image(c.image),
              );
              legend_count--;
            }
          }
        }),
    );

    if (
      legend_count > 0 &&
      edu_phase === 144 &&
      info.race_class === RaceInfo.class_enum.G1 &&
      race_setting > 0
    ) {
      const legend = get_random_entry(
        legends_list.filter(
          (e) =>
            e.adapt_ground[info.ground] >= 4 &&
            e.adapt_distance[info.distance] >= 4,
        ),
      );
      if (legend) {
        legend_count--;
        const p = get_pseudo_from_template(
          legend,
          0,
          legend.id,
          __(`name.${legend.name}`, legend.name),
        ).set_image(legend.image);
        p.legend = 2;
        ret.push(p);
      }
    }

    if (legend_count > 0) {
      //接着填过往冠军幻影
      //当然排除掉玩家自己出赛的
      const legends_history = race2legends[race] || {};
      const list_history = legends.filter(
        (e) =>
          // CFLAGNAME:66 = 招募状态
          !contestant_dict[e] && era.get(`cflag:${e}:66`) !== recruit_flags.yes,
      );
      // 先填史实冠军,史实冠军保证干劲非负
      gacha(
        list_history,
        Math.min(legend_count, info.gates - ret.length),
      ).forEach((cid) => {
        //对应json中存在幻影数据则优先读取
        let uma = legends_history[cid];
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
            ).set_legend(uma.level, named_difficulty),
          );
        } else {
          //对应json中不存在该幻影数据则从default读取
          uma = get_random_entry(
            named_list.filter(
              (e) => e.id === cid && e.level <= named_difficulty + 400,
            ),
          );
          if (uma !== undefined) {
            ret.push(
              get_pseudo_from_template(
                uma,
                named_difficulty,
                uma.id,
                i18n().name[era.get(`static:${uma.id}:name`)],
              ),
            );
          }
        }
        if (uma) {
          contestant_dict[cid] = 1;
          legend_count--;
        }
      });
    }

    if (legend_count > 0) {
      // 史实冠军不够数那再从default里随机抽人
      gacha(
        Object.values(
          named_list
            .filter(
              (e) =>
                !contestant_dict[e.id] &&
                // CFLAGNAME:66 = 招募状态
                era.get(`cflag:${e.id}:66`) !== recruit_flags.yes &&
                e.adapt_ground[info.ground] >= 5 &&
                e.adapt_distance[info.distance] >= 5 &&
                e.level <= named_difficulty + 200,
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
          get_pseudo_from_template(
            uma,
            named_difficulty,
            uma.id,
            i18n().name[era.get(`static:${uma.id}:name`)],
          ),
        );
      });
    }

    if (ret.length < info.gates) {
      // 最后填路人幻影
      const names = sort_list(
        gacha(i18n().mob, info.gates - ret.length),
        Math.random,
      );
      const last = info.gates - ret.length;
      let back_up_list = passer_by_list.filter(
        (e) =>
          e.adapt_ground[info.ground] >= 4 &&
          e.adapt_distance[info.distance] >= 4 &&
          e.level <= passer_by_difficulty &&
          e.level >= passer_by_difficulty - 400,
      );
      if (back_up_list.length > last) {
        back_up_list = gacha(back_up_list, last);
      } else if (back_up_list.length < last) {
        back_up_list = passer_by_list.filter(
          (e) =>
            e.adapt_ground[info.ground] >= 4 &&
            e.adapt_distance[info.distance] >= 4 &&
            e.level <= passer_by_difficulty,
        );
        if (back_up_list.length > last) {
          back_up_list = back_up_list.slice(back_up_list.length - last);
        } else if (back_up_list.length < last) {
          back_up_list = passer_by_list
            .filter(
              (u) =>
                u.adapt_ground[info.ground] >= 4 &&
                u.adapt_distance[info.distance] >= 4,
            )
            .slice(0, last);
        }
      }
      ret.push(
        ...back_up_list.map((u, i) =>
          get_pseudo_from_template(
            u,
            passer_by_difficulty,
            unnamed_index--,
            names[i],
            u.skills,
            true,
          ),
        ),
      );
    }
  }

  if (ret.some((e) => e.legend > 0)) {
    info.has_legend = true;
  }
  ret.forEach((uma) => {
    if (uma.index_chara >= 0 && !uma.image) {
      uma.set_image(
        get_image(uma.index_chara)
          .map((_i) =>
            // FLAGNAME:63 = 立绘类型
            era.get('flag:63') === 2 ? `${_i}_gif\t${_i}_半身` : `${_i}_半身`,
          )
          .join('\t'),
      );
    }
  });
  ret.slice(team_chara.length).forEach((uma) => {
    if (uma.index_chara >= 0) {
      // CFLAGNAME:2 = 气性
      uma.chara = era.get(`staticcflag:${uma.index_chara}:2`);
    }
  });

  let season;
  // FLAGNAME:2 - 3 = 当前月 - 当前周
  switch (era.get('flag:2')) {
    case 3:
      season = 1 + 4 * (era.get('flag:3') >= 3);
      break;
    case 4:
      season = 1 + 4 * (era.get('flag:3') <= 2);
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
  const straight_front_type = (Math.random() < 0.5) + 1,
    corner_count = info.lanes.filter((e) => e.is_curve).length;
  ret.forEach((uma) => {
    uma.attrs = uma.attrs.map(Math.ceil);
    uma.score_rank = get_chara_rank(
      uma.attrs.reduce((p, c) => p + calc_attr_score(c), 0) +
        uma.list_skill.reduce((p, c) => p + c.data.grade_value, 0),
    );

    uma.race.conditionParams.always = 1;
    uma.race.conditionParams.base_speed = uma.attrs[attr_enum.speed];
    uma.race.conditionParams.base_stamina = uma.attrs[attr_enum.endurance];
    uma.race.conditionParams.base_power = uma.attrs[attr_enum.strength];
    uma.race.conditionParams.base_guts = uma.attrs[attr_enum.toughness];
    uma.race.conditionParams.base_wiz = uma.attrs[attr_enum.intelligence];
    uma.race.conditionParams.corner_count = corner_count;
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
    uma.race.conditionParams.random_lot_shared = get_random_value(1, 100);
    uma.race.conditionParams.rotation = info.rotation + 1;
    reset_running_style(uma, running_style_counts, ret.length);
    uma.race.conditionParams.straight_front_type = straight_front_type;
    uma.race.conditionParams.season = season;
    uma.race.conditionParams.time = info.daytime;
    uma.race.conditionParams.track_id = info.track;
    uma.race.conditionParams.is_tight_track =
      info.track === 10001 ||
      info.track === 10002 ||
      info.track === 10004 ||
      info.track === 10010 ||
      info.track === 10103 ||
      info.track === 10104;
    uma.race.conditionParams.weather = info.weather + 1;
    uma.race.conditionParams.succession_skill_count = uma.list_skill.filter(
      (s) => s.data.is_generated,
    ).length;
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
    uma.adapts.ground = Math.max(
      Math.min(
        uma.adapt_ground_list[info.ground],
        mod_acceleration_adapt_ground.length - 1,
      ),
      0,
    );
    uma.adapts.distance = Math.max(
      Math.min(
        uma.adapt_distance_list[info.distance],
        mod_acceleration_adapt_distance.length - 1,
      ),
      0,
    );
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
          if (skill.data.pop_types[i] > 0) {
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
    uma.race.conditionParams.popularity = uma.pop[0] = rank + 1;
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
