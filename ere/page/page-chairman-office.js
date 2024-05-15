const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_get_random_event = require('#/system/sys-get-random-event');

const check_team_limit = require('#/page/components/check-team-limit');
const goto_sex = require('#/page/components/goto-sex');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration, get_relation_mark } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

async function page_chairman_office() {
  let flag_page = true,
    nothing = true;
  era.set('flag:当前位置', location_enum.chairman);
  await era.clear();
  print_page_header();
  era.drawLine();
  const chara_id = 302;
  const chara = get_chara_talk(chara_id),
    vehicle = era.get('equip:0:单人载具');
  era.print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了理事长办公室……',
  ]);
  while (flag_page) {
    flag_page = await npc_common(
      chara,
      new CharaTitles(chara_id).get_colored_curr_title(),
      {
        name: '「闲 谈！无聊了来找你玩！」',
        async handle() {
          nothing = false;
          switch (get_relation_mark(undefined, 302)) {
            case '失望':
              await chara.say_and_wait(
                '冷 漠！有来找我的空闲不如先把自己的工作做好！',
              );
              break;
            case '怀疑':
              await chara.say_and_wait('不 悦！不太想见到你！');
              break;
            case '冷淡':
              await chara.say_and_wait('奇 怪！训练员有什么事要来找我一谈？');
              break;
            case '融洽':
              await chara.say_and_wait('寒 暄！今天还顺利吗？');
              break;
            case '热忱':
              await chara.say_and_wait('赞 许！你也会跻身传奇之列！');
              break;
            case '喜爱':
              await chara.say_and_wait('欢 迎！有麻烦就来找我吧！');
              break;
            case '亲密':
              await chara.say_and_wait('喜 悦！有空就来聊聊！');
              break;
            case '不渝':
              await chara.say_and_wait('如果是你……幻 听！你什么都没听到！');
          }
        },
      },
      {
        name: '「做 爱！我想操你！」',
        async handle() {
          nothing = false;
          switch (await goto_sex(chara_id, location_enum.chairman)) {
            case true:
              await chara.say_and_wait('羞 涩！那晚上在你家见面！');
              break;
            case 2:
              flag_page = false;
          }
        },
      },
      {
        async handle() {
          nothing = false;
          era.set('flag:当前位置', location_enum.gate);
          await print_out_page();
          era.set('flag:当前位置', location_enum.chairman);
        },
        name: '「约 会！一起出去走走吧！」',
      },
      {
        name: `「庆 贺！${get_celebration()} 快乐！」`,
        async handle() {
          nothing = false;
        },
      },
      {
        name: '「抗 议！训练场找不到我想训的学生！」',
        async handle() {
          nothing = false;
          if (check_team_limit()) {
            await chara.say_and_wait('不 解！你的队伍已经有足够的成员了！');
          } else if (era.get('flag:当前月') > 3) {
            await chara.say_and_wait('疑 惑！现在并不是招募担当的时候！');
          } else {
            chara.say(
              '告 知！对于还没有入队但是很有天赋的孩子，学院方面会允许已经做出成绩的训练员直接去指名教导对方，但是需要有能够服众的声望！',
            );
            chara.say('注 意！即使这样指名了，也还请好好和对方从头相处吧！');
            const temp_list = era
              .get('chara')
              .filter(
                (chara_id) =>
                  chara_id &&
                  (era.get(`cflag:${chara_id}:随机招募`) ||
                    era.get(`staticcflag:${chara_id}:随机招募`)) &&
                  era.get(`cflag:${chara_id}:招募状态`) !== recruit_flags.yes,
              );
            era.printMultiColumns(
              ['用名字指名', '用ID指名', '从列表里选', '再想想'].map((e, i) => {
                return {
                  accelerator: i,
                  content: e,
                  config: { width: 6, align: 'center' },
                  type: 'button',
                };
              }),
            );
            const star_premium_draw = sys_get_star_premium_draw();
            let temp = await era.input();
            switch (temp) {
              case 0:
                era.print('请输入想指名的角色名');
                temp = await era.input();
                temp = temp_list.filter(
                  (e) => era.get(`static:${e}:name`) === temp,
                )[0];
                break;
              case 1:
                era.print('请输入想指名的角色ID');
                temp = await era.input();
                break;
              case 2:
                temp = [];
                temp_list.forEach((chara_id) => {
                  const color = get_chara_color(chara_id);
                  let flag_script;
                  try {
                    require(`#/event/rec/rec-${chara_id}`);
                    flag_script = true;
                  } catch (_) {
                    flag_script = false;
                  }
                  temp.push({
                    accelerator: chara_id,
                    config: {
                      align: 'center',
                      buttonType: '',
                      color,
                      width: 6,
                    },
                    content: `${era.get(`static:${chara_id}:name`)}${
                      flag_script ? '*' : ''
                    }${star_premium_draw.chara === chara_id ? ' [已指名]' : ''}`,
                    type: 'button',
                  });
                });
                temp.push({
                  content: [
                    { isBr: true },
                    '* 带有',
                    { content: '*', fontWeight: 'bold' },
                    '号后缀的角色有专属口上',
                  ],
                  type: 'text',
                });
                era.printMultiColumns(temp);
                temp = await era.input();
                break;
              case 3:
                temp = -255;
            }
            if (temp !== -255) {
              if (temp === star_premium_draw.chara) {
                await chara.say_and_wait([
                  '提 醒！',
                  get_chara_talk(temp).get_colored_name(),
                  ' 同学已经在训练场等着了！',
                ]);
              } else if (temp_list.indexOf(temp) === -1) {
                await chara.say_and_wait('疑 惑！查无此人！');
              } else {
                chara.say([
                  '抉 择！要让学院帮你接触 ',
                  {
                    content: era.get(`static:${temp}:name`),
                    color: get_chara_color(temp),
                    fontWeight: 'bold',
                  },
                  ' 同学吗？',
                ]);
                era.printButton('「超 得！！」', 1);
                era.printButton('「慢 着！！」', 2);
                if ((await era.input()) === 1) {
                  await chara.say_and_wait([
                    '激 热！',
                    get_chara_talk(temp).get_colored_name(),
                    ' 同学最近将经常去训练场，好好把握！',
                  ]);
                  sys_change_fame(-star_premium_draw.cost);
                  if (star_premium_draw.chara > 0) {
                    await chara.say_and_wait([
                      '不 快！还请 ',
                      get_chara_talk(0).get_colored_actual_name(),
                      ' 训练员下次想好了再决定！',
                    ]);
                    era.println();
                    sys_like_chara(302, 0, -50) && (await era.waitAnyKey());
                  }
                  star_premium_draw.chara = temp;
                } else {
                  await chara.say_and_wait('愤 怒！想好了再来啊！');
                }
              }
            }
          }
        },
      },
      {
        name: '「再 会！走了走了！」',
        async handle() {
          if (sys_check_awake(chara_id)) {
            await chara.say_and_wait(
              nothing ? '不 悦！不要消遣我！' : '再 会！要努力工作啊！',
            );
            if (nothing) {
              era.println();
              sys_like_chara(302, 0, -25) && (await era.waitAnyKey());
            }
          }
        },
      },
    );
    if (flag_page) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait('回去了……');
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.chairman,
  });

  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_chairman_office;
