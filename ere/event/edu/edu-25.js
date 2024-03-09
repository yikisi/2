const era = require('#/era-electron');

const {
  sys_reg_race,
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_love_uma,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const { add_event } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { race_enum } = require('#/data/race/race-const');

const { location_enum } = require('#/data/locations');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const callname = sys_get_callname(25, 0);
const chara_talk = get_chara_talk(25);

const handlers = {};

handlers[event_hooks.week_start] = async () => {
  const chara_talk = get_chara_talk(25),
    edu_weeks = era.get('cflag:25:育成回合计时');
  if (edu_weeks === 47 + 1) {
    await print_event_name('新年的抱负', chara_talk);
    await era.printAndWait('伴随着新年的到来，曼城茶座也晋升到了经典级。');
    await era.printAndWait(
      `通常这种时候，一般的训练员都会和担当${chara_talk.get_uma_sex_title()}讨论彼此的远大抱负，但是……`,
    );
    await chara_talk.say_and_wait(
      '现在……依我的身体状况，还没办法说出什么了不起的抱负……',
    );
    await chara_talk.say_and_wait(
      '希望今年……至少可以成长得能紧跟在朋友的后面……',
    );
    await era.printAndWait(
      `${chara_talk.sex}天生体质虚弱这点依旧没能得到改善，离目标仍相当遥远。即使如此，你还是希望让${chara_talk.sex}在心情上积极乐观些。`,
    );
    era.printButton('「要不要出门转换一下心情？」', 1);
    await era.input();
    await chara_talk.say_and_wait('出门……话虽如此，应该去哪呢……');
    era.printButton(`「让${chara_talk.sex}体验如鱼得水的感受」`, 1);
    era.printButton(`「让${chara_talk.sex}好好享受一杯咖啡」`, 2);
    era.printButton('「去外面闲逛吧」', 3);
    const ret = await era.input();

    if (ret === 1) {
      await chara_talk.say_and_wait(
        '如鱼得水……？虽然不太懂，但要是能把杂念像鱼吐泡泡一样吐出来的话……或许也不错吧……',
      );
      await era.printAndWait(
        `于是带着曼城茶座，你们来到了水族馆。${chara_talk.sex}非常专注地盯着水槽里的鱼……`,
      );
      await chara_talk.say_and_wait(
        '……这些鱼，面对无止尽的水压，却都只是静静地忍受呢……',
      );
      await chara_talk.say_and_wait('我也得像它们一样……变得更坚强才行……');
      await era.printAndWait(
        `${chara_talk.sex}似乎跟鱼的感受产生共鸣，从而稍微学会了忍耐。`,
      );
      era.println();
      get_attr_and_print_in_event(25, [0, 20, 0, 0, 0], 0);
      sys_like_chara(25, 0, 20);
      sys_love_uma(25, 3);
      await era.waitAnyKey();
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        '咖啡……说得也是，咖啡的香气总是能让我忘记一切……',
      );
      await chara_talk.say_and_wait(
        '那我们就去那间咖啡厅吧……虽然我平时都是自己一个人去的……',
      );
      await era.printAndWait(
        `在茶座的带领下，你们来到了一间小小的咖啡厅。${chara_talk.sex}熟络地坐在了常坐的座位上……`,
      );
      await chara_talk.say_and_wait(
        `${callname}……你知道喝咖啡的步骤吗？在这间店里有它品尝咖啡的顺序……`,
      );
      await chara_talk.say_and_wait(
        '首先，要享受空气中飘扬的香气……再点上一杯当季的咖啡……',
      );
      await era.printAndWait(
        `${chara_talk.sex}一点一点地将咖啡含在口中再吞下，尽情享受了咖啡的美味。`,
      );
      era.println();
      const to_print = sys_change_attr_and_print(25, '体力', 400);
      if (to_print) {
        era.println();
        await era.printAndWait([
          chara_talk.get_colored_name(),
          ' 的 ',
          ...to_print,
        ]);
      }
      sys_like_chara(25, 0, 20);
      sys_love_uma(25, 3);
      await era.waitAnyKey();
    } else {
      await chara_talk.say_and_wait(
        '……我不太喜欢到处闲逛……会让我有种像要被人潮吞没、消失的感觉……',
      );
      await chara_talk.say_and_wait(
        `不过……说得也是。如果${callname}……也在的话……`,
      );
      await era.printAndWait(
        `于是带着曼城茶座，你们来到了特雷森附近的街道。${chara_talk.sex}好奇地四处张望路边的店铺的橱窗……`,
      );
      await chara_talk.say_and_wait(
        '没想到……还挺有趣的呢……有好多没看过的家具和衣服……',
      );
      await chara_talk.say_and_wait('啊，是古老的赛风壶……还有古董咖啡杯……');
      await era.printAndWait(
        '平时不会逛街的曼城茶座，因为发现了一些没看过的东西，内心似乎也多了些启发。',
      );
      era.println();
      get_attr_and_print_in_event(25, undefined, 20);
      sys_like_chara(25, 0, 20);
      sys_love_uma(25, 3);
      await era.waitAnyKey();
    }
  } else if (edu_weeks === 47 + 4) {
    await print_event_name('转变', chara_talk);
    await era.printAndWait(
      `曼城茶座曾遭遇无数怪异现象侵扰，但经过努力不懈地照护后，总算让${chara_talk.sex}的成绩达到了及格范围。`,
    );
    await chara_talk.say_and_wait(
      '体重……还是会一下变重一下变轻……但成绩却逐渐稳定了。',
    );
    await chara_talk.say_and_wait(
      `这都要归功于${callname}……虽然离目标还非常远。`,
    );
    await chara_talk.say_and_wait('别说目标了……就连……');
    await era.printAndWait(
      `猜想着${chara_talk.sex}原本想说的话，但你实在是摸不透${chara_talk.sex}的想法。`,
    );
    era.printButton('「下一个目标想定在哪里？」', 1);
    await era.input();
    await era.printAndWait(
      `以${chara_talk.sex}的状态来说，要在春季的经典级赛事里跑赢或许很困难，但也不希望${chara_talk.sex}因此自我设限。`,
    );
    await era.printAndWait(
      `要是能先询问出曼城茶座的意见，通过${chara_talk.sex}的回答，应该能稍微明白${chara_talk.sex}的想法才对。`,
    );
    if (era.get('cflag:32:招募状态') === 1) {
      await chara_talk.say_and_wait('……速子同学也会参加的，弥生赏。');
      await era.printAndWait(
        '弥生赏……这是速子通向经典三冠之路上，重要的一场比赛。',
      );
    } else {
      await chara_talk.say_and_wait('……弥生赏。');
    }
    era.printButton('「能问一下你的理由吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '其实……并不是我的意愿。但是朋友一直这么要求……',
    );
    await chara_talk.say_and_wait('要我‘去跑这一趟‘，如果不去跑的话……');
    await era.printAndWait(
      '不去跑的话？你挺直了背，等待着曼城茶座的下一句话。',
    );
    await chara_talk.say_and_wait(
      '会怎么样……我也不知道。朋友就只是这样告诉我……但或许会有可怕的事发生……',
    );
    await era.printAndWait('你叹了口气，靠回椅背上。');
    await era.printAndWait(
      `看来${chara_talk.sex}已经下定决心了——尽管这并不出于${chara_talk.sex}自己的意愿，但单纯的以训练员的角度来看的话……`,
    );
    if (era.get('cflag:32:招募状态') === 1) {
      era.printButton('「去和爱丽速子一较高下吧！」', 1);
      await era.input();
    } else {
      era.printButton('「尽管努力去跑吧！」', 1);
      await era.input();
    }
    await chara_talk.say_and_wait('……是！无论是谁……我都会将其超越……');
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(6), 20);
    sys_like_chara(25, 0, 15);
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 14) {
    await print_event_name('粉丝感谢祭', chara_talk);
    await era.printAndWait('粉丝感谢祭当天。据说只有在这一天，特雷森里……');
    await era.printAndWait('——叮铃叮铃。');
    await chara_talk.say_and_wait('……欢迎光临。');
    await era.printAndWait('一间平时并不存在的、气氛舒适的咖啡厅才会营业。');
    await chara_talk.say_and_wait(
      `${callname}……让你久等了。这是经过特别烘焙的曼哈顿特调咖啡。`,
    );
    await chara_talk.say_and_wait('请你、品尝看看……');
    await era.printAndWait('盯——');
    await era.printAndWait('你仿佛感受到了曼城茶座灼热的目光。');
    era.printButton('「……不用去服务其他客人吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '不会有其他的客人了。这份宁静就是这里最迷人的部分，而且……',
    );
    await chara_talk.say_and_wait(
      '一定不会有人能发现这里。就算他们走进入口，也会直接通往出口……',
    );
    await era.printAndWait('这样的咖啡厅开来有什么意义吗……');
    await era.printAndWait('心中默默吐槽，随后细细品尝起手中的咖啡。');
    await era.printAndWait('——叮铃叮铃。');
    await chara_talk.say_and_wait('咦……居然还有其他人……');
    await era.printAndWait('——叮铃叮铃叮铃叮铃……');
    era.printButton('「……一下子进来了好多人！」', 1);
    await era.input();
    await era.printAndWait(
      '男性：「喔，就是这里！那位曼城茶座经营的咖啡厅！」',
    );
    await era.printAndWait(
      `女性：「是啊，很有气氛呢～！装潢也好漂亮～！我可是${chara_talk.sex}的粉丝呢～」`,
    );
    await chara_talk.say_and_wait('这是……');
    era.printButton('「结果还是被大家找到了呢。」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '是啊……不过，这是什么情况……？为什么被大家发现呢？',
    );
    era.printButton('「这就代表大家非常努力地在找吧。」', 1);
    await era.input();
    await era.printAndWait(
      `曼城茶座最近表现得十分活跃，${chara_talk.sex}的支持度也随着越来越高。`,
    );
    await era.printAndWait(`看来是${chara_talk.sex}的知名度把粉丝给招来了。`);
    await chara_talk.say_and_wait(
      '虽然人很多……但既然来了，就是客人……我会努力的。',
    );
    await era.printAndWait(
      '几分钟后，看着忙得晕头转向的曼城茶座，作为顾客的你也只好充当了一回临时服务员。',
    );
    era.println();
    get_attr_and_print_in_event(25, [0, 10, 0, 10, 0], 0);
    sys_like_chara(25, 0, 20);
    await era.waitAnyKey();
  } else if (
    edu_weeks === 47 + 29 &&
    era.get('flag:当前位置') === location_enum.beach &&
    era.get('cflag:25:位置') === era.get('cflag:0:位置')
  ) {
    await print_event_name('夏季合宿（第二年）开始', chara_talk);
    if (era.get('cflag:32:招募状态') === 1) {
      const tachyon_talk = get_chara_talk(32);
      await era.printAndWait('作为特雷森的惯例，你与曼城茶座来到了夏季合宿。');
      await era.printAndWait(
        `曼城茶座原本就不太好的身体在之前的训练和比赛中留下了许多疲劳，得想办法在这段期间内让${chara_talk.sex}恢复才行。`,
      );
      await era.printAndWait(
        `然而有别于你的决心的是，该说${
          chara_talk.sex
        }们还只是一群学生吗，来到合宿地点的赛${chara_talk.get_uma_sex_title()}们都相当兴奋。`,
      );
      await chara_talk.say_and_wait('呵呵呵……好期待，合宿……要去哪里好呢？');
      await chara_talk.say_and_wait(
        '咦？无人的断崖吗？我想想，深山里被人遗忘的洞窟或许也不错啊，呵呵呵呵……',
      );
      await era.printAndWait(
        `赛${chara_talk.get_uma_sex_title()}A：「你、你在跟谁说话啊？茶座～！？让人感觉心里毛毛的诶！」`,
      );
      await era.printAndWait(
        `赛${chara_talk.get_uma_sex_title()}B：「哈哈哈……不知道为什么，但总觉得有${
          chara_talk.sex
        }在就很灵异呢……」`,
      );
      await tachyon_talk.say_and_wait(
        '嗯～比起灵异应该说是神秘才对。对吧？豚鼠君。',
      );
      await era.printAndWait(
        '看着不远处对着空气喃喃自语的曼城茶座，站在你身边的爱丽速子擅自打开了话题。',
      );
      await tachyon_talk.say_and_wait(
        '虽然我不太清楚你究竟和茶座经历过些什么，但比起那些看得见的怪物，果然还是这些看不见的东西更难对付吧。所以我希望你最好能与它们保持距离。',
      );
      await tachyon_talk.say_and_wait(
        `对于茶座，我不在乎${chara_talk.sex}那个朋友到底是什么、是不是真的存在，我更在意的${chara_talk.sex}打算做什么。`,
      );
      await era.printAndWait(
        '——朋友，这个帮助过你数次，但你却几乎一无所知的存在。',
      );
      await era.printAndWait('作为曼城茶座目标的核心，朋友会是什么样的呢？');
      await era.printAndWait(
        '虽然平时没有多余的时间跟精力可以深入了解，但如果是趁夏季合宿这一个机会的话……',
      );
      await chara_talk.say_and_wait(`…………？${callname}，怎么了吗？`);
      era.printButton('「这个夏天……我们好好聊一聊吧。」', 1);
      await era.input();
      await chara_talk.say_and_wait('……我很乐意。');
      await era.printAndWait(
        '去深入了解朋友，肯定也是加深对曼城茶座了解的方法——你如此想到。',
      );
    } else {
      await era.printAndWait('作为特雷森的惯例，你与曼城茶座来到了夏季合宿。');
      await era.printAndWait(
        `曼城茶座原本就不太好的身体在之前的训练和比赛中留下了许多疲劳，得想办法在这段期间内让${chara_talk.sex}恢复才行。`,
      );
      await era.printAndWait(
        `然而有别于你的决心的是，该说${
          chara_talk.sex
        }们还只是一群学生吗，来到合宿地点的赛${chara_talk.get_uma_sex_title()}们都相当兴奋。`,
      );
      await chara_talk.say_and_wait('呵呵呵……好期待，合宿……要去哪里好呢？');
      await chara_talk.say_and_wait(
        '咦？无人的断崖吗？我想想，深山里被人遗忘的洞窟或许也不错啊，呵呵呵呵……',
      );
      await era.printAndWait(
        `赛${chara_talk.get_uma_sex_title()}A：「你、你在跟谁说话啊？茶座～！？让人感觉心里毛毛的诶！」`,
      );
      await era.printAndWait(
        `赛${chara_talk.get_uma_sex_title()}B：「哈哈哈……不知道为什么，但总觉得有${
          chara_talk.sex
        }在就很灵异呢……」`,
      );
      await era.printAndWait(
        '看着不远处对着空气喃喃自语的曼城茶座，你想到了一件事。',
      );
      await era.printAndWait(
        '——朋友，这个帮助过你数次，但你却几乎一无所知的存在。',
      );
      await era.printAndWait('作为曼城茶座目标的核心，朋友会是什么样的呢？');
      await era.printAndWait(
        '虽然平时没有多余的时间跟精力可以深入了解，但如果是趁夏季合宿这一个机会的话……',
      );
      await chara_talk.say_and_wait(`…………？${callname}，怎么了吗？`);
      era.printButton('「这个夏天……我们好好聊一聊吧。」', 1);
      await era.input();
      await chara_talk.say_and_wait('……我很乐意。');
      await era.printAndWait(
        '去深入了解朋友，肯定也是加深对曼城茶座了解的方法——你如此想到。',
      );
      era.println();
    }
  } else if (
    edu_weeks === 47 + 30 &&
    era.get('flag:当前位置') === location_enum.beach &&
    era.get('cflag:25:位置') === era.get('cflag:0:位置') &&
    era.get('cflag:32:招募状态') === 1 &&
    era.get('cflag:32:位置') === era.get('cflag:0:位置') //todo plan B
  ) {
    const tachyon_talk = get_chara_talk(32);
    await print_event_name('Plan B', chara_talk);
    await era.printAndWait(
      '夏季合宿刚开始的一天，你把曼城茶座叫到了合宿地的一个房间内。',
    );
    era.printButton('「有一件与你有关的事……先来看电视吧。」', 1);
    await era.input();
    await era.printAndWait('曼城茶座茫然地点了点头，在你的指示下打开了电视。');
    await chara_talk.say_and_wait('…………！？速子同学？');
    await era.printAndWait('电视上正在播出的，是爱丽速子的新闻发表会。');
    await tachyon_talk.print_and_wait(
      '……正如我刚才所言，从今天起，我爱丽速子——将无限期停赛！',
    );
    await era.printAndWait('记者们：「————什么！？」');
    await era.printAndWait(
      `作为经典三冠路线中最受瞩目的赛${chara_talk.get_uma_sex_title()}之一，突如其来的宣布……让现场一片哗然。`,
    );
    await era.printAndWait(
      '记者A：「爱丽速子小姐……你明明在赛事上展露出了极大潜能，为何会做出这样的决定呢！？」',
    );
    await tachyon_talk.print_and_wait(
      '极大的潜能吗……那甚至都还不是我真正的实力呢。',
    );
    await era.printAndWait(
      '记者B「许多人都认定你会稳稳拿下更多的胜利，究竟是为什么！？',
    );
    await tachyon_talk.print_and_wait(
      '嘛，理由的话，只能说一言难尽。真相总是充满各种因素的，不是吗？',
    );
    await era.printAndWait('记者C：「实质上的引退宣言……可以这么理解吗？」');
    await tachyon_talk.print_and_wait(
      '这样问也没有意义，毕竟谁都无法确定未来会发生什么。',
    );
    await tachyon_talk.print_and_wait('那么，我要宣布的事情就是这些。');
    await era.printAndWait(
      '随后，爱丽速子便离开了现场，你也把电视关上，看向还处在信息过载的曼城茶座。',
    );
    era.printButton('「简单来说……速子打算放弃比赛了。」', 1);
    await era.input();
    await chara_talk.say_and_wait('这究竟……到底是为什么……');
    era.printButton(
      `「这是……我和速子的决定，从今以后${chara_talk.sex}将——」`,
      1,
    );
    await era.input();
    await tachyon_talk.say_and_wait('关于这点还是由我亲自来解释吧。');
    await era.printAndWait(
      '爱丽速子推开了房间的门，迎上了你和曼城茶座的视线。',
    );
    await tachyon_talk.say_and_wait(
      '简单来说，便是我从茶座——你的身上发现了新的可能性。',
    );
    await chara_talk.say_and_wait('新的……可能性？');
    await tachyon_talk.say_and_wait(
      `没错，我的目标——抵达乃至于超越赛${chara_talk.get_uma_sex_title()}的极限……但说到底真的需要我本人亲自去实现吗？道路并非只有一条，即便需要验证的真理只有一个，但却存在数条通往终点的道路。`,
    );
    await chara_talk.say_and_wait('这是……什么意思？');
    await era.printAndWait('爱丽速子叹了口气，又浮夸地摆了摆手。');
    await tachyon_talk.say_and_wait(
      '我都说这么明白了还不懂吗……就是‘顾问’啊，‘顾问’！茶座，我要成为你的顾问！',
    );
    await chara_talk.say_and_wait('诶……顾问！？');
    await era.printAndWait('曼城茶座茫然下意识看向你，你点了点头。');
    era.printButton('「没错，从今以后速子将担任你的顾问，但同时……」', 1);
    era.printButton(
      `「你也要承担帮助速子完成${chara_talk.sex}的目标的责任……」`,
      2,
    );
    era.printButton('「现在要征求的，就是茶座你的意见。」', 3);
    await era.input();
    await era.printAndWait(
      '说完，你打算留点时间让曼城茶座思考，但爱丽速子并不这么想。',
    );
    await tachyon_talk.say_and_wait(
      '在我的帮助下，你就能更快追上你的朋友了哦？',
    );
    await era.printAndWait(
      `追上朋友——这是曼城茶座最大的愿望，爱丽速子的实力与科学能力是即使对${chara_talk.sex}颇具怨言的曼城茶座也认可的。`,
    );
    await era.printAndWait('如果说能更快地追上朋友的话……');
    await chara_talk.say_and_wait('我还是没办法理解你……但，既然能帮到我的话……');
    await tachyon_talk.say_and_wait(
      '呵呵呵呵……很好，这就对了。那就这么决定了，Plan B，就此开始！',
    );
    await era.printAndWait(
      '获得了爱丽速子的助阵后，曼城茶座的经典赛事挑战之路会朝着怎样的方向前进呢……',
    );
    get_attr_and_print_in_event(25, [0, 0, 0, 0, 10], 0);
  } else if (
    edu_weeks === 47 + 31 &&
    era.get('flag:当前位置') === location_enum.beach &&
    era.get('cflag:25:位置') === era.get('cflag:0:位置')
  ) {
    await print_event_name('朋友', chara_talk);
    await chara_talk.say_and_wait(`${callname}……是关于朋友的事……对吗？`);
    era.printButton('「嗯，我想要详细地了解。」', 1);
    await era.input();
    await era.printAndWait(
      `夏季合宿的某个晚上，你向曼城茶座询问了关于在${chara_talk.sex}心中特殊的存在——朋友的事情。`,
    );
    await era.printAndWait(
      `你记得之前曾在偶然的情况下听${chara_talk.sex}说过，朋友似乎是从${chara_talk.sex}小时候开始就伴${chara_talk.sex}左右，一直跑在${chara_talk.sex}的前方引导着${chara_talk.sex}的存在。`,
    );
    await era.printAndWait('但所谓的引导，到底指的是什么呢？');
    await chara_talk.say_and_wait('你想要……知道什么呢？');
    era.printButton('「你说朋友会引导你，是什么意思呢？」', 1);
    await era.input();
    await chara_talk.say_and_wait('引导就是……一直‘跑在我前面’的意思。');
    await chara_talk.say_and_wait('不，这么说不太对，并非只有这样而已……');
    await chara_talk.say_and_wait('‘朋友’会将我……带去幸福的地方……');
    await era.printAndWait('——呵呵呵、呵呵呵呵呵……♪');
    await era.printAndWait('四周传来了似有若无的嬉笑声。');
    await chara_talk.say_and_wait(
      '像是偷偷带我去一些没有人知道的、安静的场所……',
    );
    await era.printAndWait('——呵呵呵、呵呵呵呵呵……♪');
    await era.printAndWait('仿佛就是从你耳边发出般，戏弄着你的感官。');
    await chara_talk.say_and_wait(
      '去游乐园的时候……朋友就坐在摩天轮的最上面。当时我为了追上朋友而坐进了摩天轮的车厢……就看见了一片很美的景色……',
    );
    await chara_talk.say_and_wait('只要追着朋友，总是会发生快乐的事……');
    await chara_talk.say_and_wait('若我希望，朋友也总是会告诉我该往哪里去……');
    await chara_talk.say_and_wait(
      '其他人……从来……没给过我什么……但只有朋友不一样。',
    );
    await chara_talk.say_and_wait('是唯一……会带给我快乐时光……独一无二的存在……');
    era.printButton('「……就算现在也是如此吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait(`……${callname}，感觉也跟朋友有点相似。`);
    await chara_talk.say_and_wait(
      `但我们之所以能相遇，也是因为朋友把我引导到遇到危险的${callname}面前的关系……`,
    );
    await era.printAndWait(
      '你有点明白了，对于曼城茶座来说，朋友不仅仅是比赛时跑在前方的存在……',
    );
    await era.printAndWait(
      `对曼城茶座来说，或许更像是将${chara_talk.sex}带往幸福的领航员。`,
    );
    await chara_talk.say_and_wait(
      '现在也是，只要我希望，朋友就会带我到任何地方。譬如说……',
    );
    await chara_talk.say_and_wait(
      `${callname}，你可以帮我想一个‘现在这种地方绝对不可能有的东西’吗？`,
    );
    await era.printAndWait('这里不可能有的东西……在你脑海里，浮现的是——');
    era.printButton('「……薰衣草。」', 1);
    era.printButton('「……球藻。」', 2);
    //todo 选项3
    era.println();
    let ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        '薰衣草……是吗。唇形科薰衣草属……是不会生长在这里的花……',
      );
      await chara_talk.say_and_wait('但是，只要我由衷地希望……');
      await era.printAndWait('——碰！');
      await era.printAndWait('你的背……突然被某种强大的力量推了一下。');
      await era.printAndWait(
        '是朋友吗！？在你出现这样的念头时，身体已经像是被人催促似地朝被推的方向前进了。',
      );
      await era.printAndWait('而最后抵达的是……');
      await chara_talk.say_and_wait('这是……岩石呢。一起把它给移开吧。');
      await chara_talk.say_and_wait('一～二……嘿咻……');
      await era.printAndWait(
        `曼城茶座以${chara_talk.sex}那纤细的手臂使劲将岩石移开，而岩石底下的是……一大堆海草一样的东西。`,
      );
      await chara_talk.say_and_wait(
        '每一根的前端都有像花苞的东西……是用这个，来代替薰衣草的意思吗……',
      );
      await era.printAndWait(
        '或许这就是朋友能做到的极限了吧，看来也并非是万能的。',
      );
      await era.printAndWait('也许是类似于会尽力帮忙的守护灵吧。');
      await chara_talk.say_and_wait('朋友总是会像这样，引导我笔直地走向幸福。');
      await chara_talk.say_and_wait(
        '一直在我身边，帮助着我……是非常重要的……‘朋友’……',
      );
      await era.printAndWait(
        '曼城茶座能有今天，或许都是这位守护灵的功劳也不一定。',
      );
      await chara_talk.say_and_wait(`……啊，${callname}你看。海上有一座小岛……`);
      await era.printAndWait(
        '你望向远处的海上……的确有一座小岛。但既没有通往岛上的桥和船，也不是游泳能到达的距离。',
      );
      await chara_talk.say_and_wait(
        '我有点想要去看看呢……想必…会是个安静又美丽的地方吧。',
      );
      await era.printAndWait('但要是真想去到那座岛上的话……');
      await era.printAndWait('——碰、碰、碰！');
      await era.printAndWait(
        '没来由地，你的背上被连续戳了几下……！像是在告诉说“不要犹豫，去吧”。',
      );
      await chara_talk.say_and_wait(
        '啊，“朋友”……在跟我招手……在海的另一边招手说‘来这里’……',
      );
      await era.printAndWait('朋友，对曼城茶座来说像是守护灵般的存在。');
      await era.printAndWait(
        `但却让人搞不清楚究竟有没有心要守护${chara_talk.sex}。`,
      );
      era.println();
      get_attr_and_print_in_event(25, [0, 0, 20, 0, 0], 0);
      sys_like_chara(25, 0, 25);
      await era.waitAnyKey();
    } else {
      await chara_talk.say_and_wait(
        '球藻……是吗。生长在北海道阿寒湖等处的，球状藻类……',
      );
      await chara_talk.say_and_wait(
        '虽然这附近应该不可能找得到，但是，只要我由衷地希望……',
      );
      await era.printAndWait('——碰！');
      await era.printAndWait('你的背……突然被某种强大的力量推了一下。');
      await era.printAndWait(
        '是朋友吗！？在你出现这样的念头时，身体已经像是被人催促似地朝被推的方向前进了。',
      );
      await era.printAndWait('而最后抵达的是……');
      await chara_talk.say_and_wait('哈啊、哈啊，我们……走了很远呢。');
      await chara_talk.say_and_wait(
        `啊，${callname}……那个被浪打到沙滩上的东西是……`,
      );
      await chara_talk.say_and_wait('藻类的块状物，吗。');
      await era.printAndWait(
        '那里的，是吸收了大量海里的污水后，打结成一块的植物残骸……',
      );
      await chara_talk.say_and_wait(
        '虽然外观不是很讨喜……但这是用来……代替球藻的意思吗？',
      );
      await era.printAndWait(
        '或许这就是朋友能做到的极限了吧，看来也并非是万能的。',
      );
      await era.printAndWait('也许是类似于会尽力帮忙的守护灵吧。');
      await chara_talk.say_and_wait('朋友总是会像这样，引导我笔直地走向幸福。');
      await chara_talk.say_and_wait(
        '一直在我身边，帮助着我……是非常重要的……‘朋友’……',
      );
      await era.printAndWait(
        '曼城茶座能有今天，或许都是这位守护灵的功劳也不一定。',
      );
      await chara_talk.say_and_wait(`……啊，${callname}你看。海上有一座小岛……`);
      await era.printAndWait(
        '你望向远处的海上……的确有一座小岛。但既没有通往岛上的桥和船，也不是游泳能到达的距离。',
      );
      await chara_talk.say_and_wait(
        '我有点想要去看看呢……想必…会是个安静又美丽的地方吧。',
      );
      await era.printAndWait('但要是真想去到那座岛上的话……');
      await era.printAndWait('——碰、碰、碰！');
      await era.printAndWait(
        '没来由地，你的背上被连续戳了几下……！像是在告诉说“不要犹豫，去吧”。',
      );
      await chara_talk.say_and_wait(
        '啊，“朋友”……在跟我招手……在海的另一边招手说‘来这里’……',
      );
      await era.printAndWait('朋友，对曼城茶座来说像是守护灵般的存在。');
      await era.printAndWait(
        `但却让人搞不清楚究竟有没有心要守护${chara_talk.sex}。`,
      );
      era.println();
      get_attr_and_print_in_event(25, [0, 0, 0, 20, 0], 0);
      sys_like_chara(25, 0, 25);
      await era.waitAnyKey();
    }
  } else if (edu_weeks === 95 + 18) {
    await print_event_name('别离', chara_talk); //todo 特殊结局
    await era.printAndWait(
      '在与曼城茶座进行讨论过后，你们正式决定前往国外远征——参加法国G1赛事凯旋门赏。',
    );
    await era.printAndWait(
      '曼城茶座今天将从这个机场出发，而你也将陪同，两个人一起面对这个挑战。',
    );
    await chara_talk.say_and_wait(
      `走吧，${callname}。为了到天空的另一端追上朋友……`,
    );
    era.printButton('「……先等一下。」', 1);
    await era.input();
    await era.printAndWait(
      '曼城茶座歪了歪脑袋看向你，不太清楚你在临行前想做什么。',
    );
    era.printButton(
      '「前往法国远征非同小可，在出发前有必要再次理清状况……」',
      1,
    );
    era.printButton(
      '「国外场地和国内完全不同，再加上环境变化和长时间旅途，有必要确定你的身体状况……」',
      2,
    );
    await era.input();
    await chara_talk.say_and_wait('事到如今，再考虑这些的话……我也……');
    era.printButton('「最后，暂时抛弃我作为训练员的身份……我不想你去。」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '……为什么？我们……明明约定好了，不是吗？……要一同为了追上朋友而走下去？',
    );
    era.printButton('「茶座……你的事项永远都是我的优先项……」', 1);
    era.printButton(
      '「为了实现茶座你的梦想，即使会随着这个梦想一同殒落我也心甘情愿……」',
      2,
    );
    era.printButton(
      '「但……这是一场无法回头的赌局。要是一旦失败，你的竞赛生涯也就……结束了。」',
      3,
    );
    await era.input();
    await era.printAndWait(
      '如果两人一路以来累积的努力，最终全都是为了换来“结束”的话……',
    );
    await era.printAndWait('如果为了追梦，曼城茶座必须失去其他的一切的话……');
    await era.printAndWait('那么曼城茶座的成功和将来，比所谓的梦想更为重要。');
    era.printButton('「所以，国外远征……还是取消吧。」', 1);
    await era.input();
    await chara_talk.say_and_wait('…………');
    await chara_talk.say_and_wait('这样啊……那么……');
    if (era.get('love:25') > 75)
      await chara_talk.say_and_wait('该说再见了……我的爱人……');
    else await chara_talk.say_and_wait(`该说再见了……${callname}……`);

    await chara_talk.say_and_wait(
      '我本以为……只有你会不一样……只有你正视了我的梦想……只有你走进了我的世界……',
    );
    await chara_talk.say_and_wait('可到头来……只是我的一厢情愿吗……');
    await chara_talk.say_and_wait('没事的……没关系。接下来……我一个人也可以……');
    await chara_talk.say_and_wait('没事的……没关系。只是回到原本的状态而已……');
    await chara_talk.say_and_wait('我一定会追上朋友的。所以——');
    await chara_talk.say_and_wait('……再见。');
    await era.printAndWait(
      '毫不留情地作出告别，留下背影转身而去。曼城茶座用含血的话语打算切断你们之间的关系——不，不只是话语含血。',
    );
    await era.printAndWait(
      `不知何时起，曼城茶座的脚趾渗出了血，${chara_talk.sex}伸出手的手指也渗着血。`,
    );
    await chara_talk.say_and_wait('为什么动不了……我……的脚……');
    await chara_talk.say_and_wait('……为什么？明明我……非去不可的……');
    await chara_talk.say_and_wait('不去的话，朋友会……');
    await chara_talk.say_and_wait('朋友会……消失的……');
    await chara_talk.say_and_wait('就算动不了，我也……！！');
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      await tachyon_talk.say_and_wait(
        '真是难看啊，茶座君。你就这么想参加凯旋门赏吗？',
      );
      await chara_talk.say_and_wait('……！？');
      era.printButton('「速子！？你怎么会在这？」', 1);
      await era.input();
      await era.printAndWait(
        '爱丽速子不知为何偷偷跟随来到了机场，在旁观你们的对话后，选择了加入现场。',
      );
      await era.printAndWait(
        `你冲上前去，阻止了曼城茶座的强行移动，一只手穿过腋下，另一只手搂起双腿，将${chara_talk.sex}公主抱了起来。`,
      );
      await tachyon_talk.say_and_wait(
        '什么叫‘我怎么会在这’啊，关心自己的实验对象的动向，这不是理所当然的吗？',
      );
      await chara_talk.say_and_wait('……你明明什么都不懂……却一直非要横插一脚……');
      await era.printAndWait(
        '曼城茶座在你怀中稍作挣扎后便放弃，然后对着爱丽速子挤出一句话来。',
      );
      await tachyon_talk.say_and_wait(
        '都这副模样了还要强行参赛吗，所以才说你难看啊……',
      );
      await tachyon_talk.say_and_wait(
        '既然你无论如何都要参加凯旋门赏——那么我来替你参加如何？',
      );
      await chara_talk.say_and_wait('……你说，什么？');
      era.printButton('「你是认真的吗，速子？」', 1);
      await era.input();
      await era.printAndWait(
        `爱丽速子的发言把你跟怀中的曼城茶座都震惊到了，你们可从来没听${chara_talk.sex}说过这件事。`,
      );
      await tachyon_talk.say_and_wait(
        '科学家可从来不会做无谓的事情，参加凯旋门赏自有我的安排……哦，但是宝冢纪念我也是会参加的。',
      );
      await tachyon_talk.say_and_wait(
        '而且，我对你口中的朋友也一直很感兴趣。就由我来替你追上朋友，如何？',
      );
      await chara_talk.say_and_wait('为什么……朋友竟然，同意了……');
      await chara_talk.say_and_wait('而且身体的异样……也渐渐恢复了……');
      await chara_talk.say_and_wait('但是……但是我……今后、该怎么办……');
      await chara_talk.say_and_wait('呜、呜呜呜……呜呜呜……');
      await era.printAndWait(
        '抱着哭泣的曼城茶座，你们三人一同踏上了返回特雷森的路途。',
      );
      await era.printAndWait(
        '曼城茶座的国外远征在出发前一刻取消，下一个目标将改回国内的宝冢纪念。',
      );
      await era.printAndWait(
        '而爱丽速子，将在宝冢纪念结束后，前往法国参加凯旋门赏。',
      );
    } else {
      await era.printAndWait(
        `你冲上前去，阻止了曼城茶座的强行移动，一只手穿过腋下，另一只手搂起双腿，将${chara_talk.sex}公主抱了起来。`,
      );
      await era.printAndWait(
        `曼城茶座没有在你怀中挣扎，仿佛灵魂抽离了身体一般……过了许久，${chara_talk.sex}才重新有了反应。`,
      );
      await chara_talk.say_and_wait('看来……没有办法了……');
      await chara_talk.say_and_wait(`只能依${callname}所言……取消远征了……`);
      await chara_talk.say_and_wait('但是……但是我……今后、该怎么办……');
      await chara_talk.say_and_wait('呜、呜呜呜……呜呜呜……');
      await era.printAndWait(
        '抱着哭泣起来的曼城茶座，你踏上了返回特雷森的路途。',
      );
      await era.printAndWait(
        '曼城茶座的国外远征在出发前一刻取消，下一个目标将改回国内的宝冢纪念。',
      );
    }
    era.println();
    get_attr_and_print_in_event(25, [0, 10, 0, 0, 0], 0);
    sys_change_motivation(25, -1) && (await era.waitAnyKey());
  } else if (
    edu_weeks === 95 + 29 &&
    era.get('flag:当前位置') === location_enum.beach &&
    era.get('cflag:25:位置') === era.get('cflag:0:位置')
  ) {
    await print_event_name('夏季合宿（第三年）开始', chara_talk);
    await era.printAndWait('前往夏季合宿的大巴上。');
    await era.printAndWait(
      '在经过这次夏季合宿后等待曼城茶座的便是日本杯，尽管现在距离11月看似还很遥远，但若是掉以轻心就要处于劣势了，更别说还有未确定是否参加的有马纪念。',
    );
    await era.printAndWait('所以，这次夏季合宿的主要目标就是好好休养——');
    era.printButton('「——明白了吗，茶座？……茶座？」', 1);
    await era.input();
    await era.printAndWait(
      '坐在你身边的曼城茶座不知何时把头靠在了你的肩膀上，静静地睡着了，身体随着车辆的行驶微微晃动。',
    );
    await era.printAndWait(`轻轻调整坐姿，让${chara_talk.sex}睡得更舒服一些。`);
    await chara_talk.say_and_wait('………………呜嗯……');
    await era.printAndWait('真是可爱的睡相。');
    await era.printAndWait('你也萌生起了睡意，与曼城茶座相依睡去……');
    //todo 特殊结局
  } else if (edu_weeks === 47 + 48 || edu_weeks === 95 + 48) {
    await print_event_name('圣诞节', chara_talk);
    await chara_talk.say_and_wait('喂喂？是我哦？不是诈骗电话是本人哦？');
    await era.printAndWait('电话那头传来了熟悉的声音，正是优秀素质。');
    await chara_talk.say_and_wait(
      '那个啊，能麻烦你来公园一趟吗？就现在。……嗯，等会见！',
    );
    era.drawLine({ content: '⏰到了公园⏰' });
    await chara_talk.say_and_wait(
      `啊，来了啊，${era.get('callname:25:0')}！这边这边～`,
    );
    await era.printAndWait('大老远就能看见优秀素质朝着这边招手。');
    await era.printAndWait('今天是圣诞节的嘛');
    await chara_talk.say_and_wait(
      `嘛，也没有什么大事，只是 ${era.get(
        'callname:25:25',
      )} 看你好像没有什么安排的样子，就决定邀请你一起过圣诞节而已！`,
    );
    await chara_talk.say_and_wait('不行……吗？');
    await era.printAndWait(
      '得到了肯定的答复后，优秀素质再度展露笑颜，旋即从身后递出来一个礼物盒',
    );
    await chara_talk.say_and_wait(
      '这个！圣诞快乐！这是，我亲手织的围巾……虽然不是很熟练，花色也比较土气……',
    );
    await chara_talk.say_and_wait('但！如果不嫌弃的话，还请收下！');
    await era.printAndWait('盒中是一条编织精美的围巾，能看出来优秀素质的用心');
    await chara_talk.say_and_wait(
      '很喜欢吗？这、这样啊……不是因为照顾我的心情才这么说的吧？',
    );
    await era.printAndWait(
      '在解除优秀素质的不安后，二人一起度过了一个安宁详和的圣诞节……',
    );
    era.println();
    sys_like_chara(25, 0, 50) && (await era.waitAnyKey());
  } else {
    throw new Error('unsupported');
  }
};

handlers[event_hooks.week_end] = async () => {
  const chara_talk = get_chara_talk(25),
    edu_weeks = era.get('cflag:25:育成回合计时');
  if (
    edu_weeks === 47 + 32 &&
    era.get('cflag:25:位置') === era.get('cflag:0:位置')
  ) {
    await print_event_name('夏季合宿（第二年）结束', chara_talk);
    if (era.get('cflag:32:招募状态') === 1) {
      const tachyon_talk = get_chara_talk(32);
      await era.printAndWait('夏季合宿的全部日程结束了。');
      await chara_talk.say_and_wait(
        `${callname}……多亏了你，我的身体才能恢复得这么好……`,
      );
      await era.printAndWait(
        '一整个夏天的拼命护理得到了成功，曼城茶座的身体状况得到了显著改善。',
      );
      await tachyon_talk.say_and_wait('呀，豚鼠君。这个夏天和茶座的进展如何？');
      await era.printAndWait('曼城茶座的顾问，爱丽速子也凑了过来。');
      era.printButton('「……也算是了解到了一些。」', 1);
      await era.input();
      await era.printAndWait(
        '你与曼城茶座共享了在合宿中了解到的情报，以及有关朋友的事。',
      );
      await tachyon_talk.say_and_wait(
        '原来如此。虽说做了些意义不明的事情，但总体上还是挺有趣……不，对茶座有利的嘛。',
      );
      await tachyon_talk.say_and_wait(
        '也就是说——不不不，等一下，外压性，或者是自伤冲动。从各种各样的方向考虑的话……',
      );
      await era.printAndWait('在那之后，爱丽速子就沉浸在了思考的海洋中。');
      await era.printAndWait(
        '夏天已经过去，而在即将到来的秋天，想必曼城茶座也一定能开花结果。',
      );
    } else {
      await era.printAndWait('夏季合宿的全部日程结束了。');
      await chara_talk.say_and_wait(
        `${callname}……多亏了你，我的身体才能恢复得这么好……`,
      );
      await era.printAndWait(
        '一整个夏天的拼命护理得到了成功，曼城茶座的身体状况得到了显著改善。',
      );
      await era.printAndWait(
        '而在即将到来的秋天，想必曼城茶座也一定能开花结果。',
      );
    }
    era.println();
    get_attr_and_print_in_event(
      25,
      new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
      35,
    );
    sys_like_chara(25, 0, 20);
    sys_love_uma(25, 3);
    await era.waitAnyKey();
  } else if (
    edu_weeks === 95 + 32 &&
    era.get('cflag:25:位置') === era.get('cflag:0:位置')
  ) {
    await print_event_name('夏季合宿（第三年）结束', chara_talk);
    await era.printAndWait('为期两个月的夏季合宿结束了。');
    await era.printAndWait(
      '在这一整个夏天中并没有发生什么特别的事，你与曼城茶座每天一起在沙滩上训练，曼城茶座的身体状况得到了充分的调整。',
    );
    await chara_talk.say_and_wait('平平淡淡的夏季合宿……这样也不错呢……');
    await era.printAndWait(
      '在回特雷森的大巴上，曼城茶座看着窗外流逝的景色，发出了这样的感叹。',
    );
    era.printButton('「平淡的生活也不错啊……」', 1);
    await era.input();
    await era.printAndWait(
      `但赛${chara_talk.get_uma_sex_title()}的生涯是不可能一直平淡下去的。在回到特雷森后，你们便要开始紧张的日本杯备战工作了。`,
    );
    era.println();
    get_attr_and_print_in_event(
      25,
      new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
      35,
    );
    sys_like_chara(25, 0, 20);
    sys_love_uma(25, 3);
    await era.waitAnyKey();
  }
};
/*
handlers[
  event_hooks.school_atrium
] = require('#/event/edu/edu-events-25/school-atrium');

handlers[event_hooks.out_start] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  const chara_talk = get_chara_talk(25),
    edu_weeks = era.get('cflag:25:育成回合计时'),
    me = get_chara_talk(0);
  if (edu_weeks === 95 + 10) {
    const mcqueen_talk = get_chara_talk(13);
    const ryan_talk = get_chara_talk(27);
    await print_event_name('内恰 in 目白', chara_talk);

    await era.printAndWait('今天优秀素质不会出现。因为──');
    await era.printAndWait(
      '“有马纪念”后，优秀素质向目白麦昆与目白赖恩请教了实力如此坚强的原因。',
    );
    await era.printAndWait(
      `今天${chara_talk.sex}受到两位邀请，去学习坚强的原因了。──或许可以说是去目白家留学一天吧。`,
    );
    await era.printAndWait(
      `优秀素质个性很认真。${chara_talk.sex}一定会带着收获回来吧。${me.name} 这么相信着，决定默默等${chara_talk.sex}回来──`,
    );
    era.drawLine();
    await mcqueen_talk.say_and_wait(
      '──刚刚那杯大吉岭茶果然连香味都不一样。滋味相当丰富。',
    );
    await ryan_talk.say_and_wait(
      '据说从头到尾都是手工制茶呢！专家的技术果然值得信任。',
    );
    await chara_talk.say_and_wait('……请问──这是什么状况？为什么在喝茶？');
    await chara_talk.say_and_wait('我还以为我们会去训练赛道……');
    await mcqueen_talk.say_and_wait(
      '喝完后当然会去。不过品尝红茶也是例行公事的一部分。',
    );
    await chara_talk.say_and_wait('例行公事……？');
    await mcqueen_talk.say_and_wait('今天我们想让内恰同学看看我们平常的样子。');
    await ryan_talk.say_and_wait(
      '就是这样！不过时间也差不多了，我们去训练吧！',
    );
    await chara_talk.say_and_wait('啊，好、好的……！');
    era.drawLine();
    await mcqueen_talk.say_and_wait('呼……呼……呼……');
    await ryan_talk.say_and_wait('欢迎回来，麦昆！接下来要做什么？');
    await mcqueen_talk.say_and_wait('……当然是再跑一圈了。');
    await mcqueen_talk.say_and_wait(
      '跟刚刚比起来，第十圈的速度有点变慢了……对吧？',
    );
    await ryan_talk.say_and_wait('啊哈哈！好啊，就跑到你满意为止吧！');
    await mcqueen_talk.say_and_wait('是，我出发了！');
    await chara_talk.say_and_wait('呼……呼……呼啊……！');
    await ryan_talk.say_and_wait('哦，内恰，欢迎回来！麦昆正好刚起跑呢！');
    await chara_talk.say_and_wait(
      `我看到了……${mcqueen_talk.sex}还要继续跑吗……！？`,
    );
    await ryan_talk.say_and_wait(
      `与其说还要，应该说是还不满足？毕竟${mcqueen_talk.sex}说“想提升速度”嘛`,
    );
    await chara_talk.say_and_wait(
      `${mcqueen_talk.sex}的持久力明明都那么优秀了，竟然还想更加精进吗……`,
    );
    await ryan_talk.say_and_wait(
      `……我想麦昆${mcqueen_talk.sex}啊，无论再怎么强，都不会满足于目前的自己。`,
    );
    await ryan_talk.say_and_wait(
      `那孩子的目标就是如此高远。所以${mcqueen_talk.sex}才会一直努力不懈。`,
    );
    await ryan_talk.say_and_wait('一直看着那样的身影，会觉得自己也该加油呢。');
    await chara_talk.say_and_wait('……唔～～～～我也再去跑……！');
    await ryan_talk.say_and_wait('啊哈哈哈！真是不服输！路上小心哦──！');
    era.drawLine();
    await chara_talk.say_and_wait('──今天非常感谢两位！');
    await ryan_talk.say_and_wait('哎呀──结果害你这一整天都在陪我们训练了呢。');
    await chara_talk.say_and_wait('不，这样正好！');
    await chara_talk.say_and_wait('……我终于明白了。我过去真的都只想着自己呢──');
    await chara_talk.say_and_wait(
      '你们两位都好好地看着对方。互相认可对方的强劲，互相竞争。',
    );
    await chara_talk.say_and_wait('但是我……却只会妄想获得别人的那份坚强。');
    await chara_talk.say_and_wait(
      '我老是只看着自己不足的地方……从没想过自己有哪些才能。',
    );
    await mcqueen_talk.say_and_wait('……所以？');
    await chara_talk.say_and_wait(
      '我打算更认真地正视这些事。正视其他人……也正视自己。',
    );
    await ryan_talk.say_and_wait('嗯，很好！这一定会成为内恰变强的助力！');
    await chara_talk.say_and_wait('那个……最后可以再请教一件事吗？');
    await chara_talk.say_and_wait('为什么两位愿意帮我的忙呢？');
    await mcqueen_talk.say_and_wait('……因为我们有贵族义务啊。');
    await ryan_talk.say_and_wait('噗哈！你在掩饰害羞吗？');
    await ryan_talk.say_and_wait(
      '真正的原因呢，是想跟坚强的你对决，好让自己变得更强！',
    );
    await ryan_talk.say_and_wait('──因为我们也打算参加下一次的“宝冢纪念”嘛！');
    await chara_talk.say_and_wait('……唔！');
    await mcqueen_talk.say_and_wait(
      '呵呵，表情很棒呢。那么下次就在阪神再见啦。',
    );
    await chara_talk.say_and_wait('嗯……！');
    era.drawLine();
    await era.printAndWait(
      `隔天 ${me.name} 见到优秀素质时，${chara_talk.sex}脸上的表情看起来神清气爽。`,
    );
    await chara_talk.say_and_wait('我……想赢过那两人。──在“宝冢纪念”上！');
    era.println();
    get_attr_and_print_in_event(25, [0, 5, 0, 5, 0], 0);
    await era.waitAnyKey();
    return true;
  }
};
*/
handlers[event_hooks.out_church] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  const chara_talk = get_chara_talk(25),
    edu_weeks = era.get('cflag:25:育成回合计时');
  if (edu_weeks === 95 + 1) {
    await print_event_name('新年的抱负', chara_talk);

    await era.printAndWait('资深级，年初。');
    await era.printAndWait(
      '为了祈求曼城茶座今年能够得到成功，你们来到神社进行新年参拜。',
    );
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      await chara_talk.say_and_wait(
        `那个……速子同学最近怎么样……？${chara_talk.sex}之前说要恢复比赛了……`,
      );
      await era.printAndWait(
        `从菊花赏之后，爱丽速子就恢复了与你的训练。在有马纪念结束后，${chara_talk.sex}更是公开宣布了自己将要回归比赛的计划，而${chara_talk.sex}要参加的第一个比赛，正是曼城茶座会参加的天皇赏（春）。`,
      );
      era.printButton(`「${chara_talk.sex}……最近比较忙。」`, 1);
      await era.input();
      await era.printAndWait(
        '曼城茶座点了点头，随后便不再提起有关爱丽速子的事。',
      );
    }
    await chara_talk.say_and_wait(
      '今天只有我们……两个呢……朋友不知道为什么不见了……',
    );
    await era.printAndWait(
      '自从有马纪念后，曼城茶座的样子就变得有点怪……但也不会总是那副模样。',
    );
    await era.printAndWait(`尽管平常的${chara_talk.sex}十分文静——`);
    await era.printAndWait(
      '工作人员：「现场的各位，来做新春的祈福吧！无论是什么心愿，神明大人一定都会帮忙实现的哦！」',
    );
    await chara_talk.say_and_wait('……………………');
    await chara_talk.say_and_wait('这是骗人的。');
    await chara_talk.say_and_wait(
      '愿望根本不会被实现。这个地方，根本没有神明存在。',
    );
    await era.printAndWait(
      `——但……偶尔却会变成这样。是不是有什么触发开关导致了${chara_talk.sex}的转变呢？`,
    );
    await chara_talk.say_and_wait(
      `${callname}，往这边来……让我们去一个能实现所有愿望的城镇……`,
    );
    await era.printAndWait('***');
    await era.printAndWait(
      '随后，曼城茶座带你去了一个完全没有新年气氛的诡异城镇……',
    );
    await chara_talk.say_and_wait('这里……才是真正能实现愿望的地方……');
    await chara_talk.say_and_wait(
      `为了能够追上朋友……${callname}会为我许下什么愿望呢？`,
    );
    await chara_talk.say_and_wait('从这里面……选一个吧。');
    await era.printAndWait('地面的砂土开始慢慢移动，脚边浮现出一些文字。');
    await era.printAndWait(
      '尽管已经经历过不止一次的灵异事件，但这仍让你感到发抖。',
    );
    await era.printAndWait('从中，你所选择的是——');
    era.printButton('「星光的治疗」', 1);
    era.printButton('「全身的鳞片」', 2);
    era.printButton('「过往者的睿智」', 3);
    era.println();
    let ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait('治疗……的确……星星……一直在天上注视着我们……');
      await chara_talk.say_and_wait('若以不受限制的星光垄罩全身……');
      await chara_talk.say_and_wait(
        `谢谢你，${callname}。我感觉比较有活力了……`,
      );
      await chara_talk.say_and_wait(
        '我想，我能继续努力训练了。不再低着头……往前迈进……',
      );
      await era.printAndWait(
        '刚才那座城镇是幻觉吗……？一转眼，你们就又回到了普通的街道上。',
      );
      await era.printAndWait('无论如何，曼城茶座的脸上又再次散发着活力了。');
      era.println();
      const to_print = sys_change_attr_and_print(25, '体力', 500);
      if (to_print) {
        era.println();
        await era.printAndWait([
          chara_talk.get_colored_name(),
          ' 的 ',
          ...to_print,
        ]);
      }
      sys_like_chara(25, 0, 25);
      await era.waitAnyKey();
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        '全身的鳞片……宛如把头发……视网膜……和灵魂……全以鳞甲包覆一般……',
      );
      await chara_talk.say_and_wait('若能将我的存在加以增强。啊啊……');
      await era.printAndWait('——噗通。');
      await era.printAndWait(
        '耳边传来了幻听一般的水声，仿佛是沉入了漆黑的海洋，无边无际。',
      );
      await era.printAndWait(
        '水压温柔地包裹着你全身，你感觉似乎有什么生物在你身旁游动——它那冰冷、细腻的鳞片伴随着水流划过你耳畔，它那分叉的细舌试探性地吐出，撩动你的发丝……',
      );
      await era.printAndWait('…………');
      await era.printAndWait(
        '当你从恍惚中醒来时，你们就又回到了普通的街道上。',
      );
      await era.printAndWait('刚才的是梦吗，或者有是一次灵异事件？');
      await era.printAndWait(
        '看向身边精神饱满，似乎仍意犹未尽的茶座，或许许愿确实发挥了效果……',
      );
      era.println();
      get_attr_and_print_in_event(25, new Array(5).fill(10), 35);
      sys_like_chara(25, 0, 25);
      await era.waitAnyKey();
    } else {
      await chara_talk.say_and_wait('过往者的睿智……先人们的记忆……');
      await chara_talk.say_and_wait('若能从中窥探……纵使仅有一二……');
      await era.printAndWait('——陌生的记忆流淌进曼城茶座的脑中。');
      await era.printAndWait(
        '连是否曾经存在都未知的景色，以及当中的古老智慧也一并涌现，却马上又如同蜻蜓点水般转瞬即逝，最终所能记住的，也不过是皮毛。',
      );
      await era.printAndWait('但就算只是皮毛……');
      await chara_talk.say_and_wait(
        `${callname}，我似乎明白世上存在着的许多不同跑法了。我想更加地……`,
      );
      await chara_talk.say_and_wait(
        '将这些灵感……在之后的比赛中，逐一尝试看看……',
      );
      await era.printAndWait(
        '你并不清楚到底发生了什么，而你在一旁所见的，只不过是曼城茶座闭上眼又睁开眼的一瞬后，你们就又回到了普通的街道上。',
      );
      era.println();
      get_attr_and_print_in_event(25, [0, 0, 0, 0, 0], 35);
      sys_like_chara(25, 0, 25);
      await era.waitAnyKey();
    }
    return true;
  }
};

handlers[event_hooks.train] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.train, event_object);
    return;
  }
  //todo 训练事件会多次触发
  const edu_weeks = era.get('cflag:25:育成回合计时');
  if (edu_weeks === 1) {
    const tachyon_talk = get_chara_talk(32);
    await print_event_name('漆黑的猎犬', chara_talk);
    await era.printAndWait(
      '成功招募曼城茶座后，你与茶座相约来到训练场进行跑步测试。',
    );
    await era.printAndWait(
      `说起来，尽管当上了茶座的训练员，但这还是第一次亲眼看见${chara_talk.sex}的奔跑。虽说通过录像反复观看了几次${chara_talk.sex}的选拔赛，始终还是差了点什么。`,
    );
    await era.printAndWait(
      '连担当的选拔赛都没看过就进行招募的训练员，也算是特雷森第一人了吧……',
    );
    await era.printAndWait(
      '不远处，已经就位的曼城茶座朝你挥了挥手，你收起了思绪，专心观察起曼城茶座的动作。',
    );
    await era.printAndWait('哨响过后，曼城茶座从起跑位冲出。');
    era.printButton('「嗯……起步并不算很快，果然是适合追和差吗。」', 1);
    await era.input();
    await era.printAndWait(
      `给曼城茶座做出的要求是按照${
        chara_talk.sex
      }自己的节奏来跑，并想象其他${chara_talk.get_uma_sex_title()}在场的情况。`,
    );
    await era.printAndWait(
      '保持着自己的节奏，曼城茶座轻柔而缓和地迈开脚步，顺利度过了中盘，来到了最后的冲刺点。',
    );
    await era.printAndWait('——嘭。');
    await era.printAndWait('你的眼睛告诉了你应该听到的声音。');
    await era.printAndWait(
      '朝着终点，曼城茶座的身子向下一俯，随着脚下刹那飞溅出的泥土，如离弦的箭般直插前方。这非同一般的爆发力在瞬间便死死吸引住你的目光。',
    );
    await era.printAndWait(
      `仿佛是逐兔的猎犬、又像是饥渴的苍鹫，你无法将这样狂野的步伐与那个沉默清冷的${chara_talk.get_child_sex_title()}联系在一起。`,
    );
    await era.printAndWait('但……');
    await era.printAndWait('太美了。');
    await era.printAndWait(
      '看着那如漆黑的猎犬般撕裂终点线的身姿，你不由得这样想到。',
    );
    era.println();
    if (era.get('cflag:32:招募状态') === 1) {
      await tachyon_talk.say_and_wait('哟，豚鼠君。');
      await era.printAndWait(
        '熟悉的声音传来，你回头看去，爱丽速子正站在身后。',
      );
      await tachyon_talk.say_and_wait(
        '你的新担当就是茶座君吗？真是凑巧啊，哈哈哈。',
      );
      await tachyon_talk.say_and_wait(
        `茶座君的目的是追上无人能看见的假想朋友。嗯，一般人确实难以理解。而我呢，追求的则是赛${chara_talk.get_uma_sex_title()}的极限……更要超越极限，不止步于单纯的胜利。`,
      );
      await tachyon_talk.say_and_wait(
        '作为我们这样的怪人组合的训练员，你也真是难办啊。',
      );
      await chara_talk.say_and_wait('速子同学……你在做什么？');
      await era.printAndWait(
        '测试结束的曼城茶座回到了你身边，不太高兴地看着你身旁的爱丽速子。',
      );
      await tachyon_talk.say_and_wait(
        `哎呀，你看起来好像不是很高兴呢茶座君……但我们之间的交集肯定是会越来越深的，毕竟我们是同一个训练员手下的担当${chara_talk.get_uma_sex_title()}嘛，你说是吧？训·练·员·君？`,
      );
      await chara_talk.say_and_wait(
        `训练员君……速子同学也是你的担当吗？${callname}……`,
      );
      await era.printAndWait(
        `这下麻烦了，没想到${chara_talk.sex}们两人认识，而且貌似还不太对付的样子……`,
      );
      await tachyon_talk.say_and_wait(
        '拜拜啦，两位。今后我们可要多多彼此关照。而且我对你期望很高喔，茶座君。期待你——在与我不同的意义上。',
      );
      await era.printAndWait(
        '当你还在想着怎么向曼城茶座说明时，爱丽速子留下一句意义深长的话便离开了。',
      );
      era.printButton('「这家伙……真是……」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        `${callname}……暂时就别想速子同学的事了。现在的你，是我的训练员……对我们来说更重要的，是要追上朋友。就这么单纯……对吧？`,
      );
      await era.printAndWait(
        `没错，${
          chara_talk.sex
        }是曼城茶座，与其他赛${chara_talk.get_uma_sex_title()}无关。`,
      );
      await era.printAndWait('整理好思绪，你们开始了今天的训练。');
    }
    get_attr_and_print_in_event(25, [0, 0, 0, 0, 0], 120);
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 28) {
    await print_event_name('灵障', chara_talk);
    await chara_talk.say_and_wait(`${callname}……我今天……感觉身体很沉重……`);
    await era.printAndWait('正在训练的曼城茶座在你身边停下了脚步，缓缓说道。');
    await era.printAndWait(
      `“我的身体不太好”——以前${chara_talk.sex}曾这么对你说过，你一开始也只是简单的当作身体原因看待。`,
    );
    await era.printAndWait(
      `而在这之前也偶尔会发生这样的情况，你没太在意，吩咐${chara_talk.sex}去好好休息，别勉强自己后……`,
    );
    await era.printAndWait('——沙、沙沙沙……');
    await era.printAndWait(
      '地面的沙子突然发生了异变。在曼城茶座所经之处，留下了像是拖着重物走过的痕迹。',
    );
    await era.printAndWait(
      `你连忙喊住快要倒下的${chara_talk.sex}，将${chara_talk.sex}送去了医务室。`,
    );
    await era.printAndWait('***');
    await chara_talk.say_and_wait(
      '我的体重……从来没见过这么大的数字……到底发生了什么……',
    );
    await era.printAndWait(
      '在医务室进行了简单的检查，却没有发现任何问题，直到曼城茶座尝试性地走上体重秤后，那触目惊心的数字着实把你吓到了。',
    );
    await era.printAndWait(
      `${chara_talk.sex}的体重大幅增加，远远超过了正常情况下的波动范围。`,
    );
    await chara_talk.say_and_wait(
      '而且今天……觉得身体像纸一样……好像全身都干巴巴的……呃呜！？',
    );
    await era.printAndWait('——叽叽、啪嚓！');
    await era.printAndWait(
      '曼城茶座话音未落，伴随着微小的碎裂声，剧烈的痛苦爬上了曼城茶座略显苍白的面孔。',
    );
    era.printButton('「怎么了！？」', 1);
    await era.input();
    await era.printAndWait(
      `扶稳突然站不住的茶座，却顿时感觉${chara_talk.sex}的身体变轻了，但暂时管不了这点了。你的视线向下看去，难道是${chara_talk.sex}的脚出问题了！？`,
    );
    await chara_talk.say_and_wait('我的……脚指甲……');
    await era.printAndWait(
      `急忙脱下${chara_talk.sex}的鞋子，${chara_talk.sex}干巴巴的趾甲上出现了裂痕，像是开了个小小的洞。`,
    );
    await chara_talk.say_and_wait(
      '今天的体重，突然变得好重，现在又突然感觉好轻……难怪我一直感觉没有力气……脚趾甲会裂开，应该也是太干了的关系……',
    );
    era.printButton('「修剪趾甲并杀菌消毒吧。」', 1);
    await era.input();
    await chara_talk.say_and_wait('咦……还有……这种方法吗？');
    await era.printAndWait(
      `用专用的治疗药剂和补强剂将${chara_talk.sex}的趾甲固定。虽然状况看起来还没糟到需要中止训练和比赛，但是长期这样下去的话……`,
    );
    await chara_talk.say_and_wait(
      `${callname}，你真的很厉害……我已经感觉好上一些了……`,
    );
    await era.printAndWait(
      `话说回来，${chara_talk.sex}这样激烈的体重变化，莫非是……`,
    );
    era.printButton('「……平常的食欲怎么样？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '食欲……有时候的确会感觉特别旺盛。好像我的胃变成了无底洞一样……无论我怎么吃，吃再多都得不到饱足感……所以只能放空脑袋地一直吃……相对地，有时候也会有完全吃不下。就算我想要硬塞点东西到嘴里，手也完全不听使唤……',
    );
    await chara_talk.say_and_wait('但那些……并不是属于我自己的意志……');
    await era.printAndWait(
      `原来${chara_talk.sex}一直都忍受着这样的异常吗？遭受着这番磨难，却仍愿意主动涉险帮助自己……`,
    );
    era.printButton('「下次身体出现异状的时候，记得拍照给我。」', 1);
    await era.input();
    await chara_talk.say_and_wait('拍照，我明白了，我会记得拍照给你……可是……');
    await era.printAndWait('***');
    await era.printAndWait('几天后，曼城茶座传来了照片。');
    await era.printAndWait(
      `但……完全看不出${chara_talk.sex}拍了什么，照片上只映照着一些奇怪的图案。`,
    );
    await chara_talk.say_and_wait(
      '怎么拍都会变成那样，所以我也没办法拍受伤的部位给你看……从以前起，就是如此，大概注定无解了……我的身体恐怕……会一直这样……',
    );
    era.printButton('「你只要记得告诉我就好！」', 1);
    await era.input();
    await chara_talk.say_and_wait('告诉你……？每一次，都要吗？');
    era.printButton('「嗯，我来负责治疗！」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      `谢谢你，${callname}……有你在……感觉，稍微安心了。`,
    );
    await era.printAndWait(
      '之后，你活用毕生所学的知识，加上随时做好万全的准备，总算让曼城茶座可以过上普通的生活。但是……这根本超出了“身体不太好”的等级。',
    );
    await era.printAndWait('果然是灵异事件吗……');
    await era.printAndWait('想到这里，你不禁对未来感到一丝担忧。');
    sys_change_motivation(25, -1);
    sys_like_chara(25, 0, 25);
    sys_love_uma(25, 3);
    get_attr_and_print_in_event(25, [0, 10, 0, 0, 0]);
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 47 + 17) {
    await print_event_name('放弃与否', chara_talk);
    await era.printAndWait(
      `对于曼城茶座来说，日本德比并不是实现${chara_talk.sex}目标的必选项。`,
    );
    await era.printAndWait(
      `——话虽如此，一生一次的德比，对${chara_talk.sex}来说依旧是充满诱惑的。`,
    );
    await era.printAndWait(
      '为了测试曼城茶座到底能否参加日本德比，你们来到了训练场上。',
    );
    await chara_talk.say_and_wait(`呼、呼……${callname}，这个单圈时间的话……`);
    await chara_talk.say_and_wait(
      '德比……是不是就有胜算了？要是能赢的话……一定就能离朋友更近……',
    );
    era.printButton('「身体状况如何？」', 1);
    await era.input();
    await chara_talk.say_and_wait('……说不上很好……但我这样也不是一天两天的了……');
    await era.printAndWait('该不该让曼城茶座参加德比……坦白说很难下定论。');
    await era.printAndWait('身为训练员的你，必须要及时做出选择。');
    era.printButton('「……为了身体着想，放弃吧。」', 1);
    era.printButton('「……机会只有一次。」', 2);
    era.println();
    let ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait('要……放弃吗……我明白了……');
      await era.printAndWait(
        '不能参加一生一次的德比固然令人遗憾……希望这样的选择能在秋天给曼城茶座带来顺风的局势吧。',
      );
      //todo 避战
    } else {
      await chara_talk.say_and_wait(
        '我明白了……！我会加油的！一定，要把德比拿下……',
      );
      await era.printAndWait(
        '曼城茶座充满了斗志……但希望这样的选择不会给秋天的比赛留下隐患。',
      );
    }
    era.println();
    sys_like_chara(25, 0, 20);
    get_attr_and_print_in_event(25, [0, 10, 0, 0, 0]);
    await era.waitAnyKey();
    return true;
  }
};
/*
handlers[event_hooks.out_shopping] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.out_shopping, event_object);
    return;
  }
  const chara_talk = get_chara_talk(25),
    edu_event_marks = new EduEventMarks(25),
    me = get_chara_talk(0);
  if (edu_event_marks.get('hard_work_trainer') === 1) {
    edu_event_marks.add('hard_work_trainer');
    await print_event_name(
      `${era.get('callname:25:25')} 与辛苦的训练员`,
      chara_talk.color,
    );

    await era.printAndWait('连续好几天行程满满的工作终于告一段落……');
    await era.printAndWait(
      `${me.name} 想买点美味的食物来犒赏自己，拖着沉重的身体前往商店街时──`,
    );
    await chara_talk.say_and_wait('不好意思，那位训练员，请稍等一下！');
    era.printButton('「内恰……？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '唉──我是有听说你工作很忙啦，但没想到你埋头苦干到累成这样啊。',
    );
    await chara_talk.say_and_wait(
      `真拿你没办法，让 ${era.get(
        'callname:25:25',
      )} 招待你一顿吧。快点，过来这里。`,
    );
    await chara_talk.say_and_wait(
      '现在还在开店准备中，不会有客人来。你就坐在最里面的卡拉OK桌吧。',
    );
    await chara_talk.say_and_wait(
      `这间店的老板娘我认识。跟她说明缘由后，她说可以借我用。`,
    );
    await era.printAndWait(`优秀素质带 ${me.name} 来到某间店的角落`);
    await chara_talk.say_and_wait(
      `那么，${era.get(
        'callname:25:0',
      )} 想点些什么呢？什么都可以点哦？只要是我能做的的话`,
    );
    era.println();
    era.printButton('「随便什么都行，我好饿……」', 1);
    if (era.get('love:25') >= 75) {
      era.printButton('「内恰……」', 2);
    }
    let ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        '真是的……你等一下，我简单煮点东西。……虽然我不保证味道啦。',
      );
      await era.printAndWait(
        `几分钟后，优秀素质端了${chara_talk.sex}做的炒饭来给 ${me.name}。`,
      );
      era.printButton('「量这么多，没问题吗？」', 1);
      await era.input();
      await chara_talk.say_and_wait('反正老板娘也跟我说“尽情招待他吧”了嘛。');
      await chara_talk.say_and_wait('来吧来吧，趁热快点吃吧。');
      await era.printAndWait(
        `端上来的炒饭外观跟味道都很有模有样，好吃到让 ${me.name} 的筷子……不，是让 ${me.name} 的汤匙停不下来。`,
      );
      await chara_talk.say_and_wait(
        '你太夸张了啦。我只是从小就帮妈妈的忙，所以才会煮啦。',
      );
      await chara_talk.say_and_wait('……呃，你吃得好快！已经吃完了吗！？');
      era.printButton('「因为很好吃，不知不觉就吃完了」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '没关系没关系，你刚刚真的很饿对吧？我去整理厨房，把盘子给我吧。',
      );
      await era.printAndWait(
        `${me.name}目送着优秀素质的背影看${chara_talk.sex}走远。`,
      );
      await era.printAndWait(
        '不知是否因为刚吃饱，突然感到一阵困意，意识也逐渐远去──',
      );
      await chara_talk.say_and_wait('……啦……啦啦……♪');
      await chara_talk.say_and_wait('呜哇！我该不会吵醒你了吧？');
      era.printButton('「……那首歌是？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '其实我也不太清楚，是以前妈妈在柜台忙时常唱的歌。',
      );
      await chara_talk.say_and_wait(
        '我回想起以前的事情，就忍不住哼了起来……抱歉咯。',
      );
      era.printButton('「我反倒想继续听下去呢」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        `你又来了～不用对 ${era.get('callname:25:25')} 说这种客套话啦。`,
      );
      era.printButton(
        '「但我是真的喜欢内恰的歌声，有这副歌喉，演唱会也没问题了呢！」',
        1,
      );
      await era.input();
      await chara_talk.say_and_wait('哼、哼～是吗？训练员果然品味特殊呢。');
      await chara_talk.say_and_wait(
        '……不过，你不是说“好听”倒是让我安心了。“喜欢”这个词真是方便呢。',
      );
      await chara_talk.say_and_wait(
        '因为这样就不会被拿去跟谁比较，害谁失望，自己也不会对不符合期待的自己失望了。',
      );
      await chara_talk.say_and_wait('啊哈哈。真抱歉，我说话这么不可爱。');
      era.printButton('「我也喜欢这样的内恰哦」', 1);
      await era.input();
      await chara_talk.say_and_wait('笨……笨蛋！');
      await chara_talk.say_and_wait('那种话要是说太多次，可是会失去意义的哦？');
      await era.printAndWait('店家「你借用完了吗，内恰？」');
      await chara_talk.say_and_wait('老板娘，谢谢你啊。真的帮了大忙呢。');
      await era.printAndWait(
        '店家「旁边这位就是传闻中的训练员对吧？我常听内恰提起你──」',
      );
      await chara_talk.say_and_wait(
        '真是的──！不用说那些啦！我们走吧，训练员！',
      );
      era.printButton('「传闻……？」', 1);
      await era.input();
      await chara_talk.say_and_wait('我、们、走、吧！');
      await era.printAndWait(
        `就这样，在老板娘温暖的眼光目送下、${me.name}和优秀素质离开了店里。`,
      );
      era.println();
      sys_like_chara(25, 0, 50) && (await era.waitAnyKey());
    } else {
      await chara_talk.say_and_wait('诶……诶？！我吗？');
      await era.printAndWait(
        '听到回答后，优秀素质惊讶的脸庞上迅速染上了一丝绯红',
      );
      await chara_talk.say_and_wait(
        '虽然是说过不会有客人来……但这里再怎么说也是别人的店里耶……',
      );
      era.printButton('「内恰不是说什么都可以吗？」', 1);
      await era.input();
      await chara_talk.say_and_wait('咕……虽然是这样……但是……');
      await chara_talk.say_and_wait(
        '呜……我知道了……成年人的压力和疲劳通过这种事，能得到有效释放对吧……',
      );
      await era.printAndWait(
        `优秀素质咬了咬嘴唇，像是下定了什么决心一般，走到瘫坐在沙发上的 ${me.name} 面前，然后将娇软的躯体整个俯趴在 ${me.name} 身上，并在耳边低语到：`,
      );
      await chara_talk.say_and_wait(
        '太激烈的可不行哦……衣服和房间清理起来会很麻烦的……',
      );
      await chara_talk.say_and_wait('还有，会被阿姨发现的……');
      await era.printAndWait(
        `当然，至于 ${me.name} 听没听进去，那就是另外一回事了……`,
      );
      sys_change_lust(0, lust_from_palam);
      sys_change_lust(25, lust_from_palam);
      await quick_into_sex(25);
    }
  } else if (edu_event_marks.get('grass_baseball') === 1) {
    edu_event_marks.add('grass_baseball');
    await print_event_name('用草地棒球声援！', chara_talk);

    await chara_talk.say_and_wait('会场是这里吗？哦～确实聚集着人潮呢～');
    await chara_talk.say_and_wait(
      '不过，你竟然会答应帮忙打草地棒球……明明训练员的工作就够忙了。',
    );
    await era.printAndWait(
      `其实是前几天，商店街的人们邀请 ${me.name}，因此 ${me.name} 决定参加草地棒球。`,
    );
    era.printButton('「毕竟大家总是很支持你嘛」', 1);
    await era.input();
    await chara_talk.say_and_wait('唉，大家确实是对我很好啦……');
    await chara_talk.say_and_wait('……不过，唉……别拼命过头，弄伤自己喔～？');
    await chara_talk.say_and_wait('你平常就已经很拼命了……');
    await era.printAndWait('就这样，商店街草地棒球对抗赛终于拉开序幕。');
    era.drawLine();
    await era.printAndWait('两队互不相让，比分保持0比0，战况渐渐白热化。');
    await chara_talk.say_and_wait(
      '哇，战况越来越激烈了～……不过，训练员看起来精疲力尽耶。',
    );
    await chara_talk.say_and_wait(
      '不偏心地说，你已经很努力了，差不多该换人上场了吧。',
    );
    era.printButton('「我还能继续！……」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '唉，真热血。……啊，我懂了。有我的照料，你就会努力下去吧。',
    );
    await chara_talk.say_and_wait('我去拿喝的过来，请乖乖坐在这里喔～？');
    await chara_talk.say_and_wait('真是的……我看看，执行委员会的帐篷在……');
    await era.printAndWait(
      `商店街的大叔「哎呀～就差一点。虽然${me.sex}很努力，但迟迟没办法得分……」`,
    );
    await chara_talk.say_and_wait('喔，他们在聊训练员的事……？', true);
    await era.printAndWait(
      '商店街的阿姨「肯定很紧张吧。毕竟是来帮忙的，身边都是不认识的人……」',
    );
    await era.printAndWait(
      `商店街的大叔「嗯……有没有办法让${me.sex}打起精神呢？」`,
    );
    await chara_talk.say_and_wait('总觉得……听起来好熟悉的情况呢……', true);
    await era.printAndWait(
      '这番对话，让优秀素质不禁想起了自己在比赛时收到的大家的声援打气……',
    );
    await chara_talk.say_and_wait(
      '在背后推了我一把，促使我努力下去的人就是大家和训练员……',
      true,
    );
    await chara_talk.say_and_wait('不该光顾着担心，这次我要──', true);
    era.drawLine();
    await era.printAndWait(
      `终于来到九局下半。在只要打出一分就宣告结束的情况下，轮到 ${me.name} 上场打击。`,
    );
    await era.printAndWait(
      '眼前站在投手丘的大叔曾是闯进甲子园的板凳球员，球技一流。',
    );
    await era.printAndWait(
      `${me.name} 已经被逼得打出两好球，眼看就要到此为止时──`,
    );
    await chara_talk.say_and_wait('加油──！');
    era.printWholeImage(`${era.get('cstr:25:头像')}_应援_半身`, {
      width: 8,
      offset: 8,
    });
    await era.printAndWait(
      '回头一看，不知什么时候换上了啦啦队服的内恰正在观众席上',
    );
    await era.printAndWait(`竭尽全力地为 ${me.name} 声援着`);
    await chara_talk.say_and_wait('别输啊，训练员！再一球！打出去就赢了！');
    await chara_talk.say_and_wait('振作起来！振作！大家一起喊！');
    await era.printAndWait('众人「耶～！Go Fight Win！」');
    await chara_talk.say_and_wait('加、加油！训练员！');
    await era.printAndWait(
      `优秀素质害羞地大声为 ${me.name} 加油，还有${chara_talk.sex}身边的人也是。一定要回应他们的心意……！`,
    );
    era.printButton('「喝啊啊──！！」', 1);
    await era.input();
    await chara_talk.say_and_wait('上啊──！！');
    await era.printAndWait('铿──！');
    await chara_talk.say_and_wait(
      '好耶～！成功了！训练员好厉害！全垒打！是再见全垒打！',
    );
    era.drawLine();
    era.printButton('「谢谢你帮我加油！」', 1);
    era.printButton('「多亏有你为我加油！」', 2);
    if (era.get('love:25') >= 75) {
      era.printButton('「内恰～！谢谢你～！」', 3);
    }
    let ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        '唔……被这么热烈的目光盯着看，感觉好难为情……',
      );
      await chara_talk.say_and_wait(
        '……该道谢的人是我才对。谢谢你一直为我加油打气。',
      );
      await chara_talk.say_and_wait(
        '总之，今后也会继续加油的……啊～说了一点也不像我会说的话，真是的～！',
      );
      await era.printAndWait(
        `优秀素质虽然感到害羞，却发自内心地为 ${me.name} 加油。这一天 ${me.name} 留下了无可取代的宝贵回忆！`,
      );
      era.println();
      get_attr_and_print_in_event(25, [0, 20, 0, 0, 0], 20);
      sys_change_motivation(25, 1);
      await era.waitAnyKey();
      // TODO 无畏之心+1
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        `不不不，别那么说。${era.get(
          'callname:25:0',
        )} 已经很努力了，这是靠你自己的努力跟实力得来的。不过……`,
      );
      await era.printAndWait('优秀素质害羞地撇开视线');
      await chara_talk.say_and_wait(
        '帮你加油很有成就感。下次打棒球的时候，我再去加油好了……随便说的啦。',
      );
      await era.printAndWait(
        `${me.name} 感受到彼此之间深刻的情谊，真是美好的一天！`,
      );
      era.println();
      get_attr_and_print_in_event(25, [0, 20, 20, 0, 0], 20);
      await era.waitAnyKey();
      // TODO 无畏之心+1
    } else {
      await chara_talk.say_and_wait('呃，别喊那么大声～这样很引人注目的！');
      await era.printAndWait(`优秀素质涨红了脸颊，回应着 ${me.name} 的呼喊`);
      await chara_talk.say_and_wait('真是的～我要去换衣服了！');
      era.printButton('「换衣服的事可以晚一点吗？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '怎么了啦？这身衣服穿着很羞人啊，而且独占周围凉飕飕的……',
      );
      await era.printAndWait(
        `优秀素质抱怨着停下脚步，转过身来面对着 ${me.name}`,
      );
      era.printButton('「那个……这副打扮的内恰实在太可爱了……」', 1);
      await era.input();
      await chara_talk.say_and_wait('唔！哈？这样突然袭击很犯规耶……');
      await era.printAndWait('意料之外的话语让优秀素质一时间手足无措');
      era.printButton('「……性欲……有点压制不住了……」', 1);
      await era.input();
      await chara_talk.say_and_wait('……你你你你突然间又在说什么啊啊啊啊！');
      await era.printAndWait('连续的突袭让优秀素质失声大叫了出来，');
      await era.printAndWait('但突然意识到这样招来了商店街各位的瞩目后，');
      await era.printAndWait('连忙向四周陪笑，然后又转过头来');
      await era.printAndWait('以只有二人能听到的音量娇嗔到');
      await chara_talk.say_and_wait(
        `色鬼 ${era.get('callname:25:0')}！怎么能在这种地方说这种话啊！`,
      );
      era.printButton('「可是内恰的打扮实在太色了……」', 1);
      await era.input();
      await chara_talk.say_and_wait('呜喵喵喵喵！我知道了！不要再说了！');
      await era.printAndWait(
        `满面潮红的内恰拼命挥舞着双手阻止 ${me.name} 说下去`,
      );
      await chara_talk.say_and_wait(
        `咕……让 ${era.get('callname:25:0')} 兴奋成这样，也是我的错呢`,
      );
      await chara_talk.say_and_wait(
        '我会负起责任处理好的啦……但再怎么说也不能在这里做吧？',
      );
      era.printButton('「去更衣室吧」', 1);
      await era.input();
      await chara_talk.say_and_wait('那不是也很容易暴露嘛！');
      era.printButton('「那就拜托你叫小声点了」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        `那算什么嘛！等……${era.get('callname:25:0')}？！`,
      );
      await era.printAndWait(
        `${me.name} 不等优秀素质反对，就一把横抱起${chara_talk.sex}冲进了更衣室，反锁上了隔间。`,
      );
      await era.printAndWait('非常幸运似乎没有人看到这一幕');
      await era.printAndWait('而隔间内翻云覆雨的战斗即将打响……');
      sys_change_lust(0, lust_from_palam);
      sys_change_lust(25, lust_from_palam);
      // 拉拉队服
      await quick_into_sex(25);
    }
  } else {
    return false;
  }
  return true;
};
*/
handlers[event_hooks.back_school] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.back_school, event_object);
    return;
  }
  const chara_talk = get_chara_talk(25),
    edu_event_marks = new EduEventMarks(25);
  if (edu_event_marks.get('our_flavor') === 1) {
    edu_event_marks.add('our_flavor');
    await print_event_name('只属于我们的口味', chara_talk);
    await era.printAndWait('在曼城茶座一起外出后，回到特雷森的校门时——');
    await chara_talk.say_and_wait(`……${callname}。`);
    await chara_talk.say_and_wait('如果你愿意的话，等一下……要不要喝杯咖啡呢……');
    await chara_talk.say_and_wait(`我有些……想让${callname}你尝尝看的豆子……`);
    era.printButton('「当然。」', 1);
    await era.input();
    await chara_talk.say_and_wait('……谢谢。');
    await chara_talk.say_and_wait('那么，请你专注地看着我……跟着我走……');
    await era.printAndWait(
      `曼城茶座带你来到${chara_talk.sex}在学园里的一个私人空间。`,
    );
    await chara_talk.say_and_wait('我刚才提到的豆子，就是这个……');
    await era.printAndWait(
      '曼城茶座说道，并指着装在桌上玻璃罐里还没磨成粉的豆子。',
    );
    await chara_talk.say_and_wait(
      '这些……是从我的咖啡树采收的豆子……也是我自己烘炒的……',
    );
    era.printButton('「咖啡树……」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '一棵咖啡树……要长到能结出果实……最快……也需要、三年的时间。',
    );
    await chara_talk.say_and_wait('而且，收成的次数……一年只有一次……');
    await era.printAndWait(
      `所以，这是曼城茶座从自己栽种的咖啡树上采收，再由${chara_talk.sex}亲手烘炒过的咖啡豆……`,
    );
    await era.printAndWait('何等的珍贵……');
    era.printButton('「……这么珍贵的东西，真的要给我喝吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait(`……正因为珍贵，所以才要给${callname}品尝……`);
    await chara_talk.say_and_wait('那么…………你愿意，跟我一起喝吗？');
    era.printButton('「乐意至极！」', 1);
    await era.input();
    await chara_talk.say_and_wait('那我现在来煮……请稍等一下。');
    await era.printAndWait(
      '这个安静的空间里，只有曼城茶座冲煮咖啡的声音回响着……',
    );
    await chara_talk.say_and_wait('…………久等了。请用。');
    await era.printAndWait(
      `将${chara_talk.sex}冲煮的咖啡含在口中。刹那间，咖啡的风味和温度，仿佛渗透了肉体与心灵。`,
    );
    await era.printAndWait(
      '你和曼城茶座就这样面对面坐着，一起静静地享用咖啡。',
    );
    await era.printAndWait(
      '一杯咖啡下肚，当你还沉浸在余韵中时，曼城茶座轻轻触碰了你的手。',
    );
    await chara_talk.say_and_wait('…………味道，怎么样？');
    era.printButton('「……我第一次喝到这么好喝的咖啡。」', 1);
    era.printButton('「谢谢你让我度过一段美好的时光。」', 2);
    era.printButton('「有机会的话，我也想为你煮咖啡。」', 3);
    await era.input();
    await chara_talk.say_and_wait('……你说得太夸张了。');
    await chara_talk.say_and_wait('不过……我也有，同感。');
    await era.printAndWait('受到你的赞美影响，曼城茶座白皙的脸染上了羞红。');
    await era.printAndWait(
      `但这并不是你的阿谀奉承，这一杯咖啡投注的心血和时间抵过千言万语。也许你这辈子都无法忘记在这里与${chara_talk.sex}一同品尝到的味道了吧……`,
    );
    await chara_talk.say_and_wait('……应该是我要道谢才对。');
    await chara_talk.say_and_wait('……谢谢你，愿意成为我的训练员……');
    await chara_talk.say_and_wait('等到明年收成的时候……我们也像今天这样……');
    await chara_talk.say_and_wait('一起喝咖啡，好吗？');
    era.printButton('「不管是明年还是后年，我们都要一起喝。」', 1);
    await era.input();
    await chara_talk.say_and_wait('——！');
    await chara_talk.say_and_wait('……好的。');
    await chara_talk.say_and_wait('明年……后年……都要一起……');
    await era.printAndWait(
      `明年和${chara_talk.sex}一起喝的咖啡会是什么样的味道呢？这让你对不久后与曼城茶座的将来充满了想像。`,
    );
    await chara_talk.say_and_wait('……既然如此……');
    await chara_talk.say_and_wait('要不要一试试看……？……一起种咖啡树。');
    await chara_talk.say_and_wait(
      '虽然要重新种一棵的话……至少得等三年才能收成。',
    );
    era.printButton('「那我会为了那天好好努力的。」', 1);
    await era.input();
    await chara_talk.say_and_wait('……呵呵，不小心定下了一个有点遥远的约定呢。');
    await chara_talk.say_and_wait('不过……我也会期待的。');
    await era.printAndWait(
      `到时候与${chara_talk.sex}一同完成的咖啡，一定会比现在喝到的还要美味吧。`,
    );
    await era.printAndWait(
      '就这样，你们对那比夜晚更加香醇浓厚的未来充满了期待。',
    );
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(10), 0);
    sys_like_chara(25, 0, 25);
    sys_love_uma(25, 5);
    await era.waitAnyKey();
  } else {
    return false;
  }
  return true;
};

handlers[event_hooks.race_start] = async (hook, extra_flag) => {
  const chara_talk = get_chara_talk(25),
    edu_weeks = era.get('cflag:25:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('迎向出道战', chara_talk);
    await chara_talk.say_and_wait('不在……哪里都不在……到底去哪了……');
    await era.printAndWait(
      `今天是曼城茶座的出道战，多数赛${chara_talk.get_uma_sex_title()}都紧张得浑身发抖，但${
        chara_talk.sex
      }的心思却不在此。`,
    );
    await chara_talk.say_and_wait(
      `${callname}，在比赛开始前……我想……去找一下……可以吗？`,
    );
    era.printButton('「去吧，没问题的。」', 1);
    await era.input();
    await chara_talk.say_and_wait('不在这……');
    await chara_talk.say_and_wait('这里也没有……');
    await chara_talk.say_and_wait(
      '……找到了……！在终点板的更前方，就在那里等着我。',
    );
    await chara_talk.say_and_wait('看起来很开心的样子。我果然没有决定错……');
    era.printButton('「拼尽全力去追赶吧。」', 1);
    await era.input();
    await chara_talk.say_and_wait('……嗯。');
    await era.printAndWait(
      `曼城茶座，${chara_talk.sex}那持续至今、不为人知的追逐战，终于要到赛场上正式展开了。`,
    );
  } else if (extra_flag.race === race_enum.hoch_sho) {
    await print_event_name('迎向弥生赏', chara_talk);
    await era.printAndWait(
      '今天是弥生赏，但在选手通道内的曼城茶座却显得有些憔悴。',
    );
    era.printButton('「很紧张吗？」', 1);
    await era.input();
    await era.printAndWait('听到你的询问，曼城茶座摇了摇头。');
    if (era.get('cflag:32:招募状态') === 1)
      await chara_talk.say_and_wait(
        '昨晚到现在……我一直，都在思考如何战胜速子同学……',
      );
    else
      await chara_talk.say_and_wait(
        '昨晚到现在……我一直，都在思考如何战胜其他对手……',
      );
    await era.printAndWait(
      `也许曼城茶座的憔悴便是${chara_talk.sex}十分看重这场比赛的表现吧。`,
    );
    await era.printAndWait(
      `拍了拍${chara_talk.sex}的肩膀，作为训练员的你现在能做的只有一件事。`,
    );
    era.printButton('「加油。」', 1);
    await era.input();
    await era.printAndWait('对你的话语轻轻点头，曼城茶座走向了赛场。');
  } else if (extra_flag.race === race_enum.toky_yus) {
    await print_event_name('迎向日本德比', chara_talk);
    await era.printAndWait(
      '日本德比——为了这场一生一次的比赛，曼城茶座进行了许多严苛的训练。',
    );
    await era.printAndWait('而如今便到了收获的时刻。');
    await chara_talk.say_and_wait(`${callname}……我上了。`);
    await era.printAndWait(
      '选手通道内，你看着曼城茶座转头走向赛场的背影一言不发。',
    );
    await era.printAndWait(
      '没有什么想说的，也没有什么要说的，多余的话语早在训练的日日夜夜中倾诉殆尽。',
    );
    await era.printAndWait(
      `从现在开始就是${
        chara_talk.sex
      }独自一人与其他参赛${chara_talk.get_uma_sex_title()}——以及朋友的对决。`,
    );
  } else if (extra_flag.race === race_enum.stli_kin && edu_weeks < 95) {
    await print_event_name('迎向圣烈特纪念', chara_talk);
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      era.printButton('「茶座，感觉身体如何？」', 1);
      await era.input();
      await chara_talk.say_and_wait('感觉……身体的深处和之前不一样……');
      await chara_talk.say_and_wait(
        '没有奇妙的蠢蠢欲动……像是身体、确实属于我自己一样……',
      );
      await tachyon_talk.say_and_wait(
        '在我的营养指导下这是自然的，而且……跟春天的时候比起来体重增加了不少哦，茶座……',
      );
      await tachyon_talk.say_and_wait(
        '但这个状况……呵呵呵，和怪异无关呢。若单纯只是物理上累积所致……',
      );
      await era.printAndWait(
        '爱丽速子仔细地观察着曼城茶座身体的上上下下，想上手摸摸时被曼城茶座灵巧地躲开了。',
      );
      await era.printAndWait('看来终于算是克服了那段最莫名其妙的时期……');
      await chara_talk.say_and_wait(
        '如果照这个感觉跟状态去跑……如果可以稳稳拿下这场比赛的话……是不是菊花赏就会有胜算呢……？',
      );
      await tachyon_talk.say_and_wait(
        '呵呵，在实验开始前就讨论实验结果可是很没意义的啊，茶座。',
      );
      await tachyon_talk.say_and_wait(
        '直接在赛场上见真章吧，看看曼城茶座——你这张试纸究竟会出现什么样的颜色。',
      );
      await era.printAndWait(
        '希望那会是一个明亮的颜色……无论如何，今天都要必须要取得胜利。',
      );
    } else {
      await era.printAndWait(
        '从春天开始便翘首以盼的比赛，菊花赏的前哨战——圣烈特纪念，终于要开始了。',
      );
      era.printButton('「茶座，感觉身体如何？」', 1);
      await era.input();
      await chara_talk.say_and_wait('感觉……身体的深处和之前不一样……');
      await chara_talk.say_and_wait(
        '没有奇妙的蠢蠢欲动……像是身体、确实属于我自己一样……',
      );
      await era.printAndWait('看来终于算是克服了那段最莫名其妙的时期……');
      await chara_talk.say_and_wait(
        '如果照这个感觉跟状态去跑……如果可以稳稳拿下这场比赛的话……是不是菊花赏就会有胜算呢……？',
      );
      await era.printAndWait(
        '你没能做出回答。毕竟曼城茶座的身体状况还有太多未知的因素。',
      );
      era.printButton('「总之，先夺得这场比赛的胜利吧。」', 1);
      await era.input();
      await era.printAndWait('曼城茶座点点头，然后转身向赛场走去。');
    }
  } else if (extra_flag.race === race_enum.kiku_sho) {
    await print_event_name('迎向菊花赏', chara_talk);
    await chara_talk.say_and_wait('…………');
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      await tachyon_talk.say_and_wait('…………');
    }
    era.printButton('「…………」', 1);
    await era.input();
    await era.printAndWait(
      '选手通道内，在场的人都一言不发。因为彼此都清楚今天的比赛有多么重要。',
    );
    await era.printAndWait(
      '——菊花赏，一生一次的比赛，不同于之前任何比赛的3000米长距离赛道。',
    );
    await era.printAndWait(
      `最快的赛${chara_talk.get_uma_sex_title()}赢得皋月赏，最幸运的赛${chara_talk.get_uma_sex_title()}赢得日本德比，而最强的赛${chara_talk.get_uma_sex_title()}将赢得菊花赏。`,
    );
    await era.printAndWait('今天，曼城茶座真正的实力即将面临考验。');
    await chara_talk.say_and_wait(`${callname}，这还是第一次。`);
    await era.printAndWait('久久的沉默之后，曼城茶座说道。');
    await chara_talk.say_and_wait('第一次在比赛前……有种或许能追上朋友的预感……');
    era.printButton('「去超越吧！」', 1);
    await era.input();
    await chara_talk.say_and_wait('……是！');
    await era.printAndWait(
      `曼城茶座难得露出了开朗的笑容。这场比赛无论结果如何都将成为曼城茶座赛场人生的转折……现在能做的，也就只有在一旁为${chara_talk.sex}祈祷了。`,
    );
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 95) {
    await print_event_name('迎向有马纪念·第二年', chara_talk);
    await era.printAndWait('有马纪念。');
    await era.printAndWait(
      `这是曼城茶座今年的最后一场比赛，同时也宣告了${chara_talk.sex}经典级的结束。`,
    );
    await era.printAndWait(
      `选手通道内，你扶着曼城茶座的双肩，正在对${chara_talk.sex}做着最后的嘱咐。`,
    );
    era.printButton('「一定要集中精神……让肾上腺素尽情分泌……」', 1);
    await era.input();
    await chara_talk.say_and_wait('……嗯。');
    await era.printAndWait('闭着眼睛，曼城茶座小声地回复道。');
    await era.printAndWait('待其重新睁开双眼后，已是无比的坚定。');
    await chara_talk.say_and_wait(`${callname}，我会赢的。`);
    await era.printAndWait(`${chara_talk.sex}的背影逐渐没入光芒。`);
  } else if (extra_flag.race === race_enum.tenn_spr) {
    await print_event_name('迎向天皇赏（春）', chara_talk);
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      await era.printAndWait('天皇赏（春）的比赛日。');
      await chara_talk.say_and_wait('我要赢……我要赢……我一定会赢……');
      await chara_talk.say_and_wait(
        '不管是谁……只要挡在我面前，挡在我追上朋友的路上，我都会……',
      );
      await era.printAndWait(
        `曼城茶座仿佛燃起了漆黑的火焰，${chara_talk.sex}对胜利的渴望已经是前所未有的了。`,
      );
      await tachyon_talk.say_and_wait('哟，茶座和豚鼠君。表情真吓人啊。');
      await era.printAndWait(
        '爱丽速子，你的另一个担当，同时也是这场比赛的参赛选手，从身后走出。',
      );
      await chara_talk.say_and_wait('速子同学……就算你参加了也别想能阻挠我……');
      await tachyon_talk.say_and_wait(
        '哈哈，阻挠你吗？……别在比赛开始前就觉得自己赢定了啊，曼城茶座。',
      );
      await era.printAndWait('针锋相对的两人，唯有在赛场上见真章了。');
    } else {
      await era.printAndWait('天皇赏（春）的比赛日。');
      await chara_talk.say_and_wait('我要赢……我要赢……我一定会赢……');
      await chara_talk.say_and_wait(
        '不管是谁……只要挡在我面前，挡在我追上朋友的路上，我都会……',
      );
      await era.printAndWait(
        `曼城茶座仿佛燃起了漆黑的火焰，${chara_talk.sex}对胜利的渴望已经是前所未有的了。`,
      );
      await era.printAndWait('你默默看着曼城茶座那异常严峻的表情。');
      await era.printAndWait(
        `如果可以的话……真想告诉${chara_talk.sex}不要去追朋友了——这种话当然是说不出口的，毕竟这是你和曼城茶座缔结契约时，与${chara_talk.sex}最初立下的约定。`,
      );
      await era.printAndWait(`所以今天……只能祈祷${chara_talk.sex}平安无事了。`);
    }
  } else if (extra_flag.race === race_enum.takz_kin && edu_weeks > 95) {
    await print_event_name('迎向宝冢纪念', chara_talk);
    await era.printAndWait(
      '虽然在机场那天发生的事让你和曼城茶座两人陷入了一段略微有点尴尬的冷战期，但由于互相坦白了内心真正的想法，在经过一定时间的沉淀后，你和曼城茶座的关系和好如初，甚至愈发深刻。',
    );
    await era.printAndWait(
      `${chara_talk.sex}逐渐从沮丧中振作，也比以前更常露出笑容，然后——`,
    );
    await era.printAndWait('宝冢纪念前的选手通道内。');
    await chara_talk.say_and_wait('宝冢纪念……这里……就是我的新起点……');
    await chara_talk.say_and_wait('尽管朋友不在……我也一定会——');
    await chara_talk.say_and_wait('——！？');
    era.printButton('「怎么了？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '朋友！就在通道出口那里……没有离开，在等着我！',
    );
    await era.printAndWait(
      '朋友……不是应该去了法国，在凯旋门赏上等待曼城茶座的挑战吗？',
    );
    await era.printAndWait(
      '不管怎么说，在看到重新出现的朋友后曼城茶座精神一振，或许在比赛中就能拿出更好的状态。',
    );
    await chara_talk.say_and_wait('我一定要赢……');
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      await tachyon_talk.say_and_wait('话可别说这么满啊，茶座君。');
      await era.printAndWait(
        `整备结束的爱丽速子身着${chara_talk.sex}标志性的白色决胜服，来到了选手通道。`,
      );
      await tachyon_talk.say_and_wait(
        '我会在宝冢纪念上超越你……然后，在凯旋门赏上超越你的朋友。',
      );
      await chara_talk.say_and_wait('……能做到的话，就尽管试试吧……！');
      await era.printAndWait(
        '两人之间弥漫着火药味。而这针锋相对的两人，即将在宝冢纪念迎来最后的对决。',
      );
    }
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks > 95) {
    await print_event_name('迎向日本杯', chara_talk);
    await era.printAndWait('日本杯当天，选手通道内。');
    await era.printAndWait('因意外而相遇的你们终于走到了这里。');
    await chara_talk.say_and_wait('…………');
    await era.printAndWait(
      '和你并肩走着的曼城茶座突然停下了脚步，与回头查看的你四目相对。',
    );
    era.printButton('「紧张了吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait('……并不是紧张，只是……');
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      await chara_talk.say_and_wait(
        `在看到速子同学的凯旋门赏后，我在想……我今天能跑出像${chara_talk.sex}那样精彩的比赛吗？`,
      );
    } else await chara_talk.say_and_wait('我今天……能跑出一场精彩的比赛吗？');
    await era.printAndWait(
      '从前一心只想着超越朋友、不顾外界一切的曼城茶座，在经历种种事件后已经得到了改变。',
    );
    era.printButton(
      '「去吧，拿出你最引以为豪的末脚，将你的身姿展示给全世界。」',
      1,
    );
    await era.input();
    if (era.get('love:25') > 75) {
      await chara_talk.say_and_wait(`${callname}……可以接一个吻吗？`);
      await era.printAndWait(
        '轻轻拨开曼城茶座额前的长发、微微低头，曼城茶座配合的踮起脚尖，吻上了你的嘴唇。（爱慕≥热恋）',
      );
      await era.printAndWait(
        '仿佛在商店街小巷的那天一样，曼城茶座的双手不自觉地绕上了你的颈后，在双唇的深处交换着各自的爱意。（爱慕≥热恋）',
      );
      await era.printAndWait(
        '良久，两人终于分开，相视一笑，随即奔向日本杯的赛场。（爱慕≥热恋）',
      );
    } else {
      await chara_talk.say_and_wait(`${callname}……能给我一个拥抱吗？`);
      await era.printAndWait(
        '敞开双手，曼城茶座向前一步抱上了你，两人都没有其他动作，只是静静地感受着对方的温度。',
      );
      await era.printAndWait('良久，两人松开了手，随即奔向日本杯的赛场。');
    }
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks > 95) {
    await print_event_name('迎向有马纪念', chara_talk);
    era.printButton('「……这就是最后了。」', 1);
    await era.input();
    await chara_talk.say_and_wait('……是啊，时间过得好快……');
    await era.printAndWait(
      '选手通道内，你正与曼城茶座做着有马纪念前最后的交流。',
    );
    await chara_talk.say_and_wait(`${callname}，麻烦一下……`);
    await era.printAndWait('说罢，曼城茶座抓起了你的手，按在了自己的胸口上。');
    await era.printAndWait(
      '曼城茶座有力的心跳透过柔软抵达手性，这一刻你充分感受到了，曼城茶座这一存在是如此的鲜活、如此的美妙。',
    );
    await chara_talk.say_and_wait('……好暖和……稍微感到安心了点……');
    await chara_talk.say_and_wait(
      `在这场有马纪念结束后……我们也要一直在一起，${callname}……`,
    );
    era.printButton('「不会分开的。」', 1);
    await era.input();
    await era.printAndWait(
      '得到你肯定的回复后，曼城茶座松开了你的手，微笑着离开了选手通道。',
    );
    await era.printAndWait(
      '怀抱着三年来与你的点点回忆，曼城茶座走向了最后的闸门。',
    );
  }
};

handlers[event_hooks.race_end] = async (hook, extra_flag) => {
  const chara_talk = get_chara_talk(25),
    edu_weeks = era.get('cflag:25:育成回合计时'),
    me = get_chara_talk(0);
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战结束后·海市蜃楼', chara_talk);
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}A：「哈、呼……！大家都辛苦了！是场很精彩的比赛呢！」`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}A：「那边那位……是叫做曼城茶座吧？你也辛苦了……」`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}A：「呃，咦……没在听吗？那个……」`,
    );
    await chara_talk.say_and_wait('…………');
    await era.printAndWait(
      `曼城茶座背对着其他赛${chara_talk.get_uma_sex_title()}，默默地望着远方。`,
    );
    await era.printAndWait('赶到选手通道的你在找到曼城茶座后，走上前去。');
    await chara_talk.say_and_wait(`啊，${callname}……`);
    era.printButton('「比赛结果如何？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '……我输了，朋友独自一个人跑在最前面，冲过了终点……跑得越来越远……',
    );
    await chara_talk.say_and_wait(
      '而且看起来很开心的样子，应该是因为能在宽广的地方奔跑吧。但同时……',
    );
    await chara_talk.say_and_wait(
      '差距……也是至今最大的一次……像是解开了什么束缚般，跑得非常快。',
    );
    await chara_talk.say_and_wait('……我想追上朋友。但……我该怎么做……');
    await era.printAndWait(
      `从曼城茶座的叙述来看，“朋友”和${chara_talk.sex}之间速度的差距似乎相当的大……`,
    );
    await era.printAndWait(
      '既然如此，就算仓促地拟定计划，大概也很难得到成效。这样的话——',
    );
    era.printButton('「暂且不定下赛程，一步步强化自己吧。」', 1);
    await era.input();
    await chara_talk.say_and_wait('一步步强化……意思是要花很长的时间吗……');
    await era.printAndWait(
      `你的建议让曼城茶座感到迟疑，从${chara_talk.sex}沉重的表情看来，脑海里正在进行着激烈的权衡吧。`,
    );
    await chara_talk.say_and_wait(
      '……我明白了。既然不能立刻就追上的话，再加上我的体质称不上很健壮……或许这样比较适合。',
    );
    await era.printAndWait('这样就算是达成了共识。');
    await era.printAndWait(
      `你向${chara_talk.sex}点了点头，并站到${chara_talk.sex}身边，同时发誓要与${chara_talk.sex}一起追逐相同目标。`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}A：「我说，那两个人是不是怪怪的啊……？一直盯着什么都没有的远处诶。」`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}B：「可能他们两个……都是怪人吧。还是不要靠太近比较好……」`,
    );
    await era.printAndWait(
      `偶然接触到另一个世界，并被曼城茶座拯救了的你，此刻决定试着去了解只有${chara_talk.sex}了解的世界……并且一步一步地，拿下好成绩。`,
    );
    era.println();
    extra_flag.relation_change = 15;
  } else if (extra_flag.race === race_enum.hoch_sho && extra_flag.rank === 1) {
    await print_event_name('弥生赏结束后·道标', chara_talk);
    const tachyon_talk = get_chara_talk(32);
    if (
      era.get('cflag:32:招募状态') === 1 &&
      sys_reg_race(32).curr === race_enum.hoch_sho
    ) {
      await era.printAndWait('比赛结束后，你马上赶到了选手通道内。');
      era.printButton('「茶座！」', 1);
      await era.input();
      await era.printAndWait(
        `听到你的呼喊后，还在喘着气的曼城茶座望向了你的方向，还没能从比赛的疲劳中恢复过来的${chara_talk.sex}脸色比平常还要略显苍白，汗水不断从额上流下。`,
      );
      await chara_talk.say_and_wait(
        `呼、呼……训练员、${me.get_adult_sex_title()}……咳咳、咳……`,
      );
      era.printButton('「没事吧！？」', 1);
      await era.input();
      await chara_talk.say_and_wait('没事的……只是稍微，有点跑得过头了……');
      await era.printAndWait(
        '这次弥生赏，曼城茶座的对手每一个都实力强劲，全程都捏着一把汗的你直到曼城茶座最终冲线时才松了一口气。',
      );
      await era.printAndWait('但……单纯的胜利并不是你们的目标。');
      era.printButton('「朋友怎么样？」', 1);
      await era.input();
      await chara_talk.say_and_wait('还是没能追上……但是，距离缩短了……！');
      await chara_talk.say_and_wait('只要继续这样参加比赛下去……总有一天会……');
      await era.printAndWait(
        '从曼城茶座一直以来的描述来看，朋友无疑是一个十分强的存在……追逐朋友这个目标，和让曼城茶座获得更好的成绩完美符合。',
      );
      await era.printAndWait(
        '从这点来看，让曼城茶座维持现状继续准备挑战经典三冠路线是最好的选择，但……',
      );
      await tachyon_talk.say_and_wait('你们在这里啊，豚鼠君，还有茶座。');
      await era.printAndWait(
        `虽然这次输给了曼城茶座，但是爱丽速子此刻却比虚弱的曼城茶座显得更加游刃有余，带着标志性的笑容，${chara_talk.sex}走向了你们两人。`,
      );
      await tachyon_talk.say_and_wait(
        '茶座，你这次——跑得很好，非常好！虽然不行，但很好！意料之外的成功和意料之内的失败是可以相抵的！',
      );
      await era.printAndWait(
        '爱丽速子独自笑了一阵子后，又望向了天空，似乎低声说了些什么。',
      );
      await tachyon_talk.say_and_wait(
        '速子——那是……移动得比光速还要快的假想粒子。',
      );
      await tachyon_talk.say_and_wait(
        '但纵使是假想，我也该让大家见识一下，狂热所带来的余光。',
      );
      await tachyon_talk.say_and_wait(
        '在皋月赏，尽情燃烧后，一定能诞生出耀眼的残骸。',
      );
      await tachyon_talk.say_and_wait(
        '那么，暂时就这样了。茶座君，期待你今后的表现。',
      );
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        `和往常一样，爱丽速子在突然出现后，说了些难懂的话，又自顾自地走了，留下看着${chara_talk.sex}远去的身影、陷入沉默的你和曼城茶座。`,
      );
      await chara_talk.say_and_wait(`${callname}……皋月赏……我要参加吗？`);
      await era.printAndWait('从速子的话中想起了什么，曼城茶座转头向你问到。');
      era.printButton('「今天的比赛，你应该很吃力吧？」', 1);
      await era.input();
      await chara_talk.say_and_wait('是的……有点，力不从心……');
      era.printButton('「那么，皋月赏……就暂时放弃吧。」', 1);
      await era.input();
      await era.printAndWait(
        `今天这场激烈的比赛，应该给${chara_talk.sex}瘦弱的身体带来很大的负担。虽说已经看清今后该挑战的路线，但要这么快挑战G1赛事对${chara_talk.sex}还是太勉强了。`,
      );
      await chara_talk.say_and_wait('那么……德比……');
      await era.printAndWait(
        `日本德比的确是一场你希望曼城茶座能拿下的比赛。但若真要以德比为下一个目标，那${chara_talk.sex}是否撑得过，将会成为一场豪赌……`,
      );
      await chara_talk.say_and_wait(
        `……抱歉，${callname}……都是因为我……这么没用的关系……`,
      );
      await chara_talk.say_and_wait(
        '我不想……利用你的温柔……而且……这么关键的一战……咳咳……',
      );
      await era.printAndWait(
        `轻拍曼城茶座的背部，让${chara_talk.sex}稍微缓一缓。`,
      );
      era.printButton('「挑战秋季的圣烈特纪念吧。」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '圣烈特纪念……菊花赏的前哨战吗……要隔那么久……',
      );
      await chara_talk.say_and_wait('可是……这样的话……至少德比还是……');
      era.printButton('「德比的话视情况再决定吧。」', 1);
      await era.input();
      await chara_talk.say_and_wait('视情况……好的，那就如果情况允许的话，再……');
      await era.printAndWait(
        '就这样，下一个目标定在了圣烈特纪念，日本德比则视情况允许再参加。',
      );
    } else {
      await era.printAndWait('比赛结束后，你马上赶到了选手通道内。');
      era.printButton('「茶座！」', 1);
      await era.input();
      await era.printAndWait(
        `听到你的呼喊后，还在喘着气的曼城茶座望向了你的方向，还没能从比赛的疲劳中恢复过来的${chara_talk.sex}脸色比平常还要略显苍白，汗水不断从额上流下。`,
      );
      await chara_talk.say_and_wait(
        `呼、呼……训练员、${me.get_adult_sex_title()}……咳咳、咳……`,
      );
      era.printButton('「没事吧！？」', 1);
      await era.input();
      await chara_talk.say_and_wait('没事的……只是稍微，有点跑得过头了……');
      await era.printAndWait(
        '这次弥生赏，曼城茶座的对手每一个都实力强劲，全程都捏着一把汗的你直到曼城茶座最终冲线时才松了一口气。',
      );
      await era.printAndWait('但……单纯的胜利并不是你们的目标。');
      era.printButton('「朋友怎么样？」', 1);
      await era.input();
      await chara_talk.say_and_wait('还是没能追上……但是，距离缩短了……！');
      await chara_talk.say_and_wait('只要继续这样参加比赛下去……总有一天会……');
      await era.printAndWait(
        '从曼城茶座一直以来的描述来看，朋友无疑是一个十分强的存在……追逐朋友这个目标，和让曼城茶座获得更好的成绩完美符合。',
      );
      await era.printAndWait(
        '从这点来看，让曼城茶座维持现状继续准备挑战经典三冠路线是最好的选择，但……',
      );
      era.printButton('「今天的比赛，你应该很吃力吧？」', 1);
      await era.input();
      await chara_talk.say_and_wait('是的……有点，力不从心……');
      era.printButton('「那么，皋月赏……就暂时放弃吧。」', 1);
      await era.input();
      await era.printAndWait(
        `今天这场激烈的比赛，应该给${chara_talk.sex}瘦弱的身体带来很大的负担。虽说已经看清今后该挑战的路线，但要这么快挑战G1赛事对${chara_talk.sex}还是太勉强了。`,
      );
      await chara_talk.say_and_wait('那么……德比……');
      await era.printAndWait(
        `日本德比的确是一场你希望曼城茶座能拿下的比赛。但若真要以德比为下一个目标，那${chara_talk.sex}是否撑得过，将会成为一场豪赌……`,
      );
      await chara_talk.say_and_wait(
        `……抱歉，${callname}……都是因为我……这么没用的关系……`,
      );
      await chara_talk.say_and_wait(
        '我不想……利用你的温柔……而且……这么关键的一战……咳咳……',
      );
      await era.printAndWait(
        `轻拍曼城茶座的背部，让${chara_talk.sex}稍微缓一缓。`,
      );
      era.printButton('「挑战秋季的圣烈特纪念吧。」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '圣烈特纪念……菊花赏的前哨战吗……要隔那么久……',
      );
      await chara_talk.say_and_wait('可是……这样的话……至少德比还是……');
      era.printButton('「德比的话视情况再决定吧。」', 1);
      await era.input();
      await chara_talk.say_and_wait('视情况……好的，那就如果情况允许的话，再……');
      await era.printAndWait(
        '就这样，下一个目标定在了圣烈特纪念，日本德比则视情况允许再参加。',
      );
    }
    era.println();
    get_attr_and_print_in_event(
      25,
      new Array(5).fill(0).map(() => (Math.random() > 0.2 ? 10 : 0)),
      35,
    );
    extra_flag.relation_change = 25;
    sys_love_uma(25, 3);
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank === 1) {
    await print_event_name('日本德比结束后·屹立', chara_talk);
    await era.printAndWait(
      '解说员：「曼城茶座称霸德比──！！不灭的摩天大楼，在此屹立！」',
    );
    await era.printAndWait(
      `解说员：「然而${chara_talk.sex}不要紧吗？看起来耗尽了体力，连脚步都无法走稳……但${chara_talk.sex}仍然为对${chara_talk.sex}怀抱梦想的人们实现了宿愿——！！」`,
    );
    await era.printAndWait('选手通道内，曼城茶座踉踉跄跄地走向你。');
    await chara_talk.say_and_wait(`训练员……${me.get_adult_sex_title()}……`);
    era.printButton('「你做得很好，茶座……」', 1);
    await era.input();
    await era.printAndWait(
      `曼城茶座倒在了你的怀中，精疲力尽的模样让你感到无比心疼，但${chara_talk.sex}还是成功拿下了胜利。`,
    );
    await chara_talk.say_and_wait('呼、哈……');
    era.printButton('「接下来就好好休息吧。」', 1);
    era.printButton('「训练强度也要适当降低。」', 2);
    await chara_talk.say_and_wait('好的……');
    await era.printAndWait(
      `曼城茶座取得了日本德比的优胜，长久以来的努力总算是得到了最好的结果。同时，在你竭尽全力地照护下，${chara_talk.sex}的身体恢复情况喜人，应该也有望在秋季取得好成绩……`,
    );
    era.println();
    const to_print = sys_change_attr_and_print(25, '体力', -250);
    if (to_print) {
      era.println();
      await era.printAndWait([
        chara_talk.get_colored_name(),
        ' 的 ',
        ...to_print,
      ]);
      get_attr_and_print_in_event(
        25,
        new Array(5).fill(0).map(() => (Math.random() > 0.8 ? 20 : 0)),
        45,
      );
      extra_flag.relation_change = 25;
      sys_love_uma(25, 3);
      await era.waitAnyKey();
    }
  } else if (extra_flag.race === race_enum.stli_kin && extra_flag.rank === 1) {
    await print_event_name('圣烈特纪念结束后·过渡', chara_talk);
    era.printButton('「辛苦了，茶座！」', 1);
    await era.input();
    await era.printAndWait(
      '和往常一样，你早早地来到了选手通道内来等候曼城茶座。',
    );
    await chara_talk.say_and_wait('哈、呼、哈……训练员。我成功了……');
    await chara_talk.say_and_wait('虽然过程并不轻松……但我的脚……还留有余力。');
    await era.printAndWait(
      `跑出优秀表现后的${chara_talk.sex}仍带有一丝虚弱。但身体方面，在经过夏天的锻炼后，似乎变得比之前健壮得多。`,
    );
    await era.printAndWait(
      '但绝不能就此而放松，因为一个月后，便是至关重要的——菊花赏。',
    );
    era.println();
  } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank === 1) {
    await print_event_name('菊花赏结束后·收获', chara_talk);
    await era.printAndWait(
      `解说员：「曼城、曼城茶座！${chara_talk.sex}势如破竹地超越众人，率先冲过了终点！」`,
    );
    await era.printAndWait('观众们：「喔哦哦哦哦哦哦哦！！！！！」');
    await era.printAndWait(
      `解说员：「${chara_talk.sex}那飞快的步伐……不，是惊异的步伐！令现场所有人都看得目瞪口呆……！」`,
    );
    await era.printAndWait(
      '菊花赏上，曼城茶座用前所未有的稳健步伐，抵达了终点。',
    );
    await era.printAndWait(
      '春天、夏天……这段时间日积月累的努力，终于在此刻开花结果了。',
    );
    await era.printAndWait(
      '曼城茶座露出了难得的兴奋表情，穿过选手通道，来到你身边。',
    );
    await chara_talk.say_and_wait(
      '训练员……！朋友……！刚才……就在我的眼前……！我从来没在比赛中距离那么近过……！',
    );
    era.printButton('「恭喜，那有看清楚脸吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '还没有……但今天跑完了全程，却一点都不觉得辛苦……',
    );
    await chara_talk.say_and_wait('这就是我……这就是现在的我吗……');
    await era.printAndWait(
      `${chara_talk.sex}的语气里充满了难以置信。而你也能从${chara_talk.sex}的话中看出，一直以来对曼城茶座的身体造成不良影响的怪异，应该是消失了。`,
    );
    await chara_talk.say_and_wait(`${callname}……接下来的目标是？`);
    await era.printAndWait('从兴奋中平复了过来，也是时候决定接下来的目标了。');
    era.printButton('「……有马纪念吧。」', 1);
    await era.input();
    await chara_talk.say_and_wait('有马纪念……那日本杯，要放弃掉吗？');
    await era.printAndWait('选择有马纪念，主要的原因是想让曼城茶座好好休息。');
    await era.printAndWait(
      `尽管${chara_talk.sex}现在的身体状况已经有了明显的改善，但高强度的比赛还是存在很大隐患。`,
    );
    await era.printAndWait(
      '除此之外，看过今天的比赛后，你可以看出曼城茶座应该更适合长距离的赛事。虽然日本杯和有马纪念只相差了100米……但有时却正是这看似很多的100米决定了胜负。',
    );
    await era.printAndWait(
      `在向曼城茶座作出解释后，${chara_talk.sex}没有反驳，而是向前一步，握住了你的手。`,
    );
    await chara_talk.say_and_wait(
      `我……相信训练员${me.get_adult_sex_title()}。因为有${callname}在……我才能有现在的成绩，能这么靠近朋友……`,
    );
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      await tachyon_talk.say_and_wait(
        '呵呵呵、哈哈哈！很好很好，太好了。茶座，你跑得太棒了！',
      );
      await era.printAndWait('爱丽速子此时才慢悠悠地从观众席赶到。');
      await tachyon_talk.say_and_wait(
        '完全和我预想的一样！不愧是我选中的Plan B！没有错吧，茶座！？',
      );
      await chara_talk.say_and_wait(
        '速子同学……我还是不能完全信任你……但还是感谢你对我的帮助。',
      );
      await era.printAndWait(
        `说完，曼城茶座拉着你的手扭头打算离开。在离开之际你回头看了你的另一个担当${chara_talk.get_uma_sex_title()}——爱丽速子，${
          chara_talk.sex
        }仍像往常一样，脸上挂着富有余裕的笑容。`,
      );
      await era.printAndWait(
        '只是，在你和曼城茶座都没有注意到的地方，爱丽速子露出了转瞬即逝的失落。',
      );
    }
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(6), 45);
    extra_flag.relation_change = 25;
    sys_love_uma(25, 3);
    await era.waitAnyKey();
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('有马纪念结束后·妖异', chara_talk);

    await era.printAndWait('解说员：「夺下今年有马纪念的是——曼城茶座！」');
    await era.printAndWait('观众们：「喔哦哦哦哦哦！！！！！」');
    await era.printAndWait(
      '曼城茶座即使面对资深级的对手，依旧展现出高水准的表现，拿下了有马纪念。然而……',
    );
    await chara_talk.say_and_wait('怎么会……距离，被拉开了……');
    await chara_talk.say_and_wait('比菊花赏的时候……距离更远……怎么会……');
    await era.printAndWait(
      `选手通道内，明明胜利了的曼城茶座却失落的靠在墙边——不，不能说是胜利了，因为${chara_talk.sex}再一次的输给了${chara_talk.sex}的朋友。`,
    );
    era.printButton('「茶座……」', 1);
    await era.input();
    await era.printAndWait(`你想安慰${chara_talk.sex}，却又不知该从何下手。`);
    await chara_talk.say_and_wait(
      `${callname}……朋友变得……更快了。比之前，还要快上许多……`,
    );
    await chara_talk.say_and_wait(
      '就像是……为了回应我变得更快，所以才认真了起来一样……',
    );
    await chara_talk.say_and_wait('怎么会……怎么会……');
    await chara_talk.say_and_wait('怎么会、怎么会、怎么……！！');
    await era.printAndWait('——啪嚓！');
    await chara_talk.say_and_wait('唔……！');
    await era.printAndWait(
      `难道说又！？你立刻上前扶住了曼城茶座，痛苦与泪水在同一时刻涌上了${chara_talk.sex}的面孔，就像是易碎的玻璃一样，令人心疼。`,
    );
    await era.printAndWait(
      `脱下${chara_talk.sex}的鞋袜，熟悉的趾甲开裂情况再次出现了。虽然${chara_talk.sex}的体重确实不再急遽增减，没想到却还是……`,
    );
    await era.printAndWait(
      '垄罩曼城茶座的阴影尚未消失。这到底是诅咒……亦或是某种存在……',
    );
    await chara_talk.say_and_wait('我一定，会拼命追上朋友！');
    await chara_talk.say_and_wait(
      '明年我一定会……我已经不再是过去那个软弱的自己了……',
    );
    await chara_talk.say_and_wait('……训练员，下一个目标是……？');
    await era.printAndWait(`还是先让${chara_talk.sex}冷静——唔！`);
    await era.printAndWait(
      '没能把话说出口，你突然感到一股……上腹部被人重殴般的冲击感。像是某种……非常强烈的意志……',
    );
    era.printButton('「…………天皇赏（春）。」', 1);
    await era.input();
    await chara_talk.say_and_wait('天皇赏（春）……吗。3200米的长距离比赛……');
    await chara_talk.say_and_wait('意思是……距离这么长的话就能追上朋友，吗？');
    era.printButton('「…………嗯。」', 1);
    await era.input();
    await era.printAndWait(
      '方针上没有问题。既然要决定下一个目标，就该瞄准春季的大型G1。而天皇赏（春）便是春季的首要赛事，同时也符合曼城茶座的长距离适性。',
    );
    await era.printAndWait('……但刚才那些话，真的是出自你自己的意志吗？');
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(10), 0);
    await era.waitAnyKey();
  } else if (extra_flag.race === race_enum.tenn_spr && extra_flag.rank === 1) {
    await print_event_name('天皇赏（春）结束后·彼岸', chara_talk);
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      await era.printAndWait('惊心动魄的一战。');
      await era.printAndWait(
        '这场全长3200米的天皇赏（春）最后以曼城茶座与爱丽速子在最终直线上的厮杀告终。',
      );
      await era.printAndWait(
        '爱丽速子那仿佛超越光速的身姿、曼城茶座那仿佛追猎般的狂野脚步，深深地震撼了在场所有人。',
      );
      await era.printAndWait('——但最后，还是曼城茶座更胜一筹。');
      await era.printAndWait(
        `在${chara_talk.sex}冲线的一刻，京都竞马场的欢呼声响彻云霄。`,
      );
      await era.printAndWait('选手通道内。');
      await era.printAndWait(
        '爱丽速子在比赛结束后就不知所踪，而曼城茶座仍同往常一般在等待你的到来。',
      );
      await chara_talk.say_and_wait(
        `呼、呼、呼……是我赢了，${callname}……在最后的直线那，拼尽全力，超越了速子同学。`,
      );
      await chara_talk.say_and_wait(
        '而且……我和朋友间的距离……又拉近一些了。……虽然还是没能追上。',
      );
      await era.printAndWait(
        '比赛过后，在比赛中全力释放的曼城茶座变回了往常的样子。',
      );
      era.printButton('「很完美的奔跑，恭喜你。」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '谢谢，但在能追上朋友之前，还远远不能说是完美……',
      );
      await chara_talk.say_and_wait(
        '训练员现在，该选定之后的比赛了对吧。关于下一个目标——',
      );
      await era.printAndWait(
        '接下来的目标……就一般而言，大多会选择春季的宝冢纪念，但让曼城茶座暂时休息也是一个不错的……',
      );
      await chara_talk.say_and_wait('——我想去远征法国。');
      await era.printAndWait('！？');
      await era.printAndWait(
        '一瞬间，你怀疑自己的耳朵听错了，曼城茶座的爆炸性发言直接把你的思维击碎。',
      );
      era.printButton('「法国！？凯旋门吗，你要去跑凯旋门！？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '……要更快、更强，只有去另一边……海洋另一边的法国。',
      );
      era.printButton('「………理由呢？又是因为朋友？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '嗯……朋友，快要离开了……一个人去了法国……所以我绝对……',
      );
      await chara_talk.say_and_wait(`${callname}……这个愿望，你会答应吧？`);
      await chara_talk.say_and_wait('因为朋友也要我过去。所以……');
      await era.printAndWait('——不对。（特殊结局路线增加）');
      await chara_talk.say_and_wait('追上朋友——这是我们之间重要的约定。');
      await chara_talk.say_and_wait(
        '我是不会放弃的……因为我们是为此，才签订的契约……',
      );
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        '无法反驳，这确实是你和曼城茶座之间契约关系的基石。',
      );
      await era.printAndWait(
        '你无法说服曼城茶座放弃远征。最后，你们决定先保留国内目标宝冢纪念，至于是否前往法国远征，则等到下个月中旬再做出决定。',
      );
    } else {
      //todo 特殊结局
      await era.printAndWait('惊心动魄的一战。');
      await era.printAndWait(
        `这场全长3200米的天皇赏（春）最后以曼城茶座在最终直线上仿佛要猎杀前列${chara_talk.get_uma_sex_title()}般的惊人末脚结束。在${
          chara_talk.sex
        }冲线的一刻，京都竞马场的欢呼声响彻云霄。`,
      );
      await era.printAndWait('选手通道内。');
      await chara_talk.say_and_wait(
        `呼、呼、呼……我赢了，${callname}……而且……和朋友间的距离……又拉近一些了。`,
      );
      await chara_talk.say_and_wait('……虽然还是没能追上。');
      await era.printAndWait(
        '比赛过后，在比赛中全力释放的曼城茶座变回了往常的样子。',
      );
      era.printButton('「很完美的奔跑，恭喜你。」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '谢谢，但在能追上朋友之前，还远远不能说是完美……',
      );
      await chara_talk.say_and_wait(
        '训练员现在，该选定之后的比赛了对吧。关于下一个目标——',
      );
      await era.printAndWait(
        '接下来的目标……就一般而言，大多会选择春季的宝冢纪念，但让曼城茶座暂时休息也是一个不错的……',
      );
      await chara_talk.say_and_wait('——我想去远征法国。');
      await era.printAndWait('！？');
      await era.printAndWait(
        '一瞬间，你怀疑自己的耳朵听错了，曼城茶座的爆炸性发言直接把你的思维击碎。',
      );
      era.printButton('「法国！？凯旋门吗，你要去跑凯旋门！？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '……要更快、更强，只有去另一边……海洋另一边的法国。',
      );
      era.printButton('「………理由呢？又是因为朋友？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '嗯……朋友，快要离开了……一个人去了法国……所以我绝对……',
      );
      await chara_talk.say_and_wait(`${callname}……这个愿望，你会答应吧？`);
      await chara_talk.say_and_wait('因为朋友也要我过去。所以……');
      await chara_talk.say_and_wait('追上朋友——这是我们之间重要的约定。');
      await chara_talk.say_and_wait(
        '我是不会放弃的……因为我们是为此，才签订的契约……',
      );
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        '无法反驳，这确实是你和曼城茶座之间契约关系的基石。',
      );
      await era.printAndWait(
        '你无法说服曼城茶座放弃远征。最后，你们决定先保留国内目标宝冢纪念，至于是否前往法国远征，则等到下个月中旬再做出决定。',
      );
    }
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(6), 45);
    extra_flag.relation_change = 25;
    sys_love_uma(25, 1);
    await era.waitAnyKey();
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('宝冢纪念结束后·代替之物', chara_talk);
    if (era.get('cflag:32:招募状态') === 1) {
      //todo plan B
      const tachyon_talk = get_chara_talk(32);
      await chara_talk.say_and_wait('呼、呼、呼……速子同学……好强……就差一点……');
      await chara_talk.say_and_wait(
        '甚至……感觉已经能碰到朋友的肩膀……但最后，还是我赢了。',
      );
      await era.printAndWait(
        '今年上半年的最后盛事——宝冢纪念，以曼城茶座的胜利告终。',
      );
      await era.printAndWait(
        '曼城茶座的身体相较过去已经改善了许多。在完成这样一场激烈的比赛后，只耗费了不久的时间便从全力冲线的虚脱中恢复过来。',
      );
      era.printButton('「你变强了，茶座。」', 1);
      await era.input();
      await era.printAndWait('曼城茶座确实变强了很多。');
      await era.printAndWait(
        `还记得两年半之前你与曼城茶座意外的相遇，那时的${
          chara_talk.sex
        }还是一个只会在夜晚的训练场独自追逐无形之物的孤僻${chara_talk.get_uma_sex_title()}。`,
      );
      await era.printAndWait('现在回头一看，已是走过了这么长的道路。');
      await era.printAndWait(
        '虽然没能前往国外远征，但还是希望能让曼城茶座的梦想延续的。',
      );
      await era.printAndWait('国外远征……');
      await chara_talk.say_and_wait(`${callname}，那我们的下个目标是……`);
      era.printButton('「日本杯，如何？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '日本杯……与凯旋门赏相同的2400米中距离比赛……',
      );
      await chara_talk.say_and_wait(
        `谢谢你，${callname}。那里……就相当于我们的法国了对吧……`,
      );
      await era.printAndWait(
        '作为无法实现的梦想的延续，11月的东京便是你们的巴黎。',
      );
      await era.printAndWait('那真正的巴黎呢？');
      await tachyon_talk.say_and_wait('是我输了啊，茶座。');
      await era.printAndWait(
        '爱丽速子走入了选手通道，坦然地承认了自己的失败。',
      );
      await tachyon_talk.say_and_wait(
        '你身上所存在的可能性，比我想象的还要庞大。',
      );
      await tachyon_talk.say_and_wait('到现在为止……Plan B也算是有成果了吧。');
      await chara_talk.say_and_wait('速子同学……谢谢你……');
      await tachyon_talk.say_and_wait(
        '那么，也该就此别过了，凯旋门赏……或许是我参加的最后一场比赛了。和你的比赛一直都很有趣，茶座君。',
      );
      await chara_talk.say_and_wait('……我也会去看你的比赛的。');
      await era.printAndWait(
        '爱丽速子只是摆了摆手，没有对曼城茶座的话做出正面回应。',
      );
      await era.printAndWait(
        '于是，曼城茶座的下一场目标比赛就决定是日本杯了。',
      );
      await era.printAndWait('而爱丽速子，也将在凯旋门迸发自己的光辉。');
    } else {
      await chara_talk.say_and_wait(
        '呼、呼、呼……更接近了……我离朋友……前所未有的近……',
      );
      await chara_talk.say_and_wait('甚至……感觉已经能碰到朋友的肩膀……');
      await era.printAndWait(
        '今年上半年的最后盛事——宝冢纪念，以曼城茶座的胜利告终。',
      );
      await era.printAndWait(
        '曼城茶座的身体相较过去已经改善了许多。在完成这样一场激烈的比赛后，只耗费了不久的时间便从全力冲线的虚脱中恢复过来。',
      );
      era.printButton('「你变强了，茶座。」', 1);
      await era.input();
      await era.printAndWait('曼城茶座确实变强了很多。');
      await era.printAndWait(
        `还记得两年半之前你与曼城茶座意外的相遇，那时的${
          chara_talk.sex
        }还是一个只会在夜晚的训练场独自追逐无形之物的孤僻${chara_talk.get_uma_sex_title()}。`,
      );
      await era.printAndWait('现在回头一看，已是走过了这么长的道路。');
      await era.printAndWait(
        '虽然没能前往国外远征，但还是希望能让曼城茶座的梦想延续的。',
      );
      await era.printAndWait('国外远征……');
      await chara_talk.say_and_wait(`${callname}，那我们的下个目标是……`);
      era.printButton('「日本杯，如何？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '日本杯……与凯旋门赏相同的2400米中距离比赛……',
      );
      await chara_talk.say_and_wait(
        `谢谢你，${callname}。那里……就相当于我们的法国了对吧……`,
      );
      await era.printAndWait(
        '作为无法实现的梦想的延续，11月的东京便是你们的巴黎。',
      );
      await era.printAndWait('于是，下一场目标竞赛就决定是日本杯了。');
    }
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(6), 45);
    extra_flag.relation_change = 25;
    sys_love_uma(25, 3);
    await era.waitAnyKey();
  } else if (
    extra_flag.race === race_enum.japa_cup &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日本杯结束后·胜负', chara_talk);
    await era.printAndWait('全世界关注日本杯的观众应该都会记住这一天。');
    await era.printAndWait(
      `最终直线上，那道漆黑的影子从队伍的后段奔袭向前，仿佛撕咬着背影般、以无法抵挡的力量与爆发力猎杀了前方每一个“猎物”，被${
        chara_talk.sex
      }超越的${chara_talk.get_uma_sex_title()}甚至因为惊吓而短暂失速。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}冲线时高速摄像机所捕捉到的模糊身影，使其后来获得了“漆黑的魅影”这样的称号。`,
    );
    await era.printAndWait('但这些都是后话。');
    await era.printAndWait(
      '此时，选手休息室内，日本杯的获胜者曼城茶座正在被你按着进行按摩。',
    );
    era.printButton('「今天太乱来了，要是受伤了该怎么办？」', 1);
    await era.input();
    await era.printAndWait(
      '尽管还是没能追上朋友，但曼城茶座在世界面前跑出了足以自豪的精彩比赛，代价则是在场下见到你后立刻就坚持不住，倒在了你怀里。',
    );
    await era.printAndWait(
      `万幸的是并没有受伤，只是耗尽体力后的肌肉虚脱。你在选手休息室内就地为${chara_talk.sex}做起了肌肉按摩。`,
    );
    await chara_talk.say_and_wait(`啊，好痛！……${callname}，请轻一点……`);
    await chara_talk.say_and_wait(
      '我只是……感受到观众席上的欢呼声……没能忍住脚步……',
    );
    await era.printAndWait(
      `你倒没有真的责怪${chara_talk.sex}的意思，在一边按摩一边进行说教后，也就原谅了曼城茶座的今天的行为。`,
    );
    await chara_talk.say_and_wait(
      `${callname}……下一个目标，就是有马纪念了吧。`,
    );
    await era.printAndWait(
      `按摩结束了，你和曼城茶座正在收拾东西准备回特雷森时，${chara_talk.sex}提到了一个月后的年末盛事——有马纪念。`,
    );
    await era.printAndWait(
      `现在想来，与曼城茶座相伴的日子也快三年了，与${chara_talk.sex}曾经有过欢乐也有过争吵，有时也会灵异事件而陷入危险，但你从未后悔当初与${chara_talk.sex}签下契约。`,
    );
    await era.printAndWait('就用这最后的有马纪念，检验你们这三年来的成就吧。');
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(10), 45);
    extra_flag.relation_change = 20;
    sys_love_uma(25, 3);
    await era.waitAnyKey();
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('有马纪念结束后·摩天楼', chara_talk);

    await era.printAndWait(
      `解说员曼城茶座！是曼城茶座——！冲过终点后的${chara_talk.sex}，依旧注视着地平线的远方！！`,
    );
    await era.printAndWait(
      `解说员究竟${chara_talk.sex}的最终目的地会是哪里呢！？又会成长到什么样的境界呢！？`,
    );
    await era.printAndWait(
      '比赛结束后曼城茶座没有马上离去，只是站在原地，看向赛道远方。',
    );
    await era.printAndWait('担心是不是出现了什么问题，你走上前去。');
    era.printButton('「那个……茶座？」', 1);
    await era.input();
    await chara_talk.say_and_wait(`…………${callname}，我明白了……`);
    await chara_talk.say_and_wait('是因为你的缘故……所以朋友、走了……');
    await era.printAndWait('啊……？');
    await era.printAndWait('难道是你的缘故所以让朋友跑走了吗？');
    await era.printAndWait('正当你想就此道歉时——');
    await chara_talk.say_and_wait('我不是……这个意思。');
    await chara_talk.say_and_wait(
      '我是要说……因为你的关系……让朋友的速度变得快到我无法追上了。',
    );
    await chara_talk.say_and_wait('没错……朋友在不断进化……');
    await era.printAndWait('曼城茶座看着你的脸，用严肃的表情说道。');
    await chara_talk.say_and_wait('朋友会随着我的理想提升，速度也会变得更快……');
    await chara_talk.say_and_wait(
      '当我不断变强后……朋友就会到更远的地方招手，并对我说‘你还能更快吧‘。',
    );
    await chara_talk.say_and_wait(
      '如果只有我一个人，也许早就能追上朋友了。追上之后……梦想也将在那里止步吧。但是……',
    );
    await chara_talk.say_and_wait(
      '我现在却仍然……在抬头仰望。仰望着那座看不见顶端的摩天楼……',
    );
    await chara_talk.say_and_wait('是你……激励了朋友。是你……激励了我。');
    await chara_talk.say_and_wait('让我到达了，一个人绝对无法触及的……高度……');
    await era.printAndWait('朋友究竟是什么，你们似乎终于看到了答案的曙光。');
    await era.printAndWait('朋友既不是善、也不是恶，因为——');
    await chara_talk.say_and_wait('我想还会变得更快吧……朋友……');
    await chara_talk.say_and_wait('然后，我们也还能继续追着朋友前进对吧……');
    await chara_talk.say_and_wait(
      '朋友不再是我一个人的朋友了……已经成为了我们二人意志的承载……就像赛前我们的约定那样，我想跟你一起追逐，直到天涯海角。',
    );
    era.printButton('「嗯……直到天涯海角。」', 1);
    await era.input();
    await era.printAndWait(
      '从今以后，你也会像往常一样同曼城茶座一起追逐着朋友的背影，不断前行吧。',
    );
    await era.printAndWait(
      '你们并肩仰望着天空，细细体会着，两人的这个目标是多么珍贵且无边无际……',
    );
    era.println();
    get_attr_and_print_in_event(25, new Array(5).fill(10), 45);
    extra_flag.relation_change = 30;
    sys_love_uma(25, 3);
    await era.waitAnyKey();
  } else {
    throw new Error('unsupported');
  }
};

handlers[event_hooks.edu_end] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  const chara_talk = get_chara_talk(25);
  await print_event_name('结局·静谧的继承者', chara_talk);
  await era.printAndWait(
    '曼城茶座在闪耀系列赛中最初的三年里获得了极大的成功。',
  );
  await era.printAndWait(
    `眼前林立的奖杯宛如高楼耸立的街道。然而${chara_talk.sex}的活跃表现并未止步于此——`,
  );
  await chara_talk.say_and_wait('今天……也有好多客人……那么……你想商量的事是……？');
  await era.printAndWait(
    `在不知不觉间，因为在赛场上的身姿……曼城茶座受到了许多赛${chara_talk.get_uma_sex_title()}的仰慕。`,
  );
  await era.printAndWait(
    `赛${chara_talk.get_uma_sex_title()}A：「那个～茶座同学……我想请教该如何才能在泥地跑好，我总是跑不好……」`,
  );
  await chara_talk.say_and_wait('泥地……这样啊……');
  await chara_talk.say_and_wait(
    '我觉得……不要用力过度会比较好。\n就像在沙子里……摆动钟摆那样……',
  );
  await era.printAndWait(
    `赛${chara_talk.get_uma_sex_title()}B：「再来到我！下次我打算挑战逃马的跑法，请问有没有什么诀窍呢！？」`,
  );
  await chara_talk.say_and_wait('逃马……虽然我不太擅长……');
  await chara_talk.say_and_wait(
    '但最重要的……是心态……看你将重心放在哪里……跑法，不过是心态的展现……',
  );
  await chara_talk.say_and_wait('这样……有稍微给你们一些灵感了吗？');
  await era.printAndWait(
    `赛${chara_talk.get_uma_sex_title()}们：「有！非常感谢！！」`,
  );
  await chara_talk.say_and_wait('那你们……要喝杯咖啡再走吗？');
  await era.printAndWait(`赛${chara_talk.get_uma_sex_title()}们：「……要！」`);
  await era.printAndWait(
    `面对着众多${chara_talk.get_uma_sex_title()}的提问，曼城茶座却能给所有人都提出充满灵性的建议，并且确实帮到${
      chara_talk.sex
    }们。`,
  );
  await era.printAndWait('这点连身为训练员的你都自愧不如。');
  await era.printAndWait('***');
  await chara_talk.say_and_wait(
    `哈啊、哈啊……${callname}……可以麻烦你再监督我跑一次吗？`,
  );
  await chara_talk.say_and_wait(
    '我今天想要尝试新的跑法。希望可以……提供给别人当参考……',
  );
  era.printButton('「是为了后辈们吗？」', 1);
  await era.input();
  await chara_talk.say_and_wait(
    '是的……我最近总会想，虽然追上在前方的朋友的确很重要……',
  );
  await chara_talk.say_and_wait(
    `可是同时……对在后方追着自己的赛${chara_talk.get_uma_sex_title()}们给予支持也很重要。`,
  );
  await chara_talk.say_and_wait(
    '我……并不像朋友那么快……但即使如此，还是希望能默默地给予帮助……',
  );
  await chara_talk.say_and_wait(
    `静静地张开双手……到了未来的某天，让自己变得能够帮助所有的赛${chara_talk.get_uma_sex_title()}……`,
  );
  await era.printAndWait('——咻。');
  await era.printAndWait(
    '突然，你眼前似乎有什么东西飞快的经过，虽然从未见过，但你脑海中……却浮现出“朋友”二字。',
  );
  era.printButton('「……茶座，朋友现在在哪？」', 1);
  await era.input();
  await chara_talk.say_and_wait('朋友的话，不就在……诶？不见了……');
  await era.printAndWait('——咻。');
  era.printButton(
    `「茶座，你……就是赛${chara_talk.get_uma_sex_title()}的……」`,
    1,
  );
  await era.input();
  await era.printAndWait(
    `仿佛听见了……“种子”的声音。名为赛${chara_talk.get_uma_sex_title()}种子的声音不断在耳边回绕……`,
  );
  await era.printAndWait(`没错，${chara_talk.sex}——曼城茶座就是——`);
  await era.printAndWait('***');
  await era.printAndWait(
    `有一个关于某位赛${chara_talk.get_uma_sex_title()}的寓言故事。`,
  );
  await era.printAndWait(
    `据说那名赛${chara_talk.get_uma_sex_title()}拥有近乎究极的速度，并且和曼城茶座长得十分相似。`,
  );
  await era.printAndWait(`或许曼城茶座${chara_talk.sex}……一直都在一场梦里。`);
  await era.printAndWait(
    `一场那位究极的赛${chara_talk.get_uma_sex_title()}出现在眼前，并期待着曼城茶座“成为${
      chara_talk.sex
    }，然后超越${chara_talk.sex}”的梦……`,
  );
};

handlers[event_hooks.basement_end] = async () => {
  const chara_talk = get_chara_talk(25);
  await era.printAndWait(
    '曼城茶座的训练员已经失踪好几天了。警方搜遍了学院的每一个角落，却依然没有发现任何线索。',
  );
  await era.printAndWait(
    `作为其担当${chara_talk.get_uma_sex_title()}——曼城茶座成为了第一嫌疑人。但在经过详尽的调查和问询后，很快便排除了${
      chara_talk.sex
    }的嫌疑。`,
  );
  await era.printAndWait('现如今，调查工作仍在持续进行……');
  await era.printAndWait(
    '在美浦宿舍，一双黯黄色的眼睛正看着窗外来来往往的警察。',
  );
  await era.printAndWait(`——大家都在找你哦，${callname}……（这几句全用红色）`);
  await era.printAndWait('——但他们是找不到你的。');
  await era.printAndWait('——因为……');
  await era.printAndWait(`——${callname}，是只有我能看见的“朋友”。`);
  await era.printAndWait(
    '缓缓拉上窗帘，在漆黑的房间内，曼城茶座将身后浑浑噩噩的灵体拥入怀中。',
  );
  await era.printAndWait(`...END`);
};

handlers[event_hooks.crazy_fan_end] = async () => {
  const chara_talk = get_chara_talk(25);
  await era.printAndWait(
    '茶座的趾甲始终无法根治，在一次训练中的意外后，校方以茶座的健康为由决定让其退役……但某些人并不这么认为。',
  );
  await era.printAndWait(
    '你手上提着要送给茶座的咖啡豆独自走在大雨的路上，只听身后传来一阵急促的脚步声，然后便是后腰钻心的痛楚。你被推倒在地，身后来人不断刺向你的背部，直到你一动也不动。',
  );
  await era.printAndWait(
    '纸袋中的咖啡豆散落一地，你闻到了不应存在的咖啡香味……',
  );
  await era.printAndWait(
    `死掉之后，还能再见到茶座吗？如果是${chara_talk.sex}的话，或许……`,
  );
  await era.printAndWait('你的意识陷入了黑暗。');
  await era.printAndWait(`...END`);
};

/**
 * 曼城茶座的育成事件
 *
 * @author Necroz
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage！');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
