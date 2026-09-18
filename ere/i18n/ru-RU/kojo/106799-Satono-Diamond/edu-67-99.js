/**
 * @file 里见光钻 - 育成
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

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
      return [ret];
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
  race_start_low_sta: (() => {
    const title = '临阵抖擞';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
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
  ws_after_begin: (() => {
    const title = '成就我的存在';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} kiku_sho
     */
    const f = async (daiya, kita, you, sats_sho, toky_yus, kiku_sho) => {
      await era.printAndWait(
        `出道战结束后，${you.name} 和里见光钻针对下一个目标进行讨论。`,
      );
      await era.printAndWait(
        `「要成为能赢得G1的知名赛${daiya.uma_sex_title}」考量到${
          daiya.sex
        }的这个目标，选择新马级的G1竞赛应该是比较适合的──`,
      );
      era.printButton('「关于下一场比赛你有什么想法吗？」', 1);
      await era.input();
      await daiya.say_and_wait('我想要挑战经典三冠。');
      era.printButton('「不选择新马级的G1竞赛吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '在G1取胜当然也是我的目标，但那不过是一个过程而已。',
      );
      await daiya.say_and_wait(
        `里见家所期望的『知名赛${daiya.uma_sex_title}』，那是足以支撑赛${daiya.uma_sex_title}界发展的赛${daiya.uma_sex_title}。`,
      );
      await daiya.say_and_wait(
        `你也知道，里见家为了在赛${daiya.uma_sex_title}界有所贡献，长年专心致力于协助营运和各种慈善活动。`,
      );
      await daiya.say_and_wait(
        `培育大量『能够赢得G1竞赛的知名赛${daiya.uma_sex_title}』，这点也是能够支撑赛${daiya.uma_sex_title}界的贡献之一。`,
      );
      await daiya.say_and_wait(
        `我的目标是成为一个从内部支持赛${daiya.uma_sex_title}界，以及赛${daiya.uma_sex_title}竞赛文化的存在。`,
      );
      await daiya.say_and_wait(
        `这样的话，我想我就必须走上最正统的道路。如果我的参赛能让经典三冠更加热闹的话，那也算是对赛${daiya.uma_sex_title}界的一种贡献了吧。`,
      );
      await daiya.say_and_wait([
        '如果可以的话，我希望能以万全的状态挑战 ',
        sats_sho,
        '。',
      ]);
      era.printButton('「下一个目标是『皋月赏』？」', 1);
      await era.input();
      await era.printAndWait(
        '如果要调整到万全的状态，的确就不该以新马级的竞赛为优先考量，把目标定为「皋月赏」更为合适。',
      );
      await daiya.say_and_wait('是的。你觉得怎么样呢？');
      era.printButton('「我知道了」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 没有反对的理由。若能在经典三冠取得胜利，那在G1取胜也是必然的。是说──`,
      );
      await daiya.say_and_wait('……怎么了吗？怎么这样盯着我的脸看。');
      era.printButton('「我只是觉得，你总是这么坚定」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是说对目标吗？因为那就是我来到这世上的理由。这点是不用怀疑的。',
      );
      await daiya.say_and_wait(
        `……这么说起来，我好像还没跟你说过，我和父母为什么会这么执着于知名赛${daiya.uma_sex_title}吧。`,
      );
      await daiya.say_and_wait(
        `就像我刚才所说的，里见家虽然一直都对赛${daiya.uma_sex_title}界的发展抱有热情，至今却从未有培育出知名赛${daiya.uma_sex_title}的经验。`,
      );
      await daiya.say_and_wait(
        `里见家过去的赛${daiya.uma_sex_title}当中，没有一位是曾经在G1竞赛中赢得胜利过的。`,
      );
      await daiya.say_and_wait('久而久之，就被称作是『里见家的魔咒』了。');
      await daiya.say_and_wait(
        `再加上，曾经很长一段时间都只生男生，家族一直没有新的赛${daiya.uma_sex_title}诞生……`,
      );
      await daiya.say_and_wait(
        `甚至让里见家一度认为，生不出赛${daiya.uma_sex_title}也都是因为魔咒的关系。`,
      );
      await daiya.say_and_wait(
        `而我就是破除了这个魔咒所诞生的赛${daiya.uma_sex_title}──`,
      );
      await daiya.say_and_wait('为了实现里见家梦想而生的，就是我。');
      await daiya.say_and_wait(
        '加上我的父母是里见集团的核心人物，从小我就受到非常多的支持跟协助。',
      );
      await daiya.say_and_wait('因为里见家所有人的期望，才有现在的我。');
      await daiya.say_and_wait('──这也等于是我的精神支柱！');
      await daiya.say_and_wait(
        '所以我想要回应里见家的期望。这就是我的梦想！绝对不会有动摇的时候！',
      );
      await daiya.say_and_wait(
        `里见家的赛${daiya.uma_sex_title}赢不了G1的魔咒，如果是我的话就能将之破除──`,
      );
      await daiya.say_and_wait('我要赢得经典三冠，来证明这件事情！');
      era.printButton('「知道了，那我们就以经典三冠为目标吧」', 1);
      await era.input();
      await daiya.say_and_wait('谢谢你！那我们的第一战就是『皋月赏』了呢。');
      await era.printAndWait([
        '决定要挑战经典三冠的话，就必须做好准备面对比 ',
        sats_sho,
        ' 距离更长的 ',
        toky_yus,
        ' 和 ',
        kiku_sho,
        '。',
      ]);
      await era.printAndWait([
        `现在开始的话，就能有足够的时间仔细准备。你们就一边思考着更以后的目标，一边为明年的 `,
        sats_sho,
        ' 做好准备吧。',
      ]);
      era.drawLine();
      await daiya.say_and_wait('──做完热身运动了。第一个要做的训练项目是……');
      await kita.say_and_wait('啊────！！小钻小钻！');
      await daiya.say_and_wait('哇哇！小北怎么了吗？怎么这么慌慌张张的……');
      await kita.say_and_wait('跟你说喔，我看了喔！我看了小钻的出道战喔！！');
      await kita.say_and_wait(
        '虽然没办法到现场去看，但我看了比赛影片喔！我真的是看得超～～～级激动的！',
      );
      await kita.say_and_wait(
        '我是跟大家一起用宿舍的大电视看的！我还忍不住对着电视喊『小钻加油──！』了呢。',
      );
      await kita.say_and_wait('因为喊得太大声，还被大家骂了一顿。');
      await kita.say_and_wait('但小钻的那场比赛真的精彩到我手汗直流喔！');
      await daiya.say_and_wait(
        '呵呵，听起来就像小北会做的事。谢谢你帮我加油！',
      );
      await kita.say_and_wait(
        '有一种……跟自己跑出道战时不一样的喜悦。看得我内心雀跃不已呢！',
      );
      await kita.say_and_wait(
        '小钻在比赛时的表情，跟在学园里跑模拟赛和并跑练习的时候完全不同……',
      );
      await kita.say_and_wait(
        '当时我才有一种，对啊，小钻真的来到跟我一样的地方了……的感觉。',
      );
      await kita.say_and_wait('……小钻，恭喜你顺利出道了！');
      await daiya.say_and_wait('嗯，让你久等了呢……小北！');
      await kita.say_and_wait(
        '嘿嘿，一想到小钻要开始追上我的脚步，我也要更努力才行了！',
      );
      await kita.say_and_wait([
        '虽然我错过了 ',
        sats_sho,
        ' 和 ',
        toky_yus,
        '，但 ',
        kiku_sho,
        ' 我一定会赢的！！',
      ]);
      await kita.say_and_wait('身为小钻的姐姐，我一定要先在G1拿下胜利才行！');
      await daiya.say_and_wait('我的下一个目标也是经典三冠喔。');
      await kita.say_and_wait('咦！？是喔！？');
      await daiya.say_and_wait([
        '嗯，所以小北在 ',
        kiku_sho,
        ' 的表现……请让我好好参考一番吧。',
      ]);
      await kita.say_and_wait(
        '唔唔～！那我就更不能输了！绝对不能变成不好的范本！',
      );
      await kita.say_and_wait('那我要先回去训练啰！拜拜啰，小钻！');
      await daiya.say_and_wait(
        '我也会努力跑好自己的比赛！你再多等我一下下吧！',
      );
      await kita.say_and_wait('收到──！那我们都要加油喔！');
      await era.printAndWait(
        '北部玄驹像一阵风般快速地离开。是一个对谈中就能带给别人活力的神奇女孩。',
      );
      era.printButton('「我记得……你们曾经约好要一起跑步的吧」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是的，小时候就约好的。我们约好了要一直一起跑步。',
      );
      await daiya.say_and_wait(
        '小北是我遇过的同年龄的人当中，第一个比我『强大』的人。',
      );
      await daiya.say_and_wait(
        '我们后来就变成了好朋友……小北她带着没有接触过外面世界的我去了好多好多的地方。',
      );
      await daiya.say_and_wait(
        '我总是追着跑在我前面的小北一直跑，一直、一直追着她的脚步……',
      );
      await daiya.say_and_wait('想要追上她、想要超越她，从小就一直这么想。');
      await daiya.say_and_wait(
        '小北不仅是我的好朋友，也是我一直想要战胜的目标。',
      );
      await daiya.say_and_wait(
        '而且，小北她真的很了不起喔。她具备了我所没有的韧性……该说是超强意志力？',
      );
      era.printButton('「我想我大概能明白你的意思……！」', 1);
      await era.input();
      await daiya.say_and_wait([
        '呵呵呵，是吧？虽然 ',
        sats_sho,
        ' 和 ',
        toky_yus,
        ` ${kita.sex}都很可惜地跑输了……`,
      ]);
      await daiya.say_and_wait(
        '但小北是绝对不会放弃的个性。她接下来的比赛才是关键呢！',
      );
      await daiya.say_and_wait(
        '所以我也要加紧脚步才行。一定要在『皋月赏』赢得胜利！',
      );
      await era.printAndWait(
        `想要战胜的目标──北部玄驹的存在促使里见光钻更加进步──听完这些话后，${you.name} 更加深深相信是这样。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_39: (() => {
    const title = '现在还太遥远';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} dictus 生野狄杜斯
     * @param {CharaTalk} pama 目白善信
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} sats_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (daiya, nature, dictus, pama, you, sats_sho, toky_yus) => {
      await era.printAndWait(
        `今天 ${you.name} 和里见光钻一起，来观战北部玄驹即将出赛的「菊花赏』。`,
      );
      await daiya.say_and_wait('啊，小北她们出来了！');
      await daiya.say_and_wait('咦……？小北好像没什么精神的样子……？');
      await daiya.say_and_wait('是因为紧张的关系吗……？');
      await nature.print_and_wait(
        '？？？「……应该是因为那个人没有参赛的关系吧。」',
      );
      await era.printAndWait(
        `优秀素质突然从人群中出现。据说${daiya.sex}是里见光钻刚入学时，为${daiya.sex}举办迎新会的其中一个前辈。`,
      );
      await daiya.say_and_wait([
        '啊……！一定是的，跑赢了 ',
        sats_sho,
        ' 和 ',
        toky_yus,
        ' 的那个人……',
      ]);
      await nature.say_and_wait(
        `没错，${nature.sex}今天没有参赛。毕竟北部可是为了在『菊花赏』赢过她而特别努力至今的呢。`,
      );
      await nature.say_and_wait(
        '这样一定会觉得很提不起劲……而且你看，会场中还弥漫着一股主角缺席的氛围。',
      );
      await daiya.say_and_wait('主角缺席什么的……');
      await daiya.say_and_wait('……唔！');
      await daiya.say_and_wait('小北──！！');
      await daiya.say_and_wait('啊……！');
      await daiya.say_and_wait(
        '小北现在看起来很专注呢……看来我们的担心是多余的喔！',
      );
      await daiya.say_and_wait(
        `${daiya.sex}一定会展现出让大家觉得她才是今天主角的表现！`,
      );
      await era.printAndWait(
        '实况「这是场祭典！淀的祭典！北部的祭典开始了！称霸『菊花赏』的是北部玄驹──！」',
      );
      await daiya.say_and_wait('好厉害……！真不愧是小北！！');
      await nature.say_and_wait('……天啊，原来北部也是拥有主角光环的人啊……');
      await daiya.say_and_wait(
        '不过……小北在最后争抢跑道的时候，似乎有点陷入苦战的感觉呢……',
      );
      await daiya.say_and_wait(
        '……若换作是我，因为要用尾段加速拼胜负，为了避免被困在内侧，会在第四弯道的时候绕去外侧，然后……',
      );
      await nature.say_and_wait('…………不是吧？哇～这边这位也是耀眼得不得了啊～');
      await era.printAndWait('然后，观战完『菊花赏』后的隔天──');
      era.printButton('「今天的训练项目到此结束！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '训练员，我还可以继续！刚好我也想加强自己的持久力……就拜托你帮我增加额外训练了！！',
      );
      era.printButton('「现在还不是加强持久力的阶段」', 1);
      await era.input();
      await daiya.say_and_wait('那不然做坡道冲刺的训练怎么样呢！？');
      await era.printAndWait(
        `里见光钻相当积极地这么说道。然而，${you.name} 现在不打算让还在新马级的${daiya.sex}做负担较大的训练。`,
      );
      await era.printAndWait(
        `于是 ${you.name} 向${daiya.sex}说明，在身体成长完全前承受太大负担是可能受伤的。`,
      );
      await daiya.say_and_wait(
        '啊……这么说也是。抱歉……可能是因为看了小北在『菊花赏』的表现，就觉得自己也应该要更加努力了……',
      );
      await era.printAndWait(
        `看来${daiya.sex}似乎是受到了昨天比赛的刺激。现在充满了干劲。`,
      );
      await era.printAndWait(
        `既然如此，在不造成身体负担的状况下，让${daiya.sex}好好地释放能量的话──`,
      );
      era.printButton('「要不要做破除学园魔咒的训练呢？」', 1);
      await era.input();
      await daiya.say_and_wait('我要做！！');
      await daiya.say_and_wait('那我们立刻出发吧！你说的魔咒在哪里呢！？');
      await era.printAndWait(`${daiya.sex}对 ${you.name} 的提议非常感兴趣。`);
      await daiya.say_and_wait('开始吧，第一个魔咒是什么呢！？');
      era.drawLine();
      await era.printAndWait(
        `学园魔咒其一『在顶楼玩翁仔标，赢了的人会在下楼时滑倒』。在 ${you.name} 赶紧拿出翁仔标的同时──`,
      );
      await pama.print_and_wait('？？？「咦？这不是里见和训练员嘛！」');
      await pama.say_and_wait(
        '干嘛干嘛？要玩翁仔标的话也算上我吧！我刚好正觉得无聊呢──！',
      );
      await era.printAndWait(
        `向你们搭话的人是目白善信。生野狄杜斯和优秀素质也在一旁。`,
      );
      await daiya.say_and_wait(
        '你愿意一起玩的话，当然好呀！其实呢，我们现在正在做破除魔咒的训练喔。',
      );
      await nature.say_and_wait('……啊？破除魔咒的训练？什么意思啊？');
      await pama.say_and_wait('原来如此，是这么一回事啊。那我们也来帮忙吧！');
      await dictus.say_and_wait(
        '嗯，是啊。说到学园的魔咒，虽然不多，但我也知道大概十个左右的魔咒。',
      );
      await dictus.say_and_wait(
        '现在这里的魔咒是『在顶楼玩翁仔标，赢了的人会在下楼时滑倒』对吧。',
      );
      await dictus.say_and_wait(
        '只要里见玩赢了翁仔标，又在下楼的时候没有滑倒的话，就应该算是破除魔咒了。',
      );
      await pama.say_and_wait('这么一说，素质你很会玩翁仔标对吧！');
      await nature.say_and_wait(
        '也没有很会玩啦……只是比较常玩而已。那么，里见很会玩翁仔标吗？',
      );
      await daiya.say_and_wait('虽然我没什么经验，但我会努力的！');
      await pama.say_and_wait('……这样看来，光是要玩赢素质可能就不是很容易了。');
      await daiya.say_and_wait('──到了！');
      await pama.say_and_wait('喔喔～！下楼梯完全都没有滑倒呢！');
      await daiya.say_and_wait('嘿嘿！第一个魔咒被我破除了！');
      era.drawLine();
      await dictus.say_and_wait(
        '贩卖部的魔咒『买到最后一瓶果汁的人会倒楣一整天』。',
      );
      await daiya.say_and_wait('啊，这刚好是最后一瓶呢。');
      await dictus.say_and_wait(
        '要判断运气好坏……就让我跟里见一起抽签看结果吧。',
      );
      await nature.say_and_wait(
        '──生野抽到四奖，里见抽到一等奖。哎呀──运气真是好耶。',
      );
      await daiya.say_and_wait('嘿嘿！第二个魔咒被我破除了！成功了～！！');
      era.drawLine();
      await daiya.say_and_wait(
        '──这样就是破除第十个魔咒了！成功连续破除十个魔咒了！！',
      );
      await pama.say_and_wait(
        '竟然可以破除十个魔咒。里见真是太厉害了……令人佩服。',
      );
      await daiya.say_and_wait('呵呵，过奖了。');
      await pama.say_and_wait(
        '才没有，不管是魔咒还是家族的梦想，从来都不逃避且认真面对的里见是真的很棒。',
      );
      await pama.say_and_wait('就这一点来看的话，你跟麦昆有点像呢。');
      await daiya.say_and_wait('真的吗！？我好开心喔！');
      await daiya.say_and_wait('我……很崇拜麦昆。');
      await daiya.say_and_wait(
        '自律地朝着目标迈进，无论面对多庞大的压力也不被动摇，凛然且坚定的姿态是我的目标。',
      );
      await daiya.say_and_wait(
        '就像麦昆背负并完成目白家的使命那样，我也想要实现里见家的宿愿。',
      );
      await pama.say_and_wait(
        '呵呵，麦昆对为了家族的梦想而努力的里见也总是很赞赏喔。',
      );
      await daiya.say_and_wait(
        '我还差得远呢。到现在也还没创下特别厉害的成绩。',
      );
      await nature.say_and_wait(
        `……感觉……拥有主角光环的赛${daiya.uma_sex_title}其实好像也不是那么轻松的样子呢……`,
      );
      await pama.say_and_wait(
        '我们也会帮你加油的。里见你要加油喔！千万不能认输！',
      );
      await daiya.say_and_wait('好的！谢谢！');
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年抱负';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 里见光钻对玩家的称呼
     * @param {CharaTalk} callname_68 北部玄驹对玩家的称呼
     * @param {CharaTalk} k_call_d 北部玄驹对里见光钻的称呼
     */
    const f = async (daiya, kita, you, callname, callname_68, k_call_d) => {
      await daiya.say_and_wait([callname, '！']);
      if (era.get('cflag:68:招募状态') === recruit_flags.yes) {
        await kita.say_and_wait([k_call_d, ' 的训练员！']);
      } else {
        await kita.say_and_wait([callname_68, '！']);
      }
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「新年参拜，到时还请多多指教！」',
      ]);
      await era.printAndWait(
        `这是来自于两人充满热情的，今年的第一个请求。为了许下新年愿望，你们三人一同前往神社。`,
      );
      await daiya.say_and_wait('嗯～～我要许什么愿望好呢。');
      era.printButton('「难道不是在经典三冠获得胜利吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '那是我自己要做到的事情。不应该来求神明帮我实现。',
      );
      era.printButton('「破除魔咒呢？」', 1);
      await era.input();
      await daiya.say_and_wait('我会凭自己的力量战胜魔咒的！');
      await daiya.say_and_wait(
        '……每次都是像这样，到了要跟神明许愿的时候都不知道该求什么，每年都会烦恼很久……',
      );
      await era.printAndWait(
        `于是 ${you.name} 向${daiya.sex}提议，向神明宣示『今年的抱负』。`,
      );
      await daiya.say_and_wait(
        '这是个好提议呢！既然都跟神明宣示了，就绝对没有不做到的道理了！',
      );
      await daiya.say_and_wait('也就是必胜祈愿，不对，是必胜使命！');
      await era.printAndWait(
        `……看来${daiya.sex}势必是要向神明立下一个非常沉重的誓言了吧。`,
      );
      await daiya.say_and_wait(
        '今年的抱负……只是跑赢经典三冠的话，这也太过理所当然了。',
      );
      await daiya.say_and_wait(
        `身为里见家的赛${daiya.uma_sex_title}，一个知名赛${daiya.uma_sex_title}应该要有怎样的表现……`,
      );
      await daiya.say_and_wait('我想要成为的模样──', true);
      await daiya.say_and_wait('我应该要特别注重的事情……', true);
      await daiya.say_and_wait('我要坚定自信地跑出能够自豪的表现。');
      await daiya.say_and_wait(
        '就像麦昆一样充满尊严与荣耀。我要展现里见家代表的气度，让所有人看见。',
      );
      era.printButton('「这很像你的作风，我觉得很好」', 1);
      await era.input();
      await era.printAndWait(
        `跑出如同钻石般尊贵气度的表现。正因为是从小就接受一流教育的${daiya.sex}才会有的抱负。`,
      );
      await daiya.say_and_wait(
        '小北，你看起来已经决定好了呢。那我们就一起跟神明许愿吧。',
      );
      await kita.say_and_wait('嗯……！');
      await kita.say_and_wait(
        '『春季资深三冠』……！我一定要好好表现，让更多的人为我加油！然后带给大家笑容！',
      );
      await daiya.say_and_wait(
        `我会跑赢『经典三冠』！身为里见家的赛${daiya.uma_sex_title}，我发誓会带给大家非常耀眼的表现！`,
      );
      await era.printAndWait(
        `虽然${daiya.couple_title}的目标赛事不同，但彼此眼神中的光芒却是一样的──`,
      );
      await era.printAndWait(
        `在走到分岔路前都要并肩前进的态度，让 ${you.name} 深刻感受到${daiya.couple_title}从小到大的好交情。`,
      );
      await kita.say_and_wait(
        '嘿嘿！我现在也慢慢地越来越受到瞩目了喔！所以我要为了得到更多人支持，更努力表现！',
      );
      await daiya.say_and_wait(
        '哎呀，我可是也要不负钻石之名，跑出让大家都为之倾倒的表现呢。',
      );
      await kita.say_and_wait(
        '唔……！我会比你先在『春季资深三冠』迷倒大家好不好！',
      );
      await daiya.say_and_wait(
        '唔……等到我的『经典三冠』的时候，大家的注意力就会转到我身上了！',
      );
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「唔唔～～～赢的人会是我！！唔唔～～～赢的人会是我啦！！」',
      ]);
      await kita.say_and_wait('那就用新年对战来一较高下吧！');
      era.printButton('「你们两个都冷静一点……！」', 1);
      await era.input();
      await daiya.say_and_wait('训练员不用担心。新年对战是我们每年的惯例。');
      await daiya.say_and_wait('用来一较高下是最适合不过的了！');
      await era.printAndWait(
        '两人都越来越激动，完全没有要停止对抗的意思。算了，既然是每年的惯例，应该不危险吧……',
      );
      await daiya.say_and_wait('对战的内容就由训练员来决定好了！');
      await kita.say_and_wait(
        '麻烦了！请一定要想一个能让我们全力决胜负的事情！',
      );
      await era.printAndWait(
        `能让${daiya.couple_title}两个都拿出全力又符合新年气氛的对决……`,
      );
      era.printButton('「当长距离接力赛的啦啦队」（耐力+20）', 1);
      era.printButton('「在撒年糕仪式捡年糕」（体力+200）', 2);
      era.printButton('「放风筝」（技能点数+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await kita.say_and_wait(
            `说的是『新春赛${daiya.uma_sex_title}长距离接力赛』吧！现在这个时间的话……就快要经过这附近了！`,
          );
          await daiya.say_and_wait(
            '比看谁更会加油是吧！那就交给训练员当裁判了！',
          );
          era.printButton('「好！」', 1);
          await era.input();
          await daiya.say_and_wait('啊，看到领先集团了！');
          await kita.say_and_wait(
            '加油啊────！！后面的人要追上来了！现在是关键时刻啊！',
          );
          await daiya.say_and_wait(
            '可以的，一定可以追上的！！没错，就是这样！保持这个步调！',
          );
          await era.printAndWait(
            `领先集团的赛${daiya.uma_sex_title}们以飞快的速度跑过我们的面前。`,
          );
          await kita.say_and_wait('好，赶去下一个加油地点吧！');
          await daiya.say_and_wait('接下来是上山路！');
          era.printButton('「……什么！？」', 1);
          await era.input();
          await kita.say_and_wait(
            '上坡的时候大家都一样辛苦！一定要撑住！不要输啊！！',
          );
          await daiya.say_and_wait(
            '现在最重要的是忍耐！一定不可以逞强，要维持住自己的步调！！',
          );
          await daiya.say_and_wait('移动去下一个地点吧！');
          era.printButton('「等等！？是要跟到什么时候……！」', 1);
          await era.input();
          await era.printAndWait([
            daiya.get_colored_name(),
            '&',
            kita.get_colored_name(),
            '「最后一段路了────！！超前啊──────！！」',
          ]);
          await era.printAndWait(
            '活动实况「两队几乎同时冲过终点────！！直到最后一刻都互不相让！！」',
          );
          await kita.say_and_wait('啊──好过瘾喔！流了好多汗呢～！');
          await daiya.say_and_wait(
            '不小心跟着一起太兴奋了！──对了，啦啦队的胜负判决是……',
          );
          era.printButton('「…………唔！…………唔唔！！」', 1);
          await era.input();
          await era.printAndWait(
            `……看来不用担心${daiya.couple_title}会在新年期间变胖，真是太好了。`,
          );
          break;
        case 2:
          await daiya.say_and_wait('撒年糕仪式……？');
          await kita.say_and_wait(
            '那是会朝参拜客丢年糕的活动！所以我们是要比谁捡的多对吧？',
          );
          await daiya.say_and_wait('原来如此，所以只要捡很多年糕就可以了吧！');
          await era.printAndWait('撒年糕的工作人员「我──────撒！」');
          await era.printAndWait('人群「呀────！哇啊啊啊啊啊！」');
          await kita.say_and_wait('感觉会掉很多在那边！冲啊────！！');
          await daiya.say_and_wait('咦？咦……呀！');
          await daiya.say_and_wait(
            `被……被人群给推出来了……赛${daiya.uma_sex_title}区跟一般大众区，两边都……挤满了人……`,
          );
          era.printButton('「你在后面的地上找找看」', 1);
          await era.input();
          await era.printAndWait(
            '大家的目光都集中在正要撒下的年糕上。落在比较远处跟接失败的年糕，意外地大家并没有特别注意到。',
          );
          await daiya.say_and_wait('啊，真的呢！后面的地上有好多喔！');
          await daiya.say_and_wait('好──我一定要捡很多回来！');
          await daiya.say_and_wait('嘿嘿嘿，捡到了好多呢！');
          await kita.say_and_wait(
            '大丰收大丰收～哈啊～啊啊♪回去做成红豆汤来吃好了！',
          );
          await daiya.say_and_wait('嗯！');
          await era.printAndWait(
            `你们在回程的路上买了红豆，回到学园后，三个人一起享用了很多红豆汤。`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            '放风『蒸』！听起来好像很好吃呢！所以是要比谁吃的多吗？',
          );
          await kita.say_and_wait(
            '啊──小钻。不是用蒸的，是要把风筝放到天上飞啦。',
          );
          await daiya.say_and_wait(
            '啊啊，原来是这样呀！那我有在电视上看过！比放风筝呀，感觉会很有趣呢！',
          );
          await kita.say_and_wait(
            '那我先过去那边放啰！我们两个谁放得比较好，就交给小钻的训练员来当裁判了！',
          );
          await era.printAndWait(
            `因为里见光钻似乎没有放风筝的经验，所以 ${you.name} 先示范给${daiya.sex}看。`,
          );
          await daiya.say_and_wait(
            '嗯嗯……线要像这样控制……助跑的时候还要注意风向……',
          );
          await kita.say_and_wait('喝啊啊────────！！');
          await kita.say_and_wait('喝啊──────！！…………奇怪～？');
          await kita.say_and_wait('奇怪了，怎么都放不起来啊。');
          await daiya.say_and_wait('呵呵，接下来就换我啰！');
          await era.printAndWait(
            `里见光钻轻轻地小跑步，风筝也跟着轻盈地飞上空中。${daiya.sex}配合风向调整助跑方向得到了好结果。`,
          );
          await kita.say_and_wait('哇啊，小钻好厉害喔！好──我也要！');
          await kita.say_and_wait('嘿呀──────！！……啊！飞起来了飞起来了！');
          await daiya.say_and_wait(
            '就等你放成功呢，小北！接下来才是要决胜负的时候！',
          );
          await era.printAndWait(
            '重视理论与技巧的里见光钻。凭着气势和韧性的北部玄驹。',
          );
          await era.printAndWait(
            '虽然双方因为个性不同而放法不同，但两人的风筝都恣意地在空中飘荡着。',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '迎向皋月赏';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {boolean} first_g1 里见光钻是否首次出赛 G1 赛事
     */
    const f = async (daiya, you, first_g1) => {
      if (first_g1) {
        await era.printAndWait(
          '明天是期待已久的里见光钻首场 G1 竞赛『皋月赏』的日子。',
        );

        era.printButton('「衣服带了吗？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '带了，已经装进包包里了。也没有忘记要再多带一双备用的鞋子。',
        );
        era.printButton('「蹄铁呢？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '当然也已经钉好了……训练员，你不要那么紧张嘛。',
        );
        await era.printAndWait(
          `本想缓和${daiya.sex}的紧张，结果反倒被安抚了。`,
        );
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
        await era.printAndWait(
          `你们对于在『皋月赏』获胜更加充满了干劲。很期待她能顺利赢得第一个G1胜利。`,
        );
        await era.printAndWait(
          '──然而，就像是老天爷要泼我们冷水一般，电视上的天气预报显示出令人担忧的资讯。',
        );

        era.printButton('「听说明天会有暴风雨……」', 1);
        await era.input();
        await daiya.say_and_wait(
          '好像是这样呢。但请放心吧！我有做好面对极差路况的准备！',
        );
        await era.printAndWait(
          `里见光钻给了 ${you.name} 相当可靠的回答。保险起见，${you.name} 决定明天要提早从特雷森学园出发。`,
        );
        era.drawLine({ content: '隔天早上' });
        await era.printAndWait('雨并没有预期中的大，但确实吹着不间断的强风。');
        await era.printAndWait(
          `感觉电车很有可能因为强风而停驶。于是，${you.name} 决定搭乘出租车前往中山赛场。`,
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
          `${you.name} 一边祈祷${daiya.sex}有顺利赶上──一边朝着亮相圈前进。`,
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
          `里见光钻露出了微笑。${daiya.sex}精神层面的强韧又再次让 ${you.name} 感到惊讶。`,
        );
        await daiya.say_and_wait('经典三冠的第一冠……我绝对不能输！！');
        await era.printAndWait(
          `或许是和${daiya.sex}的干劲互相呼应吧。厚重的雨云在不知不觉间散去，耀眼的阳光回到了场上。`,
        );
      } else {
        await era.printAndWait(
          '明天就是期待已久的皋月赏了。然而天气预报的却不太乐观。',
        );

        era.printButton('「听说明天会有暴风雨……」', 1);
        await era.input();
        await daiya.say_and_wait(
          '好像是这样呢。但请放心吧！我有做好面对极差路况的准备！',
        );
        await era.printAndWait(
          `里见光钻给了 ${you.name} 相当可靠的回答。保险起见，${you.name} 决定明天要提早从特雷森学园出发。`,
        );
        era.drawLine({ content: '隔天早上' });
        await era.printAndWait('雨并没有预期中的大，但确实吹着不间断的强风。');
        await era.printAndWait(
          `感觉电车很有可能因为强风而停驶。于是，${you.name} 决定搭乘出租车前往中山赛场。`,
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
          `${you.name} 一边祈祷${daiya.sex}有顺利赶上──一边朝着亮相圈前进。`,
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
          `里见光钻露出了微笑。${daiya.sex}精神层面的强韧又再次让 ${you.name} 感到惊讶。`,
        );
        await daiya.say_and_wait('经典三冠的第一冠……我绝对不能输！！');
        await era.printAndWait(
          `或许是和${daiya.sex}的干劲互相呼应吧。厚重的雨云在不知不觉间散去，耀眼的阳光回到了场上。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  sats_sho_end: (() => {
    const title = '厄运';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 里见光钻对玩家的称呼
     * @param {number} rank 比赛名次
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (daiya, you, callname, rank, toky_yus) => {
      await you.say_as_passer_by_and_wait('实况', '选手们从第四弯道进入直线！');
      await daiya.say_and_wait('──这里！从这里……！', true);
      await daiya.say_and_wait('咦……？');
      await daiya.say_and_wait(
        '脚感觉……好沉重……！我应该要从这里开始加速才对的……！！',
        true,
      );
      await daiya.say_and_wait('唔唔唔唔唔啊啊啊啊啊……！');
      if (rank === 1) {
        await era.printAndWait(
          '实况「抵达终点！第一名是里见光钻！！这颗钻石在暴风雨过后的阳光下闪耀！」',
        );
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊！');
        await daiya.say_and_wait('呼、呼……呼、呼……');
        await you.say_as_passer_by_and_wait(
          '观众A',
          '很厉害嘛，里见光钻！！感觉之后还会继续成长呢，真令人期待！',
        );
        await you.say_as_passer_by_and_wait(
          '观众B',
          '虽然最后看起来很辛苦的样子，但她撑过了！',
        );
        era.printButton('（不对……）', 1);
      } else {
        await era.printAndWait(
          '实况「……众所瞩目的里见光钻没能戴上『皋月赏』的荣冠！！」',
        );
        await daiya.say_and_wait('呼、呼……呼、呼……');
        await era.printAndWait(
          '观众A「啊～失败了啊。里见光钻表现得不如我的预期啊。」',
        );
        await era.printAndWait(
          '观众B「最后还看起来很辛苦的样子。照这样看来，长距离她应该是不行了……？」',
        );
        era.printButton('（那并不是她最佳的状态……）', 1);
      }
      await era.input();
      await era.printAndWait(
        `${you.name} 从${daiya.sex}比赛中的表现察觉到异状。比赛进入最后阶段的时候，里见光钻露出了明显的疲态。`,
      );
      await era.printAndWait(
        `${you.name} 想是因为……比赛前一路跑到赛场的关系，消耗了${daiya.sex}不少的体力吧……？`,
      );
      await era.printAndWait(
        '当时不跑的话，一定赶不上比赛。虽然那也是逼不得已的状况……',
      );
      await daiya.say_and_wait(
        '……光是跑完2000米就觉得到极限了……这种表现怎么可能跑第一……',
        true,
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          '实际上最后阶段我真的觉得很辛苦……完全没能发挥尾段加速的实力……',
          true,
        );
        await daiya.say_and_wait('这真是……离我预期的表现差得好远……', true);
        await daiya.say_and_wait(
          `速度最快的赛${daiya.uma_sex_title}才能获胜的『皋月赏』，身为赢家的我怎么能是这种表现……！`,
          true,
        );
        await daiya.say_and_wait(
          `什么知名赛${daiya.uma_sex_title}，我根本完全不够格！`,
          true,
        );
      } else {
        await daiya.say_and_wait('但是，要是我的实力再更坚强一点……！', true);
      }
      await daiya.say_and_wait('唔……！');
      era.printButton('光钻……！', 1);
      await era.input();
      await daiya.say_and_wait('……训练员……');
      era.printButton('「害你要自己跑来赛场，我很抱歉」', 1);
      await era.input();
      await daiya.say_and_wait('咦！？训练员不需要为这件事道歉呀！');
      await daiya.say_and_wait('当时的状况，我自己也觉得下车用跑的比较好！');
      if (rank === 1) {
        await daiya.say_and_wait(
          '……可是……刚好今天遇上了坏天气。才没能发挥100%的实力……',
        );
        await daiya.say_and_wait('这也是里见家魔咒的影响吗……？');
        await daiya.say_and_wait('不过，如果真的是魔咒的影响──');
        await daiya.say_and_wait('那就由我去破除它！');
        await daiya.say_and_wait([
          '在下一场 ',
          toky_yus,
          ' 战胜魔咒！展现出我最完美的表现！赢得胜利给大家看！！',
        ]);
      } else {
        await daiya.say_and_wait(
          '……可是……刚好今天遇上了坏天气。才没能发挥100%的实力，最后输掉了比赛……',
        );
        await daiya.say_and_wait(
          `『里见家的赛${daiya.uma_sex_title}赢不了G1』这个魔咒，我也……`,
        );
        era.printButton('「光钻……」', 1);
        await era.input();
        await daiya.say_and_wait('但我下一次不会再输了！');
        await daiya.say_and_wait('我一定会破除魔咒的！！');
        await daiya.say_and_wait([
          '下一场 ',
          toky_yus,
          '！我一定会战胜魔咒，赢得胜利给大家看！！',
        ]);
      }
      await era.printAndWait(
        `里见光钻强势地宣誓。因为这些运气不好的经历，反而更激发${daiya.sex}想要战胜魔咒的决心。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_win_g1: (() => {
    const title = '支持我的大家';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, kita, you) => {
      await era.printAndWait('里见光钻拿下首次 G1 胜利后的某天。走在街上时──');
      await you.say_as_passer_by_and_wait(
        '游戏厅的工作人员',
        '每人可以免费挑战一次抽豪华奖品的机会！目前正在举办『里见光钻G1获胜纪念活动』喔──！！」',
      );
      era.printButton('「里见光钻的活动！？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 因为感到在意而走进游戏厅。店里装饰得非常缤纷，到处都贴着之前比赛照片的看板。`,
      );
      await daiya.say_and_wait('哎呀，训练员。你好呀。');
      await kita.say_and_wait('你好！训练员也是来玩游戏的吗？');
      era.printButton('「不是，我只是对光钻的活动感到很惊讶……」', 1);
      await era.input();
      await era.printAndWait(
        `我向 ${daiya.couple_title} 询问怎么会有里见光钻的活动。`,
      );
      await daiya.say_and_wait('这是一间摆设里见集团开发的游戏机台的游戏厅。');
      await daiya.say_and_wait(
        '为了纪念我在G1获胜，集团的相关设施都正在举办活动。',
      );
      await daiya.say_and_wait(
        '『遇到喜事就要回馈顾客，把快乐分享给大家』，这是里见集团的经营方针。',
      );
      await daiya.say_and_wait('这件事情应该也已经得到学园那边的取可了的说……');
      await era.printAndWait(
        `${you.name} 想，应该因为是和比赛无关的杂事，所以学园那边帮 ${you.name} 将这些事情都处理好了吧。`,
      );
      await kita.say_and_wait(
        '我们正打算要去家庭餐厅，训练员，你要不要也一起去呢？',
      );
      await daiya.say_and_wait('对呀！和我们一起去吧！');
      era.printButton('「那我就一起去吧」', 1);
      await era.input();
      await daiya.say_and_wait('太好了！嘿嘿嘿♪');
      await daiya.say_and_wait('啊……对了，在那之前，请先等我一下下。');
      await era.printAndWait(
        '说完，里见光钻走向工作人员说了些话，将签名板交给工作人员，并在其中一台游戏机台上签名。',
      );
      await kita.say_and_wait(
        '小钻会像这样造访各个集团的相关设施，然后签名的样子呢！',
      );
      await kita.say_and_wait(
        '这好像是小钻为了多少让来店里的人感到更开心，而自己想到的喔！',
      );
      await kita.say_and_wait(
        '因为没办法造访全国的所有店家，所以会用参加G1竞赛时所用的蹄铁在签名板上盖印，送给大家喔！',
      );
      await daiya.say_and_wait('抱歉，让你们久等了。我们走吧。');
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「请给我们三人份的『光钻汉堡排』──！」',
      ]);
      await era.printAndWait('家庭餐厅店员「是。请稍候。」');
      era.printButton('「竟然还有活动限定的菜色……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '呵呵呵，其实这个『光钻汉堡排』是还原母亲为我做的汉堡排喔。',
      );
      await daiya.say_and_wait(
        '……在我比赛的前一天，母亲她代替了主厨，自己亲手为我做了汉堡排。',
      );
      await daiya.say_and_wait(
        '圆圆的汉堡排上面会有钻石形状的起司……中间还会插上一根母亲亲手做的旗子。',
      );
      await daiya.say_and_wait(
        '无论工作多么忙碌。母亲都一定会亲自为我做帮我加油打气的汉堡排。',
      );
      await kita.say_and_wait('所以才会叫做『光钻汉堡排』啊！');
      await daiya.say_and_wait(
        '嗯，虽然吃起来的味道应该不会完全一样……但我也很期待呢♪',
      );
      await era.printAndWait(
        '家庭餐厅店员「让您久等了。为您送上『光钻汉堡排』。」',
      );
      await daiya.say_and_wait('哇啊，来了来了！我要开动了──！');
      await daiya.say_and_wait('嚼嚼…………嗯嗯！');
      await daiya.say_and_wait(
        '这个味道……跟母亲做的非常接近呢！尤其是里面咬起来很松软的口感……！',
      );
      await daiya.say_and_wait('……呵呵呵，一定是母亲她亲自监修的吧♪');
      await era.printAndWait(
        '以家庭餐厅的菜色来说，『光钻汉堡排』的确是一道非常有手工感的料理。',
      );
      await kita.say_and_wait(
        '都这样到处办盛大活动了，想必伯父跟伯母对小钻首次在G1获胜这件事很开心吧？',
      );
      await daiya.say_and_wait(
        '嗯──他们是有打电话来道贺，但也没有表现出特别不同的感觉呢？还是工作很忙的样子。',
      );
      await kita.say_and_wait('咦？是喔？');
      await daiya.say_and_wait('嗯，但他们有说等我下次回家的时候会帮我庆祝。');
      await daiya.say_and_wait('……你们两位还吃得下吗？');
      await daiya.say_and_wait(
        '集团经营的别家咖啡厅里，也有办庆祝G1获胜纪念的铜板蛋糕套餐活动呢。',
      );
      await daiya.say_and_wait(
        '甜点我们就到那边吃吧♪之后还有室内的游乐设施，现在都可以全部免费玩呢……',
      );
      era.printButton('「光钻的父母亲会很忙，该不会就是因为……」', 1);
      await era.input();
      await kita.say_and_wait('我想，应该就是为了准备G1获胜纪念活动的关系吧。');
      await kita.say_and_wait(
        '……该不会所有跟集团有关的地方，全部都在办活动吧……',
      );
      await daiya.say_and_wait(
        '啊，里见集团的度假饭店也有今日预约限定的铜板住宿价优惠活动呢。',
      );
      await daiya.say_and_wait('不嫌弃的话，训练员也去体验看看吧♪');
      await kita.say_and_wait('听起来真的是所有地方都有办活动耶！！');
      await era.printAndWait(
        '──这个庆祝的规模实在是非同小可。明显能感受到里见光钻的双亲和家族所有人是多么地开心。',
      );
      await era.printAndWait(
        '里见家首次的G1胜利。里见光钻所成就的伟业，带给许多的人喜悦。',
      );
      await era.printAndWait(
        `今后也要继续和${daiya.sex}一起将更多的胜利带给大家──`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '迎向日本德比';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (daiya, you, sats_sho, toky_yus) => {
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
        content: `日本德比当天`,
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
        `${you.name} 看了看鞋子的状况，应该是不能修复了。看来只能改成穿备用的鞋子了。`,
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
        sats_sho,
        ' 和 ',
        toky_yus,
        ' 都是这样，偏偏都在重要的经典三冠赛事时发生，为什么会这样……！',
      ]);
      await daiya.say_and_wait('仿佛就像是为了妨碍里见家达成宿愿一样。');
      await daiya.say_and_wait('……像是有什么东西想要扯我后腿的感觉……');
      await daiya.say_and_wait('……这就是里见家魔咒的强大……');
      era.printButton('「光钻，现在还是……」', 1);
      await era.input();
      await daiya.say_and_wait('但是呢！！我是不会输的！我会破除所有魔咒！！');
      await daiya.say_and_wait('我发誓一定会做到的！！所以……！');
      await daiya.say_and_wait(['我会跑赢 ', toky_yus, ' 的！绝对会！！']);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_end: (() => {
    const title = '惭愧';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you 玩家
     * @param {number} rank 比赛名次
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     */
    const f = async (daiya, etsuko, you, rank, tenn_spr, takz_kin) => {
      await daiya.say_and_wait('……没事的！鞋也已经换过了！', true);
      await daiya.say_and_wait(
        '备用的鞋子也提前钉好蹄铁了！……看吧，穿起来感觉也很正常。',
        true,
      );
      await daiya.say_and_wait('……根本没有什么……', true);
      await daiya.say_and_wait('需要担心的地方！！', true);
      await daiya.say_and_wait('啊啊啊啊啊啊啊啊啊啊！！');
      await era.printAndWait(
        '像是摆脱了什么般的……真切的咆哮。里见光钻展现惊人的气势，在草地上奔驰。',
      );
      if (rank === 1) {
        await you.say_as_passer_by_and_wait(
          '实况',
          `领先的是……里见光钻──！今年的德比赛${daiya.uma_sex_title}是里见光钻！`,
        );
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
        await you.say_as_passer_by_and_wait(
          '观众A',
          '里见光钻是第一名！！真是惊人的尾段加速实力！',
        );
        await you.say_as_passer_by_and_wait(
          '观众B',
          '持久力的部分也完全还有余裕的感觉，『菊花赏』应该也没问题了吧！',
        );
      } else {
        await you.say_as_passer_by_and_wait(
          '实况',
          `……里见光钻没能做到！成为德比赛${daiya.uma_sex_title}的梦想离${
            daiya.sex
          }远去──！！`,
        );
      }
      await daiya.say_and_wait('呼、呼……');
      await daiya.say_and_wait(
        '鞋子……没有出问题，但我却……忍不住一直在意鞋子……',
        true,
      );
      await daiya.say_and_wait('真是不堪的表现……！！', true);
      if (rank === 1) {
        await etsuko.say_and_wait(
          `里见光钻${daiya.adult_sex_title}，恭喜你！请问你成为德比赛${daiya.uma_sex_title}的感想是？`,
        );
        await daiya.say_and_wait(
          `……谢谢。能够在赛${daiya.uma_sex_title}的历史上留下自己的名字，我感到很光荣。`,
        );
        await daiya.say_and_wait(
          '在『日本德比』获胜，这对里见家来说也是至高的荣耀。',
        );
        await etsuko.say_and_wait('里见集团的大家一定都很开心吧！');
        await daiya.say_and_wait(
          '是的，这是当然的。但我想，大家也会叮咛我不可骄傲自满吧。',
        );
        await etsuko.say_and_wait(
          `哎呀！不过也正是这种严谨的上进心，才能将里见光钻${daiya.adult_sex_title}培养得如此坚强吧！`,
        );
        await daiya.say_and_wait('是的，集团的大家总是督促我要更加进步。');
        await daiya.say_and_wait(
          '所以，下一次我一定会让大家看到比今天更出色的表现！',
        );
        await era.printAndWait('观众A「喔喔，我很期待喔──！」');
        await daiya.say_and_wait('嗯！一定会！！');
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊……');
        await daiya.say_and_wait('……呼……');
        await era.printAndWait(
          '走进地下道后，里见光钻原本紧张的情绪获得缓解。在一个长长的叹气后，恢复到了平时的表情。',
        );
        await daiya.say_and_wait('……我们走吧。');
        era.drawLine();
        await era.printAndWait(
          `回到休息室时，${daiya.sex}的表情看起来似乎有些不满。`,
        );
        era.printButton(
          `「恭喜你，今天起你就是德比赛${daiya.uma_sex_title}了呢」`,
          1,
        );
        await era.input();
        await daiya.say_and_wait('谢谢，不过……');
        await daiya.say_and_wait(
          `争夺德比赛${daiya.uma_sex_title}头衔的比赛……我的表现居然是那样，我觉得自己很没用……`,
        );
        era.printButton('「怎么了吗？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '我……在比赛的时候，一直忍不住在意鞋子的状况。',
        );
      } else {
        era.drawLine();
        await era.printAndWait('回到休息室之后，里见光钻就一直保持沉默。');
        era.printButton('「虽然没能跑赢很可惜……」', 1);
        await era.input();
        await daiya.say_and_wait('……不，训练员。会跑输是因为我自己没用。');
        era.printButton('「没用？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '是的。因为我在比赛的时候一直忍不住在意鞋子。',
        );
      }
      await daiya.say_and_wait(
        '明明就完全没有任何异状，我也亲自检查过好多遍，确定没有问题了！',
      );
      await daiya.say_and_wait('……当下的我……就是太害怕魔咒了……');
      if (rank === 1) {
        await daiya.say_and_wait(`因为被魔咒分心，所以没有跑出最佳状态！`);
        await daiya.say_and_wait('我不能原谅这样的自己！！');
      } else {
        await daiya.say_and_wait(
          '因为被魔咒分心，所以没有跑出最佳状态，所以输了！',
        );
        await daiya.say_and_wait('我真的觉得自己这样很丢脸，无法原谅！！');
      }
      await daiya.say_and_wait('我绝不会输给魔咒！明明我都这样发誓过了！！');
      await daiya.say_and_wait(
        '……实现里见家梦想的道路上，我绝不能留下丝毫的不安！',
      );
      await daiya.say_and_wait(
        '如果前方真的有强大的魔咒在等待着我，那我要让自己的实力凌驾于那之上！',
      );
      await daiya.say_and_wait(
        '面对任何困难都不受影响的强大实力！做好能够应对所有事情的万全准备！',
      );
      await daiya.say_and_wait(
        '无论是厄运还是魔咒，我都要用压倒性的实力去碾压！',
      );
      await era.printAndWait(
        `绝对要做到完全胜利的宣言。──令 ${you.name} 相当佩服。`,
      );
      await daiya.say_and_wait('训练员！');
      era.printButton('「训练的安排就都交给我吧！」', 1);
      await era.input();
      await daiya.say_and_wait('呵呵呵！不愧是我的训练员呢♪');
      await daiya.say_and_wait(
        '『菊花赏』的时候，我们一定要让大家看到最完美的比赛！',
      );
      era.drawLine();
      await era.printAndWait(
        `从赛场回程的路上，${you.name} 邀约里见光钻一起去咖啡厅。`,
      );
      await era.printAndWait(
        `${you.name} 打算给准备挑战魔咒的${daiya.sex}一点鼓励，请${daiya.sex}吃一些甜食。`,
      );
      await daiya.say_and_wait(
        '什么都可以点吗……？我看看……水果圣代再加点起司蛋糕也可以吗……？',
      );
      era.printButton('「可以！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '那我要再加三球冰淇淋，再加白玉汤圆跟果冻，然后水果加量……',
      );
      era.printButton('「爱怎么加就怎么加吧！」', 1);
      await era.input();
      await daiya.say_and_wait('呵呵，再加就要装不下了。感谢你的招待，训练员♪');
      await era.printAndWait('──这时，听到旁边座位谈到熟悉的名字。');
      await you.say_as_passer_by_and_wait('刚观战完的男性观众A', [
        '上次 ',
        takz_kin,
        ' 粉丝票选的中间发表结果！第一名是北部玄驹！',
      ]);
      await you.say_as_passer_by_and_wait(
        '刚观战完的男性观众B',
        `没错没错！我也是投给${daiya.sex}，所以超开心的！`,
      );
      await era.printAndWait([
        '参赛选手由粉丝投票选出的 ',
        takz_kin,
        '。名次的中间发表结果中，北部玄驹得到了第一名。',
      ]);
      await you.say_as_passer_by_and_wait('刚观战完的男性观众A', [
        `${daiya.sex}在 `,
        tenn_spr,
        ' 的表现真的很棒！北部玄驹明明一度被超越了，却又在最后反超回来，以鼻差夺得第一！！',
      ]);
      await you.say_as_passer_by_and_wait(
        '刚观战完的男性观众B',
        `那场比赛真的很刺激～！最后还是${daiya.sex}顽强的意志力获胜了！！`,
      );
      await you.say_as_passer_by_and_wait(
        '刚观战完的男性观众A',
        `因为${daiya.sex}真的跑得很拼命的样子，那种坚定不移的感觉会让人忍不住想支持${daiya.sex}吧。`,
      );
      await you.say_as_passer_by_and_wait(
        '刚观战完的男性观众B',
        `我懂我懂！因为${daiya.sex}本身也没什么特别亮眼的地方，就是很普通、很接近我们的感觉。`,
      );
      await you.say_as_passer_by_and_wait(
        '刚观战完的男性观众B',
        `所以反而更希望${daiya.sex}能够跑赢！就像是看到自己获得成就的感觉！`,
      );
      await daiya.say_and_wait(
        '我也是这么想的！那边那两位，真的很懂小北的优点呢！',
      );
      await daiya.say_and_wait(
        `小北……${daiya.sex}在新年参拜的时候，把目标定为增加支持自己的人……`,
      );
      await daiya.say_and_wait('已经实现了呢。');
      era.printButton('「毕竟是粉丝票选第一名嘛」', 1);
      await era.input();
      await daiya.say_and_wait(
        '对啊。而且连粉丝都看起来很开心地在讨论小北的比赛呢。',
      );
      await daiya.say_and_wait(
        '希望带给支持自己的人笑容──她离这个目标也越来越接近了。',
      );
      await daiya.say_and_wait('……我也不能输给她呢。');
      await daiya.say_and_wait(
        '身为和小北一起比赛的对手，我也要努力不辜负这个身份才行……！',
      );
      await daiya.say_and_wait(
        '虽然现在是小北跑在比我更前方的位置，但我也要在我的道路上继续前进，一定要追上她！',
      );
      era.printButton('「『菊花赏』更是不能输了呢」', 1);
      await era.input();
      await daiya.say_and_wait(
        '嗯。小北在去年跑赢过的『菊花赏』，这场比赛我绝对不能输！',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季集训（经典年）开始！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, kita) => {
      await era.printAndWait('今天开始，就是期待已久的『夏季集训』了！');
      await daiya.say_and_wait(
        '我会在这个夏季集训里，练就不被魔咒左右的强大实力！',
      );
      await era.printAndWait(
        '为了练就强大的实力，我们计划在夏季集训着重做基础训练。先把体能的基础给打好是很重要的。',
      );
      await era.printAndWait(
        '锻炼出足以跑完『菊花赏』3000米的持久力也是这次的课题。',
      );
      await kita.say_as_unknown_and_wait('小钻──！');
      await kita.say_and_wait('欸欸，我们快点去房间了啦！');
      await daiya.say_and_wait('真是的，小北怎么这么兴奋呀。');
      await kita.say_and_wait(
        '因为来到了海边啊！我真的觉得好期待喔！今年也一定要好好地锻炼～！',
      );
      await daiya.say_and_wait('喔──！');
      await kita.say_and_wait('啊哈哈，小钻自己还不是也很兴奋嘛！');
      await daiya.say_and_wait(
        '呵呵，我当然也是充满干劲的呀。因为『菊花赏』我一定要赢。',
      );
      await daiya.say_and_wait(
        '我要在小北跑赢过的『菊花赏』拿下胜利……破除里见家的魔咒……成为有资格当小北劲敌的自己！',
      );
      await kita.say_and_wait('小钻……！没错！为了将来我们能跑同一场比赛。');
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「加油，喔──！」',
      ]);
      await era.printAndWait(
        '两人充满干劲的声音响彻了这个夏天的天空。──感觉会是一次非常热血的夏季集训。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '夏季集训（经典年）途中';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} tannhauser 待兼诗歌剧
     * @param {CharaTalk} dictus 生野狄杜斯
     * @param {CharaTalk} pama 目白善信
     * @param {CharaTalk} helios 大拓太阳神
     * @param {CharaTalk} turbo 双涡轮
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (
      daiya,
      nature,
      tannhauser,
      dictus,
      pama,
      helios,
      turbo,
      kita,
      you,
    ) => {
      await daiya.say_and_wait('呼、呼……配速跑……跑完了……');
      era.printButton('「辛苦了，休息吧」', 1);
      await era.input();
      await daiya.say_and_wait('是……');
      await era.printAndWait(
        '夏季集训已经过了一半的这天。里见光钻的动作明显地感觉比较迟钝。',
      );
      await era.printAndWait(
        `酷暑下做训练特别消耗体力。或许是连续这样锻炼让${daiya.sex}疲劳了吧。`,
      );
      await kita.say_as_unknown_and_wait('喝啊啊啊啊──！');
      await kita.say_and_wait('呼，跑完十趟了！感觉越来越轻松了呢～');
      await kita.say_and_wait('好──把负重加倍之后再练一组吧──！');
      await daiya.say_and_wait('……训练员，进入下一个训练项目吧！');
      era.printButton('「还是再多休息一下比较好……」', 1);
      await era.input();
      await daiya.say_and_wait('不，我没关系！那我就开始训练啰！');
      era.drawLine();
      await daiya.say_and_wait('呼、呼、呼……');
      era.printButton('「上午的训练就到此为止吧」', 1);
      await era.input();
      await daiya.say_and_wait('可、可是……原本订定的训练还没做完……');
      await era.printAndWait(
        `${you.name} 向${daiya.sex}说明，在疲惫的状态下继续训练也不会有什么效果。事实上现在的成绩就是下滑了非常多。`,
      );
      await daiya.say_and_wait(
        '要是因为身体达到极限就停止……是没办法抵达更远的目标的！要获得凌驾于魔咒之上的实力就要更拼命！！',
      );
      await daiya.say_and_wait('况且，小北都还在努力呢！我也不可以输给她！');
      await era.printAndWait(
        `${
          daiya.sex
        }的目光停留在离你们一段距离，流着满身大汗却仍旧一个接一个完成训练的北部玄驹身上。`,
      );
      await era.printAndWait(
        `但 ${you.name} 还是认为北部玄驹那种凭着气势和意志力，以超越极限为目标的训练方式并不适合里见光钻。`,
      );
      await daiya.say_and_wait('训练员，如果需要的话，这些可以让你参考。');
      await daiya.say_and_wait(
        '这是以前指导我的老师们所统整的我所受过的训练内容的资料。里面还包含了成绩数据跟比赛影片。',
      );
      await daiya.say_and_wait(
        '里见家的训练环境用的都是最新科技的机器，所以数据的准确性也是非常高的。',
      );
      await era.printAndWait(
        `一直以来${daiya.sex}都是在非常良好的环境下做训练。因为没什么在酷暑下训练的经验，不习惯的环境让${daiya.sex}消耗了更多的体力与精神。`,
      );
      era.printButton('「总之先吃午饭吧」', 1);
      await era.input();
      await daiya.say_and_wait('……是……');
      await turbo.say_as_unknown_and_wait('欸欸欸欸！里见！还有那位训练员！');
      await turbo.say_and_wait('涡轮来陪你一起做训练吧！');
      await daiya.say_and_wait('……咦？涡轮？');
      await turbo.say_and_wait(
        '可以大家一起做的训练！我让里见你也一起加入吧！',
      );
      await dictus.say_and_wait('涡轮，你不要这么急。还是由我来说明一下。');
      await era.printAndWait(
        `正当觉得一头雾水的时候，那些里见光钻提起过的『为${daiya.sex}办新生欢迎会的前辈们』一个接一个出现。`,
      );
      await era.printAndWait(
        '不只是生野狄杜斯，今天还有双涡轮、待兼诗歌剧，和大拓太阳神也在。',
      );
      await dictus.say_and_wait(
        '里见，不介意的话，要不要和我们一起共同训练呢？',
      );
      await dictus.say_and_wait(
        '可以跟多数人交流也算是夏季集训的一大优点。要不要趁这个机会试试看？',
      );
      await daiya.say_and_wait('原来如此……');
      await pama.say_and_wait(
        '你也不用想得太复杂。其实在去年的时候，帝王她们也帮了北部，所以──',
      );
      await turbo.say_and_wait(
        '只有帝王可以帮忙，太不公平了！涡轮也想要当──前──辈──！',
      );
      await pama.say_and_wait('就是这个状况啰，你愿意一起的话也算是帮大忙了。');
      await turbo.say_and_wait(
        '可以吧！好啦，里见！好啦──好啦──好啦──好啦──！！',
      );
      await nature.say_and_wait(
        '如果你不嫌弃的话，能不能让我们跟你一起训练呢？',
      );
      await daiya.say_and_wait('这个嘛……该怎么办好呢？训练员。');
      era.printButton('「是打算要做什么样的训练呢？」', 1);
      await era.input();
      await dictus.say_and_wait('是有这两种选项──');
      await era.printAndWait(
        '从生野狄杜斯提出的方案来看──原来如此，都是能控制体力不要过度消耗，在不逞强的状态下进行的训练内容。',
      );
      await era.printAndWait(
        '更重要的是看起来就很有趣，说不定还能达到转换心情的效果。',
      );
      era.printButton('「那就麻烦让我们加入共同训练了」', 1);
      await era.input();
      await turbo.say_and_wait(
        '太棒啦──！！里见，一切就都交给涡轮前辈吧────！',
      );
      await daiya.say_and_wait('呵呵呵，那就要麻烦你啰！涡轮前辈♪');
      await tannhauser.say_and_wait(
        '既然决定好了，那就该吃午饭了～♪吃咖喱吗？还是吃炒面？不然就两种都吃～？',
      );
      await helios.say_and_wait(
        '欧耶☆要吃当然就要全吃啊！规定所有人都要吃完三道！',
      );
      await nature.say_and_wait('你们怎么那么快啊！？');
      await dictus.say_and_wait('那就等吃完午饭之后再集合吧。');
      await dictus.say_and_wait(
        '那我们要做哪种训练比较好呢？训练员有比较想选哪一个吗？',
      );
      await era.printAndWait('以里见光钻目前的状态来说，最适合的训练是──');
      era.printButton('「用沙堆出一个隧道」（耐力+20）', 1);
      era.printButton('「飘很久的纸排球赛」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await dictus.say_and_wait(
          '要用沙堆隧道啊。我已经向海之家取得店附近沙滩的使用权了。出发吧。',
        );
        await daiya.say_and_wait(
          '那个～我有个问题。用沙堆隧道这件事真的能算是训练吗？',
        );
        await nature.say_and_wait(
          '绝对算喔──因为我们要做的是我们能通过的隧道。',
        );
        await nature.say_and_wait(
          '而且还要挖很多做隧道要用的沙。需要不停、不停、不停地挖。',
        );
        await daiya.say_and_wait('原来如此……这样听起来的确能锻炼到呢！');
        await daiya.say_and_wait('呼，这些应该就够了吧？');
        await tannhauser.say_and_wait(
          '嗯，感觉不错喔～要小心不要掉到自己挖出来的沙坑里喔！',
        );
        await dictus.say_and_wait('诗歌剧，你自己也要小心不要掉下去喔。');
        await tannhauser.say_and_wait('啊！对耶～！……我会『小熏』的……');
        await tannhauser.say_and_wait(
          '那么──接下来是要做地基吧。要在沙子里面加很～多的水，再踩踏定型。',
        );
        await tannhauser.say_and_wait(
          '把沙子堆到隧道需要的高度，然后踩踏、再堆、再踏……跟着我一起做──♪',
        );
        await era.printAndWait('众人「隧道完成了～！」');
        await daiya.say_and_wait('哇啊～！还真的可以通过呢！');
        await pama.say_and_wait('以外行人的技术来说，算是完成度很高了！');
        await nature.say_and_wait('呼～做完之后才瞬间觉得好累喔……');
        await daiya.say_and_wait(
          '我们一直反复地挖沙跟搬运海水，然后又一直踩踏沙堆……一直劳动到现在嘛。',
        );
        await daiya.say_and_wait('不过，我玩得很开心喔！');
        await era.printAndWait(
          '打造沙隧道不仅是一个锻炼力量的好训练，似乎也达到了转换心情的效果。',
        );
        await turbo.say_and_wait(
          '嘿嘿嘿──那就要进入最后环节啦！一起破坏它吧～～！！',
        );
        await daiya.say_and_wait('……什么！？');
        await nature.say_and_wait(
          '我知道你想说什么，但我们总不能让沙滩留下这么多坑洞吧。',
        );
        await era.printAndWait(
          '沙隧道就这样瞬间崩塌，化为乌有。让这个共同训练成为了一个有点苦涩的回忆。',
        );
      } else {
        await dictus.say_and_wait(
          '是的，我们会用纸气球代替一般的排球。等实际试过一次你就会明白了。',
        );
        await dictus.say_and_wait(
          '那么，第一战！由善信&太阳神与里见&涡轮对战！',
        );
        era.printButton('「太阳」', 1);
        await era.input();
        await era.printAndWait([
          pama.get_colored_name(),
          '&',
          helios.get_colored_name(),
          '「欧耶欧耶☆」',
        ]);
        await turbo.say_and_wait('里见，跟着涡轮就对了──！');
        await daiya.say_and_wait('是～～♪');
        await pama.say_and_wait('我要发球啰～！嘿──！');
        await era.printAndWait(
          `纸气球被${daiya.sex}拍到了高空……却迟迟都不落下来。`,
        );
        await turbo.say_and_wait(
          '好──来吧来吧来吧来吧！来吧来吧…………还没要来吗────！？',
        );
        await daiya.say_and_wait(
          '降落位置应该是这附近……哎哟！风向变了……！一定要过网呀……！',
        );
        await daiya.say_and_wait('啊……没过网……');
        await turbo.say_and_wait('搞什么嘛──！这气球有够慢的！！');
        await daiya.say_and_wait(
          '飘很久……原来是这么一回事呀。因为纸气球比一般排球的重量轻很多，所以飘在空中的时间更长。',
        );
        await daiya.say_and_wait(
          '再加上需要控制力道去拍打，才能把球给打过网，所以，等同于需要静止不动地等待。',
        );
        await pama.say_and_wait(
          '没错，一定要很有耐心地等到正确时机，再用适当的力道拍打，需要够冷静才能做到。',
        );
        await helios.say_and_wait(
          '有时候还会被风吹得很远！会被逼得要跑来跑去的，超爆笑☆',
        );
        await daiya.say_and_wait(
          '等待正确的时机……这跟比赛时的进攻时机一样呢。',
        );
        await daiya.say_and_wait(
          '不被周遭影响，耐心等到属于自己的最佳时机，这需要相当的忍耐力。感觉会是一个很好的训练呢！',
        );
        await era.printAndWait(
          '于是──里见光钻冷静地掌握了风向和纸气球的降落速度，成功赢得了比赛。',
        );
        await dictus.say_and_wait(
          '表现得很好，由其是里见。遇到任何状况都不受影响的精神力，真的让我感到很佩服。',
        );
        await daiya.say_and_wait(
          '嘿嘿，不小心投入在比赛里面了。我玩得很开心喔！',
        );
        await era.printAndWait(
          '里见光钻似乎在共同训练中锻炼到忍耐力，并且也成功转换了心情。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季集训（经典年）结束';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
      await era.printAndWait('夏季集训最后一天。里见光钻似乎在思考着什么。');
      era.printButton('「怎么了吗？」', 1);
      await era.input();
      await daiya.say_and_wait('……我正在想今后的事情。');
      await daiya.say_and_wait(
        '距离『菊花赏』还有大概两个月的时间……这段时间内我能成长多少呢？',
      );
      await daiya.say_and_wait(
        '我觉得自己的实力还没有到可以完全不被魔咒影响的程度。',
      );
      era.printButton('「还有两个月的时间」', 1);
      await era.input();
      await era.printAndWait(
        '夏季集训主要是以基础训练为中心。针对「菊花赏』该做的正式调整是接下来才要做的事情。',
      );
      await daiya.say_and_wait(
        '……说得也是。我也明白训练不会立刻见效，但还是忍不住会觉得着急。',
      );
      await daiya.say_and_wait(
        '我不应该这么容易受到影响才对！我不会输给魔咒的！绝对！一定会破除魔咒给你看！',
      );
      await daiya.say_and_wait(
        '嗯！我心态调整好了！为了『菊花赏』，我会更加努力的！',
      );
      await era.printAndWait(
        `要在「菊花赏」取胜的决心已经大到甚至会让${daiya.sex}焦虑的程度了吧。`,
      );
      await era.printAndWait(
        '然而──似乎是有点用力过头了的感觉。希望这样不会导致坏的结果……',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_34: (() => {
    const title = '困住我的东西';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     * @param {PrintedSpan} kiku_sho
     * @param {PrintedSpan} tenn_spr
     */
    const f = async (
      daiya,
      mcqueen,
      you,
      sats_sho,
      toky_yus,
      kiku_sho,
      tenn_spr,
    ) => {
      await daiya.say_and_wait('喝啊啊啊啊啊啊──！');
      await daiya.say_and_wait('呼、呼……还不够，光这样是赢不了的……');
      await daiya.say_and_wait(
        '要在『菊花赏』赢得胜利，就一定要变强到无论遇到什么突发状况都不受影响的程度……！',
      );
      await era.printAndWait(
        `里见光钻为了『菊花赏』连续好多天都努力地投入训练。每一天都能感受到${daiya.sex}的成长。`,
      );
      await era.printAndWait(
        '身体状况调整得很好，但里见光钻的精神状态似乎陷入了非常紧绷的状况。',
      );
      await era.printAndWait(
        `尤其是${daiya.sex}现在经常把『要练就克制魔咒的实力』这句话挂在嘴边。`,
      );
      await daiya.say_and_wait('呼、呼……呼！');
      await daiya.say_and_wait(
        '训练员，坡道冲刺这个部分，我现在已经算是可以轻松地完成了。',
      );
      era.printButton('「还能再跑两趟吗？」', 1);
      await era.input();
      await daiya.say_and_wait('是，那我就先去多跑一趟看看吧！');
      await era.printAndWait(
        '会这么执着于魔咒，或许是因为背负着里见家的期望吧。既然如此──',
      );
      await era.printAndWait(`去找『${daiya.sex}』帮忙看看好了。`);
      await mcqueen.say_and_wait('今天请多指教了，里见。');
      await daiya.say_and_wait('麦、麦……麦昆！？麦昆愿意陪我一起做训练吗！？');
      era.printButton('「可以从她身上学到很多东西吧。」', 1);
      await era.input();
      await daiya.say_and_wait('是的！！麦昆，谢谢你愿意给我这么宝贵的机会！');
      await mcqueen.say_and_wait(
        '呵呵，不用这么拘束。我也能从你身上获得激励嘛。',
      );
      await mcqueen.say_and_wait(
        '好了，时间有限。我们就稍微跑个耐力跑来热身，之后再来并跑练习吧。',
      );
      await daiya.say_and_wait('麻烦你多多指教了！');
      await era.printAndWait('两人「喝啊啊啊啊啊！喝啊啊啊啊啊！」');
      await daiya.say_and_wait('呼、呼……就只差一点点而已了说……');
      await mcqueen.say_and_wait(
        '前期被拉开太多距离了呢。要针对能够依照领先对手的步调去调整进攻方式的模式多做训练比较好。',
      );
      await daiya.say_and_wait('的确……托你的福，让我知道自己不足的部分！');
      await mcqueen.say_and_wait(
        '呵呵，这样是再好不过的了。最后就用长跑训练作为缓和运动吧。',
      );
      await daiya.say_and_wait('是！');
      await era.printAndWait(
        '里见光钻的表情看起来非常开朗。已经完全看不到原本紧绷的神色。',
      );
      await era.printAndWait(
        `${you.name} 估算着际遇相近的目白麦昆，或许就能明白里见光钻的心情。看来找${daiya.sex}帮忙是找对了。`,
      );
      await daiya.say_and_wait('呼、呼…………啊！抱歉，麦昆！');
      await mcqueen.say_and_wait('怎么了吗？');
      await daiya.say_and_wait(
        '我看到了卖蜂蜜蜜饮的餐车！那个……我可以去买一下吗？',
      );
      await mcqueen.say_and_wait(
        '哎呀，真的呢。那我们就在这里暂时休息，补充水分吧。',
      );
      await daiya.say_and_wait('谢谢你！');
      await mcqueen.say_and_wait('……里见，你买了真大一杯啊……');
      await daiya.say_and_wait('嘿嘿嘿，其实这个摊贩有个很有名的魔咒喔。');
      await daiya.say_and_wait(
        '据说只要在比赛前喝一杯『LL杯的蜂蜜柠檬 · 蜂蜜偏软 · 特浓 · 特多』就会输掉比赛的魔咒！',
      );
      await daiya.say_and_wait(
        '所以我才想故意在『菊花赏』之前喝一杯，挑战破除这个魔咒！',
      );
      await mcqueen.say_and_wait('破除魔咒……？');
      await daiya.say_and_wait([
        '其实我一直被 ',
        sats_sho,
        '、',
        toky_yus,
        ' 和魔咒影响──',
      ]);
      await mcqueen.say_and_wait([
        '──原来如此，所以你才会对 ',
        kiku_sho,
        ' 抱有更想要破除魔咒的决心。',
      ]);
      await daiya.say_and_wait([
        '是的！我绝不会向魔咒低头的！我要在 ',
        kiku_sho,
        ' 的时候证明这件事！',
      ]);
      await mcqueen.say_and_wait(
        '你为了不输给魔咒而努力的心态，真的是非常了不起。',
      );
      await mcqueen.say_and_wait('可是──');
      await mcqueen.say_and_wait(
        '会不会你总是把运气不好当作是魔咒，所以才会失去平常心，容易受到影响呢？',
      );
      await daiya.say_and_wait('咦……？');
      await mcqueen.say_and_wait(
        '比赛的时候，尤其是跑长距离的时候，就更需要保持平常心来坚定自己的跑法。',
      );
      await mcqueen.say_and_wait(
        '一旦受到影响就会缺乏专注力，心理的负担也会造成体力的额外消耗。导致没有足够的从容去展现出自己的跑法。',
      );
      await mcqueen.say_and_wait(
        '我也有过类似这样的经验。在重要的比赛发生运气不好的事情。',
      );
      await daiya.say_and_wait('麦昆也有……啊……');
      await daiya.say_and_wait(['是指 ', tenn_spr, ' 的事情吗……？']);
      await mcqueen.say_and_wait(
        '是的……那场比赛，是关系到我能否达成连霸的重要比赛。',
      );
      await mcqueen.say_and_wait(
        '在进闸门之前，因为觉得右脚卡卡的，检查之后……发现是蹄铁脱落了。',
      );
      await daiya.say_and_wait(
        '我知道这件事。当时因为蹄铁的一半都歪掉了……你还是现场立刻重新调整的对吧。',
      );
      await mcqueen.say_and_wait(
        '没有错，但当时的我并没有把蹄铁脱落看作是运气不好。',
      );
      await mcqueen.say_and_wait(
        '就只是冷静地专注在重新装钉蹄铁上。等到比赛开始后──',
      );
      await mcqueen.say_and_wait(
        '我的注意力不在右脚的蹄铁上，也不在当时公认的劲敌──帝王身上。',
      );
      await mcqueen.say_and_wait('为了跑赢，我只专注在自己的跑步上。');
      await mcqueen.say_and_wait(
        '我专注在自己的跑步上，跑完了3200米。所以我才能赢得那场比赛。',
      );
      await daiya.say_and_wait('……只专注自己的跑步……');
      await daiya.say_and_wait([
        '我……在 ',
        toky_yus,
        ' 的时候，因为鞋子坏了，所以是穿备用的鞋子去跑的。比赛的时候也一直在意鞋子的问题……',
      ]);
      await daiya.say_and_wait(
        '完全没办法专心比赛，没能完全发挥应有的实力让我很不甘心……',
      );
      await mcqueen.say_and_wait('哎呀，所以你其实早就明白这个道理了嘛。');
      await daiya.say_and_wait('……因为我过于执着魔咒，所以反被魔咒所困了……？');
      await daiya.say_and_wait('没有那么在意魔咒的话，就不会被魔咒绑手绑脚……');
      await mcqueen.say_and_wait('我是这么认为的。');
      await daiya.say_and_wait('……我从来没有想过是这样……但仔细一想，的确是……');
      await daiya.say_and_wait(
        '……麦昆总是能维持坚定不受影响的实力，背后的原因，我似乎能明白了……',
      );
      await daiya.say_and_wait(
        '因为你总是只专注在自己的跑步和目标上……所以才可以随时随地都凛然又坚定。',
      );
      await daiya.say_and_wait(
        '算是脚踏实地的一种吧。嘿嘿嘿，果然麦昆真的是很了不起的一个人呢！',
      );
      await mcqueen.say_and_wait('你这么说是我的荣幸。');
      await mcqueen.say_and_wait(
        '还有……所谓的魔咒，其实大多都是从结果论衍生出来的。',
      );
      await mcqueen.say_and_wait(
        '如果当时我在那场比赛中跑输了，或许就也会被说成是魔咒的关系了也不一定，但只要跑赢了，就没有被说是魔咒的空间了。',
      );
      await daiya.say_and_wait(
        '这么说起来还真是这样呢！那这个喝了蜂蜜柠檬就会跑输比赛的魔咒其实……',
      );
      await mcqueen.say_and_wait(
        '我想……会不会是因为喝这个变胖的关系呢？毕竟这么喝的确是摄取过多热量了，加上柠檬会盖掉大部分的甜味。',
      );
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait('呃……我、我已经整杯都喝完了……');
      await daiya.say_and_wait(
        '训……训练员！！刚刚那杯蜂蜜柠檬的热量……麻烦你帮我追加额外训练让我消耗热量吧～！',
      );
      era.drawLine({ content: '隔天' });
      await daiya.say_and_wait([
        '我……在昨天晚上，把 ',
        kiku_sho,
        ' 之前该完成的课题列出来了。',
      ]);
      await daiya.say_and_wait(
        '3000米的步调分配、争抢跑道的研究、进攻状况的模拟……我还需要更强大的持久力。',
      );
      await daiya.say_and_wait(
        '需要完成的课题还有一大堆呢！已经没有多余的时间去在意魔咒的事情了！',
      );
      await daiya.say_and_wait(
        '我一定要完成里见光钻的跑法！然后，一定要在『菊花赏』赢得胜利！',
      );
      await era.printAndWait(
        '里见光钻用非常爽朗的表情，坚定且自信地立誓要取得胜利。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '迎向菊花赏';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} sats_sho
     * @param {PrintedSpan} toky_yus
     */
    const f = async (daiya, kita, you, sats_sho, toky_yus) => {
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
        `${you.name} 认为这对里见光钻来说，是一个相当好的预兆。`,
      );
      await kita.say_and_wait('啊，小钻出来了！');
      await you.say_as_passer_by_and_wait(
        '观众A',
        '喔，是里见光钻！看起来很有干劲的样子，感觉很不错！',
      );
      await you.say_as_passer_by_and_wait('观众B', [
        `照${daiya.sex}采访时说的话来看，${daiya.sex}好像觉得在`,
        sats_sho,
        ' 和 ',
        toky_yus,
        ' 的时候，都没有完全发挥到真正的实力。',
      ]);
      await you.say_as_passer_by_and_wait(
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
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_end: (() => {
    const title = '克己';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {number} rank 比赛名次
     * @param sats_sho
     * @param toky_yus
     * @param arim_kin
     */
    const f = async (daiya, kita, you, rank, sats_sho, toky_yus, arim_kin) => {
      await daiya.say_and_wait(
        '照这个样子看来……接下来要开始抢位了，暂时先撑在这个位置……',
        true,
      );
      await era.printAndWait(
        '实况「从内侧开始进攻了！在这个时机点进攻了！后方的选手们也跟着冲上来了！」',
      );
      await daiya.say_and_wait('还不是时候。要忍耐。照我自己的步调……', true);
      await daiya.say_and_wait('──就是现在！！');
      await daiya.say_and_wait('喝啊啊啊啊啊啊啊啊啊啊！！');
      await era.printAndWait(
        '实况「来了──！！是里见光钻！发动了她利落的尾段加速能力──！」',
      );
      if (rank === 1) {
        await era.printAndWait(
          `实况「第一名是里见光钻！！${daiya.sex}用金刚石无坚不摧的实力打破了所有障碍──！」`,
        );
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊！');
        await kita.say_and_wait('好耶！太好了、太好了、太好啦──────！！');
        await kita.say_and_wait('小钻！你成功了，小钻！！');
        await you.say_as_passer_by_and_wait(
          '观众A',
          '真厉害……我起鸡皮疙瘩了……！里见光钻真的好强啊！！',
        );
        await you.say_as_passer_by_and_wait('观众B', [
          `哈哈，原来这才是${daiya.sex}真正的实力啊！这也难怪${daiya.sex}会说 `,
          sats_sho,
          ' 和 ',
          toky_yus,
          ' 时，不满意自己的表现了！',
        ]);
        await kita.say_and_wait('……小钻果然真的很厉害！');
      } else {
        await era.printAndWait(
          '实况「里见光钻虽然错过了成为第一名的机会，却展现出了最高级钻石该有的精彩表现！！」',
        );
        await you.say_as_passer_by_and_wait('观众', '啪啪啪啪啪！');
        await kita.say_and_wait(
          '好厉害……小钻竟然在我不知不觉间成长成这样了……！',
        );
        await kita.say_and_wait('嘿嘿嘿！好期待能跟她一起比赛喔！');
        await you.say_as_passer_by_and_wait(
          '观众A',
          '我好像……都起鸡皮疙瘩了……里见光钻的表现真的棒啊。',
        );
        await you.say_as_passer_by_and_wait('观众B', [
          '跟 ',
          sats_sho,
          ' 和 ',
          toky_yus,
          ' 时完全不一样！原来这才是里见光钻真正的实力……！',
        ]);
        await you.say_as_passer_by_and_wait(
          '观众A',
          `让我好期待${daiya.sex}的下一场比赛呢！`,
        );
      }
      await daiya.say_and_wait('呼……呼……');
      await daiya.say_and_wait('脚感觉……好轻盈…………竟然这么……', true);
      await daiya.say_and_wait('我……', true);
      await daiya.say_and_wait('我…………唔！', true);
      await daiya.say_and_wait('训练员……！');
      if (rank === 1) {
        era.printButton('「恭喜你第一名！表现得真的很好哟！」', 1);
        await era.input();
        await daiya.say_and_wait('是……！谢谢你！！');
      } else {
        era.printButton('「你表现得很好哟！」', 1);
        await era.input();
        await daiya.say_and_wait('是……！');
      }
      await daiya.say_and_wait(
        '那个，今天我觉得脚特别地轻盈！跑完比赛也完全不觉得累喔！！',
      );
      await daiya.say_and_wait('跑出了一个自己也很满意的表现！！');
      await daiya.say_and_wait('就像是挣脱了脚上的枷锁一样……！');
      await daiya.say_and_wait('……身体…………跟心情……都很轻盈……！');
      era.printButton('「看来你已经『克服』了魔咒呢」', 1);
      await era.input();
      await daiya.say_and_wait('……！');
      await daiya.say_and_wait('…………呼…………呜……');
      await era.printAndWait('一颗一颗的泪水从里见光钻的眼眶不断滴落。然后──');
      await daiya.say_and_wait('呜啊啊啊啊啊啊……！！');
      await era.printAndWait('地下道里充斥着哭声。');
      await era.printAndWait(
        `打从${daiya.sex}出生以前就一直没有停止过的里见家魔咒的传闻。这个扛在${daiya.sex}肩上的重担，可想而知有多么地沉重。`,
      );
      await era.printAndWait(
        `总是向大家宣示自己不会输给魔咒，这或许也是${daiya.sex}鼓舞自己的一种方式。`,
      );
      await era.printAndWait(`${daiya.sex}终于从这个束缚中解脱了。`);
      await daiya.say_and_wait('……嘿嘿嘿……呜……不好意思……');
      await daiya.say_and_wait(
        '……真的就像麦昆所说的一样。原来，一直以来我都是因为太在意魔咒……反而划地自限了。',
      );
      await daiya.say_and_wait('不过，现在已经没事了。我不会再受影响了！');
      await daiya.say_and_wait(
        '今后我也会继续像今天这样，用自己的步调去赢得其他G1竞赛！',
      );
      await kita.say_and_wait('我可不会让你轻易得逞喔！');
      await daiya.say_and_wait('小北！');
      if (rank === 1) {
        await kita.say_and_wait('恭喜你在『菊花赏』拿第一名，小钻！');
        await daiya.say_and_wait(
          '谢谢！去年小北跑赢的比赛……我也跑赢了喔！所以我现在要很有自信地说出口！',
        );
        await daiya.say_and_wait('小北！跟我在『有马纪念』一较高下吧！');

        await kita.say_and_wait('我很乐意！！');
        await daiya.say_and_wait('可以吧？训练员？');
        era.printButton('「当然！」', 1);
        await era.input();
      } else {
        await kita.say_and_wait('你表现得很好喔，小钻！');
        await daiya.say_and_wait('谢谢！我的表现……够资格当小北的对手了吗……？');
        await kita.say_and_wait('──小钻。');
        await kita.say_and_wait('跟我一起在『有马纪念』决胜负吧！');
        await daiya.say_and_wait('小北……！');
        await daiya.say_and_wait('……训练员，『有马纪念』……');
        era.printButton('「是啊，下一场就是『有马纪念』了！」', 1);
        await era.input();
        await daiya.say_and_wait('是！！');
      }
      await kita.say_and_wait(
        '但是小钻，你要做好心理准备！『有马纪念』的我可是跟过去都不一样的喔！',
      );
      await kita.say_and_wait(
        '在跟小钻对决之前，我会先在『日本杯』用我的跑法，把日本的心意传递给全世界！',
      );
      await daiya.say_and_wait('呵呵，我很期待那天喔！');
      await daiya.say_and_wait([
        arim_kin,
        '……让其成为对现在的我们能跑出的最棒的一场对决吧！',
      ]);
      era.drawLine();
      await era.printAndWait('那天，我们从京都赛场回程的路上。');
      await daiya.say_and_wait('呵呵呵，训练员。我今天一直处于很兴奋的状态呢♪');
      era.printButton('「就连现在也是吗？」', 1);
      await era.input();
      await daiya.say_and_wait('是的，现在也是。');
      await daiya.say_and_wait([
        '一想到可以跟小北一起跑 ',
        arim_kin,
        '，心跳就一直快得不得了。啊，比起兴奋，更大的应该是期待才对。',
      ]);
      await daiya.say_and_wait(
        '我们小时候天真烂漫的梦想，想不到即将就要变成现实了……',
      );
      era.printButton('「要和小北一起比赛的梦想吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '呵呵，当时我所想的舞台其实是G1竞赛，没想到现实却是更精彩的状况呢。',
      );
      await daiya.say_and_wait(
        `在我要成为知名赛${daiya.uma_sex_title}这个梦想的路上，小北也在……${
          kita.sex
        }以对手的身份阻挡在前。`,
      );
      await daiya.say_and_wait(
        '没有比这更像是命运的安排又令人充满期待的状况了！',
      );
      era.printButton('「真的是最棒的舞台呢」', 1);
      await era.input();
      await daiya.say_and_wait(
        `是呀，我要追上跑在我前面的小北，超越${kita.sex}，然后实现我的梦想。实现我和里见家的梦想。`,
      );
      await era.printAndWait(
        `里见光钻的眼神中没有一丝的迷惘。燃烧在${daiya.sex}眼神深处的火焰就和刚遇见时一样。炽热地熊熊燃烧着。`,
      );
      era.printButton('「首先是『有马纪念』！」', 1);
      await era.input();
      await daiya.say_and_wait('没错！这次不需要再借用任何助力了。');
      await daiya.say_and_wait(
        '成功克服魔咒的光钻一定会让小北和其他资深级的大家输得五体投地的！',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '迎向有马纪念';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, kita) => {
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
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = '昂扬';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you 玩家
     * @param {number} rank 比赛名次
     * @param sats_sho
     * @param arim_kin
     * @param sank_hai
     */
    const f = async (
      daiya,
      kita,
      etsuko,
      you,
      rank,
      sats_sho,
      arim_kin,
      sank_hai,
    ) => {
      if (rank === 1) {
        await daiya.say_and_wait('我一直不停地追逐着前面的背影。', true);
        await daiya.say_and_wait('我现在──要超越这个背影！！', true);
        await daiya.say_and_wait('呀啊啊啊啊啊啊啊啊！！');
        await you.say_as_passer_by_and_wait(
          '实况',
          `里见光钻领先冲过终点！！凭着${daiya.sex}钻石般的坚硬，击败了其他对手──！`,
        );
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊！');
        await daiya.say_and_wait('呼、呼、呼……');
        await kita.say_and_wait('……啊────！好不甘心喔！我输了────！！');
        await kita.say_and_wait('可是，真的跑得超────开心的！！');
        await daiya.say_and_wait(
          '呵呵呵呵！我也是！我也真的跑得超────开心的！！',
        );
        await daiya.say_and_wait('以后就可以常常体验到这么开心的感觉了呢！');
        await you.say_as_passer_by_and_wait(
          '观众C',
          '光钻，恭喜你────！你刚才真的很帅气喔────！！',
        );
        await you.say_as_passer_by_and_wait(
          '观众D',
          '这是一场最棒的比赛！！刚刚真的表现得很好喔，里见──！',
        );
        await kita.say_and_wait('大家都在等小钻过去！快过去吧！');
        await etsuko.say_and_wait(
          '里见光钻小姐，恭喜你！请告诉大家你现在的心情！',
        );
        await daiya.say_and_wait(
          '能在经典级的尾声完成一场这么棒的比赛，我真的觉得非常开心。',
        );
        await daiya.say_and_wait(
          '这一年……我一路以经典三冠为目标这样走来，这绝不是一条轻松的路程。',
        );
        await daiya.say_and_wait(
          '过程中我经历了许多事情，其中甚至也遭遇了一些无法预期的事情。',
        );
        await etsuko.say_and_wait('具体来说是怎样的事情呢？');
        await daiya.say_and_wait([
          '像是在 ',
          sats_sho,
          ' 的时候遇到坏天气……当时真的是超乎想像的恶劣天气。',
        ]);
        await daiya.say_and_wait(
          '闪耀系列赛的比赛有时也会让我觉得很艰难……但是，今天真的是一场非常精彩的比赛。',
        );
        await daiya.say_and_wait(
          '我也发自内心地感谢这一路以来陪伴我走到今天的各位。谢谢大家。',
        );
        await kita.say_and_wait(
          '嘿嘿嘿，我才要跟你说谢谢呢！但我下次可不会再输啰，小钻！！',
        );
        await you.say_as_passer_by_and_wait(
          '观众A',
          '喔，说得好啊──！北部！下次我也会为你加油的！',
        );
        await you.say_as_passer_by_and_wait('观众C', '光钻也要加油喔──！');
        await etsuko.say_and_wait(
          '两位是从小一起长大的儿时玩伴，之前也对外宣布彼此是竞争对手呢！你们的下一场对决已经决定好了吗？',
        );
        await daiya.say_and_wait('不，还没……');
        await kita.say_and_wait([sank_hai, '！']);
        await kita.say_and_wait([
          '我要参加 ',
          sank_hai,
          ' 喔！我要在那边雪耻！！',
        ]);
      } else {
        await daiya.say_and_wait('呼、呼、呼……');
        await kita.say_and_wait('呼、呼……小钻……你真的追上来了……！');
        await kita.say_and_wait(
          '小钻的气势连我的皮肤都感觉到了。现在都还觉得刺刺痛痛的呢。',
        );
        await daiya.say_and_wait('我也是。小北灼热的斗志都快把我给烫伤了。');
        await kita.say_and_wait('这就是比赛时的小钻……！');
        await daiya.say_and_wait('这就是比赛时的小北……！');
        await kita.say_and_wait(
          '之后我就可以常常像今天一样，跟小钻对决了呢！真的好期待喔！',
        );
        await daiya.say_and_wait('是呀！以后就可以一直跟小北一起比赛了！');
        await you.say_as_passer_by_and_wait(
          '观众A',
          '很好喔──！北部！下次我也会为你加油的！',
        );
        await you.say_as_passer_by_and_wait('观众C', '光钻也要加油喔──！');
        await kita.say_and_wait([
          '是！！谢谢大家！我的下一场比赛是……',
          sank_hai,
          '！',
        ]);
      }
      await you.say_as_passer_by_and_wait('观众', '喔喔喔喔喔喔喔！');
      await you.say_as_passer_by_and_wait(
        '观众A',
        '也就是『春季资深三冠』了吧！一定要拿下啊，北部！！',
      );
      await kita.say_and_wait('是！各位请一定要来现场观看喔！');
      await daiya.say_and_wait(['我也要参加！', '！！']);
      era.printButton('「呃……光钻！？」', 1);
      await era.input();
      await era.printAndWait(
        `下一场比赛，不，甚至连资深级的参赛方针，你们都还没有讨论过。`,
      );
      await era.printAndWait(
        `然而，里见光钻在看了 ${you.name} 一眼之后，又朝着观众席再重复了一次。`,
      );
      await daiya.say_and_wait(['我要在 ', sank_hai, ' 和小北对决！！']);
      await you.say_as_passer_by_and_wait(
        '观众B',
        `里见光钻对北部玄驹，${daiya.couple_title}的对决还要继续啊！`,
      );
      await you.say_as_passer_by_and_wait('观众A', [
        arim_kin,
        '只是一个开始……喔喔喔！今后我也会追看你们的对决的！！',
      ]);
      await era.printAndWait(
        `观众盛大的欢呼声笼罩整个看台，迟迟没有停止。这时，北部玄驹将所有参赛赛${daiya.uma_sex_title}叫来优胜者区域。`,
      );
      await era.printAndWait(
        `赛${daiya.uma_sex_title}排成一列面对着观众席。举起双手大大地左右挥动。`,
      );
      await kita.say_and_wait('各位，明年也麻烦继续支持我们了──！！');
      await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊啊！');
      era.drawLine();
      await daiya.say_and_wait('……我擅自做决定，真的很抱歉。');
      await era.printAndWait('回到休息室后，里见光钻深深地鞠躬道歉。');
      era.printButton('「下一个目标真的就决定是『大阪杯』了吗？」', 1);
      await era.input();
      await era.printAndWait(
        `距离跟时程上都没有问题。但是以防万一，${you.name} 还是要跟${
          daiya.sex
        }确认，这是否是为了成为知名赛${daiya.uma_sex_title}的梦想而做出来的决定。`,
      );
      await daiya.say_and_wait(
        '是的。毕竟『大阪杯』也是G1竞赛，所以没有问题。',
      );
      if (rank === 1) {
        await daiya.say_and_wait(
          `今天，看到小北在优胜者区域的表现……又让我认知到${kita.sex}有多了不起。`,
        );
        await daiya.say_and_wait(
          '虽然我跑赢了比赛，但我还没完全追上小北的脚步……',
        );
      } else {
        await daiya.say_and_wait(
          `今天，看到小北在比赛后的表现……又让我重新认知到${kita.sex}有多了不起。`,
        );
        await daiya.say_and_wait('……我跟小北之间的距离根本还差得很远……');
      }
      await daiya.say_and_wait(
        '训练员也看见了吧？当时看台上所有观众们的笑容，还有震荡会场的欢呼声。',
      );
      await daiya.say_and_wait(
        `小北用${kita.sex}比赛时的表现带给大家欢笑，并带动整个闪耀系列赛的热潮。`,
      );
      await daiya.say_and_wait(
        `让我深刻觉得那就是『知名赛${daiya.uma_sex_title}』的姿态。`,
      );
      await daiya.say_and_wait(
        `『知名赛${daiya.uma_sex_title}』该是什么样子，我自己还没有找到答案。`,
      );
      await daiya.say_and_wait(
        `以小北来说，${kita.sex}认真比赛的模样会让人忍不住想支持她。`,
      );
      await daiya.say_and_wait('吸引、撼动粉丝的心，那就是小北的风格。');
      await daiya.say_and_wait(
        '……身为里见家千金的我，是无法带动那样的热潮的。',
      );
      era.printButton('「光钻有光钻自己的优点」', 1);
      await era.input();
      await era.printAndWait(
        `坚定不移的坚强心志。带着高贵的气度并从不示弱是${daiya.sex}的作风。`,
      );
      await era.printAndWait(
        `相对可惜的是也因此让人较难看见${daiya.sex}的努力。明明${daiya.sex}的努力并不输给北部玄驹。时时刻刻都绽放着最耀眼的光芒。`,
      );
      await daiya.say_and_wait('呵呵，你这么说我很开心……但不用担心。');
      await daiya.say_and_wait(
        `我打算要找出属于自己的『知名赛${daiya.uma_sex_title}』该有的姿态。`,
      );
      await daiya.say_and_wait(
        `看看里见光钻我究竟能用什么方式支持赛${daiya.uma_sex_title}界……`,
      );
      await daiya.say_and_wait(
        `一边看着小北的表现，一边追着${kita.sex}的背影……我觉得这么做或许就能找到我想要的答案。`,
      );
      era.printButton('「我知道了，下一战就是『大阪杯』了呢！」', 1);
      await era.input();
      await daiya.say_and_wait('好的！训练员，要麻烦你继续照顾了！');
      await era.printAndWait(
        `『知名赛${daiya.uma_sex_title}』该有的姿态。为了寻找这个未知的答案，${
          you.name
        } 和里见光钻即将要迈入资深级。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait('新年快乐。欢迎来参加『新年派对』！');
      await era.printAndWait(
        `新年。受到里见光钻的邀约，${you.name} 来到里见集团举办的新年派对。`,
      );
      await era.printAndWait(
        '那似乎是为了让里见家的人和集团相关人士方便在新年互相拜年而举办的。',
      );
      await daiya.say_and_wait(
        '派对才刚开始就打扰你真是不好意思，但我的父母亲都希望能和训练员打声招呼。',
      );
      await era.printAndWait('光钻的父亲「新年快乐。光钻承蒙你照顾了。」');
      await era.printAndWait(
        '光钻的父亲「小女在去年的经典级赛事当中，达到超乎预期的表现。这一切都归功于训练员的教导。」',
      );
      await era.printAndWait(
        '光钻的父亲「证明当初光钻的直觉果然没有错──之后的古马级赛事也要麻烦你了。」',
      );
      era.printButton(
        `「好的。我一定会引导她成为『知名赛${daiya.uma_sex_title}』」`,
        1,
      );
      await era.input();
      await era.printAndWait('光钻的父亲「嗯，我很期待。」');
      await daiya.say_and_wait(
        '我接下来还要去跟大家打招呼，那就先稍微失陪一下了喔。',
      );
      await daiya.say_and_wait('请训练员随意放松，好好享受一番吧。');
      await era.printAndWait(
        `里见光钻的双亲在里见家也算是核心人物。因此身为${
          daiya.sex_code === 1 ? '儿子' : '女儿'
        }的${daiya.sex}似乎也很忙碌。`,
      );
      await era.printAndWait(
        '光钻的前训练员「光钻，新年快乐！你在闪耀系列赛表现得很好呢！」',
      );
      await era.printAndWait(
        '光钻的前医师「呵呵呵，原本还这么小的光钻现在也已经有很好的成就了，每次看比赛的时候我都很感慨呢。」',
      );
      await daiya.say_and_wait('新年快乐。训练员、医师，好久不见了。');
      await daiya.say_and_wait(
        '托你们的福我才能有今天。跑步的基础也都是经由训练员你们帮我奠定的。我真的由衷地感谢。',
      );
      await era.printAndWait(
        '光钻的前训练员「其实我现在都跟我的学生炫耀，说我曾经是光钻的训练员呢！学生们听了都觉得很佩服喔！」',
      );
      await daiya.say_and_wait(
        '哎呀，呵呵呵。那我真是深感光荣♪但训练员明明在指导我之前，就已经是广为人知的好训练员了。',
      );
      await daiya.say_and_wait(
        '医师在营养学界也是德高望重的教授。能够得到两位如此优秀人才的指导，我才是因此令人称羡呢。',
      );
      await era.printAndWait(
        '光钻的前医师「哎呀，真会说话。已经完全是担得起里见集团招牌的气度了。」',
      );
      await daiya.say_and_wait('哪里，我还差得远呢。');
      await daiya.say_and_wait(
        `我还在努力钻研身为『知名赛${daiya.uma_sex_title}』应该要有的样子。`,
      );
      await era.printAndWait(
        `光钻的前训练员「成为了知名赛${daiya.uma_sex_title}……就代表国外远征也会在计划范围内啰？」`,
      );
      await era.printAndWait(
        '运动产品公司的业务员「如果有国外远征的计划，敝公司能为您准备适合国外使用的训练机器及运动鞋喔。」',
      );
      await era.printAndWait(
        '运动产品公司的业务员「也能为光钻小姐开发量身打造的产品。需要时请随时吩咐。」',
      );
      await daiya.say_and_wait(
        '贵公司之前为我们打造的训练机器，我在家的时候还是很爱用呢。',
      );
      await daiya.say_and_wait('需要新机器的时候，能再麻烦贵公司帮忙开发吗？');
      await era.printAndWait(
        '运动产品公司的业务员「当然没问题。光钻小姐是里见集团之星。敝公司一定会为您尽最大的努力。」',
      );
      await daiya.say_and_wait('谢谢。那我近期再和贵公司联络♪');
      await era.printAndWait(
        '优秀的训练员、一流的医师，加上运动产品公司的协助……',
      );
      await era.printAndWait(
        `里见光钻从小就在资源丰富的环境下长大。这也来自于${daiya.sex}背负众多期待的关系吧。`,
      );
      await era.printAndWait(
        `相对地，${daiya.sex}所背负的责任也更为沉重。${daiya.sex}必须用实际的成绩来报答所受的恩惠。与期望相随的是无法躲避的责任。`,
      );
      era.printButton(
        `──资深级的这一年，我一定要和${daiya.sex}一起创下名为胜利的结果！`,
        1,
      );
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `新年派对结束后，${you.name} 和里见光钻一起去新年参拜。`,
      );
      await daiya.say_and_wait('──训练员，你许愿许得真久呀。');
      era.printButton('「因为我要向神明表明决心嘛」', 1);
      await era.input();
      await daiya.say_and_wait('是跟我的比赛有关的事情吗？');
      era.printButton('「当然」', 1);
      await era.input();
      await daiya.say_and_wait('那样的话，我原本也想一起向神明表明决心的说……');
      await daiya.say_and_wait(
        '不过因为意外看见了训练员认真的表情，所以就不计较了♪呵呵呵！',
      );
      await daiya.say_and_wait('那么，接下来的时间……训练员有什么打算吗？');
      await daiya.say_and_wait(
        '不介意的话，我想要知道训练员都是怎么过新年的！',
      );
      await daiya.say_and_wait('因为我家和小北家，都一定会办人数很多的宴会。');
      await daiya.say_and_wait(
        '所以我想要了解除了办派对跟宴会以外，还有什么其他过新年的方式！请让我和你一起过吧！',
      );
      await era.printAndWait(
        '本来以为只是口头叙述过新年的方式就好，没想到不知不觉间就变成要一起过新年了。',
      );
      await era.printAndWait(
        `说到过新年，${you.name} 一直以来都会做的事情是──`,
      );
      era.printButton('「躺过年」（体力+300）', 1);
      era.printButton('「买福袋」（全属性+10）', 2);
      era.printButton('「写新年抱负」（技能点数+70）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait(
            '……这么早就要睡了吗？是为了练习做新年美梦之类的吗──',
          );
          await era.printAndWait(
            '我向她说明虽然有些人会真的睡觉，但其实也代表不出门，在家悠闲度过的意思。',
          );
          await daiya.say_and_wait(
            '哎呀，刚过新年就在家懒懒散散的吗……有种会充满罪恶感的感觉呢♪那我们就一起躺过年吧！',
          );
          await era.printAndWait(
            `你们决定一起在训练员室里，一边吃零食，一边看新年特别节目。`,
          );
          await daiya.say_and_wait(
            '……这些人明明是参加巴士之旅，却几乎都在走路呢……',
          );
          await daiya.say_and_wait('哇啊！这个鳗鱼饭看起来好好吃……！');
          era.printButton('「看了真的会想吃呢」', 1);
          await era.input();
          await daiya.say_and_wait(
            '今天好像也有营业的样子，不如我们就叫外送来吃吧。',
          );
          era.printButton('「这可不是能外送过来的距离耶！？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '没问题的，毕竟我和训练员都这么努力，这点小任性，父亲还是会愿意听的♪',
          );
          await era.printAndWait(
            `于是──你们一起享用了用新干线外送过来的美味鳗鱼饭。`,
          );
          break;
        case 2:
          await daiya.say_and_wait(
            '福袋！那个真的会让人充满期待呢！我也想要买！',
          );
          await era.printAndWait(
            `为了买福袋，${you.name} 和里见光钻一起来到购物中心。`,
          );
          await daiya.say_and_wait(
            '要挑哪一家店好呢……哎呀，还有食物跟茶的福袋呢。',
          );
          era.printButton('「要选那个看看吗？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '如果是食物的话，就算拿到自己不喜欢吃的，也能拿去分送给其他人。那我们就挑那个吧！',
          );
          await daiya.say_and_wait(
            '好多人排队呢……感觉还要等一段时间，等的时间干脆来玩观察力问答游戏吧。',
          );
          await daiya.say_and_wait('我们来猜路过的行人会走进去哪一间店！');
          era.printButton('「好！」', 1);
          await era.input();
          await daiya.say_and_wait(
            '那就从那边那位身穿羽绒外套的男性开始。我猜他会走进咖啡厅！',
          );
          era.printButton('「我猜他应该是要去楼上的书店」', 1);
          await era.input();
          await daiya.say_and_wait(
            '…………啊，他走进咖啡听了！呵呵呵，是我猜对了呢♪因为他刚才看起来很疲倦的样子。',
          );
          await daiya.say_and_wait(
            '玩游戏让时间过得好快呢。好了，我们就赶快回去开福袋吧！',
          );
          await era.printAndWait(
            `你们一起度过了愉快的排队时间，也顺利买到了福袋！`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            '写新年抱负吗……既然如此的话，那我想要写一幅大张的！',
          );
          era.printButton('「你是说书法表演艺术吗？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '是的！大毛笔跟宣纸我会请家里的人去帮忙买！',
          );
          await era.printAndWait(
            `所幸过年时间没有人在使用，让你们借到了体育馆，来完成书法表演艺术。`,
          );
          await daiya.say_and_wait(
            '嗯……不先模拟好要怎么写的话，感觉会拿捏不了比例呢。',
          );
          await era.printAndWait(
            `里见光钻在宣纸前仔细地模拟一番后，开始用几乎和${daiya.sex}同高的毛笔一鼓作气地写字。`,
          );
          await daiya.say_and_wait('嘿呀啊啊啊啊啊啊！喝！嘿呀！嘿！');
          await daiya.say_and_wait('呼────！我写得怎么样呢？训练员！');
          await era.printAndWait(
            `于是，${daiya.sex}用非常优美的字体，写出了『成就宿愿』四个大字！`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = '抽奖试手气！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {number} result 抽奖结果，0 - 特等奖温泉旅行券，1-3 - 一到三等奖（胡萝卜汉堡排、整堆胡萝卜、一根胡萝卜），4 - 卫生纸
     */
    const f = async (daiya, you, result) => {
      await era.printAndWait(`回程路上，${you.name} 和里见光钻经过商店街时──`);
      await era.printAndWait(
        '商店街人员「看过来看过来，现正举办新春大抽奖～！特等奖可是『温泉旅游券』！」',
      );
      await era.printAndWait(
        '商店街人员「一等奖是『特等胡萝卜汉堡排』，二等奖是『一整堆胡萝卜』，三等奖则是『一根胡萝卜』！」',
      );
      await era.printAndWait(
        '商店街人员「来喔来喔，是好玩的抽奖活动喔！任何人都可以来抽喔～！」',
      );
      await daiya.say_and_wait('哇啊，在办抽奖呢！');
      await daiya.say_and_wait(
        '那个是……手转的抽奖机！抽奖还是要用这种的最有感觉了！',
      );
      era.printButton('「有什么特别讲究的原因吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '因为手转的抽奖机要自己动手转动，所以就能调整力道跟速度不是吗？',
      );
      await daiya.say_and_wait(
        '有一种凭自己的力量去掌握好运的感觉，就是这种感觉很好！',
      );
      era.printButton('「要抽看看吗？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 想起买东西的时候有得到一张抽奖券，便问${daiya.sex}要不要尝试。`,
      );
      await daiya.say_and_wait('我想抽！！我一定会抽到特等奖的！');
      await daiya.say_and_wait('嘿呀～～！！');
      await era.printAndWait('里见光钻用非常惊人的气势转动了抽奖机的把手！');
      await era.printAndWait('结果是──');
      switch (result) {
        case 0:
          await era.printAndWait(
            '商店街人员「天啊！恭喜────！！抽到特等奖『温泉旅游券』了～～～～！！」',
          );
          await era.printAndWait('获得了「温泉旅游券」。');
          await daiya.say_and_wait(
            '成……成功了～～！！特等奖！是特等奖喔，训练员！！',
          );
          await daiya.say_and_wait(
            '你看吧？对吧？我说得没错对吧?好运就是要用气势去争取的！！',
          );
          era.printButton('「嗯，你真厉害呢……！」', 1);
          await era.input();
          await era.printAndWait(
            `没想到真的如${daiya.sex}所说的抽到了特等奖，真的有种凭气势赢得好运的感觉。`,
          );
          await daiya.say_and_wait('呵呵呵，感觉今年会是美好的一年呢♪');
          era.printButton('「你就和北部一起去泡温泉吧」', 1);
          await era.input();
          await daiya.say_and_wait(
            '不，我要给训练员。因为抽奖券是训练员的嘛。',
          );
          await daiya.say_and_wait('能体验到抽奖我就已经很满足了！');
          era.printButton('「可是抽中的人是你呀……」', 1);
          await era.input();
          await daiya.say_and_wait('不然，就我跟训练员一起去吧。');
          await daiya.say_and_wait(
            '就当作是慰劳之旅。嗯，这样比较好！就这么决定了！',
          );
          await daiya.say_and_wait(
            '等闪耀系列赛最初的三年告一段落的时候，我们再一起去这趟慰劳之旅吧！结束一个阶段就是该好好庆祝才对！',
          );
          await daiya.say_and_wait('而且，有奖励的话，做事也会更起劲吧？');
          era.printButton('「是呀」', 1);
          await era.input();
          await daiya.say_and_wait('那就这么决定了！约好了喔！');
          await era.printAndWait(
            `你们约好要在资深级这一年留下满意的成绩。完成之后再一起使用这张旅游券。`,
          );
          break;
        case 1:
          await era.printAndWait(
            '商店街人员「恭喜抽到一等奖～！奖品是『特等胡萝卜汉堡排』！」',
          );
          await era.printAndWait('获得了「特等胡萝卜汉堡排」。');
          await daiya.say_and_wait('哎呀，胡萝卜汉堡排……！');
          await daiya.say_and_wait(
            '这个豪迈的造型还真是不错。在我家吃胡萝卜的时候都会是切好的，所以我一直很期待能体验到这样的外食经验呢♪',
          );
          await daiya.say_and_wait(
            '我可以在这根胡萝卜立着的状态下把它吃干净喔！',
          );
          era.printButton('「从头到尾都立着！？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '是呀♪首先要从胡萝卜上面的……实际吃给你看应该比较快。训练员，我们就一起吃吧！',
          );
          await daiya.say_and_wait('呵呵呵，让你见识一下……光钻的秘技！');
          await era.printAndWait(
            '里见光钻优雅地用着刀叉，在完全不弄倒胡萝卜的状态下，慢慢地吃着汉堡排。',
          );
          await daiya.say_and_wait(
            '……感谢招待。不愧是特等的料理，真的很好吃！',
          );
          era.printButton('「你的刀法真是太厉害了……！」', 1);
          await era.input();
          await daiya.say_and_wait(
            '嘿嘿嘿……因为我以前听说有吃胡萝卜汉堡排的时候，胡萝卜倒下的方位会充满不幸的魔咒。',
          );
          await daiya.say_and_wait(
            '所以就想着，不让胡萝卜倒下就不会有不幸的方位，才练成了这样的技术喔。',
          );
          era.printButton('「你是为了破除魔咒练的？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '是呀，每个人看到的时候都会很惊讶，还能当作一个聊天的话题呢。训练员要不要也试试看？',
          );
          await era.printAndWait(
            `后来，里见光钻传授 ${you.name} ${daiya.sex}的秘技，让 ${you.name} 学会了不让胡萝卜倒下的吃法！`,
          );
          break;
        case 2:
          await era.printAndWait(
            '商店街人员「二等奖～！！奖品是『一整堆胡萝卜』！」',
          );
          await era.printAndWait('获得了「一整堆胡萝卜」。');
          await daiya.say_and_wait('哇啊～得到了好多的胡萝卜呀♪');
          await daiya.say_and_wait(
            '训练员，你带回去吧。毕竟抽奖券是训练员的嘛。',
          );
          era.printButton('「这么多我哪吃得完！」', 1);
          await era.input();
          await daiya.say_and_wait('哎呀……不然就分给宿舍的大家好了。');
          await daiya.say_and_wait(
            '就这样直接吃也很无趣，做成料理之后再分给大家吧♪',
          );
          era.printButton('「你打算做什么呢？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '其实我一直有个想要做做看的料理……那就是胡萝卜鲷鱼烧！！',
          );
          await daiya.say_and_wait(
            '在鲷鱼烧里面加入大家最喜欢的胡萝卜当内馅。再加醋腌胡萝卜丝提味。',
          );
          await daiya.say_and_wait(
            '饼皮里面也加胡萝卜……再加一些胡萝卜片进去！就会变成橘色的可爱鲷鱼烧喔♪',
          );
          await daiya.say_and_wait(
            '然后再插一根完整的胡萝卜在上面！就像胡萝卜汉堡排那样！！',
          );
          era.printButton('「真、真是新潮的作法……」', 1);
          await era.input();
          await daiya.say_and_wait(
            '训练员也这么觉得吗？成功的话，我打算让它成为集团饮食部的新菜色呢♪',
          );
          await era.printAndWait(
            `因为这道料理新潮到让 ${you.name} 觉得不放心，所以 ${you.name} 提出要帮忙一起做。`,
          );
          await era.printAndWait(
            `隔天──里见光钻向 ${you.name} 报告，栗东宿舍的大家非常喜欢「胡萝卜鲷鱼烧」的事情。`,
          );
          break;
        case 3:
          await era.printAndWait(
            '商店街人员「三等奖～！奖品是『一根胡萝卜』！」',
          );
          await era.printAndWait('获得了「一根胡萝卜」。');
          await daiya.say_and_wait(
            '一根……真的很抱歉，训练员。枉费你宝贵的抽奖券……',
          );
          await daiya.say_and_wait('应该是我的气势不够……');
          era.printButton('「那就吃这根胡萝卜补充精神吧！」', 1);
          await era.input();
          await daiya.say_and_wait('咦……？真的要给我吃吗……？');
          era.printButton('「你就吃吧！」', 1);
          await era.input();
          await daiya.say_and_wait(
            '要把就这么唯一一根的珍贵胡萝卜给我……谢谢你。',
          );
          await daiya.say_and_wait('…………呵呵。');
          await daiya.say_and_wait(
            '训练员送给我的胡萝卜……世界上唯一一根的只属于我的胡萝卜……',
          );
          await daiya.say_and_wait('吃起来一定是世界第一的美味吧♪');
          await era.printAndWait(
            '里见光钻开心比什么都重要。──但商店街的人却因为世界第一的美味这句话而倍感压力。',
          );
          break;
        case 4:
          await era.printAndWait(
            '商店街人员「很可惜，没抽中！参加奖是『卫生纸』喔～」',
          );
          await era.printAndWait('获得了「卫生纸」。');
          await daiya.say_and_wait('…………没抽中吗…………？');
          await daiya.say_and_wait('…………一次。');
          await daiya.say_and_wait('我要再抽一次！');
          await daiya.say_and_wait(
            '我绝不接受没抽中这个结果！我一定要颠覆这个结果！！',
          );
          await era.printAndWait('商店街人员「呃……请问你还有抽奖券吗？」');
          await daiya.say_and_wait('没有，要在哪里购买呢？');
          await era.printAndWait(
            '商店街人员「我们没有在贩卖抽奖券耶～因为在商店街买东西就可以得到──」',
          );
          await daiya.say_and_wait(
            '只要买东西就可以得到了是吗！？那我去买了！',
          );
          era.printButton('「等一下！先冷静下来吧！？」', 1);
          await era.input();
          await daiya.say_and_wait(
            `请不要阻止我！！身为里见家的赛${daiya.uma_sex_title}，我绝不能逃避这个困难！`,
          );
          await era.printAndWait(
            `看来是${daiya.sex}对抗厄运的决心被点燃了，就像${daiya.sex}执着于破除魔咒一样。──不对，也有可能只是单纯不服气而已……`,
          );
          await daiya.say_and_wait('我的钱包就在……啊！？');
          await era.printAndWait(
            `这天，里见光钻似乎把钱包放在宿舍忘了带出门。多亏如此，才浇熄了${daiya.sex}想继续拼抽奖的念头。`,
          );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, you) => {
      await daiya.say_and_wait('情人节快乐♪训练员！');
      await daiya.say_and_wait('我们出发吧！');
      era.printButton('「要去哪里！？」', 1);
      await era.input();
      await daiya.say_and_wait('呵呵呵，到了你就知道了♪');
      await era.printAndWait(
        `情人节。里见光钻不知为何，突然拉着 ${you.name} 出门。你们抵达的地方是……`,
      );
      await era.printAndWait(
        '没什么特别的，我们来到的是栗东宿舍前。宿舍的大门前摆着一台看起来很陌生的大机器。',
      );
      era.printButton('「那台起重机跟大量的箱子是怎么回事！？」', 1);
      await era.input();
      await daiya.say_and_wait('嘿嘿，这是为你准备的情人节惊喜！');
      await daiya.say_and_wait('我特地为了训练员准备的巨型夹娃娃机！');
      await daiya.say_and_wait(
        '规则就跟普通的夹娃娃机一样。等一下会把人吊在起重机上面，然后亲自下去抓奖品上来。',
      );
      await era.printAndWait('也就是说，这是个由人来充当夹娃娃机爪子的游戏。');
      await daiya.say_and_wait(
        '毕竟是难得的情人节嘛。想说还是要有点惊喜比较好，所以我做了很多的功课呢。',
      );
      await daiya.say_and_wait(
        '然后就被我发现，里见集团旗下的子公司曾经办过巨型夹娃娃机活动的报导！',
      );
      await daiya.say_and_wait(
        '因为看起来实在是非常有趣，所以我就借用了一下器材跟工作人员♪',
      );
      await daiya.say_and_wait(
        '奖品是情人节的巧克力！我准备了非常多的种类，你就自己挑选喜欢的拿吧！',
      );
      await daiya.say_and_wait(
        '从杂货店的巧克力到知名店的限量巧克力都有，种类相当丰富喔。',
      );
      await daiya.say_and_wait(
        '只要说出你想移动的方向，工作人员就会操作起重机帮助你移动♪',
      );
      era.printButton('「该不会接下来要当爪子就是……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是的，就是训练员喔！这是光钻为你准备的特别情人节，就请你尽情地享受吧！',
      );
      await era.printAndWait(
        `……这的确是好奇心旺盛的里见光钻会想到的主意。身为${daiya.sex}的训练员，看来 ${you.name} 也只能做好觉悟了……！`,
      );
      await daiya.say_and_wait('训练员～！要说出想移动的方向喔～！');
      era.printButton('「到、到这附近就可以了……！」', 1);
      await era.input();
      await daiya.say_and_wait(`好～～的！那就请慢慢放 ${you.sex} 下去吧──！`);
      await era.printAndWait(
        `不愧是熟练于操作起重机的工作人员。多亏了工作人员熟练且稳定的操作，${you.name} 才能安心地降落到巧克力山中。`,
      );
      await era.printAndWait(
        `不如说，${you.name} 开始觉得有趣了！${you.name} 伸手收集靠近手边的巧克力，两手抓得满满的。`,
      );
      await daiya.say_and_wait(
        '哇啊！训练员真厉害！这完美的平衡感……真是有一套！',
      );
      await daiya.say_and_wait(
        '哎呀，还要再拿一个吗！？要小心不要弄掉了喔……！',
      );
      await daiya.say_and_wait(
        `呵呵，看来是玩得很投入呢。能让${you.sex}玩得开心真是太好了♪`,
      );
      era.drawLine();
      await daiya.say_and_wait('训练员，你真是太厉害了！我都看得入迷了呢！');
      await daiya.say_and_wait('而且……呵呵呵，你看起来很开心的样子。');
      era.printButton('「我玩得很开心喔！」', 1);
      await era.input();
      await daiya.say_and_wait('嘿嘿嘿，我好高兴……♪');
      await daiya.say_and_wait(
        '比赛之外的令人开心的事情……如果也能像这样跟训练员分享的话就太好了呢。',
      );
      era.printButton('「就是呀！」', 1);
      await era.input();
      await daiya.say_and_wait('啊，巧克力！请你不要客气，尽管吃喔！');
      await daiya.say_and_wait(
        '回去之后，我也会一边回想今天的事情，一边品尝巧克力的。',
      );
      await era.printAndWait(
        `在巨型夹娃娃机拿到了大量巧克力。${you.name} 想这肯定能让我日后在每一次吃的时候，都回想起${daiya.sex}的笑容吧。`,
      );
      await era.printAndWait(
        `不如说，${you.name} 开始觉得有趣了！${you.name} 伸手收集靠近手边的巧克力。`,
      );
      era.printButton('「这是……？」', 1);
      await era.input();
      await daiya.say_and_wait('啊……！那个巧克力是……！');
      await era.printAndWait(
        `唯独一个看起来包装有点变形的巧克力。${you.name} 开始摆动身体，试图要伸手去拿那一个充满手工感的巧克力。`,
      );
      await daiya.say_and_wait('训、训练员！不要逞强去拿呀……！');
      await daiya.say_and_wait('啊啊，刚才好不容易拿到的巧克力都掉了……');
      await daiya.say_and_wait(`……${you.sex}该不会是察觉到了吧……？`);
      await era.printAndWait(
        `${you.name} 在巨型夹娃娃机获得了不错的战果。更重要的是，${you.name} 成功拿到了包装有点变形的巧克力！`,
      );
      era.drawLine();
      await daiya.say_and_wait('……那个……是我自己做的巧克力。');
      era.printButton('「我就知道！」', 1);
      await era.input();
      await daiya.say_and_wait('果然，你也猜到那是我亲手做的而去拿了呢……');
      await daiya.say_and_wait('真是的……');
      era.printButton('「我可以吃吗？」', 1);
      await era.input();
      await daiya.say_and_wait('……好的，请享用。');
      await era.printAndWait(
        `${you.name} 拆开包装，从排列整齐的巧克力中拿起一颗放进嘴里。`,
      );
      await era.printAndWait(
        '……该怎么说呢？是种很奇妙的味道。应该算得上是好吃，但却很难用言语形容。',
      );
      await daiya.say_and_wait('味道很奇怪对吧……？');
      era.printButton('「虽然好吃，但味道很奇妙……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是呀。我想要挑战做出稀奇的口味，结果却变成这么奇妙的味道……',
      );
      await daiya.say_and_wait(
        '我自己试吃之后虽然觉得不难吃，但又很犹豫这样的巧克力到底该不该送给你……',
      );
      await daiya.say_and_wait(
        '你愿意品尝我做的巧克力，我真的非常感谢！这样对我来说就已经足够了……！',
      );
      era.printButton('「要不要一起找适合搭配这个巧克力的东西？」', 1);
      await era.input();
      await daiya.say_and_wait('咦……？');
      await era.printAndWait(
        `${you.name} 觉得只要再多添加某种味道，这个巧克力应该就会变得更好吃。所以 ${you.name} 提议去寻找食材。`,
      );
      await daiya.say_and_wait(
        '原来如此……也就是搭配水果跟点心一起吃，看看什么组合比较好吃对吧。',
      );
      await daiya.say_and_wait('感觉很有趣呢！就这么办吧！');
      await era.printAndWait(`你们为了让巧克力变得更好吃，开始挑战各种尝试。`);
      await era.printAndWait('结果，里见光钻亲手做的巧克力跟火龙果是最搭的。');
      await daiya.say_and_wait(
        '呵呵呵，这等于是我跟训练员一起完成的绝无仅有的巧克力呢。',
      );
      await daiya.say_and_wait(
        '虽然它非常地好吃……但这个配方我绝不会告诉任何人。这是只属于我们两个人的秘密♪',
      );
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '迎向大阪杯';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, kita, you) => {
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
        `观众A「北部玄驹对里见光钻……没想到还能再看到这个组合的对决！希望${daiya.couple_title}都能好好加油呢！」`,
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
        `……觉得好像哪里不太一样。${you.name} 察觉到北部玄驹和平时的感觉不太一样。`,
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
    };
    f.title = title;
    return f;
  })(),
  sank_hai_end: (() => {
    const title = '共鸣';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {number} rank 比赛名次
     * @param {PrintedSpan} tenn_spr
     */
    const f = async (daiya, teio, mcqueen, kita, you, rank, tenn_spr) => {
      if (rank === 1) {
        await you.say_as_passer_by_and_wait(
          '实况',
          '钻石的光芒没有一丝的阴影！成功称霸『大阪杯』的是里见光钻！',
        );
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
        await you.say_as_passer_by_and_wait(
          '观众C',
          '真的是完全没有破绽啊，里见光钻！今天的跑姿依然非常亮眼。',
        );
        await you.say_as_passer_by_and_wait(
          '观众B',
          `${daiya.sex}的实力就像是去年崛起的北部玄驹一样……不对，甚至可以说是超越了……」`,
        );
        await you.say_as_passer_by_and_wait(
          '观众A',
          '北部玄驹也不是会就这样没落的角色。里见对北部，今后还很有看头呢……！',
        );
      } else {
        await you.say_as_passer_by_and_wait(
          '实况',
          `北部玄驹不给人靠近的机会！${daiya.sex}为去年雪耻了，今天又是一场北部祭典！」`,
        );
        await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
        await you.say_as_passer_by_and_wait(
          '观众B',
          '哎呀，真是了不起的风范啊！看来你又变得更强了呢，北部玄驹！！',
        );
        await you.say_as_passer_by_and_wait(
          '观众A',
          `年度代表赛${daiya.uma_sex_title}的实力今年也丝毫不减呢！`,
        );
        await you.say_as_passer_by_and_wait(
          '观众C',
          '里见光钻也感觉很有前途喔。绝不会就这样一直输下去的吧。北部对里见的对决，今后也不能错过！',
        );
      }
      await teio.say_and_wait('嗯嗯，小北跟小钻都长大了呢！');
      await mcqueen.say_and_wait(
        '你这是用什么身份的角度在说的啊……不过，我也是这么想的。',
      );
      await teio.say_and_wait(
        `看着${daiya.couple_title}比赛的样子，让我忍不住想起我跟你对决的时候。`,
      );
      await mcqueen.say_and_wait(['你是在说 ', tenn_spr, ' 吧。']);
      await mcqueen.say_and_wait(
        `说不定……${daiya.couple_title}的下一场比赛也会是呢。`,
      );
      await teio.say_and_wait('说不定喔～是说，麦昆。');
      await teio.say_and_wait('我现在觉得超～～～～想要跑步的！');
      await mcqueen.say_and_wait('哎呀，还真巧呢。我也是这么想的。');
      await teio.say_and_wait('那我们一起跑到车站吧！');
      await mcqueen.say_and_wait('好啊，就这么做吧。');
      era.drawLine();
      if (rank === 1) {
        await kita.say_and_wait(
          '唔啊啊啊啊啊，好不甘心！！我的目标是要称霸资深级正统路线耶！',
        );
        await kita.say_and_wait('居然第一场就失败了，可恶──！！');
        await daiya.say_and_wait('小、小北……！');
        await kita.say_and_wait(
          '我完全甩不开小钻！我明明一直都是做非常严苛的训练耶。',
        );
        await kita.say_and_wait(
          '但是小钻还是追上来了！不对，不如说会被超越什么的，是因为我最后太掉以轻心了！',
        );
        await kita.say_and_wait('可恶可恶可恶！真不愧是小钻耶！');
        await daiya.say_and_wait(
          '嘿嘿嘿！我为了不被小北给甩开，真的非常拼命呢！',
        );
        await kita.say_and_wait(
          '可以跟小钻认真对决，我真的好开心！我还想要一起跑更多比赛！',
        );
        await kita.say_and_wait([
          '我想要跑赢认真的小钻！所以……我希望你能参加 ',
          tenn_spr,
          '！',
        ]);
      } else {
        await kita.say_and_wait(
          '好耶────！！我拿下大阪杯了──！完成第一个目标！！',
        );
        await daiya.say_and_wait('唔……！');
        await daiya.say_and_wait(
          '果然，小北已经比之前在『有马纪念』的时候，又变得更强了……！',
          true,
        );
        await daiya.say_and_wait('本以为跑步的实力已经追上小北了……', true);
        await daiya.say_and_wait('但小北又进步得更多了！', true);
        await daiya.say_and_wait('……本来以为自己有办法追上的。又被甩开了……');
        await kita.say_and_wait('我为了不输给小钻，可是非常拼命地努力了呢！');
        await kita.say_and_wait('就是自从在『有马纪念』体验到小钻的实力之后。');
        await daiya.say_and_wait(
          '我本来也以为自己够努力了，看来是还完全不够呀……',
        );
        await daiya.say_and_wait(
          '不过！我也还能更加努力！所以下次一定会是我赢的！！',
        );
        await kita.say_and_wait(
          '嗯，我们还要再比喔，小钻！我也还想跟小钻一起跑更多比赛！',
        );
        await kita.say_and_wait('想要赢过小钻的这个想法能够让我变得更强！');
        await kita.say_and_wait([tenn_spr, '！！我希望小钻也可以参加！']);
      }
      await daiya.say_and_wait([
        tenn_spr,
        '……那是关系到小北能不能连霸的比赛吧。',
      ]);
      await kita.say_and_wait(
        '嗯！G1最长距离的3200米竞赛，我想跟小钻一起跑跑看！',
      );
      await kita.say_and_wait('你再跟训练员一起讨论，考虑看看吧。');
      await kita.say_and_wait('我会在京都等你的！！');
      era.drawLine();
      await daiya.say_and_wait('……训练员，关于下一场比赛……');
      era.printButton('「你想参加的是『天皇赏（春）』对吧？」', 1);
      await era.input();
      await daiya.say_and_wait('是的！不过……你怎么知道？');
      await era.printAndWait(
        `里见光钻曾说过，${
          daiya.sex
        }要追着北部玄驹的背影，找到身为「知名赛${daiya.uma_sex_title}』该有姿态的答案。`,
      );
      await era.printAndWait(
        `因此，${you.name} 预设${daiya.sex}会想跟北部玄驹参加同一场比赛。`,
      );
      await era.printAndWait([
        `加上以里见光钻的个性来说，${daiya.sex}甚至会特意选择对北部玄驹较为有利且准备挑战连霸的 `,
        tenn_spr,
        ' 来对决。',
      ]);
      await daiya.say_and_wait(
        '全都被你看穿了呢……嗯，这么看来，以后我自己做决定应该也没问题了。',
      );
      era.printButton('「不行，还是要跟我商量一下吧！？」', 1);
      await era.input();
      await daiya.say_and_wait('呵呵呵，我开玩笑的♪');
      if (rank === 1) {
        await daiya.say_and_wait([
          '那下一场比赛就确定是 ',
          tenn_spr,
          ' 了。我要为里见家争夺那面历史悠久且充满荣誉的盾形奖牌。',
        ]);
      } else {
        await daiya.say_and_wait(
          `我因为实力还不足以成为『知名赛${daiya.uma_sex_title}』，今天才会落败。`,
        );
        await daiya.say_and_wait([
          '所以我下次一定要在 ',
          tenn_spr,
          ' 赢过小北……！！',
        ]);
        await daiya.say_and_wait(
          '然后，我要为里见家争夺那面历史悠久且充满荣誉的盾形奖牌。',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} condor 神鹰
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} sirius 天狼星象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, gs, condor, coffee, festa, sirius, you) => {
      await era.printAndWait(
        `今天是春季的粉丝大感谢祭。赛${daiya.uma_sex_title}们跟现场众多的粉丝进行各种互动。`,
      );
      await era.printAndWait(
        `里见光钻也被女性粉丝围绕，${daiya.couple_title}正在聊天。`,
      );
      await era.printAndWait('光钻的粉丝A「我真的非常喜欢光钻跑步的样子！！」');
      await era.printAndWait(
        '光钻的粉丝A「专心盯着前方冲刺的模样，又漂亮又帅气……！」',
      );
      await daiya.say_and_wait('哇啊啊，我真开心！！你一直都支持着我呢！');
      await era.printAndWait(
        `光钻的粉丝A「是的！为了想亲眼看到光钻的模样，我之前还和${daiya.sex}一起第一次到现场观看比赛喔！」`,
      );
      await era.printAndWait(
        '光钻的粉丝B「我们到现场去看了『菊花赏』，连我也喜欢上光钻了！！胜者舞台的表现也好可爱！」',
      );
      await daiya.say_and_wait(
        '哎呀，那是你第一次去赛场吗！？谢谢你为了我到现场支持！',
      );
      await era.printAndWait(
        '光钻的粉丝A「本来不好意思打扰你的……能像这样跟你说话……真、真的很感动……！」',
      );
      await daiya.say_and_wait(
        '嘿嘿嘿，你们来找我说话，也让我觉得心情非常愉快喔♪',
      );
      await era.printAndWait(
        '光钻的粉丝B「请问一下，光钻今天也有参加什么活动吗？」',
      );
      await daiya.say_and_wait(
        '我会参加『无情大翻牌游戏』！到时候会把很大张的卡牌排列在操场上，然后来玩翻牌游戏喔♪',
      );
      await era.printAndWait('光钻的粉丝B「……『无情』的意思是……？」');
      await daiya.say_and_wait(
        '因为是边跑步边拼翻牌的速度的比赛。不会依照顺序轮流翻牌，而是先抢先赢的玩法。',
      );
      await daiya.say_and_wait(
        '如果翻到『挑战书牌』的话，就要跟其他选手决胜负，赢家可以拿走输家的牌喔♪',
      );
      await era.printAndWait('光钻的粉丝B「那、那还真是激烈啊……」');
      await era.printAndWait(
        '光钻的粉丝A「但光钻一定能赢的！我们会去帮你加油的！」',
      );
      await daiya.say_and_wait(
        '呵呵呵呵呵！有你们帮我加油的话，光钻一定会非常卖力的♪',
      );
      await era.printAndWait('光钻的粉丝们「好……好可爱喔～～！」');
      await daiya.say_and_wait(
        '真是的！居然躲在一旁偷看，训练员真是太过分了！',
      );
      era.printButton('「我想说打扰你们也不好嘛」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 向${daiya.sex}表明因为看${daiya.sex}和粉丝们互动得很愉快，所以不好意思打扰。`,
      );
      await daiya.say_and_wait('我也是不小心就太兴奋了……真不好意思……');
      await you.say_as_passer_by_and_wait(
        `担任播报的赛${daiya.uma_sex_title}`,
        '大会报告。请『无情大翻牌游戏』的参赛选手前往准备区集合。',
      );
      await daiya.say_and_wait('啊，要集合了。那我先过去了！');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `担任播报的赛${daiya.uma_sex_title}`,
        '──接下来是考验智谋和体力的『无情大翻牌游戏』！欢迎六位参赛选手入场！',
      );
      await condor.say_and_wait(
        '直觉、计谋、热血！赢家的宝座是神鹰我的啦────！！',
      );
      await gs.say_and_wait('泽蟹、毛蟹、松叶蟹！！好耶，螃蟹祭典来啦！！');
      await festa.say_and_wait('呵……来的都是有趣的选手嘛。');
      await sirius.say_and_wait('喂喂……小朋友的同乐会我可没兴趣哦。');
      await coffee.say_and_wait('……嗯，对……要翻到一样图案的……');
      await daiya.say_and_wait('？曼城茶座，你在跟谁说话……？');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「六位选手都各自站上了起跑的位置！那么，『无情大翻牌游戏』就要开始了！！」`,
      );
      await era.printAndWait('砰！！');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「好的，这个比赛是要在赛道上翻牌，翻到一样图案的牌就可以得分的翻牌游戏！」`,
      );
      await condor.say_and_wait('No──────！！图案不一样────！！');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「所有参赛选手会同时进行翻牌动作，所以比一般翻牌游戏更考验记忆力！」`,
      );
      await daiya.say_and_wait('……好！翻到一对了♪');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「里见光钻稳扎稳打地累积得分！」`,
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「……这是！？曼城茶座接二连三地成功配对，目前得分数位居第一！」`,
      );
      await coffee.say_and_wait(
        '……一样图案的……在那个右边的角落……是喔，太好了……谢谢……',
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「从比赛开始到现在都没有失手过！${
          daiya.sex
        }自言自语地判断对错，难道这样慎重的方式就是零失手的诀窍吗！」`,
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「剩余时间不到五分钟了！……哎呀？中山庆典开始出招了！是不是想要使用刚才翻到的那个呢！？」`,
      );
      await festa.say_and_wait('抱歉啦，大小姐。我要使用王牌了。');
      await daiya.say_and_wait('！！挑战书……！');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「哎呀──中山庆典！${
          daiya.sex
        }对里见光钻提出挑战书啦！」`,
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「挑战书牌会让双方合意讨论出要赌多少分数，在接下来的对决中获胜的赢家则可以获得对方下注的分数！」`,
      );
      await sirius.say_and_wait('等一下！！我也要用挑战书！');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「天狼星象征也在这时候加入战局！！挑战书的对决演变成三强鼎立的局面了！」`,
      );
      await sirius.say_and_wait('所以呢？你想赌多少分数？');
      await daiya.say_and_wait(
        '……五百分怎么样呢？这样就足够让我追上曼城茶座的分数了。',
      );
      await sirius.say_and_wait(
        '呵，你很冷静嘛。要是因为冲动就赌上所有分数，那局面可就有趣了呢。',
      );
      await festa.say_and_wait('那就一把决胜负吧。开始啰──');
      await era.printAndWait('三人「剪刀、石头、布！！」');
      await daiya.say_and_wait('太好了！！是我赢了！');
      await sirius.say_and_wait('哦？没有被我骗到啊。很好，把分数拿去吧！');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「里见光钻获得一千分！分数和暂居第一的曼城茶座并列了──！！──然而！！」`,
      );
      await coffee.say_and_wait('…………赢了。');
      await gs.say_and_wait(
        '啊啊啊啊啊啊可恶啊────！！从第一名身上把分数赢走的计划失败啦！',
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「曼城茶座和黄金船之间的挑战书对决，获胜者是曼城茶座！！${
          daiya.sex
        }因此得到了黄金船所有的分数！」`,
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「比赛时间结束！！『无情大翻牌游戏』的赢家是──曼城茶座！」`,
      );
      await era.printAndWait('光钻的粉丝B「光钻真是可惜啊！」');
      await era.printAndWait(
        '光钻的粉丝A「不过，看到了光钻的各种表情，我觉得很满足了！」',
      );
      await daiya.say_and_wait('呵呵呵，你们觉得开心就好！');
      await era.printAndWait(
        '和粉丝们有直接的互动，对里见光钻来说也是一场相当愉快的粉丝感谢祭。',
      );
      await daiya.say_and_wait('赌上所有分数！！');
      await festa.say_and_wait('哈哈！赌上所有分数真是太过瘾了！我跟！！');
      await sirius.say_and_wait('我也没意见！来吧！！');
      await era.printAndWait('三人「剪刀、石头、布！！」');
      await daiya.say_and_wait('太好了！！是我赢了！');
      await festa.say_and_wait(
        '……居然能在心理攻防战赢过我……真是个了不起的大小姐啊。',
      );
      await festa.say_and_wait('把我所有分数拿走吧。');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「里见光钻成功获得中山庆典和天狼星象征的分数！！因此，${
          daiya.sex
        }的分数超越了曼城茶座，成为了第一名──！」`,
      );
      await gs.say_and_wait(
        '啊──哈哈哈哈哈！！我就在等这一刻呢！THE · 渔翁之利！我要对里见发动挑战书──！',
      );
      await gs.say_and_wait('来啦来啦拼胜负啦──！！');
      await gs.say_and_wait('剪刀、石头、布！！');
      await daiya.say_and_wait('呵呵呵，是我赢了呢♪');
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「哎呀──里见光钻完全识破了黄金船的策略！！彻底击败了最后一名刺客──黄金船！」`,
      );
      await era.printAndWait(
        `担任播报的赛${daiya.uma_sex_title}「比赛时间结束！！『无情大翻牌游戏』的赢家是──里见光钻！」`,
      );
      await era.printAndWait('光钻的粉丝B「光钻，恭喜你获胜！」');
      await era.printAndWait('光钻的粉丝A「没想到光钻还有这么大胆的一面……！」');
      await daiya.say_and_wait('嘿嘿嘿♪因为大家来为我加油，所以我豁出去了！');
      await era.printAndWait(
        '光钻的粉丝A「真……真是太帅气了～～！！请让我今后也继续为你加油吧！」',
      );
      await daiya.say_and_wait(
        '我才要拜托你们继续支持我呢！那就麻烦大家继续为我加油啰♪',
      );
      await era.printAndWait(
        '和粉丝们有直接的互动，对里见光钻来说也是一场相当愉快的粉丝感谢祭。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '迎向天皇赏（春）';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     */
    const f = async (daiya, teio, mcqueen) => {
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
        `观众A「而且${daiya.couple_title}还是从小玩到大的好朋友。有一种命运的对决的感觉！」`,
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
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_end: (() => {
    const title = '二强';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {number} rank 比赛名次
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} kyot_dai
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} japa_cup
     */
    const f = async (
      daiya,
      teio,
      mcqueen,
      kita,
      you,
      rank,
      takz_kin,
      kyot_dai,
      tenn_sho,
      japa_cup,
    ) => {
      await era.printAndWait(
        '实况「经过第二个坡道后，现在进入第三弯道了！很艰辛，但接下来才是胜负关键！」',
      );
      await daiya.say_and_wait('呼、呼、呼、呼！');
      await kita.say_and_wait('呼、呼、呼、呼────！');
      await era.printAndWait('观众A「光钻加油啊────！」');
      await era.printAndWait('观众B「北部冲啊────！！」');
      if (rank === 1) {
        await era.printAndWait(
          '实况「北部玄驹、里见光钻！二强对决的赢家是……里见光钻──！」',
        );
      } else {
        await era.printAndWait(
          '实况「北部玄驹、里见光钻！二强对决的赢家是……北部玄驹──！北部玄驹达成连霸────！！」',
        );
      }
      await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊啊啊啊！');
      await you.say_as_passer_by_and_wait(
        '观众A',
        '……好厉害……真是惊人的表现……',
      );
      await you.say_as_passer_by_and_wait(
        '观众C',
        '天啊，起鸡皮疙瘩了……！背脊都发麻了……！',
      );
      await you.say_as_passer_by_and_wait(
        '穿着帽T的男性',
        '呜呜……两个人都……！都表现得很好……！！',
      );
      await teio.say_and_wait(
        `哈……啊哈哈！${daiya.couple_title}两个都很厉害嘛！`,
      );
      await teio.say_and_wait('……欸，麦昆。');
      await mcqueen.say_and_wait('嗯，我们走吧。');
      if (rank === 1) {
        await kita.say_and_wait('呼、呼……嘿嘿嘿，感觉心跳还是很快呢……');
        await daiya.say_and_wait('我也是……呼、呼……');
        await kita.say_and_wait(
          '……嗯，如果拿出全力还是跑输，那也只能认输了！今天是我彻底输了！',
        );
        await kita.say_and_wait('恭喜你，小钻！');
        await daiya.say_and_wait(
          '我能跑赢也都是因为小北的关系！因为有小北在前面激出我的潜能，我才有办法超越自己的极限。',
        );
      } else {
        await daiya.say_and_wait('呼、呼……脚都在发抖了……');
        await kita.say_and_wait(
          '呼、呼……嘿嘿嘿，我也是……！真的觉得超────级累的──！！',
        );
        await daiya.say_and_wait('……真不甘心……我明明都已经用尽全力了……');
        await daiya.say_and_wait(
          '明明已经努力到超越自己的极限了……却还是赢不了……',
        );
        await kita.say_and_wait('小钻……');
        await daiya.say_and_wait('是我彻底输了……恭喜你达成连霸，小北。');
        await kita.say_and_wait('……谢谢你，小钻。');
        await daiya.say_and_wait(
          '嘿嘿嘿，不过呀……因为有小北在前面激出我的潜能，今天我才有办法超越自己的极限……',
        );
      }
      await daiya.say_and_wait('只要跟小北一起跑，就觉得能够更加进步！');
      await kita.say_and_wait('这点我也认同！我们就这样一起迎向顶点吧！');
      await teio.say_and_wait('呵呵呵，顶点啊～！竟然讲得这么轻松！');
      await teio.say_and_wait('你知道到了顶点要面对的对手是谁吗？小北！');
      await kita.say_and_wait('呃，帝王！？');
      await daiya.say_and_wait('麦昆也来了！');
      await teio.say_and_wait(
        '你说的顶点可是吾之领域呢！想要站上我的地盘，就要先战胜帝王大人我～！',
      );
      await mcqueen.say_and_wait('帝王，你捉弄得太过头了。');
      await daiya.say_and_wait('呃……？');
      await teio.say_and_wait('我向你们宣战！！我跟麦昆会参加秋季的竞赛！');
      await teio.say_and_wait('你们想要到达顶点对吧！那就来挑战我们看看！');
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「咦咦咦咦咦～～！？」',
      ]);
      await daiya.say_and_wait(
        '你、你们真的会参赛吗！？原本都没听说……怎么会这么突然……？',
      );
      await mcqueen.say_and_wait('是啊，原本的计划中是没有打算要参赛的。');
      await mcqueen.say_and_wait(
        '但我们在看了里见和北部的比赛后，就改变主意了。',
      );
      await mcqueen.say_and_wait('我们想和你们跑一战看看。');
      await mcqueen.say_and_wait('是你们两位的表现激起了我们的斗志。');
      await daiya.say_and_wait('……！');
      await mcqueen.say_and_wait('──如何呢？你们愿意接受我们的挑战吗？');
      await daiya.say_and_wait(
        '唔！这是我的荣幸！！请务必一定要给我这个机会！',
      );
      await kita.say_and_wait('我也是！麻烦多多指教了！！');
      await teio.say_and_wait('就该是这样没错！');
      await teio.say_and_wait('我会参加『日本杯』！');
      await mcqueen.say_and_wait('那我就在『天皇赏（秋）』等你们来了。');

      await teio.say_and_wait('真期待啊～！好久没有跑闪耀系列赛了！');
      await mcqueen.say_and_wait('那么我先告辞了。');
      await kita.say_and_wait('小钻……！我不是在做梦吧……？');
      await daiya.say_and_wait(
        '嗯！不过……也有可能是我们两个人同时都在做梦也不一定……',
      );
      era.printButton('「我也全程听见了，这不是在做梦哟」', 1);
      await era.input();
      await kita.say_and_wait(
        '唔哇啊啊啊！！原来真的不是梦啊！我可以跟帝王一起比赛了！！',
      );
      await daiya.say_and_wait('我可以跟麦昆一起在闪耀系列赛的舞台上……！');
      await daiya.say_and_wait('好开心……没想到竟然会有这一天……');
      await era.printAndWait('里见光钻感动得湿了眼眶。北部玄驹也一样。');
      await era.printAndWait(
        `毕竟${daiya.couple_title}各自都是因为崇拜目白麦昆和东海帝王才进入特雷森学园的，反应会这么大也是理所当然的。`,
      );
      await kita.say_and_wait([tenn_sho, ' 和 ', japa_cup, ' 我都要参加！']);
      await kita.say_and_wait(
        '毕竟本来就都是『秋季资深三冠』的目标赛事。小钻呢？',
      );
      await daiya.say_and_wait([
        '我想要参加 ',
        tenn_sho,
        '！我想要挑战麦昆！！',
      ]);
      era.printButton('「『天皇赏（秋）』啊……」', 1);
      await era.input();
      await era.printAndWait(
        `这样一来就会先经过夏季集训。考量到${daiya.sex}本身原本就不擅长在酷暑中训练的状况……`,
      );
      await era.printAndWait(
        `夏天一过就要直接正面对决让 ${you.name} 不放心。还是在『天皇赏（秋）』之前，先让${daiya.sex}参加别的竞赛确认状态比较好。`,
      );
      era.printButton('「在那之前先参加『京都大赏典』吧」', 1);
      await era.input();
      await daiya.say_and_wait([
        '意思是要透过 ',
        kyot_dai,
        ' 来观察状况，视情况调整到最佳状态吧。这点我没有意见。',
      ]);
      await kita.say_and_wait([
        '我的话，会先参加靠粉丝投票获得参赛资格的 ',
        takz_kin,
        '，然后再参加 ',
        tenn_sho,
        '！',
      ]);
      await kita.say_and_wait([
        '为了能赢过麦昆，我们一定要为了 ',
        tenn_sho,
        ' 好好努力！',
      ]);
      await daiya.say_and_wait('呼…………我到现在都还觉得像是在做梦……');
      era.printButton('「之后会慢慢越来越有真实感的」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是呀……所以我也不能只顾着高兴了。难得有可以跟麦昆一起比赛的机会嘛。',
      );
      await daiya.say_and_wait(
        `麦昆跟帝王都已经是以『知名赛${daiya.uma_sex_title}』的身份在各处活跃的人了。`,
      );
      await daiya.say_and_wait(
        `我打算从${
          teio.couple_title
        }两位身上学习『知名赛${daiya.uma_sex_title}』该有的姿态。`,
      );
      await daiya.say_and_wait(
        `尤其是麦昆，${mcqueen.sex}背负着目白家的责任，感觉处境和我很接近。`,
      );
      await daiya.say_and_wait(
        `我身为里见家的代表，该成为什么样的『知名赛${daiya.uma_sex_title}』呢──`,
      );
      era.printButton('「你可以随时跟我分享烦恼」', 1);
      await era.input();
      await era.printAndWait(
        `『成为能够赢得G1竞赛的知名赛${daiya.uma_sex_title}』，${
          you.name
        } 答应过要和${daiya.sex}一起完成这个梦想。`,
      );
      await era.printAndWait(
        `身为${daiya.sex}的训练员，只要是对${daiya.sex}将来有帮助的事情，${you.name} 都愿意竭尽所能地去协助${daiya.sex}。`,
      );
      await daiya.say_and_wait('嘿嘿嘿，到时候就要靠你帮忙了♪');
      await daiya.say_and_wait('……要是我能赢过麦昆──');
      await era.printAndWait(
        `赢过『知名赛${daiya.uma_sex_title}』目白麦昆，实质上来说等同于实力达到『知名赛${daiya.uma_sex_title}』的水准。`,
      );
      await era.printAndWait(
        `要完成里见家的宿愿也是指日可待──${you.name} 揣摩着她欲言又止的话，更重新意识到自己身负重任。`,
      );
      await era.printAndWait(['首先是 ', kyot_dai, '。绝不能在前哨战失手。']);
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '阴影';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, kita, you) => {
      await daiya.say_and_wait('……小北……');
      await kita.say_and_wait('………………唔。');
      await era.printAndWait(
        '观众A「喂，北部这是怎么了啊……今天的状态很不好吗……？」',
      );
      await era.printAndWait(
        '观众B「最后的时候，没有像平常一样坚持住呢。北部的表现应该要更好才对……」',
      );
      await era.printAndWait(
        '观众C「垂头丧气可不像你的作风喔！平常的气势跑去哪了，北部！！」',
      );

      await kita.say_and_wait('…………唔！');
      await daiya.say_and_wait('小北！！');
      await era.printAndWait(
        '北部玄驹今天的表现少了平时的利落感。没能正常发挥实力的原因应该是──',
      );
      await daiya.say_and_wait('呼、呼…………小北。');
      await kita.say_and_wait('观、观众们说的话……我真的没办法再继续听下去了……');
      await kita.say_and_wait('虽然是我自己表现得不好，这我都知道……');
      await kita.say_and_wait('……唔……可是…………');
      await kita.say_and_wait('是我让他们失望了────！！');
      await kita.say_and_wait('呜哇啊啊啊啊啊啊啊啊啊啊啊！');
      await daiya.say_and_wait('……小北……');
      await daiya.say_and_wait(
        '……小北，你今天根本不是在绝佳的状态下比赛的吧……？',
      );
      await kita.say_and_wait('嗯……呜……今天不知道为什么……很怪……觉得身体很重……');
      await kita.say_and_wait(
        '明知道应该要加快步调了，可是……呜，脚却……越来越出不了力气……！',
      );
      await kita.say_and_wait('……我明明已经很努力了……');
      await kita.say_and_wait(
        '……『宝冢纪念』……呜呜……得到粉丝票选第一名……我真的好开心……！',
      );
      await kita.say_and_wait(
        '想说一定不能辜负大家的期望……所以我真的真的非常努力了！！',
      );
      await kita.say_and_wait('为什么会是这样！？');
      await daiya.say_and_wait(
        '我想……会不会是因为身体其实还很疲劳？我之前也因为『天皇赏（春）』留下了疲劳。',
      );
      await era.printAndWait(
        `经过「天皇赏（春）』的激战，北部玄驹的身体也累积了疲劳。${kita.sex}本人却没有发现。`,
      );
      await era.printAndWait(
        `${kita.sex}因为不想辜负大家的期望，所以没有感觉到疲劳，但疲劳却也没有消失，反而是在${kita.sex}身体里慢慢累积。`,
      );
      await daiya.say_and_wait('你就是不小心努力过头了……这很像小北的作风。');
      await kita.say_and_wait('……我其实很疲劳……？怎么会……可是……');
      await kita.say_and_wait(
        '我居然会没发现自己身体的疲劳……居然因为这样辜负了大家的期望……',
      );
      await kita.say_and_wait('好不甘心……我真的好不甘心……！');
      await daiya.say_and_wait(
        '──没事的。小北不小心努力过头的这件事情，粉丝一定都能明白的。',
      );
      await daiya.say_and_wait(
        '毕竟他们都是一直守护着努力的小北，从小北身上获得鼓励的人呀。',
      );
      await kita.say_and_wait(
        '……可是，大家特地把票投给我，我却这样搞砸了……大家一定对我很失望的……',
      );
      await daiya.say_and_wait('……因为辜负了期望，所以就不会再支持你了吗……？');
      await kita.say_and_wait(
        '嗯……因为，原本不受瞩目的我会开始受到大家的注意，也是因为一直跑赢比赛的关系……',
      );
      await kita.say_and_wait('因为一直跑赢比赛，支持我的人才变多的！');
      await kita.say_and_wait(
        `要是没有跑赢比赛的话，我就只是个不被注意的普通赛${daiya.uma_sex_title}……`,
      );
      await kita.say_and_wait(
        '我也不像小钻有厉害的尾段加速能力，我没有那样的武器，就是一个只知道努力、很平凡的……',
      );
      await daiya.say_and_wait('这就是小北让人觉得了不起的地方呀。');
      await kita.say_and_wait('咦……？');
      await daiya.say_and_wait(
        '能够坚定不移地努力这点。我想大家不就是因为看到你这点，所以才想会要支持你的吧。',
      );
      await daiya.say_and_wait(
        '我觉得大家是因为看到小北这一路以来都非常努力的模样，才会对小北产生深厚感情的。',
      );
      await era.printAndWait(
        `刚观战完的男性观众A「就是因为北部玄驹每次都非常卖力地奔跑，才让我忍不住想为${kita.sex}加油的。真的就是非常坚定不移的模样。」`,
      );
      await era.printAndWait(
        `刚观战完的男性观众B「我懂我懂！因为${kita.sex}本身也没什么特别亮眼的地方，就是很普通、很接近我们的感觉。」`,
      );
      await era.printAndWait(
        `刚观战完的男性观众B「所以反而更希望${kita.sex}能够跑赢！就像是看到自己获得成就的感觉！」`,
      );
      await daiya.say_and_wait(
        '观众们说如果小北跑赢的话，就如同自己的事情一般开心喔。',
      );
      await daiya.say_and_wait(
        '『因为北部很努力，所以我也能继续努力。』……小北跟我不一样，是像这样得到大家支持的。',
      );
      await daiya.say_and_wait('有时候，我也会有点羡慕这样的小北呢。');
      await kita.say_and_wait('啊……');
      await era.printAndWait(
        '观众A「也就是『春季资深三冠』了吧！一定要拿下啊，北部！！」',
      );
      await era.printAndWait('观众A「北部──！一定要为去年雪耻啊！！」');
      await daiya.say_and_wait(
        '让观众感同身受地支持你，这真的是非常了不起的事情。',
      );
      await daiya.say_and_wait(
        '粉丝们不只是喜欢你实力坚强，而是真正地爱着你的本质。',
      );
      await daiya.say_and_wait('所以，没事的。');
      await kita.say_and_wait('小钻……');
      await daiya.say_and_wait(
        '虽然今天可能真的让大家失望了，但粉丝们一定还对小北充满『期待』的。',
      );
      await kita.say_and_wait('……期待……');
      await daiya.say_and_wait('我也很期待喔。');
      await kita.say_and_wait('…………');
      await daiya.say_and_wait('……因为我相信小北能做到的。');
      era.drawLine();
      await era.printAndWait('从休息室出来后，里见光钻就像在思索着什么般。');
      await daiya.say_and_wait('……训练员，你想要看见什么样的我呢？');
      era.printButton('「嗯……？什么意思？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 因为没听懂意思而反问${daiya.sex}。`);
      await daiya.say_and_wait(
        '我刚刚一直在想，如果大家是因为能从小北身上看到自己而支持她，那支持我的人又是因为什么呢？',
      );
      await daiya.say_and_wait(
        `身为『知名赛${daiya.uma_sex_title}』的贡献……小北${
          kita.sex
        }已经做到带给大家笑容的这个贡献了。`,
      );
      await daiya.say_and_wait('而我却连该做些什么都还没有想到……');
      await daiya.say_and_wait(
        `为了赛${daiya.uma_sex_title}界的发展，我所该做的事情……`,
      );
      await daiya.say_and_wait(
        `身为一个赛${daiya.uma_sex_title}，我的表现能带给大家的究竟是什么……`,
      );
      await era.printAndWait(
        `大家在里见光钻身上所追求的事情。${daiya.sex}的表现能带给粉丝什么梦想。`,
      );
      await era.printAndWait(
        `每一位「知名赛${daiya.uma_sex_title}」都各自能带给大家不一样的梦想。`,
      );
      era.printButton('「我从你身上能感受到『可能性』」', 1);
      await era.input();
      await daiya.say_and_wait('可能性……');
      await era.printAndWait(
        `深藏着坚定不可动摇意志的${daiya.sex}，给人一种甚至能颠覆不可能的能量。`,
      );
      await era.printAndWait(
        `成功克服了里见家长年所困魔咒的${daiya.sex}，给人一种，或许${daiya.sex}有可能做到任何事的感觉。`,
      );
      await daiya.say_and_wait('原来如此……谢谢你。');
      await daiya.say_and_wait('……我会再自己好好想一想的……');
      await era.printAndWait(
        `里见光钻又再次陷入沉思。为了不打扰${
          daiya.sex
        }的思绪，你们就这样静静地走向车站。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '迎向宝冢纪念';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, kita) => {
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
    };
    f.title = title;
    return f;
  })(),
  we_95_24: (() => {
    const title = '那是唯一的光芒';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} tenn_spr
     * @param {PrintedSpan} takz_kin
     */
    const f = async (daiya, kita, you, tenn_spr, takz_kin) => {
      await era.printAndWait([
        `${you.name} 和里见光钻一起，来观战北部玄驹出赛的 `,
        takz_kin,
        '。',
      ]);
      await daiya.say_and_wait([
        '可以依照计划顺利参加 ',
        takz_kin,
        '，小北真的是很坚韧呢。',
      ]);
      await era.printAndWait([
        '其实这次 ',
        takz_kin,
        ' 的粉丝票选结果，里见光钻也是有获得参赛资格的。',
      ]);
      await era.printAndWait([
        '只是受到 ',
        tenn_spr,
        ` 激战过后的影响，让${daiya.sex}累积了相当大的疲劳，保险起见，才选择放弃这次的参赛机会。`,
      ]);
      await era.printAndWait(
        `北部玄驹刚跟${daiya.sex}跑完一样的比赛，却仍旧能够继续参加这场比赛，真的是非常坚韧。──我本来是这么想的，但……`,
      );
      await era.printAndWait(
        '实况「痛苦啊！北部玄驹！前进不了、前进不了！发挥不出平常的力道！！」',
      );
      await era.printAndWait(
        '实况「──北部玄驹落败！！北部玄驹被淹没在后方选手群中！」',
      );
      await daiya.say_and_wait('……小北……');
      await kita.say_and_wait('………………唔。');
      await era.printAndWait(
        '观众A「喂，北部这是怎么了啊……今天的状态很不好吗……？」',
      );
      await era.printAndWait(
        '观众B「不知道为什么『宝冢纪念』会输耶。明明就没有什么会输的理由啊……」',
      );
      await era.printAndWait(
        `观众C「这才不是北部真正的实力！！${kita.sex}下次一定会赢的！没错吧？北部！」`,
      );

      await kita.say_and_wait('…………唔！');
      await daiya.say_and_wait('小北！！');
      await era.printAndWait(
        '北部玄驹今天的表现少了平时的利落感。没能正常发挥实力的原因应该是──',
      );
      await daiya.say_and_wait('呼、呼…………小北。');
      await kita.say_and_wait('观、观众们说的话……我真的没办法再继续听下去了……');
      await kita.say_and_wait('虽然是我自己表现得不好，这我都知道……');
      await kita.say_and_wait('……唔……可是…………');
      await kita.say_and_wait('是我让他们失望了────！！');
      await kita.say_and_wait('呜哇啊啊啊啊啊啊啊啊啊啊啊！');
      await daiya.say_and_wait('……小北……');
      await daiya.say_and_wait(
        '……小北，你今天根本不是在绝佳的状态下比赛的吧……？',
      );
      await kita.say_and_wait('嗯……呜……今天不知道为什么……很怪……觉得身体很重……');
      await kita.say_and_wait(
        '明知道应该要加快步调了，可是……呜，脚却……越来越出不了力气……！',
      );
      await kita.say_and_wait('……我明明已经很努力了……');
      await kita.say_and_wait(
        '……『宝冢纪念』……呜呜……得到粉丝票选第一名……我真的好开心……！',
      );
      await kita.say_and_wait(
        '想说一定不能辜负大家的期望……所以我真的真的非常努力了！！',
      );
      await kita.say_and_wait('为什么会是这样！？');
      await daiya.say_and_wait(
        '我想……会不会是因为身体其实还很疲劳？我之前也因为『天皇赏（春）』留下了疲劳。',
      );
      await era.printAndWait(
        `经过「天皇赏（春）』的激战，北部玄驹的身体也累积了疲劳。${kita.sex}本人却没有发现。`,
      );
      await era.printAndWait(
        `${kita.sex}因为不想辜负大家的期望，所以没有感觉到疲劳，但疲劳却也没有消失，反而是在${kita.sex}身体里慢慢累积。`,
      );
      await daiya.say_and_wait('你就是不小心努力过头了……这很像小北的作风。');
      await kita.say_and_wait('……我其实很疲劳……？怎么会……可是……');
      await kita.say_and_wait(
        '我居然会没发现自己身体的疲劳……居然因为这样辜负了大家的期望……',
      );
      await kita.say_and_wait('好不甘心……我真的好不甘心……！');
      await daiya.say_and_wait(
        '──没事的。小北不小心努力过头的这件事情，粉丝一定都能明白的。',
      );
      await daiya.say_and_wait(
        '毕竟他们都是一直守护着努力的小北，从小北身上获得鼓励的人呀。',
      );
      await kita.say_and_wait(
        '……可是，大家特地把票投给我，我却这样搞砸了……大家一定对我很失望的……',
      );
      await daiya.say_and_wait('……因为辜负了期望，所以就不会再支持你了吗……？');
      await kita.say_and_wait(
        '嗯……因为，原本不受瞩目的我会开始受到大家的注意，也是因为一直跑赢比赛的关系……',
      );
      await kita.say_and_wait('因为一直跑赢比赛，支持我的人才变多的！');
      await kita.say_and_wait(
        `要是没有跑赢比赛的话，我就只是个不被注意的普通赛${daiya.uma_sex_title}……`,
      );
      await kita.say_and_wait(
        '我也不像小钻有厉害的尾段加速能力，我没有那样的武器，就是一个只知道努力、很平凡的……',
      );
      await daiya.say_and_wait('这就是小北让人觉得了不起的地方呀。');
      await kita.say_and_wait('咦……？');
      await daiya.say_and_wait(
        '能够坚定不移地努力这点。我想大家不就是因为看到你这点，所以才想会要支持你的吧。',
      );
      await daiya.say_and_wait(
        '我觉得大家是因为看到小北这一路以来都非常努力的模样，才会对小北产生深厚感情的。',
      );
      await era.printAndWait(
        `刚观战完的男性观众A「就是因为北部玄驹每次都非常卖力地奔跑，才让我忍不住想为${kita.sex}加油的。真的就是非常坚定不移的模样。」`,
      );
      await era.printAndWait(
        `刚观战完的男性观众B「我懂我懂！因为${kita.sex}本身也没什么特别亮眼的地方，就是很普通、很接近我们的感觉。」`,
      );
      await era.printAndWait(
        `刚观战完的男性观众B「所以反而更希望${kita.sex}能够跑赢！就像是看到自己获得成就的感觉！」`,
      );
      await daiya.say_and_wait(
        '观众们说如果小北跑赢的话，就如同自己的事情一般开心喔。',
      );
      await daiya.say_and_wait(
        '『因为北部很努力，所以我也能继续努力。』……小北跟我不一样，是像这样得到大家支持的。',
      );
      await daiya.say_and_wait('有时候，我也会有点羡慕这样的小北呢。');
      await kita.say_and_wait('啊……');
      await era.printAndWait(
        '观众A「也就是『春季资深三冠』了吧！一定要拿下啊，北部！！」',
      );
      await era.printAndWait('观众A「北部──！一定要为去年雪耻啊！！」');
      await daiya.say_and_wait(
        '让观众感同身受地支持你，这真的是非常了不起的事情。',
      );
      await daiya.say_and_wait(
        '粉丝们不只是喜欢你实力坚强，而是真正地爱着你的本质。',
      );
      await daiya.say_and_wait('所以，没事的。');
      await kita.say_and_wait('小钻……');
      await daiya.say_and_wait(
        '虽然今天可能真的让大家失望了，但粉丝们一定还对小北充满『期待』的。',
      );
      await kita.say_and_wait('……期待……');
      await daiya.say_and_wait('我也很期待喔。');
      await kita.say_and_wait('…………');
      await daiya.say_and_wait('……因为我相信小北能做到的。');
      era.drawLine();
      await era.printAndWait(`从地下道出来后，里见光钻就像在思索着什么般。`);
      await daiya.say_and_wait('……训练员，你想要看见什么样的我呢？');
      era.printButton('「嗯……？什么意思？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 因为没听懂意思而反问${daiya.sex}。`);
      await daiya.say_and_wait(
        '我刚刚一直在想，如果大家是因为能从小北身上看到自己而支持她，那支持我的人又是因为什么呢？',
      );
      await daiya.say_and_wait(
        `身为『知名赛${daiya.uma_sex_title}』的贡献……小北${
          kita.sex
        }已经做到带给大家笑容的这个贡献了。`,
      );
      await daiya.say_and_wait('而我却连该做些什么都还没有想到……');
      await daiya.say_and_wait(
        `为了赛${daiya.uma_sex_title}界的发展，我所该做的事情……`,
      );
      await daiya.say_and_wait(
        `身为一个赛${daiya.uma_sex_title}，我的表现能带给大家的究竟是什么……`,
      );
      await era.printAndWait(
        `大家在里见光钻身上所追求的事情。${daiya.sex}的表现能带给粉丝什么梦想。`,
      );
      await era.printAndWait(
        `每一位「知名赛${daiya.uma_sex_title}」都各自能带给大家不一样的梦想。`,
      );
      era.printButton('「我从你身上能感受到『可能性』」', 1);
      await era.input();
      await daiya.say_and_wait('可能性……');
      await era.printAndWait(
        `深藏着坚定不可动摇意志的${daiya.sex}，给人一种甚至能颠覆不可能的能量。`,
      );
      await era.printAndWait(
        `成功克服了里见家长年所困魔咒的${daiya.sex}，给人一种，或许${daiya.sex}有可能做到任何事的感觉。`,
      );
      await daiya.say_and_wait('原来如此……谢谢你。');
      await daiya.say_and_wait('……我会再自己好好想一想的……');
      await era.printAndWait(
        `里见光钻又再次陷入沉思。为了不打扰${
          daiya.sex
        }的思绪，你们就这样静静地走向车站。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季集训（资深年）开始！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} tenn_spr
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} japa_cup
     * @param {PrintedSpan} arim_kin
     */
    const f = async (
      daiya,
      kita,
      you,
      tenn_spr,
      takz_kin,
      japa_cup,
      arim_kin,
    ) => {
      await era.printAndWait('每年惯例的夏季集训也在今年开始了！');
      await kita.say_and_wait('小钻，有空吗？');
      await daiya.say_and_wait('怎么了？');
      await kita.say_and_wait(['就是……你在 ', takz_kin, ' 跟我说过的。']);
      await kita.say_and_wait('你说大家都对我充满『期待』……');
      await daiya.say_and_wait('嗯。');
      await kita.say_and_wait('我自己想了一下，大家对我的『期待』究竟是什么。');
      await kita.say_and_wait('然后……我做出了决定！！');
      await kita.say_and_wait(
        '如果我努力的样子能够激励到大家的话，那我就要让大家看到我努力不懈的样子！',
      );
      await kita.say_and_wait(
        '我想，大家应该是期待看到我可以从谷底翻身逆转胜的样子！',
      );
      await kita.say_and_wait(
        '凭着意志力绝不放弃，死缠烂打到最后，这才是我的作风嘛！',
      );
      await daiya.say_and_wait('呵呵呵！这才是小北没错！');
      await kita.say_and_wait([
        '所以，我的目标是要在 ',
        tenn_spr,
        '、',
        japa_cup,
        '、',
        arim_kin,
        ' 全部跑赢！',
      ]);
      await kita.say_and_wait('这就代表，我一定会跑赢帝王跟麦昆的！！');
      await kita.say_and_wait(
        '因为是一直崇拜的对象，我很了解她的强大，也知道要赢过她是多么困难的事情……',
      );
      await kita.say_and_wait(
        '但也因为这样，所以我更想要赢过她！！我想要超越自己崇拜的人！',
      );
      await kita.say_and_wait([
        '因为我在 ',
        takz_kin,
        ' 的时候让大家失望了，所以我想让大家看到我超越崇拜对象的样子！',
      ]);
      await daiya.say_and_wait('……我也是一样的想法。我也想超越崇拜的对象。');
      await daiya.say_and_wait('我不会把赢家的位置让给小北的！');
      await kita.say_and_wait('嗯！！我们都要努力！那就晚点见啰！');
      await daiya.say_and_wait('嘿嘿嘿，太好了……！');
      await daiya.say_and_wait('啊，对了。训练员，我有件事想要拜托你……');
      await daiya.say_and_wait(
        '关于之后的训练方针，为了能够应对各种状况，我想要强化自己的力量。',
      );
      await daiya.say_and_wait(
        '前几天，我为了研究，就看了一些麦昆的比赛影片……',
      );
      await daiya.say_and_wait(
        '强大脚力让她即使面对路况差劲的场地也不为所动，她强而有力的脚步让我印象很深刻。',
      );
      await daiya.say_and_wait(
        '要是我也有那样的脚力……就能更容易从人群中往前冲刺，对以后的比赛应该会有很好的效果。',
      );
      await daiya.say_and_wait(
        '……不对，应该说──补强我现在缺乏的部分，也是为了赢过麦昆她们所必须要做的事情。',
      );
      era.printButton('「原来如此」', 1);
      await era.input();
      await daiya.say_and_wait(
        '既然麦昆她们给了我这么难得的机会，我希望可以在万全的状态下迎战，我想要赢过她们……！',
      );
      await daiya.say_and_wait(
        `还有就是，我身为一个『知名赛${daiya.uma_sex_title}』，迟早也是要考量进军国外比赛的。`,
      );
      await era.printAndWait(
        `这让 ${you.name} 想起新年的派对上，有人曾提起国外远征的事情。`,
      );
      await era.printAndWait(
        '要想在更艰巨的国外赛场上跑出好成绩，的确也是需要足够的力量。',
      );
      era.printButton('「你怎么会突然决定要把目标定在国外的比赛？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '也不是已经决定好了，只是……之前，我找你商量过我能透过比赛带给大家什么这件事吧？',
      );
      await daiya.say_and_wait(
        '那时训练员给我的答案是可能性，这才让我想到国外远征的事情。',
      );
      await daiya.say_and_wait(
        `日本赛${daiya.uma_sex_title}界一直无法攻破的法国的传统大规模比赛──`,
      );
      await daiya.say_and_wait(
        '如果是破除里见家魔咒的我，说不定就能让大家看到缔造新历史的可能性。',
      );
      await daiya.say_and_wait(
        '既然如此，我或许就该从现在开始，把国外远征也纳入未来的目标。',
      );
      era.printButton('「我知道了」', 1);
      await era.input();
      await era.printAndWait(
        `锻炼力量的确能如她所说的，强化${daiya.sex}应对各种状况的能力。${you.name} 当然没有理由拒绝这个要求。`,
      );
      await daiya.say_and_wait('不好意思，要让你更加费心了。那就拜托了。');
      await daiya.say_and_wait('充满力量的新跑法……我一定要学会才行！');
      await daiya.say_and_wait('不然，我就没有脸去面对麦昆了！');
      await era.printAndWait(
        '决定要挑战憧憬，并确立了将来的方向后，里见光钻充满了干劲。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季集训（资深年）结束';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} dictus 生野狄杜斯
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, dictus, kita) => {
      await daiya.say_and_wait('呼、呼、呼……！');
      await daiya.say_and_wait(
        '这……对脚的负担相当大呢……但步伐的确感觉更扎实了。',
      );
      await daiya.say_and_wait('我一定要练好这个跑法才行……！');
      await daiya.say_and_wait('再一趟……！');
      await daiya.say_and_wait('喝啊啊啊啊啊啊啊！！');
      await dictus.say_and_wait(
        `……训练员。虽然我这样可能有点多管闲事，但${daiya.sex}这样真的没问题吗……？`,
      );
      await dictus.say_and_wait(
        '有点用力过度，甚至是太靠蛮力的感觉。这样已经不像是里见的风格了。',
      );
      era.printButton('「是啊……」', 1);
      await era.input();
      await era.printAndWait(
        '为了之后和目白麦昆的「天皇赏（秋）』，以及考量到今后可能往国外发展，开始进行增强跑步力道的训练。',
      );
      await era.printAndWait(
        '然而，却发生了预料之外的状况。里见光钻的跑法开始变得混乱不堪。',
      );
      await era.printAndWait('已经演变成施力不平衡的跑法。');
      await dictus.say_and_wait(
        '也许是因为跑在沙滩上的关系吧，希望这个情况只是暂时的。',
      );
      await era.printAndWait(
        '希望真的是像生野狄杜斯所说的……总之还是暂时先观察一阵子看看吧。',
      );
      await era.printAndWait('不知不觉间，夏季集训来到了最后一天。');
      await daiya.say_and_wait('小北，回程的巴士我们坐一起吧♪');
      await kita.say_and_wait('我行李都已经拿去放好了！走吧！');
      await kita.say_and_wait('……嗯？小钻？');
      await daiya.say_and_wait('……呼…………呼…………');
      await kita.say_and_wait('睡着了啊……');
      await daiya.say_and_wait('唔……我要跑得更有力道……');
      await kita.say_and_wait('呵呵，集训时的小钻真的很努力。');
      await kita.say_and_wait('……晚安，小钻。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_33: (() => {
    const title = '遥远的前方，持续追逐';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} takz_kin
     * @param {PrintedSpan} kyot_dai
     * @param {PrintedSpan} tenn_sho
     */
    const f = async (daiya, kita, you, takz_kin, kyot_dai, tenn_sho) => {
      await daiya.say_and_wait('…………呼！');
      await era.printAndWait(
        '即使回到草地的训练赛道，里见光钻跑步的模样依旧还是怪怪的。',
      );
      await era.printAndWait(
        '不仅如此，已经可以说是完全被打乱的程度。成绩也是一落千丈。',
      );
      await daiya.say_and_wait('………………训练员。');
      await daiya.say_and_wait([
        '我这样来得及在 ',
        tenn_sho,
        ' 之前把状态调整好吗……？',
      ]);
      era.printButton('「现在开始调整的话或许还能勉强赶上吧」', 1);
      await era.input();
      await era.printAndWait([
        '虽然是不一定要以100％完整状态去迎战作为前哨战的 ',
        kyot_dai,
        '，但距离 ',
        tenn_sho,
        ' 也已经没有时间了。',
      ]);
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait('……我会先把跑法给调整回来的。');
      await daiya.say_and_wait(
        '毕竟，我可不能用这种状态去迎战跟麦昆的比赛……！',
      );
      era.printButton(`「是啊，要赶在春季天皇赏之前调整好！」`, 1);
      await era.input();
      await era.printAndWait(
        `这对她来说也是很痛苦的决定吧。为了不辜负她的这片心意，${you.name} 一定要让${daiya.sex}以万全的状态迎战「天皇赏（秋）」！`,
      );
      await daiya.say_and_wait('呼、呼…………怎么会这样……？');
      await daiya.say_and_wait('之前步频明明可以更快的……所以……');
      await daiya.say_and_wait('唔……！');
      await era.printAndWait(`然而，${daiya.sex}始终没有找回原本的跑法。`);
      await era.printAndWait(
        `${daiya.sex}因为太过急心于恢复到原本的跑法，反而让身体的平衡变得更加杂乱不堪，又因此变得更加焦虑、更加在意。`,
      );
      await era.printAndWait(
        '要怎么摆脱这样的恶性循环呢？──如果里见光钻真的忘记了原本的跑法，那不如……',
      );
      era.drawLine();
      await kita.say_and_wait('打扰了。训练员，你是想找我商量什么呢？');
      era.printButton('「其实是关于光钻跑步的事情……」', 1);
      await era.input();
      await kita.say_and_wait(
        '啊──我大概知道你想说什么了。最近小钻跑步的样子确实是怪怪的呢。',
      );
      await era.printAndWait(
        `${you.name} 向${daiya.sex}说明──目前里见光钻正为了找回原本的跑法而努力，过程却非常不顺利，陷入了瓶颈。`,
      );
      await kita.say_and_wait(
        '嗯嗯……如果是这样的话，要不要让她跟我跑一场看看呢？',
      );
      await kita.say_and_wait(
        '虽然我不知道该怎么解决，但实际跑一次说不定就有办法了呢！',
      );
      era.drawLine();
      await daiya.say_and_wait('要我跟小北一起跑吗？');
      await kita.say_and_wait([
        '对！跑跟 ',
        takz_kin,
        ' 一样的2200米。我想要复习当时的状况。',
      ]);
      await daiya.say_and_wait('……训练员。');
      era.printButton('「我们就帮她这个忙吧！」', 1);
      await era.input();
      await daiya.say_and_wait([
        '……说得也是。刚好距离也是 ',
        tenn_sho,
        ' 和 ',
        kyot_dai,
        ' 的中间。对我来说也是不错的锻炼。',
      ]);
      await kita.say_and_wait('谢谢你，小钻！！');
      await daiya.say_and_wait('真是的……我才应该要说谢谢的。');
      await era.printAndWait('于是，和北部玄驹的2200米竞赛开始了。');
      await kita.say_and_wait('喝啊啊啊啊啊啊啊！');
      await daiya.say_and_wait(
        '这里不能被拉大距离，要稍微加快一点步调……',
        true,
      );
      await daiya.say_and_wait('喝啊啊……唔！唔……！');
      await daiya.say_and_wait(
        '……前进不了！是步伐太重了吗？……不行，距离要被越拉越大了……！',
        true,
      );
      await daiya.say_and_wait('……没办法跑出我想要的样子……', true);
      await daiya.say_and_wait('……呼、呼………………');
      await kita.say_and_wait('嗯──小钻的状态好像很不好耶。');
      await kita.say_and_wait('还是不要太勉强了，今天就到此为止吧！');
      await daiya.say_and_wait('不行，我还没……');
      await kita.say_and_wait('可是小钻，你好像也没办法专心并跑练习的感觉啊。');
      await kita.say_and_wait(
        '不专心的话，是很可能会不小心受伤的。今天还是先休息吧。',
      );
      era.printButton('「嗯，先这样吧。好好休息」', 1);
      await era.input();
      await daiya.say_and_wait('是……我知道了。辛苦了。');
      await era.printAndWait(
        `里见光钻应该是明白了你们怕${
          daiya.sex
        }受伤的心情。于是${daiya.sex}乖乖地答应了。`,
      );
      await kita.say_and_wait('欸，反正现在时间还早。我们去逛一逛再回去吧！');
      await daiya.say_and_wait('小北……对不起，我──');
      await kita.say_and_wait('走吧！！');
      await daiya.say_and_wait('哇！……小北，我……！');
      await kita.say_and_wait('我肚子饿了！先去商店街好了！');
      era.drawLine();
      await kita.say_and_wait('嗯～～～！好好吃！');
      await kita.say_and_wait('小钻点的是什么口味的啊？');
      await daiya.say_and_wait('辣起司热狗跟巧克力薄荷的两种口味各半。');
      await kita.say_and_wait('又、又是点这种奇怪的组合……');
      await daiya.say_and_wait(
        '我想说这种特别的组合会比较有趣嘛。辣辣凉凉的充满刺激性的味道♪',
      );
      await kita.say_and_wait('你真是个勇于挑战的勇者呢。');
      await kita.say_and_wait(
        '口渴了，去买饮料吧！买完后再带去风景好的地方喝吧！',
      );
      await daiya.say_and_wait(
        '小北！手……你突然这样拉的话，鲷鱼烧会掉地上的！',
      );
      await kita.say_and_wait('抱歉抱歉！但也没有掉到地上嘛！');
      await daiya.say_and_wait('……小时候也是像这样子，被小北拉着手……', true);
      await daiya.print_and_wait('【年幼的光钻「小北……我们要走多久呀……？」】');
      await kita.print_and_wait('【年幼的北部「就快到了。你看……」】');
      await daiya.print_and_wait('【年幼的光钻「哇～！好高喔……！」】');
      await kita.print_and_wait(
        '【年幼的北部「这里就是我的秘密基地！早就想带小钻来这里看看了！」】',
      );
      await daiya.say_and_wait('带我去了好多的地方……', true);
      await kita.say_and_wait('呼、呼……一口气爬上来还真的是会累耶……！');
      await daiya.say_and_wait('嗯……呼、呼……');
      await daiya.say_and_wait(
        '以前也来过这里……当时也是小北拉着我的手过来的。',
      );
      await daiya.say_and_wait(
        '不只是这里，还带我去了很多地方。是小北带我认识外面的世界。',
      );
      await daiya.say_and_wait('……我一直把小北当作姐姐看待。');
      await kita.say_and_wait(
        '啊哈哈，跟小钻在一起的时候，我也是都尽量想要表现得像个姐姐一样喔！',
      );
      await kita.say_and_wait('我要走在小钻的前面，带小钻去各种地方……');
      await kita.say_and_wait('──欸，小钻！我们来赛跑吧！看谁先跑到河边！');
      await daiya.say_and_wait('咦？赛跑？怎么这么突然？');
      await kita.say_and_wait('跑一下没关系吧。好啦！好了，预备……跑！！');
      await daiya.say_and_wait('等……这样很狡猾耶，小北！！');
      await kita.say_and_wait(
        '嘿嘿嘿，是我跑赢了呢！接下来换……看谁先跑到公园！',
      );
      await daiya.say_and_wait('咦！？真是的……！');
      await kita.say_and_wait('快点，不然我要丢下你跑掉啰！');
      await kita.print_and_wait(
        '【年幼的北部「快点快点，小钻！快一点──！不然要丢下你跑掉啰！」】',
      );
      await daiya.print_and_wait('【年幼的光钻「等等我嘛──！小北！！」】');
      await daiya.print_and_wait(
        '【年幼的光钻「呼、呼……嘿嘿，只差一点点……！」】',
      );
      await daiya.say_and_wait('呼……才不要被丢下呢！');
      await kita.say_and_wait('那我们最后就比看谁先跑到宿舍！宿舍就是终点啰！');
      await daiya.say_and_wait('……呵呵，这次我一定会追上你的。');
      await daiya.say_and_wait(
        '……记得以前也是像这样只追着那个背影跑呢……',
        true,
      );
      await daiya.say_and_wait('就只是因为想追上小北。', true);
      await daiya.say_and_wait('……好──！');
      await daiya.say_and_wait('……咦？我……能够正常跑了……', true);
      await daiya.say_and_wait('没有多想什么……单纯自然地跑步……！', true);
      await daiya.say_and_wait(
        '……原来呀。我追着小北奔跑的时候，一直都是非常专心地在跑步的……',
        true,
      );
      await daiya.say_and_wait(
        '就只是单纯地想像着──等我追上那个背影、追过她的时候，小北会露出什么样的表情。',
        true,
      );
      await daiya.say_and_wait('然后就会很快乐……觉得跑步很快乐！！', true);
      await kita.say_and_wait('抵达终点────！');
      await daiya.say_and_wait('呼、呼、呼…………');
      await daiya.say_and_wait('…………小北。');
      await kita.say_and_wait('怎么了？小钻。');
      await daiya.say_and_wait('嘿嘿嘿，我跑得很开心喔！');
      await kita.say_and_wait('嗯！！我也是！');
      await daiya.say_and_wait('下次我一定会追过你的！');
      await kita.say_and_wait('…………！嘿嘿，你就尽管来挑战吧！！');
      await daiya.say_and_wait('我就顺从心意去跑吧，就像过去一样……', true);
    };
    f.title = title;
    return f;
  })(),
  before_kyot_dai_s: (() => {
    const title = '迎向京都大赏典';
    /** @param {CharaTalk} daiya 里见光钻 */
    const f = async (daiya) => {
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
    };
    f.title = title;
    return f;
  })(),
  kyot_dai_win_s: (() => {
    const title = '结果';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, mcqueen, you) => {
      await you.say_as_passer_by_and_wait('实况', '里见光钻领先冲过终点！');
      await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
      await you.say_as_passer_by_and_wait(
        '观众C',
        `什么嘛，${daiya.sex}状态根本没有不好啊！」`,
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        `${daiya.sex}真的表现得很好呢！！光钻跑步的时候，就是非常专注地看着前面加速的样子……」`,
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        '不受任何事情影响跟干扰的姿态。我真的好喜欢喔……」',
      );
      await mcqueen.say_and_wait('……呵呵，这是理所当然的结果。');
      await mcqueen.say_and_wait(
        '要是在这里就失败的话，要怎么成为我的对手呢。',
      );
      await daiya.say_and_wait('……嗯！');
      await daiya.say_and_wait('这就是我的跑法……！');
      await daiya.say_and_wait('训练员，我终于能够很自在地奔跑了！');
      era.printButton('「看起来的确是这样呢！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '连训练员都觉得没有问题的话，那就真的可以放心了呢！',
      );
      era.printButton('「你的脚步变得很有力道喔」', 1);
      await era.input();
      await era.printAndWait(
        `虽然还称不上非常强力，但 ${you.name} 将自己从步伐中感觉到力道及安定感的事实告诉${daiya.sex}。`,
      );
      await daiya.say_and_wait('真的吗……？我完全就只是很自然地跑而已呢……');
      era.printButton('「看来你已经熟练这样的跑法了哟」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 想，应该是因为${daiya.sex}找回属于自己的跑法，所以先前训练的成果也跟着展现出来了。`,
      );
      await daiya.say_and_wait(
        '太好了……！这也就代表，我可以放心继续练步伐的力道了吧……！',
      );
      await daiya.say_and_wait('也就代表，我是有机会朝国外竞赛前进的……');
      era.printButton('「我们一起找出适合你的方式吧」', 1);
      await era.input();
      await era.printAndWait(
        `虽然之后的训练也有可能再次影响到她的跑法，但现在的${daiya.sex}应该是没有问题了。`,
      );
      await era.printAndWait(
        `如果是已经明白自己跑步初衷的${daiya.sex}，相信一定能找出最适合自己的成长方法。`,
      );
      await daiya.say_and_wait('是，不用担心。我已经不会再迷惘了。');
      await daiya.say_and_wait('我只需要专注地为了我的梦想向前迈进！');
      era.printButton('「『天皇赏（秋）』的时候也要保持这样！」', 1);
      await era.input();
      await daiya.say_and_wait('是！终于要和麦昆一起……！还有，小北也是！！');
      await daiya.say_and_wait('我梦寐以求的舞台终于就要……！');
      await daiya.say_and_wait(
        `而且，只要跑赢了，就能证明我已经拥有『知名赛${daiya.uma_sex_title}』的实力。`,
      );
      await daiya.say_and_wait(
        `崇拜的人和长久以来的对手……可以和${daiya.couple_title}一决胜负的机运──`,
      );
      await daiya.say_and_wait('我会做好赌上一切的觉悟去挑战的！！');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '迎向天皇赏（秋）';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, kita, you) => {
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
      await you.say_as_passer_by_and_wait('观众', '喔喔喔喔喔喔喔喔！！');
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
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '到达';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, teio, mcqueen, kita, you, tenn_sho, arim_kin) => {
      await daiya.say_and_wait(
        '路况极差根本不重要！！我只需要用自己的跑法朝终点前进！',
        true,
      );
      await daiya.say_and_wait('喝啊啊啊啊啊啊啊啊啊啊啊！！');
      await you.say_as_passer_by_and_wait(
        '实况',
        '第一名是里见光钻────！！最高级钻石没有蒙灰！呈现出纯净无暇的光芒！',
      );
      await you.say_as_passer_by_and_wait('观众', '（哇啊啊啊啊啊啊啊啊啊！）');
      await you.say_as_passer_by_and_wait(
        '观众B',
        '真是震撼人心的表现啊，里见光钻！！想不到竟然能够赢过麦昆！真是无可挑剔的实力！」',
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        '就算全身沾满了泥土也依旧凛然坚定……那样的姿态真的好美……」',
      );
      await kita.say_and_wait(
        '唔啊啊啊啊啊啊啊啊！！不甘心、不甘心、不甘心！！',
      );
      await kita.say_and_wait('明明我的状态非常完美的说！');
      await kita.say_and_wait('……不过，这也就代表小钻真的非常厉害。');
      await kita.say_and_wait('我还要更加精进自己才行！');
      await daiya.say_and_wait('嗯，我也会努力不被小北给追过的。');
      await mcqueen.say_and_wait('里见，你表现得非常精彩。');
      await daiya.say_and_wait('麦昆！谢谢你，可是──');
      await mcqueen.say_and_wait('怎么了吗？');
      await daiya.say_and_wait(
        '毕竟我在距离上占了上风，对长途跑者的麦昆来说，还是长距离的比赛比较擅长吧。',
      );
      await mcqueen.say_and_wait([
        '是啊，但也是我自己指定要跑 ',
        tenn_sho,
        ' 的。',
      ]);
      await daiya.say_and_wait('我、我希望有机会也能一起跑长距离的比赛！！');
      await daiya.say_and_wait('我想要在长距离的比赛中赢过麦昆……！');
      await mcqueen.say_and_wait('……！');
      await teio.say_as_unknown_and_wait('很了不起的心态呢～小钻！');
      await daiya.say_and_wait('帝王！');
      await teio.say_and_wait('不然这样你看如何？');
      await teio.say_and_wait('我们几个全部一起跑同一个比赛！！');
      await daiya.say_and_wait('……！我、我愿意！请给我这个机会！！');
      await mcqueen.say_and_wait('真是的……是帝王自己也想跟里见一起比赛吧？');
      await teio.say_and_wait('嘿嘿♪被你看穿啦。');
      await mcqueen.say_and_wait(['──', arim_kin, '！']);
      await mcqueen.say_and_wait([
        '如果大家都愿意的话，那我们就在 ',
        arim_kin,
        ' 再战吧！',
      ]);
      await teio.say_and_wait('我也会参加喔！粉丝投票，就麻烦大家了喔！');
      await you.say_as_passer_by_and_wait(
        '观众B',
        '真的假的！？我一定会投票的！帝王、麦昆！！',
      );
      await daiya.say_and_wait('麦昆……！谢谢你！！');
      await daiya.say_and_wait('我会参加『有马纪念』的！！');
      await kita.say_and_wait('我也是！！到时候就麻烦多多指教了！！');
      await you.say_as_passer_by_and_wait(
        '观众',
        '唔喔喔喔喔喔喔喔喔喔喔喔！！',
      );
      await era.printAndWait([
        '现场六万名观众的骚动震荡看台。想必 ',
        arim_kin,
        ' 会成为世纪之最的梦幻赛事吧。',
      ]);
      await era.printAndWait([
        '面对府中赛场热烈的欢呼声，现场根本不存在不参加 ',
        arim_kin,
        ' 的选择。',
      ]);
      await daiya.say_and_wait('──那个，麦昆！');
      await daiya.say_and_wait('我可以跟你请教一件事吗？');
      await mcqueen.say_and_wait('什么事呢？');
      await daiya.say_and_wait('麦昆你……为什么会愿意跟我们一起比赛呢？');
      await mcqueen.say_and_wait(
        `……你们两个的比赛激起了我的斗志。再加上，身为目白家的赛${daiya.uma_sex_title}，我认为我必须做这样的选择。`,
      );
      await daiya.say_and_wait(`身为目白家的赛${daiya.uma_sex_title}……`);
      await mcqueen.say_and_wait('光钻想要知道的，是我现在的处境跟心境吧？');
      await daiya.say_and_wait(
        `是的，因为麦昆是里见家期望能成为的『知名赛${daiya.uma_sex_title}』，并以这样的身份在各处活跃。`,
      );
      await daiya.say_and_wait(
        `所以我才会认为，这次麦昆愿意跟我们一起比赛，是不是出自于『知名赛${daiya.uma_sex_title}』的考量。`,
      );
      await mcqueen.say_and_wait('是的，正是如此。');
      await mcqueen.say_and_wait(
        `──以绝对强势到甚至没有新意的实力，在赛${daiya.uma_sex_title}界尽情打响目白家名号，这是我一直督促自己的课题。`,
      );
      await mcqueen.say_and_wait(
        `因此，当我和目白家都特别看重的『天皇赏（春）』……出现强力赛${daiya.uma_sex_title}参赛时，我就必须奋起迎战。`,
      );
      await mcqueen.say_and_wait(
        `不单是如此，我不仅要和在闪耀系列赛创下好成绩的赛${daiya.uma_sex_title}比赛──`,
      );
      await mcqueen.say_and_wait(
        `也要接受像你们这些新一代崭露头角的赛${daiya.uma_sex_title}的挑战，并用压倒性的实力赢过你们。`,
      );
      await mcqueen.say_and_wait('用这种方式──让目白家的名声永不凋零。');
      await mcqueen.say_and_wait('这就是我现在的处境和心境。');
      await daiya.say_and_wait('为的是让目白家能够以实力继续自豪……');
      await mcqueen.say_and_wait('……然而，里见家和目白家的立场并不相同。');
      await mcqueen.say_and_wait(
        `里见家在赛${daiya.uma_sex_title}界的历史，可以说是由光钻开始的。`,
      );
      await mcqueen.say_and_wait('所以，光钻应该有和我不同的路可以选择。');
      await daiya.say_and_wait('……里见家的历史是由我开始……');
      await daiya.say_and_wait('…………');
      await daiya.say_and_wait('谢谢你，麦昆。我会好好想想的。');
      await mcqueen.say_and_wait('嗯，你就好好想想吧。');
      await mcqueen.say_and_wait('我先预祝光钻的前途光明。告辞了。');
      await daiya.say_and_wait('……我就知道，麦昆她真的是很了不起的人！');
      await daiya.say_and_wait(
        `${
          mcqueen.sex
        }对『知名赛${daiya.uma_sex_title}』的身份竟然会有那么坚定明确的定义跟目标……真的令我感到非常尊敬……！`,
      );
      era.printButton('「能成为你的参考真是太好了呢」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是啊！我会像麦昆所说的那样，仔细想想自己该怎么做……',
      );
      await daiya.say_and_wait(
        '可以的话，希望可以赶上在『有马纪念』的时候，告诉她我想出的答案！',
      );
      await era.printAndWait([
        arim_kin,
        `──里见光钻想要成为『知名赛${daiya.uma_sex_title}』的梦想，或许真的能在那找到答案也不一定。`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = '迎向日本杯';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, teio, kita) => {
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
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '挑战';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, teio, kita, you, arim_kin) => {
      await you.say_as_passer_by_and_wait(
        '实况',
        '现在领先抵达终点！第一名是──',
      );
      await you.say_as_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
      await daiya.say_and_wait('呼、呼……');
      await teio.say_and_wait(
        '想不到竟然会有这样的实力……！你表现得很好喔，小钻。',
      );
      await daiya.say_and_wait('谢谢你！');
      await teio.say_and_wait('小北也是，你已经比我想像的还要更强了！');
      await kita.say_and_wait([
        '真的吗！？但我会在 ',
        arim_kin,
        ' 呈现出比今天更好的表现！',
      ]);
      await daiya.say_and_wait('我也不会满足于现状的。');
      await daiya.say_and_wait(
        '我觉得现在的自己终于和比我早一步出发的小北、麦昆以及帝王，站上了同一个起跑点。',
      );
      await teio.say_and_wait('──不错嘛。小北跟小钻都很棒。');
      await teio.say_and_wait('充满决心要赢过我们的这个眼神，真的很棒喔。');
      await teio.say_and_wait('不小心让我想起了以前的自己呢。');
      await daiya.say_and_wait('以前的……帝王吗？');
      await teio.say_and_wait(
        '对，以前我也是这样崇拜着会长……一边想着总有一天一定要超越会长，一边在闪耀系列赛中努力着。',
      );
      await teio.say_and_wait('等到我终于跟会长直接对决时──');
      await teio.say_and_wait(
        '崇拜的对象瞬间变成了对手。我当时想着自己一定要打败她。',
      );
      await teio.say_and_wait(
        '你们两个现在就跟当时的我是一样的心情吧，我就是突然这么觉得啦！',
      );
      await teio.say_and_wait('不过呢，我也从来没有忘记当时挑战会长的感觉。');
      await teio.say_and_wait(
        '看到你们这么优秀的表现，让我自己也忍不住想要上场！',
      );
      await teio.say_and_wait(
        '到时候的『有马纪念』，我会以挑战者的身份去挑战小钻跟小北的！',
      );

      await teio.say_and_wait('做好觉悟吧！！');
      await daiya.say_and_wait('──唔！是！！');
      await kita.say_and_wait('好！！我一定会用心迎战的！');
      await daiya.say_and_wait(
        `无时无刻不忘挑战的心……这就是帝王${
          teio.sex
        }身为『知名赛${daiya.uma_sex_title}』的做法……`,
      );
      await daiya.say_and_wait(
        '麦昆是接受挑战的身份，帝王则是挑战者的身份。',
        true,
      );
      await daiya.say_and_wait('那我……', true);
      await daiya.say_and_wait(
        '里见家首次的G1胜利……挑战魔咒、破除魔咒、赢得胜利。',
        true,
      );
      await daiya.say_and_wait(
        '追上小北，在梦寐以求的闪耀系列赛的舞台进行比赛。',
        true,
      );
      await daiya.say_and_wait('最适合我的做法是……！', true);
      await daiya.say_and_wait('……训练员。');
      await era.printAndWait(
        '一阵沉默过后，开口的里见光钻露出了下定决心的表情。',
      );
      await daiya.say_and_wait('我决定今后也要不停地挑战下去。');
      era.printButton('「不停地挑战……？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是的。一直以来我都在挑战各种事情，像是阻挠里见家的魔咒，还有挑战小北。',
      );
      await daiya.say_and_wait(
        `所以，我想我身为一个『知名赛${daiya.uma_sex_title}』，继续挑战各种事物，是不是就是最适合我的做法呢。`,
      );
      await daiya.say_and_wait(
        '就像我挑战麦昆和帝王，在里见家的历史上开启一个新的篇章一样。',
      );
      await daiya.say_and_wait(
        `我想要挑战各种事物，为里见家和赛${daiya.uma_sex_title}界开拓新的历史。`,
      );
      await daiya.say_and_wait(
        '当我这么一想的同时，我才再次发现到，我想要挑战国外的比赛这件事。',
      );
      await daiya.say_and_wait(
        '不单只是为了让大家感受到可能性，而是为了实现我自己的心愿。',
      );
      await daiya.say_and_wait(
        `想要在历史悠久的国外竞赛中取得胜利，把里见的名字刻划在赛${daiya.uma_sex_title}界的历史中。`,
      );
      await daiya.say_and_wait(
        `然后，为里见家和日本赛${daiya.uma_sex_title}开拓新的历史──`,
      );
      await daiya.say_and_wait(
        `我想，这就是我能为赛${daiya.uma_sex_title}界所作的贡献吧。`,
      );
      era.printButton('「你找到自己的答案了呢」', 1);
      await era.input();
      await daiya.say_and_wait('是的！');
      await daiya.say_and_wait(
        `身为『知名赛${daiya.uma_sex_title}』的里见光钻所该有的模样……我已经确定自己的目标了。`,
      );
      await daiya.say_and_wait(
        `我要在『有马纪念』获胜，正式加入『知名赛${daiya.uma_sex_title}』的行列！`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_44: (() => {
    const title = '挑战、开拓';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_cup
     */
    const f = async (daiya, teio, kita, you, japa_cup) => {
      await era.printAndWait([
        `${you.name} 和里见光钻一起来观战 `,
        japa_cup,
        '。',
      ]);
      await kita.say_and_wait('帝王……！我真的要跟崇拜的帝王一起……！');
      await teio.say_and_wait(
        '你要是一直这样静不下心来的话，比赛的时候就要遭殃啰，小北。',
      );
      await teio.say_and_wait(
        `今天还有从国外邀请来参赛的赛${daiya.uma_sex_title}。是一场充满不确定因素的比赛……`,
      );
      await teio.say_and_wait('但无论对手是谁，帝王大人我都会击溃她们的！！');
      await kita.say_and_wait('我不会被击溃的！我……会跑赢帝王的！！');
      await daiya.say_and_wait('太好了！小北没有在气势上输掉呢！');
      await era.printAndWait('观众A「北部，加油喔！！要超越你的憧憬啊！」');
      await era.printAndWait(
        '观众B「超越『帝王』吧！我们的北部一定能做到的！！」',
      );
      await era.printAndWait(
        `观众C「让${daiya.couple_title}见识『帝王』的威严吧！东海帝王！！」`,
      );
      await daiya.say_and_wait('……两边的声援声势也算是旗鼓相当吧……');
      await era.printAndWait(
        `${daiya.couple_title}本就是拥有大量热情粉丝的两人。这次的「日本杯』也比往年更加热闹。`,
      );
      await daiya.say_and_wait('小北……加油──！');
      await era.printAndWait(
        '实况「哎呀，东海帝王！从这里一口气追了上来！已经紧紧跟在北部玄驹的后方了！」',
      );
      await daiya.say_and_wait(
        '咦……！？好快……！平时的帝王应该不会在这时候加速才对……！',
      );
      await era.printAndWait('东海帝王非常果敢地紧跟在北部玄驹的背后。');
      await era.printAndWait('这是东海帝王难得一见的进攻方式。');
      await teio.say_and_wait('喝啊啊啊啊啊啊啊！');
      await kita.say_and_wait('唔……啊啊啊啊啊啊啊！');
      await daiya.say_and_wait('小北也跟着加速了……不，不对。这是……！');
      await era.printAndWait(
        '北部玄驹在东海帝王的施压下，虽然一度加快了步调，却又慢慢地调整回原本的节奏。',
      );
      await era.printAndWait(
        '东海帝王和北部玄驹之间，展开了非常激烈的攻防战。',
      );
      await daiya.say_and_wait(
        `小北和帝王，${kita.couple_title}明明都是参加过『日本杯』拥有经历优势的……`,
      );
      await daiya.say_and_wait(
        '却没有局限于专注自己的跑法，反而是积极展开攻势……！',
      );
      await daiya.say_and_wait('……这样的状况如果换作是我……');
      await era.printAndWait(
        '里见光钻看着比赛的进展，似乎开始自己模拟后续可能会发生的状况。',
      );
      await era.printAndWait(
        '实况「东海帝王不停加速！北部玄驹有办法领先到最后吗？还是会被东海帝王反超吗──」',
      );
      await era.printAndWait('观众「哇啊啊啊啊啊啊啊啊啊！」');
      await kita.say_and_wait(
        '吓死我了……！没想到帝王居然会那么紧迫盯人地展开攻势……',
      );
      await teio.say_and_wait('你说什么啊，要是太保守的话，立刻就输掉比赛了！');
      await teio.say_and_wait(
        '我无时无刻都不会忘记挑战的心。为的是要更上一层楼！',
      );
      await teio.say_and_wait(
        '所以『有马纪念』我也一样会以挑战者的身份，挑战小钻跟小北的！',
      );

      await teio.say_and_wait('做好觉悟吧！！');
      await daiya.say_and_wait('──唔！是！！');
      await kita.say_and_wait('好！！我一定会用心迎战的！');
      await daiya.say_and_wait(
        `无时无刻不忘挑战的心……这就是帝王${
          teio.sex
        }身为『知名赛${daiya.uma_sex_title}』的做法……`,
      );
      await daiya.say_and_wait(
        '麦昆是接受挑战的身份，帝王则是挑战者的身份。',
        true,
      );
      await daiya.say_and_wait('那我……', true);
      await daiya.say_and_wait(
        '里见家首次的G1胜利……挑战魔咒、破除魔咒、赢得胜利。',
        true,
      );
      await daiya.say_and_wait(
        '追上小北，在梦寐以求的闪耀系列赛的舞台进行比赛。',
        true,
      );
      await daiya.say_and_wait('最适合我的做法是……！', true);
      await daiya.say_and_wait('……训练员。');
      await era.printAndWait(
        '一阵沉默过后，开口的里见光钻露出了下定决心的表情。',
      );
      await daiya.say_and_wait('我决定今后也要不停地挑战下去。');
      era.printButton('「不停地挑战……？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是的。一直以来我都在挑战各种事情，像是阻挠里见家的魔咒，还有挑战小北。',
      );
      await daiya.say_and_wait(
        `所以，我想我身为一个『知名赛${daiya.uma_sex_title}』，继续挑战各种事物，是不是就是最适合我的做法呢。`,
      );
      await daiya.say_and_wait(
        '就像我挑战麦昆和帝王，在里见家的历史上开启一个新的篇章一样。',
      );
      await daiya.say_and_wait(
        `我想要挑战各种事物，为里见家和赛${daiya.uma_sex_title}界开拓新的历史。`,
      );
      await daiya.say_and_wait(
        '当我这么一想的同时，我才再次发现到，我想要挑战国外的比赛这件事。',
      );
      await daiya.say_and_wait(
        '不单只是为了让大家感受到可能性，而是为了实现我自己的心愿。',
      );
      await daiya.say_and_wait(
        `想要在历史悠久的国外竞赛中取得胜利，把里见的名字刻划在赛${daiya.uma_sex_title}界的历史中。`,
      );
      await daiya.say_and_wait(
        `然后，为里见家和日本赛${daiya.uma_sex_title}开拓新的历史──`,
      );
      await daiya.say_and_wait(
        `我想，这就是我能为赛${daiya.uma_sex_title}界所作的贡献吧。`,
      );
      era.printButton('「你找到自己的答案了呢」', 1);
      await era.input();
      await daiya.say_and_wait('是的！');
      await daiya.say_and_wait(
        `身为『知名赛${daiya.uma_sex_title}』的里见光钻所该有的模样……我已经确定自己的目标了。`,
      );
      await daiya.say_and_wait(
        `我要在『有马纪念』获胜，正式加入『知名赛${daiya.uma_sex_title}』的行列！`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} tannhauser 待兼诗歌剧
     * @param {CharaTalk} dictus 生野狄杜斯
     * @param {CharaTalk} pama 目白善信
     * @param {CharaTalk} helios 大拓太阳神
     * @param {CharaTalk} turbo 双涡轮
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (
      daiya,
      nature,
      tannhauser,
      dictus,
      pama,
      helios,
      turbo,
      kita,
      you,
    ) => {
      await pama.say_and_wait('你好──打扰了──！训练员，要开始圣诞派对了喔！');
      era.printButton('「……什么？」', 1);
      await era.input();
      await era.printAndWait(
        '突然出现的目白善信这么说完后，便自行走进了房间。紧接着优秀素质和其他人也跟着进来了。',
      );
      await daiya.say_and_wait(
        '临时来打扰真的很不好意思。我决定要和善信她们一起办圣诞派对。',
      );
      await daiya.say_and_wait('训练员要不要一起呢？');
      await pama.say_and_wait('要是能顺便把这边借给我们当派对场地那就更好了！');
      await nature.say_and_wait('哎呀，训练员好像呆住了呢。');
      await daiya.say_and_wait('那个啊，其实是这样的……');
      await tannhauser.say_and_wait('咦！？小里家里不会办圣诞派对啊！？');
      await daiya.say_and_wait(
        '是的。因为圣诞节的时候，父亲和母亲都要工作或参加慈善活动。',
      );
      await daiya.say_and_wait(
        '虽然偶尔也会跟着父亲他们去参加合作对象举办的派对，或是参加里见集团主办的派对……',
      );
      await daiya.say_and_wait('但我们家从来没有办过只有家人的派对。');
      await helios.say_and_wait('真假？拿不到礼物也太惨了吧！');
      await daiya.say_and_wait(
        '啊，有礼物喔！圣诞老公公会在晚上的时候，把礼物装在我的袜子里！',
      );
      await daiya.say_and_wait(
        '不过，没有过像电影里面那种圣诞节家庭派对的经验……其实我还蛮向往的呢。',
      );
      await pama.say_and_wait('那我们就来办一个吧！');
      await daiya.say_and_wait('咦！？');
      await dictus.say_and_wait(
        '是啊。虽然没办法招待里见的双亲来参加，但家庭派对这种事情我们还是能做到的。',
      );
      await nature.say_and_wait(
        '如果是温馨的小家庭派对的话，我们还算是非常有经验的──所以就来办一场吧。',
      );
      await turbo.say_and_wait('好耶──！派对派对！');
      await tannhauser.say_and_wait(
        '啊，虽然没办法请来小里的双亲，但邀请小里的训练员呢？',
      );
      await helios.say_and_wait(`诗歌剧根本天才吧！那就直接去找${you.sex}吧！`);
      await dictus.say_and_wait(
        '──事情经过就是如此。提供场地兼参加，你愿意吗？',
      );
      era.printButton('「当然！」', 1);
      await era.input();
      await daiya.say_and_wait('哇，真的可以吗！？太谢谢你了！');
      await dictus.say_and_wait('那就赶快动手装饰一下吧。');
      await nature.say_and_wait('呼──大概就像是这种感觉吧。');
      await daiya.say_and_wait(
        '好棒……好棒喔！明明装饰全都是自己手工做的，竟然可以弄得这么漂亮……！',
      );
      await tannhauser.say_and_wait('我回来啦～！我买了料理跟零食回来喔──！');
      await helios.say_and_wait('炸鸡加披萨☆欧耶！');
      await kita.say_and_wait('晚安──！');
      await daiya.say_and_wait('咦？小北！？');
      await kita.say_and_wait('嘿嘿嘿，刚才在校门口遇到她们，就也被邀请来了！');
      await daiya.say_and_wait('超级欢迎！过来吧，小北！');
      await kita.say_and_wait(
        '是说，现在这个阵容，就跟新生欢迎会的时候一样耶！',
      );
      await daiya.say_and_wait('嗯，会让我想起当时的事情呢！');
      await tannhauser.say_and_wait('哇～当时的新生现在都已经变得这么棒了……');
      await pama.say_and_wait('好了好了，晚点再继续聊吧！趁热先吃！');
      await daiya.say_and_wait(
        '有披萨、沙拉、炸鸡……鱿鱼干、魟鱼鳍干、醋昆布……？',
      );
      await daiya.say_and_wait('原来如此，就是所谓的一般家庭派对的菜单呀。');
      await kita.say_and_wait(
        '不对……但又好像也对啦，我家过圣诞节的时候桌上也会有下酒菜，所以没办法否定……！',
      );
      await tannhauser.say_and_wait(
        '呀～商店街的人给了我好多的东西啊～里面混了很多古早味零食跟下酒菜。真的是觉得好感激喔～',
      );
      await daiya.say_and_wait(
        '我牌出光了！再来就只剩下小北跟涡轮，看谁会是输家了！',
      );
      await kita.say_and_wait('嗯──不然我挑最右边的好了……');
      await kita.say_and_wait('还是最左边的……');
      await kita.say_and_wait('嗯，就决定是最左边这张了！');
      await turbo.say_and_wait('不行不行不行不行──！！左边这张不能给你啦！');
      await nature.say_and_wait('……涡轮，你就死心吧。你的表情真的太好猜了……');
      await era.printAndWait(
        `于是你们就这样一起度过了愉快的时光……圣诞节派对就此落幕了。`,
      );
      era.drawLine();
      await era.printAndWait(
        '接着要把留下来帮忙整理的里见光钻和北部玄驹送回宿舍。',
      );
      await daiya.say_and_wait('嘿嘿嘿，今天真的好开心喔！');
      await daiya.say_and_wait('我原本对圣诞节的印象就是要工作的……');
      await kita.say_and_wait('对耶，每年圣诞节的时候，小钻都会说有事要出门。');
      await daiya.say_and_wait('嗯，下次也想约我弟弟一起参加呢。');
      await kita.say_and_wait(
        '啊，对啊！他一定会喜欢的！明年我们也一起办圣诞派对吧！',
      );
      await daiya.say_and_wait('明年……训练员也愿意参加吗？');
      era.printButton('「好！」', 1);
      await era.input();
      await daiya.say_and_wait('真的吗？那我们就约好了哦？');
      await daiya.say_and_wait(
        '我已经先订走你的时间了，你不能再跟别人有约了哦。',
      );
      await era.printAndWait(
        '原本还没有任何计划的明年，在这一刻增加了和里见光钻一起过圣诞节的约定。',
      );
      await dictus.say_and_wait('那我们差不多该吃蛋糕了──');
      await tannhauser.say_and_wait('啊！？蛋糕……我忘了买了！！');
      await era.printAndWait(
        `${you.name} 和里见光钻一起出门去买蛋糕。然而附近店家的蛋糕都已经卖完了，只好决定去更远的地方购买。`,
      );
      await daiya.say_and_wait('灯饰好漂亮喔。');
      await daiya.say_and_wait(
        '呵呵，像这样走在圣诞节的街道上，也是我一直很向往的电影情节呢。',
      );
      await daiya.say_and_wait(
        '啊，我这么说并不是对父亲他们总是做慈善活动的事情感到不满哦。',
      );
      await daiya.say_and_wait(
        '一起做慈善活动的过程让我学到了很多事情，我也是很自豪地在帮忙的。',
      );
      await daiya.say_and_wait('只是，觉得像这样子的感觉也很不错……');
      era.printButton('「我们慢慢走吧」', 1);
      await era.input();
      await daiya.say_and_wait('可是……大家都还在等蛋糕……');
      era.printButton('「她们还有很多零食可以吃，没关系的」', 1);
      await era.input();
      await daiya.say_and_wait(
        '呵呵呵，说得也是。零食真的多到吃不完的地步呢！',
      );
      await daiya.say_and_wait('……那，我们就慢慢走吧。');
      await daiya.say_and_wait('圣诞节的街道，给人一种像是在外国的感觉呢。');
      await daiya.say_and_wait('这让我……想起以前出国旅行时走过的街道。');
      await daiya.say_and_wait('……我……也想和训练员一起走在异国的街道上呢。');
      await daiya.say_and_wait('训练员呢？');
      await daiya.say_and_wait(
        '当初你答应做我签约训练员的时候，其实有点像是被我强迫的感觉。',
      );
      await daiya.say_and_wait('所以，这次我想好好确认训练员内心的想法。');
      await daiya.say_and_wait('你愿意跟着我一起去国外吗？');
      era.printButton('「只要你愿意，我就跟你一起去」', 1);
      await era.input();
      await daiya.say_and_wait('……嘿嘿嘿。');
      await daiya.say_and_wait('太好了！训练员，今后也要继续麻烦你了！');
      await daiya.say_and_wait('到时候我们要一起在外国的街道上漫步喔！');
      await era.printAndWait(
        `看着充满异国风情的圣诞节街道。${you.name} 和里见光钻定下了一个不远将来的约定。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '迎向有马纪念';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, kita) => {
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
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '至宝';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, teio, mcqueen, kita) => {
      await era.printAndWait(
        '实况「经过第二弯道的下坡，来到了看台对面的直线！领先集团目前的步调如何呢？」',
      );
      await era.printAndWait(
        '戴眼镜的男性「中山的草地2500米会经过六个弯道。因为赛道有大幅的高低差，更考验韧性。想要单靠速度强行冲线是很困难的。」',
      );
      await era.printAndWait('穿着帽T的男性「怎么突然这么说？」');
      await era.printAndWait(
        '戴眼镜的男性「终点前还有个非常陡的『破坏心脏的坡道』在等她们，比赛的结果不到最后一刻都是未知数。」',
      );
      await era.printAndWait('所有人都屏息以待地盯着比赛。然后──');
      await daiya.say_and_wait('喝啊啊啊啊啊啊啊啊啊啊啊！！');
      await era.printAndWait(
        '实况「有人冲出来了！是里见光钻！领先的是里见光钻！！」',
      );
      await kita.say_and_wait('唔啊啊啊啊啊啊！！');
      await era.printAndWait('麦昆&帝王「喝啊啊啊啊啊啊啊！」');
      await era.printAndWait(
        '实况「里见光钻冲上最后的坡道！一口气超越了她的挚友和崇拜对象──」',
      );
      await era.printAndWait('实况「里见光钻以第一名之姿冲过终点！！」');
      await era.printAndWait('（哇啊啊啊啊啊啊啊啊啊！）');
      await daiya.say_and_wait('呼、呼、呼……');
      await mcqueen.say_and_wait('恭喜你，光钻。是你赢了呢。');
      await daiya.say_and_wait('麦昆……！');
      await mcqueen.say_and_wait(
        '连在长距离的比赛也输给你了呢。你的实力已经无庸置疑了。',
      );
      await mcqueen.say_and_wait(
        `──你这不是已经拥有了吗。你所说的『知名赛${daiya.uma_sex_title}』的实力。`,
      );
      await daiya.say_and_wait('谢谢……！');
      await teio.say_and_wait(
        '唔～想不到小钻跟小北竟然都已经变得这么厉害了……这真的是超乎我的想像。',
      );
      await kita.say_and_wait('帝王……！我我我我好开心喔～～！！');
      await teio.say_and_wait(
        '喂喂，这可还不是结束吧。不如说是才刚要开始而已吧！',
      );
      await teio.say_and_wait(
        '一旦停下脚步，立刻就会被超越。我还打算要再次挑战你们呢。',
      );
      await teio.say_and_wait(
        `况且，像你们这样厉害的赛${daiya.uma_sex_title}，之后也还会陆陆续续出现吧。`,
      );
      await kita.say_and_wait(
        '是！我不会大意的！为了带给大家笑容，我一定会变得更强、更强的！',
      );
      await mcqueen.say_and_wait(
        '……光钻，你呢？已经清楚自己该前进的方向了吗？',
      );
      await daiya.say_and_wait(
        `……是。身为里见家的赛${daiya.uma_sex_title}，我要引领里见家，开拓更多的历史。`,
      );
      await daiya.say_and_wait(
        `用成绩在赛${daiya.uma_sex_title}界留下纪录，就这样继续打造属于里见家的历史。`,
      );
      await mcqueen.say_and_wait('原来如此。那么，你打算开拓怎样的道路呢？');
      await daiya.say_and_wait(
        '──迈向顶点的道路。我要像我的名字一样，挑战绽放出最顶级的钻石光辉。',
      );
      await daiya.say_and_wait(
        `挑战日本、世界各地的顶点，发扬赛${daiya.uma_sex_title}界。`,
      );
      await daiya.say_and_wait(
        `这就是我──里见光钻所认为的『知名赛${daiya.uma_sex_title}』该有的姿态。`,
      );
      await daiya.say_and_wait(
        `我现在才刚到这条路的入口处。今后我会以此为志，继续朝『知名赛${daiya.uma_sex_title}』迈进。`,
      );
      await mcqueen.say_and_wait('呵呵，这是很了不起的心志呢。');
      await mcqueen.say_and_wait(
        `那接下来就像个『知名赛${daiya.uma_sex_title}』一般，出发去吧！大家都在等你了！`,
      );
      await daiya.say_and_wait('好的！');
      await daiya.say_and_wait('各位，谢谢你们为我加油！');
      await era.printAndWait('观众A「光钻────！！恭喜你────！」');
      await era.printAndWait(
        `观众B「赛${daiya.uma_sex_title}界的至宝！！没有人能胜过钻石的光辉！」`,
      );
      await daiya.say_and_wait('呵呵呵，我也希望一直保持。');
      await daiya.say_and_wait(
        `里见光钻身为里见家的赛${daiya.uma_sex_title}，会尽心尽力、竭尽所能地为日本赛${daiya.uma_sex_title}界的发展做出贡献。`,
      );
      await daiya.say_and_wait('而这一条路今后也──');
      await daiya.say_and_wait('小北！！');
      await daiya.say_and_wait('我希望可以跟小北继续一起挑战今后的种种。');
      await daiya.say_and_wait(
        '就算我们参加的比赛不一样了，目标跟前进的方向不一样了。',
      );
      await daiya.say_and_wait('即使我们在各自的道路前进──');
      await daiya.say_and_wait('我也想要继续跟小北并肩向前！');
      await kita.say_and_wait('小钻……！');
      await daiya.say_and_wait('我们一起继续跑下去吧！！');
      await kita.say_and_wait('嗯！！今后也要一直一起！');
      await kita.say_and_wait(
        '不过在那之前！下一场比赛！！我一定会赢过小钻的！',
      );
      await kita.say_and_wait('我目前的目标，首先就是这个！');
      await daiya.say_and_wait('呵呵呵！我不会输的！');
      await era.printAndWait('观众C「唔喔喔喔喔！很好喔你们！！我很期待喔！」');
      await era.printAndWait(
        '戴眼镜的男性「我保证，我会一直守护并见证里见，以及你们两人的历史！！」',
      );
      await era.printAndWait(
        '穿着帽T的男性「我们的心永远都和你们同在！支持你们！直到永远！！」',
      );
      await daiya.say_and_wait('谢谢！能够受到大家这么温暖的支持……');
      await daiya.say_and_wait('嘿嘿嘿，光钻真是个幸福的人！');
      await era.printAndWait('说完，里见光钻露出无比爽朗的笑容。');
      await era.printAndWait(
        '那是比任何宝石、比钻石都要更加耀眼的──里见光钻的光芒。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = '跟着憧憬一起';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {PrintedSpan} tenn_sho
     * @param {PrintedSpan} japa_cup
     * @param {PrintedSpan} arim_kin
     */
    const f = async (daiya, mcqueen, tenn_sho, japa_cup, arim_kin) => {
      await era.printAndWait([
        tenn_sho,
        '、',
        japa_cup,
        '，以及',
        arim_kin,
        '。',
      ]);
      await era.printAndWait(
        '里见光钻全数赢得了胜利，顺利达成了「秋季资深三冠』！',
      );
      await daiya.say_and_wait('──寄出。这样就全都回信完了吧。');
      era.printButton('「感觉会是一场盛大的活动呢」', 1);
      await era.input();
      await era.printAndWait(
        '据说里见集团的相关设施准备要举办里见光钻的「秋季资深三冠纪念活动』。',
      );
      await daiya.say_and_wait(
        '是的。我的『秋季资深三冠』纪念活动──我刚才就是在回信告诉大家我也会尽全力协助举办。',
      );
      await daiya.say_and_wait(
        '应该今天就会在咖啡厅推出『秋季资深三冠圣代』了吧。所以我打算先过去打声招呼。',
      );
      await daiya.say_and_wait('如果训练员刚好有空的话，要不要一起去呢？');
      era.printButton('「我跟你一起去吧！」', 1);
      await era.input();
      await daiya.say_and_wait('嘿嘿嘿，太好了♪那我们就出发吧。');
      await mcqueen.say_and_wait('哎呀，里见。我正好要去找你呢。');
      await daiya.say_and_wait('麦昆！找我有什么事吗？');
      await mcqueen.say_and_wait('嗯，我想说要帮你庆祝一下……你正在忙吗？');
      await daiya.say_and_wait('其实我们正在去里见集团咖啡厅的路上……');
      await daiya.say_and_wait(
        '啊！如果不嫌弃的话，麦昆要不要也一起去吃『秋季资深三冠圣代』呢？',
      );
      await mcqueen.say_and_wait('圣代！？');
      await daiya.say_and_wait(
        '没错，因为要推出纪念我达成『秋季资深三冠』的限定圣代，所以我打算去打个招呼顺便试吃。',
      );
      await mcqueen.say_and_wait(
        '限定的……！这、这样啊。既然这么难得，那我就跟你们一起去吧。',
      );
      await mcqueen.say_and_wait(
        '我再次郑重地……祝贺两位，恭喜你们达成『秋季资深三冠』。',
      );
      await mcqueen.say_and_wait(
        '这是击败了我和帝王，还有北部所赢得的『秋季资深三冠』。',
      );
      await mcqueen.say_and_wait(
        `不单只是光钻个人的成就，也算是里见家在赛${daiya.uma_sex_title}界所留下的辉煌成绩。`,
      );
      await mcqueen.say_and_wait('……你真的非常努力呢，光钻。');
      await daiya.say_and_wait('……！谢……谢谢你！！');
      await mcqueen.say_and_wait(
        '呵呵，虽然我是用前辈的姿态恭喜你，但其实我们的立场是一样的。',
      );
      await mcqueen.say_and_wait(
        `我们身为彼此的对手，且同样是背负家族名声的赛${daiya.uma_sex_title}。今后也要继续互相切磋琢磨喔。`,
      );
      await daiya.say_and_wait('好的！我会继续精进自己的！');
      await daiya.say_and_wait('虽然我还有很多事情需要继续向麦昆学习，但……');
      await daiya.say_and_wait('我也应该要自己多加尝试，并继续摸索才对呢。');
      await daiya.say_and_wait(
        '我也会把身为里见家代表的自觉深深烙印在心中的！',
      );
      await mcqueen.say_and_wait(
        '是啊。不过，有什么烦恼的时候就来找我商量吧。毕竟我们也是同学嘛。',
      );
      await daiya.say_and_wait('哇……麦昆……！');
      await daiya.say_and_wait('你真的好棒喔……是我永远崇拜的人……！');
      await mcqueen.say_and_wait(
        '呵呵，我深感光荣喔。但今后也将会出现，崇拜着里见的人吧。',
      );
      await mcqueen.say_and_wait('再来就换你做一个好的前辈了。');
      await daiya.say_and_wait(
        '好的。希望我可以像麦昆当初帮助我那样，也成为别人的助力……',
      );
      await mcqueen.say_and_wait('你一定没问题的。对吧？训练员。');
      era.printButton('「是啊！一定没问题的！」', 1);
      await era.input();
      await daiya.say_and_wait('你们两位……谢谢你们！嘿嘿嘿，我好开心喔……♪');
      await daiya.say_and_wait(
        '啊，圣代都开始融化了！我们赶快吃吧！麦昆也请尽情享用吧。',
      );
      await era.printAndWait(
        '目白麦昆所说的话，对里见光钻来说是比什么都来得更值得开心的祝贺！',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_sos: (() => {
    const title = '不停打嗝SOS';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, mcqueen, you) => {
      await era.printAndWait(
        `放学后，${you.name} 看见奔向目白麦昆的里见光钻。`,
      );
      await mcqueen.say_and_wait('……嗝！');
      await daiya.say_and_wait('麦昆，这个给你。这样说不定就能停下来了！');
      await mcqueen.say_and_wait('哎呀，谢谢你。那我就不客气地收下了。');
      await mcqueen.say_and_wait('……嗝！');
      await mcqueen.say_and_wait('停不下来呢……待会我还要在聚会中致词的说。');
      await mcqueen.say_and_wait(
        '就光是现在，时间也在一分一秒地流逝……怎么办才好……！',
      );
      await daiya.say_and_wait('麦昆……');
      await daiya.say_and_wait(
        '……那个，可以把派对之前的时间都交给我吗？我想让你尝试别的方法！',
      );
      await daiya.say_and_wait('……啊，训练员！不好意思，我有事情要拜托你！');
      await daiya.say_and_wait('请你帮我在学园内广播，禁止任何人到顶楼！');
      era.printButton('「你打算做什么？」', 1);
      await era.input();
      await daiya.say_and_wait('我现在没有时间解释……拜托你了！');
      await mcqueen.say_and_wait('怎、怎么好像闹得很大一样……');
      await era.printAndWait(
        `在${daiya.sex}的拜托下，${you.name} 只好照做去广播了。不知道${daiya.sex}接下来打算做些什么……？`,
      );
      await mcqueen.say_and_wait('…………嗝。已经快要到聚会的时间了……');
      await daiya.say_and_wait('再等我一下下就好……啊，来了！');
      await you.say_and_wait('螺旋桨声……！', true);
      await era.printAndWait(
        '医疗人员「HQ！HQ！抵达特雷森学园了！接下来将对大小姐的同学进行协助！」',
      );
      await mcqueen.say_and_wait('直、直升机！？这是什么状况……！？');
      await daiya.say_and_wait('我把集团的私人医疗团队叫来了。');
      await you.say_and_wait('医疗器材的声音……！', true);
      await daiya.say_and_wait(
        '这是搭载了ICU等最新医疗设备的移动式集中治疗箱！',
      );
      await mcqueen.say_and_wait('这样不会太夸张了吗！？');
      await daiya.say_and_wait('来，请进去里面吧！这样打嗝应该就能停下来了。');
      await mcqueen.say_and_wait('太、太乱来了吧～！？');
      await mcqueen.say_and_wait(
        '……呃，哎呀？那个……因为发生太过冲击的事情，打嗝好像停下来了。',
      );
      await daiya.say_and_wait('咦？真的吗？也就是说战胜打嗝了，对吧！');
      await mcqueen.say_and_wait(
        '真是的，拜托不要做出如此令人吃惊的事情啊。不过……谢谢你，里见。',
      );
      await daiya.say_and_wait(
        '不会，这根本没什么！只要能稍微帮上点忙……我就很开心了！',
      );
      era.printButton('「看来你努力动员了这一切呢，辛苦了！」（耐力+20）', 1);
      era.printButton('「完全是超乎想像的规模……」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('嘿嘿嘿，因为是要帮忙麦昆嘛♪');
        await daiya.say_and_wait(
          '再遇到什么问题的时候请告诉我！我一定会尽全力帮忙的！',
        );
        await mcqueen.say_and_wait(
          '好、好的……到时候麻烦你在一般正常范畴内帮忙……',
        );
        await daiya.say_and_wait('呵呵呵，是！');
        await era.printAndWait(
          '里见光钻非常卖力的模样看起来比平常还要更加可靠。',
        );
      } else {
        await daiya.say_and_wait('原来如此，应该要再稍微低调一点行事比较好。');
        await daiya.say_and_wait(
          '啊，对呀……！我当时应该用私人飞机载麦昆去医院才对的！',
        );
        await mcqueen.say_and_wait('……是、是这样吗……');
        await era.printAndWait(
          `想法异于常人的里见光钻真是让 ${you.name} 震惊不已。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweepy5: (() => {
    const title = 'Sweepy5☆入团测验！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} sweepy 东商变革
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, tachyon, sweepy, kita, you) => {
      await era.printAndWait(
        `那是发生在 ${you.name} 和里见光钻两人走在走廊上时的事情。`,
      );
      await sweepy.print_and_wait('？？？「找到了──────！！！！」');
      await sweepy.say_and_wait(
        '里见！从今天开始，我就任命你为『魔法少女 · 光钻』！',
      );
      await daiya.say_and_wait('咦？『魔法少女 · 光钻』……吗？');
      await kita.say_and_wait(
        '『魔法少女☆Sweepy5』。魔法少女 · 玄驹登场！嘿嘿♪',
      );
      await daiya.say_and_wait('哇啊，连小北也在说这个！？');
      await kita.say_and_wait(
        '嘿嘿♪其实是一个由变革创立的团体，叫做『魔法少女☆Sweepy5』啦。',
      );
      await kita.say_and_wait('我也是在不久前刚被任命为魔法少女 · 玄驹的！');
      await kita.say_and_wait(
        '然后我就想说，要是小钻也愿意一起参加的话……你觉得呢？',
      );
      await sweepy.say_and_wait(
        '团员有我──天才魔法少女 Sweepy 跟魔法少女 · 玄驹，还有速子博士喔。',
      );
      await daiya.say_and_wait(
        '哎呀，大家一起玩魔法吗？还是什么之类的吗？真有趣♪请一定要让我参加！',
      );
      await sweepy.say_and_wait(
        '真的吗！？太好了♪那我们立刻开始练习魔法吧！我看看──',
      );
      await sweepy.say_and_wait('──啊！那边那个家伙！试着打倒那个家伙吧！');
      era.printButton('「咦！？」', 1);
      await era.input();
      await sweepy.say_and_wait(
        '敌人总是难以预测什么时候会出现的。一定要好好练习才行！',
      );
      await daiya.say_and_wait(
        `要打倒训练员……？可是，要怎么打倒${you.sex}才好呢？`,
      );
      await you.say_and_wait('居然是以我会被打倒为前提啊……', true);
      await sweepy.say_and_wait('这个我会教你♪看好啰。要像我这样念出咒语──');
      await tachyon.print_and_wait(
        '？？？「……呵呵呵，打倒敌人的方式可不只有魔法而已喔。」',
      );
      await tachyon.say_and_wait(
        '也有用药物强化你自己来打倒敌人的方法。你如果选这个方法的话，就由我来协助你吧。',
      );
      await sweepy.say_and_wait(
        '喂，现在是我的表现时间耶！！里见，你才不会想跟速子学，比较想跟我学才对吧！？',
      );
      await daiya.say_and_wait(
        '呵呵，我觉得两种都很有趣喔♪对了，训练员觉得跟谁学比较好呢？',
      );
      era.printButton('「跟东商变革学吧」（速度+20）', 1);
      era.printButton('「找爱丽速子帮忙吧」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sweepy.say_and_wait(
          '哼哼～这还用说嘛！那就让我示范怎么用魔法给你看♪准备好啰──',
        );
        await sweepy.say_and_wait('情情 · 爱爱 · 爱情花☆繁星之光降落吧！');
        await era.printAndWait(
          '……什么也没有发生。但她的确架式十足，不愧是自称魔法少女的人。',
        );
        await sweepy.say_and_wait(
          '呵呵，学会了吗？像这样依照自己的风格念出咒语就可以了♪',
        );
        await daiya.say_and_wait(
          '原来如此，依照自己的风格念出咒语……好，那我来试试看！',
        );
        await kita.say_and_wait('加油！小钻一定没有问题的！');
        await daiya.say_and_wait('请看，耀眼钻石的光芒！静谧的光辉──！');
        await era.printAndWait(
          `当下 ${you.name} 真的有种──看到耀眼光芒的感觉，于是 ${you.name} 决定倒下。`,
        );
        await sweepy.say_and_wait(
          '哇啊，真的看起来亮晶晶的耶……！里见，你很厉害嘛♪',
        );
        await sweepy.say_and_wait(
          '魔法少女 · 光钻！我正式允许你入团！现在开始你就是『魔法少女☆Sweepy5』的团员了♪知道了吗？',
        );
        await daiya.say_and_wait('是！魔法少女 · 光钻，今后会更加耀眼的！');
        await era.printAndWait(
          `虽然我不太懂魔法相关的东西，但看到几个同龄的学生玩得这么开心的模样，让 ${you.name} 不由得也跟着开心了起来。`,
        );
      } else {
        await tachyon.say_and_wait(
          '呵呵呵，选得好！那么里见，首先要用药物来强化身体。一口气吞下去吧。',
        );
        await era.printAndWait(
          `爱丽速子准备把颜色诡异的药给拿出来……令 ${you.name} 不禁觉得有点危险。`,
        );
        await kita.say_and_wait('真是夸张的颜色……小钻你真的要喝吗？');
        era.printButton('「还是算了吧！」', 1);
        await era.input();
        await tachyon.say_and_wait('咦──！什么嘛──要反悔吗？');
        await daiya.say_and_wait(
          '不，一旦决定了我就绝对不反悔。就算是训练员也不能改变我的决定！',
        );
        await you.say_and_wait('可是——');
        await daiya.say_and_wait('里见光钻要一口气吞下去了！');
        await era.printAndWait(
          `${daiya.sex}从爱丽速子手中接过药，一口气吞下去。`,
        );
        await daiya.say_and_wait('嗯──这是我没吃过的味道呢！真有趣！');
        await tachyon.say_and_wait(
          '喔喔──！为了促进血液循环，我加了很多的辣椒素进去，你居然没有任感觉吗！',
        );
        await tachyon.say_and_wait(
          '呵呵呵……很厉害嘛你！好，就这样去跑步看看吧！',
        );
        await you.say_and_wait('辣椒素……！？', true);
        await sweepy.say_and_wait(
          '你、你很有一套嘛……！魔法少女 · 光钻！现在开始你就正式是『魔法少女☆Sweepy5』的团员了♪',
        );
        await era.printAndWait(
          `东商变革等人离开后，${you.name} 走向里见光钻……${you.name} 很在意${daiya.sex}刚才喝下辣椒素的事情。`,
        );
        era.printButton('「你刚才……不觉得辣吗？」', 1);
        await era.input();
        await daiya.say_and_wait('……你发现啦？');
        await daiya.say_and_wait(
          '呵呵，其实我的舌头觉得非常刺痛，但我总不好在大家面前摆脸色嘛♪',
        );
        await era.printAndWait(
          `${daiya.sex}偷偷地把实情告诉 ${you.name}。原来是在逞强啊，这样和${daiya.sex}年龄相符的举止令 ${you.name} 会心一笑。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_high_dream: (() => {
    const title = '过高的理想';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, gs, you) => {
      await era.printAndWait(
        `${you.name} 和里见光钻走在一起时，看见了表情很严肃的黄金船。`,
      );
      await gs.say_and_wait('大约是这样的大小吗？不对，应该要能容纳更……');
      await daiya.say_and_wait('黄金船，你在想什么事情吗？');
      await gs.say_and_wait('是里见啊……好，我就告诉你吧。跟我来。');
      await gs.say_and_wait('我问你，你看到这个泳池，有没有觉得怎么样啊？');
      await daiya.say_and_wait('我想想……平常训练的时候经常使用？');
      await daiya.say_and_wait(
        '还有就是……嗯～要是再大一点的话，应该会更好玩。我在外国游过很大的游泳池，当时真的觉得很开心！',
      );
      await gs.say_and_wait('说得好啊，阿里！我给你564分！');
      await daiya.say_and_wait('哇啊，谢谢你♪');
      await gs.say_and_wait('这个泳池的大小用来做训练或许是很足够没错……');
      await gs.say_and_wait(
        `但是呢，我更相信赛${daiya.uma_sex_title}的可能性！宽敞泳池的解放感能为赛${daiya.uma_sex_title}带来什么样的新境界，这是我想要亲眼看见的！`,
      );
      await daiya.say_and_wait(
        `哎呀！原来黄金船是这么地……为赛${daiya.uma_sex_title}设想很多的人呀！`,
      );
      await gs.say_and_wait('是啊，所以我决定了……我要──');
      await gs.say_and_wait('把这个泳池变成鄂霍次克海！');
      await daiya.say_and_wait('鄂霍次克海！……鄂霍次克海？所以是什么意思呀？');
      await gs.say_and_wait(
        '我要把鄂霍次克海移到泳池来啦！到时候就可以尽情做训练了！',
      );
      await daiya.say_and_wait(
        '那还真是规模庞大的工程……！真的是有可能做到的吗？',
      );
      await gs.say_and_wait(
        '应该吧！全校学生一起花五十年用水桶接力过来就能做到了吧！',
      );
      era.printButton('「难度太高了……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '不过，撇开现实面不谈的话，我觉得这是一个很棒的理想喔。',
      );
      await daiya.say_and_wait('……而且，我听完之后觉得很期待呢！');
      await gs.say_and_wait('里仔……你这家伙真是！');
      await daiya.say_and_wait('扩大泳池的空间我也是很赞成的。');
      await daiya.say_and_wait('我们来做吧，黄金船！我会全力协助你的！');
      era.printButton('「现在的大小就很够用了」（力量+20）', 1);
      era.printButton('「让学园知道这个想法吧！」（智力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '当然是这样没错，但经过改造之后，就会变成更好的环境喔？',
        );
        await you.say_and_wait('宝贵的时间就要全部耗费在水桶接力了耶？');
        await daiya.say_and_wait('啊……！？那、那倒是……');
        await gs.say_and_wait('伤脑筋耶……你们都这么说了，我也不好勉强什么。');
        await gs.say_and_wait(
          '不过呢，我总有一天会执行的。在正式要执行之前，一定要先做好万全的准备，并把牙给磨利……用磨萝卜泥的器具。',
        );
        await daiya.say_and_wait('……嗯！');
        await era.printAndWait(
          `两人用力地握手约定。等到正式执行那天……${you.name} 再努力阻止她们吧。`,
        );
      } else {
        await daiya.say_and_wait('这样的话……是不是应该要做一份企划书呢？');
        await gs.say_and_wait('好主意！提出具体的内容就会更有说服力！');
        await daiya.say_and_wait('呵呵呵，感觉越来越有趣了呢♪');
        await daiya.say_and_wait(
          '『把特雷森学园的游泳池变成鄂霍次克海计划』开始执行！',
        );
        await era.printAndWait(
          '后来，虽然计划没能实现，对里见光钻来说却是一次不错的经验！',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_chase: (() => {
    const title = '追逐憧憬';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, gs, mcqueen, you) => {
      await era.printAndWait(`某天，${you.name} 走在广场上时──`);
      await daiya.say_and_wait('…………');
      era.printButton('「你在做什么？」', 1);
      await era.input();
      await daiya.say_and_wait('训练员！？');
      await daiya.say_and_wait('嘘──！我现在正在调查麦昆……！');
      await mcqueen.say_and_wait('……');
      await mcqueen.say_and_wait('感觉到了视线？……不对，应该是我多想了吧。');
      await daiya.say_and_wait('……呼。真是好险呀……！');
      await daiya.say_and_wait(
        '在我搞清楚麦昆实力强大的秘密之前，绝不能被她发现我在偷偷观察她。',
      );
      await you.say_and_wait(`干脆直接问${mcqueen.sex}吧`);
      await daiya.say_and_wait('不行！自己调查比较有趣嘛！');
      await daiya.say_and_wait('……哎呀？麦昆不见了！？');
      await daiya.say_and_wait('只是稍微没注意而已……跑去哪里了呢？');
      era.printButton('「说不定是去练习室练歌了」（根性+20）', 1);
      era.printButton('「感觉正在食堂抱头苦恼呢」（智力+20）', 2);
      era.printButton(
        `「${mcqueen.sex} 一定是去训练赛道锻炼自己了！」（力量+20）`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait('我知道了，那就过去看看吧！');
          await daiya.say_and_wait('练习室有好几间呢。该从哪里找起──');
          await mcqueen.print_and_wait('？？？「唔喔～燃烧吧～！」');
          await daiya.say_and_wait('歌声……是从这一间传出来的。');
          await mcqueen.say_and_wait('承载着梦想，啊──我们的～胜利……♪');
          await daiya.say_and_wait(
            '哇啊～！充满透明感又很有力道的歌声……好棒喔♪',
          );
          await mcqueen.say_and_wait('里见！？咦？那个，你怎么会在这里……？');
          await mcqueen.say_and_wait(
            '难道是……我想说有隔音就不小心唱太大声了……！',
          );
          await daiya.say_and_wait(
            '呵呵，多亏是这样我才能发现的喔！麦昆的秘密。',
          );
          await mcqueen.say_and_wait(
            '秘、秘密！？我不明白你的意思呢。刚、刚才我只是为了转换一下心情才唱歌的……！',
          );
          await daiya.say_and_wait('……不，我已经什么都知道了。麦昆，你其实──');
          await daiya.say_and_wait(
            '是用歌声来鼓舞自己，进而提升自己的表演能力的吧！',
          );
          await mcqueen.say_and_wait(
            '……咦？啊、啊……的确是这样没错哦？哦、哦呵呵呵～',
          );
          await daiya.say_and_wait(
            '那个……请你也教教我吧。教我刚才那首听了会让人觉得心情激动的歌……！',
          );
          await mcqueen.say_and_wait('心情激动……？意思是说……你听了很喜欢吗？');
          await daiya.say_and_wait(
            '是的。旋律非常热情，不知不觉就会跟着变得很愉快──',
          );
          await daiya.say_and_wait('我想要更深入地了解蕴含在这首歌中的心意！');
          await mcqueen.say_and_wait('……！');
          await mcqueen.say_and_wait(
            '……我事先声明两点。第一，今天的事情绝不能告诉别人。',
          );
          await mcqueen.say_and_wait('第二──我的教学可不轻松哦。');
          await daiya.say_and_wait('……！了解！');
          await mcqueen.say_and_wait(
            '来，抬头挺胸！用响彻云霄的声量……三，唱。',
          );
          await daiya.say_and_wait('燃烧吧～！');
          await era.printAndWait(
            '里见光钻透过用最极限的声量唱歌，学会了超热血歌曲。',
          );
          break;
        case 2:
          await daiya.say_and_wait(
            '呵呵呵，我忍不住就想像了一下那个画面了呢。那我们走吧。',
          );
          await mcqueen.say_and_wait('松饼、水果塔……甜地瓜跟杏仁豆腐……！');
          await mcqueen.say_and_wait(
            '每一个都充满魅力啊……但我一定要避免热量过量的状况！快动脑筋想……快仔细想……！',
          );
          await daiya.say_and_wait(
            '想不到麦昆竟然在选甜点的时候，会慎重认真到这种地步……！',
          );
          await daiya.say_and_wait(
            '……我觉得我好像明白了。麦昆强大实力的秘密。',
          );
          await daiya.say_and_wait(
            '无论是日常中多琐碎的小事都认真看待、思考。每一步都慎重行事是很重要的……！',
          );
          await daiya.say_and_wait('麦昆！');
          await mcqueen.say_and_wait(
            '呀啊！里、里见……！？你该不会……都、都看见了……！？',
          );
          await daiya.say_and_wait(
            '是的，我看见你表情非常认真严肃……你真的很帅气喔，麦昆！',
          );
          await mcqueen.say_and_wait(
            '听、听你这么说……我不知道该开心还是该不好意思呢……！',
          );
          await daiya.say_and_wait('我也要像麦昆一样，慎重认真地选甜点。');
          await daiya.say_and_wait('嗯～我想想喔……哎呀？');
          await daiya.say_and_wait(
            '现在正在举办……『珍奇甜点展』呢！那我就选那个吧♪',
          );
          await mcqueen.say_and_wait(
            '『墨鱼起司蛋糕』、『布丁寿司』……这是什么菜单啊！？',
          );
          await mcqueen.say_and_wait(
            '那个，里见……你刚才不是说要慎重认真地选吗？',
          );
          await daiya.say_and_wait(
            '是呀！这些各式各样神秘奇妙的甜点……不觉得很值得选来吃吗♪',
          );
          await mcqueen.say_and_wait(
            '……！真是了不起的探究心……！你这是和甜点的正面对决吧？',
          );
          await mcqueen.say_and_wait('……我也要挑战！挑战『珍奇甜点展』！');
          await daiya.say_and_wait('麦昆……！我们一起开拓甜点的新境界吧。');
          await daiya.say_and_wait('那么……要不要选那个『蕈菇蒙布朗』呢？');
          await mcqueen.say_and_wait('……呃，里见。我可以再慢慢想想看吗？');
          await era.printAndWait(
            '两人一起经过苦思后做出选择，一起品尝了美味的甜点！',
          );
          break;
        case 3:
          await daiya.say_and_wait('是秘密特训的必做项目呢。我们去看看吧……！');
          await mcqueen.say_and_wait('请问……你在赛道的正中间做什么呢？');
          await gs.say_and_wait(
            '我在假装自己是关隘啊。想通过就要搞笑把我逗笑。',
          );
          await mcqueen.say_and_wait(
            '你这样会妨碍到别人的。快点让开吧，黄金船。',
          );
          await gs.say_and_wait('……嗯？你这个表演有什么好笑的？');
          await mcqueen.say_and_wait(
            '我才没有在表演！真是的，那我只好用蛮力……！',
          );
          await mcqueen.say_and_wait('预备──唔！！');
          await gs.say_and_wait('喔哇！？我居然推不回去……！？');
          await gs.say_and_wait(
            '然后就这样走掉了……力气怎么那么大啊。那家伙真不简单耶。',
          );
          await daiya.say_and_wait(
            '那个，请问你们刚才在做什么？看起来像是在相扑的感觉……',
          );
          await gs.say_and_wait('没错，你正好撞见了重头戏。阿船我完全没辙呢。');
          await daiya.say_and_wait(
            '难道麦昆实力强大的原因，就是因为她有非常坚实的腰跟腿……！？',
          );
          await daiya.say_and_wait('……黄金船。能请你也跟我相扑吗……麻烦了！');
          await gs.say_and_wait('呼……你还早得很呢。先学会怎么搞笑再说吧。');
          await daiya.say_and_wait('搞笑吗……？');
          await mcqueen.say_and_wait('……呼，成绩一直没办法进步呢。');
          await mcqueen.say_and_wait(
            '不知道是不是刚才用掉太多力气了。黄金船……希望她不要又给谁惹麻烦才好。',
          );
          await mcqueen.say_and_wait('……哎呀？那是？');
          await gs.say_and_wait('肌肌、肌肌──');
          await gs.say_and_wait('比目鱼肌！！');
          await daiya.say_and_wait('比目鱼肌！');
          await gs.say_and_wait(
            '不行、不行！完全没用到腰的力量！麦昆可是比你认真多了喔！',
          );
          await daiya.say_and_wait('……是！！');
          await mcqueen.say_and_wait('我哪有做这种事！');
          await daiya.say_and_wait('麦昆！？');
          await daiya.say_and_wait(
            '呃，这是怎么一回事呢──哎呀，黄金船不见了？',
          );
          await era.printAndWait(
            '里见光钻因为进行奇妙的搞笑训练，意外地锻炼到了肌肉！',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_diamond_cotton: (() => {
    const title = '坚硬的钻石在棉花里';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, you) => {
      await era.printAndWait('今天是包含拍摄决胜服的采访日。');
      await era.printAndWait(
        `${you.name} 和里见光钻一起稍微提早前往摄影棚。现在──`,
      );
      await daiya.say_and_wait('哼、哼、哼～♪');
      await era.printAndWait(
        `换上决胜服的${daiya.sex}在摄影机前做动作、摆姿势，时不时也会去看屏幕确认拍出来的成果。`,
      );
      era.printButton('「很认真在确认呢」', 1);
      await era.input();
      await daiya.say_and_wait('是呀，我在确认有没有完整呈现出我想要的感觉。');
      await you.say_and_wait('你想要的感觉？');
      await daiya.say_and_wait(
        '是的，这件决胜服是以我平常就很重视的一些想法为题材所设计的。',
      );
      await daiya.say_and_wait('我希望让看到采访报导的人都能感受到我的想法。');
      await era.printAndWait(
        `这么说起来，${daiya.sex}的决胜服的确有特别让人印象深刻的部分。`,
      );
      era.printButton('「钻石饰品最让人有印象呢」（根性+20）', 1);
      era.printButton('「荷叶边最让人有印象呢」（耐力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('是的，没有错！');
        await daiya.say_and_wait(
          '这当然是跟我的名字有关系，但同时也带有意志坚定的意思喔。',
        );
        await daiya.say_and_wait('举例来说，以钟乳石为例。');
        await daiya.say_and_wait(
          '那是雨水降落大地，含有石灰岩的水分落地而生成的。',
        );
        await daiya.say_and_wait(
          '经过了数万年、数十万年的时间，不断地在同一个地方累积，才能变得又坚硬又大。',
        );
        await daiya.say_and_wait(
          `我认为，赛${daiya.uma_sex_title}的强大是跟这个很接近的。`,
        );
        await daiya.say_and_wait('──换句换说，就是贯彻到底的意思。');
        await daiya.say_and_wait(
          '确立目标、持续前进。我相信这些努力是会带来胜利的。',
        );
        await era.printAndWait(
          `${daiya.sex}在说这些话时的眼神中，浮现着和她钻石饰品一样坚强的信念和意志。`,
        );
      } else {
        await daiya.say_and_wait('哎呀，你竟然注意到了这点！');
        await daiya.say_and_wait(
          '虽然多少也是因为我自己觉得荷叶边很可爱、很喜欢，但这其中主要的还是它的柔软度喔。',
        );
        await daiya.say_and_wait(
          '目标设得越高、越远，前进的过程中就会遭遇更多的苦难。',
        );
        await daiya.say_and_wait(
          '要是面对每一个困难都用硬碰硬的方式，那无论再坚硬的宝石也都会出现裂痕的。',
        );
        await daiya.say_and_wait('所以──有时候以柔克刚也是很重要的。');
        await daiya.say_and_wait(
          '我相信，这样一来就能减少无谓的顾虑，并专心地朝该前进的方向迈进。',
        );
        await era.printAndWait(
          `${daiya.sex}在说这些话时的眼神中，浮现着和${daiya.sex}对荷叶边的信念一样的温柔的光芒。`,
        );
        await era.printAndWait(
          `之后你们又聊了许久，距离正式拍摄还有一段时间。`,
        );
        era.printButton('「边喝东西边等吧」', 1);
        await era.input();
        await daiya.say_and_wait('不错呢！那我们就一起喝茶休息吧！');
        await daiya.say_and_wait('话说茶……要去哪里才能买到呢？');
        era.printButton('「我记得走廊好像有自动贩卖机──」', 1);
        await era.input();
        await daiya.say_and_wait(
          '自动贩卖机！刚才看到的时候，我有注意到是跟一般贩卖机不太一样的机种，我当时觉得很好奇呢！',
        );
        await daiya.say_and_wait(
          '训练员，这件事就交给我吧。我负责去自动贩卖机买茶回来。',
        );
        await era.printAndWait(
          `${you.name} 看着兴奋的里见光钻离开……心中开始对${daiya.sex}刚才所说的『跟一般贩卖机不太一样』这句话感到忧心。`,
        );
        await era.printAndWait(
          `还是跟去看看好了。正当 ${you.name} 打算追上${daiya.sex}的脚步时──`,
        );
        await daiya.say_and_wait(
          '……哎呀，没有罐装的也没有宝特瓶装的呢。这个面板是？按下去就好了吗？还是要按这边的按钮才对呢？',
        );
        await era.printAndWait('喀锵、喀锵——');
        await daiya.say_and_wait('哎呀！出来的是杯子！');
        await era.printAndWait('唰唰唰唰！');
        await daiya.say_and_wait(
          '哇啊，开始掉冰块出来了！？没有要加茶的意思吗？是不是中断它比较好呢？',
        );
        era.printButton('「我现在立刻过去，你站在原地不要动！」', 1);
        await era.input();
        await era.printAndWait(
          `${daiya.sex}有非常稳重可靠的一面，也有与之相反的部分。这次让 ${you.name} 重新慎重地决定今后一定要好好守着${daiya.sex}。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_high_place: (() => {
    const title = '前往崇拜之人正等待着的高处';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, gs, mcqueen, you) => {
      await era.printAndWait(
        `休假时，${you.name} 在咖啡厅里，看到了里见光钻和目白麦昆的身影。`,
      );
      await daiya.say_and_wait('啊，训练员！你好！');
      await daiya.say_and_wait(
        '呵呵，今天呀，麦昆特地带我来她推荐的咖啡厅喔！',
      );
      await mcqueen.say_and_wait(
        '请尽情点自己喜欢的东西。这里菜单上的东西，不管点什么都不会让人失望的。',
      );
      await daiya.say_and_wait('谢谢！我看看……！');
      await daiya.say_and_wait(
        '好棒喔……！这间店里总共有129种的甜点可以点呢……！',
      );
      await daiya.say_and_wait(
        '……咦？『吃完全品项的客人还会得到特别荣誉……！？』这是……什么意思呀？',
      );
      await mcqueen.say_and_wait(
        '这、这是……我也只是听说的，据说是吃完全品项的人，会得到『大师』的称号吧。',
      );
      await mcqueen.say_and_wait('听说至今都还没有人得到那个称号过……');
      await gs.say_and_wait('没错──除了（减重中的）麦昆以外。');
      await mcqueen.say_and_wait('你怎么知道的！？而且你怎么会在这！？');
      await daiya.say_and_wait(
        '只有麦昆得到过的称号……这实在是太让我感兴趣了！',
      );
      await daiya.say_and_wait(
        '我想要挑战看看！先点个菜单左边的二十道来吃吧！',
      );
      era.printButton('「超出所需的热量了」（体力+100）', 1);
      era.printButton('「挑战看看好了」（体力+300，体重增加）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('这么说是没有错……唔～不行吗……？');
        await mcqueen.say_and_wait(
          '这才是明智的选择。我花了十天的时间拼死完成挑战，害我的体重──',
        );
        await mcqueen.say_and_wait(
          '咳咳。美食还是适量就好。好了，重新挑选自己想吃的东西吧──',
        );
        await gs.say_and_wait(
          '我的推荐菜色是猪排丼饭跟腌小黄瓜，还有蛤蛎汤喔。',
        );
        await daiya.say_and_wait('这样呀……那我就点那些──');
        await mcqueen.say_and_wait(
          '这里才没有那些菜色！黄金船还是快点回家吧！',
        );
        await era.printAndWait(
          '后来，里见光钻点了目白麦昆推荐的甜点……这是考量了热量问题后的选择。',
        );
      } else {
        await daiya.say_and_wait('是！我一定会追上麦昆的！');
        await daiya.say_and_wait(
          '嗷……我、我已经不行了……感觉已经吃到全身都开始散发出甜点的甜味了……',
        );
        await daiya.say_and_wait('看来我还没能达到麦昆的境界……');
        await mcqueen.say_and_wait(
          '那是当然的啰。我也是花了十天才完成挑战的。怎么可能一次吃二十道……',
        );
        await gs.say_and_wait(
          '哎呀哎呀，已经很了不起了吧。不错嘛，麦昆，你后继有人了。',
        );
        await mcqueen.say_and_wait(
          '是什么样的继承人啊！？唉，想不到我犯的过错居然连累到后辈……！',
        );
        await era.printAndWait(
          `里见光钻摄取了非常庞大的热量。${daiya.sex}会就这样直接成为第二个『大师』吗……！？`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_fresh: (() => {
    const title = '新鲜！';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} kita 北部玄驹
     */
    const f = async (daiya, kita) => {
      await era.printAndWait(
        '和里见光钻一起外出时，看见正在跟果蔬店老板说话的北部玄驹。',
      );
      await daiya.say_and_wait('咦？小北怎么了吗？表情好像很苦恼的样子……');
      await kita.say_and_wait('啊，小钻。是果蔬店的老板遇到困难了啦……');
      await era.printAndWait(
        '果蔬店的大叔「哎呀，今天卖剩了很多的蔬菜啊……也完全没什么人来光顾。」',
      );
      await era.printAndWait(
        '果蔬店的大叔「很便宜、很便宜喔～新鲜又好吃的蔬菜喔……」',
      );
      era.printButton('「…………真的都没有人来呢」', 1);
      await era.input();
      await era.printAndWait(
        '果蔬店的大叔「对吧？每次我们声援的棒球队只要打输就会这样。真的是非常讨厌的一个魔咒耶……」',
      );
      await kita.say_and_wait('老板说他已经受这个魔咒的影响好几次了。');
      await daiya.say_and_wait('……唔！');
      await daiya.say_and_wait(
        '叔叔，魔咒是可以破除的！不要放弃，努力对抗魔咒吧！',
      );
      await daiya.say_and_wait(
        '像是……由我来买下这里剩下的所有蔬菜，你觉得怎么样呢？',
      );
      era.printButton('「这么做有点……」', 1);
      await era.input();
      await kita.say_and_wait('那就用别种方式……！我也想要帮助有困难的人！');
      await kita.say_and_wait('……对了！就让我帮忙你一起卖菜吧！');
      await daiya.say_and_wait('我也要！让我帮忙一起破除魔咒吧！');
      await kita.say_and_wait('商店街的大家！');
      await kita.say_and_wait('要不要买点蔬菜呢──！');
      await era.printAndWait('行人「怎么啦怎么啦！？」');
      await era.printAndWait(
        '北部玄驹大声叫卖的声音响彻整条商店街，让路上的行人都停下了脚步。',
      );
      await daiya.say_and_wait(
        '充满水分的番茄跟充满光泽的茄子！要不要当作晚餐的食材呢～？',
      );
      await era.printAndWait(
        '家庭主妇「哎呀，声音还真有活力呢～过去看一下好了。」',
      );
      await daiya.say_and_wait('每一样我都很推荐喔♪请大家过来看看。');
      await kita.say_and_wait('嘿嘿嘿，感觉不错呢！效果很好！');
      await daiya.say_and_wait('多亏了小北强而有力的声音呢♪');
      await kita.say_and_wait(
        '小钻接待客人的方式也很好啊！平常就注重礼貌的个性派上用场了呢！',
      );
      await era.printAndWait('人声鼎沸，盛况空前……');
      await era.printAndWait(
        '果蔬店的大叔「这是……！这还是第一次在声援的棒球队打输后，生意这么好呢！」',
      );
      await daiya.say_and_wait(
        '呵呵呵，我们也没有做什么特别的事情哦。如果叔叔也像平常一样有精神的话，不用我们帮忙也一样会生意很好的。',
      );
      await kita.say_and_wait(
        '啊，确实是这样耶！大叔今天的叫卖声好像真的少了平时的活力！',
      );
      await era.printAndWait(
        '果蔬店的大叔「啊啊，也对……！经你这么一说，我确实是因为沮丧而消沉。」',
      );
      await daiya.say_and_wait(
        '『不能败给魔咒！』、『不要放在心上，要开心过日子！』。',
      );
      await daiya.say_and_wait(
        '只要抱着这样的想法去叫卖的话，魔咒一定也立刻就破除掉了♪',
      );
      era.printButton('「任何时候都保持积极乐观是最好的！」（速度+20）', 1);
      era.printButton('「任何魔咒都能破除吗？」（耐力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('呵呵，没错！');
        await daiya.say_and_wait(
          '就是这样。要不要找其他也受魔咒所苦的人呢？说不定能帮上忙呢！',
        );
        await kita.say_and_wait('我也要、我也要！去问问商店街的其他人看看吧！');
        await era.printAndWait(`你们三人一起走在商店街上，寻找着未知的魔咒！`);
      } else {
        await daiya.say_and_wait(
          '啊，你该不会不相信吧？那我就再破除一个魔咒给你看！',
        );
        await era.printAndWait(
          '果蔬店的大叔「如果是魔咒的事情的话，我这里还有呢！『生意好的时候，小黄瓜一定卖不完』是这样的一个魔咒！」',
        );
        await kita.say_and_wait(
          '那我们去宣传吃小黄瓜的好处吧。像是……表演怎么做才会好吃的方法之类的？',
        );
        await daiya.say_and_wait(
          '这主意不错耶！我来问我常吃的三星主厨作法好了♪',
        );
        await era.printAndWait(
          '现场教学贩卖受到了好评，里见光钻等人顺利把小黄瓜也卖完了！',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_heartbeat_excite: (() => {
    const title = 'Heartbeat · Excite';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, you) => {
      await era.printAndWait('外出时，里见光钻在一张超大海报前停下了脚步。');
      await daiya.say_and_wait(
        '『游乐园史上最恐怖的云霄飞车──天堂诞生……寻求勇敢的挑战者』？',
      );
      await daiya.say_and_wait(
        '会是高度很高……还是速度很快之类的吗？不知道会是怎样的云霄飞车呢……！',
      );
      await daiya.say_and_wait('我们得去一趟游乐园才行了！');
      era.printButton('「咦！？等等……」', 1);
      await era.input();
      await daiya.say_and_wait('快呀，训练员。我们赶快出发吧♪');
      await daiya.say_and_wait(
        '啊，就是那个！那个在很高的地方的轨道……就是传说中最恐怖的云霄飞车没错吧！？',
      );
      await era.printAndWait(
        '那就是『天堂』……几乎贯穿云霄的高度，果然是如其名的规格！',
      );
      await era.printAndWait(
        '行人A「天啊……感觉真的是去了一趟『天堂』……！完全没料到会是那样……」',
      );
      await era.printAndWait(
        '行人B「不行不行，我真的没办法……我连五代之前的祖先都看见了……！」',
      );
      await daiya.say_and_wait('哎呀，玩过的人都吓成那个样子呢……！这样子──');
      await daiya.say_and_wait(
        '我也开始觉得紧张刺激了呢！感觉会是一次全新的体验♪',
      );
      era.printButton('「虽然感觉应该是会很有趣，但……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 既想要尝试又同时觉得害怕。两种心情正在交战……`,
      );
      await daiya.say_and_wait('训练员，你怎么了吗？是不是不太想玩呀……？');
      await daiya.say_and_wait('如果是这样……我可以等到你想玩再玩喔♪');
      await era.printAndWait(
        `你们决定暂时先在园区内闲晃，度过一段悠闲的时光。`,
      );
      await daiya.say_and_wait('嚼嚼……');
      await daiya.say_and_wait('我吃饱了♪');
      await daiya.say_and_wait('啊，云霄飞车。现在好像刚好比较少人在排队呢？');
      era.printButton('「你也可以自己一个去玩哦？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '嗯～还是不要吧！虽然我原本觉得一个人应该也很好玩……',
      );
      await daiya.say_and_wait('但我觉得，一人份的紧张刺激是满足不了我的。');
      await daiya.say_and_wait(
        '……现在回想起来，我真的跟训练员一起去了好多地方呢。',
      );
      await daiya.say_and_wait('一起窥探未知的世界、一起发现新东西──');
      await daiya.say_and_wait('一起尝试新的体验，也一起寻找更开心的事情……');
      await daiya.say_and_wait(
        '只是稍微回想一下就充满了很多美好的回忆……然后我就明白了。',
      );
      await daiya.say_and_wait('有训练员在身边的时候……所有的兴奋都是加倍的！');
      await daiya.say_and_wait(
        '所以，不论多久我都会一直等下去的♪等到你愿意跟我一起感受那个紧张跟刺激为止！',
      );
      era.printButton('「我还没做好心理准备……」（耐力+20）', 1);
      era.printButton('「好，我们去玩吧！」（根性+20）', 2);
      era.printButton('「要不要找其他的冒险来做？」（智力+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await daiya.say_and_wait('好的──我知道了♪');
          await era.printAndWait(
            `然而 ${you.name} 却始终下不了决心。终于拖到了快到门禁的时间……`,
          );
          await daiya.say_and_wait('那我们……回去吧！');
          era.printButton('「没关系吗？」', 1);
          await era.input();
          await daiya.say_and_wait(
            '没关系的。其实我的个性是会把喜欢的东西留到最后再吃的那种。',
          );
          await daiya.say_and_wait('所以呢，等将来的某一天我们再一起体验吧♪');
          await era.printAndWait(
            `等到那天来临时，${you.name} 一定要努力鼓起勇气。为了${daiya.sex}的笑容，${you.name} 在心里这么发誓！`,
          );
          break;
        case 2:
          await daiya.say_and_wait('哇～我就等你说这句话呢！走吧、走吧！');
          await era.printAndWait('咖当咖当咖当咖当……咻──────！');
          await daiya.say_and_wait('呀啊啊啊──────！');
          era.printButton('「天堂────────！！」', 1);
          await era.input();
          await daiya.say_and_wait(
            '真的是非常厉害的体验呢，训练员！我刚才还看见了很漂亮的花海呢！',
          );
          await daiya.say_and_wait('……坐在最前面的位子不知道会看见什么呢！');
          await era.printAndWait(
            `你们一直重复排队，直到能坐最前面的位子，度过了既好玩又累到头昏眼花的一天！`,
          );
          break;
        case 3:
          await daiya.say_and_wait(
            '哎呀，这个主意不错呢！其实其他游乐设施我也很感兴趣喔♪',
          );
          await daiya.say_and_wait(
            '旋转咖啡杯跟鬼屋……我们一起玩到最后一秒吧！',
          );
          await daiya.say_and_wait('快呀，训练员！我们第一站要去鬼屋喔～');
          await daiya.say_and_wait('我看看喔──最恐怖的鬼屋……『地狱』！');
          await era.printAndWait(
            `即使没有玩云霄飞车，${you.name} 还是和里见光钻一起度过了快乐的时光！`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_practice: (() => {
    const title = '舞蹈练习';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, teio, you) => {
      await era.printAndWait(
        `因为里见光钻希望 ${you.name} 能帮${daiya.sex}看一下，所以 ${you.name} 正在陪${daiya.sex}做舞蹈练习。`,
      );
      await daiya.say_and_wait('像这样，再这样……然后再来是这样──');
      await daiya.say_and_wait(
        '……唔唔唔，感觉不太对。舞技精湛的人绝对不会跳成这样。',
      );
      await daiya.say_and_wait('应该要更有气势地──');
      await daiya.say_and_wait('……哇哇！');
      era.printButton('「你没事吧！？」', 1);
      await era.input();
      await daiya.say_and_wait('没事，真不好意思……');
      await era.printAndWait(
        '不知为何，里见光钻跳舞的时候有种瞎忙一场的感觉。',
      );
      era.printButton('「你有什么烦恼吗？」', 1);
      await era.input();
      await daiya.say_and_wait('……');
      await daiya.say_and_wait('就是……小北她不是很会唱歌吗？');
      await daiya.say_and_wait(
        '虽然我也很努力在练习，但那实在不是一朝一夕可以达到的等级。',
      );
      await daiya.say_and_wait(
        '所以，我才会想说，至少在舞步这个部分要达到能够自豪的水准。',
      );
      era.printButton('「重新审视一下基础的部分好了」（速度+20）', 1);
      era.printButton('「干脆用北部玄驹的歌来跳舞？」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '是呀，小北能把歌唱得那么好，一定也是有打好基础的关系。',
        );
        await daiya.say_and_wait(
          '我也从基础的舞步开始重新练习，慢慢一点一点累积经验的话──',
        );
        await teio.print_and_wait('？？？「什么什么？在讲舞步的事情吗──？」');
        await daiya.say_and_wait('哇啊，帝王！？……刚才的对话都被你听见了吗？');
        await teio.say_and_wait('嗯，你提到了基础的舞步什么的，对吧？');
        await teio.say_and_wait(
          '哼哼──说到舞步，就该是我出场的时候啦！我也可以教教你哦～？',
        );
        await daiya.say_and_wait(
          '确实说到舞步会直接联想到帝王没错，但帝王是小北也很尊敬的人。',
          true,
        );
        await daiya.say_and_wait(
          '如果只有我一个人被教到，感觉有点过意不去呢……',
          true,
        );
        await daiya.say_and_wait(
          '──不对，现在不是客气的时候了。我已经下定决心要把舞练好了！',
          true,
        );
        await daiya.say_and_wait('帝王，可以的话，可以请你教教我吗？只不过──');
        await teio.say_and_wait('不过？');
        await daiya.say_and_wait(
          '……我不希望让小北知道这件事。这样像是我一个人独占了帝王一样，感觉对她很不好意思。',
        );
        await teio.say_and_wait(
          '原来是这样喔！也就是小钻跟我之间的秘密啰。嘻嘻嘻，了解！',
        );
        await era.printAndWait(
          '经过东海帝王的指导后，里见光钻的动作变得比原本轻柔了。',
        );
      } else {
        await daiya.say_and_wait('哎呀，跳小北的歌吗……？这我倒是没有想过！');
        await daiya.say_and_wait(
          '不过，我觉得应该不错呢。这样会更让我有不能输给小北歌声的感觉！',
        );
        await daiya.say_and_wait('那就──');
        await daiya.say_and_wait('……！', true);
        await daiya.say_and_wait(
          '小北的歌声非常强而有力，又充满跃动感……',
          true,
        );
        await daiya.say_and_wait('或许我欠缺的就是这种力道也不一定……！', true);
        await daiya.say_and_wait(
          '好，我也要更有力道一点！！再用力一点、再更用力一点──！！',
          true,
        );
        await daiya.say_and_wait(
          '奇怪？感觉越跳越充满热情……这种感觉好愉快喔！！',
          true,
        );
        await era.printAndWait('里见光钻自言自语着，跳了好一阵子的舞。');
        await era.printAndWait(
          `虽然有点让人担心……但${daiya.sex}的舞步感觉变得非常地利落！`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_banned_coffee: (() => {
    const title = '禁忌特调';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} coffee 曼城茶座
     */
    const f = async (daiya, coffee) => {
      await era.printAndWait(
        '「想要学会怎么煮出好喝的咖啡」。曼城茶座答应了要帮里见光钻实现这个心愿。',
      );
      await daiya.say_and_wait('今天要麻烦多多指教了！');
      era.printButton('「麻烦你了！」', 1);
      await era.input();
      await coffee.say_and_wait('是，请多指教……一起煮出好喝的咖啡吧。');
      await coffee.say_and_wait(
        '咖啡会因出产的农园不同而味道不同……品种跟生长环境也有很大的影响。',
      );
      await coffee.say_and_wait(
        '找到自己喜欢的豆子也是乐趣之一……请试着选选看吧……',
      );
      await daiya.say_and_wait('有这么多……！不知道该怎么选才好呢。');
      await coffee.say_and_wait(
        '这种时候……可以选择尝试特调。未知的世界……能煮出只属于你的一杯咖啡。',
      );
      await daiya.say_and_wait(
        '未知的世界……听起来好棒喔！那我要挑战特调看看！',
      );
      await daiya.say_and_wait(
        '洪都拉斯……巧克力的香气跟百香果的风味……这个也要！',
      );
      await coffee.say_and_wait('这样就十种了……那个，还是先这样就差不多了──');
      await coffee.say_and_wait(
        '……咦？可能会诞生新的口味？这么说……是没有错，可是……',
      );
      await daiya.say_and_wait('好──这个也要……啊，还有这个！');
      await daiya.say_and_wait('呵呵……我自己煮的自制特调♪我要喝了。');
      await era.printAndWait([
        { color: daiya.color, content: '两', fontWeight: 'bold' },
        { color: coffee.color, content: '人', fontWeight: 'bold' },
        '「',
        { color: daiya.color, content: '咕噜' },
        '、',
        { color: coffee.color, content: '咕噜' },
        '……」',
      ]);
      await daiya.say_and_wait(
        '唔唔……苦味跟酸味在拉扯着。我不太喜欢这种味道呢……！',
      );
      era.printButton('「这算是失败了吧……」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……豆子的种类越多，味道就会越复杂。这应该是豆子各自的自我主张……太强烈了。',
      );
      await daiya.say_and_wait('原来如此……嗯──要让味道不会互相拉扯的话……');
      await daiya.say_and_wait(
        '啊！是有这个办法没错！我知道一个可以让味道好好相处的好帮手！',
      );
      await daiya.say_and_wait('你看！是种满蔬菜的田！');
      await daiya.say_and_wait(
        '蔬菜经常被大家用来跟各种东西炒在一起，或是炖在一起，对吧？',
      );
      await daiya.say_and_wait(
        '甚至也有用蔬菜煎出来的茶叶，所以我就想到，说不定它也能中和咖啡豆之间的味道呢！',
      );
      era.printButton('「我觉得还是算了吧……」', 1);
      await era.input();
      await coffee.say_and_wait('……我赞成里见的说法。');
      await coffee.say_and_wait(
        '这完全颠覆了咖啡本身的概念……打破常识的做法，是我从没有想到过的……',
      );
      await daiya.say_and_wait('咖啡……！');
      await coffee.say_and_wait(
        '我想，这么做一定能诞生出很有趣的咖啡……『朋友』……也是这么认为的。',
      );
      await daiya.say_and_wait(
        '嘿嘿嘿，对吧！我自己也想像不到会是怎样的咖啡呢。',
      );
      await daiya.say_and_wait(
        '所以才更想要挑战看看……就算结果会是不好喝的咖啡也没关系……！',
      );
      era.printButton('「在那之前要不要先把基础给学好？」（根性+20）', 1);
      era.printButton('「一直挑战到煮出好喝咖啡为止吧！」（智力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('原来如此……意思是要先打好基础吧。');
        await daiya.say_and_wait(
          '知道了……那就先把基础概念都学好，冒险就等之后再来做吧。',
        );
        await daiya.say_and_wait(
          '……好，再来只要加入热水就完成了！啊……可是，要是也加入这个豆子的话──',
        );
        await coffee.say_and_wait('那个，食谱上是……');
        await daiya.say_and_wait('──对耶！要照着食谱做才对……！');
        await era.printAndWait(
          '里见光钻忍住了自己的好奇心，成功煮出了美味的咖啡！',
        );
      } else {
        await daiya.say_and_wait('没问题！敬请期待吧！');
        await coffee.say_and_wait(
          '加了蔬菜的咖啡……完成了呢。加了菠菜、青椒等……颜色很绿呢。',
        );
        await daiya.say_and_wait('闻起来也是浓浓的菜味……我、我要喝了！');
        await era.printAndWait([
          { color: daiya.color, content: '两', fontWeight: 'bold' },
          { color: coffee.color, content: '人', fontWeight: 'bold' },
          '「',
          { color: daiya.color, content: '咕噜' },
          '、',
          { color: coffee.color, content: '咕噜' },
          '……」',
        ]);
        await daiya.say_and_wait('这个……不好喝呢……！啊哈、啊哈哈哈！');
        await coffee.say_and_wait('……是啊……呵呵。');
        await era.printAndWait('虽然味道不怎么样，却是能带来欢笑的一杯咖啡！');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_satono_uma: (() => {
    const title = (daiya) => `身为里见家的一员，身为赛${daiya.uma_sex_title}`;
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} ryan 目白莱恩
     * @param {CharaTalk} bright 目白光明
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, ryan, bright, you) => {
      await era.printAndWait('休假的黄昏时分，经过校门附近时──');
      await ryan.say_and_wait('你是说，小见还没有回来吗？');
      await bright.say_and_wait('好像是呢～继续在这里等一下好了～');
      era.printButton('「里见光钻怎么了吗？」', 1);
      await era.input();
      await ryan.say_and_wait('你是……小见的训练员对吧。');
      await ryan.say_and_wait(
        '其实是因为今天早上的时候，善信碰巧看到小见外出。听说是要去公司的样子。',
      );
      era.printButton('「公司！？」', 1);
      await era.input();
      await era.printAndWait(
        `意外的词汇令 ${you.name} 不禁感到惊讶，${you.name} 继续听目白莱恩说明详细状况。据说是前往里见家的某间公司了。`,
      );
      await ryan.say_and_wait(
        '因为她说傍晚的时候会回来，但还没回来所以有点担心……',
      );
      era.printButton('「告诉我这件事情非常感谢」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 告诉${daiya.couple_title}接下来的事情由 ${you.name} 来处理，并决定要打电话给里见光钻。`,
      );
      await daiya.say_and_wait('哎呀，是训练员呀？');
      era.printButton('「你说你还在公司？」', 1);
      await era.input();
      await era.printAndWait(
        `了解她的状况后，${you.name} 告诉${daiya.sex}目白莱恩等人正在担心${daiya.sex}的事情。`,
      );
      await daiya.say_and_wait(
        '『哎呀，居然害她们担心了。不过我现在已经没事了。事情都已经处理得差不多了。』',
      );
      era.printButton('「我还是觉得不放心，我去接你吧」', 1);
      await era.input();
      await daiya.say_and_wait(
        '你来接我没关系吗？那我就交待公司的人等等直接让你进来啰。',
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} 进到${daiya.sex}告诉 ${you.name} 的公司大楼里，来到里见光钻所在的楼层。`,
      );
      await era.printAndWait(`${daiya.sex}会在哪里呢？${you.name} 环顾四周──`);
      await era.printAndWait(
        '里见集团的职员「──那么，慈善竞赛的事情该怎么做呢？」',
      );
      await daiya.say_and_wait('首先要先确定日程跟举办场地才行。');
      await daiya.say_and_wait('下周会议之前，我会和母亲先大致上想好的。');
      await daiya.say_and_wait('我们一起同心协力，让当天能有更多的人来参加吧♪');
      await era.printAndWait('看似职员的人行了个礼后，便离开了。');
      era.printButton('「慈善竞赛？」', 1);
      await era.input();
      await daiya.say_and_wait('训练员，你到啦！');
      await daiya.say_and_wait(
        '那是我们里见集团慈善事业的一环，目前正在计划要办一场慈善竞赛。',
      );
      await daiya.say_and_wait(
        `毕竟我既是里见家的一分子也同时是赛${daiya.uma_sex_title}，所以总想着自己能不能帮上点什么忙，想为大家尽点绵薄之力。`,
      );
      await era.printAndWait(
        `${daiya.sex}在说这些话时的表情比平常更加正气凛然，可以感觉得出来${daiya.sex}对此抱持很大的责任感。`,
      );
      era.printButton('「真不愧是里见家的一分子啊」（智力+20）', 1);
      era.printButton('「慈善竞赛你也会参加吗？」（耐力&力量+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('呵呵，谢谢夸奖♪');
        await daiya.say_and_wait(
          '毕竟我迟早是要站在引领里见家的位置。所以我才会希望能趁现在多拓展自己的视野跟见解。',
        );
        await daiya.say_and_wait(
          '况且，像这样以里见家一员的身份做事，反而会让我有更想努力的感觉呢！',
        );
        await era.printAndWait(
          '她说这些话时的笑容，看得出她身为里见家代表的骄傲。',
        );
        await ryan.say_and_wait(
          '啊，你回来了！小见你明明才刚忙完工作，却很有精神的样子呢。',
        );
        await daiya.say_and_wait(
          '毕竟我是要扛起整个里见家的人，还是不能被这点小事给难倒的♪',
        );
        await ryan.say_and_wait(
          '啊哈哈，真的就像善信所说的一样耶！你的这个部分真的很像麦昆。',
        );
        await daiya.say_and_wait(
          '哎呀，真的吗！？莱恩，我想听更多关于你刚刚说的这件事情的事！',
        );
        await daiya.say_and_wait('是呀，我就是这么打算的。');
        await daiya.say_and_wait(
          `如同我刚才所说，我毕竟既是里见家的一分子也同时是赛${daiya.uma_sex_title}。`,
        );
        await daiya.say_and_wait(
          `虽然我现在还只是个年轻的晚辈，但我希望总有一天自己可以为里见家和赛${daiya.uma_sex_title}业界都做出贡献！`,
        );
        await era.printAndWait(
          `从${daiya.sex}不仅考量着现在也规划着未来的眼神中，${you.name} 仿佛可以预见${daiya.sex}将来活跃的姿态。`,
        );
      } else {
        era.drawLine();
        await bright.say_and_wait(
          '哎呀，你回来了～工作的事情处理得怎么样了呢？',
        );
        await era.printAndWait(
          `里见光钻向出来迎接${daiya.sex}的两人提起慈善竞赛的事情。`,
        );
        await bright.say_and_wait(
          '哎呀，感觉是很有意思的事情呢～！那场比赛，我也想要参加看看呢～',
        );
        await daiya.say_and_wait('当然欢迎！非常欢迎目白家的每一位来参加！');
        await bright.say_and_wait(
          '呵呵呵♪既然决定要参加的话，那我就要以优胜为目标啰～',
        );
        await daiya.say_and_wait(
          '是呀，比赛的时候就该是这样才对！我也会认真奉陪的♪',
        );
        await ryan.say_and_wait(
          '看来都是些个性很相像的人参加呢。啊哈哈，到时候真不知道会是什么情况……',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_street_adv: (() => {
    const title = '巷子大冒险';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} jordan 东瀛佐敦
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, jordan, you) => {
      await era.printAndWait(`${you.name} 和里见光钻一起外出的回程路上──`);
      await daiya.say_and_wait('哎呀？哎呀哎呀哎呀！？');
      await daiya.say_and_wait(
        '训练员，我发现不得了的东西了！那边竟然有一条『小路』呢！',
      );
      await daiya.say_and_wait(
        '哇啊～之前都没有注意到耶！那条路……不知道会通到哪里去呢！',
      );
      await era.printAndWait(
        `${you.name} 还来不及阻止，里见光钻就已经冲向小路了……`,
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
      await jordan.say_and_wait(
        '这样喔～那要一起走吗？我可以带你去一个好地方！',
      );
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
      era.printButton('「好了，我们快点回去吧！」（智力+20）', 1);
      era.printButton('「为突然搭话的事情先道歉吧」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('知、知道了？');
        await daiya.say_and_wait('那么我们先失陪了。再见♪');
        await daiya.say_and_wait(
          `啊啊，不良${daiya.teen_sex_title}……要是能再多聊几句的话……真可惜。`,
        );
        await jordan.say_and_wait('不是吧，你都不会害怕的喔！？');
        await daiya.say_and_wait(
          `我没有觉得害怕呀？连续剧里面的不良${daiya.teen_sex_title}都会帮助流浪的小狗，心地都很善良的呢♪`,
        );
        await jordan.say_and_wait('小见真是疯狂耶～！');
        await era.printAndWait(
          `因为里见光钻看起来很落寞的样子，所以 ${you.name} 也不忍心再多责备。`,
        );
      } else {
        await daiya.say_and_wait('我那么做的确是有失礼仪……抱歉，是我失礼了。');
        await era.printAndWait(
          `不良${daiya.teen_sex_title}「啧，反正我也没兴趣跟一般人吵架。以后自己注意一点啦。」`,
        );
        await daiya.say_and_wait(
          `谢谢你！原来不良${daiya.teen_sex_title}都是讲道理的硬派个性，这些都是真的呢！`,
        );
        await era.printAndWait(
          `不良${daiya.teen_sex_title}「哦？看来你好像很懂嘛。嘿嘿，要不要一起去喝饮料啊？」`,
        );
        await daiya.say_and_wait('哎呀，真的可以吗？请一定要给我这个机会♪');
        await jordan.say_and_wait('真假？小见也太强了吧！？');
        await era.printAndWait(
          `后来，里见光钻充满好奇地听着不良${daiya.teen_sex_title}说话。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_shopping: (() => {
    const title = '在便利商店前要特别小心';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} condor 神鹰
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} sirius 天狼星象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, gs, condor, coffee, festa, sirius, you) => {
      await era.printAndWait([
        you.name,
        '和里见光钻一起外出后回程的路上，经过便利商店时……看见两名赛',
        daiya.uma_sex_title,
        '聚在那里。',
      ]);
      await gs.say_and_wait('可恶！又──是红鹤子喔！都已经第五张了耶……！？');
      await festa.say_and_wait('我也是……又抽到滚蕃薯虫了。');
      await daiya.say_and_wait(
        '哎呀，是黄金船跟中山吗？她们怎么会在这里呢？──我来去问问看！',
      );
      await era.printAndWait(
        `有种不好的预感……${you.name} 一边这么想着，一边追上里见光钻的脚步。`,
      );
      await daiya.say_and_wait('你们好。你们两位在做什么啊？');
      await gs.say_and_wait(
        '喔，是里见啊！我们刚才买了大量的『惊人生物巧克力』啦！',
      );
      await gs.say_and_wait(
        '但我们一直没有抽到最稀有的那张菊石骑士……就只好一直在这边吃巧克力。',
      );
      await daiya.say_and_wait(
        '哎呀，意思是在尝试新的挑战吗？感觉很有趣呢！我也可以参加吗？',
      );
      await festa.say_and_wait(
        '哈哈，真是个好奇心旺盛的大小姐呢……好啊，你想要挑哪一包？选吧。',
      );
      await daiya.say_and_wait('我想想喔，训练员觉得哪一包比较好？');
      era.printButton('「包装漂亮的」（耐力+20）', 1);
      era.printButton('「包装皱巴巴的」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '我也觉得挑那个比较好呢！那就来拆开看看吧，要开啰──',
        );
        await daiya.say_and_wait('开了──！');
        await daiya.say_and_wait('这个是──呃，无齿翼龙……？');
        await gs.say_and_wait(
          '──无齿翼龙首领！！！！唔喔喔，是无齿翼龙首领耶！！',
        );
        await festa.say_and_wait(
          '是喔，抽到了黄金级的喔……运气还算可以嘛，里见。',
        );
        await daiya.say_and_wait(
          '哎呀，所以我是抽到好东西了吗！？那我想要拆更多包看看呢！',
        );
        await gs.say_and_wait(
          '好啊，你拆吧！你拆开拿出卡片后就丢过来我这，巧克力由我来负责吃完！',
        );
        await daiya.say_and_wait('是！那我要开始了──');
        await condor.print_and_wait('？？？「请先等一下！」');
        await daiya.say_and_wait('？');
        await condor.say_and_wait(
          '这个『惊人生物巧克力』，我本来也打算要买的！！',
        );
        await condor.say_and_wait(
          '结果全都卖完了……是黄金船跟中山前辈搞的鬼吧！？',
        );
        await gs.say_and_wait(
          '小鹰怎么了啦，怎么火气这么大……真拿你没办法耶。不然──',
        );
        await gs.say_and_wait(
          '──我们来比赛吧！你赢了，我就把无齿翼龙首领送你！但你输了的话就只能拿到眠眠蝉喔！！',
        );
        await condor.say_and_wait(
          '好啊！我接受挑战！我一定会把无齿翼龙首领给赢到手的！',
        );
        await condor.say_and_wait('那么，我们就来堂堂正正地──！！');
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          condor.get_colored_name(),
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
        await festa.say_and_wait(
          '呵呵……你来得正好。你要不要也加入啊？天狼星？',
        );
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
          gs.get_colored_name(),
          '&',
          festa.get_colored_name(),
          '「……！！」',
        ]);
        await era.printAndWait([
          gs.get_colored_name(),
          '&',
          festa.get_colored_name(),
          '「',
          { color: gs.color, content: '隐藏角色！！' },
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
          `里见光钻连面对前辈的时候，也是无所畏惧地积极前进。${you.name} 似乎又重新明白${daiya.sex}有多坚强。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_in_colorful: (() => {
    const title = '在缤纷色彩之中';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} creek 超级小海湾
     * @param {CharaTalk} you 玩家
     */
    const f = async (daiya, maya, creek, you) => {
      await era.printAndWait(
        `${you.name} 和里见光钻一起外出后的回程路上，来到购物中心的时候──`,
      );
      await daiya.say_and_wait(
        '这么多店家，看得我眼花撩乱呢。总有一天，我一定要把每一间店都去过一遍──哎呀？',
      );
      await maya.say_and_wait(
        '……欸欸，那这个怎么样？成熟吗？还是说这一个比较──',
      );
      await maya.say_and_wait('啊！是小见☆嗨～！');
      await daiya.say_and_wait('是重炮跟小海湾！你们来买东西呀？');
      await maya.say_and_wait(
        '嘿嘿嘿，对呀～我请小海湾来帮忙挑选成熟风格的衣服♪',
      );
      await maya.say_and_wait(
        '但一直选不出来。因为人家就是会忍不住全都想要嘛☆',
      );
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
      era.printButton('「以成熟为优先考量」（速度+20）', 1);
      era.printButton('「以适合重炮为优先考量」（根性+20）', 2);
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
        await daiya.say_and_wait(
          '尤其来参加社交派对的人，大多又是成年人居多。',
        );
        await daiya.say_and_wait(
          '为了站在大家身旁不显得逊色，就免不得会做一些比较经典色系的搭配。',
        );
        await maya.say_and_wait('哇啊～社交派对听起来就好成熟的感觉！！');
        await maya.say_and_wait(
          '欸欸，我有一天也能以一个成熟女人的身份，去参加社交派对吗？',
        );
        await daiya.say_and_wait(
          `当然可以！身为选手的赛${daiya.uma_sex_title}是经常受邀参加宴会的！`,
        );
        await maya.say_and_wait(
          '真的吗！？那人家要赶快为了社交派对做准备才行呢☆',
        );
        await maya.say_and_wait('欸，小见，可以教我更多成熟的穿搭组合吗～♪');
        await daiya.say_and_wait('好的，当然可以！交给我吧！');
        await creek.say_and_wait(
          '呵呵，你们两个都好可爱喔～聊得这么开心的模样♪',
        );
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
        await maya.say_and_wait(
          '嗯嗯，我懂～！而且露出长腿还会有种性感的感觉。',
        );
        await maya.say_and_wait(
          '我跟小见的眼光好像很合呢～☆欸欸，我们再一起找出更多的搭配吧！',
        );
        await daiya.say_and_wait(
          '好的，我很乐意！那我们就从那边依序逛过去好了♪',
        );
        await creek.say_and_wait(
          '呵呵，你们两个都好可爱喔～聊得这么开心的模样♪',
        );
        await daiya.say_and_wait(
          '训练员、小海湾！不嫌弃的话，你们也一起来吧～？',
        );
        era.printButton('「嗯，我现在就过去」', 1);
        await era.input();
        await era.printAndWait(
          `后来，你们四个人就这样一起度过了开心的挑选衣服时间。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
