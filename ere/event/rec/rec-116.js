const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const know_me = require('#/event/rec/rec-events-116/know-me');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async footprint(donna, me) {
    if (era.get(`cflag:${this.id}:招募状态`) === -1) {
      if (await this.check_before_rec()) {
        return;
      }
      era.set(`cflag:${this.id}:招募状态`, recruit_flags.no);
      era.set(`cflag:${this.id}:随机招募`, 0);
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.recruit).set_arg('good_news'),
      );
      era.set('flag:物色对象', 116);
      new EventMarks(0).add(event_hooks.week_end);
      return;
    }
    const verxina = get_chara_talk(90);
    await print_event_name('蹄印', donna);
    era.drawLine({ content: `${me.name} 的视角` });
    await era.printAndWait(['冀望之物锱两可数，过眼烟云恒如河沙。']);
    await era.printAndWait([
      '选拔赛，一天十二场、从早到晚，间歇安排，越受期待的',
      donna.get_uma_sex_title(),
      '普遍在更靠后的比赛中出现。',
    ]);
    await era.printAndWait([
      '特雷森完全是按商业性正规比赛的规矩举行选拔赛，也就意味着——',
    ]);
    await me.say_and_wait(['连选拔赛都这么规矩，真是要把人急死了'], true);
    era.println();
    await era.printAndWait([{ content: '"12R15:30"', fontWeight: 'bold' }], {
      align: 'center',
      isParagraph: true,
    });
    era.println();
    await era.printAndWait(['LED刷新的一瞬，我立即冲揭示板血淋淋地钉死眼睛，']);
    era.println();
    await me.say_and_wait(['从前往后第五排的、方位上最方便观察的位置'], true);
    era.println();
    await era.printAndWait([
      '为了不被碍事者占掉这块位置，我放弃了多余的步骤，早饭、没吃，午饭、没吃。',
    ]);
    await era.printAndWait([
      '矿泉水早就喝干了，这是自己的软弱招致的报应，没能忍心拒绝某名讨水的',
      donna.get_uma_sex_title(),
      '的结果，但我也百分之五十地认为——那是必须做的。毕竟要是',
      donna.sex,
      '讨来一瓶来自陌生人的饮用水后，我又怎知道里头有什么被',
      donna.sex,
      '喝下去呢？',
    ]);
    await era.printAndWait([
      '从早十到现在，我滴水未进。半小时前更淅沥沥下了场中雨，整个场地状态糟糕的像我一样，可它却水分充足，真令我羡煞。',
    ]);
    era.println();
    await me.say_and_wait(['但是，没有关系，全都可以忍受。']);
    era.println();
    await era.printAndWait(['因为我知道自己想要什么']);
    era.println();
    await era.printAndWait([
      '————我在追缉一枚蹄印。您看过它的照片吗？它是……被彻底的、压倒性的、独一无二的巨力烙在草场上的蹄印。来自一场被我错过的选拔赛。',
    ]);
    era.println();
    await era.printAndWait([
      '赛场开始喧哗起来，不认识的、不认识的、不认识的、不认识的、不认识的、不认识的',
      donna.get_uma_sex_title(),
      '，宛若打上红丝带的受精蛋，挨个从地下通道滚进闸门。',
    ]);
    await era.printAndWait([
      '可能喝掉那半瓶水的',
      donna.get_uma_sex_title(),
      '就在里头吧，自己对他没什么期望。',
    ]);
    await era.printAndWait([
      '然后，令人想起燃气灶或青金石的发色、那位有名的好阿姐，',
      verxina.get_colored_name(),
      ' 入场了！',
    ]);
    await era.printAndWait([
      '那颗高悬的心从绞索上求得解脱了！我从这一刻喜欢起靛青了、靛青这定性不够准确也无所谓，我在等待 ',
      donna.get_colored_name(),
      '——那枚蹄印的主人！',
    ]);
    await era.printAndWait([
      '明晰蹄印之主身份十分简单、在校内假装与 ',
      donna.get_colored_name(),
      ' 偶遇也很简单、在这场出赛名单莫名未被公开的选拔举行之前就去向',
      donna.sex,
      '宣扬主张更简单。',
    ]);
    await era.printAndWait([
      '但是，',
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length <= 1
        ? '尽管作为训练员的资历干净得白茫茫一片，'
        : '',
      '在迄今为止的生活与工作中不幸诞生的又一种心理怪癖，令我偏执地静候这场选拔赛举行。',
    ]);
    await era.printAndWait([
      '然后一切明了：',
      donna.get_colored_name(),
      ' 会来、',
      donna.get_colored_name(),
      ' 一定会参赛！',
    ]);
    await era.printAndWait([
      '光是看着那枚蹄印就知道了，它的制造者！有与生俱来的伟力，以及和这素质相匹配的斗争心。即使 ',
      verxina.get_colored_name(),
      ' 并非同一水准的对手、但',
      donna.sex,
      '会来！一定会来！',
    ]);
    await era.printAndWait([donna.get_colored_name(), ' 来了！']);
    era.println();
    await donna.say_and_wait([
      '啊啦、',
      sys_get_colored_callname(116, 90),
      '，有何贵干？',
    ]);
    era.println();
    await era.printAndWait([
      '这是预定发生的事实，然后 ',
      verxina.get_colored_name(),
      ' 走上前去——这是预料之中的，先前那不知第多少次败在 ',
      donna.get_colored_name(),
      ' 手下时，',
      donna.sex,
      '也是这样发起挑战的——不管怎样失败都会再起、然后，到这里、到 ',
      donna.get_colored_name(),
      ' 面前。',
      verxina.sex,
      '会说：',
    ]);
    era.println();
    await me.say_and_wait(['——我要再次向你发起挑战。'], true);
    await verxina.say_and_wait(['——我要再次向你发起挑战。']);
    era.println();
    await era.printAndWait([
      '我情不自禁从观众席上猛一起身！但站到半途又为避免遮挡坐回了位上——成了！',
      donna.sex,
      '来了！',
      donna.get_colored_name(),
      ' 并不主动去与 ',
      verxina.get_colored_name(),
      ' 沟通、但不自然地留下时间等',
      donna.sex,
      '找上来宣战，这是极为优秀可控的斗争心！自己并未推测失准。',
    ]);
    await era.printAndWait([
      '我感到双手颤抖、五指僵死般陷入麻木，但这于训练员而言过分平常，为了一次漫长的构思、茶饭不食地伏案工作不也会如此。',
    ]);
    await era.printAndWait([
      '这种时候躯体反应随便掰拉几下敷衍就好，坚持下去。入闸完毕。一瞬间，将笼罩全场的寂静。那是 ',
      donna.get_colored_name(),
      ' 与 ',
      verxina.get_colored_name(),
      ' 的威荣所致吗？我的右手突然抽筋、几根指骨被反弓扯开引发令人心惊的爆响、只好用大腿狠狠压回关节！KRABAAAAA喀吧！同时闸门打开！没有出迟——如同庆祝正发生一场值得咀嚼的比赛、席上轰鸣着万雷喝彩！',
    ]);
    era.println();
    await era.printAndWait([
      '那些跟自己都没有关系，虽然我也确实感到兴奋。两千米的选拔赛。在我的眼里，每个',
      donna.get_uma_sex_title(),
      '都（一定程度上）遵循着物理规则给自己草拟一道时间——速度大题。可以理解、可以解析、可以预测。揣测一下出题人的意思：为什么是两千米？',
    ]);
    era.println();
    await me.say_and_wait([
      '这是心高气傲吗？选拔赛跟出道赛都被限制了长度，两位是斗争心强偏要选着最长的赛事斗法、或者其中一方自认为对两千米的适性最佳、还是射程如此？',
    ]);
    era.println();
    await era.printAndWait([
      '身旁的人群起伏挥手若神奈川、欢呼若浪涛黄沙，令人血脉贯张的比赛啊！杂音逐渐被激励与喝彩统一、「',
      verxina.get_colored_name(),
      '！」、「',
      donna.get_colored_name(),
      '！」——汇流迅速形成应援！选拔赛的应援可没有重赏那么威武宽宏，然而这也会对比赛产生影响。要修正预测？不需要！',
    ]);
    await era.printAndWait([
      '射程的问题答案不唯一的。但这俩人斗争心比天高是板上钉钉。赛事展开比自己手指抽筋快上许多——继续分析——这次换到左手抽筋，我心一横、拿刚捋直的右边手挨个进行物理矫正。二十秒却精彩若一分钟的序盘，即使那 ',
      donna.get_colored_name(),
      ' 与自己期望的不符，这场赛事录像也会成为美妙的食材。',
    ]);
    era.println();
    await me.say_and_wait([
      '这可不好划分逃先差追了。用力大砖飞形容从这里开始就不断领放的 ',
      donna.get_colored_name(),
      ' 最合适，落后但是又与后方集团保持距离的 ',
      verxina.get_colored_name(),
      ' 呢，不是先差跑法变换自如，而是犯了怯，在追平与蓄势间不上不下地犹豫起来。剩下那些……很可惜，对我而言不算可造之才。我不研究无价值的材料。',
    ]);
    era.println();
    await era.printAndWait([
      '胜负分明了。同时训练员的抽筋全部被矫正完毕——以使用大腿将之压平不放的治疗方案。身边人好似被误了兴致、拿京都腔小声地骂了句「精神真好啊小哥」，我他妈的才没听岔这个傻逼、分心一瞬、但不愿也不敢计较。啊，毫无坡道起伏的场地，五秒后进入最终弯道、然后紧接直线，到现在为止还有六个马身的差距在 ',
      verxina.get_colored_name(),
      ' 面前——胜负确实分明了。要问为什么……',
    ]);
    era.println();
    await era.printAndWait([
      '没有上下坡、脚力差距明显却又在重场与 ',
      donna.get_colored_name(),
      ' 交锋、弯道上占的优势不够、在最终直线末脚更追不平已有差距，',
      verxina.get_colored_name(),
      ' 败了，除非 ',
      donna.get_colored_name(),
      ' 现在这副余裕的模样是装———',
    ]);
    era.println();
    await era.printAndWait([
      { content: '「——！！！！」', fontSize: '1.5rem', fontWeight: 'bold' },
    ]);
    era.println();
    await era.printAndWait([
      {
        content: '雄壮浑厚的撼地声！',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ]);
    era.println();
    await era.printAndWait([{ content: '————', fontWeight: 'bold' }]);
    await era.printAndWait([{ content: '——', fontWeight: 'bold' }]);
    await era.printAndWait([{ content: '—', fontWeight: 'bold' }]);
    era.println();
    await era.printAndWait([
      '我的意识被迎面震飞、回到自家一户建被雷直击的瞬间。自己混乱地无法分辨那是发生在国小、国中、大学抑或根本就未发生的事情。',
    ]);
    await era.printAndWait([
      '那个狭窄而被迫质朴的房间，白漆黑垢墙围拢生霉软木地板，旁有铁架单人床，手倚锐边书桌，铰链锈死的铜矿窗棂外爆发窗帘不能掩盖的光芒！',
    ]);
    await era.printAndWait(['——响起震聋的雷声！']);
    era.println();
    era.printButton('掀开窗帘', 1);
    await era.input();
    era.println();
    await era.printAndWait(['铰链早就锈死了。']);
    era.println();
    era.printButton('推拉窗框', 1);
    await era.input();
    era.println();
    await era.printAndWait(['纹丝不动']);
    era.println();
    era.printButton('「维修费很贵……」', 1);
    await era.input();
    era.println();
    await era.printAndWait(['但是只有这次、无论如何不想错失景致！']);
    era.println();
    await me.say_and_wait(['纵使容得你碍事、也容不得我错失良机！']);
    era.println();
    await era.printAndWait(['我背身掀起书椅、抛尸般向外扔砸、破坏玻璃！']);
    era.println();
    era.printButton('探出身子！', 1);
    await era.input();
    era.println();
    await era.printAndWait([
      '毫不犹豫向窗外探出身子。我手钳窗框、被锐物割裂的疼痛传来！但是景色、无聊的一成不变的景色开始流动！从靓丽的晴空、环合到训练场侧卧的山峦、最终是像激浪般不断溅起草绿水花的赛道——向缓慢但绝望地将身差增大的 ',
      donna.get_colored_name(),
      '、训练员大声呼嚎！',
      verxina.get_colored_name(),
      ' 没有进入我的眼中，这已经不是比赛考察，而是狂欢了：',
    ]);
    era.println();
    await me.say_and_wait([
      '加油——',
      donna.get_colored_name(),
      '！！！就这样一口气冲过去！！！',
    ]);
    era.println();
    await era.printAndWait(['……']);
    era.println();
    await era.printAndWait([
      '那个房间很久才消失干净、训练员在私室内听着 ',
      donna.get_colored_name(),
      ' 被蜂拥而至的挑选者围住招揽，更听见那将新人老人全数嘴得无言以对的声势，我高兴得又蹦又跳又摔又砸，「就是那个！就是那个！能制造出那枚蹄印的',
      donna.get_uma_sex_title(),
      '！绝对的力量！」我掀开霉臭的木板、「我什么都不要！奖金分成最低就好！颁奖完全不需要站在',
      donna.sex,
      '身旁！就算在纪念册上除掉我的名字——我要',
      donna.sex,
      '做我的担当',
      donna.get_uma_sex_title(),
      '！」',
    ]);
    era.println();
    await era.printAndWait([
      '房间消失了、我感觉身下一趔趄，屁股带着矮背胶料椅冲前头向下一滑，摔得腰臀生疼！但是，我兴奋地爬行、起身，比赛结束了！',
    ]);
    await era.printAndWait(['那声撼地在我脑中挥之不去。离整理还有一段时间！']);
    await era.printAndWait([
      '我冲下观众席，越过外栏跃入内栏向最终弯道前冲刺！跌了一跤、立即擦掉草屑，然后先爬后跑扑到那里——我看见，那枚蹄印！与先前那枚只有照片的比较，仿佛屏幕与卢浮宫实地的蒙娜丽莎一般的区别！是这一枚蹄印！',
    ]);
    era.println();
    await verxina.say_as_unknown_and_wait('先生、先生……');
    await era.printAndWait('有人将我搀扶起来，');
    await verxina.say_as_unknown_and_wait('你看起来不好，我很担心——');
    era.println();
    era.printButton('「我自己起来。」', 1);
    await era.input();
    era.printButton('「嘿，你看见这枚蹄印了吗？」', 1);
    await era.input();
    era.println();
    await verxina.say_and_wait(['……不仅仅看见，还亲身体验过了。']);
    era.println();
    era.printButton('「我没见过比这更棒的东西！抱歉，我还有点事情——」', 1);
    await era.input();
    era.println();
    await era.printAndWait([
      '我起身连蹦带跳向场地出口冲刺，一刻也不能耽搁、从现在起、到将',
      donna.sex,
      '变成自己的担当',
      donna.get_uma_sex_title(),
      '、到自己成为',
      donna.sex,
      '的训练员、每一分钟都要为了完成这个目标度过！',
      {
        color: verxina.color,
        content: `「${sys_get_callname(90, 0)}！${me.actual_name}${me.get_adult_sex_title()}！」`,
      },
      verxina.get_colored_name(),
      ' 的声音被甩在身后，',
      verxina.sex,
      '因惊吓愣在原地。',
    ]);
    era.println();
    await verxina.say_and_wait([
      '谢谢您的水，但，抱歉我没能赢下……啊、跑远了。',
    ]);
    await verxina.say_and_wait(['……唉。']);
    await verxina.say_and_wait(['拿您没办法呢。']);

    era.drawLine();

    await me.say_and_wait(['您请等等']);
    await era.printAndWait([
      '我不由得在楼梯上、于心中惊叹——',
      donna.get_colored_name(),
      '，那',
      donna.get_uma_sex_title(),
      '真是惊人的仪态，虽说神情并不如常人定义的那般「美丽」，反而藏着令人不知所措的凌冽，',
    ]);
    await era.printAndWait([
      '但是，忍耐同样是礼仪的一环。我没法奢求别人永远对自己报以恰当的感情，愿意行遮掩的礼仪已是幸事。',
    ]);
    await era.printAndWait([
      donna.sex,
      '在楼梯其中一阶站定、施了一礼，忿忿问候道：',
    ]);
    era.println();
    await donna.say_and_wait([
      '……我现在心情不佳，如果您准备跟同僚一般叽叽喳喳地招揽担当，最好有与这愿望相称的能力。',
    ]);
    era.println();
    era.printButton(
      `「我今日并非来招揽你做担当${donna.get_uma_sex_title()}。」`,
      1,
    );
    await era.input();
    era.println();
    await donna.say_and_wait(['……']);
    await donna.say_and_wait(['但我也没说不接受招揽。']);
    era.println();
    await era.printAndWait([
      '窥见',
      donna.sex,
      '一瞬的焦躁，我心中偷笑，确信了',
      donna.sex,
      '是心性高傲、而非目中无人，一时间竟然觉得这反应有些可爱，',
    ]);
    era.println();
    era.printButton(
      '「我说我今日不准备着手招揽。此行只为来传达我的热情。」',
      1,
    );
    await era.input();
    era.println();
    await donna.say_and_wait(['热情？嘿欸……我怎么了？全部说出来吧。']);
    await me.say_and_wait([
      '那我要失礼了，我觉得两人初次相会相谈，必须出现特定的几个关键词句，这才能让关系具有发展的未来。',
    ]);
    era.println();
    era.printButton('「有力的奔跑。我想说：有力的。」', 1);
    await era.input();
    era.println();
    await me.say_and_wait([
      '我想说：有力的。不论是简单直白的第一印象、还是你实质上的独特性与优势，都只能提到排山倒海的力量。',
    ]);
    await me.say_and_wait([
      '其他的特质有的是这力量的根源，有的是这力量的产物与表征。',
    ]);
    await me.say_and_wait([
      '缺乏心性和动机的',
      donna.get_uma_sex_title(),
      '无法维持如此——不论人员再怎么专业、甚至说，就算全交由',
      donna.get_uma_sex_title(),
      '来负责你们的集体训练，锻炼你们的环境，也总下意识将力量与速度对立，在赛',
      donna.get_uma_sex_title(),
      '的世界里，这是一个误区，',
    ]);
    await me.say_and_wait([
      '而你，令人惊讶地保持了自己的『癖好』，同时表现出的成绩也极为拔尖，',
    ]);
    await me.say_and_wait([
      '你不仅仅有天赋……嘿，是什么东西让你产生了如此做的动机。',
    ]);
    await donna.say_and_wait(['♪～']);
    era.println();
    await era.printAndWait([
      donna.sex,
      '的耳尖跃得欢快。那是，心脏外的甲壳尚在硬化、内在仍然柔软温暖时期的，',
      donna.get_uma_sex_title(),
      '的标志。',
    ]);
    await era.printAndWait([
      '但一方面这也意味着',
      donna.sex,
      '听得开心、我推的全对，再按照常识交出话筒只会降低我招揽',
      donna.sex,
      '的成功率……我打起精神。',
    ]);
    era.println();
    await me.say_and_wait(['那好吧，我也来讲讲我的热情从何而来。']);
    era.println();
    era.printButton(
      '「一切从那枚蹄印发源。我收到一张照片、宛若为跑道徒增伤口的蹄印。」',
      1,
    );
    await era.input();
    era.println();
    await me.say_and_wait(['我收到一张照片、宛若为跑道徒增伤口的蹄印。']);
    await me.say_and_wait([
      '选拔赛、还有现在的相谈、以及我对你的兴趣，今天的一切从那枚蹄印发源。',
    ]);
    era.println();
    await era.printAndWait([
      '时间啊。',
      donna.sex,
      '再过半分钟就会失去兴趣，我还得再钩直饵咸一点。',
    ]);
    era.println();
    era.printButton('「你的脚印充满魄力，但是也在损耗你奔跑的速度。」', 1);
    await era.input();
    era.println();
    await era.printAndWait([
      donna.sex,
      '一下子打着了兴趣，唇线几乎笑着勾成V字，从眼睛开始、整个脑袋都可爱地参加进向我的炫耀中，',
    ]);
    await donna.say_and_wait([
      '您这人……呵呵。一周前的这个日子，那是个雨天，草皮打滑，不多使点力气，脚底都打滑，怎么跑的踏实？',
    ]);
    era.println();
    await me.say_and_wait(['没有反驳，而是转移话题。'], true);
    await me.say_and_wait(
      [
        donna.sex,
        '若对自己的问题一无所知，至少会露出一些反感的表现，甚至激烈地反驳我。',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '呵，所以，',
        donna.get_colored_name(),
        ' 不单单拥有心性、自我强韧，而且同样有发现、承认、应对自己问题的一套方法论，',
      ],
      true,
    );
    era.println();
    await era.printAndWait([
      '我操……真是规格豪华的',
      donna.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '但这就说明我现在走在一条对的路子上，我继续推进话题——',
    ]);
    era.println();
    await me.say_and_wait([
      '但做过头了，既然蹄印能深陷跑道、将土层与草根翻出，那这么个过程也会妨碍你的加速与维持。',
    ]);
    era.println();
    await me.say_and_wait([
      '我们……特雷森举行选拔赛的场地，铺种的是耐寒、保水、不耐用的洋芝，如果是正式比赛，除非前往北海道一带，否则大多会是匍匐根多、使赛道硬化的野芝',
      { content: 'noshiba', fontWeight: 'bold' },
      '吧。',
    ]);
    era.println();
    await me.say_and_wait([
      '相比之下不容易陷脚、但还是希望你考虑我的建议：在出道之前改掉……陷脚癖，就叫它陷脚癖了。',
    ]);
    era.println();
    await era.printAndWait(['心里响起了宛若锁匙相触、开解般的声音。']);
    await era.printAndWait(['我将下意识游走的眼睛赶回去看向冬娜——']);
    era.println();
    await me.say_and_wait(['……啊，微笑变得更可爱了。'], true);
    era.println();
    await era.printAndWait(['……我作答无误。']);
    era.println();
    await me.say_and_wait(
      [
        '很美。',
        donna.sex,
        '真的很美。那就是我心中的',
        donna.get_teen_sex_title(),
        '，我现在不光喜欢',
        donna.sex,
        '脖子往下的肌肉含量高的部分，连',
        donna.sex,
        '脖子往上的部分也喜欢了。',
      ],
      true,
    );
    era.println();
    await donna.say_and_wait(['……']);
    await me.say_and_wait(['……']);
    era.println();
    await era.printAndWait([
      '像是在沉默中见到有趣的事情。',
      donna.sex,
      '掩着嘴发起笑来：',
    ]);
    era.println();
    await donna.say_and_wait(['我在等你开始指名。你在等什么？']);
    era.printButton('「……那我该怎么做？」（暂不招募）', 1);
    era.printButton('开始指名', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '这样说的时候。令人联想到春水的一泓笑颜，掺进了几滴调侃的色彩。',
        donna.get_colored_name(),
        ' 端庄地将头摇了三摇，',
      ]);
      await donna.say_and_wait([
        '您觉得自己将温度加热得沸腾爆炸后突然向我讲这么句扫兴的话，表现得怎样？',
      ]);
      await donna.say_and_wait([
        '在我看来嘛，当然是十二成的扫兴、并且还倒欠两成幽默。',
      ]);
      await donna.say_and_wait([
        '但您大可为自己自豪——在专业素养和赛事直觉上，您配得上我、自然也配得上我之外的',
        donna.get_uma_sex_title(),
        '，不论您和谁成为搭档，一定会大有作为吧。',
      ]);
      await donna.say_and_wait([
        '您这样优秀的……我可不敢揣测您这样的人为何在刚刚踌躇，兴许是我因为最开始下意识看低您一眼而在受到报复吧，哈哈！说不定我也反而有扫您的兴了。',
      ]);
      await era.printAndWait([
        '沿楼梯走上，一阶，一阶，转角，继续攀登，',
        donna.get_colored_name(),
        ' 的身影消失不见。',
      ]);
      era.println();
      await me.say_and_wait(['……']);
      await me.say_and_wait(
        [
          donna.sex,
          '确实期待受到我的招揽，但即使招揽活动出现了异况、最终告吹，',
          donna.sex,
          '也像没发生任何事情一样毫不动摇。',
        ],
        true,
      );
      era.println();
      await era.printAndWait([
        '在我开始悄悄夸奖',
        donna.sex,
        '之前，楼梯井上方冷不丁响起 ',
        donna.get_colored_name(),
        ' 的声音，',
      ]);
      era.println();
      await donna.say_and_wait(['您还没走啊？']);
      await me.say_and_wait(['我还在这里。']);
      await donna.say_and_wait(['……']);
      await donna.say_and_wait([
        '能受您中意，着实令我出奇欢喜。但我不打算奉行指名的风俗。',
      ]);
      await donna.say_and_wait([
        '毕竟，如果忽略掉各自潜藏在心里的考量，因为表面上一时风顺，或是心情使然就缔结契约，到最后开始互相怨恨……什么的，也是有可能的。',
      ]);
      await donna.say_and_wait([
        '再见了！您若他日中又想招揽我了，我自然恭候光临，但要是您确实有自己的考量选了别人嘛……',
      ]);
      await donna.say_and_wait([
        '——我期待与您培育的学生角力、然后将',
        donna.sex,
        '彻底粉碎，将那也作为……我大道旁的一从鲜花。再见了，训练员先生。',
      ]);
      await me.say_and_wait(['……']);
      era.println();
      await era.printAndWait([
        donna.get_colored_name(),
        ' 离开了。我在楼梯间挠了两把下巴，',
      ]);
      era.println();
      await me.say_and_wait([
        '对招揽告吹在意的不得了，却仍然按逻辑行事、甚至还有余裕讲这样的情理。',
      ]);
      await me.say_and_wait([
        '都开始怀疑我究竟是不是配得上',
        donna.sex,
        '了。',
      ]);
      await me.say_and_wait([
        '我……继续按原计划回去准备一个周吧。如果那时我还觉得自己配得上',
        donna.sex,
        '、能展现出令',
        donna.sex,
        '愿意向我寄托期待的成果——',
      ]);
      await me.say_and_wait([
        {
          content: `那${donna.sex}的训练员就非我不可了。`,
          fontWeight: 'bold',
          fontStyle: 'italic',
        },
      ]);
      era.set(`cflag:${this.id}:招募状态`, -1);
    } else {
      await me.say_and_wait([
        '不，我确实非指名你不可，这里 ',
        { content: '敲敲右胸', fontWeight: 'bold', fontStyle: 'italic' },
        ' 就是有那种程度的决心。',
      ]);
      era.println();
      await donna.say_and_wait(['那您又在苦等什么呢？Time is power.']);
      await me.say_and_wait(['但是，这样的准备不够。']);
      await me.say_and_wait(['我要指名你、培养你、为了更大的目标。']);
      await donna.say_and_wait(['……♪～']);
      era.println();
      await era.printAndWait(['——咚、啪！']);
      await era.printAndWait([
        '来自 ',
        donna.get_colored_name(),
        ' 的，十足欣赏的掌声、耳膜为之聩疼。究竟是讥讽、还是认可，我心里没准。但我继续说下去——我做好了今天的准备，所以我一定有这样做的资格。',
      ]);
      await era.printAndWait(['非得是我不可。']);
      await era.printAndWait(['我深吸一口气。']);
      era.println();
      await me.say_and_wait([
        '所以，无论是为你的素质、还是为了这个目标。现在的准备都不够，完全不够，连定金都算不上，遑论诚意。',
      ]);
      await me.say_and_wait(['非得这样不可。']);
      await donna.say_and_wait(['说的好像命运一样。']);
      await me.say_and_wait(['你不觉得自己值得一场更好的指名吗？']);
      await donna.say_and_wait([
        '我当然值得。现在您显然给不起……那您又是怎么打算的？',
      ]);
      era.println();
      await era.printAndWait([
        '沿楼梯走上，一阶，一阶，转角，继续攀登，',
        donna.sex,
        '的身影消失不见。',
      ]);
      era.println();
      await donna.say_and_wait([
        '我会等您。您值得。倘若到时候我又更易想法、导致您不是最好的选择了，那就没什么好说的了，这也是「预定」的风险。',
      ]);
      await donna.say_and_wait(['静候佳音。']);
      era.println();
      await era.printAndWait(['非得是我不可……']);
      era.println();
      await me.say_and_wait(['我会在一周后恰当的时间里来见你。']);
      era.println();
      await me.say_and_wait(['非得是我不可。'], true);
      await era.printAndWait(['脚步声消失了。']);
      era.println();
      await me.say_and_wait(['非得是我不可。']);
      await donna.say_and_wait([
        '啊啦——啦？热情似火呢。那下次见面时，请改掉您说话时眼神游走的习惯。',
      ]);
      await donna.say_and_wait([
        '哪怕虚张声势盯着我失礼的地方……我也更不情愿看见您这么好一位，在我面前可耻地露怯！',
      ]);
      era.println();
      await me.say_and_wait(['非得是我不可。']);
      era.set('flag:物色对象', 116);
      new EventMarks(0).add(event_hooks.week_end);
    }
    era.set(`cflag:${this.id}:随机招募`, 0);
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.recruit).set_arg('good_news'),
    );
  }

  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async good_news(donna, me) {
    if (era.get(`cflag:${this.id}:招募状态`) === -1) {
      era.set(`cflag:${this.id}:随机招募`, 1);
      return;
    }
    await print_event_name('好消息', donna);
    era.drawLine({ content: `${me.name} 的视角` });
    await era.printAndWait([
      '事实上，自那天搭腔之后，我再没有跟 ',
      donna.get_colored_name(),
      ' 有所交流，只是准备好睡袋、粮水和换洗衣物，租了间活动教室，睡醒便伏案工作，待不安和焦虑尾随而至，我再服药睡下。',
    ]);
    await era.printAndWait([
      '我无论如何，绝没法抑制住要成功指名',
      donna.sex,
      '的愿望。',
    ]);
    era.println();
    await era.printAndWait([
      '在第六天……第五天？我分不清了，我原本锁着教室大门、连门镜都拿布糊上了。但门还是咔嗒一响，走廊的阔面冷光灯不真切地推门而入、打在藏青色的睡袋上。',
    ]);
    await era.printAndWait([
      '许久没见、我矮墩墩的好前辈，在这个季节也仍然全装出现在我面前。',
    ]);
    era.println();
    await say_by_passer_by_and_wait('前辈', [
      '……啊，晚上好，',
      me.actual_name,
      '。我出差回来带了些伴手礼，不过得明天再交给你。',
    ]);
    await me.say_and_wait(['您怎么来了？']);
    await say_by_passer_by_and_wait('前辈', [
      '我怎么来的……你的风吹到我这里来了。从校门到办公室，我听说，有个不怎样显眼的训练员，指名了一位相当有资质、却脾性怪异的未出道',
      donna.get_uma_sex_title(),
      '。',
    ]);
    await say_by_passer_by_and_wait('前辈', [
      '然而当我确认公示资料时，',
      donna.get_colored_name(),
      ' 的担当关系上没挂着任何人的名字。恰好这个时候管活动教师的阿婆打来电话，说有人租了一间活动教室，进去就一连几天都见他没出来……吓死我了。还好我不用回来就给朋友出殡。',
    ]);
    await me.say_and_wait([
      '也算是阿婆眼神不好，我要大小便和洗漱时还是会出教室去的。',
    ]);
    await say_by_passer_by_and_wait('前辈', [
      '你吓得阿婆都不敢拿钥匙开门确认状况。这样吧，我给你准备点礼物，你到时候跟',
      donna.sex,
      '赔礼道歉，方便下回再来租教室。',
    ]);
    await say_by_passer_by_and_wait('前辈', [
      '不论怎么说，虽然在规则之内，但你做的太夸张了，',
      me.actual_name,
      '。',
    ]);
    await me.say_and_wait([
      '前辈在规则内外都爱把事情做的相当夸张……这方面您没资格说我。',
    ]);
    era.println();
    await era.printAndWait([
      '前辈的浓密的眉毛，在额头上像两块疤一样拧了半圈。',
    ]);
    era.println();
    await say_by_passer_by_and_wait('前辈', [
      '我们的定位不完全一样嘛……不过我有个预告给你：近期确实会有好事发生。',
    ]);
    await me.say_and_wait(['能有什么好事？']);
    await say_by_passer_by_and_wait('前辈', [
      '嗯……对你、我而言的好事，莫过于我因为出差搁置的私人事务、和你志在必得的招募都将要得偿所愿了。',
    ]);
    await me.say_and_wait(['……承您吉言。']);
    await say_by_passer_by_and_wait('前辈', [
      '别那么说。我现在很佩服你，这年头特雷森里的训练员，想获得一位资质优异的担当，绝大多数是靠着玄学般被',
      donna.get_uma_sex_title(),
      '提出逆指名。',
    ]);
    const tazuna = get_chara_talk(301);
    await say_by_passer_by_and_wait('前辈', [
      '所以我一回来、刚走进校门，心情不知为何大好的 ',
      {
        color: tazuna.color,
        content: `骏川${tazuna.get_adult_sex_title()}`,
        fontWeight: 'bold',
      },
      '，就谈到某位指名担当',
      donna.get_uma_sex_title(),
      '的训练员，',
      donna.sex,
      '临近末了说了什么呢……嗳呀、',
      donna.get_colored_name(),
      ' 连续几天，将后来的指名和劝诱全数拒否！',
    ]);
    await say_by_passer_by_and_wait('前辈', [
      '一点余地没有的据否！虽然程序上再劝诱或尝试指名也没有问题，但',
      donna.sex,
      '分明意即不再接受后续的二次劝诱。',
    ]);
    await era.printAndWait(['某种感情使我的精神焕然一新，']);
    era.println();
    era.printButton(`「……我的决心传达给${donna.sex}了。」`, 1);
    await era.input();
    era.println();
    await say_by_passer_by_and_wait('前辈', [
      '行了、行了！再多说就打搅你了……我给你提个醒，去之前别忘记更衣沐浴，但不要喷香水。记住咯？',
    ]);
    await say_by_passer_by_and_wait('前辈', [
      '不论如何，我们为你的指名献上祝福，愿你得偿所愿。',
    ]);
    era.println();
    await era.printAndWait([
      '前辈替我拎了半袋生活垃圾便拉上门离开了。渐远的聚氯乙烯刮擦声，远比他的脚步或关门的声响要大……我很高兴他仍然保持这样的习惯。',
    ]);
    await era.printAndWait([
      '我再次投入交涉的准备工作——难题仍然是难题，但待解决的部分剩的不多了。',
    ]);
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.recruit).set_arg('know_me'),
    );
  }

  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async know_me(donna, me) {
    await know_me.call(this, donna, me);
  }

  async recruit(stage, event_object) {
    const donna = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (stage === event_hooks.recruit) {
      await this.footprint(donna, me);
    } else if (
      event_object !== undefined &&
      this[event_object.arg] !== undefined
    ) {
      await this[event_object.arg].call(this, donna, me);
    }
  }
};
