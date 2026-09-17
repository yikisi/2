const { get_bashin_desc } = require('#/system/race/snippets');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const {
  get_random_entry,
  get_random_entry_with_weight,
  sort_list,
} = require('#/utils/list-utils');

const { race_enum } = require('#/data/race/race-const');
const { race_event_enum } = require('#/data/race/race-sim-const');

const { i18n } = require('#/i18n/selector');

/** @param {number} */
let top_indexes;

const event_enum_length = Object.keys(race_event_enum).length;
const report_count = 2;

/** @type {PseudoUma} */
let final_push_pop;

let order_start = 0;
let go_in = true;
let battle_intro_flag = true;

/**
 * @typedef ReportEvent
 * @property {PseudoUma} [a]
 * @property {number} e
 * @property {PseudoUma} [u]
 * @property {RaceLane} [l]
 * @property {number} [s]
 * @property {number} [c]
 * @property {number} [t]
 */

/**
 * @typedef ReportEventGroup
 * @property {number} e
 * @property {ReportEvent[]} p
 * @property {number} t
 */

/**
 * @param {ReportEvent[][]} events
 * @param {PseudoUma[]} in_race_list
 * @param {RaceInfo} info
 * @param {number} race_id
 */
function sub_simulate_report(events, in_race_list, info, race_id) {
  if (race_id === void 0) {
    return void 0;
  }
  /** @type {Record<string,ReportEventGroup>} */
  const dict = {};
  /** @type {ReportEventGroup[]} */
  let report_list = [];
  events.forEach((l, i) =>
    l.forEach((e) =>
      (dict[e.e] || (dict[e.e] = { e: e.e, p: [], t: i })).p.push({
        ...e,
        t: i,
      }),
    ),
  );
  let loc_change = [];
  if (dict[race_event_enum.loc_change]) {
    loc_change = dict[race_event_enum.loc_change].p;
    delete dict[race_event_enum.loc_change];
  }
  if (dict[race_event_enum.finish]) {
    report_list.push(dict[race_event_enum.finish]);
  } else {
    report_list = sort_list(
      Object.values(dict),
      (entry) =>
        event_enum_length -
        entry.e +
        event_enum_length *
          entry.p.some((e) => e.u?.index_chara >= 0 || e.u?.legend >= 0) +
        event_enum_length *
          entry.p.some((e) => e.u?.index_chara >= 0 && !e.u?.legend),
    ).slice(0, report_count);
  }
  if (go_in) {
    let ret_list = [];
    if (loc_change.length > 0) {
      const lane_events = loc_change.filter((e) => e.l !== void 0);
      const slope_events = loc_change.filter((e) => e.s !== void 0);
      const message_buffer = [];
      if (lane_events.length === 1) {
        message_buffer.push(
          i18n().timon.race.location_change_location_report_template.replace(
            '%LANE%',
            lane_events.at(-1).l.name,
          ),
        );
      }
      if (slope_events.length > 0 && slope_events.at(-1).s !== 0) {
        message_buffer.push(
          i18n().timon.race.get_location_change_slope_report(
            slope_events[0].s > 0,
          ),
        );
      } else if (slope_events.length > 1 && slope_events.at(-1).s === 0) {
        message_buffer.push(
          i18n().timon.race.get_location_change_slope_over_report(
            slope_events[0].s > 0,
          ),
        );
      }
      if (message_buffer.length > 0) {
        ret_list.push(
          i18n().timon.race.location_change_report_template.replace(
            '%MESSAGE%',
            message_buffer.join(i18n().ui_comma),
          ),
        );
      }
    }
    if (report_list.length === 0) {
      if (final_push_pop !== void 0) {
        if (ret_list.length > 0) {
          ret_list.push(i18n().ui_exclamation);
        }
        if (in_race_list[0] !== final_push_pop) {
          ret_list.push(
            ...get_random_entry(i18n().timon.race.overtake_reports)(
              final_push_pop.get_colored_name(),
              in_race_list[0].get_colored_name(),
            ),
          );
          final_push_pop = in_race_list[0];
        } else if (
          in_race_list[0].race.conditionParams.bashin_diff_behind < 4
        ) {
          if (battle_intro_flag) {
            ret_list.push(
              ...i18n().timon.race.get_battle_start_report(
                ...in_race_list.map((c) => c.get_colored_name()),
              ),
            );
            battle_intro_flag = false;
          } else {
            ret_list.push(
              ...get_random_entry_with_weight(
                i18n().timon.race.battle_reports,
                (e) => e.w,
              ).h(
                in_race_list[0].get_colored_name(),
                in_race_list[1].get_colored_name(),
              ),
            );
          }
        } else {
          if (top_indexes.length === 0) {
            top_indexes = sort_list(
              new Array(i18n().timon.race.top_reports.length)
                .fill(0)
                .map((_, i) => i),
              Math.random,
            );
          }
          ret_list.push(
            ...i18n().timon.race.top_reports[top_indexes.shift()](
              in_race_list[0].get_colored_name(),
            ),
          );
        }
      } else {
        if (order_start >= in_race_list.length) {
          order_start = 0;
        }
        if (ret_list.length === 0 && order_start === 0) {
          ret_list.push(
            i18n().timon.race.location_in_order_report_template.replace(
              '%LANE%',
              info.lanes.find(
                (e) =>
                  in_race_list[order_start].race.location >= e.start &&
                  in_race_list[order_start].race.location < e.end,
              ).name,
            ),
          );
        }
        let i = 0;
        while (i + order_start < in_race_list.length && i < 2) {
          if (ret_list.length > 0) {
            ret_list.push(i18n().ui_comma);
          }
          ret_list.push(
            ...i18n().timon.race.get_order_report(
              in_race_list[order_start + i].get_colored_name(),
              (order_start + i + 1).toString(),
              (in_race_list[order_start + i].index_race + 1).toString(),
            ),
          );
          ++i;
        }
        order_start += i;
        ret_list.push(i18n().ui_period);
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
        return Array.isArray(temp)
          ? temp.map((e) =>
              typeof e === 'string'
                ? { color: champion.color, content: e }
                : e.color === void 0
                  ? { color: champion.color, ...e }
                  : e,
            )
          : temp;
      } else {
        ret_list.push(
          ...(race_id === race_enum.begin_race
            ? i18n().timon.race.get_finish_report_begin_race
            : i18n().timon.race.get_finish_report)(
            champion.get_colored_name(),
            get_bashin_desc(champion.race.conditionParams.bashin_diff_behind),
          ),
        );
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
          .forEach((e, i) => {
            if (i > 0) {
              name.push(i18n().timon.race.contestants_conjunction);
            }
            name.push(e.u.get_colored_name());
          });
        switch (entry.e) {
          case race_event_enum.final_push:
            if (final_push_pop !== void 0) {
              ret_list.push(
                ...i18n().timon.race.get_final_push_follow_report(name),
              );
            } else {
              final_push_pop = entry.p[0].u;
              if (entry.p.length > 2) {
                ret_list.push(
                  ...i18n().timon.race.get_final_push_multi_report(
                    name,
                    entry.p[0].t === entry.p[1].t,
                  ),
                );
              } else {
                ret_list.push(
                  ...i18n().timon.race.get_final_push_report(name[0]),
                );
              }
            }
            break;
          case race_event_enum.compete_fight:
            ret_list.push(
              ...i18n().timon.race.get_compete_fight_report(
                entry.p[0].a.get_colored_name(),
                entry.p[0].u.get_colored_name(),
              ),
            );
            break;
          case race_event_enum.full_speed_push:
          case race_event_enum.orgasm:
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
          case race_event_enum.temp_wrong_style:
            ret_list.push(
              ...get_random_entry(
                i18n().timon.race[`${race_event_enum.keys[entry.e]}_reports`],
              )(name),
            );
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
  return void 0;
}

module.exports = sub_simulate_report;
module.exports.init = () => {
  order_start = 0;
  go_in = true;
  final_push_pop = void 0;
  top_indexes = sort_list(
    new Array(i18n().timon.race.top_reports.length).fill(0).map((_, i) => i),
    Math.random,
  );
  battle_intro_flag = true;
};
