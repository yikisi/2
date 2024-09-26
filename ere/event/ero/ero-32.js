/**
 * @file 爱丽速子 - 调教
 *
 * @author 幽白書
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_action_names, ero_hooks } = require('#/data/event/ero-hooks');
const get_participants_and_first_action = require('#/event/ero/snippets/get-participants-and-first-action');

/** @type {Record<string,function>} */
const handlers = {};

[
  require('#/event/ero/ero-lines-32/ero-communications'),
  require('#/event/ero/ero-lines-32/ero-pettings'),
  require('#/event/ero/ero-lines-32/ero-fuckings'),
  require('#/event/ero/ero-lines-32/ero-sm'),
].forEach((f) => f(handlers));

handlers[ero_hooks.ero_start] = require('#/event/ero/ero-lines-32/ero-start');

/**
 * @param _
 * @param {{level:number,name:string,new:boolean}} extra_flag
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
