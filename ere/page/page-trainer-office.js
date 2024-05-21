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

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');
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

/** @type {Record<string,function(CharaTalk,CharaTalk):{handle:function:Promise,name:string}>} */
const handlers = {};

handlers[304] = (chara, me) => {
  return {
    name: chara.actual_name,
    async handle() {},
  };
};

handlers[306] = (chara, me) => {
  return {
    name: chara.actual_name,
    async handle() {},
  };
};

async function page_trainer_office() {
  let flag_page = true,
    flag_trainer = true;
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
  let trainer_list = [];
  if (!(get('cflag:304:育成回合计时') < 3 * 48)) {
    trainer_list.push(304);
  }
  if (!(get('cflag:306:育成回合计时') < 3 * 48) && get('flag:理事长') !== 306) {
    trainer_list.push(306);
  }
  if (trainer_list.length > 0) {
    const celebration = get_celebration(),
      me = get_chara_talk(0);
    if (!get('flag:初见办公室')) {
      set('flag:初见办公室', 1);
      await printAndWait([
        me.get_colored_name(),
        ' 来到训练员公用的办公室，里面已经有两位训练员在了。',
      ]);
      const trainer0 = get_chara_talk(304),
        trainer1 = get_chara_talk(306);
      await trainer1.say_as_unknown_and_wait([
        '您好，您就是新来的 ',
        me.actual_name,
        ' 训练员吧。',
      ]);
      await trainer1.say_and_wait([
        '我是 ',
        trainer1.get_colored_actual_name(),
        '，今后为了中央特雷森的荣光一起努力吧。',
      ]);
      await trainer0.say_and_wait([
        '啊，贵安，我是 ',
        trainer0.get_colored_actual_name(),
        '，今后请您多多指教。',
      ]);
      if (
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length === 1
      ) {
        await trainer1.say_and_wait([
          '您现在还没有担当，如果有什么困难的话请尽管来找我或者这位 ',
          sys_get_colored_callname(306, 304),
          ' 商量吧',
        ]);
      }
      await clear();
      print_page_header();
      drawLine();
    }
    while (flag_page) {
      setHorizontalAlign('space-around');
      printInColRows(
        [{ content: '要和谁交谈？', type: 'text' }],
        ...trainer_list.map((e) => ({
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
          title = new CharaTitles(chara_id).get_curr_title();
        flag_trainer = true;
        while (flag_trainer) {
          flag_trainer &&= await npc_common(
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
                    flag_trainer = flag_page = false;
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
            {
              name: '再见',
            },
          );
          if (flag_trainer) {
            await clear();
            print_page_header();
            drawLine();
          }
        }
        trainer_list = trainer_list.filter(sys_check_awake);
        flag_page = trainer_list.length > 0;
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
    loc: location_enum.trainer,
  });
  set('flag:当前位置', location_enum.office);
}

module.exports = page_trainer_office;
