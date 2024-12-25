const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[42] = async (kitaru, me, callname, flags) => {
    await print_event_name('所谓白兴大人', kitaru);
    await era.printAndWait('白兴大人');
    await era.printAndWait([
      '这位神明几乎整天被挂在 ',
      kitaru.get_colored_name(),
      ' 的嘴边。',
    ]);
    await era.printAndWait([
      '训练的好坏，天气的转变，乃至是地球的转动，都能被 ',
      kitaru.get_colored_name(),
      ' 以某种形式和',
      kitaru.sex,
      '口中的白兴大人关联到一起。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 询问过很多次，得到的却是',
      kitaru.sex,
      '语焉不详的描述。',
    ]);
    await era.printAndWait('直到有一天……');
    await me.say_and_wait('所以，我也算开运道具吗？！');
    await kitaru.say_and_wait('欸！可是有着承蒙关照之人能带来幸运的说法呢！');
    await era.printAndWait([
      '在',
      kitaru.sex,
      '几近恳求的态度下，',
      me.get_colored_name(),
      ' 只好答应了和',
      kitaru.sex,
      '一起出门开运的请求。',
    ]);
    await kitaru.say_and_wait([
      '首先是粗点心店吧！就在这里占卜一下 ',
      callname,
      ' 的运势！',
    ]);
    await kitaru.say_and_wait('大吉！');
    await kitaru.say_and_wait('开了一个好头呢！');
    await kitaru.say_and_wait('然后是那家杂货店！');
    await kitaru.say_and_wait('这个达摩看起来很好的样子！');
    await kitaru.say_and_wait('哦！原来眼睛已经被画上了吗？');
    await era.printAndWait('忙碌了差不多一天，几乎逛遍了商店街的每一个角落。');
    await kitaru.say_and_wait(
      '欸嘿，果然还是应该来神社收尾啊！拍拍手祈愿，感谢这一天平安无事！',
    );
    await kitaru.say_and_wait('……');
    await kitaru.say_and_wait('唔，该做的都做完了呢！');
    await kitaru.say_and_wait([callname, '！我准备好了！']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 看见',
      kitaru.sex,
      '突然底下了头，随后，像是下定了什么决心似的，望向了 ',
      me.get_colored_name(),
      '。',
    ]);
    await kitaru.say_and_wait([
      callname,
      ' 一直不是很好奇白兴大人的事情吗……？',
    ]);
    await kitaru.say_and_wait([
      '其实，那个是',
      kitaru.get_bigger_sibling_sex_title(),
      '告诉我的神明！',
    ]);
    await era.printAndWait(
      '用双手捂着脑袋，将那本就乱糟糟的橙发弄的更加混乱，就像是强迫着自己回忆一样。',
    );
    await kitaru.say_and_wait([
      '记得小时候，我经常被拿去和事事都能做好的',
      kitaru.get_bigger_sibling_sex_title(),
      '相比较。',
    ]);
    await kitaru.say_and_wait('那时我跑的很慢，甚至连闸门都不敢出。');
    await kitaru.say_and_wait([
      '但',
      kitaru.get_bigger_sibling_sex_title(),
      '和我不同，',
      kitaru.sex,
      '是位很优秀的逃马呢！连特雷森都对',
      kitaru.sex,
      '发出过邀请哦！',
    ]);
    await kitaru.say_and_wait([
      '为了安慰我，',
      kitaru.get_bigger_sibling_sex_title(),
      '会给我做每次都是大吉的占卜，还有就是各种开运物品！',
    ]);
    await kitaru.say_and_wait([
      '还有白兴大人的加持！',
      kitaru.get_bigger_sibling_sex_title(),
      '告诉我，只要有白兴大人的加持，就能变得幸运！',
    ]);
    await kitaru.say_and_wait('所以，我一直都在相信着白兴大人！');
    await kitaru.say_and_wait('直到……');
    await kitaru.say_and_wait(['直到后面', kitaru.sex, '去世了。']);
    await kitaru.say_and_wait('而……');
    await kitaru.say_and_wait([
      kitaru.sex,
      '总是说，让白兴大人多多庇佑我，但……也许正是白兴大人没有庇佑',
      kitaru.sex,
      '。',
    ]);
    await kitaru.say_and_wait('有时我在想，是不是因为……要是我……');
    await era.printAndWait([
      '先是眼角出现了些许泪光，而后一滴，两滴，泪珠断断续续的叩响了 ',
      kitaru.get_colored_name(),
      ' 脚下的石板路。',
    ]);
    await kitaru.say_and_wait([
      '抱歉……自顾自的说了这么多，',
      callname,
      ' 一定觉得我很烦吧……',
    ]);
    era.printButton('递出纸巾', 1);
    await era.input();
    await kitaru.say_and_wait('嗯……');
    await kitaru.say_and_wait('谢谢……');
    await era.printAndWait([
      '在擦干眼泪之后，',
      kitaru.get_colored_name(),
      ' 狠狠地甩了几下头，而后再次尝试露出往日的笑容。',
    ]);
    await kitaru.say_and_wait('不能哭……不能哭……');
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '最喜欢看见我的笑容了……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 听见 ',
      kitaru.get_colored_name(),
      ' 在不停地喃喃自语，而后又几乎是自责，乃至愧疚般的扯着自己的耳朵与尾巴。',
    ]);
    await era.printAndWait([
      kitaru.get_teen_sex_title(),
      '近乎疯狂的，想要逃避掉自己正在哭泣的现实。',
    ]);
    await kitaru.say_and_wait('唔！');
    era.printButton('伸出手', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 将',
      kitaru.sex,
      '拥入怀中，尝试让',
      kitaru.sex,
      '冷静下来，不断流出的泪水，以至于让 ',
      me.get_colored_name(),
      ' 的胸口都湿了一大片。',
    ]);
    await era.printAndWait(['']);
    await era.printAndWait([
      '寂寥无人的神社中，',
      me.get_colored_name(),
      ' 默默地抚摸着 ',
      kitaru.get_colored_name(),
      ' 的头发，直到',
      kitaru.sex,
      '的颤抖渐渐平息。',
    ]);

    flags.wait_flag =
      get_skills_and_print_in_event(56, [200831]) || flags.wait_flag;
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    flags.wait_flag = sys_change_motivation(56, -3) || flags.wait_flag;
  };

  handlers[47 + 1] = async (kitaru, me, callname, flags) => {
    await print_event_name('选召之人', kitaru);
    await era.printAndWait('又到了初诣的时候');
    if (era.get('flag:当前声望') >= 500) {
      await era.printAndWait([
        '依据习惯，特雷森学院的训练员往往会和自己负责的赛',
        kitaru.get_uma_sex_title(),
        '一同进行这个仪式。',
      ]);
    } else {
      await era.printAndWait([
        '来自特雷森内部的手册上，清楚无疑的写着，请尽量与自己负责的担当赛',
        kitaru.get_uma_sex_title(),
        '一同进行。',
      ]);
    }
    await era.printAndWait([
      '在事先同 ',
      kitaru.get_colored_name(),
      ' 约定好了行程之后，',
      kitaru.sex,
      '没有向往常那样与 ',
      me.get_colored_name(),
      ' 一同在校园大门前见面之后再前往目的地。',
    ]);
    await era.printAndWait([
      '和先前',
      kitaru.sex,
      '说的一样，原本寂静冷清的神社此刻终于算是有了些人气，三三两两的参拜客们并在一起，谈笑声不断响起。',
    ]);
    await era.printAndWait('此间神社巫女为众人祈福的舞蹈开始了。');
    await era.printAndWait('「咚！」');
    await era.printAndWait([
      me.get_colored_name(),
      '听见鼓声响起，而后是三味线的加入。',
    ]);
    await era.printAndWait([
      '表演开始了，',
      kitaru.get_colored_name(),
      ' 仍不知所踪。',
    ]);
    await era.printAndWait('「哗啦！」');
    await era.printAndWait(
      '然后神乐铃的声音响起，代表着属于此间神社的巫女登场。',
    );
    await era.printAndWait([
      '舞台上的',
      kitaru.get_uma_sex_title(),
      '正随着富有韵律感的音乐翩翩起舞。',
    ]);
    await era.printAndWait(
      '即使是如此寒冷的天气，周围人们的欢呼声也是丝毫不减。',
    );
    await era.printAndWait([
      '一年以来人们积攒的疲惫与劳累，正随着舞台上那橘发金眼的',
      kitaru.get_uma_sex_title(),
      '悄然曼妙的请神舞蹈下悄然脱落，无声无息。',
    ]);
    await era.printAndWait([
      '是啊，所谓',
      kitaru.get_uma_sex_title(),
      '，不正是活着的，现人神之类的生灵吗？',
    ]);
    await era.printAndWait([
      '只不过，',
      me.get_colored_name(),
      ' 是知道那位正翩翩起舞的现人神的身份的。',
    ]);
    await era.printAndWait([
      '那正是迟迟不露面的 ',
      kitaru.get_colored_name(),
      '，随着',
      kitaru.sex,
      '手中神乐铃的摇动，清澈的铃声洁净着周围的环境和祈祷者的心灵。',
    ]);
    await era.printAndWait([
      '平日里一向脱线的',
      kitaru.sex,
      '，居然能露出如此圣严的神态，倒是颇让 ',
      me.get_colored_name(),
      ' 意外的。',
    ]);
    era.drawLine({ content: '待兼福来家的神社 神乐结束后' });
    await era.printAndWait([
      '几乎已是凌晨时分，为了自家神社忙前忙后的 ',
      kitaru.get_colored_name(),
      ' 总算得以有片刻休息。',
    ]);
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '那家伙几乎是一刻不停的跑到了 ',
      me.get_colored_name(),
      ' 的面前，带动着巫女服的振袖一摆一摆的',
    ]);
    await kitaru.say_and_wait([
      '非常非常抱歉！毕竟是难得的，神社里有点人的时候！忘了应该要提前和 ',
      callname,
      ' 说一下的！',
    ]);
    await kitaru.say_and_wait(
      '父亲毕竟是这里的宫司呢，为此我也得好好努力才行！',
    );
    await kitaru.say_and_wait('不过，作为回报……');
    await kitaru.say_and_wait('现在是巫女的单独服务时间哦！');
    era.printButton('「阿福这么说，其他参拜客们不会嫉妒吗？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '诶诶！',
      callname,
      ' 可是受到了白兴大人选召的人啊！',
    ]);
    await era.printAndWait(
      '两人安静而单调的脚步声，就在神社中响起，最后二人来到了神社的塞钱箱前。',
    );
    await kitaru.say_and_wait(['那么！', callname, ' 的愿望是什么呢！']);
    await kitaru.say_and_wait(
      '现在的我可是灵力的最顶点呢！无论是什么愿望都会实现的！',
    );
    await kitaru.say_and_wait('甚至能听到白兴大人的声音呢！');
    await era.printAndWait([
      '穿着兰花般素白巫女服的 ',
      kitaru.get_colored_name(),
      '，握住了 ',
      me.get_colored_name(),
      ' 的手。',
    ]);
    era.printButton('「那自然是希望阿福能赢下接下来的青叶赏了」', 1);
    await era.input();
    await kitaru.say_and_wait('诶……');
    await kitaru.say_and_wait([callname, ' 的愿望是这个吗？']);
    await kitaru.say_and_wait('我明白了！我会努力的！');
    await kitaru.say_and_wait([
      '那么！',
      callname,
      ' 再见！可以的话！明天也要来哦！',
    ]);
    await era.printAndWait([
      '目送 ',
      me.get_colored_name(),
      ' 离开之后，',
      kitaru.get_colored_name(),
      ' 回去了',
      kitaru.sex,
      '位于神社的居所。',
    ]);
    await era.printAndWait([
      '不过，当 ',
      me.get_colored_name(),
      ' 迈出神社的朱红鸟居之时，心底莫名响起了一道声音。',
    ]);
    await era.printAndWait('而后，周围的世界几乎被纯白所吞没。');
    era.drawLine({ content: '？？？' });
    await typing('选召之人/受选者，你/我们的愿望/旨意是什么？');
    era.println();
    era.printButton('激振的气氛（全属性+7）', 1);
    era.printButton('战栗的气息（速度+30）', 2);
    era.printButton('轻微的破绽（技能点数+40）', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await kitaru.print_and_wait('五感变得敏锐……');
        break;
      case 2:
        await kitaru.print_and_wait('轻点脚尖，轻快而又舒适……');
        break;
      case 3:
        await kitaru.print_and_wait('系带解开——窗户外敞——锁像上过油一样转动……');
    }

    era.set('cflag:56:节日事件标记', 0);
    era.println();
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
      ' 回过神来的时候，已经坐上了返回特雷森的末班车。',
    ]);
    switch (ret) {
      case 1:
        flags.wait_flag = get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
        break;
      case 2:
        flags.wait_flag = get_attr_and_print_in_event(56, [30, 0, 0, 0, 0], 0);
        break;
      case 3:
        flags.wait_flag = get_attr_and_print_in_event(56, undefined, 40);
    }
  };

  handlers[47 + 5] = async (kitaru, me, callname, flags) => {
    await print_event_name('仪式理论', kitaru);
    await era.printAndWait('随着青叶赏日期的逼近，训练的强度也逐渐降了下来。');
    await era.printAndWait([
      '靠在栏杆上，望着那些正在训练场上挥洒汗水的赛',
      kitaru.get_uma_sex_title(),
      '们，',
      me.get_colored_name(),
      ' 若有所思。',
    ]);
    await era.printAndWait([
      '赛',
      kitaru.get_uma_sex_title(),
      '踏上赛场的理由有很多。',
    ]);
    await era.printAndWait(['而 ', kitaru.get_colored_name(), '……']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 记得',
      kitaru.sex,
      '说过的话。',
    ]);
    await kitaru.say_and_wait(
      [
        '是名叫待兼福来的',
        kitaru.get_teen_sex_title(),
        '！为了实现幸福！成为神明！命运中的必经之路！',
      ],
      true,
    );
    await era.printAndWait('那对于菊花赏的莫名执念，究竟是因为什么？');
    await era.printAndWait([
      '怀着疑问的 ',
      me.get_colored_name(),
      ' 在帮着那家伙擦完汗之后，再次向 ',
      kitaru.get_colored_name(),
      ' 提出了这个问题。',
    ]);
    await kitaru.say_and_wait('诶……我也不太记得了。');
    await kitaru.say_and_wait('大概是和某人的约定吧。');
    await era.printAndWait([
      '自上次在神社里的痛哭之后，',
      me.get_colored_name(),
      ' 再也没有和 ',
      kitaru.get_colored_name(),
      ' 聊过有关于',
      kitaru.get_bigger_sibling_sex_title(),
      '，甚至尽力避免涉及家庭的相关话题。',
    ]);
    await era.printAndWait([
      '不过，对于赛',
      kitaru.get_uma_sex_title(),
      '而言，为何奔跑可是至关重要的事情，考虑到 ',
      kitaru.get_colored_name(),
      ' 的交际圈，能和',
      kitaru.sex,
      '立下约定的会是……？',
    ]);
    era.printButton(`「和${kitaru.get_bigger_sibling_sex_title()}吗？」`, 1);
    era.printButton('「和白兴大人吗？」', 2);
    await era.input();
    await kitaru.say_and_wait('也许吧……唔。');
    await kitaru.say_and_wait(
      '除非刻意去想，否则童年的记忆总像是蒙上了一层雾那样。',
    );
    await kitaru.say_and_wait(['话说，', callname, ' 有听过类似的事情吗？']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 将吸满了汗的热腾腾毛巾搭在了一旁，按住了试图挑起来的 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    era.printButton('「什么事情？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '赛',
      kitaru.get_uma_sex_title(),
      '通过献祭变成神明什么的？',
    ]);
    await era.printAndWait([
      '本来在提到',
      kitaru.get_bigger_sibling_sex_title(),
      '后略有不快的面容，突然变得的明快起来。',
    ]);
    await era.printAndWait([
      '话题的突然转向令 ',
      me.get_colored_name(),
      ' 丝毫摸不着头脑。',
    ]);
    era.printButton('「献祭？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '就是那种向神明呈上礼品的仪式啦！对于赛',
      kitaru.get_uma_sex_title(),
      '而言，毫无疑问的就是赛跑后的胜利呢！',
    ]);
    await kitaru.say_and_wait(
      '不是也有书本提到赛跑本来就是献给三女神的舞蹈什么的嘛！',
    );
    await kitaru.say_and_wait('之前在家里阁楼的藏书中瞥见过……');
    await kitaru.say_and_wait(
      '至少对我而言，仪式的道路中有菊花赏，这我毫无疑问的能够确定哦！',
    );
    await era.printAndWait([
      '这样说着，给周围的环境无形中添了几分秘氛的 ',
      kitaru.get_colored_name(),
      ' 继续去训练了。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[47 + 18] = async (kitaru, me, callname, flags) => {
    const suzuka = get_chara_talk(2);
    await print_event_name('门槛前', kitaru);
    await era.printAndWait([
      '休息日，',
      me.get_colored_name(),
      ' 正坐在办公室里，若有所思',
    ]);
    await era.printAndWait([
      '最开始，只是出于训练员的责任感而和 ',
      kitaru.get_colored_name(),
      ' 签订了担当契约。',
    ]);
    await era.printAndWait([
      '但这位',
      kitaru.get_teen_sex_title(),
      '却远比 ',
      me.get_colored_name(),
      ' 想象的要麻烦，',
      me.get_colored_name(),
      ' 就像是撞上了卡律布狄斯的船长，被扯进了几乎是看不见底的麻烦漩涡中。',
    ]);
    await era.printAndWait([
      '尤其是青叶赏后，',
      kitaru.sex,
      '的情绪变得越来越不稳定。',
    ]);
    await era.printAndWait([
      '不仅是在训练中，平日里的 ',
      kitaru.get_colored_name(),
      ' 也变得越发的不安。',
    ]);
    await era.printAndWait([
      '即使是面对邀请来并走的逃马同学，',
      kitaru.sex,
      '也会在终盘前就失速。',
    ]);
    // 无声铃鹿的差分 需要吗？
    if (era.get('cflag:2:招募状态') === 1) {
      await suzuka.say_and_wait([
        sys_get_callname(2, 0),
        '，',
        sys_get_colored_callname(2, 56),
        '没事吧？',
      ]);
      await era.printAndWait([
        '队伍里的其他成员也对 ',
        kitaru.get_colored_name(),
        ' 现在的状况有所注意。',
      ]);
    }
    await era.printAndWait('那么，现在该怎么办呢？');
    era.printButton('（继续前行吧）', 1);
    await era.input();
    await era.printAndWait([
      '不会有别的答案了吧，毕竟，那家伙可是管 ',
      me.get_colored_name(),
      ' 叫做命定之人啊。',
    ]);
    await era.printAndWait('是时候开始工作了……');
    await era.printAndWait(
      'PTSD，即创伤后应激障碍，通常的病因是个体经历、目睹或遭遇到一个或多个涉及自身或他人的实际死亡。',
    );
    await era.printAndWait(
      '出于保护机制，大脑会自动屏蔽事发时的记忆，或用虚构加以替换，即所谓的选择性遗忘，不能回忆起与创伤有关的事件细节。',
    );
    await era.printAndWait([
      '而平时的 ',
      kitaru.get_colored_name(),
      ' 才能保持',
      kitaru.get_teen_sex_title(),
      '的活泼，只有提到与',
      kitaru.sex,
      '',
      kitaru.get_bigger_sibling_sex_title(),
      '相关的事物时才会流露出悲伤正是因为如此。',
    ]);
    await era.printAndWait([
      '继续据此推测，当时赛场上的情景，配合着赛跑本就紧张的高压，一定触发了 ',
      kitaru.get_colored_name(),
      ' 的应激。',
    ]);
    await era.printAndWait('即创伤性再体验症状。');
    await era.printAndWait([
      '那么，童年时的 ',
      kitaru.get_colored_name(),
      '，究竟经历了什么？',
    ]);
    await era.printAndWait([
      '如果是涉及到赛',
      kitaru.get_uma_sex_title(),
      '的事故话，当地的报纸应该会有相关报道。而 ',
      kitaru.get_colored_name(),
      ' 曾经也透露过',
      kitaru.get_bigger_sibling_sex_title(),
      '受到特雷森邀请的事实。',
    ]);
    await era.printAndWait(['调查开始，', me.get_colored_name(), ' 决定从……']);
    era.printButton('翻阅旧报纸', 1);
    era.printButton('查阅特雷森的过往新生档案', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '快十年前的一张报纸，提到了一位',
        kitaru.get_uma_sex_title(),
        '在训练的过程中因事故去世，由于是当地神社宫司的女儿，在当时引起了一阵不小的风波。',
      ]);
      await era.printAndWait(
        '这大概也解释了为何神社的参拜客会比其他地方少那么多。',
      );
      await era.printAndWait([
        '在那张事故现场的照片上，',
        me.get_colored_name(),
        ' 看到了一个熟悉的身影。',
      ]);
      await era.printAndWait([
        '当时出事的时候，',
        kitaru.get_colored_name(),
        ' 也在场，',
        kitaru.sex,
        '亲眼看着自己的',
        kitaru.get_bigger_sibling_sex_title(),
        '用逃马在终盘时的冲刺速度撞在了护栏上。',
      ]);
      await era.printAndWait([
        '尽管大脑的保护机制将真实的记忆埋于其下，但在全神贯注的青叶赏赛场上，终盘前的逃马冲刺时那似曾相识的画面，还是引发了 ',
        kitaru.get_colored_name(),
        ' 的心病。',
      ]);
    } else {
      await era.printAndWait([
        '照片上是和 ',
        kitaru.get_colored_name(),
        ' 有着几分神似的长发',
        kitaru.get_uma_sex_title(),
        '。',
      ]);
      await era.printAndWait([
        '优秀的逃马，连特雷森都对',
        kitaru.sex,
        '发出过邀请',
      ]);
      await era.printAndWait([
        '而现在，得益于特雷森还算不错的文件备份意识，那封邀请信的复印件及相关材料正躺在 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      await era.printAndWait(
        '一位以菊花赏为目标的逃马……可惜后面由于训练时的意外丧生。',
      );
      await era.printAndWait([
        '当时出事的时候，',
        kitaru.get_colored_name(),
        ' 也在场，',
        kitaru.sex,
        '亲眼看着自己的',
        kitaru.get_bigger_sibling_sex_title(),
        '用逃马在终盘时的冲刺速度撞在了护栏上。',
      ]);
      await era.printAndWait([
        '尽管大脑的保护机制将真实的记忆埋于其下，但在全神贯注的青叶赏赛场上，终盘前的逃马冲刺时那似曾相识的画面，还是引发了 ',
        kitaru.get_colored_name(),
        ' 的心病。',
      ]);
    }
    era.println();
    await era.printAndWait('「咚！咚！咚！」');
    await era.printAndWait([me.get_colored_name(), ' 听见办公室的门响了。']);
    era.printButton('「请进！」', 1);
    await era.input();
    await era.printAndWait([
      '门开了，那位给 ',
      me.get_colored_name(),
      ' 带来了不少麻烦的担当，正怯生生的站在门口，如一只担惊受怕的小狐狸，',
    ]);
    await kitaru.say_and_wait([callname, '！']);
    await kitaru.say_and_wait(['那个，这个是送给 ', callname, ' 的开运道具！']);
    await era.printAndWait([
      '带着明显的歉意，一枚的橙色的御守放在了 ',
      me.get_colored_name(),
      ' 的桌子上。',
    ]);
    await kitaru.say_and_wait('我……我想说……');
    await kitaru.say_and_wait('总之！青叶赏的事情非常抱歉！！！');
    await era.printAndWait([
      me.get_colored_name(),
      ' 揉了揉',
      kitaru.sex,
      '冲 ',
      me.get_colored_name(),
      ' 低下的头，直到',
      kitaru.sex,
      '的马耳再次欢欣的敲打着 ',
      me.get_colored_name(),
      ' 的手背。',
    ]);
    await era.printAndWait('气氛再次如往常一样变得融洽了起来。');
    await kitaru.say_and_wait(['那 ', callname, '！下一次比赛的训练安排？']);
    await era.printAndWait([
      '按计划，本来是该继续出走日本德比的，但是 ',
      kitaru.get_colored_name(),
      ' 现在这个情况，或许正常完赛都会是问题。',
    ]);
    await kitaru.say_and_wait('是要取消吗？！');
    await era.printAndWait([
      kitaru.sex,
      '定然是从 ',
      me.get_colored_name(),
      ' 变得沉默的表情中察觉到了什么，眼瞳里闪烁着不安。',
    ]);
    era.printButton('点头', 1);
    await era.input();
    await era.printAndWait([
      '「可能要取消」',
      me.get_colored_name(),
      ' 这么告诉了',
      kitaru.sex,
    ]);
    await kitaru.say_and_wait('欸欸欸！');
    await kitaru.say_and_wait('没问题，绝对没问题的！');
    await kitaru.say_and_wait('我可以参加比赛的！');
    await era.printAndWait([
      '可以说是谄媚的往 ',
      me.get_colored_name(),
      ' 这边靠拢，不断地对 ',
      me.get_colored_name(),
      ' 说着恳求的话语。',
    ]);
    await era.printAndWait([
      '这真的是 ',
      kitaru.get_colored_name(),
      ' 吗？倒更像是救助站里尽力在新主人面前表现自己的宠物？',
    ]);
    era.printButton('「阿福，你在害怕什么吗？」', 1);
    await era.input();
    await kitaru.say_and_wait('诶！');
    await kitaru.say_and_wait('不是的！');
    await kitaru.say_and_wait('我只是……那个……');
    await kitaru.say_and_wait('唉……');
    await kitaru.say_and_wait([
      callname,
      ' 一定觉得我很没用吧，总是吵吵嚷嚷的，现在，现在快连比赛都跑不了了。',
    ]);
    if (
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
        (e) => e > 0,
      ).length > 2
    ) {
      //担当数是否大于2
      await kitaru.say_and_wait('比你的其他担当差了那么多……');
    } else {
      await kitaru.say_and_wait([
        '第一位担当就是我这样的',
        kitaru.get_uma_sex_title(),
        '，是大凶吧。',
      ]);
    }
    await kitaru.say_and_wait([
      callname,
      ' 是',
      kitaru.get_bigger_sibling_sex_title(),
      '之后，第二个愿意认可我的人……',
    ]);
    await kitaru.say_and_wait('但我这么没用……');
    await kitaru.say_and_wait('我，我真的很害怕……');
    await kitaru.say_and_wait([
      callname,
      ' 也会像是',
      kitaru.get_bigger_sibling_sex_title(),
      '一样，抛下我一个人吗？',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的声音，像是从冰窟中传来。',
    ]);
    await era.printAndWait([
      '尽管已临近夏季，但此时，办公室内空气却冻得 ',
      me.get_colored_name(),
      ' 皮肤发脆，仿佛玻璃上都结了霜。',
    ]);
    era.printButton('「阿福，你还记得我们最开始见面时的仪式吗？」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), ' 伸出了手']);
    await kitaru.say_and_wait('嗯，拉钩仪式！');
    await kitaru.say_and_wait([
      '是',
      kitaru.get_bigger_sibling_sex_title(),
      '教给我的哦，当时和',
      kitaru.sex,
      '约定好了……',
    ]);
    await kitaru.say_and_wait('当时在青叶赏的终盘上……我全想起来了……');
    await kitaru.say_and_wait([
      '连我现在要去菊花赏的目标，也是和',
      kitaru.sex,
      '的约定呢。',
    ]);
    await era.printAndWait([
      '和',
      kitaru.get_bigger_sibling_sex_title(),
      '的约定，难怪 ',
      kitaru.get_colored_name(),
      ' 会对菊花赏如此看重。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的话语声逐渐低了下来，直到变成了那种因为抑制哭泣而变得嘶哑的声音，',
    ]);
    await era.printAndWait([
      '早有研究表明，处在高压环境下的人们更容易表现出迷信的行为，为的是尽力让事情回到自己的掌控中。',
    ]);
    await era.printAndWait([
      '对于 ',
      kitaru.get_colored_name(),
      ' 而言，早夭的',
      kitaru.get_bigger_sibling_sex_title(),
      '，因丧女后而变得有些严厉的母亲，神社充斥着的神秘主义氛围。',
    ]);
    await era.printAndWait([
      kitaru.get_bigger_sibling_sex_title(),
      '日常用来安慰',
      kitaru.sex,
      '的白兴大人，毫无疑问成了',
      kitaru.sex,
      '紧握的救命稻草。',
    ]);
    await era.printAndWait([
      '而',
      kitaru.sex,
      '平日里还能维持那个开朗乐观的表象，只是偶尔会在与 ',
      me.get_colored_name(),
      ' 相处的时候露出一点不对劲来，就已经算是大吉了。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 注视着你，泛着泪光的失焦眸子，又像是在祈求着不知等在何处的白兴大人的答复。',
    ]);
    await era.printAndWait([
      '那么，毫无疑问，现在该是 ',
      me.get_colored_name(),
      ' 把自己的担当拉回现实中的时候了。',
    ]);
    era.printButton('「不会的！」', 1);
    await era.input();
    era.printButton('「阿福，我不会抛弃你的！」', 1);
    await era.input();
    era.printButton('「和最开始一样，做个约定吧！」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 尽力从把右手从 ',
      kitaru.get_colored_name(),
      ' 的紧握中挣脱，而后握拳，伸出了自己的小拇指。',
    ]);
    era.printButton(
      '「当你陷入困惑，陷入痛苦时，请想起我，我会与你一同承担，让我也成为你奔跑的理由之一吧！」',
      1,
    );
    await era.input();
    await kitaru.say_and_wait('呜……');
    await kitaru.say_and_wait([callname, '……']);
    await era.printAndWait([
      kitaru.sex,
      '颤颤巍巍地伸出了小拇指，完成了当初神社前别无二致的拉钩仪式。',
    ]);
    await kitaru.say_and_wait('诶嘿……');
    await era.printAndWait([
      '琥珀色的瞳光摇晃着，倒映出了 ',
      me.get_colored_name(),
      ' 注视着',
      kitaru.sex,
      '的眼眸。',
    ]);
    era.printButton('「怎么了！」', 1);
    await era.input();
    await era.printAndWait([
      kitaru.sex,
      '望着 ',
      me.get_colored_name(),
      ' 那过于严肃的表情，突然破涕为笑。',
    ]);
    await kitaru.say_and_wait([
      '没……那个……只是在想……当时占卜出的命定之人是 ',
      callname,
      ' 真是太好了！',
    ]);
    await kitaru.say_and_wait(
      '命定之人都这样说了，如果我还宣布日本德比停止出走，不就和参拜不带上祭品没什么两样吗？',
    );
    await kitaru.say_and_wait([callname, '！请相信我吧！']);
    flags.wait_flag = get_attr_and_print_in_event(56, [7, 0, 7, 7, 0], 0);
  };

  handlers[47 + 21] = async (kitaru, me, callname, flags) => {
    await print_event_name('开运投射', kitaru);
    await era.printAndWait([
      '训练的休息时间，',
      me.get_colored_name(),
      ' 和 ',
      kitaru.get_colored_name(),
      ' 靠在栏杆上，有一搭没一搭的聊着。',
    ]);
    await kitaru.say_and_wait('呃……菊花赏……不管怎么想都觉得不行。');
    await kitaru.say_and_wait('从来没有跑过那么长的距离。');
    await kitaru.say_and_wait('不过在那之前，还得跑神户新闻杯。');
    await kitaru.say_and_wait('毕竟，之前的粉丝数，跑菊花赏有点勉强……');
    era.printButton('「看起来很不安啊？」', 1);
    await era.input();
    await kitaru.say_and_wait('嗯……');
    await kitaru.say_and_wait('占卜不出结果呢……');
    await kitaru.say_and_wait([
      '不过这是和我',
      kitaru.get_bigger_sibling_sex_title(),
      '的约定！我一定会实现的！',
    ]);
    await kitaru.say_and_wait(['我用拉勾仪式向', kitaru.sex, '保证过的！']);
    if (check_aim_race(new RaceHistory(56).get(), race_enum.toky_yus, 1, 20)) {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 在日本德比终盘的冲刺令 ',
        me.get_colored_name(),
        ' 难忘，似乎',
        kitaru.sex,
        '完全走出了自己内心的困境。',
      ]);
    }
    await era.printAndWait([
      '况且，这种终盘爆发力，倘若利用好的话，势必能成为',
      kitaru.sex,
      '出奇制胜的关键。',
    ]);
    era.printButton('「可以继续训练了？」', 1);
    await era.input();
    await kitaru.say_and_wait('诶！');
    await kitaru.say_and_wait(['嗯……毕竟有 ', callname, ' 陪着我嘛！']);
    await kitaru.say_and_wait([callname, ' 是我最强的开运物品哦！']);
    await kitaru.say_and_wait('只要命定之人在身边的话！我应该会是无敌的吧！');
    await era.printAndWait('看起来像是开玩笑？');
    await era.printAndWait([
      '不，',
      me.get_colored_name(),
      ' 能确定，',
      kitaru.sex,
      '说出这番话的时候是真心的。',
    ]);
    await era.printAndWait('PTSD的疗法之一是精神分析疗法。');
    await era.printAndWait(
      '该疗法的理论框架之一是依恋理论，内容大概是解释了各种感情上的联结和纽带。',
    );
    await era.printAndWait([
      '如果 ',
      me.get_colored_name(),
      ' 推论正确的话，',
      kitaru.get_colored_name(),
      '，正在逐步的，把包括 ',
      me.get_colored_name(),
      ' 在内的各项开运物品视为',
      kitaru.sex,
      '走到现在的精神支柱，即自我意愿的投射。',
    ]);
    await era.printAndWait('这……应该是好事吧？');
    flags.wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 20);
  };
};
