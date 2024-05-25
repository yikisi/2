const era = require('#/era-electron');

const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const call_daily_event = require('#/system/script/sys-call-daily-script');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const {
  sys_check_act_disabled,
  sys_check_awake,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_chara_info = require('#/page/components/cur-chara-info');
const goto_sex = require('#/page/components/goto-sex');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

/**
 * @param {{s:number,d:boolean,l:number,n:string}[]} positions
 * @param {EventMarks} event_marks
 * @returns {{accelerator:number,config:{buttonType:string,disabled:boolean|*,width:number},content:string,type:string}[]}
 */
function get_position_buttons(positions, event_marks) {
  return positions.map((e, i) => {
    return {
      accelerator: i + 1,
      config: {
        buttonType: event_marks.get(e.s) ? 'danger' : 'warning',
        disabled: e.d,
        width: 4,
      },
      content: e.n,
      type: 'button',
    };
  });
}

/**
 * @param {number} chara_id
 * @param {{stamina:number,time:number}} player_base
 * @param {{stamina:number,time:number}} chara_base
 * @returns {{s:number,d:boolean,l:number,n:string}[]}
 */
function get_positions(chara_id, player_base, chara_base) {
  return [
    {
      d: sys_check_act_disabled(
        sys_get_move_cost(location_enum.river, chara_id),
        player_base,
        chara_base,
      ),
      l: location_enum.river,
      n: '河堤',
      s: event_hooks.out_river,
    },
    {
      d:
        era.get('flag:当前马币') < 10 ||
        sys_check_act_disabled(
          sys_get_move_cost(location_enum.shopping, chara_id),
          player_base,
          chara_base,
        ),
      l: location_enum.shopping,
      n: '商店街',
      s: event_hooks.out_shopping,
    },
    {
      d: sys_check_act_disabled(
        sys_get_move_cost(location_enum.church, chara_id),
        player_base,
        chara_base,
      ),
      l: location_enum.church,
      n: '神社',
      s: event_hooks.out_church,
    },
    {
      d:
        era.get('flag:当前马币') < 10 ||
        sys_check_act_disabled(
          sys_get_move_cost(location_enum.station, chara_id),
          player_base,
          chara_base,
        ),
      l: location_enum.station,
      n: '车站',
      s: event_hooks.out_station,
    },
    {
      d: true,
      l: location_enum.mejiro,
      n: '目白城',
      s: event_hooks.out_mejiro,
    },
  ];
}

async function out_page() {
  let chara_id = era.get('flag:当前互动角色'),
    vehicle;
  const player_base = {
      stamina: era.get('base:0:体力'),
      time: era.get('base:0:精力'),
    },
    chara_base = chara_id
      ? {
          stamina: era.get(`base:${chara_id}:体力`),
          time: era.get(`base:${chara_id}:精力`),
        }
      : undefined;

  await era.clear();
  print_page_header();
  const tokino_check =
    chara_id !== 301 &&
    !(era.get('cflag:301:育成回合计时') < 3 * 48) &&
    sys_check_awake(301) &&
    check_pregnant_unprotect(301);
  print_chara_info(chara_id, chara_info_type.out, tokino_check && 301);
  era.drawLine();
  if (!(await sys_get_random_event(event_hooks.out_start)())) {
    const event_marks = new EventMarks(chara_id);
    let positions = get_positions(chara_id, player_base, chara_base);
    vehicle = !chara_id && era.get('equip:0:单人载具');
    era.drawLine();
    era.printMultiColumns([
      {
        content: vehicle
          ? [
              `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}到达了学园大门……`,
              { isBr: true },
              { isBr: true },
            ]
          : '',
        type: 'text',
      },
      {
        content: [
          '要',
          ...(chara_id
            ? ['和 ', get_chara_talk(chara_id).get_colored_name(), ' 一起']
            : ['独自']),
          '去哪里？',
        ],
        type: 'text',
      },
      ...get_position_buttons(positions, event_marks),
      ...(!chara_id && tokino_check
        ? [
            {
              accelerator: 10,
              content: `和 ${era.get('callname:301:-2')} 攀谈`,
              type: 'button',
            },
          ]
        : []),
      { accelerator: 999, content: '还是回去吧……', type: 'button' },
    ]);

    const aim = await era.input();
    let temp;
    switch (aim) {
      case 10:
        temp = {
          flag: true,
          chara: get_chara_talk(301),
          title: new CharaTitles(301).get_colored_curr_title(),
        };
        while (temp.flag) {
          temp.flag &&= await npc_common(
            temp.chara,
            temp.title,
            {
              async handle() {
                await era.printAndWait([
                  get_chara_talk(0).get_colored_name(),
                  ' 和 ',
                  temp.chara.get_colored_name(),
                  ' 聊了会天……',
                ]);
              },
              name: '聊天',
            },
            {
              async handle() {
                switch (await goto_sex(301, location_enum.restroom)) {
                  case true:
                    break;
                  case 2:
                    temp.flag = false;
                }
              },
              name: '求爱',
            },
            {
              async handle() {
                const positions = get_positions(
                  301,
                  {
                    stamina: era.get('base:0:体力'),
                    time: era.get('base:0:精力'),
                  },
                  {
                    stamina: era.get('base:301:体力'),
                    time: era.get('base:301:精力'),
                  },
                );
                era.printMultiColumns([
                  {
                    content: [
                      '要和 ',
                      temp.chara.get_colored_name(),
                      ' 一起去哪里？',
                    ],
                    type: 'text',
                  },
                  ...get_position_buttons(positions, new EventMarks(301)),
                  { accelerator: 999, content: '还是回去吧……', type: 'button' },
                ]);
                const aim = await era.input();
                if (aim !== 999) {
                  vehicle = era.get('equip:0:多人载具');
                  era.printMultiColumns([
                    { type: 'divider' },
                    {
                      content: [
                        '和 ',
                        temp.chara.get_colored_name(),
                        ' 一起',
                        vehicle
                          ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}`
                          : '',
                        `前往 ${positions[aim - 1].n}……`,
                      ],
                      type: 'text',
                    },
                  ]);
                  era.println();
                  sys_handle_action(
                    sys_get_move_cost(positions[aim - 1].l, 301),
                    301,
                  );
                  era.set('flag:当前位置', positions[aim - 1].l);
                  if (!(await sys_get_random_event(positions[aim - 1].s)())) {
                    await call_daily_event(301, positions[aim - 1].s);
                  }
                  era.set('flag:当前位置', location_enum.gate);
                }
                temp.flag = false;
              },
              name: '邀请外出',
            },
            {
              name: '庆贺',
            },
            {},
            {
              handle() {
                return era.printAndWait([
                  '和 ',
                  temp.chara.get_colored_name(),
                  ' 道别后，',
                  get_chara_talk(0).get_colored_name(),
                  ' 离开了……',
                ]);
              },
              name: '再会',
            },
          );
          if (temp.flag) {
            await era.clear();
            print_page_header();
          }
        }
        break;
      case 999:
        break;
      default:
        vehicle = chara_id
          ? era.get('equip:0:多人载具')
          : era.get('equip:0:多人载具') || era.get('equip:0:单人载具');
        era.printMultiColumns([
          {
            type: 'divider',
          },
          {
            content: [
              ...(chara_id
                ? ['和 ', get_chara_talk(chara_id).get_colored_name(), ' 一起']
                : ['独自']),
              vehicle
                ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}`
                : '',
              `前往 ${positions[aim - 1].n}……`,
            ],
            type: 'text',
          },
        ]);
        era.println();
        sys_handle_action(
          sys_get_move_cost(positions[aim - 1].l, chara_id),
          chara_id,
        );
        era.set('flag:当前位置', positions[aim - 1].l);
        if (!(await sys_get_random_event(positions[aim - 1].s)())) {
          await call_daily_event(chara_id, positions[aim - 1].s);
        }
        era.set('flag:当前位置', location_enum.gate);
    }
    era.drawLine();
    await era.printAndWait('回去了……');
    era.println();
    await sys_get_random_event(event_hooks.back_school)({
      loc: positions[aim]?.l,
    });
  }
}

module.exports = out_page;
