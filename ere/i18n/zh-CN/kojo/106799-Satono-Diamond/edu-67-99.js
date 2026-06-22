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
  t: (() => {
    const title = '';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 里见光钻对玩家的称呼
     */
    const f = async (daiya, me, callname) => {};
    f.title = title;
    return f;
  })(),
};
