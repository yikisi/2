/**
 * @file 北部玄驹 - 日常
 * @author 小黑（原作）
 * @author 黑奴一号 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} daiya 里见光钻
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_3 北部玄驹对东海帝王的称呼
   * @param {PrintedSpan} call_7 北部玄驹对黄金船的称呼
   * @param {PrintedSpan} call_44 北部玄驹对东商变革的称呼
   * @param {PrintedSpan} call_67 北部玄驹对里见光钻的称呼
   * @param {PrintedSpan} call_98 北部玄驹对小林历奇的称呼
   * @param {PrintedSpan} call_301 北部玄驹对骏川缰绳的称呼
   */
  good_morning(
    kita,
    daiya,
    you,
    callname,
    call_3,
    call_7,
    call_44,
    call_67,
    call_98,
    call_301,
  ) {
    const buffer = [];
    buffer.push(
      () => kita.say(['今天的身体也没有异常，', callname, '，开始训练吧！']),
      () =>
        kita.say([
          '虽然不像 ',
          call_3,
          ' 那么强，不过我会努力变强证明自己的！',
        ]),
      () =>
        kita.say([
          '为了迎接比赛这样的大日子，',
          callname,
          '，请尽情地训练我，让我得到独属于我的武器吧。',
        ]),
      () => {
        kita.say([
          '最近，',
          call_67,
          ' ',
          kita.sex,
          '总是拉着我去吃各种奇妙的料理呢，比如菠菜咖喱啊，巧克力火锅啊……',
        ]);
        kita.say([
          '……虽然都是很有趣的料理，不过 ',
          call_67,
          ' 带我去的店是不是有点奇怪过头了？',
        ]);
        era.print([
          kita.get_colored_name(),
          ' 捂着微微发胖的肚子，露出了疑惑的表情。',
        ]);
      },
      () => {
        kita.say([call_44, ' 最近似乎学会了炼金术的样子，真是厉害啊～']);
        era.print([
          kita.get_colored_name(),
          ' 笑眯眯地和 ',
          you.get_colored_name(),
          ' 说着身边发生的趣事。',
        ]);
      },
      () => {
        kita.say([
          callname,
          ' 最近似乎运气不太好的样子？这种时候，就要找可靠的 ',
          call_98,
          ' 改运了哦！',
        ]);
        era.print([
          '一边自说自话着，',
          kita.get_colored_name(),
          ' 咻嗒嗒地跑走了。',
        ]);
      },
      () => {
        kita.say([call_3, ' 似乎在看着我的训练呢，好，那么我也要努力不能输！']);
        era.print([
          '燃起信念的 ',
          kita.get_colored_name(),
          '，开始认真的准备起今天的训练了。',
        ]);
      },
      () => {
        kita.say([
          '最近，',
          call_301,
          ' 似乎在买新的护发剂的样子呢，',
          callname,
          ' 有好好护理头发么？',
        ]);
        era.print([
          '一边揉搓着 ',
          you.get_colored_name(),
          ' 的头发，',
          kita.get_colored_name(),
          ' 露出了太阳般炽热的笑容。',
        ]);
      },
    );
    if (era.get('love:68') >= 90) {
      buffer.push(
        () => {
          kita.say([
            '最近，总感觉 ',
            callname,
            ' 指导我的声音变得离不开了呢。',
          ]);
          kita.say(
            '下达指令的时候心脏就会砰砰直跳，完成命令的时候就会想要被夸奖，简直就像祭典一样的兴奋了呢。',
          );
          era.print([
            kita.get_colored_name(),
            ' 戳着手指，脸蛋微微泛起了红晕。',
          ]);
        },
        () => {
          kita.say([
            '最近我在挑战用尾巴能不能举重，',
            callname,
            '可以陪我一起尝试么？',
          ]);
          era.print([
            '用尾巴缠住 ',
            you.get_colored_name(),
            ' 小腿的 ',
            kita.get_colored_name(),
            '，用开玩笑般的语气对 ',
            you.get_colored_name(),
            ' 说道。',
          ]);
        },
        () => {
          kita.say('呀～热身了一下后全身都是臭烘烘的汗呢～');
          kita.say('今天晚上也要唰地跳进澡堂的热水里，里里外外洗个干净呢！');
          era.print([
            kita.get_colored_name(),
            ' 抬起手臂闻着腋下的味道，那湿漉漉的光滑腋窝在 ',
            you.get_colored_name(),
            ' 面前一览无余',
          ]);
        },
        () => {
          kita.say([
            callname,
            '，这周末我们一起去雪山训练吧！',
            '没关系，时间上来不及的话就让我抱着训练员跑回来吧！一定不会迟到的！',
          ]);
          era.print([
            '跃跃欲试的 ',
            kita.get_colored_name(),
            '，对 ',
            you.get_colored_name(),
            ' 动手动脚了起来。',
          ]);
        },
      );
    } else if (era.get('love:68') >= 75) {
      buffer.push(
        () => {
          kita.say([
            '深空之中的黑色烟火！魔法少女玄色！这样的口号，能让变革同学喜欢的吧？',
          ]);
          era.print([
            kita.get_colored_name(),
            ' 转了个圈，摆出了今年光之美少女的变身pose。',
          ]);
        },
        () => {
          kita.say('为了下一次的比赛，一定要加倍努力，锻炼出独属于我的武器！');
          era.print([
            '斗志昂扬的 ',
            kita.get_colored_name(),
            '，准备好今天的训练了。',
          ]);
        },
        () => {
          kita.say(
            '最近，桐生院训练员似乎在苦恼钢之意志没有人愿意学这件事呢。',
          );
          kita.say([
            '而且不知为何 ',
            call_67,
            ' 也一脸认真地赞同了，这是为什么啊？',
          ]);
        },
        () => {
          kita.say([
            callname,
            '就是我的助人大将呢，所以一直以来谢谢',
            callname,
            '了哦！诶嘿嘿！',
          ]);
          era.print([
            kita.get_colored_name(),
            ' 笑着贴了过来，黑色的马耳扑扇扑扇地敲着 ',
            you.get_colored_name(),
            ' 的脖颈。',
          ]);
        },
      );
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        () => {
          kita.say([
            '只是闻到',
            callname,
            '的味道，胸口就小鹿乱撞似的停不下来了呢。',
          ]);
          kita.say('这种心情，到底是怎么回事呢？');
          era.print([
            kita.get_colored_name(),
            ' 用尾巴敲打着 ',
            you.get_colored_name(),
            ' 的小腿，露出了难以言说的表情。',
          ]);
        },
        () => {
          kita.say(['唔，昨天和 ', call_7, ' 并跑后，脚总是有点疼……']);
          kita.say([callname, ' 可以帮我看看么？']);
          era.print([
            '脱下靴子的 ',
            kita.get_colored_name(),
            '，把那双肥嫩白皙的小脚抬到 ',
            you.get_colored_name(),
            ' 面前。',
          ]);
        },
        () => {
          kita.say([
            '在特雷森学园的时候，',
            callname,
            '一直都对我非常照顾呢！',
          ]);
          kita.say(
            '但是，毕业后这段照顾的时间就要结束了吧，所以在毕业之前，我要好好的回报训练员才是！',
          );
          era.print([
            '在不经意间流露出感慨表情的 ',
            kita.get_colored_name(),
            '，为了 ',
            you.get_colored_name(),
            ' 变得更加努力了。',
          ]);
        },
      );
      if (kita.sex_code !== 1) {
        buffer.push(() => {
          kita.say([
            '最近，',
            call_67,
            ' 似乎每天晚上都会蒙着被子在床上发出奇怪的声音',
          ]);
          kita.say(['而且胸部也变大了不少呢，是因为在学校太寂寞了么？']);
          era.print([
            '露出单纯表情的 ',
            kita.get_colored_name(),
            '，在 ',
            daiya.get_colored_name(),
            ' 到来前咻嗒嗒地跑走了。',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  select(kita, you, callname) {
    if (era.get('base:68:体力') < era.get('maxbase:68:体力') / 3) {
      kita.say('啊嘞……我的体力应该还能继续才对啊？');
      era.print([
        kita.get_colored_name(),
        ' 大口大口地喘着粗气，似乎已经没有力气训练了。',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => {
          kita.say([
            '唔唔唔……对不起 ',
            callname,
            '！因为扭到脚的相扑力士需要帮忙所以迟到了！',
          ]);
          era.print([
            kita.get_colored_name(),
            ' 双手合十，但似乎对帮上忙的自己相当自豪的样子。',
          ]);
        },
        () => {
          kita.say([
            '今天总算是没有迟到了呢，',
            callname,
            '～那么事不宜迟，让我们开始训练吧',
          ]);
          era.print([
            '已经累出一身汗的 ',
            kita.get_colored_name(),
            '，笑眯眯地对 ',
            you.get_colored_name(),
            ' 说。',
          ]);
        },
      );
      if (era.get('love:68') >= 75) {
        buffer.push(() => {
          kita.say('最近，总感觉被训练员命令后的身体热乎乎的……');
          kita.say([callname, '，可以多要求我一点么？']);
          era.print([
            kita.get_colored_name(),
            ' 的脸蛋微微泛红，直到 ',
            you.get_colored_name(),
            ' 指出才慌慌张张地捂着脸跑走了。',
          ]);
        });
      } else if (era.get('love:68') >= 50) {
        buffer.push(
          () => {
            kita.say([
              '嘿咻嘿咻，嘿嘿～今天 ',
              callname,
              ' 的训练也很厉害呢，但我是不会认输的！',
            ]);
            era.print([
              kita.get_colored_name(),
              ' 最近似乎对训练十分认真的样子，在得到指令后不久就想要下一次指令了。',
            ]);
          },
          () => {
            kita.say(['最近，总感觉对 ', callname, ' 一见钟情了……']);
            kita.say([callname, ' 对小北我，也会是这样的情感么？']);
            era.print([
              '在 ',
              you.get_colored_name(),
              ' 身边小声嘀咕着什么的 ',
              kita.get_colored_name(),
              '，在 ',
              you.get_colored_name(),
              ' 凑近后便摇着头笑着跑开了。',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          kita.say([
            '想要让 ',
            callname,
            ' 夸奖，想要让 ',
            callname,
            ' 在胜利之后对我露出微笑。',
          ]);
          kita.say(['所以说', callname, '，今天的训练也请您不要留情哦！']);
          era.print([
            '露出笑容的 ',
            kita.get_colored_name(),
            '，似乎如同往日一样没什么改变。',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} kita 北部玄驹 */
  async office_study(kita) {
    const buffer = [
      () => kita.say_and_wait('要指导我的文学吗？好，我一定会加倍努力的！'),
      () => kita.say_and_wait('唔唔唔……就算努力不会数学也还是不会啊……'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  async office_prepare(kita, teio, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait(
          '把蜂蜜倒入一小勺，而后木瓜切片倒入……好！比赛前的准备之一做好了！',
        );
        await era.printAndWait([
          '这样笑着对 ',
          you.get_colored_name(),
          ' 说的',
          kita.get_colored_name(),
          '，在之后为了不浪费粮食把蜂蜜水全部给 ',
          teio.get_colored_name(),
          ' 喝掉了。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '在帮我钉蹄铁么？诶嘿嘿～这种小事让我自己来就好啦～',
        ]);
        await era.printAndWait([
          '这么说着的 ',
          kita.get_colored_name(),
          '，用手指把蹄铁上的钉子一个一个摁了进去。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '在加速的时候要控制好重心，原来如此，能够做到的话下次就能胜利了呢。',
        );
        await era.printAndWait([
          '认真的看着白板上的计划书，',
          kita.get_colored_name(),
          ' 按照 ',
          you.get_colored_name(),
          ' 的方案立刻出去跑了一圈。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  async talk(kita, callname) {
    const buffer = [];
    switch (era.get('cflag:68:干劲')) {
      case -2:
        buffer.push(
          () => kita.say_and_wait('啊嘞？明明我的长处就是韧性十足……来着吧？'),
          () =>
            kita.say_and_wait([
              '对不起',
              callname,
              '，平时训练的力气……好像消失不见了……',
            ]),
        );
        break;
      case -1:
        buffer.push(
          () => kita.say_and_wait('嗯嗯……用不上力气，好奇怪啊……'),
          () => kita.say_and_wait('那个……总感觉晕乎乎的？'),
        );
        break;
      case 0:
        buffer.push(
          () => kita.say_and_wait('不管是什么样的训练，都咚咚咚的解决吧'),
          () =>
            kita.say_and_wait([callname, '，让训练开始吧！我已经准备好了哦！']),
        );
        break;
      case 1:
        buffer.push(
          () => kita.say_and_wait('即使是比平常还要厉害的训练，也不在话下'),
          () =>
            kita.say_and_wait([
              '我可是韧性十足的哦，',
              callname,
              '，请把我努力训练成兵器一样的存在吧！',
            ]),
        );
        break;
      case 2:
        buffer.push(
          () => kita.say_and_wait('呼呼，顺着这个气势的话，什么都能做到！'),
          () =>
            kita.say_and_wait('感觉脚好轻，思路好快，今天的小北我很厉害哦！'),
        );
        break;
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  async office_cook(kita, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          callname,
          '，不好好吃饭用泡面对付可不行啊，就算要吃也要吃点菜叶子啊。',
        ]);
        await era.printAndWait([
          '像妈妈一样的 ',
          kita.get_colored_name(),
          '，在经 ',
          you.get_colored_name(),
          ' 同意后把菠菜和白菜放进了小锅里。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '诶诶？要在训练员室吃火锅么？不愧是大人，真是大胆啊。',
        );
        await era.printAndWait([
          '用敬畏的眼神盯着自热火锅的 ',
          kita.get_colored_name(),
          '，就像只看到新奇事物的小黑猫一样。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '商店街的大家送了我一些快过赏味期的面包和牛奶，要不要一起做三明治吃呢？',
        );
        await era.printAndWait([
          '一边说着，',
          kita.get_colored_name(),
          ' 搬出一箱快过期的面包。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  async office_rest(kita, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait(
          '要休息么？没事啦没事，小北我的身体可是结实的很哦。',
        );
        await kita.say_and_wait(['比起这个', callname, '，还是接着训练吧！']);
        await era.printAndWait([
          '这样敲打着胸脯露出笑容的 ',
          kita.get_colored_name(),
          '，在 ',
          you.get_colored_name(),
          ' 的命令下还是乖乖的休息了。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '，我真的不累啦……所以不午睡也是可以的哦……',
        ]);
        await era.printAndWait([
          '轻轻嘟囔着的 ',
          kita.get_colored_name(),
          '，在躺下之后不久后就睡了过去。',
        ]);
      },
      async () => {
        await kita.say_and_wait('恰啦啦～今天也要好好训练～');
        await kita.say_and_wait('不能因为休息太久散漫下来～恰啦啦～');
        await era.printAndWait([
          '躺在沙发上握着油性笔当麦克风，',
          kita.get_colored_name(),
          ' 轻声唱起了歌。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_67 北部玄驹对里见光钻的称呼
   */
  async office_game(kita, you, callname, call_67) {
    const buffer = [
      async () => {
        await kita.say_and_wait(['唔唔……是要玩 ', call_67, ' 家的游戏啊……']);
        await era.printAndWait([
          '兴致勃勃的 ',
          kita.get_colored_name(),
          '，在看到是Ｓ〇ＧＡ游戏机之后立刻垂下了耳朵。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '唔噢噢噢～我通常召唤洗衣龙女！随机堆墓三张牌！',
        );
        await era.printAndWait([
          '一边说着，',
          kita.get_colored_name(),
          ' 将洗衣龙女盖在场上，把光之创造神堆进了墓地。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '',
          callname,
          '！我们来玩骰子吧！很有意思的哦！',
        ]);
        await kita.say_and_wait(
          '在老家的时候我经常和东城会的大哥哥玩这个呢，诶嘿嘿～',
        );
        await era.printAndWait([
          '用手指抓起骰子，',
          kita.get_colored_name(),
          ' 在 ',
          you.get_colored_name(),
          ' 面前玩起了 ',
          you.get_colored_name(),
          ' 从没见过的「捞」骰子游戏。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  async o_r_fishing(kita, you, callname) {
    await era.printAndWait(['和 ', kita.get_colored_name(), ' 相约去钓鱼……']);
    const buffer = [
      async () => {
        await kita.say_and_wait('索兰索兰索兰！呦～！');
        await era.printAndWait(
          '但不知道为什么从钓鱼变成在金枪鱼船上钓金枪鱼了！？',
        );
        await era.printAndWait([
          '在风口浪尖平均可达到六米高度差距的捕鱼船上，',
          kita.get_colored_name(),
          ' 用超乎寻常的力量收着捕鱼网。',
        ]);
        await era.printAndWait([
          '那堪称绝景的身影和几个月的工作，永远地烙印在了 ',
          you.get_colored_name(),
          ' 脑海中。',
        ]);
      },
      async () => {
        await kita.say_and_wait(['又钓上来了一条！', callname, '看到了么？']);
        await era.printAndWait([
          '不愧是黑',
          kita.elder_sibling_sex_title,
          '，真是太厉害了！稚嫩的赞美声不绝于耳。',
        ]);
        await era.printAndWait([
          kita.get_colored_name(),
          ' 开心的摇着尾巴，甩着粉红色的儿童鱼竿将鱼标扔进水里。',
        ]);
        await kita.say_and_wait('诶嘿咯～诶呦嘿～索兰索兰！');
        await era.printAndWait([
          '唱着捕鱼的号子，',
          kita.get_colored_name(),
          ' 那炽热耀眼的姿态深深烙印在了 ',
          you.get_colored_name(),
          ' 眼中。',
        ]);
      },
      async () => {
        await kita.say_and_wait('哼哼哼～哼哼哼哼哼～');
        await era.printAndWait([
          kita.get_colored_name(),
          ' 轻声哼着歌，安静的等待着鱼儿上钩的时候',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  async o_r_walking(kita, you, callname) {
    const buffer = [
      () =>
        kita.say_and_wait(
          '河边的空气好清新啊，而且凉嗖嗖的，这样的天气最适合跑步了～',
        ),
      () =>
        kita.say_and_wait('河边长出了一丛芦苇荡呢！简直就像回到了老家一样呢。'),
      async () => {
        await kita.say_and_wait(
          '没想到在河边散步也会碰到摔伤的格斗家呢，搬运的工作就交给我吧！',
        );
        await kita.say_and_wait([
          '诶？不是摔伤更像是被打伤的？',
          callname,
          '真会开玩笑呢～这只是寻常的扭伤哦～',
        ]);
        await era.printAndWait([
          '打着哈哈的 ',
          kita.get_colored_name(),
          '，背着受伤的格斗家轻轻一跃跳过了数米长的河流。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_3 北部玄驹对东海帝王的称呼
   * @param {PrintedSpan} call_13 北部玄驹对目白麦昆的称呼
   */
  async o_s_arcade(kita, you, callname, call_3, call_13) {
    const buffer = [
      async () => {
        await kita.say_and_wait([callname, '，我要上了哦！花鸟风月哦哦哦哦！']);
        await era.printAndWait([
          '轻快地敲击着按键，',
          kita.get_colored_name(),
          ' 操控的花之妖怪一跃而起，将黑曜石武术家的肋骨打断了。',
        ]);
      },
      async () => {
        await kita.say_and_wait('唔唔唔，这个夹娃娃机的松紧度是……');
        await era.printAndWait([
          '把脸蛋贴在夹娃娃机上好几分钟的 ',
          kita.get_colored_name(),
          '，终于掏出硬币投了进去。',
        ]);
      },
      async () => {
        await era.printAndWait([
          '和 ',
          kita.get_colored_name(),
          ' 一起去了街机厅……',
        ]);
        await kita.say_and_wait([
          call_3,
          ' 和 ',
          call_13,
          ' 的玩偶！特雷森附近的抓娃娃机终于也有供货了！',
        ]);
        await era.printAndWait(
          '虽然是这么说，但是目标并不是街机厅，而是街机厅里的抓娃娃机呢。',
        );
        await era.printAndWait([
          '在熬过了长龙般的人海之后，依旧兴致勃勃的 ',
          kita.get_colored_name(),
          ' 掏出几枚硬币塞进了投币口里。',
        ]);
        await era.printAndWait([
          '但是那略显粗糙的技术却让 ',
          you.get_colored_name(),
          ' 不由得有些担心起来，',
          kita.get_colored_name(),
          ' 似乎只是抓娃娃机的新手，真的能够抓到心爱的娃娃么…？',
        ]);
        await kita.say_and_wait(
          '今天的小北我可是抱着就算钱包掏空也要抓到娃娃的气势来的！不抓回娃娃可不行哦！',
        );
        await era.printAndWait([
          '看着 ',
          kita.get_colored_name(),
          ' 气势汹汹的样子，',
          you.get_colored_name(),
          '忍不住叹了口气，走到',
          kita.teen_sex_title,
          '身旁替',
          kita.sex,
          '握住了操作杆。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_44 北部玄驹对东商变革的称呼
   * @param {PrintedSpan} call_67 北部玄驹对里见光钻的称呼
   * @param {boolean} hot_spring 是否抽中温泉旅行券
   */
  async o_s_drawing(kita, you, callname, call_44, call_67, hot_spring) {
    await era.printAndWait([
      '与 ',
      kita.get_colored_name(),
      ' 一同参加了商店街组织的抽奖活动……',
    ]);
    if (hot_spring) {
      await kita.say_and_wait(
        '唔唔，因为平时帮助商店街的大家行善所以免费得到的抽奖机会……不会辜负！',
      );
      await era.printAndWait('咕噜咕噜咕噜咕噜……');
      await era.printAndWait('biu～');
      await era.printAndWait('获得了商店街的奖品：【温泉旅行券】！');
      await kita.say_and_wait('好耶！特等奖！是特等奖哦训练员！哈哈哈哈！');
      await kita.say_and_wait(
        '啊，但是这个是商店街的大家友情赠送的啊……抽到这么好的东西真的好么？',
      );
      await era.printAndWait([
        '在商店街的大家微笑着的宽慰中，',
        kita.get_colored_name(),
        ' 有些不好意思地把温泉旅行券收下了。',
      ]);
    } else {
      const buffer = [
        async () => {
          await kita.say_and_wait(
            '路过的花山组的大哥送我的抽奖券……能抽到什么呢？',
          );
          await era.printAndWait('咕噜咕噜咕噜咕噜……');
          await era.printAndWait('biu～');
          await era.printAndWait('获得了商店街的奖品：【普通的纸巾】！');
          await kita.say_and_wait('啊呜，是纸巾啊，作为奖品也是不错的选择呢……');
          await kita.say_and_wait(
            '果然还是要以弄坏转盘，甚至转怪桌子的气势转么……',
          );
          await era.printAndWait([
            kita.get_colored_name(),
            ' 接过了纸巾，失落的垂头丧气。',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            call_67,
            ' 在商店街购物后送给我的抽奖券，让我试试看吧！',
          ]);
          await era.printAndWait('咕噜咕噜咕噜咕噜……');
          await era.printAndWait('biu～');
          await era.printAndWait('获得了商店街的奖品：【胡萝卜】！');
          await kita.say_and_wait(
            '呜……只有一根胡萝卜么？太便宜以至于有点不甘心呢……',
          );
          await kita.say_and_wait(
            '啊！但是也可以用胡萝卜做演唱会的麦克风啊！诶嘿嘿～',
          );
          await era.printAndWait([
            '握着胡萝卜走在街上开心地唱着歌的 ',
            kita.get_colored_name(),
            '，在这之后嘎嘣嘎嘣地把萝卜吃掉了。',
          ]);
        },
        async () => {
          await kita.say_and_wait(
            '哇啊，抽奖诶～正好有居委会的阿姨送的抽奖券，训练员我们试试吧！',
          );
          await era.printAndWait('咕噜咕噜咕噜咕噜……');
          await era.printAndWait('biu～');
          await era.printAndWait('获得了商店街的奖品：【一筐胡萝卜】！');
          await kita.say_and_wait('好，好多！分量都够一两顿饭了诶！');
          await era.printAndWait([
            '看着绕起胡萝卜山转着圈，决定把胡萝卜分给大家的',
            kita.get_colored_name(),
            '，',
            you.get_colored_name(),
            '偷偷抽了一根出来，以免',
            kita.teen_sex_title,
            '忘记了自己的那份。',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            '诶嘿嘿，是 ',
            call_44,
            ' 买了餐巾纸后送我的抽奖券，会抽到什么东西呢？',
          ]);
          await era.printAndWait('咕噜咕噜咕噜咕噜……');
          await era.printAndWait('biu～');
          await era.printAndWait('获得了商店街的奖品：【特等胡萝卜汉堡排】！');
          await kita.say_and_wait(
            '好豪迈的料理啊！而且分量也好大！快有一口大锅那么大了啊！',
          );
          await era.printAndWait([
            '到底是哪来的这么大块肉排啊！',
            you.get_colored_name(),
            ' 一边吐槽着，一边在 ',
            kita.get_colored_name(),
            ' 的鼓动下，拿出手机去邀请其他的孩子一起消灭肉排了。',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_44 北部玄驹对东商变革的称呼
   */
  async o_s_ktv(kita, you, callname, call_44) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '啊啊啊～嗯！发声练习正常！',
          callname,
          '，我这就开始训练唱歌了哦！',
        ]);
        await era.printAndWait([
          '握紧了麦克风，',
          kita.get_colored_name(),
          ' 像往常那样唱起了老家的演歌。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '今天不仅要训练唱歌也要训练舞步哦，',
          callname,
          '要看好了！沙吧嗒吧嗒～',
        ]);
        await era.printAndWait([
          '踮着脚转起了圈，',
          kita.get_colored_name(),
          ' 蹦跳着模仿起了帝王的舞步。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '被 ',
          call_44,
          ' 推荐了黑金属音乐呢，虽然还没听过不过今天就来试试唱吧……',
          '诶，不行？为什么啊',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '想要尝试不同音乐类型的 ',
          kita.get_colored_name(),
          ' 气呼呼的说。',
        ]);
      },
    ];
    if (era.get('love:68') >= 75) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '呜哇啊啊啊……这……这首曲子好过分！',
          callname,
          '不许听！',
        ]);
        await era.printAndWait([
          '听了带着黄色风格的歌词之后，',
          you.get_colored_name(),
          ' 和 ',
          kita.get_colored_name(),
          ' 立刻慌慌张张地换了首曲子。',
        ]);
      });
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        async () => {
          await kita.say_and_wait([
            '怎么样',
            callname,
            '，有没有被小北我的歌喉震撼到呢？',
            '为什么要露出这样的表情？我有什么地方做错了么？',
          ]);
          await era.printAndWait([
            '在不知多少次听到 ',
            kita.get_colored_name(),
            ' 对 ',
            you.get_colored_name(),
            ' 唱出情歌又毫无自觉之后，',
            you.get_colored_name(),
            ' 露出了近乎觉悟的表情。',
          ]);
        },
        async () => {
          await kita.say_and_wait([callname, '，我唱的怎么样呢，诶嘿嘿……']);
          await era.printAndWait([
            '在得到 ',
            you.get_colored_name(),
            ' 发自真心的赞叹之后，用尾巴拍打着 ',
            you.get_colored_name(),
            ' 的 ',
            kita.get_colored_name(),
            ' 合拢双腿，轻轻磨蹭了起来。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_98 北部玄驹对小林历奇的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(kita, you, callname, call_98, dice) {
    await era.printAndWait([
      '今天，',
      you.get_colored_name(),
      ' 同 ',
      kita.get_colored_name(),
      ' 一同前往神社。尽管今天是休息的日子，',
      you.get_colored_name(),
      ' 还是陪伴着担当一起来到了神社前',
    ]);
    await era.printAndWait(
      '毕竟是为了兴致勃勃的担当，也是为了下次比赛的祈福，多劳累一点也是好的。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' 这么想着，穿过鸟居走进 ',
      kita.get_colored_name(),
      ' 带 ',
      you.get_colored_name(),
      ' 来的这件神社。',
    ]);
    era.println();
    era.printButton('「没什么人呢。」', 1);
    await era.input();
    await era.printAndWait('这件看起来相当古旧的神社此时相当冷清。');
    await era.printAndWait([
      '不仅来人只有 ',
      you.get_colored_name(),
      ' 和 ',
      kita.get_colored_name(),
      ' 两个，就连神社的神官和巫女也看不到影子。',
    ]);
    await era.printAndWait('这里真的靠谱么……？这样的疑问不禁浮上心头。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 看着沉默不言的担当掏出几枚硬币，向赛钱箱里投下后拍了拍手双手合十，小声地祈祷着什么。',
    ]);
    if (dice < 0.6) {
      await kita.say_and_wait('呼哇，太好了～');
      await era.printAndWait([
        '黑发的',
        kita.uma_sex_title,
        '长吁了一口气，开心的拍了拍胸脯，露出了阳光般灿烂的笑容。',
      ]);
      await kita.say_and_wait([
        '因为是 ',
        call_98,
        ' 推荐的特别灵验的神社，所以刚刚一直都不太敢说话呢～',
      ]);
      await era.printAndWait('原来是因为这个才一直不说话么……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 叹了口气，轻轻敲了敲身边担当的脑袋。',
      ]);
      await era.printAndWait([
        '不知是不是心理作用，',
        you.get_colored_name(),
        ' 确实感觉到身体轻快了不少。',
      ]);
      await era.printAndWait([
        '下次也来继续参拜吧，',
        you.get_colored_name(),
        ' 不由得如此想到。',
      ]);
    } else {
      await kita.say_and_wait([
        '抽到了不太好的签子呢……但是没关系，去找 ',
        call_98,
        ' 尝试转运的仪式吧！',
      ]);
      await era.printAndWait([
        '看到 ',
        kita.get_colored_name(),
        ' 一如既往活泼的样子，',
        you.get_colored_name(),
        ' 不由得感觉到一阵阵的欣慰。',
      ]);
      await era.printAndWait('……但是，还是有点烦躁啊。');
    }
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_67 北部玄驹对里见光钻的称呼
   * @param {PrintedSpan} call_98 北部玄驹对小林历奇的称呼
   */
  async o_s_restaurant(kita, you, callname, call_67, call_98) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '呼啊啊～',
          call_67,
          ' 推荐的拉面店果然分量十足呢，我开动了哦！',
        ]);
        await era.printAndWait([
          '大口大口地吃着牛肉拉面，',
          kita.get_colored_name(),
          ' 露出了幸福的表情。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '那就是 ',
          call_98,
          ' 推荐的中华料理店呢，',
          callname,
          '，今天就在这里吃炒饭吧！',
        ]);
        await era.printAndWait([
          '被强拉着走进看起来相当老旧的料理店后，',
          you.get_colored_name(),
          ' 和 ',
          kita.get_colored_name(),
          ' 扶着墙走出来了。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '诶嘿嘿，最近在商店街帮忙拿到了烤肉店的优惠券呢，要一起去吃么？',
        );
        await era.printAndWait([
          '一起享用了大份油滋滋的滚烫烤肉拌饭之后，',
          kita.get_colored_name(),
          ' 肉眼可见的心情愉快了起来。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '！上周隔壁街开了一家新的炸猪排店呢。',
        ]);
        await kita.say_and_wait(
          '听说那家店不仅分量十足，就连花山组的大哥也会拍手称赞呢，我们去试试吧！',
        );
        await era.printAndWait([
          '担当推荐的确是一间分量十足的好店，但是这份好心情在看到 ',
          kita.get_colored_name(),
          ' 鼓起的肚子后消失的无影无踪了。',
        ]);
      },
    ];
    if (era.get('love:68') >= 90) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '今天，要吃鳗鱼饭呢……嘿嘿，',
          callname,
          '要干劲十足哦～',
        ]);
        await era.printAndWait([
          '坐在身旁的 ',
          kita.get_colored_name(),
          ' 依偎在 ',
          you.get_colored_name(),
          ' 的肩头，在 ',
          you.get_colored_name(),
          ' 看不见的地方露出了害羞的表情。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   * @param {PrintedSpan} call_3 北部玄驹对东海帝王的称呼
   * @param {PrintedSpan} call_13 北部玄驹对目白麦昆的称呼
   * @param {PrintedSpan} call_67 北部玄驹对里见光钻的称呼
   */
  async o_s_dating(kita, you, callname, call_3, call_13, call_67) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '呜哇～商店街今天有攀岩比赛呢～',
          callname,
          '想尝试一下么？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 目视着远处正在热身的大相扑力士，总算是拦住了准备去报名的 ',
          kita.get_colored_name(),
          '。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '那家就是 ',
          call_67,
          ' 常来的美容店呢，嘿嘿～稍微有些感兴趣了……',
        ]);
        await era.printAndWait([
          '站在门口偷偷观察着内饰的 ',
          kita.get_colored_name(),
          '，最后还是没有下定决心走进美容店',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '好漂亮的纪念品店呢，会不会有 ',
          call_3,
          ' 和 ',
          call_13,
          ' 的纪念品呢？',
        ]);
        await era.printAndWait([
          '虽然这家店铺看起来有些老旧，但既然 ',
          kita.get_colored_name(),
          ' 很有兴趣，那就一起去逛一逛吧。',
        ]);
      },
    ];
    if (era.get('love:68') >= 90) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '只是和',
          callname,
          '一起走在街上，就感觉好放松啊～哼哼哼～',
        ]);
        await kita.say_and_wait([callname, '，可以多陪我走一走么？']);
        await era.printAndWait([
          '轻轻挽住 ',
          you.get_colored_name(),
          ' 的胳膊，',
          kita.get_colored_name(),
          ' 愉快靠在 ',
          you.get_colored_name(),
          ' 肩膀上。',
        ]);
      });
    } else if (era.get('love:68') >= 75) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '这个时间点商店街的人流量很大呢，',
          callname,
          '可要小心注意不要走丢了哦。',
        ]);
        await era.printAndWait([
          '悄悄握紧 ',
          you.get_colored_name(),
          ' 的手，',
          kita.get_colored_name(),
          ' 摇晃着耳朵，如同一只黑色的导盲犬般走在 ',
          you.get_colored_name(),
          ' 前面。',
        ]);
      });
    } else if (era.get('love:68') >= 50) {
      buffer.push(async () => {
        await kita.say_and_wait(
          '没想到特雷森附近居然有牧场呢，下次一起来看看吧～',
        );
        await era.printAndWait([
          '踮起脚尖望着围栏里的样子，',
          kita.get_colored_name(),
          ' 兴奋的哼起了歌。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
   */
  good_night_normal(kita, you, callname) {
    era.print([
      '繁忙的一天结束，',
      you.get_colored_name(),
      ' 将 ',
      kita.get_colored_name(),
      ' 送到学生宿舍门口……',
    ]);
    if (era.get('love:68') >= 50) {
      kita.say(['诶嘿嘿，', callname, '明天见哦！']);
      era.print([
        '一边说着，',
        kita.get_colored_name(),
        ' 狠狠地在 ',
        you.get_colored_name(),
        ' 身上蹭了蹭，而后哒哒哒地跑走了。',
      ]);
    } else {
      kita.say([callname, '，今天真是辛苦您了，明天我也会继续努力的。']);
      era.print([
        kita.get_colored_name(),
        ' 深深地向 ',
        you.get_colored_name(),
        ' 鞠了一躬，',
        you.get_colored_name(),
        ' 摸了摸 ',
        kita.get_colored_name(),
        ' 的脑袋，在看到',
        kita.sex,
        '走进宿舍后才转身离开。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kita 北部玄驹
   * @param {CharaTalk} you 玩家
   * @param {1|2} check 晚安求爱判定，=2是大成功，无法拒绝
   */
  async good_night_sex(kita, you, check) {
    era.print([
      '繁忙的一天结束，',
      you.get_colored_name(),
      ' 将 ',
      kita.get_colored_name(),
      ' 送到学生宿舍门口……',
    ]);
    era.print([
      you.get_colored_name(),
      ' 刚想和往常一样告别，但 ',
      kita.get_colored_name(),
      ' 却一反常态地不让 ',
      you.get_colored_name(),
      ' 离开',
    ]);
    era.printButton('接收暗示', 1);
    era.printButton('装傻', 2, { disabled: check === 2 });
    return await era.input();
  },
  punishment_1: (() => {
    const title = '惩戒之后';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await kita.say_and_wait('呜哇啊～训练员变成了马娘了！好可爱～');
      if (kita.sex_code !== 1) {
        await kita.say_and_wait(
          '诶嘿嘿～同样是马娘总感觉没有以前那么害羞了呢～',
        );
      }
      await era.printAndWait([
        '抱住 ',
        you.get_colored_name(),
        ' 亲昵的蹦来蹦去，偷偷露出兴奋表情的 ',
        kita.get_colored_name(),
        ' 笑了起来。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  punishment_3: (() => {
    const title = '惩戒之后';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(
        '明明小北才是那个有被欺负癖好的孩子，哼哼～但是没想到训练员远比我想被欺负呢。',
      );
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 耳边轻声细语着说，黑色的',
        kita.uma_sex_title,
        '露出了注视猎物般的眼神。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = '情人节的清香味道';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        '情人节，也名为圣瓦伦汀节，是互有好感的男女们互相赠送礼物的节日。',
      );
      await era.printAndWait(
        '在社会层面上，这是男女情侣们互相你侬我侬的粘稠日子。',
      );
      await era.printAndWait(
        '但是在校园里，这又是学生们展示甜品和无差别给同学们分发巧克力的日子，大家都开心快乐的吃着甜点，同时也不忘给老师一份。',
      );
      await era.printAndWait([
        '在放下七八份照顾过的学生和同事送来的巧克力之后，',
        you.get_colored_name(),
        ' 坐在办公桌后，准备工作。',
      ]);
      await kita.say_and_wait([callname, '，在这里么？']);
      await kita.say_and_wait([
        '嘿嘿嘿～情人节快乐 ',
        callname,
        '！这个是小北我送 ',
        callname,
        ' 的礼物哦！',
      ]);
      await era.printAndWait([
        '一边说着，',
        kita.get_colored_name(),
        '将手中的礼物递给 ',
        you.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 拆开包装，露出里面的黑色巧克力。',
      ]);
      await era.printAndWait([
        '是件很不错的礼物呢，在 ',
        kita.get_colored_name(),
        ' 期待的目光下，',
        you.get_colored_name(),
        ' 咬了一口巧克力，轻轻拍了拍',
        kita.teen_sex_title,
        '的小脑袋。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '圣诞节的特别菜单';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        '圣诞节的特雷森，就如同过去的十几年那样一如既往的吵闹。',
      );
      await era.printAndWait([
        '此时，',
        you.get_colored_name(),
        ' 和 ',
        kita.get_colored_name(),
        ' 就像其他人一样，在食堂里欢庆着节日，享受着食堂的节假日特别菜单。',
      ]);
      await kita.say_and_wait(
        '唔姆姆……两份大薯条，四份炸鸡块和鸡肉汉堡，还要两杯可乐……',
      );
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 身边，',
        you.get_colored_name(),
        ' 的担当踮起脚尖看着柜台后的菜单，毫不顾忌地点着热量相当之高的食品。',
      ]);
      await era.printAndWait([
        '看来要加大日后的训练力度了……',
        you.get_colored_name(),
        ' 在心底里的笔记本上默默记上了一笔。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '地狱般的演歌祭典';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait('哒，哒，哒。');
      await era.printAndWait([
        kita.get_colored_name(),
        ' 的脚步声一如既往地准时在门外响起，伴随着一同响起的是',
        kita.uma_sex_title,
        '欢快的歌声。',
      ]);
      await kita.say_and_wait([callname, '，中午好哦，有没有好好吃饭啊？']);
      await era.printAndWait(
        '向两侧拉开拉门，映入眼帘的是小北那有如阳光般温暖的表情。',
      );
      await era.printAndWait([
        '但同时，那也是 ',
        you.get_colored_name(),
        ' 最大的债主那无比愉快的，令 ',
        you.get_colored_name(),
        ' 倍感压力的笑容。',
      ]);
      await kita.say_and_wait(
        '唔嘿嘿～再过几个月大概就可以恢复正常生活，回到特雷森学园了。',
      );
      await kita.say_and_wait(
        '只是借债了这么点钱真是太好了呢，还在小北我稍微能处理的范畴内。',
      );
      await kita.say_and_wait(
        '但是以后要借债的话，只要找小北我借债就好了哦，毕竟其他的借债都很不正经啊。',
      );
      await era.printAndWait([
        '微笑着慢慢握住 ',
        you.get_colored_name(),
        ' 的手，『不求回报的』',
        kita.get_colored_name(),
        '露出的表情，绝不是 ',
        you.get_colored_name(),
        ' 不付出任何代价就能迎来的Happy ending。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
