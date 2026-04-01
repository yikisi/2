const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {number} relation
 * @param {number} love
 */
module.exports = async (tachyon, me, callname, relation, love) => {
  await print_event_name('第二次年度审核报告', tachyon);
  await era.printAndWait([
    '今年，就是与 ',
    tachyon.get_colored_name(),
    ' 的资深年了',
  ]);
  await era.printAndWait(
    '今年两人的目标……虽然先前没有明说，但果然，要以最强为目标的话，那两场比赛就是绝不可少的',
  );
  await era.printAndWait([
    '宝冢纪念和有马纪念啊……除此之外，大阪杯若是有机会的话也想参加',
  ]);
  era.println();
  await era.printAndWait([
    '能够赢下这三场比赛的话，应该就能抵达所谓',
    tachyon.uma_sex_title,
    '的极限了吧',
  ]);
  await era.printAndWait([
    '但是，',
    tachyon.get_colored_name(),
    ' 的目标不只在此，',
    tachyon.sex,
    '的目标是……超越极限',
  ]);
  await era.printAndWait('所以除了比赛之外，研究上的协助也不能忘了……');
  era.println();
  await tachyon.say_and_wait([callname, '，来的这么早啊？']);
  era.println();
  await era.printAndWait([
    '不知不觉，说好了今天一起来参拜的 ',
    tachyon.get_colored_name(),
    ' 也已经到了',
  ]);
  era.printButton(
    '「那当然！今年的资深战线，还有其他各式各样的事情……要许的愿太多了！」',
    1,
  );
  await era.input();
  if (love >= 75) {
    await tachyon.say_and_wait('这样啊……那么，有没有什么想向我许的愿呢？❤');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 用魅惑的眼神，带着暗示意味的询问 ',
      me.get_colored_name(),
    ]);
    era.print([
      '有没有什么，这一年希望能对 ',
      tachyon.get_colored_name(),
      ' 做的事……',
    ]);
    era.printButton('「希望能跟速子更多的sex」', 1);
    era.printButton('「希望速子的身体更加敏感」', 2);
    era.printButton('「希望被速子踩」', 3, { disabled: me.sex_code === 0 });
    era.printButton('「希望速子认真训练」', 4);
    switch (await era.input()) {
      case 1:
        await tachyon.say_and_wait('……色鬼，想做的话，回去再说吧');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 靠在 ',
          me.get_colored_name(),
          ' 耳边轻声说道',
        ]);
        break;
      case 2:
        await tachyon.say_and_wait([
          '这个嘛……吃药的话倒是很简单就能达到了，不过，还是希望 ',
          callname,
          ' 你能透过自己的手来让我变成你喜欢的样子呢❤',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 爬在 ',
          me.get_colored_name(),
          ' 肩上，惬意的说着',
        ]);
        break;
      case 3:
        await tachyon.say_and_wait([
          '居然许这种愿望……果然是变态啊，',
          callname,
        ]);
        era.println();
        await era.printAndWait([
          '虽然嘴上这样说着，但 ',
          tachyon.get_colored_name(),
          ' 却悄悄脱下了鞋，露出黑丝包裹的足底',
        ]);
        await era.printAndWait('今天为了参拜走了一整天，被酿窖入味的黑丝');
        era.println();
        await tachyon.say_and_wait('想要……被这样的双足踩吗？');
        await tachyon.say_and_wait(
          '想被压在脸上，让肺部被我足底的肮脏空气灌满吗？',
        );
        await tachyon.say_and_wait(
          '想要被踩着肉棒，直到整根肉棒都被我的足臭和你的先走汁弄得哪怕十米内都能闻到上面的气味吗？',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 狂热的望着 ',
          tachyon.get_colored_name(),
          '，答案不言自喻',
        ]);
        era.println();
        await tachyon.say_and_wait('……色鬼，想做的话，回去再说吧');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 靠在 ',
          me.get_colored_name(),
          ' 耳边轻声说道',
        ]);
        break;
      case 4:
        await tachyon.say_and_wait('……不解风情的家伙');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 无趣的切了一声']);
    }
  } else if (love >= 50) {
    await tachyon.say_and_wait('其他的愿望……比如呢？');
    era.println();
    era.print([
      tachyon.get_colored_name(),
      ' 饶有兴致的看着 ',
      me.get_colored_name(),
    ]);
    era.printButton('「希望……和速子的关系变得更好」', 1);
    era.printButton('「希望……与其他担当的关系变得更好」', 2);
    era.printButton('「希望……丝之歌今年能出！」', 3);
    switch (await era.input()) {
      case 1:
        await tachyon.say_and_wait('呵呵，我相信，一定会的❤');
        break;
      case 2:
        await tachyon.say_and_wait(
          '……特别讲其他担当故意想惹我生气？可惜，我是不会上这种当的',
        );
        era.println();
        await era.printAndWait([
          '虽然这么说，但 ',
          tachyon.get_colored_name(),
          ' 还是不高兴的鼓起了脸颊',
        ]);
        break;
      case 3:
        await tachyon.say_and_wait([
          '欸……那是什么东西……圣巢？空O骑士？……原来 ',
          callname,
          ' 你这么喜欢游戏吗？',
        ]);
    }
  } else if (relation <= 0) {
    await tachyon.say_and_wait(
      '呵，怪力乱神的东西都当成宝，想那种事还不如专心想想怎么帮助我的实验吧',
    );
  } else if (relation <= 225) {
    await tachyon.say_and_wait(
      '呵呵，虽然我不相信这种怪力乱神的东西，但姑且还是接受你的好意了',
    );
  } else {
    await tachyon.say_and_wait('是吗？那么，你的愿望必然会被实现');
    era.println();
    await era.printAndWait([
      '听见 ',
      tachyon.get_colored_name(),
      ' 的口气，',
      me.get_colored_name(),
      ' 有些意外',
    ]);
    await era.printAndWait([
      '原本以为对这种迷信的事',
      tachyon.sex,
      '大概就算不是嗤之以鼻，也不会认真对待吧',
    ]);
    await era.printAndWait([
      '然而',
      tachyon.sex,
      '的口气听起来却仿佛打从心底确信如此',
    ]);
    era.printButton('「速子……？」', 1);
    era.printButton('「你不是不信这些吗？」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '当然了，比起神明什么的，我更信任手上的研究……但是，比起研究，我更加信任的，是你',
    );
    era.println();
    await era.printAndWait([
      '准确来说，是 ',
      me.get_colored_name(),
      ' 做出的努力',
    ]);
    await era.printAndWait([tachyon.sex, '补充道']);
    era.println();
    await tachyon.say_and_wait(
      '你这一年所做的努力，必然能够受到回报，如果神明不给，那么就由我来给',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 自信满满的说道。取代神明的功能吗？真像 ',
      tachyon.get_colored_name(),
      ' 会说的话啊，不过……在神社里还是别这样讲比较好吧',
    ]);
  }
  era.drawLine();
  await era.printAndWait([
    '虽然过年的神社十分热闹，你们还是很快就结束了参拜的过程',
  ]);
  await era.printAndWait([
    '结束参拜后，',
    me.get_colored_name(),
    ' 和 ',
    tachyon.get_colored_name(),
    ' 讨论了今年度的计划',
  ]);
  era.println();
  await tachyon.say_and_wait('嗯……就像十一月那时谈论过的一样，没有问题');
  era.println();
  await era.printAndWait('比赛的事情简单的就过去了，接下来，才是今天的重头戏');
  era.println();
  if (
    new Array(5).fill(0).every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
  ) {
    await tachyon.say_and_wait([
      '极限……在我们的努力之下，我可以大胆说出现在的自己已经到达了极限……',
      tachyon.uma_sex_title,
      '的极限',
    ]);
  } else {
    await tachyon.say_and_wait(
      '极限……虽然目前还没达到，但坚持实验下去迟早能够达到，所以不成问题',
    );
  }
  era.println();
  await tachyon.say_and_wait('唯一的问题是……跨越极限');
  await tachyon.say_and_wait('而关于这个……现在的我，没有任何头绪');
  era.println();
  await era.printAndWait([
    '明明说的是毫无头绪，但 ',
    tachyon.get_colored_name(),
    ' 眼神中的骄傲却让人觉得仿佛',
    tachyon.sex,
    '刚说出的是已经想出黎曼猜想的解法一般的话语',
  ]);
  era.printButton('「毫无头绪……听起来真不妙呢」', 1);
  await era.input();
  await era.printAndWait('这下没办法了呢');
  await era.printAndWait('真的毫无头绪的话');
  era.println();
  await era.printAndWait('明明应该是十分令人烦恼的事，心情却感觉十分平和');
  await era.printAndWait('毫无头绪，那么，就得寻找头绪了吧');
  era.printButton('「那么速子，试试看把精力投注在比赛上吧？」', 1);
  era.printButton(
    `${tachyon.uma_sex_title}的极限，果然还是必须在赛场上才能突破吧`,
    2,
  );
  await era.input();
  await tachyon.say_and_wait([
    '……有一定道理，但我怎么觉得，这是 ',
    callname,
    ' 你在满足自己的私欲呢',
  ]);
  era.printButton('「毕竟速子说过，会让我看见更宽广的世界不是吗？」', 1);
  await era.input();
  await tachyon.say_and_wait(
    '呵呵，说的也是啊，那么继续吧，我们新一年的研究！',
  );
  era.println();
  era.print('那么，在开始研究前……');
  era.printButton('「先吃年糕吧」（体力+20%）', 1);
  era.printButton('「马上去训练吧」（随机属性+20）', 2);
  era.printButton('「回去研究吧」（技能点数+30）', 3);
  let ret = await era.input();
  switch (ret) {
    case 1:
      await era.printAndWait([
        '你们回到了 ',
        tachyon.get_colored_name(),
        ' 的实验室',
      ]);
      await era.printAndWait(['而后，你们做的第一件事……']);
      era.println();
      await tachyon.say_and_wait(
        '……虽然由我来这么说有点不对吧，但我们……明明才刚说了那样的话，现在却在干嘛啊',
      );
      era.println();
      await era.printAndWait('以前学生进行理科实验用的教室');
      await era.printAndWait([
        '现在正被 ',
        me.get_colored_name(),
        ' 用于进行热能释放及测量糯米合成物燃点的实验',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 围坐在作为实验仪器的烤炉边，享受着火炉的温暖',
      ]);
      await era.printAndWait([
        '洒水器？那种东西在以前被 ',
        tachyon.get_colored_name(),
        ' 用来于校园内散布大规模药剂实验时就已经被学生会下令强制拆除以免让 ',
        tachyon.get_colored_name(),
        ' 有接触机会了',
      ]);
      era.printButton('「差不多烤好了哦」', 1);
      era.printButton('「那，速子不吃吗？」', 2);
      await era.input();
      await tachyon.say_and_wait('当然吃');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 接过了 ',
        me.get_colored_name(),
        ' 烤好的糯米合成物——年糕，立马咬了下去，然后，不出 ',
        me.get_colored_name(),
        ' 所料的……',
      ]);
      era.println();
      await tachyon.say_and_wait('好烫！……呼呼');
      era.println();
      if (new TachyonLifeMarks().cook < 10) {
        await tachyon.say_and_wait('……没想到你做的还挺好吃的，出乎意料了');
      } else {
        await tachyon.say_and_wait('好烫……不过好吃，不愧是经过我锻炼的豚鼠');
      }
      era.println();
      await me.say_and_wait('为什么好像是自己的功劳一样啊……');
      era.println();
      await era.printAndWait(
        '不管怎么样，不管是实验研究，还是训练及比赛对策，改天做都行',
      );
      await era.printAndWait('难得的新年，还是好好享受一下这份平静吧');
      era.println();
      await era.printAndWait('速子笑了，然后轻轻咬了口年糕');
      await era.printAndWait([
        '最近不知道为什么，只要提到「明天」、「以后」，',
        tachyon.get_colored_name(),
        ' 的心情就会忽然转好',
      ]);
      await era.printAndWait([
        '感到好奇的 ',
        me.get_colored_name(),
        '，忍不住发问了',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', callname, '，我的脚……']);
      break;
    case 2:
      await era.printAndWait([
        '为了把握 ',
        tachyon.get_colored_name(),
        ' 难得有干劲的时间，',
        me.get_colored_name(),
        ' 立马和',
        tachyon.sex,
        '一起到了训练场',
      ]);
      await era.printAndWait([
        '看见',
        tachyon.sex,
        '在训练场上奔驰的模样，尽管已经是见过无数次的光景，',
        me.get_colored_name(),
        ' 还是忍不住陷入了沉迷',
      ]);
      await era.printAndWait('如光一般灿烂，如光一般眩目……如光一般，永恒');
      await era.printAndWait('以前那种奔跑起来时的虚幻感，不知何时已经不见');
      await era.printAndWait('失去了不安，剩下的是最纯粹的光');
      await era.printAndWait([me.get_colored_name(), ' 更深一层的陷入沉醉']);
      era.println();
      await tachyon.say_and_wait([callname, '？……', callname, '！']);
      era.println();
      await era.printAndWait([
        '不知不觉，连',
        tachyon.sex,
        '已经结束训练回到 ',
        me.get_colored_name(),
        ' 身边都没能发觉',
      ]);
      era.println();
      await tachyon.say_and_wait('在看我训练的时候还敢发呆……好胆子啊……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 连忙和',
        tachyon.sex,
        '解释了自己感受到的不同',
      ]);
      era.println();
      await tachyon.say_and_wait('……是吗');
      await tachyon.say_and_wait('其实……我自己也有一种奇怪的感觉');
      await tachyon.say_and_wait(['感觉在菊花赏后……我的腿……有种怪怪的感觉']);
      break;
    case 3:
      await tachyon.say_and_wait([
        callname,
        '，那根试管拿过来，不要晃到了，要是洒出来大概能把地板融化到一楼',
      ]);
      await tachyon.say_and_wait([
        callname,
        '，我现在手上有点忙，帮我点一下酒精灯然后把旁边那管药剂倒到坩埚煮到沸腾',
      ]);
      await tachyon.say_and_wait([
        '然后是……好，把这些染成咖啡色，放进 ',
        sys_get_colored_callname(32, 25),
        ' 的咖啡粉……',
        callname,
        '！你拿走干什么！',
      ]);
      await tachyon.say_and_wait(
        '戴一下口罩，等下的烟雾会有严重的昏睡效果，要是不好好做好防护的话大概能昏到周末吧',
      );
      await tachyon.say_and_wait([
        '这个……往里面再加点苹果汁和砂糖……药剂？不是，这是等一下 ',
        sys_get_colored_callname(32, 9),
        ' 来要给',
        tachyon.sex,
        '的饮料',
      ]);
      era.println();
      await era.printAndWait([
        '你们参拜完后便回到了 ',
        tachyon.get_colored_name(),
        ' 的实验室，今天的 ',
        tachyon.get_colored_name(),
        ' 状态无比的好',
      ]);
      await era.printAndWait([
        '不停的下达指令，除去某些太过奇怪的指令外，',
        me.get_colored_name(),
        ' 也完成了大部分',
        tachyon.sex,
        '交代的事，但……',
      ]);
      era.println();
      await tachyon.say_and_wait('没成功啊……啧，再多加点');
      await tachyon.say_and_wait('今天以内……必须做完二十二次临床测试');
      era.println();
      await era.printAndWait('一如既往急躁的实验效率，加上极佳的实验状态');
      await era.printAndWait('结果就是需要做的事情成倍的增加');
      era.printButton('「速子，不能休息一下吗」', 1);
      era.printButton('「不用这么急吧，明天再做也可以……」', 2);
      await era.input();
      await tachyon.say_and_wait('明天什么……');
      era.println();
      await era.printAndWait('想要训斥的话语说到一半忽然停下');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 仿佛被按了暂停键一般停下了手上的动作',
      ]);
      await era.printAndWait([
        '手上的药管眼看就要流出到地上，',
        me.get_colored_name(),
        ' 慌忙上去稳住了那管据说只要一滴就能腐蚀到一楼的药剂',
      ]);
      era.printButton('「速子！怎么了……！」', 1);
      era.printButton('「怎么忽然停住了！」', 2);
      await era.input();
      await tachyon.say_and_wait('…………哈哈');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 忽然笑了起来']);
      era.printButton('「脑子……终于坏掉了吗」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '……等会再跟你算帐，',
        callname,
        '……我只是在想',
      ]);
      era.println();
      await era.printAndWait('想什么？');
      era.println();
      await tachyon.say_and_wait('……我们真的，看见明天了呢');
      await era.printAndWait('明天？');
      await era.printAndWait('到底在说什么，难道真的是脑袋撞到了吗？');
      await era.printAndWait([
        '还是什么，天才跟疯子只有一线之隔所以 ',
        tachyon.get_colored_name(),
        ' 终于疯了吗？',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '总觉得你在想什么很失礼的事啊……就像你说的，明天再做，也不迟呢，呵呵',
      );
      await tachyon.say_and_wait('毕竟，接下来还有很多明天吧');
      era.printButton('「不管怎么样，明天总会到来的吧」', 1);
      era.printButton('「别想那么多了，总之明天再继续吧」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('是啊，不过……这么美好的明天真的……是第一次');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 喃喃说着什么听不懂的话',
        ]);
      } else {
        await tachyon.say_and_wait('呵呵，当然，明天再继续吧，嗯，明天');
        era.println();
        await era.printAndWait([
          '哪怕被 ',
          me.get_colored_name(),
          ' 扫了兴 ',
          tachyon.get_colored_name(),
          ' 还是一副高兴的模样',
        ]);
      }
      era.println();
      await era.printAndWait([
        '不知道为什么，听到「明天」之后，',
        tachyon.get_colored_name(),
        ' 的心情忽然变得很开心的样子',
      ]);
      await era.printAndWait([
        '感到好奇的 ',
        me.get_colored_name(),
        '，忍不住发问了',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', callname, '，我的脚……']);
  }
  era.printButton('怎么了！', 1);
  era.printButton('有哪里不对吗！', 2);
  await era.input();
  await tachyon.say_and_wait([
    '……呵呵，别那么紧张，我是想说，我的脚……在菊花赏之后，感觉忽然稳定了许多',
  ]);
  era.println();
  await era.printAndWait('稳定了许多，这……不是好事吗？');
  await era.printAndWait('欸，意思是，现在应该恭喜吗？');
  await era.printAndWait([
    '展开过度突然的话题，使 ',
    me.get_colored_name(),
    ' 陷入迷茫，不理解',
    tachyon.sex,
    '忽然提到这个的原因',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '……这是我人生中第一次，可以抛弃对腿脚的担心专注于一件事上……',
  );
  await tachyon.say_and_wait(
    '就仿佛，可以理所当然的一直跑下去，哪怕跑到天涯海角',
  );
  await tachyon.say_and_wait(
    '所以……只要一想到明天，未来……这种对一般人来说最理所当然的事，我也会有种……',
  );
  await tachyon.say_and_wait(
    '怎么说呢……按你说的，我确实表现出了喜悦的感情来，',
  );
  await tachyon.say_and_wait('不过，是因为能够专心于研究的喜悦吗？');
  await tachyon.say_and_wait('……唔，好像又不太是……值得探讨');
  era.println();
  await era.printAndWait(['听到这，', me.get_colored_name(), ' 忽然灵光一闪']);
  era.printButton('「难道，不是因为可以毫无顾虑的跑步了吗？」', 1);
  era.printButton('「难道，不是因为可以自由自在的跑步了吗？」', 2);
  await era.input();
  await tachyon.say_and_wait([
    '唔……',
    callname,
    '，我的意思不就是这样吗？我不理解你再说一次的理由',
  ]);
  era.printButton('「不是实验，而是跑步本身」', 1);
  await era.input();
  await tachyon.say_and_wait([
    '……你的意思是，我是因为喜欢跑步，可以自由自在的跑步了，所以感到高兴？',
  ]);
  era.println();
  await era.printAndWait([
    '啊……果然，',
    tachyon.get_colored_name(),
    ' 的话应该很难接受的吧',
  ]);
  await era.printAndWait('毕竟要承认纯粹理智的自己喜欢某种东西……');
  await tachyon.say_and_wait('这……');
  era.println();
  await me.say_and_wait('这？');
  era.println();
  await tachyon.say_and_wait('这不是很有趣的可能性吗！');
  era.println();
  await era.printAndWait('…………欸？');
  era.println();
  await tachyon.say_and_wait([
    '对跑步本身感兴趣……感觉，是个很有意思的课题啊！',
    callname,
    '！接下来的研究就决定是这个了！',
  ]);
  era.println();
  await era.printAndWait('研，研究什么？');
  era.println();
  await tachyon.say_and_wait('那还用说！当然是对跑步的『喜欢』了！');
  era.println();
  await era.printAndWait('研究……喜欢？');
  await era.printAndWait([
    '没等 ',
    me.get_colored_name(),
    ' 回过神来，兴奋中的 ',
    tachyon.get_colored_name(),
    ' 继续说道',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '我有一种预感……突破极限的可能性，就在这个上了！接下来的目标就定为研究这个吧！',
  );
  era.println();
  await era.printAndWait([
    '听 ',
    tachyon.get_colored_name(),
    ' 这么说，',
    me.get_colored_name(),
    ' 也冷静了下来，开始思考利弊',
  ]);
  await era.printAndWait([
    '如果是真的，那么无论如何也要帮助 ',
    tachyon.get_colored_name(),
    ' 达成目标',
  ]);
  await era.printAndWait([
    '如果只是错觉的话……那么 ',
    tachyon.get_colored_name(),
    ' 开始享受起跑步，这本身对 ',
    me.get_colored_name(),
    ' 而言也不是什么坏事',
  ]);
  await era.printAndWait(
    '为了研究而跑和为了自己喜欢而跑，怎么想都是后者更好吧',
  );
  era.println();
  await era.printAndWait(
    '所以，除了某个难题外，可以说这是百利而无一害的决定……',
  );
  await era.printAndWait([
    '思考清楚后，',
    me.get_colored_name(),
    ' 对 ',
    tachyon.get_colored_name(),
    ' 点了点头',
  ]);
  era.printButton('「就以这个为目标吧！」', 1);
  await era.input();
  await era.printAndWait('百利而无一害的决定，只要除去最大的难题');
  await era.printAndWait('那么，究竟该如何研究「感情」呢？加油吧，豚鼠！');
  return ret;
};
