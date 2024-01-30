const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_infos, race_enum } = require('#/data/race/race-const');

/**
 * @param {number} race
 */
async function select_contestants(race) {
  if (race === race_enum.begin_race) {
    return [era.get('flag:当前互动角色')];
  }
  const contestants = sys_filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).filter(
    (e) => sys_reg_race(e).curr.race === race && sys_check_race_ready(e),
  );
  let ret = contestants;
  if (contestants.length > 1) {
    let flag_select_contestants = true;
    const dict = {};
    ret.forEach((e) => (dict[e] = true));
    let contestant_count = contestants.length;
    while (flag_select_contestants) {
      era.clear();
      era.printInColRows(
        [
          { type: 'divider' },
          {
            content: [
              '下列队伍成员登记出走了 ',
              race_infos[race].get_colored_name_with_class(),
              '，要要求避战吗？',
            ],
            type: 'text',
          },
        ],
        {
          columns: contestants.map((e) => {
            return {
              accelerator: e,
              config: {
                align: 'center',
                buttonType: dict[e] ? 'warning' : 'info',
                width: 6,
              },
              content: `${era.get(`callname:${e}:-1`)} [${
                dict[e] ? '出走' : '避战'
              }]`,
              type: 'button',
            };
          }),
          config: { horizontalAlign: 'center' },
        },
        [
          {
            accelerator: 1000,
            config: { disabled: !contestant_count },
            content: '确认出走名单',
            type: 'button',
          },
        ],
      );
      const select = await era.input();
      if (select === 1000) {
        flag_select_contestants = false;
      } else {
        dict[select] ? contestant_count-- : contestant_count++;
        dict[select] = !dict[select];
      }
    }
    ret = Object.entries(dict)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  }
  return ret;
}

module.exports = select_contestants;
