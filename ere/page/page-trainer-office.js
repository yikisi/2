const {
  clear,
  drawLine,
  get,
  print,
  printAndWait,
  println,
  set,
} = require('#/era-electron');

const sys_get_random_event = require('#/system/sys-get-random-event');

const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

async function page_trainer_office() {
  let flag_page = true;
  set('flag:当前位置', location_enum.trainer);
  await clear();
  print_page_header();
  drawLine();
  const vehicle = get('equip:0:单人载具');
  print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了 ',
    location_name[location_enum.trainer],
    '……',
  ]);
  const chara_id = 304,
    chara = get_chara_talk(chara_id),
    title = new CharaTitles(chara_id).get_curr_title();
  while (flag_page) {
    flag_page &&= await npc_common(
      chara,
      title,
      {
        name: '聊天',
        async handle() {},
      },
      {
        name: '求爱',
        async handle() {},
      },
      {
        name: '约会',
        async handle() {},
      },
      {
        name: '节日',
        async handle() {},
      },
      {
        name: '功能',
        async handle() {},
      },
      {
        name: '再见',
        async handle() {},
      },
    );
  }
  drawLine();
  await printAndWait('回去了……');
  println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.trainer,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_trainer_office;
