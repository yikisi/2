const era = require('#/era-electron');

const Edu67UntilOutStart = require('#/event/edu/edu-events-67-1/out-start');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {CharaTalk} daiya */
async function first_g1_event(daiya) {
  era.printButton('「衣服带了吗？」', 1);
  await era.input();
  await daiya.say_and_wait(
    '带了，已经装进包包里了。也没有忘记要再多带一双备用的鞋子。',
  );
  era.printButton('「蹄铁呢？」', 1);
  await era.input();
  await daiya.say_and_wait('当然也已经钉好了……训练员，你不要那么紧张嘛。');
  await era.printAndWait(`本想缓和${daiya.sex}的紧张，结果反倒被安抚了。`);
  await era.printAndWait('嗡嗡嗡嗡嗡……');
  await daiya.say_and_wait('哎呀，手机响了……是电话。我先接一下。');
  await daiya.say_and_wait('喂，父亲吗？嗯，我很有精神地正在做准备呢──');
  await era.printAndWait('……');
  await daiya.say_and_wait('讲到一半突然接电话真不好意思。');
  era.printButton('「是你的双亲打来为你加油吗？」', 1);
  await era.input();
  await daiya.say_and_wait(
    '是的……呵呵呵！父亲也跟训练员一样，一直担心我有没有遗漏什么东西。',
  );
  await daiya.say_and_wait(
    '每次到了比赛前，都是身边的人比我还要更紧张的感觉呢。',
  );
  await daiya.say_and_wait(
    '……我说『一定会将胜利带回来』，但他们却只希望我安全，不要受伤就好。',
  );
  era.printButton('「他们一定也是真心不希望你受伤的」', 1);
  await era.input();
  await daiya.say_and_wait(
    '是呀。父亲和母亲从来都没有要求我『要赢』。就只是以父母的身份很温柔地对待我。',
  );
  await daiya.say_and_wait('这样反而让我……更想在明天的比赛中跑赢。');
  await daiya.say_and_wait(
    `身为他们女儿的我成为『知名赛${daiya.uma_sex_title}』，把里见家一直梦寐以求的第一个荣耀献给他们。`,
  );
  await daiya.say_and_wait(
    `父亲和母亲无论多忙碌，也都不忘为赛${daiya.uma_sex_title}界的发展尽心尽力。`,
  );
  await daiya.say_and_wait('所以，我觉得他们的努力是值得获得『奖励』的♪');
  era.printButton('「一定要把最棒的奖励带给他们！」', 1);
  await era.input();
  await daiya.say_and_wait('嗯！里见家首次的G1胜利，我一定会达成的！');
}

/**
 * @param {CharaTalk} daiya
 * @param {CharaTalk} me
 */
async function sats_sho_event(daiya, me) {
  era.printButton('「听说明天会有暴风雨……」', 1);
  await era.input();
  await daiya.say_and_wait(
    '好像是这样呢。但请放心吧！我有做好面对极差路况的准备！',
  );
  await era.printAndWait(
    `里见光钻给了 ${me.name} 相当可靠的回答。保险起见，${me.name} 决定明天要提早从特雷森学园出发。`,
  );
  era.drawLine({ content: '隔天早上' });
  await era.printAndWait('雨并没有预期中的大，但确实吹着不间断的强风。');
  await era.printAndWait(
    `感觉电车很有可能因为强风而停驶。于是，${me.name} 决定搭乘出租车前往中山赛场。`,
  );
  await era.printAndWait(
    '然而，高速公路也受到天气的影响而拥塞。连到了预定抵达赛场的时间，也还尚未脱离高速公路──',
  );
  await era.printAndWait(
    '下交流道后的路况也依旧拥塞，再这样下去就要迟到了……！',
  );
  era.printButton('「只能下车用跑的去赛场了！」', 1);
  await era.input();
  await daiya.say_and_wait('好的！那我先出发了！');
  await daiya.say_and_wait('唔……！风好大……！');
  await era.printAndWait(
    '强风大到差点把里见光钻给吹倒。算是这个时期罕见的春季暴风雨。没有想到居然会因为天气而被困在半路上，并差点迟到──',
  );
  await daiya.say_and_wait(
    '罕见的春季暴风雨……塞车……偏偏在今天发生这么多不好的事情……',
    true,
  );
  await daiya.say_and_wait('……难道是…………因为魔咒？', true);
  await daiya.say_and_wait(
    '照这样下去，能不能参赛都是个问题……而这股慌张也会影响我的表现……！',
    true,
  );
  await daiya.say_and_wait(
    `我成为『知名赛${daiya.uma_sex_title}』的这条必经之路，难道魔咒正在阻止我前进吗……！？`,
    true,
  );
  await daiya.say_and_wait('……唔！那我是绝对不会认输的！！', true);
  await daiya.say_and_wait('喝啊啊啊啊！');
  await era.printAndWait(
    `里见光钻一边呐喊着，一边在赛${daiya.uma_sex_title}专用道路上狂奔。`,
  );
  era.printButton('「一定要赶上呀……！」', 1);
  await era.input();
  era.drawLine();
  await era.printAndWait(
    '抵达中山赛场的时候，已经是『皋月赏』开赛的前三十分钟。',
  );
  await era.printAndWait(
    `${me.name} 一边祈祷${daiya.sex}有顺利赶上──一边朝着亮相圈前进。`,
  );
  await era.printAndWait(`里见光钻${daiya.sex}人在……`);
  await daiya.say_and_wait('……唔！');
  era.printButton('（太好了……！）', 1);
  await era.input();
  await daiya.say_and_wait('……呼……');
  await daiya.say_and_wait('啊，训练员！');
  era.printButton('「你还好吧？」', 1);
  await era.input();
  await daiya.say_and_wait('嗯，总算是勉强赶上了！');
  await daiya.say_and_wait(
    '虽然步调被稍微打乱了……但我反而因为这样变得更冷静了的样子！',
  );
  await era.printAndWait(
    `里见光钻露出了微笑。${daiya.sex}精神层面的强韧又再次让 ${me.name} 感到惊讶。`,
  );
  await daiya.say_and_wait('经典三冠的第一冠……我绝对不能输！！');
  await era.printAndWait(
    `或许是和${daiya.sex}的干劲互相呼应吧。厚重的雨云在不知不觉间散去，耀眼的阳光回到了场上。`,
  );
}

module.exports = class extends Edu67UntilOutStart {
  async race_start(daiya, me, callname, hook, extra_flag) {
    const edu_marks = new DaiyaEduMarks1(),
      edu_weeks = era.get('cflag:67:育成回合计时');
    if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
      const mcqueen = get_chara_talk(13);
      await print_event_name('迎向出道战', daiya);
      await era.printAndWait(
        `站在出道战的看台上，${me.name} 不由想起出道战已经近在眼前的某天──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait('──打扰了。');
      era.printButton('「麦昆？」', 1);
      await era.input();
      await mcqueen.say_and_wait(
        '虽然可能有点多管闲事，但有件事情，我觉得还是要让你知道比较好。',
      );
      await mcqueen.say_and_wait('里见的出道战，似乎会受到更多的瞩目哦。');
      await era.printAndWait(
        `『RKST评分总计五亿的出道战！！』目白麦昆交给 ${me.name} 的杂志上写着这样斗大的标题。`,
      );
      await era.printAndWait('『Rookie Knowledge,Stats, and Talent』');
      await era.printAndWait(
        `所谓的RKST评分是每年七月时公布的针对出道前赛${daiya.uma_sex_title}的评价分数。`,
      );
      await era.printAndWait(
        `是由引退的训练员和赛${daiya.uma_sex_title}评论家等人士，针对赛${daiya.uma_sex_title}的能力进行分析，将综合评价数值化的评分。`,
      );
      await era.printAndWait(
        '里见光钻获得了两亿三千万分，是评分纪录史上压倒性的高分。因此，在出道前就倍受瞩目。',
      );
      await mcqueen.say_and_wait(
        `据说获得比里见更高评分的赛${daiya.uma_sex_title}也会参加同一场出道战。`,
      );
      await mcqueen.say_and_wait(
        `另外似乎也有其他获得高评分的赛${daiya.uma_sex_title}参赛，所以才会变成总计评分五亿分的出道战呢。`,
      );
      era.printButton('「所以才会说是五亿对决啊」', 1);
      await era.input();
      await mcqueen.say_and_wait(
        '虽然说无论受到多少人的注意，里见应该都是没有问题的……',
      );
      era.printButton('「谢谢你，我会多加注意的」', 1);
      await era.input();
      await era.printAndWait(
        '虽说里见光钻是个稳重的人，但毕竟是出道战。谨慎行事总是再好不过了。',
      );
      await mcqueen.say_and_wait(
        '嗯。毕竟受到这么多人的瞩目……自然就会衍生出各式各样的声音。',
      );
      await daiya.say_and_wait('训练员，今天也请多多指教了！');
      await say_by_passer_by_and_wait('记者A', '喂，里见光钻出现了！');
      await daiya.say_and_wait('……今天好像来了很多记者呢。');
      await say_by_passer_by_and_wait(
        '记者B',
        '里见光钻小姐，请问方便接受采访吗？',
      );
      era.printButton('「我们接下来要去训练，所以……」', 1);
      await era.input();
      await daiya.say_and_wait('训练员，没关系的。短暂的采访是没问题的。');
      await say_by_passer_by_and_wait(
        '记者B',
        `谢谢你！出道战将会是场高分赛${daiya.uma_sex_title}们的对决，对此请发表你对这场比赛的抱负！`,
      );
      await daiya.say_and_wait('哎呀，原来是被如此称呼的呢。');
      await daiya.say_and_wait(
        '能受到瞩目是值得开心的事情。我会努力带给大家符合评价表现的出道战。',
      );
      await say_by_passer_by_and_wait('记者B', '请问你有感受到压力吗？');
      await daiya.say_and_wait('这点我想大家都是一样的。');
      await era.printAndWait(
        `里见光钻面对采访，回答得无懈可击。看起来似乎没有特别在意高分赛${daiya.uma_sex_title}对决这件事情。`,
      );
      await daiya.say_and_wait('呼……抱歉久等了，采访结束了。');
      era.printButton('「你还好吗？」', 1);
      await era.input();
      await daiya.say_and_wait('嘿嘿，是觉得有点口渴了。');
      era.printButton('「要不要请学园帮忙阻挡记者采访？」', 1);
      await era.input();
      await era.printAndWait(
        '毕竟现在是准备出道战的重要时期。去拜托手纲小姐的话，应该会帮我们把采访控管在适当的范围内。',
      );
      await daiya.say_and_wait(
        `没关系，不用这样。毕竟接受采访也是赛${daiya.uma_sex_title}应尽的责任。`,
      );
      await daiya.say_and_wait(
        '我的出道战能带来话题跟热度的话，不如说是很值得开心的事情。',
      );
      await daiya.say_and_wait('我想，里见家的各位应该也都乐见这样的状况。');
      era.printButton('「这么多的瞩目会不会造成你的负担？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '呵呵，这我已经习惯了。毕竟我从小就是里见家中最受瞩目的存在了。',
      );
      await daiya.say_and_wait(
        '在一些派对当中也会被问到──目前的成绩如何？将来会就读特雷森学园吗？之类的问题。',
      );
      await daiya.say_and_wait(
        `和我同年的亲戚跟赛${daiya.uma_sex_title}们甚至埋怨过只有我一个人受到瞩目真不公平之类的话，觉得很羡慕我呢♪`,
      );
      await era.printAndWait(
        `${daiya.sex}看起来没有在逞强的样子。看来${daiya.sex}说习惯受到瞩目的事情是真的。`,
      );
      await daiya.say_and_wait('该不会……这样的状况让训练员觉得困扰了吗？');
      await daiya.say_and_wait(
        '如果觉得会影响到训练的话，拒绝采访也是可以的。',
      );
      era.printButton('「只要你不介意就没问题……！」', 1);
      await era.input();
      await era.printAndWait(
        `反倒让${daiya.sex}担心 ${me.name} 了。既然${daiya.sex}本人丝毫不在意，那 ${me.name} 也就不需要过度担心。`,
      );
      era.drawLine();
      await era.printAndWait('于是，到了出道战当天──');
      await daiya.say_and_wait('──终于要开始了。');
      era.printButton('「你好像很开心呢」', 1);
      await era.input();
      await daiya.say_and_wait('是的，一想到我的闪耀系列赛就要开始了……');
      await daiya.say_and_wait('我就兴奋得起鸡皮疙瘩呢……！');
      await era.printAndWait('里见光钻丝毫没有半点紧张，只有恰到好处的干劲。');
      era.printButton('「去吧！」', 1);
      await era.input();
      await daiya.say_and_wait('是！里见光钻要上场了！');
    } else if (extra_flag.race === race_enum.sats_sho) {
      await print_event_name('迎向皋月赏', daiya);
      if (edu_marks.run_g1 === 1) {
        await era.printAndWait(
          '明天就是期待已久的皋月赏了。然而天气预报的却不太乐观。',
        );
        await sats_sho_event(daiya, me);
      } else {
        await era.printAndWait(
          '明天是期待已久的里见光钻首场G1竞赛『皋月赏』的日子。',
        );
        await first_g1_event(daiya);
        await era.printAndWait(
          `你们对于在『皋月赏』获胜更加充满了干劲。很期待她能顺利赢得第一个G1胜利。`,
        );
        await era.printAndWait(
          '──然而，就像是老天爷要泼我们冷水一般，电视上的天气预报显示出令人担忧的资讯。',
        );
        await sats_sho_event(daiya, me);
      }
    } else if (extra_flag.race === race_enum.toky_yus) {
      await print_event_name('迎向日本德比', daiya);
      await era.printAndWait(
        `众多赛${daiya.uma_sex_title}梦想中的舞台──『日本德比』。面对明天就要正式开始的比赛，里见光钻看起来比平时又更有干劲。`,
      );
      await daiya.say_and_wait('服装跟蹄铁的部分我已经在昨天就都准备好了。');
      await daiya.say_and_wait('所以，今天可以专心投入在最后的训练上！');
      era.printButton('「话虽如此，但也只能做些微调而已」', 1);
      await era.input();
      await daiya.say_and_wait(
        '毕竟不能带着疲劳去比赛嘛。没问题，一切都遵照训练员的指示去做。',
      );
      await daiya.say_and_wait('──明天似乎会是好天气呢。');
      era.drawLine({
        content: `${race_infos[race_enum.toky_yus].name} 当天`,
      });
      await daiya.say_and_wait('时间差不多了。呵呵，今天一切都很顺利呢♪');
      await era.printAndWait(
        `里见光钻感觉心情不错。如${daiya.sex}所说，今天和『皋月赏』的时候不同，来赛场的途中也都很顺利。`,
      );
      await daiya.say_and_wait('最后再确认一次蹄铁──');
      await daiya.say_and_wait('呀啊！');
      era.printButton('「怎么了吗！？」', 1);
      await era.input();
      await daiya.say_and_wait('鞋子……');
      await daiya.say_and_wait(
        '鞋底好像破了……看起来是从钉蹄铁的位置整个裂开了……',
      );
      await daiya.say_and_wait('………………昨天检查的时候明明没问题的……');
      await era.printAndWait(
        `${me.name} 看了看鞋子的状况，应该是不能修复了。看来只能改成穿备用的鞋子了。`,
      );
      await era.printAndWait(
        '所幸，里见光钻事前就已经在备用的鞋子上装好了蹄铁。',
      );
      await daiya.say_and_wait('…………嗯，没问题！');
      era.printButton('「好险是在上场前就发现了呢！」', 1);
      await era.input();
      await daiya.say_and_wait('……是呀。');
      await daiya.say_and_wait('…………');
      era.printButton('「……光钻？」', 1);
      await era.input();
      await daiya.say_and_wait('又发生了平常不会发生的事情……');
      await daiya.say_and_wait([
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 和 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 都是这样，偏偏都在重要的经典三冠赛事时发生，为什么会这样……！',
      ]);
      await daiya.say_and_wait('仿佛就像是为了妨碍里见家达成宿愿一样。');
      await daiya.say_and_wait('……像是有什么东西想要扯我后腿的感觉……');
      await daiya.say_and_wait('……这就是里见家魔咒的强大……');
      era.printButton('「光钻，现在还是……」', 1);
      await era.input();
      await daiya.say_and_wait('但是呢！！我是不会输的！我会破除所有魔咒！！');
      await daiya.say_and_wait('我发誓一定会做到的！！所以……！');
      await daiya.say_and_wait([
        '我会跑赢 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 的！绝对会！！',
      ]);
    } else if (extra_flag.race === race_enum.kiku_sho) {
      const kita = get_chara_talk(68);
      await print_event_name('迎向菊花赏', daiya);
      await daiya.say_and_wait(
        '不管经历过多少次，这个氛围还是会让人觉得很刺激呢。',
      );
      era.printButton('「你紧张吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '不会，我只需要跑出自己的步调就好……当我这么想的时候，就会莫名地冷静下来。',
      );
      await daiya.say_and_wait(
        '经典三冠的最后一冠『菊花赏』。我的目标就要在今天告一段落了。',
      );
      await daiya.say_and_wait(
        '直到最后达成这个目标为止，我是绝对不会松懈的！',
      );
      await kita.say_and_wait('小钻的训练员！怎么样？小钻的状态还好吗？');
      era.printButton('「就跟平常一样喔」', 1);
      await era.input();
      await era.printAndWait(
        '这次似乎可以毫无意外地进行比赛。今天一整天，里见光钻也没提到过半次关于魔咒的事情。',
      );
      await era.printAndWait(
        `${me.name} 认为这对里见光钻来说，是一个相当好的预兆。`,
      );
      await kita.say_and_wait('啊，小钻出来了！');
      await say_by_passer_by_and_wait(
        '观众A',
        '喔，是里见光钻！看起来很有干劲的样子，感觉很不错！',
      );
      await say_by_passer_by_and_wait('观众B', [
        `照${daiya.sex}采访时说的话来看，${daiya.sex}好像觉得在`,
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 和 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 的时候，都没有完全发挥到真正的实力。',
      ]);
      await say_by_passer_by_and_wait(
        '观众B',
        `那我还真想看看${daiya.sex}最佳状态会是什么样子呢！`,
      );
      await kita.say_and_wait('……嗯，我也是……！');
      await kita.say_and_wait('小钻──！加油────！！');
      await kita.say_and_wait('啊，她听到了！');
      await kita.say_and_wait('…………唔！');
      await kita.say_and_wait(
        '……训练员。我觉得小钻今天一定能展现出最好的表现！',
      );
      await kita.say_and_wait(
        '因为，这是我第一次看到小钻露出这么专注的表情……！',
      );
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
      const kita = get_chara_talk(68);
      await print_event_name('迎向有马纪念', daiya);
      await era.printAndWait(
        `『有马纪念』。由粉丝票选决定参赛赛${daiya.uma_sex_title}的特别竞赛。`,
      );
      await era.printAndWait('里见光钻的得票数位居第二名。第一名是北部玄驹。');
      await era.printAndWait(
        `观众A「今天的赢家一定是北部玄驹吧！毕竟${daiya.sex}最后的难缠度是不同级别的！！」`,
      );
      await era.printAndWait(
        '观众B「每次到了最后都还能再提升速度！那可不是一般的尾段加速能追上的！」',
      );
      await era.printAndWait(
        `观众A「北部是我们的希望之星！希望${daiya.sex}可以好好加油！」`,
      );
      await daiya.say_and_wait('大家开口闭口都是在讨论小北的事情呢。');
      era.printButton('「光钻也是票数些微之差的第二名啊！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '哎呀，训练员真是的……你太帮自己人说话了。两万票哪里是些微之差呢。',
      );
      await daiya.say_and_wait(
        '不过，的确是得到了很多人投的票。这点我是真的觉得很开心又很光荣♪',
      );
      await daiya.say_and_wait(
        '……我也只是单纯觉得小北的粉丝声援得很热烈而已。',
      );
      await daiya.say_and_wait(
        '他们对小北的期望都不是『给我加油』，而是『希望她好好加油』这样喔。',
      );
      era.printButton('「你是不是……觉得很羡慕？」', 1);
      await era.input();
      await daiya.say_and_wait('嗯……说不羡慕的话就是骗人的了……');
      await daiya.say_and_wait('人性就是会忍不住去羡慕别人的嘛。');
      await daiya.say_and_wait(
        '况且，一想到自己要让小北的粉丝们失望了，多少还是会觉得有点过意不去嘛。',
      );
      await era.printAndWait(
        `说完，里见光钻露出了一个调皮的微笑。这等于是在宣示自己即将要取得胜利了。${daiya.sex}真的是既坚强又可靠。`,
      );
      await daiya.say_and_wait('时间差不多了。那我要上场了！');
      await era.printAndWait(
        '实况「以至宝命名的千金小姐闪亮登场了！粉丝票选第二名的里见光钻！」',
      );
      await era.printAndWait('观众「哇啊啊啊啊啊！」');
      await era.printAndWait(
        '实况「接下来是众所期盼的最后一位选手入场！粉丝票选第一名的北部玄驹！」',
      );
      await era.printAndWait('观众「哇啊啊啊啊啊啊啊啊啊啊！」');
      await daiya.say_and_wait('……小北，让你久等了！');
      await kita.say_and_wait('嗯！我一直都期待着这一天喔，小钻！');
      await daiya.say_and_wait(
        '谢谢你让我有这个机会。我会在今天的比赛中，证明自己已经追上小北了！',
      );
      await daiya.say_and_wait('不对，我会一口气超越小北的！');
      await kita.say_and_wait('我不会让出领先的位置的！！一决胜负吧，小钻！');
    } else if (extra_flag.race === race_enum.sank_hai) {
      const kita = get_chara_talk(68);
      await print_event_name('迎向大阪杯', daiya);
      await era.printAndWait(
        '北部玄驹也会出赛的『大阪杯』。里见光钻正默默地做准备。',
      );
      era.printButton('「你感觉非常冷静呢」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是呀，虽然很期待能跟小北一起比赛，但也不能因此而失去冷静。',
      );
      await daiya.say_and_wait(
        `要当一个『知名赛${daiya.uma_sex_title}』，我就必须清楚自己该以成为什么样的姿态为目标。`,
      );
      await daiya.say_and_wait(
        `该怎么做才会对赛${daiya.uma_sex_title}界有贡献？身为『知名赛${daiya.uma_sex_title}』的我该达成什么成就？我必须找出这些答案。`,
      );
      await daiya.say_and_wait(
        `像是小北，我觉得她会成为一个能带给观众欢笑跟热闹，并以此定位支撑赛${daiya.uma_sex_title}界的存在。`,
      );
      await daiya.say_and_wait(
        '所以，如果能一边参考小北，一边找到属于我能做的事情就太好了……',
      );
      era.printButton(
        `「另外，『知名赛${daiya.uma_sex_title}』也必须有强大的实力」`,
        1,
      );
      await era.input();
      await daiya.say_and_wait(
        `是这样没错呢。要是因为想太多而输掉比赛的话，就不能算是『知名赛${daiya.uma_sex_title}』了。`,
      );
      await daiya.say_and_wait(
        `我会以符合『知名赛${daiya.uma_sex_title}』的表现赢得比赛。这是我首先要做到的事情。`,
      );
      await era.printAndWait(
        '亮相圈里的观众全都在热烈讨论着里见光钻和北部玄驹的事情。',
      );
      await era.printAndWait(
        `观众A「北部玄驹对里见光钻……没想到还能再看到这个组合的对决！希望${daiya.sex}们都能好好加油呢！」`,
      );
      await era.printAndWait(
        `观众B「北部玄驹在去年『大阪杯』很可惜地拿到了第二名，这次${daiya.sex}应该很想赢吧。」`,
      );
      await era.printAndWait('观众C「啊！光钻出来了！」');
      await era.printAndWait(
        '观众B「里见──！今天也期待能看到你的好表现喔──！」',
      );
      await era.printAndWait('观众D「北部──！一定要为去年雪耻啊！！」');
      await kita.say_and_wait('是，一定会的！');
      era.printButton('（咦……？怎么好像……）', 1);
      await era.input();
      await era.printAndWait(
        `……觉得好像哪里不太一样。${me.name} 察觉到北部玄驹和平时的感觉不太一样。`,
      );
      await kita.say_and_wait('──小钻。那个啊，比赛开始前我有话想跟你说。');
      await daiya.say_and_wait('嗯……？小北怎么了吗？');
      await kita.say_and_wait('在古马级正统路线称霸是我的目标！');
      await kita.say_and_wait('所以这个『大阪杯』我绝对不能让给你！');
      await daiya.say_and_wait('…………唔！？');
      await kita.say_and_wait('我们都要好好表现喔，小钻！');
      await daiya.say_and_wait('……嗯……！');
      await era.printAndWait(
        `观众A「今天的北部玄驹很有威严感呢。真不愧是去年的年度代表赛${daiya.uma_sex_title}。」`,
      );
      await era.printAndWait(
        `……被${daiya.sex}的气势震慑住了。北部玄驹泰然自若的姿态甚至一度让总是冷静的里见光钻说不出话来。`,
      );
      await daiya.say_and_wait('我刚才有一瞬间……对小北感到敬畏……', true);
      await daiya.say_and_wait(
        '气势上先输了的话就赢不了了！！而我居然会……！',
        true,
      );
      await daiya.say_and_wait('……我不会输的！');
      await daiya.say_and_wait('我不会输、我不会输的！！');
      era.printButton(`「光钻，不能输给${kita.sex}！！」`, 1);
      await era.input();
      await daiya.say_and_wait('是！我一定会赢的！！');
    } else if (extra_flag.race === race_enum.tenn_spr) {
      const teio = get_chara_talk(3);
      const mcqueen = get_chara_talk(13);
      await print_event_name('迎向天皇赏（春）', daiya);
      await era.printAndWait(
        '『天皇赏（春）将是二强对决的局面！！』『北部玄驹VS里见光钻』',
      );
      await era.printAndWait(
        '『一起长大的儿时玩伴要争夺最强之名！究竟胜利女神会对谁露出微笑呢！？』',
      );
      await era.printAndWait(
        '──『天皇赏（春）』的相关报导全都是挂着『二强对决』的标题。',
      );
      await era.printAndWait(
        '观众A「二强对决，两个人完全不同类型这点很有意思呢～」',
      );
      await era.printAndWait(
        '观众A「出道前就被称为两亿三千万分的千金，评价和知名度都相当高的里见光钻和──」',
      );
      await era.printAndWait(
        `观众C「起初没什么知名度，却让观众渐渐对${daiya.sex}的努力和韧性产生共鸣，渐渐崭露头角的北部玄驹……」`,
      );
      await era.printAndWait(
        `观众A「而且${daiya.sex}们还是从小玩到大的好朋友。有一种命运的对决的感觉！」`,
      );
      await era.printAndWait(
        `观众C「但今天应该也是北部玄驹比较占优势吧。毕竟去年赢的人也是${daiya.sex}。」`,
      );
      await era.printAndWait(
        '戴眼镜的男性「『天皇赏（春）』有3200米，是距离最长的G1竞赛。淀的弯道又有着明显的高低差，不仅考验持久力，争抢跑道的能力也很关键。」',
      );
      await era.printAndWait('穿着帽T的男性「怎么突然这么说？」');
      await era.printAndWait(
        `戴眼镜的男性「北部玄驹有去年的参赛经验，这点让${daiya.sex}占了优势……怎么好像之前也有过这样的对话。」`,
      );
      await era.printAndWait(
        '穿着帽T的男性「……啊啊，那个啦！一样是『天皇赏（春）』，是目白麦昆对东海帝王的时候！」',
      );
      await era.printAndWait(
        '戴眼镜的男性「原来如此……的确就像那个时候一样……」',
      );
      await teio.say_and_wait(
        '哈，看来大家也觉得今天这场比赛跟我们当时的状况很像呢！',
      );
      await mcqueen.say_and_wait(
        '崇拜我和帝王的两个人要和我们一样在『天皇赏（春）』对决……',
      );
      await mcqueen.say_and_wait('真的是很奇妙的缘分呢。');
      await teio.say_and_wait(
        '她们毕竟都已经看过我们当时那场比赛了，希望她们能表现得比当时的我们更好！',
      );
      await mcqueen.say_and_wait('是啊，至少也要足以跟当时的我们匹敌才行。');
      await daiya.say_and_wait('二强对决……我很荣幸能成为这股热潮的一分子。');
      era.printButton('「原来对光钻来说是这样子的啊」', 1);
      await era.input();
      await daiya.say_and_wait(
        `是呀，这是过去的里见家一直无法做到的事。『以参赛选手的立场为赛${daiya.uma_sex_title}做出贡献』。`,
      );
      await daiya.say_and_wait('这都要感谢出道前就采访我的那些记者们呢。');
      era.printButton('「那也是因为你总是诚恳接受采访的关系」', 1);
      await era.input();
      await daiya.say_and_wait('呵呵呵♪也要感谢小北才行呢。');
      await daiya.say_and_wait(
        '因为这一路走来，小北一直为了要带给大家欢笑而努力的关系，我们今天才会受到这么多人的瞩目。',
      );
      await daiya.say_and_wait(
        `身为一个『知名赛${daiya.uma_sex_title}』该有的模样……我还是觉得只有透过跟小北一起比赛才能找到答案。`,
      );
      await daiya.say_and_wait(
        `为了成为『知名赛${daiya.uma_sex_title}』，我必须赢才行。`,
      );
      await daiya.say_and_wait(
        '虽然小北因为去年有参加过『天皇赏（春）』而感觉比较有优势，但这也更加大了我赢得这场比赛的意义。',
      );
      await daiya.say_and_wait(
        `我要跑赢这场比赛，成为让大家都认可实力的赛${daiya.uma_sex_title}！`,
      );
    } else if (extra_flag.race === race_enum.kyot_dai && edu_weeks >= 96) {
      await print_event_name('迎向京都大赏典', daiya);
      await era.printAndWait(
        '『京都大赏典』开始前。观众间弥漫着一股担忧的氛围。',
      );
      await era.printAndWait(
        `观众C「新闻报导上面说里见光钻的状态似乎很不好，不知道今天${daiya.sex}怎么样……」`,
      );
      await era.printAndWait(
        `观众A「如果连记者都觉得${daiya.sex}不对劲的话，那不就是很严重的意思吗……？」`,
      );
      await era.printAndWait('观众C「是啊，不知道发生了什么事情……」');
      await daiya.say_and_wait('呼……');
      era.printButton('「你还好吗？」', 1);
      await era.input();
      await daiya.say_and_wait('啊，嗯……只是今天免不得有点紧张……');
      await era.printAndWait(
        '里见光钻的状态经过调整后，是有逐渐在恢复的。但毕竟这是那件事之后的第一场比赛。',
      );
      await daiya.say_and_wait('……我今天应该没问题的。');
      await daiya.say_and_wait('因为我和小北一起跑步后就想起来了……');
      await daiya.say_and_wait('只需要盯着前方奔跑的感觉。');
      await daiya.say_and_wait('想要追上她，一心一意地奔跑的感觉。');
      await daiya.say_and_wait('我只是不小心搞错了自己奔跑的理由。');
      era.printButton('「奔跑的理由……？」', 1);
      await era.input();
      await daiya.say_and_wait(
        `是的，之前我一直觉得要跑得像『知名赛${daiya.uma_sex_title}』是我的责任。`,
      );
      await daiya.say_and_wait(
        '要跑得能够超越麦昆、甚至让大家觉得我可以进军国外……这是我原本的想法。',
      );
      await daiya.say_and_wait('但这其实是不对的。');
      await daiya.say_and_wait('──我想让大家从我的身上感受到可能性。');
      await daiya.say_and_wait(
        `想达成里见家的宿愿、想超越麦昆、想以『知名赛${daiya.uma_sex_title}』的身份为赛${daiya.uma_sex_title}界做出贡献。`,
      );
      await daiya.say_and_wait('这些都跟我想要追上小北的心情是一样的。');
      await daiya.say_and_wait('这些都是我自己的心愿。');
      await daiya.say_and_wait(
        '不是为了任何一个人，而是为了我自己的心愿而跑。',
      );
      await daiya.say_and_wait(
        '因为搞错了初衷，所以我才会迷失方向，忘记了自己该怎么朝目标前进。',
      );
      await daiya.say_and_wait(
        '其实我只需要盯着前方奔跑而已。顺从自己的心意去奔跑。',
      );
      await daiya.say_and_wait('顺从自己的心意奔跑是很快乐的事情。');
      await daiya.say_and_wait('跑步让我感到快乐，我重新找回了这个感觉。');
      era.printButton('「原来是这样……」', 1);
      await era.input();
      await era.printAndWait(
        `她这么说也的确没错。当初她自己就说过，背负家族宿愿也是${daiya.sex}自己的选择。`,
      );
      await era.printAndWait(`${daiya.sex}是朝着自己的梦想前进的。`);
      await daiya.say_and_wait(
        `所以，今天我只会将我想成为『知名赛${daiya.uma_sex_title}』的梦想，放在心中并前去比赛。`,
      );
      await daiya.say_and_wait('──跑出里见光钻的风格。');
    } else if (extra_flag.race === race_enum.takz_kin && edu_weeks >= 96) {
      await print_event_name('迎向宝冢纪念', daiya);
      const kita = get_chara_talk(68);
      await daiya.say_and_wait('……呼、呼……');
      era.printButton('「有觉得哪里痛或沉重的吗？」', 1);
      await era.input();
      await daiya.say_and_wait('……嗯，不会。');
      await daiya.say_and_wait('身体很轻盈，动作也没有迟钝的感觉。');
      era.printButton('「不要太勉强自己哟」', 1);
      await era.input();
      await daiya.say_and_wait('勉强容易受伤，对吧？');
      await daiya.say_and_wait(
        '跑完『天皇赏（春）』之后的疲劳感真的特别明显。这点我自己也切身体会到了。',
      );
      await era.printAndWait(
        '经过『天皇赏（春）』激战后的影响，里见光钻身体的疲劳感持续了好一阵子。',
      );
      await era.printAndWait(
        '所以因此降低了训练的强度，以恢复体力为优先，但似乎也没有因此让身体变得迟钝。',
      );
      await daiya.say_and_wait(
        '能让投票给我的大家如期看到我在赛场上的表现真是太好了。',
      );
      await daiya.say_and_wait('『宝冢纪念』，我要上场了。');
      await daiya.say_and_wait('小北，今天也要多指教啰。');
      await daiya.say_and_wait('……小北？');
      await kita.say_and_wait('咦？啊，小钻！抱歉抱歉，我刚刚没有听到你叫我。');
      await daiya.say_and_wait('我刚刚是说要你多指教……');
      await kita.say_and_wait('嗯！我是不会输的！！');
      await daiya.say_and_wait('…………？');
      await daiya.say_and_wait(
        '……小北她在『大阪杯』和『天皇赏（春）』的时候，还要更加地……',
        true,
      );
      await daiya.say_and_wait('希望只是我多想了……', true);
    } else if (extra_flag.race === race_enum.tenn_sho) {
      await print_event_name('迎向天皇赏（秋）', daiya);
      const kita = get_chara_talk(68);
      await kita.say_and_wait('──终于到这天了……『天皇赏（秋）』。');
      await daiya.say_and_wait('嗯……！终于要和麦昆一起……！');
      await daiya.say_and_wait('我崇拜的目白麦昆──', true);
      await daiya.say_and_wait(
        `身为目白家的赛${daiya.uma_sex_title}，完成了${
          daiya.sex
        }的义务的『知名赛${daiya.uma_sex_title}』。`,
        true,
      );
      await daiya.say_and_wait(
        `${daiya.sex}高贵又充满气度的模样让我憧憬，希望自己能变得和${daiya.sex}一样。`,
        true,
      );
      await daiya.say_and_wait(
        '加入特雷森学园后，光是可以近距离欣赏麦昆的跑姿，就已经让我感到非常开心了。',
        true,
      );
      await daiya.say_and_wait(
        '为了达成里见家的宿愿，一路一直追逐梦想……不知不觉来到了这一步。',
        true,
      );
      await daiya.say_and_wait('终于可以跟崇拜的人站上同一个赛场──', true);
      await daiya.say_and_wait(
        '……而今天，我将以对手的身份去挑战我崇拜的人！！',
        true,
      );
      await daiya.say_and_wait(
        '超越传说级最强长途跑者，我要让大家从我身上看到这个可能性！',
        true,
      );
      await era.printAndWait(
        '实况「接下来登场的是北部玄驹和里见光钻！两人一同入场！」',
      );
      await era.printAndWait('观众A「光钻──！加油────！！」');
      await era.printAndWait('观众B「把『天皇赏（秋）』也拿下吧，北部！！」');
      await era.printAndWait(
        `实况「好的，让大家久等了！！现场又有谁曾经预测到${daiya.sex}会参赛呢！？」`,
      );
      await era.printAndWait(
        `实况「曾经达成『天皇赏（春）』连霸成就的赛${daiya.uma_sex_title}，目白麦昆！！」`,
      );
      await say_by_passer_by_and_wait('观众', '喔喔喔喔喔喔喔喔！！');
      await era.printAndWait(
        '实况「请各位听听看现场的欢呼声！震撼了整座东京赛场啊！！」',
      );
      await era.printAndWait(
        '实况「大雨之中依旧有这么多的观众前来，为了目睹这场梦幻组合的比赛！」',
      );
      await daiya.say_and_wait('……麦昆果然很厉害呢。');
      await kita.say_and_wait('嗯……但我们也不能输给她！');
      await daiya.say_and_wait('是呀！如果是顺利走到今天的我们的话！');
      await daiya.say_and_wait('一定能赢过麦昆的！');
      await era.printAndWait('两人「第一名是我的！！第一名是我的！！」');
    } else if (extra_flag.race === race_enum.japa_cup && edu_weeks > 95) {
      await print_event_name('迎向日本杯', daiya);
      const kita = get_chara_talk(68);
      const teio = get_chara_talk(3);
      await era.printAndWait(
        '『日本杯』──里见光钻即将要挑战东海帝王宣布要参加的竞赛。',
      );
      await kita.say_and_wait('我没有想到连小钻也会参加这一场比赛呢。');
      await daiya.say_and_wait('为什么？帝王也是我想要超越的人呀！');
      await daiya.say_and_wait(
        '她可是麦昆最特别的对手呢。我当然也会想跟帝王一起比赛啰！',
      );
      await kita.say_and_wait(
        '呵呵，说得也是！因为小钻是和我一起亲眼见识过帝王有多厉害的人嘛！',
      );
      await daiya.say_and_wait('而且，我还想从帝王身上学习一件事。');
      await daiya.say_and_wait(
        `我想要亲眼看看帝王是如何呈现『知名赛${daiya.uma_sex_title}』该有的姿态。`,
      );
      await kita.say_and_wait(
        '嗯……虽然我不太懂，但总之小钻就是有想这么做的原因吧。',
      );
      await kita.say_and_wait('不过呢！因为帝王是我一直都崇拜的对象！');
      await kita.say_and_wait(
        '所以这场比赛的胜利是绝不会让给你的！能赢帝王的人是我！！',
      );
      await daiya.say_and_wait(
        `我要赢过小北、赢过帝王，成为『知名赛${daiya.uma_sex_title}』！！`,
      );
      await teio.say_and_wait(
        '呵呵，虽然你们两个都变得很强了，但是东海帝王大人可是更强的喔！',
      );
      await teio.say_and_wait('我会让你们见识我的实力！');
      await teio.say_and_wait('小北、小钻！你们尽管用全力来挑战吧！！');
      await era.printAndWait('两人「我不会输的！！」');
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks > 95) {
      await print_event_name('迎向有马纪念', daiya);
      const kita = get_chara_talk(68);
      await daiya.say_and_wait(
        `──里见家的梦想。培育大量『能够赢得G1竞赛的赛${daiya.uma_sex_title}』。`,
      );
      await daiya.say_and_wait(
        `我为了成为那样的『知名赛${daiya.uma_sex_title}』，从小就一直努力奔跑。`,
      );
      await daiya.say_and_wait(
        '我顺利在闪耀系列赛的G1竞赛取得胜利，今天要挑战的是──',
      );
      await daiya.say_and_wait(
        `『知名赛${daiya.uma_sex_title}』的前辈们。是我所崇拜的对象，同时是今天对手的两位。`,
      );
      await daiya.say_and_wait('麦昆和帝王。');
      await daiya.say_and_wait(
        '还有──自从相遇之后，我的身边就一直都有你的存在。',
      );
      await daiya.say_and_wait(
        '总是跑在我前面的人。就算我们跑的比赛不同、目标也不同。',
      );
      await daiya.say_and_wait('我们两个始终都在一起。');
      await kita.say_and_wait('──小钻！');
      await daiya.say_and_wait('嗯，小北！');
      await daiya.say_and_wait(
        '在加入特雷森学园之前，就一直梦想着可以跟崇拜的人站上同一个赛场……',
      );
      await daiya.say_and_wait(
        '因为一直跟小北互相竞争，才能够顺利地走到今天这一步。',
      );
      await daiya.say_and_wait('但我们之中能够获得胜利荣冠的只有一个人！');
      await daiya.say_and_wait('不管是小北！麦昆！还是帝王！我都不会输的！！');
      await daiya.say_and_wait('我要赢下比赛，实现里见家和我的梦想！！');
    } else if (
      Math.random() <
      (0.2 * era.get('base:67:体力')) / era.get('maxbase:67:体力')
    ) {
      await print_event_name('临阵抖擞', daiya);
      await era.printAndWait('叮咚♪');
      await daiya.say_and_wait(
        '呵呵，又收到帮我加油的消息了。从早上就一直响个不停呢。',
      );
      await daiya.say_and_wait(
        '家人、朋友，还有各种帮助过我的人……我需要鼓舞振奋的时候，大家都在我的身边。',
      );
      await daiya.say_and_wait(
        '为了不辜负大家对我的心意──这场比赛我一定要赢！',
      );
    } else if (
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      edu_marks.run_g1 !== 1
    ) {
      await print_event_name('属于我的温暖', daiya);
      await era.printAndWait(
        '距离里见光钻首次挑战的G1竞赛终于只剩下一天的时间。',
      );
      await first_g1_event(daiya);
    } else {
      return await super.race_start(daiya, me, callname, hook, extra_flag);
    }
  }
};
