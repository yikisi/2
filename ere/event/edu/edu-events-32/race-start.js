const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');
const SuEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const event_marks = new SuEduMarks(),
    relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    tachyon = get_chara_talk(32),
    coffee = get_chara_talk(25),
    edu_weeks = era.get('cflag:32:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name(`出道战前・研究可行度测试`, tachyon);
    await era.printAndWait(
      `如果说${tachyon.get_uma_sex_title()}与训练员的初遇，是两人的齿轮开始转动的瞬间`,
    );
    await era.printAndWait(`那么这一天，就是这齿轮运转的声音，震撼世界的瞬间`);
    await era.printAndWait(
      `…………最起码，对其他${tachyon.get_uma_sex_title()}而言是如此的`,
    );
    era.println();
    era.printButton(`速子！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `倘若自己的${tachyon.get_uma_sex_title()}真的有这种彷佛史诗的开卷一般的感想的话，现在大概便不会耗费重要的赛前准备时光于与其他${tachyon.get_uma_sex_title()}聊天上了吧`,
    );
    era.println();
    await tachyon.say_and_wait(
      `因此，所谓时间，不过是人为给予的定义罢了，本身就只是个人类创造出的单位，快与慢更是相对的概念而已…………`,
    );
    await tachyon.say_and_wait(`哦呀，豚鼠君？你来了啊`);
    era.println();
    await era.printAndWait(
      `你不由得感到无语，还差几分钟参赛${tachyon.get_uma_sex_title()}就要入场，一辈子理论上只有这么一次的首场出道赛，`,
    );
    await era.printAndWait(
      `身为第一人气主角的${tachyon.sex}，却在比赛开始前还在一旁与人聊天，聊的还是这种无关紧要的话题`,
    );
    era.println();
    await era.printAndWait(
      `你向那几名听速子的论点听的如痴如醉的孩子道别后，拉着速子走下地下道`,
    );
    era.println();
    await tachyon.say_and_wait(`男人如此急躁可是会被讨厌的啊，豚鼠君`);
    era.println();
    await era.printAndWait(`${tachyon.sex}依旧不慌不忙的跟在你身后`);
    await era.printAndWait(
      `你们两人的脚步声在空荡的地下道内回荡着，气氛一时竟有些尴尬`,
    );
    era.println();
    era.printButton(`……没想到，你这么善于与人交流啊`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `开口就是明显的没话找话式发言，但速子似乎没注意到这份尴尬，又或者注意到了但装作没注意的说道`,
    );
    era.println();
    await tachyon.say_and_wait(
      `那还用说，不偶尔经营一下个人形象哪里能有源源不绝的实验品呢`,
    );
    era.println();
    await era.printAndWait(`要是真在意形象的话平常就别做那些奇怪的事啊……`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君，你还嫩的很啊，形象这种东西，人们最喜欢的就是为恶人赋予理由，为善人寻找破绽，`,
    );
    await tachyon.say_and_wait(
      `比起塑造一个完美人设被揭穿，他们更喜欢为一个疯狂科学家寻找他受人排挤的理由并加以同情`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}冷笑一声`);
    era.println();
    await tachyon.say_and_wait(
      `刚刚的对话只是植入种子，等到待会的比赛赢下今天的对话就能在${tachyon.sex}们心底生根发芽，`,
    );
    await tachyon.say_and_wait(
      `未来碰到问题时，自然会来寻找『亲切的速子前辈』来解答了，`,
    );
    await tachyon.say_and_wait(`而仁慈的我，当然会无偿帮助${tachyon.sex}们，`);
    await tachyon.say_and_wait(
      `不过，作为答谢让我纪录点实验数据也是应当的吧？`,
    );
    era.println();
    await era.printAndWait(
      `你不由得冒出冷汗，虽说大概能猜到是为了形象之类的东西，却没想到竟然算计到如此后头了`,
    );
    if (love > 50) {
      await tachyon.say_and_wait(`哦呀哦呀，不会是某人嫉妒了吧？`);
      era.println();
      await era.printAndWait(`似乎误会了什么，速子忽然贴近了你的身体`);
      await era.printAndWait(
        `${tachyon.sex}忽然从背后抱住了你的身子，纤纤素手却不干净的在你身上胡乱抚摸着，最后停留在文件下的位置`,
      );
      await era.printAndWait(
        `${tachyon.sex}隔着裤子，缓缓勾勒出凸起的形状，随着你身体部位的苏醒，${tachyon.sex}的动作也从原来的轻轻描绘转为了抓握撸动`,
      );
      era.println();
      // todo 男豚鼠限定
      await tachyon.say_and_wait(`放心吧，比起女性，我还是喜欢被填满的感觉`);
      era.println();
      await era.printAndWait(
        `${tachyon.sex}靠在你的耳边，用如兰一般的口气说道`,
      );
      era.println();
      await tachyon.say_and_wait(
        `不过……要是你变成女性的话，说不定也能接受呢？`,
      );
      era.println();
      await era.printAndWait(
        `${tachyon.sex}忽然咯咯一笑，放开了你，自顾自朝着赛场走去`,
      );
      era.printButton(`哈哈哈！豚鼠君，这是什么新的笑话吗？`, 1);
      await era.input();
      await era.printAndWait(`速子没有回头，径直走向了光芒处`);
      await era.printAndWait(
        `由于忽然从黑暗的地下道望出，导致你甚至感到刺眼的光芒`,
      );
      await era.printAndWait(
        `在泪水的映照下，走上赛场的${tachyon.sex}，宛如融化在光中一般`,
      );
      era.println();
      await tachyon.say_and_wait(`你只需要在这里乖乖等着我的胜利凯旋就够了`);
    }
  } else if (extra_flag.race === race_enum.hope_sta && edu_weeks < 95) {
    await print_event_name(`研究技术路线—工具申报`, tachyon);
    era.println();
    await era.printAndWait(`终于到了这天`);
    await era.printAndWait(
      `希望锦标，可以说对刚出道的${tachyon.get_uma_sex_title()}们而言下半年最重要的比赛，`,
    );
    await era.printAndWait(`尤其是三冠战线的更是如此，`);
    await era.printAndWait(
      `作为青年级唯一的中距离G1赛事，这是许多有才能的${tachyon.get_uma_sex_title()}踏上梦想之旅的第一步。`,
    );
    era.println();
    await era.printAndWait(
      `然而，如此重要的一天，你的负责${tachyon.get_uma_sex_title()}${
        tachyon.name
      }……`,
    );
    era.println();
    await era.printAndWait(`咦？`);
    era.println();
    await era.printAndWait(
      `原本以为会到处乱跑的速子，今天却反常的乖巧待在选手准备室里`,
    );
    era.println();
    await tachyon.say_and_wait(`哦呀，豚鼠君，你来了啊`);
    era.println();
    await era.printAndWait(
      `待在选手准备室，正拿着某种喷雾往腿上喷的${tachyon.name}只抬头看了你一眼就继续专心于手上的喷雾`,
    );
    era.println();
    era.printButton(`这就是你说的药物？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`是啊，希望这场比赛上能派上用场吧……`);
    await tachyon.say_and_wait(
      `事到如今其实也没什么好瞒着你的了，这种药啊，是能让腿部肌肉舒缓的药物……`,
    );
    await tachyon.say_and_wait(
      `要说的话，类似于冷却剂之类的东西吧，为了不让选手在比赛后受伤提前使用，要是这次实验成功的话……”`,
    );
    era.println();
    await era.printAndWait(`原来如此`);
    await era.printAndWait(`听到这，你不由得松了一口气`);
    await era.printAndWait(
      `虽说相信${tachyon.name}，但心中无论如何都还是会有一丝的担心`,
    );
    await era.printAndWait(
      `倒不是针对速子本人，只是速子的药也不是每一次都那么的准确有效……不然自己也不会到现在全身还闪着光芒了吧`,
    );
    era.println();
    await tachyon.say_and_wait(`好了，准备万全，豚鼠君，出发吧`);
    era.println();
    await era.printAndWait(`口气的情绪高涨，是因为赛场的气氛吗？`);
    await era.printAndWait(`目光的炯炯有神，是因对劲敌的期待吗？`);
    await era.printAndWait(`又或者……`);
    era.println();
    await tachyon.say_and_wait(`希望今天的对手能把药效完全逼出来啊`);
    era.println();
    await era.printAndWait(`果然，是为了实验吧`);
    await era.printAndWait(`你目送着依然故我的${tachyon.sex}步上赛场`);
  } else if (extra_flag.race === race_enum.hoch_sho && edu_weeks < 95) {
    await print_event_name(`调研方向的确立`, tachyon);
    await tachyon.say_and_wait(
      `虽然已经有所准备了，但……果然没什么特别值得一提的实验对照组啊`,
    );
    era.println();
    await era.printAndWait(`但是，这场比赛是皋月赏的前哨战`);
    await era.printAndWait(
      `以皋月赏为目标的话，无论强弱这场比赛的结果都是不能错过的`,
    );
    /* todo 茶座参赛
    era.println();
    await chara_talk.say_and_wait(`说起来，今天茶座也有参赛啊`);
    await chara_talk.say_and_wait(
      `茶座君……希望能跑出令人满意的表现来啊，毕竟……`,
    );
    await chara_talk.say_and_wait(`这么说起来，豚鼠君你对茶座君是怎么看的？`);
    era.println();
    await era.printAndWait(`欸？`);
    await era.printAndWait(`莫名其妙的问题使你陷入思考`);
    await era.printAndWait(`灰色的脑细胞不停开始运转`);
    await era.printAndWait(`速子这么说的意义到底是……`);
    era.println();
    await era.printAndWait(`看你提神戒备的模样，速子笑了出来`);
    era.println();
    await chara_talk.say_and_wait(
      `别那么紧张，只是问问而已，然后我个人还是希望你能和${tachyon.sex}打好关系的……以防万一`,
    );
    era.printButton(`听起来好让人不安啊……`, 1);
    era.printButton(`我永远都会是速子的训练员的！`, 2);
    await era.input();
    era.println();
    await chara_talk.say_and_wait(`你想哪里去了啊……真是，不说了，该上场了`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}拿起希望锦标前见过的喷雾朝着腿上喷了喷后，准备上场`,
    );*/
    //茶座未参赛
    era.println();
    await tachyon.say_and_wait(`要是茶座君参赛的话……肯定会更有实验价值的吧`);
    await tachyon.say_and_wait(`这么说起来，豚鼠君你对茶座君是怎么看的？`);
    era.println();
    await era.printAndWait(`欸？`);
    await era.printAndWait(`莫名其妙的问题使你陷入思考`);
    await era.printAndWait(`灰色的脑细胞不停开始运转`);
    await era.printAndWait(`速子这么说的意义到底是……`);
    era.println();
    await era.printAndWait(`看你提神戒备的模样，速子笑了出来`);
    era.println();
    await tachyon.say_and_wait(
      `别那么紧张，只是问问而已，然后我个人还是希望你能和${tachyon.sex}打好关系的……以防万一`,
    );
    era.printButton(`听起来好让人不安啊……`, 1);
    era.printButton(`我永远都会是速子的训练员的！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`你想哪里去了啊……真是，不说了，该上场了`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}拿起希望锦标前见过的喷雾朝着腿上喷了喷后，准备上场`,
    );
  } else if (extra_flag.race === race_enum.sats_sho && edu_weeks < 95) {
    await print_event_name(`数据分析及实践`, tachyon);
    await era.printAndWait(`今天是经典赛事的第一站，皋月赏`);
    await era.printAndWait(
      `观众们都兴奋的期待着比赛的开锣，连带着选手们也在赛前感到了兴奋`,
    );
    await era.printAndWait(`没错，就连${tachyon.name}也是一样`);
    await era.printAndWait(
      `只是……${tachyon.sex}兴奋的原因，有那么一些的与众不同`,
    );
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君！你看，果然……还是G1的赛场，才有数据收集的价值啊！`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.sex}兴奋的来来回回跑着，甚至想要潜入其他选手的休息室去收集对方的个体资料，`,
    );
    await era.printAndWait(
      `还好在你拼死的阻拦下才使${tachyon.sex}放弃了这个念头`,
    );
    await era.printAndWait(
      `与赛前兴奋的速子做为对比的，是赛前莫名感到不安的你`,
    );
    era.println();
    await era.printAndWait(`先前弥生赏说的起码，到皋月赏前不会有问题`);
    await era.printAndWait(`但……皋月赏后不一定？`);
    await era.printAndWait(`速子的身体……有什么问题吗？`);
    era.println();
    await tachyon.say_and_wait(
      `……豚鼠君？怎么了，今天的你沉默的不像平时的你啊`,
    );
    await era.printAndWait(`居然反过来被速子担心了，这可不行`);
    await era.printAndWait(`你慌忙打起精神，让自己恢复状态`);
    era.println();
    await tachyon.say_and_wait(
      `罢了，今天……就让你看看吧，动真格的模样…真正的，${tachyon.get_uma_sex_title()}的极限`,
    );
    era.println();
    await era.printAndWait(`极限…?`);
    await era.printAndWait(`不，没有问题的，一定`);
    await era.printAndWait(`你抛开疑惑和不安，目送着速子登上赛场`);
    // todo 获得状态 ${tachyon.get_uma_sex_title()}的极限
  } else if (extra_flag.race === race_enum.toky_yus && edu_weeks < 95) {
    await print_event_name(`日本德比前·研究基础缺失 研究目标的再设定`, tachyon);
    era.println();
    await tachyon.say_and_wait(
      `哦呀哦呀，不愧是日本德比……宝穴君应该也要出赛吧，真令人期待啊，${tachyon.sex}的可能性……`,
    );
    era.println();
    await era.printAndWait(
      `日本德比，据说是最幸运的${tachyon.get_uma_sex_title()}得胜的比赛`,
    );
    await era.printAndWait(
      `最快的${tachyon.get_uma_sex_title()}赢皋月，最幸运的${tachyon.get_uma_sex_title()}赢德比，最强的${tachyon.get_uma_sex_title()}赢菊花`,
    );
    await era.printAndWait(
      `比起最快最强这种已经确定的东西……运气的虚无飘渺还是让你不由得在比赛前为${tachyon.sex}感到担心`,
    );
    era.printButton(`真的没问题吗？`, 1);
    era.printButton(`果然还是，戴着去神社求来的大吉签……？`, 2);
    await era.input();
    await era.printAndWait(
      `今天一大早，为了速子而爬上百阶阶梯的神社去求来的福签`,
    );
    await era.printAndWait(`不知为何，听见你的举动后，速子露出了奇怪的神情`);
    era.println();
    await tachyon.say_and_wait(
      `……一大早跑去抽这种东西……没想到豚鼠君你是这么迷信的人啊`,
    );
    era.println();
    await era.printAndWait(`听见速子的话，你摇了摇头`);
    era.printButton(
      `不管是求神拜佛还是什么，只要能让速子跑的更快，无论是什么我都能做！`,
      1,
    );
    await era.input();
    await tachyon.say_and_wait(
      `……呵呵，这种迷信的东西，你还是自己收着就好，但这份心意……我收下了，今天的实验，想必会有一个好结果吧`,
    );
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    event_marks.PlanB === 0 &&
    edu_weeks < 95
  ) {
    if (relation < 225) {
      await print_event_name(`菊花赏前·不同的可能性`, tachyon);
      await era.printAndWait(`那天晚上，你做了一个梦`);
      await era.printAndWait(
        `被人称为超光速粒子的${tachyon.sex}，在赛场上折翼的梦`,
      );
      await era.printAndWait(`那玻璃的双腿破碎，四散的琉璃碎片刺入了你的双眼`);
      era.println();
      await era.printAndWait(`你从梦中惊醒，久久无法恢复平静`);
      await era.printAndWait(`梦境实在太过真实，让你不由得心有余悸`);
      await era.printAndWait(`剩下的夜晚你依然辗转无法入眠，直至天亮`);
      era.drawLine();
      await era.printAndWait(`天才蒙蒙亮，你便匆忙离开了训练员宿舍`);
      await era.printAndWait(
        `虽说赛前已经无数次确认过${tachyon.sex}的身体状况`,
      );
      await era.printAndWait(
        `虽说怎么想也不可能像梦中那样夸张的碎裂。还是担心，还是害怕`,
      );
      await era.printAndWait(
        `还是必须亲眼看见${tachyon.sex}，才能确定梦中的一切并非真实`,
      );
      era.println();
      await tachyon.say_and_wait(`哦呀，豚鼠君？今天来的真早`);
      era.println();
      await era.printAndWait(
        `你冲进实验室时，看见的是一大清早便悠哉喝着红茶的速子`,
      );
      era.println();
      await tachyon.say_and_wait(
        `不过今天毕竟是三冠的最后一场了……紧张也是正常的吧`,
      );
      await era.printAndWait(
        `菊花赏，最强的${tachyon.get_uma_sex_title()}才能赢下的比赛`,
      );
      await era.printAndWait(`忽然，你一时陷入了语塞`);
      await era.printAndWait(`自己做出的选择真的是正确的吗？`);
      await era.printAndWait(`万一，${tachyon.sex}真的像梦中那样碎裂`);
      await era.printAndWait(`自己真的有办法坦然面对吗？`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？怎么了吗？`);
      era.println();
      await era.printAndWait(`明明是如此冲动的情况下冲入实验室的`);
      await era.printAndWait(`在看见${tachyon.sex}的刹那，却什么也说不出口了`);
      era.printButton(`……没什么，菊花赏，一定会赢的`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`你只能，说出连自我安慰都不足以的话语`);
      era.println();
      await tachyon.say_and_wait(`……嗯，一定能赢`);
      era.println();
      await era.printAndWait(`无言`);
      await era.printAndWait(`今日的菊花赏，愿一切安好`);
      await era.printAndWait(`你向神，向佛，向光祈祷`);
    } else {
      await print_event_name(`菊花赏前·会赢吗？`, tachyon);
      await era.printAndWait(
        `菊花赏，最强的${tachyon.get_uma_sex_title()}才能赢下的比赛`,
      );
      await era.printAndWait(`最强，这个词代表着，是全方位`);
      await era.printAndWait(`速度，耐力，力量，毅力，智慧`);
      await era.printAndWait(
        `五种在训练员间最为重视的能力都均衡的达到最强才能赢下的比赛`,
      );
      await era.printAndWait(`但是……如果是${tachyon.name}的话，没有问题`);
      era.println();
      await era.printAndWait(`天生的强者`);
      await era.printAndWait(
        `哪怕无须锻炼，${tachyon.sex}也必然能够达到这样的程度吧`,
      );
      await era.printAndWait(`这就是${tachyon.name}，绝对的强悍`);
      await era.printAndWait(`……不如说，自己真的对${tachyon.sex}有帮助吗？`);
      // todo if 此刻属性未达到全1200
      if (love > 75) {
        await era.printAndWait(
          `说到底，现在的${tachyon.sex}距离当初${tachyon.sex}的极限，不是还有很长一段距离吗？`,
        );
      } else {
        await era.printAndWait(
          `说到底，现在的${tachyon.sex}不就只是恢复到以前该有的水平而已不是吗？`,
        );
        era.println();
        await tachyon.say_and_wait(`豚鼠君？比赛前你又在发什么呆？`);
        era.println();
        await era.printAndWait(
          `打断沉浸于自我厌恶中的你的，是正在钉蹄铁的${tachyon.name}`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}听见你的话后，不出你所料的，速子对此嗤之以鼻`,
        );
        era.println();
        await tachyon.say_and_wait(
          `无聊，我的双腿现在是建立在我的研究与你的训练之下的，`,
        );
        era.println();
        await tachyon.say_and_wait(
          `要是没有你的努力，现在的我说不定已经无法奔跑了，你的意思是希望变成那样吗？`,
        );
        era.println();
        await era.printAndWait(`你连忙道歉说自己不是那个意思`);
        era.println();
        await tachyon.say_and_wait(
          `晚了，明天的药量加倍，既然你感受不出这中间努力的重量，那么就让你多体会一点吧`,
        );
        era.println();
        await era.printAndWait(
          `不，都已经一天三顿像饭一样吃了，这还能再增加的吗`,
        );
        await era.printAndWait(`你在心里忍不住吐槽道`);
        era.println();
        await era.printAndWait(`就在你们毫无压力的谈天时，比赛时间也快到了`);
        await era.printAndWait(`你们漫步走向赛场`);
        era.printButton(`今天的比赛，能赢吧？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`这个吗……究竟能不能呢～～`);
        await tachyon.say_and_wait(
          `不，就算你说什么认真问的我也真不好回答啊……`,
        );
        await tachyon.say_and_wait(
          `毕竟茶座君和其他${tachyon.get_uma_sex_title()}可完全不是一个等级的啊`,
        );
        await tachyon.say_and_wait(
          `再怎么说${tachyon.sex}可是被我选中同样能够踏足极限以后的世界的人……`,
        );
        await tachyon.say_and_wait(
          `以及这个距离的茶座君……说不定，称之为历史最强都不为过`,
        );
        era.printButton(`那么，会输吗？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`会赢哦`);
        era.println();
        await tachyon.say_and_wait(`『我们』一定能赢`);
        era.println();
        await era.printAndWait(`不再是目送`);
        await era.printAndWait(`你与${tachyon.name}一同走向赛场`);
      }
    }
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    event_marks.PlanB === 1 &&
    edu_weeks < 95
  ) {
    //todo 有${tachyon.get_uma_sex_title()}参赛则触发该剧情
    await print_event_name(`菊花赏前·不同的可能性`, tachyon);
    await era.printAndWait(`那天晚上，你做了一个梦`);
    await era.printAndWait(
      `赢下了菊花赏的${tachyon.sex}，站在赛场上挥舞着被白大褂包裹的手`,
    );
    await era.printAndWait(`所有人都在呼喊着${tachyon.sex}的名字`);
    await era.printAndWait(`${tachyon.sex}转过头来，看向了观众席中的你`);
    await era.printAndWait(`脸部却是一片漆黑`);
    await say_by_passer_by(`观众们`, `⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！`);
    await era.printAndWait(`周围的观众们呼喊着${tachyon.sex}的名字`);
    await era.printAndWait(`${tachyon.sex}的名字是什么？`);
    await era.printAndWait(`${tachyon.sex}……是谁？`);
    era.println();
    await era.printAndWait(`你从梦中惊醒，久久无法恢复平静`);
    await era.printAndWait(`梦境实在太过真实，让你不由得心有余悸`);
    await era.printAndWait(`剩下的夜晚你依然辗转无法入眠，直至天亮`);
    era.println();
    await era.printAndWait(`天才蒙蒙亮，你便匆忙离开了训练员宿舍`);
    await era.printAndWait(
      `虽说知道${tachyon.sex}已经向媒体宣布了暂停出赛的消息`,
    );
    await era.printAndWait(
      `虽说知道${tachyon.sex}再怎么说也不可能瞒着自己去报名比赛`,
    );
    await era.printAndWait(`还是担心，还是害怕`);
    await era.printAndWait(
      `还是必须亲眼看见${tachyon.sex}，才能确定梦中的一切并非真实`,
    );
    era.println();
    await tachyon.say_and_wait(`哦呀，豚鼠君？今天来的真早`);
    era.println();
    await era.printAndWait(
      `你冲进实验室时，看见的是一大清早便悠哉喝着红茶的速子`,
    );
    era.println();
    await tachyon.say_and_wait(`不过今天毕竟是菊花赏，紧张也是正常的吧`);
    // todo If 茶座参赛菊花赏
    await tachyon.say_and_wait(
      `晚点一起出发吧，呵呵……这还是我第一次并非自己上场，而是在观众席上看着别人跑呢`,
    );
    // todo If 茶座不参赛菊花赏
    await tachyon.say_and_wait(
      `你要加油啊，不过嘛，毕竟茶座${tachyon.sex}没打算参加，我就在这里看着直播就好，好好表现吧`,
    );
    era.println();
    await tachyon.say_and_wait(`……还是说，有什么其他想说的话？`);
    era.println();
    await era.printAndWait(`明明如此唐突的闯入了实验室`);
    await era.printAndWait(`明明想要将恶梦吐出`);
    await era.printAndWait(`却在见到${tachyon.sex}的瞬间，一切话语都说不出口`);
    era.println();
    await era.printAndWait(`该怎么说呢？`);
    await era.printAndWait(`说，我梦见了你赢下菊花赏的样子？`);
    await era.printAndWait(`说，梦中的你没有脸，没有姓名？`);
    await era.printAndWait(`说，自己后悔……`);
    era.println();
    await era.printAndWait(
      `你用力晃了晃头，随意说了声没事作为回答后，狼狈的离开了实验室`,
    );
    await era.printAndWait(`有什么好说的呢`);
    await era.printAndWait(`有什么能说的呢`);
    await era.printAndWait(
      `事到如今，竟然为了自己做出的决定而后悔什么的，开玩笑也要有个限度`,
    );
    era.println();
    await era.printAndWait(`你离开了实验室，前去准备今日的菊花赏`);
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    event_marks.PlanB === 1 &&
    edu_weeks >= 95
  ) {
    await print_event_name(`黯淡的光辉`, tachyon);
    era.println();
    await tachyon.say_and_wait(`话说，明天就是有马纪念了啊，豚鼠君`);
    era.println();
    await era.printAndWait(`在月下训练的速子无意间向你提起`);
    await era.printAndWait(
      `自从菊花赏结束以来，你们便一直维持着这样在晚上进行训练及指导的关系`,
    );
    await era.printAndWait(
      `原本尴尬的对话，在两个月的接触沟通后也已经渐渐回到了以往的熟悉`,
    );
    await era.printAndWait(
      `虽然这样讲有些过分，但要说对现在的状态，自己是什么样的感受的话`,
    );
    await era.printAndWait(`那大概是享受吧`);
    await era.printAndWait(`白天为了茶座而努力，夜晚则帮助速子恢复`);
    await era.printAndWait(
      `虽然工作量比以前增加了，但与菊花赏前的你相比，心情上的负担可以说每一天都在减轻`,
    );
    await era.printAndWait(`…………也因此，你几乎忘了时间`);
    // todo If 茶座出赛有马纪念
    era.println();
    await tachyon.say_and_wait(`明天，就是茶座今年的最后一场比赛了`);
    // todo If 茶座不出赛有马纪念
    era.println();
    await tachyon.say_and_wait(`明天，就是今年赛季的结束了`);
    era.println();
    await era.printAndWait(`在有马纪念之后`);
    await era.printAndWait(`就是你一直不敢去面对的，来年了`);
    era.println();
    await tachyon.say_and_wait(
      `明年……茶座打算出走的比赛……我会尽全力一个不漏跟上的`,
    );
    era.println();
    await era.printAndWait(
      `你看着${tachyon.sex}的眼眸，里面是为了茶座燃烧的觉悟和热情`,
    );
    era.println();
    await tachyon.say_and_wait(`……所以，明年也请，多多指教了`);
    era.println();
    await era.printAndWait(`没有光芒`);
    await era.printAndWait(
      `一直以来将你双眼灼烧的，${tachyon.name}眼中的光芒，已经黯淡的几乎看不出来了`,
    );
    era.printButton(`明年也请……多多指教`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`在有马纪念后，${tachyon.name}马上召开了记者会`);
    await era.printAndWait(`宣布回归赛场的消息，造成了社会的轩然大波`);
    await era.printAndWait(`但这些后续与现在的你们两人没有半点关系`);
    // todo ${tachyon.name}的出赛限制解除
  } else if (extra_flag.race === race_enum.sank_hai && edu_weeks > 95) {
    await print_event_name(`大阪杯前·变量 群众感情的刺激`, tachyon);
    await era.printAndWait(`大阪杯`);
    await era.printAndWait(`一年中，中长距离最初的一场G1赛事`);
    await era.printAndWait(
      `对于刚刚进入古典年的${tachyon.get_uma_sex_title()}来说，这是最初检验其实力的一场比赛`,
    );
    await era.printAndWait(`然而……对${tachyon.name}而言`);
    era.println();
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}A`,
      `速子前辈！皋月赏那个时候真的太帅了！`,
    );
    await tachyon.say_and_wait(
      `呵呵，谢谢支持，不过我的跑法是一直在进步的，比起皋月赏，现在跑的……绝对会更加惊艳哦`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `速子前辈……看到你在德比的跑法……我真的觉得，如果说${tachyon.get_uma_sex_title()}有极限的话，大概就是那样了！`,
    );
    await tachyon.say_and_wait(
      `不，那只是${
        tachyon.name
      }的极限而已……${tachyon.get_uma_sex_title()}是没有极限的，我相信你们都拥有着无穷的可能性`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}C`,
      `速子前辈！到底要怎么样才能变成像你一样跑的这么快……！`,
    );
    await tachyon.say_and_wait(`哦？真的想知道吗？那么，明天下午到教学理科……`);
    era.printButton(`咳咳`, 1);
    await era.input();
    await era.printAndWait(`你咳了两声，提醒速子`);
    await era.printAndWait(
      `正与后辈们友好交流的${tachyon.sex}僵了一下，人后装作什么也没有发生的继续说了下去`,
    );
    await era.printAndWait(
      `速子不停说着自己比赛时的事，引的这些后辈的小${tachyon.get_uma_sex_title()}们专注聆听`,
    );
    await era.printAndWait(`看上去就像赛前的正常粉丝服务一般温馨的场景`);
    era.println();
    await era.printAndWait(`你叹了口气，回想起前几个月速子说的实验内容`);
    era.println();
    await tachyon.say_and_wait(
      `根据资料的收集……${tachyon.get_uma_sex_title()}在比赛或者奔跑中会感到快乐的原因，首先排在最优先的是被人称赞，收到观众的支持……`,
    );
    await tachyon.say_and_wait(
      `毕竟都还是初中生高中生的年纪，渴望认可也是很正常的`,
    );
    await tachyon.say_and_wait(
      `虽然我觉得自己不会受到影响……但既然是实验，那就必须要将所有可能性都考虑于内`,
    );
    await tachyon.say_and_wait(`综合以上……没错，获得观众的支持……`);
    era.println();
    await era.printAndWait(`说到这，你们忽然陷入了卡壳`);
    era.println();
    await era.printAndWait(
      `回想起几个月前暑期的事……以及在那之后各种的拒绝采访`,
    );
    await era.printAndWait(
      `在大众眼中的${tachyon.name}，在媒体的宣传以及我方的忽视下，似乎已经变成现役的最大问题儿童了`,
    );
    era.println();
    await tachyon.say_and_wait(`……总之，先从特雷森内部能够掌握的来吧`);
    era.drawLine();
    await era.printAndWait(`如此如此这般这般`);
    await era.printAndWait(
      `不过，虽然已经不是第一次看见了，但速子的交流能力还是一如既往的强大啊……`,
    );
    await era.printAndWait(
      `要是愿意把花费在那些危险实验的精力分出一些在经营人际交往上……`,
    );
    await era.printAndWait(`自己说不定就不会被${tachyon.sex}迷上了吧`);
    await era.printAndWait(
      `那种不顾一切，为了研究一切都能做到最好的奉献般的身姿`,
    );
    await era.printAndWait(`以及抛却一切，将所有甩在背后的跑法`);
    await era.printAndWait(
      `两者合一的${tachyon.name}，才是最令人着迷的${tachyon.sex}`,
    );
    if (love > 75) {
      await era.printAndWait(`……不过`);
      await era.printAndWait(
        `看着自己的爱人这样被他人围拥，哪怕都是女孩子也还是令人有些吃醋啊`,
      );
      await era.printAndWait(`这种时候……`);
      era.println();
      await era.printAndWait(`你偷偷按下了藏在手上的某个按纽`);
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `速子前辈！可以帮我签名吗！`,
      );
      await tachyon.say_and_wait(`呵呵，当然可……唔！`);
      era.println();
      await era.printAndWait(
        `在签名的瞬间被启动的某个小玩具，使得${tachyon.name}的签名歪了一些`,
      );
      await era.printAndWait(
        `幸好那名眼神里满是崇拜的小粉丝似乎并不在意这点小事`,
      );
      era.println();
      await era.printAndWait(`速子回过头来暗暗瞪了你一眼`);
      await era.printAndWait(
        `你点了点头，露出歉意的笑容……然后，将手上的遥控器强度调高一阶`,
      );
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}B`,
        `速子前辈……今天的比赛请一定要加油！`,
      );
      await tachyon.say_and_wait(`好呜呜……一……一定会……`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}C`,
        `速子前辈……怎么了吗？`,
      );
      await tachyon.say_and_wait(`没……没什么……只是……只是……咕……`);
    }
    era.printButton(`时候也不早了，该回去选手休息室准备了`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `你连忙上前帮速子解围，在${tachyon.sex}那比起瞪视更像欲求不满的调情的目光下，带着${tachyon.sex}连忙回到选手休息室`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……真是的……别那么嫉妒啊……连后辈的醋都吃……男人不大方点怎么行呢`,
    );
    // todo If 队伍中有茶座
    if (love > 1) {
      era.printButton(`那，我去关心一下茶座的赛况了`, 1);
      era.printButton(`那，我也去关心一下你的后辈们吧`, 2);
    } else {
      era.printButton(`那，我去关心一下茶座的赛况了`, 1, { disabled: true });
      era.printButton(`那，我也去关心一下你的后辈们吧`, 2);
    }
    await era.input();
    await tachyon.say_and_wait(
      `都把人家的性欲勾起了，现在还想去找其他女人……这可不行啊`,
    );
    era.println();
    await era.printAndWait(`速子轻轻的从背后抱了上来`);
    era.println();
    await tachyon.say_and_wait(
      `比赛前……时间还够吧♡别用这种无聊的玩具了……难道你不想，直接填满我的里面吗♡`,
    );
    era.drawLine();
    await era.printAndWait(`${tachyon.name}踏上了赛场`);
    await era.printAndWait(
      `不过……这是唯一一次幸亏${tachyon.sex}那掩的遮实的胜负服，不然大概所有人都会发现${tachyon.sex}那莫名突起的小腹了吧`,
    );
    era.printButton(`时间差不多了，速子`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `啊，也是，那么该上场了……请在比赛结束后再为我祝贺吧，小马驹们`,
    );
    era.println();
    await era.printAndWait(
      `最后的一个媚眼引得小${tachyon.get_uma_sex_title()}们再度发生了惊呼`,
    );
    era.printButton(`……小马驹？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `跟富士君学的……怎么，你也想被这么称呼吗？我的小豚鼠？`,
    );
    era.printButton(`…………不，还是算了吧`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`哦呀，居然害羞了吗？真是纯情啊，豚鼠君`);
    era.printButton(`毕竟……硬体条件比不上，这样模仿只会让人觉得……`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`你可怜的看着速子的胸前`);
    era.printButton(`…………豚鼠君？能麻烦你说清楚硬体条件是什么意思吗？`, 1);
    await era.input();
    era.printButton(`……不，什么也没有`, 1);
    await era.input();
    await era.printAndWait(`在打闹中，比赛开始的时间也到了`);
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    event_marks.PlanB === 0
  ) {
    await print_event_name(`宝冢纪念前·万众其心A`, tachyon);
    await era.printAndWait(`在你们抵达阪神赛场的时候，全场已经人声鼎沸`);
    era.println();
    await say_by_passer_by(`观众A`, `果然看好的还是${tachyon.name}啊`);
    await say_by_passer_by(`观众B`, `${tachyon.name}？那不是……之前……`);
    await say_by_passer_by(
      `观众C`,
      `一听就知道上次大阪杯你没看了，能够跑出那种跑法的${tachyon.get_uma_sex_title()}不可能是坏人！`,
    );
    await say_by_passer_by(
      `观众D`,
      `人格跑法论什么的差不多得了……不过，确实是非常与众不同的跑法`,
    );
    await say_by_passer_by(`观众E`, `加油啊！再跑出大阪杯的跑法来吧！`);
    era.println();
    await tachyon.say_and_wait(
      `哦呀哦呀……真是受欢迎啊，而且提的都是大阪杯……我说，我去年的比赛就这么无聊吗？`,
    );
    era.printButton(`去年当然也很精彩`, 1);
    era.printButton(`只是大阪杯尤其精彩`, 2);
    await era.input();
    era.println();
    await era.printAndWait(
      `去年的速子，跑起来除了光的眩目感外，却带有一丝虚幻`,
    );
    await era.printAndWait(
      `因此看完${tachyon.sex}的比赛，比起惊艳更多还是担心`,
    );
    await era.printAndWait(`害怕${tachyon.sex}会就这么化光而去`);
    await era.printAndWait(`没有了那丝虚幻感后`);
    await era.printAndWait(`${tachyon.name}的跑法，堪称艺术`);
    era.println();
    await tachyon.say_and_wait(
      `……姑且当成是夸奖吧，那么，这样的气氛也正好进行第二次的实验`,
    );
    await tachyon.say_and_wait(
      `大阪杯那次……没能在比赛途中确定，现在G1的舞台，还有应援的粉丝，呵呵，到底能够走到哪一步呢`,
    );
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    event_marks.PlanB === 1
  ) {
    await print_event_name(`宝冢纪念前·万众其心B`, tachyon);
    await era.printAndWait(`热血沸腾`);
    await era.printAndWait(`已经多久没有感受过了，这种比赛的热情`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君……我要上了`);
    era.printButton(`上吧！让我看看${tachyon.get_uma_sex_title()}的极限！`, 1);
    era.printButton(`放心赢下吧，再让我热血沸腾一次吧！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`嗯……然后，等到宝冢结束……`);
    era.println();
    await era.printAndWait(`你点了点头`);
    await era.printAndWait(`那时候说好的，更宽广的世界`);
    era.printButton(`将我们的极限，刻在世界的顶端吧！`, 1);
    await era.input();
  } else if (
    extra_flag.race === race_enum.prix_lat &&
    edu_weeks > 95 &&
    event_marks.PlanB === 1
  ) {
    era.println();
    await era.printAndWait(`在凯旋门赏的前一天`);
    await era.printAndWait(`${tachyon.name}居住的酒店中，来了一名不速之客`);
    era.println();
    await tachyon.say_and_wait(`……茶座君？你怎么会……`);
    await coffee.say_and_wait(`…………速子同学`);
    era.println();
    await era.printAndWait(`本应留在日本的曼城茶座`);
    await era.printAndWait(`在凯旋门赏的前一天，抵达法国`);
    era.println();
    await coffee.say_and_wait(`……是我拜托训练员先生带我来的`);
    await coffee.say_and_wait(`训练员先生说，说……`);
    era.println();
    await era.printAndWait(`速子静静的坐在床边，没有开口`);
    await era.printAndWait(`等待着茶座将话说完`);
    era.println();
    await coffee.say_and_wait(`说，速子同学，你的腿……`);
    await tachyon.say_and_wait(
      `……嗯，已经在极限了，哪怕不是如此，我也会在明天的比赛中拼尽一切……不会留下任何余地`,
    );
    await coffee.say_and_wait(`……为什么`);
    era.println();
    await era.printAndWait(`不知为何，比起当事人的速子，茶座反而更显得急迫`);
    await coffee.say_and_wait(
      `……如果又是跟宝冢前一样，觉得是为我好，为了我和朋友参赛什么的……`,
    );
    await coffee.say_and_wait(
      `那我是绝对不会接受的，哪怕————要在这里阻止你参赛也一样`,
    );
    era.println();
    await era.printAndWait(`曼城茶座的双瞳忽然瞪大`);
    await era.printAndWait(
      `瞬间，仿佛有无形的巨手控制住了${tachyon.name}的行动一般`,
    );
    await era.printAndWait(`${tachyon.sex}被束缚在原地，动弹不得`);
    await era.printAndWait(`但即便如此，${tachyon.sex}的目光却还是依然平静`);
    await era.printAndWait(`而后……`);
    era.println();
    await tachyon.say_and_wait(`………呵呵`);
    await coffee.say_and_wait(`速子同学……？`);
    await tachyon.say_and_wait(`呵呵呵……哈哈哈！`);
    era.println();
    await era.printAndWait(
      `仿佛精神失常一般，哪怕处在这样的情况下，速子依然畅快的笑出了声来`,
    );
    era.println();
    await tachyon.say_and_wait(`我说啊，茶座……你是不是，有点太自我意识过剩了`);
    await coffee.say_and_wait(`！？`);
    await tachyon.say_and_wait(`什么为了你而跑……别想太多了`);
    await tachyon.say_and_wait(
      `我的目的，至始至终就只有一个，那就是超越${tachyon.get_uma_sex_title()}的极限……证明${tachyon.get_uma_sex_title()}的可能性`,
    );
    era.println();
    await era.printAndWait(`不知不觉，原本束缚着速子的力量已经松开`);
    await era.printAndWait(`速子好整以暇的站起身，拍了拍身上并不存在的尘土`);
    era.println();
    await tachyon.say_and_wait(
      `……为了达成这个目的，无论要牺牲什么我都愿意，哪怕是我自己也一样`,
    );
    await tachyon.say_and_wait(
      `反倒是你，茶座……你有这样的觉悟吗？现在的你，能够超越我吗？`,
    );
    await coffee.say_and_wait(`…………！`);
    await tachyon.say_and_wait(
      `……其他的，等到比赛结束……我会在那时候全部说出口的`,
    );
    era.println();
    await era.printAndWait(`没有等待应答，${tachyon.name}便离开了房间`);
    await era.printAndWait(`迎面而来的是一直在房间外等待着两人结束谈话的你`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君，去你的房间坐坐`);
    era.println();
    await era.printAndWait(`……欸？`);
    era.println();
    await tachyon.say_and_wait(`怎么？`);
    // todo 根据男女关系改变
    era.printButton(`深夜进异性的房间，果然还是不太好吧……`, 1);
    era.printButton(`速子这是在诱惑我吗？`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `蠢货！……刚刚才说完那种话耍完帅，现在马上回房间那不就破功了，所以让我去你房间待一下`,
    );
    await tachyon.say_and_wait(`顺便……你房间里有实验用的器具吧？`);
    await tachyon.say_and_wait(
      `刚刚看见茶座那副模样，不知道为什么忽然脑袋里又有灵感了……`,
    );
    await tachyon.say_and_wait(
      `毕竟我明天要上场，今天也不能乱喝什么奇怪的东西，你会帮我喝的吧～～`,
    );
    era.println();
    await era.printAndWait(`看着${tachyon.sex}浮夸的表现，你不由得笑了`);
    await era.printAndWait(`无论明天如何，最起码，享受这今天的时光吧`);
    // todo 速度+5
    // 耐力+5
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    event_marks.PlanB === 0 &&
    edu_weeks > 95
  ) {
    await print_event_name(`有马纪念前·变量添加完毕`, tachyon);
    await era.printAndWait(`那天到来时，一切显得意外的平静`);
    await era.printAndWait(
      `在前一天晚上舒服的安眠后，今天格外有精神的你一早便起床给速子泡好了红茶`,
    );
    await era.printAndWait(`阳光洒在室内，灰尘在光影下舞动`);
    await era.printAndWait(`速子没有在做实验，只是平常的阅读着早报`);
    await era.printAndWait(`你也没有发出光芒，只是安静的品味着红茶`);
    await era.printAndWait(`两人在实验室里享受着暴风雨前最后的宁静`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `请问速子小姐，这次的有马纪念有没有特别关注的对手呢`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……嗯，前几天刚出现了，曼城茶座，茶座君……应该，是能够被称为劲敌的存在吧`,
    );
    await say_by_passer_by(`记者A`, `应该……？`);
    await tachyon.say_and_wait(`嗯，差不多就是这么回事`);
    era.println();
    await era.printAndWait(
      `踏上赛场前的时光，你忽然想起了前几天采访时速子说的话`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君，你有听过物理学的两大乌云吗？`);
    await tachyon.say_and_wait(`没听过？没事没事，只是个故事的引子罢了`);
    await tachyon.say_and_wait(
      `据说，开尔文爵士曾经说过，物理学的大厦已经建成，只是在天空中还有两朵小小的乌云`,
    );
    await tachyon.say_and_wait(
      `然而，谁也没有想到，这两朵小小的乌云，却引出了量子力学和相对论两大近代物理巨头……`,
    );
    await tachyon.say_and_wait(
      `当然，这个故事八成是穿凿附会的，但是……我的意思是，茶座就是那朵乌云`,
    );
    await tachyon.say_and_wait(
      `在我的理论中，茶座是最后剩下的那块拼图……但在这之后呢？`,
    );
    await tachyon.say_and_wait(
      `这朵乌云，能够给我带来相对论一般的冲击吗？让我……见识看看吧`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    event_marks.PlanB === 1 &&
    edu_weeks > 95
  ) {
    await print_event_name(`迎向${tachyon.name}的最终解`, tachyon);
    tachyon.print(`有马纪念`);
    tachyon.print(`按豚鼠君所说，这场比赛后就能给自己一个解答了`);
    tachyon.print(`有些恐惧，却又有些期待`);
    tachyon.print(`恐惧即将迎来的结局`);
    tachyon.print(`期待即将揭晓的真相`);
    tachyon.print(`他到底想说些什么`);
    tachyon.print(`今天的有马，就能说清了吗？`);
    era.println();
    await coffee.say_and_wait(`……速子同学？`);
    await tachyon.say_and_wait(`…………`);
    await coffee.say_and_wait(`速子同学！`);
    await tachyon.say_and_wait(`……啊？`);
    era.println();
    await era.printAndWait(`回过神来，眼前的茶座正无奈的看着自己`);
    era.println();
    await coffee.say_and_wait(`叫了好几声了……又在分什么心？`);
    await tachyon.say_and_wait(`……没什么，没事`);
    await coffee.say_and_wait(`……奇怪`);
    tachyon.print(`如果不是为了茶座，自己绝对不会变成这样`);
    tachyon.print(
      `如果当初没有尽心帮助茶座就好了，最起码，还能让自己成为豚鼠君心中最亮的光`,
    );
    tachyon.print(
      `……之类的想法，哪怕一点，都不曾在${tachyon.name}的脑海中出现过`,
    );
    tachyon.print(
      `要是产生了那样的想法，就真的是将过去的${tachyon.name}全数否定了`,
    );
    tachyon.print(`更何况，茶座自己并没有做错任何事`);
    tachyon.print(`只是……一切的发展，都与预料的不同`);
    tachyon.print(`导致速子只能以一种极为复杂的眼神看着茶座`);
    era.println();
    await coffee.say_and_wait(`差不多该上场了`);
    await tachyon.say_and_wait(`……啊啊，加油`);
    await coffee.say_and_wait(`速子同学…你的声音有点怪怪的`);
    era.println();
    tachyon.print(`是因为过于期待吗？速子的声音变得有些沙哑`);
    era.println();
    await tachyon.say_and_wait(
      `……没什么，昨天跟豚鼠君出去逛街的时候有点着凉了而已`,
    );
    // todo If 茶座爱慕值<75
    await coffee.say_and_wait(`又跟训练员先生乱跑……明明今天是有马纪念还这样`);
    // todo If 茶座爱慕值>75
    await coffee.say_and_wait(
      `等一下，你们两位，在圣诞节，出去逛街？……比赛之后请详细解释到底是怎么回事`,
    );
    era.println();
    await era.printAndWait(`后面的话语已经无关紧要了`);
    await era.printAndWait(`${tachyon.name}等待着，等待比赛结束谜底揭开的瞬间`);
  }
};
