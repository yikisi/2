const era = require('#/era-electron');

const sys_call_daily_event = require('#/system/script/sys-call-daily-script');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_check_train_enabled,
  sys_check_awake,
} = require('#/system/sys-calc-chara-param');

const select_target = require('#/page/components/select-target');
const goto_sex = require('#/page/components/goto-sex');
const { generate_race_button } = require('#/page/homepage/snippets');
const print_exp_page = require('#/page/page-exp');
const print_load_page = require('#/page/page-load-game');
const race_page = require('#/page/page-race');
const reg_race_page = require('#/page/page-register-race');
const report_race_page = require('#/page/page-report-race');
const print_save_page = require('#/page/page-save-game');
const print_storage_page = require('#/page/page-storage');
const print_train_page = require('#/page/page-train');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const location2language = {};
location2language[location_enum.paris] = '法';
location2language[location_enum.hongkong] = location2language[
  location_enum.guangzhou
] = '粤';

/**
 * @param {number} chara_id
 * @param {function(number,number,number):Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async function (chara_id, save_and_next_week, flags) {
  const cur_location = era.get('flag:当前位置'),
    cur_weeks = era.get('flag:当前回合数'),
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
            era.get(`cflag:${chara_id}:成长阶段`) < 2 ||
            !sys_check_awake(0) ||
            era.get(`cflag:${chara_id}:位置`) !== era.get('cflag:0:位置'),
          width: 6,
        },
        content: '邀请上床',
        type: 'button',
      },
      {
        accelerator: 999,
        config: { width: 6 },
        content: '休息到下周',
        type: 'button',
      },
    ],
    [
      {
        accelerator: 201,
        // 虚空聊天就更过分了！
        config: { disabled: !chara_id || !sys_check_awake(0), width: 6 },
        content: '聊天',
        type: 'button',
      },
      {
        accelerator: 202,
        config: {
          disabled:
            !sys_check_awake(chara_id) ||
            !sys_check_awake(0) ||
            (era.get(`abl:${chara_id}:${location2language[cur_location]}语`) ===
              5 &&
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
            !sys_check_awake(chara_id) ||
            !sys_check_awake(0) ||
            player_base.time < 200 ||
            (chara_base && chara_base.time < 200),
          width: 6,
        },
        content: '休息调养',
        type: 'button',
      },
      {
        accelerator: 204,
        config: {
          disabled:
            !sys_check_awake(chara_id) ||
            !sys_check_awake(0) ||
            !sys_check_train_enabled(chara_id) ||
            player_base.stamina < 200 ||
            player_base.time < 100 ||
            (chara_base && (chara_base.stamina < 200 || chara_base.time < 100)),
          width: 6,
        },
        content: '适应性训练',
        type: 'button',
      },
      {
        accelerator: 205,
        config: {
          disabled:
            !sys_check_awake(chara_id) ||
            !sys_check_awake(0) ||
            player_base.stamina < 200 ||
            player_base.time < 400 ||
            (chara_base && (chara_base.stamina < 200 || chara_base.time < 400)),
          width: 6,
        },
        content: '旅行观光',
        type: 'button',
      },
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
        config: { width: 6 },
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
        era.set('flag:当前互动角色', await select_target()) !== chara_id;
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
      era.set('flag:当前位置', location_enum.hotel);
      await goto_sex(chara_id);
      era.set('flag:当前位置', cur_location);
      break;
    case 201:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.talk);
      break;
    case 202:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.foreign_study);
      break;
    case 203:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.foreign_rest);
      break;
    case 204:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.foreign_train);
      break;
    case 205:
      era.drawLine();
      await sys_call_daily_event(chara_id, event_hooks.foreign_travel);
      break;
    case 401:
      await print_exp_page();
      break;
    case 402:
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
    case 999:
      await save_and_next_week(chara_id, cur_location, location_enum.hotel);
      flags.week_start = true;
  }
};
