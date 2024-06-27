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

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const sys_call_recruit = require('#/system/script/sys-call-recruit');
const { get_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

/** @type {Record<string,function(CharaTalk,CharaTalk):{[handle]:function:Promise,[name]:string}>} */
const handlers = {};

handlers[303] = () =>
  get('cflag:303:招募状态') === recruit_flags.yes
    ? {}
    : {
        name: '给予更多许可（招募）',
        handle() {
          return sys_call_recruit(303, event_hooks.recruit);
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
          return printAndWait([
            get_chara_talk(343).get_colored_name(),
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
  let visitor_list = [];
  if (
    !(get('cflag:303:育成回合计时') < 3 * 48) &&
    get('love:303') >= 25 &&
    sys_check_npc_working(303)
  ) {
    visitor_list.push(303);
  }
  if (
    !(get('cflag:308:育成回合计时') < 3 * 48) &&
    get('flag:当前回合数') > 40 &&
    (get('love:308') >= 25 || get('flag:当前回合数') % 48 === 40) &&
    sys_check_npc_working(308)
  ) {
    visitor_list.push(308);
  }
  if (
    !(get('cflag:343:育成回合计时') < 3 * 48) &&
    !get('cflag:343:位置') &&
    get('flag:当前回合数') > 12 &&
    get('love:343') >= 40 &&
    sys_check_npc_working(343)
  ) {
    visitor_list.push(343);
  }
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
              loc: location_enum.restroom,
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
  println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.visitor,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_visitors;
