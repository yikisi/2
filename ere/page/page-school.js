const era = require('#/era-electron');

const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');

const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

const { i18n } = require('#/i18n/selector');

module.exports = async (location) => {
  await era.clear();
  era.set('flag:当前位置', location);
  const cid = era.get('flag:当前互动角色');
  print_page_header();
  print_curr_chara(cid, chara_info_type.school);
  era.drawLine();
  const hook =
    location === location_enum.atrium
      ? event_hooks.school_atrium
      : event_hooks.school_rooftop;
  if (!(await sys_get_random_event(hook, cid)())) {
    era.drawLine();
    const vehicle = !cid && era.get('flag:单人载具');
    era.print([
      '【',
      ...(cid
        ? ['和 ', get_chara_talk(cid).get_colored_name(), ' 一起']
        : ['独自']),
      vehicle ? `${vehicle_verbs[vehicle]}着 ${vehicle_names[vehicle]} ` : '',
      '前往 ',
      i18n().location[location_enum.keys[location]],
      '】',
    ]);
    await run_custom_daily(cid, hook);
    era.drawLine();
    await era.printAndWait('【折返了】');
    await sys_get_random_event(event_hooks.back_school, cid)({ loc: location });
  }
  era.set('flag:当前位置', location_enum.office);
};
