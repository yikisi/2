const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const sys_change_tired = require('#/system/chara/sys-change-tired');
const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_attr_and_print,
  sys_change_pressure,
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const MejiroCity = require('#/page/mejiro/mejiro-common');

const CustomizedEdu = require('#/event/edu/edu-common');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const {
  adaptability_colors,
  celebration_color,
} = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const loc_characters = require('#/data/event/loc-characters');
const moon_well = require('#/data/event/moon-well');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { expedition_weeks } = require('#/data/move-const');
const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const {
  foreign_race_list,
  track2location,
} = require('#/data/race/race-location');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

function get_track2race(track) {
  let ret = void 0;
  switch (track) {
    case track_enum.meydan:
      ret = i18n().race.dubai_series;
      break;
    case track_enum.shatin:
      ret = i18n().race.hongkong_series;
  }
  if (ret) {
    ret = {
      color: adaptability_colors.at(-2 - class_enum.G1),
      content: ret,
      fontWeight: 'bold',
    };
  }
  return ret;
}

/**
 * @param {number} cid
 * @param {number} language
 * @param {number} loc
 * @param {boolean} before_race
 */
function handle_foreign_debuff(cid, language, loc, before_race) {
  sys_change_attr_and_print(cid, attr_enum.hp, -200);
  sys_change_attr_and_print(cid, attr_enum.tp, -500);
  sys_change_tired(cid, 2);
  // STATUSNAME:7 = 语言不通
  era.set(
    `status:${cid}:7`,
    Math.max(
      // TALENTNAME:11 = 社交态度
      5 - era.get(`abl:${cid}:${language}`) + era.get(`talent:${cid}:11`),
      0,
    ),
  );
  get_custom_mec(cid).set_foreign_debuff(before_race, loc);
}

/**
 * @param {number} cur_round
 * @param {number[]} in_team_list
 */
async function check_new_activities(cur_round, in_team_list) {
  era.drawLine();
  const celebration = get_celebration(cur_round);
  if (celebration && era.get('flag:当前回合数') > 1) {
    era.print(
      i18n().timon.get_it_nt_celebration_notification({
        content: celebration,
        color: celebration_color,
      }),
    );
    era.set('cflag:0:节日事件标记', 0);
    if (cur_round % 48 === 30) {
      in_team_list.forEach((cid) =>
        era.set(
          `cflag:${cid}:节日事件标记`,
          +(
            era.get(`cflag:${cid}:位置`) === location_enum.beach &&
            (!era.get(`cflag:${cid}:种族`) ||
              era.get(`cflag:${cid}:育成回合计时`) > 47 ||
              era.get(`love:${cid}`) >= 60)
          ),
        ),
      );
    } else {
      in_team_list.forEach((cid) =>
        era.set(
          `cflag:${cid}:节日事件标记`,
          +(
            !era.get(`cflag:${cid}:种族`) ||
            era.get(`cflag:${cid}:育成回合计时`) > 47 ||
            era.get(`love:${cid}`) >= 60
          ),
        ),
      );
    }
  } else {
    in_team_list.forEach((id) => era.set(`cflag:${id}:节日事件标记`, 0));
  }
  if (
    era.get('flag:当前马币') > 0 &&
    era.get('flag:当前马币') +
      sys_get_billings().reduce((p, c) => p + c.repay, 0) <=
      0
  ) {
    era.print(
      i18n().get_ui_bankrupt_warn(get_chara_talk(0).get_colored_name()),
    );
  }
  /** @type {Record<string,{no_hurt:boolean,no_preg:boolean}>} */
  const in_team_status_dict = {};
  [0, ...in_team_list].forEach((id) => {
    const registered_race = sys_reg_race(id).curr;
    if (registered_race.week === cur_round) {
      era.print(
        i18n().timon.get_it_nt_race_notification(
          get_chara_talk(id),
          race_infos[registered_race.race].get_colored_name_with_class(),
        ),
      );
    }
    in_team_status_dict[id] = {
      no_hurt: !era.get(`status:${id}:伤病`),
      no_preg:
        check_pregnant_unprotect(id) &&
        era.get(`cflag:${id}:妊娠回合计时`) <
          (CharaInmon.get(id).slave === slavery_enum.pregnant ? 30 : 33),
    };
  });
  const event_weeks = (cur_round - 1) % 48 || 48,
    curr_race_list = {};
  foreign_race_list.forEach((race) => {
    const { date, track } = race_infos[race];
    if (event_weeks === date - expedition_weeks) {
      curr_race_list[`${track}_1`] = [race, true];
    } else if (event_weeks === date) {
      curr_race_list[`${track}_0`] = [race, false];
    }
  });
  for (const entry of Object.values(curr_race_list)) {
    const race = entry[0];
    const info = race_infos[race];
    const location = track2location[info.track];
    const race_colored_name =
      get_track2race(info.track) || info.get_colored_name_with_class();
    if (entry[1]) {
      // 远征开始
      let foreign_list = in_team_list.filter((e) => {
        return (
          race_infos[sys_reg_race(e).curr.race]?.track ===
          race_infos[race].track
        );
      });
      const punish_list = [];
      foreign_list = foreign_list.filter((id) => {
        if (
          in_team_status_dict[id].no_preg &&
          in_team_status_dict[id].no_hurt
        ) {
          return true;
        }
        punish_list.push(id);
        return false;
      });
      era.print(
        i18n().timon.get_it_nt_foreign_race_notification(race_colored_name),
      );
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
            content: i18n().timon.it_nt_race_contestants,
            type: 'text',
          },
          ...foreign_list.map((id) => {
            const chara = get_chara_talk(id);
            handle_foreign_debuff(id, location.lan, location.loc, true);
            sys_change_pressure(id, get_random_value(2000, 3000));
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
        era.get('cflag:0:妊娠回合计时') >=
          (CharaInmon.get(0).slave === slavery_enum.pregnant ? 30 : 33) ||
        (!foreign_list.length && !me_in_race);
      if (!temp) {
        temp =
          !(await select_yes_or_no(
            i18n().timon.get_it_nt_to_foreign_confirm(
              race_colored_name,
              me_in_race,
            ),
          )) * 100;
      }
      if (!temp) {
        handle_foreign_debuff(0, location.lan, location.loc, false);
        era.set('flag:当前位置', location.loc);
        foreign_list.forEach((id) => sys_change_pressure(id, -1000));
        foreign_list.push(0);
        if (
          foreign_list.indexOf(343) === -1 &&
          era.get('cflag:343:招募状态') === recruit_flags.yes &&
          era.get('cflag:343:妊娠回合计时') <
            (CharaInmon.get(343).slave === slavery_enum.pregnant ? 30 : 33)
        ) {
          foreign_list.push(343);
        }
      } else if (me_in_race) {
        punish_list.push(0);
      }
      if (punish_list.length) {
        era.printMultiColumns([
          {
            content: i18n().timon.it_nt_foreign_avoid_notification,
            type: 'text',
          },
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
      foreign_list.forEach((id) => era.set(`cflag:${id}:位置`, location.loc));
      if (era.get('cflag:343:招募状态') === recruit_flags.yes) {
        let { buff } = new MayLifeMarks();
        buff += 1;
        foreign_list.forEach((id) =>
          ['语言不通', '水土不服', '客场作战'].forEach((s) =>
            era.set(
              `status:${id}:${s}`,
              Math.ceil(Math.max(era.get(`status:${id}:${s}`) - 1, 0) / buff),
            ),
          ),
        );
      }
    } else {
      // 远征结束
      era.print(
        era.get('cflag:0:位置') === location.loc
          ? i18n().timon.it_nt_back_info
          : i18n().timon.get_it_nt_back_info_from_foreign(race_colored_name),
      );
      in_team_list.forEach((id) => {
        // CFLAGNAME:45 = 位置
        if (era.get(`cflag:${id}:45`) === location.loc) {
          sys_change_attr_and_print(id, attr_enum.hp, -100);
          sys_change_attr_and_print(id, attr_enum.tp, -600);
          // STATUSNAME:7 - 9 = 语言不通 - 客场作战
          era.set(`status:${id}:7`, 0);
          era.set(`status:${id}:8`, 0);
          era.set(`status:${id}:9`, 0);
          sys_change_tired(id, 1);
          era.set(`cflag:${id}:45`, 0);
        }
      });
      if (era.get('cflag:0:45') === location.loc) {
        // FLAGNAME:4 = 当前位置
        era.set('flag:4', location_enum.office);
        sys_change_attr_and_print(0, attr_enum.hp, -100);
        sys_change_attr_and_print(0, attr_enum.tp, -600);
        era.set('status:0:7', 0);
        era.set('status:0:8', 0);
        era.set('status:0:9', 0);
        sys_change_tired(0, 1);
        era.set('cflag:0:45', 0);
      }
      if (era.get('cflag:343:45') === location.loc) {
        era.set('cflag:343:45', 0);
      }
    }
  }
  if (event_weeks === 29 - 1) {
    // 夏合宿
    const beach_group = in_team_list.filter((id) => {
      const edu_weeks = era.get(`cflag:${id}:育成回合计时`);
      const flag =
        era.get(`cflag:${id}:成长阶段`) >= 2 &&
        in_team_status_dict[id].no_hurt &&
        in_team_status_dict[id].no_preg &&
        edu_weeks < 3 * 48 &&
        edu_weeks > 48;
      flag && era.set(`cflag:${id}:位置`, location_enum.beach);
      return flag;
    });
    era.print(i18n().timon.it_nt_summer_start_notification);
    beach_group.length &&
      era.printMultiColumns([
        {
          content: i18n().timon.it_nt_summer_chara_list_start,
          type: 'text',
        },
        ...beach_group.map((cid) => {
          sys_change_attr_and_print(cid, attr_enum.hp, -10);
          sys_change_attr_and_print(cid, attr_enum.tp, -400);
          return {
            config: { align: 'center', width: 3 },
            content: [get_chara_talk(cid).get_colored_name()],
            type: 'text',
          };
        }),
      ]);
    // temp大于0是不参加夏合宿，所以这里判断的是不能参加夏合宿的情况
    let temp =
      // 地下室就只能错过夏合宿了
      era.get('flag:当前位置') === location_enum.basement ||
      !in_team_status_dict[0].no_preg ||
      // 要么队伍里有人要参加夏合宿，要么就是自己参加夏合宿
      (!beach_group.length && !era.get('cflag:0:种族'));
    // 条件允许，弹选项让玩家选参加不参加
    if (!temp) {
      temp =
        !(await select_yes_or_no(
          i18n().timon.get_it_nt_summer_confirm(!beach_group.length),
        )) * 100;
    }
    if (!temp) {
      era.set('cflag:0:位置', era.set('flag:当前位置', location_enum.beach));
    }
    const follow_group = in_team_list.filter((id) => {
      const race = era.get(`cflag:${id}:种族`),
        flag =
          era.get(`cflag:${id}:位置`) !== location_enum.beach &&
          in_team_status_dict[id].no_hurt &&
          in_team_status_dict[id].no_preg &&
          // 和主控到达一定关系会跟着去
          ((!temp &&
            (era.get(`cflag:${id}:殿堂`) || !race) &&
            era.get(`love:${id}`) >= 80) ||
            // 或者就是小孩跟着妈妈移动
            (era.get(`cflag:${id}:成长阶段`) < 2 &&
              era.get(`cflag:${era.get(`cflag:${id}:母方角色`)}:位置`) ===
                location_enum.beach));
      flag && era.set(`cflag:${id}:位置`, location_enum.beach);
      return flag;
    });
    if (!temp) {
      follow_group.unshift(0);
      CustomizedEdu.common_event_count = 1;
    } else {
      CustomizedEdu.common_event_count = 0;
    }
    if (follow_group.length) {
      era.printMultiColumns([
        { content: i18n().timon.it_nt_summer_chara_list_follow, type: 'text' },
        ...follow_group.map((id) => {
          const chara = get_chara_talk(id);
          sys_change_attr_and_print(id, attr_enum.hp, -10);
          sys_change_attr_and_print(id, attr_enum.tp, -400);
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
    era.print(
      era.get('cflag:0:位置') > 0
        ? i18n().timon.it_nt_back_info
        : i18n().timon.it_nt_back_info_summer,
    );
    in_team_list.forEach((id) => {
      if (era.get(`cflag:${id}:位置`)) {
        sys_change_attr_and_print(id, attr_enum.hp, -10);
        sys_change_attr_and_print(id, attr_enum.tp, -400);
        era.set(`cflag:${id}:位置`, 0);
      }
    });
    if (era.get('cflag:0:位置')) {
      era.set('flag:当前位置', location_enum.office);
      sys_change_attr_and_print(0, attr_enum.hp, -10);
      sys_change_attr_and_print(0, attr_enum.tp, -400);
      era.set('cflag:0:位置', 0);
    }
  }

  // 特殊NPC是否会出现在地点
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
  loc_characters.set(location_enum.chairman, [chairman]);
  loc_characters.set(location_enum.trainer, [
    sys_check_npc_working(304) ? 304 : 0,
    chairman !== 306 && sys_check_npc_working(306) ? 306 : 0,
  ]);
  loc_characters.set(location_enum.clinic, [
    sys_check_npc_working(305) ? 305 : 0,
  ]);
  loc_characters.set(location_enum.visitor, [
    era.get('love:303') >= 25 && sys_check_npc_working(303) ? 303 : 0,
    era.get('flag:当前回合数') > 40 &&
    (era.get('love:308') >= 25 || era.get('flag:当前回合数') % 48 === 40) &&
    sys_check_npc_working(308)
      ? 308
      : 0,
    !era.get('cflag:343:位置') &&
    era.get('flag:当前回合数') > 12 &&
    era.get('love:343') >= 40 &&
    sys_check_npc_working(343)
      ? 343
      : 0,
  ]);
  [204, 346, 347, 348].forEach((e) => {
    if (era.get(`cflag:${e}:招募状态`) !== 0 && sys_check_npc_working(e)) {
      loc_characters.get(location_enum.visitor).push(e);
    }
  });

  const uaf_list = [];
  if (
    era.get('cflag:207:招募状态') === recruit_flags.yes ||
    era.get('cflag:344:招募状态') === recruit_flags.yes ||
    Math.random() < 0.2
  ) {
    uaf_list.push(207, 344);
  }

  loc_characters
    .get(location_enum.visitor)
    .push(
      ...uaf_list.filter(
        (e) =>
          !(era.get(`cflag:${e}:育成回合计时`) < 3 * 48) &&
          sys_check_npc_working(e),
      ),
    );

  loc_characters
    .get(location_enum.visitor)
    .push(
      ...[345, 349].filter(
        (cid) =>
          sys_check_npc_working(cid) &&
          (era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes ||
            era.get(`love:${cid}`) >= 30 ||
            Math.random() < 0.5),
      ),
    );

  loc_characters.set(
    location_enum.visitor,
    sort_list(loc_characters.get(location_enum.visitor), (e) => e, true),
  );
  loc_characters.set(
    location_enum.moon_well,
    [350, 351].filter(sys_check_npc_working),
  );
  yandere_list.set(
    in_team_list.filter((e) => sys_check_yandere(e, (y) => y > 0)),
  );

  const my_edu_marks = new MyEduMarks();
  if (my_edu_marks.we_are_one > 0) {
    my_edu_marks.we_are_one--;
  }
  await MejiroCity.instance().next_week();
  if (
    moon_well.times < moon_well.limit &&
    (moon_well.cooldown -= moon_well.limit) <= 0
  ) {
    if (!moon_well.times) {
      era.print(i18n().timon.it_nt_moon_well_cool_down);
    }
    if (++moon_well.times === moon_well.limit) {
      moon_well.cooldown = moon_well.cd;
    } else {
      moon_well.cooldown += moon_well.cd;
    }
  }
}

module.exports = check_new_activities;
