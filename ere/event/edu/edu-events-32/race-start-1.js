const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    tachyon,
    me,
    callname,
    _,
    relation,
    love,
  ) => {
    if (era.get('cflag:32:育成回合计时') !== 23) {
      return true;
    }
    await print_event_name('课题可行性分析', tachyon);
    await era.printAndWait([
      '如果说',
      tachyon.uma_sex_title,
      '与训练员的初遇，是两人的齿轮开始转动的瞬间',
    ]);
    await era.printAndWait('那么这一天，就是这齿轮运转的声音，震撼世界的瞬间');
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 向那几名听 ',
      tachyon.get_colored_name(),
      ' 的论点听的如痴如醉的孩子道别后，拉着 ',
      tachyon.get_colored_name(),
      ' 走下地下道',
    ]);
    if (me.sex_code === 1) {
      era.println();
      await tachyon.say_and_wait(['男人如此急躁可是会被讨厌的啊，', callname]);
    }
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '依旧不慌不忙的跟在 ',
      me.get_colored_name(),
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
      tachyon.sex,
      '们心底生根发芽',
    ]);
    await tachyon.say_and_wait(
      '未来碰到问题时，自然会来寻找『亲切的速子前辈』来解答了，',
    );
    await tachyon.say_and_wait([
      '而仁慈的我，当然会无偿帮助',
      tachyon.sex,
      '们',
    ]);
    await tachyon.say_and_wait(
      '不过，作为答谢让我纪录点实验数据也是应当的吧？',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 不由得冒出冷汗，虽说大概能猜到是为了形象之类的东西，却没想到竟然算计到如此后头了',
    ]);
    if (love >= 50) {
      await tachyon.say_and_wait('哦呀哦呀，不会是某人嫉妒了吧？');
      era.println();
      await era.printAndWait([
        '似乎误会了什么，',
        tachyon.get_colored_name(),
        ' 忽然贴近了 ',
        me.get_colored_name(),
        ' 的身体',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '忽然从背后抱住了 ',
        me.get_colored_name(),
        ' 的身子，纤纤素手却不干净的在 ',
        me.get_colored_name(),
        ' 身上胡乱抚摸着，最后停留在文件下的位置',
      ]);
      if (tachyon.sex_code - 1 && me.sex_code === 1) {
        await era.printAndWait([
          tachyon.sex,
          '隔着裤子，缓缓勾勒出凸起的形状，随着 ',
          me.get_colored_name(),
          ' 身体部位的苏醒，',
          tachyon.sex,
          '的动作也从原来的轻轻描绘转为了抓握撸动',
        ]);
        era.println();
        await tachyon.say_and_wait('放心吧，比起女性，我还是喜欢被填满的感觉');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '靠在 ',
          me.get_colored_name(),
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
        me.get_colored_name(),
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
      me.get_colored_name(),
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

  handlers[race_enum.hope_sta] = async (tachyon, me, callname) => {
    await print_event_name('课题研究推进', tachyon);
    await era.printAndWait('终于到了这天');
    await era.printAndWait([
      race_infos[race_enum.hope_sta].get_colored_name(),
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
      me.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
      '……',
    ]);
    era.println();
    await me.say_and_wait('咦？');
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 目送着依然故我的',
      tachyon.sex,
      '步上赛场',
    ]);
  };

  handlers[race_enum.hoch_sho] = async (tachyon, me, callname) => {
    await print_event_name('实验对照组', tachyon);
    await tachyon.say_and_wait(
      '虽然已经有所准备了，但……果然没什么特别值得一提的实验对照组啊',
    );
    era.println();
    await era.printAndWait(['但是，这场比赛是皋月赏的前哨战']);
    await era.printAndWait([
      '以皋月赏为目标的话，无论强弱这场比赛的结果都是不能错过的',
    ]);
    era.println();
    const t_call_c = sys_get_colored_callname(32, 25);
    if (sys_reg_race(25).curr.race === race_enum.hoch_sho) {
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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

  handlers[race_enum.sats_sho] = async (tachyon, me, callname) => {
    await print_event_name('单项实验与结果分析', tachyon);
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
      me.get_colored_name(),
      ' 拼死的阻拦下才使',
      tachyon.sex,
      '放弃了这个念头',
    ]);
    await era.printAndWait([
      '与赛前兴奋的 ',
      tachyon.get_colored_name(),
      ' 做为对比的，是赛前莫名感到不安的 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 抛开疑惑和不安，目送着 ',
      tachyon.get_colored_name(),
      ' 登上赛场',
    ]);
  };

  handlers[race_enum.toky_yus] = async (tachyon, me, callname) => {
    await print_event_name('实验结果不支持', tachyon);
    await tachyon.say_and_wait([
      '哦呀哦呀，不愧是日本德比……',
      sys_get_colored_callname(32, 94),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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

  handlers[race_enum.kiku_sho] = async (tachyon, me, callname, _, relation) => {
    if (relation <= 225) {
      await print_event_name('不同的可能性', tachyon);
      await era.printAndWait([
        '那天晚上，',
        me.get_colored_name(),
        ' 做了一个梦',
      ]);
      await era.printAndWait([
        '被人称为超光速粒子的',
        tachyon.sex,
        '，在赛场上折翼的梦',
      ]);
      await era.printAndWait([
        '那玻璃的双腿破碎，四散的琉璃碎片刺入了 ',
        me.get_colored_name(),
        ' 的双眼',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 从梦中惊醒，久久无法恢复平静',
      ]);
      await era.printAndWait([
        '梦境实在太过真实，让 ',
        me.get_colored_name(),
        ' 不由得心有余悸',
      ]);
      await era.printAndWait([
        '剩下的夜晚 ',
        me.get_colored_name(),
        ' 依然辗转无法入眠，直至天亮',
      ]);
      era.drawLine();
      await era.printAndWait([
        '天才蒙蒙亮，',
        me.get_colored_name(),
        ' 便匆忙离开了训练员宿舍',
      ]);
      await era.printAndWait([
        '虽说赛前已经无数次确认过',
        tachyon.sex,
        '的身体状况',
      ]);
      await era.printAndWait(
        '虽说怎么想也不可能像梦中那样夸张的碎裂。还是担心，还是害怕',
      );
      await era.printAndWait([
        '还是必须亲眼看见',
        tachyon.sex,
        '，才能确定梦中的一切并非真实',
      ]);
      era.println();
      await tachyon.say_and_wait(['哦呀，', callname, '？今天来的真早']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 冲进实验室时，看见的是一大清早便悠哉喝着红茶的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        '不过今天毕竟是三冠的最后一场了……紧张也是正常的吧',
      );
      await era.printAndWait([
        '菊花赏，最强的',
        tachyon.uma_sex_title,
        '才能赢下的比赛',
      ]);
      await era.printAndWait([
        '忽然，',
        me.get_colored_name(),
        ' 一时陷入了语塞',
      ]);
      await era.printAndWait('自己做出的选择真的是正确的吗？');
      await era.printAndWait(['万一，', tachyon.sex, '真的像梦中那样碎裂']);
      await era.printAndWait('自己真的有办法坦然面对吗？');
      era.println();
      await tachyon.say_and_wait([callname, '？怎么了吗？']);
      era.println();
      await era.printAndWait('明明是如此冲动的情况下冲入实验室的');
      await era.printAndWait([
        '在看见',
        tachyon.sex,
        '的刹那，却什么也说不出口了',
      ]);
      era.printButton('「……没什么，菊花赏，一定会赢的」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 只能，说出连自我安慰都不足以的话语',
      ]);
      era.println();
      await tachyon.say_and_wait('……嗯，一定能赢');
      era.println();
      await era.printAndWait('无言');
      await era.printAndWait('今日的菊花赏，愿一切安好');
      await era.printAndWait([me.get_colored_name(), ' 向神，向佛，向光祈祷']);
    } else {
      await print_event_name('会赢吗？', tachyon);
      await era.printAndWait([
        '菊花赏，最强的',
        tachyon.uma_sex_title,
        '才能赢下的比赛',
      ]);
      await era.printAndWait('最强，这个词代表着，是全方位');
      await era.printAndWait('速度，耐力，力量，毅力，智慧');
      await era.printAndWait(
        '五种在训练员间最为重视的能力都均衡的达到最强才能赢下的比赛',
      );
      await era.printAndWait([
        '但是……如果是 ',
        tachyon.get_colored_name(),
        ' 的话，没有问题',
      ]);
      era.println();
      await era.printAndWait('天生的强者');
      await era.printAndWait([
        '哪怕无须锻炼，',
        tachyon.sex,
        '也必然能够达到这样的程度吧',
      ]);
      await era.printAndWait([
        '这就是 ',
        tachyon.get_colored_name(),
        '，绝对的强悍',
      ]);
      await era.printAndWait([
        '……不如说，自己真的对',
        tachyon.sex,
        '有帮助吗？',
      ]);
      if (
        new Array(5).fill(0).some((_, i) => era.get(`base:32:${5 + i}`) < 1200)
      ) {
        await era.printAndWait([
          '说到底，现在的',
          tachyon.sex,
          '距离当初',
          tachyon.sex,
          '的极限，不是还有很长一段距离吗？',
        ]);
      } else {
        await era.printAndWait([
          '说到底，现在的',
          tachyon.sex,
          '不就只是恢复到以前该有的水平而已不是吗？',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([callname, '？比赛前你又在发什么呆？']);
      era.println();
      await era.printAndWait([
        '打断沉浸于自我厌恶中的 ',
        me.get_colored_name(),
        ' 的，是正在钉蹄铁的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '听见 ',
        me.get_colored_name(),
        ' 的话后，不出 ',
        me.get_colored_name(),
        ' 所料的，',
        tachyon.get_colored_name(),
        ' 对此嗤之以鼻',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '无聊，我的双腿现在是建立在我的研究与你的训练之下的',
      );
      era.println();
      await tachyon.say_and_wait(
        '要是没有你的努力，现在的我说不定已经无法奔跑了，你的意思是希望变成那样吗？',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 连忙道歉说自己不是那个意思',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '晚了，明天的药量加倍，既然你感受不出这中间努力的重量，那么就让你多体会一点吧',
      );
      era.println();
      await era.printAndWait(
        '不，都已经一天三顿像饭一样吃了，这还能再增加的吗',
      );
      await era.printAndWait([me.get_colored_name(), ' 在心里忍不住吐槽道']);
      era.println();
      await era.printAndWait(['就在你们毫无压力的谈天时，比赛时间也快到了']);
      await era.printAndWait(['你们漫步走向赛场']);
      era.printButton('「今天的比赛，能赢吧？」', 1);
      await era.input();
      await tachyon.say_and_wait('这个吗……究竟能不能呢～～');
      await tachyon.say_and_wait('不，就算你说什么认真问的我也真不好回答啊……');
      if (sys_reg_race(25).curr.race === race_enum.kiku_sho) {
        const t_call_c = sys_get_colored_callname(32, 25);
        await tachyon.say_and_wait([
          '毕竟 ',
          t_call_c,
          ' 和其他',
          tachyon.uma_sex_title,
          '可完全不是一个等级的啊',
        ]);
        await tachyon.say_and_wait([
          '再怎么说',
          tachyon.sex,
          '可是被我选中同样能够踏足极限以后的世界的人……',
        ]);
        await tachyon.say_and_wait([
          '以及这个距离的 ',
          t_call_c,
          '……说不定，称之为历史最强都不为过',
        ]);
      }
      era.printButton('「那么，会输吗？」', 1);
      await era.input();
      await tachyon.say_and_wait('会赢哦');
      era.println();
      await tachyon.say_and_wait('『我们』一定能赢');
      era.println();
      await era.printAndWait('不再是目送');
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 一同走向赛场',
      ]);
    }
  };
};
