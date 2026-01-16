const era = require('#/era-electron');

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
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const select_target = require('#/page/components/select-target');
const select_yes_or_no = require('#/page/components/select-yes-or-no');
const take_care = require('#/page/components/take-care');
const { generate_race_button } = require('#/page/homepage/snippets');
const page_chairman_office = require('#/page/page-chairman-office');
const page_clinic = require('#/page/page-clinic');
const print_exp_page = require('#/page/page-exp');
const print_god_shop = require('#/page/page-god-shop');
const print_inherit_page = require('#/page/page-inherit');
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
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { attr_enum, pressure_border } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

function generate_button_title(...tlist) {
  return tlist.filter((x) => x).join('\n') || void 0;
}

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
  const awake = { chara: sys_check_awake(cid), me: sys_check_awake(0) };
  const celebration = get_celebration();
  // CFLAGNAME:56 = 节日事件标记
  const celebration_cost = 50 * (era.get('cflag:0:56') + 1);
  // FLAGNAME:0 = 当前回合数
  const cur_weeks = era.get('flag:0');
  const event_marks = EventMarks.get(cid);
  const my_event_marks = EventMarks.get(0);
  // CFLAGNAME:65 = 成长阶段
  const growth_stage = era.get(`cflag:${cid}:65`);
  // CFLAGNAME:46 = 爱慕暂拒
  const is_love_rejected = era.get(`cflag:${cid}:46`);
  // CFLAGNAME:16 = 当前马币
  const jpy = era.get('flag:16');
  // CFLAGNAME:45 = 位置
  const not_in_same_loc = era.get(`cflag:${cid}:45`) !== era.get('cflag:0:45');
  // FLAGNAME:60 = 筛除训练室活动
  const office_activity_filter = era.get('flag:60');
  // FLAGNAME:61 = 筛除外出活动
  const out_activity_filter = era.get('flag:61');
  const personal_action = get_custom_check(cid).get_personal_action();
  const registered_race = sys_reg_race(cid).curr;
  // BASENAME:0 - 1 = 体力 - 精力
  const player_base = {
    stamina: era.get('base:0:0'),
    time: era.get('base:0:1'),
  };
  const chara_base =
    cid > 0
      ? {
          stamina: era.get(`base:${cid}:0`),
          time: era.get(`base:${cid}:1`),
        }
      : void 0;
  const train_enabled = sys_check_train_enabled(cid);
  const chara = get_chara_talk(cid);
  /** @type {Record<string,number>} */
  const npc = {};
  fill_npc_dict(npc, 'c', loc_characters.get(location_enum.clinic));
  fill_npc_dict(npc, 'l', loc_characters.get(location_enum.chairman));
  fill_npc_dict(npc, 't', loc_characters.get(location_enum.trainer));
  fill_npc_dict(npc, 'v', loc_characters.get(location_enum.visitor));
  /** @type {{[acc],[config]:Record<string,any>,content:string,h:function():Promise}[][]} */
  const buttons = [];
  buttons.push([
    {
      config: { width: 24 },
      content: i18n().ui_show_team,
      async h() {
        // FLAGNAME:5 = 当前互动角色
        flags.after_select = era.set('flag:5', await select_target()) !== cid;
      },
    },
    {
      config: {
        buttonType: my_event_marks.check(event_hooks.train)
          ? 'danger'
          : 'warning',
        disabled: !train_enabled || !awake.me,
      },
      // 训自己的话显示自主训练
      content:
        !cid && sys_check_train_enabled(cid)
          ? i18n().ui_self_train
          : i18n().ui_train,
      async h() {
        // FLAGNAME:4 = 当前位置
        era.set('flag:4', location_enum.playground);
        await print_train_page();
        era.set('flag:4', location_enum.office);
      },
    },
    {
      ...generate_race_button(cid, registered_race.week, cur_weeks),
      async h() {
        if (registered_race.week === cur_weeks) {
          era.set('flag:4', location_enum.race);
          await race_page(registered_race.race);
          era.set('flag:4', location_enum.office);
        } else {
          await reg_race_page();
        }
      },
    },
    {
      config: {
        disabled:
          // 当然不能上自己
          !cid ||
          // 没有性成熟不能上
          growth_stage < 2 ||
          !awake.me ||
          not_in_same_loc,
      },
      content: i18n().ui_goto_sex,
      async h() {
        if (await goto_sex(cid, location_enum.restroom)) {
          flags.week_start = true;
        }
        era.set('flag:4', location_enum.office);
      },
    },
    {
      acc: 999,
      config: {
        buttonType:
          event_marks.check(event_hooks.week_end) ||
          my_event_marks.check(event_hooks.week_end)
            ? 'danger'
            : 'warning',
      },
      content: i18n().ui_next_turn,
      h: () => (flags.week_start = true),
    },
  ]);
  if (!office_activity_filter) {
    const group = [];
    buttons.push(group);
    group.push(
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_study)
            ? 'danger'
            : 'warning',
          disabled:
            !cid ||
            // CFLAGNAME:48 = 育成回合计时
            era.get(`cflag:${cid}:48`) >= 48 * 3 ||
            !awake.chara ||
            !awake.me ||
            player_base.time < 300 ||
            (chara_base && chara_base.time) < 300,
        },
        content: i18n().ui_office_study,
        async h() {
          if (!(await sys_get_random_event(event_hooks.office_study, cid)())) {
            era.drawLine();
            era.print(i18n().timon.get_it_office_study(chara));
            await run_custom_daily(cid, event_hooks.office_study);
          }
        },
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_prepare)
            ? 'danger'
            : 'warning',
          disabled:
            !cid ||
            era.get(`cflag:${cid}:48`) >= 48 * 3 ||
            !awake.chara ||
            !awake.me ||
            jpy < 20 ||
            player_base.time < 300 ||
            (chara_base && chara_base.time) < 300,
          width: 6,
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
      {
        // 虚空聊天就更过分了！
        config: { disabled: !cid || !awake.me, width: 6 },
        content: i18n().ui_talk,
        async h() {
          era.print(i18n().timon.get_it_talk(chara));
          await get_custom_daily(cid).talk();
        },
      },
      {
        config: {
          disabled:
            // 不能给自己送礼
            !cid ||
            // 幼年期不能送礼
            growth_stage < 1 ||
            jpy < 10 ||
            !awake.me ||
            !awake.chara ||
            not_in_same_loc ||
            player_base.time < 200,
          width: 6,
        },
        content: i18n().ui_office_gift,
        async h() {
          era.print(i18n().timon.get_it_office_gift(chara));
          await run_custom_daily(cid, event_hooks.office_gift);
        },
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_cook)
            ? 'danger'
            : 'warning',
          disabled:
            !awake.chara ||
            !awake.me ||
            not_in_same_loc ||
            player_base.stamina < 100,
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
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_rest)
            ? 'danger'
            : 'warning',
          disabled:
            !awake.chara ||
            !awake.me ||
            not_in_same_loc ||
            player_base.time < 100,
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
      },
      {
        config: {
          buttonType: event_marks.check(event_hooks.office_game)
            ? 'danger'
            : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            player_base.time < 300 ||
            (chara_base && chara_base.time) < 300,
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
      },
    );
    // CFLAGNAME:50 = 可再次育成
    if (cid > 0 && era.get(`cflag:${cid}:50`) > 0) {
      group.push({
        config: {
          disabled:
            !awake.chara || !awake.me || era.get(`relation:${cid}:0`) < 76,
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
          disabled: !cid || !awake.chara || !awake.me || not_in_same_loc,
        },
        content: i18n().ui_borrow_money,
        h: () => get_custom_daily(cid).borrow_money(),
      });
    }
    // CFLAGNAME:56 = 节日事件标记
    if (cid > 0 && era.get(`cflag:${cid}:56`) > 0) {
      group.push({
        config: {
          buttonType: 'danger',
          disabled:
            !awake.chara ||
            !awake.me ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost ||
            not_in_same_loc,
        },
        content: i18n().ui_celebration_template.replace(
          '%CELEBRATION%',
          celebration,
        ),
        async h() {
          sys_change_attr_and_print(0, attr_enum.tp, -celebration_cost);
          sys_change_attr_and_print(cid, attr_enum.tp, -50);
          if (!(await sys_get_random_event(event_hooks.celebration, cid)())) {
            era.drawLine();
            era.print(i18n().timon.get_it_celebration(chara, celebration));
            await run_custom_daily(cid, event_hooks.celebration, {});
          }
        },
      });
    }
    // STATUSNAME:17 = 生日
    if (cid > 0 && era.get(`status:${cid}:17`) === 2) {
      group.push({
        config: {
          buttonType: 'danger',
          disabled:
            !awake.chara ||
            !awake.me ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost,
        },
        content: i18n().ui_birthday,
        async h() {
          sys_change_attr_and_print(0, attr_enum.tp, -celebration_cost);
          sys_change_attr_and_print(cid, attr_enum.tp, -50);
          era.print(i18n().timon.get_it_birthday(chara));
          await run_custom_daily(cid, event_hooks.birthday, {});
        },
      });
    }
    if (personal_action.name !== undefined) {
      group.push({
        content: personal_action.name,
        async h() {
          await personal_action.handle();
          await era.waitAnyKey();
        },
      });
    }
    if (is_love_rejected > 0 && is_love_rejected === era.get(`love:${cid}`)) {
      group.push({
        config: { disabled: not_in_same_loc },
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
        config: {
          disabled: !cid || !awake.chara || !awake.me || not_in_same_loc,
        },
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
    group.push(
      {
        config: {
          buttonType: my_event_marks.check(
            event_hooks.recruit_start,
            event_hooks.recruit,
          )
            ? 'danger'
            : 'warning',
          disabled:
            // FLAGNAME:2 = 当前月
            era.get('flag:2') >= 4 ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.playground),
              player_base,
            ) > 0,
        },
        content: i18n().ui_recruit,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.playground));
          await print_recruit_page();
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            my_event_marks.check(event_hooks.school_trainer_office) ||
            npc.te > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.trainer),
              player_base,
            ) > 0 ||
            npc.t === 0,
          title: di18n.get_loc_tips(
            event_marks.check(event_hooks.back_school),
            my_event_marks.check(event_hooks.school_trainer_office),
            npc.t,
            npc.te,
          ),
        },
        content: '前往训练员办公室',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.trainer));
          if (!(await game_guides.school_trainer_office())) {
            await page_trainer_office();
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(
              event_hooks.school_clinic,
              event_hooks.back_school,
            ) ||
            my_event_marks.check(event_hooks.school_clinic) ||
            npc.ce > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.clinic),
              player_base,
            ) > 0 ||
            npc.c === 0,
          title: di18n.get_loc_tips(
            event_marks.check(event_hooks.back_school),
            event_marks.check(event_hooks.school_clinic) ||
              event_marks.check(event_hooks.school_clinic),
            npc.c,
            npc.ce,
          ),
        },
        content: '前往保健室',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.clinic));
          if (
            !(await game_guides.school_clinic()) &&
            !(await sys_get_random_event(event_hooks.school_clinic)())
          ) {
            await page_clinic();
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            era.get('flag:当前月') === 3 ||
            my_event_marks.check(event_hooks.school_god)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            (cid && !train_enabled) ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.god),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '一起' : ''}前往三女神像`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.god, cid), cid);
          if (
            !(await game_guides.school_god()) &&
            !(await sys_get_random_event(event_hooks.school_god, cid)())
          ) {
            if (
              era.get('flag:当前月') === 3 &&
              (await select_yes_or_no(
                '可以因子继承了！要进行吗',
                '因子继承！',
                '普通拜谒就好',
              ))
            ) {
              await print_inherit_page();
            } else {
              await print_god_shop();
            }
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(
              event_hooks.school_atrium,
              event_hooks.back_school,
            ) || my_event_marks.check(event_hooks.school_atrium)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.atrium, cid),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '一起' : ''}前往中庭`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.atrium, cid), cid);
          if (!(await game_guides.school_atrium())) {
            await print_school_page(location_enum.atrium);
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(
              event_hooks.school_rooftop,
              event_hooks.back_school,
            ) || my_event_marks.check(event_hooks.school_rooftop)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.rooftop, cid),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '一起' : ''}前往天台`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.rooftop, cid), cid);
          if (!(await game_guides.school_rooftop())) {
            await print_school_page(location_enum.rooftop);
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            my_event_marks.check(event_hooks.school_chairman) ||
            npc.le > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.chairman),
              player_base,
            ) > 0 ||
            npc.l === 0,
          title: di18n.get_loc_tips(
            event_marks.check(event_hooks.back_school),
            my_event_marks.check(event_hooks.school_chairman),
            npc.l,
            npc.le,
          ),
        },
        content: '前往理事长办公室',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.chairman));
          if (
            !(await game_guides.school_chairman()) &&
            !(await sys_get_random_event(event_hooks.school_chairman)())
          ) {
            await page_chairman_office();
          }
        },
      },
      {
        config: {
          buttonType:
            event_marks.check(event_hooks.back_school) ||
            my_event_marks.check(event_hooks.school_visitors) ||
            npc.ve > 0
              ? 'danger'
              : 'warning',
          disabled:
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.visitor),
              player_base,
            ) > 0 ||
            (npc.v === 0 && !my_event_marks.check(event_hooks.school_visitors)),
          title: di18n.get_loc_tips(
            event_marks.check(event_hooks.back_school),
            my_event_marks.check(event_hooks.school_visitors),
            npc.v,
            npc.ve,
          ),
        },
        content: '前往访客接待室',
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.visitor));
          if (!(await game_guides.school_visitors())) {
            await page_visitors();
          }
        },
      },
      {
        config: { disabled: !awake.me },
        content: '前往小卖部',
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
      {
        // 幼年期只能呆在训练室
        config: {
          buttonType:
            event_marks.check(
              event_hooks.out_start,
              event_hooks.out_river,
              event_hooks.out_shopping,
              event_hooks.out_church,
              event_hooks.out_station,
              event_hooks.back_school,
            ) || my_event_marks.check(event_hooks.out_start)
              ? 'danger'
              : 'warning',
          disabled:
            growth_stage < 1 ||
            !awake.chara ||
            !awake.me ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.gate, cid),
              player_base,
              chara_base,
            ) > 0 ||
            not_in_same_loc,
        },
        content: `${cid > 0 ? '一起' : ''}外出`,
        async h() {
          sys_handle_action(sys_get_move_cost(location_enum.gate, cid), cid);
          era.set('flag:4', location_enum.gate);
          await print_out_page();
          era.set('flag:4', location_enum.office);
        },
      },
    );
  }
  buttons.push([
    {
      content: '角色情报',
      h: print_exp_page,
    },
    {
      config: { disabled: !awake.me },
      content: '持有物品',
      h: print_storage_page,
    },
    {
      content: '出走情报',
      h: report_race_page,
    },
    {
      config: {
        buttonType: office_activity_filter ? 'warning' : 'info',
      },
      content: `筛除训练室活动 [${office_activity_filter ? '开' : '关'}]`,
      h() {
        era.set('flag:筛除训练室活动', !era.get('flag:筛除训练室活动'));
      },
    },
    {
      config: {
        buttonType: out_activity_filter ? 'warning' : 'info',
      },
      content: `筛除外出活动 [${out_activity_filter ? '开' : '关'}]`,
      h() {
        era.set('flag:筛除外出活动', !era.get('flag:筛除外出活动'));
      },
    },
    {
      content: '保存进度',
      h: print_save_page,
    },
    {
      content: '加载存档',
      h: print_load_page,
    },
  ]);

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
  let button;
  switch (ret) {
    case 990:
      switch_image();
      break;
    case 991:
      await report_race_page();
      break;
    default:
      if (ret === 999) {
        button = buttons[0].find((e) => e.acc === ret);
      } else {
        button = buttons[Math.floor(ret / 100) - 1][ret % 100];
      }
      await button.h();
  }
  if (flags.week_start) {
    await next_cb(cid, location_enum.office, location_enum.home);
  }
};
