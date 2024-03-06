const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { say_by_passer_by } = require('#/utils/chara-talk');

const { race_enum } = require('#/data/race/race-const');
const SuEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const event_marks = new SuEduMarks(),
    coffee = get_chara_talk(25),
    relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    tachyon = get_chara_talk(32),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:32:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・可行性评估结束', tachyon);
    era.printButton(`跑的太精彩了！就像光一样！`, 1);
    await era.input();

    era.println();
    await tachyon.say_and_wait(
      `不过是实验的验算而已就高兴成这副模样，豚鼠君你可真是天真……啊！`,
    );
    era.printButton(`怎么了！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`你看着忽然发出声音的速子，内心一阵紧张`);
    await me.say_and_wait(`比赛后……难不成，是腿……`, true);
    era.println();
    await era.printAndWait(`你慌忙上前想要确认速子腿的状况，但……`);
    era.println();
    await tachyon.say_and_wait(
      `完蛋完蛋！我忘记回收装在闸门上用来记录出闸速度的仪器了！`,
    );
    era.println();
    if (relation < 225 && love < 50) {
      //todo 随机三属性+6 声望-10
      await era.printAndWait(`什，什么玩意！？`);
      await era.printAndWait(
        `在闸门内等待起跑的时候，这个人还有心情去做这种事？`,
      );
      await era.printAndWait(`不，说到底随便乱在闸门上加感测仪器什么的`);
      await era.printAndWait(`你不由得感到一阵胃痛`);
      era.println();
      await era.printAndWait(
        `在那之后，为了回收器械你和${tachyon.name}潜入了赛场……`,
      );
      await era.printAndWait(
        `不用说，自然被URA的人发现了,再三道歉后，${tachyon.name}总算成功回收了器械.一切都十分顺利`,
      );
      await era.printAndWait(
        `……只是，在回收期间，那些职员看你们的眼光有些刺痛而已`,
      );
    } else if (relation > 225 && love < 50) {
      // todo 随机三属性+3
      await era.printAndWait(`你叹了口气，原来是因为这个吗`);
      era.printButton(`没有问题，出闸速度已经记录好了`, 1);
      await era.input();
      await era.printAndWait(`虽然不到心灵相通，但身为速子的训练员，`);
      await era.printAndWait(
        `也多少知道${tachyon.sex}会需要怎么样的数据，这种事说到底本就不应该在场上奔跑的${tachyon.sex}来担心`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哦哦！干得好啊，豚鼠君！现在就马上来确认吧！`,
      );
      era.println();
      await era.printAndWait(
        `刚获得的胜利、即将开始的Winning Live，一切的一切都不在你们眼中，彷佛刚才并非跑了场比赛，而只是一场普通的研究一般`,
      );
      era.println();
      await era.printAndWait(
        `你们不停观看着纪录下来的数据，提出一个又一个的猜想，直到winning live开始，外面传来了急促的敲门声才回过神来`,
      );
    }
  } else if (
    extra_flag.race === race_enum.hope_sta &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('希望锦标后・希望', tachyon);
    era.printButton(`太强了！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `第一次的G1舞台，哪怕是${tachyon.name}，你也还是忍不住为${tachyon.sex}捏了把冷汗`,
    );
    await era.printAndWait(
      `但哪怕是国内最高级的赛事之上，${tachyon.sex}表现出的依然是超乎众人的强悍`,
    );
    era.println();
    await tachyon.say_and_wait(`呵呵，这么兴奋什么的，太夸张了`);
    era.println();
    await era.printAndWait(`下了赛场的速子回到休息室后声音也带着愉悦`);
    await era.printAndWait(`听见这声音，哪怕是你也明白了`);
    era.printButton(`实验成功了吧？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `是啊是啊！哎呀，果然好的实验品很重要啊！今天的实验大成功！`,
    );
    era.println();
    await era.printAndWait(
      `果然对速子而言，即便是G1的赛事也只是大一点的实验舞台吧`,
    );
    await era.printAndWait(`即便如此，${tachyon.sex}还是表现出了压倒众人的跑`);
    era.println();
    await tachyon.say_and_wait(`比起这种事，赶快回去了，快去准备下场比赛吧！`);
    era.println();
    await me.say_and_wait(`欸？怎么忽然这么有热情？`);
    await me.say_and_wait(`虽然觉得不会，但难道觉醒了对比赛的热情了……？`, true);
    era.println();
    await tachyon.say_and_wait(`我脑袋里已经有下场比赛实验的蓝图了！哈哈哈！`);
    era.println();
    await era.printAndWait(
      `……算了，不管怎么说，对实验的热情也算是热情觉醒了吧`,
    );
    era.println();
    await era.printAndWait(`你和${tachyon.name}的希望锦标结束了`);
  } else if (
    extra_flag.race === race_enum.hope_sta &&
    edu_weeks < 48 &&
    extra_flag.rank > 1
  ) {
    // todo 力+3
    await print_event_name('希望锦标后・希望', tachyon);
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`比赛结束后，你看着默默回到选手休息室的速子`);
    await era.printAndWait(`一路上谁也没有说话`);
    await era.printAndWait(
      `这场比赛的落败，对你还是对${tachyon.sex}而言，都是一场重大的打击`,
    );
    era.println();
    await tachyon.say_and_wait(`……实验，失败了啊`);
    era.println();
    await era.printAndWait(
      `这场比赛中，${tachyon.name}的状态明显十分的不对劲……`,
    );
    await era.printAndWait(
      `虽说一般的人大概看不出来，但今天的表现，并没有展现出${tachyon.sex}所拥有的那种……光芒`,
    );
    await era.printAndWait(
      `从一开始就黯淡的光芒，在比赛进入到后期更是几乎完全熄灭，因此，${tachyon.name}落败`,
    );
    era.println();
    await tachyon.say_and_wait(`……`);
    era.printButton(
      `……没什么，只是一次实验的失败而已，回去吧，实验哪有一定成功的？`,
      1,
    );
    await era.input();
    era.println();
    await era.printAndWait(`你不由得出言安慰${tachyon.sex}`);
    await era.printAndWait(
      `但坐在地上的${tachyon.sex}，却不知为何，表情有些奇怪`,
    );
    await era.printAndWait(`不是懊悔，反而……像在忍着什么？`);
    era.println();
    era.printButton(`速子……？你的身体……`, 1);
    await era.input();
    if (relation < 225) {
      await tachyon.say_and_wait(`没什么，不用担心……走吧`);
      era.println();
      await era.printAndWait(`或许，自己还无法打破${tachyon.sex}的心防吧`);
      await era.printAndWait(`你没说什么，跟在${tachyon.sex}的后头离去`);
    } else if (relation > 225) {
      await tachyon.say_and_wait(
        `……没事的，豚鼠君，我的腿……没什么问题，只要下次调整好就没问题了`,
      );
      era.println();
      await era.printAndWait(`速子反过来安慰着说道，想使你放下心来`);
      await era.printAndWait(
        `想到平时${tachyon.sex}胸有成竹的样子，你的内心也渐渐平稳了下来`,
      );
      era.println();
      await tachyon.say_and_wait(`…………备选方案吗…或许…`, {
        fontSize: '12px',
      });
      era.println();
      await era.printAndWait(
        `只是，${tachyon.sex}以为没被听到而喃喃说出的词句，却还是使你的心再度提了起来`,
      );
    }
  } else if (
    extra_flag.race === race_enum.hoch_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('弥生赏胜利后・研究对象确认', tachyon);
    await era.printAndWait(`理所当然的，速子赢下了弥生赏`);
    era.printButton(`好厉害的比赛！`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `呼……呼……呵呵，你的反应真是，每次都这么夸张啊，明明我都没认真跑，怎么就厉害了`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}语气玩味的说道`);
    era.println();
    await era.printAndWait(`一点也不夸张`);
    await era.printAndWait(
      `无论有没有认真跑，速子的跑法都同样的吸引着自己，就好比……对了，光电子`,
    );
    era.println();
    await tachyon.say_and_wait(`光电子……？`);
    era.println();
    await era.printAndWait(
      `打在电极上的光束，无论强弱都能使电极发射出电子，这是频率，也就是规格上的不同而导致的`,
    );
    await era.printAndWait(
      `无论强弱，无论认真与否，速子的跑法对自己而言就是超越次元，唯一能够在电极上打出电子的光芒`,
    );
    era.println();
    await tachyon.say_and_wait(`……这算什么比喻啊`);
    era.println();
    await era.printAndWait(`欸欸……不行吗`);
    await era.printAndWait(`明明花了很多时间来想，还挺有自信的……`);
    era.println();
    if (love > 75) {
      await tachyon.say_and_wait(
        `不过……你的意思我明白了，也就是说，你戴着只有我能够解锁的贞操带吧？`,
      );
      await era.printAndWait(`不，这比喻更烂吧……`);
    } else {
      await tachyon.say_and_wait(
        `不过……你的意思我明白了，也就是无论跑的如何，只要是我就能让你满意对吧？`,
      );
    }
    await era.printAndWait(`不过还是希望速子能认真跑了`);
    await era.printAndWait(`说到这，你忽然想起了速子赛前说的测试……`);
    era.println();
    await tachyon.say_and_wait(`……没什么问题，起码，皋月赏不会有问题`);
    era.println();
    await era.printAndWait(`起码……吗？`);
    await era.printAndWait(`让人很无法安心下来的词语，使你也陷入了沉默`);
    era.println();
    await tachyon.say_and_wait(`……不提这个了，快点回去继续实验吧`);
    era.println();
    await era.printAndWait(`于是，你和${tachyon.name}的弥生赏结束了`);
    await era.printAndWait(`下个目标皋月赏就近在眼前了！`);
    // 智+5
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('皋月赏胜利后・虚幻', tachyon);
    await tachyon.say_and_wait(`豚鼠君，你看见了吗？`);
    era.println();
    await era.printAndWait(`跑完皋月赏的速子，获得了至今为止最为热烈的欢呼声`);
    await era.printAndWait(`观众们兴奋的原因你也能理解`);
    await era.printAndWait(`今天的速子的表现堪称完美，`);
    await era.printAndWait(
      `不，可以说如果${tachyon.get_uma_sex_title()}有极限的话，那必然就是今天的速子`,
    );
    await era.printAndWait(`光一般的速度，光一般的闪耀，光一般的……虚幻`);
    era.println();
    await era.printAndWait(`仿佛在结束后就要如光一般消散的跑法`);
    await era.printAndWait(
      `在冲过终点的瞬间，所有人都不敢出声，哪怕是始终相信着速子实力的自己也一样不敢置信`,
    );
    await era.printAndWait(
      `那种跑法只能解释成，${tachyon.get_uma_sex_title()}这种生物的极限`,
    );
    await era.printAndWait(
      `是看到的瞬间就会感到「啊啊，这种跑法不可能有人能够超越的」的跑法`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君……这个啊，就是我们要超越的极限`);
    era.println();
    await era.printAndWait(`将自己定义为极限`);
    await era.printAndWait(`这是多么傲慢的说法`);
    await era.printAndWait(
      `但在看了先前那场比赛后，无论是谁都必须赞同这样的傲慢`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……没错，必须要超越这样的速度，才能称之为超越极限，否则，一切就全是空谈`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.sex}说出这句话时，直直盯着你的双眼，等待回答`,
    );
    await era.printAndWait(`这句话的潜意思，相信你能够明白`);
    await era.printAndWait(`自己有自信，能够超越那样的速度吗？`);
    era.printButton(`绝对可以`, 1);
    era.printButton(`因为是速子，所以绝对可以`, 2);
    await era.input();
    await era.printAndWait(`可以说是瞬间`);
    await era.printAndWait(`在领会出速子的含义后，你在瞬间便做出了回答`);
    await era.printAndWait(`不用经过思考，无须多加考虑`);
    await era.printAndWait(
      `眼前的这名${tachyon.get_uma_sex_title()}，拥有超越极限的力量`,
    );
    await era.printAndWait(`这是从第一次见面就已经确信的`);
    await era.printAndWait(
      `现在只不过是将你与${tachyon.sex}的目标放在眼前而已`,
    );
    await era.printAndWait(`已经看见目标了，那就必然能够超越`);
    era.println();
    await tachyon.say_and_wait(`如此快的反应，思考……不，是本能吗？你……`);
    era.println();
    await era.printAndWait(`不知为何，速子看着你露出了有些微妙的表情`);
    await era.printAndWait(
      `过了一会后，${tachyon.sex}仿佛下定了什么决心一般说道`,
    );
    era.println();
    await tachyon.say_and_wait(`那么，就来试试看吧，豚鼠君……`);
    await tachyon.say_and_wait(`不过首先，先确认好下一场的比赛吧……`);
    await tachyon.say_and_wait(
      `目前可以确认，日本德比我能出赛，以此来做准备吧，豚鼠君`,
    );
    era.println();
    await era.printAndWait(`……又来了`);
    await era.printAndWait(
      `如果要说，速子身上有任何一点是令你感到不安的要素，那么就只有这个了`,
    );
    await era.printAndWait(`……仿佛下场比赛便是最后一场一般的，不确定的态度`);
    await era.printAndWait(`但是，速子的话，一定能将这一切不确定跨越吧`);
    await era.printAndWait(`你如此乐观的想着`);
    era.println();
    await era.printAndWait(`下一场比赛，就决定是日本德比了！`);
    // 力+5
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`日本德比后·研究目标的再设定`, tachyon);
    era.printButton(`速子！太帅了！`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`唔……`);
    era.println();
    await era.printAndWait(`你一如既往的想要夸奖速子的跑姿，然而`);
    era.println();
    await tachyon.say_and_wait(`……实验，没有成功啊`);
    era.println();
    await era.printAndWait(`嗯？`);
    await era.printAndWait(`明明跑的很精彩，结果实验却没有成功吗`);
    era.println();
    await tachyon.say_and_wait(
      `宝穴君……虽然很让人期待，但${tachyon.sex}的可能性与我在寻找的并不相符……果然，还是茶座……`,
    );
    era.println();
    await era.printAndWait(`不知为何，速子喃喃说着你听不太懂的话`);
    era.println();
    await tachyon.say_and_wait(
      `……总之，先不说了吧，接下来，就要进入实验的关键点了`,
    );
    era.println();
    await era.printAndWait(
      `虽然不太明白，但你看着速子脸上严肃的表情，整个人也不禁正襟危坐了起来`,
    );
    era.println();
    await tachyon.say_and_wait(
      `下一场比赛……暂时……还不能确定……我还有些事情需要好好想想`,
    );
    era.println();
    await era.printAndWait(
      `充满了不确定的话语，让你在比赛结束后的欣喜瞬间化为了不安`,
    );
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 0
  ) {
    await print_event_name(`菊花赏后·会赢的`, tachyon);
    // todo 三冠达成
    await say_by_passer_by(
      `解说`,
      `三冠${tachyon.get_uma_sex_title()}诞生！同年中的最强！最快最幸运最强的${tachyon.get_uma_sex_title()}就是，${
        tachyon.name
      }！`,
    );
    // todo 无败三冠达成
    await say_by_passer_by(
      `解说`,
      `无败三冠诞生！历史的车轮再一次的转动了！${tachyon.name}，无败三冠达成！`,
    );
    // todo 非三冠
    await say_by_passer_by(
      `解说`,
      `超越了一众强敌率先越过终点线的是，超光速的公主，${
        tachyon.name
      }！菊花赏最强的${tachyon.get_uma_sex_title()}，就是${tachyon.name}！`,
    );
    await era.printAndWait(`${tachyon.name}拿下了菊花赏，当之无愧的胜利`);
    await era.printAndWait(
      `然而，还来不及为胜利而庆祝，便出现了一名造访的不速之客`,
    );
    era.println();
    await coffee.say_and_wait(`速子同学……你今天的跑法……`);
    await tachyon.say_and_wait(`哦呀，茶座君，怎么了吗？`);
    era.println();
    await era.printAndWait(`曼城茶座`);
    era.println();
    await era.printAndWait(`${tachyon.name}PlanB的接班人`);
    await era.printAndWait(`${tachyon.name}PlanA的试金石`);
    await era.printAndWait(`这场菊花赏上，${tachyon.name}最大的敌人`);
    // todo If 队伍里有曼城茶座
    await era.printAndWait(
      `同时也是，你的另一名负责${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await coffee.say_and_wait(`速子同学，你的跑法，和以前不一样了……`);
    await tachyon.say_and_wait(
      `呵呵，有什么问题吗？跑法本不就是不断在进化的吗？`,
    );
    await coffee.say_and_wait(`没什么……只是，恭喜你，跨越了另一个自己`);
    await tachyon.say_and_wait(`……另一个自己？等等，茶座！什么意思！`);
    await coffee.say_and_wait(
      `……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已`,
    );
    // todo If 队伍里有曼城茶座 茶座好感度≥一般
    await coffee.say_and_wait(`对了……等一下记得把训练员先生还给我`);
    // todo If 队伍里有曼城茶座  茶座爱慕值>50
    await coffee.say_and_wait(
      `因为今天是特别的日子所以先把训练员先生借你一下……等一下要还给我`,
    );
    // todo If 队伍里有曼城茶座  茶座爱慕值>75
    await coffee.say_and_wait(
      `还有，就算是负责${tachyon.get_uma_sex_title()}…不要占用别人的爱人太久了，速子同学`,
    );
    era.println();
    await era.printAndWait(`说完后，茶座在你的脸上吻了一下宣示主权`);
    await tachyon.say_and_wait(`茶座！…………啧，走掉了……`);
    await era.printAndWait(`没事吧，你担心的望着速子`);
    // todo If 茶座爱慕>75，速子爱慕<50
    await tachyon.say_and_wait(`没什么……话说，豚鼠君，你可真受欢迎啊`);
    // todo If 茶座爱慕>75，75>速子爱慕>50
    await tachyon.say_and_wait(`没什么……话说豚鼠君，你的风流债可真多啊`);
    // todo If 茶座爱慕>75，速子爱慕>75
    await tachyon.say_and_wait(`没什么……比起这个，豚鼠君……你的风流债可真多啊`);
    era.println();
    await era.printAndWait(`速子咬牙切齿的回过头来说道`);
    era.println();
    await tachyon.say_and_wait(`必须要好好消毒被茶座弄脏的地方才行！`);
    era.println();
    await era.printAndWait(
      `以此为理由，${tachyon.sex}不停的亲吻着你的脸颊，以十倍百倍的数量想压过茶座刚刚印上的吻`,
    );
    era.println();
    await era.printAndWait(
      `总之，无论如何，你与${tachyon.name}荣光的菊花赏结束了`,
    );
    // todo 耐+10
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1 &&
    event_marks.PlanB === 0
  ) {
    await print_event_name(`火苗点现`, tachyon);
    await tachyon.say_and_wait(`………`);
    era.printButton(`……`, 1);
    await era.input();
    await tachyon.say_and_wait(`………`);
    era.printButton(`……`, 1);
    await era.input();
    era.printButton(`……速子？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `比赛结束，荣光的菊花赏，决出最强${tachyon.get_uma_sex_title()}的竞赛`,
    );
    await era.printAndWait(
      `你的负责${tachyon.get_uma_sex_title()}${
        tachyon.name
      }却败在了这场比赛之上`,
    );
    await era.printAndWait(
      `在比赛结束进入选手休息室后，你们两人就一直维持着沉默`,
    );
    await era.printAndWait(
      `你暗暗看着${tachyon.sex}的脸庞，却猜不透${tachyon.sex}的心思`,
    );
    await era.printAndWait(`就在沉默的压力累积到极限时……`);
    era.println();
    await tachyon.say_and_wait(`呵呵……`);
    era.println();
    era.printButton(`速子……？`, 1);
    await era.input();
    await tachyon.say_and_wait(`明明都觉得不会输的……哎呀，还是被超越了`);
    await tachyon.say_and_wait(
      `果然，${tachyon.get_uma_sex_title()}的可能性还是只有在比赛中才能探索啊`,
    );
    await tachyon.say_and_wait(`输了输了`);
    era.println();
    await era.printAndWait(`速子的态度，出乎你意料之外的轻松`);
    await era.printAndWait(
      `也是啊……对${tachyon.sex}而言，不管怎么说比赛都是实验而已`,
    );
    await era.printAndWait(`实验有成功有失败，比赛也是`);
    await era.printAndWait(`失败了吸取教训就好`);
    era.println();
    await era.printAndWait(
      `虽然这样的态度是否适合比赛还不好说，但最起码可以安心${tachyon.sex}大概并没有受到太多影响了`,
    );
    era.println();
    await era.printAndWait(
      `然而，还来不及为此感到安心，便出现了一名造访的不速之客`,
    );
    era.println();
    await coffee.say_and_wait(`速子同学……你今天的跑法……`);
    await tachyon.say_and_wait(`哦呀，茶座君，怎么了吗？`);
    era.println();
    await era.printAndWait(`曼城茶座`);
    era.println();
    await era.printAndWait(`${tachyon.name}PlanB的接班人`);
    await era.printAndWait(`${tachyon.name}PlanA的试金石`);
    await era.printAndWait(`这场菊花赏上，${tachyon.name}最大的敌人`);
    // todo If 队伍里有曼城茶座
    await coffee.say_and_wait(`速子同学，你的跑法，和以前不一样了……`);
    await tachyon.say_and_wait(
      `呵呵，有什么问题吗？跑法本不就是不断在进化的吗？`,
    );
    await coffee.say_and_wait(`没什么……只是，恭喜你，跨越了另一个自己`);
    await tachyon.say_and_wait(`……另一个自己？等等，茶座！什么意思！`);
    await coffee.say_and_wait(
      `……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已`,
    );
    // todo If 队伍里有曼城茶座 茶座好感度≥一般
    await coffee.say_and_wait(`对了……等一下记得把训练员先生还给我`);
    // todo If 队伍里有曼城茶座  茶座爱慕值>50
    await coffee.say_and_wait(
      `因为今天是特别的日子所以先把训练员先生借你一下……等一下要还给我`,
    );
    // todo If 队伍里有曼城茶座  茶座爱慕值>75
    await coffee.say_and_wait(
      `还有，就算是负责${tachyon.get_uma_sex_title()}…不要占用别人的爱人太久了，速子同学`,
    );
    era.println();
    await era.printAndWait(`说完后，茶座在你的脸上吻了一下宣示主权`);
    await tachyon.say_and_wait(`茶座！…………啧，走掉了……`);
    await era.printAndWait(`没事吧，你担心的望着速子`);
    // todo If 茶座爱慕>75，速子爱慕<50
    await tachyon.say_and_wait(`没什么……话说，豚鼠君，你可真受欢迎啊`);
    // todo If 茶座爱慕>75，75>速子爱慕>50
    await tachyon.say_and_wait(`没什么……话说豚鼠君，你的风流债可真多啊`);
    // todo If 茶座爱慕>75，速子爱慕>75
    await tachyon.say_and_wait(`没什么……比起这个，豚鼠君……你的风流债可真多啊`);
    await era.printAndWait(
      `以此为理由，${tachyon.sex}不停的亲吻着你的脸颊，以十倍百倍的数量想压过茶座刚刚印上的吻`,
    );
    era.println();
    await era.printAndWait(
      `总之，无论如何，你与${tachyon.name}的经典战线结束了！`,
    );
    // todo 耐+10
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 1
  ) {
    // todo 曼城茶座参加菊花赏后
    await print_event_name(`止步于极限的光子`, tachyon);
    era.println();
    await era.printAndWait(`菊花赏，结束了`);
    await era.printAndWait(
      `结束后的几天，你送了训练到夜晚的茶座回到寝室，叮嘱${tachyon.sex}好好休息，然后……自己回到了学校里`,
    );
    await era.printAndWait(`明明自己也该好好休息的……但毕竟，还有工作没做完啊`);
    era.println();
    await era.printAndWait(
      `进入漆黑的训练员室的瞬间，你立即发现了房间里还有另一人在`,
    );
    await era.printAndWait(
      `不是因为你的感知有多么敏锐，而是那个人手上正拿着能够使人发出光芒的药水`,
    );
    era.printButton(`……速子啊`, 1);
    await era.input();
    await era.printAndWait(
      `这几个月以来一直帮着为茶座提供协助的，同样也是你负责${tachyon.get_uma_sex_title()}的${
        tachyon.name
      }`,
    );
    await era.printAndWait(`${tachyon.sex}手上的药水在月光下散发出七彩的光芒`);
    era.println();
    await tachyon.say_and_wait(`菊花赏，结束了呢`);
    era.printButton(`……是啊`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`并非关系不好`);
    await era.printAndWait(
      `说到底，${
        tachyon.sex
      }依然是你的负责${tachyon.get_uma_sex_title()}，两人日常也总有接触`,
    );
    await era.printAndWait(`所以，正常的交流应该是没问题的`);
    await era.printAndWait(
      `但是这几个月以来，你们的交流几乎就没有一次离开过茶座`,
    );
    await era.printAndWait(`除此之外，再加上合训那时候的事……`);
    await era.printAndWait(
      `瞬间，你忽然找不到有什么能够和${tachyon.sex}聊的话题了`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}的栗色短发在暗沉的月光下，纯褐如酒，暗红的双眼如渴血的野兽，贪婪的注视着你`,
    );
    await era.printAndWait(
      `在那一瞬间，你想到了许多，想到了前辈训练员说的与${tachyon.get_uma_sex_title()}维持安全的距离感，`,
    );
    await era.printAndWait(
      `想到了训练员讲座说到的${tachyon.get_uma_sex_title()}的独占欲，`,
    );
    await era.printAndWait(
      `想到了${tachyon.get_uma_sex_title()}生理学课上教到的${tachyon.get_uma_sex_title()}的发情期……`,
    );
    await era.printAndWait(
      `但这些都帮不了现在手无寸铁面对负责${tachyon.get_uma_sex_title()}的自己，`,
    );
    await era.printAndWait(
      `纵使多亏了眼前速子的药剂，自己或许拥有能够稍微抵抗的力量，`,
    );
    await era.printAndWait(`但那真的也就是稍微的力量而已`);
    await era.printAndWait(
      `${tachyon.sex}漫步靠近，下意识的，你也跟着慢慢后退`,
    );
    await era.printAndWait(`就这么一进一退，靠到了墙边`);
    await era.printAndWait(`${tachyon.sex}压着缩在墙角的你，淡淡的说了句`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，可以……陪我跑一下吗？`);
    era.println();
    await era.printAndWait(`说出的是你意料之中，但比你的意料还要糟糕的请求`);
    era.println();
    await era.printAndWait(`夜晚下的训练场，空荡的跑道`);
    await era.printAndWait(`整个赛场上只有${tachyon.name}一人在奔跑着`);
    await era.printAndWait(`月下的${tachyon.sex}，跑的十分不像样`);
    await era.printAndWait(
      `这也是难免的，已经将近三个月没有接受训练的${tachyon.sex}，`,
    );
    await era.printAndWait(
      `即便是天才，也无法跨越时间，肌肉的退化、感觉的退化等等，对运动员而言都是致命的伤痕`,
    );
    await era.printAndWait(`如果是现在的${tachyon.name}，说不定连你都能跑赢……`);
    await era.printAndWait(
      `虽然听起来很离谱，但每天都在药物锤炼下的身体，或许真的能够胜过已经许久没锻炼过的${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await era.printAndWait(`那么，为什么……`);
    await era.printAndWait(`你痛苦的想着`);
    era.println();
    await era.printAndWait(
      `为什么，即便是如此不堪的跑法，在你眼中却还是如第一次见到那时一般闪耀`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠……君……`);
    era.println();
    await era.printAndWait(
      `不知不觉间，${tachyon.sex}已经跑完，站在你的身侧气喘吁吁的喘着气`,
    );
    await era.printAndWait(`以前的${tachyon.sex}不该是这样的`);
    await era.printAndWait(`哪怕加上腿伤，${tachyon.sex}也不应该变成这样`);
    await era.printAndWait(
      `让${tachyon.sex}变成这样的，是本应该陪在${tachyon.sex}身边，相信${tachyon.sex}的那个人`,
    );
    await era.printAndWait(`是你`);
    era.println();
    await tachyon.say_and_wait(`……呵呵，跑的很不堪吧`);
    era.println();
    await era.printAndWait(`没有这回事，你想安慰${tachyon.sex}道`);
    await era.printAndWait(`但是${tachyon.sex}的目光，却不容许你说出谎言`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，你还记得吗？月桂杯那时候我说的话`);
    era.println();
    await era.printAndWait(`记得？不如说怎么可能忘掉`);
    await era.printAndWait(`直到现在，那还是自己常在午夜梦回出现的梦魇`);
    await era.printAndWait(
      `怀抱着自己的梦想，与他人的梦想的${tachyon.get_uma_sex_title()}在眼前凋零的瞬间`,
    );
    await era.printAndWait(
      `接下来，无论是责骂怨怼还是哀叹，自己都做好面对的准备了`,
    );
    era.println();
    await era.printAndWait(`但${tachyon.sex}要说的，却不是那些`);
    era.println();
    await tachyon.say_and_wait(`剩下用尽全力的几次……现在，机会来了`);
    await tachyon.say_and_wait(
      `菊花赏，茶座已经绽放出了${
        tachyon.sex
      }的光芒……是当之无愧，『最强』的${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await era.printAndWait(`最快的${tachyon.get_uma_sex_title()}赢皋月赏`);
    await era.printAndWait(`最强的${tachyon.get_uma_sex_title()}赢菊花赏`);
    await era.printAndWait(`你想起了从许久以前流传至今的话语`);
    era.println();
    await tachyon.say_and_wait(
      `接着……到年底，${tachyon.sex}必然将一路抵达巅峰`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}畅想着，自己心目中的可能性`);
    await era.printAndWait(`……已经不属于自己的可能性`);
    era.println();
    await tachyon.say_and_wait(
      `但为了让${tachyon.sex}超越极限，还需要磨砺的垫脚石……`,
    );
    era.println();
    await era.printAndWait(
      `但明明已经失去了自己的可能性，目光中的光芒却还是如此耀眼`,
    );
    await era.printAndWait(
      `如果是这样的${tachyon.sex}，自己一定会答应的吧，若是${tachyon.sex}都能为了梦想燃尽一切，那么陪${tachyon.sex}一把又如何`,
    );
    await era.printAndWait(`自己绝对会一如既往，甘之如饴的接受使唤吧`);
    await era.printAndWait(`但是……`);
    era.println();
    await tachyon.say_and_wait(`所以，豚鼠君，我需要你的帮助`);
    await tachyon.say_and_wait(
      `我要在明年复归，为了让茶座抵达更高的极限，只有我，才能以最针对${tachyon.sex}的方式制定出战术，逼迫${tachyon.sex}抵达极限`,
    );
    await tachyon.say_and_wait(`……你会助我一臂之力的吧`);
    era.println();
    await era.printAndWait(
      `如果真的甘心牺牲一切去成就他人，为什么脸上的表情却是如此不甘`,
    );
    await era.printAndWait(`为什么眼眶却含着泪水`);
    era.println();
    await tachyon.say_and_wait(`沉默就当默许了`);
    era.println();
    await era.printAndWait(`说到底，也没有拒绝的理由不是吗`);
    await era.printAndWait(`为了茶座能够攀上巅峰`);
    await era.printAndWait(`为了满足速子的『遗愿』`);
    await era.printAndWait(`没什么拒绝的理由吧，只是你很好奇`);
    await era.printAndWait(
      `眼前这名栗色头发的天才，现在脑袋里究竟在想些什么呢？`,
    );
    era.println();
    // todo 菊花赏后，${tachyon.name}训练选项解锁 状态『止步于极限的光子』获得 全属性+10
  } else if (
    extra_flag.race === race_enum.sank_hai &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`大阪杯后·变量的确定 未知的变量`, tachyon);
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}！新一年的G1连战敲响了超光速的钟声！${tachyon.name}漂亮的越过终点！`,
    );
    era.println();
    await era.printAndWait(`哦，赢了啊`);
    await era.printAndWait(
      `虽然说来可能十分不尊重人，但这确实就是${tachyon.name}的真实想法`,
    );
    await era.printAndWait(
      `在这个赛场上，能够阻止${tachyon.name}的就只有${tachyon.sex}自己的伤病`,
    );
    await era.printAndWait(
      `在已经摆脱伤病的现在，哪怕被称为自傲也无所谓，${tachyon.name}无法输给任何人`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}唯一在乎的，只有实验的结果`);
    await era.printAndWait(`但是……`);
    era.println();
    tachyon.print(
      `没有欢呼声……也是啊，这种临时抱佛脚的收买人心怎么可能有用……还是需要时间积累`,
    );
    tachyon.print(`再说，就算有了欢呼声，对比赛也不可能有什么影响的吧`);
    tachyon.print(`不然比赛只要看人气颁发名次不就好了`);
    tachyon.print(`比赛结束……那么，该去找豚鼠……`);
    era.println();
    await say_by_passer_by(`观众A`, `好厉害啊！`);
    era.println();
    await tachyon.say_and_wait(`…………？`);
    await say_by_passer_by(`观众B`, `好快的跑法……那个就是${tachyon.name}吗？`);
    await say_by_passer_by(
      `观众C`,
      `因为媒体的关系，原本以为是个问题儿童……就算真的是问题儿童，在赛场上就该是成绩论高下吧！`,
    );
    await say_by_passer_by(
      `观众D`,
      `本来经典赛上的战绩就堪称逆天，这种${tachyon.get_uma_sex_title()}到底为什么会在闪耀系列赛里乱杀啊，哪怕梦之杯来人都赢不过的啦！`,
    );
    await say_by_passer_by(
      `观众E`,
      `从经典赛就一直在看了，但无论看几次果然还是太强了！`,
    );
    era.println();
    tachyon.print(`这是……`);
    era.println();
    await era.printAndWait(`仿佛定格了一般，在通过终点线一会后才响起的`);
    await era.printAndWait(`全场的欢呼声`);
    await era.printAndWait(`夸张，夸大，毫无根据的赞扬，荒谬至极的吹嘘`);
    await era.printAndWait(`……奇怪，是这场比赛有什么特别的吗？`);
    era.println();
    tachyon.print(`不……一直都是如此，只是……一直都没注意到而已`);
    tachyon.print(`担心双腿崩溃`);
    tachyon.print(`担心实验失败`);
    tachyon.print(`担心止步不前`);
    tachyon.print(`所以……不是不存在，只是没听见，因为不重要`);
    await say_by_passer_by(`${tachyon.get_uma_sex_title()}A`, `速子前辈好帅！`);
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `果然速子前辈才是最强的${tachyon.get_uma_sex_title()}！`,
    );
    await say_by_passer_by(`${tachyon.get_uma_sex_title()}C`, `速子前辈必胜！`);
    tachyon.print(`实际上，一直存在`);
    tachyon.print(
      `在皋月赏的时候，那个人一定喊过“超越光速吧！${tachyon.name}！”`,
    );
    tachyon.print(
      `在日本德比的时候，那个人一定喊过“让我看见${tachyon.get_uma_sex_title()}的可能性吧！”`,
    );
    tachyon.print(
      `在菊花赏的时候，那个人一定喊过“向我证明，${tachyon.get_uma_sex_title()}的伤病是可以被超越的吧！”`,
    );
    era.println();
    tachyon.print(`然后……是大阪杯`);
    tachyon.print(`“${tachyon.name}的可能性，绝对不只三冠！”`);
    era.println();
    tachyon.print(`啊啊`);
    tachyon.print(`这次，终于听见了`);
    era.println();
    tachyon.print(`原来，${tachyon.name}一直都是被人爱着的`);
    tachyon.print(`被粉丝，被后辈，被世界`);
    tachyon.print(`还有……观众席最前排`);
    tachyon.print(`明明没有在发光，却比谁都还要亮眼的那个人`);
    era.println();
    tachyon.print(`真是，这个笨蛋`);
    tachyon.print(`明明比赛的时候都喊得出那样的话来`);
    tachyon.print(`怎么面对面时，就只能说出那种蹩脚的夸奖了？`);
    tachyon.print(`要是我没听到的话怎么办`);
    tachyon.print(`这些支持不就白费了吗？`);
    tachyon.print(`支持……原来不是为了被支持的人听见才喊出的吗？`);
    tachyon.print(`……那么，不为了被听见而喊出的，才是真正的支持吗？`);
    era.println();
    await tachyon.say_and_wait(`我回来了……豚鼠君`);
    era.printButton(`欢迎回来，速子，腿没有任何问题吧！`, 1);
    era.printButton(`今天跑的一样真的，太厉害了！`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `……原本感觉对支持的定义已经能够明确了，都怪你啊，又得重新调查了`,
    );
    era.println();
    await era.printAndWait(`欸————为啥！？`);
    era.println();
    await tachyon.say_and_wait(
      `作为惩罚……今天的药是干扰大脑高级认知判断能力的药……`,
    );
    await tachyon.say_and_wait(
      `或者通俗一点来讲叫做吐真剂，喝下去之后好好聊聊今天比赛的看法吧`,
    );
    era.println();
    await era.printAndWait(`欸—————！？`);
    // todo 智+10
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`天皇赏春后·わかります`, tachyon);
    era.println();
    await era.printAndWait(`啊啊，原来如此`);
    era.println();
    await era.printAndWait(`天皇赏春`);
    await era.printAndWait(`看着那两人在最终直线上的争斗`);
    await era.printAndWait(`总算，弄懂了`);
    era.println();
    await era.printAndWait(
      `为什么当初明明知道要以速子的成果做为基石也要支持茶座`,
    );
    await era.printAndWait(`为什么那天晚上却又为速子的回答感到欣喜`);
    era.println();
    await era.printAndWait(
      `在看见那超越光速的身姿，以及如同漆黑的猎犬一般撕咬前者的跑法时，终于理解了`,
    );
    await era.printAndWait(`早在第一次看见${tachyon.sex}们跑步的模样时`);
    // todo If 速子&茶座爱慕值<75
    await era.printAndWait(`自己，就已经深深爱上${tachyon.sex}们了`);
    era.println();
    await era.printAndWait(`闪烁如光的${tachyon.sex}`);
    await era.printAndWait(`漆黑如影的${tachyon.sex}`);
    await era.printAndWait(`最开始就是如此简单的事`);
    era.println();
    await era.printAndWait(`只是像孩子一样稚气的愿望`);
    await era.printAndWait(`想要分出强弱……不，只是想要看同场的竞技`);
    await era.printAndWait(
      `强还是弱那都不是重点，只是想看${tachyon.sex}们奔跑的模样`,
    );
    era.println();
    await era.printAndWait(`希望终点前的这段直线可以永远不要结束`);
    await era.printAndWait(
      `希望可以永远看着${tachyon.sex}们在赛场上奔驰的这一幕`,
    );
    await era.printAndWait(`不知不觉，你流下泪来`);
    era.println();
    await era.printAndWait(`是光，还是影`);
    await era.printAndWait(`是照亮一切的光使阴影无处遁形`);
    await era.printAndWait(`还是吞没一切的黑暗将光明噬尽`);
    era.println();
    await say_by_passer_by(
      `解说`,
      `撕咬至最后一刻的大接战！曼城茶座！还是${tachyon.name}！是超光速的逃脱还是摩天楼的逮捕！现在，冲过终点的是……！`,
    );
    // todo If 第二名
    era.println();
    await tachyon.say_and_wait(`………输了……吗？`);
    era.println();
    await era.printAndWait(`不可理喻`);
    await era.printAndWait(`毫无道理`);
    era.println();
    await era.printAndWait(`${tachyon.name}的出赛，是为了让曼城茶座取得成功`);
    await era.printAndWait(
      `为了让${tachyon.sex}登上巅峰，在比赛中针对${tachyon.sex}最难受的点进行刺激，迫使${tachyon.sex}产生进步`,
    );
    await era.printAndWait(
      `然后……不引人注目的退居幕后，让${tachyon.sex}享受名为胜利的补偿`,
    );
    await era.printAndWait(`明明应该是这样的，那……`);
    era.println();
    await say_by_passer_by(
      `解说`,
      `是曼城茶座！将超光速吞没，立于淀坡之上的盾之荣光归于曼城茶座！`,
    );
    era.println();
    await era.printAndWait(`为什么……此刻却感到如此的……不甘心！`);
    era.println();
    await era.printAndWait(`一开始明明很正常的`);
    await era.printAndWait(`茶座的优势和劣势都在其稳定性`);
    await era.printAndWait(
      `由于极强的稳定，使得${tachyon.sex}在最考验强度的长距离比赛中总能取得优势`,
    );
    await era.printAndWait(
      `但也因为太过稳定，导致${tachyon.sex}欠缺关键时的爆发力`,
    );
    await era.printAndWait(
      `所以破坏了${tachyon.sex}的舒适状态，这样才能刺激${tachyon.sex}超越极限`,
    );
    era.println();
    await era.printAndWait(`结果，出乎意料的`);
    await era.printAndWait(
      `${tachyon.sex}不但找回了节奏，还更进一步的进化，完善了自己的跑法`,
    );
    await era.printAndWait(`到此，这场比赛的目的就应该已经结束了才对`);
    await era.printAndWait(`可是……`);
    era.println();
    await era.printAndWait(`原因不用想也知道`);
    await era.printAndWait(`那天晚上和后辈的对话是主要原因`);
    await era.printAndWait(`但是……后辈${tachyon.sex}也没做错什么`);
    await era.printAndWait(`有问题的，是${tachyon.name}`);
    era.println();
    await era.printAndWait(`如果心中没有犹豫的话，那时候应该能准确回答出口的`);
    era.println();
    await tachyon.say_and_wait(`我……`);
    era.println();
    await era.printAndWait(
      `${tachyon.name}，说到底还是一名${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(`还是无法抗拒，奔跑和争胜的本能`);
    await era.printAndWait(
      `明明关于${tachyon.get_uma_sex_title()}的可能性还有很多其他的路径`,
    );
    await era.printAndWait(`没有必要执着于赛场的`);
    await era.printAndWait(
      `却还是选择了茶座，哪怕只能痛苦的看着他人奔跑的模样，也不选择其他道路的原因`,
    );
    await era.printAndWait(`因为……${tachyon.name}，是爱着跑步的啊`);
    era.println();
    await era.printAndWait(`想到这里，忽然释怀了`);
    await era.printAndWait(`无论找多么冠冕堂皇的借口和理由来掩盖都一样`);
    await era.printAndWait(
      `无论怎么努力，也无法挣脱${tachyon.get_uma_sex_title()}的本能`,
    );
    await era.printAndWait(`……也不想挣脱`);
    await era.printAndWait(`想要变成最快最强的${tachyon.get_uma_sex_title()}`);
    await era.printAndWait(`想要与敌手纠缠死斗到最后一刻`);
    await era.printAndWait(`想要……证明自己`);
    era.println();
    await era.printAndWait(`……但是，这样的话，自己该怎么去面对他`);
    await era.printAndWait(`一直帮助着自己的，总在身边支持着自己的那个人`);
    await era.printAndWait(`该用什么面目去面对他`);
    await era.printAndWait(`……哪怕是他，一定也会生气的吧`);
    await era.printAndWait(`身为${tachyon.name}和曼城茶座的专属训练员`);
    await era.printAndWait(`当初说好的，将比赛让给茶座，自己专注于幕后`);
    era.println();
    await era.printAndWait(`结果……`);
    await era.printAndWait(`现在却要告诉他，自己……还是想要继续跑步？`);
    await era.printAndWait(`耍人也该有个限度吧`);
    era.println();
    await era.printAndWait(`不知不觉`);
    await era.printAndWait(`${tachyon.name}逃离了赛场`);
    // todo 速子状态下降
    // todo 第一名
    await era.printAndWait(`速子没有回到选手休息室`);
    await era.printAndWait(`整个赛场里也没有${tachyon.sex}的踪影`);
    await era.printAndWait(
      `你担心的打电话回去找宿舍长确认消息，得到了速子已经回到特雷森的消息才放下心来`,
    );
    await era.printAndWait(`……不，也不能说放下心来`);
    await era.printAndWait(`速子究竟怎么了……为什么会自己跑回学园`);
    await era.printAndWait(`有机会找${tachyon.sex}聊聊吧`);
    //todo 闲聊、外出选项换成“你想与速子聊天春时的事，但${tachyon.sex}马上就跑不见了”
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 0
  ) {
    await print_event_name(`宝冢纪念后·神话诞生`, tachyon);
    await say_by_passer_by(
      `解说`,
      `称霸了上半年的总决赛，化身为神话的是${tachyon.name}！`,
    );
    era.println();
    await era.printAndWait(`${tachyon.name}理所当然的第一个跨越了终点线`);
    await era.printAndWait(`全场响起了响亮的掌声及欢呼`);
    await era.printAndWait(`空中彩纸飞舞，又是一次辉煌且精彩的比赛`);
    era.println();
    await era.printAndWait(`忽然，观众席发出惊呼，接着喧闹变得更为热络`);
    await era.printAndWait(
      `那个比赛后总是轻描淡写草草挥手下场的${tachyon.name}`,
    );
    await era.printAndWait(`现在却依然留在场上，大方的回应着粉丝们的欢呼声`);
    await era.printAndWait(`而这一举动也引发了更热闹的声援，声音响彻云霄`);
    era.drawLine({ content: '下场后' });
    era.println();
    await tachyon.say_and_wait(`……呵呵`);
    era.printButton(`速子！`, 1);
    era.printButton(`今天也很精彩！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`嗯？哦，比起这个，豚鼠君！你看，测试的结果！`);
    await tachyon.say_and_wait(
      `这次的实验中比起大阪杯加入了更多的欢呼声变量，根据比赛结束后的数据分析，`,
    );
    await tachyon.say_and_wait(
      `确实对肌肉的输出力量产生了帮助……其输出量大于平常情绪增长造成的幅度……`,
    );
    await tachyon.say_and_wait(
      `简单来讲，实验成功！观众的应援确实能够造成影响，哈哈哈哈哈哈！`,
    );
    era.println();
    await era.printAndWait(`……虽然不太明白，但总之实验似乎是成功了`);
    era.printButton(`恭喜！`, 1);
    era.printButton(`这样距离可能性就更进一步了！`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `呵呵……虽然还有些地方没能搞清楚，但在比赛中运用已经没有问题了！`,
    );
    await tachyon.say_and_wait(
      `不过……这么看来，其实我确实是会因喝采而感到高兴的啊……该说毕竟还是社会性生物吗……`,
    );
    era.printButton(
      `大家都是很认真的为速子加油的哦，要是速子做出反应一定会很高兴的`,
      1,
    );
    era.printButton(`我是很认真为速子加油的，要是速子能够感到高兴就太好了`, 2);
    const ret1 = await era.input();
    if (love < 50) {
      if (ret1 === 1) {
        era.println();
        await tachyon.say_and_wait(
          `呵呵，说的也是……那么下次做点回应吧，就当作支援报酬的粉丝服务吧`,
        );
        era.println();
        await era.printAndWait(
          `并不是报酬……虽然想这么说，但速子大概还是无法明白吧`,
        );
      } else {
        era.println();
        await tachyon.say_and_wait(`你的喝采……嗯，我也确实的听到了……`);
        await tachyon.say_and_wait(
          `话说，明明能说出那种话来，怎么每次跑完回来都是这些老套的陈腔滥调啊？`,
        );
      }
    }
    //todo 耐+10
    // 技能点+10
    else {
      if (love > 50) {
        if (ret1 === 1) {
          era.println();
          await tachyon.say_and_wait(
            `那么，这个大家一定也包括了你吧……你希望我做出怎么样的回应，来感谢你呢♡`,
          );
        } else {
          await tachyon.say_and_wait(
            `这样啊，那么，我该用什么来回报我最大的粉丝才好呢`,
          );
        }
        era.println();
        await era.printAndWait(`速子用妩媚的眼神看着你`);
        await era.printAndWait(`一时你竟忘记了言语`);
      }
    }
    era.println();
    await era.printAndWait(`你和${tachyon.name}的宝冢纪念结束了！`);
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 1
  ) {
    await print_event_name(`宝冢纪念后·前往极限`, tachyon);
    era.println();
    await tachyon.say_and_wait(`哈啊……哈啊……茶……茶座……！`);
    era.println();
    await era.printAndWait(`拼尽全力喊出的嘶吼`);
    await era.printAndWait(`在比赛中说话`);
    await era.printAndWait(
      `这无论在实验的角度来看，又或者是竞赛的角度来看，都是极度不符合常理的行为`,
    );
    await era.printAndWait(`但是，${tachyon.name}还是喊出声了`);
    era.println();
    await era.printAndWait(`在最终直线前，在最后的冲刺开始前`);
    await era.printAndWait(`${tachyon.name}发出的，违背常理的宣言`);
    era.println();
    await tachyon.say_and_wait(`要是能追上的话……就试试看啊！`);
    era.println();
    await era.printAndWait(`跑在前方的${tachyon.name}`);
    await era.printAndWait(`对着紧紧撕咬在后的猎犬发出挑衅`);
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(`……无聊`);
    await tachyon.say_and_wait(`你觉得做这种事能让任何人开心吗？`);
    await tachyon.say_and_wait(
      `不需要你让，我也会堂堂正正的超越你……然后，超越朋友`,
    );
    era.println();
    await era.printAndWait(`比赛前的坦承错误，果不其然，被狠狠数落了一顿啊`);
    await era.printAndWait(`不过……嘛，这样也轻松多了`);
    await era.printAndWait(`要是像豚鼠君那样全肯定反而才更让人担心`);
    await era.printAndWait(`所以，今天可以毫无顾虑，用尽全力的跑了`);
    era.println();
    await era.printAndWait(`对对手的尊重`);
    await era.printAndWait(`对自己的渴望`);
    await era.printAndWait(`对支持者的回报`);
    era.println();
    await tachyon.say_and_wait(
      `以此献上的，${tachyon.name}于日本国内的最后一舞`,
    );
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}！还是曼城茶座！${tachyon.name}！曼城茶座！${tachyon.name}！曼城茶座！现在，两人冲线———————————！`,
    );
    era.println();
    await era.printAndWait(`谁赢了`);
    await era.printAndWait(`谁输了`);
    await era.printAndWait(`不，那些都无关紧要`);
    era.println();
    await era.printAndWait(`这样一切就，都结束了`);
    await era.printAndWait(`今天的比赛，${tachyon.name}跑出了自己的最佳`);
    await era.printAndWait(`下场比赛，也已经在射程以内了`);
    era.drawLine();
    era.printButton(`好强，好快！不管是茶座……还是速子都是……！`, 1);
    era.printButton(`能够成为你们的训练员……真是……太好了！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `呵呵，忽然讲这么煽情的话，搞得像大结局一样，我们的比赛可还没结束呢，豚鼠君`,
    );
    era.println();
    await era.printAndWait(`啊啊，是啊`);
    era.println();
    await tachyon.say_and_wait(`……记者会，差不多要开始了`);
    era.println();
    await era.printAndWait(
      `上半年最强${tachyon.get_uma_sex_title()}总决赛，这种比赛想也知道必然会聚集许多记者媒体`,
    );
    await era.printAndWait(`就在这个舞台上，宣布今后的目标吧`);
    era.printButton(`上吧，速子`, 1);
    era.printButton(`我永远站在你身后`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……嗯，我上了`);
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(
      `如此这般，于是下场比赛，我的预定计画是，世界最高峰，凯旋门杯。以上有任何记者有问题吗？`,
    );
    era.println();
    await era.printAndWait(`鸦雀无声`);
    await era.printAndWait(
      `哪怕是在记者会前便听说了今天${tachyon.name}阵营将宣布重量级消息的记者`,
    );
    await era.printAndWait(`也不由得因这重磅消息而大吃一惊`);
    era.println();
    await tachyon.say_and_wait(`———如果没有问题的话，那么今天的采访到此……`);
    era.println();
    await era.printAndWait(
      `直到这时，记者们才忽然如梦中醒，纷纷开始做出提问，`,
    );
    await era.printAndWait(
      `但看得出由于太过突然的展开，导致他们原本准备的问题全都派不上场，只能临时寻找话题`,
    );
    await era.printAndWait(`而速子也不慌不忙的进行回答`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `为什么如此突然做出决定，真的是深思熟虑下做出的出赛安排吗？`,
    );
    await tachyon.say_and_wait(
      `这是我与训练员君相谈后做出的决定，是在几个月前就已经决定的，并不突然也不唐突，只是先前并没有通知媒体`,
    );
    await say_by_passer_by(
      `记者B`,
      `请问${tachyon.name}小姐去年由于不明原因暂停出赛闪耀系列赛的原因是……？今年凯旋门杯应该不会……`,
    );
    await tachyon.say_and_wait(
      `这方面无可奉告，但我可以做出保证，今年的凯旋门杯我必然会参赛`,
    );
    await say_by_passer_by(
      `记者B`,
      `……那个，今天的比赛很精彩，请问${tachyon.name}小姐有没有什么想对对手曼城茶座说的话吗？`,
    );
    await tachyon.say_and_wait(
      `嗯……也是啊，那么，『不管是你，还是你的朋友，我都会在凯旋门上一并超越』，就这样吧`,
    );
    era.println();
    await era.printAndWait(
      `你身居幕后，望着记者会上如星光一般闪耀的${tachyon.sex}`,
    );
    await era.printAndWait(`一度黯淡的光子，如今正绽放着最为闪耀的光芒`);
    // todo 耐+10
    // 技能点+10
  } else if (
    extra_flag.race === race_enum.prix_lat &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 1
  ) {
    await print_event_name(`凯旋门赏后·止于极限`, tachyon);
    era.println();
    await era.printAndWait(`${tachyon.name}，登上了世界的顶点`);
    await era.printAndWait(
      `来自日本的${tachyon.get_uma_sex_title()}，打破了世界的纪录`,
    );
    await era.printAndWait(
      `那灼伤了自己双眼的跑法，第一次，也是最后一次在世界上绽放出最璀璨的光彩`,
    );
    era.println();
    await era.printAndWait(`比赛后回到选手休息室的速子没有多说什么`);
    await era.printAndWait(`你一如往常的先为${tachyon.sex}检查腿部状况`);
    era.println();
    await tachyon.say_and_wait(`……没有必要了吧，豚鼠君`);
    await tachyon.say_and_wait(`明明知道的不是吗？`);
    era.println();
    await era.printAndWait(`你陷入沉默`);
    await era.printAndWait(`虽然知道结局，但还是忍不住期待奇迹`);
    await era.printAndWait(`然而……`);
    era.println();
    await era.printAndWait(
      `你没有多说什么，只是帮着速子用药冷却及减轻腿的负担`,
    );
    await era.printAndWait(
      `直到官方通知，颁奖仪式已经准备好了，你们才慢慢的朝着舞台走去`,
    );
    era.println();
    await tachyon.say_and_wait(`……那么，怎么样？这场比赛，让你满意了吗？`);
    era.println();
    await era.printAndWait(`拼尽了一切，燃烧了自己的双腿`);
    await era.printAndWait(`以此获得的胜利`);
    await era.printAndWait(`怎么可能不使人着迷，又怎么可能不使人狂热`);
    era.println();
    await era.printAndWait(`自己，一定不是个称职的训练员吧`);
    await era.printAndWait(
      `身为训练员，应该要理智的为${tachyon.get_uma_sex_title()}考虑对${
        tachyon.sex
      }们最好的选项`,
    );
    await era.printAndWait(
      `但自己，只是为了看见最美的跑法，最强的跑姿，就放任自己的负责${tachyon.get_uma_sex_title()}做出了这种事`,
    );
    await era.printAndWait(`幸好，此时的问题也不是需要以训练员的身份做回答的`);
    await era.printAndWait(`以一名粉丝，以${tachyon.name}最狂热的死忠粉的身份`);
    era.printButton(`是我看过的，最精彩的一场比赛了`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`${tachyon.name}露出了朝阳般的微笑`);
    await era.printAndWait(
      `比起${tachyon.sex}的光芒，略显弱小，却更加柔和，更加温暖的光芒`,
    );
    era.drawLine();
    await era.printAndWait(`隐隐作痛的腿`);
    await era.printAndWait(`明显刺痛的足跟`);
    await era.printAndWait(`但比起这些，更多的还是遗憾`);
    era.println();
    await era.printAndWait(`虽然早就知道了，但果然……`);
    await era.printAndWait(`${tachyon.name}，直到最后也还是没能超越极限`);
    era.println();
    await era.printAndWait(`没有什么好失望的，只不过照着原计划进行而已`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `速子小姐！恭喜您今天拿下凯旋门赏！除此之外，这次的凯旋门还打破了历届以来的纪录！`,
    );
    await say_by_passer_by(
      `记者A`,
      `关于这场胜利，请问有想对对手或日本的亲友说的话吗？`,
    );
    era.println();
    await tachyon.say_and_wait(`……呵呵`);
    await tachyon.say_and_wait(`那么最后……让我说几句吧`);
    await say_by_passer_by(`记者A`, `最后……？`);
    await tachyon.say_and_wait(
      `我，相信所有${tachyon.get_uma_sex_title()}都具有自己的可能性`,
    );
    await tachyon.say_and_wait(`无论是什么样的高墙，都一定能将其超越`);
    await tachyon.say_and_wait(`所以……这个纪录，只是个开始，而非结束`);
    await tachyon.say_and_wait(
      `接下来，必然会有更多的${tachyon.get_uma_sex_title()}能够站上世界，然后……超越极限`,
    );
    await tachyon.say_and_wait(`我如此相信，并期望着各位，以及……`);
    era.println();
    await era.printAndWait(
      `充满了对后来者的期望，却又将傲慢的将自己定义为极限`,
    );
    await era.printAndWait(`台下的众人燃烧着斗志，望着台上的${tachyon.sex}`);
    await era.printAndWait(
      `但${tachyon.sex}的眼中，却是至今仍躲在观众席上的那人`,
    );
    await era.printAndWait(`舞台已经布置完成`);
    await era.printAndWait(`热场已经结束`);
    await era.printAndWait(`接下来，你有办法超越这一切吗？`);
    era.println();
    await era.printAndWait(`${tachyon.name}，对曼城茶座发出了无声的挑战`);
    era.drawLine();
    await era.printAndWait(`凯旋门赏结束`);
    await era.printAndWait(`在比赛结束后你马上带着速子到医院进行检查`);
    await era.printAndWait(`如预料一般，却又在预料之外`);
    await era.printAndWait(`如预料一般，是严重到必须退役的腿伤`);
    await era.printAndWait(`预料之外的，伤势远没有想像的那么严重`);
    await era.printAndWait(`除了无法奔跑以外，就没有其他更严重的情况了`);
    await era.printAndWait(
      `……然而对${tachyon.get_uma_sex_title()}而言，也不需要比这更严重的状况了`,
    );
    era.println();
    await era.printAndWait(`${tachyon.name}退役的消息瞬间震惊了世界`);
    await era.printAndWait(
      `身为其训练员的你受到了全世界的关注，其中也不免有对此的抱怨微词出现`,
    );
    // todo 爱慕值+10
    // 扣除20声望
    // ${tachyon.name}退役，不可进行训练&比赛
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 0
  ) {
    await print_event_name(`有马纪念后·超越极限`, tachyon);
    era.println();
    await tachyon.say_and_wait(`哈啊……哈啊……`);
    era.println();
    await era.printAndWait(`脚步沉重，迟钝`);
    await era.printAndWait(`原因……很清楚`);
    await era.printAndWait(`来自身后的猎犬散发出了强烈的压迫感`);
    era.println();
    await era.printAndWait(
      `在茶座奔跑时，无论是前后的${tachyon.get_uma_sex_title()}都会感受到的极强压迫力`,
    );
    await era.printAndWait(
      `和${tachyon.sex}的朋友在内，都是自己的科学无法解释的东西`,
    );
    era.println();
    await tachyon.say_and_wait(`……来了！`);
    era.println();
    await era.printAndWait(`曼城茶座追在身后`);
    await era.printAndWait(
      `后颈汗毛竖立，仿佛能够感受到${tachyon.sex}的鼻息一般`,
    );
    await era.printAndWait(`就是现在，就在这里`);
    era.println();
    await era.printAndWait(`如果说${tachyon.name}拥有的是超越次元的速度`);
    await era.printAndWait(`那么曼城茶座就是跨越次元的弔诡`);
    await era.printAndWait(`不知会从何出现，仿佛从镜中世界穿越而来的异形身姿`);
    era.println();
    await era.printAndWait(`那漆黑的幻影，瞬间超越了${tachyon.name}`);
    era.println();
    await tachyon.say_and_wait(`……抱歉`);
    era.println();
    await era.printAndWait(`为了实现自己的梦想，而将他人的梦想踢落`);
    await era.printAndWait(`更何况，对方还是……`);
    await era.printAndWait(`是什么呢？`);
    await era.printAndWait(`朋友？宿敌？天生相克的存在？研究者和实验品？`);
    await era.printAndWait(`将最后一个选项甩出脑袋后，曼城茶座继续向前奔驰`);
    await era.printAndWait(
      `在通往梦想的道路上，即便是再深的感情，顶多也就只能化作这样一句抱歉`,
    );
    era.println();
    await era.printAndWait(
      `只要跨越此处，接下来，下个目标，就是『那个身影』……！`,
    );
    era.println();
    await era.printAndWait(`但是，${tachyon.sex}漏判了一个可能性`);
    era.println();
    await era.printAndWait(`${tachyon.name}，还留有余力的可能性`);
    await era.printAndWait(`${tachyon.name}，一开始就没有用尽全力的可能性`);
    await era.printAndWait(`${tachyon.name}，在等待的就是这个时机的可能性`);
    era.println();
    await era.printAndWait(
      `前方的${tachyon.get_uma_sex_title()}是……跑在最前头的逃${tachyon.get_uma_sex_title()}，以及曼城茶座`,
    );
    await era.printAndWait(
      `最适合${tachyon.name}的位置，仿佛在实验室里一般舒适的位置`,
    );
    await era.printAndWait(`就是现在，就在这里`);
    era.println();
    await era.printAndWait(`时间停滞了，世界改变了`);
    era.println();
    await era.printAndWait(`眼前是无穷无尽无垠的黑色空间`);
    await era.printAndWait(`充满了算式的数理公式`);
    era.println();
    await era.printAndWait(`想要超越曼城茶座——变量宿敌已添加`);
    await era.printAndWait(`最适合自己的环境——变量跑位已添加`);
    await era.printAndWait(`锻鍊及天赋的结合——变量速度已添加`);
    await era.printAndWait(`然后是……`);
    era.println();
    await era.printAndWait(`从身后，感觉到了一丝暖意及红茶的香味`);
    await era.printAndWait(`但${tachyon.name}没有回头`);
    await era.printAndWait(`不需要回头，因为那是对对方的不信任`);
    await era.printAndWait(
      `看着前方，然后……等待对方，相信他必然会追上自己，与自己同行`,
    );
    era.println();
    await era.printAndWait(`冒着热气的红茶被摆放在${tachyon.name}的面前`);
    await era.printAndWait(`宛如日常的实验室一般`);
    await era.printAndWait(`一切都是如此理所当然`);
    era.println();
    await era.printAndWait(`他会理所当然的陪伴在${tachyon.name}身旁`);
    await era.printAndWait(`${tachyon.name}理所当然的会解决面前一切难题`);
    era.println();
    await tachyon.say_and_wait(`最后的解就是这个……`);
    era.println();
    await era.printAndWait(`在宛如黑板的空间中画下U=MA2的公式`);
    await era.printAndWait(`瞬间，黑暗的空间中，所有算式发出光芒`);
    await era.printAndWait(`这就是，${tachyon.name}的最终解`);
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}追上来了！${tachyon.name}追上来了！`,
    );
    await say_by_passer_by(
      `解说`,
      `最前面的逃${tachyon.get_uma_sex_title()}已经后继无力，最后的激战果然还是这两人！`,
    );
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}！曼城茶座！几乎并排冲入最终直线！`,
    );
    // todo 曼城茶座菊花赏胜利
    await say_by_passer_by(
      `解说`,
      `『最强的${tachyon.get_uma_sex_title()}，与最快的${tachyon.get_uma_sex_title()}，要在这里绝出胜负！』`,
    );
    await era.printAndWait(`啊啊`);
    await era.printAndWait(`明明是在比赛`);
    await era.printAndWait(`却感觉……如此畅快`);
    era.println();
    await era.printAndWait(`与自己认可的劲敌`);
    await era.printAndWait(`发挥出自己的全力`);
    await era.printAndWait(`但是……还不够`);
    era.printButton(`超越极限吧！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`随着接受过的几次采访`);
    await era.printAndWait(
      `超越极限似乎已经成为${tachyon.name}的粉丝口中，超越『${tachyon.name}最强』、『${tachyon.name}必胜』等的口号了`,
    );
    await era.printAndWait(
      `但即便是如此杂乱的助威声，与他的话语相比，听起来都是那么模糊`,
    );
    era.println();
    await era.printAndWait(`嗯，没错`);
    await era.printAndWait(`就是现在`);
    era.println();
    await era.printAndWait(`比起领域更上一层的极限`);
    await era.printAndWait(`超越极限吧`);
    await era.printAndWait(`超越${tachyon.get_uma_sex_title()}的极限`);
    await era.printAndWait(`超越${tachyon.name}的极限`);
    await era.printAndWait(`超越一切，然后，在这之后`);
    await era.printAndWait(`朝着更加遥远的彼方—————伸手`);
    await say_by_passer_by(
      `解说`,
      `冲————线！破，破纪录了！年度的总决赛！是${tachyon.name}！打破纪录，在今日称霸中山赛场的是${tachyon.name}！`,
    );
    era.println();
    await era.printAndWait(`结束了`);
    await era.printAndWait(`结束……了？`);
    era.println();
    await era.printAndWait(`应该是，结束了吧`);
    await era.printAndWait(`毕竟揭示版上都排出成绩了`);
    await era.printAndWait(`但是，身体的热意却丝毫不像比赛已经结束一样`);
    await era.printAndWait(`肾上腺素仿佛沸腾一般还在源源不绝产出`);
    era.println();
    await say_by_passer_by(`观众A`, `做到了啊！`);
    era.println();
    await era.printAndWait(`忽然的喊声，使自己在吓了一跳的同时回归现实`);
    await say_by_passer_by(`观众B`, `真的，真的打破记录了啊！`);
    await say_by_passer_by(`观众C`, `好样的！`);
    era.println();
    await era.printAndWait(`整个会场欢声雷动`);
    await era.printAndWait(`……简直，比胜利的自己还要兴奋啊`);
    era.println();
    await era.printAndWait(`应该，要做出回应的吧`);
    await era.printAndWait(`不管怎么说，应该要做出社会性的表达`);
    await era.printAndWait(`……不，这只是纯粹，对支援者的感谢`);
    await era.printAndWait(`应该要表现出来才对`);
    await era.printAndWait(`但是……`);
    era.println();
    await era.printAndWait(`挣扎了半天`);
    await era.printAndWait(`也只能勉强抬手`);
    await era.printAndWait(`仿佛整个人依然活在梦里一般`);
    era.println();
    await era.printAndWait(`只是`);
    await era.printAndWait(`光是这样，便足以掀起巨浪般的欢声了`);
    era.drawLine();
    era.printButton(`速子……那就是……！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`不敢做出定论`);
    await era.printAndWait(`没有人会敢对自己从没见过的东西做出定论`);
    await era.printAndWait(
      `如果为真的话，那么，这将是从未有人抵达过的领域————`,
    );
    era.println();
    await era.printAndWait(`…………`);
    era.printButton(`……速子？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`仿佛还没从梦中惊醒一般`);
    await era.printAndWait(`虽然很难描述，但眼前的速子，就好像在梦游一般`);
    await era.printAndWait(`这种情况下，应该唤醒${tachyon.sex}的吧？`);
    await era.printAndWait(`但是，要怎么做呢？`);
    await era.printAndWait(`毕竟连自己都忍不住怀疑，眼前的这些只是一场梦而已`);
    await era.printAndWait(
      `如此漫长的三年，在今天终于以最完美的实验成果画下尾声`,
    );
    era.println();
    await tachyon.say_and_wait(`…………呵呵`);
    await tachyon.say_and_wait(`哈哈哈哈哈哈哈！`);
    era.println();
    await era.printAndWait(`如果说前一秒发出的笑声是让人欣慰总算回过神来`);
    await era.printAndWait(`那么，后一秒的狂笑便是使人怀疑是否是脑袋出问题了`);
    await era.printAndWait(`正当你担忧的想上前检查时……`);
    era.println();
    await tachyon.say_and_wait(`你看到了吗？……你看到了吧！豚鼠君！`);
    await tachyon.say_and_wait(
      `这就是，实验的成果……我带你看见了！这就是，极限之后的世界！`,
    );
    await era.printAndWait(`你想起去年十一月时速子说过的话`);
    era.println();
    tachyon.print(`作为报酬，我会让你看见更加宽广的世界`);
    era.println();
    await era.printAndWait(`${tachyon.sex}真的做到了`);
    await era.printAndWait(`每一场比赛，都在距离目标更近一步`);
    await era.printAndWait(`然后现在`);
    await era.printAndWait(`两人真的看见了更宽广的，极限后的世界`);
    era.printButton(`嗯……我们真的，做到了`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `这是你第一次看见，世界上竟然还有比速子的跑法更加闪耀的东西`,
    );
    await era.printAndWait(`那就是，此时速子脸上露出的笑容`);
    era.drawLine();
    era.println();
    await era.printAndWait(`有马后隔天`);
    await era.printAndWait(
      `或许是目的达到使你放下心来，这三年以来，你第一次迟到了`,
    );
    await era.printAndWait(`不过，毕竟两人的目标已经实现`);
    await era.printAndWait(`接下来就轻松的迎接URA总决赛吧`);
    era.println();
    if (love < 50) {
      await tachyon.say_and_wait(`你在搞什么？这么慢，实验都开始多久了`);
      era.println();
      await era.printAndWait(
        `当你来到速子的实验室时，看见的却是一如既往专注于研究的速子`,
      );
      era.println();
      await tachyon.say_and_wait(
        `昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！`,
      );
      await tachyon.say_and_wait(
        `只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！`,
      );
      await tachyon.say_and_wait(`快点换好实验服过来帮忙！`);
      await coffee.say_and_wait(`……速子同学，你好吵`);
      await tachyon.say_and_wait(
        `哦呀哦呀，这不是昨天有马纪念输给我的茶座君吗？`,
      );
      await tachyon.say_and_wait(
        `有什么想说的我洗耳恭听，毕竟接受败者的狂吠也是身为胜利者的————`,
      );
      await coffee.say_and_wait(`啧……`);
      await tachyon.say_and_wait(`哇啊！我的实验资料————烧………没烧起来？`);
      era.println();
      await era.printAndWait(
        `瞬间，速子的实验资料燃烧了起来，但正当速子急急忙忙冲上去想抢救资料时，火焰忽然消失了`,
      );
      era.println();
      await tachyon.say_and_wait(
        `……只有这次姑且承认……昨天速子同学确实，跑的不错……`,
      );
      await tachyon.say_and_wait(
        `虽然很不甘心……但……一不小心把你和『朋友』重叠了……`,
      );
      await coffee.say_and_wait(
        `朋友？哦？这个……很有意思啊！茶座，希望你还请务必仔细说说！`,
      );
      await tachyon.say_and_wait(`吵死了……走开……`);
      era.println();
      await era.printAndWait(
        `看着吵闹的两人，你换上了实验服，苦笑着加入这今后也会继续下去的日常`,
      );
    } else if (love > 50) {
      await era.printAndWait(`然而，当你到了实验室门前`);
      await era.printAndWait(`你听见了里面的对话声`);
      era.println();
      await tachyon.say_and_wait(
        `茶座……怎么办……豚鼠君他该不会，真的不来了吧……`,
      );
      await coffee.say_and_wait(`……关我什么事`);
      await tachyon.say_and_wait(
        `昨天我说了目标已经达成……他会不会因为这样就不来了……`,
      );
      await tachyon.say_and_wait(
        `说到底会不会其实什么三年以来累积的羁绊都是我自己的妄想，说不定他从头到尾都没有……都没有……`,
      );
      await coffee.say_and_wait(`……如果真的是那样的话，你要怎么办？`);
      await tachyon.say_and_wait(
        `……果然，那就得用药让他离不开我了啊，仔细想想这不是很不公平吗？`,
      );
      await tachyon.say_and_wait(
        `只有我离不开他，他离了我却一样能活的好好的，还是得尽快弄出点成瘾性高的药让他从此再也离不开我……`,
      );
      await tachyon.say_and_wait(
        `或者像小说里面那种蛊毒……要是不定时服用我做的解药就会发作……`,
      );
      await coffee.say_and_wait(`……真重啊`);
      // todo If 茶座爱慕值>50
      await coffee.say_and_wait(`但警告你，不准对我的训练员先生做那种事`);
      era.println();
      await era.printAndWait(`听到这有些背脊发凉的你连忙推了门进去`);
      era.println();
      era.printButton(`对不起！我睡过头了！`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `豚鼠君！………你在搞什么？这么慢，实验都开始多久了！`,
      );
      era.println();
      await era.printAndWait(
        `虽然板着脸装作严厉的样子，但速子身后那疯狂摇摆的尾巴却完全按耐不住`,
      );
      await era.printAndWait(
        `${tachyon.sex}似乎也注意到了般努力的压了几下，但还是压不住，于是转过头来，好似什么也没发生的继续念叨`,
      );
      era.println();
      await tachyon.say_and_wait(
        `昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！`,
      );
      await tachyon.say_and_wait(
        `只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！`,
      );
      era.println();
      await tachyon.say_and_wait(`……所以说，快点换好实验服过来帮忙！……好吗？`);
      era.println();
      await era.printAndWait(
        `看着想要装作严厉的虚张声势却又不安的望着你的速子`,
      );
      await era.printAndWait(`你忍不住上前，抱住了${tachyon.sex}`);
      era.println();
      await tachyon.say_and_wait(`！豚鼠君……！`);
      era.println();
      await era.printAndWait(
        `${tachyon.name}与${tachyon.sex}的实验动物，在三年后，还将迎来第二个，第三个三年，直到永久……`,
      );
      //todo 茶座爱慕值<50
      await coffee.say_and_wait(`……你们可以不要在我面前秀恩爱吗？`);
      era.println();
      await era.printAndWait(`却忘记了，房间里另一位正在忍受狗粮袭击的同房者`);
      // todo 茶座爱慕值>50
      await coffee.say_and_wait(`……别得寸进尺了，把训练员先生还我`);
      era.println();
      await era.printAndWait(`在两人的争夺下，你苦笑着加入了吵吵闹闹的日常`);
    }
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.PlanB === 1
  ) {
    await print_event_name(
      `有马纪念后·最强的${tachyon.get_uma_sex_title()} 最快的跑法`,
      tachyon,
    );
    era.println();
    await era.printAndWait(`一开始，${tachyon.name}只是在等待着`);
    await era.printAndWait(`等待比赛结束，等待豚鼠君给出他的回答`);
    era.println();
    await era.printAndWait(`${tachyon.sex}不能理解这场比赛到底有什么意义`);
    await era.printAndWait(`难道是为了让自己看清现在与茶座的差距吗？`);
    await era.printAndWait(
      `是嫌现在的自己还不够可悲吗？甚至不由得产生这种自暴自弃的想法`,
    );
    await era.printAndWait(`因此，${tachyon.sex}并没有仔细关注着赛场`);
    await era.printAndWait(`只是等待时间过去`);
    era.println();
    await say_by_passer_by(
      `解说`,
      `比赛开始！所有${tachyon.get_uma_sex_title()}稳定的出闸`,
    );
    era.println();
    await era.printAndWait(`最开始，是解说的声音勾起了${tachyon.sex}的好奇心`);
    await era.printAndWait(
      `哪怕不能奔跑，${tachyon.name}也还是对一切都具有着好奇`,
    );
    await era.printAndWait(`尤其对方是理论上自己应该知根知底的茶座`);
    era.println();
    await era.printAndWait(`随后，是违和`);
    await era.printAndWait(`其实违和感并非是从现在才有的`);
    await era.printAndWait(`从日本杯结束那时起就有这种感觉`);
    await era.printAndWait(
      `曼城茶座的跑法……似乎和最初${tachyon.sex}的跑法有些微小的不同点`,
    );
    await era.printAndWait(
      `如果说，自己是一直盯着茶座的话，或许根本发现不了这种不同，便是如此微小的不同`,
    );
    await era.printAndWait(
      `但对日本杯后便再也没有认真看过茶座奔跑的自己而言，哪怕只是一丝丝的改变，都是无比明显的`,
    );
    await era.printAndWait(`尤其……`);
    await era.printAndWait(`那虽然依旧是茶座自己的跑法，但是……`);
    await era.printAndWait(`细节部分……出闸的姿势……换气的方式……`);
    await era.printAndWait(
      `那些细节……是${tachyon.name}自己都未曾注意过的，自己特有的习惯`,
    );
    await era.printAndWait(`那是……`);
    era.println();
    era.printButton(
      `这是……融合了我所知道，最快，最强的两名${tachyon.get_uma_sex_title()}的跑法`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `令自己魂牵梦萦的那个人，不知何时已经站在了自己身旁`,
    );
    await era.printAndWait(
      `眼中的光，依旧闪烁，依旧盯着在赛场上奔跑的那名${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(`但是……`);
    era.println();
    await era.printAndWait(`他眼中的光，究竟为谁而明`);
    await era.printAndWait(`是为了${tachyon.name}，还是曼城茶座`);
    await era.printAndWait(
      `以前的自己想当然尔认为，既然自己已经无法登上赛场，那么看着的必然就是茶座`,
    );
    await era.printAndWait(`但是……`);
    era.printButton(
      `除此之外我也坚信，没有比这更绚烂，更灼目，更使人着迷的跑法了`,
      1,
    );
    await era.input();
    await say_by_passer_by(
      `解说`,
      `曼城茶座！超越了光速的漆黑幻影！称霸了年末的中山赛场的是曼城茶座！`,
    );
    era.println();
    await era.printAndWait(
      `恍惚下，自己仿佛看见了，${tachyon.name}与曼城茶座同时跨越终点线的瞬间`,
    );
    era.drawLine();
    await era.printAndWait(
      `为了实现那名${tachyon.get_teen_sex_title}能够超越朋友的梦想`,
    );
    await era.printAndWait(`为了让使自己魂牵梦萦的身影能够继续在眼前奔跑`);
    await era.printAndWait(
      `让最强的${tachyon.get_uma_sex_title()}与最快的速度结合`,
    );
    await era.printAndWait(`脑袋里想了许多应该在此时说出的帅气话语`);
    await era.printAndWait(`但在开口的瞬间……又被堵了回去`);
    await era.printAndWait(`啾……咕……啾咕……`);
    await tachyon.say_and_wait(`如此多人的观众席上，如此大胆的吻`);
    await era.printAndWait(
      `……如果不是周围的人都在关注赛场中央的茶座的话，绝对会引起又一波的声讨风波吧`,
    );
    await era.printAndWait(`某种意义上，也真不愧是${tachyon.sex}会做出的行为`);
    era.println();
    await era.printAndWait(
      `持续了不知道多久，久到你开始起自己的生命，以及静下心来的观众会发现你们二人的不对时，`,
    );
    await era.printAndWait(
      `${
        tachyon.sex
      }才总算想起了无论对人类还是${tachyon.get_uma_sex_title()}而言，最重要的氧气的存在`,
    );
    await era.printAndWait(
      `速子那不知是因缺氧，还是某些情绪上的原因而微红的脸庞，`,
    );
    await era.printAndWait(
      `以及被你爱着的，那闪烁着狂气光芒的暗红眼眸依然正对着你的脸`,
    );
    await era.printAndWait(`而后……`);
    await era.printAndWait(
      `这是你第一次看见，世界上竟然还有比速子的跑法更加闪耀的东西`,
    );
    await era.printAndWait(`那就是，此时速子脸上露出的笑容`);
    era.drawLine({ content: '回到特雷森学园后' });
    await coffee.say_and_wait(`……今天赢下有马的，是我没错吧`);
    await tachyon.say_and_wait(`那当然了，茶座，比赛很精彩哦`);
    await coffee.say_and_wait(
      `那么……可以说明一下，为什么速子同学却一副得意洋洋的样子黏在训练员先生身边吗？`,
    );
    era.println();
    await era.printAndWait(`从赛场回来后，速子便一直扒着自己不放`);
    await era.printAndWait(`现在也是，拉着你坐在沙发上后便一直抱着自己的左手`);
    await era.printAndWait(
      `除此之外，还一直用一种都是自己的功劳的神情得意的看着茶座`,
    );
    era.println();
    await tachyon.say_and_wait(`哼哼～～有什么不好嘛，有什么不好嘛`);
    // todo 茶座爱慕<75
    await era.printAndWait(
      `速子露出了恶代官的笑容，放在你身上的手还不安份的乱动着`,
    );
    await era.printAndWait(`然后……`);
    era.println();
    await tachyon.say_and_wait(`咕欸————`);
    era.println();
    await era.printAndWait(
      `忽然，速子仿佛被未知的无名力量击中脑袋一般，瞬间昏迷了过去`,
    );
    await coffee.say_and_wait(`……真是`);
    await coffee.say_and_wait(
      `这样总算能安静些了……那么，训练员先生，要来杯咖啡吗？`,
    );
    era.println();
    await era.printAndWait(`你微微露出苦笑，对茶座说了声“麻烦了”`);
    await era.printAndWait(`不过，单纯的咖啡不知为何此刻忽然觉得有些太苦`);
    await era.printAndWait(`在冬阳照射的训练员室中，总觉得现在的此刻`);
    await era.printAndWait(`更适合加入一些其他的东西……`);
    era.printButton(`……那个，要不要试试，鸳鸯咖啡？`, 1);
    await era.input();
    await era.printAndWait(
      `茶座看着你，先是有些恼怒，随后仿佛想到了什么，露出了无奈的表情`,
    );
    await coffee.say_and_wait(
      `……只有今天，而且一定要瞒着速子同学，不然${tachyon.sex}一定又会开始吵`,
    );
    await era.printAndWait(`喝了一口与咖啡混合的红茶`);
    await era.printAndWait(
      `咖啡的苦味和红茶的涩味淡了，但其香气却没有任何减少，反而更加突显出彼此的风味`,
    );
    await era.printAndWait(`不知为何，你感觉现在正是这个味道合适`);

    // todo If 茶座爱慕>75
    await era.printAndWait(`听见速子仿佛时代剧里的恶役一般口吻的话`);
    await era.printAndWait(`茶座先是全身颤抖`);
    await era.printAndWait(
      `正当你担心${tachyon.sex}会不会冲动下做出什么事的时候`,
    );
    await coffee.say_and_wait(`————那我也要`);
    era.println();
    await era.printAndWait(
      `仿佛赌气一般，茶座瞬间挤上了沙发，坐在了你的双腿中间`,
    );
    era.println();
    await tachyon.say_and_wait(`喂——茶座，这也太狡猾了！`);
    await coffee.say_and_wait(
      `……才不狡猾，再说……狡猾又有什么不对，今天的赢家明明是我……`,
    );
    await tachyon.say_and_wait(`可恶，我也要坐！`);
    era.println();
    await era.printAndWait(`看着像小孩一般争吵的两人，你不由得露出苦笑`);
    await era.printAndWait(`—————不知道为什么，忽然想喝鸳鸯咖啡了`);
    await coffee.say_and_wait(
      `……对了，训练员先生……关于速子同学比赛前说的，昨天晚上出门的事情……可以请您之后好好说清楚吗？`,
    );
    await era.printAndWait(`听见茶座借着地理优势在你耳边悄悄说出的话`);
    await era.printAndWait(`你的苦笑僵在了脸上`);
  }
};
