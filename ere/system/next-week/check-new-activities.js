const era = require('#/era-electron');

const sys_change_tired = require('#/system/chara/sys-change-tired');
const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_attr_and_print,
  sys_change_pressure,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const {
  adaptability_colors,
  celebration_color,
} = require('#/data/color-const');
const { slavery_enum } = require('#/data/ero/sex-mark-const');
const LocCharacters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { expedition_weeks } = require('#/data/move-const');
const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const {
  foreign_race_list,
  track2location,
} = require('#/data/race/race-location');

/**
 * @param {number} chara_id
 * @param {string} language
 * @param {number} loc
 * @param {boolean} before_race
 */
function handle_foreign_debuff(chara_id, language, loc, before_race) {
  sys_change_attr_and_print(chara_id, '体力', -200);
  sys_change_attr_and_print(chara_id, '精力', -500);
  sys_change_tired(chara_id, 2);
  era.set(
    `status:${chara_id}:语言不通`,
    Math.max(
      5 -
        era.get(`abl:${chara_id}:${language}语`) +
        era.get(`talent:${chara_id}:社交态度`),
      0,
    ),
  );
  get_custom_mec(chara_id).set_foreign_debuff(before_race, loc);
}

/**
 * @param {number} cur_round
 * @param {number[]} in_team_list
 */
async function check_new_activities(cur_round, in_team_list) {
  era.drawLine();
  const celebration = get_celebration(cur_round);
  if (celebration && era.get('flag:当前回合数') > 1) {
    era.print([
      '本周有 ',
      { content: celebration, color: celebration_color },
      '，马娘们也许有什么活动需要你关注哦',
    ]);
    era.set('cflag:0:节日事件标记', 0);
    in_team_list.forEach((chara_id) =>
      era.set(
        `cflag:${chara_id}:节日事件标记`,
        !era.get(`cflag:${chara_id}:种族`) ||
          era.get(`cflag:${chara_id}:育成回合计时`) > 47 ||
          era.get(`love:${chara_id}`) >= 60,
      ),
    );
    if (celebration === '庙会') {
      in_team_list.forEach((chara_id) =>
        era.set(
          `cflag:${chara_id}:节日事件标记`,
          era.get(`cflag:${chara_id}:节日事件标记`) &&
            era.get(`cflag:${chara_id}:位置`) === location_enum.beach,
        ),
      );
    }
  } else {
    in_team_list.forEach((chara_id) =>
      era.set(`cflag:${chara_id}:节日事件标记`, 0),
    );
  }
  if (
    era.get('flag:当前马币') > 0 &&
    era.get('flag:当前马币') + era.get('flag:收支') <= 0
  ) {
    era.print([get_chara_talk(0).get_colored_name(), ' 即将破产！']);
  }
  [0, ...in_team_list].forEach((chara_id) => {
    const registered_race = sys_reg_race(chara_id).curr;
    if (registered_race.week === cur_round) {
      era.print([
        '本周有 ',
        get_chara_talk(chara_id).get_colored_name(),
        ' 报名参加的 ',
        race_infos[registered_race.race].get_colored_name_with_class(),
      ]);
    }
  });
  const event_weeks = (cur_round - 1) % 48,
    curr_race_list = {};
  foreign_race_list.forEach((r) => {
    const { date, track } = race_infos[r];
    if (event_weeks === date - expedition_weeks) {
      curr_race_list[`${track}_1`] = [r, true];
    } else if (event_weeks === date) {
      curr_race_list[`${track}_0`] = [r, false];
    }
  });
  for (const entry of Object.values(curr_race_list)) {
    const race = entry[0],
      info = race_infos[race],
      location = track2location[info.track],
      race_colored_name =
        info.track === track_enum.shatin
          ? {
              color: adaptability_colors.at(-2 - class_enum.G1),
              content: '香港国际赛事',
              fontWeight: 'bold',
            }
          : info.get_colored_name_with_class();
    if (entry[1]) {
      // 远征开始
      let foreign_list = in_team_list
        .filter((e) => {
          return (
            race_infos[sys_reg_race(e).curr.race]?.track ===
            race_infos[race].track
          );
        })
        .map((e) => {
          return {
            hurt: era.get(`status:${e}:伤病`),
            id: e,
            pregnant: era.get(`cflag:${e}:妊娠回合计时`),
          };
        });
      const punish_list = [];
      foreign_list = foreign_list
        .filter((e) => {
          if (
            e.pregnant <
              33 -
                3 *
                  (era.get(`equip:${e.id}:淫纹奴役`) ===
                    slavery_enum.pregnant) &&
            !e.hurt
          ) {
            return true;
          }
          punish_list.push(e.id);
          return false;
        })
        .map((e) => e.id);
      era.print([race_colored_name, ' 即将举办，参赛选手们要踏上远征之路了……']);
      if (
        (era.get('cflag:343:招募状态') !== recruit_flags.yes ||
          (era.get('cflag:343:妊娠阶段') & 0b100001) > 0) &&
        location.loc === location_enum.paris &&
        !era.get('cflag:343:位置')
      ) {
        era.set('cflag:343:位置', location.loc);
      }
      if (foreign_list.length) {
        era.printMultiColumns([
          {
            content: [
              get_chara_talk(0).get_colored_name(),
              ' 的队伍中以下成员报名了这场赛事：',
            ],
            type: 'text',
          },
          ...foreign_list.map((chara_id) => {
            const chara = get_chara_talk(chara_id);
            handle_foreign_debuff(chara_id, location.lan, location.loc, true);
            sys_change_pressure(chara_id, get_random_value(2000, 3000));
            return {
              config: { align: 'center', width: 3 },
              content: [chara.get_colored_name()],
              type: 'text',
            };
          }),
        ]);
      }
      const me_in_race =
        era.get('cflag:0:种族') &&
        race_infos[sys_reg_race(0).curr.race]?.track === race_infos[race].track;
      let temp =
        era.get('flag:当前位置') === location_enum.basement ||
        era.get('cflag:0:妊娠回合计时') >= 33 ||
        (!foreign_list.length && !me_in_race);
      if (!temp) {
        era.printMultiColumns([
          {
            content: [
              '要',
              me_in_race ? '' : '陪同',
              '参加 ',
              race_colored_name,
              ' 吗？',
            ],
            type: 'text',
          },
          ...['是', '否'].map((e, i) => {
            return {
              content: e,
              type: 'button',
              accelerator: i * 100,
              config: { width: 12, align: 'center' },
            };
          }),
        ]);
        temp = await era.input();
      }
      if (!temp) {
        handle_foreign_debuff(0, location.lan, location.loc, false);
        era.set('flag:当前位置', location.loc);
        foreign_list.forEach((chara_id) =>
          sys_change_pressure(chara_id, -1000),
        );
        foreign_list.push(0);
        if (
          foreign_list.indexOf(343) === -1 &&
          era.get('cflag:343:招募状态') === recruit_flags.yes &&
          era.get('cflag:343:妊娠回合计时') < 33
        ) {
          foreign_list.push(343);
        }
      } else if (me_in_race) {
        punish_list.push(0);
      }
      if (punish_list.length) {
        era.printMultiColumns([
          { content: '这些选手的缺席让舆论界流言四起：', type: 'text' },
          ...punish_list.map((chara_id) => {
            const tmp = sys_reg_race(chara_id);
            tmp.curr.race = tmp.last.race = -1;
            tmp.curr.week = tmp.last.week = -1;
            sys_change_pressure(chara_id, get_random_value(3000, 4000));
            return {
              config: { align: 'center', width: 3 },
              content: [get_chara_talk(chara_id).get_colored_name()],
              type: 'text',
            };
          }),
        ]);
        sys_change_fame(-25 - 25 * punish_list.length);
      }
      foreign_list.forEach((chara_id) =>
        era.set(`cflag:${chara_id}:位置`, location.loc),
      );
      if (era.get('cflag:343:招募状态') === recruit_flags.yes) {
        foreign_list.forEach((chara_id) => {
          era.set(
            `status:${chara_id}:语言不通`,
            Math.ceil(era.get(`status:${chara_id}:语言不通`) / 2),
          );
          era.set(
            `status:${chara_id}:水土不服`,
            Math.ceil(era.get(`status:${chara_id}:水土不服`) / 2),
          );
          era.set(
            `status:${chara_id}:客场作战`,
            Math.ceil(era.get(`status:${chara_id}:客场作战`) / 2),
          );
        });
      }
    } else {
      // 远征结束
      era.print([
        ...(era.get('cflag:0:位置') === location.loc
          ? []
          : ['远征 ', race_colored_name, ' 的人员']),
        '回到特雷森了……',
      ]);
      in_team_list.forEach((chara_id) => {
        if (era.get(`cflag:${chara_id}:位置`) === location.loc) {
          sys_change_attr_and_print(chara_id, '体力', -100);
          sys_change_attr_and_print(chara_id, '精力', -600);
          era.set(`status:${chara_id}:语言不通`, 0);
          era.set(`status:${chara_id}:水土不服`, 0);
          era.set(`status:${chara_id}:客场作战`, 0);
          sys_change_tired(chara_id, 1);
          era.set(`cflag:${chara_id}:位置`, 0);
        }
      });
      if (era.get('cflag:0:位置') === location.loc) {
        era.set('flag:当前位置', location_enum.office);
        sys_change_attr_and_print(0, '体力', -100);
        sys_change_attr_and_print(0, '精力', -600);
        era.set('status:0:语言不通', 0);
        era.set('status:0:水土不服', 0);
        era.set('status:0:客场作战', 0);
        sys_change_tired(0, 1);
        era.set('cflag:0:位置', 0);
      }
      if (era.get('cflag:343:位置') === location.loc) {
        era.set('cflag:343:位置', 0);
      }
    }
  }
  if (event_weeks === 29 - 1) {
    // 夏合宿
    const beach_group = in_team_list.filter((chara_id) => {
      const edu_weeks = era.get(`cflag:${chara_id}:育成回合计时`);
      const flag =
        era.get(`cflag:${chara_id}:成长阶段`) >= 2 &&
        !era.get(`status:${chara_id}:伤病`) &&
        // 未处于孕期保护的可以夏合宿
        check_pregnant_unprotect(chara_id) &&
        edu_weeks < 3 * 48 &&
        edu_weeks > 48;
      flag && era.set(`cflag:${chara_id}:位置`, location_enum.beach);
      return flag;
    });
    era.print('一年一度的夏合宿从本周开始……');
    beach_group.length &&
      era.printMultiColumns([
        {
          content: [
            '今年 ',
            get_chara_talk(0).get_colored_name(),
            ' 的队伍中以下成员需要参加夏合宿：',
          ],
          type: 'text',
        },
        ...beach_group.map((chara_id) => {
          const chara = get_chara_talk(chara_id);
          sys_change_attr_and_print(chara_id, '体力', -10);
          sys_change_attr_and_print(chara_id, '精力', -400);
          return {
            config: { align: 'center', width: 3 },
            content: [chara.get_colored_name()],
            type: 'text',
          };
        }),
      ]);
    // temp大于0是不参加夏合宿，所以这里判断的是不能参加夏合宿的情况
    let temp =
      // 地下室就只能错过夏合宿了
      era.get('flag:当前位置') === location_enum.basement ||
      !check_pregnant_unprotect(0) ||
      // 要么队伍里有人要参加夏合宿，要么就是自己参加夏合宿
      (!beach_group.length && !era.get('cflag:0:种族'));
    // 条件允许，弹选项让玩家选参加不参加
    if (!temp) {
      era.printMultiColumns([
        {
          content: `要${beach_group.length ? '跟随' : ''}参加夏合宿吗？`,
          type: 'text',
        },
        ...['是', '否'].map((e, i) => {
          return {
            content: e,
            type: 'button',
            accelerator: i * 100,
            config: { width: 12, align: 'center' },
          };
        }),
      ]);
      temp = await era.input();
    }
    if (!temp) {
      era.set('cflag:0:位置', era.set('flag:当前位置', location_enum.beach));
    }
    const follow_group = in_team_list.filter((chara_id) => {
      const race = era.get(`cflag:${chara_id}:种族`),
        flag =
          era.get(`cflag:${chara_id}:位置`) !== location_enum.beach &&
          !era.get(`status:${chara_id}:伤病`) &&
          check_pregnant_unprotect(chara_id) &&
          // 和主控到达一定关系会跟着去
          ((!temp &&
            (era.get(`cflag:${chara_id}:殿堂`) || !race) &&
            era.get(`love:${chara_id}`) >= 75) ||
            // 或者就是小孩跟着妈妈移动
            (era.get(`cflag:${chara_id}:成长阶段`) < 2 &&
              era.get(`cflag:${era.get(`cflag:${chara_id}:母方角色`)}:位置`) ===
                location_enum.beach));
      flag && era.set(`cflag:${chara_id}:位置`, location_enum.beach);
      return flag;
    });
    if (!temp) {
      follow_group.unshift(0);
    }
    if (follow_group.length) {
      era.printMultiColumns([
        { content: '今年以下人员会跟随参加夏合宿：', type: 'text' },
        ...follow_group.map((chara_id) => {
          const chara = get_chara_talk(chara_id);
          sys_change_attr_and_print(chara_id, '体力', -10);
          sys_change_attr_and_print(chara_id, '精力', -400);
          return {
            config: { align: 'center', width: 3 },
            content: [chara.get_colored_name()],
            type: 'text',
          };
        }),
      ]);
    }
  } else if (event_weeks === 33 - 1) {
    // 夏合宿结束
    era.print([
      era.get('cflag:0:位置') ? '' : '前往夏合宿的人员',
      '回到特雷森了……',
    ]);
    in_team_list.forEach((chara_id) => {
      if (era.get(`cflag:${chara_id}:位置`)) {
        sys_change_attr_and_print(chara_id, '体力', -10);
        sys_change_attr_and_print(chara_id, '精力', -400);
        era.set(`cflag:${chara_id}:位置`, 0);
      }
    });
    if (era.get('cflag:0:位置')) {
      era.set('flag:当前位置', location_enum.office);
      sys_change_attr_and_print(0, '体力', -10);
      sys_change_attr_and_print(0, '精力', -400);
      era.set('cflag:0:位置', 0);
    }
  }
  // 出差的理事长
  let chairman = 0;
  if (
    era.get('cflag:302:育成回合计时') < 3 * 48 ||
    (era.get('flag:当前月') > 3 &&
      (Math.random() < 0.2 || (era.get('cflag:302:妊娠阶段') & 0b100001) > 0))
  ) {
    if (
      !(era.get('cflag:306:育成回合计时') < 3 * 48) &&
      (era.get('cflag:306:妊娠阶段') & 0b100001) === 0
    ) {
      chairman = 306;
    }
  } else {
    chairman = 302;
  }
  const loc_visitors = new LocCharacters();
  loc_visitors.set(location_enum.chairman, [chairman]);
  loc_visitors.set(location_enum.trainer, [
    !(era.get('cflag:304:育成回合计时') < 3 * 48) && sys_check_npc_working(304)
      ? 304
      : 0,
    !(era.get('cflag:306:育成回合计时') < 3 * 48) &&
    chairman !== 306 &&
    sys_check_npc_working(306)
      ? 306
      : 0,
  ]);
  loc_visitors.set(location_enum.clinic, [
    !(era.get('cflag:305:育成回合计时') < 3 * 48) && sys_check_npc_working(305)
      ? 305
      : 0,
  ]);
  loc_visitors.set(location_enum.visitor, [
    !(era.get('cflag:303:育成回合计时') < 3 * 48) &&
    era.get('love:303') >= 25 &&
    sys_check_npc_working(303)
      ? 303
      : 0,
    !(era.get('cflag:308:育成回合计时') < 3 * 48) &&
    era.get('flag:当前回合数') > 40 &&
    (era.get('love:308') >= 25 || era.get('flag:当前回合数') % 48 === 40) &&
    sys_check_npc_working(308)
      ? 308
      : 0,
    !(era.get('cflag:343:育成回合计时') < 3 * 48) &&
    !era.get('cflag:343:位置') &&
    era.get('flag:当前回合数') > 12 &&
    era.get('love:343') >= 40 &&
    sys_check_npc_working(343)
      ? 343
      : 0,
  ]);
}

module.exports = check_new_activities;
