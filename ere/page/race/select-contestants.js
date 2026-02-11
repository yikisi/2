const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const get_display_name = require('#/utils/calc-display-name');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {number} race
 * @returns {Promise<number[]>}
 */
async function select_contestants(race) {
  if (race === race_enum.begin_race) {
    return [era.get('flag:当前互动角色')];
  }
  const registered_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter((e) => sys_reg_race(e).curr.race === race),
    contestants = registered_list.filter((e) => sys_check_race_ready(e));
  const dict = {};
  let ret = contestants;
  ret.forEach((e) => (dict[e] = true));
  if (contestants.length > 1) {
    const cur_line = era.getLineCount();
    let contestant_count = contestants.length,
      flag = true;
    while (flag) {
      await era.clear(era.getLineCount() - cur_line);
      era.drawLine();
      era.printInColRows(
        [
          {
            content: [
              '下列队伍成员登记出走了 ',
              race_infos[race].get_colored_name_with_class(),
              '，要要求避战吗？',
            ],
            type: 'text',
          },
        ],
        contestants.map((e) => {
          return {
            accelerator: e,
            config: {
              align: 'center',
              buttonType: dict[e] ? 'warning' : 'info',
              width: 8,
            },
            content: `${get_display_name(era.get(`callname:${e}:-1`))} [${
              dict[e] ? '出走' : '避战'
            }]`,
            type: 'button',
          };
        }),
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
        flag = false;
      } else {
        dict[select] ? contestant_count-- : contestant_count++;
        dict[select] = !dict[select];
      }
    }
    ret = Object.entries(dict)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  }
  registered_list.forEach((e) => {
    if (dict[e]) {
      era.set(`cflag:${e}:自主训练`, 0);
    } else {
      sys_reg_race(e).curr = { race: -1, week: -1 };
    }
  });
  return ret;
}

module.exports = select_contestants;
