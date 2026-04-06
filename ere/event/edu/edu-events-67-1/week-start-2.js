const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (daiya, me, flags) => {
    await print_event_name('情人节', daiya);
    await daiya.say_and_wait('情人节快乐♪训练员！');
    await daiya.say_and_wait('我们出发吧！');
    era.printButton('「要去哪里！？」', 1);
    await era.input();
    await daiya.say_and_wait('呵呵呵，到了你就知道了♪');
    await era.printAndWait(
      `情人节。里见光钻不知为何，突然拉着 ${me.name} 出门。你们抵达的地方是……`,
    );
    await era.printAndWait(
      '没什么特别的，我们来到的是栗东宿舍前。宿舍的大门前摆着一台看起来很陌生的大机器。',
    );
    era.printButton('「那台起重机跟大量的箱子是怎么回事！？」', 1);
    await era.input();
    await daiya.say_and_wait('嘿嘿，这是为你准备的情人节惊喜！');
    await daiya.say_and_wait('我特地为了训练员准备的巨型夹娃娃机！');
    await daiya.say_and_wait(
      '规则就跟普通的夹娃娃机一样。等一下会把人吊在起重机上面，然后亲自下去抓奖品上来。',
    );
    await era.printAndWait('也就是说，这是个由人来充当夹娃娃机爪子的游戏。');
    await daiya.say_and_wait(
      '毕竟是难得的情人节嘛。想说还是要有点惊喜比较好，所以我做了很多的功课呢。',
    );
    await daiya.say_and_wait(
      '然后就被我发现，里见集团旗下的子公司曾经办过巨型夹娃娃机活动的报导！',
    );
    await daiya.say_and_wait(
      '因为看起来实在是非常有趣，所以我就借用了一下器材跟工作人员♪',
    );
    await daiya.say_and_wait(
      '奖品是情人节的巧克力！我准备了非常多的种类，你就自己挑选喜欢的拿吧！',
    );
    await daiya.say_and_wait(
      '从杂货店的巧克力到知名店的限量巧克力都有，种类相当丰富喔。',
    );
    await daiya.say_and_wait(
      '只要说出你想移动的方向，工作人员就会操作起重机帮助你移动♪',
    );
    era.printButton('「该不会接下来要当爪子就是……」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是的，就是训练员喔！这是光钻为你准备的特别情人节，就请你尽情地享受吧！',
    );
    await era.printAndWait(
      `……这的确是好奇心旺盛的里见光钻会想到的主意。身为${daiya.sex}的训练员，看来 ${me.name} 也只能做好觉悟了……！`,
    );
    await daiya.say_and_wait('训练员～！要说出想移动的方向喔～！');
    era.printButton('「到、到这附近就可以了……！」', 1);
    await era.input();
    await daiya.say_and_wait(`好～～的！那就请慢慢放 ${me.sex} 下去吧──！`);
    await era.printAndWait(
      `不愧是熟练于操作起重机的工作人员。多亏了工作人员熟练且稳定的操作，${me.name} 才能安心地降落到巧克力山中。`,
    );
    await era.printAndWait(
      `不如说，${me.name} 开始觉得有趣了！${me.name} 伸手收集靠近手边的巧克力，两手抓得满满的。`,
    );
    await daiya.say_and_wait(
      '哇啊！训练员真厉害！这完美的平衡感……真是有一套！',
    );
    await daiya.say_and_wait('哎呀，还要再拿一个吗！？要小心不要弄掉了喔……！');
    await daiya.say_and_wait(
      `呵呵，看来是玩得很投入呢。能让${me.sex}玩得开心真是太好了♪`,
    );
    era.drawLine();
    await daiya.say_and_wait('训练员，你真是太厉害了！我都看得入迷了呢！');
    await daiya.say_and_wait('而且……呵呵呵，你看起来很开心的样子。');
    era.printButton('「我玩得很开心喔！」', 1);
    await era.input();
    await daiya.say_and_wait('嘿嘿嘿，我好高兴……♪');
    await daiya.say_and_wait(
      '比赛之外的令人开心的事情……如果也能像这样跟训练员分享的话就太好了呢。',
    );
    era.printButton('「就是呀！」', 1);
    await era.input();
    await daiya.say_and_wait('啊，巧克力！请你不要客气，尽管吃喔！');
    await daiya.say_and_wait(
      '回去之后，我也会一边回想今天的事情，一边品尝巧克力的。',
    );
    await era.printAndWait(
      `在巨型夹娃娃机拿到了大量巧克力。${me.name} 想这肯定能让我日后在每一次吃的时候，都回想起${daiya.sex}的笑容吧。`,
    );
    await era.printAndWait(
      `不如说，${me.name} 开始觉得有趣了！${me.name} 伸手收集靠近手边的巧克力。`,
    );
    era.printButton('「这是……？」', 1);
    await era.input();
    await daiya.say_and_wait('啊……！那个巧克力是……！');
    await era.printAndWait(
      `唯独一个看起来包装有点变形的巧克力。${me.name} 开始摆动身体，试图要伸手去拿那一个充满手工感的巧克力。`,
    );
    await daiya.say_and_wait('训、训练员！不要逞强去拿呀……！');
    await daiya.say_and_wait('啊啊，刚才好不容易拿到的巧克力都掉了……');
    await daiya.say_and_wait(`……${me.sex}该不会是察觉到了吧……？`);
    await era.printAndWait(
      `${me.name} 在巨型夹娃娃机获得了不错的战果。更重要的是，${me.name} 成功拿到了包装有点变形的巧克力！`,
    );
    era.drawLine();
    await daiya.say_and_wait('……那个……是我自己做的巧克力。');
    era.printButton('「我就知道！」', 1);
    await era.input();
    await daiya.say_and_wait('果然，你也猜到那是我亲手做的而去拿了呢……');
    await daiya.say_and_wait('真是的……');
    era.printButton('「我可以吃吗？」', 1);
    await era.input();
    await daiya.say_and_wait('……好的，请享用。');
    await era.printAndWait(
      `${me.name} 拆开包装，从排列整齐的巧克力中拿起一颗放进嘴里。`,
    );
    await era.printAndWait(
      '……该怎么说呢？是种很奇妙的味道。应该算得上是好吃，但却很难用言语形容。',
    );
    await daiya.say_and_wait('味道很奇怪对吧……？');
    era.printButton('「虽然好吃，但味道很奇妙……」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是呀。我想要挑战做出稀奇的口味，结果却变成这么奇妙的味道……',
    );
    await daiya.say_and_wait(
      '我自己试吃之后虽然觉得不难吃，但又很犹豫这样的巧克力到底该不该送给你……',
    );
    await daiya.say_and_wait(
      '你愿意品尝我做的巧克力，我真的非常感谢！这样对我来说就已经足够了……！',
    );
    era.printButton('「要不要一起找适合搭配这个巧克力的东西？」', 1);
    await era.input();
    await daiya.say_and_wait('咦……？');
    await era.printAndWait(
      `${me.name} 觉得只要再多添加某种味道，这个巧克力应该就会变得更好吃。所以 ${me.name} 提议去寻找食材。`,
    );
    await daiya.say_and_wait(
      '原来如此……也就是搭配水果跟点心一起吃，看看什么组合比较好吃对吧。',
    );
    await daiya.say_and_wait('感觉很有趣呢！就这么办吧！');
    await era.printAndWait(`你们为了让巧克力变得更好吃，开始挑战各种尝试。`);
    await era.printAndWait('结果，里见光钻亲手做的巧克力跟火龙果是最搭的。');
    await daiya.say_and_wait(
      '呵呵呵，这等于是我跟训练员一起完成的绝无仅有的巧克力呢。',
    );
    await daiya.say_and_wait(
      '虽然它非常地好吃……但这个配方我绝不会告诉任何人。这是只属于我们两个人的秘密♪',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
    era.set('cflag:67:节日事件标记', 0);
  };

  handlers[95 + 14] = async (daiya, me, flags) => {
    await print_event_name('粉丝感谢祭', daiya);
    era.println();
    const gold_ship = get_chara_talk(7);
    const condor_pasa = get_chara_talk(14);
    const coffee = get_chara_talk(25);
    const festa = get_chara_talk(49);
    const sirius = get_chara_talk(70);
    await era.printAndWait(
      `今天是春季的粉丝大感谢祭。赛${daiya.uma_sex_title}们跟现场众多的粉丝进行各种互动。`,
    );
    await era.printAndWait(
      `里见光钻也被女性粉丝围绕，${daiya.couple_title}正在聊天。`,
    );
    await era.printAndWait('光钻的粉丝A「我真的非常喜欢光钻跑步的样子！！」');
    await era.printAndWait(
      '光钻的粉丝A「专心盯着前方冲刺的模样，又漂亮又帅气……！」',
    );
    await daiya.say_and_wait('哇啊啊，我真开心！！你一直都支持着我呢！');
    await era.printAndWait(
      `光钻的粉丝A「是的！为了想亲眼看到光钻的模样，我之前还和${daiya.sex}一起第一次到现场观看比赛喔！」`,
    );
    await era.printAndWait(
      '光钻的粉丝B「我们到现场去看了『菊花赏』，连我也喜欢上光钻了！！胜者舞台的表现也好可爱！」',
    );
    await daiya.say_and_wait(
      '哎呀，那是你第一次去赛场吗！？谢谢你为了我到现场支持！',
    );
    await era.printAndWait(
      '光钻的粉丝A「本来不好意思打扰你的……能像这样跟你说话……真、真的很感动……！」',
    );
    await daiya.say_and_wait(
      '嘿嘿嘿，你们来找我说话，也让我觉得心情非常愉快喔♪',
    );
    await era.printAndWait(
      '光钻的粉丝B「请问一下，光钻今天也有参加什么活动吗？」',
    );
    await daiya.say_and_wait(
      '我会参加『无情大翻牌游戏』！到时候会把很大张的卡牌排列在操场上，然后来玩翻牌游戏喔♪',
    );
    await era.printAndWait('光钻的粉丝B「……『无情』的意思是……？」');
    await daiya.say_and_wait(
      '因为是边跑步边拼翻牌的速度的比赛。不会依照顺序轮流翻牌，而是先抢先赢的玩法。',
    );
    await daiya.say_and_wait(
      '如果翻到『挑战书牌』的话，就要跟其他选手决胜负，赢家可以拿走输家的牌喔♪',
    );
    await era.printAndWait('光钻的粉丝B「那、那还真是激烈啊……」');
    await era.printAndWait(
      '光钻的粉丝A「但光钻一定能赢的！我们会去帮你加油的！」',
    );
    await daiya.say_and_wait(
      '呵呵呵呵呵！有你们帮我加油的话，光钻一定会非常卖力的♪',
    );
    await era.printAndWait('光钻的粉丝们「好……好可爱喔～～！」');
    await daiya.say_and_wait('真是的！居然躲在一旁偷看，训练员真是太过分了！');
    era.printButton('「我想说打扰你们也不好嘛」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 向${daiya.sex}表明因为看${daiya.sex}和粉丝们互动得很愉快，所以不好意思打扰。`,
    );
    await daiya.say_and_wait('我也是不小心就太兴奋了……真不好意思……');
    await me.say_as_passer_by_and_wait(
      `担任播报的赛${daiya.uma_sex_title}`,
      '大会报告。请『无情大翻牌游戏』的参赛选手前往准备区集合。',
    );
    await daiya.say_and_wait('啊，要集合了。那我先过去了！');
    era.drawLine();
    await me.say_as_passer_by_and_wait(
      `担任播报的赛${daiya.uma_sex_title}`,
      '──接下来是考验智谋和体力的『无情大翻牌游戏』！欢迎六位参赛选手入场！',
    );
    await condor_pasa.say_and_wait(
      '直觉、计谋、热血！赢家的宝座是神鹰我的啦────！！',
    );
    await gold_ship.say_and_wait(
      '泽蟹、毛蟹、松叶蟹！！好耶，螃蟹祭典来啦！！',
    );
    await festa.say_and_wait('呵……来的都是有趣的选手嘛。');
    await sirius.say_and_wait('喂喂……小朋友的同乐会我可没兴趣哦。');
    await coffee.say_and_wait('……嗯，对……要翻到一样图案的……');
    await daiya.say_and_wait('？曼城茶座，你在跟谁说话……？');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「六位选手都各自站上了起跑的位置！那么，『无情大翻牌游戏』就要开始了！！」`,
    );
    await era.printAndWait('砰！！');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「好的，这个比赛是要在赛道上翻牌，翻到一样图案的牌就可以得分的翻牌游戏！」`,
    );
    await condor_pasa.say_and_wait('No──────！！图案不一样────！！');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「所有参赛选手会同时进行翻牌动作，所以比一般翻牌游戏更考验记忆力！」`,
    );
    await daiya.say_and_wait('……好！翻到一对了♪');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「里见光钻稳扎稳打地累积得分！」`,
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「……这是！？曼城茶座接二连三地成功配对，目前得分数位居第一！」`,
    );
    await coffee.say_and_wait(
      '……一样图案的……在那个右边的角落……是喔，太好了……谢谢……',
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「从比赛开始到现在都没有失手过！${
        daiya.sex
      }自言自语地判断对错，难道这样慎重的方式就是零失手的诀窍吗！」`,
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「剩余时间不到五分钟了！……哎呀？中山庆典开始出招了！是不是想要使用刚才翻到的那个呢！？」`,
    );
    await festa.say_and_wait('抱歉啦，大小姐。我要使用王牌了。');
    await daiya.say_and_wait('！！挑战书……！');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「哎呀──中山庆典！${
        daiya.sex
      }对里见光钻提出挑战书啦！」`,
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「挑战书牌会让双方合意讨论出要赌多少分数，在接下来的对决中获胜的赢家则可以获得对方下注的分数！」`,
    );
    await sirius.say_and_wait('等一下！！我也要用挑战书！');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「天狼星象征也在这时候加入战局！！挑战书的对决演变成三强鼎立的局面了！」`,
    );
    await sirius.say_and_wait('所以呢？你想赌多少分数？');
    await daiya.say_and_wait(
      '……五百分怎么样呢？这样就足够让我追上曼城茶座的分数了。',
    );
    await sirius.say_and_wait(
      '呵，你很冷静嘛。要是因为冲动就赌上所有分数，那局面可就有趣了呢。',
    );
    await festa.say_and_wait('那就一把决胜负吧。开始啰──');
    await era.printAndWait('三人「剪刀、石头、布！！」');
    await daiya.say_and_wait('太好了！！是我赢了！');
    await sirius.say_and_wait('哦？没有被我骗到啊。很好，把分数拿去吧！');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「里见光钻获得一千分！分数和暂居第一的曼城茶座并列了──！！──然而！！」`,
    );
    await coffee.say_and_wait('…………赢了。');
    await gold_ship.say_and_wait(
      '啊啊啊啊啊啊可恶啊────！！从第一名身上把分数赢走的计划失败啦！',
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「曼城茶座和黄金船之间的挑战书对决，获胜者是曼城茶座！！${
        daiya.sex
      }因此得到了黄金船所有的分数！」`,
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「比赛时间结束！！『无情大翻牌游戏』的赢家是──曼城茶座！」`,
    );
    await era.printAndWait('光钻的粉丝B「光钻真是可惜啊！」');
    await era.printAndWait(
      '光钻的粉丝A「不过，看到了光钻的各种表情，我觉得很满足了！」',
    );
    await daiya.say_and_wait('呵呵呵，你们觉得开心就好！');
    await era.printAndWait(
      '和粉丝们有直接的互动，对里见光钻来说也是一场相当愉快的粉丝感谢祭。',
    );
    await daiya.say_and_wait('赌上所有分数！！');
    await festa.say_and_wait('哈哈！赌上所有分数真是太过瘾了！我跟！！');
    await sirius.say_and_wait('我也没意见！来吧！！');
    await era.printAndWait('三人「剪刀、石头、布！！」');
    await daiya.say_and_wait('太好了！！是我赢了！');
    await festa.say_and_wait(
      '……居然能在心理攻防战赢过我……真是个了不起的大小姐啊。',
    );
    await festa.say_and_wait('把我所有分数拿走吧。');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「里见光钻成功获得中山庆典和天狼星象征的分数！！因此，${
        daiya.sex
      }的分数超越了曼城茶座，成为了第一名──！」`,
    );
    await gold_ship.say_and_wait(
      '啊──哈哈哈哈哈！！我就在等这一刻呢！THE · 渔翁之利！我要对里见发动挑战书──！',
    );
    await gold_ship.say_and_wait('来啦来啦拼胜负啦──！！');
    await gold_ship.say_and_wait('剪刀、石头、布！！');
    await daiya.say_and_wait('呵呵呵，是我赢了呢♪');
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「哎呀──里见光钻完全识破了黄金船的策略！！彻底击败了最后一名刺客──黄金船！」`,
    );
    await era.printAndWait(
      `担任播报的赛${daiya.uma_sex_title}「比赛时间结束！！『无情大翻牌游戏』的赢家是──里见光钻！」`,
    );
    await era.printAndWait('光钻的粉丝B「光钻，恭喜你获胜！」');
    await era.printAndWait('光钻的粉丝A「没想到光钻还有这么大胆的一面……！」');
    await daiya.say_and_wait('嘿嘿嘿♪因为大家来为我加油，所以我豁出去了！');
    await era.printAndWait(
      '光钻的粉丝A「真……真是太帅气了～～！！请让我今后也继续为你加油吧！」',
    );
    await daiya.say_and_wait(
      '我才要拜托你们继续支持我呢！那就麻烦大家继续为我加油啰♪',
    );
    await era.printAndWait(
      '和粉丝们有直接的互动，对里见光钻来说也是一场相当愉快的粉丝感谢祭。',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
    era.set('cflag:67:节日事件标记', 0);
  };

  handlers[95 + 29] = async (daiya, me, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:67:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    await print_event_name('夏季集训（资深年）开始！', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait('每年惯例的夏季集训也在今年开始了！');
    await kita.say_and_wait('小钻，有空吗？');
    await daiya.say_and_wait('怎么了？');
    await kita.say_and_wait([
      '就是……你在 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 跟我说过的。',
    ]);
    await kita.say_and_wait('你说大家都对我充满『期待』……');
    await daiya.say_and_wait('嗯。');
    await kita.say_and_wait('我自己想了一下，大家对我的『期待』究竟是什么。');
    await kita.say_and_wait('然后……我做出了决定！！');
    await kita.say_and_wait(
      '如果我努力的样子能够激励到大家的话，那我就要让大家看到我努力不懈的样子！',
    );
    await kita.say_and_wait(
      '我想，大家应该是期待看到我可以从谷底翻身逆转胜的样子！',
    );
    await kita.say_and_wait(
      '凭着意志力绝不放弃，死缠烂打到最后，这才是我的作风嘛！',
    );
    await daiya.say_and_wait('呵呵呵！这才是小北没错！');
    await kita.say_and_wait([
      '所以，我的目标是要在 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '、',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '、',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 全部跑赢！',
    ]);
    await kita.say_and_wait('这就代表，我一定会跑赢帝王跟麦昆的！！');
    await kita.say_and_wait(
      '因为是一直崇拜的对象，我很了解她的强大，也知道要赢过她是多么困难的事情……',
    );
    await kita.say_and_wait(
      '但也因为这样，所以我更想要赢过她！！我想要超越自己崇拜的人！',
    );
    await kita.say_and_wait([
      '因为我在 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 的时候让大家失望了，所以我想让大家看到我超越崇拜对象的样子！',
    ]);
    await daiya.say_and_wait('……我也是一样的想法。我也想超越崇拜的对象。');
    await daiya.say_and_wait('我不会把赢家的位置让给小北的！');
    await kita.say_and_wait('嗯！！我们都要努力！那就晚点见啰！');
    await daiya.say_and_wait('嘿嘿嘿，太好了……！');
    await daiya.say_and_wait('啊，对了。训练员，我有件事想要拜托你……');
    await daiya.say_and_wait(
      '关于之后的训练方针，为了能够应对各种状况，我想要强化自己的力量。',
    );
    await daiya.say_and_wait('前几天，我为了研究，就看了一些麦昆的比赛影片……');
    await daiya.say_and_wait(
      '强大脚力让她即使面对路况差劲的场地也不为所动，她强而有力的脚步让我印象很深刻。',
    );
    await daiya.say_and_wait(
      '要是我也有那样的脚力……就能更容易从人群中往前冲刺，对以后的比赛应该会有很好的效果。',
    );
    await daiya.say_and_wait(
      '……不对，应该说──补强我现在缺乏的部分，也是为了赢过麦昆她们所必须要做的事情。',
    );
    era.printButton('「原来如此」', 1);
    await era.input();
    await daiya.say_and_wait(
      '既然麦昆她们给了我这么难得的机会，我希望可以在万全的状态下迎战，我想要赢过她们……！',
    );
    await daiya.say_and_wait(
      `还有就是，我身为一个『知名赛${daiya.uma_sex_title}』，迟早也是要考量进军国外比赛的。`,
    );
    await era.printAndWait(
      `这让 ${me.name} 想起新年的派对上，有人曾提起国外远征的事情。`,
    );
    await era.printAndWait(
      '要想在更艰巨的国外赛场上跑出好成绩，的确也是需要足够的力量。',
    );
    era.printButton('「你怎么会突然决定要把目标定在国外的比赛？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '也不是已经决定好了，只是……之前，我找你商量过我能透过比赛带给大家什么这件事吧？',
    );
    await daiya.say_and_wait(
      '那时训练员给我的答案是可能性，这才让我想到国外远征的事情。',
    );
    await daiya.say_and_wait(
      `日本赛${daiya.uma_sex_title}界一直无法攻破的法国的传统大规模比赛──`,
    );
    await daiya.say_and_wait(
      '如果是破除里见家魔咒的我，说不定就能让大家看到缔造新历史的可能性。',
    );
    await daiya.say_and_wait(
      '既然如此，我或许就该从现在开始，把国外远征也纳入未来的目标。',
    );
    era.printButton('「我知道了」', 1);
    await era.input();
    await era.printAndWait(
      `锻炼力量的确能如她所说的，强化${daiya.sex}应对各种状况的能力。${me.name} 当然没有理由拒绝这个要求。`,
    );
    await daiya.say_and_wait('不好意思，要让你更加费心了。那就拜托了。');
    await daiya.say_and_wait('充满力量的新跑法……我一定要学会才行！');
    await daiya.say_and_wait('不然，我就没有脸去面对麦昆了！');
    await era.printAndWait(
      '决定要挑战憧憬，并确立了将来的方向后，里见光钻充满了干劲。',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[95 + 33] = async (daiya, me, flags) => {
    await print_event_name('遥远的前方，持续追逐', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait('…………呼！');
    await era.printAndWait(
      '即使回到草地的训练赛道，里见光钻跑步的模样依旧还是怪怪的。',
    );
    await era.printAndWait(
      '不仅如此，已经可以说是完全被打乱的程度。成绩也是一落千丈。',
    );
    await daiya.say_and_wait('………………训练员。');
    await daiya.say_and_wait([
      '我这样来得及在 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 之前把状态调整好吗……？',
    ]);
    era.printButton('「现在开始调整的话或许还能勉强赶上吧」', 1);
    await era.input();
    await era.printAndWait([
      '虽然是不一定要以100％完整状态去迎战作为前哨战的 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      '，但距离 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 也已经没有时间了。',
    ]);
    await daiya.say_and_wait('…………');
    await daiya.say_and_wait('……我会先把跑法给调整回来的。');
    await daiya.say_and_wait('毕竟，我可不能用这种状态去迎战跟麦昆的比赛……！');
    era.printButton(
      `「是啊，要赶在 ${race_infos[race_enum.tenn_spr].name} 之前调整好！」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `这对她来说也是很痛苦的决定吧。为了不辜负她的这片心意，${me.name} 一定要让${daiya.sex}以万全的状态迎战「天皇赏（秋）」！`,
    );
    await daiya.say_and_wait('呼、呼…………怎么会这样……？');
    await daiya.say_and_wait('之前步频明明可以更快的……所以……');
    await daiya.say_and_wait('唔……！');
    await era.printAndWait(`然而，${daiya.sex}始终没有找回原本的跑法。`);
    await era.printAndWait(
      `${daiya.sex}因为太过急心于恢复到原本的跑法，反而让身体的平衡变得更加杂乱不堪，又因此变得更加焦虑、更加在意。`,
    );
    await era.printAndWait(
      '要怎么摆脱这样的恶性循环呢？──如果里见光钻真的忘记了原本的跑法，那不如……',
    );
    era.drawLine();
    await kita.say_and_wait('打扰了。训练员，你是想找我商量什么呢？');
    era.printButton('「其实是关于光钻跑步的事情……」', 1);
    await era.input();
    await kita.say_and_wait(
      '啊──我大概知道你想说什么了。最近小钻跑步的样子确实是怪怪的呢。',
    );
    await era.printAndWait(
      `${me.name} 向${daiya.sex}说明──目前里见光钻正为了找回原本的跑法而努力，过程却非常不顺利，陷入了瓶颈。`,
    );
    await kita.say_and_wait(
      '嗯嗯……如果是这样的话，要不要让她跟我跑一场看看呢？',
    );
    await kita.say_and_wait(
      '虽然我不知道该怎么解决，但实际跑一次说不定就有办法了呢！',
    );
    era.drawLine();
    await daiya.say_and_wait('要我跟小北一起跑吗？');
    await kita.say_and_wait([
      '对！跑跟 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 一样的2200米。我想要复习当时的状况。',
    ]);
    await daiya.say_and_wait('……训练员。');
    era.printButton('「我们就帮她这个忙吧！」', 1);
    await era.input();
    await daiya.say_and_wait([
      '……说得也是。刚好距离也是 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      ' 的中间。对我来说也是不错的锻炼。',
    ]);
    await kita.say_and_wait('谢谢你，小钻！！');
    await daiya.say_and_wait('真是的……我才应该要说谢谢的。');
    await era.printAndWait('于是，和北部玄驹的2200米竞赛开始了。');
    await kita.say_and_wait('喝啊啊啊啊啊啊啊！');
    await daiya.say_and_wait('这里不能被拉大距离，要稍微加快一点步调……', true);
    await daiya.say_and_wait('喝啊啊……唔！唔……！');
    await daiya.say_and_wait(
      '……前进不了！是步伐太重了吗？……不行，距离要被越拉越大了……！',
      true,
    );
    await daiya.say_and_wait('……没办法跑出我想要的样子……', true);
    await daiya.say_and_wait('……呼、呼………………');
    await kita.say_and_wait('嗯──小钻的状态好像很不好耶。');
    await kita.say_and_wait('还是不要太勉强了，今天就到此为止吧！');
    await daiya.say_and_wait('不行，我还没……');
    await kita.say_and_wait('可是小钻，你好像也没办法专心并跑练习的感觉啊。');
    await kita.say_and_wait(
      '不专心的话，是很可能会不小心受伤的。今天还是先休息吧。',
    );
    era.printButton('「嗯，先这样吧。好好休息」', 1);
    await era.input();
    await daiya.say_and_wait('是……我知道了。辛苦了。');
    await era.printAndWait(
      `里见光钻应该是明白了你们怕${
        daiya.sex
      }受伤的心情。于是${daiya.sex}乖乖地答应了。`,
    );
    await kita.say_and_wait('欸，反正现在时间还早。我们去逛一逛再回去吧！');
    await daiya.say_and_wait('小北……对不起，我──');
    await kita.say_and_wait('走吧！！');
    await daiya.say_and_wait('哇！……小北，我……！');
    await kita.say_and_wait('我肚子饿了！先去商店街好了！');
    era.drawLine();
    await kita.say_and_wait('嗯～～～！好好吃！');
    await kita.say_and_wait('小钻点的是什么口味的啊？');
    await daiya.say_and_wait('辣起司热狗跟巧克力薄荷的两种口味各半。');
    await kita.say_and_wait('又、又是点这种奇怪的组合……');
    await daiya.say_and_wait(
      '我想说这种特别的组合会比较有趣嘛。辣辣凉凉的充满刺激性的味道♪',
    );
    await kita.say_and_wait('你真是个勇于挑战的勇者呢。');
    await kita.say_and_wait(
      '口渴了，去买饮料吧！买完后再带去风景好的地方喝吧！',
    );
    await daiya.say_and_wait('小北！手……你突然这样拉的话，鲷鱼烧会掉地上的！');
    await kita.say_and_wait('抱歉抱歉！但也没有掉到地上嘛！');
    await daiya.say_and_wait('……小时候也是像这样子，被小北拉着手……', true);
    await daiya.print_and_wait('【年幼的光钻「小北……我们要走多久呀……？」】');
    await kita.print_and_wait('【年幼的北部「就快到了。你看……」】');
    await daiya.print_and_wait('【年幼的光钻「哇～！好高喔……！」】');
    await kita.print_and_wait(
      '【年幼的北部「这里就是我的秘密基地！早就想带小钻来这里看看了！」】',
    );
    await daiya.say_and_wait('带我去了好多的地方……', true);
    await kita.say_and_wait('呼、呼……一口气爬上来还真的是会累耶……！');
    await daiya.say_and_wait('嗯……呼、呼……');
    await daiya.say_and_wait('以前也来过这里……当时也是小北拉着我的手过来的。');
    await daiya.say_and_wait(
      '不只是这里，还带我去了很多地方。是小北带我认识外面的世界。',
    );
    await daiya.say_and_wait('……我一直把小北当作姐姐看待。');
    await kita.say_and_wait(
      '啊哈哈，跟小钻在一起的时候，我也是都尽量想要表现得像个姐姐一样喔！',
    );
    await kita.say_and_wait('我要走在小钻的前面，带小钻去各种地方……');
    await kita.say_and_wait('──欸，小钻！我们来赛跑吧！看谁先跑到河边！');
    await daiya.say_and_wait('咦？赛跑？怎么这么突然？');
    await kita.say_and_wait('跑一下没关系吧。好啦！好了，预备……跑！！');
    await daiya.say_and_wait('等……这样很狡猾耶，小北！！');
    await kita.say_and_wait('嘿嘿嘿，是我跑赢了呢！接下来换……看谁先跑到公园！');
    await daiya.say_and_wait('咦！？真是的……！');
    await kita.say_and_wait('快点，不然我要丢下你跑掉啰！');
    await kita.print_and_wait(
      '【年幼的北部「快点快点，小钻！快一点──！不然要丢下你跑掉啰！」】',
    );
    await daiya.print_and_wait('【年幼的光钻「等等我嘛──！小北！！」】');
    await daiya.print_and_wait(
      '【年幼的光钻「呼、呼……嘿嘿，只差一点点……！」】',
    );
    await daiya.say_and_wait('呼……才不要被丢下呢！');
    await kita.say_and_wait('那我们最后就比看谁先跑到宿舍！宿舍就是终点啰！');
    await daiya.say_and_wait('……呵呵，这次我一定会追上你的。');
    await daiya.say_and_wait('……记得以前也是像这样只追着那个背影跑呢……', true);
    await daiya.say_and_wait('就只是因为想追上小北。', true);
    await daiya.say_and_wait('……好──！');
    await daiya.say_and_wait('……咦？我……能够正常跑了……', true);
    await daiya.say_and_wait('没有多想什么……单纯自然地跑步……！', true);
    await daiya.say_and_wait(
      '……原来呀。我追着小北奔跑的时候，一直都是非常专心地在跑步的……',
      true,
    );
    await daiya.say_and_wait(
      '就只是单纯地想像着──等我追上那个背影、追过她的时候，小北会露出什么样的表情。',
      true,
    );
    await daiya.say_and_wait('然后就会很快乐……觉得跑步很快乐！！', true);
    await kita.say_and_wait('抵达终点────！');
    await daiya.say_and_wait('呼、呼、呼…………');
    await daiya.say_and_wait('…………小北。');
    await kita.say_and_wait('怎么了？小钻。');
    await daiya.say_and_wait('嘿嘿嘿，我跑得很开心喔！');
    await kita.say_and_wait('嗯！！我也是！');
    await daiya.say_and_wait('下次我一定会追过你的！');
    await kita.say_and_wait('…………！嘿嘿，你就尽管来挑战吧！！');
    await daiya.say_and_wait('我就顺从心意去跑吧，就像过去一样……', true);
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[95 + 48] = async (daiya, me, flags) => {
    await print_event_name('圣诞节', daiya);
    const kita = get_chara_talk(68);
    const nice_nature = get_chara_talk(60);
    const tannhauser = get_chara_talk(62);
    const dictus = get_chara_talk(63);
    const palmer = get_chara_talk(64);
    const helios = get_chara_talk(65);
    const turbo = get_chara_talk(66);
    await palmer.say_and_wait('你好──打扰了──！训练员，要开始圣诞派对了喔！');
    era.printButton('「……什么？」', 1);
    await era.input();
    await era.printAndWait(
      '突然出现的目白善信这么说完后，便自行走进了房间。紧接着优秀素质和其他人也跟着进来了。',
    );
    await daiya.say_and_wait(
      '临时来打扰真的很不好意思。我决定要和善信她们一起办圣诞派对。',
    );
    await daiya.say_and_wait('训练员要不要一起呢？');
    await palmer.say_and_wait('要是能顺便把这边借给我们当派对场地那就更好了！');
    await nice_nature.say_and_wait('哎呀，训练员好像呆住了呢。');
    await daiya.say_and_wait('那个啊，其实是这样的……');
    await tannhauser.say_and_wait('咦！？小里家里不会办圣诞派对啊！？');
    await daiya.say_and_wait(
      '是的。因为圣诞节的时候，父亲和母亲都要工作或参加慈善活动。',
    );
    await daiya.say_and_wait(
      '虽然偶尔也会跟着父亲他们去参加合作对象举办的派对，或是参加里见集团主办的派对……',
    );
    await daiya.say_and_wait('但我们家从来没有办过只有家人的派对。');
    await helios.say_and_wait('真假？拿不到礼物也太惨了吧！');
    await daiya.say_and_wait(
      '啊，有礼物喔！圣诞老公公会在晚上的时候，把礼物装在我的袜子里！',
    );
    await daiya.say_and_wait(
      '不过，没有过像电影里面那种圣诞节家庭派对的经验……其实我还蛮向往的呢。',
    );
    await palmer.say_and_wait('那我们就来办一个吧！');
    await daiya.say_and_wait('咦！？');
    await dictus.say_and_wait(
      '是啊。虽然没办法招待里见的双亲来参加，但家庭派对这种事情我们还是能做到的。',
    );
    await nice_nature.say_and_wait(
      '如果是温馨的小家庭派对的话，我们还算是非常有经验的──所以就来办一场吧。',
    );
    await turbo.say_and_wait('好耶──！派对派对！');
    await tannhauser.say_and_wait(
      '啊，虽然没办法请来小里的双亲，但邀请小里的训练员呢？',
    );
    await helios.say_and_wait(
      `诗歌剧根本天才吧！那就直接去找${get_chara_talk(0).sex}吧！`,
    );
    await dictus.say_and_wait('──事情经过就是如此。提供场地兼参加，你愿意吗？');
    era.printButton('「当然！」', 1);
    await era.input();
    await daiya.say_and_wait('哇，真的可以吗！？太谢谢你了！');
    await dictus.say_and_wait('那就赶快动手装饰一下吧。');
    await nice_nature.say_and_wait('呼──大概就像是这种感觉吧。');
    await daiya.say_and_wait(
      '好棒……好棒喔！明明装饰全都是自己手工做的，竟然可以弄得这么漂亮……！',
    );
    await tannhauser.say_and_wait('我回来啦～！我买了料理跟零食回来喔──！');
    await helios.say_and_wait('炸鸡加披萨☆欧耶！');
    await kita.say_and_wait('晚安──！');
    await daiya.say_and_wait('咦？小北！？');
    await kita.say_and_wait('嘿嘿嘿，刚才在校门口遇到她们，就也被邀请来了！');
    await daiya.say_and_wait('超级欢迎！过来吧，小北！');
    await kita.say_and_wait('是说，现在这个阵容，就跟新生欢迎会的时候一样耶！');
    await daiya.say_and_wait('嗯，会让我想起当时的事情呢！');
    await tannhauser.say_and_wait('哇～当时的新生现在都已经变得这么棒了……');
    await palmer.say_and_wait('好了好了，晚点再继续聊吧！趁热先吃！');
    await daiya.say_and_wait(
      '有披萨、沙拉、炸鸡……鱿鱼干、魟鱼鳍干、醋昆布……？',
    );
    await daiya.say_and_wait('原来如此，就是所谓的一般家庭派对的菜单呀。');
    await kita.say_and_wait(
      '不对……但又好像也对啦，我家过圣诞节的时候桌上也会有下酒菜，所以没办法否定……！',
    );
    await tannhauser.say_and_wait(
      '呀～商店街的人给了我好多的东西啊～里面混了很多古早味零食跟下酒菜。真的是觉得好感激喔～',
    );
    await daiya.say_and_wait(
      '我牌出光了！再来就只剩下小北跟涡轮，看谁会是输家了！',
    );
    await kita.say_and_wait('嗯──不然我挑最右边的好了……');
    await kita.say_and_wait('还是最左边的……');
    await kita.say_and_wait('嗯，就决定是最左边这张了！');
    await turbo.say_and_wait('不行不行不行不行──！！左边这张不能给你啦！');
    await nice_nature.say_and_wait(
      '……涡轮，你就死心吧。你的表情真的太好猜了……',
    );
    await era.printAndWait(
      `于是你们就这样一起度过了愉快的时光……圣诞节派对就此落幕了。`,
    );
    era.drawLine();
    await era.printAndWait(
      '接着要把留下来帮忙整理的里见光钻和北部玄驹送回宿舍。',
    );
    await daiya.say_and_wait('嘿嘿嘿，今天真的好开心喔！');
    await daiya.say_and_wait('我原本对圣诞节的印象就是要工作的……');
    await kita.say_and_wait('对耶，每年圣诞节的时候，小钻都会说有事要出门。');
    await daiya.say_and_wait('嗯，下次也想约我弟弟一起参加呢。');
    await kita.say_and_wait(
      '啊，对啊！他一定会喜欢的！明年我们也一起办圣诞派对吧！',
    );
    await daiya.say_and_wait('明年……训练员也愿意参加吗？');
    era.printButton('「好！」', 1);
    await era.input();
    await daiya.say_and_wait('真的吗？那我们就约好了哦？');
    await daiya.say_and_wait(
      '我已经先订走你的时间了，你不能再跟别人有约了哦。',
    );
    await era.printAndWait(
      '原本还没有任何计划的明年，在这一刻增加了和里见光钻一起过圣诞节的约定。',
    );
    await dictus.say_and_wait('那我们差不多该吃蛋糕了──');
    await tannhauser.say_and_wait('啊！？蛋糕……我忘了买了！！');
    await era.printAndWait(
      `${me.name} 和里见光钻一起出门去买蛋糕。然而附近店家的蛋糕都已经卖完了，只好决定去更远的地方购买。`,
    );
    await daiya.say_and_wait('灯饰好漂亮喔。');
    await daiya.say_and_wait(
      '呵呵，像这样走在圣诞节的街道上，也是我一直很向往的电影情节呢。',
    );
    await daiya.say_and_wait(
      '啊，我这么说并不是对父亲他们总是做慈善活动的事情感到不满哦。',
    );
    await daiya.say_and_wait(
      '一起做慈善活动的过程让我学到了很多事情，我也是很自豪地在帮忙的。',
    );
    await daiya.say_and_wait('只是，觉得像这样子的感觉也很不错……');
    era.printButton('「我们慢慢走吧」', 1);
    await era.input();
    await daiya.say_and_wait('可是……大家都还在等蛋糕……');
    era.printButton('「她们还有很多零食可以吃，没关系的」', 1);
    await era.input();
    await daiya.say_and_wait('呵呵呵，说得也是。零食真的多到吃不完的地步呢！');
    await daiya.say_and_wait('……那，我们就慢慢走吧。');
    await daiya.say_and_wait('圣诞节的街道，给人一种像是在外国的感觉呢。');
    await daiya.say_and_wait('这让我……想起以前出国旅行时走过的街道。');
    await daiya.say_and_wait('……我……也想和训练员一起走在异国的街道上呢。');
    await daiya.say_and_wait('训练员呢？');
    await daiya.say_and_wait(
      '当初你答应做我签约训练员的时候，其实有点像是被我强迫的感觉。',
    );
    await daiya.say_and_wait('所以，这次我想好好确认训练员内心的想法。');
    await daiya.say_and_wait('你愿意跟着我一起去国外吗？');
    era.printButton('「只要你愿意，我就跟你一起去」', 1);
    await era.input();
    await daiya.say_and_wait('……嘿嘿嘿。');
    await daiya.say_and_wait('太好了！训练员，今后也要继续麻烦你了！');
    await daiya.say_and_wait('到时候我们要一起在外国的街道上漫步喔！');
    await era.printAndWait(
      `看着充满异国风情的圣诞节街道。${me.name} 和里见光钻定下了一个不远将来的约定。`,
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
    era.set('cflag:67:节日事件标记', 0);
  };
};
