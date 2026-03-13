const era = require('#/era-electron');

const {
  add_timer,
  get_bashin_desc,
  get_timer_record,
} = require('#/system/race/snippets');
const sys_sim_race = require('#/system/race/sys-simulate-race');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');

const { get_track_full_name } = require('#/page/race/get-track-name');

const { sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { class_enum } = require('#/data/race/model/race-info');
const { frame_rate } = require('#/data/race/race-sim-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

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
        content: i18n().ui_race_speed_1,
        type: 'button',
      },
      {
        accelerator: 2,
        config: { width: 8, align: 'center' },
        content: i18n().ui_race_speed_2,
        type: 'button',
      },
      {
        accelerator: 3,
        config: { width: 6, align: 'center' },
        content: i18n().ui_race_speed_4,
        type: 'button',
      },
      {
        accelerator: 4,
        config: {
          align: 'center',
          buttonType: sum ? 'warning' : 'info',
          width: 8,
        },
        content: i18n().ui_race_few_contestants,
        type: 'button',
      },
      {
        accelerator: 0,
        config: { align: 'center', width: 8 },
        content: i18n().ui_race_skip_race,
        type: 'button',
      },
    ]);
    switch ((interval = await era.input())) {
      case 0:
        flag_res = false;
        break;
      case 1:
        interval = (1000 * 1.25) / frame_rate;
        break;
      case 2:
        interval = (500 * 1.2) / frame_rate;
        break;
      case 3:
        interval = 250 / frame_rate;
        break;
      case 4:
        era.set('flag:比赛缩略显示', +(sum = !sum));
    }
    if (interval !== 4) {
      flag_s = false;
    }
  }

  const audio_list = [
    `音效_比赛_${i18n('zh-CN').race[info.id]}`,
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
    contestants.some((e) => e.legend === 2) &&
    contestants.find((e) => !e.legend && e.rank.curr === 1)?.index_chara >= 0
  ) {
    era.setOverlay('滤镜_强敌击退');
    era.playMusic('音效_强敌击退');
    await era.waitAnyKey();
    era.setOverlay();
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
          ...di18n.race_result_statistics.map((e, i) => ({
            accelerator: i + 1,
            config: { width: 4 },
            content: e,
            type: 'button',
          })),
          { accelerator: 99, content: i18n().ui_end, type: 'button' },
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
                  ...(info.track !== void 0
                    ? i18n().get_ui_race_result_summary_header(
                        get_track_full_name(info.track),
                        info.get_colored_name_with_class(),
                      )
                    : [info.name]),
                  { isBr: 2 },
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
            content: i18n().ui_race_result_location_header,
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
            content: i18n().ui_race_result_speed_header,
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
            content: i18n().ui_race_result_endurance_header,
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
            content: i18n().ui_race_result_skills,
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
              content: i18n().ui_race_result_log,
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
        const tmp = era.get(`equip:${cid}:${5 + i}`);
        if (tmp > 0) {
          era.set(`equip:${cid}:${5 + i}`, 0);
          era.add(`item:${tmp}`, 1 + (i === 0));
          return p + 1;
        }
        return p;
      }, 0);
      sys_change_lust(cid, get_random_value(400, 600) * count);
    }
  }
}

module.exports = page_race_result;
