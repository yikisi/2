const era = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_get_move_cost } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_chara_info = require('#/page/components/cur-chara-info');
const get_back_button_tip = require('#/page/components/get-back-button-tip');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const { get_c_base } = require('#/page/homepage/snippets');
const MejiroCity = require('#/page/mejiro/mejiro-common');
const page_moon_well = require('#/page/page-moon-well');

const { run_custom_daily } = require('#/event/daily/daily-factory');
const game_guides = require('#/event/others/game-guides');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { vehicle_enum } = require('#/data/move-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

require('#/page/mejiro/free-mejiro');
require('#/page/mejiro/call-of-mejiro');

/**
 * @param {LocationButton[]} positions
 * @returns {ButtonObject[]}
 */
function get_position_buttons(positions) {
  return positions.map((b, i) => ({
    accelerator: b.a ?? i + 1,
    config: {
      buttonType: b.c,
      disabled: b.d,
      disableWarning: true,
      title: b.t,
      width: 4,
    },
    content: b.n ?? i18n().location[location_enum.keys[b.l]],
    type: 'button',
  }));
}

async function out_page() {
  let cid = era.get('flag:当前互动角色');
  let vehicle;
  const player_base = get_c_base(0);
  const chara_base = get_c_base(cid || void 0);

  await era.clear();
  print_page_header();
  const minoru_check = cid !== 301 && sys_check_npc_working(301);
  const minoru = get_chara_talk(301);
  print_chara_info(cid, chara_info_type.out, minoru_check && 301);
  era.drawLine();
  if (!(await sys_get_random_event(event_hooks.out_start, cid)())) {
    const positions = MejiroCity.instance().get_positions(
      cid,
      player_base,
      chara_base,
    );
    vehicle = !cid && era.get('flag:单人载具');
    era.drawLine();
    if (vehicle > 0) {
      era.print(
        di18n.timon.get_it_arrive_location(
          vehicle_enum.keys[vehicle - 1],
          'gate',
        ),
      );
    }
    await game_guides.out();
    era.printMultiColumns([
      {
        content:
          cid > 0
            ? i18n().get_ui_out_confirm(get_chara_talk(cid).get_colored_name())
            : i18n().ui_out_self_confirm,
        type: 'text',
      },
      ...get_position_buttons(positions),
      ...(!cid && minoru_check
        ? [
            {
              accelerator: 10,
              content: i18n().get_ui_bt_talk_with_npc_template.replace(
                '%NAME%',
                minoru.name,
              ),
              type: 'button',
            },
          ]
        : []),
      {
        accelerator: 999,
        config: get_back_button_tip(),
        content: i18n().ui_back,
        type: 'button',
      },
    ]);

    const aim = await era.input();
    let temp;
    switch (aim) {
      case 10:
        temp = {
          flag: true,
          title: CharaTitles.get(301).get_colored_curr_title(),
        };
        while (temp.flag) {
          const temp_flag = await npc_common(
            minoru,
            temp.title,
            {
              handle: () =>
                i18n().kojo[301].daily.npc_talk(generate_dictionary(301)),
              name: di18n.kojo.get_npc_talk(minoru.id),
            },
            {
              fail_cb: () => (temp.flag = false),
              loc: location_enum.restroom,
              name: di18n.kojo.get_npc_sex(minoru.id),
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
                    content: i18n().get_ui_out_confirm(
                      minoru.get_colored_name(),
                    ),
                    type: 'text',
                  },
                  ...get_position_buttons(positions),
                  { accelerator: 999, content: i18n().ui_back, type: 'button' },
                ]);
                const aim = await era.input();
                if (aim !== 999) {
                  vehicle = era.get('flag:多人载具');
                  era.printMultiColumns([
                    { type: 'divider' },
                    {
                      content: di18n.timon.get_it_goto_location(
                        minoru,
                        vehicle_enum.keys[vehicle - 1],
                        location_enum.keys[positions[aim - 1].l],
                      ),
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
                    !(await sys_get_random_event(positions[aim - 1].e, 301)())
                  ) {
                    await run_custom_daily(301, positions[aim - 1].e);
                  }
                  era.set('flag:当前位置', location_enum.gate);
                }
                temp.flag = false;
              },
              name: di18n.kojo.get_npc_out(minoru.id),
            },
            {
              name: di18n.kojo.get_npc_celebration(
                minoru.id,
                get_celebration(),
              ),
            },
            era.get('cflag:301:招募状态') === recruit_flags.yes ||
              new TokinoLifeMarks().who_am_i !== 2
              ? {}
              : {
                  name: i18n().timon.npc_recruit_in_school,
                  handle() {
                    era.set('callname:301:-2', '900101');
                    era.set('cflag:301:招募状态', recruit_flags.yes);
                    if (era.get('talent:301:病娇')) {
                      yandere_list.push(301);
                    }
                    return i18n().timon.recruit.rec_end(minoru);
                  },
                },
            {
              handle: () =>
                era.printAndWait(
                  i18n().get_ui_out_bye(
                    minoru.get_colored_name(),
                    get_chara_talk(0).get_colored_name(),
                  ),
                ),
              name: di18n.kojo.get_npc_bye(minoru.id),
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
          { type: 'divider' },
          {
            content: di18n.timon.get_it_goto_location(
              get_chara_talk(cid),
              vehicle_enum.keys[vehicle - 1],
              location_enum.keys[positions[aim - 1].l],
            ),
            type: 'text',
          },
        ]);
        sys_handle_action(sys_get_move_cost(positions[aim - 1].l, cid), cid);
        era.set('flag:当前位置', positions[aim - 1].l);
        if (positions[aim - 1].l === location_enum.mejiro) {
          await MejiroCity.instance().page(cid);
        } else if (positions[aim - 1].l === location_enum.moon_well) {
          await page_moon_well(cid, out_page);
        } else if (!(await sys_get_random_event(positions[aim - 1].e, cid)())) {
          await run_custom_daily(cid, positions[aim - 1].e);
        }
        era.set('flag:当前位置', location_enum.gate);
    }
    era.drawLine();
    await era.printAndWait(i18n().timon.it_back_office);
    await sys_get_random_event(
      event_hooks.back_school,
      cid,
    )({
      loc: positions[aim - 1]?.l,
    });
  }
}

module.exports = out_page;
