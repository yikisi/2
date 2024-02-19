const era = require('#/era-electron');

const call_daily_event = require('#/system/script/sys-call-daily-script');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_chara_info = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const {
  sys_check_act_disabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { vehicle_verbs, vehicle_names } = require('#/data/move-const');

async function out_page() {
  era.set('flag:当前位置', location_enum.gate);
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
  print_chara_info(chara_id, chara_info_type.out, 301);
  era.drawLine();
  if (!(await sys_get_random_event(event_hooks.out_start)(chara_id))) {
    const event_marks = new EventMarks(chara_id);
    const positions = [
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
    vehicle = !chara_id && era.get('equip:0:单人载具');
    era.drawLine();
    era.printMultiColumns([
      {
        content: vehicle
          ? [
              `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}到达了学院大门……`,
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
      ...positions.map((e, i) => {
        return {
          accelerator: i,
          config: {
            buttonType: event_marks.get(e.s) ? 'danger' : 'warning',
            disabled: e.d,
            width: 4,
          },
          content: e.n,
          type: 'button',
        };
      }),
    ]);
    era.printButton('还是回去吧……', 999);
    const aim = await era.input();

    if (999 !== aim) {
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
            `前往 ${positions[aim].n}……`,
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        },
      ]);
      sys_handle_action(
        sys_get_move_cost(positions[aim].l, chara_id),
        chara_id,
      );
      if (!(await sys_get_random_event(positions[aim].s)())) {
        await call_daily_event(chara_id, positions[aim].s);
      }
    }
    era.drawLine();
    await era.printAndWait('回去了……');
    era.println();
    await sys_get_random_event(event_hooks.back_school)();
  }
  era.set('flag:当前位置', location_enum.office);
}

module.exports = out_page;
