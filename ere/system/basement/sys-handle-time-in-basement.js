const era = require('#/era-electron');

const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_attr_and_print,
  sys_change_lust,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const basement_queue = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { log_max_wp, minutes_in_a_day } = require('#/utils/value-utils');

const BasementAction = require('#/data/event/basement-action');
const BasementOwners = require('#/data/event/basement-owners');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');
const page_ero = require('#/page/page-ero');
const { check_satisfied } = require('#/system/ero/sys-calc-ero-status');

const basement_just_status =
    (1 << BasementAction.basement_status_enum.just_back) +
    (1 << BasementAction.basement_status_enum.just_stop_sex),
  basement_no_cost_status =
    (1 << BasementAction.basement_status_enum.outside) +
    (1 << BasementAction.basement_status_enum.just_back) +
    (1 << BasementAction.basement_status_enum.sex) +
    (1 << BasementAction.basement_status_enum.just_stop_sex),
  default_my_filter = new Array(5).fill(false);

let get_random_value = () => 0;
let sex_end_time = undefined;

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

function get_clock_for_debug(timer) {
  return `第 ${Math.floor(
    timer / minutes_in_a_day + 1,
  ).toString()} 天 ${Math.floor(
    (timer % minutes_in_a_day) / 60,
  ).toString()} 时 ${(timer % 60).toString()} 分`;
}

/**
 * @param {LifeEventMarks} my_marks
 * @param {LifeEventMarks} owner_marks
 * @param {number} owner_id
 * @return {function():number}
 */
function handle_prison_again(my_marks, owner_marks, owner_id) {
  if (my_marks.b_status === 1 << BasementAction.basement_status_enum.escape) {
    my_marks.b_status = 1 << BasementAction.basement_status_enum.idle;
    const me = get_chara_talk(0),
      owner = get_chara_talk(owner_id);
    owner_marks.b_s_level = Math.min(owner_marks.b_s_level + 1, 5);
    if (
      my_marks.b_enhance < 5 &&
      get_random_value(0, 100) < owner_marks.b_s_level * 20
    ) {
      my_marks.b_enhance++;
    }
    const to_print =
      my_marks.b_now < 0
        ? [
            '但是 ',
            me.get_colored_name(),
            ' 被 ',
            owner.get_colored_name(),
            ' 抓回来了！',
          ]
        : [
            me.get_colored_name(),
            ' 尝试逃脱的行为被 ',
            owner.get_colored_name(),
            ' 发现了！',
          ];
    if (my_marks.b_now < 0) {
      new BasementOwners()
        .get()
        .forEach((e) =>
          sys_like_chara(e, 0, -50 - 30 * (e === owner_id), false),
        );
      my_marks.b_now = 1;
    } else {
      new BasementOwners()
        .get()
        .forEach((e) =>
          sys_like_chara(e, 0, -20 - 30 * (e === owner_id), false),
        );
    }
    return () => {
      let ret = era.print(to_print);
      ret +=
        owner_marks.b_s_level === 5
          ? 0
          : era.print([
              owner.get_colored_name(),
              ' 对 ',
              me.get_colored_name(),
              ' 更加警惕了……',
            ]);
      return ret;
    };
  }
  return () => 0;
}

/**
 * @param {number[]} part_list
 * @param {LifeEventMarks} my_life_marks
 * @param {boolean} [is_rape]
 */
async function handle_rape(part_list, my_life_marks, is_rape) {
  const cache = {};
  part_list.forEach((e) => {
    new LifeEventMarks(e).b_status =
      1 << BasementAction.basement_status_enum.sex;
    if (e) {
      cache[e] = era.get(`relation:${e}:0`);
    }
  });
  basement_queue.clean_actions(
    (e) =>
      part_list.indexOf(e.chara_id) !== -1 &&
      e.type !== BasementAction.action_type_enum.get_up,
  );
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
    await print_ero_page(undefined, true);
  } else {
    const get_up_time =
      basement_queue.find_action(
        (e) =>
          e.chara_id === 0 && e.type === BasementAction.action_type_enum.get_up,
      ).timer - my_life_marks.b_timer;
    let action_count = 0,
      current = new Date().getTime(),
      flag_rape = true,
      temp;
    wake_up = false;
    while (flag_rape) {
      await sys_handle_ero_act(ero_hooks.relax, default_my_filter, false);
      action_count++;
      if (
        (check_satisfied(part_list[1]) &&
          (!part_list[2] || check_satisfied(part_list[2]))) ||
        (wake_up =
          era.get('base:0:精力') > 0 &&
          !era.get('status:0:马跳S') &&
          (3 * era.get('tflag:回合') >= get_up_time ||
            ((temp = era.get('ex:0:TotalEX')) > 0 &&
              Math.random() < Math.min(temp, 5) * 0.05)))
      ) {
        flag_rape = false;
      }
    }
    current = new Date().getTime() - current;
    era.logger.debug(
      `角色 ${part_list[1]}${
        part_list[2] ? ' & ' + part_list[2] : ''
      } 睡奸完毕！${action_count} actions, ${current}ms, ${(
        current / action_count
      ).toFixed(2)} ms/action`,
    );
    if (wake_up) {
      era.set('status:0:沉睡', 0);
      basement_queue.clean_actions(
        (e) =>
          e.chara_id === 0 && e.type === BasementAction.action_type_enum.get_up,
      );
      await era.printAndWait([
        '强烈的刺激使 ',
        get_chara_talk(0).get_colored_name(),
        ' 从睡梦中惊醒，发现 ',
        get_chara_talk(part_list[1]).get_colored_name(),
        ...(part_list[2]
          ? [' 与 ', get_chara_talk(part_list[2]).get_colored_name()]
          : []),
        ' 伏在身上！',
      ]);
      await page_ero(part_list[1]);
      era
        .getCharactersInTrain()
        .forEach((e) => era.add(`exp:${e}:睡奸次数`, -1));
    }
  }
  my_life_marks.b_timer = sex_end_time =
    my_life_marks.b_timer + Math.max((era.get('tflag:回合') - 1) * 3, 10);
  basement_queue.add_action(
    new BasementAction(
      0,
      sex_end_time,
      BasementAction.action_type_enum.stop_sex,
    ),
  );
  part_list.slice(1).forEach((e) => {
    if (cache[e] !== era.get(`relation:${e}:0`)) {
      sys_like_chara(
        e,
        0,
        is_rape ? get_random_value(50, 75) : get_random_value(75, 125),
        false,
      );
    }
    basement_queue.add_action(
      new BasementAction(
        e,
        sex_end_time,
        BasementAction.action_type_enum.stop_sex,
      ),
    );
  });
  await end_ero_and_show_result(wake_up);
}

/**
 * @param {LifeEventMarks} my_life_marks
 * @param {BasementOwners} basement_owners
 */
async function sys_handle_time_in_basement(my_life_marks, basement_owners) {
  era.logger.debug(`BASEMENT: IN SEX? ${!!sex_end_time}`);
  new BasementOwners().get().forEach((e) => {
    if ((new LifeEventMarks(e).b_status & basement_just_status) > 0) {
      new LifeEventMarks(e).b_status =
        1 << BasementAction.basement_status_enum.idle;
    }
  });
  let new_timer,
    wait_flag = false,
    print_handler = () => 0;
  era.drawLine();
  const actions = basement_queue.get_action();
  for (const e of actions) {
    const life_marks = new LifeEventMarks(e.chara_id);
    new_timer = e.timer;
    switch (e.type) {
      case BasementAction.action_type_enum.action_end:
        if (
          !e &&
          life_marks.b_status ===
            1 << BasementAction.basement_status_enum.escape &&
          life_marks.b_now < 0
        ) {
          era.set('flag:当前位置', location_enum.office);
        }
        life_marks.b_status = 1 << BasementAction.basement_status_enum.idle;
        break;
      case BasementAction.action_type_enum.fix_end:
        if (sys_check_awake(0)) {
          wait_flag = era.print([
            get_chara_talk(e.chara_id).get_colored_name(),
            ' 加固了地下室……',
          ]);
        }
        my_life_marks.b_now++;
        life_marks.b_status = 1 << BasementAction.basement_status_enum.idle;
        sys_change_attr_and_print(e.chara_id, '体力', -50);
        sys_change_attr_and_print(e.chara_id, '精力', -50);
        break;
      case BasementAction.action_type_enum.digestive_end:
        life_marks.b_food_buff = 0;
        break;
      case BasementAction.action_type_enum.get_up:
        era.logger.info(
          `TEST：${get_clock_for_debug(e.timer)} 角色 ${e.chara_id} 醒来`,
        );
        if (e.chara_id > 0) {
          print_handler = handle_prison_again(
            my_life_marks,
            life_marks,
            e.chara_id,
          );
        }
        if (!e.chara_id || sys_check_awake(0)) {
          wait_flag = era.print([
            '不知过了多久，',
            get_chara_talk(e.chara_id).get_colored_name(),
            ' 悠悠醒转……',
          ]);
          wait_flag += print_handler();
        }
        era.set(
          `status:${e.chara_id}:沉睡`,
          -era.get(`status:${e.chara_id}:沉睡`),
        );
        era.set(
          `status:${e.chara_id}:马跳S`,
          -era.get(`status:${e.chara_id}:马跳S`),
        );
        break;
      case BasementAction.action_type_enum.back_basement:
        era.logger.info(
          `TEST：${get_clock_for_debug(e.timer)} 角色 ${e.chara_id} 回到地下室`,
        );
        print_handler = handle_prison_again(
          my_life_marks,
          life_marks,
          e.chara_id,
        );
        if (sys_check_awake(0)) {
          wait_flag = era.print([
            get_chara_talk(e.chara_id).get_colored_name(),
            ' 回到地下室了……',
          ]);
          wait_flag += print_handler();
        }
        life_marks.b_status =
          1 << BasementAction.basement_status_enum.just_back;
        life_marks.b_out_cd =
          e.timer + get_random_value(60, 90) + 60 - life_marks.b_s_level * 12;
        basement_queue.add_action(
          new BasementAction(
            e.chara_id,
            e.timer + get_random_value(10, 20),
            BasementAction.action_type_enum.action_end,
          ),
        );
        break;
      case BasementAction.action_type_enum.stop_sex:
        life_marks.b_status =
          1 << BasementAction.basement_status_enum.just_stop_sex;
        basement_queue.add_action(
          new BasementAction(
            e.chara_id,
            e.timer +
              Math.floor(
                get_random_value(20, 40) *
                  (era.get(`base:${e.chara_id}:精力`)
                    ? 1
                    : 0.5 +
                      Math.log(
                        (era.get(`base:${e.chara_id}:根性`) * 0.5) / log_max_wp,
                      )),
              ),
            BasementAction.action_type_enum.action_end,
          ),
        );
        sex_end_time = undefined;
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
      rape_character = false;
    delta > 0 &&
      era.logger.info(`TEST：时间推进到 ${get_clock_for_debug(new_timer)}`);
    [0, ...basement_owners.get()].forEach((e) => {
      const life_marks = new LifeEventMarks(e);
      if (delta > 0 && (life_marks.b_status & basement_no_cost_status) === 0) {
        let stamina_delta, time_delta;
        if (
          era.get(`status:${e}:马跳S`) ||
          (era.get(`status:${e}:沉睡`) & 2) > 0
        ) {
          stamina_delta = 0.5;
          time_delta = 1;
        } else if (era.get(`status:${e}:沉睡`)) {
          stamina_delta = 1;
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
          '体力',
          (stamina_delta + life_marks.b_stamina_buff + life_marks.b_food_buff) *
            delta *
            get_random_value(0.8, 1.2, true),
        );
        sys_change_attr_and_print(
          e,
          '精力',
          (time_delta + life_marks.b_time_buff) *
            delta *
            get_random_value(0.8, 1.2, true),
        );
        if (!era.get(`base:${e}:精力`) && !era.get(`status:${e}:沉睡`)) {
          if (!e || sys_check_awake(0)) {
            wait_flag = era.print([
              get_chara_talk(e).get_colored_name(),
              ' 因精力不济昏睡了过去！',
            ]);
          }
          era.set(`status:${e}:沉睡`, 1);
          basement_queue.clean_actions((a) => a.chara_id === e);
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer +
                Math.floor(
                  get_random_value(120, 180) *
                    (1 -
                      (Math.log(era.get(`base:${e}:根性`)) * 0.5) / log_max_wp),
                ),
              BasementAction.action_type_enum.get_up,
            ),
          );
        }
      }
      era.get(`status:${e}:沉睡`) < 0 && era.set(`status:${e}:沉睡`, 0);
      era.get(`status:${e}:马跳S`) < 0 && era.set(`status:${e}:马跳S`, 0);
      if (
        e > 0 &&
        sys_check_awake(e) &&
        life_marks.b_status === 1 << BasementAction.basement_status_enum.idle
      ) {
        if (
          era.get(`base:${e}:体力`) / era.get(`maxbase:${e}:体力`) < 0.45 &&
          !life_marks.b_food_buff
        ) {
          if (sys_check_awake(0)) {
            wait_flag = era.print([
              get_chara_talk(e).get_colored_name(),
              ' 肚子饿了，吃了点东西……',
            ]);
          }
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer + 15,
              BasementAction.action_type_enum.action_end,
            ),
          );
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer + 4 * 60,
              BasementAction.action_type_enum.digestive_end,
            ),
          );
          life_marks.b_food_buff = 2.5;
        } else if (
          era.get(`base:${e}:精力`) / era.get(`maxbase:${e}:精力`) <
          0.3
        ) {
          if (sys_check_awake(0)) {
            wait_flag = era.print([
              get_chara_talk(e).get_colored_name(),
              ' 有点累了，躺在床上睡着了……',
            ]);
          }
          era.set(`status:${e}:沉睡`, 1);
          basement_queue.clean_actions((a) => a.chara_id === e);
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
              BasementAction.action_type_enum.get_up,
            ),
          );
        } else if (!rape_character) {
          if (
            !fix_character &&
            !basement_owners
              .get()
              .filter(
                (e) =>
                  new LifeEventMarks(e).b_status !==
                  1 << BasementAction.basement_status_enum.fix,
              ).length &&
            my_life_marks.b_enhance - my_life_marks.b_now >=
              life_marks.b_s_level &&
            get_random_value(0, 100) < life_marks.b_s_level * 20
          ) {
            fix_character = e;
          } else {
            const timer_in_day = new_timer % minutes_in_a_day;
            let stay_flag = true;
            if (is_vacation) {
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
              if (get_custom_check(e).is_want_make_love() > 0) {
                rape_character = e;
              } else if (sys_check_awake(0)) {
                wait_flag = era.print([
                  get_chara_talk(e).get_colored_name(),
                  ' 挑逗着 ',
                  get_chara_talk(0).get_colored_name(),
                  ' ……',
                ]);
                sys_like_chara(e, 0, get_random_value(0, 5), false);
                sys_change_lust(0, get_random_value(0, 100));
                sys_change_lust(e, get_random_value(0, 200));
              } else {
                sys_change_lust(e, get_random_value(-100, 200));
                basement_queue.add_action(
                  my_life_marks.b_timer + get_random_value(15, 45),
                );
                sys_like_chara(e, 0, get_random_value(0, 10), false);
              }
            }
          }
        }
      }
    });
    if (rape_character) {
      const part_list = [
        rape_character,
        ...basement_owners
          .get()
          .filter(
            (e) =>
              e !== rape_character &&
              sys_check_awake(e) &&
              new LifeEventMarks(e).b_status !==
                1 << BasementAction.basement_status_enum.outside,
          ),
      ];
      if (sys_check_awake(0)) {
        if (!part_list[1]) {
          await era.printAndWait([
            '在 ',
            get_chara_talk(part_list[0]).get_colored_name(),
            ' 的带领下，',
            get_chara_talk(part_list[1]).get_colored_name(),
            ' 一起向 ',
            get_chara_talk(0).get_colored_name(),
            ' 缓缓逼近……',
          ]);
        } else {
          await era.printAndWait([
            get_chara_talk(part_list[0]).get_colored_name(),
            ' 向 ',
            get_chara_talk(0).get_colored_name(),
            ' 缓缓逼近……',
          ]);
        }
      }
      await handle_rape([0, ...part_list], my_life_marks, true);
    } else {
      if (fix_character) {
        new LifeEventMarks(fix_character).b_status =
          1 << BasementAction.basement_status_enum.fix;
        basement_queue.add_action(
          new BasementAction(
            fix_character,
            new_timer + get_random_value(30, 60),
            BasementAction.action_type_enum.fix_end,
          ),
        );
        if (sys_check_awake(0)) {
          wait_flag = era.print([
            get_chara_talk(fix_character).get_colored_name(),
            ' 开始加固地下室了……',
          ]);
        }
      }
      out_characters.forEach((e) => {
        const life_marks = new LifeEventMarks(e);
        life_marks.b_status = 1 << BasementAction.basement_status_enum.outside;
        if (sys_check_awake(0)) {
          wait_flag = era.print([
            get_chara_talk(e).get_colored_name(),
            ' 要出去一趟……',
          ]);
        }
        if (is_vacation) {
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer +
                get_random_value(60, 120) +
                120 -
                life_marks.b_s_level * 24,
              BasementAction.action_type_enum.back_basement,
            ),
          );
        } else {
          basement_queue.add_action(
            new BasementAction(
              e,
              new_timer - (new_timer % minutes_in_a_day) + 17 * 60,
              BasementAction.action_type_enum.back_basement,
            ),
          );
        }
      });
    }
    my_life_marks.b_timer = new_timer;
  } else {
    // 逃离处理
    era.logger.info('TEST: OUT!');
  }
  wait_flag && (await era.waitAnyKey());
}

module.exports = sys_handle_time_in_basement;
module.exports.init = (h) => (get_random_value = h);
module.exports.handle_rape = handle_rape;
