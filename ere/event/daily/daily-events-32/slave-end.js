const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');

module.exports = async function () {
  const callname = sys_get_callname(32, 0),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  await era.printAndWait([
    me.get_colored_name(),
    ' 拿着一瓶喝到一半的威士忌，摇摇晃晃的走出第五间酒吧',
  ]);
  await era.printAndWait('夜色依旧漆黑，糜烂的夜晚还在继续');
  era.println();
  await era.printAndWait('结束了……那么，接下来该去哪里好？');
  await era.printAndWait('东倒西歪的走在路上，还带着浑身的酒气');
  await era.printAndWait([
    '任何路人看见都会捂着鼻远去的姿态，也是 ',
    me.get_colored_name(),
    ' 努力想要营造出的模样',
  ]);
  era.println();
  await era.printAndWait('二、三、五………二十三、二十九 ');
  await era.printAndWait([me.get_colored_name(), ' 在脑海中默数着']);
  await era.printAndWait([
    '这不是什么透过计算质数来让自己冷静下来，而是今天一晚 ',
    me.get_colored_name(),
    ' 喝掉的酒的量',
  ]);
  await era.printAndWait('总计金额……七位……还是八位数？');
  await era.printAndWait([
    '令人惊愕的数字，却只是 ',
    me.get_colored_name(),
    ' 一个晚上喝的酒的价格',
  ]);
  await era.printAndWait(
    '在最高档的酒吧，以只挑贵的不挑好的的心态将店内扫荡一空所造就出的就是这样一个对普通人而言想都不敢想的数字',
  );
  era.println();
  await era.printAndWait('然而……');
  await era.printAndWait('没用，一点用都没有');
  await era.printAndWait([
    '无论价格，无论度数，今天喝的任何酒，除了让 ',
    me.get_colored_name(),
    ' 多上了几次厕所外，可以说是毫无作用',
  ]);
  await era.printAndWait([
    '意识清晰的不能更清晰，清晰的让 ',
    me.get_colored_name(),
    ' 回忆起两天前的事',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait('借钱？');
  await tachyon.say_as_unknown_and_wait(['可以啊，', callname]);
  await tachyon.say_as_unknown_and_wait(
    '不过老规矩，你知道的吧……今天的实验，是关于神经抑制剂排除的实验',
  );
  await tachyon.say_as_unknown_and_wait('那么，让我们开始实验吧');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 将威士忌直接对口吹']);
  await era.printAndWait([
    '一口便足以使正常人醉醺的烈酒，却使 ',
    me.get_colored_name(),
    ' 的脑袋更加清晰',
  ]);
  await era.printAndWait(
    '如果说借酒浇愁是想透过酒精来麻痹神经逃避现实，那么就连麻痹神经也不被允许的自己，想必是世界上最痛苦的醉汉了吧',
  );
  era.println();
  await era.printAndWait('繁华的夜之街，最不缺少的就是像自己一样的醉汉');
  await era.printAndWait([
    '看着那些人东倒西歪的身影，',
    me.get_colored_name(),
    ' 发自内心的产生了由衷的羡慕',
  ]);
  era.println();
  await era.printAndWait([
    '走着走着，眼前忽然闪起的亮光使 ',
    me.get_colored_name(),
    ' 不由得眯起双眼',
  ]);
  await era.printAndWait(
    '晃人双眼的不只灯光，更是那珠光十色的装潢以及无数一夜致富的梦想',
  );
  await era.printAndWait('赌和酒，酒和赌，两者从古至今便是不分家的');
  await era.printAndWait(
    '一醉方休的酒豪们，在酒酣耳热之际，到赌场摸上两把似乎也早就是例行事项了',
  );
  era.println();
  await era.printAndWait([
    '然而，一副醉鬼模样的 ',
    me.get_colored_name(),
    ' 却连眼神都没转向赌场，只是笔直地望着前方',
  ]);
  await era.printAndWait('不是嫌弃赌场赌的东西太过小家子气———');
  await era.printAndWait([
    '据说这里的赌场甚至还有对',
    tachyon.get_uma_sex_title(),
    '比赛下注这种一旦曝光便注定再也干不下去的营业',
  ]);
  await era.printAndWait([
    '更不是因为 ',
    me.get_colored_name(),
    ' 有多么的洁身自好——说到底在这种时间徘徊在这种街道的人，再干净又能干净到哪去呢',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 又灌了口酒，回想起过去的事',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait('借钱？');
  await tachyon.say_as_unknown_and_wait(['可以啊，', callname]);
  await tachyon.say_as_unknown_and_wait(
    '不过老规矩，你知道的吧……今天的实验，是关于大脑奖励机制的调整与抑制',
  );
  await tachyon.say_as_unknown_and_wait('那么，让我们开始实验吧');
  era.println();
  await era.printAndWait('哪怕赢下了超越一般上班族年薪的钱');
  await era.printAndWait('哪怕一夕之间输掉一栋海景别墅');
  await era.printAndWait('也不会有任何感情波动，甚至没办法让眉间产生皱折');
  await era.printAndWait('这种情况下的赌博，到底有什么好玩的呢？');
  era.println();
  await era.printAndWait('仿佛整个赌场只有自己一人被孤立世外');
  await era.printAndWait('不能理解过去的自己为何沉迷于此');
  await era.printAndWait('不，能够理解，但做不到的事就是做不到');
  await era.printAndWait('就像已经清醒的人是无法回到梦境的一样');
  era.println();
  await say_by_passer_by_and_wait(
    '站街少女',
    '先生，看您一个人好像很寂寞的样子……有没有兴趣，一起度过春宵一刻呢♡',
  );
  era.println();
  await era.printAndWait([
    '不知不觉，灯红酒绿的赌场也已经被甩在身后，走入红灯区的 ',
    me.get_colored_name(),
    '，迎来了风尘女子的温柔乡',
  ]);
  await era.printAndWait(
    '要是能就这么沉溺于她们的肢体间，那想必会是无比幸福的事吧……',
  );
  era.println();
  await tachyon.say_as_unknown_and_wait('借钱？');
  await tachyon.say_as_unknown_and_wait(['可以啊，', callname]);
  await tachyon.say_as_unknown_and_wait('不过老规矩……');
  era.println();
  await era.printAndWait('啊啊');
  await era.printAndWait([me.get_colored_name(), ' 回绝了少女的邀请']);
  await era.printAndWait('毫无反应');
  await era.printAndWait(
    '原本应该很对自己胃口的女孩子，现在却连让身体产生一丝丝的反应都做不到',
  );
  era.println();
  await era.printAndWait([
    '不知不觉间，',
    me.get_colored_name(),
    ' 已经走出了这条街道',
  ]);
  await era.printAndWait([
    '偌大的夜之街，繁华的夜之都，却找不到任何能够请 ',
    me.get_colored_name(),
    ' 产生欲望的东西',
  ]);
  await era.printAndWait('曾经感兴趣过的那些');
  await era.printAndWait('美食、烟酒、赌博、美色……');
  await era.printAndWait('曾经让自己沉溺，用来麻痹神经的那些');
  await era.printAndWait('如今却只能使神经变得更为清醒');
  era.println();
  await era.printAndWait('够了，已经够了');
  await era.printAndWait(
    '无论什么都好，只要能让自己沉醉，只要能够放弃思考，无论什么都好',
  );
  await era.printAndWait('从来都不知道，原来理智是这么的使人癫狂');
  await era.printAndWait('暴力、痛楚、血液、伤痕');
  await era.printAndWait('哪怕是这些，都无法给自己带来更大的刺激');
  await era.printAndWait('这些又是在哪一次的实验中被自己卖掉的？');
  await era.printAndWait('已经忘了，那种事也不重要了');
  era.println();
  await era.printAndWait('仿佛人格解体一般，急迫的寻求刺激，却怎么也无法获得');
  await era.printAndWait(
    '再这样下去……会崩溃的，神经也好，身体也好，一定会迎来崩溃，断裂',
  );
  await era.printAndWait('所以在这之前，无论是什么都好……');
  await era.printAndWait('无论，是什么都好……');
  await tachyon.say_as_unknown_and_wait([callname, '？你怎么在这里']);
  await tachyon.say_as_unknown_and_wait('……哎呀，真是狼狈的模样啊');
  await tachyon.say_as_unknown_and_wait(
    '怎么了，是没钱买酒了？还是没钱下注被赌场赶出来了……又或者，是看上哪个女孩子了？',
  );
  await tachyon.say_as_unknown_and_wait('需要……更多钱吗？');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 愣愣的望着对方']);
  await era.printAndWait([
    '仿佛恶魔的低语，在 ',
    me.get_colored_name(),
    ' 耳旁细语如棉',
  ]);
  await era.printAndWait('钱');
  await era.printAndWait('还要钱');
  await era.printAndWait('还要更多钱');
  await era.printAndWait('必须要借更多钱');
  era.println();
  await era.printAndWait('………………………为什么？');
  await era.printAndWait('为什么想要钱？');
  await era.printAndWait('为什么要借钱？');
  await era.printAndWait('为了买酒？');
  await era.printAndWait('为了赌博？');
  await era.printAndWait('为了玩女人？');
  await era.printAndWait('为什么？');
  await era.printAndWait('为什么？');
  era.println();
  await era.printAndWait('无论是什么都可以');
  await era.printAndWait('无论做什么都可以');
  await era.printAndWait('快想啊');
  await era.printAndWait('该怎么做，才能放弃思考');
  await era.printAndWait('该怎么做，才能让自己的脑袋彻底麻痹');
  era.println();
  await era.printAndWait('啊啊……');
  await era.printAndWait('啊啊！');
  await era.printAndWait('有了');
  await era.printAndWait('有了有了有了有了有了有了有了有了有了有了');
  era.println();
  await me.say_and_wait('……可以，借我钱吗？');
  await tachyon.say_as_unknown_and_wait([
    '当然好了……不过，',
    callname,
    '，你借钱要做什么呢？',
  ]);
  era.println();
  await era.printAndWait('对方留下的唯一漏洞');
  await era.printAndWait('给自己留下的最后仁慈');
  await era.printAndWait('布局？阴谋？算计？');
  await era.printAndWait('那些东西已经不重要了');
  era.println();
  await me.say_and_wait('速子……可以用这些钱……请妳陪我共度一晚吗？');
  era.println();
  await era.printAndWait('说出口的瞬间，紧绷到极限的弹簧终于松开');
  await era.printAndWait('啊啊……');
  await era.printAndWait('只有想着对方，脑袋才能获得喘息');
  await era.printAndWait('只有念着对方，内心才能获得麻痹');
  await era.printAndWait('为什么以前的自己都没发现');
  await era.printAndWait('为什么要一直借钱去做那种毫无意义的事情');
  await era.printAndWait('明明，明明内心唯一的安宁就在这里');
  era.println();
  await era.printAndWait(['想要和 ', tachyon.get_colored_name(), ' 一起吃饭']);
  await era.printAndWait(['想要和 ', tachyon.get_colored_name(), ' 一起兜风']);
  await era.printAndWait([
    '想要和 ',
    tachyon.get_colored_name(),
    ' 一起看夜景',
  ]);
  await era.printAndWait([
    '想要和 ',
    tachyon.get_colored_name(),
    ' 一起入住情侣酒店',
  ]);
  await era.printAndWait([
    '想要彻底，从里到外，完全变成 ',
    tachyon.get_colored_name(),
    ' 的模样',
  ]);
  await era.printAndWait('越是想着这些，心中就越是轻松，越是舒服');
  era.println();
  await tachyon.say_as_unknown_and_wait('呵呵……好孩子，好孩子');
  era.println();
  await era.printAndWait([
    '于是，',
    me.get_colored_name(),
    ' 获得了真正的幸福',
  ]);
  await print_event_name(
    [{ color: buff_colors[3], content: '金钱的代价' }],
    tachyon,
  );
};
