const era = require('#/era-electron');

const {
  add_timer,
  get_bashin_desc,
  get_timer_record,
} = require('#/system/race/snippets');
const sys_sim_race = require('#/system/race/sys-simulate-race');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');

const { sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { item_names } = require('#/data/ero/item-const');
const { class_enum, track_names } = require('#/data/race/model/race-info');

const ranks = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'];
const default_options = {
  fill: false,
  interaction: { intersect: false },
  radius: 0,
  responsive: true,
};
const skill_record_time_window = 5;
const report_record_time_window = 15;
const max_records_num = 5;

/**
 * @param {PseudoUma[]} contestants
 * @param {RaceInfo} info
 * @param {number} [race_id]
 */
async function page_race_result(contestants, info, race_id) {
  const result = sys_sim_race(contestants, info, race_id);
  let sum = era.get('flag:比赛缩略显示') > 0;
  let flag_s = true;
  let flag_res = true;
  const curr = era.getLineCount();
  let interval = 0;
  while (flag_s) {
    await era.clear(era.getLineCount() - curr);
    era.printMultiColumns([
      { type: 'divider' },
      {
        accelerator: 1,
        config: { width: 8, align: 'center' },
        content: '一倍速观看',
        type: 'button',
      },
      {
        accelerator: 2,
        config: { width: 8, align: 'center' },
        content: '二倍速观看',
        type: 'button',
      },
      {
        accelerator: 8,
        config: { width: 6, align: 'center' },
        content: '四倍速观看',
        type: 'button',
      },
      {
        accelerator: 4,
        config: {
          align: 'center',
          buttonType: sum ? 'warning' : 'info',
          width: 8,
        },
        content: '减少参赛选手显示',
        type: 'button',
      },
      {
        accelerator: 0,
        config: { align: 'center', width: 8 },
        content: '查看结果',
        type: 'button',
      },
    ]);
    switch ((interval = await era.input())) {
      case 0:
        flag_res = false;
        break;
      case 1:
        interval = (1000 * 1.25) / 15;
        break;
      case 2:
        interval = (500 * 1.2) / 15;
        break;
      case 3:
        interval = 250 / 15;
        break;
      case 4:
        era.set('flag:比赛缩略显示', +(sum = !sum));
    }
    if (interval !== 4) {
      flag_s = false;
    }
  }

  const audio_list = [
    `音效_比赛_${info.name_zh}`,
    `音效_比赛_${Object.keys(class_enum)[Math.min(info.race_class, 3)]}`,
  ];

  /**
   * @param {number} inter
   */
  async function show_result(inter) {
    era.setAlign('center');
    let index = 0;
    let timer = 0;
    let l_index = result.dynamic_table.findIndex(
      (e) => e[0][2].percentage > 1600 / 24,
    );
    let c_line = era.getLineCount();

    era.playMusic(audio_list);

    while (flag_res && index < result.dynamic_table.length) {
      let table = result.dynamic_table[index];
      if (sum) {
        table = table.slice(0, 5);
      }
      let report_count = max_records_num;
      let skill_count = max_records_num;
      if (--l_index === 0) {
        era.playMusic(
          audio_list.map((e) => `${e}_终`),
          { fade: true, fadeInternal: 100 },
        );
      }
      c_line = (index > 0 ? era.replaceInColRows : era.printInColRows)(
        ...table,
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
      await era.delay(inter);
      index++;
      timer = add_timer(timer);
    }
    await era.clear(era.getLineCount() - c_line);
    era.replaceInColRows(
      ...result.dynamic_table.at(-1),
      [{ content: [{ isBr: true }], type: 'text' }],
      {
        columns: [result.buffer.report[0]],
        config: { width: 16 },
      },
    );
  }

  if (interval > 0) {
    await era.clear();
    era.input({ show: false, hideInput: true }).then(() => (flag_res = false));
    await show_result(interval);
  }
  let flag_cha = 1;
  if (
    contestants.findIndex((e) => e.legend === 2) !== -1 &&
    contestants.find((e) => !e.legend && e.rank.curr === 1)?.index_chara >= 0
  ) {
    era.setMask('滤镜_强敌击退');
    era.playMusic('音效_强敌击退');
    await era.waitAnyKey();
    era.setMask();
  } else {
    era.stopMusic();
  }
  if (interval > 0) {
    await era.waitAnyKey();
  }
  const mvp = Math.min(
    ...contestants
      .filter((e) => e.index_chara >= 0 && !e.legend)
      .map((e) => e.rank.curr),
  );
  era.playMusic(`音效_结果_${mvp === 1 ? '1着' : mvp <= 5 ? '入着' : '失败'}`);
  const labels = new Array(result.statistics.loc[0].data.length)
    .fill(0)
    .map((_, i) => get_timer_record(i));
  const speed_min = (22 - info.span / 1000) * 0.85;
  const on_board_list = sort_list(contestants, (e) => e.rank.curr, true).slice(
    0,
    5,
  );
  while (flag_cha > 0) {
    await era.clear();
    era.setAlign('center');
    if (flag_cha !== 99) {
      era.printMultiColumns(
        [
          { type: 'divider' },
          ...[
            '揭示板',
            '相对位置统计',
            '速度统计',
            '持久力统计',
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
    }
    era.setAlign('left');
    switch (flag_cha) {
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
                    : [`训练场 ${info.name_zh}`]),
                  { isBr: true },
                  { isBr: true },
                ],
                type: 'text',
              },
            ],
            config: { width: 6, offset: 9 },
          },
          ...on_board_list.map((uma, i, l) => {
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
            content: '持久力统计图',
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
    flag_cha = flag_cha !== 99 && (await era.input());
  }
  era.stopMusic();
  for (const uma of contestants) {
    const { index_chara: cid } = uma;
    if (uma.race.conditionParams.item === 1) {
      const count = new Array(5).fill(void 0).reduce((p, _, i) => {
        const tmp = era.get(`equip:${cid}:${i + 5}`);
        if (tmp > 0) {
          era.set(`equip:${cid}:${i + 5}`, 0);
          era.add(`item:${item_names[tmp]}`, 1 + (i === 0));
          return p + 1;
        }
        return p;
      }, 0);
      sys_change_lust(cid, get_random_value(400, 600) * count);
    }
  }
}

module.exports = page_race_result;
