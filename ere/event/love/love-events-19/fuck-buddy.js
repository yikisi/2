const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {CharaTalk} digital
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (digital, me, callname) => {
  const tachyon = get_chara_talk(32);
  await print_event_name(['经典湿身，不过是 ', me.get_colored_name()], digital);
  await era.printAndWait(
    '作为训练员，除了平时指导训练的工作外，还是有一些其他的杂项工作的。',
  );
  await era.printAndWait([
    '虽然今天是',
    digital.uma_sex_title,
    '的休息日，但是今天 ',
    me.get_colored_name(),
    ' 还是来到了教学楼，来提交',
    digital.uma_sex_title,
    '预先参赛资料。',
  ]);
  await era.printAndWait([
    '当 ',
    me.get_colored_name(),
    ' 把事情办完，从办公室出去，却发现，窗外已经稀稀疏疏下起了雨。',
  ]);
  await era.printAndWait(['幸运的是，', me.get_colored_name(), ' 带了伞。']);
  await era.printAndWait([
    '正准备回去时，',
    me.get_colored_name(),
    ' 看到了一个站在走廊下的粉色身影。',
  ]);
  await era.printAndWait([
    '是 ',
    digital.get_colored_name(),
    '，马耳耷拉着，有点无精打采，看起来没带伞。感觉是在某些作品常会发生的一幕。',
  ]);
  await era.printAndWait([
    '但，让人疑惑的是，',
    me.get_colored_name(),
    ' 在不远处的雨中，看到了撑着伞的 ',
    tachyon.get_colored_name(),
    '。',
  ]);
  await me.say_and_wait('不叫住速子吗？');
  await digital.say_and_wait(['……诶，你应该懂吧？', callname, '？']);
  await era.printAndWait([digital.get_colored_name(), ' 打了几个手势示意后。']);
  await era.printAndWait([
    '相处了这么久，',
    me.get_colored_name(),
    ' 也逐渐了解了 ',
    digital.get_colored_name(),
    ' 的性格，看起来',
    digital.sex,
    '是不想干扰到 ',
    tachyon.get_colored_name(),
    '。',
  ]);
  await me.say_and_wait('好，懂力，那要不要和我撑一把伞回去。');
  await digital.say_and_wait('感谢！');
  await era.printAndWait([
    '所以，',
    me.get_colored_name(),
    ' 就撑着一把伞，伞下遮着 ',
    me.get_colored_name(),
    ' 和 ',
    digital.get_colored_name(),
    '。',
  ]);
  await era.printAndWait(
    '雨有点变大了，最大的问题是，风也变大了，而且还不定向。',
  );
  await era.printAndWait([
    '这就导致雨像有生命力一般，硬是往 ',
    me.get_colored_name(),
    ' 伞偏向相反的方向入手。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 尽力不让雨淋到 ',
    digital.get_colored_name(),
    '，把伞往 ',
    digital.get_colored_name(),
    ' 方向偏。',
  ]);
  await digital.say_and_wait([
    callname,
    '，虽然我淋雨是不好了，但是我觉得你的身体再怎么说也会比',
    digital.uma_sex_title,
    '弱一点吧？要是你感冒了那可不好！',
  ]);
  await era.printAndWait([
    '可以看得到 ',
    digital.get_colored_name(),
    ' 生气了，马耳都往后背了。',
  ]);
  await me.say_and_wait('这……感觉被伤到了。');
  await era.printAndWait([
    '缓和气氛，和 ',
    digital.get_colored_name(),
    ' 一路打着啊哈继续走。',
  ]);
  await era.printAndWait([
    '但是 ',
    me.get_colored_name(),
    ' 并没有退步，还是尽力遮着',
    digital.sex,
    '。',
  ]);
  await era.printAndWait([
    '很显然，嘴硬的结果就是，回到训练室 ',
    me.get_colored_name(),
    ' 衣服都湿了，幸好 ',
    digital.get_colored_name(),
    ' 没怎么被淋到。',
  ]);
  await digital.say_and_wait(['啊哈哈哈，', callname, ' 你给我先别动。']);
  await era.printAndWait([
    '不不不，这时 ',
    me.get_colored_name(),
    ' 意识到了，虽然担当',
    digital.uma_sex_title,
    '湿身很不妙，但在担当',
    digital.uma_sex_title,
    '前湿身，好像也不太妙。',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    ' 拿起毛巾擦去了 ',
    me.get_colored_name(),
    ' 头上的水珠。',
  ]);
  await era.printAndWait(
    '把衣服脱了后又擦了身子，再拿一件干毛巾盖住身子，只能算是权宜之计。',
  );
  await me.say_and_wait('非常感谢，下面就让我自己来吧。');
  await era.printAndWait([
    '被这样擦身体，',
    me.get_colored_name(),
    ' 或多或少都有点不好意思，',
  ]);
  await era.printAndWait([
    '毕竟 ',
    me.get_colored_name(),
    ' 都是一个成年人。',
    digital.get_colored_name(),
    ' 低下了头，',
    me.get_colored_name(),
    ' 看不到',
    digital.sex,
    '的表情，只能从马耳判断，',
    digital.sex,
    '应该不是不高兴……',
  ]);
  await era.printAndWait('还好吧？');
  era.drawLine();
  await digital.say_and_wait(
    '呼呀，淋了雨洗过澡之后再躺进被窝里，保持良好的睡眠，才可以让明日更有精力的推活啊！',
  );
  await digital.print_and_wait([
    '同舍的 ',
    sys_get_colored_callname(19, 32),
    ' 好像还在研究室，虽然平时也一样。',
  ]);
  await digital.print_and_wait('额，好像忘记写日记了来着……');
  await digital.print_and_wait(
    '算了，就躺进去，回忆一下今天的推活，为明天做准备吧！',
  );
  await digital.print_and_wait([
    '嗯嗯，早上先是进行了在',
    digital.uma_sex_title,
    '酱跑过的草地里享福，中午在食堂摄入推活能量，下午……',
  ]);
  await digital.print_and_wait([
    '下午……是 ',
    callname,
    '……额是……白嫩嫩的肌肤，略有些许形状的腹肌，滴水的头发……',
  ]);
  await digital.print_and_wait('不是不是不是，数码，你在想什么啊！');
  await digital.print_and_wait([
    '感觉是很受',
    digital.uma_sex_title,
    '欢迎的类型……',
  ]);
  await digital.print_and_wait(
    '不不不，数码碳，让我们先用现有知识解读一下，数码碳，你不是看了很多同人本吗，还画了不少呢。',
  );
  await digital.print_and_wait('来来来，在里面找一下答案吧！');
  await digital.print_and_wait([
    '是 ',
    callname,
    ' 招揽',
    digital.uma_sex_title,
    '，然后发掘',
    digital.sex,
    '的才能的故事是吧！',
  ]);
  await digital.print_and_wait('然后，怎么样了来着？');
  await digital.print_and_wait(['是', digital.uma_sex_title, '酱察觉……']);
  await digital.print_and_wait('然后自家发电……');
  await digital.say_and_wait('不不不！我为什么会联系到这个，再怎么说也……');
  await tachyon.say_and_wait([
    '哦呀哦呀，',
    sys_get_colored_callname(32, 19),
    '，你在说什么呢？',
  ]);
  await digital.say_and_wait('噫————！');
  await digital.print_and_wait([
    '看起来 ',
    sys_get_colored_callname(19, 32),
    ' 回来得不是时候。',
  ]);
  await sys_love_uma_in_event(19);
};
