const { logger } = require('#/era-electron');

const { ability_usage_enum } = require('#/data/race/model/uma-skill');
const { frame_rate } = require('#/data/race/race-sim-const');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names } = require('#/data/train-const');
const { get_random_value } = require('#/utils/value-utils');

const fron_cols = 4,
  progress_width = 24 - 10 - 2 * fron_cols - 1,
  timer_unit = Math.floor(1000 / frame_rate) / 1000;

/**
 * @param {string|array} message
 * @param {string} [timer_record]
 * @param {number} [timer]
 */
function get_event_record(message, timer_record, timer) {
  const _content = message instanceof Array ? message : [message],
    count = _content.reduce((p, c) => p + (c['content'] || c).length, 0);
  return {
    config: { align: 'left' },
    content: [
      ...(timer_record ? [timer_record, ' '] : []),
      { content: '解说', fontWeight: 'bold' },
      '「',
      ..._content,
      '」',
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
      race_info.loc_mind_diff.other_lower[uma.base.loc_mind_style - 1],
      race_info.loc_mind_diff.other_upper[uma.base.loc_mind_style - 1],
      true,
    ),
    (race_info.loc_mind_diff.other_lower[uma.base.loc_mind_style - 1] +
      race_info.loc_mind_diff.other_upper[uma.base.loc_mind_style - 1]) /
      2,
  ];
}

module.exports = {
  reset_loc_mind_other_diff,
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
      return '鼻差';
    } else if (bashin < 0.4) {
      return '头差';
    } else if (bashin < 0.6) {
      return '颈差';
    } else {
      let temp;
      switch (Math.round((bashin * 4) / 2.5)) {
        case 1:
          return '颈差';
        case 2:
          return '1/2 马身';
        case 3:
          return '3/4 马身';
        case 4:
          return '1 马身';
        case 5:
          return '5/4 马身';
        case 6:
          return '3/2 马身';
        case 7:
          return '7/4 马身';
        default:
          temp = Math.round(bashin / 2.5);
          if (temp >= 10) {
            return '大差';
          }
          return `${temp} 马身`;
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
    const top_loc_ratio = (top_loc * 100) / total_span;
    return [
      { type: 'divider' },
      {
        config: { width: 8 },
        content: `计时器：${timer_record}`,
        type: 'text',
      },
      top_loc_ratio >= 100
        ? {
            config: { align: 'center', width: 8 },
            content: '结束！',
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
            outContent: '进度',
            type: 'progress',
          },
      is_finished
        ? { config: { width: 8 }, content: [], type: 'text' }
        : {
            accelerator: 0,
            config: { align: 'center', disableWarning: true, width: 8 },
            content: '快进到结果',
            type: 'button',
          },
      {
        config: { align: 'center', width: 1 },
        content: '号码',
        type: 'text',
      },
      {
        config: { align: 'center', width: 4 },
        content: '名字',
        type: 'text',
      },
      {
        config: { align: 'center', width: 1 },
        content: '跑法',
        type: 'text',
      },
      {
        config: { align: 'right', width: 2 },
        content: top_loc_ratio >= 100 ? '用时' : '速度',
        type: 'text',
      },
      {
        config: { align: 'center', offset: 1, width: progress_width },
        content: '相对位置',
        type: 'text',
      },
      ...fron_list.map((e) => ({
        config: { align: 'right', width: 2 },
        content: e.toLocaleString() + ' ',
        type: 'text',
      })),
      { config: { align: 'right', width: 2 }, content: '排名', type: 'text' },
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
          content: adaptability_names[6 + uma.style].charAt(0),
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
            ? [uma.rank.curr.toString(), ' 着']
            : uma.rank.curr.toString(),
          type: 'text',
        },
      ],
      shown: uma.index_chara >= 0,
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
        uma.base.loc_mind_style = 0;
        break;
      case 2:
        uma.base.loc_mind_style = Number(Math.random() > 0.75);
        break;
      case 3:
        dice = Math.random();
        if (dice < 0.7) {
          uma.base.loc_mind_style = 0;
        } else {
          uma.base.loc_mind_style = 1 + Number(dice > 0.9);
        }
    }
    if (uma.base.loc_mind_style > 0) {
      reset_loc_mind_other_diff(uma, race_info);
    }
  },
  progress_width,
  screen_size: 8,
  /**
   * @param {RaceSkill} skill
   * @param {number} i
   * @param {number} j
   * @param {PseudoUma} uma
   */
  simulate_ability_usage(skill, i, j, uma) {
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
          Math.min(uma.race.conditionParams.activate_count_all * 0.01, 0.15);
        break;
      case ability_usage_enum.MultiplyBaseSpeed:
        skill.values[i][j] =
          skill.data.ability_values[i][j] + uma.base.accBuffFromWiz;
        break;
      case ability_usage_enum.Direct:
      case ability_usage_enum.Unknown:
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
      case ability_usage_enum.MultiplyFanCount:
        skill.values[i][j] =
          (1 + uma.base.fame * 0.05) * skill.data.ability_values[i][j];
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
        if (uma.base.weight < 4000) {
          skill.values[i][j] *= 1 + ((4000 - uma.base.weight) * 0.2) / 4000;
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
