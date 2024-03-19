const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

/**
 * @author 99
 *
 * @param {CharaTalk} me
 * @param {CharaTalk} urara
 * @param {CharaTalk} in_urara
 * @param {number} relation
 * @param {string} callname
 */
module.exports = async (me, urara, in_urara, relation, callname) => {
  await print_event_name('致做出选择的你', urara);
  await in_urara.say_as_unknown_and_wait(
    '坐在自己的办公桌前处理着文件，你回想着今天与乌拉拉在一起时的意外遭遇。',
  );
  await in_urara.say_as_unknown_and_wait(
    '但说是意外也并非恰当，因为在那之前的你也从未见过如此“有备而来”的乌拉拉。',
  );
  era.drawLine();
  await urara.say_and_wait([
    callname,
    '！在恋爱方面，',
    callname,
    ' 对乌拉拉是怎么想的呢？',
  ]);
  await era.printAndWait([
    '在刚听到这个问题时，',
    me.get_colored_name(),
    ' 差点以为自己幻听了，又或者 ',
    urara.get_colored_name(),
    ' 被谁教了奇怪的玩笑？',
  ]);
  await era.printAndWait([
    '但当坐在桌前的 ',
    me.get_colored_name(),
    ' 转头看去，却发现小',
    urara.get_uma_sex_title(),
    '就站在身后，带着与竞争重赏时相当的神情靠了过来。',
  ]);
  await era.printAndWait([
    '与平日的相处模式没有关系，亦没有任何怀疑的余地，',
    urara.get_colored_name(),
    ' 与 ',
    me.get_colored_name(),
    ' 挤上了同一张椅子。',
  ]);
  await era.printAndWait([
    '仿佛要夺得一着那般，',
    urara.get_colored_name(),
    ' 霸占性的坐在了 ',
    me.get_colored_name(),
    ' 的大腿上，将全部身体压在担当训练员的身前。',
  ]);
  await urara.say_and_wait([
    '所以 ',
    callname,
    '！对乌拉拉究竟是怎么想的呢？乌拉拉想现在就知道！',
  ]);
  await era.printAndWait([
    '在樱瞳与 ',
    me.get_colored_name(),
    ' 的咫尺之间，小小的',
    urara.get_uma_sex_title(),
    '带着严肃的笑意再次向 ',
    me.get_colored_name(),
    ' 问道。',
  ]);
  await era.printAndWait([
    '只是此刻被 ',
    urara.get_colored_name(),
    ' 堵住退路的 ',
    me.get_colored_name(),
    ' 并不意外，相反 ',
    me.get_colored_name(),
    ' 或许打心底就知道可能会有这一天。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 是',
    urara.sex,
    '的训练员，连 ',
    urara.get_colored_name(),
    ' 都能察觉到的感情，就算不敢认同，',
    me.get_colored_name(),
    ' 也知道那是存在的。',
  ]);
  await era.printAndWait(
    '而两人现在的距离有多近，也仅是包括周围人在内的「心照不宣」而已。',
  );
  await era.printAndWait(
    '回忆在这里出现了短暂的迟疑，但无论期待还是怀疑，都不应逃避来自担当的感情。',
  );
  await era.printAndWait([
    '况且，就连主动提起的 ',
    urara.get_colored_name(),
    ' 都没有半分迷茫。',
  ]);
  era.println();
  await in_urara.say_as_unknown_and_wait([
    '面对安静等待着的 ',
    urara.get_colored_name(),
    '，训练员 ',
    me.get_adult_sex_title(),
    '（您）当时的选择是——',
  ]);
  era.printButton(`抱住 ${urara.name}`, 1);
  era.printButton('「现在还不行……」', 2);
  if ((await era.input()) === 1) {
    await era.printAndWait([
      '在片刻的抉择后，',
      me.get_colored_name(),
      ' 将 ',
      urara.get_colored_name(),
      ' 拥入了怀中。',
    ]);
    await urara.say_and_wait(
      '诶嘿嘿～让训练员为难了呢，但是训练员真的选择乌拉拉了，感觉好开心……',
    );
    await era.printAndWait([
      '紧绷的身体在 ',
      me.get_colored_name(),
      ' 拥抱中变得逐渐柔软，',
      urara.get_colored_name(),
      ' 看起来也因为 ',
      me.get_colored_name(),
      ' 的选择而松了口气。',
    ]);
    await era.printAndWait([
      '虽然有些和平日的 ',
      urara.get_colored_name(),
      ' 不太一样，但作为',
      urara.sex,
      '的训练员 ',
      me.get_colored_name(),
      ' 也知道为什么。',
    ]);
    await era.printAndWait([
      '小马就算懵懂，也明白自己是怎样的「',
      urara.get_uma_sex_title(),
      '」，',
      urara.sex,
      '其实一直缺乏着安全感，只是很少会表现出来。',
    ]);
    await era.printAndWait([
      '而拥抱「',
      urara.get_colored_name(),
      '」的理由？姑且答得上来，但还是因那些不正当的欲望而难以启齿。',
    ]);
    await era.printAndWait(
      '比如在初次相遇时，有位成年人在同床共枕的少女的身体上，感受到了安心与温存？',
    );
    await era.printAndWait(
      '既需要在学生的激励下才寻回差点遗忘的前进初心，还要在学生身上寻得梦寐以求的倒错温暖。',
    );
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 立下契约的训练员，除去心里被 ',
      urara.get_colored_name(),
      ' 重新燃起那团火之外，剩下的可能尽是些居心不纯。',
    ]);
    await era.printAndWait([
      '但这些都没有关系，因为不管收容了怎样复杂的感情，与 ',
      urara.get_colored_name(),
      ' 在一起的经历也绝非虚假。',
    ]);
    era.println();
    if (relation > 150) {
      await urara.say_and_wait(
        '训练员，不要因为乌拉拉贬低自己哦？因为这也是乌拉拉做出的选择。',
      );
      await era.printAndWait([
        '回忆中，',
        urara.get_colored_name(),
        ' 伸出了令人安心的小手，揉搓着 ',
        me.get_colored_name(),
        ' 脸颊上的犹豫。',
      ]);
      await era.printAndWait([
        '露出似乎什么都懂一点的表情，',
        urara.get_colored_name(),
        ' 用一如既往的笑容回应着 ',
        me.get_colored_name(),
        ' 的拥抱。',
      ]);
      await urara.say_and_wait(
        '心意相通是很棒的事，妈妈也是这么说的！而且乌拉拉也不会一直是小孩子哦？',
      );
      await era.printAndWait(
        '没错，现在已经不用再犹豫了，相恋的人就在彼此身边。',
      );
    } else {
      await urara.say_and_wait(
        '在担心吗？可不管发生了什么，乌拉拉也已经喜欢上了训练员……',
      );
      await era.printAndWait([
        '回忆中，',
        urara.get_colored_name(),
        ' 虽然刚刚的表情有些复杂，但此刻还是释然捧起了 ',
        me.get_colored_name(),
        ' 的脸颊。',
      ]);
      await era.printAndWait([
        '带着绝不会反悔的神色，少女勇敢地向 ',
        me.get_colored_name(),
        ' 可能掺入了杂质的爱做出了回应。',
      ]);
      await urara.say_and_wait(
        '不用再忍耐了哦训练员，因为做出选择的乌拉拉就在这里，就在训练员身边……！',
      );
      await era.printAndWait('是啊，如今已经不会再被责怪了……');
    }
    if (
      era
        .getAddedCharacters()
        .filter((e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75).length >
      0
    ) {
      await urara.say_and_wait(
        '但这下子，就算乌拉拉被大家说卑鄙，也不能回头了哦……',
      );
      await era.printAndWait([
        '柔软的缩在 ',
        me.get_colored_name(),
        ' 的怀中，',
        urara.get_colored_name(),
        ' 突然靠在 ',
        me.get_colored_name(),
        ' 的身前轻声说道。',
      ]);

      era.printButton('「——」', 1);
      await era.input();

      await era.printAndWait([
        '只是在 ',
        me.get_colored_name(),
        ' 被突袭打乱了阵脚时，',
        urara.get_colored_name(),
        ' 却再次摇了摇头，温柔地安抚了恋人。',
      ]);
      await urara.say_and_wait(
        '没关系哦？乌拉拉并不是要责怪训练员，毕竟乌拉拉在那之前已经做好准备了嘛。',
      );
      await era.printAndWait('紧随其后的，又是天使般的笑容。');
      era.println();
    }
    await urara.say_and_wait('今后，也一直喜欢着对方吧，训练员！');
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '回忆着着怀中乌拉拉那份小巧而踏实的温润与柔软，美好的回忆暂时告一段落了。',
    );
    await in_urara.say_as_unknown_and_wait(
      '可喜可贺？不，并没有在说反话，因为我也愿意相信，您会是幸福的。',
    );
    await sys_love_uma_in_event(52);
  } else {
    await urara.say_and_wait(
      '果然乌拉拉的问题太唐突了！可不能让训练员太为难呢！',
    );
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 还在思考该如何说些委婉的话时，',
      urara.get_colored_name(),
      ' 却率先开口了。',
    ]);
    await urara.say_and_wait(
      '毕竟训练员是大人，大人会考虑的更多呢！这样的话乌拉拉也不会继续问了！',
    );
    await urara.say_and_wait(
      '所以到时候，如果训练员哪天想好了的话，一定要跟乌拉拉说啊！',
    );
    era.println();
    if (relation > 150) {
      await era.printAndWait([
        '没有失落的样子，只是和平常一样普通的笑着，小',
        urara.get_uma_sex_title(),
        '只是伸手拽了拽训练员的脸颊。',
      ]);
      await urara.say_and_wait(
        '但乌拉拉也没打算放弃呢！乌拉拉会继续等下去！训练员也已经猜到了吧！',
      );
      await urara.say_and_wait(
        '乌拉拉的话，会等到训练员觉得就算接受乌拉拉没问题为止哦！',
      );
    } else {
      await era.printAndWait([
        '但在说完之后就立刻变得有点泄气，',
        urara.get_colored_name(),
        ' 又软趴趴地缩到了 ',
        me.get_colored_name(),
        ' 的怀里。',
      ]);
      await urara.say_and_wait(
        '训练员知道，乌拉拉要等多久吗？不过，训练员不会告诉乌拉拉吧……',
      );
      await urara.say_and_wait(
        '如果乌拉拉更强势一点，训练员会现在就答应乌拉拉吗？开玩笑的啦……',
      );
    }
    era.println();
    await era.printAndWait(
      '虽然还不知道那天会不会到来，但也没错，现在维持现状就好，现在还不是时候——',
    );
    await era.printAndWait('……');
    await in_urara.say_as_unknown_and_wait(
      '所以在那之前，就算是桥到船头自然直，两人的关系又该怎么处理呢？',
    );
    await in_urara.say_as_unknown_and_wait(
      '在椅子上慵懒地摇晃着，你与乌拉拉就这样度过了某段无所事事又心事重重的时光。',
    );
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '已经不知道您在想什么了，都到这时候了有不答应的道理吗？',
    );
    await in_urara.say_as_unknown_and_wait(
      '……对不起说了不该说的话，总之辛苦了。',
    );
    new UraraLifeMarks().active_74 = 1;
    era.set('cflag:52:爱慕暂拒', 74);
    await punish_rejecting_love(52);
  }
};
