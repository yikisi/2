const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @param {HookArg} hook */
module.exports = async function (hook) {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    me = get_chara_talk(0),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32);
  hook.arg = await select_action_in_station(32);
  switch (hook.arg) {
    case 0:
      if (new TachyonLifeMarks().cook < 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait(
            '……难吃，全是料理包预制菜，调味全靠香精和化学药剂，你是嫌平常喝的药还不够多吗？竟然让我吃这种东西',
          );
          await era.printAndWait([
            '菜一上来就被 ',
            tachyon.get_colored_name(),
            ' 从头批评到尾，原本想说带',
            tachyon.sex,
            '出来散散心的，这下不是让',
            tachyon.sex,
            '心情更差了吗。',
          ]);
          await tachyon.say_and_wait('不过……这个甜点倒是不错');
          await era.printAndWait('欸……那个甜到牙痛的布丁？真的假的');
          await era.printAndWait([
            me.get_colored_name(),
            ' 似乎有些察觉 ',
            tachyon.get_colored_name(),
            ' 的口味了',
          ]);
        });
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([
              '我说 ',
              callname,
              '……你带我出来吃饭我是挺感激的，但特意出来吃做的连你都不如的菜到底有什么意义？',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 困惑的看着 ',
              me.get_colored_name(),
            ]);
          },
          async () => {
            await tachyon.say_and_wait([
              '味道不错，不过比起 ',
              callname,
              ' 做的总觉得……缺了些什么……嗯，没错，不够甜',
            ]);
            await tachyon.say_and_wait([
              '什么叫再吃糖要糖尿病了，别担心别担心，',
              tachyon.uma_sex_title,
              '的代谢能力会想办法的',
            ]);
          },
          async () => {
            await era.printAndWait(
              '红烧肉、糖醋排骨、和果子、加满致死量砂糖的红茶，最后收尾是蜂蜜布丁',
            );
            await tachyon.say_and_wait([callname, '？你不吃吗？']);
            await me.say_and_wait('……看着就牙痛，还是算了');
          },
        );
      }
      break;
    case 1:
      if (era.get('love:32') >= 50 && !edu_marks.station) {
        edu_marks.station = 1;
        await print_event_name('拆台', tachyon);
        await era.printAndWait([
          '今天是 ',
          me.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 一起出门约会的日子',
        ]);
        await era.printAndWait([
          '据说今天的商店街有魔术游行，所以原本是希望带',
          tachyon.sex,
          '来顺便看看热闹的',
        ]);
        await era.printAndWait('然而……');
        era.println();
        await tachyon.say_and_wait('那个魔术棒在他袖子里');
        await tachyon.say_and_wait('那只鸽子前面都藏在夹层里，没什么大不了的');
        await tachyon.say_and_wait(
          '不过是镁的氧化燃烧而已，在实验室我也能做给你看',
        );
        era.println();
        await era.printAndWait([
          '每次魔术的手法都会瞬间被 ',
          tachyon.get_colored_name(),
          ' 用不大不小，但却足以让人听清的音量揭穿',
        ]);
        await era.printAndWait([
          '如果说是觉得无聊也就算了，偏偏每次说完后都会热烈的盯着 ',
          me.get_colored_name(),
          '，仿佛希望得到夸奖一般',
        ]);
        await era.printAndWait([
          '是什么想要得到夸奖的小狗吗……',
          me.get_colored_name(),
          ' 将脑袋里浮现的画面甩出脑袋',
        ]);
        await era.printAndWait([
          '总之，在瞪视着自己二人的魔术师受不了冲下台打人前先带着 ',
          tachyon.get_colored_name(),
          ' 离开吧',
        ]);
        era.println();
        await tachyon.say_and_wait('欸～～这么快就要走了吗？');
        era.println();
        await era.printAndWait([
          '然而，',
          tachyon.get_colored_name(),
          ' 似乎还有些不满意',
        ]);
        await era.printAndWait([
          '得先找点什么东西来转移',
          tachyon.sex,
          '的注意力才行……有了！',
        ]);
        era.printButton('「变色蔬菜汁？」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          ' 故作讶异的唸出外面摊位的主打品，希望能转移 ',
          tachyon.get_colored_name(),
          ' 的注意力',
        ]);
        await era.printAndWait(
          '只见摊贩老板将手上的紫色液体倒入杯子，瞬间液体变成了红色',
        );
        await era.printAndWait('……这不是中学课本酸碱反应的紫色甘蓝菜汁吗');
        await era.printAndWait([
          '不管了，为了吸引 ',
          tachyon.get_colored_name(),
          ' 的注意力，只能装一下了',
        ]);
        era.printButton('「看起来好厉害！」', 1);
        await era.input();
        await era.printAndWait([
          '果不其然，',
          me.get_colored_name(),
          ' 夸张的声调成功将 ',
          tachyon.get_colored_name(),
          ' 从魔术表演上拉了回来',
        ]);
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 盯着甘蓝菜汁变色的模样，心中似乎在思考些什么',
        ]);
        await era.printAndWait([
          '奇怪，难道 ',
          tachyon.get_colored_name(),
          ' 没看过吗？',
        ]);
        await era.printAndWait([
          '……不，再怎么说也不会吧，毕竟这算是最基础的酸碱指示剂才对，',
          tachyon.get_colored_name(),
          ' 不可能不知道',
        ]);
        await era.printAndWait(['但假如，', tachyon.sex, '真的没接触过的话……']);
        era.printButton('「看起来好神奇……的样子？」', 1);
        await era.input();
        await era.printAndWait('不行，想不到有什么能够夸奖的话了');
        await era.printAndWait([
          '但 ',
          tachyon.get_colored_name(),
          ' 的注意力看起来也完全转移过来了',
        ]);
        await era.printAndWait('这样的话应该就没有问题……');
        era.println();
        await tachyon.say_and_wait('…………这种东西');
        era.println();
        await era.printAndWait('欸');
        era.println();
        await tachyon.say_and_wait('…………你宁愿夸奖这种东西，也不愿意夸我吗？');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 生气了']);
        await era.printAndWait([
          '虽然不知道原因是什么，但 ',
          tachyon.get_colored_name(),
          ' 明显的生气了',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '明明要更多颜色的药甚至发光的我都能做出来的……',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 莫名其妙的哭了']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 只能慌忙的安慰起',
          tachyon.sex,
        ]);
        era.println();
        await era.printAndWait([
          '隔天，',
          tachyon.get_colored_name(),
          ' 做了包含256RGB色彩的药剂出来',
        ]);
        await era.printAndWait(
          '……到底是怎么做到把256种颜色在同种药剂里分割排列的',
        );
        await era.printAndWait('豚鼠君不禁感到了疑惑');
        return;
      }
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '嗯？一般人不会把出门采买实验用具称为约会？',
          );
          await tachyon.say_and_wait([
            callname,
            '，约会这个词是极为抽象的，意味着什么，只要你觉得这是约会，那么这就是约会，明白了吗？',
          ]);
          await tachyon.say_and_wait([
            '能和我这样的超绝美',
            tachyon.teen_sex_title,
            '出门逛街，这就已经可以等同于约会了吧。',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('逛街、喝茶、聊天、吃东西');
          await tachyon.say_and_wait(
            '这就是一般来说的约会吗？……感觉，好无趣啊',
          );
        },
      );
      if (relation < 50) {
        buffer.push(() =>
          tachyon.say_and_wait(
            '约会对实验助手兼实验品的干劲提升程度分析吗？嗯……可以尝试当成研究课题',
          ),
        );
      } else if (relation < 225) {
        buffer.push(() =>
          tachyon.say_and_wait([
            '约会？……',
            callname,
            '，一般科学家是不会与自己的实验动物约会的，你明白我的意思吗？',
          ]),
        );
      }
      break;
    case 2: // 逛商场
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '我说 ',
            callname,
            '……衣服什么的网购不就好了，人类的衣服跟',
            tachyon.uma_sex_title,
            '的衣服又有什么关系',
          ]);
          await tachyon.say_and_wait('尾巴的地方没孔所以每次掀衣服都能看到？');
          await tachyon.say_and_wait(['………这是性骚扰了，', callname, '。']);
        },
        async () => {
          await tachyon.say_and_wait('厨具？那种东西买那么多干嘛……');
          await tachyon.say_and_wait(
            '欸，可以做这么多菜的吗……咕……如果偷偷算在实验经费里……',
          );
          await tachyon.say_and_wait(
            '没关系的，你买吧，不用害怕，我来填的话应该可以想办法申请成正当实验用具……大概',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            '免费试喝……免费试用，果然最好的推销还是『免费』啊，明明知道只是卖东西的手段，',
          );
          await tachyon.say_and_wait([
            '但听见免费就会自然而然的忘掉对陌生人给的食物的警惕……',
            callname,
            '，我在想，免费试喝药剂！……不行吗？',
          ]);
        },
      );
  }
  await get_random_entry(buffer)();
};
