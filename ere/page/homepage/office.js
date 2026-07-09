const era = require('#/era-electron');

const {
  sys_get_billings,
  sys_handle_action,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_check_act_disabled,
  sys_check_awake,
  sys_check_remote,
  sys_check_train_enabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const select_yes_or_no = require('#/page/components/select-yes-or-no');
const take_care = require('#/page/components/take-care');
const {
  common_handle,
  generate_celebration_buttons,
  generate_common_activities,
  generate_common_info_buttons,
  generate_common_save_buttons,
  generate_talk_button,
  get_c_base,
} = require('#/page/homepage/snippets');
const page_chairman_office = require('#/page/page-chairman-office');
const page_clinic = require('#/page/page-clinic');
const print_god_shop = require('#/page/page-god-shop');
const print_inherit_page = require('#/page/page-inherit');
const print_juel_shop_page = require('#/page/page-juel-shop');
const print_out_page = require('#/page/page-out');
const print_recruit_page = require('#/page/page-recruit-rand');
const print_school_page = require('#/page/page-school');
const print_shop_page = require('#/page/page-shop');
const print_train_page = require('#/page/page-train');
const page_trainer_office = require('#/page/page-trainer-office');
const page_visitors = require('#/page/page-visitors');

const { common_no_action_check } = require('#/event/check/check-common');
const { get_custom_check } = require('#/event/check/check-factory');
const {
  get_custom_daily,
  run_custom_daily,
} = require('#/event/daily/daily-factory');
const game_guides = require('#/event/others/game-guides');
const { shop_end, shop_start } = require('#/event/shop/tachyon-shop');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const basement_owners = require('#/data/event/basement-owners');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const loc_characters = require('#/data/event/loc-characters');
const { location_enum } = require('#/data/locations');
const { pressure_border } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {Record<string,number>} dict
 * @param {string} k
 * @param {number[]} l
 */
function fill_npc_dict(dict, k, l) {
  dict[k] = l.length;
  dict[k + 'e'] = l.filter((nid) => EventMarks.get(nid).count() > 0).length;
}

/**
 * @param {number} cid
 * @param {function(number,number,number):Promise} next_cb
 * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
 */
module.exports = async (cid, next_cb, flags) => {
  const marks = { c: EventMarks.get(cid), m: EventMarks.get(0) };
  const awake = { c: sys_check_awake(cid), m: sys_check_awake(0) };
  const train_enabled = sys_check_train_enabled(cid);
  // CFLAGNAME:65 = 成长阶段
  const growth_stage = era.get(`cflag:${cid}:65`);
  // CFLAGNAME:45 = 位置
  const is_remote = era.get(`cflag:${cid}:45`) !== era.get('cflag:0:45');
  // CFLAGNAME:46 = 爱慕暂拒
  const is_love_rejected = era.get(`cflag:${cid}:46`);
  // CFLAGNAME:16 = 当前马币
  const jpy = era.get('flag:16');
  // FLAGNAME:60 = 筛除训练室活动
  const office_activity_filter = era.get('flag:60');
  // FLAGNAME:61 = 筛除外出活动
  const out_activity_filter = era.get('flag:61');
  const player_base = get_c_base(0);
  const chara_base = get_c_base(cid || void 0);
  const chara = get_chara_talk(cid);
  /** @type {Record<string,number>} */
  const npc = {};
  fill_npc_dict(npc, 'c', loc_characters.get(location_enum.clinic));
  fill_npc_dict(npc, 'l', loc_characters.get(location_enum.chairman));
  fill_npc_dict(npc, 't', loc_characters.get(location_enum.trainer));
  fill_npc_dict(npc, 'v', loc_characters.get(location_enum.visitor));
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
      growth_stage,
      is_remote,
      async () => {
        era.set('flag:当前位置', location_enum.playground);
        await print_train_page();
        era.set('flag:当前位置', location_enum.office);
      },
      async () => {
        if (await goto_sex(cid, location_enum.restroom)) {
          flags.week_start = true;
        }
        era.set('flag:当前位置', location_enum.office);
      },
    ),
  );
  if (!office_activity_filter) {
    const group = [];
    buttons.push(group);
    temp = [
      marks.c.check(event_hooks.office_study),
      {
        mark:
          0b10 * (player_base.time < 300) +
          0b1000 * ((chara_base && chara_base.time) < 300),
        time: 300,
      },
    ];
    group.push({
      config: {
        buttonType: temp[0] ? 'danger' : 'warning',
        disabled:
          !cid ||
          // CFLAGNAME:48 = 育成回合计时
          era.get(`cflag:${cid}:48`) >= 48 * 3 ||
          !awake.c ||
          !awake.m ||
          temp[1].mark > 0,
        title: di18n.get_act_tip(temp[0], temp[1]),
      },
      content: i18n().ui_office_study,
      async h() {
        if (!(await sys_get_random_event(event_hooks.office_study, cid)())) {
          era.drawLine();
          era.print(i18n().timon.get_it_office_study(chara));
          await run_custom_daily(cid, event_hooks.office_study);
        }
      },
    });
    temp = [
      marks.c.check(event_hooks.office_prepare),
      {
        mark:
          0b10 * (player_base.time < 300) +
          0b1000 * ((chara_base && chara_base.time) < 300),
        time: 300,
      },
    ];
    group.push(
      {
        config: {
          buttonType: temp[0] ? 'danger' : 'warning',
          disabled:
            !cid ||
            era.get(`cflag:${cid}:48`) >= 48 * 3 ||
            !awake.c ||
            !awake.m ||
            jpy < 20 ||
            temp[1].mark > 0,
          title: di18n.get_act_tip(
            temp[0],
            temp[1],
            jpy < 20 &&
              i18n().ui_cost_money_tip_template.replace('%MONEY%', '20'),
          ),
        },
        content: i18n().ui_office_prepare,
        async h() {
          if (
            !(await sys_get_random_event(event_hooks.office_prepare, cid)())
          ) {
            era.drawLine();
            era.print(i18n().timon.get_it_office_prepare(chara));
            await run_custom_daily(cid, event_hooks.office_prepare);
          }
        },
      },
      generate_talk_button(chara, awake.m),
    );
    temp = { mark: 0b10 * (player_base.time < 200), time: 200 };
    group.push({
      config: {
        disabled:
          // 不能给自己送礼
          !cid ||
          // 幼年期不能送礼
          growth_stage < 1 ||
          jpy < 10 ||
          !awake.m ||
          !awake.c ||
          is_remote ||
          temp.mark > 0,
        title: di18n.get_act_tip(
          !1,
          temp,
          jpy < 10 &&
            i18n().ui_cost_money_tip_template.replace('%MONEY%', '10'),
        ),
      },
      content: i18n().ui_office_gift,
      async h() {
        era.print(i18n().timon.get_it_office_gift(chara));
        await run_custom_daily(cid, event_hooks.office_gift);
      },
    });
    temp = [
      marks.c.check(event_hooks.office_cook),
      { mark: +(player_base.stamina < 100), stamina: 100 },
    ];
    group.push({
      config: {
        buttonType: temp[0] ? 'danger' : 'warning',
        disabled: !awake.c || !awake.m || is_remote || temp[1].mark > 0,
        title: di18n.get_act_tip(temp[0], temp[1]),
      },
      content: cid > 0 ? i18n().ui_office_cook : i18n().ui_self_cook,
      async h() {
        if (!(await sys_get_random_event(event_hooks.office_cook, cid)())) {
          era.drawLine();
          era.print(
            cid > 0
              ? i18n().timon.get_it_office_cook(chara)
              : i18n().timon.it_self_cook,
          );
          await run_custom_daily(cid, event_hooks.office_cook);
        }
      },
    });
    temp = [
      marks.c.check(event_hooks.office_rest),
      { mark: 0b10 * (player_base.time < 100), time: 100 },
    ];
    group.push({
      config: {
        buttonType: temp[0] ? 'danger' : 'warning',
        disabled: !awake.c || !awake.m || is_remote || temp[1].mark > 0,
        title: di18n.get_act_tip(temp[0], temp[1]),
      },
      content: cid > 0 ? i18n().ui_office_rest : i18n().ui_self_rest,
      async h() {
        if (!(await sys_get_random_event(event_hooks.office_rest, cid)())) {
          era.drawLine();
          era.print(
            cid > 0
              ? i18n().timon.get_it_office_rest(chara)
              : i18n().timon.it_self_rest,
          );
          await run_custom_daily(cid, event_hooks.office_rest);
        }
      },
    });
    temp = [
      marks.c.check(event_hooks.office_game),
      {
        mark:
          0b10 * (player_base.time < 300) +
          0b1000 * ((chara_base && chara_base.time) < 300),
        time: 300,
      },
    ];
    group.push({
      config: {
        buttonType: marks.c.check(event_hooks.office_game)
          ? 'danger'
          : 'warning',
        disabled: growth_stage < 1 || !awake.c || !awake.m || temp[1].mark > 0,
        title: di18n.get_act_tip(temp[0], temp[1]),
      },
      content: cid > 0 ? i18n().ui_office_game : i18n().ui_self_game,
      async h() {
        if (!(await sys_get_random_event(event_hooks.office_game, cid)())) {
          era.drawLine();
          era.print(
            cid > 0
              ? i18n().timon.get_it_office_game(chara)
              : i18n().timon.it_self_game,
          );
          await run_custom_daily(cid, event_hooks.office_game);
        }
      },
    });
    // CFLAGNAME:50 = 可再次育成
    if (cid > 0 && era.get(`cflag:${cid}:50`) > 0) {
      group.push({
        config: {
          disabled: !awake.c || !awake.m || era.get(`relation:${cid}:0`) < 76,
        },
        // CFLAGNAME:58
        content:
          era.get(`cflag:${cid}:58`) > 0
            ? i18n().ui_change_take_care
            : i18n().ui_ask_take_care,
        h: () => take_care(chara),
      });
    }
    if (
      !cid ||
      // EXPNAME:25 - 26 = 性爱次数 - 睡奸次数
      (growth_stage > 1 && era.get(`exp:${cid}:25`) > era.get(`exp:${cid}:26`))
    ) {
      group.push({
        content: cid > 0 ? i18n().ui_ero_update : i18n().ui_self_update,
        h: print_juel_shop_page,
      });
    }
    if (
      // FLAGNAME:35 = 惩戒力度
      era.get('flag:35') <= 1 &&
      cid > 0 &&
      !sys_get_billings()[0].creditor &&
      growth_stage >= 2
    ) {
      group.push({
        config: {
          disabled: !cid || !awake.c || !awake.m || is_remote,
        },
        content: i18n().ui_borrow_money,
        h: () => get_custom_daily(cid).borrow_money(),
      });
    }
    group.push(
      ...generate_celebration_buttons(
        chara,
        marks.c,
        awake,
        sys_check_remote(cid),
        get_custom_check(cid).get_personal_action(),
      ),
    );
    if (is_love_rejected > 0 && is_love_rejected === era.get(`love:${cid}`)) {
      group.push({
        config: { disabled: is_remote },
        content: i18n().ui_check_love,
        async h() {
          // CFLAGNAME:46 = 爱慕暂拒
          era.set(`cflag:${cid}:46`, 0);
          get_custom_check(cid).check_love_events();
          await era.printAndWait(i18n().timon.get_it_check_love(chara));
        },
      });
    }
    if (
      cid > 0 &&
      !common_no_action_check(cid) &&
      basement_owners.is_empty() &&
      // FLAGNAME:35 = 惩戒力度
      era.get('flag:35') >= 2 &&
      // STATUSNAME:5 = 伤病
      !era.get(`status:${cid}:5`) &&
      // BASENAME:11 = 压力
      era.get(`base:${cid}:11`) < pressure_border.depression
    ) {
      group.push({
        config: { disabled: !cid || !awake.c || !awake.m || is_remote },
        content: i18n().ui_basement_me,
        async h() {
          basement_owners.push(cid);
          await era.printAndWait(
            i18n().timon.get_it_basement_me(chara, get_chara_talk(0)),
          );
        },
      });
    }
  }
  if (!out_activity_filter) {
    const group = [];
    buttons.push(group);
    temp = sys_get_move_cost(location_enum.playground);
    temp.mark = sys_check_act_disabled(temp, player_base);
    group.push({
      config: {
        buttonType: marks.m.check(
          event_hooks.recruit_start,
          event_hooks.recruit,
        )
          ? 'danger'
          : 'warning',
        disabled:
          // FLAGNAME:2 = 当前月
          era.get('flag:2') >= 4 || !awake.m || temp.mark > 0,
        title: di18n.get_loc_tips(
          false,
          marks.m.check(event_hooks.recruit_start, event_hooks.recruit),
          0,
          0,
          temp,
        ),
      },
      content: i18n().ui_recruit,
      async h() {
        sys_handle_action(temp);
        await print_recruit_page();
      },
    });
    temp = sys_get_move_cost(location_enum.trainer);
    temp.mark = sys_check_act_disabled(temp, player_base);
    group.push({
      config: {
        buttonType:
          marks.c.check(event_hooks.back_school) ||
          marks.m.check(event_hooks.school_trainer_office) ||
          npc.te > 0
            ? 'danger'
            : 'warning',
        disabled: !awake.m || temp.mark > 0 || npc.t === 0,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.m.check(event_hooks.school_trainer_office),
          npc.t,
          npc.te,
          temp,
        ),
      },
      content: i18n().ui_trainer_office,
      async h() {
        sys_handle_action(temp);
        if (!(await game_guides.school_trainer_office())) {
          await page_trainer_office();
        }
      },
    });
    temp = sys_get_move_cost(location_enum.clinic);
    temp.mark = sys_check_act_disabled(temp, player_base);
    group.push({
      config: {
        buttonType:
          marks.c.check(event_hooks.school_clinic, event_hooks.back_school) ||
          marks.m.check(event_hooks.school_clinic) ||
          npc.ce > 0
            ? 'danger'
            : 'warning',
        disabled: !awake.m || temp.mark > 0 || npc.c === 0,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.c.check(event_hooks.school_clinic) ||
            marks.m.check(event_hooks.school_clinic),
          npc.c,
          npc.ce,
          temp,
        ),
      },
      content: i18n().ui_clinic,
      async h() {
        sys_handle_action(temp);
        if (
          !(await game_guides.school_clinic()) &&
          !(await sys_get_random_event(event_hooks.school_clinic)())
        ) {
          await page_clinic();
        }
      },
    });
    temp = sys_get_move_cost(location_enum.god, cid);
    temp.mark = sys_check_act_disabled(temp, player_base, chara_base);
    group.push({
      config: {
        buttonType:
          marks.c.check(event_hooks.back_school) ||
          era.get('flag:当前月') === 3 ||
          marks.m.check(event_hooks.school_god)
            ? 'danger'
            : 'warning',
        disabled:
          growth_stage < 1 ||
          (cid && !train_enabled) ||
          !awake.c ||
          !awake.m ||
          temp.mark > 0 ||
          is_remote,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.m.check(event_hooks.school_god),
          0,
          0,
          temp,
          era.get('flag:当前月') === 3 &&
            i18n().inherit_shop.ui_inherit_enabled,
        ),
      },
      content: cid > 0 ? i18n().ui_god_together : i18n().ui_god_alone,
      async h() {
        sys_handle_action(temp, cid);
        if (
          !(await game_guides.school_god()) &&
          !(await sys_get_random_event(event_hooks.school_god, cid)())
        ) {
          if (
            era.get('flag:当前月') === 3 &&
            (await select_yes_or_no(
              i18n().inherit_shop.select_inherit_or_god,
              i18n().inherit_shop.sig_inherit,
              i18n().inherit_shop.sig_god,
            ))
          ) {
            await print_inherit_page();
          } else {
            await print_god_shop();
          }
        }
      },
    });
    temp = sys_get_move_cost(location_enum.atrium, cid);
    temp.mark = sys_check_act_disabled(temp, player_base, chara_base);
    group.push({
      config: {
        buttonType:
          marks.c.check(event_hooks.school_atrium, event_hooks.back_school) ||
          marks.m.check(event_hooks.school_atrium)
            ? 'danger'
            : 'warning',
        disabled:
          growth_stage < 1 ||
          !awake.c ||
          !awake.m ||
          temp.mark > 0 ||
          is_remote,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.c.check(event_hooks.school_atrium) ||
            marks.m.check(event_hooks.school_atrium),
          0,
          0,
          temp,
        ),
      },
      content: cid > 0 ? i18n().ui_atrium_together : i18n().ui_atrium_alone,
      async h() {
        sys_handle_action(temp, cid);
        if (!(await game_guides.school_atrium())) {
          await print_school_page(location_enum.atrium);
        }
      },
    });
    temp = sys_get_move_cost(location_enum.rooftop, cid);
    temp.mark = sys_check_act_disabled(temp, player_base, chara_base);
    group.push({
      config: {
        buttonType:
          marks.c.check(event_hooks.school_rooftop, event_hooks.back_school) ||
          marks.m.check(event_hooks.school_rooftop)
            ? 'danger'
            : 'warning',
        disabled:
          growth_stage < 1 ||
          !awake.c ||
          !awake.m ||
          temp.mark > 0 ||
          is_remote,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.c.check(event_hooks.school_rooftop) ||
            marks.m.check(event_hooks.school_rooftop),
          0,
          0,
          temp,
        ),
      },
      content: cid > 0 ? i18n().ui_rooftop_together : i18n().ui_rooftop_alone,
      async h() {
        sys_handle_action(temp, cid);
        if (!(await game_guides.school_rooftop())) {
          await print_school_page(location_enum.rooftop);
        }
      },
    });
    temp = sys_get_move_cost(location_enum.chairman);
    temp.mark = sys_check_act_disabled(temp, player_base);
    group.push({
      config: {
        buttonType:
          marks.c.check(event_hooks.back_school) ||
          marks.m.check(event_hooks.school_chairman) ||
          npc.le > 0
            ? 'danger'
            : 'warning',
        disabled: !awake.m || temp.mark > 0 || npc.l === 0,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.m.check(event_hooks.school_chairman),
          npc.l,
          npc.le,
          temp,
        ),
      },
      content: i18n().ui_chairman_office,
      async h() {
        sys_handle_action(temp);
        if (
          !(await game_guides.school_chairman()) &&
          !(await sys_get_random_event(event_hooks.school_chairman)())
        ) {
          await page_chairman_office();
        }
      },
    });
    temp = sys_get_move_cost(location_enum.visitor);
    temp.mark = sys_check_act_disabled(temp, player_base);
    group.push(
      {
        config: {
          buttonType:
            marks.c.check(event_hooks.back_school) ||
            marks.m.check(event_hooks.school_visitors) ||
            npc.ve > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.m ||
            temp.mark > 0 ||
            (npc.v === 0 && !marks.m.check(event_hooks.school_visitors)),
          title: di18n.get_loc_tips(
            marks.c.check(event_hooks.back_school),
            marks.m.check(event_hooks.school_visitors),
            npc.v,
            npc.ve,
            temp,
          ),
        },
        content: i18n().ui_visitors,
        async h() {
          sys_handle_action(temp);
          if (!(await game_guides.school_visitors())) {
            await page_visitors();
          }
        },
      },
      {
        config: { disabled: !awake.m },
        content: i18n().ui_school_shop,
        async h() {
          // FLAGNAME:4 = 当前位置
          era.set('flag:4', location_enum.school_shop);
          const item_list = [
            ...new Array(8).fill(0).map((_, i) => i),
            ...new Array(11).fill(0).map((_, i) => i + 10),
            25,
            { id: 26, limit: true },
            ...new Array(3).fill(0).map((_, i) => i + 27),
            ...new Array(12).fill(0).map((_, i) => 30 + i),
            { id: 42, limit: true },
            43,
          ];
          // FLAGNAME:5 = 当前互动角色
          era.set('flag:5', 0);
          // CFLAGNAME:90 = 模版角色
          if (era.get('cflag:0:90') !== 32) {
            await shop_start();
            await shop_end(await print_shop_page(item_list));
          } else {
            await print_shop_page(item_list);
          }
          era.set('flag:5', cid);
          era.set('flag:4', location_enum.office);
        },
      },
    );
    temp = sys_get_move_cost(location_enum.gate, cid);
    temp.mark = sys_check_act_disabled(temp, player_base, chara_base);
    group.push({
      // 幼年期只能呆在训练室
      config: {
        buttonType:
          marks.c.check(
            event_hooks.out_start,
            event_hooks.out_river,
            event_hooks.out_shopping,
            event_hooks.out_church,
            event_hooks.out_station,
            event_hooks.back_school,
          ) || marks.m.check(event_hooks.out_start)
            ? 'danger'
            : 'warning',
        disabled:
          growth_stage < 1 ||
          !awake.c ||
          !awake.m ||
          temp.mark > 0 ||
          is_remote,
        title: di18n.get_loc_tips(
          marks.c.check(event_hooks.back_school),
          marks.c.check(
            event_hooks.out_start,
            event_hooks.out_river,
            event_hooks.out_shopping,
            event_hooks.out_church,
            event_hooks.out_station,
          ) || marks.m.check(event_hooks.out_start),
          0,
          0,
          temp,
        ),
      },
      content: cid > 0 ? i18n().ui_out_together : i18n().ui_out_alone,
      async h() {
        sys_handle_action(temp, cid);
        era.set('flag:4', location_enum.gate);
        await print_out_page();
        era.set('flag:4', location_enum.office);
      },
    });
  }
  buttons.push([
    ...generate_common_info_buttons(awake.m),
    {
      config: { buttonType: office_activity_filter ? 'warning' : 'info' },
      content: di18n.get_activity_filter(
        i18n().ui_office_filter_template,
        office_activity_filter,
      ),
      h: () => era.set('flag:筛除训练室活动', !era.get('flag:筛除训练室活动')),
    },
    {
      config: { buttonType: out_activity_filter ? 'warning' : 'info' },
      content: di18n.get_activity_filter(
        i18n().ui_out_filter_template,
        out_activity_filter,
      ),
      h: () => era.set('flag:筛除外出活动', !era.get('flag:筛除外出活动')),
    },
    ...generate_common_save_buttons(),
  ]);
  await common_handle(buttons);
  if (flags.week_start) {
    await next_cb(cid, location_enum.office, location_enum.home);
  }
};
