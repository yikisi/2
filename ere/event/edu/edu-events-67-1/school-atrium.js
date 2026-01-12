const era = require('#/era-electron');

const Edu67UntilRaceStart = require('#/event/edu/edu-events-67-1/race-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');

module.exports = class extends Edu67UntilRaceStart {
  async school_atrium(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new DaiyaEduMarks1();
    let wait_flag = false;
    if (event_marks.sos === 1) {
      event_marks.sos++;
      await print_event_name('不停打嗝SOS', daiya);
      const mcqueen = get_chara_talk(13);
      await era.printAndWait(`放学后，${me.name} 看见奔向目白麦昆的里见光钻。`);
      await mcqueen.say_and_wait('……嗝！');
      await daiya.say_and_wait('麦昆，这个给你。这样说不定就能停下来了！');
      await mcqueen.say_and_wait('哎呀，谢谢你。那我就不客气地收下了。');
      await mcqueen.say_and_wait('……嗝！');
      await mcqueen.say_and_wait('停不下来呢……待会我还要在聚会中致词的说。');
      await mcqueen.say_and_wait(
        '就光是现在，时间也在一分一秒地流逝……怎么办才好……！',
      );
      await daiya.say_and_wait('麦昆……');
      await daiya.say_and_wait(
        '……那个，可以把派对之前的时间都交给我吗？我想让你尝试别的方法！',
      );
      await daiya.say_and_wait('……啊，训练员！不好意思，我有事情要拜托你！');
      await daiya.say_and_wait('请你帮我在学园内广播，禁止任何人到顶楼！');
      era.printButton('「你打算做什么？」', 1);
      await era.input();
      await daiya.say_and_wait('我现在没有时间解释……拜托你了！');
      await mcqueen.say_and_wait('怎、怎么好像闹得很大一样……');
      await era.printAndWait(
        `在${daiya.sex}的拜托下，${me.name} 只好照做去广播了。不知道${daiya.sex}接下来打算做些什么……？`,
      );
      await mcqueen.say_and_wait('…………嗝。已经快要到聚会的时间了……');
      await daiya.say_and_wait('再等我一下下就好……啊，来了！');
      await me.say_and_wait('螺旋桨声……！', true);
      await era.printAndWait(
        '医疗人员「HQ！HQ！抵达特雷森学园了！接下来将对大小姐的同学进行协助！」',
      );
      await mcqueen.say_and_wait('直、直升机！？这是什么状况……！？');
      await daiya.say_and_wait('我把集团的私人医疗团队叫来了。');
      await me.say_and_wait('医疗器材的声音……！', true);
      await daiya.say_and_wait(
        '这是搭载了ICU等最新医疗设备的移动式集中治疗箱！',
      );
      await mcqueen.say_and_wait('这样不会太夸张了吗！？');
      await daiya.say_and_wait('来，请进去里面吧！这样打嗝应该就能停下来了。');
      await mcqueen.say_and_wait('太、太乱来了吧～！？');
      await mcqueen.say_and_wait(
        '……呃，哎呀？那个……因为发生太过冲击的事情，打嗝好像停下来了。',
      );
      await daiya.say_and_wait('咦？真的吗？也就是说战胜打嗝了，对吧！');
      await mcqueen.say_and_wait(
        '真是的，拜托不要做出如此令人吃惊的事情啊。不过……谢谢你，里见。',
      );
      await daiya.say_and_wait(
        '不会，这根本没什么！只要能稍微帮上点忙……我就很开心了！',
      );
      era.printButton('「看来你努力动员了这一切呢，辛苦了！」', 1);
      era.printButton('「完全是超乎想像的规模……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('嘿嘿嘿，因为是要帮忙麦昆嘛♪');
        await daiya.say_and_wait(
          '再遇到什么问题的时候请告诉我！我一定会尽全力帮忙的！',
        );
        await mcqueen.say_and_wait(
          '好、好的……到时候麻烦你在一般正常范畴内帮忙……',
        );
        await daiya.say_and_wait('呵呵呵，是！');
        await era.printAndWait(
          '里见光钻非常卖力的模样看起来比平常还要更加可靠。',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
      } else {
        await daiya.say_and_wait('原来如此，应该要再稍微低调一点行事比较好。');
        await daiya.say_and_wait(
          '啊，对呀……！我当时应该用私人飞机载麦昆去医院才对的！',
        );
        await mcqueen.say_and_wait('……是、是这样吗……');
        await era.printAndWait(
          `想法异于常人的里见光钻真是让 ${me.name} 震惊不已。`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      }
    } else if (event_marks.sweepy5 === 1) {
      event_marks.sweepy5++;
      await print_event_name('Sweepy5☆入团测验！', daiya);
      const kita = get_chara_talk(68);
      const sweepy = get_chara_talk(44);
      const tachyon = get_chara_talk(32);
      await era.printAndWait(
        `那是发生在 ${me.name} 和里见光钻两人走在走廊上时的事情。`,
      );
      await sweepy.print_and_wait('？？？「找到了──────！！！！」');
      await sweepy.say_and_wait(
        '里见！从今天开始，我就任命你为『魔法少女 · 光钻』！',
      );
      await daiya.say_and_wait('咦？『魔法少女 · 光钻』……吗？');
      await kita.say_and_wait(
        '『魔法少女☆Sweepy5』。魔法少女 · 玄驹登场！嘿嘿♪',
      );
      await daiya.say_and_wait('哇啊，连小北也在说这个！？');
      await kita.say_and_wait(
        '嘿嘿♪其实是一个由变革创立的团体，叫做『魔法少女☆Sweepy5』啦。',
      );
      await kita.say_and_wait('我也是在不久前刚被任命为魔法少女 · 玄驹的！');
      await kita.say_and_wait(
        '然后我就想说，要是小钻也愿意一起参加的话……你觉得呢？',
      );
      await sweepy.say_and_wait(
        '团员有我──天才魔法少女Sweepy跟魔法少女 · 玄驹，还有速子博士喔。',
      );
      await daiya.say_and_wait(
        '哎呀，大家一起玩魔法吗？还是什么之类的吗？真有趣♪请一定要让我参加！',
      );
      await sweepy.say_and_wait(
        '真的吗！？太好了♪那我们立刻开始练习魔法吧！我看看──',
      );
      await sweepy.say_and_wait('──啊！那边那个家伙！试着打倒那个家伙吧！');
      era.printButton('「咦！？」', 1);
      await era.input();
      await sweepy.say_and_wait(
        '敌人总是难以预测什么时候会出现的。一定要好好练习才行！',
      );
      await daiya.say_and_wait(
        `要打倒训练员……？可是，要怎么打倒${me.sex}才好呢？`,
      );
      await me.say_and_wait('居然是以我会被打倒为前提啊……', true);
      await sweepy.say_and_wait('这个我会教你♪看好啰。要像我这样念出咒语──');
      await tachyon.print_and_wait(
        '？？？「……呵呵呵，打倒敌人的方式可不只有魔法而已喔。」',
      );
      await tachyon.say_and_wait(
        '也有用药物强化你自己来打倒敌人的方法。你如果选这个方法的话，就由我来协助你吧。',
      );
      await sweepy.say_and_wait(
        '喂，现在是我的表现时间耶！！里见，你才不会想跟速子学，比较想跟我学才对吧！？',
      );
      await daiya.say_and_wait(
        '呵呵，我觉得两种都很有趣喔♪对了，训练员觉得跟谁学比较好呢？',
      );
      era.printButton('「跟东商变革学吧」', 1);
      era.printButton('「找爱丽速子帮忙吧」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sweepy.say_and_wait(
          '哼哼～这还用说嘛！那就让我示范怎么用魔法给你看♪准备好啰──',
        );
        await sweepy.say_and_wait('情情 · 爱爱 · 爱情花☆繁星之光降落吧！');
        await era.printAndWait(
          '……什么也没有发生。但她的确架式十足，不愧是自称魔法少女的人。',
        );
        await sweepy.say_and_wait(
          '呵呵，学会了吗？像这样依照自己的风格念出咒语就可以了♪',
        );
        await daiya.say_and_wait(
          '原来如此，依照自己的风格念出咒语……好，那我来试试看！',
        );
        await kita.say_and_wait('加油！小钻一定没有问题的！');
        await daiya.say_and_wait('请看，耀眼钻石的光芒！静谧的光辉──！');
        await era.printAndWait(
          `当下 ${me.name} 真的有种──看到耀眼光芒的感觉，于是 ${me.name} 决定倒下。`,
        );
        await sweepy.say_and_wait(
          '哇啊，真的看起来亮晶晶的耶……！里见，你很厉害嘛♪',
        );
        await sweepy.say_and_wait(
          '魔法少女 · 光钻！我正式允许你入团！现在开始你就是『魔法少女☆Sweepy5』的团员了♪知道了吗？',
        );
        await daiya.say_and_wait('是！魔法少女 · 光钻，今后会更加耀眼的！');
        await era.printAndWait(
          `虽然我不太懂魔法相关的东西，但看到几个同龄的学生玩得这么开心的模样，让 ${me.name} 不由得也跟着开心了起来。`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
      } else {
        await tachyon.say_and_wait(
          '呵呵呵，选得好！那么里见，首先要用药物来强化身体。一口气吞下去吧。',
        );
        await era.printAndWait(
          `爱丽速子准备把颜色诡异的药给拿出来……令 ${me.name} 不禁觉得有点危险。`,
        );
        await kita.say_and_wait('真是夸张的颜色……小钻你真的要喝吗？');
        era.printButton('「还是算了吧！」', 1);
        await era.input();
        await tachyon.say_and_wait('咦──！什么嘛──要反悔吗？');
        await daiya.say_and_wait(
          '不，一旦决定了我就绝对不反悔。就算是训练员也不能改变我的决定！',
        );
        await me.say_and_wait('可是——');
        await daiya.say_and_wait('里见光钻要一口气吞下去了！');
        await era.printAndWait(
          `${daiya.sex}从爱丽速子手中接过药，一口气吞下去。`,
        );
        await daiya.say_and_wait('嗯──这是我没吃过的味道呢！真有趣！');
        await tachyon.say_and_wait(
          '喔喔──！为了促进血液循环，我加了很多的辣椒素进去，你居然没有任感觉吗！',
        );
        await tachyon.say_and_wait(
          '呵呵呵……很厉害嘛你！好，就这样去跑步看看吧！',
        );
        await me.say_and_wait('辣椒素……！？', true);
        await sweepy.say_and_wait(
          '你、你很有一套嘛……！魔法少女 · 光钻！现在开始你就正式是『魔法少女☆Sweepy5』的团员了♪',
        );
        await era.printAndWait(
          `东商变革等人离开后，${me.name} 走向里见光钻……${me.name} 很在意${daiya.sex}刚才喝下辣椒素的事情。`,
        );
        era.printButton('「你刚才……不觉得辣吗？」', 1);
        await era.input();
        await daiya.say_and_wait('……你发现啦？');
        await daiya.say_and_wait(
          '呵呵，其实我的舌头觉得非常刺痛，但我总不好在大家面前摆脸色嘛♪',
        );
        await era.printAndWait(
          `${daiya.sex}偷偷地把实情告诉 ${me.name}。原来是在逞强啊，这样和${daiya.sex}年龄相符的举止令 ${me.name} 会心一笑。`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 10, 0, 0], 15);
      }
    } else if (event_marks.high_dream === 1) {
      event_marks.high_dream++;
      await print_event_name('过高的理想', daiya);
      const gold_ship = get_chara_talk(7);
      await era.printAndWait(
        `${me.name} 和里见光钻走在一起时，看见了表情很严肃的黄金船。`,
      );
      await gold_ship.say_and_wait(
        '大约是这样的大小吗？不对，应该要能容纳更……',
      );
      await daiya.say_and_wait('黄金船，你在想什么事情吗？');
      await gold_ship.say_and_wait('是里见啊……好，我就告诉你吧。跟我来。');
      await gold_ship.say_and_wait(
        '我问你，你看到这个泳池，有没有觉得怎么样啊？',
      );
      await daiya.say_and_wait('我想想……平常训练的时候经常使用？');
      await daiya.say_and_wait(
        '还有就是……嗯～要是再大一点的话，应该会更好玩。我在外国游过很大的游泳池，当时真的觉得很开心！',
      );
      await gold_ship.say_and_wait('说得好啊，阿里！我给你564分！');
      await daiya.say_and_wait('哇啊，谢谢你♪');
      await gold_ship.say_and_wait(
        '这个泳池的大小用来做训练或许是很足够没错……',
      );
      await gold_ship.say_and_wait(
        `但是呢，我更相信赛${daiya.get_uma_sex_title()}的可能性！宽敞泳池的解放感能为赛${daiya.get_uma_sex_title()}带来什么样的新境界，这是我想要亲眼看见的！`,
      );
      await daiya.say_and_wait(
        `哎呀！原来黄金船是这么地……为赛${daiya.get_uma_sex_title()}设想很多的人呀！`,
      );
      await gold_ship.say_and_wait('是啊，所以我决定了……我要──');
      await gold_ship.say_and_wait('把这个泳池变成鄂霍次克海！');
      await daiya.say_and_wait('鄂霍次克海！……鄂霍次克海？所以是什么意思呀？');
      await gold_ship.say_and_wait(
        '我要把鄂霍次克海移到泳池来啦！到时候就可以尽情做训练了！',
      );
      await daiya.say_and_wait(
        '那还真是规模庞大的工程……！真的是有可能做到的吗？',
      );
      await gold_ship.say_and_wait(
        '应该吧！全校学生一起花五十年用水桶接力过来就能做到了吧！',
      );
      era.printButton('「难度太高了……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '不过，撇开现实面不谈的话，我觉得这是一个很棒的理想喔。',
      );
      await daiya.say_and_wait('……而且，我听完之后觉得很期待呢！');
      await gold_ship.say_and_wait('里仔……你这家伙真是！');
      await daiya.say_and_wait('扩大泳池的空间我也是很赞成的。');
      await daiya.say_and_wait('我们来做吧，黄金船！我会全力协助你的！');
      era.printButton('「现在的大小就很够用了」', 1);
      era.printButton('「让学园知道这个想法吧！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '当然是这样没错，但经过改造之后，就会变成更好的环境喔？',
        );
        await me.say_and_wait('宝贵的时间就要全部耗费在水桶接力了耶？');
        await daiya.say_and_wait('啊……！？那、那倒是……');
        await gold_ship.say_and_wait(
          '伤脑筋耶……你们都这么说了，我也不好勉强什么。',
        );
        await gold_ship.say_and_wait(
          '不过呢，我总有一天会执行的。在正式要执行之前，一定要先做好万全的准备，并把牙给磨利……用磨萝卜泥的器具。',
        );
        await daiya.say_and_wait('……嗯！');
        await era.printAndWait(
          `两人用力地握手约定。等到正式执行那天……${me.name} 再努力阻止她们吧。`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      } else {
        await daiya.say_and_wait('这样的话……是不是应该要做一份企划书呢？');
        await gold_ship.say_and_wait('好主意！提出具体的内容就会更有说服力！');
        await daiya.say_and_wait('呵呵呵，感觉越来越有趣了呢♪');
        await daiya.say_and_wait(
          '『把特雷森学园的游泳池变成鄂霍次克海计划』开始执行！',
        );
        await era.printAndWait(
          '后来，虽然计划没能实现，对里见光钻来说却是一次不错的经验！',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
      }
    } else if (event_marks.chase === 1) {
      event_marks.chase++;
      await print_event_name('追逐憧憬', daiya);
      const gold_ship = get_chara_talk(7);
      const mcqueen = get_chara_talk(13);
      await era.printAndWait(`某天，${me.name} 走在广场上时──`);
      await daiya.say_and_wait('…………');
      era.printButton('「你在做什么？」', 1);
      await era.input();
      await daiya.say_and_wait('训练员！？');
      await daiya.say_and_wait('嘘──！我现在正在调查麦昆……！');
      await mcqueen.say_and_wait('……');
      await mcqueen.say_and_wait('感觉到了视线？……不对，应该是我多想了吧。');
      await daiya.say_and_wait('……呼。真是好险呀……！');
      await daiya.say_and_wait(
        '在我搞清楚麦昆实力强大的秘密之前，绝不能被她发现我在偷偷观察她。',
      );
      await me.say_and_wait(`干脆直接问${mcqueen.sex}吧`);
      await daiya.say_and_wait('不行！自己调查比较有趣嘛！');
      await daiya.say_and_wait('……哎呀？麦昆不见了！？');
      await daiya.say_and_wait('只是稍微没注意而已……跑去哪里了呢？');
      era.printButton('「说不定是去练习室练歌了」', 1);
      era.printButton('「感觉正在食堂抱头苦恼呢」', 2);
      era.printButton(`「${mcqueen.sex} 一定是去训练赛道锻炼自己了！」`, 3);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('我知道了，那就过去看看吧！');
        await daiya.say_and_wait('练习室有好几间呢。该从哪里找起──');
        await mcqueen.print_and_wait('？？？「唔喔～燃烧吧～！」');
        await daiya.say_and_wait('歌声……是从这一间传出来的。');
        await mcqueen.say_and_wait('承载着梦想，啊──我们的～胜利……♪');
        await daiya.say_and_wait('哇啊～！充满透明感又很有力道的歌声……好棒喔♪');
        await mcqueen.say_and_wait('里见！？咦？那个，你怎么会在这里……？');
        await mcqueen.say_and_wait(
          '难道是……我想说有隔音就不小心唱太大声了……！',
        );
        await daiya.say_and_wait(
          '呵呵，多亏是这样我才能发现的喔！麦昆的秘密。',
        );
        await mcqueen.say_and_wait(
          '秘、秘密！？我不明白你的意思呢。刚、刚才我只是为了转换一下心情才唱歌的……！',
        );
        await daiya.say_and_wait('……不，我已经什么都知道了。麦昆，你其实──');
        await daiya.say_and_wait(
          '是用歌声来鼓舞自己，进而提升自己的表演能力的吧！',
        );
        await mcqueen.say_and_wait(
          '……咦？啊、啊……的确是这样没错哦？哦、哦呵呵呵～',
        );
        await daiya.say_and_wait(
          '那个……请你也教教我吧。教我刚才那首听了会让人觉得心情激动的歌……！',
        );
        await mcqueen.say_and_wait('心情激动……？意思是说……你听了很喜欢吗？');
        await daiya.say_and_wait(
          '是的。旋律非常热情，不知不觉就会跟着变得很愉快──',
        );
        await daiya.say_and_wait('我想要更深入地了解蕴含在这首歌中的心意！');
        await mcqueen.say_and_wait('……！');
        await mcqueen.say_and_wait(
          '……我事先声明两点。第一，今天的事情绝不能告诉别人。',
        );
        await mcqueen.say_and_wait('第二──我的教学可不轻松哦。');
        await daiya.say_and_wait('……！了解！');
        await mcqueen.say_and_wait('来，抬头挺胸！用响彻云霄的声量……三，唱。');
        await daiya.say_and_wait('燃烧吧～！');
        await era.printAndWait(
          '里见光钻透过用最极限的声量唱歌，学会了超热血歌曲。',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
      } else if (ret === 2) {
        await daiya.say_and_wait(
          '呵呵呵，我忍不住就想像了一下那个画面了呢。那我们走吧。',
        );
        await mcqueen.say_and_wait('松饼、水果塔……甜地瓜跟杏仁豆腐……！');
        await mcqueen.say_and_wait(
          '每一个都充满魅力啊……但我一定要避免热量过量的状况！快动脑筋想……快仔细想……！',
        );
        await daiya.say_and_wait(
          '想不到麦昆竟然在选甜点的时候，会慎重认真到这种地步……！',
        );
        await daiya.say_and_wait('……我觉得我好像明白了。麦昆强大实力的秘密。');
        await daiya.say_and_wait(
          '无论是日常中多琐碎的小事都认真看待、思考。每一步都慎重行事是很重要的……！',
        );
        await daiya.say_and_wait('麦昆！');
        await mcqueen.say_and_wait(
          '呀啊！里、里见……！？你该不会……都、都看见了……！？',
        );
        await daiya.say_and_wait(
          '是的，我看见你表情非常认真严肃……你真的很帅气喔，麦昆！',
        );
        await mcqueen.say_and_wait(
          '听、听你这么说……我不知道该开心还是该不好意思呢……！',
        );
        await daiya.say_and_wait('我也要像麦昆一样，慎重认真地选甜点。');
        await daiya.say_and_wait('嗯～我想想喔……哎呀？');
        await daiya.say_and_wait(
          '现在正在举办……『珍奇甜点展』呢！那我就选那个吧♪',
        );
        await mcqueen.say_and_wait(
          '『墨鱼起司蛋糕』、『布丁寿司』……这是什么菜单啊！？',
        );
        await mcqueen.say_and_wait(
          '那个，里见……你刚才不是说要慎重认真地选吗？',
        );
        await daiya.say_and_wait(
          '是呀！这些各式各样神秘奇妙的甜点……不觉得很值得选来吃吗♪',
        );
        await mcqueen.say_and_wait(
          '……！真是了不起的探究心……！你这是和甜点的正面对决吧？',
        );
        await mcqueen.say_and_wait('……我也要挑战！挑战『珍奇甜点展』！');
        await daiya.say_and_wait('麦昆……！我们一起开拓甜点的新境界吧。');
        await daiya.say_and_wait('那么……要不要选那个『蕈菇蒙布朗』呢？');
        await mcqueen.say_and_wait('……呃，里见。我可以再慢慢想想看吗？');
        await era.printAndWait(
          '两人一起经过苦思后做出选择，一起品尝了美味的甜点！',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(
          67,
          [0, 0, 0, 0, 10],
          0,
          JSON.parse('{"体力":100}'),
        );
      } else {
        await daiya.say_and_wait('是秘密特训的必做项目呢。我们去看看吧……！');
        await mcqueen.say_and_wait('请问……你在赛道的正中间做什么呢？');
        await gold_ship.say_and_wait(
          '我在假装自己是关隘啊。想通过就要搞笑把我逗笑。',
        );
        await mcqueen.say_and_wait(
          '你这样会妨碍到别人的。快点让开吧，黄金船。',
        );
        await gold_ship.say_and_wait('……嗯？你这个表演有什么好笑的？');
        await mcqueen.say_and_wait(
          '我才没有在表演！真是的，那我只好用蛮力……！',
        );
        await mcqueen.say_and_wait('预备──唔！！');
        await gold_ship.say_and_wait('喔哇！？我居然推不回去……！？');
        await gold_ship.say_and_wait(
          '然后就这样走掉了……力气怎么那么大啊。那家伙真不简单耶。',
        );
        await daiya.say_and_wait(
          '那个，请问你们刚才在做什么？看起来像是在相扑的感觉……',
        );
        await gold_ship.say_and_wait(
          '没错，你正好撞见了重头戏。阿船我完全没辙呢。',
        );
        await daiya.say_and_wait(
          '难道麦昆实力强大的原因，就是因为她有非常坚实的腰跟腿……！？',
        );
        await daiya.say_and_wait('……黄金船。能请你也跟我相扑吗……麻烦了！');
        await gold_ship.say_and_wait(
          '呼……你还早得很呢。先学会怎么搞笑再说吧。',
        );
        await daiya.say_and_wait('搞笑吗……？');
        await mcqueen.say_and_wait('……呼，成绩一直没办法进步呢。');
        await mcqueen.say_and_wait(
          '不知道是不是刚才用掉太多力气了。黄金船……希望她不要又给谁惹麻烦才好。',
        );
        await mcqueen.say_and_wait('……哎呀？那是？');
        await gold_ship.say_and_wait('肌肌、肌肌──');
        await gold_ship.say_and_wait('比目鱼肌！！');
        await daiya.say_and_wait('比目鱼肌！');
        await gold_ship.say_and_wait(
          '不行、不行！完全没用到腰的力量！麦昆可是比你认真多了喔！',
        );
        await daiya.say_and_wait('……是！！');
        await mcqueen.say_and_wait('我哪有做这种事！');
        await daiya.say_and_wait('麦昆！？');
        await daiya.say_and_wait('呃，这是怎么一回事呢──哎呀，黄金船不见了？');
        await era.printAndWait(
          '里见光钻因为进行奇妙的搞笑训练，意外地锻炼到了肌肉！',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      }
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};
