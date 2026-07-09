/**
 * @file 奇锐骏 - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {number} slavery 奴役类型，0-通常，1-奴役对方，2-强奸过对方/调教中，3-被奴役（性奴/孕袋）
   */
  good_morning(acute, callname, slavery) {
    const buffer = [
      () =>
        acute.say(
          '哎呀呀……看来是有在认真的工作呢～要吃一点刚腌好的糖拌红西柿吗？补充了足够的糖分，下午的训练也能够打起精神哦。',
        ),
      () =>
        acute.say([
          callname,
          ' 穿的衣服很单薄呢……到秋天的话，要多穿一点衣服哦。要是穿的太少了感冒了的话，可是会很难受的哦。',
        ]),
      () =>
        acute.say([
          '等训练结束了之后啊，我想要去腌些嘎吱嘎吱干呢。这样等到了明天，',
          callname,
          ' 就可以拿这些嘎吱嘎吱干分享给其他好孩子，跟',
          acute.couple_title,
          '搞好关系了吧？',
        ]),
      () =>
        acute.say([
          '哎呀呀……看起来很精神呢，',
          callname,
          '，是发生了什么好事了吗？呼吼吼……看来要帮你准备红豆饭了呢～',
        ]),
      () =>
        acute.say([
          '哎呀呀……看起来很精神呢，',
          callname,
          '，是发生了什么好事了吗？呼吼吼……看来要帮你准备糖拌红西柿了呢～',
        ]),
      () =>
        acute.say([
          '哎呀呀……看起来很精神呢，',
          callname,
          '，是发生了什么好事了吗？呼吼吼……看来要帮你准备红烧鲤鱼了呢～',
        ]),
      () =>
        acute.say([
          '哎呀呀……看起来很精神呢，',
          callname,
          '，是发生了什么好事了吗？呼吼吼……看来要帮你准备嘎吱嘎吱干了呢～',
        ]),
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say('室内、天台、车站，还是训练场，不管是哪里都可以的哦？');
          era.print([
            '如果是需要其他孩子的话，我也可以来帮忙的。虽然对其他人来说，第一次可能会有一点点痛，但只要能温柔一些的话，其他孩子也会因为本能而理解',
            callname,
            '的魅力所在呢。',
          ]);
        });
        break;
      case 2:
        buffer.push(() =>
          acute.say(
            '呼呼～这次可不会这么轻易地被你推到在身下了哦？我对自己的拳法可是蛮有自信的呢。',
          ),
        );
        break;
      case 3:
        buffer.push(() =>
          acute.say([
            '今天的嘎吱嘎吱干我已经做好了，放在了冰箱里。要记得按时吃哦？要是又因为营养不良导致脱水而昏过去了可不行呢，',
            callname,
            '❤️～',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {number} slavery 奴役类型，0-通常，1-奴役对方，2-强奸过对方/调教中，3-被奴役（性奴/孕袋）
   */
  select(acute, you, callname, slavery) {
    const buffer = [
      () =>
        acute.say([
          '哎呀哎呀……',
          callname,
          '～不去跟其他年轻可爱的好孩子们聊天了吗？',
        ]),
      () => {
        acute.say('早上好哦，早饭已经吃了吗？不可以不吃早饭的哦。');
        acute.say(
          '如果还没有吃的话，我推荐纳豆拌饭，或者是稀饭配嘎吱嘎吱干哦～对身体可好了。',
        );
      },
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say('呼呼呼～今天也要去散步吗？那样的话，要带上其他的孩子吗？');
          era.print([
            '赤身全裸的 ',
            acute.get_colored_name(),
            ' 安静地趴伏在地面之上，直到 ',
            you.get_colored_name(),
            ' 靠近，',
            acute.sex,
            '才一面左右摇晃着耳朵，一面将项圈叼在嘴里递往 ',
            you.get_colored_name(),
            ' 的手边。',
          ]);
        });
        break;
      case 2:
        buffer.push(() => {
          acute.say('唔姆姆……败者就是要服从胜者，这是自然界的必然呢。');
          era.print([
            '如此说着，',
            acute.get_colored_name(),
            ' 平静地为自己戴上了今日份的项圈。',
          ]);
        });
        break;
      case 3:
        buffer.push(() => {
          acute.say(['阿拉拉……要忍耐住哦？', callname, '～']);
          era.print([
            '按着 ',
            you.get_colored_name(),
            ' 燥热的小腹并不时往下探索，',
            acute.get_colored_name(),
            ' 的脸上是意味深长的笑容。',
          ]);
        });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async office_study(acute, you) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('要学习吗～？嗯……得好好努力～');
      await era.printAndWait([
        '坐在客厅里，捧着一本「五年赛马，三年模拟」的 ',
        you.get_colored_name(),
        '，正向 ',
        acute.get_colored_name(),
        ' 讲解着习题——',
      ]);
    } else {
      await acute.say_and_wait('哇啊啊啊～学习原来是这么困难的事情啊……');
      await era.printAndWait([
        '面对着摊开在面前的「五年赛马，三年模拟」一向温和的 ',
        acute.get_colored_name(),
        ' 难得的露出了困扰的神色。',
      ]);
      await era.printAndWait([
        '或是新奇，或是恶趣，',
        you.get_colored_name(),
        ' 不禁苦笑出了声——',
      ]);
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async office_prepare(acute) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait('下一场比赛吗？……嗯～该采取什么战术呢？');
    } else {
      await acute.say_and_wait('哦呀？要去下一次比赛的赛场转转吗？');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_301 奇锐骏对骏川缰绳/丰收时刻的称呼
   * @param {number} slavery 奴役类型，0-通常，1-奴役对方，2-强奸过对方/调教中，3-被奴役（性奴/孕袋）
   */
  async talk(acute, you, callname, call_301, slavery) {
    const buffer = [];
    if (era.get('cflag:100:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:100:干劲')) {
        case -2:
          buffer.push(
            () => acute.say_and_wait('……唏唷唷……完全使不上劲呢～'),
            () =>
              acute.say_and_wait(
                '唔……话说，接下来要做什么来着呢？今天迷迷糊糊的，不小心给忘了啊。',
              ),
            () =>
              acute.say_and_wait(
                '库呼呼……差点睡过去了呢。这样可不行呢，得在鼻子下面稍微抹点清凉膏……',
              ),
            () =>
              acute.say_and_wait('扑通……啊，差点踩到青蛙了（摔了一跤）呢～'),
            () =>
              acute.say_and_wait(
                '嗯……回去还要腌卡擦咔嚓干呢，不打起精神来可不行呢～',
              ),
          );
          break;
        case -1:
          buffer.push(
            () => acute.say_and_wait('呼……坚持就是力量呢～所以不要紧的哦。'),
            () => acute.say_and_wait('哎嘿嘿……稍微有点使不上劲了呢。'),
            () => acute.say_and_wait('呼呼呼，要像同龄人一样努力才行呢。'),
            () => acute.say_and_wait('深呼吸——呼、呼～得继续绷紧神经才行呢。'),
            () =>
              acute.say_and_wait('注意力……被眼前呼呼飞的小苍蝇给打乱了呢——'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              acute.say_and_wait('争口气～好，靠着墙边拍了一下背，精神了呢。'),
            () => acute.say_and_wait([callname, '，我们开始训练吧～']),
            () => acute.say_and_wait('扩胸运动——已经做完了哦～'),
            () => acute.say_and_wait('今天也踏踏实实、一步一个脚印的努力吧～'),
            () => acute.say_and_wait(['该走了哦，', callname, '。']),
          );
          break;
        case 1:
          buffer.push(
            () =>
              acute.say_and_wait([
                '嗯～那么，',
                callname,
                '，今天的训练是什么呢～？',
              ]),
            () =>
              acute.say_and_wait('不管是什么训练，我都会认～真～对待的哦。'),
            () =>
              acute.say_and_wait('盐分补给也很重要，来吃一点嘎吱嘎吱干吧～'),
            () =>
              acute.say_and_wait(
                '哼、哼～拉伸运动准备到位～接下来要认真上了哦。',
              ),
            () =>
              acute.say_and_wait(['啊～', callname, '，刚刚你说了什么啊？']),
          );
          break;
        case 2:
          buffer.push(
            () => acute.say_and_wait('呼呼呼～更加严格的训练也是可以的哦。'),
            () => acute.say_and_wait('啊啦啦……已经到训练的时间了啊～'),
            () =>
              acute.say_and_wait(
                '今天天气很好呢～看着太阳公公啊，总感觉干劲十足了～',
              ),
            () =>
              acute.say_and_wait(
                '哎呀呀……看到了赛道啊，总感觉心里痒呼呼的呢～',
              ),
            () =>
              acute.say_and_wait([
                '训练结束了之后啊，我想要把被子拿出来晒呢～',
                callname,
                '一会儿能来陪我吗？',
              ]),
          );
      }
    } else {
      buffer.push(() =>
        era.printAndWait([acute.get_colored_name(), ' 一直保持着轻松的表情。']),
      );
    }
    switch (slavery) {
      case 1:
        buffer.push(async () => {
          await acute.say_and_wait('啊啦啦……今天也要在特雷森里散步吗？');
          await acute.say_and_wait(
            '赤身裸体的被脖子上项圈与缰绳牵着被带到公共场所里散步什么的，总会感觉到心脏在砰砰直跳呢，果然这就是年轻人经常会说的『浪漫』吧？',
          );
          await acute.say_and_wait(
            '不仅能锻炼根性，还能感觉到浪漫和快乐什么的；这样优秀的训练方法得传播出去才行呢。',
          );
          await acute.say_and_wait([
            '像是 ',
            call_301,
            '，还有理事长',
            acute.couple_title,
            '呐，感觉很容易就会沉沦在其中呢。',
          ]);
        });
        break;
      case 2:
        buffer.push(async () => {
          await acute.say_and_wait(
            '啊啦……今天的太阳真舒服呢，是吧积攒下来的家务一口气做完的好时机呢。',
          );
          await acute.say_and_wait(
            '洗衣服、晒被子、还有做嘎吱嘎吱干……唔噜噜，今天要做的事情意外地多啊。',
          );
          await acute.say_and_wait([
            '所以呢，',
            callname,
            '；今天可不许你强奸我了哦？',
          ]);
          await acute.say_and_wait(
            '无论是在大家训练的时候被带到中庭的枯树洞里，还是午休的时候被带到天台上，还是下午外出的时候在车站的小巷子里什么的，今天都是不可以的哦？',
          );
        });
        break;
      case 3:
        buffer.push(async () => {
          await acute.say_and_wait(
            '今天我感觉自己的状态特别好呢，所以晚上我会去宠幸你。',
          );
          await acute.say_and_wait([
            '所以呢，',
            callname,
            '，要记得把身上的各个地方都好好地洗干净等着我哦。',
          ]);
          await era.printAndWait(
            '明明是一如既往的笑容，却有一种不容拒绝的魄力。',
          );
          await era.printAndWait([
            '今天晚上，',
            you.get_colored_name(),
            ' 到底会变成什么样子呢……',
          ]);
        });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async office_gift(acute, callname) {
    const love = era.get('love:100');
    if (love >= 90) {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？没必要这么费心的啦～',
      );
      await acute.say_and_wait(['对了，', callname, '，之前说的计生工……']);
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        ' 的声音忽地暗了下来。',
      ]);
      await acute.say_and_wait('那个……带了吗？');
      await acute.say_and_wait('……哪个『带』？');
      await acute.say_and_wait('唔…………');
      await era.printAndWait([
        acute.get_colored_name(),
        ' 似乎有些生气的嘟起了嘴。',
      ]);
      await era.printAndWait([
        '一向沉稳、处变不惊的 ',
        acute.get_colored_name(),
        '，只有在这个时候，才会变得像是同龄人的羞涩',
        acute.teen_sex_title,
        '。',
      ]);
      await era.printAndWait(['总感觉，有些想要捉弄', acute.sex, '的恶趣味——']);
      await acute.say_and_wait('……………………');
      await era.printAndWait([
        '青空之下，与羞涩的 ',
        acute.get_colored_name(),
        ' 度过了一段快乐的时光。',
      ]);
    } else if (love >= 75) {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？没必要这么费心的啦～',
      );
      await acute.say_and_wait(['对了，', callname, '，计生工具用上了吗？']);
      await acute.say_and_wait([
        '年轻气盛是很好的啦，但是嘛，训练员和担当',
        acute.uma_sex_title,
        '之间还是要注意分寸的哦～',
      ]);
      await acute.say_and_wait('等毕业了之后，在真刀实枪的去做吧～');
      await acute.say_and_wait([
        '到那时候，别忘了让我来抱抱 ',
        callname,
        ' 的孩子啦～',
      ]);
      await era.printAndWait([
        '……与平静温和的 ',
        acute.get_colored_name(),
        '，谈论了关于生育的话题。',
      ]);
      await era.printAndWait('…………感觉自己脸红的不行。');
    } else if (Math.random() > 0.5) {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？真是不好意思呢～',
      );
      await acute.say_and_wait(['来坐在这里吧，', callname, '。']);
      await acute.say_and_wait(
        '不要走动哦，我去取刚腌好的嘎吱嘎吱干，等下要一起吃哦。',
      );
      await era.printAndWait([
        '……跟 ',
        acute.get_colored_name(),
        ' 一起吃了苦涩却又清脆的嘎吱嘎吱干。',
      ]);
    } else {
      await acute.say_and_wait(
        '哎呀哎呀，这是送给我的礼物吗？真是不好意思呢～',
      );
      await acute.say_and_wait([
        '说起来，骏川',
        acute.sex,
        '说啊，今天可能要下雨了呢。',
      ]);
      await acute.say_and_wait([callname, ' 没有带伞对吧？']);
      await acute.say_and_wait('我这里有备用的伞呢～直接拿去用吧。');
      await era.printAndWait([
        '……被 ',
        acute.get_colored_name(),
        ' 强硬的塞进手里了一把天堂伞。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async office_cook(acute, callname) {
    if (Math.random() > 0.5) {
      await era.printAndWait([
        '傍晚，向 ',
        acute.get_colored_name(),
        ' 请教了制作好吃的「嘎吱嘎吱干」的秘诀——',
      ]);
      await acute.say_and_wait(
        '腌嘎吱嘎吱干的秘诀吗？嗯……如果说秘诀的话，那果然是要用好的石坛……',
      );
      await era.printAndWait('………………');
      await era.printAndWait('学到了不少关于「腌制」的知识。');
    } else {
      await era.printAndWait(['与 ', acute.get_colored_name(), ' 一同做饭……']);
      await era.printAndWait('但被「不用麻烦你了」之类的话给搪塞出厨房了。');
      await acute.say_and_wait([
        '不用忙了啦，',
        callname,
        '。你只要坐在客厅里就可以了，饭很快就好了哦～？稍微等一下哦～',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('突然在一瞬间，自己的眼前浮现了母亲的身影。');
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async office_game(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('游戏吗……其实我不太明白该怎么操控机器呢——');
      await era.printAndWait([
        '不断将视线从显示器与遥控器上来回切换的 ',
        acute.get_colored_name(),
        '，用两根竖着的食指触碰着放在地上的手柄。',
      ]);
      await era.printAndWait('……说实话，实在是怪可爱的。');
    } else {
      await acute.say_and_wait(
        '游戏机——啊，我以前听故乡里邻居的小孩说过呢。是可以玩坦克大战的那种对吧？',
      );
      await era.printAndWait('噗——差点笑出了声。');
      await era.printAndWait('坦克大战……那得是多少年前的小孩了啊？');
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async s_a_tree_hollow(acute) {
    await era.printAndWait([
      '中庭后面的枯树洞，常有',
      acute.uma_sex_title,
      '在比赛前，对着树洞呐喊自己的愿望来释放自身压力。',
    ]);
    await era.printAndWait([
      '但平日里看似总是悠闲的的 ',
      acute.get_colored_name(),
      '，似乎更喜欢坐在树洞里。',
    ]);
    await acute.say_and_wait('嗯……这里可真安静呢～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 依旧温和地说着，脸上的表情似乎产生了些许的变化……',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async s_a_dating(acute, you) {
    await era.printAndWait([
      '人来人往的中庭，想要在这里忍受其他',
      acute.uma_sex_title,
      '的视线进行约会，恐怕需要很强大的毅力……',
    ]);
    await acute.say_and_wait('啊……要在这里约会吗？我不介意的哦～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 似乎并不在乎周围',
      acute.uma_sex_title,
      '的目光……',
    ]);
    if (era.get('love:100') >= 90) {
      await era.printAndWait('………………');
      await era.printAndWait('人来人往的中庭，相爱的二人，在角落中互相拥抱——');
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 一同度过了极好的中午。',
      ]);
    } else {
      await era.printAndWait([
        '但没有勇气真正踏出那一步的其实是 ',
        you.get_colored_name(),
        ' 自己。',
      ]);
      await era.printAndWait([
        '——感受到了来自 ',
        acute.get_colored_name(),
        ' 期待的目光。',
      ]);
      await era.printAndWait(
        '后面的内容，等「爱」更多了，再来探索吧。（苦笑）',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        '顺带一提——想要在人来人往的中庭跨出这一步，还需要如钢一般的意志——',
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async s_r_lunch(acute, you) {
    await era.printAndWait([
      '午休时分，与 ',
      acute.get_colored_name(),
      ' 在天台吃着便当。',
    ]);
    await era.printAndWait('嘎吱嘎吱嘎吱——');
    if (Math.random() < 0.5) {
      await era.printAndWait('一如既往温和而清脆的口感——');
      await acute.say_and_wait('呵呵～不要紧，这儿还有很多哦～');
      await era.printAndWait([
        '望着 ',
        acute.get_colored_name(),
        ' 的笑容，心中充斥着幸福感。',
      ]);
    } else {
      await era.printAndWait('似乎比日常更多了些许咸味的口感——');
      await acute.say_and_wait([
        '最近天气有些热呢，出很多汗的话身体的盐分就会不足哦？所以多加了一些盐呢——',
        you.get_colored_name(),
        '，喜欢吗？',
      ]);
      await era.printAndWait('那还用说吗？当然是喜欢的。');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {number} jpy 钓到的鱼的价值
   */
  async o_r_fishing(acute, you, jpy) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 相约去河边钓鱼……',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait('哎呀哎呀，天气真好呢～');
      await era.printAndWait([
        '手持着鱼竿的 ',
        acute.get_colored_name(),
        '，向着浮云与太阳露出了和蔼的微笑。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' 的身边似乎洋溢起了让人可以放下一切的慵懒氛围。',
      ]);
      await era.printAndWait([
        '……总感觉 ',
        you.get_colored_name(),
        ' 和 ',
        acute.get_colored_name(),
        ' 不是来钓鱼的，而是来晒太阳的啊。',
      ]);
    } else {
      await era.printAndWait([
        '——可话虽如此，',
        acute.get_colored_name(),
        ' 却并没有拿着竿。而是拿着连着鱼标鱼勾的鱼线，装上鱼饵后握直接抛入了水中。',
      ]);
      await acute.say_and_wait(
        '嘿咻……呼鲁～这样就好了呢～接下来，只要等小鱼儿上钩，然后就可以一网打尽了呢～',
      );
      await era.printAndWait('……这样真的能钓到鱼吗？');
      if (jpy > 0) {
        await era.printAndWait('——刚这样想着，鱼标就开始咕噜噜的下沉。');
      }
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_r_walking(acute, callname) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait('唏唷唷～风来了，雨来了，雷公敲着鼓来了。');
      await era.printAndWait([
        '似乎是心情很不错的样子，',
        acute.get_colored_name(),
        ' 沿着河道哼起了歌。',
      ]);
      await era.printAndWait([
        '……不知为何，听着 ',
        acute.get_colored_name(),
        ' 哼着小曲，总感觉有些困了。',
      ]);
    } else {
      await acute.say_and_wait([
        callname,
        '，虽然来河边散步很风雅啦，但还是要小心不能太靠近河边，要是掉进河沟里就不好了呢。',
      ]);
      await era.printAndWait([
        '在河边漫步着的 ',
        acute.get_colored_name(),
        ' 少有得一脸严肃的说教着。',
      ]);
      await era.printAndWait([
        '……不过，总感觉 ',
        acute.get_colored_name(),
        ' 很开心啊。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_arcade(acute, you, callname) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 一同去了街机厅……',
    ]);
    await acute.say_and_wait([
      '哎呀哎呀～',
      callname,
      '，可以的话，能陪我试试看拳击机吗？',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 活动着右臂，轻轻的躬起上身，将所有的注意力集中在了拳击机，一向温和的',
      acute.sex,
      '此刻眼神中燃烧起了熊熊斗志。',
    ]);
    await era.printAndWait([
      '……感觉看到了 ',
      acute.get_colored_name(),
      ' 的另一面。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_301 奇锐骏对骏川缰绳/丰收时刻的称呼
   * @param {boolean} special_item 是否抽到斗魂注入鞭
   */
  async o_s_drawing(acute, you, callname, call_301, special_item) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 一同参加了商店街组织的抽奖活动……',
    ]);
    await acute.say_and_wait('要是能抽到新鲜的嘎吱嘎吱卜就好了呢～');
    await era.printAndWait('咕噜咕噜咕噜咕噜……');
    await era.printAndWait('biu～');
    if (special_item) {
      await era.printAndWait('获得了商店街的奖品【斗魂注入鞭（S用）】！');
      await era.printAndWait(
        '喂喂喂喂喂！是谁把少儿不宜的东西当做奖品放在全年龄的商店街的抽奖活动里的啊！？',
      );
      await era.printAndWait('这种东西怎么说也得放在成人街的抽奖机里——');
      await acute.say_and_wait('哎呀呀,好帅气的九节鞭啊～');
      await era.printAndWait([
        '似乎是误解了用途？接过斗魂注入鞭（S用）的 ',
        acute.get_colored_name(),
        ' 眼中闪烁起了光芒……',
      ]);
      await acute.say_and_wait([
        '嗯……感觉 ',
        callname,
        ' 给人的感觉就对这种道具非常的熟练啊——',
      ]);
      era.printButton(`「请不要说这种会被${call_301.content}盯上的话。」`, 1);
      await era.input();

      await acute.say_and_wait(['嗯姆？为什么会被 ', call_301, ' 盯上呢？']);
      era.printButton('「啊，这个吗……」', 1);
      await era.input();
      await era.printAndWait('………………');
      await era.printAndWait([
        '姑且在没有解释「为什么会被 ',
        call_301,
        ' 盯上」的情况下将这个糊弄了过去。',
      ]);
      await era.printAndWait([
        '从 ',
        acute.get_colored_name(),
        ' 的手中收下的斗魂注入鞭（S用）姑且放在了训练室的仓库拐角生蜘蛛网的角落之中。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait([
        '至于 ',
        acute.get_colored_name(),
        ' 其实知道斗魂注入鞭（S用）的正确用法后从而「大放异彩」的即辛辣又热血还夹杂着桃色肥臀的故事，则是后来的事了——',
      ]);
    } else {
      const buffer = [
        async () => {
          await era.printAndWait('获得了商店街的奖品【抽拉式纸巾】！');
          await acute.say_and_wait([
            '哎呀哎呀～感觉 ',
            callname,
            ' 晚上的时候用得上呢～',
          ]);
          await you.say_and_wait('………………');
          await era.printAndWait('不不不！不会用的好吗！？');
        },
        async () => {
          await era.printAndWait('获得了商店街的奖品【普通的纸巾】！');
          await acute.say_and_wait('普通的纸巾吗……可以拿来做食物的垫子呢～');
          await era.printAndWait([
            '虽然只是最低级的奖品，但 ',
            acute.get_colored_name(),
            ' 依旧开心的从服务员的手中接过了纸巾——',
          ]);
        },
        async () => {
          await era.printAndWait('获得了商店街的奖品【胡萝卜】！');
          await acute.say_and_wait('哦阿？原来抽奖真的能抽出嘎吱嘎吱卜啊～');
          await era.printAndWait([
            acute.get_colored_name(),
            ' 的脸上露出了喜悦的神情——',
          ]);
        },
        async () => {
          await era.printAndWait('获得了商店街的奖品【一筐胡萝卜】！');
          await acute.say_and_wait(
            '一个、两个、三个……哎呀呀，这个份量，能做一个礼拜份的嘎吱嘎吱干了呢。',
          );
          await acute.say_and_wait([
            '等嘎吱嘎吱干做好了之后啊，',
            callname,
            '，我们就拿去分给特雷森里的大家吧？',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            ' 回过了头，温和的笑容中闪烁出了佛光——',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async o_s_ktv(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('步步紧逼的～帝王～是巴比伦的军团～');
      await era.printAndWait('一首有着年代感的歌曲，似乎是某部特摄的主题曲？');
      await era.printAndWait([
        '闭上眼睛，能感觉到骑着摩托的 ',
        acute.get_colored_name(),
        ' 正在追逐着什么——',
      ]);
    } else {
      await acute.say_and_wait('瞄准着的～黑暗的影子～守护三女神的和平～');
      await era.printAndWait(
        '能感觉到少年心的歌曲，非常适合就着萝卜干来品鉴。',
      );
      await era.printAndWait([
        '闭上眼睛，似乎能看到 ',
        acute.get_colored_name(),
        ' 叉着腰站在栏杆上的样子——',
      ]);
      await era.printAndWait('……等等！别真上去啊！');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_movie(acute, callname) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 一同去看电影……',
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait([
        '故事讲述了一个天生残障的',
        acute.uma_sex_title,
        '，是如何在自强不息、屡败屡战的奋斗之中得到了三女神的眷顾，在多场赛事中创造了众多奇迹的故事——',
      ]);
      await acute.say_and_wait([
        '嗯……真是热血的故事呢，',
        callname,
        '——等回去之后，可以增加额外的训练吗？',
      ]);
      await era.printAndWait([
        '似乎点燃了 ',
        acute.get_colored_name(),
        ' 的热血……',
      ]);
    } else {
      await era.printAndWait([
        '故事讲述了一位而立之年的',
        acute.uma_sex_title,
        '，为了实现在年轻时与已故的训练员老伴一同环游世界的梦想，而与在路上结伴相识的关西小',
        acute.uma_sex_title,
        '一同进行环球奔跑旅行的传奇故事——',
      ]);
      await acute.say_and_wait(
        '嗯……这是浪漫的故事呢～哎呀哎呀，如果可以的话，我也想要进行这样一场旅行呢——',
      );
      await era.printAndWait([
        '发出了如此感慨过后，在放映结束之前，总能感受到来自 ',
        acute.get_colored_name(),
        ' 的视线……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(acute, you, callname, dice) {
    await acute.say_and_wait('阿拉拉……要去神社祈福吗？');
    await era.printAndWait([
      '休息日的前一天，跟 ',
      acute.get_colored_name(),
      ' 提出了一同去神社祈福的计划。',
    ]);
    await acute.say_and_wait(
      '这样吗……那如果要去神社的话～不做好准备可不行呢……',
    );
    await era.printAndWait([
      '就跟预想的一样，有些老气的 ',
      acute.get_colored_name(),
      ' 对这「祈福」这类的活动果然很上心。。',
    ]);
    await acute.say_and_wait('不过哟……要去神社的话，得起早去才行呢……');
    await acute.say_and_wait('还要提前备上岁钱和供香……');
    await acute.say_and_wait(
      '还有供品……哎呀哎呀，今天晚上得腌一点嘎吱嘎吱干了呢……',
    );
    await acute.say_and_wait('……是不是有点太过上心了？');
    await acute.say_and_wait(
      '去神社参拜啊，越早越好呢，因为越早心越诚啊。所以明天要早起两个小时去做准备呢——',
    );
    await acute.say_and_wait([
      '啊，',
      callname,
      ' 不用起的那么早哦？因为要做准备的事我这边的啦。年轻人得多睡一会儿～。等到要出发的时候，我再去叫你起床吧～',
    ]);
    await era.printAndWait([
      '总有一种被当做',
      you.sex_code === 1 ? '孙子' : '孙女',
      '对待的感觉啊……',
    ]);
    await era.printAndWait([
      '还有，',
      acute.get_colored_name(),
      ' 不也是年轻人吗？',
    ]);
    if (dice < 0.5) {
      await acute.say_and_wait('哎呀哎呀，大吉吗？感觉会有好事情发生呢～');
      await era.printAndWait([
        '手中握着大吉签的 ',
        acute.get_colored_name(),
        ' 露出了和蔼的微笑。',
      ]);
      await era.printAndWait(
        '这也是理所当然的吧？毕竟特地早了两个小时起床来准备去神社祈福。',
      );
      await acute.say_and_wait('所谓天道酬勤——就是这么一回事吧。');
      await acute.say_and_wait(['怎么啦，', callname, '？你看起来很开心呢。']);
      await era.printAndWait('……脸上的笑意被发现了吗？');
    } else {
      await acute.say_and_wait(
        '大凶啊……看起来最近得多做点好事积攒功德才行了呢～',
      );
      await era.printAndWait([
        '手中握着大凶签的 ',
        acute.get_colored_name(),
        ' 一如既往平和的说着。大凶签似乎并没有给予',
        acute.sex,
        '情绪上的波动。',
      ]);
      await era.printAndWait('……可话虽如此，总感觉很不爽。');
      await era.printAndWait('明明提早了两个小时来准备去神社祈福的啊……');
      await acute.say_and_wait([
        '怎么啦，',
        callname,
        '？你看起来不太高兴呢？。',
      ]);
      await era.printAndWait('……脸上的恼意被发现了吗？');
    }
    await era.printAndWait('总之找个理由糊弄过去好了。');
    await era.printAndWait([
      '不管怎样，不能让 ',
      acute.get_colored_name(),
      ' 发现自己孩子气的一面啊……',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_restaurant(acute, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 一同在车站前品尝了热气腾腾的油豆腐……',
      ]);
      await acute.say_and_wait('呼、呼……啊呜～嗯呜～嗯呜呜❤️～');
      await era.printAndWait('一面吹着油豆腐的热气，一面小口小口的咀嚼。');
      await era.printAndWait([
        '蒸腾的热气从 ',
        acute.get_colored_name(),
        ' 的口中缓缓散出，舌头与咽喉随之发起了细微的共振。',
      ]);
      await acute.say_and_wait('咕～嗯……哈——');
      await era.printAndWait([
        '坐在 ',
        acute.get_colored_name(),
        ' 的对面，能够听到那出于礼仪而刻意而又小心掩盖着得细微吞咽声……',
      ]);
      await acute.say_and_wait('……？');
      await era.printAndWait([
        '啊，不好，自己过于专心于 ',
        acute.get_colored_name(),
        ' 嘴角那舌尖与热气的视线，似乎被 ',
        acute.get_colored_name(),
        ' 发现了……',
      ]);
      await acute.say_and_wait('…………');
      await era.printAndWait([
        acute.sex,
        '看向了 ',
        you.get_colored_name(),
        ' 碗中尚未动过的油豆腐，眉头微皱，好似有些许不满。',
      ]);
      await era.printAndWait(
        '但毕竟正在进食，又不好发出声。所以只好嘟起了脸蛋，表达着小小的抗议。',
      );
      await era.printAndWait([
        '随后，伸出并未捧着碗的左手，像是在回避着 ',
        you.get_colored_name(),
        ' 那有些许下流般的视线，遮挡在了自己散发着热气的嘴唇之前。',
      ]);
      await era.printAndWait([
        '于是，微微皱着眉头的 ',
        acute.get_colored_name(),
        '，用手遮住了自己正散发着自己热气的半面——',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        acute.get_colored_name(),
        '，搞不好其实是个那方面的天才吧？',
      ]);
    } else {
      await era.printAndWait([
        acute.get_colored_name(),
        ' 一同在车站前品尝了车站便利店前的特价萝卜干……',
      ]);
      era.printButton('「嘎吱——」', 1);
      await era.input();
      await era.printAndWait(
        '嗯，出入口的口感还是挺脆的，作为便利店出售的萝卜干来说，已经算是很不错了……',
      );
      era.printButton('「嘎吱嘎吱——」', 1);
      await era.input();
      await era.printAndWait([
        '但仔细品尝的话，果然跟 ',
        acute.get_colored_name(),
        ' 做的嘎吱嘎吱干还是差的很远啊……',
      ]);
      await era.printAndWait(
        '无论是因为放置的太久后导致缺乏水分而多多少少的有些磕牙，',
      );
      await era.printAndWait(
        '还是这不知是刻意的为了延长保质期还是为了吸引偏向大众重口味而进行的咸味腌制……',
      );
      await era.printAndWait('嘎吱嘎吱嘎吱——');
      await era.printAndWait('越是咀嚼就越是感觉到咸味在口腔中扩散，');
      await era.printAndWait(
        '本就缺乏水分的萝卜干在这咸气十足的环境中反而在争抢着分泌出的为数不多的唾液……',
      );
      await acute.say_and_wait([callname, '，水在这里哦～']);
      await era.printAndWait([
        '接过 ',
        acute.get_colored_name(),
        ' 递过来的用保温杯的瓶盖所盛好的温水，便是一场酣畅淋漓的豪饮。',
      ]);
      era.printButton('「咕噜、咕噜——」', 1);
      await era.input();
      await era.printAndWait([
        '哈……多亏了 ',
        acute.get_colored_name(),
        '，得救了。',
      ]);
      await era.printAndWait(
        '可恶，差点就中了便利店利用特价萝卜干兜售瓶装快乐水的阴谋！',
      );
      await era.printAndWait('嘎吱嘎吱干明明应该是那种。');
      await era.printAndWait('虽然有点咸，但品尝起来也不会太过干瘪。');
      await era.printAndWait('刺激唾液的同时，不会跟人体抢夺水分。');
      await era.printAndWait(
        '又脆又咸却又容易入口，在运动训练结束后不适宜大量喝水的那段时间里，可以通过嘎吱嘎吱干适量的刺激唾液分泌而缓解口渴感的，好吃又营养还能辅助训练的美味食物才对！',
      );
      await era.printAndWait(
        '竟然把美味好吃又营养的嘎吱嘎吱干做成这种充满了阴谋的工业商品……便利店，你真可恶——',
      );
      await acute.say_and_wait([
        '呐，',
        callname,
        '。等回去之后，能来我的房间里吃点嘎吱嘎吱干吗？',
      ]);
      await era.printAndWait([
        '如同看穿了 ',
        you.get_colored_name(),
        ' 的心事一般，站在 ',
        you.get_colored_name(),
        ' 旁边的 ',
        acute.get_colored_name(),
        '，用不紧不慢的语气适时的插入进了 ',
        you.get_colored_name(),
        ' 内心的独白。',
      ]);
      era.printButton('「哈！那还用说？!」', 1);
      await era.input();
      await era.printAndWait([
        '豪爽的同意了 ',
        acute.get_colored_name(),
        ' 邀约，当天夜里在 ',
        acute.get_colored_name(),
        ' 的房间里吃了个爽。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {boolean} do_sex 是否性爱
   */
  async o_s_dating(acute, you, callname, do_sex) {
    await era.printAndWait([
      '休息日与 ',
      acute.get_colored_name(),
      ' 约好了去车站约会——',
    ]);
    await acute.say_and_wait('嗯……最近总感觉腰有些酸呢～');
    await era.printAndWait([
      '毫无预兆的，',
      acute.get_colored_name(),
      ' 突然说道。',
    ]);
    if (do_sex) {
      await acute.say_and_wait([callname, '，今天晚上，可以帮我放松一下吗？']);
      await era.printAndWait([
        '正说着，',
        acute.get_colored_name(),
        ' 在街上毫不客气的拍了拍 ',
        you.get_colored_name(),
        ' 的腰，脸上浮现出了颇有深意的笑容。',
      ]);
      await era.printAndWait('………………');
      if (era.get('item:斗魂注入鞭（S用）') > 0) {
        await acute.say_and_wait([
          '呐。',
          callname,
          '，今天可以……用上【那个】了吗？',
        ]);
        await era.printAndWait([
          '粉红的嘴唇泛起了透明的汁液，身为',
          acute.teen_sex_title,
          '的猛兽露出了',
          acute.sex,
          '的獠牙。',
        ]);
        await era.printAndWait([
          '心领神会，带着 ',
          acute.get_colored_name(),
          ' 偷偷的来到了车站无人的角落……',
        ]);
        await era.printAndWait('拿出了训练猛兽的斗魂注入鞭——');
        await acute.say_and_wait('…………');
        await acute.say_and_wait('！');
        await acute.say_and_wait('————');
        await acute.say_and_wait('❤️～');
      } else {
        await era.printAndWait('还没说完，自己便已被抱住。');
        await era.printAndWait([
          '被身为',
          acute.teen_sex_title,
          '的猛兽紧紧得抱住，自身绝没有逃脱的可能。',
        ]);
        await era.printAndWait(
          '自古以来驯「兽」的工作中，喂食都是一种极其危险的工作。',
        );
        await era.printAndWait(
          '一旦未能让对方感到满足，那么喂食者便可能成为猛兽的饵食——',
        );
        await acute.say_and_wait('❤️——————');
        await era.printAndWait('深邃的眼眸中，散射出了桃红的色泽。');
        await era.printAndWait([
          '这是名为 ',
          acute.get_colored_actual_name(),
          ' 的猛兽所发出的「进食」信号。',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('看来今天夜里，注定了是一场殊死的决斗了。');
      }
    } else {
      await era.printAndWait([
        '提出了要不要按摩一下，但是被 ',
        acute.get_colored_name(),
        ' 拒绝了……',
      ]);
      await acute.say_and_wait(
        '嗯……比起轻飘飘的按摩，还是希望能有更刺激的治疗法呢——',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' 一如既往轻飘飘地说着，视线似乎像车站角落里的某家SM用具店利飘去。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('应该是错觉吧？');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_shopping(acute, you, callname) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 一同逛了车站前的商场……',
    ]);
    await acute.say_and_wait('嘎吱嘎吱干～嘎吱嘎吱干～');
    await era.printAndWait([
      '哼着轻快的小调，',
      acute.get_colored_name(),
      ' 迅猛得穿行于低价区中、用难以置信得速度，将刚标上降价标签的商品放入了购物篮。',
    ]);
    await era.printAndWait(
      '在发出「这似乎能用在训练之上」的感慨之前，购物篮里转瞬间已满满当当。',
    );
    era.drawLine();
    const buffer = [];
    buffer.push(
      async () => {
        await era.printAndWait('购物篮中堆满了各种减价的食材。');
        await era.printAndWait(
          '随便拿起其中一份，上面赫然标着「-60％」的绿色标签。',
        );
        await acute.say_and_wait([
          '啊哈哈，竟然有-99％的胡萝卜呢～看来今天晚上，',
          callname,
          ' 是有口福了哦～',
        ]);
        await era.printAndWait('说罢，又是一份绿标的食材被推入了购物篮中……');
      },
      async () => {
        await era.printAndWait('购物篮中堆满了各种训练食品。');
        await era.printAndWait(
          '随便拿起其中一份，上面赫然印着「一日两次燃烧脂肪！一个月变身八块腹肌！」这类夸大其词的广告。',
        );
        await era.printAndWait([
          '……脑海中渐渐浮现起了有着八块腹肌的 ',
          acute.get_colored_name(),
        ]);
        await acute.say_and_wait([
          '嗯……果然 ',
          callname,
          '，还是要增加多一点肌肉量呢～',
        ]);
        await era.printAndWait([
          '——什么嘛，原来是给 ',
          you.get_colored_name(),
          ' 买的啊。',
        ]);
        await era.printAndWait(
          '连忙拭去脑海中那不堪入目的画面，安心地缓了口气。',
        );
        await era.printAndWait('………………');
        await era.printAndWait([
          '结账时，抢在了 ',
          acute.get_colored_name(),
          ' 之前。',
        ]);
        await era.printAndWait([
          '毕竟购物篮里的东西大多是给自己用的，说什么也不好意思让 ',
          acute.get_colored_name(),
          ' 买单。',
        ]);
        await era.printAndWait(
          '掏出了家人送给自己的黑色钱包，用左手捂着此前不慎划破的破洞。一面紧张得望着收银机上的数字，一面略带遗憾着清点钱包中为数不多的大钞——',
        );
        await acute.say_and_wait(['八块腹肌的 ', callname, '……哎嘿嘿～']);
        await era.printAndWait('………………');
        await era.printAndWait('总感觉刚刚听到了某种很不可思议的对白。');
        await era.printAndWait([
          '回过头——',
          acute.get_colored_name(),
          ' 依旧温柔得注视着自己。和蔼地笑容一如往常，就是嘴角不知为何留有液体的印记。',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('应该是错觉吧？');
      },
    );
    if (era.get('love:100') >= 75) {
      buffer.push(async () => {
        await era.printAndWait('韭菜、猪肝、鸡蛋……');
        await era.printAndWait('猪肝、鸡蛋、韭菜……');
        await era.printAndWait('鸡蛋、韭菜、猪肝……');
        await era.printAndWait('半价的韭菜、新鲜的猪肝、清澈的鸡蛋液……');
        await era.printAndWait('……怎么全是养「肾」食品？');
        await era.printAndWait([
          '一刻也没有停歇，惊恐地望向了 ',
          acute.get_colored_name(),
          '。在此刻回应着的，是 ',
          acute.get_colored_name(),
          ' 略带深意的微笑——',
        ]);
        await era.printAndWait('…………');
        await era.printAndWait('看来今晚注定了是一个漫长的深夜——');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async possessive(acute, callname) {
    await acute.print_and_wait(['又一次来到了枯树洞……']);
    await acute.print_and_wait(['想要在 ', callname, ' 的身上留下印迹。']);
    await acute.print_and_wait(['不仅仅是接吻，还有其他地方。']);
    await acute.print_and_wait([
      '耳垂、脸颊、下巴、脖颈、胸口……都想要留下我的印迹。',
    ]);
    await acute.print_and_wait([
      '这就是所谓的占有欲吗？坦白的说，我并不明白。',
    ]);
    await acute.print_and_wait([
      '想要向 ',
      callname,
      ' 的嘴唇靠近，想要鼻与唇的喘息的交错；左面的心脏砰砰跳动，一切都是让人难以忍耐。',
    ]);
    await acute.print_and_wait(['爱人之间的接吻……真是一项危险的行动。']);
    await acute.print_and_wait([
      '要是真的接上了吻，让自己的身体染上了对 ',
      callname,
      ' 的瘾症的话，那时候……我会变得怎样呢？',
    ]);
    await acute.print_and_wait([callname, '……会负起责任来吗？']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} tama 玉藻十字
   * @param {CharaTalk} you 玩家
   */
  async kiss(acute, tama, you) {
    tama.name = '某关西' + acute.uma_sex_title;
    await era.printAndWait([
      '人来人往的中庭，想要在这里忍受其他',
      acute.uma_sex_title,
      '的视线进行约会，恐怕需要很强大的毅力……',
    ]);
    await acute.say_and_wait('啊……要在这里约会吗？我不介意的哦～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 似乎并不在乎周围',
      acute.uma_sex_title,
      '的目光……',
    ]);
    await era.printAndWait([
      '——感受到了来自 ',
      acute.get_colored_name(),
      ' 期待的目光。',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('在人来人往的中庭，两个相爱的人彼此之间互相索取。');
    await era.printAndWait(
      '不再在乎周围的人的眼神，激烈的唾液交换着彼此相爱的契约。',
    );
    await acute.say_and_wait('……❤️');
    await era.printAndWait([
      '小巧的双手环抱着 ',
      you.get_colored_name(),
      ' 的头，闪烁得桃红色目光，无论白日或是黑夜，都注释着 ',
      you.get_colored_name(),
      ' 一个人。',
    ]);
    await era.printAndWait([
      '而 ',
      you.get_colored_name(),
      '，同样还以最热烈的爱，最激情的吻——无论白天还是黑夜，彼此之间紧紧相拥——',
    ]);
    await era.printAndWait('………………');
    await you.say_as_passer_by_and_wait('空间转发者', '他们亲了多久？');
    await you.say_as_passer_by_and_wait(
      '小红马用户',
      '不知道……应该有两小时了吧？',
    );
    await tama.say_and_wait(
      '嗨，破盖仔，天窦黑哇，嘛在这啵。咩哇，真噶蒜中庭开趴哈？',
    );
    await era.printAndWait('………………');
    await era.printAndWait('无论日夜轮转，春夏秋冬。');
    await era.printAndWait(['此后的人生，皆不在与', acute.sex, '分离。']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async boxing(acute, you, callname) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 一同去了街机厅……',
    ]);
    await acute.say_and_wait([
      '哎呀哎呀～',
      callname,
      '，可以的话，能陪我试试看拳击机吗？',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' 活动着右臂，轻轻的躬起上身，将所有的注意力集中在了拳击机，一向温和的',
      acute.sex,
      '此刻眼神中燃烧起了熊熊斗志。',
    ]);
    await era.printAndWait([
      '……从身后望着 ',
      acute.get_colored_name(),
      ' 因躬身而翘起的丰满臀部，心中突然涌现出了邪恶的想法。',
    ]);
    await era.printAndWait([
      '悄悄地靠近着将注意力完全集中在拳击机上的 ',
      acute.get_colored_name(),
      '，趁',
      acute.sex,
      '专心预备挥拳而翘起丰臀之际，伸出罪恶的右手悄悄蓄力——',
    ]);
    era.printButton('「啪！」', 1);
    await era.input();
    await acute.say_and_wait('咿呀～！？');
    await era.printAndWait('那是夹杂着羞涩与某种兴奋感的颤音。');
    await era.printAndWait([
      '如果是往常，根本无法想象老气横秋的 ',
      acute.get_colored_name(),
      ' 能发出这样小',
      acute.child_sex_title,
      '的声音呢。',
    ]);
    await era.printAndWait(
      '丰臀那饱满与一颤一颤的触感仍然新鲜且是如此的让人难以忘怀。满足与罪恶夹杂的施虐心让心中似乎开始了难以平息的悸动。',
    );
    await era.printAndWait([
      '然而，正当感动之情仍存于心中之时，',
      acute.get_colored_name(),
      ' 那蓄势待发的拳头却悄无声息的击发了。',
    ]);
    await era.printAndWait('砰！！！！！！！');
    await era.printAndWait('那是远比背股一击还要剧烈的声响。');
    await era.printAndWait(
      '机械臂已然扭曲、液晶屏更是碎裂，拳击机上冒出了散发着焦味的浓浓白烟。',
    );
    await era.printAndWait('……阿勒？');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 的拳力……原来有这么强的吗？',
    ]);
    await era.printAndWait(
      '之前来街机厅的时候，明明排名也仅仅是在特雷森学园里中等偏上的，即便是特别有功的人类体育生也能够达到的水平啊？',
    );
    await era.printAndWait([
      '一击就击坏拳击机？哎？难不成 ',
      acute.get_colored_name(),
      ' 之前一直在隐藏自己的实力……',
    ]);
    await acute.say_and_wait('唔～唔——！');
    await era.printAndWait([
      '一只手抚着自己丰臀的 ',
      acute.get_colored_name(),
      '，慢慢地回过了头。夹杂着泪珠却又没有哭意的眼神之中，夹杂着某种不知是娇羞还是厌恶的，某种一言难尽的神色。',
    ]);
    await era.printAndWait([
      acute.sex,
      '嘟起了嘴，小小的气体撑起了',
      acute.sex,
      '的脸颊，这是',
      acute.sex,
      '看起来最有活力，也最像同龄人一般可爱的时刻。',
    ]);
    await era.printAndWait('——如果没有那只正缓缓举起作拳击状的右手的话。');
    era.drawLine();
    await era.printAndWait([
      '总之，事后以说教的形式，总算取得了 ',
      acute.get_colored_name(),
      ' 的原谅。',
    ]);
    await era.printAndWait([
      '不过从那一天开始，在训练时，总感觉 ',
      acute.get_colored_name(),
      ' 有时会向 ',
      you.get_colored_name(),
      ' 投来某种异常的视线。',
    ]);
    await era.printAndWait([
      '……应该是 ',
      you.get_colored_name(),
      ' 的错觉吧？',
    ]);
  },
  basement_end: (() => {
    const title = '情爱囹圄';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait('逃脱的大门被封印了。');
      await era.printAndWait('并非是靠门锁，而是纯粹的腕力。');
      await era.printAndWait(
        '从把手为原点，整个大门都向内扭曲着，如漩涡般形变。',
      );
      await era.printAndWait(
        '而更为可怕的是，门并未被卸下——门与墙壁之间那脆弱的连接处竟然依旧完好。而与门一同形变的，竟然是整个墙面。',
      );
      await era.printAndWait(
        '是的……那个经由钢筋定型的水泥墙面，竟然整体都如面点一般发生了柔软的形变！',
      );
      await era.printAndWait(
        '仅仅只是针对水泥的破坏是做不到这种程度的。如此程度的形变，就只有在不破坏凝固水泥的结构下，利用某种力量将墙面赋予韧性，然后用自己绝对的力量将连带着钢筋与水泥的整个墙面用向捏弹簧一般，将其漩涡式的形变……',
      );
      await era.printAndWait(
        '然而，这甚至不是捏弹簧——因为她根本就没有抱住整个墙面！而仅仅只是握住了门把手而已！',
      );
      await era.printAndWait(
        '这是物理学的奇迹……不，奇迹已经不足于形容了，在这里，这个密闭的房间之中，物理学已经不存在了！',
      );
      await acute.say_and_wait([
        '呐，',
        callname,
        '，你知道吗？我已经受够那些繁文缛节了。',
      ]);
      await era.printAndWait(
        '然而，即便自己仍在惊慌与恐惧之中。在奇迹的大门之前，灰色的身影如平常一般，平静的声音在密闭的房间内回转。',
      );
      await acute.say_and_wait([
        '其实呐，',
        callname,
        '，我一直有在好好的忍耐哦？因为不想要伤害到你，所以其实我一直有在约束自己的次数与频率呢。',
      ]);
      await acute.say_and_wait([
        '但即便如此，',
        callname,
        ' 还是在想着跟其他孩子们卿卿我我呢……',
      ]);
      await acute.say_and_wait([
        '既然 ',
        callname,
        ' 说，要遵从自己内心真实的想法的话……',
      ]);
      await acute.say_and_wait('那我稍微认真一点……也是可以的吧？');
      await era.printAndWait([
        '说罢，',
        acute.get_colored_name(),
        ' 从口袋中，取出了堆叠在一起约有一根拇指这么长的拆卸好了的小雨伞。',
      ]);
      await era.printAndWait([
        '然后，她那纤细的双手伸在了 ',
        you.get_colored_name(),
        ' 的眼前，拿一指厚的小雨伞，就这样经由她的拇指跟食指递在了 ',
        you.get_colored_name(),
        ' 的面前。',
      ]);
      await era.printAndWait('「滋啦滋啦……」');
      await era.printAndWait('橡胶制品，发出了绝对不会是橡胶所发出的声音。');
      await era.printAndWait([
        '那一指厚的橡胶雨伞，竟然在 ',
        you.get_colored_name(),
        ' 的面前被撕成了两半，如同碎屑般随意的摔落在地面之上。',
      ]);
      await acute.say_and_wait(
        '……今天，在我尽兴之前，是绝对不会让你休息的哦。',
      );
      await acute.say_and_wait([callname, { color: 'pink', content: '❤️～' }]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait('那深色的眼眸中，闪烁着粉红的光圈。');
      await era.printAndWait('很快，密闭的房间内，到处都将流下纯白之血……');
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '金钱奴隶';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        '金钱是一把万能钥匙，失去了这把钥匙，所有的大门都将为你关闭。',
      );
      await era.printAndWait([
        '作为成年人，',
        you.get_colored_name(),
        ' 毫无疑问是深知此间的道理。',
      ]);
      await era.printAndWait([
        '然而即便如此，',
        you.get_colored_name(),
        ' 依旧迈出了身为教育者所绝不应当迈出的这一步。',
      ]);
      await era.printAndWait(
        '那便是不仅将所有金钱，全部投入到新发行的集换式少女卡牌游戏【暗黑特雷森】之中；甚至为了获得其中编号 100 的全球限量 100 张的 UR 镜碎黄金稀有卡【灰眼画女】，在一家竞拍网站上与竞价方竞价时一时上头，最后以 103 亿 2000 万元的价格拍下了这件稀有藏品。',
      );
      await era.printAndWait([
        '但是，毫无疑问。',
        you.get_colored_name(),
        ' 根本没有这 103 亿 2000 万元。',
      ]);
      await era.printAndWait(
        '原本以为，这只是一场普通的竞拍游戏而已。即便拍下来了，只要自己之后告知竞拍方自己没有那么多的钱，交付少量的违约金进行重新拍卖就好了……',
      );
      await era.printAndWait([
        '但今天早上，当律师函与法院传票一起被送达时，',
        you.get_colored_name(),
        ' 才意识到问题的严重性。',
      ]);
      await era.printAndWait(
        '如果不能在限期内缴纳 103 亿的尾款，那么竞拍网站就会以「扰乱竞拍秩序罪」将自己送上法庭，最高判处三年以上有期徒刑。',
      );
      await era.printAndWait([
        '虽然这场审判未必会以自己有罪的形式发展。但作为教职人员，自己被送上法庭本身就已经是一种社会性的死亡。因此，哪怕自己根本没有这么多钱，',
        you.get_colored_name(),
        ' 也要想尽办法去凑够这 103 亿 2000 万元。',
      ]);
      await era.printAndWait('但是，该怎么去凑呢？');
      await era.printAndWait('银行那边毕竟已经达到了借贷的最大额度。');
      await era.printAndWait([
        '而就在 ',
        you.get_colored_name(),
        ' 为难之际，一向能看穿 ',
        you.get_colored_name(),
        ' 心事的 ',
        acute.get_colored_name(),
        '，悄悄地凑了过来。',
      ]);
      await acute.say_and_wait([
        callname,
        '，在烦恼什么呢？……阿拉，是金钱的问题吗？',
      ]);
      await era.printAndWait([
        '法院的催债文书，就这样不小心被出现在 ',
        you.get_colored_name(),
        ' 身后的 ',
        acute.get_colored_name(),
        ' 看到了。',
      ]);
      await acute.say_and_wait('没有写清楚数额，但似乎是很大的一笔数字呢。');
      await acute.say_and_wait(
        '如果是钱的话，我这里有些盈余的哦……要我再给你一些吗？',
      );
      await era.printAndWait([
        '虽然此前也找 ',
        acute.get_colored_name(),
        ' 借过钱，但从没有过这么庞大的数值。',
      ]);
      await era.printAndWait([
        '理智正在告诫着自己，作为教职人员，不能再跟自己的担当',
        acute.uma_sex_title,
        '发生如此腐败的金钱关系了。',
      ]);
      await era.printAndWait('但是，这笔债务……');
      await acute.say_and_wait([
        '不要紧的哦，',
        callname,
        '；就像以往一样，用家务来还债吧～',
      ]);
      await era.printAndWait([
        '那一刻，',
        you.get_colored_name(),
        ' 的脸上浮现了轻松却又令 ',
        you.get_colored_name(),
        ' 无法拒绝的笑容……',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait(
        '金钱是一把万能钥匙，获得了这把钥匙，所有的大门都将为你打开。',
      );
      await era.printAndWait([
        '这是 ',
        acute.get_colored_name(),
        ' 最近才明白的道理。',
      ]);
      await era.printAndWait(
        '真没想到，一次普普通通抽卡抽到的一张好像很稀有的卡牌，在竞拍网站上竟然卖出了 103 亿 2000 万元的高价。',
      );
      await era.printAndWait([
        '而也正是凭借着这次竞拍，',
        acute.get_colored_name(),
        ' 获得了大量财富，得以偿还了 ',
        you.get_colored_name(),
        ' 所欠下的债务。',
      ]);
      await era.printAndWait([
        '现在，',
        acute.get_colored_name(),
        ' 已经成为了 ',
        you.get_colored_name(),
        ' 金钱上的主人。',
      ]);
      await era.printAndWait([
        '而根据 ',
        acute.get_colored_name(),
        ' 制定的家务工资表，',
        you.get_colored_name(),
        ' 每完成一项工作，',
        acute.get_colored_name(),
        ' 就会免除 ',
        you.get_colored_name(),
        ' 一部分的债务。',
      ]);
      await era.printAndWait('比如做饭、洗碗、一起锻炼、牵着手散步。');
      await era.printAndWait([
        '还有讲故事、摸摸头、背部按摩、咬舌头……当然是 ',
        acute.get_colored_name(),
        ' 自发去给 ',
        you.get_colored_name(),
        ' 去做。',
      ]);
      // 二人不同时是男性
      if (acute.sex_code * you.sex_code !== 1) {
        await era.printAndWait(
          '以及接吻、爱抚、生育、育儿、二胎、三胎之类的额外津贴……虽然这些现在还没有明着写在家务工资表上，但要不了多久就会写上的吧。',
        );
      }
      await era.printAndWait([
        '按照这个家务工资表，如果 ',
        you.get_colored_name(),
        ' 能每天十次，那只要再过三十年，',
        you.get_colored_name(),
        ' 就能还清所有债务吧。',
      ]);
      await era.printAndWait([
        '在那之前 ',
        you.get_colored_name(),
        ' 也得修习拳法，这样在退役后 ',
        acute.get_colored_name(),
        ' 带 ',
        you.get_colored_name(),
        ' 回到老家时才能得到父亲的认可呢。',
      ]);
      await era.printAndWait([
        '对于 ',
        acute.get_colored_name(),
        ' 来说，这未尝不是一个美好结局的开始。但对于 ',
        you.get_colored_name(),
        ' 而言，当你欠下如此巨额的债务时，或许结局就已经注定。',
      ]);
      await era.printAndWait([
        '因被金钱关系所囚，',
        you.get_colored_name(),
        ' 迎来了结局……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
