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

const goto_sex = require('#/page/components/goto-sex');
const take_care = require('#/page/components/take-care');
const print_juel_shop_page = require('#/page/page-juel-shop');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const {
  attr_bg_colors,
  love_colors,
  relation_colors,
} = require('#/data/color-const');
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

const { __ } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @param {{color:string,content:string,[title]:string}|string|undefined} title
 * @param {{name:string,[handle]:function():Promise}} talk_cb
 * @param {{name:string,handle:function():Promise}|{name:string,[loc]:number,fail_cb:function()}} sex_cb
 * @param {{name:string,handle:function():Promise}|{name:string,loc:number,print_out_page:function():Promise}} out_cb
 * @param {{name:string,[handle]:function():Promise}} cele_cb
 * @param {{name:string,handle:function():Promise,[disabled]:boolean}|{}} func_cb
 * @param {{name:string,[handle]:function():Promise}} back_cb
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
  back_cb,
) {
  const relation = get_relation_info(chara.id);
  const celebration_cost = 50 * (era.get('cflag:0:节日事件标记') + 1);
  const love = get_love_info(chara.id);
  const relation_check =
    era.get(`relation:${chara.id}:0`) <= 225 &&
    era.get(`love:${chara.id}`) < 50;
  const is_awake = sys_check_awake(chara.id);
  const player_base = {
    stamina: era.get('base:0:体力'),
    time: era.get('base:0:精力'),
  };
  const chara_base = {
    stamina: era.get(`base:${chara.id}:体力`),
    time: era.get(`base:${chara.id}:精力`),
  };
  const is_recruit =
    era.get(`cflag:${chara.id}:招募状态`) === recruit_flags.yes;
  const image = era.get(`cstr:${chara.id}:头像`);
  era.setVerticalAlign('middle');
  const buttons = [
    {
      b: {
        config: { disabled: era.get('base:0:精力') < 200 || !is_awake },
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
      b: { content: sex_cb.name },
      async h() {
        if (sex_cb.handle) {
          await sex_cb.handle();
        } else {
          const temp = era.get('flag:当前位置');
          switch (
            await goto_sex(chara.id, sex_cb.loc || era.get('flag:当前位置'))
          ) {
            case true:
              await era.printAndWait([
                chara.get_colored_name(),
                ' 与 ',
                get_chara_talk(0).get_colored_name(),
                ' 约定晚上在家见面……',
              ]);
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
        config: { disabled: era.get('base:0:精力') < 200 || !is_awake },
        content: '送礼物',
      },
      async h() {
        era.drawLine();
        era.print([
          '给 ',
          get_chara_talk(chara.id).get_colored_name(),
          ' 送上了一份小礼物……',
        ]);
        era.println();
        await run_custom_daily(chara.id, event_hooks.office_gift);
      },
    },
    {
      b: {
        config: {
          disabled:
            !is_awake ||
            sys_check_act_disabled(
              sys_get_move_cost(location_enum.gate, chara.id),
              player_base,
              chara_base,
            ) > 0 ||
            relation_check,
          buttonType: EventMarks.get(chara.id).check(
            event_hooks.out_start,
            event_hooks.out_river,
            event_hooks.out_shopping,
            event_hooks.out_church,
            event_hooks.out_station,
            event_hooks.back_school,
          )
            ? 'danger'
            : 'warning',
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
    },
  ];
  if (func_cb.handle !== undefined) {
    buttons.push({
      b: {
        config: { disabled: !is_awake || func_cb.disabled },
        content: func_cb.name,
      },
      h: func_cb.handle,
    });
  }
  if (era.get(`cflag:${chara.id}:节日事件标记`) > 0) {
    buttons.push({
      b: {
        config: {
          buttonType: 'danger',
          disabled:
            !is_awake ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost ||
            relation_check,
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
          era.print([
            '【和 ',
            chara.get_colored_name(),
            ' 一起庆祝了 ',
            get_celebration(),
            '】',
          ]);
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
          disabled:
            !is_awake ||
            chara_base.time < 50 ||
            player_base.time < celebration_cost ||
            relation_check,
        },
        content: '庆祝生日',
      },
      async h() {
        sys_change_attr_and_print(0, attr_enum.tp, -celebration_cost);
        sys_change_attr_and_print(chara.id, attr_enum.tp, -50);
        era.print(['【向 ', chara.get_colored_name(), ' 祝贺生日快乐】']);
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
            era.get(`cflag:${chara.id}:照看`) > 0 ? '切换照看角色' : '请求照看',
        },
        h: take_care.bind(void 0, chara),
      });
    }
    if (
      era.get(`exp:${chara.id}:性爱次数`) > era.get(`exp:${chara.id}:睡奸次数`)
    ) {
      buttons.push({
        b: { content: '提升对方性爱能力' },
        h: print_juel_shop_page.bind(void 0, chara.id),
      });
    }
  }
  if (
    era.get(`cflag:${chara.id}:爱慕暂拒`) > 0 &&
    era.get(`cflag:${chara.id}:爱慕暂拒`) === era.get(`love:${chara.id}`)
  ) {
    buttons.push({
      b: { content: '重新触发爱慕事件' },
      async h() {
        era.set(`cflag:${chara.id}:爱慕暂拒`, 0);
        get_custom_check(chara.id).check_love_events();
        await era.printAndWait([
          chara.get_colored_name(),
          { content: ' 似乎决定重新审视你们之间的关系……' },
        ]);
      },
    });
  }
  era.printInColRows(
    [
      {
        type: 'divider',
      },
    ],
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
              ...['hp', 'tp'].reduce((p, c, i) => {
                const val = era.get(`base:${chara.id}:${i}`);
                const limit = era.get(`maxbase:${chara.id}:${i}`);
                p.push(
                  { config: { width: 2 }, content: __(c), type: 'text' },
                  {
                    config: { color: attr_bg_colors[c], height: 22, width: 12 },
                    inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
                    percentage: (val * 100) / limit,
                    type: 'progress',
                  },
                  { content: [], type: 'text' },
                );
                return p;
              }, []),
              {
                config: { width: 2 },
                content: '状态',
                type: 'text',
              },
              {
                config: { width: 22 },
                content: get_status(chara.id),
                type: 'text',
              },
            ]
          : []),
        {
          config: { width: 2 },
          content: '好感',
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
        { config: { width: 2 }, content: '爱慕', type: 'text' },
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
        content: back_cb.name,
        type: 'button',
      },
    ],
  );
  era.setVerticalAlign('top');
  const ret = await era.input();
  era.drawLine();
  if (ret === 99) {
    if (back_cb.handle) {
      await back_cb.handle();
    }
    return false;
  } else {
    await buttons[ret - 1].h();
  }
  if (!era.get(`base:${chara.id}:体力`)) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 体力不支，要回去休息了……',
    ]);
    era.set(`status:${chara.id}:沉睡`, 1);
  }
  return sys_check_awake(chara.id);
}

module.exports = npc_common;
