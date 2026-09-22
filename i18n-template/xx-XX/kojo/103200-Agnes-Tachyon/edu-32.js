/**
 * @file 爱丽速子 - 育成
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/xx-XX/kojo/103200-Agnes-Tachyon/edu-32-plan-a'),
  ...require('#/i18n/xx-XX/kojo/103200-Agnes-Tachyon/edu-32-plan-b'),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {string} callname 爱丽速子对玩家的称呼
   * @param {string} call_25 爱丽速子对曼城茶座的称呼
   * @param {number} rel 爱丽速子对玩家的好感度
   * @param {number} love 爱丽速子对玩家的爱慕值
   * @param {number} moti 爱丽速子的干劲
   * @param {number} stmn_rat 爱丽速子的体力百分比
   */
  async train(tachyon, you, callname, call_25, rel, love, moti, stmn_rat) {
    const buffer = [];
    if (love >= 90 && rel > 75 && stmn_rat > 0.45) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '走吧走吧，',
            callname,
            '～～快点开始我们今天的实验吧',
          ]);
          await tachyon.say_and_wait('……还是说，要我喊你，亲爱的❤️');
        },
        async () => {
          await tachyon.say_and_wait([
            '状态很好？呵呵，只要和 ',
            callname,
            ' 在一起，无论哪一天我的状态都是一样好哦',
          ]);
          await tachyon.say_and_wait('……当然，其他方面的状态也是❤️');
        },
      );
      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '～～今天的训练可不能马虎哦']);
          await tachyon.say_and_wait(
            '为什么？真是……连最基础的生物常识都不懂吗',
          );
          await tachyon.say_and_wait(
            '母体的锻炼不足，可是会影响到后代的健康的❤',
          );
          await tachyon.say_and_wait(
            '为了备孕，可千万不能手下留情哦，孩子他爸❤',
          );
        });
      }
    } else if (love >= 75 && rel > 75 && (moti >= 0 || stmn_rat > 0.45)) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([callname, '……我在思考一件事']);
              await tachyon.say_and_wait([
                '最近训练的时候，只要一想到 ',
                callname,
                ' 你在看着我，就觉得特别有动力',
              ]);
              await tachyon.say_and_wait(
                '嗯……爱情的影响吗，是个不错的研究课题，下次来试试不同爱情表现的变量下会导致的训练结果差别吧',
              );
            },
            async () => {
              await tachyon.say_and_wait([
                '有种说法，训练员就是将',
                tachyon.uma_sex_title,
                '『驯服』的存在，因此驯服的驯才是马字旁，也因此驯和训的读音如此相近',
              ]);
              await tachyon.say_and_wait([
                '如果是这样的话，那么把这样的我给驯服了的训练员君，今天希望我做些什么呢❤',
              ]);
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait(
                '欸欸～～居然要强迫状态不好的爱人利用身体来取悦自己吗？',
              );
              await tachyon.say_and_wait([
                '……',
                callname,
                '，真没想到你居然是这种人呢……哭哭……',
              ]);
              await tachyon.say_and_wait(
                '啧啧，只是玩笑而已，何必认真呢……不过要是你想玩过分一点的玩法，我也不介意哦❤',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                '训练？不如好好做实验……今天的实验都没做完呢，急什么',
              );
              await tachyon.say_and_wait(
                '嗯？不客气了？呵呵，有什么办法就用上来吧，我拭目以待',
              );
              await tachyon.say_and_wait(
                '等……公主抱什么的……这也太让人害羞了……',
              );
            },
          );
        }
      } else if (moti >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              '呼……偶尔认真的流流汗也不错啊，休息？现在状态这么好，休息也太可惜了。',
            );
            await tachyon.say_and_wait([
              '等，',
              callname,
              '，你在做什么……不要闻啊……现在很臭的……',
            ]);
            await tachyon.say_and_wait(
              '我，我知道了……我回去休息，所以别闻了……',
            );
            await tachyon.say_and_wait([
              '什么叫可以继续啊！？',
              callname,
              '，你……真的是变态啊',
            ]);
            await tachyon.say_and_wait(
              '真是，不过会因此而感到兴奋的我，绝对也是变态无误了❤',
            );
          },
          async () => {
            await tachyon.say_and_wait('体力不支，需要休息？');
            await tachyon.say_and_wait(
              '……那还不是因为某人前几天……我的腰到现在都还在痛……',
            );
            await tachyon.say_and_wait(
              '喂！……真是，腰还在痛只是比喻啦……大惊小怪的……就那么担心我吗❤',
            );
          },
          async () => {
            await tachyon.say_and_wait('哈啊……哈啊……');
            await tachyon.say_and_wait('没什么，耐力用尽什么的，还早得很呢！');
            await tachyon.say_and_wait([
              '不过……要是真的受不了了，就麻烦你帮我补充『精』力了，',
              callname,
              '❤️',
            ]);
          },
        );
      }
    } else if (rel > 225 && (moti >= 0 || stmn_rat > 0.45)) {
      if (moti >= 0) {
        if (stmn_rat > 0.45) {
          buffer.push(
            () =>
              tachyon.say_and_wait(
                '快快快！时间不等人的！今天的实验数据起码可以水五篇论文！接下来两个月的研究经费都可以不用愁了！',
              ),
            async () => {
              await tachyon.say_and_wait([
                '训练？没问题，但是有个条件，',
                callname,
                '，今天你也来一起并跑吧？',
              ]);
              await tachyon.say_and_wait([
                '没问题没问题，现在你的身体素质如果短时间爆发已经能够跑出不输给',
                tachyon.uma_sex_title,
                '的速度了……',
              ]);
              await tachyon.say_and_wait(
                '没问题没问题，嗯，短时间的话，大概……五秒内？',
              );
            },
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                '训练？又是跑操场啊……我说，',
                callname,
                '，能不能来点更有趣的训练啊？',
              ]);
              await tachyon.say_and_wait(
                '比如……药剂俄罗斯轮盘赛？先各喝五管随机效果的药然后开始比赛？',
              );
              await tachyon.say_and_wait([
                '先找到能够配合的',
                tachyon.uma_sex_title,
                '？',
                call_25,
                '……欸，不行吗？',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                '我说啊 ',
                callname,
                '，我们冷静分析，这样每天锻炼的效率真的会比研究高吗？',
              ]);
              await tachyon.say_and_wait(
                '什么？我的特殊事件触发一次也就+5，哪来的自信跟锻炼比的？',
              );
              await tachyon.say_and_wait([
                '不是，等等，',
                callname,
                ' 你在说什么……我怎么听不懂……',
              ]);
            },
            async () => {
              await tachyon.say_and_wait(
                '欸……训练好麻烦，要跑你自己上去跑不就好了',
              );
              await tachyon.say_and_wait([
                '乖孩子什么的……我说 ',
                callname,
                '，你不会是把我当成小孩子了吧？',
              ]);
              await tachyon.say_and_wait(
                '不过嘛……偶尔去跑一下也不是什么坏事，大概。',
              );
            },
          );
        }
      } else if (stmn_rat > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '……我看见光了……再努力，再努力一定能追上……就在前面……',
            ]),
          async () => {
            await tachyon.say_and_wait([
              callname,
              '……给我……药……快点……我快撑不住了……',
            ]);
            await tachyon.say_and_wait(
              '啊，没错没错，就是这个就是这个，没有这个我怎么活啊……',
            );
            await tachyon.say_and_wait(
              '嗯？说话方式很奇怪？不就是普通的营养剂而已吗？有什么奇怪的？像嗑多了？只有脑袋里都塞了那种东西的人才会想歪啦',
            );
          },
        );
      }
    } else if (rel > 75) {
      if (stmn_rat > 0.45) {
        if (moti >= 0) {
          buffer.push(
            () => tachyon.say_and_wait([callname, '！开始我们的研究吧！']),
            () =>
              tachyon.say_and_wait(
                '状态绝佳！今天绝对能跑出堪比普朗克时间的纪录出来！',
              ),
            () => tachyon.say_and_wait('直到超越光速！直到抵达可能性的彼方！'),
          );
        } else {
          buffer.push(
            async () => {
              await tachyon.say_and_wait('……无趣啊');
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 喃喃自语道。',
              ]);
            },
            async () => {
              await tachyon.say_and_wait([
                callname,
                '……我认为实验的灵感是很重要的，成功虽说是99%的努力加上1%的灵感，但没有1%的灵感无论努力了99%还是99.99%都是一样毫无用处，你明白我的意思吗？',
              ]);
              await tachyon.say_and_wait(
                '不，我不是为了翘掉训练才这么说的，这只是在陈述一件事实，',
              );
              await tachyon.say_and_wait(
                '但既然你提到了这个话题，那我们也可以顺带代入进去来看，所以今天的训练……',
              );
              await era.printAndWait([you.get_colored_name(), ' 摇了摇头']);
              await tachyon.say_and_wait('切');
              await era.printAndWait([tachyon.get_colored_name(), ' 啧了一声']);
            },
            async () => {
              await tachyon.say_and_wait(
                '训练？今天的实验都还没做完不是吗？唉……罢了，等我做完实验之后就去',
              );
              await era.printAndWait([
                '最后，在 ',
                tachyon.get_colored_name(),
                ' 来训练前 ',
                you.get_colored_name(),
                ' 等了足足三个小时，直到太阳下山',
                tachyon.sex,
                '才出现在训练场上',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '哈啊哈啊……体力？没问题，今天一定能够突破……哈啊，哈啊……',
            ),
          () =>
            tachyon.say_and_wait('直到极限……在体力的极限才能见到真正的突破！'),
          () =>
            tachyon.say_and_wait(
              '理性在告诉我自己需要休息了，但感性却怎么也不想停下来……真是幸福的烦恼啊，哈哈哈！',
            ),
        );
      }
    } else if (stmn_rat > 0.45) {
      if (moti >= 0) {
        buffer.push(
          () => tachyon.say_and_wait('那么，开始实验吧。'),
          () => tachyon.say_and_wait('快点，去准备纪录实验数据，不要分心了。'),
          async () => {
            await tachyon.say_and_wait('哼……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 没有说话，但 ',
              you.get_colored_name(),
              ' 看得出',
              tachyon.sex,
              '身上满溢的干劲。',
            ]);
          },
        );
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '你在慢什么，还不快去准备纪录实验数据，敢出什么差错我剥了你的皮。',
            ),
          () =>
            tachyon.say_and_wait(
              '方向发生错误了吗……为什么……明明体力充沛，却完全没有能够超越极限的自信……',
            ),
          async () => {
            await tachyon.say_and_wait('……最近你提出的实验，越来越无趣了啊');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 用危险的眼神看着 ',
              you.get_colored_name(),
              '。',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……开始实验吧。');
          await tachyon.say_and_wait(
            '累？没这回事，我有预感，这一次，这一次一定能够突破瓶颈……',
          );
        },
        () => tachyon.say_and_wait('必须更快……咕……身体无法……动弹……'),
        async () => {
          await tachyon.say_and_wait(
            '开什么玩笑……突破极限的首要条件就是抵达极限。',
          );
          await tachyon.say_and_wait(
            '还要更快，要是连极限都无法抵达……那还谈什么超越极限……！',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 爱慕热恋及以上，好感融洽及以上，体力>45%，高干劲，30%概率触发
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {string} callname 爱丽速子对玩家的称呼
   */
  async train_kiss(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      '，今天我这么难得的有干劲想训练，对这样的爱马，你不觉得应该有些什么奖励才对呢',
    ]);
    await tachyon.say_and_wait('……训练结束？我说，我可等不了那么久啊');
    await tachyon.say_and_wait('唔……咕啾……啾噜……啾啵……啾……啾咕');
    await tachyon.say_and_wait(
      '呼……姑且算你及格了，剩下的，训练结束之后再继续吧❤️',
    );
  },
  /**
   * 爱慕热恋及以上，好感融洽及以上，体力>45%，低干劲，30%概率触发
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async train_sex(tachyon, you) {
    await tachyon.say_and_wait('训练？嗯……喝了今天的药再说吧');
    await tachyon.say_and_wait('全身发热？意识模糊？没事没事，这是正常现象');
    await tachyon.say_and_wait('嗯哼……时间应该差不多了，');
    await tachyon.say_and_wait(
      '那么，今天的药是引动雌性激素雄性激素皮质醇生长激素加压素达到平均以上水平的药物，或者通俗一点来讲的话，就是媚药哦❤️',
    );
    await tachyon.say_and_wait('训练什么的，等结束之后再说吧❤️');
    era.printButton('这里就听从老二的……', 1);
    era.printButton('「别闹了，快点去训练！」', 2, {
      disabled: era.get('talent:0:钢之意志') > 0,
    });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '在 ',
        tachyon.get_colored_name(),
        ' 的诱惑下，',
        you.get_colored_name(),
        ' 将',
        tachyon.sex,
        '扑倒在实验室里的小床里……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 靠着学习到的钢之意志撑住了诱惑',
      ]);
      await tachyon.say_and_wait('这也可以的吗！？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 不顾吐槽的 ',
        tachyon.get_colored_name(),
        '，把',
        tachyon.sex,
        '硬抱到了训练场上。',
      ]);
    }
    return ret;
  },
  tr_help_tyr: (() => {
    const title = '助纣为虐（？）';
    /**
     * 好感喜爱及以上，中高干劲，体力<45%，25%概率触发，每轮育成限1次
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (tachyon, coffee, you, callname, c_call_t) => {
      await tachyon.say_and_wait([
        callname,
        '，你为什么会觉得自己能够胜过',
        tachyon.uma_sex_title,
        '的力量呢？',
      ]);
      era.println();
      await era.printAndWait([
        '实验室内，',
        tachyon.get_colored_name(),
        ' 饶有兴趣的说道',
      ]);
      await era.printAndWait('口气听起来十分悠然，表现出了绝对的自信');
      await era.printAndWait('种族上的差距，天赋上的差异赋予的自信');
      era.println();
      await tachyon.say_and_wait(
        '你已经明白了吧，这就是我们之间的差距，所以如果可以的话，还希望你……',
      );
      era.println();
      await era.printAndWait([
        '即便怎么用力都纹丝不动的身躯，明明是如此娇小的身体，这就是',
        tachyon.uma_sex_title,
        '这种生物的神奇之处',
      ]);
      !you.race &&
        (await era.printAndWait('但……身为人类，也还是有著自己的尊严在的'));
      era.println();
      await tachyon.say_and_wait(
        '哦？居然还有多余的力气吗？呵呵，我姑且肯定你的毅力吧，但，值得表扬的也就只有这点了',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '嘲笑著 ',
        you.get_colored_name(),
        ' 的徒劳无功，但对于容易厌倦事物的',
        tachyon.sex,
        '而言，',
        you.get_colored_name(),
        ' 重复徒劳无功的尝试于',
        tachyon.sex,
        '而言也已经渐渐有些无趣了',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……停下你的挣扎吧，你明明知道不是吗？这一切的挣扎，不过是白费力气而已，没错……',
      ]);
      era.println();
      await era.printAndWait([
        '啊啊，',
        tachyon.sex,
        '发出了，足以将一切训练员打入深渊的宣言',
      ]);
      era.println();
      await tachyon.say_and_wait('无论你怎么拉，我都绝对不会跟你去训练的');
      era.println();
      await era.printAndWait('换句话说，也就是这么回事');
      await era.printAndWait([
        '不愿意去训练的 ',
        tachyon.get_colored_name(),
        '，及坚持今天一定要训练的 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '拼命撑著椅子不被 ',
        you.get_colored_name(),
        ' 抓起，和拼命拔著',
        tachyon.sex,
        '的腰要将',
        tachyon.sex,
        '拉离实验桌的 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait(['没错，就是两人之间，无趣至极的一场拉扯战']);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，还是放弃吧，人类怎么可能……好痛！？',
      ]);
      era.println();
      await era.printAndWait([
        '得意忘形的',
        tachyon.sex,
        '，似乎忘记了拜',
        tachyon.sex,
        '的改造所赐，',
        you.get_colored_name(),
        ' 早就已经拥有虽说不能与',
        tachyon.uma_sex_title,
        '相等，但也相当于七八成的力量',
      ]);
      await era.printAndWait([
        '凭著这股怪力，加上 ',
        tachyon.get_colored_name(),
        ' 的傲慢及得意忘形，',
        you.get_colored_name(),
        ' 很快便将 ',
        tachyon.get_colored_name(),
        ' 的下半身连根抱起，只残余',
        tachyon.sex,
        '的双手正努力的攀住实验台',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '没……没想到我还是小瞧了你啊，',
        callname,
        '……但是，这种粗心不会再发生第二次了，即便只有两只手抓著实验台，我爱丽速子依旧无敌于这实验室内！库呵呵……库哈哈哈哈哈哈！……呜啊！？',
      ]);
      era.println();
      await era.printAndWait([
        '正当你们两人都觉得这场无聊的战争大概还得持续个十几二十分钟时，神奇的事情发生了',
      ]);
      await era.printAndWait([
        '彷彿被什么未知的力量所附身一般，于 ',
        tachyon.get_colored_name(),
        ' 而言，整个实验台忽然如岩浆一般灼热，迫使',
        tachyon.sex,
        '不得不松开了手',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 双双跌倒在地，',
        tachyon.get_colored_name(),
        ' 爬起来后连忙看了看自己的手，却连一点焦痕也没有，彷彿只是自己的错觉一般',
      ]);
      era.println();
      await coffee.say_and_wait([
        '……请快点把 ',
        c_call_t,
        ' 带出去吧……',
        tachyon.sex,
        '好烦……',
      ]);
      era.println();
      await era.printAndWait([
        '开口的，是与 ',
        tachyon.get_colored_name(),
        ' 共用同间空教室的灵异系黑鹿毛',
        tachyon.uma_sex_title,
        '，',
        coffee.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        '虽然不知道对方到底是用了什么方法才使 ',
        tachyon.get_colored_name(),
        ' 脱手，但为了避免',
        tachyon.sex,
        '再次找到机会赖在实验室里不出门，',
        you.get_colored_name(),
        ' 顾不上道谢抓著 ',
        tachyon.get_colored_name(),
        ' 就连忙赶到了训练场上',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tr_incm_cmb: (() => {
    const title = '燃烧不完全';
    /**
     * 低干劲，体力<45%，男Tx马娘
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('今天的目标……是……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 忧心的看着 ',
        tachyon.get_colored_name(),
        ' 的模样',
      ]);
      await era.printAndWait([
        '今天的',
        tachyon.sex,
        '依然在尝试着为了突破极限而进行的实验，也可以称之为，训练',
      ]);
      await era.printAndWait([
        '倘若',
        tachyon.sex,
        '的体力充足，只是状态不好，那 ',
        you.get_colored_name(),
        ' 必然会狠下心来将其推向实验吧，因为有时严厉的举止也是必要的',
      ]);
      await era.printAndWait([
        '倘若',
        tachyon.sex,
        '的体力不足，但状态出奇良好，那 ',
        you.get_colored_name(),
        ' 在思考过后也会尝试让',
        tachyon.sex,
        '继续进行锻炼吧，',
      ]);
      await era.printAndWait([
        '毕竟就如前辈训练员们说过的，贴近',
        tachyon.uma_sex_title,
        '的心灵才是身为训练员最重要的工作',
      ]);
      await era.printAndWait('但是……');
      era.println();
      era.print([
        '对于体力明显不支，状态也心不在焉的',
        tachyon.sex,
        '，',
        you.get_colored_name(),
        ' 真的能够狠下心来吗？',
      ]);
      era.printButton('「……继续吧」（顺从因子+100）', 1);
      era.printButton('「……休息吧」（干劲上升）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '为了 ',
          tachyon.get_colored_name(),
          ' 的目标及梦想……以及，自己的一点点私心',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着 ',
          tachyon.get_colored_name(),
          ' 现在的模样',
        ]);
        await era.printAndWait([
          '从被汗水浸湿的运动服透出的雪白肌肤，与奔跑时沾在衣服上的泥点，形成了显著的对比，紧紧贴合的运动服更凸显了',
          tachyon.sex,
          '的姣好身材',
        ]);
        await era.printAndWait(
          '圆润的胸部及臀部，加上因疲惫而发出的喘息和泛红的脸颊，明明只是训练，却不住使人产生遐想',
        );
        await era.printAndWait(
          '要是能够将那不停弹跳的圆球当成自己的东西在手里尽情揉捏的话',
        );
        await era.printAndWait(
          '要是能用唇舌堵住那张平常总对自己爱搭不理的小嘴，使其只能发出娇嫩喘息的话',
        );
        await era.printAndWait(
          '这样的想法，以一名训练员，以一名成熟的大人来说，绝对是不应允许的行为吧',
        );
        await era.printAndWait([
          '但是，以身为男性的立场而言，内心的欲望却不允许 ',
          you.get_colored_name(),
          ' 提出反对',
        ]);
        await era.printAndWait([
          '虽然犹豫，虽然不舍，但 ',
          you.get_colored_name(),
          ' 还是装作没发现',
          tachyon.sex,
          '的不适，让',
          tachyon.sex,
          '继续训练',
        ]);
        await era.printAndWait([
          '……不知是不是发现了 ',
          you.get_colored_name(),
          ' 内心的龌龊，又或者只是对训练的继续感到不满，',
          tachyon.get_colored_name(),
          ' 没说什么，却瞪了 ',
          you.get_colored_name(),
          ' 一眼',
        ]);
      } else {
        await era.printAndWait('身为训练员，不合理的过度训练也是应该避免的');
        await era.printAndWait([
          you.get_colored_name(),
          ' 在 ',
          tachyon.get_colored_name(),
          ' 跑完一圈后，马上喊了停',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……结束？实验才刚开始不是吗，还有很多今天要完成的对比实……实验……啊……',
        );
        await era.printAndWait([
          tachyon.sex,
          '的强硬话语只说了一半便坚持不下去，忍不住发出了低吟',
        ]);
        await era.printAndWait(
          '谁能想得到呢，只是轻轻按压了下小腿内侧，往来如此强硬的小嘴竟然会发出如此诱人的声音',
        );
        await era.printAndWait([
          '当然，',
          you.get_colored_name(),
          ' 的按压并没有神奇到能让人立即发春，这一切的主因还是在 ',
          tachyon.get_colored_name(),
          ' 自己',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 扶着已经瘫软的 ',
          tachyon.get_colored_name(),
          '，轻轻按压',
          tachyon.sex,
          '已经有些发肿的小腿',
        ]);
        era.println();
        await tachyon.say_and_wait('……嗯……呀……这样……不行……住手……啊嗯……');
        era.println();
        await era.printAndWait([tachyon.sex, '的小嘴不住发出令人沉醉的娇吟']);
        await era.printAndWait([
          '雪白的肌肤已经有些红肿，每次按压着不同的地方，',
          tachyon.sex,
          '都会发出令人遐想的声音，彷佛 ',
          you.get_colored_name(),
          ' 在做的这些并非是健全的按摩，而是某些更邪恶，下流的行为',
        ]);
        await era.printAndWait([
          '在神圣的赛场上做这样的事情，当然不免会引起他人的关注，不知不觉间，一些还在锻炼的小',
          tachyon.uma_sex_title,
          '们也被 ',
          tachyon.get_colored_name(),
          ' 的娇吟吸引过来',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '等……',
          callname,
          '……咿……不可以……有人……啊啊～～♡',
        ]);
        era.println();
        await era.printAndWait([you.get_colored_name(), ' 置若罔闻地按压着']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的腿，比 ',
          you.get_colored_name(),
          ' 想象中的还要娇嫩纤细，轻轻握在手里的感觉使 ',
          you.get_colored_name(),
          ' 有了一种掌握了',
          tachyon.sex,
          '的生杀大权的错觉',
        ]);
        await era.printAndWait([
          '要是能在床上，看着',
          tachyon.sex,
          '不甘却还是忍不住发出呻吟的模样，抓着',
          tachyon.sex,
          '的双腿将其分开，那带来的征服感想必是胜过世间一切的吧',
        ]);
        era.println();
        await tachyon.say_and_wait('……！那边不可以！');
        era.println();
        await era.printAndWait([
          '不知不觉间，有些起劲的 ',
          you.get_colored_name(),
          ' 向上摸到了大腿',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 用力将双腿抽回时的力道唤醒了 ',
          you.get_colored_name(),
          ' 的理智，提醒 ',
          you.get_colored_name(),
          ' 眼前的',
          tachyon.teen_sex_title,
          '，实际上是力量大过于成年男性三倍的',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 连忙向',
          tachyon.sex,
          '道歉',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……我，我知道了……今天，就先到这里吧……我，我需要休息一下……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 语速飞快的说完这些后便起身要回到实验室，但随即便被失力感导致瘫软在 ',
          you.get_colored_name(),
          ' 怀中',
        ]);
        await era.printAndWait([
          '此时你们二人看上去的模样哪里像是正常训练中的训练员及',
          tachyon.uma_sex_title,
          '，倒不如说是扑在男友怀中的撒娇女友，及温柔的将',
          tachyon.sex,
          '拥在怀中的男伴',
        ]);
        await era.printAndWait([
          '被他人所惧的疯狂科学家，此时却小鸟依人的靠在 ',
          you.get_colored_name(),
          ' 怀里',
        ]);
        await era.printAndWait([
          '对此 ',
          you.get_colored_name(),
          ' 忍不住产生了一种自豪及骄傲感',
        ]);
        era.println();
        await tachyon.say_and_wait('……带我回实验室，现在，马上');
        era.println();
        await era.printAndWait([
          '但随即，科学家的瞪视却使 ',
          you.get_colored_name(),
          ' 变回了听话的豚鼠',
        ]);
        await era.printAndWait([
          '于是，你们两人在周围',
          tachyon.uma_sex_title,
          '们的半是佩服半是羡慕的目光中，缓缓走回了实验室',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param callname 爱丽速子对玩家的称呼
   * @param call_25 爱丽速子对曼城茶座的称呼
   * @param stmn_rat 爱丽速子的体力百分比
   * @param plan_b 是否进入 Plan B
   */
  async train_success(tachyon, you, callname, call_25, stmn_rat, plan_b) {
    era.print([tachyon.get_colored_name(), ' 的训练顺利结束了！']);
    era.println();
    const buffer = [];
    if (plan_b && era.get('cflag:32:育成回合计时') < 95 + 16) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(['为了让 ', call_25, '……能够更上一层']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 格外努力的结束了训练，但',
            tachyon.sex,
            '口中喊着的口号却令人不知该如何面对',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '要是我不努力，去追赶 ',
            call_25,
            ' 的话……',
          ]);
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), ' 结束了训练']);
          await era.printAndWait('跑的依旧那么绚烂');
          await era.printAndWait('但总让人感觉，缺少了什么');
        },
        async () => {
          await tachyon.say_and_wait('为了实验的成功……哪怕是我也……');
          era.println();
          await era.printAndWait([
            '结束训练的 ',
            tachyon.get_colored_name(),
            ' 低语着，虽然内容如此，但',
            tachyon.sex,
            '的口气中仿佛带着一抹犹豫',
          ]);
          await era.printAndWait([
            '……不，那或许也只是 ',
            you.get_colored_name(),
            ' 自己的脑补而已吧',
          ]);
        },
      );
    } else if (era.get('love:32') >= 75) {
      if (stmn_rat > 0.45) {
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '！']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 结束训练后不顾身上大汗满身，朝着 ',
            you.get_colored_name(),
            ' 扑了过来',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 慌忙想把',
            tachyon.sex,
            '推开',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '有什么关系嘛，不过是爱人的体液而已……大不了晚上你把你的体液还给我不就好了♡',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 不顾 ',
            you.get_colored_name(),
            ' 的反对，将 ',
            you.get_colored_name(),
            ' 抱住，在 ',
            you.get_colored_name(),
            ' 耳旁低语着',
          ]);
        });
      } else {
        buffer.push(async () => {
          await tachyon.say_and_wait('呼……训练结束了吗……终于');
          await tachyon.say_and_wait(
            '真是……运动的话，比起单纯的跑步，我更喜欢晚上的那种啊……',
          );
          await tachyon.say_and_wait(['如何？', callname, '，你会满足我的吧♡']);
        });
      }
    } else if (era.get('love:32') >= 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('哼哼，怎么样');
          await tachyon.say_and_wait('再度为我着迷了？呵呵，真是浮夸的说法');
          await tachyon.say_and_wait('不过，我很喜欢哦♡');
        },
        async () => {
          await tachyon.say_and_wait([callname, '！', callname, '………啊']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 正想向往常一样朝着 ',
            you.get_colored_name(),
            ' 跑来，却忽然停下了脚步',
          ]);
          era.println();
          await tachyon.say_and_wait('………不，现在果然还是算了');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '看了看自己身上汗流浃背湿透的运动服后，不知为何与 ',
            you.get_colored_name(),
            ' 保持了一段距离',
          ]);
          await era.printAndWait('难道说……是在意身上的味道吗？');
          await era.printAndWait([
            '不，如果是那个 ',
            tachyon.get_colored_name(),
            ' 的话……应该不可能吧',
          ]);
        },
      );
    } else if (era.get('relation:32:0') > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '哼哼哼，',
            callname,
            '，今天跑的如何！多夸一点也没关系哦！',
          ]);
          era.println();
          await era.printAndWait('三十分钟后');
          era.println();
          await tachyon.say_and_wait('………不，也没有必要夸到那种地步……');
        },
        async () => {
          await tachyon.say_and_wait('呼……好累啊……');
          await tachyon.say_and_wait([callname, '……背我回去休息～～～～']);
        },
        async () => {
          await tachyon.say_and_wait('只要这样下去……一定可以达到的');
          await tachyon.say_and_wait('极限的目标……');
        },
      );
    } else if (era.get('relation:32:0') > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '哼哼……这样的速度，只要能够继续稳步提升，超越极限绝对没问题',
          );
          await tachyon.say_and_wait([
            '……没有必要那么急，稍微休息一下也没关系？',
            callname,
            '，研究这种东西，停留在原地就等于退步了，为了提升自我，必须一刻也不松懈的努力才行',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('呼哈哈哈！就是这样，就是这种速度！');
          await tachyon.say_and_wait('还要更快，还要更快，直到……超越光速！');
        },
        () =>
          tachyon.say_and_wait(
            '用时让我看看……哼哼哼……很好，照这样下去，我们的梦想也就在不远处了！',
          ),
      );
    } else if (era.get('relation:32:0') > 75) {
      buffer.push(
        () => tachyon.say_and_wait('很好，今天的，就是最优解的跑法没错！'),
        () =>
          tachyon.say_and_wait([
            '呼……',
            callname,
            '，数据让我看看……呵呵，很好，很好，比起上次训练又大幅上升了，照这样下去绝对没问题',
          ]),
        () =>
          tachyon.say_and_wait('很好很好，这样研究进度就又前进 0.02 百分点了'),
      );
    } else {
      buffer.push(
        () => tachyon.say_and_wait('呼，原来如此……今天的实验成果不错'),
        () =>
          tachyon.say_and_wait(
            '这么简单的训练，完成起来毫无难度啊……作为测量实力的对照组吗？',
          ),
        () => tachyon.say_and_wait('理所当然的成果罢了'),
      );
    }
    await get_random_entry(buffer)();
  },
  ts_add_high_rel: (() => {
    const title = '追逐战';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '！快帮我拦住', tachyon.sex, '！']);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 今天的训练刚结束']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 正想挥挥手示意 ',
        tachyon.get_colored_name(),
        ' 回来，却看见 ',
        tachyon.get_colored_name(),
        ' 追着一名',
        tachyon.uma_sex_title,
        '朝着 ',
        you.get_colored_name(),
        ' 跑来',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        `${tachyon.uma_sex_title}A`,
        '救，救命啊！',
      );
      await tachyon.say_and_wait(
        '别怕……不会有事的！只是想稍微占用一下你的时间，做几个调查，问几个问题，然后……然后……要是能稍微试些药的话……！',
      );
      era.println();
      await era.printAndWait([
        '眼看那名',
        tachyon.uma_sex_title,
        '离 ',
        you.get_colored_name(),
        ' 越来越近',
      ]);
      era.print([you.get_colored_name(), ' 决定……']);
      era.printButton('放任两人通过', 1);
      era.printButton('拦住速子', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          '训练员',
          you.adult_sex_title,
          '，为什么只是看着！？',
        ]);
        await tachyon.say_and_wait([
          callname,
          '，为什么不帮我拦住',
          tachyon.sex,
          '！？',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 让开了身子，让两人跑过',
        ]);
        await era.printAndWait(
          '两人同时发出了质疑的喊声，然而质疑的内容却不相同',
        );
        await era.printAndWait([you.get_colored_name(), ' 耸了耸肩']);
        await era.printAndWait([
          '虽然知道 ',
          tachyon.get_colored_name(),
          ' 这么做是不好的，但身为',
          tachyon.sex,
          '的豚鼠又必须帮助',
          tachyon.sex,
          '的实验',
        ]);
        await era.printAndWait('……真是两难啊');
        await era.printAndWait([
          '所以 ',
          you.get_colored_name(),
          ' 决定放弃思考，两不相帮应该就好了吧',
        ]);
        era.drawLine();
        await era.printAndWait([
          '隔天，',
          you.get_colored_name(),
          ' 来到实验室时发现平常桌上摆着的给自己喝的药剂加倍了',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 望向 ',
          tachyon.get_colored_name(),
          '，',
          tachyon.sex,
          '却只是面无表情的盯着 ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('…………没想到，受害的依然是自己啊');
      } else {
        await era.printAndWait('实验什么的暂且不提');
        await era.printAndWait([
          '今天的训练 ',
          tachyon.get_colored_name(),
          ' 已经跑了够多了，要是再增加的话可能会对身体造成损伤',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          '训练员',
          you.adult_sex_title,
          '！谢谢您！',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 拉住了 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '小',
          tachyon.uma_sex_title,
          '越跑越远，',
          tachyon.get_colored_name(),
          ' 看已经没有追上的机会，只能怨恨的瞪着 ',
          you.get_colored_name(),
        ]);
        await era.printAndWait([you.get_colored_name(), ' 心中有种不祥的预感']);
        era.drawLine();
        await era.printAndWait([
          '隔天，',
          you.get_colored_name(),
          ' 来到实验室时发现平常桌上摆着的给自己喝的药剂加倍了',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 望向 ',
          tachyon.get_colored_name(),
          '，',
          tachyon.sex,
          '却只是面无表情的盯着 ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('……………看来昨天的预感是正确的啊');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ts_add_low_rel: (() => {
    const title = '追加实验';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await tachyon.say_and_wait('不够啊，实验数据还缺少一堆……');
      await tachyon.say_and_wait(
        '必须继续才行……你要是不想继续的话就回去吧，我自己来就好',
      );
      era.println();
      era.print([you.get_colored_name(), ' 决定']);
      era.printButton('放任', 1);
      era.printButton('阻止', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait('如果只是纯粹的加练自己或许能够阻止');
        await era.printAndWait('但缺乏实验数据……');
        era.println();
        await you.say_and_wait('确实，挺致命的啊……那么今天再稍微待晚一点吧');
        await tachyon.say_and_wait(
          '……我不是说你可以回去了吗？这不是加练，只是我自己的实验需要数据而已',
        );
        you.say('是啊，所以');
        era.printButton('「实验的时候，没有实验助手可不行吧」', 1);
        era.printButton(
          '「这不是身为训练员，而是我下班后的自由时间，怎么利用也是我的自由不是吗？」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait('…………呵呵');
        await tachyon.say_and_wait('那么，就来帮我纪录数据吧');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 点了点头，看着',
          tachyon.sex,
          '继续跑了起来',
        ]);
      } else {
        await era.printAndWait('不行');
        await era.printAndWait('无论用什么名目，加练都是不能允许的');
        await era.printAndWait([
          '而且，',
          tachyon.get_colored_name(),
          ' 也知道吧，这样效率是不会提升的，相反地，强行去赶进度只会导致忙中出错',
        ]);
        era.println();
        await tachyon.say_and_wait('…………啧');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 没说什么就回去了',
        ]);
        await era.printAndWait([
          '如果是合理的说服就会乖乖听劝，这也算是',
          tachyon.sex,
          '的优点吧',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '重整&再出发';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} plan_b 是否进入 Plan B
     * @param {boolean} reg_toky_yus 是否报名日本德比
     * @param {number} fail_count 爱欲及以上情况下训练失败的次数
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      plan_b,
      reg_toky_yus,
      fail_count,
      fail_again,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着在场上训练的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '不知为何，',
        you.get_colored_name(),
        ' 一直有些忐忑不安',
      ]);
      await era.printAndWait([
        '明明 ',
        tachyon.get_colored_name(),
        ' 的跑法看起来没什么问题，但就是有些担心',
      ]);
      await era.printAndWait([
        '不要出意外就好了，',
        you.get_colored_name(),
        ' 祈祷着',
      ]);
      era.println();
      await era.printAndWait('然而，不出意外的，这种时候意外发生了');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 的眼前，',
        tachyon.get_colored_name(),
        ' 脚步忽然有些踉跄',
      ]);
      era.print('眼看有可能就要跌倒————');
      era.printButton('「速子！快停下！」（接受失败）', 1);
      era.printButton('—————！（尝试挽回）', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:32') >= 50) {
          switch (fail_count) {
            case 0:
              await tachyon.say_and_wait([
                '好痛……',
                callname,
                '，可以稍微帮我按一下吗？',
              ]);
              era.println();
              await era.printAndWait([
                '连忙跑到跌倒的 ',
                tachyon.get_colored_name(),
                ' 身旁的 ',
                you.get_colored_name(),
                '，动作利索的帮',
                tachyon.sex,
                '脱下了鞋袜',
              ]);
              era.println();
              await tachyon.say_and_wait('没错……脚背……脚底……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' 轻轻为',
                tachyon.sex,
                '按压着脚上的穴道',
              ]);
              await era.printAndWait('这明明，应该是很正常的行为才对');
              await era.printAndWait(
                '然而……由于刚跑完步，被袜子包覆闷热的脚掌自然沾满了汗水',
              );
              await era.printAndWait([
                '随着 ',
                you.get_colored_name(),
                ' 的按摩，黏腻的汗液也沾满了 ',
                you.get_colored_name(),
                ' 的双手',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' 不停说服自己，这只是很正常的人体分泌物而已',
              ]);
              await era.printAndWait('但手上的动作还是不由得变得轻柔起来');
              era.println();
              await tachyon.say_and_wait('嗯……唔……');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 时不时发出的低吟更使 ',
                you.get_colored_name(),
                ' 感到了兴奋',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' 按压了足底足背后，理论上应该停下手上的动作了，但看来手却仍有自己的想法',
              ]);
              era.println();
              await tachyon.say_and_wait('等等……脚趾的话……');
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' 的手慢慢捏上',
                tachyon.sex,
                '的脚趾',
              ]);
              await era.printAndWait(
                '一般情况指压按摩的话应该是要抹上油来进行的',
              );
              await era.printAndWait([
                '但 ',
                tachyon.get_colored_name(),
                ' 淋漓的汗水取代了油脂的润滑作用',
              ]);
              era.println();
              await tachyon.say_and_wait(['等等……', callname, '……痛！']);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 的呼唤声把 ',
                you.get_colored_name(),
                ' 的理智唤了回来',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' 抬头看向',
                tachyon.sex,
                '的脸，',
                tachyon.sex,
                '面色潮红，似乎也被打开了开关一般',
              ]);
              era.println();
              await tachyon.say_and_wait('……后面的，等回到室内再做，好吗？');
              break;
            case 1:
              await tachyon.say_and_wait('好痛～～♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 今天训练时又「不小心」跌倒了',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' 看着一碰到草地就迫不及待脱下鞋袜的',
                tachyon.sex,
                '，心中半是情欲半是无奈',
              ]);
              era.println();
              await tachyon.say_and_wait([callname, '～～快来帮我按摩……♡♡']);
              era.println();
              await era.printAndWait([
                '看 ',
                you.get_colored_name(),
                ' 没有动作，',
                tachyon.sex,
                '撒娇般的将赤足踩在草地上，吸引 ',
                you.get_colored_name(),
                ' 的注意',
              ]);
              await era.printAndWait(
                '白纤易碎，如艺术品一般的裸足，沾染上飞溅的尘土反而更衬托出了它的白净',
              );
              era.println();
              await tachyon.say_and_wait('快点快点，帮我揉揉～～');
              era.println();
              await you.say_and_wait('这样的歪风可不能再继续下去啊……', true);
              await era.printAndWait([
                you.get_colored_name(),
                ' 轻柔的帮',
                tachyon.sex,
                '按起了脚',
              ]);
              era.println();
              await tachyon.say_and_wait('嗯嗯♡～～就是这样……啊♡嘶♡哈♡');
              era.println();
              await era.printAndWait('还是一样，妩媚的声音');
              await era.printAndWait([
                '每次 ',
                tachyon.get_colored_name(),
                ' 张口发出的，都是不断撩拨着 ',
                you.get_colored_name(),
                ' 的情欲的娇吟',
              ]);
              await era.printAndWait(['不能让', tachyon.sex, '这样下去了']);
              await era.printAndWait([
                you.get_colored_name(),
                ' 更换了手上按压的方式',
              ]);
              era.println();
              await tachyon.say_and_wait([callname, '……咿———']);
              era.println();
              await era.printAndWait('从原本，轻柔爱抚的力道');
              await era.printAndWait(
                '瞬间，化作了仿佛要将脚碾碎一般的凶猛压力',
              );
              era.println();
              await tachyon.say_and_wait([
                '好痛！等，',
                callname,
                '！不要！住手！要断了啊啊啊啊啊！',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' 没有听',
                tachyon.sex,
                '的话，只是继续凶狠的按压着',
              ]);
              await era.printAndWait([
                '对于给',
                tachyon.uma_sex_title,
                '的按摩，以及按摩的力道，可以说天底下没有比训练员更了解这些的人了',
              ]);
              await era.printAndWait([
                you.get_colored_name(),
                ' 努力控制着力道，在不会伤到骨头，却又能使 ',
                tachyon.get_colored_name(),
                ' 感到疼痛的范围内尽情的按压着',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '等，是我不好！求！救救！不！放手！不要！嘶………！',
              );
              await tachyon.say_and_wait('嘶……哈……哈啊……哈……');
              era.println();
              await era.printAndWait([
                '没过多久，',
                tachyon.get_colored_name(),
                ' 便发不出声，只能发出疼痛的嘶哈声了',
              ]);
              await era.printAndWait([
                '但这样还不够，必须让',
                tachyon.sex,
                '彻底学到教训才行',
              ]);
              era.println();
              await tachyon.say_and_wait('嗯……嘶……哈啊……嗯♡');
              await tachyon.say_and_wait('唔♡嗯……哈啊♡');
              era.println();
              await era.printAndWait('……是错觉吗');
              await era.printAndWait([
                '怎么感觉 ',
                tachyon.get_colored_name(),
                ' 的声音似乎有些变味',
              ]);
              await era.printAndWait([
                '懂得见好就收的道理的 ',
                you.get_colored_name(),
                ' 看',
                tachyon.sex,
                '大概已经学到教训，便放松了手上的力道',
              ]);
              era.println();
              await tachyon.say_and_wait('呜～～～～～');
              await tachyon.say_and_wait('刚刚那么痛，现在忽然这么温柔…………');
              await tachyon.say_and_wait('不行……等……要……要不行了……♡');
              era.println();
              await era.printAndWait('……自己，应该只是在按摩而已吧');
              await era.printAndWait('没过多久，按摩结束');
              await era.printAndWait([
                you.get_colored_name(),
                ' 带着不知为何全身脱力的 ',
                tachyon.get_colored_name(),
                ' 回到了宿舍',
              ]);
              await era.printAndWait([
                '这样，',
                tachyon.sex,
                '应该就知道教训了吧',
              ]);
              era.println();
              await era.printAndWait('…………应该，知道了吧？');
              break;
            case 2:
              await tachyon.say_and_wait([
                '嗯～～',
                callname,
                '，来帮我按摩一下～～',
              ]);
              await tachyon.say_and_wait('要……那种按摩哦♡');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 抚摸着自己的双腿，暗示性的对 ',
                you.get_colored_name(),
                ' 说道',
              ]);
              await era.printAndWait('这家伙……果然没学乖啊');
              await era.printAndWait([
                '这次，必须真的让',
                tachyon.sex,
                '学到教训才行',
              ]);
              await era.printAndWait([
                '…………但是，自己的「教训」，会不会是对',
                tachyon.sex,
                '来说某种方面的奖励呢？',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' 慌忙把脑内的想法收了回去',
              ]);
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 应该还不至于变成那样吧',
              ]);
              await era.printAndWait('…………应该吧？');
              break;
            case 3:
              await tachyon.say_and_wait(['好痛……', callname]);
              await tachyon.say_and_wait('不，脚应该没事……');
              await tachyon.say_and_wait(
                '但是，某人的下半身有没有事就不知道了',
              );
              await tachyon.say_and_wait(
                '为什么在看到我脱袜子时，忽然弯下腰了呢♡',
              );
              await tachyon.say_and_wait('要是有伤就不好了……让我看看吧♡');
              era.println();
              await era.printAndWait([
                '听见 ',
                tachyon.get_colored_name(),
                ' 的话，',
                you.get_colored_name(),
                ' 僵在原地',
              ]);
              await era.printAndWait([
                '想上前去帮 ',
                tachyon.get_colored_name(),
                ' 检查，又怕',
                tachyon.sex,
                '真的做出什么来',
              ]);
              era.println();
              await tachyon.say_and_wait('唔……不过来吗？真是可惜～～');
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 拍了拍身上的灰尘，自己站了起来',
              ]);
              await era.printAndWait('这家伙……果然是装的啊');
          }
        } else {
          const buffer = [];
          if (era.get('relation:32:0') > 525) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([
                  '起不来了……',
                  callname,
                  '，背我～～',
                ]);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' 一听见 ',
                  you.get_colored_name(),
                  ' 的喊声，马上一屁股坐在了草地上',
                ]);
                await era.printAndWait([
                  '泪眼汪汪的朝 ',
                  you.get_colored_name(),
                  ' 喊道',
                ]);
                await era.printAndWait([
                  '原本的',
                  tachyon.sex,
                  '是这么爱撒娇的吗……？',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 有些无奈，但无论如何，今天确实不适合继续训练了',
                ]);
              },
              async () => {
                await tachyon.say_and_wait('真是的……明明可以继续跑下去的……');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 帮 ',
                  tachyon.get_colored_name(),
                  ' 检查双腿时，',
                  tachyon.get_colored_name(),
                  ' 鼓起了脸颊说道',
                ]);
                era.println();
                await you.say_and_wait(
                  '但我不能让速子冒这样的险……速子（的腿）对我来说，比什么都还要重要',
                );
                await tachyon.say_and_wait('！…………既然，你这么说的话');
                era.println();
                await era.printAndWait([
                  '不知道为什么，',
                  tachyon.get_colored_name(),
                  ' 忽然脸红了起来',
                ]);
                await era.printAndWait('不过愿意配合检查真是太好了');
              },
              async () => {
                await tachyon.say_and_wait([
                  '哼哼，区区一次实验失败而已，你不会以为这样就能把我击倒了吧，',
                  callname,
                ]);
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 担心的检查着 ',
                  tachyon.get_colored_name(),
                  ' 的双腿',
                ]);
                await era.printAndWait('结果，直到这时关心的还是实验吗？');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 不禁心里有些无奈和恼火',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  '再说……我相信 ',
                  callname,
                  '，你是绝对不会让我出事的，对吧？',
                ]);
                era.println();
                await you.say_and_wait('…………');
                await era.printAndWait([
                  '仔细想想，如果不是',
                  tachyon.sex,
                  '是这样专注于梦想，如此纯粹的',
                  tachyon.uma_sex_title,
                ]);
                await era.printAndWait([
                  '自己也不会这样跟着',
                  tachyon.sex,
                  '胡来了吧',
                ]);
                await era.printAndWait([
                  '在这个眼中只有梦想的狂想者乱来的时候，帮',
                  tachyon.sex,
                  '注意脚下的浅坑',
                ]);
                await era.printAndWait('这就是自己身为豚鼠的职责吧');
                era.println();
                await tachyon.say_and_wait(
                  '所以……回去检讨检讨，然后明天再继续实验吧！',
                );
                await you.say_and_wait('不，至少三天后');
                era.println();
                await era.printAndWait(
                  '那些梦想、远方的话暂且不提，最起码必须多观察两天才行',
                );
              },
            );
          } else if (era.get('relation:32:0') > 225) {
            buffer.push(
              async () => {
                await tachyon.say_and_wait([callname, '……好痛……']);
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' 眼中含泪的坐在草地上，朝着 ',
                  you.get_colored_name(),
                  ' 讨要安慰',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 连忙观察',
                  tachyon.sex,
                  '的伤势，确认没有大碍后才放下心来',
                ]);
              },
              async () => {
                await tachyon.say_and_wait(
                  '……没有关系，只是一时失败而已……重头再来实验……',
                );
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' 喃喃说着',
                ]);
                await era.printAndWait('……直到这时还在想实验的事吗');
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 有些无奈的帮',
                  tachyon.sex,
                  '检查双腿有无大碍',
                ]);
              },
              async () => {
                await tachyon.say_and_wait([
                  '咕嘶……',
                  callname,
                  '……我，我没事',
                ]);
                await era.printAndWait('只要，休息一下……哈啊');
                era.println();
                await you.say_and_wait('不行');
                await tachyon.say_and_wait('！？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 用最方便的姿势，将 ',
                  tachyon.get_colored_name(),
                  ' 的颈部和膝盖内侧抬起，抱在怀中',
                ]);
                await era.printAndWait([
                  '现在不是让',
                  tachyon.sex,
                  '任性的时候了，必须马上去保健室检查才行',
                ]);
                era.println();
                await tachyon.say_and_wait([
                  '等！',
                  callname,
                  '！我知道了！我会去的，所以放我下来！',
                ]);
                await you.say_and_wait('但是这样比较有效率不是吗？');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 不顾 ',
                  tachyon.get_colored_name(),
                  ' 的阻止，在众人的注目下将 ',
                  tachyon.get_colored_name(),
                  ' 抱到了保健室',
                ]);
              },
            );
          } else {
            buffer.push(
              async () => {
                await tachyon.say_and_wait('咕……还是太勉强了吗？');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' 听话的停了下来，',
                  you.get_colored_name(),
                  ' 慌忙上前检查',
                  tachyon.sex,
                  '的腿',
                ]);
                await era.printAndWait('……今天的训练只能到此结束了');
              },
              async () => {
                await tachyon.say_and_wait('腿……无法动弹');
                await tachyon.say_and_wait('实验失败了啊……');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' 踉跄的走了几步才停下',
                ]);
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 慌忙上前检查 ',
                  tachyon.get_colored_name(),
                  ' 的状态',
                ]);
                await era.printAndWait(
                  '还好……只是稍微有点拐到，应该不会成为大问题',
                );
                await era.printAndWait('只是必须先去保健室休息了……');
              },
              async () => {
                await tachyon.say_and_wait('我的极限……就只有这样了吗');
                era.println();
                await era.printAndWait([
                  you.get_colored_name(),
                  ' 冲了上去，在 ',
                  tachyon.get_colored_name(),
                  ' 踉跄的同时上去扶住了',
                  tachyon.sex,
                ]);
                await era.printAndWait([
                  '虽然是冲动下的行为，甚至可能会反过来被 ',
                  tachyon.get_colored_name(),
                  ' 指责，但 ',
                  you.get_colored_name(),
                  ' 依然毫无犹豫的上前了',
                ]);
                await era.printAndWait([
                  '也多亏于此，',
                  you.get_colored_name(),
                  ' 听见了 ',
                  tachyon.get_colored_name(),
                  ' 口中的话',
                ]);
                era.println();
                await you.say_and_wait(
                  '一定还能变强……速子的极限，绝对不只如此',
                );
                await tachyon.say_and_wait('…………');
                era.println();
                await era.printAndWait([
                  tachyon.get_colored_name(),
                  ' 没有作声，也不知道有没有将 ',
                  you.get_colored_name(),
                  ' 的话听进去',
                ]);
                await era.printAndWait([
                  '但',
                  tachyon.sex,
                  '开始慢慢的迈出了步伐，',
                  you.get_colored_name(),
                  ' 在身旁扶着',
                  tachyon.sex,
                  '走到保健室去进行检查',
                ]);
              },
            );
          }
          await get_random_entry(buffer)();
        }
      } else if (fail_again) {
        if (plan_b && era.get('cflag:32:育成回合计时') > 95) {
          era.drawLine();
          await tachyon.say_and_wait('啊……要摔倒了啊', true);
          era.println();
          await tachyon.say_and_wait('果然，还是放弃比较好吧', true);
          await tachyon.say_and_wait(
            ['反正，', call_25, ' 也已经成长起来了不是吗？'],
            true,
          );
          await tachyon.say_and_wait('虽然很遗憾，但……', true);
          era.println();
          await you.say_and_wait('速子！没事吧！');
          era.println();
          await tachyon.print_and_wait('……为什么这么着急呢');
          await tachyon.print_and_wait(
            '如果，真的没有相信我的梦想的人那也罢了',
          );
          await tachyon.print_and_wait([
            '但是……只有',
            you.sex,
            '，',
            you.sex,
            '的期待……',
          ]);
          await tachyon.print_and_wait(
            '算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止',
          );
          // 47+20=资深年五月四周=日本德比
        } else if (era.get('cflag:32:育成回合计时') > 47 + 20) {
          era.drawLine();
          await tachyon.say_and_wait('啊……要摔倒了啊', true);
          era.println();
          await tachyon.say_and_wait('果然，这样的话，还是放弃吧', true);
          await tachyon.say_and_wait('没关系的，因为有备用计划……', true);
          await tachyon.say_and_wait('虽然不甘心，但……', true);
          era.println();
          await you.say_and_wait('速子！没事吧！');
          era.println();
          await tachyon.print_and_wait('……不能啊');
          await tachyon.print_and_wait('已经不能回头了');
          await tachyon.print_and_wait([you.sex, '的支持，让我走到了这一步']);
          await tachyon.print_and_wait(
            '要是自己现在抽身，那可真是天大的笑话了',
          );
          await tachyon.print_and_wait('为了相信我的人……再坚持下去吧');
        } else if (reg_toky_yus) {
          era.drawLine();
          await tachyon.say_and_wait('啊……要摔倒了啊', true);
          era.println();
          await tachyon.say_and_wait('果然，这样的话，还是放弃吧', true);
          await tachyon.say_and_wait('没关系的，因为有备用计划……', true);
          await tachyon.say_and_wait('虽然不甘心，但……', true);
          era.println();
          await you.say_and_wait('速子！没事吧！');
          era.println();
          await tachyon.print_and_wait('……为什么这么着急呢');
          await tachyon.print_and_wait(
            '如果，真的没有相信我的梦想的人那也罢了',
          );
          await tachyon.print_and_wait([
            '但是……只有',
            you.sex,
            '，',
            you.sex,
            '的期待……',
          ]);
          await tachyon.print_and_wait(
            '算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止',
          );
        } else {
          await tachyon.say_and_wait('好痛');
          await tachyon.say_and_wait('好可怕');
          await tachyon.say_and_wait('果然……我的极限就是……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 这时才回过神来，朝着 ',
            tachyon.get_colored_name(),
            ' 奔去',
          ]);
          await era.printAndWait([
            '但',
            tachyon.sex,
            '口中只是不断的喃喃自语，仿佛没有看见自己',
          ]);
          await era.printAndWait([
            '过了好一会才回过神来，在 ',
            you.get_colored_name(),
            ' 的搀扶下到保健室去接受治疗',
          ]);
          await era.printAndWait('…………真的没问题吗？无论是身体还是心灵');
          await era.printAndWait([you.get_colored_name(), ' 想问出口']);
          await era.printAndWait([
            '但……当时没能喊出口阻止',
            tachyon.sex,
            '的自己，或许也没有在此时出言的资格吧',
          ]);
        }
      } else {
        await era.printAndWait('来不及');
        await era.printAndWait('还来不及出声');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 便已经踏稳了步伐',
        ]);
        await era.printAndWait('仿佛要将自己内心一直以来的不安消除一般');
        await era.printAndWait('朝着前方踏出了下一个步伐');
        await era.printAndWait('就这么继续，直到训练结束');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛胜利';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {boolean} do_sex 是否兴奋性爱（仅限男/Futa训练员 vs 女/Futa速子）
     */
    const f = async (tachyon, you, callname, do_sex) => {
      era.printButton('「跑的太棒了！」', 1);
      era.printButton('「还有改良的空间」', 2);
      const ret = await era.input();
      if (do_sex) {
        await era.printAndWait('砰');
        era.println();
        await era.printAndWait([
          '没等 ',
          you.get_colored_name(),
          ' 把称赞或勉励的话说出，',
          tachyon.get_colored_name(),
          ' 便直接逼了上来，将 ',
          you.get_colored_name(),
          ' 壁咚在墙上',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '哈啊……哈啊……抱歉啊，',
          callname,
          '……一不小心跑的有点过度兴奋了……身体稍微借我用一下',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '右手抵住墙壁，不让 ',
          you.get_colored_name(),
          ' 有逃走的机会，同时左膝抬起，顶在 ',
          you.get_colored_name(),
          ' 的胯下',
        ]);
        era.println();
        await tachyon.say_and_wait('没事的……没事……就一下……一下下就好……');
        era.println();
        await era.printAndWait([
          '不知究竟能够说服谁的话语不断流出，确认 ',
          you.get_colored_name(),
          ' 没有逃跑的想法后，',
          tachyon.sex,
          '缓缓蹲下身子，同时用颤抖的双手将 ',
          you.get_colored_name(),
          ' 的裤子脱下',
        ]);
        era.println();
        await era.printAndWait('噗咚');
        await era.printAndWait([
          '闷了一天的蒸气，与肉棒一同弹向了 ',
          tachyon.get_colored_name(),
          ' 的脸庞',
        ]);
        await era.printAndWait(
          '原来狂乱的双眼，顿时发直，只见得到眼前微微颤抖著的生殖器',
        );
        await era.printAndWait(
          '像见到狗尾巴草的小猫一般，不由得追逐起摇晃的肉棒',
        );
        await era.printAndWait(
          '但因比赛的刺激导致发情的身体在闻到那酝酿气味的瞬间便已经瘫软，导致能够跟著摇晃的也就只有那不停嗅著肉棒腥臭的鼻子了',
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            '身体提不起劲的 ',
            tachyon.get_colored_name(),
            '，只能勉强发出恳求的声音',
          ]);
          await era.printAndWait('对情感上而言无感，甚至厌恶的这个人');
          await era.printAndWait('对身体上渴求，希望被其填满的这个人');
          await era.printAndWait('最终，身体的渴求超越了情感的淡漠');
          era.println();
          await era.printAndWait('幸好，对方在坏的意义上并没有辜负自己');
          await era.printAndWait([
            '果然，是个会肆无忌惮对负责',
            tachyon.uma_sex_title,
            '出手的人渣',
          ]);
          era.println();
          await era.printAndWait([
            '被向前一步的训练员用肉棒填满饥渴到流出口水的小嘴的 ',
            tachyon.get_colored_name(),
            ' 幸福的这么想著',
          ]);
        }
        era.println();
        await era.printAndWait([
          '看见',
          tachyon.sex,
          '幸福表情的 ',
          you.get_colored_name(),
          ' 倒也想继续下去……',
        ]);
        era.println();
        era.printButton('「……晚点要Winning Live了」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          '怒目看著 ',
          you.get_colored_name(),
          '，但 ',
          you.get_colored_name(),
          ' 依然无情的将肉棒从',
          tachyon.sex,
          '的口中抽出',
        ]);
        await era.printAndWait([
          '为了先前',
          tachyon.sex,
          '的计划，最起码在赛场的这段期间，是不能发生任何有损于 ',
          tachyon.get_colored_name(),
          ' 名声的事情的',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '在理性与感性的挣扎下，终于还是控制住了自己的情慾，头也不回的朝著休息室走去',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 这才松了口气，没想到比赛带来的刺激竟然不只是精神上的健全刺激，就连那方面的刺激也……',
        ]);
        await era.printAndWait([
          '难道说，今后的比赛都得发生如今天一般的事情吗？',
          you.get_colored_name(),
          ' 不由得打了个冷颤',
        ]);
      } else if (ret === 1) {
        if (era.get('relation:32:0') > 225) {
          await tachyon.say_and_wait('是吧是吧？呵呵，这就是超越光速的跑法啊');
        } else {
          await tachyon.say_and_wait([
            '不过是实验的验算而已就高兴成这副模样，',
            callname,
            ' 你可真是天真啊',
          ]);
        }
      } else if (era.get('relation:32:0') > 225) {
        if (Math.random() < 0.5) {
          await tachyon.say_and_wait(
            '啧……无法反驳，但可以再多称赞一点的吧？都这么努力赢下比赛了',
          );
        } else {
          await tachyon.say_and_wait([
            '好过分啊，',
            callname,
            '。爱马赢了比赛还装成那副模样给谁看，快点快点，多夸夸我啊，快～～一～～点！',
          ]);
        }
      } else if (Math.random() < 0.5) {
        await tachyon.say_and_wait('哼……我知道，不用你多嘴');
      } else {
        await tachyon.say_and_wait(
          '很好，有新的发现那么这次的实验就不至于白费了',
        );
      }
      return [];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '实验的开始';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '这里是府中特雷森学园，今天 ',
        you.get_colored_name(),
        ' 我的梦想也在这里成长茁壮着',
      ]);
      await tachyon.say_and_wait('训练员君，张口');
      era.println();
      await era.printAndWait('成长茁壮着');
      era.println();
      await tachyon.say_and_wait('训练员君，去跑一圈试试速度');
      era.println();
      await era.printAndWait('成长茁壮');
      era.println();
      await tachyon.say_and_wait('训练员君，把药片含着，我说吞下去才能吞');
      era.println();
      await era.printAndWait('成长……？');
      era.println();
      await era.printAndWait([
        '在从一大早就被叫到实验室做了一早上实验后，',
        you.get_colored_name(),
        ' 内心的疑惑已然达到了巅峰',
      ]);
      era.println();
      await you.say_and_wait(
        ['现在这个时间应该是上课时间，', tachyon.sex, '不用去上学吗？'],
        true,
      );
      await you.say_and_wait('我，这个时候不是应该去做文书业务吗？', true);
      await you.say_and_wait(
        '为什么自己会在这里吃下一堆奇奇怪怪的药做各式各样的实验？',
        true,
      );
      era.println();
      await tachyon.say_and_wait('训练员君？你在发什么呆？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 疑惑的看着 ',
        you.get_colored_name(),
        '，脸上满是不耐',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '是 ',
        you.get_colored_name(),
        ' 前几天在训练场上看见的',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        '当时的 ',
        you.get_colored_name(),
        '，被',
        tachyon.sex,
        '那如光一般的速度和跑法所吸引，在冲动下就与',
        tachyon.sex,
        '签订了契约',
      ]);
      await era.printAndWait('然后，冲动下签下了许多奇奇怪怪的契约');
      await era.printAndWait('貌似，其中是包括了试药什么的');
      await era.printAndWait(
        '这么说来，当时的自己竟然就这样毫无怀疑的签下了吗？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 忍不住开始怀疑自己当时的心智状态',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 忽然回过神来']);
      await era.printAndWait([
        '刚才回忆花了太多的时间，',
        tachyon.get_colored_name(),
        ' 刚刚似乎叫了自己结果自己没有响应',
      ]);
      await era.printAndWait('完蛋了，不会被骂吧');
      await era.printAndWait([
        you.get_colored_name(),
        ' 毫无大人样的，战战兢兢抬头看向负责',
        tachyon.uma_sex_title,
        '，正好对上了',
        tachyon.sex,
        '盯着 ',
        you.get_colored_name(),
        ' 的双眼',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '那暗红色的双眼，如百叶窗一般将 ',
        you.get_colored_name(),
        ' 的目光吸入',
      ]);
      await era.printAndWait('—————不，准确而言，不是吸入');
      await era.printAndWait(
        '那目光只是静静的存在于哪里，但其本身，就如同一面窗户一般',
      );
      await era.printAndWait('使人不由自主想要去探清窗户后的一切');
      await era.printAndWait([
        '将人吸入的，不是',
        tachyon.sex,
        '的目光，而是自己的好奇心',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '的极限在哪里？']);
      await era.printAndWait([tachyon.sex, '的脑中到底在想些什么？']);
      await era.printAndWait([tachyon.sex, '的未来究竟能够如何璀璨？']);
      await era.printAndWait([tachyon.sex, '喜欢的类型是？']);
      await era.printAndWait([tachyon.sex, '穿的内裤是什么颜色的？']);
      await era.printAndWait('是戴套派还是吃药派的？');
      await era.printAndWait('敏感带是耳朵还是胸部？');
      await era.printAndWait('在床上喜欢什么体位？');
      era.println();
      await era.printAndWait('一切，一切');
      await era.printAndWait([
        tachyon.sex,
        '的一切 ',
        you.get_colored_name(),
        ' 都想要了解',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '看着 ',
        you.get_colored_name(),
        ' 的眼睛，忽然笑了',
      ]);
      era.println();
      await tachyon.say_and_wait('这种渴求的目光……就像小动物一样啊');
      era.println();
      await era.printAndWait('小动物？自己？');
      await era.printAndWait([you.get_colored_name(), ' 不由得感到有些羞耻']);
      await era.printAndWait('明明是大人的自己却被当成小动物来看待');
      era.println();
      await tachyon.say_and_wait('是啊……小动物，就像……实验动物一样');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '忽然陷入了沉思，不知道在思考些什么',
      ]);
      await era.printAndWait('然后，忽然点了点头');
      era.println();
      await tachyon.say_and_wait('……嗯，有了');
      era.println();
      await era.printAndWait([tachyon.sex, '自信满满的说道']);
      era.println();
      await tachyon.say_and_wait(['以后，就叫你 豚鼠君 吧！']);
      era.printButton('「豚，豚鼠？」', 1);
      await era.input();
      await tachyon.say_and_wait('呵呵，不是挺合适的吗？豚鼠君……豚鼠君……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 张口想说些什么，但又闭上了嘴，算了，称呼这种事爱怎么称呼就怎么称呼吧',
      ]);
      await era.printAndWait('看在那双使人发狂的双眸的份上');
    };
    f.title = title;
    return f;
  })(),
  ws_15: (() => {
    const title = '实验课题拟定';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await tachyon.say_and_wait('想要跑的比赛？');
      era.println();
      await era.printAndWait([
        '某旧理科准备室，或者说 ',
        tachyon.get_colored_name(),
        ' 的实验室内，',
        you.get_colored_name(),
        ' 坐在小沙发上对着在实验桌前的 ',
        tachyon.get_colored_name(),
        ' 点了点头',
      ]);
      await era.printAndWait([
        '虽然说这似乎是与',
        tachyon.uma_sex_title,
        '签约的第一天就该问的事情，但当时的 ',
        you.get_colored_name(),
        ' 似乎太为 ',
        tachyon.get_colored_name(),
        ' 着迷而导致几乎完全忘了这回事',
      ]);
      await era.printAndWait([
        '无论如何，既然打算参加闪耀系列赛，赛程的规划就一定是必须的，在问出',
        tachyon.sex,
        '的选择后，才能更好的为',
        tachyon.sex,
        '安排训练的针对方向',
      ]);
      await era.printAndWait('不管是三冠路线还是后冠，又或者英里？');
      await era.printAndWait([
        '短距离……大概不行吧，虽然很抱歉但 ',
        tachyon.get_colored_name(),
        ' 应该是没有那方面适性的',
      ]);
      era.println();
      await tachyon.say_and_wait('……比赛？不感兴趣');
      await tachyon.say_and_wait(
        '说到底我的研究是为了自身的可能性，别人如何与我何干，比较强弱，那是小孩子的游戏罢了',
      );
      await era.printAndWait([
        '非常有 ',
        tachyon.get_colored_name(),
        ' 特征的回答',
      ]);
      await era.printAndWait([
        '说实话，',
        tachyon.sex,
        '会这样回答完全不令人意外',
      ]);
      await era.printAndWait('但是，身为训练员而言，还是有着应尽的责任在');
      await era.printAndWait([
        '而且……身为被',
        tachyon.sex,
        '所吸引了目光的粉丝，想要看见自己的偶像在更大的舞台之上绽放光芒，这不也是理所当然的吗？',
      ]);
      era.println();
      await era.printAndWait([
        '因此，',
        you.get_colored_name(),
        ' 整理好语言，开口说道',
      ]);
      era.println();
      if (love >= 50 && relation <= 225 && tachyon.sex_code !== 1) {
        era.printButton(
          `「因为，你需要比赛，${tachyon.uma_sex_title}需要比赛」`,
          1,
        );
        await era.input();
        await era.printAndWait('这不是猜测，也不是虚张声势，而是事实的陈述');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 需要比赛，作为',
          tachyon.sex,
          '实验的验证',
        ]);
        await era.printAndWait([
          tachyon.uma_sex_title,
          '需要比赛，作为其斗争心的发泄',
        ]);
        await era.printAndWait([
          '能够一次满足两种所需，',
          tachyon.sex,
          '没有拒绝的理由',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……虽然明白你的意思，但你这说法是真不讨人喜欢啊',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 冷冷地看着 ',
          you.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait('看来，还是需要一剂猛的吗？这样的话……');
        era.println();
        await you.say_and_wait(
          '啊，要是速子是因为怕输所以才拒绝参赛的话，那我就能够理解了，',
        );
        await you.say_and_wait(
          '毕竟事关速子的尊严，这届的孩子里也有很多强者，',
        );
        await you.say_and_wait([
          '要是出现了实力上胜过速子的',
          tachyon.uma_sex_title,
          '出现，说什么超越极限的速子不就像……',
        ]);
        era.println();
        await era.printAndWait('笑话一样');
        await era.printAndWait([
          '在看见双手一挥掏出十根试管，太阳穴青筋直冒的 ',
          tachyon.get_colored_name(),
          ' 后，',
          you.get_colored_name(),
          ' 不得不将后面想说出的话吞入腹中',
        ]);
        await tachyon.say_and_wait([
          callname,
          '，你这人……人不讨喜就算了，还喜欢说些主动讨打的话，是真不怕死啊',
        ]);
        await you.say_and_wait('呜呜呜呜……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 想开口辩解，却因为嘴被 ',
          tachyon.get_colored_name(),
          ' 用手捂住而说不出话来',
        ]);
        era.println();
        await tachyon.say_and_wait('让我想想……有了');
        era.println();
        await era.printAndWait([
          '似乎是觉得一直这样捂着有些麻烦，',
          tachyon.get_colored_name(),
          ' 灵光一闪',
        ]);
        await era.printAndWait([
          '同时，',
          you.get_colored_name(),
          ' 的脑中也忽然闪过一阵电流，彷佛在预告有什么不好的事情将要发生',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '缓缓拉起白大褂的下摆，此时 ',
          you.get_colored_name(),
          ' 心中的危险预感已经达到了巅峰，可就算想跑又能往哪里跑呢？',
        ]);
        await era.printAndWait([
          '更何况，从',
          tachyon.uma_sex_title,
          '手中逃脱？',
          you.get_colored_name(),
          ' 虽然被 ',
          tachyon.get_colored_name(),
          ' 称为疯狂，但也不是弱智，不会妄想那种没有可能的事情',
        ]);
        era.println();
        await era.printAndWait('白大褂的下方，是反射着润光的黑色裤袜');
        await era.printAndWait(
          '从一大早开始，便将丰腴的臀部，纤细的美腿封藏于内的闷热裤袜，在经过了一天的窖藏，已经从里到外完全的入味完毕',
        );
        await era.printAndWait([
          '加上穿着这双裤袜的，还是一向生活邋遢的 ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 惊恐的摇着头，但一切已经来不及了',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '缓缓褪下裤袜，当裤袜从臀部褪下的瞬间，',
          you.get_colored_name(),
          ' 彷佛看见 ',
          tachyon.get_colored_name(),
          ' 的身体都因那翘臀的反弹而抖了一下',
        ]);
        await era.printAndWait([
          '裤袜缓缓脱到胯部，彷佛不希望酿造至今的味道从中散去一般，黑色的丝绸却还与',
          tachyon.child_sex_title,
          '子双腿间那神奇的部位牵连着线————',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '今天不会没穿内裤吧？',
          you.get_colored_name(),
          ' 忽然想到，看这牵丝，大概真相不言自明',
        ]);
        await era.printAndWait(
          '彷佛舞台揭幕一般，接着将底下雪白的大腿肌肤露出，也象征着——惨绝人寰的悲剧即将开演',
        );
        era.println();
        await tachyon.say_and_wait(['来，', callname, '，张口～～']);
        era.printButton('「呜呜呜呜！！」', 1);
        await era.input();
        await era.printAndWait([
          '这样下去不行，在内心的驱使下，',
          you.get_colored_name(),
          ' 还是忍不住做出了徒劳的尝试',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 慌忙四肢着地的想逃出实验室，但也如预想的一般，只踏出去一步就被 ',
          tachyon.get_colored_name(),
          ' 以人类无法反应过来的速度坐在了背上',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '骑在 ',
          you.get_colored_name(),
          ' 的背上，用裤袜勒住了 ',
          you.get_colored_name(),
          ' 的嘴，就彷佛口球一般将 ',
          you.get_colored_name(),
          ' 固定住，被勒的受不了的 ',
          you.get_colored_name(),
          ' 张开了嘴，裤袜顺势卡住了 ',
          you.get_colored_name(),
          ' 的脸颊及嘴角',
        ]);
        await era.printAndWait([
          '瞬间，酸爽的臭味弥漫了 ',
          you.get_colored_name(),
          ' 的口中，濡湿的口感，以及淡淡来自胯下的骚臭味从 ',
          you.get_colored_name(),
          ' 的鼻腔侵入，被这猛烈的气味攻势突袭，导致 ',
          you.get_colored_name(),
          ' 不由得四肢发软跪倒在地',
        ]);
        era.println();
        await tachyon.say_and_wait('哼……稍微出了口恶气了，回到正题来吧。');
        await tachyon.say_and_wait('参加比赛当然是必须的，至于选择的赛事……');
        await tachyon.say_and_wait(
          '呵呵，那么就以三冠为目标吧，刚刚说成那样，要是敢拖了我的后腿小心剥了你的皮，没有异议吧？',
        );
        era.println();
        await era.printAndWait([
          '在被熏的失去意识前，',
          you.get_colored_name(),
          ' 的最后一个想法是：哪怕有意见也要 ',
          you.get_colored_name(),
          ' 让我说出口啊……',
        ]);
      } else {
        if (
          love >= 50 &&
          relation > 225 &&
          tachyon.sex_code - 1 &&
          you.sex_code > 0
        ) {
          era.printButton('因为……', 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' 正想说出口，却被转过身来的 ',
            tachyon.get_colored_name(),
            ' 按住了嘴唇无法开口',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '站起身来，压住了坐在沙发上的 ',
            you.get_colored_name(),
            '，与 ',
            you.get_colored_name(),
            ' 四目相对的凝视着',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '我知道你想说什么，也知道于公于私我都有参加比赛的理由及必要性，但是……',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '转过身来，一屁股坐在 ',
            you.get_colored_name(),
            ' 的大腿上，拍了拍 ',
            you.get_colored_name(),
            ' 的大腿外侧',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '但我现在没有参加比赛的兴致，所以好好想想办法，说些话来讨好我吧，要是心情好了……说不定我就愿意参赛了呢？',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 露出苦笑，环抱住 ',
            tachyon.get_colored_name(),
            ' 的腰',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '十分自然的往里蹭了蹭，调整成最舒服的姿势',
          ]);
          era.println();
          await you.say_and_wait('速子最帅了');
          await you.say_and_wait('速子好可爱');
          await you.say_and_wait('速子好漂亮');
          await you.say_and_wait(['最厉害最强的', tachyon.uma_sex_title]);
          await you.say_and_wait([
            '超光速的',
            tachyon.sex_code === 1 ? '王子' : '公主',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 不停在 ',
            tachyon.get_colored_name(),
            ' 耳边倾诉着称赞',
            tachyon.sex,
            '的话语',
          ]);
          await era.printAndWait([
            '而',
            tachyon.sex,
            '的耳朵也不停的晃着，显露出这些话的受用程度',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '露出了洋洋得意的表情，用力拍打 ',
            you.get_colored_name(),
            ' 的大腿示意继续',
          ]);
          era.println();
          await tachyon.say_and_wait('哼哼……再来，再来，多说点！');
          era.println();
          await era.printAndWait([
            '被拍的有些吃痛的 ',
            you.get_colored_name(),
            ' 心念一转，起了恶作剧的念头',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 将环抱的手放开，移到',
            tachyon.sex,
            '的大腿外侧',
          ]);
          era.println();
          await tachyon.say_and_wait(['……？', callname, '？']);
          era.printButton('「好想看速子在跑步时这对大屁股摇晃的模样啊」', 1);
          await era.input();
          await era.printAndWait([
            you.get_colored_name(),
            ' 用力一拍',
            tachyon.sex,
            '那丰满的臀部',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '全身颤了颤，那刚好合身紧贴的裤袜迭起了千层黑色浪花',
          ]);
          await you.say_and_wait(
            '好想在比赛结束后，在休息室里狠狠把速子的里面灌满白浆',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' 的口气依然如先前夸赞时一般轻柔，话中的内容却是无比粗鄙的言语',
          ]);
          await era.printAndWait([
            '然而，不知是不是错觉，感觉 ',
            tachyon.get_colored_name(),
            ' 的耳朵反而更加挺直了',
          ]);
          era.println();
          await you.say_and_wait(
            '然后，用按摩棒把速子的里面堵住，就这么让速子上台去跳winning live',
          );
          await you.say_and_wait(
            '穿着表演服的速子就这么顶着腹部的突起站上舞台中央……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' 缓缓抚摸',
            tachyon.sex,
            '的肚子，想将话说完……',
          ]);
          await era.printAndWait([
            '然而，',
            you.get_colored_name(),
            ' 的手被握住了',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 转头看向了 ',
            you.get_colored_name(),
            '，不知不觉间，那暗红色的瞳孔已经变为了充满情欲的浅粉',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……说这种话来挑逗我……下场是什么你明白的吧……❤',
          ]);
          era.println();
          await era.printAndWait('啊啊，好像玩过头了呢');
          await era.printAndWait([
            '不知从何时开始，',
            tachyon.get_colored_name(),
            ' 的屁股靠着 ',
            you.get_colored_name(),
            ' 的下腹',
          ]);
          await era.printAndWait('不断的磨蹭着，彷佛在等待主人调教的小狗一般');
          era.println();
          await era.printAndWait([
            '虽然就这么开始做也不是不行……但一开始 ',
            you.get_colored_name(),
            ' 的目的是什么来着……？',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '比赛会参加的❤️三冠❤️目标就三冠吧❤️好了……',
            callname,
            '❤️快点❤️来嘛❤️',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 露出笑容，翻身将 ',
            tachyon.get_colored_name(),
            ' 压在身下',
          ]);
        } else if (relation <= 225) {
          era.printButton('诱之以利', 1);
          await era.input();
          await you.say_and_wait(
            '要是参加比赛的话，比赛后的奖金不是可以用在实验上吗，这样研究经费的问题就解决了吧',
          );
          era.println();
          await era.printAndWait([
            '先诱之以利，对于 ',
            tachyon.get_colored_name(),
            ' 这样的研究者而言，谈论感情那也未免太过可笑，最好的办法就是在道理上说服对方',
          ]);
          await tachyon.say_and_wait([
            '驳回，',
            callname,
            '，我的研究副产物本身就能够用于卖钱，而为了这些比赛准备所浪费的时间在机会成本上来看已经远远大过于比赛奖金本身带来的益处了',
          ]);
          era.println();
          await you.say_and_wait(
            '但比赛吸引而来的粉丝呢，粉丝的消费能力也能提供不少的经费吧？',
          );
          era.println();
          await tachyon.say_and_wait(
            '你说的对，如果真的能够获得人气的话那么利益或许确实会大于研究本身可带来的利益……',
          );
          await tachyon.say_and_wait(
            '但是，那样的话花在所谓粉丝福利上的时间也需要更多，如Winning Live或是经营自己的社会形象等等，时间成本也会更加提升',
          );
          await tachyon.say_and_wait(
            '除此之外，你似乎忘了一件事，我需要钱，是用以作为实验经费，实验，才是我的根本目的，而非赚钱',
          );
          era.println();
          await you.say_and_wait(
            '……要是放弃参加比赛的话，那算是与特雷森学园建校方针相悖的行为…',
          );
          await you.say_and_wait(
            '虽说一般而言应该不会这么严重，但如果是前面就有过前科的速子……最坏的情况可能导致退学',
          );
          era.println();
          await era.printAndWait('诱之以利不行，那就威之以势');
          await era.printAndWait(
            '虽说这样吓唬人不大好，但不得不说这确实是有可能的走向……',
          );
          await era.printAndWait([
            '只是那名理事长大概是不会允许这种事发生的吧，但现在姑且还是能拿来吓唬一下 ',
            tachyon.get_colored_name(),
          ]);
          era.println();
          await era.printAndWait([
            '但 ',
            tachyon.get_colored_name(),
            ' 的反应，就彷佛听见了什么好笑的笑话一般',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '，你还记得我们第一次见面那时候吗？那时候我就已经被退学威胁过一次了，你真的认为我会在乎吗？',
          ]);
          era.println();
          await you.say_and_wait('！', true);
          await era.printAndWait('瞬间被点破了盲点');
          await era.printAndWait([
            '印象中，当时的自己听见可能退学的说法时就飞一般的去寻找 ',
            tachyon.get_colored_name(),
            ' 了',
          ]);
          await era.printAndWait([
            '但反过来呢？当时的',
            tachyon.sex,
            '，依然故我的在实验室里做着自己的实验',
          ]);
          await era.printAndWait(
            '从与自己签下契约时的态度来看，也不像是有替代方案的样子',
          );
          await era.printAndWait([
            '换句话说……',
            tachyon.sex,
            '是真的不在乎被退学与否的',
          ]);
          era.println();
          await era.printAndWait([
            '该怎么办……利诱不成，威逼也不成的',
            tachyon.sex,
            '，到底还有什么办法……',
          ]);
          era.printButton('放弃', 1);
          era.printButton('继续思考', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              '束手无策，大概就是此时 ',
              you.get_colored_name(),
              ' 的状态吧',
            ]);
            await era.printAndWait([
              '已经毫无办法，对 ',
              tachyon.get_colored_name(),
              ' 而言，',
              tachyon.sex,
              '的所需都没有必要从比赛中获得',
            ]);
            await era.printAndWait([
              '这样的 ',
              you.get_colored_name(),
              '，也只能使出前面自己最不认为会被接受的办法了',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '那么，',
              callname,
              '，你还有什么说服我的办法吗？',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '饶有兴致的看着 ',
              you.get_colored_name(),
              '，下一秒脸上的兴趣却转为了吃惊',
            ]);
            await era.printAndWait(
              '原因也很简单，无论任何人，看见原本好端端在自己身前说话的人忽然跪坐在地，也一定会露出吃惊的表情吧',
            );
            era.println();
            era.printButton('「因为……想看」', 1);
            await era.input();
            await you.say_and_wait('我想看见速子在赛场上奔跑的模样');
            await you.say_and_wait([
              '想看见速子与其他',
              tachyon.uma_sex_title,
              '在拼斗后最后赢下的样子',
            ]);
            await you.say_and_wait(
              '想看速子站在Winning Live的中心C位闪烁的模样！',
            );
            await era.printAndWait(
              '声音越说越强，人也越说越激动，到最后一句几乎是用喊的喊出来的',
            );
            await era.printAndWait([
              '最后的动之以情，发自内心把自己心中的话说出，希望能够被 ',
              tachyon.get_colored_name(),
              ' 听进去',
            ]);
            await era.printAndWait('虽说……一切大概只是自己的自作多情而已');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 战战兢兢的将头贴在地上，等待着对方的回答',
            ]);
            era.println();
            await tachyon.say_and_wait('………就为了这种事……下跪？');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 没有抬起头，只是继续跪在地上',
            ]);
            era.println();
            await tachyon.say_and_wait('我不在乎比赛，不在乎是否退学');
            await tachyon.say_and_wait([
              '说坦白讲，跟着这样的',
              tachyon.uma_sex_title,
              '也只会造成困扰吧……',
            ]);
            await tachyon.say_and_wait(
              '如果我是你的话，我会选择在现在就因为协商不一提出负责合同的解除……结果你……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '似乎想不到该怎么形容 ',
              you.get_colored_name(),
              ' 的行为，因此一时语顿',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '…………你的脑袋到底在想什么，有这个必要吗？值得吗？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 没有说话，只是抬起头来，看向',
              tachyon.sex,
            ]);
          } else {
            await era.printAndWait([
              '忽然，',
              you.get_colored_name(),
              ' 彷佛从',
              tachyon.sex,
              '的话语中得到了什么启发',
            ]);
            era.println();
            await era.printAndWait([
              '虽说你们认识的可能，大概，或许还没有那么久',
            ]);
            await era.printAndWait([
              '但根据 ',
              you.get_colored_name(),
              ' 对 ',
              tachyon.get_colored_name(),
              ' 这名',
              tachyon.uma_sex_title,
              '的了解……',
            ]);
            await era.printAndWait([
              tachyon.sex,
              '是不会浪费时间在毫无意义的事情上面的',
            ]);
            await era.printAndWait('没错，不会在毫无意义的事情上');
            await era.printAndWait('那么换句话说');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '肯花时间去做的事情，那必然是具有其意义在的',
            ]);
            await era.printAndWait('那么，问题1');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '，进入特雷森学园的理由是？',
            ]);
            era.println();
            await era.printAndWait([
              '如果真的没有必要，那么',
              tachyon.sex,
              '必然不会如此选择',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 能从进入特雷森学园获得的好处……',
            ]);
            await era.printAndWait([
              '这想都不用想，从',
              tachyon.sex,
              '的目标来看足以——寻找',
              tachyon.uma_sex_title,
              '的可能性，超越可能性的界限',
            ]);
            await era.printAndWait([
              '既然如此，那就需要先研究透彻',
              tachyon.uma_sex_title,
              '的一切才能谈及极限',
            ]);
            await era.printAndWait([
              '所以，拥有最多高质量的',
              tachyon.uma_sex_title,
              '所聚集的特雷森学园绝对是最佳的研究场所，没有之一',
            ]);
            await era.printAndWait([
              '因此，被退学绝对不是',
              tachyon.sex,
              '说的那般可有可无',
            ]);
            era.println();
            await era.printAndWait('问题2');
            await era.printAndWait([
              '为什么 ',
              tachyon.get_colored_name(),
              ' 要以学生的身份进入学园',
            ]);
            era.println();
            await era.printAndWait([
              '特雷森学园除去学生也是有着各式各样的支持职位，也有非赛',
              tachyon.uma_sex_title,
              '学科，如果说想避免这些麻烦为什么不从一开始就加入这些科系？',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 彷佛捉住了什么灵感',
            ]);
            era.println();
            await era.printAndWait([
              '成为赛',
              tachyon.uma_sex_title,
              '的原因，就是为了上场比赛',
            ]);
            await era.printAndWait([
              '如果不上场比赛的话，那么根本没有选择成为赛',
              tachyon.uma_sex_title,
              '的必要',
            ]);
            await era.printAndWait([
              '到此，已经可以宣布 ',
              tachyon.get_colored_name(),
              ' 前面说的不想参加比赛什么……',
            ]);
            await era.printAndWait([
              '不知道，虽然不知道',
              tachyon.sex,
              '这么骗人的理由，但是',
            ]);
            await era.printAndWait(
              '如果只是度过眼前这关，那也不需要知道那么多',
            );
            era.println();
            era.printButton('「你在乎，因为实验需要验证」', 1);
            await era.input();
            await era.printAndWait('没有错');
            await era.printAndWait('这就是参加比赛的原因');
            await era.printAndWait('一切都是为了研究及最终的目的');
            era.println();
            await you.say_and_wait([
              '如果连其他',
              tachyon.uma_sex_title,
              '，甚至同期都无法战胜，那还谈何超越速度极限？',
            ]);
            await you.say_and_wait([
              '虽然你我都有 ',
              tachyon.get_colored_name(),
              ' 能够战胜任何人的信心，但实验的验证依然是必须的',
            ]);
            era.println();
            await era.printAndWait('就好比1+1=2');
            await era.printAndWait(
              '即便所有人都知道这个答案的正确与否，还是需要存在验算及式子',
            );
            await era.printAndWait('这不是多余的步骤，而是研究的严谨性');
            await tachyon.say_and_wait('……说得好，但是，还有仿真赛呢？');
            await tachyon.say_and_wait(
              '哪怕并非比赛，我也能找到机会，与同期甚至更强的对手一较高下，也不用担心会找不到人',
            );
            await tachyon.say_and_wait(
              '如果说我真能表现出自己的强悍，那么沉浸于本能的那些凶兽是不会放过与我一决高下的机会的，不是吗？',
            );
            era.println();
            await era.printAndWait('听上去十分具有说服力的回答');
            await era.printAndWait([
              '即便是模拟赛，只要有机会能够与 ',
              tachyon.get_colored_name(),
              ' 这般强悍的',
              tachyon.uma_sex_title,
              '一较高下，那么绝对不用担心对方不会拿出100%的实力来',
            ]);
            await era.printAndWait('但是……');
            era.println();
            era.printButton(
              `「你有见过，发挥出120%实力的${tachyon.uma_sex_title}吗？」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait('…………哦？');
            await era.printAndWait(
              '模拟赛所能表现出来的，从来就只是平常的实力',
            );
            await era.printAndWait('要想超越极限，只有在真正的赛场上才有办法');
            await era.printAndWait('从古至今，那么多的赛场爆冷，不都是如此？');
            era.printButton(
              `「${tachyon.uma_sex_title}的特性，便是只有在赛场上才能发挥出超越极限的实力」`,
              1,
            );
            await era.input();
            await tachyon.say_and_wait(
              '…………原来如此，这是你身为训练员的看法吗？除此之外呢？还有其他的理由吗？',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '依旧用着那种说不清道不明的玩味目光望着 ',
              you.get_colored_name(),
              '，',
              you.get_colored_name(),
              ' 不由得感到有些不自在',
            ]);
            await era.printAndWait([
              '但 ',
              you.get_colored_name(),
              ' 还是坚持，将埋藏在 ',
              you.get_colored_name(),
              ' 心中最深的理由说出',
            ]);
            era.println();
            era.printButton('「…………我想看」', 1);
            await era.input();
            await tachyon.say_and_wait('嗯？');
            await tachyon.say_and_wait('…………');
            await you.say_and_wait('我想看见速子在赛场上奔跑的模样，');
            await you.say_and_wait([
              '想看见速子与其他',
              tachyon.uma_sex_title,
              '在拼斗后最后赢下的样子',
            ]);
            await you.say_and_wait(
              '想看速子站在 Winning Live 的中心C位闪烁的模样',
            );
            era.println();
          }
          await era.printAndWait([
            tachyon.sex,
            '仔细端详了 ',
            you.get_colored_name(),
            ' 的神情，随后将目光停留在 ',
            you.get_colored_name(),
            ' 的眼睛，就如你们初次见面那时一般，凝视着 ',
            you.get_colored_name(),
            ' 的眼眸深处',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…………呵呵，疯子配狂人吗？有意思，有意思！',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 有些忐忑不安的望着忽然开始大笑的',
            tachyon.sex,
          ]);
          await era.printAndWait([
            '虽然不太明白',
            tachyon.sex,
            '的情绪为何变动如此剧烈，但看起来……事态似乎在朝着对 ',
            you.get_colored_name(),
            ' 有利的方向发展？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '既然如此，为了实验动物的积极度，有时候适度的奖励也是必须的吧。',
          );
          await tachyon.say_and_wait(
            '我同意了，我会参加比赛的。那么既然决定了要跑，那就先简单拿下个经典三冠再说……',
          );
          await tachyon.say_and_wait(['你不会说做不到吧，', callname, '？']);
          era.println();
          await era.printAndWait(['但是，', tachyon.sex, '补充道']);
          era.println();
          await tachyon.say_and_wait([
            '作为代价……可千万别让我感到无趣了啊，',
            callname,
          ]);
        } else {
          era.printButton('「因为，我想看」', 1);
          await era.input();
          await tachyon.say_and_wait('……哈？');
          await you.say_and_wait('我想看见速子在赛场上奔跑的模样，');
          await you.say_and_wait([
            '想看见速子与其他',
            tachyon.uma_sex_title,
            '在拼斗后最后赢下的样子',
          ]);
          await you.say_and_wait(
            '想看速子站在 Winning Live 的中心C位闪烁的模样',
          );
          await era.printAndWait('以及，除此之外……');
          await era.printAndWait([
            you.get_colored_name(),
            ' 想了想，又补充说道',
          ]);
          era.println();
          await you.say_and_wait(
            '当然，要是，真的，如果万一的话，也想看看速子输掉比赛趴在地上不甘心的痛苦的样子！',
          );
          await tachyon.say_and_wait('！');
          era.println();
          era.printButton('（哎呀，激将生效了？）', 1);
          await era.input();
          await you.say_and_wait(
            '「不过，要是速子害怕输掉的话也不是不能理解，这样的话确实还是不参加的好……」',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' 又故意瞄了 ',
            tachyon.get_colored_name(),
            ' 一眼，发现',
            tachyon.sex,
            '的态度有些不对，连忙闭上嘴，见好就收',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……居然敢把卡里古拉效应用在我身上，',
            callname,
            ' 你好大的胆子啊',
          ]);
          await you.say_and_wait('我没……咕噗！！？');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 想反驳，却被站起身来的 ',
            tachyon.get_colored_name(),
            ' 以重力加速度用力坐在了腹部上，使 ',
            you.get_colored_name(),
            ' 不由得发出彷佛青蛙被压扁的声音',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '哼……为了自己的一己之私，就想把天才的我的宝贵时间浪费在这种无聊的斗兽上吗？真是胆大妄为啊',
          ]);
          era.printButton('「我不是那个意思……」', 1);
          await era.input();
          await you.say_and_wait(
            '再说，参加比赛也可以搜集到需要的实验数据不是吗……',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 调整了下，将 ',
            you.get_colored_name(),
            ' 的姿势调整到了最适合',
            tachyon.sex,
            '舒服坐着的人肉靠椅的姿势',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 也很自然的将手抬起，放在',
            tachyon.sex,
            '的肩上为',
            tachyon.sex,
            '按摩',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '呼……真是帮大忙了，最近一直坐在实验桌前，全身酸痛的要命……',
          );
          await tachyon.say_and_wait('至于参加比赛……');
          await tachyon.say_and_wait('倒也不是不行，目标，就先订个三冠吧，');
          await tachyon.say_and_wait(
            '要是连同期中的第一都做不到，那确实没什么资格谈论极限……',
          );
          await tachyon.say_and_wait([
            '那么，',
            callname,
            '，你会尽心尽力辅佐我的吧？',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 看着',
            tachyon.sex,
            '疯狂的眼神，笑着说道',
          ]);
          era.printButton('「那是当然」', 1);
          await era.input();
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 的目标决定了',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '课题可行性分析';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        '如果说',
        tachyon.uma_sex_title,
        '与训练员的初遇，是两人的齿轮开始转动的瞬间',
      ]);
      await era.printAndWait(
        '那么这一天，就是这齿轮运转的声音，震撼世界的瞬间',
      );
      await era.printAndWait([
        '…………最起码，对其他',
        tachyon.uma_sex_title,
        '而言是如此的',
      ]);

      era.printButton('「速子！」', 1);
      await era.input();
      await era.printAndWait([
        '倘若自己的',
        tachyon.uma_sex_title,
        '真的有这种彷佛史诗的开卷一般的感想的话，现在大概便不会耗费重要的赛前准备时光于与其他',
        tachyon.uma_sex_title,
        '聊天上了吧',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '因此，所谓时间，不过是人为给予的定义罢了，本身就只是个人类创造出的单位，快与慢更是相对的概念而已…………',
      );
      await tachyon.say_and_wait(['哦呀，', callname, '？你来了啊']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 不由得感到无语，还差几分钟参赛',
        tachyon.uma_sex_title,
        '就要入场，一辈子理论上只有这么一次的首场出道赛，',
      ]);
      await era.printAndWait([
        '身为第一人气主角的',
        tachyon.sex,
        '，却在比赛开始前还在一旁与人聊天，聊的还是这种无关紧要的话题',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 向那几名听 ',
        tachyon.get_colored_name(),
        ' 的论点听的如痴如醉的孩子道别后，拉着 ',
        tachyon.get_colored_name(),
        ' 走下地下道',
      ]);
      if (you.sex_code === 1) {
        era.println();
        await tachyon.say_and_wait([
          '男人如此急躁可是会被讨厌的啊，',
          callname,
        ]);
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '依旧不慌不忙的跟在 ',
        you.get_colored_name(),
        ' 身后',
      ]);
      await era.printAndWait([
        '你们两人的脚步声在空荡的地下道内回荡着，气氛一时竟有些尴尬',
      ]);

      era.printButton('「……没想到，你这么善于与人交流啊」', 1);
      await era.input();
      await era.printAndWait([
        '开口就是明显的没话找话式发言，但 ',
        tachyon.get_colored_name(),
        ' 似乎没注意到这份尴尬，又或者注意到了但装作没注意的说道',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '那还用说，不偶尔经营一下个人形象哪里能有源源不绝的实验品呢',
      );
      era.println();
      await era.printAndWait('要是真在意形象的话平常就别做那些奇怪的事啊……');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，你还嫩的很啊，形象这种东西，人们最喜欢的就是为恶人赋予理由，为善人寻找破绽',
      ]);
      await tachyon.say_and_wait(
        '比起塑造一个完美人设被揭穿，他们更喜欢为一个疯狂科学家寻找他受人排挤的理由并加以同情',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '冷笑一声']);
      era.println();
      await tachyon.say_and_wait([
        '刚刚的对话只是植入种子，等到待会的比赛赢下今天的对话就能在',
        tachyon.couple_title,
        '心底生根发芽',
      ]);
      await tachyon.say_and_wait(
        '未来碰到问题时，自然会来寻找『亲切的速子前辈』来解答了，',
      );
      await tachyon.say_and_wait([
        '而仁慈的我，当然会无偿帮助',
        tachyon.couple_title,
        '',
      ]);
      await tachyon.say_and_wait(
        '不过，作为答谢让我纪录点实验数据也是应当的吧？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 不由得冒出冷汗，虽说大概能猜到是为了形象之类的东西，却没想到竟然算计到如此后头了',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait('哦呀哦呀，不会是某人嫉妒了吧？');
        era.println();
        await era.printAndWait([
          '似乎误会了什么，',
          tachyon.get_colored_name(),
          ' 忽然贴近了 ',
          you.get_colored_name(),
          ' 的身体',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '忽然从背后抱住了 ',
          you.get_colored_name(),
          ' 的身子，纤纤素手却不干净的在 ',
          you.get_colored_name(),
          ' 身上胡乱抚摸着，最后停留在文件下的位置',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await era.printAndWait([
            tachyon.sex,
            '隔着裤子，缓缓勾勒出凸起的形状，随着 ',
            you.get_colored_name(),
            ' 身体部位的苏醒，',
            tachyon.sex,
            '的动作也从原来的轻轻描绘转为了抓握撸动',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '放心吧，比起女性，我还是喜欢被填满的感觉',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '靠在 ',
            you.get_colored_name(),
            ' 的耳边，用如兰一般的口气说道',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '不过……要是你变成女性的话，说不定也能接受呢？',
          );
          era.println();
        }
        await era.printAndWait([
          tachyon.sex,
          '咯咯一笑，放开了 ',
          you.get_colored_name(),
          '，自顾自朝着赛场走去',
        ]);
      }
      era.printButton('「……再怎么说，要是没赢下你的安排不就胎死腹中了？」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 没有回头，径直走向了光芒处',
      ]);
      await era.printAndWait([
        '由于忽然从黑暗的地下道望出，导致 ',
        you.get_colored_name(),
        ' 甚至感到刺眼的光芒',
      ]);
      await era.printAndWait([
        '在泪水的映照下，走上赛场的',
        tachyon.sex,
        '，宛如融化在光中一般',
      ]);
      era.println();
      await tachyon.say_and_wait('你只需要在这里乖乖等着我的胜利凯旋就够了');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '研究基础与工作条件';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      era.printButton('「跑的太精彩了！就像光一样！」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '不过是实验的验算而已就高兴成这副模样，',
        callname,
        ' 你可真是天真……啊！',
      ]);
      era.printButton('怎么了！', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着忽然发出声音的 ',
        tachyon.get_colored_name(),
        '，内心一阵紧张',
      ]);
      await you.say_and_wait('比赛后……难不成，是腿……', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 慌忙上前想要确认 ',
        tachyon.get_colored_name(),
        ' 腿的状况，但……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '完蛋完蛋！我忘记回收装在闸门上用来记录出闸速度的仪器了！',
      );
      era.println();
      if (relation > 225) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 叹了口气，原来是因为这个吗',
        ]);
        era.printButton('「没有问题，出闸速度已经记录好了」', 1);
        await era.input();
        await era.printAndWait([
          '虽然不到心灵相通，但身为 ',
          tachyon.get_colored_name(),
          ' 的训练员',
        ]);
        await era.printAndWait([
          '也多少知道',
          tachyon.sex,
          '会需要怎么样的数据，这种事说到底本就不应该在场上奔跑的',
          tachyon.sex,
          '来担心',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '哦哦！干得好啊，',
          callname,
          '！现在就马上来确认吧！',
        ]);
        era.println();
        await era.printAndWait([
          '刚获得的胜利、即将开始的 Winning Live，一切的一切都不在你们眼中，彷佛刚才并非跑了场比赛，而只是一场普通的研究一般',
        ]);
        era.println();
        await era.printAndWait([
          '你们不停观看着纪录下来的数据，提出一个又一个的猜想，直到 Winning Live 开始，外面传来了急促的敲门声才回过神来',
        ]);
      } else {
        await era.printAndWait('什，什么玩意！？');
        await era.printAndWait(
          '在闸门内等待起跑的时候，这个人还有心情去做这种事？',
        );
        await era.printAndWait('不，说到底随便乱在闸门上加感测仪器什么的');
        await era.printAndWait([you.get_colored_name(), ' 不由得感到一阵胃痛']);
        era.println();
        await era.printAndWait([
          '在那之后，为了回收器械 ',
          you.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 潜入了赛场……',
        ]);
        await era.printAndWait([
          '不用说，自然被 URA 的人发现了，再三道歉后，',
          tachyon.get_colored_name(),
          ' 总算成功回收了器械。一切都十分顺利',
        ]);
        await era.printAndWait([
          '……只是，在回收期间，那些职员看你们的眼光有些刺痛而已',
        ]);
        era.println();
        await era.printAndWait('【声望下降了！】');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_36: (() => {
    const title = '年度研究计划制定';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} pocket 森林宝穴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     */
    const f = async (
      tachyon,
      pocket,
      you,
      callname,
      relation,
      love,
      hope_sta,
    ) => {
      await era.printAndWait([
        '在出道赛过去了两个月后，',
        you.get_colored_name(),
        ' 忽然被 ',
        tachyon.get_colored_name(),
        ' 叫到了实验室',
      ]);
      await era.printAndWait('原本以为又是像平常一样的实验药剂，却没想到……');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，我打算参加十二月底的 ',
        hope_sta,
        '，你去安排一下吧',
      ]);
      era.printButton('「欸？希望锦标赛？」', 1);
      await era.input();
      await tachyon.say_and_wait('嗯哼？有什么问题吗？');
      era.println();
      await era.printAndWait([
        '一进门，',
        tachyon.get_colored_name(),
        ' 就以轻描淡写，彷佛在谈论晚餐要吃什么一般的口气和 ',
        you.get_colored_name(),
        ' 说道',
      ]);
      await era.printAndWait([
        '希望锦标赛……那是十二月底的 G1 中距离赛事，可以说是对新秀级的',
        tachyon.uma_sex_title,
        '而言最重要的赛事之一',
      ]);
      await era.printAndWait(
        '比赛安排的话……毕竟现在还有两个月，报名的话现在正好是时机，因此倒也不会来不及',
      );
      await era.printAndWait([
        '能否赢下……说实话根本没有思考这个问题的必要，世界上最快的速度是光速，而比光速还要快的就是 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('唯一的问题是，why do it');
      await era.printAndWait([
        '为什么一向对比赛不感兴趣的 ',
        tachyon.get_colored_name(),
        ' 会忽然想要参加某特定比赛？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 老实的问出了心中的疑惑',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '没有回答，只是拍了拍桌上的报纸，那是今天的运动新闻，没记错的话……',
      ]);
      await era.printAndWait([
        '今天最大的新闻应该是「',
        pocket.get_colored_name(),
        ' 和 黑船 确定参赛 ',
        hope_sta,
        '」',
      ]);
      era.println();
      await era.printAndWait([
        '原来如此……无论是 ',
        pocket.get_colored_name(),
        ' 还是 黑船 都是这个世代最为人关注的代表之一',
      ]);
      await era.printAndWait([
        '再怎么说，',
        tachyon.get_colored_name(),
        ' 也有与同世代的强者交锋的想法吧……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '当然是为了新药的试验了！没有强敌的比赛怎么能将人逼到极限，连极限都触碰不到那就更不需要药的辅助了',
      );
      era.println();
      await era.printAndWait('啊……反正铁定是这种发展，我就知道……嗯？');
      era.printButton('「等等，比赛用药……违反规则了吧？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '嗯？你在担心这个啊，',
        callname,
        '，放心，你难道觉得那些三脚猫的药检技术能查到我用的药吗？',
      ]);
      era.println();
      await you.say_and_wait('不是！重点不在这里啊！');

      era.printButton('「这个……会不会……有点违反……运动家精神什么的……？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 战战兢兢的挑选措辞，尽量不使用那种有可能刺激到对方的名词',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '嗯？',
        callname,
        '？你该不会觉得，我要用的药是兴奋剂一类的东西？我在你心目中原来是这种人吗？',
      ]);
      era.println();
      await era.printAndWait([
        '这算是恶人先告状吗？',
        you.get_colored_name(),
        ' 连忙摇头说不是',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……你放心，这种药不是什么兴奋剂，也不会造成什么加快赛场上的速度之类的效果……',
      );
      await tachyon.say_and_wait(
        '只是，确实是需要有足够强悍的对手才能实验出效果的药而已',
      );
      era.println();
      era.print(['听见', tachyon.sex, '的话，', you.get_colored_name(), '……']);
      era.printButton('相信', 1);
      era.printButton('半信半疑', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '这样啊，',
          you.get_colored_name(),
          ' 听完',
          tachyon.sex,
          '的解释后点了点头，没说什么就准备去帮 ',
          tachyon.get_colored_name(),
          ' 办理参加比赛的手续，这反而引起了 ',
          tachyon.get_colored_name(),
          ' 的迷惑',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '不是不是……',
          callname,
          '，你就这么相信我说的话了吗？',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 点了点头，不理解为什么 ',
          tachyon.get_colored_name(),
          ' 本人反而如此诧异',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '万一我是，万一那真的是……我是说，万一我骗了你呢？',
        );
        era.println();
        await era.printAndWait([
          '如果 ',
          tachyon.get_colored_name(),
          ' 欺骗了自己……',
        ]);
        await era.printAndWait('虽然从未想过这样的问题，但如果，万一的话');

        era.printButton('「就算被骗了也没关系」', 1);
        await era.input();
        await era.printAndWait('从那天开始就已经决定的');
        await era.printAndWait(['相信', tachyon.sex, '的可能及一切']);
        await era.printAndWait([
          '只要能够让',
          tachyon.sex,
          '看见更远的世界，被欺骗又有什么',
        ]);
        era.println();
        await tachyon.say_and_wait('……信任，不，盲信吗？');
        era.println();
        await era.printAndWait('盲信');
        await era.printAndWait('仔细想想确实如此');
        await era.printAndWait([
          '自己是因 ',
          tachyon.get_colored_name(),
          ' 而再也见不到他物的盲人',
        ]);
        await era.printAndWait([
          '因为盲目，所以才渴求光明，渴求最亮的',
          tachyon.sex,
        ]);
        era.println();
        if (relation <= 375) {
          await tachyon.say_and_wait([
            '呵呵呵无妨，既然如此，那就好好跟上我的脚步吧，',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '甩了甩衣袖，继续回到实验中，宣布了此次谈话的结束',
          ]);
          era.println();
          await era.printAndWait('结束前，最后说了一句');
          era.println();
          await tachyon.say_and_wait(
            '作为奖赏，我答应你，你将会在特等席上见证可能性的彼方！',
          );
        } else {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            '不知为何，',
            tachyon.get_colored_name(),
            ' 似乎有些不满的样子',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '一般情况下，这时候我应该会很高兴，因为这代表你身为豚鼠对我的忠诚度',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '不高兴的戳着 ',
            you.get_colored_name(),
            ' 的胸口',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '但是，我讨厌像这样的盲从，我希望你能成为给予我建议，行走在我身旁的伙伴，而不是不会提出意见的实验动物',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 稍稍反省了下自己的行为，于是作为改变，',
            you.get_colored_name(),
            ' 选择提问',
          ]);
          era.printButton('「那么，这么做的原因是……？」', 1);
          await era.input();
          await tachyon.say_and_wait('…………很抱歉，现在还不能告诉你');
          await tachyon.say_and_wait(
            '总有一天一定，但……不是现在，我可以向你保证，现在就先相信我吧？',
          );

          era.printButton('「不是前面才让我不要盲信？」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '这个，那个……不一样，前面是没有理由就相信，现在是相信我有理由但是不能说',
          );
          era.println();
          await era.printAndWait([
            '虽然 ',
            you.get_colored_name(),
            ' 心中还是很疑惑这两者有什么差别，但 ',
            you.get_colored_name(),
            ' 明智的选择不去争吵',
          ]);
          era.println();
          await era.printAndWait([
            '总之，',
            you.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 的下个目标就决定为 ',
            hope_sta,
            ' 了',
          ]);
          await era.printAndWait([
            '如果没有意外的话，让',
            tachyon.sex,
            '参加应该不会造成什么问题吧……',
          ]);
        }
      } else {
        era.println();
        await you.say_and_wait('真的吗？', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' 心里总还是有些怀疑，不过……',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 耸了耸肩，开始准备帮 ',
          tachyon.get_colored_name(),
          ' 办理参赛的申请数据',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '？虽然我自己这么讲有些奇怪，但你都没有一点怀疑吗？就这么相信了吗？',
        ]);
        era.printButton('「不信，但我相信即便不用药速子也能赢」', 1);
        await era.input();
        await era.printAndWait([
          '虽然对 ',
          tachyon.get_colored_name(),
          ' 的行为毫无头绪，也不知道药的作用',
        ]);
        await era.printAndWait([
          '说到底，',
          you.get_colored_name(),
          ' 也不觉得 ',
          tachyon.get_colored_name(),
          ' 是和',
          tachyon.sex,
          '说声「规矩不行」',
          tachyon.sex,
          '就会乖乖住手的人',
        ]);
        await era.printAndWait('但只有这点，是无需任何怀疑的');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '，不需要药物这种外力，也绝对能够胜利',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '没有使用兴奋剂的必要，',
          you.get_colored_name(),
          ' 只是相信着这点',
        ]);
        era.println();
        if (relation > 0 && love < 50) {
          await tachyon.say_and_wait(
            '这就是你的回答吗？不信任我但是信任我的才能？不错！这才是研究者应有的态度啊！',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '彷佛十分满意自己的回答一般，「嗯嗯」的点着头',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '那么，就尽管相信我的胜利吧，追随在我身后，我就会让你看见你所希望的光辉',
          );
          era.println();
          await era.printAndWait([
            '于是，',
            you.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 的下个目标就决定为 ',
            hope_sta,
            ' 了',
          ]);
          await era.printAndWait(
            '只是……虽然用听上去很帅气的话作为总结了，但这样参赛真的没问题吗？或许还需要好好思量一下',
          );
        } else {
          if (relation <= 0) {
            await tachyon.say_and_wait('……平常你要也能说的这么好听就好了');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 冷淡的说道，但看',
              tachyon.sex,
              '尾巴摇晃的模样似乎挺受用的',
            ]);
          } else {
            era.println();
            await tachyon.say_and_wait([
              callname,
              '……你这话，说的好像你一点也不相信我一样',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 有些不满的鼓起了嘴，头用力的转向一旁',
            ]);
            era.println();
            await era.printAndWait('不管相信还是不信都不行吗……');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 忍不住扶额，像哄小孩一样告诉 ',
              tachyon.get_colored_name(),
              ' 自己有多信任多爱',
              tachyon.sex,
              '，好不容易才使',
              tachyon.sex,
              '不再闹脾气',
            ]);
          }
          era.println();
          await era.printAndWait([
            '于是，',
            you.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 的下个目标就决定为 ',
            hope_sta,
            ' 了',
          ]);
          await era.printAndWait([
            '只是……虽然这么说，但让这样的',
            tachyon.sex,
            '上场真的没问题吗？或许还是需要好好烦恼一下',
          ]);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_hope_sta: (() => {
    const title = '课题研究推进';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     */
    const f = async (tachyon, you, callname, hope_sta) => {
      await era.printAndWait('终于到了这天');
      await era.printAndWait([
        hope_sta,
        '，可以说对刚出道的',
        tachyon.uma_sex_title,
        '们而言下半年最重要的比赛',
      ]);
      await era.printAndWait('尤其是三冠战线的更是如此');
      await era.printAndWait([
        '作为新秀级唯一的中距离G1赛事，这是许多有才能的',
        tachyon.uma_sex_title,
        '踏上梦想之旅的第一步。',
      ]);
      era.println();
      await era.printAndWait([
        '然而，如此重要的一天，',
        you.get_colored_name(),
        ' 的负责',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        '……',
      ]);
      era.println();
      await you.say_and_wait('咦？');
      era.println();
      await era.printAndWait([
        '原本以为会到处乱跑的 ',
        tachyon.get_colored_name(),
        '，今天却反常的乖巧待在选手准备室里',
      ]);
      era.println();
      await tachyon.say_and_wait(['哦呀，', callname, '，你来了啊']);
      era.println();
      await era.printAndWait([
        '待在选手准备室，正拿着某种喷雾往腿上喷的 ',
        tachyon.get_colored_name(),
        ' 只抬头看了 ',
        you.get_colored_name(),
        ' 一眼就继续专心于手上的喷雾',
      ]);

      era.printButton('「这就是你说的药物？」', 1);
      await era.input();
      await tachyon.say_and_wait('是啊，希望这场比赛上能派上用场吧……');
      await tachyon.say_and_wait(
        '事到如今其实也没什么好瞒着你的了，这种药啊，是能让腿部肌肉舒缓的药物……',
      );
      await tachyon.say_and_wait(
        '要说的话，类似于冷却剂之类的东西吧，为了不让选手在比赛后受伤提前使用，要是这次实验成功的话……',
      );
      era.println();
      await era.printAndWait('原来如此');
      await era.printAndWait([
        '听到这，',
        you.get_colored_name(),
        ' 不由得松了一口气',
      ]);
      await era.printAndWait([
        '虽说相信 ',
        tachyon.get_colored_name(),
        '，但心中无论如何都还是会有一丝的担心',
      ]);
      await era.printAndWait([
        '倒不是针对 ',
        tachyon.get_colored_name(),
        ' 本人，只是 ',
        tachyon.get_colored_name(),
        ' 的药也不是每一次都那么的准确有效……不然自己也不会到现在全身还闪着光芒了吧',
      ]);
      era.println();
      await tachyon.say_and_wait(['好了，准备万全，', callname, '，出发吧']);
      era.println();
      await era.printAndWait('口气的情绪高涨，是因为赛场的气氛吗？');
      await era.printAndWait('目光的炯炯有神，是因对劲敌的期待吗？');
      await era.printAndWait('又或者……');
      era.println();
      await tachyon.say_and_wait('希望今天的对手能把药效完全逼出来啊');
      era.println();
      await era.printAndWait('果然，是为了实验吧');
      await era.printAndWait([
        you.get_colored_name(),
        ' 目送着依然故我的',
        tachyon.sex,
        '步上赛场',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = '希望';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     */
    const f = async (tachyon, you, hope_sta) => {
      era.printButton('「太强了！」', 1);
      await era.input();
      await era.printAndWait([
        '第一次的G1舞台，哪怕是 ',
        tachyon.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 也还是忍不住为',
        tachyon.sex,
        '捏了把冷汗',
      ]);
      await era.printAndWait([
        '但哪怕是国内最高级的赛事之上，',
        tachyon.sex,
        '表现出的依然是超乎众人的强悍',
      ]);
      era.println();
      await tachyon.say_and_wait('呵呵，这么兴奋什么的，太夸张了');
      era.println();
      await era.printAndWait([
        '下了赛场的 ',
        tachyon.get_colored_name(),
        ' 回到休息室后声音也带着愉悦',
      ]);
      await era.printAndWait([
        '听见这声音，哪怕是 ',
        you.get_colored_name(),
        ' 也明白了',
      ]);
      era.printButton('「实验成功了吧？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '是啊是啊！哎呀，果然好的实验品很重要啊！今天的实验大成功！',
      );
      era.println();
      await era.printAndWait([
        '果然对 ',
        tachyon.get_colored_name(),
        ' 而言，即便是G1的赛事也只是大一点的实验舞台吧',
      ]);
      await era.printAndWait([
        '即便如此，',
        tachyon.sex,
        '还是表现出了压倒众人的跑法',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '比起这种事，赶快回去了，快去准备下场比赛吧！',
      );
      era.println();
      await you.say_and_wait('欸？怎么忽然这么有热情？');
      await you.say_and_wait(
        '虽然觉得不会，但难道觉醒了对比赛的热情了……？',
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        '我脑袋里已经有下场比赛实验的蓝图了！哈哈哈！',
      );
      era.println();
      await era.printAndWait(
        '……算了，不管怎么说，对实验的热情也算是热情觉醒了吧',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的 ',
        hope_sta,
        ' 结束了',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hope_sta_lose: (() => {
    const title = '希望';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, you, callname, relation) => {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '比赛结束后，',
        you.get_colored_name(),
        ' 看着默默回到选手休息室的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('一路上谁也没有说话');
      await era.printAndWait([
        '这场比赛的落败，对 ',
        you.get_colored_name(),
        ' 还是对',
        tachyon.sex,
        '而言，都是一场重大的打击',
      ]);
      era.println();
      await tachyon.say_and_wait('……实验，失败了啊');
      era.println();
      await era.printAndWait([
        '这场比赛中，',
        tachyon.get_colored_name(),
        ' 的状态明显十分的不对劲……',
      ]);
      await era.printAndWait([
        '虽说一般的人大概看不出来，但今天的表现，并没有展现出',
        tachyon.sex,
        '所拥有的那种……光芒',
      ]);
      await era.printAndWait([
        '从一开始就黯淡的光芒，在比赛进入到后期更是几乎完全熄灭，因此，',
        tachyon.get_colored_name(),
        ' 落败',
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        '「……没什么，只是一次实验的失败而已，回去吧，实验哪有一定成功的？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 不由得出言安慰',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '但坐在地上的',
        tachyon.sex,
        '，却不知为何，表情有些奇怪',
      ]);
      await era.printAndWait('不是懊悔，反而……像在忍着什么？');

      era.printButton('「速子……？你的身体……」', 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait('没什么，不用担心……走吧');
        era.println();
        await era.printAndWait([
          '或许，自己还无法打破',
          tachyon.sex,
          '的心防吧',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 没说什么，跟在',
          tachyon.sex,
          '的后头离去',
        ]);
      } else {
        await tachyon.say_and_wait([
          '……没事的，',
          callname,
          '，我的腿……没什么问题，只要下次调整好就没问题了',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 反过来安慰着说道，想使 ',
          you.get_colored_name(),
          ' 放下心来',
        ]);
        await era.printAndWait([
          '想到平时',
          tachyon.sex,
          '胸有成竹的样子，',
          you.get_colored_name(),
          ' 的内心也渐渐平稳了下来',
        ]);
        era.println();
        await tachyon.say_and_wait([
          { content: '…………备选方案吗……或许……', fontSize: '0.75rem' },
        ]);
        era.println();
        await era.printAndWait([
          '只是，',
          tachyon.sex,
          '以为没被听到而喃喃说出的词句，却还是使 ',
          you.get_colored_name(),
          ' 的心再度提了起来',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '年度审核';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {boolean} hope_sta_win 希望锦标是否获胜
     */
    const f = async (tachyon, you, callname, relation, hope_sta_win) => {
      await tachyon.say_and_wait(['哦呀，', callname, '，你在………春联？']);
      era.println();
      await era.printAndWait([
        '门都不敲就闯入训练员室的 ',
        tachyon.get_colored_name(),
        ' 在看到 ',
        you.get_colored_name(),
        ' 手上的动作后发出了疑问，',
        you.get_colored_name(),
        ' 点了点头',
      ]);
      era.println();
      await era.printAndWait([
        '今天是春节，而 ',
        you.get_colored_name(),
        ' 在做的，便是将新一年的期许写下',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '三冠……我说啊，',
        callname,
        '，虽然我大概没什么资格讲，但你可真是执着啊，三冠对你来说是有什么特殊的含义在吗？',
      ]);
      era.println();
      await you.say_and_wait('含义……倒也没有，但如果要说的话');
      era.printButton('「因为速子答应了参赛……而我不觉得速子会败北」', 1);
      await era.input();
      if (hope_sta_win) {
        if (relation > 0) {
          await tachyon.say_and_wait('哼哼，不错，天才的我确实是无败的');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 一脸得意的说道',
          ]);
        } else {
          await tachyon.say_and_wait(
            '赢还是输，这种跟实验没有一点关系的东西真亏你能如此热衷啊',
          );
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), ' 冷漠的说道']);
        }
      } else {
        await tachyon.say_and_wait([
          '…………',
          callname,
          '，你是忘记我已经败北过了吗？',
        ]);
        era.println();
        await era.printAndWait('……啊，这么说来好像确实有这么回事……');
        era.printButton('「但是，速子还是最强的！」', 1);
        await era.input();
        await tachyon.say_and_wait('…………天真成这样，我都不知道该怎么说了');
        await era.printAndWait([tachyon.get_colored_name(), ' 忍不住扶额']);
      }
      await tachyon.say_and_wait('既然如此，那么梦不放远一点吗？');
      era.println();
      await era.printAndWait('远一点……？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 一时不能明白 ',
        tachyon.get_colored_name(),
        ' 的意思',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '把梦想放在优先啊，',
        callname,
        '，你的梦想，我的梦想，将更远大的梦想写上吧！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的双眼放光，眼中充满热情',
      ]);
      era.println();
      await era.printAndWait([
        '更远大的梦想……',
        you.get_colored_name(),
        ' 沉思了一会，又抽出一张春联纸，在上面写上……',
      ]);
      era.printButton('无败（全属性+5）', 1, { disabled: !hope_sta_win });
      era.printButton('无限（技能点数+20）', 2);
      era.printButton('无伤（耐力+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            '无败，要超越光速的粒子，是不可能败于区区凡人的',
          );
          era.println();
          await tachyon.say_and_wait(
            '哦？意思是年间无败吗？呵呵，不错，是个可以期待的目标',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '饶有兴致的看着 ',
            you.get_colored_name(),
            ' 的目标，却又泼下了一桶冷水',
          ]);
          era.println();
          await tachyon.say_and_wait('不过……参赛与否，也要看我的兴趣就是了');
          era.println();
          await era.printAndWait([
            '毕竟不参赛也是一种无败啊，',
            tachyon.get_colored_name(),
            ' 哈哈大笑，说了个在 ',
            you.get_colored_name(),
            ' 听起来一点也不好笑的笑话',
          ]);
          await era.printAndWait([
            '这种事……感觉 ',
            tachyon.get_colored_name(),
            ' 真有可能做得出来啊……',
          ]);
          await era.printAndWait([
            '大年初一 ',
            you.get_colored_name(),
            ' 的胃就开始因负责',
            tachyon.uma_sex_title,
            '而生疼了，看来今年也一定不会是轻松的一年吧',
          ]);
          break;
        case 2:
          await era.printAndWait([
            '无限，如果是梦想的话……那么，没有什么是比 ',
            tachyon.get_colored_name(),
            ' 的梦想更适合作为目标的了',
          ]);
          await era.printAndWait('超越极限，再无限制，所以无限');
          era.println();
          if (relation <= 0) {
            await tachyon.say_and_wait(
              '……呵呵，你这种人还会想这些？用来拐小女孩的话术就收一收吧，你只是辅助我的工具而已，认清自己的身份',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 无情的奚落了 ',
              you.get_colored_name(),
              ' 一番',
            ]);
            await era.printAndWait([
              '……虽然确实自己的表现无法让人相信吧，但 ',
              you.get_colored_name(),
              ' 确实是如此想的啊',
            ]);
            era.println();
            await era.printAndWait([
              '在苦笑中，',
              you.get_colored_name(),
              ' 预料到了今年八成也不会是个轻松的一年',
            ]);
          } else if (relation <= 225) {
            await tachyon.say_and_wait(
              '哦？无限的可能性吗？不错，确实是很适合我们的选项，新的一年就朝着这个目标前进吧',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 看上去很满意的模样，太好了！',
            ]);
            era.println();
            await tachyon.say_and_wait('所以，为了达到可能性，今天的药……');
            era.println();
            await era.printAndWait('忽然的图穷匕现！？');
            await era.printAndWait([
              '刚说完那样的豪情壮志导致无法拒绝的 ',
              you.get_colored_name(),
              ' 硬吞下了药剂',
            ]);
            await era.printAndWait([
              '在头顶顶着的光环之下，',
              you.get_colored_name(),
              ' 预感今年必定也会是不轻松的一年',
            ]);
          } else {
            await tachyon.say_and_wait([
              '哼哼！当然了，',
              callname,
              '，你当然会做出这样的选择吧！',
            ]);
            await tachyon.say_and_wait(
              '我们的梦想，我们一起追寻的可能性，为了更广阔的未来，突破极限，达致无限！',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 狂热的看着 ',
              you.get_colored_name(),
              '，眼中绽放着将 ',
              you.get_colored_name(),
              ' 吸引的疯狂目光',
            ]);
            await era.printAndWait('没错，为了我们的梦想……');
            era.println();
            await tachyon.say_and_wait('所以，今天的年节菜也麻烦你了');
            era.println();
            await era.printAndWait(
              '等等，年节菜也要自己做什么的，从来没听说过啊！？',
            );
            await era.printAndWait([
              '在',
              tachyon.sex,
              '的期待目光下，',
              you.get_colored_name(),
              ' 还是认命的拿起了锅铲',
            ]);
            await era.printAndWait('看来今年又会是个不轻松的一年啊……');
          }
          break;
        case 3:
          await era.printAndWait(
            '无伤，比赛什么都无所谓，可能性什么的也只要尽力追取，最重要的是无病无伤，为了更长远的未来',
          );
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('…………');

            era.printButton('「速子？」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 不知为何忽然陷入了沉默，',
              you.get_colored_name(),
              ' 疑惑的开口询问',
            ]);
            era.println();
            await tachyon.say_and_wait('……无聊的答案');
            await tachyon.say_and_wait([
              '无伤怎么创造历史，没有牺牲又怎么会有创造，无伤……我没想到，',
              callname,
              ' 你的答案竟然会如此无聊',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 不知道为什么忽然心情十分不悦，自己难道说错什么话了吗？',
            ]);
            era.println();
            await tachyon.say_and_wait('无伤……要是可以……要是……');
            era.println();
            await era.printAndWait([
              '但 ',
              you.get_colored_name(),
              ' 随即发现，',
              tachyon.sex,
              '的愤怒似乎并非是针对 ',
              you.get_colored_name(),
              '，而是针对某种……不知道，说到底 ',
              you.get_colored_name(),
              ' 连',
              tachyon.sex,
              '生气的原因都搞不清楚不是吗',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……随便你吧，这种无聊的愿望，这种无聊的……',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '气愤的离开了训练员室，留下依然一脸蒙逼的 ',
              you.get_colored_name(),
            ]);
          } else {
            await tachyon.say_and_wait('…………嗯，也是啊');
            era.printButton('「速子？」', 1);
            await era.input();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 的情绪似乎有些奇怪，',
              you.get_colored_name(),
              ' 不禁疑惑的问道',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '啊，没什么，是啊，毕竟以训练员的身分而言，',
              tachyon.uma_sex_title,
              '的健康才是第一优先的吧，不过……稍微有些无聊了',
            ]);
            era.println();
            await era.printAndWait([
              '无聊吗……以 ',
              tachyon.get_colored_name(),
              ' 追求可能性的想法而言，或许确实会如此觉得吧，但对自己而言，最重要的还是 ',
              tachyon.get_colored_name(),
              ' 的健康',
            ]);
            await era.printAndWait([
              '不知为何，',
              tachyon.get_colored_name(),
              ' 的模样看起来有些悲伤，虽然强装镇静，但总觉得有种无奈的悲哀感，难道自己不该这么说的吗……',
            ]);
            await era.printAndWait('难道自己不该这么说的吗……');
            era.println();
            await tachyon.say_and_wait(
              '…………没什么，呵呵，这样的话，为了你的愿望，我今天就回去好好休息吧……',
            );
            await tachyon.say_and_wait('无伤……啊……');
            era.println();
            await era.printAndWait([
              '这样的提议倒是与 ',
              you.get_colored_name(),
              ' 的心意相符，只是 ',
              tachyon.get_colored_name(),
              ' 究竟是怎么了？',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 目送着',
              tachyon.sex,
              '离去，脑海中依旧百思不得其解',
            ]);
          }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '中期报告提交';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {PrintedSpan} hope_sta 希望锦标（上色版名字）
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      hope_sta,
      hoch_sho,
      sats_sho,
    ) => {
      await era.printAndWait(
        '虽然新年已经过去，但二月的特雷森学园仍然被笼罩于寒冬之中',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 望着训练场，口中不住吐出叹息的白气',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '那个人今天也站在这里啊',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '嘘……小声点，听说',
        you.sex,
        '其实是某人的训练员来着',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '欸……真的假的，',
        you.sex,
        '已经站了三天了吧，也没看到过',
        you.sex,
        '的负责',
        tachyon.uma_sex_title,
        '啊',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '谁知道呢……听说其他年级有个存在感低到会完全被人忽视的',
        tachyon.uma_sex_title,
        '，说不定',
        you.sex,
        '负责的就是',
        tachyon.sex,
        '吧',
      ]);
      era.println();
      await era.printAndWait([
        '啊哈哈……被当成毫无存在的',
        tachyon.uma_sex_title,
        '了哦，',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '？',
      ]);
      await era.printAndWait([
        '不过，要是自己上去主动说自己的负责',
        tachyon.uma_sex_title,
        '是 ',
        tachyon.get_colored_name(),
        ' 的话，也一定不会有人相信的吧',
      ]);
      await era.printAndWait([
        '说来十分令人悲哀，但有谁会相信这样一个没有在发光的普通人会是 ',
        tachyon.get_colored_name(),
        ' 的训练员呢',
      ]);
      await era.printAndWait([
        '毕竟这几天由于完全没喝 ',
        tachyon.get_colored_name(),
        ' 的药导致自己已经好几天没发光过了',
      ]);
      era.println();
      await era.printAndWait([
        '今天已经是 ',
        tachyon.get_colored_name(),
        ' 没有来训练的第三天了',
      ]);
      await era.printAndWait([
        '岂止如此，甚至 ',
        you.get_colored_name(),
        ' 已经三天没有见到过自己的负责',
        tachyon.uma_sex_title,
        '了',
      ]);
      await era.printAndWait([
        '连试药都没有的三天，',
        you.get_colored_name(),
        ' 就这么一直待在训练场上等待着理应在训练时间来到这里却不在的那个人',
      ]);
      era.println();
      await you.say_and_wait('看来今天也不会来了吧……', true);
      await era.printAndWait([
        '就在 ',
        you.get_colored_name(),
        ' 如此想着的时候',
      ]);
      if (relation <= 225) {
        await tachyon.say_and_wait([
          '哦呀，',
          callname,
          '？你怎么在这？我找你找好久',
        ]);
        await you.say_and_wait('……');
        await era.printAndWait([
          '对于一边说着理所当然的话语一边悠哉出现的 ',
          tachyon.get_colored_name(),
          '，现在的 ',
          you.get_colored_name(),
          ' 已经连脾气都不剩了',
        ]);
        await era.printAndWait('总之，来到训练场……算了，反正一定又是药……');
        era.println();
        await tachyon.say_and_wait('总之，快来帮我测时吧');
      } else {
        await tachyon.say_and_wait([
          callname,
          '！你这几天都跑哪里去了！我都好久没吃便当了！！！',
        ]);
        await era.printAndWait([
          '怎么还能恶人先告状的，这不是因为这几天',
          tachyon.sex,
          '自己把实验室门锁上了吗',
        ]);
        await tachyon.say_and_wait(
          '算了，重点不在这，总之快点帮我测一下，新的实验数据',
        );
      }
      era.println();
      await era.printAndWait('嗯？等一下，难道，莫非');
      await era.printAndWait([
        '对眼前发生的事有些不敢置信的 ',
        you.get_colored_name(),
        ' 愣愣的按下了计时器，愣愣的看着 ',
        tachyon.get_colored_name(),
        ' 跑了一圈回来，再愣愣的按下计时停止',
      ]);
      era.println();
      await tachyon.say_and_wait('时间？');
      era.printButton('「比……比原纪录快了三秒」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 不由得感到兴奋，几天没来训练？那种俗事早被 ',
        you.get_colored_name(),
        ' 抛到了一旁，拥有这样的速度的',
        tachyon.sex,
        '，绝对，一定……',
      ]);
      era.println();
      await era.printAndWait([
        '很好，',
        tachyon.get_colored_name(),
        ' 满意的拍了拍手',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '，那么告诉你一个好消息吧']);
      await tachyon.say_and_wait([hoch_sho, '，我决定要出赛了']);
      era.println();
      await era.printAndWait([hoch_sho]);
      era.println();
      await era.printAndWait([
        '那是 ',
        sats_sho,
        ' 的前哨战，大部分有志于 ',
        sats_sho,
        ' 的',
        tachyon.uma_sex_title,
        '都会以 ',
        hoch_sho,
        ' 或者 ',
        hope_sta,
        ' 先为目标，以此获得人气后再挑战',
        sats_sho,
      ]);
      await era.printAndWait([
        '不过……',
        hoch_sho,
        ' 再怎么说也还是G2比赛，不缺乏人气的 ',
        tachyon.get_colored_name(),
        ' 会对这场比赛感兴趣的原因究竟是……？',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……有些东西，必须要在 ',
        sats_sho,
        ' 以前确认才行',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '的口气让 ',
        you.get_colored_name(),
        ' 稍稍感到了一些不安',
      ]);
      await era.printAndWait('不过');
      era.printButton('「速子的话，一定没问题的」', 1);
      await era.input();
      await tachyon.say_and_wait('呵，难道你觉得我会连G2都拿不下吗？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 只能苦笑解释自己不是那个意思',
      ]);
      await era.printAndWait(['总之，目标姑且确定为 ', hoch_sho, ' 了']);
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = '实验对照组';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} vs_coffee 对手中有曼城茶座
     */
    const f = async (tachyon, you, callname, t_call_c, vs_coffee) => {
      await tachyon.say_and_wait(
        '虽然已经有所准备了，但……果然没什么特别值得一提的实验对照组啊',
      );
      era.println();
      await era.printAndWait(['但是，这场比赛是皋月赏的前哨战']);
      await era.printAndWait([
        '以皋月赏为目标的话，无论强弱这场比赛的结果都是不能错过的',
      ]);
      era.println();
      if (vs_coffee) {
        await tachyon.say_and_wait(['说起来，今天 ', t_call_c, ' 也有参赛啊']);
        await tachyon.say_and_wait([
          t_call_c,
          '……希望能跑出令人满意的表现来啊，毕竟……',
        ]);
      } else {
        await tachyon.say_and_wait([
          '要是 ',
          t_call_c,
          ' 参赛的话……肯定会更有实验价值的吧',
        ]);
      }
      await tachyon.say_and_wait([
        '这么说起来，',
        callname,
        ' 你对 ',
        t_call_c,
        ' 是怎么看的？',
      ]);
      era.println();
      await era.printAndWait('欸？');
      await era.printAndWait([
        '莫名其妙的问题使 ',
        you.get_colored_name(),
        ' 陷入思考',
      ]);
      await era.printAndWait('灰色的脑细胞不停开始运转');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 这么说的意义到底是……',
      ]);
      era.println();
      await era.printAndWait([
        '看 ',
        you.get_colored_name(),
        ' 提神戒备的模样，',
        tachyon.get_colored_name(),
        ' 笑了出来',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '别那么紧张，只是问问而已，然后我个人还是希望你能和',
        tachyon.sex,
        '打好关系的……以防万一',
      ]);
      era.printButton('「听起来好让人不安啊……」', 1);
      era.printButton('「我永远都会是速子的训练员的！」', 2);
      await era.input();
      await tachyon.say_and_wait('你想哪里去了啊……真是，不说了，该上场了');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '拿起希望锦标前见过的喷雾朝着腿上喷了喷后，准备上场',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = '对照实验结果分析';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     */
    const f = async (tachyon, you, callname, love, hoch_sho, sats_sho) => {
      await era.printAndWait([
        '理所当然的，',
        tachyon.get_colored_name(),
        ' 赢下了 ',
        hoch_sho,
      ]);
      era.printButton('「好厉害的比赛！」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '呼……呼……呵呵，你的反应真是，每次都这么夸张啊，明明我都没认真跑，怎么就厉害了',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '语气玩味的说道']);
      era.println();
      await you.say_and_wait('一点也不夸张');
      await you.say_and_wait(
        '无论有没有认真跑，速子的跑法都同样的吸引着我，就好比……对了，光电子',
      );
      era.println();
      await tachyon.say_and_wait('光电子……？');
      era.println();
      await you.say_and_wait(
        '打在电极上的光束，无论强弱都能使电极发射出电子，这是频率，也就是规格上的不同而导致的',
      );
      await you.say_and_wait(
        '无论强弱，无论认真与否，速子的跑法对自己而言就是超越次元，唯一能够在电极上打出电子的光芒',
      );
      era.println();
      await tachyon.say_and_wait('……这算什么比喻啊');
      era.println();
      await you.say_and_wait('欸欸……不行吗');
      await you.say_and_wait('明明花了很多时间来想，还挺有自信的……');
      era.println();
      if (love > 75) {
        await tachyon.say_and_wait(
          '不过……你的意思我明白了，也就是说，你戴着只有我能够解锁的贞操带吧？',
        );
        await era.printAndWait('不，这比喻更烂吧……');
      } else {
        await tachyon.say_and_wait(
          '不过……你的意思我明白了，也就是无论跑的如何，只要是我就能让你满意对吧？',
        );
      }
      await you.say_and_wait('不过还是希望速子能认真跑了');
      await era.printAndWait([
        '说到这，',
        you.get_colored_name(),
        ' 忽然想起了 ',
        tachyon.get_colored_name(),
        ' 赛前说的测试……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……没什么问题，起码，',
        sats_sho,
        ' 不会有问题',
      ]);
      era.println();
      await era.printAndWait('起码……吗？');
      await era.printAndWait([
        '让人很无法安心下来的词语，使 ',
        you.get_colored_name(),
        ' 也陷入了沉默',
      ]);
      era.println();
      await tachyon.say_and_wait('……不提这个了，快点回去继续实验吧');
      era.println();
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的 ',
        hoch_sho,
        ' 结束了',
      ]);
      await era.printAndWait(['下个目标 ', sats_sho, ' 就近在眼前了！']);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '单项实验与结果分析';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('今天是经典赛事的第一站，皋月赏');
      await era.printAndWait(
        '观众们都兴奋的期待着比赛的开锣，连带着选手们也在赛前感到了兴奋',
      );
      await era.printAndWait([
        '没错，就连 ',
        tachyon.get_colored_name(),
        ' 也是一样',
      ]);
      await era.printAndWait([
        '只是……',
        tachyon.sex,
        '兴奋的原因，有那么一些的与众不同',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！你看，果然……还是G1的赛场，才有数据收集的价值啊！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '兴奋的来来回回跑着，甚至想要潜入其他选手的休息室去收集对方的个体资料',
      ]);
      await era.printAndWait([
        '还好在 ',
        you.get_colored_name(),
        ' 拼死的阻拦下才使',
        tachyon.sex,
        '放弃了这个念头',
      ]);
      await era.printAndWait([
        '与赛前兴奋的 ',
        tachyon.get_colored_name(),
        ' 做为对比的，是赛前莫名感到不安的 ',
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait(['先前弥生赏说的起码，到皋月赏前不会有问题']);
      await era.printAndWait(['但……皋月赏后不一定？']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的身体……有什么问题吗？',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '？怎么了，今天的你沉默的不像平时的你啊',
      ]);
      await era.printAndWait([
        '居然反过来被 ',
        tachyon.get_colored_name(),
        ' 担心了，这可不行',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 慌忙打起精神，让自己恢复状态',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '罢了，今天……就让你看看吧，动真格的模样…真正的，',
        tachyon.uma_sex_title,
        '的极限',
      ]);
      era.println();
      await era.printAndWait('极限……？');
      await era.printAndWait('不，没有问题的，一定');
      await era.printAndWait([
        you.get_colored_name(),
        ' 抛开疑惑和不安，目送着 ',
        tachyon.get_colored_name(),
        ' 登上赛场',
      ]);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = (tachyon) => [tachyon.uma_sex_title, '的极限'];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (tachyon, you, callname, sats_sho, toky_yus) => {
      await tachyon.say_and_wait([callname, '，你看见了吗？']);
      era.println();
      await era.printAndWait([
        '跑完 ',
        sats_sho,
        ' 的 ',
        tachyon.get_colored_name(),
        '，获得了至今为止最为热烈的欢呼声',
      ]);
      await era.printAndWait([
        '观众们兴奋的原因 ',
        you.get_colored_name(),
        ' 也能理解',
      ]);
      await era.printAndWait([
        '今天的 ',
        tachyon.get_colored_name(),
        ' 的表现堪称完美',
      ]);
      await era.printAndWait([
        '不，可以说如果',
        tachyon.uma_sex_title,
        '有极限的话，那必然就是今天的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('光一般的速度，光一般的闪耀，光一般的……虚幻');
      era.println();
      await era.printAndWait('仿佛在结束后就要如光一般消散的跑法');
      await era.printAndWait([
        '在冲过终点的瞬间，所有人都不敢出声，哪怕是始终相信着 ',
        tachyon.get_colored_name(),
        ' 实力的自己也一样不敢置信',
      ]);
      await era.printAndWait([
        '那种跑法只能解释成，',
        tachyon.uma_sex_title,
        '这种生物的极限',
      ]);
      await era.printAndWait(
        '是看到的瞬间就会感到「啊啊，这种跑法不可能有人能够超越的」的跑法',
      );
      era.println();
      await tachyon.say_and_wait([callname, '……这个啊，就是我们要超越的极限']);
      era.println();
      await era.printAndWait('将自己定义为极限');
      await era.printAndWait('这是多么傲慢的说法');
      await era.printAndWait(
        '但在看了先前那场比赛后，无论是谁都必须赞同这样的傲慢',
      );
      era.println();
      await tachyon.say_and_wait(
        '……没错，必须要超越这样的速度，才能称之为超越极限，否则，一切就全是空谈',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '说出这句话时，直直盯着你的双眼，等待回答',
      ]);
      await era.printAndWait([
        '这句话的潜意思，相信 ',
        you.get_colored_name(),
        ' 能够明白',
      ]);
      await era.printAndWait('自己有自信，能够超越那样的速度吗？');
      era.printButton('「绝对可以」', 1);
      era.printButton('「因为是速子，所以绝对可以」', 2);
      await era.input();
      await era.printAndWait('可以说是瞬间');
      await era.printAndWait([
        '在领会出 ',
        tachyon.get_colored_name(),
        ' 的含义后，',
        you.get_colored_name(),
        ' 在瞬间便做出了回答',
      ]);
      await era.printAndWait('不用经过思考，无须多加考虑');
      await era.printAndWait([
        '眼前的这名',
        tachyon.uma_sex_title,
        '，拥有超越极限的力量',
      ]);
      await era.printAndWait('这是从第一次见面就已经确信的');
      await era.printAndWait([
        '现在只不过是将 ',
        you.get_colored_name(),
        ' 与',
        tachyon.sex,
        '的目标放在眼前而已',
      ]);
      await era.printAndWait('已经看见目标了，那就必然能够超越');
      era.println();
      await tachyon.say_and_wait('如此快的反应，思考……不，是本能吗？你……');
      era.println();
      await era.printAndWait([
        '不知为何，',
        tachyon.get_colored_name(),
        ' 看着 ',
        you.get_colored_name(),
        ' 露出了有些微妙的表情',
      ]);
      await era.printAndWait([
        '过了一会后，',
        tachyon.sex,
        '仿佛下定了什么决心一般说道',
      ]);
      era.println();
      await tachyon.say_and_wait(['那么，就来试试看吧，', callname, '……']);
      await tachyon.say_and_wait('不过首先，先确认好下一场的比赛吧……');
      await tachyon.say_and_wait([
        '目前可以确认，',
        toky_yus,
        ' 我能出赛，以此来做准备吧，',
        callname,
      ]);
      era.println();
      await era.printAndWait('……又来了');
      await era.printAndWait([
        '如果要说，',
        tachyon.get_colored_name(),
        ' 身上有任何一点是令 ',
        you.get_colored_name(),
        ' 感到不安的要素，那么就只有这个了',
      ]);
      await era.printAndWait('……仿佛下场比赛便是最后一场一般的，不确定的态度');
      await era.printAndWait([
        '但是，',
        tachyon.get_colored_name(),
        ' 的话，一定能将这一切不确定跨越吧',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 如此乐观的想着']);
      era.println();
      await era.printAndWait(['下一场比赛，就决定是 ', toky_yus, ' 了！']);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '实验结果不支持';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} t_call_p 爱丽速子对森林宝穴的称呼
     */
    const f = async (tachyon, you, callname, t_call_p) => {
      await tachyon.say_and_wait([
        '哦呀哦呀，不愧是日本德比……',
        t_call_p,
        ' 应该也要出赛吧，真令人期待啊，',
        tachyon.sex,
        '的可能性……',
      ]);
      era.println();
      await era.printAndWait([
        '日本德比，据说是最幸运的',
        tachyon.uma_sex_title,
        '得胜的比赛',
      ]);
      await era.printAndWait([
        '最快的',
        tachyon.uma_sex_title,
        '赢皋月，最幸运的',
        tachyon.uma_sex_title,
        '赢德比，最强的',
        tachyon.uma_sex_title,
        '赢菊花',
      ]);
      await era.printAndWait([
        '比起最快最强这种已经确定的东西……运气的虚无飘渺还是让 ',
        you.get_colored_name(),
        ' 不由得在比赛前为',
        tachyon.sex,
        '感到担心',
      ]);
      era.printButton('「真的没问题吗？」', 1);
      era.printButton('「果然还是，戴着去神社求来的大吉签……？」', 2);
      await era.input();
      await era.printAndWait([
        '今天一大早，为了 ',
        tachyon.get_colored_name(),
        ' 而爬上百阶阶梯的神社去求来的福签',
      ]);
      await era.printAndWait([
        '不知为何，听见 ',
        you.get_colored_name(),
        ' 的举动后，',
        tachyon.get_colored_name(),
        ' 露出了奇怪的神情',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……一大早跑去抽这种东西……没想到 ',
        callname,
        ' 你是这么迷信的人啊',
      ]);
      era.println();
      await era.printAndWait([
        '听见 ',
        tachyon.get_colored_name(),
        ' 的话，',
        you.get_colored_name(),
        ' 摇了摇头',
      ]);
      era.printButton(
        '「不管是求神拜佛还是什么，只要能让速子跑的更快，无论是什么我都能做！」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '……呵呵，这种迷信的东西，你还是自己收着就好，但这份心意……我收下了，今天的实验，想必会有一个好结果吧',
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '实验目的调整';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} t_call_p 爱丽速子对森林宝穴的称呼
     */
    const f = async (tachyon, you, t_call_c, t_call_p) => {
      era.printButton('「速子！太帅了！」', 1);
      await era.input();
      await tachyon.say_and_wait('唔……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 一如既往的想要夸奖 ',
        tachyon.get_colored_name(),
        ' 的跑姿，然而',
      ]);
      era.println();
      await tachyon.say_and_wait('……实验，没有成功啊');
      era.println();
      await era.printAndWait('嗯？');
      await era.printAndWait('明明跑的很精彩，结果实验却没有成功吗');
      era.println();
      await tachyon.say_and_wait([
        t_call_p,
        '……虽然很让人期待，但',
        tachyon.sex,
        '的可能性与我在寻找的并不相符……果然，还是 ',
        t_call_c,
        '……',
      ]);
      era.println();
      await era.printAndWait([
        '不知为何，',
        tachyon.get_colored_name(),
        ' 喃喃说着 ',
        you.get_colored_name(),
        ' 听不太懂的话',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……总之，先不说了吧，接下来，就要进入实验的关键点了',
      );
      era.println();
      await era.printAndWait([
        '虽然不太明白，但 ',
        you.get_colored_name(),
        ' 看着 ',
        tachyon.get_colored_name(),
        ' 脸上严肃的表情，整个人也不禁正襟危坐了起来',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '下一场比赛……暂时……还不能确定……我还有些事情需要好好想想',
      );
      era.println();
      await era.printAndWait([
        '充满了不确定的话语，让 ',
        you.get_colored_name(),
        ' 在比赛结束后的欣喜瞬间化为了不安',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_23: (() => {
    const title = '最速？最强？';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await tachyon.print_and_wait('更快');
      await tachyon.print_and_wait('还要更快');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 在夜晚的训练场奔跑着',
      ]);
      await tachyon.print_and_wait(
        '不管不顾的追求极限，追求速度的极限，可能性的极限',
      );
      await tachyon.print_and_wait('正如，超越光速的粒子（Tachyon）一般');
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.say_and_wait('啧……果然，还是不行……');
      era.println();
      await tachyon.print_and_wait('万物都有自己的代价');
      await tachyon.print_and_wait([
        '据说，曾经有',
        tachyon.uma_sex_title,
        '因为突破了',
        tachyon.uma_sex_title,
        '的极限，而付出生命的代价',
      ]);
      await tachyon.print_and_wait(
        '倘若付出那样的代价真的能够突破极限也就算了',
      );
      await tachyon.print_and_wait([
        '然而 ',
        tachyon.get_colored_name(),
        ' 的双腿，却连那样的资格都不被允许',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '无论怎么做，都无法突破极限……甘于平凡，或是……',
      );
      era.println();
      await tachyon.print_and_wait([tachyon.get_colored_name(), ' 停下了脚步']);
      era.println();
      await tachyon.say_and_wait('……我的极限，就在这里了吗？');
      era.println();
      await tachyon.print_and_wait([
        '并非',
        tachyon.uma_sex_title,
        '的极限，而是 ',
        tachyon.get_colored_name(),
        ' 的极限',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…………那么，要是这条路走不通的话……要选择PlanB吗',
      );
      era.println();
      await tachyon.print_and_wait('放弃「最速」的极限，选择「最强」的极限');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 可以失败，只要失败后，有能够替代',
        tachyon.sex,
        '的人就好了',
      ]);
      await tachyon.print_and_wait('将梦想托付给别人，如同自我逃避一般的选择');
      await tachyon.print_and_wait(
        '原本的话，或许还能说服自己，这是最为理性的选择，将可能性托付在更可能实现的人身上',
      );
      await tachyon.print_and_wait('但是……');
      era.println();
      await you.used_to_say_and_wait('我相信速子');
      await you.used_to_say_and_wait('速子的话，绝对没问题');
      await you.used_to_say_and_wait([
        '一定，别说三冠，突破',
        tachyon.uma_sex_title,
        '的可能性也不成问题……！',
      ]);
      era.println();
      await tachyon.print_and_wait('那个人对自己的信任');
      await tachyon.print_and_wait([
        '这样不亚于对',
        you.sex,
        '的背叛的行为……真的，没问题吗',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……不，这不是背叛，只是，也是给',
        you.sex,
        '一个更好的选择……所以……',
      ]);
      era.println();
      await tachyon.print_and_wait('迷茫');
      await tachyon.print_and_wait('恐惧');
      await tachyon.print_and_wait('困惑');
      await tachyon.print_and_wait('到底……该怎么办才好');
      era.println();
      await tachyon.say_and_wait('……就这样吧');
      era.println();
      await tachyon.print_and_wait('下个月的月桂杯');
      await tachyon.print_and_wait(
        '学生会长举办的，无论年级本格化程度都能参加的比赛',
      );
      await tachyon.print_and_wait(
        '……如果参加的话，从德比到现在短暂的休养期……',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 的双腿一定承受不住的吧',
      ]);
      await tachyon.print_and_wait(
        '但是，这样的数据收集机会，错过了，以后还有机会吗？',
      );
      await tachyon.print_and_wait([
        '不，说到底……',
        tachyon.get_colored_name(),
        ' 真的还有「以后」吗？',
      ]);
      await tachyon.print_and_wait('索性……就在这场比赛中，拼尽全力……吗？');
      era.println();
      await tachyon.print_and_wait('月下的光之粒子，依然迷茫');
    };
    f.title = title;
    return f;
  })(),
  ws_a_or_b: (() => {
    const title = 'A or B';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} daiwa 大和赤骥
     * @param {CharaTalk} coffee 大和赤骥
     * @param {CharaTalk} tachyon 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, daiwa, coffee, you, callname, t_call_c) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速子前辈要参加月桂杯的事情是真的吗！',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '好期待……速子前辈的跑法真的好让人着迷……',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '绝对，绝对会去看的！',
      );
      era.println();
      await era.printAndWait('如今学园中最处于话题中心的，那便是月桂杯了');
      await era.printAndWait(
        '由学生会长组织，以对标URA总决赛为主的比赛，月桂杯',
      );
      await era.printAndWait(
        '甚至无论年级无论本格化开始或者结束，只要有意愿的皆能参加',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 自然也不会放过如此好的数据收集机会',
      ]);
      await era.printAndWait([
        '最近这几周，更是拼足了全力在训练上，按',
        tachyon.sex,
        '的说法，要是自己不提升到相应的等级，那又怎么能够逼出对手的可能性来',
      ]);
      era.println();
      await era.printAndWait([
        '今天，',
        tachyon.sex,
        '也在训练场上努力锻炼着自己',
      ]);
      era.printButton('「速子！今天的训练成果也大幅超越过去记录了！」', 1);
      era.printButton('「太厉害了！速子！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '……哈哈哈！哪怕已经习惯你这种夸张的说法了，但听到还是会忍不住讶异一下啊……',
      );
      await tachyon.say_and_wait('真的是，说认真的，你都不会害羞的吗');
      era.printButton('「我说的都是肺腑之言！」', 1);
      era.printButton('「为了帮助速子，我也会不遗余力拼上性命！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '夸张……比起这种好听话，还不如实际帮助我的实验更有意义些',
      );
      era.println();
      await era.printAndWait([
        '说到这，',
        tachyon.get_colored_name(),
        ' 忽然从白大褂下掏出了几根试管',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '这么说来，正好……这是今天早上灵感来了做出的药……',
      );
      await tachyon.say_and_wait(
        '怎么样？要是你能现在喝下去，等我下一趟跑完回来跟我报告药物效果的话，成效大概会比你这些……？',
      );
      era.println();
      await era.printAndWait([
        '连话都没说完，',
        tachyon.get_colored_name(),
        ' 便陷入了呆滞',
      ]);
      await era.printAndWait([
        '在',
        tachyon.sex,
        '眼前，是已经喝下药水，拿着三管空试管的 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('你……');
      era.printButton('「这样，速子就能安心了吧？」', 1);
      era.printButton('「这样，就能帮到速子了吧？」', 2);
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 不知为何，久久没有说出任何话来',
      ]);
      era.printButton('「速子？」', 1);
      await era.input();
      await tachyon.say_and_wait('……真是……你到底要把一切搅乱到什么地步啊……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '扶着头，脸上带着无奈的表情，仿佛有什么话想要说出',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，等一下，到我实验室来……有事要和 ',
        you.get_colored_name(),
        ' 商量',
      ]);

      era.drawLine();

      await tachyon.say_and_wait('那么……我要开始说了');
      era.println();
      await era.printAndWait([
        '实验室内 ',
        you.get_colored_name(),
        ' 正襟危坐，等待着 ',
        tachyon.get_colored_name(),
        ' 的讲述',
      ]);
      era.println();
      await tachyon.say_and_wait('我的腿……很可能，再也跑不动了');
      era.println();
      await era.printAndWait('如天崩一般的内容，却被轻描淡写的说出');
      await era.printAndWait([
        tachyon.sex,
        '为了给 ',
        you.get_colored_name(),
        ' 接受的时间，稍停一会后，才接着说道',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '我自己早就已经有心理准备了……我的腿，本来就比一般',
        tachyon.uma_sex_title,
        '要脆弱，所以，没什么不能接受的',
      ]);
      await tachyon.say_and_wait('但是，这不代表我会放弃我的梦想');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的梦想……超越',
        tachyon.uma_sex_title,
        '的极限，看见',
        tachyon.uma_sex_title,
        '的可能性',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '就算不是我也没关系，就算只能看着也没关系……就算，只能做为垫脚石存在，也没关系',
      );
      await tachyon.say_and_wait([
        '无论是谁……只要能够证明这并不是',
        tachyon.uma_sex_title,
        '的极限，只要能够证明，这只不过是 ',
        tachyon.get_colored_name(),
        ' 的极限……我就心满意足了',
      ]);
      await tachyon.say_and_wait(
        '我真的是发自内心这么想的，这次的月桂杯也是……为了让谁，不是我的某个人能够成功……',
      );
      await tachyon.say_and_wait(
        '收集最多的数据，构筑出最完美的计划……哪怕拼尽全力也要……',
      );
      await tachyon.say_and_wait('但是……让这样的我动摇了决心的……是你');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 用一种复杂的眼神看着 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait('悲伤？');
      await era.printAndWait('痛苦？');
      await era.printAndWait('希望？');
      await era.printAndWait('绝望？');
      await era.printAndWait([
        '仿佛参杂了许多种感情的视线望着 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('在我想放弃的时候，总用那种眼神看着我的你……');
      await tachyon.say_and_wait(
        '真的，说坦白话，对想要放弃的人而言，那副眼神到底有多令人厌恶你知道吗？',
      );
      await tachyon.say_and_wait('那种纯粹的，只有信赖的眼神……');
      era.println();
      await era.printAndWait([
        '明明说着讨厌，但 ',
        tachyon.get_colored_name(),
        ' 那五味杂陈的眼神中却唯独看不出厌恶的感情',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '因此，',
        callname,
        '，这样的你应当负起将一切搅乱的责任……选择道路的责任',
      ]);
      await tachyon.say_and_wait([
        '……还记得我曾经问过吗？你对 ',
        t_call_c,
        ' 是怎么看的',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 点了点头，',
        tachyon.get_colored_name(),
        ' 对 ',
        coffee.get_colored_name(),
        ' 的关注可以说是大于其他',
        tachyon.uma_sex_title,
        '许多的……',
        daiwa.get_colored_name(),
        ' 除外',
      ]);
      await era.printAndWait('总之那种关心，绝对不只是对实验品的关注');
      await era.printAndWait(
        '关于原因，自己也曾经思考过许多，但都百思不得其解',
      );
      era.println();
      await tachyon.say_and_wait([
        '倘若我无法继续跑下去的 Plan B……我打算将一切托付在 ',
        t_call_c,
        ' 的身上，让 ',
        t_call_c,
        ' 代替我，去看见可能性的世界',
      ]);
      await tachyon.say_and_wait([
        '在那之后，我会拒绝参加一切比赛……直到 ',
        t_call_c,
        ' 成长起来，直到',
        tachyon.sex,
        '能够突破极限，我会用尽剩下能够用尽全力的机会，成为',
        tachyon.sex,
        '的垫脚石',
      ]);
      await tachyon.say_and_wait(
        '牺牲一切来成就最有可能获得成功的选项，这就是研究者，即便必须被牺牲的是自己也一样',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '轻描淡写的说出将自身感情排除于思考之外的选项',
      ]);
      await era.printAndWait([
        '仿佛已经经过无数次的排练……或许，',
        tachyon.sex,
        '早就已经做好觉悟，总有一天要将这些话对自己说出了吧',
      ]);
      await era.printAndWait(['接着，', tachyon.sex, '的声音稍稍颤抖了一下']);
      era.println();
      await tachyon.say_and_wait(
        '然后……是第二个选项，我一开始已经放弃的Plan A',
      );
      await tachyon.say_and_wait([
        '继续下去，我会朝着 ',
        callname,
        ' 你说的目标三冠前进，朝着我的目标跨越极限前进…',
      ]);
      await tachyon.say_and_wait(
        '……如童话一般美好，也一样虚幻的选择，而你必须陪伴我，直到梦想实现，或是……一切凋零',
      );
      era.println();
      await tachyon.say_and_wait(
        '做出选择吧……我不否认，这是责任的转嫁，将一切的责任都推到你身上，但是……',
      );
      await tachyon.say_and_wait(
        '是你把希望带给我的，所以这也是你应该要负起的责任吧',
      );
      await tachyon.say_and_wait([
        '来吧，',
        callname,
        '，轮到你了，做出选择吧',
      ]);
      era.println();
      era.print([you.get_colored_name(), ' 决定……']);
      era.printButton('选择Plan A', 1);
      era.printButton('选择Plan B', 2, {
        disabled:
          era.get('cflag:25:育成回合计时') !== era.get('cflag:32:育成回合计时'),
      });
      era.print('【警告，该选择会锁定爱丽速子的训练及比赛】', {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      });
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  os_95_3: (() => {
    const title = '抽奖与代偿剂效应';
    /**
     * Plan A or B 通用
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {number} dice 抽奖结果，1-面纸，2-胡萝卜，3-大量胡萝卜，4-胡萝卜汉堡排，5-温泉旅行券
     * @param {boolean} plan_b 是否进入 Plan B
     * @param {number} cook_times 给爱丽速子做饭的次数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_25,
      relation,
      love,
      dice,
      plan_b,
      cook_times,
    ) => {
      await tachyon.say_and_wait('真是……没想到居然会那么容易爆炸');
      await tachyon.say_and_wait([
        call_25,
        ' 也是……不就是加了点提升身体能力的药在咖啡粉里吗？怎么就那么生气……',
      ]);
      await tachyon.say_and_wait('果然这次还是要买些能禁得起诅咒的烧杯吧？');
      era.printButton('「这种东西要跟谁进货啊……」', 1);
      era.printButton('「说到底根本就不会有需求的东西……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '哼，不管',
        tachyon.sex,
        '那个诅咒的原理是什么，说到底还是只能用外力的方式来破坏',
      ]);
      await tachyon.say_and_wait(
        '换句话说只要能够加强到怎么使用外力也破坏不了的程度就可以了',
      );
      await tachyon.say_and_wait(
        '所以这次我们要找的是用太空材料制的，能够扛住宇宙高冷高热及气压的高规格烧杯哦',
      );
      await tachyon.say_and_wait(['啊，找到了，', callname, ' 你看']);
      era.println();
      await era.printAndWait('真的假的！商店街好厉害！');
      era.drawLine({ content: '时间稍微往前一点' });
      era.println();
      await era.printAndWait([
        '这天，',
        you.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 一起上街采买实验用具',
      ]);
      await era.printAndWait('采买完准备回家时……');
      await you.say_as_passer_by_and_wait(
        '商店街大叔',
        '来哦来哦！商店街实验器材大出清！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街大叔',
        '一次购买太空特制玻璃烧杯、宇宙陨矿坩埚，火箭燃料酒精灯的都能获得一次抽奖机会！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街大叔',
        '特等奖温泉旅行券！一等奖特大份胡萝卜汉堡排！',
      );
      era.println();
      await era.printAndWait(
        '欸欸……这种东西，第一个就算了，后面几个真的有人会买吗……',
      );
      era.println();
      await tachyon.say_and_wait([callname, '，去抽奖吧']);
      era.printButton('「原来你全买了吗！？」', 1);
      era.printButton('「……酒精灯用火箭燃料真的不会有问题吗？」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '那还用说，实验室里需要补充的东西还是挺多的',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 理所当然的说着']);
        await era.printAndWait('……所以这条商店街到底是什么情况');
      } else {
        await tachyon.say_and_wait([
          callname,
          '，你连噱头都不明白吗？当然是噱头了噱头',
        ]);
        era.println();
        await era.printAndWait(
          '……不，如果前几个都是真货的话最后一个被怀疑也是很正常的吧',
        );
      }
      era.printButton('「不过，速子会对这种抽签感兴趣真少见」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '嗯……说的也是，毕竟比起抽签，这些奖品都是能直接用钱买到的……以我们的比赛奖金也不缺这点钱',
      );
      era.println();
      await era.printAndWait('这样的话……');
      era.println();
      await tachyon.say_and_wait('但我的目的不是奖品，而是观察');
      era.println();
      await era.printAndWait('观察……？');
      era.println();
      await tachyon.say_and_wait(
        '还记得之前新年时说的吗？我想开始研究感情的影响了……',
      );
      await tachyon.say_and_wait(
        '这样的话当然必须要有对照，最好的对照当然就是一直在我身边的你了',
      );
      await tachyon.say_and_wait('让我看看吧，你抽奖之后的反应');
      era.println();
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 上前转动滚轮……',
      ]);
      switch (dice) {
        case 1:
          await you.say_as_passer_by_and_wait('店主', '安慰奖，面纸一包');
          await era.printAndWait('安慰奖啊……可惜，不过也没办法');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('唔……你好像没什么反应啊');
            era.println();
            await era.printAndWait('不……毕竟一开始就没什么期待啊');
            era.println();
            await tachyon.say_and_wait(
              '没有期待的意思是，从一开始你就不觉得会中吗？……这种在见到结果前就否认其可能性的做法，我并不欣赏就是了',
            );
            era.println();
            await era.printAndWait('啊……');
            era.println();
            await tachyon.say_and_wait('走吧，该回去继续实验了');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 的心情变差了',
            ]);
            await era.printAndWait(['你们默默的回到了学园']);
          } else {
            await tachyon.say_and_wait('安慰奖啊……算了，其实也没什么关系');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 也附和着，说到底就只是个商店街的小活动而已',
            ]);
            era.println();
            await tachyon.say_and_wait('毕竟这些奖品什么的我们都买得起不是吗');
            await tachyon.say_and_wait(
              '再说，面纸其实也很有用……你看，可以用来擦东西不是吗？',
            );
            await tachyon.say_and_wait(
              '还有，就是……那个温泉旅行券……就算抽到了我们也没时间去旅游不是吗',
            );
            era.println();
            await era.printAndWait('嗯？为什么忽然要说这么多');
            await tachyon.say_and_wait([
              '……对了，',
              callname,
              '，我听说这种抽奖有些商家都会做些机关……',
            ]);
            era.println();
            await era.printAndWait([
              '见到 ',
              tachyon.get_colored_name(),
              ' 甚至想上手去检查抽奖箱，',
              you.get_colored_name(),
              ' 连忙拉着 ',
              tachyon.get_colored_name(),
              ' 离开了商店街',
            ]);
            await tachyon.say_and_wait([
              '咕……放开我，',
              callname,
              '，我不在乎抽奖的奖品什么，但是身为消费者我有确认公平与否的权利及责任……！',
            ]);
            era.println();
            await era.printAndWait([
              '……其实，',
              tachyon.sex,
              '也没自己说的那么不在乎嘛',
            ]);
          }
          break;
        case 2:
          await you.say_as_passer_by_and_wait(
            '店主',
            '三等奖，特选胡萝卜一根！',
          );
          era.println();
          await era.printAndWait('说什么特选……只是清库存吧');
          await era.printAndWait([
            you.get_colored_name(),
            ' 无奈的拿着一根胡萝卜',
          ]);
          await era.printAndWait('不知是否是应该吐槽的点，但这抽奖的奖品');
          await era.printAndWait([
            '怎么感觉除了安慰奖的面纸和特奖的温泉旅行券其他都是专门为',
            tachyon.uma_sex_title,
            '而设计的呢？',
          ]);
          era.println();
          if (plan_b) {
            await tachyon.say_and_wait(
              '胡萝卜啊……这么说来，他们的奖品基本都是挺实用的呢',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 没多说什么，自然从 ',
              you.get_colored_name(),
              ' 手中接过了胡萝卜，掰了一小口放入嘴中',
            ]);
            era.println();
            await tachyon.say_and_wait('不错，挺甜的');
          } else if (relation <= 225) {
            await tachyon.say_and_wait([
              '哦？',
              callname,
              '，你现在的表情挺不错的',
            ]);
            era.println();
            await era.printAndWait('欸？表情？');
            era.println();
            await tachyon.say_and_wait('无奈，失落，安慰，很复杂的表情呢');
            era.println();
            await era.printAndWait([
              '啊……这么说起来，是为了让 ',
              tachyon.get_colored_name(),
              ' 研究感情才抽奖的来着',
            ]);
            await era.printAndWait(
              '……研究感情什么的，总觉得像什么不懂人心的机器人啊',
            );
            await era.printAndWait([
              '但想想眼前如疯狂科学家一般的 ',
              tachyon.get_colored_name(),
              '……',
            ]);
            await era.printAndWait([
              '哪怕',
              tachyon.sex,
              '现在说出什么不明白人心为何物大概都不会让人意外',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '今天的实验还算成功，接下来请再多表现出其他的感情给我吧，',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 擅自从 ',
              you.get_colored_name(),
              ' 手上抢过胡萝卜，掰了尖头的一小段含入口中',
            ]);
            era.println();
            await tachyon.say_and_wait('味道不错');
          } else {
            await tachyon.say_and_wait('哦呀，胡萝卜，这不是不错吗？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 走过来安慰 ',
              you.get_colored_name(),
            ]);
            era.println();
            await tachyon.say_and_wait(
              '比起那些华而不实的东西，能够补充营养的还是比较实际吧',
            );
            await tachyon.say_and_wait(
              '胡萝卜的话……回去做胡萝卜炒蛋吗？还是直接做胡萝卜汉堡排？直接打成胡萝卜汁似乎也不错……',
            );
            era.println();
            await era.printAndWait([
              '听见 ',
              tachyon.get_colored_name(),
              ' 安慰的话，',
              you.get_colored_name(),
              ' 也忍不住笑了起来',
            ]);
            era.printButton('「那样的话一根可不够啊」', 1);
            era.printButton('「得再多买一些了」', 2);
            await era.input();
            await era.printAndWait([
              '于是，你们又回到商店街，买了足够做晚饭的量的胡萝卜',
            ]);
            await era.printAndWait('……这不是上了商店街推销的当了吗？');
            await era.printAndWait([
              '回程的路上，',
              you.get_colored_name(),
              ' 才后知后觉的发现',
            ]);
          }
          break;
        case 3:
          await you.say_as_passer_by_and_wait(
            '店主',
            '二等奖，山一样高的胡萝卜堆！',
          );
          era.println();
          await era.printAndWait('呜哇！好多！');
          await era.printAndWait('真的是字面意义堆的像小山一样高');
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('哦呀，这不是很不错吗？');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 露出欣喜的表情',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '这个月，不，说不定这半年都不用愁萝卜了',
            );
            era.println();
            if (you.race > 0) {
              await era.printAndWait([
                '不，但就算是',
                tachyon.uma_sex_title,
                '自己也吃不了那么多啊……',
              ]);
              era.println();
              await tachyon.say_and_wait([
                '一般而言，对于',
                tachyon.uma_sex_title,
                '来说，消耗的能量越多需要补充的也就越多，所以吃得越多=越强其实是能够成立的',
              ]);
              era.println();
              await era.printAndWait([
                tachyon.get_colored_name(),
                ' 带着审量的眼神看着 ',
                you.get_colored_name(),
                ' 的身体',
              ]);
              era.println();
              await tachyon.say_and_wait(
                '增加食欲的药吗？……呵呵，说不定是个好选择呢',
              );
              era.println();
              await era.printAndWait([
                '看来这堆胡萝卜不可逃避的要变成 ',
                you.get_colored_name(),
                ' 一个人的责任了',
              ]);
              era.println();
              await era.printAndWait([
                you.get_colored_name(),
                ' 垂头丧气的拉着一车胡萝卜与 ',
                tachyon.get_colored_name(),
                ' 回到了特雷森学园',
              ]);
            } else {
              await era.printAndWait([
                '但，身为人类要那么多胡萝卜做什么啊……',
                you.get_colored_name(),
                ' 将 ',
                you.get_colored_name(),
                ' 的烦恼告诉了 ',
                tachyon.get_colored_name(),
              ]);
              era.println();
              await tachyon.say_and_wait([
                '哦呀……你的意思是，要以人类转化',
                tachyon.uma_sex_title,
                '的可能性进行实验吗？这样的研究……或许也不是不行……',
              ]);
              era.println();
              await you.say_and_wait('…………速子？');
              era.println();
              await tachyon.say_and_wait([
                '呵呵……提出了新的研究可能呢，',
                callname,
                '……这个，姑且当成以防万一的Plan C吧',
              ]);
              era.println();
              era.print([
                '十分危险及不妙的名词令 ',
                you.get_colored_name(),
                ' 忍不住背后一颤',
              ]);
              era.printButton('「还……还是给速子吧」', 1);
              era.printButton('「毕竟是你的抽奖券抽到的」', 2);
              await era.input();
              await tachyon.say_and_wait('……也是，可惜了，明明有这么好的机会');
              era.println();
              await era.printAndWait([
                '好不容易又逃过一劫的 ',
                you.get_colored_name(),
                ' 与 ',
                tachyon.get_colored_name(),
                ' 拉着一车的胡萝卜回到了特雷森学园',
              ]);
            }
          } else {
            era.println();
            await era.printAndWait([
              '看见奖品的瞬间 ',
              you.get_colored_name(),
              ' 就开始思考，这么多的胡萝卜……能给 ',
              tachyon.get_colored_name(),
              ' 做多少餐呢',
            ]);
            era.println();
            await tachyon.say_and_wait('真多啊……');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 也不由得因这一堆的胡萝卜而惊呆了脸',
            ]);
            era.println();
            await tachyon.say_and_wait('这样的话……有了……');
            era.println();
            await era.printAndWait([tachyon.get_colored_name(), ' 陷入了沉思']);
            await era.printAndWait([
              '对',
              tachyon.sex,
              '熟悉颇深的 ',
              you.get_colored_name(),
              ' 立马看出不妙',
            ]);
            era.println();
            await tachyon.say_and_wait('……免费胡萝卜……药……找小栗帽或特别周……');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 连忙开口打断',
              tachyon.sex,
              '的思绪',
            ]);
            era.printButton('「对……对了，来做胡萝卜满汉全席吧！」', 1);
            era.printButton(
              '「我，我最近正好学了不少料理都是胡萝卜为主的！」',
              2,
            );
            await era.input();
            await tachyon.say_and_wait('………………');
            era.println();
            await era.printAndWait('果然……还是不行吗？');
            era.println();
            await tachyon.say_and_wait([
              '怎么不早说！哎呀，蒸煮炒炸……会怎么做呢～～',
              callname,
              '，尽管做吧！食材这些没问题吧？需不需要更多点！',
            ]);
            era.println();
            await era.printAndWait([
              '已经很够了，',
              you.get_colored_name(),
              ' 苦笑着摇摇头',
            ]);
            await era.printAndWait([
              '能够用食物转移 ',
              tachyon.get_colored_name(),
              ' 的注意力真是太好了……虽然接下来要是做的不好一定会被惩罚的吧',
            ]);
            await era.printAndWait('但自己受药总比闹到全校好……');
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 拉着一车胡萝卜与兴奋的 ',
              tachyon.get_colored_name(),
              ' 一同回到特雷森，路上脑袋里还在想着如何做出令 ',
              tachyon.get_colored_name(),
              ' 满意的菜肴来',
            ]);
          }
          break;
        case 4:
          await you.say_as_passer_by_and_wait(
            '店主',
            '一等奖 特大份胡萝卜汉堡排！',
          );
          era.println();
          await era.printAndWait('欸……？');
          await era.printAndWait('一等奖就这个吗？');
          era.println();
          await era.printAndWait(
            '……这样啊，是知名大厨做的，虽然是自己没听过的人就是',
          );
          await era.printAndWait(
            '是错觉吗，但总觉得这个还不如二等奖的一车胡萝卜啊',
          );
          era.println();
          await tachyon.say_and_wait([
            '哦呀，居然是一等奖……不过，',
            callname,
            ' 你的情绪似乎不怎么开心的样子？',
          ]);
          era.printButton('「毕竟这个奖品只有速子能吃吧」', 1);
          era.printButton('「感觉……还不如二等奖啊」', 2);
          await era.input();
          await tachyon.say_and_wait(
            '哦？……嗯，某种意义上来讲确实如此，无论是由大厨制作的，总归来说，也就是胡萝卜与肉而已',
          );
          await tachyon.say_and_wait(
            '原料层面上来看，价值确实不如二等奖的胡萝卜数量',
          );
          if (love >= 75) {
            await tachyon.say_and_wait('那么，就让我来赋予它相应的价值吧……');
            era.println();
            await era.printAndWait([
              '说完，',
              tachyon.get_colored_name(),
              ' 捧过作为奖品的汉堡排',
            ]);
            await era.printAndWait([
              '切下刚好一口的大小，然后递到 ',
              you.get_colored_name(),
              ' 的嘴旁',
            ]);
            await era.printAndWait('欸，这是……');
            era.println();
            await tachyon.say_and_wait(
              '与爱人一起吃的汉堡排……这样它的价值是否提升了呢？',
            );
            era.println();
            await era.printAndWait([
              '没有等 ',
              you.get_colored_name(),
              ' 回话，',
              tachyon.get_colored_name(),
              ' 就将汉堡排戳进了 ',
              you.get_colored_name(),
              ' 的口中',
            ]);
            await era.printAndWait([
              '嚼完汉堡排后，',
              tachyon.sex,
              '才将叉子抽离',
            ]);
            era.println();
            await tachyon.say_and_wait('接下来轮到你了，亲爱的❤');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 张开嘴，等待着 ',
              you.get_colored_name(),
              ' 的喂食',
            ]);
            await era.printAndWait(['你们分享完了这个汉堡排']);
          } else if (love >= 50) {
            await tachyon.say_and_wait('……再说，做的也不如你');
            era.println();
            await era.printAndWait('欸……？');
            await era.printAndWait(
              '虽然被这样称赞很让人高兴，但自己的厨艺大概还是比不上这种知名主厨……',
            );
            era.println();
            await tachyon.say_and_wait(
              '呵呵……重要的不是营养，也不是味道，而是做的心意……这个，不是你教我的吗？',
            );
            era.println();
            await era.printAndWait([
              '说完，',
              tachyon.get_colored_name(),
              ' 捧过作为奖品的汉堡排',
            ]);
            await era.printAndWait([
              '切下刚好一口的大小，然后递到 ',
              you.get_colored_name(),
              ' 的嘴旁',
            ]);
            await era.printAndWait('欸，这是……');
            era.println();
            await tachyon.say_and_wait(
              '不过你说的也对……没有比较确实不好确定啊，科学必须严谨对吧',
            );
            await tachyon.say_and_wait(
              '所以……有技术但没有爱，以及技术略逊但有爱，其中究竟谁优谁劣……❤',
            );
            era.println();
            await era.printAndWait([
              '将汉堡排轻柔的喂入 ',
              you.get_colored_name(),
              ' 口中的 ',
              tachyon.get_colored_name(),
            ]);
            await era.printAndWait('再切了一小块放入自己口中');
            era.println();
            await tachyon.say_and_wait([
              '就麻烦你回去再做一份了以做比较了，',
              callname,
              '❤️',
            ]);
            era.println();
            await era.printAndWait(['在', tachyon.sex, '的笑容面前']);
            await era.printAndWait('自己仿佛真的变成了豚鼠一般，只能任其摆弄');
          } else if (cook_times === 0) {
            await tachyon.say_and_wait('不过，只有我能吃什么的，这可错了');
            era.println();
            await era.printAndWait([
              '说完，',
              tachyon.get_colored_name(),
              ' 捧过作为奖品的汉堡排',
            ]);
            await era.printAndWait([
              '切下刚好一口的大小，然后递到 ',
              you.get_colored_name(),
              ' 的嘴旁。',
            ]);
            await you.say_and_wait('欸，这是……');
            era.println();
            await tachyon.say_and_wait(
              '胡萝卜的营养成分，对人类而言也是相当有益的，汉堡排中的动物蛋白也是……',
            );
            await tachyon.say_and_wait([
              '不如说以人类的消化速率，对肉类的需求反而比',
              tachyon.uma_sex_title,
              '高上许多',
            ]);
            era.println();
            await era.printAndWait(
              '不，不是，所以说这是……要自己吃下去的意思？',
            );
            era.println();
            await tachyon.say_and_wait('啧……来，听话，啊～～');
            era.println();
            await era.printAndWait('居，居然还是「啊～～」');
            await era.printAndWait([
              you.get_colored_name(),
              ' 带着感动吃下了汉堡排……',
            ]);
            era.drawLine();
            era.printButton('「…………什么时候」', 1);
            await era.input();
            await era.printAndWait('无事献殷勤，必然有诈');
            await era.printAndWait('然而……美人计总是防不胜防');
            await era.printAndWait([
              '尤其对方还是准备给 ',
              you.get_colored_name(),
              ' 喂食的绝世美',
              tachyon.teen_sex_title,
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 看着身上发出的点点深蓝光芒，无语的问道',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '哼，我的下药技术要是连你都能看穿，那也枉费我每天苦心骗 ',
              call_25,
              ' 喝下我调制的药剂花的功夫了',
            ]);
            await tachyon.say_and_wait(
              '剩下的……你自己吃了吧，我对这种东西不怎么感兴趣',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '……不知为何，',
              tachyon.sex,
              '对一切饮食方面的要求都极为低标准',
            ]);
            await era.printAndWait('不，与其说是低标准不如说……毫无要求');
            await era.printAndWait('只要能够补充营养，什么都可以');
            await era.printAndWait(
              '不过……毕竟现在还算在新年期间……稍稍得寸进尺一下应该也是可以的吧',
            );
            era.printButton('「……真的很好吃的，速子不吃一口试试吗？」', 1);
            await era.input();
            await tachyon.say_and_wait('不用了，不是客气，是真的不需要');
            era.printButton(
              '「但，这是速子的抽奖券抽到的，要是自己不尝尝的话就不公平了吧」',
              1,
            );
            await era.input();
            await tachyon.say_and_wait('……也是，就吃一口试试');
            era.println();
            await era.printAndWait([
              '回过神来，',
              you.get_colored_name(),
              ' 叉子上叉着的那块肉已经被 ',
              tachyon.get_colored_name(),
              ' 以迅雷不及掩耳的速度咬下',
            ]);
            era.println();
            await tachyon.say_and_wait('好了，味道确实不错，就这样吧');
            era.println();
            await era.printAndWait('……好快！？');
            await era.printAndWait('完全没看到动嘴就……！');
            await era.printAndWait([
              '……要是',
              tachyon.sex,
              '真的开始享受起吃饭，大概会成为饭桌上的抢食能手吧',
            ]);
            await era.printAndWait([
              '不知为何，',
              you.get_colored_name(),
              ' 忽然开始思考起这些莫名其妙的事情',
            ]);
          } else {
            await tachyon.say_and_wait('那么……就让我来赋予其相应的价值吧');
            era.println();
            await era.printAndWait([
              '说完，',
              tachyon.get_colored_name(),
              ' 捧过作为奖品的汉堡排',
            ]);
            await era.printAndWait([
              '切下刚好一口的大小，然后递到 ',
              you.get_colored_name(),
              ' 的嘴旁',
            ]);
            await era.printAndWait('欸，这是……');
            if (relation <= 225) {
              await tachyon.say_and_wait([
                '身为G1赛',
                tachyon.uma_sex_title,
                '的 ',
                tachyon.get_colored_name(),
                ' 亲手喂食的汉堡排，这样有没有相应的价值了？',
              ]);
            } else {
              await tachyon.say_and_wait([
                '身为超绝美',
                tachyon.teen_sex_title,
                '，还是G1赛',
                tachyon.uma_sex_title,
                '的 ',
                tachyon.get_colored_name(),
                ' 亲手喂食的汉堡排，你愿意花多少来尝这一口呢？',
              ]);
            }
            era.println();
            await tachyon.say_and_wait('来，听话，啊～～');
            era.println();
            await era.printAndWait('居，居然还是「啊～～」');
            await era.printAndWait([
              you.get_colored_name(),
              ' 带着感动吃下了汉堡排……',
            ]);
            era.drawLine();
            era.printButton('「…………什么时候」', 1);
            await era.input();
            await era.printAndWait('无事献殷勤，必然有诈');
            await era.printAndWait('然而……美人计总是防不胜防');
            await era.printAndWait([
              '尤其对方还是准备给 ',
              you.get_colored_name(),
              ' 喂食的绝世美',
              tachyon.teen_sex_title,
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 看着身上发出的点点深蓝光芒，无语的问道',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '哼，我的下药技术要是连你都能看穿，那也枉费我每天苦心骗 ',
              call_25,
              ' 喝下我调制的药剂花的功夫了',
            ]);
            await tachyon.say_and_wait('剩下的……喂！给我也留一口啊！');
            era.println();
            await era.printAndWait([
              '化悲愤为食欲的 ',
              you.get_colored_name(),
              ' 拼命的与 ',
              tachyon.get_colored_name(),
              ' 争夺着剩下的汉堡排',
            ]);
            await era.printAndWait(
              '…………不得不承认，知名主厨做的确实比自己要强上许多',
            );
          }
          break;
        case 5:
          if (love >= 75) {
            await tachyon.say_and_wait('……没错，就是现在');
            await tachyon.say_and_wait('转！');
            era.println();
            await era.printAndWait([
              '相信着 ',
              tachyon.get_colored_name(),
              ' 的 ',
              you.get_colored_name(),
              ' 听见',
              tachyon.sex,
              '的话立马转动了滚轮',
            ]);
            await you.say_as_passer_by_and_wait('店主', '特等奖！温泉旅行券！');
            era.println();
            await era.printAndWait('商店街的大叔用力摇晃着铃铛');
            await era.printAndWait('宣布今天的最大奖已被抽出');
            era.println();
            await tachyon.say_and_wait('哦呀……温泉旅行券啊，看起来不错呢');
            era.println();
            await era.printAndWait('期限……到明年四月');
            await era.printAndWait('这样的话，等到URA总决赛结束正好是时间');
            era.printButton('「速子，要一起去吗？」', 1);
            await era.input();
            await tachyon.say_and_wait(
              '那当然，不如说除了我，还有什么其他人会跟你一起去吗？',
            );
            era.println();
            await era.printAndWait('真是不留情的话啊');
            era.println();
            await tachyon.say_and_wait(
              '开玩笑的，这张温泉券，就当作我给你三年以来的奖励吧……在突破了一切困难伤病之后迎来的……我们的happy ending',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 贴在 ',
              you.get_colored_name(),
              ' 耳边说道',
            ]);
            await era.printAndWait([
              '让人难以想象会是 ',
              tachyon.get_colored_name(),
              ' 说出的这些话使 ',
              you.get_colored_name(),
              ' 不由得惊讶的想抬起眼……',
            ]);
            era.println();
            await tachyon.say_and_wait('不要动');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 依旧贴在 ',
              you.get_colored_name(),
              ' 身旁，和 ',
              you.get_colored_name(),
              ' 一起，两人站在抽奖箱前亲昵的聊着',
            ]);
            await era.printAndWait('奇怪的是……为什么不肯离开抽奖箱……？');
            era.println();
            await tachyon.say_and_wait(['好了，我们走吧，', callname]);
            era.println();
            await era.printAndWait('欸');
            await era.printAndWait([
              '一直依偎在身旁的热度忽然消失，',
              you.get_colored_name(),
              ' 连忙跟上了 ',
              tachyon.get_colored_name(),
              ' 离开了商店街',
            ]);
            await era.printAndWait([
              '只看见走出商店街的 ',
              tachyon.get_colored_name(),
              ' 从左眼里取出了什么',
            ]);
            era.println();
            await tachyon.say_and_wait('呼，总算好点了');
            era.println();
            await era.printAndWait([
              '…………？',
              tachyon.get_colored_name(),
              ' 的眼睛……？',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 仔细盯着 ',
              tachyon.get_colored_name(),
              '，这才发现原本',
              tachyon.sex,
              '的红色渐层双眼，不知为何有一边看上去有那么一点点淡',
            ]);
            era.println();
            await you.say_and_wait('……美瞳？');
            era.println();
            await era.printAndWait([
              '难以想象 ',
              tachyon.get_colored_name(),
              ' 是会带这种东西的人',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '呵呵……这个啊，是神宫君和我合作研发的东西哦，',
            );
            await tachyon.say_and_wait(
              '首先呢，我的药剂可以让这种美瞳具有透视非生物的能力，',
            );
            await tachyon.say_and_wait(
              '而神宫君可以根据看见的东西来分析其运动轨迹，本来是用在分析比赛跑者上',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 霹雳啪啦说了许多，让 ',
              you.get_colored_name(),
              ' 有些晕乎',
            ]);
            await era.printAndWait('不过……');

            era.printButton('「难道说……这就是透视眼镜？」', 1);
            await era.input();
            await tachyon.say_and_wait('嘛，差不多……不过，因为一些小瑕疵，');
            await tachyon.say_and_wait(
              '比如要是戴着这个的话，在习惯眼前改变的视线前可以说一步都走不了，',
            );
            await tachyon.say_and_wait(
              '随便乱用的话甚至可能会因过多的资讯量而使大脑陷入昏迷，',
            );
            await tachyon.say_and_wait(
              '所以我跟神宫君是打算把这东西封印的，呵呵，没想到居然能够在这里派上用场……',
            );
            era.println();
            await era.printAndWait('派上用场……？');
            await era.printAndWait('透视+轨迹分析………');
            await era.printAndWait('不能动所以站在福抽的抽奖箱面前……');
            await you.say_and_wait('啊');
            era.printButton('「刚刚的福抽！」', 1);
            era.printButton('「速子你……」', 2);
            await era.input();
            await tachyon.say_and_wait('嘘');
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '把手放在唇前，比了个安静的手势',
            ]);
            era.println();
            await tachyon.say_and_wait('我不是说过吗？这是我送给你的礼物');
            era.println();
            await tachyon.say_and_wait('不是神明，也不是什么冥冥之中的运气');
            await tachyon.say_and_wait([
              '是我，',
              tachyon.get_colored_name(),
              ' 给我的爱人送上的新年贺礼',
            ]);
            await tachyon.say_and_wait([
              '新年快乐，',
              you.get_colored_actual_name(),
              ' 君',
            ]);
            era.println();
            await era.printAndWait(
              '以前提到新年，可能脑袋里会浮现出许许多多难忘的回忆',
            );
            await era.printAndWait(
              '诸如围炉、全家团圆、年夜饭或者电视上无聊的新春节目',
            );
            await era.printAndWait(
              '但从今天起，提起新年，脑袋里会浮现的第一印象便只有一个了',
            );
            await era.printAndWait([
              '在逐渐亮起的路灯下，如偷腥的小猫一般露出计谋得逞的微笑的',
              tachyon.sex,
            ]);
            era.println();
            await era.printAndWait('以及那个吻的滋味');
            await era.printAndWait([
              '那个吻的味道是甜蜜的滋味，比 ',
              tachyon.get_colored_name(),
              ' 的红茶还甜',
            ]);
          } else {
            await you.say_as_passer_by_and_wait('店主', '特等奖！温泉旅行券！');
            era.println();
            await era.printAndWait('商店街的大叔用力摇晃着铃铛');
            await era.printAndWait('宣布今天的最大奖已被抽出');
            era.println();
            await era.printAndWait('抽到特等奖了！');
            await era.printAndWait('居然是双人的温泉旅行券');
            era.println();
            await tachyon.say_and_wait('哦呀……温泉旅行券啊，看起来不错呢');
            era.println();
            await era.printAndWait('期限……到明年四月');
            await era.printAndWait('这样的话，等到URA总决赛结束正好是时间');
            era.println();
            if (love >= 50) {
              era.printButton('「速子，一起去吧！」', 1);
              await era.input();
              await tachyon.say_and_wait('呼姆……一起去吗？');
              await tachyon.say_and_wait([
                callname,
                '，你是在理解一般『一起去温泉旅行』的人都是什么关系之后，对我提出的邀请吗？',
              ]);
              era.println();
              await era.printAndWait('一般一起去温泉旅行的人……');
              era.printButton('夫妻', 1);
              era.printButton('情侣', 2);
              era.printButton(
                `「……一般的${tachyon.uma_sex_title}和训练员不是本来就会去吗？」`,
                3,
              );
              switch (await era.input()) {
                case 1:
                  await era.printAndWait('一般来讲……新婚夫妻吧');
                  await era.printAndWait('新婚旅行什么的很常去温泉旅行不是吗');
                  await you.say_and_wait('……我和速子，新婚夫妻……？', true);
                  break;
                case 2:
                  await era.printAndWait('大概……是情侣吧');
                  await era.printAndWait(
                    '如果不是这么亲密的关系，一般也不会只有两人一起去温泉旅行吧',
                  );
                  await you.say_and_wait('我和速子……情侣吗？', true);
                  break;
                case 3:
                  await era.printAndWait([
                    '……不，一般',
                    tachyon.uma_sex_title,
                    '和训练员不是本来就很常去吗？',
                  ]);
                  await era.printAndWait([
                    '每年四月都有很多前辈会和自己的负责',
                    tachyon.uma_sex_title,
                    '去……而且似乎都是在商店街抽到的，真不可思议',
                  ]);
                  await era.printAndWait(
                    '不过……果然只有两人去温泉旅行，还是会有些奇怪吧……？',
                  );
                  era.println();
                  await tachyon.say_and_wait([
                    '那么，你又希望和我在那时候变成什么关系呢？',
                    callname,
                    '……明年四月啊，呵呵，令人期待',
                  ]);
                  era.println();
                  await you.say_and_wait(
                    '明年四月，自己与速子的关系吗……',
                    true,
                  );
              }
            } else if (relation >= 225) {
              await tachyon.say_and_wait(
                '嗯……一起去吗？做为实验场所而言，确实是个不错的地方',
              );
              await tachyon.say_and_wait(
                '温泉旅馆就是那个吧，无论发生什么意外事件哪怕死了人都是很正常的地方',
              );
              await tachyon.say_and_wait(
                '这样的话我做点无害的小实验应该也无伤大雅……',
              );
              era.printButton('「不是的」', 1);
              await era.input();
              await era.printAndWait('不是作为实验或研究的场所');
              await era.printAndWait('而是在三年的两人三脚结束后两人的歇息');
              era.printButton(
                '「无关训练，无关实验，只是纯粹的休息……不行吗？」',
                1,
              );
              await era.input();
              await tachyon.say_and_wait('……明年四月吗');
              await tachyon.say_and_wait('呵呵，那就当成对豚鼠的犒劳吧');
              await tachyon.say_and_wait(
                '明年四月，等到我们的梦想告一段落……要是到那时候，你依然跟在我的身旁的话，就一起去吧',
              );
              era.printButton('「嗯！」', 1);
              await era.input();
              await tachyon.say_and_wait('不过，既然给予了奖励……');
              await tachyon.say_and_wait(
                '那么剩下的一年，你也要好好加油才行啊，',
              );
              await tachyon.say_and_wait([
                '乖乖接受实验，每天给我做饭，还有 ',
                call_25,
                ' 想逃跑的时候要把',
                tachyon.sex,
                '抓回来给我实验……',
              ]);
              era.println();
              await era.printAndWait('等一下等一下！最后那个明显做不到吧！');
              era.println();
              await era.printAndWait(['在嬉笑中，你们回到了特雷森学园']);
              await era.printAndWait('明年四月啊……真令人期待');
            } else {
              await era.printAndWait([
                '不过……',
                tachyon.get_colored_name(),
                ' 会愿意和自己去吗？',
              ]);
              era.println();
              await tachyon.say_and_wait(
                'URA总决赛结束温泉旅行吗……听起来不错呢',
              );
              era.println();
              await era.printAndWait('哦？居然这么轻松就答应了吗？');
              await era.printAndWait('还以为会嫌麻烦拒绝呢');
              era.println();
              await tachyon.say_and_wait(
                '温泉旅馆就是那个吧，无论发生什么意外事件哪怕死了人都是很正常的地方，这样的话我做点无害的小实验应该也无伤大雅……',
              );
              era.println();
              await era.printAndWait('…………要不，现在把券还回去吧？');
            }
          }
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      if (love >= 75) {
        await tachyon.say_and_wait(['来，', callname, '，情人节巧克力']);
        era.println();
        await era.printAndWait([
          '听见忽然闯入训练员室的 ',
          tachyon.get_colored_name(),
          '，淡淡说出的话，',
          you.get_colored_name(),
          ' 才意识到，今天原来是情人节啊',
        ]);
        await era.printAndWait([
          '为了 ',
          tachyon.get_colored_name(),
          ' 的训练整天忙前忙后，连时间都忘了',
        ]);
        era.println();
        await you.say_and_wait('不过……速子给的巧克力吗', true);
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着 ',
          tachyon.get_colored_name(),
          ' 从身后捧出的心型盒子，里面用小格子一格格分开的小巧巧克力',
        ]);
        await era.printAndWait('里面该不会……');
        era.println();
        await tachyon.say_and_wait(
          '嗯？什么嘛，这种表情，难道是觉得我会在里面加甚么药？',
        );
        era.printButton('点头', 1);
        era.printButton('「难道没有吗？」', 2);
        await era.input();
        await tachyon.say_and_wait('……真是过分的说法，虽然无法反驳');
        await tachyon.say_and_wait(
          '不过今天……毕竟是特别的日子，我还是不会做出那种事的啦',
        );
        await tachyon.say_and_wait('不信的话，我先吃一块？');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着 ',
          tachyon.get_colored_name(),
          ' 将巧克力缓缓推入口中',
        ]);
        await era.printAndWait('被前牙抵住的巧克力，随着樱唇的微启');
        await era.printAndWait('一口，两口');
        await era.printAndWait([
          '顺着手指的推入，巧克力渐渐消失在 ',
          tachyon.get_colored_name(),
          ' 的口中',
        ]);
        era.println();
        await era.printAndWait('这样的话……或许就能放心吃下去了吧');
        await era.printAndWait([
          you.get_colored_name(),
          ' 伸手，朝向桌上的巧克力',
        ]);
        await era.printAndWait('然而');
        era.printButton('「……？」', 1);
        await era.input();
        await era.printAndWait('巧克力盒，在手伸过去的瞬间被抽走了');
        await era.printAndWait([
          '正当 ',
          you.get_colored_name(),
          ' 感到奇怪时',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('没有防备的唇被偷袭');
        await era.printAndWait('灵巧的舌头撬开牙关后，灌入的是甜腻的黏浆');
        await era.printAndWait(
          '被紧紧压住，抵住的舌头，和压住自己的不速之客化作桥梁，让浓稠的，浓稠的液体顺流而下',
        );
        await era.printAndWait('好甜，好甜');
        await era.printAndWait([
          '完全符合 ',
          tachyon.get_colored_name(),
          ' 口味的巧克力沁入口腔',
        ]);
        await era.printAndWait([
          '明明对 ',
          you.get_colored_name(),
          ' 而言应该会太甜的口味，在 ',
          tachyon.get_colored_name(),
          ' 的舌头搅拌下，竟然渐渐的习惯了起来',
        ]);
        await era.printAndWait([
          '仿佛自己从身体在被改造，被调整成 ',
          tachyon.get_colored_name(),
          ' 喜欢的模样',
        ]);
        await era.printAndWait('……不，调整这个词，或许用的不是那么好');
        era.println();
        await tachyon.say_and_wait(['……', callname, '，巧克力，还有很多哦❤️']);
        era.println();
        await era.printAndWait('看着眼前爱人充满情欲及兽欲的眼神');
        await era.printAndWait('啊啊……被「料理」好的食材，就要准备被食用了');
      } else if (love >= 50) {
        await tachyon.say_and_wait(['哦呀，', callname, '，情人节快乐！']);
        era.println();
        await era.printAndWait([
          '晴朗的一天，忽然打破这宁静早晨撞开大门，是身后拿着一个大袋子的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('……奇怪，今天应该不是圣诞节啊');
        era.println();
        await tachyon.say_and_wait([
          '嗯？这些？是别的',
          tachyon.uma_sex_title,
          '们送的礼物哦？',
        ]);
        await tachyon.say_and_wait(
          '真是……明明都说不需要了，比起这种东西，倒不如说自愿提供给我实验我还会比较高兴……',
        );
        era.println();
        await era.printAndWait([
          '原来 ',
          tachyon.get_colored_name(),
          '……这么受欢迎吗',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 的心中忽然涌起一丝丝的嫉妒',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '不提这个了，总之 ',
          callname,
          ' 快收下我的巧克力吧！',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 从包里挑挑拣拣，翻找着袋子里那些大小略有不同但大同小异的巧克力',
        ]);
        await era.printAndWait(
          '难道说……只是随便把其他人给的巧克力转送而已吗？',
        );
        await era.printAndWait([
          '明明和 ',
          tachyon.get_colored_name(),
          ' 的关系并没有到那种程度，却还是忍不住觉得，自己应该有所不同，应该会被特殊对待',
        ]);
        era.printButton('「那是……义理的巧克力吗？」', 1);
        await era.input();
        await era.printAndWait('身为指导者明明不该问这种问题的');
        await era.printAndWait('但是……果然');
        await era.printAndWait([
          '还是想要知道，',
          tachyon.get_colored_name(),
          ' 的真实想法',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          '听见 ',
          you.get_colored_name(),
          ' 的话，',
          tachyon.get_colored_name(),
          ' 停下了翻找袋子的手',
        ]);
        await era.printAndWait([
          '抬起头来，直直盯着 ',
          you.get_colored_name(),
          ' 的眼睛',
        ]);
        await era.printAndWait([
          '那双美丽的红瞳，仿佛看透了 ',
          you.get_colored_name(),
          ' 的内心一般',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '哦呀，这句话是什么意思呢，',
          callname,
          '？',
        ]);
        await tachyon.say_and_wait('如果说是义理的，该怎么办？');
        await tachyon.say_and_wait(['还是你希望……是什么类型的巧克力呢？']);
        era.printButton('「希望是速子特别送的」', 1);
        era.printButton('「希望是速子只送给我一人的巧克力」', 2);
        await era.input();
        await era.printAndWait('最后，还是不敢说出那两个字');
        await era.printAndWait([
          '怎么可以呢，身为训练员的自己，居然要问负责',
          tachyon.uma_sex_title,
          '对自己是不是「真爱」',
        ]);
        era.println();
        await tachyon.say_and_wait('那么，就给你吧');
        era.println();
        await era.printAndWait(
          '终于，从布袋最底下翻出一个七彩颜色，绝不会被人认错的小包装后',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 将巧克力塞进胸口的小口袋',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '来吧，给亲爱的实验动物，作为一年的感激……以及，感激之外的❤',
        );
        await tachyon.say_and_wait('就请你，亲自来将其拿出吧');
        era.println();
        if (era.get('exp:0:性爱次数') === era.get('exp:0:睡奸次数')) {
          await era.printAndWait([
            '看见 ',
            tachyon.get_colored_name(),
            ' 明显将胸前突出的动作',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 颤颤巍巍的伸出手来',
          ]);
          await era.printAndWait('小心翼翼，不碰到胸的取出了巧克力');
        } else {
          await era.printAndWait([
            '看见 ',
            tachyon.get_colored_name(),
            ' 明显将胸前突出的动作',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 大方的伸出手，不客气的直接拿走了巧克力',
          ]);
          await era.printAndWait([
            '途中捏到的，使得身前',
            tachyon.uma_sex_title,
            '发出娇声的肉块？',
          ]);
          await era.printAndWait(
            '大概是错觉吧，毕竟放巧克力的架子怎么会发出声音来呢',
          );
        }
        era.println();
        await era.printAndWait([
          '拨开巧克力的包装，',
          you.get_colored_name(),
          ' 将巧克力含在口中',
        ]);
        await era.printAndWait('在放进口中的瞬间，巧克力便直接融化了');
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('猪肉、洋葱、酱汁……');
        await era.printAndWait([
          '完全不像巧克力该出现的味道弥漫在 ',
          you.get_colored_name(),
          ' 口中',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '？表情怎么这么奇怪？']);
        await tachyon.say_and_wait(
          '快点快点，有什么效果？……肉体上看不出变化，难道是什么内在上发作的吗……',
        );
        await era.printAndWait([
          '忽然一改前面的暧昧气氛，',
          tachyon.get_colored_name(),
          ' 兴奋的问起 ',
          you.get_colored_name(),
          ' 吃下巧克力的反应',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '？难道说，你不想对我辛苦在实验室调配了半天做出的巧克力做出评价吗？',
        ]);
        era.println();
        await era.printAndWait('…………这个家伙');
      } else if (relation > 225) {
        await tachyon.say_and_wait(['哈哈哈！', callname, '！']);
        era.println();
        await era.printAndWait([
          '随着一阵开朗的笑声，撞开训练员室大门的，是身后拿着一个大袋子的 ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Merry Christmas？Happy New Year？反正就是某种节日快乐，快快快，收下我的礼物吧！',
        );
        era.printButton('「……是说，情人节吗？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '唔……不重要，总之这是个可以合法塞食物给别人的节日对吧？',
        );
        era.println();
        await era.printAndWait('……这样解释似乎也没错？');
        await era.printAndWait([
          '但是一想到对方是 ',
          tachyon.get_colored_name(),
          '……',
        ]);
        era.printButton('「……你加了什么药」', 1);
        era.printButton('「……你给多少人了」', 2);
        await era.input();
        await tachyon.say_and_wait('那种事不重要！快收下吧，我的情人节礼物！');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 从包里挑挑拣拣，拿出了一块尤其大块的巧克力，没有问过 ',
          you.get_colored_name(),
          ' 的允许就塞进 ',
          you.get_colored_name(),
          ' 的手里',
        ]);
        await era.printAndWait([
          '看',
          tachyon.sex,
          '熟练的动作，一路上应该已经给过不少人了吧',
        ]);
        await era.printAndWait('……明天得去各方道歉才行，但首先要先活过这关');
        await era.printAndWait([
          you.get_colored_name(),
          ' 战战兢兢的咬了口巧克力',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('发光、变形、长出两颗头、背上生出翅膀、液化……');
        await era.printAndWait('种种变化都………没有发生');
        await era.printAndWait('要说的话，大概，可能，说不定只是普通的巧克力');
        await era.printAndWait([
          '但是，这是 ',
          tachyon.get_colored_name(),
          ' 标准的「正常」',
        ]);
        await era.printAndWait('要说是不是正常人来说的巧克力……');
        era.printButton('为什么……是猪排盖饭味的！？', 1);
        await era.input();
        await era.printAndWait('猪肉、洋葱、酱汁……');
        await era.printAndWait([
          '完全不像巧克力该出现的味道弥漫在 ',
          you.get_colored_name(),
          ' 口中',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '？表情怎么这么奇怪？']);
        await tachyon.say_and_wait(
          '快点快点，有什么效果？……肉体上看不出变化，难道是什么内在上发作的吗……',
        );
        era.println();
        await era.printAndWait(
          '这家伙……连自己都不知道药效是什么就随便给人塞吗',
        );
        await era.printAndWait([
          '其他日子也就算了，想起这个情侣们到处放闪喂狗粮的日子被 ',
          tachyon.get_colored_name(),
          ' 这样毁掉…………',
        ]);
        await era.printAndWait([
          '奇怪，怎么忽然觉得 ',
          tachyon.get_colored_name(),
          ' 做的对呢',
        ]);
        await era.printAndWait([
          '…………总之，还是该给 ',
          tachyon.get_colored_name(),
          ' 些教训才对',
        ]);
        era.printButton('「好像没有出现效果啊」', 1);
        era.printButton('「速子也吃吃看吧」', 2);
        await era.input();
        await era.printAndWait([
          '没等 ',
          tachyon.get_colored_name(),
          ' 回应，',
          you.get_colored_name(),
          ' 就将吃了一口的巧克力塞进 ',
          tachyon.get_colored_name(),
          ' 口中',
        ]);
        era.println();
        await tachyon.say_and_wait('唔！？咕呜！？');
        era.println();
        await era.printAndWait([
          '猝不及防的 ',
          tachyon.get_colored_name(),
          ' 被塞了满嘴的巧克力',
        ]);
        await era.printAndWait([
          '想要开口的',
          tachyon.sex,
          '不由得将嘴里的巧克力吞下',
        ]);
        era.println();
        await tachyon.say_and_wait(['等，你在做什么！', callname, '！？']);
        await tachyon.say_and_wait('呜呃……这是什么味道！？');
        await tachyon.say_and_wait([
          '好奇怪的味道！！为什么巧克力会有猪排的味道啊！',
        ]);
        era.println();
        await era.printAndWait([
          '虽然明天大概会被狠狠报复，但此刻看见 ',
          tachyon.get_colored_name(),
          ' 满脸惊愕和恶心的模样',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 还是感到心中一阵畅快',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 吵吵闹闹的情人节结束了',
        ]);
      } else {
        await tachyon.say_and_wait([callname, '！哈哈哈，情人节快乐！']);
        era.printButton('「……速子？」', 1);
        await era.input();
        await era.printAndWait([
          '看见如此亢奋的 ',
          tachyon.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 不由得有些警惕',
        ]);
        await era.printAndWait([
          '原因无他，平常态度总是冷淡的 ',
          tachyon.get_colored_name(),
          '，今天的态度却意外的亢奋',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '嗯？',
          callname,
          '？怎么了，不祝我情人节快乐吗？是不是……不喜欢我……咕呜……',
        ]);
        await tachyon.say_and_wait('呜呜……唔……头……好晕……');
        era.println();
        await era.printAndWait([
          '奇怪，怎么总觉得今天的 ',
          tachyon.get_colored_name(),
          '……有些奇怪',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 仔细观察着 ',
          tachyon.get_colored_name(),
          ' 的脸，原本以为是因为寒冷的天气或者兴奋的情绪而微红的脸颊和迷离的双眼顿时被 ',
          you.get_colored_name(),
          ' 捕捉',
        ]);
        era.printButton('「……速子，你喝酒了？」', 1);
        await era.input();
        await tachyon.say_and_wait('唔……才没有……');
        await tachyon.say_and_wait('只是……只是……不小心喝了点……乙醇的混合物……');
        era.println();
        await era.printAndWait('乙醇混合物……那不就是酒吗！？');
        await era.printAndWait([
          '难怪 ',
          tachyon.get_colored_name(),
          ' 的情绪看起来如此不对劲……',
        ]);
        await era.printAndWait('总之，这样今天大概是没法训练了');
        await era.printAndWait(['还是先让', tachyon.sex, '好好休息吧']);
        era.println();
        await era.printAndWait([
          '然而看上去并不想休息的 ',
          tachyon.get_colored_name(),
          ' 躲过了 ',
          you.get_colored_name(),
          ' 的手后',
        ]);
        await era.printAndWait(
          '在怀中翻了几下，才从那总是藏在白大褂内侧口袋的药瓶中，勉强找出了某个用实验滤纸包裹的东西',
        );
        await era.printAndWait('拨开一看，里面是一块七彩颜色的巧克力');
        era.println();
        await tachyon.say_and_wait(['唔……对……对了……', callname, '……？']);
        await tachyon.say_and_wait('情……情人节的，巧克力……');
        era.drawLine();
        await era.printAndWait('如此不妙的情人节礼物，真是第一次看到啊');
        await era.printAndWait('真的要把这么可疑的巧克力吃下去吗');
        era.printButton('「这是……用什么做的？」', 1);
        await era.input();
        await tachyon.say_and_wait('用……什么？唔……忘记了……');
        await tachyon.say_and_wait(
          '好像……好像……可可粉……牛奶……糖……酱油……洋葱……生猪肉？',
        );
        era.println();
        await era.printAndWait(
          '最后那几个完全不是应该出现在巧克力里的东西吧！？',
        );
        await era.printAndWait('不过……值得庆幸的是起码没放什么有毒的东西吗？');
        await era.printAndWait('虽然味道一定会很怪');
        era.println();
        await tachyon.say_and_wait('为……为什么不吃……');
        await tachyon.say_and_wait([
          '吃啊……',
          callname,
          '……是不是……不给我面子……',
        ]);
        era.println();
        await era.printAndWait('怎么忽然变成劝酒的大叔口气了！？');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 看 ',
          you.get_colored_name(),
          ' 一直迟迟不肯动手，干脆自己拿起了巧克力',
        ]);
        await era.printAndWait('然后……叼在口中');
        era.println();
        await tachyon.say_and_wait('唔……滋样继嫩吃了吧（这样就能吃了吧）');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 将巧克力轻轻咬在口中',
        ]);
        await era.printAndWait([
          '樱唇微启，朝着 ',
          you.get_colored_name(),
          ' 示意从另外一边咬上来',
        ]);
        await era.printAndWait('……欸？');
        era.println();
        await tachyon.say_and_wait(
          '嘻嘻……滋样苏不定u机会亲得呃（这样说不定有机会亲到哦）',
        );
        era.println();
        await era.printAndWait('……这就是酒的魔力吗');
        await era.printAndWait([
          '原本总是不给自己好脸色看的 ',
          tachyon.get_colored_name(),
          '，表情居然变得如此柔和，妩媚',
        ]);
        await era.printAndWait([
          '不由自主的，',
          you.get_colored_name(),
          ' 上前咬住了巧克力',
        ]);
        era.println();
        await era.printAndWait('好近，好近');
        await era.printAndWait([
          '近的能够直接感受到 ',
          tachyon.get_colored_name(),
          ' 的鼻息',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 望着 ',
          tachyon.get_colored_name(),
          ' 的眼睛',
        ]);
        await era.printAndWait('那令人着迷，现在却有些醉朦的眼眸');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 小口小口咬着，生怕万一巧克力吃完了，这样的时光就会消失',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 也慢慢的，向前靠近，近的两对蝶唇几乎就要碰在一起……不，也或许，已经碰到了呢？',
        ]);
        await era.printAndWait('然而……巧克力的大小也就那样');
        await era.printAndWait(
          '或许是温度影响，也或许是谁率先断了这维持不易的连结',
        );
        await era.printAndWait([
          '巧克力在你们两人的口中融化，断裂，进入了两人的口中',
        ]);
        era.printButton('「！？」', 1);
        await era.input();
        await era.printAndWait('……没毒');
        await era.printAndWait([
          '在 ',
          tachyon.get_colored_name(),
          ' 的淫威下试过许多次药的 ',
          you.get_colored_name(),
          ' 可以大胆做出判断，不是有毒的东西',
        ]);
        await era.printAndWait('但是这个味道……这个味道……');
        era.printButton('「为什么……是猪肉盖饭……？」', 1);
        await era.input();
        await era.printAndWait(
          '虽然在听见最后那些莫名其妙的食材之后就有所预感',
        );
        await era.printAndWait('但这味道还是令人难以理解');
        await era.printAndWait('不如说，到底是怎么做出这种巧克力来的……');
        await era.printAndWait([
          you.get_colored_name(),
          ' 看向 ',
          tachyon.get_colored_name(),
          '，',
          tachyon.get_colored_name(),
          ' 却一直没有说话',
        ]);
        await era.printAndWait('该不会……有什么问题……');
        era.println();
        await tachyon.say_and_wait('……………噗');
        await tachyon.say_and_wait('哈哈哈哈！这什么味道啊！也太奇怪了！');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 忽然开始大笑']);
        await era.printAndWait('难道是有什么自己并不知道的笑点吗？');
        await era.printAndWait([you.get_colored_name(), ' 思考了一下']);
        await era.printAndWait('猪排盖饭味道的巧克力');
        await era.printAndWait('…………仔细想想，好像确实挺好玩的');
        era.println();
        await era.printAndWait([
          '不知不觉，',
          you.get_colored_name(),
          ' 也跟着笑了起来',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('zzz……唔嗯……咻……');
        era.println();
        await era.printAndWait('真是……胡闹完之后就自顾自的睡着了');
        await era.printAndWait([
          '难道说，',
          tachyon.get_colored_name(),
          ' 有变成那种酒品不好的醉汉的潜力吗……？',
        ]);
        era.println();
        await tachyon.say_and_wait('嗯……豚鼠……谢……咻……');
        era.println();
        await era.printAndWait('………难道说');
        await era.printAndWait('是因为害羞，不敢说出口所以……');
        await era.printAndWait([
          '不，在想什么呢，',
          tachyon.get_colored_name(),
          ' 的话……八成真的是意外……吗？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 擦了擦 ',
          tachyon.get_colored_name(),
          ' 嘴边的口水',
        ]);
        await era.printAndWait([
          '姑且……等',
          tachyon.sex,
          '醒来之后跟',
          tachyon.sex,
          '确认一下吧，希望……',
          tachyon.sex,
          '最起码知道巧克力里该加和不该加的东西',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '短暂歇息';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} plan_b 是否进入 Plan B
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      plan_b,
      prix_lat,
      arim_kin,
    ) => {
      const ret = [];
      await tachyon.say_and_wait('夏日集训，然后……');
      if (plan_b) {
        await tachyon.say_and_wait(['然后再下一步……就是 ', prix_lat, ' 了']);
        await tachyon.say_and_wait(
          '嗯，以世界的顶点作为巅峰的目标……呵呵，这真是，再适合不过了啊',
        );
      } else {
        era.println();
        await tachyon.say_and_wait([
          '然后再下一步……就是年底的 ',
          arim_kin,
          ' 了',
        ]);
        await tachyon.say_and_wait(
          '嗯，以最具有影响力的比赛作为我们理论的结束……呵呵，这真是，再适合不过了啊',
        );
      }
      era.printButton('「不过，在这之前……」', 1);
      era.printButton('「还是先好好享受一番吧」', 2);
      await era.input();
      await era.printAndWait('阳光，沙滩，比基尼');
      await era.printAndWait(['还有 ', tachyon.get_colored_name(), ' 的泳装']);
      await era.printAndWait([tachyon.get_colored_name(), ' 的，泳装']);
      era.println();
      if (love >= 50 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          '只是看看……就够了吗？难道不想，亲自体验上手吗？',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 前倾望着 ',
          you.get_colored_name(),
          ' 的双眼，等待着某人主动踏出一步',
        ]);
        era.printButton('伸手去摸', 1);
        era.printButton('拒绝', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            ' 忍不住伸手，朝向 ',
            tachyon.get_colored_name(),
            ' 胸前，那两条敷衍的细布完全装不下的果实',
          ]);
          era.println();
          await tachyon.say_and_wait('嗯……❤');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 发出了低吟，但瞳中的情绪却没什么变化',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 不由得陷入紧张，是自己的技术不够好吗？',
          ]);
          era.println();
          await era.printAndWait('不管怎么努力，都还是会被说更用力一些');
          await era.printAndWait([
            '说到底本来想用人类的力道去满足',
            tachyon.uma_sex_title,
            '就是难以做到的事吧……',
          ]);
          await era.printAndWait([
            '此时，你忽然发现，在泳装的下方，有着两颗先前没有，或者说没有那么明显的突起',
          ]);
          await era.printAndWait([
            '或许是作为速通的作弊按纽吧，鬼使神差的，你按下了圆润的球体上唯一的突起',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '等……咿！',
            callname,
            '！那里，那里不行！',
          ]);
          era.println();
          await era.printAndWait([
            '前面被指使了那么久，现在哪有说停就停的道理，',
            you.get_colored_name(),
            ' 不问不顾继续逮着尖顶的位置欺负',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '我……是我错了……刚刚不该那么说……不要，不要再按了……不行，不可以……',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 的反应比 ',
            you.get_colored_name(),
            ' 想象的还要大上许多',
          ]);
          await era.printAndWait([
            '不由得产生了好奇心的 ',
            you.get_colored_name(),
            ' 忽然童心大发，想测试看看怎么做 ',
            tachyon.get_colored_name(),
            ' 的反应才会最为激烈',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……哈啊……哈啊……']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 稍稍放松了手上的动作，在以为已经脱离危险的豚鼠小姐放松警惕后……',
          ]);
          era.println();
          await tachyon.say_and_wait('咿——————去，去了');
          era.println();
          await era.printAndWait('如压榨奶牛挤奶一般，用力的向下一拉');
          await era.printAndWait([
            '伴随全身不住的颤抖，',
            tachyon.get_colored_name(),
            ' 翻着白眼，向前倒下，压在了 ',
            you.get_colored_name(),
            ' 的身子上',
          ]);
          era.println();
          await tachyon.say_and_wait('欸嘿嘿……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 轻轻抚摸着 ',
            tachyon.get_colored_name(),
            ' 的背部，缓解',
            tachyon.sex,
            '的全身痉挛',
          ]);
          era.printButton('「真是没用啊，只是捏了捏乳头就去了吗？」', 1);
          era.printButton(
            `「比起赛${tachyon.uma_sex_title}，不如说是繁殖用的母马更合适吧」`,
            2,
          );
          await era.input();
          await era.printAndWait([
            '听见 ',
            you.get_colored_name(),
            ' 侮辱性的话语，',
            tachyon.get_colored_name(),
            ' 又抖了抖身子，被',
            tachyon.sex,
            '压在身下的 ',
            you.get_colored_name(),
            ' 感受到了微微的暖意从',
            tachyon.sex,
            '的股间流出',
          ]);
        }
      } else if (relation >= 225 && tachyon.sex_code !== 1) {
        await tachyon.say_and_wait(
          '怎么？看得这么入迷？呵呵，作为对帮助实验的奖励，再多看一些也没关系哦',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 扭了扭身子，更加凸显了胸前的硕大',
        ]);
      } else if (relation > 0 && relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          '呵，就这么喜欢这种露出度高的衣服吗？……不，这种情况风阻变小，确实有可能增加速度……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 说到一半又陷入了自己的沉思',
        ]);
        await era.printAndWait([
          '至于泳装对跑步的加成……',
          you.get_colored_name(),
          ' 看了看',
          tachyon.sex,
          '那不工整的热裤和凉鞋……',
          you.get_colored_name(),
          ' 想，问题应该不在泳装上吧',
        ]);
      } else {
        await tachyon.say_and_wait(
          '……我不会要求你必须和我一样以理性至上，但至少收收你那发情猴子一样的眼神',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  try_drug: (() => {
    const title = '试药';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {1|2|3|4|5} effect 药物效果，1-喷火，2-灵视，3-石化，4-发情，5-发光
     * @param {boolean} do_sex 遇到发情药效是否做爱
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      effect,
      do_sex,
    ) => {
      const colors = [
        '七彩',
        '深红色',
        '深橙色',
        '深黄色',
        '深绿色',
        '深蓝色',
        '深靛色',
        '深紫色',
        '深灰色',
        '深银色',
        '深金色',
        '浅红色',
        '浅橙色',
        '浅黄色',
        '浅绿色',
        '浅蓝色',
        '浅靛色',
        '浅紫色',
        '浅灰色',
        '浅银色',
        '浅金色',
      ];
      await tachyon.say_and_wait([
        '哦呀，',
        callname,
        '，来得正好，这是今天的药',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 递了瓶呈',
        get_random_entry(colors),
        '的药水给 ',
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 二话不说喝下药水']);
      switch (effect) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' 喝下药水后忽然感觉喉咙很痒',
          ]);
          await era.printAndWait('忍不住想咳嗽，没想到一咳出来的却是火星');
          era.println();
          await tachyon.say_and_wait('哦呀哦呀，看来龙息药水的效果很好啊');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 一脸高兴的记录着实验数据，却没预料到接下的后果，咳出的火星落到了',
            tachyon.sex,
            '身旁的实验纪录上',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '怎么…………有股烧焦味……………我的实验数据！！？？',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '连忙开始挽救那些还没烧着的实验纪录，',
            you.get_colored_name(),
            ' 想上前帮忙，但喉咙实在痒的不行',
          ]);
          era.println();
          await tachyon.say_and_wait('咳咳！！');
          era.println();
          await era.printAndWait([
            '在药效消失前，',
            tachyon.get_colored_name(),
            ' 只是不停的跑来跑去抢救着资料',
          ]);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' 喝下药水后感觉眼睛看出去的世界忽然变得清楚了许多，',
          ]);
          await era.printAndWait([
            '但 ',
            you.get_colored_name(),
            ' 不禁开始怀疑那是不是迷幻药一类的东西，因为 ',
            you.get_colored_name(),
            ' 的眼前开始看见了一些奇怪的东西',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '哦？看来有什么效果的样子？这是我根据 ',
            t_call_c,
            ' 说的看见另一个世界的感觉制造出来的灵视药剂',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '到底做了什么出来！这已经跨越正常化学领域了吧！？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '顺便，要是你现在能看见的话，帮我看看我身上吧',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 听见这句话，下意识看向了 ',
            tachyon.get_colored_name(),
          ]);
          await era.printAndWait([
            '随即，',
            you.get_colored_name(),
            ' 的意识瞬间停止了运作',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '昨天缠着 ',
            t_call_c,
            ' 的时候好像不小心把',
            coffee.sex,
            '惹毛了，从昨天回来之后就觉得身体好沉重……',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 看见，有某个黑影用双手压在了 ',
            tachyon.get_colored_name(),
            ' 的肩上',
          ]);
          await era.printAndWait([
            '黑影似乎察觉到了 ',
            you.get_colored_name(),
            ' 的视线，伸出手指在可能是脸的部分比了一个嘘的手势',
          ]);
          await era.printAndWait([
            '接下来，',
            you.get_colored_name(),
            ' 感觉自己什么也说不出口了',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '………奇怪，真的没什么吗，为什么感觉身体这么重',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 没注意到 ',
            you.get_colored_name(),
            ' 的不对，喃喃自语说完后走出了房间',
          ]);
          await era.printAndWait([
            '此时 ',
            you.get_colored_name(),
            ' 才总算能够大口呼吸，那个黑影，到底是什么………',
          ]);
          era.println();
          await era.printAndWait([
            '顺带一提，隔天 ',
            tachyon.get_colored_name(),
            ' 就恢复正常了，看来或许只是 ',
            coffee.get_colored_name(),
            ' 的稍加惩戒而已吧',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' 喝下药后忽然感觉身体无比僵硬',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 惊恐的发现现在的自己全身上下除了嘴和脑袋其他所有地方都无法动弹了',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '哎呀………原本是想做能够增强身体抗打击力的药剂，结果变成类似石化的效果了吗………',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 没有功夫理会 ',
            tachyon.get_colored_name(),
            ' 的实验后感想',
          ]);
          await era.printAndWait([you.get_colored_name(), ' 的心情十分着急']);
          await era.printAndWait('拼命想移动身体却动弹不得');
          await era.printAndWait(
            '接下来还有一场关于训练场时间分配的会议，要是今天没法出席之后一个月训练场都没得使用了',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' 将事情的严重性告诉了 ',
            tachyon.get_colored_name(),
          ]);
          await era.printAndWait([tachyon.sex, '也感到大事不妙']);
          era.println();
          await tachyon.say_and_wait(
            '要是没法上训练场怎么确认我药剂的效果！？',
          );
          era.println();
          await era.printAndWait([
            '总之，姑且不论原因为何，现在的当要之急是把 ',
            you.get_colored_name(),
            ' 送到会议室去',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 努力将 ',
            you.get_colored_name(),
            ' 抬起，要送到会议室去',
          ]);
          await era.printAndWait([
            '不知为何喝下了药剂后 ',
            you.get_colored_name(),
            ' 的身子变得特别沉重，就连 ',
            tachyon.get_colored_name(),
            ' 用',
            tachyon.uma_sex_title,
            '的力气想将 ',
            you.get_colored_name(),
            ' 托起都耗费了好大一番功夫',
          ]);
          await era.printAndWait([
            '最后好不容易，总算将 ',
            you.get_colored_name(),
            ' 抬到会议室，并且为了被人发现不对，',
            tachyon.get_colored_name(),
            ' 在旁全程陪同参加会议',
          ]);
          era.println();
          await era.printAndWait([
            '在那天之后，不知为何学园里开始流传起 ',
            tachyon.get_colored_name(),
            ' 和 ',
            you.get_colored_name(),
            ' 的绯闻',
          ]);
          await you.say_as_passer_by_and_wait(
            `路人${tachyon.uma_sex_title}A`,
            '据说是用公主抱抱去参加会议的',
          );
          await you.say_as_passer_by_and_wait(
            '路人训练员A',
            '会议上也全程陪同，帮忙端茶递水，完全就是贤内助的模样',
          );
          await you.say_as_passer_by_and_wait(`路人${tachyon.uma_sex_title}B`, [
            '没想到那个 ',
            tachyon.get_colored_name(),
            ' 也恋爱了啊…………',
          ]);
          era.println();
          await era.printAndWait('……………为什么会产生这样的绯闻呢');
          await era.printAndWait([
            '以及，为什么听到这样的绯闻后，',
            tachyon.get_colored_name(),
            ' 的脸仿佛有点红的样子',
          ]);
          break;
        case 4:
          await era.printAndWait([
            '药水在 ',
            you.get_colored_name(),
            ' 喝下之前便爆出了粉色的浓雾，将 ',
            you.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 包裹在雾中',
          ]);
          era.println();
          await tachyon.say_and_wait('咳咳！怎么回事！？');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 摇头表示自己不知道，说到底连药的效果是什么都不知道的 ',
            you.get_colored_name(),
            ' 怎么可能会知道这是怎么回事',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '明明只是普通的精力药而已……算了，先把窗户跟门打开让雾气散掉',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 连忙到窗前想要开窗散气，然而',
          ]);
          era.println();
          await tachyon.say_and_wait('咕，身体提不起劲……！');
          era.println();
          await era.printAndWait([
            '这段期间，',
            you.get_colored_name(),
            ' 一直端坐在椅子上，哪都没去，这并非是因为 ',
            you.get_colored_name(),
            ' 内心的余裕，',
          ]);
          if (you.sex_code !== 1) {
            await era.printAndWait([
              '而是因为 ',
              you.get_colored_name(),
              ' 下面已经泛滥成灾',
            ]);
          } else {
            await era.printAndWait([
              '而是因为 ',
              you.get_colored_name(),
              ' 下半身的兄弟已经高高立起',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' 想起了 ',
            tachyon.get_colored_name(),
            ' 说的精力药，一般而言的精力药指的……都是针对那方面的药吧',
          ]);
          await era.printAndWait([
            '为什么 ',
            tachyon.get_colored_name(),
            ' 会做那样的药，',
            you.get_colored_name(),
            ' 的内心感到疑惑，但现在不是思考这些的时候了，因为……',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……我的身体……好热……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 用变成爱心状的双眼看着 ',
            you.get_colored_name(),
            '，眼中流露出一丝恐慌，以及更多的情欲',
          ]);
          await era.printAndWait([
            '看见',
            tachyon.sex,
            '的模样，',
            you.get_colored_name(),
            '……',
          ]);
          if (!do_sex) {
            era.println();
            await era.printAndWait([
              '不行，',
              tachyon.sex,
              '是 ',
              you.get_colored_name(),
              ' 的负责',
              tachyon.uma_sex_title,
              '，',
              you.get_colored_name(),
              ' 不能做这种事',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 冷静的拒绝了',
              tachyon.sex,
              '，幸好，',
              tachyon.get_colored_name(),
              ' 看上去也维持着一定的冷静',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '没事的……这个药的药效最多也就一个小时……只要撑过一个小时就……',
            );
            await era.printAndWait([
              '你们没有再多说什么，',
              you.get_colored_name(),
              ' 和瘫软着身子坐在地上的',
              tachyon.sex,
              '默默的等待时间过去',
            ]);
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 拼命的忍耐着，但目光还是忍不住移向了 ',
              tachyon.get_colored_name(),
              ' 的方向',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 的全身大汗淋漓——想来 ',
              you.get_colored_name(),
              ' 也应是如此——由于白大褂遮掩的关系，衣服并未透出什么不该吐露的东西',
            ]);
            era.println();
            await era.printAndWait([
              '然而，终究百密一疏，原本大上一号的白大褂，却在汗水的湿润下呈现出了十分贴合 ',
              tachyon.get_colored_name(),
              ' 身材的曲线，',
            ]);
            if (tachyon.sex_code !== 1) {
              await era.printAndWait([
                '从圆润的股丰及丰内深邃的沟槽，到胸前不算太大却十分坚挺的山峰，都清晰的描绘在 ',
                you.get_colored_name(),
                ' 的眼中',
              ]);
            }
            era.println();
            await tachyon.say_and_wait([callname, '……']);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 似乎注意到 ',
              you.get_colored_name(),
              ' 的视线了，有些责怪的喊了一声，但在情欲的感染下这一声 ',
              callname,
              ' 都带上了娇媚的色彩，',
              you.get_colored_name(),
              ' 连忙道歉了一声后收回视线',
            ]);
            era.println();
            await era.printAndWait('忍耐，忍耐，忍耐');
            await era.printAndWait([
              '总算，药效逐渐消退，',
              tachyon.get_colored_name(),
              ' 艰难的站起身来，抛了句今天就到这里后仓皇的离开了训练员室……',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 晃了晃头，希望将今天发生的这些摇出脑袋，但 ',
              tachyon.get_colored_name(),
              ' 那姣好的身材依然留存于 ',
              you.get_colored_name(),
              ' 的脑海中，无法忘怀……',
            ]);
            era.println();
            await era.printAndWait([
              '顺带一提，事后 ',
              you.get_colored_name(),
              ' 问了 ',
              tachyon.get_colored_name(),
              '，得知了那种精力药是供应给校内某秘密商店的，',
            ]);
            await era.printAndWait([
              '据说这才是',
              tachyon.sex,
              '研究资金的主要来源，要是在校园里多逛逛的话说不定能找到……？',
            ]);
          }
          break;
        case 5:
          await era.printAndWait([
            you.get_colored_name(),
            ' 喝下药剂后，全身忽然发出了光芒，',
            you.get_colored_name(),
            ' 感到有些惊恐，却发现 ',
            tachyon.get_colored_name(),
            ' 依然一幅兴奋的样子',
          ]);
          era.println();
          await tachyon.say_and_wait('快，把衣服脱了');
          era.println();
          await era.printAndWait(['这个家伙在说什么！？']);
          await era.printAndWait([
            '是变态吗！？是特雷森最近流行的骚扰犯吗！？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 连忙抓紧了自己的衣服，但人类终究还是敌不过',
            tachyon.uma_sex_title,
            '的力量，在长达三秒的挣扎后，',
            you.get_colored_name(),
            ' 的衣服在拉扯间被撕了开来',
          ]);
          era.println();
          await era.printAndWait([
            '无力抵抗的 ',
            you.get_colored_name(),
            ' 闭上了双眼，无法反抗那就只能享受了，来吧，别怜惜我是朵娇花！',
          ]);
          era.println();
          await tachyon.say_and_wait('…………原来如此，原来如此');
          era.println();
          await era.printAndWait([
            '等待了许久都没有等到 ',
            you.get_colored_name(),
            ' 所期待发生的那种事，',
            you.get_colored_name(),
            ' 瞧瞧睁开了眼睛，却看到 ',
            tachyon.get_colored_name(),
            ' 正盯着 ',
            you.get_colored_name(),
            ' 的身体念念有词，一边在记录本上写着什么',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 将视线移回自己身上，发现自己的身体确实正发着光，但发光的部位都有着一定的规律性，看上去就好像…………',
          ]);
          era.println();
          if (you.race > 0) {
            await tachyon.say_and_wait('原来具体是这样运作的……');
          } else {
            await tachyon.say_and_wait(
              `原来人类的身体具体是这样运作的……但是……和${tachyon.uma_sex_title}之间的区别…………`,
            );
          }
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 听见 ',
            tachyon.get_colored_name(),
            ' 喃喃自语的声音后察觉，这依然是为了探讨',
            tachyon.uma_sex_title,
            '的奥秘而展开的实验',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 不禁为自己肤浅的想法感到有些不好意思',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '好，今天就先观察到这吧，我先回去做实验了，',
            callname,
            ' 你记得把衣服穿上！',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 纪录完后飞快的离开了训练员室，留下 ',
            you.get_colored_name(),
            ' 一个人在训练员室里',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 看着地上已经不能称作是衣服的那堆碎片，心想着到底是该趁着夜色漆黑跑回家，还是麻烦同事帮 ',
            you.get_colored_name(),
            ' 拿件衣服过来',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  second_chance: (() => {
    const title = 'Eureka';
    /**
     * 选择重复育成速子时触发
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, love) => {
      await era.printAndWait([
        '今天，',
        tachyon.get_colored_name(),
        ' 忽然兴高采烈的跑进了训练员室',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '！我知道了（Eureka）……我知道（Eureka）了！',
      ]);
      era.println();

      await era.printAndWait([
        '听见这莫名耳熟的句式，',
        you.get_colored_name(),
        ' 紧张地看了看 ',
        tachyon.get_colored_name(),
        '，却见',
        tachyon.sex,
        '身上穿的并不是浴巾，也不像是刚洗完澡就跑出来的样子才稍微放下心来',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '！我发现了……最大的可能性……没错……为什么，之前一直没注意到',
      ]);
      era.println();

      await era.printAndWait('究竟在说什么呢');
      await era.printAndWait([
        you.get_colored_name(),
        ' 一脸茫然的看着 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '不知为何，',
        you.get_colored_name(),
        ' 忽然有种陌生的感觉',
      ]);
      await era.printAndWait(
        '明明已经一起经历了许多，好不容易才走过了最初的三年',
      );
      await era.printAndWait('彼此应该是知根知底的才对');
      await era.printAndWait('为什么，忽然会有一种难以言喻的陌生感');
      era.printButton('「你在说什么？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '哦呀，我还没说明吗？真是……太激动了，导致完全忘记了',
      );
      await tachyon.say_and_wait('嘛，简单来讲，就是所谓的————平行世界');
      await tachyon.say_and_wait(
        '如果将时间比喻成一条长河的话，在这条河上，有着各种不同的支流',
      );
      await tachyon.say_and_wait(
        '这些支流，大多都是极为细小，没有办法单成一河的分岔',
      );
      await tachyon.say_and_wait(
        '但是……在某些情况下，河流会在某些节点，会产生足够大的分支———这些节点，就是所谓的可能性',
      );
      await tachyon.say_and_wait(
        '这些分支，也会化作河流往下流动，而产生的这条支流，便是平行世界的存在',
      );
      era.println();

      await era.printAndWait('平行世界');
      await era.printAndWait('是在各种科幻或者玄幻小说中都经常出现的主题');
      await era.printAndWait([
        '但没想到 ',
        tachyon.get_colored_name(),
        ' 居然会相信这些',
      ]);
      era.printButton('「但说到底，这种东西也没有人能验证他的真假不是吗」', 1);
      await era.input();

      await tachyon.say_and_wait('嗯……你说的对');
      await tachyon.say_and_wait(
        '科学无论如何都是要小心求证的……虽然假设是这样，但到底该如何证明平行世界的存在与否……',
      );
      await tachyon.say_and_wait(
        '到底该怎么证明呢……果然，还是必须要有某个，可能穿越，有办法在世界中穿梭而不干涉原先记忆的人，到底哪里会有这种人呢……真是，苦恼呢',
      );
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在讲的时候，不断将眼神朝向 ',
        you.get_colored_name(),
        ' 这边瞄着',
      ]);

      era.printButton('「……」', 1);
      era.printButton('「什么意思？」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait([
          '呵呵……看来你很清楚我在说的是什么啊，',
          callname,
          '……还是说，应该称呼你为……不，算了，我不管你在其他地方是谁，在这里，你就是我的',
          callname,
          '，除此之外没有其他身份',
        ]);
      } else {
        await tachyon.say_and_wait([
          '哦？真的不知道……还是在装傻？罢了，不重要，反正在这里你就是我的 ',
          callname,
          '，没有其他身份',
        ]);
      }
      era.println();

      await tachyon.say_and_wait(
        '不过，真是令人好奇啊……其他世界，具有其他可能性的爱丽速子，到底会是什么样……会不会有早就跨越了极限，又或者被困在原地，止步于可能性之前的爱丽速子……',
      );
      await tachyon.say_and_wait([
        callname,
        '，你一定要好好的留下记录啊，就当成你这次出差的研究课题了',
      ]);
      era.println();

      await you.say_and_wait('……欸？', true);
      await era.printAndWait('等一下，什么情况？');
      await era.printAndWait('为什么从刚刚开始，就一直在说些听不懂的话');
      await era.printAndWait([
        '虽说 ',
        tachyon.get_colored_name(),
        ' 本来就是这种自说自话的人，但今天也太过头了',
      ]);

      era.printButton(`「速子？」`, 1);
      await era.input();

      await tachyon.say_and_wait('还有————哦呀，看来时间差不多了');
      era.println();

      await era.printAndWait('时间？');
      await era.printAndWait('什么时间？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 回过头，忽然发现一切都消失了',
      ]);
      await era.printAndWait('只剩下一片空白');
      await era.printAndWait('一片苍白的空间中，只有前方，一扇古旧深桐的木门');
      await era.printAndWait([
        '印象中仿佛见过，踩着彩色光芒的',
        tachyon.uma_sex_title,
        '从门里跑出的画面',
      ]);
      await era.printAndWait([
        '转过头来，',
        tachyon.get_colored_name(),
        ' 不知何时已经不在，整个空间中仅剩 ',
        you.get_colored_name(),
        ' 一人和眼前的门',
      ]);
      await era.printAndWait([
        '空间中却还回荡着，',
        tachyon.get_colored_name(),
        ' 最后的一句话',
      ]);
      era.println();

      if (love < 50) {
        await tachyon.say_and_wait('一定不要忘了，实验数据啊！');
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 那狂热的声音在 ',
          you.get_colored_name(),
          ' 耳边回荡',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 仿佛看见',
          tachyon.sex,
          '那因研究而陷入狂热的表情',
        ]);
      } else if (love < 90) {
        await tachyon.say_and_wait('一定，要把实验数据带回来哦');
        era.println();

        await era.printAndWait([
          '听见',
          tachyon.sex,
          '的最后一句话，',
          you.get_colored_name(),
          ' 愣了愣',
        ]);
        await era.printAndWait(['明面上是', tachyon.sex, '对实验数据的狂热']);
        await era.printAndWait([
          '但 ',
          you.get_colored_name(),
          ' 却听出了话中的另一层意思',
        ]);
        await tachyon.say_and_wait('一定，要回来哦', true);
      } else {
        await tachyon.say_and_wait([
          '真令人烦恼……那个世界的我一定也会爱上 ',
          callname,
          ' 吧，情敌增加了呢',
        ]);
        era.println();

        await era.printAndWait('最后的最后，说的却是这样仿佛无关紧要的闲话');
        await era.printAndWait('那是因为……除此之外的已经无须说明');
        await era.printAndWait([
          '实验数据？身为爱人，没有不满足',
          tachyon.sex,
          '的好奇心的理由',
        ]);
        await era.printAndWait([
          '一定要回来？哪怕不用',
          tachyon.sex,
          '来说，也一定会回来的',
        ]);
        await era.printAndWait(
          '整个过程就宛如自己只是要出门去打酱油一般稀松平常',
        );
      }
      era.println();

      await era.printAndWait('那么……');
      await era.printAndWait([you.get_colored_name(), ' 朝着大门伸手']);
      await era.printAndWait([
        '这一次遇到的，会是怎么样的 ',
        tachyon.get_colored_name(),
        ' 呢？',
      ]);
      if (era.get('cflag:32:育成次数') > 1) {
        const buffer = [
          () =>
            tachyon.say_and_wait([
              '哦？',
              callname,
              '，又要去寻找新的可能性了吗？',
            ]),
          () =>
            tachyon.say_and_wait(
              '哦呀，既然回来了，那就赶快先把实验数据交出来！',
            ),
          async () => {
            await tachyon.say_and_wait('这样啊……听起来真不错呢');
            await tachyon.say_and_wait('那么时间也差不多了，对吧？');
            await tachyon.say_and_wait(['下次再聊吧，', callname]);
          },
        ];
        if (love >= 75) {
          buffer.push(async () => {
            await tachyon.say_and_wait([
              '早上好啊，',
              callname,
              '，或者说……好久不见？',
            ]);
            await tachyon.say_and_wait('不，果然还是这样比较好吧……欢迎回来❤️');
          });
        }
        await get_random_entry(buffer)();
      }
    };
    f.title = title;
    return f;
  })(),
  be_betray: (() => {
    const title = '于是，再也没见过爱丽速子';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '在那天，莫名其妙的从 ',
        tachyon.get_colored_name(),
        ' 的实验室里昏过去后。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 作为训练员，理当寻找自己要负责的',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '然而无论是谁，都无法满足 ',
        you.get_colored_name(),
        ' 内心的渴望。',
      ]);
      await era.printAndWait([
        '仿佛内心有个声音在说：不是',
        tachyon.sex,
        '，不是',
        tachyon.couple_title,
        '。',
      ]);
      await era.printAndWait([
        '没过多久，没有招募到任何',
        tachyon.uma_sex_title,
        '的 ',
        you.get_colored_name(),
        '，被开除出了特雷森学园。',
      ]);
      await era.printAndWait(['但是，这样也挺好。']);
      await era.printAndWait([you.get_colored_name(), ' 乐观地想着。']);
      await era.printAndWait([
        '与其被强迫着与不适合自己的',
        tachyon.uma_sex_title,
        '配合，不如干脆不干。',
      ]);

      era.drawLine();
      await era.printAndWait([
        '离开学园后，',
        you.get_colored_name(),
        ' 在距离特雷森不远的地方开了一间小餐馆。',
      ]);
      await era.printAndWait(['自己的厨艺不知为何，似乎还挺不错的。']);
      await era.printAndWait([
        '虽然不知道失忆前的自己究竟发生了什么，但想必自己一定有什么很重要的，想要做饭给对方吃的人在吧，否则是不可能做到这种程度的。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 运用着那莫名熟练的厨艺，很快的就将餐馆的名声打响，特雷森周遭，甚至特雷森学园的',
        tachyon.uma_sex_title,
        '都经常来光顾 ',
        you.get_colored_name(),
        ' 的店面。',
      ]);
      await era.printAndWait([
        '虽然不知道失忆前的自己究竟发生了什么，但想必自己一定有什么很重要的，想要做饭给对方吃的人在吧，否则是不可能做到这种程度的。',
      ]);
      await era.printAndWait([
        '所以，也一定是因为这个人不在吧，每一次的下厨，自己都感觉不到任何热情。',
      ]);
      era.println();

      await era.printAndWait(['就这样，日子一天一天的过去。']);
      await era.printAndWait([
        '要说多好，也不至于，可要说坏，自己也没那么的不知足。',
      ]);
      await era.printAndWait(['只是活着，仅此而已。']);
      era.println();

      await you.say_as_passer_by_and_wait('解说', [
        '是 ',
        tachyon.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        ' 的第一场复出战！就在有马纪念拿下了辉煌的胜利！',
      ]);

      era.drawLine();
      await era.printAndWait(['忽然。']);
      await era.printAndWait([
        '那名',
        tachyon.uma_sex_title,
        '，如闪电一般划过天际。',
      ]);
      await era.printAndWait([
        '也如闪电一般，击中了 ',
        you.get_colored_name(),
        ' 的内心。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，那个莫名其妙的',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '自从那天在实验室里告别以来，就再未谋面的',
        tachyon.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '明明只是在店内的电视随手播放了作为年末热门话题的有马纪念。',
      ]);
      await era.printAndWait([
        '却没想到，对方一跑起来，自己不知为何，便移不开双眼。',
      ]);
      await era.printAndWait([
        '直到对方跨越终点线的瞬间，',
        you.get_colored_name(),
        ' 才意识到，自己不知何时已经流下泪来。',
      ]);
      era.println();

      await era.printAndWait([
        '赛后的采访，',
        tachyon.get_colored_name(),
        ' 说',
        tachyon.sex,
        '的复出，是为了寻找一个人，一个对',
        tachyon.sex,
        '而言，至关重要，不可或缺的人。',
      ]);
      await era.printAndWait(['是谁呢？众人们纷纷谈论着。']);
      await era.printAndWait([
        '是谁呢？有个声音在 ',
        you.get_colored_name(),
        ' 的脑海里提问。',
      ]);
      await era.printAndWait(['头痛，头痛，头痛欲裂。']);
      await era.printAndWait([
        '如果说在',
        tachyon.sex,
        '跑起来瞬间，自己是因感动而流下了泪水。',
      ]);
      await era.printAndWait([
        '那么在',
        tachyon.sex,
        '接受采访，听见',
        tachyon.sex,
        '说的话的瞬间，就纯粹是痛到流泪了。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在找的人，到底是谁？',
      ]);
      await era.printAndWait(['和自己到底，有什么关系？']);
      era.println();

      await era.printAndWait(['然而，超光速的粒子没有因任何人而停下。']);
      await era.printAndWait(['大阪杯。']);
      await era.printAndWait(['天皇赏春。']);
      await era.printAndWait(['安田纪念。']);
      await era.printAndWait(['宝冢纪念。']);
      await era.printAndWait(['天皇赏秋。']);
      await era.printAndWait(['日本杯。']);
      await era.printAndWait([
        '每一场比赛，',
        tachyon.get_colored_name(),
        ' 都以压倒性的大差，以魅惑众人的跑法彻底赢下。',
      ]);
      await era.printAndWait([
        '每一次的比赛结束，',
        tachyon.sex,
        '都会在采访前诉说。',
      ]);
      await era.printAndWait(['有时是与「那个人」相伴的日常。']);
      await era.printAndWait(['有时是对「那个人」的忏悔。']);
      await era.printAndWait(['有时是对「那个人」的责怪。']);
      await era.printAndWait(['有时，却只是说着说着，便在镜头前泣不成声。']);
      era.println();

      await era.printAndWait([
        '每一场比赛，',
        you.get_colored_name(),
        ' 都比谁都还要热忱的盯着。',
      ]);
      await era.printAndWait([
        '每一次的比赛结束，听见',
        tachyon.sex,
        '的采访，',
        you.get_colored_name(),
        ' 的头痛欲裂便会让 ',
        you.get_colored_name(),
        ' 再一次发誓，下次绝对不看，最起码要跳过采访环节。',
      ]);
      await era.printAndWait(['然而，每一次都没能成功。']);
      await era.printAndWait(['胀痛。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
      });
      await era.printAndWait(['阵痛。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
      });
      await era.printAndWait(['钝痛。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
      });
      await era.printAndWait(['间痛。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
      });
      await era.printAndWait(['刺痛。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
      });
      await era.printAndWait(['剧痛。'], {
        color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
      });
      await era.printAndWait([
        '每一次的疼痛，',
        you.get_colored_name(),
        ' 都有种感觉。',
      ]);
      await era.printAndWait(['快了，快要到了。']);
      await era.printAndWait([
        '仿佛每次的痛，都在一层一层将记忆的面纱摘除一般。',
      ]);

      era.drawLine();
      await era.printAndWait(['终于，最后的有马纪念。']);
      era.println();

      await you.say_as_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        '！达成了有马纪念连霸及全年无败的成绩！是 ',
        tachyon.get_colored_name(),
        '！获得了最终的胜利！',
      ]);
      era.println();

      await era.printAndWait(['啊啊。']);
      await era.printAndWait(['在看见那跑法的瞬间。']);
      await era.printAndWait(['仿佛浑身的力气都被抽取出来一般。']);
      await era.printAndWait(['这就是，一直以来追求的。']);
      await era.printAndWait([
        '这就是，一直以来，与「',
        tachyon.sex,
        '」一起追求的。',
      ]);
      await era.printAndWait(['极限……不，超越极限的，完美的跑法。']);
      era.println();

      await era.printAndWait([
        '电视上，赛事结束后，开始播放起赛前采访的回播。',
      ]);
      era.println();

      await era.printAndWait(
        '（记者A「在有马纪念结束后，您就要宣布退役了吗？」）',
      );
      await tachyon.used_to_say_and_wait([
        '嗯……如果说，就连这样也找不到',
        you.sex,
        '的话……那我觉得，应该要换一种方式了。',
      ]);
      await tachyon.used_to_say_and_wait([
        '接下来，我将退役离开赛场，然后……呵呵，我也不知道……一年？十年？还是……一辈子？那都无所谓，直到找到',
        you.sex,
        '为止，我不会放弃。',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), '，要退役了？']);
      await era.printAndWait(['离开赛场，为了寻找「那个人」………寻找「谁」？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的脚步开始移动，仿佛想要现在赶去特雷森学园，赶在',
        tachyon.sex,
        '还没离开前，去找',
        tachyon.sex,
        '，去见',
        tachyon.sex,
        '，去……',
      ]);
      await era.printAndWait(['不知不觉，头又开始发疼。']);
      era.println();

      await era.printAndWait('？？？「好痛……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
      });
      await era.printAndWait('？？？「好可怕……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
      });
      await era.printAndWait('？？？「救救我……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
      });
      await era.printAndWait('？？？「救救我，豚鼠君！」', {
        color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
      });
      await era.printAndWait('？？？「豚鼠君，你在哪里？」', {
        color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
      });
      await era.printAndWait('？？？「豚鼠君？不要抛弃我……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
      });
      await era.printAndWait('？？？「回来我身边……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
      });
      await era.printAndWait('？？？「求求你，回来吧……」', {
        color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
      });
      await era.printAndWait('？？？「我不能没有你！」', {
        color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
      });
      era.println();

      await era.printAndWait([
        { color: tachyon.color, content: '头痛' },
        '的真面目，被揭开了。',
      ]);
      await era.printAndWait(['无数的声音，在自己的耳旁，不停的哭喊，哀嚎。']);
      await era.printAndWait(['是谁？']);
      await era.printAndWait(['是谁在哭喊。']);
      await era.printAndWait(['是谁在哀嚎。']);
      await era.printAndWait(['「豚鼠君」…………是谁？']);
      await era.printAndWait(['脚步停了下来。']);
      await era.printAndWait(['双腿颤抖，全身发冷。']);
      await era.printAndWait(['自己在害怕……害怕什么？']);
      await era.printAndWait(['害怕面对 ', tachyon.get_colored_name(), '。']);
      await era.printAndWait(['害怕知道真相。']);
      await era.printAndWait(['害怕知道……自己是个怎么样的人。']);
      era.println();

      await era.printAndWait(['—————————']);
      await era.printAndWait(['——————']);
      await era.printAndWait(['—————']);
      era.println();

      await era.printAndWait([
        '最终，',
        you.get_colored_name(),
        ' 没有挪动步伐。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 再也没见到过 ',
        tachyon.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 的头，也再没有痛过。']);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '停滞的时钟';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} plan_b 是否进入 Plan B
     */
    const f = async (tachyon, you, t_call_c, plan_b) => {
      await tachyon.say_and_wait('醒醒');
      await tachyon.say_and_wait('醒醒');
      await tachyon.say_and_wait('求求你……醒过来吧');
      era.drawLine();
      await era.printAndWait('我是谁');
      era.println();
      await tachyon.say_and_wait('你是……豚鼠君，是我的专属训练员');
      era.println();
      await era.printAndWait('……你是谁？');
      era.println();
      await tachyon.say_and_wait([
        '……我是 ',
        tachyon.get_colored_name(),
        '，是你的负责',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('…………');
      era.println();
      await tachyon.say_and_wait('……你，还记得吗？');
      await era.printAndWait('…………');
      await tachyon.say_and_wait([
        '不……不要不说话啊，你还记得我吧？记得吗？这里是特雷森学园里我们的实验室，那边是 ',
        t_call_c,
        ' 的地盘……',
      ]);
      era.println();
      if (plan_b) {
        await era.printAndWait('……对不起');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' 摇了摇头']);
        await era.printAndWait([
          '眼前的',
          tachyon.teen_sex_title,
          '……虽然不知道为什么，给人一种熟悉的感觉',
        ]);
        await era.printAndWait('但自己确实，一点也不认识');
        era.println();
        await tachyon.say_and_wait(
          '……没关系，失忆也是一种……一种可能性……只要再把记忆找回来就好了',
        );
        era.println();
        await era.printAndWait('……可能性');
        await era.printAndWait('这个词，似乎唤醒了烂泥中的一些灵光');
        await era.printAndWait('然而……');
        await era.printAndWait('灵光，总是只能乍现的');
        era.println();
        await era.printAndWait('不知道');
        await era.printAndWait('越思考脑袋空白的地方越多');
        await era.printAndWait('但是，还是得努力去回忆');
        await era.printAndWait('祈祷能够翻到刚刚闪过的灵光');
        await era.printAndWait('理由只有一个');
        await era.printAndWait([
          '虽然不认识眼前名为 ',
          tachyon.get_colored_name(),
          ' 的',
          tachyon.teen_sex_title,
        ]);
        await era.printAndWait([
          '但潜意识在喊着，不能让',
          tachyon.sex,
          '受伤，不要让',
          tachyon.sex,
          '悲伤',
        ]);
        era.println();
        await era.printAndWait([
          '因此，在',
          tachyon.sex,
          '提出稍微看看四周，尝试回忆一下的建议时',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 没有拒绝']);
        await era.printAndWait([
          '只是跟着',
          tachyon.sex,
          '，在校园（按',
          tachyon.sex,
          '所说应该是如此）里走着',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '豚鼠君……你看，这边是训练场，我们就是在这里相遇的',
        );
        era.println();
        await era.printAndWait('相遇……吗？');
        era.println();
        await tachyon.say_and_wait(
          '没错，虽然当时的我并没有真正看到你就是……是你和我说的',
        );
        era.println();
        await era.printAndWait('这样吗……');
        await era.printAndWait(
          '那么，当时的自己，一定是被速子的跑法给迷住了吧',
        );
        era.println();
        await tachyon.say_and_wait('！……你，你想起来了吗！');
        era.println();
        await era.printAndWait('……对不起');
        await era.printAndWait(
          '只是，某种感觉……觉得速子，要是跑起来一定会很漂亮',
        );
        era.println();
        await tachyon.say_and_wait(
          '………是啊，你说过很多次……虽然我自己是看不出来，明明只是普通的跑步而已，到底有什么让人着迷的',
        );
        era.println();
        await era.printAndWait('……不');
        await era.printAndWait(
          '其他人可能是这样，但速子的跑法……我有感觉，一定能让自己着迷',
        );
        era.println();
        await tachyon.say_and_wait('……这样啊，那，要不要看我跑一次看看呢？');
        era.println();
        await era.printAndWait('！可以吗！');
        await era.printAndWait('但是……速子的脚……');
        era.println();
        await tachyon.say_and_wait('……你，你还记得吗？');
        era.println();
        await era.printAndWait('……');
        era.println();
        await era.printAndWait('沉默就是最好的回答');
        await era.printAndWait([
          '要是在此时欺骗',
          tachyon.sex,
          '，说自己已经想起来了的话',
        ]);
        await era.printAndWait([tachyon.sex, '肯定会很开心的吧']);
        await era.printAndWait(['但是……那样欺骗', tachyon.sex, '，真的好吗？']);
        era.println();
        await era.printAndWait('不知道为什么，心中的声音又开始高喊');
        await era.printAndWait(['不要「再」欺骗', tachyon.sex, '了']);
        await era.printAndWait('不要「再」欺骗自己了');
        await era.printAndWait('……为什么是再呢？');
        era.println();
        await tachyon.say_and_wait('……没关系，我去跑一圈');
        await tachyon.say_and_wait('这样，说不定能想起些什么呢');
        era.println();
        await era.printAndWait([tachyon.sex, '跑完了一圈']);
        await era.printAndWait([
          '如 ',
          you.get_colored_name(),
          ' 想的一般，是极为动人的跑法',
        ]);
        await era.printAndWait('但……也就仅此而已');
        era.println();
        await era.printAndWait([tachyon.sex, '跑完一圈，准备停下']);
        await era.printAndWait([
          '但，看见 ',
          you.get_colored_name(),
          ' 依然茫然的眼神，',
          tachyon.sex,
          '不知为何，又跑了起来',
        ]);
        await era.printAndWait([
          '在愣神的 ',
          you.get_colored_name(),
          ' 面前，',
          tachyon.sex,
          '跑了一圈又一圈，直到天黑',
        ]);
        era.println();
        await era.printAndWait('……对不起');
        era.println();
        await tachyon.say_and_wait('不，没什么……只是，只是我忽然想跑而已');
        era.println();
        await era.printAndWait('这是骗人的');
        await era.printAndWait([
          you.get_colored_name(),
          ' 听的出来，但没有点出',
        ]);
        await era.printAndWait('怎么能点出来');
        await era.printAndWait([
          '点出那名',
          tachyon.teen_sex_title,
          '，徒劳无功的悲哀',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……明天，再一起寻找吧，一定，总有一天能够找回来的',
        );
        era.println();
        await era.printAndWait('因此，即便知道这是徒劳无功');
        await era.printAndWait([
          you.get_colored_name(),
          ' 还是没能吐出拒绝的话语',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '豚鼠君……你看，平常我们就是在这里做实验的，每次都是我做完药然后让你喝下去',
        );
        era.println();
        await era.printAndWait('欸欸……那不是，实验品吗？');
        era.println();
        await tachyon.say_and_wait('当然了，你以为豚鼠君是什么意思');
        era.println();
        await era.printAndWait('……原来真的是指实验动物啊');
        era.println();
        await tachyon.say_and_wait(
          '……所以说，最近我会研究的，研究能让记忆恢复的药……你会帮我的吧？',
        );
        era.println();
        await era.printAndWait('……当然了');
        era.drawLine();
        await tachyon.say_and_wait([
          '豚鼠君……那边是 ',
          t_call_c,
          ' 的地盘，所以要小心点哦，要是随便碰那里的东西，可能会出事的……',
        ]);
        era.println();
        await era.printAndWait('欸……？');
        await era.printAndWait('……没发生什么事啊');
        era.println();
        await tachyon.say_and_wait(
          '嗯？怎么可能……我试试……啊！研究资料烧起来了！',
        );
        era.drawLine();
        await tachyon.say_and_wait('豚鼠君，你还记得红茶怎么泡吗？');
        era.println();
        await era.printAndWait('当然，红茶什么的还是会泡的');
        era.println();
        await tachyon.say_and_wait('嘶……这不是完全不行吗？');
        era.println();
        await era.printAndWait('欸欸？');
        era.println();
        await tachyon.say_and_wait('红茶跟糖的比例最起码也要1：1才对！');
        era.println();
        await era.printAndWait('这也太甜了吧！？');
        era.drawLine();
        await era.printAndWait('速子……失忆前的我和你，是什么关系？');
        era.println();
        await tachyon.say_and_wait('……怎么了？忽然回忆起什么了吗？');
        await era.printAndWait([
          '……没有，只是从你说的感觉听起来，总觉得不只是训练员和',
          tachyon.uma_sex_title,
          '的关系……或者实验品与实验动物的关系',
        ]);
        era.println();
        await tachyon.say_and_wait('…………其实，我们，是恋人哦');
        await era.printAndWait('真的吗？');
        era.println();
        await tachyon.say_and_wait([
          '……嗯，是超级相亲相爱的恋人，每天都腻在一起，甜腻到 ',
          t_call_c,
          ' ',
          tachyon.sex,
          '都受不了了',
        ]);
        await era.printAndWait('…………对不起');
        era.println();
        await tachyon.say_and_wait('没什么好道歉的，不是吗？');
        await era.printAndWait('要是……我能想起来的话');
        era.println();
        await tachyon.say_and_wait(
          '……说什么话呢，不是要是能想起来，只是还没想起来而已……一定，一定会想起来的',
        );
        await era.printAndWait('……是啊，谢谢你，速子');
        era.drawLine();
        await tachyon.say_and_wait(
          '你看，这里是商店街……我们平常的实验用具都是在这里买的',
        );
        era.println();
        await era.printAndWait('……那个，速子');
        era.println();
        await tachyon.say_and_wait('嗯？怎么了？');
        era.println();
        await era.printAndWait(
          '……为什么，周围的人都在用一种看到鬼的眼神看我们',
        );
        era.println();
        await tachyon.say_and_wait('有吗？可能是我上个月的实验吧');
        era.println();
        await era.printAndWait('……上个月？');
        era.println();
        await tachyon.say_and_wait(
          '嗯，那时候的实验不小心把整条街都染成血红色了',
        );
        era.println();
        await era.printAndWait('…………难道说，速子其实是什么很危险的人吗？');
        era.println();
        await tachyon.say_and_wait([
          '真没礼貌，我可是清廉正直的青春美',
          tachyon.teen_sex_title,
          '啊',
        ]);
        await tachyon.say_and_wait(
          '只是要是豚鼠君不在身边的话就会变成暴走的地球最终兵器而已',
        );
        era.println();
        await era.printAndWait('好可怕！');
        era.println();
        await tachyon.say_and_wait('……所以，千万不要再离开我了，好吗？');
        era.println();
        await era.printAndWait('…………嗯');
        era.drawLine();
        await tachyon.say_and_wait('……豚鼠君，你，不怪我吗？');
        era.println();
        await era.printAndWait('为什么？');
        era.println();
        await tachyon.say_and_wait('是我，把你的人生束缚在了这里，如果……');
        era.println();
        await era.printAndWait('……为什么');
        await era.printAndWait('明明应该是你该怪罪我的，不是吗？');
        await era.printAndWait('没有记忆的我……真的有资格接受你的爱吗？');
        era.println();
        await tachyon.say_and_wait('！不是……不是这样的！');
        await tachyon.say_and_wait(
          '一定能回忆起来的……！所以，所以……别再说那种话了……',
        );
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点',
        ]);
        await era.printAndWait('训练场、赛场、河滨、神社');
        await era.printAndWait('直到最后，一切都还是没能重新唤起豚鼠君的记忆');
        await era.printAndWait('但是，他们一点也不为此伤心');
        await era.printAndWait('因为，他们在这些地方，重新留下了最美好的回忆');
        era.println();
        await tachyon.say_and_wait('……这样的故事结尾，你喜欢吗？');
        era.println();
        await era.printAndWait('……嗯，很好哦');
        era.println();
        await tachyon.say_and_wait('……豚鼠君');
        era.println();
        await era.printAndWait('不用了，只要，这样就好了');
        await era.printAndWait('我……就要死了啊');
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('速子……谢谢你');
        await era.printAndWait('虽然，是无比短暂的人生');
        await era.printAndWait('但这段日子里，我过的很幸福');
        await era.printAndWait('哪怕不记得过去……我也能自豪的说出');
        await era.printAndWait('认识了速子……是我人生中，最美好的事');
        await era.printAndWait('所以，很抱歉');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 和豚鼠君的故事……就要在这里结束了',
        ]);
        era.println();
        await tachyon.say_and_wait('如果，你希望的话……');
        await era.printAndWait('……对不起');
        await era.printAndWait('但我，不希望再继续拌着你的脚了');
        await era.printAndWait('就让故事在这里结束吧');
      } else {
        await era.printAndWait('抱歉……我真的不记得了');
        era.println();
        await tachyon.say_and_wait('豚……');
        era.printButton('「——当然，是骗你的了！」', 1);
        await era.input();
        await tachyon.say_and_wait('…………欸？');
        era.printButton('「你在想什么，我怎么可能会把速子忘掉呢？」', 1);
        await era.input();
        await tachyon.say_and_wait('…………');

        era.printButton('「……欸？速子？」', 1);
        await era.input();
        await era.printAndWait('速子忽然默声不语，低下头来');
        await era.printAndWait('忽然，速子压住了你的身体');
        era.println();
        await tachyon.say_and_wait('你这家伙！你知道我有多担心吗！');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '没有抬起头，但是，从地板上溅落的水渍能看出————',
          tachyon.sex,
          '在哭',
        ]);
        era.printButton('「速子？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '不要……不要再这样骗我了，求求你，好不好，真的，好可怕……不想要失去你……',
        );
        era.printButton('「…………好的，对不起」', 1);
        await era.input();
        await era.printAndWait('对不起');
        await era.printAndWait('真的对不起');
        await era.printAndWait([
          '虽然不知道发生了什么，但我又欺骗',
          tachyon.sex,
          '了',
        ]);
        await era.printAndWait([
          '欺骗了———眼前这名，叫做 ',
          tachyon.get_colored_name(),
          ' 的陌生',
          tachyon.uma_sex_title,
        ]);
        era.println();
        await tachyon.say_and_wait('豚鼠君……你还记得，之前发生什么事了吗？');
        era.println();
        await era.printAndWait('这个……答应应该没关系吧');
        await era.printAndWait([you.get_colored_name(), ' 摇了摇头']);
        await era.printAndWait('说实话，什么也不知道');
        await era.printAndWait([
          '这里是哪里，眼前的',
          tachyon.teen_sex_title,
          '是谁',
        ]);
        await era.printAndWait('一切的一切，都不知道');
        await era.printAndWait('但只有一点，是埋藏在心中不变的');
        await era.printAndWait(['—————不想让', tachyon.sex, '伤心']);
        await era.printAndWait(['—————不想让', tachyon.sex, '难过']);
        await era.printAndWait('为此，哪怕要用谎言来掩盖过去都没关系');
        era.println();
        await tachyon.say_and_wait(
          '……没什么，那就算了，反正，你现在醒过来了……这样，就好了',
        );
        era.println();
        await era.printAndWait([
          '看起来，',
          tachyon.sex,
          '似乎没有要解释清楚的意思',
        ]);
        await era.printAndWait('那就没办法了');

        era.printButton('「对了，现在是————」', 1);
        await era.input();
        await tachyon.say_and_wait('豚鼠君，你应该也累了吧，明天再聊吧');
        era.println();
        await era.printAndWait([
          '正当自己想问现在时间时，被',
          tachyon.sex,
          '紧张的转移了话题',
        ]);
        await era.printAndWait('虽然没有过往记忆，但身为人的常识还是有的');
        await era.printAndWait([
          '从',
          tachyon.sex,
          '的表情能够看出',
          tachyon.sex,
          '不想回答这个问题',
        ]);
        await era.printAndWait('……那就算了吧，不问了');
        await era.printAndWait([
          '如果，这个问题会让',
          tachyon.sex,
          '露出那种惊慌的表情的话',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          '好了，豚鼠君，既然你已经醒过来了，那么首先要做的第一件事是什么，你知道吧？',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '是……？');
        await tachyon.say_and_wait(
          '当然是吃饭了！饭！肚子快饿死了，豚鼠君，快去做点吃的来！',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '…………好');
        era.println();
        await you.say_as_passer_by_and_wait('豚鼠', '感觉……怎么样？');
        await tachyon.say_and_wait('………嗯');
        await tachyon.say_and_wait('咕呃……好难吃……');
        await tachyon.say_and_wait('怎么做的这么难吃……豚鼠君，你……');
        await you.say_as_passer_by_and_wait('豚鼠', '！？');
        await tachyon.say_and_wait(
          '一定……是身体还没完全恢复吧，毕竟躺了那么久',
        );
        await tachyon.say_and_wait('这次就放你一马，但之后要赶快恢复过来啊');
        await you.say_as_passer_by_and_wait('豚鼠', '……啊哈哈，抱歉啦');
        era.drawLine();
        await tachyon.say_and_wait('那么……接下来，先去操场上训练吧');
        await you.say_as_passer_by_and_wait('豚鼠', '…………');
        await tachyon.say_and_wait('………豚鼠君？');
        await you.say_as_passer_by_and_wait('豚鼠', '啊，怎么……');
        await tachyon.say_and_wait(
          '你居然一点都没感到讶异吗？我居然，主动跑去训练了哦？',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '……欸');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '……我下意识以为你说的是又要偷懒了',
        );
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '速子你居然真的要去训练了吗！？',
        );
        await tachyon.say_and_wait('不，这又太夸张了');
        await you.say_as_passer_by_and_wait('豚鼠', '啊哈哈……这样吗');
        era.drawLine();
        await you.say_as_passer_by_and_wait('豚鼠', '商店街……？');
        await tachyon.say_and_wait(
          '是啊，毕竟我的实验器具有点不够了，陪我去逛逛吧',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '啊，好，那当然');
        await tachyon.say_and_wait('豚鼠君？你在往哪走？商店街不在那边啊');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '……啊，没，没什么，只是忽然想起有东西要拿',
        );
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '不过仔细想想其实也没什么特别重要的啊哈哈哈',
        );
        await tachyon.say_and_wait('……真是奇怪');
        era.println();
        await tachyon.say_and_wait('哼～哼哼哼');
        await you.say_as_passer_by_and_wait('豚鼠', '……那个，速子？');
        await tachyon.say_and_wait('嗯？');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '为什么……商店街的人看你的眼神总觉得怪怪的',
        );
        await tachyon.say_and_wait('……有，有这回事吗？只是你的错觉吧，豚鼠君');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '不，明明就有，好像在看什么危险人物……',
        );
        await tachyon.say_and_wait('是你看错了');
        await you.say_as_passer_by_and_wait('豚鼠', '可是');
        await tachyon.say_and_wait('你看错了');
        await you.say_as_passer_by_and_wait('豚鼠', '……好吧');
        era.drawLine();
        await tachyon.say_and_wait(
          '……我说，豚鼠君，你现在最好，小心的，把手上的东西放下来',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '呃……怎么了吗？');
        await tachyon.say_and_wait([
          '还怎么了，你忘记那是 ',
          t_call_c,
          ' 的东西了吗？',
        ]);
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '欸……不过，稍微碰一下应该也不会有事吧',
        );
        await tachyon.say_and_wait(
          '怎么可能！上次我只是稍微碰到一下我的研究资料就瞬间烧起来了！',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '可是……');
        await tachyon.say_and_wait('………');
        await you.say_as_passer_by_and_wait('豚鼠', '…………');
        await tachyon.say_and_wait(
          '那我也试试………哇啊啊！着火了！快点抢救资料啊啊啊！',
        );
        era.drawLine();
        await tachyon.say_and_wait('喂喂，豚鼠君');
        await you.say_as_passer_by_and_wait('豚鼠', '嗯？速子，怎么了？');
        await tachyon.say_and_wait('我说，你醒过来之后，都没和我亲热过了吧？');
        await you.say_as_passer_by_and_wait('豚鼠', '……欸？');
        await tachyon.say_and_wait(
          '把恋人这样抛着一直不管不顾，就算前面当成你还没恢复……现在身体检查也都没什么问题，也该好好你侬我侬一下了吧？',
        );
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '不，等一下，速子还是学生吧',
        );
        await tachyon.say_and_wait('是啊，有什么问题吗？');
        await you.say_as_passer_by_and_wait('豚鼠', '问题很大吧！？伦理之类……');
        await tachyon.say_and_wait(
          '……怎么忽然这么激动，明明当初你都那么主动的♡',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '…以前的我这么人渣吗');
        await tachyon.say_and_wait('？豚鼠君，你刚刚说什么了吗？');
        await you.say_as_passer_by_and_wait('豚鼠', '……不，什么也没有');
        await tachyon.say_and_wait('那就快点，来好好亲热吧♡');
        era.drawLine();
        await tachyon.say_and_wait(
          '喔喔，这次这便当做的不错啊！豚鼠君！总算恢复你以前的水准了！',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '是……是吗？');
        await tachyon.say_and_wait('你那么拼命复健果然是有成效的！');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '是啊…………还有那些食谱书也是',
        );
        await tachyon.say_and_wait(
          '真是……好久没吃到了啊，这种味道…………真的，好久………',
        );
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '……速子，我可以问一个问题吗？',
        );
        await tachyon.say_and_wait('嗯？');
        await you.say_as_passer_by_and_wait('豚鼠', '我到底……昏过去了多久');
        await tachyon.say_and_wait('……………');
        await tachyon.say_and_wait('……………年');
        await you.say_as_passer_by_and_wait('豚鼠', '…………');
        await tachyon.say_and_wait('……豚鼠君？');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '对不起……这么多年里，你……一定很寂寞吧',
        );
        await tachyon.say_and_wait('！');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '……我已经回来了，已经可以了，可以不必再……',
        );
        await tachyon.say_and_wait('……');
        await tachyon.say_and_wait(
          '豚鼠君……我真的……真的，差点就支撑不下去了……',
        );
        await tachyon.say_and_wait(
          '要是……你醒不过来……要是……完全把我忘了……要是……要是……',
        );
        await tachyon.say_and_wait(
          '真的……好可怕……像是一场恶梦……持续了许多年的恶梦……',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '……………');
        await tachyon.say_and_wait('但是……你回来了，你还是回来了');
        await tachyon.say_and_wait('答应我……这次，不要再离开我了……好吗？');
        await you.say_as_passer_by_and_wait('豚鼠', '……嗯，我不会再离开了');
        era.drawLine();
        await you.say_as_passer_by_and_wait('豚鼠', '所以……那天究竟是怎么……');
        await tachyon.say_and_wait(
          '……那天，你在商店街……我只是，离开了一下，结果有个……自称是粉丝的人，冲上去……然后……',
        );
        await tachyon.say_and_wait('……要是那个时候，我能更快一点，');
        await tachyon.say_and_wait('不，要是我一直留在你身边的话……');
        await tachyon.say_and_wait('绝对，绝对不会发生那种事……对不起……');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '没关系……毕竟，现在已经没事了，不是吗？',
        );
        await tachyon.say_and_wait(
          '但是……中间你的人生……有那么多年都…………你不会恨我吗？',
        );
        await tachyon.say_and_wait(
          '如果不是因为我……如果不是因为负责了我……你可能，根本就不会遭受到这种事',
        );
        await you.say_as_passer_by_and_wait('豚鼠', '为什么我会恨你呢？');
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '明明不是速子害的……而且，速子还努力的把我抢救了回来',
        );
        await you.say_as_passer_by_and_wait(
          '豚鼠',
          '感谢你都来不及了，怎么会怨恨',
        );
        await tachyon.say_and_wait('…………也是啊，毕竟是你，肯定会说这种话的吧');
        await you.say_as_passer_by_and_wait('豚鼠', '？什么意思');
        await tachyon.say_and_wait('不……没什么');
        era.drawLine();
        await era.printAndWait('就这样');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点',
        ]);
        await era.printAndWait('训练场、赛场、河滨、神社');
        await era.printAndWait(
          '为了回味过去，为了让在多年前停下的时间继续走动',
        );
        await era.printAndWait('或许，中间失去的岁月无法弥补');
        await era.printAndWait('但他们依然努力创造出了，独属他们的崭新人生');
        era.println();
        await tachyon.say_and_wait('……这样的故事结尾，你满意吗？');
        era.println();
        await era.printAndWait('……嗯，很好哦');
        era.println();
        await tachyon.say_and_wait('……豚鼠君');
        era.println();
        await era.printAndWait('不用了，只要，这样就好了');
        await era.printAndWait('我……就要死了啊');
        await tachyon.say_and_wait('…………');
        await era.printAndWait('速子……谢谢你');
        await tachyon.say_and_wait('你答应过我的……不会再离开我了，你答应过的');
        era.println();
        await era.printAndWait('……对不起');
        await era.printAndWait('请当我，又欺骗了你一次吧');
        await era.printAndWait('这段日子里，我过的很幸福');
        await era.printAndWait('但是，这些幸福……不应是我的，而是「豚鼠君」的');
        await era.printAndWait('认识了速子……是我人生中，最美好的事');
        await era.printAndWait('所以，已经不想再欺骗下去了');
        await era.printAndWait('所以，很抱歉');
        await era.printAndWait('所以，对不起');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 和豚鼠君的故事……就要在这里结束了',
        ]);
        await tachyon.say_and_wait('如果，你希望的话……');
        era.println();
        await era.printAndWait('……对不起');
        await era.printAndWait('但我，不希望再继续拌着你的脚了');
        await era.printAndWait('就让豚鼠君在这里结束吧');
      }
      era.println();
      await era.printAndWait('抱歉，速子，我真的困了……可以了吗？');
      await tachyon.say_and_wait('……是啊，好好睡吧，我会陪在你身边的');
      era.drawLine();
      await tachyon.print_and_wait('豚鼠君安详的闭上了眼睛');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 没有哭泣，因为……已经不是第一次了',
      ]);
      era.println();
      await tachyon.print_and_wait('与豚鼠君的分离');
      await tachyon.print_and_wait('第一次，是那天在商店街');
      await tachyon.print_and_wait('要是自己没有离开的话');
      await tachyon.print_and_wait(['要是有强硬的把', you.sex, '留在身边的话']);
      await tachyon.print_and_wait('要是……');
      await tachyon.print_and_wait('没有要是');
      era.println();
      if (plan_b) {
        await tachyon.print_and_wait('哪怕已经把凶手挫骨扬灰');
        await tachyon.print_and_wait('哪怕将商店街染成鲜红');
        await tachyon.print_and_wait([you.sex, '也无法回来']);
        await tachyon.print_and_wait([
          '那点鲜红更无法填补',
          you.sex,
          '腹腔流出的血液',
        ]);
        era.println();
        await tachyon.say_and_wait([you.sex, '还是……没有怪我']);
        era.println();
        await tachyon.print_and_wait('哪怕被自己变成这样');
        await tachyon.print_and_wait('眼前豚鼠君的脸，洋溢着青春的痕迹');
        await tachyon.print_and_wait([you.sex, '不应该在这里离去']);
        await tachyon.print_and_wait([you.sex, '不应该在现在离去']);
        await tachyon.print_and_wait([
          '但是，因为 ',
          tachyon.get_colored_name(),
        ]);
        await tachyon.print_and_wait([
          '因为',
          you.sex,
          '在错误的时间，错误的地点，遇上了……错误的人',
        ]);
      } else {
        await tachyon.print_and_wait('哪怕把凶手挫骨扬灰');
        await tachyon.print_and_wait('哪怕在商店街，自己像个疯子一样乱冲乱闯');
        await tachyon.print_and_wait([you.sex, '也无法回来']);
        await tachyon.print_and_wait([
          '急救的措施更是无法填补',
          you.sex,
          '腹腔流出的血液',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '明明都已经欺骗了那么久了……再骗我一次又有什么关系……',
        );
        era.println();
        await tachyon.print_and_wait('从一开始，就已经知道了');
        await tachyon.print_and_wait(['是', you.sex, '，也不是', you.sex]);
        await tachyon.print_and_wait(
          '虽然努力伪装起来了，但失去记忆的人脸上那种茫然绝不是简单就能被隐藏起来的',
        );
        await tachyon.print_and_wait('更何况……在那之后的谎言，又是那么的蹩脚');
        era.println();
        await tachyon.print_and_wait([
          '但是……',
          tachyon.get_colored_name(),
          ' 不在乎',
        ]);
        await tachyon.print_and_wait(['只要是', you.sex, '就好']);
        await tachyon.print_and_wait('只要能够活下来，活下去就好');
        await tachyon.print_and_wait('没有记忆？那又有什么关系');
        await tachyon.print_and_wait([
          '只要',
          you.sex,
          '能继续下去，',
          tachyon.get_colored_name(),
          ' 就能甘心被欺骗一辈子',
        ]);
        await tachyon.print_and_wait('……但是');
        await tachyon.print_and_wait([
          '还是一样，哪怕「这次」，',
          you.sex,
          '欺骗了自己整整一辈子',
        ]);
        await tachyon.print_and_wait([
          '也还是不愿意，在最后的最后，再欺骗 ',
          tachyon.get_colored_name(),
          ' 一次',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('喝了口放在床边的红茶');
      await tachyon.print_and_wait([
        '自己泡的红茶，和',
        you.sex,
        '泡的理论成分完全一样',
      ]);
      await tachyon.print_and_wait('毕竟，已经自己泡了这么多年');
      await tachyon.print_and_wait(
        '能够琢磨的，能够更改的，都已经研究到了最好',
      );
      await tachyon.print_and_wait('但是，味道不一样');
      await tachyon.print_and_wait('不可能一样，永远无法一样');
      await tachyon.print_and_wait('今天的红茶，永远胜不过昨天的味道');
      era.println();
      await tachyon.say_and_wait('————那么，该开始下一次实验了');
      era.drawLine();
      await tachyon.print_and_wait('特雷森学园的地下室');
      era.println();
      await tachyon.say_and_wait('上次来这里……是什么时候了');
      era.println();
      await tachyon.print_and_wait('三个月？五个月？还是……');
      await tachyon.print_and_wait('「这次」又跟豚鼠君度过了多长的时间？');
      era.println();
      await tachyon.say_and_wait('算了，不重要了');
      era.println();
      await tachyon.print_and_wait('打开灯');
      await tachyon.print_and_wait('在眼睛慢慢适应亮光后');
      await tachyon.print_and_wait('眼前出现的，是数以千计的营养槽');
      era.println();
      await tachyon.print_and_wait([
        '啊啊，要是让',
        you.sex,
        '知道的话，',
        you.sex,
        '绝对不会原谅我吧',
      ]);
      await tachyon.print_and_wait(['但是……', you.sex, '还是没有怪罪我']);
      await tachyon.print_and_wait('所以，这就算默认了');
      era.println();
      await tachyon.say_and_wait(
        '第五十六次，记忆没有恢复倾向，身体无异状，存活时间五个月……',
      );
      era.println();
      await tachyon.print_and_wait(['从', you.sex, '离开那天开始才启动的计划']);
      await tachyon.print_and_wait('已经无数次咒骂过自己');
      await tachyon.print_and_wait('为什么如此晚才想到');
      await tachyon.print_and_wait(
        '已经被泡沫般的幸福麻痹到忘记研究者最基本的未雨绸缪了吗？',
      );
      await tachyon.print_and_wait('所以才会落得如此下场');
      era.println();
      await tachyon.print_and_wait([
        '一点一滴，像堆沙堡一般，将',
        you.sex,
        '的身体重新拼凑而成',
      ]);
      await tachyon.print_and_wait(
        '但，哪怕一切都拼凑起来了，也无法将无形的东西重新塑成',
      );
      await tachyon.print_and_wait('人体中蕴含最多秘密的大脑————记忆');
      await tachyon.print_and_wait(
        '连一开始都不知道到底存在与否的东西，到底又能怎么重塑',
      );
      await tachyon.print_and_wait('只能像这样');
      await tachyon.print_and_wait('一次又一次的实验，一次又一次的唤醒');
      await tachyon.print_and_wait('一次又一次的……等待着奇迹');
      era.println();
      await tachyon.say_and_wait(
        '失败主因，多器官衰竭引起败血症……生存意愿，无',
      );
      era.println();
      await tachyon.print_and_wait(
        '凡人的捏泥土游戏，大概是永远也及不上女神大人的',
      );
      await tachyon.print_and_wait(['所以，每次塑造出的', you.sex, '总是这样']);
      await tachyon.print_and_wait('至多半年，至少……两周');
      await tachyon.print_and_wait(
        '只要到了时间，总会因为各式各样的原因而陷入永眠',
      );
      await tachyon.print_and_wait('……当然');
      await tachyon.print_and_wait('这些疾病，再怎么说，依然是常人范围');
      await tachyon.print_and_wait([
        '凭借着 ',
        tachyon.get_colored_name(),
        ' 的研究成果',
      ]);
      await tachyon.print_and_wait(
        '要续命的话，多活上三到五年绝对不是问题，甚至……还能更久',
      );
      await tachyon.print_and_wait(
        '只要愿意，可以有一个三到五年，就能有第二个，第三个，第四个，直到永久',
      );
      era.println();
      await tachyon.say_and_wait([you.sex, '还是……没有说']);
      era.println();
      await tachyon.print_and_wait('无论重复多少次');
      await tachyon.print_and_wait('无论怎么对身体进行改动');
      await tachyon.print_and_wait([
        '最后的最后，',
        you.sex,
        '说的总是大同小异',
      ]);
      era.println();
      await tachyon.say_and_wait('已经结束了');
      await tachyon.say_and_wait('已经满足了');
      era.println();
      await tachyon.say_and_wait('开什么玩笑……开什么玩笑！');
      await tachyon.say_and_wait(
        '谁允许你擅自满足了！给我说啊！对我说啊！说想要活下去！说想要继续和我生活下去啊！',
      );
      await tachyon.say_and_wait(
        '没有记忆也没关系，要花一辈子找回记忆也没关系，说啊……为什么不说……为什么……要留我一个人……',
      );
      era.println();
      await tachyon.print_and_wait([
        '如果，',
        you.sex,
        '是因为憎恨，憎恨害自己失去性命的 ',
        tachyon.get_colored_name(),
        '，因此宁愿死也不愿意与 ',
        tachyon.get_colored_name(),
        ' 一起生活，那都能接受',
      ]);
      await tachyon.print_and_wait([
        '如果真的是这样，那么 ',
        tachyon.get_colored_name(),
        ' 会不说二话的离开',
        you.sex,
        '的生活，只进行最低程度的医疗接触',
      ]);
      await tachyon.print_and_wait([
        '只要能在最后，有那么一点迟疑，或者表露出那么一点对 ',
        tachyon.get_colored_name(),
        ' 的嫌弃',
      ]);
      await tachyon.print_and_wait([
        '那么哪怕心跳停止，自己都能在最后关头将',
        you.sex,
        '抢救回来',
      ]);
      await tachyon.print_and_wait('但是……五十六次里');
      await tachyon.print_and_wait('这种事，一次也没发生过');
      era.println();
      await tachyon.print_and_wait('不想拖累自己');
      await tachyon.print_and_wait('不想束缚自己');
      await tachyon.print_and_wait('哪怕失去一切，包括生命，包括记忆');
      await tachyon.print_and_wait([
        '五十六次里，每一次，',
        you.sex,
        '直到最后想的都是 ',
        tachyon.get_colored_name(),
        ' 的可能性',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '但是，',
        tachyon.get_colored_name(),
        ' 的可能性，已经结束了',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 的时间，已经停止走动',
      ]);
      await tachyon.print_and_wait('那杯红茶的味道从那刻开始就已经定格');
      era.println();
      await tachyon.say_and_wait('第五十七次，开始');
      era.println();
      await tachyon.print_and_wait(
        '随着培养槽将营养液排干，在培养槽中的人影被释放出来',
      );
      era.println();
      await tachyon.print_and_wait([
        '不能让',
        you.sex,
        '结束，不会让',
        you.sex,
        '结束',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 与豚鼠君的故事，必须永远继续下去',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '于是，将过去束缚，也被束缚在过去的科学家，开始了新一轮的实验',
      );
    };
    f.title = title;
    return f;
  })(),
};
