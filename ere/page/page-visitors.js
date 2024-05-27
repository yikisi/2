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

const sys_call_recruit = require('#/system/script/sys-call-recruit');
const { get_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const goto_sex = require('#/page/components/goto-sex');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

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

async function page_visitors() {
  let flag_page = true,
    flag_visitor = true;
  set('flag:当前位置', location_enum.visitor);
  await clear();
  print_page_header();
  drawLine();
  const vehicle = get('equip:0:单人载具');
  print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了 ',
    location_name[location_enum.visitor],
    '……',
  ]);
  let visitor_list = [];
  if (!(get('cflag:303:育成回合计时') < 3 * 48) && get('love:303') >= 25) {
    visitor_list.push(303);
  }
  if (
    !(get('cflag:308:育成回合计时') < 3 * 48) &&
    get('flag:当前回合数') > 40
  ) {
    visitor_list.push(308);
  }
  if (!(get('cflag:343:育成回合计时') < 3 * 48) && !get('cflag:343:位置')) {
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
          flag_visitor &&= await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: '聊天',
            },
            {
              async handle() {
                switch (await goto_sex(chara.id, location_enum.chairman)) {
                  case true:
                    await printAndWait([
                      chara.get_colored_name(),
                      ' 与 ',
                      me.get_colored_name(),
                      ' 约定晚上在家见面……',
                    ]);
                    break;
                  case 2:
                    flag_visitor = flag_page = false;
                }
              },
              name: '求爱',
            },
            {
              name: '约会',
              print_out_page,
            },
            {
              name: `庆祝 ${celebration}`,
            },
            handlers[chara_id](chara, me),
            { name: '再见' },
          );
        }
        if (flag_visitor) {
          await clear();
          print_page_header();
        }
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
