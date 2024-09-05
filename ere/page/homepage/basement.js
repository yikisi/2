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
const { get_random_value } = require('#/utils/value-utils');

const BasementAction = require('#/data/event/basement-action');
const BasementOwners = require('#/data/event/basement-owners');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const minutes_in_a_day = 24 * 60;

const basement_desc = [
  '并没有像样的阻碍',
  '只要略施小计就可以逃脱',
  '不是那么容易逃脱',
  '似乎有着难办的机关',
  '被机关和铁门保卫着',
  '感觉只能把牢底坐穿了',
];

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
 * @param {LifeEventMarks} my_life_marks
 * @param {BasementOwners} basement_owners
 */
async function handle_time_change(my_life_marks, basement_owners) {
  new BasementOwners().get().forEach((e) => {
    if (new LifeEventMarks(e).is_out === 1) {
      new LifeEventMarks(e).is_out = 0;
    }
  });
  let new_timer,
    wait_flag = false;
  era.drawLine();
  basement_queue.get_action().forEach((e) => {
    new_timer = e.timer;
    switch (e.type) {
      case BasementAction.action_type_enum.action_end:
        era.logger.info(`TEST：时间推进到 ${get_clock_for_debug(e.timer)}`);
        break;
      case BasementAction.action_type_enum.get_up:
        era.logger.info(
          `TEST：${get_clock_for_debug(e.timer)} 角色 ${e.chara_id} 醒来`,
        );
        wait_flag = era.print([
          ' 不知过了多久，',
          get_chara_talk(e.chara_id).get_colored_name(),
          ' 悠悠醒转……',
        ]);
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
        new LifeEventMarks(e.chara_id).is_out = 1;
        if (
          !check_vacation(e.timer) &&
          !check_vacation(e.timer + minutes_in_a_day)
        ) {
          basement_queue.add_action(
            new BasementAction(
              e.chara_id,
              e.timer + 14 * 60,
              BasementAction.action_type_enum.outside,
            ),
          );
        }
        break;
      case BasementAction.action_type_enum.outside:
        era.logger.info(
          `TEST：${get_clock_for_debug(e.timer)} 角色 ${e.chara_id} 离开`,
        );
        new LifeEventMarks(e.chara_id).is_out = 2;
        if (!check_vacation(e.timer)) {
          basement_queue.add_action(
            new BasementAction(
              e.chara_id,
              e.timer + 10 * 60,
              BasementAction.action_type_enum.back_basement,
            ),
          );
        }
    }
  });
  const delta = new_timer - my_life_marks.basement_timer;
  [0, ...basement_owners.get()].forEach((e) => {
    const life_marks = new LifeEventMarks(e);
    if (life_marks.is_out === 0) {
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
      era.get(`status:${e}:沉睡`) < 0 && era.set(`status:${e}:沉睡`, 0);
      era.get(`status:${e}:马跳S`) < 0 && era.set(`status:${e}:马跳S`, 0);
      sys_change_attr_and_print(
        e,
        '体力',
        (stamina_delta + life_marks.basement_stamina_buff) *
          delta *
          get_random_value(0.8, 1.2, true),
      );
      sys_change_attr_and_print(
        e,
        '精力',
        (time_delta + life_marks.basement_time_buff) *
          delta *
          get_random_value(0.8, 1.2, true),
      );
      life_marks.basement_stamina_buff = life_marks.basement_time_buff = 0;
      if (!era.get(`base:${e}:精力`) && !era.get(`status:${e}:沉睡`)) {
        wait_flag = era.print([
          get_chara_talk(e).get_colored_name(),
          ' 因精力不济昏睡了过去！',
        ]);
        era.set(`status:${e}:沉睡`, 2);
        basement_queue.add_action(
          new BasementAction(
            e,
            new_timer + get_random_value(120, 180),
            BasementAction.action_type_enum.get_up,
          ),
        );
      }
    }
  });
  my_life_marks.basement_timer = new_timer;
  wait_flag && (await era.waitAnyKey());
}

/**
 * @param _
 * @param {function():Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (_, save_and_next_week, flags) => {
  flags.week_start = false;
  const my_life_marks = new LifeEventMarks(0),
    basement_info = [],
    basement_owners = new BasementOwners();
  if (my_life_marks.basement_timer >= 7 * minutes_in_a_day) {
    return save_and_next_week();
  }
  while (era.get('status:0:沉睡') || era.get('status:0:马跳S')) {
    await handle_time_change(my_life_marks, basement_owners);
  }
  await era.clear();
  page_header();
  const chara_list = [
    0,
    ...sort_list(
      basement_owners.get().filter((e) => new LifeEventMarks(e).is_out < 2),
      (e, i) => (!sys_check_awake(e) << 1) + i,
      true,
    ),
  ];
  if (chara_list.length > 1) {
    print_cur_chara_info(chara_list[1], undefined, chara_list[2]);
  }
  let strike = false,
    is_awake = true;
  if (chara_list.length > 1) {
    if (
      chara_list.length === 2 &&
      new LifeEventMarks(chara_list[1]).is_out === 1
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
                (new LifeEventMarks(chara_id).security_level >= 3)
            ],
          );
          return true;
        }
        handle_push_info(
          basement_info,
          get_chara_talk(chara_id).get_colored_name(),
          era.get(`status:${chara_id}:马跳S`)
            ? ' 沉沉地睡着……'
            : ' 静静地睡着……',
        );
        return p;
      }, false);
    }
    handle_push_info(
      basement_info,
      '共处在昏暗的房间内……',
      basement_desc[my_life_marks.basement_now],
    );
  } else {
    handle_push_info(
      basement_info,
      '昏暗、空无一人的房间……',
      my_life_marks.basement_now > 1 ? '但是' : '',
      basement_desc[my_life_marks.basement_now],
      '……',
    );
  }
  const action_list = [];
  let action_time;
  if (chara_list.length > 1 && is_awake) {
    action_list.push(
      {
        n: '虚与委蛇',
        h() {
          action_time = get_random_value(30, 90);
        },
      },
      {
        n: '只是静坐',
        h() {
          action_time = get_random_value(15, 30);
          my_life_marks.basement_time_buff = 1;
        },
      },
      { n: '邀请上床', h() {} },
    );
    if (strike) {
      action_list.push({ n: '背面偷袭', h() {} });
    } else {
      action_list.push({ n: '正面反抗', h() {} });
    }
    action_list.push(
      { n: '请求释放', h() {} },
      { n: '询问时间', h() {} },
      { n: '任其施为 (放弃)', h() {} },
    );
  } else {
    action_list.push(
      { n: '尝试脱困', h() {} },
      {
        n: '只是静坐',
        h() {
          action_time = get_random_value(15, 30);
          my_life_marks.basement_time_buff = 1;
        },
      },
      {
        n: '小睡片刻',
        h() {
          action_time = get_random_value(45, 90);
          era.set('status:0:沉睡', 1);
        },
      },
      { n: '听天由命 (放弃)', h() {} },
    );
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
      action_list[ret - 100].h();
  }
  if (action_time) {
    basement_queue.add_action(
      new BasementAction(
        0,
        my_life_marks.basement_timer + action_time,
        era.get('status:0:沉睡')
          ? BasementAction.action_type_enum.get_up
          : BasementAction.action_type_enum.action_end,
      ),
    );
    do {
      await handle_time_change(my_life_marks, basement_owners);
    } while (era.get('status:0:沉睡') || era.get('status:0:马跳S'));
  }
};
