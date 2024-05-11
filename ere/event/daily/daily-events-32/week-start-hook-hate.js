const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,number)>} handlers */
module.exports = (handlers) => {
  handlers.cook01 = async (tachyon, me) => {
    await era.printAndWait([
      '午休时间，不知为何 ',
      tachyon.get_colored_name(),
      ' 故意将',
      tachyon.sex,
      '的那台搅拌机摆在实验桌上，将功率调到最大，发出了极大的声音开始打',
      tachyon.sex,
      '的「午餐」',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 忽然想到，',
      me.get_colored_name(),
      ' 上周似乎因为太忙导致忘记给',
      tachyon.sex,
      '做便当了……这周一定要记得啊',
    ]);
  };

  handlers.cook02 = async (tachyon, me, callname) => {
    await tachyon.say_and_wait([
      callname,
      '，相信你也知道为山九韧，功亏一篑的道理，',
    ]);
    await tachyon.say_and_wait(
      '换句话说，行百里者半九十，只有坚持不懈的人才能获得成功，',
    );
    await tachyon.say_and_wait(
      '在赛场的世界也是如此，属性会拉、技能会鸽，但你在养马过程中学到的知识不会欺骗你，',
    );
    await tachyon.say_and_wait(
      '没错，支持卡比别人差又怎么样，6R也能养出SS等级的马出来，一切都只是努力和坚持的问题……',
    );
    era.println();
    await era.printAndWait([
      '今天一进入训练员室，',
      tachyon.get_colored_name(),
      ' 就开始说些不明所以的长篇大论',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '也就是说，我想说的是…………努力这点，在做饭上也是一样的',
    );
    era.println();
    await era.printAndWait([
      '听见这句后，',
      me.get_colored_name(),
      ' 才忽然反应了过来，原来如此，这两周在忙的事情实在太多，',
      me.get_colored_name(),
      ' 又一次忘记了，不行，这次一定要记得……',
    ]);
  };

  handlers.cook03 = async (tachyon, me, callname) => {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '今天一来到实验室 ',
      me.get_colored_name(),
      ' 就发觉 ',
      tachyon.get_colored_name(),
      ' 的心情非常不好，而且，',
      me.get_colored_name(),
      ' 知道原因为何',
    ]);
    era.println();
    await era.printAndWait(['原因在 ', me.get_colored_name()]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 已经三周没有给 ',
      tachyon.get_colored_name(),
      ' 做过饭了',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 慌忙向',
      tachyon.sex,
      '表示，自己这几周真的很忙，抽不出任何时间来做……这种连 ',
      me.get_colored_name(),
      ' 自己听了都不信的谎言',
    ]);
    await era.printAndWait([
      '或是纯粹忘记，或是把时间都用在培育其他',
      tachyon.get_uma_sex_title(),
      '上了，',
    ]);
    await era.printAndWait(
      '或是单纯想看看到底还有多少不同的台词，「你」的时间要多少就有多少',
    );
    await era.printAndWait([
      '但此时，',
      me.get_colored_name(),
      ' 还是只能讲着这种蹩脚的借口来请求原谅',
    ]);
    era.println();
    await tachyon.say_and_wait('…………没什么需要我原谅的');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 瞄了 ',
      me.get_colored_name(),
      ' 一眼后说道',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '这也是属于你的一种可能性，也是一个很好的研究样本，我不会否定你的努力，',
    );
    await tachyon.say_and_wait(
      '同理，我也不会唾弃你的怠惰，无论如何都是你自己做出的选择，与我没有任何一点关系',
    );
    era.println();
    await era.printAndWait('是啊，硬要说的话');
    await era.printAndWait([
      tachyon.sex,
      '终于回过头，这是',
      tachyon.sex,
      '今天以来第一次看着 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([tachyon.sex, '的眼神没有失望、厌恶，或是生气']);
    await era.printAndWait(
      '而是一种难以言喻的感情，如果真的要用一种感情来形容的话，那大概是————无聊',
    );
    era.println();
    await tachyon.say_and_wait('你的可能性，也就只有这种程度而已啊');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '以看待没能达成实验目标的实验动物一般的眼神看着 ',
      me.get_colored_name(),
      '，然后，开口说道',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '继续努力提升你的价值吧，',
      callname,
      '……不然，要是哪天我无聊了说不定就把你抛弃了',
    ]);
    era.println();
    sys_like_chara(32, 0, -600) && (await era.waitAnyKey());
  };

  handlers.cook11 = async (tachyon, me) => {
    await tachyon.say_and_wait('唔……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 今天看起来有些浮躁的样子',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 紧张的问',
      tachyon.sex,
      '发生什么事了',
    ]);
    era.println();
    await tachyon.say_and_wait('…………哼，没什么');
    era.println();
    await era.printAndWait([tachyon.sex, '赌气般的说了没事']);
    await tachyon.say_and_wait('咕～～～～');
    await era.printAndWait([
      '就在此时，非常凑巧的，',
      tachyon.sex,
      '的肚子发出了响亮的一声',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await me.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 忽然想起，',
      me.get_colored_name(),
      ' 上周似乎完全忘记给',
      tachyon.sex,
      '做便当了',
    ]);
    await era.printAndWait('难道说……');
    era.println();
    await tachyon.say_and_wait(
      '…………反正，食物只用维持最基本的活动所需能量就够了',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '仍在嘴硬着，',
      me.get_colored_name(),
      ' 连忙向',
      tachyon.sex,
      '道歉并答应今天一定不会忘记了',
    ]);
  };

  handlers.cook12 = async (tachyon, me, callname) => {
    await tachyon.say_and_wait(['哼，', callname, '，今天的药来了']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 忽然闯进了训练员室，给 ',
      me.get_colored_name(),
      ' 灌了瓶颜色奇怪——不，这点而言可以说是一如往常——的药',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 喝下去后没过多久便陷入了睡眠',
    ]);
    await era.printAndWait([
      '在睡梦中，',
      me.get_colored_name(),
      ' 彷佛正行走在沙漠之中，已经几天几夜没吃没喝了，',
    ]);
    await era.printAndWait([
      '忽然画面一转，在梦中，',
      me.get_colored_name(),
      ' 被不知道谁不停的塞着被打成烂泥的营养素，虽然觉得难以下咽，',
    ]);
    await era.printAndWait([
      '但想到先前在沙漠的梦境，',
      me.get_colored_name(),
      ' 还是不得不将其吞了下去…………',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 从梦中惊醒，眼前是 ',
      tachyon.get_colored_name(),
      ' 那得意的脸庞',
    ]);
    era.println();
    await tachyon.say_and_wait(['怎么，做恶梦了吗？', callname]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 苦笑一声，大概知道这个药的意思了，连忙保证这周一定会记得 ',
      tachyon.get_colored_name(),
      ' 的便当',
    ]);
  };

  handlers.cook13 = async (tachyon, me, callname) => {
    await era.printAndWait([
      '今天一早 ',
      me.get_colored_name(),
      ' 来到学园时便发现了不对劲',
    ]);
    await era.printAndWait('整个学园都被一种浮躁的气氛所包围');
    await era.printAndWait(
      '这种气氛到了午休时间增长到了极限，在午餐时间的食堂爆发到了极限',
    );
    era.println();
    await say_by_passer_by_and_wait('路人训练员A', [
      '所有',
      tachyon.get_uma_sex_title(),
      '都开始暴走了！',
      tachyon.sex,
      '们不知道为什么忽然开始缠着自己的训练员要便当！',
    ]);
    await say_by_passer_by_and_wait('路人训练员A', [
      '不是亲手做的就不行！天杀的，',
      tachyon.sex,
      '们到底是怎么分辨出便当是不是训练员做的！',
    ]);
    era.println();
    await era.printAndWait([
      '某龙套训练员不知为何在闯进训练员室后彷佛在解说现状般的说完了上述那些后，被门外闯入的他的负责',
      tachyon.get_uma_sex_title(),
      '拖了出去',
    ]);
    era.printButton('「到，到底……怎么回事……」', 1);
    await era.input();
    await tachyon.say_and_wait('哦呀，有人问怎么回事了吗？');
    await era.printAndWait([
      '忽然，从 ',
      me.get_colored_name(),
      ' 身后传来了一个熟悉的声音，然而 ',
      me.get_colored_name(),
      ' 甚至不知道',
      tachyon.sex,
      '是什么时候闯进训练员室来的',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '既然你诚心诚意的发问了，那我就大发慈悲的告诉你',
    );
    await tachyon.say_and_wait([
      '为了贯彻',
      tachyon.get_uma_sex_title(),
      '与便当的邪恶，可爱又迷人的疯狂科学家',
    ]);
    await tachyon.say_and_wait([
      '太长了以下省略，总之就是我爱丽速子。好啦，',
      callname,
      '，乖乖把便当交出来吧',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 靠在 ',
      me.get_colored_name(),
      ' 坐着的椅子椅背上，朝着坐在椅子上的 ',
      me.get_colored_name(),
      ' 低下头，露出了一副侵略性极强的笑容',
    ]);
    era.printButton('「你又干了什么」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '哦呀，真过分，怎么这就怀疑到我身上了，说不定我也是受害者呢',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '用可怜兮兮的语气说道']);
    era.printButton('「因为你刚刚自己承认了」', 1);
    await era.input();
    await tachyon.say_and_wait('欸……好像，确实有这么回事啊');
    await era.printAndWait('那种小细节别在意啦');
    await era.printAndWait([tachyon.sex, '挥了挥袖子说道']);
    era.println();
    await tachyon.say_and_wait(['重点是，', callname, '，把你的便当交出来吧']);
    era.printButton('「你以为用这种强迫的方式我会乖乖就范吗？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………呵呵，当然了，最终你必然会乖乖将便当奉上的',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 露出了神秘的笑容，',
      me.get_colored_name(),
      ' 不由自主的感到有些心虚',
    ]);
    await era.printAndWait([
      '今天 ',
      me.get_colored_name(),
      ' 确实做了 ',
      tachyon.get_colored_name(),
      ' 的便当，但今天工作太忙，一不小心真的忘记了',
    ]);
    await era.printAndWait(
      '但不管怎么说，绝对不能在这里让步，这是为了身为训练员的尊严！是为了自由！为了……',
    );
    era.println();
    await get_chara_talk(302).say_and_wait([
      '宣布！由于某种未知因素的影响，学园内所有',
      tachyon.get_uma_sex_title(),
      '陷入了对训练员亲手制作便当的不明执着，',
    ]);
    await get_chara_talk(302).say_and_wait([
      '请各位训练员立刻开始制作自己爱马的便当，不会做饭的训练员可向秘书长、家政教师和吃完自己训练员制作的便当的 ',
      get_chara_talk(21).get_colored_name(),
      '、',
      get_chara_talk(12).get_colored_name(),
      ' 或 ',
      get_chara_talk(28).get_colored_name(),
      ' 寻求协助',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '看着满脸得意的 ',
      tachyon.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 不由得露出苦笑',
    ]);
    await era.printAndWait([
      '果然还是赢不过',
      tachyon.sex,
      '啊，',
      me.get_colored_name(),
      ' 只能乖乖的交出了便当',
    ]);
    const life_marks = new TachyonLifeMarks();
    life_marks.l_cook = era.get('flag:当前回合数');
  };

  handlers.cook21 = async (tachyon, me, callname) => {
    await era.printAndWait([
      '午休时间，当 ',
      me.get_colored_name(),
      ' 正在打数据，训练员室的门被撞开了',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '！我的饭呢！快点快点！']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 一闯进来，就扑上了桌子开始不停滚动',
    ]);
    era.println();
    await era.printAndWait('危险危险');
    await era.printAndWait([
      me.get_colored_name(),
      ' 连忙把桌上的计算机收起，避免被 ',
      tachyon.get_colored_name(),
      ' 撞掉到地上',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '！你已经一周没给我做便当了！我都快饿死了，快点，我的便当呢！',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 甩着袖子，生气的在 ',
      me.get_colored_name(),
      ' 面前跺着脚，吹弹可破的脸颊彷佛河豚一般鼓了起来，虽然说',
    ]);
    era.printButton('「不是给你做了吗？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      new TachyonLifeMarks().cook < 20
        ? '那种一看就没用心做的能叫便当吗！？'
        : '虽然吃不出差别……但有种直觉告诉我你是敷衍着做的',
    );
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('你现在在想『这个家伙好麻烦啊』对吧？');
    await me.say_and_wait('……');
    await me.say_and_wait('怎么被猜到了', true);
    era.println();
    await tachyon.say_and_wait('总之明天一定要看到便当！不然你一定会后悔的');
  };

  handlers.cook22 = async (tachyon, me, callname) => {
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 已经两周没有对 ',
      me.get_colored_name(),
      ' 做任何实验了',
    ]);
    await era.printAndWait([
      '第一周说实话，',
      me.get_colored_name(),
      ' 完全没有任何不舍，甚至还挺高兴的，',
    ]);
    await era.printAndWait([
      '毕竟每天都还是能看见 ',
      tachyon.get_colored_name(),
      '，一切都很正常，只是',
      tachyon.sex,
      '不会对 ',
      me.get_colored_name(),
      ' 做实验了而已',
    ]);
    await era.printAndWait([
      '但第二周 ',
      me.get_colored_name(),
      ' 开始有些感到不对劲，斯德哥尔摩症候群……',
    ]);
    await era.printAndWait([
      '倒也不是如此，只是担心',
      tachyon.sex,
      '的状况，以及某种不祥的预感',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 到了',
      tachyon.sex,
      '的实验室前，敲了敲门，门内没有回复',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 感觉事态不妙，直接闯了进去',
    ]);
    era.println();
    await era.printAndWait([
      '明明看上去像是 ',
      tachyon.get_colored_name(),
      '，却不知为何变成了两头身，变成了某种看上去有些可爱的生物，',
    ]);
    await era.printAndWait(
      '背后的尾巴变得比较圆润肥大，看上去就像……狸猫的尾巴？',
    );
    await era.printAndWait([
      '欸？？怎么回事？？这个是 ',
      tachyon.get_colored_name(),
      ' 吗？？？',
    ]);
    era.println();
    await era.printAndWait('…………原来如此');
    await era.printAndWait([me.get_colored_name(), ' 完全理解了一切']);
    await era.printAndWait(
      '没有错，那些来路不明的药剂，看待实验品的非人态度，还有现在总算露出的尾巴',
    );
    await era.printAndWait([
      '没错，',
      tachyon.get_colored_name(),
      ' 从一开始就是狸猫变的！',
    ]);
    era.println();
    await era.printAndWait('…………不，先把这种错乱下的胡思乱想推到一旁吧');
    await era.printAndWait(
      '不知为何周围开始响起了奇怪的BGM，似乎是アメリアの遗言，十分美妙的音乐，与此时凄凉的场景形成了鲜明的对比',
    );
    await era.printAndWait([
      '慌忙之下，',
      me.get_colored_name(),
      ' 想到了之前 ',
      tachyon.get_colored_name(),
      ' 说过关于便当的事，连忙拿出原本留给自己的便当',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '？你在干嘛呢？']);
    await era.printAndWait([
      '清醒过来的 ',
      tachyon.get_colored_name(),
      ' 瞬间变回了原来的样子，只有空荡的便当盒证明了刚才发生的一切',
    ]);
    await era.printAndWait([
      '并非梦境……总之，以后还是记得给 ',
      tachyon.get_colored_name(),
      ' 做便当吧',
    ]);
    const life_marks = new TachyonLifeMarks();
    life_marks.l_cook = era.get('flag:当前回合数');
  };

  handlers.hate = async (tachyon, me, callname) => {
    await era.printAndWait([
      '忽然，',
      tachyon.get_colored_name(),
      ' 吻住了 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([
      '一股热流，在 ',
      me.get_couple_title(),
      ' 的口间传递，被两人饮下热流顺着 ',
      me.get_colored_name(),
      ' 的喉咙向下',
    ]);
    await era.printAndWait('热流流过的地方瞬间产生了灼烧感');
    era.println();
    await tachyon.say_and_wait(['痛吗？', callname]);
    await tachyon.say_and_wait(
      '我也好痛……虽然是我自己做的药，但没想到威力居然这么强啊',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 脸上带笑，眼神中却没有笑意',
    ]);
    era.println();
    await tachyon.say_and_wait('我不会责怪你……毕竟，是被骗的人自己不好');
    await tachyon.say_and_wait('这是对你，同时也是对我识人不清的惩罚');
    await tachyon.say_and_wait(
      '也不会要求你离开……虽然很不想承认，但即便发生了这样的事，我也还是不希望你离开我',
    );
    await tachyon.say_and_wait([
      '所以，我亲爱的 ',
      callname,
      '……接下来的余·生，请让我们一起互相折磨下去吧？',
    ]);
  };
};
