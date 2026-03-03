const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_check_awake,
  sys_check_race_ready,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const race_page = require('#/page/page-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_date } = require('#/data/date-indicator');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

async function report_race_page() {
  await era.clear();
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
        content: i18n().ui_race_report_header,
        type: 'text',
      },
    ],
    ...new Array(12)
      .fill(0)
      .map((_, i) => begin_round + i)
      .map((round) => {
        const year = Math.floor(round / 48);
        const month = Math.floor((round - year * 48) / 4);
        const week = round - year * 48 - month * 4;
        const date_str = get_date(2000 + year, month + 1, week + 1);
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
            config: { align: 'center', offset: 1, width: 22 },
            content: [
              get_chara_talk(race.id).get_colored_name(),
              ' ',
              race_infos[race.race].get_colored_name_with_class(),
            ],
            type: 'text',
          });
          if (cur_round === round) {
            columns.push({
              accelerator: race.id,
              config: {
                align: 'center',
                disabled: !sys_check_race_ready(race.id) || !sys_check_awake(0),
              },
              content: i18n().ui_goto_race,
              type: 'button',
            });
          }
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
        content: i18n().ui_back,
        type: 'button',
      },
    ],
  );
  const ret = await era.input();
  if (ret !== 999) {
    const cur_loc = era.get('flag:当前位置'),
      cur_chara = era.get('flag:当前互动角色');
    era.set('flag:当前位置', location_enum.race);
    era.set('flag:当前互动角色', ret);
    await race_page(sys_reg_race(ret).curr.race);
    era.set('flag:当前互动角色', cur_chara);
    era.set('flag:当前位置', cur_loc);
  }
}

module.exports = report_race_page;
