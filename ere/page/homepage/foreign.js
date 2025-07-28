const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_awake,
  sys_check_train_enabled,
} = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const select_target = require('#/page/components/select-target');
const { generate_race_button } = require('#/page/homepage/snippets');
const print_exp_page = require('#/page/page-exp');
const print_load_page = require('#/page/page-load-game');
const race_page = require('#/page/page-race');
const reg_race_page = require('#/page/page-register-race');
const report_race_page = require('#/page/page-report-race');
const print_save_page = require('#/page/page-save-game');
const print_storage_page = require('#/page/page-storage');
const print_train_page = require('#/page/page-train');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');
const { run_custom_edu } = require('#/event/edu/edu-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const location2language = {};
location2language[location_enum.dubai] = location2language[
  location_enum.new_york
] = '英';
location2language[location_enum.paris] = '法';
location2language[location_enum.hongkong] = location2language[
  location_enum.guangzhou
] = '粤';

/**
 * @param {number} cid
 * @param {function(number,number,number):Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (cid, save_and_next_week, flags) => {
  const celebration = get_celebration();
  const celebration_cost = 50 * (era.get('cflag:0:节日事件标记') + 1);
  const cur_location = era.get('flag:当前位置');
  const cur_weeks = era.get('flag:当前回合数');
  const event_marks = EventMarks.get(cid);
  const registered_race = sys_reg_race(cid).curr;
  const personal_action = get_custom_check(cid).get_personal_action();
  const player_base = {
    stamina: era.get('base:0:体力'),
    time: era.get('base:0:精力'),
  };
  const chara_base =
    cid > 0
      ? {
          stamina: era.get(`base:${cid}:体力`),
          time: era.get(`base:${cid}:精力`),
        }
      : undefined;
  const not_in_same_loc =
    era.get(`cflag:${cid}:位置`) !== era.get('cflag:0:位置');
  const jpy = era.get('flag:当前马币');
  era.drawLine();
  era.printInColRows(
    [
      {
        accelerator: 100,
        content: '查看队伍列表',
        type: 'button',
      },
      {
        accelerator: 101,
        config: {
          disabled: !sys_check_train_enabled(cid) || !sys_check_awake(0),
          width: 6,
        },
        // 训自己的话显示自主训练
        content: `${!cid && sys_check_train_enabled(cid) ? '自主' : ''}训练`,
        type: 'button',
      },
      generate_race_button(cid, registered_race.week, cur_weeks),
      {
        accelerator: 103,
        config: {
          disabled:
            // 当然不能上自己
            !cid ||
            // 没有性成熟不能上
            era.get(`cflag:${cid}:成长阶段`) < 2 ||
            !sys_check_awake(0) ||
            era.get(`cflag:${cid}:位置`) !== era.get('cflag:0:位置'),
          width: 6,
        },
        content: '邀请上床',
        type: 'button',
      },
      {
        accelerator: 999,
        config: {
          buttonType: event_marks.check(event_hooks.week_end)
            ? 'danger'
            : 'warning',
          width: 6,
        },
        content: '休息到下周',
        type: 'button',
      },
    ],
    [
      {
        accelerator: 201,
        // 虚空聊天就更过分了！
        config: { disabled: !cid || !sys_check_awake(0), width: 6 },
        content: '聊天',
        type: 'button',
      },
      {
        accelerator: 202,
        config: {
          disabled:
            not_in_same_loc ||
            !sys_check_awake(cid) ||
            !sys_check_awake(0) ||
            (era.get(`abl:${cid}:${location2language[cur_location]}语`) === 5 &&
              era.get(`abl:0:${location2language[cur_location]}语`) === 5) ||
            player_base.time < 400 ||
            (chara_base && chara_base.time < 400),
          width: 6,
        },
        content: `${location2language[cur_location]}语学习`,
        type: 'button',
      },
      {
        accelerator: 203,
        config: {
          disabled:
            not_in_same_loc ||
            jpy < 50 ||
            !sys_check_awake(cid) ||
            !sys_check_awake(0) ||
            player_base.time < 200 ||
            (chara_base && chara_base.time < 200) ||
            !era.get(`status:${cid}:水土不服`),
          width: 6,
        },
        content: '休息调养',
        type: 'button',
      },
      {
        accelerator: 204,
        config: {
          disabled:
            not_in_same_loc ||
            !sys_check_awake(cid) ||
            !sys_check_awake(0) ||
            !sys_check_train_enabled(cid) ||
            player_base.stamina < 200 ||
            player_base.time < 100 ||
            (chara_base &&
              (chara_base.stamina < 200 || chara_base.time < 100)) ||
            !era.get(`status:${cid}:客场作战`),
          width: 6,
        },
        content: '适应性训练',
        type: 'button',
      },
      {
        accelerator: 205,
        config: {
          buttonType: event_marks.check(event_hooks.foreign_travel)
            ? 'danger'
            : 'warning',
          disabled:
            not_in_same_loc ||
            jpy < 50 ||
            !sys_check_awake(cid) ||
            !sys_check_awake(0) ||
            player_base.stamina < 200 ||
            player_base.time < 400 ||
            (chara_base && (chara_base.stamina < 200 || chara_base.time < 400)),
          width: 6,
        },
        content: '旅行观光',
        type: 'button',
      },
      cid > 0 && era.get(`cflag:${cid}:节日事件标记`) > 0
        ? {
            accelerator: 206,
            config: {
              buttonType: 'danger',
              disabled:
                !sys_check_awake(cid) ||
                !sys_check_awake(0) ||
                era.get(`base:${cid}:精力`) < 50 ||
                era.get('base:0:精力') < celebration_cost ||
                not_in_same_loc,
              width: 6,
            },
            content: `一起庆祝 ${celebration}`,
            type: 'button',
          }
        : { content: [], type: 'text' },
      cid > 0 && era.get(`status:${cid}:生日`) === 2
        ? {
            accelerator: 207,
            config: {
              buttonType: 'danger',
              disabled:
                !sys_check_awake(cid) ||
                !sys_check_awake(0) ||
                era.get(`base:${cid}:精力`) < 50 ||
                era.get('base:0:精力') < celebration_cost,
              width: 6,
            },
            content: '庆祝生日',
            type: 'button',
          }
        : { content: [], type: 'text' },
      personal_action.name
        ? {
            accelerator: 208,
            config: { width: 6 },
            content: personal_action.name,
            type: 'button',
          }
        : { content: [], type: 'text' },
    ],
    [
      {
        accelerator: 401,
        config: { width: 6 },
        content: '角色情报',
        type: 'button',
      },
      {
        accelerator: 402,
        config: { width: 6 },
        content: '出走情报',
        type: 'button',
      },
      {
        accelerator: 403,
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
  );
  const ret = await era.input();
  switch (ret) {
    case 100:
      flags.after_select =
        era.set('flag:当前互动角色', await select_target()) !== cid;
      break;
    case 101:
      era.set('flag:当前位置', location_enum.playground);
      await print_train_page();
      era.set('flag:当前位置', cur_location);
      break;
    case 102:
      if (registered_race.week === cur_weeks) {
        era.set('flag:当前位置', location_enum.race);
        await race_page(registered_race.race);
        era.set('flag:当前位置', cur_location);
      } else {
        await reg_race_page();
      }
      break;
    case 103:
      (await goto_sex(cid, location_enum.hotel)) && (flags.week_start = true);
      era.set('flag:当前位置', cur_location);
      break;
    case 201:
      era.drawLine();
      await run_custom_daily(cid, event_hooks.talk);
      break;
    case 202:
      era.drawLine();
      await run_custom_edu(cid, event_hooks.foreign_study, {
        lan: location2language[cur_location],
      });
      break;
    case 203:
      era.drawLine();
      await run_custom_edu(cid, event_hooks.foreign_rest);
      break;
    case 204:
      era.drawLine();
      await run_custom_edu(cid, event_hooks.foreign_train);
      break;
    case 205:
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.foreign_travel, cid)())) {
        era.drawLine();
        await run_custom_edu(cid, event_hooks.foreign_travel);
      }
      break;
    case 206:
      sys_change_attr_and_print(0, '精力', -celebration_cost);
      sys_change_attr_and_print(cid, '精力', -50);
      era.drawLine();
      if (!(await sys_get_random_event(event_hooks.celebration, cid)())) {
        era.drawLine();
        era.print([
          '【和 ',
          get_chara_talk(cid).get_colored_name(),
          ' 一起庆祝了 ',
          celebration,
          '】',
        ]);
        await run_custom_daily(cid, event_hooks.celebration, {});
      }
      break;
    case 207:
      era.drawLine();
      sys_change_attr_and_print(0, '精力', -celebration_cost);
      sys_change_attr_and_print(cid, '精力', -50);
      era.print([
        '【向 ',
        get_chara_talk(cid).get_colored_name(),
        ' 祝贺生日快乐】',
      ]);
      await run_custom_daily(cid, event_hooks.birthday, {});
      break;
    case 208:
      era.drawLine();
      await personal_action.handle();
      await era.waitAnyKey();
      break;
    case 401:
      await print_exp_page();
      break;
    case 402:
    case 991:
      await report_race_page();
      break;
    case 403:
      await print_storage_page();
      break;
    case 900:
      await print_save_page();
      break;
    case 901:
      await print_load_page();
      break;
    case 990:
      switch_image();
      break;
    case 999:
      flags.week_start = true;
  }
  if (flags.week_start) {
    await save_and_next_week(cid, cur_location, location_enum.hotel);
  }
};
