const era = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_get_move_cost } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_chara_info = require('#/page/components/cur-chara-info');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const MejiroCity = require('#/page/mejiro/mejiro-common');

const { run_custom_daily } = require('#/event/daily/daily-factory');
const game_guides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

require('#/page/mejiro/free-mejiro');
require('#/page/mejiro/call-of-mejiro');

/**
 * @param {{[a]:number,s:number,d:boolean,l:number,n:string,[t]:string}[]} positions
 * @param {EventMarks} event_marks
 * @returns {{accelerator:number,config:{buttonType:string,disabled:boolean|*,width:number},content:string,type:string}[]}
 */
function get_position_buttons(positions, event_marks) {
  return positions.map((e, i) => ({
    accelerator: e.a ?? i + 1,
    config: {
      buttonType: event_marks.check(e.s) ? 'danger' : 'warning',
      disabled: e.d,
      disableWarning: true,
      title: e.t,
      width: 4,
    },
    content: e.n,
    type: 'button',
  }));
}

async function out_page() {
  let cid = era.get('flag:当前互动角色');
  let vehicle;
  const player_base = {
      stamina: era.get('base:0:体力'),
      time: era.get('base:0:精力'),
    },
    chara_base =
      cid > 0
        ? {
            stamina: era.get(`base:${cid}:体力`),
            time: era.get(`base:${cid}:精力`),
          }
        : undefined;

  await era.clear();
  print_page_header();
  const tokino_check = cid !== 301 && sys_check_npc_working(301);
  print_chara_info(cid, chara_info_type.out, tokino_check && 301);
  era.drawLine();
  if (!(await sys_get_random_event(event_hooks.out_start)())) {
    const event_marks = EventMarks.get(cid);
    let positions = MejiroCity.instance().get_positions(
      cid,
      player_base,
      chara_base,
    );
    vehicle = !cid && era.get('flag:单人载具');
    era.drawLine();
    if (vehicle) {
      era.print(
        `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}到达了学园大门……`,
      );
    }
    await game_guides.out();
    era.printMultiColumns([
      {
        content: [
          '要',
          ...(cid
            ? ['和 ', get_chara_talk(cid).get_colored_name(), ' 一起']
            : ['独自']),
          '去哪里？',
        ],
        type: 'text',
      },
      ...get_position_buttons(positions, event_marks),
      ...(!cid && tokino_check
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
          title: CharaTitles.get(301).get_colored_curr_title(),
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
                const positions = MejiroCity.instance().get_positions(
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
                  ...get_position_buttons(positions, EventMarks.get(301)),
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
                    await MejiroCity.instance().page(301);
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
                    era.set('callname:301:-2', '骏川缰绳');
                    era.set('cflag:301:招募状态', recruit_flags.yes);
                    if (era.get('talent:301:病娇')) {
                      yandere_list.push(301);
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
          cid > 0
            ? era.get('flag:多人载具')
            : era.get('flag:多人载具') || era.get('flag:单人载具');
        era.printMultiColumns([
          {
            type: 'divider',
          },
          {
            content: [
              '【',
              ...(cid > 0
                ? ['和 ', get_chara_talk(cid).get_colored_name(), ' 一起']
                : ['独自']),
              vehicle
                ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}`
                : '',
              `前往 ${positions[aim - 1].n}】`,
            ],
            type: 'text',
          },
        ]);
        sys_handle_action(sys_get_move_cost(positions[aim - 1].l, cid), cid);
        era.set('flag:当前位置', positions[aim - 1].l);
        if (positions[aim - 1].l === location_enum.mejiro) {
          await MejiroCity.instance().page(cid);
        } else if (!(await sys_get_random_event(positions[aim - 1].s)())) {
          await run_custom_daily(cid, positions[aim - 1].s);
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
