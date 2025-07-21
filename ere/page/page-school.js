const era = require('#/era-electron');

const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');

const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

module.exports = async (location) => {
  await era.clear();
  era.set('flag:当前位置', location);
  const chara_id = era.get('flag:当前互动角色');
  print_page_header();
  print_curr_chara(chara_id, chara_info_type.school);
  era.drawLine();
  const hook =
    location === location_enum.atrium
      ? event_hooks.school_atrium
      : event_hooks.school_rooftop;
  if (!(await sys_get_random_event(hook)())) {
    era.drawLine();
    const vehicle = !chara_id && era.get('flag:单人载具');
    era.print([
      '【',
      ...(chara_id
        ? ['和 ', get_chara_talk(chara_id).get_colored_name(), ' 一起']
        : ['独自']),
      vehicle ? `${vehicle_verbs[vehicle]}着 ${vehicle_names[vehicle]} ` : '',
      `前往 ${location_name[location]}】`,
    ]);
    await run_custom_daily(chara_id, hook);
    era.drawLine();
    await era.printAndWait('【折返了】');
    await sys_get_random_event(event_hooks.back_school)({ loc: location });
  }
  era.set('flag:当前位置', location_enum.office);
};
