const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @this CustomizedRecruit
 * @param {CharaTalk} donna
 * @param {CharaTalk} me
 */
async function know_me(donna, me) {
  await print_event_name('坦露心迹', donna);
  era.drawLine({ content: `${me.name} 的视角` });
  await era.printAndWait(['一周之后']);
  era.println();
  await era.printAndWait([
    '等所有准备工作都告一段落了，我抱着笔电仰面躺下，方沉的形体压住胸腔，我深吸一气——活动教室里里搪塞一股孢子雾的气息……不论人由再怎样抗菌的材料铸成，呆在这里都得发臭。怪不得前辈要强调更衣沐浴。',
  ]);
  await era.printAndWait(['或者说是季节使然吗？']);
  await era.printAndWait(['不，这季节常不常生霉，我心里没准。']);
  await era.printAndWait(['但只要脑子干净、不带霉点就好就好。']);
  era.println();
  era.printButton('「我准备好了。」', 1);
  await era.input();
  era.println();
  await era.printAndWait([
    '现在，我有：充足的准备、足以服人的能力与品德、戒除了',
    donna.sex,
    '不满的坏习惯，以及早已做好的事前沟通。',
  ]);
  await era.printAndWait([
    '没有虚张声势的必要，我现在有底气能无拘束地与',
    donna.sex,
    '进行对谈，非得是我不可。',
  ]);
  era.println();
  await me.say_and_wait(['光是想想就心跳加速。'], true);
  era.println();
  await era.printAndWait(['首先去沐浴更衣、味大。']);
  await era.printAndWait(['拧开阀门，热水自莲蓬头浇洗而下。']);
  me.say(['神圣美丽的阿基米德*……']);
  await era.printAndWait('*男', { fontSize: '0.75rem' });
  await era.printAndWait(['训练员撑墙倚立，在更新状态的同时最低限度地思考。']);
  era.println();
  await era.printAndWait([
    '无需再做调查，',
    donna.get_colored_name(),
    ' 现在找不到、以后也很难再找到训练员。这是我的错，但另一方面，我要说「是这全都多亏了我才对」。',
  ]);
  era.println();
  await era.printAndWait([
    '——烫得恰到好处的热水继续浇下，浑身是痛痒难分的舒适感，',
  ]);
  era.println();
  await era.printAndWait(['要问为什么，', donna.sex, '的心性……']);
  era.println();
  await me.say_and_wait([
    '强烈的斗争心会令人误会成气性糟糕，甚至只需要有模糊的传言产生，作为受到怀疑的',
    donna.get_uma_sex_title(),
    '，就会因为『气性预处理』的缘故长时间缺乏指名。',
  ]);
  await me.say_and_wait([
    '即使我从未来过，',
    donna.sex,
    '也无法轻易找到与自己合拍的训练员，不排除最后只能忍着不适上路的可能，那 ',
    donna.get_colored_name(),
    ' 难免要留下遗憾的。',
  ]);
  await me.say_and_wait([
    '而我……踏出一步，观察，沟通，理解，认可，于是',
    donna.sex,
    '容忍我来扰乱',
    donna.sex,
    '的历史——因为将与',
    donna.sex,
    '愿望与共、一体同心、齐头进退的训练员已经出现！',
  ]);
  era.println();
  await era.printAndWait([
    '即使连我都担心无法驾驭',
    donna.sex,
    '的气性，但一想到 ',
    donna.get_colored_name(),
    ' 拥有的、那般美丽的素质……正因为训练员天生是渴求胜利女神的，所以，无论有怎样的流言与印象，待时间稍作流逝，大家仍然会像蛾群一样扑入',
    donna.sex,
    '的火舌吧。',
  ]);
  await era.printAndWait([
    '我正是如今火舌前受到诱受而为之驻足的零星几人之一，而有耐性去体会',
    donna.sex,
    '心中真意、有能力与',
    donna.sex,
    '立即就形成共识互相认可的训练员不在其中。',
  ]);
  await era.printAndWait(['现在是抢跑的时机。']);
  await era.printAndWait(['非得是我不可。']);
  era.println();
  await era.printAndWait([
    '我涂抹泡沫，抬头迎向水流，任由冲洗。油脂和异味尽数遭到洗刷。我想到自己尚不知晓',
    donna.sex,
    '的愿望，',
  ]);
  era.println();
  era.printButton(`「${donna.sex}想要什么？」`, 1);
  await era.input();
  era.println();
  await era.printAndWait([
    '我还不知道',
    donna.sex,
    '想要什么。经典三冠？在这基础上加上无败？德比宝冢连走？日本杯连霸？国际远征？',
  ]);
  await era.printAndWait([donna.sex, '想要什么？']);
  await me.say_and_wait(['……万一', donna.sex, '倾心于宝冠路线呢？']);
  await me.say_and_wait(['……']);
  era.println();
  await era.printAndWait([
    '说实话，我并不希望',
    donna.sex,
    '去参加 ',
    race_infos[race_enum.oka_sho].get_colored_name(),
    '。',
  ]);
  await era.printAndWait([
    '从过分自私的愿望、和源自环境的群体性偏见中，自我厌恶的感情油然而生。我烦躁地甩了甩水，令心情平复。',
  ]);
  await era.printAndWait([
    '从公共浴室离开，刚洗的澡又浑身发汗。我对镜理容，在脸颊上狠狠赏了自己两个巴掌，镜面两侧的影子都吓了一跳。',
    me.sex,
    '们最终不满地咕哝起来，表面上，至少在表面上，',
    me.sex,
    '们愿意将自己的诉求稍微退让半步了。',
  ]);
  await era.printAndWait(['我……对此非常满意，却不禁感到了遗憾。']);
  await era.printAndWait([
    '没有办法。为了得偿所愿，人的诸多愿望总得要分出主次、产生掣肘。不受束缚、就无法体会到对某物的渴望、就无法对过程感到喜悦。',
  ]);
  await era.printAndWait([
    '这是必须要做出的牺牲，没什么大不了的。怀着如此心情，和',
    donna.sex,
    '签订契约、造就伟业的愿望又熊熊燃烧起来，我凌冽而激奋地切开去路，一步从浴场迈到教学楼休息间——',
  ]);
  era.println();
  await me.say_and_wait([
    '终于……我受到感动、向别人传达我的热情，然后得到了回应！正因如此——这名',
    donna.get_uma_sex_title(),
    '必须由我培养！',
  ]);
  era.println();
  await me.say_and_wait([
    '非得是我不可！否则就由我培养出与',
    donna.sex,
    '短兵相接的对手！',
  ]);
  era.println();
  await era.printAndWait(['推门而入。']);
  era.println();
  era.printButton('「贵——！」', 1);
  await era.input();
  era.println();
  await donna.say_and_wait([
    '——贵安，早先与您见过面了。奇怪的',
    me.get_adult_sex_title(),
    '。',
  ]);
  await era.printAndWait([
    donna.sex,
    '从沙发上起身站定——约莫是礼仪，用下巴指了指门板——可能不合礼数。',
  ]);
  era.println();
  await donna.say_and_wait(['喏，这扇门在你来之前就怪响个没完。']);
  era.println();
  await me.say_and_wait([
    '因为走进来的非得是我不可。所以它在焦急地等待、因担心必然荣膺的未来而不安。',
  ]);
  await era.printAndWait(['沉默半响。', donna.sex, '欣赏地吊起眼角。']);
  const in_team_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter((e) => e > 0),
    has_palace =
      in_team_list.findIndex(
        (e) =>
          era.get(`cflag:${e}:育成回合计时`) >= 144 &&
          era.get(`cflag:${e}:殿堂`) > 0,
      ) !== -1,
    has_in_edu =
      in_team_list.findIndex(
        (e) => era.get(`cflag:${e}:育成回合计时`) < 144,
      ) !== -1;
  await donna.say_and_wait([
    '您变换方法了啊，积极得有些唬人……先为您上次的建言聊表感谢。您说的极好，',
    has_palace
      ? '绝非空有年功的庸人'
      : has_in_edu
        ? '那是与这浅薄的崭新所不匹配的见解'
        : '虽然这枚徽章是崭新出厂、却有令人刮目相看的实力',
    '。',
  ]);
  await donna.say_and_wait([
    '所以、作为将我定作指名目标的训练员，你制造了提出建言的巧遇、用多么棒的力量找上这扇门！在我面前站定，但您早先已将对我的了解说完了，您接下来打算怎样完成游说呢？',
  ]);
  era.println();
  era.printButton('「我这一周以来并未在虚度光阴。」', 1);
  await era.input();
  era.println();
  await me.say_and_wait([
    '我明白，如果只是凭在那一场选拔赛中对你产生的见解，是有可能被你拒之门外的。',
  ]);
  await donna.say_and_wait(['一周……']);
  era.println();
  await era.printAndWait([
    '再次想起这周之内自己给出了多少次据否、日后将会如何， ',
    donna.get_colored_name(),
    ' 难免眉毛一皱。',
  ]);
  era.println();
  await me.say_and_wait([
    '毕竟你这一周为了等待我的造访已经牺牲不少。即使你是最高品质的原石，只要一天仍然是被选择者而非选择者，在机会有限的情况下，据否的代价永远居高不下。',
  ]);
  await donna.say_and_wait(['那你这一周里做了什么？']);
  me.say([
    '活用特雷森的媒体存档。我把前三个月有 ',
    donna.get_colored_name(),
    ' 出席的选拔赛录像、以及那些选择你作为对象的最终追切*录像，全部，全部观摩了一遍，假装我是 ',
    donna.get_colored_name(),
    ' 的训练员，给出评价和改进的方案。',
  ]);
  await era.printAndWait('* 最终追切：赛马在赛前的最后一次或数次训练', {
    fontSize: '0.75rem',
  });
  await donna.say_and_wait(['……前三个月？']);
  await me.say_and_wait([
    '不必惊讶，你参加比赛的频率对赛',
    donna.get_uma_sex_title(),
    '来说有那么高，可一旦存进硬盘里嘛……对于旁观如此的训练员，充其量算偏多些的工作量罢了。',
  ]);
  await donna.say_and_wait(['最……最终追切的录像是从哪里来的？']);
  await me.say_and_wait([
    '分别来自某位',
    donna.get_uma_sex_title(),
    '的个人主页、校内论坛热心者的存档，以及闪耀周刊的留档。',
  ]);
  era.println();
  await era.printAndWait([
    { color: donna.color, content: '「三个月……三个月。」' },
    donna.get_colored_name(),
    ' 阖上眼、小口咀嚼我的回复。',
    donna.sex,
    '高扬强硬的声音渐渐平静，仿佛因受打动而饱足，轻轻躺进沙发里，',
    { color: donna.color, content: '「这样啊……」' },
    '，满足地蓬松成一团。',
  ]);
  era.println();
  await donna.say_and_wait(['……我还没问过您是谁。']);
  await me.say_and_wait([
    '一个只对自己感兴趣的对象兴奋着、对普普通通的路径和目标都不感兴趣的训练员而已。',
  ]);
  await donna.say_and_wait(['您坐我边上吧。我是说名字。']);
  era.println();
  await era.printAndWait([
    '我照做，将体重寄托在松软的沙发垫上，毫不偏移地注视',
    donna.sex,
    '，',
  ]);
  await me.say_and_wait([me.actual_name, '。']);
  await donna.say_and_wait(['您受过骗吗？']);
  await me.say_and_wait(['怎样的欺骗？']);
  await donna.say_and_wait([
    '让您产生兴趣，享受到您的产出与投入，却只给您不合格的回馈。',
  ]);
  await me.say_and_wait(['那我既在无意间欺骗过人，也被人在无意间辜负过。']);
  await donna.say_and_wait([
    '我们还不是担当关系——虽然我已经觉得必须跟您签订契约了——做这么过不好。',
  ]);
  await me.say_and_wait([
    '就算我这么做了，你也不欠我什么，我是自愿的。我只是……没有更多能浪费时间的耐心了。所以我很着急，全力以赴地做着准备。',
  ]);
  await me.say_and_wait([
    '放跑你的话，不知道我下一次邂逅天才是什么时候，那时我不一定有心力全身心地支撑起别人的生涯。',
  ]);
  await me.say_and_wait([
    '而且，我也无法容忍你的拖沓，如果我助长如此，你的成就将被延后、将受减损。',
  ]);
  me.say([
    '你有这副打底与走势都万众瞩目的身体、心性富足强悍，而在这之外环绕的一切、命运毫无敷衍地为你准备一切：家财万贯、早早汇合的竞争对象、有求必应的舍友*、特雷森的入学资格。',
  ]);
  await era.printAndWait(['*', get_chara_talk(114).get_colored_name()], {
    fontSize: '0.75rem',
  });
  await donna.say_and_wait(['想必那是因为，我值得被三女神如此善待。']);
  await me.say_and_wait([
    '现在、立刻，投身于伟大的行进中的话，恐怕没有什么属于赛',
    donna.get_uma_sex_title(),
    '的荣誉是你无法取得的——世界尽在掌握之中。',
  ]);
  era.println();
  await era.printAndWait(['我喘了口气，悄悄将手汗抹到扶手上，']);
  await me.say_and_wait(['所以，上我的船吧。']);
  await me.say_and_wait([
    '我比任何人都想亲自扶持你的生涯，比任何人都想亲自锻冶你的双腿。',
  ]);
  await donna.say_and_wait([
    '过分夸张了……虽然我经常瞧不起人，但我同样不喜欢这种目中无人的说法。',
  ]);
  await me.say_and_wait([
    '那也没有关系。就算我不是你赛',
    donna.get_uma_sex_title(),
    '生涯的命中钦选，最终一拍两散，那也并不妨碍我什么。',
  ]);
  await donna.say_and_wait(['您不是比任何人都想吗？']);
  await me.say_and_wait([
    '我的兴趣在于你，但满足这兴趣的方式……去锻炼才能稍差一些的',
    donna.get_uma_sex_title(),
    '，让',
    donna.sex,
    '们作为我的最高作品与你短兵相接，我看也并不比与你签约逊色。',
  ]);
  era.println();
  await era.printAndWait(['在这里，一人眉头紧皱、一人放声宣言——']);
  era.println();
  await me.say_and_wait([
    '上我的船吧！那件令人脊背发凉的武器！打磨它的人非我不可、就算最终我非它的命中钦旋，锻冶更高作品与你短兵相接的人也非我不可！我要捎你一程……',
  ]);
  await me.say_and_wait([
    '我能为你着想的，已全数为你做了。即使你不打算和我一道，这一周间的成果也不论如何都会移交给你本人。',
  ]);
  await me.say_and_wait([
    '我想你也可能罕见地感到犹豫，没关系，这一点我也想到了，毕竟如果格外强烈的三分钟热度也可能形成与我相似的效果，谁都不喜欢容易燃尽、半途而废的同伴，',
  ]);
  await me.say_and_wait([
    '所以你可以……三周，为期三周，先非正式地接受我的训练安排，等这段临时关系结束，你再给出答案——是否要上我的船。',
  ]);
  era.println();
  era.printButton('坚决地伸出手', 1);
  await era.input();
  era.println();
  await era.printAndWait([
    '我向',
    donna.sex,
    '坚决地伸出手，手臂仿佛递上沉甸甸一整袋金币、激烈地颤抖。',
  ]);
  era.println();
  await me.say_and_wait(['我已向你和盘托出。如此，你当知道我所言不虚。']);
  await donna.say_and_wait(['真是……必须接受您的好意了。']);
  era.println();
  await era.printAndWait([donna.get_colored_name(), ' 审视再三、宽松地回握。']);
  era.println();
  await me.say_and_wait([
    '欢迎来到 ',
    me.actual_name,
    ' 号，尊贵的客人、如我所说，我要捎您一程、无论如何不会放任您的未来的成就留下缺憾！倘若真有比我更加惹眼的训练员出现，您便下船吧。',
  ]);
  await donna.say_and_wait([
    '自践的话就打住吧。您的心性令人敬畏。所以我心悦诚服地愿与你共事。没有立即与您缔结关系，只是出于敬意接受您的安排而已。',
  ]);
  era.println();
  await era.printAndWait(['多么……令人喜悦。']);
  await era.printAndWait([
    '我牵着',
    donna.sex,
    '便要向训练场移动，但',
    donna.sex,
    '纹丝不动地钉在远处，',
  ]);
  era.println();
  await donna.say_and_wait([
    '这可真是……您的游说和宣教是相当厉害、可在礼仪上却是摆设吗？',
  ]);
  era.println();
  era.printButton('「您想要什么？」', 1);
  await era.input();
  era.println();
  await era.printAndWait([
    donna.sex,
    '并指轻点两瓣樱唇、再威严地抬高下巴……端坐在在庄严神殿中的妩媚、我正狂热搏动的心脏中渗入不同的情感。',
  ]);
  await era.printAndWait([donna.get_colored_name(), ' 优雅地向我伸手作邀请：']);
  era.println();
  await donna.say_and_wait(['亲吻的礼节。']);
  await this.recruit_end();
  new EventMarks(0).sub(event_hooks.week_end);
  era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
  era.set('flag:物色对象', 0);
  era.set('flag:当前月', 3);
}

module.exports = know_me;
