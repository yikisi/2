/**
 * @file 第一红宝石 - 日常
 *
 * @author 梦露
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const RubyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-85');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise>} */
const celebration_handlers = {};

require('#/event/daily/daily-events-85/ero-celebration')(celebration_handlers);

module.exports = class extends CustomizedDaily {
  async celebration() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0),
      date = (era.get('flag:当前回合数') - 1) % 48;
    if (
      ruby.sex_code !== 0 ||
      me.sex_code !== 1 ||
      era.get('love:85') < 75 ||
      !celebration_handlers[date]
    ) {
      return await super.celebration();
    }
    const pregnant_cache = era.get('cflag:85:妊娠阶段');
    await celebration_handlers[date](ruby, me);
    era.set('cflag:85:妊娠阶段', pregnant_cache);
  }

  select() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    let temp;
    if (!sys_check_awake(85)) {
      era.print(
        `${ruby.name} 沉沉睡去，当然还是在 ${me.name} 这罪魁祸首的怀抱里。`,
      );
    } else if ((temp = new RubyLifeMarks()).after_recruit) {
      ruby.say('从今天开始，请多指教。');
      ruby.say('华丽、至上，始终绽放最耀眼的光芒。');
      ruby.say('我会把一族的玉条放在心里，只是勇往直前而已。');
      ruby.say('……以上。');
      temp.after_recruit = 0;
    } else {
      const buffer = [
        () =>
          era.print([
            ruby.get_colored_name(),
            ' 向 ',
            me.get_colored_name(),
            ' 低头致意。',
          ]),
        () =>
          era.print([
            ruby.get_colored_name(),
            ' 像是穿着礼服一样，对 ',
            me.get_colored_name(),
            ' 摆了个提裙礼。',
            { isBr: true },
            '屈膝的同时双膝略微向外打开，并将一只脚后撤。',
            { isBr: true },
            me.get_colored_name(),
            ' 无奈而又做作地在大庭广众之下鞠躬回礼。',
          ]),
      ];
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          era.print([
            ruby.get_colored_name(),
            ' 小憩了一会儿，',
            me.get_colored_name(),
            ' 陪着',
            ruby.sex,
            '一起躺在床上。',
            { isBr: true },
            '窗外凉风习习，没有说话声，只有树枝随风摆动。',
            { isBr: true },
            '悠悠转转苏醒的 ',
            ruby.get_colored_name(),
            ' 在 ',
            me.get_colored_name(),
            ' 怀里伸懒腰，然后坐起来。',
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  }

  good_morning() {
    const buffer = [
      '贵安，就让训练开始吧。',
      '今天也请多多关照。请您彻底地指导我，直到让我达到与过往的族人相称的水平。',
      '既然成为了我的训练员，我想您已经做好了心理准备。希望你能毫无遗憾地发挥你的能力。',
      '要让大家的威光延续下去，必须付出更多的努力。但如果是现在的身体，那也是有可能做到的。',
      '在比赛中取得成果是责任。目的是明确的，既然如此，只有毫不怠慢地前进了。',
      '体育医学会的最新发表当然已经确认过了，之后我们再一起讨论吧？',
      '我不追求单纯的胜利。如果不能留下鲜明的光辉，对我们一族来说就算不得胜利……对吧？',
    ];
    if (era.get('flag:当前声望') >= 500) {
      buffer.push(
        '您已经向人们展示了自己的资格。不需要害怕，也不需要恐惧，只是使命而已。一起致力于把这件事完成吧。',
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push('愿你的道路上，也遍布闪耀的光芒。');
    }
    get_chara_talk(85).say(get_random_entry(buffer));
  }

  async talk() {
    if (!sys_check_awake(85)) {
      return await super.talk();
    }
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    let talk_arr;
    const love = era.get('love:85'),
      motivation = era.get('cflag:85:干劲');
    if (era.get('base:85:体力') < 0.45 * era.get('maxbase:85:体力')) {
      talk_arr = [
        '我今天很累了，恐怕没有能力完全理解您的指示，请见谅。',
        '果然……稍微有点勉强。',
        '没聊完的事情，可以等一下再继续……',
      ];
      if (love >= 75) {
        talk_arr.push(
          '做那个会很累，有打算的话，就空出时间让我沐浴一下。',
          `不知道您知不知道『累』这个字？就是先前某位${
            me.sex_code - 1 ? '女士' : '男士'
          }趴在我身上的状态。`,
        );
      }
    } else if (era.get('cflag:85:育成回合计时') < 3 * 48) {
      switch (motivation) {
        case 2:
          talk_arr = [
            '心存华丽、安身至上。这是未来永劫不变的操守。',
            '要给一族带来更大的荣光。因此，无论是怎样的困难，除了跨越以外，其他的选项是不存在的。',
          ];
          break;
        case 1:
          talk_arr = [
            '是在思考什么锻炼方式吗？',
            '请出示今天的训练菜单。负荷再高，都无所谓！',
          ];
          break;
        case 0:
          talk_arr = [
            '准备，已经做好了。半吊子的训练，就不要拿出来了。',
            '关于训练，我有个建议。请看手边的小册子。',
            '不……不需要顾虑。时间有限，有更应该做的事。',
          ];
          break;
        case -1:
          talk_arr = ['咕……如果要背负家族的话，绝不能……', '不能折断……绝对……'];
          break;
        case -2:
          talk_arr = [
            '今天的状态实在是……必须尽快查明原因。',
            '……感情的浪潮，真是麻烦。',
            '呵……这种程度，嗯……',
          ];
      }
      talk_arr.push(
        '关于明天的安排。原定于明天的聚餐取消了，还请您安排一些追加练习。',
      );
    } else {
      talk_arr = [
        '虽然现在是休息时间。但我还要上家教网课，所以我要先完成外语的作业。',
        '『让处于寒冬的所有人都能展露笑容，以此迎接新年。这就是我的工作。』……父亲大人经常这么跟我说。',
        '老家的蓝宝石——也就是我家的狗，非常聪明。她能知道送来的报纸是给谁的，并且送到对象的手上。',
        '品味、机能性、设计感。这件衣服是满足上述所有标准的最优选择。',
        '您有，事后帮我整理好着装的自信吗？',
        '时刻挺起胸膛，完成每件事情的你，是我们所认可的。',
        '虽然时不时会有人问我类似的问题……实际上，我很少会让女仆帮忙。所有的事情都是我自己解决。',
        '『华丽一族』，大家都是足以配得上这一称号的高洁之人。所以，我也应立于顶点之上。',
        '您是我的训练员。请您认真履行自己的职责，刻苦钻研、孜孜不倦。',
        '母亲大人和奶奶大人，都在赛场上创下了伟业。而想要证明我身上流着她们的血……那就只能通过比赛。',
        '红色的发呆、以及领结。这是能表达我『一定要拿出出彩成绩』这一决心的颜色。',
        '春天我会戴花项链。不同时期穿戴适合的饰品，可以看出那个人物的立场。',
        '我必须要绽放出与我们一族相称的光辉。那是绚烂而辉煌的——如同天蝎之火般的光辉。',
        '衣装也是一种记号。只要有胜者舞台存在，那就需要吸引观众目光的华丽。',
        '睡眠不足会对判断力产生影响。在睡不着的时候，还请您采取喝香草茶之类的方法。',
        '我们一族在睡前有条准则。那就是要反省自己：今天一天是否做到了不辱其名。是重要的时间。',
        '今早的新闻报纸您看了吗？上面有关于我们一族的报道，请您务必看看。',
        '我从小就会起床送忙于奔波的父母出门，所以直到现在，我起床都不需要用闹钟。',
      ];
      if (love >= 75) {
        talk_arr.push('您是我认可的伴侣，请骄傲地抬起头来。');
      }
      if (love >= 90) {
        talk_arr.push(
          '今天是决定一族来年动向的好日子，车来接您的时候，还请千万不要迟到。',
        );
      }
    }
    await ruby.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const talk_arr = [
      '您的援助，非常感谢。',
      '回礼按照我对您的印象来挑选，可以吗？',
    ];
    if (era.get('love:85') >= 75) {
      talk_arr.push(
        '我知道您想说什么，不必觉得害臊。因为在我们这个国家，早婚其实是一件很平常的事情。',
      );
    }
    await get_chara_talk(85).say_and_wait(get_random_entry(talk_arr));
  }

  async office_cook() {
    const ruby = get_chara_talk(85);
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`咕……你那什么表情？我当然也有不擅长的事情。`);
    } else {
      await ruby.say_and_wait([
        '卖相——相当不错。味道也无话可说，您一定能抓住',
        ruby.get_child_sex_title(),
        '子的胃的。',
      ]);
    }
  }

  async office_study() {
    const ruby = get_chara_talk(85),
      buffer = [
        () =>
          ruby.say_and_wait(
            '先慢慢地把结打开，梳的时候注意捏紧发根侧的头发。帮我梳头，不只是一时兴起吧？',
          ),
        () =>
          ruby
            .say_and_wait(
              '处理好人际关系，或者说要想拥有强大人际关系，更重要的是懂得为他人创造价值。',
            )
            .then(() =>
              ruby.say_and_wait(
                '只有为他人创造价值，人际关系才会持久，否则认识再多的人，也是无效社交，因为没有人会记得你。',
              ),
            ),
      ];
    if (ruby.sex_code - 1 && era.get('love:85') >= 90) {
      buffer.push(
        () =>
          ruby
            .say_and_wait(
              '简单地说，只要有规律的性生活，不采取避孕措施，就可以达到很高的受孕率。',
            )
            .then(() =>
              ruby.say_and_wait(
                '正常人类每个月的受孕率只有20-30%，我们马娘在发情期则会提高至少1倍。',
              ),
            ),
        () =>
          ruby
            .say_and_wait(
              '马娘的卵子存活时间比普通人更长，所以并不是一定要在排卵当日同房。',
            )
            .then(() =>
              ruby.say_and_wait(
                '前后2-3天都是极佳的时间，只要您能做到一周5-6次的同房，就不用在意我的排卵日期了。',
              ),
            ),
      );
    }
    await get_random_entry(buffer)();
  }

  async office_rest() {
    const ruby = get_chara_talk(85);
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`就这样别动，肩膀借我下。一会儿，一会儿就好……`);
    } else {
      await ruby.say_and_wait(
        `不重吗？我的发量应该挺大的……嗯！轻、点。对，摸得再温柔点……`,
      );
    }
  }

  async office_game() {
    const ruby = get_chara_talk(85);
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`有趣。我想试试其他的。`);
    } else {
      await ruby.say_and_wait([
        '原来如此，',
        sys_get_colored_callname(85, 67),
        ' ',
        ruby.sex,
        '乐此不疲的缘由，有点眉目了。',
      ]);
    }
  }

  async school_atrium(hook) {
    const ruby = get_chara_talk(85);
    hook.arg = !(await select_action_in_atrium(85));
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await ruby.say_and_wait([
          '您愿意代替它，陪陪我，听我这个软弱的',
          ruby.get_child_sex_title(),
          '诉苦吗？',
        ]);
      } else {
        await ruby.say_and_wait(`先祖们，也会在三女神身旁一起看着我们吧。`);
      }
    } else if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '若无其事地在公众场合和年下',
        ruby.get_child_sex_title(),
        '牵手，了不起。',
      ]);
    } else {
      await ruby.say_and_wait(`不抓这么紧，我也不会擅自跑开的。`);
    }
  }

  async school_rooftop() {
    const ruby = get_chara_talk(85);
    const buffer = [
      () =>
        era.printAndWait([
          get_chara_talk(0).get_colored_name(),
          ' 和 ',
          ruby.get_colored_name(),
          ' 一起享用了管家先生带来的豪华便当。',
        ]),
    ];
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
  }

  async out_river(hook) {
    const buffer = [],
      ruby = get_chara_talk(85);
    hook.arg = (await select_action_around_river(85)) > 0;
    if (hook.arg) {
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
          ruby.say_and_wait(
            '小小年纪就敢穿这么暴露的衣服，真不知道她们在想些什么。想看我穿？拒绝……至少现在不行。',
          ),
        );
      }
    } else {
      buffer.push(
        () => ruby.say_and_wait(`实际上，第一家也有专业的捕鱼团队。`),
        () =>
          ruby.say_and_wait(
            `您听说过雷伊洛斯这个名字吗？不知道，这里的鱼儿还能存在多久。`,
          ),
        () => ruby.say_and_wait(`因为斤两不大所以让我来单独合影？你这家伙……`),
      );
    }
    await get_random_entry(buffer)();
  }

  async out_shopping(hook) {
    const ruby = get_chara_talk(85);
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        if (Math.random() < 0.5) {
          await ruby.say_and_wait(
            `我知道这个，是里见集团最新推出的JRPG。它的起源：《真 · 三女神转生》的大名哪怕是我都有所耳闻。`,
          );
        } else {
          await ruby.say_and_wait(
            `游戏背景的考据非常详细，制作者忠实地呈现故事的设计值得称赞。`,
          );
        }
        break;
      case 1:
        switch (
          get_random_value(0, 1 + (era.get('cflag:85:育成回合计时') >= 96))
        ) {
          case 0:
            await ruby.say_and_wait(
              '什么？嗯，好吧。既然钱都花了，就当是娱乐一下。',
            );
            break;
          case 1:
            await ruby.say_and_wait(
              '我知道母亲大人有位关系莫逆的好友，姦了爱人三天三夜，把他金钱观的偏差给纠正了过来。',
            );
            break;
          case 2:
            await ruby.say_and_wait('抽到了温泉旅行券');
            new RubyEduMarks().hot_spring = 1;
        }
        break;
      case 2:
        if (era.get('love:85') < 75 || Math.random() < 0.5) {
          await ruby.say_and_wait([
            '嗯……',
            sys_get_colored_callname(85, 93),
            ' 当初跟我说的，就是这里没错。隔音材料……绝品。',
          ]);
        } else {
          await ruby.say_and_wait(
            `比夜总会的歌星更胜一筹？稍后请允许我拜访一下您的房间。`,
          );
        }
        break;
      case 3:
        if (era.get('love:85') < 75 || Math.random() < 0.5) {
          await ruby.say_and_wait([
            sys_get_callname(85, 0),
            '。非……非常抱歉，这个……恐怖片，我好像太紧张了，有点……',
          ]);
          await era.printAndWait(`看完电影，椅子上多了一个小水洼。`);
        } else {
          await ruby.say_and_wait([
            '听说是情节精彩而扣人心弦的佳作，',
            sys_get_callname(85, 0),
            '。但考虑到您的前科，请问希望我穿哪款丝袜呢？',
          ]);
        }
    }
  }

  async out_church() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
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
    await ruby.say_and_wait([
      sys_get_callname(85, 0),
      ' 也结束了吗？如果是的话，那么……',
    ]);
    await say_by_passer_by(`神主`, [
      '哎呀，您不是红宝石',
      ruby.get_adult_sex_title(),
      '吗。感谢您的参拜。',
    ]);
    await ruby.say_and_wait(`神主大人。接下来正要去事务性问候。`);
    era.drawLine();
    await ruby.say_and_wait(
      `向神主先生寒暄和结束参拜的礼节，到此全部完成。我们回去吧。`,
    );
  }

  async out_station(hook) {
    const ruby = get_chara_talk(85),
      buffer = [];
    hook.arg = await select_action_in_station(85);
    switch (hook.arg) {
      case 0:
        buffer.push(
          () =>
            ruby.say_and_wait(
              `午饭我是自己一个人吃的。只要没什么事，就没必要和别人一起用餐。`,
            ),
          () => ruby.say_and_wait(`您用餐的样子已经很好看了。哎，这里有饭粒。`),
          () =>
            ruby.say_and_wait(
              `边吃饭边偷看是没有品味的行为，若您有喜欢的服装样式，稍后我可以试穿。`,
            ),
        );
        break;
      case 1:
        buffer.push(
          () => ruby.say_and_wait(`真是美丽的场所，我很喜欢。`),
          () => ruby.say_and_wait(`有时候不禁想感谢与你相遇的缘分呢。`),
          () => ruby.say_and_wait(`这算是你的工作吗？`),
        );
        if (era.get('love:85') >= 50) {
          buffer.push(() =>
            ruby.say_and_wait(
              `像是抢劫或是强暴这类案件，大多就是发生在这种地铁街道。哪怕是本格化的${ruby.get_uma_sex_title()}，一不留神，也会惨遭毒手。`,
            ),
          );
        }
        if (era.get('love:85') >= 75) {
          buffer.push(() =>
            ruby.say_and_wait([
              sys_get_callname(85, 0),
              '，比起我，不看车来没来真的不要紧吗？……等！乱动会被别人看到的……',
            ]),
          );
        }
        break;
      case 2:
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
    }
    return await get_random_entry(buffer)();
  }

  async basement_end() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    if (
      !era.get('talent:85:神之足') ||
      era.get('abl:85:足交技巧') !== 5 ||
      ruby.sex_code === 1 ||
      me.sex_code === 0
    ) {
      return await super.basement_end();
    }
    await me.say_and_wait('红宝石妈妈……红宝石妈妈……');
    era.println();
    era.print([
      '对于 ',
      me.get_colored_name(),
      ' 来说，这样的生活还是挺好的也说不定？',
    ]);
    era.print(
      '只是，呼吸仍然是不畅通的，脸上套着的是红宝石昨天换下来的白丝袜子，将那本就涣散的光线，诱惑地更加彻底。',
    );
    era.print('尽管是隔着眼皮，梦境也披上了这层薄纱。');
    era.print(
      `在红宝石身上穿过的丝袜，那醉人的气息，馨香的体温勾勒出来朦胧美感，弄得 ${me.name} 心痒难耐。`,
    );
    era.print(
      `就像红宝石那双早已征服 ${me.name} 的玉足，悬停在 ${me.name} 面前，时不时轻轻点在鼻尖上，磨蹭几下，便又抬起。`,
    );
    await era.printAndWait(
      `${me.name} 抬起头试图亲吻那带着体温的脚底、在空虚之时，一次次落下的轻吻，便一次又一次地勾引着 ${me.name} 体内受虐的狂热……`,
    );
    era.println();

    await era.printAndWait('哒，哒，哒……');
    era.println();

    era.print(
      `勾人的节奏，规律般的响起，${me.name} 好像看到，似乎于一片虚无当中，走出了那个让你魂牵梦绕的身影。`,
    );
    era.print(
      `那婀娜的曲线，那妖娆的姿态，还有那迷离的双眸，让 ${me.name} 的心跳更加猛烈。`,
    );
    await era.printAndWait(
      `完全分不清，这到底现实还是梦境，${me.name} 已然忘了自己的经历，仿佛自己此刻不是躺在床上。`,
    );
    era.println();

    await ruby.say_and_wait(
      '小贱狗，就这么喜欢妈妈的味道吗？都彻底射空了，还要妈妈继续欺负你啊？',
    );
    era.println();

    era.print(
      `${me.name} 感觉舌头和口腔已经发麻，脑子里空空的，似乎射到忽略了语言能力一般。`,
    );
    era.print(
      `听到红宝石妈妈的话，${me.name} 情不自禁地傻笑着，后庭的跳蛋也因为电流殆尽停止了工作，一切那般的空旷，都恢复了平淡一样。`,
    );
    era.print(
      `而 ${me.name} 的红宝石妈妈，此时却轻笑着，站起身子，是那般威严，那般充满魅力。`,
    );
    era.print(
      `玉足点在自己胸前的蓓蕾上，将已经满是浊液的白丝，套在自己的脚上，弯下身子，就在 ${me.name} 的胸脯上穿起丝袜。`,
    );
    era.print(
      `粗砺的感觉，又带着一丝惯性的丝滑，${me.name} 舒服得闷哼着，${me.name} 就像找到了生活的意义一样，给红宝石妈妈当足垫，当肉便器，当一只乖乖的贱狗，奉献出自己的精液，似乎也不错。`,
    );
    era.print(
      `${me.name} 感觉自己之前的罪恶，犯下的过错，似乎得到了弥补，${me.name} 享受着这个过程。`,
    );
    await era.printAndWait(
      `被当做鞋垫一般，又看到红宝石妈妈穿上 ${me.name} 最喜欢的黑色皮鞋，那坚硬的花纹，在蓓蕾上碾过，触电一般的感觉，让 ${me.name} 感觉自己躺在云间，躺在黄泉上滋养着。`,
    );
    era.println();

    await ruby.say_and_wait(
      '那么，小贱狗儿子，你就在地上老老实实地躺着吧，红宝石妈妈要去给你找贞操锁了。你以后，只能是红宝石妈妈身边的一条贱狗，只能在命令下屈辱地射精。',
    );
    era.println();

    era.print(
      `这就是心有灵犀吗，${me.name} 的露比，不对，${me.name} 的红宝石妈妈，也已经感知到了她在自己心中现在的分量了。`,
    );
    era.print(
      `${me.name} 也愿意，心甘情愿，心悦诚服，当红宝石妈妈的一条贱狗！`,
    );
    era.print(
      `伴随着一阵脚步声的离去，${me.name} 感觉心口的一块大石也放下了，肉棒这样疲软下来，无论怎么用手去抚摸，都不为所动。`,
    );
    era.print(
      `${me.name} 感觉很累，昏昏沉沉地又睡了过去，似乎这样能让 ${me.name} 继续追随着红宝石妈妈的脚步，能见到红宝石妈妈一样，能够彻底地沉溺于红宝石妈妈的脚下，永恒地闻着红宝石妈妈玉足的气味。`,
    );
    era.print(
      `肉棒又渐渐支了起来，${me.name} 不知自己处于怎样的境况，不知自己身处何处……`,
    );
    await era.printAndWait(
      `但是梦境的最前面，红宝石妈妈，伸着两只妖艳的玉足，翘着脚底在 ${me.name} 面前，温婉地笑着，关注着 ${me.name}……`,
    );
  }

  async load_talk() {
    const ruby = get_chara_talk(85);
    await ruby.say_and_wait('……这就是，您的意愿吗？');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('……我知道了');
    await ruby.say_and_wait([ruby.get_colored_name(), '，会，换一个，训练——']);
    await ruby.print_and_wait(
      `${ruby.sex}扔下没说完的话，跑走了，留下了点点泪痕……`,
    );
  }
};
