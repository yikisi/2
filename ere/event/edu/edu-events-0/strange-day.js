/**
 * @file 系列事件 - 奇怪的一天
 * @author 念来过倒要你
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const MyPrivacyEvents = require('#/event/edu/edu-events-0/privacy');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');
const { __ } = require('#/i18n/selector');

module.exports = class extends MyPrivacyEvents {
  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async strange_day(me, _me, _call, hook, _extra, event_object) {
    const tachyon = get_chara_talk(32),
      target =
        get('cflag:32:招募状态') === recruit_flags.yes
          ? tachyon
          : get_chara_talk(
              get_random_entry(
                sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                  (e) => e > 0 && e !== 32 && get(`cflag:${e}:成长阶段`) >= 2,
                ),
              ),
            );
    await print_event_name('可笑しい日（奇怪的一天）', me);
    await printAndWait([
      '早上，',
      me.get_colored_name(),
      ' 感觉有些不太对劲，但仍然打算迎接美满的一天。',
    ]);
    await me.say_and_wait('(ง •̀_•́)ง');
    await printAndWait([
      me.get_colored_name(),
      ' 没有在意那么多，在洗漱完毕后出门了。',
    ]);
    println();
    if (sys_check_npc_working(301)) {
      const tokino = get_chara_talk(301);
      await tokino.say_and_wait('Y(^_^)Y');
      await printAndWait([tokino.sex, '还是一如既往在校门口欢迎每一个人。']);
      println();
    }
    await me.say_and_wait('……？', true);
    await me.say_and_wait('눈_눈');
    await printAndWait([
      me.get_colored_name(),
      ' 感觉有点怪异，却无法说出来。',
    ]);
    println();
    if (target.id !== 58) {
      const dotou = get_chara_talk(58);
      await dotou.say_and_wait('(๑•́ωก̀๑)');
      await printAndWait([dotou.sex, '怎么又哭了？']);
      println();
    }
    if (target.id !== 24) {
      await get_chara_talk(24).say_and_wait('(～0～)');
      await printAndWait('这位小祖宗又熬夜了吧。');
      println();
    }
    if (target.id !== 20) {
      await get_chara_talk(20).say_and_wait('<(*ΦωΦ*)>');
      await printAndWait('……这都是什么表情。');
      println();
    }
    await me.say_and_wait('……！', true);
    await me.say_and_wait('(#ﾟДﾟ)');
    await printAndWait([
      me.get_colored_name(),
      ' 终于注意到，这一路上都没听到一句话，反而是一些颜文字浮现在脑中。',
    ]);
    await me.say_and_wait('……', true);
    await me.say_and_wait('(#`皿´)');
    println();
    if (target.id !== 32) {
      await printAndWait('脑海中浮现某一只天天穿实验服的奸商。');
      await me.say_and_wait('(‡▼益▼)');
      await printAndWait([
        '又是',
        tachyon.sex,
        '做的实验么，',
        me.get_colored_name(),
        ' 打算动身去找',
        tachyon.sex,
        '。',
      ]);
      println();
      await target.say_and_wait('(｢･ω･)｢嘿');
      printButton('「(｢･ω･)｢嘿」', 1);
      printButton('「ヾ(＾。^*)」', 2);
      await input();
      await target.say_and_wait('( •᷄ὤ•᷅)？');
      await printAndWait([
        '看样子好像没有理解 ',
        me.get_colored_name(),
        ' 在干什么。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 向 ',
        target.get_colored_name(),
        ' 伸出了手。',
      ]);
      await target.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
      printButton(`向${target.sex}解释现在的状态。`, 1);
      await input();
      await me.say_and_wait('(´ﾟωﾟ｀)');
      await me.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
      await me.say_and_wait('₍₍◞( •௰• )◟₎₎');
      await printAndWait('手舞足蹈了一会。');
      await me.say_and_wait('╮（╯＿╰）╭');
      println();
      await target.say_and_wait('【•】_【•】');
      await target.say_and_wait('(ノ=Д=)ノ┻━┻');
      println();
      await printAndWait([
        '过了一时半会，',
        target.sex,
        '终于理解了意思，于是陪 ',
        me.get_colored_name(),
        ' 一起去了。',
      ]);
      drawLine();
      await printAndWait(['很快到了', tachyon.sex, '的实验室。']);
      await tachyon.say_and_wait('(¦3[▓▓]');
      await me.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
      await tachyon.say_and_wait('Σ(っ °Д °;)っ');
      await target.say_and_wait('(ಡωಡ)');
      drawLine({ content: '解释了好一会' });
      await tachyon.say_and_wait('(//▽//)');
      await tachyon.say_and_wait('～(￣▽￣～)～');
      await printAndWait([
        '最后，让 ',
        me.get_colored_name(),
        ' 记录了感觉，并给了解药与赔偿。',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 想起了那天天搞实验的爱马。',
      ]);
      await me.say_and_wait('(๑•ี_เ•ี๑)');
      drawLine();
      await printAndWait([
        me.get_colored_name(),
        ' 轻车熟路的找到',
        tachyon.sex,
        '的实验室。',
      ]);
      await tachyon.say_and_wait('⊙▽⊙');
      await me.say_and_wait('(^_^)');
      await tachyon.say_and_wait('Σ(っ °Д °;)っ');
      await printAndWait('爱马TV，堂堂开播！');
      await tachyon.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
      drawLine({ content: '（感谢汤姆老师的配音）' });
      await tachyon.say_and_wait('≥﹏≤');
      await me.say_and_wait('╮（﹀＿﹀）╭');
    }
    println();
    const item = get_random_entry([
      ...new Array(8).fill(0).map((_, i) => i),
      ...new Array(7).fill(0).map((_, i) => i + 10),
    ]);
    await printAndWait(['获得了道具', di18n.tb_item.get_name(item), '！']);
    add(`item:${item}`, 1);
    if (get('flag:极端行为限制') > 0) {
      add_event(hook.hook, event_object.set_arg('strange_day2'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async strange_day2(me, _me, _call, hook, _extra, event_object) {
    const tachyon = get_chara_talk(32),
      target_id = get_random_entry(
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
          (e) =>
            e > 0 &&
            e !== 32 &&
            get(`cflag:${e}:种族`) > 0 &&
            get(`exp:${e}:睡奸次数`) > 0,
        ),
      ),
      is_tachyon_in_team = get('cflag:32:招募状态') === recruit_flags.yes;
    if (
      (is_tachyon_in_team && new TachyonLifeMarks().cook === 0) ||
      target_id === undefined
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const target = get_chara_talk(target_id);
    await print_event_name('可笑しい日（奇怪的一天）2', me);
    await printAndWait([
      me.get_colored_name(),
      ' 照常起来，又发现身体不太对劲。',
    ]);
    await printAndWait([me.get_colored_name(), ' 环顾了四周，发现并无变化。']);
    await printAndWait('只是………手有点痒，想做些什么……');
    let flag_a = true,
      horse_hair = false,
      flag_b = true,
      b_line;
    const check_times_in_a = new Array(6).fill(0),
      check_times_in_b = new Array(2).fill(true);
    const cur_line = getLineCount();
    while (flag_a) {
      printInColRows(
        [
          { content: '那么要调查些什么呢？', type: 'text' },
          { config: { width: 8 }, type: 'divider' },
        ],
        [
          {
            config: { width: 3 },
            content: '墙墙墙墙墙',
            type: 'text',
          },
          {
            accelerator: 1,
            config: { align: 'center', showAcc: false, width: 2 },
            content: '窗',
            type: 'button',
          },
          {
            config: { align: 'right', width: 3 },
            content: '墙墙墙墙墙',
            type: 'text',
          },
        ],
        [
          { config: { width: 5 }, content: '墙', type: 'text' },
          {
            accelerator: 2,
            config: {
              align: 'right',
              disableWarning: true,
              showAcc: false,
              width: 2,
            },
            content: '双双双',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '墙', type: 'text' },
        ],
        [
          { config: { width: 5 }, content: '墙', type: 'text' },
          {
            accelerator: 2,
            config: {
              align: 'right',
              disableWarning: true,
              showAcc: false,
              width: 2,
            },
            content: '人人人',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '墙', type: 'text' },
        ],
        [
          { config: { width: 5 }, content: '墙', type: 'text' },
          {
            accelerator: 2,
            config: {
              align: 'right',
              disableWarning: true,
              showAcc: false,
              width: 2,
            },
            content: '床床床',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '墙', type: 'text' },
        ],
        [
          { config: { width: 6 }, content: '墙', type: 'text' },
          {
            accelerator: 3,
            config: { align: 'right', showAcc: false, width: 1 },
            content: '柜',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '墙', type: 'text' },
        ],
        [
          { config: { width: 1 }, content: '墙', type: 'text' },
          {
            accelerator: 4,
            config: { width: 1, showAcc: false },
            content: '镜',
            type: 'button',
          },
          { config: { align: 'right', width: 6 }, content: '墙', type: 'text' },
        ],
        [
          { config: { width: 7 }, content: '墙', type: 'text' },
          {
            accelerator: 5,
            config: { align: 'right', showAcc: false, width: 1 },
            content: '厕',
            type: 'button',
          },
        ],
        [
          { config: { width: 3 }, content: '墙墙墙墙', type: 'text' },
          {
            accelerator: 6,
            config: { align: 'center', showAcc: false, width: 2 },
            content: '大 门',
            type: 'button',
          },
          {
            config: { align: 'right', width: 3 },
            content: '墙墙墙墙',
            type: 'text',
          },
        ],
        [{ config: { width: 8 }, type: 'divider' }],
      );
      switch (await input()) {
        case 1:
          switch (++check_times_in_a[0]) {
            case 1:
              await printAndWait([me.get_colored_name(), ' 打开了窗户。']);
              await printAndWait('外面鸟儿在歌唱，花儿在绽放。');
              await printAndWait([
                '像 ',
                me.get_colored_name(),
                ' 这样的训练员……应当在家好好睡一天。',
              ]);
              break;
            case 2:
              await printAndWait([
                me.get_colored_name(),
                ' 将窗户关上，隔绝了外面的声音。',
              ]);
              await printAndWait([
                '可惜 ',
                me.get_colored_name(),
                ' 还需要工作，还不能休息。',
              ]);
              break;
            default:
              await printAndWait('开关窗好玩？');
          }
          break;
        case 2:
          switch (++check_times_in_a[1]) {
            case 1:
              await printAndWait('这是一场很大很柔软的床。');
              await printAndWait('……但是为什么要买双人床呢？');
              break;
            case 2:
              await printAndWait('……为什么这里有根马尾毛？');
              await printAndWait([me.get_colored_name(), ' 闻了闻。']);
              await printAndWait('……熟悉的味道。');
              await printAndWait('获得【马尾毛】。');
              horse_hair = true;
              break;
            default:
              await printAndWait([
                '很大很舒服的床……恐怕不止 ',
                me.get_colored_name(),
                ' 感觉舒服。',
              ]);
          }
          break;
        case 3:
          switch (++check_times_in_a[2]) {
            case 1:
              await printAndWait('这是一个床头柜，上面摆着一些珍贵的照片。');
              break;
            case 2:
              await printAndWait([
                me.get_colored_name(),
                ' 翻箱倒柜了一番，什么也没有找到。',
              ]);
              await printAndWait([me.get_colored_name(), ' 好像听到有人问：']);
              await me.say_as_unknown_and_wait('……为什么要在家里翻箱倒柜？');
              await printAndWait('……希望是错觉。');
              break;
            case 3:
              await printAndWait([
                me.get_colored_name(),
                ' 仔细调查了一下……在角落里找到了10马币。',
              ]);
              await printAndWait([
                me.get_colored_name(),
                ' 心满意足的离开了。',
              ]);
              await printAndWait('获得 10 马币。');
              add('flag:当前马币', 10);
              break;
            default:
              await printAndWait('只有一张珍贵的照片。');
          }
          break;
        case 4:
          switch (++check_times_in_a[3]) {
            case 1:
              await printAndWait([
                '这是 ',
                me.get_colored_name(),
                '，平平无奇的脸庞，质朴的徽章，朴素的衣服。',
              ]);
              break;
            case 2:
              await printAndWait(
                '就是一名拥有帅气的脸，优雅的衣服，徽章闪耀的训练员。',
              );
              await printAndWait('……真好看不是么。');
              break;
            case 3:
              await printAndWait([
                '镜中的人实在说不出夸奖的话了，无语地看着 ',
                me.get_colored_name(),
                '。',
              ]);
              await printAndWait('……是不是有种不太对？');
              await printAndWait('眨了一下眼睛，一切平常。');
              break;
            case 4:
              if (target_id === 25 || target_id === 98 || target_id === 400) {
                await printAndWait([
                  me.get_colored_name(),
                  ' 对镜子笑了起来。',
                ]);
                await printAndWait([
                  '镜中的人也突然开始对 ',
                  me.get_colored_name(),
                  ' 笑了起来……',
                ]);
                await printAndWait('……只是幅度太大，裂到了耳后根。');
                await printAndWait([
                  me.sex,
                  ' 开始用手扶住镜框，开始用起了力。',
                ]);
                await printAndWait([me.get_colored_name(), '……吓得不敢动？']);
                await printAndWait([me.sex, ' 的脸越来越大，就快到了眼前。']);
                await printAndWait([
                  '……直到 ',
                  me.sex,
                  ' 看清了 ',
                  me.get_colored_name(),
                  ' 的脸。',
                ]);
                await printAndWait(['……', me.sex, ' 逃走了。']);
                await printAndWait('现在镜中空无一物。');
                await printAndWait([me.get_colored_name(), ' 打了个哈欠。']);
              } else {
                await printAndWait(['这是 ', me.get_colored_name(), '。']);
              }
              break;
            default:
              if (target_id === 25 || target_id === 98 || target_id === 400) {
                await printAndWait('镜中什么也没有……不知道什么时候回来。');
                await printAndWait([
                  me.get_colored_name(),
                  ' 还想整理下自己呢。',
                ]);
              } else {
                await printAndWait(['这是 ', me.get_colored_name(), '。']);
              }
          }
          break;
        case 5:
          flag_b = true;
          await printAndWait([
            me.get_colored_name(),
            ' 推开了厕所门，进入了厕所里。',
          ]);
          b_line = getLineCount();
          while (flag_b) {
            printInColRows(
              [
                {
                  content: [
                    me.get_colored_name(),
                    ' 俯视四周，要从哪里开始呢？',
                  ],
                  type: 'text',
                },
                { config: { width: 6 }, type: 'divider' },
              ],
              [
                { config: { width: 3 }, content: '墙墙墙墙', type: 'text' },
                {
                  config: { align: 'right', width: 3 },
                  content: '墙墙墙墙',
                  type: 'text',
                },
              ],
              [
                { config: { width: 1 }, content: '墙', type: 'text' },
                {
                  accelerator: 1,
                  config: { width: 2, showAcc: false },
                  content: '马桶',
                  type: 'button',
                },
                {
                  config: { align: 'right', width: 3 },
                  content: '墙',
                  type: 'text',
                },
              ],
              [
                { config: { width: 3 }, content: '墙', type: 'text' },
                {
                  accelerator: 2,
                  config: { align: 'right', width: 2, showAcc: false },
                  content: '浴缸',
                  type: 'button',
                },
                {
                  config: { align: 'right', width: 1 },
                  content: '墙',
                  type: 'text',
                },
              ],
              [
                {
                  accelerator: 3,
                  config: { width: 3, showAcc: false },
                  content: '厅',
                  type: 'button',
                },
                {
                  config: { align: 'right', width: 3 },
                  content: '墙',
                  type: 'text',
                },
              ],
              [
                { config: { width: 3 }, content: '墙墙墙墙', type: 'text' },
                {
                  config: { align: 'right', width: 3 },
                  content: '墙墙墙墙',
                  type: 'text',
                },
              ],
              [{ config: { width: 6 }, type: 'divider' }],
            );
            switch (await input()) {
              case 1:
                if (check_times_in_b[0]) {
                  await printAndWait([
                    me.get_colored_name(),
                    ' 感觉有人在盯着自己……环顾四周没人。',
                  ]);
                  if (
                    await select_yes_or_no(
                      '感觉有一股尿意，要上吗？',
                      '上',
                      '不了',
                    )
                  ) {
                    await printAndWait([
                      '……是错觉吗？',
                      me.get_colored_name(),
                      ' 感觉马桶在说话。',
                    ]);
                    await printAndWait('……');
                    await printAndWait('……');
                    await printAndWait([
                      me.get_colored_name(),
                      ' 隐约听到它说：',
                    ]);
                    await me.say_as_unknown_and_wait('呜呜呜……我不干净了……');
                    await me.say_and_wait('……错觉吧。', true);
                    check_times_in_b[0] = false;
                  }
                } else {
                  await printAndWait('马桶好像在哭泣……以后给它道个歉吧。');
                }
                break;
              case 2:
                if (check_times_in_b[1]) {
                  await printAndWait('这是一个浴缸，在里面很舒服。');
                  check_times_in_b[1] = false;
                } else {
                  await printAndWait([
                    me.get_colored_name(),
                    ' 好像隐隐听到：',
                  ]);
                  await me.say_as_unknown_and_wait(
                    '别调查了，我只是为了防止厕所太空放所放置的。',
                  );
                  await printAndWait('……真的很奇妙。');
                }
                break;
              case 3:
                flag_b = false;
            }
            await clear(getLineCount() - b_line);
          }
          break;
        case 6:
          flag_a = false;
      }
      await clear(getLineCount() - cur_line);
    }
    drawLine();
    await printAndWait('推开大门，不知为什么今天出门格外得迟。');
    await printAndWait('看了一眼时间，已经快迟到了。');
    if (horse_hair) {
      await printAndWait([
        me.get_colored_name(),
        ' 看了一眼大门，思索着要不要换一个。',
      ]);
      await say_by_passer_by_and_wait('门', '不关 我事。');
      await me.say_and_wait('……现在连装都不装一下？', true);
    }
    println();
    await printAndWait([me.get_colored_name(), ' 来到了大街上。']);
    await printAndWait([
      me.get_colored_name(),
      ' 觉得自己又被 ',
      tachyon.get_colored_name(),
      ' 下药了。',
    ]);
    await printAndWait('这次的药效是什么？');
    print(
      [
        { content: ' ', isDivider: true },
        '房房房房房房房房房房房房',
        { isBr: 2 },
        '你',
        ...new Array(8).fill(undefined).map(() => ({ isBlank: true })),
        '面包',
        ...new Array(2).fill(undefined).map(() => ({ isBlank: true })),
        target.get_colored_name(),
        { isBr: 2 },
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '树',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '树',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '树',
        { content: ' ', isDivider: true },
      ],
      { width: 8 },
    );
    await printAndWait([
      me.get_colored_name(),
      ' 与蓄谋已久的 ',
      target.get_colored_name(),
      ' 相遇了！',
    ]);
    await select_yes_or_no('距离很近，要做些什么？', '逃跑', '冷静应对');
    await printAndWait([
      '……',
      target.sex,
      ' 已经盯上了 ',
      me.get_colored_name(),
      '，无论做什么都无济于事！',
    ]);
    print(
      [
        { content: ' ', isDivider: true },
        '房房房房房房房房房房房房',
        { isBr: 2 },
        '你',
        ...new Array(2).fill(undefined).map(() => ({ isBlank: true })),
        target.get_colored_name(),
        { isBr: true },
        ...new Array(4).fill(undefined).map(() => ({ isBlank: true })),
        '面包',
        { isBr: true },
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '树',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '树',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '树',
        { content: ' ', isDivider: true },
      ],
      { width: 8 },
    );
    await printAndWait([
      target.sex,
      ' 扑到了 ',
      me.get_colored_name(),
      ' 身上。',
    ]);
    await target.say_and_wait([
      '对不起，',
      sys_get_colored_callname(target_id, 0),
      '！我是不小心的！',
    ]);
    await target.say_and_wait('我快迟到了才跑这么快。');
    await target.say_and_wait('香香的，好想现在就……不行不行，再忍一会……', true);
    await printAndWait('嘴上这么说的，身体却没有移动。');
    await me.say_and_wait('没事，小心就好。');
    await printAndWait([
      me.get_colored_name(),
      ' 看着眼前已经开始闻起 ',
      me.get_colored_name(),
      ' 气味的',
      target.uma_sex_title,
      '，心中恶趣味顿起。',
    ]);
    await printAndWait([
      me.get_colored_name(),
      ' 向',
      target.sex,
      '说出了现在的情况。',
    ]);
    await printAndWait([target.sex, ' 满脸通红。']);
    await target.say_and_wait('……');
    await target.say_and_wait('所以说我现在想的话……？', true);
    await target.say_and_wait('……呀，要迟到了，我先走了……');
    await printAndWait([target.sex, ' 头也不回的跑开了。']);
    await me.say_and_wait('真可爱呀。');
    if (horse_hair) {
      await say_by_passer_by_and_wait(
        '马尾毛',
        '确实很可爱，希望你以后也这么觉得。',
      );
      await me.say_and_wait('？？？');
    }
    drawLine();
    await printAndWait([
      me.get_colored_name(),
      ' 来到了 ',
      tachyon.get_colored_name(),
      ' 的实验室。',
    ]);
    if (is_tachyon_in_team) {
      await printAndWait([tachyon.sex, '背着身，坐在一个……白色塑料椅上？']);
      await tachyon.say_and_wait('你不应该来的。');
      await me.say_and_wait('你又给我喂了什么？快给我解药。');
      await tachyon.say_and_wait('我们期间打过多少次了？');
      await me.say_and_wait('……');
      await tachyon.say_and_wait('想要的话，自己来拿。');
      await me.say_and_wait('再玩梗的话断了你的午饭。');
      await printAndWait([tachyon.get_colored_name(), ' 光速滑跪。']);
      await printAndWait([
        tachyon.sex,
        ' 抱着 ',
        me.get_colored_name(),
        ' 的大腿，心里暗自期待。',
      ]);
      await tachyon.say_and_wait([
        '呜呜呜，不要啊，',
        sys_get_colored_callname(32, 0),
        '。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 向着解药走去，不小心用脚踢到了',
        tachyon.sex,
        '。',
      ]);
      await printAndWait([tachyon.sex, ' 内心十分酸爽。']);
      await tachyon.say_and_wait('好痛啊，呜呜。');
      await printAndWait([
        '……',
        me.get_colored_name(),
        ' 觉得这个解药不喝不行。',
      ]);
      await printAndWait([
        '一饮而尽，世界重新变得安静，',
        me.get_colored_name(),
        ' 再也没有想去调查周围一切的欲望。',
      ]);
      await tachyon.say_and_wait('……喝了？……给我也来一瓶。');
      await printAndWait([
        '看着',
        tachyon.sex,
        '满脸失望的样子，',
        me.get_colored_name(),
        ' 确定要重启一下爱马TV了。',
      ]);
      await me.say_and_wait('……');
      await tachyon.say_and_wait('唉？⊙▽⊙');
      await tachyon.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
      drawLine({ content: '（感谢汤姆老师的配音）' });
      sys_like_chara(32, 0, get_random_value(100, 150));
      add_jewel_reward(32, '顺从', 200);
    } else {
      await printAndWait([
        tachyon.sex,
        ' 正坐在椅子上，好像已经知道 ',
        me.get_colored_name(),
        ' 会到来。',
      ]);
      await printAndWait('空气竟一时间有点安静。');
      await me.say_and_wait('闭口不说话，装高手？');
      await tachyon.say_and_wait('不需要说话，不是吗？', true);
      await me.say_and_wait('？');
      await tachyon.say_and_wait('看这表情应该是成功了。', true);
      await tachyon.say_and_wait('这是我最近研发的，异体同心药水。', true);
      await tachyon.say_and_wait('效果不错，你先别急着打，给，这个是解药。');
      await printAndWait([
        tachyon.sex,
        ' 指了指旁边的填表图，以及旁边的药水。',
      ]);
      await printAndWait([
        '一饮而尽，世界重新变得安静，',
        me.get_colored_name(),
        ' 再也没有想去调查周围一切的欲望。',
      ]);
      await printAndWait('虽说如此，那还是感觉越想越气。');
      const med_list = get('itemkeys').filter(
        (e) => e < 25 && get(`itemprice:${e}`) >= 500,
      );
      print('\n获得了几瓶比较贵的药水：');
      let total = 5;
      for (let i = 0; i < med_list.length; ++i) {
        const iid = med_list[i];
        const count =
          i === med_list.length - 1 ? total : get_random_value(0, total);
        if (count > 0) {
          total -= count;
          print(`· ${__(`tb_item.${iid}`)} × ${count}`);
          add(`item:${iid}`, count);
        }
      }
      await waitAnyKey();
    }
  }
};
