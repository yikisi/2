const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,string,string,{wait:boolean},function):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = async (flash, your_name, callname, flags, cb) => {
    if (
      (era.get('cflag:37:位置') && era.get('cflag:0:位置')) !==
      location_enum.beach
    ) {
      cb();
      return;
    }
    await print_event_name('交心之谈 · 一', flash);
    await era.printAndWait(
      '所谓合宿，是指特雷森学院为主导，以提高实力为目的，地点位于海边的夏季专属活动。',
    );
    await flash.say_and_wait(
      '这就是日本的大海啊，和德国那边，果然有不小的区别呢。',
    );
    await era.printAndWait(
      '月初，从学院的专用公交上下车，望着面前满眼的蔚蓝，荣进闪耀赞叹道。',
    );
    era.printButton('「想去玩吗？」', 1);
    await era.input();
    await flash.say_and_wait('诶，不用了。');
    await era.printAndWait(
      `不过下一秒，在听到 ${your_name} 的提议后，${flash.sex}摇了摇头。`,
    );
    await flash.say_and_wait(
      '虽然是很令人心动的选择，但目前还是要以训练为第一优先级。',
    );
    await era.printAndWait('说着，荣进闪耀低下头，看向自己的双腿。');
    await flash.say_and_wait(
      '菊花赏的开赛已经迫在眉睫，为了获胜，必须要抓紧每一个机会才行。',
    );
    await era.printAndWait(
      `经过前面一段时间的修养，${flash.sex}的病情相较于最开始，已经有了大大缓解。`,
    );
    await era.printAndWait('托此的福，荣进闪耀的心情也开朗了不少。');
    await era.printAndWait(
      `认为已经规划好的计划终于不会被打乱的${flash.sex}又准备以菊花赏为目的。`,
    );
    era.printButton('「关于这个。」', 1);
    await era.input();
    await era.printAndWait(
      `而见到${flash.sex}这份热情的模样，${your_name} 想，也该到时候了。`,
    );
    era.printButton('「我有话想对你说。」', 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `其实站在训练员的视角来讲，荣进闪耀现在的状态，对 ${your_name} 而言有些尴尬。`,
    );
    await era.printAndWait(
      `明面上，${flash.sex}的康复，是不争的事实，${your_name} 当然也乐意看到${flash.sex}肆意驰骋于赛场的模样。`,
    );
    await flash.say_and_wait('是关于菊花赏的事情吗？');
    era.printButton('「嗯。」', 1);
    await era.input();
    await era.printAndWait(
      `但是，用谨慎的方式去思考，在肌肉内根深蒂固的疲惫不是那么容易就可以消除的。${your_name} 无法保证备战比赛，不断高强度训练的过程中，病痛不会复发。`,
    );
    await flash.say_and_wait(
      '……您在那天承诺过，如果能够在菊花赏之前康复的话，便同意让我出赛。',
    );
    era.printButton('「是的。」', 1);
    await era.input();
    await era.printAndWait(
      `换句话说，以 ${your_name} 的视角来看，不再去考虑菊花赏，而是将目标比赛定为更之后的日本杯或者有马纪念，并借此利用多出来的空档期来彻底解决身体的隐患才是最好的。`,
    );
    await flash.say_and_wait('既然这样的话，那现在正是积累优势的时候。');
    await era.printAndWait(
      `合宿旅馆内，似乎是意料到 ${your_name} 接下来会说些什么，荣进闪耀的态度很是坚决。`,
    );
    era.printButton('「你误会我的意思了，我并不是来劝阻你的。」', 1);
    await era.input();
    await flash.say_and_wait('诶。');
    await era.printAndWait(`不过这回，${flash.sex}猜错了。`);
    era.printButton(
      '「虽然得承认，菊花赏的参加与否，对我而言是两难的抉择。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `接下来的时间，${your_name} 跟${flash.sex}陈述了自己的苦衷。坦白了那份介于感性与理性之间，既希望${flash.sex}能达成自己的梦想，又不愿意看到${flash.sex}在这过程中受伤的矛盾心理。`,
    );
    await flash.say_and_wait('………');
    await era.printAndWait(
      `毫无疑问，荣进闪耀是个聪慧的孩子，${flash.sex}当然能理解 ${your_name} 的处境，就像 ${your_name} 能理解${flash.sex}的一样。`,
    );
    era.printButton(
      '「在得知你的身体情况之后，我一直在犹豫不决。但也许，这种踌躇才是最大的错误。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `说到这里，${your_name} 伸出手，将那枚代表相遇的勋章递到${flash.sex}的眼前。`,
    );
    await flash.say_and_wait(`${callname}……`);
    await era.printAndWait(
      `荣进闪耀低下头，看了眼这枚勋章，又抬起头，看了眼 ${your_name}。`,
    );
    await flash.say_and_wait('………');
    await era.printAndWait(`${flash.sex}张了张嘴，显得欲言又止。`);
    era.printButton(
      '「我想，如果自己无法做出决定的话，那么干脆就交给你来做。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `${your_name} 则拍了拍${flash.sex}的肩膀，脸上浮现出一丝微笑。`,
    );
    await era.printAndWait(
      `如果关于赛${flash.get_uma_sex_title()}的问题，以训练员的视角无法给出答案的话，那么不妨就交由当事人自己来处理。`,
    );
    await era.printAndWait('无需顾虑，信任是互相的，一心同体即是如此。');
    await era.printAndWait('也无需迟疑，这并非是一种逃避，因为——');
    era.printButton('「无论你做出何种选择，我都会与你一起承担到底。」', 1);
    await era.input();
    await flash.say_and_wait('！');
    await era.printAndWait(
      `昏黄的房间内，来自异国的${flash.get_teen_sex_title()}因为 ${your_name} 的话而陷入短暂的僵直。`,
    );
    await era.printAndWait(
      `周旁的时间仿若停滞，除了那抹转瞬即逝的绯红，${your_name} 没有看到${flash.sex}脸上的表情产生任何波动。`,
    );
    await era.printAndWait(
      `不过在此期间，${flash.sex}的那双清澈透明的湛蓝色瞳孔一直沉默地注视着 ${your_name}，眼神中似有浮光流动。`,
    );
    await flash.say_and_wait('……我……');
    await era.printAndWait('直至十几秒之后，荣进闪耀才再次开口。');
    await flash.say_and_wait(
      '……也许您说的对，让我自己来决定这条道路是对双方都有利的选择。',
    );
    await era.printAndWait(
      `不过与之前的坚决相比，此时${flash.sex}语气中所蕴涵的态度，却是有些游移不定。`,
    );
    await flash.say_and_wait('所以，请再给我一些时间，我需要去认真思考一番。');
    await era.printAndWait(
      `说完，${flash.sex}朝 ${your_name} 深深，深深地鞠躬。`,
    );
    await flash.say_and_wait(
      '我会在合宿结束那天给您答复，这段期间内，就按照原定的计划执行吧。',
    );
    await era.printAndWait(
      `待起身之后，${your_name} 发现，${flash.sex}向 ${your_name} 露出了带着甜蜜的微笑。`,
    );
    era.println();
    flags.wait ||= sys_like_chara(37, 0, 30);
  };

  handlers[95 + 1] = async (flash, your_name, callname, flags) => {
    const fuji = get_chara_talk(5);
    await print_event_name('初诣', flash);
    await era.printAndWait('又是一年春来到。');
    await era.printAndWait('正月，初诣。');
    await say_by_passer_by_and_wait(
      `主持人`,
      `最强世代突入！？知名赛${flash.get_uma_sex_title()}的再度崛起！`,
    );
    await era.printAndWait(
      `${your_name} 和荣进闪耀本应该安稳度过的上午，却被电视中一则突如其来的新闻打破了宁静。`,
    );
    await say_by_passer_by_and_wait(
      `主持人`,
      `前段时间久违的于日本杯和有马纪念中再度登场的知名赛${flash.get_uma_sex_title()}们，在刚刚召开了记者会。`,
    );
    await say_by_passer_by_and_wait(
      `主持人`,
      `这场会议中，${flash.sex}们都明确表示——将陆续参加今年一整年的G1比赛！！！`,
    );
    await say_by_passer_by_and_wait(
      '主持人',
      '考虑到在场的全员都是在各自的领域中留下巨大成就的实力高超者，难以想象这会给今年的闪光系列赛产生怎样巨大的动荡。',
    );
    await say_by_passer_by_and_wait('主持人', '接下来让我们把镜头给现场记者——');
    await say_by_passer_by_and_wait(
      `记者`,
      `富士奇石${flash.get_adult_sex_title()}，请问在这个时间点表明要出战接下来的G1级重赏是出于什么意图呢？`,
    );
    await fuji.say_and_wait('嗯……具体的意图很难明说，是为了成为『高墙』吧。');
    await say_by_passer_by_and_wait('记者', '高墙？');
    await fuji.say_and_wait('为了能成为后辈面前的高墙，所以我们才会前来参赛。');
    await fuji.say_and_wait(
      `因此，来大胆挑战吧。我在这里，等待着 ${your_name} 哦。`,
    );
    await era.printAndWait('“哔。”');
    await era.printAndWait(
      '屏幕中的画面在富士奇石对摄像头伸手示意的这一刻定格。',
    );
    await flash.say_and_wait('……高墙，吗？');
    await era.printAndWait('而荣进闪耀，则在看完这则新闻后，微微皱眉。');
    await flash.say_and_wait(
      '虽然我并不畏惧，但为何要在这种时候做出这个决定呢？只是为了阻挡后辈前进的道路？',
    );
    era.printButton('「应该是『试炼』的意思吧？」', 1);
    await era.input();
    await era.printAndWait(
      `不过 ${your_name}，却是敏锐的捕捉到了富士奇石最后那段话中的含义。`,
    );
    await flash.say_and_wait('试炼？');
    await era.printAndWait(
      `听到 ${your_name} 的话，荣进闪耀歪了歪头，显得有些不解。`,
    );
    era.printButton(
      '「高墙固然起到阻挡的作用，但有能力的人，也可以将其翻越。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `${your_name} 开口，为${flash.sex}简单解释起自己的看法。`,
    );
    await flash.say_and_wait(
      `原来如此，这么说富士奇石同学的本意是为了让后辈在挑战${flash.sex}们的路上得到成长啊。`,
    );
    await era.printAndWait('荣进闪耀点了点头，露出了然的神色。');
    era.printButton('「就以日本杯和有马纪念时的态度面对吧。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！');
    await era.printAndWait(`下一秒，${flash.sex}充满自信地回应道。`);
    await era.printAndWait('“叮叮叮——”');
    await flash.say_and_wait('？');
    await era.printAndWait(
      `然后也就是在这时，代表联络的响铃突然自${flash.sex}的手机中响起。`,
    );
    await flash.say_and_wait('……母亲的来电？');
    era.drawLine();
    await flash.say_and_wait('………');
    await era.printAndWait('闪耀和父母的通话结束了。');
    era.printButton('「怎么了？」', 1);
    await era.input();
    await era.printAndWait(
      `而放下手机的${flash.sex}，一改刚才的轻松自在，显得很是严肃。`,
    );
    await flash.say_and_wait(
      '父亲和母亲说，会在明年的十月后半，来日本观看我的比赛。',
    );
    era.printButton('「十月后半？」', 1);
    await era.input();
    await flash.say_and_wait(
      '嗯，根据计划上已经决定的，位于那段时间的比赛，也就是秋季天皇赏。',
    );
    era.printButton('「比预期的要快啊。」', 1);
    await era.input();
    await era.printAndWait(
      `按照荣进闪耀原先的想法，是准备在日本这边取得各项G1重赏的荣誉之后，再回到家乡，向父母证明自己的成长。`,
    );
    await flash.say_and_wait(
      '我也是这么认为的，没有想到父母会有时间亲自前往日本，明明他们平日中都是非常忙碌的人才对。',
    );
    era.printButton(
      `「肯定是无论如何都想看到自己${
        flash.sex_code - 1 ? '女儿' : '儿子'
      }在赛场上奔跑的英姿吧。」`,
      1,
    );
    await era.input();
    await flash.say_and_wait(
      '呵呵～嘛，不过换个思路想，这也未尝不是一件好事。',
    );
    await era.printAndWait(
      '说着，荣进闪耀拿出橙色记号笔，在计划书上进行涂改。',
    );
    await flash.say_and_wait(
      '毕竟还有什么能比在父母的亲自注视下取得比赛的冠军这件事更值得让他们骄傲的呢?',
    );
    await era.printAndWait(
      `${your_name} 看到${flash.sex}在秋季天皇赏这个出走预定旁画上好几个圈作为重点。`,
    );
    era.printButton('「说的是呢。」', 1);
    await era.input();
    await era.printAndWait(`${your_name} 点头，同意${flash.sex}的看法。`);
    await era.printAndWait(
      `只要能赢下秋季天皇赏的话，荣进闪耀的梦想就可以实现，而这正是 ${your_name} 作为训练员存在的目的。`,
    );
    await era.printAndWait(
      `那么，为了让${flash.sex}在得到这枚盾徽的过程更加顺利，${your_name} 决定——`,
    );
    era.printButton('「去神社祈福吧！」', 1);
    era.printButton(`「需要更改未来的计划吗？」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        '祈福，最开始是人们向神明表达自己的心愿，希望得到神明庇佑的一种仪式。',
      );
      await era.printAndWait(
        '而随着时代的发展，这一行为，慢慢被赋予了其他寓意。',
      );
      await era.printAndWait(
        '时至今日，祈福，早已变为了人们向往更好生活这一情感的载体。',
      );
      await flash.say_and_wait(
        '唔，虽然我并不认为这对比赛结果有实质性的帮助……',
      );
      await era.printAndWait(
        `听到 ${your_name} 的建议，荣进闪耀在思索片刻后，缓缓点头。`,
      );
      await flash.say_and_wait(
        '不过您说得对，希望自己可以得到理想的未来这种想法总是好的。',
      );
      await era.printAndWait(
        `说到这里，${your_name} 看见${flash.sex}将面前的计划书合拢，随后起身。`,
      );
      await flash.say_and_wait('而且今天是初诣，神社那边想必会很热闹吧。');
      era.printButton('「说不定附近还会有祭典哦。」', 1);
      await era.input();
      await flash.say_and_wait('祭典啊……呵呵～');
      await era.printAndWait('荣进闪耀轻笑几声，显然是被勾起了兴趣。');
      await flash.say_and_wait(
        `那就当作是为接下来一整年的计划献上祝福以及年假期间的娱乐活动好了。我们出发吧，${callname}。`,
      );
      await era.printAndWait(
        `说完，${flash.sex}拉起 ${your_name} 的手，示意一起向门外走去。`,
      );
      era.println();
      flags.wait ||= get_attr_and_print_in_event(
        37,
        new Array(5).fill(20),
        0,
        JSON.parse('{"体力":500}'),
      );
    } else {
      await era.printAndWait(
        '虽然不是对荣进闪耀目前的实力没有信心，但是单纯从达成目标这个角度考虑的话。',
      );
      await era.printAndWait(
        `是不是相较于一直要跟前辈们进行高强度对战从而使得身体容易产生疲劳的G1重赏而言，氛围较为缓和的G2甚至G3比赛更适合${flash.sex}在维持状态的同时保存实力。`,
      );
      await flash.say_and_wait('唔，虽然客观来讲是个不错的选择，不过……');
      await era.printAndWait(
        `${your_name} 将这个想法讲述给荣进闪耀听，${flash.sex}在思索片刻后摇了摇头。`,
      );
      await flash.say_and_wait(
        `想来我的父母是肯定不希望自己的${
          flash.sex_code - 1 ? '女儿' : '儿子'
        }通过这种取巧的方法来赢下胜利的。`,
      );
      await era.printAndWait(`说着，${flash.sex}将面前的计划本合拢，认真道。`);
      await flash.say_and_wait(
        '毕竟所谓冠军，只有堂堂正正的夺得才有其意义所在啊。',
      );
      await flash.say_and_wait(
        '是挑战的话就去迎接，是高墙的话就去跨越，唯有以这种方式实现的梦想，才能问心无愧。',
      );
      era.printButton('「还真是富有骑士精神的想法啊。」', 1);
      await era.input();
      await era.printAndWait(
        `看到${flash.sex}的这种态度，${your_name} 不由得感叹一句。`,
      );
      await flash.say_and_wait('呵呵～谢谢夸奖。');
      await flash.say_and_wait(
        '可能正是因为持有这种想法的缘故，所以小学时期的我才能在班级组织的戏剧表演中以骑士的身份出场吧。',
      );
      await era.printAndWait(
        `说到这里，荣进闪耀嫣然一笑。不知不觉间，${flash.sex}的神色又恢复了之前的轻松平和。`,
      );
      era.println();
      get_attr_and_print_in_event(37, undefined, 0, JSON.parse('{"体力":500}'));
      era.print([
        flash.get_colored_name(),
        ' 有了 ',
        {
          color: buff_colors[1],
          content: '[必行之事]',
        },
        ' 的觉悟！',
      ]);
      era.set('status:37:必行之事', 1);
      flags.wait = true;
    }
    era.set('cflag:37:节日事件标记', 0);
  };

  handlers[95 + 14] = async (flash) => {
    const gold_ship = get_chara_talk(7);
    const festa = get_chara_talk(49);
    await print_event_name('粉丝感谢祭', flash);
    await era.printAndWait('四月，春天的粉丝大感谢祭活动到了');
    await era.printAndWait(
      `在今天，赛${flash.get_uma_sex_title()}们会参与到多项可以和粉丝一起乐在其中的比赛中。`,
    );
    await say_by_passer_by_and_wait(
      `主持人`,
      `接下来让我们把目光转向G区的挑战者，${flash.sex}们分别是荣进闪耀、中山庆典以及黄金船。`,
    );
    await say_by_passer_by_and_wait(
      `主持人`,
      `${flash.sex}们要挑战的比赛是——粉丝搬运竞跑！`,
    );
    await say_by_passer_by_and_wait(
      `主持人`,
      `比赛的规则很简单，第一个和粉丝一起冲过终点线的赛${flash.get_uma_sex_title()}即是冠军。`,
    );
    await say_by_passer_by_and_wait(
      '主持人',
      '那么，哪一个组合会获得胜利呢，让我们拭目以待！',
    );
    await era.printAndWait(
      '此时特雷森学院的操场内，主持人激情四射的话语成功调动起了场地的氛围，让拥挤的人群陷入喧闹。',
    );
    await era.printAndWait('紧接着——');
    await gold_ship.say_and_wait('最终的赢家当然是本大爷啦！阿船命运的——');
    await era.printAndWait(
      '以迅捷的速度先发制人的黄金船随手从前排的观众中粗暴地拉出一位。',
    );
    await gold_ship.say_and_wait(`大•米•袋！就决定是你啦！`);
    await say_by_passer_by_and_wait(
      '黄金船的粉丝',
      '呜呜啊啊——居然是扛米抱？？！！好高好快好吓人！',
    );
    await festa.say_and_wait('嗯……');
    await era.printAndWait('一旁的中山庆典见此也不甘示弱。');
    await festa.say_and_wait(`喂，那边的你。`);
    await era.printAndWait(
      `只见${flash.sex}在左顾右盼之后，选择一位站在人群中间的粉丝。`,
    );
    await festa.say_and_wait('一脸时来运转的表情，过来陪我跑一下吧。');
    await say_by_passer_by_and_wait(
      '中山庆典的粉丝',
      '诶诶，哇……居然单手就把我抬起来了……好厉害！',
    );
    await flash.say_and_wait('唔……');
    await era.printAndWait(`与${flash.sex}们相比，荣进闪耀就显得仔细许多。`);
    await era.printAndWait(`${flash.sex}在喧闹的人群中观察片刻。`);
    await flash.say_and_wait('那个……能请你来协助我一臂之力吗？');
    await era.printAndWait(
      `最终，${flash.sex}选择了一位站于人群的角落，手握黑白配色旗帜的观众。`,
    );
    await say_by_passer_by_and_wait('荣进闪耀的粉丝', '诶，我……我吗？」');
    await flash.say_and_wait(
      '嗯，你的手上拿着的旗帜，是我的决胜服配色，对吗？',
    );
    await say_by_passer_by_and_wait(
      '荣进闪耀的粉丝',
      '虽……虽然是的，但我……我真的可以吗……」',
    );
    await flash.say_and_wait('那么，请容我失礼了。');
    await era.printAndWait(
      '也不知道有没有听见粉丝的这句回复，总之荣进闪耀牵起粉丝的手。',
    );
    await say_by_passer_by_and_wait('荣进闪耀的粉丝', '公，公主抱！！！」');
    await era.printAndWait(
      `在一声惊呼之中，荣进闪耀抱起这位看起来有些怯懦的粉丝，向着前方已经与${flash.sex}拉开些许差距的二人奋起直追。`,
    );
    era.drawLine();
    await say_by_passer_by_and_wait(
      '主持人',
      '比赛结束！本次粉丝搬运竞跑的冠军是——黄金船！！',
    );
    await era.printAndWait(
      '没过多久，伴随着黄金船的欢呼，这场娱乐性质的比赛便落下帷幕。',
    );
    await say_by_passer_by_and_wait(
      '主持人',
      '用令粉丝都骇然失魂的疾速跑法，粗暴地把胜利收入囊中！',
    );
    await say_by_passer_by_and_wait(
      '荣进闪耀的粉丝',
      '对不起，对不起！都怪我太碍事了……',
    );
    await era.printAndWait(
      '眼见支持的偶像没有得到冠军，荣进闪耀的粉丝连连低头，将错误都归结于自己身上。',
    );
    await flash.say_and_wait('不，你的发挥没有任何问题。');
    await era.printAndWait(
      '荣进闪耀摇了摇头，目光看向一旁的黄金船，无奈地轻叹一口气。',
    );
    await flash.say_and_wait(
      '而且像这种竞赛想要赢过那个人的话，还是很困难的吧。',
    );
    await flash.say_and_wait('毕竟——');
    await era.printAndWait(`说着，${flash.sex}脸上露出温柔笑容。`);
    await flash.say_and_wait(
      `说什么也不可能像${flash.sex}那样荒谬地对待自己珍贵的粉丝啊。`,
    );
    await say_by_passer_by_and_wait('荣进闪耀的粉丝', '！！！！');
    await era.printAndWait(
      `荣进闪耀的粉丝','荣……荣进${flash.get_adult_sex_title()}，非常感谢您！`,
    );
    await flash.say_and_wait(
      '呵呵～是我应该这么说才对哦，感谢你愿意来与我一起参加这场比赛。',
    );
    await era.printAndWait('荣进闪耀和粉丝相视一笑。');
  };

  handlers[95 + 23] = async (flash, your_name, callname, flags) => {
    await print_event_name('未来之事 · 一', flash);
    await era.printAndWait('春季三冠的第三冠——宝冢纪念，即将到来。');
    await era.printAndWait(
      '在上半年的比赛中频频出彩的荣进闪耀，自然也获得了参赛的资格。',
    );
    await era.printAndWait('不过……');
    await say_by_passer_by_and_wait(
      '医生',
      '为了身体的健康考虑，我不建议你在接下来的一段时间内参加比赛。',
    );
    await era.printAndWait(
      '……就在赛前的日常检查中，荣进闪耀的腿部却再次被确诊了隐患的存在。',
    );
    await flash.say_and_wait('………');
    await era.printAndWait(
      '虽然与去年日本德比赛后的那一次相比，程度轻微许多。',
    );
    await era.printAndWait(
      '但是为了安全起见的话，无论如何，近在眼前的宝冢纪念都是无缘去参加了。',
    );
    era.printButton('「闪耀……」', 1);
    await era.input();
    await era.printAndWait(
      `就在 ${your_name} 思索该怎么去劝说此时正满脸凝重之色地盯着病情报告的荣进闪耀放弃参赛时。`,
    );
    await flash.say_and_wait('我知道了，那就好好修养吧。');
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(`没想到，${flash.sex}却在长吐一口气后，如此说道。`);
    await flash.say_and_wait('诶，很意外我会这么说吗？');
    await era.printAndWait(
      `然后下一秒，面对 ${your_name} 因此而惊讶的表情，${flash.sex}又歪了歪头，显得有些疑惑。`,
    );
    era.printButton('「只是联想到了去年的你。」', 1);
    await era.input();
    await era.printAndWait(`见此，${your_name} 如实说出脑海中的想法。`);
    await flash.say_and_wait('呵呵～');
    await era.printAndWait('闻言，荣进闪耀轻轻一笑。');
    await flash.say_and_wait(
      '如果是去年八月份之前的我的话，确实是无论如何都无法接受事前决定好的计划被突然更改这种情况的。',
    );
    await flash.say_and_wait(
      '但是，人的性格会随着经历的不同而发生变化，不是吗？',
    );
    await era.printAndWait(
      `说着，${flash.sex}摇了摇头，目光注视着 ${your_name}。`,
    );
    await flash.say_and_wait(
      '现在的我早已明白，我的梦想并非只属于我一个人，因此凡事都要在谨慎考虑之后再做决定。',
    );
    await flash.say_and_wait('逞强，是不被允许的。');
    era.printButton('「算是一种积极的改变啊。」', 1);
    await era.input();
    await era.printAndWait(
      `听到荣进闪耀用认真的语气这么说，${your_name} 不禁感叹一声，同时又轻舒了一口气，如同放下心来一样。`,
    );
    await flash.say_and_wait(
      '更何况，今年最重要的目标，是10月份的秋季天皇赏。',
    );
    await flash.say_and_wait(
      '在此之前的一切行动都要以能保证自己用完美的状态出赛这一前提制订。',
    );
    era.printButton('「那在此之后呢？」', 1);
    await era.input();
    await flash.say_and_wait('……诶？');
    await era.printAndWait(`兴许是好奇心在作祟，${your_name} 唐突问道。`);
    await flash.say_and_wait('在此……之后？');
    await era.printAndWait(
      `在闪光系列赛上通过不断取得荣誉的行为，进而让父母以${flash.sex}为荣，这是荣进闪耀的梦想。`,
    );
    await era.printAndWait(
      `但仔细想来，${flash.sex}似乎从来没有跟 ${your_name} 说过，在达成梦想之后，${flash.sex}又想要去做些什么。`,
    );
    await flash.say_and_wait('嗯……');
    await era.printAndWait(
      `虽然 ${your_name} 相信荣进闪耀肯定对此自有安排。但是看到${flash.sex}现在这种陷入深思状态，并且还时不时抬起头打量 ${your_name} 一眼的模样。`,
    );
    await era.printAndWait(`${your_name} 又不禁有些怀疑。`);
    era.printButton('「是还没有考虑好吗？」', 1);
    await era.input();
    await flash.say_and_wait('……不，其实这是最开始就规划好的事情。');
    await era.printAndWait('荣进闪耀轻轻摇头，随即说道。');
    await flash.say_and_wait(
      '从来到日本的那一刻起，我就已经在心里做好准备。等实现了梦想，足以成为那个理想中得到认可的自己时，就回到家乡，再经过数年的学习之后，继承父母的蛋糕店。',
    );
    era.printButton('「很美好的未来啊。」', 1);
    await era.input();
    await flash.say_and_wait('如果一切都顺利的话，那确实如此。但是……');
    era.printButton('「但是？」', 1);
    await era.input();
    await flash.say_and_wait('………');
    await era.printAndWait(
      `荣进闪耀没有继续说话，只是沉默地看着 ${your_name}。`,
    );
    await flash.say_and_wait('……不，没什么。');
    await era.printAndWait(`良久之后，${flash.sex}才再度开口。`);
    await flash.say_and_wait(
      '可能只是因为和您相遇之后，经历的事情太多，所以需要再去花费时间好好规划一番吧。',
    );
    era.printButton('「原来如此。」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 注意到，说出这句话时的${flash.sex}，眼神中闪烁着一种 ${your_name} 无法理解的波动。`,
    );
    era.println();
    sys_hurt_uma(37, 1);
    flags.wait = true;
  };

  handlers[95 + 29] = async (flash, your_name, callname, flags, cb) => {
    if (
      (era.get('cflag:37:位置') && era.get('cflag:0:位置')) !==
      location_enum.beach
    ) {
      cb();
      return;
    }
    await print_event_name('未来之事 · 二', flash);
    await era.printAndWait(
      '与去年的情况不同，这一次，荣进闪耀腿部的伤病恢复的速度很快。',
    );
    await era.printAndWait(
      `促成这种结果的原因固然跟病情的严重程度有所关联。但 ${your_name} 相信更重要的是，今年的${flash.sex}，是在采用非常积极的心态进行修养的。`,
    );
    await era.printAndWait(
      `因此，就在这届的夏季合宿开启的前一刻，${flash.sex}的身体，便已然平安无忧。`,
    );
    era.drawLine();
    await flash.say_and_wait(
      '不知不觉间，距离作为目标的秋季天皇赏，已经近在咫尺了呢。',
    );
    await era.printAndWait(
      '月初，在合宿旅馆放置完行李的荣进闪耀，对着窗外碧蓝的大海，发出一声感叹。',
    );
    era.printButton(
      '「将这一次的夏季合宿，作为增添实力的机会好好努力吧。」',
      1,
    );
    await era.input();
    await era.printAndWait(`见此，${your_name} 鼓励道。`);
    await flash.say_and_wait(
      '嗯！毕竟腿部的伤势已经痊愈，完全不影响训练了呢。',
    );
    await era.printAndWait('荣进闪耀点了点头，随即转身向训练场地走去。');
    await flash.say_and_wait('不过………');
    await flash.say_and_wait('……最后啊。');
    era.printButton('「？」', 1);
    await era.input();
    await era.printAndWait(
      `只是，在彻底离开之前，${your_name} 似乎听到从${flash.sex}那边传来的一句喃喃低语。`,
    );
  };
};
