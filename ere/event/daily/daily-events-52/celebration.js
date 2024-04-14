const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = async () => {
  const edu_weeks = era.get('cflag:52:育成回合计时'),
    weeks = (era.get('flag:当前回合数') - 1) % 48;
  if (
    weeks !== 47 ||
    edu_weeks !== 47 + 48 ||
    sys_reg_race(52).curr.race !== -1
  ) {
    throw new Error();
  }
  const callname = sys_get_callname(52, 0),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  await print_event_name('决心前进之夜', urara);

  await era.printAndWait(
    '虽然圣诞节直到昨天的平安夜后才完全降临，但外面却从几天前就洋溢着充满甜味的节日气息。',
  );
  await era.printAndWait([
    '只是对于 ',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 来说，同是一年一度，昨天的 ',
    race_infos[race_enum.arim_kin].get_colored_name(),
    ' 却比今日圣诞节要重要太多。',
  ]);
  await era.printAndWait([
    '倒不是说不期待节日，只要是能够传播快乐的节日，',
    urara.get_colored_name(),
    ' 自然是全部欢迎，而 ',
    me.get_colored_name(),
    ' 也会提前准备。',
  ]);
  const result = new RaceHistory(52).get_result(47 + 48);
  if (result?.race === race_enum.arim_kin) {
    await era.printAndWait(
      '但似乎是在有马上燃烧得过于厉害了，现在这只小马除了必要的活动外一直是懒洋洋的模式。',
    );
    await era.printAndWait([
      '在训练室里揉着躺在沙发上变得软绵绵的 ',
      urara.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 在键盘上敲下了工作尾声的最后一个字符。',
    ]);
    if (result.rank === 1) {
      await era.printAndWait([
        '回忆着在错愕的相遇后一头钻出入场通道时看到的场景，当时的 ',
        me.get_colored_name(),
        ' 甚至一度以为自己在白日做梦。',
      ]);
      await era.printAndWait([
        '直到在惊诧中被大家围着问东问西，又稀里糊涂看到 ',
        urara.get_colored_name(),
        ' 站上Live的C位后，才终于确信一切都是事实。',
      ]);
      await era.printAndWait([
        '而在那之后，',
        urara.get_colored_name(),
        ' 被朋友们保护的很好，但 ',
        me.get_colored_name(),
        ' 现在只要独自一人就会各种麻烦事飞个不停。',
      ]);
      await era.printAndWait([
        '不过即使如今「在照顾 ',
        urara.get_colored_name(),
        '」已经变得像个逃难借口似的，在那之上的压力可不能给到 ',
        urara.get_colored_name(),
        ' 啊。',
      ]);
      await era.printAndWait([
        '大人的麻烦事，好歹由大人自己烦恼吧。关上电脑，',
        me.get_colored_name(),
        ' 轻声叹了口气。',
      ]);
      await era.printAndWait([
        '察觉到 ',
        callname,
        ' 的动作而准备起身的小',
        urara.get_uma_sex_title(),
        '，',
        me.get_colored_name(),
        ' 也适时的收回了还带有柔软触感的手指。',
      ]);
    } else {
      await era.printAndWait([
        '其实关于参加有马这点 ',
        me.get_colored_name(),
        ' 的想法和大家都差不多，只要 ',
        urara.get_colored_name(),
        ' 现在能站上赛道就已经是胜利了。',
      ]);
      await era.printAndWait([
        '这原本是值得高兴的事，但那位突然与 ',
        me.get_colored_name(),
        ' 相见的「',
        in_urara.get_colored_name(),
        '」所说的，到底又是……',
      ]);
      await era.printAndWait([
        '因察觉到 ',
        callname,
        ' 的动作而准备起身的小',
        urara.get_uma_sex_title(),
        '，',
        me.get_colored_name(),
        ' 也适时的收回了还带有柔软触感的手指。',
      ]);
    }
  } else {
    await era.printAndWait([
      '今天的 ',
      urara.get_colored_name(),
      ' 正安静地坐在工作的 ',
      callname,
      ' 身旁，但耐不住性子摇摆的小耳朵还是会悄悄搭上 ',
      me.get_colored_name(),
      ' 的肩膀。',
    ]);
    await era.printAndWait([
      '而为了能够及时回应小',
      urara.get_uma_sex_title(),
      '的等待中的期待，',
      me.get_colored_name(),
      ' 也适当的加快了手指敲击键盘的节奏……',
    ]);
  }
  await era.printAndWait(
    '话又说回来，这边本来也不会认真过圣诞，但能挑个特别的日子互相献上祝福，不论何时都是值得的。',
  );
  await era.printAndWait([
    '所以，就算是为了感谢小',
    urara.get_uma_sex_title(),
    '一直以来的努力，今天的',
    urara.sex,
    '也值得 ',
    me.get_colored_name(),
    ' 为其准备一些特别的回忆。',
  ]);
  await era.printAndWait([
    '合上电脑，',
    me.get_colored_name(),
    ' 从桌下的拿出了事先为 ',
    urara.get_colored_name(),
    ' 准备好的圣诞礼物。今天的',
    urara.sex,
    '，应该正期待着这一刻吧。',
  ]);

  if (era.get('relation:52:0') > 150) {
    await era.printAndWait([
      '看到 ',
      me.get_colored_name(),
      ' 突然递来的礼物盒，',
      urara.get_colored_name(),
      ' 先是有些吃惊的一愣，但随后可爱的笑容便带着惊喜爬上脸颊。',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 的肯定下兴高采烈的翻开礼盒，小',
      urara.get_uma_sex_title(),
      '惊喜地从盒中收到了一副崭新的粉色耳套。',
    ]);
  } else {
    await era.printAndWait([
      '大概是没想到自己会收到礼物，',
      urara.get_colored_name(),
      ' 先是一愣，但在得到 ',
      me.get_colored_name(),
      ' 的肯定后还是接过了盒子。',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 的示意下有些犹豫的打开礼物包装，随后 ',
      urara.get_colored_name(),
      ' 的樱瞳便在拿起盒中崭新的耳套后逐渐明亮起来。',
    ]);
  }

  if (era.get('love:52') >= 75) {
    await era.printAndWait(
      '「恋人赠予的耳套与尾饰是爱的证明」，古事记上完全没记载这回事，但在目前的学生间非常流行。',
    );
    await era.printAndWait([
      '虽然借着圣诞节送并不贵重的小饰品是有些卑鄙，但伴随小',
      urara.get_uma_sex_title(),
      '奔跑已久的旧耳套确实已经洗褪色了。',
    ]);
  } else {
    await era.printAndWait([
      '虽然向关系没那么好的',
      urara.get_uma_sex_title(),
      '赠予耳套或尾饰可能会被视为失礼之举，但 ',
      urara.get_colored_name(),
      ' 应该不会太在乎这点。',
    ]);
    await era.printAndWait([
      '当然 ',
      me.get_colored_name(),
      ' 也并非出于非礼的考量，仅仅是因为 ',
      urara.get_colored_name(),
      ' 那双不知用了多久的耳套实在太旧了而已。',
    ]);
  }
  await urara.say_and_wait([
    '诶？这是 ',
    callname,
    ' 准备的吗？好棒哦——！而且和乌拉拉现在的是同款呢！',
  ]);

  era.printButton('「是圣诞老人请我转交礼物给你的哦。」', 1);
  await era.input();

  await urara.say_and_wait([
    '真的吗！？原来今年的圣诞老人是 ',
    callname,
    ' 呢！嘿嘿～谢谢 ',
    callname,
    '！',
  ]);
  await era.printAndWait([
    '嗯？原来 ',
    urara.get_colored_name(),
    ' 是不信圣诞老人的类型……不对，难道是看透了圣诞老人本质的类型？',
  ]);
  await era.printAndWait([
    '看着担当开心却又另有所指的笑颜，',
    me.get_colored_name(),
    ' 忽然意识到 ',
    urara.get_colored_name(),
    ' 令人意外的情报似乎又增加了……',
  ]);
  await urara.say_and_wait(
    '不过呢，圣诞节是大家都会很开心的节日哦！不只小孩子，连大人也是！',
  );
  await urara.say_and_wait([
    '所以，乌拉拉在这时也会当圣诞老人，将专属的礼物送给 ',
    callname,
    '！',
  ]);
  await era.printAndWait([
    '挂起笑容靠过来，',
    urara.get_colored_name(),
    ' 将从口袋中掏出的某样东西塞进了 ',
    me.get_colored_name(),
    ' 的手中。',
  ]);
  await era.printAndWait([
    '打开手心，小',
    urara.get_uma_sex_title(),
    '交到 ',
    me.get_colored_name(),
    ' 手中的是一张被涂抹过的彩色纸片，纸片的中间还写着「什么都帮券」。',
  ]);
  await urara.say_and_wait(
    '不管是帮忙大扫除、帮忙煮饭还是陪你聊天，都尽管吩咐！',
  );
  await urara.say_and_wait([
    '乌拉拉以后也会更努力的，所以 ',
    callname,
    ' 需要帮忙时就尽管叫我吧！',
  ]);

  era.printButton('「嗯！谢谢你！」', 1);
  await era.input();

  await urara.say_and_wait([
    '嘿嘿～',
    callname,
    ' 现在很开心对吧？我小的时候，也送过这样的券给爸爸，爸爸也非常开心呢！',
  ]);
  await urara.say_and_wait([
    '我也想让 ',
    callname,
    ' 跟爸爸一样开心！虽然爸爸却把券珍藏起来，到现在一张都还没过……',
  ]);
  await urara.say_and_wait([
    '所以！乌拉拉希望 ',
    callname,
    ' 不要把券收藏起来，最好现在就对乌拉拉好好使用哦！',
  ]);
  await era.printAndWait([
    '带着',
    urara.get_teen_sex_title(),
    '的俏皮笑容扑进 ',
    me.get_colored_name(),
    ' 的怀中，不知何时突然又长大了一点的小',
    urara.get_uma_sex_title(),
    '有点任性的压在住了 ',
    me.get_colored_name(),
    '。',
  ]);

  await urara.say_and_wait(['所以 ', callname, '，你想用这张券来做些什么呢？']);
  era.printButton(
    '「现在的话，就许愿乌拉拉今后跑得更快一点吧？」（速度&耐力&智力+10）',
    1,
  );
  era.printButton(
    '「那下次去商店街特训的时候，要更努力的帮大家哦？」（力量&根性+10）',
    2,
  );
  era.printButton(
    '「……这张券，可以兑换乌拉拉的身体做礼物吗？」（全属性+5）',
    3,
    { disabled: era.get('love:52') < 50 },
  );
  const attr_change = new Array(5).fill(0),
    ret = await era.input();
  if (ret < 3) {
    if (ret === 1) {
      attr_change[attr_enum.speed] =
        attr_change[attr_enum.endurance] =
        attr_change[attr_enum.intelligence] =
          10;
    } else {
      attr_change[attr_enum.strength] = attr_change[attr_enum.toughness] = 10;
    }
    await urara.say_and_wait([
      '诶？竟然是这么普通的愿望吗？我还以为 ',
      callname,
      ' 作为大人会想要些乌拉拉不知道的东西！',
    ]);

    era.printButton(
      `「先不说这是在期待什么，乌拉拉觉得作为大人的${callname}会要什么不知道的东西？」`,
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '嗯……到底是什么呢？比如说 ',
      callname,
      ' 想要乌拉拉什么的？',
    ]);
    await era.printAndWait('啊？');
    await urara.say_and_wait([
      '比如说 ',
      callname,
      ' 要乌拉拉一直陪在身边什么的……不过这些好像日常就在做？',
    ]);
    await era.printAndWait('——呼！');
    await era.printAndWait([
      '面对小',
      urara.get_uma_sex_title(),
      '依旧无暇的小脸，',
      me.get_colored_name(),
      ' 在心中长舒一口气。好险，还以为 ',
      urara.get_colored_name(),
      ' 又被谁灌输了奇怪知识……',
    ]);
    await urara.say_and_wait([
      '但是如果乌拉拉想要把自己的全部送给 ',
      callname,
      '，',
      callname,
      ' 会不会收下呢？',
    ]);
    await era.printAndWait(
      '……结果还是不能掉以轻心，这到底是谁教的啊？不过此时此刻，这个问题的确值得回答——',
    );

    era.printButton(
      '「我不是早就收到礼物了吗？『乌拉拉赠予的全部日常』。」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '不论回报的',
      urara.get_teen_sex_title(),
      '早已将最适合的礼物送入 ',
      me.get_colored_name(),
      ' 的手中，那在圣夜降临之时，或许也无需其他？',
    ]);
    await era.printAndWait([
      '端详着',
      urara.get_teen_sex_title(),
      '混入稍许疑惑的笑脸，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 又一同渡过了如同礼物般的一日。',
    ]);
  } else {
    await urara.say_and_wait([
      '嗯！可以哦？因为就算 ',
      callname,
      ' 不说，乌拉拉也打算这样做的……',
    ]);
    await era.printAndWait([
      '没有丝毫犹豫的回应了 ',
      me.get_colored_name(),
      ' 充满欲望的试探，一双小手害羞的爬上了 ',
      me.get_colored_name(),
      ' 的敏感处。',
    ]);
    await urara.say_and_wait([
      '……而且 ',
      callname,
      ' 的这里，也变得很有感觉了对吧？',
    ]);
    await era.printAndWait([
      '隔着布料用手指轻抚着 ',
      me.get_colored_name(),
      ' 的敏感之处，小',
      urara.get_uma_sex_title(),
      '稚嫩的脸颊逐渐染上绯色的潮红。',
    ]);
    await era.printAndWait([
      '迫不及待的水声早已浸透了',
      urara.get_teen_sex_title(),
      '包裹紧致的下着，将发情的潮水失控的涂抹在 ',
      me.get_colored_name(),
      ' 的腿上。',
    ]);
    if (era.get('exp:52:性爱次数') >= 10) {
      await urara.say_and_wait(
        '嘿嘿～其实从坐上来的时候，乌拉拉就已经变得湿乎乎的了……',
      );
      await urara.say_and_wait([
        '已经、难以忍受了……乌拉拉、变成坏孩子，怎么想都是 ',
        callname,
        ' 的错……啾～',
      ]);
      await era.printAndWait([
        '自然地抱紧爱人，被 ',
        me.get_colored_name(),
        ' 夜以继日调教的娇小身体，如今也熟练的准备着接纳主人欲望的前戏。',
      ]);
      await era.printAndWait([
        '在湿漉漉的深吻中与 ',
        me.get_colored_name(),
        ' 缠绵地交换着粘稠的体液，进入状态的小',
        urara.get_sex_slave_title(),
        '熟练的褪下自己的衣物。',
      ]);
    } else {
      await urara.say_and_wait([
        '哈啊……对不起，弄脏了 ',
        callname,
        ' 的衣服……但是乌拉拉已经、忍不住了……',
      ]);
      await urara.say_and_wait([
        '乌拉拉、会满足 ',
        callname,
        ' 的愿望的，所以乌拉拉会努力的……哈嗯～',
      ]);
      await era.printAndWait([
        '受本能的驱使与恋人相拥，在爱人的命令下，小',
        urara.get_sex_slave_title(),
        '开始生疏但认真的进行着服侍主人的前戏。',
      ]);
      await era.printAndWait([
        '在朦胧失神的间隙被侵犯着口腔，任 ',
        me.get_colored_name(),
        ' 肆意摆布身体的小',
        urara.get_uma_sex_title(),
        '很快便被扯下了身上的衣物。',
      ]);
    }
    await urara.say_and_wait([
      '……',
      callname,
      '，今天、请尽情享受……作为圣诞礼物的乌拉拉吧～？',
    ]);
    await era.printAndWait([
      '被 ',
      me.get_colored_name(),
      ' 按倒在身下的最后，因爱意而恍惚的 ',
      urara.get_colored_name(),
      ' 轻声舔舐着 ',
      me.get_colored_name(),
      ' 的耳垂，宣布了只属于两人的淫乱晚宴的开端……',
    ]);
    await quick_into_sex(52);
    attr_change.fill(5);
  }
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    52,
    attr_change,
    0,
    undefined,
    true,
  );
  wait_flag = sys_like_chara(52, 0, 10) && wait_flag;
  wait_flag && (await era.waitAnyKey());
};
