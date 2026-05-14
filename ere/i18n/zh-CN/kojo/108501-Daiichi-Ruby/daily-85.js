/**
 * @file 第一红宝石 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} ruby 第一红宝石 */
  good_morning(ruby) {
    const buffer = [
      () => ruby.say('贵安，就让训练开始吧。'),
      () =>
        ruby.say(
          '今天也请多多关照。请您彻底地指导我，直到让我达到与过往的族人相称的水平。',
        ),
      () =>
        ruby.say(
          '既然成为了我的训练员，我想您已经做好了心理准备。希望你能毫无遗憾地发挥你的能力。',
        ),
      () =>
        ruby.say(
          '要让大家的威光延续下去，必须付出更多的努力。但如果是现在的身体，那也是有可能做到的。',
        ),
      () =>
        ruby.say(
          '在比赛中取得成果是责任。目的是明确的，既然如此，只有毫不怠慢地前进了。',
        ),
      () =>
        ruby.say(
          '体育医学会的最新发表当然已经确认过了，之后我们再一起讨论吧？',
        ),
      () =>
        ruby.say(
          '我不追求单纯的胜利。如果不能留下鲜明的光辉，对我们一族来说就算不得胜利……对吧？',
        ),
    ];
    if (era.get('flag:当前声望') >= 500) {
      buffer.push(() =>
        ruby.say(
          '您已经向人们展示了自己的资格。不需要害怕，也不需要恐惧，只是使命而已。一起致力于把这件事完成吧。',
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() => ruby.say('愿你的道路上，也遍布闪耀的光芒。'));
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   * @param {boolean} r_awake 第一红宝石是否醒着
   * @param {boolean} after_recruit 是否是招募后第一次选中互动角色
   */
  select(ruby, you, r_awake, after_recruit) {
    if (!r_awake) {
      era.print([
        ruby.get_colored_name(),
        ' 沉沉睡去，当然还是在 ',
        you.get_colored_name(),
        ' 这罪魁祸首的怀抱里。',
      ]);
    } else if (after_recruit) {
      ruby.say('从今天开始，请多指教。');
      ruby.say('华丽、至上，始终绽放最耀眼的光芒。');
      ruby.say('我会把一族的玉条放在心里，只是勇往直前而已。');
      ruby.say('……以上。');
    } else {
      const buffer = [
        () =>
          era.print([
            ruby.get_colored_name(),
            ' 向 ',
            you.get_colored_name(),
            ' 低头致意。',
          ]),
        () => {
          era.print([
            ruby.get_colored_name(),
            ' 像是穿着礼服一样，对 ',
            you.get_colored_name(),
            ' 摆了个提裙礼。',
          ]);
          era.print('屈膝的同时双膝略微向外打开，并将一只脚后撤。');
          era.print([
            you.get_colored_name(),
            ' 无奈而又做作地在大庭广众之下鞠躬回礼。',
          ]);
        },
      ];
      if (era.get('love:85') >= 75) {
        buffer.push(() => {
          era.print([
            ruby.get_colored_name(),
            ' 小憩了一会儿，',
            you.get_colored_name(),
            ' 陪着',
            ruby.sex,
            '一起躺在床上。',
          ]);
          era.print('窗外凉风习习，没有说话声，只有树枝随风摆动。');
          era.print([
            '悠悠转转苏醒的 ',
            ruby.get_colored_name(),
            ' 在 ',
            you.get_colored_name(),
            ' 怀里伸懒腰，然后坐起来。',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_study(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          '先慢慢地把结打开，梳的时候注意捏紧发根侧的头发。帮我梳头，不只是一时兴起吧？',
        ),
      async () => {
        await ruby.say_and_wait(
          '处理好人际关系，或者说要想拥有强大人际关系，更重要的是懂得为他人创造价值。',
        );
        await ruby.say_and_wait(
          '只有为他人创造价值，人际关系才会持久，否则认识再多的人，也是无效社交，因为没有人会记得你。',
        );
      },
    ];
    if (ruby.sex_code !== 1 && era.get('love:85') >= 90) {
      buffer.push(
        async () => {
          await ruby.say_and_wait(
            '简单地说，只要有规律的性生活，不采取避孕措施，就可以达到很高的受孕率。',
          );
          await ruby.say_and_wait(
            '正常人类每个月的受孕率只有20-30%，我们马娘在发情期则会提高至少1倍。',
          );
        },
        async () => {
          await ruby.say_and_wait(
            '马娘的卵子存活时间比普通人更长，所以并不是一定要在排卵当日同房。',
          );
          await ruby.say_and_wait(
            '前后2-3天都是极佳的时间，只要您能做到一周5-6次的同房，就不用在意我的排卵日期了。',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   */
  async talk(ruby, you) {
    const buffer = [];
    if (era.get('base:85:体力') < 0.45 * era.get('maxbase:85:体力')) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '我今天很累了，恐怕没有能力完全理解您的指示，请见谅。',
          ),
        () => ruby.say_and_wait('果然……稍微有点勉强。'),
        () => ruby.say_and_wait('没聊完的事情，可以等一下再继续……'),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(
          () =>
            ruby.say_and_wait(
              '做那个会很累，有打算的话，就空出时间让我沐浴一下。',
            ),
          () =>
            ruby.say_and_wait([
              '不知道您知不知道『累』这个字？就是先前某位',
              you.sex_code === 1 ? '男士' : '女士',
              '趴在我身上的状态。',
            ]),
        );
      }
    } else if (era.get('cflag:85:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:85:干劲')) {
        case 2:
          buffer.push(
            () =>
              ruby.say_and_wait('心存华丽、安身至上。这是未来永劫不变的操守。'),
            () =>
              ruby.say_and_wait(
                '要给一族带来更大的荣光。因此，无论是怎样的困难，除了跨越以外，其他的选项是不存在的。',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => ruby.say_and_wait('是在思考什么锻炼方式吗？'),
            () =>
              ruby.say_and_wait('请出示今天的训练菜单。负荷再高，都无所谓！'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ruby.say_and_wait(
                '准备，已经做好了。半吊子的训练，就不要拿出来了。',
              ),
            () => ruby.say_and_wait('关于训练，我有个建议。请看手边的小册子。'),
            () =>
              ruby.say_and_wait('不……不需要顾虑。时间有限，有更应该做的事。'),
          );
          break;
        case -1:
          buffer.push(
            () => ruby.say_and_wait('咕……如果要背负家族的话，绝不能……'),
            () => ruby.say_and_wait('不能折断……绝对……'),
          );
          break;
        case -2:
          buffer.push(
            () => ruby.say_and_wait('今天的状态实在是……必须尽快查明原因。'),
            () => ruby.say_and_wait('……感情的浪潮，真是麻烦。'),
            () => ruby.say_and_wait('呵……这种程度，嗯……'),
          );
      }
      buffer.push(() =>
        ruby.say_and_wait(
          '关于明天的安排。原定于明天的聚餐取消了，还请您安排一些追加练习。',
        ),
      );
    } else {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '虽然现在是休息时间。但我还要上家教网课，所以我要先完成外语的作业。',
          ),
        () =>
          ruby.say_and_wait(
            '『让处于寒冬的所有人都能展露笑容，以此迎接新年。这就是我的工作。』……父亲大人经常这么跟我说。',
          ),
        () =>
          ruby.say_and_wait(
            '老家的蓝宝石——也就是我家的狗，非常聪明。她能知道送来的报纸是给谁的，并且送到对象的手上。',
          ),
        () =>
          ruby.say_and_wait(
            '品味、机能性、设计感。这件衣服是满足上述所有标准的最优选择。',
          ),
        () => ruby.say_and_wait('您有，事后帮我整理好着装的自信吗？'),
        () =>
          ruby.say_and_wait('时刻挺起胸膛，完成每件事情的你，是我们所认可的。'),
        () =>
          ruby.say_and_wait(
            '虽然时不时会有人问我类似的问题……实际上，我很少会让女仆帮忙。所有的事情都是我自己解决。',
          ),
        () =>
          ruby.say_and_wait(
            '『华丽一族』，大家都是足以配得上这一称号的高洁之人。所以，我也应立于顶点之上。',
          ),
        () =>
          ruby.say_and_wait(
            '您是我的训练员。请您认真履行自己的职责，刻苦钻研、孜孜不倦。',
          ),
        () =>
          ruby.say_and_wait(
            '母亲大人和奶奶大人，都在赛场上创下了伟业。而想要证明我身上流着她们的血……那就只能通过比赛。',
          ),
        () =>
          ruby.say_and_wait(
            '红色的发呆、以及领结。这是能表达我『一定要拿出出彩成绩』这一决心的颜色。',
          ),
        () =>
          ruby.say_and_wait(
            '春天我会戴花项链。不同时期穿戴适合的饰品，可以看出那个人物的立场。',
          ),
        () =>
          ruby.say_and_wait(
            '我必须要绽放出与我们一族相称的光辉。那是绚烂而辉煌的——如同天蝎之火般的光辉。',
          ),
        () =>
          ruby.say_and_wait(
            '衣装也是一种记号。只要有胜者舞台存在，那就需要吸引观众目光的华丽。',
          ),
        () =>
          ruby.say_and_wait(
            '睡眠不足会对判断力产生影响。在睡不着的时候，还请您采取喝香草茶之类的方法。',
          ),
        () =>
          ruby.say_and_wait(
            '我们一族在睡前有条准则。那就是要反省自己：今天一天是否做到了不辱其名。是重要的时间。',
          ),
        () =>
          ruby.say_and_wait(
            '今早的新闻报纸您看了吗？上面有关于我们一族的报道，请您务必看看。',
          ),
        () =>
          ruby.say_and_wait(
            '我从小就会起床送忙于奔波的父母出门，所以直到现在，我起床都不需要用闹钟。',
          ),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          ruby.say_and_wait('您是我认可的伴侣，请骄傲地抬起头来。'),
        );
      }
      if (era.get('love:85') >= 90) {
        buffer.push(() =>
          ruby.say_and_wait(
            '今天是决定一族来年动向的好日子，车来接您的时候，还请千万不要迟到。',
          ),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_gift(ruby) {
    const buffer = [
      () => ruby.say_and_wait('您的援助，非常感谢。'),
      () => ruby.say_and_wait('回礼按照我对您的印象来挑选，可以吗？'),
    ];
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '我知道您想说什么，不必觉得害臊。因为在我们这个国家，早婚其实是一件很平常的事情。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_cook(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`咕……你那什么表情？我当然也有不擅长的事情。`);
    } else {
      await ruby.say_and_wait([
        '卖相——相当不错。味道也无话可说，您一定能抓住',
        ruby.sex_code === 1 ? '男孩子' : '女孩子',
        '的胃的。',
      ]);
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_rest(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`就这样别动，肩膀借我下。一会儿，一会儿就好……`);
    } else {
      await ruby.say_and_wait(
        `不重吗？我的发量应该挺大的……嗯！轻、点。对，摸得再温柔点……`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} call_67 第一红宝石对里见光钻的称呼
   */
  async office_game(ruby, call_67) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`有趣。我想试试其他的。`);
    } else {
      await ruby.say_and_wait([
        '原来如此，',
        call_67,
        ' ',
        ruby.sex,
        '乐此不疲的缘由，有点眉目了。',
      ]);
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async s_a_tree_hollow(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '您愿意代替它，陪陪我，听我这个软弱的',
        ruby.child_sex_title,
        '诉苦吗？',
      ]);
    } else {
      await ruby.say_and_wait(`先祖们，也会在三女神身旁一起看着我们吧。`);
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async s_a_dating(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '若无其事地在公众场合和年下',
        ruby.child_sex_title,
        '牵手，了不起。',
      ]);
    } else {
      await ruby.say_and_wait(`不抓这么紧，我也不会擅自跑开的。`);
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   */
  async s_r_lunch(ruby, you) {
    const buffer = [];
    buffer.push(() =>
      era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 一起享用了管家先生带来的豪华便当。',
      ]),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '『一生中枕过的最好的枕头』？……油嘴滑舌。眼睛，先别睁开。',
          ),
        () => ruby.say_and_wait('过足了瘾，下午训练时禁止继续骚扰。'),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '呼……罢了，我自己脱吧。您在这种时候又会变得笨手笨脚的，要是不小心把衣服弄破就糟糕了。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_r_fishing(ruby) {
    const buffer = [
      () => ruby.say_and_wait(`实际上，第一家也有专业的捕鱼团队。`),
      () =>
        ruby.say_and_wait(
          `您听说过雷伊洛斯这个名字吗？不知道，这里的鱼儿还能存在多久。`,
        ),
      () => ruby.say_and_wait(`因为斤两不大所以让我来单独合影？你这家伙……`),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_r_walking(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait('即使路途遥远，这条河也会前往那波澜壮阔的大海。'),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `目白家河岸旁的新建老旧公寓，我们一族也有参与建设。有空一起去体验下吧。`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          '小小年纪就敢穿这么暴露的衣服，真不知道',
          ruby.couple_title,
          '在想些什么。想看我穿？拒绝……至少现在不行。',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_s_arcade(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `我知道这个，是里见集团最新推出的JRPG。它的起源：《真 · 三女神转生》的大名哪怕是我都有所耳闻。`,
      );
    } else {
      await ruby.say_and_wait(
        `游戏背景的考据非常详细，制作者忠实地呈现故事的设计值得称赞。`,
      );
    }
  },
  /**
   *  @param {CharaTalk} ruby 第一红宝石
   * @param {boolean} hot_spring 是否抽到温泉旅行券
   *  */
  async o_s_drawing(ruby, hot_spring) {
    if (hot_spring) {
      await ruby.say_and_wait('抽到了温泉旅行券');
    } else if (Math.random() < 0.5) {
      await ruby.say_and_wait('什么？嗯，好吧。既然钱都花了，就当是娱乐一下。');
    } else {
      await ruby.say_and_wait(
        '我知道母亲大人有位关系莫逆的好友，姦了爱人三天三夜，把他金钱观的偏差给纠正了过来。',
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
   * */
  async o_s_ktv(ruby, call_93) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        '嗯……',
        call_93,
        ' 当初跟我说的，就是这里没错。隔音材料……绝品。',
      ]);
    } else {
      await ruby.say_and_wait(
        `比夜总会的歌星更胜一筹？稍后请允许我拜访一下您的房间。`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} callname 第一红宝石对玩家的称呼
   * */
  async o_s_movie(ruby, callname) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        callname,
        '。非……非常抱歉，这个……恐怖片，我好像太紧张了，有点……',
      ]);
      await era.printAndWait(`看完电影，椅子上多了一个小水洼。`);
    } else {
      await ruby.say_and_wait([
        '听说是情节精彩而扣人心弦的佳作，',
        callname,
        '。但考虑到您的前科，请问希望我穿哪款丝袜呢？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 第一红宝石对玩家的称呼
   */
  async o_c_pray(ruby, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 带着最近状态不好的 ',
      ruby.get_colored_name(),
      ' 还有管家先生，三个人来到了神社。',
    ]);
    await ruby.say_and_wait(
      `鸟居是划分神所居住的领域和我们日常生活世界的结界。`,
    );
    await era.printAndWait(`穿过的时候，一定要行一礼。`);
    await ruby.say_and_wait(`您怎么了？`);
    era.printButton(`「我觉得礼仪很完美。」`, 1);
    await era.input();
    await ruby.say_and_wait(
      `因为我们一族参拜的机会也很多，所以小时候就学会了。`,
    );
    await ruby.say_and_wait(`当然，祈祷……不是为了依靠。能开拓道路的只有自己。`);
    await ruby.say_and_wait(
      `神社，是与志向面对面的地方。正因为如此，必须要用正确的礼仪来做。`,
    );
    await ruby.say_and_wait(`那么，我去参拜。`);
    era.drawLine();
    await ruby.say_and_wait([callname, ' 也结束了吗？如果是的话，那么……']);
    await you.say_as_passer_by_and_wait(`神主`, [
      '哎呀，您不是',
      ruby.actual_name_with_title,
      '吗。感谢您的参拜。',
    ]);
    await ruby.say_and_wait(`神主大人。接下来正要去事务性问候。`);
    era.drawLine();
    await ruby.say_and_wait(
      `向神主先生寒暄和结束参拜的礼节，到此全部完成。我们回去吧。`,
    );
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_s_restaurant(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          `午饭我是自己一个人吃的。只要没什么事，就没必要和别人一起用餐。`,
        ),
      () => ruby.say_and_wait(`您用餐的样子已经很好看了。哎，这里有饭粒。`),
      () =>
        ruby.say_and_wait(
          `边吃饭边偷看是没有品味的行为，若您有喜欢的服装样式，稍后我可以试穿。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} callname 第一红宝石对玩家的称呼
   */
  async o_s_dating(ruby, callname) {
    const buffer = [];
    buffer.push(
      () => ruby.say_and_wait(`真是美丽的场所，我很喜欢。`),
      () => ruby.say_and_wait(`有时候不禁想感谢与你相遇的缘分呢。`),
      () => ruby.say_and_wait(`这算是你的工作吗？`),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `像是抢劫或是强暴这类案件，大多就是发生在这种地铁街道。哪怕是本格化的${ruby.uma_sex_title}，一不留神，也会惨遭毒手。`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          callname,
          '，比起我，不看车来没来真的不要紧吗？……等！乱动会被别人看到的……',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_s_shopping(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait(
        '这是商城的邀请卡，还有会场的辨识通行卡。场馆很大，不考虑让我牵着你的手吗？',
      ),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          '母亲大人和父亲大人结婚三个月后，便有了身孕。并不是对母婴产品有兴趣。',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  cl_new_year: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '过年的幸福气息，让 ',
        you.get_colored_name(),
        ' 从早上一直兴奋到现在。',
      ]);
      await era.printAndWait(['来个新年第一炮？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 不耐烦地悄悄靠近 ',
        ruby.get_colored_name(),
        ' 身边，脸上用撒娇的神情暗示。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 生气地瞪了 ',
        you.get_colored_name(),
        ' 一眼，挥手示意「滚」。',
      ]);
      await era.printAndWait([
        '她生气地表情格外冷艳美丽，被她驱赶的 ',
        you.get_colored_name(),
        ' 决定？',
      ]);
      era.printButton('回房间睡觉。', 1);
      era.printButton('把露比拦腰抱起。', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '一整晚，',
          you.get_colored_name(),
          ' 辗转反侧、难以入眠。',
        ]);
        await era.printAndWait([
          '最后，',
          you.get_colored_name(),
          ' 流着泪，在厕所打响了新年第一炮。',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 尖叫一声，鞋子没来得及脱就被 ',
          you.get_colored_name(),
          ' 压在床上。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 粗暴地扯开 ',
          ruby.get_colored_name(),
          ' 的上衣，将整个脸颊埋进那微微隆起的柔嫩乳房中摩擦。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 深深吸了一口久违的洁白肌肤的香气。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 接着拉开拉链，让自己憋久了的好兄弟出来透口气。',
        ]);
        await era.printAndWait([
          '不让 ',
          ruby.get_colored_name(),
          ' 逃避，双手在 ',
          ruby.get_colored_name(),
          ' 纤细的腰围上轻轻施压。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 坚挺的下体卡在 ',
          ruby.get_colored_name(),
          ' 光洁狭小的洞口，接着开始不断地穿透稚嫩的通道。',
        ]);
        await era.printAndWait([
          '最后，顶到 ',
          ruby.get_colored_name(),
          ' 小小的子宫内壁而停止，此时仍有部分根杆暴露在空气中。',
        ]);
        await ruby.say_and_wait('会……坏掉！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 的两只小手搭在 ',
          you.get_colored_name(),
          ' 肩膀上发抖，却也不乱动。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 停了下来。']);
        await era.printAndWait([
          '待 ',
          ruby.get_colored_name(),
          ' 稍微习惯后，就捧着她的腰开始滑动。',
        ]);
        await era.printAndWait([
          '由于 ',
          ruby.get_colored_name(),
          ' 的特殊体质，',
          you.get_colored_name(),
          ' 的下体在前进时并不会感到什么负担。',
        ]);
        await era.printAndWait(['感觉就像抱着一个，稍具重量的洋娃娃般轻松。']);
        await era.printAndWait([
          '那里传来的包容感和摩擦感，让 ',
          you.get_colored_name(),
          ' 感觉直上云霄。',
        ]);
        await era.printAndWait([
          '每次顶到 ',
          ruby.get_colored_name(),
          ' 子宫内缘时，她激动的叫喊呻吟总会引 ',
          you.get_colored_name(),
          ' 发笑。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 哀求 ',
          you.get_colored_name(),
          ' 轻一点，慢一点。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 开始加快动腰的节奏，',
          ruby.get_colored_name(),
          ' 的呻吟和叫喊也不断加剧。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 内心的征服欲被挑起。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 在胜者舞台上的歌声，无疑是摄人心魄的天使般的歌声。',
        ]);
        await era.printAndWait([
          '但她现在的娇喘声，只会把 ',
          you.get_colored_name(),
          ' 的灵魂拉落至堕落的地狱。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 还未感觉到欲望的涌起时。',
        ]);
        await era.printAndWait([
          '忽然间，',
          ruby.get_colored_name(),
          ' 全身往后弓去，阴道也在不停地颤抖紧缩。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 拍了拍 ',
          ruby.get_colored_name(),
          ' 可爱的小脸。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 失神了几分钟，才迷迷糊糊地回过神来。',
        ]);
        await era.printAndWait([
          '于是 ',
          you.get_colored_name(),
          ' 的下体又抽送起来。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 脱下 ',
          ruby.get_colored_name(),
          ' 一半的白丝，拿到鼻子端闻着。',
        ]);
        await era.printAndWait([
          '刚脱下的丝袜，带着一股 ',
          ruby.get_colored_name(),
          ' 的香气。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 用力吸着，像在品什么香水一样。',
        ]);
        await ruby.say_and_wait('变态。');
        await era.printAndWait([you.get_colored_name(), ' 加快摇摆的速度。']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 时而上下摇摆，时而左右旋转。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 紧咬嘴唇，像在极力抵抗快感的侵入。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 一直忍到 ',
          ruby.get_colored_name(),
          ' 再次高潮才解放欲望。',
        ]);
        await era.printAndWait(['她失神的样子很夸张，眼泪口水全都流出来了。']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 好心地探出舌头，悉数舔掉。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 想把这段时间的压力，一次性倾倒。',
        ]);
        await era.printAndWait([
          '但 ',
          ruby.get_colored_name(),
          ' 已经软趴趴的一副要死的样子。',
        ]);
        await era.printAndWait([
          '她高潮的样子越来越可爱，皮肤透着潮红的美丽光泽。',
        ]);
        await era.printAndWait(['嘴唇红润的像是似融非融的情趣蜡烛一样。']);
        await era.printAndWait([
          '尤其那对水汪汪的眼睛，湿润朦胧，多看一眼都要被它把灵魂吸进去。',
        ]);
        await era.printAndWait([
          '害怕 ',
          ruby.get_colored_name(),
          ' 断气，再加上自己也有点力不从心，',
          you.get_colored_name(),
          ' 决定来年再战。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await ruby.say_and_wait('想好要什么礼物了吗？');
      era.printButton('「想要你。」', 1);
      await era.input();
      await ruby.say_and_wait('真挚的回答。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 停下了手里的动作，有一丝脸红。',
      ]);
      await ruby.say_and_wait('那就要看你的表现了。');
      await era.printAndWait([
        '你们专门购进了一批圣诞树来装饰，某个角度来说，何尝不是 ',
        ruby.get_colored_name(),
        ' 的孩子心性呢。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 恍惚间发现自己好像从没装饰过圣诞树，但现在要和 ',
        ruby.get_colored_name(),
        ' 一起做了。',
      ]);
      await era.printAndWait(
        '拐杖一样的小糖果，穿了孔的金币，姜饼小子和各式各样的玩具被挂到了枝头。',
      );
      await era.printAndWait([
        '当然还有马蹄铁，',
        ruby.get_colored_name(),
        ' 看来和很中意它。',
      ]);
      await era.printAndWait([
        '然后就是洗漱时间了，虽然 ',
        ruby.get_colored_name(),
        ' 的话模棱两可，但 ',
        you.get_colored_name(),
        ' 看出她还是很期待着今晚。',
      ]);
      await era.printAndWait([
        '安全地洗完澡，',
        ruby.get_colored_name(),
        ' 率先出浴，走进卧室坐在大床边。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也跟了进去，不过 ',
        you.get_colored_name(),
        ' 是抱着 ',
        ruby.get_colored_name(),
        ' 一阵亲啃。',
      ]);
      await era.printAndWait([
        '像麻药一样，',
        you.get_colored_name(),
        ' 只想要更近、更近地抚摸她、亲吻她、舔舐她。',
      ]);
      await era.printAndWait(
        '房间里也做了许多装饰，大床的四根柱子上就系上了优秀素质近似款的丝带。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 随手取下一根，轻松地绑住 ',
        ruby.get_colored_name(),
        ' 的手。',
      ]);
      await era.printAndWait(
        '淡黄色的肌肤透着小麦的健康色泽，腿间的凶器因为近来的频繁使用而变成了深红色。',
      );
      await era.printAndWait('翘起的棒头更有由红转紫的征兆。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 把 ',
        ruby.get_colored_name(),
        ' 的几缕发丝拨到脑后，巨棒离小脸越来越近。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 抬头，对着 ',
        you.get_colored_name(),
        ' 笑了一下，伸出舌头点了点。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的小训练员颤抖起来，欢快地追寻 ',
        ruby.get_colored_name(),
        ' 的嘴。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 很温顺地让 ',
        you.get_colored_name(),
        ' 顶进来，竭尽全力张大嘴才能勉强含住。',
      ]);
      await era.printAndWait(
        '她咽了咽喉头，缓缓退出来，直到只剩下嘴皮还挨着顶端的时候再重新含进去。',
      );
      await era.printAndWait([
        '动作虽然缓慢，',
        you.get_colored_name(),
        ' 却差点爽的大吼出来。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 开始抱住 ',
        ruby.get_colored_name(),
        ' 的头前后耸动。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 稍微挣扎了一下，就竭力配合着 ',
        you.get_colored_name(),
        ' 的节奏。',
      ]);
      await era.printAndWait([
        '换成人类来被 ',
        you.get_colored_name(),
        ' 这样侵犯口腔，不说流血也要脱一层皮。',
      ]);
      await era.printAndWait([
        '过了好一会儿，',
        ruby.get_colored_name(),
        ' 的腮帮都酸了，',
        you.get_colored_name(),
        ' 才堪堪射出来。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 吃不完的部分，便喷在了她的身上。',
      ]);
      await era.printAndWait([
        '一时闭不拢嘴，',
        ruby.get_colored_name(),
        ' 斜眼看着 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton('「露比，对不起。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 搂住爱马的肩，摸摸他可爱的耳朵，亲了下嘴角，才把 ',
        ruby.get_colored_name(),
        ' 哄了回来。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 换了个姿势，背对着 ',
        you.get_colored_name(),
        ' 坐到 ',
        you.get_colored_name(),
        ' 的胸膛上，还故意撅了撅屁股。',
      ]);
      await era.printAndWait([
        '白嫩的两瓣在 ',
        you.get_colored_name(),
        ' 的眼前晃悠，',
        you.get_colored_name(),
        ' 想起刚见面的时候也是被这里吸住了目光。',
      ]);
      await era.printAndWait([
        '抓住臀瓣，',
        you.get_colored_name(),
        ' 忍不住揉捏起来。',
      ]);
      await era.printAndWait('狠狠一抓再放开，再一巴掌拍上去。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 抖了两下，红色的指印马上显现出来，鲜艳极了。',
      ]);
      await ruby.say_and_wait('快点……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 听 ',
        ruby.get_colored_name(),
        ' 的开始伸出舌头舔这个深深的股沟，从上到下，一直滑过一个小凹槽。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 用食指搬开，皱皱的，粉嫩的缩成一团。',
      ]);
      await era.printAndWait([
        '某种肉欲的味道从里面散发出来，引得 ',
        you.get_colored_name(),
        ' 去探索。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 软趴趴地倒在 ',
        you.get_colored_name(),
        ' 腿上，鼻尖是一根屹立不倒的坚挺，她很享受这种温存的感觉。',
      ]);
      await ruby.say_and_wait('今天就到这里吧，我好累。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 失望地望着那里，留恋不已。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} ruby 第一红宝石 */
  async load_talk(ruby) {
    await ruby.say_and_wait('……这就是，您的意愿吗？');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('……我知道了');
    await ruby.say_and_wait([ruby.get_colored_name(), '，会，换一个，训练——']);
    await ruby.print_and_wait(
      `${ruby.sex}扔下没说完的话，跑走了，留下了点点泪痕……`,
    );
  },
  basement_end: (() => {
    const title = '足敏感度高';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('红宝石妈妈……红宝石妈妈……');
      era.println();
      era.print([
        '对于 ',
        you.get_colored_name(),
        ' 来说，这样的生活还是挺好的也说不定？',
      ]);
      era.print(
        '只是，呼吸仍然是不畅通的，脸上套着的是红宝石昨天换下来的白丝袜子，将那本就涣散的光线，诱惑地更加彻底。',
      );
      era.print('尽管是隔着眼皮，梦境也披上了这层薄纱。');
      era.print(
        `在红宝石身上穿过的丝袜，那醉人的气息，馨香的体温勾勒出来朦胧美感，弄得 ${you.name} 心痒难耐。`,
      );
      era.print(
        `就像红宝石那双早已征服 ${you.name} 的玉足，悬停在 ${you.name} 面前，时不时轻轻点在鼻尖上，磨蹭几下，便又抬起。`,
      );
      await era.printAndWait(
        `${you.name} 抬起头试图亲吻那带着体温的脚底、在空虚之时，一次次落下的轻吻，便一次又一次地勾引着 ${you.name} 体内受虐的狂热……`,
      );
      era.println();

      await era.printAndWait('哒，哒，哒……');
      era.println();

      era.print(
        `勾人的节奏，规律般的响起，${you.name} 好像看到，似乎于一片虚无当中，走出了那个让你魂牵梦绕的身影。`,
      );
      era.print(
        `那婀娜的曲线，那妖娆的姿态，还有那迷离的双眸，让 ${you.name} 的心跳更加猛烈。`,
      );
      await era.printAndWait(
        `完全分不清，这到底现实还是梦境，${you.name} 已然忘了自己的经历，仿佛自己此刻不是躺在床上。`,
      );
      era.println();

      await ruby.say_and_wait(
        '小贱狗，就这么喜欢妈妈的味道吗？都彻底射空了，还要妈妈继续欺负你啊？',
      );
      era.println();

      era.print(
        `${you.name} 感觉舌头和口腔已经发麻，脑子里空空的，似乎射到忽略了语言能力一般。`,
      );
      era.print(
        `听到红宝石妈妈的话，${you.name} 情不自禁地傻笑着，后庭的跳蛋也因为电流殆尽停止了工作，一切那般的空旷，都恢复了平淡一样。`,
      );
      era.print(
        `而 ${you.name} 的红宝石妈妈，此时却轻笑着，站起身子，是那般威严，那般充满魅力。`,
      );
      era.print(
        `玉足点在自己胸前的蓓蕾上，将已经满是浊液的白丝，套在自己的脚上，弯下身子，就在 ${you.name} 的胸脯上穿起丝袜。`,
      );
      era.print(
        `粗砺的感觉，又带着一丝惯性的丝滑，${you.name} 舒服得闷哼着，${you.name} 就像找到了生活的意义一样，给红宝石妈妈当足垫，当肉便器，当一只乖乖的贱狗，奉献出自己的精液，似乎也不错。`,
      );
      era.print(
        `${you.name} 感觉自己之前的罪恶，犯下的过错，似乎得到了弥补，${you.name} 享受着这个过程。`,
      );
      await era.printAndWait(
        `被当做鞋垫一般，又看到红宝石妈妈穿上 ${you.name} 最喜欢的黑色皮鞋，那坚硬的花纹，在蓓蕾上碾过，触电一般的感觉，让 ${you.name} 感觉自己躺在云间，躺在黄泉上滋养着。`,
      );
      era.println();

      await ruby.say_and_wait(
        '那么，小贱狗儿子，你就在地上老老实实地躺着吧，红宝石妈妈要去给你找贞操锁了。你以后，只能是红宝石妈妈身边的一条贱狗，只能在命令下屈辱地射精。',
      );
      era.println();

      era.print(
        `这就是心有灵犀吗，${you.name} 的露比，不对，${you.name} 的红宝石妈妈，也已经感知到了她在自己心中现在的分量了。`,
      );
      era.print(
        `${you.name} 也愿意，心甘情愿，心悦诚服，当红宝石妈妈的一条贱狗！`,
      );
      era.print(
        `伴随着一阵脚步声的离去，${you.name} 感觉心口的一块大石也放下了，肉棒这样疲软下来，无论怎么用手去抚摸，都不为所动。`,
      );
      era.print(
        `${you.name} 感觉很累，昏昏沉沉地又睡了过去，似乎这样能让 ${you.name} 继续追随着红宝石妈妈的脚步，能见到红宝石妈妈一样，能够彻底地沉溺于红宝石妈妈的脚下，永恒地闻着红宝石妈妈玉足的气味。`,
      );
      era.print(
        `肉棒又渐渐支了起来，${you.name} 不知自己处于怎样的境况，不知自己身处何处……`,
      );
      await era.printAndWait(
        `但是梦境的最前面，红宝石妈妈，伸着两只妖艳的玉足，翘着脚底在 ${you.name} 面前，温婉地笑着，关注着 ${you.name}……`,
      );
    };
    f.title = title;
    return f;
  })(),
};
