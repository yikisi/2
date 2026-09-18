/**
 * @file 周日宁静 - 育成
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  race_end_win: (() => {
    const title = '竞赛获胜！';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     */
    const f = async (ss, you) => {
      await ss.say_and_wait('唔，我赢了哦，看着赛场上我的表现感觉怎么样？');
      if (Math.random() < 0.5) {
        await you.say_and_wait('轻轻松松，我们回去准备下一场比赛吧');
      } else {
        await you.say_and_wait(
          '感觉并没有什么难度，不过接下来的训练还请不要掉以轻心',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜！';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     */
    const f = async (ss, you) => {
      await ss.say_and_wait(
        '说实话有些遗憾呢，是哪里出了问题呢？等会一起回去复盘吧。',
      );
      if (Math.random() < 0.5) {
        await you.say_and_wait('虽然没有达到预期，但是已经做的非常好了');
      } else {
        await you.say_and_wait('不想输的话下次就要做到更好才行');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '竞赛失败！';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait([
        callname,
        '，我们该转换思路了哦，不然的话要是继续输下去的话，可就麻烦了呢。',
      ]);
      if (Math.random() < 0.5) {
        await you.say_and_wait(
          '你说得对，或许我们都应该转换一下思路，下次会更好的',
        );
      } else {
        await you.say_and_wait(
          '虽然表现不尽如人意，但是在这里给自己施加压力可不是什么好办法',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_beginning: (() => {
    const title = '周日宁静登场';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(['呦，心情很不错啊，', callname, '。']);
      await ss.say_and_wait(
        '那么，开始训练怎么样？毕竟你的目标也是一个又一个第一对吧？',
      );
      await era.printAndWait([
        '美丽的黑发',
        ss.uma_sex_title,
        '对 ',
        you.get_colored_name(),
        ' 伸出了手，自信的面容就好像是绽放的花朵一般，',
      ]);
      await era.printAndWait([
        '健康而丰满的肉体让 ',
        you.get_colored_name(),
        ' 不得不感慨本格化的',
        ss.uma_sex_title,
        '是如此的美好，',
      ]);
      await era.printAndWait([
        '上午温暖的阳光透过玻璃窗打在',
        ss.sex,
        '与 ',
        you.get_colored_name(),
        ' 的身上，这一切都是如此的自然但是又温馨。',
      ]);
      await ss.say_and_wait(
        '作为互相选择的搭档，我有必要让你了解我的全部情况，所以，我们去训练场怎么样？',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 完全掌握了对话的主导权，',
        you.get_colored_name(),
        ' 没有任何反对',
        ss.sex,
        '提议的想法，跟着',
        ss.sex,
        '一起去了训练场。',
      ]);
      await era.printAndWait([
        '这一天，',
        you.get_colored_name(),
        ' 替',
        ss.sex,
        '完成了一次完整的摸底排查，根据 ',
        you.get_colored_name(),
        ' 的经验，开始进行训练计划的制定。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = '初步磨合';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('是这样啊，我明白了。');
      await ss.say_and_wait(
        '我相信我的眼光，也相信你的才华，所以我希望我们能一起往前进步，',
      );
      await ss.say_and_wait(
        '但是我必须把丑话说在前头，我的目标只有胜利，如果我无法完成目标的话，',
      );
      await ss.say_and_wait(
        '不介意换一个训练员，所以我希望我们双方不会出现拖后腿的情况发生，',
      );
      await ss.say_and_wait(
        '当然如果你发现我跟不上你的步伐的话，把我踢掉也无所谓。',
      );
      await era.printAndWait([
        ss.sex,
        '似乎真的就是这样想的，毫不在意 ',
        you.get_colored_name(),
        ' 的想法说出了这样赤裸裸的话语，',
      ]);
      await era.printAndWait([
        '但是 ',
        you.get_colored_name(),
        ' 注意到当',
        ss.sex,
        '提到 ',
        you.get_colored_name(),
        ' 也可以踢掉',
        ss.sex,
        '的时候，',
        ss.get_colored_name(),
        ' 的尾巴摇晃的似乎有些快。',
      ]);
      await ss.say_and_wait(
        '开始是速度的训练还是耐力的训练呢？热身结束之后我需要一个切实答案哦。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 站在阳光之下开始活动起了身子，在阳光的照射下',
        ss.sex,
        '的脑门上很快泛起了细细的汗珠，脸上也出现了一丝红霞。',
      ]);
      era.printButton(
        '「对于你目前的情况来说，我要先增强你的力量与耐力，所以我会对于这一块特别进行训练。」',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        callname,
        ' 现在的自信我很喜欢哦，那我就一切都听从你的安排了。',
      ]);
      await era.printAndWait([
        '在号令枪的声响之中，',
        ss.get_colored_name(),
        ' 迈出了自己坚实的步伐，跑鞋在草地上留下了一排浅浅的脚印，',
        ss.get_colored_name(),
        ' 看起来不慌不忙的完成着热身的两千米跑。',
      ]);
      await era.printAndWait([
        '任谁都能看得出来，面前的少女身上有着寻常',
        ss.uma_sex_title,
        '难以匹敌的天赋，而',
        ss.sex,
        '靠着自己已经初步挖掘出了一部分天赋，就好像是矿脉表面裸露的黄金一般，只有真正开采 ',
        you.get_colored_name(),
        ' 才能知道底下的黄金到底有多么恐怖的价值。',
      ]);
      await era.printAndWait(
        '尽管如此，在中央这种高手如云的地方，只有天赋是决然不够的，若是没有足够的训练和战术，所谓的天赋永远也不能转变为赢下比赛的能力。',
      );
      await era.printAndWait([
        '所以这才是 ',
        you.get_colored_name(),
        ' 和',
        ss.sex,
        '要做的事情，将',
        ss.sex,
        '打造成',
        ss.sex,
        '需要的，能够赢下比赛的赛',
        ss.uma_sex_title,
        '。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  perfect_beginning: (() => {
    const title = '完美的开始';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 毫无悬念的拿下了出道战的胜利，',
      ]);
      await era.printAndWait([
        '在',
        ss.sex,
        '冲过终点的那一刻，',
        you.get_colored_name(),
        ' 终于放下心来，但是随后胜利的',
        ss.sex,
        '径直来到了作为训练员的 ',
        you.get_colored_name(),
        ' 面前。',
      ]);
      await ss.say_and_wait(
        '我说过的，会将胜利带你的与你一起分享的，现在我们已经迈出了第一步了哦。',
      );
      await era.printAndWait([
        ss.sex,
        '握紧了 ',
        you.get_colored_name(),
        ' 的手，那张完美的脸颊上露出了柔软的笑意。',
      ]);
      await ss.say_and_wait([callname, '，一起向着我们的目标，迈出步伐吧……']);
      await era.printAndWait([
        '观众的欢呼与赞扬声成为你们之间的背影音，',
        ss.sex,
        '赛前略显不安的神色在此刻荡然无存，留下的只有开心。',
      ]);
      await era.printAndWait([
        '这时 ',
        you.get_colored_name(),
        ' 才注意到',
        ss.sex,
        '的身上已经满是汗液，甚至连运动服都被汗液打湿勾勒出了些许完美身材的轮廓。',
      ]);
      era.printButton(
        '「真是非常非常厉害啊……但是就算是这样，我还是要先让你把脑袋和身子擦一擦才行，不然的话对身体不太好」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '毛巾被盖到了',
        ss.sex,
        '的脑袋上，',
        ss.get_colored_name(),
        ' 并没有拒绝由 ',
        you.get_colored_name(),
        ' 来为',
        ss.sex,
        '擦干净脑门上的汗珠。',
      ]);
      await ss.say_and_wait(
        '这场比赛到这里就结束了，如果您有复盘的需要的话，可以找时间联系我，如果没有的话，我觉得我们可以投入关于下一场比赛的针对训练和日常的训练当中了。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 脸上的笑容并没有停留很久，',
        ss.sex,
        '认真的看向 ',
        you.get_colored_name(),
        '，眼神之中满是认真与好胜心。',
      ]);
      await era.printAndWait([
        '就这样，',
        ss.get_colored_name(),
        ' 完成了自己的出道赛。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  good_beginning: (() => {
    const title = '好的开始';
    /** @param {CharaTalk} ss 周日宁静 */
    const f = async (ss) => {
      await ss.say_and_wait(
        '果然啊，上次只是略有偏差而已，我们的组合并不是错误的选择。',
      );
      await ss.say_and_wait('一起前进吧，我们可是赢下来了哦。');
    };
    f.title = title;
    return f;
  })(),
  ws_31: (() => {
    const title = '积雨云';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        '今天的天气不是很好，',
        ss.get_colored_name(),
        ' 的心情似乎也非常的烦躁，尾巴搭在休息室的沙发上甩来甩去。',
      ]);
      era.printButton('「怎么了？是讨厌雨天吗？」', 1);
      await era.input();
      await era.printAndWait([ss.get_colored_name(), ' 果断的摇了摇头。']);
      await ss.say_and_wait([
        '不是，只是有些讨厌这种大雨，因为没有办法去室外训练了，',
        callname,
        ' 喜欢大雨吗？',
      ]);
      era.printButton('「喜欢」', 1);
      era.printButton('「不喜欢」', 2);
      await era.input();
      await ss.say_and_wait([
        '这样啊，我并不喜欢大雨，仅此而已，不管是人还是',
        ss.uma_sex_title,
        '偶尔都会有没由来的就不喜欢某种东西的情况吧。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 这样说着，似乎没有那么烦躁了，但是 ',
        you.get_colored_name(),
        ' 察觉到了',
        ss.sex,
        '似乎故意避开了这个话题。',
      ]);
      await ss.say_and_wait([
        '但是即使是这样，我们也还有室内的训练呢，',
        callname,
        '，如果可以的话，请帮我稍微监督一下训练怎么样？',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 拿起了放在休息室里面的哑铃开始热身，',
        ss.sex,
        '看起来确实不想浪费任何一点的时间。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_39: (() => {
    const title = '初始 · 承诺';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(
        '今年似乎很快就要过去了，总感觉我对时间的感知都迟钝了呢。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 捧着咖啡缓缓开口，',
        ss.sex,
        '已经换上了冬季的制服，甚至用黑色的裤袜包裹住了丰满的大腿，',
      ]);
      await era.printAndWait([
        '整个人靠在沙发上一双包裹着黑丝的小脚蜷缩在尾巴边，时不时夹住自己尾巴把玩的动作让 ',
        you.get_colored_name(),
        ' 吞了吞口水。',
      ]);
      await ss.say_and_wait([
        '唔，',
        callname,
        '，我很满意哦，关于成为你的担当，这或许就是我最幸运的事情了。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 躺在沙发上一改过去斗志满满的模样显得有些懒散，接着',
        ss.sex,
        '用小声道 ',
        you.get_colored_name(),
        ' 听不到的声音开口。',
      ]);
      await ss.say_and_wait(
        '这或许就是我完成那件事最后的机会了吧，一定要做到的事情……站在最高的舞台上。',
      );
      await era.printAndWait([
        '不知为何，',
        ss.sex,
        '靠近了 ',
        you.get_colored_name(),
        ' 一点，似乎想要依靠在 ',
        you.get_colored_name(),
        ' 的怀中。',
      ]);
      await era.printAndWait([
        '但是当 ',
        you.get_colored_name(),
        ' 看向 ',
        ss.get_colored_name(),
        ' 的时候，',
        ss.sex,
        '却马上拉开距离连看都不敢看 ',
        you.get_colored_name(),
        ' 一眼。',
      ]);
      await ss.say_and_wait('我还真是一如既往的幸运呢……各位。', true);
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '第一步';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     * @param {PrintedSpan} call_25 周日宁静对曼城茶座的称呼
     */
    const f = async (ss, you, callname, call_25) => {
      await ss.say_and_wait('报名完成了吗？');
      era.printButton(
        '是的，如果没有其他情况的话，我们已经可以向三冠进发了。',
        1,
      );
      await era.input();
      await ss.say_and_wait(['好，对了，', call_25, ' 那边买了新的咖啡豆，']);
      await ss.say_and_wait(
        '我去蹭了一点，喝完和我一起去训练场吧，上次在泳池里面差点扭到脚，这次会好很多。',
      );
      await era.printAndWait([ss.sex, '端上来一杯热气腾腾的咖啡。']);
      await ss.say_and_wait([callname, '，觉得我怎么样？']);
      era.printButton('「很棒很努力的孩子」', 1);
      await era.input();
      await ss.say_and_wait(
        '不是这个啦，我是问你，觉得我现在的状态怎么样，与到时候要同期竞争三冠的对手比起来。',
      );
      era.printButton(`「我觉得你比${ss.couple_title}强」`, 1);
      era.printButton('「我觉得你还需要继续训练」', 2);
      await era.input();
      await ss.say_and_wait(['不管怎么样，', callname, '，我会一直相信你的。']);
    };
    f.title = title;
    return f;
  })(),
  ws_ny_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, coffee, you, callname) => {
      await era.printAndWait([
        '在神社偶遇了 ',
        ss.get_colored_name(),
        '，这是很奇妙的缘分，特别是当 ',
        you.get_colored_name(),
        ' 看到几乎与',
        ss.sex,
        '长得一模一样的',
        ss.uma_sex_title,
        '和',
        ss.sex,
        '一起有说有笑的时候。',
      ]);
      await era.printAndWait([
        '两个几乎是一个模子里面刻出来的',
        ss.uma_sex_title,
        '就这样站在了 ',
        you.get_colored_name(),
        ' 的面前，',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 知道自己绝不能再认错 ',
        ss.get_colored_name(),
        ' 了，不然的话大年初一进医务室也太不吉利了。',
      ]);
      await era.printAndWait([
        '所幸的是，',
        ss.get_colored_name(),
        ' 很明显一如既往会露出略显烦躁的表情，',
      ]);
      await era.printAndWait('似乎是不太喜欢人多的地方，这给了最好的提示。');
      await ss.say_and_wait([
        '新的一年也请多多指教了……',
        callname,
        '，今年可是我踏入经典年的时候，还请务必不要放松训练上的指导呢……',
      ]);
      await era.printAndWait([
        '将 ',
        you.get_colored_name(),
        ' 拉到了一旁，',
        ss.get_colored_name(),
        ' 略显亲昵的牵着 ',
        you.get_colored_name(),
        ' 的手，但是',
        ss.sex,
        '有些紧张的神情似乎又不希望 ',
        coffee.get_colored_name(),
        ' 发现',
        ss.sex,
        '的动作。',
      ]);
      era.printButton('「那么，新的一年，请多多指教。」', 1);
      await era.input();
      await era.printAndWait([
        '听 ',
        you.get_colored_name(),
        ' 说完这句话，',
        ss.get_colored_name(),
        ' 开心的摸了摸',
        ss.sex,
        '的和服，然后突然脸上露出了些许红霞。',
      ]);
      await ss.say_and_wait('那个，和服的系带松了……能不能麻烦你……');
      await era.printAndWait([
        '越说 ',
        ss.get_colored_name(),
        ' 的声音就越微弱，脑袋也慢慢的低了下去。',
      ]);
      await era.printAndWait([
        '但是 ',
        you.get_colored_name(),
        ' 显然没有这个顾虑，三下五除二就帮',
        ss.sex,
        '将和服重新穿好，然后深藏功与名的捋了捋头发。',
      ]);
      await era.printAndWait([
        '之后 ',
        ss.get_colored_name(),
        ' 就拉着 ',
        you.get_colored_name(),
        ' 一起去吃了 ',
        you.get_colored_name(),
        ' 绝对吃不起的豪华大餐，但是',
        ss.sex,
        '似乎只是想看着 ',
        you.get_colored_name(),
        ' 吃。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kent_der_win: (() => {
    const title = '胜利的大舞台';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     * @param {PrintedSpan} prea_sta 普瑞克尼斯锦标赛（上色版名字）
     * @param {PrintedSpan} belm_sta 贝蒙锦标（上色版名字）
     */
    const f = async (ss, coffee, you, callname, prea_sta, belm_sta) => {
      await ss.say_and_wait(['我们赢了对吗？', callname, '！！！']);
      await era.printAndWait([
        ss.sex,
        '完全没有了以往的沉着，开心的像是一个小孩子一样，激动的抱住了 ',
        you.get_colored_name(),
        '。',
      ]);
      await ss.say_and_wait('三冠的第一冠……我们两个真的拿下来了对吧？！');
      era.printButton('点点头', 1);
      await era.input();
      await ss.say_and_wait('太好了……太好了，果然训练员你就是最适合我的训练员');
      await ss.say_and_wait([
        '接下来……还有 ',
        prea_sta,
        ' 和 ',
        belm_sta,
        '，请务必不要在乎我的身体如何，继续加大训练量，只有这样我们才能拿到更大的优势。',
      ]);
      await coffee.say_and_wait('祝贺你……赛场上的身姿，真的很厉害。');
      await ss.say_and_wait('嗯……');
      await era.printAndWait([
        '然后在 ',
        ss.get_colored_name(),
        ' 走出去之后，',
        coffee.get_colored_name(),
        ' 才继续说道。',
      ]);
      await coffee.say_and_wait([
        ss.sex,
        '就拜托您了，',
        ss.sex,
        '一直是一个柔软的人，请稍微照顾一下',
        ss.sex,
        '的心情吧。',
      ]);
      await era.printAndWait([
        '在后面的采访之中，',
        ss.sex,
        '也丝毫不吝啬对于 ',
        you.get_colored_name(),
        ' 的赞美之词，',
        you.get_colored_name(),
        ' 能看得出来，',
        ss.sex,
        '不仅仅是开心，更是松了口气。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_before_prea_sta: (() => {
    const title = '深夜的暴风雨';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        '夜晚，带着疲惫的 ',
        ss.get_colored_name(),
        ' 回到了',
        ss.sex,
        '的房间，正当 ',
        you.get_colored_name(),
        ' 准备离开的时候，窗外下起了瓢泼大雨。',
      ]);
      await ss.say_and_wait([
        '真是不凑巧的雨啊，',
        callname,
        ' 要不稍微在这里坐一会……',
      ]);
      await era.printAndWait([
        '窗外雷声大作，狂风暴雨袭击着你们所居住的酒店，在一道震耳欲聋的雷声之后，整个酒店似乎都停电了。',
      ]);
      await ss.say_and_wait([
        '等等……等等等等等等，呼……呼……呼……',
        callname,
        '！！',
        callname,
        ' 你在哪里？！',
      ]);
      await era.printAndWait([
        '昏暗之中，',
        ss.sex,
        '一时半会找不到 ',
        you.get_colored_name(),
        ' 的身影，语气中的惊慌无措几乎要溢满而出。',
      ]);
      await ss.say_and_wait('不要……不要丢下我一个人……求求你，让我看到你好吗？');
      await era.printAndWait([
        '顺着有一道闪电划过带来的光芒，',
        you.get_colored_name(),
        ' 看清楚了',
        ss.sex,
        '的脸颊，与过去的 ',
        ss.get_colored_name(),
        ' 截然不同，',
      ]);
      await era.printAndWait([
        '那无助于悲伤几乎要将',
        ss.sex,
        '吞噬，眼眸之中的泪水是 ',
        you.get_colored_name(),
        ' 从来没有在',
        ss.sex,
        '身上见到过的。',
      ]);
      await era.printAndWait([
        '也就是顺着那道闪电，在黑暗的房间之中，',
        ss.sex,
        '看清楚了 ',
        you.get_colored_name(),
        ' 所在的地方，几乎是飞扑一样的向 ',
        you.get_colored_name(),
        ' 冲了过来。',
      ]);
      await era.printAndWait('咚！');
      await era.printAndWait([
        '很显然，',
        ss.sex,
        '的眼睛还没有完全适应着漆黑的房间，似乎是被什么东西给绊倒了，重重的摔在地上，伴随着',
        ss.sex,
        '隐约的啜泣。',
      ]);
      era.printButton('「别慌，我在这里，我现在在往你那边靠过去」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 马上赶了过去，循着声音 ',
        you.get_colored_name(),
        ' 握住了 ',
        ss.get_colored_name(),
        ' 的手，',
      ]);
      await era.printAndWait([
        ss.sex,
        '死死的抓紧 ',
        you.get_colored_name(),
        ' 的手掌让 ',
        you.get_colored_name(),
        ' 感觉自己的指骨似乎在悲鸣，但是 ',
        ss.get_colored_name(),
        ' 却对此似乎浑然不觉。',
      ]);
      await ss.say_and_wait(
        '没事……没事的，很快就过去了，这件事很快就过去……我们可以一起出去的。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 感觉到',
        ss.sex,
        '的状态似乎不太对劲，于是 ',
        you.get_colored_name(),
        ' 牵引着',
        ss.sex,
        '让',
        ss.sex,
        '坐在床上，',
      ]);
      await era.printAndWait([
        '窗外的风雨呼呼的击打着窗户，',
        you.get_colored_name(),
        ' 拿出手机，柔和的光芒照亮了',
        ss.sex,
        '惊惶的脸颊。',
      ]);
      era.printButton(
        '「我哪里都不去，我在这里陪着你」（好感+50，干劲+1……）',
        1,
      );
      era.printButton(
        '「我现在就去给你找条毛巾擦一下，等会就回来」（好感+20，干劲-1）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await ss.say_and_wait('嗯……不要松开我的手，求求你了……');
        await era.printAndWait([
          ss.sex,
          '看起来终于稳定了一点，一直紧绷的身子也终于慢慢的放松下来，然后',
          ss.sex,
          '拉着 ',
          you.get_colored_name(),
          ' 一起坐在了自己的床边。',
        ]);
        await ss.say_and_wait([
          callname,
          '……我真的很害怕……我当时就是这样握紧',
          ss.sex,
          '的手的……',
        ]);
        await ss.say_and_wait('……我不知道自己是怎么撑过来的，车翻了……');
        await ss.say_and_wait([
          '我们出不去……一开始',
          ss.couple_title,
          '还会和我说话安慰我握着我的手……',
        ]);
        await ss.say_and_wait(
          '但是……但是……好安静，我……我好像喝了什么东西……慢慢就睡过去了……明明说好不放手的',
        );
        await ss.say_and_wait([
          '是我……是我放手了……如果我没有放手的话……',
          ss.couple_title,
          '说不定……说不定就。',
        ]);
        await era.printAndWait([
          '那是 ',
          ss.get_colored_name(),
          ' 埋藏在心里面最深处的伤疤，在荒郊野外遭遇车祸，作为大人的司机当场横死，',
        ]);
        await era.printAndWait([
          '留下车上的几个小',
          ss.uma_sex_title,
          '被困在车子里面等待救援，但是救援来到的时间实在是太晚了，',
        ]);
        await era.printAndWait([
          '晚到只有 ',
          ss.get_colored_name(),
          ' 成功活了下来，',
          ss.sex,
          '从来没有对任何人说过这件事，除了 ',
          you.get_colored_name(),
          '。',
        ]);
        era.printButton(
          '「没事，握紧我的手，我不会松开的，我相信你也不会松开的，我们会一起走下去的。」',
          1,
        );
        await era.input();
        await ss.say_and_wait(
          '嗯……好……一辈子都不松开，说好的……我会拿到三冠的……我……我会走下去的。',
        );
        await era.printAndWait([ss.sex, '的疲惫涌了出来，眼皮子开始打架，']);
        await era.printAndWait([
          '但是即使是这样，',
          ss.sex,
          '也依旧没有松开握住 ',
          you.get_colored_name(),
          ' 的那只手，',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 只能握紧',
          ss.sex,
          '的手看着',
          ss.sex,
          '一点点进入梦乡，伴随着困意的袭来，',
          you.get_colored_name(),
          ' 就这样陪',
          ss.sex,
          '度过了一个夜晚。',
        ]);
        await era.printAndWait([
          '第二天清晨，',
          you.get_colored_name(),
          ' 靠着墙壁坐在床边，惊觉自己居然这样睡在了 ',
          ss.get_colored_name(),
          ' 的房间里面，',
          you.get_colored_name(),
          ' 抬头看过去。',
        ]);
        await era.printAndWait([
          ss.sex,
          '早就已经不在床上了，回过头去，穿好了运动服的 ',
          ss.get_colored_name(),
          ' 从厕所里面走出来。',
        ]);
        await ss.say_and_wait([
          callname,
          ' 醒了啊？要去休息一下吗？我今天的训练计划您昨天就规划好了，请放心我不会偷懒的。',
        ]);
        await era.printAndWait([
          ss.sex,
          '有些关切的揉了揉 ',
          you.get_colored_name(),
          ' 的太阳穴，看着 ',
          you.get_colored_name(),
          ' 腰酸背痛的样子有些担心。',
        ]);
        await era.printAndWait([
          '然后将 ',
          you.get_colored_name(),
          ' 送回了房间，在关门之前，',
          you.get_colored_name(),
          ' 听到了一句奇怪的话。',
        ]);
        await ss.say_and_wait([
          callname,
          '，说好的哦……你不会放开你的手的，所以……如果可以完成那件事的话，我就可以……一辈子握住你的手了吧。',
        ]);
      } else {
        await era.printAndWait([
          ss.sex,
          '有些惊慌的伸手，但是在黑夜之中 ',
          you.get_colored_name(),
          ' 并没有注意到这件事情，',
        ]);
        await era.printAndWait([
          '转身快速的跑去找到了一条毛巾处理了',
          ss.sex,
          '因为扭伤而行动不便的脚。',
        ]);
        await era.printAndWait([
          ss.get_colored_name(),
          ' 看起来有些烦躁而畏惧。',
        ]);
        await ss.say_and_wait('谢谢您，大晚上的麻烦您了。');
        await era.printAndWait([
          ss.sex,
          '的声音听起来无比沙哑，',
          ss.sex,
          '拉住了 ',
          you.get_colored_name(),
          ' 的衣袖，似乎是不希望 ',
          you.get_colored_name(),
          ' 离开，于是 ',
          you.get_colored_name(),
          ' 唱起了自己儿时听过的摇篮曲，将',
          ss.sex,
          '哄睡。',
        ]);
        era.drawLine({ content: '第二天早上' });
        await ss.say_and_wait('昨天晚上……让您见笑了，真抱歉。');
        await era.printAndWait([
          ss.sex,
          '看起来眼睛有些红肿，显然昨天晚上没有休息好，在 ',
          you.get_colored_name(),
          ' 将',
          ss.sex,
          '哄睡之后便回了自己的房间，也没有办法知道后面到底发生了什么。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  double_crowns: (() => {
    const title = '第二场大胜';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     * @param {PrintedSpan} belm_sta 贝蒙锦标（上色版名字）
     */
    const f = async (ss, you, callname, belm_sta) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 穿着自己的决胜服，站在终点处呆呆的望向天空然后举起手的样子赢得了全场的欢呼。',
      ]);
      await era.printAndWait([
        '新的二冠王，几乎是不可阻挡的胜者，所有人都在为',
        ss.sex,
        '献上祝福，祝福着一位新的三冠王的诞生。',
      ]);
      await era.printAndWait([
        '见状 ',
        you.get_colored_name(),
        ' 先行一步退回了休息室内，为 ',
        ss.get_colored_name(),
        ' 准备接下来需要用上的东西，毛巾、热水、水果以及一些其他的杂物。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 走进来的时候 ',
        you.get_colored_name(),
        ' 本来想要让',
        ss.sex,
        '先擦一擦汗，但是',
        ss.sex,
        '一句话也不说扑到 ',
        you.get_colored_name(),
        ' 的身上，抱住了 ',
        you.get_colored_name(),
        '。',
      ]);
      await ss.say_and_wait([
        callname,
        '……我没有再做梦吧？我们离最初的目标，就剩下一场比赛了对吗？',
      ]);
      await era.printAndWait([
        ss.sex,
        '的语气非常激动，',
        you.get_colored_name(),
        ' 拍了拍',
        ss.sex,
        '的后背，感受着',
        ss.sex,
        '的温度。',
      ]);
      era.printButton(
        `「是的，我们离最初的目标就差最后一步了，恭喜你，${ss.name}」`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '真的……真的非常感谢，作为拖雷纳一直在为我的训练和生活操心，这场胜利，是你和我一起拿下的，是我给你的答案！',
      );
      await era.printAndWait([
        ss.sex,
        '抬起头，金黄色的瞳孔之中那闪耀的自信让',
        ss.sex,
        '看起来就好像是天生的主角一样。',
      ]);
      await ss.say_and_wait([
        '所以啊，',
        callname,
        '，接下来就拜托你了哦，',
        belm_sta,
        '，三冠的最后一站。',
      ]);
      await era.printAndWait([
        '今天的庆功宴，',
        ss.get_colored_name(),
        ' 非常开心，说话的语气也比以往柔和了许多。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  triple_crowns: (() => {
    const title = '夙愿完成！';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     */
    const f = async (ss, you) => {
      era.printButton(
        `「恭喜你，三冠王${ss.name}，成为最今年最强的赛${ss.uma_sex_title}了呢。」`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '托您的福……我也终于可以松口气了，说实话……我已经不知道如何用言语表达我的感谢了。',
      );
      await ss.say_and_wait('是您带领我完成了我的愿望……站在了最高的舞台上。');
      await era.printAndWait([
        ss.sex,
        '向 ',
        you.get_colored_name(),
        ' 鞠了个躬，一直都不肯抬起头来。',
      ]);
      await ss.say_and_wait(
        '如果没有您的帮助的话，我是不可能走到这里的，我深知这点……我也终于可以安心了，从此以后。',
      );
      await era.printAndWait([
        ss.sex,
        '抬头抱住了 ',
        you.get_colored_name(),
        '，场外的气氛火热的就像是即将喷发的火山，但是赛场的走廊内，',
        ss.get_colored_name(),
        ' 比以往任何时候都要温柔，',
      ]);
      await era.printAndWait([
        ss.sex,
        '轻轻的抱住 ',
        you.get_colored_name(),
        ' 贴在 ',
        you.get_colored_name(),
        ' 的身上，',
        you.get_colored_name(),
        ' 甚至能够感觉到',
        ss.sex,
        '的吐息打在 ',
        you.get_colored_name(),
        ' 身上那种轻柔的感觉。',
      ]);
      await ss.say_and_wait(
        '请稍微，稍微让我依靠一下如何？就像您一直默默做的那样，这次就让我光明正大的依靠您一下吧。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_ss_1: (() => {
    const title = '愉快而炎热的夏日之初';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     * @param {number} crowns 美三冠胜利数量
     */
    const f = async (ss, coffee, you, callname, crowns) => {
      await era.printAndWait([
        '一望无际的海平面与蔚蓝的海水让你们感觉到心旷神怡。',
      ]);
      await ss.say_and_wait([
        '唔，我还没有在海滩上尝试过训练呢，',
        callname,
        '，这个真的有作用吗？',
      ]);
      era.printButton(
        '「就算你不愿意相信我，好歹也要相信特雷森学园吧，这可是前辈们流传下来的经验之谈」',
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '说的也是呢，那么这两个月就请多多指教了，毕竟我对于海边的训练可是一点经验都没有，',
      );
      await ss.say_and_wait([
        '要是闹出什么笑话或者事故就不好了，这方面还请 ',
        you.get_colored_name(),
        ' 等等帮我把控一下。',
      ]);
      await era.printAndWait([
        ss.sex,
        '眯起了眼睛，剥去冰冷的外表之后，一个文静端庄但是又充满活力的',
        ss.uma_sex_title,
        '出现在 ',
        you.get_colored_name(),
        ' 面前。',
      ]);
      await era.printAndWait([
        '虽然嘴上说着不能浪费一点的时间要加紧训练，但是 ',
        ss.get_colored_name(),
        ' 依旧还是开开心心的海滩边尝试了各种各样的活动，',
      ]);
      await era.printAndWait([
        '打排球、冲浪板、堆沙子，在阳光的照射下，',
        ss.sex,
        '身上那身深黑色的比基尼将傲人的身材完美的承托了出来，',
      ]);
      if (ss.sex_code !== 1) {
        await era.printAndWait([
          '雪白的乳球在比基尼泳衣的束缚下一摇一晃，看起来绝对比',
          ss.sex,
          '的亲戚 ',
          coffee.get_colored_name(),
          ' 的发育要好得多。',
        ]);
      }
      await era.printAndWait([
        '然后那个下午 ',
        you.get_colored_name(),
        ' 就看到了趴在沙滩椅上焉焉的 ',
        ss.get_colored_name(),
        '。',
      ]);
      await ss.say_and_wait([
        '呼，',
        callname,
        '，这天气真的好热，训练的话，能不能尽量安排在水里面或者阴凉的地方，抱歉啊。',
      ]);
      if (crowns === 3) {
        await era.printAndWait([
          '看起来就算是强大的三冠王也难以和自然作斗争，',
          you.get_colored_name(),
          ' 不禁如此想到。',
        ]);
      } else {
        await era.printAndWait([
          '看起来就算是强大的二冠王也难以和自然作斗争，',
          you.get_colored_name(),
          ' 不禁如此想到。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_christmas: (() => {
    const title = '为了圣诞节所做的准备';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, coffee, you, callname) => {
      await ss.say_and_wait('唔唔唔，原来圣诞节还要给拖雷纳桑准备礼物的吗？');
      await era.printAndWait([
        '家政教室内，',
        ss.get_colored_name(),
        ' 正在和 ',
        coffee.get_colored_name(),
        ' 窃窃私语，看起来简直就好像有一面镜子放在',
        ss.couple_title,
        '中间，而其中一个人仿佛是倒影一般。',
      ]);
      await ss.say_and_wait([
        '好好好，我知道了，你说得对，我应该去思考一下该给 ',
        callname,
        ' 准备的礼物了。',
      ]);
      await era.printAndWait([
        ss.sex,
        '回头眯起眼睛看向 ',
        you.get_colored_name(),
        '，似乎思考着，然后伸了个懒腰。',
      ]);
      await ss.say_and_wait(['算了，先请 ', callname, ' 吃顿饭作为感谢吧。']);
      await era.printAndWait([
        '于是 ',
        ss.get_colored_name(),
        ' 拉着 ',
        you.get_colored_name(),
        ' 一起去食堂吃了一顿大餐，只不过',
        ss.sex,
        '点的东西里面，韭菜之类的东西似乎格外的多。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_classical: (() => {
    const title = '属于自己的胜利';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('简直就好像是在做梦一样呢……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' 抬起头望向 ',
        you.get_colored_name(),
        '，眼中的泪花闪烁，看起来就好像快要哭出来了一样。',
      ]);
      await ss.say_and_wait([
        '如果……如果没有 ',
        callname,
        ' 你的话，我应该不太可能取得今天这样的成就吧。这是独属于我的，为了献上的胜利……',
      ]);
      await era.printAndWait([
        '说着，似乎是注意到了此地此刻已经空无一人，',
        ss.get_colored_name(),
        ' 一把抓住 ',
        you.get_colored_name(),
        ' 的衣领和 ',
        you.get_colored_name(),
        ' 脸贴脸拥抱在一起，',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 能够感受到',
        ss.sex,
        '身上散发出来的热度，还有那炙热的感情。',
      ]);
      await ss.say_and_wait(
        '今后，也和『我』一起走下去好吗？就好像是那天我们确定好成为彼此的担当一样，一起走下去。',
      );
      era.printButton('「你可是我的担当啊，我怎么会丢下你呢？」', 1);
      await era.input();
      await era.printAndWait([
        ss.get_colored_name(),
        ' 看着 ',
        you.get_colored_name(),
        ' 无奈的皱起了好看的眉头，黑丝包裹的小腿擦着 ',
        you.get_colored_name(),
        ' 的腿磨蹭了两下，',
      ]);
      await ss.say_and_wait([
        '不管 ',
        callname,
        ' 有没有理解我的意思，我都会坚持我要做的事情哦。',
      ]);
      await era.printAndWait([
        '似乎是想到了什么有趣的事情，轻轻推开 ',
        you.get_colored_name(),
        '，转身然后回头。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ny_2: (() => {
    const title = '与周日宁静一起前往神社';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 温柔的拉着 ',
        you.get_colored_name(),
        ' 的手',
      ]);
      await era.printAndWait([
        ss.sex,
        '身上华丽的黑色和服让',
        ss.sex,
        '看起来就好像是一位出尘绝艳的美丽女子一般，',
      ]);
      await era.printAndWait([
        '在这个不算特别寒冷的清晨，',
        ss.sex,
        '亲自敲响了 ',
        you.get_colored_name(),
        ' 的家门，然后将 ',
        you.get_colored_name(),
        ' 拉了出来。',
      ]);
      await ss.say_and_wait([callname, '，如果要是冷的话可以把手伸进来哦。']);
      await era.printAndWait([
        ss.sex,
        '指了指自己的修身的和服，脸上带着些许的红霞，似乎是在期待着 ',
        you.get_colored_name(),
        ' 的动作。',
      ]);
      await era.printAndWait([
        '不过或许是',
        ss.sex,
        '有些心慌意乱，很明显',
        ss.sex,
        '的诱惑战术时间并不恰当，还没一分钟的时间你们就站在了神社的门口。',
      ]);
      await ss.say_and_wait([
        '唉，算了算了，',
        callname,
        ' 这样的木头人还是太不解风情了。',
      ]);
      await era.printAndWait([
        '紧接着你们进入了神社，一如既往的按照参拜的过程，将硬币投入纳奉箱之中之后拍手许愿。',
      ]);
      await ss.say_and_wait([callname, ' 你许了什么愿望呢？']);
      era.printButton('「希望我们两个人都身体健康，过上安心幸福的日子。」', 1);
      await era.input();
      await era.printAndWait([
        '说完 ',
        you.get_colored_name(),
        ' 将拉住了',
        ss.sex,
        '的小手，带着黑色蕾丝手套的手摸起来有种奇妙的感觉，',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 似乎隔着手套感受着 ',
        you.get_colored_name(),
        ' 的温度，然后将 ',
        you.get_colored_name(),
        ' 的手放入了',
        ss.sex,
        '的和服之中。',
      ]);
      await ss.say_and_wait([
        '唔，我的愿望就是秘密了，除非 ',
        callname,
        ' 要用大棒撬开我的嘴，不然我是不会说的哦。',
      ]);
      await era.printAndWait([
        '说完',
        ss.sex,
        '就在脸颊的脸颊上留下一个吻，然后像是逃跑一样离开了神社。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_rainy: (() => {
    const title = '暴雨将至';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     * @param {PrintedSpan} call_25 周日宁静对曼城茶座的称呼
     */
    const f = async (ss, coffee, you, callname, call_25) => {
      await ss.say_and_wait('又要下雨了啊……这天气真是讨厌。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 轻轻的将毛巾搭在 ',
        ss.get_colored_name(),
        ' 的脑袋上，',
        ss.sex,
        '抬起头很享受 ',
        you.get_colored_name(),
        ' 的擦脸服务，',
      ]);
      await era.printAndWait([
        '这表情让 ',
        you.get_colored_name(),
        ' 联想到出浴的小猫咪，但是这话 ',
        you.get_colored_name(),
        ' 是万万不敢说出来的。',
      ]);
      await era.printAndWait([
        '门被敲响，',
        you.get_colored_name(),
        ' 随口答了一句请进之后，',
        coffee.get_colored_name(),
        ' 推开了大门。',
      ]);
      await coffee.say_and_wait('好久不见，过的还好吗？');
      await ss.say_and_wait('哦，相当不错哦，特别是和他在一起的时候。');
      await era.printAndWait([
        ss.get_colored_name(),
        '指了指 ',
        you.get_colored_name(),
        '。',
      ]);
      await coffee.say_and_wait(
        '要来吗？还有半个月，虽然看起来雨季好像要到下个月才会结束。',
      );
      await ss.say_and_wait([
        '你知道吗？就算是狂风暴雨也好，只要有 ',
        callname,
        ' 在，我感觉完全没问题了呢。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 看了 ',
        you.get_colored_name(),
        ' 一眼，点点头然后离开了。',
      ]);
      await ss.say_and_wait([
        '哎呀，这下可麻烦了，',
        call_25,
        '可是个较真的性子呢，而且更麻烦的是，我也是哦。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 从背后抱住 ',
        you.get_colored_name(),
        '，让 ',
        you.get_colored_name(),
        ' 感觉更像是遇到一只猫咪了。',
      ]);
      await ss.say_and_wait([
        callname,
        '，你会帮我的对吧，毕竟 ',
        call_25,
        ' ',
        ss.sex,
        '怎么说都是在长距离赛事方面难逢敌手的天才赛',
        ss.uma_sex_title,
        '呢。',
      ]);
      await era.printAndWait([
        '窗外再次开始下起了大雨，',
        ss.get_colored_name(),
        ' 的声音听起来无比平静，',
      ]);
      await era.printAndWait([
        ss.sex,
        '就这样抱住了 ',
        you.get_colored_name(),
        '，似乎时间在这一刻定格，让',
        ss.sex,
        '尽情的享受着这个时刻。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '雨中胜者';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     * @param {string} y_call_s 玩家对周日宁静的称呼
     */
    const f = async (ss, coffee, you, callname, y_call_s) => {
      await era.printAndWait([
        '暴雨之中，浑身湿透的 ',
        ss.get_colored_name(),
        ' 神情淡墨，看起来不像是刚刚在天皇赏之上拿到一着的样子，',
      ]);
      await era.printAndWait([
        '但是',
        ss.sex,
        '的对面，排山倒海的欢呼与解说激情的夸赞如同潮水一般涌向',
        ss.sex,
        '。',
      ]);
      await ss.say_and_wait(['我成功了……', callname, '，我真的……做到了对吧？']);
      await era.printAndWait([
        '回过头去，',
        coffee.get_colored_name(),
        ' 正在鼓掌，',
        ss.sex,
        '看着自己的血亲，脸上露出了微笑,',
      ]);
      await era.printAndWait([
        '即使自己没有取得胜利也好，',
        coffee.get_colored_name(),
        ' 依旧大方的将祝福送给了 ',
        ss.get_colored_name(),
        '。',
      ]);
      await ss.say_and_wait('太好了……真的……真的。');
      await era.printAndWait([
        ss.sex,
        '在众人的目光中扑进了 ',
        you.get_colored_name(),
        ' 的怀抱，并不在意周围人诧异或者兴奋的目光。',
      ]);
      era.printButton(`「${y_call_s}……感觉好一点了吗？」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 拍了拍',
        ss.sex,
        '的背后，',
        ss.sex,
        '身上的水渍和泥渍将 ',
        you.get_colored_name(),
        ' 的衣服一同沾湿，',
      ]);
      await era.printAndWait([
        '但是 ',
        ss.get_colored_name(),
        ' 没有回答 ',
        you.get_colored_name(),
        '，只是在 ',
        you.get_colored_name(),
        ' 的怀中发出粗重的呼吸声。',
      ]);
      await ss.say_and_wait('让我……让我稍微再冷静一下，就在你的怀里面就好了。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有在意旁人的目光，将 ',
        ss.get_colored_name(),
        ' 抱回了休息室里面。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ss_2: (() => {
    const title = '又是一年的夏季合宿';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     */
    const f = async (ss, you) => {
      await era.printAndWait([
        '又是一年的海边，',
        ss.get_colored_name(),
        ' 身上的泳装已经从学校配发的泳装换成了',
        ss.sex,
        '自己喜欢的非常大胆的黑色比基尼泳装。',
      ]);
      await era.printAndWait([
        '匀称而丰满的肉体在 ',
        you.get_colored_name(),
        ' 面前晃来晃去总是会勾起一个年轻训练员心中熊熊的火焰，但是 ',
        ss.get_colored_name(),
        ' 就好像是完全没有注意到一样，就连不经意之间的动作都散发着属于',
        ss.sex,
        '的魅力。',
      ]);
      await ss.say_and_wait(
        '你在看什么啊？按照计划的话，我们好像要马上去抢位置了吧？',
      );
      await era.printAndWait([
        '丰满有力的大腿踩着沙子，',
        ss.get_colored_name(),
        ' 在太阳的照射下，显得如此美丽。',
      ]);
      await era.printAndWait([
        '刚刚说完 ',
        ss.get_colored_name(),
        ' 就拉着 ',
        you.get_colored_name(),
        ' 的手，带着 ',
        you.get_colored_name(),
        ' 走进了这片沙滩，开始了今年夏日合宿的训练和玩耍。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win: (() => {
    const title = '春秋的冠军';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 很平淡的擦了擦自己的脑门，看着休息室内大屏幕上重复播放的，最后的冲刺时刻。',
      ]);
      await ss.say_and_wait(
        '和您站在一起的时候，胜利就变得稀疏平常起来了呢……春秋天皇赏一着啊，听起来真是个伟大的成就啊。',
      );
      era.printButton(
        `「但是你做到了，这就是 ${ss.name} 的能力，绝对强大的赛${ss.uma_sex_title}」`,
        1,
      );
      await era.input();
      await ss.say_and_wait([
        callname,
        ' 你说这话会让我害羞的哦，明明 ',
        callname,
        ' 才是这几年里面最努力的那个人吧，我可是记得一清二楚哦。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 的黑丝小脚夹住了 ',
        you.get_colored_name(),
        ' 的腿，整个人挂在 ',
        you.get_colored_name(),
        ' 的身上，看起来比赛结束之后',
        ss.sex,
        '的兴奋似乎没有过去。',
      ]);
      era.printButton(
        '即使如此，我们还有最后的一场最大的比赛在等着我们哦，今年的最后一场比赛',
        1,
      );
      await ss.say_and_wait([
        '我们会拿下理所应当的胜利的，',
        callname,
        '，就好像是我最开始说的那样，我们会赢下来的，由我将胜利带给您。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_senior: (() => {
    const title = '';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(
        '漆黑的君王，这些评论员又在说些什么奇奇怪怪的东西？',
      );
      era.printButton(
        '似乎是他们给你起的外号，毕竟你的成就在系列竞赛的历史上也实属罕见。',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        '那还不如让他们多关注关注那些新人比较好呢，不过啊，',
        callname,
        '，和我一起去拿奖杯怎么样？',
      ]);
      await era.printAndWait([
        ss.sex,
        '突如其来的邀请让 ',
        you.get_colored_name(),
        ' 有些疑惑。',
      ]);
      await ss.say_and_wait(
        '字面意思啦，这可不是我一个人的胜利，这是你和我一起拼搏出来的，',
      );
      await ss.say_and_wait(
        '所以说啊，和我一起去迎接赞美吧，这是属于我们的胜利。',
      );
      await ss.say_and_wait('至于什么漆黑的君王的话，你不讨厌就随便他们说吧，');
      await ss.say_and_wait(
        '或者说你觉得我应该有什么更好的外号也可以告诉我哦，反正只要你听着顺耳就好了。',
      );
      await era.printAndWait([
        ss.sex,
        '笑眯眯的牵住了 ',
        you.get_colored_name(),
        ' 的手，将 ',
        you.get_colored_name(),
        ' 拉出了休息室，和',
        ss.sex,
        '一起走向属于你们的更远的未来。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  play_dice: (() => {
    const title = '要来试试运气吗？';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 拿出了一副扑克牌，对着 ',
        you.get_colored_name(),
        ' 挥了挥手。',
      ]);
      await ss.say_and_wait([
        callname,
        '，来玩抽鬼牌怎么样？毕竟现在可是休息时间哦。',
      ]);
      await era.printAndWait([
        '抽鬼牌的进度非常快，很快 ',
        ss.get_colored_name(),
        ' 的手中就只剩下两张牌了。',
      ]);
      await ss.say_and_wait(['哼哼哼，', callname, ' 可得好好的抉择一下呢。']);
      era.printButton('抽左边的牌（耐力&智力+10）', 1);
      era.printButton('抽右边的牌（速度+10，技能点数+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ss.say_and_wait(
          '看起来还是我比较好运呢，这下拖雷纳可是输给你的担当了呢，作为代价，给我带饭怎么样？',
        );
        await era.printAndWait([
          '最后去食堂替 ',
          ss.get_colored_name(),
          ' 带了',
          ss.sex,
          '喜欢吃的饭菜和零食。',
        ]);
      } else {
        await ss.say_and_wait([
          '诶，居然是 ',
          callname,
          ' 比较厉害呢……这样的话，',
          callname,
          ' 中午想吃什么？我去给您带饭吧，顺带帮我计时怎么样？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 爽快的答应了',
          ss.sex,
          '，然后',
          ss.sex,
          '就遇上了排的长长的队伍，等了很久才满脸无奈的提着饭盒回来了。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  enjoy_cat: (() => {
    const title = '尝试和猫咪相处';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 等在树丛的旁边，似乎在苦恼着什么事情。',
      ]);
      await ss.say_and_wait([
        callname,
        '！！刚刚好，过来帮我一下吧？这里有只小猫躲在里面，我怕等会下雨的话把它淋湿生病就不好了！',
      ]);
      era.printButton('「果然还是要先用食物引诱吧。」（根性&智力+10）', 1);
      era.printButton('「先下手为强，把猫咪抓住。」（耐力&力量+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          ss.get_colored_name(),
          ' 听完之后点点头，然后在 ',
          you.get_colored_name(),
          ' 无奈的眼神之下试图用面包将小猫咪引诱出来，',
        ]);
        await era.printAndWait(['但是很明显', ss.sex, '的做法几乎没有效果。']);
        await you.say_and_wait('让我试试吧，我刚刚好带了点食材。');
        await era.printAndWait([
          '一根火腿肠被放到了树丛的前方，小猫咪警觉的探出了脑袋，看到两个人类就瞬间缩了回去，但是似乎是饥饿战胜了理智，它还是忍不住跑出来咬住了火腿肠，然后落到了 ',
          ss.get_colored_name(),
          ' 的手中。',
        ]);
      } else {
        await ss.say_and_wait('说的也对，这个时候就应该发挥我的长处了。');
        await era.printAndWait([
          ss.get_colored_name(),
          ' 伸了个懒腰，眼神锐利了起来，慢慢的拨开树丛，看到了那只非常警惕，似乎已经有些炸毛的小猫咪。',
        ]);
        await ss.say_and_wait('看起来很警觉呢……不过只要这样的话。');
        await era.printAndWait([
          ss.sex,
          '飞快的伸手捏住了小猫的后颈，一瞬间刚刚还在试图威胁 ',
          ss.get_colored_name(),
          ' 的小猫瞬间安分了下来，',
        ]);
        await era.printAndWait([
          '乖乖的被提起来落到了 ',
          ss.get_colored_name(),
          ' 的手中。',
        ]);
      }
      await era.printAndWait([
        '在抓住了小猫咪之后，',
        ss.get_colored_name(),
        ' 将它带到了休息室附近，然后看着窗外的大雨露出了笑容。',
      ]);
      await ss.say_and_wait('要是被大雨淋湿透的话，你可就糟糕了呢，小家伙。');
      await era.printAndWait([
        '小猫埋头在猫粮之中，无暇顾及 ',
        ss.get_colored_name(),
        ' 的话语。',
      ]);
      await ss.say_and_wait('等会就把你送去宠物医院看看……');
      await era.printAndWait(
        '然后这只小猫就顺手被做了驱虫和绝育，回到特雷森的时候已经是一脸的生无可恋',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sugar_or_milk: (() => {
    const title = '咖啡的味道要怎么样比较好呢？';
    /**
     * @param {CharaTalk} ss 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} call_25 周日宁静对曼城茶座的称呼
     */
    const f = async (ss, you, call_25) => {
      await ss.say_and_wait('咖啡要加糖还是加奶？或者什么都不加？');
      era.printButton('「什么？」', 1);
      await era.input();
      await ss.say_and_wait([
        '就是说你的咖啡要加糖还是奶啦？我和 ',
        call_25,
        ' ',
        ss.sex,
        '学了一下怎么泡咖啡，现在让你试一下，要点什么？',
      ]);
      era.printButton('「果然还是要多加点方糖吧。」（耐力+20）', 1);
      era.printButton('「或许加点奶会很不错。」（智力+20）', 2);
      const ret = await era.input();
      await ss.say_and_wait('这样吗？那就来尝尝看吧？我泡的咖啡怎么样？');
      await era.printAndWait([
        '咖啡的口感和甜度都非常棒，完全不像是新人第一次泡咖啡的成品，看到 ',
        you.get_colored_name(),
        ' 的表情，',
        ss.get_colored_name(),
        ' 愉快的勾起了嘴角。',
      ]);
      await ss.say_and_wait(
        '好喝的话，下次我就继续端给你品鉴了，要是有哪里不太行的话，要记得及时说哦。',
      );
      await era.printAndWait([
        '就这样 ',
        ss.get_colored_name(),
        ' 垄断了休息室里面的饮料供应。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
