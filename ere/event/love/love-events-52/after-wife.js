const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const Love52UntilWife = require('#/event/love/love-events-52/until-wife');
const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends Love52UntilWife {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 90(urara, me, callname) {
    const { in_urara } = this.get_event_vars();
    await print_event_name('不妥协的爱意', urara);
    new UraraLifeMarks().infidelity = 1;
    await in_urara.say_as_unknown_and_wait('……唉，终究是变成这样了……');
    await in_urara.say_as_unknown_and_wait(
      '只要有合适的土壤，被种下的种子就会生根发芽。',
    );
    await in_urara.say_as_unknown_and_wait(
      '不用担心，乌拉拉依旧是温柔的，只是被黑色缠绕的春色，在您眼中是否美丽呢？',
    );
    era.drawLine();
    await urara.say_and_wait([callname, '，你原来在这里等我啊！']);
    await era.printAndWait([
      '与平常充满活力不同，今天的 ',
      urara.get_colored_name(),
      ' 在来到 ',
      me.get_colored_name(),
      ' 身边后安静的坐在了长椅上的 ',
      me.get_colored_name(),
      ' 身边。',
    ]);
    await era.printAndWait([
      '而等 ',
      me.get_colored_name(),
      ' 刚想出声询问是不是发生了什么，却被静静微笑的小',
      urara.uma_sex_title,
      '用本格化的力量抓住了衣领。',
    ]);
    await era.printAndWait([
      '随后，',
      me.get_colored_name(),
      ' 感受到了唇齿相叠的温柔，也感受到担当细小柔软的舌尖不可思议的撬开了 ',
      me.get_colored_name(),
      ' 的防备，侵入了 ',
      me.get_colored_name(),
      ' 的口腔。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 大胆地探入着 ',
      me.get_colored_name(),
      ' 的身体，细嫩芬芳的舌尖温柔又强硬的拂过牙齿与舌苔，不断搅动起细微又粘稠的水声。',
    ]);
    era.println();
    begin_and_init_ero(0, 52);
    await quick_make_love(
      new EroParticipant(52, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    if (era.get('exp:52:接吻次数') <= 10) {
      await era.printAndWait([
        '发生了什么？为什么要这样做？',
        sys_get_callname(0, 52),
        ' ',
        urara.sex,
        '……',
      ]);
      await era.printAndWait([
        '无数个问题在 ',
        me.get_colored_name(),
        ' 眼前打转。眼前这抹袭击自己的樱粉色，真的是「',
        urara.get_colored_name(),
        '」吗？',
      ]);
      await era.printAndWait([
        '可不管 ',
        me.get_colored_name(),
        ' 怎么集中已经同口中的体液一起被混成浆糊的脑袋，现在也已经无法思考出问题的答案了。',
      ]);
      await era.printAndWait([
        '而依靠着这幅身体的本能压倒爱人的 ',
        urara.get_colored_name(),
        '，则心满意足的将全身贴了上去，让',
        urara.sex,
        '的存在继续深入着 ',
        me.get_colored_name(),
        ' 的一切。',
      ]);
    } else {
      await era.printAndWait([
        '在因氧气消耗而逐渐模糊的双眼中，绽放的樱瞳一直在过近的距离下占据着 ',
        me.get_colored_name(),
        ' 视野的全部。',
      ]);
      await era.printAndWait([
        '思考能力在小',
        urara.uma_sex_title,
        '绵软的攻势中瓦解了，逐渐被吸干力量的身体再也无力与自己的担当抗衡。',
      ]);
      await era.printAndWait(
        '仿佛是缺氧时产生的幻觉，带着以夺走一切为前提的气势压上来的小小担当眼中，流露出趋近狂乱的爱意。',
      );
    }
    era.println();

    await era.printAndWait([
      '在决定将',
      urara.sex,
      '的气息烙印在 ',
      me.get_colored_name(),
      ' 的身上之前，小小的',
      urara.uma_sex_title,
      '苦恼过很久，但乌拉拉最后还是理解了。',
    ]);
    await era.printAndWait(
      '信任这段感情也好，不信任这段感情也罢；信任爱人的人品也好，不信任爱人的人品也罢；',
    );
    await era.printAndWait([
      callname,
      ' 是人间之屑又如何？',
      callname,
      ' 是个色鬼又怎样？',
      callname,
      ' 只是想要占有 ',
      urara.get_colored_name(),
      ' 又有什么关系？',
    ]);
    await era.printAndWait([
      '那些事……与 ',
      urara.get_colored_name(),
      ' 强占身为好友的恋人的 ',
      callname,
      ' 的嘴唇，也没什么区别吧？',
    ]);
    await era.printAndWait([
      '小',
      urara.uma_sex_title,
      '终于从深吻中解放了自己的训练员，两人从互相紧抵的舌尖上拉出了一道恋恋不舍的丝线……',
    ]);
    await era.printAndWait([
      '看着 ',
      me.get_colored_name(),
      ' 茫然又有些喘不过气的表情，',
      urara.get_colored_name(),
      ' 露出了纯真中掺杂着一丝魅意的笑容。',
    ]);
    await urara.say_and_wait([
      '对不起哦 ',
      callname,
      '，但是现在的我是不会退让的……',
    ]);
    await era.printAndWait([
      '没有一丝歉意的声音从',
      urara.teen_sex_title,
      '的唇边低声路过，曾经令',
      urara.sex,
      '不齿的对好友的背叛如今竟变得不痛不痒。',
    ]);
    await urara.say_and_wait([
      '因为乌拉拉明白了，因为乌拉拉想起来了，这些都是 ',
      callname,
      ' 的错啊……',
    ]);
    era.println();
    const love_30 =
        (era.get('cflag:30:招募状态') === recruit_flags.yes &&
          era.get('love:30')) >= 75,
      love_61 =
        (era.get('cflag:61:招募状态') === recruit_flags.yes &&
          era.get('love:61')) >= 75;
    if (love_30 && love_61) {
      await in_urara.say_as_unknown_and_wait([
        '训练员',
        me.get_adult_sex_title(),
        '很贪心，明明已经拥有了乌拉拉最好的朋友，还想要连乌拉拉也拥有。',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '如果是以前还不懂的乌拉拉可能会更加难受吧，但现在的乌拉拉不在乎。',
      );
      await in_urara.say_as_unknown_and_wait([
        '可现在的乌拉拉却对 ',
        callname,
        ' 露出了得意洋洋的表情，又是为什么呢？',
      ]);
    } else {
      await in_urara.say_as_unknown_and_wait([
        '为什么训练员',
        me.get_adult_sex_title(),
        '会在接受了 ',
        sys_get_colored_callname(52, love_30 ? 30 : 61),
        ' 后，还能如此轻松的对待乌拉拉呢？',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '为什么在拥有了别人的爱后，还想要将乌拉拉也抱在怀中呢？',
      );
      await in_urara.say_as_unknown_and_wait([
        '为什么乌拉拉明知道这一点，却还在笑着与这样的训练员',
        me.get_adult_sex_title(),
        '相拥呢？',
      ]);
    }
    era.println();
    await urara.say_and_wait(
      ['因为 ', callname, ' 是个大骗子，而乌拉拉也爱上了这样的大骗子。'],
      true,
    );
    await urara.say_and_wait(
      [
        callname,
        ' 将不应给予的感情送给了乌拉拉，同样不管那是不是真品，明知不应收下却据为己有的乌拉拉都是同罪。',
      ],
      true,
    );
    await urara.say_and_wait(
      '乌拉拉要变成卑劣的大人？乌拉拉以后会变成卑劣的大人？乌拉拉觉得这不重要哦？',
      true,
    );
    await urara.say_and_wait(
      '像个小孩子的我是后来者又如何？就算大错特错，其他深陷其中的人又比这样的乌拉拉清白多少吗？',
      true,
    );
    await urara.say_and_wait([
      callname,
      ' 将我变成这个样子，所以也请 ',
      callname,
      ' 对乌拉拉好好负起责任吧……',
    ]);
    await era.printAndWait([
      '不等 ',
      me.get_colored_name(),
      ' 表达对这句话的疑惑，小小的担当便伸出了手，用细嫩的食指抵住了 ',
      me.get_colored_name(),
      ' 的嘴唇。',
    ]);
    await urara.say_and_wait(
      [
        '这句话的意思，不要来问乌拉拉哦？',
        callname,
        ' 的话，自己肯定能找答案吧？',
      ],
      true,
    );
    await urara.say_and_wait([
      '不要问哦 ',
      callname,
      '，现在的话，就先到这里吧……？',
    ]);
    await era.printAndWait([
      '伴随着',
      urara.teen_sex_title,
      '愈发浑浊的樱瞳，在不洁的爱意浇灌下，丑陋的种子绽放出了一朵妖艳而卑劣的花……',
    ]);
    era.set('abl:52:接吻技巧', Math.min(era.get('abl:52:接吻技巧') + 1, 5));
    era.set('abl:52:口腔掌握', Math.min(era.get('abl:52:口腔掌握') + 1, 5));
    era.set('abl:52:口腔耐性', Math.min(era.get('abl:52:口腔耐性') + 1, 5));
    era.set('abl:52:甜言蜜语', Math.min(era.get('abl:52:甜言蜜语') + 1, 5));
    await era.printAndWait([
      urara.get_colored_name(),
      ' 的 ',
      {
        content: '口技巧',
        color: buff_colors[3],
      },
      ' 变得更加娴熟了……',
    ]);
    era.set('flag:当前互动角色', 52);
  }
};
