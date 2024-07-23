const { frame_rate } = require('#/data/race/race-sim-const');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names } = require('#/data/train-const');

const fron_cols = 4,
  progress_width = 24 - 10 - 2 * fron_cols - 1,
  timer_unit = Math.floor(1000 / frame_rate) / 1000;

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
  /**
   * @param {RaceLane} lane
   * @returns {string}
   */
  get_lane_name(lane) {
    return `${lane.is_last ? '终' : lane.index}${lane.is_curve ? '弯' : '直'}`;
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
    return `${minutes ? `${minutes}'` : ''}${minutes ? `${seconds.toString().padStart(2, '0')}` : seconds.toFixed(1)}"`;
  },
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
  progress_width,
  screen_size: 8,
  timer_unit,
};
