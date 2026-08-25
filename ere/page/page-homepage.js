const era = require('#/era-electron');

const sys_calc_security_level = require('#/system/basement/sys-calc-security-level');
const sys_handle_escape_basement = require('#/system/basement/sys-handle-escape-basement');
const {
  sys_check_cuckold,
  sys_check_yandere,
} = require('#/system/chara/sys-calc-cheat');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const print_curr_chara = require('#/page/components/cur-chara-info');
const check_game_over = require('#/page/components/game-over');
const page_header = require('#/page/components/page-header');
const basement = require('#/page/homepage/basement');
const print_ero_page = require('#/page/page-ero');

const basement_queue = require('#/event/basement-queue');
const { common_no_action_check } = require('#/event/check/check-common');
const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');
const { get_custom_edu } = require('#/event/edu/edu-factory');
const { get_custom_ero } = require('#/event/ero/ero-factory');
const game_guides = require('#/event/others/game-guides');
const { start_machine_gun, stop_machine_gun } = require('#/event/queue');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');
const { get_random_value, minutes_in_a_day } = require('#/utils/value-utils');

const {
  action_type_enum,
  basement_status_enum,
} = require('#/data/basement-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { lust_border } = require('#/data/ero/orgasm-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const BasementAction = require('#/data/event/basement-action');
const basement_owners = require('#/data/event/basement-owners');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_save_name, get_trainer_title } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { first_child_id, max_chara_id } = require('#/data/other-const');
const { pressure_border } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

let notes_index = 0;
let random_event;

async function anniversary() {
  if (era.get('flag:当前回合数') % 48 === 1) {
    const year = era.get('flag:当前年');
    let name;
    switch (year) {
      case 2010:
        name = 'TEN';
        break;
      case 2020:
        name = 'TWENTY';
        break;
      case 2030:
        name = 'THIRTY';
        break;
      case 2040:
        name = 'FORTY';
        break;
      case 2050:
        name = 'FIFTY';
    }
    if (name !== void 0) {
      era.drawLine();
      await i18n().timon.others[name](
        get_chara_talk(0),
        ...(era.get('flag:角色性别') === 1
          ? [i18n().name.uma_boy, i18n().name.he_mul]
          : [i18n().name.uma_girl, i18n().name.she_mul]),
      );
    }
    if (year >= 2009) {
      global_achievement.time_ten = 1;
    }
    if (year >= 2016) {
      global_achievement.time_twe = 1;
    }
    if (year >= 2021) {
      global_achievement.time_thr = 1;
    }
    if (year >= 2024) {
      global_achievement.time_for = 1;
    }
    if (year >= 2025) {
      global_achievement.time_fif = 1;
    }
  }
}

async function next_week() {
  era.drawLine();
  era.print(i18n().ui_time_flow, {
    align: 'center',
    fontSize: '1.5rem',
  });
  era.println();
  await sys_next_week();
  era.drawLine();
  await era.printAndWait(i18n().ui_new_week, {
    align: 'center',
    fontSize: '1.5rem',
  });
}

/**
 * @param {number} cid
 * @param {number} cur_loc
 * @param {number} rest_loc
 */
async function save_and_next_week(cid, cur_loc, rest_loc) {
  if (!era.get('flag:强制BE')) {
    await era.saveData(
      0,
      i18n().ui_auto_save_template.replace('%NAME%', get_save_name()),
    );
  }
  era.drawLine();
  era.set('flag:当前互动角色', 0);
  era.set('flag:当前位置', rest_loc);
  let lover = +(sys_check_awake(0) && era.get('flag:床伴'));
  era.set('flag:床伴', lover);
  const punish =
    era.get('flag:惩戒力度') >= 2 &&
    era.get('talent:0:处女') === vp_status_enum.no &&
    check_pregnant_unprotect(0);
  if (punish) {
    i18n().timon.pregnant_slave.work(
      get_chara_talk(0),
      ...(era.get('flag:角色性别') === 1
        ? [i18n().name.uma_boy, i18n().name.he, i18n().name.he_mul]
        : [i18n().name.uma_girl, i18n().name.she, i18n().name.she_mul]),
      get_trainer_title().title(),
    );
  }
  if (cid > 0 && !sys_check_remote(cid) && !lover) {
    if (punish) {
      era.drawLine();
    }
    await run_custom_daily(cid, event_hooks.good_night);
  }
  let continue_flag = true;
  if (era.get('flag:当前位置') !== location_enum.basement) {
    start_machine_gun(event_hooks.week_end);
    while (
      continue_flag &&
      (random_event = sys_get_random_event(event_hooks.week_end)) !== undefined
    ) {
      era.drawLine();
      continue_flag = !(await random_event(cid));
    }
    stop_machine_gun(event_hooks.week_end);
  }
  if ((lover = era.get('flag:床伴')) > 0) {
    era.set(`cflag:${lover}:自主训练`, 0);
    const life_marks = LifeEventMarks.get_marks(lover);
    begin_and_init_ero(0, lover);
    if (life_marks.marital_rape) {
      era.set('tflag:强奸', lover);
      era.set('tflag:主导权', lover);
    }
    const inmon = CharaInmon.get(lover);
    const orgy = sys_check_yandere(lover, (y) => y === 2, inmon)
      ? void 0
      : get_random_entry(
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
            .map((e) => {
              return {
                id: e,
                check:
                  e > 0 &&
                  e !== lover &&
                  sys_check_awake(e) &&
                  (era.get(`relation:${e}:${lover}`) > 225 ||
                    era.get(`base:${e}:性欲`) >= lust_border.absent_mind ||
                    sys_check_cuckold(e)) &&
                  get_custom_check(e).is_want_make_love(),
              };
            })
            .filter((e) => e.check),
        );
    if (orgy !== void 0) {
      era.drawLine();
      let wait_flag = false;
      if (await get_custom_ero(orgy.id).join_3p(lover)) {
        await get_custom_ero(orgy.id).join_3p_accept(lover);
        init_ero(orgy.id);
        era.println();
        wait_flag =
          sys_like_chara(orgy.id, 0, get_random_value(50, 150)) || wait_flag;
        wait_flag =
          sys_like_chara(orgy.id, lover, get_random_value(50, 150)) ||
          wait_flag;
        const yandere = era.get(`talent:${lover}:病娇`);
        if (sys_check_cuckold(lover, inmon)) {
          wait_flag =
            sys_like_chara(lover, 0, get_random_value(10, 25)) || wait_flag;
          wait_flag =
            sys_like_chara(lover, orgy.id, get_random_value(0, 25)) ||
            wait_flag;
        } else if (
          !inmon.on(plugin_enum.no_yand) &&
          era.get(`relation:${lover}:${orgy.id}`) > 375
        ) {
          wait_flag =
            sys_like_chara(
              lover,
              0,
              -get_random_value(25, 75 + 25 * yandere),
            ) || wait_flag;
        }
        era.set(`cflag:${orgy.id}:自主训练`, 0);
      } else if (
        orgy.check === 2 &&
        era.get(`relation:${lover}:${orgy.id}`) > 375
      ) {
        await get_custom_ero(orgy.id).join_3p_force(lover);
        init_ero(orgy.id);
        era.println();
        wait_flag =
          sys_like_chara(
            lover,
            orgy.id,
            -get_random_value(0, 25 * era.get(`talent:${lover}:病娇`)),
          ) || wait_flag;
        wait_flag =
          sys_like_chara(
            lover,
            0,
            -get_random_value(50, 100 + 25 * era.get(`talent:${lover}:病娇`)),
          ) || wait_flag;
        era.set(`cflag:${orgy.id}:自主训练`, 0);
      } else {
        await get_custom_ero(orgy.id).join_3p_reject(lover);
        era.println();
        wait_flag =
          sys_like_chara(
            orgy.id,
            0,
            -get_random_value(25, 50 + 25 * era.get(`talent:${orgy.id}:病娇`)),
          ) || wait_flag;
        wait_flag =
          sys_like_chara(
            lover,
            0,
            get_random_value(50, 100 + 25 * era.get(`talent:${lover}:病娇`)),
          ) || wait_flag;
      }
      wait_flag && (await era.waitAnyKey());
    }
    await print_ero_page(lover);
    await end_ero_and_show_result(true);
    life_marks.marital_rape = 0;
  }
  if (continue_flag) {
    await next_week();
    if (era.get('flag:当前位置') === rest_loc) {
      era.set('flag:当前位置', cur_loc);
    }
  }
}

/** @type {Record<string,function(number,function(number,number,number):Promise,{after_select:boolean,homepage:boolean,week_start:boolean}):Promise<*>>} */
const handlers = {};

handlers[location_enum.basement] = basement;
handlers[location_enum.beach] = require('#/page/homepage/beach');
handlers[location_enum.guangzhou] =
  handlers[location_enum.hongkong] =
  handlers[location_enum.paris] =
  handlers[location_enum.new_york] =
  handlers[location_enum.dubai] =
    require('#/page/homepage/foreign');
handlers[location_enum.office] = require('#/page/homepage/office');

/** @type {Record<string,function:Promise>} */
const basement_handlers = {};

basement_handlers[location_enum.basement] = async () => {
  await era.saveData(
    0,
    i18n().ui_auto_save_template.replace('%NAME%', get_save_name),
  );
  era.set('flag:当前互动角色', 0);
  await next_week();
};

module.exports = async () => {
  const flags = {
    after_select: true,
    homepage: true,
    week_start: false,
  };
  await game_guides.game_start();
  while (flags.homepage) {
    await era.clear();
    let flag_skip_this_week = false;
    let cur_location = era.get('flag:当前位置');

    if (!handlers[cur_location]) {
      cur_location = location_enum.office;
    }

    const my_life_marks = LifeEventMarks.get_marks(0);
    if (flags.week_start) {
      let count = 0;
      if (
        era.get('flag:游戏结束') < 3 &&
        cur_location === location_enum.basement
      ) {
        era.set('flag:当前位置', location_enum.office);
      }
      page_header();
      if (await check_game_over()) {
        return;
      }
      if (
        cur_location === location_enum.basement &&
        my_life_marks.b_timer > 0
      ) {
        cur_location = location_enum.office;
        era.drawLine();
        const fine = Math.ceil(era.get('flag:当前马币') / 2);
        await i18n().timon.basement.school_rescue(get_chara_talk(0), fine);
        if (fine > 0) {
          era.add('flag:当前马币', -fine);
        }
        sys_handle_escape_basement(false);
      }
      if (era.get('flag:当前月') <= 3 && era.get('flag:当前周') === 1) {
        const added_list = era.getAddedCharacters();
        gacha(
          era
            .getAllCharacters()
            .filter((x) => !added_list.includes(x) && x < first_child_id),
          get_random_value(2, 5),
        ).forEach((cid) => init_chara(cid));
      }
      start_machine_gun(event_hooks.week_start);
      while (
        !flag_skip_this_week &&
        (random_event = sys_get_random_event(event_hooks.week_start)) !==
          undefined
      ) {
        era.drawLine();
        flag_skip_this_week = (await random_event()) || flag_skip_this_week;
        count++;
      }
      stop_machine_gun(event_hooks.week_start);
      const force_be = era.get('flag:强制BE');
      if (force_be) {
        await era.clear();
        era.drawLine();
        await get_custom_edu(force_be).crazy_fan_end();
        await check_game_over.game_over_with_saying(di18n.timon.eds_crazy_fan);
        return;
      }
      if (await check_game_over(true)) {
        return;
      }
      await anniversary();
      if (cur_location === location_enum.basement) {
        era.set('flag:当前位置', location_enum.basement);
        await era.clear();
        basement.page_header();
        my_life_marks.b_timer = get_random_value(
          Math.min(23, count + 6) * 60,
          24 * 60 - 1,
        );
        const owners = basement_owners.get();
        const owner = owners[0];
        const owner_marks = LifeEventMarks.get_marks(owner);
        basement_owners.clear();
        basement_owners.push(owner);
        era.add('exp:0:监禁次数', 1);
        era.add(`exp:${owner}:监禁次数`, 1);
        era.set('status:0:沉睡', 1);
        basement_queue.add_action(
          new BasementAction(0, my_life_marks.b_timer, action_type_enum.get_up),
        );
        owner_marks.b_s_level = sys_calc_security_level(owner, 1);
        my_life_marks.b_now = my_life_marks.b_enhance = Math.max(
          owner_marks.b_s_level + get_random_value(-1, 1),
          1,
        );
        my_life_marks.b_start = owner_marks.b_start = 1;
        my_life_marks.b_status = owner_marks.b_status =
          1 << basement_status_enum.idle;
        owner_marks.b_escape = 0;
        if (
          era.get('flag:当前回合数') % 48 > 0 &&
          my_life_marks.b_timer > 6 * 60 + 30 &&
          my_life_marks.b_timer < 17 * 60
        ) {
          owner_marks.b_status = 1 << basement_status_enum.outside;
          basement_queue.add_action(
            new BasementAction(owner, 17 * 60, action_type_enum.back_basement),
            true,
          );
        }
        const rescue_chara =
          owners[1] ||
          get_random_entry(
            sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
              (e) =>
                e > 0 &&
                e < max_chara_id &&
                e !== owner &&
                !common_no_action_check(e) &&
                era.get(`love:${e}`) >= 75 &&
                !era.get(`status:${e}:伤病`) &&
                era.get(`base:${e}:压力`) < pressure_border.depression,
            ),
          );
        if (rescue_chara > 0) {
          basement_queue.add_action(
            new BasementAction(
              rescue_chara,
              3 * minutes_in_a_day + get_random_value(0, minutes_in_a_day),
              action_type_enum.rescue,
            ),
            true,
          );
        }
      }
    }
    era.set('flag:当前位置', cur_location);
    if (flag_skip_this_week) {
      era.drawLine();
      await next_week();
      continue;
    }

    const cid = era.get('flag:当前互动角色');

    if (cur_location !== location_enum.basement) {
      if (!era.get('base:0:体力')) {
        era.set('status:0:沉睡', 1);
      }
      if (cid > 0 && !era.get(`base:${cid}:体力`)) {
        era.set(`status:${cid}:沉睡`, 1);
      }
      await era.clear();
      page_header(true);
      print_curr_chara(cid);
      era.drawLine();
      let hook = -1;
      if (flags.week_start) {
        if (cid) {
          hook = event_hooks.good_morning;
        }
      } else if (flags.after_select) {
        if (cid) {
          hook = event_hooks.select;
        }
      }
      flags.week_start = flags.after_select = false;
      if (hook > 0) {
        await run_custom_daily(cid, hook);
      } else {
        const note_list = [...i18n().note.common];
        if (era.get('flag:目白城风格') === 1) {
          note_list.push(...i18n().note.call);
        }
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).forEach(
          (e) => {
            if (era.get(`cflag:${e}:育成回合计时`) < 3 * 48 && i18n().note[e]) {
              note_list.push(...i18n().note[e]);
            }
          },
        );
        const note = note_list[notes_index++ % note_list.length];
        say_by_passer_by(...note);
      }
    }

    await handlers[cur_location](
      cid,
      basement_handlers[cur_location] || save_and_next_week,
      flags,
    );
  }
};
