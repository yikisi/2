const era = require('#/era-electron');

const { gacha, get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const legends_default = require('#/data/race/legends-default.js');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');
const {
  mod_acceleration_adapt_ground,
} = require('#/data/race/race-const.json');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { attr_enum } = require('#/data/train-const');

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
 * @returns {PseudoUma[]}
 */
function sys_parse_for_race(team_chara, race, info) {
  const legends = info['legends'] || [],
    phantom_age = Math.floor(
      Math.max(
        ...team_chara.map((e) =>
          e.index_chara === 0
            ? 96
            : era.get(`cflag:${e.index_chara}:育成回合计时`),
        ),
      ) / 48,
    );
  let ret = [...team_chara],
    sp_command = false;

  //留个特殊指令呼叫隐藏对手的地方
  if (sp_command) {
    //
  }

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
    (e) => team_chara.findIndex((uma) => uma.index_chara === e) === -1,
  );
  //先填史实冠军
  //史实冠军保证干劲非负
  gacha(
    list_history,
    Math.min(info.legend_count, info.gates - ret.length),
  ).forEach((id) => {
    //对应json中存在幻影数据则优先读取
    let uma = legends_history.find((e) => e.id === id);
    if (uma) {
      ret.push(
        new PseudoUma(
          uma.id,
          uma.name,
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
      uma = legends_default.find((e) => e.id === id);
      ret.push(
        new PseudoUma(
          uma.id,
          uma.name,
          get_random_value(0, 2),
          uma.attrs[phantom_age],
          random_style(uma.adapt_style[phantom_age]),
          uma.adapt_style[phantom_age],
          uma.adapt_distance[phantom_age],
          uma.adapt_ground[phantom_age],
          uma.skills[phantom_age].map((e) => skills_dict[e]),
        ).set_legend(),
      );
    }
  });

  // 史实冠军不够数那再从default里随机抽人
  // 此时不再保证干劲非负
  gacha(
    legends_default.filter(
      (e) =>
        ret.findIndex((uma) => uma.index_chara === e.id) === -1 &&
        e.adapt_ground[phantom_age][info.ground] >= 6 &&
        e.adapt_distance[phantom_age][info.distance] >= 6,
    ),
    Math.min(
      info.legend_count - ret.length + team_chara.length,
      info.gates - ret.length,
    ),
  ).forEach((uma) => {
    ret.push(
      new PseudoUma(
        uma.id,
        uma.name,
        get_random_value(-2, 2),
        uma.attrs[phantom_age],
        random_style(uma.adapt_style[phantom_age]),
        uma.adapt_style[phantom_age],
        uma.adapt_distance[phantom_age],
        uma.adapt_ground[phantom_age],
        uma.skills[phantom_age].map((e) => skills_dict[e]),
      ).set_legend(),
    );
  });
  //最后填路人幻影
  gacha([], info.gates - ret.length);
  const date = era.get('flag:当前回合数'),
    ratio = 1 - ((date - 1) % 48) / 48;

  // 先随机化处理，等数据库完善后再改成真的
  ret
    .slice(team_chara.length)
    .forEach(
      (uma) =>
        (uma.attrs = uma.attrs.map(
          (e) => e - 400 * ratio + get_random_value(-50, 50),
        )),
    );
  const from_setting = era.get('flag:比赛难度');
  if (from_setting) {
    ret
      .slice(team_chara.length)
      .forEach(
        (uma) =>
          (uma.attrs = uma.attrs.map((e) => (e * (100 + from_setting)) / 100)),
      );
  }
  ret.forEach((uma) => (uma.attrs = uma.attrs.map(Math.ceil)));

  ret.forEach((uma) => {
    uma.list_skill = sort_list(uma.list_skill, (e) => e.data.id).filter(
      (v, i, a) =>
        i === a.findIndex((x) => x.data.group_id === v.data.group_id),
    );
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
    uma.adapts.ground = uma.adapt_ground_list[info.ground];
    uma.adapts.distance = uma.adapt_distance_list[info.distance];
    const cof_dis = mod_acceleration_adapt_ground[uma.adapts.distance],
      cof_ground = mod_acceleration_adapt_ground[uma.adapts.ground],
      cof_motivation = 1 + 0.02 * uma.motivation,
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
      // TODO .filter((skill) => true)
      .forEach((skill) => {
        for (let i = 0; i < skill.data.pop_types; ++i) {
          if (skill.data.pop_types[i]) {
            if (skill.data.is_random) {
              uma.tempPop[skill.data.pop_types[i] - 1] +=
                uma.attrs[attr_enum.intelligence] < 90
                  ? 0
                  : skill.data.pop_values[i] *
                    (1 - 90 / uma.attrs[attr_enum.intelligence]);
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
  sort_list(ret, (uma) => uma.pop[0]).forEach((uma, rank) => {
    uma.pop[0] = rank + 1;
    delete uma.tempPop;
  });
  return ret;
}

module.exports = sys_parse_for_race;
