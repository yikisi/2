const { get, logger } = require('#/era-electron');

const { get_random_value } = require('#/utils/value-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_level } = require('#/data/info-generator');
const { ability_usage_enum } = require('#/data/race/model/uma-skill');
const { frame_rate } = require('#/data/race/race-sim-const');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

const fron_cols = 4;
const progress_width = 24 - 10 - 2 * fron_cols - 1;
const timer_unit = Math.floor(1000 / frame_rate) / 1000;

/**
 * @param {TextContent} message
 * @param {string} [timer_record]
 * @param {number} [timer]
 */
function get_event_record(message, timer_record, timer) {
  const _content = Array.isArray(message) ? message : [message];
  let count = 0;
  _content.forEach((c) => (count += (c['content'] || c).length));
  return {
    config: { align: 'left' },
    content: [
      ...(timer_record ? [timer_record, ' '] : []),
      { content: i18n().ui_race_reporter, fontWeight: 'bold' },
      i18n().tk_speak_border[0],
      ..._content,
      i18n().tk_speak_border[1],
    ],
    speak: count,
    timer,
    type: 'text',
  };
}

/**
 * @param {PseudoUma} uma
 * @param {RaceInfo} race_info
 */
function reset_loc_mind_other_diff(uma, race_info) {
  uma.base.loc_mind_other_diff_random = [
    get_random_value(
      race_info.loc_mind_diff.other_lower[uma.race.style - 1],
      race_info.loc_mind_diff.other_upper[uma.race.style - 1],
      true,
    ),
    (race_info.loc_mind_diff.other_lower[uma.race.style - 1] +
      race_info.loc_mind_diff.other_upper[uma.race.style - 1]) /
      2,
  ];
}

module.exports = {
  /**
   * @param {number} timer
   * @returns {number}
   */
  add_timer(timer) {
    const ret = timer + timer_unit;
    if (0.990001 - (ret % 1) < 0.00001) {
      return Math.ceil(ret);
    }
    return ret;
  },
  /**
   * @param {PseudoUma} uma
   * @param {string} key
   * @param {number} phase
   */
  check_phase_random_loc(uma, key, phase) {
    const random_key = `${key}_random`;
    uma.race.conditionParams[random_key] = -1;
    if (uma.race.location >= uma.random[key][phase]) {
      if (uma.race.location <= uma.random[key][phase] + 10) {
        uma.race.conditionParams[random_key] = phase;
      } else {
        uma.random[key][phase] = 50000;
      }
    }
  },
  /**
   * @param {PseudoUma} uma
   * @param {string} key
   * @param {number} param_val
   */
  check_random_loc(uma, key, param_val) {
    const random_key = `${key}_random`;
    uma.race.conditionParams[random_key] = 0;
    if (uma.race.location >= uma.random[key]) {
      if (uma.race.location <= uma.random[key] + 10) {
        uma.race.conditionParams[random_key] = param_val;
      } else {
        uma.random[key] = 50000;
      }
    }
  },
  fron_cols,
  /**
   * @param {number} bashin
   * @returns {string}
   */
  get_bashin_desc(bashin) {
    bashin *= 2.5;
    if (bashin < 0.2) {
      return i18n().race.d_hanasa;
    } else if (bashin < 0.4) {
      return i18n().race.d_atamasa;
    } else if (bashin < 0.6) {
      return i18n().race.d_kubisa;
    } else {
      let temp;
      switch (Math.round((bashin * 4) / 2.5)) {
        case 1:
          return i18n().race.d_kubisa;
        case 2:
          return i18n().race.d_bashin_template.replace('%DIS%', '1/2');
        case 3:
          return i18n().race.d_bashin_template.replace('%DIS%', '3/4');
        case 4:
          return i18n().race.d_bashin_template.replace('%DIS%', '1');
        case 5:
          return i18n().race.d_bashin_template.replace('%DIS%', '5/4');
        case 6:
          return i18n().race.d_bashin_template.replace('%DIS%', '3/2');
        case 7:
          return i18n().race.d_bashin_template.replace('%DIS%', '7/4');
        default:
          temp = Math.round(bashin / 2.5);
          if (temp >= 10) {
            return i18n().race.d_oosa;
          }
          return i18n().race.d_bashin_template.replace(
            '%DIS%',
            temp.toString(),
          );
      }
    }
  },
  get_event_record,
  /**
   * @param {PseudoUma} uma
   * @param {number} skill_id
   * @param {string} timer_record
   * @param {number} timer
   */
  get_skill_record(uma, skill_id, timer_record, timer) {
    return {
      config: { align: 'right' },
      content: [
        ...skills_dict[skill_id].get_colored_name(),
        ' ',
        { color: uma.color, content: uma.name, fontWeight: 'bold' },
        ' ',
        timer_record,
      ],
      timer,
      type: 'text',
    };
  },
  /**
   * @param {number[]} fron_list
   * @param {string} timer_record
   * @param {number} top_loc
   * @param {number} total_span
   * @param {boolean} is_finished
   */
  get_table_header(fron_list, timer_record, top_loc, total_span, is_finished) {
    const _lan = lan();
    const top_loc_ratio = (top_loc * 100) / total_span;
    return [
      { type: 'divider' },
      {
        config: { width: 8 },
        content: i18n().ui_race_timer_template.replace('%TIMER%', timer_record),
        type: 'text',
      },
      top_loc_ratio >= 100
        ? {
            config: { align: 'center', width: 8 },
            content: i18n().ui_end,
            type: 'text',
          }
        : {
            config: {
              barWidth: 20,
              height: 22,
              width: 8,
            },
            inContent: `${Math.round(top_loc).toLocaleString()}m/${total_span.toLocaleString()}m (${top_loc_ratio.toFixed(2)}%)`,
            percentage: top_loc_ratio,
            outContent: i18n().ui_race_progress,
            type: 'progress',
          },
      is_finished
        ? { config: { width: 8 }, content: [], type: 'text' }
        : {
            accelerator: 0,
            config: { align: 'center', disableWarning: true, width: 8 },
            content: i18n().ui_skip,
            type: 'button',
          },
      {
        config: { align: 'center', width: 1 },
        content: i18n().ui_race_contestant_no,
        type: 'text',
      },
      {
        config: { align: 'center', width: 4 },
        content: i18n().ui_race_contestant_name,
        type: 'text',
      },
      {
        config: { align: 'center', width: 1 },
        content: i18n().ui_race_contestant_style,
        type: 'text',
      },
      {
        config: { align: 'right', width: 2 },
        content:
          top_loc_ratio >= 100
            ? i18n().ui_race_contestant_total_time
            : i18n().ui_race_contestant_speed,
        type: 'text',
      },
      {
        config: { align: 'center', offset: 1, width: progress_width },
        content: i18n().ui_race_contestant_loc,
        type: 'text',
      },
      ...fron_list.map((e) => ({
        config: { align: 'right', width: 2 },
        content: e.toLocaleString(_lan) + ' ',
        type: 'text',
      })),
      {
        config: { align: 'right', width: 2 },
        content: i18n().ui_race_contestant_rank,
        type: 'text',
      },
    ];
  },
  /**
   * @param {PseudoUma} uma
   * @param {string[]} fron_list
   * @param progress_obj
   */
  get_table_row(uma, fron_list, progress_obj) {
    const is_finished = progress_obj.type === 'text';
    return {
      columns: [
        {
          config: { align: 'center', width: 1 },
          content: (uma.index_race + 1).toString(),
          type: 'text',
        },
        {
          config: {
            align: 'center',
            color: uma.color,
            fontWeight: 'bold',
            width: 4,
          },
          content: uma.name,
          type: 'text',
        },
        {
          config: { align: 'center', width: 1 },
          content: di18n.race.a_style[uma.style],
          type: 'text',
        },
        {
          config: { align: 'right', width: 2 },
          content: is_finished
            ? uma.race.totalTime
            : [uma.race.velocityReal.toFixed(1), 'm/s'],
          type: 'text',
        },
        progress_obj,
        ...fron_list.map((e) => ({
          config: { align: 'right', width: 2 },
          content: e,
          type: 'text',
        })),
        {
          config: { align: 'right', width: 2 },
          content: is_finished
            ? i18n().race.result_template.replace(
                '%RANK%',
                uma.rank.curr.toString(),
              )
            : uma.rank.curr.toString(),
          type: 'text',
        },
      ],
      shown: (uma.index_chara >= 0) + uma.legend,
    };
  },
  /**
   * @param {number} timer
   * @returns {string}
   */
  get_timer_record(timer) {
    const seconds = timer % 60,
      minutes = Math.floor(timer / 60);
    return `${minutes ? `${minutes}'` : ''}${minutes && seconds < 10 ? '0' : ''}${seconds.toFixed(1)}"`;
  },
  /**
   * @param {PseudoUma} uma
   * @param {RaceInfo} race_info
   */
  handle_temptation(uma, race_info) {
    let dice;
    switch (uma.style) {
      case 1:
        uma.race.style = 0;
        break;
      case 2:
        uma.race.style = Number(Math.random() > 0.75);
        break;
      case 3:
        dice = Math.random();
        if (dice < 0.7) {
          uma.race.style = 0;
        } else if (dice < 0.9) {
          uma.race.style = 1;
        } else {
          uma.race.style = 2;
        }
    }
    if (uma.race.style > 0) {
      reset_loc_mind_other_diff(uma, race_info);
    }
  },
  progress_width,
  reset_loc_mind_other_diff,
  /**
   * @param {PseudoUma} uma
   * @param {[number,number,number,number]} rs_counts
   * @param {number} all
   */
  reset_running_style(uma, rs_counts, all) {
    uma.race.conditionParams.running_style = uma.style + 1;
    uma.race.conditionParams.running_style_count_nige_otherself =
      rs_counts[0] - (uma.style === 0);
    uma.race.conditionParams.running_style_count_senko_otherself =
      rs_counts[1] - (uma.style === 1);
    uma.race.conditionParams.running_style_count_sashi_otherself =
      rs_counts[2] - (uma.style === 2);
    uma.race.conditionParams.running_style_count_oikomi_otherself =
      rs_counts[3] - (uma.style === 3);
    uma.race.conditionParams.running_style_count_same = rs_counts[uma.style];
    uma.race.conditionParams.running_style_count_same_rate =
      (uma.race.conditionParams.running_style_count_same * 100) / all;
  },
  screen_size: 8,
  /**
   * @param {RaceSkill} skill
   * @param {number} i
   * @param {number} j
   * @param {PseudoUma} uma
   * @param {number} count
   */
  simulate_ability_usage(skill, i, j, uma, count) {
    const cid = uma.index_chara;
    let temp;
    switch (skill.data.ability_value_usages[i][j]) {
      case ability_usage_enum.MultiplySkillNum:
        skill.values[i][j] =
          skill.data.ability_values[i][j] *
          Math.min(1 + uma.base.skill_count * 0.01, 1.2);
        break;
      case ability_usage_enum.MultiplyRandom1:
        skill.values[i][j] = Math.random();
        if (skill.values[i][j] < 0.1) {
          skill.values[i][j] = 0.04;
        } else if (skill.values[i][j] < 0.4) {
          skill.values[i][j] = 0.02;
        } else {
          skill.values[i][j] = 0;
        }
        skill.values[i][j] *= skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplySingleModeWinCount:
        if (uma.base.winCount < 6) {
          skill.values[i][j] = skill.data.ability_values[i][j] * 0.8;
        } else if (uma.base.winCount < 14) {
          skill.values[i][j] = skill.data.ability_values[i][j] * 0.9;
        } else if (uma.base.winCount < 18) {
          skill.values[i][j] = skill.data.ability_values[i][j];
        } else if (uma.base.winCount < 25) {
          skill.values[i][j] = skill.data.ability_values[i][j] * 1.1;
        } else if (uma.base.winCount >= 25) {
          skill.values[i][j] = skill.data.ability_values[i][j] * 1.2;
        }
        break;
      case ability_usage_enum.MultiplyOvertakeCount:
        skill.values[i][j] =
          skill.data.ability_values[i][j] +
          0.02 * uma.base.change_order_finalcorner;
        break;
      case ability_usage_enum.MultiplyActivateSpecificTagSkillCount:
        if (uma.base.greenCount >= 6) {
          skill.values[i][j] = skill.data.ability_values[i][j] + 3;
        } else if (uma.base.greenCount >= 5) {
          skill.values[i][j] = skill.data.ability_values[i][j] + 2;
        } else if (uma.base.greenCount >= 3) {
          skill.values[i][j] = skill.data.ability_values[i][j] + 1;
        } else {
          skill.values[i][j] = skill.data.ability_values[i][j];
        }
        break;
      case ability_usage_enum.AddDistanceDiffTop:
        if (uma.race.conditionParams.distance_diff_top >= 20) {
          skill.values[i][j] = skill.data.ability_values[i][j] + 0.1;
        } else {
          skill.values[i][j] = skill.data.ability_values[i][j];
        }
        break;
      case ability_usage_enum.MultiplyBlockedSideMaxContinueTimePhaseMiddleRun1:
        skill.values[i][j] =
          skill.data.ability_values[i][j] *
          (Math.min(Math.floor(uma.race.middleBlockedContinueTime / 2), 3) + 1);
        break;
      case ability_usage_enum.MultiplyBaseSpeedForAcc:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (uma.attrs[attr_enum.intelligence] >= 2000) {
          skill.values[i][j] += 0.2;
        } else if (uma.attrs[attr_enum.intelligence] >= 1900) {
          skill.values[i][j] += 0.15;
        } else if (uma.attrs[attr_enum.intelligence] >= 1800) {
          skill.values[i][j] += 0.1;
        } else if (uma.attrs[attr_enum.intelligence] >= 1700) {
          skill.values[i][j] += 0.05;
        }
        break;
      case ability_usage_enum.MultiplyBaseSpeed:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (uma.attrs[attr_enum.intelligence] >= 1600) {
          skill.values[i][j] += 0.15;
        } else if (uma.attrs[attr_enum.intelligence] >= 1400) {
          skill.values[i][j] += 0.1;
        } else {
          skill.values[i][j] += 0.05;
        }
        break;
      case ability_usage_enum.Direct:
        skill.values[i][j] = skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplyTeamTotalSpeed:
      case ability_usage_enum.MultiplyTeamTotalStamina:
      case ability_usage_enum.MultiplyTeamTotalPower:
      case ability_usage_enum.MultiplyTeamTotalGuts:
      case ability_usage_enum.MultiplyTeamTotalWiz:
        skill.values[i][j] =
          uma.base.total_attrs[
            skill.data.ability_value_usages[i][j] -
              ability_usage_enum.MultiplyTeamTotalSpeed
          ];
        if (skill.values[i][j] >= 3600) {
          skill.values[i][j] = 1.2;
        } else if (skill.values[i][j] >= 2600) {
          skill.values[i][j] = 1.1;
        } else if (skill.values[i][j] >= 1800) {
          skill.values[i][j] = 1;
        } else if (skill.values[i][j] >= 1200) {
          skill.values[i][j] = 0.9;
        } else {
          skill.values[i][j] = 0.8;
        }
        skill.values[i][j] *= skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplyTeamTotal:
        skill.values[i][j] = uma.base.total_attrs.reduce((p, c) => p + c);
        if (skill.values[i][j] >= 3600 * 5) {
          skill.values[i][j] = 1.2;
        } else if (skill.values[i][j] >= 2600 * 5) {
          skill.values[i][j] = 1.1;
        } else if (skill.values[i][j] >= 1800 * 5) {
          skill.values[i][j] = 1;
        } else if (skill.values[i][j] >= 1200 * 5) {
          skill.values[i][j] = 0.9;
        } else {
          skill.values[i][j] = 0.8;
        }
        skill.values[i][j] *= skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplyFanCount:
      case ability_usage_enum.MultiplyFanCount2:
        skill.values[i][j] = skill.data.ability_values[i][j];
        // CFLAGNAME:66 = 招募状态
        if (get(`cflag:${cid}:66`) === recruit_flags.yes) {
          skill.values[i][j] *=
            1 +
            get_trainer_level() *
              (0.05 +
                0.01 *
                  (skill.data.ability_value_usages[i][j] -
                    ability_usage_enum.MultiplyFanCount));
        }
        break;
      case ability_usage_enum.MultiplyMaximumRawStatus:
        temp = Math.max(...uma.attrs);
        if (temp >= 1100) {
          skill.values[i][j] = 1.2;
        } else if (temp >= 1000) {
          skill.values[i][j] = 1.1;
        } else if (temp >= 800) {
          skill.values[i][j] = 1;
        } else if (temp >= 600) {
          skill.values[i][j] = 0.9;
        } else {
          skill.values[i][j] = 0.8;
        }
        skill.values[i][j] *= skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplyForeignAdaptability:
        skill.values[i][j] =
          (1 + uma.base.language * 0.04) * skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplyUAFWins:
        if (uma.base.attr_err < 100) {
          skill.values[i][j] = 1.2;
        } else if (uma.base.attr_err < 200) {
          skill.values[i][j] = 1.1;
        } else {
          skill.values[i][j] = 1;
        }
        skill.values[i][j] *= skill.data.ability_values[i][j];
        break;
      case ability_usage_enum.MultiplyCookingPt:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (get(`cflag:${cid}:66`) === recruit_flags.yes) {
          const weight = get(`base:${cid}:体重偏差`);
          if (weight < 4000) {
            skill.values[i][j] *= 1 + ((4000 - weight) * 0.2) / 4000;
          }
        }
        break;
      case ability_usage_enum.MultiplyResearchLv:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (uma.base.research_lv >= 20) {
          skill.values[i][j] *= 1.2;
        } else if (uma.base.research_lv >= 15) {
          skill.values[i][j] *= 1.1;
        }
        break;
      case ability_usage_enum.MultiplyLove:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (!cid) {
          skill.values[i][j] *= 2;
        } else if (get(`cflag:${cid}:66`) === recruit_flags.yes && cid > 0) {
          temp = get(`love:${cid}`);
          if (temp >= 90) {
            skill.values[i][j] *= 4;
          } else if (temp >= 75) {
            skill.values[i][j] *= 3;
          } else if (temp >= 50) {
            skill.values[i][j] *= 2;
          }
        }
        break;
      case ability_usage_enum.MultiplyIsland:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (get(`cflag:${cid}:66`) === recruit_flags.yes) {
          // FLAGNAME:16 = 当前马币
          const money = get('flag:16');
          if (money >= 100000) {
            skill.values[i][j] += 0.15;
          } else if (money >= 10000) {
            skill.values[i][j] += 0.125;
          } else if (money >= 5000) {
            skill.values[i][j] += 0.1;
          } else if (money >= 2000) {
            skill.values[i][j] += 0.075;
          } else if (money >= 1000) {
            skill.values[i][j] += 0.05;
          } else if (money >= 500) {
            skill.values[i][j] += 0.025;
          }
        }
        break;
      case ability_usage_enum.MultiplyHotSpring:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (get(`cflag:${cid}:66`) === recruit_flags.yes) {
          // STATUSNAME:6 = 疲惫
          switch (get(`status:${cid}:6`)) {
            case 0:
              skill.values[i][j] += 0.1;
              break;
            case 1:
              skill.values[i][j] += 0.05;
          }
        }
        break;
      case ability_usage_enum.MultiplyDisMedium:
        skill.values[i][j] = skill.data.ability_values[i][j];
        // 中距离 +0.2 速度
        if (uma.race.conditionParams.distance_type === 3) {
          skill.values[i][j] += 0.2;
        }
        break;
      case ability_usage_enum.MultiplyCount:
        skill.values[i][j] =
          skill.data.ability_values[i][j] * (0.98 + 0.01 * count);
        break;
      case ability_usage_enum.MultiplyRamen:
        skill.values[i][j] = skill.data.ability_values[i][j];
        if (get(`cflag:${cid}:66`) === recruit_flags.yes) {
          const weight = get(`base:${cid}:体重偏差`);
          if (weight < 4000) {
            skill.values[i][j] *= 1 + (weight * 0.2) / 4000;
          } else {
            skill.values[i][j] *= 1.21;
          }
        }
        break;
      default:
        skill.values[i][j] = skill.data.ability_values[i][j];
        logger.debug(
          `不支持的增幅类型：${skill.data.name} 第${i + 1}段 效果${j + 1} ${skill.data.ability_types[i][j]}`,
        );
    }
  },
  timer_unit,
};
