const {
  clear,
  drawLine,
  get,
  input,
  print,
  printAndWait,
  printInColRows,
  println,
  set,
  setHorizontalAlign,
} = require('#/era-electron');

const { get_custom_rec } = require('#/event/rec/rec-factory');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const LocCharacters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const YandereList = require('#/data/event/yandere-list');
const { get_celebration } = require('#/data/info-generator');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');
const era = require('#/era-electron');

/** @type {Record<string,function(CharaTalk,CharaTalk):{[handle]:function:Promise,[name]:string}>} */
const handlers = {};

handlers[207] = () =>
  get('cflag:207:招募状态') === recruit_flags.yes || get('love:207') < 25
    ? {}
    : {
        name: '「一起努力吧！」（招募）',
        handle() {
          set('callname:207:-2', '索侬艾尔菲');
          set('cflag:207:招募状态', recruit_flags.yes);
          if (get('talent:207:病娇')) {
            new YandereList().push(207, true);
          }
          return printAndWait([
            get_chara_talk(207).get_colored_name(),
            ' 加入了队伍！',
          ]);
        },
      };

handlers[303] = () =>
  get('cflag:303:招募状态') === recruit_flags.yes
    ? {}
    : {
        name: '给予更多许可（招募）',
        handle() {
          return get_custom_rec(303, event_hooks.recruit);
        },
      };

handlers[308] = () =>
  get('cflag:308:招募状态') === recruit_flags.yes || get('love:308') < 25
    ? {}
    : {
        name: '「一起努力吧！」（招募）',
        handle() {
          set('callname:308:-2', '光辉致意');
          set('cflag:308:招募状态', recruit_flags.yes);
          if (get('talent:308:病娇')) {
            new YandereList().push(308, true);
          }
          return printAndWait([
            get_chara_talk(308).get_colored_name(),
            ' 加入了队伍！',
          ]);
        },
      };

handlers[343] = () =>
  get('cflag:343:招募状态') === recruit_flags.yes ||
  new MayLifeMarks().who_am_i !== 3
    ? {}
    : {
        name: '「一起努力吧！」（招募）',
        handle() {
          set('callname:343:-2', '佐岳五月');
          set('cflag:343:招募状态', recruit_flags.yes);
          if (get('talent:343:病娇')) {
            new YandereList().push(343, true);
          }
          return printAndWait([
            get_chara_talk(343).get_colored_name(),
            ' 加入了队伍！',
          ]);
        },
      };

handlers[344] = () =>
  get('cflag:344:招募状态') === recruit_flags.yes || get('love:344') < 25
    ? {}
    : {
        name: '「一起努力吧！」（招募）',
        handle() {
          era.set('callname:344:-2', '都留歧凉花');
          era.set('cflag:344:招募状态', recruit_flags.yes);
          return era.printAndWait([
            get_chara_talk(344).get_colored_name(),
            ' 加入了队伍！',
          ]);
        },
      };

async function page_visitors() {
  let flag_page = true,
    flag_visitor = true;
  set('flag:当前位置', location_enum.visitor);
  await clear();
  print_page_header();
  drawLine();
  const vehicle = get('flag:单人载具');
  print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了 ',
    location_name[location_enum.visitor],
    '……',
  ]);
  const loc_visitors = new LocCharacters();
  let visitor_list = loc_visitors.get(location_enum.visitor);
  if (visitor_list.length > 0) {
    const celebration = get_celebration(),
      me = get_chara_talk(0);
    while (flag_page) {
      setHorizontalAlign('space-around');
      printInColRows(
        [{ content: '要和谁交谈？', type: 'text' }],
        ...visitor_list.map((e) => ({
          columns: [
            {
              names: get_image(e)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
            {
              accelerator: e,
              config: { align: 'center' },
              content: get(`callname:${e}:-2`),
              type: 'button',
            },
          ],
          config: { width: 4 },
        })),
        [{ accelerator: 999, type: 'button', content: '离开' }],
      );
      setHorizontalAlign('start');
      const chara_id = await input();
      if (chara_id !== 999) {
        const chara = get_chara_talk(chara_id),
          title = new CharaTitles(chara.id).get_curr_title();
        flag_visitor = true;
        while (flag_visitor) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: '聊天',
            },
            {
              loc: visitor_list.length > 1 && location_enum.restroom,
              name: '求爱',
              fail_cb() {
                flag_visitor = flag_page = false;
              },
            },
            {
              loc: location_enum.visitor,
              name: '约会',
              print_out_page,
            },
            {
              name: `庆祝 ${celebration}`,
            },
            handlers[chara_id](chara, me),
            { name: '再见' },
          );
          if ((flag_visitor &&= temp_flag)) {
            await clear();
            print_page_header();
          }
        }
        visitor_list = visitor_list.filter(sys_check_awake);
        flag_page = visitor_list.length > 0;
      } else {
        flag_page = false;
      }
      if (flag_page) {
        await clear();
        print_page_header();
        drawLine();
      }
    }
    drawLine();
    await printAndWait('回去了……');
  } else {
    drawLine();
    await printAndWait('没有人在的样子……回去了……');
  }
  loc_visitors.set(location_enum.visitor, visitor_list);
  println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.visitor,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_visitors;
