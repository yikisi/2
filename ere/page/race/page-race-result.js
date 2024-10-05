const era = require('#/era-electron');

const {
  add_timer,
  get_bashin_desc,
  get_timer_record,
} = require('#/system/race/snippets');
const sys_sim_race = require('#/system/race/sys-simulate-race');

const { sort_list } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { track_names } = require('#/data/race/model/race-info');

const ranks = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'],
  default_options = {
    fill: false,
    interaction: { intersect: false },
    radius: 0,
    responsive: true,
  },
  skill_record_time_window = 5,
  report_record_time_window = 15,
  max_records_num = 5;

/**
 * @param {PseudoUma[]} contestants
 * @param {RaceInfo} info
 * @param {number} [race_id]
 */
async function page_race_result(contestants, info, race_id) {
  const result = sys_sim_race(contestants, info, race_id);
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
    let index = 0,
      timer = 0;

    while (flag_result && index < result.dynamic_table.length) {
      let report_count = max_records_num,
        skill_count = max_records_num;
      (index ? era.replaceInColRows : era.printInColRows)(
        ...result.dynamic_table[index],
        [{ content: [{ isBr: true }], type: 'text' }],
        {
          columns: result.buffer.report.filter(
            (e) =>
              timer >= e.timer &&
              timer < e.timer + report_record_time_window &&
              report_count-- > 0,
          ),
          config: { width: 16 },
        },
        {
          columns: result.buffer.skill.filter(
            (e) =>
              timer >= e.timer &&
              timer < e.timer + skill_record_time_window &&
              skill_count-- > 0,
          ),
          config: { width: 8 },
        },
      );
      await era.delay(interval);
      index++;
      timer = add_timer(timer);
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
  const labels = new Array(result.statistics.loc[0].data.length)
      .fill(0)
      .map((_, i) => get_timer_record(i)),
    speed_min = (22 - info.span / 1000) * 0.85;
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
                  ...(info.track !== undefined
                    ? [
                        track_names[info.track],
                        '竞马场 ',
                        info.get_colored_name_with_class(),
                      ]
                    : ['训练场 模拟赛']),
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
                    config: { align: 'center', width: 3 },
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
                    config: { offset: 1, width: 16 },
                    content: ['(', uma.get_colored_name(), ')'],
                    type: 'text',
                  },
                  {
                    config: {
                      offset: 8,
                      width: 12,
                    },
                    content:
                      i < l.length - 1
                        ? [
                            '|- [',
                            {
                              color: buff_colors[1],
                              content: get_bashin_desc(
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
            datasets: result.statistics.loc,
            labels,
          },
          options: default_options,
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
            datasets: result.statistics.speed,
            labels,
          },
          options: {
            ...default_options,
            scales: { y: { suggestedMin: speed_min } },
          },
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
            datasets: result.statistics.stamina,
            labels,
          },
          options: default_options,
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
            datasets: result.statistics.skill,
            labels,
          },
          options: { ...default_options, scales: { y: { suggestedMin: 0 } } },
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
          { columns: result.buffer.report, config: { width: 16 } },
          { columns: result.buffer.skill, config: { width: 8 } },
        );
    }
    flag_charts = flag_charts !== 99 && (await era.input());
  }
}

module.exports = page_race_result;
