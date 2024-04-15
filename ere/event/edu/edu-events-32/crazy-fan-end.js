const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const print_event_name = require('#/event/snippets/print-event-name');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

module.exports = async function () {
  const event_marks = new TachyonEduMarks(),
    me = get_chara_talk(0),
    love = era.get('love:32'),
    tachyon = get_chara_talk(32);
  me.name = '豚鼠';
  if (event_marks.witch === 1) {
    event_marks.witch++;
    await print_event_name(`魔女之药`, tachyon);
    await era.printAndWait(`让速子自己将药喝下去`);
    era.println();
    await era.printAndWait(`你忽然觉得累了`);
    era.println();
    await era.printAndWait(`你把药剂塞回速子的手上`);
    era.println();
    await tachyon.say_and_wait(`…………豚鼠君？`);
    era.printButton(`我累了，要喝妳自己喝吧`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`是从什么时候开始的？原因是什么？`);
    await era.printAndWait(
      `或许是你再也受不了${
        tachyon.name
      }这名${tachyon.get_uma_sex_title()}的任性了`,
    );
    await era.printAndWait(`或许是你已经对${tachyon.name}失去耐心了`);
    await era.printAndWait(`又或许你觉得这只是${tachyon.sex}又一次的玩笑而已`);
    await era.printAndWait(
      `说到底，因为${tachyon.sex}的原因就想让自己去死，这个家伙在开什么玩笑啊`,
    );
    era.println();
    await era.printAndWait(`总之，你把药推还给了${tachyon.sex}`);
    await era.printAndWait(`你不在乎这种药是不是真的能致人于死地`);
    await era.printAndWait(`不，要是真的制人于死地那或许也不错吧`);
    await era.printAndWait(`你的内心甚至产生了如此阴暗的想法`);
    era.println();
    await tachyon.say_and_wait(`…………啊，这样啊……我明白了`);
    era.println();
    await era.printAndWait(`速子没有做出什么过于激烈的反应`);
    await era.printAndWait(
      `比起往常的${tachyon.sex}，可说是异常的举止反而让你提起了点兴致`,
    );
    await era.printAndWait(
      `你看见终于抬起了头的${tachyon.sex}，露出了一张释怀、解脱般的笑容`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……说的也是，解决这个问题的答案，一直都不只两个啊`,
    );
    await tachyon.say_and_wait(
      `在生与死之外，还存在着第三个选项，也就是让出题者去死，对吧？`,
    );
    era.println();
    await era.printAndWait(`你忍不住皱起了眉头`);
    await era.printAndWait(`废话好多，到底喝不喝`);
    await era.printAndWait(`……不，说到底这个一向习惯灌别人药的女人`);
    await era.printAndWait(`根本就没想过自己喝下药剂吧`);
    await era.printAndWait(`你叹了口气，感叹这又一场的闹剧，准备离开实验室`);
    era.drawLine();
    await era.printAndWait(`然后，在你准备转身离开的瞬间`);
    era.println();
    await tachyon.say_and_wait(`咕呜………！`);
    era.println();
    await era.printAndWait(`你被强吻了`);
    await era.printAndWait(
      `你想要挣扎，但人类终究还是敌不过${tachyon.get_uma_sex_title()}的力量，即便是被药物改造过多次的你也一样`,
    );
    await era.printAndWait(
      `${tachyon.sex}的舌头撬开了你的唇，在你的口中不停搅拌，引导`,
    );
    await era.printAndWait(
      `${tachyon.sex}的舌头留恋的舐过你的齿间、你的舌尖、你的龈内————然而，这些都不是${tachyon.sex}的目标`,
    );
    await era.printAndWait(
      `${tachyon.sex}的目标是————将口中尚未咽下的，那足以使人『消失』的药物，引导至你的口中`,
    );
    era.println();
    await me.say_and_wait(`咕呜……！呜呜呜………！！！`);
    era.println();
    await era.printAndWait(`你拼命挣扎，扭动身躯，却无法阻止对方的行为`);
    await era.printAndWait(
      `在你徒劳无功的挣扎下，药剂还是被你们两人平分干净了`,
    );
    era.println();
    await me.say_and_wait(`该死……！`);
    era.println();
    await era.printAndWait(`你忍不住大骂出声`);
    await era.printAndWait(`这个女人在想什么，要死还要拖一个垫背的吗`);
    await era.printAndWait(
      `你恶狠狠的瞪着${tachyon.sex}，马上就要破口大骂……却在话语要吐出的瞬间停住了`,
    );
    era.println();
    era.println();
    era.println();
    await era.printAndWait(`${tachyon.name}哭了`);
    await era.printAndWait(
      `不……准确来讲，${tachyon.sex}正流着泪水，也很努力的想要挤出笑容，但最终脸上露出的，却是张比哭还要难看的笑容`,
    );
    await era.printAndWait(
      `这是你认识${tachyon.sex}以来，第一次看到${tachyon.sex}如此狼狈的模样`,
    );
    era.println();
    await tachyon.say_and_wait(`哈……哈哈哈，豚鼠君，抱歉，我骗了你`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}试图装出若无其事的口气来，但哽咽的声音却使得这一行为变得无比困难`,
    );
    era.println();
    await tachyon.say_and_wait(
      `这个啊，才不是什么毒药…………相反的，这是个『重新开始』的药哦`,
    );
    era.println();
    await era.printAndWait(
      `虽然${tachyon.sex}这么说，但${tachyon.sex}依然举着试管的那只手，现在却在不住的颤抖着，使得你无法信任${tachyon.sex}的话语`,
    );
    era.println();
    await era.printAndWait(`…………不相信对吧？没关系，等到药效发作就知道了`);
    era.println();
    await era.printAndWait(`开什么玩笑……！`);
    await era.printAndWait(`你想这么喊出声，却发现自己的身体已经变得动弹不得`);
    // todo 如果此时已经经历过情人节事件，还未经历则跳过下面一段
    await era.printAndWait(
      `然后，在你口中残存的药剂在此时忽然改变了味道，原来喝下去无色无味的药，现在的味道……`,
    );
    // todo 如果${tachyon.name}此时未有过接吻经验
    era.println();
    await tachyon.say_and_wait(`没想到，初吻的味道竟然是猪肉盖饭的味道啊`);
    // todo 如果${tachyon.name}此时有过接吻经验
    await tachyon.say_and_wait(
      `没想到，最后一个吻的味道竟然是猪肉盖饭的味道啊`,
    );

    await era.printAndWait(`你想起了情人节时收到的巧克力`);
    await era.printAndWait(
      `从那时开始，这名${tachyon.get_uma_sex_title()}就不断的在用这些奇怪的药物折磨着自己`,
    );
    await era.printAndWait(`每次都看着自己喝下药物的反应哈哈大笑来取乐`);
    await era.printAndWait(`事到如今，不想再忍耐这一切的自己又有什么错了？`);

    await era.printAndWait(
      `确实，在一开始你确实对${
        tachyon.name
      }这名${tachyon.get_uma_sex_title()}的跑法，及${
        tachyon.sex
      }的梦想感到有趣`,
    );
    await era.printAndWait(
      `确实，你曾经真心希望能够帮助${tachyon.sex}，守护${tachyon.sex}，直到${tachyon.sex}完成梦想为止`,
    );
    await era.printAndWait(`但是，你已经受够了`);
    await era.printAndWait(
      `对${tachyon.sex}的愤怒、不满、沮丧、厌恶堆积起来的重量，已经超越了天平另一端对${tachyon.sex}的期望、喜爱、憧憬`,
    );
    era.println();
    await era.printAndWait(
      `现在的你只是希望能够尽快摆脱这名${tachyon.get_uma_sex_title()}，结果还得被灌这样的毒药，`,
    );
    await era.printAndWait(`我可没功夫跟妳这种家伙玩罗密欧与朱丽叶的游戏啊！`);
    await era.printAndWait(
      `但说不出话的你只能默默的听着速子说完，最起码，用恶毒的视线盯着速子，作为发泄不满的管道`,
    );
    era.println();
    await tachyon.say_and_wait(`说实话，我真的很害怕`);
    await tachyon.say_and_wait(
      `喜欢一个人，却不知道对方是不是喜欢自己的感觉真的，好可怕`,
    );
    await tachyon.say_and_wait(
      `比任何的实验结果都还要让人心潮澎湃，比任何的比赛结果都还要使人心跳加速`,
    );
    await tachyon.say_and_wait(`说实话，我真的很害怕`);
    await tachyon.say_and_wait(
      `要是对方喜欢的不是自己，而只是自己所有的『某些东西』，`,
    );
    await tachyon.say_and_wait(
      `那该怎么办。要是对方眼中看到的，只是自己的『梦想』，而非自己这个人怎么办`,
    );
    await tachyon.say_and_wait(
      `我啊，一直都在担心着这些……却忘记了，最重要的事情，最恐怖的可能性`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.name}露出了嗤笑，嘲笑着太过天真、乐观的自己`,
    );
    era.println();
    await tachyon.say_and_wait(
      `对方，根本就不喜欢自己，不喜欢自己的一切，包括但不限于梦想的可能性`,
    );
    era.println();
    await era.printAndWait(
      `终于，${tachyon.name}脸上的笑容——如果那能够称为笑容的话——崩溃了`,
    );
    await era.printAndWait(`化为了彻底的哭脸`);
    era.println();
    await tachyon.say_and_wait(
      `原来……这就是失恋的感觉啊……呜……好难受……好可怕……心好像要碎了一样……`,
    );
    await tachyon.say_and_wait(`原来是这样啊……我被甩了啊……好痛……我的心好痛……`);
    await tachyon.say_and_wait(
      `为什么……为什么明明只是不被一个人喜欢……为什么心会这么难受……呜呜呜……我不要……`,
    );
    await tachyon.say_and_wait(
      `不要啊……早知道会这么痛的话我就不要恋爱了啊……下一次，下一次……不要了……再也不要了……好痛……`,
    );
    await tachyon.say_and_wait(
      `豚鼠君……豚鼠君……你在哪里……为什么我找不到你……你去哪里了……`,
    );
    await tachyon.say_and_wait(
      `为什么我这么痛苦的时候你却不在我身边……豚鼠君……我再也不拿你做实验了……都是我不好……所以……所以回来好不好……`,
    );
    await tachyon.say_and_wait(
      `这里好可怕……带我回去，回去我们的实验室……我再也不会任性了……`,
    );
    await tachyon.say_and_wait(
      `衣服会自己洗……便当盒吃完不会再到处乱丢了……豚鼠君……豚鼠君…………`,
    );
    era.println();
    await era.printAndWait(
      `你看着${tachyon.name}，从中途开始就彷佛忘掉了自己是谁一般`,
    );
    await era.printAndWait(
      `明明眼中在看着自己，却还在一直喊着豚鼠君，彷佛在寻找不属于此处的某人一样`,
    );
    await era.printAndWait(`不……豚鼠君……？`);
    await era.printAndWait(`这是谁？你明明从来没听过这个名字不是吗？`);
    await era.printAndWait(
      `眼前的这名${tachyon.get_uma_sex_title()}又是谁，自己认识${
        tachyon.sex
      }吗`,
    );
    era.println();
    await era.printAndWait(`头痛，头痛，头痛欲裂`);
    await era.printAndWait(`越是思考，忘掉的就越多`);
    era.println();
    await era.printAndWait(
      `终于，在一声声呼喊着豚鼠君的悲鸣声中，你的意识陷入了深渊`,
    );
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(`……醒`);
    await tachyon.say_and_wait(`………醒醒`);
    era.println();
    await era.printAndWait(`你醒来了`);
    await era.printAndWait(
      `被某个声音所唤醒的你，发现自己睁开眼睛看见的是一个陌生的天花板`,
    );
    era.printButton(`这里是哪里？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……这里是我的实验室`);
    era.println();
    await era.printAndWait(`你看向声音传来的方向`);
    await era.printAndWait(
      `眼前是一名栗毛的${tachyon.get_uma_sex_title()}，利落的短发以及身上的白大褂说明了${
        tachyon.sex
      }研究者的身份，`,
    );
    await era.printAndWait(
      `${tachyon.sex}用一种审视的眼光看着你，不知为何，你感到一股毛骨悚然`,
    );
    era.printButton(`妳是谁？`, 1);
    await era.input();
    await era.printAndWait(`栗毛${tachyon.get_uma_sex_title()}说道`);
    await era.printAndWait(`这时你才发现自己还躺在地板上，连忙爬了起来`);
    era.printButton(`我是(玩家名)，是一名训练员`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………哦？那么训练员君，你躺在这里又有何贵干`);
    era.println();
    await era.printAndWait(
      `你试着回想在躺在这里前你究竟在做什么，却怎么也想不出来`,
    );
    era.println();
    await tachyon.say_and_wait(
      `…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……`,
    );
    await era.printAndWait(
      `算了，不提这个，总之，我是${tachyon.name}，训练员君，请多指教`,
    );
    await era.printAndWait(`${tachyon.name}`);
    await era.printAndWait(
      `听起来真是个奇怪的名字……嘛，毕竟${tachyon.get_uma_sex_title()}的名字大多都是这样的，歧视他人的姓名也不好`,
    );
    await era.printAndWait(
      `但不知为何，有种直觉在告诉你，和眼前的这名${tachyon.get_uma_sex_title()}要保持距离`,
    );
    era.println();
    era.printButton(
      `那么，今天就先到这里吧，非常抱歉闯进了妳的实验室，日后我会再来致上歉意，${tachyon.name}同学`,
      1,
    );
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………不，不必了，说到底两人同时失忆这种事情……`);
    await tachyon.say_and_wait(
      `算了，就这样吧，后面也不用特别过来了，训练员君`,
    );
    era.println();
    await era.printAndWait(`于是，你离开了${tachyon.name}的实验室`);
    await era.printAndWait(`在离开门之前，你忽然回过了头`);
    era.println();
    await tachyon.say_and_wait(`嗯？训练员君，还有什么事吗？`);
    era.println();
    await era.printAndWait(
      `你有种预感，要是自己踏出了这扇门，大概，就再也不会与这名${tachyon.get_uma_sex_title()}有所交集了吧`,
    );
    era.println();
    await me.say_and_wait(`没什么，是我多心了吧`);
    era.println();
    await era.printAndWait(`你走出了实验室的门，这次没有丝毫犹豫`);
  } else if (love > 75 && event_marks.plan_b === 0) {
    await print_event_name(`停滞的钟摆`, tachyon);
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`求求你……醒过来吧`);
    era.drawLine();
    await era.printAndWait(`我是谁`);
    era.println();
    await tachyon.say_and_wait(`你是……豚鼠君，是我的专属训练员`);
    era.println();
    await era.printAndWait(`……你是谁？`);
    era.println();
    await tachyon.say_and_wait(
      `……我是${tachyon.name}，是你的负责${tachyon.get_uma_sex_title()}`,
    );
    await me.say_and_wait(`…………`);
    era.println();
    await tachyon.say_and_wait(`……你，还记得吗？`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(
      `不……不要不说话啊，你还记得我吧？记得吗？这里是特雷森学园里我们的实验室，那边是茶座的地盘……`,
    );
    await me.say_and_wait(`抱歉……我真的不记得了`);
    era.println();
    await tachyon.say_and_wait(`豚……`);
    era.printButton(`——当然，是骗你的了！`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………欸？`);
    era.printButton(`你在想什么，我怎么可能会把速子忘掉呢？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    era.printButton(`……欸？速子？`, 1);
    await era.input();
    await era.printAndWait(`速子忽然默声不语，低下头来`);
    await era.printAndWait(`忽然，速子压住了你的身体`);
    era.println();
    await tachyon.say_and_wait(`你这家伙！你知道我有多担心吗！`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}没有抬起头，但是，从地板上溅落的水渍能看出————${tachyon.sex}在哭`,
    );
    era.printButton(`速子？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `不要……不要再这样骗我了，求求你，好不好，真的，好可怕……不想要失去你……`,
    );
    era.printButton(`…………好的，对不起`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`对不起`);
    await era.printAndWait(`真的对不起`);
    await era.printAndWait(`虽然不知道发生了什么，但我又欺骗${tachyon.sex}了`);
    await era.printAndWait(
      `欺骗了———眼前这名，叫做${
        tachyon.name
      }的陌生${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君……你还记得，之前发生什么事了吗？`);
    era.println();
    await era.printAndWait(`这个……答应应该没关系吧`);
    await era.printAndWait(`你摇了摇头`);
    await era.printAndWait(`说实话，什么也不知道`);
    await era.printAndWait(
      `这里是哪里，眼前的${tachyon.get_teen_sex_title}是谁`,
    );
    await era.printAndWait(`一切的一切，都不知道`);
    await era.printAndWait(`但只有一点，是埋藏在心中不变的`);
    await era.printAndWait(`—————不想让${tachyon.sex}伤心`);
    await era.printAndWait(`—————不想让${tachyon.sex}难过`);
    await era.printAndWait(`为此，哪怕要用谎言来掩盖过去都没关系`);
    era.println();
    await tachyon.say_and_wait(
      `……没什么，那就算了，反正，你现在醒过来了……这样，就好了`,
    );
    era.println();
    await era.printAndWait(`看起来，${tachyon.sex}似乎没有要解释清楚的意思`);
    await era.printAndWait(`那就没办法了`);
    era.println();
    era.printButton(`对了，现在是————`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`豚鼠君，你应该也累了吧，明天再聊吧`);
    era.println();
    await era.printAndWait(
      `正当自己想问现在时间时，被${tachyon.sex}紧张的转移了话题`,
    );
    await era.printAndWait(`虽然没有过往记忆，但身为人的常识还是有的`);
    await era.printAndWait(
      `从${tachyon.sex}的表情能够看出${tachyon.sex}不想回答这个问题`,
    );
    await era.printAndWait(`……那就算了吧，不问了`);
    await era.printAndWait(
      `如果，这个问题会让${tachyon.sex}露出那种惊慌的表情的话`,
    );
    era.drawLine();
    await tachyon.say_and_wait(
      `好了，豚鼠君，既然你已经醒过来了，那么首先要做的第一件事是什么，你知道吧？`,
    );
    await me.say_and_wait(`是……？`);
    await tachyon.say_and_wait(
      `当然是吃饭了！饭！肚子快饿死了，豚鼠君，快去做点吃的来！`,
    );
    await me.say_and_wait(`…………好`);
    era.println();
    await me.say_and_wait(`感觉……怎么样？`);
    await tachyon.say_and_wait(`………嗯`);
    await tachyon.say_and_wait(`咕呃……好难吃……`);
    await tachyon.say_and_wait(`怎么做的这么难吃……豚鼠君，你……`);
    await me.say_and_wait(`！？`);
    await tachyon.say_and_wait(`一定……是身体还没完全恢复吧，毕竟躺了那么久`);
    await tachyon.say_and_wait(`这次就放你一马，但之后要赶快恢复过来啊`);
    await me.say_and_wait(`……啊哈哈，抱歉啦`);
    era.drawLine();
    await tachyon.say_and_wait(`那么……接下来，先去操场上训练吧`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(`………豚鼠君？`);
    await me.say_and_wait(`啊，怎么……`);
    await tachyon.say_and_wait(
      `你居然一点都没感到讶异吗？我居然，主动跑去训练了哦？`,
    );
    await me.say_and_wait(`……欸`);
    await me.say_and_wait(`……我下意识以为你说的是又要偷懒了`);
    await me.say_and_wait(`速子你居然真的要去训练了吗！？`);
    await tachyon.say_and_wait(`不，这又太夸张了`);
    await me.say_and_wait(`啊哈哈……这样吗`);
    era.drawLine();
    await me.say_and_wait(`商店街……？`);
    await tachyon.say_and_wait(
      `是啊，毕竟我的实验器具有点不够了，陪我去逛逛吧`,
    );
    await me.say_and_wait(`啊，好，那当然`);
    await tachyon.say_and_wait(`豚鼠君？你在往哪走？商店街不在那边啊`);
    await me.say_and_wait(`……啊，没，没什么，只是忽然想起有东西要拿`);
    await me.say_and_wait(`不过仔细想想其实也没什么特别重要的啊哈哈哈`);
    await tachyon.say_and_wait(`……真是奇怪`);
    era.drawLine();
    await tachyon.say_and_wait(`哼～哼哼哼`);
    await me.say_and_wait(`……那个，速子？`);
    await tachyon.say_and_wait(`嗯？`);
    await me.say_and_wait(`为什么……商店街的人看你的眼神总觉得怪怪的`);
    await tachyon.say_and_wait(`……有，有这回事吗？只是你的错觉吧，豚鼠君`);
    await me.say_and_wait(`不，明明就有，好像在看什么危险人物……`);
    await tachyon.say_and_wait(`是你看错了`);
    await me.say_and_wait(`可是`);
    await tachyon.say_and_wait(`你看错了`);
    await me.say_and_wait(`……好吧`);
    era.drawLine();
    await tachyon.say_and_wait(
      `……我说，豚鼠君，你现在最好，小心的，把手上的东西放下来`,
    );
    await me.say_and_wait(`呃……怎么了吗？`);
    await tachyon.say_and_wait(`还怎么了，你忘记那是茶座的东西了吗？`);
    await me.say_and_wait(`欸……不过，稍微碰一下应该也不会有事吧`);
    await tachyon.say_and_wait(
      `怎么可能！上次我只是稍微碰到一下我的研究资料就瞬间烧起来了！`,
    );
    await me.say_and_wait(`可是……`);
    await tachyon.say_and_wait(`………`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(
      `那我也试试………哇啊啊！着火了！快点抢救资料啊啊啊！`,
    );
    era.drawLine();
    await tachyon.say_and_wait(`喂喂，豚鼠君`);
    await me.say_and_wait(`嗯？速子，怎么了？`);
    await tachyon.say_and_wait(`我说，你醒过来之后，都没和我亲热过了吧？`);
    await me.say_and_wait(`……欸？`);
    await tachyon.say_and_wait(
      `把恋人这样抛着一直不管不顾，就算前面当成你还没恢复……现在身体检查也都没什么问题，也该好好你侬我侬一下了吧？`,
    );
    await me.say_and_wait(`不，等一下，速子还是学生吧`);
    await tachyon.say_and_wait(`是啊，有什么问题吗？`);
    await me.say_and_wait(`问题很大吧！？伦理之类……`);
    await tachyon.say_and_wait(`……怎么忽然这么激动，明明当初你都那么主动的♡`);
    await me.say_and_wait(`…以前的我这么人渣吗`);
    await tachyon.say_and_wait(`？豚鼠君，你刚刚说什么了吗？`);
    await me.say_and_wait(`……不，什么也没有`);
    await tachyon.say_and_wait(`那就快点，来好好亲热吧♡`);
    era.drawLine();
    await tachyon.say_and_wait(
      `喔喔，这次这便当做的不错啊！豚鼠君！总算恢复你以前的水准了！`,
    );
    await me.say_and_wait(`是……是吗？`);
    await tachyon.say_and_wait(`你那么拼命复健果然是有成效的！`);
    await me.say_and_wait(`是啊…………还有那些食谱书也是`);
    await tachyon.say_and_wait(
      `真是……好久没吃到了啊，这种味道…………真的，好久………`,
    );
    await me.say_and_wait(`……速子，我可以问一个问题吗？`);
    await tachyon.say_and_wait(`嗯？`);
    await me.say_and_wait(`我到底……昏过去了多久`);
    await tachyon.say_and_wait(`……………`);
    await tachyon.say_and_wait(`……………年`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(`……豚鼠君？`);
    await me.say_and_wait(`对不起……这么多年里，你……一定很寂寞吧`);
    await tachyon.say_and_wait(`！`);
    await me.say_and_wait(`……我已经回来了，已经可以了，可以不必再……`);
    await tachyon.say_and_wait(`……`);
    await tachyon.say_and_wait(`豚鼠君……我真的……真的，差点就支撑不下去了……`);
    await tachyon.say_and_wait(
      `要是……你醒不过来……要是……完全把我忘了……要是……要是……`,
    );
    await tachyon.say_and_wait(
      `真的……好可怕……像是一场恶梦……持续了许多年的恶梦……`,
    );
    await me.say_and_wait(`……………`);
    await tachyon.say_and_wait(`但是……你回来了，你还是回来了`);
    await tachyon.say_and_wait(`答应我……这次，不要再离开我了……好吗？`);
    await me.say_and_wait(`……嗯，我不会再离开了`);
    era.drawLine();
    await me.say_and_wait(`所以……那天究竟是怎么……`);
    await tachyon.say_and_wait(
      `……那天，你在商店街……我只是，离开了一下，结果有个……自称是粉丝的人，冲上去……然后……`,
    );
    await tachyon.say_and_wait(`……要是那个时候，我能更快一点，`);
    await tachyon.say_and_wait(`不，要是我一直留在你身边的话……`);
    await tachyon.say_and_wait(`绝对，绝对不会发生那种事……对不起……`);
    await me.say_and_wait(`没关系……毕竟，现在已经没事了，不是吗？`);
    await tachyon.say_and_wait(
      `但是……中间你的人生……有那么多年都…………你不会恨我吗？`,
    );
    await tachyon.say_and_wait(
      `如果不是因为我……如果不是因为负责了我……你可能，根本就不会遭受到这种事`,
    );
    await me.say_and_wait(`为什么我会恨你呢？`);
    await me.say_and_wait(`明明不是速子害的……而且，速子还努力的把我抢救了回来`);
    await me.say_and_wait(`感谢你都来不及了，怎么会怨恨`);
    await tachyon.say_and_wait(`…………也是啊，毕竟是你，肯定会说这种话的吧`);
    await me.say_and_wait(`？什么意思`);
    await tachyon.say_and_wait(`不……没什么`);
    era.drawLine();
    await era.printAndWait(`就这样`);
    await era.printAndWait(
      `${tachyon.name}与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点`,
    );
    await era.printAndWait(`训练场、赛场、河滨、神社`);
    await era.printAndWait(`为了回味过去，为了让在多年前停下的时间继续走动`);
    await era.printAndWait(`或许，中间失去的岁月无法弥补`);
    await era.printAndWait(`但他们依然努力创造出了，独属他们的崭新人生`);
    era.println();
    await tachyon.say_and_wait(`……这样的故事结尾，你满意吗？`);
    era.println();
    await me.say_and_wait(`……嗯，很好哦`);
    era.println();
    await me.say_and_wait(`不用了，只要，这样就好了`, true);
    await me.say_and_wait(`我……就要死了啊`, true);
    await tachyon.say_and_wait(`…………`);
    await me.say_and_wait(`速子……谢谢你`, true);
    await tachyon.say_and_wait(`你答应过我的……不会再离开我了，你答应过的`);
    era.println();
    await era.printAndWait(`……对不起`);
    await me.say_and_wait(`请当我，又欺骗了你一次吧`, true);
    await era.printAndWait(`这段日子里，我过的很幸福`);
    await me.say_and_wait(`但是，这些幸福……不应是我的，而是『豚鼠君』的`, true);
    await era.printAndWait(`认识了速子……是我人生中，最美好的事`);
    await me.say_and_wait(`所以，已经不想再欺骗下去了`, true);
    await era.printAndWait(`所以，很抱歉`);
    await me.say_and_wait(`所以，对不起`, true);
    await era.printAndWait(`${tachyon.name}和豚鼠君的故事……就要在这里结束了`);
    await tachyon.say_and_wait(`如果，你希望的话……`);
    era.println();
    await era.printAndWait(`……对不起`);
    await era.printAndWait(`但我，不希望再继续拌着你的脚了`);
    await era.printAndWait(`就让豚鼠君在这里结束吧`);
    era.println();
    await era.printAndWait(`抱歉，速子，我真的困了……可以了吗？`);
    await tachyon.say_and_wait(`……是啊，好好睡吧，我会陪在你身边的`);
    era.drawLine();
    await era.printAndWait(`豚鼠君安详的闭上了眼睛`);
    await era.printAndWait(`${tachyon.name}没有哭泣，因为……已经不是第一次了`);
    era.println();
    await era.printAndWait(`与豚鼠君的分离`);
    await era.printAndWait(`第一次，是那天在商店街`);
    await era.printAndWait(`要是自己没有离开的话`);
    await era.printAndWait(`要是有强硬的把他留在身边的话`);
    await era.printAndWait(`要是……`);
    await era.printAndWait(`没有要是`);
    era.println();
    await era.printAndWait(`哪怕把凶手挫骨扬灰`);
    await era.printAndWait(`哪怕在商店街，自己像个疯子一样乱冲乱闯`);
    await era.printAndWait(`他也无法回来`);
    await era.printAndWait(`急救的措施更是无法填补他腹腔流出的血液`);
    era.println();
    await tachyon.say_and_wait(
      `明明都已经欺骗了那么久了……再骗我一次又有什么关系……`,
    );
    era.println();
    await era.printAndWait(`从一开始，就已经知道了`);
    await era.printAndWait(`是他，也不是他`);
    await era.printAndWait(
      `虽然努力伪装起来了，但失去记忆的人脸上那种茫然绝不是简单就能被隐藏起来的`,
    );
    await era.printAndWait(`更何况……在那之后的谎言，又是那么的蹩脚`);
    era.println();
    await era.printAndWait(`但是……${tachyon.name}不在乎`);
    await era.printAndWait(`只要是他就好`);
    await era.printAndWait(`只要能够活下来，活下去就好`);
    await era.printAndWait(`没有记忆？那又有什么关系`);
    await era.printAndWait(
      `只要他能继续下去，${tachyon.name}就能甘心被欺骗一辈子`,
    );
    await era.printAndWait(`……但是`);
    await era.printAndWait(`还是一样，哪怕『这次』，他欺骗了自己整整一辈子`);
    await era.printAndWait(
      `也还是不愿意，在最后的最后，再欺骗${tachyon.name}一次`,
    );
    era.println();
    await era.printAndWait(`喝了口放在床边的红茶`);
    await era.printAndWait(`自己泡的红茶，和他泡的理论成分完全一样`);
    await era.printAndWait(`毕竟，已经自己泡了这么多年`);
    await era.printAndWait(`能够琢磨的，能够更改的，都已经研究到了最好`);
    await era.printAndWait(`但是，味道不一样`);
    await era.printAndWait(`不可能一样，永远无法一样`);
    await era.printAndWait(`今天的红茶，永远胜不过昨天的味道`);
    era.println();
    await tachyon.say_and_wait(`————那么，该开始下一次实验了`);
    era.drawLine({ content: '特雷森学院的地下室' });
    await tachyon.say_and_wait(`上次来这里……是什么时候了`);
    era.println();
    await era.printAndWait(`三个月？五个月？还是……`);
    await era.printAndWait(`『这次』又跟豚鼠君度过了多长的时间？`);
    era.println();
    await tachyon.say_and_wait(`算了，不重要了`);
    era.println();
    await era.printAndWait(`打开灯`);
    await era.printAndWait(`在眼睛慢慢适应亮光后`);
    await era.printAndWait(`眼前出现的，是数以千计的营养槽`);
    era.println();
    await era.printAndWait(`啊啊，要是让他知道的话，他绝对不会原谅我吧`);
    await era.printAndWait(`但是……他说了，不会怨恨我`);
    await era.printAndWait(`所以，就算默认了`);
    era.println();
    await tachyon.say_and_wait(
      `第五十七次，记忆没有恢复倾向，身体无异状，存活时间五个月……`,
    );
    era.println();
    await era.printAndWait(`从他离开那天开始才启动的计画`);
    await era.printAndWait(`已经无数次咒骂过自己`);
    await era.printAndWait(`为什么如此晚才想到`);
    await era.printAndWait(
      `已经被泡沫般的幸福麻痹到忘记研究者最基本的未雨绸缪了吗？`,
    );
    await era.printAndWait(`所以才会落得如此下场`);
    era.println();
    await era.printAndWait(
      `只能一点一滴，像堆沙堡一般，将他的身体重新拼凑而成`,
    );
    await era.printAndWait(
      `但，哪怕一切都拼凑起来了，也无法将无形的东西重新塑成`,
    );
    await era.printAndWait(`人体中蕴含最多秘密的大脑————记忆`);
    await era.printAndWait(
      `连一开始都不知道到底存在与否的东西，到底又能怎么重塑`,
    );
    await era.printAndWait(`只能像这样`);
    await era.printAndWait(`一次又一次的实验，一次又一次的唤醒`);
    await era.printAndWait(`一次又一次的……等待着奇迹`);
    era.println();
    await tachyon.say_and_wait(`失敗主因，呼吸衰竭伴随肺性脑病……生存意愿，无`);
    era.println();
    await era.printAndWait(`凡人的捏泥土游戏，大概是永远也及不上女神大人的`);
    await era.printAndWait(`所以，每次塑造出的他总是这样`);
    await era.printAndWait(`至多半年，至少……两周`);
    await era.printAndWait(`只要到了时间，总会因为各式各样的原因而陷入永眠`);
    await era.printAndWait(`……当然`);
    await era.printAndWait(`这些疾病，再怎么说，依然是常人范围`);
    await era.printAndWait(`凭借着${tachyon.name}的研究成果`);
    await era.printAndWait(
      `要续命的话，多活上三到五年绝对不是问题，甚至……还能更久`,
    );
    await era.printAndWait(
      `只要愿意，可以有一个三到五年，就能有第二个，第三个，第四个，直到永久`,
    );
    era.println();
    await tachyon.say_and_wait(`他还是……没有说`);
    era.println();
    await era.printAndWait(`无论重复多少次`);
    await era.printAndWait(`无论怎么对身体进行改动`);
    await era.printAndWait(`最后的最后，他说的总是大同小异`);
    era.println();
    await tachyon.say_and_wait(`已经结束了`);
    await tachyon.say_and_wait(`已经满足了`);
    era.println();
    await tachyon.say_and_wait(`开什么玩笑……开什么玩笑！`);
    await tachyon.say_and_wait(
      `谁允许你擅自满足了！给我说啊！对我说啊！说想要活下去！说想要继续和我生活下去啊！`,
    );
    await tachyon.say_and_wait(`欺骗我也没关系，没有记忆也没关系，`);
    await tachyon.say_and_wait(
      `要花一辈子找回记忆也没关系，说啊……为什么不说……为什么……要留我一个人……`,
    );
    era.println();
    await era.printAndWait(
      `如果，他是因为憎恨，憎恨害自己失去性命的${tachyon.name}，因此宁愿死也不愿意与${tachyon.name}一起生活，那都能接受`,
    );
    await era.printAndWait(
      `如果真的是这样，那么${tachyon.name}会不说二话的离开他的生活，只进行最低程度的医疗接触`,
    );
    await era.printAndWait(
      `只要能在最后，有那么一点迟疑，或者表露出那么一点对${tachyon.name}的嫌弃，`,
    );
    await era.printAndWait(`那么哪怕心跳停止，自己都能在最后关头将他抢救回来`);
    await era.printAndWait(`但是……五十七次里`);
    await era.printAndWait(`这种事，一次也没发生过`);
    era.println();
    await era.printAndWait(`不想拖累自己`);
    await era.printAndWait(`不想束缚自己`);
    await era.printAndWait(`哪怕失去一切，包括生命，包括记忆`);
    await era.printAndWait(
      `五十七次里，每一次，他直到最后想的都是${tachyon.name}的可能性`,
    );
    era.println();
    await era.printAndWait(`但是，${tachyon.name}的可能性，已经结束了`);
    await era.printAndWait(`${tachyon.name}的时间，已经停止走动`);
    await era.printAndWait(`那杯红茶的味道从那刻开始就已经定格`);
    era.println();
    await tachyon.say_and_wait(`第五十八次，开始`);
    era.println();
    await era.printAndWait(
      `随着培养槽将营养液排干，在培养槽中的人影被释放出来`,
    );
    era.println();
    await era.printAndWait(`不能让他结束，不会让他结束`);
    await era.printAndWait(`${tachyon.name}与豚鼠君的故事，必须永远继续下去`);
    era.println();
    await era.printAndWait(
      `于是，将过去束缚，也被束缚在过去的科学家，开始了新一轮的实验`,
    );
  } else if (love > 75 && event_marks.plan_b === 1) {
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`求求你……醒过来吧`);
    era.drawLine();
    await era.printAndWait(`我是谁`);
    era.println();
    await tachyon.say_and_wait(`你是……豚鼠君，是我的专属训练员`);
    era.println();
    await era.printAndWait(`……你是谁？`);
    era.println();
    await tachyon.say_and_wait(
      `……我是${tachyon.name}，是你的负责${tachyon.get_uma_sex_title()}`,
    );
    await me.say_and_wait(`…………`);
    era.println();
    await tachyon.say_and_wait(`……你，还记得吗？`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(
      `不……不要不说话啊，你还记得我吧？记得吗？这里是特雷森学园里我们的实验室，那边是茶座的地盘……`,
    );
    era.println();
    await me.say_and_wait(`……对不起`);
    era.println();
    await era.printAndWait(`你摇了摇头`);
    await era.printAndWait(
      `眼前的${tachyon.get_teen_sex_title}……虽然不知道为什么，给人一种熟悉的感觉`,
    );
    await era.printAndWait(`但自己确实，一点也不认识`);
    era.println();
    await tachyon.say_and_wait(
      `……没关系，失忆也是一种……一种可能性……只要再把记忆找回来就好了`,
    );
    era.println();
    await era.printAndWait(`……可能性`);
    await era.printAndWait(`这个词，似乎唤醒了烂泥中的一些灵光`);
    await era.printAndWait(`然而……`);
    await era.printAndWait(`灵光，总是只能乍现的`);
    era.println();
    await era.printAndWait(`不知道`);
    await era.printAndWait(`越思考脑袋空白的地方越多`);
    await era.printAndWait(`但是，还是得努力去回忆`);
    await era.printAndWait(`祈祷能够翻到刚刚闪过的灵光`);
    await era.printAndWait(`理由只有一个`);
    await era.printAndWait(
      `虽然不认识眼前名为${tachyon.name}的${tachyon.get_teen_sex_title}`,
    );
    await era.printAndWait(
      `但潜意识在喊着，不能让${tachyon.sex}受伤，不要让${tachyon.sex}悲伤`,
    );
    era.println();
    await era.printAndWait(
      `因此，在${tachyon.sex}提出稍微看看四周，尝试回忆一下的建议时`,
    );
    await era.printAndWait(`你没有拒绝`);
    await era.printAndWait(
      `只是跟着${tachyon.sex}，在校园(按${tachyon.sex}所说应该是如此)里走着`,
    );
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君……你看，这边是训练场，我们就是在这里相遇的`,
    );
    era.println();
    await era.printAndWait(`相遇……吗？`);
    era.println();
    await tachyon.say_and_wait(
      `没错，虽然当时的我并没有真正看到你就是……是你和我说的`,
    );
    era.println();
    await era.printAndWait(`这样吗……`);
    await era.printAndWait(`那么，当时的自己，一定是被速子的跑法给迷住了吧`);
    era.println();
    await tachyon.say_and_wait(`！……你，你想起来了吗！`);
    era.println();
    await era.printAndWait(`……对不起`);
    await era.printAndWait(`只是，某种感觉……觉得速子，要是跑起来一定会很漂亮`);
    era.println();
    await tachyon.say_and_wait(
      `………是啊，你说过很多次……虽然我自己是看不出来，明明只是普通的跑步而已，到底有什么让人着迷的`,
    );
    era.println();
    await era.printAndWait(`……不`);
    await era.printAndWait(
      `其他人可能是这样，但速子的跑法……我有感觉，一定能让自己着迷`,
    );
    era.println();
    await tachyon.say_and_wait(`……这样啊，那，要不要看我跑一次看看呢？`);
    era.println();
    await era.printAndWait(`！可以吗！`);
    await era.printAndWait(`但是……速子的脚……`);
    era.println();
    await tachyon.say_and_wait(`……你，你还记得吗？`);
    era.drawLine();
    await era.printAndWait(`沉默就是最好的回答`);
    await era.printAndWait(
      `要是在此时欺骗${tachyon.sex}，说自己已经想起来了的话`,
    );
    await era.printAndWait(`${tachyon.sex}肯定会很开心的吧`);
    await era.printAndWait(`但是……那样欺骗${tachyon.sex}，真的好吗？`);
    era.println();
    await era.printAndWait(`不知道为什么，心中的声音又开始高喊`);
    await era.printAndWait(`不要『再』欺骗${tachyon.sex}了`);
    await era.printAndWait(`不要『再』欺骗自己了`);
    await era.printAndWait(`……为什么是再呢？`);
    era.println();
    await tachyon.say_and_wait(`……没关系，我去跑一圈`);
    await tachyon.say_and_wait(`这样，说不定能想起些什么呢`);
    era.println();
    await era.printAndWait(`${tachyon.sex}跑完了一圈`);
    await era.printAndWait(`如你想的一般，是极为动人的跑法`);
    await era.printAndWait(`但……也就仅此而已`);
    era.println();
    await era.printAndWait(`${tachyon.sex}跑完一圈，准备停下`);
    await era.printAndWait(
      `但，看见你依然茫然的眼神，${tachyon.sex}不知为何，又跑了起来`,
    );
    await era.printAndWait(
      `在愣神的你面前，${tachyon.sex}跑了一圈又一圈，直到天黑`,
    );
    era.println();
    await era.printAndWait(`……对不起`);
    era.println();
    await tachyon.say_and_wait(`不，没什么……只是，只是我忽然想跑而已`);
    era.println();
    await era.printAndWait(`这是骗人的`);
    await era.printAndWait(`你听的出来，但没有点出`);
    await era.printAndWait(`怎么能点出来`);
    await era.printAndWait(
      `点出那名${tachyon.get_teen_sex_title}，徒劳无功的悲哀`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……明天，再一起寻找吧，一定，总有一天能够找回来的`,
    );
    era.println();
    await era.printAndWait(`因此，即便知道这是徒劳无功`);
    await era.printAndWait(`你还是没能吐出拒绝的话语`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君……你看，平常我们就是在这里做实验的，每次都是我做完药然后让你喝下去`,
    );
    era.println();
    await era.printAndWait(`欸欸……那不是，实验品吗？`);
    era.println();
    await tachyon.say_and_wait(`当然了，你以为豚鼠君是什么意思`);
    era.println();
    await era.printAndWait(`……原来真的是指实验动物啊`);
    era.println();
    await tachyon.say_and_wait(
      `……所以说，最近我会研究的，研究能让记忆恢复的药……你会帮我的吧？`,
    );
    era.println();
    await era.printAndWait(`……当然了`);
    era.drawLine();
    await tachyon.say_and_wait(
      `豚鼠君……那边是茶座的地盘，所以要小心点哦，要是随便碰那里的东西，可能会出事的……`,
    );
    era.println();
    await era.printAndWait(`欸……？`);
    await era.printAndWait(`……没发生什么事啊`);
    era.println();
    await tachyon.say_and_wait(`嗯？怎么可能……我试试……啊！研究资料烧起来了！`);
    era.drawLine();
    await tachyon.say_and_wait(`豚鼠君，你还记得红茶怎么泡吗？`);
    era.println();
    await era.printAndWait(`当然，红茶什么的还是会泡的`);
    era.println();
    await tachyon.say_and_wait(`嘶……这不是完全不行吗？`);
    era.println();
    await era.printAndWait(`欸欸？`);
    era.println();
    await tachyon.say_and_wait(`红茶跟糖的比例最起码也要1：1才对！`);
    era.println();
    await era.printAndWait(`这也太甜了吧！？`);
    era.drawLine();
    await era.printAndWait(`速子……失忆前的我和妳，是什么关系？`);
    era.println();
    await tachyon.say_and_wait(`……怎么了？忽然回忆起什么了吗？`);
    await era.printAndWait(
      `……没有，只是从妳说的感觉听起来，总觉得不只是训练员和${tachyon.get_uma_sex_title()}的关系……或者实验品与实验动物的关系`,
    );
    era.println();
    await tachyon.say_and_wait(`…………其实，我们，是恋人哦`);
    await era.printAndWait(`真的吗？`);
    era.println();
    await tachyon.say_and_wait(
      `……嗯，是超级相亲相爱的恋人，每天都腻在一起，甜腻到茶座${tachyon.sex}都受不了了`,
    );
    await era.printAndWait(`…………对不起`);
    era.println();
    await tachyon.say_and_wait(`没什么好道歉的，不是吗？`);
    await era.printAndWait(`要是……我能想起来的话`);
    era.println();
    await tachyon.say_and_wait(
      `……说什么话呢，不是要是能想起来，只是还没想起来而已……一定，一定会想起来的`,
    );
    await era.printAndWait(`……是啊，谢谢妳，速子`);
    era.drawLine();
    await tachyon.say_and_wait(
      `你看，这里是商店街……我们平常的实验用具都是在这里买的`,
    );
    await era.printAndWait(`……那个，速子`);
    era.println();
    await tachyon.say_and_wait(`嗯？怎么了？`);
    await era.printAndWait(`……为什么，周围的人都在用一种看到鬼的眼神看我们`);
    era.println();
    await tachyon.say_and_wait(`有吗？可能是我上个月的实验吧`);
    await tachyon.say_and_wait(`嗯，那时候的实验不小心把整条街都染成血红色了`);
    await era.printAndWait(`嗯，那时候的实验不小心把整条街都染成血红色了`);
    era.println();
    await tachyon.say_and_wait(
      `真没礼貌，我可是清廉正直的青春美${tachyon.get_teen_sex_title}啊`,
    );
    await tachyon.say_and_wait(
      `只是要是豚鼠君不在身边的话就会变成暴走的地球最终兵器而已`,
    );
    await era.printAndWait(`好可怕！`);
    era.println();
    await tachyon.say_and_wait(`……所以，千万不要再离开我了，好吗？`);
    await era.printAndWait(`…………嗯`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君，你，不怪我吗？`);
    await era.printAndWait(`为什么？`);
    era.println();
    await tachyon.say_and_wait(`是我，把你的人生束缚在了这里，如果……`);
    await era.printAndWait(`……为什么`);
    await era.printAndWait(`明明应该是妳该怪罪我的，不是吗？`);
    await era.printAndWait(`没有记忆的我……真的有资格接受妳的爱吗？`);
    era.println();
    await tachyon.say_and_wait(`！不是……不是这样的！`);
    await tachyon.say_and_wait(
      `一定能回忆起来的……！所以，所以……别再说那种话了……`,
    );
    era.drawLine();
    await era.printAndWait(
      `${tachyon.name}与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点`,
    );
    await era.printAndWait(`训练场、赛场、河滨、神社`);
    await era.printAndWait(`直到最后，一切都还是没能重新唤起豚鼠君的记忆`);
    await era.printAndWait(`但是，他们一点也不为此伤心`);
    await era.printAndWait(`因为，他们在这些地方，重新留下了最美好的回忆`);
    era.println();
    await tachyon.say_and_wait(`……这样的故事结尾，你喜欢吗？`);
    await era.printAndWait(`……嗯，很好哦`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君`);
    await era.printAndWait(`不用了，只要，这样就好了`);
    await era.printAndWait(`我……就要死了啊`);
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`速子……谢谢妳`);
    await era.printAndWait(`虽然，是无比短暂的人生`);
    await era.printAndWait(`但这段日子里，我过的很幸福`);
    await era.printAndWait(`哪怕不记得过去……我也能自豪的说出`);
    await era.printAndWait(`认识了速子……是我人生中，最美好的事`);
    await era.printAndWait(`所以，很抱歉`);
    await era.printAndWait(`${tachyon.name}和豚鼠君的故事……就要在这里结束了`);
    era.println();
    await tachyon.say_and_wait(`如果，你希望的话……`);
    await era.printAndWait(`……对不起`);
    await era.printAndWait(`但我，不希望再继续拌着妳的脚了`);
    await era.printAndWait(`就让故事在这里结束吧`);
    era.println();
    await me.say_and_wait(`抱歉，速子，我真的困了……可以了吗？`);
    await tachyon.say_and_wait(`……是啊，好好睡吧，我会陪在你身边的`);
    era.drawLine();
    await era.printAndWait(`豚鼠君安详的闭上了眼睛`);
    await era.printAndWait(`${tachyon.name}没有哭泣，因为……已经不是第一次了`);
    era.println();
    await era.printAndWait(`与豚鼠君的分离`);
    await era.printAndWait(`第一次，是那天在商店街`);
    await era.printAndWait(`要是自己没有离开的话`);
    await era.printAndWait(`要是有强硬的把他留在身边的话`);
    await era.printAndWait(`要是……`);
    await era.printAndWait(`没有要是`);
    era.println();
    await era.printAndWait(`哪怕已经把凶手挫骨扬灰`);
    await era.printAndWait(`哪怕将商店街染成鲜红`);
    await era.printAndWait(`他也无法回来`);
    await era.printAndWait(`那点鲜红更无法填补他腹腔流出的血液`);
    era.println();
    await tachyon.say_and_wait(`他还是……没有怪我`);
    era.println();
    await era.printAndWait(`哪怕被自己变成这样`);
    await era.printAndWait(`眼前豚鼠君的脸，洋溢着青春的痕迹`);
    await era.printAndWait(`他不应该在这里离去`);
    await era.printAndWait(`他不应该在现在离去`);
    await era.printAndWait(`但是，因为${tachyon.name}`);
    await era.printAndWait(`因为他在错误的时间，错误的地点，遇上了……错误的人`);
    era.println();
    await era.printAndWait(`喝了口放在床边的红茶`);
    await era.printAndWait(`自己泡的红茶，和他泡的理论成分完全一样`);
    await era.printAndWait(`毕竟，已经自己泡了这么多年`);
    await era.printAndWait(`能够琢磨的，能够更改的，都已经研究到了最好`);
    await era.printAndWait(`但是，味道不一样`);
    await era.printAndWait(`不可能一样，永远无法一样`);
    await era.printAndWait(`今天的红茶，永远胜不过昨天的味道`);
    era.println();
    await tachyon.say_and_wait(`————那么，该开始下一次实验了`);
    era.drawLine();
    await era.printAndWait(`特雷森学院的地下室`);
    era.println();
    await tachyon.say_and_wait(`上次来这里……是什么时候了`);
    era.println();
    await era.printAndWait(`三个月？五个月？还是……`);
    await era.printAndWait(`『这次』又跟豚鼠君度过了多长的时间？`);
    era.println();
    await tachyon.say_and_wait(`算了，不重要了`);
    era.println();
    await era.printAndWait(`打开灯`);
    await era.printAndWait(`在眼睛慢慢适应亮光后`);
    await era.printAndWait(`眼前出现的，是数以千计的营养槽`);
    era.println();
    await era.printAndWait(`啊啊，要是让他知道的话，他绝对不会原谅我吧`);
    await era.printAndWait(`但是……他还是没有怪罪我`);
    await era.printAndWait(`所以，这就算默认了`);
    era.println();
    await tachyon.say_and_wait(
      `第五十六次，记忆没有恢复倾向，身体无异状，存活时间五个月……`,
    );
    era.println();
    await era.printAndWait(`从他离开那天开始才启动的计画`);
    await era.printAndWait(`已经无数次咒骂过自己`);
    await era.printAndWait(`为什么如此晚才想到`);
    await era.printAndWait(
      `已经被泡沫般的幸福麻痹到忘记研究者最基本的未雨绸缪了吗？`,
    );
    await era.printAndWait(`所以才会落得如此下场`);
    era.println();
    await era.printAndWait(`一点一滴，像堆沙堡一般，将他的身体重新拼凑而成`);
    await era.printAndWait(
      `但，哪怕一切都拼凑起来了，也无法将无形的东西重新塑成`,
    );
    await era.printAndWait(`人体中蕴含最多秘密的大脑————记忆`);
    await era.printAndWait(
      `连一开始都不知道到底存在与否的东西，到底又能怎么重塑`,
    );
    await era.printAndWait(`只能像这样`);
    await era.printAndWait(`一次又一次的实验，一次又一次的唤醒`);
    await era.printAndWait(`一次又一次的……等待着奇迹`);
    era.println();
    await tachyon.say_and_wait(`失败主因，多器官衰竭引起败血症……生存意愿，无`);
    era.println();
    await era.printAndWait(`凡人的捏泥土游戏，大概是永远也及不上女神大人的`);
    await era.printAndWait(`所以，每次塑造出的他总是这样`);
    await era.printAndWait(`至多半年，至少……两周`);
    await era.printAndWait(`只要到了时间，总会因为各式各样的原因而陷入永眠`);
    await era.printAndWait(`……当然`);
    await era.printAndWait(`这些疾病，再怎么说，依然是常人范围`);
    await era.printAndWait(`凭借着${tachyon.name}的研究成果`);
    await era.printAndWait(
      `要续命的话，多活上三到五年绝对不是问题，甚至……还能更久`,
    );
    await era.printAndWait(
      `只要愿意，可以有一个三到五年，就能有第二个，第三个，第四个，直到永久`,
    );
    era.println();
    await tachyon.say_and_wait(`他还是……没有说`);
    era.println();
    await era.printAndWait(`无论重复多少次`);
    await era.printAndWait(`无论怎么对身体进行改动`);
    await era.printAndWait(`最后的最后，他说的总是大同小异`);
    era.println();
    await tachyon.say_and_wait(`已经结束了`);
    await tachyon.say_and_wait(`已经满足了`);
    era.println();
    await tachyon.say_and_wait(`开什么玩笑……开什么玩笑！`);
    await tachyon.say_and_wait(
      `谁允许你擅自满足了！给我说啊！对我说啊！说想要活下去！说想要继续和我生活下去啊！`,
    );
    await tachyon.say_and_wait(
      `没有记忆也没关系，要花一辈子找回记忆也没关系，说啊……为什么不说……为什么……要留我一个人……`,
    );
    era.println();
    await era.printAndWait(
      `如果，他是因为憎恨，憎恨害自己失去性命的${tachyon.name}，因此宁愿死也不愿意与${tachyon.name}一起生活，那都能接受`,
    );
    await era.printAndWait(
      `如果真的是这样，那么${tachyon.name}会不说二话的离开他的生活，只进行最低程度的医疗接触`,
    );
    await era.printAndWait(
      `只要能在最后，有那么一点迟疑，或者表露出那么一点对${tachyon.name}的嫌弃，`,
    );
    await era.printAndWait(`那么哪怕心跳停止，自己都能在最后关头将他抢救回来`);
    await era.printAndWait(`但是……五十六次里`);
    await era.printAndWait(`这种事，一次也没发生过`);
    era.println();
    await era.printAndWait(`不想拖累自己`);
    await era.printAndWait(`不想束缚自己`);
    await era.printAndWait(`哪怕失去一切，包括生命，包括记忆`);
    await era.printAndWait(
      `五十六次里，每一次，他直到最后想的都是${tachyon.name}的可能性`,
    );
    era.println();
    await era.printAndWait(`但是，${tachyon.name}的可能性，已经结束了`);
    await era.printAndWait(`${tachyon.name}的时间，已经停止走动`);
    await era.printAndWait(`那杯红茶的味道从那刻开始就已经定格`);
    era.println();
    await tachyon.say_and_wait(`第五十七次，开始`);
    era.println();
    await era.printAndWait(
      `随着培养槽将营养液排干，在培养槽中的人影被释放出来`,
    );
    era.println();
    await era.printAndWait(`不能让他结束，不会让他结束`);
    await era.printAndWait(`${tachyon.name}与豚鼠君的故事，必须永远继续下去`);
    era.println();
    await era.printAndWait(
      `于是，将过去束缚，也被束缚在过去的科学家，开始了新一轮的实验`,
    );
  }
};
