const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},cb:function)>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (ss, me, callname, flags) => {
    await print_event_name('初步磨合', ss);
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
      me.get_colored_name(),
      ' 的想法说出了这样赤裸裸的话语，',
    ]);
    await era.printAndWait([
      '但是 ',
      me.get_colored_name(),
      ' 注意到当',
      ss.sex,
      '提到 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 才能知道底下的黄金到底有多么恐怖的价值。',
    ]);
    await era.printAndWait(
      '尽管如此，在中央这种高手如云的地方，只有天赋是决然不够的，若是没有足够的训练和战术，所谓的天赋永远也不能转变为赢下比赛的能力。',
    );
    await era.printAndWait([
      '所以这才是 ',
      me.get_colored_name(),
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
    flags.wait_flag =
      get_attr_and_print_in_event(400, [0, 5, 0, 5, 0], 0) || flags.wait_flag;
  };

  handlers[31] = async (ss, me, callname, flags) => {
    await print_event_name('积雨云', ss);
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
      me.get_colored_name(),
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
    flags.wait_flag =
      get_attr_and_print_in_event(400, [0, 0, 0, 10, 0], 0) || flags.wait_flag;
  };

  handlers[39] = async (ss, me, callname, flags) => {
    await print_event_name('初始 · 承诺', ss);
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 听不到的声音开口。',
    ]);
    await ss.say_and_wait(
      '这或许就是我完成那件事最后的机会了吧，一定要做到的事情……站在最高的舞台上。',
    );
    await era.printAndWait([
      '不知为何，',
      ss.sex,
      '靠近了 ',
      me.get_colored_name(),
      ' 一点，似乎想要依靠在 ',
      me.get_colored_name(),
      ' 的怀中。',
    ]);
    await era.printAndWait([
      '但是当 ',
      me.get_colored_name(),
      ' 看向 ',
      ss.get_colored_name(),
      ' 的时候，',
      ss.sex,
      '却马上拉开距离连看都不敢看 ',
      me.get_colored_name(),
      ' 一眼。',
    ]);
    await ss.say_and_wait('我还真是一如既往的幸运呢……各位。', true);
    flags.wait_flag =
      get_attr_and_print_in_event(400, [0, 0, 0, 10, 0], 0) || flags.wait_flag;
  };

  handlers[47] = async (ss, me, callname, flags) => {
    await print_event_name('第一步', ss);
    await ss.say_and_wait('报名完成了吗？');
    era.printButton(
      '是的，如果没有其他情况的话，我们已经可以向三冠进发了。',
      1,
    );
    await era.input();
    await ss.say_and_wait([
      '好，对了，',
      sys_get_colored_callname(400, 25),
      ' 那边买了新的咖啡豆，',
    ]);
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
    era.printButton(`「我觉得你比${ss.sex}们强」`, 1);
    era.printButton('「我觉得你还需要继续训练」', 2);
    await era.input();
    await ss.say_and_wait(['不管怎么样，', callname, '，我会一直相信你的。']);
    flags.wait_flag =
      get_attr_and_print_in_event(400, [5, 0, 5], 0) || flags.wait_flag;
  };

  handlers[47 + 29] = async (ss, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:400:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    await print_event_name('愉快而炎热的夏日之初', ss);
    await era.printAndWait([
      '一望无际的海平面与蔚蓝的海水让 ',
      me.get_couple_title(),
      ' 感觉到心旷神怡。',
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
      me.get_colored_name(),
      ' 等等帮我把控一下。',
    ]);
    await era.printAndWait([
      ss.sex,
      '眯起了眼睛，剥去冰冷的外表之后，一个文静端庄但是又充满活力的',
      ss.uma_sex_title,
      '出现在 ',
      me.get_colored_name(),
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
    ss.sex_code - 1 &&
      (await era.printAndWait([
        '雪白的乳球在比基尼泳衣的束缚下一摇一晃，看起来绝对比',
        ss.sex,
        '的亲戚 ',
        get_chara_talk(25).get_colored_name(),
        ' 的发育要好得多。',
      ]));
    await era.printAndWait([
      '然后那个下午 ',
      me.get_colored_name(),
      ' 就看到了趴在沙滩椅上焉焉的 ',
      ss.get_colored_name(),
      '。',
    ]);
    await ss.say_and_wait([
      '呼，',
      callname,
      '，这天气真的好热，训练的话，能不能尽量安排在水里面或者阴凉的地方，抱歉啊。',
    ]);
    const race_history = RaceHistory.get(400).get(),
      crowns =
        check_aim_race(race_history, race_enum.kent_der, 1, 1) +
        check_aim_race(race_history, race_enum.prea_sta, 1, 1) +
        check_aim_race(race_history, race_enum.belm_sta, 1, 1);
    if (crowns >= 2) {
      await era.printAndWait([
        '看起来就算是强大的',
        crowns === 2 ? '二' : '三',
        '冠王也难以和自然作斗争，',
        me.get_colored_name(),
        ' 不禁如此想到。',
      ]);
    }
    flags.wait_flag =
      get_attr_and_print_in_event(400, new Array(5).fill(3), 30) ||
      flags.wait_flag;
  };

  handlers[47 + 48] = async (ss, me, callname, flags) => {
    era.set('cflag:400:节日事件标记', 0);
    await print_event_name('为了圣诞节所做的准备', ss);
    await ss.say_and_wait('唔唔唔，原来圣诞节还要给拖雷纳桑准备礼物的吗？');
    await era.printAndWait([
      '家政教室内，',
      ss.get_colored_name(),
      ' 正在和 ',
      get_chara_talk(25).get_colored_name(),
      ' 窃窃私语，看起来简直就好像有一面镜子放在',
      ss.sex,
      '们中间，而其中一个人仿佛是倒影一般。',
    ]);
    await ss.say_and_wait([
      '好好好，我知道了，你说得对，我应该去思考一下该给 ',
      callname,
      ' 准备的礼物了。',
    ]);
    await era.printAndWait([
      ss.sex,
      '回头眯起眼睛看向 ',
      me.get_colored_name(),
      '，似乎思考着，然后伸了个懒腰。',
    ]);
    await ss.say_and_wait(['算了，先请 ', callname, ' 吃顿饭作为感谢吧。']);
    await era.printAndWait([
      '于是 ',
      ss.get_colored_name(),
      ' 拉着 ',
      me.get_colored_name(),
      ' 一起去食堂吃了一顿大餐，只不过',
      ss.sex,
      '点的东西里面，韭菜之类的东西似乎格外的多。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(400, [0, 10], 0, [200]);
  };

  handlers[95 + 13] = async (ss, me, callname) => {
    const coffee = get_chara_talk(25);
    await print_event_name('暴雨将至', ss);
    await ss.say_and_wait('又要下雨了啊……这天气真是讨厌。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 轻轻的将毛巾搭在 ',
      ss.get_colored_name(),
      ' 的脑袋上，',
      ss.sex,
      '抬起头很享受 ',
      me.get_colored_name(),
      ' 的擦脸服务，',
    ]);
    await era.printAndWait([
      '这表情让 ',
      me.get_colored_name(),
      ' 联想到出浴的小猫咪，但是这话 ',
      me.get_colored_name(),
      ' 是万万不敢说出来的。',
    ]);
    await era.printAndWait([
      '门被敲响，',
      me.get_colored_name(),
      ' 随口答了一句请进之后，',
      coffee.get_colored_name(),
      ' 推开了大门。',
    ]);
    await coffee.say_and_wait('好久不见，过的还好吗？');
    await ss.say_and_wait('哦，相当不错哦，特别是和他在一起的时候。');
    await era.printAndWait([
      ss.get_colored_name(),
      '指了指 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 一眼，点点头然后离开了。',
    ]);
    await ss.say_and_wait([
      '哎呀，这下可麻烦了，',
      sys_get_colored_callname(400, 25),
      '可是个较真的性子呢，而且更麻烦的是，我也是哦。',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 从背后抱住 ',
      me.get_colored_name(),
      '，让 ',
      me.get_colored_name(),
      ' 感觉更像是遇到一只猫咪了。',
    ]);
    await ss.say_and_wait([
      callname,
      '，你会帮我的对吧，毕竟 ',
      sys_get_colored_callname(400, 25),
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
      me.get_colored_name(),
      '，似乎时间在这一刻定格，让',
      ss.sex,
      '尽情的享受着这个时刻。',
    ]);
  };

  handlers[95 + 29] = async (ss, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:400:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    await print_event_name('又是一年的夏季合宿', ss);
    await era.printAndWait([
      '又是一年的海边，',
      ss.get_colored_name(),
      ' 身上的泳装已经从学校配发的泳装换成了',
      ss.sex,
      '自己喜欢的非常大胆的黑色比基尼泳装。',
    ]);
    await era.printAndWait([
      '匀称而丰满的肉体在 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 的手，带着 ',
      me.get_colored_name(),
      ' 走进了这片沙滩，开始了今年夏日合宿的训练和玩耍。',
    ]);
  };
};
