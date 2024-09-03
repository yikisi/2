const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[34] = async (urara, me, in_urara, callname, edu_marks, flags) => {
    await print_event_name('大家最喜欢的笑容？', urara);
    await in_urara.say_as_unknown_and_wait(
      '今天参加了某场活动中举办的热身赛的乌拉拉，又一次意料之外情理之中的输掉了。',
    );
    await in_urara.say_as_unknown_and_wait([
      '是很标准的展开呢，不过训练员',
      me.get_adult_sex_title(),
      '（您）可就相当头疼了。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '怎么回事呢？回去的路上，有人大概会在思考出答案前一直心不在焉吧，不过……',
    );
    era.drawLine();
    await era.printAndWait([
      '不过正赛明明能跑赢，为什么活动赛还是会落在最后呢？',
      urara.get_colored_name(),
      ' 也不是会随便应付的',
      urara.get_uma_sex_title(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 心情的确稳定，可说着下次会赢的 ',
      urara.get_colored_name(),
      ' 真同表面一样开心吗？',
    ]);
    await era.printAndWait([
      '牵着 ',
      urara.get_colored_name(),
      ' 的小手走在来往的人流中，',
      me.get_colored_name(),
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
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        '我不会跑丢的哦？平常不也是这么拉着手的吗？',
        callname,
        ' 不用拉那么紧的！',
      ]);
      await era.printAndWait([
        '紧贴在 ',
        me.get_colored_name(),
        ' 身边，',
        urara.get_colored_name(),
        ' 笑着轻轻回握了 ',
        me.get_colored_name(),
        ' 的手指。',
      ]);
      await urara.say_and_wait([
        '还有呢，我觉得笑起来更适合 ',
        callname,
        '，所以不要皱着眉头想事情哦！',
      ]);
      await era.printAndWait([
        '在担当的笑容中，',
        me.get_colored_name(),
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
        me.get_colored_name(),
        ' 牵住的手，',
        urara.get_colored_name(),
        ' 的笑容中似乎有点勉强。',
      ]);
      await urara.say_and_wait(
        '路上的人很多哦？如果不注意的话会有危险的，一起开开心心的回家比较好哦？',
      );
      await era.printAndWait([
        '在担当看似抱怨的善意提醒中，回过神来的 ',
        me.get_colored_name(),
        ' 干劲放松了自己的身体。',
      ]);
      await era.printAndWait([
        '不过是什么时候开始的来着，虽然心情时常变化，但 ',
        urara.get_colored_name(),
        ' 总会自然的拉起 ',
        me.get_colored_name(),
        ' 的手。',
      ]);
      await era.printAndWait([
        '现在的',
        urara.sex,
        '究竟对 ',
        me.get_colored_name(),
        ' 抱有的什么感情呢？还是说',
        urara.sex,
        '其实还没有完全的异性认识……',
      ]);
    }
    era.println();
    await era.printAndWait([
      '在大多数人眼里，或许这不过是监护人带小孩子的行为，但对 ',
      me.get_colored_name(),
      ' 来说却有另外的含义。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 被 ',
      urara.get_colored_name(),
      ' 打动、吸引，因而成为了',
      urara.sex,
      '的训练员，但如今每次与',
      urara.sex,
      '接触都像是在削减 ',
      me.get_colored_name(),
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
    await in_urara.say_as_unknown_and_wait([
      '但就在训练员',
      me.get_adult_sex_title(),
      '（您）即将陷入另一种怀疑时，却听见了擦肩而过的议论声。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '那是两位年轻学生模样的路人，对 ',
      urara.get_colored_name(),
      ' 的议论。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '路人A「那边的',
      urara.get_child_sex_title(),
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
      me.get_colored_name(),
      ' 依旧在路人持续的妄议中逐渐变得有些焦躁。',
    ]);
    await era.printAndWait([
      '自己被怎么评价都无所谓，可',
      urara.get_colored_name(),
      '就算很弱，也不应被人这么说闲话。',
    ]);
    await era.printAndWait([
      '但正当 ',
      me.get_colored_name(),
      ' 打算带 ',
      urara.get_colored_name(),
      ' 远离是非之地时，小',
      urara.get_uma_sex_title(),
      '却在仰头看到 ',
      me.get_colored_name(),
      ' 没藏好的表情后，主动放开了手。',
    ]);

    era.printButton('「等……」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 的行动还是慢了一步，在 ',
      me.get_colored_name(),
      ' 反应过来时，',
      urara.get_colored_name(),
      ' 就已经站在了正在说',
      urara.sex,
      '闲话的人们面前。',
    ]);
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
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
      urara.get_uma_sex_title(),
      '摇了摇耳朵，清澈的樱瞳中映着两位路人不知所措的表情。',
    ]);
    await era.printAndWait([
      '面对刚才还在说自己闲话的两人，',
      urara.get_colored_name(),
      ' 的表情依旧和往常一样的春意盎然。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～没错哦！我的确并不是厉害的',
      urara.get_uma_sex_title(),
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
    await urara.say_and_wait('所以如果不介意的话，下次可以还来看我的比赛吗？');
    await era.printAndWait('路人A&B「……好，我们、我们会来的，大概……」');
    era.println();
    if (era.get('relation:52:0') > 150) {
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
        urara.get_uma_sex_title(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 的关心，小',
      urara.get_uma_sex_title(),
      '也再次向 ',
      me.get_colored_name(),
      ' 表达出了纯粹的谢意。',
    ]);
    await era.printAndWait([
      '独享着 ',
      urara.get_colored_name(),
      ' 令人安心的笑容，又回想着刚才两人的样子，',
      me.get_colored_name(),
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
      urara.get_uma_sex_title(),
      '来说，粉丝的支持相当重要，而 ',
      urara.get_colored_name(),
      ' 则具有着少见的能让人愿意支援',
      urara.sex,
      '的特质，甚至连 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 这样想着，重新接过 ',
      urara.get_colored_name(),
      ' 伸来的小手，两人拉长的影子在阳光下再次叠在了一起。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '虽然没闹出问题，但意外的令人不快啊，路人的各位。',
    );
    await in_urara.say_as_unknown_and_wait(
      '还有很抱歉的，现在要再耽误一下您的时间了。',
    );
    await in_urara.say_as_unknown_and_wait(
      '虽然这次的问题很轻松，但以后遇见乌拉拉没办法解决的困难，您会怎么做呢？',
    );
    era.printButton('「担当的身心健康也在训练员的职责内啊。」（好感+20）', 1);
    era.printButton(
      `「不会临阵脱逃的，我会去保护${urara.sex}。」（爱慕+10）`,
      2,
    );
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait([
      '不管出于何种理由，都会珍惜『',
      urara.get_colored_actual_name(),
      '』吗？原来如此，『我』所信任的您……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '我明白了，对内我不会与您有所抱怨，所以对外的话，请您继续照顾好',
      urara.sex,
      '。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '也由衷的希望，未来不会有乌拉拉变得裹足不前的那一天。',
    );
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      [0, 0, 0, 5, 5],
      0,
      undefined,
      true,
    );
    flags.wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      flags.wait_flag;
    edu_marks.fan_buff += 5;
  };

  handlers[47 + 12] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    flags,
  ) => {
    await print_event_name('商店街的偶像！', urara);
    await urara.say_and_wait([
      '咳咳……大家好！我是出任这条商店街……『招牌赛',
      urara.get_uma_sex_title(),
      '』？的乌拉拉哦！',
    ]);
    await urara.say_and_wait(
      '虽然还不太明白，但是我会加油的！大家请多指教——！',
    );
    await era.printAndWait([
      '站在商店街的特别舞台上，',
      urara.get_colored_name(),
      ' 正向大家热情的招着手，也偷偷向台下的 ',
      me.get_colored_name(),
      ' 眨着眼睛。',
    ]);
    await era.printAndWait([
      '混在台下人群中的 ',
      me.get_colored_name(),
      '，在收到 ',
      urara.get_colored_name(),
      ' 的信号后，也立刻悄悄地向 ',
      urara.get_colored_name(),
      ' 比出了大拇指。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('这件事的开端，还要从几天前说起。');
    era.drawLine();
    await era.printAndWait([
      '邀请有人望的现役',
      urara.get_uma_sex_title(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 将手中的委托函递给了凑过来的小',
      urara.get_uma_sex_title(),
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
        sys_get_colored_callname(0, 60),
        ' 的意见？毕竟',
        urara.sex,
        '也是很受商店街欢迎的',
        urara.get_uma_sex_title(),
        '。',
      ]);
      await era.printAndWait([
        '要去吗？虽然现在去麻烦',
        urara.sex,
        '不合时宜，更何况这只是 ',
        me.get_colored_name(),
        ' 和 ',
        urara.get_colored_name(),
        ' 的工作，可如果不小心搞砸了就要头疼了……',
      ]);
    }
    era.println();
    await era.printAndWait('算了，患得患失也没用，桥到船头自然直。');
    await urara.say_and_wait([
      '不过 ',
      sys_get_colored_callname(52, 61),
      ' 告诉我，『既然是工作，就要注意礼貌！』，所以我现在很认真哦？',
    ]);
    await urara.say_and_wait(
      '虽然商店街的叔叔阿姨们说保持平常那样就好，但是我会注意的哦？',
    );
    await era.printAndWait([
      '回到商店街的现在，走在 ',
      me.get_colored_name(),
      ' 的身边，',
      urara.get_colored_name(),
      ' 在 ',
      me.get_colored_name(),
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
      urara.get_uma_sex_title(),
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
      urara.sex_code - 1 ? '姐姐' : '哥哥',
      '是赛',
      urara.get_uma_sex_title(),
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
      me.get_colored_name(),
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
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '那个，旁边的这位，您是乌拉拉的训练员吗？',
    );
    await era.printAndWait([
      '但就在 ',
      me.get_colored_name(),
      ' 思考着当下时，一旁路过的女性却悄悄叫住了 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 认出了这位女性是商店街振兴组织的成员，听说是从 ',
      urara.get_colored_name(),
      ' 刚入学起就一直照看着',
      urara.sex,
      '的熟人。',
    ]);

    era.printButton('「嗯，谢谢你们愿意给乌拉拉提供委托。」', 1);
    await era.input();

    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      `该说谢谢的是我们才对，多亏有乌拉拉在，${urara.sex}真的帮了我们很多忙。`,
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '从乌拉拉来了之后，这条商店街也变得更有活力了，之前这条街真的很萧条呢。',
    );
    await era.printAndWait([
      '听着她的感谢，',
      me.get_colored_name(),
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
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '……乌拉拉的实力不怎么强吧？我之前就听说，那孩子总是跑不赢……',
    );
    await era.printAndWait([
      '打断了 ',
      me.get_colored_name(),
      ' 的思绪，眼前的女性在一番犹豫后再次开口了。',
    ]);

    era.printButton('「可乌拉拉也在逐渐变强。」', 1);
    await era.input();

    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 对自己的结论有着能证实的底气，可总觉得气氛不太对劲。',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      `嗯，我相信${urara.sex}一定很努力，但是……${urara.sex}的天赋，还是不如其他人吧？`,
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '所以慢下来也没关系，只要乌拉拉一直开心地奔跑，我们就很受鼓舞了。',
    );
    await CharaTalk.say_by_passer_by_and_wait(
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
      urara.get_uma_sex_title(),
      '的人们，或许是真心认为「只要',
      urara.sex,
      '能开心地奔跑就好了」。',
    ]);
    await era.printAndWait([
      '但是真的只是这样，绝不会是最优解。看着女性在道别后离开的背影，',
      me.get_colored_name(),
      ' 心情复杂的摇了摇头。',
    ]);
    await era.printAndWait([
      '并非否认别人的善意，只是 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 笑着向工作结束后在人群中寻找着 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 递来的果汁。',
    ]);
    await era.printAndWait([
      '站在忙了一天后终于慢下来的 ',
      urara.get_colored_name(),
      ' 旁边，',
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      urara.get_uma_sex_title(),
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
      me.get_colored_name(),
      ' 的身上。',
    ]);

    era.printButton('「一起回去吧。」', 1);
    await era.input();

    await urara.say_and_wait('嗯，要回去了！');
    await era.printAndWait([
      '整理好心情后，',
      me.get_colored_name(),
      ' 向 ',
      urara.get_colored_name(),
      ' 伸出了手，而 ',
      urara.get_colored_name(),
      ' 则笑着接过了 ',
      me.get_colored_name(),
      ' 伸出的手。',
    ]);
    await era.printAndWait([
      '继续奔跑下去就总有办法，不管是并不强大的 ',
      urara.get_colored_name(),
      '，还是积极面对生活的身边人。',
    ]);
    await era.printAndWait([
      '迎着夕阳，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 踏上了归路。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '但仅是这样，单凭着努力，真的能挽救谁吗？',
    );
    await in_urara.say_as_unknown_and_wait(
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
    await in_urara.say_as_unknown_and_wait(
      '……到底算不算意外呢？您是这样想的啊……其实『乌拉拉』也差不多。',
    );
    await in_urara.say_as_unknown_and_wait([
      '我依旧保留我的看法，但我也不希望',
      urara.sex,
      '受伤，所以请以现在的步调照顾好',
      urara.sex,
      '。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '只是无论轻重，只有带着背负与觉悟前进才能变强，不管经历几次都很讨厌……',
    );
    const attr_change = new Array(5).fill(0);
    switch (ret) {
      case 1:
        edu_marks.dad++;
        break;
      case 2:
        edu_marks.gad++;
        break;
      case 3:
        attr_change.fill(2);
        era.set(
          'talent:52:练习X手',
          Math.min(era.get('talent:52:练习X手') + 1, 2),
        );
    }
    attr_change[attr_enum.toughness] += 5;
    attr_change[
      get_random_entry(
        Object.values(attr_enum).filter((e) => e !== attr_enum.toughness),
      )
    ] += 5;
    edu_marks.fan_buff += 5;
    flags.wait_flag =
      get_attr_and_print_in_event(52, attr_change, 0) || flags.wait_flag;
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };
};
