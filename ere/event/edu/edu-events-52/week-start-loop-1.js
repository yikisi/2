const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {CharaTalk} in_urara
 * @param {string} callname
 */
module.exports = async (urara, me, in_urara, callname) => {
  await print_event_name(
    ['「', { color: in_urara.color, content: in_urara.sex }, '」的祈愿'],
    urara,
  );
  await me.say_and_wait(
    '怎么回事，我记得自己晚上是在住处睡着的来着？这是……学园三女神像前？我为什么睡在这里？',
    true,
  );
  await me.say_and_wait(
    '头好疼，到底昨晚我梦游了吗？但是身上明明穿戴整齐，而且现在的时间……结果已经是这个时间了？',
    true,
  );
  await me.say_and_wait(
    '总觉得好像忘记了什么，不过今天还有更重要的事，真错过了什么也以后再说吧。',
    true,
  );
  await me.say_and_wait('先去训练场与乌拉拉汇合吧，今天一定要……', true);
  era.drawLine();
  era.printButton('「乌拉拉，月底就要有马纪念了，现在身体还好吗？」', 1);
  await era.input();

  await urara.say_and_wait(
    '所以说已经没关系了哦！现在乌拉拉一点都感觉不到不舒服！',
  );
  await urara.say_and_wait([
    callname,
    '，今天就不用带我来医院复查了吧？那天只是因为状态不好摔了一跤而已！',
  ]);

  era.printButton(
    '「那就挺好的，所以我今天并不是带乌拉拉来医院检查身体的。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '空荡的长廊中游荡着仅有两人份的脚步声，',
    me.get_colored_name(),
    ' 与乌拉拉穿行在医院那安静却单调的白色中。',
  ]);
  await era.printAndWait([
    '自从乌拉拉在赛场上晕倒但奇迹般的一切正常后，规律的去医院检查已经成为了二人近期的常态。',
  ]);
  await era.printAndWait([
    '正如同龄孩子们大多讨厌检查的繁复与无处不在的消毒水味，乌拉拉自然也每次都提出着小小的抗议。',
  ]);
  await era.printAndWait([
    '……至少一开始是。直到有一天，',
    me.get_colored_name(),
    ' 在某个难以察觉的角落中找到了一只不知被谁遗弃的小动物。',
  ]);
  await era.printAndWait([
    '拉开那间仿佛被遗忘的房间，',
    me.get_colored_name(),
    ' 将身边的「春乌拉拉」领到了放置在房间中央的床前。',
  ]);
  await era.printAndWait([
    '洁白的病床上，蜷起身体的樱粉色',
    urara.teen_sex_title,
    '轻摇着马耳与尾巴，在健康平稳的呼吸声中安静地沉睡着。',
  ]);
  await era.printAndWait([
    urara.sex,
    '的床边并没有医疗器械，甚至如同要去上学般穿着特雷森的校服，粉色的发带也像刚系上去般紧致。',
  ]);
  await era.printAndWait([
    '但这名看上去只是在学习日睡过头的小',
    urara.uma_sex_title,
    '，却与此刻站在 ',
    me.get_colored_name(),
    ' 身旁陷入沉默的「',
    urara.sex,
    '」别无二致。',
  ]);

  era.printButton(
    '「明明倒下前任谁都看得出状态的异常，醒来时却身心健康到像什么都没发生过。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '凝视着蜷缩在白床单上的另一团樱粉色，',
    me.get_colored_name(),
    ' 头也不抬地与身边的「',
    urara.sex,
    '」继续着对话。',
  ]);
  await era.printAndWait([
    '根本不用去看旁人的脸，',
    me.get_colored_name(),
    ' 早已猜到了最近一直陪伴着自己的「',
    in_urara.get_colored_actual_name(),
    '」到底是谁。',
  ]);

  era.printButton(
    `「虽然乌拉拉的确是个很结实的孩子，但我不记得${urara.sex}是胡萝卜侠啊。」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    '随着气质与神情的翻转，坐到病床边，与 ',
    urara.get_colored_name(),
    ' 相似的「',
    urara.sex,
    '」摘下伪装，露出了伴随着忧伤的真容。',
  ]);
  await in_urara.say_as_unknown_and_wait('……您是什么时候察觉的？');

  if (era.get('relation:52:0') > 150) {
    era.printButton(
      '「态度变化太明显了，一开始我以为乌拉拉生气了，但持续的时间未免也太长了。」',
      1,
    );
    await era.input();
    await me.say_and_wait(
      [
        '感谢你的陪伴，但模仿的还差一点啊。对不起，',
        urara.get_colored_name(),
        ' 变成这样你也很难受吧……',
      ],
      true,
    );
    await era.printAndWait([
      '抬头直视着那双与「',
      urara.get_colored_actual_name(),
      '」相比十分黯淡的樱瞳，',
      me.get_colored_name(),
      ' 与',
      urara.sex,
      '对上了眼神。',
    ]);
  } else {
    era.printButton(
      '「一开始的确没能察觉，但还是会觉得不对劲，而且最近乌拉拉好像也孤僻了不少。」',
      1,
    );
    await era.input();
    await me.say_and_wait(
      '再说其实也我做错了很多事不是吗？你也没必要做到这一步对吧？',
      true,
    );
    await era.printAndWait([
      '在内疚的揉了揉疲惫的脸后，',
      me.get_colored_name(),
      ' 还是对上了那双黯淡的樱瞳。',
    ]);
  }
  await in_urara.say_as_unknown_and_wait(
    '但我也只能这么做，已经是最后了，绝对不能让人知道乌拉拉倒下了，不然会更麻烦。',
  );
  await in_urara.say_as_unknown_and_wait(
    '而且如果我不这样做，您也不知道会干出什么，乌拉拉醒来时看不到您的话可就麻烦了。',
  );
  await era.printAndWait([
    '伸手抚摸着一旁还在熟睡中的 ',
    urara.get_colored_name(),
    '，「',
    urara.sex,
    '」的表情也像位安抚孩子的母亲般柔和下来。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    urara.sex,
    '也是啊，',
    urara.sex,
    '到底要睡到什么时候呢？不是还要去跑有马吗？快点醒过来啊。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    callname,
    ' 也已经找到你了哦？而且再不起床的话，我也不知道什么时候自己会消失哦？',
  ]);

  era.printButton(
    `「……消失？你是真实存在的，也不完全是${urara.sex}吧？就算这样『看不见的朋友』也会消失吗？」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    '听到 ',
    me.get_colored_name(),
    ' 的低声疑问，「',
    urara.sex,
    '」再次转向面前的 ',
    me.get_colored_name(),
    '，又撑起了自己总能读出伤感的笑容。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '只是有这样的预感，或许我也不是真货，只是某个人的碎片、某个人的倒影也说不定。',
  );
  await in_urara.say_as_unknown_and_wait(
    '所以最后如果乌拉拉能身心健康的结束故事，那我消失也没什么所谓。',
  );

  era.printButton(
    '「你也冷静点，虽然你是位强控制欲的老妈子，但这么说自己是不是太过了？」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '明明与外貌与小',
    urara.uma_sex_title,
    '一模一样却总说着悲观的话，眼前这幅景象还真是让人难以忍受。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '是这样吗？我还不需要被婆婆妈妈的',
    urara.sex_code - 1 ? '萝莉' : '正太',
    '控',
    me.get_adult_sex_title(),
    '（您）找茬啊。',
  ]);
  await era.printAndWait([
    '听到 ',
    me.get_colored_name(),
    ' 的回答，',
    urara.sex,
    '的笑容似乎少了些自嘲的哀伤，但还是没有太多松动地跳过了这段自我否认的话题。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '刚才说到……在',
    urara.sex,
    '倒下之后，我突然想起来，也许我可以暂时借',
    urara.sex,
    '的身体接替',
    urara.sex,
    '跑下去。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '所以我才暂时把',
    urara.sex,
    '的精神藏起来，原本不应被发现，结果还是被您找到了。',
  ]);
  await era.printAndWait([
    '「',
    urara.sex,
    '」抚摸 ',
    urara.get_colored_name(),
    ' 的手缓缓沉入了小',
    urara.uma_sex_title,
    '的身体，就如同穿过了放映机射出的投影。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '而且这的确是个解决不了问题的方法，因为就算我能够去往有马也毫无意义啊……',
  );
  await in_urara.say_as_unknown_and_wait([
    '也多亏就算',
    urara.sex,
    '睡着了，也一直指导着什么都做不到的我怎样去奔跑，我才能一直演到现在。',
  ]);

  era.printButton(
    '「乌拉拉为什么会变成这样……这个问题，我或许应该自己想……」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '但是我必须正面和您强调，因为在您身边，',
    urara.sex,
    '甚至遗忘了自己很害怕。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '所以完全觉醒的',
    urara.sex,
    '所做的第一件事就是躲起来，躲到',
    urara.sex,
    '自己也不知道何时会醒的内心深处。',
  ]);
  await era.printAndWait([
    '或许正是如此，「好孩子多少会忽略自己的内心」……所以「',
    urara.sex,
    '」才总在说 ',
    urara.get_colored_name(),
    ' 没有那么坚强。',
  ]);
  await era.printAndWait(
    '因为过于温柔，所以害怕伤到别人，害怕别人的非议，害怕心态的变化，直到害怕自己的胜利与愿望；',
  );
  await era.printAndWait(
    '因为不愿麻烦他人，所以不会去找他人宣泄；因为忽视得太久，所以堵塞的心也变得愈发倔强；',
  );
  await era.printAndWait(
    '因为想要抚平自我否认后的精神安宁，所以甚至失去理智向身边的导师寻求身体的慰藉……',
  );
  await era.printAndWait([
    '真是绝了，虽然不想这么评价，但这情商过高的别扭小马到底像',
    urara.sex,
    '家里的谁啊？',
  ]);

  era.printButton(
    `「但是这些又都没能被早点察觉，乌拉拉的愿望变得沉重是${urara.sex}自己的选择，但也是我……」`,
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '您已经够好了，而且您对乌拉拉真狠得下心吗？再者没有您在乌拉拉身边，',
    urara.sex,
    '早就垮了。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '甚至您一直都是对的，解铃还需系铃人，乌拉拉不能自己『醒来』，别人也解不开心结……',
  );

  era.printButton(
    `「所以结果就是不管是${era.get('love:52') >= 75 ? '爱人' : '朋友'}还是作为训练员，都没能在最后起到真正的作用吗？！」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    ' 本想要一拳砸在一旁的床头柜上，但看向 ',
    urara.get_colored_name(),
    ' 平静的侧颜，还是没能将颤抖的手落下。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '您这不是也没有看上去那么冷静，不过现在我们都差不多啊。',
  );
  await in_urara.say_as_unknown_and_wait(
    '能力总差一点又无法愤世嫉俗的凡人训练员，什么都做不到却妄想强塞别人幸福的幻影……',
  );
  await in_urara.say_as_unknown_and_wait([
    '……还有就像在无声地谴责我们的，没法醒来的',
    urara.sex,
    '，各种事情一塌糊涂。',
  ]);

  era.printButton(
    `「说什么呢，你不是对${urara.sex}可怜的训练员做了挺多过分的事吗？」`,
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '所以现在不是了，我说过我会狠下心来，把故事的结局握在自己手里。',
  );

  era.printButton('「但现在这样我就更不会放弃乌拉拉，所以你赶不走我的。」', 1);
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '别紧张嘛，我可不会赶您走哦？相反，我知道一个怎么让小睡美人起床的办法哦？',
  );
  await era.printAndWait([
    '面对 ',
    me.get_colored_name(),
    ' 七分警戒三分疑惑的目光，「',
    urara.sex,
    '」反而露出了最平静的笑容，但这一举动也更让 ',
    me.get_colored_name(),
    ' 警铃大作。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '您不也看到了吗？摔倒的乌拉拉躲进了自己的避风港的最深处……',
  );
  await in_urara.say_as_unknown_and_wait(
    '那我将避风港中的景象变为现实，乌拉拉就会幸福的醒来，幸福的活下去对吧？',
  );
  await in_urara.say_as_unknown_and_wait([
    '这就是我现在要写下的结局，而这也是，乌拉拉呼唤你发现',
    urara.sex,
    '的目的哦？',
  ]);
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 后退的瞬间，周围的空间就立刻被染成熟悉的灰白，阻滞的重压感也再次从上方降下。',
  ]);
  await era.printAndWait([
    '一直坐在床边的「',
    urara.sex,
    '」起身拉住了 ',
    me.get_colored_name(),
    ' 想要缩回的手，将 ',
    me.get_colored_name(),
    ' 用',
    urara.uma_sex_title,
    '的力量轻易拽倒在了病床上。',
  ]);
  await era.printAndWait([
    '在视角颠倒之间，',
    me.get_colored_name(),
    ' 看到两面身影逐渐与融合的 ',
    urara.get_colored_name(),
    '，缓缓睁开了眼睛——',
  ]);
  era.drawLine();
  await in_urara.print_and_wait([
    '不觉得现在的样子，很像您与乌拉拉相遇的那个时候吗，健忘的',
    urara.sex_code - 1 ? '萝莉' : '正太',
    '控',
    me.get_adult_sex_title(),
    '（您）？',
  ]);
  await in_urara.print_and_wait(
    '为什么眼神这么凝重呢？啊，抱歉，忘了现在的您说不出话，不过现在的我也一样。',
  );
  await in_urara.print_and_wait([
    '是啊，为什么是您呢？为什么会是明明',
    urara.sex,
    '都那么害怕了，却还要和您一同前进的您呢？',
  ]);
  await in_urara.print_and_wait(
    '我为什么要写下这个故事呢？您为什么要完成这个故事呢？为什么这是我们的故事呢？',
  );
  await in_urara.print_and_wait(
    '明明自己的问题也堆积如山，现在的我却只想继续注视着您，也许最先被您迷住的人是我才对……',
  );
  await in_urara.print_and_wait(
    '太好了，您的身体就和以前一样温暖，是不是感觉变得舒服起来了呢？',
  );
  await in_urara.print_and_wait(
    '没关系，不管是触碰还是侵犯，被您吸引的两人也绝不会再远离您，所以诚实一点也好哦？',
  );
  await in_urara.print_and_wait(
    '为什么躲闪呢？是因为不愿接受这样的幸福吗？可惜现在的您并没有拒绝的权力。',
  );
  await in_urara.print_and_wait(
    '不用担心，我会制作一个能够让乌拉拉、您还有大家都能开心的世界。',
  );
  await in_urara.print_and_wait(
    '虽然明天您会什么都不记得，但是等您再次睁开眼，乌拉拉便会幸福地回到您的身边了哦？',
  );
  await in_urara.print_and_wait('那么，好好睡一觉吧。');
  era.drawLine();
  await era.printAndWait([
    '从噩梦中惊醒，',
    me.get_colored_name(),
    ' 扶住自己隐隐作痛的额头，用模糊的视线环顾四周。',
  ]);
  await era.printAndWait(
    '这里好像是学校的三女神像前的长椅上，为什么会自己会睡在这里？之前又要干什么来着？',
  );
  await era.printAndWait([
    '自己刚刚好像做了一个相当恐怖的梦，但 ',
    me.get_colored_name(),
    ' 却无论如何都想不起一点相关内容。',
  ]);
  await era.printAndWait([
    '而站在 ',
    me.get_colored_name(),
    ' 面前的，是不知等待了多久却依旧面带笑容的 ',
    urara.get_colored_name(),
    '。',
  ]);

  era.printButton('「抱歉睡着了，乌拉拉，今天我们去过医院了吗……」', 1);
  await era.input();

  await me.say_and_wait(
    [
      '去……医院？我为什么会说去医院，明明眼前的担当健康的不得了，为什么我会想带',
      urara.sex,
      '去医院？',
    ],
    true,
  );
  await era.printAndWait(
    '不对劲，总觉得哪里不对劲，一定是忘记了很重要的事，但是……到底是什么……？',
  );
  await urara.say_and_wait([
    '诶？医院？',
    callname,
    ' 是睡迷糊了吗？乌拉拉还不需要去体检哦？',
  ]);
  await era.printAndWait([
    '背着柔和到缺乏真实感的阳光，满脸笑容的 ',
    urara.get_colored_name(),
    ' 在阴影中向半梦半醒的 ',
    me.get_colored_name(),
    ' 伸来了援助的手。',
  ]);

  era.printButton('「嗯、啊，说的也是，抱歉，我是真的睡糊涂了——」', 1);
  await era.input();

  await era.printAndWait([
    '但正当 ',
    me.get_colored_name(),
    ' 握住 ',
    urara.get_colored_name(),
    ' 伸出的手时，却发现偌大的校园却连草木都变得寂静无声——',
  ]);
};
