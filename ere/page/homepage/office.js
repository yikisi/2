const era = require('#/era-electron');

const sys_call_daily_event = require('#/system/script/sys-call-daily-script');
const {
  sys_change_attr_and_print,
  sys_get_billings,
  sys_handle_action,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_act_disabled,
  sys_check_awake,
  sys_check_train_enabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const select_target = require('#/page/components/select-target');
const { generate_race_button } = require('#/page/homepage/snippets');
const page_chairman_office = require('#/page/page-chairman-office');
const print_exp_page = require('#/page/page-exp');
const print_god_shop = require('#/page/page-god-shop');
const print_juel_shop_page = require('#/page/page-juel-shop');
const print_load_page = require('#/page/page-load-game');
const print_out_page = require('#/page/page-out');
const race_page = require('#/page/page-race');
const print_recruit_page = require('#/page/page-recruit-rand');
const reg_race_page = require('#/page/page-register-race');
const report_race_page = require('#/page/page-report-race');
const print_save_page = require('#/page/page-save-game');
const print_school_page = require('#/page/page-school');
const print_shop_page = require('#/page/page-shop');
const print_storage_page = require('#/page/page-storage');
const print_train_page = require('#/page/page-train');
const page_trainer_office = require('#/page/page-trainer-office');
const page_visitors = require('#/page/page-visitors');

const { get_custom_check } = require('#/event/check/check-factory');
const { shop_end, shop_start } = require('#/event/shop/tachyon-shop');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

/**
 * @param {number} chara_id
 * @param {function(number,number,number):Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (chara_id, save_and_next_week, flags) => {
  const celebration = get_celebration(),
    celebration_cost = 50 * (era.get('cflag:0:节日事件标记') + 1),
    cur_weeks = era.get('flag:当前回合数'),
    event_marks = new EventMarks(chara_id),
    growth_stage = era.get(`cflag:${chara_id}:成长阶段`),
    is_love_rejected = era.get(`cflag:${chara_id}:爱慕暂拒`),
    jpy = era.get('flag:当前马币'),
    not_in_same_loc =
      era.get(`cflag:${chara_id}:位置`) !== era.get('cflag:0:位置'),
    office_activity_filter = era.get('flag:筛除训练室活动'),
    out_activity_filter = era.get('flag:筛除外出活动'),
    personal_action = get_custom_check(chara_id).get_personal_action(),
    registered_race = sys_reg_race(chara_id).curr,
    player_base = {
      stamina: era.get('base:0:体力'),
      time: era.get('base:0:精力'),
    },
    chara_base = chara_id
      ? {
          stamina: era.get(`base:${chara_id}:体力`),
          time: era.get(`base:${chara_id}:精力`),
        }
      : undefined;

  era.printInColRows(
    {
      columns: [
        { type: 'divider' },
        {
          accelerator: 100,
          content: '查看队伍列表',
          type: 'button',
        },
        {
          accelerator: 101,
          config: {
            disabled: !sys_check_train_enabled(chara_id) || !sys_check_awake(0),
            width: 6,
          },
          // 训自己的话显示自主训练
          content: `${
            !chara_id && sys_check_train_enabled(chara_id) ? '自主' : ''
          }训练`,
          type: 'button',
        },
        generate_race_button(chara_id, registered_race.week, cur_weeks),
        {
          accelerator: 103,
          config: {
            disabled:
              // 当然不能上自己
              !chara_id ||
              // 没有性成熟不能上
              growth_stage < 2 ||
              !sys_check_awake(0) ||
              not_in_same_loc,
            width: 6,
          },
          content: '邀请上床',
          type: 'button',
        },
        {
          accelerator: 999,
          config: {
            buttonType: event_marks.get(event_hooks.week_end)
              ? 'danger'
              : 'warning',
            width: 6,
          },
          content: '休息到下周',
          type: 'button',
        },
      ],
    },
    {
      columns: !office_activity_filter
        ? [
            {
              accelerator: 201,
              config: {
                buttonType: event_marks.get(event_hooks.office_study)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !chara_id ||
                  era.get(`cflag:${chara_id}:育成回合计时`) >= 48 * 3 ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  player_base.time < 300 ||
                  (chara_base && chara_base.time) < 300,
                width: 6,
              },
              content: '指导学习',
              type: 'button',
            },
            {
              accelerator: 202,
              config: {
                buttonType: event_marks.get(event_hooks.office_prepare)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !chara_id ||
                  era.get(`cflag:${chara_id}:育成回合计时`) >= 48 * 3 ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  jpy < 20 ||
                  player_base.time < 300 ||
                  (chara_base && chara_base.time) < 300,
                width: 6,
              },
              content: '赛前准备',
              type: 'button',
            },
            {
              accelerator: 203,
              // 虚空聊天就更过分了！
              config: { disabled: !chara_id || !sys_check_awake(0), width: 6 },
              content: '聊天',
              type: 'button',
            },
            {
              accelerator: 204,
              config: {
                disabled:
                  // 不能给自己送礼
                  !chara_id ||
                  // 幼年期不能送礼
                  growth_stage < 1 ||
                  jpy < 10 ||
                  !sys_check_awake(0) ||
                  !sys_check_awake(chara_id) ||
                  not_in_same_loc ||
                  player_base.time < 200,
                width: 6,
              },
              content: '送礼物',
              type: 'button',
            },
            {
              accelerator: 205,
              config: {
                buttonType: event_marks.get(event_hooks.office_cook)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  not_in_same_loc ||
                  player_base.stamina < 100,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}加餐`,
              type: 'button',
            },
            {
              accelerator: 206,
              config: {
                buttonType: event_marks.get(event_hooks.office_rest)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  not_in_same_loc ||
                  player_base.time < 100,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}小憩`,
              type: 'button',
            },
            {
              accelerator: 207,
              config: {
                buttonType: event_marks.get(event_hooks.office_game)
                  ? 'danger'
                  : 'warning',
                disabled:
                  growth_stage < 1 ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  player_base.time < 300 ||
                  (chara_base && chara_base.time) < 300,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}打游戏`,
              type: 'button',
            },
            {
              accelerator: 208,
              config: { disabled: chara_id && growth_stage < 1, width: 6 },
              content: `提升${chara_id ? '对方' : '自身'}性爱能力`,
              type: 'button',
            },
            era.get('flag:惩戒力度') <= 1 &&
            chara_id &&
            !sys_get_billings()[0].creditor &&
            growth_stage >= 2
              ? {
                  accelerator: 209,
                  config: {
                    disabled:
                      !chara_id ||
                      !sys_check_awake(chara_id) ||
                      !sys_check_awake(0) ||
                      not_in_same_loc,
                    width: 6,
                  },
                  content: '借钱',
                  type: 'button',
                }
              : undefined,
            chara_id && era.get(`cflag:${chara_id}:节日事件标记`)
              ? {
                  accelerator: 210,
                  config: {
                    buttonType: 'danger',
                    disabled:
                      !sys_check_awake(chara_id) ||
                      !sys_check_awake(0) ||
                      chara_base.time < 50 ||
                      player_base.time < celebration_cost ||
                      not_in_same_loc,
                    width: 6,
                  },
                  content: `一起庆祝 ${celebration}`,
                  type: 'button',
                }
              : undefined,
            personal_action.name
              ? {
                  accelerator: 211,
                  config: { width: 6 },
                  content: personal_action.name,
                  type: 'button',
                }
              : undefined,
            is_love_rejected && is_love_rejected === era.get(`love:${chara_id}`)
              ? {
                  accelerator: 212,
                  config: { disabled: not_in_same_loc, width: 6 },
                  content: '重新触发爱慕事件',
                  type: 'button',
                }
              : undefined,
            chara_id &&
            !era.get('flag:地下室之主') &&
            era.get('flag:惩戒力度') >= 2
              ? {
                  accelerator: 213,
                  config: {
                    disabled:
                      !chara_id ||
                      !sys_check_awake(chara_id) ||
                      !sys_check_awake(0) ||
                      not_in_same_loc,
                    width: 6,
                  },
                  content: '乞求狂爱',
                  type: 'button',
                }
              : undefined,
          ].filter((e) => e)
        : [],
    },
    {
      columns: !out_activity_filter
        ? [
            {
              accelerator: 301,
              config: {
                buttonType:
                  new EventMarks(0).get(event_hooks.recruit_start) ||
                  new EventMarks(0).get(event_hooks.recruit)
                    ? 'danger'
                    : 'warning',
                disabled:
                  era.get('flag:当前月') >= 4 ||
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.playground),
                    player_base,
                  ),
                width: 6,
              },
              content: '前往训练场 (招募)',
              type: 'button',
            },
            {
              accelerator: 302,
              config: {
                buttonType: event_marks.get(event_hooks.back_school)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.trainer),
                    player_base,
                  ),
                width: 6,
              },
              content: '前往训练员办公室',
              type: 'button',
            },
            {
              accelerator: 303,
              config: {
                buttonType: event_marks.get(event_hooks.back_school)
                  ? 'danger'
                  : 'warning',
                disabled: true,
                // !sys_check_awake(0) ||
                // sys_check_act_disabled(
                //   sys_get_move_cost(location_enum.clinic),
                //   player_base,
                // ),
                width: 6,
              },
              content: '前往保健室',
              type: 'button',
            },
            {
              accelerator: 304,
              config: {
                buttonType: new EventMarks(0).get(event_hooks.back_school)
                  ? 'danger'
                  : 'warning',
                disabled:
                  growth_stage < 1 ||
                  (chara_id && !sys_check_train_enabled(chara_id)) ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.god),
                    player_base,
                    chara_base,
                  ) ||
                  not_in_same_loc,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}前往三女神像`,
              type: 'button',
            },
            {
              accelerator: 305,
              config: {
                buttonType:
                  event_marks.get(event_hooks.school_atrium) ||
                  event_marks.get(event_hooks.back_school)
                    ? 'danger'
                    : 'warning',
                disabled:
                  growth_stage < 1 ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.atrium, chara_id),
                    player_base,
                    chara_base,
                  ) ||
                  not_in_same_loc,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}前往中庭`,
              type: 'button',
            },
            {
              accelerator: 306,
              config: {
                buttonType:
                  event_marks.get(event_hooks.school_rooftop) ||
                  event_marks.get(event_hooks.back_school)
                    ? 'danger'
                    : 'warning',
                disabled:
                  growth_stage < 1 ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.rooftop, chara_id),
                    player_base,
                    chara_base,
                  ) ||
                  not_in_same_loc,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}前往天台`,
              type: 'button',
            },
            {
              accelerator: 307,
              config: {
                buttonType: event_marks.get(event_hooks.back_school)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.chairman),
                    player_base,
                  ),
                width: 6,
              },
              content: '前往理事长办公室',
              type: 'button',
            },
            {
              accelerator: 308,
              config: {
                buttonType: event_marks.get(event_hooks.back_school)
                  ? 'danger'
                  : 'warning',
                disabled:
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.visitor),
                    player_base,
                  ),
                width: 6,
              },
              content: '前往访客接待室',
              type: 'button',
            },
            {
              accelerator: 309,
              config: {
                disabled: !sys_check_awake(0),
                width: 6,
              },
              content: '前往小卖部',
              type: 'button',
            },
            {
              accelerator: 310,
              // 幼年期只能呆在训练室
              config: {
                buttonType:
                  event_marks.get(event_hooks.out_start) ||
                  event_marks.get(event_hooks.out_river) ||
                  event_marks.get(event_hooks.out_shopping) ||
                  event_marks.get(event_hooks.out_church) ||
                  event_marks.get(event_hooks.out_station) ||
                  event_marks.get(event_hooks.back_school)
                    ? 'danger'
                    : 'warning',
                disabled:
                  growth_stage < 1 ||
                  !sys_check_awake(chara_id) ||
                  !sys_check_awake(0) ||
                  sys_check_act_disabled(
                    sys_get_move_cost(location_enum.gate, chara_id),
                    player_base,
                    chara_base,
                  ) ||
                  not_in_same_loc,
                width: 6,
              },
              content: `${chara_id ? '一起' : ''}外出`,
              type: 'button',
            },
          ].filter((e) => e)
        : [],
    },
    {
      columns: [
        {
          accelerator: 401,
          config: { width: 6 },
          content: '角色情报',
          type: 'button',
        },
        {
          accelerator: 402,
          config: {
            buttonType: office_activity_filter ? 'warning' : 'info',

            width: 6,
          },
          content: `筛除训练室活动 [${office_activity_filter ? '开' : '关'}]`,
          type: 'button',
        },
        {
          accelerator: 403,
          config: {
            buttonType: out_activity_filter ? 'warning' : 'info',
            width: 6,
          },
          content: `筛除外出活动 [${out_activity_filter ? '开' : '关'}]`,
          type: 'button',
        },
        {
          accelerator: 404,
          config: { width: 6 },
          content: '出走情报',
          type: 'button',
        },
        {
          accelerator: 405,
          config: { disabled: !sys_check_awake(0), width: 6 },
          content: '持有物品',
          type: 'button',
        },
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
      ],
    },
  );

  let temp = await era.input();
  switch (temp) {
    case 100:
      flags.after_select =
        era.set('flag:当前互动角色', await select_target()) !== chara_id;
      break;
    case 101:
      era.set('flag:当前位置', location_enum.playground);
      await print_train_page();
      era.set('flag:当前位置', location_enum.office);
      break;
    case 102:
      if (registered_race.week === era.get('flag:当前回合数')) {
        era.set('flag:当前位置', location_enum.race);
        await race_page(registered_race.race);
        era.set('flag:当前位置', location_enum.office);
      } else {
        await reg_race_page();
      }
      break;
    case 103:
      (await goto_sex(chara_id, location_enum.restroom)) &&
        (flags.week_start = true);
      era.set('flag:当前位置', location_enum.office);
      break;
    case 201:
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.office_study)())) {
        era.drawLine();
        await sys_call_daily_event(chara_id, event_hooks.office_study);
      }
      break;
    case 202:
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.office_prepare)())) {
        era.drawLine();
        await sys_call_daily_event(chara_id, event_hooks.office_prepare);
      }
      break;
    case 203:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.talk);
      break;
    case 204:
      era.drawLine();
      era.print([
        '给 ',
        get_chara_talk(chara_id).get_colored_name(),
        ' 送上了一份小礼物……',
      ]);
      era.println();
      await sys_call_daily_event(chara_id, event_hooks.office_gift);
      break;
    case 205:
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.office_cook)())) {
        era.drawLine();
        await sys_call_daily_event(chara_id, event_hooks.office_cook);
      }
      break;
    case 206:
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.office_rest)())) {
        era.drawLine();
        await sys_call_daily_event(chara_id, event_hooks.office_rest);
      }
      break;
    case 207:
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.office_game)())) {
        era.drawLine();
        await sys_call_daily_event(chara_id, event_hooks.office_game);
      }
      break;
    case 208:
      await print_juel_shop_page();
      break;
    case 209:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.borrow_money);
      break;
    case 210:
      sys_change_attr_and_print(0, '精力', -celebration_cost);
      sys_change_attr_and_print(chara_id, '精力', -50);
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.celebration, {});
      break;
    case 211:
      era.drawLine();
      await personal_action.handle();
      await era.waitAnyKey();
      break;
    case 212:
      era.drawLine();
      get_custom_check(chara_id).check_love_events();
      await era.printAndWait([
        get_chara_talk(chara_id).get_colored_name(),
        { content: ' 似乎决定重新审视你们之间的关系……' },
      ]);
      break;
    case 213:
      era.drawLine();
      era.set('flag:地下室之主', chara_id);
      await era.printAndWait([
        { content: '听了 ' },
        get_chara_talk(0).get_colored_name(),
        { content: ' 的请求，' },
        get_chara_talk(chara_id).get_colored_name(),
        { content: ' 似乎有些意动……' },
      ]);
      break;
    case 301:
      sys_handle_action(sys_get_move_cost(location_enum.playground));
      await print_recruit_page();
      break;
    case 302:
      sys_handle_action(sys_get_move_cost(location_enum.trainer));
      await page_trainer_office();
      break;
    case 303:
      sys_handle_action(sys_get_move_cost(location_enum.clinic));
      break;
    case 304:
      sys_handle_action(
        sys_get_move_cost(location_enum.god, chara_id),
        chara_id,
      );
      await print_god_shop();
      break;
    case 305:
      sys_handle_action(
        sys_get_move_cost(location_enum.atrium, chara_id),
        chara_id,
      );
      await print_school_page(location_enum.atrium);
      break;
    case 306:
      sys_handle_action(
        sys_get_move_cost(location_enum.rooftop, chara_id),
        chara_id,
      );
      await print_school_page(location_enum.rooftop);
      break;
    case 307:
      sys_handle_action(sys_get_move_cost(location_enum.chairman));
      await page_chairman_office();
      break;
    case 308:
      sys_handle_action(sys_get_move_cost(location_enum.visitor));
      await page_visitors();
      break;
    case 309:
      era.set('flag:当前位置', location_enum.school_shop);
      era.drawLine();
      temp = era.get('flag:当前互动角色');
      era.set('flag:当前互动角色', 0);
      await shop_start();
      await shop_end(
        await print_shop_page([
          ...new Array(4).fill(0).map((_, i) => 700 + i),
          ...new Array(4).fill(0).map((_, i) => 705 + i),
          800,
          { id: 801, limit: true },
          ...new Array(3).fill(0).map((_, i) => 802 + i),
          823,
          ...new Array(11).fill(0).map((_, i) => 830 + i),
          { id: 841, limit: true },
          ...new Array(7).fill(0).map((_, i) => 850 + i),
          ...new Array(4).fill(0).map((_, i) => 870 + i),
        ]),
      );
      era.set('flag:当前互动角色', temp);
      era.set('flag:当前位置', location_enum.office);
      break;
    case 310:
      sys_handle_action(
        sys_get_move_cost(location_enum.gate, chara_id),
        chara_id,
      );
      era.set('flag:当前位置', location_enum.gate);
      await print_out_page();
      era.set('flag:当前位置', location_enum.office);
      break;
    case 401:
      await print_exp_page();
      break;
    case 402:
      era.set('flag:筛除训练室活动', !era.get('flag:筛除训练室活动'));
      break;
    case 403:
      era.set('flag:筛除外出活动', !era.get('flag:筛除外出活动'));
      break;
    case 404:
    case 991:
      await report_race_page();
      break;
    case 405:
      await print_storage_page();
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
    case 999:
      flags.week_start = true;
  }
  flags.week_start &&
    (await save_and_next_week(
      chara_id,
      location_enum.office,
      location_enum.home,
    ));
};
