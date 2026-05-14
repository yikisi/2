/**
 * @file 黄金船 - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {number} b_escape 从地下室的逃脱方式，为 0 时是正常状态
   */
  good_morning(gs, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say('少侠果真好身手，竟然乘小金船不注意的时候就溜走了。');
          gs.say([
            { color: gold_color, content: '呵呵，下次得加紧严防了哪……' },
          ]);
          break;
        case escape_enum.beat:
          gs.say('不愧是你啊，竟然正面打败了金船大魔王。');
          gs.say([
            {
              color: gold_color,
              content: '那么厉害的勇者应该不会害怕更多挑战的，你说对吗？',
            },
          ]);
          break;
        case escape_enum.strike:
          gs.say('呵呵呵，没想到竟然栽在你手里了。');
          gs.say([{ color: gold_color, content: '『下次』可得更努力点哦。' }]);
      }
    } else if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        gs.say('好累啊……累得就像蝉生已经到达第二周的蝉子一样……');
      } else {
        gs.say('我不行啦～求你啦……今天就放个假吧。');
      }
    } else {
      const buffer = [
        () =>
          gs.say([
            {
              color: gold_color,
              content: 'RED・HOT・小金船出场！我要让这个世界染成一片火红！！！',
            },
          ]),
        () => {
          gs.say('今天有什么行程吗？练习相扑吗？');
          gs.say([
            {
              color: gold_color,
              content: '好哦，交给我吧！',
            },
          ]);
        },
        () => gs.say('下次要不吐着舌头跑步好了'),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                '哦，你放假是吧？放假是吧？！跟我一起去尚蒂伊的森林探险吧！',
            },
          ]),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                '我一开始只是想着『有个看起来很闲的家伙……』哦。不过，遇到我之后，你的人生有趣了很多对吧？',
            },
          ]),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   * @param {number|false} b_escape 从地下室的逃脱方式，为 0 时是正常状态，为 false 时表示玩家睡着了所以不会触发相应对话
   */
  select_awake(gs, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say([callname, ' 是那种会自己溜出去玩，然后自觉回家的宠物吗？']);
          gs.say([{ color: gold_color, content: '也好，省得麻烦。' }]);
          break;
        case escape_enum.beat:
          gs.say('呵呵呵，没想到竟然栽在你手里了。');
          gs.say([{ color: gold_color, content: '『下次』可得更努力点哦。' }]);
          break;
        case escape_enum.strike:
          gs.say('喂喂，对自己的爱马下手那么狠，也太绝情了吧？');
          gs.say([
            {
              color: gold_color,
              content: '不过小金船我可能喜欢有魄力的训练员呢❤️',
            },
          ]);
      }
    } else {
      if (Math.random() < 0.5) {
        gs.say('噢！你找本金船大人有事吗？');
      } else {
        gs.say('跟本金船大人走吧！');
      }
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async office_study(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '你知道吗？有一种打工的内容就是往面团上打洞然后做成甜甜圈。那玩意可厉害了……在虚无感这方面……',
      );
    } else {
      await gs.say_and_wait(
        '你知道吗？三文鱼虽然看起来是红色的，但其实是白身鱼哦……在生物学的定义上。',
      );
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async office_prepare(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '嗨呀～人人有功练哟～有功夫无懦夫哦～',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '今天，我便要踏上太阳系第九行星了！上吧，训练员！',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async talk(gs) {
    if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        await gs.say_and_wait('好累啊……累得就像蝉生已经到达第二周的蝉子一样……');
      } else {
        await gs.say_and_wait('我不行啦～求你啦……今天就放个假吧。');
      }
    } else {
      const buffer = [];
      switch (era.get('cflag:7:干劲')) {
        case -2:
          buffer.push(
            () => gs.say_and_wait('糟糕……意识融化掉嘞……'),
            () => gs.say_and_wait('呜哇……好困……你完事了就叫我起来吧……'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              gs.say_and_wait('嗯…啊啊，训练员……？抱歉，在想『eraUMA』的事……'),
            () => gs.say_and_wait('唏唷唏唷……！不行啊……提不起劲！'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `哦，要打架吗？可以啊，来打啊！`,
                },
              ]),
            () => gs.say_and_wait('咋——？要是有预定日程的话我姑且听一下。'),
          );
          break;
        case 1:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `你再不干点啥，${
                    era.get('cflag:7:性别') === 1 ? '老子' : '老娘'
                  }就随便溜街去咯——！`,
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `喂喂，我能不能开跑啊！？再不让我跑的话，我的精力就要被浪费掉了！`,
                },
              ]),
          );
          break;
        case 2:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    '快点……快点对我下达指示！我已经迫不急待了，搞快点！！！',
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: '黄金船大・喷・火！干劲MAX，真是嗨到不行啦！！！',
                },
              ]),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async office_gift(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('官人你也真是坏心眼哦～嗬嗬嗬～');
    } else {
      await gs.say_and_wait([
        '怎么会这样……竟然送小金船这么贵重的礼物……',
        {
          content: '好！那我也要好好跑给你看！',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async office_cook(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '嗯？阿训要请我吃饭吗？',
        {
          color: gold_color,
          content: '什么，是那种中学特有的便宜营养套餐！不要啊！！！',
        },
      ]);
    } else {
      await gs.say_and_wait([
        '训练员，把盐传给我吧！',
        {
          color: gold_color,
          content: '呜哦，好香的炒面味！',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async office_rest(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('阿船我已经心累了——抱我——');
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '——吓！！！',
        },
        '数着数着蚂蚁，就不小心失去意识了……',
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async office_game(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '阿训～今天要玩什么？《赛马娘大亨》？《URA2K》？还是说……',
        { color: gold_color, content: '小、金、船？' },
      ]);
    } else {
      await gs.say_and_wait([
        '阿训，',
        { color: gold_color, content: '世嘉三四郎在窗外看着我们哎。' },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async s_a_tree_hollow(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去了枯树洞……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        `${gs.uma_sex_title}啊，要到了最后关头才能落泪哦……」`,
      );
    } else {
      await gs.say_and_wait([
        '假如三女神在听着的话，',
        {
          content: '她们的耳膜是否还安好呢？',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async s_a_dating(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去约会了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '你说回忆吗？……真怀念我们一起在海底度过的七天假期啊～',
      );
    } else {
      await gs.say_and_wait([
        '讨厌～衣袂摆来摆去的好羞人哦～',
        {
          color: gold_color,
          content: '喂，好好盯着老娘看啊。',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async s_r_lunch(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一起吃了便当……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait('这个土豆泥好吃吧？是用粉末泡出来的哦。');
    } else {
      await gs.say_and_wait([
        '看我这份完美的宝塔肉！真是一份精雕细琢的',
        {
          color: gold_color,
          content: '……梅菜扣肉啊。',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async o_r_fishing(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去钓鱼了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '钓鱼讲究的是精神力……是与自己进行的斗争！而当我成功钓上老辣的水池之主时，我的内心便已然战胜『氯』了！',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '呼呼～我在衣服下还穿了防弹背心，不论天上掉鱼叉还是三文鱼都伤不了我分毫哦！',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async o_r_walking(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去散步了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '糟了，忘了把房间里养着的画纸交给别人寄养！哎呀，要是我不在的话它会很寂寞的……',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '只要遥望赛道后面那远方的天空，就能看到老身的故乡黄金星哦……嗬嗬嗬……',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   */
  async o_s_arcade(gs, callname) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去了街机厅……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait('噢啦！看我一爪子把这些家伙全部抓……掉光了？！');
    } else {
      await gs.say_and_wait([callname, '！我没子弹了，快掩护我！呜哦！']);
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   */
  async o_s_drawing(gs, callname) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去抽奖了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        callname,
        {
          content: '！快给我钱，我的十连之心已经无法停止了！！！',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait(
        '你说我们会不会抽到乘坐超小型潜艇探索泰坦尼克残骸的旅行券啊？',
      );
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   */
  async o_s_ktv(gs, callname) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去了卡啦OK……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '任谁都会被你夺去眼球～♪你就是完美且究极的～',
        {
          content: '盖塔！！！',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '现在的年轻人连Nico Nico超组曲都没听过……',
        callname,
        ' 你还是个小少爷啊……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   */
  async o_s_movie(gs, callname) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去看电影了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '哦！这不是重炮爸爸演出的电影吗？',
        callname,
        ' 要一起看吗？',
      ]);
    } else {
      await gs.say_and_wait([
        '最近的超级英雄电影都好无聊啊……',
        {
          content: '有了，我们就来拍一部《归来的黄金船》吧！',
          color: gold_color,
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(gs, you, dice) {
    await gs.say_and_wait([{ color: gold_color, content: '哈——唏唷唏唷！' }]);
    await era.printAndWait([
      '只见 ',
      gs.get_colored_name(),
      ' 在人家神社的大门口开始如从劲风下的草根一样摇摆，嘴中念念有词。',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: `放${gs.uma_sex_title}过来！放${gs.uma_sex_title}过来！`,
      },
    ]);
    era.printButton('「你在干嘛呢？」', 1);
    await era.input();
    await gs.say_and_wait([
      { color: gold_color, content: '看了还不懂吗？我在跳大神啦。' },
    ]);
    await era.printAndWait([
      gs.sex,
      '一脸得意洋洋的表情让 ',
      you.get_colored_name(),
      ' 觉得有点烦躁，但',
      gs.sex,
      '并没有在意',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: '古往今来，在神的面前舞蹈以取悦神明是常识吧！',
      },
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: '我这个神的宠儿黄金船来蹦个迪，那请神上身也湿湿碎嘞！',
      },
    ]);
    await era.printAndWait([
      '此时，',
      gs.get_colored_name(),
      ' 浑身僵住，双目圆瞪！',
    ]);
    if (dice < 0.8) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '耶稣啊！我已明白祢的意愿了，祢要我『吃好睡好，保持心境开朗』是吧！',
        },
      ]);
      await era.printAndWait([
        '右脸抽搐着的 ',
        you.get_colored_name(),
        ' 很想吐槽为什么神社会有耶稣，也很想吐槽耶稣的指示活像是临终关怀。',
      ]);
      await era.printAndWait(`但${gs.sex}看起来挺开心的，随${gs.sex}去吧。`);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '佛祖哦！祢为何离弃我？！竟要我『好好听训练员的话』……',
        },
      ]);
      await era.printAndWait([
        '看到 ',
        gs.get_colored_name(),
        ' 失落的姿态，',
        you.get_colored_name(),
        ' 左脸上的神经也不住抽搐。',
      ]);
      await era.printAndWait(`但只要${gs.sex}能乖乖听话，那也没什么不好的……`);
      await era.printAndWait('……不行，还是有点烦躁。');
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async o_s_restaurant(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去吃饭了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '要喝咖啡吗？',
        {
          color: gold_color,
          content: '我帮你把牛奶换成辣・油・哦♪',
        },
      ]);
    } else {
      await gs.say_and_wait([
        '说起来，米浴那家伙竟然是面包派的……',
        {
          color: gold_color,
          content: `难道${gs.sex}是自己的黑子吗？！`,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async o_s_dating(gs) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去约会了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait('我说，你一百年后有空吗？有空的话咱们一起上太空。');
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '你可不要从小金船身上移开视线哦！不然我也不知道一秒之后会发生什么事！',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   */
  async o_s_shopping(gs, callname) {
    await era.printAndWait(['与 ', gs.get_colored_name(), ' 一同去逛商场了……']);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '我说 ',
        callname,
        '，要不要牵个手？',
        {
          color: gold_color,
          content: '……那边的店有情侣八折哦！',
        },
      ]);
    } else {
      await gs.say_and_wait([
        callname,
        '，哪怕是我也不会做出在麦当劳点原味鸡这种行为吧？',
      ]);
    }
  },
  /** @param {CharaTalk} gs 黄金船 */
  async load_talk(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '你要使用『那个』吗？记得不要滥用哦，',
        {
          content: '毕竟玩弄时空的人最后都会遭到时空连续性的报应呢。',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '我知道『那个』确实很方便啦，但有时候',
        {
          content: '顺其自然会更好玩吧，不是吗？',
          color: gold_color,
        },
      ]);
    }
  },
  slave_end: (() => {
    const title = '金钱奴隶';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        '办公室里，',
        you.get_colored_name(),
        '坐在办公桌前尴尬地看向西装笔挺戴着眼镜，正在敲打计算器键盘的',
        gs.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        gs.sex,
        '看了看TN-LCD显示屏上浮现的数字，俏眉一竖，为难地看向',
        you.get_colored_name(),
        '。',
      ]);
      era.println();
      await gs.say_and_wait('客人啊，你这么点马币连这个月的利息都填不完哪。');
      era.println();
      await gs.say_and_wait(
        '哪怕你想要下跪哭诉，说自己会努力还钱，敝公司还是蒙受了损失。',
      );
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        ' 开口，',
        gs.sex,
        '手上的计算器显示了一个让人胆寒的数字。',
      ]);
      await era.printAndWait([
        gs.sex,
        '提起笔在一张废纸的背面上写写画画，内容不外乎「沉没成本」、「资产挪用」、「行政费用」云云。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '无奈地低下头，沉默不语——根本没有辩驳的余地。',
      ]);
      era.println();
      await gs.say_and_wait('唉，你得明白小金船银行不是做慈善活计的。');
      era.println();
      await era.printAndWait([
        '然而',
        gs.sex,
        '语气一转，顿时从假装关心客户的从业员摇身一变，成了极力引诱眼前猎物步入陷阱的甜美诱饵。',
      ]);
      era.println();
      await gs.say_and_wait([
        '「但你有没有兴趣参与一个……',
        { color: gold_color, content: '说不定能让你一口气逆转人生的游戏？' },
      ]);
      era.println();
      await era.printAndWait([
        '为了抓紧唯一快速偿还贷款的救命稻草，',
        you.get_colored_name(),
        '被黄金船带上了一艘名为《希望金船》的游轮……',
      ]);
      await era.printAndWait([
        '至于要如何于危险的玩命赌局中生还，已经不是随波逐流的',
        you.get_colored_name(),
        '能决定的了。',
      ]);
      era.println();
      await era.printAndWait([
        '因被金钱关系所囚，',
        you.get_colored_name(),
        '迎来了结局……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  basement_end: (() => {
    const title = '情爱囹圄';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        '张开了眼睛，四周的光线黯淡，唯有头上一盏散发黄光的电灯泡在卖力工作。',
      ]);
      await era.printAndWait([
        '在一阵努力后，',
        you.get_colored_name(),
        '意识到手脚上的金属镣铐无法单凭蛮力摆脱。',
      ]);
      await era.printAndWait([
        '在',
        you.get_colored_name(),
        '面前靠左一点的地上安置着一台老旧的真空管电视，',
        you.get_colored_name(),
        '总感觉自己已经料到了接下来将会发生什么。',
      ]);
      era.println();
      await era.printAndWait('果不其然，伴随一阵刺耳的喀哒声， 屏幕亮起。');
      await era.printAndWait([
        '上面映照出了一尊小',
        gs.uma_sex_title,
        '人偶，其脸上戴着诡异的面具。',
      ]);
      await era.printAndWait([
        '人偶移动到某个角度时，',
        you.get_colored_name(),
        '能看见它的身下有某人的手在摆弄着。',
      ]);
      era.println();
      await gs.say_as_unknown_and_wait([
        '你好，',
        you.get_colored_actual_name(),
        '。我想跟你玩一个游戏——',
      ]);
      era.println();
      await era.printAndWait([
        '这是一段经过重度失真处理的',
        gs.sex_code === 1 ? '男声' : '女声',
        '，但',
        you.get_colored_name(),
        '不需要什么软件辅助都能猜得出来始作俑者是谁。',
      ]);
      era.println();
      await gs.say_and_wait([
        '长久以来，你一直忽视与自己签下契约的',
        gs.uma_sex_title,
        '，导致',
        gs.sex,
        '的恋心无处安放。',
      ]);
      era.println();
      await gs.say_and_wait([
        {
          color: gold_color,
          content: `现在，那位${gs.uma_sex_title}将会进房与你决一死战。`,
        },
      ]);
      era.println();
      await era.printAndWait(
        '屏幕上随意摆动着的人偶被放下，一个熟悉的身影从底下露了出来。',
      );
      await era.printAndWait([gs.sex, '对着镜头嫣然一笑，做了个鬼脸。']);
      await era.printAndWait([
        '只见',
        gs.sex,
        '张开拳头，一连串避孕套包装如瀑布般落下，然后便离开了镜头拍摄的范围。',
      ]);
      era.println();
      await era.printAndWait('门锁打开了。');
      era.println();
      await era.printAndWait([
        '被黄金船的爱意所囚禁，',
        you.get_colored_name(),
        '迎来了结局……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
