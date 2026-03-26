const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_awake,
  sys_check_race_ready,
} = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const select_target = require('#/page/components/select-target');
const print_exp_page = require('#/page/page-exp');
const print_load_page = require('#/page/page-load-game');
const race_page = require('#/page/page-race');
const reg_race_page = require('#/page/page-register-race');
const report_race_page = require('#/page/page-report-race');
const print_save_page = require('#/page/page-save-game');
const print_storage_page = require('#/page/page-storage');

const {
  get_custom_daily,
  run_custom_daily,
} = require('#/event/daily/daily-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {number|undefined} cid
   * @returns {{stamina:number,time:number}|undefined}
   */
  get_c_base(cid) {
    if (cid === void 0) {
      return void 0;
    }
    return {
      stamina: era.get(`base:${cid}:体力`),
      time: era.get(`base:${cid}:精力`),
    };
  },
  async common_handle(buttons) {
    era.printInColRows(
      [{ type: 'divider' }],
      ...buttons.map((g, gi) =>
        g.map((b, bi) => ({
          accelerator: b.acc || (gi + 1) * 100 + bi,
          config: {
            ...b.config,
            width: (b.config || {}).width || 6,
          },
          content: b.content,
          type: 'button',
        })),
      ),
    );
    const ret = await era.input();
    era.drawLine();
    if (ret === 990) {
      switch_image();
    } else if (ret === 991) {
      await report_race_page();
    } else {
      await (
        ret === 999
          ? buttons[0].find((e) => e.acc === ret)
          : buttons[Math.floor(ret / 100) - 1][ret % 100]
      ).h();
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {EventMarks} c_marks
   * @param {{c:boolean,m:boolean}} awake
   * @param {boolean} is_remote
   * @param {{[name]:string,[handle]:function}} personal_action
   */
  generate_celebration_buttons(
    chara,
    c_marks,
    awake,
    is_remote,
    personal_action,
  ) {
    if (!chara.id) {
      return [];
    }
    const ret = [];
    const celebration_cost = 50 * (era.get('cflag:0:56') + 1);
    const cost_info = {
      mark:
        0b10 * (era.get('base:0:精力') < celebration_cost) +
        0b1000 * (era.get(`base:${chara.id}:精力`) < 50),
      time: celebration_cost,
      ctime: 50,
    };
    // CFLAGNAME:56 = 节日事件标记
    if (era.get(`cflag:${chara.id}:56`) > 0) {
      const celebration = get_celebration();
      const remote_disabled =
        era.get('flag:当前回合数') % 48 === 30 && is_remote;
      ret.push({
        config: {
          buttonType: 'danger',
          disabled:
            !awake.c || !awake.m || cost_info.mark > 0 || remote_disabled,
          title: di18n.get_act_tip(
            c_marks.check(event_hooks.celebration),
            cost_info,
            remote_disabled && i18n().ui_celebration_remote_tip,
          ),
        },
        content: i18n().ui_celebration_template.replace(
          '%CELEBRATION%',
          celebration,
        ),
        async h() {
          sys_change_attr_and_print(0, attr_enum.tp, -cost_info.time);
          sys_change_attr_and_print(chara.id, attr_enum.tp, -50);
          if (
            !(await sys_get_random_event(event_hooks.celebration, chara.id)())
          ) {
            era.drawLine();
            era.print(i18n().timon.get_it_celebration(chara, celebration));
            await run_custom_daily(chara.id, event_hooks.celebration, {});
          }
        },
      });
    }
    // STATUSNAME:17 = 生日
    if (era.get(`status:${chara.id}:17`) === 2) {
      ret.push({
        config: {
          buttonType: 'danger',
          disabled: !awake.c || !awake.m || cost_info.mark > 0,
          title: di18n.get_act_tip(!1, cost_info),
        },
        content: i18n().ui_birthday,
        async h() {
          sys_change_attr_and_print(0, attr_enum.tp, -cost_info.time);
          sys_change_attr_and_print(chara.id, attr_enum.tp, -50);
          era.print(i18n().timon.get_it_birthday(chara));
          await run_custom_daily(chara.id, event_hooks.birthday, {});
        },
      });
    }
    if (personal_action.name !== void 0) {
      ret.push({
        content: personal_action.name,
        async h() {
          await personal_action.handle();
          await era.waitAnyKey();
        },
      });
    }
    return ret;
  },
  /**
   * @param {number} cid
   * @param {{after_select:boolean,week_start:boolean}} flags
   * @param {{c:EventMarks,m:EventMarks}} marks
   * @param {{c:boolean,m:boolean}} awake
   * @param {boolean} train_enabled
   * @param {number} growth_stage
   * @param {boolean} is_remote
   * @param {function:Promise} train_cb
   * @param {function:Promise} sex_cb
   */
  generate_common_activities(
    cid,
    flags,
    marks,
    awake,
    train_enabled,
    growth_stage,
    is_remote,
    train_cb,
    sex_cb,
  ) {
    const ret = [];
    const cur_weeks = era.get('flag:当前回合数');
    const registered_race = sys_reg_race(cid).curr;
    const events = {
      t: marks.c.check(event_hooks.train) || marks.m.check(event_hooks.train),
      n:
        marks.c.check(event_hooks.week_end) ||
        marks.m.check(event_hooks.week_end),
    };
    let race_button;
    if (registered_race.week === cur_weeks) {
      race_button = {
        config: {
          buttonType: 'danger',
          disabled: !sys_check_race_ready(cid) || !sys_check_awake(0),
          title:
            race_infos[registered_race.race].get_colored_name_with_class()
              .content,
        },
        content: i18n().ui_goto_race,
      };
    } else {
      // CFLAGNAME:48 = 育成回合计时
      const edu_weeks = era.get(`cflag:${cid}:48`);
      race_button = {
        config: {
          buttonType: EventMarks.get(0).check(event_hooks.register_race)
            ? 'danger'
            : 'warning',
          disabled:
            !get_custom_mec(cid).is_race_register_enabled() ||
            // CFLAGNAME:1 = 种族
            !era.get(`cflag:${cid}:1`) ||
            (cid > 0 &&
              (typeof edu_weeks !== 'number' ||
                era.get(`cflag:${cid}:48`) >= 48 * 3)),
        },
        content: i18n().ui_register_race,
      };
    }
    ret.push([
      {
        config: { width: 24 },
        content: i18n().ui_show_team,
        async h() {
          flags.after_select =
            era.set('flag:当前互动角色', await select_target()) !== cid;
        },
      },
      {
        config: {
          buttonType: events.t ? 'danger' : 'warning',
          disabled: !train_enabled || !awake.m,
          title: di18n.get_act_tip(events.t),
        },
        content: !cid && train_enabled ? i18n().ui_self_train : i18n().ui_train,
        h: train_cb,
      },
      {
        ...race_button,
        async h() {
          if (registered_race.week === cur_weeks) {
            // FLAGNAME:4 = 当前位置
            const curr_loc = era.get('flag:4');
            era.set('flag:4', location_enum.race);
            await race_page(registered_race.race);
            era.set('flag:4', curr_loc);
          } else {
            await reg_race_page();
          }
        },
      },
      {
        config: { disabled: !cid || growth_stage < 2 || !awake.m || is_remote },
        content: i18n().ui_goto_sex,
        h: sex_cb,
      },
      {
        acc: 999,
        config: {
          buttonType: events.n ? 'danger' : 'warning',
          title: di18n.get_act_tip(events.n),
        },
        content: i18n().ui_next_turn,
        h: () => (flags.week_start = true),
      },
    ]);
    return ret;
  },
  /** @param {boolean} awake_m */
  generate_common_info_buttons(awake_m) {
    return [
      {
        content: i18n().ui_info_page,
        h: print_exp_page,
      },
      {
        config: { disabled: !awake_m },
        content: i18n().ui_storage,
        h: print_storage_page,
      },
      {
        content: i18n().ui_races,
        h: report_race_page,
      },
    ];
  },
  generate_common_save_buttons() {
    return [
      {
        content: i18n().ui_save_game,
        h: print_save_page,
      },
      {
        content: i18n().ui_load_game,
        h: print_load_page,
      },
    ];
  },
  /**
   * @param {CharaTalk} chara
   * @param {boolean} awake_m
   */
  generate_talk_button(chara, awake_m) {
    return {
      config: { disabled: !chara.id || !awake_m },
      content: i18n().ui_talk,
      async h() {
        era.print(i18n().timon.get_it_talk(chara));
        await get_custom_daily(chara.id).talk();
      },
    };
  },
};
