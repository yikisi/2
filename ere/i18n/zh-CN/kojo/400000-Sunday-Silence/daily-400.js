/**
 * @file 周日宁静 - 日常
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} s_call_c 周日宁静对曼城茶座的称呼
   * @param {PrintedSpan} s_call_t 周日宁静对爱丽速子的称呼
   * @param {PrintedSpan} s_call_m 周日宁静对骏川缰绳/丰收时刻的称呼
   */
  good_morning(ss, you, s_call_c, s_call_t, s_call_m) {
    const buffer = [];
    buffer.push(
      () => ss.say('今天的天气看起来不错，如果有什么安排的话还是趁早开始吧。'),
      () => ss.say('你是我变强的必要存在，所以没有必要顾虑我的想法。'),
      () =>
        ss.say([
          '有点怀念 ',
          s_call_c,
          ' 的咖啡了……为什么要这样看着我，',
          ss.sex,
          '泡的咖啡确实很好喝。',
        ]),
      () => {
        ss.say(
          '最近学校附近新开的料理店味道不错，如果训练能够取得足够的效果的话，我带你一起去尝尝怎么样？',
        );
        era.print([
          ss.get_colored_name(),
          ' 摸了摸自己的肚子，似乎还在回味料理的味道。',
        ]);
      },
      () =>
        ss.say([
          s_call_t,
          ' 的药剂怎么样？很多时候它确实能够帮助你解决问题，但是副作用或者说附带出现的问题，你有信心能够解决吗？',
        ]),
      () =>
        ss.say([
          '你问我的目标是什么？我想赢，站在赛',
          ss.uma_sex_title,
          '的战场上一路赢下去，仅此而已。',
        ]),
      () => {
        ss.say([
          '是 ',
          s_call_m,
          ' 啊……',
          ss.sex,
          '是一个很强……不，没什么，忘了吧。',
        ]);
        era.print([ss.get_colored_name(), ' 摇了摇头，选择将话题转移。']);
      },
    );
    if (era.get('love:400') === 100) {
      buffer.push(
        () => {
          ss.say('为什么呢？我们明明只是训练员与担当的关系……');
          ss.say('为什么我的视线已然无法离开你了呢。');
          era.print([
            '虽然 ',
            ss.get_colored_name(),
            ' 看起来是在小小声的自言自语，但是 ',
            you.get_colored_name(),
            ' 还是听到了这句话。',
          ]);
        },
        () => {
          ss.say('能帮我按摩一下脚吗？这应该也是作为训练员的职责之一吧……');
          era.print([
            ss.get_colored_name(),
            '脱下了自己的鞋子，将被袜子包裹的小脚伸了出来，',
          ]);
          era.print([
            '虽然嘴上只是说着希望 ',
            you.get_colored_name(),
            ' 帮',
            ss.sex,
            '按摩脚，但是',
            ss.sex,
            '闭上了眼睛似乎打算任由 ',
            you.get_colored_name(),
            ' 做什么都好。',
          ]);
        },
      );
    } else if (era.get('love:400') >= 90) {
      buffer.push(
        () => {
          ss.say('如果没有额外的训练计划的话……');
          ss.say(
            '今天就和我一起去吃饭吧，不用担心时间问题，大不了我抱着你跑回来而已。',
          );
          era.print([
            ss.get_colored_name(),
            ' 比划了一下，',
            ss.sex,
            '似乎并不像是在开玩笑的样子。',
          ]);
        },
        () => {
          ss.say(
            '抱歉，有点累了，所以能扶我一下吗？果然还是你身上的味道最能让我安心了。',
          );
          era.print([
            ss.get_colored_name(),
            ' 顺势依靠在你的怀里面，似乎充分的的享受着 ',
            you.get_colored_name(),
            ' 的气味。',
          ]);
        },
      );
    } else if (era.get('love:400') >= 75) {
      buffer.push(
        () => ss.say('今天训练结束要不要和我一起喝点什么，放心吧我请客，'),
        () =>
          ss.say('我知道有一家很不错的咖啡馆，就当是给你的额外酬劳怎么样？'),
        () =>
          ss.say(
            '能陪我去书店吗？今天好像有的新一期的杂志和漫画，我想去找个人陪我一起去买。',
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  select(ss, you, callname) {
    const buffer = [];
    if (era.get('love:400') === 100) {
      buffer.push(() => {
        ss.say(
          `${callname}，请务必看着我的身姿，将它印刻在你的大脑之中，永远的。也请永远不要离开我。`,
        );
        era.print([
          ss.get_colored_name(),
          ' 向 ',
          you.get_colored_name(),
          ' 张开了双手，似乎想要拥抱 ',
          you.get_colored_name(),
          '。',
        ]);
      });
    } else if (era.get('love:400') >= 75) {
      buffer.push(() => {
        ss.say(
          '下次能再稍微来早一点点吗？我想早点见到你，这样也可以让我们的训练更有效果。',
        );
        era.print([
          ss.get_colored_name(),
          ' 微红的脸颊撇了过去，不敢看着 ',
          you.get_colored_name(),
          ' 的眼睛。',
        ]);
      });
    } else if (era.get('love:400') >= 50) {
      buffer.push(() => {
        ss.say(
          '能再靠近一点吗？不，只是想要看看我选择的训练员到底有多优秀而已。',
        );
        era.print([
          ss.get_colored_name(),
          ' 的目光不再离开 ',
          you.get_colored_name(),
          '。',
        ]);
      });
    } else {
      buffer.push(
        () => {
          ss.say('作为训练员，你来的时间还算合理，至少你没有迟到。');
          era.print([
            ss.get_colored_name(),
            ' 点点头，似乎是在表达对 ',
            you.get_colored_name(),
            ' 的认可。',
          ]);
        },
        () => {
          ss.say(`来的刚刚好，${callname}，今天要如何安排。`);
          era.print([ss.get_colored_name(), ' 看起来饶有兴味。']);
        },
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async office_study(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `指导学习什么的……是需要我来指导 ${callname} 的作业吗？`,
      );
      await ss.say_and_wait(
        `开个玩笑啦，${callname} 愿意帮我知道学习，我很感激哦。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 伸了个懒腰，露出愉快的表情。',
      ]);
    } else {
      await ss.say_and_wait('学习啊，我们家学习成绩不好的好像几乎没有哦，');
      await ss.say_and_wait(
        `哦对了，要不 ${callname} 教我关于训练员的知识吧，`,
      );
      await ss.say_and_wait(`说不定有一天我就可以自己训练我自己了哦！`);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 的话让 ',
        you.get_colored_name(),
        ' 幻视到了失业的悲惨未来。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async office_prepare(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `无需担忧，${callname}……就像当初加入你的队伍时说的一样，只需要看着我将胜利带回给你就好了，看着我就好了！`,
      );
    } else {
      await ss.say_and_wait(`要来了啊，我们一直以来的努力就要看到成果了呢……`);
      await ss.say_and_wait(
        `${callname}，看着我吧，就好像是当初说的那样，选择我的你，会得到应有的荣耀。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} s_call_c 周日宁静对曼城茶座的称呼
   */
  async talk(ss, you, s_call_c) {
    const buffer = [];
    if (era.get('base:400:体力') < era.get('maxbase:400:体力') / 3) {
      buffer.push(async () => {
        await ss.say_and_wait(
          '我并不觉得这是什么明智的想法，我也必须向你声明，我们之间是平等的关系，我希望你能记住你的职责。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 看起来并不非常情愿听从 ',
          you.get_colored_name(),
          ' 的指令。',
        ]);
      });
      if (era.get('love:400') >= 50) {
        buffer.push(async () => {
          await ss.say_and_wait(
            '如果你确定要这样的话……我明白了，我会尽我的全力跟上你的想法的。',
          );
          await era.printAndWait([
            ss.get_colored_name(),
            ' 思考了一下，答应了 ',
            you.get_colored_name(),
            ' 的要求。',
          ]);
        });
      }
    } else {
      switch (era.get('cflag:400:干劲')) {
        case -2:
          buffer.push(
            () =>
              ss.say_and_wait(
                '啊……我现在浑身都很不爽，所以有什么事情就赶快说。',
              ),
            () =>
              ss.say_and_wait(
                '你最好说一点我喜欢听的东西，不然的话我不知道自己能不能忍住动手的欲望。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              ss.say_and_wait(
                '唔……你刚刚在说什么？抱歉我有点提不起劲，所以能麻烦你再说一次吗？',
              ),
            () =>
              ss.say_and_wait([
                '咳咳咳，',
                s_call_c,
                ' 的咖啡喝太多了……感觉喉咙有点不对劲了。',
              ]),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ss.say_and_wait(
                '我现在脑袋还算清醒，所以要是有预定计划或者日程的话就赶紧说吧。',
              ),
            () =>
              ss.say_and_wait(
                '又是这种稀疏平常的日子，要是这样的日子能够再少一点就好了。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              ss.say_and_wait(
                '天气不错，我很喜欢，所以我希望你的训练能让我保持这样的心情。',
              ),
            () =>
              ss.say_and_wait(
                '再不开始训练的话我可就要踢栏杆来发泄精力了哦，你说赔偿？当然是你赔啊！',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              ss.say_and_wait(
                '我今天可是活力十足啊，作为训练员你可不能浪费这种好机会对吧？',
              ),
            () =>
              ss.say_and_wait(
                '今天的训练量可以翻倍，我的状态比你想象的要好得多，不要把我当场是那种娇生惯养的家伙，只要能赢训练量加多少都无所谓。',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ss 周日宁静 */
  async office_gift(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        '给我的礼物？……谢谢，不过竟然给我送这样的礼物，难道你是在讨好我吗？',
      );
      await era.printAndWait([
        '兴致勃勃的 ',
        ss.get_colored_name(),
        '，在看到是Ｓ〇ＧＡ游戏机之后立刻垂下了耳朵。',
      ]);
    } else {
      await ss.say_and_wait('礼物啊，我很少从其他人手里面收到这种东西呢，');
      await ss.say_and_wait(
        '而且为什么……从你手中接过这个东西，我的心脏居然在激烈挑动呢？',
      );
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async office_cook(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait('学做饭吗？我在家政课上倒是也学过一些东西，');
      await ss.say_and_wait(
        '那么……请多多指教了，既然要学，那就要好好学才行，就好像是训练一样。',
      );
      await era.printAndWait([ss.get_colored_name(), ' 一脸的严肃。']);
    } else {
      await ss.say_and_wait(
        '其实我不太会做饭哦，毕竟平时也没有接触过这些活动，',
      );
      await ss.say_and_wait(
        `但是既然是 ${callname} 提出来的，那我们就一起进步，好好学习吧。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   */
  async office_rest(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `抱歉，要休息的话，可以不拉上窗帘吗？我……有点怕黑。`,
      );
      await era.printAndWait([ss.get_colored_name(), ' 有些不好意思。']);
    } else {
      await ss.say_and_wait('……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' 入睡之后的表情并不算平缓，仿佛是做了什么噩梦一样，',
      ]);
      await era.printAndWait([
        '但是在摸到 ',
        you.get_colored_name(),
        ' 袖子的一瞬间，',
        ss.sex,
        '牢牢的将袖子抓住，然后表情缓和了下来。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} s_call_d 周日宁静对里见光钻的称呼
   */
  async office_game(ss, you, s_call_d) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(`比起街机厅的游戏机，还是这里的游戏更有意思哦。`);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 熟练的操控角色，作为担当来说',
        ss.sex,
        '和 ',
        you.get_colored_name(),
        ' 的默契十足，这让 ',
        you.get_colored_name(),
        ' 非常开心。',
      ]);
    } else {
      await ss.say_and_wait([
        '唔，没有玩过的游戏呢……居然是 ',
        s_call_d,
        ' 的家里面出品的游戏啊，看起来不得不尝试一下了呢。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 饶有兴味的看向屏幕里面出现的 LOGO，拿起了手柄。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   */
  async s_a_tree_hollow(ss, you) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `其实我没什么好喊的……算了，请帮助我在赛${ss.uma_sex_title}的道路上走的更远吧！！！`,
      );
      await era.printAndWait([
        ss.sex,
        '对着大大的枯树洞喊道，喊完了之后有些不好意思的看着 ',
        you.get_colored_name(),
        '。',
      ]);
    } else {
      await ss.say_and_wait(
        '你说要是三女神真的会在这里听这些东西的话，她们会不会觉得烦恼呢？',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 若有意思的看向枯树洞，似乎真的在思考这个可能性。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async s_a_dating(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `学校里面你和我说去约会？${callname}？！师生恋是明确被禁止的哦！！`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 看起来并没有那个兴致，但是最后',
        ss.sex,
        '拉着 ',
        you.get_colored_name(),
        ' 在学校的图书馆完成了「约会」。',
      ]);
    } else {
      await ss.say_and_wait('啊……学校里面啊……那就去食堂怎么样？你请客。');
      await era.printAndWait([
        '虽然是这样说，但是 ',
        ss.get_colored_name(),
        ' 还是替 ',
        you.get_colored_name(),
        ' 掏了这一餐的饭钱。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async s_r_lunch(ss, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      ss.get_colored_name(),
      ' 在决定在天台吃便当',
    ]);
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `介意我和你互换一下菜吗？${callname} 的盒饭里面有我很喜欢的食材呢。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 将一大块肉塞到了你的便当盒里面，微笑着看向 ',
        you.get_colored_name(),
        '。',
      ]);
    } else {
      await ss.say_and_wait(`${callname} 的便当是自己做的吗？真好呢，`);
      await ss.say_and_wait(
        `家里面给我带的便当我每次都吃不完，太可惜了。所以一起来吃吧，浪费粮食可是大罪过。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 掏出了一个超大的豪华便当盒，',
      ]);
      await era.printAndWait([
        '不用看都知道里面丰富而美味的食材肯定超出了 ',
        you.get_colored_name(),
        ' 的钱包的可承受范围，',
      ]);
      await era.printAndWait([
        '当然你也没有追问，平时 ',
        ss.get_colored_name(),
        ' 是怎么解决这份便当的。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async o_r_fishing(ss, you, callname) {
    await era.printAndWait(['和 ', ss.get_colored_name(), ' 相约去钓鱼……']);
    const buffer = [
      async () => {
        await ss.say_and_wait(
          `${callname}，真的会有鱼咬钩吗？那么明显的陷阱它们居然也会上当吗？`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 看着平静的水面泛起涟漪的表情有些可爱。',
        ]);
        await era.printAndWait(
          `${ss.sex}马上收敛表情全神贯注的看着自己的鱼竿，开始和水里面的鱼做斗争。`,
        );
      },
      async () => {
        await ss.say_and_wait(
          `唔唔唔，真是个不错的活动啊，${callname} 的桶子怎么是空的呢？需要我分你一点吗？`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 将咬钩的鱼从鱼钩上摘下，看向 ',
          you.get_colored_name(),
          ' 的表情只有真诚，但是 ',
          you.get_colored_name(),
          ' 感觉自己的内心似乎收到了些许的伤害。',
        ]);
      },
      async () => {
        await era.printAndWait([
          ss.sex,
          '恬静的看着平静小河平缓的水面的样子完全不像是平时那个风风火火我行我素的赛',
          ss.uma_sex_title,
          '，',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 将',
          ss.sex,
          '与平时截然不同的身子印在了脑海里面。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   */
  async o_r_walking(ss, you) {
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '河边的空气有些凉爽啊，下次晨跑的时候选这里怎么样？',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 深呼吸感受着河边的微风。',
        ]);
      },
      () =>
        era.printAndWait([
          ss.get_colored_name(),
          ' 默默的走在河边，不时回头看向走在身后的',
          you.get_colored_name(),
          '，似乎在思考着什么。',
        ]),
    ];
    if (era.get('love:400') >= 75) {
      buffer.push(() =>
        era.printAndWait([
          ss.get_colored_name(),
          ' 慢慢地靠近 ',
          you.get_colored_name(),
          '，悄悄的却又不容拒绝的握住了 ',
          you.get_colored_name(),
          ' 的手，十指相扣，轻轻地用手指划在 ',
          you.get_colored_name(),
          ' 的手背上画着图案。',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async o_s_arcade(ss, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await ss.say_and_wait(
          '你说这个游戏叫什么？舞力全开？那就试试吧，看起来挺有意思的……',
        );
        await era.printAndWait([
          '最后 ',
          ss.get_colored_name(),
          ' 以分奴的方式刷新了街机的记录。',
        ]);
      },
      async () => {
        await ss.say_and_wait([
          callname,
          ' 的反应好像还没有我好呢，看招看招！',
        ]);
        await era.printAndWait([
          '操纵着屏幕里面的角色，',
          ss.get_colored_name(),
          ' 丝滑的一套连招将 ',
          you.get_colored_name(),
          ' 操纵的角色打败，',
        ]);
        await era.printAndWait([
          '然后对 ',
          you.get_colored_name(),
          ' 露出了略带挑衅的笑容，看得出来',
          ss.sex,
          '真的很开心。',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ss 周日宁静 */
  async o_s_drawing(ss) {
    await era.printAndWait([
      '与 ',
      ss.get_colored_name(),
      ' 一同参加了商店街组织的抽奖活动……',
    ]);
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '这种东西只不过商家赚钱的手段吧，要是次次都能中大奖的话他们早就该关门歇业了。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 一边说着一边看着自己手上作为奖品的玩偶。',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          '抽奖？如果你想要什么东西的话就把钱给我吧，我去找店员用合理的价格买下来好了。',
        );
        await era.printAndWait([
          '虽然是这样说着，',
          ss.get_colored_name(),
          ' 还是选择了乖乖按下按钮等待结果产生。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async o_s_ktv(ss, you, callname) {
    const buffer = [
      async () => {
        await ss.say_and_wait(
          '一个人来这里唱歌还是怪可怜的，但是有你在的话反而就好很多了呢。',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 拿起话筒，轻声唱了起来。',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          `唔，歌单里面的歌尽是我没怎么听过呢，要不 ${callname} 你唱一首给我听一下怎么样？`,
        );
        await ss.say_and_wait(
          `噗哈哈哈，开玩笑的，我可是赛${ss.uma_sex_title}偶像啊，怎么可以不会唱歌呢？`,
        );
      },
      async () => {},
    ];
    if (era.get('love:400') >= 75) {
      buffer.push(async () => {
        await ss.say_and_wait(
          '快和我一起唱！！就是这首！！我一直想找人和我一起唱的！',
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 强硬地将话筒塞给 ',
          you.get_colored_name(),
          '，屏幕上播放的是一首男女对唱的情歌，歌曲结尾男女主角踏入婚姻殿堂过上了幸福的一生。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   * @param {PrintedSpan} s_call_c 周日宁静对曼城茶座的称呼
   */
  async o_s_movie(ss, you, callname, s_call_c) {
    const buffer = [
      async () => {
        await ss.say_and_wait([
          '灵异恐怖片？',
          callname,
          ' 不会是以为我会怕那些恶鬼之类的东西吧？',
        ]);
        await era.printAndWait([
          ss.get_colored_name(),
          ' 胸有成竹的笑着看向自己手中的电影票。',
        ]);
        await era.printAndWait([
          '事实也正是如',
          ss.sex,
          '所说的那样，',
          ss.sex,
          '心如止水的看完了一整部其实还算恐怖的电影，出场的时候',
          ss.sex,
          '挽住了 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
        await era.printAndWait([
          '这些东西和我在 ',
          s_call_c,
          ' 那边见过的比起来那都是太过于浮夸了呢……嘘，别问，刚刚我说的你都忘掉吧。',
        ]);
      },
      async () => {
        await ss.say_and_wait(
          `这个片子是……啊，看起来应该会很有意思，${callname} 太懂担当的心思的话，我可不能当做视而不见呢。`,
        );
        await era.printAndWait([
          ss.get_colored_name(),
          ' 接过了电影票，你们一起看了一部很有意思的老科幻电影。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(ss, you, callname, dice) {
    await era.printAndWait([
      ss.get_colored_name(),
      ' 与 ',
      you.get_colored_name(),
      ' 一起前往神社进行祈福。',
    ]);
    await ss.say_and_wait(`这种事情……真的能起效果吗？`);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 将信将疑的洗了手完成了参拜，',
      ss.sex,
      '看向 ',
      you.get_colored_name(),
      ' 问出了自己的问题。',
    ]);
    await you.say_and_wait(
      '你的努力和我的努力都是我们取得成绩最坚实的基础，但是除此之外，或许我们也需要一点点运气的帮助不是吗？你就当成是心里安慰也可以。',
    );
    await ss.say_and_wait(
      `这样啊……那我可就放心大胆的开始许愿了，毕竟拿了我的香油钱供奉，它们可不能不干事啊！`,
    );
    await era.printAndWait([
      '钱币落入纳奉箱的声音与 ',
      ss.get_colored_name(),
      ' 的话语一起响起，',
      ss.sex,
      '看起来选择了相信 ',
      you.get_colored_name(),
      ' 的说法。',
    ]);
    if (dice < 0.6) {
      await ss.say_and_wait(
        `唔，居然真的有反应啊！喂喂喂，${callname} 这可真是了不得的事情。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 有些惊讶，',
        ss.sex,
        '摸了摸自己的耳饰。',
      ]);
      await ss.say_and_wait(
        `不过既然连神明回应了我的愿望……那我可更加没有不训练的理由了啊，咱们等会就回去训练吧！`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 兴冲冲的拉着 ',
        you.get_colored_name(),
        ' 准备回去训练场了。',
      ]);
    } else {
      await ss.say_and_wait(
        `嘁……看起来大家说的很灵验的神灵也不是什么万能的东西啊……`,
      );
      await ss.say_and_wait(
        `${callname}，我觉得我们应该提前回去喽，既然神明不愿意回答我的话，`,
      );
      await ss.say_and_wait(
        `那就让祂好好看看我们根本就不需要祂的帮助也能做到吧。`,
      );
      await era.printAndWait([
        '这样说着，',
        ss.get_colored_name(),
        ' 烦躁的甩动着尾巴，看起来',
        ss.sex,
        '并没有自己说的那么平静，甚至看起来有些阴沉。',
      ]);
      await era.printAndWait([
        '不知为何，',
        you.get_colored_name(),
        ' 似乎也有些烦躁了起来，两个人一起离开了神社。',
      ]);
    }
  },
  /** @param {CharaTalk} ss 周日宁静 */
  async o_s_restaurant(ss) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `你要点咖啡吗？那记得帮我多加一点糖和牛奶，咖啡就是要甜的才好喝啊。`,
      );
    } else {
      await ss.say_and_wait(
        `要试试这个吗？你说什么我不能喝酒？放心啦只是制作过程中有用到酒而已，不会出问题的。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async o_s_dating(ss, you, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `约会？和我？${callname} 你确定吗？比起这个我觉得我们在训练场约会然后约会内容就是训练怎么样？`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 一脸的诧异，摸了摸自己的耳朵，确认自己听到的内容没有错。',
      ]);
      await era.printAndWait([
        '但是在看到 ',
        you.get_colored_name(),
        ' 坚定的表情之后，',
        ss.sex,
        '有些苦恼的叹了口气。',
      ]);
      await ss.say_and_wait(
        `好吧好吧，虽然但是……和我这样的${ss.uma_sex_title}约会是不会有意思的哦。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 虽然一直在推脱，但是你看出了',
        ss.sex,
        '眼神之中的期待。',
      ]);
      era.printButton(
        `我希望你能和我一起出去玩，只要有你在的话就会很有意思。`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        `什么……什么啊！！！说这样的话……难道你是什么擅长骗${ss.uma_sex_title}的花心萝卜吗？`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 将羞红的脸颊别过去不敢直视你，但是还是牵住了 ',
        you.get_colored_name(),
        ' 伸出来的手。',
      ]);
      await era.printAndWait(`随后两人一起玩了个爽。`);
    } else {
      await ss.say_and_wait(
        `约会吗？难道是什么真心话大冒险失败之后的惩罚游戏吗？`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 将信将疑的看着 ',
        you.get_colored_name(),
        '，随后叹了口气。',
      ]);
      await ss.say_and_wait(
        `不管是什么，比赛和训练才是最重要的不是吗？再说了和我这样阴沉的赛${ss.uma_sex_title}出去约会很没意思的哦。`,
      );
      await era.printAndWait([
        '一边说着，',
        ss.get_colored_name(),
        ' 却忍不住的偷偷看向 ',
        you.get_colored_name(),
        '，似乎是在确定 ',
        you.get_colored_name(),
        ' 到底是不是真心想要约',
        ss.sex,
        '出去玩。',
      ]);
      await ss.say_and_wait(
        `唔……既然是真的吗？我明白了……那我们就出发吧，让我来带路。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 看着你丝毫没有任何变化的表情似乎意识到了 ',
        you.get_colored_name(),
        ' 的心意，',
      ]);
      await era.printAndWait(`虽然脸上依旧是一副不耐烦的表情，`);
      await era.printAndWait([
        '但是',
        ss.sex,
        '牵住 ',
        you.get_colored_name(),
        ' 的手的时候那种欢快的感觉被 ',
        you.get_colored_name(),
        ' 察觉的一清二楚，然后',
        ss.sex,
        '就把 ',
        you.get_colored_name(),
        ' 带到了书店一起看书。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async o_s_shopping(ss, callname) {
    if (Math.random() < 0.5) {
      await ss.say_and_wait(
        `这里卖的衣服不太适合我，我一般都是去找专门的店订做衣服的，${callname} 要不要一起啊？可以记在我的账上。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 眯起眼睛微笑的看着你，也不知道到底是不是真心的邀请。',
      ]);
    } else {
      await ss.say_and_wait(
        `啊，这里居然上新货了，${callname} 快过来，我一直都觉得我们可以换一下鞋子上的蹄铁了，还有新的负重和运动服诶。`,
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 有些兴奋的看着器材店里面的货物。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   */
  good_night_normal(ss, you) {
    era.print([
      '忙碌结束之后，',
      you.get_colored_name(),
      ' 将 ',
      ss.get_colored_name(),
      ' 来到了宿舍门口。',
    ]);
    ss.say('这样就可以了哦，真的非常感谢您……');
    era.print([
      ss.get_colored_name(),
      ' 微微低头，开心地笑着，回到了',
      ss.sex,
      '的宿舍之中。',
    ]);
  },
  /**
   * @param {CharaTalk} ss 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {1|2} check 求爱检定，2是大成功
   */
  async good_night_sex(ss, you, check) {
    ss.say(`要一起进来吗？`);
    era.print([
      ss.get_colored_name(),
      ' 双腿摩擦着，',
      you.get_colored_name(),
      ' 能够感觉到',
      ss.sex,
      '的呼吸正在逐渐加快，',
    ]);
    era.print([
      '那双在赛场上风驰电掣的肉腿此刻正在不安分的缓缓靠向 ',
      you.get_colored_name(),
      '。',
      ss.sex,
      '伸出手想要将 ',
      you.get_colored_name(),
      ' 拉入',
      ss.sex,
      '的房间之中。',
    ]);
    era.printButton('接受', 1);
    if (check !== 2) {
      era.printButton('装傻', 2);
    }
    return await era.input();
  },
  cl_temple_fair: (() => {
    const title = '打上花火';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(['所以说……', callname, '，我的和服看起来好看吗？']);
      await era.printAndWait([
        '和年初时的和服截然不同，此刻的 ',
        ss.get_colored_name(),
        ' 穿着一身充满了夏日气息的和服，',
      ]);
      await era.printAndWait([
        '将自己的长发梳起来之后，',
        ss.get_colored_name(),
        ' 显得文静而优雅。',
      ]);
      await era.printAndWait([
        ss.sex,
        '自然的牵着 ',
        you.get_colored_name(),
        ' 的手，靠在 ',
        you.get_colored_name(),
        ' 的怀里面，任由 ',
        you.get_colored_name(),
        ' 牵着',
        ss.sex,
        '在夏日祭典举办的场所之中随处走动。',
      ]);
      await era.printAndWait([
        '你们体验了几乎所有的小商家，从吃的到玩的一个都没有放过，',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 似乎还特别幸运的抽到了一根发簪，在商家的注视下让 ',
        you.get_colored_name(),
        ' 将发簪别到',
        ss.sex,
        '的头发里面。',
      ]);
      await ss.say_and_wait(
        '今天我玩的很愉快哦……说实话如果没有遇到你的话，说不定我连烟花都不会想来看呢。',
      );
      await era.printAndWait([
        '在盛大的烟火表演之下，你们坐在某个不容易被发现的角落之中，看起来就好像是一对甜蜜的小情侣一般。',
      ]);
      era.printButton('「是吗？我有礼物要送给你，和我来吧。」', 1);
      await era.input();
      await era.printAndWait([
        '烟火结束之后，',
        you.get_colored_name(),
        ' 拉起了',
        ss.sex,
        '的手，无视 ',
        ss.get_colored_name(),
        ' 疑惑的神情，将',
        ss.sex,
        '带到了一片空旷的沙滩处。',
      ]);
      await ss.say_and_wait(['诶，', callname, ' 的礼物……是……是什么啊？']);
      await era.printAndWait([
        ss.sex,
        '看起来有些不安又有些兴奋的望向 ',
        you.get_colored_name(),
        '，甚至已经将手伸向了自己和服的系带。',
      ]);
      await era.printAndWait('（嘭！！！）');
      await era.printAndWait([
        '烟花升天之后爆炸开来的声音传到了',
        ss.sex,
        '的耳朵里面，',
        ss.sex,
        '惊讶的回头望去，',
      ]);
      await era.printAndWait(
        '一颗又一颗烟花在远处炸开，爆出了一个又一个美轮美奂的图案。',
      );
      await ss.say_and_wait('这……这是……？');
      await era.printAndWait([
        ss.sex,
        '的眼睛似乎有些湿润，回头看到了拿出仙女棒的 ',
        you.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait(
        '夏天啊，当然是要一起来玩烟火才开心啦，这是我送给你的烟火表演，看完之后就一起来玩怎么样？',
      );
      await era.printAndWait([
        '随后 ',
        you.get_colored_name(),
        ' 感觉到一阵劲风袭来，瞬间就被 ',
        ss.get_colored_name(),
        ' 扑到在了柔软的沙滩上，',
      ]);
      await era.printAndWait([
        '听着',
        ss.sex,
        '的声音，轻轻的抚摸着 ',
        ss.get_colored_name(),
        ' 的脑袋，还时不时挠挠',
        ss.sex,
        '耳朵里面的绒毛。',
      ]);
      await era.printAndWait([
        '柔情似水的 ',
        ss.get_colored_name(),
        ' 趴在 ',
        you.get_colored_name(),
        ' 的身上，露出了绝美的笑容。',
      ]);
      await ss.say_and_wait([
        callname,
        ' 的礼物实在是太贵重了……还请允许用身体来偿还这份贵重的礼物吧。',
      ]);
      await era.printAndWait([
        '最后你们还是因为在夜晚的沙滩上疯玩了大半个晚上，最后精疲力尽回到房间一碰床就睡着了为结束。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
