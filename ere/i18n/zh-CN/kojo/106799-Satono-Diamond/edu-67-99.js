/**
 * @file 里见光钻 - 育成
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '额外的自主训练';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 里见光钻对玩家的称呼
     * @param {PrintedSpan} call_68 里见光钻对北部玄驹的称呼
     */
    const f = async (daiya, kita, you, callname, call_68) => {
      await era.printAndWait('结束了一整天的训练后──');
      await daiya.say_and_wait([
        '辛苦了，',
        callname,
        '。今天也谢谢你的指导。',
      ]);
      await daiya.say_and_wait('……啊。');
      await era.printAndWait([
        you.get_colored_name(),
        '追着 ',
        daiya.get_colored_name(),
        ' 的视线看过去……看到了正在努力做训练的 ',
        kita.get_colored_name(),
        '。',
      ]);
      await kita.say_and_wait('呼、呼……！还不够还不够！我要再多跑一圈！');
      await daiya.say_and_wait(
        '……那个，不好意思。我还是决定要做额外训练了，可以吗？',
      );
      era.printButton('「还是不要太过勉强……」', 1);
      await era.input();
      await daiya.say_and_wait([
        '……其实我昨天才刚看过 ',
        call_68,
        ' 比赛的影片──',
      ]);
      await daiya.say_and_wait([
        call_68,
        ' 现在的表现真的变得越来越快，实力越来越坚强了……',
      ]);
      await daiya.say_and_wait(
        '虽然我承认是真的有点心急没错，但是……更多的是想要奔跑的冲动！',
      );
      await daiya.say_and_wait('有种斗志被燃起的感觉！所以……拜托了！');
      era.printButton('「那就来跑吧！」', 1);
      era.printButton('「这股斗志还是留着明天再用吧」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(['嘿嘿，不愧是 ', callname, '！']);
        await daiya.say_and_wait('谢谢！那我也去跑步了！');
        await daiya.say_and_wait(['──', call_68, '。我……不会输给你的！']);
        await era.printAndWait([
          '于是，',
          daiya.get_colored_name(),
          ' 就这样怀抱着对对手的斗志，完成了 ',
          daiya.sex,
          ' 的额外训练。',
        ]);
      } else {
        await daiya.say_and_wait(
          '留着明天再用吗……？唔唔，可是我没有自信自己一定忍得住……！',
        );
        era.printButton('「把斗志储蓄下来，最后再一次爆发吧」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……我明白了。那就这么说好了哦。明天一定要让我彻底训练……！',
        );
        await daiya.say_and_wait(
          '……对了！不然我们现在就回训练员室一起看比赛的影片吧！',
        );
        await daiya.say_and_wait(
          '这样的话，心里的那股冲动就会越来越高昂，明天一定就能非常地努力了！',
        );
        era.printButton('「那我们就一起看吧！」', 1);
        await era.input();
        await daiya.say_and_wait('嗯♪');
        await era.printAndWait([
          '于是，在 ',
          daiya.get_colored_name(),
          ' 热情的解说下，你们一起看完了以 ',
          kita.get_colored_name(),
          ' 为重点的比赛影片。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '保重身体！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (daiya, you, fail_again) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 把受伤的里见光钻带来保健室。',
      ]);
      await daiya.say_and_wait('训练员，谢谢你这么照顾我。');
      await daiya.say_and_wait('可是……我还是觉得这点伤势是可以继续训练的。');
      await daiya.say_and_wait(
        '伤势也已经做过紧急处理了，现在是不是可以做一点……训练了呢？',
      );
      era.printButton('「大意是很危险的哟」', 1);
      era.printButton('「不然就谨慎一点训练看看好了」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '可是我几乎都不觉得痛了呀。只要小心一点就不会有问题的……！',
        );
        era.printButton('「还是在伤势恶化之前打消念头吧」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……说得也是呢。轻伤也是有可能不小心变成重伤的。',
        );
        await daiya.say_and_wait('真抱歉……那我今天就先回去好好静养了。');
        await era.printAndWait(
          `里见光钻因为充满干劲，所以相对地也就对不能训练感到很失望，但${daiya.sex}还是乖乖地回宿舍休息了。`,
        );
      } else if (fail_again) {
        await daiya.say_and_wait('嗯！我想把今天的训练内容全都做完！');
        await era.printAndWait([
          you.get_colored_name(),
          ` 选择尊重里见光钻的想法，让${daiya.sex}继续训练，但──`,
        ]);
        await daiya.say_and_wait('……呼……呼……');
        era.printButton('「……果然还是会痛的吧？」', 1);
        await era.input();
        await daiya.say_and_wait('……唔！？');
        await daiya.say_and_wait(
          '……是的，其实还是会痛……很抱歉，是我想得太天真了……',
        );
        await era.printAndWait([
          '这次 ',
          you.get_colored_name(),
          ' 决定立刻中止训练，让里见光钻好好地休养。',
        ]);
      } else {
        await daiya.say_and_wait('……呼！这样就做完了！');
        era.printButton('「受伤的地方没事吗？」', 1);
        await era.input();
        await daiya.say_and_wait('没事！你看！');
        await daiya.say_and_wait(
          '看来做一些轻微的运动还是没问题的呢！呵呵，真是太好了！',
        );
        await era.printAndWait([
          '虽然 ',
          you.get_colored_name(),
          ` 很不放心，但${daiya.sex}看起来确实没有不适。可见伤势的确是非常轻微的。`,
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '严禁逞强！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (daiya, you, fail_again) => {
      await era.printAndWait([
        '里见光钻在训练中受伤了，所以 ',
        you.get_colored_name(),
        ` 赶紧带${daiya.sex}来到保健室。`,
      ]);
      await daiya.say_and_wait('好痛……！');
      await daiya.say_and_wait(
        '只是稍微动一下而已就……看来伤势可能比我想像的还要严重……',
      );
      era.printButton('「休息一阵子吧」', 1);
      await era.input();
      await daiya.say_and_wait(
        '可是……一直静养休息的话，感觉会离梦想越来越遥远的。',
      );
      await daiya.say_and_wait(
        '现在最恰当的选择或许是休息没有错，但是我……我想要克服这个难关，让自己有更大的进步……！',
      );
      await daiya.say_and_wait(
        '我一定会克服疼痛的问题给你看的……可不可以就让我继续做训练呢？',
      );
      era.printButton('「我不会让你勉强自己的」', 1);
      era.printButton('「……知道了，我就相信你吧」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '可是，在我休养的时候，比赛中的其他对手们都会更加进步──',
        );
        era.printButton('「你一定能追过她们的」', 1);
        await era.input();
        await daiya.say_and_wait('……我知道了。凡事都不能过于心急，对吧？');
        await daiya.say_and_wait(
          '虽然心情上会觉得很不甘心，但这份心情就等伤势复原后再用在训练上吧。',
        );
        await era.printAndWait('里见光钻在处理完伤势后，一脸遗憾地回宿舍了。');
      } else if (fail_again) {
        await daiya.say_and_wait('谢谢！那我们回到赛道上吧。');
        await daiya.say_and_wait('──没事的，就这点小伤而已……！', true);
        await daiya.say_and_wait('唔！？', true);
        await daiya.say_and_wait('…………！');
        era.printButton('「你没事吧！？」', 1);
        await era.input();
        await daiya.say_and_wait('──看来是我想得太天真了。真的很抱歉……');
        await era.printAndWait(
          `因为逞强的关系，反而让${daiya.sex}的伤势恶化，延长了复原所需要的时间。`,
        );
      } else {
        await daiya.say_and_wait('──这点程度的疼痛我还忍得住！', true);
        await daiya.say_and_wait(
          '再来就是小心不要造成太大的负担，一步一步……慢慢地去完成！',
          true,
        );
        await daiya.say_and_wait('……呀啊啊啊啊啊啊！');
        await daiya.say_and_wait(
          '呼、呼……！呵呵，我成功完成训练了……！我没有败给疼痛……！',
        );
        await era.printAndWait(
          '里见光钻用强烈的克己之心，在注意不给伤势造成负担的状况下，顺利完成了训练。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_g1: (() => {
    const title = '属于我的温暖';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
      await era.printAndWait(
        '距离里见光钻首次挑战的 G1 竞赛终于只剩下一天的时间。',
      );
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
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛获胜！';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
      await daiya.say_and_wait(
        '成功了！我成功了！你有看到我的表现吗？训练员！',
      );
      await daiya.say_and_wait(
        '我完全发挥了现有的所有实力……我觉得我跑出了最好的表现！',
      );
      era.printButton('「真的跑出了最棒的表现哟！」', 1);
      era.printButton('「保持这个感觉继续向前进！」', 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait('哇啊……！谢谢你！能听到训练员这么说，我……！');
        await daiya.say_and_wait(
          '呵呵……那我下一次一定要跑出更耀眼的表现！这是我和训练员之间的约定喔！',
        );
      } else {
        await daiya.say_and_wait('是！朝梦想直直前进……！');
        await daiya.say_and_wait(
          '呵呵，现在我有一种，好像伸手就能触及的感觉呢。',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
      await daiya.say_and_wait('上榜……总算是没有给里见家丢脸的成绩。');
      await daiya.say_and_wait('不过，距离获胜……还差了一步呢。');
      era.printButton('「已经是很棒的结果了」', 1);
      era.printButton('「把这次经验活用在下次比赛吧！」', 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait('呵呵，谢谢夸奖♪');
        await daiya.say_and_wait(
          '可是，我的梦想不只是这样而已。我要变得更强更强……！',
        );
      } else {
        await daiya.say_and_wait('嗯！我们一起同心协力，下次一定要赢！');
        await daiya.say_and_wait(
          '回学园之后就要开始作战会议了呢！一定要彻底找出我现在的弱点！',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '竞赛败北';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
      await daiya.say_and_wait('…………这就是我现在的实力……');
      await daiya.say_and_wait('……很抱歉。我辜负了你的期望。');
      await daiya.say_and_wait(
        '实力、步调的预测都失误……看来我还有很多课题要完成呢。',
      );
      era.printButton('「我们一起解决吧」', 1);
      era.printButton('「一起朝目标重新出发吧」', 2);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait('好的！就要再麻烦你了！训练员！');
        await daiya.say_and_wait(
          '一定要不停锻炼、不停锻炼……下一次一定要跑出最耀眼灿烂的表现！',
        );
      } else {
        await daiya.say_and_wait(
          '嗯嗯，这是当然的！我还没有丢失该实现的梦想呢。',
        );
        await daiya.say_and_wait('为了实现梦想……一定要再次精进自己！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '下次不会输了！';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
      await daiya.say_and_wait('……没能做到。没能跑赢。我又输了……');
      await daiya.say_and_wait(
        '我辜负了好多人的期望。父亲、母亲、里见家的所有人……还有训练员也是。',
      );
      await daiya.say_and_wait(
        '……我会抱持着从零开始的心态努力的。如果之前的努力都还不够，那我就要更努力、更努力……所以──',
      );
      era.printButton('「不用这么焦急」', 1);
      era.printButton('「一起两人三脚向前冲刺！」', 1);
      if ((await era.input()) === 1) {
        await daiya.say_and_wait(
          '没关系的！为了下次一定能跑赢，无论是什么样的训练，我都一定能完成的……！',
        );
        era.printButton('「那就先深呼吸吧」', 1);
        await era.input();
        await daiya.say_and_wait('是！');
        await daiya.say_and_wait('吸……吐……！吸……吐……');
        era.printButton('「……冷静下来了吗？」', 1);
        await era.input();
        await daiya.say_and_wait('……啊！是、是。');
        era.printButton('「不要逞强，继续往前迈进吧」', 1);
        await era.input();
        await daiya.say_and_wait('训练员……！……嗯！');
        await daiya.say_and_wait(
          '嗯！无论多少次，我都会重新爬起来的……！我想要和你一起努力！',
        );
      } else {
        await daiya.say_and_wait('那么……总之现在需要一条可以缠脚的布呢！');
        await daiya.say_and_wait('我现在就去找！');
        await era.printAndWait(
          '……虽然『两人三脚』不过就只是比喻而已，但似乎让她打起了精神。再继续一起努力吧──',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '迎向出道战';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, mcqueen, you) => {
      await era.printAndWait(
        `站在出道战的看台上，${you.name} 不由想起出道战已经近在眼前的某天──`,
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
        `『RKST评分总计五亿的出道战！！』目白麦昆交给 ${you.name} 的杂志上写着这样斗大的标题。`,
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
      await you.say_as_passer_by_and_wait('记者A', '喂，里见光钻出现了！');
      await daiya.say_and_wait('……今天好像来了很多记者呢。');
      await you.say_as_passer_by_and_wait(
        '记者B',
        '里见光钻小姐，请问方便接受采访吗？',
      );
      era.printButton('「我们接下来要去训练，所以……」', 1);
      await era.input();
      await daiya.say_and_wait('训练员，没关系的。短暂的采访是没问题的。');
      await you.say_as_passer_by_and_wait(
        '记者B',
        `谢谢你！出道战将会是场高分赛${daiya.uma_sex_title}们的对决，对此请发表你对这场比赛的抱负！`,
      );
      await daiya.say_and_wait('哎呀，原来是被如此称呼的呢。');
      await daiya.say_and_wait(
        '能受到瞩目是值得开心的事情。我会努力带给大家符合评价表现的出道战。',
      );
      await you.say_as_passer_by_and_wait('记者B', '请问你有感受到压力吗？');
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
        `反倒让${daiya.sex}担心 ${you.name} 了。既然${daiya.sex}本人丝毫不在意，那 ${you.name} 也就不需要过度担心。`,
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
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '黎明';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait('呼、呼、呼……');
      await daiya.say_and_wait('…………嗯！');
      await you.say_as_passer_by_and_wait(
        '观众A',
        '喔喔～里见光钻表现得很好嘛……！不愧是得到那么高评分的选手！',
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '她的安定感完全不是出道战级别的呢。感觉很有前途喔！',
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        '要是在G1也能跑赢就好了！！打破『里见家的魔咒』……！',
      );
      await daiya.say_and_wait('训练员！！');
      await daiya.say_and_wait('我终于顺利出道了呢！');
      era.printButton('「是啊」', 1);
      await era.input();
      await daiya.say_and_wait('跑完之后，才总算觉得有真实感了。');
      await daiya.say_and_wait(
        '比赛时听到大家的欢呼声……其他选手的施压、喘息。毛囊深处都能感受到的紧张感……',
      );
      await daiya.say_and_wait(
        '都是我从来没有感受过的氛围。这就是，真正的比赛呢……！',
      );
      await daiya.say_and_wait('麦昆和小北，她们也都是在这种氛围下跑步的……');
      await daiya.say_and_wait('我也总算踏上了跟她们一样的赛场……！');
      await era.printAndWait(
        `里见光钻表现得相当兴奋。这也代表这场出道战让${daiya.sex}有很深的感触吧。`,
      );
      await daiya.say_and_wait(
        '……我要用这双脚继续奔跑、跑赢比赛，再继续赢下去。一定要完成里见家的宿愿！',
      );
      await era.printAndWait(`你们跟着散场的人潮，从赛场慢慢走向车站。`);
      await you.say_as_passer_by_and_wait(
        '观众C',
        `那个叫里见光钻的赛${daiya.uma_sex_title}，${
          daiya.sex
        }跑步的样子真的好漂亮喔！就是那场五亿对决的！」`,
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        `${daiya.sex}的尾段加速感觉很厉害喔！」`,
      );
      await you.say_as_passer_by_and_wait(
        '观众C',
        '说不定不久后就会参加 G1 竞赛了吧。感觉日本德比也很有希望呢！」',
      );
      await you.say_as_passer_by_and_wait(
        `观众B`,
        `……嗯？是说──里见集团有出过跑赢G1的赛${daiya.uma_sex_title}吗……？`,
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `从来没有啊。以前还蛮多里见家的赛${daiya.uma_sex_title}参赛的，但从来没人赢过 G1。`,
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `所以才会在杂志上看到──『至今没有G1赛${daiya.uma_sex_title}的里见家魔咒』这样的标语……`,
      );
      await era.printAndWait(
        '观众C「是喔──还有这种传闻喔。所以是因为魔咒的关系才赢不了G1啰？」',
      );
      await era.printAndWait(
        `观众A「对啊。里见光钻是里见家久违出现的赛${daiya.uma_sex_title}，希望她能够跑赢G1呢。」`,
      );
      await era.printAndWait(
        `${you.name} 一边听着走在前面的人所说的话，一边偷偷看向里见光钻。`,
      );
      await daiya.say_and_wait('呵呵，我一定会破除魔咒的！');
      await era.printAndWait(
        `里见光钻露出开朗的微笑，对 ${you.name} 比出一个充满气势的加油手势。`,
      );
      await era.printAndWait(
        `${you.name} 想，心志坚强又坚定的${daiya.sex}，一定能消除这些传闻跟魔咒的吧。`,
      );
    };
    f.title = title;
    return f;
  })(),
};
