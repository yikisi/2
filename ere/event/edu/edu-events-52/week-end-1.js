const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.after_begin = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    await print_event_name('乌拉拉的接触', urara);
    await in_urara.say_as_unknown_and_wait('故事从这里，正式开始。');
    await in_urara.say_as_unknown_and_wait(
      '这会是，您与我们一同写下的，您与我们的故事。',
    );
    era.drawLine();
    await era.printAndWait([
      '整理好自己的着装，抑制住激动的心情，',
      me.get_colored_name(),
      ' 装作一身轻松地走上训练场。',
    ]);
    await era.printAndWait('与新担当的接触初期，一定要慎重。');
    await era.printAndWait(
      '乍一听有点大惊小怪，但这却是训练员之间口耳相传的重要经验之谈。',
    );
    await era.printAndWait(
      '虽然不会写在教科书上，但道理就和相亲差不多，在相处的初期给留下正面印象是十分重要的一环。',
    );
    await era.printAndWait(
      '若是外来人问起把「与学生相处」比作「相亲」是不是太危险了，大家则会道出统一的答案：',
    );
    await era.printAndWait([
      '与躁动的青春期本格化',
      urara.uma_sex_title,
      '相处，在社会意义上正如走钢丝般危险。',
    ]);
    await era.printAndWait([
      '不过正如走入教学场地的放松步调，这一次，',
      me.get_colored_name(),
      ' 认为自己不需要担心什么。',
    ]);
    await era.printAndWait([
      '因为就算 ',
      me.get_colored_name(),
      ' 后来会因意识到问题所在而后悔，那也都是后话了。',
    ]);
    await era.printAndWait([
      '「天真烂漫的小',
      urara.uma_sex_title,
      '在追逐纯粹的梦想」，如此振奋人心的构成究竟有什么危险的？',
    ]);
    await era.printAndWait([
      '而且 ',
      urara.get_colored_name(),
      ' 也对「夺得一着」有着热切的盼望，',
      urara.sex,
      '想必会充满干劲，努力地练习吧！',
    ]);
    await era.printAndWait([
      '怀揣着想要帮助名为「',
      urara.get_colored_actual_name(),
      '」的小',
      urara.uma_sex_title,
      '实现愿望的热情，',
      me.get_colored_name(),
      ' 来到了与其约定的地点。',
    ]);
    await era.printAndWait('虽然想法是好的……');
    await urara.say_and_wait(['啊，是 ', callname, '！今天起请多指教哦！']);
    await era.printAndWait([
      '姗姗来迟但元气满满的，',
      urara.get_colored_name(),
      ' 带着可爱的笑容挥着手停到了 ',
      me.get_colored_name(),
      ' 的身边。',
    ]);

    era.printButton('「从今天开始一起努力吧！」', 1);
    await era.input();

    await urara.say_and_wait('嗯！乌拉拉要上了哦！');
    await era.printAndWait([
      '做好热身运动，',
      urara.get_colored_name(),
      ' 开始了今日的训练,但是……',
    ]);
    await urara.say_and_wait([callname, '！这里有一只好漂亮的蝴蝶哦！']);
    await me.say_and_wait('啊，真的……嗯？');
    await urara.say_and_wait([callname, '！那里的云是不是很像什么呢？']);
    await me.say_and_wait('哦！等一下，不是……');
    await urara.say_and_wait([callname, '！那边的水里有一只好大好大的鱼！']);
    await me.say_and_wait('慢着，这都什么和什么啊？');
    await era.printAndWait([
      urara.get_colored_name(),
      ' 带歪了步调的 ',
      me.get_colored_name(),
      '，在盯着自己水中的倒影看了几秒后终于回过神来。',
    ]);
    await era.printAndWait(
      '现在是……第几圈来着？不对，话说回来为什么现在两人会在河边上来着？',
    );
    await era.printAndWait(
      '一开始不是还在特雷森的训练场吗？到底发生了……想不起来？！',
    );
    await era.printAndWait([
      '茫然的看着天边已经向西去的太阳，又瞅了瞅跳下河抓鱼的 ',
      urara.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 无奈地叹了口气。',
    ]);
    await era.printAndWait([
      '随后已经追了 ',
      urara.get_colored_name(),
      ' 一天的 ',
      me.get_colored_name(),
      ' 放弃了思考，并加入了与担当的玩闹。',
    ]);
    await era.printAndWait([
      '反正也没办法说什么训练了，那不如干脆享受乐趣好了。',
      me.get_colored_name(),
      ' 如此认命的想到。',
    ]);

    await era.printAndWait(
      '在胡闹中浪费了一天的「大好时光」，训练员与担当一齐倒在了身下的草坪上。',
    );
    await urara.say_and_wait([
      '嗯……我好像忘记了什么重要时事呢！对不起哦 ',
      callname,
      '！',
    ]);
    await era.printAndWait([
      '从草坪上坐起来，',
      urara.get_colored_name(),
      ' 终于想起了什么，但面对小',
      urara.uma_sex_title,
      '迟钝的反应，',
      me.get_colored_name(),
      ' 也只是笑笑。',
    ]);
    await era.printAndWait(
      '本来就没什么好着急的，况且这才正式开始接触的第一天，就当是加深了解的一环了。',
    );
    await era.printAndWait('不过，正事还是要兼顾的。');
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 一同坐在夕阳下的草坪上，',
      me.get_colored_name(),
      ' 向望着红霞小',
      urara.uma_sex_title,
      '问道。',
    ]);

    era.printButton('「乌拉拉，你想获得第一名的根源是什么呢？」', 1);
    await era.input();

    await era.printAndWait([
      urara.get_colored_name(),
      ' 并非光说不练的',
      urara.child_sex_title,
      '，',
      urara.sex,
      '所做出的一切都是真诚之举。',
    ]);
    await era.printAndWait([
      '没有才能可以理解，对奔跑的渴望显而易见，但现在却很难看到',
      urara.sex,
      '对「胜利」的追求。',
    ]);
    await era.printAndWait([
      '一般来说，尽管不推崇将一着作为',
      urara.uma_sex_title,
      '的全部，但选择「取胜」的',
      urara.uma_sex_title,
      '往往对第一有着很强的执念。',
    ]);
    await era.printAndWait([
      '但在 ',
      urara.get_colored_name(),
      ' 身上似乎看不到这一点，或者说，在',
      urara.sex,
      '心里还有比第一名更重要的事。',
    ]);
    await era.printAndWait([
      '那么更重要的事又是？虽然不清楚 ',
      urara.get_colored_name(),
      ' 对自身有多了解，但抱着试试看的态度，',
      me.get_colored_name(),
      ' 还是直接抛出了问题。',
    ]);
    era.printButton('「乌拉拉，你不喜欢第一名吗？」', 1);
    await era.input();
    await era.printAndWait([
      '没有直接回答大人的问题，小',
      urara.uma_sex_title,
      '反而向 ',
      me.get_colored_name(),
      ' 抛回了另一个问题。',
    ]);
    await urara.say_and_wait([callname, '，你现在开心吗？']);
    await era.printAndWait([
      '嗯？要说一起玩过后确实很开心，但这是……？不等 ',
      me.get_colored_name(),
      ' 的回答，小',
      urara.uma_sex_title,
      '继续笑着讲道。',
    ]);
    await urara.say_and_wait(
      '知道自己很弱，但是我还是想要奔跑！既然这样的话，就肯定要以一着为目标！',
    );
    await era.printAndWait([
      '轻靠在 ',
      me.get_colored_name(),
      ' 身边，',
      urara.get_colored_name(),
      ' 开朗的笑着，',
      urara.teen_sex_title,
      '的樱花般的眼瞳中映着温柔的红霞。',
    ]);
    await urara.say_and_wait(
      '只是虽然很想拿好多第一名，但如果忘掉重要的事，拿多少个第一都没有意义了嘛！',
    );

    era.printButton('「是说，奔跑的理由？」', 1);
    await era.input();

    await urara.say_and_wait('嗯！因为我想要用奔跑给大家带来笑容！');
    await urara.say_and_wait(
      '不过乌拉拉并不是故意想逃避训练哦！只是一分神就想不起还在训练了……',
    );
    await era.printAndWait([
      '原来如此，名为「',
      urara.get_colored_actual_name(),
      '」的',
      urara.uma_sex_title,
      '意外有点小麻烦，不过幸好',
      urara.sex,
      '很清楚自己想要什么。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 对于一着的执念并不在竞技胜利本身。',
    ]);
    await era.printAndWait([
      '并非不渴望胜利，但对 ',
      urara.get_colored_name(),
      ' 来说获得优胜并没有奔跑本身重要，这也是',
      urara.sex,
      '训练难的主要原因之一：',
    ]);
    await era.printAndWait([
      '奔跑理应是快乐的，所以即使没有特别的才能，',
      urara.sex,
      '也可以安心地露出笑容。',
    ]);
    await era.printAndWait([
      urara.sex,
      '并非只为了像大多数那样「证明自己」或「顺势而为」，而是想为场外的大家赋予更多情感。',
    ]);
    await era.printAndWait(
      '比如说快乐、比如希望，比如与苦恼的陌生人的第一次相遇时的鼓动。',
    );
    await era.printAndWait(
      '但只有对外的情绪倾向是很「危险」的，甚至训练员帮助担当获胜的职责所在都得先放到一边：',
    );
    await era.printAndWait(
      '尽管想法很好，但如果心态不够「强韧」，总有一天会被别人甚至是自己的变化有心或无心的伤害到。',
    );
    await era.printAndWait([
      '而以 ',
      urara.get_colored_name(),
      ' 的现状，不拼尽全力，就没法取得名次，这样很难一直跑下去。',
    ]);
    await era.printAndWait([
      '注意力不集中和三分钟热度是一部分，另一方面也需要激起 ',
      urara.get_colored_name(),
      ' 完整的竞争意识才行。',
    ]);
    await era.printAndWait('这样的话……');

    era.printButton(
      '「我知道乌拉拉的想法了，我会去制订一个适合乌拉拉的训练方案。」',
      1,
    );
    await era.input();

    await era.printAndWait('果然要想稳妥的话，还是从头制定对策来得实在。');
    await urara.say_and_wait('就像漫画主角的专属必杀技那样吗？');

    era.printButton('「没错，就像漫画主角的专属必杀技那样！」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯！乌拉拉也期待着哦！我会好好听 ',
      callname,
      ' 的话的！',
    ]);
    await era.printAndWait([
      '看到 ',
      callname,
      ' 认真地竖起了大拇指，',
      urara.get_colored_name(),
      ' 也真诚地笑着回应道。',
    ]);
    await era.printAndWait([
      '真好啊，这种没有隔阂的纯粹感，不过',
      urara.sex,
      '这样如此信任刚认识的人，没问题吗？',
    ]);
    await era.printAndWait([
      '看来以后尽量照顾好',
      urara.sex,
      '，也大概也要成为日程的一环了。',
    ]);
    await era.printAndWait([
      '至于计划实施，只要不再被 ',
      urara.get_colored_name(),
      ' 带着跑应该就没问题，如果以后能顺利就好——？',
    ]);
    await era.printAndWait([
      '视线跟着思维惯性转向一侧，脱掉了湿漉漉的运动服外套，小',
      urara.uma_sex_title,
      '正安心的靠在 ',
      me.get_colored_name(),
      ' 身边。',
    ]);
    await era.printAndWait([
      urara.sex,
      '那在戏水时沾湿成半透明的衬衣下，也直接的透出了那娇小但充满健康肉感的身体……',
    ]);
    await era.printAndWait([
      '但是还没得及感受小',
      urara.uma_sex_title,
      '的温润，',
      me.get_colored_name(),
      ' 便惊恐地意识到事情有一丝不对。',
    ]);

    era.printButton('「乌拉拉，你的……那个呢？」', 1);
    await era.input();

    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 颤抖的声音中，',
      urara.get_colored_name(),
      ' 有些疑惑地低头看着自己从衣下透出肉色的粉嫩胸口。',
    ]);
    await era.printAndWait([
      '抬头思索一番后，小',
      urara.uma_sex_title,
      '像是终于想起了什么般恍然大悟，对噤声的 ',
      me.get_colored_name(),
      ' 露出了有点害羞的笑容。',
    ]);
    await urara.say_and_wait([
      '啊！不好意思 ',
      callname,
      '！今天出门的时候，我忘记穿内衣了！',
    ]);
    await era.printAndWait('忘、忘穿了？还就这样说出来了？！');
    await urara.say_and_wait([
      '好像两件都忘记了，诶嘿嘿……明明早上的时候小圣王还提醒我不要丢三落四来着，对不起哦！',
    ]);
    await era.printAndWait([
      '面对如此没心没肺的小',
      urara.uma_sex_title,
      '，',
      me.get_colored_name(),
      ' 彻底哑口无言了。',
    ]);
    await era.printAndWait([
      '回避着小',
      urara.uma_sex_title,
      '越贴越紧的身体与略带疑惑的笑脸，',
      me.get_colored_name(),
      ' 忧愁的望着夕阳，眼中全是对 ',
      urara.get_colored_name(),
      ' 的担忧。',
    ]);
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 一同的未来，各种方面皆是任重道远……',
    ]);

    if (era.get('cflag:61:招募状态') === recruit_flags.yes) {
      await era.printAndWait([
        '话说回来，作为 ',
        urara.get_colored_name(),
        ' 的室友还要担任起「妈妈」的工作，',
        sys_get_colored_callname(0, 61),
        ' 还真是辛苦了啊……',
      ]);
      await era.printAndWait([
        '不过或许在',
        urara.sex,
        '那里能打听到对 ',
        urara.get_colored_name(),
        ' 训练有帮助的情报也说不定？',
      ]);
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '总之，与小',
      urara.uma_sex_title,
      '一同前进的时光，终于运转了起来。',
    ]);
    await in_urara.say_as_unknown_and_wait('……');

    await in_urara.say_as_unknown_and_wait(
      '那么，您觉得与『乌拉拉』正式开始相处的感觉如何呢？',
    );
    era.printButton(
      `「在${urara.sex}身上赌一把是值得的，这也是我希望回报${urara.sex}的。」（好感+20）`,
      1,
    );
    era.printButton(
      '「虽然还不够了解，但无防备的小动物感意外的可爱。」（爱慕+10）',
      2,
    );
    const ret = await era.input();

    await in_urara.say_as_unknown_and_wait(
      '原来如此，我明白了。虽然这话不应该由我来说，但请相信我……',
    );
    await in_urara.say_as_unknown_and_wait([
      '万事开头难，还请您今后也保持住对',
      urara.sex,
      '的耐心与信心。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '哪怕并不艳丽，但只要能认真成长，就算是墙角的小花，应该也能在春天开放吧。',
    );
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(52, undefined, 120, undefined, true) ||
      wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      wait_flag;
    add_event(event_hooks.week_start, event_object);
    wait_flag && (await era.waitAnyKey());
  };
};
