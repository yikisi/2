const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-67');
const { location_enum } = require('#/data/locations');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (
    era.get('flag:当前互动角色') !== 67 ||
    era.get('flag:当前位置') !== location_enum.gate
  ) {
    add_event(hook.hook, event_object);
    return;
  }
  const daiya = get_chara_talk(67),
    edu_marks = new DaiyaEduMarks(),
    me = get_chara_talk(0);
  let wait_flag = false;
  if (edu_marks.street_adv === 1) {
    edu_marks.street_adv++;
    await print_event_name('巷子大冒险', daiya);
    const jordan = get_chara_talk(48);
    await era.printAndWait(`${me.name} 和里见光钻一起外出的回程路上──`);
    await daiya.say_and_wait('哎呀？哎呀哎呀哎呀！？');
    await daiya.say_and_wait(
      '训练员，我发现不得了的东西了！那边竟然有一条“小路”呢！',
    );
    await daiya.say_and_wait(
      '哇啊～之前都没有注意到耶！那条路……不知道会通到哪里去呢！',
    );
    await era.printAndWait(
      `${me.name} 还来不及阻止，里见光钻就已经冲向小路了……`,
    );
    await daiya.say_and_wait(
      '呵呵呵，是个感觉有点怪怪的地方呢。闹鬼都不奇怪的地方……',
    );
    await jordan.say_and_wait('你说的～是像这样的鬼吗！？');
    await daiya.say_and_wait('哎呀，是佐敦呀。你好♪');
    await jordan.say_and_wait(
      '喂，你居然一丁点都没有被吓到？你不尴尬，尴尬的就是我耶～！',
    );
    await jordan.say_and_wait('是说，你们在这里做什么啊？');
    await daiya.say_and_wait(
      '我因为想知道这条小路会通到什么地方……所以现在正在冒险呢。',
    );
    await daiya.say_and_wait(
      '这里的景色特别不同，像是进到不同的世界……呵呵呵，真的让我又兴奋又期待♪',
    );
    await jordan.say_and_wait('这样喔～那要一起走吗？我可以带你去一个好地方！');
    await jordan.say_and_wait(
      '……然后啊～这家的狗有够可怕的喔！跟它对到眼的瞬间就会开始狂叫！',
    );
    await daiya.say_and_wait(
      '是只很有活力的狗狗呢！不知道是怎样的一只狗狗……？',
    );
    await era.printAndWait('大狗「汪汪！汪！！」');
    await daiya.say_and_wait('哇，真的耶！呵呵呵，好可爱喔～！');
    await jordan.say_and_wait(
      '你玩得还真是开心耶～！要不要顺便也去一些会让人开心的店逛逛？',
    );
    await daiya.say_and_wait('哎呀，听起来很有趣──');
    await daiya.say_and_wait('──哎呀？那边的巷子感觉特别昏暗呢。');
    await jordan.say_and_wait('喂，等一下！那边不能去！');
    era.printButton('「那边有什么问题吗？」', 1);
    await era.input();
    await jordan.say_and_wait(
      '啊～就是～一些坏坏的姐姐们常常聚在那个地方之类的？',
    );
    await jordan.say_and_wait(
      '虽然她们也没有对我做过什么事～但也没必要自己往那边去嘛，对吧？',
    );
    await jordan.say_and_wait('所以啰，小见，我们不走那边，改走这边──');
    era.printButton('「已经不见了！？」', 1);
    await era.input();
    await jordan.say_and_wait('完了！？喂，小见──！');
    await daiya.say_and_wait(
      '哎呀，你是不良少女吗……？我有在连续剧中看过，那个……',
    );
    await era.printAndWait('不良少女「啥？你说什么！？」');
    await daiya.say_and_wait('啊，我叫做里见光钻。有些问题想要请教。');
    await daiya.say_and_wait(
      '说到不良少女，我特别喜欢会在雨天帮助淋湿小狗的桥段……你也有那样的经验吗？',
    );
    await jordan.say_and_wait('喂喂喂！暂停暂停！');
    await jordan.say_and_wait('哎呀，真不好意思耶！我们现在立刻就离开～！');
    await daiya.say_and_wait('咦？啊，可是……！');
    era.printButton('「好了，我们快点回去吧！」', 1);
    era.printButton('「为突然搭话的事情先道歉吧」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('知、知道了？');
      await daiya.say_and_wait('那么我们先失陪了。再见♪');
      await daiya.say_and_wait(
        '啊啊，不良少女……要是能再多聊几句的话……真可惜。',
      );
      await jordan.say_and_wait('不是吧，你都不会害怕的喔！？');
      await daiya.say_and_wait(
        '我没有觉得害怕呀？连续剧里面的不良少女都会帮助流浪的小狗，心地都很善良的呢♪',
      );
      await jordan.say_and_wait('小见真是疯狂耶～！');
      await era.printAndWait(
        `因为里见光钻看起来很落寞的样子，所以 ${me.name} 也不忍心再多责备。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
    } else {
      await daiya.say_and_wait('我那么做的确是有失礼仪……抱歉，是我失礼了。');
      await era.printAndWait(
        '不良少女「啧，反正我也没兴趣跟一般人吵架。以后自己注意一点啦。」',
      );
      await daiya.say_and_wait(
        '谢谢你！原来不良少女都是讲道理的硬派个性，这些都是真的呢！',
      );
      await era.printAndWait(
        '不良少女「哦？看来你好像很懂嘛。嘿嘿，要不要一起去喝饮料啊？」',
      );
      await daiya.say_and_wait('哎呀，真的可以吗？请一定要给我这个机会♪');
      await jordan.say_and_wait('真假？小见也太强了吧！？');
      await era.printAndWait('后来，里见光钻充满好奇地听着不良少女说话。');
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
    }
  } else if (edu_marks.shopping === 1) {
    edu_marks.shopping++;
    await print_event_name('在便利商店前要特别小心', daiya);
    const gold_ship = get_chara_talk(7);
    const festa = get_chara_talk(49);
    const sirius = get_chara_talk(70);
    const coffee = get_chara_talk(25);
    const condor_pasa = get_chara_talk(14);
    await era.printAndWait(
      `${
        me.name
      } 和里见光钻一起外出后回程的路上，经过便利商店时……看见两名赛${daiya.get_uma_sex_title()}聚在那里。`,
    );
    await gold_ship.say_and_wait(
      '可恶！又──是红鹤子喔！都已经第五张了耶……！？',
    );
    await festa.say_and_wait('我也是……又抽到滚蕃薯虫了。');
    await daiya.say_and_wait(
      '哎呀，是黄金船跟中山吗？她们怎么会在这里呢？──我来去问问看！',
    );
    await era.printAndWait(
      `有种不好的预感……${me.name} 一边这么想着，一边追上里见光钻的脚步。`,
    );
    await daiya.say_and_wait('你们好。你们两位在做什么啊？');
    await gold_ship.say_and_wait(
      '喔，是里见啊！我们刚才买了大量的“惊人生物巧克力”啦！',
    );
    await gold_ship.say_and_wait(
      '但我们一直没有抽到最稀有的那张菊石骑士……就只好一直在这边吃巧克力。',
    );
    await daiya.say_and_wait(
      '哎呀，意思是在尝试新的挑战吗？感觉很有趣呢！我也可以参加吗？',
    );
    await festa.say_and_wait(
      '哈哈，真是个好奇心旺盛的大小姐呢。……好啊，你想要挑哪一包？选吧。',
    );
    await daiya.say_and_wait('我想想喔，训练员觉得哪一包比较好？');
    era.printButton('「包装漂亮的」', 1);
    era.printButton('「包装皱巴巴的」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait(
        '我也觉得挑那个比较好呢！那就来拆开看看吧，要开啰──',
      );
      await daiya.say_and_wait('开了──！');
      await daiya.say_and_wait('这个是──呃，无齿翼龙……？');
      await gold_ship.say_and_wait(
        '──无齿翼龙首领！！！！唔喔喔，是无齿翼龙首领耶！！',
      );
      await festa.say_and_wait(
        '是喔，抽到了黄金级的喔……运气还算可以嘛，里见。',
      );
      await daiya.say_and_wait(
        '哎呀，所以我是抽到好东西了吗！？那我想要拆更多包看看呢！',
      );
      await gold_ship.say_and_wait(
        '好啊，你拆吧！你拆开拿出卡片后就丢过来我这，巧克力由我来负责吃完！',
      );
      await daiya.say_and_wait('是！那我要开始了──');
      await condor_pasa.print_and_wait('？？？「请先等一下！」');
      await daiya.say_and_wait('？');
      await condor_pasa.say_and_wait(
        '这个“惊人生物巧克力”，我本来也打算要买的！！',
      );
      await condor_pasa.say_and_wait(
        '结果全都卖完了……是黄金船跟中山前辈搞的鬼吧！？',
      );
      await gold_ship.say_and_wait(
        '小鹰怎么了啦，怎么火气这么大……真拿你没办法耶。不然──',
      );
      await gold_ship.say_and_wait(
        '──我们来比赛吧！你赢了，我就把无齿翼龙首领送你！但你输了的话就只能拿到眠眠蝉喔！！',
      );
      await condor_pasa.say_and_wait(
        '好啊！我接受挑战！我一定会把无齿翼龙首领给赢到手的！',
      );
      await condor_pasa.say_and_wait('那么，我们就来堂堂正正地──！！');
      await era.printAndWait([
        gold_ship.get_colored_name(),
        '&',
        condor_pasa.get_colored_name(),
        '「──决一场胜负吧！！」',
      ]);
      await daiya.say_and_wait('嗯──好像演变成不得了的局面了呢。训练员。');
      era.printButton('「是啊……」', 1);
      await era.input();
      await coffee.print_and_wait(
        '？？？「──不用担心。放着不管，她们迟早是会玩累的……」',
      );
      await daiya.say_and_wait('茶座！你是来买东西的吗？');
      await coffee.say_and_wait(
        '是啊，因为常去的咖啡厅刚好没开……所以才来这里……',
      );
      await coffee.say_and_wait('不过──我还是去别间咖啡厅好了……那我先走了……');
      await daiya.say_and_wait(
        '哎呀，你有那么多咖啡厅的口袋名单呀。不介意的话，我也可以一起去吗！？',
      );
      await era.printAndWait(
        '比起就发生在身边的战争，里见光钻更优先于自己的好奇心……我算是又更清楚见识到了她的单纯。',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    } else {
      await daiya.say_and_wait(
        '特意要选这样的挑战是吧！感觉很有趣，那我要拆开啰──',
      );
      await era.printAndWait(
        '然而，在里见光钻正要拆开包装的同时──突然吹来一阵强风，把巧克力袋吹到了某人的脚边。',
      );
      await sirius.print_and_wait('？？？「嗯……这什么？」');
      await sirius.say_and_wait(
        '……真是的，原来是零食的袋子喔。你们是在这里办什么同乐会吗？',
      );
      await festa.say_and_wait('呵呵……你来得正好。你要不要也加入啊？天狼星？');
      await sirius.say_and_wait(
        '加入是指用零食决胜负吗？喂喂，都几岁的人了，还为这种无聊事──',
      );
      await sirius.say_and_wait('──嗯？');
      await sirius.say_and_wait(
        '……喔──天真无邪的大小姐啊。对手是你的话，说不定会很有趣呢。',
      );
      await daiya.say_and_wait('？意思是要跟我对决吗？');
      await sirius.say_and_wait(
        '是啊。刚才吹到我脚边的那包如果装着好东西，就算你赢。',
      );
      await sirius.say_and_wait(
        '反之，里面东西不好的话，就是你输了。你就要听从我一个要求。──怎么样？',
      );
      era.printButton('（什么……！？）', 1);
      await era.input();
      await daiya.say_and_wait(
        '呵呵，感觉很有趣呢。如果是这种条件的话，那我是绝对不能输的♪',
      );
      await daiya.say_and_wait('我接受挑战！');
      await daiya.say_and_wait('那么──！');
      await era.printAndWait([
        gold_ship.get_colored_name(),
        '&',
        festa.get_colored_name(),
        '「……！！」',
      ]);
      await era.printAndWait([
        gold_ship.get_colored_name(),
        '&',
        festa.get_colored_name(),
        '「',
        { color: gold_ship.color, content: '隐藏角色！！' },
        { color: festa.color, content: '是剑五龙……！！' },
        '」',
      ]);
      await era.printAndWait(
        '看到卡片的瞬间，黄金船和中山庆典两人立刻出现激动的反应……！！',
      );
      await sirius.say_and_wait(
        '！？隐藏角色……？意思是虽不是最好但也不算坏啰？',
      );
      await sirius.say_and_wait(
        '……受不了，这场对决只能不算数了。不过呢，虽然没能让你吞败仗，却也确实看了一场好戏。',
      );
      await daiya.say_and_wait('呵呵♪那么也就是说，胜负就留到下一次了对吧？');
      await sirius.say_and_wait('……哦？');
      await daiya.say_and_wait(
        '因为我们没有分出胜负嘛。请再给我一个挑战你的机会吧！',
      );
      await sirius.say_and_wait(
        '呵呵，哈哈哈！难得你顺利逃过一劫了，居然还要主动犯险吗！？',
      );
      await sirius.say_and_wait(
        '……很好。那我就站在顶点等着你。等到你爬到我的位置那天。',
      );
      await daiya.say_and_wait('呵呵呵♪这么一来，我又多了一个目标了呢。');
      await era.printAndWait(
        `里见光钻连面对前辈的时候，也是无所畏惧地积极前进。${me.name} 似乎又重新明白${daiya.sex}有多坚强。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    }
  } else if (edu_marks.in_colorful === 1) {
    edu_marks.in_colorful++;
    await print_event_name('在缤纷色彩之中', daiya);
    const maya = get_chara_talk(24);
    const creek = get_chara_talk(45);
    await era.printAndWait(
      `${me.name} 和里见光钻一起外出后的回程路上，来到购物中心的时候──`,
    );
    await daiya.say_and_wait(
      '这么多店家，看得我眼花撩乱呢。总有一天，我一定要把每一间店都去过一遍──哎呀？',
    );
    await maya.say_and_wait('……欸欸，那这个怎么样？成熟吗？还是说这一个比较──');
    await maya.say_and_wait('啊！是小见☆嗨～！');
    await daiya.say_and_wait('是重炮跟小海湾！你们来买东西呀？');
    await maya.say_and_wait(
      '嘿嘿嘿，对呀～我请小海湾来帮忙挑选成熟风格的衣服♪',
    );
    await maya.say_and_wait('但一直选不出来。因为人家就是会忍不住全都想要嘛☆');
    await creek.say_and_wait(
      '呵呵，因为Maya穿什么都很可爱，所以我也一直挑不出来呢～',
    );
    await daiya.say_and_wait(
      '哎呀！那可以让我一起帮忙挑吗？我想要挑战找到适合重炮的衣服！',
    );
    await era.printAndWait('于是，就这样决定要帮重炮寻找合适的衣服。');
    await daiya.say_and_wait(
      '嗯嗯～比我想像中来得困难呢。我挑自己的衣服都很快的说……',
    );
    await daiya.say_and_wait(
      '果然还是因为跟挑选自己东西的时候，条件跟基准都不一样的关系吧。',
    );
    await daiya.say_and_wait('训练员，你觉得怎么挑会比较好呢？');
    era.printButton('「以成熟为优先考量」', 1);
    era.printButton('「以适合重炮为优先考量」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('原来如此，先决定一个方向是很重要的呢！');
      await daiya.say_and_wait('那我再重新思考一次！……呵呵，该怎么办好呢♪');
      await daiya.say_and_wait(
        '决定好了！重炮，像那样的组合，你觉得怎么样呢？',
      );
      await era.printAndWait(
        '里见光钻用稳重的配色，搭配出一套穿搭，要给重炮尝试。',
      );
      await maya.say_and_wait(
        '哇啊，白色的上衣配海军蓝的裙子！经典高雅又成熟的感觉～！',
      );
      await maya.say_and_wait(
        '因为裙子是高腰的，脚也会看起来更长、更性感的感觉呢♪',
      );
      await maya.say_and_wait('原来这样的组合也可以呀～！我学到一课了☆');
      await daiya.say_and_wait('呵呵，能让你满意真是太好了。');
      await maya.say_and_wait('不过，小见为什么会知道这种成熟的穿搭风格呢？');
      await daiya.say_and_wait(
        '这个嘛……应该是因为我经常以里见家一员的身份出席很多场合的关系。',
      );
      await daiya.say_and_wait('尤其来参加社交派对的人，大多又是成年人居多。');
      await daiya.say_and_wait(
        '为了站在大家身旁不显得逊色，就免不得会做一些比较经典色系的搭配。',
      );
      await maya.say_and_wait('哇啊～社交派对听起来就好成熟的感觉！！');
      await maya.say_and_wait(
        '欸欸，我有一天也能以一个成熟女人的身份，去参加社交派对吗？',
      );
      await daiya.say_and_wait(
        `当然可以！身为选手的赛${daiya.get_uma_sex_title()}是经常受邀参加宴会的！`,
      );
      await maya.say_and_wait(
        '真的吗！？那人家要赶快为了社交派对做准备才行呢☆',
      );
      await maya.say_and_wait('欸，小见，可以教我更多成熟的穿搭组合吗～♪');
      await daiya.say_and_wait('好的，当然可以！交给我吧！');
      await creek.say_and_wait('呵呵，你们两个都好可爱喔～聊得这么开心的模样♪');
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
    } else {
      await daiya.say_and_wait(
        '原来如此……！毕竟不适合本人的话就没有意义了嘛！',
      );
      await daiya.say_and_wait('嗯嗯……那么，我先稍微思考一下。呵呵♪');
      await daiya.say_and_wait(
        '决定好了！重炮，像那样的组合，你觉得怎么样呢？',
      );
      await era.printAndWait(
        '里见光钻用可爱及活泼的风格，搭配出一套穿搭，要给重炮尝试。',
      );
      await daiya.say_and_wait('我觉得荷叶边非常地可爱，你觉得喜欢吗？');
      await maya.say_and_wait(
        '哇啊，看起来真的超可爱的呢～！袖子上的蝴蝶结像是亮点一样，感觉很棒耶☆',
      );
      await daiya.say_and_wait('没有错！你竟然注意到了这个重点！');
      await daiya.say_and_wait(
        '蝴蝶结的大小刚好在不妨碍到袖口的程度，刚好变成一个恰恰好的亮点♪',
      );
      await maya.say_and_wait(
        '嗯嗯，裤子也是偏短的，刚好是人家喜欢的风格，又很可爱☆',
      );
      await daiya.say_and_wait('还有呀，如果要搭配鞋子的话──');
      await maya.say_and_wait('──啊，人家知道了！！要挑短版的靴子，对不对？');
      await daiya.say_and_wait('没错！就是这样！不愧是重炮，懂得很多呢！');
      await daiya.say_and_wait(
        '因为裤子是短版的，靴子也挑短版的话，就会让脚显得更长的感觉！',
      );
      await maya.say_and_wait('嗯嗯，我懂～！而且露出长腿还会有种性感的感觉。');
      await maya.say_and_wait(
        '我跟小见的眼光好像很合呢～☆欸欸，我们再一起找出更多的搭配吧！',
      );
      await daiya.say_and_wait('好的，我很乐意！那我们就从那边依序逛过去好了♪');
      await creek.say_and_wait('呵呵，你们两个都好可爱喔～聊得这么开心的模样♪');
      await daiya.say_and_wait(
        '训练员、小海湾！不嫌弃的话，你们也一起来吧～？',
      );
      era.printButton('「嗯，我现在就过去」', 1);
      await era.input();
      await era.printAndWait(
        `后来，${me.get_couple_title()} 四个人就这样一起度过了开心的挑选衣服时间。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    }
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};
