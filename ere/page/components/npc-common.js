const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const sys_call_daily_event = require('#/system/script/sys-call-daily-script');
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

const goto_sex = require('#/page/components/goto-sex');
const print_juel_shop_page = require('#/page/page-juel-shop');

const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const {
  attr_background_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_love_info, get_relation_info } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

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
  const relation = get_relation_info(chara.id),
    celebration_cost = 50 * (era.get('cflag:0:节日事件标记') + 1),
    love = get_love_info(chara.id),
    relation_check =
      era.get(`relation:${chara.id}:0`) <= 225 &&
      era.get(`love:${chara.id}`) < 50,
    is_awake = sys_check_awake(chara.id),
    player_base = {
      stamina: era.get('base:0:体力'),
      time: era.get('base:0:精力'),
    },
    chara_base = {
      stamina: era.get(`base:${chara.id}:体力`),
      time: era.get(`base:${chara.id}:精力`),
    },
    is_recruit = era.get(`cflag:${chara.id}:招募状态`) === recruit_flags.yes;
  era.setVerticalAlign('middle');
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
          names: `${era.get(`cstr:${chara.id}:头像`)}_半身`,
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
              {
                config: { width: 2 },
                content: '体力',
                type: 'text',
              },
              {
                config: {
                  color: attr_background_colors['体力'],
                  height: 22,
                  width: 12,
                },
                inContent: `${Math.floor(era.get(`base:${chara.id}:体力`))}/${era.get(
                  `maxbase:${chara.id}:体力`,
                )}`,
                percentage:
                  (era.get(`base:${chara.id}:体力`) * 100) /
                  era.get(`maxbase:${chara.id}:体力`),
                type: 'progress',
              },
              { content: '', type: 'text' },
              {
                config: { width: 2 },
                content: '精力',
                type: 'text',
              },
              {
                config: {
                  color: attr_background_colors['精力'],
                  height: 22,
                  width: 12,
                },
                inContent: `${Math.floor(era.get(`base:${chara.id}:精力`))}/${era.get(
                  `maxbase:${chara.id}:精力`,
                )}`,
                percentage:
                  (era.get(`base:${chara.id}:精力`) * 100) /
                  era.get(`maxbase:${chara.id}:精力`),
                type: 'progress',
              },
              { content: '', type: 'text' },
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
            color: relation_colors[relation[0]],
            width: is_recruit ? 4 : 22,
          },
          content: relation.join(' '),
          type: 'text',
        },
        { config: { width: 2 }, content: '爱慕', type: 'text' },
        {
          config: {
            color: love_colors[love[0]],
            width: is_recruit ? 4 : 22,
          },
          content: love.join(' '),
          type: 'text',
        },
      ],
      config: { width: 16 },
    },
    [
      { type: 'divider' },
      ...[
        {
          accelerator: 1,
          config: { disabled: era.get('base:0:精力') < 200 || !is_awake },
          content: talk_cb.name,
          type: 'button',
        },
        { accelerator: 2, content: sex_cb.name, type: 'button' },
        {
          accelerator: 3,
          config: { disabled: era.get('base:0:精力') < 200 || !is_awake },
          content: '送礼物',
          type: 'button',
        },
        {
          accelerator: 4,
          config: {
            disabled:
              !is_awake ||
              sys_check_act_disabled(
                sys_get_move_cost(location_enum.gate, chara.id),
                player_base,
                chara_base,
              ) ||
              relation_check,
          },
          content: out_cb.name,
          type: 'button',
        },
        func_cb.handle
          ? {
              accelerator: 5,
              config: { disabled: !is_awake || func_cb.disabled },
              content: func_cb.name,
              type: 'button',
            }
          : undefined,
        era.get(`cflag:${chara.id}:节日事件标记`)
          ? {
              accelerator: 6,
              config: {
                buttonType: 'danger',
                disabled:
                  !is_awake ||
                  chara_base.time < 50 ||
                  player_base.time < celebration_cost ||
                  relation_check,
              },
              content: cele_cb.name,
              type: 'button',
            }
          : undefined,
        era.get(`cflag:${chara.id}:招募状态`) === recruit_flags.yes
          ? { accelerator: 7, content: '提升对方性爱能力', type: 'button' }
          : undefined,
        era.get(`cflag:${chara.id}:爱慕暂拒`) &&
        era.get(`cflag:${chara.id}:爱慕暂拒`) === era.get(`love:${chara.id}`)
          ? {
              accelerator: 8,
              content: '重新触发爱慕事件',
              type: 'button',
            }
          : undefined,
      ]
        .filter((e) => e)
        .map((e) => {
          (e.config || (e.config = {})).width = 8;
          return e;
        }),
      {
        accelerator: 99,
        content: back_cb.name,
        type: 'button',
      },
    ],
  );
  era.setVerticalAlign('top');
  let temp = await era.input();
  era.drawLine();
  switch (temp) {
    case 1:
      sys_change_attr_and_print(0, '精力', -200);
      talk_cb.handle && (await talk_cb.handle());
      era.println();
      sys_like_chara(chara.id, 0, get_random_value(5, 20)) &&
        (await era.waitAnyKey());
      break;
    case 2:
      if (sex_cb.handle) {
        await sex_cb.handle();
      } else {
        temp = era.get('flag:当前位置');
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
      break;
    case 3:
      era.drawLine();
      era.print([
        '给 ',
        get_chara_talk(chara.id).get_colored_name(),
        ' 送上了一份小礼物……',
      ]);
      era.println();
      await sys_call_daily_event(chara.id, event_hooks.office_gift);
      break;
    case 4:
      temp = era.get('flag:当前互动角色');
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
      break;
    case 5:
      await func_cb.handle();
      break;
    case 6:
      if (cele_cb.handle) {
        await cele_cb.handle();
      }
      sys_change_attr_and_print(0, '精力', -celebration_cost);
      sys_change_attr_and_print(chara.id, '精力', -50);
      era.drawLine();
      await sys_call_daily_event(chara.id, event_hooks.celebration);
      break;
    case 7:
      await print_juel_shop_page(chara.id);
      break;
    case 8:
      era.set(`cflag:${chara.id}:爱慕暂拒`, 0);
      get_custom_check(chara.id).check_love_events();
      await era.printAndWait([
        chara.get_colored_name(),
        { content: ' 似乎决定重新审视你们之间的关系……' },
      ]);
      break;
    case 99:
      if (back_cb.handle) {
        await back_cb.handle();
      }
      return false;
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
