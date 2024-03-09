const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_get_random_event = require('#/system/sys-get-random-event');

const check_team_limit = require('#/page/components/check-team-limit');
const goto_sex = require('#/page/components/goto-sex');
const print_page_header = require('#/page/components/page-header');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const { love_colors, relation_colors } = require('#/data/const.json');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_relation_info, get_love_info } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { vehicle_verbs, vehicle_names } = require('#/data/move-const');

async function page_chairman_office() {
  let flag_page = true,
    nothing = true;
  era.set('flag:当前位置', location_enum.chairman);
  await era.clear();
  print_page_header();
  era.drawLine();
  const chairman = get_chara_talk(302),
    vehicle = era.get('equip:0:单人载具'),
    title = new CharaTitles(302).get_colored_curr_title();
  era.print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了理事长办公室……',
  ]);
  while (flag_page) {
    const relation = get_relation_info(302),
      love = get_love_info(302),
      is_awake = sys_check_awake(302);
    era.setVerticalAlign('middle');
    era.printInColRows(
      [
        {
          type: 'divider',
        },
      ],
      {
        columns: [
          {
            config: { width: 21, align: 'center' },
            content: [
              ...(title ? [title, ' '] : []),
              chairman.get_colored_name(),
            ],
            type: 'text',
          },
          {
            config: { width: 21 },
            names: '矮子_半身',
            type: 'image.whole',
          },
        ],
        config: { width: 4 },
      },
      {
        columns: [
          { content: '\n', type: 'text' },
          {
            config: { width: 2 },
            content: '好感',
            type: 'text',
          },
          {
            config: { color: relation_colors[relation[0]], width: 22 },
            content: relation.join(' '),
            type: 'text',
          },
          { config: { width: 2 }, content: '爱慕', type: 'text' },
          {
            config: {
              color: love_colors[love[0]],
              width: 22,
            },
            content: love.join(' '),
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      [
        { type: 'divider' },
        {
          accelerator: 0,
          config: { disabled: era.get('base:0:精力') < 200 || !is_awake },
          content: '「闲 谈！无聊了来找你玩！」',
          type: 'button',
        },
        { accelerator: 1, content: '「做 爱！我想操你！」', type: 'button' },
        {
          accelerator: 2,
          config: { disabled: !is_awake },
          content: '「抗 议！训练场找不到我想训的学生！」',
          type: 'button',
        },
        {
          accelerator: 999,
          content: '「再 会！走了走了！」',
          type: 'button',
        },
      ],
    );
    era.setVerticalAlign('top');
    const ret = await era.input(),
      star_premium_draw = sys_get_star_premium_draw();
    let temp, temp_list;
    switch (ret) {
      case 0:
        sys_change_attr_and_print(0, '精力', -200);
        switch (relation[0]) {
          case '失望':
            await chairman.say_and_wait(
              '冷 漠！有来找我的空闲不如先把自己的工作做好！',
            );
            break;
          case '怀疑':
            await chairman.say_and_wait('不 悦！不太想见到你！');
            break;
          case '冷淡':
            await chairman.say_and_wait('奇 怪！训练员有什么事要来找我一谈？');
            break;
          case '融洽':
            await chairman.say_and_wait('寒 暄！今天还顺利吗？');
            break;
          case '热忱':
            await chairman.say_and_wait('赞 许！你也会跻身传奇之列！');
            break;
          case '喜爱':
            await chairman.say_and_wait('欢 迎！有麻烦就来找我吧！');
            break;
          case '亲密':
            await chairman.say_and_wait('喜 悦！有空就来聊聊！');
            break;
          case '不渝':
            await chairman.say_and_wait('如果是你……幻 听！你什么都没听到！');
        }
        era.println();
        sys_like_chara(302, 0, get_random_value(20, 30)) &&
          (await era.waitAnyKey());
        nothing = false;
        break;
      case 1:
        nothing = false;
        switch (await goto_sex(302, location_enum.chairman)) {
          case true:
            await chairman.say_and_wait('羞 涩！那晚上在你家见面！');
            break;
          case 2:
            flag_page = false;
        }
        break;
      case 2:
        nothing = false;
        if (check_team_limit()) {
          await chairman.say_and_wait('不 解！你的队伍已经有足够的成员了！');
        } else if (era.get('flag:当前月') > 3) {
          await chairman.say_and_wait('疑 惑！现在并不是招募担当的时候！');
        } else {
          chairman.say(
            '告 知！对于还没有入队但是很有天赋的孩子，学院方面会允许已经做出成绩的训练员直接去指名教导对方，但是需要有能够服众的声望！',
          );
          chairman.say('注 意！即使这样指名了，也还请好好和对方从头相处吧！');
          temp_list = era
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
          temp = await era.input();
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
                    buttonType: '',
                    color,
                    disabled: star_premium_draw.chara === chara_id,
                    width: 6,
                    align: 'center',
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
              await chairman.say_and_wait([
                '提 醒！',
                get_chara_talk(temp).get_colored_name(),
                ' 同学已经在训练场等着了！',
              ]);
            } else if (temp_list.indexOf(temp) === -1) {
              await chairman.say_and_wait('疑 惑！查无此人！');
            } else {
              chairman.say([
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
                await chairman.say_and_wait([
                  '激 热！',
                  get_chara_talk(temp).get_colored_name(),
                  ' 同学最近将经常去训练场，好好把握！',
                ]);
                sys_change_fame(-star_premium_draw.cost);
                if (star_premium_draw.chara > 0) {
                  await chairman.say_and_wait([
                    '不 快！还请 ',
                    get_chara_talk(0).get_colored_actual_name(),
                    ' 训练员下次想好了再决定！',
                  ]);
                  era.println();
                  sys_like_chara(302, 0, -50) && (await era.waitAnyKey());
                }
                star_premium_draw.chara = temp;
              } else {
                await chairman.say_and_wait('愤 怒！想好了再来啊！');
              }
            }
          }
        }
        break;
      case 999:
        if (is_awake) {
          await chairman.say_and_wait(
            nothing ? '不 悦！不要消遣我！' : '再 会！要努力工作啊！',
          );
          if (nothing) {
            era.println();
            sys_like_chara(302, 0, -25) && (await era.waitAnyKey());
          }
        }
        flag_page = false;
    }
    if (!era.get('base:302:体力')) {
      era.set('status:302:沉睡', 1);
    }
    flag_page &&= sys_check_awake(0);
    if (flag_page) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait('回去了……');
  era.println();
  await sys_get_random_event(event_hooks.back_school)();

  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_chairman_office;
