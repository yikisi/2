const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.vs = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:当前互动角色') > 0) {
      await era.printAndWait(
        '据说最近有些学生会在学校中庭展开掰手腕对决……下次独自出行的时候注意一下吧',
      );
      add_event(event_hooks.school_atrium, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.school_atrium);
    await print_event_name('掰手腕对决', urara);
    const sky = get_chara_talk(20),
      spe = get_chara_talk(1);
    await era.printAndWait([
      '在午休时，',
      me.get_colored_name(),
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
    await urara.say_and_wait([
      sys_get_colored_callname(52, 1),
      ' 才是呢！你的手不是也在抖吗？哦——！',
    ]);
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
      me.get_colored_name(),
      ' 招手的 ',
      urara.get_colored_name(),
      '，只是路过的 ',
      me.get_colored_name(),
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
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      await sky.say_and_wait([
        '啊～',
        sys_get_colored_callname(20, 0),
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
        me.get_colored_name(),
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
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
    flags.wait_flag = sys_like_chara(1, 52, 100) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(20, 52, 100) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(52, 1, 50) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(52, 20, 50) || flags.wait_flag;
  };

  handlers.lost_found = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(event_hooks.school_atrium, event_object);
      return true;
    }
    await print_event_name('重要的失物', urara);
    const rice = get_chara_talk(30);
    await urara.say_and_wait([
      '嗯？',
      sys_get_colored_callname(52, 30),
      ' 的缎带到底跑到哪里去了呢？',
      callname,
      '，那边有什么吗？',
    ]);
    await era.printAndWait([
      '从校园的绿化树丛中探出头，',
      urara.get_colored_name(),
      ' 摘掉头上的叶子向 ',
      me.get_colored_name(),
      ' 问到。',
    ]);

    era.printButton('「这边也什么都没有，再往前看看吧。」', 1);
    await era.input();

    await era.printAndWait([
      '关上路边垃圾桶的顶盖，',
      me.get_colored_name(),
      ' 一边说着一边把 ',
      urara.get_colored_name(),
      ' 从树丛中抱了出来。',
    ]);
    await rice.say_and_wait([
      '没、没关系啦，只是一条缎带而已，',
      sys_get_callname(30, 30),
      ' 再买新的就好……',
    ]);
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
      '但正当 ',
      me.get_couple_title(),
      ' 打算三人分头寻找时，随着脚边的水渍逐渐扩散，雨水突然成群结队地落了下来了。',
    ]);
    await rice.say_and_wait([
      '下雨了！？难、难道都是 ',
      sys_get_callname(30, 30),
      ' 害的……！对、对不起……！',
    ]);

    era.printButton(
      '「不，可不能一直这么说自己啊，今天天气预报本来就说过有雨来着。」',
      1,
    );
    await era.input();

    await rice.say_and_wait([
      '就算 ',
      sys_get_colored_callname(30, 0),
      ' 这么说……',
      sys_get_colored_callname(30, 52),
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
    era.printButton('「现在已经开始下雨了，总之先回去一趟吧。」（耐力+10）', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        '没错，',
        callname,
        ' 说的对！现在放弃还太早了！我们一起找吧！',
      ]);
      await era.printAndWait([
        '于是，在后来逐渐转大的雨势中，',
        me.get_colored_name(),
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
        '对、对不起哦，又是弄丢缎带，又是让雨落下来的……',
        sys_get_callname(30, 30),
        ' 又麻烦大家了……',
      ]);
      await urara.say_and_wait([
        '诶？按照 ',
        sys_get_colored_callname(52, 30),
        ' 的话，也就是说……',
        sys_get_colored_callname(52, 30),
        ' 有办法让天空下雨吗？',
        sys_get_colored_callname(52, 30),
        ' 的能力好厉害啊！',
      ]);
      await rice.say_and_wait([
        '不不不、不是的，',
        sys_get_callname(30, 30),
        ' 不是这个意思哦 ',
        sys_get_colored_callname(30, 52),
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
        me.get_colored_name(),
        ' 的帮助下弄干了衣服的 ',
        urara.get_colored_name(),
        ' 与 ',
        rice.get_colored_name(),
        ' 也再次露出了笑容——',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        52,
        [0, 0, 0, 20, 0],
        0,
        [-100],
        true,
      );
    } else {
      await urara.say_and_wait([
        callname,
        '，乌拉拉没问题的，因为下雨也很好玩啊！先别说这个了，得快点把缎带找到才行！',
      ]);
      await rice.say_and_wait([
        '但是，被雨淋湿的话会感冒的！',
        sys_get_callname(30, 30),
        ' 不希望 ',
        sys_get_colored_callname(30, 52),
        ' 也感冒啊……',
      ]);
      await urara.say_and_wait(
        '嗯……那等雨停了后我们再来找吧，一定要快！说好了哦？',
      );
      await era.printAndWait([
        '在分开之后，雨一直下到了隔天才停。但当 ',
        me.get_colored_name(),
        ' 跟 ',
        rice.get_colored_name(),
        ' 赶到地点时，',
        urara.get_colored_name(),
        ' 却已经拿着缎带等在那边了。',
      ]);
      await urara.say_and_wait([
        sys_get_colored_callname(52, 30),
        '！',
        callname,
        '！这边！乌拉拉找到缎带了哦——！',
      ]);
      await rice.say_and_wait(['……', sys_get_colored_callname(30, 52), '……！']);
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
        me.get_colored_name(),
        ' 也向小',
        urara.uma_sex_title,
        '的宿管和室友发去了消息……',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        52,
        [0, 10, 0, 0, 0],
        0,
        [-100],
        true,
      );
    }
    flags.wait_flag = sys_like_chara(30, 52, 200) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(52, 30, 100) || flags.wait_flag;
  };

  handlers.interview = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(event_hooks.school_atrium, event_object);
      return true;
    }
    await print_event_name('与好友一起接受采访', urara);
    const rice = get_chara_talk(30);
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
      get_chara_talk(303).get_colored_name(),
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
        sys_get_colored_callname(30, 0),
        ' 在一起的时候确实印象很深刻，虽然独享也不错……',
      ]);
      await rice.say_and_wait([
        '但在 ',
        sys_get_callname(30, 30),
        ' 和 ',
        sys_get_colored_callname(30, 52),
        ' 一起扑过来的时候，',
        sys_get_colored_callname(30, 0),
        ' 意外会露怯呢，真的很可爱。',
      ]);
      await urara.say_and_wait(
        '对吧！不过乌拉拉觉得偷偷拿走点心并不好哦？要和大家说一声才对吧？',
      );
      await rice.say_and_wait([
        '因为 ',
        sys_get_colored_callname(30, 52),
        ' 还是小孩子嘛，但 ',
        sys_get_callname(30, 30),
        ' 是高中部，已经是大人了哦……？',
      ]);
      await urara.say_and_wait('诶？是这样吗～？');
      await era.printAndWait(
        '先不说记者问的是不是这个方向，两位好朋友之间的氛围是不是有些不对劲……？',
      );
      await era.printAndWait([
        '转头看了眼同样被好友间的氛围冻得浑身颤抖的记者小姐，',
        me.get_colored_name(),
        ' 立刻明白这段算是播不得了——',
      ]);
    } else {
      await urara.say_and_wait(
        '印象深刻？到底怎样才算印象深刻呢？乌拉拉感觉每天都可以是哦？',
      );
      await rice.say_and_wait([
        '印、印象深刻……！其、其实 ',
        sys_get_callname(30, 30),
        ' 也……那个……！',
      ]);
      await rice.say_and_wait([
        '虽然印象很深刻，但 ',
        sys_get_callname(30, 30),
        ' 好像每天都在给人添麻烦呢，真是对不起……',
      ]);
      await urara.say_and_wait([
        '诶？',
        sys_get_colored_callname(52, 30),
        ' 怎么突然又消沉起来了？真的没关系啦——',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 无奈地看向领头的记者小姐，而她也悄悄向 ',
        me.get_colored_name(),
        ' 回以了一个见得多了但依旧苦涩的眼神。',
      ]);
      await era.printAndWait([
        '看得出来，',
        urara.get_colored_name(),

        urara.sex,
        '们现在的状况，似乎跟采访者们原本预料的方向完全南辕北辙了。',
      ]);
    }
    await era.printAndWait([
      '于是在采访暂停的间隙，',
      me.get_colored_name(),
      ' 作为负责接头的监护人也自然开始和采访组交流起了下一步的打算。',
    ]);
    await era.printAndWait([
      '记者A「很抱歉，但请给我们一点时间，为了更好的展现',
      urara.sex,
      '们，现在可能得重新拟定采访的方向……」',
    ]);

    era.printButton('「辛苦了，我也试着想想办法吧。」', 1);
    await era.input();

    await era.printAndWait([
      '在将不断道谢的记者暂时送走后，',
      me.get_colored_name(),
      ' 又将目光再次放回了在不远处说着什么的米浴和 ',
      urara.get_colored_name(),
      ' 身上。',
    ]);
    await rice.say_and_wait([
      '真的很抱歉，刚才的 ',
      sys_get_callname(30, 30),
      ' 有点太激动了……我们明明有那么多回忆的……',
    ]);
    await rice.say_and_wait([
      sys_get_callname(30, 30),
      ' 能跟 ',
      sys_get_colored_callname(30, 52),
      ' 一起接受采访，真的是非常开心的事……本来只要说出来就好的……',
    ]);
    await urara.say_and_wait([
      '乌拉拉也是哦！因为能跟 ',
      sys_get_colored_callname(52, 30),
      ' 一起登上特别报导，简直就跟做梦一样嘛！',
    ]);
    await urara.say_and_wait([
      '所以没关系，',
      sys_get_colored_callname(52, 30),
      ' 只要表现出自己就可以了，乌拉拉就在 ',
      sys_get_colored_callname(52, 30),
      ' 身边哦！',
    ]);
    await rice.say_and_wait('可、可是……！');
    await era.printAndWait(
      '看一眼就能明白，一边是日常考虑过多而焦虑过度，另一边则是一如既往的兴致太旺。',
    );

    era.print([
      '要在下个环节中能够帮',
      urara.sex,
      '们缓解情绪，有什么好办法吗……',
    ]);
    era.printButton(`帮${urara.sex}们拿些点心。（力量+20）`, 1);
    era.printButton(`带${urara.sex}们一起去玩。（耐力+20）`, 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      attr_change[attr_enum.strength] = 20;
      await urara.say_and_wait([
        '诶？也就是说可以吃点心吗？谢谢 ',
        callname,
        '——',
        sys_get_colored_callname(52, 30),
        '！这个，张嘴！',
      ]);
      await rice.say_and_wait([
        '咦？',
        rice.get_colored_name(),
        ' 也可以吃吗……呜！',
        sys_get_colored_callname(30, 52),
        ' 太热情了！',
        rice.get_colored_name(),
        ' 可以自己吃的……！',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
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
        sys_get_colored_callname(52, 30),
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
      attr_change[attr_enum.endurance] = 20;
      await urara.say_and_wait([
        '诶？可以去玩吗？采访那边没关系……啊！乌拉拉明白了……',
        sys_get_colored_callname(52, 30),
        '！',
      ]);
      await rice.say_and_wait([
        '咦、咦！？现在是要做什么……哇啊！等、等一下！',
        sys_get_colored_callname(30, 52),
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
        sys_get_colored_callname(30, 52),
        '！再这样 ',
        rice.get_colored_name(),
        ' 也要生气了——好！',
        rice.get_colored_name(),
        ' 跟上 ',
        sys_get_colored_callname(30, 52),
        ' 了！',
      ]);
      await urara.say_and_wait([
        '等下等下！',
        sys_get_colored_callname(52, 30),
        ' 别这样啦！乌拉拉知道错了呀！？',
      ]);
      await era.printAndWait('……果然有什么地方被理解错了吧！');
      await era.printAndWait(
        '几天后，特别报导刊出了两人玩耍时的照片。据说这张照片被称为神照，甚至一时成为了热门话题。',
      );
      await era.printAndWait([
        '虽然不知为何总有毁灭气氛的',
        urara.sex_code - 1 ? '萝莉' : '正太',
        '控成分包含其中，但就结果来说，也算完美收官吧……？',
      ]);
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      attr_change,
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(52, 30, 100) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(30, 52, 100) || flags.wait_flag;
  };
};
