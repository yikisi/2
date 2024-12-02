const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, event_object) => {
  if (event_object?.arg !== 143 + 1) {
    return;
  }
  await print_event_name('了局', kitaru);
  await era.printAndWait([
    '和 ',
    kitaru.get_colored_name(),
    ' 充满了怪力乱神的三年总算是要结束了，也该把物色新担当的计划提上日程了。',
  ]);
  await era.printAndWait(['不过，在那之前，还有些事情要忙。']);
  await era.printAndWait([
    '这三年中存放在办公室里的，存放在 ',
    me.get_colored_name(),
    ' 家里的，经过 ',
    kitaru.get_colored_name(),
    ' 放流后仍剩下一些的开运道具，也该物归原主了，简单的同楼下 ',
    kitaru.get_colored_name(),
    ' 的妈妈问了声好，',
    me.get_colored_name(),
    ' 踏入了福来家的阁楼。',
  ]);
  await kitaru.say_and_wait(['啊！', callname, '，总算是来了！']);
  await era.printAndWait([
    '盘坐在木质的地板上的 ',
    kitaru.get_colored_name(),
    '，被阁楼中的泛黄古籍与各式古物所包围。',
  ]);
  await era.printAndWait([
    '不过，看',
    kitaru.sex,
    '熟练的穿进穿出的样子，倒不如说这里是属于',
    kitaru.sex,
    '的领域才对。',
  ]);
  await kitaru.say_and_wait('之后把这些东西就放在这里吧！');
  await era.printAndWait([
    kitaru.sex,
    '开始有序的把那些经过筛选后的物品摆在空余的架子上，和一旁章鱼脸的雕像，荧光的偏三方八面体之类的奇怪物品并列在一起。',
  ]);
  await me.say_and_wait('好多东西呢');
  await kitaru.say_and_wait('嗯，不止有我自己收集的东西。');
  await kitaru.say_and_wait(
    '有些参拜客放在神社除祟的但之后没有拿回去的东西，之后也会流落到这里来。',
  );
  await kitaru.say_and_wait('所以就算是上个世纪的东西也有可能在里面找到哦！');
  await era.printAndWait([
    '看来 ',
    kitaru.get_colored_name(),
    ' 的囤积癖居然是家族遗传。',
  ]);
  await era.printAndWait([
    '整理继续，房间里静的只能听见 ',
    kitaru.get_colored_name(),
    ' 的脚步声。',
  ]);
  await kitaru.say_and_wait('话说，我同命定之人的契约已经结束了。');
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 试图辨认出一旁古籍上文字来打发时间的时候，架子后突然传来 ',
    kitaru.get_colored_name(),
    ' 的声音，过了好久，',
    kitaru.sex,
    '才说出另一句话。',
  ]);
  await kitaru.say_and_wait('那个，命定之人之后的打算是什么呢？');
  era.printButton('「继续以训练员的身份干下去吧？」', 1);
  era.printButton('「已经有在计划招募新担当了」', 2);
  if ((await era.input()) === 1) {
    await kitaru.say_and_wait('嗯……毫不意外呢');
  } else {
    await era.printAndWait([
      me.get_colored_name(),
      ' 从架子缝隙中看见 ',
      kitaru.get_colored_name(),
      ' 的耳朵抽动了一下。',
    ]);
  }
  await me.say_and_wait('那福来呢？');
  await kitaru.say_and_wait('大概……继承家里的神社？');
  await kitaru.say_and_wait('毕竟这三年下来，神社的香火甚至比以前还旺呢。');
  await kitaru.say_and_wait('去读大学也有可能？');
  await kitaru.say_and_wait(
    '我应该能申请到密斯卡托尼克大学的民俗学吧，进入特雷森的大学部也不是什么困难的事情。',
  );
  await era.printAndWait('就这样自顾自的推演着，马尾一下一下的拍打着。');
  await era.printAndWait([
    kitaru.get_colored_name(),
    ' 变得认真了许多，平日里那种不正经的样子也消失了。',
  ]);
  await kitaru.say_and_wait('唉……');
  await kitaru.say_and_wait('总之，还是先等殿堂的评选结果出来后再说吧。');
  await era.printAndWait([
    kitaru.sex,
    '将一颗水晶球从架子上取了下来，用布包好。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 记得这是',
    kitaru.sex,
    '在出道战之后，恳求了好久 ',
    me.get_colored_name(),
    ' 才同意买的奖励。',
  ]);
  await kitaru.say_and_wait('命定之人，请把这个摆在你的办公室里吧。');
  await kitaru.say_and_wait([
    '毕业后，就算我不在 ',
    callname,
    ' 身边了，我相信它也会给你带来好运的！',
  ]);
  await era.printAndWait([
    '之后听着 ',
    kitaru.get_colored_name(),
    ' 逐个介绍起那些物品的历史。',
  ]);
  await era.printAndWait(['或许就这样悠闲的等到殿堂评选结果出来也不错。']);
};
