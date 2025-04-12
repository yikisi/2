const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { mark_colors } = require('#/data/const.json');
const { penis_desc, skin_desc } = require('#/data/ero/status-const');
const ExtraBase = require('#/data/extra-base');
const { get_breast_cup, get_hair_color } = require('#/data/info-generator');
const { check_chara_ero_image } = require('#/data/other-const');

const hair_color_names = [
  '白',
  '橙',
  '粉',
  '黑',
  '红棕',
  '金',
  '蓝',
  '绿',
  '浅棕',
  '深棕',
  '紫',
];
const body_color_names = ['枥栗', '栗', '芦', '青', '鹿', '黑鹿', '青鹿'];

/**
 * @this {CallOfMejiro}
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function cum_shop(chara, me) {
  const mayor = get_chara_talk(13);
  const waiters = [
    get_chara_talk(27),
    get_chara_talk(59),
    get_chara_talk(64),
    get_chara_talk(71),
    get_chara_talk(74),
    get_chara_talk(86),
  ];
  const say_by_waiter = (v) => get_random_entry(waiters).say_as_unknown(v);
  const say_by_waiter_and_wait = (v) =>
    get_random_entry(waiters).say_as_unknown_and_wait(v);
  let flag = true;
  let money = era.get('item:「恩宠」');
  const print_money_divider = () =>
    era.drawLine({
      content: `当前「恩宠」：${money.toLocaleString()}`,
    });
  while (flag) {
    await era.clear();
    this.page_header(chara);
    era.drawLine();
    era.print([
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 站在干净的街道上。',
    ]);
    era.print('明媚的阳光下，出双入对的人们穿行在大街小巷。');
    era.drawLine();
    const buttons = [
      {
        c: '「美容院」',
        async h() {
          // 染发染毛
          // 人类改造成马娘
          await say_by_waiter_and_wait(
            '欢迎光临！请问是哪位要接受美容服务呢？',
          );
          const lines = era.getLineCount();
          let _flag = true,
            target = chara;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            const buttons = [];
            const height = era.get(`cflag:${target.id}:身高`);
            const change_height = (new_height) => {
              era.set(`cflag:${target.id}:身高`, new_height);
              era.set(
                `cflag:${target.id}:腰围`,
                (new_height * era.get(`cflag:${target.id}:腰围`)) / height,
              );
              era.set(
                `cflag:${target.id}:臀围`,
                (new_height * era.get(`cflag:${target.id}:臀围`)) / height,
              );
              if (target.sex_code === 1) {
                era.set(
                  `cflag:${target.id}:胸围`,
                  (new_height * era.get(`cflag:${target.id}:胸围`)) / height,
                );
              } else {
                era.set(
                  `cflag:${target.id}:胸围`,
                  era.get(`cflag:${target.id}:胸围`) -
                    era.get(`cflag:${target.id}:下胸围`) +
                    era.set(
                      `cflag:${target.id}:下胸围`,
                      (new_height * era.get(`cflag:${target.id}:下胸围`)) /
                        height,
                    ),
                );
              }
            };
            buttons.push(
              {
                c: `增高（10「恩宠」，目前是 ${height}cm）`,
                ...(height === 229 ? { d: true, t: '不能再高了……' } : {}),
                h() {
                  money = era.add('item:「恩宠」', -10);
                  change_height(height + 1);
                },
              },
              {
                c: `变矮（10「恩宠」，目前是 ${height}cm）`,
                ...(height === 229 ? { d: true, t: '不能再矮了……' } : {}),
                h() {
                  money = era.add('item:「恩宠」', -10);
                  change_height(height - 1);
                },
              },
              undefined,
            );
            if (target.sex_code !== 1) {
              const delta =
                  era.get(`cflag:${target.id}:胸围`) -
                  era.get(`cflag:${target.id}:下胸围`),
                cup = get_breast_cup(target.id);
              buttons.push({
                c: `增大胸部（5「恩宠」，目前是 ${cup} Cup）`,
                ...(delta >= 22.5
                  ? { d: true, t: '无法丰胸到 [爆乳] 以上' }
                  : {}),
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`cflag:${target.id}:胸围`, 1);
                },
              });
              buttons.push({
                c: `缩小胸部（5「恩宠」，目前是 ${cup} Cup）`,
                ...(delta <= 5 ? { d: true, t: '已经是飞机场了……' } : {}),
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`cflag:${target.id}:胸围`, -1);
                },
              });
              const breast_size = era.get(`talent:${target.id}:乳头类型`);
              if (breast_size === 0) {
                buttons.push({
                  c: '增加乳头色素累积（5「恩宠」）',
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`talent:${target.id}:乳头类型`, 1);
                  },
                });
              } else {
                buttons.push({
                  c: '清除乳头色素累积（5「恩宠」）',
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`talent:${target.id}:乳头类型`, -1);
                  },
                });
              }
              const milk_status = era.get(`talent:${target.id}:泌乳`);
              if (milk_status === 3) {
                buttons.push({
                  c: '消除 [母乳体质]（30「恩宠」）',
                  h() {
                    money = era.add('item:「恩宠」', -30);
                    era.set(`talent:${target.id}:泌乳`, 0);
                  },
                });
              } else if (milk_status === 0) {
                buttons.push({
                  c: '获得 [母乳体质]（30「恩宠」）',
                  h() {
                    money = era.add('item:「恩宠」', -30);
                    era.set(`talent:${target.id}:泌乳`, 30);
                  },
                });
              }
            }
            buttons.push(undefined);
            if (
              !era.get(`status:${target.id}:弗隆K`) &&
              !era.get(`status:${target.id}:弗隆P`)
            ) {
              const penis_size = era.get(`cflag:${target.id}:阴茎尺寸`),
                cur_desc = penis_desc[get_penis_size(target.id)];
              buttons.push(
                {
                  c: `${target.sex_code === 0 ? 'FUTA 化（15' : '增大阴茎（10'}「恩宠」，目前是 ${cur_desc || '女性'}）`,
                  ...(penis_size === 5
                    ? { d: true, t: '已经不能继续增大了……' }
                    : {}),
                  h() {
                    money = era.add('item:「恩宠」', -10);
                    era.add(`cflag:${target.id}:阴茎尺寸`, 1);
                    if (target.sex_code === 0) {
                      money = era.add('item:「恩宠」', -5);
                      era.set(
                        `talent:${target.id}:早泄`,
                        Math.max(
                          era.get(`talent:${target.id}:早泄`),
                          era.get(`talent:${target.id}:淫核`),
                        ),
                      );
                      target.sex_code = era.set(`cflag:${target.id}:性别`, 10);
                    }
                  },
                },
                {
                  c: `${target.sex_code === 10 && penis_size === 1 ? '女体化（15' : '缩小阴茎（10'}「恩宠」，目前是 ${cur_desc || '女性'}）`,
                  ...((penis_size === 1 && target.sex_code === 1) ||
                  penis_size === 0
                    ? {
                        d: true,
                        t:
                          penis_size === 0
                            ? '本来无一物……'
                            : '已经不能继续缩小了……',
                      }
                    : {}),
                  h() {
                    money = era.add('item:「恩宠」', -10);
                    era.add(`cflag:${target.id}:阴茎尺寸`, -1);
                    if (target.sex_code === 10 && penis_size === 1) {
                      money = era.add('item:「恩宠」', -5);
                      era.set(
                        `talent:${target.id}:淫核`,
                        Math.max(
                          era.get(`talent:${target.id}:早泄`),
                          era.get(`talent:${target.id}:淫核`),
                        ),
                      );
                      target.sex_code = era.set(`cflag:${target.id}:性别`, 0);
                    }
                  },
                },
              );
            }
            const part = target.sex_code === 1 ? '阴茎' : '阴蒂',
              clitoris_size = era.get(`talent:${target.id}:茎核类型`);
            buttons.push(
              {
                c: `减轻${part}色素累积（5「恩宠」）`,
                ...(clitoris_size === 0
                  ? {
                      d: true,
                      t: `已经是粉色的${part}……`,
                    }
                  : {}),
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`talent:${target.id}:茎核类型`, -1);
                },
              },
              {
                c: `增加${part}色素累积（5「恩宠」）`,
                ...(clitoris_size === 2
                  ? {
                      d: true,
                      t: `已经是黝黑的${part}……`,
                    }
                  : {}),
                h() {
                  money = era.add('item:「恩宠」', -5);
                  era.add(`talent:${target.id}:茎核类型`, 1);
                },
              },
            );
            buttons.push(undefined);
            const custom_enabled = !check_chara_ero_image(target.id);
            if (custom_enabled) {
              const skin_status = era.get(`cflag:${target.id}:肤色深度`);
              buttons.push(
                {
                  c: `美白（5「恩宠」，现在是 ${skin_desc[skin_status + 1]}）`,
                  ...(skin_status === -1
                    ? {
                        d: true,
                        t: '肤色已经不能再白了……',
                      }
                    : {}),
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`cflag:${target.id}:肤色深度`, -1);
                  },
                },
                {
                  c: `美黑（5「恩宠」，现在是 ${skin_desc[skin_status + 1]}）`,
                  ...(skin_status === 2
                    ? {
                        d: true,
                        t: '肤色已经不能再深了……',
                      }
                    : {}),
                  h() {
                    money = era.add('item:「恩宠」', -5);
                    era.add(`cflag:${target.id}:肤色深度`, 1);
                  },
                },
                {
                  c: '染发',
                  async h() {
                    const curr_color = era.get(`cstr:${target.id}:发色`);
                    say_by_waiter('要染成什么颜色？');
                    era.printMultiColumns(
                      hair_color_names.map((e, i) => ({
                        accelerator: i + 1,
                        config: { color: get_hair_color(e), width: 6 },
                        content: e + (curr_color === e ? '（现发色）' : ''),
                        type: 'button',
                      })),
                    );
                    const ret = await era.input();
                    era.set(
                      `cstr:${target.id}:发色`,
                      hair_color_names[ret - 1],
                    );
                  },
                },
              );
            }
            buttons.push(undefined);
            if (era.get(`cflag:${target.id}:种族`) === 0) {
              buttons.push({
                c:
                  '转变为' +
                  target.get_uma_sex_title() +
                  '（100「恩宠」，不可逆！）',
                h() {
                  money = era.add('item:「恩宠」', -100);
                  era.set(`cflag:${target.id}:种族`, 1);
                  era.set(
                    `cstr:${target.id}:毛色`,
                    era.get(`cstr:${target.id}:毛色`) ||
                      get_random_entry(body_color_names),
                  );
                  era.set(`cflag:${target.id}:可再次育成`, 1);
                },
              });
            } else if (custom_enabled) {
              buttons.push({
                c: '改变毛色（1「恩宠」）',
                async h() {
                  const curr_color = era.get(`cstr:${target.id}:毛色`);
                  say_by_waiter('要染成什么颜色？');
                  era.printMultiColumns(
                    body_color_names.map((e, i) => ({
                      accelerator: i + 1,
                      config: { color: get_hair_color(e), width: 6 },
                      content: e + (curr_color === e ? '（现毛色）' : ''),
                      type: 'button',
                    })),
                  );
                  const ret = await era.input();
                  if (
                    curr_color !==
                    era.set(`cstr:${target.id}:毛色`, body_color_names[ret - 1])
                  ) {
                    money = era.add('item:「恩宠」', -1);
                  }
                },
              });
            }

            const filtered_buttons = buttons.filter((e) => e !== undefined);
            filtered_buttons.forEach((e, i) => (e.a = i + 2));

            era.printButton(`切换接受服务的角色，现在是 ${target.name}`, 1);
            era.printMultiColumns(
              buttons.map((e) =>
                e !== undefined
                  ? {
                      accelerator: e.a,
                      config: { disabled: e.d, title: e.t, width: 12 },
                      content: e.c,
                      type: 'button',
                    }
                  : { content: [], type: 'text' },
              ),
            );
            era.printButton('离开', 99);
            const ret = await era.input();
            switch (ret) {
              case 1:
                target = target === chara ? me : chara;
                break;
              case 99:
                _flag = false;
                break;
              default:
                await filtered_buttons[ret - 2].h();
                await say_by_waiter_and_wait('好的，请放轻松，马上就好～');
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('下次再见～');
        },
      },
      {
        c: '「大药房」',
        async h() {
          await say_by_waiter_and_wait(
            '这里是目白城大药房！头寒脑热、腰酸背痛、手震心疼、腿颤脚麻，我们全都——',
          );
          await say_by_waiter_and_wait('……不包治哦……');
          await say_by_waiter_and_wait('开个玩笑啦，有什么可以帮您的？');
          await say_by_waiter_and_wait('所有药膏都是一周后见效～');
          const lines = era.getLineCount();
          let _flag = true;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            const extra_base = new ExtraBase();
            era.printButton(
              `「大力丸」（${
                extra_base.stamina === 1000
                  ? 'MAX'
                  : `${
                      extra_base.stamina / 10 + 10
                    }「恩宠」：额外体力上限 ${extra_base.stamina.toLocaleString()} → ${(
                      extra_base.stamina + 50
                    ).toLocaleString()}`
              }）`,
              1,
              { disabled: extra_base.stamina === 1000 },
            );
            era.printButton(
              `「醒神膏」（${
                extra_base.time === 1000
                  ? 'MAX'
                  : `${
                      extra_base.time / 10 + 10
                    }「恩宠」：额外精力上限 ${extra_base.time.toLocaleString()} → ${(
                      extra_base.time + 50
                    ).toLocaleString()}`
              }）`,
              2,
              { disabled: extra_base.time === 1000 },
            );
            era.printButton('离开', 99);
            switch (await era.input()) {
              case 1:
                await say_by_waiter_and_wait('好的，「大力丸」一份～');
                money = era.add(
                  'item:「恩宠」',
                  -(extra_base.stamina / 10 + 10),
                );
                extra_base.stamina += 50;
                break;
              case 2:
                await say_by_waiter_and_wait('好的，「醒神膏」一份～');
                money = era.add('item:「恩宠」', -(extra_base.time / 10 + 10));
                extra_base.time += 50;
                break;
              default:
                _flag = false;
            }
            _flag &&= money > 0;
          }
        },
      },
      {
        c: '「按摩店」',
        async h() {
          const max_limt = 4 + (era.get(`cflag:${chara.id}:性别`) > 0);
          let _flag = true;
          await say_by_waiter_and_wait(
            '这里提供精油按摩服务！要不要来放松一下呢？',
          );
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            const part_limit = era.get(`talent:${chara.id}:调教度`);
            print_money_divider();
            era.printButton(
              `增加 ${chara.name} 可调教为最高级敏感度的部位（${
                part_limit === max_limt
                  ? 'MAX'
                  : `25「恩宠」：${part_limit + 1} 个部位 → ${part_limit + 2} 个部位`
              }）`,
              1,
              {
                disabled:
                  era.get(`talent:${chara.id}:调教度`) ===
                  4 + (era.get(`cflag:${chara.id}:性别`) > 0),
              },
            );
            era.printButton('离开', 99);
            if ((await era.input()) === 99) {
              _flag = false;
            } else {
              money = era.add('item:「恩宠」', -25);
              await era.printAndWait([
                chara.get_colored_name(),
                ' 做完按摩后，身体变得更润滑了……',
              ]);
              era.add(`talent:${chara.id}:调教度`, 1);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('请一路顺风～');
        },
      },
      {
        c: '「图书馆」',
        async h() {
          let _flag = true;
          await say_by_waiter_and_wait(
            '欢迎来到目白城市立大图书馆！请问要借阅什么书籍呢？',
          );
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            const iron_mind = era.get('talent:0:钢之意志') > 0,
              chara_im = era.get(`talent:${chara.id}:钢之意志`);
            era.printButton(
              `《桐生院秘传驯马术》（10「恩宠」→ ${me.name} 习得 [钢之意志]）`,
              1,
              { disabled: iron_mind },
            );
            era.printButton(
              `《我与我的马娘妻子》（5「恩宠」→ ${me.name} 遗忘 [钢之意志]）`,
              2,
              { disabled: !iron_mind },
            );
            era.printButton(
              `《神圣的一步半》（5「恩宠」→ ${chara.name} 习得 [钢之意志]）`,
              3,
              { disabled: chara_im },
            );
            era.printButton(
              `《连迟钝的男性也能一举拿下！恋爱赛场的极意》（10「恩宠」→ ${chara.name} 遗忘 [钢之意志]）`,
              4,
              { disabled: !chara_im },
            );
            era.printButton('离开', 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              money = era.add(
                'item:「恩宠」',
                -5 - (ret === 1 || ret === 4) * 5,
              );
              const { t: target, s: im_status } =
                ret <= 2 ? { t: me, s: iron_mind } : { t: chara, s: chara_im };
              if (im_status) {
                era.set(`talent:${target.id}:钢之意志`, 0);
              } else {
                era.set(`talent:${target.id}:钢之意志`, 1);
              }
              await era.printAndWait([
                target.get_colored_name(),
                im_status ? ' 遗忘了 ' : ' 习得了 ',
                { content: '[钢之意志]', color: mark_colors['钢'] },
                '！',
              ]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('欢迎下次光临～');
        },
      },
      {
        c: '「抽奖箱」',
        async h() {
          say_by_waiter('欢迎来到目白城！要在这里试试手气吗？');
          print_money_divider();
          if (await select_yes_or_no('要使用 2「恩宠」抽奖吗？')) {
            const dice = Math.random();
            if (dice < 0.01) {
              await say_by_waiter_and_wait('中～大～奖～啦～');
              await say_by_waiter_and_wait('奖券金十倍奉上！');
              await era.printAndWait('获得了20「恩宠」！');
              money = era.add('item:「恩宠」', 20);
            } else {
              money = era.add('item:「恩宠」', -2);
              const items = [];
              if (dice < 2 / (money + 10)) {
                [
                  26,
                  ...new Array(7).fill(0).map((_, i) => 60 + i),
                  ...new Array(4).fill(0).map((_, i) => 70 + i),
                  ...new Array(6).fill(0).map((_, i) => 76 + i),
                  82,
                ].forEach((e) => {
                  if (era.get(`item:${e}`) < 1) {
                    items.push(e);
                  }
                });
                [74, 75].forEach((e) => {
                  if (era.get(`item:${e}`) < 2) {
                    items.push(e);
                  }
                });
              }
              if (items.length === 0) {
                new Array(8).fill(0).forEach((_, i) => items.push(i));
                new Array(11).fill(0).map((_, i) => items.push(i + 10));
                new Array(3).fill(0).map((_, i) => items.push(i + 27));
                new Array(11).fill(0).map((_, i) => items.push(i + 31));
                items.push(25, 43, 101);
              }
              const item = get_random_entry(items);
              era.add(`item:${item}`, 1);
              await era.printAndWait([
                '获得了道具【',
                era.get(`itemname:${item}`).toUpperCase(),
                '】',
              ]);
            }
          }
        },
      },
      {
        c: '「报社」',
        async h() {
          const menu = [1, 5, 10, 50];
          let _flag = true;
          await say_by_waiter_and_wait('欢迎光临～');
          await say_by_waiter_and_wait(
            '目白城报社可以帮您恢复名誉、传播名气。',
          );
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            say_by_waiter('有什么可以帮您的？');
            print_money_divider();
            era.printMultiColumns(
              menu.map((e, i) => ({
                accelerator: i + 1,
                content: `${e}「恩宠」→ ${e}～${e * 4} 声望`,
                type: 'button',
                config: { width: 12 },
              })),
            );
            era.printButton('离开', 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              const delta = get_random_value(menu[ret - 1], menu[ret - 1] * 4);
              await say_by_waiter_and_wait(
                `好的，${delta} 声望，马上为您办理～`,
              );
              era.add('flag:当前声望', delta);
              money = era.add('item:「恩宠」', -menu[ret - 1]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('谢谢惠顾！');
        },
      },
      {
        c: '「银行」',
        async h() {
          const menu = [1, 5, 10, 50];
          let _flag = true;
          await say_by_waiter_and_wait('欢迎光临～');
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            say_by_waiter('要办理取款业务吗？');
            print_money_divider();
            era.printMultiColumns(
              menu.map((e, i) => ({
                accelerator: i + 1,
                content: `${e}「恩宠」→ ${e}～${e * 10} 马币`,
                type: 'button',
                config: { width: 12 },
              })),
            );
            era.printButton('离开', 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              const got = menu[ret - 1] * get_random_value(1, 10);
              await say_by_waiter_and_wait(
                `好的，取款 ${got.toLocaleString()} 马币，马上为您办理～`,
              );
              era.add('flag:当前马币', got);
              money = era.add('item:「恩宠」', -menu[ret - 1]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('请慢走～');
        },
      },
      {
        c: '「市政府」',
        d: true,
        async h() {
          await mayor.say_and_wait('欢迎来到目白城。');
          await mayor.say_and_wait('请问有什么可以帮您的？');
          if (await select_yes_or_no('', '请放过我……', '没事')) {
            await mayor.say_and_wait('这样啊……您确定吗？');
            if (
              await select_yes_or_no(
                [
                  {
                    color: 'red',
                    content: '（此操作不可逆，将永久性改变目白城风格！）',
                  },
                ],
                '确定',
                '不了',
              )
            ) {
              await mayor.say_and_wait('我明白了。');
              await mayor.say_and_wait(
                '您下次到访的时候，目白城会成为您希望的样子。',
              );
              await mayor.say_and_wait('再会。');
              era.set('flag:目白城变量', {});
              era.set('flag:目白城风格', 0);
              era.set('item:「恩宠」', 0);
            } else {
              await mayor.say_and_wait('祝您和您的同伴在目白城玩得开心～');
            }
          } else {
            await mayor.say_and_wait('祝您和您的同伴在目白城玩得开心～');
          }
        },
        t: '可切换目白城风格，暂未开放',
      },
      {
        a: 999,
        c: '离开',
        async h() {
          flag = false;
        },
      },
    ];
    era.printMultiColumns(
      buttons.map((e, i) => ({
        accelerator: e.a || 100 + i,
        config: { disabled: e.d, title: e.t, width: e.a === 999 ? 24 : 6 },
        content: e.c,
        type: 'button',
      })),
    );
    const ret = await era.input();
    era.drawLine();
    await (buttons.find((e) => e.a === ret) || buttons[ret - 100]).h();
    if (money <= 0) {
      era.set('item:「恩宠」', 0);
      era.set('item:「亏欠」', -money);
      era.drawLine();
      await era.printAndWait([
        me.get_couple_title(),
        ' 走出店铺，眼前却已不是街道，而是郊景。',
      ]);
      await era.printAndWait('回头望时，目白城已再次为迷雾笼罩……');
      flag = false;
    }
  }
}

module.exports = cum_shop;
