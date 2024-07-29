const { get_bashin_desc } = require('#/system/race/snippets');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_random_entry, sort_list } = require('#/utils/list-utils');

const { race_enum } = require('#/data/race/race-const');
const { race_event_enum } = require('#/data/race/race-sim-const');

/** @type {(function(PseudoUma,PseudoUma))[]} */
const overtake_handlers = [
  (top, over) => [
    over.get_colored_name(),
    ' 一下子就超越了 ',
    top.get_colored_name(),
    '！',
  ],
  (top, over) => [
    over.get_colored_name(),
    ' 在与 ',
    top.get_colored_name(),
    ' 的交战中占优！',
  ],
  (top, over) => [
    '超越 ',
    top.get_colored_name(),
    ' 之后，正是 ',
    over.get_colored_name(),
    ' 的制胜时刻！',
  ],
];

/** @type {(function(PseudoUma,PseudoUma))[]} */
const battle_handlers = [
  (first, second) => [
    first.get_colored_name(),
    '！',
    second.get_colored_name(),
    '！',
  ],
  (first, second) => [
    first.get_colored_name(),
    ' 与 ',
    second.get_colored_name(),
    ' 的交战还在继续！双方都为了胜利拼尽全力！',
  ],
  (first, second) => [
    '焦灼！焦灼！',
    first.get_colored_name(),
    ' 和 ',
    second.get_colored_name(),
    ' 都无法独善其身！',
  ],
];

/** @type {(function(PseudoUma,PseudoUma))[]} */
const top_handlers = [
  (uma) => [uma.get_colored_name(), ' 牢牢把持着头位！'],
  (uma) => ['太快了太快了！', uma.get_colored_name(), ' 一骑绝尘！'],
  (uma) => [uma.get_colored_name(), ' 状态绝佳！要一路冲下去了吗！'],
  (uma) => ['持续领先！终盘的 ', uma.get_colored_name(), ' 似乎已无人能敌！'],
  (uma) => [uma.get_colored_name(), ' 即将迎来胜利！'],
];

/** @type {Record<string,(function([]))[]>} */
const other_handlers = {};

other_handlers[race_event_enum.lost_stamina] = [
  (names) => [names, '，失速！'],
  (names) => [names, ' 的步伐踉跄了起来，已经无法维持速度了！'],
  (names) => [names, ' 速度变慢了！'],
  (names) => [names, ' 到极限了吗！？'],
];
other_handlers[race_event_enum.loc_mind_nige_ex] = [
  (names) => ['逃马怎容他马在前！冲啊，', ...names, '！'],
  (names) => ['那不是你的位置！', ...names, ' 在用奔跑警告着！'],
  (names) => [...names, ' 正在夺回自己的头马之位！'],
  (names) => [...names, ' 持续加速，要比其他马娘逃得更前！'],
];
other_handlers[race_event_enum.loc_mind_other_ex] = [
  (names) => [...names, ' 大步奔向自己应处的位置！'],
  (names) => [
    `这才不是${names.length > 1 ? '你' : '你们'}的位置！加油啊 `,
    ...names,
    '！',
  ],
  (names) => [...names, ' 正在为夺回位置而战！'],
];
other_handlers[race_event_enum.loc_mind_nige_over_take] = [
  (names) => [...names, ' 毫不犹豫向头位进发！'],
  (names) => [...names, ' 正在争取头位！'],
  (names) => [...names, ' 的眼里只有头位！'],
];
other_handlers[race_event_enum.loc_mind_nige_speed_up] = [
  (names) => [...names, ' 持续加速，想要拉开更多距离！'],
  (names) => [...names, ' 要逃得更远了！'],
  (names) => ['逃下去，逃到世界尽头吧！', ...names, '！'],
];
other_handlers[race_event_enum.loc_mind_other_quick] = [
  (names) => [...names, ' 不甘于被拉开距离，在奋起直追！'],
  (names) => ['被拉得太远了！', ...names, ' 奋起直追！'],
  (names) => [...names, ' 紧紧保持着距离！'],
];
other_handlers[race_event_enum.loc_mind_other_relax] = [
  (names) => [...names, ' 似乎在保持体力，很大胆的战术！！'],
  (names) => [...names, ' 的节奏变慢了，要小心啊！！'],
  (names) => [...names, '，松懈可是大敌！'],
];
other_handlers[race_event_enum.blocked] = [
  (names) => [...names, ' 被阻挡了，真是可惜！'],
  (names) => [...names, ' 突围失败！'],
  (names) => [...names, ' 身陷马群无法自拔！'],
];
other_handlers[race_event_enum.temptation] = [
  (names) => [...names, ' 的节奏略显凌乱，似乎有点焦躁！'],
  (names) => [...names, ' 有点气急了吗！'],
  (names) => [...names, ' 陷入焦躁！'],
];
other_handlers[race_event_enum.temp_end] = [
  (names) => [...names, ' 终于回归了正常的节奏！'],
  (names) => [...names, ' 好像冷静下来了！'],
  (names) => [...names, ' 摆脱焦躁了！'],
];
other_handlers[race_event_enum.temp_continue] = [
  (names) => [...names, ' 的节奏持续紊乱，有点糟糕！'],
  (names) => [...names, ' 深陷焦躁无法自拔！'],
  (names) => ['冷静下来啊 ', ...names, '！小心错失时机！'],
];

/** @type {(function(PseudoUma,PseudoUma))[]} */
let top_list;

let order_start = 0,
  go_in = true,
  battle_intro_flag = true;
/** @type {PseudoUma} */
let final_push_pop = undefined;

/**
 * @param {{[a]:PseudoUma,e:number,[u]:PseudoUma,[l]:RaceLane,[s]:number,[c]:number}[][]} events
 * @param {PseudoUma[]} in_race_list
 * @param {RaceInfo} info
 * @param {number} race_id
 */
function sub_simulate_report(events, in_race_list, info, race_id) {
  const dict = {},
    report_list = [];
  events.forEach((l, i) =>
    l.forEach((e) =>
      (dict[e.e] || (dict[e.e] = { e: e.e, p: [], t: i })).p.push({
        ...e,
        t: i,
      }),
    ),
  );
  let report_count = 2,
    loc_change = [];
  if (dict[race_event_enum.loc_change]) {
    loc_change = dict[race_event_enum.loc_change].p;
    delete dict[race_event_enum.loc_change];
  }
  Object.values(race_event_enum).forEach((e) => {
    if (dict[e] && report_count-- > 0) {
      report_list.push(dict[e]);
    }
  });
  if (go_in) {
    let ret_list = [];
    if (loc_change.length > 0) {
      const lane_events = loc_change.filter((e) => e.l !== undefined),
        slope_events = loc_change.filter((e) => e.s !== undefined),
        message_buffer = [];
      if (lane_events.length === 1) {
        message_buffer.push(`进入${lane_events[0].l.get_name()}`);
      } else if (lane_events.length >= 2) {
        message_buffer.push(
          `经过 ${lane_events
            .slice(0, lane_events.length - 2)
            .map((e) => e.l.get_name())
            .join('、')}`,
        );
        if (lane_events.length > 2) {
          message_buffer[0] += '与';
        }
        message_buffer[0] += `${lane_events.at(-2).l.get_name()}，进入${lane_events.at(-1).l.get_name()}`;
      }
      if (slope_events.length > 0 && slope_events.at(-1).s !== 0) {
        message_buffer.push(`正在${slope_events[0].s > 0 ? '爬' : '下'}坡`);
      } else if (slope_events.length > 1 && slope_events.at(-1).s === 0) {
        message_buffer.push(`经过${slope_events.at(-2).s > 0 ? '爬' : '下'}坡`);
      }
      if (message_buffer.length > 0) {
        ret_list.push('现在', message_buffer.join('，'));
      }
    }
    if (report_list.length === 0) {
      if (final_push_pop !== undefined) {
        if (ret_list.length) {
          ret_list.push('！');
        }
        if (in_race_list[0] !== final_push_pop) {
          ret_list.push(
            ...get_random_entry(overtake_handlers)(
              final_push_pop,
              in_race_list[0],
            ),
          );
          final_push_pop = in_race_list[0];
        } else if (
          in_race_list[0].race.conditionParams.bashin_diff_behind < 4
        ) {
          if (battle_intro_flag) {
            ret_list.push(
              in_race_list[0].get_colored_name(),
              ' 与 ',
              in_race_list[1].get_colored_name(),
              ' 展开激烈交战！',
            );
            battle_intro_flag = false;
          } else {
            let dice = Math.random();
            if (dice < 0.6) {
              dice = 0;
            } else if (dice < 0.9) {
              dice = 1;
            } else {
              dice = 2;
            }
            ret_list.push(
              ...battle_handlers[dice](in_race_list[0], in_race_list[1]),
            );
          }
        } else {
          if (top_list.length === 0) {
            top_list = sort_list(top_handlers, Math.random);
          }
          ret_list.push(...top_list.shift()(in_race_list[0]));
        }
      } else {
        if (order_start >= in_race_list.length) {
          order_start = 0;
        }
        if (ret_list.length === 0 && order_start === 0) {
          ret_list.push(
            '现在是',
            info.lanes
              .find(
                (e) =>
                  in_race_list[order_start].race.location >= e.start &&
                  in_race_list[order_start].race.location < e.end,
              )
              .get_name(),
          );
        }
        let i = 0;
        while (i + order_start < in_race_list.length && i < 2) {
          if (ret_list.length > 0) {
            ret_list.push('，');
          }
          ret_list.push(
            `第 ${order_start + i + 1} 位是 ${in_race_list[order_start + i].index_race + 1} 号 `,
            in_race_list[order_start + i].get_colored_name(),
          );
          ++i;
        }
        order_start += i;
        ret_list.push('。');
      }
      return ret_list;
    } else if (report_list[0].e === race_event_enum.finish) {
      order_start = 0;
      go_in = false;
      const champion = report_list[0].p[0].u;
      let temp;
      if (
        champion.index_chara >= 0 &&
        !champion.legend &&
        (temp = get_custom_mec(champion.index_chara).get_race_finish_report(
          champion,
          race_id,
        ))
      ) {
        return temp;
      } else {
        ret_list.push(
          champion.get_colored_name(),
          ' 以 ',
          get_bashin_desc(champion.race.conditionParams.bashin_diff_behind),
          ' 率先冲线！',
        );
        if (race_id === race_enum.begin_race) {
          ret_list.push(
            Math.random() < 0.5 ? '恭喜出道！' : '真期待她后续的表现！',
          );
        }
        return ret_list;
      }
    } else {
      order_start = 0;
      ret_list.length > 0 && ret_list.push('，');
      sort_list(report_list, (e) => e.t, true).forEach((entry) => {
        entry.p = sort_list(
          entry.p,
          (e) =>
            ((2 * info.gates - e.u.rank.curr - e.u.pop[0]) << 6) +
            (events.length - e.t),
        );
        const name = [];
        entry.p
          .filter((e, i, l) => l.findIndex((v) => v.u === e.u) === i)
          .slice(0, 2)
          .forEach((e) => name.push(' 与 ', e.u.get_colored_name()));
        name.shift();
        switch (entry.e) {
          case race_event_enum.final_push:
            if (final_push_pop !== undefined) {
              ret_list.push(...name, ' 也开始最终冲刺了！');
            } else {
              final_push_pop = entry.p[0].u;
              ret_list.push(
                ...name,
                ` ${entry.p.length > 2 ? (entry.p[0].t === entry.p[1].t ? '同时' : '几乎同时') : ''}开始最终冲刺！`,
              );
            }
            break;
          case race_event_enum.compete_fight:
            ret_list.push(
              '以 ',
              entry.p[0].a.get_colored_name(),
              ' 为目标，',
              entry.p[0].u.get_colored_name(),
              ' 加快了自己的速度！',
            );
            break;
          case race_event_enum.loc_mind_nige_ex:
          case race_event_enum.loc_mind_other_ex:
          case race_event_enum.loc_mind_nige_over_take:
          case race_event_enum.loc_mind_nige_speed_up:
          case race_event_enum.loc_mind_other_quick:
          case race_event_enum.loc_mind_other_relax:
          case race_event_enum.blocked:
          case race_event_enum.temptation:
          case race_event_enum.temp_end:
          case race_event_enum.temp_continue:
          case race_event_enum.lost_stamina:
            ret_list.push(...get_random_entry(other_handlers[entry.e])(name));
            break;
          default:
            ret_list.push(
              ...name,
              ' ',
              Object.keys(race_event_enum)[entry.e],
              ' ',
            );
        }
      });
      return ret_list;
    }
  }
  return undefined;
}

module.exports = sub_simulate_report;
module.exports.init = () => {
  order_start = 0;
  go_in = true;
  final_push_pop = undefined;
  top_list = sort_list(top_handlers, Math.random);
  battle_intro_flag = true;
};
