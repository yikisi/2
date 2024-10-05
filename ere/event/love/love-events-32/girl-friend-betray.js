const era = require('#/era-electron');

const be_common = require('#/event/love/love-events-32/girl-friend-be-common');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonLifeMarks} life_marks
 */
module.exports = async (tachyon, me, callname, life_marks) => {
  await era.printAndWait([me.get_colored_name(), ' 忽然觉得累了']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 把药剂塞回 ',
    tachyon.get_colored_name(),
    ' 的手上',
  ]);
  era.println();
  await tachyon.say_and_wait(['…………', callname, '？']);
  era.printButton('「我累了，要喝你自己喝吧」', 1);
  await era.input();
  await era.printAndWait('是从什么时候开始的？原因是什么？');
  await era.printAndWait([
    '或许是 ',
    me.get_colored_name(),
    ' 再也受不了 ',
    tachyon.get_colored_name(),
    ' 这名',
    tachyon.get_uma_sex_title(),
    '的任性了',
  ]);
  await era.printAndWait([
    '或许是 ',
    me.get_colored_name(),
    ' 已经对 ',
    tachyon.get_colored_name(),
    ' 失去耐心了',
  ]);
  await era.printAndWait([
    '又或许 ',
    me.get_colored_name(),
    ' 觉得这只是',
    tachyon.sex,
    '又一次的玩笑而已',
  ]);
  await era.printAndWait([
    '说到底，因为',
    tachyon.sex,
    '的原因就想让自己去死，这个家伙在开什么玩笑啊',
  ]);
  era.println();
  await era.printAndWait([
    '总之，',
    me.get_colored_name(),
    ' 把药推还给了',
    tachyon.sex,
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 不在乎这种药是不是真的能致人于死地',
  ]);
  await era.printAndWait('不，要是真的制人于死地那或许也不错吧');
  await era.printAndWait([
    me.get_colored_name(),
    ' 的内心甚至产生了如此阴暗的想法',
  ]);
  era.println();
  await tachyon.say_and_wait('…………啊，这样啊……我明白了');
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 没有做出什么过于激烈的反应',
  ]);
  await era.printAndWait([
    '比起往常的',
    tachyon.sex,
    '，可说是异常的举止反而让 ',
    me.get_colored_name(),
    ' 提起了点兴致',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 看见终于抬起了头的',
    tachyon.sex,
    '，露出了一张释怀、解脱般的笑容',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '……说的也是，解决这个问题的答案，一直都不只两个啊',
  );
  await tachyon.say_and_wait(
    '在生与死之外，还存在着第三个选项，也就是让出题者去死，对吧？',
  );
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 忍不住皱起了眉头']);
  await era.printAndWait('废话好多，到底喝不喝');
  await era.printAndWait([
    '……不，说到底这个一向习惯灌别人药的',
    tachyon.get_phy_sex_title().substring(0, 1),
    '人',
  ]);
  await era.printAndWait('根本就没想过自己喝下药剂吧');
  await era.printAndWait([
    me.get_colored_name(),
    ' 叹了口气，感叹这又一场的闹剧，准备离开实验室',
  ]);
  era.drawLine();
  await era.printAndWait([
    '然后，在 ',
    me.get_colored_name(),
    ' 准备转身离开的瞬间',
  ]);
  era.println();
  await tachyon.say_and_wait('咕呜………！');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 被强吻了']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 想要挣扎，但人类终究还是敌不过',
    tachyon.get_uma_sex_title(),
    '的力量，即便是被药物改造过多次的 ',
    me.get_colored_name(),
    ' 也一样',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '的舌头撬开了 ',
    me.get_colored_name(),
    ' 的唇，在 ',
    me.get_colored_name(),
    ' 的口中不停搅拌，引导',
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
    '的目标是————将口中尚未咽下的，那足以使人「消失」的药物，引导至 ',
    me.get_colored_name(),
    ' 的口中',
  ]);
  era.println();
  await me.say_and_wait('咕呜……！呜呜呜………！！！');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 拼命挣扎，扭动身躯，却无法阻止对方的行为',
  ]);
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 徒劳无功的挣扎下，药剂还是被 ',
    me.get_colored_name(),
    ' 们两人平分干净了',
  ]);
  era.println();
  await me.say_and_wait('该死……！');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 忍不住大骂出声']);
  await era.printAndWait([
    '这个',
    tachyon.get_phy_sex_title().substring(0, 1),
    '在想什么，要死还要拖一个垫背的吗',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 恶狠狠的瞪着',
    tachyon.sex,
    '，马上就要破口大骂……却在话语要吐出的瞬间停住了',
  ]);
  era.println();
  era.println();
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), ' 哭了']);
  await era.printAndWait([
    '不……准确来讲，',
    tachyon.sex,
    '正流着泪水，也很努力的想要挤出笑容，但最终脸上露出的，却是张比哭还要难看的笑容',
  ]);
  await era.printAndWait([
    '这是 ',
    me.get_colored_name(),
    ' 认识',
    tachyon.sex,
    '以来，第一次看到',
    tachyon.sex,
    '如此狼狈的模样',
  ]);
  era.println();
  await tachyon.say_and_wait(['哈……哈哈哈，', callname, '，抱歉，我骗了你']);
  era.println();
  await era.printAndWait([
    tachyon.sex,
    '试图装出若无其事的口气来，但哽咽的声音却使得这一行为变得无比困难',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '这个啊，才不是什么毒药…………相反的，这是个『重新开始』的药哦',
  );
  era.println();
  await era.printAndWait([
    '虽然',
    tachyon.sex,
    '这么说，但',
    tachyon.sex,
    '依然举着试管的那只手，现在却在不住的颤抖着，使得 ',
    me.get_colored_name(),
    ' 无法信任',
    tachyon.sex,
    '的话语',
  ]);
  era.println();
  await era.printAndWait('…………不相信对吧？没关系，等到药效发作就知道了');
  era.println();
  await era.printAndWait('开什么玩笑……！');
  await era.printAndWait([
    me.get_colored_name(),
    ' 想这么喊出声，却发现自己的身体已经变得动弹不得',
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
    await era.printAndWait([
      me.get_colored_name(),
      ' 想起了情人节时收到的巧克力',
    ]);
    await era.printAndWait([
      '从那时开始，这名',
      tachyon.get_uma_sex_title(),
      '就不断的在用这些奇怪的药物折磨着自己',
    ]);
    await era.printAndWait('每次都看着自己喝下药物的反应哈哈大笑来取乐');
    await era.printAndWait('事到如今，不想再忍耐这一切的自己又有什么错了？');
  }
  await era.printAndWait([
    '确实，在一开始 ',
    me.get_colored_name(),
    ' 确实对 ',
    tachyon.get_colored_name(),
    ' 这名',
    tachyon.get_uma_sex_title(),
    '的跑法，及',
    tachyon.sex,
    '的梦想感到有趣',
  ]);
  await era.printAndWait([
    '确实，',
    me.get_colored_name(),
    ' 曾经真心希望能够帮助',
    tachyon.sex,
    '，守护',
    tachyon.sex,
    '，直到',
    tachyon.sex,
    '完成梦想为止',
  ]);
  await era.printAndWait(['但是，', me.get_colored_name(), ' 已经受够了']);
  await era.printAndWait([
    '对',
    tachyon.sex,
    '的愤怒、不满、沮丧、厌恶堆积起来的重量，已经超越了天平另一端对',
    tachyon.sex,
    '的期望、喜爱、憧憬',
  ]);
  era.println();
  await era.printAndWait([
    '现在的 ',
    me.get_colored_name(),
    ' 只是希望能够尽快摆脱这名',
    tachyon.get_uma_sex_title(),
    '，结果还得被灌这样的毒药，',
  ]);
  await me.say_and_wait(
    '我可没功夫跟你这种家伙玩罗密欧与朱丽叶的游戏啊！',
    true,
  );
  await era.printAndWait([
    '但说不出话的 ',
    me.get_colored_name(),
    ' 只能默默的听着 ',
    tachyon.get_colored_name(),
    ' 说完，最起码，用恶毒的视线盯着 ',
    tachyon.get_colored_name(),
    '，作为发泄不满的管道',
  ]);
  era.println();
  await tachyon.say_and_wait('说实话，我真的很害怕');
  await tachyon.say_and_wait(
    '喜欢一个人，却不知道对方是不是喜欢自己的感觉真的，好可怕',
  );
  await tachyon.say_and_wait(
    '比任何的实验结果都还要让人心潮澎湃，比任何的比赛结果都还要使人心跳加速',
  );
  await tachyon.say_and_wait('说实话，我真的很害怕');
  await tachyon.say_and_wait(
    '要是对方喜欢的不是自己，而只是自己所有的『某些东西』，',
  );
  await tachyon.say_and_wait(
    '那该怎么办。要是对方眼中看到的，只是自己的『梦想』，而非自己这个人怎么办',
  );
  await tachyon.say_and_wait(
    '我啊，一直都在担心着这些……却忘记了，最重要的事情，最恐怖的可能性',
  );
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 露出了嗤笑，嘲笑着太过天真、乐观的自己',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '对方，根本就不喜欢自己，不喜欢自己的一切，包括但不限于梦想的可能性',
  );
  era.println();
  await era.printAndWait([
    '终于，',
    tachyon.get_colored_name(),
    ' 脸上的笑容——如果那能够称为笑容的话——崩溃了',
  ]);
  await era.printAndWait('化为了彻底的哭脸');
  era.println();
  await tachyon.say_and_wait(
    '原来……这就是失恋的感觉啊……呜……好难受……好可怕……心好像要碎了一样……',
  );
  await tachyon.say_and_wait('原来是这样啊……我被甩了啊……好痛……我的心好痛……');
  await tachyon.say_and_wait(
    '为什么……为什么明明只是不被一个人喜欢……为什么心会这么难受……呜呜呜……我不要……',
  );
  await tachyon.say_and_wait(
    '不要啊……早知道会这么痛的话我就不要恋爱了啊……下一次，下一次……不要了……再也不要了……好痛……',
  );
  await tachyon.say_and_wait([
    callname,
    '……',
    callname,
    '……你在哪里……为什么我找不到你……你去哪里了……',
  ]);
  await tachyon.say_and_wait([
    '为什么我这么痛苦的时候你却不在我身边……',
    callname,
    '……我再也不拿你做实验了……都是我不好……所以……所以回来好不好……',
  ]);
  await tachyon.say_and_wait(
    '这里好可怕……带我回去，回去我们的实验室……我再也不会任性了……',
  );
  await tachyon.say_and_wait([
    '衣服会自己洗……便当盒吃完不会再到处乱丢了……',
    callname,
    '……',
    callname,
    '…………',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 看着 ',
    tachyon.get_colored_name(),
    '，从中途开始就彷佛忘掉了自己是谁一般',
  ]);
  await era.printAndWait([
    '明明眼中在看着自己，却还在一直喊着 ',
    callname,
    '，彷佛在寻找不属于此处的某人一样',
  ]);
  await era.printAndWait(['不……', callname, '……？']);
  await era.printAndWait([
    '这是谁？',
    me.get_colored_name(),
    ' 明明从来没听过这个名字不是吗？',
  ]);
  await era.printAndWait([
    '眼前的这名',
    tachyon.get_uma_sex_title(),
    '又是谁，自己认识',
    tachyon.sex,
    '吗',
  ]);
  era.println();
  await era.printAndWait('头痛，头痛，头痛欲裂');
  await era.printAndWait('越是思考，忘掉的就越多');
  era.println();
  await era.printAndWait([
    '终于，在一声声呼喊着 ',
    callname,
    ' 的悲鸣声中，',
    me.get_colored_name(),
    ' 的意识陷入了深渊',
  ]);
  era.setToBottom();
  await be_common(tachyon, me);
  await era.printAndWait([
    '听起来真是个奇怪的名字……嘛，毕竟',
    tachyon.get_uma_sex_title(),
    '的名字大多都是这样的，歧视他人的姓名也不好',
  ]);
  await era.printAndWait([
    '但不知为何，有种直觉在告诉 ',
    me.get_colored_name(),
    '，和眼前的这名',
    tachyon.get_uma_sex_title(),
    '要保持距离',
  ]);
  era.println();
  era.printButton(
    `「那么，今天就先到这里吧，非常抱歉闯进了你的实验室，日后我会再来致上歉意，${tachyon.name} 同学」`,
    1,
  );
  await era.input();
  await tachyon.say_and_wait('…………不，不必了，说到底两人同时失忆这种事情……');
  await tachyon.say_and_wait('算了，就这样吧，后面也不用特别过来了，训练员君');
  era.println();
  await era.printAndWait([
    '于是，',
    me.get_colored_name(),
    ' 离开了 ',
    tachyon.get_colored_name(),
    ' 的实验室',
  ]);
  await era.printAndWait([
    '在离开门之前，',
    me.get_colored_name(),
    ' 忽然回过了头',
  ]);
  era.println();
  await tachyon.say_and_wait('嗯？训练员君，还有什么事吗？');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 有种预感，要是自己踏出了这扇门，大概，就再也不会与这名',
    tachyon.get_uma_sex_title(),
    '有所交集了吧',
  ]);
  era.println();
  await me.say_and_wait('没什么，是我多心了吧');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 走出了实验室的门，这次没有丝毫犹豫',
  ]);
  await print_event_name('魔女之药', tachyon);
  era.set('relation:32:0', 0);
  era.set('love:32', 0);
  life_marks.reset();
  era.set('callname:32:0', '训练员君');
  if (era.get('flag:声望不足替换')) {
    era.set('flag:当前声望', 0);
  } else {
    era.set('flag:强制BE', 32);
  }
};
