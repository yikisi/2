/**
 * @file 爱丽速子 - 调教
 *
 * @author 幽白書
 * @author Necroz
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { part_enum } = require('#/data/ero/part-const');
const { ero_action_names, ero_hooks } = require('#/data/event/ero-hooks');

/** @type {Record<string,function>} */
const handlers = {};

[
  require('#/event/ero/ero-lines-32/ero-communications'),
  require('#/event/ero/ero-lines-32/ero-pettings'),
  require('#/event/ero/ero-lines-32/ero-fuckings'),
  require('#/event/ero/ero-lines-32/ero-sm'),
  require('#/event/ero/ero-lines-32/ero-items'),
].forEach((f) => f(handlers));

handlers[ero_hooks.ero_start] = require('#/event/ero/ero-lines-32/ero-start');

handlers[ero_hooks.orgasm] = async () => {
  const penis_touched_part = era.get('tcvar:0:阴茎接触部位');
  if (
    sys_check_awake(32) &&
    era.get('tflag:强奸') !== 0 &&
    penis_touched_part.owner === 32
  ) {
    const tachyon = get_chara_talk(32),
      me = get_chara_talk(0),
      last_action = era.get('tflag:前回行动'),
      other_action = era.get('tflag:对手行动'),
      master = era.get('tflag:主导权');
    if (
      penis_touched_part.part === part_enum.mouth &&
      era.get('nowex:0:阴茎高潮') > 0 &&
      era.get('nowex:32:饮精量') > 0
    ) {
      if (
        (master === 0 && last_action === ero_hooks.ask_tit_and_blow_job) ||
        (master === 32 && other_action === ero_hooks.tit_and_blow_job)
      ) {
        await tachyon.say_and_wait('啾❤️咕啾❤️啾噜❤️');
        era.println();
        await era.printAndWait([
          '射出的精液灌入了 ',
          tachyon.get_colored_name(),
          ' 的喉咙。',
        ]);
        await era.printAndWait([
          '但过多的射精量仍然超过了 ',
          tachyon.get_colored_name(),
          ' 一次所能喝下的量。',
        ]);
        await era.printAndWait([
          '白色的精液从嘴角流淌落在乳房上，',
          tachyon.get_colored_name(),
          ' 慌忙单手捧起胸肉，将滴落的精液再度揽回口中。',
        ]);
        era.println();
        await tachyon.say_and_wait('啾❤️啾噜❤️');
        await tachyon.say_and_wait('还有……');
        await tachyon.say_and_wait([
          '这些可都是 ',
          sys_get_callname(32, 0),
          ' 重要的因子❤️不能浪费啊❤️',
        ]);
        era.println();
        await era.printAndWait([
          '才舔完自己身上的，',
          tachyon.get_colored_name(),
          ' 又盯上了还处在余韵中的肉棒。',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '用力吸吮了一口，将剩余的精液从竿内吸吮出来。',
        ]);
        era.println();
        await tachyon.say_and_wait('这样……就干净了呢❤️');
        era.println();
        await era.printAndWait([
          '将收集到的精液聚集在口中，给你看清后，',
          tachyon.get_colored_name(),
          ' 才慢悠悠的将白浆喝下。',
        ]);
        await era.printAndWait([
          '喉咙色情的上下滚动，仿佛要让 ',
          me.get_colored_name(),
          ' 看清吞咽的全过程一般。',
        ]);
        era.println();
        await tachyon.say_and_wait('哈啊……又空了呢❤️不多射点，进来吗❤️');
      } else if (
        master === 0 &&
        last_action === ero_hooks.force_deep_blow_job
      ) {
        await tachyon.say_and_wait('嗯呜呜呜❤️嗯唔❤️唔咕❤️');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 用力按住了 ',
          tachyon.get_colored_name(),
          ' 的头。',
        ]);
        await era.printAndWait([
          '将龟头死死顶进 ',
          tachyon.get_colored_name(),
          ' 的喉咙深处开始射精。',
        ]);
        await era.printAndWait([
          '直到射精结束 ',
          me.get_colored_name(),
          ' 也依然用肉棒堵着，好确保自己的精液深深浸入到 ',
          tachyon.get_colored_name(),
          ' 胃道的每个角落。',
        ]);
        era.println();
        await era.printAndWait([
          '似乎是因为缺氧，在肉棒抽出后 ',
          tachyon.get_colored_name(),
          ' 的表情看上去有些呆滞。',
        ]);
        await era.printAndWait(
          '但依然下意识的将嘴边的白色浆液和弯曲毛发吞入口中……',
        );
      } else if (
        (master !== 0 || last_action !== ero_hooks.ask_deep_blow_job) &&
        (master !== 32 || other_action !== ero_hooks.deep_blow_job)
      ) {
        await tachyon.say_and_wait('嗯……咕嘟……咕噜……');
        era.println();
        if (Math.random() < 0.5) {
          await era.printAndWait('仿佛等这一刻等了许久。');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 一口接一口，欣喜的将射出的白浆全数喝了下去。',
          ]);
          era.println();
          await tachyon.say_and_wait('噗哈……');
          era.println();
          await era.printAndWait('张开的口舌中，却还有一点白丝残留。');
          await era.printAndWait([
            '只见 ',
            tachyon.get_colored_name(),
            ' 就这么张着嘴，用舌头将口内的精液全数聚集在一起。',
          ]);
          await era.printAndWait('然后再次咽下。');
          era.println();
          await tachyon.say_and_wait('多谢款待❤️');
        } else {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 在 ',
            me.get_colored_name(),
            ' 面前伸出舌头，展示着自己榨出的大量精液。',
          ]);
          await era.printAndWait([
            '那总是自信自傲的脸庞，被白浊液体玷污的模样，煽动着 ',
            me.get_colored_name(),
            ' 内心的欲望。',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '这就是，',
            sys_get_callname(32, 0),
            ' 的因子呢……要是用在实验的话……',
          ]);
          era.println();
          await era.printAndWait('虽然这么说着，但在口中把玩了一会后……');
          era.println();
          await tachyon.say_and_wait('咕啾……咕啾……噗哈❤️');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 对着 ',
            me.get_colored_name(),
            ' 张开了已经空无一物的小口。',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '通通喝下去了呢……这样只好，再来一次了不是吗❤️',
          );
        }
      }
    } else if (
      penis_touched_part.part === part_enum.breast &&
      era.get('nowex:0:阴茎高潮') > 0
    ) {
      await tachyon.say_and_wait('好浓……❤️');
      await tachyon.say_and_wait([
        '全部都涂在脸上……满满的 ',
        sys_get_colored_callname(32, 0),
        ' 的味道❤️',
      ]);
      era.println();
      await era.printAndWait('浓浓的浆液顺着脸庞流到胸部上。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 先将脸庞上沾满的精液擦拭干净聚集在手上。',
      ]);
      await era.printAndWait('却好似不小心漏掉了胸部上的痕迹一般。');
      await era.printAndWait([
        '赤裸的乳肉上，满是 ',
        me.get_colored_name(),
        ' 射出的腥臭白浆。',
      ]);
      era.println();
      await tachyon.say_and_wait('哎呀……居然忘了呢❤️');
      era.println();
      await era.printAndWait([
        '看见 ',
        me.get_colored_name(),
        ' 的目光都被吸引在胸上。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 才发出明显的，刻意且做作的惊呼。',
      ]);
      await era.printAndWait('将胸上的白浆层层抹去，放入口中。');
      era.println();
      await tachyon.say_and_wait('啾……啾噜❤️多谢款待❤️');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '吸了吸手指，张开嘴，露出已经干净的舌唇表示没有遗漏。',
      ]);
    } else if (
      penis_touched_part.part === part_enum.clitoris &&
      era.get('nowex:32:外阴高潮') + era.get('nowex:32:阴道高潮') > 0
    ) {
      await tachyon.say_and_wait('去了……要去了❤️');
      await tachyon.say_and_wait([
        '要变成 ',
        sys_get_callname(32, 0),
        ' 专属的小母狗了喔喔喔喔❤️',
      ]);
    } else if (
      penis_touched_part.part === part_enum.virgin &&
      era.get('nowex:0:阴茎高潮') > 0 &&
      era.get('nowex:32:膣内精液') > 0 &&
      !master
    ) {
      if (last_action === ero_hooks.missionary) {
        await era.printAndWait([
          '将总是占据主动的 ',
          tachyon.get_colored_name(),
          ' 压在身下进行侵犯的行为，使 ',
          me.get_colored_name(),
          ' 的射精欲望越发高涨。',
        ]);
        era.println();
        await tachyon.say_and_wait('啊❤️啊嗯❤️豚鼠君❤️');
        await tachyon.say_and_wait('小穴……小穴里面❤️好舒服❤️');
        era.println();
        await me.say_and_wait('要出来了……');
        await era.printAndWait([me.get_colored_name(), ' 低吼一声']);
        await era.printAndWait('嘟咕❤️嘟咕❤️咕咻噜噜❤️');
        era.println();
        await era.printAndWait(
          '随着肉棒的拔出，射在腔内的浓郁白浆缓缓流了出来……',
        );
      } else if (
        last_action === ero_hooks.doggy_style ||
        last_action === ero_hooks.hug_standing
      ) {
        await tachyon.say_and_wait('哈啊……嗯啊……喔……呜喔喔喔喔❤️');
        await tachyon.say_and_wait('像野兽一样被中出了喔喔喔喔❤️❤️❤️');
        await tachyon.say_and_wait(
          '要失去理智了❤️要变成脑袋里只有肉棒和精液的野兽了❤️❤️❤️',
        );
        era.println();
        await era.printAndWait('安产体型的屁股，充分起到了缓冲的作用。');
        await era.printAndWait('每当肉棒冲击子宫口，爱液便会喷涌而出。');
        await era.printAndWait('整个小穴一阵一阵的刺激着肉棒。');
        await era.printAndWait(
          '不久后，龟头压着子宫口，将精液注入了子宫内部。',
        );
        await era.printAndWait('biu～biu～biu～');
        await era.printAndWait('漫长的播种看来还需要一些时间完结。');
      }
    } else if (
      penis_touched_part.part === part_enum.anal &&
      era.get('nowex:0:阴茎高潮') > 0 &&
      era.get('nowex:32:肠内精液') > 0 &&
      !master &&
      last_action === ero_hooks.missionary_anal_sex
    ) {
      await tachyon.say_and_wait('去了……去了去了去了！');
      await tachyon.say_and_wait('用肛门，用屁穴去了喔喔喔喔喔❤️');
      if (tachyon.sex_code !== 1) {
        era.println();
        await era.printAndWait(
          '被用力抽插了几下后，空荡的小穴涌出了一股又一股的潮水。',
        );
        await era.printAndWait(
          '无论是喷溅在自己身上的，还是从穴内缓缓流出的，都汇聚到了两人正连接着的器官，继续作为抽插的润滑剂以供使用。',
        );
        era.println();
        await me.say_and_wait('真是方便的性处理用具啊，还自带润滑功能。');
        await era.printAndWait([
          '听见 ',
          me.get_colored_name(),
          ' 的玩笑话，',
          tachyon.get_colored_name(),
          ' 想用力的夹一下肉棒来表达不满，却发现完全脱力的身体连这点事都做不到，不仅如此，小穴在这样的挤压刺激下又浅浅的小高潮了一次。',
        ]);
      }
    }
  }
};

/**
 * @param _
 * @param {GetMarkParams} extra_flag
 */
handlers[ero_hooks.get_mark] = async (_, extra_flag) => {
  if (!sys_check_awake(32) || extra_flag.name === '淫纹') {
    throw new Error();
  }
  const callname = sys_get_colored_callname(32, 0),
    love = era.get('love:32'),
    tachyon = get_chara_talk(32);
  switch (extra_flag.name) {
    case '欢愉':
      switch (extra_flag.level) {
        case 1:
          if (love < 75) {
            await tachyon.say_and_wait(
              '唔……热热痒痒的……身体有点难受……是药的副作用吗？',
            );
          } else {
            await tachyon.say_and_wait('嗯……热热痒痒的……');
            await tachyon.say_and_wait(
              '不，没有不舒服……唔……试试看，多做点吧……感觉，有些不可思议……',
            );
          }
          break;
        case 2:
          if (love < 75) {
            await tachyon.say_and_wait(
              '不行……明明只是激素作用……只是，身体正常反应……可是，可是……为什么……这么舒服……',
            );
          } else {
            await tachyon.say_and_wait(
              '等等……里面还没缓过来……要是，要是更舒服的话……咿！',
            );
            await tachyon.say_and_wait(
              '不行，明明知道不能继续下去，可是身体自己……脑袋……无法思考',
            );
          }
          break;
        case 3:
          if (love < 75) {
            await tachyon.say_and_wait([
              '已经……不能再思考了……好舒服……更多……还要更多，',
              callname,
              '……给我……我还要……',
            ]);
          } else {
            await tachyon.say_and_wait([callname, '❤️', callname, '❤️']);
            await tachyon.say_and_wait(
              '更多……给我更多……从里到外把我完全填满……❤️',
            );
            await tachyon.say_and_wait(
              '是你把我变成这样的……所以，还想要更多❤️让我聪明的脑袋再也无法思考肉体交合以外的东西❤️',
            );
          }
      }
      break;
    case '同心':
      switch (extra_flag.level) {
        case 1:
          if (love < 75) {
            await tachyon.say_and_wait(
              '偶尔放空思考，任人摆布……某种意义上或许也是种舒压的方法？',
              true,
            );
            await tachyon.say_and_wait([callname, '………………不对，我在想什么！']);
          } else {
            await tachyon.say_and_wait([
              '嗯❤️嗯啊❤️',
              callname,
              '❤️等等……停，停一下❤️',
            ]);
            await tachyon.say_and_wait('哈啊……哈啊……');
            await tachyon.say_and_wait(
              '明明……按我说的停下来了，为什么身体还是觉得有点奇怪呢……',
              true,
            );
            await tachyon.say_and_wait(
              [
                '仿佛……我在希望 ',
                callname,
                ' 能够无视我说的话……继续……把我弄到不省人事……………到底在想什么东西啊我！',
              ],
              true,
            );
          }
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 忽然疯狂的摇晃起头来',
          ]);
          break;
        case 2:
          if (love < 75) {
            await tachyon.say_and_wait(['等等……', callname, '……不要那么……']);
            await tachyon.say_and_wait(`不，为什么更激烈了……！`);
            await tachyon.say_and_wait([
              '咕……明明只是 ',
              callname,
              '……明明应该听我的命令的……',
            ]);
            await tachyon.say_and_wait(
              '为什么……身体却觉得比之前更舒服了……难道我是什么被虐狂吗……',
              true,
            );
          } else {
            await tachyon.say_and_wait([
              '唔嗯……',
              callname,
              '，等一下……太用力……咿❤️',
            ]);
            await tachyon.say_and_wait('讨厌……………不，也没有……');
            await tachyon.say_and_wait('等！又忽然这么……嗯啊❤️❤️');
            await tachyon.say_and_wait(['都说住手了……', callname, ' 你啊，唉']);
            await tachyon.say_and_wait('明明……支配权应该在我手上的啊', true);
            await tachyon.say_and_wait('为什么，我却反过来……想被支配……', true);
            await tachyon.say_and_wait('不妙……真的不妙啊❤️', true);
          }
          break;
        case 3:
          await tachyon.say_and_wait(
            '放弃思考，完全成为某人的俘虏居然是这么舒服的事情……',
            true,
          );
          await tachyon.say_and_wait('啊啊……之前的自己到底在抵抗什么呢', true);
          await tachyon.say_and_wait([
            callname,
            '……不，主人……大人……给我，还想要更多……❤️',
          ]);
          await tachyon.say_and_wait(
            '没关系的……这只是……只是……增加情趣的玩法',
            true,
          );
          await tachyon.say_and_wait('结束之后就恢复正常了……对……所以……', true);
          await tachyon.say_and_wait('请再……给我更多命令吧……❤️');
          era.set('callname:32:0', [callname.content, '主人大人']);
      }
      break;
    case '苦痛':
      switch (extra_flag.level) {
        case 1:
          if (love < 75) {
            await tachyon.say_and_wait([
              '好痛！？居然对主人做出这种事来，',
              callname,
              ' 你在想什么！',
            ]);
          } else {
            await tachyon.say_and_wait([
              '好痛！？',
              callname,
              '……可以不要那么粗鲁吗？',
            ]);
          }
          break;
        case 2:
          if (love < 75) {
            await tachyon.say_and_wait('不要……住手！好痛……不要再弄了！');
          } else {
            await tachyon.say_and_wait([
              callname,
              '！？是，是我哪里做错了吗……为什么，为什么要这样对我……',
            ]);
          }
          break;
        case 3:
          if (love < 75) {
            await tachyon.say_and_wait(
              '好痛……好可怕……对不起……是我不好……是我不好……不要再弄了……好痛，好痛……',
            );
          } else {
            await tachyon.say_and_wait([
              '好痛……',
              callname,
              '……为什么……为什么要这样对我……我不理解……',
            ]);
            await tachyon.say_and_wait(
              '这就是爱吗？为什么要这样对待自己的爱人……我不懂啊……',
            );
          }
      }
      break;
    case '羞耻':
      switch (extra_flag.level) {
        case 1:
          await tachyon.say_and_wait('这种事……也太让人害羞了', true);
          await tachyon.say_and_wait(
            '平常心……平常心……当成实验就好，嗯，实验',
            true,
          );
          break;
        case 2:
          await tachyon.say_and_wait(
            '不行了……已经无法用实验来蒙混过去了',
            true,
          );
          await tachyon.say_and_wait(
            '即便是我，也是社会的一部分啊……也是会因为这种事而感到羞耻啊',
            true,
          );
          await tachyon.say_and_wait(
            '咕……但是……为什么会感到舒服啊……我的身体到底怎么了……',
            true,
          );
          break;
        case 3:
          await tachyon.say_and_wait('哈哈……啊哈哈……', true);
          await tachyon.say_and_wait(
            '就算身为疯狂科学家，没有在乎过他人的看法……我也从来没想过居然有一天自己会变成这样',
            true,
          );
          await tachyon.say_and_wait(
            '来吧，怎样都好了……已经，放弃思考了……',
            true,
          );
      }
      break;
    case '反抗':
      switch (extra_flag.level) {
        case 1:
          if (love < 50) {
            await tachyon.say_and_wait('………我的忍耐是有极限的。');
            await tachyon.say_and_wait(['不要挑战我的极限，', callname, '。']);
          } else {
            await tachyon.say_and_wait([callname, '……？']);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 愣着神，就仿佛被自己最亲密信赖的人甩了一巴掌一般。',
            ]);
            await era.printAndWait('比起愤怒，更多的是错愕和不敢置信。');
          }
          break;
        case 2:
          if (love < 50) {
            await tachyon.say_and_wait('我警告过你了。');
            await tachyon.say_and_wait('事不过三。');
          } else {
            await tachyon.say_and_wait([
              '为什么……',
              callname,
              '……是我哪里做错了吗？',
            ]);
            await tachyon.say_and_wait([
              '是我做错了吧……告诉我，',
              callname,
              '……',
            ]);
            await tachyon.say_and_wait(
              '不然的话……不然的话……我无法理解啊……为什么你要做出这种事来！',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 万番悲痛的看着 ',
              get_chara_talk(0).get_colored_name(),
              '，心中满是不解和怀疑。',
            ]);
            await era.printAndWait([
              '对 ',
              get_chara_talk(0).get_colored_name(),
              ' 的不解，对自己的怀疑。',
            ]);
          }
          break;
        case 3:
          if (love < 50) {
            await era.printAndWait([
              '瞬间，一股灼烧感通过 ',
              get_chara_talk(0).get_colored_name(),
              ' 的喉咙逆流而出。',
            ]);
            await era.printAndWait([
              get_chara_talk(0).get_colored_name(),
              ' 忍不住咳了几声，并惊恐的发现地上的液体带有几缕血丝。',
            ]);
            await tachyon.say_and_wait(['这是第三次了，', callname, '。']);
            await tachyon.say_and_wait(
              '你应该感谢……你自己在名义上是我的实验动物。',
            );
            await tachyon.say_and_wait(
              '而我的主张是不会浪费可利用的实验体，所以感谢你自己还有那么点利用价值吧……平常心……当成实验就好，嗯，实验。',
            );
            await tachyon.say_and_wait(
              '不过……我能保证就算当实验品，也绝对能让你生不如死。',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 的眼中带着厌恶及憎恶的情绪。',
            ]);
          } else {
            await tachyon.say_and_wait('啊啊……够了。');
            await tachyon.say_and_wait('已经够了。');
            await era.printAndWait('红色的百叶窗，彻底关上。');
          }
      }
  }
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  if (ero_action_names[hook.hook]) {
    const { attacker, defender } = get_participants_and_first_action(
      32,
      hook,
      extra_flag,
    );
    if (era.get('tflag:强奸') >= 0 || !sys_check_awake(defender)) {
      throw new Error();
    }
    return await handlers[hook.hook](
      get_chara_talk(attacker),
      get_chara_talk(defender),
      hook,
      extra_flag,
    );
  }
  return await handlers[hook.hook](hook, extra_flag);
};
