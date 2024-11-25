const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { attr_enum, fumble_result } = require('#/data/train-const');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {TrainFailParams} extra_flag
 */
module.exports = async (urara, me, callname, hook, extra_flag) => {
  extra_flag.args = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  switch (extra_flag.train) {
    case attr_enum.speed:
      await urara.say_and_wait('诶？为什么这里会……？动不了了……');
      break;
    case attr_enum.endurance:
      await urara.say_and_wait('……哈、哈……头、头好晕啊……');
      break;
    case attr_enum.strength:
      await urara.say_and_wait([
        '快、快看 ',
        sys_get_callname(52, 0),
        '，天上好像有小星星在闪呢……',
      ]);
      break;
    case attr_enum.toughness:
      await urara.say_and_wait([sys_get_callname(52, 0), '……拉我一把～～']);
      break;
    case attr_enum.intelligence:
      await urara.say_and_wait('好困啊……咕呃……');
  }
  era.println();
  if (extra_flag.train !== attr_enum.intelligence) {
    if (extra_flag.fumble) {
      await print_event_name('严禁逞强！', urara);
      await era.printAndWait([
        '因为 ',
        urara.get_colored_name(),
        ' 在训练中不小心重重地摔倒了，所以 ',
        me.get_colored_name(),
        ' 立即将',
        urara.sex,
        '抱起来送到了保健室。',
      ]);
      await era.printAndWait([
        '而在一番紧张的检查后，听到结果并无大碍的 ',
        me.get_colored_name(),
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
        me.get_colored_name(),
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
        hook.arg = 0;
      } else {
        await urara.say_and_wait(['诶？', callname, ' 为、为什么突然生气了？']);

        era.printButton('「……医生说要是伤势恶化，会比打针还痛哦？」', 1);
        await era.input();

        await urara.say_and_wait(
          '什么嘛，乌拉拉已经不是小孩子了，就算真有那么疼也没关系啦！',
        );

        if (Math.random() < extra_flag.args.ratio.fail_again) {
          await urara.say_and_wait([
            '而且 ',
            callname,
            ' 你看！乌拉拉就算这样也完全没问题——呜啊！',
          ]);
          await urara.say_and_wait(['……好、好痛……好痛啊……', callname, '……']);
          await era.printAndWait([
            '说什么来着？拉起开始抹眼泪的小',
            urara.get_uma_sex_title(),
            '，',
            me.get_colored_name(),
            ' 默默地将',
            urara.sex,
            '重新拎回了不远处的保健室。',
          ]);
          await era.printAndWait([
            '不出意外的，',
            urara.get_colored_name(),
            ' 因为逞强而乱动导致了伤势恶化，恢复时间也变得更长了。',
          ]);
          hook.arg = -1;
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
          hook.arg = 1;
        }
      }
    } else {
      await print_event_name('保重身体！', urara);

      await era.printAndWait([
        '发现了 ',
        urara.get_colored_name(),
        ' 在训练途中身体有些异常，',
        me.get_colored_name(),
        ' 将',
        urara.sex,
        '带到了保健室做检查。',
      ]);
      await era.printAndWait(
        '虽然保健室内暂时没人，但好在只是身体检查的话训练员自己也应付得过来。',
      );
      await era.printAndWait([
        '只是，身体一向很结实的小',
        urara.get_uma_sex_title(),
        '似乎对 ',
        me.get_colored_name(),
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
        me.get_colored_name(),
        ' 试探地按了下腿部疑似肿胀的地方后，突然吃痛的小',
        urara.get_uma_sex_title(),
        '眼泪汪汪的停下动作。',
      ]);
      await urara.say_and_wait(
        '啊呜……为、为什么要那么生气啊？我跟你说哦，我真的完全不痛啦……',
      );
      await era.printAndWait([
        '委屈巴巴地瞅着突然变得严厉的 ',
        me.get_colored_name(),
        '，',
        urara.get_colored_name(),
        ' 还蓄着泪水的眼睛里满是疑惑。',
      ]);
      await urara.say_and_wait('你看！我就算这样做也一点事都没有哦……好疼！');
      await era.printAndWait([
        '再次抓住因 ',
        urara.get_colored_name(),
        ' 的乱踢而撞到的脚趾，',
        me.get_colored_name(),
        ' 伸出手指弹了下小',
        urara.get_uma_sex_title(),
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
          me.get_colored_name(),
          ' 的警告后，小',
          urara.get_uma_sex_title(),
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
          me.get_colored_name(),
          ' 立刻顺着小',
          urara.get_uma_sex_title(),
          '的话抬起',
          urara.sex,
          '的脚仔细查看，结果发现刚刚被撞到的地方也有点肿……',
        ]);
        await era.printAndWait([
          '连带着 ',
          urara.get_colored_name(),
          ' 的新伤势一起上药并包好后，',
          me.get_colored_name(),
          ' 便安排',
          urara.sex,
          '在这天好好休养了。',
        ]);
        hook.arg = 0;
      } else {
        await era.printAndWait([
          '但就算 ',
          me.get_colored_name(),
          ' 这样说，小',
          urara.get_uma_sex_title(),
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
          me.get_colored_name(),
          ' 叹了口气，在处理完 ',
          urara.get_colored_name(),
          ' 的伤处后又谨慎地重新开始了训练。',
        ]);
        hook.arg = (Math.random() > extra_flag.args.ratio.fail_again) * 2 - 1;
      }
    }
  }
};
