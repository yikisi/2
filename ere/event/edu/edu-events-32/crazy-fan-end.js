const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function common(tachyon, me) {
  await tachyon.say_and_wait('……是啊，好好睡吧，我会陪在你身边的');
  era.drawLine();
  await tachyon.print_and_wait('豚鼠君安详的闭上了眼睛');
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    ' 没有哭泣，因为……已经不是第一次了',
  ]);
  era.println();
  await tachyon.print_and_wait('与豚鼠君的分离');
  await tachyon.print_and_wait('第一次，是那天在商店街');
  await tachyon.print_and_wait('要是自己没有离开的话');
  await tachyon.print_and_wait(['要是有强硬的把', me.sex, '留在身边的话']);
  await tachyon.print_and_wait('要是……');
  await tachyon.print_and_wait('没有要是');
  era.println();
}

module.exports = async () => {
  if (era.get('love:32') < 75) {
    throw new Error();
  }
  const me = get_chara_talk(0),
    t_call_c = sys_get_colored_callname(32, 25),
    tachyon = get_chara_talk(32);
  await tachyon.say_and_wait('醒醒');
  await tachyon.say_and_wait('醒醒');
  await tachyon.say_and_wait('求求你……醒过来吧');
  era.drawLine();
  await era.printAndWait('我是谁');
  era.println();
  await tachyon.say_and_wait('你是……豚鼠君，是我的专属训练员');
  era.println();
  await era.printAndWait('……你是谁？');
  era.println();
  await tachyon.say_and_wait([
    '……我是 ',
    tachyon.get_colored_name(),
    '，是你的负责',
    tachyon.get_uma_sex_title(),
  ]);
  await era.printAndWait('…………');
  era.println();
  await tachyon.say_and_wait('……你，还记得吗？');
  await era.printAndWait('…………');
  await tachyon.say_and_wait([
    '不……不要不说话啊，你还记得我吧？记得吗？这里是特雷森学园里我们的实验室，那边是 ',
    t_call_c,
    ' 的地盘……',
  ]);
  era.println();
  if (new TachyonEduMarks().plan_b) {
    await era.printAndWait('……对不起');
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 摇了摇头']);
    await era.printAndWait([
      '眼前的',
      tachyon.get_teen_sex_title(),
      '……虽然不知道为什么，给人一种熟悉的感觉',
    ]);
    await era.printAndWait('但自己确实，一点也不认识');
    era.println();
    await tachyon.say_and_wait(
      '……没关系，失忆也是一种……一种可能性……只要再把记忆找回来就好了',
    );
    era.println();
    await era.printAndWait('……可能性');
    await era.printAndWait('这个词，似乎唤醒了烂泥中的一些灵光');
    await era.printAndWait('然而……');
    await era.printAndWait('灵光，总是只能乍现的');
    era.println();
    await era.printAndWait('不知道');
    await era.printAndWait('越思考脑袋空白的地方越多');
    await era.printAndWait('但是，还是得努力去回忆');
    await era.printAndWait('祈祷能够翻到刚刚闪过的灵光');
    await era.printAndWait('理由只有一个');
    await era.printAndWait([
      '虽然不认识眼前名为 ',
      tachyon.get_colored_name(),
      ' 的',
      tachyon.get_teen_sex_title(),
    ]);
    await era.printAndWait([
      '但潜意识在喊着，不能让',
      tachyon.sex,
      '受伤，不要让',
      tachyon.sex,
      '悲伤',
    ]);
    era.println();
    await era.printAndWait([
      '因此，在',
      tachyon.sex,
      '提出稍微看看四周，尝试回忆一下的建议时',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 没有拒绝']);
    await era.printAndWait([
      '只是跟着',
      tachyon.sex,
      '，在校园（按',
      tachyon.sex,
      '所说应该是如此）里走着',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '豚鼠君……你看，这边是训练场，我们就是在这里相遇的',
    );
    era.println();
    await era.printAndWait('相遇……吗？');
    era.println();
    await tachyon.say_and_wait(
      '没错，虽然当时的我并没有真正看到你就是……是你和我说的',
    );
    era.println();
    await era.printAndWait('这样吗……');
    await era.printAndWait('那么，当时的自己，一定是被速子的跑法给迷住了吧');
    era.println();
    await tachyon.say_and_wait('！……你，你想起来了吗！');
    era.println();
    await era.printAndWait('……对不起');
    await era.printAndWait('只是，某种感觉……觉得速子，要是跑起来一定会很漂亮');
    era.println();
    await tachyon.say_and_wait(
      '………是啊，你说过很多次……虽然我自己是看不出来，明明只是普通的跑步而已，到底有什么让人着迷的',
    );
    era.println();
    await era.printAndWait('……不');
    await era.printAndWait(
      '其他人可能是这样，但速子的跑法……我有感觉，一定能让自己着迷',
    );
    era.println();
    await tachyon.say_and_wait('……这样啊，那，要不要看我跑一次看看呢？');
    era.println();
    await era.printAndWait('！可以吗！');
    await era.printAndWait('但是……速子的脚……');
    era.println();
    await tachyon.say_and_wait('……你，你还记得吗？');
    era.println();
    await era.printAndWait('……');
    era.println();
    await era.printAndWait('沉默就是最好的回答');
    await era.printAndWait([
      '要是在此时欺骗',
      tachyon.sex,
      '，说自己已经想起来了的话',
    ]);
    await era.printAndWait([tachyon.sex, '肯定会很开心的吧']);
    await era.printAndWait(['但是……那样欺骗', tachyon.sex, '，真的好吗？']);
    era.println();
    await era.printAndWait('不知道为什么，心中的声音又开始高喊');
    await era.printAndWait(['不要「再」欺骗', tachyon.sex, '了']);
    await era.printAndWait('不要「再」欺骗自己了');
    await era.printAndWait('……为什么是再呢？');
    era.println();
    await tachyon.say_and_wait('……没关系，我去跑一圈');
    await tachyon.say_and_wait('这样，说不定能想起些什么呢');
    era.println();
    await era.printAndWait([tachyon.sex, '跑完了一圈']);
    await era.printAndWait([
      '如 ',
      me.get_colored_name(),
      ' 想的一般，是极为动人的跑法',
    ]);
    await era.printAndWait('但……也就仅此而已');
    era.println();
    await era.printAndWait([tachyon.sex, '跑完一圈，准备停下']);
    await era.printAndWait([
      '但，看见 ',
      me.get_colored_name(),
      ' 依然茫然的眼神，',
      tachyon.sex,
      '不知为何，又跑了起来',
    ]);
    await era.printAndWait([
      '在愣神的 ',
      me.get_colored_name(),
      ' 面前，',
      tachyon.sex,
      '跑了一圈又一圈，直到天黑',
    ]);
    era.println();
    await era.printAndWait('……对不起');
    era.println();
    await tachyon.say_and_wait('不，没什么……只是，只是我忽然想跑而已');
    era.println();
    await era.printAndWait('这是骗人的');
    await era.printAndWait([me.get_colored_name(), ' 听的出来，但没有点出']);
    await era.printAndWait('怎么能点出来');
    await era.printAndWait([
      '点出那名',
      tachyon.get_teen_sex_title(),
      '，徒劳无功的悲哀',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……明天，再一起寻找吧，一定，总有一天能够找回来的',
    );
    era.println();
    await era.printAndWait('因此，即便知道这是徒劳无功');
    await era.printAndWait([me.get_colored_name(), ' 还是没能吐出拒绝的话语']);
    era.println();
    await tachyon.say_and_wait(
      '豚鼠君……你看，平常我们就是在这里做实验的，每次都是我做完药然后让你喝下去',
    );
    era.println();
    await era.printAndWait('欸欸……那不是，实验品吗？');
    era.println();
    await tachyon.say_and_wait('当然了，你以为豚鼠君是什么意思');
    era.println();
    await era.printAndWait('……原来真的是指实验动物啊');
    era.println();
    await tachyon.say_and_wait(
      '……所以说，最近我会研究的，研究能让记忆恢复的药……你会帮我的吧？',
    );
    era.println();
    await era.printAndWait('……当然了');
    era.drawLine();
    await tachyon.say_and_wait([
      '豚鼠君……那边是 ',
      t_call_c,
      ' 的地盘，所以要小心点哦，要是随便碰那里的东西，可能会出事的……',
    ]);
    era.println();
    await era.printAndWait('欸……？');
    await era.printAndWait('……没发生什么事啊');
    era.println();
    await tachyon.say_and_wait('嗯？怎么可能……我试试……啊！研究资料烧起来了！');
    era.drawLine();
    await tachyon.say_and_wait('豚鼠君，你还记得红茶怎么泡吗？');
    era.println();
    await era.printAndWait('当然，红茶什么的还是会泡的');
    era.println();
    await tachyon.say_and_wait('嘶……这不是完全不行吗？');
    era.println();
    await era.printAndWait('欸欸？');
    era.println();
    await tachyon.say_and_wait('红茶跟糖的比例最起码也要1：1才对！');
    era.println();
    await era.printAndWait('这也太甜了吧！？');
    era.drawLine();
    await era.printAndWait('速子……失忆前的我和你，是什么关系？');
    era.println();
    await tachyon.say_and_wait('……怎么了？忽然回忆起什么了吗？');
    await era.printAndWait([
      '……没有，只是从你说的感觉听起来，总觉得不只是训练员和',
      tachyon.get_uma_sex_title(),
      '的关系……或者实验品与实验动物的关系',
    ]);
    era.println();
    await tachyon.say_and_wait('…………其实，我们，是恋人哦');
    await era.printAndWait('真的吗？');
    era.println();
    await tachyon.say_and_wait([
      '……嗯，是超级相亲相爱的恋人，每天都腻在一起，甜腻到 ',
      t_call_c,
      ' ',
      tachyon.sex,
      '都受不了了',
    ]);
    await era.printAndWait('…………对不起');
    era.println();
    await tachyon.say_and_wait('没什么好道歉的，不是吗？');
    await era.printAndWait('要是……我能想起来的话');
    era.println();
    await tachyon.say_and_wait(
      '……说什么话呢，不是要是能想起来，只是还没想起来而已……一定，一定会想起来的',
    );
    await era.printAndWait('……是啊，谢谢你，速子');
    era.drawLine();
    await tachyon.say_and_wait(
      '你看，这里是商店街……我们平常的实验用具都是在这里买的',
    );
    era.println();
    await era.printAndWait('……那个，速子');
    era.println();
    await tachyon.say_and_wait('嗯？怎么了？');
    era.println();
    await era.printAndWait('……为什么，周围的人都在用一种看到鬼的眼神看我们');
    era.println();
    await tachyon.say_and_wait('有吗？可能是我上个月的实验吧');
    era.println();
    await era.printAndWait('……上个月？');
    era.println();
    await tachyon.say_and_wait('嗯，那时候的实验不小心把整条街都染成血红色了');
    era.println();
    await era.printAndWait('…………难道说，速子其实是什么很危险的人吗？');
    era.println();
    await tachyon.say_and_wait([
      '真没礼貌，我可是清廉正直的青春美',
      tachyon.get_teen_sex_title(),
      '啊',
    ]);
    await tachyon.say_and_wait(
      '只是要是豚鼠君不在身边的话就会变成暴走的地球最终兵器而已',
    );
    era.println();
    await era.printAndWait('好可怕！');
    era.println();
    await tachyon.say_and_wait('……所以，千万不要再离开我了，好吗？');
    era.println();
    await era.printAndWait('…………嗯');
    era.drawLine();
    await tachyon.say_and_wait('……豚鼠君，你，不怪我吗？');
    era.println();
    await era.printAndWait('为什么？');
    era.println();
    await tachyon.say_and_wait('是我，把你的人生束缚在了这里，如果……');
    era.println();
    await era.printAndWait('……为什么');
    await era.printAndWait('明明应该是你该怪罪我的，不是吗？');
    await era.printAndWait('没有记忆的我……真的有资格接受你的爱吗？');
    era.println();
    await tachyon.say_and_wait('！不是……不是这样的！');
    await tachyon.say_and_wait(
      '一定能回忆起来的……！所以，所以……别再说那种话了……',
    );
    era.drawLine();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点',
    ]);
    await era.printAndWait('训练场、赛场、河滨、神社');
    await era.printAndWait('直到最后，一切都还是没能重新唤起豚鼠君的记忆');
    await era.printAndWait('但是，他们一点也不为此伤心');
    await era.printAndWait('因为，他们在这些地方，重新留下了最美好的回忆');
    era.println();
    await tachyon.say_and_wait('……这样的故事结尾，你喜欢吗？');
    era.println();
    await era.printAndWait('……嗯，很好哦');
    era.println();
    await tachyon.say_and_wait('……豚鼠君');
    era.println();
    await era.printAndWait('不用了，只要，这样就好了');
    await era.printAndWait('我……就要死了啊');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait('速子……谢谢你');
    await era.printAndWait('虽然，是无比短暂的人生');
    await era.printAndWait('但这段日子里，我过的很幸福');
    await era.printAndWait('哪怕不记得过去……我也能自豪的说出');
    await era.printAndWait('认识了速子……是我人生中，最美好的事');
    await era.printAndWait('所以，很抱歉');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 和豚鼠君的故事……就要在这里结束了',
    ]);
    era.println();
    await tachyon.say_and_wait('如果，你希望的话……');
    await era.printAndWait('……对不起');
    await era.printAndWait('但我，不希望再继续拌着你的脚了');
    await era.printAndWait('就让故事在这里结束吧');
    era.println();
    await me.say_and_wait('抱歉，速子，我真的困了……可以了吗？');
    await common(tachyon, me);
    await tachyon.print_and_wait('哪怕已经把凶手挫骨扬灰');
    await tachyon.print_and_wait('哪怕将商店街染成鲜红');
    await tachyon.print_and_wait([me.sex, '也无法回来']);
    await tachyon.print_and_wait([
      '那点鲜红更无法填补',
      me.sex,
      '腹腔流出的血液',
    ]);
    era.println();
    await tachyon.say_and_wait([me.sex, '还是……没有怪我']);
    era.println();
    await tachyon.print_and_wait('哪怕被自己变成这样');
    await tachyon.print_and_wait('眼前豚鼠君的脸，洋溢着青春的痕迹');
    await tachyon.print_and_wait([me.sex, '不应该在这里离去']);
    await tachyon.print_and_wait([me.sex, '不应该在现在离去']);
    await tachyon.print_and_wait(['但是，因为 ', tachyon.get_colored_name()]);
    await tachyon.print_and_wait([
      '因为',
      me.sex,
      '在错误的时间，错误的地点，遇上了……错误的人',
    ]);
  } else {
    await era.printAndWait('抱歉……我真的不记得了');
    era.println();
    await tachyon.say_and_wait('豚……');
    era.printButton('「——当然，是骗你的了！」', 1);
    await era.input();
    await tachyon.say_and_wait('…………欸？');
    era.printButton('「你在想什么，我怎么可能会把速子忘掉呢？」', 1);
    await era.input();
    await tachyon.say_and_wait('…………');

    era.printButton('「……欸？速子？」', 1);
    await era.input();
    await era.printAndWait('速子忽然默声不语，低下头来');
    await era.printAndWait('忽然，速子压住了你的身体');
    era.println();
    await tachyon.say_and_wait('你这家伙！你知道我有多担心吗！');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '没有抬起头，但是，从地板上溅落的水渍能看出————',
      tachyon.sex,
      '在哭',
    ]);
    era.printButton('「速子？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '不要……不要再这样骗我了，求求你，好不好，真的，好可怕……不想要失去你……',
    );
    era.printButton('「…………好的，对不起」', 1);
    await era.input();
    await era.printAndWait('对不起');
    await era.printAndWait('真的对不起');
    await era.printAndWait([
      '虽然不知道发生了什么，但我又欺骗',
      tachyon.sex,
      '了',
    ]);
    await era.printAndWait([
      '欺骗了———眼前这名，叫做 ',
      tachyon.get_colored_name(),
      ' 的陌生',
      tachyon.get_uma_sex_title(),
    ]);
    era.println();
    await tachyon.say_and_wait('豚鼠君……你还记得，之前发生什么事了吗？');
    era.println();
    await era.printAndWait('这个……答应应该没关系吧');
    await era.printAndWait([me.get_colored_name(), ' 摇了摇头']);
    await era.printAndWait('说实话，什么也不知道');
    await era.printAndWait([
      '这里是哪里，眼前的',
      tachyon.get_teen_sex_title(),
      '是谁',
    ]);
    await era.printAndWait('一切的一切，都不知道');
    await era.printAndWait('但只有一点，是埋藏在心中不变的');
    await era.printAndWait(['—————不想让', tachyon.sex, '伤心']);
    await era.printAndWait(['—————不想让', tachyon.sex, '难过']);
    await era.printAndWait('为此，哪怕要用谎言来掩盖过去都没关系');
    era.println();
    await tachyon.say_and_wait(
      '……没什么，那就算了，反正，你现在醒过来了……这样，就好了',
    );
    era.println();
    await era.printAndWait([
      '看起来，',
      tachyon.sex,
      '似乎没有要解释清楚的意思',
    ]);
    await era.printAndWait('那就没办法了');

    era.printButton('「对了，现在是————」', 1);
    await era.input();
    await tachyon.say_and_wait('豚鼠君，你应该也累了吧，明天再聊吧');
    era.println();
    await era.printAndWait([
      '正当自己想问现在时间时，被',
      tachyon.sex,
      '紧张的转移了话题',
    ]);
    await era.printAndWait('虽然没有过往记忆，但身为人的常识还是有的');
    await era.printAndWait([
      '从',
      tachyon.sex,
      '的表情能够看出',
      tachyon.sex,
      '不想回答这个问题',
    ]);
    await era.printAndWait('……那就算了吧，不问了');
    await era.printAndWait([
      '如果，这个问题会让',
      tachyon.sex,
      '露出那种惊慌的表情的话',
    ]);
    era.drawLine();
    await tachyon.say_and_wait(
      '好了，豚鼠君，既然你已经醒过来了，那么首先要做的第一件事是什么，你知道吧？',
    );
    await say_by_passer_by_and_wait('豚鼠', '是……？');
    await tachyon.say_and_wait(
      '当然是吃饭了！饭！肚子快饿死了，豚鼠君，快去做点吃的来！',
    );
    await say_by_passer_by_and_wait('豚鼠', '…………好');
    era.println();
    await say_by_passer_by_and_wait('豚鼠', '感觉……怎么样？');
    await tachyon.say_and_wait('………嗯');
    await tachyon.say_and_wait('咕呃……好难吃……');
    await tachyon.say_and_wait('怎么做的这么难吃……豚鼠君，你……');
    await say_by_passer_by_and_wait('豚鼠', '！？');
    await tachyon.say_and_wait('一定……是身体还没完全恢复吧，毕竟躺了那么久');
    await tachyon.say_and_wait('这次就放你一马，但之后要赶快恢复过来啊');
    await say_by_passer_by_and_wait('豚鼠', '……啊哈哈，抱歉啦');
    era.drawLine();
    await tachyon.say_and_wait('那么……接下来，先去操场上训练吧');
    await say_by_passer_by_and_wait('豚鼠', '…………');
    await tachyon.say_and_wait('………豚鼠君？');
    await say_by_passer_by_and_wait('豚鼠', '啊，怎么……');
    await tachyon.say_and_wait(
      '你居然一点都没感到讶异吗？我居然，主动跑去训练了哦？',
    );
    await say_by_passer_by_and_wait('豚鼠', '……欸');
    await say_by_passer_by_and_wait('豚鼠', '……我下意识以为你说的是又要偷懒了');
    await say_by_passer_by_and_wait('豚鼠', '速子你居然真的要去训练了吗！？');
    await tachyon.say_and_wait('不，这又太夸张了');
    await say_by_passer_by_and_wait('豚鼠', '啊哈哈……这样吗');
    era.drawLine();
    await say_by_passer_by_and_wait('豚鼠', '商店街……？');
    await tachyon.say_and_wait(
      '是啊，毕竟我的实验器具有点不够了，陪我去逛逛吧',
    );
    await say_by_passer_by_and_wait('豚鼠', '啊，好，那当然');
    await tachyon.say_and_wait('豚鼠君？你在往哪走？商店街不在那边啊');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '……啊，没，没什么，只是忽然想起有东西要拿',
    );
    await say_by_passer_by_and_wait(
      '豚鼠',
      '不过仔细想想其实也没什么特别重要的啊哈哈哈',
    );
    await tachyon.say_and_wait('……真是奇怪');
    era.println();
    await tachyon.say_and_wait('哼～哼哼哼');
    await say_by_passer_by_and_wait('豚鼠', '……那个，速子？');
    await tachyon.say_and_wait('嗯？');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '为什么……商店街的人看你的眼神总觉得怪怪的',
    );
    await tachyon.say_and_wait('……有，有这回事吗？只是你的错觉吧，豚鼠君');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '不，明明就有，好像在看什么危险人物……',
    );
    await tachyon.say_and_wait('是你看错了');
    await say_by_passer_by_and_wait('豚鼠', '可是');
    await tachyon.say_and_wait('你看错了');
    await say_by_passer_by_and_wait('豚鼠', '……好吧');
    era.drawLine();
    await tachyon.say_and_wait(
      '……我说，豚鼠君，你现在最好，小心的，把手上的东西放下来',
    );
    await say_by_passer_by_and_wait('豚鼠', '呃……怎么了吗？');
    await tachyon.say_and_wait([
      '还怎么了，你忘记那是 ',
      t_call_c,
      ' 的东西了吗？',
    ]);
    await say_by_passer_by_and_wait(
      '豚鼠',
      '欸……不过，稍微碰一下应该也不会有事吧',
    );
    await tachyon.say_and_wait(
      '怎么可能！上次我只是稍微碰到一下我的研究资料就瞬间烧起来了！',
    );
    await say_by_passer_by_and_wait('豚鼠', '可是……');
    await tachyon.say_and_wait('………');
    await say_by_passer_by_and_wait('豚鼠', '…………');
    await tachyon.say_and_wait(
      '那我也试试………哇啊啊！着火了！快点抢救资料啊啊啊！',
    );
    era.drawLine();
    await tachyon.say_and_wait('喂喂，豚鼠君');
    await say_by_passer_by_and_wait('豚鼠', '嗯？速子，怎么了？');
    await tachyon.say_and_wait('我说，你醒过来之后，都没和我亲热过了吧？');
    await say_by_passer_by_and_wait('豚鼠', '……欸？');
    await tachyon.say_and_wait(
      '把恋人这样抛着一直不管不顾，就算前面当成你还没恢复……现在身体检查也都没什么问题，也该好好你侬我侬一下了吧？',
    );
    await say_by_passer_by_and_wait('豚鼠', '不，等一下，速子还是学生吧');
    await tachyon.say_and_wait('是啊，有什么问题吗？');
    await say_by_passer_by_and_wait('豚鼠', '问题很大吧！？伦理之类……');
    await tachyon.say_and_wait('……怎么忽然这么激动，明明当初你都那么主动的♡');
    await say_by_passer_by_and_wait('豚鼠', '…以前的我这么人渣吗');
    await tachyon.say_and_wait('？豚鼠君，你刚刚说什么了吗？');
    await say_by_passer_by_and_wait('豚鼠', '……不，什么也没有');
    await tachyon.say_and_wait('那就快点，来好好亲热吧♡');
    era.drawLine();
    await tachyon.say_and_wait(
      '喔喔，这次这便当做的不错啊！豚鼠君！总算恢复你以前的水准了！',
    );
    await say_by_passer_by_and_wait('豚鼠', '是……是吗？');
    await tachyon.say_and_wait('你那么拼命复健果然是有成效的！');
    await say_by_passer_by_and_wait('豚鼠', '是啊…………还有那些食谱书也是');
    await tachyon.say_and_wait(
      '真是……好久没吃到了啊，这种味道…………真的，好久………',
    );
    await say_by_passer_by_and_wait('豚鼠', '……速子，我可以问一个问题吗？');
    await tachyon.say_and_wait('嗯？');
    await say_by_passer_by_and_wait('豚鼠', '我到底……昏过去了多久');
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait('……………年');
    await say_by_passer_by_and_wait('豚鼠', '…………');
    await tachyon.say_and_wait('……豚鼠君？');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '对不起……这么多年里，你……一定很寂寞吧',
    );
    await tachyon.say_and_wait('！');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '……我已经回来了，已经可以了，可以不必再……',
    );
    await tachyon.say_and_wait('……');
    await tachyon.say_and_wait('豚鼠君……我真的……真的，差点就支撑不下去了……');
    await tachyon.say_and_wait(
      '要是……你醒不过来……要是……完全把我忘了……要是……要是……',
    );
    await tachyon.say_and_wait(
      '真的……好可怕……像是一场恶梦……持续了许多年的恶梦……',
    );
    await say_by_passer_by_and_wait('豚鼠', '……………');
    await tachyon.say_and_wait('但是……你回来了，你还是回来了');
    await tachyon.say_and_wait('答应我……这次，不要再离开我了……好吗？');
    await say_by_passer_by_and_wait('豚鼠', '……嗯，我不会再离开了');
    era.drawLine();
    await say_by_passer_by_and_wait('豚鼠', '所以……那天究竟是怎么……');
    await tachyon.say_and_wait(
      '……那天，你在商店街……我只是，离开了一下，结果有个……自称是粉丝的人，冲上去……然后……',
    );
    await tachyon.say_and_wait('……要是那个时候，我能更快一点，');
    await tachyon.say_and_wait('不，要是我一直留在你身边的话……');
    await tachyon.say_and_wait('绝对，绝对不会发生那种事……对不起……');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '没关系……毕竟，现在已经没事了，不是吗？',
    );
    await tachyon.say_and_wait(
      '但是……中间你的人生……有那么多年都…………你不会恨我吗？',
    );
    await tachyon.say_and_wait(
      '如果不是因为我……如果不是因为负责了我……你可能，根本就不会遭受到这种事',
    );
    await say_by_passer_by_and_wait('豚鼠', '为什么我会恨你呢？');
    await say_by_passer_by_and_wait(
      '豚鼠',
      '明明不是速子害的……而且，速子还努力的把我抢救了回来',
    );
    await say_by_passer_by_and_wait('豚鼠', '感谢你都来不及了，怎么会怨恨');
    await tachyon.say_and_wait('…………也是啊，毕竟是你，肯定会说这种话的吧');
    await say_by_passer_by_and_wait('豚鼠', '？什么意思');
    await tachyon.say_and_wait('不……没什么');
    era.drawLine();
    await era.printAndWait('就这样');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点',
    ]);
    await era.printAndWait('训练场、赛场、河滨、神社');
    await era.printAndWait('为了回味过去，为了让在多年前停下的时间继续走动');
    await era.printAndWait('或许，中间失去的岁月无法弥补');
    await era.printAndWait('但他们依然努力创造出了，独属他们的崭新人生');
    era.println();
    await tachyon.say_and_wait('……这样的故事结尾，你满意吗？');
    era.println();
    await era.printAndWait('……嗯，很好哦');
    era.println();
    await tachyon.say_and_wait('……豚鼠君');
    era.println();
    await era.printAndWait('不用了，只要，这样就好了');
    await era.printAndWait('我……就要死了啊');
    await tachyon.say_and_wait('…………');
    await era.printAndWait('速子……谢谢你');
    await tachyon.say_and_wait('你答应过我的……不会再离开我了，你答应过的');
    era.println();
    await era.printAndWait('……对不起');
    await era.printAndWait('请当我，又欺骗了你一次吧');
    await era.printAndWait('这段日子里，我过的很幸福');
    await era.printAndWait('但是，这些幸福……不应是我的，而是「豚鼠君」的');
    await era.printAndWait('认识了速子……是我人生中，最美好的事');
    await era.printAndWait('所以，已经不想再欺骗下去了');
    await era.printAndWait('所以，很抱歉');
    await era.printAndWait('所以，对不起');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 和豚鼠君的故事……就要在这里结束了',
    ]);
    await tachyon.say_and_wait('如果，你希望的话……');
    era.println();
    await era.printAndWait('……对不起');
    await era.printAndWait('但我，不希望再继续拌着你的脚了');
    await era.printAndWait('就让豚鼠君在这里结束吧');
    era.println();
    await era.printAndWait('抱歉，速子，我真的困了……可以了吗？');
    await common(tachyon, me);
    await tachyon.print_and_wait('哪怕把凶手挫骨扬灰');
    await tachyon.print_and_wait('哪怕在商店街，自己像个疯子一样乱冲乱闯');
    await tachyon.print_and_wait([me.sex, '也无法回来']);
    await tachyon.print_and_wait([
      '急救的措施更是无法填补',
      me.sex,
      '腹腔流出的血液',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '明明都已经欺骗了那么久了……再骗我一次又有什么关系……',
    );
    era.println();
    await tachyon.print_and_wait('从一开始，就已经知道了');
    await tachyon.print_and_wait(['是', me.sex, '，也不是', me.sex]);
    await tachyon.print_and_wait(
      '虽然努力伪装起来了，但失去记忆的人脸上那种茫然绝不是简单就能被隐藏起来的',
    );
    await tachyon.print_and_wait('更何况……在那之后的谎言，又是那么的蹩脚');
    era.println();
    await tachyon.print_and_wait([
      '但是……',
      tachyon.get_colored_name(),
      ' 不在乎',
    ]);
    await tachyon.print_and_wait(['只要是', me.sex, '就好']);
    await tachyon.print_and_wait('只要能够活下来，活下去就好');
    await tachyon.print_and_wait('没有记忆？那又有什么关系');
    await tachyon.print_and_wait([
      '只要',
      me.sex,
      '能继续下去，',
      tachyon.get_colored_name(),
      ' 就能甘心被欺骗一辈子',
    ]);
    await tachyon.print_and_wait('……但是');
    await tachyon.print_and_wait([
      '还是一样，哪怕「这次」，',
      me.sex,
      '欺骗了自己整整一辈子',
    ]);
    await tachyon.print_and_wait([
      '也还是不愿意，在最后的最后，再欺骗 ',
      tachyon.get_colored_name(),
      ' 一次',
    ]);
  }
  era.println();
  await tachyon.print_and_wait('喝了口放在床边的红茶');
  await tachyon.print_and_wait([
    '自己泡的红茶，和',
    me.sex,
    '泡的理论成分完全一样',
  ]);
  await tachyon.print_and_wait('毕竟，已经自己泡了这么多年');
  await tachyon.print_and_wait('能够琢磨的，能够更改的，都已经研究到了最好');
  await tachyon.print_and_wait('但是，味道不一样');
  await tachyon.print_and_wait('不可能一样，永远无法一样');
  await tachyon.print_and_wait('今天的红茶，永远胜不过昨天的味道');
  era.println();
  await tachyon.say_and_wait('————那么，该开始下一次实验了');
  era.drawLine();
  await tachyon.print_and_wait('特雷森学院的地下室');
  era.println();
  await tachyon.say_and_wait('上次来这里……是什么时候了');
  era.println();
  await tachyon.print_and_wait('三个月？五个月？还是……');
  await tachyon.print_and_wait('「这次」又跟豚鼠君度过了多长的时间？');
  era.println();
  await tachyon.say_and_wait('算了，不重要了');
  era.println();
  await tachyon.print_and_wait('打开灯');
  await tachyon.print_and_wait('在眼睛慢慢适应亮光后');
  await tachyon.print_and_wait('眼前出现的，是数以千计的营养槽');
  era.println();
  await tachyon.print_and_wait([
    '啊啊，要是让',
    me.sex,
    '知道的话，',
    me.sex,
    '绝对不会原谅我吧',
  ]);
  await tachyon.print_and_wait(['但是……', me.sex, '还是没有怪罪我']);
  await tachyon.print_and_wait('所以，这就算默认了');
  era.println();
  await tachyon.say_and_wait(
    '第五十六次，记忆没有恢复倾向，身体无异状，存活时间五个月……',
  );
  era.println();
  await tachyon.print_and_wait(['从', me.sex, '离开那天开始才启动的计划']);
  await tachyon.print_and_wait('已经无数次咒骂过自己');
  await tachyon.print_and_wait('为什么如此晚才想到');
  await tachyon.print_and_wait(
    '已经被泡沫般的幸福麻痹到忘记研究者最基本的未雨绸缪了吗？',
  );
  await tachyon.print_and_wait('所以才会落得如此下场');
  era.println();
  await tachyon.print_and_wait([
    '一点一滴，像堆沙堡一般，将',
    me.sex,
    '的身体重新拼凑而成',
  ]);
  await tachyon.print_and_wait(
    '但，哪怕一切都拼凑起来了，也无法将无形的东西重新塑成',
  );
  await tachyon.print_and_wait('人体中蕴含最多秘密的大脑————记忆');
  await tachyon.print_and_wait(
    '连一开始都不知道到底存在与否的东西，到底又能怎么重塑',
  );
  await tachyon.print_and_wait('只能像这样');
  await tachyon.print_and_wait('一次又一次的实验，一次又一次的唤醒');
  await tachyon.print_and_wait('一次又一次的……等待着奇迹');
  era.println();
  await tachyon.say_and_wait('失败主因，多器官衰竭引起败血症……生存意愿，无');
  era.println();
  await tachyon.print_and_wait(
    '凡人的捏泥土游戏，大概是永远也及不上女神大人的',
  );
  await tachyon.print_and_wait(['所以，每次塑造出的', me.sex, '总是这样']);
  await tachyon.print_and_wait('至多半年，至少……两周');
  await tachyon.print_and_wait(
    '只要到了时间，总会因为各式各样的原因而陷入永眠',
  );
  await tachyon.print_and_wait('……当然');
  await tachyon.print_and_wait('这些疾病，再怎么说，依然是常人范围');
  await tachyon.print_and_wait([
    '凭借着 ',
    tachyon.get_colored_name(),
    ' 的研究成果',
  ]);
  await tachyon.print_and_wait(
    '要续命的话，多活上三到五年绝对不是问题，甚至……还能更久',
  );
  await tachyon.print_and_wait(
    '只要愿意，可以有一个三到五年，就能有第二个，第三个，第四个，直到永久',
  );
  era.println();
  await tachyon.say_and_wait([me.sex, '还是……没有说']);
  era.println();
  await tachyon.print_and_wait('无论重复多少次');
  await tachyon.print_and_wait('无论怎么对身体进行改动');
  await tachyon.print_and_wait(['最后的最后，', me.sex, '说的总是大同小异']);
  era.println();
  await tachyon.say_and_wait('已经结束了');
  await tachyon.say_and_wait('已经满足了');
  era.println();
  await tachyon.say_and_wait('开什么玩笑……开什么玩笑！');
  await tachyon.say_and_wait(
    '谁允许你擅自满足了！给我说啊！对我说啊！说想要活下去！说想要继续和我生活下去啊！',
  );
  await tachyon.say_and_wait(
    '没有记忆也没关系，要花一辈子找回记忆也没关系，说啊……为什么不说……为什么……要留我一个人……',
  );
  era.println();
  await tachyon.print_and_wait([
    '如果，',
    me.sex,
    '是因为憎恨，憎恨害自己失去性命的 ',
    tachyon.get_colored_name(),
    '，因此宁愿死也不愿意与 ',
    tachyon.get_colored_name(),
    ' 一起生活，那都能接受',
  ]);
  await tachyon.print_and_wait([
    '如果真的是这样，那么 ',
    tachyon.get_colored_name(),
    ' 会不说二话的离开',
    me.sex,
    '的生活，只进行最低程度的医疗接触',
  ]);
  await tachyon.print_and_wait([
    '只要能在最后，有那么一点迟疑，或者表露出那么一点对 ',
    tachyon.get_colored_name(),
    ' 的嫌弃',
  ]);
  await tachyon.print_and_wait([
    '那么哪怕心跳停止，自己都能在最后关头将',
    me.sex,
    '抢救回来',
  ]);
  await tachyon.print_and_wait('但是……五十六次里');
  await tachyon.print_and_wait('这种事，一次也没发生过');
  era.println();
  await tachyon.print_and_wait('不想拖累自己');
  await tachyon.print_and_wait('不想束缚自己');
  await tachyon.print_and_wait('哪怕失去一切，包括生命，包括记忆');
  await tachyon.print_and_wait([
    '五十六次里，每一次，',
    me.sex,
    '直到最后想的都是 ',
    tachyon.get_colored_name(),
    ' 的可能性',
  ]);
  era.println();
  await tachyon.print_and_wait([
    '但是，',
    tachyon.get_colored_name(),
    ' 的可能性，已经结束了',
  ]);
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    ' 的时间，已经停止走动',
  ]);
  await tachyon.print_and_wait('那杯红茶的味道从那刻开始就已经定格');
  era.println();
  await tachyon.say_and_wait('第五十七次，开始');
  era.println();
  await tachyon.print_and_wait(
    '随着培养槽将营养液排干，在培养槽中的人影被释放出来',
  );
  era.println();
  await tachyon.print_and_wait([
    '不能让',
    me.sex,
    '结束，不会让',
    me.sex,
    '结束',
  ]);
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    ' 与豚鼠君的故事，必须永远继续下去',
  ]);
  era.println();
  await tachyon.print_and_wait(
    '于是，将过去束缚，也被束缚在过去的科学家，开始了新一轮的实验',
  );
  await print_event_name(
    [{ color: buff_colors[3], content: '停滞的时钟' }],
    tachyon,
  );
};
