const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_love_uma_in_event,
  sys_get_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { get_breast_cup } = require('#/data/info-generator');
const { vp_status_enum } = require('#/data/ero/status-const');

/** @type {Record<string,function(CharaTalk,CharaTalk):Promise<*>>} */
const handlers = {};

handlers[49] = async (vp, me) => {
  await print_event_name('Un amour à taire（隐藏的恋情）', vp);
  await vp.print_and_wait([
    '某天夜里，',
    vp.get_colored_name(),
    ' 在宿舍想起了与 ',
    me.get_colored_name(),
    ' 在法国一起听过的一首歌。',
  ]);
  for (const c of [
    '过往指引着我们前进，让我们更加清醒理智。',
    '猜忌是多么的危险致命，而情感却如此不堪一击。',
    '管它希望满怀，还是听天由命。',
    '一切自有天意，不如随遇而安。',
    '离合悲欢是我们共同的记忆。',
    '爱情比我们想象得更加牢固。',
    '在我身边的时候，你都做些什么？',
    '时光披上神秘的色彩。',
    '轻柔的晚风缓缓拂过。',
    '爱情比我们想象得更加牢固。',
    '或者快乐地生活在笼子里。',
    '若没有我们，他们的选择有什么关系？',
    '爱比我们强大得多……',
    '人们认为这可能足够了，为了更爱而这么说。',
    '但这一定是我们的爱，比我们强大得多。',
    '有了我们在一起的通行证，我相信这可能足够了。',
    '我们应该清醒地说，这一切都是我们的错。',
    '爱比我们强大得多……',
  ]) {
    await era.printAndWait(`🎵${c}🎵`, { align: 'center', color: vp.color });
  }
  era.printButton(
    `「我，是这么简单的法兰西${vp.get_child_sex_title()}啊……」（升级关系）`,
    1,
  );
  era.printButton('「别胡思乱想了，再不睡要被师傅说的。」（暂停升级）', 2);
  const ret = await era.input();
  if (ret === 1) {
    era.println();
    if (
      vp.sex_code === 0 &&
      (era.get('talent:205:处女') === vp_status_enum.yes ||
        era.get('talent:205:处女') === vp_status_enum.dont_know) &&
      era.get('cflag:0:性别') - 1
    ) {
      await sys_love_uma_in_event(205);
    } else {
      add_event(
        event_hooks.week_end,
        new EventObject(205, cb_enum.love).set_arg('lust'),
      );
    }
  } else {
    era.set('cflag:205:爱慕暂拒', 49);
  }
};

handlers.lust = async (vp, me) => {
  await print_event_name('爱上凡人的仙女（La fée）', vp);
  await era.printAndWait([
    '清风吹拂，扬起 ',
    vp.get_colored_name(),
    ` 的金丝荡漾，${vp.sex}的肌肤晃若明雪。`,
  ]);
  await era.printAndWait('湛蓝的眼眸嫣然动人，却又透着几分灵动。');
  await era.printAndWait('饱嫩润闪的唇瓣，呈现出一种近似透明的美妍。');
  await era.printAndWait('容貌有种超越年龄的媚气，一眼便能让人沉醉。');
  await era.printAndWait(
    '色泽迷人的短金发，被两个低发髻扎着，闪出精致的亮泽。',
  );
  await era.printAndWait(
    '少女套着白丝的大腿纤细腴润，踏着法式的学生皮鞋，极富女子元气。',
  );
  await era.printAndWait('但眉宇间宛若修造的容颜，绝非寻常人家可近。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 对 ',
    me.get_colored_name(),
    ' 微笑，似乎并没有因为 ',
    me.get_colored_name(),
    ' 的无礼而生气。',
  ]);
  await era.printAndWait(
    `${vp.sex}穿着连衣裙，肩带在领口处交叉，连着脖子上白色的蕾丝领圈。`,
  );
  await era.printAndWait('上半身总体是白色的衣服，裹着她的双乳。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 的腰也很纤细，系了一条蓝色的皮革腰带。',
  ]);
  await era.printAndWait('而腰以下，就是蓝色裙子。');
  await era.printAndWait('群面是宝石一般觉得蓝色，这是上层。');
  await era.printAndWait('下层还有一层衬裙，是白色的，同样是蕾丝、花边。');
  await era.printAndWait('裙子不长，只到大腿的中间。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 的腿很纤细，腿上是一双洁白的过膝袜——半透明的。',
  ]);
  await era.printAndWait('袜子和裙子之间的腿，也格外诱人。');
  await era.printAndWait('在右腿处，还有一个白色的腿环。');
  await era.printAndWait(
    '脚上则穿着一双蓝色的鞋子，几条白色的绑带系在了脚腕处，还打了一个蝴蝶结。',
  );
  era.printButton('「你真漂亮。」', 1);
  await era.input();
  await vp.say_and_wait('谢谢夸奖。');
  era.printButton('「不过法国的金发碧眼好多……」', 1);
  await era.input();
  await vp.say_and_wait('我不好看吗？快看我，快看我！');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 凑上前来，俯下上半身，仰起头。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 和 ',
    vp.get_colored_name(),
    ' 的鼻尖，相隔一寸不到的距离。',
  ]);
  await era.printAndWait([
    '低下头，这个视角恰好可以看到 ',
    vp.get_colored_name(),
    ' 的双乳。',
  ]);
  get_breast_cup(205) < 'D' &&
    (await era.printAndWait(`${vp.sex}的乳房不大，粗看是BC之间的小乳鸽。`));
  await era.printAndWait(`但是现在${vp.sex}向前俯身，那观感就不一样了。`);
  await era.printAndWait(
    '被连衣裙包裹着的南半球，两条连接脖子颈环的丝带，就像是快绷断了一样。',
  );
  era.get('cflag:0:性别') === 1 &&
    (await era.printAndWait(
      `孤男寡女，${vp.sex}倒也不怕 ${me.name} 做出什么出格的事情。`,
    ));
  await era.printAndWait([
    me.get_colored_name(),
    ` 看着眼前的${vp.get_teen_sex_title()}，眼边还因为要见 `,
    me.get_colored_name(),
    ' 特地抹了胭脂，很可爱。',
  ]);
  await era.printAndWait([
    '美中不足的是，穿着连衣裙的 ',
    vp.get_colored_name(),
    '，并不能露出肚脐。',
  ]);
  await era.printAndWait('但是上帝在关上一道门的同时，又开启了一扇窗。');
  await era.printAndWait(['——', vp.get_colored_name(), ' 的衣服没有袖子。']);
  era.printButton('「能让我摸摸你的咯吱窝吗？」', 1);
  await era.input();
  await vp.say_and_wait('Non，Trousseur de jupons。');
  era.printButton('「我听不懂，那我摸了。」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    ' 以迅雷不及掩耳之势，双手袭击了 ',
    vp.get_colored_name(),
    ' 的双腋。',
  ]);
  await vp.say_and_wait('啊！哈哈哈……');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 双手快速落下，夹紧了腋肢。',
  ]);
  await era.printAndWait([
    '把 ',
    me.get_colored_name(),
    ' 的手指夹得紧紧的，然后笑起来。',
  ]);
  await era.printAndWait('时而仰着头，时而又想俯下身。');
  await era.printAndWait('小马驹的腋下格外细嫩，像是新制成的豆腐。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 被 ',
    me.get_colored_name(),
    ' 弄得进退维谷，往左、往右都不是办法，两腋被拿捏得死死的。',
  ]);
  await era.printAndWait([
    '背已经靠着墙壁，往前则是 ',
    me.get_colored_name(),
    ' 这个罪魁祸首的怀抱。',
  ]);
  await vp.say_and_wait([
    `${sys_get_callname(205, 0)}，不要……哈哈哈……够，够了啦！`,
  ]);
  await vp.say_and_wait([
    '我，求求您了……哈哈哈哈……',
    vp.get_colored_name(),
    ' 求你了',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 的行为愈发猖狂，直到 ',
    vp.get_colored_name(),
    ' 大笑到因为自己的唾液呛到。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 放过了侧过头咳嗽了两声的 ',
    vp.get_colored_name(),
    '。',
  ]);
  era.printButton('「怎么想到带腿环的？」', 1);
  await era.input();
  await vp.say_and_wait('嗯？漂亮。');
  era.printButton('「你知不知道，这是什么意思？」', 1);
  await era.input();
  await vp.say_and_wait('不知道。');
  await era.printAndWait('她轻轻地摇头，短发都飘舞起来。');
  era.printButton('「这是勾引男人的意思。」', 1);
  era.printButton(
    '「有些地方，妓女脱光衣服跟男人上床，之后数钱就夹在腿环里。」',
    2,
  );
  await era.input();
  await vp.say_and_wait('那、那我取下来吧……');
  era.printButton('「以后在别人面前不许戴。」', 1);
  era.printButton('「在我面前必须戴上。」', 2);
  await era.input();
  await vp.say_and_wait('可以，不过为什么呀？');
  era.printButton('「在我眼里，你是一个小骚货，一个salope。」', 1);
  era.printButton('「人前活泼可爱的公主，半夜和男人勾搭在一起……」', 2);
  let ret = await era.input();
  await vp.say_and_wait(
    ret === 1 ? '呜……你别骂我……' : '不是，又不是我主动的……',
  );
  era.print(['面对哽咽欲泣的小洋马，', me.get_colored_name(), '……']);
  era.printButton('揉胸', 1);
  era.printButton('摸腿', 2);
  ret = await era.input();
  begin_and_init_ero(0, 205);
  if (ret === 1) {
    await era.printAndWait([
      me.get_colored_name(),
      ' 让 ',
      vp.get_colored_name(),
      ' 脱掉鞋子爬上床，双腿张开到恰好处跪好。',
    ]);
    await era.printAndWait([
      `${vp.get_teen_sex_title()}丝滑地坐了下来，蓝色的裙摆摊开成一个小圆。`,
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 来到 ',
      vp.get_colored_name(),
      ' 的身后，光洁的后背很是漂亮。',
    ]);
    await era.printAndWait(['双手用力地握着，撑在身体两侧。']);
    await era.printAndWait([
      '本格化了的 ',
      vp.get_colored_name(),
      ' 没有反抗，任由 ',
      me.get_colored_name(),
      ' 摆布。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 抓住 ',
      vp.get_colored_name(),
      ' 的双乳，像掂量菜品一样。',
    ]);
    await era.printAndWait([
      '然后是错乱地揉捏，手法大概是『轻拢慢捻抹复挑』。',
    ]);
    await era.printAndWait([
      vp.get_colored_name(),
      ' 不用低头，也知道自己的双乳露了出来。',
    ]);
    await era.printAndWait(['画圈圈、拨动、按压……']);
    await era.printAndWait([
      vp.get_colored_name(),
      ' 一边感受着乳晕处源源不断的快感，一边保持自己的姿势。',
    ]);
    await era.printAndWait([
      `${vp.sex}这才发现，自己已经抬手向后抱住了 `,
      me.get_colored_name(),
      ' 的头，姿势像是在投降。',
    ]);
    await era.printAndWait([
      '而 ',
      me.get_colored_name(),
      '，咧嘴笑着，很是坏心眼的样子。',
    ]);
    await vp.say_and_wait('不要……');
    await era.printAndWait([
      vp.get_colored_name(),
      ' 轻声呻吟着，双目已经浮现出爱慕的样子。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 轻轻一碰， ',
      vp.get_colored_name(),
      ' 就觉得爽劲冲到了后脑勺。',
    ]);
    era.printButton('「来，挺胸，收腹。」', 1);
    await era.input();
    await era.printAndWait([
      ' ',
      vp.get_colored_name(),
      ' 顺着 ',
      me.get_colored_name(),
      ' 的手，按部就班地调整姿势。',
    ]);
    await era.printAndWait(`呼吸了一下后，${vp.sex}的腹部又小了一圈。`);
    await era.printAndWait([
      me.get_colored_name(),
      ' 摸着 ',
      vp.get_colored_name(),
      ' 的腰肢，确认皮带的位置，轻轻拉动。',
    ]);
    await era.printAndWait(['*咔哒咔哒*']);
    await era.printAndWait(`白色的皮带缩进，直到重新贴紧${vp.sex}的腰腹。`);
    await vp.say_and_wait('好紧……');
    era.printButton('「紧一点才挺拔嘛。」', 1);
    await era.input();
    await era.printAndWait([
      vp.get_colored_name(),
      ' 被束着腰，似乎乳房都更挺拔了。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ` 从后面抱住${vp.sex}，双手交叉，握住一对白兔。`,
    ]);
    era.printButton('「真水灵。」', 1);
    era.printButton(`「${vp.name}还是第一次被这样肆无忌惮地揉胸吧。」`, 2);
    ret = await era.input();
    await vp.say_and_wait(ret === 1 ? '这是什么形容词啊！' : '……嗯。');
    await era.printAndWait([
      '挺起的双乳，被 ',
      me.get_colored_name(),
      ' 抓成各种模样。',
    ]);
    await era.printAndWait('软软的，像水气球一样。');
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.breast),
      false,
    );
  } else {
    era.printButton('「你这还不够，有勒肉才更淑女。」', 1);
    await era.input();
    await vp.say_and_wait('勒肉？');
    await era.printAndWait([
      '不等 ',
      vp.get_colored_name(),
      ' 反应过来，',
      me.get_colored_name(),
      ' 拉动她腿环上的皮带扣。',
    ]);
    await vp.say_and_wait('腿……不可以……');
    await era.printAndWait([
      '刚刚袭击腋下的时候，',
      me.get_colored_name(),
      ' 就发现她怕痒。',
    ]);
    await era.printAndWait('现在也是双腿发抖，身体跟着一阵战栗。');
    await vp.say_and_wait('快停下！');
    await vp.say_and_wait(`${sys_get_callname(205, 0)}……你快停下呀，笨蛋！`);
    era.printButton(
      `「${sys_get_callname(0, 205)}骂人都这么温柔吗？真是好相处呢。」`,
      1,
    );
    await era.input();
    await vp.say_and_wait('不要摸大腿内侧呀！快停下啦……');
    await era.printAndWait([
      vp.get_colored_name(),
      ' 咬着下唇，晃得美乳上上下下。',
    ]);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.body),
      false,
    );
  }
  era.printButton('「我要你说我喜欢听的话。」', 1);
  era.printButton('「说点好话看看？」', 2);
  await era.input();
  await vp.say_and_wait('……');
  await vp.say_and_wait(
    `${sys_get_callname(205, 0)}……${me.actual_name}……喜欢……`,
  );
  await vp.say_and_wait(`我好羡慕${sys_get_callname(205, 0)}的担当……`);
  await vp.say_and_wait(`${vp.name} 看到 ${me.actual_name} 就腿软……`);
  era.printButton('「不够好听。」', 1);
  era.printButton('「你自己呢？」', 2);
  ret = await era.input();
  if (ret === 1) {
    await vp.say_and_wait('啊啊啊啊……');
    await vp.say_and_wait(`${me.actual_name} 是万众瞩目的训练员！`);
    await vp.say_and_wait(`${vp.name} 甘愿拜倒在 ${me.actual_name} 脚下……`);
  } else {
    await vp.say_and_wait(`${vp.name}，${vp.name} 自己是大笨蛋！`);
    await vp.say_and_wait(
      `我……看到 ${sys_get_callname(205, 0)} 就发情，脑袋里全是浆糊……`,
    );
  }
  era.printButton(`「想看 ${sys_get_callname(0, 205)} 尿尿的地方。」`, 1);
  await era.input();
  await vp.say_and_wait('变态！');
  era.printButton('「谁是变态？」', 1);
  await era.input();
  await era.printAndWait([vp.get_colored_name(), ' 满脸委屈地噘着嘴。']);
  await vp.say_and_wait(`${vp.name} 是变态。`);
  era.drawLine();
  await era.printAndWait(['脱下内裤，', vp.get_colored_name(), ' 躺在床上。']);
  await era.printAndWait([
    '按照 ',
    me.get_colored_name(),
    ' 的要求，双腿放到了身旁，膝盖折叠。',
  ]);
  await era.printAndWait(
    '脚后跟又紧贴着大腿根部，脚掌完全绷直来让她不能放松。',
  );
  await era.printAndWait([
    vp.get_colored_name(),
    ' 的私处，正门户大开，对着 ',
    me.get_colored_name(),
    '。',
  ]);
  await era.printAndWait(
    '鲍鱼似的私处，稀疏的金毛掩盖下，粉嫩的双唇随着呼吸开合。',
  );
  await era.printAndWait([
    vp.get_colored_name(),
    ' 主动把手垫在了枕头下，不做抵抗。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 埋下头，隔着十几厘米，就能闻到马娘“发春期”的气息。',
  ]);
  await era.printAndWait('淡淡的，有点腥臭，有点少女的芳香。');
  await era.printAndWait('两瓣大阴唇之间的缝隙里，是更加水嫩的小阴唇。');
  await era.printAndWait('薄薄的边缘，近距离打量下很是诱人。');
  await vp.say_and_wait('啊……不要……');
  await era.printAndWait('她快速呼吸，喘不过气来。');
  era.printButton(`有节奏地舔 ${vp.name} 的阴唇。`, 1);
  await era.input();
  await era.printAndWait([
    '淡淡的咸味在 ',
    me.get_colored_name(),
    ' 的舌尖蔓延，但是这样还不够。',
  ]);
  era.printButton(`拨开${vp.name}的阴唇。`, 1);
  await era.input();
  await vp.say_and_wait('不要……');
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 面前的，是更加红润的嫩肉。',
  ]);
  await era.printAndWait('上面还沾了一层水，看上去美妙至极。');
  await vp.say_and_wait(`我还是……处……${me.actual_name}，还是……`);
  era.printButton('「好的，我现在先不动」', 1);
  await era.input();
  await vp.say_and_wait('嗯。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 的小阴唇，完全被 ',
    me.get_colored_name(),
    ' 的舌头推着。',
  ]);
  await era.printAndWait([
    ' ',
    me.get_colored_name(),
    ' 接着一口吻住阴唇包被之下那鼓起的肉核，然后用力吮吸起来。',
  ]);
  await era.printAndWait([
    '这下子，整块皮肉都被吸进了 ',
    me.get_colored_name(),
    ' 的双唇之间。',
  ]);
  await era.printAndWait('肉核更是无处可逃，圆圆地鼓了起来。');
  await vp.say_and_wait('不行了……别吸啊啊啊啊啊……');
  await vp.say_and_wait('小宝宝，还不能给你生……');
  await era.printAndWait([
    '三番五次的吮吸，让 ',
    vp.get_colored_name(),
    ' 满头大汗。',
  ]);
  await era.printAndWait([
    '这个时候 ',
    me.get_colored_name(),
    ' 又一而再再而三地扫过她的穴口。',
  ]);
  await era.printAndWait('触而不入的紧张感让少女欲仙欲死。');
  await vp.say_and_wait('不要……不要……');
  await vp.say_and_wait('快停下来……');
  await vp.say_and_wait('要丢了……去了！');
  await vp.say_and_wait('明天我还要见师傅……');
  await era.printAndWait([vp.get_colored_name(), ' 语无伦次地说着，直到。']);
  await era.printAndWait('——淡白的琼浆从嫩穴口流出，接着的几缕则是直接溅出。');
  await era.printAndWait('她抽出枕头下的手，捂着自己的脸。');
  await vp.say_and_wait(`${sys_get_callname(205, 0)} 讨厌！`);
  era.printButton('「我也快忍不住了，你先起来。」', 1);
  await era.input();
  await era.printAndWait([
    vp.get_colored_name(),
    ' 懒散地爬起身，看到一根肉棒已经勃起。',
  ]);
  era.printButton('「刚刚看了你的，你也看看我的吧。」', 1);
  await era.input();
  await vp.say_and_wait('有什么好看的。');
  era.drawLine();
  await vp.say_and_wait(
    `……对不起，${me.actual_name} 的肉棒……好、好大，好粗，${vp.name}，喜欢……`,
  );
  await era.printAndWait([
    vp.get_colored_name(),
    ' 爬到地上跪下，地上铺了地毯，也不会磕脚。',
  ]);
  await vp.say_and_wait('有点臭……');
  await era.printAndWait([vp.get_colored_name(), ' 如是评价。']);
  era.printButton('「喜欢吗？」', 1);
  await era.input();
  await era.printAndWait([vp.get_colored_name(), ' 默不作声。']);
  era.printButton('「看样子是喜欢咯。」', 1);
  await era.input();
  await vp.say_and_wait('才没有！');
  await era.printAndWait([
    '话刚说完， ',
    me.get_colored_name(),
    ' 就把肉棒直顶她的鼻子。',
  ]);
  await era.printAndWait(['——准确来说，是人中穴，嘴唇上方的沟壑。']);
  await era.printAndWait(['龟头完全挡住了她两个鼻孔的气路。']);
  await era.printAndWait([
    vp.get_colored_name(),
    ' 每一次吸气，都不得不品尝 ',
    me.get_colored_name(),
    ' 的味道。',
  ]);
  era.printButton('「听你师傅说你唱歌很好听。」', 1);
  await era.input();
  await vp.say_and_wait('唱歌？');
  era.printButton('「就巴黎特雷森的校歌吧。」', 1);
  await era.input();
  await era.printAndWait([
    vp.get_colored_name(),
    ' 就这样跪在地上，鼻子被肉棒顶住，还要唱校歌。',
  ]);
  await era.printAndWait([
    '好不容易唱完后， ',
    me.get_colored_name(),
    ' 的雄臭味，已经完全进入了她的鼻腔。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 俯身看着 ',
    vp.get_colored_name(),
    ' 。',
  ]);
  await era.printAndWait('双颊白皙，吹弹可破。');
  await era.printAndWait('眼睛是宝蓝色的，眼角还化了妆，在夜色下嫣然动人。');
  await era.printAndWait('一头华丽的金色短发，真是货真价实的公主。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 被 ',
    me.get_colored_name(),
    ' 看得不好意思，无奈地伸出舌头。',
  ]);
  await era.printAndWait([
    '她的舌头远比 ',
    me.get_colored_name(),
    ' 更尖、更细，软软的，一下舔到了 ',
    me.get_colored_name(),
    ' 的马眼。',
  ]);
  await era.printAndWait([
    '一番舔舐后， ',
    vp.get_colored_name(),
    ' 发现 ',
    me.get_colored_name(),
    ' 没有动静，就含住龟头，然后吮吸。',
  ]);
  await era.printAndWait('腥臭味在她嘴里扩散，一直钻到牙齿缝里。');
  await era.printAndWait([
    '每一次吮吸，都让 ',
    vp.get_colored_name(),
    ' 羞愧不已。',
  ]);
  await era.printAndWait([
    '按捺不住的 ',
    me.get_colored_name(),
    ' ，双手抱着 ',
    vp.get_colored_name(),
    ' 的头，对着她的嘴抽插起来。',
  ]);
  await vp.say_and_wait('不要……', true);
  await vp.say_and_wait('好难受……', true);
  await vp.say_and_wait(
    '臭！好恶心。顶到上颚了！舌根，受不了……想吐……好想吐',
    true,
  );
  await era.printAndWait([
    '每一次用力挺入， ',
    me.get_colored_name(),
    ' 都把龟头顶到她口腔的最深处。',
  ]);
  await era.printAndWait(['——软腭和舌根之间。']);
  await era.printAndWait([
    '舌根处的凸起，让 ',
    me.get_colored_name(),
    ' 的龟头更加快乐。',
  ]);
  await era.printAndWait([
    '可惜 ',
    vp.get_colored_name(),
    ' 在这口交中，只能屈辱地忍受。',
  ]);
  era.printButton('忍不住了。', 1);
  era.printButton('射进嘴里。', 2);
  await era.input();
  await era.printAndWait([
    vp.get_colored_name(),
    ' 察觉到了嘴里阳具的颤抖，想说话，却又说不出来。',
  ]);
  await era.printAndWait(
    '舌根被顶住，一股股温热而腥臭的液体直接射在了最深处。',
  );
  await era.printAndWait('黏糊糊的，似乎要把她的喉咙给缝住。');
  await era.printAndWait([
    vp.get_colored_name(),
    ' 本能地翻起白眼，等 ',
    me.get_colored_name(),
    ' 肉棒拔出，几滴精液还落到了地毯上。',
  ]);
  await era.printAndWait([vp.get_colored_name(), ' 捂着嘴，快速爬起来。']);
  await era.printAndWait('几点精液已经从嘴角溢出，玷污了她白色的丝质手套。');
  await vp.say_and_wait('咕……嗯嗯，唔。');
  await era.printAndWait([vp.get_colored_name(), ' 低着头，喉咙滚动着']);
  await era.printAndWait([
    '白色的精液从嘴里被一点点地咽下，比被 ',
    me.get_colored_name(),
    ' 口爆时更加恶心。',
  ]);
  await era.printAndWait('她那整整齐齐的白洁牙齿，也一一沾上了精液。');
  await era.printAndWait('一些精液还粘着上齿和下齿，在她的嘴里拉丝。');
  await vp.say_and_wait('哈啊……gros nigaud！');
  era.printButton('「真对不起。」', 1);
  await era.input();
  await quick_make_love(
    new EroParticipant(0, part_enum.abuse),
    new EroParticipant(205, part_enum.masochism),
    false,
  );
  set_palam_to_max(205, part_enum.clitoris);
  await quick_make_love(
    new EroParticipant(0, part_enum.mouth),
    new EroParticipant(205, part_enum.virgin),
    false,
  );
  set_palam_to_max(0, part_enum.penis);
  await quick_make_love(
    new EroParticipant(205, part_enum.mouth),
    new EroParticipant(0, part_enum.penis),
    false,
  );
  end_ero_and_train();
  era.println();
  await sys_love_uma_in_event(205);
};

handlers[74] = require('#/event/love/love-events-205/girl-friend');

handlers[89] = require('#/event/love/love-events-205/wife');

handlers[99] = require('#/event/love/love-events-205/half-life');

/**
 * 金星公园 - 爱慕
 *
 * @author 梦露
 *
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const me = get_chara_talk(0),
    vp = get_chara_talk(205);
  if (event_object && handlers[event_object.arg]) {
    await handlers[event_object.arg](vp, me);
  } else {
    const love = era.get('love:205');
    if (handlers[love]) {
      await handlers[love](vp, me);
    } else {
      throw new Error();
    }
  }
};
