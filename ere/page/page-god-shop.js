/**
 * @file 三女神祈祷 - 系统提示
 * @author 阿格尼斯数码公司
 */
const era = require('#/era-electron');

const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { money_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { location_enum } = require('#/data/locations');
const { attr_names } = require('#/data/train-const');

const button_contents = [
  '「啊，请帮帮我吧女神大人——」',
  '「神啊，请您垂怜……」',
  '「请帮帮我吧，女神大人。」',
];
const pray_random_power_desc = [
  '身体变得更加轻盈',
  '呼吸变得更加平缓',
  '肌肉变得更加充实',
  '一股热焰在心底燃烧',
  '头脑变得异常清晰',
];

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
async function common_finish_pray(aim, me) {
  await era.printAndWait([
    '祈祷完毕后，',
    ...(aim.id > 0
      ? [
          me.get_colored_name(),
          ' 和身边的 ',
          aim.get_colored_name(),
          ' 不约而同睁开了眼睛。',
        ]
      : [me.get_colored_name(), ' 缓缓睁开眼睛。']),
  ]);
}

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
async function common_pray_peace(aim, me) {
  await era.printAndWait('祈祷着特雷森学院的平安……');
  await common_finish_pray(aim, me);
}

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
async function common_pray_power(aim, me) {
  await era.printAndWait([
    '在一片黑暗中，隐隐有光芒涌动，缓缓流入 ',
    me.get_colored_name(),
    ' 的身体！',
  ]);
  era.println();
  await common_finish_pray(aim, me);
}

/**
 * @param {CharaTalk} aim
 * @param {CharaTalk} me
 */
function get_chara_desc(aim, me) {
  switch (era.get(`cflag:${aim.id}:气性`)) {
    case 1:
    case 3:
      return [
        '一旁的 ',
        aim.get_colored_name(),
        ' 笑容中充满自信，对 ',
        me.get_colored_name(),
        ' 抛来信任的目光。',
      ];
    case -1:
    case 0:
    case 2:
      return [
        '一旁的 ',
        aim.get_colored_name(),
        ' 认真盯着三女神像，随后将目光移回 ',
        me.get_colored_name(),
        ' 身上，似乎在等待 ',
        me.get_colored_name(),
        ' 做些什么。',
      ];
    case -3:
    case -2:
      return [
        '一旁的 ',
        aim.get_colored_name(),
        ' 静静摇晃着尾巴，等待 ',
        me.get_colored_name(),
        ' 的下一步行动。',
      ];
  }
}

module.exports = async () => {
  era.set('flag:当前位置', location_enum.god);
  let flag_god = 1,
    relation = 0,
    god_id = sys_get_random_uma_god(),
    god = god_id ? get_chara_talk(god_id) : undefined;
  const cur_id = era.get('flag:当前互动角色'),
    aim = get_chara_talk(cur_id),
    me = cur_id ? get_chara_talk(0) : aim,
    life_marks = god_id ? LifeEventMarks.get_marks(god_id) : undefined,
    common_uma_sex_title = era.get('flag:角色性别') === 1 ? '马郎' : '马娘';
  while (flag_god > 0) {
    await era.clear();
    print_page_header();
    if (cur_id) {
      print_curr_chara(cur_id);
    }
    era.drawLine();
    if (god_id) {
      if (flag_god === 1) {
        if (cur_id === 0) {
          era.print([me.get_colored_name(), ' 独自一人来到了三女神像面前。']);
          era.print('庄严肃穆的三女神像肩上，瓶中之水源源不断流淌出来。');
          god.say_as_unknown('……');
        } else {
          era.print([
            me.get_colored_name(),
            ' 和 ',
            aim.get_colored_name(),
            ' 一同来到了三女神像前。',
          ]);
          era.print(get_chara_desc(aim, me));
        }
      } else {
        god.say_as_unknown('……');
        era.print('三女神像的上面传来了谜一样的气息……');
        era.print([
          '有谁在注视着 ',
          me.get_colored_name(),
          ...(cur_id > 0 ? [' 与 ', aim.get_colored_name()] : []),
          '……',
        ]);
      }
      era.drawLine();
      era.printMultiColumns([
        ...[
          { content: '祈祷变得有名（1000 声望）', cost: 1000, type: 'button' },
          { content: '祈祷变得有钱（500 声望）', cost: 500, type: 'button' },
          { content: '祈祷马上有钱（50+ 声望）', cost: 50, type: 'button' },
          {
            config: {
              disabled:
                cur_id ||
                attr_names.findIndex(
                  (e) => era.get(`base:0:${e}`) < era.get(`maxbase:0:${e}`),
                ) === -1,
            },
            content: '祈祷变得更强（200 声望）',
            cost: 200,
            type: 'button',
          },
          {
            config: {
              disabled:
                attr_names.filter(
                  (e) =>
                    era.get(`maxbase:${cur_id}:${e}`) -
                      era.get(`base:${cur_id}:${e}`) <
                    50,
                ).length < 3 ||
                attr_names.findIndex(
                  (e) => era.get(`maxbase:${cur_id}:${e}`) < 2000,
                ) === -1,
            },
            content: `祈祷${cur_id ? ` ${aim.name} ` : ''}突破极限（50-500 声望）`,
            cost: 0,
            type: 'button',
          },
          {
            content: `祈祷${cur_id ? ` ${aim.name} ` : ''}恢复健康（800 声望）`,
            cost: 800,
            type: 'button',
          },
          life_marks.get('love') === 1
            ? {
                content: button_contents[god_id - 340],
                config: {
                  buttonType: 'danger',
                },
                type: 'button',
              }
            : {},
        ]
          .filter((e) => e)
          .map((e, i) => {
            e.accelerator = i + 1;
            e.config ||= {};
            e.config.width = 12;
            e.config.disabled ||= era.get('flag:当前声望') <= e.cost;
            delete e.cost;
            return e;
          }),
        { accelerator: 99, content: '离开', type: 'button' },
      ]);
      let temp = await era.input();
      if (temp === 99) {
        era.drawLine();
        if (cur_id === 0) {
          await era.printAndWait([
            flag_god === 1 ? '对着三女神像简单做了礼拜后，' : '',
            me.get_colored_name(),
            ' 回头走向训练室的方向。',
          ]);
        } else {
          await era.printAndWait([
            flag_god === 1 ? '对着三女神像简单做了礼拜后，' : '',
            aim.get_colored_name(),
            ' 和 ',
            me.get_colored_name(),
            ' 一同离开三女神像。',
          ]);
        }
        flag_god = 0;
      } else if (temp === 990) {
        switch_image();
      } else {
        flag_god = 2;
        era.print(
          cur_id === 0
            ? [me.get_colored_name(), ' 独自一人在三女神像前默默祈祷着……']
            : [
                '在 ',
                me.get_colored_name(),
                ' 的指示下，',
                aim.get_colored_name(),
                ' 一同闭上眼，在三女神像前默默祈祷着……',
              ],
        );
        switch (temp) {
          case 1:
            if (
              await select_yes_or_no(
                [
                  '（这是我渴望的吗？）',
                  { isBr: true },
                  '脑海中，不知为何闪过这样的念头……',
                ],
                `是的（声望获取+${era.get('global:声望加成')}%->${era.get('global:声望加成') + 1}%）`,
                '也许并不是……',
              )
            ) {
              await era.printAndWait('在脑海中想象着被众人簇拥称赞的场景……');
              await common_finish_pray(aim, me);
              era.println();
              era.add('global:声望加成', 1);
              const honour = era.add('flag:当前声望', -1000);
              if (honour >= 2000) {
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 打开手机，叹息自己的声望没能走出日本，走向世界。',
                ]);
              } else if (honour >= 1000) {
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 打开手机，叹息自己的名声并没有给自己直接带来更多好的生源。',
                ]);
              } else if (honour >= 500) {
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 打开手机，叹息着除去挚友和家人没有什么人对自己抱有真正关注的事实。',
                ]);
              } else {
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 打开手机，叹息着自己除去挚友和家人外寥寥无几的联系人。',
                ]);
              }
              await era.printAndWait(
                '这么想着时，手机突然收到陌生人发来的信息。',
              );
              await era.printAndWait([
                '是对 ',
                me.get_colored_name(),
                ' 如何培养赛',
                common_uma_sex_title,
                '感兴趣，想要看到 ',
                me.get_colored_name(),
                ' 所培养赛',
                common_uma_sex_title,
                '成绩的人发来的。',
              ]);
              await era.printAndWait('之后，收到了比以前更多这样的消息……');
              relation += 500;
            } else {
              await common_pray_peace(aim, me);
            }
            break;
          case 2:
            if (
              await select_yes_or_no(
                [
                  '（这是，我真切的想法吗？）',
                  { isBr: true },
                  '脑海中，不知为何闪过这样的念头……',
                ],
                `是的（马币获取+${era.get('global:金钱加成')}%->${era.get('global:金钱加成') + 1}%）`,
                '也许并不是',
              )
            ) {
              await era.printAndWait([
                me.get_colored_name(),
                ' 在脑海中想象自己的储蓄罐日积月累逐渐沉重的样子……',
              ]);
              await common_finish_pray(aim, me);
              era.println();
              await era.printAndWait(
                '不知为何，脑袋里冒出了自己工资和分成的数字，隐隐感觉好像数值比以前高了的样子。',
              );
              await era.printAndWait(
                '明明特雷森方面的工资一直以来都这么高，应该是错觉吧……',
              );
              era.add('global:金钱加成', 1);
              era.add('flag:当前声望', -500);
              relation += 250;
            } else {
              await common_pray_peace(aim, me);
            }
            break;
          case 3:
            era.printMultiColumns([
              {
                content: [
                  '（那么，大概想要多少呢？）',
                  { isBr: true },
                  '脑海中，突然闪过这样的问题',
                ],
                type: 'text',
              },
              ...[
                '250马币就好了……',
                '500马币就好了……',
                '750马币才够吧……',
                '1000马币才够吧……',
              ].map((e, i) => ({
                accelerator: i + 1,
                config: {
                  disabled: era.get('flag:当前声望') <= 50 * (i + 1),
                  width: 12,
                },
                content: e,
                type: 'button',
              })),
              { accelerator: 99, content: '还是算了', type: 'button' },
            ]);
            temp = await era.input();
            if (temp === 99) {
              await common_pray_peace(aim, me);
            } else {
              if (temp <= 2) {
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 在脑海中想象着自己拿着钱给马娘购买训练器材的场景……',
                ]);
                await common_finish_pray(aim, me);
                era.println();
                await era.printAndWait([
                  '不久，',
                  get_chara_talk(301).get_colored_name(),
                  ' 给 ',
                  me.get_colored_name(),
                  ' 发来消息，不知为何认为 ',
                  me.get_colored_name(),
                  ' 教导赛',
                  common_uma_sex_title,
                  '的方式很可能导致',
                  common_uma_sex_title,
                  '受伤。',
                ]);
                await era.printAndWait([
                  '随后，发来了 ',
                  {
                    color: money_color,
                    content: (250 * temp).toLocaleString(),
                  },
                  ' 马币，要求 ',
                  me.get_colored_name(),
                  ' 用这些钱对自己的训练方式进行整改……',
                ]);
              } else {
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 在脑海中想象着自己徜徉于金钱海洋的场景……',
                ]);
                await common_finish_pray(aim, me);
                era.println();
                await era.printAndWait([
                  '不久，',
                  get_chara_talk(302).get_colored_name(),
                  ' 给 ',
                  me.get_colored_name(),
                  ' 发来消息，说要对 ',
                  me.get_colored_name(),
                  ' 进行特别补贴，发来了 ',
                  {
                    color: money_color,
                    content: (250 * temp).toLocaleString(),
                  },
                  ' 马币。',
                ]);
                await era.printAndWait([
                  '但前提是，',
                  me.get_colored_name(),
                  ' 作为特雷森学院的训练员，不能再引发奇怪的传闻……',
                ]);
              }
              era.add('flag:当前声望', -50 * temp);
              era.add('flag:当前马币', 250 * temp);
              relation += 25 * temp;
            }
            break;
          case 4:
            era.printMultiColumns([
              {
                content: [
                  '（哪方面，最需要提升呢？）',
                  { isBr: true },
                  '脑海中冒出了这样的疑问……',
                ],
                type: 'text',
              },
              ...attr_names.map((e, i) => ({
                accelerator: i,
                content: `${e}吧（+80）`,
                config: {
                  disabled:
                    era.get(`base:0:${e}`) === era.get(`maxbase:0:${e}`),
                  width: 6,
                },
                type: 'button',
              })),
              {
                accelerator: 5,
                content: '都有待提升啊……（随机属性+100）',
                type: 'button',
              },
              {
                accelerator: 99,
                content: '已经没有要提升的了……',
                type: 'button',
              },
            ]);
            temp = await era.input();
            if (temp < 99) {
              switch (temp) {
                case 0:
                  await era.printAndWait([
                    '想象着自己一边和慢跑的担当赛',
                    common_uma_sex_title,
                    '并走，一边进行指导的场景……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '温暖余韵仍留存于脑海，',
                    me.get_colored_name(),
                    ' 感到身体变得更加轻盈……',
                  ]);
                  break;
                case 1:
                  await era.printAndWait([
                    '想象着自己孜孜不倦教导赛',
                    common_uma_sex_title,
                    '们的场景……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '温暖余韵仍留存于脑海，',
                    me.get_colored_name(),
                    ' 感到呼吸变得更加平缓……',
                  ]);
                  break;
                case 2:
                  await era.printAndWait([
                    '想象着自己帮助担当赛',
                    common_uma_sex_title,
                    '在拔河比赛中取得冠军的场景……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '温暖余韵仍留存于脑海，',
                    me.get_colored_name(),
                    ' 感到肌肉变得更加充实……',
                  ]);
                  break;
                case 3:
                  await era.printAndWait([
                    '想象着自己声嘶力竭为担当赛',
                    common_uma_sex_title,
                    '加油呐喊的样子……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '温暖余韵仍留存于脑海，',
                    me.get_colored_name(),
                    ' 感到一股热浪在心底涌流……',
                  ]);
                  break;
                case 4:
                  await era.printAndWait([
                    '想象着自己为担当赛',
                    common_uma_sex_title,
                    '制定一份又一份完美训练计划的场景……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '温暖余韵仍留存于脑海，',
                    me.get_colored_name(),
                    ' 感到头脑变得异常清晰……',
                  ]);
                  break;
                case 5:
                  temp =
                    get_random_entry(
                      new Array(5)
                        .fill(0)
                        .map((_, i) => i)
                        .filter(
                          (e) =>
                            era.get(`base:0:${attr_names[e]}`) <
                            era.get(`maxbase:0:${attr_names[e]}`),
                        ),
                    ) + 10;
                  await era.printAndWait([
                    '脑海里冒出担当赛',
                    common_uma_sex_title,
                    '安慰自己的场景……',
                  ]);
                  await common_pray_power(aim, me);
                  await era.printAndWait([
                    '温暖余韵仍留存于脑海，',
                    me.get_colored_name(),
                    ' 感到',
                    pray_random_power_desc[temp - 10],
                    '……',
                  ]);
              }
              if (temp < 10) {
                sys_change_attr_and_print(0, temp, 80);
              } else {
                sys_change_attr_and_print(0, temp - 10, 100);
              }
              era.add('flag:当前声望', -200);
              relation += 100;
            } else {
              await god.say_as_unknown_and_wait('努力的话，终有一天……会的……');
              await era.printAndWait('似乎听到了这样的声音。');
              era.println();
              await common_finish_pray(aim, me);
              await era.printAndWait('三女神像依然静静矗立着……');
            }
            break;
          case 5:
            temp = [
              attr_names.filter(
                (e) =>
                  era.get(`base:${cur_id}:${e}`) ===
                  era.get(`maxbase:${cur_id}:${e}`),
              ).length,
            ];
            temp.push(
              temp >= 3 ? 50 : (3 - temp) * 100 + 200 * (temp[0] === 0),
            );
            if (
              await select_yes_or_no(
                [
                  '（对于 ',
                  temp[0].toString(),
                  ' 项能力都强大到极致的 ',
                  aim.get_colored_name(),
                  '，真的要，如此追求进一步的极限吗？）',
                  { isBr: true },
                  '脑海中冒出了这样的问题……',
                ],
                `同意（${temp[1]} 声望，训练加成-10%）`,
                '或许可以暂缓脚步',
              )
            ) {
              attr_names.forEach((e) => {
                era.set(
                  `maxbase:${cur_id}:${e}`,
                  Math.min(2000, era.get(`maxbase:${cur_id}:${e}`) + 100),
                );
                era.add(`cflag:${cur_id}:${e}加成`, -10);
              });
              if (cur_id === 0) {
                await era.printAndWait(
                  '想象着自己挑灯夜战，拟出一份又一份崭新训练书的样子……',
                );
                await era.printAndWait([
                  '在一片黑暗中，隐隐有光芒涌动，缓缓流入 ',
                  me.get_colored_name(),
                  ' 的身体！',
                ]);
                era.println();
                await era.printAndWait('祈祷完毕后，缓缓睁开眼睛……');
                await era.printAndWait([
                  '温暖余韵仍留存于脑海，',
                  me.get_colored_name(),
                  ' 对自己能够进一步成长的事实有了确信。',
                ]);
              } else {
                await era.printAndWait([
                  '想象着身边赛',
                  common_uma_sex_title,
                  '不断超越前人，在赛场上打破纪录的场景……',
                ]);
                await era.printAndWait([
                  '祈祷完毕后，和身边的 ',
                  aim.get_colored_name(),
                  ' 不约而同睁开了眼睛。',
                ]);
                era.println();
                await era.printAndWait([
                  '睁开眼睛的 ',
                  me.get_colored_name(),
                  '，明显察觉到身边 ',
                  aim.get_colored_name(),
                  ' 一举一动表现出的新发展潜力！',
                ]);
              }
              era.add('flag:当前声望', -temp[1]);
              relation += temp[1] / 2;
            } else if (cur_id === 0) {
              await era.printAndWait([
                '回忆着自己和赛',
                common_uma_sex_title,
                '们度过的无数日夜……',
              ]);
              await era.printAndWait('祈祷完毕后，缓缓睁开眼睛。');
            } else {
              await era.printAndWait([
                '回忆着身边 ',
                aim.get_colored_name(),
                ' 每日踏实训练的场景……',
              ]);
              await era.printAndWait([
                '祈祷完毕后，',
                me.get_colored_name(),
                ' 和身边的 ',
                aim.get_colored_name(),
                ' 不约而同睁开了眼睛。',
              ]);
            }
            break;
          case 6:
            if (
              (era.get(`status:${cur_id}:熬夜`) ||
                era.get(`status:${cur_id}:发胖`) ||
                era.get(`status:${cur_id}:偏头痛`) ||
                era.get(`status:${cur_id}:伤病`) ||
                era.get(`status:${cur_id}:疲惫`)) &&
              (await select_yes_or_no(
                [
                  '（果然，最希望的还是……）',
                  { isBr: true },
                  me.get_colored_name(),
                  ' 担忧着 ',
                  aim.get_colored_name(),
                  ' 的健康……',
                ],
                '如果，祈祷会有用的话……',
                '比起祈祷，果然还是更需要其他努力吧……',
              ))
            ) {
              await era.printAndWait([
                '想象着 ',
                aim.get_colored_name(),
                ' 重新变得健康而充满活力的样子……',
              ]);
              await era.printAndWait([
                '祈祷完毕后，',
                me.get_colored_name(),
                ' 睁开了眼睛。',
              ]);
              era.println();
              if (cur_id === 0) {
                await era.printAndWait([
                  '感受着充满活力的身体，',
                  me.get_colored_name(),
                  ' 不禁有点疑惑自己来三女神像前是要做什么？',
                ]);
              } else {
                await era.printAndWait(get_chara_desc(aim, me));
                era.println();
                await era.printAndWait([
                  '方才带着饱含活力的 ',
                  aim.get_colored_name(),
                  ' 来到三女神像面前的 ',
                  me.get_colored_name(),
                  '，到底是要干什么呢？',
                ]);
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 思考着下一步的行动。',
                ]);
              }
              era.set(`base:${cur_id}:体重偏差`, 0);
              era.set(`base:${cur_id}:药物残留`, 0);
              era.set(`base:${cur_id}:压力`, 0);
              era.set(`status:${cur_id}:熬夜`, 0);
              era.set(`status:${cur_id}:发胖`, 0);
              era.set(`status:${cur_id}:偏头痛`, 0);
              era.set(`status:${cur_id}:伤病`, 0);
              era.set(`status:${cur_id}:疲惫`, 0);
              sys_change_motivation(cur_id, 4) && (await era.waitAnyKey());
              era.set(`status:${cur_id}:练习X手`, 1);
              era.add('flag:当前声望', -800);
              relation += 400;
            } else {
              await era.printAndWait([
                '想象着 ',
                aim.get_colored_name(),
                ' 经过休息后状况愈加恢复的样子……',
              ]);
              era.println();
              await god.say_as_unknown_and_wait('你能……做到的……');
              await era.printAndWait('似乎听见这样的声音。');
              era.println();
              await common_finish_pray(aim, me);
              era.println();
              await era.printAndWait('三女神像依然静静矗立着……');
            }
            break;
          case 7:
            switch (god_id) {
              case 340:
                await era.printAndWait([
                  '忍不住像',
                  common_uma_sex_title,
                  '一样在三女神雕像下祈祷了——虽然只是就这么放着不管也没关系的撒娇似的许愿。',
                ]);
                await era.printAndWait([
                  '……是错觉吗？那理应平直地向前看着，朝着远方的女神大人的目光，弯成了好看的弧度向 ',
                  me.get_colored_name(),
                  ' 降下了。',
                ]);
                await era.printAndWait('而且被笑了。');
                break;
              case 341:
                await era.printAndWait(
                  '在祈祷的瞬间，或者说愿望自心底冒出的瞬间。',
                );
                await era.printAndWait(
                  '周遭的世界便沉寂下来，只剩瓶中之水汩汩作响。',
                );
                await era.printAndWait([
                  me.get_colored_name(),
                  ' 闭上双眼，静静感受着包裹着自己的，如某人的怀抱一样温暖的安心感。',
                ]);
                break;
              case 342:
                await era.printAndWait(
                  '微微低头向着三女神的神像祈祷，虽然听起来更像是某种随心而为的撒娇，又或者是明知不可能发生但是却依旧期待着奇迹的自己的调侃。',
                );
                await era.printAndWait([
                  '但是，就在低头的时候，仿佛有人轻轻的从背后抱住了 ',
                  me.get_colored_name(),
                  '，坚实而不容抵抗的在 ',
                  me.get_colored_name(),
                  ' 的耳旁吹起了轻柔的微风，仿佛回应 ',
                  me.get_colored_name(),
                  ' 的祈祷。',
                ]);
                await era.printAndWait([
                  '周遭万籁俱寂，唯有泥土的芬芳湿润感从手中传达到 ',
                  me.get_colored_name(),
                  ' 的脑海之中，睁开眼睛的时候，手指尖那微微的湿润似乎就在告诉 ',
                  me.get_colored_name(),
                  ' 刚刚的一切绝非幻觉。',
                ]);
            }
            life_marks.add('love');
            add_event(
              event_hooks.week_end,
              new EventObject(god_id, cb_enum.love).set_arg(50),
            );
        }
      }
    } else {
      flag_god = -1;
      await era.printAndWait('三女神像静静矗立着……');
      god_id = get_random_entry(
        new Array(3)
          .fill(0)
          .map((_, i) => 340 + i)
          .filter(
            (e) =>
              sys_check_awake(e) &&
              era.get(`cflag:${e}:位置`) === era.get('cflag:0:位置'),
          ),
      );
      if (god_id) {
        god = get_chara_talk(god_id);
        await era.printAndWait([
          me.get_colored_name(),
          ' 突然听到背后有人打招呼……',
        ]);
        await era.printAndWait([
          '回过头才发现 ',
          god.get_colored_name(),
          ' 不知何时已站到了 ',
          me.get_colored_name(),
          ' 身后……',
        ]);
        era.set('flag:当前互动角色', god_id);
      }
    }
  }
  if (relation && sys_like_chara(god_id, 0, relation)) {
    await era.waitAnyKey();
  }
  era.set('flag:当前位置', location_enum.office);
  era.println();
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.god,
  });
};
