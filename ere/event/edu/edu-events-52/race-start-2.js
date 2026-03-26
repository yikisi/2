const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,HookArg):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.febr_sta] = async (urara, me, in_urara, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.febr_sta].get_colored_name(), '！'],
      urara,
    );
    await in_urara.say_as_unknown_and_wait(
      '有时候，就连我也不得不去怀疑运气啊、命运啊这些东西，或许真的有些门道。',
    );
    await in_urara.say_as_unknown_and_wait([
      '您又是怎么想的？不过带领',
      urara.uma_sex_title,
      '们超越命运，也是作为训练员',
      me.adult_sex_title,
      '（您）的使命吧。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '但是，那些无法超越命运的',
      urara.uma_sex_title,
      '们，又能像',
      urara.sex,
      '的愿望那样一起找到幸福吗？',
    ]);
    era.drawLine();
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 已经忘记是第几次一起站在不同的选手通道内，',
      me.get_colored_name(),
      ' 与',
      urara.sex,
      '已经形成习惯般做着赛前交流。',
    ]);
    await era.printAndWait([
      '不过这一次，或许是被周围的气氛所感染，虽然依旧没多紧张，但小',
      urara.uma_sex_title,
      '却并没有往常的笑脸。',
    ]);
    await urara.say_and_wait([
      callname,
      '，外面果然人很多啊，而且这里的大家的脸色比上次更严肃了。',
    ]);

    era.printButton('「不过乌拉拉也和上次一样，并不觉得有多紧张对吧？」', 1);
    await era.input();

    await urara.say_and_wait('嗯，所以乌拉拉担心的是那一边。');
    await era.printAndWait([
      '顺着担当的视线，',
      me.get_colored_name(),
      ' 发现了一位似乎在训练场上有过几面之缘的',
      urara.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '仿佛是与周围的气氛所隔离，',
      urara.sex,
      '正在通道的边缘一个人做着赛前热身，神态也紧绷得有些可怕。',
    ]);
    await era.printAndWait([
      urara.sex,
      '是 ',
      urara.get_colored_name(),
      ' 的朋友吧，不过为什么会自己站在这里，是自己来参赛的吗？',
      urara.sex,
      '的训练员呢？',
    ]);
    await era.printAndWait([
      '而又从 ',
      me.get_colored_name(),
      ' 的表情读出了疑惑，',
      urara.get_colored_name(),
      ' 立刻向 ',
      me.get_colored_name(),
      ' 解释起了事情的经过。',
    ]);
    await urara.say_and_wait([
      urara.sex,
      '是乌拉拉的朋友哦，我们是因为经常并跑训练认识的，因为我们的距离好像很合得来。',
    ]);
    await urara.say_and_wait([
      '但是和乌拉拉不一样的是，',
      urara.sex,
      '从以前就很厉害，甚至没有训练员也一直跑到现在。',
    ]);
    await era.printAndWait([
      '若是和 ',
      urara.get_colored_name(),
      ' 适应性差不多的话，训练时一起也很正常，只是在赛场上相遇这应该还是第一次。',
    ]);
    await era.printAndWait([
      '不过竟然没有训练员？难道',
      urara.sex,
      '从出道以来，都是自己训练还单独出赛吗？',
    ]);
    await urara.say_and_wait([
      '因为',
      urara.sex,
      '是个很要强的',
      urara.uma_sex_title,
      '，而且一直把G1作为目标，所以这次的比赛',
      urara.sex,
      '一定非常重视。',
    ]);
    await urara.say_and_wait([
      '但为了比赛做准备，',
      urara.sex,
      '已经很久没开心过了，如果这场比赛',
      urara.sex,
      '能赢下来的话，应该可以变得轻松吧……',
    ]);
    await era.printAndWait(
      '原来如此，不过这已经不是眼下能解决的问题了，或许之后可以专门找个机会聊聊，但是现在……',
    );

    era.printButton('「但是现在，乌拉拉不会就这样把一着送给朋友吧。」', 1);
    await era.input();

    await urara.say_and_wait([
      '当然！我明白 ',
      callname,
      ' 的意思，而且乌拉拉已经做出决定了，我会努力的赢下来！',
    ]);
    await urara.say_and_wait([
      '只是',
      urara.sex,
      '现在的样子，乌拉拉还是很担心……',
    ]);

    era.printButton('「我明白了，总之先努力去比赛吧，剩下的之后再去想？」', 1);
    await era.input();

    await urara.say_and_wait([
      '也是啊，只是担心的话什么都解决不了，那 ',
      callname,
      '，我先上了哦！',
    ]);

    era.printButton('「嗯！今天也加油哦！」', 1);
    await era.input();

    await era.printAndWait([
      '在入场提示响起的同时向 ',
      me.get_colored_name(),
      ' 轻轻挥手后，重新挂起笑容的 ',
      urara.get_colored_name(),
      ' 率先一步跃入了赛场。',
    ]);
    await era.printAndWait([
      '但就在那位 ',
      urara.get_colored_name(),
      ' 的好友从后方与 ',
      me.get_colored_name(),
      ' 擦肩而过时，空间却在逐渐褪色中被什么人按下了慢镜头。',
    ]);
    await era.printAndWait([
      '虽然没看到那个身影，但就像恶魔的出现总伴随着低语，那熟悉的语调再次环绕在 ',
      me.get_colored_name(),
      ' 的耳畔。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '不用担心哦？就像乌拉拉的直觉那样，就算乌拉拉可能会输，',
      urara.sex,
      '可能也没有下次了。',
    ]);
    await era.printAndWait([
      '今天「',
      in_urara.sex,
      '」的言语似乎有些刺耳，当然听上去没什么德行的发言，自然是得不到别人好声好气的回应。',
    ]);

    era.printButton(
      '「这又是什么意思？好不容易要出赛了，不管是对谁能不能说点好话？」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '别误会，我说的是字面意思哦？既然您是训练员，那帮我看看这位同学的腿如何？',
    );
    await era.printAndWait([
      '在慢放的时间中，',
      me.get_colored_name(),
      ' 看向那双支撑',
      urara.teen_sex_title,
      '接近希望的腿，但随后就像提前看到了梦想破碎般皱起眉头。',
    ]);
    await era.printAndWait([
      '该怎么形容呢……说得不那么难听的话，',
      urara.sex,
      '作为一名赛',
      urara.uma_sex_title,
      '的「保质期」可能已经快到头了。',
    ]);
    await era.printAndWait([
      '的确，就算没有训练员',
      urara.sex,
      '也能将各方面做得很好，但即使拥有独身出道的勇敢，',
      urara.sex,
      '也未能获得三女神的垂青。',
    ]);
    await era.printAndWait(
      '还是那个逃不开的话题，「平庸的极限」、「资质的尽头」，以及「无法如愿的大多数」。',
    );
    await era.printAndWait([
      '不过现在可不是辩论这些的时候，',
      me.get_colored_name(),
      ' 也不打算再陷入',
      urara.sex,
      '的节奏里。',
    ]);
    await era.printAndWait(
      '况且就算再怎么严峻，这个只有三女神有解的问题本来就不可能由一介训练员来答。',
    );

    era.printButton(
      `「说到底${urara.sex}的状况不是一个外人能主观臆断，而且${urara.sex}可能也不会像看上去那样……」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '随后，',
      me.get_colored_name(),
      ' 试图掌握主权的辩解便被一阵以 ',
      in_urara.get_colored_name(),
      ' 清脆的笑声构成，内容却十分纯粹的嘲笑所打断了。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '我不讨厌您的思辨哦？但您肯定知道所我指的，是将要与',
      urara.sex,
      '同台竞技的小努力家吧？',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '选择取胜的小乌拉拉，做好可能会面对在终点前失去一切的好友的心理准备了吗？',
    );
    await in_urara.say_as_unknown_and_wait([
      urara.sex,
      '能为自己即将坠落的朋友，带来连那个『完美的会长』都无法带给众生的笑容吗？',
    ]);
    await era.printAndWait(
      '总觉得身体里有什么东西被点燃了。可以啊，这么问是吧？这是哪来的小鬼啊——',
    );

    era.printButton(
      '「我拒绝回答你的谜语，现在乌拉拉还要比赛，闹够了的话就请赶紧离开。」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '尽量在愤怒中维持着基本的礼仪，',
      me.get_colored_name(),
      ' 向那个',
      { color: in_urara.color, content: '「无法触碰的乌拉拉」' },
      '下达了逐客令。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '啊，说的也是啊，毕竟乌拉拉甚至还不知道',
      urara.sex,
      '的朋友会变成什么样子。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '还没看到',
      urara.sex,
      '后悔的样子，',
      urara.sex,
      '的训练员',
      me.adult_sex_title,
      '自然也答不上这些嘛，也难怪会生气呢。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '那么下次再见，记得照顾好乌拉拉哦？',
    );

    era.printButton(
      '「说了多少次了会照顾好的！所以再见记得给我好好说话！」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '在逐渐恢复流动的空气中，',
      me.get_colored_name(),
      ' 愤怒地转身对着逐渐从身后淡出的声音猛得挥了一拳。',
    ]);
    await era.printAndWait([
      '当然，',
      me.get_colored_name(),
      ' 身处的选手通道中早已空无一人，自然也什么都不会发生……',
    ]);
  };

  handlers[race_enum.elm_sta] = async (urara, me, in_urara, callname) => {
    if (era.get('cflag:52:育成回合计时') < 96) {
      return true;
    }
    await print_event_name('迎向榆树锦标！', urara);
    await era.printAndWait([
      '隔着人群站在赛场观众席的最后一排，',
      me.get_colored_name(),
      ' 在昏暗的天幕下与另一位樱粉色沉默的站在观众席的最高处。',
    ]);
    await era.printAndWait([
      '眼中的景象依旧像在慢镜头中抖动，但习惯了「',
      urara.sex,
      '」的 ',
      me.get_colored_name(),
      ' 只是平静地等待着接下来的对谈。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '那天晚上，您和',
      urara.sex,
      '聊了什么呢？',
    ]);
    await era.printAndWait([
      '似乎是终于忍受不住没有话题的烦躁感，阴沉的樱粉色向 ',
      me.get_colored_name(),
      ' 问出了意想不到的问题。',
    ]);

    era.printButton(
      `「都三个月了没想到你还不知道，你不是${urara.sex}『最亲密』的朋友吗？」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '话音刚落，仿佛要将人瞪穿的视线立刻刺向了 ',
      me.get_colored_name(),
      '，但最后',
      urara.sex,
      '还是假装着并不在意般将头扭回一边。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '……算了，您不想说也没关系，我也没有一定要知道的必要。',
    );
    await in_urara.say_as_unknown_and_wait([
      '不过这次你竟然没和乌拉拉一起吗？不和以前一样去',
      urara.sex,
      '那边送送',
      urara.sex,
      '吗？',
    ]);

    era.printButton(
      '「因为乌拉拉说想要独自待一会儿，而且这边也另有打算，你要看到最后吗？」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '不用了，您还是觉得我有那个耐心吗？',
    );

    era.printButton('「那还真遗憾。」', 1);
    await era.input();

    await era.printAndWait([
      '随着身旁的声音头也不会的离去，看着恢复色彩的天空，',
      me.get_colored_name(),
      ' 无奈地摇摇头。',
    ]);
    await era.printAndWait([
      '明明天气还不错啊，为什么只要另一个 ',
      in_urara.get_colored_name(),
      ' 在这里，一切都会变得灰蒙蒙的呢？',
    ]);
    await era.printAndWait([
      '不过就算再彬彬有礼，',
      urara.sex,
      '的性格也还是不变的差，所以接下来要做的可能的确没',
      urara.sex,
      '更好。',
    ]);
    await era.printAndWait([
      '确认了比赛选手的入场时间，',
      me.get_colored_name(),
      ' 向站在前排的「各位」发出了信号——',
    ]);

    era.drawLine();
    await urara.print_and_wait('马上就要入场，那现在自己的状态又怎么样的呢？');
    await urara.print_and_wait(
      '身体的状态一直没出过什么问题，乌拉拉也渴望着奔跑，但还是会出现啊，好友伤心的脸……',
    );
    await urara.print_and_wait([
      '犹豫的踏入通道外的光中，形成习惯的转身挥手，却发现 ',
      callname,
      ' 并不在身边。',
    ]);
    await urara.print_and_wait([
      '是呢，是乌拉拉说这次自己也没问题，所以才把 ',
      callname,
      ' 也赶走了，但是却没冷静下来……',
    ]);
    await urara.print_and_wait(
      '而且就连大家也不在，只有自己的比赛总觉得缺了些什么，但是现在也没有思考的时间了。',
    );
    await urara.print_and_wait(
      '但是在走入赛场后，迎着从外面涌入的阳光，乌拉拉却又听到了再熟悉不过的应援声：',
    );
    await urara.print_and_wait([
      '那是每场比赛时都能听到的，来自大家、来自 ',
      callname,
      ' 的声音。',
    ]);
    await era.printAndWait('应援的各位「喂——乌拉拉——！」');
    await urara.print_and_wait(
      '是听错了吗？但是声音好像近在咫尺，这么清晰的声音，应该不是幻觉才对。',
    );
    await urara.print_and_wait(
      '只是，当乌拉拉顺着幻觉产生的方向看去时，原本不报希望的幻想就立刻心想事成为了现实。',
    );
    await urara.print_and_wait(
      '在拉起的应援横幅下，熟悉的大家依旧带着熟悉的微笑，在最近的地方等待着乌拉拉。',
    );
    await era.printAndWait('应援的各位「喂——乌拉拉——这边——！」');
    await urara.say_and_wait(
      '咦？是大家……等等，这里好像是北海道哦！？到底是——',
    );
    await urara.print_and_wait(
      '似乎是透过嘈杂读出了乌拉拉的疑惑，支持着乌拉拉的大家开始各自表达起对乌拉拉的心声。',
    );
    await era.printAndWait(
      '应援的各位「不管是北海道还是哪里，只要能帮到乌拉拉，我们都能跑过来的！」',
    );
    await era.printAndWait(
      '商店街的人「还有——乌拉拉，对不起啊！我们以前只会说，只要看到乌拉拉在奔跑就很高兴了……」',
    );
    await era.printAndWait(
      '商店街的人「但那样根本就是不信任乌拉拉，也算不能算是在为你加油！」',
    );
    await urara.print_and_wait(
      '明明没关系的，乌拉拉只要继续跑下去，就算不这样，大家也一定会……',
    );
    await era.printAndWait(
      '商店街的人「但是现在不一样了……！乌拉拉要赢哦，你一定要赢下来！」',
    );
    await urara.say_and_wait('……！');
    await era.printAndWait(
      '应援的各位「要加油了啊，乌拉拉！你可是背负着我们的梦想哦！」',
    );
    await era.printAndWait(
      '应援的各位「让我们看看乌拉拉为了第一名奔跑的样子吧！」',
    );
    await urara.print_and_wait(
      '现在支援乌拉拉的每个人，都带着自那次事情后很少露出的笑容，也都真正的祝福着选择奔跑乌拉拉。',
    );
    await urara.print_and_wait([
      '而在大家的鼓舞的尽头，则是 ',
      callname,
      ' 在人群中奋力挥手的模样。',
    ]);

    era.printButton('「乌拉拉！笑容！忘记带了哦！」', 1);
    await era.input();

    await urara.print_and_wait(
      '笑容……果然有哪里忘记了啊，原来今天的乌拉拉忘记了笑容吗？',
    );
    await urara.print_and_wait(
      '没错！大家依旧等待着乌拉拉，就算还有什么没能解决，至少为了此刻，乌拉拉还不能停下。',
    );
    await urara.say_and_wait('……嗯！乌拉拉明白了，乌拉拉——会赢给大家看的！');
    await urara.print_and_wait(
      '所以为了回应大家的期待，乌拉拉也向大家的方向发出了呐喊般的感谢。',
    );
    await urara.print_and_wait([
      '乌拉拉找回笑容了吗？虽然乌拉拉看不见自己，但从大家与 ',
      callname,
      ' 欣慰的表情上来说——',
    ]);
    await urara.print_and_wait(
      '现在的乌拉拉，应该是继续背起大家的期望的样子！',
    );
  };

  handlers[race_enum.jbc_spr] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
  ) => {
    if (era.get('cflag:52:育成回合计时') < 96) {
      return true;
    }
    await print_event_name('因为不想输！', urara);
    await urara.print_and_wait(
      '只要走出这条幽长的隧道，应该就是有马纪念前的最后几站了。',
    );
    await urara.print_and_wait([
      '竟然真的用笑容就让 ',
      callname,
      ' 相信了呢，看来乌拉拉已经变成了坏孩子呢。',
    ]);
    await urara.print_and_wait([
      '但是没关系的，等赢下来之后向 ',
      callname,
      ' 道歉，再去好好睡一觉就好了，只要挺过这场比赛就好了。',
    ]);
    await urara.print_and_wait(
      '乌拉拉……乌拉拉不会输给任何人！现在的乌拉拉不想输给任何人，现在的乌拉拉不能输给任何人！',
    );
    await urara.print_and_wait(
      '不能输……不能输……不能输……因为大家还在期待着乌拉拉，乌拉拉还要证明自己给大家看……',
    );
    await urara.print_and_wait(
      '而且这样做乌拉拉就能被原谅了吧，这样做就可以被大家认可的站上台前了……',
    );
    await urara.print_and_wait(
      '身体好重，但是乌拉拉一定能跑起来；胸口好疼，但是只要挂起微笑就可以让别人不用担心。',
    );
    await urara.print_and_wait(
      '好可怕……自己会变成什么样呢？乌拉拉现在真的是在为了大家而站在这里吗？',
    );
    await urara.print_and_wait('但是，至少这一次，请让我一定要赢下来……');
    era.drawLine();
    await me.say_and_wait(
      [
        '我或许不应该让 ',
        sys_get_colored_callname(0, 52),
        ' 参赛的，但现在可能太迟了。',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '因为',
        urara.uma_sex_title,
        '们已经踏入闸门，此时的训练员也只能目送自己的担当，祈祷',
        urara.sex,
        '能挺过这次难关。',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '为什么会被 ',
        sys_get_colored_callname(0, 52),
        ' 骗到？或许是我的心里还信任着 ',
        sys_get_colored_callname(0, 52),
        ' 所展示出的表象吧……',
      ],
      true,
    );
    await me.say_and_wait(
      [
        sys_get_colored_callname(0, 52),
        ' 还是没有鼓起勇气，相信自己选择的路一直以来是正确的吗？',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '过于温柔的',
        urara.sex,
        '依旧需要靠外力，才能撬开逐渐封闭的内心吗？还是说，',
        urara.sex,
        '其实在害怕自己的未来……',
      ],
      true,
    );
    if (
      RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin ||
      edu_marks.fans >= 25000
    ) {
      await me.say_and_wait(
        [
          '是我的错吗？没在',
          urara.sex,
          '出现征兆的时候阻止',
          urara.sex,
          '，最后让 ',
          sys_get_colored_callname(0, 52),
          ' 变得连伤害自己都毫不在意。',
        ],
        true,
      );
      await me.say_and_wait(
        [
          '明明已经快要走到山顶了不是吗？或许，我和',
          urara.sex,
          '都在改变中，忘记了「笑容」的含义吧……',
        ],
        true,
      );
    } else {
      await me.say_and_wait(
        [
          '是我的错吗？因为我的失误，让',
          urara.sex,
          '变成了几乎把自己逼到自毁的模样。',
        ],
        true,
      );
      await me.say_and_wait(
        [
          '如果在相遇时我可以是名更优秀的训练员、如果',
          urara.sex,
          '遇到的会是一名更优秀的训练员……',
        ],
        true,
      );
    }
    await me.say_and_wait(
      '不过，现在再提起这些不着调的妄想也不会有什么意义。',
      true,
    );
    await me.say_and_wait(
      [
        '在 ',
        sys_get_colored_callname(0, 52),
        ' 已经走上赛场的现在，也只能相信',
        urara.sex,
        '可以靠摇摇欲坠的自己挺过这次比赛了。',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '事已至此，身为训练员的自己也更不能失去冷静，状况可能变得再糟，但能帮上',
        urara.sex,
        '的也只有自己……',
      ],
      true,
    );
  };
};
