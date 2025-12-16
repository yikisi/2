const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.negi_sta] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name('接下来是？', urara);
    if (extra_flag.rank === 1) {
      await in_urara.say_as_unknown_and_wait('意料之中的胜利，恭喜？');
      await in_urara.say_as_unknown_and_wait(
        '虽然不小心输了也不会责怪您，但是下次还请更认真一点啊。',
      );
      era.drawLine();
      await era.printAndWait([
        '刚一来到前排的边缘，从赛场内冲过来的樱粉色小动物便立刻蹦蹦跳跳地与 ',
        me.get_colored_name(),
        ' 掌心相击。',
      ]);
      await era.printAndWait(
        '隔着围栏低头看去，在那里等待的依旧是那张连汗水都来不及擦的明媚笑脸。',
      );
      await urara.say_and_wait([callname, '！第一名，是第一名哦──！']);
      await urara.say_and_wait(
        '嘿嘿～因为是擅长的短距离吗？感觉一下子就跑完了！',
      );
      await urara.say_and_wait(
        '但是跑在最前面的感觉就和以前一样，最前面的景色非常好看哦～',
      );

      era.printButton('「嗯，这次做的还不错，有什么感想吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '感想有很多呢，但最后我还是觉得还是用力向前冲最适合乌拉拉！',
      );
      await urara.say_and_wait(
        '不过抛开今天的比赛本身的话……我觉得自己可以参加更高级的比赛！',
      );
      await era.printAndWait([
        '说的也是啊，以 ',
        urara.get_colored_name(),
        ' 的现状，时至今日',
        urara.sex,
        '对战术的执行力依旧相当有限。',
      ]);
      await era.printAndWait([
        '不过另一方面说的也没错，现在的',
        urara.sex,
        '确实有资格去挑战更上层的比赛。',
      ]);

      era.printButton(
        `「那样的话，虽然选项也不少，但是……我暂时推荐 ${race_infos[race_enum.febr_sta].name}，怎样？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('二月……啊！课本上好像讲过呢！好像是G1比赛？');
      await urara.say_and_wait([
        '也就是说 ',
        callname,
        ' 建议下次去挑战G1吗？是为了今年的有马纪念做积累对吧？',
      ]);

      era.printButton('「嗯……也差不多，总之做好迎接下次比赛的准备吧！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！');
    } else {
      await in_urara.say_as_unknown_and_wait(
        '没想到真输掉了啊，嗯……我一开始说的什么来着？',
      );
      await in_urara.say_as_unknown_and_wait('唉……下次还请更认真一点吧。');
      era.drawLine();
      await era.printAndWait([
        '平静地来到跑道边缘，',
        me.get_colored_name(),
        ' 远远的看见 ',
        urara.get_colored_name(),
        ' 抹着脸上的汗珠跑了过来。',
      ]);
      await urara.say_and_wait('呼——这次结束的很快呢！但是不小心还是跑输了……');
      await urara.say_and_wait(
        '不过这次我跑得很开心哦！除此之外还有什么要注意的吗？',
      );

      era.printButton(
        '「没关系的，只是有点不在状态，下次记得一定要赢就可以了。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '将毛巾递给笑容有点勉强的 ',
        urara.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 笑着伸手轻轻揉了揉',
        urara.sex,
        '垂下的耳朵。',
      ]);
      await era.printAndWait([
        '无论面对什么比赛都能保持平常的自己的确是 ',
        urara.get_colored_name(),
        ' 强有力的一面，但现在显然更需要调整状态。',
      ]);
      await era.printAndWait([
        '接下来得试着参加所有人都全力以赴的比赛了，或许可以让 ',
        urara.get_colored_name(),
        ' 更快的找到新一年的节奏。',
      ]);
      await era.printAndWait([
        '而为了备战 ',
        urara.get_colored_name(),
        ' 所选择的目标，也是时候继续挑战更高级的比赛了。',
      ]);

      era.printButton(
        `「乌拉拉，下次要挑战更高等级的比赛看看吗？顺便一提我推荐 ${race_infos[race_enum.febr_sta].name} 哦？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('二月……啊！课本上好像讲过呢！好像是G1比赛？');
      await urara.say_and_wait('不过我这次跑输了诶，这样应该没问题吧……');

      era.printButton(
        '「没关系，参加比赛的资格还是有的，只要调整好状态就没什么问题。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '这样说着，',
        me.get_colored_name(),
        ' 继续安抚着失落的小',
        urara.get_uma_sex_title(),
        '，直到',
        urara.sex,
        '稍微重新挂起平常的笑容为止。',
      ]);
    }
    const race_history = RaceHistory.get(52);
    const g1_reward = Math.min(
      ...race_history
        .get_values()
        .filter((e) => race_infos[e.race].race_class === class_enum.G1)
        .map((e) => e.rank),
    );
    if (g1_reward === Infinity) {
      await era.printAndWait([
        extra_flag.rank === 1 ? '其实' : '不过',
        '不只是为了最后的比赛做准备，更重要的是 ',
        urara.get_colored_name(),
        ' 早晚有一天要迈过G1这个坎。',
      ]);
      await era.printAndWait([
        '虽然进入资深年后，',
        urara.get_colored_name(),
        ' 的时间已经没那么充裕了，但这依旧是',
        urara.sex,
        '必须要经历一次的测验。',
      ]);
      await era.printAndWait([
        '至少……别让',
        urara.sex,
        '在还能奔跑的时间里留下遗憾吧。',
      ]);
    } else if (g1_reward === 1) {
      if (extra_flag.rank === 1) {
        await era.printAndWait([
          '正如 ',
          urara.get_colored_name(),
          ' 自己所言，如今的',
          urara.sex,
          '已经成长为了拥有拿下G1的实绩的强大',
          urara.get_uma_sex_title(),
          '。',
        ]);
        await era.printAndWait([
          '真是难以想象，最初那个迷迷糊糊到连训练都为难的小',
          urara.get_uma_sex_title(),
          '竟然能成长为了常胜',
          urara.get_uma_sex_title(),
          '。',
        ]);
        await era.printAndWait([
          '难道其实是大家都猜错了，而 ',
          urara.get_colored_name(),
          ' 是个难以察觉的天才？',
        ]);
      } else {
        await era.printAndWait([
          '当然 ',
          me.get_colored_name(),
          ' 所说的话也并非完全是安抚，现在的 ',
          urara.get_colored_name(),
          ' 确实有着能挑战并赢下G1的实力。',
        ]);
        await era.printAndWait([
          '和最初时已经完全不同，仅是一次的失利已经无法再让',
          urara.sex,
          '因「失败」而被提起。',
        ]);
        await era.printAndWait([
          '或许 ',
          urara.get_colored_name(),
          '，在某些方面真的是个天才也说不定。',
        ]);
      }
    } else {
      await era.printAndWait([
        extra_flag.rank === 1 ? '其实' : '不过',
        '不只是为了最后的比赛做准备，更重要的是 ',
        urara.get_colored_name(),
        ' 早晚有一天要迈过G1这个坎。',
      ]);
      await era.printAndWait([
        '虽然进入资深年后，',
        urara.get_colored_name(),
        ' 的时间已经没那么充裕了，但这依旧是',
        urara.sex,
        '必须要经历一次的测验。',
      ]);
      await era.printAndWait([
        '至少，别让',
        urara.sex,
        '在还能奔跑的时间里留下遗憾吧。',
      ]);
    }
    const arim_kin_check = race_history.get_result(47 + 48);
    if (arim_kin_check?.race === race_enum.arim_kin) {
      if (arim_kin_check?.rank === 1) {
        if (extra_flag.rank === 1) {
          await era.printAndWait([
            '不过「为 ',
            race_infos[race_enum.arim_kin].get_colored_name(),
            ' 做准备」……虽然本意并非如此，但既然已经赢过一次，那确实很有必要。',
          ]);
          await era.printAndWait([
            '重要比赛只要赢过一次就会被同台竞争者盯上，而「',
            urara.get_colored_actual_name(),
            ' 能赢有马」更是一种恐怖的化学反应。',
          ]);
          await era.printAndWait(
            '这次的有马会变成什么样实在是很难想象，所以也只能在那之前尽力而为了。',
          );
        } else {
          await era.printAndWait([
            '所以说啊，虽然平时 ',
            urara.get_colored_name(),
            ' 确实发挥不稳定，但',
            urara.sex,
            '这次到底是怎么输的来着？',
          ]);
          await era.printAndWait([
            '一想到这点，',
            me.get_colored_name(),
            ' 再次扶住了额头，时间也仿佛回到了新秀年第一次训练时那个令人头晕的下午。',
          ]);
          await era.printAndWait('总之，下次应该不会再出这样的事故了对吧？');
        }
      } else {
        await era.printAndWait([
          '至于「为 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          ' 做准备」，就算 ',
          urara.get_colored_name(),
          ' 不强调，作为训练员 ',
          me.get_colored_name(),
          ' 也一定会记住。',
        ]);
        await era.printAndWait([
          '不过现在的小',
          urara.get_uma_sex_title(),
          '比起开心的去跑，今年的取胜欲望估计会更加强烈。',
        ]);
        await era.printAndWait(
          extra_flag.rank === 1
            ? '但是赢下有马果然还是……总之作为训练员也只能尽力而为了。'
            : [
                '但是赢下有马果然还是……总之将先调整好 ',
                urara.get_colored_name(),
                ' 的状态作为首要目标吧。',
              ],
        );
      }
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '就这样，训练员',
      me.get_adult_sex_title(),
      '（您）与 ',
      urara.get_colored_name(),
      ' 决定好了下次的参赛目标。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      extra_flag.rank === 1
        ? ['只是', urara.sex, '究竟能挑战到什么程度，或许也只有三女神知晓了。']
        : [
            '只是',
            urara.sex,
            '究竟能挑战到什么程度……也只能请您再鞭策',
            urara.sex,
            '一下了。',
          ],
    );
    await in_urara.say_as_unknown_and_wait(
      '下次再见的时候，恐怕就没这么容易了……',
    );
    extra_flag.pt_change = 37;
    if (extra_flag.rank === 1) {
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.relation_change = 50;
    } else {
      extra_flag.attr_change = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 4).forEach(
        (e) => (extra_flag.attr_change[e] = 2),
      );
      extra_flag.relation_change = 10;
    }
  };

  handlers[race_enum.febr_sta] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name('不甘心吗？', urara);
    extra_flag.pt_change = 45;
    if (extra_flag.rank === 1) {
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.relation_change = 50;
      await era.printAndWait([
        '在比赛结束后，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 正走在一同前往选手休息室的通道内。',
      ]);
      await era.printAndWait([
        '而似乎还沉浸在比赛的气氛当中，即使刚刚就在现场，',
        urara.get_colored_name(),
        ' 依旧不断地 ',
        me.get_colored_name(),
        ' 聊着奔跑时的经过。',
      ]);
      await urara.say_and_wait(
        '嘿嘿～而且大家都很为我开心呢！还能得到第一名真是太好了！',
      );
      await urara.say_and_wait([
        '只要我继续奔跑，大家就会继续露出笑容吧？',
        callname,
        '，下次要参加什么比赛呢？',
      ]);
    } else {
      extra_flag.attr_change = new Array(5)
        .fill(1)
        .map((e) => e + (Math.random() > 0.5));
      await era.printAndWait([
        '在比赛结束后，似乎因为不小心丢掉了比赛的胜利，',
        urara.get_colored_name(),
        ' 显得有些失落。',
      ]);
      await era.printAndWait([
        '不过这样的状态并没有持续多久，想到了大家的小',
        urara.get_uma_sex_title(),
        '很快就将耳朵支起来回复了笑容。',
      ]);
      await urara.say_and_wait(
        '就算这样大家还是很开心呢！而且之后还要上台表演，所以现在也不是沮丧的时候!',
      );
      await urara.say_and_wait([
        '啊对了！',
        callname,
        '，下次要参加什么比赛呢？',
      ]);
    }
    era.printButton('「说到这个啊……乌拉拉下一场有想跑的比赛吗？」', 1);
    await era.input();

    await urara.say_and_wait(
      '嗯？虽然能赢下来更好，但只要能跑步的话，其实什么都可以哦——',
    );
    await era.printAndWait([
      '还是预料之中的回答，虽然 ',
      me.get_colored_name(),
      ' 觉得是时候让 ',
      urara.get_colored_name(),
      ' 自己选比赛了，但果然按',
      urara.sex,
      '的性子恐怕也选不出个所以然。',
    ]);
    await era.printAndWait([
      '而且决定赛程时若考虑到最终目标为「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」的话，对 ',
      urara.get_colored_name(),
      ' 来说能选择也实在有限。',
    ]);

    era.printButton(
      `「这样的话……下次参加『${race_infos[race_enum.elm_sta].name}』怎么样？」`,
      1,
    );
    await era.input();

    await era.printAndWait(
      '虽然这场比赛可能不是最佳选择，但权衡利弊之后也只能先预定这场了。',
    );
    await urara.say_and_wait([
      '好，我知道了！我会去跟商店街和应援会的大家说下一场是 ',
      race_infos[race_enum.elm_sta].get_colored_name(),
      '——',
    ]);

    era.printButton(
      `「顺便一提如果真要跑这场的话，大家赶来的难度比较高，因为 ${race_infos[race_enum.elm_sta].name} 在北海道。」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '诶？是吗！？那也太远了！不过好像也没关系，因为大家从哪里都看得到乌拉拉吧！',
    );
    await urara.say_and_wait(
      '只要大家还想着乌拉拉就完全不要紧，所以到时候也只要想办法赢下来就好了！',
    );

    era.printButton(
      '「不过在那之前，晚些时候还要进行Live，大家还等着看乌拉拉帅气的一面哦？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '我明白了！那么乌拉拉去准备演唱会了！',
      callname,
      ' 有什么事就先去忙吧!',
    ]);

    era.printButton(
      '「哦！那我就先去舞台的后台了，有什么事一定要记得及时联系啊！」',
      1,
    );
    await era.input();

    await urara.say_and_wait('好——');
    era.drawLine();
    await urara.print_and_wait([
      '与 ',
      callname,
      ' 告别并目送着',
      me.sex,
      '离开自己的视线后，我转身走进了休息室。',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.print_and_wait([
        callname,
        ' 三步一回头的样子总觉得有点可爱，就好像 ',
        callname,
        ' 是小孩子，乌拉拉才是妈妈一样。',
      ]);
      await urara.print_and_wait([
        '要是每天都能被 ',
        callname,
        ' 那样一直看着就好了，但是那样是不是太任性了？',
      ]);
    } else {
      await urara.print_and_wait([
        callname,
        ' 还是老样子转身就走了，如果能再回头看看乌拉拉就好了呢……',
      ]);
      await urara.print_and_wait([
        '不过，乌拉拉为什么会在意这个呢？',
        callname,
        ' 好像也没有空闲一直看着乌拉拉吧？',
      ]);
    }
    await urara.print_and_wait([
      '果然还是很难懂啊……嗯？那边的角落里好像有谁蜷缩着，而且脸色好差……啊！是',
      urara.sex,
      '……',
    ]);
    await urara.print_and_wait([
      '是因为没能赢下G1所以受了打击吗？乌拉拉还是第一次见到要强的',
      urara.sex,
      '这么脆弱的样子……',
    ]);
    await urara.print_and_wait([
      '但是变成这样的话就更不能放着不管了，虽然我没办法像 ',
      callname,
      ' 一样……总之先上去问问吧！',
    ]);
    await urara.say_and_wait('那个，你还好吗？是那里不舒服吗？');
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「……啊，乌拉拉……嗯，不用担心，我没事的……」',
    ]);
    await urara.say_and_wait(
      '但是你的表情看起来好难受！等一下就要开演唱会了，没关系的吧？',
    );
    await urara.say_and_wait(
      '不要勉强自己哦？我会陪着你的，所以直到恢复笑容前——',
    );
    await era.printAndWait([urara.get_uma_sex_title(), 'A「现在别碰我！」']);
    await urara.say_and_wait('……咦？好疼……！');
    await urara.print_and_wait([
      '伸出的手被用',
      urara.get_uma_sex_title(),
      '的气力拍开了，被甩到的手背上逐渐传来了火辣辣的触感。',
    ]);
    await urara.print_and_wait([
      '而抬起头来时，',
      urara.sex,
      '明明是位总是笑眯眯的',
      urara.get_uma_sex_title(),
      '，但如今展示向我展示出的却是一张彷徨又悲伤的脸。',
    ]);
    await urara.print_and_wait([
      '到底该怎样面对这样的表情呢？可是现在走开的话，只会让人',
      urara.sex,
      '更加伤心而已。',
    ]);
    await urara.print_and_wait([
      '果然还是不能走。咬紧嘴唇，再遮住红肿发痛的右手，我蹲坐在',
      urara.sex,
      '的身旁，等待着',
      urara.sex,
      '的继续倾诉。',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「怎么可能，笑得出来啊……！」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「好不容易能参加G1的，我也想站在舞台的中心啊！但难得有这个机会，我却这么弱……」',
    ]);
    await urara.print_and_wait(
      '如果别人伤心的话，就听别人先讲完真心话，妈妈也一直是这么告诉我的。',
    );
    await urara.print_and_wait([
      '现在的话，',
      urara.sex,
      '应该能轻松些吧？但是这张侧脸，也好像从哪里见过，这到底是怎样的表情来着？',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「对不起……乌拉拉，我不是故意想要这样的……但是，我真的很难笑出来啊……」',
    ]);
    await urara.say_and_wait('不，乌拉拉一点都不觉得疼！你真的没关系吗？');
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「……乌拉拉哪里像不疼的样子啊，明明表情都快哭出来了……」',
    ]);
    await urara.say_and_wait('诶？真的吗……不对！乌拉拉真的没事哦！');
    await urara.print_and_wait([
      '虽然的确很疼没错……可能没那么疼！但是似乎看到我的表情后，',
      urara.sex,
      '颤抖地嘴角也一点点勾了起来。',
    ]);
    await urara.print_and_wait(
      '乌拉拉的目的是达成了没错，但是真的有让人破涕而笑的水平吗？乌拉拉的表情……',
    );
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「不是那个意思哦……不过我没事的，等上台的时候我就可以好好露出笑容了。」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「乌拉拉总是愿意听我说话呢，这次也很感谢你，所以也赶快在上台前调整好表情吧！」',
    ]);
    await urara.say_and_wait('嗯！没关系的！无论几次乌拉拉都可以听你说话哦！');
    await urara.print_and_wait([
      '在说出道谢的话之后主动站起，终于冷静下来的',
      urara.sex,
      '轻轻将我也拉了起来。',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「说的是呢，无论几次都行……下次我绝对……要站上正中间的位置！」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A「一定……还有下次的……！」',
    ]);
    await urara.print_and_wait([
      '在道出「待会再见」后，',
      urara.sex,
      '就像是要遮掩什么般转身离去了。',
    ]);
    await urara.print_and_wait([
      '但是尽管表面上已恢复如常，',
      urara.sex,
      '的背影还是被如同抽空了活力般单薄。',
    ]);
    await urara.print_and_wait([
      urara.sex,
      '的双腿似乎因为蹲得太久而麻木了，一瘸一拐的样子更显得有些「失魂落魄」。',
    ]);
    await urara.print_and_wait([
      '乌拉拉还第一次看到',
      urara.sex,
      '那个样子，不管是刚才过于悲伤的表情，还是现在离开时失落的背影，',
    ]);
    await urara.print_and_wait([
      '不过我也终于想起来，',
      urara.sex,
      '现在的样子，就像是即使已经错过了人生最后的某个机会后，还在强装镇定一样……',
    ]);
    await urara.print_and_wait(
      '总觉得发生了什么不可挽回的事情，是乌拉拉太敏感了吗？',
    );
    await urara.print_and_wait([
      '但是',
      urara.sex,
      '说的没错，等下还要上台演出，剩下的事情，就用结束后剩下的时间来思考吧！',
    ]);
    await urara.print_and_wait([
      '通过拍打脸颊让自己再次提前精神，我也转身追上',
      urara.sex,
      '的背影，一起跑向了Live的后台。',
    ]);
    await urara.print_and_wait([
      '随着有力的踏步声，走在前面的',
      urara.sex,
      '似乎又恢复了神采奕奕的样子。',
    ]);
    await urara.print_and_wait(
      '是乌拉拉看错了吗？一定是我太敏感了吧……嗯，一定是的……',
    );
    era.drawLine();
    await era.printAndWait([
      '今天的Live相当的顺利啊，从舞台后台绕到商店街与应援会的大家所在的观众席中，',
      me.get_colored_name(),
      ' 欣慰的想道。',
    ]);
    await era.printAndWait([
      '就是说嘛，不管跑在第几，站在什么位置，',
      urara.get_colored_name(),
      ' 都可以将自己最棒的笑容展现给大家的。',
    ]);
    await era.printAndWait([
      '所以大家才会这么喜欢 ',
      urara.get_colored_name(),
      '，大家都喜欢就算跑输，就算跑不赢，仍充满活力地笑着的',
      urara.sex,
      '。',
    ]);
    await era.printAndWait([
      '而且可能不是每次都行，但现在的',
      urara.sex,
      '无疑已经拥有了赢得比赛的实力。',
    ]);
    await era.printAndWait([
      '商店街的人A「……乌拉拉',
      urara.sex,
      '，真的很努力呢，之前的担心看来也可以放下了。」',
    ]);
    await era.printAndWait([
      '商店街的人B「是啊，就算心里想着只要',
      urara.sex,
      '开心就好了，',
      urara.sex,
      '以后也只会被这些想法绊住脚步呢。」',
    ]);
    await era.printAndWait([
      '商店街的人C「现在的小乌拉拉已经成长了咯，正好我也想在 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 上也看到',
      urara.sex,
      '的笑脸啊。」',
    ]);
    await era.printAndWait([
      '在后面悄悄地侧过耳去，支持着 ',
      urara.get_colored_name(),
      ' 的各位也在一边看着演唱会一边说着什么。',
    ]);
    await era.printAndWait([
      '不过看起来 ',
      me.get_colored_name(),
      ' 的策略正在逐渐被应验，只要坚持下去，支持着 ',
      urara.get_colored_name(),
      ' 的人总会逐渐认可',
      urara.sex,
      '的前进。',
    ]);
    await era.printAndWait([
      '困难在不经意间迎刃而解啊……总之先将这件事记下来，回去的时候偷偷向 ',
      urara.get_colored_name(),
      ' 报喜好了。',
    ]);
    await era.printAndWait([
      '商店街的人A「不过乌拉拉最后的目标好像是 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '，那个比赛的入选好像还挺严格的。」',
    ]);
    await era.printAndWait(
      '商店街的人C「但是有没有什么我们能帮忙的地方呢？总觉得干看着小乌拉拉心里会不安啊。」',
    );
    await era.printAndWait(
      '商店街的人D「其实，我倒是有个想法的，就像我们以前为了复兴商店街做的那样……」',
    );
    if (RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin) {
      await era.printAndWait(
        '商店街的人C「所谓人多力量大对吧？不过乌拉拉已经被选入过一次了，还需要那样吗？」',
      );
      await era.printAndWait(
        '商店街的人D「确实可能大家会担心过头，但是也要尽量避免意外呢，毕竟是那孩子啊……」',
      );
    }
    await era.printAndWait(
      '嗯？这又是在说什么？难道大家瞒着自己做了什么其他事情吗？',
    );
    await era.printAndWait([
      '直觉告诉 ',
      me.get_colored_name(),
      ' 这是很重要的事，但当 ',
      me.get_colored_name(),
      ' 想要凑过去听时，抬起头来却发现Live也即将结束了。',
    ]);
    await era.printAndWait([
      '虽然很在意大家所谈论的事情，但为了能够及时查看 ',
      urara.get_colored_name(),
      ' 的状况，',
      me.get_colored_name(),
      ' 还是立刻赶往了休息室。',
    ]);
    await era.printAndWait([
      '不管是舞台上 ',
      urara.get_colored_name(),
      ' 不易察觉的不充分笑容、「',
      urara.sex,
      '」的频繁出现，还是比赛前看到的那个阴沉的',
      urara.get_child_sex_title(),
      '。',
    ]);
    await era.printAndWait(
      '现在就连大家私下的讨论，都给人一种惴惴不安的感觉。怎么回事，最近为什么会如此敏感？',
    );
    await era.printAndWait(
      '总感觉在未来的某天会发生什么，但愿是自己多心了吧……',
    );
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('可以和我随便聊一聊吗？');
    await in_urara.say_as_unknown_and_wait([
      '说起来，训练员',
      me.get_adult_sex_title(),
      '（您）很清楚吧，',
      urara.get_uma_sex_title(),
      '在奔跑中积累下的损伤是难医治。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '因为天生的身体结构与部分的体质原因，也因为很多现在还没法解释的现象。',
    );
    await in_urara.say_as_unknown_and_wait(
      '再加上职业运动者经常需要超越身体负荷，这样引发的伤病在一般情况几乎没法医治的。',
    );
    await in_urara.say_as_unknown_and_wait(
      '怎么突然说起这个话题了？没什么，只是突然在想，乌拉拉一直好像以来都很幸运。',
    );
    await in_urara.say_as_unknown_and_wait([
      '要继续照顾好',
      urara.sex,
      '哦，不要让',
      urara.sex,
      '也成为迷失在路上的一员……',
    ]);
  };
};
