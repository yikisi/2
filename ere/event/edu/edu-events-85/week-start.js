const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const ruby = new CharaTalk(85);

const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { location_enum } = require('#/data/locations');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const edu_event_marks = new EduEventMarks(85);
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

module.exports = async function () {
  const me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:85:育成回合计时');
  if (edu_weeks === 39) {
    await print_event_name('华丽的最高杰作', ruby);
    await era.printAndWait(
      `在反复训练的某一天，拜读了【华丽一族】书信的${me.actual_name}，正准备和第一红宝石一起造访第一家的老宅。`,
    );
    await era.printAndWait(
      `为了和她建立信赖关系，首先应该了解她所重视的东西。`,
    );
    await era.printAndWait(`然而在你们动身前……`);
    await ruby.say_and_wait(`不好意思，临时更改一下行程。`);
    await era.printAndWait(
      `在没有被告知事态的情况下，你被带到的是某酒店的房间。${me.actual_name}换上了房间里准备好的西装。`,
    );
    await ruby.say_and_wait(`可以准备再华丽一点的领带吗？`);
    await era.printAndWait(`管家「知道了，大小姐。」`);
    await era.printAndWait(`第一红宝石上下打量了你一番，就闭着眼睛转过脸去。`);
    era.printButton(`露比？`, 1);
    await era.input();
    await ruby.say_and_wait(`失礼，我说晚了。`);
    await ruby.say_and_wait(`母亲大人，听说我的训练员要来老家，特意赶过来了。`);
    await me.say_and_wait(`哈啊？`);
    era.drawLine();
    await era.printAndWait(
      `荻野贵女「初次见面，训练员先生。我是第一红宝石的母亲。」`,
      { color: ruby.color },
    );
    await era.printAndWait(
      `眼前的这个${ruby.get_uma_sex_title()}，无论是堪称恐怖的美丽感，还是她的容貌、气场，样子简直就像——`,
    );
    era.printButton(`变大了的第一红宝石`, 1);
    await era.input();
    await era.printAndWait(
      `荻野贵女「在机场听说训练员先生要来，突然之间很抱歉。」`,
      {
        color: ruby.color,
      },
    );
    era.printButton(`没有那种事`, 1);
    await era.input();
    await era.printAndWait(`荻野贵女「这段时间，女儿都承蒙你的关照了。」`, {
      color: ruby.color,
    });
    era.printButton(`我才是，受了她很多照顾。`, 1);
    await era.input();
    await ruby.say_and_wait(`母亲大人，这之后也有安排吧？我和您一起。`);
    await era.printAndWait(`荻野贵女「嗯~有吗……」`, {
      color: ruby.color,
    });
    await me.say_and_wait(`！`);
    await era.printAndWait(
      `你被第一红宝石的母亲凝视着。那是其作为华丽一族的极致，想要看清你这个人的眼神。`,
    );
    await era.printAndWait(`其中蕴含着足以穿透人心的魄力。`);
    await era.printAndWait(
      `这时，${me.actual_name}的脑中想起了测试时的那一天。`,
    );
    era.drawLine();
    await ruby.say_and_wait(
      `没错。请不要忘记这份身姿。若您有盯上的目标存在，那就必须做出相称的行为举止。`,
    );
    await ruby.say_and_wait(`唯有如此，有朝一日才能成为自己想成为的模样`);
    await era.printAndWait(`还有，那一抹微笑。`);
    era.drawLine();
    await era.printAndWait(
      `既然是她的训练员，那么和她并肩而立时，当然要挺胸抬头。`,
    );
    await era.printAndWait(`荻野贵女「——」`, {
      color: ruby.color,
    });
    await era.printAndWait(`荻野贵女「你知道我的跑步吧。」`, {
      color: ruby.color,
    });
    era.printButton(`点头`, 1);
    await era.input();
    await era.printAndWait(`荻野贵女「这样啊。」`, {
      color: ruby.color,
    });
    await ruby.say_and_wait(`母亲大人，还有事……`);
    await era.printAndWait(`荻野贵女「不，已经结束了。」`, {
      color: ruby.color,
    });
    await era.printAndWait(`荻野贵女「训练员先生，之后就任凭你判断了。」`, {
      color: ruby.color,
    });
    await era.printAndWait(`荻野贵女「请你不要忘记，她是怎样的孩子。」`, {
      color: ruby.color,
    });
    await ruby.say_and_wait(`——！`);
    await era.printAndWait(
      `荻野贵女「万分抱歉，我要去车站了，还有下一个安排。」`,
      {
        color: ruby.color,
      },
    );
    await era.printAndWait(
      `荻野贵女「我们家的历史，请在那些书里…和露比的口中慢慢了解。」`,
      {
        color: ruby.color,
      },
    );
    await era.printAndWait(
      `荻野贵女「训练员先生，我们家的小姑娘就烦请你费心了。」`,
      {
        color: ruby.color,
      },
    );
    era.drawLine();
    await ruby.say_and_wait(
      `送别第一红宝石的母亲，${me.actual_name}看了很多藏书后回到了特雷森学院。`,
    );
    era.printButton(`你的母亲，很厉害呢。`, 1);
    era.printButton(`露比的妈妈，比露比还要厉害呢。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      sys_like_chara(85, 0, 3) && (await era.waitAnyKey());
    } else {
      sys_like_chara(85, 0, 5) && (await era.waitAnyKey());
    }
    await ruby.say_and_wait(
      `母亲大人是华丽一族的‘结晶’，如今也是一族台面上的象征。`,
    );
    await ruby.say_and_wait(`母亲她，对你…`);
    await ruby.say_and_wait(`……`);
    await ruby.say_and_wait(`不，没什么。`);
    await ruby.say_and_wait(
      `你刚才问：‘在你眼里母亲是怎样一位${ruby.get_uma_sex_title()}’吧。`,
    );
    await ruby.say_and_wait(`答案是，最为华丽的。`);
    await ruby.say_and_wait(`看了现役时代的比赛录像的话，任谁都会这么想的。`);
    await era.printAndWait(`第一红宝石的眼睛一瞬间放出了光芒。`);
    await era.printAndWait(
      `说起来，她一知道要和母亲见面，就马上安排你换了服装。`,
    );
    era.printButton(`你很尊敬你母亲呢。`, 1);
    await era.input();
    await ruby.say_and_wait(
      `是的，作为我前进路上最专业、最辉煌的典范，我很尊敬她。`,
    );
    await ruby.say_and_wait(
      `母亲伟大的轨迹…是我为了今后一族的繁荣必须效法的。`,
    );
    await era.printAndWait(
      `为什么要选择三重宝冠路线……${me.actual_name}感受到了第一红宝石超越家族历史的绝不单纯的意图。`,
    );
    get_attr_and_print_in_event(85, [0, 0, 5, 0, 0], 0) &&
      (await era.waitAnyKey());
  } else if (edu_weeks === 47) {
    await print_event_name('因此、不能松懈', ruby);
    await era.printAndWait(`训练场`);
    await ruby.say_and_wait(`训练员先生，重新开始吧。`);
    await era.printAndWait(
      `${me.actual_name}从第一红宝石那里得知，她的脚天生有问题。`,
    );
    await era.printAndWait(
      `正确地讲是【脚的形状有问题，暂时对比赛没有障碍。】`,
    );
    await era.printAndWait(`因此，起初并没有特意向你报告。`);
    await era.printAndWait(`但是，在被你问到的时候也没有隐瞒。`);
    await era.printAndWait(
      `这是跑步时负荷很大的部分，你觉得不是那么简单就能解决的问题。`,
    );
    era.printButton(`真的，不要紧吗？`, 1);
    await era.input();
    await ruby.say_and_wait(`当然没有问题，而且父母…`);
    await ruby.say_and_wait(`父母、还有周围的大家，都给予了很多的帮助。`);
    await era.printAndWait(`一瞬间，第一红宝石的表情变得相当……劳苦。`);
    era.printButton(`是天生的？`, 1);
    await era.input();
    await ruby.say_and_wait(`是的，出生的时候就被医生宣告可能没法跑了。`);
    await ruby.say_and_wait(`但是，父母为了我，用尽所有手段献身面对问题。`);
    era.printButton(`所以你才有这样的热望啊。`, 1);
    await era.input();
    await ruby.say_and_wait(`不这样做不行的吧？`);
    await ruby.say_and_wait(
      `——因为是作为‘华丽一族’的赛${ruby.get_uma_sex_title()}出生而享受生命的。`,
    );
    await ruby.say_and_wait(
      `其结果是，学会了优化用脚方式的姿势跑步，现在也改变了。`,
    );
    await ruby.say_and_wait(`医生也说，现在的身体可以承受激烈的比赛。`);
    await ruby.say_and_wait(`如果，万分之一…`);
    era.printButton(`现在先集中精神训练。`, 1);
    era.printButton(`可以给我看看你的脚吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await ruby.say_and_wait(`话有点说得太多了，我去跑道。`);
      await era.printAndWait(`训练顺利结束了。`);
    } else {
      await ruby.say_and_wait(`动机不纯——看起来也不是。`);
      await ruby.say_and_wait(`你知道在公共场合做这种事意味着什么吗？`);
      era.printButton(`蹲下身子。`, 1);
      await era.input();
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(`至少，去那边的椅子…`);
      await era.printAndWait(`你细细地检查了第一红宝石双脚的每一寸。`);
      await era.printAndWait(`鬼使神差的，你拉起一处丝袜，“啪”的松手。`);
      await era.printAndWait(
        `又惊又羞的大小姐咬着下唇瞪着你，就在你准备好挨骂的时候。`,
      );
      await ruby.say_and_wait(`帮我把鞋子穿好。`);
      await era.printAndWait(`之后你们顺利地完成了训练。`);
    }
    get_attr_and_print_in_event(85, [0, 0, 5, 0, 0], 0) &&
      (await era.waitAnyKey());
  } else if (edu_weeks === 47 + 19) {
    await print_event_name('只是凝视着前方', ruby);
    await era.printAndWait(`针对2400米的橡树杯，第一红宝石正在进行耐力训练。`);
    era.printButton(`感觉如何？`, 1);
    await era.input();
    await ruby.say_and_wait(`没有问题。`);
    era.printButton(`真的不要紧吗？`, 1);
    await era.input();
    await ruby.say_and_wait(`嗯。`);
    await ruby.say_and_wait(`单纯的，体力不足。`);
    await ruby.say_and_wait(`希望您能多提出一些增强体力的训练方案。`);
    await ruby.say_and_wait(`那么，我再去跑一圈。`);
    await me.say_and_wait(`耐力不足吗…`, true);
    await era.printAndWait(`确实，也有那个原因。`);
    await era.printAndWait(
      `但是，更像是有其他无可奈何的东西阻挡在她面前，那就是——`,
    );
    era.printButton(`跑法。`, 1);
    era.printButton(`适性。`, 2);
    await era.input();
    await era.printAndWait(`在${me.actual_name}看来，“适性”本身没有好坏之分。`);
    await era.printAndWait(`……只是，根据瞄准的方向不同，它会变成障壁。`);
    await era.printAndWait(
      `第一红宝石的目标比赛有很多是中长距离，她踏上这条路，一定会面对很多阻碍。`,
    );
    await era.printAndWait(`这个阶段还说不准，只能先反复进行耐力训练。`);
    await era.printAndWait(`如果能做出成果，再以此为基础制定新的训练计划。`);
    await era.printAndWait(`转眼，时间来到了放学后。`);
    await ruby.say_and_wait(
      `2400米，对我来说可能有点严酷。是在我适性外的。`,
      true,
    );
    await ruby.say_and_wait(`训练员先生应该是这样推测的，我也感觉到了。）`);
    await ruby.say_and_wait(`不甘…`);
    await ruby.say_and_wait(
      `一定要挑战【橡树杯】，取得母亲未能达成的胜利。`,
      true,
    );
    await ruby.say_and_wait(`一族的存在，就是这样一步步积累的。`, true);
    await era.printAndWait(`管家「大小姐，我来接你了。」`);
    await ruby.say_and_wait(`对不起，预定我要变更。`);
    await ruby.say_and_wait(`因为要自主练习，之后的事情就交给你了。`);
    await ruby.say_and_wait(
      `管家「我明白了。不用在意这边的事情，请集中精神训练。」`,
    );
    await ruby.say_and_wait(`嗯。`);
    await ruby.say_and_wait(`必须前进。`);
    get_attr_and_print_in_event(85, [0, 5, 0, 0, 0], 0) &&
      (await era.waitAnyKey());
  } else if (edu_weeks === 47 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿', ruby);
      await era.printAndWait(`在轻微的慢跑中，第一红宝石跌倒了。`);
      era.printButton(`没事吧！？`, 1);
      await era.input();
      await ruby.say_and_wait(`只是被沙子绊倒了，没有问题。`);
      era.printButton(`受伤了吗？`, 1);
      await era.input();
      await ruby.say_and_wait(`没有的事。`);
      await era.printAndWait(`好像真的没有问题，但是…`);
      await era.printAndWait(
        `从夏季集训开始起，第一红宝石每日每日紧逼着自己。`,
      );
      await era.printAndWait(`只为了在之后的【秋华赏】上拿出成果。`);
      await era.printAndWait(`难得来了海边，于是你想着……`);
      era.printButton(`抓凤蝶`, 1);
      era.printButton(`那么，锻炼耐久吧`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait(`没有的事。`);
        era.printButton(`是这里特有的种类哦，华丽的，和你很般配。`, 1);
        await era.input();
        await ruby.say_and_wait(`……`);
        await ruby.say_and_wait(`破茧成蝶，或许我并配不上它。`);
        await era.printAndWait(`在第一红宝石抓凤蝶期间，小洋伞由你代劳打着。`);
        await era.printAndWait(
          `阴影下对着凤蝶露出笑颜的少女，终于有了点这个年纪女孩该有的样子。`,
        );
        get_attr_and_print_in_event(85, [0, 0, 10, 0, 0], 0) &&
          (await era.waitAnyKey());
        sys_like_chara(85, 0, 1) && (await era.waitAnyKey());
      } else {
        await ruby.say_and_wait(`是因为橡树杯上，我那不成气候的奔跑吧。`);
        await era.printAndWait(
          `果然，第一红宝石对于中距离的适性，远不如短英。`,
        );
        await era.printAndWait(`速度即是优势，也是她最大的弱点。`);
        await era.printAndWait(
          `你继续以锻炼耐力为中心，让第一红宝石进行了艰苦的练习。`,
        );
        get_attr_and_print_in_event(85, [0, 0, 0, 10, 0], 0) &&
          (await era.waitAnyKey());
      }
    }
  } else if (edu_weeks === 95 + 29) {
    const miracle = get_chara_talk(93);
    await print_event_name('夏季合宿', ruby);
    await era.printAndWait(
      `夏季集训开始了。对跑比赛的${ruby.get_uma_sex_title()}来说是个非常重要的季节。`,
    );
    await era.printAndWait(`为了不浪费宝贵的时间，你已然做好了完全准备。`);
    await era.printAndWait(
      `你设计了内容十分紧凑且负荷高的训练菜单，并且配合其强度做好冷却和按摩的准备。`,
    );
    await era.printAndWait(
      `已经事先告知露比该做些什么，因此训练过程显得寡淡无味，但是——`,
    );
    await era.printAndWait(`你看着十分显著的训练成果沾沾自喜。`);
    await era.printAndWait(
      `身为露比的训练员，能够把任务恰当地完成让你倍感自豪。`,
    );
    await ruby.say_and_wait(
      `今日也感谢您全程一直在旁辅佐。那么，为了更衣我先失陪了。`,
    );
    await era.printAndWait(
      `她那未成熟又青涩的雪白身躯，像是倒映在水中的一轮明月，散发着青春无限的魅力光彩。那是一种能够让人抛开理智，坠入罪恶的危险诱惑。`,
    );
    era.printButton(`放开矜持，投入这片深渊。`, 1);
    era.printButton(`即便训练结束了，仍有一些我能做的事情。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `你双手环绕，从后面搂住露比的纤腰。露比惊呼一声后，整个头都羞的低了下去。`,
      );
      await era.printAndWait(
        `这幅羞郝的模样真是太可爱了，你将她的头转过来，将嘴唇贴在她的小嘴上。`,
      );
      await era.printAndWait(
        `露比吓了一跳，妄图从你身上跳起来，多亏你抱得紧，没让小姑娘得逞。`,
      );
      await era.printAndWait(`一道轻吻，霎时将你数日隐忍的欲火给点燃了。`);
      await era.printAndWait(
        `你的右手本扶在露比的腰上，这时已不由自主地伸入了她的泳衣，往她微隆的胸部前进。`,
      );
      await era.printAndWait(
        `马上，你就摸到那对秀气的乳房，用食指和中指轻轻夹着顶端的乳头搓揉。`,
      );
      await ruby.say_and_wait(`呀！训练员先生…`);
      await era.printAndWait(
        `一阵深吻之后，你的舌头慢慢离开了那张淡薄的樱唇。`,
      );
      await era.printAndWait(
        `露比喘着呼吸红着俏脸仰视着你，只有一条透明闪亮的银丝，作为你与她之间的联系。`,
      );
      await era.printAndWait(
        `你的动作没有停止，在露比反应过来之前，左手又划入了泳装的下摆，在她的胯下游走。`,
      );
      await ruby.say_and_wait(`现在不行！要是发出声音被谁看到，事情就大条了！`);
      await era.printAndWait(
        `露比用手肘轻轻往你小腹一推，${ruby.get_uma_sex_title()}的力道让你呛得不停咳嗽。`,
      );
      era.printButton(`啊啊啊啊！好痛啊，痛死了！`, 1);
      await era.input();
      await era.printAndWait(
        `你假装无辜的受害者，故意趁机缩进身体把露比搂进怀里，当然手指也更加伸入。`,
      );
      await era.printAndWait(
        `见露比抖着身子不再抵抗，你微微一笑，把她拉到了旁边的小树林里。`,
      );
      await era.printAndWait(`又是一阵拥吻后，就试着退下她的泳衣。`);
      await era.printAndWait(
        `你双眼明亮，不想错过一刻欣赏这幅迷人幼体的机会。`,
      );
      await era.printAndWait(
        `你将露比按倒，在她雪白的肌肤上裸泳，滑过一片又一片透着粉红的洁白凝脂。`,
      );
      await ruby.say_and_wait(`嗯…啊！`);
      await era.printAndWait(
        `露比平时凛然的表情，现在已经完全消失无踪，取而代之的则是灿若蔷薇的无限柔情。`,
      );
      await era.printAndWait(
        `这幅惹人心动的模样让你开始意乱神迷，你吻着她胸前玲珑秀气的乳房，牙齿一口咬住前端突起的娇嫩果实。`,
      );
      await era.printAndWait(`露比紧咬嘴唇，忍受着你带来的刺激。`);
      await era.printAndWait(
        `就当你吮着小巧乳头，想接着继续最终阶段时，一旁传来了凯斯奇迹的声音。`,
      );
      await miracle.say_and_wait(`露比，你在训练吗？`);
      await era.printAndWait(
        `这时你和露比魂都给吓飞了，你让露比赶紧随便找个理由打法她走。`,
      );
      await era.printAndWait(`露比不得已只好说。`);
      await ruby.say_and_wait(`奇迹同学，我在休息，有什么话明天在说吧。`);
      await era.printAndWait(`说完轻颦薄怒地瞪了你一眼。`);
      await era.printAndWait(
        `你杵在露比的身上哭笑不得，静静等到凯斯奇迹离去。`,
      );
    } else {
      await era.printAndWait(`集训已经过了一半，今天这附近会举行夏日祭典。`);
      await era.printAndWait(
        `当你想着：第一红宝石多半会选择留在集训所的时候。`,
      );
      await ruby.say_and_wait(`训练员先生？`);
      era.printButton(`我帮你做好念书的准备咯？`, 1);
      await era.input();
      await ruby.say_and_wait(
        `原来集训所也有这么安静的地方呢。而且连桌子和照明都准备好了。`,
      );
      await ruby.say_and_wait(`感谢您做了这么多考量。`);
      await era.printAndWait(
        `Siuuuuu——咚！从远方传来了烟火的声音，祭典也差不多该要结束了。`,
      );
      await era.printAndWait(
        `趁露比总算是告一段落的样子，你讲了句早就准备好的话。`,
      );
      era.printButton(`要不要稍微去散步一下？`, 1);
      await era.input();
      await ruby.say_and_wait(`……知道了。`);
      era.drawLine({ content: '海边' });
      await ruby.say_and_wait(`静谧……`);
      await era.printAndWait(
        `你和露比在无人的沙滩上，肩并肩抬头看着满天繁星。沙沙作响的海风令人觉得十分悦耳。`,
      );
      era.printButton(`我听说这里的星星很漂亮才来的。`, 1);
      await era.input();
      await ruby.say_and_wait(
        `确实，我也觉得景色十分秀丽。夏季的星座在夜空闪烁着。`,
      );
      await era.printAndWait(`散发着独特红光的即是天蝎的心脏——心宿二。`);
      await ruby.say_and_wait(`……啊啊，果然。`);
      await ruby.say_and_wait(`蝎火`, true);
      await era.printAndWait(
        `你感觉旁边好像传来了什么声音，可当你正要确认的时候，第一红宝石又恢复了平常的神情。`,
      );
      era.printButton(`要回去了哦？`, 1);
      era.printButton(`白天的时候，奇迹…`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await ruby.say_and_wait(`是。`);
        await ruby.say_and_wait(
          `夜风已让我的头脑清醒许多。我打算回去之后，为明天的训练做些准备。`,
        );
        await era.printAndWait(
          `说完后，露比掉头就走。说不定这场散步对她来说，根本就是非必要的事物。`,
        );
        await era.printAndWait(
          `当你为这多余的提案有没有给她添麻烦而兀自忧心时——`,
        );
        await ruby.say_and_wait(`我也，想成为那样的存在。`);
        await era.printAndWait(`从小小的背影中，传来了这句话。`);
        await era.printAndWait(
          `彼此的心意稍微想通了，你独自在这个夜晚细细品味着这份喜悦。`,
        );
      } else {
        await era.printAndWait(
          `露比闻言玩下身子，手指伸进鞋跟将皮鞋脱下……然后一脚把你踹倒在了地上。`,
        );
        await era.printAndWait(`你皱起眉头，心里不太高兴，但抬头一看。`);
        await era.printAndWait(
          `露比小小的足踝柔润滑腻，大小和你的手掌差不多大。`,
        );
        await era.printAndWait(`生气你的你选择…`);
        era.printButton(`用牙齿轻轻啃。`, 1);
        era.printButton(`用嘴唇吻掌心。`, 2);
        await era.printAndWait(
          `露比好像很怕痒，你用舌头一直延伸到她轻盈的腿腰时，她差点忍不住大叫起来。`,
        );
        await era.printAndWait(
          `你坏心眼地用手指摆出‘噤声’的手势提醒，露比立刻用双手按住嘴唇。`,
        );
        await era.printAndWait(
          `夜晚的月光算不得明亮，但是要看清那块桃园禁地，也是绰绰有余。`,
        );
        await era.printAndWait(
          `你撑开露比的双腿，挺进那道随着露比喘息一开一合的妖艳入口。`,
        );
        await era.printAndWait(
          `露比的下腹随着你一寸寸的前进剧烈抖动，等到深入，又化为扩散至全身的颤抖。`,
        );
        await era.printAndWait(`你温柔地抽插。`);
        await ruby.say_and_wait(`呜呜——`);
        await era.printAndWait(
          `突然间，露比捂着嘴巴发出惨叫般的声音，身体抬起如拱桥。`,
        );
        await era.printAndWait(`她的阴道整个紧缩，一圈圈地紧箍在你的肉杆上。`);
        await era.printAndWait(`射精。`);
        await era.printAndWait(`露比这时已经全身发烫、汗水淋漓。`);
        await era.printAndWait(
          `伴随着你的射精，露比的下体也射出一些透明的潮液。`,
        );
        await era.printAndWait(
          `露比的身体真是被上天眷顾的优体，能够让她轻松享受性爱的愉悦。`,
        );
        await era.printAndWait(
          `即使本人疲惫不堪，她的雌性通道却开始本能地痉挛蠕动。`,
        );
        await era.printAndWait(
          `那种感觉像是无数细小的柔软触手，在同时抚弄你的小训练员。`,
        );
        await era.printAndWait(`一阵拨弄后，你又重振雄风。`);
        era.drawLine();
        await era.printAndWait(
          `当最后一次性交快要结束时，你已经不敢留在露比体内了。`,
        );
        await era.printAndWait(`这具娇躯简直要把人的魂都抽干才罢休。`);
        await era.printAndWait(`露比的小腹微微隆起。`);
        era.printButton(`用手压一下。`, 1);
        await era.input();
        await era.printAndWait(`肚子里满满的浓精，把沙滩玷污地遍地狼藉。`);
        await era.printAndWait(`露比用来捂住嘴巴的手，早已举在头上无力垂下。`);
        await era.printAndWait(`你想把露比带回集训所，双腿却不断发抖。`);
        await era.printAndWait(`最后两个人爬着回到了房间。`);
      }
    }
  } else if (edu_weeks === 95 + 43) {
    await print_event_name('“华丽一族”的训练员', ruby);
    await era.printAndWait(`在训练场旁，正在休息的第一红宝石突然向你搭话。`);
    await ruby.say_and_wait(`您的话到底为什么……作为‘训练员’的本分是…`);
    era.printButton(`不，这是‘我’的使命。`, 1);
    await era.input();
    await era.printAndWait(
      `作为“华丽”一族，展示最耀眼的光辉，那就是第一红宝石的梦想。`,
    );
    await era.printAndWait(
      `实现赛${ruby.get_uma_sex_title()}的梦想——训练员工作的本质可能就是这个。`,
    );
    await ruby.say_and_wait(`……`);
    await ruby.say_and_wait(`这样啊，我明白了。`);
    await era.printAndWait(`担当露出的微笑，似乎有点……玩味。`);
    get_attr_and_print_in_event(85, [5, 0, 5, 0, 0], 0) &&
      (await era.waitAnyKey());
  } else if (edu_weeks === 95 + 48) {
    await print_event_name('圣诞节', ruby);
    await ruby.say_and_wait(`想好要什么礼物了吗？`);
    era.printButton(`想要你。`, 1);
    await era.input();
    await era.printAndWait(`真挚的回答。`);
    await era.printAndWait(`第一红宝石停下了手里的动作，有一丝脸红。`);
    await ruby.say_and_wait(`那就要看你的表现了。`);
    await era.printAndWait(
      `你们专门购进了一批圣诞树来装饰，某个角度来说，何尝不是露比的孩子心性呢。`,
    );
    await era.printAndWait(
      `你恍惚间发现自己好像从没装饰过圣诞树，但现在要和露比一起做了。`,
    );
    await era.printAndWait(
      `拐杖一样的小糖果，穿了孔的金币，姜饼小子和各式各样的玩具被挂到了枝头。`,
    );
    await era.printAndWait(`当然还有马蹄铁，露比看来和很中意它。`);
    await era.printAndWait(
      `然后就是洗漱时间了，虽然露比的话模棱两可，但你看出她还是很期待着今晚。`,
    );
    await era.printAndWait(`安全地洗完澡，露比率先出浴，走进卧室坐在大床边。`);
    await era.printAndWait(`你也跟了进去，不过你是抱着露比一阵亲啃。`);
    await era.printAndWait(
      `像麻药一样，你只想要更近、更近地抚摸她、亲吻她、舔舐她。`,
    );
    await era.printAndWait(
      `房间里也做了许多装饰，大床的四根柱子上就系上了优秀素质近似款的丝带。`,
    );
    await era.printAndWait(`你随手取下一根，轻松地绑住露比的手。`);
    await era.printAndWait(
      `淡黄色的肌肤透着小麦的健康色泽，腿间的凶器因为近来的频繁使用而变成了深红色。`,
    );
    await era.printAndWait(`翘起的棒头更有由红转紫的征兆。`);
    await era.printAndWait(`你把露比的几缕发丝拨到脑后，巨棒离小脸越来越近。`);
    await era.printAndWait(`第一红宝石抬头，对着你笑了一下，伸出舌头点了点。`);
    await era.printAndWait(`你的小训练员颤抖起来，欢快地追寻露比的嘴。`);
    await era.printAndWait(
      `第一红宝石很温顺地让你顶进来，竭尽全力张大嘴才能勉强含住。`,
    );
    await era.printAndWait(
      `她咽了咽喉头，缓缓退出来，直到只剩下嘴皮还挨着顶端的时候再重新含进去。`,
    );
    await era.printAndWait(`动作虽然缓慢，你却差点爽的大吼出来。`);
    await era.printAndWait(`你开始抱住露比的头前后耸动。`);
    await era.printAndWait(`露比稍微挣扎了一下，就竭力配合着你的节奏。`);
    await era.printAndWait(
      `换成人类来被你这样侵犯口腔，不说流血也要脱一层皮。`,
    );
    await era.printAndWait(`过了好一会儿，露比的腮帮都酸了，你才堪堪射出来。`);
    await era.printAndWait(`露比吃不完的部分，便喷在了她的身上。`);
    await era.printAndWait(`一时闭不拢嘴，露比斜眼看着你。`);
    era.printButton(`亲爱的，对不起。`, 1);
    await era.input();
    await era.printAndWait(
      `你搂住爱马的肩，摸摸他可爱的耳朵，亲了下嘴角，才把露比哄了回来。`,
    );
    await era.printAndWait(
      `第一红宝石换了个姿势，背对着你坐到你的胸膛上，还故意撅了撅屁股。`,
    );
    await era.printAndWait(
      `白嫩的两瓣在你的眼前晃悠，你想起刚见面的时候也是被这里吸住了目光。`,
    );
    await era.printAndWait(`抓住臀瓣，你忍不住揉捏起来。`);
    await era.printAndWait(`狠狠一抓再放开，再一巴掌拍上去。`);
    await era.printAndWait(`露比抖了两下，红色的指印马上显现出来，鲜艳极了。`);
    await ruby.say_and_wait(`快点…`);
    await era.printAndWait(
      `你听露比的开始伸出舌头舔这个深深的股沟，从上到下，一直滑过一个小凹槽。`,
    );
    await era.printAndWait(`你用食指搬开，皱皱的，粉嫩的缩成一团。`);
    await era.printAndWait(`某种肉欲的味道从里面散发出来，引得你去探索。`);
    await era.printAndWait(
      `露比软趴趴地倒在你腿上，鼻尖是一根屹立不倒的坚挺，她很享受这种温存的感觉。`,
    );
    await ruby.say_and_wait(`今天就到这里吧，我好累。`);
    await era.printAndWait(`你失望地望着那里，留恋不已。`);
  } else if (edu_event_marks.get('sugu') === 1) {
    edu_event_marks.add('sugu');
    await print_event_name('素股', ruby);
    era.printButton(`一起洗澡怎么样？`, 1);
    await era.input();
    await era.printAndWait(`第一红宝石抬起头来，瞪大了眼。`);
    await era.printAndWait(`你也被自己的话语吓了一跳。`);
    await era.printAndWait(
      `这个建议倒不算太出格，毕竟两个人已经坦诚相待很多次了。`,
    );
    await era.printAndWait(
      `可在今天，这个工作日当面向第一红宝石提出这个建议，多少有点打单了。`,
    );
    await ruby.say_and_wait(`唔…`);
    await ruby.say_and_wait(`也不是不可以。`);
    era.printButton(`露比最棒了！`, 1);
    era.printButton(`我这不是没办法吗，露比实在太可爱了啊。`, 2);
    era.printButton(`把露比抱起来。`, 3);
    const ret3 = await era.input();
    if (ret3 === 1) {
      sys_like_chara(85, 0, 5) && (await era.waitAnyKey());
    } else if (ret3 === 2) {
      sys_love_uma(85, 1) && (await era.waitAnyKey());
    } else {
      sys_love_uma(85, 1);
      sys_like_chara(85, 0, 3) && (await era.waitAnyKey());
    }
    await era.printAndWait(`第一红宝石有些害羞。`);
    await era.printAndWait(
      `看着眼前肤如凝脂，曼妙妖娆的身躯，你不禁口干舌燥。`,
    );
    await era.printAndWait(`第一红宝石被你灼热的视线看得有些害臊。`);
    await ruby.say_and_wait(`洗澡吧。`);
    era.drawLine();
    await era.printAndWait(
      `第一红宝石快步走向浴缸，伸出手试了下水温。层层水雾遮掩起爱马青涩的身体，若隐若现中更具朦胧的美感。`,
    );
    await era.printAndWait(
      `将赤裸的美背与翘臀展示给你，第一红宝石抬起玉足，在水中点起阵阵涟漪。`,
    );
    await era.printAndWait(`入水轻盈，没有溅起多少水花。`);
    era.printButton(`露比，好漂亮。`, 1);
    era.printButton(`脱下裤子，让龟头暴露在空气中。`, 2);
    const ret4 = await era.input();
    if (ret4 === 1) {
      sys_like_chara(85, 0, 3) && (await era.waitAnyKey());
    } else {
      sys_love_uma(85, 1) && (await era.waitAnyKey());
    }
    await ruby.say_and_wait(`呜…您是几天没清理……`);
    await era.printAndWait(
      `可见到你的肉棒威风地挺立，第一红宝石不禁双腿一夹。`,
    );
    await era.printAndWait(`蜜穴明明被热水滋润，少女的神情却有些空虚失落。`);
    era.println();
    await era.printAndWait(`你在短暂的尴尬之后，不解风情地笑着落入水中。`);
    await era.printAndWait(`不似第一红宝石轻盈，令水花四溅。`);
    era.printButton(`坐在第一红宝石对面。`, 1);
    await era.input();
    await era.printAndWait(
      `因为浴缸狭窄的关系，第一红宝石的双足就在你阴囊的下部。`,
    );
    await era.printAndWait(`只需微微抬起，就可以给予你那令人发狂的刺激。`);
    await ruby.say_and_wait(`粗鲁…`);
    await era.printAndWait(`第一红宝石说着，大眼睛无法从你的肉棒上移开。`);
    await era.printAndWait(`它虽然藏在水下，却以不容忽视的雄武姿态昂首。`);
    await era.printAndWait(
      `尽管如此，第一红宝石捧起沾着你们两人味道的清水泼在身上的动作还是优雅可爱。`,
    );
    await era.printAndWait(`你呆呆地看着第一红宝石清洗身体。`);
    await era.printAndWait(
      `忘记了动作，只是注视着那每一寸白嫩肌肤被小手沾着热水轻轻擦过。`,
    );
    await era.printAndWait(
      `名贵香皂搓出的花香附着在每个香甜的泡泡上，把第一红宝石衬托得如公主一般。`,
    );
    await ruby.say_and_wait(`别发愣。`);
    await era.printAndWait(
      `爱马的催促让你回过神来，却猛感两腿间贴着某种娇嫩。`,
    );
    await era.printAndWait(`你不知道是无意的交错还是刻意的诱惑。`);
    era.printButton(`抓住如花瓣般娇嫩的玉足。`, 1);
    era.printButton(`把玩起来。`, 2);
    const ret5 = await era.input();
    if (ret5 === 1) {
      await ruby.say_and_wait(`哈…痒……你做什么呢？`);
      await era.printAndWait(
        `第一红宝石被抬起小脚，被你或轻或重地揉捏到腿软。`,
      );
      await era.printAndWait(`虽然任由你玩弄，洗澡的动作却越来越慢。`);
      era.printButton(`我帮你好好清洗，露比不方便洗到脚吧？`, 1);
      await era.input();
      await era.printAndWait(
        `当然，在你的锻炼下，以第一红宝石的柔韧性把脚洗干净也是能做好的，但确实麻烦许多。`,
      );
      await era.printAndWait(`最重要的是，被你这么捏着。`);
      await ruby.say_and_wait(`嗯……啊！用力过头了…不过，很舒服……`);
      await era.printAndWait(
        `第一红宝石闭起双眼，在你的揉捏中发出一声声诱人的呻吟。`,
      );
      await era.printAndWait(
        `华丽一族的少女双眼迷离地靠在浴缸边缘，棕黑长发散在水中如柳枝般扶起。`,
      );
      await era.printAndWait(
        `能把人类男性轻易打趴的洁白玉手此时交叉挡在了两腿间被大腿摩擦。`,
      );
      await era.printAndWait(
        `一对比艺术品更完美的玉足在少女的娇吟声中被你玩了个遍。`,
      );
      await era.printAndWait(`第一红宝石几乎要躺进水底。`);
      era.printButton(`搂着第一红宝石的腰将她抱入怀中。`, 1);
      await era.input();
      await era.printAndWait(`少女白嫩地肌肤和一对玉如紧贴在你的胸膛。`);
      await ruby.say_and_wait(`你…干什么啊？`);
      era.printButton(`当然是帮露比洗澡啦。`, 1);
      era.printButton(`露比的后背也得交给我来才行吧。`, 2);
      await era.printAndWait(
        `不等第一红宝石理解，你把她整个人抱着转了个方向。`,
      );
      await era.printAndWait(`你用自己的大腿把第一红宝石夹在中间。`);
      await era.printAndWait(
        `第一红宝石弧线优美的后背依靠在你的胸膛上，被迫感受下面那根比热水更让她感觉躁动的阳具。`,
      );
      await era.printAndWait(
        `你伸手把第一红宝石的乳鸽揉出各种形状，诱人的粉红在洁白的肌肤上蔓延。`,
      );
      await era.printAndWait(
        `第一红宝石的胸部被大手揉捏，屁股被肉棒摩擦，甚至双腿也被你的汗毛蹭着。`,
      );
      await era.printAndWait(`全身的快感以电流的形式一次次透过脊髓穿透大脑。`);
      await era.printAndWait(`淫液从蜜穴口流出。`);
      await ruby.say_and_wait(`不……不行！`);
      await era.printAndWait(
        `第一红宝石动摇的神态让你无比欣喜，但她依旧没有同意。`,
      );
      await ruby.say_and_wait(`只能，腿…`);
      era.printButton(`你身子向后一倒，双手依托浴缸。`, 1);
      era.printButton(`你凑上脑袋，带着灼热气息对爱马耳鬓厮磨。`, 2);
      const ret6 = await era.input();
      if (ret6 === 1) {
        era.printButton(`想要的话，自己来吧。`, 1);
        await era.input();
        await era.printAndWait(
          `第一红宝石把小屁股往上挪了挪，一坐下来就令小肉缝紧贴大肉棒。`,
        );
        await era.printAndWait(
          `玉腿直接夹紧，于是你立刻感受到了第一红宝石肉缝的吮吸。`,
        );
        await era.printAndWait(
          `没等你爽的叫出声，第一红宝石伸出匆匆玉指，按在水底的龟头上。`,
        );
        await era.printAndWait(`指尖一次次滑过，若有若无的感觉让你心醉。`);
        await era.printAndWait(
          `这种活色生香的状态让你按捺不住，重新攀上第一红宝石的腰肢。`,
        );
        await era.printAndWait(
          `被玩弄的第一红宝石不自禁夹紧双腿，摩擦、扭动着。`,
        );
        await era.printAndWait(
          `最终，感觉到你肉棒的胀大，第一红宝石将双腿用力一夹。`,
        );
        await era.printAndWait(
          `犹如火山爆发，打量白浊液喷涌而出，沾染上第一红宝石的玉腿与花苞。`,
        );
        await era.printAndWait(`随着灼热扩散，清水中也多了一种白色。`);
        await era.printAndWait(`华丽一族的瑰宝，再次被你玷污了。`);
      } else {
        await era.printAndWait(`第一红宝石心领神会，回过头迎上你的嘴唇。`);
        await era.printAndWait(
          `你肥厚的舌头堂堂正正闯入第一红宝石的小嘴，与丁香小舌交缠着发出淫靡之音。`,
        );
        await era.printAndWait(`一方红光满面，一方星眸如醉。`);
        await era.printAndWait(`你手上用力，轻轻捏住小巧胸部上的樱桃。`);
        await era.printAndWait(`你肆意亵玩其他人想都不敢想的美少女。`);
        await era.printAndWait(
          `秀发、香肩、酥胸、翘臀、玉腿，甚至让第一红宝石配合自己的行为。`,
        );
        await era.printAndWait(`唇分，肉棒迸发出浓厚的白浊。`);
        await era.printAndWait(
          `你挑起第一红宝石光洁的下巴，欣赏眼前平静的通红小脸。`,
        );
        await era.printAndWait(`失神的第一红宝石轻轻挣脱你的怀抱。`);
        await era.printAndWait(
          `随后，你们清理了足够引人遐想的痕迹，快速互相清洗干净。`,
        );
      }
    }
  } else if (edu_event_marks.get('rose_master') === 1) {
    edu_event_marks.add('rose_master');
    await print_event_name('华丽的历史伟业', ruby);
    await era.printAndWait(`第一家宅邸`);
    await era.printAndWait(
      `“华丽一族”，听到这个名字时，人们就会想起某位${ruby.get_uma_sex_title()}……`,
    );
    await era.printAndWait(
      `在历史上刻下了辉煌功绩的稀世名${ruby.get_uma_sex_title()}们……`,
    );
    await era.printAndWait(`继承了她们的血脉，让其绽放出更大的花朵——`);
    await era.printAndWait(`第一红宝石。`);
    await era.printAndWait(
      `${ruby.sex}，便是如今作为“华丽一族”象征的${ruby.get_uma_sex_title()}。`,
    );
    await ruby.say_and_wait(`让您久等了。`);
    await ruby.say_and_wait(`所有的报告都完成了。`);
    era.printButton(`你家人们的意思是？`, 1);
    await era.input();
    await ruby.say_and_wait(`‘请用那双脚继续前进’……和那个人一起。`);

    await era.printAndWait(`第一红宝石结束了三年的赛跑。`);
    await era.printAndWait(
      `为了报告之后的打算，${me.actual_name}和第一红宝石来到了华丽一族老家。`,
    );
    await era.printAndWait(
      `“用自己的脚绽放最耀眼的光辉”，她的说法好像被接受了。`,
    );
    await era.printAndWait(`第一红宝石对你歪着头。`);
    await ruby.say_and_wait(`您在做什么呢？`);
    era.printButton(`我在看肖像画。`, 1);
    era.printButton(`我在看你。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `最开始拜访宅邸的时候，重压几乎要让你的膝盖弯曲。`,
      );
      await era.printAndWait(`如今已经可以如品茶般欣赏画作了。`);
      await era.printAndWait(`毕竟你也算是做出了不少的贡献。`);
      await ruby.say_and_wait(`训练员先生……`);
      await ruby.say_and_wait(`请让我，重新申明一下。`);
      await ruby.say_and_wait(`这三年间，你很出色地承担了指导者的职责。`);
      await ruby.say_and_wait(
        `我想，成为我的训练员，一定会面对连绵不断的艰难辛苦。`,
      );
      await ruby.say_and_wait(`但是，你真的努力了，成长了。`);
      await ruby.say_and_wait(`做的很棒，我为你感到由衷的骄傲。`);
      era.printButton(`我才是，非常感谢。`, 1);
      await era.input();
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(
        `今后，我作为‘华丽一族’的象征，必须一直是闪耀的存在。`,
      );
      await ruby.say_and_wait(`那么，我们商量一下今后的打算吧？`);
      era.printButton(`……`, 1);
      await era.input();
      await ruby.say_and_wait(`您怎么了？`);
      era.printButton(`我可以吗？`, 1);
      await era.input();
      await ruby.say_and_wait(`！`);
      await ruby.say_and_wait(`难以理解。`);
      await ruby.say_and_wait(`决定我的事情，不是训练员的职责吗？`);
      await ruby.say_and_wait(`那么，请尽快。时间是有限的。`);
      await ruby.say_and_wait(`而且……`);
      await ruby.say_and_wait(`我的画像旁边没有你的话，我会很为难的…`);
      await era.printAndWait(`今后也有很多课题等着我们，请千万不要忘记。`);
      sys_like_chara(85, 0, 5) && (await era.waitAnyKey());
    } else {
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(`抱我。`);
      await era.printAndWait(`你听话地抱起第一红宝石小小的身体。`);
      await ruby.say_and_wait(`……嗯。`);
      await ruby.say_and_wait(`到时候我们就这样拍照吧。`);
      sys_love_uma(85, 2);
      await era.waitAnyKey();
    }
  }
  await era.waitAnyKey();
};
