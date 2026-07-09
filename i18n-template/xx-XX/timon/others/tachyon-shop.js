/**
 * @file 小卖部 - 系统提示
 * @author 幽白書
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  /**
   * 速子在队，热恋 & 融洽以上，第一次去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   */
  async start_first_love(tachyon, you, callname) {
    await tachyon.say_and_wait([
      '哦呀，',
      callname,
      '……居然会来到这里，真是……有那么急性吗……',
    ]);
    await printAndWait([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，满脸娇羞的栗毛',
      tachyon.uma_sex_title,
    ]);
    await printAndWait([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。',
    ]);
    await printAndWait([
      '表现可疑的',
      tachyon.sex,
      '，是 ',
      you.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      '兼爱人 ',
      tachyon.get_colored_name(),
    ]);
    if (get('exp:32:性爱次数') > get('exp:32:睡奸次数')) {
      await tachyon.say_and_wait(
        '……难道说，是我做的过头了导致需要药吗……不，不过……这种事也没办法的吧，毕竟需要实验彼此的相性……',
      );
      await tachyon.say_and_wait(
        '还有就是，那个……很舒服，所以……一次多买点吧，回去方便用❤️',
      );
    } else if (get('exp:0:性爱次数') > get('exp:0:睡奸次数')) {
      await tachyon.say_and_wait(
        '我，我说，你不会是要跟谁去做吧？……不，不是，不会吧，这些是为了……为了……为了和我一起做买的？',
      );
      await tachyon.say_and_wait(
        '真的吗？不会骗我吧？……我知道了，晚上我会期待着的❤️',
      );
    } else {
      await tachyon.say_and_wait([
        callname,
        '……嗯，我明白了，毕竟都开始交往了，这种觉悟我也已经做好了……',
      ]);
      if (you.sex_code === 1) {
        await tachyon.say_and_wait(
          '毕竟，听说男性人类的性欲是非常强的……说实话你能忍耐到现在才来我已经觉得很讶异了……',
        );
      }
      await tachyon.say_and_wait([
        '提前确认一下，虽然我不觉得你会做出那样的事，但……这些药，是为了和我做而买的，对吧？……',
        callname,
        '？',
      ]);
    }
    await tachyon.say_and_wait('总之，来看看今天的货吧');
  },
  /**
   * 速子在队，爱欲 & 融洽以上
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   * @param {boolean} is_first 是否是第一次去小卖部
   */
  async start_lust(tachyon, you, callname, is_first) {
    if (is_first) {
      await tachyon.say_and_wait([callname, '？你在这里做什么？']);
    } else if (!get('exp:32:性爱次数')) {
      tachyon.say('……又来了吗？这次又是跟哪个家伙……');
    } else {
      tachyon.say([
        '都那样了还嫌不够吗……真是性豪啊，',
        callname,
        '，我都想研究看看你的内在了',
      ]);
    }
    print([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，神秘兮兮的栗毛',
      tachyon.uma_sex_title,
      '，',
    ]);
    print([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。',
    ]);
    print([
      '表现可疑的',
      tachyon.sex,
      '，是 ',
      you.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait([
        callname,
        '……你知道这里是卖什么的吧……换句话说……你，你有那样的对象了？',
      ]);
      await printAndWait([
        tachyon.get_colored_name(),
        ' 不知为何一脸紧张的问道',
      ]);
      printButton('当然有了', 1);
      printButton('没有', 2);
      if ((await input()) === 1) {
        await tachyon.say_and_wait([
          '哦？对方是谁？居然会有人看上你这种全身发光的可疑人物？人类还是',
          tachyon.uma_sex_title,
          '？',
        ]);
        await tachyon.say_and_wait(
          '不，这只是对生物多样性的探讨及考察，提交自己喜欢的人的信息这也是你身为豚鼠最基础应做的情报共享……',
        );
        await tachyon.say_and_wait('也罢，反正总能找到机会问出来的');
      } else {
        await tachyon.say_and_wait(
          '……呵呵，不出我所料，像你这样全身发光的可疑人物，倒不如说要是有谁会喜欢上那我才要进行观察研究才是。',
        );
        await tachyon.say_and_wait([
          '不过这么一来，你要这些药的理由就很令人匪夷所思了。我说，',
          callname,
          ' 啊，你不会做出那种犯罪行为的吧',
        ]);
        await tachyon.say_and_wait(
          '话说回来，感觉也有点久没收到药物反应的回馈了……',
        );
        await tachyon.say_and_wait(
          '也罢，随便你用吧，为了研究，一切的代价都是可以尝试的……哪怕是我自己也一样',
        );
        await tachyon.say_and_wait(
          '我在暗示什么？呵呵，谁知道呢，就是不知道某位木头君是否能察觉我话中的意思了',
        );
      }
    }
    tachyon.say('总之，来看看今天的货吧');
  },
  /**
   * 速子在队，低爱慕 & 冷淡以上，第一次去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   */
  async start_first(tachyon, you, callname) {
    await tachyon.say_and_wait(['哦呀，这不是 ', callname, ' 吗？']);
    await printAndWait([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，神秘兮兮的栗毛',
      tachyon.uma_sex_title,
      '，',
    ]);
    await printAndWait([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷',
    ]);
    await printAndWait([
      '表现可疑的',
      tachyon.sex,
      '，是 ',
      you.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await tachyon.say_and_wait(
      '没想到你居然是这种人啊……罢了，也没什么，食色性也，不过居然会特别出来卖药，',
    );
    await tachyon.say_and_wait([
      '看来平常日的药量可以再加倍了……总之说说吧，你到底看上了哪位',
      tachyon.uma_sex_title,
      '？',
    ]);
    printButton('开口回答', 1);
    printButton('摇头拒绝', 2);
    if ((await input()) === 1) {
      print('输入对方的名字：');
      let _default = false;
      switch (await input()) {
        case '爱丽速子':
        case '速子':
        case '你':
        case '妳':
          if (get('relation:32:0') <= 150) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '，有些玩笑最好，还是不要说出口会比较好',
            ]);
            await printAndWait([
              tachyon.sex,
              '露出了皮笑肉不笑的表情，眼神却带着浓浓的警告意味',
            ]);
            await printAndWait([
              '这个问题似乎冒犯到了 ',
              tachyon.get_colored_name(),
              '，还是别这么说比较好……',
            ]);
          } else {
            await tachyon.say_and_wait(
              '这么喜欢我的话，明天就试试看这个药吧，',
            );
            await tachyon.say_and_wait([
              '不知道为什么喝下这个药的人都会说自己看见了美',
              tachyon.teen_sex_title,
              '的模样，除了那名美',
              tachyon.teen_sex_title,
              '外世界上其他东西看起来都是一片肉块……',
            ]);
            await tachyon.say_and_wait(
              '奇怪，这明明只是提升视力的药而已啊，到底是怎么回事',
            );
            await printAndWait([
              tachyon.sex,
              '随便的带过了 ',
              you.get_colored_name(),
              ' 说的话，看来并没有将其当真',
            ]);
          }
          break;
        case '曼城茶座':
        case '茶座':
          // 以茶座身份开始游戏不会触发
          if (get('cflag:0:模版角色') !== 25) {
            await tachyon.say_and_wait('居然是茶座……！');
            await printAndWait([
              tachyon.get_colored_name(),
              ' 不知为何露出了敬佩的神情',
            ]);
            await tachyon.say_and_wait(
              '你要什么尽管拿！我算你八折……不，七折！但条件是一定要把全程记录下来！',
            );
            await tachyon.say_and_wait(
              '按实验报告的格式写……算了，全程录像吧！',
            );
            await tachyon.say_and_wait(
              '咕呵呵呵，除了实验之外，居然还能看到那家伙陷于情欲的样子……太有趣了！',
            );
            await printAndWait([
              you.get_colored_name(),
              ' 被 ',
              tachyon.get_colored_name(),
              ' 忽然的连珠炮吓了一跳，连忙拒绝了',
              tachyon.sex,
              '的提议',
            ]);
            await tachyon.say_and_wait('咕……居然拒绝吗？算了');
            await printAndWait([
              tachyon.get_colored_name(),
              ' 失望的叹了口气，然后在',
              tachyon.sex,
              '的白大褂中开始翻找着什么',
            ]);
            await tachyon.say_and_wait([
              '这样的话……这个给你吧，',
              callname,
              '。',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' 从 ',
              tachyon.get_colored_name(),
              ' 手上拿到了一张器官捐赠同意书，受捐献单位是 ',
              tachyon.get_colored_name(),
              ' 实验室',
            ]);
            printButton('……', 1);
            await input();
            await tachyon.say_and_wait([
              '茶座的话，应该没有折磨尸体的兴趣，所以大概能留下八成的器官给我研究吧，到时候跟',
              tachyon.sex,
              '商量一下，切的干净点……',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' 全身冒出了冷汗，看着眼前笑瞇瞇的说出上述话语的 ',
              tachyon.get_colored_name(),
            ]);
            await tachyon.say_and_wait(
              '哈哈哈，开玩笑的啦……不过以防万一还是签一下吧？',
            );
          } else {
            _default = true;
          }
          break;
        case '大和赤骥':
        case '大和':
        case '赤骥':
          // 以大和身份开始游戏不会触发
          if (get('cflag:0:模版角色') !== 9) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '，以防万一我问一下，如果明天是你人生的最后一天，你会想喝什么颜色的药',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' 用一种近乎冷酷的眼神看着 ',
              you.get_colored_name(),
            ]);
            printButton('「……！？」', 1);
            printButton('「饶命！」', 2);
            tachyon.sex_code - 1 &&
              printButton('「起码让我死在大和的胸部里！」', 3);
            await input();
            await tachyon.say_and_wait([
              '呵呵……只是开玩笑的而已……不过 ',
              callname,
              '，你比较喜欢山还是海？',
            ]);
            await tachyon.say_and_wait(
              '不，我怎么会问这种蠢问题，果然还是喜欢我实验室的福尔马林吧？',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              ' 的眼神看起来不像在开玩笑的样子……',
            ]);
          } else {
            _default = true;
          }
          break;
        case '森林宝穴':
        case '宝穴':
          // 以宝穴身份开始游戏不会触发
          if (get('cflag:0:模版角色') !== 94) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ' 啊，操笨蛋是违法的哦？',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' 用一副看人渣的眼神看着 ',
              you.get_colored_name(),
            ]);
            await tachyon.say_and_wait([
              '虽然以商人及疯狂科学家的身份，我不应该管这么多，但我有点想报警了，',
              callname,
            ]);
            await printAndWait([you.get_colored_name(), ' 只能干笑着']);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await tachyon.say_and_wait(
          '哦……有意思，这样的话记得好好把使用后的数据及情绪变化写成报告形式提交过来',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          ' 彷佛很感兴趣的样子，但 ',
          you.get_colored_name(),
          ' 看得出那只是对实验数据的兴趣而已',
        ]);
      }
    } else {
      await tachyon.say_and_wait('这么害羞做什么，我又不会告诉别人');
      await printAndWait([tachyon.get_colored_name(), ' 露出了扫兴的表情']);
    }
    await tachyon.say_and_wait('总之，来看看今天的货吧');
  },
  /**
   * 速子在队，怀疑，去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   */
  start_doubt(tachyon, you) {
    tachyon.say('……来了啊，这次又是来祸害谁的？');
    print([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，满脸娇羞的栗毛',
      tachyon.uma_sex_title,
    ]);
    print([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，但在看向 ',
      you.get_colored_name(),
      ' 的瞬间变为了看见脏东西的眼神，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。',
    ]);
    tachyon.say(
      '啧……说真的，把药卖给你这种人真的没问题吗，类似的事情我已经想了不下数十次了啊',
    );
    tachyon.say('算了，你自己看今天有什么货吧');
  },
  /**
   * 速子在队，失望，去小卖部
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   */
  start_hate(tachyon, you) {
    tachyon.say('……啧');
    print([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，神秘兮兮的栗毛',
      tachyon.uma_sex_title,
      '，',
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，',
    ]);
    print([
      '但在看到 ',
      you.get_colored_name(),
      ' 的瞬间转为了仇视的神情，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。',
    ]);
    print([
      '戴着仇恨眼神望着 ',
      you.get_colored_name(),
      ' 的',
      tachyon.sex,
      '，是 ',
      you.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      '如果不是因为没有更好用的实验动物了，真想在这些药里随便弄点能让人生不如死的东西啊',
    );
    print([tachyon.sex, '毫不在意的说了些危险的话']);
    tachyon.say('自己看，把钱留下之后就快滚');
  },
  /**
   * 速子在队，通用情况
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 速子对玩家的称呼
   */
  async start(tachyon, you, callname) {
    tachyon.say(['哦呀，这不是 ', callname, ' 吗？']);
    print([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，神秘兮兮的栗毛',
      tachyon.uma_sex_title,
      '，',
    ]);
    print([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。',
    ]);
    print([
      '表现可疑的',
      tachyon.sex,
      '，是 ',
      you.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      '也不是第一次的雏鸟了，都知道是干什么的吧？要什么药尽管说，喝完隔天记得准时把实验结果交上来',
    );
    printButton('「都不装直接说是实验了……」', 1);
    printButton('「既然是实验药物那不该跟我收钱的吧」', 2);
    await input();
    tachyon.say([
      '嗯哼～～要是你不介意你买的药里面混入点会让生殖器发光、全身肌肤变透明、射出来的精子具有高腐蚀性等功能的实验用药的话，我也可以不收你钱没关系',
    ]);
    print([you.get_colored_name(), ' 老老实实的掏出了钱包来']);
    tachyon.say('这才乖嘛，那么来看看今天的货吧');
  },
  /**
   * 速子在队，进入小卖部事件的最后，速子在队情况下任意分支的最后一句都是这个
   * @param {CharaTalk} tachyon 速子
   */
  async start_final_welcome(tachyon) {
    await printAndWait([
      tachyon.get_colored_name(),
      ' 拉开了',
      tachyon.sex,
      '的白大褂……',
    ]);
  },
  /**
   * 速子不在队，纯粹初见
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   */
  async start_first_out_of_team(tachyon, you) {
    await tachyon.say_as_unknown_and_wait(
      '哦呀，是新的肥羊……不，豚鼠……我的意思是，客人啊',
    );
    await printAndWait([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 遇见了一名身穿白大褂，神秘兮兮的栗毛',
      tachyon.uma_sex_title,
    ]);
    await printAndWait([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，',
    ]);
    await printAndWait('那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。');
    await tachyon.say_as_unknown_and_wait(
      '哈哈哈，既然都来到这里了，想必你很清楚这里是做什么的吧。',
    );
    printButton('「不知道」', 1);
    printButton('「……不知道」', 2);
    printButton('「知道」', 3);
    switch (await input()) {
      case 1:
        await tachyon.say_as_unknown_and_wait(
          '哦呀，居然是纯洁的羔羊君吗？没关系，看完就知道了。',
        );
        break;
      case 2:
        await tachyon.say_as_unknown_and_wait(
          '呵呵，何必说这种没人相信的谎言呢，真是不诚实啊。',
        );
        break;
      case 3:
        await tachyon.say_as_unknown_and_wait(
          '诚实的好孩子……不，这种情况而言应该叫坏孩子才对吧？',
        );
    }
    await tachyon.say_as_unknown_and_wait('那么就让你看看今天的货吧。');
    await printAndWait([
      '栗毛',
      tachyon.uma_sex_title,
      '拉开了',
      tachyon.sex,
      '的白大褂……',
    ]);
  },
  /**
   * 速子不在队，但是已经触发过第一环招募事件
   * @param {CharaTalk} tachyon 速子
   * @param {CharaTalk} you 玩家
   * @param {boolean} is_first 是否是第一次去小卖部
   */
  async start_out_of_team(tachyon, you, is_first) {
    if (is_first) {
      await tachyon.say_as_unknown_and_wait(
        '哦呀，是新的肥羊……不，豚鼠……我的意思是，客人啊',
      );
    } else {
      tachyon.say('哦呀，又是你啊，客人君，训练员原来是如此乱性的行业吗？啧啧');
    }
    print([
      '在闲逛着的 ',
      you.get_colored_name(),
      ' 看见了一名身穿白大褂，神秘兮兮的栗毛',
      tachyon.uma_sex_title,
      '，',
    ]);
    print([
      tachyon.sex,
      '那如百叶窗一般的深红色眼眸孕育着疯狂及神秘，那看上去有些偏大的白大褂被里面挂满的东西塞的紧绷。',
    ]);
    print([
      '这样的',
      tachyon.sex,
      '，是学园中著名的问题儿童，',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait(
        '哦？你看上去有些眼熟的样子……嗯，没记错的话，你应该是名训练员吧',
      );
      printButton('「不是」', 1);
      printButton('「……不是」', 2);
      printButton('「是」', 3);
      switch (await input()) {
        case 1:
          await tachyon.say_and_wait(
            '嗯？是我记错了吗？……还是说，是在黑市碰到的……',
          );
          await printAndWait([
            tachyon.get_colored_name(),
            ' 喃喃说了个有些令人毛骨悚然的词',
          ]);
          break;
        case 2:
          await tachyon.say_and_wait([
            '哈哈哈，放心放心！这方面上我的嘴可是很严的，不会告诉你家担当',
            tachyon.uma_sex_title,
            '的',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            ' 露出了「我都懂」的神秘微笑',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            '……居然这么干脆的承认了吗，我开始为你这家伙的担当',
            tachyon.uma_sex_title,
            '感到可怜了',
          ]);
          await printAndWait([tachyon.get_colored_name(), ' 露出了无语的表情']);
      }
    }
    tachyon.say('总之，先来看看今天都有什么货吧。');
    await printAndWait([
      tachyon.get_colored_name(),
      ' 拉开了',
      tachyon.sex,
      '的白大褂……',
    ]);
  },
  /**
   * 离开小卖部，爱欲 & 融洽以上，购买数量少于三件
   * @param {CharaTalk} tachyon 速子
   */
  end_love_buy_few(tachyon) {
    tachyon.say(
      '欸……这么少够用吗？什么？质疑你的能力？不，我不是那个意思……要好好惩罚我吗？呵呵，那我就好好期待着晚上了❤️',
    );
  },
  /**
   * 离开小卖部，爱欲 & 融洽以上，购买数量多于十件
   * @param {CharaTalk} tachyon 速子
   */
  end_love_buy_many(tachyon) {
    tachyon.say(
      '！？居然买这么多……会不会撑不住呢……呵呵，真是令人期待，而且做完之后可以最直接感受到药物的使用后变化……',
    );
    tachyon.say('今天晚上让我好好享受一番吧❤️……');
  },
  /**
   * 离开小卖部，购买数量少于三件
   * @param {CharaTalk} tachyon 速子
   * @param {boolean} is_first 是否第一次进小卖部
   */
  end_buy_few(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown('哦呀，买的这么少够用吗？');
      tachyon.say_as_unknown(
        '不，只是好奇而已，毕竟这种东西也有个体差异的嘛，如果可以还是希望有更多实验数……没什么',
      );
    } else {
      tachyon.say('哦呀，买的这么少够用吗？');
      tachyon.say(
        '不，只是好奇而已，毕竟这种东西也有个体差异的嘛，如果可以还是希望有更多实验数……没什么',
      );
    }
  },
  /**
   * 离开小卖部，购买数量多于十件
   * @param {CharaTalk} tachyon 速子
   * @param {boolean} is_first 是否第一次进小卖部
   */
  end_buy_many(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown(
        '哦呀，居然买这么多吗？不，只是好奇而已，毕竟这种东西还是有个体差异的吗？……',
      );
      tachyon.say_as_unknown(
        '顺带一提，个人来讲期待下次光临的时候能附上使用评价哦，如果能以规范的实验报告格式提交就更好了',
      );
    } else {
      tachyon.say(
        '哦呀，居然买这么多吗？不，只是好奇而已，毕竟这种东西还是有个体差异的吗？……',
      );
      tachyon.say(
        '顺带一提，个人来讲期待下次光临的时候能附上使用评价哦，如果能以规范的实验报告格式提交就更好了',
      );
    }
  },
};
