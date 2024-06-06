const era = require('#/era-electron');

const { median, sort_list } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const { track_names } = require('#/data/race/model/race-info');
const { race_event_names } = require('#/data/race/race-sim-const');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names } = require('#/data/train-const');

const fron_cols = 5,
  progress_width = 24 - 8 - 2 * fron_cols;
const ranks = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'];

/**
 * @param {number} delta
 * @returns {string}
 */
function get_delta_desc(delta) {
  delta *= 2.5;
  if (delta < 0.2) {
    return '鼻差';
  } else if (delta < 0.4) {
    return '头差';
  } else if (delta < 0.6) {
    return '颈差';
  } else {
    let temp;
    switch (Math.round((delta * 4) / 2.5)) {
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
        temp = Math.round(delta / 2.5);
        if (temp >= 10) {
          return '大差';
        }
        return `${temp} 马身`;
    }
  }
}

/**
 * @param {PseudoUma} uma
 * @param {number} event_id
 * @param {string} timer_record
 */
function get_event_record(uma, event_id, timer_record) {
  return {
    config: { align: 'left' },
    content: [
      timer_record,
      ' ',
      { color: uma.color, content: uma.name, fontWeight: 'bold' },
      ' ',
      { content: race_event_names[event_id] },
    ],
    timer: 5 * 15,
    type: 'text',
  };
}

/**
 * @param {PseudoUma} uma
 * @param {number} s_id
 * @param {string} timer_record
 */
function get_skill_record(uma, s_id, timer_record) {
  return {
    config: { align: 'right' },
    content: [
      ...skills_dict[s_id].get_colored_name(),
      ' ',
      { color: uma.color, content: uma.name, fontWeight: 'bold' },
      ' ',
      timer_record,
    ],
    timer: 5 * 15,
    type: 'text',
  };
}

/**
 * @param {number} minutes
 * @param {number} seconds
 * @returns {string}
 */
function get_timer_record(minutes, seconds) {
  return `${minutes ? `${minutes}'` : ''}${
    minutes
      ? `${Math.round(seconds / 15)
          .toString()
          .padStart(2, '0')}`
      : (seconds / 15).toFixed(1)
  }"`;
}

/**
 * @param {PseudoUma[]} contestants
 * @param {{events:number[][][],loc:[number,string,number][][],skill:number[][][],speed:number[][],stamina:number[][]}} records
 * @param {RaceInfo} info
 */
async function page_race_result(contestants, records, info) {
  era.printMultiColumns([
    { type: 'divider' },
    {
      accelerator: 0,
      config: { width: 6, align: 'center' },
      content: '查看结果',
      type: 'button',
    },
    {
      accelerator: 1,
      config: { width: 6, align: 'center' },
      content: '一倍速观看',
      type: 'button',
    },
    {
      accelerator: 2,
      config: { width: 6, align: 'center' },
      content: '二倍速观看',
      type: 'button',
    },
    {
      accelerator: 3,
      config: { width: 6, align: 'center' },
      content: '四倍速观看',
      type: 'button',
    },
  ]);
  const report_buffer = [],
    skill_buffer = [];
  let flag_result = true;

  /**
   * @param {number} interval
   */
  async function show_result(interval) {
    era.setAlign('center');
    const contestant_timer = contestants.map(() => {
        return new Array(Math.floor(info.span / 200)).fill('');
      }),
      contestant_timer_index = contestants.map(() => 0),
      header = new Array(Math.floor(info.span / 200) - 1)
        .fill(0)
        .map((_, i) => (info.span % 200) + (i + 1) * 200),
      total_time = contestants.map(() => '');

    const record_timer = [0, 0];
    let timer = 0;

    function add_timer() {
      ++timer;
      if (++record_timer[1] === 60 * 15) {
        ++record_timer[0];
        record_timer[1] = 0;
      }
    }

    while (flag_result && timer < records.loc.length) {
      const timer_record = get_timer_record(...record_timer);
      contestants.forEach((uma) => {
        const location = records.loc[timer][uma.index_race][0];
        if (location >= info.span) {
          if (!total_time[uma.index_race]) {
            total_time[uma.index_race] = timer_record;
          }
        } else {
          if (
            contestant_timer_index[uma.index_race] < header.length &&
            location >= header[contestant_timer_index[uma.index_race]]
          ) {
            contestant_timer[uma.index_race][
              contestant_timer_index[uma.index_race]
            ] = timer_record;
            contestant_timer_index[uma.index_race]++;
          }
        }
      });
      const timer_start = Math.max(
          Math.min(
            median(contestant_timer_index) - 1,
            header.length - fron_cols,
          ),
          0,
        ),
        timer_end = timer_start + fron_cols;
      const buffer = [],
        top_loc = Math.min(
          Math.max(...records.loc[timer].map((e) => e[0])),
          info.span,
        ),
        bottom_loc = Math.min(...records.loc[timer].map((e) => e[0])),
        contestants_span = top_loc - bottom_loc || 1;
      sort_list(
        contestants,
        (e) => records.loc[timer][e.index_race][0],
      ).forEach((uma) => {
        const loc = records.loc[timer][uma.index_race],
          diff = loc[0] > info.span ? 0 : top_loc - loc[0],
          inContent = [
            diff ? `-${diff.toFixed(1)}m` : '头马',
            `(${Math.round(loc[0]).toLocaleString()}m`,
            loc[1],
            loc[2] > 0 ? '上坡' : loc[2] < 0 ? '下坡' : undefined,
            ')',
          ]
            .filter((e) => e)
            .join(' ');
        buffer.push({
          columns: [
            {
              config: { width: 1 },
              content: (uma.index_race + 1).toString(),
              type: 'text',
            },
            {
              config: {
                width: 4,
                color: uma.color,
                fontWeight: 'bold',
              },
              content: uma.name,
              type: 'text',
            },
            {
              config: { width: 1 },
              content: adaptability_names[6 + uma.style].charAt(0),
              type: 'text',
            },
            ...contestant_timer[uma.index_race]
              .slice(timer_start, timer_end)
              .map((e) => {
                return { config: { width: 2 }, content: e, type: 'text' };
              }),
            {
              config: { width: 2 },
              content:
                loc[0] >= info.span
                  ? total_time[uma.index_race]
                  : [records.speed[timer][uma.index_race].toFixed(1), 'm/s'],
              type: 'text',
            },
            loc[0] >= info.span
              ? {
                  config: { width: progress_width },
                  content: `${uma.rank.curr} 着${uma.rank.curr <= 4 && uma.rank.curr < contestants.length ? ` · ${get_delta_desc(uma.race.conditionParams.bashin_diff_behind)}` : ''}`,
                  type: 'text',
                }
              : {
                  config: {
                    color: uma.color,
                    fontColor: 'black',
                    height: 22,
                    width: progress_width,
                  },
                  inContent,
                  percentage:
                    diff === contestants_span
                      ? 0
                      : 100 - (diff * 100) / contestants_span,
                  type: 'progress',
                },
          ],
          key: loc[0],
        });
        records.events[timer][uma.index_race].forEach((e_id) =>
          report_buffer.push(get_event_record(uma, e_id, timer_record)),
        );
        records.skill[timer][uma.index_race].forEach((s_id) =>
          skill_buffer.push(get_skill_record(uma, s_id, timer_record)),
        );
      });
      report_buffer
        .filter((e) => e.timer > 0 && e.timer--)
        .filter((_, i, l) => i < l.length - 5)
        .forEach((e) => (e.timer = -1));
      skill_buffer
        .filter((e) => e.timer > 0 && e.timer--)
        .filter((_, i, l) => i < l.length - 5)
        .forEach((e) => (e.timer = -1));
      (timer ? era.replaceInColRows : era.printInColRows)(
        [
          { type: 'divider' },
          {
            config: {
              width: 8,
            },
            content: ['计时器：', timer_record],
            type: 'text',
          },
          top_loc === info.span
            ? { config: { width: 8 }, content: '结束！', type: 'text' }
            : {
                config: {
                  barWidth: 20,
                  height: 22,
                  width: 8,
                },
                inContent: `${Math.round(top_loc).toLocaleString()}m/${info.span.toLocaleString()}m (${((100 * top_loc) / info.span).toFixed(2)}%)`,
                percentage: (100 * top_loc) / info.span,
                outContent: '进度',
                type: 'progress',
              },
          timer !== records.loc.length - 1
            ? {
                accelerator: 0,
                config: { disableWarning: true, width: 8 },
                content: '快进到结果',
                type: 'button',
              }
            : { config: { width: 8 }, content: '', type: 'text' },
          { content: '', type: 'text' },
          { config: { width: 1 }, content: '号码', type: 'text' },
          { config: { width: 4 }, content: '名字', type: 'text' },
          { config: { width: 1 }, content: '跑法', type: 'text' },
          ...header.slice(timer_start, timer_end).map((e) => {
            return {
              config: { width: 2 },
              content: e.toLocaleString(),
              type: 'text',
            };
          }),
          { config: { width: 2 }, content: '速度', type: 'text' },
          {
            config: { width: progress_width },
            content: '相对位置',
            type: 'text',
          },
        ],
        ...sort_list(buffer, (e) => e.key),
        [{ content: [{ isBr: true }], type: 'text' }],
        {
          columns: report_buffer.filter((e) => e.timer > 0),
          config: { width: 12 },
        },
        {
          columns: skill_buffer.filter((e) => e.timer > 0),
          config: { width: 12 },
        },
      );
      await era.delay(interval);
      add_timer();
    }
    while (timer < records.loc.length) {
      const timer_record = get_timer_record(...record_timer);
      sort_list(
        contestants,
        (e) => records.loc[timer][e.index_race][0],
      ).forEach((uma) => {
        records.events[timer][uma.index_race].forEach((e_id) =>
          report_buffer.push(get_event_record(uma, e_id, timer_record)),
        );
        records.skill[timer][uma.index_race].forEach((s_id) =>
          skill_buffer.push(get_skill_record(uma, s_id, timer_record)),
        );
      });
      add_timer();
    }
  }
  let interval = 0;
  switch (await era.input()) {
    case 0:
      flag_result = false;
      break;
    case 1:
      interval = 1000 / 15;
      break;
    case 2:
      interval = 500 / 15;
      break;
    case 3:
      interval = 250 / 15;
  }
  if (interval) {
    await era.clear();
    era.input().then(() => (flag_result = false));
  }
  await show_result(interval);
  let flag_charts = 1;
  flag_result && (await era.waitAnyKey());
  const labels = new Array(Math.ceil((records.loc.length + 1) / 15))
      .fill(0)
      .map((_, i) => get_timer_record(Math.floor(i / 60), (i * 15) % 900)),
    options = {
      fill: false,
      interaction: { intersect: false },
      radius: 0,
      responsive: true,
    },
    top_locations = records.loc.map((r) =>
      Math.max(...r.map((e) => Math.min(e[0], info.span))),
    );
  while (flag_charts > 0) {
    await era.clear();
    era.setAlign('center');
    flag_charts !== 99 &&
      era.printMultiColumns(
        [
          { type: 'divider' },
          ...[
            '揭示板',
            '相对位置统计',
            '速度统计',
            '体力统计',
            '发动技能统计',
            '比赛日志',
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { width: 4 },
            content: e,
            type: 'button',
          })),
          { accelerator: 99, content: '结束', type: 'button' },
        ],
        { horizontalAlign: 'space-evenly' },
      );
    era.setAlign('left');
    switch (flag_charts) {
      case 1:
      case 99:
        era.setAlign('left');
        era.printInColRows(
          {
            columns: [
              { type: 'divider' },
              {
                config: { align: 'center' },
                content: [
                  track_names[info.track],
                  '竞马场 ',
                  info.get_colored_name_with_class(),
                  { isBr: true },
                  { isBr: true },
                ],
                type: 'text',
              },
            ],
            config: { width: 6, offset: 9 },
          },
          ...sort_list(contestants, (e) => e.rank.curr, true)
            .slice(0, 5)
            .map((uma, i, l) => {
              return {
                columns: [
                  {
                    config: { align: 'center', width: 4 },
                    content: ranks[i],
                    type: 'text',
                  },
                  {
                    config: {
                      align: 'center',
                      width: 4,
                    },
                    content: [
                      { color: buff_colors[1], content: '[' },
                      {
                        color: uma.color,
                        content: (uma.index_race + 1).toString(),
                        fontWeight: 'bold',
                      },
                      { color: buff_colors[1], content: ']' },
                    ],
                    type: 'text',
                  },
                  {
                    config: {
                      offset: 9,
                      width: 12,
                    },
                    content:
                      i < l.length - 1
                        ? [
                            '> [',
                            {
                              color: buff_colors[1],
                              content: get_delta_desc(
                                uma.race.conditionParams.bashin_diff_behind,
                              ),
                              fontWeight: 'bold',
                            },
                            ']',
                          ]
                        : [],
                    type: 'text',
                  },
                ],
                config: { width: 6, offset: 10 },
              };
            }),
          {
            columns: [{ type: 'divider' }],
            config: { width: 6, offset: 9 },
          },
        );
        break;
      case 2:
        era.printMultiColumns([
          { type: 'divider' },
          {
            config: {
              align: 'center',
              fontSize: '1.5rem',
            },
            content: '与头马相对位置统计图',
            type: 'text',
          },
        ]);
        era.printLineChart({
          data: {
            datasets: contestants.map((e) => ({
              borderColor: get_chara_color(e.index_chara),
              data: records.loc
                .map((r, i) =>
                  (
                    Math.min(r[e.index_race][0], info.span) - top_locations[i]
                  ).toFixed(1),
                )
                .filter((_, i) => i % 15 === 0),
              label: e.name,
              stepped: false,
            })),
            labels,
          },
          options,
        });
        break;
      case 3:
        era.printMultiColumns([
          { type: 'divider' },
          {
            config: {
              align: 'center',
              fontSize: '1.5rem',
            },
            content: '速度统计图',
            type: 'text',
          },
        ]);
        era.printLineChart({
          data: {
            datasets: contestants.map((e) => ({
              borderColor: get_chara_color(e.index_chara),
              data: records.speed
                .map((r) => r[e.index_race].toFixed(1))
                .filter((_, i) => i % 15 === 0),
              label: e.name,
              stepped: false,
            })),
            labels,
          },
          options,
        });
        break;
      case 4:
        era.printMultiColumns([
          { type: 'divider' },
          {
            config: {
              align: 'center',
              fontSize: '1.5rem',
            },
            content: '体力统计图',
            type: 'text',
          },
        ]);
        era.printLineChart({
          data: {
            datasets: contestants.map((e) => ({
              borderColor: get_chara_color(e.index_chara),
              data: records.stamina
                .map((r) => r[e.index_race].toFixed(1))
                .filter((_, i) => i % 15 === 0),
              label: e.name,
              stepped: false,
            })),
            labels,
          },
          options,
        });
        break;
      case 5:
        era.printMultiColumns([
          { type: 'divider' },
          {
            config: {
              align: 'center',
              fontSize: '1.5rem',
            },
            content: '发动技能统计',
            type: 'text',
          },
        ]);
        era.printLineChart({
          data: {
            datasets: contestants.map((e) => {
              let skill_count = 0;
              return {
                borderColor: get_chara_color(e.index_chara),
                data: records.skill
                  .map((r) => {
                    skill_count += r[e.index_race].length;
                    return skill_count;
                  })
                  .filter((_, i) => i % 15 === 0),
                label: e.name,
                stepped: false,
              };
            }),
            labels,
          },
          options: { ...options, scales: { y: { suggestedMin: 0 } } },
        });
        break;
      case 6:
        era.printInColRows(
          [
            { type: 'divider' },
            {
              config: {
                align: 'center',
                fontSize: '1.5rem',
              },
              content: '比赛日志',
              type: 'text',
            },
          ],
          { columns: report_buffer, config: { width: 12 } },
          { columns: skill_buffer, config: { width: 12 } },
        );
    }
    flag_charts = flag_charts !== 99 && (await era.input());
  }
}

module.exports = page_race_result;
