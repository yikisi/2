const era = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_get_move_cost } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_chara_info = require('#/page/components/cur-chara-info');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const select_mejiro_city = require('#/page/mejiro/select-mejiro');

const { run_custom_daily } = require('#/event/daily/daily-factory');
const GameGuides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');
const YandereList = require('#/data/event/yandere-list');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

/**
 * @param {{s:number,d:boolean,l:number,n:string,[t]:string}[]} positions
 * @param {EventMarks} event_marks
 * @returns {{accelerator:number,config:{buttonType:string,disabled:boolean|*,width:number},content:string,type:string}[]}
 */
function get_position_buttons(positions, event_marks) {
  return positions.map((e, i) => ({
    accelerator: i + 1,
    config: {
      buttonType: event_marks.check(e.s) ? 'danger' : 'warning',
      disabled: e.d,
      title: e.t,
      width: 4,
    },
    content: e.n,
    type: 'button',
  }));
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
  const tokino_check = chara_id !== 301 && sys_check_npc_working(301);
  print_chara_info(chara_id, chara_info_type.out, tokino_check && 301);
  era.drawLine();
  if (!(await sys_get_random_event(event_hooks.out_start)())) {
    const event_marks = new EventMarks(chara_id);
    let positions = select_mejiro_city().get_positions(
      chara_id,
      player_base,
      chara_base,
    );
    vehicle = !chara_id && era.get('flag:单人载具');
    era.drawLine();
    if (vehicle) {
      era.print(
        `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}到达了学园大门……`,
      );
    }
    await new GameGuides().out();
    era.printMultiColumns([
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
          const temp_flag = await npc_common(
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
              fail_cb() {
                temp.flag = false;
              },
              loc: location_enum.restroom,
              name: '求爱',
            },
            {
              async handle() {
                const positions = select_mejiro_city().get_positions(
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
                  vehicle = era.get('flag:多人载具');
                  era.printMultiColumns([
                    { type: 'divider' },
                    {
                      content: [
                        '【和 ',
                        temp.chara.get_colored_name(),
                        ' 一起',
                        vehicle
                          ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}`
                          : '',
                        `前往 ${positions[aim - 1].n}】`,
                      ],
                      type: 'text',
                    },
                  ]);
                  sys_handle_action(
                    sys_get_move_cost(positions[aim - 1].l, 301),
                    301,
                  );
                  era.set('flag:当前位置', positions[aim - 1].l);
                  if (positions[aim - 1].l === location_enum.mejiro) {
                    await select_mejiro_city().page(chara_id);
                  } else if (
                    !(await sys_get_random_event(positions[aim - 1].s)())
                  ) {
                    await run_custom_daily(301, positions[aim - 1].s);
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
            era.get('cflag:301:招募状态') === recruit_flags.yes ||
              new TokinoLifeMarks().who_am_i !== 2
              ? {}
              : {
                  name: '「来帮帮我吧」（招募）',
                  handle() {
                    temp.chara.name = era.set('callname:301:-2', '骏川缰绳');
                    era.set('cflag:301:招募状态', recruit_flags.yes);
                    if (era.get('talent:301:病娇')) {
                      new YandereList().push(301);
                    }
                    return era.printAndWait([
                      temp.chara.get_colored_name(),
                      ' 加入了队伍！',
                    ]);
                  },
                },
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
          if ((temp.flag &&= temp_flag)) {
            await era.clear();
            print_page_header();
          }
        }
        break;
      case 999:
        break;
      default:
        vehicle =
          chara_id > 0
            ? era.get('flag:多人载具')
            : era.get('flag:多人载具') || era.get('flag:单人载具');
        era.printMultiColumns([
          {
            type: 'divider',
          },
          {
            content: [
              '【',
              ...(chara_id > 0
                ? ['和 ', get_chara_talk(chara_id).get_colored_name(), ' 一起']
                : ['独自']),
              vehicle
                ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}`
                : '',
              `前往 ${positions[aim - 1].n}】`,
            ],
            type: 'text',
          },
        ]);
        sys_handle_action(
          sys_get_move_cost(positions[aim - 1].l, chara_id),
          chara_id,
        );
        era.set('flag:当前位置', positions[aim - 1].l);
        if (positions[aim - 1].l === location_enum.mejiro) {
          await select_mejiro_city().page(chara_id);
        } else if (!(await sys_get_random_event(positions[aim - 1].s)())) {
          await run_custom_daily(chara_id, positions[aim - 1].s);
        }
        era.set('flag:当前位置', location_enum.gate);
    }
    era.drawLine();
    await era.printAndWait('【折返了】');
    await sys_get_random_event(event_hooks.back_school)({
      loc: positions[aim - 1]?.l,
    });
  }
}

module.exports = out_page;
