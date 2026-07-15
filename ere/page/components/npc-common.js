const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const {
  sys_change_attr_and_print,
  sys_handle_action,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_act_disabled,
  sys_check_awake,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const get_progress_bar = require('#/page/components/get-progress-bar');
const goto_sex = require('#/page/components/goto-sex');
const take_care = require('#/page/components/take-care');
const { get_c_base } = require('#/page/homepage/snippets');
const print_juel_shop_page = require('#/page/page-juel-shop');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { love_colors, relation_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_celebration,
  get_love_info,
  get_relation_info,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @param {{color:string,content:string,[title]:string}|string|undefined} title
 * @param {{name:string,[handle]:function():Promise}} talk_cb
 * @param {{name:string,handle:function():Promise}|{[d]:boolean,name:string,[loc]:number,fail_cb:function()}} sex_cb
 * @param {{name:string,handle:function():Promise}|{[d]:boolean,name:string,loc:number,print_out_page:function():Promise}} out_cb
 * @param {{[d]:boolean,name:string,[handle]:function():Promise}} cele_cb
 * @param {{name:string,handle:function():Promise,[disabled]:boolean,[title]:string}|{}} func_cb
 * @param {{name:string,[config]:ButtonConfig,[handle]:function():Promise}} bye_cb
 * @param {function()} [birth_cb]
 * @returns {Promise<boolean|void>}
 */
async function npc_common(
  chara,
  title,
  talk_cb,
  sex_cb,
  out_cb,
  cele_cb,
  func_cb,
  bye_cb,
  birth_cb,
) {
  const relation = get_relation_info(chara.id);
  const love = get_love_info(chara.id);
  const relation_check =
    era.get(`relation:${chara.id}:0`) <= 225 &&
    era.get(`love:${chara.id}`) < 50;
  const relation_tip =
    relation_check &&
    i18n()
      .ui_deep_interact_with_npc_template.replace(
        '%R_REQUIRE%',
        i18n().relation_5,
      )
      .replace('%R_CURRENT%', relation.mark())
      .replace('%L_REQUIRE%', i18n().love_3)
      .replace('%L_CURRENT%', love.mark());
  const is_awake = sys_check_awake(chara.id);
  const player_base = get_c_base(0);
  const chara_base = get_c_base(chara.id);
  const is_recruit =
    era.get(`cflag:${chara.id}:招募状态`) === recruit_flags.yes;
  const image = era.get(`cstr:${chara.id}:头像`);
  era.setVerticalAlign('middle');
  let cost_info;
  cost_info = {
    mark: 0b10 * (era.get('base:0:精力') < 200),
    time: 200,
  };
  const jpy = era.get('flag:当前马币');
  /** @type {{b:{[config]:ButtonConfig,content:string},h():Promise<void>}[]} */
  const buttons = [
    {
      b: {
        config: {
          disabled: cost_info.mark > 0 || !is_awake,
          title: di18n.get_act_tip(false, cost_info),
        },
        content: talk_cb.name,
      },
      async h() {
        sys_change_attr_and_print(0, attr_enum.tp, -200);
        talk_cb.handle && (await talk_cb.handle());
        era.println();
        sys_like_chara(chara.id, 0, get_random_value(5, 20)) &&
          (await era.waitAnyKey());
      },
    },
    {
      b: {
        config: {
          disabled: !!sex_cb.d,
          title: sex_cb.d ? i18n().ui_moon_well_partner_tip : void 0,
        },
        content: sex_cb.name,
      },
      async h() {
        if (sex_cb.handle) {
          await sex_cb.handle();
        } else {
          const temp = era.get('flag:当前位置');
          switch (
            await goto_sex(chara.id, sex_cb.loc || era.get('flag:当前位置'))
          ) {
            case true:
              await era.printAndWait(
                i18n().timon.get_it_home_sex(chara, get_chara_talk(0)),
              );
              break;
            case 2:
              sex_cb.fail_cb();
          }
          era.set('flag:当前位置', temp);
        }
      },
    },
    {
      b: {
        config: {
          disabled: cost_info.mark > 0 || !is_awake || jpy < 0,
          title: di18n.get_act_tip(
            false,
            cost_info,
            jpy < 10 &&
              i18n().ui_cost_money_tip_template.replace('%MONEY%', '10'),
          ),
        },
        content: i18n().ui_office_gift,
      },
      async h() {
        era.drawLine();
        era.print(i18n().timon.get_it_office_gift(chara));
        era.println();
        await run_custom_daily(chara.id, event_hooks.office_gift);
      },
    },
  ];
  cost_info = sys_get_move_cost(location_enum.gate, chara.id);
  cost_info.mark = sys_check_act_disabled(cost_info, player_base, chara_base);
  const c_marks = EventMarks.get(chara.id);
  buttons.push({
    b: {
      config: {
        disabled:
          !is_awake || cost_info.mark > 0 || relation_check || !!out_cb.d,
        buttonType: c_marks.check(
          event_hooks.out_start,
          event_hooks.out_river,
          event_hooks.out_shopping,
          event_hooks.out_church,
          event_hooks.out_station,
          event_hooks.back_school,
        )
          ? 'danger'
          : 'warning',
        title: di18n.get_loc_tips(
          c_marks.check(event_hooks.back_school),
          c_marks.check(
            event_hooks.out_start,
            event_hooks.out_river,
            event_hooks.out_shopping,
            event_hooks.out_church,
            event_hooks.out_station,
          ),
          0,
          0,
          cost_info,
          relation_tip,
          out_cb.d && i18n().ui_moon_well_partner_tip,
        ),
      },
      content: out_cb.name,
    },
    async h() {
      const temp = era.get('flag:当前互动角色');
      era.set('flag:当前互动角色', chara.id);
      if (out_cb.handle) {
        await out_cb.handle();
      } else {
        sys_handle_action(
          sys_get_move_cost(location_enum.gate, chara.id),
          chara.id,
        );
        era.set('flag:当前位置', location_enum.gate);
        await out_cb.print_out_page();
        era.set('flag:当前位置', out_cb.loc);
      }
      era.set('flag:当前互动角色', temp);
    },
  });
  if (func_cb.handle !== void 0) {
    buttons.push({
      b: {
        config: {
          disabled: !is_awake || func_cb.disabled,
          title: func_cb.title,
        },
        content: func_cb.name,
      },
      h: func_cb.handle,
    });
  }
  const celebration_cost = 50 * (era.get('cflag:0:节日事件标记') + 1);
  cost_info = {
    mark:
      0b10 * (player_base.time < celebration_cost) +
      0b1000 * (chara_base.time < 50),
    time: celebration_cost,
    ctime: 50,
  };
  if (era.get(`cflag:${chara.id}:节日事件标记`) > 0) {
    buttons.push({
      b: {
        config: {
          buttonType: 'danger',
          disabled:
            !is_awake || cost_info.mark > 0 || relation_check || !!cele_cb.d,
          title: di18n.get_act_tip(
            c_marks.check(event_hooks.celebration),
            cost_info,
            relation_tip,
            cele_cb.d && i18n().ui_moon_well_partner_tip,
          ),
        },
        content: cele_cb.name,
      },
      async h() {
        if (cele_cb.handle) {
          await cele_cb.handle();
        }
        sys_change_attr_and_print(0, attr_enum.tp, -celebration_cost);
        sys_change_attr_and_print(chara.id, attr_enum.tp, -50);
        era.drawLine();
        if (
          !(await sys_get_random_event(event_hooks.celebration, chara.id)())
        ) {
          era.drawLine();
          era.print(i18n().timon.get_it_celebration(chara, get_celebration()));
          await run_custom_daily(chara.id, event_hooks.celebration, {});
        }
      },
    });
  }
  if (era.get(`status:${chara.id}:生日`) === 2) {
    buttons.push({
      b: {
        config: {
          buttonType: 'danger',
          disabled: !is_awake || cost_info.mark > 0 || relation_check,
          title: di18n.get_act_tip(!1, cost_info, relation_tip),
        },
        content: i18n().ui_birthday,
      },
      async h() {
        birth_cb && (await birth_cb());
        sys_change_attr_and_print(0, attr_enum.tp, -celebration_cost);
        sys_change_attr_and_print(chara.id, attr_enum.tp, -50);
        era.print(i18n().timon.get_it_birthday(chara));
        await run_custom_daily(chara.id, event_hooks.birthday, {});
      },
    });
  }
  if (era.get(`cflag:${chara.id}:招募状态`) === recruit_flags.yes) {
    if (
      era.get(`cflag:${chara.id}:可再次育成`) > 0 ||
      !era.get(`cflag:${chara.id}:种族`)
    ) {
      buttons.push({
        b: {
          config: { disabled: era.get(`relation:${chara.id}:0`) < 76 },
          content:
            era.get(`cflag:${chara.id}:照看`) > 0
              ? i18n().ui_change_take_care
              : i18n().ui_ask_take_care,
        },
        h: take_care.bind(void 0, chara),
      });
    }
    if (
      era.get(`exp:${chara.id}:性爱次数`) > era.get(`exp:${chara.id}:睡奸次数`)
    ) {
      buttons.push({
        b: { content: i18n().ui_ero_update },
        h: print_juel_shop_page.bind(void 0, chara.id),
      });
    }
  }
  if (
    era.get(`cflag:${chara.id}:爱慕暂拒`) > 0 &&
    era.get(`cflag:${chara.id}:爱慕暂拒`) === era.get(`love:${chara.id}`)
  ) {
    buttons.push({
      b: { content: i18n().ui_check_love },
      async h() {
        era.set(`cflag:${chara.id}:爱慕暂拒`, 0);
        get_custom_check(chara.id).check_love_events();
        await era.printAndWait(i18n().timon.get_it_check_love(chara));
      },
    });
  }
  era.printInColRows(
    [{ type: 'divider' }],
    {
      columns: [
        {
          config: { width: 21, align: 'center' },
          content: [...(title ? [title, ' '] : []), chara.get_colored_name()],
          type: 'text',
        },
        {
          config: { width: 21 },
          names: `${image}_私_半身\t${image}_半身`,
          type: 'image.whole',
        },
      ],
      config: { width: 4 },
    },
    {
      columns: [
        { content: '\n', type: 'text' },
        ...(is_recruit
          ? [
              ...get_progress_bar(chara.id),
              {
                config: { width: 2 },
                content: i18n().tb_status.n_status,
                type: 'text',
              },
              {
                config: { width: 22 },
                content: get_status(chara.id, 24),
                type: 'text',
              },
            ]
          : []),
        {
          config: { width: 2 },
          content: i18n().ui_relation,
          type: 'text',
        },
        {
          config: {
            color: relation_colors[relation.level],
            width: is_recruit ? 4 : 22,
          },
          content: relation.full(),
          type: 'text',
        },
        { config: { width: 2 }, content: i18n().ui_love, type: 'text' },
        {
          config: {
            color: love_colors[love.level],
            width: is_recruit ? 4 : 22,
          },
          content: love.full(),
          type: 'text',
        },
      ],
      config: { width: 16 },
    },
    [
      { type: 'divider' },
      ...buttons.map((e, i) => ({
        ...e.b,
        config: { ...(e.b.config ?? {}), width: 8 },
        accelerator: i + 1,
        type: 'button',
      })),
      {
        accelerator: 99,
        config: bye_cb.config,
        content: bye_cb.name,
        type: 'button',
      },
    ],
  );
  era.setVerticalAlign('top');
  const ret = await era.input();
  era.drawLine();
  if (ret === 99) {
    if (bye_cb.handle) {
      await bye_cb.handle();
    }
    return false;
  } else {
    await buttons[ret - 1].h();
  }
  if (!era.get(`base:${chara.id}:体力`)) {
    await era.printAndWait(i18n().timon.get_it_npc_sleep(chara));
    era.set(`status:${chara.id}:沉睡`, 1);
  }
  return sys_check_awake(chara.id);
}

module.exports = npc_common;
