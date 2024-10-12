const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const GameGuides = require('#/event/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const LocCharacters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

async function page_clinic() {
  let flag_page = true;
  era.set('flag:当前位置', location_enum.clinic);
  await era.clear();
  print_page_header();
  era.drawLine();
  const vehicle = era.get('flag:单人载具');
  era.print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了保健室……',
  ]);
  await new GameGuides().school_clinic();
  const loc_chara = new LocCharacters(),
    celebration = get_celebration(),
    chara = get_chara_talk(loc_chara.get(location_enum.clinic)[0]),
    title = new CharaTitles(chara.id).get_colored_curr_title();
  while (flag_page) {
    const temp = await npc_common(
      chara,
      title,
      { name: '闲聊' },
      {
        name: '邀请上床',
        fail_cb() {
          flag_page = false;
        },
      },
      { loc: location_enum.clinic, name: '约会', print_out_page },
      { name: `庆祝 ${celebration}` },
      era.get('cflag:305:招募状态') !== recruit_flags.yes &&
        era.get('love:305') >= 40
        ? {
            name: '「一起努力吧！」（招募）',
            handle() {
              era.set('callname:305:-2', '安心泽刺刺美');
              era.set('cflag:305:招募状态', recruit_flags.yes);
              return era.printAndWait([
                get_chara_talk(305).get_colored_name(),
                ' 加入了队伍！',
              ]);
            },
          }
        : {},
      { name: '再见' },
    );
    if ((flag_page &&= temp)) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait('回去了……');
  if (!sys_check_awake(chara.id)) {
    loc_chara.set(location_enum.clinic, []);
  }
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.clinic,
  });
  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_clinic;
