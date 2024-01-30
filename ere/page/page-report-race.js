const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_infos } = require('#/data/race/race-const');

async function report_race_page() {
  era.clear();
  const cur_round = era.get('flag:当前回合数') - 1,
    begin_round = cur_round - (cur_round % 4);
  const dict = {};
  sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
    .filter((chara_id) => era.get(`cflag:${chara_id}:种族`))
    .forEach((chara_id) => {
      const tmp = sys_reg_race(chara_id).curr;
      if (tmp.week <= begin_round + 12) {
        (dict[tmp.week] || (dict[tmp.week] = [])).push({
          id: chara_id,
          race: tmp.race,
        });
      }
    });
  era.printInColRows(
    [
      { type: 'divider' },
      {
        config: { align: 'center' },
        content: '比赛出走预定',
        type: 'text',
      },
    ],
    ...new Array(12)
      .fill(0)
      .map((_, i) => begin_round + i)
      .map((round) => {
        const year = Math.floor(round / 48),
          month = Math.floor((round - year * 48) / 4),
          week = round - year * 48 - month * 4,
          date_str = `${2000 + year} 年 ${month + 1} 月 第 ${week + 1} 周`;
        /** @type {*[]} */
        const columns = [
          { config: { offset: 1, width: 22 }, type: 'divider' },
          {
            config: {
              align: 'center',
              fontWeight: cur_round === round ? 'bold' : undefined,
            },
            content: cur_round === round ? `[${date_str}]` : date_str,
            type: 'text',
          },
        ];
        (dict[round + 1] || []).forEach((race) => {
          columns.push({
            config: { offset: 1, width: 22, align: 'center' },
            content: [
              get_chara_talk(race.id).get_colored_name(),
              ' ',
              race_infos[race.race].get_colored_name_with_class(),
            ],
            type: 'text',
          });
        });
        return {
          columns,
          config: { width: 6 },
        };
      }),
    [
      { type: 'divider' },
      {
        accelerator: 999,
        config: { align: 'center' },
        content: '返回上一级',
        type: 'button',
      },
    ],
  );
  await era.input();
}

module.exports = report_race_page;
