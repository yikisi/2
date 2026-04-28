/**
 * @file 奇锐骏 - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
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
