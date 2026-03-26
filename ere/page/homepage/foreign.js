const era = require('#/era-electron');

const {
  sys_check_awake,
  sys_check_remote,
  sys_check_train_enabled,
} = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const {
  common_handle,
  generate_celebration_buttons,
  generate_common_activities,
  generate_common_info_buttons,
  generate_common_save_buttons,
  generate_talk_button,
  get_c_base,
} = require('#/page/homepage/snippets');
const print_train_page = require('#/page/page-train');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_edu } = require('#/event/edu/edu-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { location2language } = require('#/data/race/race-location');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {function(number,number,number):Promise} save_and_next_week
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (cid, save_and_next_week, flags) => {
  const marks = {
    c: EventMarks.get(cid),
    m: EventMarks.get(0),
  };
  const awake = { c: sys_check_awake(cid), m: sys_check_awake(0) };
  const train_enabled = sys_check_train_enabled(cid);
  const chara = get_chara_talk(cid);
  // CFLAGNAME:45 = 位置
  const is_remote = era.get(`cflag:${cid}:45`) !== era.get('cflag:0:45');
  // FLAGNAME:4 = 当前位置
  const cur_location = era.get('flag:4');
  const event_marks = EventMarks.get(cid);
  const player_base = get_c_base(0);
  const chara_base = get_c_base(cid || void 0);
  // FLAGNAME:16 = 当前马币
  const jpy = era.get('flag:16');
  const lan = location2language[cur_location];
  let temp;
  /** @type {{[acc],[config]:Record<string,any>,content:string,h:function():Promise}[][]} */
  const buttons = [];
  buttons.push(
    ...generate_common_activities(
      cid,
      flags,
      marks,
      awake,
      train_enabled,
      // CFLAGNAME:65 = 成长阶段
      era.get(`cflag:${cid}:65`),
      is_remote,
      async () => {
        era.set('flag:当前位置', location_enum.playground);
        await print_train_page();
        era.set('flag:当前位置', cur_location);
      },
      async () => {
        if (await goto_sex(cid, location_enum.hotel)) {
          flags.week_start = true;
        }
        era.set('flag:当前位置', cur_location);
      },
    ),
  );
  const group = [];
  group.push(generate_talk_button(chara, awake.m));
  temp = {
    level: era.get(`abl:${cid}:${lan}`) === 5 && era.get(`abl:0:${lan}`) === 5,
    cost: {
      mark:
        0b10 * (player_base.time < 400) +
        0b1000 * ((chara_base && chara_base.time) < 400),
      time: 400,
    },
  };
  group.push({
    config: {
      disabled:
        is_remote || !awake.c || !awake.m || temp.level || temp.cost.mark > 0,
      title: di18n.get_act_tip(
        false,
        temp.cost,
        temp.level &&
          i18n().ui_foreign_lan_max_tip_template.replace(
            '%LAN%',
            i18n().tb_abl[lan],
          ),
      ),
    },
    content: i18n().ui_foreign_study_template.replace(
      '%LAN%',
      i18n().tb_abl[lan],
    ),
    h: () => run_custom_edu(cid, event_hooks.foreign_study, { lan }),
  });
  temp = {
    status: !era.get(`status:${cid}:水土不服`),
    cost: {
      mark:
        0b10 * (player_base.time < 200) +
        0b1000 * ((chara_base && chara_base.time) < 200),
      time: 200,
    },
  };
  group.push({
    config: {
      disabled:
        is_remote ||
        jpy < 50 ||
        !awake.c ||
        !awake.m ||
        temp.status ||
        temp.cost.mark > 0,
      title: di18n.get_act_tip(
        false,
        temp.cost,
        temp.status && i18n().ui_foreign_rest_max_tip,
        jpy < 50 && i18n().ui_cost_money_tip_template.replace('%MONEY%', '50'),
      ),
    },
    content: i18n().ui_foreign_rest,
    h: () => run_custom_edu(cid, event_hooks.foreign_rest),
  });
  temp = {
    status: !era.get(`status:${cid}:客场作战`),
    cost: {
      mark:
        (player_base.stamina < 200) +
        0b10 * (player_base.time < 200) +
        0b100 * ((chara_base && chara_base.stamina) < 200) +
        0b1000 * ((chara_base && chara_base.time) < 200),
      time: 200,
      stamina: 200,
    },
  };
  group.push({
    config: {
      disabled:
        is_remote ||
        !awake.c ||
        !awake.m ||
        temp.status ||
        temp.cost.mark > 0 ||
        train_enabled,
      title: di18n.get_act_tip(
        false,
        temp.cost,
        temp.status && i18n().ui_foreign_train_max_tip,
      ),
    },
    content: i18n().ui_foreign_train,
    h: () => run_custom_edu(cid, event_hooks.foreign_train),
  });
  temp = [
    event_marks.check(event_hooks.foreign_travel),
    {
      mark:
        (player_base.stamina < 200) +
        0b10 * (player_base.time < 400) +
        0b100 * ((chara_base && chara_base.stamina) < 200) +
        0b1000 * ((chara_base && chara_base.time) < 400),
      time: 400,
      stamina: 200,
    },
  ];
  group.push({
    config: {
      buttonType: temp[0] ? 'danger' : 'warning',
      disabled:
        is_remote || jpy < 50 || !awake.c || !awake.m || temp[1].mark > 0,
      title: di18n.get_act_tip(
        false,
        temp[1],
        jpy < 50 && i18n().ui_cost_money_tip_template.replace('%MONEY%', '50'),
      ),
    },
    content: i18n().ui_foreign_travel,
    async h() {
      if (!(await sys_get_random_event(event_hooks.foreign_travel, cid)())) {
        era.drawLine();
        await run_custom_edu(cid, event_hooks.foreign_travel);
      }
    },
  });
  group.push(
    ...generate_celebration_buttons(
      chara,
      marks.c,
      awake,
      sys_check_remote(cid),
      get_custom_check(cid).get_personal_action(),
    ),
  );
  buttons.push(group);
  buttons.push([
    ...generate_common_info_buttons(awake.m),
    ...generate_common_save_buttons(),
  ]);
  await common_handle(buttons);
  if (flags.week_start) {
    await save_and_next_week(cid, cur_location, location_enum.hotel);
  }
};
