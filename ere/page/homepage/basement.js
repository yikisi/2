const { createHash } = require('crypto');

const era = require('#/era-electron');

const sys_handle_time_in_basement = require('#/system/basement/sys-handle-time-in-basement');
const sys_get_intelligence_ratio_in_fight = require('#/system/ero/fight/sys-get-intelligence-ratio');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
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
const { get_custom_basement } = require('#/event/basement/basement-factory');

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

sys_handle_time_in_basement.init(get_random_value);

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
    await sys_handle_time_in_basement(my_life_marks, basement_owners);
  }
  basement_queue.clean_actions(
    (e) =>
      e.chara_id === 0 && e.type === BasementAction.action_type_enum.action_end,
  );
  my_life_marks.b_status = 1 << BasementAction.action_type_enum.idle;
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
      is_awake = 1;
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
  if (is_awake > 0) {
    action_list.push({
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
          .forEach((e) => sys_like_chara(e, 0, get_random_value(5, 10), false));
      },
      n: '虚与委蛇',
    });
  } else {
    action_list.push({
      async h() {
        action_time = get_random_value(30, 60);
        my_life_marks.b_status =
          1 << BasementAction.basement_status_enum.escape;
        if (
          get_random_value(0, 100) <
          (100 + era.get('base:0:速度') / 200) / (my_life_marks.b_now + 1)
        ) {
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
      n: '尝试脱困',
    });
  }
  action_list.push(
    {
      async h() {
        action_time = get_random_value(15, 30);
        my_life_marks.b_time_buff = 1;
      },
      n: '只是静坐',
    },
    {
      async h() {
        action_time = get_random_value(45, 90);
        my_life_marks.b_stamina_buff = 0.5;
        my_life_marks.b_time_buff = 1;
        era.set('status:0:沉睡', 1);
        await era.printAndWait([me.get_colored_name(), ' 选择了小睡片刻……']);
      },
      n: '小睡片刻',
    },
  );
  let action_time;
  if (is_awake > 0) {
    action_list.push({
      async h() {
        await sys_handle_time_in_basement.handle_rape(
          chara_list.filter(sys_check_awake),
          my_life_marks,
        );
      },
      n: '邀请上床',
    });
    if (strike && chara_list.length === 2) {
      action_list.push({
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
                basement_owners.get().reduce((p, c) => {
                  const life_marks = new LifeEventMarks(c);
                  life_marks.b_s_level = Math.min(5, life_marks.b_s_level + 2);
                  return (
                    p + (get_random_value(0, 100) < life_marks.b_s_level * 40)
                  );
                }, 0) +
                1,
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
        n: '背面偷袭',
      });
    } else {
      action_list.push({
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
            if (
              get_random_value(0, 100) <
              (100 + era.get('base:0:速度') / 200) / (my_life_marks.b_now + 1)
            ) {
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
                basement_owners.get().reduce((p, c) => {
                  const life_marks = new LifeEventMarks(c);
                  life_marks.b_s_level = Math.min(
                    5,
                    life_marks.b_s_level + 1 + (chara_list.indexOf(c) !== -1),
                  );
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
        n: '正面反抗',
      });
    }
    action_list.push(
      {
        h() {},
        n: '请求释放',
      },
      {
        async h() {
          action_time = get_random_value(1, 5);
          await get_custom_basement(chara_list[1]).ask_time();
        },
        n: '询问时间',
      },
      {
        h() {},
        n: '任其施为 (放弃)',
      },
    );
  } else {
    action_list.push({
      h() {},
      n: '听天由命 (放弃)',
    });
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
  }
  if (
    action_time ||
    my_life_marks.b_status === 1 << BasementAction.basement_status_enum.sex
  ) {
    do {
      await sys_handle_time_in_basement(my_life_marks, basement_owners);
    } while (
      !sys_check_awake(0) ||
      my_life_marks.b_status === 1 << BasementAction.basement_status_enum.sex
    );
  }
};
