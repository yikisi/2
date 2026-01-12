const era = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_riko_button = require('#/page/components/get-riko-button');
const goto_sex = require('#/page/components/goto-sex');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration, get_relation_mark } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

async function page_chairman_office() {
  let flag_page = true;
  let nothing = true;
  await arrive_location(era.set('flag:当前位置', location_enum.chairman));
  const celebration = get_celebration();
  const chara = get_chara_talk(loc_characters.get(location_enum.chairman)[0]);
  const title = CharaTitles.get(chara.id).get_colored_curr_title();
  const star_premium_draw = sys_get_star_premium_draw();
  let cost = star_premium_draw.cost;
  if (era.get('cflag:302:招募状态') === recruit_flags.yes) {
    cost = (cost * 3) / 4;
  }
  let temp_flag;
  while (flag_page) {
    switch (chara.id) {
      case 302:
        temp_flag = await npc_common(
          chara,
          title,
          {
            name: '「闲 谈！无聊了来找你玩！」',
            async handle() {
              nothing = false;
              switch (get_relation_mark(302)) {
                case '失望':
                  await chara.say_and_wait(
                    '冷 漠！有来找我的空闲不如先把自己的工作做好！',
                  );
                  break;
                case '怀疑':
                  await chara.say_and_wait('不 悦！不太想见到你！');
                  break;
                case '冷淡':
                  await chara.say_and_wait(
                    '奇 怪！训练员有什么事要来找我一谈？',
                  );
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
            async handle() {
              nothing = false;
              switch (await goto_sex(chara.id, location_enum.chairman)) {
                case true:
                  await chara.say_and_wait('羞 涩！那晚上在你家见面！');
                  break;
                case 2:
                  flag_page = false;
              }
            },
            name: '「做 爱！我想操你！」',
          },
          {
            async handle() {
              nothing = false;
              sys_handle_action(
                sys_get_move_cost(location_enum.gate, chara.id),
                chara.id,
              );
              era.set('flag:当前位置', location_enum.gate);
              await print_out_page();
              era.set('flag:当前位置', location_enum.chairman);
            },
            name: '「约 会！一起出去走走吧！」',
          },
          {
            handle: async () => (nothing = false),
            name: `「庆 贺！${celebration} 快乐！」`,
          },
          {
            async handle() {
              nothing = false;
              if (sys_check_team_limit() >= 0) {
                await chara.say_and_wait('不 解！你的队伍已经有足够的成员了！');
              } else if (era.get('flag:当前月') > 3) {
                await chara.say_and_wait('疑 惑！现在并不是招募担当的时候！');
              } else {
                chara.say(
                  '告 知！对于还没有入队但是很有天赋的孩子，学园方面会允许已经做出成绩的训练员直接去指名教导对方，但是需要有能够服众的声望！',
                );
                chara.say(
                  '注 意！即使这样指名了，也还请好好和对方从头相处吧！',
                );
                const temp_list = era
                  .getAllCharacters()
                  .filter(
                    (cid) =>
                      cid > 0 &&
                      (era.get(`cflag:${cid}:随机招募`) ||
                        era.get(`staticcflag:${cid}:随机招募`)) === 1 &&
                      era.get(`cflag:${cid}:招募状态`) !== recruit_flags.yes &&
                      era.get('cflag:0:模版角色') !== cid,
                  );
                if (
                  era.get('cflag:302:招募状态') !== recruit_flags.yes &&
                  new TasteLifeMarks().who_am_i === 2
                ) {
                  temp_list.push(302);
                }
                era.printMultiColumns(
                  ['从列表里选', '用名字指名', '用 ID 指名', '再想想'].map(
                    (e, i) => {
                      return {
                        accelerator: i + 1,
                        content: e,
                        config: { width: 6, align: 'center' },
                        type: 'button',
                      };
                    },
                  ),
                );
                let temp = await era.input();
                switch (temp) {
                  case 1:
                    temp = [];
                    temp_list
                      .map((cid) => {
                        const color = get_chara_color(cid);
                        const flag_script =
                          check_rec_script(cid) && check_edu_script(cid);
                        let name = era.get(`callname:${cid}:-1`);
                        if (name === '-') {
                          name = era.get(`static:${cid}:name`);
                        }
                        return {
                          accelerator: cid,
                          config: {
                            align: 'center',
                            buttonType: '',
                            color,
                            width: 4,
                          },
                          content:
                            name +
                            (star_premium_draw.chara === cid
                              ? ' [已指名]'
                              : ''),
                          priority: flag_script,
                          type: 'button',
                        };
                      })
                      .reduce(
                        (p, c) => {
                          p[1 - c.priority].push(c);
                          return p;
                        },
                        [[], []],
                      )
                      .forEach((l) => {
                        if (l.length > 0) {
                          temp.push({
                            config: {
                              content: l[0].priority
                                ? '使用口上的角色'
                                : '使用地文的角色',
                            },
                            type: 'divider',
                          });
                          temp.push(...l);
                        }
                      });
                    era.printMultiColumns(temp);
                    temp = await era.input();
                    break;
                  case 2:
                    era.print('请输入想指名的角色名');
                    temp = await era.input();
                    temp = temp_list.filter(
                      (e) =>
                        era.get(`callname:${e}:-1`) === temp ||
                        era.get(`static:${e}:name`) === temp,
                    )[0];
                    break;
                  case 3:
                    era.print('请输入想指名的角色ID');
                    temp = await era.input();
                    break;
                  case 4:
                    temp = -255;
                }
                if (temp === 302) {
                  await chara.say_and_wait('惊 愕！');
                  await chara.say_and_wait('无 措！怎怎怎怎么办！');
                  await get_chara_talk(0).say_and_wait(
                    '将 军！无路可退了，来和我一起吧！',
                  );
                  era.set('callname:302:-2', '秋川弥生');
                  await chara.say_and_wait('啊吧啊吧啊吧啊吧……');
                  era.set('cflag:302:招募状态', recruit_flags.yes);
                  if (era.get('talent:302:病娇')) {
                    yandere_list.push(302);
                  }
                  await era.printAndWait([
                    '恭 喜！',
                    chara.get_colored_actual_name(),
                    ' 加入了队伍！',
                  ]);
                } else if (temp !== -255) {
                  if (temp === star_premium_draw.chara) {
                    await chara.say_and_wait([
                      '提 醒！',
                      get_chara_talk(temp).get_colored_actual_name(),
                      ' 同学已经在训练场等着了！',
                    ]);
                  } else if (temp_list.indexOf(temp) === -1) {
                    await chara.say_and_wait('疑 惑！查无此人！');
                  } else {
                    chara.say([
                      '抉 择！要让学园帮你接触 ',
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
                        get_chara_talk(temp).get_colored_actual_name(),
                        ' 同学最近将经常去训练场，好好把握！',
                      ]);
                      sys_change_fame(-cost);
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
            name: '「抗 议！训练场没有想训的爱马！」',
          },
          {
            async handle() {
              if (sys_check_awake(chara.id)) {
                await chara.say_and_wait(
                  nothing ? '不 悦！不要消遣我！' : '再 会！要努力工作啊！',
                );
                if (nothing) {
                  era.println();
                  sys_like_chara(302, 0, -25) && (await era.waitAnyKey());
                }
              }
            },
            name: '「再 会！走了走了！」',
          },
          () => (nothing = false),
        );
        break;
      case 306:
        temp_flag = await npc_common(
          chara,
          title,
          { name: '聊天' },
          {
            name: '求爱',
            fail_cb() {
              flag_page = false;
            },
          },
          { loc: location_enum.chairman, name: '约会', print_out_page },
          { name: `庆祝 ${celebration}` },
          get_riko_button(chara, get_chara_talk(0)),
          { name: '再见' },
        );
    }
    if ((flag_page &&= temp_flag)) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait('【折返了】');
  if (!sys_check_awake(chara.id)) {
    loc_characters.set(location_enum.chairman, []);
  }
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.chairman,
  });
  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_chairman_office;
