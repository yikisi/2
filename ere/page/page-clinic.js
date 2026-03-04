const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_back_button_tip = require('#/page/components/get-back-button-tip');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

async function page_clinic() {
  let flag_page = true;
  await arrive_location(era.set('flag:当前位置', location_enum.clinic));
  const celebration = get_celebration();
  const chara = get_chara_talk(loc_characters.get(location_enum.clinic)[0]);
  const title = CharaTitles.get(chara.id).get_colored_curr_title();
  while (flag_page) {
    const temp = await npc_common(
      chara,
      title,
      { name: di18n.kojo.get_npc_talk(chara.id) },
      {
        name: di18n.kojo.get_npc_sex(chara.id),
        fail_cb: () => (flag_page = false),
      },
      {
        loc: location_enum.clinic,
        name: di18n.kojo.get_npc_out(chara.id),
        print_out_page,
      },
      { name: di18n.kojo.get_npc_celebration(chara.id, celebration) },
      era.get('cflag:305:招募状态') !== recruit_flags.yes &&
        era.get('love:305') >= 25
        ? {
            name: i18n().timon.npc_recruit_in_school,
            handle() {
              era.set('callname:305:-2', '900501');
              era.set('cflag:305:招募状态', recruit_flags.yes);
              return i18n().timon.recruit.rec_end(get_chara_talk(305));
            },
          }
        : {},
      { config: get_back_button_tip(), name: di18n.kojo.get_npc_bye(chara.id) },
    );
    if ((flag_page &&= temp)) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait(i18n().timon.it_back_office);
  if (!sys_check_awake(chara.id)) {
    loc_characters.set(location_enum.clinic, []);
  }
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.clinic,
  });
  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_clinic;
