/**
 * @file 春乌拉拉 - 育成
 * @author 99
 */
const era = require('#/era-electron');

const { gacha, get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {string} callname 春乌拉拉对玩家的称呼
   */
  async train(urara, callname) {
    const buffer = [
      () => urara.say_and_wait('交给我吧！要上了哦！'),
      () => urara.say_and_wait(`哦！要上了 ${callname}！`),
      () => urara.say_and_wait('要开始努力了呢！'),
      () => urara.say_and_wait('这次感觉能行！我要开始了！'),
      () => urara.say_and_wait('好！乌拉拉！要加油了！'),
    ];
    await get_random_entry(buffer)();
  },
  ts_add: (() => {
    const title = '额外自主训练！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
     * @param {PrintedSpan} callname_15 好歌剧对玩家的称呼
     */
    const f = async (urara, opera, you, callname, call_15, callname_15) => {
      await era.printAndWait([
        '在今天的训练结束后，',
        urara.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 一同回到训练场的跑道旁边休息。',
      ]);
      await urara.say_and_wait([
        '今天也很努力的在练习呢！',
        callname,
        '，待会一起去食堂……嗯？那里的人是？',
      ]);
      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 晃动耳朵的方向，',
        you.get_colored_name(),
        ' 看到了另外一位正站在训练场中的身影。',
      ]);
      await urara.say_and_wait([
        '啊！是 ',
        call_15,
        '！',
        call_15,
        ' 也要去休息了吗？',
      ]);
      await era.printAndWait([
        '小',
        urara.uma_sex_title,
        '在对方面前站定，而行事风格戏剧化的霸王也转向了 ',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 的方向。',
      ]);
      await opera.say_and_wait([
        '哦！这不是乌拉拉和 ',
        callname_15,
        ' 吗？我正要去练跑！和黄昏之星一起！',
      ]);
      await urara.say_and_wait([
        '和黄昏之星一起练跑？很有 ',
        call_15,
        ' 的风格呢，而且听起来好厉害！',
      ]);
      if (era.get('cflag:15:殿堂') > 0) {
        await opera.say_and_wait(
          '是怎样呢？是为了在繁星下再次擦亮光辉？还是在怠惰后驱散迷惘呢？',
        );
        await urara.say_and_wait(
          '原来如此，乌拉拉也明白的哦！大人也有大人的辛苦呢～',
        );
      } else {
        await opera.say_and_wait(
          '没错！我要用繁星的光辉磨练我的美貌与这双腿！为了明日的闪耀！',
        );
        await urara.say_and_wait([
          '是这样啊，乌拉拉明白了，这么努力的 ',
          call_15,
          ' 果然很了不起！',
        ]);
      }
      await urara.say_and_wait([
        '嗯……那样的话，',
        callname,
        '，时间还有一些，我们也试试看吗？',
      ]);
      era.printButton('「走吧，一起试试看。」', 1);
      era.printButton('「好好休息也很重要哦？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '在听到 ',
          you.get_colored_name(),
          ' 对 ',
          urara.get_colored_name(),
          ' 的回应后，',
          opera.get_colored_name(),
          ' 也立刻领会精神的打出了响指。',
        ]);
        await opera.say_and_wait([
          `欢迎你！不过我可不会把最闪耀的王座${era.get('love:15') >= 90 ? '和最爱的眷属' : ''}让给你哦——尽全力来拿吧！`,
        ]);
        await urara.say_and_wait([
          '嗯！既然 ',
          call_15,
          ' 这么说了，那乌拉拉也会尽全力赶上去的！',
        ]);
        await opera.say_and_wait([
          '哈──哈哈哈！看来今天的练跑会相当有趣哦！你说是吧，',
          callname_15,
          '？',
        ]);
        await era.printAndWait([
          '于是虽然意料之中的没能跟上 ',
          opera.get_colored_name(),
          ' 的步伐，但 ',
          urara.get_colored_name(),
          ' 却顽强的坚持到了加训最后。',
        ]);
      } else {
        await urara.say_and_wait([
          '诶？是这样吗？我还以为 ',
          callname,
          ' 一定会同意的来着？',
        ]);
        await era.printAndWait([
          '而在 ',
          urara.get_colored_name(),
          ' 提出疑问后，紧接的便是 ',
          opera.get_colored_name(),
          ' 表示理解的劝说。',
        ]);
        await opera.say_and_wait(
          '就是这样！不会休养连光芒也蒙上阴影，我也一样，昨天我悠闲地泡了玫瑰花瓣浴呢！',
        );
        await urara.say_and_wait(
          '哦！我知道了！为了变强我会好好休息的！不过，玫瑰花瓣浴……？',
        );
        await era.printAndWait([
          '最终，在 ',
          opera.get_colored_name(),
          ' 承诺稍后会分',
          urara.sex,
          '一些玫瑰后，',
          urara.get_colored_name(),
          ' 也在和 ',
          opera.get_colored_name(),
          ' 挥手告别后拉着 ',
          you.get_colored_name(),
          ' 向食堂跑去……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {number} train 训练类型，0-5分别对应速度耐力力量根性智力
   */
  tf_message(urara, callname, train) {
    switch (train) {
      case attr_enum.speed:
        urara.say('诶？为什么这里会……？动不了了……');
        break;
      case attr_enum.endurance:
        urara.say('……哈、哈……头、头好晕啊……');
        break;
      case attr_enum.strength:
        urara.say(['快、快看 ', callname, '，天上好像有小星星在闪呢……']);
        break;
      case attr_enum.toughness:
        urara.say([callname, '……拉我一把～～']);
        break;
      case attr_enum.intelligence:
        urara.say('好困啊……咕呃……');
    }
  },
  train_fail: (() => {
    const title = '保重身体！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '发现了 ',
        urara.get_colored_name(),
        ' 在训练途中身体有些异常，',
        you.get_colored_name(),
        ' 将',
        urara.sex,
        '带到了保健室做检查。',
      ]);
      await era.printAndWait(
        '虽然保健室内暂时没人，但好在只是身体检查的话训练员自己也应付得过来。',
      );
      await era.printAndWait([
        '只是，身体一向很结实的小',
        urara.uma_sex_title,
        '似乎对 ',
        you.get_colored_name(),
        ' 的担忧还是有些不以为然。',
      ]);
      await urara.say_and_wait([
        '乌拉拉明明没事的，这种小事不算什么啦！',
        callname,
        ' 真是爱操心呢。',
      ]);

      await urara.say_and_wait('不用担心啦，就算按这里我也不会……好疼！');
      era.printButton('「……这不是还挺疼的吗？」', 1);
      era.printButton('「要不还是好好静养吧？」', 2);
      const ret = await era.input();

      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 试探地按了下腿部疑似肿胀的地方后，突然吃痛的小',
        urara.uma_sex_title,
        '眼泪汪汪的停下动作。',
      ]);
      await urara.say_and_wait(
        '啊呜……为、为什么要那么生气啊？我跟你说哦，我真的完全不痛啦……',
      );
      await era.printAndWait([
        '委屈巴巴地瞅着突然变得严厉的 ',
        you.get_colored_name(),
        '，',
        urara.get_colored_name(),
        ' 还蓄着泪水的眼睛里满是疑惑。',
      ]);
      await urara.say_and_wait('你看！我就算这样做也一点事都没有哦……好疼！');
      await era.printAndWait([
        '再次抓住因 ',
        urara.get_colored_name(),
        ' 的乱踢而撞到的脚趾，',
        you.get_colored_name(),
        ' 伸出手指弹了下小',
        urara.uma_sex_title,
        '的额头。',
      ]);

      era.printButton(
        '「你再乱动我就真的要生气了哦？弄坏了身体可就赢不了了。」',
        1,
      );
      await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '在两次疼痛外加 ',
          you.get_colored_name(),
          ' 的警告后，小',
          urara.uma_sex_title,
          '头顶那对不安分的耳朵终于丧气地垂了下来。',
        ]);
        await urara.say_and_wait(
          '……呜，我知道了……我会注意的！没有会弄伤我的东西啊！有没有会痛痛的……',
        );
        await urara.say_and_wait([
          '啊……',
          callname,
          '，脚趾那边好像……从刚刚就有点痛……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 立刻顺着小',
          urara.uma_sex_title,
          '的话抬起',
          urara.sex,
          '的脚仔细查看，结果发现刚刚被撞到的地方也有点肿……',
        ]);
        await era.printAndWait([
          '连带着 ',
          urara.get_colored_name(),
          ' 的新伤势一起上药并包好后，',
          you.get_colored_name(),
          ' 便安排',
          urara.sex,
          '在这天好好休养了。',
        ]);
      } else {
        await era.printAndWait([
          '但就算 ',
          you.get_colored_name(),
          ' 这样说，小',
          urara.uma_sex_title,
          '本就不安分的尾巴却摇摆地更加激烈了。',
        ]);
        await urara.say_and_wait(
          '……我明白了！不管是跑步还是念书的时候，乌拉拉以后都会注意的！',
        );
        await urara.say_and_wait(
          '所以……我们可以继续训练吗？只是做些其他简单的训练应该不会再受伤了吧！',
        );
        await urara.say_and_wait([
          '因为我也是很认真地想得到第一名！所以乌拉拉想让 ',
          callname,
          ' 知道我会好好小心！',
        ]);
        await era.printAndWait([
          '好吧，既然',
          urara.sex,
          '这么说的话……',
          you.get_colored_name(),
          ' 叹了口气，在处理完 ',
          urara.get_colored_name(),
          ' 的伤处后又谨慎地重新开始了训练。',
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
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (urara, you, callname, fail_again) => {
      await era.printAndWait([
        '因为 ',
        urara.get_colored_name(),
        ' 在训练中不小心重重地摔倒了，所以 ',
        you.get_colored_name(),
        ' 立即将',
        urara.sex,
        '抱起来送到了保健室。',
      ]);
      await era.printAndWait([
        '而在一番紧张的检查后，听到结果并无大碍的 ',
        you.get_colored_name(),
        ' 和 ',
        urara.get_colored_name(),
        ' 也都松了口气。',
      ]);
      await urara.say_and_wait(
        '呼～幸亏只是普通的轻伤，医生的表情看起来超级恐怖，我还以为是生病要打针呢！',
      );
      await urara.say_and_wait(
        '嘿嘿～而且打针比这痛多了，但只是一些小伤的话就没问题！',
      );

      await urara.say_and_wait([callname, '，我们回去之后可以继续训练——']);
      era.printButton('「总之现在先好好休息吧。」', 1);
      era.printButton('「不许逞强，今天回去歇着！」', 2);
      const ret = await era.input();
      await era.printAndWait([
        '于是看着',
        urara.sex,
        '还是有些不自然的走路姿态，',
        you.get_colored_name(),
        ' 不等 ',
        urara.get_colored_name(),
        ' 说完就马上回绝了',
        urara.sex,
        '的请求。',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(
          '休息？可是乌拉拉明明还很有精神，不可以继续训练了吗？',
        );

        era.printButton('「因为不管怎么说都还是会担心啊。」', 1);
        await era.input();

        await urara.say_and_wait(
          '嗯……这样啊，那我知道了！乌拉拉会好好休息的！',
        );
        await urara.say_and_wait([
          '因为看到 ',
          callname,
          ' 这么沮丧，乌拉拉也会很难过啊，所以不要难过哦？',
        ]);
        await urara.say_and_wait(
          '只是好好休息啊……大家都在训练，总觉得乌拉拉被甩下了……',
        );
        await urara.say_and_wait(
          '这么一想总觉得全身都痒痒的，休息搞不好跟打针一样辛苦呢……',
        );
        await era.printAndWait([
          '不过虽然 ',
          urara.get_colored_name(),
          ' 看起来很无聊，但在那之后',
          urara.sex,
          '的伤势确实开始好转了。',
        ]);
      } else {
        await urara.say_and_wait(['诶？', callname, ' 为、为什么突然生气了？']);

        era.printButton('「……医生说要是伤势恶化，会比打针还痛哦？」', 1);
        await era.input();

        await urara.say_and_wait(
          '什么嘛，乌拉拉已经不是小孩子了，就算真有那么疼也没关系啦！',
        );
        if (fail_again) {
          await urara.say_and_wait([
            '而且 ',
            callname,
            ' 你看！乌拉拉就算这样也完全没问题——呜啊！',
          ]);
          await urara.say_and_wait(['……好、好痛……好痛啊……', callname, '……']);
          await era.printAndWait([
            '说什么来着？拉起开始抹眼泪的小',
            urara.uma_sex_title,
            '，',
            you.get_colored_name(),
            ' 默默地将',
            urara.sex,
            '重新拎回了不远处的保健室。',
          ]);
          await era.printAndWait([
            '不出意外的，',
            urara.get_colored_name(),
            ' 因为逞强而乱动导致了伤势恶化，恢复时间也变得更长了。',
          ]);
        } else {
          await urara.say_and_wait([
            '……嗯？',
            callname,
            '？怎么突然不说话了？难、难道真有这么严重……？',
          ]);

          era.printButton('「不是小孩子的乌拉拉觉得呢？」', 1);
          await era.input();

          await urara.say_and_wait(
            '怎么这样！虽然休息很无聊……但比打针还痛……比打针还……',
          );
          await urara.say_and_wait([
            urara.get_colored_name(),
            ' 会马上痊愈的！所以在能跑之前……',
            callname,
            ' 可以一直陪着我吗……？',
          ]);
          await era.printAndWait([
            '于是，虽然 ',
            urara.get_colored_name(),
            ' 伤势花了不少时间才痊愈，但',
            urara.sex,
            '总算是恢复健康了。',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = '赛前鼓励';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, callname) => {
      const buffer = [
        () => urara.say_and_wait('好！要参赛了──！'),
        () => urara.say_and_wait('大家都很厉害的样子！那乌拉拉也不能输！'),
        () => urara.say_and_wait(`${callname}！这次也请好好看着我的奔跑吧！`),
        () => urara.say_and_wait('只要和平常一样去跑就可以了吧？我明白了！'),
        () =>
          urara.say_and_wait(
            `别担心哦 ${callname}，只要拼命去跑一定可以做到的！`,
          ),
      ];
      switch (era.get('cflag:52:干劲')) {
        case -1:
          buffer.push(() =>
            urara.say_and_wait('虽然能参加很多比赛很开心，但现在身体好重……'),
          );
          break;
        case -2:
          buffer.push(() => urara.say_and_wait('又要比赛了……我、我会努力的……'));
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_high_moti: (() => {
    const title = '武者震颤';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait([
        '哦——！',
        callname,
        '！今天我感觉充满了力量哦！',
      ]);
      await era.printAndWait([
        '站在 ',
        you.get_colored_name(),
        ' 的身边，',
        urara.get_colored_name(),
        ' 兴奋地看着前方。',
      ]);

      era.printButton('「那一会儿要加油上了！」', 1);
      era.printButton('「嗯，让大家看见你的成长。」', 2);
      await era.input();

      await urara.say_and_wait('好！大家的期待，绝对会回应的呦！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' 兴奋地向前一跃，随后冲向了赛场。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛获胜！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      let buffer = [
        () =>
          urara.say_and_wait(
            `嗯？诶……太棒了！赢了！${callname}！看到了吗？我赢了呦！`,
          ),
        () => urara.say_and_wait('哇啊……！我拿到一着了！我真的拿到一着了！'),
        () =>
          urara.say_and_wait(
            '我成功了哦！拿到一着的话，就是说大家的期待都传达到了！',
          ),
        () =>
          urara.say_and_wait(
            `${callname}！看到了吗？我刚才有嗖——的一声冲过终点哦！`,
          ),
        () =>
          urara.say_and_wait(
            `果然就像平常的时候一样就好了！这次我也赢了哦 ${callname}！`,
          ),
        () => urara.say_and_wait('做到了……我做到了哦！我真的做到了哦！'),
      ];
      await get_random_entry(buffer)();
      era.drawLine();
      await era.printAndWait([
        '抹掉脸上的汗水，',
        urara.get_colored_name(),
        ' 在比赛结束后立刻一路小跑地冲到了 ',
        you.get_colored_name(),
        ' 所等候的围栏前面。',
      ]);
      await era.printAndWait([
        '在众人的欢呼声中扬起蓄满阳光的小脸，小',
        urara.uma_sex_title,
        '对送出毛巾和水的 ',
        you.get_colored_name(),
        ' 露出了胜利的笑容。',
      ]);
      await urara.say_and_wait(
        '嘿嘿～刚才好像都听到叔叔们在喊万岁的声音了，乌拉拉真的有那么厉害吗？',
      );

      await urara.say_and_wait([
        '对了，',
        callname,
        '！刚才看到了吗？乌拉拉好像赢了哦！',
      ]);
      era.printButton('「没错，乌拉拉做到了，今天是第一名！」', 1);
      era.printButton('「大家很开心哦？不过接下来还有更要紧的事！」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '得到 ',
          you.get_colored_name(),
          ' 的肯定，',
          urara.get_colored_name(),
          ' 开心地摇起耳朵和尾巴，可爱的笑脸变得更加灿烂了。',
        ]);
        await urara.say_and_wait(
          '果然是这样！那么为了大家的笑容，我下次也一定要拿下一着！',
        );
        await urara.say_and_wait([
          callname,
          ' 也是哦！因为现在的 ',
          callname,
          ' 笑起来的样子也非常好看！',
        ]);
        await era.printAndWait(
          '在胜利之后闪闪发光的樱瞳中，此刻正微笑的映照着所有人的笑容。',
        );
      } else {
        await era.printAndWait([
          '迅速擦掉脸上的汗水，',
          urara.get_colored_name(),
          ' 用力竖起耳朵，脸上的笑容也更加坚定了。',
        ]);
        await urara.say_and_wait(
          '嗯！我也是这么觉得！因为乌拉拉也还跑得不太够哦！',
        );
        await urara.say_and_wait([
          callname,
          '，接下来要跑什么比赛，可以让乌拉拉期待一下吗？',
        ]);
        await era.printAndWait([
          '在胜利之后闪闪发光的樱瞳中，',
          you.get_colored_name(),
          ' 看到其中的火苗比以往更加旺盛。',
        ]);
      }
      era.drawLine();
      buffer = [
        () =>
          urara.say_and_wait(
            `Live要开始了哦！${callname} 很期待吗？我也很期待哦！`,
          ),
        () => urara.say_and_wait('一会一定要看着我哦！我也会努力跳舞的！'),
        () => urara.say_and_wait('大家看上去都准备好了！我也兴奋起来了哦！'),
      ];
      if (era.get('love:52') >= 75) {
        buffer.push(() =>
          urara.say_and_wait(
            `我也会不输给的大家的！绝对、绝对能好好迷住 ${callname} 的！`,
          ),
        );
      }
      if (era.get('love:52') === 100) {
        buffer.push(() =>
          urara.say_and_wait(`${callname}！待会在舞台上也要一直看着乌拉拉哦！`),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number} rank 比赛名次
     */
    const f = async (urara, you, callname, rank) => {
      const buffer = [
        () => urara.say_and_wait('大家都很厉害呢！但下次我一定不会输的！'),
        () =>
          urara.say_and_wait(
            '虽然没能拿到一着，但果然很开心呢！下次再来跑吧！',
          ),
        () =>
          urara.say_and_wait(
            `嘿嘿～这次没能拿到一着，我会继续努力的，${callname} 也别伤心哦！`,
          ),
      ];
      switch (rank) {
        case 2:
          buffer.push(() =>
            urara.say_and_wait(`看到了吗 ${callname}！我竟然是第二名哦──！`),
          );
          break;
        case 3:
          buffer.push(() => urara.say_and_wait('我是第三名！很厉害吧！'));
      }
      await get_random_entry(buffer)();
      await era.printAndWait([
        '在大家的祝贺声中，',
        urara.get_colored_name(),
        ' 依旧面带笑容地快步跑到了 ',
        you.get_colored_name(),
        ' 所在的围栏旁边。',
      ]);
      await urara.say_and_wait(
        '嘿嘿～跟大家比赛果然很开心，而且真的能感觉到自己变强了！',
      );
      await urara.say_and_wait('虽然现在的乌拉拉距离拿下一着果然还是不够呢……');

      await urara.say_and_wait([callname, ' 觉得怎么样？我这次只差一点了！']);
      era.printButton('「辛苦了乌拉拉，已经做得很不错了。」', 1);
      era.printButton('「先休息一下吧，这次感觉怎么样？」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait([
          '谢谢 ',
          callname,
          '！但是这次总感觉有点可惜，是差在哪里了？',
        ]);
        await urara.say_and_wait(
          '不过按照现在的节奏努力下去，我下次应该能拿到第一名吧！',
        );
      } else {
        await urara.say_and_wait(
          '这次跑得很开心！而且能逐渐追上大家了，但是还差一点！',
        );
        await urara.say_and_wait([
          '但是现在就问 ',
          callname,
          ' 的意见好像太早了，那回去之后？',
        ]);
      }
      era.printButton('「就是这样，回去之后一起思考下次对策吧。」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！我知道了！乌拉拉也会更加努力，为了下次的一着！',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '竞赛失败！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      const buffer = [
        () => urara.say_and_wait('大家都很厉害呢！但下次我一定不会输的！'),
        () =>
          urara.say_and_wait(
            '虽然没能拿到一着，但果然很开心呢！下次再来跑吧！',
          ),
        () =>
          urara.say_and_wait(
            `嘿嘿～这次没能拿到一着，我会继续努力的，${callname} 也别伤心哦！`,
          ),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait([
        '摇摇晃晃地来到 ',
        you.get_colored_name(),
        ' 身边，不知是否是疲惫所致，',
        urara.get_colored_name(),
        ' 沾满汗水的笑容似乎有些勉强。',
      ]);
      await urara.say_and_wait('结果这次又跑输了呢，总觉得有些不好意思了……');
      await urara.say_and_wait(
        '就在我觉得『今天的大家都好快～』的时候，下一瞬间就被超越了！',
      );
      await urara.say_and_wait(
        '不过我也听到了哦？对乌拉拉的加油声一直没停下过！',
      );

      await urara.say_and_wait(
        '虽然我努力跑到终点了，但是乌拉拉到底有没有回应大家的期待呢……',
      );
      era.printButton('「别灰心，这次其实做得还不错。」', 1);
      era.printButton('「下次就拿出成果来回应他们吧。」', 2);
      await era.input();

      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 的帮助下用毛巾抹干脸上的汗水，小',
        urara.uma_sex_title,
        '伴随着 ',
        you.get_colored_name(),
        ' 的鼓励用力点了点头。',
      ]);
      await urara.say_and_wait(
        '没错！只是一次失败而已，还能继续跑的话就没问题，下次比赛要努力取胜了哦！',
      );
      await era.printAndWait([
        '在下一场奔跑到来前，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 立下了「下次一定要超越大家」的约定。',
      ]);
      await urara.say_and_wait(
        '嘿嘿～大家说习惯失败算不上好事，但至少乌拉拉还可以继续跑下去！',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '下次不会输了！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait('奔跑真开心啊，但果然稍微有些不甘心呢……');

      await era.printAndWait([
        '失落的贴在 ',
        you.get_colored_name(),
        ' 的身边，今天的 ',
        urara.get_colored_name(),
        ' 好像因为比赛失利而失去了以往的笑脸。',
      ]);
      await urara.say_and_wait('乌拉拉又输了啊……我还以为这次一定没问题的……');
      await urara.say_and_wait(
        '虽然比赛很快乐，但拿到第一名的心情果然是不一样的！',
      );
      await urara.say_and_wait('心里有些热又有些闷，如果能再去跑一次就好了……');

      urara.say([callname, '，这个时候要怎么才能赢呢？']);
      era.printButton('「调整好心态，下次把不甘赢回来。」', 1);
      era.printButton('「别着急，总之回去后就开始训练吧。」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait(
          '嗯！只要把不开心化为斗志就好了，大家都是这么说的！',
        );
        await urara.say_and_wait([
          '在跑赢之前绝对不可以松懈！',
          callname,
          ' 也一起来调整坏习惯吧！',
        ]);
        await era.printAndWait([
          '结果在回去后，为了互相督促，',
          you.get_colored_name(),
          ' 的零食也被 ',
          urara.get_colored_name(),
          ' 削减了。',
        ]);
      } else {
        await urara.say_and_wait(
          '说的也是，只要现在开始努力，下次一定可以跑赢！',
        );
        await urara.say_and_wait([
          '所以 ',
          callname,
          '，现在快点回去吧！快点的话说不定今天就能继续训练哦？',
        ]);
        await era.printAndWait([
          '结果在回去后，',
          urara.get_colored_name(),
          ' 真的立刻拉着 ',
          you.get_colored_name(),
          ' 进行了追加训练。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_after_begin: (() => {
    const title = '乌拉拉的接触';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait('故事从这里，正式开始。');
      await inner_urara.say_as_unknown_and_wait(
        '这会是，您与我们一同写下的，您与我们的故事。',
      );
      era.drawLine();
      await era.printAndWait([
        '整理好自己的着装，抑制住激动的心情，',
        you.get_colored_name(),
        ' 装作一身轻松地走上训练场。',
      ]);
      await era.printAndWait('与新担当的接触初期，一定要慎重。');
      await era.printAndWait(
        '乍一听有点大惊小怪，但这却是训练员之间口耳相传的重要经验之谈。',
      );
      await era.printAndWait(
        '虽然不会写在教科书上，但道理就和相亲差不多，在相处的初期给留下正面印象是十分重要的一环。',
      );
      await era.printAndWait(
        '若是外来人问起把「与学生相处」比作「相亲」是不是太危险了，大家则会道出统一的答案：',
      );
      await era.printAndWait([
        '与躁动的青春期本格化',
        urara.uma_sex_title,
        '相处，在社会意义上正如走钢丝般危险。',
      ]);
      await era.printAndWait([
        '不过正如走入教学场地的放松步调，这一次，',
        you.get_colored_name(),
        ' 认为自己不需要担心什么。',
      ]);
      await era.printAndWait([
        '因为就算 ',
        you.get_colored_name(),
        ' 后来会因意识到问题所在而后悔，那也都是后话了。',
      ]);
      await era.printAndWait([
        '「天真烂漫的小',
        urara.uma_sex_title,
        '在追逐纯粹的梦想」，如此振奋人心的构成究竟有什么危险的？',
      ]);
      await era.printAndWait([
        '而且 ',
        urara.get_colored_name(),
        ' 也对「夺得一着」有着热切的盼望，',
        urara.sex,
        '想必会充满干劲，努力地练习吧！',
      ]);
      await era.printAndWait([
        '怀揣着想要帮助名为「',
        urara.get_colored_actual_name(),
        '」的小',
        urara.uma_sex_title,
        '实现愿望的热情，',
        you.get_colored_name(),
        ' 来到了与其约定的地点。',
      ]);
      await era.printAndWait('虽然想法是好的……');
      await urara.say_and_wait(['啊，是 ', callname, '！今天起请多指教哦！']);
      await era.printAndWait([
        '姗姗来迟但元气满满的，',
        urara.get_colored_name(),
        ' 带着可爱的笑容挥着手停到了 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);

      era.printButton('「从今天开始一起努力吧！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！乌拉拉要上了哦！');
      await era.printAndWait([
        '做好热身运动，',
        urara.get_colored_name(),
        ' 开始了今日的训练,但是……',
      ]);
      await urara.say_and_wait([callname, '！这里有一只好漂亮的蝴蝶哦！']);
      await you.say_and_wait('啊，真的……嗯？');
      await urara.say_and_wait([callname, '！那里的云是不是很像什么呢？']);
      await you.say_and_wait('哦！等一下，不是……');
      await urara.say_and_wait([callname, '！那边的水里有一只好大好大的鱼！']);
      await you.say_and_wait('慢着，这都什么和什么啊？');
      await era.printAndWait([
        urara.get_colored_name(),
        ' 带歪了步调的 ',
        you.get_colored_name(),
        '，在盯着自己水中的倒影看了几秒后终于回过神来。',
      ]);
      await era.printAndWait(
        '现在是……第几圈来着？不对，话说回来为什么现在两人会在河边上来着？',
      );
      await era.printAndWait(
        '一开始不是还在特雷森的训练场吗？到底发生了……想不起来？！',
      );
      await era.printAndWait([
        '茫然的看着天边已经向西去的太阳，又瞅了瞅跳下河抓鱼的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 无奈地叹了口气。',
      ]);
      await era.printAndWait([
        '随后已经追了 ',
        urara.get_colored_name(),
        ' 一天的 ',
        you.get_colored_name(),
        ' 放弃了思考，并加入了与担当的玩闹。',
      ]);
      await era.printAndWait([
        '反正也没办法说什么训练了，那不如干脆享受乐趣好了。',
        you.get_colored_name(),
        ' 如此认命的想到。',
      ]);

      await era.printAndWait(
        '在胡闹中浪费了一天的「大好时光」，训练员与担当一齐倒在了身下的草坪上。',
      );
      await urara.say_and_wait([
        '嗯……我好像忘记了什么重要时事呢！对不起哦 ',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '从草坪上坐起来，',
        urara.get_colored_name(),
        ' 终于想起了什么，但面对小',
        urara.uma_sex_title,
        '迟钝的反应，',
        you.get_colored_name(),
        ' 也只是笑笑。',
      ]);
      await era.printAndWait(
        '本来就没什么好着急的，况且这才正式开始接触的第一天，就当是加深了解的一环了。',
      );
      await era.printAndWait('不过，正事还是要兼顾的。');
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一同坐在夕阳下的草坪上，',
        you.get_colored_name(),
        ' 向望着红霞小',
        urara.uma_sex_title,
        '问道。',
      ]);

      era.printButton('「乌拉拉，你想获得第一名的根源是什么呢？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' 并非光说不练的',
        urara.child_sex_title,
        '，',
        urara.sex,
        '所做出的一切都是真诚之举。',
      ]);
      await era.printAndWait([
        '没有才能可以理解，对奔跑的渴望显而易见，但现在却很难看到',
        urara.sex,
        '对「胜利」的追求。',
      ]);
      await era.printAndWait([
        '一般来说，尽管不推崇将一着作为',
        urara.uma_sex_title,
        '的全部，但选择「取胜」的',
        urara.uma_sex_title,
        '往往对第一有着很强的执念。',
      ]);
      await era.printAndWait([
        '但在 ',
        urara.get_colored_name(),
        ' 身上似乎看不到这一点，或者说，在',
        urara.sex,
        '心里还有比第一名更重要的事。',
      ]);
      await era.printAndWait([
        '那么更重要的事又是？虽然不清楚 ',
        urara.get_colored_name(),
        ' 对自身有多了解，但抱着试试看的态度，',
        you.get_colored_name(),
        ' 还是直接抛出了问题。',
      ]);
      era.printButton('「乌拉拉，你不喜欢第一名吗？」', 1);
      await era.input();
      await era.printAndWait([
        '没有直接回答大人的问题，小',
        urara.uma_sex_title,
        '反而向 ',
        you.get_colored_name(),
        ' 抛回了另一个问题。',
      ]);
      await urara.say_and_wait([callname, '，你现在开心吗？']);
      await era.printAndWait([
        '嗯？要说一起玩过后确实很开心，但这是……？不等 ',
        you.get_colored_name(),
        ' 的回答，小',
        urara.uma_sex_title,
        '继续笑着讲道。',
      ]);
      await urara.say_and_wait(
        '知道自己很弱，但是我还是想要奔跑！既然这样的话，就肯定要以一着为目标！',
      );
      await era.printAndWait([
        '轻靠在 ',
        you.get_colored_name(),
        ' 身边，',
        urara.get_colored_name(),
        ' 开朗的笑着，',
        urara.teen_sex_title,
        '的樱花般的眼瞳中映着温柔的红霞。',
      ]);
      await urara.say_and_wait(
        '只是虽然很想拿好多第一名，但如果忘掉重要的事，拿多少个第一都没有意义了嘛！',
      );

      era.printButton('「是说，奔跑的理由？」', 1);
      await era.input();

      await urara.say_and_wait('嗯！因为我想要用奔跑给大家带来笑容！');
      await urara.say_and_wait(
        '不过乌拉拉并不是故意想逃避训练哦！只是一分神就想不起还在训练了……',
      );
      await era.printAndWait([
        '原来如此，名为「',
        urara.get_colored_actual_name(),
        '」的',
        urara.uma_sex_title,
        '意外有点小麻烦，不过幸好',
        urara.sex,
        '很清楚自己想要什么。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 对于一着的执念并不在竞技胜利本身。',
      ]);
      await era.printAndWait([
        '并非不渴望胜利，但对 ',
        urara.get_colored_name(),
        ' 来说获得优胜并没有奔跑本身重要，这也是',
        urara.sex,
        '训练难的主要原因之一：',
      ]);
      await era.printAndWait([
        '奔跑理应是快乐的，所以即使没有特别的才能，',
        urara.sex,
        '也可以安心地露出笑容。',
      ]);
      await era.printAndWait([
        urara.sex,
        '并非只为了像大多数那样「证明自己」或「顺势而为」，而是想为场外的大家赋予更多情感。',
      ]);
      await era.printAndWait(
        '比如说快乐、比如希望，比如与苦恼的陌生人的第一次相遇时的鼓动。',
      );
      await era.printAndWait(
        '但只有对外的情绪倾向是很「危险」的，甚至训练员帮助担当获胜的职责所在都得先放到一边：',
      );
      await era.printAndWait(
        '尽管想法很好，但如果心态不够「强韧」，总有一天会被别人甚至是自己的变化有心或无心的伤害到。',
      );
      await era.printAndWait([
        '而以 ',
        urara.get_colored_name(),
        ' 的现状，不拼尽全力，就没法取得名次，这样很难一直跑下去。',
      ]);
      await era.printAndWait([
        '注意力不集中和三分钟热度是一部分，另一方面也需要激起 ',
        urara.get_colored_name(),
        ' 完整的竞争意识才行。',
      ]);
      await era.printAndWait('这样的话……');

      era.printButton(
        '「我知道乌拉拉的想法了，我会去制订一个适合乌拉拉的训练方案。」',
        1,
      );
      await era.input();

      await era.printAndWait('果然要想稳妥的话，还是从头制定对策来得实在。');
      await urara.say_and_wait('就像漫画主角的专属必杀技那样吗？');

      era.printButton('「没错，就像漫画主角的专属必杀技那样！」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯！乌拉拉也期待着哦！我会好好听 ',
        callname,
        ' 的话的！',
      ]);
      await era.printAndWait([
        '看到 ',
        callname,
        ' 认真地竖起了大拇指，',
        urara.get_colored_name(),
        ' 也真诚地笑着回应道。',
      ]);
      await era.printAndWait([
        '真好啊，这种没有隔阂的纯粹感，不过',
        urara.sex,
        '这样如此信任刚认识的人，没问题吗？',
      ]);
      await era.printAndWait([
        '看来以后尽量照顾好',
        urara.sex,
        '，也大概也要成为日程的一环了。',
      ]);
      await era.printAndWait([
        '至于计划实施，只要不再被 ',
        urara.get_colored_name(),
        ' 带着跑应该就没问题，如果以后能顺利就好——？',
      ]);
      await era.printAndWait([
        '视线跟着思维惯性转向一侧，脱掉了湿漉漉的运动服外套，小',
        urara.uma_sex_title,
        '正安心的靠在 ',
        you.get_colored_name(),
        ' 身边。',
      ]);
      await era.printAndWait([
        urara.sex,
        '那在戏水时沾湿成半透明的衬衣下，也直接的透出了那娇小但充满健康肉感的身体……',
      ]);
      await era.printAndWait([
        '但是还没得及感受小',
        urara.uma_sex_title,
        '的温润，',
        you.get_colored_name(),
        ' 便惊恐地意识到事情有一丝不对。',
      ]);

      era.printButton('「乌拉拉，你的……那个呢？」', 1);
      await era.input();

      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 颤抖的声音中，',
        urara.get_colored_name(),
        ' 有些疑惑地低头看着自己从衣下透出肉色的粉嫩胸口。',
      ]);
      await era.printAndWait([
        '抬头思索一番后，小',
        urara.uma_sex_title,
        '像是终于想起了什么般恍然大悟，对噤声的 ',
        you.get_colored_name(),
        ' 露出了有点害羞的笑容。',
      ]);
      await urara.say_and_wait([
        '啊！不好意思 ',
        callname,
        '！今天出门的时候，我忘记穿内衣了！',
      ]);
      await era.printAndWait('忘、忘穿了？还就这样说出来了？！');
      await urara.say_and_wait([
        '好像两件都忘记了，诶嘿嘿……明明早上的时候小圣王还提醒我不要丢三落四来着，对不起哦！',
      ]);
      await era.printAndWait([
        '面对如此没心没肺的小',
        urara.uma_sex_title,
        '，',
        you.get_colored_name(),
        ' 彻底哑口无言了。',
      ]);
      await era.printAndWait([
        '回避着小',
        urara.uma_sex_title,
        '越贴越紧的身体与略带疑惑的笑脸，',
        you.get_colored_name(),
        ' 忧愁的望着夕阳，眼中全是对 ',
        urara.get_colored_name(),
        ' 的担忧。',
      ]);
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一同的未来，各种方面皆是任重道远……',
      ]);

      if (era.get('cflag:61:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '话说回来，作为 ',
          urara.get_colored_name(),
          ' 的室友还要担任起「妈妈」的工作，圣王光环还真是辛苦了啊……',
        ]);
        await era.printAndWait([
          '不过或许在',
          urara.sex,
          '那里能打听到对 ',
          urara.get_colored_name(),
          ' 训练有帮助的情报也说不定？',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '总之，与小',
        urara.uma_sex_title,
        '一同前进的时光，终于运转了起来。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');

      await inner_urara.say_as_unknown_and_wait(
        '那么，您觉得与『乌拉拉』正式开始相处的感觉如何呢？',
      );
      era.printButton(
        `「在${urara.sex}身上赌一把是值得的，这也是我希望回报${urara.sex}的。」（好感+20）`,
        1,
      );
      era.printButton(
        '「虽然还不够了解，但无防备的小动物感意外的可爱。」（爱慕+5）',
        2,
      );
      const ret = await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '原来如此，我明白了。虽然这话不应该由我来说，但请相信我……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '万事开头难，还请您今后也保持住对',
        urara.sex,
        '的耐心与信心。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '哪怕并不艳丽，但只要能认真成长，就算是墙角的小花，应该也能在春天开放吧。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_after_begin: (() => {
    const title = '乌拉拉式训练';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {CharaTalk} spe 特别周
     * @param {PrintedSpan} sp_call_u 特别周对春乌拉拉的称呼
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} sky 青云天空
     * @param {PrintedSpan} callname_20 青云天空对玩家的称呼
     * @param {PrintedSpan} sk_call_u 青云天空对春乌拉拉的称呼
     * @param {CharaTalk} rice 米浴
     * @param {PrintedSpan} ri_call_u 米浴对春乌拉拉的称呼
     * @param {CharaTalk} doto 名将怒涛
     * @param {PrintedSpan} d_call_u 名将怒涛对春乌拉拉的称呼
     * @param {CharaTalk} halo 圣王光环
     * @param {PrintedSpan} h_call_u 圣王光环对春乌拉拉的称呼
     * @param {CharaTalk} road 成田路
     * @param {PrintedSpan} ro_call_u 成田路对春乌拉拉的称呼
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      {
        spe,
        sp_call_u,
        opera,
        sky,
        callname_20,
        sk_call_u,
        rice,
        ri_call_u,
        doto,
        d_call_u,
        halo,
        h_call_u,
        road,
        ro_call_u,
      },
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '旁观着乌拉拉的奔跑，训练员',
        you.adult_sex_title,
        '（您）还在思考着',
        urara.sex,
        '专属的训练计划。',
      ]);
      era.drawLine();
      await urara.say_and_wait(['嗳嗳！', callname, '！你看那边——']);

      era.printButton('「现在还在训练中哦？」', 1);
      await era.input();

      await urara.say_and_wait('对不起！那我再去跑一圈了！');
      await era.printAndWait([
        '看着担当再次投入训练，',
        you.get_colored_name(),
        ' 继续对小',
        urara.uma_sex_title,
        '行为模式进行着梳理。',
      ]);
      await era.printAndWait([
        '在陪 ',
        urara.get_colored_name(),
        ' 开始训练的一段时间后，',
        you.get_colored_name(),
        ' 逐渐摸清了构成',
        urara.sex,
        '现状的部分事项。',
      ]);
      await era.printAndWait([
        '首先，',
        urara.sex,
        '很没定性，不过缺乏集中力这点也是',
        urara.sex,
        '的性格所致，也正因如此……',
      ]);
      await urara.say_and_wait([callname, '，这边的大家好像有——']);

      era.printButton('「咳咳。」', 1);
      await era.input();

      await urara.say_and_wait('对不起哦！这边还要继续训练，下次再聊吧！');
      await era.printAndWait([
        '就是这样，虽然只要出声提醒',
        urara.sex,
        '就会反省，但又会立刻分心，被更有趣的事吸引走。',
      ]);
      await era.printAndWait(
        '每天都是如此断断续续，竞争心也不足，这样下去训练是不会有效果的。',
      );
      await era.printAndWait([
        '实际上，在 ',
        you.get_colored_name(),
        ' 特意去询问与 ',
        urara.get_colored_name(),
        ' 相熟的',
        urara.uma_sex_title,
        '们时，',
        urara.couple_title,
        '给出的答案也不尽相似。',
      ]);
      era.println();

      const buffer = gacha(
        [
          () =>
            halo.say_and_wait([
              '有一流的目标是好的，可 ',
              h_call_u,
              ' 无法持续训练对',
              urara.sex,
              '自己也不好吧？',
            ]),
          () =>
            sky.say_and_wait([
              '啊～我明白啦，',
              callname_20,
              ' 最近是被 ',
              sk_call_u,
              ' 的坏习惯搞得很辛苦吧？',
            ]),
          () =>
            spe.say_and_wait([
              sp_call_u,
              ' 带来的胡萝卜很好吃！只是经常会粗心到忘记给到哪里了。',
            ]),
          () =>
            rice.say_and_wait([
              '诶？',
              ri_call_u,
              ' 的话，虽然很喜欢跑步，但心情上总缺一点耐性呢……',
            ]),
          () =>
            road.say_and_wait([
              ro_call_u,
              ' 很厉害……总之就是很厉害！只是稍微有点不擅长功课！',
            ]),
          () =>
            opera.say_and_wait(
              '嗯嗯～花儿在挑剔的吸收养分，但含苞待放是犹豫的一种也说不定哦？',
            ),
          () =>
            doto.say_and_wait([
              d_call_u,
              ' 每次都愿意帮我收拾麻烦，虽然有时候会变得更麻烦呢……',
            ]),
        ],
        3,
      );
      for (const talk of buffer) {
        await talk();
      }
      era.println();

      await era.printAndWait([
        '即使是在同学之间，',
        urara.get_colored_name(),
        ' 的各种小毛病也是出了名的。',
      ]);
      await era.printAndWait([
        '而且理论上说只要满足 ',
        urara.get_colored_name(),
        ' 的「有趣」就可以，但这样又该纳入哪些内容呢……',
      ]);
      await era.printAndWait([
        '看来还是想象力不足。为了想出对策，当务之急自己必须更加了解 ',
        urara.get_colored_name(),
        ' 才行。',
      ]);
      await era.printAndWait([
        '一边将买下的必需品装进袋子，',
        you.get_colored_name(),
        ' 若有所思地前往了商店街的下一家店。',
      ]);
      await urara.say_and_wait([
        '啊、',
        callname,
        '！欢迎光临哦！这里有超好吃的苹果哦！要不要买一些啊？',
      ]);

      era.printButton('「嗯、嗯？乌拉拉？你是……在这里帮忙吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '没错哦！只要有空我都会来这边帮忙的！会很开心哦！',
      );
      await era.printAndWait([
        '在校服外简单的系着围裙，',
        urara.get_colored_name(),
        ' 笑容满面的凑了过来。',
      ]);

      const relation = era.get('relation:52:0');
      if (relation > 150) {
        await urara.say_and_wait([
          callname,
          ' 要尝尝吗？没关系的，店长叔叔已经同意了！',
        ]);
        await era.printAndWait([
          '不由分说的挑了一颗最大的苹果塞到了 ',
          you.get_colored_name(),
          ' 的手中，',
          urara.get_colored_name(),
          ' 似乎在示意现在就尝一尝。',
        ]);
        await era.printAndWait([
          '刚洗过的果实上挂着晶莹的水珠，表皮光滑的反射着 ',
          urara.get_colored_name(),
          ' 比苹果还要饱满可人的小脸。',
        ]);
        await urara.say_and_wait(
          '今天的苹果是店长叔叔推荐的，绝对很甜的，我可以保证哦！',
        );
      } else {
        await urara.say_and_wait([
          '这边可以给 ',
          callname,
          ' 便宜一些哦？当然已经经过店长叔叔同意了！',
        ]);
        await era.printAndWait([
          '虽然脸上笑容是真实的，但 ',
          urara.get_colored_name(),
          ' 的话语却有些生分的意味在里面。',
        ]);
        await era.printAndWait([
          '不过尽管如此，',
          urara.sex,
          '还是拿出一颗很大的苹果塞在了 ',
          you.get_colored_name(),
          ' 的手中。',
        ]);
        await urara.say_and_wait([
          '如果拿不定主意的话 ',
          callname,
          ' 先尝尝也可以哦？很好吃的！',
        ]);
      }
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '哦，欢迎啊！你是乌拉拉的朋友吗？这样我得多送你一些才行！',
      );
      await urara.say_and_wait(['不只是朋友哦叔叔！这位也是乌拉拉的训练员！']);
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '哦哦，原来是训练员……训练员？！乌拉拉的吗？',
      );
      await era.printAndWait([
        '闻声走来的店主大叔在听到 ',
        urara.get_colored_name(),
        ' 的回答后先是一愣，随后突然向街上跑去——',
      ]);
      await era.printAndWait([
        '前后仅仅不到五分钟，商店街的街坊邻居们就在 ',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 的身边围了个水泄不通。',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '哎呀，乌拉拉终于也有签约训练员了啊！真是可喜可贺！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '这下出道也有保证了，以后小乌拉拉有比赛大家一定会去加油的！',
      );
      await you.say_as_passer_by_and_wait('商店街的人', [
        '训练员',
        you.adult_sex_title,
        '！这孩子虽然有点冒失，但',
        urara.sex,
        '很努力哦！',
      ]);

      era.printButton('「嗯！之后也请交给我吧！」', 1);
      await era.input();

      await era.printAndWait([
        '一边回应着周围如潮水般涌来的祝福与期望，',
        you.get_colored_name(),
        ' 悄悄地看向了一旁的 ',
        urara.get_colored_name(),
        '——',
      ]);

      if (relation > 150) {
        await you.say_as_passer_by_and_wait(
          '商店街的人',
          '虽然未来有了保证是好事，可是乌拉拉不会是被人骗了吧？',
        );
        await you.say_as_passer_by_and_wait(
          '商店街的人',
          '在这里说什么晦气的话呢？再说了你看乌拉拉不是很开心吗？',
        );
        await you.say_as_passer_by_and_wait('商店街的人', [
          '可是我也有听说特雷森的训练员很多都会和担当',
          urara.uma_sex_title,
          '……',
        ]);
        await you.say_as_passer_by_and_wait(
          '商店街的人',
          '那你急什么啊？怎么？乌拉拉以后找到了喜欢的人你也不服气？',
        );
        await era.printAndWait('嗯……这种时候该说什么好呢……');
      } else {
        await you.say_as_passer_by_and_wait(
          '商店街的人',
          '要是乌拉拉以后也能顺顺利的就好了，但好像又不是那样？',
        );
        await you.say_as_passer_by_and_wait(
          '商店街的人',
          '说什么不中听的话呢？怎么能对乌拉拉的训练员说这样的话啊？',
        );
        await you.say_as_passer_by_and_wait(
          '商店街的人',
          '可是乌拉拉看上去不太高兴的样子……',
        );
        await you.say_as_passer_by_and_wait('商店街的人', [
          '什么啊？那不是你每次都让乌拉拉干一大堆活把',
          urara.sex,
          '累着了吗？',
        ]);
        await era.printAndWait('……果然现在还是别说多余的话吧……');
      }

      await era.printAndWait([
        '看来这条街上的各位真的非常喜欢 ',
        urara.get_colored_name(),
        ' 啊，总觉得逐渐明白 ',
        urara.get_colored_name(),
        ' 的优势在哪里了。',
      ]);
      await era.printAndWait([
        '在那之后，商店街的店家们一边说着「因为 ',
        urara.get_colored_name(),
        ' 受你照顾了」，一边分别送上了伴手礼。',
      ]);
      await you.say_and_wait('只是，这些赠品是不是太多了……？', true);
      await era.printAndWait([
        '虽然 ',
        you.get_colored_name(),
        ' 并不觉得自己如此有功，不如说是 ',
        urara.get_colored_name(),
        ' 在最初先照顾了 ',
        you.get_colored_name(),
        ' 才对。',
      ]);
      await era.printAndWait([
        '但就算再不好意思，',
        you.get_colored_name(),
        ' 一时也想不出该如何拒绝掉这份一股脑丢过来的庞大好意。',
      ]);
      await urara.say_and_wait([callname, '，收到好多哦！我来帮忙拿吧！']);
      await era.printAndWait([
        '而在发现别人的为难后，',
        urara.get_colored_name(),
        ' 便说着要帮忙，一边快速地把包围着 ',
        you.get_colored_name(),
        ' 的东西都挨个叠在了自己的身上。',
      ]);

      era.printButton('「量力而行啊！要帮忙的话只拿这些就好……」', 1);
      await era.input();

      await urara.say_and_wait([
        '没关系的，全都交给我吧！乌拉拉可是',
        urara.uma_sex_title,
        '哦……呜诶，好重！但我会加油的！',
      ]);
      await era.printAndWait([
        '笑着拒绝了 ',
        you.get_colored_name(),
        ' 的提议，',
        urara.get_colored_name(),
        ' 用尽全力背起了几乎与自己相当的东西，接下来似乎每走一步都相当专注……',
      ]);
      await you.say_and_wait('嗯？等下，专注起来了？在这个时候？', true);
      await era.printAndWait([
        '终于有了合适的训练灵感的 ',
        you.get_colored_name(),
        '，轻轻跟还围在一旁的商店街的各位打了声招呼——',
      ]);
      era.println();
      await urara.say_and_wait(
        '嗯！是要把这箱苹果搬过去，越快越好对吧？我明白了！但是……',
      );

      era.printButton('「但、但是？」', 1);
      await era.input();

      await urara.say_and_wait(
        '不用勉强自己也可以哦？搬东西的话，乌拉拉一个人就可以的！',
      );

      era.printButton(
        '「没、没、没关系的，说好了要一起帮忙的，而且我觉得我应该还行——」',
        1,
      );
      await era.input();

      await you.say_as_passer_by_and_wait('商店街的孩子们', [
        '乌拉拉',
        urara.elder_sibling_sex_title,
        '！变慢了的话就要赶不上了哦？',
      ]);
      await urara.say_and_wait('啊！大家跑得慢一点哦！要注意安全！');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 觉得自己的腰马上就要断掉之前，住在商店街附近的小',
        urara.uma_sex_title,
        '们从就 ',
        you.get_colored_name(),
        ' 身边分过了 ',
        you.get_colored_name(),
        ' 的负重。',
      ]);
      await era.printAndWait([
        '背起货箱，',
        urara.get_colored_name(),
        ' 追着小',
        urara.uma_sex_title,
        '们的步伐认真地跑了起来，而 ',
        you.get_colored_name(),
        ' 则在完成阶段性任务后差点瘫坐在地上。',
      ]);
      await era.printAndWait([
        '在得到商店街的各位的协助后，能够发挥 ',
        urara.get_colored_name(),
        ' 主观积极性的训练方法成功的运转起来。',
      ]);
      await era.printAndWait([
        '关于 ',
        urara.get_colored_name(),
        ' 的训练持续性的问题算是基本解决了，训练的成效估计很快就可以看见。',
      ]);
      await era.printAndWait([
        '至于每天训练结束后身体都要透支了……',
        you.get_colored_name(),
        ' 觉得这除了某人还是缺乏锻炼之外没有任何问题。',
      ]);
      await era.printAndWait(
        '才怪。以后都照这样练，要是运气好没进医院，恐怕某人都能自己去跑比赛了。',
      );
      await era.printAndWait([
        '不过又该如何提升 ',
        urara.get_colored_name(),
        ' 的竞争意识，这大概又是另一个长期课题了。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '当然您目前还不知道的是，这一忧虑会在未来的某件事后迎刃而解——',
      );
      await inner_urara.say_as_unknown_and_wait(
        '我明白这样的剧透您不会满意，不过至少在最初我希望您能安心。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '您与我们的故事恐怕不会有什么特别的一波三折，但还请您耐心的继续向前。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race_first: (() => {
    const title = '迎向出道战！';
    /**
     * 新秀年 6 月 4 周出道战
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '在与订下了契约的训练员互相摸索了许久后，两人逐渐做好了真正的准备。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '名为 ',
        urara.get_colored_actual_name(),
        ' 的小',
        urara.uma_sex_title,
        '，终于要在『出道战』中出赛了——',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        '终于要出道了吗？那么今天也要『乌拉拉』地上了！',
      );

      era.printButton('「乌拉拉，放松一下，别太紧张了。」', 1);
      await era.input();

      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一起站在赛场的通道内，',
        you.get_colored_name(),
        ' 安抚着一旁脸上带着笑容，身体却在颤抖的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '训练成果的检测就在今天，',
        urara.get_colored_name(),
        ' 也知道出道「机会」是有限的，这次能不能胜利相当关键。',
      ]);
      await era.printAndWait(
        '逐渐产生竞赛意识是好事，但过于激动可能会导致发挥失常，太紧张而没法上场的也不在少数。',
      );
      await era.printAndWait([
        '所以比周围几位这时还在为未出道担当讲经的同行，让',
        urara.sex,
        '开心地去跑才是上策。',
      ]);
      await urara.say_and_wait('嗯！说的是呢！嘿嘿～不知不觉中就变得紧张了！');
      await era.printAndWait([
        '在听到 ',
        you.get_colored_name(),
        ' 的提醒后放松了肩膀，尽管还很勉强，',
        urara.get_colored_name(),
        ' 依旧竖起耳朵对 ',
        you.get_colored_name(),
        ' 露出了笑容。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '但是终于可以出道了嘛！我觉得现在就能出道是很厉害的事哦！',
        );
        await urara.say_and_wait([
          '出道之后就能参加更多的比赛！拿到更多第一的话，',
          callname,
          ' 和大家都会开心吧！',
        ]);
        await era.printAndWait([
          '用力地摇着尾巴，',
          urara.get_colored_name(),
          ' 略显稚嫩的声音中，能明显地感受到为支持自己的人而存在的斗志。',
        ]);
        await era.printAndWait([
          '总感觉变得像英雄剧的主角那样，',
          urara.get_colored_name(),
          '，真是个不得了的孩子……',
        ]);
      } else {
        await urara.say_and_wait(
          '但是马上就要出道了嘛！虽然觉得有些早，但也到了前进的时候呢！',
        );
        await urara.say_and_wait(
          '我会打起精神来的！只要能拿到第一的话，大家应该也能露出笑容吧！',
        );
        await era.printAndWait([
          '像给自己胸中的斗志打气一般，',
          urara.get_colored_name(),
          ' 用力摇着尾巴，脸上又多了几分认真。',
        ]);
        await era.printAndWait([
          '即使不够自信，也会为了关照自己的大家全力以赴，',
          urara.get_colored_name(),
          '，真个好孩子啊……',
        ]);
      }
      era.println();
      await urara.say_and_wait([
        '而且呢，我也觉得自己变得比之前更强了！',
        callname,
        ' 的办法真的很有用！',
      ]);
      await urara.say_and_wait(['虽然还不知道，', callname, '，你的身体也——']);

      era.printButton(
        `「没事的，我不是说很多次了吗？${callname} 没问题的！」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？真的吗？那 ',
        callname,
        ' 也要放松一些哦？',
      ]);

      era.printButton('「真的哦！乌拉拉大可放心！」', 1);
      await era.input();

      await era.printAndWait([
        '在与 ',
        you.get_colored_name(),
        ' 一句句的赛前闲聊中，',
        urara.get_colored_name(),
        ' 紧绷的神情逐渐缓和下来。',
      ]);
      await era.printAndWait([
        '这样应该没问题了吧？悄悄按住还抖得厉害的双腿，',
        you.get_colored_name(),
        ' 给自己站着都费劲的身体又换了个姿势。',
      ]);
      await era.printAndWait(
        '虽然身体直到现在都还酸得要死，不过既然努力真的没有白费，那苦一点也算值得了。',
      );
      await era.printAndWait([
        '调整好呼吸，整理好自己的体操服与号码布，',
        urara.get_colored_name(),
        ' 随着广播中的入场提示向前踏出一步。',
      ]);

      era.printButton('「第一次，做好准备了吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！我觉得今天我一定能跑第一名！不对，是绝对会赢！',
      );
      await urara.say_and_wait([
        '那我要出发了哦！提问！',
        callname,
        '，乌拉拉要怎样奔跑呢——？',
      ]);
      await era.printAndWait([
        '面对 ',
        urara.get_colored_name(),
        ' 迎着光的笑容，',
        you.get_colored_name(),
        ' 有力地回应着',
        urara.sex,
        '。',
      ]);

      era.printButton('「不管怎样，开心的上吧——！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '没问题吗？';
    /**
     * 此后的出道战和未胜利战
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '尽管并不意外乌拉拉会走到这一步，但心情上还是很难接受，各种方面都是。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '您与',
        urara.sex,
        '都没问题吧？故事这么简单的结束的话，我可不会接受哦？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '忧心忡忡的看着身旁的担当，',
        you.get_colored_name(),
        ' 犹豫着不知要怎样开口。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 明白现在 ',
        urara.get_colored_name(),
        ' 恐怕没有表面上那么充满余裕，可既然选择出道，横在前面的障碍就必须跨过去。',
      ]);
      await era.printAndWait([
        '要直接和',
        urara.sex,
        '说这次再无法取得胜利的话会面临什么吗？果然还是说不出口。',
      ]);
      await era.printAndWait([
        '况且现在去说也太晚了，就算 ',
        urara.get_colored_name(),
        ' 早就有所察觉，现在明确提起也不过是徒增压力。',
      ]);
      await era.printAndWait([
        '到头来能说的，恐怕也只有让',
        urara.sex,
        '和平常一样开心地去跑，但这样的话……',
      ]);
      await urara.say_and_wait([
        callname,
        '，不用担心乌拉拉哦？我明白该怎么跑的！',
      ]);
      await era.printAndWait([
        '似乎是看穿了 ',
        you.get_colored_name(),
        ' 的纠结，',
        urara.get_colored_name(),
        ' 对身边的 ',
        you.get_colored_name(),
        ' 温柔地笑着，就像',
        urara.sex,
        '才是目送担当上场的训练员一般。',
      ]);
      await urara.say_and_wait([
        '因为 ',
        callname,
        ' 很厉害哦？所以乌拉拉一定没问题的！',
      ]);

      era.printButton('「……要开心的去跑，对吧？」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '嗯！无论结果如何，乌拉拉都不会放弃奔跑！所以 ',
          callname,
          ' 不用担心！',
        ]);
        await era.printAndWait([
          '回应着 ',
          you.get_colored_name(),
          ' 的话语，',
          urara.get_colored_name(),
          ' 露出了令人安心的笑容。',
        ]);
        await urara.say_and_wait([
          '嘿嘿～看来 ',
          callname,
          ' 还记得我说过的话啊，果然 ',
          callname,
          ' 很厉害！',
        ]);
        await era.printAndWait([
          '没错，现在再担心也没什么意义，接下来只要把奔跑都交给 ',
          urara.get_colored_name(),
          ' 就好。',
        ]);
      } else {
        await urara.say_and_wait(
          '没错哦！所以就算又输掉了，乌拉拉也会继续奔跑呢！',
        );
        await era.printAndWait([
          '尽管没有看向 ',
          you.get_colored_name(),
          '，但 ',
          urara.get_colored_name(),
          ' 脸上依旧流露出了笑意。',
        ]);
        await urara.say_and_wait('所以接下来，只要继续努力去跑就可以了！');
        await era.printAndWait([
          '是啊，',
          urara.get_colored_name(),
          ' 就是这样坚强的',
          urara.uma_sex_title,
          '，该担心的，恐怕只有不愿信任',
          urara.sex,
          '的我……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '用深呼吸稳定下心绪之后，',
        you.get_colored_name(),
        ' 也和 ',
        urara.get_colored_name(),
        ' 一同笑了起来，虽然更多的是一种自嘲。',
      ]);
      await era.printAndWait([
        '明明是 ',
        urara.get_colored_name(),
        ' 的比赛，怎么搞得像自己要跑一样。刚刚还想着怎样去安慰 ',
        urara.get_colored_name(),
        '，结果现在被安慰的还是自己。',
      ]);
      await era.printAndWait([
        '不过至少 ',
        you.get_colored_name(),
        ' 明白了，现在没什么好犹豫的，因为 ',
        urara.get_colored_name(),
        ' 一定会继续向前。',
      ]);
      await era.printAndWait([
        '没有像周围训练员与担当继续交流什么，',
        you.get_colored_name(),
        ' 与靠在身边的小',
        urara.uma_sex_title,
        '安静地等待着，直至提示入场的广播声响起。',
      ]);
      await urara.say_and_wait(['到时间了哦 ', callname, '！我要上了呦！']);

      era.printButton('「这次一定要拿到最喜欢的一着哦！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！一定会的！');
      await era.printAndWait([
        '随着简短有力的回应，迎着通道外的阳光，',
        urara.get_colored_name(),
        ' 再次面带笑容的走向了赛场。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_first: (() => {
    const title = '第一次胜利！';
    /**
     * 新秀年 6 月 4 周出道战胜利
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '虽然还只是出道，但真是不容易啊，名为 ',
        urara.get_colored_actual_name(),
        ' 的小',
        urara.uma_sex_title,
        '，拿到了第一名——',
      ]);
      era.drawLine();
      await era.printAndWait([
        '看到 ',
        urara.get_colored_name(),
        ' 冲线的瞬间，',
        you.get_colored_name(),
        ' 立刻无视了身体的劳损站起来，冲向了赛场观众席的最前排。',
      ]);
      await era.printAndWait(
        '心中的石头落地，肌肉酸痛与一着确认前的紧张感也随着担当的接近一同散去了。',
      );
      await era.printAndWait([
        '随着紧绷的精神进入放松状态，想要对 ',
        urara.get_colored_name(),
        ' 狠狠揉搓一番的念头也从压抑中解放出来。',
      ]);
      await era.printAndWait([
        '就这样，没顾及旁人是否在看，在祝贺之余，',
        you.get_colored_name(),
        ' 也将手直接伸向了 ',
        urara.get_colored_name(),
        ' 柔软的小脸与耳朵。',
      ]);
      await era.printAndWait([
        '沾湿的体操服上散发着',
        urara.teen_sex_title,
        '的清香，但与初遇时不同，今天的香气中也伴随着胜利的花香。',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 的揉搓中，',
        urara.get_colored_name(),
        ' 也像小动物般伸出小手轻轻扒着 ',
        you.get_colored_name(),
        '，沾满汗水的娃娃脸挂起了一丝羞红。',
      ]);
      await era.printAndWait([
        '如果可以，',
        you.get_colored_name(),
        ' 恨不得现在把这个柔软的小可爱抱起来吸，但目前尚存的理智还是及时拉住了 ',
        you.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait(
        '这果然还是累到了吗？说起来，为什么头有点晕……',
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '诶嘿嘿～',
          callname,
          '，先别揉了！很痒的！',
        ]);
        await era.printAndWait([
          '害羞地拿掉 ',
          you.get_colored_name(),
          ' 兴奋过头的双手，',
          urara.get_colored_name(),
          ' 激动地摇着尾巴，绽放的笑容中含着发自内心的喜悦。',
        ]);
        await urara.say_and_wait([
          '今天的我是第一名哦！第一次看到前面没有人在跑！站上优胜者区域也是第一次！',
        ]);
      } else {
        await urara.say_and_wait([callname, '！别这样啊！大家都在看着呢！']);
        await era.printAndWait([
          '难为情的嘟着小嘴拍掉 ',
          you.get_colored_name(),
          ' 还在乱揉的手，',
          urara.get_colored_name(),
          ' 带着羞意的脸上终于绽出了笑容。',
        ]);
        await urara.say_and_wait([
          '嘿嘿，但还是谢谢 ',
          callname,
          '！今天的我真的是第一名哦～！',
        ]);
      }
      era.println();
      era.printButton('「一着的感觉如何？前方的景色，很漂亮吧？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！比我想像中的还要开心好多！我还想再得到更多次第一名！',
      );
      await urara.say_and_wait(
        '以后我们也要参加更多比赛对吧？我还会继续加油的！',
      );
      await era.printAndWait([
        '看来 ',
        urara.get_colored_name(),
        ' 的胜负意识已经在觉醒了，只要继续下去，以后一定能遇见质变的契机。',
      ]);
      await era.printAndWait([
        '那样的话，除了场外的大家，',
        urara.sex,
        '也能在同他人的竞争中找到自己在赛场内想要追求的愿望吧。',
      ]);
      await era.printAndWait([
        '揉着不知为何有些麻木的太阳穴，',
        you.get_colored_name(),
        ' 继续调动着训练员方面的思考。',
      ]);
      await era.printAndWait(
        '今后为了继续增强实力，总之先尽量累积参赛经验以此当作目标之一或许也不错。',
      );

      era.printButton('「好！那接下来比赛就要多起来了，没问题吧？」', 1);
      await era.input();

      await urara.say_and_wait(['好——！嗯？', callname, '，那边！']);

      era.printButton('「怎么了吗？」', 1);
      await era.input();

      await urara.say_and_wait('商店街的大家，都来了哦！');
      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 注视的方向看去，只见那些平时与小',
        urara.uma_sex_title,
        '交情深厚的商店街邻里全都到齐了。',
      ]);
      await era.printAndWait(
        '商店街的人「乌拉拉向这边看过来了！各位，预备——！」',
      );
      await era.printAndWait('商店街的人们「乌拉拉！恭喜顺利出道！」');
      await era.printAndWait(
        '随着祝福声响成一片，商店街的居民们迎着风拉起了写着「乌拉拉，恭喜出道」的横幅布条。',
      );
      await era.printAndWait(
        '商店街的人「乌拉拉！不管是出道还是拿到第一都做得很棒哦！」',
      );
      await era.printAndWait(
        '商店街的人「以后也尽情去跑吧！我们也会一直支持你的！」',
      );
      await era.printAndWait([
        '尽管只是成功出道，但大家却欢喜到像在办祭典，即使明白各位对 ',
        urara.get_colored_name(),
        ' 的感情，',
        you.get_colored_name(),
        ' 还是被吓了一跳。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 偷偷抹掉了险些迷住眼睛的「汗水」，随后带着笑容向大家全力以赴地回应着。',
      ]);
      await urara.say_and_wait('谢谢大家！今后的我!会一直、一直跑下去哦！');
      await era.printAndWait('商店街的人们「哦！加油啊——！」');
      await era.printAndWait(
        '商店街的人「接下来乌拉拉的事情也交给你了！训练员也要加油哦！」',
      );
      await era.printAndWait([
        '被大家一同送来的祝福打了个措手不及，',
        you.get_colored_name(),
        ' 仿佛被吓到了般愣在原地。',
      ]);
      await era.printAndWait(
        '不，或许就是被吓到了也说不定。仔细想想，以前的时候有过被这样期待的经历吗？',
      );
      await era.printAndWait([
        '而马上就看出了 ',
        you.get_colored_name(),
        ' 的不知所措，',
        urara.get_colored_name(),
        ' 笑着拉住 ',
        you.get_colored_name(),
        ' 的手，开始为 ',
        you.get_colored_name(),
        ' 打气。',
      ]);
      await urara.say_and_wait([callname, '！趁这个机会也和大家说点什么吧！']);
      era.printButton('「诶？啊？我吗？可是到底要……」', 1);
      await era.input();

      await urara.say_and_wait(
        '没关系的！只要把心里话用力喊出来就好了！加油哦！',
      );
      await era.printAndWait([
        '既然这样，就非得回应大家的期待不可了。在 ',
        urara.get_colored_name(),
        ' 亮闪闪的目光中，',
        you.get_colored_name(),
        ' 深吸了一口气——',
      ]);
      await era.printAndWait([
        '然而就连第一个字都没来得及说出口，因过于用力崩断了脑内最后的意识，',
        you.get_colored_name(),
        ' 闷头仰了过去。',
      ]);
      await urara.say_and_wait([
        '嗯？',
        callname,
        '，怎么了……诶？诶！',
        callname,
        '！',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '怀揣着没能说出的感谢，在 ',
        urara.get_colored_name(),
        ' 与周围人的惊呼中，体力透支的 ',
        you.get_colored_name(),
        ' 又一次晕头转向地倒下了。',
      ]);
      await era.printAndWait([
        '可恶，明明是挺感人的画面来着，为啥啊？连自己都没忍住地，',
        you.get_colored_name(),
        ' 笑着闭上了眼……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('嘶……');
      await inner_urara.say_as_unknown_and_wait('咳，那个……出道战辛苦了？');
      await inner_urara.say_as_unknown_and_wait(
        '终究不是体力能解决的问题呢，以后您还是注意身体吧……',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose_first: (() => {
    const title = '继续前进！';
    /**
     * 新秀年 6 月 4 周出道战失败
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '意料之中的事情还是发生了。别泄气，如果是您的话，下次应该可以……',
      );
      era.drawLine();
      await era.printAndWait([
        '看到 ',
        urara.get_colored_name(),
        ' 虽然没能拿下一着，但有着预期之内的进步，',
        you.get_colored_name(),
        ' 稍微松了口气，身上积压的劳累也轻了不少。',
      ]);
      await era.printAndWait(
        '大家的努力都能见到成效，即使万事开头难，这也算得上不错的开篇了。',
      );
      await era.printAndWait([
        '虽然头还是因长期紧绷导致有点疼，但跟 ',
        urara.get_colored_name(),
        ' 的出道比起来，这些也都无伤大雅。',
      ]);
      await era.printAndWait([
        '望着在赛道旁擦着汗的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 缓缓站起来绕过人群，走向了前排离 ',
        urara.get_colored_name(),
        ' 最近的位置。',
      ]);

      era.printButton('「辛苦了，出道的第一战，感觉如何？」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          '看到 ',
          you.get_colored_name(),
          ' 招手的身影，',
          urara.get_colored_name(),
          ' 打起精神，和往常一样笑着跑了过来。',
        ]);
        await urara.say_and_wait([
          '谢谢 ',
          callname,
          '！而且我没有很辛苦哦！因为奔跑还是很开心！',
        ]);
        await urara.say_and_wait(
          '不过，结果还是没得到第一名……但是我好好地跑到最后了！',
        );
        await era.printAndWait([
          '虽然声音藏不住落寞，但 ',
          urara.get_colored_name(),
          ' 还是在下一秒前驱散了自己的失落。',
        ]);
        await urara.say_and_wait([
          callname,
          '！只要以后能拿到第一的话，应该就可以参加更多比赛了吧？',
        ]);
      } else {
        await era.printAndWait([
          '看到 ',
          you.get_colored_name(),
          ' 的身影，',
          urara.get_colored_name(),
          ' 抹掉脸上咸咸的水珠，跑到了 ',
          you.get_colored_name(),
          ' 的身边。',
        ]);
        await urara.say_and_wait([
          '谢谢 ',
          callname,
          '，不过我没有很辛苦哦，而且奔跑还是很开心！',
        ]);
        await urara.say_and_wait(
          '只是……结果还是没得到第一名……但这次好好地跑到最后了！',
        );
        await era.printAndWait([
          '虽然声音藏不住落寞，但 ',
          urara.get_colored_name(),
          ' 还是在下一秒前找回了自己的笑容。',
        ]);
        await urara.say_and_wait(
          '我想要一直跑下去呢！所以现在出道了，以后应该可以拿到一着对吧？',
        );
      }
      era.println();
      await era.printAndWait([
        '看来 ',
        urara.get_colored_name(),
        ' 的胜负意识已经在觉醒了，只要继续下去，以后一定能遇见质变的契机。',
      ]);
      await era.printAndWait([
        '那样的话，除了场外的大家，',
        urara.sex,
        '也能在同他人的竞争中找到自己在赛场内想要追求的愿望吧。',
      ]);
      await era.printAndWait([
        '揉着还在隐隐作痛的太阳穴，',
        you.get_colored_name(),
        ' 继续调动着训练员方面的思考。',
      ]);
      await era.printAndWait(
        '不过首先为了之后能参加到更多比赛中去，果然还是尽快确保第一次胜利比较好。',
      );

      era.printButton('「好！那新一轮的特训就要开始了，没问题吧？」', 1);
      await era.input();

      await urara.say_and_wait(['好——！嗯？', callname, '，那边！']);

      era.printButton('「怎么了吗？」', 1);
      await era.input();

      await urara.say_and_wait('商店街的大家，都来了哦！');
      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 注视的方向看去，只见那些平时与小',
        urara.uma_sex_title,
        '交情深厚的商店街邻里全都到齐了。',
      ]);
      await era.printAndWait(
        '商店街的人「乌拉拉！就算没拿到第一也很厉害哦！」',
      );
      await era.printAndWait(
        '商店街的人「以后也尽情去跑吧！我们也会一直支持你的！」',
      );
      await era.printAndWait(
        '尽管只是成功出道，甚至没能拿到一着，但大家却欢喜到像在办祭典一般。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 偷偷抹掉了险些迷住眼睛的「汗水」，随后带着笑容向大家全力以赴地回应着。',
      ]);
      await urara.say_and_wait(
        '谢谢大家！下一次我一定会尽早拿到一着给大家看的！',
      );
      await era.printAndWait('商店街的人们「哦！加油啊——！」');
      await era.printAndWait(
        '商店街的人「训练员也辛苦了哦！谢谢你照顾小乌拉拉！」',
      );
      await era.printAndWait([
        '被大家一同送来的祝福打了个措手不及，',
        you.get_colored_name(),
        ' 仿佛被吓到了般愣在原地。',
      ]);
      await era.printAndWait(
        '不，或许就是被吓到了也说不定。仔细想想，以前的时候有过被这样期待的经历吗？',
      );
      await era.printAndWait([
        '而马上就看出了 ',
        you.get_colored_name(),
        ' 的不知所措，',
        urara.get_colored_name(),
        ' 笑着拉住 ',
        you.get_colored_name(),
        ' 的手，开始为 ',
        you.get_colored_name(),
        ' 打气。',
      ]);
      await urara.say_and_wait([callname, '！趁这个机会也和大家说点什么吧！']);
      era.printButton('「啊？我吗？可是我也没有……」', 1);
      await era.input();

      await urara.say_and_wait([
        '没关系啦！下一次我们一定可以的，所以 ',
        callname,
        ' 现在把心里话喊出来吧！',
      ]);
      await era.printAndWait([
        '既然这样，就非得回应大家的期待不可了。在 ',
        urara.get_colored_name(),
        ' 亮闪闪的目光中，',
        you.get_colored_name(),
        ' 深吸了一口气——',
      ]);
      await era.printAndWait([
        '然而就连第一个字都没来得及说出口，因过于用力崩断了脑内最后的意识，',
        you.get_colored_name(),
        ' 闷头仰了过去。',
      ]);
      await urara.say_and_wait([
        '嗯？',
        callname,
        '，怎么了……诶？诶！',
        callname,
        '！',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '怀揣着没能说出的感谢，在 ',
        urara.get_colored_name(),
        ' 与周围人的惊呼中，体力透支的 ',
        you.get_colored_name(),
        ' 一次晕头转向地倒下了……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '唉，为了对付乌拉拉的出道，您也辛苦了。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '您还是尽量注意一下吧，不要等到乌拉拉还没拿到一着，训练员却垮掉了……',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '终于，第一次的……';
    /**
     * 此后的出道战和未胜利战胜利
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '无论如何，悬着的心，终于可以因为初次的胜利暂时放一放了。',
      );
      era.drawLine();
      await era.printAndWait([
        '随着 ',
        urara.get_colored_name(),
        ' 的第一个冲过终点板，',
        you.get_colored_name(),
        ' 也揉着僵硬的双肩站了起来。',
      ]);
      await era.printAndWait(
        '虽然身体依旧很疲惫，但与上次相比还是轻了许多，尤其是担当平安一着后更是变得一身轻松。',
      );
      await era.printAndWait([
        '至少这次绝对不会轻易累倒在别人面前了，看着从远处跑来的小小身影，',
        you.get_colored_name(),
        ' 向那抹粉色扬起了手。',
      ]);
      await era.printAndWait([
        '汗水沾湿的体操服散发着',
        urara.teen_sex_title,
        '的清香，看到 ',
        you.get_colored_name(),
        ' 的招呼，从另一侧跑来的小',
        urara.uma_sex_title,
        '带着胜利的笑容停在了 ',
        you.get_colored_name(),
        ' 的身前。',
      ]);
      await urara.say_and_wait([
        '呜哦——！第一名！',
        callname,
        '！我拿到第一名了——！',
      ]);
      await urara.say_and_wait('啊，糟糕！我跑进优胜者区域了，应该不要紧吧……');

      era.printButton('「不，冷静一点啊乌拉拉，你是第一名啊。」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          '伸手揉着小',
          urara.uma_sex_title,
          '的脸颊，',
          you.get_colored_name(),
          ' 笑着安抚着因为初次胜利而变得过于兴奋的担当。',
        ]);
        await era.printAndWait([
          '似乎是在享受着 ',
          you.get_colored_name(),
          ' 的抚摸，在 ',
          you.get_colored_name(),
          ' 的揉搓中逐渐安静下来的 ',
          urara.get_colored_name(),
          ' 也露出了享受的神情。',
        ]);
        await urara.say_and_wait(
          '啊，好像真是这样！乌拉拉已经不是以前的样子了～',
        );
        await urara.say_and_wait([
          '那 ',
          callname,
          ' 有看到吗？我刚才真的第一个冲个终点板了哦！',
        ]);
      } else {
        await era.printAndWait([
          '将毛巾与运动饮料递给气喘吁吁的小',
          urara.uma_sex_title,
          '，',
          you.get_colored_name(),
          ' 轻声提醒着还有些晕头转向的担当。',
        ]);
        await era.printAndWait([
          '拍拍脸颊接过水与毛巾，',
          urara.get_colored_name(),
          ' 终于对 ',
          you.get_colored_name(),
          ' 露出了心结落地的笑容。',
        ]);
        await urara.say_and_wait('啊，确实没错呢！这次的我好像真的赢了！');
        await urara.say_and_wait([
          '虽然很累，但是 ',
          callname,
          '，刚刚我真的第一个冲过去了吗？',
        ]);
      }

      era.printButton(
        '「当然了！而且不但我看见了，来看你的大家也看到了哦！」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' 顺着 ',
        you.get_colored_name(),
        ' 所指的方向看去，遵照着各自的约定，商店街的各位再次拉起了应援的条幅。',
      ]);
      await era.printAndWait([
        '「乌拉拉，第一名恭喜」，明明尚未到来，坚信 ',
        urara.get_colored_name(),
        ' 会胜利的各位还是提早做出了这条横幅。',
      ]);
      await era.printAndWait([
        '伸手向一直支持着自己的人用力的挥手致意，',
        urara.get_colored_name(),
        ' 的笑容仿佛比以往更加闪耀了。',
      ]);
      await era.printAndWait([
        '尽管只是出道后的第一次胜利，但对 ',
        urara.get_colored_name(),
        ' 与支持着',
        urara.sex,
        '的大家来说这依旧是值得纪念的经历。',
      ]);
      await era.printAndWait([
        '目睹着眼前的一切，意识到事情终于走上正轨的 ',
        you.get_colored_name(),
        '，也终于可以闭上眼睛松口气了。',
      ]);
      await era.printAndWait([
        '回到选手通道内时，',
        urara.get_colored_name(),
        ' 依旧兴致勃勃的与 ',
        you.get_colored_name(),
        ' 讲着各种各样的「第一次」。',
      ]);

      era.printButton('「乌拉拉，站在最前面的『第一次』果然很棒吧？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！跑在最前面的时候，看到的景色意想不到的漂亮呢！',
      );
      await urara.say_and_wait(
        '领先的时候风真的很强哦！但是只要往前跑，风就仿佛会自己让开一样！',
      );
      await urara.say_and_wait(
        '还有……得到第一名果然很开心！大家的笑容也很开心！',
      );

      era.printButton('「那么再接再厉吧，为了下次的胜利。」', 1);
      await era.input();

      await urara.say_and_wait('嗯！我绝对要再拿到第一名的！');
      await urara.say_and_wait([
        callname,
        '！以后也这样一起，我们一定可以走得更远哦！',
      ]);
      await era.printAndWait([
        '牵起小担当伸出的邀请之手，',
        urara.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        '，现在才刚刚开始。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '就是这样，出道战辛苦了，我也稍微安心下来了。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '您觉得如何呢？那么准备好了吗，与乌拉拉一同的日子？',
      );
    };
    f.title = title;
    return f;
  })(),
  os_34: (() => {
    const title = '大家最喜欢的笑容？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '今天参加了某场活动中举办的热身赛的乌拉拉，又一次意料之外情理之中的输掉了。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '是很标准的展开呢，不过训练员',
        you.adult_sex_title,
        '（您）可就相当头疼了。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '怎么回事呢？回去的路上，有人大概会在思考出答案前一直心不在焉吧，不过……',
      );
      era.drawLine();
      await era.printAndWait([
        '不过正赛明明能跑赢，为什么活动赛还是会落在最后呢？',
        urara.get_colored_name(),
        ' 也不是会随便应付的',
        urara.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '或许也是大家太强导致的，但以 ',
        urara.get_colored_name(),
        ' 现在的情况应该不至于跑在最后还被甩开太多吧。',
      ]);
      await era.printAndWait(
        '除了集中度与正赛不同等心理因素之外，难道竞赛意识还是太低了？那么这样的话……',
      );
      await era.printAndWait([
        '少有的没有去观察身旁担当的表情，',
        you.get_colored_name(),
        ' 将视线与思绪投向了更远的人潮。',
      ]);
      await era.printAndWait([
        '无论跑输几次，',
        urara.get_colored_name(),
        ' 都能保持乐观。这不一定是全是积极的，相反可能还另有隐患。',
      ]);
      await urara.say_and_wait('只要一直加油的话，下次总会赢回来的！');
      await era.printAndWait([
        '关于今天的比赛，',
        urara.sex,
        '是这样对 ',
        you.get_colored_name(),
        ' 说的，而早先从',
        urara.sex,
        '的朋友那里得知，',
        urara.sex,
        '以前每次输了都是如此。',
      ]);
      await era.printAndWait([
        '下次一定会赢，到底是为了安慰谁的话呢？这个思考并不是在用自己的偏见去揣测 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '对比赛有着更标准的预期的 ',
        you.get_colored_name(),
        ' 心情的确稳定，可说着下次会赢的 ',
        urara.get_colored_name(),
        ' 真同表面一样开心吗？',
      ]);
      await era.printAndWait([
        '牵着 ',
        urara.get_colored_name(),
        ' 的小手走在来往的人流中，',
        you.get_colored_name(),
        ' 思考着或许有一天会不得不去面对的问题。',
      ]);
      await era.printAndWait([
        '虽然希望 ',
        urara.get_colored_name(),
        ' 能够一直积极开朗又努力的赢下去，但要怎样才能继续加快与',
        urara.sex,
        '的互相了解呢？',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '我不会跑丢的哦？平常不也是这么拉着手的吗？',
          callname,
          ' 不用拉那么紧的！',
        ]);
        await era.printAndWait([
          '紧贴在 ',
          you.get_colored_name(),
          ' 身边，',
          urara.get_colored_name(),
          ' 笑着轻轻回握了 ',
          you.get_colored_name(),
          ' 的手指。',
        ]);
        await urara.say_and_wait([
          '还有呢，我觉得笑起来更适合 ',
          callname,
          '，所以不要皱着眉头想事情哦！',
        ]);
        await era.printAndWait([
          '在担当的笑容中，',
          you.get_colored_name(),
          ' 舒缓了眉间与手指，对 ',
          urara.get_colored_name(),
          ' 也回以歉意的笑容。',
        ]);
        await era.printAndWait([
          '说得对啊，这还真是疏忽了。光考虑自己要负责的事，差点忘记更重要的',
          urara.sex,
          '本人还在身边。',
        ]);
        await era.printAndWait(
          '不过是什么时候开始的来着，只要独处漫步，二人就会随时随地把手开心地牵在一起。',
        );
      } else {
        await urara.say_and_wait([
          callname,
          '？太用力了哦？就算是乌拉拉手也会不舒服的！',
        ]);
        await era.printAndWait([
          '扯了扯被 ',
          you.get_colored_name(),
          ' 牵住的手，',
          urara.get_colored_name(),
          ' 的笑容中似乎有点勉强。',
        ]);
        await urara.say_and_wait(
          '路上的人很多哦？如果不注意的话会有危险的，一起开开心心的回家比较好哦？',
        );
        await era.printAndWait([
          '在担当看似抱怨的善意提醒中，回过神来的 ',
          you.get_colored_name(),
          ' 干劲放松了自己的身体。',
        ]);
        await era.printAndWait([
          '不过是什么时候开始的来着，虽然心情时常变化，但 ',
          urara.get_colored_name(),
          ' 总会自然的拉起 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
        await era.printAndWait([
          '现在的',
          urara.sex,
          '究竟对 ',
          you.get_colored_name(),
          ' 抱有的什么感情呢？还是说',
          urara.sex,
          '其实还没有完全的异性认识……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '在大多数人眼里，或许这不过是监护人带小孩子的行为，但对 ',
        you.get_colored_name(),
        ' 来说却有另外的含义。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 被 ',
        urara.get_colored_name(),
        ' 打动、吸引，因而成为了',
        urara.sex,
        '的训练员，但如今每次与',
        urara.sex,
        '接触都像是在削减 ',
        you.get_colored_name(),
        ' 的理智。',
      ]);
      await era.printAndWait([
        '同',
        urara.sex,
        '自然的亲热，自然的拥抱，但也自然的对',
        urara.sex,
        '天真年幼的肉体逐渐产生了「兴趣」。',
      ]);
      await era.printAndWait(
        '总感觉再这样下去，自己成年人的人生就要完蛋了。难道该不会真的——',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '但就在训练员',
        you.adult_sex_title,
        '（您）即将陷入另一种怀疑时，却听见了擦肩而过的议论声。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '那是两位年轻学生模样的路人，对 ',
        urara.get_colored_name(),
        ' 的议论。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '路人A「那边的',
        urara.child_sex_title,
        '，是刚才在比赛中垫底的那位吗？」',
      ]);
      await era.printAndWait([
        '路人B「记得是叫春乌拉拉吧？反正只是活动赛而已，随便跑跑也无所谓吧。」',
      ]);
      await era.printAndWait([
        '路人A「才不是，',
        urara.sex,
        '根本跑不赢，在出道前就一直连败，也不知道',
        urara.sex,
        '是怎么出道的。」',
      ]);
      await era.printAndWait([
        '路人B「真厉害啊，',
        urara.sex,
        '是怎么进中央特雷森的？」',
      ]);
      await era.printAndWait([
        '路人A「大概是',
        urara.sex,
        '的训练员做了什么吧，看那副亲密的样子，多半又是特雷森的传说……」',
      ]);
      await era.printAndWait(
        '路人B「竟然是这样，看来那个训练员是挑了一个好下手的……」',
      );
      await era.printAndWait([
        '即使心里清楚这些皆为无意义的闲言碎语，',
        you.get_colored_name(),
        ' 依旧在路人持续的妄议中逐渐变得有些焦躁。',
      ]);
      await era.printAndWait([
        '自己被怎么评价都无所谓，可',
        urara.get_colored_name(),
        '就算很弱，也不应被人这么说闲话。',
      ]);
      await era.printAndWait([
        '但正当 ',
        you.get_colored_name(),
        ' 打算带 ',
        urara.get_colored_name(),
        ' 远离是非之地时，小',
        urara.uma_sex_title,
        '却在仰头看到 ',
        you.get_colored_name(),
        ' 没藏好的表情后，主动放开了手。',
      ]);

      era.printButton('「等……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 的行动还是慢了一步，在 ',
        you.get_colored_name(),
        ' 反应过来时，',
        urara.get_colored_name(),
        ' 就已经站在了正在说',
        urara.sex,
        '闲话的人们面前。',
      ]);
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 跟上去时，',
        urara.get_colored_name(),
        ' 正凑在那两名被',
        urara.sex,
        '吓得畏缩的路人面前，好在脸上是挂着友善的笑容。',
      ]);
      await urara.say_and_wait(
        '你们好像在讨论乌拉拉呢！你们也看了刚刚的比赛吗？',
      );
      await era.printAndWait('路人A「呃，这个，我们……」');
      await era.printAndWait([
        '小',
        urara.uma_sex_title,
        '摇了摇耳朵，清澈的樱瞳中映着两位路人不知所措的表情。',
      ]);
      await era.printAndWait([
        '面对刚才还在说自己闲话的两人，',
        urara.get_colored_name(),
        ' 的表情依旧和往常一样的春意盎然。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～没错哦！我的确并不是厉害的',
        urara.uma_sex_title,
        '，跑得不怎么快，还几乎每次都会输！',
      ]);
      await urara.say_and_wait(
        '但是，只要能听到大家的声音，我就依旧可以充满力量哦！',
      );
      await era.printAndWait('路人B「这、这样的事，真的能……」');
      await urara.say_and_wait(
        '没错！我坚信着哦！因为有着最喜欢奔跑与鼓励我的大家，所以我下次一定会赢的！',
      );
      await era.printAndWait([
        '面对几乎哑口无言的两人，',
        urara.get_colored_name(),
        ' 依旧摇着尾巴，透亮的声音中没有一丁点负面的杂质。',
      ]);
      await urara.say_and_wait(
        '所以如果不介意的话，下次可以还来看我的比赛吗？',
      );
      await era.printAndWait('路人A&B「……好，我们、我们会来的，大概……」');
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '听到两人结结巴巴的承诺后，',
          urara.get_colored_name(),
          ' 先是开心地点点头，随后严肃的话语就在突然间顶掉了热情的友善。',
        ]);
        await urara.say_and_wait(
          '还有哦，训练员是一直在帮助乌拉拉的人，以后不要说再训练员的坏话了哦……？',
        );
        await era.printAndWait('路人A&B「……！」');
        await era.printAndWait([
          '观察到两个可怜人从羞愧、治愈再到惊吓的表情变化后，小',
          urara.uma_sex_title,
          '又重新挂起可爱的笑脸。',
        ]);
        await urara.say_and_wait([
          '诶嘿嘿～但我不是在生气哦！只是一想到训练员总被那样看待，就有些激动而已！',
        ]);
        await era.printAndWait('路人A&B「哦……哦！」');
      }
      era.println();
      await urara.say_and_wait(
        '嗯！就是这样呢！谢谢你们愿意听我说话！那我回去了！路上要注意安全哦！',
      );
      await era.printAndWait([
        '对两位被震得说不出半个字的路人挥手告别，',
        urara.get_colored_name(),
        ' 重新跑回了 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);
      await era.printAndWait([
        '而向',
        urara.sex,
        '刚才站的位置看去，与 ',
        urara.get_colored_name(),
        ' 交流过的两个年轻人，此时脸上正挂着恍惚的神情，静静地呆立在原地。',
      ]);
      await era.printAndWait(
        '在互相对视了良久后，终于缓过神来的两人又维持着结结巴巴的语气，背身离开了。',
      );
      await era.printAndWait([
        '路人A「……我来替那孩子加油好了。总觉得',
        urara.sex,
        '好像很努力……」',
      ]);
      await era.printAndWait('路人B「那、那我也……那孩子甚至还在关心我……」');
      await era.printAndWait('路人A「你说什么呢，那明明是对我说的……」');
      await era.printAndWait('路人B「不对，明明就是对我……」');
      await era.printAndWait('……现在的年轻人都是这样的吗？');
      await era.printAndWait([
        '注视着那变得奇怪的二人离开的背影，',
        you.get_colored_name(),
        ' 无奈地摇了摇头，随后将注意力放回了 ',
        urara.get_colored_name(),
        ' 身上。',
      ]);

      era.printButton('「乌拉拉，没事吧？」', 1);
      await era.input();

      await urara.say_and_wait([callname, ' 在担心我吗？乌拉拉没问题哦！']);

      era.printButton('「但是，万一乌拉拉因他人的言语受伤就太难受了。」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯！所以不管发生了怎样的事，乌拉拉都真的想要感谢 ',
        callname,
        ' 哦！',
      ]);
      await era.printAndWait([
        '面对来自 ',
        you.get_colored_name(),
        ' 的关心，小',
        urara.uma_sex_title,
        '也再次向 ',
        you.get_colored_name(),
        ' 表达出了纯粹的谢意。',
      ]);
      await era.printAndWait([
        '独享着 ',
        urara.get_colored_name(),
        ' 令人安心的笑容，又回想着刚才两人的样子，',
        you.get_colored_name(),
        ' 似乎突然明白了什么。',
      ]);

      if (era.get('cflag:38:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '等下，刚才那两人与 ',
          urara.get_colored_name(),
          ' 结束对话后的样子，是不是从哪里见过？',
        ]);
        await era.printAndWait([
          '在被卡莲进行可爱传教后，刚刚被卡莲的可爱所俘获的人，好像也是那副样子？',
        ]);
      }
      era.println();
      await era.printAndWait('……原来如此，还真是那样。');
      await era.printAndWait([
        '对赛',
        urara.uma_sex_title,
        '来说，粉丝的支持相当重要，而 ',
        urara.get_colored_name(),
        ' 则具有着少见的能让人愿意支援',
        urara.sex,
        '的特质，甚至连 ',
        you.get_colored_name(),
        ' 也在其中。',
      ]);
      await era.printAndWait([
        '也就是说，',
        urara.sex,
        '是在无意识的活用自己的武器吗？',
        urara.get_colored_name(),
        ' 该不会也是个不得了的魅魔吧？',
      ]);
      await era.printAndWait([
        '不过虽然心情有点复杂，但 ',
        you.get_colored_name(),
        ' 也知道就算没有那种特质，也很少有人能拒绝这样善良的好孩子。',
      ]);
      await era.printAndWait(
        '话虽如此，以现在两人互相了解的程度来说，最开始思考的问题现在还是得不出答案。',
      );
      await era.printAndWait([
        '果然还是不能心急，目前的首要任务依旧是先让',
        urara.sex,
        '能够稳定地在比赛中获胜为主。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 这样想着，重新接过 ',
        urara.get_colored_name(),
        ' 伸来的小手，两人拉长的影子在阳光下再次叠在了一起。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '虽然没闹出问题，但意外的令人不快啊，路人的各位。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '还有很抱歉的，现在要再耽误一下您的时间了。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '虽然这次的问题很轻松，但以后遇见乌拉拉没办法解决的困难，您会怎么做呢？',
      );
      era.printButton('「担当的身心健康也在训练员的职责内啊。」（好感+20）', 1);
      era.printButton(
        `「不会临阵脱逃的，我会去保护${urara.sex}。」（爱慕+5）`,
        2,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait([
        '不管出于何种理由，都会珍惜『',
        urara.get_colored_actual_name(),
        '』吗？原来如此，『我』所信任的您……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '我明白了，对内我不会与您有所抱怨，所以对外的话，请您继续照顾好',
        urara.sex,
        '。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '也由衷的希望，未来不会有乌拉拉变得裹足不前的那一天。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47: (() => {
    const title = '意外的年末相谈！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30
     * @param {PrintedSpan} call_61
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      call_61,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '今天的乌拉拉早早地来到了空无一人的训练室，独自一人的',
        urara.sex,
        '是有什么心事吗？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '至于',
        urara.sex,
        '想要向训练员',
        you.adult_sex_title,
        '（您）咨询什么，就请亲自去聆听吧。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '独自走在节后的街道上，',
        you.get_colored_name(),
        ' 偶尔停下来揉揉发酸的指节，一路跌跌撞撞地回到了特雷森。',
      ]);
      await era.printAndWait(
        '被残留的节日氛围与依旧热情的商店街邻里裹挟着，拿到手的东西又一次严重超额了。',
      );
      await era.printAndWait([
        '如果有 ',
        urara.get_colored_name(),
        ' 在就好了。就算负重会只多不少，但至少回来的时候心情上也会好些吧。',
      ]);
      await era.printAndWait([
        '无奈地搓着僵硬的手，',
        you.get_colored_name(),
        ' 推开了训练员室的门，但想象中无人的清冷却并没有到来。',
      ]);
      await era.printAndWait(
        '先来的人已经打开了室内的暖炉与照明，前几天还没来得及收起的圣诞装饰也在闪闪发光。',
      );
      await era.printAndWait(
        '穿着毛茸茸的冬衣，粉色的小动物正在暖光的包围下欢快地收拾着屋子。',
      );
      await era.printAndWait([
        '而看见推门而入的 ',
        you.get_colored_name(),
        '，等候多时的小',
        urara.uma_sex_title,
        '从沙发上俏皮的坐起，对',
        urara.sex,
        '的训练员眨着樱粉色的眼睛。',
      ]);
      await urara.say_and_wait([
        callname,
        ' 原来去商店街了啊！快进来吧，外面还很冷的！',
      ]);
      await era.printAndWait(
        '意想不到的惊喜。上一秒还挂念着自己的担当，下一秒就真出现了。',
      );

      era.printButton('「哦……哦！」', 1);
      await era.input();

      await era.printAndWait([
        '回应着跑过来帮忙收拾东西的小',
        urara.uma_sex_title,
        '，',
        you.get_colored_name(),
        ' 似乎察觉了有哪里不对。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 会来收拾训练室并不意外，但另一方面比起耐心等人',
        urara.sex,
        '也更喜欢主动出击一些。',
      ]);
      await era.printAndWait([
        '而从进屋前就摆在桌上的饮料与堆成小山的饼干也不难看出，这次的小',
        urara.uma_sex_title,
        '的确是在专门等 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '难道',
        urara.sex,
        '也想和 ',
        you.get_colored_name(),
        ' 过圣诞节？可是 ',
        urara.get_colored_name(),
        ' 想的话肯定节日当天就找过来了，这是准备什么？',
      ]);
      await urara.say_and_wait([
        callname,
        '，在发什么呆呢！屋子已经收拾好了，快点坐下吧！',
      ]);
      await era.printAndWait([
        '打断了 ',
        you.get_colored_name(),
        ' 的思考，小',
        urara.uma_sex_title,
        '把发呆的客人按在椅子上，将桌上的那盘饼干小山推到 ',
        you.get_colored_name(),
        ' 面前。',
      ]);
      await era.printAndWait([
        '眼前这些造型奇特的曲奇，虽然仅保留着基础的辨识度，但却散发着节日促销品不会有的自然香气。',
      ]);

      era.printButton('「嗯……这个是？」', 1);
      await era.input();

      await urara.say_and_wait([
        '这是小兔子！这是小猫咪！这是胡萝卜！这是……',
        call_61,
        ' 和 ',
        call_30,
        '？算了，不重要呢！',
      ]);
      await era.printAndWait([
        '面对 ',
        you.get_colored_name(),
        ' 一语双关的发问，',
        urara.get_colored_name(),
        ' 想了想后，决定先回答那个比较具象的问题。',
      ]);
      await era.printAndWait([
        '好像还混进了不得了的东西，不过倒也正如 ',
        urara.get_colored_name(),
        ' 所说，这不是重点。',
      ]);
      await era.printAndWait([
        '在担当的樱瞳期待的注视下，',
        you.get_colored_name(),
        ' 挑起盘中的一块成色比较好曲奇放进了嘴中。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～这些都是我做的哦！大家的份我都已经送出去了，所以这些都是 ',
        callname,
        ' 的！',
      ]);
      await urara.say_and_wait([
        callname,
        '，乌拉拉做的饼干好吃吗？有什么感想吗？',
      ]);
      await era.printAndWait([
        '随着带有奶香的甜味在味蕾上逐渐涂抹均匀，不由自主地，',
        you.get_colored_name(),
        ' 将手伸向了盘中的下一块。',
      ]);
      await era.printAndWait([
        '这个相当好吃。哪怕造型难以辨认，作为饼干本身也绝对不输 ',
        you.get_colored_name(),
        ' 最近尝过的任何一种手工礼品。',
      ]);
      await era.printAndWait([
        '唯一的问题，恐怕只有 ',
        urara.get_colored_name(),
        ' 不输于商店街的各位的热情吧——这做得也太多了。',
      ]);
      await era.printAndWait([
        '将第二块饼干轻轻咽下，',
        you.get_colored_name(),
        ' 对认真等待着的小',
        urara.uma_sex_title,
        '半开玩笑地给出了自己的最高评价。',
      ]);

      era.printButton(
        '「能做出这个味道，乌拉拉以后一定能成为一位好妻子吧。」',
        1,
      );
      await era.input();

      if (high_relation) {
        await urara.say_and_wait(
          '诶？啊、诶？嗯！乌拉拉以后会成为一个好妻子的！',
        );
        await urara.say_and_wait([
          '所以 ',
          callname,
          ' 以后也会成为一个好丈夫的！诶嘿嘿～嘿嘿……呜……',
        ]);
        await era.printAndWait([
          '因害羞折起耳朵，随着逐渐走低的尾音，',
          urara.get_colored_name(),
          ' 本就娇小的身体肉眼可见的又缩了一圈。',
        ]);
        await urara.say_and_wait(
          '就算我不太懂，但妈妈说过，开这样的玩笑，要考虑到对方会认真的可能性哦……？',
        );
        await era.printAndWait([
          '从饼干小山后探出半张紧张又通红的小脸，',
          urara.get_colored_name(),
          ' 三分无措七分羞涩的说道。',
        ]);
        await era.printAndWait('……真的是不明白吗？');
      } else {
        await urara.say_and_wait(['诶？', callname, '！这样的说法可不行哦！']);
        await urara.say_and_wait(
          '虽然不太明白，但是妈妈告诉过我，这样的玩笑不可以随便开！',
        );
        await era.printAndWait([
          '尽管嘴上说着不明白，可 ',
          urara.get_colored_name(),
          ' 的身体却很诚实的将羞红的脸藏在了曲奇山的背面。',
        ]);
        await urara.say_and_wait([
          callname,
          ' 该不会对很多人说过这样的话吧？不可以哦！大家当真了就不好了!',
        ]);
        await era.printAndWait([
          '仿佛在责备不检点的大人，从遮挡后探出的一对粉色耳套正慌乱地对 ',
          you.get_colored_name(),
          ' 指指点点着。',
        ]);
        await era.printAndWait('……这不是很懂吗？');
      }
      era.println();
      await era.printAndWait([
        '不过等下，刚才是不是说错话了……不对！这是在对 ',
        urara.get_colored_name(),
        ' 说什么呢？！',
      ]);
      await era.printAndWait([
        '收到了担当意料之外的冲击性回复，',
        you.get_colored_name(),
        ' 在产生了一丝奇妙的欣喜的同时，也稍微被自己的发言恶心到了。',
      ]);
      await era.printAndWait([
        '今天的 ',
        urara.get_colored_name(),
        ' 本来就够奇怪了，自己竟然还在开这么直球的奇怪玩笑，这不是把话聊死了吗？',
      ]);
      await era.printAndWait([
        '然而就在 ',
        you.get_colored_name(),
        ' 为自己的轻率而发愁时，坐在桌对面的 ',
        urara.get_colored_name(),
        ' 却主动拿起了桌上的一块饼干。',
      ]);
      await urara.say_and_wait([
        '对了，',
        callname,
        '，是因为什么才成为的训练员呢？',
      ]);
      await era.printAndWait([
        '此刻 ',
        you.get_colored_name(),
        ' 有点想反问为何是这个话题，不过既然提问人是小 ',
        urara.get_colored_name(),
        '，那倒也没必要急着翻答案。',
      ]);
      await era.printAndWait([
        '就算现在遇见不清不楚的事，以后也总有机会明白其中的用意，跟 ',
        urara.get_colored_name(),
        ' 相处总会这样。',
      ]);

      era.printButton(
        '「不过我先确认一下，兴趣和热情，应该不是乌拉拉想听的吧？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '我不会怀疑 ',
        callname,
        ' 的心情的，但我想知道 ',
        callname,
        ' 想得到什么！',
      ]);
      await era.printAndWait([
        '不问梦想问欲望啊，',
        urara.get_colored_name(),
        ' 原来是这么锐利的人吗？现在的小',
        urara.uma_sex_title,
        '真是不容小觑。',
      ]);
      await era.printAndWait([
        '要跟成长时节的青春',
        urara.teen_sex_title,
        '讲大人充斥着世俗欲望的故事啊，嗯……',
      ]);
      await era.printAndWait([
        '简单整理了思路，像叹息般深吸一口气，',
        you.get_colored_name(),
        ' 在 ',
        urara.get_colored_name(),
        ' 清澈的注视下慢慢吐出了第一个字。',
      ]);

      era.drawLine({ content: '讲故事时间' });
      await era.printAndWait(
        '没什么特别的，回到最初，那个人想要的东西很单纯，稳定的工作、工资，或者说钱？',
      );
      await era.printAndWait([
        you.sex,
        '只是在后来选择的时候，走了专攻的方向里，那个最稳定又多金的职业罢了。',
      ]);
      await era.printAndWait(
        '至少在当时，或者现在也有？这个职业在大众认知中是十分优秀的，而那个人恰好有些天赋。',
      );
      await urara.say_and_wait('是这样啊，是因为家里缺钱吗？');
      await era.printAndWait(
        '没有哦，那个人出身并不贫寒，也没有生活所迫和巨大外部压力，只不过……',
      );
      await era.printAndWait(
        '不过是曾经几度路过琳琅满目的橱窗，却没机会买下哪怕一件自己想要的东西，仅此而已。',
      );
      await era.printAndWait([
        '所以，嗯……说到底只是缺乏安全感和满足感吧，',
        you.sex,
        '或许，是想借此驱散缠绕自过去的不安罢了。',
      ]);
      await urara.say_and_wait('可是那个人最后也实现愿望了呦？');
      await era.printAndWait([
        '但是那个人很缺乏志气嘛。',
        you.sex,
        '为了走到现在这一步费了很大功夫，中途好几次都差点放弃。',
      ]);
      await era.printAndWait([
        '是三女神的眷顾？又或者',
        you.sex,
        '胆小到不敢放弃自己？',
      ]);
      await era.printAndWait(
        '结果呢，一路上跌跌撞撞的那个人还是凭此进入了中央，有惊无险过头了啊。',
      );
      await urara.say_and_wait('那……那个人现在的想法呢？');
      await era.printAndWait(
        '这个职业很好哦？包吃包住，福利待遇社会地位都不错，虽然薪资入账有点奇怪，但也满足了。',
      );
      await urara.say_and_wait('嗯嗯！也就是说，那个人也拿到一着了对吧！');
      await era.printAndWait([
        '以前的话，或许会说没有吧。不过现在，',
        you.sex,
        '大概马上就能找到了自己想要的一着了——',
      ]);
      era.drawLine();

      await you.say_and_wait(
        '而且这还多亏了那个人现在有了一位特别的担当啊。',
        true,
      );
      await era.printAndWait([
        '没能将结语说出口，',
        you.get_colored_name(),
        ' 苦笑着结束了对过往的叙述。抬起头来，预想中的嫌弃、怜悯、不解……',
      ]);
      await era.printAndWait([
        '通通没有出现。',
        urara.get_colored_name(),
        ' 没有流露出任何平日里的倾向，',
        urara.sex,
        '只是在很认真的听着 ',
        you.get_colored_name(),
        ' 的故事。',
      ]);
      await era.printAndWait([
        '但这下可衰了，就算看不出表情，',
        urara.sex,
        '也一定在思考自己的训练员竟是如此婆妈油腻的大人吧……',
      ]);
      await urara.say_and_wait([
        '嗯！乌拉拉知道了！',
        callname,
        ' 很清爽呢！就像占领地球只为看风景的反派boss那样！',
      ]);
      await you.say_and_wait(
        '……啊？清爽？！反派boss又什么啊？乌拉拉，你的训练员虽然不是很懂，但是也不是很明白哦——',
        true,
      );
      await era.printAndWait([
        '可惜的是，没能给进行着反复愣住的 ',
        you.get_colored_name(),
        ' 以直接解答，',
        urara.get_colored_name(),
        ' 只是在开心地笑着。',
      ]);
      await era.printAndWait([
        '并没有对因过往变得抽象的大人表露出嫌弃、怜悯与不解，只是纯粹的、因重要的某人而开心的笑容。',
      ]);
      await urara.say_and_wait([
        '哼哼～',
        callname,
        ' 通过了解『乌拉拉』帮助了我，今天乌拉拉也更多了解了『',
        callname,
        '』！',
      ]);
      await urara.say_and_wait([
        '这样乌拉拉也知道了，一些很难懂的事情，要怎样讲 ',
        callname,
        ' 听才能明白呢！',
      ]);
      await era.printAndWait([
        '看着小马娘高兴的笑容，',
        you.get_colored_name(),
        ' 终于明白了。什么嘛，胡思乱想的大人可真是笨蛋。',
      ]);

      era.printButton(
        '「乌拉拉，下次还想要知道什么的话，就直接问吧，你的训练员不会藏着掖着的。」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '但是这样的奔跑步调很棒哦！就像 ',
        call_30,
        ' 的故事书一样！',
      ]);
      await era.printAndWait([
        '这孩子莫非真的是天使？斟酌着小担当似乎的带着深意的话语，',
        you.get_colored_name(),
        ' 将手伸向了盘中的下一块饼干。',
      ]);
      await era.printAndWait([
        '与 ',
        you.get_colored_name(),
        ' 一同顿了顿，',
        urara.get_colored_name(),
        ' 像是终于鼓起了勇气般再次抬头看向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '，最近我梦到了一位虽然很像乌拉拉，但却很孤单的',
        urara.uma_sex_title,
        '。',
      ]);
      await urara.say_and_wait([
        '梦里的',
        urara.sex,
        '并没有在奔跑，离大家也都有一段距离，所以乌拉拉想要去邀请',
        urara.sex,
        '。',
      ]);
      await urara.say_and_wait([
        '但是，',
        urara.sex,
        '的笑容真的很悲伤，一次又一次的远离着我，最后彻底消失不见了。',
      ]);
      await urara.say_and_wait([
        '明明相貌都是相同的，乌拉拉难受的话可以哭出来，',
        urara.sex,
        '却只会那样一言不发的笑。',
      ]);
      await era.printAndWait([
        '低头看着自己的双手，虽然笑容还勉强留在脸上，',
        urara.get_colored_name(),
        ' 的耳朵却已经失落地垂了下来。',
      ]);
      await urara.say_and_wait([
        '我无论如何都不想让',
        urara.sex,
        '继续孤零零的，但是',
        urara.sex,
        '好像只觉得那样就好了……',
      ]);
      await urara.say_and_wait([
        '在觉得很无力的时候……',
        callname,
        ' 会怎么做呢？',
      ]);

      await inner_urara.say_as_unknown_and_wait([
        '……真是突然又关键的咨询，那训练员',
        you.adult_sex_title,
        '（您）的意见是？',
      ]);
      era.printButton(
        '「我想想……不管有多难，向着自己希望的方向前进吧。」（草地适性提升）',
        1,
      );
      era.printButton(
        '「嗯……学会享受当下的困境，其实也是一种幸福哦？」（中&长距离适性提升）',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          '可是这样做，要是',
          urara.sex,
          '变得更加伤心的话……',
        ]);
        await you.say_and_wait(
          '或许乌拉拉现在还不能认同，但在某处或多或少的与人发生争执是没法避免的哦？',
        );
        await you.say_and_wait([
          '而且乌拉拉不是还没向那位',
          urara.uma_sex_title,
          '传达出自己的心声吗？既然还没开始，也用不着害怕。',
        ]);
        await era.printAndWait([
          '就和 ',
          urara.get_colored_name(),
          ' 的日常一样，整理好心情，接下来大胆的去前进就好。',
        ]);
        await era.printAndWait([
          '从盘中挑出一块似乎在微笑的「',
          call_61,
          '」的饼干，',
          you.get_colored_name(),
          ' 笑着将其塞进了 ',
          urara.get_colored_name(),
          ' 的小嘴中。',
        ]);
        await era.printAndWait([
          '慢慢地将 ',
          you.get_colored_name(),
          ' 的话语同饼干一起咀嚼，想起了什么的 ',
          urara.get_colored_name(),
          ' 眼神也渐明快起来——',
        ]);
      } else {
        await urara.say_and_wait('当下的困境……？');
        await you.say_and_wait(
          '乌拉拉第一次在交朋友上受挫了，但是解开困境之后，回过头来除成长外也会感到开心吧。',
        );
        await you.say_and_wait(
          '而且乌拉拉绝对不想就这么放弃吧？乌拉拉的目标是希望大家变得开心不是吗？',
        );
        await era.printAndWait([
          '就像 ',
          urara.get_colored_name(),
          ' 前进的步调，只要咬紧牙关，烦恼也能让人会心一笑。',
        ]);
        await era.printAndWait([
          '从盘中挑出一块脸颊似乎鼓鼓的「',
          call_30,
          '」的饼干，',
          you.get_colored_name(),
          ' 笑着将其放在了 ',
          urara.get_colored_name(),
          ' 的手心里。',
        ]);
        await era.printAndWait([
          '若有所思的看着手心里的饼干，',
          urara.get_colored_name(),
          ' 像是明白了什么般笑着将其放进了嘴中——',
        ]);
      }
      era.println();
      await era.printAndWait([
        '看来，小',
        urara.uma_sex_title,
        '已经在心中想好答案了。满意对 ',
        urara.get_colored_name(),
        ' 点点头，',
        you.get_colored_name(),
        ' 将目光重新放回了桌面。',
      ]);
      await era.printAndWait(
        '随着时间的推进，就连中间那座心灵隔阂般的点心山，也在两人的互相倾诉中不知不觉消失了。',
      );
      await era.printAndWait([
        '但正因如此，现在的时间也不早了，与 ',
        you.get_colored_name(),
        ' 同时意识到这点的 ',
        urara.get_colored_name(),
        ' 也向 ',
        you.get_colored_name(),
        ' 肩后的挂钟投去了视线。',
      ]);
      await urara.say_and_wait([callname, '，接下来……啊！已经这个时间了！']);
      await era.printAndWait([
        '撇了眼表，嗯，已经到「宿舍门禁赏」的时间了。看到 ',
        you.get_colored_name(),
        ' 伸直腰板，',
        urara.get_colored_name(),
        ' 也心领神会的站了起来。',
      ]);
      await era.printAndWait([
        '但就在准备离开训练员室后跑起来之前，',
        urara.get_colored_name(),
        ' 有些恋恋不舍的插入了分开前的最后一个问题。',
      ]);
      await urara.say_and_wait([
        '对了！',
        callname,
        '，接下来就是新年了！我们也可以像今晚这样吗？',
      ]);
      await urara.say_and_wait([
        '我还会准备很多点心的！所以那个时候，',
        callname,
        ' 还有时间和我也一起玩吗？',
      ]);

      era.printButton('「只要乌拉拉想的话，那就是随时都可以啊！」', 1);
      await era.input();

      await era.printAndWait([
        '在两人一起热闹的冲进冷风前，',
        you.get_colored_name(),
        ' 满足地向 ',
        urara.get_colored_name(),
        ' 笑着回应道。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '但是如果下次，乌拉拉准备的点心能更适量一些，就更完美了吧……',
      );
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '能够更加了解您，今天的乌拉拉很满足呢，也再次感谢您的耐心。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但既然乌拉拉已经安心了，那接下来我还想请您保持解答我的一个问题。',
      );

      await inner_urara.say_as_unknown_and_wait(
        '所以，上面那些钱什么的发言，是您的真心话，或者说是您的真话吗？',
      );
      era.printButton(
        '「是真的——这么说的话，庸俗还是会惹人生气啊。」（好感+20）',
        1,
      );
      era.printButton(
        '「至少我选择了，没有变成自己最讨厌的……大人？」（爱慕+5）',
        2,
      );
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait(
        '是吗？那我们的关系也到此为止了——开玩笑的，我不那么讨厌您。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '嗯，是『讨厌』。我讨厌大部分人类与',
        urara.uma_sex_title,
        '，只是没那么讨厌您罢了，至少您足够真诚。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '哈啊……您注意到了吧，现在的乌拉拉身上，正展现着不可思议的能力。',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.uma_sex_title,
        '身上的未解之谜多如繁星，或许也只有三女神能说清乌拉拉身上有怎么的加护。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '我不喜欢没有根据的奇迹，信任来历不明的希望也只会让人受伤。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '不是泼冷水，而是我曾经也……抱歉，并非想要隐瞒，只是天方夜谭要从哪讲起呢……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但是您的确正引导着担当的未来，所以，也请您尽量为自己的选择负起责任。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '而那位孤独的',
        urara.uma_sex_title,
        '……我想，乖僻的',
        urara.sex,
        '应该一个人也没关系吧。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……会习惯的，总会习惯的，一切的一切……',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {PrintedSpan} call_77 春乌拉拉对成田路的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      opera,
      you,
      callname,
      call_15,
      call_30,
      call_61,
      call_77,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        '与别人的相处我不做评价，不过在乌拉拉这里，您或许意外能做个幸福的人呢。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '哈？乌拉拉的妈妈……才不是哦，乌拉拉的『妈妈们』会生气的。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '抱歉，有点兴奋了，因为难得是新年——',
      );
      era.drawLine();
      await urara.print_and_wait([
        '提着装满点心的袋子，站在门口的 ',
        urara.get_colored_name(),
        ' 若有所思地摇着耳朵，思考着在见到 ',
        callname,
        ' 后要送上怎样的惊喜：',
      ]);
      await urara.print_and_wait([
        call_61,
        ' 说重要的感谢一定要正式，所以 ',
        urara.get_colored_name(),
        ' 想要趁着这个新年向 ',
        callname,
        ' 再次认真的表达心意。',
      ]);
      await urara.print_and_wait(
        '这次只做了适量的饼干，不过两个人到底够不够吃呢？而且同样的事情再重复一次还算是惊喜吗？',
      );
      await urara.print_and_wait([
        '不过上次也被夸奖了，所以只要 ',
        callname,
        ' 喜欢就好了吧！',
        call_30,
        ' 和 ',
        call_77,
        ' 也说是礼物心意更重要呢！',
      ]);
      await urara.print_and_wait([
        '没错！礼物准备好了，感谢词也记住了，没问题的！突袭 ',
        callname,
        ' 准备OK，乌拉拉GO！',
      ]);
      await urara.print_and_wait([
        '深吸一口气，在心中预演着「认真答谢」的流程，小',
        urara.uma_sex_title,
        '将手缓缓伸向了 ',
        callname,
        ' 住处的门铃……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '随后，发现一只小',
        urara.uma_sex_title,
        '站在门口却迟迟不动的 ',
        you.get_colored_name(),
        ' 率先一步打开了门，成功的突袭也将对方吓了一跳。',
      ]);
      await urara.say_and_wait([
        '诶？',
        callname,
        '……新年快乐！那个……还有！去年受 ',
        callname,
        ' 照顾了！接、接下来是……',
      ]);

      era.printButton(
        '「谢了！总之赶快进来吧！外面那么冷，不必为难自己也没关系哦？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '将被识破而不知所措的',
        urara.teen_sex_title,
        '请进温暖的室内，',
        you.get_colored_name(),
        ' 笑着用温热的手捂住了小',
        urara.uma_sex_title,
        '被冻得红红的小脸。',
      ]);
      await era.printAndWait([
        '随着冰凉的脸颊逐渐解冻，',
        urara.get_colored_name(),
        ' 脸上被冻僵的笑容也逐渐取回了平日里温暖明媚的弧度。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～不好意思哦 ',
        callname,
        '，剩下的果然没想起来……',
      ]);

      era.printButton(
        '「没关系的，谢意我已经收到了，而且『Simple is best』嘛。」',
        1,
      );
      await era.input();

      if (era.get('abl:52:英语') < 2) {
        await urara.say_and_wait('Sim……？嗯……这是什么意思来着？');
        await era.printAndWait([
          '至少 ',
          urara.get_colored_name(),
          ' 英语不好还在意料之内。无奈地抚摸着',
          urara.teen_sex_title,
          '的头发，',
          you.get_colored_name(),
          ' 接过了',
          urara.sex,
          '手中装满点心的袋子。',
        ]);
      }
      await era.printAndWait([
        '将充满趣味的手工饼干同新鲜的蜜柑一起摆在桌上，一旁的小烤炉也做好了摆上年糕的准备。',
      ]);
      await era.printAndWait([
        '用好奇的目光观察着 ',
        callname,
        ' 的住处，小',
        urara.uma_sex_title,
        '也在很快便温暖的氛围中褪去了初到的拘谨感。',
      ]);
      await era.printAndWait([
        '一起围在桌边吃着点心与水果，在一成不变的安心感中，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 断断续续的聊着各种各样的事。',
      ]);
      await era.printAndWait([
        '年末约好了新年也一起度过，所以直接将 ',
        urara.get_colored_name(),
        ' 约到了自己的住处，这还真是个不赖的决定。',
      ]);
      await era.printAndWait([
        '看着双眼闪闪发光的盯着鼓泡的年糕的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 仿佛又看到了一只可爱的小动物。',
      ]);

      era.printButton(
        '「乌拉拉，在新年里，你对将来的日子有什么……抱负吗？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '将一块烤好的年糕夹到 ',
        urara.get_colored_name(),
        ' 的碗中，',
        you.get_colored_name(),
        ' 慢慢地和用筷子戳着年糕的小 ',
        urara.get_colored_name(),
        ' 谈起了下一个话题。',
      ]);
      await urara.say_and_wait(
        '『抱』、『负』？那是什么来着……啊，难道是在说泡芙？',
      );
      await era.printAndWait([
        '嘴中咬着拉得好长的年糕，',
        urara.get_colored_name(),
        ' 歪着头反将问题丢了回来。',
      ]);

      era.printButton(
        '「……我知道了，想吃泡芙的话下次给会你买的，不过『抱负』说的是今年的目标哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '原来是目标啊！这样的话，就和以前说的一样哦？还是尽情跑步，再拿到很多第一！',
      );
      await urara.say_and_wait([
        '我会努力奔跑的！',
        callname,
        ' 会继续帮助乌拉拉的对吧！要让大家都开心起来哦！',
      ]);
      await era.printAndWait([
        '可这不是我们自契约以来一直在做的事吗？面对 ',
        urara.get_colored_name(),
        ' 可爱的笑容，',
        you.get_colored_name(),
        ' 有些无可奈何。',
      ]);
      await era.printAndWait([
        urara.sex,
        '的说法一如既往的不清不楚，该说',
        urara.sex,
        '依旧还很童真，还是虽说都有考虑却省略得太多呢？',
      ]);
      await era.printAndWait([
        '不过时间不会等人，既然担当说自己准备好了，那也该开始制定下一步的行动计划了。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '那么擅长解谜的训练员',
        you.adult_sex_title,
        '（您）觉得，近期最适合乌拉拉的活动是——',
      ]);
      era.printButton(
        '「说到这个，前段时间的年末考试成绩怎么样？有进步吗？」（根性+10）',
        1,
      );
      era.printButton(
        '「现在是新年啊，难得有机会闲下来，不如多休息一下吧？」（耐力+10）',
        2,
      );
      era.printButton(
        '「话说回来，乌拉拉最近休息时在看什么漫画或者动画呢？」（技能点数+20）',
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await urara.say_and_wait('诶诶诶诶诶～！？');
          await era.printAndWait(
            '新年时提学习，实际恶鬼的计谋！世界上最讨厌的大人也莫过于此！',
          );
          await era.printAndWait([
            '在 ',
            callname,
            ' 看似无心插柳的提问中，就连乐观常驻的 ',
            urara.get_colored_name(),
            ' 也陷入到了极大的动摇之中！',
          ]);
          await era.printAndWait([
            '当然 ',
            you.get_colored_name(),
            ' 早就知道 ',
            urara.get_colored_name(),
            ' 的学习状态，这样的提问不过是借机对「三分钟热度',
            urara.teen_sex_title,
            '」的小警示。',
          ]);
          if (era.get('abl:52:英语') < 2) {
            await era.printAndWait(
              '而且连那么简单的英语都不知道未免也太不妙了，身为教育者可没法置之不理。',
            );
          }

          era.printButton(
            '「别怕，不是要责备乌拉拉，总之努力克服一下吧，有干劲的话会有所改善的。」',
            1,
          );
          await era.input();

          await urara.say_and_wait(
            '呜……但是还是奔跑和比赛更有意思嘛！但是、但是……我知道了……',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            ' 啊，莫怪 ',
            callname,
            ' 卑鄙，并不是在打击担当，只是比起三分钟热度，持之以恒才能跑得更快哦？',
          ]);
          await era.printAndWait([
            '面对小',
            urara.uma_sex_title,
            '眼中两朵委屈的樱花与像仓鼠般因塞满了年糕而鼓起的小脸，',
            you.get_colored_name(),
            ' 掩饰着心虚别开了视线。',
          ]);
          await urara.say_and_wait([
            '怎么这样呢……我明明还想要在 ',
            callname,
            ' 家留宿的……',
          ]);
          await you.say_and_wait('不，所以说……嗯？！');
          break;
        case 2:
          await urara.say_and_wait('嗯？要多休息吗？但是我一直都睡得很好哦！');

          era.printButton(
            '「难得过新年，健健康康的结束才是最好的，有机会闲下来就不需要太心急。」',
            1,
          );
          await era.input();

          await era.printAndWait([
            '优秀的赛',
            urara.uma_sex_title,
            '最重要的就是健康嘛，如果休息都不积极，平日里练得再多在受伤时也用不上啊。',
          ]);
          await era.printAndWait([
            '而且以后的训练计划恐怕强度也会越来越高，保持健康是非常重要的，尤其是对 ',
            urara.get_colored_name(),
            ' 来说。',
          ]);
          await urara.say_and_wait([
            '那……既然 ',
            callname,
            ' 这样说了，我最近就要多打扰 ',
            callname,
            ' 了哦？',
          ]);
          await era.printAndWait([
            '虽然想说的是要 ',
            urara.get_colored_name(),
            ' 最近多睡一会儿，毕竟孩子长身体，但既然',
            urara.sex,
            '愿意来那 ',
            you.get_colored_name(),
            ' 也不是不欢迎。',
          ]);
          await urara.say_and_wait([
            '所以今天我也正好准备好在 ',
            callname,
            ' 家里留宿的准备了！',
          ]);
          await era.printAndWait([
            '那这样或许也不错……等下？',
            urara.sex,
            '后一句说的什么？',
          ]);
          break;
        case 3:
          await urara.say_and_wait([
            '嗯……最近在看 ',
            call_15,
            ' 推荐的动画哦！是赛车题材的！还有还有……',
          ]);
          await era.printAndWait([
            '在 ',
            urara.get_colored_name(),
            ' 兴奋的描述中拿出手机，',
            you.get_colored_name(),
            ' 很快就找到了这部赛车题材的科幻作品。',
          ]);
          await era.printAndWait(
            '车手与AI间的配合、是AI主导车手比赛还是AI全力支援车手的理念冲突、赌上全力的挚友对决……',
          );
          await era.printAndWait([
            '或许会有能用在训练中的灵感，就这个了！不过，没想到 ',
            opera.get_colored_name(),
            ' 会推荐这类型的动画啊。',
          ]);
          await urara.say_and_wait([
            '对了 ',
            callname,
            '，正好今天晚上我要留宿，所以晚上的时候一起看吧！',
          ]);

          era.printButton('「好！等吃完点心就一起看吧……不对，什么？」', 1);
          await era.input();
      }
      era.println();
      await urara.say_and_wait([
        '啊！我忘记和 ',
        callname,
        ' 说了！没关系哦，乌拉拉已经和大家说了，留宿申请也做好了！',
      ]);
      await era.printAndWait([
        '看着 ',
        you.get_colored_name(),
        ' 猛然回过神后惊讶的神情，小',
        urara.uma_sex_title,
        '以为 ',
        you.get_colored_name(),
        ' 在担心',
        urara.sex,
        '没做好准备，连忙向 ',
        you.get_colored_name(),
        ' 解释道。',
      ]);

      era.printButton(
        '「不，等下，我不是那个意思，我是说……那个，如果你的训练员是坏人呢？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？所以说 ',
        callname,
        ' 觉得自己是坏人吗？',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '其实 ',
          you.get_colored_name(),
          ' 想说 ',
          urara.get_colored_name(),
          ' 就算是',
          urara.uma_sex_title,
          '也要保护好自己，不要随便信任只认识了半年的成年人。',
        ]);
        await era.printAndWait(
          '这样的事在社会上有着很多实例，就算对方是朝夕相处的训练员也不能保证对其知根知底。',
        );
        await era.printAndWait([
          '但要说自己是不是坏人……抬头看着 ',
          urara.get_colored_name(),
          ' 的笑容，就算是也很难当着',
          urara.sex,
          '的面承认。',
        ]);
        await era.printAndWait([
          '可初次相遇时，有个人又分明要对当时还未曾相识的小',
          urara.uma_sex_title,
          '动手动脚……',
        ]);
      } else {
        await era.printAndWait([
          '虽然本意是想要 ',
          urara.get_colored_name(),
          ' 不要随便信任只认识了半年的成年人，但这话出自 ',
          you.get_colored_name(),
          ' 的口中似乎又不太合适。',
        ]);
        await era.printAndWait([
          '或许自己真是个坏人？总之在对 ',
          urara.get_colored_name(),
          ' 说出此等劝解时，',
          you.get_colored_name(),
          ' 对自己一直以来的言行也没法割席。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 虽然一直保持着行动上的亲密，但 ',
          you.get_colored_name(),
          ' 很清楚',
          urara.sex,
          '远没有脸上的笑容来的开心。',
        ]);
        await era.printAndWait([
          '可能直到现在，小',
          urara.uma_sex_title,
          '都只是在强忍着低落的心情，才能贴在',
          urara.sex,
          '的训练员身边也说不定。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '似乎是看出了 ',
        you.get_colored_name(),
        ' 陷入沉默的理由，',
        urara.get_colored_name(),
        ' 笑着放下了手中的碗筷，并拉着椅子并排坐到了 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);
      await urara.say_and_wait([
        '是坏人也没关系哦？因为我想要信任 ',
        callname,
        '！',
      ]);

      era.printButton('「这不是信任就能解决的问题啊……」', 1);
      await era.input();

      await urara.say_and_wait([
        '可是我不想只凭感情疏远 ',
        callname,
        '，就算 ',
        callname,
        ' 是坏人，乌拉拉也要靠在 ',
        callname,
        ' 身边！',
      ]);
      await urara.say_and_wait([
        '而且会帮助乌拉拉的 ',
        callname,
        ' 也不会多坏吧！所以就算是坏人，也一定能变好的！',
      ]);
      await urara.say_and_wait([
        '所以我和 ',
        callname,
        ' 一起！两人一定可以像二人三足……？那样继续下去的！',
      ]);
      await era.printAndWait([
        '现在的 ',
        urara.get_colored_name(),
        ' 就像特摄剧中的英雄一样在闪闪发光，又或许',
        urara.sex,
        '一直都是这样的形象也说不定。',
      ]);
      await era.printAndWait([
        '不过，二人三足？',
        urara.get_colored_name(),
        ' 竟然知道会知道这个词吗？谁教给',
        urara.sex,
        '的啊？',
      ]);
      if (
        era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数') ||
        era.get('love:52') >= 50
      ) {
        await urara.say_and_wait([
          '而且虽然只认识了半年，但 ',
          callname,
          ' 不是早就对乌拉拉做过很多很多事了吗？',
        ]);
        await urara.say_and_wait([
          '明明乌拉拉都没有害怕，',
          callname,
          ' 却开始打退堂鼓了呢！难道 ',
          callname,
          ' 很害羞？',
        ]);
        await era.printAndWait([
          '哈啊，这下可真是被 ',
          urara.get_colored_name(),
          ' 戳到痛处了。在这样的事实面前，',
          you.get_colored_name(),
          ' 也只得回以一时的苦笑。',
        ]);
      }
      era.println();
      era.printButton(
        '「嗯……但还有一种可能，如果你的训练员，其实是只想要吃掉乌拉拉的大灰狼呢？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '不只是出于想起了什么还是单纯的想要延续话题，换上了更认真的表情，',
        you.get_colored_name(),
        ' 继续问了下去。',
      ]);
      await urara.say_and_wait([
        '大灰狼真的很可怕哦！',
        callname,
        ' 真的会那样做吗？乌拉拉会是小红帽吗？',
      ]);
      await urara.say_and_wait([
        '诶嘿嘿～',
        callname,
        ' 说要吃掉乌拉拉，乌拉拉到底要不要期待呢？',
      ]);
      if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          '啊，不小心忘记了呢！大灰狼其实早就把小红帽吃掉了！',
        );
        await urara.say_and_wait([
          '那么大灰狼',
          you.adult_sex_title,
          '，乌拉拉到底好不好吃呢？',
        ]);
      }
      era.println();
      await era.printAndWait([
        '出乎意料的，明明就贴在 ',
        you.get_colored_name(),
        ' 身边，',
        urara.get_colored_name(),
        ' 竟然一边天真地笑着一边做出了挑衅般的反制。',
      ]);
      await era.printAndWait([
        '纯真地摆出全然不信的表情，',
        urara.get_colored_name(),
        ' 调皮地眨着眼睛，脸上尽是「小',
        urara.sex_code - 1 ? '姑娘' : '男孩',
        '的得意洋洋」。',
      ]);
      await era.printAndWait(
        '看来，虽然跟小孩子较劲不太好，但也得适当的找回自己的位置了。',
      );
      await era.printAndWait([
        '抱着恶作剧的心态站起来，不等 ',
        urara.get_colored_name(),
        ' 做出反应，',
        you.get_colored_name(),
        ' 就伸手将',
        urara.sex,
        '抱在了怀里。',
      ]);

      era.printButton(
        `「既然乌拉拉这么说，那训练员现在就尝尝${urara.sex}的味道吧。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(['咦、诶？', callname, '……？']);
      await era.printAndWait([
        '没有理会',
        urara.teen_sex_title,
        '迷茫的反应，',
        you.get_colored_name(),
        ' 用公主抱的方式将',
        urara.sex,
        '抱起，并将其轻巧的带进了某间摆着床铺的房间。',
      ]);
      await era.printAndWait([
        '将怀中意外轻得可以的 ',
        urara.get_colored_name(),
        '「顺手」扔到床上，',
        you.get_colored_name(),
        ' 反手「用力」甩上了卧室的房门。',
      ]);
      await era.printAndWait([
        '在身体被摔在床铺上的瞬间，',
        urara.teen_sex_title,
        '的神情从先前带着羞涩的疑惑转为了混杂着惊恐的绯红。',
      ]);
      await era.printAndWait([
        '似乎连挣扎都忘记了，面对图谋不轨，小',
        urara.uma_sex_title,
        '只是折起耳朵夹紧尾巴，在床上害怕的缩成一团。',
      ]);
      await urara.say_and_wait([
        callname,
        '？现在乌拉拉还不想睡哦？',
        callname,
        '……？呜啊～',
      ]);
      await era.printAndWait([
        '随后在',
        urara.teen_sex_title,
        '的娇声惊呼中，慌乱得束手无策的 ',
        urara.get_colored_name(),
        ' 被 ',
        you.get_colored_name(),
        ' 捉住双腕粗暴的按在了床上。',
      ]);
      await era.printAndWait([
        '压在平日里最亲近的大人身下，感受着自己逐渐被包裹的身体，',
        urara.teen_sex_title,
        '睁大的樱瞳中蓄满了泪水。',
      ]);
      era.println();
      if (
        era.get('talent:52:喜欢痛苦') ||
        era.get('exp:52:受虐高潮次数') >= 2
      ) {
        await urara.say_and_wait(
          '要被吃掉了，得快点反抗才行……但是，身体这次却还是没法听话的动起来……',
          true,
        );
        await urara.say_and_wait([
          '生气的 ',
          callname,
          ' 会对我做什么呢？会对乌拉拉做比以前还要残酷的事情吗？',
        ]);
        await urara.say_and_wait([
          '或许这次会被 ',
          callname,
          ' 关起来也说不定，或许下次再见到大家时，身体和精神都会坏掉也说不定；',
        ]);
        await urara.say_and_wait(
          '可是一想到这些，身体就会止不住的兴奋，或许我早就已经被弄坏掉了也说不定……',
        );
        await urara.say_and_wait('明明……能温柔点就好了……', true);
      } else if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          [
            callname,
            ' 要在这里做那样的事吗？',
            callname,
            ' 现在的样子好奇怪……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '可是明明现在不可以的，身体却软下来了，而且 ',
            callname,
            ' 在做这些时一直还算温柔，所以……',
          ],
          true,
        );
        await urara.say_and_wait(
          '乌拉拉会被粗暴对待吗？会很疼吗？会发生很可怕的事吗？',
          true,
        );
        await urara.say_and_wait(
          '但是为什么，一想到会被做这样那样的事，身体就会热得不得了呢？',
          true,
        );
        await urara.say_and_wait(
          ['如果 ', callname, ' 一定要这样的话，那乌拉拉也……'],
          true,
        );
      } else {
        await urara.say_and_wait(
          [
            '现在应该赶紧挣脱才对，就算是 ',
            callname,
            ' 也不可以，但是为什么看着 ',
            callname,
            '，四肢就使不上力气……',
          ],
          true,
        );
        await urara.say_and_wait(
          '胸口跳得好疼，可身体却变得软乎乎的，就好像……自己被这个人被吃掉也没关系一样……',
          true,
        );
        await urara.say_and_wait(
          [
            '乌拉拉接下来会被扯开衣服，再被强硬的凌辱，就像 ',
            call_30,
            ' 私藏的漫画上的女主所经历的那样……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '大人的气味，好近……',
            callname,
            ' 的味道好好闻，舒服到不想反抗，可为什么会这样呢……',
          ],
          true,
        );
        await urara.say_and_wait(
          ['这样真的就好了吗？把身体交给 ', callname, ' 什么的……'],
          true,
        );
      }
      era.println();
      await era.printAndWait([
        '就好像接受了命运般，',
        urara.teen_sex_title,
        '在 ',
        you.get_colored_name(),
        ' 身下闭上了眼睛。',
      ]);
      await era.printAndWait([
        '但小',
        urara.uma_sex_title,
        '想象中的凄惨遭遇却并没有到来：放开 ',
        urara.get_colored_name(),
        ' 的手，',
        you.get_colored_name(),
        ' 在',
        urara.teen_sex_title,
        '的额头上「啪」得轻弹了一下。',
      ]);
      await urara.say_and_wait('呜诶？');
      await era.printAndWait([
        '惊讶地睁开还挂着泪珠的双眼，',
        urara.get_colored_name(),
        ' 就看到了变回平常的样子哭笑不得的站在一旁的 ',
        you.get_colored_name(),
        '。',
      ]);

      era.printButton(
        `「所以说，明明${urara.uma_sex_title}很轻易就能把人类推开，但刚刚发生了什么啊？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '但是……这是因为 ',
        callname,
        ' 是 ',
        callname,
        '……',
      ]);

      era.printButton(
        '「如果乌拉拉以后遇到的其他要密切相处的人，也是大灰狼呢？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('呜……那个……');
      await era.printAndWait([
        '看到真的要哭出来的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 无奈地坐在',
        urara.sex,
        '身边，轻轻抚摸着',
        urara.sex,
        '的头发。',
      ]);
      await era.printAndWait([
        '在安抚了一阵后，终于平静下来的 ',
        urara.get_colored_name(),
        ' 像是累了般，将身子靠在了 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);
      await era.printAndWait([
        '是欺负过头了吗？不过被 ',
        you.get_colored_name(),
        ' 推倒的时候，',
        urara.get_colored_name(),
        ' 露出的表情，就好像「渴求交配的',
        urara.phy_sex_title,
        '」一样……',
      ]);
      await era.printAndWait([
        '用力揉了揉眼睛，娇柔的贴在 ',
        you.get_colored_name(),
        ' 身旁的小',
        urara.uma_sex_title,
        '正用湿润的眼神注视着 ',
        you.get_colored_name(),
        '。',
      ]);

      await urara.say_and_wait(['那……', callname, ' 真的不打算做了吗？']);
      era.printButton(
        '「……现在好孩子该洗漱睡觉了哦？我去收拾下桌子睡外面。」（好感+20）',
        1,
      );
      era.printButton(
        '「……就算是大灰狼，也不会这么不合时宜的吃掉小红帽啊。」（爱慕+5）',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        '看着 ',
        you.get_colored_name(),
        ' 离开的背影，',
        urara.get_colored_name(),
        ' 张了张嘴想要说什么，但也只是跟着 ',
        you.get_colored_name(),
        ' 站起身来。',
      ]);
      await era.printAndWait([
        '再次被 ',
        you.get_colored_name(),
        ' 抱回到房间时也，没能对说出挽留的请求，只是目送着 ',
        you.get_colored_name(),
        ' 随手关灯，身影消失在门后。',
      ]);
      await urara.say_and_wait([
        '脑袋还是好乱……但是果然我还是想要和 ',
        callname,
        ' 站在一起……',
      ]);
      await urara.say_and_wait([
        '只是这次也没能找到机会和 ',
        callname,
        ' 说说乌拉拉的事情啊……',
      ]);
      await urara.say_and_wait(['呜……这里全都是 ', callname, ' 的味道呢……']);
      await urara.say_and_wait(
        '但是这里是别人的床，所以不可以自己做舒服的事呢……',
      );
      await era.printAndWait([
        '有点可惜的小声念叨着，放弃了抵抗温暖与安心感的小',
        urara.uma_sex_title,
        '，在 ',
        you.get_colored_name(),
        ' 的被子里悄悄的睡着了。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '今夜，与乌拉拉交心的您是否感到满足呢？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '二人三足，真是浪漫又无用的说法，也是我最不喜欢的词语之一。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '但与喜好无关，因为这一定会是『您』与『',
        urara.get_colored_name(),
        '』一同写下的故事。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '那么故事正式进入中场的您，究竟是在做『好训练员』还是『坏大灰狼』呢？',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '突袭的心意！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '情人节与巧克力，说到底只是一种营销手段与商品的关系，只是意外的不讨人厌。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '别误会，比起观察沉浸在节日氛围里的笨蛋情侣们，我对巧克力更感兴趣。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '嗯？没有哦？并没有特别喜欢，巧克力的味道。',
      );
      era.drawLine();
      await era.printAndWait(
        '清早，起床洗漱穿衣，囫囵的吃下早餐，顺便站在门口时轻描淡写的看眼日历。',
      );
      await era.printAndWait([
        '今天是情人节啊，但就算如此也还有既定的日程。简单整理好衣服，',
        you.get_colored_name(),
        ' 推开住处的房门。',
      ]);
      await era.printAndWait([
        '随后，一名意想不到的小动物便立刻从门外探出两只耳朵，过早的闯入了 ',
        you.get_colored_name(),
        ' 今天的日程当中。',
      ]);
      await era.printAndWait([
        '刚刚站稳、身边摆满大包小包的 ',
        urara.get_colored_name(),
        ' 放下正要敲门的手指，并上前一步面带微笑地抱住了 ',
        you.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([callname, '！天亮咯，早安——！']);

      era.printButton('「哦！早……乌拉拉？！」', 1);
      await era.input();

      await urara.say_and_wait('嘿嘿～不好意思打扰了——！');
      await era.printAndWait([
        '被 ',
        urara.get_colored_name(),
        ' 用力的抱着，比人类体温稍高的小',
        urara.uma_sex_title,
        '透过冬衣向自己的 ',
        callname,
        ' 传递着',
        urara.sex,
        '独有的温暖。',
      ]);
      await era.printAndWait([
        '二月的气温依旧谈不上回暖，但因为是奔跑而来的缘故，此刻小',
        urara.uma_sex_title,
        '的身体正散发着温热活泼的清香。',
      ]);
      await era.printAndWait([
        '而今日的第一次亲密接触中，被担当略带稚气的拥抱包裹的 ',
        you.get_colored_name(),
        ' 也从中闻到了一丝不同平常的暧昧。',
      ]);

      era.printButton('「等下，你怎么突然跑来了？」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            '是为什么呢？',
            callname,
            ' 要猜猜看吗？虽然不用猜就能知道，因为今天是特殊的日子！',
          ]);
          await era.printAndWait([
            '放开怀抱，面色温润的小',
            urara.uma_sex_title,
            '踮起脚尖，调皮地在 ',
            you.get_colored_name(),
            ' 的嘴唇上留下了一枚小巧而甜蜜的吻。',
          ]);
          await urara.say_and_wait([
            '是 ',
            callname,
            ' 最喜欢的亲亲哦！还有乌拉拉特制的『本命巧克力』……应该是这么说对吧？',
          ]);
          await era.printAndWait([
            '从衣下拿出包装精美的小礼盒，',
            urara.get_colored_name(),
            ' 将还带着身体余温的巧克力送到了 ',
            you.get_colored_name(),
            ' 的手中。',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            ' 一定知道的对吧？明明连乌拉拉都记得今天要做什么哦？',
          ]);
          await era.printAndWait([
            '放开怀中的 ',
            you.get_colored_name(),
            '，小',
            urara.uma_sex_title,
            '在外套口袋中一阵摸索后掏出了一个包装精致的小礼物盒。',
          ]);
          await urara.say_and_wait([
            '锵锵——！',
            callname,
            ' 知道这里面是什么吗？这里面是能让大家都开心的东西哦！',
          ]);
          await urara.say_and_wait([
            '今天要送给 ',
            callname,
            ' 乌拉拉牌巧克力！现在立刻打开看看吧！',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '诶？',
          callname,
          ' 是忘了今天是什么日子了吗？嗯……那让乌拉拉来告诉 ',
          callname,
          ' 吧！',
        ]);
        await era.printAndWait([
          '有些害羞的从怀中拿出了精致的小礼盒，',
          urara.get_colored_name(),
          ' 将还带着身体余温的巧克力送到了 ',
          you.get_colored_name(),
          ' 的手中。',
        ]);
        await urara.say_and_wait([
          '情人节的『本命巧克力』……？是这样说对吧？总之给 ',
          callname,
          ' 的！还有这个……',
        ]);
        await era.printAndWait([
          '将巧克力塞过来的同时，小',
          urara.uma_sex_title,
          '也悄悄踮起脚，趁着不注意时用樱唇在 ',
          you.get_colored_name(),
          ' 的脸颊上轻啄了一下。',
        ]);
      } else {
        await urara.say_and_wait(
          '因为今天是情人节哦？所以我给大家都做了很多巧克力呢！稍等一下……',
        );
        await era.printAndWait([
          '在身边的袋子中一番找寻后，',
          urara.get_colored_name(),
          ' 将一盒包装精美的巧克力送到了 ',
          you.get_colored_name(),
          ' 的手中。',
        ]);
        await urara.say_and_wait(
          '嗯……嗯！是义理的哦！义理巧克力……至少大家告诉我要这么说！',
        );
        await urara.say_and_wait([
          '不过因为乌拉拉很感谢 ',
          callname,
          '，所以这个也是特制的！',
          callname,
          ' 要现在打开看看吗？',
        ]);
      }
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 催促的目光中打开包装纸，里面出现的则是明显泛橘……不，是呈现浓浓橘色的巧克力。',
      ]);
      await era.printAndWait(
        '这真的是巧克力该有的颜色？而且到底加了什么才会让巧克力变得如此鲜艳啊……',
      );

      era.printButton('「颜色，很鲜艳啊……」', 1);
      await era.input();

      await urara.say_and_wait('怎么样？看起来很好吃吧？');
      await urara.say_and_wait(
        '情人节就是送巧克力给平时照顾自己的人的日子！所以昨晚我很努力地做了这个哦！',
      );
      await era.printAndWait([
        '为保护小',
        urara.uma_sex_title,
        '的心意，',
        you.get_colored_name(),
        ' 把「就像有毒动植物的警戒色一样」的后半句用力地咽了回去。',
      ]);

      era.printButton('「谢谢，不过这个是……橘子味的？」', 1);
      await era.input();

      await urara.say_and_wait(
        '不，是胡萝卜味的哦！做得很成功对吧？乌拉拉还用掉了珍藏的胡萝卜哦！',
      );

      era.printButton('「胡萝卜……？」', 1);
      await era.input();

      await urara.say_and_wait('嗯，胡萝卜！而且是我特别挑选出来的！');
      await urara.say_and_wait([
        '我想 ',
        callname,
        ' 应该也比较喜欢加了胡萝卜的巧克力，所以就这样尝试了！',
      ]);
      await era.printAndWait([
        '怎么说呢，这个意料之外情理之中的解答？看着盒中这块橘得反光的板状物，',
        you.get_colored_name(),
        ' 陷入了沉思。',
      ]);
      await era.printAndWait([
        '虽然明白',
        urara.uma_sex_title,
        '是一种非常喜欢胡萝卜的生物，但这块物质的成因恐怕已经是炼金术的范畴了吧……',
      ]);
      await era.printAndWait([
        '算了，被 ',
        urara.get_colored_name(),
        ' 吓到早就该习惯了，而且能够在情人节收到巧克力本身也是值得高兴的事。',
      ]);

      era.printButton('「那个，巧克力，我可以现在就尝尝看吗？」', 1);
      await era.input();

      await urara.say_and_wait('嘿嘿～不客气哦！一口气都吃掉也没关系！');
      await era.printAndWait([
        '得到 ',
        urara.get_colored_name(),
        ' 的许可后，',
        you.get_colored_name(),
        ' 小心地掰下盒中物的一角，颜色特别的巧克力发出了一声普通的脆响。',
      ]);
      await era.printAndWait(
        '在将巧克力送入口中后，先是一股胡萝卜特有的「蔬菜味儿」，之后便是略微带苦的清甜味。',
      );
      await era.printAndWait([
        '只是与 ',
        urara.get_colored_name(),
        ' 的手工饼干不同，这块巧克力比起好吃更多还是「抹茶味麻婆豆腐」般的非主流感……',
      ]);
      await era.printAndWait(
        '不过话虽如此，就算颜色和味觉都不太好描述，但它依旧做到了可以让人轻易入口。',
      );
      await era.printAndWait([
        '……可话又说回来，能在短时间内用论外素材调出能够入口的味道，难道 ',
        urara.get_colored_name(),
        ' 真是天才……？',
      ]);

      await urara.say_and_wait([callname, '，乌拉拉的特制巧克力味道如何？']);
      era.printButton(
        '「嘶……虽然有点微妙，但这个巧克力的味道意外还不错哦……」（好感+20）',
        1,
      );
      era.printButton(
        '「嗯……嗯！我还是第一次吃到这种味道的巧克力，还挺新鲜的……」（爱慕+5）',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        '对吧！我接下来要去送给商店街了！',
        callname,
        ' 要不要一起来？大家一定也会很高兴的！',
      ]);

      era.printButton('「没有不去的道理啊，不过乌拉拉准备了多少巧克力？」', 1);
      await era.input();

      await urara.say_and_wait(
        '给大家送的巧克力乌拉拉早就准备好了！都是乌拉拉亲手做的哦！',
      );
      await era.printAndWait([
        '早有准备的拎出了几个藏在身后的大袋子，',
        urara.get_colored_name(),
        ' 笑着向 ',
        you.get_colored_name(),
        ' 炫耀道。',
      ]);
      await urara.say_and_wait(
        '还有！我要给大家的巧克力也都做得很厉害哦！每家店都是不同口味呢！',
      );
      await era.printAndWait([
        '嗯，不同的口味……等下？看着乌拉拉天真的笑容，一股不妙的预感在 ',
        you.get_colored_name(),
        ' 心中不停的翻涌着。',
      ]);
      await urara.say_and_wait(
        '就是这些哦！我给果蔬店的加蔬菜，给鱼货店的加了鱼，给鲜肉铺的加了肉……',
      );
      await era.printAndWait([
        '颤抖地接过 ',
        urara.get_colored_name(),
        ' 手中装着可能会是不可名状之物的袋子，',
        you.get_colored_name(),
        ' 最终还是没敢把里面的盒子打开检查。',
      ]);
      await era.printAndWait([
        '不是吃过了还不想信任 ',
        urara.get_colored_name(),
        '，但那些奇妙素材与巧克力的混合物真的越听越不妙不妙。',
      ]);
      await era.printAndWait([
        '胡萝卜的味道尚且能在意料之内，但那些也要保证味道……',
        urara.get_colored_name(),
        ' 恐怕真的是个炼金术士吧……',
      ]);
      await era.printAndWait([
        '最终，',
        you.get_colored_name(),
        ' 放弃了无意义的思考——总之 ',
        urara.get_colored_name(),
        ' 是天才就对了！',
      ]);

      era.printButton('「嗯、嘛、啊，乌拉拉真、真很厉害哦！」', 1);
      await era.input();

      await urara.say_and_wait('对吧？真期待看到大家的笑容呢——');
      await era.printAndWait([
        '肯定能看到的，大家为了 ',
        urara.get_colored_name(),
        ' 一定会努力露出笑容的，但是之后恐怕就只能为肠胃祈福了……',
      ]);
      await era.printAndWait([
        '带着纠结且决绝的心情，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 一起前往商店街，准备度过一个「热闹无比」的情人节。',
      ]);
      await era.printAndWait(
        '至于今天原本的日程……就当是『计划赶不上变化』的常事好了。',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '嗯……不过各种口味的巧克力啊，巧克力呢，巧克力……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '干什么，您那个眼神是什么意思？零食的话，我可没有乌拉拉那么幼稚的味觉哦？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '诶？您还没问？啊……切，您这个人……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_12: (() => {
    const title = '商店街的偶像！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     */
    const f = async (urara, nature, inner_urara, you, callname, call_61) => {
      await urara.say_and_wait([
        '咳咳……大家好！我是出任这条商店街……『招牌赛',
        urara.uma_sex_title,
        '』？的乌拉拉哦！',
      ]);
      await urara.say_and_wait(
        '虽然还不太明白，但是我会加油的！大家请多指教——！',
      );
      await era.printAndWait([
        '站在商店街的特别舞台上，',
        urara.get_colored_name(),
        ' 正向大家热情的招着手，也偷偷向台下的 ',
        you.get_colored_name(),
        ' 眨着眼睛。',
      ]);
      await era.printAndWait([
        '混在台下人群中的 ',
        you.get_colored_name(),
        '，在收到 ',
        urara.get_colored_name(),
        ' 的信号后，也立刻悄悄地向 ',
        urara.get_colored_name(),
        ' 比出了大拇指。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '这件事的开端，还要从几天前说起。',
      );
      era.drawLine();
      await era.printAndWait([
        '邀请有人望的现役',
        urara.uma_sex_title,
        '进行商业宣传，这样的活动并不少见，而 ',
        urara.get_colored_name(),
        ' 会被邀请其实也在预料之中。',
      ]);
      await era.printAndWait([
        '不过这些对 ',
        urara.get_colored_name(),
        ' 突如其来的邀请虽然地点不同，仔细一看却都是来自同一片地区的。',
      ]);
      await era.printAndWait([
        '商店街的大家真的很疼爱 ',
        urara.get_colored_name(),
        ' 啊。这样想着，',
        you.get_colored_name(),
        ' 将一大摞委托整齐的码在了桌上。',
      ]);
      await urara.say_and_wait('嗯……也就是说，大家想请乌拉拉去帮忙的意思吗？');

      era.printButton(
        '「不过这次是正经工作，但没关系，乌拉拉用平常心去做就好了。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '回应着 ',
        urara.get_colored_name(),
        ' 的问题，',
        you.get_colored_name(),
        ' 将手中的委托函递给了凑过来的小',
        urara.uma_sex_title,
        '。',
      ]);
      await era.printAndWait('现在的两人都没有不去接受委托的理由：');
      await era.printAndWait([
        urara.get_colored_name(),
        ' 想要回报在生活中照顾',
        urara.sex,
        '的人们，如果能成为名副其实的商店街招牌，那',
        urara.sex,
        '就能更实际的帮助到大家；',
      ]);
      await era.printAndWait([
        '而从训练员的角度上，接下工作则能有效提高知名度，对现在的 ',
        urara.get_colored_name(),
        ' 来说，支持度的重要性不亚于训练。',
      ]);
      await era.printAndWait([
        '只是就算两人的选择相同，',
        urara.get_colored_name(),
        ' 大概也没弄懂是什么情况吧？怎么办呢……',
      ]);
      if (era.get('cflag:60:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '应该没问题吧？要不去征求一下 ',
          nature.get_colored_name(),
          ' 的意见？毕竟',
          urara.sex,
          '也是很受商店街欢迎的',
          urara.uma_sex_title,
          '。',
        ]);
        await era.printAndWait([
          '要去吗？虽然现在去麻烦',
          urara.sex,
          '不合时宜，更何况这只是 ',
          you.get_colored_name(),
          ' 和 ',
          urara.get_colored_name(),
          ' 的工作，可如果不小心搞砸了就要头疼了……',
        ]);
      }
      era.println();
      await era.printAndWait('算了，患得患失也没用，桥到船头自然直。');
      await urara.say_and_wait([
        '不过 ',
        call_61,
        ' 告诉我，『既然是工作，就要注意礼貌！』，所以我现在很认真哦？',
      ]);
      await urara.say_and_wait(
        '虽然商店街的叔叔阿姨们说保持平常那样就好，但是我会注意的哦？',
      );
      await era.printAndWait([
        '回到商店街的现在，走在 ',
        you.get_colored_name(),
        ' 的身边，',
        urara.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 身边小声地说道。',
      ]);
      await era.printAndWait([
        '顺利地结束了开场白，现在 ',
        urara.get_colored_name(),
        ' 正按委托的要求顺着商店街的店面挨家挨户的绕着。',
      ]);
      await era.printAndWait([
        '既然 ',
        urara.get_colored_name(),
        ' 已经意识到要做什么了，那应该也没有担心的必要了。',
      ]);
      await urara.say_and_wait(
        '啊，叔叔好！今天的货物也很新鲜呢！嗯！下次我会继续来帮忙的！',
      );
      await urara.say_and_wait(
        '阿姨早上好哦！没错，是要买一些蔬菜回去呢！乌拉拉要买这些哦！',
      );
      await urara.say_and_wait([
        '让我来搭把手吧！没关系的，',
        urara.uma_sex_title,
        '的力气可是很大的，那么要上了——！',
      ]);
      await urara.say_and_wait(
        '这个地方要先往前走再向右转哦！不用谢哦？姐姐们也路上注意安全！',
      );
      await urara.say_and_wait(
        '别哭哦？男孩子要坚强一点！你的妈妈应该还就在附近……啊！找到了！这边——！',
      );
      await urara.say_and_wait([
        '嗯？',
        urara.elder_sibling_sex_title,
        '是赛',
        urara.uma_sex_title,
        '哦！下次要帮我加油？谢谢！',
      ]);
      await era.printAndWait([
        '与熟悉或不熟的人们做着亲切的互动，',
        urara.get_colored_name(),
        ' 天然的特质走到哪里都发挥着亲切的魅力。',
      ]);
      await era.printAndWait([
        '仿佛只存在于绘本上的童话般，',
        urara.get_colored_name(),
        ' 所到之处都聚集着人群，展现着有如花朵盛开般的热闹情景。',
      ]);
      await era.printAndWait([
        '真好啊，上次见到这么温馨的场景是什么时候来着？保持距离跟在 ',
        urara.get_colored_name(),
        ' 身后，默默守望着',
        urara.sex,
        '的 ',
        you.get_colored_name(),
        ' 如此感慨道。',
      ]);
      await era.printAndWait([
        '在如此好的人望之上，只要再提升奔跑的实力，应该就可以在未来达成 ',
        urara.get_colored_name(),
        ' 的愿望了吧？',
      ]);
      await era.printAndWait([
        '只要同 ',
        urara.get_colored_name(),
        ' 说的那样，',
        urara.sex,
        '一直跑下去的话……',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '那个，旁边的这位，您是乌拉拉的训练员吗？',
      );
      await era.printAndWait([
        '但就在 ',
        you.get_colored_name(),
        ' 思考着当下时，一旁路过的女性却悄悄叫住了 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 认出了这位女性是商店街振兴组织的成员，听说是从 ',
        urara.get_colored_name(),
        ' 刚入学起就一直照看着',
        urara.sex,
        '的熟人。',
      ]);

      era.printButton('「嗯，谢谢你们愿意给乌拉拉提供委托。」', 1);
      await era.input();

      await you.say_as_passer_by_and_wait(
        '商店街的人',
        `该说谢谢的是我们才对，多亏有乌拉拉在，${urara.sex}真的帮了我们很多忙。`,
      );
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '从乌拉拉来了之后，这条商店街也变得更有活力了，之前这条街真的很萧条呢。',
      );
      await era.printAndWait([
        '听着她的感谢，',
        you.get_colored_name(),
        ' 也想起了某些关于这条街的事情。',
      ]);
      await era.printAndWait(
        '因为综合商业区的发展，功能性不足的传统商店街在城市中的存在空间正在不断被挤占。',
      );
      await era.printAndWait([
        '人流的减少意味着冷清与萧条，但 ',
        urara.get_colored_name(),
        ' 到来后的诸多热心之举，又为这条街注入了新的活力。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 的热情没有目的性，但',
        urara.sex,
        '其实在很早之前就在无意间帮到了这条街上的大家，只是……',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '……乌拉拉的实力不怎么强吧？我之前就听说，那孩子总是跑不赢……',
      );
      await era.printAndWait([
        '打断了 ',
        you.get_colored_name(),
        ' 的思绪，眼前的女性在一番犹豫后再次开口了。',
      ]);

      era.printButton('「可乌拉拉也在逐渐变强。」', 1);
      await era.input();

      await era.printAndWait([
        '虽然 ',
        you.get_colored_name(),
        ' 对自己的结论有着能证实的底气，可总觉得气氛不太对劲。',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        `嗯，我相信${urara.sex}一定很努力，但是……${urara.sex}的天赋，还是不如其他人吧？`,
      );
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '所以慢下来也没关系，只要乌拉拉一直开心地奔跑，我们就很受鼓舞了。',
      );
      await you.say_as_passer_by_and_wait(
        '商店街的人',
        '再次感谢您，只要能这样，我们就很高兴了。',
      );
      await era.printAndWait([
        '她一边说一边温柔地注视着 ',
        urara.get_colored_name(),
        '，眼神充满着有如为人父母般对孩子的关怀之情。',
      ]);
      await era.printAndWait([
        '以父母般的心态守护着小',
        urara.uma_sex_title,
        '的人们，或许是真心认为「只要',
        urara.sex,
        '能开心地奔跑就好了」。',
      ]);
      await era.printAndWait([
        '但是真的只是这样，绝不会是最优解。看着女性在道别后离开的背影，',
        you.get_colored_name(),
        ' 心情复杂的摇了摇头。',
      ]);
      await era.printAndWait([
        '并非否认别人的善意，只是 ',
        you.get_colored_name(),
        ' 知道 ',
        urara.get_colored_name(),
        ' 的愿望，也能看见成长中的',
        urara.sex,
        '绝不会仅限于此。',
      ]);
      await era.printAndWait(
        '不过未来的时间还很长，要让大家看到愿望的开花，继续前进才是正解。',
      );
      await era.printAndWait([
        '拿着刚买来的饮料，',
        you.get_colored_name(),
        ' 笑着向工作结束后在人群中寻找着 ',
        you.get_colored_name(),
        ' 的 ',
        urara.get_colored_name(),
        ' 招起了手。',
      ]);

      era.printButton('「乌拉拉，工作辛苦了！」', 1);
      await era.input();

      await urara.say_and_wait([callname, '！今天乌拉拉有帮到大家吗？']);
      await era.printAndWait([
        '工作结束后，正坐在长椅上休息的 ',
        urara.get_colored_name(),
        ' 迎着夕阳接过了 ',
        you.get_colored_name(),
        ' 递来的果汁。',
      ]);
      await era.printAndWait([
        '站在忙了一天后终于慢下来的 ',
        urara.get_colored_name(),
        ' 旁边，',
        you.get_colored_name(),
        ' 重新思考起了那个「但是」。',
      ]);
      await era.printAndWait(
        '……这不是简单的打怪升级的问题，而是撞上了时代发展的新旧交替。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 能做的并非长久之计，除非有更大的转机，只靠个人没办法一直坚持下去。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 感到衣角被人拽住了。转头看去，柔和的夕阳正照在 ',
        urara.get_colored_name(),
        ' 身上，将',
        urara.sex,
        '平静的小脸浸在温暖的光里。',
      ]);
      await urara.say_and_wait([
        callname,
        '，我知道的哦？街上大家的难处什么的，我现在做的也很难改变未来。',
      ]);
      await urara.say_and_wait(
        '但是就算有一天商店街不在了，大家四散离开，乌拉拉想要做的事也不会改变。',
      );
      await era.printAndWait([
        '眺望着远方火红的太阳，小',
        urara.uma_sex_title,
        '认真的笑容中透出了志在必得。',
      ]);
      await urara.say_and_wait(
        '会让大家都看到的，乌拉拉要作为这里的偶像，为商店街大家带来笑容与希望！',
      );
      await urara.say_and_wait(
        '不过特雷森的大家也都很喜欢这里，还没放弃就总会有办法，乌拉拉会做给大家看的！',
      );
      await era.printAndWait([
        '最后一抹迟疑在 ',
        urara.get_colored_name(),
        ' 的解答中消散了，不知不觉中，太阳也将耀眼的夕阳照在了 ',
        you.get_colored_name(),
        ' 的身上。',
      ]);

      era.printButton('「一起回去吧。」', 1);
      await era.input();

      await urara.say_and_wait('嗯，要回去了！');
      await era.printAndWait([
        '整理好心情后，',
        you.get_colored_name(),
        ' 向 ',
        urara.get_colored_name(),
        ' 伸出了手，而 ',
        urara.get_colored_name(),
        ' 则笑着接过了 ',
        you.get_colored_name(),
        ' 伸出的手。',
      ]);
      await era.printAndWait([
        '继续奔跑下去就总有办法，不管是并不强大的 ',
        urara.get_colored_name(),
        '，还是积极面对生活的身边人。',
      ]);
      await era.printAndWait([
        '迎着夕阳，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 踏上了归路。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '但仅是这样，单凭着努力，真的能挽救谁吗？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '抱歉，又说了不该说的话，那么，亲爱的您又是怎么看呢？',
      );
      era.printButton(
        '「去年的年末，不是已经谈过了吗？」（中&长距离适性提升）',
        1,
      );
      era.printButton('「时间还有很多，不试试怎么知道。」（草地适性提升）', 2);
      era.printButton(
        '「既然做出选择，就一定负责到底。」（全属性+2，训练擅长度上升）',
        3,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait(
        '……到底算不算意外呢？您是这样想的啊……其实『乌拉拉』也差不多。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '我依旧保留我的看法，但我也不希望',
        urara.sex,
        '受伤，所以请以现在的步调照顾好',
        urara.sex,
        '。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '只是无论轻重，只有带着背负与觉悟前进才能变强，不管经历几次都很讨厌……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_27: (() => {
    const title = '应援会！？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_61,
      high_relation,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '或许不太准确，但训练员',
        you.adult_sex_title,
        '（您）与乌拉拉，确实跨越了不曾想象的过去。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '真是令人羡慕，就算故事的主角依旧算不上强大，但也已经将路人们抛在身后。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但是被甩在身后的人们呢……抱歉，这不是现在该说的内容。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '现在，请好好享受来之不易的回报吧。',
      );
      era.drawLine();
      await era.printAndWait([
        '这是在商店街宣传工作结束后的某一天，与 ',
        urara.get_colored_name(),
        ' 一同外出的路上所发生的事。',
      ]);
      await urara.say_and_wait([
        '今天的散步很开心哦！',
        callname,
        '，等下一起去吃点心吧！',
      ]);

      era.printButton('「在这之后也记得要好好训练哦？」', 1);
      await era.input();

      await urara.say_and_wait('好——');
      await era.printAndWait([
        '毫不犹豫的应答着 ',
        you.get_colored_name(),
        ' 的请求，成长后的小',
        urara.uma_sex_title,
        '已经看不到最初时对训练的无所适从了。',
      ]);
      await era.printAndWait([
        '随着双方理解的不断加深，',
        you.get_colored_name(),
        ' 能感受到小',
        urara.uma_sex_title,
        '现在正走在进化的路上。',
      ]);
      await era.printAndWait([
        '不过就算再怎么变，',
        urara.get_colored_name(),
        ' 也还会是那个为了大家而奔走的 ',
        urara.get_colored_name(),
        ' 就是了。',
      ]);
      await era.printAndWait([
        '转头就看到就趁着绿灯跑到街对面去扶老婆婆的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 也习以为常的追赶起',
        urara.sex,
        '热心的步伐。',
      ]);
      await era.printAndWait([
        '而在与 ',
        urara.get_colored_name(),
        ' 一同解决了别人的燃眉之急后，',
        you.get_colored_name(),
        ' 与小',
        urara.uma_sex_title,
        '则再次收到了一份由',
        urara.sex,
        '所牵起的善意。',
      ]);
      await era.printAndWait([
        '老婆婆「您就是',
        urara.sex,
        '的家长吧，这位小姑娘真有精神呢。」',
      ]);
      await urara.say_and_wait([
        '没错，我的优点就是有精神哦！不过 ',
        callname,
        ' 不是我的家长而是 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '听到 ',
        urara.get_colored_name(),
        ' 的话，老婆婆先是笑眯眯的看了看 ',
        you.get_colored_name(),
        ' 的样子，又再次将慈祥的目光放回了身边的樱色。',
      ]);
      await era.printAndWait('老婆婆「这样啊……你是特雷森的学生吗？」');
      await urara.say_and_wait('嗯！我叫春乌拉拉，已经出道很长时间了！');
      await era.printAndWait(
        '老婆婆「乌拉拉……原来你真的是乌拉拉啊，就跟大家说的一模一样，一下就能猜到呢。」',
      );

      era.printButton('「这么说，您是以前就听说过乌拉拉吗？」', 1);
      await era.input();

      await era.printAndWait(
        '老婆婆「是啊，我也经常去那条商店街嘛，那里的吉祥物自然很清楚哦。」',
      );
      await era.printAndWait(
        '老婆婆「最近那边的店家们说要成立『乌拉拉后援会』呢，甚至整条街的年轻人们都行动起来了。」',
      );

      era.printButton('「嗯？竟然是后援会？」', 1);
      await era.input();

      await era.printAndWait([
        '十分突然的，',
        you.get_colored_name(),
        ' 在意想不到的地方获得了意料之外的信息，没想到 ',
        urara.get_colored_name(),
        ' 也要有后援会了啊。',
      ]);
      await urara.say_and_wait([
        '后援会……？',
        callname,
        '，我不是很懂呢，后援会是做什么的来着？',
      ]);

      era.printButton(
        '「怎么说呢……大概是一种为了支持特定人物的活动，提供资金等各种支援的团体……」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '这样啊……嗯！完全听不懂呢！总之就是大家想更加支持我的意思对吧？',
      );
      await era.printAndWait([
        '也是啊，虽然不能强求别人听懂，但 ',
        urara.get_colored_name(),
        ' 还是 ',
        urara.get_colored_name(),
        '。不过从',
        urara.sex,
        '的角度来讲，这样理解也并非算错？',
      ]);
      await era.printAndWait(
        '老婆婆「但小乌拉拉没说错哦？真是个不可思议的孩子啊，我也加入后援会好了。」',
      );
      await urara.say_and_wait([
        '诶？真的吗？那……',
        callname,
        '，那个后援会我也能加入吗？',
      ]);

      inner_urara.say_as_unknown([
        '呃？这个……训练员',
        you.adult_sex_title,
        '（您）怎么说呢——',
      ]);
      era.printButton(
        '「不，我加入什么的先不说，哪有自己给自己应援的啊？」（好感+10）',
        1,
      );
      era.printButton(
        '「我肯定是会想加入的，但乌拉拉是要给自己应援吗？」（爱慕+2）',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        '嗯！是哦……咦？好像不太对？',
        callname,
        '，我是不是又要被笑话了？',
      ]);
      await era.printAndWait([
        '连自己都意识到有哪里不对后，',
        urara.get_colored_name(),
        ' 也变得有些难为情起来。',
      ]);
      await era.printAndWait(
        '老婆婆「呼呵呵，真是有趣的孩子。难怪大家这么喜欢谈论你……」',
      );
      await era.printAndWait([
        '看着老妇人脸上的笑容变化，',
        you.get_colored_name(),
        ' 对自己的担当「有多招人喜欢」这点的理解也更加深了。',
      ]);
      await era.printAndWait([
        { isBr: true },
        '跟帮助过的老妇人道别后，靠在 ',
        you.get_colored_name(),
        ' 身边的 ',
        urara.get_colored_name(),
        ' 似乎还在思索着关于「后援会」的事情。',
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          '原来在不知道的地方，也有数不过来的大家喜欢我。',
        );
        await urara.say_and_wait(
          '总觉得有点沉重呢！但是不要紧，只要我更努力一些就好了吧！',
        );
        await urara.say_and_wait([
          '还有哦！在大家的应援声中，我也觉得自己确实跑得更快了！',
          callname,
          ' 觉得呢？',
        ]);
        await era.printAndWait([
          '或许真是那样吧。看着 ',
          urara.get_colored_name(),
          ' 的笑容，',
          you.get_colored_name(),
          ' 想起了某些关于',
          urara.uma_sex_title,
          '的说法。',
        ]);
      } else {
        await urara.say_and_wait('大家都很热情呢，但是总觉得有些沉重了！');
        await urara.say_and_wait([
          '不过应该没关系吧！就连 ',
          call_61,
          ' 也说要有压力才能有动力呢！',
        ]);
        await urara.say_and_wait(
          '而且既然大家都愿意支持我的话，我应该也能跑得更快吧？',
        );
        await era.printAndWait([
          '应该是那样没错吧？面对 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 似乎想起了一些都市传说。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '「支持者人数越多，就越能增强赛',
        urara.uma_sex_title,
        '的力量」、「能将他人的祝福，化为自己的力量」。',
      ]);
      await era.printAndWait([
        '听起来像什么超能力系漫画的设定，但若是精灵般的',
        urara.uma_sex_title,
        '则一切皆有可能。',
      ]);
      await era.printAndWait([
        '至少，这一点在 ',
        urara.get_colored_name(),
        ' 身上体现的尤为明显。',
      ]);

      era.printButton(
        '「嗯，那么接下来维持现状，让更多人看到乌拉拉的奔跑吧。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '接下来维持现状，也就是说继续增加粉丝数的意思，而 ',
        you.get_colored_name(),
        ' 从来不质疑 ',
        urara.get_colored_name(),
        ' 在这方面的能力。',
      ]);
      await era.printAndWait(
        '具体是继续出赛，还是将重心转回训练，或许都需要重新进行构思。',
      );
      await era.printAndWait([
        '但 ',
        urara.get_colored_name(),
        ' 不论何时何地，最后都会选择相信',
        urara.sex,
        '的 ',
        callname,
        '，并送上鼓励的微笑。',
      ]);
      await urara.say_and_wait([
        '我明白了！就和往常一样！乌拉拉会和 ',
        callname,
        ' 一起前进呢！',
      ]);
      if (era.get('love:52') >= 50) {
        era.println();
        await era.printAndWait([
          { isBr: true },
          '但是，面对越来越受众人喜爱的 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 藏在心底的焦躁又不知不觉中加重了几分。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 用善意平等的关照着他人，那',
          urara.sex,
          '有一天会被别有用心的人从自己身边骗走也不奇怪。',
        ]);
        await era.printAndWait([
          '被',
          urara.sex,
          '所治愈的训练员，一边欣慰于担当的成长，但却又矛盾地对',
          urara.sex,
          '分享的「爱」而感到「嫉妒」。',
        ]);
        await era.printAndWait(
          '哪怕知道想法本身是错误的，哪怕负面的情绪其实并不强烈，但还是禁不住的去想要占有。',
        );
        await era.printAndWait([
          '占有那份明媚的笑容；占有那副娇小柔软的身体；占有那一抹名为「',
          urara.get_colored_actual_name(),
          '」的春光。',
        ]);
        await era.printAndWait([
          '在不经意间，天真幼小的小',
          urara.uma_sex_title,
          '，似乎又在重要的人心里种下了一颗「魔性」的种子……',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '之后的日子里，虽然并不知道应援会的后续如何，但乌拉拉的粉丝数却悄然增加了。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '不过因为经历所致，训练员',
        you.adult_sex_title,
        '（您）其实没太意外。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '夸张点说，所有人都喜欢的乌拉拉，大概在某一天会变成理所当然的事吧？',
      );
      await inner_urara.say_as_unknown_and_wait([
        '只要',
        urara.sex,
        '和往常一样，不去介意外界变化带来的压力就好了吧……虽然毕竟是乌拉拉……',
      ]);
      await inner_urara.say_as_unknown_and_wait('搞什么啊，又不是新○茜。');
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿（经典年）开始';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '就像学校郊游一样呢，但说到底还是去训练吧？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '不过只要能开心就好了吧，只要能开心的话……',
      );
      era.drawLine();
      await era.printAndWait([
        '中央特雷森每年都会为了强化',
        urara.uma_sex_title,
        '们的能力而举办夏季集训，这次 ',
        you.get_colored_name(),
        ' 也为 ',
        urara.get_colored_name(),
        ' 报了名。',
      ]);
      await era.printAndWait([
        '这对 ',
        urara.get_colored_name(),
        ' 来说是个增进实力的绝佳机会，虽然从小',
        urara.uma_sex_title,
        '的心情上讲，出游时的兴奋明显更占上风。',
      ]);
      await era.printAndWait([
        '不过，',
        urara.get_colored_name(),
        ' 维持这样的状态也挺好，精神良好和身体健康比强硬的训练要有效得多。',
      ]);
      await era.printAndWait([
        '况且',
        urara.sex,
        '本来就还是个没完全长大的孩子……',
      ]);
      await urara.say_and_wait([
        callname,
        '！那边的天空看起来好远！是要延伸到什么地方去呢？',
      ]);
      await urara.say_and_wait([
        '啊！稍微看得见海了！',
        callname,
        '，在海边跑起来舒服吗？',
      ]);
      await era.printAndWait([
        '看着车窗外，坐在 ',
        you.get_colored_name(),
        ' 身边的 ',
        urara.get_colored_name(),
        ' 掩饰不住兴奋地不停向 ',
        you.get_colored_name(),
        ' 问道。',
      ]);
      if (high_relation) {
        await urara.say_and_wait('嘿嘿～大家一起的外宿！乌拉拉期待好久了！');
        await urara.say_and_wait([
          callname,
          ' 也开心吗？乌拉拉想和 ',
          callname,
          ' 每天都在海边玩水哦！',
        ]);
        await era.printAndWait([
          '将柔软的身体紧贴在 ',
          you.get_colored_name(),
          ' 身边，',
          urara.get_colored_name(),
          ' 如一只粉色小鸟般在 ',
          you.get_colored_name(),
          ' 的耳边开心地吟唱着。',
        ]);
      } else {
        await urara.say_and_wait('嗯！乌拉拉还是第一次和大家一起外宿！');
        await urara.say_and_wait([
          callname,
          ' 也和别人一起外宿过吧？',
          callname,
          ' 觉得那样开心吗？',
        ]);
        await era.printAndWait([
          '尽管看上去没有语气中那么开心，但 ',
          urara.get_colored_name(),
          ' 的身体还是诚实地与 ',
          you.get_colored_name(),
          ' 靠在了一起。',
        ]);
      }
      if (era.get('love:52') >= 50) {
        era.println();
        await urara.say_and_wait([
          '还有还有！虽然不知道能不能用上，但乌拉拉都做好了和 ',
          callname,
          ' 搂搂抱抱的准备了哦？',
        ]);
        await urara.say_and_wait([
          '不管是在沙滩上，还是在晚上独处的时候，乌拉拉都没问题呢～',
          callname,
          ' 期待吗？',
        ]);
        await era.printAndWait([
          callname,
          ' 觉得你收敛一下更好哦？面对 ',
          urara.get_colored_name(),
          ' 天真但又柔媚的笑颜，不愿面对的 ',
          you.get_colored_name(),
          ' 默默地把头别向一边。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '虽说这个年纪的小',
        urara.uma_sex_title,
        '有玩心是好事，但 ',
        urara.get_colored_name(),
        ' 好像兴奋过头了，没问题吗？',
      ]);
      await era.printAndWait([
        '虽然就算感到不安，时间和小',
        urara.uma_sex_title,
        '也不会等人，尽全力上吧。',
      ]);
      await era.printAndWait('夏季集训开始！');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = '夏合宿（经典年）途中';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {PrintedSpan} callname_30 米浴对玩家的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      you,
      callname,
      call_30,
      call_61,
      callname_30,
      r_call_u,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '『只要',
        urara.sex,
        '能开心就够了』，所以',
        urara.sex,
        '一直带着笑容在奔跑，这就是『',
        urara.get_colored_actual_name(),
        '』。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '但在那副表象之下，也有',
        urara.sex,
        '从未接触过的自己也说不定……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '夏季集训期间的某个下午，出来散心的 ',
        you.get_colored_name(),
        ' 迎着海风来到了',
        urara.uma_sex_title,
        '们做训练活动时的海滩。',
      ]);
      await era.printAndWait([
        '今天的训练已经结束了，但在本应空无一人的沙滩上，',
        you.get_colored_name(),
        ' 却看到了一个孤独的小小身影。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 还穿着泳衣独自坐在海边，手中拿着散开的发带，湿漉漉的披肩樱发反射着落日的霞光。',
      ]);
      await era.printAndWait([
        '现在的小',
        urara.uma_sex_title,
        '正出神地望着逐渐沉入海面的夕阳，双手还在揉着因训练过度而僵硬的双腿。',
      ]);
      await era.printAndWait([
        '白天的2500米并跑',
        urara.sex,
        '输得很惨，而 ',
        you.get_colored_name(),
        ' 也知道这段距离对',
        urara.sex,
        '来说太长了，身体会难受也理所当然。',
      ]);
      await era.printAndWait([
        '只是似乎不止身体，独自一人眺望着远方的 ',
        urara.get_colored_name(),
        '，脸上的表情也像是在压抑着什么情绪。',
      ]);
      era.printButton('「今天的乌拉拉似乎不怎么开心啊，发生了什么？」', 1);
      await era.input();
      await era.printAndWait([
        '走到 ',
        urara.get_colored_name(),
        ' 身边，',
        you.get_colored_name(),
        ' 伸手轻轻摘下了 ',
        urara.get_colored_name(),
        ' 已经因海水湿透的耳套，一边对',
        urara.sex,
        '小声地询问道。',
      ]);
      await era.printAndWait([
        '而早就听到了靠近的脚步声，小担当对 ',
        you.get_colored_name(),
        ' 的出现也并不感到意外，只是匆忙挂起的笑容有些勉强。',
      ]);
      await urara.say_and_wait([
        '没关系哦 ',
        callname,
        '，只是在并跑之后，乌拉拉想到了一些事情而已……',
      ]);
      era.printButton(
        '「并跑的事？没关系，那个距离确实太长了，如果实在难受的话明天请假也没关系。」',
        1,
      );
      await era.input();
      await urara.say_and_wait([
        '不是的！只是在想……',
        callname,
        '，乌拉拉是不是输得太过分了呢？',
      ]);
      await era.printAndWait([
        '嗯？输得太过分……别人这样说倒还有迹可循，但是 ',
        urara.get_colored_name(),
        '？',
      ]);
      await era.printAndWait([
        '不过仔细想想，',
        you.get_colored_name(),
        ' 好像的确还没见过 ',
        urara.get_colored_name(),
        ' 因为输掉而表现出特别伤心失落的模样。',
      ]);
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一同在海边坐下，',
        you.get_colored_name(),
        ' 安静地等待着担当准备诉说的前因后果。',
      ]);
      await urara.say_and_wait([
        '这件事其实和 ',
        call_30,
        ' 有关，但是 ',
        call_30,
        ' 并没有说奇怪的话哦，只是我不太懂而已。',
      ]);

      era.printButton(`「${call_30.content}？是米浴吗？」`, 1);
      await era.input();

      await urara.say_and_wait([
        '嗯，那天安慰了因为训练赛失利的 ',
        call_30,
        ' 后，',
        call_30,
        ' 向我询问就算输掉也不会伤心的诀窍。',
      ]);
      await urara.say_and_wait(
        '就像一直说的那样，不去跑的话就没法得到一着对吧？我也想让大家看到我胜利的样子。',
      );
      await urara.say_and_wait(
        '所以我就想，要是我赢了，大家一定会更开心的，所以我想跑赢！',
      );
      await urara.say_and_wait([
        '但是当我这样说了之后，',
        call_30,
        ' 却向我说了很多以前从来没有想过的问题……',
      ]);
      era.drawLine();
      await rice.say_and_wait([
        '所以现在 ',
        r_call_u,
        ' 追求的胜利，难道只是为了别人吗……',
        r_call_u,
        '，是不是忽略了重要的事情？',
      ]);
      await rice.say_and_wait([
        '并不是说 ',
        r_call_u,
        ' 做得不对哦，愿意为他人取胜是件了不起的事，米浴也觉得没问题，但 ',
        r_call_u,
        ' 为自己着想的部分呢？',
      ]);
      await rice.say_and_wait([
        '米浴知道大家对 ',
        r_call_u,
        ' 的奔跑会投射不一样的期许，但 ',
        r_call_u,
        ' 自己对怎么看也很重要。',
      ]);
      await rice.say_and_wait([
        '只是一味认为自己尽力就好的话，不会因输掉比赛失落的 ',
        r_call_u,
        '，可能也并非 ',
        r_call_u,
        ' 的真心哦？',
      ]);
      if (era.get('love:30') >= 50) {
        await rice.say_and_wait([
          '而且又想要取得胜利，却又同时觉得输了也能够接受，也是一种傲慢哦？',
        ]);
        await rice.say_and_wait([
          '既然 ',
          r_call_u,
          ' 觉得输了也无所谓的话，那把 ',
          callname_30,
          ' 让给米浴也可以吧？',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait([
        '在那之后，我就一直在思考着 ',
        call_30,
        ' 的问题，直到今天并跑时，被大家甩在身后的时候。',
      ]);
      await urara.say_and_wait(
        '又只剩下我一个人，想到那个问题，胸口就好疼，但又和跑步时的感觉不一样……',
      );
      await urara.say_and_wait([
        callname,
        '，乌拉拉为什么会那么难受呢……还是不明白啊……',
      ]);
      if (era.get('love:30') >= 50) {
        await era.printAndWait([
          '就和 ',
          urara.get_colored_name(),
          ' 一样，',
          you.get_colored_name(),
          ' 也一时摸不着。很难想象平日里温柔的 ',
          rice.get_colored_name(),
          '，竟然会对好友做出如此霸道的宣言。',
        ]);
        await era.printAndWait([
          '不过「把 ',
          callname_30,
          ' 让给',
          rice.sex,
          '」什么的，',
          rice.get_colored_name(),
          ' 在有些时候意外的好酷啊。',
        ]);
        await era.printAndWait([
          '至于 ',
          rice.get_colored_name(),
          ' 为什么会变成这样，大概某人自己还是最清楚的那个人……话题偏了，言归正传。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '看到 ',
        urara.get_colored_name(),
        ' 虽然苦恼但真的意识到了问题的存在，',
        you.get_colored_name(),
        ' 反而有点高兴。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 从好友的角度给出的意见确实一针见血。不如说现在甚至要感谢 ',
        rice.get_colored_name(),
        ' 才对。',
      ]);
      await era.printAndWait([
        '输掉后会伤心难过是很正常甚至是重要的感情，但 ',
        urara.get_colored_name(),
        ' 却在无意间忽视了这一点。',
      ]);
      await era.printAndWait([
        '或许是因为',
        urara.sex,
        '认为「奔跑理应是快乐的」，所以才会将「输掉后伤心的那一面」藏了起来。',
      ]);
      await era.printAndWait([
        '听起来不太健康，但懂事的孩子或多或少会有勉强自己的现象，好在周围的大家都愿意对',
        urara.sex,
        '温柔以待。',
      ]);
      await era.printAndWait([
        '但当 ',
        urara.get_colored_name(),
        ' 把注意力重新放回被忽略的竞争意识，积攒的压力与对一着的渴望都会逐渐浮上水面。',
      ]);
      await era.printAndWait([
        '简单来说，虽然找到了下一步突破口，但总觉得不太利于小',
        urara.uma_sex_title,
        '的身心健康。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '话虽如此，该做的引导还是会做吧？这样的话，训练员',
        you.adult_sex_title,
        '（您）……',
      ]);
      era.printButton(
        '「乌拉拉真不知道吗？自己『渴望着第一名』，绝不是『输了也无所谓』的事。」（智力+10）',
        1,
      );
      era.printButton(
        '「从不甘心中延伸出的压力就是如此，学着接纳它们，应该可以跑得更快吧。」（速度+10）',
        2,
      );
      ret.push(await era.input());
      if (high_relation) {
        await era.printAndWait([
          '似乎明白了 ',
          you.get_colored_name(),
          ' 回复中的含义，',
          urara.get_colored_name(),
          ' 眼中失落的花朵也逐渐明亮起来。',
        ]);
        await urara.say_and_wait([
          '嗯！是说化悲伤为动力……好像也不对！但大概是这个意思吧？',
          call_61,
          ' 也这样说过！',
        ]);
        await era.printAndWait([
          '悄悄地用肢体与尾巴紧紧地缠住 ',
          you.get_colored_name(),
          ' 的身体，小',
          urara.uma_sex_title,
          '仅有一层薄薄的布料包裹的身体近在咫尺。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          '的脸颊与肌肤仿佛因夕阳的照射而染上了红晕，在略带咸味的晚风中向 ',
          you.get_colored_name(),
          ' 传递着湿润的温暖。',
        ]);
        await urara.say_and_wait([
          '而且 ',
          callname,
          ' 也在身边！就算会觉得难受，以后也一定能克服的——',
        ]);
      } else {
        await era.printAndWait([
          '尽管表情还表现得有些许犹豫，但小',
          urara.uma_sex_title,
          '的内心似乎已经接受了 ',
          you.get_colored_name(),
          ' 的答案。',
        ]);
        await urara.say_and_wait(
          '应该是这样没错，我自己对第一名的心情也是一样的，虽然心情很难受，但是……',
        );
        await era.printAndWait([
          '小心翼翼地靠在 ',
          you.get_colored_name(),
          ' 的身边，渴望着接触安抚的 ',
          urara.get_colored_name(),
          ' 将头与耳朵悄悄地枕在 ',
          you.get_colored_name(),
          ' 的肩上。',
        ]);
        await era.printAndWait([
          '细嫩的小手轻轻攀上了 ',
          you.get_colored_name(),
          ' 的手指，小',
          urara.uma_sex_title,
          '比人类稍高的体温通过手背将奇妙的温暖扩散到全身各处。',
        ]);
        await urara.say_and_wait([
          '但是就像 ',
          call_30,
          ' 说得那样，接受自己的渴望，一定不会是错的——',
        ]);
      }
      era.println();
      await era.printAndWait([
        '将逐渐舒缓完毕的双腿逐渐放平在沙滩上，',
        urara.get_colored_name(),
        ' 主动向 ',
        you.get_colored_name(),
        ' 发出了下一步的邀请。',
      ]);

      await urara.say_and_wait([
        '所以 ',
        callname,
        '，我现在想多跑两圈，要一起来训练吗？',
      ]);
      era.printButton(
        '「那样的话，那边还有能用的轮胎，要试试看吗？」（力量+10）',
        1,
      );
      era.printButton(
        '「可以啊，距太阳落山还有一段时间，要跑吗？」（根性+10）',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        '拍掉身上的沙子，',
        urara.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 一同从洒满夕阳的沙滩上站起来。',
      ]);
      await era.printAndWait([
        '与以往不同的是，迎着映成金黄色的大海，',
        urara.get_colored_name(),
        ' 的眼中，燃气了一点小小的斗志。',
      ]);
      await era.printAndWait([
        '或许',
        urara.sex,
        '完全理解自己的心情还需要更多时间，所以现在，',
        urara.teen_sex_title,
        '选择了最简单易懂的方式踏出了第一步。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '让乌拉拉直面自身的选择……不，这也是乌拉拉自己的选择才对。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '这样真的好吗？我不会比您更清楚的，至于您的想法……就算不问我也猜得到。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '虽然在您眼中我大概是个『失败主义者』，但无论何时，『急流勇退』也都不在选项之列。',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿（经典年）结束';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} accept_sex 是否接受性爱
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
    ) => {
      await inner_urara.say_as_unknown_and_wait('……这样也不错？');
      await inner_urara.say_as_unknown_and_wait(
        '是啊，合宿就要结束了呢，好好享受这个夜晚吧……',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' 原本以为这是个沉默又尴尬的一夜，但现在 ',
        urara.get_colored_name(),
        ' 却缩在 ',
        you.get_colored_name(),
        ' 的身旁，笑容中带着',
        urara.teen_sex_title,
        '的羞涩。',
      ]);
      await era.printAndWait([
        '……倒也不是说这就不沉默不尴尬，只是在这个房间中，坐在一旁手足无措的只有 ',
        you.get_colored_name(),
        ' 一人而已。',
      ]);
      await era.printAndWait([
        '那 ',
        urara.get_colored_name(),
        ' 呢？先是穿着睡衣连理由都没有的闯入 ',
        you.get_colored_name(),
        ' 住宿的房间，又自顾自地拉着 ',
        you.get_colored_name(),
        ' 一直玩到了睡前。',
      ]);
      await era.printAndWait([
        '而现在，完全赶不走的小',
        urara.uma_sex_title,
        '正擅自躺在自己铺开的床铺里，似乎誓要与',
        urara.sex,
        '的 ',
        callname,
        ' 共处一夜。',
      ]);
      await era.printAndWait([
        '偷偷打电话给其他人，让他们把小',
        urara.uma_sex_title,
        '拎回去……如果真这么简单就好了。',
      ]);
      await era.printAndWait([
        '感受着从薄被下伸出的小手给予的拉扯感，',
        you.get_colored_name(),
        ' 明白自己已经被 ',
        urara.get_colored_name(),
        ' 拦住了退路。',
      ]);
      await era.printAndWait([
        '虽然不知道',
        urara.sex,
        '在想什么，但恐怕只要拿起手机，就会立刻发生被小',
        urara.uma_sex_title,
        '以玩闹的名义扑倒的事故。',
      ]);
      await era.printAndWait([
        '不过也不能就这么算了。抱着最后一点「或许会有人发现」的希望，',
        you.get_colored_name(),
        ' 向 ',
        urara.get_colored_name(),
        ' 小声地确认道。',
      ]);
      era.printButton('「那个……乌拉拉，大家知道你来这里吗？」', 1);
      await era.input();
      await urara.say_and_wait(
        '不知道哦？要是大家知道的话，肯定不会让我来这里吧。',
      );
      await urara.say_and_wait([
        '不过不用担心！大家不知道的只有乌拉拉会去找 ',
        callname,
        ' 而已！',
      ]);
      await era.printAndWait([
        '似乎猜到了 ',
        you.get_colored_name(),
        ' 的目的，',
        urara.get_colored_name(),
        ' 眨了眨眼睛，如同面带微笑的肉食兽般用言语拦在了 ',
        you.get_colored_name(),
        ' 的退路上。',
      ]);
      await urara.say_and_wait([
        '所以 ',
        callname,
        ' 为什么关掉灯后还要坐着呢？已经到了要睡觉的时间了哦？',
      ]);
      await era.printAndWait([
        '结果又是意料之内的孤立无援。顺着小',
        urara.uma_sex_title,
        '的催促，',
        you.get_colored_name(),
        ' 听天由命的倒在了并排摆放的床铺上。',
      ]);
      await era.printAndWait([
        '早该知道的啊，即使平日里乖巧可爱，这个小家伙作为',
        urara.uma_sex_title,
        '的本能依旧是咬住不放的伏兵……',
      ]);
      await urara.say_and_wait(
        '真是大玩特玩了一番呢，在海里尽情地游泳，也和大家聊了好多事情！',
      );
      await urara.say_and_wait([
        '嘿嘿～留下好多夏天的回忆。',
        callname,
        '，明年我们也会来吗？',
      ]);
      await era.printAndWait([
        '夏天的回忆啊，如果最后不是被小',
        urara.uma_sex_title,
        '强硬的袭击就更好了……',
        urara.get_colored_name(),
        ' 应该不会是那样的孩子吧？',
      ]);
      era.printButton(
        '「应该可以吧，而且训练时的回忆也……这个时候还是不提了……」',
        1,
      );
      await era.input();
      if (high_relation) {
        await urara.say_and_wait([
          '没有哦！训练的回忆也很开心，跟 ',
          callname,
          ' 一起也是开心的回忆。',
        ]);
        await era.printAndWait([
          '两人间的距离似乎更近了一些，担当小小的手指伸进了另一边的床褥，轻挠着 ',
          you.get_colored_name(),
          ' 的掌心。',
        ]);
        await era.printAndWait([
          '小巧的身体安静地滑进 ',
          you.get_colored_name(),
          ' 的床铺，砰砰的心跳声隔着小',
          urara.uma_sex_title,
          '柔软的肉体向 ',
          you.get_colored_name(),
          ' 传递着富有节奏的温暖。',
        ]);
        await era.printAndWait([
          '现在月色正好，只要稍微偏一下视线，应该就能与',
          urara.teen_sex_title,
          '被月光照亮的樱瞳四目相对。',
        ]);
      } else {
        await urara.say_and_wait([
          '没关系！训练的回忆也很重要，而且 ',
          callname,
          ' 也帮了乌拉拉哦？',
        ]);
        await era.printAndWait([
          '不知何时悄悄地靠了过来，',
          urara.get_colored_name(),
          ' 的小手趁虚而入，捉住了 ',
          you.get_colored_name(),
          ' 想要缩回的手腕。',
        ]);
        await era.printAndWait([
          '安静地与 ',
          you.get_colored_name(),
          ' 挤进同一张床铺，在布料的轻声摩擦中，',
          you.get_colored_name(),
          ' 能感受到',
          urara.teen_sex_title,
          '正逐渐面向 ',
          you.get_colored_name(),
          ' 的侧脸。',
        ]);
        await era.printAndWait([
          '现在的小',
          urara.uma_sex_title,
          '正借着照进房间的月光，用复杂的眼神端详着 ',
          you.get_colored_name(),
          ' 的侧脸。',
        ]);
      }
      await era.printAndWait([
        '沉默之中，',
        urara.get_colored_name(),
        ' 的手逐渐缠住了 ',
        you.get_colored_name(),
        ' 的手指。明明还是夏天，',
        urara.get_colored_name(),
        ' 的手心却传来了冰凉的触感。',
      ]);
      await era.printAndWait([
        '在贴近的目光逐渐移开的瞬间，倚靠在 ',
        you.get_colored_name(),
        ' 身旁的小',
        urara.uma_sex_title,
        '再次开口了。',
      ]);
      await urara.say_and_wait(
        '我想了很久呢，结果发现，以前只是给大家看见笑脸的乌拉拉，总觉得就像……就像……',
      );
      await urara.say_and_wait(
        '就像……『随波逐流』？是这个词吧？乌拉拉应该没有念错对吧？',
      );

      era.printButton('「……乌拉拉觉得自己以前是在随波逐流吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '我差点就忘了该怎么做才好……心情和愿望并不冲突也是，自己想要什么也是。',
      );
      await urara.say_and_wait(
        '但一想到以前总会输掉，就感觉心里慌慌的，结果连平常都紧张起来了……',
      );
      await era.printAndWait(
        '原来是对心理变化太敏感而感到不安，所以本能地想要找靠得住的大人抚平心情啊，那这样的话……',
      );

      era.printButton(
        '「我明白了，乌拉拉如果觉得难受的话说出来就好，而且——」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '而且 ',
        callname,
        ' 会一直陪着乌拉拉？嘿嘿～我也知道哦？这是已经约好的事情吧。',
      ]);
      await era.printAndWait([
        '似乎对早就猜到的回答并不介意，',
        you.get_colored_name(),
        ' 的耳边传来了',
        urara.teen_sex_title,
        '满足的轻笑。',
      ]);
      await era.printAndWait([
        '从身侧环住离',
        urara.sex,
        '较近的手臂，小',
        urara.uma_sex_title,
        '轻柔的吐息声痒痒的拨弄着 ',
        you.get_colored_name(),
        ' 的耳畔。',
      ]);
      await urara.say_and_wait([
        '我明白 ',
        callname,
        ' 很辛苦，所以这样就好了哦？',
      ]);
      await era.printAndWait([
        '虽然绝对不想无端揣测 ',
        urara.get_colored_name(),
        ' 的，但这下让人不得不再次怀疑其目的性了。',
      ]);
      await era.printAndWait([
        '而似乎是要「验证」',
        you.get_colored_name(),
        ' 的担忧，在 ',
        you.get_colored_name(),
        ' 陷入僵直的沉默中，怀中的小',
        urara.uma_sex_title,
        '继续说着亲热般的悄悄话。',
      ]);

      await urara.say_and_wait([
        '那个……',
        callname,
        ' 觉得，乌拉拉是不是有所成长了呢？',
      ]);
      era.printButton(
        '「如果是问有没有晒黑的话，那我可没法回答乌拉拉啊。」（好感+10）',
        1,
      );
      era.printButton(
        '「如果说乌拉拉比以前更成熟了，乌拉拉会开心吗？」（爱慕+2）',
        2,
      );
      if (era.get('love:52') >= 50 && accept_sex && urara.sex_code - 1 !== 0) {
        era.printButton(
          '「如果说要留下些『特殊的回忆』，乌拉拉会同意吗？」（好感+10，爱慕+2）',
          3,
        );
      }
      const ret = await era.input();
      if (ret !== 3) {
        await era.printAndWait([
          '听到 ',
          you.get_colored_name(),
          ' 故意用缺乏关照',
          urara.teen_sex_title,
          '心的方式与',
          urara.sex,
          '对答，',
          urara.teen_sex_title,
          '从被子下略带不满地轻轻掐了下 ',
          you.get_colored_name(),
          ' 的手腕。',
        ]);
        await era.printAndWait([
          '但在转头看去时，',
          urara.get_colored_name(),
          ' 却已经钻进了臂弯，将头枕在 ',
          you.get_colored_name(),
          ' 的肩膀上，对 ',
          you.get_colored_name(),
          ' 静静的笑着。',
        ]);
        await urara.say_and_wait([
          callname,
          '，明天就要回去了对吧？那今天好像还需要早点睡呢。',
        ]);
        await urara.say_and_wait([
          '诶嘿嘿～真是特别的一晚，如果下次，能让 ',
          callname,
          ' 看到不一样的乌拉拉就好了……',
        ]);
        await urara.say_and_wait('那么，晚安哦？');
        await era.printAndWait([
          '……至少，怀疑没有真的被验证已经是万幸了对吧？随着 ',
          urara.get_colored_name(),
          ' 放松了身体，',
          you.get_colored_name(),
          ' 也逐渐松了口气。',
        ]);
      } else {
        await era.printAndWait([
          '在听到了 ',
          you.get_colored_name(),
          ' 半开玩笑的请求后，',
          urara.teen_sex_title,
          '先是呆呆地瞪大了眼睛，随后任由羞涩爬上了',
          urara.sex,
          '的脸颊。',
        ]);
        await urara.say_and_wait([
          callname,
          ' 总是在说些让人为难的话，但如果 ',
          callname,
          ' 希望的话……',
        ]);
        await era.printAndWait([
          '用身体撑起轻薄的夏被，',
          urara.teen_sex_title,
          '神情变得温润起来，',
          urara.sex,
          '轻盈地跨坐到 ',
          you.get_colored_name(),
          ' 身前，将手伸向了自己的衣扣。',
        ]);
        await urara.say_and_wait([
          '大家总在说夏季合宿不可以没有青春呢，虽然乌拉拉不太懂，但 ',
          callname,
          ' 也在期待着对吧？',
        ]);
        await era.printAndWait([
          '睡衣滑落，释放出',
          urara.teen_sex_title,
          '的清香，褪去最后一丝隔阂的小',
          urara.uma_sex_title,
          '樱瞳中映着仅为 ',
          you.get_colored_name(),
          ' 而满溢的情欲。',
        ]);
        await era.printAndWait([
          '在轻声细语中诉说着纯粹的欲望，',
          urara.teen_sex_title,
          '在柔和的微光中轻声喘息，向 ',
          you.get_colored_name(),
          ' 展示着不加粉饰的肉体。',
        ]);
        await era.printAndWait(
          '敏感的乳首在情人面前忘乎所以地挺起，似乎已经做好了被玩赏到直至因快乐而昏厥的准备。',
        );
        if (era.get('talent:52:乳房尺寸') > 0) {
          await era.printAndWait([
            '两只硕大的小怪物此时终于摆脱了睡衣的束缚，一对魅乳在',
            urara.teen_sex_title,
            '娇小的身体上下作地摇晃着，',
          ]);
          await era.printAndWait(
            '就连榨取母乳时让雌性屈服的手法都无须遵守，只要轻轻捧在手中并用舌尖稍加玩弄，',
          );
          await era.printAndWait([
            '这对忍耐已久的乳袋，便会顺从地将浓密粘稠的乳汁，连同小',
            urara.uma_sex_title,
            '失神的娇声呜咽一同挤出。',
          ]);
        }
        await era.printAndWait(
          '背在身后的十指躁动不安地探入被作为性器使用的淫荡后穴，在爱人面前急不可耐地激烈自渎着，',
        );
        await era.printAndWait([
          '褪去了平日的乖巧与可人，为大家而奔跑的小偶像，现在也不过是 ',
          callname,
          ' 专属的菊穴奴隶而已。',
        ]);
        await era.printAndWait([
          '而小',
          urara.uma_sex_title,
          '那只轻轻压在 ',
          you.get_colored_name(),
          ' 下体上的幼穴，现在也像迫不及待的接纳与吞吐爱欲的汁水般微微颤抖，',
        ]);
        await era.printAndWait([
          '伴随着',
          urara.teen_sex_title,
          '燥热的身体扭动着淫靡的舞蹈，在被求爱者的小腹上不断滴下温热的银丝。',
        ]);
        await urara.say_and_wait([
          '哈啊～现在教教乌拉拉吧……嗯～',
          callname,
          '～究竟在期待什么呢～？',
        ]);
        if (era.get('flag:惩戒力度') >= 2) {
          await era.printAndWait([
            '或许，眼前展示着淫荡的展示着身体的小母马比 ',
            you.get_colored_name(),
            ' 还要像只',
            era.get('flag:惩戒力度') === 2 ? '性奴' : '孕袋',
            '，',
            urara.sex,
            '或许更希望被 ',
            you.get_colored_name(),
            ' 所蹂躏才对。',
          ]);
          await era.printAndWait([
            '但是',
            urara.sex,
            '终究是 ',
            you.get_colored_name(),
            ' 的「',
            urara.uma_sex_title,
            '大人」，凌辱不是下贱的 ',
            you.get_colored_name(),
            ' 可以满足',
            urara.sex,
            '的。',
          ]);
          await era.printAndWait([
            '但至少作为',
            era.get('flag:惩戒力度') === 2 ? '性奴' : '孕袋',
            '，',
            you.get_colored_name(),
            ' 依旧能为',
            urara.sex,
            '带来快乐。',
          ]);
          await era.printAndWait([
            '轻柔而享受的含住从胸前的山谷中探出的扶她',
            urara.uma_sex_title,
            '的龟头，',
            you.get_colored_name(),
            ' 用舌头小心翼翼地服侍起了担当的肉棒。',
          ]);
          await era.printAndWait([
            '没关系的，只要',
            urara.sex,
            '能高兴就好了，只要 ',
            urara.get_colored_name(),
            ' 开心就好了，就算是从前，我们不也是这样的吗……',
          ]);
          await era.printAndWait(
            '用舌尖在口中一点点挑开周围的包皮，再用能留下印记的力度吮吸与舔舐，一切都像是早已刻入了身体的本能。',
          );
          await era.printAndWait([
            '可是看着如此努力地侍奉着自己的奴隶',
            urara.uma_sex_title,
            '，',
            urara.get_colored_name(),
            ' 的眼里却闪过了一丝难以言喻的悲伤。',
          ]);
          await era.printAndWait([
            '是哪里让 ',
            urara.get_colored_name(),
            ' 难受了吗？是自己出错了吗？不要……得做的更好才行，这样一点都不合适',
            urara.sex,
            '……',
          ]);
          await era.printAndWait([
            '看到服侍对象的神情，',
            you.get_colored_name(),
            ' 就连思维都被彻底改造的大脑中，滑过了无数因便器失格产生的自我怀疑。',
          ]);
          await era.printAndWait([
            '但在 ',
            you.get_colored_name(),
            ' 有所迟疑时，',
            urara.get_colored_name(),
            ' 却从 ',
            you.get_colored_name(),
            ' 口中轻轻抽出了肉棒，反过来温柔地按住了 ',
            you.get_colored_name(),
            ' 的身体。',
          ]);
          await urara.say_and_wait([
            '没关系的，就算已经回不到从前……这样的话，就让我来，主动回应 ',
            callname,
            ' 的期待吧？',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32_after_sex: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {boolean} do_sex 是否性爱
     */
    const f = async (urara, inner_urara, you, do_sex) => {
      if (do_sex) {
        await era.printAndWait([
          '缩在 ',
          you.get_colored_name(),
          ' 身旁轻声道了晚安，得到了满足的 ',
          urara.get_colored_name(),
          ' 终于安心的睡去了。',
        ]);
        await era.printAndWait([
          '那小小的',
          urara.uma_sex_title,
          '是否有所成长呢？这个问题，或许由',
          urara.sex,
          '自己来解答会更好吧……',
        ]);
        await era.printAndWait([
          '轻轻抱住那份与身体紧贴的温柔，',
          you.get_colored_name(),
          ' 也慢慢的合上了眼睛。',
        ]);
        await era.printAndWait(
          '不论如何，今年意外纷繁的夏季都已经临近尾声了。',
        );
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '……不，才没觉得不错，现在收回发言……果然不行的吧……',
      );
      await inner_urara.say_as_unknown_and_wait('……呜……');
    };
    f.title = title;
    return f;
  })(),
  ws_47_43: (() => {
    const title = '「改变」&「选择」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} m_summer1 是否触发了经典年夏合宿开始事件
     * @param {number} fans 粉丝数
     * @param {number} best_mvp 目前重赏最佳名次，Infinity 是未参加过重赏
     * @param {PrintedSpan} negi_sta 根岸锦标（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      m_summer1,
      fans,
      best_mvp,
      negi_sta,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '听说有名叫乌拉拉的赛',
        urara.uma_sex_title,
        '，不管跑输几次都依旧很努力。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '在赛场内四处都可以听到这种说法的某一天——',
      );
      era.drawLine();
      await urara.say_and_wait(
        '唔——虽然已经想好了，但要跑赢还是好难！感觉大家都『咻』地就冲到前面了——',
      );
      await era.printAndWait([
        '模拟赛的赛场内，令人安心与信赖的又落在最后，',
        urara.get_colored_name(),
        ' 有点气鼓鼓的扑到了 ',
        you.get_colored_name(),
        ' 的怀里。',
      ]);
      await era.printAndWait(
        '总觉得在变得会表达对比赛失利的不甘心后，这团毛茸茸的粉色变得更像小动物了。',
      );
      if (!m_summer1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' 究竟是什么时候突然变得这么有干劲的呢？在夏季合宿的期间是不是发生了什么？',
        ]);
        await era.printAndWait([
          '不过万幸没出什么大问题，看来 ',
          urara.get_colored_name(),
          ' 自己一个人也可以好好成长，真是个好孩子啊……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '细细揉搓着 ',
        urara.get_colored_name(),
        ' 的身体，一脸被治愈的 ',
        you.get_colored_name(),
        ' 与怀中还在闹别扭的可爱生物形成了鲜明对比。',
      ]);
      await era.printAndWait([
        '当然 ',
        you.get_colored_name(),
        ' 现在也明白了',
        urara.sex,
        '平时总垫底的原因：本来就集中力不足，再加上是日常比赛就更用不上力了。',
      ]);
      await era.printAndWait([
        '没必要苛求，',
        urara.uma_sex_title,
        '的身体是有极限的，日常没必要绷得太紧，对 ',
        urara.get_colored_name(),
        ' 来说这点则更重要了。',
      ]);
      await era.printAndWait(
        '最初时偶尔还会觉得这是需要解决的问题，但现在的话已经差不多摸清最适合小担当的成长模式了。',
      );
      await era.printAndWait([
        '现在只要能在正赛之前一点点积累胜利的条件，并在正赛时拿出成绩，对于 ',
        urara.get_colored_name(),
        ' 来说就算成功。',
      ]);

      era.printButton(
        '「不用着急，先冷静一下，乌拉拉觉得要怎样才能跑赢呢？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '只要乌拉拉一个人参加比赛就好啦！如果只有我在跑的话，那第一名也一定就是我呢！',
      );
      await era.printAndWait([
        '啊？什么？一时没分清 ',
        urara.get_colored_name(),
        ' 是否在开玩笑，',
        you.get_colored_name(),
        ' 差点脚底一滑摔在训练场边上。',
      ]);

      await inner_urara.say_as_unknown_and_wait('您、啊哈……总之快说点什么……');
      era.printButton('「这个建议，大概能让副会长躺好久吧。」（好感+15）', 1);
      era.printButton('「难、难道乌拉拉你真的是天才？」（爱慕+3）', 2);
      ret.push(await era.input());

      await urara.say_and_wait([
        '诶嘿嘿～被 ',
        callname,
        ' 笑话了！不过说得也是哦，那样已经不是比赛了啊。',
      ]);
      await urara.say_and_wait(
        '但是果然还是有点生自己的气，虽然明白不用把自己逼得太紧，但我还是好慢啊……',
      );
      await urara.say_and_wait(
        '就算我再怎么输，不会变的大家都不会责怪我，所以我必须得自己早点做出改变才行。',
      );

      era.printButton('「但是认清自己后，乌拉拉的确变得更强了对吧？」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯，就像 ',
        callname,
        ' 说的，乌拉拉也变强了，就连比赛时来应援的人也更多了。',
      ]);
      await urara.say_and_wait(
        '商店街的大家说，后援会的人也越来越多了，还有很多新粉丝在鼓励在我放开去跑哦！',
      );
      await era.printAndWait([
        '的确，最近比赛时很多生面孔也加入了对 ',
        urara.get_colored_name(),
        ' 的应援，连日常的活动赛时来看',
        urara.sex,
        '的人也变得非常多。',
      ]);
      await era.printAndWait([
        '而且就算知道 ',
        urara.get_colored_name(),
        ' 的发挥可能并不稳定，应援的各位依旧每次都会为',
        urara.sex,
        '送上必胜的祝福。',
      ]);
      await era.printAndWait([
        '或许大家除了被 ',
        urara.get_colored_name(),
        ' 的热情打动外，还想看',
        urara.sex,
        '能从大多数的失败中，把握住的最关键的胜利吧。',
      ]);
      await urara.say_and_wait(
        '不过在听到我说要拼尽全力去获胜时，商店街的很多叔叔阿姨们都露出了担忧的神色呢。',
      );
      await urara.say_and_wait(
        '很多照顾我的人还是很担心我会受伤，但是现在我已经不会再犹豫了，所以……',
      );
      await era.printAndWait([
        '啊，是他们啊。听着 ',
        urara.get_colored_name(),
        ' 的描述，',
        you.get_colored_name(),
        ' 很快便回想起了在那个宣传工作的下午与自己攀谈的女性。',
      ]);
      await era.printAndWait([
        '不过既然 ',
        urara.get_colored_name(),
        ' 都不会再犹豫了，那解决矛盾也只是时间问题了。',
      ]);

      era.printButton(
        '「所以用类似漫画的台词来说，只要在接下来的比赛中展示乌拉拉的决心就好了。」',
        1,
      );
      await era.input();

      await urara.say_and_wait('嗯！就是这样！我会继续加油的——！');
      await era.printAndWait([
        '话虽如此，现在还是缺少一个契机。考量着「决心的展现」，',
        you.get_colored_name(),
        ' 再次陷入沉思。',
      ]);
      await era.printAndWait([
        '或许未来某天 ',
        urara.get_colored_name(),
        ' 也会有主动想要参与的重要比赛，届时',
        urara.sex,
        '会选择什么样的比赛呢？',
      ]);
      await era.printAndWait([
        '而且说到这个，资深级的赛程也该定了吧？顺着对未来的构思，',
        you.get_colored_name(),
        ' 低头翻找起自己的笔记。',
      ]);
      await era.printAndWait([
        '年末具体要做什么不太好想，但明年的第一个阶段性目标……虽然也不是非它不可，但总之先试试 ',
        negi_sta,
        '？',
      ]);
      era.println();
      if (best_mvp === Infinity) {
        await era.printAndWait([
          '经历了一年多的调整，现在的 ',
          urara.get_colored_name(),
          ' 应该已经拥有了能角逐重赏的实力。',
        ]);
        await era.printAndWait([
          '也算是先试试水温和深浅，或许可以将类似的比赛作为 ',
          urara.get_colored_name(),
          ' 参与重赏的起点也说不定。',
        ]);
      } else if (best_mvp === 1) {
        await era.printAndWait([
          urara.uma_sex_title,
          '的身体是不断变化的，资深年时 ',
          urara.get_colored_name(),
          ' 可能也会需要因常态的改变而调整。',
        ]);
        await era.printAndWait([
          '既然现在 ',
          urara.get_colored_name(),
          ' 已经有了参与重赏的实力，那用重赏比赛为新一年试探一下也不错。',
        ]);
      } else {
        await era.printAndWait([
          '虽然以前已经试过参加重赏了，但 ',
          urara.get_colored_name(),
          ' 即使尽力去跑也还是没能赢下来，看来当时还是太早了。',
        ]);
        await era.printAndWait([
          '不过现在的 ',
          urara.get_colored_name(),
          ' 应该已经做足了准备才对，那从现在开始进行再挑战应该也无妨。',
        ]);
      }
      if (fans >= 25000) {
        era.println();
        await era.printAndWait(
          '而且，之前积攒粉丝和声誉的策略在这里也能发挥作用，比如粉丝投票制。',
        );
        await era.printAndWait(
          '在赛事官方允许的策略里，如果粉丝支持度足够高，还可以通过发起投票制来拓宽参加比赛的范围。',
        );
        await era.printAndWait([
          '还有以前也提到过的，在比赛时声援',
          urara.sex,
          '的人足够多，那 ',
          urara.get_colored_name(),
          ' 确实可以跑得比平常更快。',
        ]);
        await era.printAndWait([
          '听起来像在作弊对吧？但这也的确是 ',
          urara.get_colored_name(),
          ' 实力的一部分，至少这应该是「三女神」所允许的部分。',
        ]);
        await era.printAndWait([
          '说起来，',
          urara.get_colored_name(),
          ' 现在具体有多少粉丝了来着？啊，找到了……嗯？！',
        ]);
        await era.printAndWait(
          '重赏……不对，如果是这个支持力，别说是可以参与的重赏了，就连「有马纪念」都……',
        );
        await era.printAndWait([
          '一点点翻阅着手机里的信息，',
          you.get_colored_name(),
          ' 逐渐产生了一个大胆的设想。',
        ]);
      }
      era.println();
      await era.printAndWait(
        '虽然不管要怎样订计划，在那之前也还是要先问问当事人自己的看法才行。',
      );
      await era.printAndWait([
        '放下笔记和手机，',
        you.get_colored_name(),
        ' 看向了从刚才开始就望着训练场上飞驰的同学们出神的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '在感受到 ',
        you.get_colored_name(),
        ' 的目光后，小',
        urara.uma_sex_title,
        '也立刻期待已久的向 ',
        you.get_colored_name(),
        ' 送上了积极的信号。',
      ]);
      await urara.say_and_wait([
        callname,
        '，我已经休息好了！现在的话应该可以开始训练了吧？',
      ]);

      era.printButton(
        '「可以啊。不过在那之前，乌拉拉自己对明年的规划有什么想法呢？」',
        1,
      );
      await era.input();

      urara.say(['明年的规划？嘿嘿～我就在想 ', callname, ' 也该问了呢！']);
      era.printButton('更远的距离（中&长距离适性提升）', 1);
      era.printButton('尝试草地（草地适性提升）', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await urara.say_and_wait(
          '如果能跑得更远的话，就会有更多人注意到我吧？',
        );
      } else {
        await urara.say_and_wait(
          '如果能去跑草地的话，我就能挑战更多比赛了吧？',
        );
      }

      await era.printAndWait('嗯？回答的很干脆，是什么时候想好的？等下……？');
      await era.printAndWait([
        '听到 ',
        urara.get_colored_name(),
        ' 不假思索的回答，',
        you.get_colored_name(),
        ' 有点欣慰，但又立刻发觉哪里不对。「',
        callname,
        '也该问了」，是什么意思？',
      ]);
      await era.printAndWait([
        '不过就算是被小 ',
        urara.get_colored_name(),
        ' 读了心，也不是很要紧的事……吧？',
      ]);
      await era.printAndWait([
        '没敢去看一旁的小担当的笑容是否有深长的意味，',
        you.get_colored_name(),
        ' 逃也似的让自己进入了训练员模式。',
      ]);

      era.printButton(
        '「好，那等下再一起去商店街，现在总之先跑一圈试试看吧！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('哦！乌拉拉GO——！');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 的指引下，早已做好准备的小',
        urara.uma_sex_title,
        '，立刻以成长后的身影冲进了训练场上奔跑的人群当中。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '——虽然未来无法轻易预见，但如今',
        urara.sex,
        '的成长，也绝对不会是错的',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        '没想到就连乌拉拉也要适时的做出选择了，真是的，您不是',
        urara.sex,
        '的训练员吗？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '并不是在说要',
        urara.sex,
        '永远被您保护着哦？只是我觉得那样也不错罢了。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '总有一天，',
        urara.sex,
        '也会有自己想要主动追求的目标啊……',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      if (fans >= 25000) {
        era.println();
        await inner_urara.say_as_unknown_and_wait(
          '抱歉，在离开前，请您……听我一言。',
        );
        await inner_urara.say_as_unknown_and_wait([
          '虽然并不是说乌拉拉不可以挑战重赏，但您没必要为了一个契机给',
          urara.sex,
          '留下无法达成的期望。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '一直以来让乌拉拉赢了这么多次我很感谢您，也欣慰于',
          urara.sex,
          '能够取得胜利。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '甚至您想利用',
          urara.sex,
          '来牟利，我都可以睁一只眼闭一只眼，但是……',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '但是想要尝试着站上顶点，就要有承担重量的觉悟，而',
          urara.sex,
          '……并没有您想象中那么坚强。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '就算曾经一直为之努力的您早已拥有余力，也没法帮',
          urara.sex,
          '分担一片羽毛。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '请不要给',
          urara.sex,
          '过多的希望，',
          urara.sex,
          '想要的，只是和大家分享那份小小的幸福不是吗？',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '总之，请您再仔细考虑一下，拜托了……',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '前进的决心！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {number} best_mvp 目前重赏最佳名次，Infinity 是未参加过重赏
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      best_mvp,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '为什么……明明我都说了……为什么还要这样做……您这个人，真是……',
      );
      era.drawLine();
      await era.printAndWait([
        '站在宽敞的选手通道内，',
        urara.get_colored_name(),
        ' 正与周围紧绷的气氛格格不入的左顾右盼着。',
      ]);
      await era.printAndWait([
        '而站在兴奋过头的小',
        urara.uma_sex_title,
        '旁边的，则是',
        urara.sex,
        '略微有些头疼的 ',
        callname,
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！没想到我竟然真的参加了 ',
        arim_kin,
        ' 呢！',
      ]);
      await era.printAndWait([
        '实际上确实出乎很多人的意料，就连组织投票的 ',
        you.get_colored_name(),
        ' 都没想到粉丝投票制这招竟然真的能行。',
      ]);
      await era.printAndWait([
        '本来大胆的想法也只是大胆的想法，但 ',
        you.get_colored_name(),
        ' 也还是低估了喜欢 ',
        urara.get_colored_name(),
        ' 的各位那高涨的热情。',
      ]);
      await era.printAndWait([
        '随便撇一眼周围的',
        urara.uma_sex_title,
        '与训练员们杀气腾腾的脸就看得出来，这里唯一不够紧张的可能只有 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～大家的表情都好紧张啊……乌拉拉是不是也要表现的更紧张一点呢？',
      ]);
      await era.printAndWait([
        '顺着周围参赛者散发出的氛围压低了声线，',
        urara.get_colored_name(),
        ' 轻轻拽了拽 ',
        you.get_colored_name(),
        ' 的衣角。',
      ]);

      era.printButton(
        '「没、没关系，乌拉拉不用紧张的，只要把它当做一次对未来的模拟……」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？',
        callname,
        ' 是觉得乌拉拉下一次还可以来吗？看来 ',
        callname,
        ' 和大家都很信任乌拉拉呢！',
      ]);
      await urara.say_and_wait([
        '但这可是 ',
        arim_kin,
        ' 哦！',
        urara.get_colored_name(),
        ' 还被大家期望着，所以如果能赢、如果能赢的话——！',
      ]);
      await era.printAndWait([
        '听到 ',
        urara.get_colored_name(),
        ' 对胜利的愿望，',
        you.get_colored_name(),
        ' 本就疼痛的大脑因为负罪感更加摇摇欲坠了。',
      ]);
      if (best_mvp === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' 真的在思考赢下来的事，有可能吗？不知道啊。但既然赢下过重赏，那稍微寄予一些希望也……',
        ]);
        await era.printAndWait(
          '也什么也，问题大了去了，那能一样吗？就算不问三女神都知道这根本就不一样啊。',
        );
      } else {
        await era.printAndWait([
          '能赢的希望，何止有点渺茫，如今或许只有奇迹发生才能让小',
          urara.uma_sex_title,
          '赢下这场比赛吧。',
        ]);
        await era.printAndWait([
          '就算连三女神都能看见小',
          urara.uma_sex_title,
          '的努力，现在能回应',
          urara.sex,
          '的也只有愿意为',
          urara.sex,
          '应援的各位而已。',
        ]);
      }
      era.println();
      await era.printAndWait(
        '这下真是糟了，简直是训练员失格啊，果然现在就参与有马的决定还是太草率了。',
      );
      await era.printAndWait([
        '虽然本来也没想着胜利，但至少这次比赛，',
        urara.get_colored_name(),
        ' 如果能有充足的准备再来的话……',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '乌拉拉没关系的哦？',
          callname,
          ' 只要和平时一样就好，因为我是不会浪费这次机会的！',
        ]);
        await era.printAndWait([
          '察觉到 ',
          you.get_colored_name(),
          ' 与以往不同的表情，小',
          urara.uma_sex_title,
          '大大方方的抱住了 ',
          you.get_colored_name(),
          '，露出了安抚孩童般的母亲的笑容。',
        ]);
        await urara.say_and_wait([
          '第一次惨败就在第二次时再站起来就好，乌拉拉不会有事的！那么 ',
          callname,
          '，要待会再见了！',
        ]);
        await urara.say_and_wait('比赛的时候，要一直注视着乌拉拉哦！');
      } else {
        await urara.say_and_wait([
          callname,
          ' 觉得苦恼吗？有什么关系嘛，我们一直以来不都是这么乱来吗？',
        ]);
        await era.printAndWait([
          '似乎是看穿了 ',
          you.get_colored_name(),
          ' 的心思，',
          urara.get_colored_name(),
          ' 突然安静地抱了过来，笑容温柔得像个无可奈何的母亲。',
        ]);
        await urara.say_and_wait([
          '而且已经到了要上场的时间了哦？',
          callname,
          ' 就和平常一样在看台上和大家一起等着我回来吧！',
        ]);
        await urara.say_and_wait('和以前一样，不要将眼神移开哦？');
      }
      era.println();
      await era.printAndWait([
        '在漫长的一瞬后小',
        urara.uma_sex_title,
        '的拥抱戛然而止，而紧接在 ',
        you.get_colored_name(),
        ' 的耳中响起的，则是比赛时登台的预告。',
      ]);
      await urara.say_and_wait([
        '心情变得平静一点了吗？嘿嘿～',
        callname,
        ' 总是容易积攒压力呢！',
      ]);
      await urara.say_and_wait([
        '但是有些事只有 ',
        callname,
        ' 可以完成哦？因为我们是 ',
        callname,
        ' 和担当嘛！',
      ]);
      await era.printAndWait([
        '仿佛成为了出战前的既定仪式，背着通道外的光线，',
        urara.get_colored_name(),
        ' 笑着向 ',
        you.get_colored_name(),
        ' 做着最后的挥手致意。',
      ]);
      await era.printAndWait([
        '同样挥手目送着 ',
        urara.get_colored_name(),
        ' 跑向赛场，终于 ',
        you.get_colored_name(),
        ' 也用力按了按太阳穴，转身走向了自己该去的地方。',
      ]);
      era.println();
      await era.printAndWait('但是。');
      await inner_urara.say_as_unknown_and_wait(
        '……在离开之前，您可以再回答我一个问题吗？',
      );
      await era.printAndWait(
        '站在空无一人的选手通道中，一切融为灰白的环境中仿佛时间都按下了暂停键。',
      );
      await era.printAndWait([
        '而如今面向 ',
        you.get_colored_name(),
        ' 径直走来的，则是挂着陌生阴沉表情的，一直以来最熟悉的樱粉色。',
      ]);
      await era.printAndWait([
        '但',
        urara.sex,
        '不是 ',
        urara.get_colored_name(),
        '，尽管声音一模一样，生气时的小脸也完全一致，但',
        urara.sex,
        '绝对不是 ',
        urara.get_colored_name(),
        '；',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 既不会彬彬有礼到陌生，也绝对不会摆出如此阴暗复杂的表情；',
      ]);
      await era.printAndWait([
        urara.sex,
        '当然不是 ',
        urara.get_colored_name(),
        '，现在 ',
        urara.get_colored_name(),
        ' 已经走上赛场，既不会凭空从后方出现，也不会还穿着校服；',
      ]);
      await era.printAndWait([
        '但',
        urara.sex,
        '或许也是「',
        inner_urara.get_colored_actual_name(),
        '」，或许 ',
        you.get_colored_name(),
        ' 和',
        urara.sex,
        '在梦中见过许多次，只是每当梦醒时分一切都会烟消云散——',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '我明明已经告诉过您了，为什么还要勉强',
        urara.sex,
        '……',
      ]);
      await era.printAndWait([
        '在连理智似乎都逐渐凝固的空间中，严厉的质问声正以 ',
        inner_urara.get_colored_name(),
        ' 的模样不断逼近至 ',
        you.get_colored_name(),
        ' 的胸前。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '我问您，为什么要让',
        urara.sex,
        '现在参加比赛……我在问您为什么要让乌拉拉现在就参加有马！',
      ]);
      await era.printAndWait([
        '恍惚中的迟疑似乎点燃了',
        urara.teen_sex_title,
        '的怒火，积蓄的愤怒以',
        urara.uma_sex_title,
        '的力度将 ',
        you.get_colored_name(),
        ' 的身体摁在了通道的墙面上。',
      ]);
      await era.printAndWait([
        '撞击的痛感从后背逐渐扩散至全身，也给迷惘中的 ',
        you.get_colored_name(),
        ' 带来了一点刺激性的清醒。',
      ]);
      await era.printAndWait([
        '被凝固的世界并不是梦境，眼前的「',
        inner_urara.get_colored_actual_name(),
        '」也真实的存在着。',
      ]);
      await era.printAndWait([
        '但是扯住身体的重压只持续了几秒，娇小的樱色',
        urara.uma_sex_title,
        '就如同哭泣般无力的松开了 ',
        you.get_colored_name(),
        ' 的衣襟。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '所以才一个两个都一样，就算放着不管，也会不停地做出改变，哪怕会害得自己……',
      );
      await era.printAndWait([
        '没能将呜咽般的话语延续下去，带着抑制住悲伤的微笑，「',
        inner_urara.get_colored_actual_name(),
        '」抬头抚平了 ',
        you.get_colored_name(),
        ' 的衣角。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '抱歉，是我失态了。从一开始，我就不该指望您会停下的……',
      );

      era.printButton(
        '「对不起，虽然不知道发生了什么，但是我得去看担当的比赛……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对眼前称得上诡异的情况，',
        you.get_colored_name(),
        ' 却冷静的出奇，仅是打算绕开眼前的',
        urara.uma_sex_title,
        '，再去守望 ',
        urara.get_colored_name(),
        ' 的比赛。',
      ]);
      await era.printAndWait([
        '就像现在面对的不止是「异样的 ',
        urara.get_colored_name(),
        '」，也是一位虽然不知姓名但却熟悉已久的「麻烦朋友」。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '您是在担心『乌拉拉』吗？没关系的，',
        urara.sex,
        '还不至于让你为此如此着急。',
      ]);

      era.println();
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          '不过您的心情我理解哦？您的确在真心的关照乌拉拉，也难怪乌拉拉会如此依靠您。',
        );
        await era.printAndWait([
          '温和地挡在 ',
          you.get_colored_name(),
          ' 的身前，未闻其名的麻烦朋友像在安抚心绪般露出了与小',
          urara.uma_sex_title,
          '如出一辙的笑容。',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          '明明平时对乌拉拉也没有多关怀的样子？为什么这么紧张呢？训练员',
          you.adult_sex_title,
          '（您）？',
        ]);
        await era.printAndWait([
          '不依不饶的拦下 ',
          you.get_colored_name(),
          ' 的去路，连姓甚名谁都是未知的「朋友」嘲笑着眼前莫名心慌的不及格大人。',
        ]);
      }
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        '这不就是您与',
        urara.sex,
        '想做出的改变吗？所以，现在请稍微耐心一点吧。',
      ]);
      await era.printAndWait([
        urara.sex,
        '说的或许没错……不对，',
        urara.sex,
        '大概是正确的。在静默的空气中，',
        you.get_colored_name(),
        ' 无条件信任般的停下了脚步。',
      ]);
      await era.printAndWait([
        '转身望去，换上了不喜不悲的「面具」的「',
        urara.sex,
        '」在原地等待着「您」的注意。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '现在，让我给您讲个小故事吧，不需要多少时间的……',
      );
      await era.printAndWait([
        '向前一步与 ',
        you.get_colored_name(),
        ' 并肩望向通道外侧，与樱粉色的',
        urara.teen_sex_title,
        '摇晃着双耳与尾巴，将手伸向了阴晴难定的天空。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '那是一位渺小到不能再渺小的……',
        urara.uma_sex_title,
        '的故事。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '的身影',
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '的名字',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number} rank 比赛名次
     */
    const f = async (urara, inner_urara, you, callname, rank) => {
      await inner_urara.print_and_wait('这个故事，要从哪说起呢？');
      await inner_urara.print_and_wait([
        '在或许并没有很久的以前，一位性格任性、资质平庸的小',
        inner_urara.uma_sex_title,
        '在某处的牧场中很随意的诞生了。',
      ]);
      await inner_urara.print_and_wait([
        '但就是这样一位麻烦又平凡的',
        inner_urara.child_sex_title,
        '，却被最初爱着',
        inner_urara.sex,
        '的人们授予了一个祝福般的可爱之名。',
      ]);
      await inner_urara.print_and_wait([
        '而',
        inner_urara.sex,
        '的人生也像这可爱的名字般，在偶然的幸运后，受到了时代与三女神的眷顾。',
      ]);
      await inner_urara.print_and_wait([
        '尽管奔跑的日子里一次比赛也没能赢过，',
        inner_urara.sex,
        '却一次又一次的取得着大家的怜悯与关照。',
      ]);
      await inner_urara.print_and_wait([
        '所以',
        inner_urara.sex,
        '厌恶着奔跑，厌恶着将',
        inner_urara.sex,
        '当成寄托的人类，厌恶着随随便便就赌上性命的同类们，一视同仁。',
      ]);
      await inner_urara.print_and_wait([
        '只是就算如此胆小又古怪的',
        inner_urara.sex,
        '，依旧在因自己而泥泞的路上拾得了两份留在最后的「小小的幸福」。',
      ]);
      await inner_urara.print_and_wait(
        '一份由是大家的爱构筑、哪里都有所欠缺，但仍可安身的平静，而另一份，则是三女神开下的小玩笑。',
      );
      await inner_urara.print_and_wait([
        '于是在旅途的途中，受祝福的「',
        inner_urara.sex,
        '」，与同样被他人所爱的「',
        urara.sex,
        '」坐上了同一趟列车，',
      ]);
      await inner_urara.print_and_wait([
        '走在被祝福的道路上，实际上什么都做不到的「',
        inner_urara.sex,
        '」，与弱小但想要成为希望的「',
        urara.sex,
        '」相遇了。',
      ]);
      await inner_urara.print_and_wait(
        '在那仿佛是梦境般幸福的同道而行中，本应不同的两人逐渐变成了彼此的模样。',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        '一视同仁的嫌恶着那份过于刺眼的希望，但那束阳光也照亮了乖僻的',
        inner_urara.sex,
        '内心中最柔软的一片草地。',
      ]);
      await inner_urara.print_and_wait([
        '如果',
        urara.sex,
        '能一直这样快乐的长大就好了，如果',
        urara.sex,
        '能收获',
        urara.sex,
        '希望的小小幸福就好了……',
      ]);
      await inner_urara.print_and_wait([
        '但如此渺小却又执意选择奔跑的樱粉色，究竟要去哪里寻得连自己都无从拥有的「大家的笑容」呢？',
      ]);
      await inner_urara.print_and_wait([
        '不过',
        inner_urara.sex,
        '还是找到了，找到了可以让小',
        urara.uma_sex_title,
        '寻得幸福，一同写下完整故事的「训练员」。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '随着话音的落下，注视着倾听的 ',
        you.get_colored_name(),
        '，贴近着 ',
        you.get_colored_name(),
        ' 的',
        inner_urara.teen_sex_title,
        '冷漠的脸颊逐渐填充起粘稠的绯红。',
      ]);
      await era.printAndWait([
        '在不知何时开始的肌肤接触中踮起脚尖，',
        inner_urara.teen_sex_title,
        '将柔软的湿润樱唇叠上了 ',
        you.get_colored_name(),
        ' 的唇齿。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '而至于『',
        urara.sex,
        '』对『您』的感情，就请您自己来感受吧……',
      ]);
      await era.printAndWait([
        '温热的柔软纠缠着黏腻的水声一同浸入，与 ',
        urara.get_colored_name(),
        ' 相似的小',
        inner_urara.uma_sex_title,
        '正利用着',
        inner_urara.sex,
        '的神情向 ',
        you.get_colored_name(),
        ' 进行着索取。',
      ]);
      await era.printAndWait([
        '不可以和',
        urara.sex,
        '这样做，没时间了，快点推开',
        urara.sex,
        '，',
        urara.sex,
        '不是 ',
        urara.get_colored_name(),
        '，不能和',
        urara.sex,
        '做这种事……',
      ]);
      await era.printAndWait(
        '但就算意识努力维持着清醒，但身体却完全滑向了另一端的怀抱。',
      );
      await era.printAndWait([
        '与感情无关，也不用犹豫，',
        urara.sex,
        '身上散发着最重要的担当的气息，「',
        urara.get_colored_name(),
        '」就在这里……',
      ]);
      await era.printAndWait([
        '随后，在这被',
        urara.sex,
        '所发起并主导的恍惚之吻中，',
        urara.teen_sex_title,
        '用力咬住了逐渐下陷的另一方嘴唇。',
      ]);
      await era.printAndWait(
        '虽然疼痛的触感被兴奋的神经所抑制，但腥甜的气味还是在两人的口腔中逐渐扩散。',
      );
      await era.printAndWait([
        '眯起眼睛吮吸着混合着血液的爱欲，沉溺于其中的',
        urara.sex,
        '还在不断地侵犯着 ',
        you.get_colored_name(),
        ' 的身体与精神。',
      ]);
      await era.printAndWait(
        '这无法逃脱的吻中包含的究竟是沉重的爱欲、掺杂的谢意还是扭曲的嫌恶，又或者三者皆有？',
      );
      await era.printAndWait([
        '唯一可以确认的是，选中了「您」的「',
        urara.sex,
        '」，渴求着 ',
        you.get_colored_name(),
        ' 的一切，从肉体到灵魂……',
      ]);
      await era.printAndWait([
        '慢慢地结束了如报复般的深吻，完全就是猎食者的',
        urara.teen_sex_title,
        '意犹未尽的舔了舔还连在嘴边的银丝。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '就是这样，您理解了吗？虽然不理解也没关系，因为您与',
        urara.sex,
        '还有更长的时间……',
      ]);
      await era.printAndWait([
        '轻轻退出 ',
        you.get_colored_name(),
        ' 的怀抱，眼前的',
        urara.sex,
        '收起了眼神中的灼热，换回了那副对外生冷的距离感。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '说完了自己的事，那么在最后临走前，再稍微说两句和乌拉拉的现状有关的事吧。',
      );
      if (rank === 1) {
        await inner_urara.say_as_unknown_and_wait(
          '就像大家所祈愿的那样，您马上就能看到奇迹了呢，乌拉拉『最棒』的一着。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '或许一切有因有果，但在所有目瞪口呆的观众来说，这就是奇迹吧？',
        );
      } else if (rank <= 5) {
        await inner_urara.say_as_unknown_and_wait(
          '其实离奇迹只差一步之遥哦？乌拉拉很努力，您的直觉也一直都很准呢。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '不过对于宠爱着乌拉拉的大家来说，这样的结果也足以落泪了吧。',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '和大多数人想得一样哦？不过大家都很开心，乌拉拉也很满足，这样就够了吧？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '只是在我看来，这次您做的未免太激进了点。',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        '下次如果乌拉拉会受伤的话，我会把续写故事的权力握在自己手里。',
      );
      await era.printAndWait([
        '在短暂的停顿后，就像自顾自的突然出现般，眼前的「',
        inner_urara.get_colored_actual_name(),
        '」再次自顾自的转身离去。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '明明只要接受温暖的照耀就好，但渺小的彼此却一定要牵起手追逐阳光。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '那就让我也见识一下，在用蜡制成的羽翼融化之前，',
        urara.sex,
        '与您究竟能够多接近太阳吧——',
      ]);
      await era.printAndWait(
        '随着离开前抛下的威慑，灰白的视野再次染上色彩，恢复流动的空气将鼎沸的人声灌进了通道内。',
      );
      await era.printAndWait([
        '而发现身体终于恢复灵活的 ',
        you.get_colored_name(),
        ' 急忙上前想要拦下正要走进光中的',
        urara.uma_sex_title,
        '，但手却穿过了',
        urara.sex,
        '的身影。',
      ]);
      era.printButton(
        '「等下！别再说谜语了！这出到底是怎么回事？你到底是……」',
        1,
      );
      await era.input();
      await inner_urara.say_as_unknown_and_wait([
        '再仔细想想啊训练员',
        you.adult_sex_title,
        '（您），我的名字，您会猜不到吗？',
      ]);
      await era.printAndWait([
        '站在通道的出口，',
        urara.teen_sex_title,
        '留下了一句意味深长的话语后，便如薄雾般消失在了阳光下。',
      ]);
      await era.printAndWait([
        '而一个踉跄站到阴影之外，不小心冲出了道口的 ',
        you.get_colored_name(),
        '，看到了正如另一个 ',
        inner_urara.get_colored_name(),
        ' 所说的比赛的结局。',
      ]);
      await era.printAndWait([
        '站在还在呐喊欢呼的众人与飞舞的纸片构成的彩幕之外，从云层外探出的阳光此刻实在有些晃眼。',
      ]);
      await you.say_and_wait('三女神啊……', true);
      era.drawLine();
      await era.printAndWait([
        '从赛道外到后场的选手休息室中，连汗都顾不上擦，兴奋的 ',
        urara.get_colored_name(),
        ' 还在和 ',
        you.get_colored_name(),
        ' 说着比赛时的感想。',
      ]);
      if (rank === 1) {
        await era.printAndWait([
          '不过现在恐怕任谁都会激动地讨论比赛结果吧，毕竟「漂亮的赢下第一的」竟然是「',
          urara.get_colored_actual_name(),
          '」。',
        ]);
        await urara.say_and_wait(
          '就是这样！但是感觉赢得有点不真实呢，好像哪里怪怪的——',
        );
        await era.printAndWait([
          '这样说也没错，',
          urara.get_colored_name(),
          ' 今天何止跑得很精彩，简直是跟平时判若两人……虽然这么说',
          urara.sex,
          '好像有点可怜。',
        ]);

        era.printButton('「乌拉拉要再来一次吗？明年的有马纪念。」', 1);
        await era.input();

        await urara.say_and_wait('嗯！毕竟大家好像也没感觉到有多开心呢！');
        await era.printAndWait([
          '虽然这个，多半是太震撼了的原因吧。苦笑着用毛巾擦着 ',
          urara.get_colored_name(),
          ' 的笑脸，',
          you.get_colored_name(),
          ' 无奈地想到。',
        ]);
      } else if (rank <= 5) {
        await era.printAndWait([
          '不过现在恐怕任谁都会激动地讨论比赛结果吧，毕竟 ',
          urara.get_colored_name(),
          ' 的表现实在是过于意外了。',
        ]);
        await urara.say_and_wait(
          '呜——虽然大家都不说话，但当时真的只差一点点了！',
        );
        await era.printAndWait([
          '其实入着也很棒了，等到时候再看看赛程录像吧。这样想着，',
          you.get_colored_name(),
          ' 将毛巾和水递给 ',
          urara.get_colored_name(),
          '。',
        ]);

        era.printButton('「正因如此，也绝对不能这样就算了对吧？」', 1);
        await era.input();

        await urara.say_and_wait('嗯！我感觉到了哦！下次自己能赢的预感！');
        await era.printAndWait([
          '与斗志高昂的 ',
          urara.get_colored_name(),
          ' 碰了碰拳，',
          you.get_colored_name(),
          ' 的确从这其中感受到了两人间不可替代的默契。',
        ]);
      } else {
        await era.printAndWait([
          '看来是看到支持自己的大家都露出了笑容吧，现在的 ',
          urara.get_colored_name(),
          ' 就像在生日时收到礼物的孩子一样。',
        ]);
        await urara.say_and_wait(
          '但是呢……诶嘿嘿～是预料之内的结果呦？熟悉的感觉好像又回来……',
        );
        await era.printAndWait([
          '倒也不至于，只是有马对 ',
          urara.get_colored_name(),
          ' 来说各个方面都辛苦过头了。这样想着，',
          you.get_colored_name(),
          ' 笑着揉了揉小',
          urara.uma_sex_title,
          '的脸颊。',
        ]);

        era.printButton('「所以，资深级的……」', 1);
        await era.input();

        await urara.say_and_wait(
          '嗯！明年我还要再试一次！我会让大家看到乌拉拉的成长的！',
        );
      }
      await era.printAndWait(
        '还真是和「那个',
        urara.sex,
        '」说的一样，现在就算 ',
        you.get_colored_name(),
        ' 停下来，',
        urara.get_colored_name(),
        ' 也还是会选择这场比赛……',
      );
      await era.printAndWait([
        '等下！对了，还有「那个',
        urara.sex,
        '」的事情，但是……这个又要怎么和 ',
        urara.get_colored_name(),
        ' 讲啊？',
      ]);

      era.printButton('「啊对了，乌拉拉，刚才我好像，嗯……遇到了……」', 1);
      await era.input();

      await era.printAndWait([
        '但就在 ',
        you.get_colored_name(),
        ' 还在思索着怎样和 ',
        urara.get_colored_name(),
        ' 讲述刚才幻觉般的经历时，却听见了小',
        urara.uma_sex_title,
        '的一声惊呼。',
      ]);
      await urara.say_and_wait([
        '啊，',
        callname,
        '！你的嘴唇上！是在哪里蹭破了吗？',
      ]);
      await era.printAndWait([
        '听见 ',
        urara.get_colored_name(),
        ' 有些慌张的提醒，',
        you.get_colored_name(),
        ' 才在一阵迟来的刺痛中条件反射的将手指按在了唇边。',
      ]);
      await era.printAndWait(
        '这是……血？凝视着从伤口上沾下的一点凝固的红色，半梦半醒间那疼痛的吻终于在脑中清晰了起来。',
      );
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 担忧又疑惑的目光中，',
        you.get_colored_name(),
        ' 短暂的陷入了沉默——看来「',
        inner_urara.sex,
        '」，确实来过啊……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_48: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '的话语、',
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '的名字',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对玩家的称呼
     * @param {number} fans 粉丝数
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      fans,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '主动追寻的未来，该是什么颜色的梦想呢？训练员',
        you.adult_sex_title,
        '（您）会知道答案吗？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '……哈，我明明说过要保护好',
        urara.sex,
        '的……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '不知不觉中，',
        urara.get_colored_name(),
        ' 挑战经典级的日子也快结束了啊，相遇的两年，真是发生了不少事……',
      ]);
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 牵着手一同漫步在街头，望着晴朗的天空，冬日的气氛似乎也没那么寒冷了。',
      ]);
      await era.printAndWait([
        '伴随着 ',
        you.get_colored_name(),
        ' 心中的感慨，一旁好奇地东张西望的 ',
        urara.get_colored_name(),
        ' 也说出了自己对冷清街头的新鲜感想。',
      ]);
      await urara.say_and_wait(
        '感觉今天很安静啊，街上的行人也少了不少，总觉得和想象中的不太一样呢。',
      );

      era.printButton(
        '「是因为有马纪念刚刚结束吧？比起面对寒冷，大家更喜欢在家里讨论比赛也说不定。」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '嘿嘿～',
        callname,
        '！等今年结束之后，我也能参加更重要的比赛了对吧？',
      ]);

      era.printButton('「乌拉拉今天很高兴啊。」', 1);
      await era.input();

      await urara.say_and_wait([
        '那是当然的嘛！大家都支持着我们，',
        callname,
        ' 一直都那么努力，我明年也一定会跑得更快呢！',
      ]);
      await era.printAndWait([
        '没错啊，与 ',
        urara.get_colored_name(),
        ' 一起，至今为止所做的一切没有一件是徒劳的。今后只要我们不停下来——',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '慢着，这不祥的预感是怎么回事？喂，您没在想什么奇怪的东西吧？',
      );
      await era.printAndWait([
        '伴随着背后不知从何而来的一阵凉意，同样莫名察觉到一种大事不妙感的 ',
        you.get_colored_name(),
        ' 也赶紧岔开了话题。',
      ]);

      era.printButton('「说起来，乌拉拉为什么会对有马纪念所吸引呢？」', 1);
      await era.input();

      await era.printAndWait([
        '与担当一同望向巨大的街头宣传屏中的赛事回放，',
        you.get_colored_name(),
        ' 向目光再次被其所吸引的 ',
        urara.get_colored_name(),
        ' 小声问道。',
      ]);
      await era.printAndWait([
        '毫无疑问，其上播放的正是昨天的「',
        arim_kin,
        '」。',
      ]);
      await era.printAndWait([
        '是 ',
        urara.get_colored_name(),
        ' 主动请求与 ',
        you.get_colored_name(),
        ' 一同前往现场观看，也是让 ',
        urara.get_colored_name(),
        ' 在大家面前留下了「参赛宣言」的比赛。',
      ]);
      await era.printAndWait([
        '只是面对 ',
        you.get_colored_name(),
        ' 的问题，',
        urara.get_colored_name(),
        ' 没有将视线移开，反而「答非所问」的开口了。',
      ]);
      await urara.say_and_wait([
        '嗯——',
        callname,
        ' 从一开始与乌拉拉相遇时就很总是容易积攒压力呢！',
      ]);
      await urara.say_and_wait([
        '但是有些事情也只有 ',
        callname,
        ' 能完成哦？我与大家都需要着 ',
        callname,
        '，这一点是不会改变的！',
      ]);
      await urara.say_and_wait([
        '我现在已经做出选择了，所以 ',
        callname,
        ' 也要打起精神来哦？',
      ]);

      era.printButton('「因为决定了吗，乌拉拉要参与有马？」', 1);
      await era.input();

      await urara.say_and_wait(['已经决定了哦，我要参加 ', arim_kin, '！']);
      await urara.say_and_wait(
        '因为特雷森的大家跟我说可以用投票制，所以只要努力地话，我也可以做到！',
      );
      await urara.say_and_wait([
        '而且我也想知道，商店街的大家，支持乌拉拉的人们，还有 ',
        callname,
        '……',
      ]);
      await urara.say_and_wait('为了回报大家的希望，我想自己能飞多高——');
      await era.printAndWait([
        '从 ',
        urara.get_colored_name(),
        ' 目不转睛的侧脸中，',
        you.get_colored_name(),
        ' 在',
        urara.sex,
        '稚嫩的脸庞上看到了一种前所未有的锐利感。',
      ]);
      await era.printAndWait([
        '那是站上赛场准备冲出闸门时，与「历战的赛',
        urara.uma_sex_title,
        '」所相符的神态。',
      ]);
      await era.printAndWait([
        '或许现在会有很多人在质疑 ',
        urara.get_colored_name(),
        ' 是否是心血来潮，但此刻的 ',
        you.get_colored_name(),
        ' 已经确认了',
        urara.sex,
        '绝无一时兴起的可能。',
      ]);
      await era.printAndWait([
        '看来已经无需多言了。',
        you.get_colored_name(),
        ' 将目光再次投向了屏幕上在疾驰中闪耀的众人。',
      ]);

      era.printButton(
        '「这条路走起来会很辛苦，可能也不会有多开心，做好准备了吗？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('嗯！现在的我，也许是世界上最大胆的人呢！');
      await era.printAndWait([
        '就算没有四目相对，担当的决心也毫无保留的传递到了 ',
        you.get_colored_name(),
        ' 的心中。',
      ]);
      await era.printAndWait([
        '或许现在的 ',
        urara.get_colored_name(),
        ' 距离闪闪发光的众人的距离，也薄薄的一面屏幕吧。',
      ]);
      await era.printAndWait(
        '站在训练员的立场，能决定目标竞赛是值得开心的好事啊，即使是难以达成的目标。',
      );
      await era.printAndWait([
        '而且 ',
        urara.get_colored_name(),
        ' 也终于有了主动想要挑战的目标，既然是',
        urara.sex,
        '的决定，那就必须要认真地支持',
        urara.sex,
        '了啊。',
      ]);
      await era.printAndWait([
        '相信认真以赴的 ',
        urara.get_colored_name(),
        ' 能带来奇迹？也很好啊，毕竟在最初的相遇时，',
        urara.sex,
        '就已经……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '是啊，毕竟不管发生什么事，您会都一直相信着乌拉拉不是吗？',
      );
      await inner_urara.say_as_unknown_and_wait([
        '哪怕',
        urara.sex,
        '没有你想象中的那么坚强也是一样。',
      ]);
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 似像非像的声音响起的一瞬，周围的一切都像按下了暂停键般陷入了定格。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 本以为自己会被吓到，但不论是身体还是精神都像已经熟悉了一切般平静如常。',
      ]);
      await era.printAndWait([
        '就如同在朦胧之中经历了无数遍的梦境般，',
        you.get_colored_name(),
        ' 缓缓转动脖颈，与身旁的「',
        inner_urara.get_colored_actual_name(),
        '」对上了视线。',
      ]);
      await era.printAndWait(
        '周围稀散的行人与空气一同凝固了动作，但屏幕上略微失真的飞驰之影却还在继续着结局已知的竞赛。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '就像命中注定一样，对吧？就比如您与我也不是第一次相遇，只是您不记得罢了。',
      );
      await era.printAndWait([
        '相同的脸上流露出与 ',
        urara.get_colored_name(),
        ' 气质相仿却成熟又生分的微笑，',
        urara.sex,
        '维持着相同的位置与 ',
        you.get_colored_name(),
        ' 继续交流着。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '既然您与',
        urara.sex,
        '期望如此，那我会继续记录下去。那么在那之前，请让我和您聊聊吧？',
      ]);
      await era.printAndWait([
        '没等 ',
        you.get_colored_name(),
        ' 的回答，或者又像 ',
        urara.get_colored_name(),
        ' 一般看出了 ',
        you.get_colored_name(),
        ' 的默许，',
        urara.sex,
        '如叙述的第三者般讲起了一段「故事」。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '您，喜欢听故事吗？那是一位渺小到不能再渺小的……',
        urara.uma_sex_title,
        '的故事——',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        '在或许并没有很久的以前，一位性格任性、资质平庸的小',
        inner_urara.uma_sex_title,
        '在某处的牧场中很随意的诞生了。',
      ]);
      await inner_urara.print_and_wait([
        '但就是这样一位麻烦又平凡的',
        inner_urara.child_sex_title,
        '，却被最初爱着',
        inner_urara.sex,
        '的人们授予了一个祝福般的可爱之名。',
      ]);
      await inner_urara.print_and_wait([
        '而',
        inner_urara.sex,
        '的人生也像这可爱的名字般，在偶然的幸运后，受到了时代与三女神的眷顾。',
      ]);
      await inner_urara.print_and_wait([
        '尽管奔跑的日子里一次比赛也没能赢过，',
        inner_urara.sex,
        '却一次又一次的取得着大家的怜悯与关照。',
      ]);
      await inner_urara.print_and_wait([
        '所以',
        inner_urara.sex,
        '厌恶着奔跑，厌恶着将',
        inner_urara.sex,
        '当成寄托的人类，厌恶着随随便便就赌上性命的同类们，一视同仁。',
      ]);
      await inner_urara.print_and_wait([
        '只是就算如此胆小又古怪的',
        inner_urara.sex,
        '，依旧在因自己而泥泞的路上拾得了两份留在最后的「小小的幸福」。',
      ]);
      await inner_urara.print_and_wait(
        '一份由是大家的爱构筑、哪里都有所欠缺，但仍可安身的平静，而另一份，则是三女神开下的小玩笑。',
      );
      await inner_urara.print_and_wait([
        '于是在旅途的途中，受祝福的「',
        inner_urara.sex,
        '」，与同样被他人所爱的「',
        urara.sex,
        '」坐上了同一趟列车，',
      ]);
      await inner_urara.print_and_wait([
        '走在被祝福的道路上，实际上什么都做不到的「',
        inner_urara.sex,
        '」，与弱小但想要成为希望的「',
        urara.sex,
        '」相遇了。',
      ]);
      await inner_urara.print_and_wait(
        '在那仿佛是梦境般幸福的同道而行中，本应不同的两人逐渐变成了彼此的模样。',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        '一视同仁的嫌恶着那份过于刺眼的希望，但那束阳光也照亮了乖僻的',
        inner_urara.sex,
        '内心中最柔软的一片草地。',
      ]);
      await inner_urara.print_and_wait([
        '如果',
        urara.sex,
        '能一直这样快乐的长大就好了，如果',
        urara.sex,
        '能收获',
        urara.sex,
        '希望的小小幸福就好了……',
      ]);
      await inner_urara.print_and_wait([
        '但如此渺小却又执意选择奔跑的樱粉色，究竟要去哪里寻得连自己都无从拥有的「大家的笑容」呢？',
      ]);
      await inner_urara.print_and_wait([
        '不过',
        inner_urara.sex,
        '还是找到了，找到了可以让小',
        urara.uma_sex_title,
        '寻得幸福，一同写下完整故事的「训练员」。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '随着话音的落下，注视着倾听的 ',
        you.get_colored_name(),
        '，贴近着 ',
        you.get_colored_name(),
        ' 的',
        inner_urara.teen_sex_title,
        '冷漠的脸颊逐渐填充起粘稠的绯红。',
      ]);
      await era.printAndWait([
        '在不知何时开始的肌肤接触中踮起脚尖，',
        inner_urara.teen_sex_title,
        '将柔软的湿润樱唇叠上了 ',
        you.get_colored_name(),
        ' 的唇齿。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '而至于『',
        urara.sex,
        '』对『您』的感情，就请您自己来感受吧……',
      ]);
      await era.printAndWait([
        '温热的柔软纠缠着黏腻的水声一同浸入，与 ',
        urara.get_colored_name(),
        ' 相似的小',
        inner_urara.uma_sex_title,
        '正利用着',
        inner_urara.sex,
        '的神情向 ',
        you.get_colored_name(),
        ' 进行着索取。',
      ]);
      await era.printAndWait([
        '不可以和',
        urara.sex,
        '这样做，没时间了，快点推开',
        urara.sex,
        '，',
        urara.sex,
        '不是 ',
        urara.get_colored_name(),
        '，不能和',
        urara.sex,
        '做这种事……',
      ]);
      await era.printAndWait(
        '但就算意识努力维持着清醒，但身体却完全滑向了另一端的怀抱。',
      );
      await era.printAndWait([
        '与感情无关，也不用犹豫，',
        urara.sex,
        '身上散发着最重要的担当的气息，「',
        urara.get_colored_name(),
        '」就在这里……',
      ]);
      await era.printAndWait([
        '随后，在这被',
        urara.sex,
        '所发起并主导的恍惚之吻中，',
        urara.teen_sex_title,
        '用力咬住了逐渐下陷的另一方嘴唇。',
      ]);
      await era.printAndWait(
        '虽然疼痛的触感被兴奋的神经所抑制，但腥甜的气味还是在两人的口腔中逐渐扩散。',
      );
      await era.printAndWait([
        '眯起眼睛吮吸着混合着血液的爱欲，沉溺于其中的',
        urara.sex,
        '还在不断地侵犯着 ',
        you.get_colored_name(),
        ' 的身体与精神。',
      ]);
      await era.printAndWait(
        '这无法逃脱的吻中包含的究竟是沉重的爱欲、掺杂的谢意还是扭曲的嫌恶，又或者三者皆有？',
      );
      await era.printAndWait([
        '唯一可以确认的是，选中了「您」的「',
        urara.sex,
        '」，渴求着 ',
        you.get_colored_name(),
        ' 的一切，从肉体到灵魂……',
      ]);
      await era.printAndWait([
        '慢慢地结束了如报复般的深吻，完全就是猎食者的',
        urara.teen_sex_title,
        '意犹未尽的舔了舔还连在嘴边的银丝。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '就是这样，您理解了吗？虽然不理解也没关系，因为您与',
        urara.sex,
        '还有更长的时间……',
      ]);
      await era.printAndWait([
        '轻轻退出 ',
        you.get_colored_name(),
        ' 的怀抱，眼前的',
        urara.sex,
        '收起了眼神中的灼热，换回了那副对外生冷的距离感。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '那么在最后稍微再稍微聊两句和乌拉拉的现状有关的事吧。',
      );
      if (fans < 25000) {
        await inner_urara.say_as_unknown_and_wait([
          '对现在的乌拉拉来说，如果想参加 ',
          arim_kin,
          ' 就必须先累积重赏比赛的支持度成绩。',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '您当然有陪伴乌拉拉取胜的觉悟，但乌拉拉有没有在走上赛场前顶住压力的觉悟呢？',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '那时的您听到了我的恳求呢，您是一位很可靠的人啊，所以乌拉拉才会一直依赖您。',
        );
        await inner_urara.say_as_unknown_and_wait([
          '所以',
          urara.sex,
          '想参加 ',
          arim_kin,
          ' 的这回事，我从一开始就不应该指望您来阻止',
          urara.sex,
          '。',
        ]);
      }

      await inner_urara.say_as_unknown_and_wait(
        '下次如果乌拉拉会受伤的话，我会把续写故事的权力握在自己手里。',
      );
      await era.printAndWait([
        '在短暂的停顿后，就像自顾自的突然出现般，眼前的「',
        inner_urara.get_colored_actual_name(),
        '」再次自顾自的转身离去。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '明明只要接受温暖的照耀就好，但渺小的彼此却一定要牵起手追逐阳光。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '那就让我也见识一下，在用蜡制成的羽翼融化之前，',
        urara.sex,
        '与您究竟能够多接近太阳吧——',
      ]);
      await era.printAndWait(
        '随着威慑的落下，灰白的视野再次染上色彩，恢复流动的冷风再次灌入了行色匆匆的人群。',
      );
      era.printButton(
        '「等下！别再说谜语了！这出到底是怎么回事？你到底是……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '发现身体终于恢复灵活的 ',
        you.get_colored_name(),
        ' 转过身想要继续问些什么，但看到的却只是一抹薄雾般的笑容。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '再仔细想想啊训练员',
        you.adult_sex_title,
        '（您），我的名字，您会猜不到吗？',
      ]);
      await era.printAndWait([
        '在留下最后一句意味深长的话语后，附着在 ',
        urara.get_colored_name(),
        ' 脸上的薄雾便如从未存过般稀释在了空气中。',
      ]);
      await era.printAndWait([
        '而留在 ',
        you.get_colored_name(),
        ' 身边的，依旧是还在跟自己的训练员兴奋地聊着未来的「',
        urara.get_colored_actual_name(),
        '」。',
      ]);
      await era.printAndWait('真是大白天撞鬼了，三女神啊——');
      await era.printAndWait([
        '不过或许就像',
        urara.sex,
        '说的那样，现在的 ',
        urara.get_colored_name(),
        ' 或许还欠缺一些对未来的准备，但这不正是自己存在的理由吗？',
      ]);
      await era.printAndWait([
        '攥了攥被风吹得有些僵硬的手指，',
        you.get_colored_name(),
        ' 再次将注意力放回了身旁 ',
        urara.get_colored_name(),
        ' 的笑脸上。',
      ]);
      await urara.say_and_wait(
        '……而且呢，其实在一开始看到这样的比赛时，我的胸口好像就会跳得特别厉害！',
      );
      await urara.say_and_wait([
        '嘿嘿～不过这句话被 ',
        call_30,
        ' 以『说得像初恋一样会被人误会』而禁止外传了呢。',
      ]);
      await urara.say_and_wait([
        '不过我觉得就算如此，我也有必要和 ',
        callname,
        ' 说！毕竟乌拉拉第一次看到训练时，胸口也跳得很厉害……',
      ]);
      await era.printAndWait(
        '……总觉得听到了不太对劲的内容，不过这个不是重点就算了。',
      );
      await era.printAndWait(
        '不过，还真是和「那个',
        urara.sex,
        '」说的一样，现在就算 ',
        you.get_colored_name(),
        ' 停下来，',
        urara.get_colored_name(),
        ' 也还是会选择这场比赛……',
      );
      await era.printAndWait([
        '等下，对了，还有「那个',
        urara.sex,
        '」的事情，但是这个又要怎么和 ',
        urara.get_colored_name(),
        ' 讲呢？',
      ]);

      era.printButton('「啊对了，乌拉拉，刚才我好像，嗯……遇到了……」', 1);
      await era.input();

      await era.printAndWait([
        '但就在 ',
        you.get_colored_name(),
        ' 还在思索着怎样和 ',
        urara.get_colored_name(),
        ' 讲述刚才幻觉般的经历时，却听见了小',
        urara.uma_sex_title,
        '的一声惊呼。',
      ]);
      await urara.say_and_wait([
        '啊，',
        callname,
        '！你的嘴唇上！是在哪里蹭破了吗？',
      ]);
      await era.printAndWait([
        '听见 ',
        urara.get_colored_name(),
        ' 有些慌张的提醒，',
        you.get_colored_name(),
        ' 才在一阵迟来的刺痛中条件反射的将手指按在了唇边。',
      ]);
      await era.printAndWait(
        '这是……血？凝视着从伤口上沾下的一点凝固的红色，半梦半醒间那疼痛的吻终于在脑中清晰了起来。',
      );
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 担忧又疑惑的目光中，',
        you.get_colored_name(),
        ' 短暂的陷入了沉默——看来「',
        inner_urara.sex,
        '」，确实来过啊……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async we_47_48_or_else(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '请记住我最后的，训练员',
      you.adult_sex_title,
      '（您）',
    ]);
  },
  oc_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        '嗯！虽然并没什么好说的，但是顺利的与乌拉拉进入资深级恭喜了哦？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……怎么了？感觉变了是您的错觉罢了，我什么也没变哦？',
      );
      era.drawLine();
      await era.printAndWait([
        '站在正月里熙熙攘攘的人潮中，',
        you.get_colored_name(),
        ' 在神社长长的阶梯下等待着约好一同参拜的同伴到来。',
      ]);
      await era.printAndWait([
        '今天的 ',
        urara.get_colored_name(),
        ' 难得迟到了，虽然离约定时间仅过了几分钟，但若是平常玩心尚重的',
        urara.sex,
        '一般都能在外出中到得更早。',
      ]);
      await era.printAndWait([
        '不会是被新年的人流堵在路上了吧？虽然倒不担心',
        urara.uma_sex_title,
        '会被挤住，可 ',
        urara.get_colored_name(),
        ' 找不到路的话……',
      ]);
      await era.printAndWait([
        '但正当 ',
        you.get_colored_name(),
        ' 准备原路返回去寻找担当时，却又立刻在不远处听到了',
        urara.teen_sex_title,
        '熟悉的清脆呼唤声。',
      ]);
      await urara.say_and_wait([callname, '！我在这边！乌拉拉在这边哦！']);
      await era.printAndWait([
        '趁着 ',
        you.get_colored_name(),
        ' 回头找寻的空隙，一股红白相间的樱色春风就赶在气温转暖前吹进了 ',
        you.get_colored_name(),
        ' 的怀中。',
      ]);
      await era.printAndWait([
        '低头看去，身着红粉相间的节日正装，',
        urara.get_colored_name(),
        ' 正冲 ',
        you.get_colored_name(),
        ' 开心地笑着，一双绽放着樱花的瞳孔闪闪发光。',
      ]);

      urara.say([
        '嘿嘿～因为大家说最好正式一点，所以今天准备的有点久！',
        callname,
        ' 觉得怎么样？',
      ]);
      era.printButton('「嗯，乌拉拉今天很漂亮哦！」（好感+20）', 1);
      era.printButton('「嗯，我又被乌拉拉迷住了！」（爱慕+5）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          '嘿嘿～真的吗？我在大家的帮助下收拾了很久哦！',
          callname,
          ' 也觉得开心真是太好了！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 开心地在你面前旋转展示着自己，宽袖与长裙也像小鸟的羽翼般随之跃动着。',
        ]);
        await urara.say_and_wait([
          '不过竟然是漂亮不是可爱呢，难道在 ',
          callname,
          ' 终于觉得乌拉拉变得像个大人了吗？',
        ]);

        era.printButton(
          '「答错了哦？因为并不是变得像大人，而是乌拉拉不论何时都比『大人们』漂亮得多啊。」',
          1,
        );
        await era.input();
      } else {
        await urara.say_and_wait(
          '对吧！我在大家的帮助下收拾了很久呢……诶？诶诶——',
        );
        await era.printAndWait([
          '听到了意想不到的答案，',
          urara.get_colored_name(),
          ' 先是愣了一下，随后急忙用正装的宽袖遮住了自己变得羞红的脸颊。',
        ]);
        await urara.say_and_wait([
          callname.substring(0, 1),
          '、',
          callname,
          ' 不要再说乌拉拉听不懂的话了……虽然很开心！但乌拉拉也不是小孩子了……',
        ]);

        era.printButton(
          '「对不起啦，我以后会注意的，不过我并没有在和乌拉拉开玩笑哦？」',
          1,
        );
        await era.input();
      }
      await era.printAndWait([
        '随后，牵着 ',
        urara.get_colored_name(),
        ' 变得害羞的小手，',
        you.get_colored_name(),
        ' 与担当一同踏上了前往神社祈福的漫长阶梯。',
      ]);
      await era.printAndWait([
        '但随着不断向上，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 都注意到了周遭的变化——先不说别的，神社的台阶，有这么长吗？',
      ]);
      await era.printAndWait(
        '神社的阶梯很高众所皆知，但在平常的印象中，似乎还不至于一眼望不见头尾。',
      );
      await era.printAndWait(
        '而不知从何时起，周围原本熙熙攘攘的参拜者们逐渐消失了，而周围的树林则愈发细密起来。',
      );
      await era.printAndWait(
        '有些树上甚至过早的挂起了新叶，完全不像在寒风未消的季节中会出现的景象。',
      );
      await era.printAndWait(
        '虽然日常祈福时奇妙现象也时有发生，但今天的变化却异常明显。',
      );
      await era.printAndWait(
        '可以肯定的是，这样的变化并非出于恶意，甚至还抹去了两人在攀登时会感受到的疲惫。',
      );
      await era.printAndWait([
        '但就算如此，这坡道未免也变得太长了。仰视着前方高到无聊的笔直之路，',
        you.get_colored_name(),
        ' 深深地叹了口气。',
      ]);
      await era.printAndWait(
        '现在调头回去吗？可就算回去恐怕也是没完没了的台阶，怎么办……',
      );
      await era.printAndWait([
        '可就在 ',
        you.get_colored_name(),
        ' 苦恼着下一步要怎么做时，一旁的 ',
        urara.get_colored_name(),
        ' 却主动向 ',
        you.get_colored_name(),
        ' 抛出了意想不到的话题。',
      ]);
      await urara.say_and_wait([
        callname,
        '，其实乌拉拉知道哦？以乌拉拉最初的样子，是没办法靠自己来到特雷森的。',
      ]);
      await era.printAndWait([
        '仿佛被突如其来的这么一句击中了后脑，',
        you.get_colored_name(),
        ' 差点一脚踩空从阶梯上滑下去。',
      ]);
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 刚开口时 ',
        you.get_colored_name(),
        ' 想到了小',
        urara.uma_sex_title,
        '的一万种搭话模式，但唯独没想到竟然能是严肃又沉重的话题。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 紧张地看向身边的 ',
        urara.get_colored_name(),
        '，但此时的',
        urara.sex,
        '却正安静地望着比视线的尽头更高的地方。',
      ]);
      await urara.say_and_wait(
        '妈妈以前告诉过我，神社的阶梯之所以建得这么高，是为了更接近神明呢！',
      );
      await urara.say_and_wait(
        '神明果然住得好高好高呢，不过妈妈还说过，要拜访别人最好能准备表明心意的伴手礼呢。',
      );
      await era.printAndWait([
        '将向上的视线转回身旁，乖巧地牵着大人的手，',
        urara.get_colored_name(),
        ' 带着安静可爱的笑容向 ',
        you.get_colored_name(),
        ' 发起了邀请。',
      ]);
      await urara.say_and_wait([
        '虽然乌拉拉好像说得有点晚了，但 ',
        callname,
        ' 愿意现在听听乌拉拉说说以前的事情吗？',
      ]);
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 若有所思的目光对视后，从中读出了什么的 ',
        you.get_colored_name(),
        ' 也轻轻点了点头。',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        '看不见的朋友，',
        callname,
        ' 知道吗？没错，大家都说，那是只有孤独的孩子们才会遇见的朋友。',
      ]);
      await urara.print_and_wait(
        '很奇妙吧？而且虽然大家总说看不见的朋友只是幻想，但乌拉拉觉得或许并不是那样。',
      );
      await urara.print_and_wait(
        '嗯！虽然乌拉拉的朋友一直很多，但乌拉拉也有一个看不见的朋友哦？和乌拉拉长得一模一样的！',
      );
      await urara.print_and_wait([
        '但是和大家说的朋友总是友好的不一样的是，',
        urara.sex,
        '总是挂着一副悲伤的表情，只会远远的看着乌拉拉。',
      ]);
      await urara.print_and_wait([
        '不能就这样放着',
        urara.sex,
        '不管，所以这样想着，乌拉拉就主动去找',
        urara.sex,
        '了，还带',
        urara.sex,
        '去了很多地方。',
      ]);
      await urara.print_and_wait([
        '从那之后，我们就变成了形影不离的朋友，虽然',
        urara.sex,
        '还会经常不开心，但也逐渐露出了更多笑容。',
      ]);
      await urara.print_and_wait([
        '直到有一天，朋友突然对乌拉拉说，乌拉拉有什么愿望呢？只要说出来，',
        urara.sex,
        '都会尽力帮乌拉拉实现。',
      ]);
      await urara.print_and_wait([
        '所以乌拉拉对朋友说，希望总是露出悲伤的表情的',
        urara.sex,
        '，有一天也能收获不再悲伤的幸福就好了！',
      ]);
      await urara.print_and_wait(
        '但是听到乌拉拉回答的朋友，却露出了比以往更加忧郁的表情……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '对不起，唯独这个愿望只有我自己做不到，因为我的幸福，就是希望乌拉拉能幸福……',
      );
      await urara.say_and_wait(
        '嗯……那这样的话，就试着让乌拉拉更幸福好啦！那样的话，你就能开心起来了对吧？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '那乌拉拉希望的幸福是？是被人所爱？还是安心的生活？还是……',
      );
      await urara.say_and_wait(
        '大家看到我的奔跑都会笑起来，所以希望大家都能看到希望，然后露出开心的笑容哦！',
      );
      await urara.print_and_wait([
        '结果听到乌拉拉的愿望之后朋友吓了一大跳呢，但是',
        urara.sex,
        '还是接下了乌拉拉的愿望。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '我明白了，时间还有很多，我会找到协力者，让乌拉拉能够写下『我们的故事』。',
      );
      await urara.print_and_wait(
        '而在那之后，就是在乌拉拉更大一些时，妈妈突然送我去特雷森上学的事情了。',
      );
      await urara.print_and_wait([
        '在往后啊……诶嘿嘿～乌拉拉就在训练场里遇见了倒下的 ',
        callname,
        ' 呢！',
      ]);
      await urara.print_and_wait(
        '不过不过！在来到特雷森后，即使总是跑不赢，但乌拉拉还是一下子明白了很多事情！',
      );
      await urara.print_and_wait(
        '妈妈送乌拉拉到特雷森的时候，刚好是春天，所以乌拉拉明白了，自己应该是幸运的。',
      );
      await urara.print_and_wait(
        '因为乌拉拉很幸运，所以能跟随春天到来；因为大家认为春天是美好的，所以春天总会让大家露出笑容。',
      );
      await urara.print_and_wait(
        '所以乌拉拉苦恼过的，看不见的朋友是不是幻想、和乌拉拉在不在一个世界，其实都不重要！',
      );
      await urara.print_and_wait(
        '因为只要能给予大家相信的希望，那一切应该都会是有意义的，大家也都能露出笑容。',
      );
      await urara.print_and_wait([
        '所以就像 ',
        callname,
        ' 看到的那样，乌拉拉最后，还是选择用奔跑来完成和朋友的约定呢！',
      ]);
      era.drawLine();
      await era.printAndWait([
        '以小',
        urara.uma_sex_title,
        '的笑容做结，不知不觉中，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 终于走到了比往常漫长太多的阶梯顶端。',
      ]);
      await era.printAndWait([
        '原来如此，这就是 ',
        urara.get_colored_name(),
        ' 和「',
        urara.sex,
        '」的关系，',
        urara.get_colored_name(),
        ' 可能省略了很多细节，但大致已经明了了。',
      ]);
      await era.printAndWait([
        '只是，就算答应要帮 ',
        urara.get_colored_name(),
        ' 实现愿望，',
        urara.sex,
        '却在套用自己对幸福的定义，这是什么强掌控欲家长啊。',
      ]);
      await era.printAndWait([
        '穿过朱红的鸟居，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 走入了明明在旺季空无一人，却并不显得诡异的神社院内。',
      ]);

      era.printButton(
        '「不过虽然再提就有点婆妈了……乌拉拉认为自己能来到中央特雷森，是因为那位『看不见的朋友』吗？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '那个应该是妈妈做了什么吧？听邻里的大家说，妈妈年轻时是很厉害的中央赛马娘。',
      );
      await urara.say_and_wait(
        '而且在带我去特雷森前，妈妈也刚从中央回来，再加上乌拉拉那时连入学测试都没做……',
      );
      await era.printAndWait(
        '嚯，竟然答得毫不犹豫啊，而且这个答案也是出人意料的有点吓人……',
      );
      await urara.say_and_wait(
        '但是也不全对，因为妈妈也是唯一一个觉得乌拉拉看不见的朋友存在的人。',
      );
      await urara.say_and_wait([
        '所以或许是妈妈也能看到乌拉拉的朋友，并和',
        urara.sex,
        '聊过也说不定！',
      ]);
      await era.printAndWait([
        '与 ',
        you.get_colored_name(),
        ' 一同将硬币扔入钱箱，摇响绳上的铃铛，',
        urara.get_colored_name(),
        ' 继续微笑着小声说道。',
      ]);
      await urara.say_and_wait(['不过 ', callname, ' 有时候……确实很婆妈呢！']);

      era.printButton('「乌拉拉？！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 差点就在后退一步时一脚滑倒，但总之没有在神明大人和担当的见证下现个大眼。',
      ]);
      await era.printAndWait([
        '可恶，怎么现在就连 ',
        urara.get_colored_name(),
        ' 也会这么想了？而且',
        you.phy_sex_title,
        '婆妈一点有什么错！',
      ]);
      await urara.say_and_wait([
        '嘿嘿～要到写愿望的环节了啊！',
        callname,
        ' 没问题吗？',
      ]);

      era.printButton(
        '「没、没问题啊，因为乌拉拉的训练员已经是大人了啊……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '总算稳住了自己作为成年人的形象，',
        you.get_colored_name(),
        ' 接过 ',
        urara.get_colored_name(),
        ' 递来的另一支笔。',
      ]);
      urara.say(['所以，', callname, ' 想要许下什么愿望呢？']);
      era.printButton('「总之还是祝愿周围人都身体健康？」（耐力+30）', 1);
      era.printButton('「事业有成……大体上是这个意思？」（全属性+5）', 2);
      era.printButton('「愿在新的一年里轻松克服困难吧？」（技能点数+35）', 3);
      ret.push(await era.input());
      await era.printAndWait([
        '快速写完了一开始就想好的内容，放下手中的笔，',
        you.get_colored_name(),
        ' 转向了还在聚精会神地写着愿望的 ',
        urara.get_colored_name(),
        '。',
      ]);

      era.printButton('「乌拉拉在许下的什么愿望呢？」', 1);
      await era.input();

      urara.say('嗯！我的话有很多想许的东西，但只选一件的话果然还是——');
      era.printButton('更远的距离（中&长距离适性提升）', 1);
      era.printButton('尝试草地（草地适性提升）', 2);
      ret.push(await era.input());
      if (ret[2] === 1) {
        await urara.say_and_wait(
          '因为有马距离很长呢，所以『想要能跑得更远一点』！',
        );
      } else {
        await urara.say_and_wait(
          '因为有马纪念是草地，所以『想在草地上跑得更快』！',
        );
      }
      await era.printAndWait([
        '观看着 ',
        urara.get_colored_name(),
        ' 一笔一划地写出意想不到的愿望，',
        you.get_colored_name(),
        ' 有些欣慰的同时心情也有点复杂。',
      ]);

      era.printButton('「……意外的认真啊，是因为定下目标所以有干劲吗？」', 1);
      await era.input();

      await urara.say_and_wait([
        '没错哦！不过 ',
        callname,
        ' 应该不会在今天回去后，马上就拉着我训练吧？',
      ]);
      await era.printAndWait([
        '听到 ',
        urara.get_colored_name(),
        ' 欲望明确的暗示，将两人的愿望挂好的 ',
        you.get_colored_name(),
        ' 转头露出了大人在恶作剧时狡猾的笑容。',
      ]);

      era.printButton(
        '「本来是不会的，不过乌拉拉这么热情的话……现在的阶梯变长了不少哦？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '才怪，就算是 ',
        urara.get_colored_name(),
        ' 没这么热情，利用地形的训练也会顺势就开始哦？',
      ]);
      await urara.say_and_wait([
        '诶——不要现在就开始嘛 ',
        callname,
        '！不要这样利用神明的一片好意啦！',
      ]);
      await urara.say_and_wait(
        '就算没办法到神社下面的摊贩那边玩了，至少让乌拉拉在神社里再转转吧——',
      );
      await era.printAndWait([
        '撒娇也不可以！因为 ',
        urara.get_colored_name(),
        ' 是好孩子，而好孩子的撒娇并不管用哦！',
      ]);

      era.printButton(
        '「好！那么为了满足让乌拉拉去摊贩那里玩的愿望，要跑起来了！注意脚下哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '怎么这样！神明会生气的啦！明明还想回去一起吃年糕和饼干的——',
      );
      await era.printAndWait([
        '虽然眼泪汪汪的说着，但 ',
        urara.get_colored_name(),
        ' 还是在抹了把眼角后有些委屈的跟上了 ',
        you.get_colored_name(),
        ' 率先跳下台阶的步伐。',
      ]);
      await era.printAndWait([
        '这就不对了哦？因为是为了 ',
        urara.get_colored_name(),
        ' 未来的一着，所以就连神明大人也会默许吧。',
      ]);
      await era.printAndWait([
        '不过这样的话，只要愿意继续前进愿望就一定会实现，而充满希望的',
        urara.sex,
        '也算未来可期对吧？',
      ]);
      await era.printAndWait([
        '望向身后即将从前人身旁掠过的红粉相间的樱色，',
        you.get_colored_name(),
        ' 脸上的笑容也逐渐转变为欣慰。',
      ]);
      await era.printAndWait(
        '不论哪个方面都更能近一步，新年的参拜，这不是很棒吗？',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '乌拉拉和您说了许多奇怪的话呢，但是上次我做的也差不多过分，所以我原谅您了！',
      );
      await inner_urara.say_as_unknown_and_wait(
        '怎样，偶尔学着『乌拉拉』的方式说话？诶、不像？唔……您这个人……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '嗯？我的态度变了？才没有哦，我都说过了是您的错觉——',
      );
      await inner_urara.say_as_unknown_and_wait(
        '咳、抱歉，因为难得是新年，我也有点兴奋过头了。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '只是呢，『掌控欲强』，您不也是吗？按照乌拉拉的话来说，觉得开心不就好了吗？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '还有，神社的事，那也不是我做的哦？',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_negi_sta: (() => {
    const title = '迎向根岸锦标！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} joined_g3 是否参与过重赏
     * @param {number|false} arim_kin_rank_c 经典年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} negi_sta 根岸锦标（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      joined_g3,
      arim_kin_rank_c,
      arim_kin,
      negi_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '虽然提不起精神可以理解，但是……',
      );
      await inner_urara.say_as_unknown_and_wait('算了，别随随便便就好。');
      era.drawLine();

      era.printButton('「乌拉拉，准备好了吗？今天的比赛。」', 1);
      await era.input();

      await urara.say_and_wait(['好——！不过 ', callname, '，今天的是重赏吗？']);

      era.printButton('「今天是重赏哦？不过别被其他人的气氛影响了哦？」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯！总感觉这次 ',
        callname,
        ' 选择的比赛和以前有什么相同的又有什么不同的呢？',
      ]);
      await urara.say_and_wait(
        '不过气、氛……？这个词这次乌拉拉没念错呢！嘿嘿～',
      );

      era.printButton(
        '「……在意外的地方有进步啊，总之按照以往的步调，和以前一样加油地上吧。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '平静地站在选手通道内，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 两人在赛前进行着时有时无的闲聊。',
      ]);
      await era.printAndWait(
        '可能会有路人产生疑惑，说这如「中午吃了什么」一般的对话，真是在重赏之前进行的吗？',
      );
      await era.printAndWait(
        '尽管两人的举动就像答了一个不够严肃的「是」，但至少不是没精打采，只是实在紧张不起来而已。',
      );
      await era.printAndWait(
        '两人在以前的确想过很多重赏时的可能性，但等到资深年站上赛场后，却发现没什么大不了的。',
      );
      await era.printAndWait([
        '因为',
        urara.sex,
        '是「',
        urara.get_colored_name(),
        '」，而 ',
        you.get_colored_name(),
        ' 是',
        urara.sex,
        '的「训练员」，不管会输还是能赢，只要每次都能跑出全力就好。',
      ]);
      await era.printAndWait([
        '只是就结果而言还是选择来到这里了啊，',
        negi_sta,
        '。',
      ]);
      if (joined_g3) {
        await era.printAndWait([
          '要说为什么来了，主要还是像以前说好的那样，带 ',
          urara.get_colored_name(),
          ' 来试试资深年的水深。',
        ]);
        await era.printAndWait([
          '不过还是希望能和以往的重赏不一样，这次比赛让 ',
          urara.get_colored_name(),
          ' 多少跑得更轻松一些。',
        ]);
      } else {
        await era.printAndWait([
          '虽然不是它也可以，但毕竟这是 ',
          urara.get_colored_name(),
          ' 第一次参与重赏，所以多少挑了一个对 ',
          urara.get_colored_name(),
          ' 来说简单点的。',
        ]);
        await era.printAndWait([
          '不过以 ',
          urara.get_colored_name(),
          ' 现在的状态，即使输了应该也不会和最初时一样让人摸不着头脑才对。',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await you.say_and_wait(
            '而且最重要的，有马我们……好像跑赢了来着？这次就算真没提起劲来，应该也没人怪我们吧……？',
            true,
          );
        } else {
          await era.printAndWait([
            '毕竟是已经参与过过 ',
            arim_kin,
            ' 了，',
            urara.get_colored_name(),
            ' 紧张不起来倒也算在意料之内。',
          ]);
          await era.printAndWait([
            '所以目前可以预见的是，不管最后有没有跑好，',
            urara.get_colored_name(),
            ' 这次应该都不会有太大的情绪波动。',
          ]);
        }
      }
      era.println();
      await urara.say_and_wait(['那么 ', callname, '，我出发了哦──！']);
      await era.printAndWait([
        '随着与登场提醒一同响起的轻快呼声中，',
        urara.get_colored_name(),
        ' 向前一步后冲 ',
        you.get_colored_name(),
        ' 举起了手。',
      ]);

      era.printButton('「哦！记得跑得开心一点哦？」', 1);
      await era.input();

      await era.printAndWait([
        '在两人最熟悉不过的招手回应中，',
        urara.get_colored_name(),
        ' 又一次出发跑向了赛场——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  negi_sta_win: (() => {
    const title = '接下来是？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number} best_g1 目前 G1 最佳名次，Infinity 是未参加过 G1
     * @param {number|false} arim_kin_rank_c 经典年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait('意料之中的胜利，恭喜？');
      await inner_urara.say_as_unknown_and_wait(
        '虽然不小心输了也不会责怪您，但是下次还请更认真一点啊。',
      );
      era.drawLine();
      await era.printAndWait([
        '刚一来到前排的边缘，从赛场内冲过来的樱粉色小动物便立刻蹦蹦跳跳地与 ',
        you.get_colored_name(),
        ' 掌心相击。',
      ]);
      await era.printAndWait(
        '隔着围栏低头看去，在那里等待的依旧是那张连汗水都来不及擦的明媚笑脸。',
      );
      await urara.say_and_wait([callname, '！第一名，是第一名哦──！']);
      await urara.say_and_wait(
        '嘿嘿～因为是擅长的短距离吗？感觉一下子就跑完了！',
      );
      await urara.say_and_wait(
        '但是跑在最前面的感觉就和以前一样，最前面的景色非常好看哦～',
      );

      era.printButton('「嗯，这次做的还不错，有什么感想吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '感想有很多呢，但最后我还是觉得还是用力向前冲最适合乌拉拉！',
      );
      await urara.say_and_wait(
        '不过抛开今天的比赛本身的话……我觉得自己可以参加更高级的比赛！',
      );
      await era.printAndWait([
        '说的也是啊，以 ',
        urara.get_colored_name(),
        ' 的现状，时至今日',
        urara.sex,
        '对战术的执行力依旧相当有限。',
      ]);
      await era.printAndWait([
        '不过另一方面说的也没错，现在的',
        urara.sex,
        '确实有资格去挑战更上层的比赛。',
      ]);

      era.printButton(
        `「那样的话，虽然选项也不少，但是……我暂时推荐二月锦标，怎样？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('二月……啊！课本上好像讲过呢！好像是G1比赛？');
      await urara.say_and_wait([
        '也就是说 ',
        callname,
        ' 建议下次去挑战G1吗？是为了今年的有马纪念做积累对吧？',
      ]);

      era.printButton('「嗯……也差不多，总之做好迎接下次比赛的准备吧！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！');
      if (best_g1 === 1) {
        await era.printAndWait([
          '正如 ',
          urara.get_colored_name(),
          ' 自己所言，如今的',
          urara.sex,
          '已经成长为了拥有拿下G1的实绩的强大',
          urara.uma_sex_title,
          '。',
        ]);
        await era.printAndWait([
          '真是难以想象，最初那个迷迷糊糊到连训练都为难的小',
          urara.uma_sex_title,
          '竟然能成长为了常胜',
          urara.uma_sex_title,
          '。',
        ]);
        await era.printAndWait([
          '难道其实是大家都猜错了，而 ',
          urara.get_colored_name(),
          ' 是个难以察觉的天才？',
        ]);
      } else {
        await era.printAndWait([
          '其实不只是为了最后的比赛做准备，更重要的是 ',
          urara.get_colored_name(),
          ' 早晚有一天要迈过G1这个坎。',
        ]);
        await era.printAndWait([
          '虽然进入资深年后，',
          urara.get_colored_name(),
          ' 的时间已经没那么充裕了，但这依旧是',
          urara.sex,
          '必须要经历一次的测验。',
        ]);
        await era.printAndWait([
          '至少，别让',
          urara.sex,
          '在还能奔跑的时间里留下遗憾吧。',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            '不过「为 ',
            arim_kin,
            ' 做准备」……虽然本意并非如此，但既然已经赢过一次，那确实很有必要。',
          ]);
          await era.printAndWait([
            '重要比赛只要赢过一次就会被同台竞争者盯上，而「',
            urara.get_colored_actual_name(),
            ' 能赢有马」更是一种恐怖的化学反应。',
          ]);
          await era.printAndWait(
            '这次的有马会变成什么样实在是很难想象，所以也只能在那之前尽力而为了。',
          );
        } else {
          await era.printAndWait([
            '至于「为 ',
            arim_kin,
            ' 做准备」，就算 ',
            urara.get_colored_name(),
            ' 不强调，作为训练员 ',
            you.get_colored_name(),
            ' 也一定会记住。',
          ]);
          await era.printAndWait([
            '不过现在的小',
            urara.uma_sex_title,
            '比起开心的去跑，今年的取胜欲望估计会更加强烈。',
          ]);
          await era.printAndWait(
            '但是赢下有马果然还是……总之作为训练员也只能尽力而为了。',
          );
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '就这样，训练员',
        you.adult_sex_title,
        '（您）与 ',
        urara.get_colored_name(),
        ' 决定好了下次的参赛目标。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '只是',
        urara.sex,
        '究竟能挑战到什么程度，或许也只有三女神知晓了。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '下次再见的时候，恐怕就没这么容易了……',
      );
    };
    f.title = title;
    return f;
  })(),
  negi_sta_lose: (() => {
    const title = '接下来是？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {number} best_g1 目前 G1 最佳名次，Infinity 是未参加过 G1
     * @param {number|false} arim_kin_rank_c 经典年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '没想到真输掉了啊，嗯……我一开始说的什么来着？',
      );
      await inner_urara.say_as_unknown_and_wait('唉……下次还请更认真一点吧。');
      era.drawLine();
      await era.printAndWait([
        '平静地来到跑道边缘，',
        you.get_colored_name(),
        ' 远远的看见 ',
        urara.get_colored_name(),
        ' 抹着脸上的汗珠跑了过来。',
      ]);
      await urara.say_and_wait('呼——这次结束的很快呢！但是不小心还是跑输了……');
      await urara.say_and_wait(
        '不过这次我跑得很开心哦！除此之外还有什么要注意的吗？',
      );

      era.printButton(
        '「没关系的，只是有点不在状态，下次记得一定要赢就可以了。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '将毛巾递给笑容有点勉强的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 笑着伸手轻轻揉了揉',
        urara.sex,
        '垂下的耳朵。',
      ]);
      await era.printAndWait([
        '无论面对什么比赛都能保持平常的自己的确是 ',
        urara.get_colored_name(),
        ' 强有力的一面，但现在显然更需要调整状态。',
      ]);
      await era.printAndWait([
        '接下来得试着参加所有人都全力以赴的比赛了，或许可以让 ',
        urara.get_colored_name(),
        ' 更快的找到新一年的节奏。',
      ]);
      await era.printAndWait([
        '而为了备战 ',
        urara.get_colored_name(),
        ' 所选择的目标，也是时候继续挑战更高级的比赛了。',
      ]);

      era.printButton(
        `「乌拉拉，下次要挑战更高等级的比赛看看吗？顺便一提我推荐二月锦标哦？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('二月……啊！课本上好像讲过呢！好像是G1比赛？');
      await urara.say_and_wait('不过我这次跑输了诶，这样应该没问题吧……');

      era.printButton(
        '「没关系，参加比赛的资格还是有的，只要调整好状态就没什么问题。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '这样说着，',
        you.get_colored_name(),
        ' 继续安抚着失落的小',
        urara.uma_sex_title,
        '，直到',
        urara.sex,
        '稍微重新挂起平常的笑容为止。',
      ]);
      if (best_g1 === 1) {
        await era.printAndWait([
          '当然 ',
          you.get_colored_name(),
          ' 所说的话也并非完全是安抚，现在的 ',
          urara.get_colored_name(),
          ' 确实有着能挑战并赢下G1的实力。',
        ]);
        await era.printAndWait([
          '和最初时已经完全不同，仅是一次的失利已经无法再让',
          urara.sex,
          '因「失败」而被提起。',
        ]);
        await era.printAndWait([
          '或许 ',
          urara.get_colored_name(),
          '，在某些方面真的是个天才也说不定。',
        ]);
      } else {
        await era.printAndWait([
          '不过不只是为了最后的比赛做准备，更重要的是 ',
          urara.get_colored_name(),
          ' 早晚有一天要迈过G1这个坎。',
        ]);
        await era.printAndWait([
          '虽然进入资深年后，',
          urara.get_colored_name(),
          ' 的时间已经没那么充裕了，但这依旧是',
          urara.sex,
          '必须要经历一次的测验。',
        ]);
        await era.printAndWait([
          '至少……别让',
          urara.sex,
          '在还能奔跑的时间里留下遗憾吧。',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            '所以说啊，虽然平时 ',
            urara.get_colored_name(),
            ' 确实发挥不稳定，但',
            urara.sex,
            '这次到底是怎么输的来着？',
          ]);
          await era.printAndWait([
            '一想到这点，',
            you.get_colored_name(),
            ' 再次扶住了额头，时间也仿佛回到了新秀年第一次训练时那个令人头晕的下午。',
          ]);
          await era.printAndWait('总之，下次应该不会再出这样的事故了对吧？');
        } else {
          await era.printAndWait([
            '至于「为 ',
            arim_kin,
            ' 做准备」，就算 ',
            urara.get_colored_name(),
            ' 不强调，作为训练员 ',
            you.get_colored_name(),
            ' 也一定会记住。',
          ]);
          await era.printAndWait([
            '不过现在的小',
            urara.uma_sex_title,
            '比起开心的去跑，今年的取胜欲望估计会更加强烈。',
          ]);
          await era.printAndWait([
            '但是赢下有马果然还是……总之将先调整好 ',
            urara.get_colored_name(),
            ' 的状态作为首要目标吧。',
          ]);
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '就这样，训练员',
        you.adult_sex_title,
        '（您）与 ',
        urara.get_colored_name(),
        ' 决定好了下次的参赛目标。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '只是',
        urara.sex,
        '究竟能挑战到什么程度……也只能请您再鞭策',
        urara.sex,
        '一下了。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '下次再见的时候，恐怕就没这么容易了……',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '心意突袭！II！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await era.printAndWait(
        '清早，起床洗漱穿衣，囫囵的吃下早餐，顺便在站在门口时轻描淡写的看眼日历。',
      );
      await era.printAndWait([
        '但在看清日期后，',
        you.get_colored_name(),
        ' 随即严肃起来。今天是情人节，是个大概需要随时紧绷的特别日子。',
      ]);
      await era.printAndWait([
        '就像计划永远赶不上变化的此时此刻，在门廊前叹了口气，',
        you.get_colored_name(),
        ' 拉开了大概率马上就会被敲响的大门。',
      ]);
      await era.printAndWait([
        '正如 ',
        you.get_colored_name(),
        ' 所料，从门后探出的又是与「上次」相同的粉色马耳套，以及小动物可爱的笑脸。',
      ]);

      era.printButton('「这次也来得这么早啊，不要勉强自己哦？」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait(
            '没有勉强哦！乌拉拉为了今天准备了很多，包括昨天已经把大家的巧克力送完了！',
          );
          await urara.say_and_wait([
            '因为是 ',
            callname,
            '，所以这次我想做得更正式一些呢！因为是难得的情人节嘛！',
          ]);
          await era.printAndWait([
            '对 ',
            you.get_colored_name(),
            ' 俏皮地笑着，小',
            urara.uma_sex_title,
            '摇晃着手中的袋子贴在 ',
            you.get_colored_name(),
            ' 的身上，暧昧的氛围变得更加浓厚起来。',
          ]);
        } else {
          await urara.say_and_wait([
            '乌拉拉没有勉强自己哦！只是大家的巧克力我昨天就提前分掉了，今天只有 ',
            callname,
            '！',
          ]);
          await urara.say_and_wait([
            '不过大家都沉浸在节日氛围里，所以今天 ',
            callname,
            ' 和我多玩一会儿也没关系吧？',
          ]);
          await era.printAndWait([
            '露出天真可爱的笑容，小',
            urara.uma_sex_title,
            '在 ',
            you.get_colored_name(),
            ' 的玄关前蹦蹦跳跳地举着点心袋子。',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '没有勉强哦？乌拉拉在昨天就把大家的巧克力分完了，但是 ',
          callname,
          ' 的……是特别的！',
        ]);
        await urara.say_and_wait([
          '而且我也想和 ',
          callname,
          ' 一起过情人节，所以……这个，是给 ',
          callname,
          ' 的！',
        ]);
        await era.printAndWait([
          '轻轻举起怀中的纸袋，小',
          urara.uma_sex_title,
          '带着一点',
          urara.teen_sex_title,
          '的暧昧，慢慢地将身体贴在了 ',
          you.get_colored_name(),
          ' 的身上。',
        ]);
      } else {
        await urara.say_and_wait([
          '其实也不算勉强哦？只是昨天分巧克力的时候把 ',
          callname,
          ' 忘记了……',
        ]);
        await urara.say_and_wait([
          '所以今天我特地把 ',
          callname,
          ' 的巧克力送来了，但是……外面有点冷，',
          callname,
          '……？',
        ]);
        await era.printAndWait([
          '一边向小手哈着气，小',
          urara.uma_sex_title,
          '一边从怀中取出了装着巧克力的袋子。',
        ]);

        if (
          era.getAddedCharacters().filter((e) => era.get(`love:${e}`) >= 75)
            .length > 2
        ) {
          await urara.say_and_wait([
            '而且乌拉拉明白了呢，今天会有很多人来围堵受欢迎的 ',
            callname,
            '，所以乌拉拉也要占得先机！',
          ]);
          await era.printAndWait([
            '嗯……诶？啊？突然被 ',
            urara.get_colored_name(),
            ' 的话语猛敲了下脑袋，',
            you.get_colored_name(),
            ' 一时尴尬的不知道该说什么好。',
          ]);
          await era.printAndWait([
            '而似乎是察觉到了 ',
            you.get_colored_name(),
            ' 脸上的窘迫，',
            urara.get_colored_name(),
            ' 虽然依旧摆着恶作剧的笑容，但也适时的结束了话题。',
          ]);
          await urara.say_and_wait([
            '嘿嘿～什么都没有哦，乌拉拉什么都没说～',
            callname,
            ' 听错了哟～',
          ]);
          await era.printAndWait([
            '……这真的是想要结束话题的样子吗？而且',
            urara.sex,
            '这挑衅大人的方法到底是从哪里学来的……',
          ]);
        }
      }
      await era.printAndWait([
        '轻盈地钻进 ',
        you.get_colored_name(),
        ' 的住处，两人在桌前坐好后，',
        urara.get_colored_name(),
        ' 笑着把纸袋中的内容物一股脑的倒在了盘中。',
      ]);
      await era.printAndWait([
        '相比于去年过于有创造力的多口味巧克力，今年小',
        urara.uma_sex_title,
        '的礼物并没有那么童趣。',
      ]);
      await era.printAndWait([
        '但注视眼前堆积成山的爱心巧克力曲奇，',
        you.get_colored_name(),
        ' 的记忆也慢慢飞回了相遇后的第一个年末……',
      ]);
      await urara.say_and_wait([
        '因为 ',
        callname,
        ' 喜欢的还是乌拉拉的饼干对吧？所以我又做了这个！',
      ]);
      await urara.say_and_wait([
        callname,
        '，现在就吃一口看看吧！我保证这次一定好吃到连舌头都会融化哦！',
      ]);
      await era.printAndWait([
        '连舌头都会融化，听起来怪危险的。这不是形容饼干的说法吧，还是说 ',
        urara.get_colored_name(),
        ' 又加了什么？',
      ]);
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 期待的催促声中，',
        you.get_colored_name(),
        ' 若有所思的将手伸向了还带着少许余温的饼干。',
      ]);
      await era.printAndWait(
        '的确……非常好吃。虽然造型依旧十分零碎，但口味却比上次年末时更加细腻香甜……',
      );
      await era.printAndWait([
        '而读出了 ',
        you.get_colored_name(),
        ' 脸上「舌头被融化」的震撼，',
        urara.get_colored_name(),
        ' 也悄悄地着坐到 ',
        you.get_colored_name(),
        ' 身边。',
      ]);
      await urara.say_and_wait(
        '其实这里面有个好吃的秘密哦？虽然应该保密的，但乌拉拉可以破例告诉你哦！',
      );
      await urara.say_and_wait([
        callname,
        '，如果想知道的话，就把耳朵靠过来吧……？',
      ]);
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '可当 ',
          you.get_colored_name(),
          ' 准备倾听时，',
          urara.get_colored_name(),
          ' 却在下一秒变了脸色。突然跨坐上 ',
          you.get_colored_name(),
          ' 的腰间，小',
          urara.uma_sex_title,
          '将 ',
          you.get_colored_name(),
          ' 按在了身下。',
        ]);
        await era.printAndWait([
          '用娇小柔软的身体压在 ',
          you.get_colored_name(),
          ' 的身上，',
          urara.teen_sex_title,
          '绯红的脸颊与樱瞳中绽放出的满是恋人的情欲。',
        ]);
        await urara.say_and_wait([
          '对 ',
          callname,
          ' 的祝福也是，对 ',
          callname,
          ' 的爱也是，乌拉拉加了很多很多……',
        ]);
        await urara.say_and_wait([
          '所以既然是难得做出来的，那 ',
          callname,
          ' 一定要和乌拉拉一起吃掉哦？',
        ]);
        if (era.get('talent:52:乳房尺寸') > 0) {
          await urara.say_and_wait([
            '而且除了对 ',
            callname,
            '『爱』之外，乌拉拉还按照大家的传言加了其他东西……',
          ]);
          await era.printAndWait([
            '骑在 ',
            you.get_colored_name(),
            ' 身上轻轻剥开自己的外套，小',
            urara.uma_sex_title,
            '解开了已经在颤巍巍的发情中粘稠的湿了一片的束胸。',
          ]);
          await era.printAndWait(
            '而之后摇晃着映入眼中的，则是一对翘起的尖端还不断分泌着奶白色的娇嫩乳肉。',
          );
          await era.printAndWait([
            '用臂弯捧起与自己娇小的身体不相符的两只魅乳，',
            urara.get_colored_name(),
            ' 羞红的小脸上又多了一份大人的妖艳。',
          ]);
          await urara.say_and_wait([
            '除了唾液之外，乌拉拉做饼干时用的奶也是自己的哦？所以……',
            callname,
            ' 要多吃一点哦？',
          ]);
        }
        await era.printAndWait([
          '将饼干衔在唇间，小',
          urara.uma_sex_title,
          '俯下身体，将柔软细嫩的唇舌与与融化着甜蜜的涎水一同送入了 ',
          you.get_colored_name(),
          ' 的口中。',
        ]);
        await era.printAndWait([
          '从想要推开对方的坐立难安，到连思考都融化在吮吸中的十指相合，与 ',
          you.get_colored_name(),
          ' 缠绵的',
          urara.teen_sex_title,
          '放松了身体……',
        ]);
        await era.printAndWait([
          '随着攻守的互换，双眼涣散的小',
          urara.uma_sex_title,
          '在 ',
          callname,
          ' 缠紧的怀抱与甜蜜的深吻中发出着绵软的娇吟声。',
        ]);
        await era.printAndWait([
          '面对完全进入了情人节陷阱的 ',
          you.get_colored_name(),
          '，小小的',
          urara.uma_sex_title,
          '将身体的使用权安心的交给了自己的爱人……',
        ]);

        await era.printAndWait('现在的话，做什么都可以被允许……');
        era.printButton('在这里吃掉乌拉拉……（爱慕+5）', 1);
        era.printButton('先不做什么了吧……（好感+20）', 2);
        ret.push(await era.input());
        if (ret[0] === 2) {
          await era.printAndWait([
            '摇了摇头，',
            you.get_colored_name(),
            ' 放开了衣衫凌乱的 ',
            urara.get_colored_name(),
            '，但在 ',
            you.get_colored_name(),
            ' 意料之外的是，此时的小',
            urara.uma_sex_title,
            '却并没有表达出不满。',
          ]);
          await era.printAndWait([
            '安静地拉起自己半脱的衣物，小',
            urara.uma_sex_title,
            '依旧满是红晕的小脸上露出了恶作剧失败时的调皮笑容。',
          ]);
          await urara.say_and_wait([
            callname,
            ' 做的没错呢，一大早就这样做有点过分了，不过难得是情人节，一起都吃掉吧……？',
          ]);
          await urara.say_and_wait(
            '看吧，这里还有很多哦？把嘴张开吧，接下来一定会很开心的！',
          );
          await era.printAndWait([
            '果然，还没放弃的 ',
            urara.get_colored_name(),
            ' 拿起下一块掺杂了太多「调料」的曲奇，带着甜蜜的笑容将点心含在口中。',
          ]);
          await era.printAndWait('看来这个情人节，注定要艰难度过了……');
        }
      } else {
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的耳边轻声吹拂着，',
          urara.teen_sex_title,
          '的芳香与节日的祝福一同飘入了 ',
          you.get_colored_name(),
          ' 的耳中。',
        ]);
        await urara.say_and_wait([
          '其实啊……乌拉拉加了好多心意，因为我希望 ',
          callname,
          ' 每天都能开心！',
        ]);
        await urara.say_and_wait(
          '还有大家说的，让魔法咒语生效的最后一步……啾～',
        );
        await era.printAndWait([
          '贴在 ',
          you.get_colored_name(),
          ' 的身边保持着悄悄话的距离，',
          urara.get_colored_name(),
          ' 为 ',
          you.get_colored_name(),
          ' 的脸颊献上了一枚天使祝福般的小小轻吻。',
        ]);
        await era.printAndWait([
          '明明还不是恋人，但小',
          urara.uma_sex_title,
          '却选择献上如此贵重的礼物，大家到底对',
          urara.sex,
          '说了些什么呢……',
        ]);
        await era.printAndWait([
          '用眼角的余光注视着',
          urara.teen_sex_title,
          '春光依旧的笑容，',
          you.get_colored_name(),
          ' 的心跳声也不由自主的打起了节拍。',
        ]);

        await urara.say_and_wait([
          '嘿嘿～',
          callname,
          ' 觉得怎么样呢？乌拉拉的咒语有没有成功呢？',
        ]);
        era.printButton('「开心到今后一整天都不敢洗脸了！」（爱慕+5）', 1);
        era.printButton('「嗯！乌拉拉的魔法大成功哦！」（好感+20）', 2);
        ret.push(await era.input());
        await urara.say_and_wait([
          '对吧？让 ',
          callname,
          ' 又心动又高兴的魔法果然很有效！不愧是大家流传至今的方法呢！',
        ]);
        await era.printAndWait([
          '所以这个「魔法咒语」，果然不是友情向的吧？看着兴高采烈的小',
          urara.uma_sex_title,
          '，猜到什么的 ',
          you.get_colored_name(),
          ' 别开了视线。',
        ]);
        await urara.say_and_wait([
          '所以为了今后能都让 ',
          callname,
          ' 更加开心，乌拉拉的饼干还有很多哦？',
        ]);
        await urara.say_and_wait([
          callname,
          '！和乌拉拉一起，把未来的好心情吃下去吧！',
        ]);
        await era.printAndWait([
          '笑着拿起下一块添加了祝福的情人节礼物，',
          urara.get_colored_name(),
          ' 带着让人心跳加速的笑容将它塞进了 ',
          you.get_colored_name(),
          ' 的口中。',
        ]);
        await era.printAndWait([
          '在不知不觉中变得暧昧的「友情」氛围中，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 一起分享着巧克力饼干，度过了情人节的早上。',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait('我、我没关系哦……？唉……');
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = '迎向二月锦标！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        '有时候，就连我也不得不去怀疑运气啊、命运啊这些东西，或许真的有些门道。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '您又是怎么想的？不过带领',
        urara.uma_sex_title,
        '们超越命运，也是作为训练员',
        you.adult_sex_title,
        '（您）的使命吧。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '但是，那些无法超越命运的',
        urara.uma_sex_title,
        '们，又能像',
        urara.sex,
        '的愿望那样一起找到幸福吗？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 已经忘记是第几次一起站在不同的选手通道内，',
        you.get_colored_name(),
        ' 与',
        urara.sex,
        '已经形成习惯般做着赛前交流。',
      ]);
      await era.printAndWait([
        '不过这一次，或许是被周围的气氛所感染，虽然依旧没多紧张，但小',
        urara.uma_sex_title,
        '却并没有往常的笑脸。',
      ]);
      await urara.say_and_wait([
        callname,
        '，外面果然人很多啊，而且这里的大家的脸色比上次更严肃了。',
      ]);

      era.printButton('「不过乌拉拉也和上次一样，并不觉得有多紧张对吧？」', 1);
      await era.input();

      await urara.say_and_wait('嗯，所以乌拉拉担心的是那一边。');
      await era.printAndWait([
        '顺着担当的视线，',
        you.get_colored_name(),
        ' 发现了一位似乎在训练场上有过几面之缘的',
        urara.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '仿佛是与周围的气氛所隔离，',
        urara.sex,
        '正在通道的边缘一个人做着赛前热身，神态也紧绷得有些可怕。',
      ]);
      await era.printAndWait([
        urara.sex,
        '是 ',
        urara.get_colored_name(),
        ' 的朋友吧，不过为什么会自己站在这里，是自己来参赛的吗？',
        urara.sex,
        '的训练员呢？',
      ]);
      await era.printAndWait([
        '而又从 ',
        you.get_colored_name(),
        ' 的表情读出了疑惑，',
        urara.get_colored_name(),
        ' 立刻向 ',
        you.get_colored_name(),
        ' 解释起了事情的经过。',
      ]);
      await urara.say_and_wait([
        urara.sex,
        '是乌拉拉的朋友哦，我们是因为经常并跑训练认识的，因为我们的距离好像很合得来。',
      ]);
      await urara.say_and_wait([
        '但是和乌拉拉不一样的是，',
        urara.sex,
        '从以前就很厉害，甚至没有训练员也一直跑到现在。',
      ]);
      await era.printAndWait([
        '若是和 ',
        urara.get_colored_name(),
        ' 适应性差不多的话，训练时一起也很正常，只是在赛场上相遇这应该还是第一次。',
      ]);
      await era.printAndWait([
        '不过竟然没有训练员？难道',
        urara.sex,
        '从出道以来，都是自己训练还单独出赛吗？',
      ]);
      await urara.say_and_wait([
        '因为',
        urara.sex,
        '是个很要强的',
        urara.uma_sex_title,
        '，而且一直把G1作为目标，所以这次的比赛',
        urara.sex,
        '一定非常重视。',
      ]);
      await urara.say_and_wait([
        '但为了比赛做准备，',
        urara.sex,
        '已经很久没开心过了，如果这场比赛',
        urara.sex,
        '能赢下来的话，应该可以变得轻松吧……',
      ]);
      await era.printAndWait(
        '原来如此，不过这已经不是眼下能解决的问题了，或许之后可以专门找个机会聊聊，但是现在……',
      );

      era.printButton('「但是现在，乌拉拉不会就这样把一着送给朋友吧。」', 1);
      await era.input();

      await urara.say_and_wait([
        '当然！我明白 ',
        callname,
        ' 的意思，而且乌拉拉已经做出决定了，我会努力的赢下来！',
      ]);
      await urara.say_and_wait([
        '只是',
        urara.sex,
        '现在的样子，乌拉拉还是很担心……',
      ]);

      era.printButton(
        '「我明白了，总之先努力去比赛吧，剩下的之后再去想？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '也是啊，只是担心的话什么都解决不了，那 ',
        callname,
        '，我先上了哦！',
      ]);

      era.printButton('「嗯！今天也加油哦！」', 1);
      await era.input();

      await era.printAndWait([
        '在入场提示响起的同时向 ',
        you.get_colored_name(),
        ' 轻轻挥手后，重新挂起笑容的 ',
        urara.get_colored_name(),
        ' 率先一步跃入了赛场。',
      ]);
      await era.printAndWait([
        '但就在那位 ',
        urara.get_colored_name(),
        ' 的好友从后方与 ',
        you.get_colored_name(),
        ' 擦肩而过时，空间却在逐渐褪色中被什么人按下了慢镜头。',
      ]);
      await era.printAndWait([
        '虽然没看到那个身影，但就像恶魔的出现总伴随着低语，那熟悉的语调再次环绕在 ',
        you.get_colored_name(),
        ' 的耳畔。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '不用担心哦？就像乌拉拉的直觉那样，就算乌拉拉可能会输，',
        urara.sex,
        '可能也没有下次了。',
      ]);
      await era.printAndWait([
        '今天「',
        inner_urara.sex,
        '」的言语似乎有些刺耳，当然听上去没什么德行的发言，自然是得不到别人好声好气的回应。',
      ]);

      era.printButton(
        '「这又是什么意思？好不容易要出赛了，不管是对谁能不能说点好话？」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '别误会，我说的是字面意思哦？既然您是训练员，那帮我看看这位同学的腿如何？',
      );
      await era.printAndWait([
        '在慢放的时间中，',
        you.get_colored_name(),
        ' 看向那双支撑',
        urara.teen_sex_title,
        '接近希望的腿，但随后就像提前看到了梦想破碎般皱起眉头。',
      ]);
      await era.printAndWait([
        '该怎么形容呢……说得不那么难听的话，',
        urara.sex,
        '作为一名赛',
        urara.uma_sex_title,
        '的「保质期」可能已经快到头了。',
      ]);
      await era.printAndWait([
        '的确，就算没有训练员',
        urara.sex,
        '也能将各方面做得很好，但即使拥有独身出道的勇敢，',
        urara.sex,
        '也未能获得三女神的垂青。',
      ]);
      await era.printAndWait(
        '还是那个逃不开的话题，「平庸的极限」、「资质的尽头」，以及「无法如愿的大多数」。',
      );
      await era.printAndWait([
        '不过现在可不是辩论这些的时候，',
        you.get_colored_name(),
        ' 也不打算再陷入',
        urara.sex,
        '的节奏里。',
      ]);
      await era.printAndWait(
        '况且就算再怎么严峻，这个只有三女神有解的问题本来就不可能由一介训练员来答。',
      );

      era.printButton(
        `「说到底${urara.sex}的状况不是一个外人能主观臆断，而且${urara.sex}可能也不会像看上去那样……」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '随后，',
        you.get_colored_name(),
        ' 试图掌握主权的辩解便被一阵以 ',
        inner_urara.get_colored_name(),
        ' 清脆的笑声构成，内容却十分纯粹的嘲笑所打断了。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '我不讨厌您的思辨哦？但您肯定知道所我指的，是将要与',
        urara.sex,
        '同台竞技的小努力家吧？',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '选择取胜的小乌拉拉，做好可能会面对在终点前失去一切的好友的心理准备了吗？',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '能为自己即将坠落的朋友，带来连那个『完美的会长』都无法带给众生的笑容吗？',
      ]);
      await era.printAndWait(
        '总觉得身体里有什么东西被点燃了。可以啊，这么问是吧？这是哪来的小鬼啊——',
      );

      era.printButton(
        '「我拒绝回答你的谜语，现在乌拉拉还要比赛，闹够了的话就请赶紧离开。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '尽量在愤怒中维持着基本的礼仪，',
        you.get_colored_name(),
        ' 向那个',
        { color: inner_urara.color, content: '「无法触碰的乌拉拉」' },
        '下达了逐客令。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '啊，说的也是啊，毕竟乌拉拉甚至还不知道',
        urara.sex,
        '的朋友会变成什么样子。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '还没看到',
        urara.sex,
        '后悔的样子，',
        urara.sex,
        '的训练员',
        you.adult_sex_title,
        '自然也答不上这些嘛，也难怪会生气呢。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '那么下次再见，记得照顾好乌拉拉哦？',
      );

      era.printButton(
        '「说了多少次了会照顾好的！所以再见记得给我好好说话！」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '在逐渐恢复流动的空气中，',
        you.get_colored_name(),
        ' 愤怒地转身对着逐渐从身后淡出的声音猛得挥了一拳。',
      ]);
      await era.printAndWait([
        '当然，',
        you.get_colored_name(),
        ' 身处的选手通道中早已空无一人，自然也什么都不会发生……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = '不甘心吗？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} elm_sta 榆树锦标赛（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        '在比赛结束后，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 正走在一同前往选手休息室的通道内。',
      ]);
      await era.printAndWait([
        '而似乎还沉浸在比赛的气氛当中，即使刚刚就在现场，',
        urara.get_colored_name(),
        ' 依旧不断地 ',
        you.get_colored_name(),
        ' 聊着奔跑时的经过。',
      ]);
      await urara.say_and_wait(
        '嘿嘿～而且大家都很为我开心呢！还能得到第一名真是太好了！',
      );
      await urara.say_and_wait([
        '只要我继续奔跑，大家就会继续露出笑容吧？',
        callname,
        '，下次要参加什么比赛呢？',
      ]);
      era.printButton('「说到这个啊……乌拉拉下一场有想跑的比赛吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯？虽然能赢下来更好，但只要能跑步的话，其实什么都可以哦——',
      );
      await era.printAndWait([
        '还是预料之中的回答，虽然 ',
        you.get_colored_name(),
        ' 觉得是时候让 ',
        urara.get_colored_name(),
        ' 自己选比赛了，但果然按',
        urara.sex,
        '的性子恐怕也选不出个所以然。',
      ]);
      await era.printAndWait([
        '而且决定赛程时若考虑到最终目标为「',
        arim_kin,
        '」的话，对 ',
        urara.get_colored_name(),
        ' 来说能选择也实在有限。',
      ]);

      era.printButton(`「这样的话……下次参加『榆树锦标赛』怎么样？」`, 1);
      await era.input();

      await era.printAndWait(
        '虽然这场比赛可能不是最佳选择，但权衡利弊之后也只能先预定这场了。',
      );
      await urara.say_and_wait([
        '好，我知道了！我会去跟商店街和应援会的大家说下一场是 ',
        elm_sta,
        '——',
      ]);

      era.printButton(
        `「顺便一提如果真要跑这场的话，大家赶来的难度比较高，因为『榆树锦标赛』在北海道。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '诶？是吗！？那也太远了！不过好像也没关系，因为大家从哪里都看得到乌拉拉吧！',
      );
      await urara.say_and_wait(
        '只要大家还想着乌拉拉就完全不要紧，所以到时候也只要想办法赢下来就好了！',
      );

      era.printButton(
        '「不过在那之前，晚些时候还要进行Live，大家还等着看乌拉拉帅气的一面哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '我明白了！那么乌拉拉去准备演唱会了！',
        callname,
        ' 有什么事就先去忙吧!',
      ]);

      era.printButton(
        '「哦！那我就先去舞台的后台了，有什么事一定要记得及时联系啊！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('好——');
      era.drawLine();
      await urara.print_and_wait([
        '与 ',
        callname,
        ' 告别并目送着',
        you.sex,
        '离开自己的视线后，我转身走进了休息室。',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          ' 三步一回头的样子总觉得有点可爱，就好像 ',
          callname,
          ' 是小孩子，乌拉拉才是妈妈一样。',
        ]);
        await urara.print_and_wait([
          '要是每天都能被 ',
          callname,
          ' 那样一直看着就好了，但是那样是不是太任性了？',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ' 还是老样子转身就走了，如果能再回头看看乌拉拉就好了呢……',
        ]);
        await urara.print_and_wait([
          '不过，乌拉拉为什么会在意这个呢？',
          callname,
          ' 好像也没有空闲一直看着乌拉拉吧？',
        ]);
      }
      await urara.print_and_wait([
        '果然还是很难懂啊……嗯？那边的角落里好像有谁蜷缩着，而且脸色好差……啊！是',
        urara.sex,
        '……',
      ]);
      await urara.print_and_wait([
        '是因为没能赢下G1所以受了打击吗？乌拉拉还是第一次见到要强的',
        urara.sex,
        '这么脆弱的样子……',
      ]);
      await urara.print_and_wait([
        '但是变成这样的话就更不能放着不管了，虽然我没办法像 ',
        callname,
        ' 一样……总之先上去问问吧！',
      ]);
      await urara.say_and_wait('那个，你还好吗？是那里不舒服吗？');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……啊，乌拉拉……嗯，不用担心，我没事的……」',
      ]);
      await urara.say_and_wait(
        '但是你的表情看起来好难受！等一下就要开演唱会了，没关系的吧？',
      );
      await urara.say_and_wait(
        '不要勉强自己哦？我会陪着你的，所以直到恢复笑容前——',
      );
      await era.printAndWait([urara.uma_sex_title, 'A「现在别碰我！」']);
      await urara.say_and_wait('……咦？好疼……！');
      await urara.print_and_wait([
        '伸出的手被用',
        urara.uma_sex_title,
        '的气力拍开了，被甩到的手背上逐渐传来了火辣辣的触感。',
      ]);
      await urara.print_and_wait([
        '而抬起头来时，',
        urara.sex,
        '明明是位总是笑眯眯的',
        urara.uma_sex_title,
        '，但如今展示向我展示出的却是一张彷徨又悲伤的脸。',
      ]);
      await urara.print_and_wait([
        '到底该怎样面对这样的表情呢？可是现在走开的话，只会让人',
        urara.sex,
        '更加伤心而已。',
      ]);
      await urara.print_and_wait([
        '果然还是不能走。咬紧嘴唇，再遮住红肿发痛的右手，我蹲坐在',
        urara.sex,
        '的身旁，等待着',
        urara.sex,
        '的继续倾诉。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「怎么可能，笑得出来啊……！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「好不容易能参加G1的，我也想站在舞台的中心啊！但难得有这个机会，我却这么弱……」',
      ]);
      await urara.print_and_wait(
        '如果别人伤心的话，就听别人先讲完真心话，妈妈也一直是这么告诉我的。',
      );
      await urara.print_and_wait([
        '现在的话，',
        urara.sex,
        '应该能轻松些吧？但是这张侧脸，也好像从哪里见过，这到底是怎样的表情来着？',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「对不起……乌拉拉，我不是故意想要这样的……但是，我真的很难笑出来啊……」',
      ]);
      await urara.say_and_wait('不，乌拉拉一点都不觉得疼！你真的没关系吗？');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……乌拉拉哪里像不疼的样子啊，明明表情都快哭出来了……」',
      ]);
      await urara.say_and_wait('诶？真的吗……不对！乌拉拉真的没事哦！');
      await urara.print_and_wait([
        '虽然的确很疼没错……可能没那么疼！但是似乎看到我的表情后，',
        urara.sex,
        '颤抖地嘴角也一点点勾了起来。',
      ]);
      await urara.print_and_wait(
        '乌拉拉的目的是达成了没错，但是真的有让人破涕而笑的水平吗？乌拉拉的表情……',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「不是那个意思哦……不过我没事的，等上台的时候我就可以好好露出笑容了。」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「乌拉拉总是愿意听我说话呢，这次也很感谢你，所以也赶快在上台前调整好表情吧！」',
      ]);
      await urara.say_and_wait(
        '嗯！没关系的！无论几次乌拉拉都可以听你说话哦！',
      );
      await urara.print_and_wait([
        '在说出道谢的话之后主动站起，终于冷静下来的',
        urara.sex,
        '轻轻将我也拉了起来。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「说的是呢，无论几次都行……下次我绝对……要站上正中间的位置！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「一定……还有下次的……！」',
      ]);
      await urara.print_and_wait([
        '在道出「待会再见」后，',
        urara.sex,
        '就像是要遮掩什么般转身离去了。',
      ]);
      await urara.print_and_wait([
        '但是尽管表面上已恢复如常，',
        urara.sex,
        '的背影还是被如同抽空了活力般单薄。',
      ]);
      await urara.print_and_wait([
        urara.sex,
        '的双腿似乎因为蹲得太久而麻木了，一瘸一拐的样子更显得有些「失魂落魄」。',
      ]);
      await urara.print_and_wait([
        '乌拉拉还第一次看到',
        urara.sex,
        '那个样子，不管是刚才过于悲伤的表情，还是现在离开时失落的背影，',
      ]);
      await urara.print_and_wait([
        '不过我也终于想起来，',
        urara.sex,
        '现在的样子，就像是即使已经错过了人生最后的某个机会后，还在强装镇定一样……',
      ]);
      await urara.print_and_wait(
        '总觉得发生了什么不可挽回的事情，是乌拉拉太敏感了吗？',
      );
      await urara.print_and_wait([
        '但是',
        urara.sex,
        '说的没错，等下还要上台演出，剩下的事情，就用结束后剩下的时间来思考吧！',
      ]);
      await urara.print_and_wait([
        '通过拍打脸颊让自己再次提前精神，我也转身追上',
        urara.sex,
        '的背影，一起跑向了Live的后台。',
      ]);
      await urara.print_and_wait([
        '随着有力的踏步声，走在前面的',
        urara.sex,
        '似乎又恢复了神采奕奕的样子。',
      ]);
      await urara.print_and_wait(
        '是乌拉拉看错了吗？一定是我太敏感了吧……嗯，一定是的……',
      );
      era.drawLine();
      await era.printAndWait([
        '今天的Live相当的顺利啊，从舞台后台绕到商店街与应援会的大家所在的观众席中，',
        you.get_colored_name(),
        ' 欣慰的想道。',
      ]);
      await era.printAndWait([
        '就是说嘛，不管跑在第几，站在什么位置，',
        urara.get_colored_name(),
        ' 都可以将自己最棒的笑容展现给大家的。',
      ]);
      await era.printAndWait([
        '所以大家才会这么喜欢 ',
        urara.get_colored_name(),
        '，大家都喜欢就算跑输，就算跑不赢，仍充满活力地笑着的',
        urara.sex,
        '。',
      ]);
      await era.printAndWait([
        '而且可能不是每次都行，但现在的',
        urara.sex,
        '无疑已经拥有了赢得比赛的实力。',
      ]);
      await era.printAndWait([
        '商店街的人A「……乌拉拉',
        urara.sex,
        '，真的很努力呢，之前的担心看来也可以放下了。」',
      ]);
      await era.printAndWait([
        '商店街的人B「是啊，就算心里想着只要',
        urara.sex,
        '开心就好了，',
        urara.sex,
        '以后也只会被这些想法绊住脚步呢。」',
      ]);
      await era.printAndWait([
        '商店街的人C「现在的小乌拉拉已经成长了咯，正好我也想在 ',
        arim_kin,
        ' 上也看到',
        urara.sex,
        '的笑脸啊。」',
      ]);
      await era.printAndWait([
        '在后面悄悄地侧过耳去，支持着 ',
        urara.get_colored_name(),
        ' 的各位也在一边看着演唱会一边说着什么。',
      ]);
      await era.printAndWait([
        '不过看起来 ',
        you.get_colored_name(),
        ' 的策略正在逐渐被应验，只要坚持下去，支持着 ',
        urara.get_colored_name(),
        ' 的人总会逐渐认可',
        urara.sex,
        '的前进。',
      ]);
      await era.printAndWait([
        '困难在不经意间迎刃而解啊……总之先将这件事记下来，回去的时候偷偷向 ',
        urara.get_colored_name(),
        ' 报喜好了。',
      ]);
      await era.printAndWait([
        '商店街的人A「不过乌拉拉最后的目标好像是 ',
        arim_kin,
        '，那个比赛的入选好像还挺严格的。」',
      ]);
      await era.printAndWait(
        '商店街的人C「但是有没有什么我们能帮忙的地方呢？总觉得干看着小乌拉拉心里会不安啊。」',
      );
      await era.printAndWait(
        '商店街的人D「其实，我倒是有个想法的，就像我们以前为了复兴商店街做的那样……」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          '商店街的人C「所谓人多力量大对吧？不过乌拉拉已经被选入过一次了，还需要那样吗？」',
        );
        await era.printAndWait(
          '商店街的人D「确实可能大家会担心过头，但是也要尽量避免意外呢，毕竟是那孩子啊……」',
        );
      }
      await era.printAndWait(
        '嗯？这又是在说什么？难道大家瞒着自己做了什么其他事情吗？',
      );
      await era.printAndWait([
        '直觉告诉 ',
        you.get_colored_name(),
        ' 这是很重要的事，但当 ',
        you.get_colored_name(),
        ' 想要凑过去听时，抬起头来却发现Live也即将结束了。',
      ]);
      await era.printAndWait([
        '虽然很在意大家所谈论的事情，但为了能够及时查看 ',
        urara.get_colored_name(),
        ' 的状况，',
        you.get_colored_name(),
        ' 还是立刻赶往了休息室。',
      ]);
      await era.printAndWait([
        '不管是舞台上 ',
        urara.get_colored_name(),
        ' 不易察觉的不充分笑容、「',
        urara.sex,
        '」的频繁出现，还是比赛前看到的那个阴沉的',
        urara.child_sex_title,
        '。',
      ]);
      await era.printAndWait(
        '现在就连大家私下的讨论，都给人一种惴惴不安的感觉。怎么回事，最近为什么会如此敏感？',
      );
      await era.printAndWait(
        '总感觉在未来的某天会发生什么，但愿是自己多心了吧……',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('可以和我随便聊一聊吗？');
      await inner_urara.say_as_unknown_and_wait([
        '说起来，训练员',
        you.adult_sex_title,
        '（您）很清楚吧，',
        urara.uma_sex_title,
        '在奔跑中积累下的损伤是难医治。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '因为天生的身体结构与部分的体质原因，也因为很多现在还没法解释的现象。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '再加上职业运动者经常需要超越身体负荷，这样引发的伤病在一般情况几乎没法医治的。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '怎么突然说起这个话题了？没什么，只是突然在想，乌拉拉一直好像以来都很幸运。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '要继续照顾好',
        urara.sex,
        '哦，不要让',
        urara.sex,
        '也成为迷失在路上的一员……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_lose: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} elm_sta 榆树锦标赛（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        '在比赛结束后，似乎因为不小心丢掉了比赛的胜利，',
        urara.get_colored_name(),
        ' 显得有些失落。',
      ]);
      await era.printAndWait([
        '不过这样的状态并没有持续多久，想到了大家的小',
        urara.uma_sex_title,
        '很快就将耳朵支起来回复了笑容。',
      ]);
      await urara.say_and_wait(
        '就算这样大家还是很开心呢！而且之后还要上台表演，所以现在也不是沮丧的时候!',
      );
      await urara.say_and_wait([
        '啊对了！',
        callname,
        '，下次要参加什么比赛呢？',
      ]);
      era.printButton('「说到这个啊……乌拉拉下一场有想跑的比赛吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯？虽然能赢下来更好，但只要能跑步的话，其实什么都可以哦——',
      );
      await era.printAndWait([
        '还是预料之中的回答，虽然 ',
        you.get_colored_name(),
        ' 觉得是时候让 ',
        urara.get_colored_name(),
        ' 自己选比赛了，但果然按',
        urara.sex,
        '的性子恐怕也选不出个所以然。',
      ]);
      await era.printAndWait([
        '而且决定赛程时若考虑到最终目标为「',
        arim_kin,
        '」的话，对 ',
        urara.get_colored_name(),
        ' 来说能选择也实在有限。',
      ]);

      era.printButton(`「这样的话……下次参加『榆树锦标赛』怎么样？」`, 1);
      await era.input();

      await era.printAndWait(
        '虽然这场比赛可能不是最佳选择，但权衡利弊之后也只能先预定这场了。',
      );
      await urara.say_and_wait([
        '好，我知道了！我会去跟商店街和应援会的大家说下一场是 ',
        elm_sta,
        '——',
      ]);

      era.printButton(
        `「顺便一提如果真要跑这场的话，大家赶来的难度比较高，因为『榆树锦标赛』在北海道。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '诶？是吗！？那也太远了！不过好像也没关系，因为大家从哪里都看得到乌拉拉吧！',
      );
      await urara.say_and_wait(
        '只要大家还想着乌拉拉就完全不要紧，所以到时候也只要想办法赢下来就好了！',
      );

      era.printButton(
        '「不过在那之前，晚些时候还要进行Live，大家还等着看乌拉拉帅气的一面哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '我明白了！那么乌拉拉去准备演唱会了！',
        callname,
        ' 有什么事就先去忙吧!',
      ]);

      era.printButton(
        '「哦！那我就先去舞台的后台了，有什么事一定要记得及时联系啊！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('好——');
      era.drawLine();
      await urara.print_and_wait([
        '与 ',
        callname,
        ' 告别并目送着',
        you.sex,
        '离开自己的视线后，我转身走进了休息室。',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          ' 三步一回头的样子总觉得有点可爱，就好像 ',
          callname,
          ' 是小孩子，乌拉拉才是妈妈一样。',
        ]);
        await urara.print_and_wait([
          '要是每天都能被 ',
          callname,
          ' 那样一直看着就好了，但是那样是不是太任性了？',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ' 还是老样子转身就走了，如果能再回头看看乌拉拉就好了呢……',
        ]);
        await urara.print_and_wait([
          '不过，乌拉拉为什么会在意这个呢？',
          callname,
          ' 好像也没有空闲一直看着乌拉拉吧？',
        ]);
      }
      await urara.print_and_wait([
        '果然还是很难懂啊……嗯？那边的角落里好像有谁蜷缩着，而且脸色好差……啊！是',
        urara.sex,
        '……',
      ]);
      await urara.print_and_wait([
        '是因为没能赢下G1所以受了打击吗？乌拉拉还是第一次见到要强的',
        urara.sex,
        '这么脆弱的样子……',
      ]);
      await urara.print_and_wait([
        '但是变成这样的话就更不能放着不管了，虽然我没办法像 ',
        callname,
        ' 一样……总之先上去问问吧！',
      ]);
      await urara.say_and_wait('那个，你还好吗？是那里不舒服吗？');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……啊，乌拉拉……嗯，不用担心，我没事的……」',
      ]);
      await urara.say_and_wait(
        '但是你的表情看起来好难受！等一下就要开演唱会了，没关系的吧？',
      );
      await urara.say_and_wait(
        '不要勉强自己哦？我会陪着你的，所以直到恢复笑容前——',
      );
      await era.printAndWait([urara.uma_sex_title, 'A「现在别碰我！」']);
      await urara.say_and_wait('……咦？好疼……！');
      await urara.print_and_wait([
        '伸出的手被用',
        urara.uma_sex_title,
        '的气力拍开了，被甩到的手背上逐渐传来了火辣辣的触感。',
      ]);
      await urara.print_and_wait([
        '而抬起头来时，',
        urara.sex,
        '明明是位总是笑眯眯的',
        urara.uma_sex_title,
        '，但如今展示向我展示出的却是一张彷徨又悲伤的脸。',
      ]);
      await urara.print_and_wait([
        '到底该怎样面对这样的表情呢？可是现在走开的话，只会让人',
        urara.sex,
        '更加伤心而已。',
      ]);
      await urara.print_and_wait([
        '果然还是不能走。咬紧嘴唇，再遮住红肿发痛的右手，我蹲坐在',
        urara.sex,
        '的身旁，等待着',
        urara.sex,
        '的继续倾诉。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「怎么可能，笑得出来啊……！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「好不容易能参加G1的，我也想站在舞台的中心啊！但难得有这个机会，我却这么弱……」',
      ]);
      await urara.print_and_wait(
        '如果别人伤心的话，就听别人先讲完真心话，妈妈也一直是这么告诉我的。',
      );
      await urara.print_and_wait([
        '现在的话，',
        urara.sex,
        '应该能轻松些吧？但是这张侧脸，也好像从哪里见过，这到底是怎样的表情来着？',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「对不起……乌拉拉，我不是故意想要这样的……但是，我真的很难笑出来啊……」',
      ]);
      await urara.say_and_wait('不，乌拉拉一点都不觉得疼！你真的没关系吗？');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……乌拉拉哪里像不疼的样子啊，明明表情都快哭出来了……」',
      ]);
      await urara.say_and_wait('诶？真的吗……不对！乌拉拉真的没事哦！');
      await urara.print_and_wait([
        '虽然的确很疼没错……可能没那么疼！但是似乎看到我的表情后，',
        urara.sex,
        '颤抖地嘴角也一点点勾了起来。',
      ]);
      await urara.print_and_wait(
        '乌拉拉的目的是达成了没错，但是真的有让人破涕而笑的水平吗？乌拉拉的表情……',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「不是那个意思哦……不过我没事的，等上台的时候我就可以好好露出笑容了。」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「乌拉拉总是愿意听我说话呢，这次也很感谢你，所以也赶快在上台前调整好表情吧！」',
      ]);
      await urara.say_and_wait(
        '嗯！没关系的！无论几次乌拉拉都可以听你说话哦！',
      );
      await urara.print_and_wait([
        '在说出道谢的话之后主动站起，终于冷静下来的',
        urara.sex,
        '轻轻将我也拉了起来。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「说的是呢，无论几次都行……下次我绝对……要站上正中间的位置！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「一定……还有下次的……！」',
      ]);
      await urara.print_and_wait([
        '在道出「待会再见」后，',
        urara.sex,
        '就像是要遮掩什么般转身离去了。',
      ]);
      await urara.print_and_wait([
        '但是尽管表面上已恢复如常，',
        urara.sex,
        '的背影还是被如同抽空了活力般单薄。',
      ]);
      await urara.print_and_wait([
        urara.sex,
        '的双腿似乎因为蹲得太久而麻木了，一瘸一拐的样子更显得有些「失魂落魄」。',
      ]);
      await urara.print_and_wait([
        '乌拉拉还第一次看到',
        urara.sex,
        '那个样子，不管是刚才过于悲伤的表情，还是现在离开时失落的背影，',
      ]);
      await urara.print_and_wait([
        '不过我也终于想起来，',
        urara.sex,
        '现在的样子，就像是即使已经错过了人生最后的某个机会后，还在强装镇定一样……',
      ]);
      await urara.print_and_wait(
        '总觉得发生了什么不可挽回的事情，是乌拉拉太敏感了吗？',
      );
      await urara.print_and_wait([
        '但是',
        urara.sex,
        '说的没错，等下还要上台演出，剩下的事情，就用结束后剩下的时间来思考吧！',
      ]);
      await urara.print_and_wait([
        '通过拍打脸颊让自己再次提前精神，我也转身追上',
        urara.sex,
        '的背影，一起跑向了Live的后台。',
      ]);
      await urara.print_and_wait([
        '随着有力的踏步声，走在前面的',
        urara.sex,
        '似乎又恢复了神采奕奕的样子。',
      ]);
      await urara.print_and_wait(
        '是乌拉拉看错了吗？一定是我太敏感了吧……嗯，一定是的……',
      );
      era.drawLine();
      await era.printAndWait([
        '今天的Live相当的顺利啊，从舞台后台绕到商店街与应援会的大家所在的观众席中，',
        you.get_colored_name(),
        ' 欣慰的想道。',
      ]);
      await era.printAndWait([
        '就是说嘛，不管跑在第几，站在什么位置，',
        urara.get_colored_name(),
        ' 都可以将自己最棒的笑容展现给大家的。',
      ]);
      await era.printAndWait([
        '所以大家才会这么喜欢 ',
        urara.get_colored_name(),
        '，大家都喜欢就算跑输，就算跑不赢，仍充满活力地笑着的',
        urara.sex,
        '。',
      ]);
      await era.printAndWait([
        '而且可能不是每次都行，但现在的',
        urara.sex,
        '无疑已经拥有了赢得比赛的实力。',
      ]);
      await era.printAndWait([
        '商店街的人A「……乌拉拉',
        urara.sex,
        '，真的很努力呢，之前的担心看来也可以放下了。」',
      ]);
      await era.printAndWait([
        '商店街的人B「是啊，就算心里想着只要',
        urara.sex,
        '开心就好了，',
        urara.sex,
        '以后也只会被这些想法绊住脚步呢。」',
      ]);
      await era.printAndWait([
        '商店街的人C「现在的小乌拉拉已经成长了咯，正好我也想在 ',
        arim_kin,
        ' 上也看到',
        urara.sex,
        '的笑脸啊。」',
      ]);
      await era.printAndWait([
        '在后面悄悄地侧过耳去，支持着 ',
        urara.get_colored_name(),
        ' 的各位也在一边看着演唱会一边说着什么。',
      ]);
      await era.printAndWait([
        '不过看起来 ',
        you.get_colored_name(),
        ' 的策略正在逐渐被应验，只要坚持下去，支持着 ',
        urara.get_colored_name(),
        ' 的人总会逐渐认可',
        urara.sex,
        '的前进。',
      ]);
      await era.printAndWait([
        '困难在不经意间迎刃而解啊……总之先将这件事记下来，回去的时候偷偷向 ',
        urara.get_colored_name(),
        ' 报喜好了。',
      ]);
      await era.printAndWait([
        '商店街的人A「不过乌拉拉最后的目标好像是 ',
        arim_kin,
        '，那个比赛的入选好像还挺严格的。」',
      ]);
      await era.printAndWait(
        '商店街的人C「但是有没有什么我们能帮忙的地方呢？总觉得干看着小乌拉拉心里会不安啊。」',
      );
      await era.printAndWait(
        '商店街的人D「其实，我倒是有个想法的，就像我们以前为了复兴商店街做的那样……」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          '商店街的人C「所谓人多力量大对吧？不过乌拉拉已经被选入过一次了，还需要那样吗？」',
        );
        await era.printAndWait(
          '商店街的人D「确实可能大家会担心过头，但是也要尽量避免意外呢，毕竟是那孩子啊……」',
        );
      }
      await era.printAndWait(
        '嗯？这又是在说什么？难道大家瞒着自己做了什么其他事情吗？',
      );
      await era.printAndWait([
        '直觉告诉 ',
        you.get_colored_name(),
        ' 这是很重要的事，但当 ',
        you.get_colored_name(),
        ' 想要凑过去听时，抬起头来却发现Live也即将结束了。',
      ]);
      await era.printAndWait([
        '虽然很在意大家所谈论的事情，但为了能够及时查看 ',
        urara.get_colored_name(),
        ' 的状况，',
        you.get_colored_name(),
        ' 还是立刻赶往了休息室。',
      ]);
      await era.printAndWait([
        '不管是舞台上 ',
        urara.get_colored_name(),
        ' 不易察觉的不充分笑容、「',
        urara.sex,
        '」的频繁出现，还是比赛前看到的那个阴沉的',
        urara.child_sex_title,
        '。',
      ]);
      await era.printAndWait(
        '现在就连大家私下的讨论，都给人一种惴惴不安的感觉。怎么回事，最近为什么会如此敏感？',
      );
      await era.printAndWait(
        '总感觉在未来的某天会发生什么，但愿是自己多心了吧……',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('可以和我随便聊一聊吗？');
      await inner_urara.say_as_unknown_and_wait([
        '说起来，训练员',
        you.adult_sex_title,
        '（您）很清楚吧，',
        urara.uma_sex_title,
        '在奔跑中积累下的损伤是难医治。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '因为天生的身体结构与部分的体质原因，也因为很多现在还没法解释的现象。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '再加上职业运动者经常需要超越身体负荷，这样引发的伤病在一般情况几乎没法医治的。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '怎么突然说起这个话题了？没什么，只是突然在想，乌拉拉一直好像以来都很幸运。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '要继续照顾好',
        urara.sex,
        '哦，不要让',
        urara.sex,
        '也成为迷失在路上的一员……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = '粉丝感谢祭！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     */
    const f = async (urara, inner_urara, you, callname, join_arim_kin_c) => {
      await era.printAndWait([
        '站在观众席的边缘，',
        you.get_colored_name(),
        ' 一如既往的等待着运动场另一头的小',
        urara.uma_sex_title,
        '摇摇晃晃地向 ',
        you.get_colored_name(),
        ' 靠过来。',
      ]);
      await era.printAndWait([
        '今天是粉丝感谢祭，而 ',
        urara.get_colored_name(),
        ' 活用',
        urara.sex,
        '那过剩的活力，在大家的鼓励中参加着各种竞技比赛。',
      ]);
      await era.printAndWait([
        '不过即使想法是好的，实际执行起来也不是想法说的算了，就像 ',
        you.get_colored_name(),
        ' 面前这位即将累趴的小',
        urara.uma_sex_title,
        '。',
      ]);
      await urara.say_and_wait([
        '呼、呼……',
        callname,
        '！我比完了哦……拖轮胎赛跑！虽然是最后一名——！',
      ]);
      await urara.say_and_wait(
        '啊哈哈～明明训练的时候已经跑过很多次了，但大轮胎还是好重哦！',
      );

      era.printButton('「嗯，辛苦了，我看到了哦。」', 1);
      await era.input();

      await era.printAndWait([
        '事实上，不只是拖轮胎比赛，',
        urara.get_colored_name(),
        ' 这一趟下来几乎没得到进入前三名的成绩。',
      ]);
      await era.printAndWait([
        '即使是在自己的粉丝感谢祭上，小',
        urara.uma_sex_title,
        '依旧发挥着',
        urara.sex,
        '「正赛之外赢不了」的传统定则。',
      ]);
      await urara.say_and_wait(
        '不过，虽然还是赢不了，但和大家一起跑果然很开心呢！',
      );
      await era.printAndWait([
        '抹掉脸上的汗水，',
        urara.get_colored_name(),
        ' 笑着向刚刚一起比赛的',
        urara.uma_sex_title,
        '粉丝们招手，并随手拉下了自己的发带与号码布。',
      ]);
      await era.printAndWait([
        '虽然四月的天气还算不上温暖，但对于刚刚结束奔跑的 ',
        urara.get_colored_name(),
        ' 来说依旧觉得有些闷热。',
      ]);
      await era.printAndWait([
        '随着沾满汗水的粉色长发被散开，小',
        urara.uma_sex_title,
        '的身上仿佛也飘散出包含着青春荷尔蒙的奇妙清香。',
      ]);
      await era.printAndWait([
        '因为浸透而收紧的体操服边缘勒进了',
        urara.teen_sex_title,
        '含苞待放的肉体，也勾勒出',
        urara.sex,
        '年幼却丰满肉感的曲线。',
      ]);
      await era.printAndWait([
        '而拿掉号码布的遮挡后，在阳光下因吸水变得半透明的衣物更是模糊地透出了',
        urara.teen_sex_title,
        '有些香艳的轮廓……',
      ]);
      await era.printAndWait([
        '于是，顶着周围火热的目光与动机不纯的镜头们，',
        you.get_colored_name(),
        ' 默默地将外套披在了毫无防备的小',
        urara.uma_sex_title,
        '身上。',
      ]);

      urara.say(['诶？我现在全身都是汗哦？会把 ', callname, ' 的外套弄脏的！']);
      era.printButton(
        '「没关系的，况且现在还没多暖和，乌拉拉着凉了就不好了。」（好感+10）',
        1,
      );
      era.printButton(
        '「这可不行，我可不能让自己的担当被别人随便看身体啊。」（爱慕+2）',
        2,
      );
      const ret = await era.input();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '压抑着自己面对身边这位无意间泼洒着魅惑的「小大人」时砰砰直跳地心脏，',
          you.get_colored_name(),
          ' 对 ',
          urara.get_colored_name(),
          ' 摇摇头。',
        ]);
        await era.printAndWait(
          '就算粉丝是无意的，但面对这么多人却一点防备意识都没有，以后一个人的时候又该怎么办呢……',
        );
        await urara.say_and_wait([
          '诶？是因为乌拉拉的身体可能会被别人看见，所以 ',
          callname,
          ' 觉得焦躁了……？',
        ]);
        await era.printAndWait([
          '听到 ',
          you.get_colored_name(),
          ' 的回应后，故意将柔软的身体倚靠着 ',
          you.get_colored_name(),
          '，小',
          urara.uma_sex_title,
          '用绯红的脸颊害羞又魅惑地蹭着外套的衣领。',
        ]);
        await urara.say_and_wait([
          '没关系的，乌拉拉只会给重要的人看身体哦？而且……这里全都是 ',
          callname,
          ' 的味道呢～',
        ]);
        await era.printAndWait([
          '努力不去看小恋人可爱的笑脸，竭力忍住立刻将',
          urara.sex,
          '抱后场亲热的冲动，',
          you.get_colored_name(),
          ' 僵硬地将话题放回了比赛上。',
        ]);
      } else {
        await urara.say_and_wait([
          '是这样吗？嘿嘿～我都没注意到！不过乌拉拉有 ',
          callname,
          ' 在，所以不用担心！',
        ]);
        await era.printAndWait([
          '悄悄捂住节奏紊乱的心跳，',
          you.get_colored_name(),
          ' 轻轻拍了下小',
          urara.uma_sex_title,
          '的头顶。好险，差点以为自己要喜欢上 ',
          urara.get_colored_name(),
          ' 了。',
        ]);
        await era.printAndWait([
          '先不说如何从露骨的窥视中保护 ',
          urara.get_colored_name(),
          '，如果连训练员都喜欢上担当毫无防备的模样那就太糟糕了。',
        ]);
        await era.printAndWait([
          '努力与几乎就要抱上来的 ',
          urara.get_colored_name(),
          ' 保持距离，',
          you.get_colored_name(),
          ' 与',
          urara.sex,
          '也谈论起接下来的活动进展。',
        ]);
      }
      era.printButton(
        '「说起来，接下来是不是还有比赛，没问题吧？要继续休息吗？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '就算 ',
        urara.get_colored_name(),
        ' 的身体再怎么结实，连跑的负担也还是太大了，所以 ',
        you.get_colored_name(),
        ' 向',
        urara.sex,
        '提出了继续休息的建议。',
      ]);
      await urara.say_and_wait(
        '不用了，大家都在等着我，而且今天也是粉丝感谢祭，所以让就让乌拉拉跑个够吧！',
      );
      await era.printAndWait([
        '尽管听懂了 ',
        you.get_colored_name(),
        ' 的担忧，但准备出战的小',
        urara.uma_sex_title,
        '还是笑着将外套重新塞回了 ',
        you.get_colored_name(),
        ' 的手里。',
      ]);
      await urara.say_and_wait(
        '还有下一场比赛是『泥地比赛』哦？虽然会搞得很脏，但是乌拉拉绝对不会受伤！',
      );
      await urara.say_and_wait([
        '也因为是泥地，所以等乌拉拉跑完后，',
        callname,
        ' 千万不要再把外套披上来哦？',
      ]);
      await era.printAndWait([
        '随后，再次转身冲向赛道的 ',
        urara.get_colored_name(),
        ' 又在挥手中引得支持',
        urara.sex,
        '的大家一片欢呼。',
      ]);
      await era.printAndWait([
        '每当 ',
        urara.get_colored_name(),
        ' 在竞技中登场，粉丝们就会情绪激昂，大家似乎很欣赏',
        urara.sex,
        '无论跑输几次都绝不放弃的身影。',
      ]);
      await era.printAndWait([
        '现在想想，或许不用刻意去强调，',
        urara.sex,
        '也会顺利通过参加有马纪念要求的粉丝支持度吧。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '您还是很担心吧？大家对乌拉拉的爱意氛围逐渐狂热，但',
        urara.sex,
        '却还是懵懂无知？',
      ]);
      await era.printAndWait([
        '在突然慢下来的灰白世界中，',
        you.get_colored_name(),
        ' 的身边再次传来了已经熟悉到几乎能当成「担当的家长」的声音。',
      ]);

      era.printButton(
        '「不担心是不可能的，但这本来就是条充满泥泞的道路，而且我也挺有自信的。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '是啊，看到现在认真起来的乌拉拉，就连我都产生了多余的信心呢。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '而且',
        urara.sex,
        '好像终于要赢了，在非正式赛里认真起来，好像今天还是第一次？',
      ]);
      await era.printAndWait([
        '在慢镜头中望向于泥水飞溅的重场上，咬着牙维持领放的小',
        urara.uma_sex_title,
        '，就连苛刻的',
        urara.sex,
        '也稍微扬起了嘴角。',
      ]);
      await era.printAndWait([
        '不过在若有所思的环顾看台后，',
        urara.teen_sex_title,
        '的表情再次蒙上了一层严肃的阴云，随后选择了转身离去。',
      ]);

      era.printButton(
        '「今天怎么这么着急，不多等一下再离开吗？至少看到乌拉拉跑赢比赛吧。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '因为没什么好说的啊，『错误的好意比恶意还难以应付』，我今天只是来告诉您这一点。',
      );
      await era.printAndWait([
        '头也不回地以看似无关的话与 ',
        you.get_colored_name(),
        ' 进行着对答，那名粉中带灰的 ',
        urara.get_colored_name(),
        ' 同之前一样消失地无影无踪。',
      ]);
      await era.printAndWait([
        '当暂停的时间再次按下播放键，在溅起的泥泞落下之时，',
        urara.get_colored_name(),
        ' 一马当先的冲过了重点板。',
      ]);
      await era.printAndWait([
        '赛场的激昂解说与观众们的喝彩声一同响起，拼尽全力的小',
        urara.uma_sex_title,
        '再次成功炒热了会场的气氛。',
      ]);
      await urara.say_and_wait('大家——接下来我也会努力奔跑，继续赢下去哦——！');
      await era.printAndWait('观众们「哦哦哦哦哦——！！」');
      if (join_arim_kin_c) {
        await era.printAndWait([
          '如果可以借此继续增加粉丝数，那距离超越有马的梦想也能更近一步，',
          urara.get_colored_name(),
          ' 大概是因此而认真起来。',
        ]);
        await era.printAndWait([
          '但正如「',
          urara.sex,
          '」在离开前所说，仔细观察着观众们的反应，',
          you.get_colored_name(),
          ' 也察觉到现在的气氛有哪里不对。',
        ]);
        await era.printAndWait([
          '部分观众「乌拉拉还是那么可爱……说起来',
          urara.sex,
          '已经参加过一次有马纪念了吧？」',
        ]);
        await era.printAndWait(
          '部分观众「也多亏了粉丝投票制啊，但乌拉拉真的能有第二次参加有马的机会？」',
        );
        await era.printAndWait(
          '部分观众「所以只要能够参加就够了吧？只要乌拉拉开心不就可以了吗？」',
        );
        await era.printAndWait(
          '部分观众「嗯……这样的话，乌拉拉在商店街的后援团好像有什么活动，要一起去看看吗……」',
        );
        await era.printAndWait(
          '啧，也就是说即使现在，依旧有很多支持者对「乌拉拉也想追求胜利」并不当回事啊。',
        );
      } else {
        await era.printAndWait([
          '如果可以借此继续增加粉丝数，那距离参加有马的梦想也会更近一步，',
          urara.get_colored_name(),
          ' 大概是因此而认真起来。',
        ]);
        await era.printAndWait([
          '但正如「',
          urara.sex,
          '」在离开前所说，仔细观察着观众们的反应，',
          you.get_colored_name(),
          ' 也察觉到现在的气氛有哪里不对。',
        ]);
        await era.printAndWait(
          '部分观众「乌拉拉真受欢迎呢，果然是因为很可爱吧——」',
        );
        await era.printAndWait([
          '部分观众「',
          urara.sex,
          '好像有说想参加有马纪念，这么受欢迎的话，活用粉丝投票制，说不定真能参赛啊。」',
        ]);
        await era.printAndWait([
          '部分观众「投票啊……我应该也会投给',
          urara.sex,
          '吧，毕竟',
          urara.sex,
          '那么可爱，而且我也想看',
          urara.sex,
          '参加有马。」',
        ]);
        await era.printAndWait(
          '部分观众「和我想的差不多，这样的话，乌拉拉在商店街的后援团好像有活动，要一起去看看吗……」',
        );
        await era.printAndWait([
          '不知道为什么，',
          you.get_colored_name(),
          ' 总会感觉哪怕直到现在，很多支持者依旧像是在因为喜爱而成全 ',
          urara.get_colored_name(),
          '。',
        ]);
      }
      await era.printAndWait(
        '而且怎么回事，这对话是不是从哪听过？明明大家都是笑脸，心中翻涌的不安感却还在不断扩大……',
      );
      await urara.say_and_wait([
        callname,
        '、',
        callname,
        '！大家说想跟我拍照！我们要数到三一起拍，相机就交给你了——！',
      ]);
      await era.printAndWait([
        '担当的呼唤声打断了 ',
        you.get_colored_name(),
        ' 的思绪。开心到连脸上的泥都顾不上擦，',
        urara.get_colored_name(),
        ' 正拿着相机兴奋地向 ',
        you.get_colored_name(),
        ' 跑来。',
      ]);

      era.printButton('「啊，好的，交给我吧！」', 1);
      await era.input();

      await era.printAndWait([
        '在最后撇了一眼几位观众的背影，',
        you.get_colored_name(),
        ' 无奈地摇摇头，随后笑着接过了 ',
        urara.get_colored_name(),
        ' 递来的相机——',
      ]);
      await era.printAndWait([
        '总而言之，在 ',
        urara.get_colored_name(),
        ' 认真的活跃中，粉丝感谢祭就这样顺利地落幕了。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_15: (() => {
    const title = '后援会•暴走！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {number|false} febr_sta_rank 二月锦标的名次，false 为未参加过二月锦标
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} febr_sta 二月锦标（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      febr_sta_rank,
      arim_kin,
      febr_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '您说过，您一定会保护乌拉拉的对吧？不用担心，我不是在怀疑训练员',
        you.adult_sex_title,
        '（您）',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '只是有些时候，就算能将身体挡在',
        urara.sex,
        '的前面，您又要怎么修补受伤的内心呢？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '看着商店街的各位递来的传单，',
        you.get_colored_name(),
        ' 几乎是两眼一黑。',
      ]);

      era.printButton('「这个，难道就是大家想出来的方法吗？」', 1);
      await era.input();

      await era.printAndWait([
        '商店街的人「嗯？怎么了训练员',
        you.sex_code === 1 ? '小哥' : '小妹',
        '，这有什么问题吗？就连乌拉拉自己也在发哦？」',
      ]);
      await era.printAndWait([
        '颤抖地攥着手中薄薄的纸张，',
        you.get_colored_name(),
        ' 极力的抑制着自己想要当场发作的心情。',
      ]);
      await era.printAndWait([
        '传单上印的是「请为 ',
        urara.get_colored_name(),
        ' 的有马投票」，而作为训练员的 ',
        you.get_colored_name(),
        ' 心情也几乎和突发的头痛一样炸裂了。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 知道这是大家出于善意的举动所以不好说什么，',
        you.get_colored_name(),
        ' 也清楚被拉来的 ',
        urara.get_colored_name(),
        ' 大概根本不明白状况。',
      ]);
      await era.printAndWait([
        '但是说到底，即使并非不允许，用这样几乎是在否认其他',
        urara.uma_sex_title,
        '的努力的方式毫无疑问是错误的。',
      ]);

      if (join_arim_kin_c) {
        await era.printAndWait([
          '话说他们上次难道也用了这样的方式？而且这次还把 ',
          urara.get_colored_name(),
          ' 也叫来一起做这样的事？',
        ]);
        await era.printAndWait([
          '大叔大婶们啊，',
          urara.get_colored_name(),
          ' 的训练员不是不理解 ',
          you.get_colored_name(),
          ' 们的良苦用心，但这不是促销活动那么单纯的事啊……',
        ]);
      }
      era.printButton('「……乌拉拉现在在什么地方？」', 1);
      await era.input();

      await era.printAndWait([
        '商店街的人「嗯？好像沿街找找应该就能看到吧……等一下，',
        you.sex_code === 1 ? '小哥' : '小妹',
        '这是急着去哪啊？」',
      ]);

      era.printButton(
        '「抱歉！我突然想起了点急事，东西先放在这里，我回来的时候在拿！」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '将刚买的果蔬与手中的传单一起扔下，',
        you.get_colored_name(),
        ' 在匆匆告别了店主后立刻挤进了商店街活动日的人潮。',
      ]);
      await era.printAndWait([
        '随着 ',
        urara.get_colored_name(),
        ' 的奔跑逐渐起色，这条街也摆脱了过去的萧条，但如今这样的繁荣却意外的给 ',
        you.get_colored_name(),
        ' 带来了不小的麻烦。',
      ]);
      await era.printAndWait([
        '最终在一圈人群最密集的地方，',
        you.get_colored_name(),
        ' 远远的发现了一团被路过的人流团团包围的樱粉色。',
      ]);
      await era.printAndWait([
        '但安心感一刻都没有停留，',
        you.get_colored_name(),
        ' 便在人群中看到了逐渐靠近的另外一人，稳下的心也随之摔到了谷底。',
      ]);
      await era.printAndWait([
        '那是曾与 ',
        urara.get_colored_name(),
        ' 一起在「',
        febr_sta,
        '」中竞技的好友，但如今的',
        urara.sex,
        '的双腿却缠满了沉重的绷带。',
      ]);
      await era.printAndWait([
        '仿佛被所有人都忽视了一般，面色阴沉的',
        urara.sex,
        '拖着伤痕累累的双腿，竟然十分轻巧的绕过了人群。',
      ]);
      await era.printAndWait([
        '而站定在 ',
        urara.get_colored_name(),
        ' 面前的',
        urara.sex,
        '，无力地垂在身侧的手中，还抓着一份皱巴巴的宣传单……',
      ]);
      await era.printAndWait([
        '意识到即将发生什么 ',
        you.get_colored_name(),
        ' 急忙发力想要冲进包围 ',
        urara.get_colored_name(),
        ' 的人群，但却反被生冷的人潮裹挟着越推越远。',
      ]);
      await you.say_and_wait(
        '等下，先别说话，不该是这样，就算不可避免也先等等——',
      );
      await urara.say_and_wait(
        '——啊，好久不见！乌拉拉好像好久没在学校里看到你了，最近在忙什么呢？',
      );
      await urara.say_and_wait('啊，还有你的腿……受伤了吗？到底是什么时候……');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……没关系的，其实也没什么，不过乌拉拉这又是什么……是为了参加『',
        arim_kin,
        '』吗？」',
      ]);
      await era.printAndWait([
        '生冷的打断乌拉拉的热情，神情复杂的好友将宣传单摆在了小',
        urara.uma_sex_title,
        '的面前。',
      ]);
      await urara.say_and_wait([
        '嗯？是这样吗？不过大家都说这是和乌拉拉的 ',
        arim_kin,
        ' 有关，所以乌拉拉来帮忙了！',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「',
        urara.get_colored_actual_name(),
        '，你果然不知道自己在做什么？开什么玩笑啊……」',
      ]);
      await urara.say_and_wait(
        '这个嘛，虽然我也不太懂，乌拉拉应该是在帮大家发传单吧？',
      );
      await urara.say_and_wait('诶？怎么了？你真的没关系吗？你的脸色好差……');
      await era.printAndWait([
        '从失望到绝望再到崩溃只在几秒之间，任由负面情绪爆发的',
        urara.teen_sex_title,
        '一把推开了想要靠近的好友。',
      ]);
      await era.printAndWait(
        '随后而至的，便是一声响亮的耳光，以及失控到仿佛是歇斯底里的斥责声。',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「别开玩笑了！拜托乌拉拉你别再这么幼稚了！仔细看看这张纸！你知道你在做什么吗？！」',
      ]);
      await era.printAndWait([
        '被好友突然的施以暴力，',
        urara.get_colored_name(),
        ' 与手中被打翻的纸张一同散乱的跌坐在地上。',
      ]);
      await era.printAndWait([
        '不可置信地捂住红肿灼热的脸颊，茫然无助的泪水也委屈的蓄满了小',
        urara.uma_sex_title,
        '的眼眶。',
      ]);
      await era.printAndWait([
        '但就算还不明白自己究竟做错了什么，决堤的情绪也不会给短暂失语的',
        urara.sex,
        '一点辩解的余地。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「大家都正在为了想参加的比赛……为了想获胜的比赛而努力！甚至赌上了一切！」',
      ]);
      await era.printAndWait([
        '在哭泣中呐喊着，',
        urara.teen_sex_title,
        '因失意与不甘而积压在心底的声音倾泻而出。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「但现在，乌拉拉你居然……居然真的想要利用别人轻易地实现梦想……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「你当然可以说不知道，但这样的话……燃烧自己的大家又都算是什么啊！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「反正乌拉拉为了自己能够连骗子都当……既然这样那就干脆不要再参加比赛好了！」',
      ]);
      await urara.say_and_wait('……我不是……乌拉拉不是的……对不起……但是……');
      await era.printAndWait([
        '压抑的呜咽在好友的声讨中逐渐转为低声的啜泣，小',
        urara.uma_sex_title,
        '本就不设防的内心再也抑制不住眼角的泪水。',
      ]);
      await era.printAndWait([
        '但就算 ',
        urara.get_colored_name(),
        ' 想要为自己辩解，因精神受到冲击而变得嘶哑的喉咙也挤不出一句完整的话语。',
      ]);
      await era.printAndWait([
        '而在令人绝望的僵持中，受伤的',
        urara.teen_sex_title,
        '还是率先一把抹掉眼泪，沉默地向 ',
        urara.get_colored_name(),
        ' 踏出一步……',
      ]);
      await era.printAndWait([
        '终于冲出了因事出突然而无人敢上前阻拦的旁观者们，',
        you.get_colored_name(),
        ' 抓住了那只伸向小',
        urara.uma_sex_title,
        '的手腕。',
      ]);
      await era.printAndWait([
        '被 ',
        you.get_colored_name(),
        ' 的突然行动所吓到，逐渐恢复理智的',
        urara.uma_sex_title,
        '内疚地将手抽回，拖动着笨拙的伤腿挪回了原来的位置。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「对不起，你是乌拉拉的训练员吗？我只是想拉',
        urara.sex,
        '起来……」',
      ]);

      era.printButton(
        '「冷静下来了就好好想想吧，现在的你对乌拉拉来说就和周围只会围观的人一样恐怖啊。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '竭力抑制着自己的怒气，',
        you.get_colored_name(),
        ' 用身体半挡在两人中间，并将手向后伸到了瑟瑟发抖的 ',
        urara.get_colored_name(),
        ' 面前。',
      ]);

      era.printButton(
        '「这位同学，你的情绪我并非不能理解，但是你以为现在伤害好友的你又算什么？」',
        1,
      );
      await era.input();
      era.printButton(
        `「向毫无关联的朋友泄愤的你没资格指责${urara.sex}，现在请跟乌拉拉保持距离！」（好感+20）`,
        1,
      );
      era.printButton(
        `「别以为${urara.sex}能包容你就可以发泄在${urara.sex}身上，闹够了就现在离乌拉拉远点！」（爱慕+5）`,
        2,
      );
      const ret = await era.input();

      await era.printAndWait(
        '似乎是被面前的大人那没能完全抑制住的怒气所震慑，又或者是听到了商店街的人们赶来的脚步。',
      );
      await era.printAndWait([
        '面对因自己的冲动而破碎也已然无法挽回的友谊，失落的',
        urara.teen_sex_title,
        '终于沙哑地说出了本来的目的。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……对不起，我本来只是想在离开特雷森前来看看乌拉拉的，但结果却变成这样……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「我本来是想说些开心的事、好好道别的，真的很对不起……」',
      ]);
      await era.printAndWait([
        '说完这些，',
        urara.teen_sex_title,
        '便拖着沉重的身体转身离去，一瘸一拐的背影慢慢消失了在逐渐被疏散的人群当中。',
      ]);
      await era.printAndWait([
        '而无力地借着 ',
        you.get_colored_name(),
        ' 的臂膀靠在身边，小小的',
        urara.uma_sex_title,
        '此刻既无法去追赶背影，也想不出该挽留。',
      ]);
      await urara.say_and_wait([
        callname,
        '，',
        urara.sex,
        '……',
        urara.sex,
        '难道是……',
      ]);
      await era.printAndWait([
        '只是虽然还组织不出像样语言，但 ',
        urara.get_colored_name(),
        ' 还是努力地发出着声音，向 ',
        you.get_colored_name(),
        ' 确认着好友离开前的话语。',
      ]);

      era.printButton(
        `「……嗯，${urara.sex}的腿已经没法再奔跑了，${urara.sex}已经……没有能实现梦想的下一次了。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '很遗憾，这次的「再也不见」并非讨厌的玩笑，而 ',
        you.get_colored_name(),
        ' 也做不到真相摆在眼前还能编造不切实际的希望。',
      ]);
      if (febr_sta_rank) {
        if (febr_sta_rank === 1) {
          await urara.say_and_wait([
            '那……',
            callname,
            '，是乌拉拉……夺走了',
            urara.sex,
            '的……是乌拉拉……',
          ]);
          await urara.say_and_wait([
            '抢走了朋友的笑容的人……是乌拉拉亲手……抢走了',
            urara.sex,
            '的幸福……',
          ]);
        } else {
          await urara.say_and_wait([callname, '……是乌拉拉吗……刚才是乌拉拉……']);
          await urara.say_and_wait([
            '是乌拉拉……糟蹋了朋友的笑容……一直以来，到底在……',
          ]);
        }
      }
      era.printButton('「乌拉拉，别说了，这不是你的错！」', 1);
      await era.input();

      await urara.say_and_wait([
        '但是就算这样……那',
        urara.sex,
        '的笑容、',
        urara.sex,
        '的幸福……为什么',
        urara.sex,
        '会遇上这样的事……',
      ]);
      await urara.say_and_wait(
        '乌拉拉所做的一切……都是错的吗……到底要怎样，大家才能……',
      );
      await urara.say_and_wait('这样的话……乌拉拉的奔跑……我……比赛也……');
      await era.printAndWait([
        '几乎是呕血一般，',
        urara.get_colored_name(),
        ' 如今所说出的每一个词仿佛都是在对自己鞭挞般的否定。',
      ]);
      await era.printAndWait([
        '因此变得鲜血淋漓的，也并非 ',
        urara.get_colored_name(),
        ' 一人，',
        you.get_colored_name(),
        ' 与在场为 ',
        urara.get_colored_name(),
        ' 而来的每个人，都在小',
        urara.uma_sex_title,
        '破碎的声音中几近窒息。',
      ]);
      await era.printAndWait([
        '大家都清楚这并非',
        urara.sex,
        '的错，想要给别人带来希望的春风也绝不会想要伤害任何人。',
      ]);
      await era.printAndWait([
        '但现在 ',
        you.get_colored_name(),
        ' 唯一能做的，也只有让 ',
        urara.get_colored_name(),
        ' 躲在自己的怀中，暂时毫无顾虑地释放自己的悲伤了。',
      ]);
      await era.printAndWait([
        '尽管这股因他人而起的悲伤，从一开始就不应属于善良的',
        urara.sex,
        '，而是自私地将所谓的「善意」强硬推给',
        urara.sex,
        '的大人们。',
      ]);
      await era.printAndWait([
        '商店街的人「',
        you.sex_code === 1 ? '小哥' : '小妹',
        '，现在要怎么办……」',
      ]);

      era.printButton(
        '「……总之，不管刚才在做什么、做了什么，现在全都停下吧……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '抱紧怀中还在释放着悲伤的担当，',
        you.get_colored_name(),
        ' 也自责的闭上了眼睛。',
      ]);
      await era.printAndWait([
        '如果当时能来得再早一点的话，或许 ',
        urara.get_colored_name(),
        ' 就能……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '商店街的 ',
        urara.get_colored_name(),
        ' 有马宣传的活动在当天就宣布中止，',
        you.get_colored_name(),
        ' 也带着 ',
        urara.get_colored_name(),
        ' 回到了特雷森。',
      ]);
      await era.printAndWait([
        '只是就算尽全力去安抚 ',
        urara.get_colored_name(),
        '，小',
        urara.uma_sex_title,
        '那心碎的表情还是深深地印在了每个人的心里。',
      ]);
      await era.printAndWait([
        '之前的 ',
        you.get_colored_name(),
        ' 为了让 ',
        urara.get_colored_name(),
        ' 避开「危险」想过无数种可能性，但这场无妄之灾还是降临在了',
        urara.sex,
        '的身上。',
      ]);
      await era.printAndWait([
        '为什么一定要是 ',
        urara.get_colored_name(),
        '？',
        urara.get_colored_name(),
        ' 的内心会因此留下什么？',
        urara.sex,
        '又做错了什么……',
      ]);
      await era.printAndWait([
        '在找到填补小',
        urara.uma_sex_title,
        '心伤的办法之前，恐怕很多人都会难以入眠吧……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……看吧，又一个人的希望破碎了，在执意改变之前，乌拉拉并没有想过这些吧？',
      );
      await inner_urara.say_as_unknown_and_wait([
        '不过',
        urara.sex,
        '大概又会勉强自己和平常一样吧，因为',
        urara.sex,
        '是乌拉拉，',
        urara.sex,
        '不愿意给别人太多负担。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '所以在故事结束前，也只能尝试慢慢修好',
        urara.sex,
        '的心了，除此之外别无它法……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '但故事不会就这么结束，请务必要撑到最后……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_19: (() => {
    const title = '「深夜的聊天记录」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} rice
     * @param {CharaTalk} halo
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     * @param {PrintedSpan} callname_61 圣王光环对玩家的称呼
     * @param {PrintedSpan} h_call_u 圣王光环对春乌拉拉的称呼
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      halo,
      you,
      callname,
      call_30,
      call_61,
      r_call_u,
      callname_61,
      h_call_u,
    ) => {
      const urara_say_in_lines = (content) =>
        era.printAndWait(
          [
            '「',
            ...(Array.isArray(content) ? content : [content]),
            '」',
            urara.get_colored_name(),
          ],
          { align: 'right', color: urara.color },
        );
      era.drawLine({ content: '【5月XX日「乌拉拉」与「米浴」10：32】' });
      await rice.say_and_wait([
        r_call_u,
        ' 那边好像还显示着在线呢，是还醒着吗？',
      ]);
      era.println();
      await urara_say_in_lines(
        '嗯！最近有点睡不着，结果每次回过神来的时候就到这个时间了！',
      );
      await urara_say_in_lines([
        '不过已经是这个时间了，',
        call_30,
        ' 那边有什么事吗？',
      ]);
      era.println();
      await rice.say_and_wait([
        '上次的事情，',
        r_call_u,
        ' 还是觉得很难受吗？',
      ]);
      era.println();
      await urara_say_in_lines([
        '咦？诶？乌拉拉并没有没有哦？',
        call_30,
        ' 为什么这么说？',
      ]);
      era.println();
      await rice.say_and_wait([
        '因为 ',
        r_call_u,
        ' 不擅长伪装自己呢，最近总是没什么精神，就连米浴每天都跟在身后都没发现哦？',
      ]);
      era.println();
      await urara_say_in_lines('诶、跟在身后？是这样吗？我完全没发现！');
      era.println();
      await rice.say_and_wait([
        '对不起！那个、因为 ',
        r_call_u,
        ' 最近好像没什么精神，但是总找不到搭话的机会……',
      ]);
      era.println();
      await urara_say_in_lines([
        '没关系的！而且 ',
        call_30,
        ' 又没错哦？但我自己也搞不太清楚，所以不知道要怎么做才好。',
      ]);
      await urara_say_in_lines(
        '我也觉得再这样下去是不行的，可是我只要一想起那天的事情，眼泪就又要掉下来了……',
      );
      era.println();
      await rice.say_and_wait([
        '对不起！',
        r_call_u,
        ' 如果实在难受的话，就先冷静一下吧！',
      ]);
      await rice.say_and_wait([
        '还有这样的话，虽然米浴也不太可靠，但如果 ',
        r_call_u,
        ' 愿意的话，可以听米浴说说吗？',
      ]);
      era.println();
      await urara_say_in_lines([
        call_30,
        ' 真冷静啊，难道 ',
        call_30,
        ' 经常会遇见这样的事吗？',
      ]);
      era.println();
      await rice.say_and_wait([
        '经、经常也不至于啦……虽然状况可能不太一样，但米浴也被这样说过很过分的话。',
      ]);
      if (era.get('cflag:30:殿堂') > 0) {
        await rice.say_and_wait([
          r_call_u,
          ' 一定也听说过吧，以前的米浴不小心赢了对某人来说非常重要的比赛。',
        ]);
        await rice.say_and_wait(
          '结果呢，那时周围全都是失望的叹息声，还有很多人因此生气了，很没道理吧？',
        );
        era.println();
        await urara_say_in_lines([
          '嗯，那时 ',
          call_30,
          ' 一定受了很多委屈吧……',
        ]);
        era.println();
        await rice.say_and_wait(
          '曾经的米浴的确很迷茫，但即使那样，米浴也不觉得自己是错的。',
        );
        await rice.say_and_wait([
          r_call_u,
          ' 一定很惊讶吧，但是米浴的看法从来没改变过哦？',
        ]);
        await rice.say_and_wait(
          '虽然叹息声很可怕，但是只要坚持下去，大家也都会在有一天正视你的一切。',
        );
        await rice.say_and_wait([
          '所以米浴从来没有因胜利道歉过，如果轻易向责难低头，就是辜负大家一直以来的祝福。',
        ]);
      } else {
        await rice.say_and_wait([
          r_call_u,
          ' 一定也听说过吧，米浴不小心抢走了对某人来说非常重要的胜利。',
        ]);
        await rice.say_and_wait(
          '结果呢，周围全都是失望的叹息声，还有很多人因此生气了，很没道理吧……',
        );
        era.println();
        await urara_say_in_lines(['嗯，那时 ', call_30, ' 受了很多委屈呢……']);
        era.println();
        await rice.say_and_wait(['但是，米浴现在果然还是胜利者吧……']);
        await rice.say_and_wait([
          r_call_u,
          ' 是不是觉得听起来有些奇怪，但是米浴真的是这样想的哦？',
        ]);
        await rice.say_and_wait(
          '虽然差一点就被叹息声击倒，但继续奔跑下去，不知不觉间大家的祝福也多起来了。',
        );
        await rice.say_and_wait([
          '所以为了祝福米浴的大家，现在的米浴也会继续赢下去哦？',
        ]);
      }
      await rice.say_and_wait([
        '就是这样，',
        r_call_u,
        ' 不用太担心哦？所以接下来，只要和以前一样继续跑下去就好——',
      ]);

      era.drawLine({ content: '【5月XX日「乌拉拉」与「小圣王」11:01】' });
      await halo.say_and_wait([
        h_call_u,
        '，这么晚了还没睡吗？明天起晚了的话 ',
        callname_61,
        ' 也会为难的吧？',
      ]);
      era.println();
      await urara_say_in_lines(['但是，', call_61, ' 不是也没睡吗？']);
      era.println();
      if (era.get('cflag:61:殿堂') > 0) {
        await halo.say_and_wait(
          '我已经没有那么重的比赛需求了哦？现在其实和暂住在宿舍里也差不多。',
        );
        await halo.say_and_wait([
          '倒是你啊 ',
          h_call_u,
          '。对面的床上，手机的光从被子下漏出来了。',
        ]);
        era.println();
        await urara_say_in_lines([call_61, ' 是生气了吗……']);
        era.println();
        await halo.say_and_wait([
          '才没有啊，只是最近看 ',
          h_call_u,
          ' 一直心不在焉，是还在为那些天的事难过吗？',
        ]);
      } else {
        await halo.say_and_wait(
          '其实本来是睡得好好的，但是漏出来了哦？被子下面的手机的光。',
        );
        await halo.say_and_wait(
          '我说有过吧，就算要在夜里看手机也不要把亮度调那么高。',
        );
        era.println();
        await urara_say_in_lines('对不起哦……');
        era.println();
        await halo.say_and_wait([
          '不是要你道歉啦，只是最近 ',
          h_call_u,
          ' 连身体都不好好保护了，应该还是很难受吧？',
        ]);
      }
      era.println();
      await urara_say_in_lines('嗯，其实——');
      await urara_say_in_lines('——');

      era.drawLine({ content: '【5月XX日「乌拉拉」与「小圣王」11:13】' });
      await urara_say_in_lines(['就是这样，', call_30, ' 是这么说的……']);
      await urara_say_in_lines([
        call_61,
        '，你说我只要更加努力，大家就不会难过了吗？',
      ]);
      await urara_say_in_lines(
        '只要我坚持下去，就不会有人再觉得『乌拉拉不该去比赛』了吗？',
      );
      era.println();
      await halo.say_and_wait([
        '……抱歉，',
        h_call_u,
        '，我应该更早和你说的，而且米浴的方法，也不完全适合你的情况。',
      ]);
      era.println();
      await urara_say_in_lines(['诶？', call_61, '，这是什么意思？']);
      era.println();
      await halo.say_and_wait([
        '唉……虽然我接下来要说的事可能会让 ',
        h_call_u,
        ' 变得更难受，但是请你一定要听到最后。',
      ]);
      await halo.say_and_wait(
        '——大家不可能不难过哦？不是所有人都输掉了还能安然的对赢家说出『恭喜』的。',
      );
      await halo.say_and_wait([
        '现在的 ',
        h_call_u,
        ' 已经知道了，对于绝大多数',
        urara.uma_sex_title,
        '来说，某些比赛一生都只有一次机会。',
      ]);
      await halo.say_and_wait(
        '倒在追求愿望的路上、或者连目标都没看到就迷失了方向，这些事情数不胜数。',
      );
      await halo.say_and_wait(
        '虽然听上去可能很过分，但只要选择去争夺胜利，就不可能让所有人都幸福。',
      );
      era.println();
      await urara_say_in_lines(['怎么会这样……那小圣王也？']);
      era.println();
      await halo.say_and_wait(
        '所以我会接受那些来自他人的诅咒，并堂堂正正的跑下去，就算这并不公正也好。',
      );
      await halo.say_and_wait([
        '因为对于一流的',
        urara.uma_sex_title,
        '来说，虽然很恼人，但其实别人的非议与怨念都不重要。',
      ]);
      await halo.say_and_wait([
        '重要的是，',
        urara.sex,
        '要怎样看待自己的胜利，而且作答的也只能是',
        urara.sex,
        '自己。',
      ]);
      await halo.say_and_wait([h_call_u, '，你之前说过想赢对吧。']);
      era.println();
      await urara_say_in_lines(
        '嗯，不只是为了大家，现在的乌拉拉也想要赢下去，但是却发生了那样的事。',
      );
      era.println();
      await halo.say_and_wait(
        '既然这样那就暂时保持原样好了，只要继续昂首挺胸的赢下去，就一定能找到答案。',
      );
      await halo.say_and_wait(['所以，', h_call_u, ' 也不必一直为此伤心。']);
      era.println();
      await urara_say_in_lines([
        call_61,
        ' 的话总是很难懂啊，不过既然 ',
        call_61,
        ' 已经说了，那乌拉拉也会试试看！',
      ]);
      era.println();
      await halo.say_and_wait(['嗯，谢谢……', h_call_u, ' 你一定没问题的。']);
      await halo.say_and_wait(['因为现在的你，也是『一流的乌拉拉』啊——']);

      era.drawLine({ content: '【5月XX日「乌拉拉」与「乌拉拉？」??:??】' });
      await inner_urara.say_as_unknown_and_wait(
        '又是这样呢，所谓的朋友依旧净说些只为了关心的话。',
      );
      era.println();
      await urara_say_in_lines('不可以这么说哦？而且你也是乌拉拉的朋友嘛。');
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        '我知道哦，但乌拉拉也明白不是吗？',
        urara.couple_title,
        '其实没法真正的帮到你。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '虽然可以借鉴，但是抄不来别人的答案，一路走过来的也是乌拉拉和训练员不是吗？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '不过觉得痛苦的话，来倚靠我也没关系，我这里刚好有一剂『解药』哦？',
      );
      era.println();
      await urara_say_in_lines(
        '……嘿嘿～又来了呢，真狡猾啊，总是对着朋友说这样过分的真心话。',
      );
      await urara_say_in_lines(
        '而且如果我答应了你的请求，你就可以露出真正开心的笑容了吗？',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        '那是当然的，我不是说过很多次了吗？乌拉拉的幸福也是我的幸福……',
      );
      era.println();
      await urara_say_in_lines(
        '可是如果要乌拉拉来作答的话，我不会觉得你的方法是正确的哦？',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '啊哈，真遗憾，又被乌拉拉拒绝了。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但是我真的从来没想过要伤害乌拉拉，至少这一点，请乌拉拉相信我。',
      );
      era.println();
      await urara_say_in_lines(
        '嗯，我们一直相信着彼此，所以乌拉拉无论何时都不能答应你的请求哦？',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait('果然又是，什么都没做到吗——');

      era.drawLine();
      await urara.print_and_wait([
        '随着一声奇妙的电流声，「',
        urara.sex,
        '」也离开了，黑暗再次钻进了小小的被窝，又冷又不安。',
      ]);
      await urara.print_and_wait(
        '总觉得就像被抓住了尾巴一样，如果乌拉拉现在就睡下的话，一定会做噩梦的。',
      );
      await urara.print_and_wait([
        '但是不赶快睡的话，一定会让人担心的，现在的我已经不可以再让 ',
        callname,
        ' 担心了！',
      ]);
      await urara.say_and_wait([callname, '、', callname, '……'], true);
      await urara.print_and_wait(
        '抹掉正悄悄准备从眼角跳下的水滴，裹紧的被子下，刚刚放下的手机还带着余温。',
      );
      await urara.print_and_wait(
        '这样做可能会被说教，或许明天还会变得睡眠不足而跑不动，但是……',
      );
      await urara.print_and_wait(
        '抱着自己在今晚最后一点任性，我折起耳朵，在黑暗中再次点亮了手掌大的方屏。',
      );
      await urara.print_and_wait([
        '不是聊天室，也不是其他的什么……这么晚打电话一定会打扰到 ',
        callname,
        ' 的，或许还会惹小圣王生气。',
      ]);
      await urara.print_and_wait([
        '但是拜托了，哪怕被说教也好——我想现在就见 ',
        callname,
        '，乌拉拉，想现在就听到 ',
        callname,
        ' 的声音!',
      ]);
      await urara.print_and_wait(['所以，', callname, '，请接起来——']);
      era.drawLine({ content: `【5月XX日「乌拉拉」与「${callname}」11:50】` });
      await urara_say_in_lines('——');
      await urara_say_in_lines([callname, '，还在吗？']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿（资深年）开始';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '虽然已经经历过一次，但小',
        urara.uma_sex_title,
        '总会成长的。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '人不会踏入同一条河流，站在同一片海滩上的',
        urara.sex,
        '也会有所不同哦？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '今天起就是第三年的夏季集训了，',
        you.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 的担当再次来到了集训的海边。',
      ]);
      await era.printAndWait([
        '宽广的海面总能带走旅者的烦恼，',
        urara.get_colored_name(),
        ' 也终于暂时放下了对自己的生拉硬拽。',
      ]);
      await era.printAndWait([
        '而尽管失去了第一次时站在沙滩上时的新鲜感，但小',
        urara.uma_sex_title,
        '依旧喜欢在太阳下开心的眺望远方。',
      ]);
      await era.printAndWait([
        '半脱的外套下是深蓝的学校泳衣，因沾水而紧绷的贴身布料勾勒着',
        urara.sex,
        '娇嫩但健康饱满的身体曲线；',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '被泳装所绷出的乳袋沉甸甸的挂在',
          urara.sex,
          '娇小的身体上，与过度发育的丰满臀肉一同诱人的摇晃着；',
        ]);
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          '丰满的肉体在不太合身的紧身布料下不太情愿的扭动着，柔软的乳肉也在胸前印出了两只小小的突点；',
        ]);
      }
      await era.printAndWait([
        '粉色的耳朵与尾巴在阳光下自然的甩动着，散开的发丝随着海风轻柔的拂过',
        urara.sex,
        '娇小的双肩。',
      ]);
      await era.printAndWait([
        '或许是被阳光恍到了眼睛，一时间 ',
        you.get_colored_name(),
        ' 甚至没敢确认出那个身影就是 ',
        you.get_colored_name(),
        ' 的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([callname, '，在这边哦！']);
      await era.printAndWait([
        '注意到 ',
        you.get_colored_name(),
        ' 的视线，小',
        urara.uma_sex_title,
        '踩着水从海浪与沙滩的分界线上向 ',
        you.get_colored_name(),
        ' 跑来，在身后留下了一串浅浅的脚印。',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 身前站定，将散在身前的樱发简单地撩到肩后，',
        urara.get_colored_name(),
        ' 瞳中的花朵在阳光下闪着柔和的光。',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '逐渐成熟的气质与仍显天真稚嫩的脸庞如混为一杯的茶与奶，开始在 ',
        you.get_colored_name(),
        ' 的眼中氤氲融合着。',
      ]);
      await era.printAndWait([urara.sex, '是不是……变得像个小大人了？']);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          callname,
          '！这次来有点慢了哦？乌拉拉可是一早就把东西都收拾好了！',
        ]);
        await era.printAndWait([
          '充满干劲的赶到 ',
          you.get_colored_name(),
          ' 的身边，将散发撩到肩后的小',
          urara.uma_sex_title,
          '轻笑着拉起了 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
        await urara.say_and_wait(
          '之后还有重要的比赛，得好好加油才行！所以现在就开始训练吧！',
        );
      } else {
        await urara.say_and_wait([
          '没想到这次想要偷懒的反而是 ',
          callname,
          ' 呢？这次可是让我久等了哦！',
        ]);
        await era.printAndWait([
          '一路小跑站到 ',
          you.get_colored_name(),
          ' 的身边，',
          urara.get_colored_name(),
          ' 笑着捉住 ',
          you.get_colored_name(),
          ' 的手腕就向训练场地走去。',
        ]);
        await urara.say_and_wait(
          '以后还有很重要的比赛，所以这次的训练粗暴一点也没问题哦？',
        );
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' 如今的一切都是货真价实的，虽然对',
        urara.sex,
        '精神还很担忧，但为了回应担当的期待，作为 ',
        callname,
        ' 只能加把劲了。',
      ]);
      await era.printAndWait([
        '只是感受着现在贴在手臂上的真实又柔软的肉体，',
        you.get_colored_name(),
        ' 大脑内的某些东西感觉也要崩断了。',
      ]);
      await era.printAndWait([
        '稚嫩的',
        urara.sex,
        '是什么时候变得如此「诱人」的呢？总觉得有些感慨啊……',
      ]);

      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '还有两人独处的时候，乌拉拉可以期待一下 ',
          callname,
          ' 的表现吗？',
        ]);
        await era.printAndWait('这个……就先持保留意见吧。');
        await era.printAndWait([
          '没有迎向 ',
          urara.get_colored_name(),
          ' 火热的目光与魅惑的肉体的勇气，',
          you.get_colored_name(),
          ' 将躲闪的目光投向了远处的大海……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_elm_sta_s: (() => {
    const title = '迎向榆树锦标！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait([
        '隔着人群站在赛场观众席的最后一排，',
        you.get_colored_name(),
        ' 在昏暗的天幕下与另一位樱粉色沉默的站在观众席的最高处。',
      ]);
      await era.printAndWait([
        '眼中的景象依旧像在慢镜头中抖动，但习惯了「',
        urara.sex,
        '」的 ',
        you.get_colored_name(),
        ' 只是平静地等待着接下来的对谈。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '那天晚上，您和',
        urara.sex,
        '聊了什么呢？',
      ]);
      await era.printAndWait([
        '似乎是终于忍受不住没有话题的烦躁感，阴沉的樱粉色向 ',
        you.get_colored_name(),
        ' 问出了意想不到的问题。',
      ]);

      era.printButton(
        `「都三个月了没想到你还不知道，你不是${urara.sex}『最亲密』的朋友吗？」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '话音刚落，仿佛要将人瞪穿的视线立刻刺向了 ',
        you.get_colored_name(),
        '，但最后',
        urara.sex,
        '还是假装着并不在意般将头扭回一边。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……算了，您不想说也没关系，我也没有一定要知道的必要。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '不过这次你竟然没和乌拉拉一起吗？不和以前一样去',
        urara.sex,
        '那边送送',
        urara.sex,
        '吗？',
      ]);

      era.printButton(
        '「因为乌拉拉说想要独自待一会儿，而且这边也另有打算，你要看到最后吗？」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '不用了，您还是觉得我有那个耐心吗？',
      );

      era.printButton('「那还真遗憾。」', 1);
      await era.input();

      await era.printAndWait([
        '随着身旁的声音头也不会的离去，看着恢复色彩的天空，',
        you.get_colored_name(),
        ' 无奈地摇摇头。',
      ]);
      await era.printAndWait([
        '明明天气还不错啊，为什么只要另一个 ',
        inner_urara.get_colored_name(),
        ' 在这里，一切都会变得灰蒙蒙的呢？',
      ]);
      await era.printAndWait([
        '不过就算再彬彬有礼，',
        urara.sex,
        '的性格也还是不变的差，所以接下来要做的可能的确没',
        urara.sex,
        '更好。',
      ]);
      await era.printAndWait([
        '确认了比赛选手的入场时间，',
        you.get_colored_name(),
        ' 向站在前排的「各位」发出了信号——',
      ]);

      era.drawLine();
      await urara.print_and_wait(
        '马上就要入场，那现在自己的状态又怎么样的呢？',
      );
      await urara.print_and_wait(
        '身体的状态一直没出过什么问题，乌拉拉也渴望着奔跑，但还是会出现啊，好友伤心的脸……',
      );
      await urara.print_and_wait([
        '犹豫的踏入通道外的光中，形成习惯的转身挥手，却发现 ',
        callname,
        ' 并不在身边。',
      ]);
      await urara.print_and_wait([
        '是呢，是乌拉拉说这次自己也没问题，所以才把 ',
        callname,
        ' 也赶走了，但是却没冷静下来……',
      ]);
      await urara.print_and_wait(
        '而且就连大家也不在，只有自己的比赛总觉得缺了些什么，但是现在也没有思考的时间了。',
      );
      await urara.print_and_wait(
        '但是在走入赛场后，迎着从外面涌入的阳光，乌拉拉却又听到了再熟悉不过的应援声：',
      );
      await urara.print_and_wait([
        '那是每场比赛时都能听到的，来自大家、来自 ',
        callname,
        ' 的声音。',
      ]);
      await era.printAndWait('应援的各位「喂——乌拉拉——！」');
      await urara.print_and_wait(
        '是听错了吗？但是声音好像近在咫尺，这么清晰的声音，应该不是幻觉才对。',
      );
      await urara.print_and_wait(
        '只是，当乌拉拉顺着幻觉产生的方向看去时，原本不报希望的幻想就立刻心想事成为了现实。',
      );
      await urara.print_and_wait(
        '在拉起的应援横幅下，熟悉的大家依旧带着熟悉的微笑，在最近的地方等待着乌拉拉。',
      );
      await era.printAndWait('应援的各位「喂——乌拉拉——这边——！」');
      await urara.say_and_wait(
        '咦？是大家……等等，这里好像是北海道哦！？到底是——',
      );
      await urara.print_and_wait(
        '似乎是透过嘈杂读出了乌拉拉的疑惑，支持着乌拉拉的大家开始各自表达起对乌拉拉的心声。',
      );
      await era.printAndWait(
        '应援的各位「不管是北海道还是哪里，只要能帮到乌拉拉，我们都能跑过来的！」',
      );
      await era.printAndWait(
        '商店街的人「还有——乌拉拉，对不起啊！我们以前只会说，只要看到乌拉拉在奔跑就很高兴了……」',
      );
      await era.printAndWait(
        '商店街的人「但那样根本就是不信任乌拉拉，也算不能算是在为你加油！」',
      );
      await urara.print_and_wait(
        '明明没关系的，乌拉拉只要继续跑下去，就算不这样，大家也一定会……',
      );
      await era.printAndWait(
        '商店街的人「但是现在不一样了……！乌拉拉要赢哦，你一定要赢下来！」',
      );
      await urara.say_and_wait('……！');
      await era.printAndWait(
        '应援的各位「要加油了啊，乌拉拉！你可是背负着我们的梦想哦！」',
      );
      await era.printAndWait(
        '应援的各位「让我们看看乌拉拉为了第一名奔跑的样子吧！」',
      );
      await urara.print_and_wait(
        '现在支援乌拉拉的每个人，都带着自那次事情后很少露出的笑容，也都真正的祝福着选择奔跑乌拉拉。',
      );
      await urara.print_and_wait([
        '而在大家的鼓舞的尽头，则是 ',
        callname,
        ' 在人群中奋力挥手的模样。',
      ]);

      era.printButton('「乌拉拉！笑容！忘记带了哦！」', 1);
      await era.input();

      await urara.print_and_wait(
        '笑容……果然有哪里忘记了啊，原来今天的乌拉拉忘记了笑容吗？',
      );
      await urara.print_and_wait(
        '没错！大家依旧等待着乌拉拉，就算还有什么没能解决，至少为了此刻，乌拉拉还不能停下。',
      );
      await urara.say_and_wait('……嗯！乌拉拉明白了，乌拉拉——会赢给大家看的！');
      await urara.print_and_wait(
        '所以为了回应大家的期待，乌拉拉也向大家的方向发出了呐喊般的感谢。',
      );
      await urara.print_and_wait([
        '乌拉拉找回笑容了吗？虽然乌拉拉看不见自己，但从大家与 ',
        callname,
        ' 欣慰的表情上来说——',
      ]);
      await urara.print_and_wait(
        '现在的乌拉拉，应该是继续背起大家的期望的样子！',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_win_s: (() => {
    const title = '一定会变得更强！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '又赢了啊，乌拉拉的状态也……就连我都对您产生了多余的信心了。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '只是',
        urara.sex,
        '的样子……我就暂时先祝福您吧，虽然我本来就不应该责怪您。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '既然您的心里还想着结局的圆满落幕，就试着与',
        urara.sex,
        '坚持到最后吧。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '不要在那之前，连',
        urara.sex,
        '的笑容都失去了。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '刚走进选手通道内，赢下比赛的小',
        urara.uma_sex_title,
        '便不顾身体的疲倦立刻冲向了 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);
      await era.printAndWait([
        '看来召集大家一起完成的计划成功了。带着迎接 ',
        urara.get_colored_name(),
        ' 笑容的心情，',
        you.get_colored_name(),
        ' 也迎向了自己的担当。',
      ]);
      await era.printAndWait([
        '但还没等 ',
        you.get_colored_name(),
        ' 向 ',
        urara.get_colored_name(),
        ' 道出比赛辛苦的问候，小',
        urara.uma_sex_title,
        '就立刻牵起 ',
        you.get_colored_name(),
        ' 的手跑向了后场的方向。',
      ]);
      await urara.say_and_wait([
        callname,
        '，等事情都弄好之后，我们今天就赶回去吧！',
      ]);

      era.printButton('「别着急，好不容易拿到第一，不先休息一下吗？」', 1);
      await era.input();
      await era.printAndWait([
        '感受到了 ',
        urara.get_colored_name(),
        ' 异常的 ',
        you.get_colored_name(),
        ' 慌忙停下脚步，但却差点被 ',
        urara.get_colored_name(),
        ' 拽了个踉跄。',
      ]);
      await era.printAndWait([
        '带着诧异抬起头，',
        you.get_colored_name(),
        ' 的确看到了 ',
        urara.get_colored_name(),
        ' 的笑容，只是那与想象中的温和治愈依旧相去甚远。',
      ]);
      await urara.say_and_wait(
        '但是还是训练更要紧吧？现在距离年底没多长时间了，乌拉拉还要变得更强才行！',
      );
      await era.printAndWait([
        '或者说，现在 ',
        urara.get_colored_name(),
        ' 所呈现出的笑容，比起',
        urara.sex,
        '往日的快乐，占据主要位置的竟然是……疲惫的虚无。',
      ]);
      await urara.say_and_wait(
        '只要继续赢下去，一定就能被大家认同吧！只要我被认同，大家一定会变得更开心！',
      );
      await urara.say_and_wait(
        '就连被乌拉拉不小心伤害到的人，一定、一定也能……',
      );
      era.printButton('「乌拉拉，冷静一点，欲速则不达啊。」', 1);
      await era.input();
      await urara.say_and_wait(
        '嗯？乌拉拉很冷静哦！没事的啦！接下来就这样回去安排训练吧？',
      );
      await era.printAndWait([
        '「既然这样，下场比赛也要得第一名」，注视着 ',
        urara.get_colored_name(),
        ' 几近枯萎的樱瞳，这样的话不可能说得出口。',
      ]);
      await era.printAndWait([
        '与大家一起鼓励 ',
        urara.get_colored_name(),
        ' 的计划的确成功了，只是表面症状虽得到缓解，剩下的病根却扎得太深。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 现在不一样了，如今的',
        urara.sex,
        '完全具备了只为目标取胜的心态，但也直接把自己摆在了悬崖边上。',
      ]);
      await era.printAndWait([
        '如果现在不能让 ',
        urara.get_colored_name(),
        ' 慢下来，那',
        urara.sex,
        '回去之后一定会不管不顾的乱冲的。',
      ]);
      await era.printAndWait([
        '但若是想现在稳住',
        urara.sex,
        '的心绪，也只能先听小',
        urara.uma_sex_title,
        '讲完',
        urara.sex,
        '下一步希望如何奔跑了。',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          '没问题的，',
          callname,
          ' 不用担心哦？我会让 ',
          callname,
          ' 看到胜利的！',
        ]);
        await urara.say_and_wait(
          '现在的乌拉拉没准连G1也能轻松赢下来哦！所以下一次，请让乌拉拉继续挑战G1吧！',
        );
        await era.printAndWait([
          '在尝试着跳进 ',
          you.get_colored_name(),
          ' 的怀中后，',
          urara.get_colored_name(),
          ' 求生的欲望依旧步步紧逼，但至少笑容终于逐渐恢复了平常。',
        ]);
      } else {
        await urara.say_and_wait(
          '没关系的，我下次会继续为了大家与一着奔跑的！',
        );
        await urara.say_and_wait(
          '所以下次就让乌拉拉继续参加G1吧！现在的我一定能赢下来的！',
        );
        await era.printAndWait([
          '小心翼翼地环住 ',
          you.get_colored_name(),
          ' 的腰间，',
          urara.get_colored_name(),
          ' 虽然话语仍然紧张，但表情也多少柔和了下来。',
        ]);
      }
      await era.printAndWait([
        '亲口说出了自己强烈的参赛意愿，看来 ',
        urara.get_colored_name(),
        ' 的成长远远超乎想像。',
      ]);
      await era.printAndWait([
        '当然如果',
        urara.sex,
        '不是在几乎是压榨自己的前提下讲出来，',
        you.get_colored_name(),
        ' 还能更高兴一些。',
      ]);
      await era.printAndWait([
        '只是一想到',
        urara.sex,
        '现在「狂热」的样子，就算',
        urara.sex,
        '所说的是实话，',
        you.get_colored_name(),
        ' 也只会感到沉重而已。',
      ]);

      era.printButton(
        '「『JBC短途赛』吧，我暂时推荐这个，而且距下次的时间还挺长的，所以着急也没用哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？嗯……那既然 ',
        callname,
        ' 说了，乌拉拉就先忍耐一下好了……',
      ]);
      await era.printAndWait([
        '泥地、短距离，对现在的 ',
        urara.get_colored_name(),
        ' 来说的确是非常有机会能得第一名的比赛，同时也是 ',
        you.get_colored_name(),
        ' 的缓兵之策。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 满足了吗？至少现在小',
        urara.uma_sex_title,
        '终于安稳下来，也没有再强硬地闹着要的回去。',
      ]);
      await era.printAndWait([
        '只是这一次，就连 ',
        you.get_colored_name(),
        ' 也有些担心，是否能与 ',
        urara.get_colored_name(),
        ' 平安的度过三年中的最后几个月了。',
      ]);
      await era.printAndWait(
        '成败在此一举，选择撑下去就总会有突破口，尽全力上吧。',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_lose_s: (() => {
    const title = '我会更努力的！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '又输了吗？不过乌拉拉的状态还不错，就连我都对您产生了多余的信心了。',
      );
      await inner_urara.say_as_unknown_and_wait([
        '只是',
        urara.sex,
        '的样子……我就暂时先祝福您吧，虽然我本来就不应该责怪您。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '既然您的心里还想着结局的圆满落幕，就试着与',
        urara.sex,
        '坚持到最后吧。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '不要在那之前，连',
        urara.sex,
        '的笑容都失去了。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '刚走进选手通道内，赢下比赛的小',
        urara.uma_sex_title,
        '便不顾身体的疲倦立刻冲向了 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);
      await era.printAndWait([
        '召集大家的计划应该成功了吧？带着安慰 ',
        urara.get_colored_name(),
        ' 的准备，',
        you.get_colored_name(),
        ' 也赶紧迎向自己的担当。',
      ]);
      await era.printAndWait([
        '但还没等 ',
        you.get_colored_name(),
        ' 向',
        urara.sex,
        '说出第一句安慰，小',
        urara.uma_sex_title,
        '就立刻牵起 ',
        you.get_colored_name(),
        ' 的手跑向了后场的方向。',
      ]);

      era.printButton('「怎么了？好不容易跑完比赛，不先休息一下吗？」', 1);
      await era.input();
      await era.printAndWait([
        '感受到了 ',
        urara.get_colored_name(),
        ' 异常的 ',
        you.get_colored_name(),
        ' 慌忙停下脚步，但却差点被 ',
        urara.get_colored_name(),
        ' 拽了个踉跄。',
      ]);
      await era.printAndWait([
        '带着诧异抬起头，',
        you.get_colored_name(),
        ' 的确看到了 ',
        urara.get_colored_name(),
        ' 的笑容，只是那与想象中的温和治愈依旧相去甚远。',
      ]);
      await urara.say_and_wait(
        '但是还是训练更要紧吧？现在距离年底没多长时间了，乌拉拉还要变得更强才行！',
      );
      await era.printAndWait([
        '或者说，现在 ',
        urara.get_colored_name(),
        ' 所呈现出的笑容，比起',
        urara.sex,
        '往日的快乐，占据主要位置的竟然是……疲惫的虚无。',
      ]);
      await urara.say_and_wait(
        '大家希望乌拉拉赢下来，但我没能回应他们的心意，所以现在必须更努力！',
      );
      await urara.say_and_wait([
        '而且如果没法证明自己的话……',
        urara.sex,
        '也……',
        urara.sex,
        '也不会原谅乌拉拉吧……',
      ]);
      era.printButton('「乌拉拉，冷静一点。」', 1);
      await era.input();
      await urara.say_and_wait(
        '嗯？乌拉拉很冷静哦！没事的啦！接下来就这样回去安排训练吧？',
      );
      await era.printAndWait([
        '「既然这样，下场比赛也要得第一名」，注视着 ',
        urara.get_colored_name(),
        ' 几近枯萎的樱瞳，这样的话不可能说得出口。',
      ]);
      await era.printAndWait([
        '与大家一起鼓励 ',
        urara.get_colored_name(),
        ' 的计划的确成功了，只是表面症状虽得到缓解，剩下的病根却扎得太深。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 现在不一样了，如今的',
        urara.sex,
        '完全具备了只为目标取胜的心态，但也直接把自己摆在了悬崖边上。',
      ]);
      await era.printAndWait([
        '如果现在不能让 ',
        urara.get_colored_name(),
        ' 慢下来，那',
        urara.sex,
        '回去之后一定会不管不顾的乱冲的。',
      ]);
      await era.printAndWait([
        '但若是想现在稳住',
        urara.sex,
        '的心绪，也只能先听小',
        urara.uma_sex_title,
        '讲完',
        urara.sex,
        '下一步希望如何奔跑了。',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          '没问题的，',
          callname,
          ' 不用担心哦？下次乌拉拉会赢下来的。',
        ]);
        await urara.say_and_wait(
          '而且现在还需要更多的人认同乌拉拉吧？所以下一次请让乌拉拉继续挑战G1吧！',
        );
        await era.printAndWait([
          '在尝试着跳进 ',
          you.get_colored_name(),
          ' 的怀中后，',
          urara.get_colored_name(),
          ' 求生的欲望依旧步步紧逼，但至少笑容终于逐渐恢复了平常。',
        ]);
      } else {
        await urara.say_and_wait(
          '没关系的，下次还有机会对吧！而且输掉了就更没办法放松了对吧？',
        );
        await urara.say_and_wait(
          '所以下次让乌拉拉参加G1吧！现在不得到大家的认可是不行的啊。',
        );
        await era.printAndWait([
          '小心翼翼地环住 ',
          you.get_colored_name(),
          ' 的腰间，',
          urara.get_colored_name(),
          ' 虽然话语仍然紧张，但表情也多少柔和了下来。',
        ]);
      }
      await era.printAndWait([
        '亲口说出了自己强烈的参赛意愿，看来 ',
        urara.get_colored_name(),
        ' 的成长远远超乎想像。',
      ]);
      await era.printAndWait([
        '当然如果',
        urara.sex,
        '不是在几乎是压榨自己的前提下讲出来，',
        you.get_colored_name(),
        ' 还能更高兴一些。',
      ]);
      await era.printAndWait([
        '只是一想到',
        urara.sex,
        '现在「狂热」的样子，就算',
        urara.sex,
        '所说的是实话，',
        you.get_colored_name(),
        ' 也只会感到沉重而已。',
      ]);

      era.printButton(
        '「『JBC短途赛』吧，我暂时推荐这个，而且距下次的时间还挺长的，所以着急也没用哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？嗯……那既然 ',
        callname,
        ' 说了，乌拉拉就先忍耐一下好了……',
      ]);
      await era.printAndWait([
        '泥地、短距离，对现在的 ',
        urara.get_colored_name(),
        ' 来说的确是非常有机会能得第一名的比赛，同时也是 ',
        you.get_colored_name(),
        ' 的缓兵之策。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 满足了吗？至少现在小',
        urara.uma_sex_title,
        '终于安稳下来，也没有再强硬地闹着要的回去。',
      ]);
      await era.printAndWait([
        '只是这一次，就连 ',
        you.get_colored_name(),
        ' 也有些担心，是否能与 ',
        urara.get_colored_name(),
        ' 平安的度过三年中的最后几个月了。',
      ]);
      await era.printAndWait(
        '成败在此一举，选择撑下去就总会有突破口，尽全力上吧。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（资深年）结束';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} accept_sex 是否接受性爱
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
      arim_kin,
    ) => {
      await urara.say_and_wait([
        callname,
        '，现在的乌拉拉，是不是又变得比以前更强了呢？',
      ]);
      await era.printAndWait([
        '在训练的休息间隙中坐在午后的沙滩上，',
        urara.get_colored_name(),
        ' 与身边的 ',
        you.get_colored_name(),
        ' 一同眺望着刚开始的落下的午后阳光。',
      ]);

      era.printButton(
        '「当然，现在的乌拉拉很强，只是缺少了更重要的东西。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对被迫变得坚强了太多的小',
        urara.uma_sex_title,
        '，',
        you.get_colored_name(),
        ' 还是选择了直言不讳。',
      ]);
      await era.printAndWait([
        '现在的 ',
        urara.get_colored_name(),
        ' 已经具备了一切胜利的条件，但 ',
        you.get_colored_name(),
        ' 同样也清楚那件事时至今日都还没结束。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 现在恢复了原本的状态，却也只是恢复了表面上「能够奔跑」的状态。',
      ]);
      await era.printAndWait([
        '至于 ',
        you.get_colored_name(),
        ' 那天晚上交给',
        urara.sex,
        '的赠言，与其说 ',
        urara.get_colored_name(),
        ' 没听懂，不如说',
        urara.sex,
        '大概还是不相信答案就是如此简单。',
      ]);
      await era.printAndWait([
        '怎么这孩子在奇怪的地方越来越倔强？',
        you.get_colored_name(),
        ' 本想这样抱怨，但又想起，别扭的长大也是成长的一环。',
      ]);
      await era.printAndWait([
        '而听到 ',
        you.get_colored_name(),
        ' 直白的评价，',
        urara.get_colored_name(),
        ' 只是轻轻地点头，随后用比夏日的海风还要轻细的声音开口问道。',
      ]);
      await urara.say_and_wait([callname, '，最近那些事你还记得多少细节呢？']);

      era.printButton(
        '「不可能忘记啊，为什么这么问？是又新发生了什么吗？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……乌拉拉后来找过',
        urara.sex,
        '很久哦，听同学们说，',
        urara.sex,
        '果然去了很远的地方。',
      ]);
      await urara.say_and_wait([
        '但同学们又告诉我，',
        arim_kin,
        ' 的时候，',
        urara.sex,
        '也会为乌拉拉投出一票。',
      ]);
      await urara.say_and_wait(
        '『说了那么多过分的话，我不会求乌拉拉原谅，其实我也真的很希望乌拉拉能登上有马』。',
      );
      await urara.say_and_wait(
        '大家是这样转述给我的，但就算别人这么说，乌拉拉也还是轻视了别人的梦想对吧……',
      );

      era.printButton(
        `「但是既然如此，${urara.sex}应该从一开始就不是故意来责怪乌拉拉的吧？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '乌拉拉一直是这样想的，但是一定也有更多被我无意间伤害过、并希望我不要再跑的人……',
      );

      era.printButton(
        '「所以说乌拉拉从一开始便没有错，我觉得不要把那些负面情绪揽在自己身上比较好——」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '但是就算被否定，乌拉拉也想要承载起他们的笑容，就算对乌拉拉只有恶意也没关系。',
      );
      await urara.say_and_wait(
        '虽然这是从上次比赛结束时刚想好的……嘿嘿～是不是说得太讨人厌了呢？',
      );
      await era.printAndWait([
        '说出令 ',
        you.get_colored_name(),
        ' 也意想不到的答案后，浑身湿漉漉的小',
        urara.uma_sex_title,
        '再次露出平日里越来越少但依旧充满希望的笑容。',
      ]);

      era.printButton('「……这样可爱的讨人厌乌拉拉多来一点也没关系啊。」', 1);
      await era.input();

      await era.printAndWait([
        '直视着依旧隐藏在笑脸下的阴影，',
        you.get_colored_name(),
        ' 有些无奈的将毛巾搭在了',
        urara.teen_sex_title,
        '沾满了水珠的发丝上。',
      ]);

      era.printButton(
        '「但是一味的想要背起太多东西也会坏掉哦？一开始就没做好准备的乌拉拉现在怎么样了？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？',
        callname,
        ' 不要说得和……乌拉拉的朋友一样啊！乌拉拉没关系的——',
      ]);
      await era.printAndWait([
        '好好好，',
        urara.get_colored_name(),
        ' 没关系。揉搓着小',
        urara.uma_sex_title,
        '柔软的耳朵与小脸，',
        you.get_colored_name(),
        ' 悄悄叹了口气。',
      ]);
      await era.printAndWait([
        '又是意料之内的否认，不过也对，如果 ',
        urara.get_colored_name(),
        ' 自己跨不过这道坎，那别人说什么也没有意义。',
      ]);
      await urara.say_and_wait([
        '呜——既然 ',
        callname,
        ' 还是信不过的话……那 ',
        callname,
        ' 就把那天晚上的话记下来吧！',
      ]);
      await era.printAndWait('啊？这是在突然说什么……');
      await urara.say_and_wait([
        '虽然现在还不太明白，但在合适的时候听到 ',
        callname,
        ' 的话，乌拉拉一定可以振作起来的！',
      ]);
      await you.say_and_wait(
        [
          '你那真是不懂吗？合适的时候又是什么时候？不过既然 ',
          urara.get_colored_name(),
          ' 这样说那也一定有',
          urara.sex,
          '的考虑，总之先记下来吧……',
        ],
        true,
      );
      await era.printAndWait(
        '不知不觉中结束了当下的话题，沉默再次笼罩在二人之间，但至少此时此刻，这样的感觉并不坏。',
      );
      await era.printAndWait([
        '只是现在的',
        urara.sex,
        '，究竟在考虑着怎样的将来呢？',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        '不过，现在乌拉拉所思考的事情，也并不会被任何知道的人称赞吧。',
      );
      await urara.print_and_wait([
        '或许现在的乌拉拉真的只是在夺走别人的幸福而已，但是这样的想法，对 ',
        callname,
        ' 说不出口。',
      ]);
      await urara.print_and_wait([
        '一想到 ',
        callname,
        ' 为乌拉拉忧愁的模样，乌拉拉的心里也会充满忧郁，逐渐变得不像自己。',
      ]);
      await urara.print_and_wait([
        '不管乌拉拉对 ',
        callname,
        ' 抱有怎样的感情，乌拉拉都不想远离 ',
        callname,
        '，也更不希望 ',
        callname,
        ' 难过。',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          '只要将身体贴在 ',
          callname,
          ' 身上，比想象中还要温暖的感觉就会随着心跳声一点点传到身上。',
        ]);
        await urara.print_and_wait(
          '好安心啊，仿佛现在只要放下自己的愿望，停留在一个人的港湾里，就能安逸的一直睡下去。',
        );
        await urara.print_and_wait([
          '不再需要努力被人认可，也不会再被人责怪，只要沉浸在 ',
          callname,
          '、沉浸在大家的爱里就好……',
        ]);
      } else {
        await urara.print_and_wait([
          '在 ',
          callname,
          ' 的身边蜷起身子，就能感受到另一人的体温与心跳。',
        ]);
        await urara.print_and_wait([
          callname,
          ' 的怀中一定十分安心吧，那里会有乌拉拉的位置吗？能让乌拉拉安心睡着的地方？',
        ]);
        await urara.print_and_wait([
          '只要做出取舍，就能得到 ',
          callname,
          ' 的爱吧？只要不去在意，大家也都会继续支持着乌拉拉吧……',
        ]);
      }
      await urara.print_and_wait([
        '但是这样做一定是不对的，因为这既辜负了 ',
        callname,
        ' 和大家，自己也一定会后悔。',
      ]);
      await urara.print_and_wait([
        '如果，乌拉拉能变成和 ',
        callname,
        ' 一样可靠的大人就好了，',
        callname,
        ' 的话，一定能比乌拉拉做得更好吧。',
      ]);
      await urara.print_and_wait(
        '好累啊，可是乌拉拉还不能停下，所以只要一下就好，让乌拉拉更多依靠一下吧，所以……',
      );
      await urara.say_and_wait([
        callname,
        '，在回去前……乌拉拉可以拥有一个『大人的拥抱』吗？',
      ]);
      if (era.get('love:52') >= 50) {
        await urara.print_and_wait([
          '听到乌拉拉突然的请求，',
          callname,
          ' 在一瞬间皱了下眉，表情似乎有些动摇。是乌拉拉的要求太过分了吗？',
        ]);

        era.printButton('「乌拉拉，果然你还是……」', 1);
        await era.input();

        await urara.print_and_wait([
          '嗯？难道说 ',
          callname,
          ' 早就明白乌拉拉的想法了？不过这些都不重要呢——',
        ]);
        await urara.print_and_wait(
          '因为我们已经不再是普通的关系，而现的在乌拉拉也不再是以前单纯的小孩子了；',
        );
        await urara.print_and_wait([
          '因为 ',
          callname,
          ' 还没来得及说出拒绝，而现在的乌拉拉也不会让 ',
          callname,
          ' 轻易拒绝得了。',
        ]);
      } else {
        await urara.print_and_wait([
          '听到乌拉拉突然的请求，',
          callname,
          ' 果然被吓了一跳，就算是真正的情侣，也不会提这么唐突的要求吧。',
        ]);

        era.printButton('「乌拉拉，就算是这样也太……！」', 1);
        await era.input();

        await urara.print_and_wait([
          '诶？',
          callname,
          ' 难道已经看穿乌拉拉的想法了？不过这些都不重要呢——',
        ]);
        await urara.print_and_wait([
          '如果是 ',
          callname,
          ' 的话，这样做乌拉拉也觉得没关系，所以乌拉拉的话，也是绝对不会让 ',
          callname,
          ' 拒绝的。',
        ]);
        await urara.print_and_wait([
          '就算不是情侣也没关系，让乌拉拉知道……',
          callname,
          ' 有多喜欢自己的担当吧？',
        ]);
      }
      await urara.print_and_wait(
        '没关系的，从现在开始，乌拉拉会为了所有人的幸福继续前进，所以至少现在，请抱紧乌拉拉吧……',
      );
      await urara.say_and_wait(
        '乌拉拉会好起来的哦？很快就会好起来的……所以，就先从抱抱开始吧？',
      );
      await urara.print_and_wait([
        '明明只是伸出一只手指轻轻地抵住 ',
        callname,
        ' 欲言又止的嘴唇，',
        callname,
        ' 就立刻失去了抵抗力呢。',
      ]);
      await urara.print_and_wait([
        '因为只是 ',
        callname,
        ' 和担当间的抱抱，所以就算在大庭广众下坐在沙滩上亲密的相拥也没关系哦？',
      ]);
      await urara.print_and_wait([
        '从正面跨坐在 ',
        callname,
        ' 的腿上，轻轻环住对方因紧张而僵硬的脖颈，乌拉拉将身体与 ',
        callname,
        ' 紧紧贴合着。',
      ]);
      await urara.print_and_wait([
        callname,
        ' 一定很快就会焦躁起来吧，因为在一层薄薄的布料后，就是担当柔软的一切。',
      ]);
      await urara.print_and_wait([
        '啊，是因为被大人的气味影响了吗？乌拉拉就连胸前的那两个地方也凸出来了呢……',
      ]);
      await urara.print_and_wait(
        '但是还不可以哦？因为就和平常每天都会做无数次的「抱抱」而已，所以不可以做出格的事哦？',
      );
      await urara.print_and_wait(
        '乌拉拉就算身体已经烫得头晕了也在继续忍耐哦？亲亲也不行！因为，会被人看到的嘛～',
      );
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait([
          '将两颗丰硕柔软的果实在 ',
          callname,
          ' 身上轻柔的按压，酥麻的快感就会从挺起的尖端不断传遍全身。',
        ]);
        await urara.print_and_wait([
          callname,
          ' 也很喜欢这个对吧？自从变得这么大后，',
          callname,
          ' 的目光总会在乌拉拉的这个地方停很久呢。',
        ]);
        await urara.print_and_wait(
          '所以摸摸看吧？装作无意的样子把手搭在乌拉拉的胸前，再趁周围没有视线的时候悄悄挤下去……',
        );
        await urara.print_and_wait([
          '哈嗯～！竟然连奶水都被挤出来了……真是的，这么用力，',
          callname,
          ' 明明已经不是小孩子了！',
        ]);
      }
      if (you.sex_code > 0) {
        await urara.print_and_wait([
          '啊，好像有什么硬硬的东西顶到乌拉拉的肚子了……就和其他人说得一样，',
          callname,
          ' 是个色鬼呢～',
        ]);
        await urara.print_and_wait(
          '乌拉拉知道哦？只要用手轻轻揉一揉的话，乌拉拉就会被白色的东西弄得全身脏兮兮的。',
        );
        await urara.print_and_wait([
          '但是当众挑衅大人是不可以的呢，所以就算 ',
          callname,
          ' 现在开口要求，乌拉拉也不会去碰一下哦？',
        ]);
      }
      if (you.sex_code !== 1) {
        await urara.print_and_wait([
          '现在就连 ',
          callname,
          ' 的胸部也挺起来了，在贴上去咬 ',
          callname,
          ' 的脖子时，刚好可以感受到柔软呢。',
        ]);
        await urara.print_and_wait(
          '而且用牙齿与嘴唇在胸口和脖颈间留下记号时也不用担心被别人看到，但发出的声音太大就不好了哦？',
        );
        await urara.print_and_wait([
          '不过如果乌拉拉偷偷咬住 ',
          callname,
          ' 胸前的两颗小豆子的话，',
          callname,
          ' 又会发出什么可爱的声音呢？',
        ]);
      }
      await urara.print_and_wait([
        callname,
        ' 的脸上的恍惚是惊愕多一些还是害怕多一些呢？只是不论如何，',
        callname,
        ' 都已经没法开口说话了。',
      ]);
      await urara.print_and_wait([
        '而且 ',
        callname,
        ' 说不出话来，自然也就不会拒绝乌拉拉的任何请求，嘿嘿～乌拉拉真是天才呢～',
      ]);
      await urara.print_and_wait([
        '不过到底过了多久呢？乌拉拉与 ',
        callname,
        ' 缠绵到几乎黏在一起的身体终于恋恋不舍的分开了。',
      ]);
      await urara.print_and_wait([
        '然而就算索取暂时停止，',
        callname,
        ' 眼中映出的那双充满情欲的樱瞳依旧在夕阳下燃烧的正旺……',
      ]);
      await urara.print_and_wait([
        '既然 ',
        callname,
        ' 没能说出拒绝，那乌拉拉也不会让',
        urara.sex,
        '的 ',
        callname,
        ' 这么轻易逃走。',
      ]);
      await urara.say_and_wait([
        callname,
        '，乌拉拉真的好奇怪，所以在乌拉拉恢复正常之前，请继续给乌拉拉无偿的爱吧？',
      ]);
      await urara.say_and_wait(
        '就像初次相遇时的那样……把乌拉拉，满足成那个没有忧虑的好孩子吧……？',
      );
      await urara.say_and_wait([
        callname,
        '，要一起去大家看不见的地方吗？不过现在的话，允许 ',
        callname,
        ' 拒绝哦……？',
      ]);
      you.say('……');
      era.printButton(`就算答应${urara.sex}也没关系吧……（爱慕+5）`, 1, {
        disabled: !accept_sex,
      });
      era.printButton(`现在推开${urara.sex}还来得及……（好感+20）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '嘿嘿～',
          callname,
          ' 果然没能拒绝呢，那么和乌拉拉来吧？',
        ]);
        await urara.print_and_wait([
          '于是，将没能说出拒绝的 ',
          callname,
          ' 拉到了无人的角落里，乌拉拉轻轻剥开了身上轻薄的泳衣。',
        ]);
        if (urara.sex_code !== 1) {
          if (era.get('exp:52:性爱次数') - era.get('exp:52:睡奸次数') >= 10) {
            await urara.print_and_wait([
              '不知不觉下面已经湿透了呢，但是就算乌拉拉变得再好色，',
              callname,
              ' 也不会拒绝的对吧？',
            ]);
            await urara.print_and_wait([
              '没错，不管是只为取悦爱人的技巧，还是看见喜欢的人就变得笨笨的脑袋，都是 ',
              callname,
              ' 期望的样子哦？',
            ]);
            await urara.print_and_wait([
              '看吧？不管是被看着就会隔着衣服翘起的乳首，还是现在就滴答个不停的幼穴，都是 ',
              callname,
              ' 害的……',
            ]);
          } else {
            await urara.print_and_wait([
              '只是被 ',
              callname,
              ' 看着，下面就湿得好厉害，',
              callname,
              ' 到底要把乌拉拉变成什么样子呢？',
            ]);
            await urara.print_and_wait([
              '不过既然 ',
              callname,
              ' 喜欢的话，不管想要乌拉拉哪里，都可以把它们变成 ',
              callname,
              ' 的最喜欢的玩具哦？',
            ]);
            await urara.print_and_wait(
              '因为乌拉拉也已经决定了，乌拉拉想要把自己的身体，献给亲自培养它的变态大人……',
            );
          }
          await urara.print_and_wait([
            '在赤身裸体中向 ',
            callname,
            ' 张开怀抱，乌拉拉学着妈妈的样子将想要被浇灌的孩子抱在了怀中。',
          ]);
          await urara.print_and_wait([
            '所以……',
            callname,
            ' 想要撒娇的话，就趁着乌拉拉恢复正常前，快点抱住乌拉拉吧？',
          ]);
          if (urara.sex_code !== 1) {
            await urara.print_and_wait([
              '把只因 ',
              callname,
              ' 而娇吟的双唇，只让 ',
              callname,
              ' 肆意玩弄的双穴，只会为 ',
              callname,
              ' 受孕的子宫……',
            ]);
          }
          await urara.print_and_wait([
            '要把只属于 ',
            callname,
            ' 的身体的每一寸，全部都填满哦？',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '……嘿嘿～',
          callname,
          ' 竟然拒绝了呢？大人总有着奇奇怪怪的原则呢……',
        ]);
        await urara.say_and_wait(
          '不过既然这样的话，为了补偿乌拉拉，我们再继续拥抱吧？',
        );
        await urara.print_and_wait([
          '虽然被 ',
          callname,
          ' 出乎意料的拒绝了，但能看到 ',
          callname,
          ' 脸上更加错愕的表情，乌拉拉还是满意的笑了。',
        ]);
        await urara.print_and_wait([
          '为了报复拒绝乌拉拉的 ',
          callname,
          '，直到怠惰的太阳落下之前，乌拉拉都不会放开。',
        ]);
        await urara.print_and_wait('直到乌拉拉恢复正常前，都不会放开哦……');
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = '因为不想输！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {number} fans 粉丝数
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      fans,
    ) => {
      await urara.print_and_wait(
        '只要走出这条幽长的隧道，应该就是有马纪念前的最后几站了。',
      );
      await urara.print_and_wait([
        '竟然真的用笑容就让 ',
        callname,
        ' 相信了呢，看来乌拉拉已经变成了坏孩子呢。',
      ]);
      await urara.print_and_wait([
        '但是没关系的，等赢下来之后向 ',
        callname,
        ' 道歉，再去好好睡一觉就好了，只要挺过这场比赛就好了。',
      ]);
      await urara.print_and_wait(
        '乌拉拉……乌拉拉不会输给任何人！现在的乌拉拉不想输给任何人，现在的乌拉拉不能输给任何人！',
      );
      await urara.print_and_wait(
        '不能输……不能输……不能输……因为大家还在期待着乌拉拉，乌拉拉还要证明自己给大家看……',
      );
      await urara.print_and_wait(
        '而且这样做乌拉拉就能被原谅了吧，这样做就可以被大家认可的站上台前了……',
      );
      await urara.print_and_wait(
        '身体好重，但是乌拉拉一定能跑起来；胸口好疼，但是只要挂起微笑就可以让别人不用担心。',
      );
      await urara.print_and_wait(
        '好可怕……自己会变成什么样呢？乌拉拉现在真的是在为了大家而站在这里吗？',
      );
      await urara.print_and_wait('但是，至少这一次，请让我一定要赢下来……');
      era.drawLine();
      await you.say_and_wait(
        ['我或许不应该让乌拉拉参赛的，但现在可能太迟了。'],
        true,
      );
      await you.say_and_wait(
        [
          '因为',
          urara.uma_sex_title,
          '们已经踏入闸门，此时的训练员也只能目送自己的担当，祈祷',
          urara.sex,
          '能挺过这次难关。',
        ],
        true,
      );
      await you.say_and_wait(
        [
          '为什么会被乌拉拉骗到？或许是我的心里还信任着乌拉拉所展示出的表象吧……',
        ],
        true,
      );
      await you.say_and_wait(
        '乌拉拉还是没有鼓起勇气，相信自己选择的路一直以来是正确的吗？',
        true,
      );
      await you.say_and_wait(
        [
          '过于温柔的',
          urara.sex,
          '依旧需要靠外力，才能撬开逐渐封闭的内心吗？还是说，',
          urara.sex,
          '其实在害怕自己的未来……',
        ],
        true,
      );
      if (join_arim_kin_c && fans >= 25000) {
        await you.say_and_wait(
          [
            '是我的错吗？没在',
            urara.sex,
            '出现征兆的时候阻止',
            urara.sex,
            '，最后让乌拉拉变得连伤害自己都毫不在意。',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '明明已经快要走到山顶了不是吗？或许，我和',
            urara.sex,
            '都在改变中，忘记了「笑容」的含义吧……',
          ],
          true,
        );
      } else {
        await you.say_and_wait(
          [
            '是我的错吗？因为我的失误，让',
            urara.sex,
            '变成了几乎把自己逼到自毁的模样。',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '如果在相遇时我可以是名更优秀的训练员、如果',
            urara.sex,
            '遇到的会是一名更优秀的训练员……',
          ],
          true,
        );
      }
      await you.say_and_wait(
        '不过，现在再提起这些不着调的妄想也不会有什么意义。',
        true,
      );
      await you.say_and_wait(
        [
          '在乌拉拉已经走上赛场的现在，也只能相信',
          urara.sex,
          '可以靠摇摇欲坠的自己挺过这次比赛了。',
        ],
        true,
      );
      await you.say_and_wait(
        [
          '事已至此，身为训练员的自己也更不能失去冷静，状况可能变得再糟，但能帮上',
          urara.sex,
          '的也只有自己……',
        ],
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = '前进、前进……';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        '刚刚从身边过去的，应该是终点板没错吧……乌拉拉，赢了吗？',
      );
      await urara.print_and_wait(
        '太好了，今天的乌拉拉也没有输给任何人，乌拉拉有得到大家的认可吗？大家一定能很开心吧?',
      );
      await urara.print_and_wait(
        '今天的状态果然很好呢，虽然身体有些迟钝，但是已经不会再痛了，全身难受的感觉都消失了……',
      );
      await urara.print_and_wait(
        '但是大家的眼神为什么这么奇怪呢？是因为现在乌拉拉的表情看起来很糟糕吗？',
      );
      await urara.print_and_wait(
        '没关系的，乌拉拉只是有点头晕而已，马上就会露出笑容的，所以大家不用担心……',
      );
      await urara.print_and_wait([
        '……',
        callname,
        '！今天乌拉拉也拿到一着哦！虽然很害怕，虽然很讨厌，但是乌拉拉赢下来了哦！',
      ]);
      await urara.print_and_wait(
        '所以不要带着这么可怕的表情啦，这样翻过赛道护栏很危险的，大家也是，都笑一笑吧……',
      );

      era.printButton('「乌拉拉！没事吧？还听得见我说话吗？——？！」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        '，担心过头了哦？乌拉拉只是有点累了，才不需要这么着急得跑过来……',
      ]);
      await urara.print_and_wait([
        '但是，是不是 ',
        callname,
        ' 的声音越来越小了，为什么乌拉拉逐渐听不清 ',
        callname,
        ' 在说什么呢？',
      ]);
      await urara.print_and_wait(
        '好奇怪，为什么手伸不起来？为什么双腿动不了？为什么感觉不到身体了？',
      );
      await urara.print_and_wait(
        '好奇怪，为什么视野越来越窄了？为什么天空越来越暗了？',
      );
      await urara.print_and_wait('好奇怪，为什么说不出话了？');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '……好疼、好黑……乌拉拉是摔倒了吗？到底发生了什么……',
      );
      await urara.print_and_wait('……好可怕……乌拉拉要被大家丢下了吗？不要……');
      await urara.print_and_wait('……乌拉拉明明还可以奔跑的……');
      await urara.print_and_wait(['……', callname, '……']);

      era.drawLine();
      await inner_urara.print_and_wait('致舞台中央的主角：');
      await inner_urara.print_and_wait(
        '由舞台道具制成的翅膀还是太脆弱了啊，但是就算坠落也没关系不是吗？',
      );
      await inner_urara.print_and_wait(
        '觉得害怕的话，就去自己的心里躲一躲吧；觉得累了的话，就让疲惫的花朵枯萎吧。',
      );
      await inner_urara.print_and_wait(
        '觉得不安的话，就像可靠的人寻求庇护吧；觉得坚持不住的话，就算逃跑也不会有人责怪哦？',
      );
      await inner_urara.print_and_wait(
        '没事的，我会一直保护乌拉拉的，无论何时，这不是早就约好的事情吗？',
      );
      await inner_urara.print_and_wait('致站在幕后的训练员：');
      await inner_urara.print_and_wait([
        '真遗憾啊，就差一点了不是吗？结果羽翼融化，',
        urara.sex,
        '终究是变成了平凡的他人的样子。',
      ]);
      await inner_urara.print_and_wait([
        '但是这并不是您的错，只是您与',
        urara.sex,
        '都做过头了而已。这不是，把养料都耗尽了吗？',
      ]);
      await inner_urara.print_and_wait(
        '而且我说过了吧，我会将续写故事的权力，握在自己手里。',
      );
      await inner_urara.print_and_wait(
        '我说过了我不会怪您的，但是待到下次正式相谈时，还请做好心理准备。',
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_lose_s: (() => {
    const title = '前进、前进……';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        '比赛已经结束了吗？这么说来……乌拉拉又输了吗？',
      );
      await urara.print_and_wait(
        '这样可不行啊，回去之后一定要好好训练呢，下一次一定还有机会……',
      );
      await urara.print_and_wait(
        '而且身体状态也恢复了，身体已经不会再痛了，全身难受的感觉也都消失了……',
      );
      await urara.print_and_wait(
        '但是大家的眼神为什么这么奇怪呢？是因为现在乌拉拉的表情看起来很糟糕吗？',
      );
      await urara.print_and_wait(
        '没关系的，乌拉拉只是有点头晕而已，马上就会露出笑容的，所以大家不用担心……',
      );
      await urara.print_and_wait([
        '……',
        callname,
        '！今天乌拉拉也拿到一着哦！虽然很害怕，虽然很讨厌，但是乌拉拉赢下来了哦！',
      ]);
      await urara.print_and_wait(
        '所以不要带着这么可怕的表情啦，这样翻过赛道护栏很危险的，大家也是，都笑一笑吧……',
      );

      era.printButton('「乌拉拉！没事吧？还听得见我说话吗？——？！」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        '，担心过头了哦？乌拉拉只是有点累了，才不需要这么着急得跑过来……',
      ]);
      await urara.print_and_wait([
        '但是，是不是 ',
        callname,
        ' 的声音越来越小了，为什么乌拉拉逐渐听不清 ',
        callname,
        ' 在说什么呢？',
      ]);
      await urara.print_and_wait(
        '好奇怪，为什么手伸不起来？为什么双腿动不了？为什么感觉不到身体了？',
      );
      await urara.print_and_wait(
        '好奇怪，为什么视野越来越窄了？为什么天空越来越暗了？',
      );
      await urara.print_and_wait('好奇怪，为什么说不出话了？');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '……好疼、好黑……乌拉拉是摔倒了吗？到底发生了什么……',
      );
      await urara.print_and_wait('……好可怕……乌拉拉要被大家丢下了吗？不要……');
      await urara.print_and_wait('……乌拉拉明明还可以奔跑的……');
      await urara.print_and_wait(['……', callname, '……']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_1: (() => {
    const title = (inner_urara) => [
      '「',
      inner_urara.get_colored_sex(),
      '」的祈愿',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await you.say_and_wait(
        '怎么回事，我记得自己晚上是在住处睡着的来着？这是……学园三女神像前？我为什么睡在这里？',
        true,
      );
      await you.say_and_wait(
        '头好疼，到底昨晚我梦游了吗？但是身上明明穿戴整齐，而且现在的时间……结果已经是这个时间了？',
        true,
      );
      await you.say_and_wait(
        '总觉得好像忘记了什么，不过今天还有更重要的事，真错过了什么也以后再说吧。',
        true,
      );
      await you.say_and_wait('先去训练场与乌拉拉汇合吧，今天一定要……', true);
      era.drawLine();
      era.printButton('「乌拉拉，月底就要有马纪念了，现在身体还好吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '所以说已经没关系了哦！现在乌拉拉一点都感觉不到不舒服！',
      );
      await urara.say_and_wait([
        callname,
        '，今天就不用带我来医院复查了吧？那天只是因为状态不好摔了一跤而已！',
      ]);

      era.printButton(
        '「那就挺好的，所以我今天并不是带乌拉拉来医院检查身体的。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '空荡的长廊中游荡着仅有两人份的脚步声，',
        you.get_colored_name(),
        ' 与乌拉拉穿行在医院那安静却单调的白色中。',
      ]);
      await era.printAndWait([
        '自从乌拉拉在赛场上晕倒但奇迹般的一切正常后，规律的去医院检查已经成为了二人近期的常态。',
      ]);
      await era.printAndWait([
        '正如同龄孩子们大多讨厌检查的繁复与无处不在的消毒水味，乌拉拉自然也每次都提出着小小的抗议。',
      ]);
      await era.printAndWait([
        '……至少一开始是。直到有一天，',
        you.get_colored_name(),
        ' 在某个难以察觉的角落中找到了一只不知被谁遗弃的小动物。',
      ]);
      await era.printAndWait([
        '拉开那间仿佛被遗忘的房间，',
        you.get_colored_name(),
        ' 将身边的「春乌拉拉」领到了放置在房间中央的床前。',
      ]);
      await era.printAndWait([
        '洁白的病床上，蜷起身体的樱粉色',
        urara.teen_sex_title,
        '轻摇着马耳与尾巴，在健康平稳的呼吸声中安静地沉睡着。',
      ]);
      await era.printAndWait([
        urara.sex,
        '的床边并没有医疗器械，甚至如同要去上学般穿着特雷森的校服，粉色的发带也像刚系上去般紧致。',
      ]);
      await era.printAndWait([
        '但这名看上去只是在学习日睡过头的小',
        urara.uma_sex_title,
        '，却与此刻站在 ',
        you.get_colored_name(),
        ' 身旁陷入沉默的「',
        urara.sex,
        '」别无二致。',
      ]);

      era.printButton(
        '「明明倒下前任谁都看得出状态的异常，醒来时却身心健康到像什么都没发生过。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '凝视着蜷缩在白床单上的另一团樱粉色，',
        you.get_colored_name(),
        ' 头也不抬地与身边的「',
        urara.sex,
        '」继续着对话。',
      ]);
      await era.printAndWait([
        '根本不用去看旁人的脸，',
        you.get_colored_name(),
        ' 早已猜到了最近一直陪伴着自己的「',
        inner_urara.get_colored_actual_name(),
        '」到底是谁。',
      ]);

      era.printButton(
        `「虽然乌拉拉的确是个很结实的孩子，但我不记得${urara.sex}是胡萝卜侠啊。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '随着气质与神情的翻转，坐到病床边，与 ',
        urara.get_colored_name(),
        ' 相似的「',
        urara.sex,
        '」摘下伪装，露出了伴随着忧伤的真容。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……您是什么时候察觉的？');

      if (high_relation) {
        era.printButton(
          '「态度变化太明显了，一开始我以为乌拉拉生气了，但持续的时间未免也太长了。」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          [
            '感谢你的陪伴，但模仿的还差一点啊。对不起，',
            urara.get_colored_name(),
            ' 变成这样你也很难受吧……',
          ],
          true,
        );
        await era.printAndWait([
          '抬头直视着那双与「',
          urara.get_colored_actual_name(),
          '」相比十分黯淡的樱瞳，',
          you.get_colored_name(),
          ' 与',
          urara.sex,
          '对上了眼神。',
        ]);
      } else {
        era.printButton(
          '「一开始的确没能察觉，但还是会觉得不对劲，而且最近乌拉拉好像也孤僻了不少。」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          '再说其实也我做错了很多事不是吗？你也没必要做到这一步对吧？',
          true,
        );
        await era.printAndWait([
          '在内疚的揉了揉疲惫的脸后，',
          you.get_colored_name(),
          ' 还是对上了那双黯淡的樱瞳。',
        ]);
      }
      await inner_urara.say_as_unknown_and_wait(
        '但我也只能这么做，已经是最后了，绝对不能让人知道乌拉拉倒下了，不然会更麻烦。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '而且如果我不这样做，您也不知道会干出什么，乌拉拉醒来时看不到您的话可就麻烦了。',
      );
      await era.printAndWait([
        '伸手抚摸着一旁还在熟睡中的 ',
        urara.get_colored_name(),
        '，「',
        urara.sex,
        '」的表情也像位安抚孩子的母亲般柔和下来。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '也是啊，',
        urara.sex,
        '到底要睡到什么时候呢？不是还要去跑有马吗？快点醒过来啊。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        callname,
        ' 也已经找到你了哦？而且再不起床的话，我也不知道什么时候自己会消失哦？',
      ]);

      era.printButton(
        `「……消失？你是真实存在的，也不完全是${urara.sex}吧？就算这样『看不见的朋友』也会消失吗？」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '听到 ',
        you.get_colored_name(),
        ' 的低声疑问，「',
        urara.sex,
        '」再次转向面前的 ',
        you.get_colored_name(),
        '，又撑起了自己总能读出伤感的笑容。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '只是有这样的预感，或许我也不是真货，只是某个人的碎片、某个人的倒影也说不定。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '所以最后如果乌拉拉能身心健康的结束故事，那我消失也没什么所谓。',
      );

      era.printButton(
        '「你也冷静点，虽然你是位强控制欲的老妈子，但这么说自己是不是太过了？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '明明与外貌与小',
        urara.uma_sex_title,
        '一模一样却总说着悲观的话，眼前这幅景象还真是让人难以忍受。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '是这样吗？我还不需要被婆婆妈妈的',
        urara.sex_code === 1 ? '正太' : '萝莉',
        '控',
        you.adult_sex_title,
        '（您）找茬啊。',
      ]);
      await era.printAndWait([
        '听到 ',
        you.get_colored_name(),
        ' 的回答，',
        urara.sex,
        '的笑容似乎少了些自嘲的哀伤，但还是没有太多松动地跳过了这段自我否认的话题。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '刚才说到……在',
        urara.sex,
        '倒下之后，我突然想起来，也许我可以暂时借',
        urara.sex,
        '的身体接替',
        urara.sex,
        '跑下去。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '所以我才暂时把',
        urara.sex,
        '的精神藏起来，原本不应被发现，结果还是被您找到了。',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」抚摸 ',
        urara.get_colored_name(),
        ' 的手缓缓沉入了小',
        urara.uma_sex_title,
        '的身体，就如同穿过了放映机射出的投影。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '而且这的确是个解决不了问题的方法，因为就算我能够去往有马也毫无意义啊……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '也多亏就算',
        urara.sex,
        '睡着了，也一直指导着什么都做不到的我怎样去奔跑，我才能一直演到现在。',
      ]);

      era.printButton(
        '「乌拉拉为什么会变成这样……这个问题，我或许应该自己想……」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '但是我必须正面和您强调，因为在您身边，',
        urara.sex,
        '甚至遗忘了自己很害怕。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '所以完全觉醒的',
        urara.sex,
        '所做的第一件事就是躲起来，躲到',
        urara.sex,
        '自己也不知道何时会醒的内心深处。',
      ]);
      await era.printAndWait([
        '或许正是如此，「好孩子多少会忽略自己的内心」……所以「',
        urara.sex,
        '」才总在说 ',
        urara.get_colored_name(),
        ' 没有那么坚强。',
      ]);
      await era.printAndWait(
        '因为过于温柔，所以害怕伤到别人，害怕别人的非议，害怕心态的变化，直到害怕自己的胜利与愿望；',
      );
      await era.printAndWait(
        '因为不愿麻烦他人，所以不会去找他人宣泄；因为忽视得太久，所以堵塞的心也变得愈发倔强；',
      );
      await era.printAndWait(
        '因为想要抚平自我否认后的精神安宁，所以甚至失去理智向身边的导师寻求身体的慰藉……',
      );
      await era.printAndWait([
        '真是绝了，虽然不想这么评价，但这情商过高的别扭小马到底像',
        urara.sex,
        '家里的谁啊？',
      ]);

      era.printButton(
        `「但是这些又都没能被早点察觉，乌拉拉的愿望变得沉重是${urara.sex}自己的选择，但也是我……」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '您已经够好了，而且您对乌拉拉真狠得下心吗？再者没有您在乌拉拉身边，',
        urara.sex,
        '早就垮了。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '甚至您一直都是对的，解铃还需系铃人，乌拉拉不能自己『醒来』，别人也解不开心结……',
      );

      era.printButton(
        `「所以结果就是不管是${era.get('love:52') >= 75 ? '爱人' : '朋友'}还是作为训练员，都没能在最后起到真正的作用吗？！」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 本想要一拳砸在一旁的床头柜上，但看向 ',
        urara.get_colored_name(),
        ' 平静的侧颜，还是没能将颤抖的手落下。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '您这不是也没有看上去那么冷静，不过现在我们都差不多啊。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '能力总差一点又无法愤世嫉俗的凡人训练员，什么都做不到却妄想强塞别人幸福的幻影……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '……还有就像在无声地谴责我们的，没法醒来的',
        urara.sex,
        '，各种事情一塌糊涂。',
      ]);

      era.printButton(
        `「说什么呢，你不是对${urara.sex}可怜的训练员做了挺多过分的事吗？」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '所以现在不是了，我说过我会狠下心来，把故事的结局握在自己手里。',
      );

      era.printButton(
        '「但现在这样我就更不会放弃乌拉拉，所以你赶不走我的。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '别紧张嘛，我可不会赶您走哦？相反，我知道一个怎么让小睡美人起床的办法哦？',
      );
      await era.printAndWait([
        '面对 ',
        you.get_colored_name(),
        ' 七分警戒三分疑惑的目光，「',
        urara.sex,
        '」反而露出了最平静的笑容，但这一举动也更让 ',
        you.get_colored_name(),
        ' 警铃大作。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '您不也看到了吗？摔倒的乌拉拉躲进了自己的避风港的最深处……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '那我将避风港中的景象变为现实，乌拉拉就会幸福的醒来，幸福的活下去对吧？',
      );
      await inner_urara.say_as_unknown_and_wait([
        '这就是我现在要写下的结局，而这也是，乌拉拉呼唤你发现',
        urara.sex,
        '的目的哦？',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 后退的瞬间，周围的空间就立刻被染成熟悉的灰白，阻滞的重压感也再次从上方降下。',
      ]);
      await era.printAndWait([
        '一直坐在床边的「',
        urara.sex,
        '」起身拉住了 ',
        you.get_colored_name(),
        ' 想要缩回的手，将 ',
        you.get_colored_name(),
        ' 用',
        urara.uma_sex_title,
        '的力量轻易拽倒在了病床上。',
      ]);
      await era.printAndWait([
        '在视角颠倒之间，',
        you.get_colored_name(),
        ' 看到两面身影逐渐与融合的 ',
        urara.get_colored_name(),
        '，缓缓睁开了眼睛——',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        '不觉得现在的样子，很像您与乌拉拉相遇的那个时候吗，健忘的',
        urara.sex_code === 1 ? '正太' : '萝莉',
        '控',
        you.adult_sex_title,
        '（您）？',
      ]);
      await inner_urara.print_and_wait(
        '为什么眼神这么凝重呢？啊，抱歉，忘了现在的您说不出话，不过现在的我也一样。',
      );
      await inner_urara.print_and_wait([
        '是啊，为什么是您呢？为什么会是明明',
        urara.sex,
        '都那么害怕了，却还要和您一同前进的您呢？',
      ]);
      await inner_urara.print_and_wait(
        '我为什么要写下这个故事呢？您为什么要完成这个故事呢？为什么这是我们的故事呢？',
      );
      await inner_urara.print_and_wait(
        '明明自己的问题也堆积如山，现在的我却只想继续注视着您，也许最先被您迷住的人是我才对……',
      );
      await inner_urara.print_and_wait(
        '太好了，您的身体就和以前一样温暖，是不是感觉变得舒服起来了呢？',
      );
      await inner_urara.print_and_wait(
        '没关系，不管是触碰还是侵犯，被您吸引的两人也绝不会再远离您，所以诚实一点也好哦？',
      );
      await inner_urara.print_and_wait(
        '为什么躲闪呢？是因为不愿接受这样的幸福吗？可惜现在的您并没有拒绝的权力。',
      );
      await inner_urara.print_and_wait(
        '不用担心，我会制作一个能够让乌拉拉、您还有大家都能开心的世界。',
      );
      await inner_urara.print_and_wait(
        '虽然明天您会什么都不记得，但是等您再次睁开眼，乌拉拉便会幸福地回到您的身边了哦？',
      );
      await inner_urara.print_and_wait('那么，好好睡一觉吧。');
      era.drawLine();
      await era.printAndWait([
        '从噩梦中惊醒，',
        you.get_colored_name(),
        ' 扶住自己隐隐作痛的额头，用模糊的视线环顾四周。',
      ]);
      await era.printAndWait(
        '这里好像是学校的三女神像前的长椅上，为什么会自己会睡在这里？之前又要干什么来着？',
      );
      await era.printAndWait([
        '自己刚刚好像做了一个相当恐怖的梦，但 ',
        you.get_colored_name(),
        ' 却无论如何都想不起一点相关内容。',
      ]);
      await era.printAndWait([
        '而站在 ',
        you.get_colored_name(),
        ' 面前的，是不知等待了多久却依旧面带笑容的 ',
        urara.get_colored_name(),
        '。',
      ]);

      era.printButton('「抱歉睡着了，乌拉拉，今天我们去过医院了吗……」', 1);
      await era.input();

      await you.say_and_wait(
        [
          '去……医院？我为什么会说去医院，明明眼前的担当健康的不得了，为什么我会想带',
          urara.sex,
          '去医院？',
        ],
        true,
      );
      await era.printAndWait(
        '不对劲，总觉得哪里不对劲，一定是忘记了很重要的事，但是……到底是什么……？',
      );
      await urara.say_and_wait([
        '诶？医院？',
        callname,
        ' 是睡迷糊了吗？乌拉拉还不需要去体检哦？',
      ]);
      await era.printAndWait([
        '背着柔和到缺乏真实感的阳光，满脸笑容的 ',
        urara.get_colored_name(),
        ' 在阴影中向半梦半醒的 ',
        you.get_colored_name(),
        ' 伸来了援助的手。',
      ]);

      era.printButton('「嗯、啊，说的也是，抱歉，我是真的睡糊涂了——」', 1);
      await era.input();

      await era.printAndWait([
        '但正当 ',
        you.get_colored_name(),
        ' 握住 ',
        urara.get_colored_name(),
        ' 伸出的手时，却发现偌大的校园却连草木都变得寂静无声——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_2: (() => {
    const title = '「虚无」的渴望';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ' 觉得，乌拉拉的愿望，配得上大家的奔跑吗？',
      ]);
      await urara.say_and_wait([
        callname,
        ' 觉得，乌拉拉的愿望，配得上大家的帮助吗？',
      ]);
      await urara.say_and_wait([
        callname,
        ' 的手比乌拉拉大好多呢，只用一只就能环住乌拉拉的脖子。',
      ]);
      await urara.say_and_wait([
        callname,
        '，将两只手握放在乌拉拉的脖子上，再用力压下去吧？',
      ]);
      await urara.say_and_wait([
        callname,
        '，让羞于面对大家而逃跑的乌拉拉，变成任你摆布的娃娃吧——',
      ]);
      era.drawLine();
      await era.printAndWait([
        '不知第几次从噩梦中惊醒，',
        you.get_colored_name(),
        ' 在三女神像前的长椅上扶住自己隐隐作痛的额头。',
      ]);
      await era.printAndWait(
        '今天依旧是这样不明不白的在离奇的地方醒过来，周围也依旧安静的可怕。',
      );
      await era.printAndWait(
        '倒不是说其他人消失了，而是周围的空间仿佛静止一般，失去了一切环境的杂音。',
      );
      await era.printAndWait(
        '而这还不是最让人难受的，在进入这周之后，时间也字面意思上的停摆了。',
      );
      await era.printAndWait(
        '不只是路边的时钟，手表、手机、电脑，所有目所能及的时间标识都停在了同一时刻。',
      );
      await era.printAndWait(
        '但也多亏了从他人嘴里问时间这招还奏效，所以暂时还能维持正常的生活状态。',
      );
      await era.printAndWait(
        '当然也正是这样，在失去正常的时间与空间感后还能正常生活的其他人此刻才显得格外异常。',
      );
      await era.printAndWait([
        '从常识人的角度，这种情况是自己疯了，但对于现在的 ',
        you.get_colored_name(),
        ' 来说，大概是世界和自己一起疯了。',
      ]);
      await era.printAndWait([
        '和 ',
        urara.get_colored_name(),
        ' 有关的噩梦也是，周围诡异的改变也是，哪里都不对劲，但是到底忘记为什么变成这样……',
      ]);
      await era.printAndWait([
        '可正当 ',
        you.get_colored_name(),
        ' 纠结的抬起昏沉沉的头时，心中微弱的违和感在突然间被急剧放大了——',
      ]);
      await era.printAndWait([
        '与违和感一同到来的，还有既视感，因为站在 ',
        you.get_colored_name(),
        ' 面前的，是不知等待了多久却依旧面带笑容的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！今天不是说好了要一起出去玩的吗？怎么又在这里睡着了，是累了——',
      ]);

      era.printButton('「乌拉拉，现在过去多久了？」', 1);
      await era.input();

      await era.printAndWait([
        '突然抬起头打断了 ',
        urara.get_colored_name(),
        ' 的寒暄，终于意识到发生了什么的 ',
        you.get_colored_name(),
        ' 严肃地看向了 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        '啊，',
        callname,
        ' 最近总是在问时间呢，不过也没睡过多久哦？让我想想……',
      ]);

      era.printButton(
        `「不是今天的时间，乌拉拉，你的 ${callname} 问的是，『从时间停止后过了多久了』。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('——');
      await era.printAndWait([
        '仿佛是经历了一场平静的暴雨，在漫长的沉默后，',
        urara.get_colored_name(),
        ' 安静的坐到了长椅的另一边。',
      ]);
      await era.printAndWait([
        '只是这一次，',
        urara.sex,
        '的小脸上没再出现平常的笑容，而是像做错事的孩子般的愧疚。',
      ]);
      await urara.say_and_wait(
        '对不起，其实乌拉拉也不知道，这究竟是第几周了……',
      );
      await urara.say_and_wait([
        '因为『',
        urara.sex,
        '』说，这里能待多久都可以，但是……果然 ',
        callname,
        ' 还是会想起来……',
      ]);
      await urara.say_and_wait(
        '乌拉拉明知道这是不对的，但是却依旧沉迷在虚假的日子里……',
      );
      await era.printAndWait([
        '看来',
        urara.sex,
        '这次真的做错了什么吧，虽然 ',
        you.get_colored_name(),
        ' 并不是因为想起了什么才询问',
        urara.sex,
        '的。',
      ]);

      era.printButton(
        '「其实现在还是什么都没想起来，只是突然意识到哪里不对劲而已，最近又发生了什么吗？」',
        1,
      );

      await urara.say_and_wait([
        '没有哦？只是每次 ',
        callname,
        ' 想起什么后，『',
        urara.sex,
        '』就会出现把 ',
        callname,
        ' 的记忆拿走，所以……',
      ]);
      await era.printAndWait(
        '想想也是，那个溺爱家长不可能放任不稳定因素乱来，现在也只能算是百密一疏吧。',
      );
      await era.printAndWait([
        '而且 ',
        you.get_colored_name(),
        ' 也绝对不会放过这次机会，至少现在的 ',
        urara.get_colored_name(),
        ' 比「上个月」时正常太多了，如果是现在的话……',
      ]);
      await era.printAndWait([
        '但还没等 ',
        you.get_colored_name(),
        ' 开口，',
        urara.get_colored_name(),
        ' 却先一步用乞求的眼神看向了身边最亲密的大人。',
      ]);
      await urara.say_and_wait([
        '请不要逃避，',
        callname,
        ' 一定会这样说呢，但是……乌拉拉还想在这里多待一会儿……',
      ]);

      era.printButton(
        `「哪怕知道现在的一切只是乌拉拉的朋友为${urara.sex}创造的纸质箱庭也想？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '可是这里真的很安心，',
        callname,
        ' 也能感受的到对吧？哪怕是……',
      ]);
      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 戛然而止后的沉默，',
        you.get_colored_name(),
        ' 在叹了口气后继续接了下去。',
      ]);

      era.printButton(
        '「乌拉拉，我总会做的那种怪梦……就不说内容了，都是真实发生过的对吧？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('嗯……');
      await era.printAndWait([
        '虽然猜对了，但是等 ',
        urara.get_colored_name(),
        ' 承认时却又不想面对了。',
        urara.get_colored_name(),
        ' 原来是……「爱好」如此倒错的孩子吗？',
      ]);

      era.printButton(
        `「哪怕是最后每次都被自己的${callname}伤害也无所谓吗？别这样虐待自己啊。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '因为乌拉拉很害怕啊，如果有一天乌拉拉失败了的话，如果有一天再也站不起来的话……',
      );
      await urara.say_and_wait([
        '所以如果有一天，不管是大家还是 ',
        callname,
        ' 都不在乌拉拉身边的话……',
      ]);
      await urara.say_and_wait(
        '……不对，乌拉拉知道这样的事不会发生的，但还是害怕的逃走了……',
      );
      await urara.say_and_wait('那是……');

      era.printButton(
        '「那是因为乌拉拉从来都不是无所谓对吧？但乌拉拉把一切看的太重了，该适当一点了。」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '但是，',
        callname,
        ' 不想和乌拉拉一直在一起吗？就算只能满足 ',
        callname,
        ' 一个人也……',
      ]);

      era.printButton(
        '「可这样做的话，乌拉拉和你那消极的朋友想要做的事有什么区别？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '直视着 ',
        urara.get_colored_name(),
        ' 马上就要哭出来的眼睛，',
        you.get_colored_name(),
        ' 抑制住让自己心软的念头，再次开口了。',
      ]);
      await era.printAndWait([
        '至少这次和以前不同，而且，',
        urara.get_colored_name(),
        ' 的 ',
        callname,
        ' 可不想再看见 ',
        urara.get_colored_name(),
        ' 露出和「',
        urara.sex,
        '」一样悲观的表情啊。',
      ]);

      era.printButton(
        `「现在的乌拉拉或许只想${callname}承载的希望，但我的希望，是能够看到乌拉拉的明天啊。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '这次同样是站在阳光下，却是坚定的 ',
        you.get_colored_name(),
        ' 向眼神逐渐亮起的 ',
        urara.get_colored_name(),
        ' 伸出了手。一直以来，不都是这样吗？',
      ]);
      await era.printAndWait(
        '不管有多迷茫，未来都可以一起克服，哪怕临近终局。比起没有结果的沉默，至少再互相信任一次吧。',
      );

      era.printButton(
        '「结果如何都是后话，我会一直站在乌拉拉身后，所以也让大家看看，乌拉拉在有马纪念上奔跑的样子吧。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '看向自己的训练员，',
        urara.get_colored_name(),
        ' 似乎逐渐恢复了从长椅上起身的勇气，将手指轻轻搭在了 ',
        you.get_colored_name(),
        ' 的手上。',
      ]);
      await urara.say_and_wait([
        '那……',
        callname,
        ' 可以陪我一起去和『',
        urara.sex,
        '』道歉吗？',
      ]);

      era.printButton(
        `「当然没问题啊，而且我也有不少事想${inner_urara.sex}抱怨一下啊。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('嗯！那么就这样……');
      await era.printAndWait([
        '随后在视野变为灰白的重压中强行替代了 ',
        you.get_colored_name(),
        ' 面前的小',
        urara.uma_sex_title,
        '，「',
        urara.sex,
        '」愤怒地拍开了 ',
        you.get_colored_name(),
        ' 伸向 ',
        urara.get_colored_name(),
        ' 的手。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '您还真是一不注意就会冒出来，逼迫乌拉拉有什么意义吗？好好遵守',
        urara.sex,
        '的愿望不好吗？',
      ]);

      era.printButton(
        '「别把我说得和蘑菇一样，还有不是说好了一起去找你道歉吗？你是有多小心眼啊。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对虎视眈眈的「',
        urara.sex,
        '」，',
        you.get_colored_name(),
        ' 无奈被迫与眼前这只全身毛都炸起来的粉色小猫拉开距离。',
      ]);

      era.printButton(
        '「而且仔细想想看，现在最对现状感到不安的也不是乌拉拉，而是……」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '是啊！所以我才讨厌你们啊！你和乌拉拉和',
        urara.sex,
        '周围的人都一样！',
      ]);
      await era.printAndWait([
        '在忍无可忍后的爆发，上前一步用力抓住 ',
        you.get_colored_name(),
        ' 的衣服的',
        urara.teen_sex_title,
        '在哭泣中宣泄着自己压在心底的厌世情结。',
      ]);
      await era.printAndWait(
        '不知何时起周围传出无数玻璃被砸破的脆响，随着泪水的落地，周围布景般的世界也逐渐支离破碎。',
      );
      await era.printAndWait([
        '但就算站在异常的中心，现在想要停下也为时过晚。任由「',
        urara.sex,
        '」的拉扯，',
        you.get_colored_name(),
        ' 冷静地延续着交流。',
      ]);

      era.printButton(
        '「……明明是出于厌恶，但你也一直在帮助乌拉拉不是吗？」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '是啊，为什么呢？明明只要看着',
        urara.sex,
        '输掉再让',
        urara.sex,
        '抛弃自己的愿望就好了！',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '那样',
        urara.sex,
        '就可以回到家里去过平常的生活……不，干脆从一开始就拒绝',
        urara.sex,
        '的搭话不就好了！',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '要是从一开始，就能够对',
        urara.sex,
        '的笑容不为所动就好了，但这是，我自己的选择啊……',
      ]);
      await era.printAndWait([
        '现在的',
        urara.sex,
        '该怎样形容呢？在拒绝一切的悲伤与愤怒之后，还有……不知指向嫉妒与无奈？',
      ]);
      await era.printAndWait([
        '无法坦率的',
        urara.sex,
        '，一边怀着对周围的厌恶，又因为什么都做不到而对世间抱有',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '是啊，我以后绝对不会再帮你们了，明明一个两个都是些笨蛋什么的……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '为了名为『希望与闪光』的虚无赌上一切，那么拼命的争抢，如果失败了不就全完了？！',
      );

      era.printButton(
        '「因为人生只有一次，不去明天也无法定格在过去，就像你现在做的一样啊——」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '哈！您也是还不满足吗？乌拉拉已经为您拿下好几个、好几个我从未敢梦到的一着了！',
      );
      await inner_urara.say_as_unknown_and_wait(
        '都到了现在了！如果为了无私的愿望前进会继续伤害别人，那自私一点又能怎么样啊！',
      );
      await era.printAndWait([
        '暴躁地打断了 ',
        you.get_colored_name(),
        ' 的话，',
        urara.teen_sex_title,
        '在泪水中强挤出的笑容宛如一只破损的洋娃娃般令人心痛。',
      ]);
      await era.printAndWait([
        '但即使已经被',
        urara.sex,
        '勒得喘不过气来，',
        you.get_colored_name(),
        ' 也不打算再次顺从',
        urara.sex,
        '放弃一切的意愿。',
      ]);

      era.printButton(
        `「乌拉拉奔跑从来都不是为了我，现在利用这点自私的话，${urara.sex}的一切努力就都前功尽弃了。」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '别糊弄人了！你说的前功尽弃的到底是乌拉拉还是你的事业啊？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '亏我还……从最初就爱着您的……说到底您和别人都一样……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '与其让乌拉拉继续努力，再伤害到别人和自己，不如现在就、现在就……',
      );
      await era.printAndWait([
        '被自己的泪水所噎住了话语，无力地放开了 ',
        you.get_colored_name(),
        ' 的衣服，',
        urara.teen_sex_title,
        '自暴自弃的重新跌坐回了身后的长椅上。',
      ]);
      await era.printAndWait([
        '别说是吓退 ',
        you.get_colored_name(),
        ' 了，现在的小',
        urara.uma_sex_title,
        '就像快要倒下的 ',
        urara.get_colored_name(),
        ' 那样，马上就要被自己的扭曲所压倒了。',
      ]);

      era.printButton('「果然，最害怕的人，是你啊……」', 1);
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……对不起……一直说着过分的话……但是我真的很害怕啊……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '您总是会正直地说着正确的全解，但令人厌烦的我却绝对没办法变成您心仪的样子……',
      );
      await era.printAndWait(
        '明明什么都不相信，却唯独别扭地相信着爱，真是个不得了的世界级难题。',
      );
      await era.printAndWait([
        '该作何反应呢？被这样一位悲伤又厌世的人爱着的自己，到底该许下什么能够让',
        urara.sex,
        '接受的承诺？',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '果然是什么都不说……我还以为……您最后能稍微回应我的任性，哪怕骗我愿意留下呢……',
      );
      await urara.say_and_wait([
        '不是这样哦？只是你的感情太热烈了，让原本『清爽』的 ',
        callname,
        ' 变『婆妈』了而已！',
      ]);
      await era.printAndWait([
        '破碎的响动似乎模糊了静止与流动的边界，而现在与 ',
        you.get_colored_name(),
        ' 并肩而站的，是一抹不知何时到来的樱粉色。',
      ]);
      await era.printAndWait([
        '是英雄登场了吗？至少这一次，',
        urara.get_colored_name(),
        ' 终于与 ',
        you.get_colored_name(),
        ' 一同站在了「',
        urara.sex,
        '」的面前。',
      ]);
      await era.printAndWait(
        '美中不足的是，为什么有的英雄在赶来后一上来就说自己的训练员「变婆妈了」啊？',
      );
      await era.printAndWait([
        '而看到 ',
        urara.get_colored_name(),
        ' 后，虽然已经哭肿了眼睛，但「',
        urara.sex,
        '」依旧像在妹妹面前逞强的姐姐般抹干了眼泪。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '哈啊……结果乌拉拉也还想做大家的英雄啊……我说你啊……跑在最前面就那么美丽吗？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '像大家一开始说的那样开心做自己不就好了吗？你是觉得自己真能拯救他们吗？',
      );
      await era.printAndWait([
        '但面对另一个自己的咄咄逼人，',
        urara.get_colored_name(),
        ' 反而比最初与 ',
        you.get_colored_name(),
        ' 对话时变得更加坚定了。',
      ]);
      await urara.say_and_wait(
        '乌拉拉没有想过那样的事，因为大家都很坚强，乌拉拉是想要回报大家，而且……',
      );
      await urara.say_and_wait(
        '刚刚乌拉拉听到了，你一直以来也很委屈，但这样我就更不能逃避了。',
      );
      await urara.say_and_wait(
        '对不起，虽然乌拉拉还是第一次听到你的感受，但既然如此乌拉拉就更应该继续跑下去了！',
      );
      await era.printAndWait([
        '小小的',
        urara.uma_sex_title,
        '攥紧了手心，摇曳的樱瞳中倒映着另一个如同',
        urara.elder_sibling_sex_title,
        '般的自己。',
      ]);
      await urara.say_and_wait(
        '因为，这里有更需要乌拉拉的人在呢，所以，再相信乌拉拉一次吧……？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '哈……因为乌拉拉也想要同情我吗……',
      );
      await urara.say_and_wait(
        '是因为虽然别人看不见，但陪乌拉拉长大、一直保护着乌拉拉的你也是我的英雄啊！',
      );
      await urara.say_and_wait([
        '所以不管是乌拉拉还是 ',
        callname,
        ' 还是大家怎么样都好，和我们一起来吧……！',
      ]);
      await era.printAndWait([
        '站在 ',
        you.get_colored_name(),
        ' 的身前直面着隐藏在心中的另一个 ',
        urara.get_colored_name(),
        '，樱粉色的',
        urara.sex,
        '仿佛在一瞬间褪去了曾经懵懂的一切。',
      ]);
      await era.printAndWait([
        '目睹着 ',
        urara.get_colored_name(),
        ' 的变化，不只是一直为之努力的 ',
        you.get_colored_name(),
        '，就连「',
        urara.sex,
        '」也瞪大红肿的眼睛，露出了一瞬的喜悦。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '哈哈……原来是这样吗？结果乌拉拉变得强韧的最后一块零件，是我啊……',
      );
      await era.printAndWait([
        '但即使如此，倔强的',
        urara.sex,
        '依旧没有在虚无开裂的世界中接过 ',
        urara.get_colored_name(),
        ' 的邀请。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '你们都是不讲道理的人啊，但是我，是不会让你们简单的结束的……',
      );
      await era.printAndWait([
        '话音落下，长椅上的「',
        urara.sex,
        '」在留下一句任性的宣告便消失了，周围持续不断的碎裂声也同时停止了。',
      ]);
      await era.printAndWait([
        '时间开始重新转动，鸟鸣与风声也重新回到了两人身边，但从',
        urara.sex,
        '的发言来看，循环恐怕还在持续。',
      ]);
      await era.printAndWait(
        '虽然问题还没能解决，但至少现在，被留下的两人逐渐平复心情，也终于能够互相关心一下对方了。',
      );
      await era.printAndWait([
        '结果刚将视线转向身旁，',
        you.get_colored_name(),
        ' 就看到了 ',
        urara.get_colored_name(),
        ' 正伸出双手，表情迷茫得不断接着从脸颊滴下的泪水。',
      ]);
      await urara.say_and_wait([
        '诶？',
        callname,
        '，乌拉拉脸上的是……乌拉拉在哭吗？是因为突然觉得很伤心吗？',
      ]);
      await urara.say_and_wait([
        '这是，',
        urara.sex,
        '的心情吗？如果乌拉拉能更早的意识到……',
      ]);

      era.printButton(
        `「没关系的，至少现在这周应该可以顺利结束了，在那之后，我们就去找${inner_urara.sex}吧……」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……嗯！但是乌拉拉感受不到',
        urara.sex,
        '了，',
        urara.sex,
        '到底去了什么地方呢？',
      ]);

      era.printButton(
        '「要不问问亲爱的女神大人们？因为我记得学校的女神像前，好像没有长椅来着。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '随后，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 同时望向了一旁仿佛目睹着一切、一直在静静地垂帘微笑的三女神像——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_3: (() => {
    const title = (urara) => [
      '「大家」的祈愿、',
      { color: urara.color, content: `「${urara.actual_name}」` },
      '的祈愿',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        '，做好先过去的准备了吗？乌拉拉随后就到！所以今天一定要把',
        urara.sex,
        '带回来哦！',
      ]);
      era.drawLine();

      era.printButton('「今天天气不是很好啊，坐在这里是有什么烦恼吗？」', 1);
      await era.input();

      await era.printAndWait([
        '站在一片灰白的空间中不断向前走着，',
        you.get_colored_name(),
        ' 最终在一片广阔的草场上找到了那名小小的身影。',
      ]);
      await era.printAndWait(
        '不过说起来自己还是第一次能够进到这里，真神奇啊，明明刚才还在女神像前来着……',
      );
      await era.printAndWait([
        '只是这里的主人似乎极度抗拒着来客，无视了胡言乱语的寒暄的',
        urara.sex,
        '，在 ',
        you.get_colored_name(),
        ' 靠近的瞬间从草地上弹了起来。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……您是怎么来到这里的？一个两个都是，为什么就是不愿意留下来……',
      );
      await era.printAndWait([
        '向本不可能出现在这里的「入侵者」投来愤恨的眼神，面前的小',
        urara.uma_sex_title,
        '正带着不安向 ',
        you.get_colored_name(),
        ' 质问道。',
      ]);

      era.printButton(
        '「这里是你的世界，外面的循环也是你造成的，所以两边至少是相连的，总有办法对吧？」',
        1,
      );
      await era.input();

      await you.say_and_wait(
        '也就是说如果客人想来的话，主人只要有一点允许的念头，客人就会如你所愿的出现在这里……',
      );
      await era.printAndWait([
        '说着简单到仿佛是解开儿童益智玩具的谜题般，',
        you.get_colored_name(),
        ' 无奈地耸了耸肩。',
      ]);
      await inner_urara.say_as_unknown_and_wait('我是问您怎么知道的……');

      era.printButton(
        '「乌拉拉请三女神稍微询问了一下，就这么简单，所以我稍微做了些准备就进来了……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '虽然的确完全不清楚 ',
        urara.get_colored_name(),
        ' 是怎么问的，反正不管是',
        urara.uma_sex_title,
        '的事还是三女神的事都不用整得那么明白对吧？',
      ]);
      await era.printAndWait([
        '实在有些无法招架对方透着怀疑的尖锐视线，',
        you.get_colored_name(),
        ' 默默地移开了目光。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '这次又把别人的爱当成入室抢劫的撬锁工具了？您还真是个消费别人感情的人渣……！',
      );

      era.printButton(
        '「我还没说呢怎么你自己就……呜哇！好好好！别打了我错了，让我仅限这次可以吗？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '差点就在陌生的地方挨马踢，在极限距离闪过了',
        urara.uma_sex_title,
        '的袭击的 ',
        you.get_colored_name(),
        ' 感觉自己的魂都要吓掉了。',
      ]);
      await era.printAndWait(
        '不过好在身处这个没有警察来衡量秩序的世界里，对主人赶紧道歉还是有用的。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '您又是这样，强硬地撬开别人的心、强迫别人接受他人的意义的家伙难道不卑鄙吗？',
      );

      era.printButton(
        '「或许是这样，但那又如何？乌拉拉也给了我能够站在这里的『意义』啊。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对直白的 ',
        you.get_colored_name(),
        '，「',
        urara.sex,
        '」也沉默了。一切尽在不言之中，因为最初的相遇就是如此。',
      ]);
      await era.printAndWait([
        '如果没有遇见 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 估计直到现在都没法从那天的迷茫中得到答案，也不会来到这里。',
      ]);
      await era.printAndWait([
        '如果没有「',
        urara.sex,
        '」的选择，',
        urara.get_colored_name(),
        ' 不会遇见 ',
        you.get_colored_name(),
        '，自然三年中的二人三足故事也不会写到这里。',
      ]);
      await era.printAndWait([
        '但更加追根溯源，大概最初的开始，是在 ',
        urara.get_colored_name(),
        '「强硬地」将一个孤僻的人拉进生活的那一刻吧。',
      ]);
      await era.printAndWait([
        '叹了口气，',
        you.get_colored_name(),
        ' 试探地蹲在了沉默地坐回了灰白二色的草地上的小',
        urara.uma_sex_title,
        '旁边。',
      ]);

      era.printButton(
        '「那说点不一样的，在准备来见你的日子里，虽然时间没向前，但乌拉拉过得还挺开心的。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '结果呢？在休息够了之后，您还要是推着',
        urara.sex,
        '前进吗？',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '明明就连乌拉拉都知道了，我会把故事的完结抓在自己手里？',
      );
      await era.printAndWait([
        '似乎是不愿去看 ',
        you.get_colored_name(),
        ' 的脸，「',
        urara.sex,
        '」折起耳朵，生硬地将头拧到了与 ',
        you.get_colored_name(),
        ' 相反的方向。',
      ]);

      era.printButton(
        '「现在我们还坐在这里，正是因为你没法完结这个故事啊。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '尽管看不见表情，但现在',
        urara.sex,
        '的身体确实像被雷击中一般颤抖起来。看来说中了。',
      ]);
      await era.printAndWait([
        '虽然不知道',
        urara.sex,
        '是怎么做到的，但将时间循环也正是因为',
        urara.sex,
        '做不到真正的创造出想要的世界。',
      ]);
      await era.printAndWait(
        '就算能够依靠着对某物的执念将时间停在三年的最后，也不可能实现真正停滞的世界。',
      );
      await era.printAndWait(
        '因为明天的到来是连三女神都无法阻止的，日复一日的躲藏什么也做不到。',
      );
      await era.printAndWait([
        '而现在做过头的「',
        urara.sex,
        '」，已经除了让自己默默消失外，没有其他办法停下循环了。',
      ]);

      era.printButton('「——我说得没错吧？」', 1);
      await era.input();
      era.printButton('「『春乌拉拉』。」', 1);
      era.printButton('「『春乌拉拉』。」', 2);
      era.printButton('「『春乌拉拉』。」', 3);
      await era.input();

      await era.printAndWait(
        '真是，嘴硬也得有个限度啊，这样做根本不会让任何人开心，而且也绝对不是能解决问题的办法。',
      );
      await era.printAndWait([
        '不过虽然早就猜到了，但女神的玩笑还真是够大的，竟然在一个世界里塞了性格完全相反的两个 ',
        urara.get_colored_actual_name(),
        '。',
      ]);
      await era.printAndWait([
        '或者说为了让不管什么都怯于相信的小',
        urara.uma_sex_title,
        '更幸福一些？管它呢，今天的主要任务是带',
        urara.sex,
        '回去啊。',
      ]);

      era.printButton(
        '「所以说，就算是把事情弄得一团糟，也没必要这样做对吧？大家都还等着你回去呢。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……哈？大家在等我？您也精神错乱了吗？知道我的人明明只有——',
      );
      await era.printAndWait(
        '话音尚未落下，无数的声音就突然从空间的外侧涌入其中，灰白的草原一时间仿佛变得门庭若市。',
      );
      await era.printAndWait([
        '那是就连一直躲在 ',
        urara.get_colored_name(),
        ' 背后的「',
        urara.sex,
        '」都听过无数次的，来自最熟悉的人们的指引声。',
      ]);
      await era.printAndWait(
        '特雷森的同学们、商店街的大家、应援会的各位、再到不那么熟悉的来自各地的支持者的声音……',
      );
      await era.printAndWait(
        '仿佛要剥开昏暗的天幕，又像在为某人的奔跑而助威，温柔却又响亮的声音们震荡着整片草场。',
      );

      era.printButton(
        '「既然你也是乌拉拉，那你不是最清楚这里的沟通方式吗？这里不止是你一个人的世界吧？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对被震撼到慌忙起身的「',
        urara.sex,
        '」，',
        you.get_colored_name(),
        ' 不紧不慢地从口袋中抽出了自己的手机。',
      ]);
      await era.printAndWait([
        '这里是「',
        urara.get_colored_name(),
        '的世界」，按照 ',
        urara.get_colored_name(),
        ' 收获的祝福，只要还有一个人想着 ',
        urara.get_colored_name(),
        '，那',
        urara.sex,
        '哪里都去得了。',
      ]);
      await era.printAndWait([
        '虽然现在比起让小',
        urara.uma_sex_title,
        '「通往胜利」，可能更像是 ',
        urara.get_colored_name(),
        ' 要亲手「打破心房」吧。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 会因支持',
        urara.sex,
        '的大家而变强，所以也能反馈给喜欢着',
        urara.sex,
        '的大家一些只有',
        urara.sex,
        '能感受到的东西。',
      ]);
      await era.printAndWait([
        '所以哪怕没有记忆，大家在以前也隐约意识到了名为「',
        urara.get_colored_actual_name(),
        '」的小',
        urara.uma_sex_title,
        '似乎有着另外一面。',
      ]);
      await era.printAndWait([
        '于是在 ',
        you.get_colored_name(),
        ' 的支持下，',
        urara.get_colored_name(),
        ' 在这次的循环中奔走着，把「',
        urara.sex,
        '」的事分享给了愿意帮助',
        urara.sex,
        '的所有人。',
      ]);
      await era.printAndWait([
        '所以不管另一个',
        urara.sex,
        '躲在哪里，',
        urara.get_colored_name(),
        ' 都能顺应着「大家的祈愿」找到心灵的最深处。',
      ]);
      await era.printAndWait([
        '果然只要给予时间，一切改变都能变得顺理成章，而 ',
        urara.get_colored_name(),
        ' 和',
        urara.sex,
        '的训练员也超级幸运啊。',
      ]);

      era.printButton(
        '「当然，既然大家都愿意相信『乌拉拉』，那我作为训练员也一定得帮帮场子啊。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '拿出了曾经在无意间凑出的最后一点质变的要素，在「',
        urara.sex,
        '」的面前，',
        you.get_colored_name(),
        ' 笑着按下了电话录音的播放键。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '做完热身运动，整理好身上的决胜服，站在灰白色空间的入口长廊中，',
        urara.get_colored_name(),
        ' 开始了今日的奔跑。',
      ]);
      await era.printAndWait([
        '前面的路一定比有马的赛道还要长得多吧，虽然只是 ',
        urara.get_colored_name(),
        ' 的直觉而已，因为',
        urara.sex,
        '还是很害怕。',
      ]);
      await urara.say_and_wait(
        '但是你害怕的，究竟是会受伤的『乌拉拉』，还是什么会都无法做到的『乌拉拉』呢？',
      );
      await era.printAndWait([
        '在仅有一人的比赛中，',
        urara.get_colored_name(),
        ' 就像在与看不见的朋友对话般，向前方空无一物的灰白小声地提出着反问。',
      ]);
      await era.printAndWait([
        '明明不会有人告诉 ',
        urara.get_colored_name(),
        ' 答案，但四周指引着 ',
        urara.get_colored_name(),
        ' 的回音却仿佛在回应着 ',
        urara.get_colored_name(),
        ' 的话语。',
      ]);
      await era.printAndWait(
        '那是大家的祈愿声，随着前方被不断地照亮，越来越多的声音也都出现在赛场的两旁。',
      );
      await urara.say_and_wait(
        '努力不一定有结果，也有可能在改变的路上失去一切，乌拉拉是知道的哦？',
      );
      await urara.say_and_wait(
        '但选择冷眼旁观而裹足不前却一定是没有结果的，只是明白道理也没办法让人成为大人。',
      );
      await urara.say_and_wait(
        '跑得更快的方法，只有把眼泪擦干，并亲手给擦破的膝盖贴上创可贴才行……',
      );
      await urara.say_and_wait(
        '所以就算要与别人争抢唯一的机会，也不要胆怯，因为——',
      );
      await era.printAndWait([
        '在两侧一闪而过的身影中，',
        urara.get_colored_name(),
        ' 看到了永远会在比赛时站在观众席的最高处守望着',
        urara.sex,
        '的那个人。',
      ]);
      await era.printAndWait([
        '以及一条即使在大家各有不同的祈愿声中，依旧如同就在 ',
        urara.get_colored_name(),
        ' 的耳边般清晰可闻「电话录音」。',
      ]);
      await era.printAndWait(
        '前方不知行进了多久的灰白逐渐被亮光所剥离，无数的光斑也如路标般在空中飞舞着。',
      );
      await era.printAndWait([
        '驱动着不知跑了多久但仍然斗志高昂的身体，',
        urara.get_colored_name(),
        ' 带着一着得胜的笑容撞向了前方破碎的镜面——',
      ]);
      era.drawLine();
      await era.printAndWait([
        callname,
        ' 的声音「因为大家虽然没有那么坚强，但也不会有乌拉拉担心的那么脆弱。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「不可否认，这条路的确很残酷：有为了家人而前进的人，有为了温饱而奔跑的人；」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「有人承载的梦想比山峦都要沉重，而有人则想要守护与重要之人的约定……」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「就像有人说的那样，只要站上赛场，拿到胜利，就没办法让所有人都露出笑容。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「能让所有人都觉得『满意』的，说到底只有跑在最后而已。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「但就算如此，大家所祈愿的『幸福与希望』，也绝不是能被别人轻易定夺的。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「即使摔倒无数次，每个人都依旧有追求幸福的权利，而希望的定义也各有不同。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「乌拉拉所做的绝对不是在伤害别人，所以不要觉得自己的理想轻如鸿毛。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「『',
        urara.get_colored_actual_name(),
        '』承载着大家的笑容，是独属于',
        urara.sex,
        '的重量，是没法被其他任何人背负的。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「绝不是输了也无所谓，也不会为了成全他人而放弃自己的梦想。」',
      ]);
      await era.printAndWait([
        callname,
        ' 的声音「所以请去尽情的奔跑，带着大家的希望，也带着乌拉拉自己想要取胜的信念——」',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……！');
      await era.printAndWait(
        '蒙灰的幻境在瞬间褪去，空间的碎片如暴雪般在空间中掠过，并在消失无踪后露出了被覆盖的原貌。',
      );
      await era.printAndWait([
        '无数的色彩为「',
        urara.sex,
        '」灰暗的眼眸点起了反光，在万里无云的青空下，',
        urara.sex,
        '不可思议的环顾着周围的改变、',
      ]);
      await era.printAndWait(
        '这里并非是任何一场重要的比赛，但这里依旧是一切的原点——这里是特雷森的训练场。',
      );

      era.printButton(
        `「所以啊，${urara.sex}一定会来到这里的，长出了真正的羽翼的，『无敌的春乌拉拉』。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '伴随着 ',
        you.get_colored_name(),
        ' 的话语，从视野的尽头飞身跃入跑道的，是一抹如春风般的樱色。',
      ]);
      await era.printAndWait([
        '站在另一个自己面前，眼中绽放着花朵的小',
        urara.uma_sex_title,
        '露出了温暖的笑容。',
      ]);
      await urara.say_and_wait(
        '对不起，稍微来晚了！今天的乌拉拉，终于找到你了呢！',
      );
      await urara.say_and_wait(
        '好啦，我们已经商量好平安脱困的对策了哦？大家都在等着你呢，一起回去吧！',
      );
      await era.printAndWait([
        '就像不知要如何面对小',
        urara.uma_sex_title,
        '的微笑，「',
        urara.sex,
        '」胆怯的向后退去，却又被眼前的人牵住了双手。',
      ]);
      await era.printAndWait([
        '低头看着紧紧拉住自己的两只分别来自 ',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 的两只手，孤独的「',
        urara.sex,
        '」的声音逐渐颤抖起来。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……为什么又要做到这一步呢？明明只要我消失，一切也就结束了……',
      );
      await urara.say_and_wait(
        '不对哦！一味地沉默与妥协才不是真正的结束，那样只会把大家的心都困住而已！',
      );
      await urara.say_and_wait(
        '而且乌拉拉也不会让你消失！帮助自己的朋友不是理所当然的吗？',
      );
      await era.printAndWait([
        '看着眼前不愿放手的两位最重要的两人，「',
        urara.sex,
        '」就像在故事的结局时终于下定决心的主角般咬紧嘴唇。',
      ]);
      await era.printAndWait([
        '尽管再想要表达什么，故事的主角也不会一直消沉的躲在幕后的。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '果然你们，就是一群没办法放着不管的笨蛋……',
      );
      await era.printAndWait([
        '用力的甩开牵住自己的手，「',
        urara.sex,
        '」维持着自己最后倔强与面前的他们拉开了距离。',
      ]);
      await era.printAndWait(
        '在一阵嘎吱作响的金属声中，锈迹斑驳到只剩灰白二色的闸门出现在了一旁赛道起点的位置。',
      );
      await era.printAndWait([
        '而在闸门前，黑色的眼神逐渐锐利的小',
        urara.uma_sex_title,
        '也拉紧了与另一个自己相同，色泽却无比陈旧的决胜服。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '既然如此坚持的话，那就请您和',
        urara.sex,
        '，让我任性到最后吧——',
      ]);
      await inner_urara.say_as_unknown_and_wait('因为，我也是『春乌拉拉』啊！');
      era.drawLine();
      await urara.say_and_wait(
        '没想到是和自己比赛呢！嗯！不如说正因为是和自己战斗，所以乌拉拉不会输！',
      );
      await urara.say_and_wait([
        '要入闸了呢！没关系，我会把',
        urara.sex,
        '带回来的，因为乌拉拉也好好地许下自己的愿望了哦！',
      ]);

      era.printButton(
        `「就是这样，让${inner_urara.sex}也听听你的祈愿吧！」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('哦！乌拉拉GO——！');
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} bourbon 美浦波旁
   * @param {CharaTalk} rice 米浴
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   */
  async ws_95_46_3_win(urara, inner_urara, bourbon, rice, you, callname) {
    await inner_urara.print_and_wait(
      '在无限延伸的赛道上，随着飞翔的樱粉色将黯淡对手逐渐甩在身后，胜负已成定局。',
    );
    await inner_urara.print_and_wait([
      '果然自己完全比不上身经百战的',
      urara.sex,
      '啊，就算再努力地向前伸出手，也无法再触及前方的',
      urara.sex,
      '分毫……',
    ]);
    await inner_urara.print_and_wait([
      '望着前方曾经幼稚又弱小的「另一个自己」消失在视野之中，',
      urara.teen_sex_title,
      '逐渐失去了对速度的掌控。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '没想到在我看不见的地方……',
      urara.sex,
      '已经能飞得这么高了……',
    ]);
    await inner_urara.print_and_wait(
      '尽管因成长而破损的心灵并不会自我愈合，只能用名为「变得坚强」的创可贴遮盖伤口——',
    );
    await inner_urara.print_and_wait(
      '但能够并愿意借助他人的目光将自己重塑为期望中的英雄，亦是一种勇敢。',
    );
    await inner_urara.print_and_wait([
      '就像 ',
      urara.get_colored_name(),
      ' 总是会摔倒，也经常贴满了创可贴，但依旧能够倔强奔跑的双腿那般。',
    ]);
    await inner_urara.print_and_wait([
      '名为 ',
      urara.get_colored_actual_name(),
      ' 的',
      urara.uma_sex_title,
      '的确并不坚强，',
      urara.sex,
      '只是，因为自己选择的改变而越来越坚强了而已。',
    ]);
    await inner_urara.print_and_wait([
      '所以如今变得坚强的',
      urara.sex,
      '接受了这一切，并再次踏上了那条最遥不可及的赛道。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '原来现在的',
      urara.sex,
      '不需要再被保护，而我也已经，不再被需要了……',
    ]);
    await inner_urara.say_as_unknown_and_wait(
      '果然您永远都是对的啊，我就是个又无能、控制欲又强的坏家长与坏朋友……',
    );
    await inner_urara.print_and_wait([
      '而尽管胜负已分，但赛道却仍然在无穷无尽的向前延伸着，取代终点的，则是从后方逐渐袭来的破碎。',
    ]);
    await inner_urara.print_and_wait(
      '因为在先前肆意修改了太多的东西，所以在最后，也只有在默默的被黑暗吞噬一条路可走。',
    );
    await inner_urara.say_as_unknown_and_wait(
      '对不起骗了你们，我已经没办法回去了，但这样，应该就没事了……',
    );
    await inner_urara.say_as_unknown_and_wait(
      '好好说再见之类的，就下次再做吧……',
    );
    await inner_urara.print_and_wait([
      '面对身后步步紧逼的「结局」，孤僻的',
      urara.teen_sex_title,
      '松掉了本就见底的毅力，结束了只剩一人的比赛——',
    ]);

    era.printButton(
      '「所以我说你啊！既然是完整的故事，那不管内容有多糟，都要对结局负责啊！',
      1,
    );
    await era.input();
    era.printButton('「现在！跑起来！春乌拉拉！」', 1);
    await era.input();
    await inner_urara.print_and_wait(
      '这声呐喊到底是在为谁应援，或许并不需要答案。',
    );
    await inner_urara.print_and_wait([
      '因为与 ',
      you.get_colored_name(),
      ' 在最后一刻的尽全力呐喊一同赶到的，是一只娇小但足够重新提供温暖与力量的手。',
    ]);
    await inner_urara.print_and_wait([
      '前方在瞬间被重新照亮，',
      urara.teen_sex_title,
      '的正前方传来了本以为再也不会听到的，来自另一个自己的呼喊声。',
    ]);
    await inner_urara.print_and_wait(
      '向自己伸出援手的，是明明也已经濒临极限，却依旧没有放弃笑容的樱粉色。',
    );
    await urara.say_and_wait('别放弃，就差一点了！');
    await inner_urara.print_and_wait(
      '不是所谓的牵绊，也不需要特别的言语，而是更纯粹的，发自内心的，犹如春日之花的某种情感。',
    );
    await inner_urara.print_and_wait(
      '众人的声音从两侧响起，不知何时身后的塌陷已越来越远，训练场的简易看台上早已座无虚席。',
    );
    await inner_urara.print_and_wait([
      '奔跑中的一切似乎都慢了下来，而被 ',
      urara.get_colored_name(),
      ' 带领的',
      urara.sex,
      '也终于看清了周围幻影中的全貌：',
    ]);
    await inner_urara.print_and_wait(
      '一直聚在一起的「黄金世代」和「霸王世代」，正一如既往的守在好友的比赛旁；',
    );
    await inner_urara.print_and_wait([
      '与 ',
      bourbon.get_colored_name(),
      ' 和成群的同学站在一起的 ',
      rice.get_colored_name(),
      '，怀中笔墨尚新的绘本上正印着樱粉色的插画；',
    ]);
    await inner_urara.print_and_wait(
      '商店街和应援会的各位与来自各地未曾谋面的人们，在训练员的带领下拉起了比赛时最熟悉的横幅；',
    );
    await inner_urara.print_and_wait([
      '还有一位虽然依旧步履艰难，但却同样带着笑容站在观众席的最前排，跟随着',
      urara.couple_title,
      '向前的',
      urara.uma_sex_title,
      '……',
    ]);
    await inner_urara.print_and_wait([
      '在无数人的祝福声中，',
      urara.sex,
      '紧紧地抓住了微弱的呼救声尽头的、另一个自己向前伸出的手。',
    ]);
    await urara.say_and_wait(
      '因为听到了你说不想离开的声音，所以乌拉拉终于抓住你了……',
    );
    await urara.say_and_wait('我不会离你远去的……和乌拉拉——一起来吧！');
    await inner_urara.say_as_unknown_and_wait(
      '但是你们也不用回应我的，你们不需要一个……',
    );

    era.printButton(
      '「我们从来没有否定过你啊，最初保护乌拉拉的人，让我们聚在一起的人，不都是你吗？」',
      1,
    );
    await era.input();

    era.drawLine();
    await era.printAndWait([
      '在一同跨越终点板后，奔跑逐渐变为在赛场上的漫步，而站在前方的 ',
      you.get_colored_name(),
      ' 也早已等候多时。',
    ]);
    await urara.say_and_wait([
      '嗯！乌拉拉和 ',
      callname,
      '，其实一直以来都非常感谢你哦？',
    ]);
    await urara.say_and_wait(
      '而且我们也一直都是呢！只是一个人的话，大家什么都做不到哦？',
    );
    await era.printAndWait([
      '为了今天的「奇迹」，',
      urara.get_colored_name(),
      ' 到底发动了多少人，大概早就没有了统计的意义。',
    ]);
    await era.printAndWait(
      '可能每个人都是每个人路边的谈资，每个人都是每个人生命中的过客，大家都是什么都做不到的繁星。',
    );
    await era.printAndWait(
      '但正因如此，只要愿意相连成缀，哪怕只是短暂闪耀的星火，依旧能够持续的点亮整个夜空。',
    );
    await era.printAndWait([
      '当下的大家被名为「',
      urara.get_colored_actual_name(),
      '」的',
      urara.teen_sex_title,
      '相连，并还在不断编织的故事，或许就是能驱散黑暗的奇迹。',
    ]);

    era.printButton(
      '「你从一开始，就从旁观者变成了改变者啊，还有啊……这里晴空万里不是吗？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '嗯！虽然时机不太对，但乌拉拉觉得你其实一直值得收下感谢哦！',
    );
    await you.say_and_wait(
      '——谢谢你开启了这个故事，让渺小的彼此相遇，现在，我们会接你回家。',
    );
    await era.printAndWait(
      '从身体的颤抖，再到带着鼻音的呜咽，最后再变为不再掩饰的泪水。',
    );
    await inner_urara.say_as_unknown_and_wait('你们……你们……真的全都是……');
    await era.printAndWait([
      '在所有人面前含糊不清的抱怨着，灰白色调的小',
      urara.uma_sex_title,
      '发出了最丢人、但也最开心的放声哭泣。',
    ]);
    await era.printAndWait(
      '拒绝别人的信任，无比激烈的厌世，终其原因是没法原谅胆小到一无是处的自己。',
    );
    await era.printAndWait(
      '但强行将痛苦剥离，因恐惧而把真实的自我藏在心底视而不见，换来的只会是虚无又沉重的空包袱。',
    );
    await era.printAndWait(
      '在无数次跌倒并感受到疼痛之后，即使满身伤痕也终究是能够变得更勇敢。',
    );
    await era.printAndWait([
      '要放上拼图的最后一块碎片吗？那渺小到不能再渺小的、名为「',
      urara.get_colored_actual_name(),
      '」的',
      urara.uma_sex_title,
      '的故事？',
    ]);
    await era.printAndWait('是时候，与反复无常的自己和解了。');
    await era.printAndWait([
      '哭泣的',
      urara.teen_sex_title,
      '猛地扑进微笑的',
      urara.teen_sex_title,
      '身前，而微笑的',
      urara.teen_sex_title,
      '轻柔地将哭泣的',
      urara.teen_sex_title,
      '揽入怀中。',
    ]);
    await era.printAndWait([
      '两名「',
      urara.get_colored_actual_name(),
      '」的倒影重叠，互相在崭新的阳光融为一体下，随后周围的一切又开始逐渐消融。',
    ]);
    await era.printAndWait([
      '或许，那就是连奇迹都能实现的样子吧。在被光芒包围之前，',
      you.get_colored_name(),
      ' 也在无意间露出了安心的笑容。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '这是「',
      urara.get_colored_actual_name(),
      ' 的祈愿」，也是「所有人的祈愿」——',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 愿望是——在绝不会轻易完结的未来中，想要为了大家的笑容，一直跑下去。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '枕在 ',
      urara.get_colored_name(),
      ' 怀中，',
      you.get_colored_name(),
      ' 从俯首微笑的三女神像前醒来。平静如常的特雷森中，身边的担当面带微笑地等待着 ',
      you.get_colored_name(),
      '。',
    ]);
    await urara.say_and_wait(['接下来要来做什么呢？', callname, '！']);
  },
  we_95_47: (() => {
    const title = (urara, inner_urara) => [
      '「',
      { color: urara.color, content: urara.sex },
      { color: inner_urara.color, content: '们' },
      '」的礼物',
    ];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
    ) => {
      const ret = [];
      await era.printAndWait([
        '今天的 ',
        you.get_colored_name(),
        '，不知何时又站到了「',
        inner_urara.get_colored_name(),
        '」心中的那片草场之中。',
      ]);
      await era.printAndWait(
        '往日的雾霭已经消散，夜空无云，一片夜紫色的清朗中星空璀璨，而星光下的人仿佛站在世界中央。',
      );
      await era.printAndWait([
        '顺着奔跑声回首望去，明亮的月光下，两名容貌相仿的',
        urara.teen_sex_title,
        '似乎早已在此等候多时。',
      ]);
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '！你也来了啊！嘿嘿～一起躺下吧，草地上一点也不冷，很舒服哦！',
      ]);
      await urara.say_and_wait(
        '现在我们的心里很漂亮对吧？该怎么说呢？那个……那个……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '修饰的语句和描写的辞藻都不需要哦？不过以前的确完全没发现这里会这么漂亮……',
      );
      await urara.say_and_wait(
        '因为大家的心情都很好对吧？就像……就像有马之后是圣诞节！真期待呢～',
      );
      await inner_urara.say_as_unknown_and_wait([
        '虽然很让人期待但我们的主角一点紧张感都没有……感觉能赢吗，',
        arim_kin,
        '？',
      ]);
      await urara.say_and_wait(
        '我不知道哦，因为大家都很强！但就算赢不了，乌拉拉也一定会去奔跑！',
      );
      await inner_urara.say_as_unknown_and_wait(
        '嗯嗯，说的也是。毕竟哪怕是现在，大家也不全会对『乌拉拉能赢』抱有期望。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但这并非独自奔跑的故事，不止是您与我，被乌拉拉串连的所有人都在期待着这一刻。',
      );

      inner_urara.say_as_unknown([
        '所以……训练员',
        you.adult_sex_title,
        '，不管怎样，请您说些什么吧？',
      ]);
      era.printButton(
        '「一直以来都是这样吧，比起相信奇迹会降临，还是乌拉拉的成长更加可靠。」（全属性+5）',
        1,
      );
      era.printButton(
        '「你们已经拥有了这片漂亮的草场对吧？所以接下来，只要继续前进就好。」（草地适性提升）',
        2,
      );
      era.printButton(
        '「运气与奇迹也是实力的一部分，剩下的不足，就用勇气来补足吧！」（中&长距离适性提升）',
        3,
      );
      ret.push(await era.input());
      await urara.say_and_wait([
        '是这样吗？不过既然是 ',
        callname,
        ' 的建议，那乌拉拉一定没问题！',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '就是如此，不管相交后的道路愉快与否，头顶那片相连的星空已然变成了前进的蓝图……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……唉，要是我也能更早的明白这点，乌拉拉会不会少走更多的弯路——',
      );
      await urara.say_and_wait(
        '好！不准再想了！真是的，不可以再消沉下来了哦？明明好不容易才到圣诞节的！',
      );
      if (join_arim_kin_c) {
        await urara.say_and_wait(
          '哼哼～关于圣诞节礼物呢！虽然已经送过一次了，但乌拉拉觉得没问题！',
        );
        await urara.say_and_wait(
          '虽然不知道这次能不能拿到第一名，但是我想大家都会开心的——',
        );
      } else {
        await urara.say_and_wait('所以圣诞节，我也有给大家准备礼物哦？');
        await urara.say_and_wait([
          '虽然现在还不能给你，但是 ',
          callname,
          ' 明天一定能看到的——',
        ]);
      }
      await urara.say_and_wait([
        '『',
        arim_kin,
        '上的奔跑』，乌拉拉想将这份礼物送给 ',
        callname,
        '，也送给所有人！',
      ]);
      if (era.get('love:52') >= 50) {
        await inner_urara.say_as_unknown_and_wait([
          '难得是圣诞节，我还以为小乌拉拉会单独送些特别的礼物给自己的训练员',
          you.adult_sex_title,
          '呢？',
        ]);
        await urara.say_and_wait([
          '嗯！因为乌拉拉已经是 ',
          callname,
          ' 的所有物了嘛，所以只能送些『身体之外』的东西了哦？',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '噗……咳咳！这、这个说法？！虽然并非一无所知，但熟视无睹我果然还是做不到！',
        );
        await urara.say_and_wait(
          '嘻嘻～明明都过了这么久了，『乌拉拉』还是这么纯情，到底是怎么回事呢～？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '用不着你来告诉我！为什么小乌拉拉现在会变成这样啊？！',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait([
          '结果是送给大家共同的礼物呢，不过难得是圣诞节，不单独给 ',
          callname,
          ' 送些什么吗？',
        ]);
        await urara.say_and_wait([
          '诶？唔……想不出来要送什么呢！对了，乌拉拉把自己送给 ',
          callname,
          ' 不就好了！',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '等等等等下！这个礼物就算是妈妈同意我也不会同意哦？这对乌拉拉来说还太早了……',
        );
        await urara.say_and_wait(
          '可我已经不是小孩子了哦？而且到底什么太早了？难道『乌拉拉』在想色色的事？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '噗咳……！你、你在说什么啊小乌拉拉，我才不会这样啊！',
        );
      }
      inner_urara.say_as_unknown([
        '训练员',
        you.adult_sex_title,
        '，您倒是也说说话啊——',
      ]);
      era.printButton('「……不也挺好嘛？」（爱慕+2）', 1);
      era.printButton('「……关系真好啊？」（好感+10）', 2);
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait([
        '训练员',
        you.adult_sex_title,
        '（您）——！！',
      ]);
      era.drawLine();
      await era.printAndWait([
        '从压抑着行为的「',
        inner_urara.get_colored_name(),
        '」解放本心开始，两马一人的打闹声便在空旷的草场上持续了相当之久。',
      ]);
      await era.printAndWait(
        '而直到尽兴为止，三人才筋疲力竭的并排躺在了不变的夜空之下，一同沉入了令人安心的深色。',
      );
      await era.printAndWait([
        '在这时间都失去意义的星空与草原之中，在樱与褐的「',
        urara.couple_title,
        '」之间，',
        you.get_colored_name(),
        ' 倾听着两位',
        urara.teen_sex_title,
        '的平静的吹息。',
      ]);
      await era.printAndWait(
        '樱色的呼吸声正逐渐转向平稳，但另一侧迟迟不愿睡去的褐色却仿佛传来着轻声地呼唤。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 再次睁开眼睛，稍显褪色的「',
        urara.sex,
        '」，正用虽然没有花朵但拾回明亮的目光守望着身边的人……',
      ]);
      era.println();

      await inner_urara.say_as_unknown_and_wait(
        '啊哈，抱歉，我只是稍微有点……失眠？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '乌拉拉睡着了啊，所以我想和您单独聊聊……啊，不用起身，没关系的，躺着听就好。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '不过，跟一直在添麻烦的我独处，您的心情应该算不上有多好……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但就算这样，我也从来没向您说过谎，包括我从最初就爱着您这件事。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '至于为什么……我也不知道啊，可能比起爱，更像是出自灵魂的本能？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '听上去很可笑对吧？无法长久的陪伴在您身边的『春乌拉拉』的爱有什么意义？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '就连说出后也无法回应您，甚至在这之后都无法得到您的回应……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '明明连节日礼物都无法准备，即使只是缥缈的旁观与虚无的互动，依旧能称得上爱吗？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……结果还是答不上呢，现在的我，并不比最初与我相遇的您清醒多少。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但是我唯一知道的答案是，就算毫无意义，这份爱慕也是独一无二的。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '甚至与您身边的小乌拉拉无关。我并非主角，但这是只属于我，也只会投向您的感情。',
      );
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          '最初和乌拉拉一同相遇的您，守望乌拉拉奔跑的您，与乌拉拉一同拯救我的您……',
        );
        await inner_urara.say_as_unknown_and_wait(
          '奇迹真的出现了，美好到就像做梦一样，也让人害怕某天会突然孤身一人的醒来。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '所以梦醒之前，一定要把心意正式传达出来，就算被拒绝也没关系。',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '就算是擅自选中了您，就算一路以来遍地都是错误，您与乌拉拉在最后还是拯救了我。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '三年中我的确很多次的思考为何会选择您，但现在看来，一切都是值得被爱的。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '所以如果能将心意正式传达，就算在某天梦会醒来，也不会变回厌世的模样。',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        '哪怕只是被灵魂的鼓动所怂恿，还会被您所嫌恶虚情假意也好，我都想对您再说一次。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '或许在圣人的纪念日，这份无法言喻的感情即使虚假，也应当可以得到特赦吧？',
      );
      await inner_urara.say_as_unknown_and_wait('那么再来一次，请听我说……');
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        '这不是第一次，大概也不是最后一次，但是……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '训练员',
        you.adult_sex_title,
        '，我爱着您。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '迎向结局——';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     */
    const f = async (urara, inner_urara) => {
      await inner_urara.say_as_unknown_and_wait(
        '……喂喂？听得见吗？您果然一直有在听啊，那就适当地继续这个故事吧。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '这个故事可能中途没能让您满意，或许直到结局都满是缺憾，甚至还得让人学着告别。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但也正因如此，也感谢您愿意与我们一路上结伴而行，那么准备好了吗？',
      );
      await inner_urara.say_as_unknown_and_wait([
        '这是一位渺小到不能再渺小，但也是任何人都无可替代的，名为『',
        urara.get_colored_actual_name(),
        '』的小',
        urara.uma_sex_title,
        '的故事——',
      ]);
      era.drawLine();
      await era.printAndWait(
        `${era.get('flag:当前年')} 年 12 月第 4 周，中山竞马场。`,
      );
      await era.printAndWait('万里晴空下，祝福环绕，故事将越过结局。');
      await era.printAndWait('鼎沸人声里，晚春之樱，愿在严冬中满开。');
      await era.printAndWait('这是「我们」一同写下的故事——');

      era.printButton('所以，跑起来吧，春乌拉拉。', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = '跨越完结的故事——';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {number|false} arim_kin_rank_s 资深年有马纪念的名次，false 为未参加过有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      arim_kin_rank_s,
      arim_kin,
    ) => {
      await era.printAndWait([
        '站在选手通道内，',
        you.get_colored_name(),
        ' 对正在热身的 ',
        urara.get_colored_name(),
        ' 进行着惯例性叮嘱。',
      ]);

      era.printButton('「乌拉拉，今天感觉怎么样？有什么事一定要说啊。」', 1);
      await era.input();

      await urara.say_and_wait(
        '没有哦，因为只要和上次一样跑就好了吧！那么今天也要『乌拉拉』的上了！',
      );
      await era.printAndWait([
        '没错，现在只要一如既往就好……虽然 ',
        you.get_colored_name(),
        ' 记得这个「上次」好像还是上个月末的 ',
        arim_kin,
        '。',
      ]);
      if (arim_kin_rank_s) {
        if (arim_kin_rank_s === 1) {
          await era.printAndWait([
            '也拜 ',
            urara.get_colored_name(),
            ' 的「奇迹夺冠」所赐，那场比赛的热度时至今日都还未消散。',
          ]);
          await era.printAndWait([
            '不过在震撼人心的 ',
            arim_kin,
            ' 的一着之上，',
            urara.get_colored_name(),
            ' 也在大家的帮助下获得了更多重要的宝物。',
          ]);
          await era.printAndWait([
            '但在比赛结束后，明明大家都在笑，',
            urara.get_colored_name(),
            ' 和 ',
            you.get_colored_name(),
            ' 却在满场观众面前相拥着哭成了一团。',
          ]);
          await era.printAndWait(
            '而那副被抓拍的又丢人又耀眼的样子，现在还在各类网络平台上广为流传着……',
          );
        } else if (arim_kin_rank_s <= 5) {
          await era.printAndWait(
            '尽管比赛结果停在略有遗憾的位置，但在所有人的心里依旧是最棒的成绩。',
          );
          await era.printAndWait([
            '而且在那之前，',
            urara.get_colored_name(),
            ' 也在大家的帮助下，收获了比胜利还要重要的东西。',
          ]);
          await era.printAndWait([
            '不过即使说着没什么大不了，可当小',
            urara.uma_sex_title,
            '冲过终点板时，大家还是不约而同的哭了出来。',
          ]);
          await era.printAndWait([
            '泪水里包含的情感有很多，但唯一不变的，大概是看见 ',
            urara.get_colored_name(),
            ' 成长的感动吧……',
          ]);
        } else {
          await era.printAndWait([
            '虽然比赛的结果还算预料之中，但 ',
            urara.get_colored_name(),
            ' 依旧获得了所有人的祝福。',
          ]);
          await era.printAndWait([
            '而且在那之前，',
            urara.get_colored_name(),
            ' 也在大家的帮助下，收获了比胜利还要重要的东西。',
          ]);
          await era.printAndWait([
            '不过就算嘴上说着没什么大不了，可小',
            urara.uma_sex_title,
            '冲过终点板时，大家还是不约而同的哭了出来。',
          ]);
          await era.printAndWait([
            '泪水里包含的情感有很多，但唯一不变的，大概是看见 ',
            urara.get_colored_name(),
            ' 成长的感动吧……',
          ]);
        }
      }
      await era.printAndWait([
        '而在那之后资深年结束后的现在，',
        urara.get_colored_name(),
        ' 的检查结果则更让人吃惊。',
      ]);
      await era.printAndWait([
        '明明已经奔跑过三年，',
        urara.sex,
        '的本格化非但没有衰退迹象，反而又出现了新的上升空间。',
      ]);
      await era.printAndWait([
        '当然根据近期的遭遇，与 ',
        urara.get_colored_name(),
        ' 要好的人应该都能推测出这种现象的源头：',
      ]);
      await era.printAndWait([
        '虽然「',
        urara.sex,
        '」依旧羞于见人，但相比之前的「闭塞」，大家偶尔还是能在余光处看到另一抹粉色。',
      ]);
      await era.printAndWait([
        '至于现在「有马后的趁热打铁」……其实是 ',
        urara.get_colored_name(),
        ' 闹着想跑，而 ',
        you.get_colored_name(),
        ' 没拗过',
        urara.sex,
        '而已。',
      ]);

      era.printButton(
        '「不过现在想想，给故事画上句号看起来确实为时尚早啊……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 的决定，',
        you.get_colored_name(),
        ' 也想起了最近的一些变化。即使短短一个月，也足够改变很多事：',
      ]);
      await era.printAndWait(
        '特雷森的好友自不必多说，那位因腿伤退役的同学似乎也振作起来找到了未来的目标，',
      );
      await era.printAndWait([
        '尽管成为训练员的漫长道路才刚刚开始，但 ',
        you.get_colored_name(),
        ' 觉得总有一天自己会再次见到',
        urara.sex,
        '；',
      ]);
      await era.printAndWait(
        '商店街的人们正商讨着如何引入现代化商超，这并非是想要妥协，而是想要探寻改变能带来的潜力，',
      );
      await era.printAndWait([
        '比起原本的对抗与复兴，如今的大家在 ',
        urara.get_colored_name(),
        ' 的启发下，也开始尝试新时代的合作与予人方便。',
      ]);
      await urara.say_and_wait(
        '说的没错！就是因为大家都在前进，所以只要能做到，我也会继续奔跑！',
      );
      await urara.say_and_wait([
        '而且，',
        urara.sex,
        '也一直在注视着这边，不过现在已经从悲伤变得开心起来了！',
      ]);
      await urara.say_and_wait([
        '所以不管之前发生了什么，现在 ',
        callname,
        ' 也一定要好好地看着乌拉拉的奔跑哦！',
      ]);

      era.printButton('「那是当然的，现在的乌拉拉可是『无敌的』！」', 1);
      await era.input();

      await era.printAndWait([
        '伴随着 ',
        you.get_colored_name(),
        ' 的认可调整好呼吸，整理完决胜服，',
        urara.get_colored_name(),
        ' 随着广播中的入场提示向前踏出一步。',
      ]);

      era.printButton('「要上场了，乌拉拉自己觉得能赢下来吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！今天的我绝对会赢哦？就这样轻轻松松的赢下来！',
      );
      await era.printAndWait([
        '迎着阳光，',
        urara.get_colored_name(),
        ' 向 ',
        you.get_colored_name(),
        ' 露出了宛如回到起点时的无暇的笑容。',
      ]);
      await urara.say_and_wait([
        '那我要出发了哦！提问！',
        callname,
        '，乌拉拉要怎样奔跑呢——？',
      ]);
      await era.printAndWait([
        '面对 ',
        urara.get_colored_name(),
        ' 站在光中的笑脸，',
        you.get_colored_name(),
        ' 再次有力地回应着',
        urara.sex,
        '。',
      ]);

      era.printButton('「不管怎样，开心的上吧——！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_ticket: (() => {
    const title = '令人安心的云雾缭绕';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_child 是否和乌拉拉有后代
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_child,
    ) => {
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一起跑过无数次比赛后的某一天，',
        you.get_colored_name(),
        ' 从训练员室的抽屉中翻出了一张熟悉的奖券。',
      ]);
      await era.printAndWait([
        '于此同时，训练员室的大门被「砰」的一声撞开，一道樱色的闪光也随之飞入室内。',
      ]);
      await urara.say_and_wait([
        callname,
        '！我自主训练跑完了哦──！接下来该做什么呢？',
      ]);
      await era.printAndWait([
        '抹掉盖在笑脸上的水滴，被汗水浸湿体操服的 ',
        urara.get_colored_name(),
        ' 今天也在好好的闪闪发光。',
      ]);

      era.printButton('「哦！辛苦了！现在先休息吧！」', 1);
      await era.input();

      await urara.say_and_wait(['好──！']);
      await era.printAndWait([
        '将其他杂物重新塞回抽屉，',
        you.get_colored_name(),
        ' 起身迎向了比以往都要努力的小',
        urara.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '而回头看见桌上刚刚翻找出的「小奖励」，突然灵光一闪的 ',
        you.get_colored_name(),
        ' 对绕着自己打转的小',
        urara.uma_sex_title,
        '开口问道。',
      ]);

      era.printButton(
        '「乌拉拉，是时候找个时间放松一下了吧？还记得我们有张温泉券吗？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '温泉券……啊！是那个时候在商店街抽到的？乌拉拉差点就要忘掉了！',
      ]);
      await urara.say_and_wait([
        '不过，为什么这么突然说现在要去呢？难道说 ',
        callname,
        ' 也忘记了，结果现在才想起来？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 真是越来越敏锐了啊。扫了眼券上即将过期的使用日期，',
        you.get_colored_name(),
        ' 无奈地笑了笑。',
      ]);
      await era.printAndWait([
        '不过现在 ',
        urara.get_colored_name(),
        ' 的时间安排比以往宽裕得多，有机会出去放松也是好事，自然没有闲置奖券的理由。',
      ]);

      era.printButton(
        '「总之……就当是迟来的奖励吧，乌拉拉想邀请哪个朋友去？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '嗯？',
        callname,
        ' 不去吗？但是比起朋友，我更想和 ',
        callname,
        ' 一起去温泉哦？',
      ]);

      era.printButton('「比起和大人一起去，和朋友一起去不是更自由些吗？」', 1);
      await era.input();

      await era.printAndWait([
        '面对 ',
        you.get_colored_name(),
        ' 站在「成年人」角度的疑问，仍能代表着「孩子」的 ',
        urara.get_colored_name(),
        ' 则理所当然的回应道。',
      ]);

      if (high_relation) {
        await urara.say_and_wait([
          '但是 ',
          callname,
          ' 也需要休息对吧？只有乌拉拉接受奖励是不行的！',
        ]);
        await urara.say_and_wait([
          '就像刚才 ',
          callname,
          ' 说的那样，对 ',
          callname,
          ' 来说，这应该也是迟来的奖励哦？',
        ]);
      } else {
        await urara.say_and_wait([
          '再说了，这是乌拉拉和 ',
          callname,
          ' 一起抽到的，一开始也就不只属于乌拉拉一个人！',
        ]);
        await urara.say_and_wait([
          '所以这张券里也有 ',
          callname,
          ' 的一份，我觉得应该和 ',
          callname,
          ' 一起去！',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait([
          '说到最后，在少许停顿后，',
          urara.get_colored_name(),
          ' 又露出了身为「恋人」的笑容。',
        ]);
        await urara.say_and_wait([
          '而且我觉得，和喜欢的人一起泡温泉，应该不需要太多理由对吧？',
        ]);
      }

      await era.printAndWait([
        '既然邀请如此热切，那也不方便说更多拒绝的话了。迎着担当期待的目光，',
        you.get_colored_name(),
        ' 拿起搭在椅背上的外套。',
      ]);

      era.printButton('「我先去想想该准备点什么，明天就出发，可以吗？」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯！那乌拉拉也回去做准备了，明天在大门口见哦——',
      ]);
      await era.printAndWait([
        '小',
        urara.uma_sex_title,
        '在 ',
        you.get_colored_name(),
        ' 的应许声中再次飞出门外。如果能不出意外就好了，看在 ',
        urara.get_colored_name(),
        ' 这么开心的份上。',
      ]);
      await era.printAndWait([
        '但当二人拎着包兴致正盛的来到旅店前台时，意外还是不出意外的在此恭候多时了。',
      ]);
      await you.say_as_passer_by_and_wait(
        '服务员',
        '真的很抱歉，本店的单人客房已经住满了……',
      );
      await you.say_as_passer_by_and_wait(
        '服务员',
        '但是作为补偿，我们可以为二位提供一间自带小温泉池的双人间，客人们意向如何？',
      );

      if (you.sex_code === 1) {
        await era.printAndWait([
          '结果刚来就遇到这种尴尬的展开啊，出行的运气有点太差了。不过来都来了，这样就好。',
        ]);
        await era.printAndWait([
          '而且再看一眼身旁依旧满脸期待的小 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 大概也没有打道回府的选择。',
        ]);
        await era.printAndWait(['话说回来，这类情况过夜又要怎么分配空间啊……']);
        await era.printAndWait([
          '从前台手中接过房间钥匙，',
          you.get_colored_name(),
          ' 心情略微复杂地拎起行李，与 ',
          urara.get_colored_name(),
          ' 一同拐进了旅馆的长廊。',
        ]);
        era.drawLine();
        await era.printAndWait([
          '比 ',
          urara.get_colored_name(),
          ' 更早一步回到房间，',
          you.get_colored_name(),
          ' 脱下衣服拿起浴巾，拉开了隔开温泉池的拉门。',
        ]);
        await era.printAndWait([
          '在一声长舒中放松地坐进温热的泉水中，仰望着月明星稀的夜空，',
          you.get_colored_name(),
          ' 放松的闭上眼睛。',
        ]);
        await era.printAndWait([
          '已经三年了啊，最初相遇时还像个小孩子的 ',
          urara.get_colored_name(),
          '，现在也渐渐有了成熟的姿态……',
        ]);
        await era.printAndWait([
          '随后在轻松祥和中，拉门便伴随着',
          urara.teen_sex_title,
          '开心的呼声被「狂暴」地撞开了。',
        ]);
        await urara.say_and_wait([
          '嘿嘿～趁着 ',
          callname,
          ' 还没回来，乌拉拉先泡一下好了——！',
        ]);
        await era.printAndWait([
          '还没来得及睁开眼睛，撞飞良好气氛的小',
          urara.uma_sex_title,
          '便在池边一跃而起，在激荡的水花中扎进了池中。',
        ]);
        await era.printAndWait([
          '前言撤回，这不是完全没长大吗？抹掉脸上的水，',
          you.get_colored_name(),
          ' 无奈地望向了前方违规入水的 ',
          urara.get_colored_name(),
          '……',
        ]);
        await era.printAndWait([
          '……等下，',
          urara.get_colored_name(),
          ' 进来了？！反应过来哪里不对的 ',
          you.get_colored_name(),
          ' 迅速站起并围上了下水前丢在池边的浴巾。',
        ]);
      } else {
        await era.printAndWait([
          '嗯？房间比券上的奖励更豪华了，甚至泡温泉的时间也更自由了。这不是运气很好吗？',
        ]);
        await urara.say_and_wait([
          '诶？虽然听起来不够热闹，但只有乌拉拉和 ',
          callname,
          '，是不是就可以在里面游泳了？',
        ]);
        era.printButton('「不可以在温泉池里游泳哦？」', 1);
        await era.input();

        await era.printAndWait([
          '轻轻拍了拍兴奋过头的小',
          urara.uma_sex_title,
          '的头顶，',
          you.get_colored_name(),
          ' 笑着拎起行李，与 ',
          urara.get_colored_name(),
          ' 一同进入了旅馆的长廊。',
        ]);
        era.drawLine();
        await era.printAndWait([
          '在明亮的月色下稍微多散了一段时间步后，',
          you.get_colored_name(),
          ' 回到房间慢慢脱下衣服，随后拿起了一旁的浴巾。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 现在应该也已经入池了吧，有在做一个好孩子吗？不会真的在池子里乱扑腾吧？',
        ]);
        await era.printAndWait([
          '将手搭在隔开温泉池的拉门上，这是在想什么呢，三年了哦？',
          urara.get_colored_name(),
          ' 已经变成大孩子了不是吗……',
        ]);
        await era.printAndWait([
          '拉开拉门，',
          you.get_colored_name(),
          ' 便立刻听到了 ',
          urara.get_colored_name(),
          ' 将温泉当成泳池，并在水中激烈扑腾的声音。',
        ]);
        await urara.say_and_wait(['嘿嘿～总感觉好开心呢——！']);
        await era.printAndWait([
          '前言撤回，还是完全没长大啊。慢慢进入水中，',
          you.get_colored_name(),
          ' 无奈地望向前方正违规戏水的 ',
          urara.get_colored_name(),
          '。',
        ]);
      }
      await era.printAndWait([
        '透过氤氲的水雾，还未发现有他人在的小',
        urara.uma_sex_title,
        '大方地展示着自己健康饱满的肉体。',
      ]);
      await era.printAndWait([
        '散开的樱发湿润的贴近',
        urara.teen_sex_title,
        '光滑的肌肤，与下落的露水一同为',
        urara.sex,
        '天真的笑颜裹上了朦胧的暧昧。',
      ]);
      await era.printAndWait([
        '三年的锻炼并没有让柔软变得僵硬，反而让小',
        urara.uma_sex_title,
        '本就肉感的腰臀与小腹变得更加丰满可人。',
      ]);
      await era.printAndWait([
        '顺着柔媚的曲线前往上下两端，',
        urara.teen_sex_title,
        '股间娇嫩的秘密花园被尾巴摇起的涟漪巧妙的半掩在水面之间；',
      ]);
      await era.printAndWait([
        '而在戏水中轻柔摇晃的柔软双峰上，两朵可爱的花蕊与果实也在雾气中若隐若现。',
      ]);
      await era.printAndWait([
        '但为这幅天真又禁忌的景色添上点睛之笔的，则还是在灯火、水面与月光的相交映照中，',
      ]);
      await era.printAndWait([
        '摇晃着那对小巧可爱的耳朵，',
        urara.teen_sex_title,
        '如常绽开着樱花的瞳孔，正如彩色琉璃般闪耀着美丽的色彩。',
      ]);
      await era.printAndWait([
        '唯一有些美中不足的是，风景画中烂漫又情色的小主角，在逐渐将视线转向不知所措的 ',
        you.get_colored_name(),
        '……',
      ]);

      if (you.sex_code === 1) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            '嗯？啊……是 ',
            callname,
            ' 啊，已经进来了啊，是什么时候来的呢？',
          ]);
          await era.printAndWait([
            '既没有因身体被注视而羞涩，也没有因打算浑水摸鱼而愧疚，小',
            urara.uma_sex_title,
            '在雾气中慢慢靠向了 ',
            you.get_colored_name(),
            '。',
          ]);
          await urara.say_and_wait([
            '嘿嘿～刚才 ',
            callname,
            ' 好像在盯着乌拉拉看呢？',
            callname,
            ' 究竟有没有这样做呢？',
          ]);
          await era.printAndWait([
            '大胆地将刚起身的 ',
            callname,
            ' 重新按回水中，',
            urara.teen_sex_title,
            '带着爱意的微笑，一丝不挂地轻轻跨坐在 ',
            you.get_colored_name(),
            ' 的身上。',
          ]);
          await era.printAndWait([
            '到底是什么时候，',
            urara.get_colored_name(),
            ' 变得这么大胆了啊……',
          ]);
        } else {
          await urara.say_and_wait([
            '诶？',
            callname,
            '？为什么 ',
            callname,
            '……啊不是，这个是……',
          ]);
          await era.printAndWait([
            '急忙在他人的视线中护住自己一丝不挂的身体，',
            urara.get_colored_name(),
            ' 的小脸在热气中罕见的被蒸透成了红色。',
          ]);
          await urara.say_and_wait([
            callname,
            '……色鬼……别看了，快点背过去……乌拉拉很难为情啊……',
          ]);
          await era.printAndWait([
            '从水中捞起的浴巾慌张遮挡后，刚才仿佛初遇时那般懵懂的小马，小声吐出了只属于怀春',
            urara.teen_sex_title,
            '的抱怨。',
          ]);
          await era.printAndWait([
            '看来不管怎么说，',
            urara.get_colored_name(),
            ' 多少还是成长了……',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '嗯？',
          callname,
          ' 来了啊！乌拉拉已经帮你试过了哦？水里很舒服呢！',
        ]);
        await era.printAndWait([
          '似乎并没有对自己的浑水摸鱼行为作解释，',
          urara.get_colored_name(),
          ' 在雾气中踩着水向 ',
          you.get_colored_name(),
          ' 慢慢地靠过来。',
        ]);
        await urara.say_and_wait([
          '不过，',
          callname,
          ' 要小心脚下哦？把手给我吧！嘿咻～',
        ]);
        await era.printAndWait([
          '牵起手将 ',
          you.get_colored_name(),
          ' 带入池中，',
          urara.get_colored_name(),
          ' 带着暧昧的笑容，把最喜欢的 ',
          callname,
          ' 在入池的一瞬间扑倒在了水中。',
        ]);
        await era.printAndWait([
          '总好像「被 ',
          urara.get_colored_name(),
          ' 主动邀请了」一样，但果然这是危险动作吧……',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ' 来了啊！怎么了吗？为什么一直盯着乌拉拉看呢……诶？',
        ]);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的注视中，',
          urara.get_colored_name(),
          ' 才发现自己的浴巾并没有老实的围在身上，反而已经沉到水底的浴巾。',
        ]);
        await urara.say_and_wait([
          '什么时候弄掉的呢？不过这里也没有其他人在呢！所以不系也……诶？不行？',
        ]);
        await era.printAndWait([
          '虽然在 ',
          you.get_colored_name(),
          ' 的帮助下刚包好浴巾与头发后，',
          urara.get_colored_name(),
          ' 便又立刻冲进了水池中。',
        ]);
        await era.printAndWait([
          '唉，偶尔还是会像没长大的小孩啊，但果然还是好可爱……',
        ]);
      }

      await era.printAndWait([
        '在之后的一番折腾……准确来说是连哄带骗后，',
        you.get_colored_name(),
        ' 还是让 ',
        urara.get_colored_name(),
        ' 在水中安分了下来。',
      ]);
      await era.printAndWait([
        '毕竟哪怕是公共浴池，把水池弄得一塌糊涂也是绝对禁止的行为。',
      ]);
      await era.printAndWait([
        '在雾气重新将相互倚靠的两人笼罩后，这一池泉水总算是得以施展它本来的用途。',
      ]);
      await era.printAndWait([
        '温热的水气盖过了冬春交替时节的寒冷，而夜空的星星也恰到好处透过雾气闪闪发光。',
      ]);
      await era.printAndWait([
        '在暖流的包围中将大部分身体滑进水中，总算能够与担当一同享受安逸的 ',
        you.get_colored_name(),
        ' 在温暖中彻底放松下来。',
      ]);
      await era.printAndWait([
        '没关系，因为与 ',
        urara.get_colored_name(),
        ' 一同锻炼的三年体能得到了极大改善，所以不会轻易泡晕的自信还是有的。',
      ]);
      await era.printAndWait([
        '虽然这也说明，即使尚未退役，',
        urara.get_colored_name(),
        ' 作为赛',
        urara.uma_sex_title,
        '的最初三年也彻底结束了。',
      ]);
      await era.printAndWait([
        '现在',
        urara.sex,
        '已经有了自己定夺今后比赛与训练的能力，而作为训练员 ',
        you.get_colored_name(),
        ' 也会与更多',
        urara.uma_sex_title,
        '相识。',
      ]);
      await era.printAndWait([
        '倒不是担心二人间变得疏远，只是不论好与坏，会毫无防备的外泄春光的小',
        urara.uma_sex_title,
        '或许仅此一位。',
      ]);
      await era.printAndWait([
        '不管怎样，既然已经二人三足走到了这里，',
        you.get_colored_name(),
        ' 大概只有继续将 ',
        urara.get_colored_name(),
        ' 放在身边这一个选择。',
      ]);
      if (has_child) {
        await era.printAndWait([
          '况且，既然选择在错误的时间地点摘下禁果，不论今后幸福与否，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 也早已没法回头了……',
        ]);
      }
      await era.printAndWait([
        '唉，这是在想什么？明明好不容易与担当泡次温泉，怎么突然在「浴中奇思」里忧郁起来了？',
      ]);
      await era.printAndWait([
        '而且相遇后，好事不是很多吗？比如只要在忧郁的时候闭上眼睛，心里就全是 ',
        urara.get_colored_name(),
        ' 的笑颜。',
      ]);
      await era.printAndWait([
        '不想和 ',
        urara.get_colored_name(),
        ' 分开啊。哪怕并不会发生，也还是想要如此感叹。',
      ]);
      await era.printAndWait([
        '不过，如今再翻过来看过去的某些事，倒也确实没有之前那般焦虑了。',
      ]);
      await era.printAndWait([
        '是因为安心感与满足感吗？或许在温泉中胡思乱想，真的能借助温热的水流把心事都冲淡吧。',
      ]);
      await era.printAndWait([
        '……不过说到这个，是错觉吗，水是不是越来越热了？',
      ]);
      await urara.say_and_wait([
        '嗯？',
        callname,
        ' 脸色好红啊！我和你说哦，泡温泉会晕和体能关系不大呢，所以不要勉强哦？',
      ]);
      await era.printAndWait([
        '怎么回事，身体软绵绵的，突然变得好困，感觉马上就要睡着了……',
      ]);
      await urara.say_and_wait([
        '还有啊，再往下滑的话，鼻子就要被淹到了哦？',
        callname,
        '，有听到吗？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 的声音，听起来好远啊，好像越来越远了啊……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '有人都已经在用鼻孔吹泡泡了，能听到也不像会说话的样子啊？！',
      ]);
      await era.printAndWait([
        '说的没错，结果这次又高估了自己的承受能力，总觉得要沉底了……',
      ]);
      await urara.say_and_wait([
        '啊！你来了啊，温泉很舒服哦！但是……现在 ',
        callname,
        ' 有点奇怪？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '温泉什么的最后再说，总之快点把 训练员',
        you.adult_sex_title,
        ' 拉上来！',
      ]);
      await era.printAndWait([
        '抱歉，今天也麻烦「你」了。在某种被放缓的氛围当中，察觉到自己正被七手八脚地捞起的 ',
        you.get_colored_name(),
        ' 安心的躺平了。',
      ]);

      await era.printAndWait([
        '再次醒来时，头顶的光亮已经从星空变为暖黄的顶灯。',
      ]);
      await era.printAndWait([
        '不过好在映入眼中的并非医院里陌生的白墙，而是温泉旅店的和式装修。',
      ]);
      await era.printAndWait([
        '这是躺了多久？',
        urara.get_colored_name(),
        ' 呢？总之先起来……',
      ]);
      await era.printAndWait([
        '可正当 ',
        you.get_colored_name(),
        ' 打算顶着略微模糊的视线撑起身子时，却被一道来自身下的阻力轻轻地按住了脸颊。',
      ]);
      await urara.say_and_wait([
        callname,
        '，先不要动，休息的时候不用勉强自己哦？',
      ]);
      await era.printAndWait([
        '顺着温柔的声音将视野上抬，这次看到的，是小',
        urara.uma_sex_title,
        '自上而下的笑脸。',
      ]);
      await era.printAndWait([
        '以乖巧的坐姿代替了枕头，',
        urara.teen_sex_title,
        '之前藏在水中的紧致双腿，现在正柔软的垫在 ',
        you.get_colored_name(),
        ' 的脑后。',
      ]);
      await era.printAndWait([
        '穿着宽松的和式衣装，',
        urara.get_colored_name(),
        ' 像安抚孩子的母亲般抚摸着 ',
        you.get_colored_name(),
        ' 的脸颊，一边竖起手中的采耳勺。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～',
        callname,
        ' 现在像小孩子一样呢，因为一直以来都很辛苦吗？',
      ]);
      await urara.say_and_wait([
        '我从大家那里听说，这样可以让人放松下来，',
        callname,
        '，稍微把身子侧一下吧。',
      ]);
      await urara.say_and_wait([
        '没关系的，今天的 ',
        callname,
        ' 可以随便撒娇，觉得不自在的话，抓住乌拉拉的尾巴也可以哦？',
      ]);
      await era.printAndWait([
        '在温柔的鼓动下，身体不由自主的动了起来，',
        you.get_colored_name(),
        ' 仿佛顺从着母亲安慰的孩子般握住了眼前柔顺的毛发。',
      ]);
      await urara.say_and_wait([
        '乌拉拉也是第一次做，所以要是被戳疼了，一定要和我说哦？',
      ]);
      await era.printAndWait([
        '纤细的手指抚过耳廓，在用棉球掸去外耳的污垢的，',
        urara.teen_sex_title,
        '开始轻柔地用耳勺剐蹭着耳道。',
      ]);
      await era.printAndWait([
        '酥麻的触觉逐渐向全身扩散，并在',
        urara.teen_sex_title,
        '清香甘甜的怀抱中逐渐转为让意识漂浮的放松感。',
      ]);
      await era.printAndWait([
        '枕在小孩子的膝盖上尽情撒娇真是大人该有的行为吗？但就算想要辩驳，大脑也已经厌倦了思考。',
      ]);
      await urara.say_and_wait([
        '不管以前发生过什么，不管今后会发生什么，乌拉拉都想要感谢 ',
        callname,
        '。',
      ]);
      await urara.say_and_wait([
        '希望 ',
        callname,
        ' 在以后也能时刻露出安心的笑容，这是我想要给 ',
        callname,
        ' 的礼物。',
      ]);
      await urara.say_and_wait([
        '乌拉拉的身边，永远会给 ',
        callname,
        ' 留出歇脚的位置，所以 ',
        callname,
        ' 以后又感到不安的话，就来找乌拉拉吧？',
      ]);
      await era.printAndWait([
        '用柔和的吐息与纸巾清理着积攒在耳边的脏污，',
        urara.teen_sex_title,
        '轻笑着戳了戳逐渐沉沦在自己怀中的大人。',
      ]);
      await urara.say_and_wait([
        callname,
        '，不要一下就睡着哦？待会儿还有另一只耳朵呢。',
      ]);
      await urara.say_and_wait(['今天晚上，时间还很长哟？']);
      await era.printAndWait([
        '沉浸在 ',
        urara.get_colored_name(),
        ' 构建的温柔乡中，',
        you.get_colored_name(),
        ' 安心的闭上了眼睛。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '呼呼～温泉真是不错，尤其是压力都告一段落后，就连我的心情也舒畅起来了。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '虽然是不请自来，不过既然已经休息了，我想您应该不会介意我占用一会儿温泉吧？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '啊！还有这个……『在这段时光中，您深刻地感受到了与乌拉拉之间无可取代的情谊～』',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '咳……不过就算听上去再怎么不严肃，无可取代的情谊，也的确降临在了此处……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '至少此时此刻，一定是安心且幸福的吧。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_teach: (() => {
    const title = '名指导';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '在从商店街采购结束的回程路上，身边帮 ',
        you.get_colored_name(),
        ' 拎着东西的 ',
        urara.get_colored_name(),
        ' 正开心地哼唱着什么。',
      ]);

      era.printButton('「心情变得很好啊，刚刚发生了什么好事吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嘿嘿～没错哦！商店街的大家对我说『你很努力哦』，还送我礼物呢！很棒吧！',
      );
      await urara.say_and_wait(
        '以前大家对我说的都是『不要勉强哦』，而现在说『你很努力哦』的人也变多了！',
      );
      await era.printAndWait([
        '蹦蹦跳跳的将手中的袋子们摇得沙沙作响，小',
        urara.uma_sex_title,
        '对 ',
        you.get_colored_name(),
        ' 露出了感谢的笑容。',
      ]);
      await urara.say_and_wait(
        '我想一定是因为我跑得比以前更快了，所以认可乌拉拉的人也变多了！',
      );
      await urara.say_and_wait([
        '但是如果没有 ',
        callname,
        '，乌拉拉也没办法走到这一步呢！所以，谢谢你，',
        callname,
        '！',
      ]);

      era.printButton('「既然这样的话，那么接下来的比赛也要——」', 1);
      await era.input();

      await urara.say_and_wait('没错！接下来的比赛乌拉拉也会继续加油的！');
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 迎着阳光的笑脸中，',
        you.get_colored_name(),
        ' 与',
        urara.sex,
        '一同鼓起了面向下一次的干劲。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_dance: (() => {
    const title = '舞蹈练习';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 为了拿忘记的东西前往舞蹈室时，发现 ',
        urara.get_colored_name(),
        ' 今天也在下课后继续独自进行着舞蹈练习。',
      ]);
      await urara.say_and_wait([
        '——好，结束了！呼～好怀念啊……啊！',
        callname,
        ' 你来了！',
      ]);
      await era.printAndWait([
        '在音乐结束后擦着脸上的汗水，看到训练员走来的 ',
        urara.get_colored_name(),
        ' 也笑着迎向了 ',
        you.get_colored_name(),
        '。',
      ]);

      era.printButton('「嗯！乌拉拉也辛苦了！不过，怀念的事情是指？」', 1);
      await era.input();

      await urara.say_and_wait(
        '啊，那是我小时候常常在家里的工作用小屋跳舞，老家的朋友们还用木头帮我做了麦克风！',
      );
      await urara.say_and_wait(
        '在来特雷森的时候，大家还跟乌拉拉约好了，说以后大家会一起来看我的演唱会呢！',
      );
      await urara.say_and_wait(
        '所以我也得好好练习演唱会的表演才行，可不能让他们失望呢！',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 的老家，是说在高知的朋友们吗？所以',
        urara.sex,
        '才会这么努力的为赛后Live做准备啊。',
      ]);

      era.printButton('「嗯……可以让我看看乌拉拉的成果吗？」', 1);
      await era.input();

      await urara.say_and_wait([
        '当然没问题！那么 ',
        callname,
        '，帮乌拉拉按一下录音机可以吗？',
      ]);
      await era.printAndWait([
        '随着熟悉的音乐，',
        urara.get_colored_name(),
        ' 开始在 ',
        you.get_colored_name(),
        ' 的注视下大方的展示着自己一直以来的努力。',
      ]);
      await era.printAndWait([
        '虽然有时会唱错歌词，但',
        urara.sex,
        '的肢体语言却能够充分的表达出自己的情感，可以算是十分出色的表演。',
      ]);

      await urara.say_and_wait([
        callname,
        '，乌拉拉怎么样呢？大家看了会开心吗？',
      ]);
      era.printButton('「嗯，大家一定会很开心的。」（速度+10）', 1);
      era.printButton('「把歌词记熟的话或许会更好。」（智力+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          '果然会吧！乌拉拉也觉得一定会的！所以正式上场时，我一定会更努力表演的！',
        );
        await urara.say_and_wait(
          '不管是现在还是过去，我会让支持我的大家都看到乌拉拉的成长哦！',
        );
        await era.printAndWait([
          '干劲十足的 ',
          urara.get_colored_name(),
          ' 又开始了自主练习，不管怎样，这样努力的',
          urara.sex,
          '在上台时一定不会失败吧。',
        ]);
      } else {
        await urara.say_and_wait(
          '说的也是，我好像经常搞错歌词！但只要能好好记住歌词，演唱会一定会变得更棒吧？',
        );
        await urara.say_and_wait('好！那么乌拉拉接下来要努力背歌词了！');
        await era.printAndWait([
          '熟记歌词后，',
          urara.sex,
          '的歌声更能精准地传达感情，想来在台上的时候也能更加引人注目吧。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_fans_letr: (() => {
    const title = '粉丝来信';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 一同收拾着粉丝们的礼物，在大部分都是熟认之人的寄件中，夹着一个小小的信封。',
      ]);
      await era.printAndWait([
        '同往常一样，会认真对待每封来信的 ',
        urara.get_colored_name(),
        ' 也翻开了不起眼的它，随后便欣喜的睁大了眼睛……',
      ]);
      await urara.say_and_wait([
        callname,
        '！这好像是一位住在很远的地方的孩子的来信哦！',
      ]);
      await urara.say_and_wait(
        '『看到你不放弃的身影，我获得了勇气』……他这样写，总觉得有点不好意思呢！',
      );
      await urara.say_and_wait(
        '所以我觉得自己下次绝对会赢！到时这个孩子会更替我开心吗？',
      );

      era.printButton('「当然，能看到乌拉拉的胜利，他一定会开心的。」', 1);
      await era.input();

      await era.printAndWait([
        '面对 ',
        you.get_colored_name(),
        ' 肯定的回答，',
        urara.get_colored_name(),
        ' 笑着写起了回信。收到从远方寄来的鼓励，',
        urara.get_colored_name(),
        ' 也更有动力了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_all_like: (() => {
    const title = '人见人爱';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '结束了今天的工作后，',
        you.get_colored_name(),
        ' 正独自在学园周围散步，却又在路过小公园时看到了熟悉的身影。',
      ]);
      await era.printAndWait([
        '公园的草坪上铺着干净的餐布，而 ',
        urara.get_colored_name(),
        ' 正跟一对拿出便当的母子开心地坐在一起聊着什么。',
      ]);
      await urara.say_and_wait('咦？我的名字？春乌拉拉！我的名字叫春乌拉拉！');
      await era.printAndWait(
        '阿姨A「乌拉拉……？原来你就是特雷森学园的春乌拉拉啊，你的比赛我们都看过哦！」',
      );
      await urara.say_and_wait(
        '诶？原来乌拉拉很厉害吗？嘿嘿～总觉得有点不好意思，不过……',
      );
      await urara.say_and_wait([
        '我的 ',
        callname,
        ' 在那边哦！所以——',
        callname,
        '！要一起吃便当吗？',
      ]);
      await era.printAndWait([
        '不知何时注意到了远处的 ',
        you.get_colored_name(),
        '，小',
        urara.uma_sex_title,
        '正摇着耳朵向 ',
        you.get_colored_name(),
        ' 的方向招着手。',
      ]);

      era.printButton('「嗯？等下，我也可以吗？」', 1);
      await era.input();

      await era.printAndWait([
        '阿姨A「别客气嘛，训练员',
        you.adult_sex_title,
        '，就当是感谢您的担当陪我家孩子玩了！」',
      ]);
      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 与路人阿姨的热情邀请下，',
        you.get_colored_name(),
        ' 还是有些不好意思的在餐布的一角坐了下来。',
      ]);
      await era.printAndWait([
        '而在 ',
        you.get_colored_name(),
        ' 也坐好之后，',
        urara.get_colored_name(),
        ' 则又向一旁的小男孩继续开心地搭起了话。',
      ]);
      await urara.say_and_wait(
        '不过，我们的黑白猜的第七场比赛还没分出胜负呢！要继续吗？',
      );
      await era.printAndWait(
        '男孩A「诶？不是约好吃完再继续比吗？而且反正下次也会是我赢啦！」',
      );
      await urara.say_and_wait(
        '还真敢说呢，但我也绝对不会输！乌拉拉每次猜拳都会赢，而且头也会转得非常快哦！',
      );
      await era.printAndWait([
        '男孩的母亲正用温柔的目光注视着互动的两人，但一旁的 ',
        you.get_colored_name(),
        ' 却在小男孩的表情中读出了一丝焦虑……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 开朗又惹人怜爱的个性可以在转眼间跟任何人成为朋友，',
        urara.sex,
        '也因此很受小孩子们的欢迎。',
      ]);
      await era.printAndWait([
        '但也正因如此，',
        urara.sex,
        '也对即将步入青春期的孩子们有着不亚于其他「初恋杀手」的吸引力，所以……',
      ]);
      await era.printAndWait([
        '男孩A「那个……乌拉拉',
        urara.elder_sibling_sex_title,
        '，我们之后……之后还能再见吗？」',
      ]);
      await urara.say_and_wait([
        '嗯？我以后还会来这个公园的，所以肯定能再见哦？对吧，',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '在分开之前，连着妈妈的手，男孩向这名',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        '投出了朦胧但勇敢的情意。',
      ]);
      await era.printAndWait([
        '勇气可嘉，但不明不白的',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        '只是回以了理所当然的答案，并向身旁紧贴的大人投出了笑容。',
      ]);
      await era.printAndWait([
        '不但没传达到，状况还恶化了？在 ',
        urara.get_colored_name(),
        ' 的笑容中，没敢去直视男孩的目光的 ',
        you.get_colored_name(),
        ' 只是默默地点点头。',
      ]);
      await era.printAndWait([
        '作为赛',
        urara.uma_sex_title,
        '受欢迎的确不错，但总觉得有什么不知不觉间变得糟糕了，总之希望那名男孩一切安好吧……',
      ]);
      await era.printAndWait([
        '牵着 ',
        urara.get_colored_name(),
        ' 的手欲言又止的 ',
        you.get_colored_name(),
        '，与还在笑着向身后挥着手的 ',
        urara.get_colored_name(),
        '，一起踏上了归路。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_food: (() => {
    const title = '鲷鱼烧与挑食对策';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '在某日外出训练的闲暇之余，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 一同如临大敌的站在鲷鱼烧摊铺面前。',
      ]);
      await urara.say_and_wait([
        callname,
        '，准备好了吗？今天可是说好的要一起吃的哦？',
      ]);

      era.printButton(
        '「我是没什么问题，主要是乌拉拉你啊……不好意思，两个随机口味的鲷鱼烧。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '瞥了眼一侧跃跃欲试的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 无奈地向店员点了两份「隐藏菜单」。',
      ]);
      await urara.say_and_wait(
        '没关系的！就算是抽到了不喜欢的口味，乌拉拉也一定会好好吃完的！',
      );
      await urara.say_and_wait([
        '那么 ',
        callname,
        '，要一起咬下去了哦……呜啊……是、是芥末的……！',
      ]);
      await era.printAndWait([
        '结果还没将身下的长椅焐热，小',
        urara.uma_sex_title,
        '就像是被自己手中的那块点心反咬一口般弹了起来。',
      ]);
      await era.printAndWait([
        '而身为大人，',
        you.get_colored_name(),
        ' 冷静的注视着辣得满脸通红的 ',
        urara.get_colored_name(),
        '，一边吃掉了自己手中那块青椒馅的怪味点心。',
      ]);

      era.printButton(
        '「乌拉拉，没事吧？受不了的话那块给我解决掉也没关系哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '呜～不要紧的！乌拉拉可以独自吃完！要上了……呜啊……',
      );
      await era.printAndWait([
        '看着虽然满脸通红但依旧干劲满满小担当，',
        you.get_colored_name(),
        ' 默默地去不远处给',
        urara.sex,
        '买了两杯偏甜的饮料……',
      ]);
      await era.printAndWait([
        '总之，虽然吃到了整蛊般的点心，但在 ',
        you.get_colored_name(),
        ' 的鼓励下，',
        urara.get_colored_name(),
        ' 的干劲反而提升了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_stair: (() => {
    const title = '阶梯训练与学生传言';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '在从理事长办公室回去的路上，',
        you.get_colored_name(),
        ' 在教学楼的某个楼梯口附近撞见了不知为何在跑上跑下的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait('呼……呼……结果又是只有……十二阶……');

      era.printButton(
        '「乌拉拉，这是在做什么呢？自主训练的话去训练场比较好哦？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '啊，',
        callname,
        '！我听大家说这里的楼梯，每到傍晚就会增加一阶哦！就像魔法一样！',
      ]);
      await urara.say_and_wait(
        '我觉得很有趣所以就跑来数了，结果直到现在都已经来回数了一个多小时了……',
      );
      await era.printAndWait([
        '原来是校园怪谈啊。特雷森的',
        urara.uma_sex_title,
        '们毕竟也是青春期的',
        urara.teen_sex_title,
        '们啊，感兴趣也是理所当然的。',
      ]);
      await era.printAndWait([
        '而且对身为训练员的 ',
        you.get_colored_name(),
        ' 来说，比起不确定的灵异传言，还是至今仍围绕着诸多谜团的',
        urara.uma_sex_title,
        '们更加有趣。',
      ]);

      era.printButton('「不过，数了一个多小时也太长了吧？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！因为不管我数了几次……台阶却一直都是十二节……',
      );
      await urara.say_and_wait(
        '所以现在乌拉拉还不想放弃，因为大家都说是真的，所以我想要再多数几次……',
      );
      await era.printAndWait(
        '不，这样不行的吧？先不说这个传言的结局是会有霉运缠身，灵异事件怎么说也不能靠赶巧遇见吧？',
      );
      await era.printAndWait([
        '看吧，五、十、十一、十二、十三……等下？！突然察觉到有哪里不对，',
        you.get_colored_name(),
        ' 捂住了阵阵发凉的后颈……',
      ]);
      await urara.say_and_wait(['……诶？', callname, ' 是要做什么呢……呜哇——']);
      await era.printAndWait([
        '察觉到大事不妙的 ',
        you.get_colored_name(),
        ' 立即将小',
        urara.uma_sex_title,
        '夹在腋下，随后以人类最快的速度逃离了那个是非之地。',
      ]);
      await era.printAndWait([
        '结果，虽然避开了异常，事后 ',
        urara.get_colored_name(),
        ' 却因过度运动的疲劳丢失了活力，可能……这也是霉运的一种吧？',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_mother: (() => {
    const title = '「那个人」的偶遇';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（特殊判定：不低于热忱且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '啊～是那个人。训练员',
        you.adult_sex_title,
        '（您），虽然只是偶然的邂逅，但还请做好准备哦？',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '不对，或许对那个人来说，这并非是偶然事件吧？',
      );
      era.drawLine();
      await era.printAndWait([
        '站在理事长办公室的门口，在 ',
        you.get_colored_name(),
        ' 观察着眼前黑衣马娘的同时，她也在平静的打量着路过的 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '是从来没见过的生面孔。是以前的毕业生？是来特雷森参观的学生家长？是理事长的熟人？还是……',
      );
      await era.printAndWait([
        '面对不知如何开口的 ',
        you.get_colored_name(),
        '，这位容貌端庄的成熟马娘放下了正要敲门的手，并转身露出了友善的微笑。',
      ]);
      await era.printAndWait(
        '成熟的马娘「很抱歉，是我失礼了。您是这里的训练员对吧？请问，您能带我去训练场看看吗？」',
      );

      era.printButton('「诶？啊，请问您是……？」', 1);
      await era.input();

      await era.printAndWait([
        '成熟的马娘「姑且算是学生的家长吧，我的',
        urara.sex_code - 1 ? '女儿' : '儿子',
        '也在这里上学，现在已经出道了。」',
      ]);
      await era.printAndWait([
        '虽然 ',
        you.get_colored_name(),
        ' 与她之前从未见过，但这位气质严肃的女士的笑容，却让 ',
        you.get_colored_name(),
        ' 产生了相识已久的亲切感。',
      ]);

      era.printButton('「……训练场的话是向那边走，跟我来吧……」', 1);
      await era.input();

      await era.printAndWait([
        '不明不白的相遇后是接下不明不白的请求，',
        you.get_colored_name(),
        ' 与这位突然出现的神秘女士一同走向了前往训练场的路。',
      ]);
      await era.printAndWait([
        '只是比起僵硬到只会简单应答的 ',
        you.get_colored_name(),
        '，一旁的她倒是对第一天认识的 ',
        you.get_colored_name(),
        ' 莫名地充满兴趣。',
      ]);
      // 特殊高好感度判定
      if (high_relation) {
        await era.printAndWait([
          '而在向 ',
          you.get_colored_name(),
          ' 咨询过许多与',
          urara.uma_sex_title,
          '与特雷森相关的问题后，她亲切的微笑中似乎又多了几分谢意。',
        ]);
        await era.printAndWait(
          '成熟的马娘「看来您也很辛苦啊，毕竟无时无刻都要为担当着是很难做到的。」',
        );
        await era.printAndWait([
          '成熟的马娘「其实我的',
          urara.sex_code - 1 ? '女儿' : '儿子',
          '也很幸运，虽然',
          urara.sex,
          '并不强大，但也找到了和您一样优秀的训练员。」',
        ]);
        await era.printAndWait([
          '在同行的终点与 ',
          you.get_colored_name(),
          ' 一同站上训练场的观望平台，仿佛熟知一切的她向奔跑的',
          urara.teen_sex_title,
          '们投去了欣慰的笑容。',
        ]);
      } else {
        await era.printAndWait([
          '而在仿佛是对坏学生的摸底考试般问了一大圈有的没的后，她将变得锐利的目光再次投向了 ',
          you.get_colored_name(),
          '。',
        ]);
        await era.printAndWait(
          '成熟的马娘「不过，您的确有与中央相符的专业水平，但似乎对担当的心灵缺乏养护啊……」',
        );
        await era.printAndWait([
          '成熟的马娘「只是就算这么想也已经太迟了，走上赛场的',
          urara.uma_sex_title,
          '一旦跑起来就不会轻易放弃。」',
        ]);
        await era.printAndWait([
          '在同行的终点与 ',
          you.get_colored_name(),
          ' 一同站上训练场的观望平台，仿佛熟知一切的她的脸上又多了几分忧愁。',
        ]);
      }
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '成熟的马娘「说起来，仰慕着您的马娘有多少……就算我突然这么问，您也只会莫名其妙吧。」',
        ]);
        await era.printAndWait(
          '成熟的马娘「但在将梦想寄于奔跑的时代中，爱上自己背后那位仿佛永远支持自己大人……」',
        );
        await era.printAndWait([
          '成熟的马娘「这不会是正确的，但青春正盛的',
          urara.couple_title,
          '又有几个能免俗呢？就连当时的我也不例外……」',
        ]);
      }
      era.printButton('「那个……很抱歉打断您，但是您到底……？」', 1);
      await era.input();

      await era.printAndWait(
        '成熟的马娘「只是一位普通的来看孩子的家长而已哦？」',
      );
      await era.printAndWait([
        '没有直接回答 ',
        you.get_colored_name(),
        ' 的问题，望着从训练场的另一头奔跑而来的樱色，神秘的女性对 ',
        you.get_colored_name(),
        ' 留下了最后一抹微笑。',
      ]);
      await era.printAndWait([
        '成熟的马娘「那是你的担当对吧？真是可爱又帅气的孩子啊，不去接接',
        urara.sex,
        '吗？」',
      ]);

      era.printButton('「啊，好……诶？」', 1);
      await era.input();

      await era.printAndWait(
        '仅是眨眼的瞬间，那名身着黑衣的神秘马娘便只剩下了十几米开外的遥远背影。',
      );
      await era.printAndWait([
        '而另一边，冲上观景台的 ',
        urara.get_colored_name(),
        ' 则兴奋地扑进了 ',
        you.get_colored_name(),
        ' 的怀中，将 ',
        you.get_colored_name(),
        ' 刚要想起什么的思绪再次搅成一团。',
      ]);
      await urara.say_and_wait([
        callname,
        '！今天乌拉拉的状态超级好哦！甚至模拟赛都跑赢了呢！怎么样？很厉害吧！',
      ]);
      await era.printAndWait([
        '但在抬起头看向 ',
        you.get_colored_name(),
        ' 还有些懵懵的正脸时，虽然依旧笑容满面，小',
        urara.uma_sex_title,
        '脸上的表情却逐渐掺入了疑惑。',
      ]);
      await urara.say_and_wait([
        '……咦？好奇怪啊，为什么我能在 ',
        callname,
        ' 身上，闻到妈妈的味道呢——',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '怎么样？很奇怪的一次偶遇对吧？不过这真的是偶遇吗？还是说，一切都是必然的？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '只是对您与乌拉拉，甚至是也对那个人和我来说，在进入特雷森时，骰子便早已掷下了。',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_vs: (() => {
    const title = '掰手腕对决';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} spe 特别周
     * @param {CharaTalk} sky 青云天空
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_1 春乌拉拉对特别周的称呼
     * @param {PrintedSpan} callname_20 青云天空对玩家的称呼
     */
    const f = async (urara, spe, sky, you, callname, call_1, callname_20) => {
      await era.printAndWait([
        '在午休时，',
        you.get_colored_name(),
        ' 被校园中庭传来的骚动声吸引，靠近一看，竟然是 ',
        urara.get_colored_name(),
        ' 与同学们的掰手腕比赛。',
      ]);
      await era.printAndWait([
        '而且显然而易见的，面对现在的这位强力对手，现在的 ',
        urara.get_colored_name(),
        ' 正处于劣势……',
      ]);
      await spe.say_and_wait('乌、乌拉拉！你差不多……可以认输了哦！');
      await urara.say_and_wait([call_1, ' 才是呢！你的手不是也在抖吗？哦——！']);
      await era.printAndWait([
        '虽然 ',
        urara.get_colored_name(),
        ' 还有回嘴的余力，但随着',
        urara.sex,
        '的手被逐渐压倒，一旁的裁判还是宣布了比赛的结果。',
      ]);
      await sky.say_and_wait(
        '好！结束！真厉害啊，小特又赢了呢，这已经是第几次了？',
      );
      await spe.say_and_wait(
        '大概是以前经常帮妈妈干农活的原因吧？而且能撑这么久乌拉拉也很厉害！',
      );
      await urara.say_and_wait([
        '但是结果我又输了！到底要怎么样才能赢呢……啊，',
        callname,
        '！比腕力要怎么样才能赢呢？',
      ]);
      await era.printAndWait([
        '嗯？被看见了？什么时候？望着对远处围观的 ',
        you.get_colored_name(),
        ' 招手的 ',
        urara.get_colored_name(),
        '，只是路过的 ',
        you.get_colored_name(),
        ' 也只得向',
        urara.uma_sex_title,
        '们靠过去。',
      ]);

      await era.printAndWait([
        urara.get_colored_name(),
        ' 单凭想要赢 ',
        spe.get_colored_name(),
        ' 还是太困难了，但既然',
        urara.sex,
        '主动问起来的话……',
      ]);
      era.printButton('「掰手腕需要的是技巧。」（智力+10）', 1);
      era.printButton('「努力加油就可以吧……？」（力量+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sky.say_and_wait([
          '啊～',
          callname_20,
          ' 这里说的是支点、施力点和作用点吗？所谓掰手腕的技巧啊～',
        ]);
        await urara.say_and_wait(
          '支点施力点作用点……？虽然不太清楚，但这应该是努力的咒语？」',
        );
        await urara.say_and_wait('好！我明白了！那么现在再比一次吧！小特！」');
        await era.printAndWait([
          '不对，不是这样理解的吧？虽然本来也没什么好说的，但 ',
          urara.get_colored_name(),
          '  ',
          you.get_colored_name(),
          ' 最好真的明白了……',
        ]);
        await spe.say_and_wait(
          '好！那么、那么我也来努力的咒语！『要是赢了，今晚就吃胡萝卜汉堡排』！',
        );
        await era.printAndWait(
          '不，等一下，这边又是什么啊？这还真是喜欢胡萝卜汉堡排啊……',
        );
        await sky.say_and_wait(
          '只要开心不就好了嘛～好的，两位选手，预备……开始！',
        );
        await era.printAndWait([
          '意料之中，',
          urara.get_colored_name(),
          ' 最后还是输了。不过',
          urara.sex,
          '看起来心情不错，而且似乎相当中意那个「咒语」，也算是有所收获吧？',
        ]);
      } else {
        await era.printAndWait([
          '先不说 ',
          urara.get_colored_name(),
          ' 知不知道掰手腕的技巧，在双方实力差距太大的情况，能尝试的也只有更用力了。',
        ]);
        await urara.say_and_wait(
          '哦哦，原来如此！也就是说跟比赛一样对吧？只要非常努力就一定会赢！',
        );
        await urara.say_and_wait(
          '好！那么小特，再比一次吧！这次我绝对会赢的哦！」',
        );
        await spe.say_and_wait(
          '既然乌拉拉这么说了，那我也要拿出比赛时的干劲来了！要来了哦，乌拉拉！',
        );
        await era.printAndWait([
          '但既然 ',
          spe.get_colored_name(),
          ' 也要拿出全力的话，那比赛结果大概又变得毫无悬念了……',
        ]);
        await sky.say_and_wait(
          '哎呀～但是没想到乌拉拉那时竟然还能反压回去呢～吓我一跳啊。',
        );
        await spe.say_and_wait(
          '我也紧张了一下！没想到乌拉拉这么厉害，下次再来比赛吧！',
        );
        await urara.say_and_wait([
          '嘿嘿！',
          callname,
          '，乌拉拉还是很厉害的没错吧？下次绝对不会输了——',
        ]);
        await era.printAndWait([
          '结果，虽然还是输掉了比赛，但彻底发挥全力的 ',
          urara.get_colored_name(),
          ' 看起来很满足。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_lost_found: (() => {
    const title = '重要的失物';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} callname_30 米浴对玩家的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     */
    const f = async (
      urara,
      rice,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await urara.say_and_wait([
        '嗯？',
        call_30,
        ' 的缎带到底跑到哪里去了呢？',
        callname,
        '，那边有什么吗？',
      ]);
      await era.printAndWait([
        '从校园的绿化树丛中探出头，',
        urara.get_colored_name(),
        ' 摘掉头上的叶子向 ',
        you.get_colored_name(),
        ' 问到。',
      ]);

      era.printButton('「这边也什么都没有，再往前看看吧。」', 1);
      await era.input();

      await era.printAndWait([
        '关上路边垃圾桶的顶盖，',
        you.get_colored_name(),
        ' 一边说着一边把 ',
        urara.get_colored_name(),
        ' 从树丛中抱了出来。',
      ]);
      await rice.say_and_wait(
        '没、没关系啦，只是一条缎带而已，米浴再买新的就好……',
      );
      await urara.say_and_wait(
        '但那是你很喜欢的缎带吧？既然很喜欢，就代表很重要！没关系，一定能找到的！',
      );
      await era.printAndWait([
        '不知道第几次打断想要打退堂鼓的 ',
        rice.get_colored_name(),
        '，',
        urara.get_colored_name(),
        ' 带着可靠的笑容对一旁的好友再次竖起了大拇指。',
      ]);
      await urara.say_and_wait([
        '没问题，我们一定能找到的！啊对了，',
        callname,
        '，我们现在分开找吧——',
      ]);
      await era.printAndWait([
        '但正当你们打算三人分头寻找时，随着脚边的水渍逐渐扩散，雨水突然成群结队地落了下来了。',
      ]);
      await rice.say_and_wait([
        '下雨了！？难、难道都是米浴害的……！对、对不起……！',
      ]);

      era.printButton(
        '「不，可不能一直这么说自己啊，今天天气预报本来就说过有雨来着。」',
        1,
      );
      await era.input();

      await rice.say_and_wait([
        '就算 ',
        callname_30,
        ' 这么说……',
        r_call_u,
        '，真的不用找了！抱歉给你们添麻烦了！',
      ]);

      await urara.say_and_wait([
        '没关系啦，找回重要的东西就要越早越好！对吧，',
        callname,
        '？',
      ]);
      era.printButton(
        '「没错，再坚持一下，我们有三个人呢。」（体力-100 根性+20）',
        1,
      );
      era.printButton(
        '「现在已经开始下雨了，总之先回去一趟吧。」（耐力+10）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '没错，',
          callname,
          ' 说的对！现在放弃还太早了！我们一起找吧！',
        ]);
        await era.printAndWait([
          '于是，在后来逐渐转大的雨势中，',
          you.get_colored_name(),
          ' 与两位小',
          urara.uma_sex_title,
          '终于在临近湿透时成功找回了 ',
          rice.get_colored_name(),
          ' 的缎带。',
        ]);
        await urara.say_and_wait(
          '嘿嘿～大家差点就变成落汤鸡了，不过能找到缎带真是太好了！',
        );
        await rice.say_and_wait([
          '对、对不起哦，又是弄丢缎带，又是让雨落下来的……米浴又麻烦大家了……',
        ]);
        await urara.say_and_wait([
          '诶？按照 ',
          call_30,
          ' 的话，也就是说……',
          call_30,
          ' 有办法让天空下雨吗？',
          call_30,
          ' 的能力好厉害啊！',
        ]);
        await rice.say_and_wait([
          '不不不、不是的，米浴不是这个意思哦 ',
          r_call_u,
          '……',
        ]);
        await era.printAndWait([
          '虽然两位好友似乎又陷入了另一段小难题，但 ',
          rice.get_colored_name(),
          ' 原本僵硬的表情也因为 ',
          urara.get_colored_name(),
          ' 而完全放松下来。',
        ]);
        await era.printAndWait([
          '而在一段时间后，在 ',
          you.get_colored_name(),
          ' 的帮助下弄干了衣服的 ',
          urara.get_colored_name(),
          ' 与 ',
          rice.get_colored_name(),
          ' 也再次露出了笑容——',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          '，乌拉拉没问题的，因为下雨也很好玩啊！先别说这个了，得快点把缎带找到才行！',
        ]);
        await rice.say_and_wait([
          '但是，被雨淋湿的话会感冒的！米浴不希望 ',
          r_call_u,
          ' 也感冒啊……',
        ]);
        await urara.say_and_wait(
          '嗯……那等雨停了后我们再来找吧，一定要快！说好了哦？',
        );
        await era.printAndWait([
          '在分开之后，雨一直下到了隔天才停。但当 ',
          you.get_colored_name(),
          ' 跟 ',
          rice.get_colored_name(),
          ' 赶到地点时，',
          urara.get_colored_name(),
          ' 却已经拿着缎带等在那边了。',
        ]);
        await urara.say_and_wait([
          call_30,
          '！',
          callname,
          '！这边！乌拉拉找到缎带了哦——！',
        ]);
        await rice.say_and_wait(['……', r_call_u, '……！']);
        await era.printAndWait([
          '看到 ',
          urara.get_colored_name(),
          ' 欢快跑来的身影，就连刚才还一脸担忧的 ',
          rice.get_colored_name(),
          ' 也露出了笑容。',
        ]);
        await era.printAndWait([
          '果然',
          urara.sex,
          '一大早跑出去就是为了去找缎带啊。心中的猜想得以印证，',
          you.get_colored_name(),
          ' 也向小',
          urara.uma_sex_title,
          '的宿管和室友发去了消息……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_race_clothe: (() => {
    const title = '关于决胜服';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '今天，',
        urara.get_colored_name(),
        ' 终于收到了前段时间因意外破损而被拿去修补的决胜服。',
      ]);
      await urara.say_and_wait(
        '嘿嘿～乌拉拉的决胜服终于回来了！我一直觉得能穿着决胜服参加比赛超帅呢──！',
      );
      await era.printAndWait([
        '抱着虽然朴素但从最初就陪伴着',
        urara.sex,
        '的第一件决胜服，',
        urara.get_colored_name(),
        ' 的心情明显变好了不少。',
      ]);
      await era.printAndWait([
        '话又说回来，决胜服的设计一般都是由',
        urara.uma_sex_title,
        '们亲自参与完成的，所以每件决胜服的诞生都是独一无二的。',
      ]);
      await era.printAndWait([
        '可以说，不管外人如何评价美与丑，这些各具特色的衣物都有资格被称为「承载',
        urara.teen_sex_title,
        '们梦想的盛装」。',
      ]);
      await era.printAndWait([
        '只是 ',
        urara.get_colored_name(),
        ' 为自己所构建出的「梦想最初的形状」，虽然很有',
        urara.sex,
        '的特点，但总觉得过于「随处可见」了……',
      ]);

      era.printButton(
        '「……说起来，我可以问一问，乌拉拉最初是怎么设计这套衣服的吗？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '而面对 ',
        you.get_colored_name(),
        ' 试探般小心的问题，',
        urara.get_colored_name(),
        ' 则回以了一个大方的笑容。',
      ]);
      await urara.say_and_wait(
        '嗯？其实也没什么哦？这套衣服的设计，我只是参考了小时候第一次赛跑时穿的体操服！',
      );
      await urara.say_and_wait(
        '虽然完全赢不了，但爸爸妈妈都会称赞我，所以穿上这套衣服，会让乌拉拉感觉能够变强！',
      );
      await urara.say_and_wait(
        '而且在变强之后，乌拉拉还希望能够透过穿上这件衣服的心情，让大家变得开心！',
      );
      await era.printAndWait([
        '也是啊，因为 ',
        urara.get_colored_name(),
        ' 的梦想一直都这么简单朴素，所以决胜服也会如此。而且，「在变强之后」啊……',
      ]);
      await era.printAndWait([
        '怎么会想不到呢，拥有决胜服不代表能在生涯中有机会将它穿上，',
        urara.get_colored_name(),
        ' 也一样明白这个道理。',
      ]);
      await era.printAndWait([
        '看来就算还不成熟，',
        urara.get_colored_name(),
        ' 也在一开始就做好了相应的心理准备——',
      ]);

      urara.say([
        '对了，',
        callname,
        '！难得它补好了……今天我可以穿着它训练吗？',
      ]);
      era.printButton('「如果衣服又弄坏了就不好了。」（速度+20）', 1);
      era.printButton('「如果乌拉拉开心的话也不是不行。」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          '——也是呢，要是再弄坏了就不好了，既然是决胜服，就该好好珍惜才行。',
        );
        await urara.say_and_wait([
          '乌拉拉会赢下去的！所以 ',
          callname,
          '，在我能够穿上它的时间外，可以帮乌拉拉保管好它吗？',
        ]);
        await era.printAndWait([
          '带着期待穿上决胜服的心情，',
          urara.get_colored_name(),
          ' 叠好了自己的「梦想」，并笑着将它交到了 ',
          you.get_colored_name(),
          ' 的手中。',
        ]);
      } else {
        await era.printAndWait([
          '面对 ',
          urara.get_colored_name(),
          ' 的满脸期待，',
          you.get_colored_name(),
          ' 最终是没能向小',
          urara.uma_sex_title,
          '那灿烂的笑容提出反对意见。',
        ]);
        await urara.say_and_wait([
          '真的吗？谢谢 ',
          callname,
          '！我一定会很努力训练，让自己在以后的比赛也能继续穿上的！',
        ]);
        await era.printAndWait([
          '但等 ',
          urara.get_colored_name(),
          ' 心满意足后，',
          urara.sex,
          '却说着「下次穿上前要好好珍惜！」，并主动将决胜服的保管权交由了 ',
          you.get_colored_name(),
          '。',
        ]);
      }
      await era.printAndWait([
        '没错，训练员正是帮助选择奔跑的「',
        urara.couple_title,
        '」把握梦想的职业，而 ',
        you.get_colored_name(),
        ' 也正是 ',
        urara.get_colored_name(),
        ' 所「信任」的训练员——',
      ]);
      await era.printAndWait([
        '一定要帮 ',
        urara.get_colored_name(),
        ' 跑到最后。感受着心中与小',
        urara.uma_sex_title,
        '相遇时相似的鼓动，',
        you.get_colored_name(),
        ' 对着手中的决胜服坚定了决心。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_interview: (() => {
    const title = '与好友一起接受采访';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
     * @param {PrintedSpan} callname_30 米浴对玩家的称呼
     * @param {PrintedSpan} r_call_u 米浴对春乌拉拉的称呼
     */
    const f = async (
      urara,
      rice,
      etsuko,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await era.printAndWait([
        '今天，',
        urara.get_colored_name(),
        ' 与 ',
        rice.get_colored_name(),
        ' 一同接受来自网络媒体、预计会登上名为《好朋友赛',
        urara.uma_sex_title,
        '》版块的特别采访。',
      ]);
      await era.printAndWait([
        '不过面对与经常于校园出没的 ',
        etsuko.get_colored_name(),
        ' 完全不同的陌生人的采访，两名小',
        urara.uma_sex_title,
        '似乎没能找到状态。',
      ]);
      await era.printAndWait(
        '记者A「那么，请问你们两人相处时有发生什么印象深刻的事吗？」',
      );
      if (
        era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30') >= 50 &&
        era.get('love:52') >= 52
      ) {
        await urara.say_and_wait([
          '印象深刻？是说和 ',
          callname,
          ' 在一起的时候吗？',
        ]);
        await rice.say_and_wait([
          '嗯，和 ',
          callname_30,
          ' 在一起的时候确实印象很深刻，虽然独享也不错……',
        ]);
        await rice.say_and_wait([
          '但在米浴和 ',
          r_call_u,
          ' 一起扑过来的时候，',
          callname_30,
          ' 意外会露怯呢，真的很可爱。',
        ]);
        await urara.say_and_wait(
          '对吧！不过乌拉拉觉得偷偷拿走点心并不好哦？要和大家说一声才对吧？',
        );
        await rice.say_and_wait([
          '因为 ',
          r_call_u,
          ' 还是小孩子嘛，但米浴是高中部，已经是大人了哦……？',
        ]);
        await urara.say_and_wait('诶？是这样吗～？');
        await era.printAndWait(
          '先不说记者问的是不是这个方向，两位好朋友之间的氛围是不是有些不对劲……？',
        );
        await era.printAndWait([
          '转头看了眼同样被好友间的氛围冻得浑身颤抖的记者小姐，',
          you.get_colored_name(),
          ' 立刻明白这段算是播不得了——',
        ]);
      } else {
        await urara.say_and_wait(
          '印象深刻？到底怎样才算印象深刻呢？乌拉拉感觉每天都可以是哦？',
        );
        await rice.say_and_wait(['印、印象深刻……！其、其实米浴也……那个……！']);
        await rice.say_and_wait([
          '虽然印象很深刻，但米浴好像每天都在给人添麻烦呢，真是对不起……',
        ]);
        await urara.say_and_wait([
          '诶？',
          call_30,
          ' 怎么突然又消沉起来了？真的没关系啦——',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 无奈地看向领头的记者小姐，而她也悄悄向 ',
          you.get_colored_name(),
          ' 回以了一个见得多了但依旧苦涩的眼神。',
        ]);
        await era.printAndWait([
          '看得出来，',
          urara.get_colored_name(),
          ' ',
          urara.couple_title,
          '现在的状况，似乎跟采访者们原本预料的方向完全南辕北辙了。',
        ]);
      }
      await era.printAndWait([
        '于是在采访暂停的间隙，',
        you.get_colored_name(),
        ' 作为负责接头的监护人也自然开始和采访组交流起了下一步的打算。',
      ]);
      await era.printAndWait([
        '记者A「很抱歉，但请给我们一点时间，为了更好的展现',
        urara.couple_title,
        '，现在可能得重新拟定采访的方向……」',
      ]);

      era.printButton('「辛苦了，我也试着想想办法吧。」', 1);
      await era.input();

      await era.printAndWait([
        '在将不断道谢的记者暂时送走后，',
        you.get_colored_name(),
        ' 又将目光再次放回了在不远处说着什么的米浴和 ',
        urara.get_colored_name(),
        ' 身上。',
      ]);
      await rice.say_and_wait([
        '真的很抱歉，刚才的米浴有点太激动了……我们明明有那么多回忆的……',
      ]);
      await rice.say_and_wait([
        '米浴能跟 ',
        r_call_u,
        ' 一起接受采访，真的是非常开心的事……本来只要说出来就好的……',
      ]);
      await urara.say_and_wait([
        '乌拉拉也是哦！因为能跟 ',
        call_30,
        ' 一起登上特别报导，简直就跟做梦一样嘛！',
      ]);
      await urara.say_and_wait([
        '所以没关系，',
        call_30,
        ' 只要表现出自己就可以了，乌拉拉就在 ',
        call_30,
        ' 身边哦！',
      ]);
      await rice.say_and_wait('可、可是……！');
      await era.printAndWait(
        '看一眼就能明白，一边是日常考虑过多而焦虑过度，另一边则是一如既往的兴致太旺。',
      );

      era.print([
        '要在下个环节中能够帮',
        urara.couple_title,
        '缓解情绪，有什么好办法吗……',
      ]);
      era.printButton(`帮${urara.couple_title}拿些点心。（力量+20）`, 1);
      era.printButton(`带${urara.couple_title}一起去玩。（耐力+20）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '诶？也就是说可以吃点心吗？谢谢 ',
          callname,
          '——',
          call_30,
          '！这个，张嘴！',
        ]);
        await rice.say_and_wait([
          '咦？',
          rice.get_colored_name(),
          ' 也可以吃吗……呜！',
          r_call_u,
          ' 太热情了！',
          rice.get_colored_name(),
          ' 可以自己吃的……！',
        ]);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的推动下，',
          urara.get_colored_name(),
          ' 与 ',
          rice.get_colored_name(),
          ' 开始热闹的分享起点心，一旁的工作人员也立刻架好了摄影机。',
        ]);
        await rice.say_and_wait(
          '……嗯，因为点心里需要加入特别的魔法，所以吃起来才会感到幸福啊……',
        );
        await urara.say_and_wait(
          '没错！前阵子不是一起做过饼干吗？结果加了大家说的魔法配方后，真的变得更好吃了！',
        );
        await era.printAndWait(
          '记者A「这段回忆非常有意思呢！我也很感兴趣，可以再稍微多说一点吗？」',
        );
        await urara.say_and_wait([
          '记者姐姐也很感兴趣吗？那么稍等一下……',
          call_30,
          '！乌拉拉可以去借一下家政教室吗？',
        ]);
        await rice.say_and_wait([
          '诶？现在吗？那 ',
          rice.get_colored_name(),
          ' 去找找上次剩下的材料！',
        ]);
        await era.printAndWait([
          '在调整后的重新采访中，特别采访节目终于完整录出了两位小',
          urara.uma_sex_title,
          '受访时活跃的模样。',
        ]);
        await era.printAndWait(
          '虽然不知道节目的后半段突然变成了点心制作频道，但只要大家都觉得开心那就没问题吧。',
        );
      } else {
        await urara.say_and_wait([
          '诶？可以去玩吗？采访那边没关系……啊！乌拉拉明白了……',
          call_30,
          '！',
        ]);
        await rice.say_and_wait([
          '咦、咦！？现在是要做什么……哇啊！等、等一下！',
          r_call_u,
          '，这样不可以～！',
        ]);
        await era.printAndWait([
          '但是，是哪里出了差错吗？明明只是普通的小',
          urara.child_sex_title,
          '玩闹，为什么听起来这么糟糕……',
        ]);
        await era.printAndWait(
          '记者A「不过这个画面非常好啊，稍等一下，马上就好！」',
        );
        await era.printAndWait(
          '立刻注意到两人追逐打闹的模样，一旁的记者迅速地拿起相机开始连续拍摄——',
        );
        await rice.say_and_wait([
          '呜～',
          r_call_u,
          '！再这样 ',
          rice.get_colored_name(),
          ' 也要生气了——好！',
          rice.get_colored_name(),
          ' 跟上 ',
          r_call_u,
          ' 了！',
        ]);
        await urara.say_and_wait([
          '等下等下！',
          call_30,
          ' 别这样啦！乌拉拉知道错了呀！？',
        ]);
        await era.printAndWait('……果然有什么地方被理解错了吧！');
        await era.printAndWait(
          '几天后，特别报导刊出了两人玩耍时的照片。据说这张照片被称为神照，甚至一时成为了热门话题。',
        );
        await era.printAndWait([
          '虽然不知为何总有毁灭气氛的',
          urara.sex_code === 1 ? '正太' : '萝莉',
          '控成分包含其中，但就结果来说，也算完美收官吧……？',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_challenge: (() => {
    const title = '「传奇」的挑战';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} spe 特别周
     * @param {CharaTalk} grass 草上飞
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_1 春乌拉拉对特别周的称呼
     * @param {PrintedSpan} call_11 春乌拉拉对草上飞的称呼
     * @param {PrintedSpan} callname_11 草上飞对玩家的称呼
     * @param {PrintedSpan} g_call_s 草上飞对特别周的称呼
     * @param {PrintedSpan} g_call_u 草上飞对春乌拉拉的称呼
     */
    const f = async (
      urara,
      spe,
      grass,
      you,
      callname,
      call_1,
      call_11,
      callname_11,
      g_call_s,
      g_call_u,
    ) => {
      await era.printAndWait([
        '在某天下午，正当 ',
        you.get_colored_name(),
        ' 前往训练员室的时候，突然看到了在走廊上在和谁议论着什么的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        call_11,
        '！趁着这个机会我们一起打倒 ',
        call_1,
        ' 哦！',
      ]);
      await grass.say_and_wait(
        '虽然心意我明白……但是，那个……该说这场战役的等级完全不同吗……',
      );
      era.printButton(`「怎么了吗？是要和小特跑比赛吗？」`, 1);
      await era.input();

      await urara.say_and_wait(
        '是这样的！商店街这次要举办很厉害的比赛哦！名字就叫——',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 展开手中的海报，其上正以淳朴的排版，呈现着 ',
        spe.get_colored_name(),
        ' 挑战特大份拉面时的「壮举」。',
      ]);
      await era.printAndWait([
        '瞅着夸张的海报，再与微笑中又有几分犹豫的 ',
        grass.get_colored_name(),
        ' 四目相对，',
        you.get_colored_name(),
        ' 大概猜到了接下来的展开。',
      ]);
      await urara.say_and_wait(
        '『向传奇☆特别周发起挑战！吃光超特大碗拉面吧！』怎么样？很帅吧！',
      );
      await urara.say_and_wait(
        '我还特地去问了拉面店那边，他们还刚好在征求两名参赛的选手哦！',
      );
      await urara.say_and_wait([
        '所以啦，',
        call_11,
        '～一起去挑战嘛！我们一定可以赢过 ',
        call_1,
        ' 的哦～',
      ]);
      await era.printAndWait([
        '但即使面对 ',
        urara.get_colored_name(),
        ' 的撒娇攻势，铜墙铁壁的大和抚子看上去也完全不为所动。',
      ]);
      await grass.say_and_wait([
        '但是，',
        g_call_u,
        '……你吃得完吗？我记得你每次午餐都吃得比我还少……',
      ]);
      if (era.get('cflag:11:招募状态') === recruit_flags.yes) {
        await you.say_and_wait(
          [
            '不过，',
            grass.get_colored_name(),
            ' 你饭量其实算是很大的那类吧？虽然一次拿的不多，但好像会偷偷跑好几趟……',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '还有 ',
            grass.get_colored_name(),
            ' 你其实很想去吃对吧？虽然',
            grass.teen_sex_title,
            '的矜持和体重控制限制了行动，但你在悄悄咽口水哦？',
          ],
          true,
        );
        await era.printAndWait([
          '只是……以上这般话语也仅是想想罢了。看着 ',
          grass.get_colored_name(),
          ' 尚且和善的笑脸，',
          you.get_colored_name(),
          ' 把可能致死的情报吞了回去。',
        ]);
      }
      await urara.say_and_wait(
        '没问题的！比赛前只要把前几顿都空出来就没问题了！这就是大胃王比赛的诀窍哦！',
      );
      await grass.say_and_wait([
        '唔……真的没问题吗？我实在不觉得光靠这样就能赢过 ',
        g_call_s,
        ' 哦……？',
      ]);
      await urara.say_and_wait([
        '也对啊，毕竟 ',
        call_1,
        ' 是传奇人物嘛，但是……现在放弃的这个机会，是不是太可惜了？',
      ]);
      await grass.say_and_wait([g_call_u, '……']);
      era.print([
        '从刚才就一直接收着 ',
        grass.get_colored_name(),
        ' 的眼神暗示，现在的 ',
        you.get_colored_name(),
        ' 终于找准时机插进了话题。',
      ]);

      era.printButton(
        `「还是在比赛中赢过${urara.sex}吧。」（体力+100 技能点数+5）`,
        1,
      );
      era.printButton(
        '「要不……我们挑战看看？」（体力+300 技能点数+10 体重增加）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await grass.say_and_wait([
          callname_11,
          ' 说的没错，与其比食量大，在赛场上一定会更有趣的。',
        ]);
        await urara.say_and_wait(
          '既然都这么说的话……嗯！乌拉拉明白了！我会在以后得比赛中成为更厉害的传奇的！',
        );
        await era.printAndWait([
          '于是在 ',
          you.get_colored_name(),
          ' 与 ',
          grass.get_colored_name(),
          ' 的帮助下，今天 ',
          urara.get_colored_name(),
          ' 成功躲过了体重增加的危机。',
        ]);
        await era.printAndWait(
          '不过「在赛场上成为传奇」吗？这个听上去真不错啊……',
        );
      } else {
        await era.printAndWait([
          '虽然大概率赢不了，但是如果能够让 ',
          urara.get_colored_name(),
          ' 在其中学到什么的话或许也未尝不可，所以……',
        ]);
        await urara.say_and_wait([
          '嗯！既然 ',
          callname,
          ' 这么说了，那乌拉拉就一定要去了——',
        ]);
        await grass.say_and_wait(
          '呵呵，这份坚强意志真是了不起，那么两位还请多多加油哦？',
        );

        era.printButton(
          '「嗯？等下，是不是有哪里不对，『两位』是怎么回事？」',
          1,
        );
        await era.input();

        await grass.say_and_wait(
          '因为你刚刚说了『我们一定要挑战看看』嘛，所以我会非常努力为你们加油的。',
        );
        await era.printAndWait([
          '不愧是强大的',
          urara.uma_sex_title,
          '，竟然能面不改色的瞬间脱离包围圈……啊不对！',
          urara.sex,
          '好像是把其他的谁换进去了！',
        ]);
        await urara.say_and_wait([
          '诶？',
          callname,
          ' 竟然要参加',
          urara.uma_sex_title,
          '级的比赛吗？真厉害啊！那么一起加油吧，',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '面对两眼放光的小',
          urara.uma_sex_title,
          '，以及用某种「温柔的眼神」注视着自己的 ',
          grass.get_colored_name(),
          '……',
        ]);
        await era.printAndWait([
          '冷汗直流的 ',
          you.get_colored_name(),
          ' 还是选项放下了妄图狡辩的手，并尽量让自己的表情看起来没那么「不堪重负」。',
        ]);
        await era.printAndWait([
          '而在几天后……怎么说呢，传奇人物认真起来实在惊人，而 ',
          you.get_colored_name(),
          ' 也觉得自己暂时不想再见到任何拉面了……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_farthest: (() => {
    const title = '绕个远路吧？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '外出回程的路上，可能因为是玩得太开心了，',
        urara.get_colored_name(),
        ' 看起来有点累，于是你们便决定就近休息。',
      ]);
      await era.printAndWait([
        '坐在附近公园的长椅上，先是花了点时间计划之后要玩什么，随后 ',
        you.get_colored_name(),
        ' 便去附近的自动贩卖机弄了两罐饮料。',
      ]);
      await era.printAndWait([
        '可当 ',
        you.get_colored_name(),
        ' 带着热饮料回到公园时，却发刚才还略有精神的 ',
        urara.get_colored_name(),
        '，现在已经靠在长椅上睡着了。',
      ]);
      await era.printAndWait([
        '抱住 ',
        you.get_colored_name(),
        ' 伸来的手臂，在长椅上缩成一团的小',
        urara.uma_sex_title,
        '一边在梦中轻声细语，一边逐渐侵占着 ',
        you.get_colored_name(),
        ' 的怀抱。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～',
        callname,
        '……一起尝尝吧……这是乌拉拉最喜欢的点心哦……',
      ]);

      era.print([
        urara.get_colored_name(),
        ' 是在作一场美妙的好梦吗？',
        you.get_colored_name(),
        ' 有点犹豫是否该直接叫醒',
        urara.sex,
        '……',
      ]);
      era.printButton('「那……我把乌拉拉的那份也吃掉了哦？」（技能点数+30）', 1);
      era.printButton(
        `不去打扰乌拉拉，直接将睡着的${urara.sex}背回去。（耐力+10）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '悄悄附在 ',
          urara.get_colored_name(),
          ' 耳边，',
          you.get_colored_name(),
          ' 揉着小',
          urara.uma_sex_title,
          '耳边的绒毛，小声摇晃着',
          urara.sex,
          '的梦乡。',
        ]);
        await urara.say_and_wait(['诶？不可以！不可以独占哦 ', callname, '！']);
        await era.printAndWait([
          '随后因为被 ',
          you.get_colored_name(),
          ' 占有了点心而从梦中惊醒的 ',
          urara.get_colored_name(),
          ' 连尾巴都炸了起来，甚至直接从长椅上飞了下去。',
        ]);
        await era.printAndWait([
          '但在小',
          urara.uma_sex_title,
          '从朦胧中恢复清醒后，一片茫然的樱瞳中却又只有也被吓了一跳的训练员四目相对。',
        ]);
        await urara.say_and_wait('咦？点、点心……啊，难道是……？');

        era.printButton('「没错，乌拉拉就算在梦中的气势也很足哦？」', 1);
        await era.input();

        await urara.say_and_wait([
          '也对哦，',
          callname,
          ' 不会抢乌拉拉的点心呢……不过反正是场好梦，所以没关系啦！',
        ]);
        await urara.say_and_wait([
          '不过，',
          callname,
          '，下次再有机会一起的话，可以和乌拉拉一起吃点心吗？',
        ]);

        era.printButton('「当然没问题啊。」', 1);
        await era.input();

        await era.printAndWait([
          '将手中余温尚存的饮料递给 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 与说着「约好了哦！」的 ',
          urara.get_colored_name(),
          ' 立下了又一个约定。',
        ]);
        await era.printAndWait([
          '之后在将喝完的饮料罐丢进合适的垃圾桶后，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 便迎着晚霞继续踏上了归途。',
        ]);
      } else {
        await era.printAndWait([
          '慢慢把 ',
          urara.get_colored_name(),
          ' 从自己的怀中挪到背上，',
          you.get_colored_name(),
          ' 尽量以不惊动 ',
          urara.get_colored_name(),
          ' 的动作，小心翼翼地站了起来。',
        ]);
        await urara.say_and_wait([
          '嗯嗯……？',
          callname,
          '……乌拉拉刚才怎么了？',
        ]);

        era.printButton('「你醒了？要早点回去休息了，没问题吧？」', 1);
        await era.input();

        await era.printAndWait([
          urara.get_colored_name(),
          ' 似乎被行走时的颠簸意外惊醒了，但现在的 ',
          you.get_colored_name(),
          ' 当然也不打算把',
          urara.sex,
          '就地放下来。',
        ]);
        await urara.say_and_wait('诶……？原来乌拉拉睡着了……呼……');
        await era.printAndWait([
          '于是在背着小',
          urara.uma_sex_title,
          '继续走出了一段距离后，',
          urara.sex,
          '立刻又回到了刚刚的美梦中。',
        ]);
        await urara.say_and_wait([
          '嘿嘿……很好吃吧……这里还有很多哦……',
          callname,
          ' 是大人哦……不要再害羞了……',
        ]);
        await era.printAndWait(
          '虽然说不好奇是不可能的，这到底是在做什么内容的梦啊……',
        );
        await era.printAndWait([
          '为了不要吵醒',
          urara.sex,
          '，',
          you.get_colored_name(),
          ' 慢慢地走回了宿舍。结果直到抵达宿舍将',
          urara.sex,
          '交给值班同学时，',
          urara.get_colored_name(),
          ' 都没有醒来。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_park: (() => {
    const title = '天台上的「游乐园」';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        '，能陪乌拉拉去一个地方吗？没关系的，一会儿就好！',
      ]);
      await era.printAndWait([
        '在从商店街特训之后的回程路上，身旁的 ',
        urara.get_colored_name(),
        ' 看着不远处的建筑拉住了 ',
        you.get_colored_name(),
        ' 的袖口。',
      ]);
      await era.printAndWait([
        '而后，',
        you.get_colored_name(),
        ' 便跟随 ',
        urara.get_colored_name(),
        ' 来到了附近那栋新开的综合商场前，乘上外侧的观景电梯，一路上到楼顶。',
      ]);
      await era.printAndWait(
        '铁门随着清脆的电铃音缓缓打开，在罩着玻璃顶棚的天台上，一座小小的游乐园逐渐出现在两人眼前。',
      );
      await era.printAndWait(
        '或许是还在通勤日的缘故，这座小游乐园现在空无一人，只有电子售票机和设施中的彩灯寂寞的闪烁着。',
      );
      await era.printAndWait([
        '不过，',
        urara.get_colored_name(),
        ' 这是突然想来游乐园玩了吗……显然不可能吧。',
      ]);

      era.printButton('「是想起什么了？」', 1);
      await era.input();

      await era.printAndWait([
        '一起走进游园场地，',
        urara.get_colored_name(),
        ' 凝视着场地中央那架迷你款的旋转茶杯，小声地开口了。',
      ]);
      await urara.say_and_wait(
        '在周末的时候，商店街的孩子们都会来这里玩，因为离得很近，票价也比大游乐园便宜。',
      );
      await urara.say_and_wait(
        '而且，虽然想要复兴商店街的叔叔阿姨们可能不喜欢，但这里不论做什么都很方便呢。',
      );
      await urara.say_and_wait([
        '所以乌拉拉在想，商店街的大家需要的大概不是大家说的复兴，是一个改变的契机……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 与可爱的茶杯们安静地聆听着',
        urara.teen_sex_title,
        '的思考，交替闪耀的彩灯又将',
        urara.teen_sex_title,
        '的樱瞳染上了更多的色彩。',
      ]);
      await urara.say_and_wait(
        '环境是可以改变的，可能会有很多问题，但如果努力去做的话，也一定没问题。',
      );
      await era.printAndWait([
        '说的没错，或许这一切都并不冲突的，只要人还在，只要 ',
        urara.get_colored_name(),
        ' 还是 ',
        urara.get_colored_name(),
        '，一切就都会是原来的样子。',
      ]);
      await era.printAndWait([
        '也真是出乎意料，虽然看似稚嫩，但 ',
        urara.get_colored_name(),
        ' 的思考也越来越多了，甚至比',
        urara.sex,
        '的很多同学都要深入……',
      ]);

      urara.say(['对了 ', callname, '，来都来了，要和乌拉拉一起来吗？']);
      era.printButton('「只要乌拉拉不觉得累就没问题哦？」（速度+10）', 1);
      era.printButton('「我就不一起了，乌拉拉自己去吧。」（力量+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '嗯！所以今天就稍微晚回去一会儿也没关系的，对吧，',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '听到 ',
          you.get_colored_name(),
          ' 的回答，小',
          urara.uma_sex_title,
          '对 ',
          you.get_colored_name(),
          ' 露出了会心的笑容，随后与 ',
          you.get_colored_name(),
          ' 一同踏入了这座小而精巧的游乐设施中。',
        ]);
        await era.printAndWait([
          '茶杯随着音乐开始温柔的旋转，夕阳透过玻璃顶棚，照在小',
          urara.uma_sex_title,
          '遥望着远方的脸上。',
        ]);
        await era.printAndWait([
          '现在这位小思想家又在想着什么事情？又或许，',
          urara.sex,
          '是和脸上的微笑一样有点小开心吧？',
        ]);
      } else {
        await urara.say_and_wait([
          '为什么呢？因为 ',
          callname,
          ' 已经是大人了吗？',
        ]);
        await era.printAndWait([
          '听见 ',
          you.get_colored_name(),
          ' 无奈的回答，',
          urara.teen_sex_title,
          '虽然有些失落，但还是笑着与身边的大人开起了玩笑。',
        ]);

        era.printButton('「因为已经是大人了啊。」', 1);
        await era.input();

        await urara.say_and_wait([
          '那么，一起回去吧，',
          callname,
          '？乌拉拉也要早点成为大人呢！',
        ]);
        await era.printAndWait([
          '这样真的好吗？看着 ',
          urara.get_colored_name(),
          ' 带着笑容的双眼，',
          you.get_colored_name(),
          ' 最终没能将这个问题带出口。',
        ]);
        await era.printAndWait([
          '背着夕阳乘上电梯，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 再次踏上了归途。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_forget: (() => {
    const title = '忘记吃了？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '在结束一天的外出特训后，在 ',
        you.get_colored_name(),
        ' 将 ',
        urara.get_colored_name(),
        ' 送到校园门口时──',
      ]);
      await urara.say_and_wait([
        '啊！',
        callname,
        '！我好像忘记很重要的事情了！',
      ]);

      era.printButton(
        '「怎么了？！突然这么大声？有什么重要的东西落在训练的地方了？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '不是的！是我回来的时候忘记买了！新口味的鲷鱼烧和蜂蜜特饮！',
      );
      await urara.say_and_wait([
        '虽然 ',
        callname,
        ' 好像也忘记提醒了，但现在应该还没关门，只吃一样的话……',
      ]);

      era.printButton('「诶？啊——嗯，哦……」', 1);
      await era.input();

      await era.printAndWait([
        '本来应该已经习惯了，但在听见 ',
        urara.get_colored_name(),
        ' 大惊小怪的困难后，',
        you.get_colored_name(),
        ' 还是难免发出了泄气的回应。',
      ]);
      await urara.say_and_wait([
        callname,
        '！这个反应是怎么回事嘛！乌拉拉也是会生气的哦！',
      ]);

      urara.say([
        '不过，现在应该还来得及！',
        callname,
        '，',
        you.get_colored_name(),
        ' 的建议是……',
      ]);
      era.printButton('「蜂蜜特饮近一些，现在跑过去还来得及！」（根性+10）', 1);
      era.printButton('「鲷鱼烧虽然远一些，但肯定不会收摊！」（耐力+10）', 2);
      const ret = await era.input();
      await urara.say_and_wait([
        '好！既然 ',
        callname,
        ' 这样说了，那乌拉拉也去去就回了！稍等一下哦——！',
      ]);
      await era.printAndWait([
        '将 ',
        you.get_colored_name(),
        ' 留在学校门口，小',
        urara.uma_sex_title,
        '以前所未见的速度冲向了商店街的方向。',
      ]);

      era.printButton('「慢点！路上注意安全啊！」', 1);
      await era.input();

      await era.printAndWait([
        '远望着那个比自己的呐喊声更早到达视野尽头的小身影，',
        you.get_colored_name(),
        ' 无奈地摇了摇头。',
      ]);
      await era.printAndWait([
        '如果 ',
        urara.get_colored_name(),
        ' 能把对零食的专注力，分出一些放在平时的训练和模拟赛上就好了。',
      ]);
      if (ret === 1) {
        await era.printAndWait([
          '但一段时间后，',
          you.get_colored_name(),
          ' 看着手中由 ',
          urara.get_colored_name(),
          ' 笑着推来的蜂蜜特饮，还是欣慰地选择了仔细品尝一番……',
        ]);
      } else {
        await era.printAndWait([
          '但一段时间后，',
          you.get_colored_name(),
          ' 看着手中由 ',
          urara.get_colored_name(),
          ' 笑着推来的鲷鱼烧，还是欣慰地选择了仔细品尝一番……',
        ]);
      }
      await era.printAndWait([
        '……只是对 ',
        you.get_colored_name(),
        ' 的舌头来说，就算不止尝过一次，这些东西依旧甜过头了。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '离开的春天';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {boolean} has_begun 乌拉拉是否已经出道
     * @param {boolean} join_arim_kin_c 乌拉拉是否参与了经典年有马纪念
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      has_begun,
      join_arim_kin_c,
    ) => {
      await era.printAndWait(
        '这场结束得过于唐突的旅途意味着什么，现在或许已经没有任何追究的意义了。',
      );
      await era.printAndWait([
        '因为 ',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 都清楚，两人分开的结局或许本不应出现在这里。',
      ]);
      await era.printAndWait([
        '攥紧行李箱的拉杆，',
        urara.get_colored_name(),
        ' 发出了本不应从',
        urara.sex,
        '的身边出现的轻声叹息。',
      ]);
      await era.printAndWait([
        '尽管大家并不怪 ',
        urara.get_colored_name(),
        '，甚至还在说训练员也辛苦了，但是 ',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 都知道故事本不应如此。',
      ]);
      await era.printAndWait([
        '就算转学手续已经办理结束，这依旧是对大家保密的不辞而别，这场送别也只有 ',
        you.get_colored_name(),
        ' 一人到场。',
      ]);
      await era.printAndWait([
        '只是即使如此，身边的小',
        urara.uma_sex_title,
        '依旧善解人意的反过来安抚着精神不振的 ',
        you.get_colored_name(),
        '。',
      ]);
      if (has_begun) {
        await urara.say_and_wait([
          '没关系的，就算没办法再奔跑乌拉拉也会有办法的！倒是 ',
          callname,
          ' 没关系吗？',
        ]);
        await era.printAndWait([
          '虽然说着安慰别人的话，但 ',
          urara.get_colored_name(),
          ' 的脸上也难掩失落。',
        ]);
        await era.printAndWait([
          '自从在那场比赛跌倒之后，虽然身体一切正常，但 ',
          urara.get_colored_name(),
          ' 却过早地失去了',
          urara.uma_sex_title,
          '的能力。',
        ]);
        await era.printAndWait([
          '于是，无法接受此事的人们将矛头指向了没能在最后保护到',
          urara.sex,
          '的 ',
          you.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '但针对个人的情绪，终究会随着时间前进消散。所以面对 ',
          urara.get_colored_name(),
          ' 的担忧，',
          you.get_colored_name(),
          ' 只是沉默地摇摇头。',
        ]);
        await urara.say_and_wait([
          '……如果 ',
          callname,
          ' 真是这样想的，那 ',
          urara.get_colored_name(),
          ' 也不需要太担心呢，大家也是，明明我本来也没法参加有马啊……',
        ]);
        if (join_arim_kin_c) {
          await urara.say_and_wait('但是如果能再去一次，就好了啊……');
        } else {
          await urara.say_and_wait('不过，如果能去一次，哪怕一次也好呢……');
        }
      } else {
        await urara.say_and_wait([
          '没关系的 ',
          callname,
          '，不用担心，只是回到了地方而已，我还会继续奔跑的！',
        ]);
        await era.printAndWait([
          '但 ',
          you.get_colored_name(),
          ' 知道，就算安慰别人的话语再怎开朗，脸上的失落也无法隐藏，',
          urara.get_colored_name(),
          ' 也是一样。',
        ]);
        await era.printAndWait([
          '即使如此，为了掩饰伤感，也为了不让 ',
          you.get_colored_name(),
          ' 过于伤心，小',
          urara.uma_sex_title,
          '还是强迫自己断断续续地说着。',
        ]);
        await urara.say_and_wait([
          '很多人说 ',
          callname,
          ' 只是想骗乌拉拉，但是我知道 ',
          callname,
          ' 没有错，是乌拉拉跑得太慢而已。',
        ]);
        await urara.say_and_wait(
          '只是就这样回去，妈妈会对说些什么呢？虽然她从来没有对乌拉拉生过气……',
        );
        await urara.say_and_wait(
          '如果在离开之前，乌拉拉也能拿到一次第一名就好了……',
        );
      }
      era.println();
      await era.printAndWait([
        '望见远处逐渐进站的电车，',
        urara.get_colored_name(),
        ' 强忍着泪水，故作坚强的松开了抓住 ',
        you.get_colored_name(),
        ' 衣角的小手。',
      ]);
      await era.printAndWait([
        '之后，小',
        urara.uma_sex_title,
        '忍耐到最后的泪水还是无法抑制地提前洒了出来。',
      ]);
      era.println();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '一枚带着泪水咸味的轻吻落在了 ',
          you.get_colored_name(),
          ' 的嘴唇上，在 ',
          you.get_colored_name(),
          ' 身前踮着脚的 ',
          urara.get_colored_name(),
          ' 已经哭成了泪人。',
        ]);
        await urara.say_and_wait([
          '对不起，',
          callname,
          '，我们应该还能再见的，但是……乌拉拉还是想要这样做……',
        ]);
        await urara.say_and_wait('好难受啊……但是乌拉拉明明该好好说再见才对……');
      } else {
        await urara.say_and_wait([
          '……乌拉拉果然还是想和 ',
          callname,
          '……看到更前方的……',
        ]);
        await urara.say_and_wait([
          '但是这样不行……明明都要离开了，我不应该说这些的，对不起哦，',
          callname,
          '……',
        ]);
        await urara.say_and_wait([
          '所以，谢谢你来送我，再见了哦，',
          callname,
          '……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '带着不舍中断自己的告别，',
        urara.get_colored_name(),
        ' 压住哭声，不敢回头地跑向了不会多做等待的列车。',
      ]);
      await era.printAndWait([
        '聚集的人群随着列车离开而散去，陌生的人流抛下感情的累赘，将 ',
        you.get_colored_name(),
        ' 则被人流抛下，被独自撇在了空无一人的站台上。',
      ]);
      await era.printAndWait([
        '喧闹散尽，周围也安静得仿佛整个世界都随着这趟车离 ',
        you.get_colored_name(),
        ' 而去。',
      ]);
      await era.printAndWait([
        '虽然说的是「再见」，但即便没有依据，现在小',
        urara.uma_sex_title,
        '的离去，恐怕也等同于「再也不见」。',
      ]);
      await era.printAndWait([
        '自己回去后要怎么面对商店街的大家？要怎么去面对 ',
        urara.get_colored_name(),
        ' 的好友们？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 在最初时是那么信任 ',
        you.get_colored_name(),
        '，甚至对愿意帮助自己的「可靠大人」怀有小小的',
        urara.teen_sex_title,
        '情愫。',
      ]);
      await era.printAndWait([
        '但是如今看着',
        urara.sex,
        '失去笑容的背影消失在车厢中，',
        you.get_colored_name(),
        ' 却一句挽留的话都说不出来。',
      ]);
      await era.printAndWait([
        '或许现在的 ',
        you.get_colored_name(),
        ' 会让 ',
        urara.get_colored_name(),
        ' 觉得很失望；或许现在的 ',
        urara.get_colored_name(),
        ' 已经不喜欢 ',
        you.get_colored_name(),
        ' 了；或许',
        urara.sex,
        '……',
      ]);
      await era.printAndWait([
        '但就算「或许」堆积如山，也没有一个能够留住小',
        urara.uma_sex_title,
        '的分毫，更不可能逆转',
        urara.sex,
        '离开的事实。',
      ]);
      await era.printAndWait([
        '不愿去看远去的列车，仿佛又逃回了原点的 ',
        you.get_colored_name(),
        ' 艰难的闭上了眼睛……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        '但是很抱歉呢，讨人厌的',
        you.adult_sex_title,
        '（您），我不会让故事就这么结束的。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '我不打算生您的气，但也不接受乌拉拉现在的结局。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '还有机会下次再见的话，请您给我打起十二分的精神。',
      );
    };
    f.title = title;
    return f;
  })(),
};
