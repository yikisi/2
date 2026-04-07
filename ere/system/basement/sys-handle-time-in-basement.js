const era = require('#/era-electron');

const sys_calc_security_level = require('#/system/basement/sys-calc-security-level');
const sys_handle_escape_basement = require('#/system/basement/sys-handle-escape-basement');
const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { check_satisfied } = require('#/system/ero/sys-calc-ero-status');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const page_ero = require('#/page/page-ero');

const basement_queue = require('#/event/basement-queue');
const { get_custom_basement } = require('#/event/basement/basement-factory');
const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_ero } = require('#/event/ero/ero-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { log_max_wp, minutes_in_a_day } = require('#/utils/value-utils');

const {
  action_type_enum,
  basement_status_enum,
} = require('#/data/basement-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const BasementAction = require('#/data/event/basement-action');
const basement_owners = require('#/data/event/basement-owners');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const basement_just_status =
    (1 << basement_status_enum.just_back) +
    (1 << basement_status_enum.just_stop_sex),
  basement_no_cost_status =
    (1 << basement_status_enum.outside) +
    (1 << basement_status_enum.just_back) +
    (1 << basement_status_enum.sex) +
    (1 << basement_status_enum.just_stop_sex),
  default_my_filter = new Array(5).fill(false);

let get_random_value = () => 0;
let sex_end_time = void 0;

function check_vacation(timer) {
  const date = Math.floor(timer / minutes_in_a_day);
  let ret = date >= 5;
  switch (era.get('flag:当前回合数') % 48) {
    case 1:
      ret ||= date === 0;
      break;
    case 0:
      ret ||= date === 2 || date === 3;
  }
  return ret;
}

/**
 * @param {LifeEventMarks} my_marks
 * @param {LifeEventMarks} owner_marks
 * @param {number} owner_id
 * @param {boolean} [is_back]
 * @return {function()}
 */
function handle_prison_again(my_marks, owner_marks, owner_id, is_back) {
  if (my_marks.b_status !== 1 << basement_status_enum.escape) {
    return void 0;
  }
  my_marks.b_status = 1 << basement_status_enum.idle;
  const out_of_prison = my_marks.b_now < 0,
    s_level_up = owner_marks.b_s_level < 5;
  if (s_level_up) {
    owner_marks.b_s_level++;
  }
  if (
    my_marks.b_enhance < Math.min(owner_marks.b_s_level + 1, 5) &&
    get_random_value(0, 100) < owner_marks.b_s_level * 20
  ) {
    my_marks.b_enhance++;
  }
  if (my_marks.b_now < 0) {
    basement_owners.for_each((e) => {
      LifeEventMarks.get_marks(e).b_escape = 0;
      sys_like_chara(e, 0, -50 - 30 * (e === owner_id), false);
      sys_change_pressure(e, get_random_value(100, 500));
    });
    my_marks.b_now = 1;
  } else {
    basement_owners.for_each((e) => {
      LifeEventMarks.get_marks(e).b_escape = 0;
      sys_like_chara(e, 0, -20 - 30 * (e === owner_id), false);
      sys_change_pressure(e, get_random_value(100, 500));
    });
  }
  return () => {
    era.print(
      i18n().timon.get_it_bs_find_escape(
        get_chara_talk(owner_id),
        get_chara_talk(0),
      ),
    );
    get_custom_basement(owner_id).find_escape(
      out_of_prison,
      s_level_up,
      is_back,
    );
    era.println();
  };
}

/**
 * @param {number[]} part_list
 * @param {LifeEventMarks} my_life_marks
 * @param {boolean} [is_rape]
 */
async function handle_rape(part_list, my_life_marks, is_rape) {
  const cache = {};
  part_list.forEach((e) => {
    LifeEventMarks.get_marks(e).b_status = 1 << basement_status_enum.sex;
    if (e) {
      cache[e] = era.get(`relation:${e}:0`);
    }
  });
  basement_queue
    .clean_actions(
      (e) =>
        part_list.indexOf(e.chara_id) !== -1 &&
        e.type !== action_type_enum.get_up,
    )
    .filter((a) => a.type === action_type_enum.digestive_end)
    .forEach((a) => {
      sys_change_attr_and_print(
        a.chara_id,
        attr_enum.hp,
        get_random_value(100, 200),
      );
      LifeEventMarks.get_marks(a.chara_id).b_food_buff = 0;
    });
  begin_and_init_ero(...part_list);
  if (is_rape) {
    era.set(
      'tflag:主导权',
      era.set('tflag:当前对手', era.set('tflag:强奸', part_list[1])),
    );
    if (part_list[2]) {
      era.set('tflag:当前助手', part_list[2]);
    }
  }
  let wake_up = true;
  if (sys_check_awake(0)) {
    await page_ero(part_list[1], true);
  } else {
    const get_up_time =
      basement_queue.find_action(
        (e) => e.chara_id === 0 && e.type === action_type_enum.get_up,
      ).timer - my_life_marks.b_timer;
    let a_count = 0;
    let current = new Date().getTime();
    let r_flag = true;
    let temp;
    wake_up = false;
    while (r_flag) {
      await sys_handle_ero_act(
        ero_hooks.relax,
        default_my_filter,
        era.get('tflag:装睡') > 0,
      );
      a_count++;
      if (
        (check_satisfied(part_list[1]) > 0 &&
          (!part_list[2] || check_satisfied(part_list[2]) > 0)) ||
        (wake_up =
          !era.get('tflag:装睡') &&
          era.get('base:0:精力') > 0 &&
          !era.get('status:0:马跳S') &&
          (3 * era.get('tflag:回合') >= get_up_time ||
            ((temp = era.get('ex:0:TotalEX')) > 0 &&
              Math.random() < Math.min(temp, 5) * 0.05))) ||
        a_count > 36
      ) {
        r_flag = false;
        if (
          wake_up &&
          (await select_yes_or_no(
            (part_list[2] > 0
              ? i18n().timon.get_it_multi_rape_in_sleeping
              : i18n().timon.get_it_chara_rape_in_sleeping)(
              get_chara_talk(part_list[1]),
              get_chara_talk(0),
              part_list[2] > 0 && get_chara_talk(part_list[2]),
            ),
            i18n().ui_wur_sleep,
            i18n().ui_wur_wake,
          ))
        ) {
          wake_up = false;
          r_flag = true;
          era.set('tflag:装睡', 1);
        }
      }
    }
    current = new Date().getTime() - current;
    era.logger.debug(
      `角色 ${part_list[1]}${
        part_list[2] ? ' & ' + part_list[2] : ''
      } 睡奸完毕！${a_count} actions, ${current}ms, ${(
        current / a_count
      ).toFixed(2)} ms/action`,
    );
    if (wake_up) {
      era.set('status:0:沉睡', 0);
      basement_queue.clean_actions(
        (e) => e.chara_id === 0 && e.type === action_type_enum.get_up,
      );
      await page_ero(void 0, true);
    }
  }
  my_life_marks.b_timer = sex_end_time =
    my_life_marks.b_timer + Math.max((era.get('tflag:回合') - 1) * 3, 10);
  basement_queue.add_action(
    new BasementAction(0, sex_end_time, action_type_enum.stop_sex),
  );
  part_list.slice(1).forEach((e) => {
    if (cache[e] === era.get(`relation:${e}:0`)) {
      sys_like_chara(
        e,
        0,
        is_rape
          ? get_random_value(20, 40, false)
          : get_random_value(40, 60, false),
        false,
      );
    }
    basement_queue.add_action(
      new BasementAction(e, sex_end_time, action_type_enum.stop_sex),
    );
  });
  await end_ero_and_show_result(wake_up || era.get('tflag:装睡') > 0);
}

/**
 * @param {LifeEventMarks} my_life_marks
 * @param {BasementOwners} basement_owners
 */
async function sys_handle_time_in_basement(my_life_marks, basement_owners) {
  basement_owners.for_each((e) => {
    const life_marks = LifeEventMarks.get_marks(e);
    if (
      life_marks.b_status === 0 ||
      (life_marks.b_status & basement_just_status) > 0
    ) {
      life_marks.b_status = 1 << basement_status_enum.idle;
    }
  });
  let new_timer,
    wait_flag = false,
    print_handler;
  era.drawLine();
  const actions = basement_queue.get_action();
  for (const action of actions) {
    const life_marks = LifeEventMarks.get_marks(action.chara_id);
    new_timer = action.timer;
    switch (action.type) {
      case action_type_enum.action_end:
        if (
          !action.chara_id &&
          life_marks.b_status === 1 << basement_status_enum.escape &&
          life_marks.b_now < 0
        ) {
          era.set('flag:当前位置', location_enum.office);
        }
        life_marks.b_status = 1 << basement_status_enum.idle;
        break;
      case action_type_enum.fix_end:
        if (sys_check_awake(0)) {
          wait_flag = 1;
          get_custom_basement(action.chara_id).fix_prison();
        }
        my_life_marks.b_now++;
        life_marks.b_status = 1 << basement_status_enum.idle;
        sys_change_attr_and_print(action.chara_id, attr_enum.hp, -50);
        sys_change_attr_and_print(action.chara_id, attr_enum.tp, -50);
        break;
      case action_type_enum.digestive_end:
        life_marks.b_food_buff = 0;
        break;
      case action_type_enum.get_up:
        if (action.chara_id > 0) {
          print_handler = handle_prison_again(
            my_life_marks,
            life_marks,
            action.chara_id,
          );
        }
        if (!action.chara_id || sys_check_awake(0)) {
          era.print(
            i18n().timon.get_it_bs_awake(get_chara_talk(action.chara_id)),
          );
          wait_flag = 1;
          const owner_marks = LifeEventMarks.get_marks(basement_owners.get(0));
          let common = true;
          if (
            (life_marks.b_start || owner_marks.b_start) &&
            !print_handler &&
            !action.chara_id
          ) {
            if (
              owner_marks.b_status !== 1 << basement_status_enum.outside &&
              sys_check_awake(basement_owners.get(0))
            ) {
              common = false;
              get_custom_basement(basement_owners.get(0)).welcome();
              owner_marks.b_start = 0;
            } else if (my_life_marks.b_start) {
              common = false;
              get_custom_basement(basement_owners.get(0)).first_time();
            }
          }
          if (common) {
            get_custom_basement(action.chara_id).get_up();
            era.println();
            print_handler && print_handler();
          }
          era.println();
          life_marks.b_start = 0;
        }
        era.set(
          `status:${action.chara_id}:沉睡`,
          -era.get(`status:${action.chara_id}:沉睡`),
        );
        era.set(
          `status:${action.chara_id}:马跳S`,
          -era.get(`status:${action.chara_id}:马跳S`),
        );
        break;
      case action_type_enum.back_basement:
        print_handler = handle_prison_again(
          my_life_marks,
          life_marks,
          action.chara_id,
          true,
        );
        if (sys_check_awake(0)) {
          wait_flag = 1;
          era.print(
            i18n().timon.get_it_bs_back(get_chara_talk(action.chara_id)),
          );
          get_custom_basement(action.chara_id).back_basement();
          era.println();
          print_handler && print_handler();
          life_marks.b_start = 0;
        }
        life_marks.b_status = 1 << basement_status_enum.just_back;
        life_marks.b_out_cd =
          action.timer +
          get_random_value(60, 90) +
          60 -
          life_marks.b_s_level * 12;
        basement_queue.add_action(
          new BasementAction(
            action.chara_id,
            action.timer + get_random_value(10, 20),
            action_type_enum.action_end,
          ),
        );
        break;
      case action_type_enum.stop_sex:
        life_marks.b_status = 1 << basement_status_enum.just_stop_sex;
        basement_queue.add_action(
          new BasementAction(
            action.chara_id,
            action.timer +
              Math.ceil(
                get_random_value(20, 40) *
                  (1 -
                    (0.5 * Math.log(era.get(`base:${action.chara_id}:根性`))) /
                      log_max_wp),
              ),
            action_type_enum.action_end,
          ),
        );
        sex_end_time = void 0;
        break;
      case action_type_enum.rescue:
        if (my_life_marks.b_now >= 0) {
          const owner = basement_owners.get(0);
          const life_marks_o = LifeEventMarks.get_marks(owner);
          const inmon = CharaInmon.get(action.chara_id);
          const relation_check =
            !inmon.on(plugin_enum.meek) &&
            sys_calc_security_level(action.chara_id) >= 0;
          my_life_marks.b_now = Math.min(my_life_marks.b_now, 1);
          // 0-无事发生，1-趁人不备救援成功，2-趁人不备绑回地下室，3-同流合污，4-击败对方救援成功，5-击败对方绑回地下室
          let rescue_result_type = 0;
          if (
            life_marks_o.b_status === 1 << basement_status_enum.outside ||
            !sys_check_awake(owner)
          ) {
            rescue_result_type =
              1 +
              (relation_check > 0) * era.get(`cflag:${action.chara_id}:种族`);
          } else if (
            era.get(`relation:${owner}:${action.chara_id}`) > 375 &&
            era.get(`relation:${action.chara_id}:${owner}`) > 75 &&
            relation_check > 0 &&
            !sys_check_yandere(owner) &&
            !sys_check_yandere(action.chara_id)
          ) {
            rescue_result_type = 3;
          } else if (
            get_random_value(0, 1) <
            sys_get_strength_ratio_in_fight(action.chara_id, owner)
          ) {
            rescue_result_type =
              4 +
              (relation_check > 0) * era.get(`cflag:${action.chara_id}:种族`);
            sys_hurt_uma(owner, get_random_value(0, 2, false), false);
            sys_change_pressure(owner, get_random_value(500, 1000));
          } else {
            sys_hurt_uma(action.chara_id, get_random_value(0, 2, false), false);
            sys_change_pressure(action.chara_id, get_random_value(500, 1000));
          }
          const basement_scripts = get_custom_basement(action.chara_id);
          era.print(i18n().timon.it_bs_rescue);
          switch (rescue_result_type) {
            case 0:
              await basement_scripts.rescue_fail(owner);
              break;
            case 1:
              await basement_scripts.rescue_sneak_success(owner);
              break;
            case 2:
              await basement_scripts.rescue_sneak_prison(owner);
              break;
            case 3:
              await basement_scripts.rescue_join(owner);
              break;
            case 4:
              await basement_scripts.rescue_battle_success(owner);
              break;
            case 5:
              await basement_scripts.rescue_battle_prison(owner);
          }
          era.set('status:0:沉睡', 0);
          era.set('status:0:马跳S', 0);
          basement_queue.clean_actions(
            (a) => a.chara_id === 0 && a.type === action_type_enum.get_up,
          );
          era.println();
          if (rescue_result_type === 1 || rescue_result_type === 4) {
            era.set('flag:当前位置', location_enum.office);
            era.set('flag:当前互动角色', action.chara_id);
            sys_handle_escape_basement(false);
          } else {
            if (rescue_result_type === 2 || rescue_result_type === 5) {
              basement_queue.clean_actions((a) => a.chara_id === owner);
              basement_owners.clear();
              life_marks_o.b_timer =
                life_marks_o.b_enhance =
                life_marks_o.b_now =
                life_marks_o.b_s_level =
                life_marks_o.b_status =
                life_marks_o.b_stamina_buff =
                life_marks_o.b_food_buff =
                life_marks_o.b_time_buff =
                life_marks_o.b_out_cd =
                life_marks_o.b_r_seed =
                life_marks_o.b_food_medicine =
                  0;
              if (life_marks_o.b_escape <= 0) {
                life_marks_o.b_escape++;
              }
            }
            if (rescue_result_type > 0) {
              life_marks.b_s_level = Math.max(
                Math.floor(relation_check / 200),
                0,
              );
              life_marks.b_status = 1 << basement_status_enum.idle;
              life_marks.b_escape = 0;
              await run_custom_ero(action.chara_id, ero_hooks.prison, {
                shown: false,
              });
              era.add(`exp:${action.chara_id}:监禁次数`, 1);
              era.add('exp:0:监禁次数', 1);
              if (rescue_result_type !== 3) {
                my_life_marks.b_now = my_life_marks.b_enhance = Math.max(
                  life_marks.b_s_level + get_random_value(-1, 1),
                  1,
                );
              }
            }
          }
        }
    }
    if (era.get('flag:当前位置') !== location_enum.basement) {
      break;
    }
  }
  new_timer = sex_end_time || new_timer;
  if (era.get('flag:当前位置') === location_enum.basement) {
    const delta = new_timer - my_life_marks.b_timer,
      out_characters = [],
      is_vacation = check_vacation(new_timer);
    let fix_character = 0,
      rape_character = 0;
    [0, ...basement_owners.get()].forEach((e) => {
      const life_marks = LifeEventMarks.get_marks(e);
      if (delta > 0 && (life_marks.b_status & basement_no_cost_status) === 0) {
        let stamina_delta, time_delta;
        if (
          era.get(`status:${e}:马跳S`) ||
          Math.abs(era.get(`status:${e}:沉睡`)) === 2
        ) {
          stamina_delta = 0;
          time_delta = 1;
        } else if (era.get(`status:${e}:沉睡`)) {
          stamina_delta = 0.5;
          time_delta = 2;
        } else {
          stamina_delta = -1;
          time_delta = -2;
          if (era.get(`base:${e}:体力`) < 100) {
            time_delta = -4;
          }
        }
        sys_change_attr_and_print(
          e,
          attr_enum.hp,
          (stamina_delta + life_marks.b_stamina_buff + life_marks.b_food_buff) *
            delta *
            get_random_value(0.8, 1.2),
        );
        sys_change_attr_and_print(
          e,
          attr_enum.tp,
          (time_delta + life_marks.b_time_buff) *
            delta *
            get_random_value(0.8, 1.2),
        );
        if (!era.get(`base:${e}:精力`) && !era.get(`status:${e}:沉睡`)) {
          if (!e || sys_check_awake(0)) {
            wait_flag = 1;
            era.print(i18n().timon.get_it_bs_fall_asleep(get_chara_talk(e)));
            get_custom_basement(e).deep_sleep();
          }
          era.set(`status:${e}:沉睡`, 2);
          basement_queue.clean_actions(
            (a) =>
              a.chara_id === e && a.type !== action_type_enum.digestive_end,
          );
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer +
                Math.ceil(
                  get_random_value(120, 180) *
                    (1 -
                      (0.5 * Math.log(era.get(`base:${e}:根性`))) / log_max_wp),
                ),
              action_type_enum.get_up,
            ),
          );
        }
      }
      era.get(`status:${e}:沉睡`) < 0 && era.set(`status:${e}:沉睡`, 0);
      era.get(`status:${e}:马跳S`) < 0 && era.set(`status:${e}:马跳S`, 0);
      if (
        e > 0 &&
        sys_check_awake(e) &&
        life_marks.b_status === 1 << basement_status_enum.idle
      ) {
        if (
          era.get(`base:${e}:体力`) / era.get(`maxbase:${e}:体力`) < 0.45 &&
          !life_marks.b_food_buff
        ) {
          if (sys_check_awake(0)) {
            wait_flag = 1;
            era.print(i18n().timon.get_it_bs_chara_eat(get_chara_talk(e)));
            get_custom_basement(e).eat_something();
          }
          life_marks.b_status = 1 << basement_status_enum.action;
          basement_queue.add_action(
            new BasementAction(e, new_timer + 15, action_type_enum.action_end),
          );
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer + 4 * 60,
              action_type_enum.digestive_end,
            ),
          );
          life_marks.b_food_buff = 3.5;
        } else if (
          era.get(`base:${e}:精力`) / era.get(`maxbase:${e}:精力`) <
          0.3
        ) {
          if (sys_check_awake(0)) {
            wait_flag = 1;
            era.print(i18n().timon.get_it_bs_chara_sleep(get_chara_talk(e)));
            get_custom_basement(e).sleep();
          }
          era.set(`status:${e}:沉睡`, 1);
          basement_queue.clean_actions(
            (a) =>
              a.chara_id === e && a.type !== action_type_enum.digestive_end,
          );
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer +
                get_random_value(
                  Math.floor(
                    (era.get(`maxbase:${e}:精力`) * 0.6 -
                      era.get(`base:${e}:精力`)) /
                      2,
                  ),
                  240,
                ),
              action_type_enum.get_up,
            ),
          );
        } else {
          const fixing = basement_owners.count(
            (e) =>
              LifeEventMarks.get_marks(e).b_status ===
              1 << basement_status_enum.fix,
          );
          if (
            !fixing &&
            !fix_character &&
            my_life_marks.b_enhance >= my_life_marks.b_now &&
            get_random_value(0, 100) < life_marks.b_s_level * 19
          ) {
            fix_character = e;
          } else {
            const timer_in_day = new_timer % minutes_in_a_day;
            let stay_flag = true;
            if (is_vacation || era.get(`status:${e}:摸鱼`) > 0) {
              if (
                timer_in_day >= 7 * 60 &&
                timer_in_day < 16 * 60 &&
                new_timer - life_marks.b_out_cd > 0
              ) {
                out_characters.push(e);
                stay_flag = false;
              }
            } else if (timer_in_day >= 6 * 60 + 30 && timer_in_day < 16 * 60) {
              out_characters.push(e);
              stay_flag = false;
            }
            if (stay_flag) {
              if (
                !fixing &&
                !fix_character &&
                get_custom_check(e).is_want_make_love() > 0 &&
                era.get(`base:${e}:体力`) > 100
              ) {
                rape_character = e;
              } else {
                if (sys_check_awake(0)) {
                  wait_flag = 1;
                  era.print(
                    i18n().timon.get_it_bs_lure(
                      get_chara_talk(e),
                      get_chara_talk(0),
                    ),
                  );
                  get_custom_basement(e).lure();
                  sys_like_chara(e, 0, get_random_value(-5, 5, false), false);
                  sys_change_lust(0, get_random_value(0, 100));
                  sys_change_lust(e, get_random_value(0, 200));
                } else {
                  sys_change_lust(e, get_random_value(-100, 200));
                  sys_like_chara(e, 0, get_random_value(-5, 19, false), false);
                }
                life_marks.b_status = 1 << basement_status_enum.action;
                basement_queue.add_action(
                  new BasementAction(
                    e,
                    my_life_marks.b_timer + get_random_value(15, 45),
                    action_type_enum.action_end,
                  ),
                );
              }
            }
          }
        }
      }
    });
    if (
      rape_character &&
      !fix_character &&
      !basement_owners.count(
        (e) =>
          LifeEventMarks.get_marks(e).b_status ===
          1 << basement_status_enum.fix,
      )
    ) {
      const part_list = [
        rape_character,
        ...basement_owners.filter(
          (e) =>
            e !== rape_character &&
            sys_check_awake(e) &&
            era.get(`base:${e}:体力`) > 100 &&
            LifeEventMarks.get_marks(e).b_status !==
              1 << basement_status_enum.outside,
        ),
      ];
      if (sys_check_awake(0)) {
        era.print(
          i18n().timon.get_it_bs_rape(
            get_chara_talk(part_list[0]),
            get_chara_talk(0),
          ),
        );
        await get_custom_basement(part_list[0]).rape(part_list[1]);
      }
      await handle_rape([0, ...part_list], my_life_marks, true);
    } else {
      if (fix_character) {
        LifeEventMarks.get_marks(fix_character).b_status =
          1 << basement_status_enum.fix;
        basement_queue.add_action(
          new BasementAction(
            fix_character,
            new_timer +
              Math.ceil(
                get_random_value(30, 60 + 10 * my_life_marks.b_now) *
                  (1 -
                    (0.5 * Math.log(era.get(`base:${fix_character}:速度`))) /
                      log_max_wp),
              ),
            action_type_enum.fix_end,
          ),
        );
        if (sys_check_awake(0)) {
          wait_flag = 1;
          era.print(i18n().timon.get_it_bs_fix(get_chara_talk(fix_character)));
          get_custom_basement(fix_character).start_fixing();
          era.println();
        }
      }
      out_characters.forEach((e) => {
        const life_marks = LifeEventMarks.get_marks(e);
        life_marks.b_status = 1 << basement_status_enum.outside;
        if (sys_check_awake(0)) {
          wait_flag = 1;
          era.print(i18n().timon.get_it_bs_chara_leave(get_chara_talk(e)));
          get_custom_basement(e).out();
          era.println();
        }
        if (get_random_value(0, 100) < (life_marks.b_s_level - 2) * 20) {
          my_life_marks.b_food_medicine = 1;
        }
        if (is_vacation) {
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer +
                get_random_value(60, 120) +
                120 -
                life_marks.b_s_level * 24,
              action_type_enum.back_basement,
            ),
          );
        } else {
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer - (new_timer % minutes_in_a_day) + 17 * 60,
              action_type_enum.back_basement,
            ),
          );
        }
        if (
          basement_queue.clean_actions(
            (a) =>
              a.chara_id === e && a.type === action_type_enum.digestive_end,
          ).length
        ) {
          sys_change_attr_and_print(
            e,
            attr_enum.hp,
            get_random_value(100, 200),
          );
          life_marks.b_food_buff = 0;
        }
      });
    }
    my_life_marks.b_timer = new_timer;
  } else {
    wait_flag = era.print(i18n().timon.it_bs_final_escape);
    sys_handle_escape_basement();
  }
  for (const cid of basement_owners.get()) {
    const life_marks = LifeEventMarks.get_marks(cid);
    if (
      life_marks.b_status !== 1 << basement_status_enum.outside ||
      !sys_check_awake(cid)
    ) {
      continue;
    }
    const s_level = sys_calc_security_level(cid, 1);
    if (life_marks.b_s_level > s_level) {
      life_marks.b_s_level = s_level;
      if (sys_check_awake(0)) {
        await era.printAndWait(
          i18n().timon.get_it_bs_downgrade_security(get_chara_talk(cid)),
        );
      }
    }
  }
  wait_flag && (await era.waitAnyKey());
}

module.exports = sys_handle_time_in_basement;
module.exports.init = (h) => (get_random_value = h);
module.exports.handle_rape = handle_rape;
