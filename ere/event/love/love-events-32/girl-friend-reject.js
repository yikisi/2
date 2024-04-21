const era = require('#/era-electron');

const {
  stopped_clock,
  time_return,
} = require('#/event/love/love-events-32/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonLifeMarks} life_marks
 */
module.exports = async (tachyon, me, callname, life_marks) => {
  await era.printAndWait([
    me.get_colored_name(),
    ' 回忆起了第一次见到 ',
    tachyon.get_colored_name(),
    ' 这名',
    tachyon.get_uma_sex_title(),
    '时的画面',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '的跑法，',
    tachyon.sex,
    '的虚幻，',
    tachyon.sex,
    '的可能性',
  ]);
  await era.printAndWait([
    '被',
    tachyon.sex,
    '灼伤了双眼的 ',
    me.get_colored_name(),
    '，不是从当时就已经发誓要为',
    tachyon.sex,
    '牺牲一切了吗',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 没有多说什么，直接从',
    tachyon.sex,
    '手上接过了试管',
  ]);
  await era.printAndWait(['记得', tachyon.sex, '曾经说过，自己有双疯狂的眼睛']);
  await era.printAndWait([
    '那这疯狂的起源，想必都是反射自',
    tachyon.sex,
    '的光辉',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '的疯狂是因',
    tachyon.sex,
    '的梦想而起，',
    me.get_colored_name(),
    ' 的疯狂则是因',
    tachyon.sex,
    '而起',
  ]);
  await era.printAndWait([
    '既然如此，为了',
    tachyon.sex,
    '的梦想，为了',
    tachyon.sex,
    '能够继续绽放那样的光芒，牺牲自己又有何不可？',
  ]);
  era.println();
  await era.printAndWait([
    '现在的 ',
    me.get_colored_name(),
    '，如同一名虔诚的信徒，事实上也确实如此',
  ]);
  await era.printAndWait([
    '而 ',
    me.get_colored_name(),
    ' 心中的神明，唯一的光芒，现在却因 ',
    me.get_colored_name(),
    ' 而堕入黑暗',
  ]);
  await era.printAndWait('这种事当然是绝对不允许的');
  await era.printAndWait('幸好，一切还有救');
  era.println();
  await era.printAndWait([
    '只要自己消失，',
    tachyon.sex,
    '就能继续绽放出 ',
    me.get_colored_name(),
    ' 想看见的光芒了',
  ]);
  era.printButton('「谢谢你……在可能性的彼方再见吧」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    ' 相信 ',
    tachyon.get_colored_name(),
    '，甚至可以说是妄信、盲信',
  ]);
  await era.printAndWait([
    '但同时，',
    me.get_colored_name(),
    ' 的内心也还是有着一丝惧怕',
  ]);
  await era.printAndWait([
    '万一自己死后，',
    tachyon.sex,
    '没有自己想的如此坚强怎么办',
  ]);
  await era.printAndWait([
    '万一',
    tachyon.sex,
    '并没有',
    tachyon.sex,
    '自己想的那般坚强怎么办',
  ]);
  await era.printAndWait([
    '所以，这是 ',
    me.get_colored_name(),
    ' 为了以防万一所设下的枷锁',
  ]);
  era.println();
  await era.printAndWait([
    '虽然不觉得自己对',
    tachyon.sex,
    '真的会有那么重要，但万一，假如，',
    tachyon.sex,
    '真的一蹶不振的话……那么这个枷锁，或者说，这个诅咒',
  ]);
  await era.printAndWait([
    '这个来自于',
    tachyon.sex,
    '曾经爱过的人的诅咒，会推动着',
    tachyon.sex,
    '继续前进，直到达到',
    tachyon.sex,
    '的理想为止',
  ]);
  await era.printAndWait([
    '如果说一切都是自己的自作多情，自己在',
    tachyon.sex,
    '心目中根本就没有占据那么大的份量，',
  ]);
  await era.printAndWait([
    '那就更好了，',
    tachyon.sex,
    '一定不会被区区的豚鼠所阻碍步伐，会坚持并坚定的继续前进',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 如此盼望着，举起试管喝了下去，然后……',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 惊喜的看见，',
    tachyon.sex,
    '抬起头来，脸上带着一如往常的笑容',
  ]);
  await era.printAndWait([
    '这样就没问题了，',
    tachyon.sex,
    '一定，一定会继续坚持自己的道路…………',
  ]);
  era.setToBottom();
  await era.printAndWait('下个瞬间');
  era.setToBottom();
  await era.printAndWait([
    me.get_colored_name(),
    ' 感觉到，有什么东西触碰到了 ',
    me.get_colored_name(),
    ' 的嘴唇',
  ]);
  await era.printAndWait('柔软的、温热的、娇嫩的两瓣玫瑰');
  await era.printAndWait([
    tachyon.get_colored_name(),
    '，吻上了 ',
    me.get_colored_name(),
    ' 的唇',
  ]);
  era.println();
  await era.printAndWait([
    '非但如此，',
    tachyon.sex,
    '的舌头撬开了 ',
    me.get_colored_name(),
    ' 的双唇',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '的舌头在 ',
    me.get_colored_name(),
    ' 的口中不停搅拌，索取',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '的舌头留恋的舐过 ',
    me.get_colored_name(),
    ' 的齿间、',
    me.get_colored_name(),
    ' 的舌尖、',
    me.get_colored_name(),
    ' 的龈内————然而，这些都不是',
    tachyon.sex,
    '的目标',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '的目标是————由于过于突然的发展，使 ',
    me.get_colored_name(),
    ' 没能反应过来，甚至都没能咽下的，',
    me.get_colored_name(),
    ' 口中的药剂',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 这才反应了过来，并慌忙想要阻止',
  ]);
  await era.printAndWait('但一切都已经来不及了');
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 口中的药剂，已经被',
    tachyon.sex,
    '分走了大半',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 连询问',
    tachyon.sex,
    '为什么都已经顾不上了，只能连忙要抽出舌头，阻止',
    tachyon.sex,
    '的行为',
  ]);
  await era.printAndWait([
    '但是，人类在力量上终究是敌不过',
    tachyon.get_uma_sex_title(),
    '的，即便是受了如此多实验的 ',
    me.get_colored_name(),
    '，也不例外',
  ]);
  era.println();
  await era.printAndWait('终于，这个彷佛有一世纪之久的吻结束了');
  await era.printAndWait([
    '分开的 ',
    me.get_colored_name(),
    ' 们不停的喘着气，',
    me.get_colored_name(),
    ' 一边喘着一边想冲上前帮 ',
    tachyon.get_colored_name(),
    ' 催吐……却不由得停下了脚步',
  ]);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' ',
    tachyon.sex,
    '脸上现在的表情、情绪，是 ',
    me.get_colored_name(),
    ' 所无法理解的',
  ]);
  await era.printAndWait('如果是高兴，那为什么脸上不断有泪珠滑落');
  await era.printAndWait([
    '如果是悲伤，为什么露出的又是 ',
    me.get_colored_name(),
    ' 从未见',
    tachyon.sex,
    '露出过的，堪称完美的笑容',
  ]);
  if (life_marks.choco) {
    await era.printAndWait([
      '然后，在 ',
      me.get_colored_name(),
      ' 口中残存的药剂在此时忽然改变了味道，原来喝下去无色无味的药，现在的味道……',
    ]);
    era.println();
    if (era.get('exp:32:接吻次数')) {
      await tachyon.say_and_wait(
        '没想到，最后一个吻的味道竟然是猪肉盖饭的味道啊',
      );
    } else {
      await tachyon.say_and_wait('没想到，初吻的味道竟然是猪肉盖饭的味道啊');
    }
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 想起了情人节时收到的巧克力',
    ]);
    await era.printAndWait([
      '天天被灌药的自己，及以自己的反应为乐的 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait('多希望那段美好的时光能够永远持续');
    await era.printAndWait('多希望那杯红茶的香气可以恒久不变');
    await era.printAndWait('明明应该已经坚定了决心才对');
    await era.printAndWait('为什么现在却开始怀念起那样的日子了');
  }
  era.println();
  await tachyon.say_and_wait([callname, '，抱歉啊，我骗了你']);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 依旧维持着那副艳丽的笑容，脸上的眼泪也依然如珠般从脸上低落',
  ]);
  era.println();
  await tachyon.say_and_wait([
    tachyon.get_colored_name(),
    ' 啊，其实，根本就不是那么厉害的',
    tachyon.get_uma_sex_title(),
  ]);
  await tachyon.say_and_wait([
    '不是什么为了可能性能够放弃一切的',
    tachyon.get_uma_sex_title(),
  ]);
  await tachyon.say_and_wait([
    '不是什么能够为了梦想而让心爱之人去死的',
    tachyon.get_uma_sex_title(),
  ]);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 一边摇头一边说道，',
    me.get_colored_name(),
    ' 想说些什么，却不知为何开不了口',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '……不，这么说或许也不对，应该说，',
    tachyon.sex,
    '曾经是这样的',
    tachyon.get_uma_sex_title(),
  ]);
  await tachyon.say_and_wait([
    '但是，就如刚刚所说的一样，被豚鼠君改变了的公主，已经知道了爱为何物，所以……',
    tachyon.sex,
    '再也做不到了',
  ]);
  await tachyon.say_and_wait([
    tachyon.get_colored_name(),
    '，说到底，也不过是个普通的',
    tachyon.get_child_sex_title(),
    '子罢了',
  ]);
  await tachyon.say_and_wait([
    '因此，',
    tachyon.sex,
    '会陷入爱河，会担心受怕，害怕自己喜欢的人是不是也喜欢自己……',
  ]);
  await tachyon.say_and_wait(
    '害怕自己喜欢的人，眼中看到的，会不会其实并不是自己',
  );
  era.println();
  await era.printAndWait([
    '从头到尾，「',
    callname,
    '」看见的，被迷上的，都是「',
    tachyon.get_colored_name(),
    ' 的跑法」、「',
    tachyon.get_colored_name(),
    ' 的梦想」',
  ]);
  await era.printAndWait(['那……', tachyon.get_colored_name(), ' 呢？']);
  await era.printAndWait(['不……', tachyon.get_colored_name(), '……是谁？']);
  era.println();
  await tachyon.say_and_wait('……啊，药效起效了啊…………原本还想再多说几句的');
  era.println();
  await era.printAndWait([
    '眼前的',
    tachyon.get_teen_sex_title(),
    '脸上的泪珠已经不再滑落，笑容却依然灿烂',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '…………不过吗，至少，没有被甩，换句话说最起码还没有被拒绝，',
  );
  await tachyon.say_and_wait('对吧？这样就够了……嗯，这样就够了，哈哈哈！');
  era.println();
  await era.printAndWait('哈哈哈哈哈');
  await era.printAndWait([
    tachyon.get_teen_sex_title(),
    '开怀大笑，',
    me.get_colored_name(),
    ' 看见',
    tachyon.sex,
    '大笑的模样，脑海中想到了某个身影……',
  ]);
  await era.printAndWait([
    '在自己喝下什么之后，「',
    tachyon.sex,
    '」似乎也总会看着自己哈哈大笑，',
  ]);
  await era.printAndWait([
    '「',
    tachyon.sex,
    '」叫什么名字？「',
    tachyon.sex,
    '」就是眼前的',
    tachyon.get_teen_sex_title(),
    '吗？',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '对不起啦，',
    callname,
    '，折腾了你这么久，最后一切却都化为了泡影…',
  ]);
  await tachyon.say_and_wait([
    '但请当作 ',
    tachyon.get_colored_name(),
    ' 最后的一次任性吧……下次，千万别再迷上这么麻烦的',
    tachyon.get_phy_sex_title(),
    '了',
  ]);
  era.println();
  await era.printAndWait([
    '「',
    tachyon.get_colored_name(),
    '」、「',
    callname,
    '」',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 拼命的想把这些似曾相似，有印象的名词记在脑海中，',
  ]);
  await era.printAndWait(
    '但大脑却彷佛被放进了滚筒洗衣机一般，记忆像污垢一样不断被洗刷干净',
  );
  await era.printAndWait([
    '就连眼前',
    tachyon.get_teen_sex_title(),
    '的模样，也如消失在晨曦中的泡沫一样虚幻',
  ]);
  era.setToBottom();
  await tachyon.say_and_wait(['晚安，', callname, ' ']);
  era.setToBottom();
  await era.printAndWait([
    '听见这句话后，',
    me.get_colored_name(),
    ' 的意识陷入深渊',
  ]);
  era.setToBottom();
  era.drawLine();
  await tachyon.say_as_unknown_and_wait('……醒');
  await tachyon.say_as_unknown_and_wait('………醒醒');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 醒来了']);
  await era.printAndWait([
    '被某个声音所唤醒的 ',
    me.get_colored_name(),
    '，发现自己睁开眼睛看见的是一个陌生的天花板',
  ]);
  era.printButton('这里是哪里？', 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait('……这里是我的实验室');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 看向声音传来的方向']);
  await era.printAndWait([
    '眼前是一名栗毛的',
    tachyon.get_uma_sex_title(),
    '，利落的短发以及身上的白大褂说明了',
    tachyon.sex,
    '研究者的身份，',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '用一种审视的眼光看着 ',
    me.get_colored_name(),
    '，不知为何，',
    me.get_colored_name(),
    ' 感到一股毛骨悚然',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait(
    '这个问题应该是我问你才对……你是什么人？为什么你会躺在我的实验室里？',
  );
  era.println();
  await era.printAndWait(['栗毛', tachyon.get_uma_sex_title(), '说道']);
  await era.printAndWait([
    '这时 ',
    me.get_colored_name(),
    ' 才发现自己还躺在地板上，连忙爬了起来',
  ]);
  era.printButton(`「我是${me.actual_name}，是一名训练员」`, 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait(
    '…………哦？那么训练员君，你躺在这里又有何贵干',
  );
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 试着回想在躺在这里前 ',
    me.get_colored_name(),
    ' 究竟在做什么，却怎么也想不出来',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait(
    '…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……',
  );
  await tachyon.say_as_unknown_and_wait([
    '算了，不提这个，总之，我是 ',
    tachyon.get_colored_name(),
    '，训练员君，请多指教',
  ]);
  era.println();
  await era.printAndWait([tachyon.get_colored_name()]);
  await era.printAndWait([
    '听见这个名字，',
    me.get_colored_name(),
    ' 的内心彷佛漏了一拍一样',
  ]);
  await era.printAndWait('明明应该没听过这个名字');
  await era.printAndWait(['明明应该不认识这名', tachyon.get_uma_sex_title()]);
  await era.printAndWait('但不知为何，却有种熟悉感');
  era.println();
  era.printButton('「我们……是不是在哪里见过？」', 1);
  await era.input();
  await tachyon.say_and_wait(
    '哦呀，这年头已经不流行这么老土的搭讪方式了哦，训练员君',
  );
  await era.printAndWait([
    tachyon.sex,
    '看着 ',
    me.get_colored_name(),
    ' 露出了恶作剧的笑容，',
    me.get_colored_name(),
    ' 连忙解释并非如此',
  ]);
  era.println();
  await tachyon.say_and_wait('开玩笑的……不知道为什么，我也有这种感觉');
  era.println();
  await era.printAndWait([
    '不知为何，身为训练员的直觉告诉 ',
    me.get_colored_name(),
    '，这名',
    tachyon.get_uma_sex_title(),
    '绝对能够跑出使 ',
    me.get_colored_name(),
    ' 震撼的跑法来，',
  ]);
  await era.printAndWait([
    '但同时，又有个画面在 ',
    me.get_colored_name(),
    ' 的脑海中不断浮现，似乎是这名叫做 ',
    tachyon.get_colored_name(),
    ' 的',
    tachyon.get_uma_sex_title(),
    '……',
  ]);
  await era.printAndWait('在不停索要便当的模样？？？');
  await era.printAndWait([
    '回过神时，',
    me.get_colored_name(),
    ' 已经向',
    tachyon.sex,
    '提出了签约',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '…………我说啊，一般会这么突然的就提出契约吗？这可是关系到',
    tachyon.get_uma_sex_title(),
    '一生的事情，你不觉得应该更认真点对待吗？',
  ]);
  era.printButton('「我有种感觉，我们一定会很合拍的」', 1);
  await era.input();
  await era.printAndWait([
    '当 ',
    me.get_colored_name(),
    ' 说完后，觉得一切都完了',
  ]);
  await era.printAndWait(
    '到底在想什么，虽然觉得对方有些即视感，但一般是不会这么突然提出签约的吧！！',
  );
  await era.printAndWait(
    '这下完蛋了，不但会被拒绝，说不定还会被狠狠嘲笑一番…………',
  );
  era.println();
  await era.printAndWait([
    '果不其然，名为 ',
    tachyon.get_colored_name(),
    ' 的',
    tachyon.get_uma_sex_title(),
    '听完后愣了下，然后哈哈大笑，接着……',
  ]);
  await tachyon.say_and_wait('可以哦');
  era.println();
  await era.printAndWait('看吧，果然………………');
  await era.printAndWait('？？？？？');
  await era.printAndWait([
    me.get_colored_name(),
    ' 忍不住带着满脸的问号看着对方',
  ]);
  await era.printAndWait(['只看', tachyon.sex, '擦了擦眼角笑出的泪水说道']);
  era.println();
  await tachyon.say_and_wait(
    '不知道为什么，我也有这种感觉……虽然这种感觉的源头究竟为何一定要查清，',
  );
  await tachyon.say_and_wait(
    '但我认为，你不是个坏人，在此之上，绝对会是个很有趣的人……',
  );
  await tachyon.say_and_wait('呵呵，所以，请多指教吧，训练员…………不，豚鼠君');
  era.println();
  await era.printAndWait('「豚鼠君」');
  await era.printAndWait([
    tachyon.sex,
    '忽然改口的称呼，让人感到有些莫名其妙，甚至有些害怕……',
  ]);
  await era.printAndWait([
    '毕竟豚鼠这个称呼，一般应该不算是什么好称呼吧，加上',
    tachyon.sex,
    '这一幅研究狂人的模样…………',
  ]);
  await era.printAndWait([
    '但除此之外，',
    me.get_colored_name(),
    ' 还感受到了一丝的亲切感',
  ]);
  era.printButton('「请多指教，爱丽速…………速子」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_actual_name(),
    ' 认识了 ',
    tachyon.get_colored_name(),
  ]);
  era.set('relation:32:0', 225);
  era.set('love:32', 25);
  life_marks.reset();
  await print_event_name('齿轮开始转动', tachyon);
  await time_return(tachyon, me);
  await stopped_clock(tachyon, me, era.set('callname:32:0', '豚鼠君'));
};
