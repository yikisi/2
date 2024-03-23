const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const { fumble_result, attr_enum } = require('#/data/train-const');

const chara_colors = require('#/data/chara-colors').chara_colors[52];

/**
 * @type {Record<string,function(HookArg,Record<string,*>,EventObject):Promise<*>>}
 */
const handlers = {};

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
handlers[event_hooks.race_end] = async (_, extra_flag) => {
  const callname = sys_get_callname(52, 0),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  if (extra_flag.rank === 1) {
    await print_event_name('比赛胜利', urara);
    let talk_arr = [
      `嗯？诶……太棒了！赢了！${callname}！看到了吗？我赢了呦！`,
      '哇啊……！我拿到一着了！我真的拿到一着了！',
      '我成功了哦！拿到一着的话，就是说大家的期待都传达到了！',
      `${callname}！看到了吗？我刚才有嗖——的一声冲过终点哦！`,
      `果然就像平常的时候一样就好了！这次我也赢了哦${callname}！`,
      '做到了……我做到了哦！我真的做到了哦！',
    ];
    await urara.say_and_wait(get_random_entry(talk_arr));
    await era.printAndWait([
      '带着胜利的喜悦，',
      urara.get_colored_name(),
      ' 兴奋地冲过来抱住了 ',
      me.get_colored_name(),
      '。',
    ]);
    era.printButton('「回去后就一起庆祝吧。」', 1);
    await era.input();
    await urara.say_and_wait(
      '嗯！之后把大家都叫来吧！有好多好东西能够分享呢！',
    );
    await era.printAndWait([
      '也想要把心情分享给 ',
      me.get_colored_name(),
      ' 般，',
      urara.get_colored_name(),
      ' 扬起笑脸，拉住了 ',
      me.get_colored_name(),
      ' 的手。',
    ]);
    talk_arr = [
      `Live要开始了哦！${callname} 很期待吗？我也很期待哦！`,
      '一会一定要看着我哦！我也会努力跳舞的！',
      '大家看上去都准备好了！我也兴奋起来了哦！',
    ];
    if (era.get('love:52') >= 75) {
      talk_arr.push(
        `我也会不输给的大家的！绝对、绝对能好好迷住 ${callname} 的！`,
      );
    }
    if (era.get('love:52') === 100) {
      talk_arr.push(`${callname}！待会在舞台上也要一直看着乌拉拉哦！`);
    }
    await urara.say_and_wait(get_random_entry(talk_arr));
  } else {
    await print_event_name('比赛失败', urara);
    const talk_arr = [
      '大家都很厉害呢！但下次我一定不会输的！',
      '虽然没能拿到一着，但果然很开心呢！下次再来跑吧！',
      `嘿嘿～这次没能拿到一着，我会继续努力的，${callname} 也别伤心哦！`,
    ];
    switch (extra_flag.rank) {
      case 2:
        talk_arr.push(`看到了吗 ${callname}！我竟然是第二名哦──！`);
        break;
      case 3:
        talk_arr.push('我是第三名！很厉害吧！');
        break;
      default:
        talk_arr.push('奔跑真开心啊，但果然稍微有些不甘心呢……');
    }
    await urara.say_and_wait(get_random_entry(talk_arr));
    await era.printAndWait([
      '将脸埋进 ',
      me.get_colored_name(),
      ' 的胸前，',
      urara.get_colored_name(),
      ' 的声音有些颤抖。',
    ]);

    era.printButton('「我明白的，一起回去吧。」', 1);

    await urara.say_and_wait('嗯！要早点打起精神来呢！一起回去吧！');
    await era.printAndWait([
      '接过 ',
      me.get_colored_name(),
      ' 的纸巾，',
      urara.get_colored_name(),
      ' 笑着抹掉了眼角的泪珠。',
    ]);
  }
};

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
handlers[event_hooks.race_start] = async (_, extra_flag) => {
  const callname = sys_get_callname(52, 0),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  if (extra_flag.race < 0) {
    await print_event_name('武者震颤', urara);
    await urara.say_and_wait('哦——！训练员！今天我感觉充满了力量哦！');
    await era.printAndWait([
      '站在 ',
      me.get_colored_name(),
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
  } else {
    await print_event_name('赛前鼓励', urara);
    const talk_arr = [
      '好！要参赛了──！',
      '大家都很厉害的样子！那乌拉拉也不能输！',
      `${callname}！这次也请好好看着我的奔跑吧！`,
      '只要和平常一样去跑就可以了吧？我明白了！',
      `别担心哦 ${callname}，只要拼命去跑一定可以做到的！`,
    ];
    switch (era.get('cflag:52:干劲')) {
      case -1:
        talk_arr.push('虽然能参加很多比赛很开心，但现在身体好重……');
        break;
      case -2:
        talk_arr.push('又要比赛了……我、我会努力的……');
    }
    await get_chara_talk(52).say_and_wait(get_random_entry(talk_arr));
  }
};

handlers[event_hooks.train] = () => {
  const talk_arr = [
    '交给我吧！要上了哦！',
    `哦！要上了 ${sys_get_callname(52, 0)}！`,
    '要开始努力了呢！',
    '这次感觉能行！我要开始了！',
    '好！乌拉拉！要加油了！',
  ];
  return get_chara_talk(52).say_and_wait(get_random_entry(talk_arr));
};

/**
 * @param {HookArg} hook
 * @param {{args:*,fumble:boolean,train:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  extra_flag.args = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  const urara = get_chara_talk(52);
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
        ' ，天上好像有小星星在闪呢……',
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
    const me = get_chara_talk(0),
      callname = sys_get_callname(52, 0);
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
          await urara.say_and_wait(['……好、好痛……好痛啊…… ', callname, ' ……']);
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

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const urara = get_chara_talk(52);
  era.print([urara.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();
  if (
    !era.get('status:52:摸鱼') &&
    Math.random() < 0.2 * extra_flag.stamina_ratio &&
    extra_flag.train !== attr_enum.intelligence
  ) {
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      opera = get_chara_talk(15),
      call_opera_by_urara = sys_get_colored_callname(52, 15);
    await era.waitAnyKey();
    await print_event_name('额外自主训练！', urara);
    await era.printAndWait([
      '在今天的训练结束后，',
      urara.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 看到了另外一位正站在训练场中的身影。',
    ]);
    await urara.say_and_wait([
      '啊！是 ',
      call_opera_by_urara,
      '！',
      call_opera_by_urara,
      ' 也要去休息了吗？',
    ]);
    await era.printAndWait([
      '小',
      urara.get_uma_sex_title(),
      '在对方面前站定，而行事风格戏剧化的霸王也转向了 ',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 的方向。',
    ]);
    await opera.say_and_wait([
      '哦！这不是乌拉拉和 ',
      sys_get_callname(15, 0),
      ' 吗？我正要去练跑！和黄昏之星一起！',
    ]);
    await urara.say_and_wait([
      '和黄昏之星一起练跑？很有 ',
      call_opera_by_urara,
      ' 的风格呢，而且听起来好厉害！',
    ]);
    if (era.get('cflag:15:殿堂')) {
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
        call_opera_by_urara,
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
    if ((await era.input()) === 1) {
      hook.arg = true;
      await era.printAndWait([
        '在听到 ',
        me.get_colored_name(),
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
        call_opera_by_urara,
        ' 这么说了，那乌拉拉也会尽全力赶上去的！',
      ]);
      await opera.say_and_wait([
        '哈──哈哈哈！看来今天的练跑会相当有趣哦！你说是吧，',
        sys_get_callname(15, 0),
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
      hook.arg = false;
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
        me.get_colored_name(),
        ' 向食堂跑去……',
      ]);
    }
  }
};

/**
 * 春乌拉拉的育成事件
 *
 * @author 99
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
