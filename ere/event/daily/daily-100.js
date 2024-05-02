const era = require('#/era-electron');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');
const callname = sys_get_callname(100, 0);

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  const talk_arr = [
    `哎呀哎呀……${callname}~不去跟其他年轻可爱的好孩子们聊天了吗？`,
    '早上好哦，早饭已经吃了吗？不可以不吃早饭的哦。',
    '如果还没有吃的话，我推荐纳豆拌饭，或者是稀饭配嘎吱嘎吱干哦~对身体可好了。',
  ];
  get_chara_talk(100).say(get_random_entry(talk_arr));
};

handlers[event_hooks.good_morning] = function () {
  const talk_arr = [
    `哎呀呀……看来是有在认真的工作呢~要吃一点刚腌好的糖拌红西柿吗？补充了足够的糖分，下午的训练也能够打起精神哦。`,
    `${callname}穿的衣服很单薄呢……到秋天的话，要多穿一点衣服哦。要是穿的太少了感冒了的话，可是会很难受的哦。`,
    `等训练结束了之后啊，我想要去腌些嘎吱嘎吱干呢。这样等到了明天，${callname}就可以拿这些嘎吱嘎吱干分享给其他好孩子，跟他们搞好关系了吧？`,
    `哎呀呀……看起来很精神呢，${callname}，是发生了什么好事了吗？呼吼吼……看来要帮你准备${get_random_entry(
      ['红豆饭', '嘎吱嘎吱干', '糖拌红西柿', '红烧鲤鱼'],
    )}了呢~`,
  ];
  get_chara_talk(100).say(get_random_entry(talk_arr));
};

handlers[event_hooks.talk] = async function () {
  let talk_arr;
  switch (era.get('cflag:100:干劲')) {
    case -2:
      talk_arr = [
        `…唏唷唷……完全使不上劲呢~。`,
        `唔……话说，接下来要做什么来着呢？今天迷迷糊糊的，不小心给忘了啊。`,
        `库呼呼……差点睡过去了呢。这样可不行呢，得在鼻子下面稍微抹点清凉膏……`,
        `扑通……啊，差点踩到青蛙了（摔了一跤）呢~`,
        `嗯……回去还要腌卡擦咔嚓干呢，不打起精神来可不行呢~——`,
      ];
      break;
    case -1:
      talk_arr = [
        `呼……坚持就是力量呢~所以不要紧的哦。`,
        `哎嘿嘿……稍微有点使不上劲了呢。`,
        `呼呼呼，要像同龄人一样努力才行呢。`,
        `深呼吸——呼、呼~得继续绷紧神经才行呢。`,
        `注意力……被眼前呼呼飞的小苍蝇给打乱了呢——`,
      ];
      break;
    case 0:
      talk_arr = [
        `争口气~好，靠着墙边拍了一下背，精神了呢。`,
        `${callname}，我们开始训练吧~`,
        `阔胸运动——已经做完了哦~。`,
        `今天也踏踏实实、一步一个脚印的努力吧~`,
        `该走了哦，${callname}。`,
      ];
      break;
    case 1:
      talk_arr = [
        `嗯~那么，${callname}，今天的训练是什么呢~？`,
        `不管是什么训练，我都会认~真~对待的哦。`,
        `盐分补给也很重要，来吃一点嘎吱嘎吱干吧~`,
        `哼、哼~拉伸运动准备到位~接下来要认真上了哦。`,
        `啊~${callname}，刚刚你说了什么啊？`,
      ];
      break;
    case 2:
      talk_arr = [
        `呼呼呼~更加严格的训练也是可以的哦。`,
        `阿拉啦……已经到训练的时间了啊~`,
        `今天天气很好呢~看着太阳公公啊，总感觉干劲十足了~`,
        `哎呀呀……看到了赛道啊，总感觉心里痒呼呼的呢~`,
        `训练结束了之后啊，我想要把被子拿出来晒呢~${callname}一会儿能来陪我吗？`,
      ];
      break;
  }
  await get_chara_talk(100).say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_gift] = async function () {
  const chara_talk = get_chara_talk(100);
  if (era.get('love:100') > 75) {
    await chara_talk.say_and_wait(
      '哎呀哎呀，这是送给我的礼物吗？没必要这么费心的啦~',
    );
    await chara_talk.say_and_wait(`对了，${callname}，之前说的计生工……`);
    await era.printAndWait('……奇锐骏的声音忽地暗了下来。');
    await chara_talk.say_and_wait('那个……带了吗？');
    await chara_talk.say_and_wait('……哪个“带”？');
    await chara_talk.say_and_wait('唔…………');
    await era.printAndWait('奇锐骏似乎有些生气的嘟起了嘴。');
    await era.printAndWait(
      `一向沉稳、处变不惊的奇锐骏，只有在这个时候，才会变得像是同龄人的羞涩${chara_talk.get_teen_sex_title()}。`,
    );
    await era.printAndWait(`总感觉，有些想要捉弄${chara_talk.sex}的恶趣味——`);
    await chara_talk.say_and_wait('……………………');
    await era.printAndWait('青空之下，与羞涩的奇锐骏度过了一段快乐的时光。');
  } else if (era.get('love:100') > 50) {
    await chara_talk.say_and_wait(
      '哎呀哎呀，这是送给我的礼物吗？没必要这么费心的啦~',
    );
    await chara_talk.say_and_wait(`对了，${callname}，计生工具用上了吗？`);
    await chara_talk.say_and_wait(
      '年轻气盛是很好的啦，但是嘛，训练员和担当马娘之间还是要注意分寸的哦~',
    );
    await chara_talk.say_and_wait('等毕业了之后，在真刀实枪的去做吧~');
    await chara_talk.say_and_wait(
      `到那时候，别忘了让我来抱抱${callname}的孩子啦~`,
    );
    await era.printAndWait('……与平静温和的奇锐骏，谈论了关于生育的话题。');
    await era.printAndWait('…………感觉自己脸红的不行。');
  } else if (Math.random() > 0.5) {
    await chara_talk.say_and_wait(
      '哎呀哎呀，这是送给我的礼物吗？真是不好意思呢~',
    );
    await chara_talk.say_and_wait(`来坐在这里吧，${callname}。`);
    await chara_talk.say_and_wait(
      '不要走动哦，我去取刚腌好的嘎吱嘎吱干，等下要一起吃哦。',
    );
    await era.printAndWait('……跟奇锐骏一起吃了苦涩却又清脆的嘎吱嘎吱干。');
  } else {
    await chara_talk.say_and_wait(
      '哎呀哎呀，这是送给我的礼物吗？真是不好意思呢~',
    );
    await chara_talk.say_and_wait(
      `说起来，骏川${chara_talk.sex}说啊，今天可能要下雨了呢。`,
    );
    await chara_talk.say_and_wait(`${callname}没有带伞对吧？`);
    await chara_talk.say_and_wait('我这里有备用的伞呢~直接拿去用吧。');
    await era.printAndWait('……被奇锐骏强硬的塞进手里了一把天堂伞。');
  }
};

handlers[event_hooks.office_cook] = async function () {
  if (Math.random() > 0.5) {
    await era.printAndWait(
      '傍晚，向奇锐骏请教了制作好吃的「嘎吱嘎吱干」的秘诀——',
    );
    await get_chara_talk(100).say_and_wait(
      '腌嘎吱嘎吱干的秘诀吗？嗯……如果说秘诀的话，那果然是要用好的石坛……',
    );
    await era.printAndWait('………………');
    await era.printAndWait('学到了不少关于「腌制」的知识。');
  } else {
    await era.printAndWait('与奇锐骏一同做饭……');
    await era.printAndWait('但被“不用麻烦你了”之类的话给搪塞出厨房了。');
    await get_chara_talk(100).say_and_wait(
      `不用忙了啦，${callname}。你只要坐在客厅里就可以了，饭很快就好了哦~？稍微等一下哦~`,
    );
    await era.printAndWait('………………');
    await era.printAndWait('突然在一瞬间，自己的眼前浮现了母亲的身影。');
  }
};

handlers[event_hooks.office_study] = async function () {
  if (Math.random() > 0.5) {
    await get_chara_talk(100).say_and_wait('要学习吗~？嗯……得好好努力~');
    await era.printAndWait(
      '坐在客厅里，捧着一本「五年赛马，三年模拟」的自己，正向奇锐骏讲解着习题——',
    );
  } else {
    await get_chara_talk(100).say_and_wait(
      '哇啊啊啊~学习原来是这么困难的事情啊……',
    );
    await era.printAndWait(
      '面对着摊开在面前的「五年赛马，三年模拟」一向温和的奇锐骏难得的露出了困扰的神色。',
    );
    await era.printAndWait(
      `或是新奇，或是恶趣，${sys_get_callname(0, 0)}不禁苦笑出了声——`,
    );
  }
};

handlers[event_hooks.office_prepare] = async function () {
  await get_chara_talk(100).say_and_wait(
    Math.random() > 0.5
      ? '下一场比赛吗？……嗯~该采取什么战术呢？'
      : '哦呀？要去下一次比赛的赛场转转吗？',
  );
};

handlers[event_hooks.office_game] = async function () {
  if (Math.random() > 0.5) {
    await get_chara_talk(100).say_and_wait(
      '游戏吗……其实我不太明白该怎么操控机器呢——',
    );
    await era.printAndWait(
      '不断将视线从显示器与遥控器上来回切换的奇锐骏，用两根竖着的食指触碰着放在地上的手柄。',
    );
    await era.printAndWait('……说实话，实在是怪可爱的。');
  } else {
    await get_chara_talk(100).say_and_wait(
      '游戏机——啊，我以前听故乡里邻居的小孩说过呢。是可以玩坦克大战的那种对吧？',
    );
    await era.printAndWait('噗——差点笑出了声。');
    await era.printAndWait('坦克大战……那得是多少年前的小孩了啊？');
  }
};

handlers[event_hooks.school_atrium] = async function () {
  const chara_talk = get_chara_talk(100);
  const temp = await select_action_in_atrium();
  if (!temp) {
    await era.printAndWait(
      `中庭后面的枯树洞，常有${chara_talk.get_uma_sex_title()}在比赛前，对着树洞呐喊自己的愿望来释放自身压力。`,
    );
    await era.printAndWait(
      '但平日里看似总是悠闲的的奇锐骏，似乎更喜欢坐在树洞里。',
    );
    await chara_talk.say_and_wait('嗯……这里可真安静呢~');
    await era.printAndWait(
      '奇锐骏依旧温和得说着，脸上的表情似乎产生了些许的变化……',
    );
  } else {
    if (era.get('love:100') > 90) {
      await chara_talk.say_and_wait(
        `人来人往的中庭，想要在这里忍受其他${chara_talk.get_uma_sex_title()}的视线进行约会，恐怕需要很强大的毅力……`,
      );
      await chara_talk.say_and_wait('啊……要在这里约会吗？我不介意的哦~');
      await chara_talk.say_and_wait(
        `奇锐骏似乎并不在乎周围${chara_talk.get_uma_sex_title()}的目光……`,
      );
      await era.printAndWait(
        '人来人往的中庭，相爱的二人，在角落中湖湘着拥抱——',
      );
      await era.printAndWait('………………');
      await era.printAndWait('与奇锐骏一同度过了极好的中午。');
    } else {
      await chara_talk.say_and_wait(
        `人来人往的中庭，想要在这里忍受其他${chara_talk.get_uma_sex_title()}的视线进行约会，恐怕需要很强大的毅力……`,
      );
      await chara_talk.say_and_wait('啊……要在这里约会吗？我不介意的哦~');
      await chara_talk.say_and_wait(
        `奇锐骏似乎并不在乎周围${chara_talk.get_uma_sex_title()}的目光……`,
      );
      await era.printAndWait('但没有勇气真正踏出那一步的其实是自己。');
      await era.printAndWait('——感受到了来自奇锐骏期待的目光。');
      await chara_talk.say_and_wait(
        '后面的内容，等「爱」更多了，再来探索吧（苦笑）。',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        '顺带一提——想要在人来人往的中庭跨出这一步，还需要如钢一般的意志——',
      );
    }
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  if (Math.random() < 0.5) {
    await era.printAndWait('午休时分，与奇锐骏在天台吃着便当。');
    era.printButton('「嘎吱嘎吱嘎吱——」', 1);
    await era.input();
    await era.printAndWait('一如既往温和而清脆的口感——');
    await get_chara_talk(100).say_and_wait('呵呵~不要紧，这儿还有很多哦~');
    await era.printAndWait('望着奇锐骏的笑容，心中充斥着幸福感。');
    await era.printAndWait('…………');
  } else {
    await era.printAndWait('午休时分，与奇锐骏在天台吃着便当。');
    era.printButton('「嘎吱嘎吱嘎吱——」', 1);
    await era.input();
    await era.printAndWait('似乎比日常更多了些许咸味的口感——');
    await get_chara_talk(100).say_and_wait(
      `最近天气有些热呢，出很多汗的话身体的盐分就会不足哦？所以多加了一些盐呢——${callname}，喜欢吗？`,
    );
    await era.printAndWait('那还用说吗？当然是喜欢的。');
    await era.printAndWait('…………');
  }
};

handlers[event_hooks.out_river] = async function (stage_id) {
  const chara_talk = get_chara_talk(100);
  stage_id.arg = !!(await select_action_around_river());
  if (stage_id.arg) {
    if (Math.random() < 0.5) {
      await chara_talk.say_and_wait('唏唷唷~风来了，雨来了，雷公敲着鼓来了。');
      await era.printAndWait(
        '似乎是心情很不错的样子，奇锐骏沿着河道哼起了歌。',
      );
      await era.printAndWait(
        '……不知为何，听着奇锐骏哼着小曲，总感觉有些困了。',
      );
    } else {
      await chara_talk.say_and_wait(
        `${callname}，虽然来河边散步很风雅啦，但还是要小心不能太靠近河边，要是掉进河沟里就不好了呢。`,
      );
      await era.printAndWait('在河边漫步着的奇锐骏少有得一脸严肃的说教着。');
      await era.printAndWait('……不过，总感觉奇锐骏很开心啊。');
    }
  } else {
    await era.printAndWait('与奇锐骏相约去河边钓鱼……');
    if (Math.random() < 0.5) {
      await chara_talk.say_and_wait('哎呀哎呀，天气真好呢~……');
      await era.printAndWait(
        '手持着鱼竿的奇锐骏，向着浮云与太阳露出了和蔼的微笑。',
      );
      await era.printAndWait(
        '奇锐骏的身边似乎洋溢起了让人可以放下一切的慵懒氛围。',
      );
      await era.printAndWait(
        `……总感觉${sys_get_callname(0, 0)}和${
          chara_talk.name
        }不是来钓鱼的，而是来晒太阳的啊。`,
      );
    } else {
      await era.printAndWait(
        '——可话虽如此，奇锐骏却并没有拿着竿。而是拿着连着鱼标鱼勾的鱼线，装上鱼饵后握直接抛入了水中。',
      );
      await chara_talk.say_and_wait(
        '嘿咻……呼鲁~这样就好了呢~接下来，只要等小鱼儿上钩，然后就可以一网打尽了呢~',
      );
      await era.printAndWait('……这样真的能钓到鱼吗?');
      await era.printAndWait('——刚这样想着，鱼标就开始咕噜噜的下沉。');
    }
  }
};

handlers[event_hooks.out_church] = async function () {
  const chara_talk = get_chara_talk(100);
  await chara_talk.say_and_wait('阿拉拉……要去神社祈福吗？');
  await era.printAndWait(
    '休息日的前一天，跟奇锐骏提出了一同去神社祈福的计划。',
  );
  await chara_talk.say_and_wait(
    '这样吗……那如果要去神社的话~不做好准备可不行呢……',
  );
  await era.printAndWait(
    '就跟预想的一样，有些老气的奇锐骏对这“祈福”这类的活动果然很上心。。',
  );
  await chara_talk.say_and_wait('不过哟……要去神社的话，得起早去才行呢……');
  await chara_talk.say_and_wait('还要提前备上岁钱和供香……');
  await chara_talk.say_and_wait(
    '还有供品……哎呀哎呀，今天晚上得腌一点嘎吱嘎吱干了呢……',
  );
  await chara_talk.say_and_wait('……是不是有点太过上心了？');
  await chara_talk.say_and_wait(
    '去神社参拜啊，越早越好呢，因为越早心越诚啊。所以明天要早起两个小时去做准备呢——',
  );
  await chara_talk.say_and_wait(
    `啊，${callname}不用起的那么早哦？因为要做准备的事我这边的啦。年轻人得多睡一会儿~。等到要出发的时候，我再去叫你起床吧~`,
  );
  await era.printAndWait(
    `总有一种被当做${
      get_chara_talk(0).sex_code - 1 ? '孙女' : '孙子'
    }对待的感觉啊……`,
  );
  await era.printAndWait('还有，你不也是年轻人吗？');
  if (Math.random() > 0.5) {
    await chara_talk.say_and_wait('哎呀哎呀，大吉吗？感觉会有好事情发生呢~');
    await era.printAndWait('手中握着大吉签的奇锐骏露出了和蔼的微笑。');
    await era.printAndWait(
      '这也是理所当然的吧？毕竟特地早了两个小时起床来准备去神社祈福。',
    );
    await chara_talk.say_and_wait('所谓天道酬勤——就是这么一回事吧。');
    await chara_talk.say_and_wait(`怎么啦，${callname}？你看起来很开心呢。`);
    await era.printAndWait('……脸上的笑意被发现了吗？');
    await era.printAndWait('总之找个理由糊弄过去好了。');
    await era.printAndWait('不管怎样，不能让奇锐骏发现自己孩子气的一面啊……');
  } else {
    await chara_talk.say_and_wait(
      '大凶啊……看起来最近得多做点好事积攒功德才行了呢~',
    );
    await era.printAndWait(
      `手中握着大凶签的奇锐骏一如既往平和的说着。大凶签似乎并没有给予${chara_talk.sex}情绪上的波动。`,
    );
    await era.printAndWait('……可话虽如此，总感觉很不爽。');
    await era.printAndWait('明明提早了两个小时来准备去神社祈福的啊……');
    await chara_talk.say_and_wait(
      `怎么啦，${callname}？你看起来不太高兴呢？。`,
    );
    await era.printAndWait('……脸上的恼意被发现了吗？');
    await era.printAndWait('总之找个理由糊弄过去好了。');
    await era.printAndWait('不管怎样，不能让奇锐骏发现自己孩子气的一面啊……');
  }
};

handlers[event_hooks.out_shopping] = async function (stage_id) {
  const chara_talk = get_chara_talk(100);
  const temp = await select_action_in_shopping_street();
  stage_id.arg = temp <= 2;
  switch (temp) {
    case 0:
      if (Math.random() > 0.5 && era.get('love:100') > 50) {
        await era.printAndWait('与奇锐骏一同去了街机厅……');
        await chara_talk.say_and_wait(
          `哎呀哎呀~${callname}，可以的话，能陪我试试看拳击机吗？`,
        );
        await era.printAndWait(
          `奇锐骏活动着右臂，轻轻的躬起上身，将所有的注意力集中在了拳击机，一向温和的${chara_talk.sex}此刻眼神中燃烧起了熊熊斗志。`,
        );
        await era.printAndWait(
          '……从身后望着奇锐骏因躬身而翘起的丰满臀部，心中突然涌现出了邪恶的想法。',
        );
        await era.printAndWait(
          `悄悄地靠近着将注意力完全集中在拳击机上的奇锐骏，趁${chara_talk.sex}专心预备挥拳而翘起丰臀之际，伸出罪恶的右手悄悄蓄力——`,
        );
        era.printButton('「啪！」', 1);
        await era.input();
        await chara_talk.say_and_wait('咿呀~！？');
        await era.printAndWait('那是夹杂着羞涩与某种兴奋感的颤音。');
        await era.printAndWait(
          `如果是往常，根本无法想象老气横秋的奇锐骏能发出这样小${chara_talk.get_child_sex_title()}的声音呢。`,
        );
        await era.printAndWait(
          '丰臀那饱满与一颤一颤的触感仍然新鲜且是如此的让人难以忘怀。满足与罪恶夹杂的施虐心让心中似乎开始了难以平息的悸动。',
        );
        await era.printAndWait(
          '然而，正当感动之情仍存于心中之时，奇锐骏那蓄势待发的拳头却悄无声息的击发了。',
        );
        era.printAndWait('砰！！！！！！！');
        await era.printAndWait('那是远比背股一击还要剧烈的声响。');
        await era.printAndWait(
          '机械臂已然扭曲、液晶屏更是碎裂，拳击机上冒出了散发着焦味的浓浓白烟。',
        );
        await era.printAndWait('……阿勒？');
        await era.printAndWait('奇锐骏的拳力……原来有这么强的吗？');
        await era.printAndWait(
          '之前来街机厅的时候，明明排名也仅仅是在特雷森学院里中等偏上的，即便是特别有功的人类体育生也能够达到的水平啊？',
        );
        await era.printAndWait(
          '一击就击坏拳击机？哎？难不成奇锐骏之前一直在隐藏自己的实力……',
        );
        await chara_talk.say_and_wait('唔~……唔！——');
        await era.printAndWait(
          '一只手抚着自己丰臀的奇锐骏，慢慢地回国了头。夹杂着泪珠却又没有哭意的眼神之中，夹杂着某种不知是娇羞还是厌恶的，某种一言难尽的神色。',
        );
        await era.printAndWait(
          `${chara_talk.sex}嘟起了嘴，小小的气体撑起了${chara_talk.sex}的脸颊，这是${chara_talk.sex}看起来最有活力，也最像同龄人一般可爱的时刻。`,
        );
        await era.printAndWait('——如果没有那只正缓缓举起作拳击状的右手的话。');
        await era.printAndWait('………………');
        await era.printAndWait('…………');
        await era.printAndWait('……');
        await era.printAndWait(
          '总之，事后以说教的形式，总算取得了奇锐骏的原谅。',
        );
        await era.printAndWait(
          `不过从那一天开始，在训练时，总感觉奇锐骏有时会向${sys_get_callname(
            0,
            0,
          )}投来某种异常的视线。`,
        );
        await era.printAndWait(`……应该是${sys_get_callname(0, 0)}的错觉吧？`);
        era.println();
        sys_like_chara(100, 0, 20);
        get_attr_and_print_in_event(100, [0, 0, 0, 10, 0], 0);
        //todo M属性增加
        await era.waitAnyKey();
      } else {
        await era.printAndWait('与奇锐骏一同去了街机厅……');
        await chara_talk.say_and_wait(
          `哎呀哎呀~${callname}，可以的话，能陪我试试看拳击机吗？`,
        );
        await era.printAndWait(
          `奇锐骏活动着右臂，轻轻的躬起上身，将所有的注意力集中在了拳击机，一向温和的${chara_talk.sex}此刻眼神中燃烧起了熊熊斗志。`,
        );
        await era.printAndWait('……感觉看到了奇锐骏的另一面。');
      }
      break;
    case 1:
      await era.printAndWait('与奇锐骏一同参加了商店街组织的抽奖活动……');
      await chara_talk.say_and_wait('要是能抽到新鲜的嘎吱嘎吱卜就好了呢~');
      await era.printAndWait('咕噜咕噜咕噜咕噜……');
      await era.printAndWait('biu~');
      stage_id.arg = get_random_value(0, 4);
      switch (stage_id.arg) {
        case 0:
          await era.printAndWait('获得了商店街的奖品：【抽拉式纸巾】！');
          await chara_talk.say_and_wait(
            `哎呀哎呀~感觉${callname}晚上的时候用得上呢~`,
          );
          await era.printAndWait('………………');
          await era.printAndWait(
            `不不不！${sys_get_callname(0, 0)}是不会用的好吗！？`,
          );
          break;
        case 1:
          await era.printAndWait('获得了商店街的奖品：【普通的纸巾】！');
          await chara_talk.say_and_wait(
            '普通的纸巾吗……可以拿来做食物的垫子呢~',
          );
          await era.printAndWait(
            '虽然只是最低级的奖品，但奇锐骏依旧开心的从服务员的手中接过了纸巾——',
          );
          break;
        case 2:
          await era.printAndWait('获得了商店街的奖品：【胡萝卜】！');
          await chara_talk.say_and_wait(
            '哦阿？原来抽奖真的能抽出嘎吱嘎吱卜啊~',
          );
          await era.printAndWait('奇锐骏的脸上露出了喜悦的神情——');
          break;
        case 3:
          await era.printAndWait('获得了商店街的奖品：【一筐胡萝卜】！');
          await chara_talk.say_and_wait(
            '一个、两个、三个……哎呀呀，这个份量，能做一个礼拜份的嘎吱嘎吱干了呢。',
          );
          await chara_talk.say_and_wait(
            `等嘎吱嘎吱干做好了之后啊，${callname}，我们就拿去分给特雷森里的大家吧？`,
          );
          await era.printAndWait('奇锐骏回过了头，温和的笑容中闪烁出了佛光——');
          break;
        case 4:
          await era.printAndWait('获得了商店街的奖品：【斗魂注入鞭（S用）】！');
          await era.printAndWait(
            '喂喂喂喂喂！是谁把少儿不宜的东西当做奖品放在全年龄的商店街的抽奖活动里的啊！？',
          );
          await era.printAndWait('这种东西怎么说也得放在成人街的抽奖机里——');
          await chara_talk.say_and_wait('哎呀呀,好帅气的九节鞭啊~');
          await era.printAndWait(
            '似乎是误解了用途？接过斗魂注入鞭（S用）的奇锐骏眼中闪烁起了光芒……',
          );
          await chara_talk.say_and_wait(
            `嗯……感觉${callname}给人的感觉就对这种道具非常的熟练啊——`,
          );
          era.printButton(
            '「请不要说这种会被骏川${chara_talk.get_adult_sex_title()}盯上的话。」',
            1,
          );
          await era.input();
          await chara_talk.say_and_wait(
            '嗯姆？为什么会被骏川${chara_talk.get_adult_sex_title()}盯上呢？',
          );
          era.printButton('「啊，这个吗……」', 1);
          await era.input();
          await era.printAndWait('………………');
          await era.printAndWait(
            '姑且在没有解释“为什么会被骏川${chara_talk.get_adult_sex_title()}盯上”的情况下将这个糊弄了过去。',
          );
          await era.printAndWait(
            '从奇锐骏的手中收下的斗魂注入鞭（S用）姑且放在了训练室的仓库拐角生蜘蛛网的角落之中。',
          );
          await era.printAndWait('………………');
          await era.printAndWait(
            '至于奇锐骏其实知道斗魂注入鞭（S用）的正确用法后从而“大放异彩”的即辛辣又热血还夹杂着桃色肥臀的故事，则是后来的事了——',
          );
          //todo 特殊道具
          break;
      }
      break;
    case 2:
      if (Math.random() > 0.5) {
        await chara_talk.say_and_wait('步步紧逼的~帝王~是巴比伦的军团~');
        await era.printAndWait(
          '一首有着年代感的歌曲，似乎是某部特摄的主题曲？',
        );
        await era.printAndWait(
          '闭上眼睛，能感觉到骑着摩托的奇锐骏正在追逐着什么——',
        );
      } else {
        await chara_talk.say_and_wait('瞄准着的~黑暗的影子~守护三女神的和平~');
        await era.printAndWait(
          '能感觉到少年心的歌曲，非常适合就着萝卜干来品鉴。',
        );
        await era.printAndWait(
          '闭上眼睛，似乎能看到奇锐骏叉着腰站在栏杆上的样子——',
        );
        await era.printAndWait('……等等！你别真上去啊！');
      }
      break;
    case 3:
      if (Math.random() < 0.5) {
        await era.printAndWait('与奇锐骏一同去看电影……');
        await era.printAndWait(
          `故事讲述了一个天生残障的${chara_talk.get_uma_sex_title()}，是如何在自强不息、屡败屡战的奋斗之中得到了三女神的眷顾，在多场赛事中创造了众多奇迹的故事——`,
        );
        await chara_talk.say_and_wait(
          `嗯……真是热血的故事呢，${callname}——等回去之后，可以增加额外的训练吗？`,
        );
        await era.printAndWait('似乎点燃了奇锐骏的热血……');
      } else {
        await era.printAndWait('与奇锐骏一同去看电影……');
        await era.printAndWait(
          `故事讲述了一位而立之年的${chara_talk.get_uma_sex_title()}，为了实现在年轻时与已故的训练员老伴一同环游世界的梦想，而与在路上结伴相识的关西小${chara_talk.get_uma_sex_title()}一同进行环球奔跑旅行的传奇故事——`,
        );
        await chara_talk.say_and_wait(
          '嗯……这是浪漫的故事呢~哎呀哎呀，如果可以的话，我也想要进行这样一场旅行呢——',
        );
        await era.printAndWait(
          '发出了如此感慨过后，在放映结束之前，总能感受到来自奇锐骏的视线……',
        );
      }
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const chara_talk = get_chara_talk(100);
  hook.arg = await select_action_in_station(100);
  switch (hook.arg) {
    case 0:
      if (Math.random() < 0.5) {
        await era.printAndWait('与奇锐骏一同在车站前品尝了热气腾腾的油豆腐……');
        await chara_talk.say_and_wait('呼、呼……啊呜~嗯呜~……嗯呜呜♥~');
        await era.printAndWait('一面吹着油豆腐的热气，一面小口小口的咀嚼。');
        await era.printAndWait(
          '蒸腾的热气从奇锐骏的口中缓缓散出，舌头与咽喉随之发起了细微的共振。',
        );
        await chara_talk.say_and_wait('咕~嗯……哈——');
        await era.printAndWait(
          '坐在奇锐骏的对面，能够听到那出于礼仪而刻意而又小心掩盖着得细微吞咽声……',
        );
        await chara_talk.say_and_wait('……？');
        await era.printAndWait(
          '啊，不好，自己过于专心于奇锐骏嘴角那舌尖与热气的视线，似乎被奇锐骏发现了……',
        );
        await chara_talk.say_and_wait('…………');
        await era.printAndWait(
          `${chara_talk.sex}看向了${sys_get_callname(
            0,
            0,
          )}碗中尚未动过的油豆腐，眉头微皱，好似有些许不满。`,
        );
        await era.printAndWait(
          '但毕竟正在进食，又不好发出声。所以只好嘟起了脸蛋，表达着小小的抗议。',
        );
        await era.printAndWait(
          `随后，伸出并未捧着碗的左手，像是在回避着${sys_get_callname(
            0,
            0,
          )}那有些许下流般的视线，遮挡在了自己散发着热气的嘴唇之前。`,
        );
        await era.printAndWait(
          '于是，微微皱着眉头的奇锐骏，用手遮住了自己正散发着自己热气的半面——',
        );
        await era.printAndWait('…………');
        await era.printAndWait('奇锐骏，搞不好其实是个那方面的天才吧？');
      } else {
        await era.printAndWait(
          '奇锐骏一同在车站前品尝了车站便利店前的特价萝卜干……',
        );
        era.printButton('「嘎吱——」', 1);
        await era.input();
        await era.printAndWait(
          '嗯，出入口的口感还是挺脆的，作为便利店出售的萝卜干来说，已经算是很不错了……',
        );
        era.printButton('「嘎吱嘎吱——」', 1);
        await era.input();
        await era.printAndWait(
          '但仔细品尝的话，果然跟奇锐骏做的嘎吱嘎吱干还是差的很远啊……',
        );
        await era.printAndWait(
          '无论是因为放置的太久后导致缺乏水分而多多少少的有些磕牙，',
        );
        await era.printAndWait(
          '还是这不知是刻意的为了延长保质期还是为了吸引偏向大众重口味而进行的咸味腌制……',
        );
        era.printButton('「嘎吱嘎吱嘎吱——」', 1);
        await era.input();
        await era.printAndWait('越是咀嚼就越是感觉到咸味在口腔中扩散，');
        await era.printAndWait(
          '本就缺乏水分的萝卜干在这咸气十足的环境中反而在争抢着分泌出的为数不多的唾液……',
        );
        await chara_talk.say_and_wait(`${callname}君，水在这里哦~`);
        await era.printAndWait(
          '接过奇锐骏递过来的用保温杯的瓶盖所盛好的温水，便是一场酣畅淋漓的豪饮。',
        );
        era.printButton('「咕噜、咕噜——」', 1);
        await era.input();
        await era.printAndWait('哈……多亏了奇锐骏，得救了。');
        await era.printAndWait(
          '可恶，差点就中了便利店利用特价萝卜干兜售瓶装快乐水的阴谋！',
        );
        await era.printAndWait('嘎吱嘎吱干明明应该是那种。');
        await era.printAndWait('虽然有点咸，但品尝起来也不会太过干瘪。');
        await era.printAndWait('刺激唾液的同时，不会跟人体抢夺水分。');
        await era.printAndWait(
          '又脆又咸却又容易入口，在运动训练结束后不适宜大量喝水的那段时间里，可以通过嘎吱嘎吱干适量的刺激唾液分泌而缓解口渴感的，好吃又营养还能辅助训练的美味食物才对！',
        );
        await era.printAndWait(
          '竟然把美味好吃又营养的嘎吱嘎吱干做成这种充满了阴谋的工业商品……便利店，你真可恶——',
        );
        await chara_talk.say_and_wait(
          `呐，${callname}。等回去之后，能来我的房间里吃点嘎吱嘎吱干吗？`,
        );
        await era.printAndWait(
          `如同看穿了${sys_get_callname(
            0,
            0,
          )}的心事一般，站在${sys_get_callname(
            0,
            0,
          )}旁边的奇锐骏，用不紧不慢的语气适时的插入进了${sys_get_callname(
            0,
            0,
          )}内心的独白。`,
        );
        era.printButton('「哈！那还用说？!」', 1);
        await era.input();
        await era.printAndWait(
          '豪爽的同意了奇锐骏邀约，当天夜里在奇锐骏的房间里吃了个爽。',
        );
      }
      break;
    case 1:
      if (Math.random() > 0.5 && era.get('love:100') > 75) {
        await era.printAndWait('休息日与奇锐骏约好了去车站约会——');
        await chara_talk.say_and_wait('嗯……最近总感觉腰有些酸呢~');
        await era.printAndWait('毫无预兆的，奇锐骏突然说道。');
        await chara_talk.say_and_wait(
          `${callname}，今天晚上，可以帮我放松一下吗？`,
        );
        await era.printAndWait(
          `正说着，奇锐骏在街上毫不客气的拍了拍${sys_get_callname(
            0,
            0,
          )}的腰，脸上浮现出了颇有深意的笑容。`,
        );
        await era.printAndWait('………………');
        //todo 道具检测
        if (Math.random() > 0.5) {
          await chara_talk.say_and_wait(
            `呐。${callname}，今天可以……用上【那个】了吗？`,
          );
          await era.printAndWait(
            `粉红的嘴唇泛起了透明的汁液，身为${chara_talk.get_teen_sex_title()}的猛兽露出了${
              chara_talk.sex
            }的獠牙。`,
          );
          await era.printAndWait(
            '心领神会，带着奇锐骏偷偷的来到了车站无人的角落……',
          );
          await era.printAndWait('拿出了训练猛兽的斗魂注入鞭——');
          await chara_talk.say_and_wait('…………');
          await chara_talk.say_and_wait('！');
          await chara_talk.say_and_wait('————');
          await chara_talk.say_and_wait('♥~');
          era.println();
          get_attr_and_print_in_event(0, [0, 0, 10, 0, 0], 0);
          get_attr_and_print_in_event(100, [0, 0, 0, 10, 0], 0);
          sys_change_motivation(100, 1);
          const to_print = sys_change_attr_and_print(100, '体力', -100);
          if (to_print) {
            era.println();
            await era.printAndWait([
              chara_talk.get_colored_name(),
              ' 的 ',
              ...to_print,
            ]);
          }
          const to_print1 = sys_change_attr_and_print(100, '精力', 100);
          if (to_print1) {
            era.println();
            await era.printAndWait([
              chara_talk.get_colored_name(),
              ' 的 ',
              ...to_print1,
            ]);
          }
          //todo 奇锐骏M属性上升。训练员S属性上升
          await era.waitAnyKey();
        } else {
          await era.printAndWait('还没说完，自己便已被抱住。');
          await era.printAndWait(
            `被身为${chara_talk.get_teen_sex_title()}的猛兽紧紧得抱住，自身绝没有逃脱的可能。`,
          );
          await era.printAndWait(
            '自古以来驯“兽”的工作中，喂食都是一种极其危险的工作。',
          );
          await era.printAndWait(
            '一旦未能让对方感到满足，那么喂食者便可能成为猛兽的饵食——',
          );
          await chara_talk.say_and_wait('♥——————');
          await era.printAndWait('深邃的眼眸中，散射出了桃红的色泽。');
          await era.printAndWait(
            `这是名为${chara_talk.get_teen_sex_title()}的猛兽所发出的“进食”信号。`,
          );
          await era.printAndWait('………………');
          await era.printAndWait('看来今天夜里，注定了是一场殊死的决斗了。');
          era.println();
          get_attr_and_print_in_event(0, [0, 10, 0, 0, 0], 0);
          get_attr_and_print_in_event(100, [0, 0, 10, 0, 0], 0);
          const to_print = sys_change_attr_and_print(0, '体力', -100);
          if (to_print) {
            era.println();
            await era.printAndWait([
              chara_talk.get_colored_name(),
              ' 的 ',
              ...to_print,
            ]);
          }
          //todo 奇锐骏员S属性上升
          await era.waitAnyKey();
        }
      } else {
        await era.printAndWait('休息日与奇锐骏约好了去车站约会——');
        await chara_talk.say_and_wait('嗯……最近总感觉腰有些酸呢~');
        await era.printAndWait('毫无预兆的，奇锐骏突然说道。');
        await era.printAndWait('提出了要不要按摩一下，但是被奇锐骏拒绝了……');
        await chara_talk.say_and_wait(
          '嗯……比起轻飘飘的按摩，还是希望能有更刺激的治疗法呢——',
        );
        await era.printAndWait(
          '奇锐骏一如既往轻飘飘地说着，视线似乎像车站角落里的某家SM用具店利飘去。',
        );
        await era.printAndWait('………………');
        await era.printAndWait('应该是错觉吧？');
      }
      break;
    case 2:
      if (Math.random() > 0.5 && era.get('love:100') > 75) {
        await era.printAndWait('与奇锐骏一同逛了车站前的商场……');
        await chara_talk.say_and_wait('嘎吱嘎吱干~嘎吱嘎吱干~');
        await era.printAndWait(
          '哼着轻快的小调，奇锐骏迅猛得穿行于低价区中、用难以置信得速度，将刚标上降价标签的商品放入了购物篮。',
        );
        await era.printAndWait(
          '在发出：“这似乎能用在训练之上”的感慨之前，购物篮里转瞬间已满满当当。',
        );
        await era.printAndWait('…………');
        await era.printAndWait('韭菜、猪肝、鸡蛋……');
        await era.printAndWait('猪肝、鸡蛋、韭菜……');
        await era.printAndWait('鸡蛋、韭菜、猪肝……');
        await era.printAndWait('半价的韭菜、新鲜的猪肝、清澈的鸡蛋液……');
        await era.printAndWait('……怎么全是养“肾”食品？');
        await era.printAndWait(
          '一刻也没有停歇，惊恐地望向了奇锐骏。在此刻回应着的，是奇锐骏略带深意的微笑——',
        );
        await era.printAndWait('…………');
        await era.printAndWait('看来今晚注定了是一个漫长的深夜——');
      } else if (Math.random() > 0.5) {
        await era.printAndWait('与奇锐骏一同逛了车站前的商场……');
        await chara_talk.say_and_wait('嘎吱嘎吱干~嘎吱嘎吱干~');
        await era.printAndWait(
          '哼着轻快的小调，奇锐骏迅猛得穿行于低价区中、用难以置信得速度，将刚标上降价标签的商品放入了购物篮。',
        );
        await era.printAndWait(
          '在发出：“这似乎能用在训练之上”的感慨之前，购物篮里转瞬间已满满当当。',
        );
        await era.printAndWait('…………');
        await era.printAndWait('购物篮中堆满了各种减价的食材。');
        await era.printAndWait(
          '随便拿起其中一份，上面赫然标着「-60％」的绿色标签。',
        );
        await chara_talk.say_and_wait(
          `啊哈哈，竟然有-99％的胡萝卜呢~看来今天晚上，${callname}是有口福了哦~`,
        );
        await era.printAndWait('说罢，又是一份绿标的食材被推入了购物篮中……');
      } else {
        await era.printAndWait('与奇锐骏一同逛了车站前的商场……');
        await chara_talk.say_and_wait('嘎吱嘎吱干~嘎吱嘎吱干~');
        await era.printAndWait(
          '哼着轻快的小调，奇锐骏迅猛得穿行于低价区中、用难以置信得速度，将刚标上降价标签的商品放入了购物篮。',
        );
        await era.printAndWait(
          '在发出：“这似乎能用在训练之上”的感慨之前，购物篮里转瞬间已满满当当。',
        );
        await era.printAndWait('…………');
        await era.printAndWait('购物篮中堆满了各种训练食品。');
        await era.printAndWait(
          '随便拿起其中一份，上面赫然印着「一日两次燃烧脂肪！一个月变身八块腹肌！」这类夸大其词的广告。',
        );
        await era.printAndWait('……脑海中渐渐浮现起了有着八块腹肌的奇锐骏');
        await chara_talk.say_and_wait(
          `嗯……果然${callname}，还是要增加多一点肌肉量呢~`,
        );
        await era.printAndWait(
          `——什么嘛，原来是给${sys_get_callname(0, 0)}买的啊。`,
        );
        await era.printAndWait(
          '连忙拭去脑海中那不堪入目的画面，安心地缓了口气。',
        );
        await era.printAndWait('………………');
        await era.printAndWait('结账时，抢在了奇锐骏之前。');
        await era.printAndWait(
          '毕竟购物篮里的东西大多是给自己用的，说什么也不好意思让奇锐骏买单。',
        );
        await era.printAndWait(
          '掏出了家人送给自己的黑色钱包，用左手捂着此前不慎划破的破洞。一面紧张得望着收银机上的数字，一面略带遗憾着清点钱包中为数不多的大钞——',
        );
        await chara_talk.say_and_wait(`八块腹肌的${callname}……哎嘿嘿~`);
        await era.printAndWait('………………');
        await era.printAndWait('总感觉刚刚听到了某种很不可思议的对白。');
        await era.printAndWait(
          '回过头——奇锐骏依旧温柔得注视着自己。和蔼地笑容一如往常，就是嘴角不知为何留有液体的印记。',
        );
        await era.printAndWait('………………');
        await era.printAndWait('应该是错觉吧？');
      }
  }
};

/**
 * 奇锐骏的日常事件，id=100
 *
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return (await handlers[stage_id.hook](stage_id, extra_flag)) !== undefined;
  },
};
