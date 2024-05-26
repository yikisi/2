const era = require('#/era-electron');

const { median, sort_list } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const { track_names } = require('#/data/race/model/race-info');

const fron_cols = 5;
const ranks = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'];

/**
 * @param {number} delta
 * @returns {string}
 */
function get_delta_desc(delta) {
  if (delta < 0.2) {
    return '鼻差';
  } else if (delta < 0.4) {
    return '头差';
  } else if (delta < 0.6) {
    return '颈差';
  } else {
    let temp;
    switch (Math.round((delta * 4) / 2.4)) {
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
        temp = Math.round(delta / 2.4);
        if (temp >= 10) {
          return '大差';
        }
        return `${temp} 马身`;
    }
  }
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
 * @param {{acc:number[][],loc:number[][],skill:[][],speed:number[][],stamina:number[][]}} records
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
    while (flag_result && timer < records.loc.length) {
      contestants.forEach((uma) => {
        if (records.loc[timer][uma.index_race] >= info.span) {
          if (!total_time[uma.index_race]) {
            total_time[uma.index_race] = get_timer_record(...record_timer);
          }
        } else {
          if (
            contestant_timer_index[uma.index_race] < header.length &&
            records.loc[timer][uma.index_race] >=
              header[contestant_timer_index[uma.index_race]]
          ) {
            contestant_timer[uma.index_race][
              contestant_timer_index[uma.index_race]
            ] = get_timer_record(...record_timer);
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
      const buffer = contestants.map((uma) => {
        const color = get_chara_color(uma.index_chara);
        return {
          columns: [
            {
              config: { width: 1 },
              content: (uma.index_race + 1).toString(),
              type: 'text',
            },
            {
              config: {
                width: 3,
                color,
                fontWeight: 'bold',
              },
              content: uma.name,
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
                records.loc[timer][uma.index_race] >= info.span
                  ? total_time[uma.index_race]
                  : `${records.speed[timer][uma.index_race].toFixed(1)}m/s`,
              type: 'text',
            },
            records.loc[timer][uma.index_race] >= info.span
              ? {
                  config: { width: 24 - 6 - 2 * fron_cols },
                  content: `${uma.rank.curr} 着${uma.rank.curr <= 4 && uma.rank.curr < contestants.length ? ` · ${get_delta_desc(uma.diff.behind)}` : ''}`,
                  type: 'text',
                }
              : {
                  config: {
                    color,
                    fontColor: 'black',
                    height: 22,
                    width: 24 - 6 - 2 * fron_cols,
                  },
                  inContent: `${Math.round(records.loc[timer][uma.index_race]).toLocaleString()}m (${(
                    (records.loc[timer][uma.index_race] * 100) /
                    info.span
                  ).toFixed(2)}%)`,
                  percentage:
                    (records.loc[timer][uma.index_race] * 100) / info.span,
                  type: 'progress',
                },
          ],
          key: records.loc[timer][uma.index_race],
        };
      });
      (timer ? era.replaceInColRows : era.printInColRows)(
        [
          { type: 'divider' },
          {
            content: ['计时器：', get_timer_record(...record_timer)],
            type: 'text',
          },
          { config: { width: 1 }, content: '号码', type: 'text' },
          { config: { width: 3 }, content: '名字', type: 'text' },
          ...header.slice(timer_start, timer_end).map((e) => {
            return {
              config: { width: 2 },
              content: e.toLocaleString(),
              type: 'text',
            };
          }),
          { config: { width: 2 }, content: '速度', type: 'text' },
          {
            config: { width: 24 - 6 - 2 * fron_cols },
            content: '进度',
            type: 'text',
          },
        ],
        ...sort_list(buffer, (e) => e.key),
        [
          {
            accelerator: 0,
            config: { disableWarning: true },
            content: '快进到结果',
            type: 'button',
          },
        ],
      );
      await era.delay(interval);
      timer++;
      if (++record_timer[1] === 60 * 15) {
        record_timer[0]++;
        record_timer[1] = 0;
      }
    }
    await era.clear();
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
                  '[',
                  {
                    color: buff_colors[1],
                    content: (uma.index_race + 1).toString(),
                    fontWeight: 'bold',
                  },
                  ']',
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
                          content: get_delta_desc(uma.diff.behind),
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
    await era.waitAnyKey();
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
  const labels = new Array(Math.ceil((records.loc.length + 1) / 15))
      .fill(0)
      .map((_, i) => get_timer_record(Math.floor(i / 60), i * 15)),
    options = {
      fill: false,
      interaction: { intersect: false },
      radius: 0,
      responsive: true,
    };
  era.print('位置图');
  era.printLineChart({
    data: {
      datasets: contestants.map((e) => ({
        borderColor: get_chara_color(e.index_chara),
        data: records.loc
          .map((r) => Math.min(r[e.index_race], info.span).toFixed(1))
          .filter((_, i) => i % 15 === 0),
        label: e.name,
        stepped: false,
      })),
      labels,
    },
    options,
  });
  era.printButton('继续', 1);
  await era.input();
  era.print('速度图');
  era.printLineChart({
    data: {
      datasets: contestants.map((e) => ({
        borderColor: get_chara_color(e.index_chara),
        data: records.speed
          .map((r) => Math.min(r[e.index_race], info.span).toFixed(1))
          .filter((_, i) => i % 15 === 0),
        label: e.name,
        stepped: false,
      })),
      labels,
    },
    options,
  });
  era.printButton('继续', 1);
  await era.input();
  era.print('加速度图');
  era.printLineChart({
    data: {
      datasets: contestants.map((e) => ({
        borderColor: get_chara_color(e.index_chara),
        data: records.acc
          .map((r) => Math.min(r[e.index_race], info.span).toFixed(1))
          .filter((_, i) => i % 15 === 0),
        label: e.name,
        stepped: false,
      })),
      labels,
    },
    options,
  });
  era.printButton('继续', 1);
  await era.input();
  era.print('体力图');
  era.printLineChart({
    data: {
      datasets: contestants.map((e) => ({
        borderColor: get_chara_color(e.index_chara),
        data: records.stamina
          .map((r) => Math.min(r[e.index_race], info.span).toFixed(1))
          .filter((_, i) => i % 15 === 0),
        label: e.name,
        stepped: false,
      })),
      labels,
    },
    options,
  });
  era.printButton('继续', 1);
  await era.input();
}

module.exports = page_race_result;
