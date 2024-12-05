const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} flash
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 * @param {function} super_race_end
 */
module.exports = async function (
  flash,
  me,
  callname,
  hook,
  extra_flag,
  super_race_end,
) {
  const edu_weeks = era.get('cflag:37:育成回合计时'),
    your_name = me.name;
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('万事之始 · 二', flash);
    await flash.say_and_wait(`我回来了，${callname}。`);
    era.printButton('「比赛辛苦了。」', 1);
    await era.input();
    await flash.say_and_wait('呼……真是一场难忘的体验呢。');
    await era.printAndWait(
      '荣进闪耀长舒一口气，为自己缓解些许比赛带来的疲惫。',
    );
    await era.printAndWait(
      `紧接着，${your_name} 听到${flash.sex}发出一句真心感叹。`,
    );
    era.printButton('「难忘吗？」', 1);
    await era.input();
    await flash.say_and_wait(
      '是的，这就是正式比赛和训练赛的区别啊。果然只靠言语是无法感受到的呢。',
    );
    await era.printAndWait('说到这里，荣进闪耀满意地点了点头。');
    await era.printAndWait(
      `${your_name} 看得出来，得到全新收获的${flash.sex}对于这场比赛的过程很是享受。`,
    );
    era.printButton('「接下来准备做什么呢？」', 1);
    await era.input();
    await era.printAndWait('既然如此，那现在正是趁热打铁的好时机。');
    await flash.say_and_wait(
      '接下来的安排的话，果然还是按照计划里决定的那样吧。',
    );
    era.printButton('「计划啊。」', 1);
    await era.input();
    await era.printAndWait(
      '通过出道战来检验自己在中长距离赛道上的发挥，并为接下来参加经典级的经典三冠以及资深级的春秋三冠做好准备。',
    );
    await era.printAndWait(
      `总的来讲，这就是荣进闪耀为自己赛${flash.get_uma_sex_title()}的生涯所做出的规划。可谓是想把一切能够拿到的荣誉都掌握在手中，光只是以文字的形式书写在纸面上都显得无比豪华。`,
    );
    await flash.say_and_wait('只是……');
    await era.printAndWait(
      `……不过，如果真的一切都如${flash.sex}所愿的话。那么到最后，应该也可以像${flash.sex}自己说的那样，以荣誉，让父母以${flash.sex}为傲吧。`,
    );
    await era.printAndWait(`想到这里，${your_name} 不禁在内心中为自己打气。`);
    era.printButton('「那我们，就一起加油吧。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！');
    await era.printAndWait(
      `荣进闪耀朝 ${your_name} 点了点头，${flash.sex}的脸上露出灿烂的笑容。`,
    );
  } else if (extra_flag.race === race_enum.sats_sho) {
    await print_event_name('应行之事 · 二', flash);
    await era.printAndWait(
      '虽然途中经历了一些波澜，不过经典三冠之一的皋月赏在此刻终于落下帷幕。',
    );
    await flash.say_and_wait(`我回来了，${callname}。`);
    await era.printAndWait(
      `眼见荣进闪耀平安无事地从赛场上归来，${your_name} 不禁松了一口气。`,
    );
    era.printButton('「辛苦了。」', 1);
    await era.input();
    await flash.say_and_wait('嗯，大体是按照计划中设想的那样奔跑了。');
    era.printButton('「确实是很精彩的比赛。」', 1);
    await era.input();
    await era.printAndWait(
      `即便拖着刚刚康复的身体，但${flash.sex}在这场比赛中的表现依旧可圈可点。这点毫无疑问，非常出色。`,
    );
    await flash.say_and_wait('呵呵～');
    await era.printAndWait(
      `听到 ${your_name} 的夸赞，荣进闪耀轻笑几声。此时的${flash.sex}，眼神中闪动着名为热切的光芒。`,
    );
    await flash.say_and_wait('下一场比赛，就是日本德比了呢。');
    await flash.say_and_wait(
      '必须要维持住现在的状态才行。更进一步的训练也要提上日程。',
    );
    await flash.say_and_wait(
      '还有比赛所需的策略以及参赛选手的相关资料也要提前准备。',
    );
    await flash.say_and_wait('以及……');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 看着眼前突然忙碌起来，为直到日本德比到来之前的未来做详细规划的荣进闪耀。`,
    );
    era.printButton(
      '「总之，日本德比固然重要，但在准备比赛之余留给自己适当的休息时间。」',
      1,
    );
    await era.input();
    await era.printAndWait(`深知劳逸结合道理的 ${your_name} 开口提醒道。`);
    era.drawLine();
    await flash.say_and_wait('日本达比……荣进闪耀……评价……');
    await era.printAndWait(
      `回到特雷森学园的高铁上，${your_name} 无意之中看见荣进闪耀拿出手机，在搜索栏中输入以上的三段词汇。`,
    );
    era.printButton('「在搜索人们对你的看法吗？」', 1);
    await era.input();
    await era.printAndWait(
      `片刻的思考后，${your_name} 明白了荣进闪耀此举的用意。`,
    );
    await flash.say_and_wait(
      '是的，在经过皋月赏的比赛之后，我很想知道人们对于我的看法会产生怎样的变化。',
    );
    await era.printAndWait(
      '说着，荣进闪耀打开网页中某个讨论激烈的论坛，映入眼帘的评论是——',
    );
    await say_by_passer_by_and_wait(
      '网友A',
      '皋月赏的发挥还真是意外啊，明明是在身体刚痊愈的情况下。',
    );
    await say_by_passer_by_and_wait(
      `网友B`,
      `这下有些期待${flash.sex}在日本德比上的表现了呢。`,
    );
    await say_by_passer_by_and_wait(
      `网友C`,
      `相比于皋月赏，日本德比的难度又会进一步的提高，不知道${flash.sex}到时候又会跑出什么样的成绩。`,
    );
    era.printButton('「看来大家都对你抱有期待呢。」', 1);
    await era.input();
    await era.printAndWait(`见此，${your_name} 微笑着说道。`);
    await flash.say_and_wait(
      `嗯……不过也不只是我，其他的参赛选手，论坛里的网友对于${flash.sex}们也有着各种各样的支持理由。`,
    );
    await flash.say_and_wait(
      '可以理解呢。毕竟日本德比，无论对谁而言，都是特别的比赛吧？',
    );
    await flash.say_and_wait('所以……');
    await era.printAndWait(
      `说到这里，荣进闪耀突然深吸一口气，${flash.sex}的眼神在一瞬之间变得无比坚毅。`,
    );
    await flash.say_and_wait('必须要更加努力才行。');
    era.printButton('「闪耀……」', 1);
    await era.input();
    await flash.say_and_wait('日本德比的冠军，我一定要——收入囊中！');
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank === 1) {
    await print_event_name('应行之事 · 四', flash);
    await say_by_passer_by_and_wait('观众', '喔喔喔喔喔——！！！');
    await say_by_passer_by_and_wait('主持人', '荣进闪耀——冲线！！！');
    await say_by_passer_by_and_wait(
      '主持人',
      '真是令人意外的结果，本次日本德比的冠军是——荣进闪耀！！！',
    );
    await say_by_passer_by_and_wait(`主持人`, `让我们恭喜${flash.sex}！」`);
    await flash.say_and_wait('呼……呼……');
    await flash.say_and_wait('我……赢了？');
    await say_by_passer_by_and_wait(
      `粉丝A`,
      `恭喜你，荣进闪耀！我就知道我没有支持错人！`,
    );
    await flash.say_and_wait('！');
    await say_by_passer_by_and_wait(
      `粉丝B`,
      `德比赛${flash.get_uma_sex_title()}荣进闪耀！我会记得今天的。`,
    );
    await flash.say_and_wait('大家……');
    era.printButton('「恭喜你，闪耀。」', 1);
    await era.input();
    await flash.say_and_wait(`${callname}……嗯！我赢下日本德比了！`);
    era.printButton('「一件非常了不起的成就。」', 1);
    await era.input();
    await flash.say_and_wait(
      '我没有辜负父母的期望，没有辜负您的期望，我做到了！',
    );
    await era.printAndWait(
      `荣进闪耀的脸上露出灿烂的笑容，看得出来，此刻的${flash.sex}完全沉浸于胜利所带来的喜悦中。`,
    );
    await era.printAndWait('「嘟嘟。」');
    await era.printAndWait(
      `然后非常巧妙的，手机提示音也在这个时候传入${flash.sex}的耳中。`,
    );
    await flash.say_and_wait('新的短信？');
    await era.printAndWait('荣进闪耀掏出手机，映入眼帘的是——');
    await say_by_passer_by_and_wait(
      `闪耀的母亲`,
      `恭喜你获得第一名，闪耀。日本德比的发挥非常super，toll，klasse。`,
    );
    await flash.say_and_wait('！');
    await say_by_passer_by_and_wait(
      `闪耀的母亲`,
      `在得知胜利的消息之后，你爸爸他开心地在蛋糕店里来回走动。`,
    );
    await flash.say_and_wait('父亲他居然……呵呵呵～');
    await say_by_passer_by_and_wait(
      `闪耀的母亲`,
      `说实话，真的很想将你抱在怀里夸奖。这次的冠军实属不易，是你这几年来付出的那些努力的缩影，是进步的证明。`,
    );
    await say_by_passer_by_and_wait(
      `闪耀的母亲`,
      `愿今后这种源自胜利的喜悦，能常伴于你的身边。」`,
    );
    await flash.say_and_wait('母亲……');
    era.printButton('「看来你的父母也在为你高兴呢。」', 1);
    await era.input();
    await flash.say_and_wait('……嗯！');
    await era.printAndWait('传递喜悦的短信到此结束。');
    await era.printAndWait('而得到父母祝福的荣进闪耀，此时则显得无比积极。');
    await flash.say_and_wait(
      '虽说赢下日本德比这件事情所带来的喜悦很容易让人沉醉其中。不过客观来讲，这也是生涯的一个阶段而已。',
    );
    await flash.say_and_wait(
      `所以事不宜迟，一起来商量下一步的计划吧，${callname}！`,
    );
    await flash.say_and_wait('一起———向着菊花赏，进发。');
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks < 96) {
    await print_event_name('挑战之路 · 二', flash);
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        '日本杯跟日本德比之间有着相似的距离和赛道。因此，不出意外的，赢下日本德比的荣进闪耀在这场比赛中也发挥出了极其精彩的表现。',
      );
      await flash.say_and_wait(`呼……我回来了，${callname}。`);
      era.printButton('「比赛辛苦了。」', 1);
      await era.input();
      await era.printAndWait(
        '虽然过程十分艰险，但荣进闪耀最终还是凭借自身过硬的实力，跨越世代的障碍战胜了那些前辈。',
      );
      await flash.say_and_wait('我赢了。');
      await era.printAndWait(
        `赛后，选手休息室内，刚从赛场上归来的荣进闪耀对 ${your_name} 露出有些疲惫的微笑。`,
      );
      await flash.say_and_wait(
        `特别周同学和荒漠英雄同学的实力，真的很强。我竭尽了全力才勉强超越了${flash.sex}们。`,
      );
      era.printButton('「很精彩的比赛。」', 1);
      await era.input();
      await flash.say_and_wait(
        '是的，也算是切实体会到自己目前所拥有的实力了。',
      );
      await era.printAndWait(
        `荣进闪耀点了点头，${your_name} 能很明显从${flash.sex}的语气中听出对于这场来之不易的胜利的喜悦。`,
      );
      era.printButton('「很开心呢。」', 1);
      await era.input();
      await flash.say_and_wait(
        '嗯，因为我不仅赢了，而且托此的福，也感悟到了不少全新的收获。',
      );
    } else {
      await era.printAndWait(
        '日本杯跟日本德比之间有着相似的距离和赛道。按理来说，赢下日本德比的荣进闪耀在这场比赛中也会有着出彩的发挥才对。',
      );
      await flash.say_and_wait(`呼……我回来了，${callname}。`);
      era.printButton('「比赛辛苦了。」', 1);
      await era.input();
      await era.printAndWait(
        '但很遗憾的是，这种优势并不足以弥补荣进闪耀和那些前辈之间的实力差距。',
      );
      await flash.say_and_wait('失败了呢。');
      await era.printAndWait(
        `赛后，选手休息室内，刚从赛场上归来的荣进闪耀对 ${your_name} 露出有些疲惫的微笑。`,
      );
      await flash.say_and_wait(
        '明明竭尽全力，结果还是无法追上特别周同学和荒漠英雄同学。',
      );
      era.printButton('「很精彩的比赛。」', 1);
      await era.input();
      await flash.say_and_wait(
        `是的，也算是切实体验到与${flash.sex}们之间的差距了。`,
      );
      await era.printAndWait(
        '荣进闪耀点了点头，言语之间倒是没有太重的失落情绪。',
      );
      await flash.say_and_wait(
        '不过，同样托此的福，感悟到了不少全新的收获呢。',
      );
    }
    await era.printAndWait(`紧接着，${flash.sex}的脸上浮现出若有所思地表情。`);
    await flash.say_and_wait(
      `一直这样进步下去的话。终有一天，肯定是可以正面战胜${flash.sex}们，实现一马当先的吧。`,
    );
    era.printButton('「就用下一场比赛，来印证这一场比赛得到的成果吧。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！');
    await flash.say_and_wait('有马纪念……呵，真是令人期待的比赛啊。');
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
    await print_event_name('挑战之路 · 四', flash);
    await say_by_passer_by_and_wait('观众A', '真是一场精彩的比赛。');
    await say_by_passer_by_and_wait(
      '观众B',
      '是啊，不亏是有马纪念，完全值回票价了。',
    );
    await say_by_passer_by_and_wait(
      `观众A`,
      `光是能看到那些很早之前就不再参赛的赛${flash.get_uma_sex_title()}们久违的再度登场这一点就很令人兴奋了，结果没想到${
        flash.sex
      }们居然还能跑出这么惊人的成绩。`,
    );
    if (extra_flag.rank === 1) {
      await say_by_passer_by_and_wait(
        '观众B',
        '说到这个，那更厉害的就是荣进闪耀了。',
      );
      await say_by_passer_by_and_wait(
        `观众B`,
        `明明作为尚未成长完全的经典级赛${flash.get_uma_sex_title()}，却在比赛的途中接连不断地超越成名已久的前辈。`,
      );
      await say_by_passer_by_and_wait(
        `观众A`,
        `没错，这种实力还真是惊人啊。真是越发期待${flash.sex}在第三年的表现了。`,
      );
      era.drawLine();
      await flash.say_and_wait(`我回来了，${callname}。`);
      era.printButton('「比赛辛苦了，很出彩的发挥。」', 1);
      await era.input();
      await era.printAndWait(
        `正如荣进闪耀赛前所言，从最开始到现在，已经克服了许多挑战的${flash.sex}，自身所蕴涵的实力已经不容小窥。`,
      );
      await era.printAndWait(
        `即便面对那些更高年级的前辈，${flash.sex}也能够分庭抗争，甚至在最后取而胜之。`,
      );
      await flash.say_and_wait(
        '呼……是很畅快的比赛呢。虽然过程十分艰险，但我还是取得了胜利。',
      );
      await era.printAndWait(
        `荣进闪耀长舒一口气，一种大战之后取得理想结果的满足感在${flash.sex}的脸上浮现。`,
      );
      await flash.say_and_wait(
        '通过日本杯和有马纪念这两场比赛，我能明显感受到自己的成长。',
      );
      await flash.say_and_wait(
        '这样的话也就意味着，今年的计划，算是圆满收官了呢。',
      );
    } else {
      await say_by_passer_by_and_wait(
        `观众B`,
        `跟后辈们拉开了一道非常明显的差距啊。难以想象，如果明年${flash.sex}们还接着参赛，经典级的孩子们应该怎么面对。`,
      );
      await say_by_passer_by_and_wait(
        `观众A`,
        `说起经典级，${your_name} 看到了吗，荣进闪耀这局的发挥。`,
      );
      await say_by_passer_by_and_wait(
        '观众B',
        '嗯，客观来讲其实非常出色，只可惜遇到了更强力的对手。',
      );
      await say_by_passer_by_and_wait(
        `观众A`,
        `真是令人遗憾的事情，不过${flash.sex}的成长应该也远没有到达尽头，这样想的话还真是期待明年的发展会如何啊。`,
      );
      await say_by_passer_by_and_wait(
        '观众B',
        '是啊，对明年的发展开始拭目以待了。',
      );
      era.drawLine();
      await era.printAndWait(
        `正如荣进闪耀赛前所言，从最开始到现在，已经克服了许多挑战的${flash.sex}，自身所蕴涵的实力已然不容小窥。`,
      );
      await flash.say_and_wait(`我回来了，${callname}。`);
      era.printButton('「比赛辛苦了，很出彩的发挥。」', 1);
      await era.input();
      await era.printAndWait(
        '即便在实战中与那些前辈之间仍旧存在些许的差距，但也到了可以接受的范围之内。',
      );
      await flash.say_and_wait(
        '呼……很畅快的比赛，虽然还是无法避免失败的结果。',
      );
      await era.printAndWait(
        `想必等到明年，再次成长起来的${flash.sex}，就可以做到真正意义上的同台竞技了。`,
      );
      await flash.say_and_wait(
        '不过通过日本杯和有马纪念这两场比赛，我确实能明显感受到自己的成长。',
      );
      await flash.say_and_wait('下一次，想超越我就没有这么容易了。');
      await era.printAndWait('巧合的是，面前人也是这么认为的。');
      await era.printAndWait(
        `因此，${your_name} 能清楚看到荣进闪耀此时的表情并没有那么的沮丧，甚至隐隐之间，还有些意犹未尽的感觉。`,
      );
      await flash.say_and_wait(
        '嘛，不过既然有马纪念赛已经结束了的话。那今年的计划，也算是正式落下帷幕了呢。',
      );
    }
    await era.printAndWait(
      `说到这里，荣进闪耀充满干劲地点了点头。从比赛中得到激励的${flash.sex}已经迫不及待地准备开始执行第三年的计划了。`,
    );
    era.printButton('「等回去以后，一起来规划未来吧。」', 1);
    await era.input();
    await flash.say_and_wait('嗯！');
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    extra_flag.rank === 1 &&
    edu_weeks > 96
  ) {
    await print_event_name('璀璨之秋 · 二', flash);
    const me = get_chara_talk(0);
    await say_by_passer_by_and_wait(
      '主持人',
      '本次秋季天皇赏的冠军是——荣进闪耀！！！」',
    );
    await say_by_passer_by_and_wait(`主持人`, `让我们恭喜${flash.sex}！！！」`);
    await say_by_passer_by_and_wait(
      `观众`,
      `荣进闪耀！恭喜 ${your_name}！！！」`,
    );
    await flash.say_and_wait('呼……Juhu! Geschafft! 我做到了！');
    await era.printAndWait(
      '闪耀着灿眼光芒的东京竞马场上，以夺目之姿第一个冲过终点线的荣进闪耀向着喧闹的观众席热烈挥手。',
    );
    await flash.say_and_wait('非常感谢大家的支持！');
    await era.printAndWait(
      `${flash.sex}此时的笑容无比璀璨，这是在历经磨难达成理想之后无法压抑的喜悦。`,
    );
    await flash.say_and_wait(
      `在这成为德比赛${flash.get_uma_sex_title()}的东京竞马场上，能够再次取得胜利，真是太……`,
    );
    await say_by_passer_by_and_wait(`闪耀的母亲`, `闪耀，恭喜 ${your_name}。`);
    await flash.say_and_wait('！');
    await say_by_passer_by_and_wait(
      `闪耀的父亲`,
      `十分精彩的比赛，${your_name} 不亏是我们的骄傲。`,
    );
    await flash.say_and_wait('！！');
    await era.printAndWait(
      `然后，就在观众席的前方，远渡重洋而来，只为如愿目睹${
        flash.sex_code - 1 ? '女儿' : '儿子'
      }奔跑身姿的父母起身，向${flash.sex}鼓掌祝贺。`,
    );
    await say_by_passer_by_and_wait(
      `闪耀的母亲`,
      `当然，即便什么都不做，${your_name} 也是我们最可爱，最珍贵的宝物。这点永远不会发生变化。`,
    );
    await say_by_passer_by_and_wait(
      `闪耀的父亲`,
      `更重要的是，${your_name} 坚持贯彻了自己的道路，这点非常难得。`,
    );
    await say_by_passer_by_and_wait(
      `闪耀的父亲`,
      `所以，以普通人的身份，我向 ${your_name} 表达敬意。`,
    );
    await flash.say_and_wait('爸爸……妈妈……');
    era.printButton(
      '「恭喜你，闪耀，顺利达成了自己的梦想。你也是我的骄傲。」',
      1,
    );
    await era.input();
    await flash.say_and_wait('还有训练员……');
    await flash.say_and_wait('谢谢你们！');
    await era.printAndWait(
      '说到这里，荣进闪耀高雅的屈身。随后，单膝跪在了草地上。',
    );
    await flash.say_and_wait('呼——');
    await era.printAndWait(
      `${flash.sex}深吸一口气，念出了也许是在心中早已准备好的台词。`,
    );
    await flash.say_and_wait(
      '对于今天这一场胜利，我想要去感谢几位值得我发自真心去尊重的人。',
    );
    await flash.say_and_wait(
      '他们是我严肃和蔼的父亲和我温柔慈爱的母亲，还有……一直以引导的姿态陪伴于我身边，不懈余力帮助我的训练员。',
    );
    await flash.say_and_wait(
      '如果没有他们的帮助的话，如今的我，想必是无论如何也无法到达这种高度吧。',
    );
    await flash.say_and_wait(
      '因此请容许我，在此万众瞩目的场合，对他们，献上自己最深的敬意。',
    );
    await era.printAndWait(
      '荣进闪耀深深鞠躬，漫天的喝彩化作实质的光芒自天空飘落。',
    );
    await era.printAndWait('这是对于一位荣誉而归的骑士，应有的奖赏。');
    era.drawLine();
    await flash.say_and_wait(`我回来了，${callname}。`);
    era.printButton('「欢迎回来，闪耀。」', 1);
    await era.input();
    await era.printAndWait('赛后，选手休息室内。');
    await era.printAndWait(
      `回到房间的荣进闪耀，满脸轻快之色地向 ${your_name} 问好。`,
    );
    era.printButton('「和父母的叙旧结束了吗？」', 1);
    await era.input();
    await era.printAndWait(`见此，${your_name} 问道。`);
    await era.printAndWait(
      `因为荣进闪耀在走下赛场的第一刻就是和父母相拥在一起，站在旁边的 ${your_name} 也不好意思打扰他们的团聚，便干脆在休息室等候届时已经抒发完感情的${flash.sex}归来。`,
    );
    await flash.say_and_wait('嗯。');
    await era.printAndWait('荣进闪耀点了点头，显得很开心。');
    await flash.say_and_wait(
      '和父亲母亲简单交流了一下我离开德国这几年发生的事情。',
    );
    await flash.say_and_wait(
      '真的是一段很令人享受的时光啊，无论是听他们讲述自己的新故事，还是我将自己的新故事讲述给他们。',
    );
    await flash.say_and_wait('如果可以的话，好想一直这样持续下去。');
    await era.printAndWait(`${flash.sex}意犹未尽地发出感叹。`);
    await flash.say_and_wait(
      '不过遗憾的是现在时间已经不早了，父母必须先回旅馆休息了。',
    );
    era.printButton(
      '「你今天也辛苦了，回去好好休息吧。剩下的事情会有很充沛的时间去处理。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      '在秋季天皇赏上勇夺桂冠，令父母引以为傲的荣进闪耀已经达成了自己的梦想。',
    );
    await era.printAndWait(
      `换句话说，${flash.sex}已经没有接着参加闪光系列赛的理由了。这种情况下，未来自然能有数不尽的时间用来和家人相处。`,
    );
    await flash.say_and_wait('……您说的对呢，所以我现在就是为此而来的。');
    era.printButton('「？」', 1);
    await era.input();
    await era.printAndWait(
      `荣进闪耀自然是听出 ${your_name} 话语中想表达的意思。`,
    );
    await era.printAndWait(
      `于是下一秒，${your_name} 看见${flash.sex}收敛起脸上的微笑。`,
    );
    await flash.say_and_wait(`我有话想对您说，${callname}。`);
    era.drawLine();
    await flash.say_and_wait(
      '今年的六月份，您曾经问过我在达成梦想之后，想要去做些什么。',
    );
    await era.printAndWait('皎白的灯光照耀在荣进闪耀姣好的脸上。');
    await era.printAndWait(`${flash.sex}注视 ${your_name}，语气带着平和。`);
    era.printButton('「你说过想继承父母的蛋糕店。」', 1);
    await era.input();
    await flash.say_and_wait('嗯，这是一开始就决定好的事情。');
    await flash.say_and_wait(
      '但与此同时，我也说过。因为和您相遇之后，经历的事情太多，所以需要再去花费时间好好规划一番。',
    );
    era.printButton('「规划的结果是？」', 1);
    await era.input();
    await era.printAndWait(`${your_name} 顺着荣进闪耀的话意问道。`);
    await flash.say_and_wait('………');
    await era.printAndWait(`然后，${your_name} 听到${flash.sex}发出一声轻叹。`);
    await flash.say_and_wait('有言必行，有恩必报，这是我的为人准则。');
    await flash.say_and_wait(
      '在您的帮助下，我成功得到了父母的认可，成长为了足以独当一面的人。而这是我梦寐以求的心愿。',
    );
    await era.printAndWait(
      `说着，荣进闪耀伸出手，将那本记载了${
        flash.sex
      }作为赛${flash.get_uma_sex_title()}迄今为止的所有计划的笔记本交给 ${your_name}。`,
    );
    await flash.say_and_wait(
      '坦白来讲，即便是现在，在面对这个事实时，我都会产生一些不真实的想法。',
    );
    await flash.say_and_wait(
      '当然，也正是因为如此，才能体现出您对我的贡献之大。',
    );
    await flash.say_and_wait('所以，哪怕是杯水车薪也好。');
    await era.printAndWait(`${flash.sex}加重了自己的语气，作为对信念的强调。`);
    await flash.say_and_wait(
      '作为报答，我也想要去帮助您，我想要去实现您的梦想。',
    );
    era.printButton('「这就是之前问我梦想的原因吗？」', 1);
    await era.input();
    await flash.say_and_wait('是的。');
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(`荣进闪耀这份坚定的态度令 ${your_name} 陷入沉默。`);
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「我想通过不断取得荣誉的行为，进而让我的父母……以我为荣。」）',
    ]);
    await era.printAndWait(
      `${your_name} 又一次想起了一切的开始，那场选拔赛中，${flash.sex}对 ${your_name} 说的话。`,
    );
    await era.printAndWait(
      `起初，${your_name} 答应成为${flash.sex}的担当训练员，还是单纯因为受到${flash.sex}的主动委托。`,
    );
    await me.print_and_wait('（「会觉得很开心吧。」）');
    await me.print_and_wait('（「因为能继续看到你奔跑的身姿。」）');
    await era.printAndWait(
      `但慢慢的，在这个相处的过程中，${your_name} 又逐渐被${flash.sex}的特质所吸引。`,
    );
    await era.printAndWait(
      '无论是比赛开始前那份面对任何对手都毫无畏惧的勇气也好，还是比赛的过程中那份连千明代表都为之赞叹的求胜欲也好，或者比赛结束后那份无论什么结果都冷静应对，奋发图强的精神也好。',
    );
    await era.printAndWait('这种独属于荣进闪耀的精神颇具魅力。');
    await era.printAndWait(
      `因此，在从合宿场地回到特雷森学校的车上，当${flash.sex}问 ${your_name} 如果最终留在日本，${your_name} 会作何感想时，${your_name} 才会直言不讳地表述出自己的情感。`,
    );
    era.printButton('「我的梦想的话。」', 1);
    await era.input();
    await era.printAndWait('想到这里，答案已经很显而易见了。');
    await era.printAndWait(
      `${your_name} 觉得，${your_name} 也终于读懂了当时荣进闪耀眼神中那份深沉的波动所代表的含义。`,
    );
    era.printButton('「我想，看着你一直奔跑下去。」', 1);
    await era.input();
    await flash.say_and_wait('！！！');
    await era.printAndWait(
      `选手休息室内，本因再无牵挂的异国${flash.get_teen_sex_title()}听到 ${your_name} 的话瞪大双眼。`,
    );
    await flash.say_and_wait('…………');
    await flash.say_and_wait('呵……呵呵……');
    await era.printAndWait(`在沉默片刻之后，${flash.sex}突然放声欢笑。`);
    await flash.say_and_wait('呵呵呵呵——');
    await flash.say_and_wait('我知道了，如果这就是您的想法的话。');
    await era.printAndWait(
      `直到心头升起的情绪彻底发泄完毕，${flash.sex}才重新看向 ${your_name}。`,
    );
    await era.printAndWait('湛蓝色的瞳孔中，尽是温柔。');
    await flash.say_and_wait('那么……');
    await flash.say_and_wait('如您所愿，我的训练员。');
    new FlashEduMarks().finish = 1;
  } else {
    return await super_race_end(flash, me, callname, hook, extra_flag);
  }
};
