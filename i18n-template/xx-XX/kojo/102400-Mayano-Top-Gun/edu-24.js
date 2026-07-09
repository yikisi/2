/**
 * @file 摩耶重炮 - 育成
 * @author 黑奴二号
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '额外的自主训练';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_17 摩耶重炮对鲁铎象征的称呼
     * @param {PrintedSpan} t_call_l 东海帝王对鲁铎象征的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     */
    const f = async (
      maya,
      teio,
      you,
      callname,
      call_3,
      call_17,
      t_call_l,
      t_call_m,
    ) => {
      await maya.say_and_wait('那个呀！训练也结束了～要不要和人家去个好地方？');
      era.printButton('「好地方是指哪里？」', 1);
      await era.input();
      await maya.say_and_wait(
        '跟你说跟你说！有一个景点，可以看见非常闪亮的夜景──',
      );
      await teio.say_and_wait(['嘿哟，嘿哟……咦？是 ', t_call_m, '～！']);
      await maya.say_and_wait(['啊，是 ', call_3, '！嗨！']);
      await teio.say_and_wait(
        '我正好在找你！我想跟你说，我今天可能会晚点回去！',
      );
      await maya.say_and_wait([
        '呀☆居然会晚归，看来有进展～！',
        call_3,
        ' 是大人了～！',
      ]);
      await teio.say_and_wait([
        '嗯！刚才看了 ',
        t_call_l,
        ' 的比赛后，我就很想去跑一下！',
      ]);
      await teio.say_and_wait([
        '以 ',
        t_call_m,
        ' 的方式来说……可能是很闪闪发亮？',
      ]);
      await maya.say_and_wait([
        '哇……！我懂我懂！',
        call_17,
        ' 奔驰的样子真的很帅气！',
      ]);
      await maya.say_and_wait('嗯～～我好像开始兴奋起来了……');
      await maya.say_and_wait([
        callname,
        '，还是别看夜景了！人家现在想要闪闪发亮！',
      ]);
      era.printButton('「我陪你！」', 1);
      era.printButton('「休息也是很重要的」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['嘿嘿，不愧是 ', callname, '！']);
        await teio.say_and_wait(
          '那我们一起并跑练习吧！这样我也比较能激起斗志！',
        );
        await maya.say_and_wait('没问题！我要起飞了☆');
        await era.printAndWait([
          maya.get_colored_name(),
          ' 拿出全力进行了额外训练。',
        ]);
      } else {
        await maya.say_and_wait(
          '嗯！说得也是！跟肌肤一样，要休息才会变得充满光泽对吧！',
        );
        await maya.say_and_wait(
          '我知道了！就用闪闪发亮的夜景，来为人家的耀眼充电吧♪',
        );
        await teio.say_and_wait('那我先走了！我会在门禁前回来的～～！');
        await era.printAndWait([
          '于是 ',
          you.get_colored_name(),
          ' 和 ',
          maya.get_colored_name(),
          ' 一起欣赏夜景，让',
          maya.sex,
          '的身体好好地休息了',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '保重身体！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maya, you, callname, fail_again) => {
      await era.printAndWait([
        '摩耶重炮在训练的过程中受了伤，',
        you.get_colored_name(),
        ' 急忙带',
        maya.sex,
        '到保健室。',
      ]);
      await maya.say_and_wait('啊～好痛！这下子可能不能训练了～');
      era.printButton('「乖乖静养吧……！」', 1);
      await era.input();
      await maya.say_and_wait('嗯……是可以啦……');
      await maya.say_and_wait([
        '要是 ',
        callname,
        ' 能照顾我，我说不定会更有精神♪',
      ]);
      era.printButton('「我知道了」', 1);
      era.printButton('「你还是小孩子呢」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('呀☆真是太好了～！');
        await maya.say_and_wait('那么那么，先用额头帮我量体温……');
        era.printButton('「体温？你是受伤吧？」', 1);
        await era.input();
        await maya.say_and_wait(
          '别在意，别在意！用心跳加速的感觉，让痛痛『咻！』地一声飞走吧──',
        );
        await maya.say_and_wait('啊呜！！！！奇、奇怪？好像真的……很痛。');
        await era.printAndWait([
          '你慌张地照顾得意忘形的摩耶重炮，总算是让',
          maya.sex,
          '乖乖休息了……',
        ]);
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait('咦！？才不是呢！这是『大人』的撒娇方式～！');
        await maya.say_and_wait(
          '怪了，书上明明有写用这招就能『一击穿心☆』的说……',
        );
        await maya.say_and_wait(
          '我懂了！是因为我没有发烧！要是我发烧，一定能像书上那样──',
        );
        era.printButton('「乖、乖、休、息！」', 1);
        await era.input();
        await maya.say_and_wait('呜呜……好啦～～');
        await era.printAndWait([
          '虽然 ',
          maya.get_colored_name(),
          ' 一脸不满，最后还是总算让',
          maya.sex,
          '乖乖休息了……',
        ]);
      } else {
        await maya.say_and_wait(['……难道，是不合 ', callname, ' 的喜好吗？']);
        await maya.say_and_wait([
          '那么那么，',
          callname,
          '！人家要做什么你才会『心动』～？',
        ]);
        era.printButton('「看你健康才最让我开心」', 1);
        await era.input();
        await maya.say_and_wait('健康……？只要人家恢复健康，你就会开心了？');
        await maya.say_and_wait('嘿嘿，嘿嘿嘿……嘿嘿嘿嘿嘿！');
        await maya.say_and_wait('我知道了！我会好好地休息，恢复健康的～！');
        await maya.say_and_wait('然后啊然后啊！到时候再一起训练吧☆');
        await era.printAndWait(
          '就跟自己宣示的一样，摩耶重炮好好地休息……健康地继续训练！',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '严禁逞强！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maya, you, callname, fail_again) => {
      await maya.say_and_wait('嘿嘿，搞砸了～');
      await maya.say_and_wait([
        '不过 ',
        callname,
        ' 也太夸张了啦～明明就不是很严重的伤！',
      ]);
      await maya.say_and_wait(
        '好了，赶快回去训练吧！人家已经是大人了，这点伤不算什么──',
      );
      await maya.say_and_wait('……好痛～～！！');
      era.printButton('「你还好吧！？」', 1);
      await era.input();
      await maya.say_and_wait('我没事……就算很痛，也会说不痛才像个大人。');
      await maya.say_and_wait('所以我才不会说很痛！');
      await maya.say_and_wait('跟小朋友一样，很逊……人家才不要那样～～！');
      era.printButton('「那就要有『大人』的样子」', 1);
      era.printButton('「才不会很逊！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('大人的样子……？是指乖乖休息吗？');
        await maya.say_and_wait('原来如此……那样也算『大人』啊。');
        await maya.say_and_wait(
          '……我知道了！人家虽然不会痛，但会像大人一样，乖乖休息的。',
        );
        await maya.say_and_wait('虽然根……根本不会痛……');
        await era.printAndWait('就这样，总算是让摩耶重炮休息了。');
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait([callname, '……可是……']);
        era.printButton('「硬是逞强让伤势恶化才逊」', 1);
        await era.input();
        await maya.say_and_wait('啊！确实没错！');
        await maya.say_and_wait(
          '……不、不过不要紧的！只是有点痛而已，这点伤不会恶化的──',
        );
        await maya.say_and_wait('唔～～！！好痛────！！');
        await era.printAndWait(
          '硬要装没事却导致伤势恶化，结果变成要休息好几天了……',
        );
      } else {
        await maya.say_and_wait('……那个啊，老实说，受伤的地方，超级痛的。');
        await maya.say_and_wait([
          '可是可是，我想认真和 ',
          callname,
          ' 训练……！',
        ]);
        era.printButton('「好好休息，之后再努力吧」', 1);
        await era.input();
        await maya.say_and_wait('……嗯！');
        await era.printAndWait(
          '等待伤势恢复虽然花了不少时间……但总算是恢复健康了。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start_low_sta: (() => {
    const title = '竞赛之前';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '赛前去休息室发现……',
        maya.get_colored_name(),
        ' 好像正在脑中模拟比赛。',
      ]);
      await maya.say_and_wait('然后前面的人过来的话，就『咻！』地突破……');
      era.printButton('（……好惊人的集中力）', 1);
      await era.input();
      await maya.say_and_wait(['……咦！？', callname, '！？']);
      await maya.say_and_wait(
        '啊哇哇，吓我一跳！我完全没注意到！怎么会这样！？',
      );
      era.printButton('「你刚才好像很专注」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿，对啊！人家从刚才心脏就一直跳个不停。');
      await maya.say_and_wait(['不过……接着就换 ', callname, ' 咯！']);
      await maya.say_and_wait('我会让你沉迷于我奔驰的样子的♪');
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛获胜！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('Victory☆胜利的摩耶重炮光荣凯旋！');
      era.printButton('「恭喜！」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿！有开心吗？？人家的表现有让你心动吗？？');
      era.printButton('「当然有」', 1);
      era.printButton('「还不够」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('哇☆太好了，太好了！');
        await maya.say_and_wait('不过，人家发现了♪我们还能感到更加心动！');
        await maya.say_and_wait('所、以、说！下场比赛……要做好觉悟哦☆');
      } else {
        await maya.say_and_wait('……！！');
        await maya.say_and_wait([
          '呀☆',
          callname,
          ' 真是太棒了！人家也有同样的想法～！',
        ]);
        await maya.say_and_wait(
          '那个啊那个啊！最后的直线……终点板看起来十分耀眼！',
        );
        await maya.say_and_wait('但是……抵达终点之后，那份耀眼和心动都不见了……');
        await maya.say_and_wait('于是我明白了！人家还能感到更加心动！');
        await maya.say_and_wait([
          '所、以、说！',
          callname,
          '，我还会让你更加更～加心动的♪',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait([
        '啊，',
        callname,
        '，你终于来了！比赛结束了，我们快走吧～！',
      ]);
      await maya.say_and_wait('然后啊然后啊，我想跟你一起吃赛场的限定甜点♪');
      era.printButton('「在这之前先检讨比赛……」', 1);
      await era.input();
      await maya.say_and_wait('咦？这次的确是输掉了，不过我觉得下次会赢啊？？');
      await maya.say_and_wait(
        '我已经清楚知道大家有多强，还有赛道抢位的方式了♪没事没事！',
      );
      era.printButton('「我很期待」', 1);
      era.printButton('「……来练习吧！」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait(
          '包在我身上☆人家会跑出超乎你期待的表现！毕竟──',
        );
        await maya.say_and_wait('──用好的方式打破期待，这才是成熟的女人……');
        await maya.say_and_wait('书上是这么写的♪');
        await maya.say_and_wait([
          '下次会获胜，让 ',
          callname,
          ' 听我的话！一定会！',
        ]);
      } else {
        await maya.say_and_wait([
          '嗯～既然 ',
          callname,
          ' 都这么说了，我会加油的……',
        ]);
        await maya.say_and_wait([callname, ' 也太担心了吧？？']);
        era.printButton('「因为我希望你拿下第一」', 1);
        await era.input();
        await maya.say_and_wait('……咦？所以说，是为了人家吗？');
        await maya.say_and_wait('呀☆我备受关爱耶！');
        await maya.say_and_wait('我知道了！人家会加油的♪');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '竞赛败北';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('啊～输掉了～还以为会赢的说。');
      era.printButton('「因为其他人也很厉害」', 1);
      await era.input();
      await maya.say_and_wait('……其他人？');
      await maya.say_and_wait('紧急情况！不行不行，现在不能讲这种话～～！！');
      await maya.say_and_wait(['我希望 ', callname, ' 眼里只有人家！']);
      await maya.say_and_wait(
        '我说我说！就算那么说，你还是LOVE☆摩耶重炮……对吧！？对不对！！',
      );
      era.printButton('「当然！」', 1);
      era.printButton('「……可能得看你的表现而定」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('呼……好险……');
        await maya.say_and_wait('……就是那个啊，我下次比赛会拿下第一的。');
        await maya.say_and_wait('所以……要帮我加油哦！');
        await maya.say_and_wait('我一定……绝对会让你觉得人家比其他人还要厉害！');
      } else {
        await maya.say_and_wait(['哼～！', callname, ' 好坏心！']);
        await maya.say_and_wait('好哦！下场比赛我一定会跑出超棒的成绩！');
        await maya.say_and_wait(
          '我要让你知道人家是很棒的女人，比任何人都还要可爱！',
        );
        await maya.say_and_wait('横刀夺爱正合我意！！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '下次不会输了！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait(['又输了……怎么办，', callname, '……人、人家……']);
      era.printButton('「摩耶重炮……」', 1);
      await era.input();
      await maya.say_and_wait('──超～级兴奋的～～！！');
      era.printButton('「咦！？」', 1);
      await era.input();
      await maya.say_and_wait('不知道该怎么说，有种引擎被发动的感觉！');
      await maya.say_and_wait(
        '以为办得到的事情却办不到！人家心跳加速到好像快爆炸了！',
      );
      await maya.say_and_wait('对了！就这么『咻──！』地冲去训练好了！？');
      era.printButton('「你先冷静一下」', 1);
      era.printButton('「来训练吧！」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('咦────────！？');
        await maya.say_and_wait('引擎已经热开，随时都能起飞了耶！？');
        era.printButton('「紧急起飞是导致失速的原因！」', 1);
        await era.input();
        await maya.say_and_wait('呜呜！的确！这样人家会坠落……！');
        await maya.say_and_wait('好险好险！应该先确实维修好引擎才行……对吧！');
        await era.printAndWait([
          '之后，',
          you.get_colored_name(),
          ' 和 ',
          maya.get_colored_name(),
          ' 一起针对下场比赛进行准备。',
        ]);
      } else {
        await maya.say_and_wait(['呀☆不愧是 ', callname, '！最喜欢你了！']);
        await maya.say_and_wait('好！人家要拿出真本事了！');
        await maya.say_and_wait([
          '我会展现特技飞行，',
          callname,
          '，要小心不要掉下去了……知道吗♪',
        ]);
        await era.printAndWait([
          '就跟自己宣示的一样，',
          maya.get_colored_name(),
          ' 拿出全力投入在训练上……实力更加精湛了！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_16: (() => {
    const title = '我想闪闪发亮！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '这是在为了出道战，而持续进行训练时的某日所发生的事──',
      );
      await maya.say_and_wait([callname, '☆我跑完沙土赛道三圈咯！']);
      era.printButton('「辛苦了！」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿～♪人家还不累哦～！');
      await maya.say_and_wait('欸欸，接下来要训练什么？');
      await maya.say_and_wait('按照之前的训练项目来看，应该是比较轻松的训练？');
      await era.printAndWait([
        '──就跟',
        maya.sex,
        '说的一样，这次是以柔软沙土为主去安排训练内容。',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' 的身体还在成长当中。',
        you.get_colored_name(),
        ' 原本想说不要让',
        maya.sex,
        '的脚有太多负担……',
      ]);
      era.printButton('「你想再稍微努力一下？」', 1);
      await era.input();
      await maya.say_and_wait('不对！只有『稍微』是不够的！');
      await maya.say_and_wait('因为我要参赛的可是闪耀系列赛哦！');
      await maya.say_and_wait(
        '令人兴奋，又充满我想知道的事情，场上的大家也都很耀眼……',
      );
      await maya.say_and_wait('假如能在闪耀系列赛出赛，我想先让自己跑得更快！');
      await maya.say_and_wait('嘿嘿，而、且、啊～');
      await maya.say_and_wait([
        callname,
        ' 应该也认为人家还能『做到更多』对吧？',
      ]);
      era.printButton('「那当然了！」', 1);
      await era.input();
      await maya.say_and_wait('耶，我答对了～☆');
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 在不改变基本方针的情况下，让',
        maya.sex,
        '尝试了各种不同的训练──',
      ]);
      await maya.say_and_wait('……研究比赛。研究……吗……！');
      await maya.say_and_wait('啊哈哈♪有种像是朝着大人的阶梯，冲刺迈进的感觉☆');
      era.printButton('「这也是种训练」', 1);
      await era.input();
      await maya.say_and_wait('是是是，我知道☆而且，这方面人家很拿手！');
      await maya.say_and_wait('……嗯？');
      await maya.say_and_wait('咦，视频已经播完了吗？只过了半小时吧？');
      await maya.say_and_wait(
        '啊，我懂了！是用这种方式，要吊人家胃口的作战吧～',
      );
      await maya.say_and_wait('这、就、是……大人会用的欲擒故纵☆……呀☆');
      await era.printAndWait('话虽如此──');
      await maya.say_and_wait(['啊，', callname, '。这个视频不用再看了！']);
      await maya.say_and_wait(
        '进入第三弯道后，一号的女生会『咻──！』地提早超前吧？',
      );
      era.printButton('「是吗？」', 1);
      await era.input();
      await maya.say_and_wait('嗯，因为我就是知道。你可以看我讲的对不对。');
      await era.printAndWait([
        '被',
        maya.sex,
        '这么催着，',
        you.get_colored_name(),
        ' 把视频快转进行确认……',
      ]);
      await maya.say_and_wait('你看～☆跟我讲的一样～！');
      await maya.say_and_wait('嘿嘿，那来看下一个！下一个！！');
      await era.printAndWait([
        maya.sex,
        '就照着这股气势，把 ',
        you.get_colored_name(),
        ' 准备的所有比赛视频都看完了……',
      ]);
      await maya.say_and_wait(['咦？', callname, '。难道已经没了吗？']);
      era.printButton('「……来进行别的训练吧」', 1);
      await era.input();
      await maya.say_and_wait('啊！这样啊～！要继续训练我也很欢迎哦☆');
      await era.printAndWait('──于是为了锻炼心肺功能，接着来到了泳池。');
      await maya.say_and_wait(
        '也就是说，要测我在不换气的情况下，可以游多少距离，对吧！',
      );
      await maya.say_and_wait(
        '顺便问一下！大概要游多远，你才会称赞人家表现得超棒？',
      );
      await era.printAndWait(
        '……平常有练习的话，大概能游75米。那么第一次……100米应该差不多。',
      );
      await era.printAndWait([
        '不过曾经有赛',
        maya.uma_sex_title,
        '游了300米。既然都来这里测试了──',
      ]);
      era.printButton('「就试着以300米为目标吧」', 1);
      await era.input();
      await maya.say_and_wait('收到！那我开始游了！');
      await maya.say_and_wait('唉……');
      await maya.say_and_wait('可恶～为什么～！？只游一半就不行了～！');
      await era.printAndWait(
        '不过一半──150米也是很厉害的纪录了。如果之后能一点一滴持续练习，迟早能游300米……',
      );
      await maya.say_and_wait('唔～再游一次！');
      await maya.say_and_wait('这次一定要游300米☆');
      era.printButton('「这还只是第二次耶！？」', 1);
      await era.input();
      await maya.say_and_wait('嗯，已经是第二次了。');
      await maya.say_and_wait(
        '而且，该说是出力的诀窍吗？我游到一半的时候也已经懂了☆',
      );
      await maya.say_and_wait('嘿嘿♪赶快来试试看！');
      await maya.say_and_wait('啊！！');
      await maya.say_and_wait([
        callname,
        '！要是我办到的话，要再给我新的课题！知道吗♪',
      ]);
      await maya.say_and_wait('嘻嘻☆你收到了吗？');
      await era.printAndWait([
        '……于是，为了满足',
        maya.sex,
        '的要求，',
        you.get_colored_name(),
        ' 死命地绞尽脑汁。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '迎向出道战';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '终于来到 ',
        maya.get_colored_name(),
        ' 的出道战当天了！',
      ]);
      await maya.say_and_wait([
        '你看你看！',
        callname,
        '！我今天不是穿运动服！',
      ]);
      await maya.say_and_wait('你知道为什么吗～？');
      era.printButton('「因为要参加出道战！」', 1);
      await era.input();
      await maya.say_and_wait('叮咚叮咚，答对了！给你拉勾和我的第一名章！');
      await maya.say_and_wait([
        '所以说……',
        callname,
        '！视线千万不能从人家身上移开哦。',
      ]);
      await maya.say_and_wait(
        '要睁大眼睛看好人家在闪耀系列赛上闪闪发亮的样子哦♪',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '希望延长飞行！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '虽然 ',
        maya.get_colored_name(),
        ' 的出道战就这样顺利地结束了──',
      ]);
      await maya.say_and_wait('唔唔……嗯……？');
      await maya.say_and_wait('嗯嗯嗯……？');
      await era.printAndWait([
        '从刚才开始 ',
        maya.get_colored_name(),
        ' 的样子就不太对劲……',
      ]);
      era.printButton('「怎么了吗？」', 1);
      await era.input();
      await maya.say_and_wait('嗯……也不是怎么了。只是想说结束了啊！');
      await maya.say_and_wait([
        '我说我说，',
        callname,
        '！出道战真的就这样结束了吗？',
      ]);
      await maya.say_and_wait('你没有偷偷瞒着我什么吧？');
      await era.printAndWait([
        '……就算',
        maya.sex,
        '这么说，出道战是每个人只能体会一次的事情。',
      ]);
      await maya.say_and_wait('咦……？');
      await era.printAndWait([
        '……不过，',
        maya.get_colored_name(),
        ' 看起来丝毫不觉得满足。',
      ]);
      era.printButton('「再参加更多比赛吧」', 1);
      await era.input();
      await maya.say_and_wait('嗯…………');
      await maya.say_and_wait('……嗯，就这么办吧。');
      await maya.say_and_wait('毕竟终于成功出道了。终于来到这里了。');
      await maya.say_and_wait('闪耀系列赛……');
      await maya.say_and_wait('……应该是令人感到兴奋，并能闪闪发亮的竞赛才对。');
    };
    f.title = title;
    return f;
  })(),
  ws_date: (() => {
    const title = '来约会吧';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '出道战结束后过了几个月。正当大家一如往常训练的时候──',
      );
      await maya.say_and_wait('……');
      await maya.say_and_wait('……啊。');
      era.printButton('「怎么了？」', 1);
      await era.input();
      await maya.say_and_wait(['哇呀！？', callname, '！？']);
      await maya.say_and_wait('没事，没什么！是没什么事啦……');
      await maya.say_and_wait('……唉。');
      await era.printAndWait('──嘴巴上说没事，却大大地叹了一口气。');
      era.printButton('「去散散心吧」', 1);
      await era.input();
      await maya.say_and_wait('散心……是要约会吗？');
      era.printButton('「是啊」', 1);
      await era.input();
      await maya.say_and_wait('真的吗！？');
      await maya.say_and_wait([
        '太棒了！那给我一分钟做准备！要和 ',
        callname,
        ' 去约会，约会☆',
      ]);
      await maya.say_and_wait([
        '嘿嘿，',
        callname,
        ' 会让我体验到怎样的大人约会呢～♪',
      ]);
      await era.printAndWait([
        '……就这样决定要出门散心了。说到',
        maya.sex,
        '会开心的地方──',
      ]);
      await maya.say_and_wait('约会最后还是要去人家最能闪闪发亮的地方才行！');
      await era.printAndWait('──果然只有那里吧。');
      await era.printAndWait('（哇啊啊啊啊啊啊────！！）');
      await maya.say_and_wait('这里是……');
      era.printButton('「是你最能闪闪发亮的地方哦」', 1);
      await era.input();
      await maya.say_and_wait('…………');
      await maya.say_and_wait(['……', callname, ' 现在还这么认为吗？']);
      await maya.say_and_wait(
        '『其实跟我想的好像不太一样』假如人家现在说出这种话……你会生气吗？',
      );
      era.printButton('「怎么突然这么说？」', 1);
      await era.input();
      await maya.say_and_wait('嗯…………');
      await maya.say_and_wait(
        '……人家啊，一直以为只要上场比赛，就一定能感受到兴奋的心情。',
      );
      await maya.say_and_wait([
        '在场上比赛的',
        maya.child_sex_title,
        '，每一个都很耀眼吧？',
      ]);
      await maya.say_and_wait(
        '所以不管是出道战还是其他比赛，我一直都非常期待。',
      );
      await maya.say_and_wait('但是，实际上场比赛后才发现，总觉得……不太一样。');
      await maya.say_and_wait('……啊，原来就这样啊。好像有点没意思。');
      await maya.say_and_wait('我其实知道不能够讲这种话。可是……');
      await maya.say_and_wait('…………我就是会觉得好无聊。');
      era.printButton('「这样啊」', 1);
      await era.input();
      await maya.say_and_wait('…………嗯。');
      await maya.say_and_wait('………………');
      era.printButton('「还真是听到一件好事了！」', 1);
      await era.input();
      await maya.say_and_wait('咦……？');
      await era.printAndWait([
        '因为在闪耀系列赛上，',
        maya.sex,
        '体验到的只是出道战等级的水准。',
      ]);
      await era.printAndWait([
        '单纯只是这点程度无法满足 ',
        maya.get_colored_name(),
        ' 而已。既然这样，只要朝更高的目标迈进就好了。',
      ]);
      await era.printAndWait([
        '将来会有更多和强者们竞争的机会，也还有',
        maya.sex,
        '所不知的比赛。',
      ]);
      await era.printAndWait([
        '所以如果现阶段造成',
        maya.sex,
        '烦恼的来源，是「感到无聊」这件事的话──',
      ]);
      era.printButton('「就让之后变得更有趣吧！」', 1);
      await era.input();
      await maya.say_and_wait('……有趣？');
      await maya.say_and_wait('真的……办得到吗？因为我已经──');
      era.printButton('「为了让你能闪闪发亮，我会加油哦」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await era.printAndWait([
        maya.get_colored_name(),
        ' 一定有属于',
        maya.sex,
        '自己，独一无二的闪耀方式。',
      ]);
      await era.printAndWait([
        '既然好不容易担任了像 ',
        maya.get_colored_name(),
        ' 这样如此有才能的赛',
        maya.uma_sex_title,
        '的签约训练员──',
      ]);
      await era.printAndWait([
        '──为',
        maya.sex,
        '准备能发挥才能的舞台，找出专属于',
        maya.sex,
        '的成长方法，这些正是训练员的职责吧。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_5 摩耶重炮对富士奇石的称呼
     */
    const f = async (maya, you, callname, call_5) => {
      await era.printAndWait([
        '从今年起就要开始挑战经典赛了。你们为了决定新年的抱负，相约碰面──',
      ]);
      await maya.say_and_wait('…………');
      await maya.say_and_wait([callname, '，一定要决定抱负才行吗？']);
      era.printButton('「你不想吗？」', 1);
      await era.input();
      await maya.say_and_wait('……嗯。');
      await maya.say_and_wait(
        '通常不是在认为『我要加油！』或是『一定要做到！』的时候，才会立下抱负吗？',
      );
      await maya.say_and_wait(
        '所以Maya在来这里的路上就一直在思考。思考升上经典级之后的事情。',
      );
      era.printButton('「Maya」', 1);
      await era.input();
      await maya.say_and_wait([
        '可是跟我同场比赛的，都是跟人家同年出道的赛',
        maya.uma_sex_title,
        '吧？',
      ]);
      await maya.say_and_wait('……那不就跟之前没两样吗。');
      await maya.say_and_wait('我会不会又觉得无聊呢……');
      era.printButton('「那比赛以外的抱负呢？」', 1);
      await era.input();
      await maya.say_and_wait('……咦？');
      await maya.say_and_wait('比赛以外的事情……也可以吗？');
      era.printButton('「可以啊，因为是『新年』抱负」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait('那、那么！人家想要经常约会！');
      await maya.say_and_wait(['希望请 ', callname, ' 教我很多成熟的事情！']);
      era.printButton('「就知道你会这样说」', 1);
      await era.input();
      await maya.say_and_wait(['嗯，嘿嘿！是 ', callname, ' 说什么都可以的☆']);
      await maya.say_and_wait('好，决定了！我的抱负就决定是『要经常约会』！');
      await maya.say_and_wait(['哈哈，我最喜欢 ', callname, ' 了♪']);
      await era.printAndWait([
        '……',
        maya.get_colored_name(),
        ' 跟刚才判若两人，脸上露出了笑容。',
      ]);
      await era.printAndWait([
        '像这样用不同的视点看待事物的经验，一定会对',
        maya.sex,
        '带来帮助。这也是为了有天能邂逅那怦然心动的瞬间。',
      ]);
      await era.printAndWait('所以现在──');
      era.printButton('「我们立刻去约会吧！」', 1);
      await era.input();
      await maya.say_and_wait('哇……！真的吗！？');
      era.printButton('「去实现你的心愿！」', 1);
      await era.input();
      await maya.say_and_wait('太棒了──！走吧走吧！');
      await maya.say_and_wait([
        '嘿嘿！是新年约会，约会☆',
        callname,
        '，我们要去哪♪',
      ]);
      era.printButton('「新年首卖约会」（耐力+20）', 1);
      era.printButton('「年菜约会」（体力+400）', 2);
      era.printButton('「新年参拜约会」（技能点数+40）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait('哇，赞成！！');
          await maya.say_and_wait('那就快点～♪一起去买福袋吧☆');
          await maya.say_and_wait([
            '嘿嘿～♪今天要和 ',
            callname,
            ' 约会到晚上☆',
          ]);
          await era.printAndWait([maya.sex, '逛起街来，感觉真的会逛到晚上──']);
          await maya.say_and_wait([
            '呀☆跟 ',
            call_5,
            ' 说『我今晚不回去』好了☆',
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            ' 理所当然地阻止',
            maya.sex,
            '，之后送 ',
            maya.get_colored_name(),
            ' 回到了宿舍。',
          ]);
          break;
        case 2:
          await maya.say_and_wait('年菜约会……？用年菜……约会……？');
          await maya.say_and_wait([
            '算了，也可以！只要跟 ',
            callname,
            ' 在一起，做什么感觉都会很开心♪',
          ]);
          await maya.say_and_wait('…………');
          await maya.say_and_wait('这里对我来说会不会太成熟了……？没问题吗？');
          await you.say_as_passer_by_and_wait(
            '和食料理店的老板娘',
            '哎呀哎呀，来了一位好可爱的客人呢。欢迎光临，呵呵。',
          );
          await maya.say_and_wait('呜、呜呀！？');
          await era.printAndWait([
            '于是 ',
            you.get_colored_name(),
            ' 就和紧张的 ',
            maya.get_colored_name(),
            ' 享受了一场年菜约会。',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            '啊，',
            callname,
            ' 真有品味♪这很有过新年的感觉☆',
          ]);
          await maya.say_and_wait('我要着陆了♪');
          await maya.say_and_wait([
            '所以呢所以呢？',
            callname,
            ' 要许什么愿？',
          ]);
          era.printButton('「秘密」', 1);
          await era.input();
          await maya.say_and_wait('咦，狡猾好狡猾。告诉我啦！');
          await era.printAndWait([
            you.get_colored_name(),
            ' 打从心底祈祷，希望 ',
            maya.get_colored_name(),
            ' 之后能够实现',
            maya.sex,
            '真正的梦想。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_3: (() => {
    const title = '锁定目标';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} callname_3 东海帝王对玩家的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} l_call_t 鲁铎象征对东海帝王的称呼
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      you,
      callname,
      call_3,
      call_16,
      callname_3,
      t_call_m,
      l_call_t,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait('终于到了春季经典赛的季节了。');
      await era.printAndWait([
        '……三冠路线、三宝冠路线。要如何度过这个赛',
        maya.uma_sex_title,
        '和训练员一生只会面临一次的时期可说是非常重要──',
      ]);
      await maya.say_and_wait(['……', callname, '。又在看那个资料了～']);
      await maya.say_and_wait('差不多该陪陪人家了吧？');
      await era.printAndWait([
        '只是 ',
        you.get_colored_name(),
        ' 跟',
        maya.sex,
        '已经约定好了，尤其在安排参赛的比赛上，',
        you.get_colored_name(),
        ' 必须要审慎评估。',
      ]);
      await era.printAndWait([
        '得让',
        maya.sex,
        '在',
        maya.sex,
        '会有兴趣的比赛并且有对手的环境中，接触各式各样的机会才行──',
      ]);
      await era.printAndWait('（叩叩）');
      await maya.say_and_wait('嗯？会是谁啊……');
      await teio.say_and_wait(['嗨！', t_call_m, '！']);
      await maya.say_and_wait([
        '啊！是 ',
        call_3,
        '♪怎么了怎么了？你是来玩的吗？',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        ' 是很崇拜学生会长 ',
        luna.get_colored_actual_name(),
        ' 的赛',
        maya.uma_sex_title,
        '，也是 ',
        maya.get_colored_name(),
        ' 的室友。',
      ]);
      await teio.say_and_wait('嗯，算是吧！其实是会长给我了一部视频。');
      await luna.used_to_say_and_wait([
        l_call_t,
        '，如果你仰慕我，那就别只顾着看我，也看一下我的四周吧。',
      ]);
      await luna.used_to_say_and_wait([
        '比如说──',
        brian.get_colored_name(),
        ' 的跑法',
      ]);
      await teio.say_and_wait([
        maya.sex,
        '是这么说的。不过一个人看也很无聊吧？',
      ]);
      era.printButton('（……成田白仁）', 1);
      await era.input();
      await era.printAndWait([
        brian.get_colored_name(),
        '──',
        maya.sex,
        '是有着压倒性实力的赛',
        maya.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        maya.sex,
        '是经典级中……以三冠路线全都获胜而闻名的「三冠赛',
        maya.uma_sex_title,
        '」。',
      ]);
      await era.printAndWait([
        maya.sex,
        '比 ',
        maya.get_colored_name(),
        ' 早一个世代，在正式竞赛遇到的可能性还很低，不过未来要挑战经典赛的话──',
      ]);
      era.printButton('「也许应该先看一下」', 1);
      await era.input();
      await teio.say_and_wait([
        '哦，不错耶～！',
        callname_3,
        ' 好像也有兴趣嘛？',
      ]);
      await maya.say_and_wait([
        '咦！？',
        callname,
        '！？我不是说不能外遇了吗！？',
      ]);
      await teio.say_and_wait([
        '啊哈哈，没关系啦！',
        t_call_m,
        ' 也好奇的话，就大家一起看吧！',
      ]);
      await era.printAndWait([
        '于是 ',
        you.get_colored_name(),
        ' 便和',
        maya.couple_title,
        '一起观看 ',
        brian.get_colored_name(),
        ' 的比赛视频……',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait('实况', [
        '领先的是 ',
        brian.get_colored_name(),
        '！完全拉开了距离！',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        '脚力果然强劲！宛如怪物！技压全场！！压制其他赛',
        maya.uma_sex_title,
        '，抵达终点──！！',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        '──过了第四弯道，果然又是',
        maya.sex,
        '！一口气从外圈超越所有人！',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        '有其他人能追上 ',
        brian.get_colored_name(),
        ' 吗！？遥遥领先、遥遥领先，抵达终点！',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        maya.sex,
        '已经只剩下这条路了！',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        '真是一场不愧于三冠赛',
        maya.uma_sex_title,
        '称号的比赛！',
        brian.get_colored_name(),
        '，表现太精彩了！',
      ]);
      await you.say_as_passer_by_and_wait('主播', [
        '转播席！转播席！现在要访问的是 ',
        brian.get_colored_name(),
        ' 选手！',
      ]);
      await you.say_as_passer_by_and_wait(
        '主播',
        '这次也拿下了漂亮的胜利！是否在开跑之前，就已经确定自己会是赢家了呢──',
      );
      await brian.say_and_wait('在你看来是那样的吗？');
      await you.say_as_passer_by_and_wait('主播', [
        '那、那当然！毕竟是 ',
        brian.get_colored_name(),
        ' 选手！',
      ]);
      await brian.say_and_wait('……哼。');
      await brian.say_and_wait('就算知道了，又有差吗？');
      await brian.say_and_wait('我只是为了满足自己而跑的。');
      await brian.say_and_wait([
        '上场的尽是渴望赢得比赛的赛',
        maya.uma_sex_title,
        '。',
      ]);
      await brian.say_and_wait([
        '正因为这样，我才要击败',
        maya.couple_title,
        '。为了要满足我的饥渴。',
      ]);
      await brian.say_and_wait('──下场比赛也是。');
      era.drawLine();
      await you.say_as_passer_by_and_wait('2人', '……');
      await era.printAndWait([
        '──在以三冠赛',
        maya.uma_sex_title,
        '为目标的路线当中，每个G1赛事都有各自的格言。',
      ]);
      await era.printAndWait([
        '「',
        sats_sho,
        '」──由最快的赛',
        maya.uma_sex_title,
        '获胜。「',
        toky_yus,
        '」──由运气最好的赛',
        maya.uma_sex_title,
        '获胜。「',
        kiku_sho,
        '」──由实力最强的赛',
        maya.uma_sex_title,
        '获胜。',
      ]);
      await era.printAndWait([
        '但是这次见识到的 ',
        brian.get_colored_name(),
        ' 的表现，则以「破格的实力」凌驾了那些格言……',
        maya.sex,
        '就是如此的强。',
      ]);
      await maya.say_and_wait(['………………', callname, '。']);
      era.printButton('「怎么了吗？」', 1);
      await era.input();
      await maya.say_and_wait('没事，只是想叫你！');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 讲完这句话后，又继续看向了电视。',
      ]);
      await era.printAndWait([
        '──如果在今年的挑战经典赛上，',
        brian.get_colored_name(),
        ' 能棋逢敌手的话，到时候情况应该会有所不同吧。',
      ]);
      era.drawLine({ content: '隔天' });
      await you.say_as_passer_by_and_wait('电视', [
        '怎么有如此强大的赛',
        maya.uma_sex_title,
        '！──',
        brian.get_colored_name(),
        '，先拿下了一冠！！',
      ]);
      await maya.say_and_wait([
        '……',
        callname,
        '，你还在看 ',
        call_16,
        ' 的比赛吗？',
      ]);
      await maya.say_and_wait([
        '已经跟 ',
        call_3,
        ' 说好下周再还了，不用急着现在看吧？',
      ]);
      era.printButton('「说得也是呢」', 1);
      await era.input();
      await maya.say_and_wait('唔唔唔……！！');
      await era.printAndWait([
        '──但 ',
        you.get_colored_name(),
        ' 就是无法把目光移开。',
      ]);
      await era.printAndWait([
        '如果 ',
        maya.get_colored_name(),
        ' 现在有像',
        maya.sex,
        '一样那么强的对手的话……',
      ]);
      await era.printAndWait('（──啪哧）');
      await maya.say_and_wait([
        '讨厌──！讨厌讨厌讨厌讨厌──！！',
        callname,
        '，快看我这里！',
      ]);
      era.printButton('「咦？」', 1);
      await era.input();
      await maya.say_and_wait('人家现在很不开心！');
      await maya.say_and_wait(['因为 ', callname, ' 现在感到很兴奋吧？']);
      await maya.say_and_wait([
        '我讨厌你这样！因为你是人家的 ',
        callname,
        '！',
      ]);
      await maya.say_and_wait([
        '比起 ',
        call_16,
        ' 的表现，我更希望你是看到人家的表现而感到兴奋！',
      ]);
      era.printButton('「摩耶重炮……」', 1);
      await era.input();
      await maya.say_and_wait([call_16, ' 是真的很强！']);
      await maya.say_and_wait([
        '和',
        maya.sex,
        '同场奔跑会让人感到兴奋，也会闪闪发亮！这些我也知道！',
      ]);
      await maya.say_and_wait('我在出道前，也是同样的想法。');
      await maya.say_and_wait('……但是人家已经出道了！懂了更多更多的事情！');
      await maya.say_and_wait([
        '现在的我！能够变得更强，强到能『咻──！』地超越 ',
        call_16,
        '！',
      ]);
      era.printButton('（……『超越』。）', 1);
      await era.input();
      await era.printAndWait('……没错，就算现在无法直接对决。');
      await era.printAndWait([
        '把追上',
        maya.sex,
        '当作一个目标，对 ',
        maya.get_colored_name(),
        ' 来说也许会是很好的刺激。',
      ]);
      await maya.say_and_wait([
        '我说的是真的！我很快就会跑赢 ',
        call_16,
        ' 的！',
      ]);
      await maya.say_and_wait(
        '跑赢之后，你会只注视着我，并且称赞我说『很令人兴奋！』吗？',
      );
      await maya.say_and_wait(
        '你会跟我说『你非常耀眼』、『摩耶重炮是最棒的』吗？',
      );
      era.printButton('「当然会！」', 1);
      await era.input();
      await maya.say_and_wait('那就这么决定了！！');
      await maya.say_and_wait(
        '我可是很认真的！一定要遵守哦！要做好觉悟！你收到了吗！？',
      );
      await era.printAndWait(['……', maya.sex, '莫名地充满了干劲，于是──']);
      await era.printAndWait([
        '就在这天，',
        maya.sex,
        '心中有了一个名为「',
        brian.get_colored_name(),
        '』的目标。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（经典年）';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '从今天开始是「夏季合宿」──为了提升实力的强化训练即将展开。',
      );
      await maya.say_and_wait('哇……☆好可爱的红色房子～！');
      await maya.say_and_wait([
        '我和 ',
        callname,
        ' 就是要在这里度过大人的夏天对吧！',
      ]);
      era.printButton('「是和大家一起度过『夏季合宿』」', 1);
      await era.input();
      await maya.say_and_wait('哼──！我知道啦！');
      await maya.say_and_wait('哼！你也只有现在能把我当小孩子看了！');
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 和 ',
        maya.get_colored_name(),
        ' 的夏季合宿开始了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '代码：燃烧！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      maya,
      brian,
      you,
      callname,
      call_16,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait(
        '从今天开始是「夏季合宿」──为了提升实力的强化训练即将展开。',
      );
      await era.printAndWait('接着，迎来了夏季合宿的第一周。');
      await era.printAndWait([
        '在大海、青山、祭典等各式各样的诱惑下，',
        maya.get_colored_name(),
        ' ',
        maya.sex,
        '──',
      ]);
      await maya.say_and_wait('哈啊……哈啊……呼……☆');
      await maya.say_and_wait('嘿嘿，人家是不是真的已经变得更快了？');
      await maya.say_and_wait([
        '这样的话我就会是今年的赛',
        maya.uma_sex_title,
        '中最快的！不对，应该是全赛',
        maya.uma_sex_title,
        '中最快的吧？',
      ]);
      era.printButton('「会不会太夸张了？」', 1);
      await era.input();
      await maya.say_and_wait('又没关系！只是说说！');
      await maya.say_and_wait([
        '而且人家一定要让 ',
        callname,
        ' 说出『摩耶重炮是最耀眼的』才行！',
      ]);
      await maya.say_and_wait('比那天看到的──');
      await maya.say_and_wait(['──', call_16, ' 还要耀眼。']);
      era.printButton(`「白仁啊」`, 1);
      await era.input();
      await maya.say_and_wait([
        '啊，讨厌讨厌！禁止 ',
        callname,
        ' 说出那个名字！',
      ]);
      await maya.say_and_wait('……真是的，完全不能大意！');
      await maya.say_and_wait([
        '啊～我怎么还在经典级。升上资深级之后我要立刻和 ',
        call_16,
        '──',
      ]);
      await maya.say_and_wait('啊！！');
      await maya.say_and_wait([callname, '。三冠路线还剩下哪些比赛？']);
      await era.printAndWait([
        '──三冠路线。那是 ',
        brian.get_colored_name(),
        ' 成为「三冠赛',
        maya.uma_sex_title,
        '」时所走的路线。',
      ]);
      await era.printAndWait([
        '如今春季的 ',
        sats_sho,
        ' 和 ',
        toky_yus,
        ' 都结束了，三冠路线最后的比赛……',
      ]);
      era.printButton('「还剩下『菊花赏』」', 1);
      await era.input();
      await maya.say_and_wait('没问题☆也就是说那是下一个目标对吧！');
      await maya.say_and_wait([
        '我会跑出比 ',
        call_16,
        ' 那时候还要更令人兴奋的表现！',
      ]);
      era.printButton('「你的斗志真旺盛」', 1);
      await era.input();
      await maya.say_and_wait('嘻嘻☆有吗？');
      await maya.say_and_wait(
        '不过人家斗志旺盛的样子，你也不讨厌吧～？对不对♪',
      );
      await era.printAndWait([
        '就这样，新的目标就决定是「',
        kiku_sho,
        '」了──！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '祭典';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} sunday 美丽周日
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_55 摩耶重炮对美丽周日的称呼
     * @param {PrintedSpan} call_60 摩耶重炮对优秀素质的称呼
     * @param {PrintedSpan} s_call_m 美丽周日对摩耶重炮的称呼
     * @param {PrintedSpan} s_call_n 美丽周日对优秀素质的称呼
     * @param {PrintedSpan} n_call_s 优秀素质对美丽周日的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      maya,
      sunday,
      nature,
      you,
      callname,
      call_55,
      call_60,
      s_call_m,
      s_call_n,
      n_call_s,
      kiku_sho,
    ) => {
      await era.printAndWait('这是发生在夏季合宿的事──');
      await maya.say_and_wait(['啊，', callname, '！你今天晚上有空吗？']);
      await maya.say_and_wait('其实……');
      await sunday.say_and_wait(['啊，是 ', s_call_m, '☆']);
      await maya.say_and_wait(['哇，是 ', call_55, '！哈喽哈喽☆']);
      await sunday.say_and_wait([
        '哈喽哈喽＆Marvelous☆啊哈哈，',
        s_call_m,
        '★',
      ]);
      await era.printAndWait([
        maya.sex,
        '是 ',
        sunday.get_colored_name(),
        '。',
      ]);
      await sunday.say_and_wait([
        '今晚一起去逛祭典吧☆我也有邀 ',
        s_call_n,
        '，',
        nature.sex,
        '也会来★',
      ]);
      await nature.say_and_wait([
        '暂停一下。那边的失控',
        maya.child_sex_title,
        '给我等等。我还只是『受到邀约』而已吧？',
      ]);
      await sunday.say_and_wait([
        '别在意这种小事～☆所以说 ',
        s_call_m,
        '，我们约几点集合？',
      ]);
      await maya.say_and_wait('啊，对耶！关于这件事……');
      await maya.say_and_wait([
        '我这次先不参加！我今晚想和 ',
        callname,
        ' 来场秘密特训！',
      ]);
      await sunday.say_and_wait('咦咦────！？');
      await nature.say_and_wait('哦……？');
      era.printButton('「我们有约好那种事吗？」', 1);
      await era.input();
      await maya.say_and_wait('嗯，我正准备跟你说！');
      await maya.say_and_wait([
        '事情就是这样，',
        call_55,
        ' 和 ',
        call_60,
        ' 就去祭典开心玩吧！',
      ]);
      await maya.say_and_wait(['那么，', callname, '。我们走吧♪']);
      await nature.say_and_wait([
        '哦……？闪耀',
        maya.child_sex_title,
        '真的很迷恋 ',
        callname,
        ' 呢～',
      ]);
      await sunday.say_and_wait('…………');
      await nature.say_and_wait(['我说，喂～？', n_call_s, ' 有在听吗？']);
      await sunday.say_and_wait([n_call_s, '────！']);
      await nature.say_and_wait('呀！？');
      await sunday.say_and_wait([
        s_call_m,
        ' 真是太美丽了☆让我认识了我所没有的美丽★',
      ]);
      await nature.say_and_wait('什、什么……？');
      await sunday.say_and_wait([
        s_call_n,
        '！我们也必须跟上！进行不输给 ',
        s_call_m,
        ' 的特训！',
      ]);
      await sunday.say_and_wait('打铁就要趁热才Marvelous☆好，走吧！！');
      await nature.say_and_wait('什、什么～～！？等等，别拉我啊──！！');
      era.drawLine();
      await maya.say_and_wait('哈……呼……');
      await maya.say_and_wait([
        '好，做完三组了！',
        callname,
        '，接下来要训练什么？',
      ]);
      await era.printAndWait('（咻……）');
      await maya.say_and_wait('嗯？刚才的是──');
      await era.printAndWait('（咚……啪啦啪啦……）');
      await maya.say_and_wait(['哇！是烟火！', callname, '，是烟火耶！！']);
      await maya.say_and_wait('啊哈哈，好大。没想到连这边都看得到。');
      await maya.say_and_wait('嘿嘿。在会场看的话，不知道会有多美呢？');
      era.printButton('「你果然想参加祭典吗？」', 1);
      await era.input();
      await maya.say_and_wait('……嗯～没关系！');
      await maya.say_and_wait('毕竟祭典以后再参加就好了。');
      await maya.say_and_wait([
        '等我在『',
        kiku_sho,
        '』取得胜利，牢牢抓住 ',
        callname,
        ' 的心之后再去！',
      ]);
      era.printButton('「你已经抓住我的心了」（力量+20）', 1);
      era.printButton('「那你可得好好加油了呢」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('咦，真的吗？可是……');
        await maya.say_and_wait('一定还抓得不够紧！人家是这么想的！');
        await maya.say_and_wait([
          '人家要让 ',
          callname,
          ' 彻底迷上我，变得没有我就不行！',
        ]);
        await maya.say_and_wait(['嘻嘻，', callname, '，你要做好心理准备哦♪']);
        await era.printAndWait([
          '──说完之后，',
          maya.get_colored_name(),
          ' 继续在海滩上跑了起来。',
        ]);
      } else {
        await maya.say_and_wait('呵呵。对我来说根本不算什么♪');
        await maya.say_and_wait('因为我可是还在成长期！一下子就能办到了！');
        await maya.say_and_wait([
          '我要拿下『',
          kiku_sho,
          '』和其他比赛的胜利，让 ',
          callname,
          ' 迷上我！',
        ]);
        await maya.say_and_wait([
          '等我和 ',
          callname,
          ' 再次迎接夏天的时候，一定要在海边给我大人的奖励……',
        ]);
        await era.printAndWait('（咻……咚────！！）');
        await maya.say_and_wait('咦，咦咦～！？怎么挑在这时候发射～！？');
        await maya.say_and_wait('烟火你这大大大笨蛋──！给我看气氛啦！');
        await era.printAndWait('（咚────！！）');
        await maya.say_and_wait('唔～刚才气氛很好的说～！真是的～！！');
        await era.printAndWait([
          maya.get_colored_name(),
          ' 不断地跳上跳下，对着烟火发脾气……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿（经典年）结束';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait('夏季合宿转眼间就结束了。');
      await era.printAndWait([maya.get_colored_name(), ' 也算是相当努力──']);
      await you.say_as_passer_by_and_wait(
        '巴士司机',
        '好的，抵达特雷森学园了。',
      );
      await maya.say_and_wait('呼……呼……');
      era.printButton('「Maya，已经到了哦」', 1);
      await era.input();
      await maya.say_and_wait(['咦……？', callname, '……呼。']);
      await maya.say_and_wait('呼啊……没事。我知道的……');
      await maya.say_and_wait('呼……呼……');
      await era.printAndWait([
        '……',
        maya.sex,
        '这个夏天很努力，',
        you.get_colored_name(),
        ' 决定让',
        maya.sex,
        '稍微再睡一下。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '迎向菊花赏';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (maya, you, callname, kiku_sho) => {
      await maya.say_and_wait([
        '早安，',
        callname,
        '！准备好欣赏完美的飞行了吗？',
      ]);
      await maya.say_and_wait([
        '毕竟今天可是『',
        kiku_sho,
        '』！不是训练，而是正式竞赛哦☆',
      ]);
      era.printButton('「展现你至今为止的努力成果吧！」', 1);
      await era.input();
      await maya.say_and_wait('收到！');
      await maya.say_and_wait(
        '草地上只会留下，人家那比烟雾消散还快的奔驰痕迹☆',
      );
      await maya.say_and_wait([callname, ' 的目光和心！都会被我夺走的♪']);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '目前还没打算着陆';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} etsuko 乙名史记者/乙名史悦子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      etsuko,
      you,
      callname,
      call_16,
      kiku_sho,
      arim_kin,
    ) => {
      await maya.say_and_wait(
        '雷达收到信号！锁定目标！距离目标还剩3、2、1……！',
      );
      await maya.say_and_wait([callname, '，你刚才有看到吗～？人家的表现～☆']);
      era.printButton('「你跑得很好呢」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿嘿～☆对吧对吧！人家果然是该受瞩目的焦点♪');
      await etsuko.say_and_wait([
        '……',
        maya.get_colored_name(),
        ' 选手！',
        maya.get_colored_name(),
        ' 选手！',
      ]);
      await etsuko.say_and_wait(
        '我是『闪耀月刊』的乙名史。可以让我采访你的赛后感想吗？',
      );
      await maya.say_and_wait('哇！要采访我吗～！？可以哦～☆我什么都会回答！');
      await etsuko.say_and_wait('谢谢你。那么就立刻──');
      await etsuko.say_and_wait([
        '你在多方尝试后迎来了这次的『',
        kiku_sho,
        '』。你这次的表现简直像是在主张自己最适合的是长距离……',
      ]);
      await maya.say_and_wait('嗯？');
      await etsuko.say_and_wait('啊，真是抱歉。我想一下，该怎么说呢。');
      await etsuko.say_and_wait([
        maya.get_colored_name(),
        ' 选手在挑战经典级比赛上，真正的目标果然是『',
        kiku_sho,
        '』──',
      ]);
      await maya.say_and_wait('嗯？你不用换个问法啊？人家都懂。');
      await maya.say_and_wait('只不过我是想说『为什么呢』。');
      await maya.say_and_wait([
        '我只是想参加『',
        kiku_sho,
        '』所以才出赛的。而且这也是 ',
        call_16,
        ' 参加过的比赛。',
      ]);
      await etsuko.say_and_wait([
        '……',
        call_16,
        '？是那位 ',
        maya.get_colored_name(),
        ' 选手吗？',
      ]);
      await maya.say_and_wait([
        '嗯，没错！记者',
        etsuko.adult_sex_title,
        '，我问你哦！我的表现有比 ',
        call_16,
        ' 更令人兴奋吗？有吗？',
      ]);
      await etsuko.say_and_wait('哦……真想不到。');
      await etsuko.say_and_wait([
        '你打算挑战 ',
        brian.get_colored_name(),
        ' 选手对吧！这还真是……！',
      ]);
      await etsuko.say_and_wait([
        '那我就直接问了。',
        maya.get_colored_name(),
        ' 选手也会参加今年的『',
        arim_kin,
        '』吗？',
      ]);
      await maya.say_and_wait(['『', arim_kin, '』？人家吗？']);
      await etsuko.say_and_wait([
        '嗯，因为『三冠赛',
        maya.uma_sex_title,
        '』的 ',
        brian.get_colored_name(),
        ' 也会参加今年的有马。',
      ]);
      await etsuko.say_and_wait('既然这样，就一定要来场正面对决吧？');
      await era.printAndWait([
        '「',
        arim_kin,
        '」……是在每年年底举办的比赛。也是会忠实呈现出赛',
        maya.uma_sex_title,
        '的粉丝支持度，以及其当下实力的舞台。',
      ]);
      await era.printAndWait([
        '除了「三冠赛',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        '，还有像「女杰」',
        amazon.get_colored_name(),
        ' 等名声显赫的赛',
        maya.uma_sex_title,
        '应该都已经表明会参赛了。',
      ]);
      await maya.say_and_wait('嗯嗯，我会参加！');
      era.printButton('（回答得太随便了吧！）', 1);
      await era.input();
      await etsuko.say_and_wait([
        '呵呵。巨星和新星，究竟谁更耀眼呢。真让人期待今年的 ',
        arim_kin,
        '。',
      ]);
      era.drawLine();
      await maya.say_and_wait([
        '哈哈♪下场比赛是『',
        arim_kin,
        '』啊！',
        callname,
        '，我们加油吧☆',
      ]);
      era.printButton('「你确定要参加『有马纪念』吗？」', 1);
      await era.input();
      await maya.say_and_wait([
        '嗯。在那里的话就能直接和 ',
        call_16,
        ' 竞速吧？',
      ]);
      await maya.say_and_wait('嘻嘻，这机会我等好久咯！这下终于能够证明了！');
      await maya.say_and_wait([
        '证明人家比起 ',
        call_16,
        '，更能让你感到兴奋♪',
      ]);
      await era.printAndWait([
        '就这样，',
        maya.sex,
        '在今年春天说出的目标，总算来到触手可及的距离了……！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '迎向有马纪念';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} b_call_a 成田白仁对菱亚马逊的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (maya, amazon, brian, callname, b_call_a, arim_kin) => {
      await maya.say_and_wait(['来了，终于来了，『', arim_kin, '』～！！']);
      await maya.say_and_wait([
        '哼哼，',
        callname,
        '。你可要看好哦。人家在这场比赛上会──',
      ]);
      await maya.say_and_wait('唔！那两个人该不会是……');
      await amazon.say_and_wait(
        '哈！想不到今年也能和你较量呢……已经把脖子洗干净等着了吗？',
      );
      await brian.say_and_wait('……');
      await brian.say_and_wait([
        '呵……你想表达什么，我完全听不懂呢，',
        b_call_a,
        '。',
      ]);
      await amazon.say_and_wait(
        '啊！？我刚才那句话，是回你去年那句『准备认输吧』──',
      );
      await brian.say_and_wait('唉……我可不是要你说明意图。');
      await brian.say_and_wait('你应该已经知道了吧。想挑衅我的话──');
      await brian.say_and_wait(
        '不要靠嘴巴，而是用赛场上的表现。拿出你的真本事来打败我。',
      );
      await amazon.say_and_wait('……哦。');
      await amazon.say_and_wait([
        '那就在这场『',
        arim_kin,
        '』上，来个一对一对决吧。',
      ]);
      await brian.say_and_wait('哼……眼神还不错。');
      await era.printAndWait([
        '──在 ',
        maya.get_colored_name(),
        ' 的视线前方，站着「三冠赛',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        '，以及「女杰」',
        amazon.get_colored_name(),
        ' 这两人。',
      ]);
      await maya.say_and_wait('…………');
      era.printButton('「摩耶重炮？」', 1);
      await era.input();
      await maya.say_and_wait('啊！');
      await maya.say_and_wait(['抱歉抱歉，', callname, '！我刚才好像恍神了！']);
      era.printButton('「这样一看特别有魄力呢」', 1);
      await era.input();
      await maya.say_and_wait('啊，讨厌讨厌！不能这么说！人家是不会输的！');
      await maya.say_and_wait('所以比赛的时候绝对要一直看着人家哦！知道吗？');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '装满燃料';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('实况', [
        '──精彩！太精彩了！给今年『',
        arim_kin,
        '』的王者献上掌声！！',
      ]);
      await era.printAndWait('（哇啊啊啊────────！！）');
      await you.say_as_passer_by_and_wait('观众A', [
        '话说回来，',
        maya.get_colored_name(),
        ' 还真厉害。居然赢过了 ',
        brian.get_colored_name(),
        '……',
      ]);
      await you.say_as_passer_by_and_wait('观众B', '嗯……真的。但是……');
      await you.say_as_passer_by_and_wait('观众B', [
        brian.get_colored_name(),
        ' 不可能就在此败下阵来。你也是这么认为的吧？',
      ]);
      await you.say_as_passer_by_and_wait('观众A', [
        '嗯，我也这么认为……我相信 ',
        brian.get_colored_name(),
        ' 下次会获胜。',
      ]);
      await maya.say_and_wait('哈啊……呼……！呼……哈啊……！');
      await amazon.say_and_wait([
        '我、我说啊，',
        a_call_m,
        '，你还好吧？你的脸色看起来不太舒服……',
      ]);
      era.printButton('「……摩耶重炮！」', 1);
      await era.input();
      await amazon.say_and_wait([
        '太好了，',
        maya.sex,
        '的体力好像用光了，最好快点让',
        maya.sex,
        '休息……',
      ]);
      await maya.say_and_wait('……我没事。更重要的是……！');
      await maya.say_and_wait('人家跑得很开心！！');
      await amazon.say_and_wait('──啥！？');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '工作人员',
        '呃，那么，接着下一个问题。想提问的人请举手──',
      );
      await maya.say_and_wait('……我！我有问题！！');
      await you.say_as_passer_by_and_wait('工作人员', [
        '好的，那就请这位……',
        maya.get_colored_name(),
        ' 选手！？',
      ]);
      await era.printAndWait('（人声吵杂……）');
      await maya.say_and_wait([
        '请问，',
        call_16,
        '！你接着会参加哪场比赛！？',
      ]);
      await maya.say_and_wait(['我想再和 ', call_16, ' 跑一次！']);
      await maya.say_and_wait(
        '抵达终点之前，我都不知道结果会如何，还有我该怎么做，这让我非常紧张……',
      );
      await maya.say_and_wait('而且兴奋到不行！');
      await you.say_as_passer_by_and_wait('工作人员', [
        '那、那个……',
        maya.get_colored_name(),
        ' 选手。不好意思，目前是开放给记者提问……',
      ]);
      await maya.say_and_wait('不要！就快问完了，等我一下！');
      await maya.say_and_wait('欸欸，我们再比一次嘛！人家会再次赢过你的！');
      await maya.say_and_wait(['拜托，拜托啦！', call_16, ' 也还不满足吧！？']);
      await brian.say_and_wait('……哼。');
      await you.say_as_passer_by_and_wait('记者A', [
        '你、你啊！给我适可而止！',
        brian.get_colored_name(),
        ' 选手也──',
      ]);
      await brian.say_and_wait(['……『', hans_dai, '』。']);
      await maya.say_and_wait('！');
      await brian.say_and_wait('我回答你的问题了。主持人，请换下一位。');
      await you.say_as_passer_by_and_wait(
        '工作人员',
        '咦，啊……好的！那么请下一位──',
      );
      await amazon.say_and_wait(['哦～', a_call_m, ' 把事情搞得很有趣呢。']);
      await amazon.say_and_wait([
        '居然自己跳入火坑啊。是因为',
        maya.sex,
        '是初生之犊吗，或者是──',
      ]);
      era.printButton('「因为' + maya.sex + '很有胆量」', 1);
      await era.input();
      await amazon.say_and_wait(['哈哈。你对', maya.sex, '评价很高呢。']);
      await amazon.say_and_wait('不错。我会记住你们两位的。');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '听我说听我说，人家啊！接下来想参加『',
        hans_dai,
        '』！',
      ]);
      era.printButton('「我就知道」', 1);
      await era.input();
      await maya.say_and_wait(
        '咦，你怎么会知道？心电感应！？还是我们之间有命运的红线！？',
      );
      era.printButton('「因为你很兴奋」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        '嘿嘿。连这种事情都知道，真不愧是 ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        '好，我要在『',
        hans_dai,
        '』上完全赢过 ',
        call_16,
        ' 哦☆',
      ]);
      await maya.say_and_wait(
        '既然要冲入乱流，就要堂堂正正从正面突破！这就是人家的飞行方式！',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '补充燃料';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('实况', [
        '──精彩！太精彩了！给今年『',
        arim_kin,
        '』的王者献上掌声！！',
      ]);
      await era.printAndWait('（哇啊啊啊────────！！）');
      await you.say_as_passer_by_and_wait('观众A', [
        '说真的，没想到 ',
        maya.get_colored_name(),
        ' 这么厉害。一瞬间还以为',
        maya.sex,
        '会赢过',
        brian.get_colored_name(),
        '。',
      ]);
      await you.say_as_passer_by_and_wait(
        '观众B',
        '呵呵，会这么认为就表示你的眼光还要再练练。这就是『实力差距』。',
      );
      await you.say_as_passer_by_and_wait('观众B', [
        '不过，',
        maya.sex,
        '是真的很有实力。如果在一年后的 ',
        arim_kin,
        ' 上……说不定有机会。',
      ]);
      await maya.say_and_wait('哈啊……呼……！呼……哈啊……！');
      await amazon.say_and_wait([
        '我、我说啊，',
        a_call_m,
        '，你还好吧？你的脸色看起来不太舒服……',
      ]);
      era.printButton('「……摩耶重炮！」', 1);
      await era.input();
      await amazon.say_and_wait([
        '太好了，',
        maya.sex,
        '的体力好像用光了，最好快点让',
        maya.sex,
        '休息……',
      ]);
      await maya.say_and_wait('……我没事。更重要的是……！');
      await maya.say_and_wait('人家跑得很开心！！');
      await amazon.say_and_wait('──啊！？');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '工作人员',
        '呃，那么，接着下一个问题。想提问的人请举手──',
      );
      await maya.say_and_wait('……我！我有问题！！');
      await you.say_as_passer_by_and_wait('工作人员', [
        '好的，那就请这位……',
        maya.get_colored_name(),
        ' 选手！？',
      ]);
      await era.printAndWait('（人声吵杂……）');
      await maya.say_and_wait([
        '请问，',
        call_16,
        '！你接着会参加哪场比赛！？',
      ]);
      await maya.say_and_wait(['我想再和 ', call_16, ' 跑一次！']);
      await maya.say_and_wait(
        '抵达终点之前，我都不知道结果会如何，还有我该怎么做，这让我非常紧张……',
      );
      await maya.say_and_wait('而且兴奋到不行！');
      await brian.say_and_wait('──哼。主持人，换下个问题……');
      await maya.say_and_wait('啊，等等啦！太狡猾了！不要逃跑！！');
      await brian.say_and_wait('……哦？');
      await brian.say_and_wait('你刚才说什么？是说我要逃离你？');
      await maya.say_and_wait('嗯，没错！因为你打算逃离人家的挑战！');
      await maya.say_and_wait('你明明那么地强，又那么地耀眼！');
      await maya.say_and_wait(
        '根本就是害怕下次再对上我的话，自己有可能会输不是吗？',
      );
      await you.say_as_passer_by_and_wait('记者A', [
        '那、那个……',
        maya.get_colored_name(),
        ' 选手？你这次才刚输给',
        maya.sex,
        '──',
      ]);
      await maya.say_and_wait('但是我下次会赢！');
      await maya.say_and_wait(
        '人家好不容易感觉能闪闪发亮了，我才不会就此满足！！',
      );
      await brian.say_and_wait('……');
      await you.say_as_passer_by_and_wait(
        '记者B',
        '我、我说啊……下次也太难了，你们的实力差距很明显──',
      );
      await brian.say_and_wait(['……『', hans_dai, '』。']);
      await maya.say_and_wait('！');
      await brian.say_and_wait('我回答你的问题了。主持人，请换下一位。');
      await you.say_as_passer_by_and_wait(
        '工作人员',
        '咦，啊……好的！那么请下一位──',
      );
      await amazon.say_and_wait(['哦～', a_call_m, ' 把事情搞得很有趣呢。']);
      await amazon.say_and_wait([
        '居然这么鲁莽地提出挑战。是因为',
        maya.sex,
        '是初生之犊吗，或者是──',
      ]);
      era.printButton('「因为' + maya.sex + '很有胆量」', 1);
      await era.input();
      await amazon.say_and_wait(['哈哈。你对', maya.sex, '评价很高呢。']);
      await amazon.say_and_wait('不错。我会记住你们两位的。');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '听我说听我说，人家啊！接下来想参加『',
        hans_dai,
        '』！',
      ]);
      era.printButton('「我就知道」', 1);
      await era.input();
      await maya.say_and_wait(
        '咦，你怎么会知道？心电感应！？还是我们之间有命运的红线！？',
      );
      era.printButton('「因为你很兴奋」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        '嘿嘿。连这种事情都知道，真不愧是 ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        '好，我要在『',
        hans_dai,
        '』上完全赢过 ',
        call_16,
        ' 哦☆',
      ]);
      await maya.say_and_wait(
        '既然要冲入乱流，就要堂堂正正从正面突破！这就是人家的飞行方式！',
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     */
    const f = async (maya, you, callname, call_16) => {
      await era.printAndWait([
        '命运的第三年。',
        maya.get_colored_name(),
        ' 今年将挑战资深级。',
      ]);
      era.printButton('「资深级」', 1);
      await era.input();
      await era.printAndWait('──今年一定会是关键的一年。');
      await maya.say_and_wait(['嘿嘿♪', callname, '，别摆出严肃的表情～♪']);
      await maya.say_and_wait('我们可是难得来到神社约会哦？要露出笑容☆');
      era.printButton('「你还真悠哉呢」', 1);
      await era.input();
      await maya.say_and_wait('啊哈哈，因为我很开心嘛！');
      await maya.say_and_wait('哼哼。人家呢，已经决定好今年的目标了♪');
      await maya.say_and_wait([
        '我一定要超越',
        maya.sex,
        '……超越拿出全力的 ',
        call_16,
        '！',
      ]);
      await maya.say_and_wait('我想了很多很多，不过对我来说──');
      await maya.say_and_wait('──这是我现在最想达成的事情！');
      era.printButton('「你一定能办到的哦」', 1);
      await era.input();
      await maya.say_and_wait('嘻嘻……人家也这么觉得♪');
      await era.printAndWait([
        '──',
        you.get_colored_name(),
        ' 看着',
        maya.sex,
        '的笑容，又一次冒出这个想法。',
      ]);
      era.println();
      era.printButton(
        '（希望' + maya.sex + '能一直保持健康活力）（体力+300）',
        1,
      );
      era.printButton(
        '（希望' + maya.sex + '能学到许多，成长茁壮）（全属性+10）',
        2,
      );
      era.printButton(
        '（希望' + maya.sex + '能成为出色的大人）（技能点数+70）',
        3,
      );
      const ret = await era.input();
      await maya.say_and_wait(['嗯？', callname, '，你有说了什么吗？']);
      era.printButton('「我刚才祈祷了」', 1);
      await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait('咦！？狡猾好狡猾！竟然自己一个人先祈祷！');
          await maya.say_and_wait([
            '真是的，重来一次！',
            callname,
            ' 要和我一起祈祷才行！',
          ]);
          await maya.say_and_wait('然后等祈祷完，我们要继续去约会哦♪知道吗☆');
          await era.printAndWait([
            '然后在新年参拜完的回程路上，你们进行了一场路边摊约会后就回去了。',
          ]);
          break;
        case 2:
          await maya.say_and_wait('哈哈，你又摆出那种表情。');
          era.printButton('「……怎样的表情？」', 1);
          await era.input();
          await maya.say_and_wait('嘿嘿，就是……');
          await maya.say_and_wait(
            '一脸『我能为摩耶重炮做什么呢』的表情。还有『我要好好珍惜摩耶重炮』的表情！',
          );
          await maya.say_and_wait('只要看见那种表情，我就会变得精神百倍♪');
          await maya.say_and_wait('呵呵，好！去进行新年第一次的训练吧☆');
          await era.printAndWait([
            '于是这天，',
            you.get_colored_name(),
            ' 就和 ',
            maya.get_colored_name(),
            ' 进行了新年第一次的训练。',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            '呵呵呵……',
            callname,
            '，太嫩，你还太嫩了！',
          ]);
          await maya.say_and_wait([
            '人家可是要成为出色的成熟',
            maya.phy_sex_title,
            '哦～☆',
          ]);
          era.printButton('「有哪里不同吗？」', 1);
          await era.input();
          await maya.say_and_wait([
            '完全不同啦～！受不了～！！『大人』和『成熟',
            maya.phy_sex_title,
            '』的差别就在……',
          ]);
          await maya.say_and_wait('……差在哪呢。');
          era.printButton('「你果然不懂嘛……」', 1);
          await era.input();
          await maya.say_and_wait(
            '啊哇哇！？才没有，才没有呢！！这两个真的不同啦～！！',
          );
          await era.printAndWait([
            '过了几天，',
            you.get_colored_name(),
            ' 在图书馆看见 ',
            maya.get_colored_name(),
            ' 紧盯着字典。',
          ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = '抽奖试手气！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {number} dice 抽奖结果
     */
    const f = async (maya, you, callname, call_3, call_16, dice) => {
      await era.printAndWait(['某天傍晚，你们经过商店街的时候──']);
      await maya.say_and_wait(['欸欸，', callname, '。那边好像有什么活动！']);
      await you.say_as_passer_by_and_wait(
        '商店街人员',
        '看过来看过来，现正举办新春大抽奖～！特等奖可是『温泉旅游券』！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街人员',
        '一等奖是『上等胡萝卜肉排汉堡』，二等奖是『一筐胡萝卜』，三等奖则是『一根胡萝卜』！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街人员',
        '那边的两位！约会完回去的路上，要不要试试两人的爱呢？',
      );
      await maya.say_and_wait('呀☆我要我要♪');
      era.printButton('「立刻就决定了呢」', 1);
      await era.input();
      await maya.say_and_wait('因为感觉很好玩嘛！而、且、啊……');
      await maya.say_and_wait('我们这么相爱，一定会抽到特等奖的！对吧，对吧♪');
      await era.printAndWait('……可是运气跟爱之间好像没什么关连性。');
      await era.printAndWait([
        '敌不过 ',
        maya.get_colored_name(),
        ' 的气势，我在商店街买了东西，准备挑战抽奖。',
      ]);
      await maya.say_and_wait([
        callname,
        '！我们拿到一张抽奖券！机会只有一次！',
      ]);
      await maya.say_and_wait('唔～拜托拜托，一定要中特等奖……！');
      await era.printAndWait(['你们两个人一边祈祷，一起握住握把转动抽奖机。']);
      await era.printAndWait('结果是──');
      switch (dice) {
        case 0:
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '天啊！恭喜────！！抽到特等奖『温泉旅游券』了～～～～！！',
          );
          await era.printAndWait('获得了【温泉旅游券】。');
          await maya.say_and_wait('太棒了～～！！任务达成～！');
          era.printButton('「太好了！」', 1);
          await era.input();
          await maya.say_and_wait('嗯！那么，立刻朝向温泉起飞☆');
          era.printButton('什么都还没准备哦！？」', 1);
          await era.input();
          await maya.say_and_wait('咦～？准备～？');
          await era.printAndWait('如果现在就出发的话，不只要准备行李而已。');
          await era.printAndWait('应该要等到调整好之后的比赛和训练再去──');
          era.printButton('「这也是为你好」', 1);
          await era.input();
          await maya.say_and_wait('为我好？');
          era.printButton('「因为我想实现你的目标」', 1);
          await era.input();
          await maya.say_and_wait('啊──');
          await maya.say_and_wait('哼哼。人家啊，已经决定好今年的目标了♪');
          await maya.say_and_wait([
            '我一定要超越',
            maya.sex,
            '……超越拿出全力的 ',
            call_16,
            '！',
          ]);
          await maya.say_and_wait(['……谢谢你。', callname, '。']);
          await maya.say_and_wait(
            '好，决定了！那么，等人家的目标达成后我们再去吧！',
          );
          await maya.say_and_wait('这样的话你就愿意陪我去吗？');
          era.printButton('「当然愿意！」', 1);
          await era.input();
          await maya.say_and_wait('嘿嘿，太棒了！就这么决定了！');
          await maya.say_and_wait('到时候要尽情放松，尽情享受哦！');
          await era.printAndWait([
            '你们两个人一起期待着，使用温泉旅游券那天的到来。',
          ]);
          break;
        case 1:
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '恭喜抽到一等奖～！奖品是『上等胡萝卜汉堡排』！',
          );
          await era.printAndWait('获得了【上等胡萝卜汉堡排】。');
          await maya.say_and_wait('哇！是一等奖！好棒！！');
          await maya.say_and_wait('啊，不是温泉旅游券～！！');
          era.printButton('「但抽到一等奖哦！」', 1);
          await era.input();
          await maya.say_and_wait([
            '可是可是～人家想和 ',
            callname,
            ' 来趟热恋旅行的说……',
          ]);
          await maya.say_and_wait([
            '唔唔唔……靠汉堡排会抓不住 ',
            callname,
            ' 的心啦。',
          ]);
          era.printButton('「……你确定吗？」', 1);
          await era.input();
          await maya.say_and_wait('咦？难道不是吗？');
          era.printButton('「其实我肚子很饿！」', 1);
          await era.input();
          await maya.say_and_wait(
            '真的吗！？那么那么，人家的汉堡排可以给你哦！',
          );
          await maya.say_and_wait('……嘿嘿，怎么样？有没有更喜欢人家了？');
          era.printButton('「好像有！」', 1);
          await era.input();
          await maya.say_and_wait('太好了！');
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '哈哈，你们感情真好！好，那我多送你们一个汉堡排吧！你们要一起吃啊！',
          );
          await maya.say_and_wait('哇！！谢谢叔叔！');
          await maya.say_and_wait(
            '嘿嘿，他说我们感情很好～！感觉我们更相爱了呢♪',
          );
          await era.printAndWait([
            '那天晚上，',
            you.get_colored_name(),
            ' 和 ',
            maya.get_colored_name(),
            ' 一起吃了上等胡萝卜汉堡排。',
          ]);
          break;
        case 2:
        case 3:
        case 4:
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '二等奖～！！奖品是『一筐胡萝卜』！',
          );
          await era.printAndWait('获得了【一筐胡萝卜】。');
          await maya.say_and_wait('哇！？满满的胡萝卜～！？');
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '嗯！把那篮子里的胡萝卜全都带走吧！',
          );
          await era.printAndWait(
            '──在商店街人员指着的方向，放着一个装着满满胡萝卜的大篮子。',
          );
          await maya.say_and_wait('……人家吃得完吗。');
          era.printButton('「我也会帮忙的」', 1);
          await era.input();
          await maya.say_and_wait([
            '咦！真的吗！？那就和 ',
            callname,
            ' 一起──',
          ]);
          await maya.say_and_wait('……啊！？人家想到一个点子了！');
          await maya.say_and_wait([
            '我问你哦，',
            callname,
            '。可以把这些胡萝卜放在你的房间吗？',
          ]);
          await maya.say_and_wait([
            '人家是和 ',
            call_3,
            ' 共用一间房间，房间太小可能放不下！所以说，可以吗！？',
          ]);
          era.printButton('「是可以啦……」', 1);
          await era.input();
          await maya.say_and_wait('太好了！');
          await maya.say_and_wait(
            '那从明天开始，人家会去你房间，帮你做一堆胡萝卜料理哦♪',
          );
          era.printButton('「咦！？」', 1);
          await era.input();
          await maya.say_and_wait('嘿嘿，要用我亲手做的料理掳获你的心～♪');
          await era.printAndWait([
            '──这天之后，',
            maya.get_colored_name(),
            ' 突击 ',
            you.get_colored_name(),
            ' 房间的次数增加了……',
          ]);
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '三等奖～！奖品是『一根胡萝卜』！',
          );
          await era.printAndWait('获得了【一根胡萝卜】。');
          await maya.say_and_wait('咦～！？骗人的吧！');
          await maya.say_and_wait(
            '叔叔，你是把特等奖看成其他奖了吧？对不对～？',
          );
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '嗯……是三等奖没错。',
          );
          await maya.say_and_wait(['唔！和 ', callname, ' 去温泉旅行的计划……']);
          await maya.say_and_wait('而且居然才一根胡萝卜……');
          era.printButton('「跟你的发色一样，是很有精神的颜色呢」', 1);
          await era.input();
          await maya.say_and_wait('……！');
          await maya.say_and_wait([
            '哈哈，',
            callname,
            '，你真的一直只想着人家的事情～！',
          ]);
          await maya.say_and_wait(
            '居然说胡萝卜的颜色是我的发色。这种事情根本没办法立刻想到啦！',
          );
          await maya.say_and_wait('……嘿嘿嘿♪');
          await era.printAndWait([
            maya.get_colored_name(),
            ' 的脸上露出了灿烂的笑容。',
          ]);
          break;
        case 9:
          await you.say_as_passer_by_and_wait(
            '商店街人员',
            '很可惜，没抽中！参加奖是『卫生纸』哦～',
          );
          await era.printAndWait('获得了【卫生纸】。');
          await maya.say_and_wait('咦────！？');
          await maya.say_and_wait('我还以为一定会抽中的！因为因为～！');
          await maya.say_and_wait([
            '人家和 ',
            callname,
            ' 可是这么恩爱耶？对不对？',
          ]);
          await era.printAndWait([
            '再说一次，运气跟爱之间应该没有关连性。',
            you.get_colored_name(),
            ' 安抚着闹脾气的 ',
            maya.get_colored_name(),
            '，回到了学园……',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = '青春的闪耀';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} callname_12 菱亚马逊对玩家的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} n_call_a 优秀素质对菱亚马逊的称呼
     * @param {boolean} join_arim_kin_c 摩耶重炮是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      nature,
      you,
      callname,
      call_12,
      t_call_m,
      callname_12,
      a_call_m,
      n_call_a,
      join_arim_kin_c,
      arim_kin,
    ) => {
      await era.printAndWait([
        '资深级的春天到来了。最近 ',
        maya.get_colored_name(),
        ' 的训练是──',
      ]);
      await maya.say_and_wait([callname, '！跑三圈赛道太没意思了！']);
      await maya.say_and_wait('人家现在要跑三十圈才行！');
      era.printButton('「这对脚的负担太大了哦」', 1);
      await era.input();
      await maya.say_and_wait('咦──！？那么那么，赶快想接下来要做什么训练。');
      await maya.say_and_wait([
        '人家可是知道，',
        callname,
        ' 一定会让我很开心！',
      ]);
      await maya.say_and_wait(
        '啊。昨天给我的课题列表，我已经全部种类都做得到了！所以最好是上面没有的☆',
      );
      await era.printAndWait([
        '……就这样，',
        you.get_colored_name(),
        ' 每天都被要求提供新的训练。',
      ]);
      await era.printAndWait([
        '不过，',
        maya.get_colored_name(),
        ' 已经订下了目标，想要努力去达成。帮助',
        maya.sex,
        '实现目标是训练员的职责──',
      ]);
      await maya.say_and_wait(['早安！', callname, '！今天也加油吧！']);
      await maya.say_and_wait(['咦，', callname, '。你的脸色好像很苍白……']);
      await maya.say_and_wait(['啊，', callname, '！？']);
      await era.printAndWait('（……咚）');
      await amazon.say_and_wait('……哎呀，好险啊。');
      await amazon.say_and_wait('你差点就要倒下去了。');
      era.printButton('「是你扶住我的吗……？」', 1);
      await era.input();
      await amazon.say_and_wait('哈哈，不用向我道谢。没什么大不了的。');
      await amazon.say_and_wait('不过，你黑眼圈好重……看起来没什么睡啊。');
      await amazon.say_and_wait(['我说啊，', a_call_m, '！']);
      await maya.say_and_wait('啊、啊哇哇……');
      await amazon.say_and_wait([a_call_m, '！别在那边害怕，快回话！']);
      await maya.say_and_wait('是、是的！！');
      await amazon.say_and_wait([
        '……嗯，行了。那么，',
        callname_12,
        '，你就在这休息吧。',
      ]);
      await amazon.say_and_wait('这家伙就由我来照顾。');
      era.printButton('「咦！？」', 1);
      await era.input();
      await amazon.say_and_wait([
        '哈哈，别这么慌张啦。我又不会把',
        maya.sex,
        '吃了。',
      ]);
      if (join_arim_kin_c) {
        await amazon.say_and_wait([
          '之前在『',
          arim_kin,
          '』上的开战宣言……老实说，让我印象深刻。',
        ]);
      }
      await amazon.say_and_wait('所以也让我帮你们一把吧。');
      await amazon.say_and_wait('我也不想让人独占这么前途无量的孩子。');
      await maya.say_and_wait(['咦──！？', call_12, '……！？']);
      await maya.say_and_wait([
        '啊哇哇哇……！？对、对不起。我心中只有 ',
        callname,
        '……！',
      ]);
      await amazon.say_and_wait(
        '……我说，你可以冷静一点吗？这只是一个提案罢了。重点是你『想不想变强』。',
      );
      await amazon.say_and_wait([
        '如何，',
        callname_12,
        '。要把',
        maya.sex,
        '暂时交给我吗？',
      ]);
      await era.printAndWait([
        '──「女杰」',
        amazon.get_colored_name(),
        '。',
        maya.sex,
        '在去年和今年的「',
        arim_kin,
        '」上，都可算是 ',
        brian.get_colored_name(),
        ' 的劲敌。',
      ]);
      await era.printAndWait([
        '如果为 ',
        maya.get_colored_name(),
        ' 着想的话，',
        you.get_colored_name(),
        ' 不应该坚持自己的策略，也应该要借助',
        maya.sex,
        '的意见……！',
      ]);
      era.printButton('「那就拜托你了！」', 1);
      await era.input();
      await amazon.say_and_wait('好，这才像话嘛！菱亚流的训练要开始了！');
      era.drawLine();
      await amazon.say_and_wait([
        '所以说，',
        a_call_m,
        '。你要不停跑来跑去，不要让我抓到尾巴。',
      ]);
      await maya.say_and_wait(
        '咦，这不就是『抓尾巴游戏』？人家在幼稚园的时候是有玩过……',
      );
      await maya.say_and_wait('这真的算是训练吗？……感觉只是在玩吧？');
      await amazon.say_and_wait('哦，还真从容啊。那就开始吧。');
      await maya.say_and_wait('唔、唔唔……');
      await amazon.say_and_wait('喂喂，怎么啦？已经被抓超过十次咯！');
      await maya.say_and_wait([
        '还不是 ',
        call_12,
        ' 太奸诈了！突然增加鬼的数量！',
      ]);
      await teio.say_and_wait(['呵呵！接着换我抓 ', t_call_m, ' 哦！']);
      await nature.say_and_wait('哦哦，好像玩得很开心……');
      await nature.say_and_wait([
        '我说，',
        n_call_a,
        ' 啊。像现在这样子帮忙就行了吗？',
      ]);
      await amazon.say_and_wait([
        '嗯，这样很好！谢啦！……那么，',
        a_call_m,
        '。',
      ]);
      await amazon.say_and_wait('简单来说，你的弱点就是察觉力不足。');
      await maya.say_and_wait('……察觉力？');
      await maya.say_and_wait(
        '察觉不就是指知道事情吗？那我已经知道了哦，不管是规则或逃跑方式。',
      );
      await maya.say_and_wait([
        '但是，',
        call_12,
        ' 立刻就改变鬼的数量和规则！太卑鄙了──',
      ]);
      await amazon.say_and_wait(
        '真是的，就说了你的察觉力……不对，应该说你都不打算去察觉。',
      );
      await maya.say_and_wait('……咦？');
      await amazon.say_and_wait('就我的观察，你好像有很优秀的才能跟训练员。');
      await amazon.say_and_wait(
        '你应该是真的什么都办得到吧。所以你身边的大人也都为你付出很多。',
      );
      await amazon.say_and_wait('只是啊，你太过依赖他人了。');
      await amazon.say_and_wait(
        '现在也是，你一旦懂了……不对，是认为自己懂了之后……',
      );
      await amazon.say_and_wait(
        '『就不打算理解自己不懂的事』……是你自己养成了这种习惯。',
      );
      await amazon.say_and_wait('我并不是在玩『抓尾巴游戏』。这是比赛的训练。');
      await amazon.say_and_wait(
        '再动点脑筋去想。在真正的赛场上，你会被好几个选手盯上。途中战略也会改变。',
      );
      await amazon.say_and_wait(
        '到时候你该怎么办？应该会根据当下情况灵活的逃跑……我没说错吧？',
      );
      await maya.say_and_wait('……唔。');
      await amazon.say_and_wait('……我就顺便提一下，今天早上也是。');
      await amazon.say_and_wait([
        '你之前有注意到，',
        callname_12,
        ' 为了你逞强过头了吗？',
      ]);
      await maya.say_and_wait('……！');
      await amazon.say_and_wait('你难得有这么优秀的才能，就该把它发挥到极致。');
      await amazon.say_and_wait([
        '还是说你要当个会哭着说『我不跑了！』，让 ',
        callname_12,
        ' 一个头两个大的小孩子吗？',
      ]);
      await maya.say_and_wait('唔～～！人家才不会这样！！');
      await maya.say_and_wait('人家要成为成熟的女人！才不会哭！');
      await maya.say_and_wait([
        call_12,
        '！再来一次！！这次我一定不会被抓到！',
      ]);
      await amazon.say_and_wait('哈哈，不错。那就开始吧！！');
      await maya.say_and_wait('哼──！再一次！我可是已经『懂了』呢！！');
      await amazon.say_and_wait(
        '哦！很好，就是这种！要让身体记住，而不是脑袋！',
      );
      await era.printAndWait([
        '──在灿烂的夕阳余晖照耀下，一群 ',
        maya.teen_sex_title,
        ' 流着汗，不断在赛道上奔跑。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} yukino 雪之美人
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_29 摩耶重炮对雪之美人的称呼
     * @param {PrintedSpan} y_call_m 雪之美人对摩耶重炮的称呼
     */
    const f = async (maya, yukino, you, callname, call_29, y_call_m) => {
      await era.printAndWait([
        '午休时间，当 ',
        you.get_colored_name(),
        ' 正走在校内时──',
      ]);
      await maya.say_and_wait(['嗯～♪', call_29, ' 的巧克力好好吃～♪']);
      await yukino.say_and_wait([
        '嘿嘿。',
        y_call_m,
        ' 送我的巧克力也超好吃的～',
      ]);
      await yukino.say_and_wait('而且包装也很华丽，亮晶晶的！你是在哪买到的？');
      await maya.say_and_wait([
        '哼哼哼……因为我是成熟的',
        maya.phy_sex_title,
        '！一下子就能找到正流行的店了☆',
      ]);
      await yukino.say_and_wait([
        '哇……！是『城市',
        maya.child_sex_title,
        '』耶！',
      ]);
      await maya.say_and_wait('嗯哼！逛街感到犹豫的时候，就交给人家吧！');
      await maya.say_and_wait(['……啊！是 ', callname, '！哈喽☆']);
      await maya.say_and_wait(
        '嘻嘻，是不是等不及收到人家的巧克力了？受不了，真拿你没办法♪',
      );
      await maya.say_and_wait([
        call_29,
        '，那我先走咯──！接下来是大、人、的、时、间☆',
      ]);
      await yukino.say_and_wait(
        '大、大人……大人的时间！？你、你你、你们要做什么～！？',
      );
      await era.printAndWait([
        '应该没有要做什么才对……不过，',
        you.get_colored_name(),
        ' 还来不及解开 ',
        yukino.get_colored_name(),
        ' 的误会，立刻就被 ',
        maya.get_colored_name(),
        ' 拉着走……',
      ]);
      await maya.say_and_wait('来，给你！这是人家要送你的巧克力哦。');
      await maya.say_and_wait('嘿嘿，快打开，快打开☆');
      await era.printAndWait([
        '在',
        maya.sex,
        '期待的眼神下，',
        you.get_colored_name(),
        ' 打开了',
        maya.sex,
        '给 ',
        you.get_colored_name(),
        ' 的小盒子。里面装的是──',
      ]);
      await era.printAndWait(
        '……量多到让人怀疑到底是要装多满，塞满整个盒子的巧克力。',
      );
      await maya.say_and_wait(
        '上头有星星的是在百货公司买的。爱心的则是在车站里的专卖店买的！',
      );
      era.printButton('「你买了好多呢」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿，我为了今天，一个人跑了许多家店哦！');
      await maya.say_and_wait('所、以、说……');
      await maya.say_and_wait(
        '我送了这么多巧克力，你要好好跟我约会，当作回礼♪',
      );
      era.drawLine();
      await era.printAndWait([
        '接着，这天在 ',
        maya.get_colored_name(),
        ' 的希望下，你们出门去了巧克力专卖店。',
      ]);
      await era.printAndWait('……看起来有种手工制朴素感的巧克力杯子蛋糕。');
      await era.printAndWait(
        '虽然也有几个巧克力溢出到小纸杯外的成品，不过每一个都做得很仔细──',
      );
      era.printButton('「看起来很好吃呢」', 1);
      await era.input();
      await maya.say_and_wait('哇…………！');
      await maya.say_and_wait(['嘿嘿……', callname, '。等你吃完也要这么说哦☆']);
      await maya.say_and_wait([
        '嘻嘻，因为这是特别的 ',
        maya.name,
        ' 蛋糕，在外面是买不到的！',
      ]);
      await maya.say_and_wait('……真的很特别哦。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 吃着有点甜的巧克力杯子蛋糕，度过了这一天。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hans_dai: (() => {
    const title = '迎向阪神大赏典';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     */
    const f = async (maya, brian, you, callname, call_16, hans_dai) => {
      await era.printAndWait(['然后到了「', hans_dai, '」当天。']);
      await maya.say_and_wait(['…………走吧，', callname, '。']);
      await maya.say_and_wait('我已经准备好了！引擎也加满燃料咯！');
      era.printButton('「比赛加油」', 1);
      await era.input();
      await maya.say_and_wait('嗯！');
      era.drawLine();
      await brian.say_and_wait('…………');
      await maya.say_and_wait(['唔！', call_16, '。']);
      await brian.say_and_wait('……你果然来了啊。');
      await maya.say_and_wait('嗯，我来咯。');
      await maya.say_and_wait('嘻嘻，人家是遵守约定的乖孩子。');
      await brian.say_and_wait('……你是小孩子吗。');
      await maya.say_and_wait([
        '咦！？',
        call_16,
        ' 好过分！！怎么可以对人家说这种话！',
      ]);
      await brian.say_and_wait('……把自己当孩子的人就是你自己吧。哼……');
      await brian.say_and_wait('……先走了。');
      await maya.say_and_wait('啊，等等！！');
      await brian.say_and_wait('……唉，还有什么事吗？');
      await maya.say_and_wait('嗯！有！');
      await maya.say_and_wait('你今天要拿出全力哦！');
      await maya.say_and_wait([
        '不能放水哦。人家想赢过全力以赴的 ',
        call_16,
        '。',
      ]);
      await maya.say_and_wait('因为我觉得这样自己才能闪闪发亮。');
      await brian.say_and_wait('……全力吗？');
      await brian.say_and_wait('……别说笑了。');
      await maya.say_and_wait('啊！你这样太过分了吧！人家可是很认真的说──！');
    };
    f.title = title;
    return f;
  })(),
  hans_dai_win: (() => {
    const title = '驾驶杆还握在手中';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('哈啊……哈啊……！');
      await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
      await maya.say_and_wait('嘻嘻，我赢了！拿下胜利了～☆');
      await maya.say_and_wait('呵呵，这下就──');
      await brian.say_and_wait('……');
      await brian.say_and_wait('……还不够吗。');
      await maya.say_and_wait('…………');
      await maya.say_and_wait('……咦？');
      await maya.say_and_wait('…………');
      era.drawLine();
      await amazon.say_and_wait([a_call_m, '！跑得漂亮！最后的直线太精彩了！']);
      await maya.say_and_wait([
        '……咦，',
        call_12,
        '？你难道是来看我比赛的吗？',
      ]);
      await amazon.say_and_wait(
        '嗯！毕竟是你们俩难得的决胜之日，所以我来帮你加油──',
      );
      await maya.say_and_wait('那么希望你可以告诉我。');
      await maya.say_and_wait([
        call_16,
        ' 下次会参加哪场比赛？',
        call_12,
        ' 应该知道吧？',
      ]);
      await amazon.say_and_wait('！');
      await amazon.say_and_wait('真是败给你了。这样还没满足吗？');
      await maya.say_and_wait('嗯。因为……');
      await maya.say_and_wait([
        '那个人还没感到不甘心呀。真要说的话，感觉',
        maya.sex,
        '很悲伤。',
      ]);
      await maya.say_and_wait([
        '……我不喜欢这样。难得可以跟',
        maya.sex,
        '对决──',
      ]);
      await maya.say_and_wait([
        '人家想要变得更加耀眼，耀眼到让',
        maya.sex,
        '感到不甘心。',
      ]);
      await amazon.say_and_wait('……这样啊。');
      await amazon.say_and_wait([
        '哈，你让我想起第一次见到',
        maya.sex,
        '的时候。当时尽管比赛已经结束，',
        maya.sex,
        '却还是一脸不满足的样子。',
      ]);
      await amazon.say_and_wait([
        '那我就告诉你吧。我的直觉认为是『',
        tenn_spr,
        '』。',
      ]);
      await amazon.say_and_wait('那家伙就是渴望强者云集的舞台。');
      await amazon.say_and_wait([
        '对',
        maya.sex,
        '来说，这次的『',
        hans_dai,
        '』原本应该也只是前往『',
        tenn_spr,
        '』途中的道路。',
      ]);
      await era.printAndWait([
        '──「',
        tenn_spr,
        '」。那是历史悠久，竞争长距离最高峰的比赛。',
      ]);
      await maya.say_and_wait(['……', callname, '。']);
      era.printButton(`「嗯，我们参加『春季天皇赏』吧」`, 1);
      await era.input();
      await maya.say_and_wait('收到！');
      await amazon.say_and_wait('呵……这两个人真了不起。');
      await amazon.say_and_wait('好，要帮忙就帮到底！我也加入你们吧！');
      await amazon.say_and_wait([
        call_12,
        '，今天回去之后我会好好锻炼你的！给我做好心理准备！',
      ]);
      await maya.say_and_wait('嘻嘻，当然没问题☆');
      await era.printAndWait(['于是下个目标就决定是「', tenn_spr, '」了！']);
    };
    f.title = title;
    return f;
  })(),
  hans_dai_lose: (() => {
    const title = '立刻上升';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('哈啊……哈啊……！');
      await maya.say_and_wait('唔……明明就只差一点了说……！！');
      await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
      await brian.say_and_wait('哼……');
      await brian.say_and_wait('……就这点程度吗？');
      await maya.say_and_wait('可恶～～！那个表情是怎样～！');
      await maya.say_and_wait('完全不把人家放在眼里的感觉～！！');
      await maya.say_and_wait('唔唔……但是──');
      era.drawLine();
      await maya.say_and_wait('……我回来了！！');
      era.printButton('「欢迎回来」', 1);
      await era.input();
      await amazon.say_and_wait('哦，已经回来了啊？');
      await maya.say_and_wait(['咦咦！？为什么 ', call_12, ' 在这里！？']);
      await amazon.say_and_wait('什么为什么，我是来帮你加油的……');
      await maya.say_and_wait('这样啊！那刚好！');
      await maya.say_and_wait('请多锻炼人家！今天就开始也没关系！');
      await amazon.say_and_wait('啥！？你也要考量一下我方不方便啊──');
      await maya.say_and_wait('不要！因为人家想变强嘛！人家知道我还能变更强！');
      await maya.say_and_wait([
        '因为我好不甘心！',
        maya.sex,
        '又让我感到兴奋不已了！',
      ]);
      await maya.say_and_wait([call_16, ' 看起来还是闪闪发亮的！']);
      await maya.say_and_wait(
        '我不想就这么输下去啦！我不想自己讲出『结束了』！！',
      );
      era.printButton('「我也拜托你了！」', 1);
      await era.input();
      await amazon.say_and_wait('唉……这两个任性的家伙是怎样。');
      await amazon.say_and_wait('……不过对决就是要有这种热情。');
      await amazon.say_and_wait('好，帮就帮到底！我也加入你们吧！');
      await amazon.say_and_wait([
        a_call_m,
        '，我会多加锻炼你的！给我做好心理准备！',
      ]);
      await maya.say_and_wait('嗯！谢谢你！');
      await amazon.say_and_wait('答得很好！继续维持下去，不要松懈！');
      await amazon.say_and_wait(
        '随时都要拿出全力！想着未来的事情，而无法大力挥出拳头的家伙，跟一开始就举白旗投降的人没两样！',
      );
      await maya.say_and_wait('是的！');
      await amazon.say_and_wait([
        '呵！那就来开下次的作战会议吧。所以说，',
        a_call_m,
        '。',
      ]);
      await amazon.say_and_wait([
        '下次和',
        maya.sex,
        '对上，就是在『',
        tenn_spr,
        '』。',
      ]);
      await maya.say_and_wait(['『', tenn_spr, '』……！']);
      await era.printAndWait([
        '──「',
        tenn_spr,
        '」。那是历史悠久，竞争长距离最高峰的比赛。',
      ]);
      await amazon.say_and_wait('那家伙就是渴望强者云集的舞台。');
      await amazon.say_and_wait([
        '对',
        maya.sex,
        '来说，这次的『',
        hans_dai,
        '』原本应该也只是前往『',
        tenn_spr,
        '』途中的道路。',
      ]);
      await maya.say_and_wait(['……我知道了。那么，', callname, '。']);
      era.printButton(`「嗯，我们参加『春季天皇赏』吧」`, 1);
      await era.input();
      await maya.say_and_wait('收到！');
      await era.printAndWait(['于是下个目标就决定是「', tenn_spr, '」了！']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} oguri 小栗帽
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} city 黄金城市
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     */
    const f = async (
      maya,
      oguri,
      amazon,
      city,
      falcon,
      you,
      callname,
      call_12,
    ) => {
      await era.printAndWait([
        '粉丝感谢祭。这是会招待平时支持赛',
        maya.uma_sex_title,
        '的粉丝前来参加的祭典。',
      ]);
      await era.printAndWait('春季感谢祭的重头戏是运动对抗赛等活动──');
      await maya.say_and_wait(
        '哈哈，气氛好热烈～☆欸欸，下个项目是沙土2000米耶～！',
      );
      await amazon.say_and_wait('……呃，你不是有参加吗！快点过去吧！');
      await maya.say_and_wait([
        '咦～！？不要不要！我正在和 ',
        callname,
        ' 约会耶～！',
      ]);
      era.printButton('「慢走！」', 1);
      await era.input();
      await maya.say_and_wait(['咦，怎么连 ', callname, ' 也这样！？']);
      era.drawLine();
      await maya.say_and_wait([
        '真是的……',
        call_12,
        ' 好过分哦～我难得的约会……',
      ]);
      await amazon.say_and_wait(
        '……受不了。虽说今天确实是祭典没错，但你可别玩太疯了。',
      );
      await amazon.say_and_wait('你难道忘了吗？仔细看向你的四周。');
      await amazon.say_and_wait('然后用心注意。');
      await maya.say_and_wait('……四周……？');
      await city.say_and_wait('……呵。让你们见识我的力量。');
      await oguri.say_and_wait('嗯……还不错。');
      await falcon.say_and_wait(
        '嗯～大家都在看飞鹰子☆呀～干脆就这样独占大家的目光吧♪',
      );
      await amazon.say_and_wait('……怎么样？');
      await maya.say_and_wait('……我好像很少跟那些人比赛。');
      await amazon.say_and_wait('没错。许多你很少对上的对手正集聚一堂。');
      await amazon.say_and_wait('这次的比赛的确不是正式比赛。但正因为这样──');
      await amazon.say_and_wait('才有办法跟平常遇不到的对手来场正面对决。');
      await amazon.say_and_wait(
        '不管是怎样的比赛，能跟那些人同场较量的机会一生只有一次。',
      );
      await amazon.say_and_wait('所以每场比赛都要不顾一切地……去好好享受。');
      await maya.say_and_wait('……不顾一切地，去享受。');
      await amazon.say_and_wait(
        '对。所以你在这场比赛中，也会更加成长吧！然后──',
      );
      await maya.say_and_wait('……成长！？大人！？');
      await maya.say_and_wait([
        '收到☆我今天要把 ',
        call_12,
        ' 甩在后头抵达终点！',
      ]);
      await amazon.say_and_wait('喂！？你那样也有点太得意忘形了吧！？');
      await era.printAndWait('接着，沙土2000米开赛了──');
      era.drawLine();
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} amazon 菱亚马逊
   * @param {CharaTalk} falcon 醒目飞鹰
   * @param {CharaTalk} you 玩家
   * @param {string} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
   * @param {PrintedSpan} callname_12 菱亚马逊对玩家的称呼
   * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
   * @param {number} rank 摩耶重炮的模拟赛名次
   */
  async ws_95_14_end(
    maya,
    amazon,
    falcon,
    you,
    callname,
    call_12,
    callname_12,
    a_call_m,
    rank,
  ) {
    if (rank === 1) {
      await maya.say_and_wait([callname, '────！我拿到了第一名哦──☆']);
      era.printButton('「真是厉害！」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿……再多多夸奖我一点☆');
      await amazon.say_and_wait([
        '……真是前途无量的',
        maya.child_sex_title,
        '。没想到不只是赢过了我，还赢过了那些人……',
      ]);
      await maya.say_and_wait([
        '嘻嘻。',
        call_12,
        '，谢谢你让我认真参加这场比赛！',
      ]);
      await maya.say_and_wait('我跑得非常开心哦！非常地……兴奋。');
      await maya.say_and_wait(
        '我想了只有在这场比赛才办得到的事情，并思考了很多作战。',
      );
      await maya.say_and_wait(
        '──我已经在这场比赛里，把最精彩的跑法全都展现出来了。',
      );
      await amazon.say_and_wait('唔……！全都是你临场想出来的吗？');
      await amazon.say_and_wait([
        '这',
        maya.child_sex_title,
        '，真的是前途无量呢……！',
      ]);
      await era.printAndWait([
        '摩耶重炮正一步一步脚踏实地在变强，',
        you.get_colored_name(),
        ' 度过了让 ',
        you.get_colored_name(),
        ' 确实体会到这点的一天。',
      ]);
    } else {
      await maya.say_and_wait(['唔唔……', callname, '……']);
      await amazon.say_and_wait(['哈哈哈！', a_call_m, '！你输得还真惨啊。']);
      await amazon.say_and_wait(
        '不过，这也是个好机会。你就仔细看好赢家的脸，把这份不甘化作动力吧。',
      );
      await amazon.say_and_wait('我也是这么变强的……嘿嘿。');
      await maya.say_and_wait('唔唔唔……为了变强……为了成长……！');
      await falcon.say_and_wait('大家～～！谢谢你们～～☆');
      await you.say_as_passer_by_and_wait(
        '观众',
        '唔哦哦哦哦哦！！飞鹰子──！！',
      );
      await maya.say_and_wait('哇～～讨厌讨厌讨厌！不甘心不甘心好不甘心～！！');
      await maya.say_and_wait([
        '人家也想站在那边，接受 ',
        callname,
        ' 的欢呼～！',
      ]);
      await amazon.say_and_wait([
        '唉……你真的满脑子都是 ',
        callname_12,
        ' 的事情呢。',
      ]);
      await maya.say_and_wait([
        '呜……因为人家想让 ',
        callname,
        ' 看见变成熟的我嘛。',
      ]);
      era.printButton('「我已经充分感受到你的成长咯」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await maya.say_and_wait('唔……我还要再比一次～！下次一定会赢！');
      await amazon.say_and_wait('就说了只有一次机会啦！……真受不了！');
      await era.printAndWait([
        '之后 ',
        you.get_colored_name(),
        ' 和 ',
        amazon.get_colored_name(),
        ' 合力制服了大吵大闹的 ',
        maya.get_colored_name(),
        '。',
      ]);
    }
  },
  before_tenn_spr: (() => {
    const title = '迎向春季天皇赏';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} t_call_a 东海帝王对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_b 东海帝王对成田白仁的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} callname_12 菱亚马逊对玩家的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      you,
      callname,
      call_3,
      t_call_a,
      t_call_b,
      t_call_m,
      callname_12,
      hans_dai,
      tenn_spr,
      arim_kin,
    ) => {
      await era.printAndWait(['然后到了「', tenn_spr, '」当天──']);
      await teio.say_and_wait(['嗨♪', t_call_m, '！']);
      await maya.say_and_wait(['哇，是 ', call_3, '！你是来帮我加油的吗？']);
      await teio.say_and_wait([
        '嗯，',
        t_call_a,
        ' 也说',
        maya.sex,
        '事情办完后就会冲过来！',
      ]);
      await teio.say_and_wait('嘿嘿，大家好像都很期待哦！你的比赛！');
      await teio.say_and_wait('你看你看，这个！');
      await you.say_as_passer_by_and_wait('新闻', [
        '『',
        tenn_spr,
        ' 将是两强对决！？』『',
        brian.get_colored_name(),
        ' 和 ',
        maya.get_colored_name(),
        '，谁将获胜！』',
      ]);
      await you.say_as_passer_by_and_wait('新闻', [
        '『经历',
        hans_dai,
        ' 的激战后，迎来了 ',
        tenn_spr,
        '！』『闪耀的会是巨星 ',
        brian.get_colored_name(),
        '，还是新星 ',
        maya.get_colored_name(),
        ' 呢！』',
      ]);
      await maya.say_and_wait('……！');
      await teio.say_and_wait('嘻嘻，怎么样？开始紧张了吗？');
      await maya.say_and_wait('………………呵呵呵。');
      await maya.say_and_wait(
        '人家怎么可能因为这种事就害怕！已经啊～开始兴奋起来了！',
      );
      await teio.say_and_wait([
        '哇～！',
        t_call_m,
        ' 大人果然厉害～！太令人佩服了～！',
      ]);
      await maya.say_and_wait('哈哈哈！给我布丁我就原谅你☆');
      await maya.say_and_wait(['嘻嘻。那么 ', callname, '，我先过去了！']);
      era.printButton('「今天绝对不能输哦」', 1);
      await era.input();
      await maya.say_and_wait('嗯，我不会输的！');
      await maya.say_and_wait('我这次一定会完美赢过白仁的！');
      await maya.say_and_wait(['所以 ', callname, ' 也要好好期待哦！']);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' 目送 ',
        maya.get_colored_name(),
        ' 出场之后──',
      ]);
      await era.printAndWait('（叩叩）');
      await teio.say_and_wait([
        '咦，',
        t_call_a,
        '？',
        t_call_m,
        ' 已经走了哦。',
      ]);
      await amazon.say_and_wait('……我说你们，有看到那个视频吗？');
      await teio.say_and_wait([
        '咦，你是说 ',
        t_call_b,
        ' 的新闻吗？那个我有给 ',
        t_call_m,
        ' 看……',
      ]);
      await amazon.say_and_wait('不是，是刚刚才播的。');
      await amazon.say_and_wait(['……总之 ', callname_12, '，你先看一下吧。']);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' 拿到的手机上，正在播映一则新闻。',
      ]);
      await you.say_as_passer_by_and_wait('记者', [
        brian.get_colored_name(),
        '选手，请问这是真的吗！？跑完这次的『',
        tenn_spr,
        '』之后──',
      ]);
      await brian.say_and_wait(['嗯，我会针对『', arim_kin, '』进行调整。']);
      await you.say_as_passer_by_and_wait('记者', [
        '可、可是……',
        arim_kin,
        ' 是冬季竞赛哦！？现在就做决定会不会太快──',
      ]);
      await brian.say_and_wait('──并不会太快。');
      await brian.say_and_wait('我有事情要去确认，为此需要时间。');
      await brian.say_and_wait([
        '──我要确认我 ',
        brian.get_colored_name(),
        '，究竟能跑到什么地步……！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '紧急情况';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('哈啊……哈啊……！……好！');
      await maya.say_and_wait(['这下就能……让 ', call_16, '……！']);
      await brian.say_and_wait('──为什么？');
      await brian.say_and_wait('哼……！还是只有这点程度……！');
      await maya.say_and_wait('……真是的，感觉就不把人家放在眼里。');
      era.drawLine();
      await maya.say_and_wait([call_16, ' 究竟在看哪里……']);
      era.printButton('……咦？', 1);
      await era.input();
      await maya.say_and_wait(['……', call_16, ' 究竟在看哪里呢……？']);
      await maya.say_and_wait(['……', callname, '，那个啊。我有件事想拜托你。']);
      await maya.say_and_wait([
        '再一次就好，希望可以尽快让我跟 ',
        call_16,
        ' 比赛。',
      ]);
      era.printButton('「你这次明明赢了耶」', 1);
      await era.input();
      await maya.say_and_wait('嗯，必须再比一次才行……虽然我不清楚为什么。');
      await maya.say_and_wait('而且这次有种预感，觉得要赶快才行……');
      await amazon.say_and_wait([
        '唔！',
        a_call_m,
        '……是这次的比赛让你这么想的吗？',
      ]);
      await maya.say_and_wait('……没、没错。');
      await amazon.say_and_wait('是吗。既然这样，那就更不能放着不管了。');
      await amazon.say_and_wait(['──『', arim_kin, '』一定就是最后了吧。']);
      era.printButton('「……最后？」', 1);
      await era.input();
      await amazon.say_and_wait([
        '嗯，那家伙打算把 ',
        arim_kin,
        ' 当成『最后的比赛』，结束选手生涯。',
      ]);
      await amazon.say_and_wait('哼……也太早落幕了吧……！');
      await maya.say_and_wait([call_12, '！？']);
      await maya.say_and_wait('……为什么？这样好奇怪。');
      await maya.say_and_wait([
        '怎么可能是最后……',
        call_16,
        ' 今天不是也很强吗？',
      ]);
      await maya.say_and_wait('居然要结束了。讨厌……我才不接受！');
      await maya.say_and_wait([
        '因为就算赢了比赛，我却不觉得自己已经赢过 ',
        call_16,
        ' 了！',
      ]);
      await maya.say_and_wait([
        '不是只有我自己而已，人家也想让',
        maya.sex,
        '对我的实力感到兴奋！',
      ]);
      era.printButton('「你想让' + brian.sex + '感到兴奋？」', 1);
      await era.input();
      await maya.say_and_wait('……嗯，没错。因为我好不甘心。');
      await maya.say_and_wait([
        '在赛场上闪闪发亮的赛',
        maya.uma_sex_title,
        '，就是能让同场比赛的对手和观众，让大家的心都感到兴奋不已的存在。',
      ]);
      await maya.say_and_wait([
        '所以人家也想成为能让',
        maya.sex,
        '感到兴奋的人……！',
      ]);
      await maya.say_and_wait(['那个，', callname, '。就是啊……']);
      await maya.say_and_wait([
        call_12,
        ' 刚才不是说，有马纪念是 ',
        call_16,
        ' 的最后一场比赛吗？',
      ]);
      await maya.say_and_wait([
        '所以人家希望你能在『',
        arim_kin,
        '』之前把我训练到完美。',
      ]);
      era.printButton('「我知道了」', 1);
      await era.input();
      await maya.say_and_wait('……谢谢。嘿嘿，我很期待哦。');
      await era.printAndWait([
        '──如果既要以「',
        arim_kin,
        '』为目标，同时也要能和',
        maya.sex,
        '所期望的强敌较量……以此方向去安排G1的参赛计划的话──',
      ]);
      await era.printAndWait(
        '夏季跟秋季至少各得要参加一场比赛。看是接近有马的中长距离，或是中距离的G1。',
      );
      era.printButton('「『宝冢纪念』、『秋季天皇赏』……」', 1);
      await era.input();
      await maya.say_and_wait(
        '我知道了，人家会参加的。我要参加比赛……以最快的速度变强。',
      );
      await maya.say_and_wait('──我感觉不这么做不行。');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_lose: (() => {
    const title = '紧急情况';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('哈啊……哈啊……！……唔！');
      await maya.say_and_wait([call_16, '……果然……好快啊……！！']);
      await brian.say_and_wait('──为什么？');
      await brian.say_and_wait('为什么……还办不到……！');
      await maya.say_and_wait('……真是的，感觉就不把人家放在眼里。');
      era.drawLine();
      await maya.say_and_wait([call_16, ' 究竟在看哪里……']);
      era.printButton('……咦？', 1);
      await era.input();
      await maya.say_and_wait(['……', call_16, ' 究竟在看哪里呢……？']);
      await maya.say_and_wait(['……', callname, '，那个啊。我有件事想拜托你。']);
      await maya.say_and_wait([
        '再一次就好，希望可以尽快让我跟 ',
        call_16,
        ' 比赛。',
      ]);
      era.printButton('「你还打算挑战' + brian.sex + '啊」', 1);
      await era.input();
      await maya.say_and_wait('嗯，必须再比一次才行……虽然我不清楚为什么。');
      await maya.say_and_wait('而且这次有种预感，觉得要赶快才行……');
      await amazon.say_and_wait([
        '唔！',
        a_call_m,
        '……是这次的比赛让你这么想的吗？',
      ]);
      await maya.say_and_wait('……没、没错。');
      await amazon.say_and_wait('是吗。既然这样，那就更不能放着不管了。');
      await amazon.say_and_wait(['──『', arim_kin, '』一定就是最后了吧。']);
      era.printButton('「……最后？」', 1);
      await era.input();
      await amazon.say_and_wait([
        '嗯，那家伙打算把 ',
        arim_kin,
        ' 当成『最后的比赛』，结束选手生涯。',
      ]);
      await amazon.say_and_wait('哼……也太早落幕了吧……！');
      await maya.say_and_wait([call_12, '！？']);
      await maya.say_and_wait('……为什么？这样好奇怪。');
      await maya.say_and_wait([
        '怎么可能是最后……',
        call_16,
        ' 今天不是也很强吗？',
      ]);
      await maya.say_and_wait([maya.sex, '又让人家感到很兴奋了耶？']);
      await maya.say_and_wait('但是居然已经要结束了。讨厌……我才不接受！');
      await maya.say_and_wait(['人家才不要一直输给', maya.sex, '！']);
      era.printButton('「……你想赢吗？」', 1);
      await era.input();
      await maya.say_and_wait('我想赢。');
      await maya.say_and_wait([
        '……而且不只有人家，这次一定要让',
        brian.sex,
        '也兴奋不已。',
      ]);
      await maya.say_and_wait([
        '在赛场上闪闪发亮的赛',
        maya.uma_sex_title,
        '，就是能让同场比赛的对手和观众，让大家的心都感到兴奋不已的存在。',
      ]);
      await maya.say_and_wait([
        '所以人家也想成为能让',
        maya.sex,
        '感到兴奋的人……！',
      ]);
      await maya.say_and_wait(['那个，', callname, '。就是啊……']);
      await maya.say_and_wait([
        call_12,
        ' 刚才不是说，有马纪念是 ',
        call_16,
        ' 的最后一场比赛吗？',
      ]);
      await maya.say_and_wait([
        '所以人家希望你能在『',
        arim_kin,
        '』之前把我训练到完美。',
      ]);
      era.printButton('「我知道了」', 1);
      await era.input();
      await maya.say_and_wait('……谢谢。嘿嘿，我很期待哦。');
      await era.printAndWait([
        '──如果既要以「',
        arim_kin,
        '』为目标，同时也要能和',
        maya.sex,
        '所期望的强敌较量……以此方向去安排G1的参赛计划的话──',
      ]);
      await era.printAndWait(
        '夏季跟秋季至少各得要参加一场比赛。看是接近有马的中长距离，或是中距离的G1。',
      );
      era.printButton('「『宝冢纪念』、『秋季天皇赏』……」', 1);
      await era.input();
      await maya.say_and_wait(
        '我知道了，人家会参加的。我要参加比赛……以最快的速度变强。',
      );
      await maya.say_and_wait('──我感觉不这么做不行。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_20: (() => {
    const title = '迈向夕阳';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} t_call_a 东海帝王对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      callname,
      t_call_a,
      t_call_m,
      a_call_m,
      takz_kin,
      tenn_sho,
      arim_kin,
    ) => {
      await brian.print_and_wait([
        '一开始只是和',
        brian.elder_sibling_sex_title,
        '比谁跑得快。',
      ]);
      await brian.print_and_wait([
        '很一般的',
        brian.siblings_sex_title,
        '间的赛跑……真的是非常一般。',
      ]);
      await brian.print_and_wait([
        '但是我拼命地追逐着',
        brian.elder_sibling_sex_title,
        '的背影，就像欣喜雀跃的野兽。',
      ]);
      await brian.print_and_wait(
        '让脚动起来，将空气吸入肺里。接着再让脚动起来──',
      );
      await brian.print_and_wait('这正是我的呼吸。');
      await brian.print_and_wait('──不久之后，我该追逐的背影消失了。');
      await brian.print_and_wait('我变成了一个人。');
      await brian.print_and_wait('就算变得孤单一人，我依然记得我的呼吸。');
      await brian.print_and_wait(
        '而且也理解到一件事情。就是我的呼吸让我感到饥渴。',
      );
      await brian.print_and_wait(
        '理解到我越是全力呼吸，喉咙就越来越渴，不会感到满足。',
      );
      await brian.print_and_wait('可是并不能停止呼吸。');
      await brian.print_and_wait('就算呼吸开始带来痛苦，这也是为了要生存。');
      await brian.print_and_wait('不过，如果……如果这副身体──');
      await brian.print_and_wait('将来有一天拒绝我的呼吸的话──');
      await brian.print_and_wait('……应该会是在那个时候吧。');
      await brian.print_and_wait('呼……呼……！');
      await brian.print_and_wait('哼……我是……不会输的！');
      era.drawLine();
      await amazon.say_and_wait('那家伙……还跑得下去啊。');
      await amazon.say_and_wait([
        '哼……',
        arim_kin,
        ' 可不是只有 ',
        a_call_m,
        ' 哦。我也一定会追上你的……！',
      ]);
      await teio.say_and_wait([
        '好了好了，',
        t_call_a,
        ' 就先不提，',
        t_call_m,
        ' 的下场比赛是『',
        takz_kin,
        '』吧？那就好好休息吧。',
      ]);
      await teio.say_and_wait(['咦，', t_call_m, '？有听到吗？']);
      await maya.say_and_wait('……我知道了。');
      await amazon.say_and_wait(['……', a_call_m, '？']);
      await maya.say_and_wait('可是，这不是真的吧……怎么有这种事……');
      await maya.say_and_wait('因为，怎么可能会……！');
      await amazon.say_and_wait([a_call_m, '！？']);
      await maya.say_and_wait('呼啊……呼啊……呼啊……');
      era.printButton(`「……Maya」`, 1);
      await era.input();
      await maya.say_and_wait([callname, '。']);
      era.printButton('「你知道什么了吗？」', 1);
      await era.input();
      await maya.say_and_wait('……');
      await maya.say_and_wait('我发现到了一件事。');
      await maya.say_and_wait('那个太阳虽然很耀眼，却是个夕阳。');
      await maya.say_and_wait(
        '要是不快点，就会下沉了。下沉到没有人到得了的地方。',
      );
      await maya.say_and_wait(['我明明都还没跟', maya.sex, '并肩过……！']);
      era.printButton(`「你是指白仁吗？」`, 1);
      await era.input();
      await maya.say_and_wait(['………………', callname, ' 也发现了吧。']);
      await maya.say_and_wait('我回想起了过去的那些事情。');
      await maya.say_and_wait('──那个人也想要感到雀跃。');
      await maya.say_and_wait([
        maya.sex,
        '只是想要全力奔跑，然后讲出『好开心』这句话。',
      ]);
      await maya.say_and_wait([
        '所以',
        maya.sex,
        '才一直不断挣扎。',
        maya.sex,
        '相信总有一天能说出那句话。',
      ]);
      await maya.say_and_wait(
        '──就算身体已经无法回应想要闪闪发亮的心情，也硬是撑着。',
      );
      await maya.say_and_wait(['……', callname, '！我不想就这么放弃。']);
      await maya.say_and_wait([
        '假如那个人真的把『',
        arim_kin,
        '』当作最终战！',
      ]);
      await maya.say_and_wait([
        '我就在那一天以『摩耶重炮』的身份参赛，胜过',
        maya.sex,
        '，然后向',
        maya.sex,
        '炫耀！',
      ]);
      await maya.say_and_wait([
        '跟',
        maya.sex,
        '说『人家的全力比你的全力还要强吧』。',
      ]);
      await maya.say_and_wait('『人家让你感到兴奋了吧』！');
      era.printButton('「就是这股气势！」', 1);
      await era.input();
      await maya.say_and_wait('嗯！我一定会做到的！');
      await maya.say_and_wait([
        '我要在『',
        takz_kin,
        '』变得更强，在『',
        tenn_sho,
        '』变得更快。',
      ]);
      await maya.say_and_wait(['然后在『', arim_kin, '』上──']);
      await maya.say_and_wait(['──如果能超越', maya.sex, '的话……']);
      await maya.say_and_wait([
        '到时 ',
        callname,
        ' 你要只看着我，然后像『你比谁都还要耀眼』这样，称赞我哦。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '迎向宝冢纪念';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     */
    const f = async (maya, amazon, brian, call_16, a_call_m, takz_kin) => {
      await era.printAndWait(['到了「', takz_kin, '」当天。而这次──']);
      await maya.say_and_wait(['……', call_16, ' 不会参赛。']);
      await maya.say_and_wait('啊哈哈☆真是最棒的机会了！只有我会出赛！');
      await maya.say_and_wait('所以我是不会输的。──我会做好眼前该做的事。');
      era.printButton('「去更加成长吧！」', 1);
      await era.input();
      await maya.say_and_wait('收到☆我会听从指示，迅速进步的♪');
      era.drawLine();
      await era.printAndWait('（哇啊啊啊啊啊────！！）');
      await amazon.say_and_wait('哦，你来了啊。');
      await brian.say_and_wait('……哼，因为没有拒绝的理由。');
      await brian.say_and_wait('所以是有什么事。把我找来这么远的地方。');
      await brian.say_and_wait(
        '如果不是什么大不了的事，我之后就不会再跟你交谈了。',
      );
      await amazon.say_and_wait(
        '总之你先静下来。你直觉这么敏锐，应该察觉到了吧？',
      );
      await amazon.say_and_wait([
        '在这次的『',
        takz_kin,
        '』上，『',
        a_call_m,
        '』会参赛。',
      ]);
      await brian.say_and_wait('……那又怎么了。');
      await amazon.say_and_wait('哼，别在那假装你不感兴趣啦。');
      await amazon.say_and_wait([
        '你对',
        maya.sex,
        '有所渴求。一个能解放你的某种东西。',
      ]);
      await brian.say_and_wait('……你早就注意到了吗？');
      await amazon.say_and_wait('我可是追着你的背影好几年了。');
      await amazon.say_and_wait('虽然我最后还是不知道你想要的究竟是什么。');
      await amazon.say_and_wait('不过至少我有发现到你在忍耐某件事情。');
      await amazon.say_and_wait('也发现继续这样下去一点意思也没有。');
      await brian.say_and_wait('哼，所以你才将希望寄托在那家伙身上？');
      await brian.say_and_wait([
        '你好像特别关注',
        maya.sex,
        '，而且还栽培',
        maya.sex,
        '啊。',
      ]);
      await amazon.say_and_wait('哦，你早就知道了？');
      await brian.say_and_wait([
        '因为',
        maya.sex,
        '那不懂得放弃的烦人跑法，跟某人还真像啊。',
      ]);
      await amazon.say_and_wait([
        '哈哈，是啊。',
        maya.sex,
        '跟你很像，都很贪心。',
      ]);
      await brian.say_and_wait('……哼。');
      await amazon.say_and_wait([
        '就顺便告诉你好了。',
        maya.sex,
        '还会继续成长。',
      ]);
      await amazon.say_and_wait([
        '对于说什么『这是最后』这种丧气话的你，',
        maya.sex,
        '一定会赏你一个大大的耳光吧。',
      ]);
      await amazon.say_and_wait('然后等你被打醒之后──');
      await amazon.say_and_wait('这次就换我来击败你了。');
      await brian.say_and_wait(
        '……哼，亚马同学也变得圆滑不少啊。居然还帮助敌人。',
      );
      await amazon.say_and_wait('你在说什么。不是敌人，而是劲敌吧？');
      await brian.say_and_wait('……呵。');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '前往驾驶舱';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, amazon, brian, callname) => {
      await era.printAndWait('（哇啊啊啊啊啊────！！）');
      await brian.say_and_wait('……');
      await amazon.say_and_wait('怎么样？');
      await brian.say_and_wait('……不怎么样。');
      await brian.say_and_wait('事情办完了，我要回学园了。');
      await amazon.say_and_wait('回去训练吗？');
      await brian.say_and_wait('……烦死了。');
      era.drawLine();
      await maya.say_and_wait(['哈啊……哈啊……呼。', callname, '，如何？']);
      await maya.say_and_wait('我有确实成长了吗？以我现在能办到的全速。');
      era.printButton('「你有所成长了！」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿，太好了♪不愧是人家果然很厉害呢☆');
      await maya.say_and_wait(
        '呵呵。我可受不了像那种，会被其他人的气流影响的平庸驾驶技术啦♪',
      );
      await maya.say_and_wait('那么！已经锁定下个目标了！目标是──');
      era.printButton(`「『秋季天皇赏』！」`, 1);
      await era.input();
      await maya.say_and_wait('收到☆');
      await maya.say_and_wait('好，下次也要全速前进♪');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿（资深年）';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, callname) => {
      await era.printAndWait('从今天起，「夏季合宿」又要开始了！');
      await maya.say_and_wait([callname, '，欢迎回来♪来到和人家的度假会场～☆']);
      await maya.say_and_wait('今年也两个人一起度过火热的夏天吧☆');
      era.printButton('「是和大家一起度过炎热的夏天」', 1);
      await era.input();
      await maya.say_and_wait('哼──！又说这种话～！');
      await maya.say_and_wait('不过今年好像──');
      await maya.say_and_wait('真的会是目前为止最热的夏天呢。嘻嘻☆');
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿（资深年）结束';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, brian, you, callname) => {
      await maya.say_and_wait('呼……『夏季合宿』终于在今天结束了……');
      await maya.say_and_wait('嘻嘻……人家也引擎全开认真训练了……');
      await maya.say_and_wait('所以在回程的巴士上……我要……稍微休息一下……');
      await maya.say_and_wait('到了之后……会起来的……');
      await maya.say_and_wait('呼……呼……');
      await era.printAndWait([
        '……于是 ',
        you.get_colored_name(),
        ' 今年也让',
        maya.sex,
        '在巴士上好好地休息了。',
      ]);
      era.drawLine();
      await maya.say_and_wait('嗯……到学园了……？呼啊……嗯。');
      await maya.say_and_wait(
        '嘻嘻。我在车上睡得很饱。所以追加训练也能好好加油……的……',
      );
      era.printButton('「你看起来还是很困」', 1);
      await era.input();
      await maya.say_and_wait('唔……才没有…………嗯？');
      await brian.say_and_wait('呼……呼…………还没……！');
      await brian.say_and_wait('我……还可以……！');
      await maya.say_and_wait(['……！', callname, '，刚才那是──']);
      era.printButton(`「是白仁啊」`, 1);
      await era.input();
      await maya.say_and_wait('嗯……是没错……');
      await maya.say_and_wait(['……', maya.sex, '十分耀眼。亮到很刺眼。']);
      await maya.say_and_wait('比起之前……还要耀眼。');
      await maya.say_and_wait([
        '……',
        callname,
        '。我还是想要现在开始训练。可以吧？',
      ]);
      await era.printAndWait([
        '于是',
        maya.sex,
        '揉了几下眼睛之后，就跑去训练场了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '迎向秋季天皇赏';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} t_call_a 东海帝王对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      callname,
      call_3,
      t_call_a,
      t_call_m,
      a_call_m,
      tenn_sho,
      arim_kin,
    ) => {
      await era.printAndWait([
        '──终于迎来了「',
        tenn_sho,
        '」。跨越这场比赛后，',
        maya.get_colored_name(),
        ' 将……',
      ]);
      await maya.say_and_wait(['……我要上了！', callname, '！']);
      await maya.say_and_wait([
        '我会赢得这场比赛，提升实力！一定要……参加『',
        arim_kin,
        '』！！',
      ]);
      era.printButton('「一路顺风！」', 1);
      await era.input();
      await maya.say_and_wait('嗯！');
      await teio.say_and_wait('啊、啊啊……不好意思！');
      await maya.say_and_wait(['哇，', call_3, '！？']);
      await teio.say_and_wait('没错！答对了！');
      await teio.say_and_wait([
        '我来传话给 ',
        t_call_m,
        '！委托人是 ',
        t_call_a,
        '！',
      ]);
      await teio.say_and_wait([
        { color: amazon.color, content: '『' },
        a_call_m,
        { color: amazon.color, content: '！你从春天开始就是我的──』' },
        '……以下略过～',
      ]);
      era.printButton('「这样可以吗！？」', 1);
      await era.input();
      await teio.say_and_wait('可以啦可以啦！重要的是最后一段！');
      await teio.say_and_wait([
        {
          color: amazon.color,
          content:
            '『我也很期待能跟变强的你比赛。我从今天起──就是你的劲敌了。』',
        },
      ]);
      await teio.say_and_wait([
        maya.sex,
        '是这么说的！我也懂',
        maya.sex,
        '的心情。因为我也很想跟你比赛！',
      ]);
      await teio.say_and_wait(['所以别输了！要赢哦，', t_call_m, '！']);
      await teio.say_and_wait('登上顶点，让大家去追你吧！');
      await maya.say_and_wait('啊哈哈，这是叫我逃给大家追吗？');
      await teio.say_and_wait(['哎呀呀。难道 ', t_call_m, ' 是只会追人的吗？']);
      await maya.say_and_wait(['呵呵～才没这种事☆对吧，', callname, '！']);
      era.printButton(`「Maya不管什么都办得到」`, 1);
      await era.input();
      await maya.say_and_wait('嘿嘿！说得对☆');
      await maya.say_and_wait(
        '呵呵。所以人家会跑出怎样的表现，你们两个千万不能错过哦♪',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '通往天空的跑道';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} luna 鲁铎象征
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} b_call_l 成田白仁对鲁铎象征的称呼
     * @param {PrintedSpan} l_call_b 鲁铎象征对成田白仁的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      callname,
      t_call_m,
      b_call_l,
      l_call_b,
      arim_kin,
    ) => {
      await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
      await maya.say_and_wait([callname, '！人家拿下第一名咯！第一名！']);
      era.printButton('「你很努力呢！」', 1);
      await era.input();
      await maya.say_and_wait('嗯！人家很努力！不过我还能再加把劲！');
      await maya.say_and_wait('嘿嘿，因为啊──');
      await teio.say_and_wait([
        '哦哦！',
        t_call_m,
        ' 好厉害！接着就是『',
        arim_kin,
        '』了！',
      ]);
      await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
      await maya.say_and_wait('大家一定也都认为人家能够更加耀眼♪');
      era.drawLine({ content: '几天之后' });
      await maya.say_and_wait('呼……呼……嗯，又刷新成绩了！');
      await maya.say_and_wait(['这下子『', arim_kin, '』也──']);
      await maya.say_and_wait('……啊。');
      await luna.say_and_wait(['……', l_call_b, '，你说的都是真的吗？']);
      await luna.say_and_wait(['你要在『', arim_kin, '』──']);
      await brian.say_and_wait([b_call_l, '，聊未来的事没有意义。']);
      await brian.say_and_wait('我是麻烦你陪我并跑练习，没错吧？');
      await luna.say_and_wait('这……是没错。');
      await brian.say_and_wait('……我凋零的时机由我自己做决定。');
      await brian.say_and_wait('如果你想跟我讨论的话，就待在一旁看着吧。');
      await brian.say_and_wait('……到时只会让扬长而去的我拿下胜利。');
      await luna.say_and_wait('喂、喂！');
      await luna.say_and_wait('……一意孤行，只顾走自己的路吗。但是──');
      await luna.say_and_wait('别以为每个人都会被你抛下！');
      await maya.say_and_wait(['……', maya.sex, '又在闪闪发亮了。']);
      await maya.say_and_wait([
        '越看越不甘心。为什么',
        maya.sex,
        '还能持续闪闪发亮呢。',
      ]);
      await maya.say_and_wait('那个人明明──即将要下沉了的说。');
      era.printButton('「……因为夕阳会散发着红色光芒」', 1);
      await era.input();
      await maya.say_and_wait('……咦？');
      await era.printAndWait('傍晚的太阳比起早上和中午的时候都还要来得通红。');
      await era.printAndWait(
        '当夕阳落下、下沉之前，那一瞬间的耀眼光芒，会抓住人们的心。',
      );
      era.printButton('「别输给那道光芒了」', 1);
      await era.input();
      await maya.say_and_wait('……嗯。');
      await maya.say_and_wait('要是输给那道光芒，我感觉一辈子都会赢不了。');
      await maya.say_and_wait(['我会全力以赴哦。在『', arim_kin, '』──']);
      await maya.say_and_wait('拿出全力……赢过那个人！！');
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (maya, you, callname, arim_kin) => {
      await era.printAndWait([
        '在接近「',
        arim_kin,
        '」前的某一天，',
        maya.get_colored_name(),
        ' 把 ',
        you.get_colored_name(),
        ' 找了出来。',
      ]);
      await maya.say_and_wait([callname, '，快点快点☆']);
      await maya.say_and_wait('你看你看☆这边有雪人，那边还有圣诞树哦♪');
      era.printButton('「你感觉很开心呢」', 1);
      await era.input();
      await maya.say_and_wait('嗯♪因为今天是特别约会的日子嘛！');
      await maya.say_and_wait('今天是……恋人们的平安夜☆');
      era.printButton('「还没到晚上哦」', 1);
      await era.input();
      await era.printAndWait('而且今天──');
      await maya.say_and_wait('嘻嘻，我知道啦～');
      await maya.say_and_wait(
        '今天既不是『圣诞节当天』，也还没到晚上……不过啊。',
      );
      await maya.say_and_wait('所以我才想说要『预约』！');
      era.printButton('「预约？」', 1);
      await era.input();
      await maya.say_and_wait(
        '没错！我其实是想在平安夜约会……不过那天已经有重要的行程了吧？',
      );
      await maya.say_and_wait(['所以说……', callname, '！']);
      await maya.say_and_wait(['帮人家拍照☆用 ', callname, ' 的手机拍！']);
      era.printButton('「用我的？」', 1);
      await era.input();
      await maya.say_and_wait('嗯！准备好了吗？可别放过快门时机哦！');
      await maya.say_and_wait('三、二、一……');
      await era.printAndWait('（喀嚓）');
      await maya.say_and_wait('啊哈哈，有把我拍得可爱吗～？要珍惜这张照片哦。');
      await maya.say_and_wait('在平安夜当晚，我会摆出那个姿势当你的礼物！');
      await era.printAndWait([
        '听到',
        maya.sex,
        '这么说，',
        you.get_colored_name(),
        ' 确认了一下照片──',
      ]);
      await era.printAndWait([
        '照片上的 ',
        maya.get_colored_name(),
        ' 一边笑着，一边大力地挥着手。',
      ]);
      await maya.say_and_wait(['嘿嘿☆我在 ', arim_kin, ' 只会拿下第一名！']);
      await maya.say_and_wait([
        '今年的『圣诞节』，我会把最闪耀的我送给 ',
        callname,
        '！',
      ]);
      await maya.say_and_wait(['所以，', callname, ' 要把平安夜那天留给我！']);
      await maya.say_and_wait(['──留给我的『', arim_kin, '』！！']);
      await era.printAndWait([
        '──看见',
        maya.sex,
        '这么宣示，让 ',
        you.get_colored_name(),
        ' 更加期待今年的「',
        arim_kin,
        '』了。',
      ]);
      await era.printAndWait([
        '……照片上的 ',
        maya.get_colored_name(),
        ' 朝着镜头抛出了飞吻。',
      ]);
      await maya.say_and_wait([
        '嘻嘻，今年的平安夜……你要好好期待『',
        arim_kin,
        '』赛后的演唱会哦。',
      ]);
      await maya.say_and_wait('我一定会担任主唱，只对你送上『啾』的☆');
      era.printButton('「咦！？」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿，放心放心～☆我不会让其他人发现的！');
      await maya.say_and_wait('嘻嘻……很有大人的感觉吧？');
      era.printButton('「喂！」', 1);
      await era.input();
      await maya.say_and_wait(
        '咦～有什么关系嘛☆我会趁舞台暗下来的时候偷偷来的！',
      );
      await maya.say_and_wait([
        '所、以、说～☆在『',
        arim_kin,
        '』的演唱会上，千万不行把视线从我这个主唱身上移开♪',
      ]);
      await maya.say_and_wait([
        '还是说……',
        callname,
        ' 希望等我下舞台之后，才给你个『啾』～？',
      ]);
      await maya.say_and_wait('……这样我也可以哦。嘿嘿☆');
      await era.printAndWait([
        '……对于说出这些话的 ',
        maya.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 决定要严正叮咛',
        maya.sex,
        '，不要擅自更改舞蹈动作。',
      ]);
      await era.printAndWait(['不过今年的「', arim_kin, '」──']);
      await era.printAndWait([
        maya.get_colored_name(),
        ' 一定会拿下第一……担任主唱的。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '迎向有马纪念';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} b_call_m 成田白仁对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (maya, brian, callname, call_16, b_call_m, arim_kin) => {
      await maya.say_and_wait(['『', arim_kin, '』，我又来了。']);
      await maya.say_and_wait([
        '嘿嘿，',
        callname,
        '。跟去年相比，人家有成长吗？',
      ]);
      era.printButton('「成长了很多」', 1);
      await era.input();
      await maya.say_and_wait('呵呵……是吗。这样啊，这样啊☆');
      await maya.say_and_wait('不过，还是有一些地方没有变。');
      await maya.say_and_wait('人家还是想要闪闪发亮！就在这闪耀系列赛上！！');
      await maya.say_and_wait(['所以 ', callname, '，直到最后都要看着我哦☆']);
      await maya.say_and_wait('看着人家这比谁都还耀眼的样子♪');
      era.drawLine();
      await maya.say_and_wait(['啊，是 ', call_16, '！你好☆']);
      await brian.say_and_wait(['……是 ', b_call_m, ' 啊。']);
      await maya.say_and_wait('咦☆你记得人家的名字了吗！？哇！好开心！！');
      await brian.say_and_wait(
        '哼……跟你比了这么多场比赛，就算不想也会记住吧。',
      );
      await maya.say_and_wait(
        '嘿嘿，这样啊。那你今天得专注在要和人家比赛这件事上哦。',
      );
      await maya.say_and_wait('我会让你雀跃不已到，足以忘记郁闷和痛苦！');
      await maya.say_and_wait('我会让你的注意力都只集中在我身上！');
      await brian.say_and_wait('……！');
      await maya.say_and_wait('嘻嘻。人家的理解能力很强！');
      await maya.say_and_wait([
        '但是啊，还是会有不懂的事情。因为 ',
        call_16,
        ' 一直都很耀眼。',
      ]);
      await maya.say_and_wait(['所以人家会赢过 ', call_16, '。']);
      await maya.say_and_wait([
        '我会比 ',
        call_16,
        ' 更加全力以赴，去闪闪发亮的。',
      ]);
      await maya.say_and_wait('然后一定会让你感到雀跃！');
      await brian.say_and_wait('……哼。');
      await brian.say_and_wait('很好，全力以赴上吧。我会击溃你的。');
      await maya.say_and_wait('哼哼☆我会把这句话还给你♪');
      await maya.say_and_wait('因为人家是不可能输的！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '最后进场';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} l_call_b 鲁铎象征对成田白仁的称呼
     */
    const f = async (maya, brian, luna, you, callname, call_16, l_call_b) => {
      await you.say_as_passer_by_and_wait('观众们', [
        { color: maya.color, content: '重、炮！重、炮！重、炮！重、炮！' },
      ]);
      await maya.say_and_wait('…………赢了。');
      await maya.say_and_wait(['……我赢了。我赢过 ', call_16, ' 了。']);
      await maya.say_and_wait([callname, '！我……我……！']);
      era.printButton(`「Maya，你太厉害了」`, 1);
      await era.input();
      await maya.say_and_wait('嗯……嗯……！');
      await maya.say_and_wait('人家很厉害吧？很耀眼吧？');
      era.printButton('「你一直都是最耀眼的」', 1);
      await era.input();
      await maya.say_and_wait(['哇～～～～！！', callname, '～！！']);
      era.drawLine();
      await brian.say_and_wait('……哈……哈哈，我居然还在喘。');
      await brian.say_and_wait(
        '我彻底输了。拿出全力……却输了。但是……感觉不差。',
      );
      await brian.say_and_wait('哼，这就是──');
      await luna.say_and_wait(['──', call_16, '！']);
      await luna.say_and_wait('……这样真的好吗？');
      await brian.say_and_wait('……嗯，对了。还剩下那个啊。');
      await brian.say_and_wait('──我的『引退典礼』。');
      await luna.say_and_wait('坚定不移……你的心意都没变吗？');
      await luna.say_and_wait(
        '……记者们已经聚集在一起了。这是你的典礼，至少让我办得盛大一点。',
      );
      await brian.say_and_wait('……感谢你。');
      await you.say_as_passer_by_and_wait('工作人员', [
        '……',
        brian.get_colored_name(),
        ' 选手，典礼预计在五分钟后开始。',
      ]);
      await brian.say_and_wait('嗯……知道了。');
      await brian.say_and_wait(
        '──幸好我停下脚步的时候是站在赛场上。站在这片草地，而非学园。',
      );
      await you.say_as_passer_by_and_wait('观众A', [
        '骗人的吧！？',
        brian.get_colored_name(),
        '！让我见识更多传说啊！！',
      ]);
      await you.say_as_passer_by_and_wait('观众B', '求求你，不要引退！');
      await brian.say_and_wait('唉……在难过什么。你们还会再见识到下个梦想吧。');
      await brian.say_and_wait('──就在那女孩身上。');
      await you.say_as_passer_by_and_wait('主持人', [
        '那么，',
        brian.get_colored_name(),
        ' 的引退典礼即将开始──',
      ]);
      await maya.say_and_wait('慢着──！');
      await maya.say_and_wait([
        '人家才不同意！',
        call_16,
        ' 的引退典礼要中止！！',
      ]);
      await you.say_as_passer_by_and_wait('主持人', '咦！？可、可是……');
      await maya.say_and_wait('没什么可是不可是！人家讨厌这样！所以不行！');
      await brian.say_and_wait('……喂。');
      await brian.say_and_wait(
        '突然就跑出来，也太任性了吧。你可是今天的赢家啊。',
      );
      await brian.say_and_wait(
        '想一下你的影响力吧。小朋友要胡闹就去别的地方──',
      );
      await maya.say_and_wait('人家本来就是小朋友啊！！');
      await maya.say_and_wait([
        '因为我之后要和 ',
        call_16,
        ' 比很多场比赛，成为成熟的赛',
        maya.uma_sex_title,
        '！',
      ]);
      await maya.say_and_wait(
        '所以我讲这些话没有关系！也可以耍任性！因为我还是小朋友！',
      );
      await maya.say_and_wait([
        '人家还没跟 ',
        call_16,
        ' 跑个够！跟我约定下场比赛啦！',
      ]);
      await brian.say_and_wait('什……什么！？');
      await brian.say_and_wait('你这么说太牵强了！真是的，今天是我的──');
      await maya.say_and_wait('才不是你的引退典礼！！');
      await brian.say_and_wait('喂！！');
      await you.say_as_passer_by_and_wait('观众C', '噗……哈哈！');
      await you.say_as_passer_by_and_wait('观众D', [
        '没错，没错！',
        brian.get_colored_name(),
        '，别引退啊！和冠军比赛！',
      ]);
      await you.say_as_passer_by_and_wait('观众E', [
        '人家向你宣战却逃避，',
        brian.get_colored_name(),
        ' 才不会这样吧！',
      ]);
      await brian.say_and_wait('喂，怎么连你们都在起哄……');
      await maya.say_and_wait(['啊哈哈，大家都很了解 ', call_16, ' 嘛！']);
      await maya.say_and_wait([
        '不过人家懂得更多哦。就是啊，今天的 ',
        call_16,
        '──',
      ]);
      await maya.say_and_wait(
        '──很想再跟人家赛跑对吧？想让心情再变得更兴奋对吧？',
      );
      await brian.say_and_wait('……！');
      await maya.say_and_wait(['呵呵。所以人家会实现 ', call_16, ' 的心愿！']);
      await maya.say_and_wait(
        '因为只要不断地跟闪闪发亮的人比赛，人家就能变成更耀眼的大人！',
      );
      await brian.say_and_wait('……这是怎样。');
      await brian.say_and_wait('你为了满足你的任性，叫我要继续跑下去吗。');
      await maya.say_and_wait('嗯！');
      await brian.say_and_wait('……受不了。真是前途堪忧的孩子。');
      await maya.say_and_wait('我很快就会成为大人了☆');
      await brian.say_and_wait('我不是那个意思……');
      await luna.say_and_wait(['呵呵……你就认输吧，', l_call_b, '。']);
      await luna.say_and_wait('在场的任何人都不希望你引退。');
      await luna.say_and_wait('──你自己也是。');
      await luna.say_and_wait('现在还来得及改成别的典礼。');
      await maya.say_and_wait('对，那么！就改成我的宣战典礼！');
      await brian.say_and_wait('喂！？改成那样，典礼的主角就变成你了──');
      await maya.say_and_wait('哼，又没关系！对不对，会长！');
      await luna.say_and_wait(
        '嗯，可以。改成更能炒热气氛的典礼，记者们也会接受吧。',
      );
      await maya.say_and_wait('收到☆');
      await brian.say_and_wait('……真的是小朋友。');
      await maya.say_and_wait(
        '啊哈哈☆正因为这样，才让人期待我长大后的样子吧？很兴奋吧？',
      );
      await brian.say_and_wait('……是啊。');
      await brian.say_and_wait('期待到让人很不甘心。');
    };
    f.title = title;
    return f;
  })(),
  sa_adv_game: (() => {
    const title = '摩耶重炮的紧张刺激☆试胆游戏！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     */
    const f = async (maya, teio, you, callname, call_3, t_call_m) => {
      await era.printAndWait([
        '过了门禁时间，鸦雀无声的校内。当 ',
        you.get_colored_name(),
        ' 回训练员室拿忘记的东西的途中──',
      ]);
      await maya.say_and_wait(['啊！是 ', callname, '！还真巧耶♪']);
      era.printButton('「这么晚了怎么还在这？」', 1);
      await era.input();
      await maya.say_and_wait('我们啊～是来看幽灵的☆');
      await maya.say_and_wait(
        '我们看电视上的灵异节目，结果讲到学园里也有灵异事件──',
      );
      await teio.say_and_wait([
        '怎、怎么想都是骗人的，但是 ',
        t_call_m,
        ' 却不相信……',
      ]);
      era.printButton('「已经过了门禁时间，快回去吧」', 1);
      await era.input();
      await teio.say_and_wait(
        '对、对对对对吧！？在意的地方都去过了，我已经觉得够了！',
      );
      await maya.say_and_wait(
        '咦～！？那再去一个地方就好～！人家想去训练员室！',
      );
      await maya.say_and_wait([
        '很久很久以前，有一位赛',
        maya.uma_sex_title,
        '在决胜服送到的前一天遭遇车祸身亡了……',
      ]);
      await maya.say_and_wait([
        maya.sex,
        '的幽灵会出现在晚上的训练员室，并且悲叹地问道『我的决胜服在哪……』！',
      ]);
      await teio.say_and_wait('咿────！？');
      await teio.say_and_wait('哇，呃……这、这一定是捏造出来的！');
      await maya.say_and_wait(['咦，又不一定！', callname, '，带我们去嘛～！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 敌不过打死不退的摩耶重炮，三个人一起前往了训练员室。',
      ]);
      await maya.say_and_wait('喂～幽灵～！你在哪～？');
      await teio.say_and_wait([
        '不用呼唤',
        maya.sex,
        '吧！万一真的出现怎么办啦～！',
      ]);
      await era.printAndWait(
        '为了找连一次都没穿过的决胜服，而在此徘徊的幽灵吗……',
      );

      era.printButton('「那个幽灵一定很遗憾吧」（力量+20）', 1);
      era.printButton('「在摩耶重炮等人的身后……」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '你们讲到那个幽灵一定很想穿上决胜服，在赛场上奔驰──',
        ]);
        await maya.say_and_wait(['对啊。', maya.sex, '一定很喜欢跑步吧……']);
        await maya.say_and_wait([
          '如果我是',
          maya.sex,
          '，一定也会因为感到孤单和遗憾而跑来这里！',
        ]);
        era.printButton('「真想弥补' + maya.sex + '的遗憾啊」', 1);
        await era.input();
        await maya.say_and_wait('嗯……');
        await maya.say_and_wait('对了！人家要连同幽灵的分一起跑！');
        await maya.say_and_wait(
          '为了无法参赛的幽灵，我要参加一堆比赛跑出好成绩♪',
        );
        await era.printAndWait('（嘎哒嘎哒）');
        await teio.say_and_wait('咿！？窗户突然发出声音了！！');
        era.printButton('「' + maya.sex + '可能是想向我们道谢」', 1);
        await era.input();
        await teio.say_and_wait(
          '呜呜呜～！讨厌，我们快回去啦～！要是被附身怎么办～！！',
        );
        await maya.say_and_wait('咦？跟幽灵当朋友感觉就很有趣♪');
        await maya.say_and_wait('对不对，幽灵☆');
        await maya.say_and_wait('好！幽灵，人家会加油的！');
        await era.printAndWait([
          maya.get_colored_name(),
          ' 轻快地奔跑着，就像背后吹着顺风一样。',
        ]);
      } else {
        await teio.say_and_wait('呀啊啊啊！！有鬼～～～～～！！');
        await teio.say_and_wait('哇啊啊啊！！救～命～啊～！！');
        era.printButton('「追上去吧！」', 1);
        await era.input();
        await maya.say_and_wait('好、好的！');
        await era.printAndWait([
          '你们急忙追着 ',
          teio.get_colored_name(),
          '，不过却彻底跟丢了。',
        ]);
        await maya.say_and_wait([call_3, ' ', maya.sex, '其实很怕幽灵呢……']);
        era.printButton('「' + maya.sex + '跑去哪了？」', 1);
        await era.input();
        await maya.say_and_wait('嗯……至少不会经过又暗又恐怖的地方吧？');
        await maya.say_and_wait('那答案就简单了！走吧！');
        await era.printAndWait([
          you.get_colored_name(),
          ' 跟在知道 ',
          teio.get_colored_name(),
          ' 行经路线的 ',
          maya.get_colored_name(),
          ' 身后──',
        ]);
        await maya.say_and_wait(['太好了！找到你了，', call_3, '！！']);
        await teio.say_and_wait('……………………');
        era.printButton('「对不起，刚才吓唬你」', 1);
        await era.input();
        await era.printAndWait([
          '带着不知道为什么沉默的 ',
          teio.get_colored_name(),
          '，你们三人一起回去了。',
        ]);
        era.drawLine();
        await maya.say_and_wait(['呼啊～', callname, '，早安～']);
        await maya.say_and_wait('结果，昨天没能遇到幽灵呢～真没意思。');
        await teio.say_and_wait('没遇到才好！真是的，我很担心你耶！？');
        await teio.say_and_wait('你都一直不回房间，手机也打不通！');
        await maya.say_and_wait([
          '咦？',
          call_3,
          '，你是跟我们一起回去的，对吧？',
        ]);
        await teio.say_and_wait('咦？我自己一个人回来的。');
        await maya.say_and_wait(['……那昨天在我们身边的 ', call_3, ' 是──']);
        await you.say_as_passer_by_and_wait('2人', '咦～～～～～！？');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_star_wish: (() => {
    const title = '向星星许愿';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} sunday 美丽周日
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_55 摩耶重炮对美丽周日的称呼
     */
    const f = async (maya, sunday, you, callname, call_55) => {
      await era.printAndWait([
        '在和 ',
        you.get_colored_name(),
        ' 一起回去的路上，',
        maya.sex,
        '说有想去的地方，所以你们就来到了这里……',
      ]);
      era.printButton('「你有东西忘在校舍吗？」', 1);
      await era.input();
      await maya.say_and_wait([
        '没有！听我说听我说，我今天从 ',
        call_55,
        ' 那听到一个很厉害的传闻～！',
      ]);
      await sunday.used_to_say_and_wait(
        '在星空照耀下，顶楼上怦然心动的两人能够获得幸福',
      );
      await maya.say_and_wait('呀☆好浪漫，太美好了！');
      await maya.say_and_wait('对不对？对不对？一定会很有趣的，一起去嘛！');
      era.printButton('「真拿你没办法」', 1);
      await era.input();
      await maya.say_and_wait(['太好了！这下就能和 ', callname, '……嘿嘿！']);
      await maya.say_and_wait('啊，对了！就是啊，途中被别人发现的话就会失败！');
      await maya.say_and_wait('有收到吗？');
      era.printButton('「收到！」', 1);
      await era.input();
      await maya.say_and_wait('很好！那么，开启匿踪模式……起飞☆');
      await maya.say_and_wait('──队长机联络各部队！没有发现敌机踪影……结束！');
      await maya.say_and_wait('嘿嘿！这样的话就能『咻──！』地前往顶楼了……');
      await era.printAndWait('（啪哒啪哒……啪哒啪哒……！）');
      await maya.say_and_wait(['……！！', callname, '，刚才那是……']);
      era.printButton('「是脚步声」', 1);
      await era.input();
      await maya.say_and_wait('而且……是不是往这边来了！？怎、怎么办！');
      era.printButton('「躲起来等对方走掉吧」（智力+20）', 1);
      era.printButton('「往顶楼冲刺！」（速度+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('好、好的！那就在那间教室──');
        await era.printAndWait('（……哒哒哒……哒哒……）');
        await maya.say_and_wait('……嘿嘿，像是在玩躲猫猫，开始觉得刺激了♪');
        era.printButton('「小声一点！」', 1);
        await era.input();
        await maya.say_and_wait('啊哇哇！这样不行这样不行！要小声一点，嘘……');
        await maya.say_and_wait(
          ['呵呵……', callname, ' 的睫毛有点卷卷的，好可爱♪'],
          true,
        );
        await maya.say_and_wait('而且感觉……比平常还……帅……', true);
        await maya.say_and_wait('……呼哇……呼哇哇。', true);
        era.printButton('「摩耶重炮？」', 1);
        await era.input();
        await maya.say_and_wait('……啊～～不行了────！！');
        await sunday.say_and_wait([
          '哇☆吓我一跳！',
          maya.get_colored_name(),
          ' 也把东西忘在教室吗？？',
        ]);
        await maya.say_and_wait(['什、什么？', call_55, '！？']);
        era.printButton('「被发现了呢」', 1);
        await era.input();
        await maya.say_and_wait('啊────！！对耶！刚才太紧张都忘记了～～！');
        await sunday.say_and_wait('这样啊！你有用那个魔法？？但是但是……');
        await sunday.say_and_wait('心脏有噗通噗通跳的话就很美丽了☆对吧★');
        await maya.say_and_wait('唔…………或许确实是这样。就算不用魔法……');
        era.printButton('「什么意思？」', 1);
        await era.input();
        await maya.say_and_wait(
          '啊哇哇！！没事，什么事都没有！反正都失败了，我们早点回去吧！！',
        );
        await era.printAndWait([
          '在摩耶重炮的催促下，',
          you.get_colored_name(),
          ' 没搞懂魔法的真正用意就回去了……',
        ]);
      } else {
        await maya.say_and_wait('这样啊！只要跑掉，不被发现就好了！');
        await maya.say_and_wait(['那么 ', callname, '！手伸出来。']);
        era.printButton('「咦？」', 1);
        await era.input();
        await maya.say_and_wait(
          '因为人家跑得比较快嘛！好啦好啦，快点，快一点！',
        );
        await era.printAndWait([
          '被逐渐逼近的脚步声催促，',
          maya.get_colored_name(),
          ' 牵住了 ',
          you.get_colored_name(),
          ' 的手──',
        ]);
        await maya.say_and_wait([callname, '，加油加油！还差一点──！']);
        await maya.say_and_wait(['抵达！！太棒了，', callname, '！']);
        era.printButton('「太、太好了……」', 1);
        await era.input();
        await maya.say_and_wait('最后在这边看星星……');
        await maya.say_and_wait(['哇……！', callname, '，天空！快看天空！！']);
        await maya.say_and_wait('好壮观，超壮观的！夜空原来这么耀眼吗！？');
        era.printButton('「我们的努力有了回报呢！」', 1);
        await era.input();
        await maya.say_and_wait(
          '这样啊……没错！星星会这么漂亮，可能也是因为我们很努力！',
        );
        await maya.say_and_wait('……好！那差不多该回去了！');
        era.printButton('「已经要回去了吗？」', 1);
        await era.input();
        await era.printAndWait(
          '如果照传闻所说的，必须要「在星空照耀下的顶楼上怦然心动」才行……',
        );
        await maya.say_and_wait('嗯！要回去了！因为人家刚才知道了。');
        await maya.say_and_wait('就算不做任何事，我们……');
        await maya.say_and_wait('总、总之！事情就是这样！所以早点回去吧？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 露出微笑看着害羞的 ',
          maya.get_colored_name(),
          '……在满天星空照耀下，你们一起回去了。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweet_present: (() => {
    const title = '送给你甜蜜的心意♪';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} hishi 菱曙
     * @param {CharaTalk} flower 西野花
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_28 摩耶重炮对菱曙的称呼
     * @param {PrintedSpan} call_51 摩耶重炮对西野花的称呼
     */
    const f = async (maya, hishi, flower, you, callname, call_28, call_51) => {
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 经过食堂的时候──',
      ]);
      await maya.say_and_wait('今天要来努力做点心哦～♪还请两位多多指教！');
      await flower.say_and_wait('好的……♪做为指导老师，我会尽最大的努力的。');
      await hishi.say_and_wait('我也很擅长做点心哦～来做又大又美味的点心吧～♪');
      era.printButton('「在食堂做点心？」', 1);
      await era.input();
      await maya.say_and_wait(['啊，是 ', callname, '～！']);
      await maya.say_and_wait([
        '那个啊，我想做点心感谢 ',
        callname,
        ' 平日的指导！',
      ]);
      await maya.say_and_wait([
        '我跟厨房的阿姨这么说之后，',
        maya.sex,
        '就说我可以用这里的厨房♪',
      ]);
      await maya.say_and_wait([
        '只要做出美味的蛋糕，就能让 ',
        callname,
        ' 的心──',
      ]);
      era.printButton('「我的心？」', 1);
      await era.input();
      await maya.say_and_wait([
        '没、没什么！不介意的话就看我做吧，',
        callname,
        '♪',
      ]);
      await flower.say_and_wait('接着加入白砂糖并搅拌……');
      await maya.say_and_wait('嗯嗯～♪');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 面对不熟悉的料理陷入苦战，不过看起来非常开心。',
      ]);
      era.printButton(`「加油啊，Maya！」（耐力+20）`, 1);
      era.printButton('「我也来做好了」（智力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '看着',
          maya.sex,
          '卖力的样子，',
          you.get_colored_name(),
          ' 不禁为',
          maya.sex,
          '加油打气。',
        ]);
        await era.printAndWait('──同时，肚子也因为太饿，发出很大的声音。');
        await hishi.say_and_wait('啊哈哈♪就快做好了所以再等一下哦～');
        await flower.say_and_wait(
          '那个，这里有刚刚趁着空档做的马林糖……要吃一个吗？',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' 感激地收下了 ',
          flower.get_colored_name(),
          ' 和 ',
          hishi.get_colored_name(),
          ' 做的马林糖。',
        ]);
        era.printButton('「真好吃！是我喜欢的味道哦！」', 1);
        await era.input();
        await flower.say_and_wait('真、真的吗？太好了……有合你的胃口。');
        await maya.say_and_wait('哼！！');
        await maya.say_and_wait(
          '好吃……喜欢的味道……这些明明是人家想听到的话！',
          true,
        );
        await maya.say_and_wait('既然这样……', true);
        await maya.say_and_wait([
          call_51,
          '、',
          call_28,
          '！人家要自己一个人做蛋糕！',
        ]);
        await hishi.say_and_wait('咦？你可以吗～？');
        await maya.say_and_wait([
          '完全没问题！人家可是最懂 ',
          callname,
          ' 的喜好！',
        ]);
        await maya.say_and_wait(
          [
            '为了赢过',
            maya.couple_title,
            '两个，人家一定要靠自己做出更厉害的料理！',
          ],
          true,
        );
        await maya.say_and_wait('呜、呜呜呜～');
        await era.printAndWait([
          maya.get_colored_name(),
          ' 的蛋糕虽然做好了，但是颜色和形状实在难以形容……',
        ]);
        await maya.say_and_wait([
          '味道应该很合你的胃口！我有参考 ',
          callname,
          ' 喜欢吃的食物！',
        ]);
        await maya.say_and_wait('还加入了人家满满的爱……你不吃吗？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 下定决心，把 ',
          maya.get_colored_name(),
          ' 做的蛋糕放进嘴里──',
        ]);
        era.printButton('「真、真好吃！」', 1);
        await era.input();
        await maya.say_and_wait('真的吗！？');
        await maya.say_and_wait([
          '真的很好吃吗！？是 ',
          callname,
          ' 喜欢的味道吗！？',
        ]);
        era.printButton(`「嗯，Maya 真有一套！」`, 1);
        await era.input();
        await maya.say_and_wait('哇～♪好棒，太棒了～～～～～！！');
        await era.printAndWait([
          '做的料理得到称赞的 ',
          maya.get_colored_name(),
          '，在那之后心情一直很好，笑眯眯地完成了训练。',
        ]);
      } else {
        await era.printAndWait([
          '看着',
          maya.couple_title,
          '下厨的样子，连 ',
          you.get_colored_name(),
          ' 自己也想动手做了。',
          you.get_colored_name(),
          ' 这么告诉',
          maya.couple_title,
          '之后──',
        ]);
        await flower.say_and_wait(
          '呃，有兴趣的话要一起做吗？我可以告诉你步骤……！',
        );
        await maya.say_and_wait([
          '慢着慢着！',
          callname,
          ' 要看人家做料理啦～！',
        ]);
        era.printButton('「我也想向你表达感谢」', 1);
        await era.input();
        await maya.say_and_wait([callname, '……！']);
        await maya.say_and_wait('收到☆要是这样，我非常欢迎♪');
        await hishi.say_and_wait(
          '大家一起相亲相爱做料理～能让点心变得更美味哦♪',
        );
        await era.printAndWait(
          '经过一番努力总算把蛋糕做好了，不过稍微有点焦掉……',
        );
        await maya.say_and_wait(['哇～！', callname, ' 送我蛋糕～♪']);
        await maya.say_and_wait('我吃我吃……啊唔！');
        await maya.say_and_wait('有、有一点苦，不过这就是大人的味道吧♪');
        era.printButton('「只是烧焦而已！不用吃没关系！」', 1);
        await era.input();
        await maya.say_and_wait('不要～！');
        await maya.say_and_wait([
          '人家要一点都不剩，把 ',
          callname,
          ' 的心意吃光！',
        ]);
        await maya.say_and_wait([
          '所以 ',
          callname,
          '，你也吃人家做的蛋糕吧。',
        ]);
        await maya.say_and_wait('来～♪');
        await maya.say_and_wait('嘿嘿～！有收到我感谢的心意吗？');
        era.printButton('「当然有！」', 1);
        await era.input();
        await maya.say_and_wait('太好了～♪');
        await flower.say_and_wait('居、居然靠那么近……在一旁看得都脸红心跳了！');
        await hishi.say_and_wait('好棒，好棒。可喜可贺，可喜可贺～♪');
        await era.printAndWait([
          '在两位朋友的帮助下，',
          maya.get_colored_name(),
          ' 的点心做得非常成功。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_dokidoki_live: (() => {
    const title = '摩耶重炮的心跳不已☆直播！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} sunday 美丽周日
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_55 摩耶重炮对美丽周日的称呼
     */
    const f = async (maya, sunday, you, callname, call_3, call_55) => {
      await era.printAndWait([
        '和 ',
        you.get_colored_name(),
        ' 一起出门后的归途上──',
      ]);
      await maya.say_and_wait(['欸欸！', callname, '，你会看网络直播吗？']);
      era.printButton('「怎么突然问这个？」', 1);
      await era.input();
      await maya.say_and_wait('跟你说，人家也开始直播咯！');
      await maya.say_and_wait([
        '我会跳现在流行的曲子～或是和 ',
        call_3,
        ' 一起玩游戏～',
      ]);
      await maya.say_and_wait('会做一堆开心的事！');
      await maya.say_and_wait([callname, ' 也看一下嘛！好不好？好不好？']);
      era.printButton('「我知道了」', 1);
      await era.input();
      await era.printAndWait([
        '在 ',
        maya.get_colored_name(),
        ' 的热情要求下，',
        you.get_colored_name(),
        ' 约好会看',
        maya.sex,
        '下次的直播。',
      ]);
      era.drawLine({ content: '几天后' });
      await era.printAndWait([
        you.get_colored_name(),
        ' 打开 ',
        maya.get_colored_name(),
        ' 的直播频道──',
      ]);
      await maya.say_and_wait('在大家的心中着陆☆Maya频道要开始咯～♪');
      await maya.say_and_wait(['今天的来宾是我的朋友，', call_55, '！']);
      await sunday.say_and_wait('哈喽☆大家过得美丽吗？');
      await you.say_as_passer_by_and_wait('观众A', 'Maya，等你好久了～！！');
      await you.say_as_passer_by_and_wait(
        '观众B',
        '虽然不太懂，不过很Marvelous☆',
      );
      await maya.say_and_wait('谢谢大家留言～！人家也等大家很久了♪');
      await sunday.say_and_wait('今天我们两个会突击美丽的地方☆');
      await maya.say_and_wait('要上咯～！用咖啡杯来玩极速旋转大挑战！');
      await sunday.say_and_wait('啊哈哈哈哈～☆转来转去的，真美丽★');
      await maya.say_and_wait([
        '下一个是游戏厅！我要超过 ',
        call_3,
        ' 的分数！',
      ]);
      await sunday.say_and_wait('耶☆超级高分，真美丽★');
      await era.printAndWait(
        '之后两个人四处跑到许多景点去，借由精力充沛地玩耍而带给了观众欢笑。',
      );
      await era.printAndWait('宛如太阳一般的开朗，吸引大家的个人魅力──');
      await era.printAndWait([
        '看了直播，',
        you.get_colored_name(),
        ' 好像再次认识到 ',
        maya.get_colored_name(),
        ' 的魅力了。',
      ]);
      await maya.say_and_wait('啊，差不多该说再见了。大家看得还开心吗？');
      await era.printAndWait([
        '听到 ',
        maya.get_colored_name(),
        ' 抛出的问题，当 ',
        you.get_colored_name(),
        ' 回过神时就已经送出留言了。',
      ]);
      era.printButton('「我也看得很开心！」（耐力&力量+10）', 1);
      era.printButton('「我会一直支持你的。比赛加油！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('嘿嘿，谢谢！');
        await maya.say_and_wait(
          '我成功将兴奋和心动的心情，传给画面另一头的你了呢♪',
        );
        await maya.say_and_wait('收到大家的留言，让人家也非常非常开心哦☆');
        await era.printAndWait([
          '笑着说出这句话的 ',
          maya.get_colored_name(),
          ' 非常地闪闪动人。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 下定了决心──为了在以后也能看见这个笑容，',
          you.get_colored_name(),
          ' 要继续当',
          maya.sex,
          '的助力。',
        ]);
      } else {
        await maya.say_and_wait([
          '当然了！人家才不是光长得可爱的',
          maya.phy_sex_title,
          '♪',
        ]);
        await maya.say_and_wait([
          '我会在比赛中让你见识到，成熟的',
          maya.phy_sex_title,
          '是有各种面貌的！',
        ]);
        await maya.say_and_wait(
          '所、以、说☆不管是比赛还是直播，都要帮我加油哦♪',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' 十分清楚 ',
          maya.get_colored_name(),
          ' 作为竞技选手的魅力。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 希望只透过直播认识',
          maya.sex,
          '的观众，也能看看',
          maya.sex,
          '在赛场上发光发热的样子。',
        ]);
      }
      era.drawLine();
      await maya.say_and_wait(['哇～！', callname, '，你有看昨天的直播吗？']);
      era.printButton('「我还有留言呢」', 1);
      await era.input();
      await maya.say_and_wait('咦～！？难道是这个人吗～！？');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 指着的留言确实就是 ',
        you.get_colored_name(),
        ' 留的。',
      ]);
      await maya.say_and_wait('欸欸，人家有猜对吗？');
      era.printButton('「好厉害！你竟然知道呢」', 1);
      await era.input();
      await maya.say_and_wait([
        '这留言就像 ',
        callname,
        ' 在旁边的时候一样，看了心情就变得平静温暖起来！',
      ]);
      await maya.say_and_wait(
        '话说，我们一直都在一起，你明明可以直接告诉我～♪',
      );
      await era.printAndWait([
        '话是这么说，',
        maya.get_colored_name(),
        ' 还是露出了开心的表情。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_excited_live: (() => {
    const title = '摩耶重炮的兴高采烈☆直播！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '和 ',
        maya.get_colored_name(),
        ' 出门后，在一起回去的路上──',
      ]);
      await maya.say_and_wait([
        '对了，',
        callname,
        '！之前不是有聊到网络直播吗？',
      ]);
      await maya.say_and_wait(
        '在那之后观众就越来越多，人家的频道现在人气超高♪',
      );
      await era.printAndWait('用手机看了一下直播的存档，确实──');
      await you.say_as_passer_by_and_wait('观众A', 'Maya一直都好可爱！');
      await you.say_as_passer_by_and_wait('观众B', '我最爱Maya了☆');
      await era.printAndWait('看见很多热情的留言。');
      await maya.say_and_wait('对吧？人家的人气扶摇直上☆');
      await maya.say_and_wait(
        '然后呢然后呢！人家想要在下次的直播中让大家看看不同以往的我！',
      );
      await maya.say_and_wait([
        '……不过，要做什么好呢～？',
        callname,
        '，你有什么好点子吗？',
      ]);
      era.printButton('「给大家看你练习时的样子如何？」', 1);
      await era.input();
      await maya.say_and_wait(['就是这个！', callname, ' 脑筋果然动很快！']);
      await maya.say_and_wait('只要看见人家认真的样子，大家一定会更喜欢我吧！');
      await maya.say_and_wait([
        '所、以、说☆可以拜托提出点子的 ',
        callname,
        ' 拍摄吗～？',
      ]);
      await maya.say_and_wait(
        '如果直播获得很多人气，我在赛场上的表现也会受到关注哦～',
      );

      era.printButton('「我知道了。就拍你唱歌的样子吧！」（速度+20）', 1);
      era.printButton('「我知道了。就拍你奔跑的样子吧！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('嗯！立刻朝舞台起飞☆');
        era.drawLine();
        await maya.say_and_wait('在大家的心中着陆☆Maya频道要开始咯～♪');
        await you.say_as_passer_by_and_wait('观众C', '唔哦哦哦哦哦哦哦！！');
        await you.say_as_passer_by_and_wait('观众D', 'Maya今天也很有精神呢～☆');
        await you.say_as_passer_by_and_wait('观众E', '这里是哪里～？');
        await maya.say_and_wait('嘿嘿♪谢谢大家留言！');
        await maya.say_and_wait('今天呢，要让大家看我练习演唱会的样子！');
        await maya.say_and_wait([
          '帮忙拍摄的可是那位！人家安心信赖的伙伴，',
          callname,
          '！',
        ]);
        await maya.say_and_wait([you.sex, '会帮人家训练，还会称赞人家哦♪']);
        await you.say_as_passer_by_and_wait('观众F', '好期待演唱会～');
        await you.say_as_passer_by_and_wait('观众G', '我也想当训练员！！');
        await you.say_as_passer_by_and_wait('观众H', '超羡慕的。');
        await maya.say_and_wait(
          '哎哟，大家真是的～♪那么，Maya的演唱会要开始了！',
        );
        await maya.say_and_wait('一、二☆闪、耀☆重、重☆性、感☆');
        await maya.say_and_wait('最后是可爱地收尾！');
        await you.say_as_passer_by_and_wait('观众I', '太～可～爱～了～！！');
        await you.say_as_passer_by_and_wait('观众J', '歌曲和舞蹈都超棒！');
        await maya.say_and_wait('的确是很……不错吧♪');
        await maya.say_and_wait(
          '要是人家在比赛中获胜的话，就让大家在胜者舞台上看Maya本人☆',
        );
        await maya.say_and_wait('所以大家要帮我加油哦！');
      } else {
        await maya.say_and_wait('嗯！立刻朝操场起飞☆');
        era.drawLine();
        await maya.say_and_wait('在大家的心中着陆☆Maya频道要开始咯～♪');
        await you.say_as_passer_by_and_wait('观众C', '呀呼呜呜呜！！');
        await you.say_as_passer_by_and_wait('观众D', '接受着陆☆');
        await you.say_as_passer_by_and_wait('观众E', '居然是运动服！？');
        await maya.say_and_wait('嘿嘿～♪谢谢大家留言！');
        await maya.say_and_wait('今天呢，要让大家看人家训练的样子！');
        await maya.say_and_wait([
          '帮忙拍摄的可是那位！人家安心信赖的伙伴，',
          callname,
          '！',
        ]);
        await maya.say_and_wait([you.sex, '会帮人家训练，还会称赞人家哦♪']);
        await you.say_as_passer_by_and_wait('观众F', '训练加油～');
        await you.say_as_passer_by_and_wait('观众G', '我也是Maya的伙伴！');
        await you.say_as_passer_by_and_wait('观众H', '训练员跟我交换。？');
        await maya.say_and_wait('哎哟，大家真是的～♪那么，要开始训练了！');
        await maya.say_and_wait('呼……呼……！');
        await maya.say_and_wait('抵达终点！大家，人家跑得如何？');
        await you.say_as_passer_by_and_wait('观众I', '超级快！');
        await you.say_as_passer_by_and_wait('观众J', '实在是帅！');
        await maya.say_and_wait('的确是很……不错吧♪');
        await maya.say_and_wait(
          '既然这样，今天就尽情让你们见识人家帅气的一面吧！',
        );
        await maya.say_and_wait('大家不能眨眼哦♪');
        await era.printAndWait([
          '因为本人也充满干劲，所以 ',
          you.get_colored_name(),
          ' 就把握机会让',
          maya.sex,
          '进行比平常还多的训练。',
        ]);
      }
      era.drawLine({ content: '隔天' });
      await maya.say_and_wait('哇～！观众又增加了♪');
      await maya.say_and_wait('留言数也是目前为止最多的一次！');
      era.printButton(`「太好了，Maya！」`, 1);
      await era.input();
      await maya.say_and_wait([
        '嗯♪',
        callname,
        ' 也笑咪咪的，所以人家也开心♪',
      ]);
      await maya.say_and_wait('好！就这样变得更受欢迎！');
      await era.printAndWait([
        '人气不断上升的 ',
        maya.get_colored_name(),
        ' 越来越投入在直播上了。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_kirakira_kessin: (() => {
    const title = '摩耶重炮的耀眼☆决心！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '开始直播的 ',
        maya.get_colored_name(),
        ' 靠着与生俱来的魅力，成为了知名直播主。',
      ]);
      await era.printAndWait([
        '但是不知道为什么，',
        maya.sex,
        '好像不再直播了。今天也像这样整天都外出──',
      ]);
      era.printButton('「……你不直播了吗？」', 1);
      await era.input();
      await maya.say_and_wait('那个……我已经腻了！出去玩比较开心！');
      await maya.say_and_wait('能被大家称赞是很高兴，不过我觉得已经够了！');
      era.printButton('「你明明直播得很开心的说」', 1);
      await era.input();
      await maya.say_and_wait('好、好了啦！不要再聊直播的事了！');
      await maya.say_and_wait('人家还得去买今天开卖的杂志，该走了！');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 不由分说地结束话题，头也不回地走掉了。',
      ]);
      era.printButton('「不过，果然好令人在意……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 打开',
        maya.sex,
        '的直播存档，看能不能找出什么线索──',
      ]);
      era.printButton('「批评我的留言变多了啊……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 之前有帮忙',
        maya.sex,
        '拍摄过，自从那次之后，就有越来越多嫉妒 ',
        you.get_colored_name(),
        ' 的留言。',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' 可能是看了那些留言，导致情绪低落吧。',
      ]);
      era.printButton(`「得跟 Maya 聊聊……」`, 1);
      await era.input();
      await era.printAndWait([
        maya.sex,
        '可能会去的地方很多，',
        you.get_colored_name(),
        ' 决定一个一个找起。',
      ]);
      await maya.say_and_wait(['哇，', callname, '！？']);
      era.printButton('「总算找到你了……！」', 1);
      await era.input();
      await maya.say_and_wait('难道……你一直在找人家吗？');
      era.printButton('「因为我知道你不直播的原因了」', 1);
      await era.input();
      await maya.say_and_wait('不、不用再谈这件事了啦。原因就是人家刚才说的……');
      era.printButton('「谢谢你顾虑我」（速度&耐力+10）', 1);
      era.printButton('「我完全没把批评留言放在心上哦」（力量+20）', 2);
      era.printButton('「放弃直播太可惜了」（智力+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' 告诉',
            maya.sex,
            ' ',
            you.get_colored_name(),
            ' 看了对 ',
            you.get_colored_name(),
            ' 的批评留言，并感谢',
            maya.sex,
            '的温柔体贴──',
          ]);
          await maya.say_and_wait('才、才不是呢！人家是真的觉得腻了！');
          await maya.say_and_wait(
            '不再直播之后，才发现人家真正发光发热的地方果然是在赛场上！',
          );
          await maya.say_and_wait([
            '之后人家也会继续待在 ',
            callname,
            ' 的身边，参加一堆竞赛，跑出好成绩──',
          ]);
          await maya.say_and_wait('让更多人迷上我，比现在要来得多～！');
          era.printButton(`「Maya……」`, 1);
          await era.input();
          await maya.say_and_wait('真、真是的～！不要摆出那种表情啦！');
          await maya.say_and_wait([
            '只要和 ',
            callname,
            ' 在一起，不管做什么都很开心！',
          ]);
          await era.printAndWait([
            '听了 ',
            maya.get_colored_name(),
            ' 说的话，',
            you.get_colored_name(),
            ' 默默地点头。',
          ]);
          await era.printAndWait([
            '因为 ',
            you.get_colored_name(),
            ' 发现，不需要刻意去戳破',
            maya.sex,
            '为 ',
            you.get_colored_name(),
            ' 撒的善意谎言。',
          ]);
          await era.printAndWait([
            '相对的，',
            you.get_colored_name(),
            ' 会以训练员的身份，实现',
            maya.sex,
            '的心愿，帮助',
            maya.sex,
            '闪闪发亮──',
          ]);
          era.printButton('「我一定会让你幸福的！」', 1);
          await era.input();
          await maya.say_and_wait('咦！？');
          await maya.say_and_wait([callname, '！刚才那句话是……！？']);
          era.printButton(
            '「我会让你成为比谁都耀眼的赛' + maya.uma_sex_title + '！」',
            1,
          );
          await era.input();
          await maya.say_and_wait('啊……什么嘛，原来是这个意思啊。');
          await maya.say_and_wait('那人家也要来发誓！');
          await maya.say_and_wait([
            '人家一定会成为比星星还要耀眼的',
            era.get('cflag:24:性别') === 1 ? '绅士' : '淑女',
            '的！',
          ]);
          await maya.say_and_wait(['──跟 ', callname, ' 一起☆']);
          break;
        case 2:
          await era.printAndWait([
            '所以希望',
            maya.sex,
            '能像之前那样继续直播，',
            you.get_colored_name(),
            ' 这么告诉',
            maya.sex,
            '后──',
          ]);
          await maya.say_and_wait('人家很在意！');
          await maya.say_and_wait([
            '我很不开心！也很不甘心！',
            callname,
            ' 明明总是那么努力！',
          ]);
          await maya.say_and_wait([
            '不管是训练还是拍摄，',
            callname,
            ' 一直都帮助人家──',
          ]);
          await maya.say_and_wait('可是却因为我的错……明明是因为我的关系……');
          await maya.say_and_wait([
            callname,
            ' 你这大笨蛋！要多责备人家啦～～～～～！！',
          ]);
          await maya.say_and_wait('……呜。');
          era.printButton('「真对不起」', 1);
          await era.input();
          await maya.say_and_wait('呜呜～就是这一点……');
          await maya.say_and_wait([
            '虽然我很喜欢 ',
            callname,
            ' 对人温柔这点，但温柔过头的时候只要对着人家就好了！',
          ]);
          await maya.say_and_wait(
            '对『碍事』和『滚啦』这些留言，可以尽情发脾气没关系！',
          );
          era.printButton('「我这人碍不碍事就由比赛来判断吧」', 1);
          await era.input();
          await maya.say_and_wait([callname, '……']);
          await maya.say_and_wait('……受不了！真拿你没辄！');
          await maya.say_and_wait([
            '没问题。为了温柔的 ',
            callname,
            '，人家会拿下胜利的！',
          ]);
          await maya.say_and_wait('然后给大家一个好看！');
          await era.printAndWait([
            you.get_colored_name(),
            ' 点了点头，抬头望向夜空，仿佛在预示你们的未来一般，满天的星星在闪烁着。',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' 有看到对 ',
            you.get_colored_name(),
            ' 的批评留言，但因为这样就放弃直播太可惜了。',
          ]);
          await era.printAndWait([
            '「大家不是都看你的直播都看得很开心吗」，',
            you.get_colored_name(),
            ' 跟',
            maya.sex,
            '这样说之后──',
          ]);
          await maya.say_and_wait([
            '是没有错，但人家讨厌他们对 ',
            callname,
            ' 说过分的话……',
          ]);
          era.printButton('「只要传达出现在的心情，一定能得到理解的」', 1);
          await era.input();
          await maya.say_and_wait('……我知道了。人家会再和大家说一次的。');
          await maya.say_and_wait('那个……大家，好久不见了。欢迎收看Maya频道。');
          await you.say_as_passer_by_and_wait('观众A', 'Maya！？是本人！？');
          await you.say_as_passer_by_and_wait('观众B', '见不到你让我好寂寞！');
          await you.say_as_passer_by_and_wait(
            '观众C',
            '你看起来没什么精神耶。',
          );
          await maya.say_and_wait('嘿嘿，对不起。我今天有事情想告诉大家──');
          await era.printAndWait([
            '讲到这边，',
            maya.get_colored_name(),
            ' 低下头来。',
            maya.sex,
            '应该很烦恼该怎么开口吧。',
          ]);
          era.printButton(`（Maya，加油啊……！）`, 1);
          await era.input();
          await maya.say_and_wait(
            '……我直播的时候很开心。大家愿意看我直播，我也很高兴。',
          );
          await maya.say_and_wait([
            '可是啊，看到那些对 ',
            callname,
            ' 不好的留言，人家觉得很难过。',
          ]);
          await maya.say_and_wait([
            '因为人家和 ',
            callname,
            ' 都是想着『要赢得比赛～！』而一直在努力着……',
          ]);
          await maya.say_and_wait(
            '我希望大家可以帮我们加油，但大家是不是不喜欢……没有在玩耍的人家？',
          );
          await you.say_as_passer_by_and_wait('观众D', '超喜欢的！！');
          await you.say_as_passer_by_and_wait('观众E', 'Maya，真抱歉。');
          await you.say_as_passer_by_and_wait('观众F', '说得有点太过火了……');
          await maya.say_and_wait(
            '太好了……不过，Maya频道要暂时跟大家说再见了。',
          );
          era.printButton('「咦！？」', 1);
          await era.input();
          await maya.say_and_wait(
            '我在休息时间练习跑步时，发现到了！人家最能闪闪发亮的地方是在赛场上。',
          );
          await maya.say_and_wait(
            '虽然会有点寂寞……不过人家想让大家看到更棒的我！',
          );
          await you.say_as_passer_by_and_wait('观众G', '真的要说再见了？');
          await you.say_as_passer_by_and_wait('观众H', '这太难受了……');
          await maya.say_and_wait('大家……');
          await you.say_as_passer_by_and_wait('观众I', '我会帮Maya加油的。');
          await you.say_as_passer_by_and_wait('观众J', '我也是！');
          await you.say_as_passer_by_and_wait('观众K', 'Maya，我会去看你的！');
          await maya.say_and_wait(
            '嗯！比赛的时候随时都能见面！人家也会在赛场上等着大家的！',
          );
          await era.printAndWait(
            '在后来举办的模拟赛上，来现场加油的粉丝比平常还要多。',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_taisecu_hito: (() => {
    const title = '摩耶重炮的重要之人！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} fuji 富士奇石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} f_call_m 富士奇石对摩耶重炮的称呼
     */
    const f = async (maya, fuji, you, callname, f_call_m) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 把一起出门的 ',
        maya.get_colored_name(),
        ' 送回了宿舍前面。',
      ]);
      await maya.say_and_wait([
        '嘿嘿！今天也玩得超开心！和 ',
        callname,
        ' 的……约、会♪',
      ]);
      era.printButton('「玩得开心就好」', 1);
      await era.input();
      await maya.say_and_wait(
        '对了！来人家的房间吧～！像连续剧里演的那样先一起喝个茶──',
      );
      await fuji.say_and_wait('哎呀呀，我身为宿舍长可不能视而不见啊。');
      await maya.say_and_wait('啊！被爸爸发现了～');
      era.printButton('「爸爸……？」', 1);
      await era.input();
      await maya.say_and_wait(
        '就是那个啊！连续剧不是很常会有在家门口撞见爸爸的场面吗？',
      );
      await fuji.say_and_wait('哈哈哈，爸爸啊～宿舍长确实也能算是养父母呢。');
      await maya.say_and_wait('那么……爸爸，介绍给你认识！这个人是我重要的人☆');
      await fuji.say_and_wait([
        '什么？我',
        era.get('cflag:24:性别') === 1 ? '儿子' : '女儿',
        '重要的人吗～？是真的吗？',
      ]);
      era.printButton('「这个嘛……」（速度+20）', 1);
      era.printButton('「……其实我有其他重要的人」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['呀☆', callname, ' 竟然在害羞！好可爱！']);
        await fuji.say_and_wait('呵呵，玩笑就开到这吧。你们的感情真的很好呢。');
        await fuji.say_and_wait([f_call_m, ' 会这么有活力，也是这个缘故吗？']);
        await maya.say_and_wait('嘿嘿！因为我们可是互许将来了～♪');
        era.printButton('应该说是签约呢」', 1);
        await era.input();
        await maya.say_and_wait([
          '哼～！',
          callname,
          ' 真是的，这时候应该要说『嗯』……才对吧？',
        ]);
        await fuji.say_and_wait([
          '哈哈哈，原来如此。',
          f_call_m,
          ' 说的确实没错。',
        ]);
        await fuji.say_and_wait(['之后 ', f_call_m, ' 也要请你多多关照了。']);
        await fuji.say_and_wait('……开玩笑的。这样很像真的父亲吧？呵呵。');
        await fuji.say_and_wait([
          '那么我就先离开了。快到晚餐时间了，',
          f_call_m,
          ' 也一起来吧。',
        ]);
        await maya.say_and_wait('好！……啊，在走之前。');
        await maya.say_and_wait([
          callname,
          '，你被称赞了呢！这样正式见面的时候也没问题了☆',
        ]);
        era.printButton('「正式见面……？」', 1);
        await era.input();
        await maya.say_and_wait('那我先走了！明天见～♪');
        await era.printAndWait([
          '……总而言之，想到之后也要和 ',
          maya.get_colored_name(),
          ' 一起加油，',
          you.get_colored_name(),
          ' 鼓足了干劲。',
        ]);
      } else {
        await maya.say_and_wait('咦咦咦咦～～～！？');
        await maya.say_and_wait(
          '这是什么意思！？人家怎么不知道！到底是怎么一回事──！？',
        );
        await fuji.say_and_wait('原来是这样啊。看来你也真是会玩啊～？');
        await maya.say_and_wait('骗、骗人……你跟人家只是玩玩的……！？');
        era.printButton('「我开玩笑的」', 1);
        await era.input();
        await maya.say_and_wait('……咦？开玩笑？');
        await fuji.say_and_wait('哈哈哈哈！是啊。捉弄就到此为止吧。');
        await maya.say_and_wait('咦！？你们两个刚才都在捉弄人家！？');
        await maya.say_and_wait('哼！过分，太过分了！人家刚才是真的很难过～！');
        era.printButton('「抱歉抱歉」', 1);
        await era.input();
        await maya.say_and_wait('哼──！不管你说什么，人家都不会原谅你！');
        await fuji.say_and_wait([
          '哎呀呀，',
          maya.sex,
          '真的很喜欢你呢。我也不忍心你们因为这样而感情变差……',
        ]);
        await fuji.say_and_wait([
          '对了！',
          f_call_m,
          '，你知道食堂正在举办蛋糕嘉年华吗？',
        ]);
        await maya.say_and_wait('……知道啊？人家是很想去，但是抢不到票……');
        await fuji.say_and_wait(
          '我刚好房间里有多两张票。怎么样？要不要两个人去喝杯象征和好的茶。',
        );
        await maya.say_and_wait([
          '哇～～！！我要我要！人家想和 ',
          callname,
          ' 去！',
        ]);
        await fuji.say_and_wait(
          '那真是太好了。票就放在进门后最近的桌子上，你去拿吧。',
        );
        await maya.say_and_wait('好♪');
        await fuji.say_and_wait('呼……好，总算是搞定了。');
        era.printButton('「谢谢你……」', 1);
        await era.input();
        await fuji.say_and_wait('别这么说，我才是。其实我一直很想向你道谢。');
        await fuji.say_and_wait([
          '毕竟 ',
          f_call_m,
          ' ',
          maya.sex,
          '好奇心很旺盛嘛……所以在很多方面都让人担心。',
        ]);
        await maya.say_and_wait([callname, '！快点快点～！不然餐厅就要关了！']);
        await fuji.say_and_wait('呵呵。一定要玩得开心哦。');
        await era.printAndWait('之后两个人一起喝茶……并顺利地和好了。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_race_lesson: (() => {
    const title = 'Maya的比赛讲座☆';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} urara 春乌拉拉
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_52 摩耶重炮对春乌拉拉的称呼
     * @param {PrintedSpan} callname_52 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} u_call_m 春乌拉拉对摩耶重炮的称呼
     */
    const f = async (maya, urara, callname, call_52, callname_52, u_call_m) => {
      await era.printAndWait([
        '和 ',
        maya.get_colored_name(),
        ' 一起看完模拟赛后，回去的路上──',
      ]);
      await urara.say_and_wait([
        '啊，是 ',
        u_call_m,
        ' 和 ',
        callname_52,
        '～！你们难道是来帮我加油的吗！？',
      ]);
      await maya.say_and_wait(['嗯！', call_52, ' 很努力呢～☆']);
      await urara.say_and_wait('嘿嘿，谢谢～！');
      await urara.say_and_wait(
        '今天也跑得非常开心哦！虽然是最后一名，但我跑得很满足♪',
      );
      await maya.say_and_wait([
        '是吗～',
        call_52,
        ' 真厉害～！人家只要输了就会闹别扭☆',
      ]);
      await urara.say_and_wait('我一直都很开心哦！因为我最喜欢跑步了！');
      await urara.say_and_wait([
        '不过……要赢还真难！',
        u_call_m,
        ' 是怎么赢得比赛的？',
      ]);
      await maya.say_and_wait('我吗？');
      await urara.say_and_wait('嗯！你不是一直都跑得很快吗～？');
      await urara.say_and_wait([
        '乌拉拉要是也能像 ',
        u_call_m,
        ' 一样的话，说不定就能赢了！',
      ]);
      era.printButton('「要不要一起练习？」', 1);
      await era.input();
      await maya.say_and_wait('好主意☆');
      await maya.say_and_wait([call_52, '，我们一起练习，下次一定要获胜！！']);
      await maya.say_and_wait([
        '人家和 ',
        callname,
        ' 的比赛讲座～☆学生是 ',
        call_52,
        ' 同学♪',
      ]);
      await urara.say_and_wait('有！我是乌拉拉！');
      await maya.say_and_wait([
        '那就立刻开始吧～！首先是向 ',
        callname,
        ' 发问哦☆',
      ]);
      await maya.say_and_wait([call_52, ' 现在需要的是什么！？']);
      era.println();
      era.printButton('「增强体力避免筋疲力尽！」（耐力+20）', 1);
      era.printButton('「掌握超越对手的诀窍！」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['叮咚叮咚☆', callname, ' 果然厉害♪']);
        await maya.say_and_wait(['……嗯哼！那个，', call_52, ' 同学！']);
        await maya.say_and_wait(
          '讲白了☆之前比赛的时候，你跑到一半就没力了吧！？',
        );
        await urara.say_and_wait('嗯！虽然跑得很开心，但快累瘫了～');
        await maya.say_and_wait('如果有更多体力，就能更轻松地跑完了吧～☆');
        await urara.say_and_wait(['对耶！', u_call_m, ' 真聪明～♪']);
        await maya.say_and_wait(
          '噗噗！人家今天是老师，要叫我『摩耶重炮老师』！',
        );
        await urara.say_and_wait([
          '是的，',
          maya.get_colored_name(),
          ' 老师！',
        ]);
        await era.printAndWait([
          '就这样，在 ',
          maya.get_colored_name(),
          ' 的指导下，',
          urara.get_colored_name(),
          ' 进行了训练──',
        ]);
      } else {
        await maya.say_and_wait(
          '呀～☆这就是所谓的心有灵犀！？人家也在想同样的事情～♪',
        );
        await maya.say_and_wait([call_52, '，我问你，你平常都是怎么跑的？']);
        await urara.say_and_wait('平常？我都是拿出全力在跑哦！');
        await maya.say_and_wait('嗯，这样啊……那么，有什么让你伤脑筋的事情吗？');
        await urara.say_and_wait(
          '嗯～我很难取得领先呢～感觉要撞到别人的时候我就会变得很慌张！',
        );
        await maya.say_and_wait('哦哦，原来如此～！');
        await maya.say_and_wait('那么，下场比赛就盯着前面跑吧！');
        await maya.say_and_wait('只要紧盯着前面，就会遇到前面都没人的时候──');
        await maya.say_and_wait('等到那时候，就直直地往前冲☆');
        await urara.say_and_wait('我知道了！我会试试看的♪');
      }
      era.drawLine({ content: '第二天' });
      await urara.say_and_wait('听我说，听我说！我超过一个人了！');
      await maya.say_and_wait('哇，太棒了～！超过一个人──');
      await maya.say_and_wait('一个人！？');
      await urara.say_and_wait(
        '嘿嘿～！就这样分别超过每一个人，最后要拿下第一名～♪',
      );
      await maya.say_and_wait(
        '只要不断超越别人，总有一天会是第一名！一定要拿下第一名～！！',
      );
      await urara.say_and_wait('哦～！！');
      await era.printAndWait([
        '给 ',
        urara.get_colored_name(),
        ' 的指导似乎对 ',
        maya.get_colored_name(),
        ' 带来了正面影响。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_model_secret: (() => {
    const title = '成熟模特儿的秘诀！';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} yukino 雪之美人
     * @param {CharaTalk} city 黄金城市
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_29 摩耶重炮对雪之美人的称呼
     * @param {PrintedSpan} call_40 摩耶重炮对黄金城市的称呼
     * @param {PrintedSpan} y_call_c 雪之美人对黄金城市的称呼
     * @param {PrintedSpan} c_call_m 黄金城市对摩耶重炮的称呼
     * @param {PrintedSpan} c_call_y 黄金城市对雪之美人的称呼
     */
    const f = async (
      maya,
      yukino,
      city,
      you,
      callname,
      call_29,
      call_40,
      y_call_c,
      c_call_m,
      c_call_y,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 请摩耶重炮帮 ',
        you.get_colored_name(),
        ' 一起整理资料的时候──',
      ]);
      await maya.say_and_wait(['啊！这是有刊 ', call_40, ' 的杂志！']);
      await maya.say_and_wait([
        call_40,
        ' 果然好漂亮哦～♪穿裸露度高的衣服也很好看！',
      ]);
      await maya.say_and_wait('……对了！人家想到了一个好主意～！');
      await era.printAndWait(['整理完文件后，你们在外面走着──']);
      await city.say_and_wait(['哦，是 ', c_call_m, '。']);
      await yukino.say_and_wait('你好～！');
      await maya.say_and_wait([
        '是 ',
        call_29,
        ' 和 ',
        call_40,
        '～！来得正好☆',
      ]);
      await maya.say_and_wait(['我说啊～！', call_40, ' 是读者模特儿吧？']);
      await maya.say_and_wait([
        call_40,
        ' 认识很多成熟的模特儿，是一位帅气的大人──',
      ]);
      await maya.say_and_wait([
        '希望你可以告诉我成为成熟',
        maya.phy_sex_title,
        '的秘诀～♪',
      ]);
      await city.say_and_wait([
        '『成熟',
        maya.phy_sex_title,
        '』吗……你真的很喜欢这个呢。',
      ]);
      await yukino.say_and_wait([
        '成、成熟的',
        maya.phy_sex_title,
        '！？哇……！',
      ]);
      await yukino.say_and_wait([
        '……不、不过如果那就是『城市',
        maya.child_sex_title,
        '』的诀窍……希望你也能告诉我！',
      ]);
      await city.say_and_wait(['咦……连 ', c_call_y, ' 也这么说？']);
      await city.say_and_wait('……是可以啦。但只是我自己的看法，请多包涵。');
      await city.say_and_wait('我在担任读者模特儿的时候，会注重的有两点。');
      await city.say_and_wait('首先是『状态』。');
      await city.say_and_wait('总是维持最佳状态，展现自己最好的一面。');
      await maya.say_and_wait('最好的一面……好酷！！然后呢然后呢！？');
      await city.say_and_wait('再来是『迅速』。');
      await city.say_and_wait('掌握时下流行趋势，走在流行最尖端。');
      await yukino.say_and_wait('真、真有参考价值～！');
      await maya.say_and_wait([
        call_40,
        ' 总是这么地闪闪发亮，就是这两点的关系吧～！',
      ]);
      await maya.say_and_wait('只要人家学起来的话，说不定就能朝大人更近一步♪');
      era.println();
      era.printButton('「维持状态确实很重要」（耐力+20）', 1);
      era.printButton('「保持迅速确实很重要」（速度+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('对吧对吧～♪状态啊～！');
        await maya.say_and_wait('状态……锻炼身体……嗯！人家懂了！');
        await maya.say_and_wait(['增强体力就好了吧！对吧！？', callname, '♪']);
        era.printButton('「咦？」', 1);
        await era.input();
        await maya.say_and_wait('好了，走吧走吧！看人家变成熟的样子♪');
        await city.say_and_wait('我指的不是那个意思……不过算了。');
        await city.say_and_wait([
          '就当作',
          maya.sex,
          '要以自己的方式成为大人吧。',
        ]);
        await yukino.say_and_wait([
          '好、好帅……！我也想赶快变得跟 ',
          call_40,
          ' 一样～',
        ]);
        await era.printAndWait([
          '为了维持最佳状态而不断训练的 ',
          maya.get_colored_name(),
          '，增加了不少体力。',
        ]);
      } else {
        await maya.say_and_wait('对吧对吧～♪保持迅速啊～！');
        await maya.say_and_wait('速度的话……对了！');
        await maya.say_and_wait('老师之前好像有提到，说『折返跑很有用』～！');
        era.printButton('「是没错啦……」', 1);
        await era.input();
        await maya.say_and_wait([
          '那就决定了♪既然 ',
          callname,
          ' 也认证了，那一定不会错！',
        ]);
        await maya.say_and_wait('起飞前往操场☆我要跑得比任何人都快♪');
        await yukino.say_and_wait([
          y_call_c,
          '……那个，因为我也想成为『城市',
          maya.child_sex_title,
          '』……！',
        ]);
        await city.say_and_wait('嗯，不用在意我没关系……好好加油吧。');
        await yukino.say_and_wait('是的！好，我要加油～！');
        await era.printAndWait([
          '为了提升速度进行的折返跑，似乎对 ',
          maya.get_colored_name(),
          ' 来说成为了很好的训练。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_reading: (() => {
    const title = '念书就交给摩耶重炮☆';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '已经到了开会的时间，',
        maya.get_colored_name(),
        ' 却还没有来……',
      ]);
      await maya.say_and_wait('哈喽哈喽～！让你久等了吗～！？');
      era.printButton('「没有，我才刚到」', 1);
      await era.input();
      await maya.say_and_wait('哇哇☆刚才那样好像在约会！？呀～～～！');
      await maya.say_and_wait([
        '我要说的不是这个！',
        callname,
        '，对不起！我被班上同学拖住了～',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'A',
        '唉，明天开始考试吗～',
      );
      await you.say_as_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'B',
        '真是忧郁～干脆请假算了？',
      );
      await maya.say_and_wait('我懂我懂！人家也很讨厌考试～！！');
      await maya.say_and_wait(
        '明明一下就写完了，却不能睡觉也不能玩！真是的，这不就只能画画了吗～！！',
      );
      await you.say_as_passer_by_and_wait('赛' + maya.uma_sex_title + 'A', [
        maya.get_colored_name(),
        '，我说你啊～！',
      ]);
      await you.say_as_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'B',
        '真羡慕～下次的考试你也全都『懂』吧？',
      );
      await maya.say_and_wait('算是吧～');
      await you.say_as_passer_by_and_wait('赛' + maya.uma_sex_title + 'A', [
        '对了，',
        maya.get_colored_name(),
        '！告诉我们可能会考哪些啦！',
      ]);
      await you.say_as_passer_by_and_wait(
        '赛' + maya.uma_sex_title + 'B',
        '拜托你了～！就当作是帮助朋友！好吗？',
      );
      await maya.say_and_wait('收到☆全都包在我这摩耶重炮大人身上吧♪');
      era.drawLine();
      await maya.say_and_wait([
        '大概就是这样，我教',
        maya.couple_title,
        '我会的部分！',
        maya.couple_title,
        '都很开心！',
      ]);
      await maya.say_and_wait([
        maya.couple_title,
        '还说『下次也麻烦你了』！嘿嘿，受欢迎的',
        maya.phy_sex_title,
        '还真辛苦啊～♪',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' 好像很开心，不过身为',
        maya.sex,
        '的训练员，',
        you.get_colored_name(),
        ' 有点担心这会不会造成',
        maya.sex,
        '的负担……',
      ]);
      era.printButton('「你也要求一些回礼如何？」（力量&根性+10）', 1);
      era.printButton('「不愿意的时候要拒绝哦」（智力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '不只是单纯教别人，要是还能获得回礼，应该能减轻',
          maya.sex,
          '的负担，所以 ',
          you.get_colored_name(),
          ' 如此提案──',
        ]);
        await maya.say_and_wait('啊！！人家完全忘记了！');
        await maya.say_and_wait('回礼吗～♪要求什么好呢～？');
        await maya.say_and_wait([
          '……对了！请',
          maya.couple_title,
          '陪我玩好了！',
        ]);
        await maya.say_and_wait('考试期间大家都要念书，都没有人要陪我玩～');
        era.printButton(
          '「多亏你教' + maya.sex + '们，' + maya.sex + '们有空了呢」',
          1,
        );
        await era.input();
        await maya.say_and_wait([
          '没错没错！我明天去问',
          maya.couple_title,
          '♪',
        ]);
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          '赛' + maya.uma_sex_title + 'A',
          '给你的回礼？',
        );
        await maya.say_and_wait('对！希望你们能陪人家一起玩♪');
        await maya.say_and_wait('最近大家随口不离考试，都不陪我～');
        await you.say_as_passer_by_and_wait('赛' + maya.uma_sex_title + 'B', [
          ' 你说的是『',
          maya.get_colored_name(),
          ' 新兵训练营』……也就是大家一起尽全力去玩到没力对吧。',
        ]);
        await you.say_as_passer_by_and_wait(
          '赛' + maya.uma_sex_title + 'A',
          '不错啊。我正想要放松一下！',
        );
        await you.say_as_passer_by_and_wait('赛' + maya.uma_sex_title + 'B', [
          '我也是！尽管来吧，',
          maya.get_colored_name(),
          ' 新兵训练营♪',
        ]);
        await maya.say_and_wait('太棒了～～～～～！尽情地玩吧！！');
        await era.printAndWait([
          '几天后，玩到门禁前一刻的 ',
          maya.get_colored_name(),
          '，带着精神饱满的神情回来了，',
        ]);
      } else {
        await maya.say_and_wait(['真是的！', callname, ' 真爱担心～♪']);
        await maya.say_and_wait('人家很高兴能被依赖，大家搞懂问题也都很开心！');
        await maya.say_and_wait('对不对？全是一堆好事哦♪');
        era.printButton('「那我希望你也能让我开心」', 1);
        await era.input();
        await maya.say_and_wait('没问题，没问题！有什么要求尽管说♪');
        await era.printAndWait([
          '因为获得了承诺，',
          you.get_colored_name(),
          ' 帮 ',
          maya.get_colored_name(),
          ' 安排了密集的训练。',
        ]);
        await maya.say_and_wait('哇～！这样人家根本就不开心──────！');
        era.drawLine();
        await maya.say_and_wait(['呜呜～！', callname, ' 坏心眼……']);
        await you.say_as_passer_by_and_wait('赛' + maya.uma_sex_title + 'A', [
          '啊哈哈，辛苦了，',
          maya.get_colored_name(),
          '！',
        ]);
        await you.say_as_passer_by_and_wait('赛' + maya.uma_sex_title + 'B', [
          '那个训练员还真有一手～！很懂要怎么跟 ',
          maya.get_colored_name(),
          ' 相处。',
        ]);
        await maya.say_and_wait(['对吧对吧！', callname, ' 可是很厉害的♪']);
        await you.say_as_passer_by_and_wait(
          '赛' + maya.uma_sex_title + 'A',
          '……你到底是在闹别扭，还是很开心？',
        );
        await maya.say_and_wait('因、因为少女心是很复杂的～！');
        await era.printAndWait([
          '有了惨痛的教训后，',
          maya.get_colored_name(),
          ' 好像稍微变成更聪明的',
          maya.phy_sex_title,
          '了。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_takeoff: (() => {
    const title = '摩耶重炮 · 起飞🌟';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        ' 的决胜服终于送来了。',
      ]);
      await era.printAndWait([
        '因为',
        maya.sex,
        '跟 ',
        you.get_colored_name(),
        ' 说「设计要等收到后才揭晓！」，所以这是 ',
        you.get_colored_name(),
        ' 第一次看到。',
      ]);
      await maya.say_and_wait('锵锵──☆');
      await maya.say_and_wait(['你看你看，', callname, '！超漂亮的吧～♪']);
      era.printButton('「我还以为会更飘逸……」', 1);
      await era.input();
      await maya.say_and_wait('嗯，关于这点人家也烦恼了很久～');
      await maya.say_and_wait(
        '不过我想说这样也很性感，很适合我！你觉得怎么样？',
      );
      era.printButton('「我觉得很帅气，很不错」', 1);
      await era.input();
      await maya.say_and_wait('太棒了～！！');
      await maya.say_and_wait('人家的爸爸和妈妈也有称赞服装的设计稿～♪');
      await maya.say_and_wait('他们说『就像爸爸年轻时一样，很帅气』！');
      era.printButton('「我记得你爸爸的工作是……」', 1);
      await era.input();
      await maya.say_and_wait('嗯！他是翱翔在天空的机师哦☆');
      await maya.say_and_wait('人家以前曾经坐过爸爸驾驶的小型喷射机～♪');
      await maya.say_and_wait('天空非常辽阔，我们住的城镇又远又小！');
      await maya.say_and_wait(
        '人家很喜欢在辽阔的风景中『咻──！』地飞来飞去的感觉～♪',
      );
      await maya.say_and_wait(
        '飞在天上就像在赛场上奔驰一样！令人感到既兴奋又刺激♪',
      );
      await maya.say_and_wait('所以我的决胜服才会设计成这样☆');
      await maya.say_and_wait(
        '这样在赛道上奔驰时，感觉就像在自由快乐的天空中飞翔一样～！',
      );
      era.println();
      era.printButton('「要朝向许多比赛起飞哦！」（速度+20）', 1);
      era.printButton('「我终于知道你的原点了」（耐力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('嗯嗯！我会的～！');
        await maya.say_and_wait('人家的飞行会让所有观众看见美丽风景的♪');
        await maya.say_and_wait([callname, ' 也注意不要迟到，而没有搭上哦！']);
        era.printButton('「我很期待呢」', 1);
        await era.input();
        await maya.say_and_wait(['谢谢，', callname, '！']);
        await maya.say_and_wait('我之后会变得更快，要一直看着人家哦♪');
        await maya.say_and_wait('有收到吗？');
        era.printButton('「收到！」', 1);
        await era.input();
        await maya.say_and_wait('嘿嘿～♪这是我们两人的约定！');
        await maya.say_and_wait('OKSmile☆LuckyPeace！摩耶重炮要上咯────♪');
        await era.printAndWait([
          '穿上决胜服之后，',
          maya.get_colored_name(),
          ' 对胜利的渴望好像提升了。',
        ]);
      } else {
        await maya.say_and_wait('真的吗，真的吗？');
        await maya.say_and_wait([callname, ' 越来越了解人家了呢～♪']);
        await maya.say_and_wait('将来甚至比我的爸爸妈妈还要懂我……呀～☆');
        era.printButton('「这么说来，已经给你爸妈看过衣服了吗？」', 1);
        await era.input();
        await maya.say_and_wait('咦？没有，还没！');
        await maya.say_and_wait([
          '我很久之前就决定要第一个拿给 ',
          callname,
          ' 看了♪',
        ]);
        await maya.say_and_wait('……对了！我传个照片给爸爸妈妈！');
        await maya.say_and_wait([callname, ' 也一起入镜嘛！好吗？']);
        era.printButton('「可以吗？」', 1);
        await era.input();
        await maya.say_and_wait('那当然是完全没有问题！');
        await maya.say_and_wait([
          '爸爸妈妈他们也说很想看看 ',
          callname,
          '～！',
        ]);
        await maya.say_and_wait('来，再靠近一点～！预备……起飞☆');
        await maya.say_and_wait('嘿嘿，拍得很好♪传送！');
        await maya.say_and_wait('啊！爸爸他们传信息来了！嗯嗯……');
        await maya.say_and_wait('啊哈哈♪他们说你看起来人很好！');
        await maya.say_and_wait([
          '他们还说『',
          maya.get_colored_name(),
          ' 就麻烦你照顾了』！这下就是父母公认的 ',
          callname,
          ' 了呢☆',
        ]);
        await era.printAndWait([
          '虽然有些难为情，不过 ',
          you.get_colored_name(),
          ' 再次下定决心，之后也要继续成为',
          maya.sex,
          '的助力。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
