const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 27] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    flags,
  ) => {
    await print_event_name('应援会！？', urara);
    await in_urara.say_as_unknown_and_wait([
      '或许不太准确，但训练员',
      me.get_adult_sex_title(),
      '（您）与乌拉拉，确实跨越了不曾想象的过去。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '真是令人羡慕，就算故事的主角依旧算不上强大，但也已经将路人们抛在身后。',
    );
    await in_urara.say_as_unknown_and_wait(
      '但是被甩在身后的人们呢……抱歉，这不是现在该说的内容。',
    );
    await in_urara.say_as_unknown_and_wait(
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
      me.get_colored_name(),
      ' 的请求，成长后的小',
      urara.uma_sex_title,
      '已经看不到最初时对训练的无所适从了。',
    ]);
    await era.printAndWait([
      '随着双方理解的不断加深，',
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 也习以为常的追赶起',
      urara.sex,
      '热心的步伐。',
    ]);
    await era.printAndWait([
      '而在与 ',
      urara.get_colored_name(),
      ' 一同解决了别人的燃眉之急后，',
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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

    in_urara.say_as_unknown([
      '呃？这个……训练员',
      me.get_adult_sex_title(),
      '（您）怎么说呢——',
    ]);
    era.printButton(
      '「不，我加入什么的先不说，哪有自己给自己应援的啊？」（好感+10）',
      1,
    );
    era.printButton(
      '「我肯定是会想加入的，但乌拉拉是要给自己应援吗？」（爱慕+5）',
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
      me.get_colored_name(),
      ' 对自己的担当「有多招人喜欢」这点的理解也更加深了。',
    ]);
    await era.printAndWait([
      { isBr: true },
      '跟帮助过的老妇人道别后，靠在 ',
      me.get_colored_name(),
      ' 身边的 ',
      urara.get_colored_name(),
      ' 似乎还在思索着关于「后援会」的事情。',
    ]);
    if (era.get('relation:52:0') > 150) {
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
        me.get_colored_name(),
        ' 想起了某些关于',
        urara.uma_sex_title,
        '的说法。',
      ]);
    } else {
      await urara.say_and_wait('大家都很热情呢，但是总觉得有些沉重了！');
      await urara.say_and_wait([
        '不过应该没关系吧！就连 ',
        sys_get_colored_callname(52, 61),
        ' 也说要有压力才能有动力呢！',
      ]);
      await urara.say_and_wait(
        '而且既然大家都愿意支持我的话，我应该也能跑得更快吧？',
      );
      await era.printAndWait([
        '应该是那样没错吧？面对 ',
        urara.get_colored_name(),
        '，',
        me.get_colored_name(),
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
      me.get_colored_name(),
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
        me.get_colored_name(),
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
    await in_urara.say_as_unknown_and_wait(
      '之后的日子里，虽然并不知道应援会的后续如何，但乌拉拉的粉丝数却悄然增加了。',
    );
    await in_urara.say_as_unknown_and_wait([
      '不过因为经历所致，训练员',
      me.get_adult_sex_title(),
      '（您）其实没太意外。',
    ]);
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '夸张点说，所有人都喜欢的乌拉拉，大概在某一天会变成理所当然的事吧？',
    );
    await in_urara.say_as_unknown_and_wait([
      '只要',
      urara.sex,
      '和往常一样，不去介意外界变化带来的压力就好了吧……虽然毕竟是乌拉拉……',
    ]);
    await in_urara.say_as_unknown_and_wait('搞什么啊，又不是新○茜。');
    edu_marks.fan_buff += 5;
    era.println();
    flags.wait_flag =
      get_attr_and_print_in_event(52, new Array(5).fill(3), 20) ||
      flags.wait_flag;
    flags.wait_flag =
      sys_like_chara(52, 0, 10 * (ret === 1), true, 5 * (ret === 2)) ||
      flags.wait_flag;
  };

  handlers[95 + 14] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    flags,
  ) => {
    await print_event_name('粉丝感谢祭！', urara);
    edu_marks.fan_buff += 5;
    await era.printAndWait([
      '站在观众席的边缘，',
      me.get_colored_name(),
      ' 一如既往的等待着运动场另一头的小',
      urara.uma_sex_title,
      '摇摇晃晃地向 ',
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      me.get_colored_name(),
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
      '「这可不行，我可不能让自己的担当被别人随便看身体啊。」（爱慕+5）',
      2,
    );
    const ret = await era.input();
    if (era.get('love:52') >= 50) {
      await era.printAndWait([
        '压抑着自己面对身边这位无意间泼洒着魅惑的「小大人」时砰砰直跳地心脏，',
        me.get_colored_name(),
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
        me.get_colored_name(),
        ' 的回应后，故意将柔软的身体倚靠着 ',
        me.get_colored_name(),
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
        me.get_colored_name(),
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
        me.get_colored_name(),
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
        me.get_colored_name(),
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
      me.get_colored_name(),
      ' 向',
      urara.sex,
      '提出了继续休息的建议。',
    ]);
    await urara.say_and_wait(
      '不用了，大家都在等着我，而且今天也是粉丝感谢祭，所以让就让乌拉拉跑个够吧！',
    );
    await era.printAndWait([
      '尽管听懂了 ',
      me.get_colored_name(),
      ' 的担忧，但准备出战的小',
      urara.uma_sex_title,
      '还是笑着将外套重新塞回了 ',
      me.get_colored_name(),
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
    await in_urara.say_as_unknown_and_wait([
      '您还是很担心吧？大家对乌拉拉的爱意氛围逐渐狂热，但',
      urara.sex,
      '却还是懵懂无知？',
    ]);
    await era.printAndWait([
      '在突然慢下来的灰白世界中，',
      me.get_colored_name(),
      ' 的身边再次传来了已经熟悉到几乎能当成「担当的家长」的声音。',
    ]);

    era.printButton(
      '「不担心是不可能的，但这本来就是条充满泥泞的道路，而且我也挺有自信的。」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '是啊，看到现在认真起来的乌拉拉，就连我都产生了多余的信心呢。',
    );
    await in_urara.say_as_unknown_and_wait([
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

    await in_urara.say_as_unknown_and_wait(
      '因为没什么好说的啊，『错误的好意比恶意还难以应付』，我今天只是来告诉您这一点。',
    );
    await era.printAndWait([
      '头也不回地以看似无关的话与 ',
      me.get_colored_name(),
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
    if (RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin) {
      await era.printAndWait([
        '如果可以借此继续增加粉丝数，那距离超越有马的梦想也能更近一步，',
        urara.get_colored_name(),
        ' 大概是因此而认真起来。',
      ]);
      await era.printAndWait([
        '但正如「',
        urara.sex,
        '」在离开前所说，仔细观察着观众们的反应，',
        me.get_colored_name(),
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
        me.get_colored_name(),
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
        me.get_colored_name(),
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
      me.get_colored_name(),
      ' 的思绪。开心到连脸上的泥都顾不上擦，',
      urara.get_colored_name(),
      ' 正拿着相机兴奋地向 ',
      me.get_colored_name(),
      ' 跑来。',
    ]);

    era.printButton('「啊，好的，交给我吧！」', 1);
    await era.input();

    await era.printAndWait([
      '在最后撇了一眼几位观众的背影，',
      me.get_colored_name(),
      ' 无奈地摇摇头，随后笑着接过了 ',
      urara.get_colored_name(),
      ' 递来的相机——',
    ]);
    await era.printAndWait([
      '总而言之，在 ',
      urara.get_colored_name(),
      ' 认真地活跃中，粉丝感谢祭就这样顺利地落幕了。',
    ]);
    era.set('cflag:52:节日事件标记', 0);
    era.println();
    flags.wait_flag = sys_like_chara(
      52,
      0,
      10 * (ret === 1),
      true,
      5 * (ret === 2),
    );
  };
};
