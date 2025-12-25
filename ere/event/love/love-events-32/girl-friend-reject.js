const era = require('#/era-electron');

const be_common = require('#/event/love/love-events-32/girl-friend-be-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} _callname
 * @param {TachyonLifeMarks} life_marks
 */
module.exports = async (tachyon, me, _callname, life_marks) => {
  let callname = _callname;
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
    me.get_couple_title(),
    ' 不停地喘着气，',
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
  await be_common(tachyon, me);
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

  era.drawLine();
  const secretary = get_chara_talk(301),
    chairman = get_chara_talk(302);
  await print_event_name('时光倒流', tachyon);
  await era.printAndWait('仿佛顺理成章一般');
  await era.printAndWait([
    me.get_colored_name(),
    ' 和莫名有着熟悉感的栗毛',
    tachyon.get_uma_sex_title(),
    '———',
    tachyon.get_colored_name(),
    ' 签订了契约',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 想着必须要去登记契约才行，于是前去找了 ',
    secretary.get_colored_name(),
    ' 与 ',
    chairman.get_colored_name(),
  ]);
  await era.printAndWait([
    '…………为什么',
    secretary.sex,
    '们会以一种悲伤的眼神看着自己',
  ]);
  await secretary.say_and_wait('我能理解，又是那孩子的药吧……');
  await era.printAndWait('什么意思，那孩子是谁？');
  await chairman.say_and_wait([
    '节哀！相信 ',
    me.actual_name,
    ' 训练员一定会很快恢复记忆的',
  ]);
  await era.printAndWait([
    '这又是什么意思……',
    secretary.sex,
    '们知道 ',
    me.get_colored_name(),
    ' 失忆了？难道说 ',
    me.get_colored_name(),
    ' 失忆或发生同等级的意外其实是很常见的事吗？',
  ]);
  era.println();
  await era.printAndWait('不明所以……就当成这样吧');
  await era.printAndWait([
    '总之，',
    me.get_colored_name(),
    ' 与 ',
    tachyon.get_colored_name(),
    ' 的育成开始了！',
  ]);

  era.drawLine();

  callname = era.set('callname:32:0', 'trainer32');
  await print_event_name('停滞的时钟', tachyon);
  await tachyon.say_and_wait([
    '那么……首先就先来实验搭档上的磨合吧，',
    callname,
    '，要看好我的跑法啊，呵呵',
  ]);
  era.println();
  await era.printAndWait('果然……有什么不对劲');
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 的跑法，在看着',
    tachyon.sex,
    '奔跑的模样时察觉到了',
  ]);
  await era.printAndWait('明明跑的很快，明明是十分令人惊艳的跑法');
  await era.printAndWait(['但 ', me.get_colored_name(), ' 没有功夫去思考这些']);
  await era.printAndWait('没错，很快，很耀眼，但好象又不只这些');
  await era.printAndWait('好像……曾经见识过类似的跑法');
  await era.printAndWait([
    '仿佛水面的光源一般，在 ',
    me.get_colored_name(),
    ' 的脑海深处不断撩拨着，',
  ]);
  await era.printAndWait([
    '却总在 ',
    me.get_colored_name(),
    ' 努力游上水面的瞬间又消失的无影无蹤',
  ]);
  era.println();
  await me.say_and_wait('好奇怪……', true);
  era.println();
  await era.printAndWait([
    '正当 ',
    me.get_colored_name(),
    ' 苦恼的抓着头的时候………',
  ]);
  era.printButton('「！？」', 1);
  await era.input();
  await era.printAndWait('训练场上，忽然状况横生');
  await era.printAndWait([
    '说着只是让自己见识见识跑法的 ',
    tachyon.get_colored_name(),
    '，渐渐的，跑的越来越快',
  ]);
  await era.printAndWait('刚才那样……只是热身而已吗？');
  await era.printAndWait([
    '穿着普通体育服的 ',
    tachyon.get_colored_name(),
    '，在训练场上轻盈的奔跑着',
  ]);
  await era.printAndWait('越跑越快，越跑越快');
  await era.printAndWait([
    '不知为何，',
    me.get_colored_name(),
    ' 的心中忽然感到一阵急迫',
  ]);
  await era.printAndWait('一种焦急，以及一种迫切感');
  era.println();
  await era.printAndWait([
    '跑的这么快，',
    tachyon.get_colored_name(),
    ' ',
    tachyon.sex,
    '的腿，不会有问题吗？',
  ]);
  await era.printAndWait('……？为什么会有问题？');
  await era.printAndWait(['因为，', tachyon.sex, '的腿……']);
  await era.printAndWait([tachyon.sex, '的腿明明……那么脆弱']);
  await era.printAndWait(['为什么自己会知道', tachyon.sex, '的腿脆弱']);
  era.println();
  await era.printAndWait('不明白，但是，想要明白');
  await era.printAndWait([
    '想要搞清真相的迫切感驱使着 ',
    me.get_colored_name(),
    ' 不停思考',
  ]);
  await era.printAndWait([
    '仿佛衬托着 ',
    me.get_colored_name(),
    ' 思考的速度一般',
  ]);
  await era.printAndWait([tachyon.get_colored_name(), ' 也继续加速']);
  await era.printAndWait(['直到……', me.get_colored_name(), ' 的认知尽头']);
  await era.printAndWait('藏在脑海深处，最重要的东西');
  await era.printAndWait([tachyon.get_uma_sex_title(), '的极限速度']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 所知的，',
    tachyon.get_uma_sex_title(),
    '的极限',
  ]);
  await era.printAndWait(['————', tachyon.get_colored_name(), ' 的极限速度']);
  era.println();
  await era.printAndWait([
    '眼前的 ',
    tachyon.get_colored_name(),
    '，与脑海中那捉摸不定的光源渐渐结合在一起',
  ]);
  await era.printAndWait([
    '于是，',
    me.get_colored_name(),
    ' 最后一次尝试，朝着水面伸手',
  ]);
  await era.printAndWait('————————碰到了');
  await era.printAndWait('————————想起来了');
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '，是 ',
    me.get_colored_actual_name(),
    ' 的负责',
    tachyon.get_uma_sex_title(),
  ]);
  await era.printAndWait('回想起了相遇的事，比赛的事，还有……');
  era.println();
  await era.printAndWait('还有……？');
  await era.printAndWait('不知道');
  await era.printAndWait('忘记了');
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '，是自己的负责',
    tachyon.get_uma_sex_title(),
  ]);
  await era.printAndWait([
    me.get_colored_actual_name(),
    '，是 ',
    tachyon.get_colored_name(),
    ' 的豚鼠君',
  ]);
  await era.printAndWait('目前为止没有错误');
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), ' 在比赛中的点点滴滴']);
  await era.printAndWait([tachyon.sex, '跑步的每个细节自己都记得一清二楚']);
  await era.printAndWait('但是……');
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), ' 喜欢什么']);
  await era.printAndWait([tachyon.get_colored_name(), ' 的生活习惯']);
  await era.printAndWait([tachyon.get_colored_name(), ' 的兴趣']);
  await era.printAndWait([tachyon.get_colored_name(), ' 的生活打扮']);
  await era.printAndWait(
    '除了不知为何残留在脑海中，或许是与比赛管理相关而留下的饮食喜好相关，',
  );
  await era.printAndWait('其他的一切都仿佛从来没接触过一般');
  era.println();
  await era.printAndWait('不自然');
  await era.printAndWait('只能感到不自然');
  await era.printAndWait('认识了这么久，有过如此多的接触交流');
  await era.printAndWait(['对', tachyon.sex, '的比赛和跑法能够如此如数家珍']);
  await era.printAndWait([
    '却仍然好像对 ',
    tachyon.get_colored_name(),
    ' 这名',
    tachyon.get_uma_sex_title(),
    '没有任何了解一般',
  ]);
  era.println();
  await tachyon.say_and_wait(['呼……那么，豚鼠君，觉得如何？']);
  era.printButton('「跑的很好！」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    ' 下意识的回答了记忆中多次回覆过的答案',
  ]);
  await era.printAndWait('总觉得有些奇怪');
  await era.printAndWait('不理解到底发生了什么');
  await era.printAndWait('但是……');
  era.println();
  await era.printAndWait('在回忆起那些的瞬间');
  await era.printAndWait('心中很确信，一定听见了一句话');
  era.println();
  era.printButton(`「这一次，不要再辜负${tachyon.sex}的心意了」`, 1);
  await era.input();
  await era.printAndWait('究竟是什么意思呢……好好思考一下吧');
};
