const { createHash } = require('crypto');

const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_cur_chara_info = require('#/page/components/cur-chara-info');
const page_header = require('#/page/components/page-header');
const { print_chara_info } = require('#/page/page-exp');
const print_load_page = require('#/page/page-load-game');
const print_save_page = require('#/page/page-save-game');

const basement_queue = require('#/event/basement-queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');
const { minutes_in_a_day } = require('#/utils/value-utils');

const BasementAction = require('#/data/event/basement-action');
const BasementOwners = require('#/data/event/basement-owners');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');
const sys_get_intelligence_ratio_in_fight = require('#/system/ero/fight/sys-get-intelligence-ratio');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const basement_desc = [
  '并没有像样的阻碍',
  '只要略施小计就可以逃脱',
  '不是那么容易逃脱',
  '似乎有着难办的机关',
  '被机关和铁门保卫着',
  '感觉只能把牢底坐穿了',
];

const basement_just_status =
  (1 << BasementAction.basement_status_enum.just_back) +
  (1 << BasementAction.basement_status_enum.just_stop_sex);
const basement_no_cost_status =
  (1 << BasementAction.basement_status_enum.outside) +
  (1 << BasementAction.basement_status_enum.just_back) +
  (1 << BasementAction.basement_status_enum.sex) +
  (1 << BasementAction.basement_status_enum.just_stop_sex);

const security_desc = [
  '处于一时冲动的后悔',
  '有着不可低估的决心',
  '处于顾此失彼的脆弱',
  '有着万无一失的心防',
];

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
 * @param {[]} info_list
 * @param info
 */
function handle_push_info(info_list, ...info) {
  if (info_list.length > 0) {
    info_list.push({ isBr: true });
  }
  info_list.push(...info);
}

/**
 * @param {number} min
 * @param {number} max
 * @param {boolean} [is_float]
 * @returns {number}
 */
function get_random_value(min, max, is_float) {
  if (min >= max) {
    return min;
  }
  const life_marks = new LifeEventMarks(0);
  const value =
    min +
    ((max - min + 1) * Number(`0x${life_marks.b_r_seed.substring(0, 8)}`)) /
      0x100000000;
  const hash = createHash('md5');
  hash.update(life_marks.b_r_seed);
  life_marks.b_r_seed = hash.digest('hex');
  if (is_float) {
    return value;
  }
  return Math.floor(value);
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
 * @param {LifeEventMarks} my_life_marks
 * @param {BasementOwners} basement_owners
 * @param {number} [sex_end_time]
 */
async function handle_time_change(
  my_life_marks,
  basement_owners,
  sex_end_time,
) {
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
            e.timer + get_random_value(20, 40),
            BasementAction.action_type_enum.action_end,
          ),
        );
    }
    if (era.get('flag:当前位置') !== location_enum.basement) {
      break;
    }
  }
  const delta = new_timer - my_life_marks.b_timer,
    out_characters = [],
    is_vacation = check_vacation(new_timer);
  let fix_character = 0,
    is_raping = false;
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
        basement_queue.add_action(
          new BasementAction(
            e,
            new_timer + get_random_value(120, 180),
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
      } else {
        if (
          !fix_character &&
          my_life_marks.b_enhance - my_life_marks.b_now >=
            life_marks.b_s_level &&
          get_random_value(0, 100) < life_marks.b_s_level * 20
        ) {
          fix_character = e;
        } else {
          const timer_in_day = new_timer % minutes_in_a_day;
          if (is_vacation) {
            if (
              timer_in_day >= 7 * 60 &&
              timer_in_day < 16 * 60 &&
              new_timer - life_marks.b_out_cd > 0
            ) {
              out_characters.push(e);
            }
          } else if (timer_in_day >= 6 * 60 + 30 && timer_in_day < 16 * 60) {
            out_characters.push(e);
          }
        }
      }
    }
  });
  if (is_raping) {
    era.logger.info('rape');
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
  wait_flag && (await era.waitAnyKey());
}

/**
 * @param _
 * @param {function():Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (_, save_and_next_week, flags) => {
  const my_life_marks = new LifeEventMarks(0),
    basement_info = [],
    basement_owners = new BasementOwners(),
    me = get_chara_talk(0);
  if (flags.week_start) {
    const hash = createHash('md5');
    hash.update(
      era.get('callname:0:-1') +
        era.get('flag:当前回合数') +
        basement_owners.get(0),
    );
    my_life_marks.b_r_seed = hash.digest('hex');
    flags.week_start = false;
  }
  if (my_life_marks.b_timer >= 7 * minutes_in_a_day) {
    return save_and_next_week();
  }
  while (!sys_check_awake(0)) {
    await handle_time_change(my_life_marks, basement_owners);
  }
  basement_queue.clean_actions(
    (e) =>
      e.chara_id === 0 && e.type === BasementAction.action_type_enum.action_end,
  );
  my_life_marks.b_stamina_buff = 0;
  my_life_marks.b_time_buff = 0;
  await era.clear();
  page_header();
  const chara_list = [
    0,
    ...sort_list(
      basement_owners
        .get()
        .filter(
          (e) =>
            new LifeEventMarks(e).b_status !==
            1 << BasementAction.basement_status_enum.outside,
        ),
      (e, i) => (!sys_check_awake(e) << 1) + i,
      true,
    ),
  ];
  if (chara_list.length > 1) {
    print_cur_chara_info(chara_list[1], undefined, chara_list[2]);
  }
  let strike = false,
    is_awake = 0;
  if (chara_list.length > 1) {
    if (
      chara_list.length === 2 &&
      new LifeEventMarks(chara_list[1]).b_status ===
        1 << BasementAction.basement_status_enum.just_back
    ) {
      strike = true;
      handle_push_info(
        basement_info,
        get_chara_talk(chara_list[1]).get_colored_name(),
        ' 刚刚回到这里，也许是一个偷袭的好机会……',
      );
    } else {
      is_awake = chara_list.slice(1).reduce((p, chara_id) => {
        if (sys_check_awake(chara_id)) {
          handle_push_info(
            basement_info,
            get_chara_talk(chara_id).get_colored_name(),
            ' 看上去',
            security_desc[
              (era.get(`love:${chara_id}`) >= 85) * 2 +
                (new LifeEventMarks(chara_id).b_s_level >= 3)
            ],
          );
          return p + 1;
        }
        handle_push_info(
          basement_info,
          get_chara_talk(chara_id).get_colored_name(),
          era.get(`status:${chara_id}:马跳S`)
            ? ' 沉沉地睡着……'
            : ' 静静地睡着……',
        );
        return p;
      }, 0);
    }
    handle_push_info(
      basement_info,
      '共处在昏暗的房间内……',
      basement_desc[my_life_marks.b_now],
    );
  } else {
    handle_push_info(
      basement_info,
      '昏暗、空无一人的房间……',
      my_life_marks.b_now > 1 ? '但是' : '',
      basement_desc[my_life_marks.b_now],
      '……',
    );
  }
  const action_list = [];
  action_list.push(
    {},
    {
      n: '只是静坐',
      async h() {
        action_time = get_random_value(15, 30);
        my_life_marks.b_time_buff = 1;
        await era.printAndWait([
          me.get_colored_name(),
          ' 静静地坐着，任凭时间流逝……',
        ]);
      },
    },
    {
      n: '小睡片刻',
      async h() {
        action_time = get_random_value(45, 90);
        my_life_marks.b_stamina_buff = 0.5;
        my_life_marks.b_time_buff = 1;
        era.set('status:0:沉睡', 1);
        await era.printAndWait([me.get_colored_name(), ' 选择了小睡片刻……']);
      },
    },
  );
  let action_time;
  if (is_awake > 0) {
    action_list[0] = {
      n: '虚与委蛇',
      async h() {
        action_time = get_random_value(30, 60);
        my_life_marks.b_time_buff = -1;
        await era.printAndWait([
          me.get_colored_name(),
          ' 尝试讨好',
          ...(chara_list.length === 2
            ? [' ', get_chara_talk(chara_list[1]).get_colored_name()]
            : [get_chara_talk(chara_list[1]).sex, '们']),
          '……',
        ]);
        chara_list
          .slice(1)
          .forEach((e) => sys_like_chara(e, 0, get_random_value(5, 10)));
      },
    };
    action_list.push({ n: '邀请上床', h() {} });
    if (strike && chara_list.length === 2) {
      action_list.push({
        n: '背面偷袭',
        async h() {
          sys_change_attr_and_print(0, '体力', -get_random_value(75, 125));
          sys_change_attr_and_print(0, '精力', -get_random_value(75, 125));
          sys_like_chara(chara_list[1], 0, -get_random_value(75, 125), false);
          if (
            get_random_value(0, 100) <
            60 *
              (sys_get_strength_ratio_in_fight(0, chara_list[1]) +
                sys_get_intelligence_ratio_in_fight(0, chara_list[1]))
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 的偷袭奏效了！成功逃离了地下室！',
            ]);
            my_life_marks.b_status =
              1 << BasementAction.basement_status_enum.escape;
            my_life_marks.b_now = -1;
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              ' 的偷袭失败了！被打晕了过去！',
            ]);
          }
          if (my_life_marks.b_now >= 0) {
            my_life_marks.b_enhance = Math.min(
              my_life_marks.b_enhance +
                chara_list.slice(1).reduce((p, c) => {
                  const life_marks = new LifeEventMarks(c);
                  life_marks.b_s_level = Math.min(5, life_marks.b_s_level + 2);
                  return (
                    p + (get_random_value(0, 100) < life_marks.b_s_level * 40)
                  );
                }, 0),
              5,
            );
            era.set('status:0:沉睡', 2);
            basement_queue.add_action(
              new BasementAction(
                0,
                my_life_marks.b_timer + get_random_value(180, 240),
                BasementAction.action_type_enum.get_up,
              ),
            );
          }
        },
      });
    } else {
      action_list.push({
        n: '正面反抗',
        async h() {
          sys_change_attr_and_print(0, '体力', -get_random_value(125, 175));
          sys_change_attr_and_print(0, '精力', -get_random_value(100, 150));
          if (
            chara_list.slice(1).reduce((p, c) => {
              sys_like_chara(
                chara_list[1],
                0,
                -get_random_value(75, 125),
                false,
              );
              return (
                p &&
                get_random_value(0, 100) <
                  100 * sys_get_strength_ratio_in_fight(0, c)
              );
            }, false)
          ) {
            await era.printAndWait([me.get_colored_name(), ' 的反抗成功了！']);
            if (get_random_value(0, 100) < 100 / (my_life_marks.b_now + 1)) {
              await era.printAndWait([
                me.get_colored_name(),
                ' 成功解除了机关，逃离了地下室！',
              ]);
              my_life_marks.b_status =
                1 << BasementAction.basement_status_enum.escape;
              my_life_marks.b_now = -1;
            } else {
              await era.printAndWait([
                '但 ',
                me.get_colored_name(),
                ' 败给了机关……',
                { isBr: true },
                me.get_colored_name(),
                '被打晕后带回了地下室……',
              ]);
            }
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              ' 的反抗失败了！被打晕了过去！',
            ]);
          }
          if (my_life_marks.b_now >= 0) {
            my_life_marks.b_enhance = Math.min(
              my_life_marks.b_enhance +
                chara_list.slice(1).reduce((p, c) => {
                  const life_marks = new LifeEventMarks(c);
                  life_marks.b_s_level = Math.min(5, life_marks.b_s_level + 2);
                  return (
                    p + (get_random_value(0, 100) < life_marks.b_s_level * 40)
                  );
                }, 0),
              5,
            );
            era.set('status:0:沉睡', 2);
            basement_queue.add_action(
              new BasementAction(
                0,
                my_life_marks.b_timer + get_random_value(180, 240),
                BasementAction.action_type_enum.get_up,
              ),
            );
          }
        },
      });
    }
    action_list.push(
      { n: '请求释放', h() {} },
      { n: '询问时间', h() {} },
      { n: '任其施为 (放弃)', h() {} },
    );
  } else {
    action_list[0] = {
      n: '尝试脱困',
      async h() {
        action_time = get_random_value(30, 60);
        my_life_marks.b_status =
          1 << BasementAction.basement_status_enum.escape;
        if (get_random_value(0, 100) < 100 / (my_life_marks.b_now + 1)) {
          my_life_marks.b_now--;
          if (!my_life_marks.b_now) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 成功解除了机关，逃离了地下室！',
            ]);
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              ' 破解了一层机关！',
            ]);
          }
        } else {
          await era.printAndWait([me.get_colored_name(), ' 未能破解机关……']);
        }
      },
    };
    action_list.push({ n: '听天由命 (放弃)', h() {} });
  }
  era.printInColRows(
    [
      { type: 'divider' },
      {
        content: basement_info,
        type: 'text',
      },
      { type: 'divider' },
    ],
    action_list.map((e, i) => ({
      accelerator: 100 + i,
      config: { width: 6 },
      content: e.n,
      type: 'button',
    })),
    [
      {
        accelerator: 400,
        config: { width: 6 },
        content: '个人情报',
        type: 'button',
      },
      chara_list.length > 1
        ? {
            accelerator: 401,
            config: { width: 6 },
            content: '对方情报',
            type: 'button',
          }
        : undefined,
      {
        accelerator: 900,
        config: { width: 6 },
        content: '保存进度',
        type: 'button',
      },
      {
        accelerator: 901,
        config: { width: 6 },
        content: '加载存档',
        type: 'button',
      },
    ].filter((e) => e),
  );
  const ret = await era.input();
  switch (ret) {
    case 400:
      await print_chara_info(0, chara_list);
      break;
    case 401:
      await print_chara_info(chara_list[1], chara_list);
      break;
    case 900:
      await print_save_page();
      break;
    case 901:
      await print_load_page();
      break;
    case 990:
      era.set('flag:显示半身像', 1 - era.get('flag:显示半身像'));
      break;
    default:
      era.drawLine();
      await action_list[ret - 100].h();
  }
  if (action_time) {
    basement_queue.add_action(
      new BasementAction(
        0,
        my_life_marks.b_timer + action_time,
        era.get('status:0:沉睡')
          ? BasementAction.action_type_enum.get_up
          : BasementAction.action_type_enum.action_end,
      ),
    );
    do {
      await handle_time_change(my_life_marks, basement_owners);
    } while (
      !sys_check_awake(0) ||
      my_life_marks.b_status === 1 << BasementAction.basement_status_enum.sex
    );
  }
};
